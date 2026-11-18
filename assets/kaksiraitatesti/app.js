var eo = { exports: {} }, br = {}, to = { exports: {} }, re = {};
var Va;
function ad() {
  if (Va) return re;
  Va = 1;
  var c = /* @__PURE__ */ Symbol.for("react.element"), o = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), T = /* @__PURE__ */ Symbol.for("react.provider"), S = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), G = Symbol.iterator;
  function X(h) {
    return h === null || typeof h != "object" ? null : (h = G && h[G] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var le = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, J = Object.assign, j = {};
  function D(h, E, ee) {
    this.props = h, this.context = E, this.refs = j, this.updater = ee || le;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(h, E) {
    if (typeof h != "object" && typeof h != "function" && h != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, h, E, "setState");
  }, D.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function se() {
  }
  se.prototype = D.prototype;
  function Ie(h, E, ee) {
    this.props = h, this.context = E, this.refs = j, this.updater = ee || le;
  }
  var de = Ie.prototype = new se();
  de.constructor = Ie, J(de, D.prototype), de.isPureReactComponent = !0;
  var ge = Array.isArray, xe = Object.prototype.hasOwnProperty, Le = { current: null }, Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Fe(h, E, ee) {
    var ne, ae = {}, ue = null, he = null;
    if (E != null) for (ne in E.ref !== void 0 && (he = E.ref), E.key !== void 0 && (ue = "" + E.key), E) xe.call(E, ne) && !Te.hasOwnProperty(ne) && (ae[ne] = E[ne]);
    var oe = arguments.length - 2;
    if (oe === 1) ae.children = ee;
    else if (1 < oe) {
      for (var me = Array(oe), q = 0; q < oe; q++) me[q] = arguments[q + 2];
      ae.children = me;
    }
    if (h && h.defaultProps) for (ne in oe = h.defaultProps, oe) ae[ne] === void 0 && (ae[ne] = oe[ne]);
    return { $$typeof: c, type: h, key: ue, ref: he, props: ae, _owner: Le.current };
  }
  function Ke(h, E) {
    return { $$typeof: c, type: h.type, key: E, ref: h.ref, props: h.props, _owner: h._owner };
  }
  function Ae(h) {
    return typeof h == "object" && h !== null && h.$$typeof === c;
  }
  function qe(h) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(ee) {
      return E[ee];
    });
  }
  var pt = /\/+/g;
  function je(h, E) {
    return typeof h == "object" && h !== null && h.key != null ? qe("" + h.key) : E.toString(36);
  }
  function ot(h, E, ee, ne, ae) {
    var ue = typeof h;
    (ue === "undefined" || ue === "boolean") && (h = null);
    var he = !1;
    if (h === null) he = !0;
    else switch (ue) {
      case "string":
      case "number":
        he = !0;
        break;
      case "object":
        switch (h.$$typeof) {
          case c:
          case o:
            he = !0;
        }
    }
    if (he) return he = h, ae = ae(he), h = ne === "" ? "." + je(he, 0) : ne, ge(ae) ? (ee = "", h != null && (ee = h.replace(pt, "$&/") + "/"), ot(ae, E, ee, "", function(q) {
      return q;
    })) : ae != null && (Ae(ae) && (ae = Ke(ae, ee + (!ae.key || he && he.key === ae.key ? "" : ("" + ae.key).replace(pt, "$&/") + "/") + h)), E.push(ae)), 1;
    if (he = 0, ne = ne === "" ? "." : ne + ":", ge(h)) for (var oe = 0; oe < h.length; oe++) {
      ue = h[oe];
      var me = ne + je(ue, oe);
      he += ot(ue, E, ee, me, ae);
    }
    else if (me = X(h), typeof me == "function") for (h = me.call(h), oe = 0; !(ue = h.next()).done; ) ue = ue.value, me = ne + je(ue, oe++), he += ot(ue, E, ee, me, ae);
    else if (ue === "object") throw E = String(h), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return he;
  }
  function ht(h, E, ee) {
    if (h == null) return h;
    var ne = [], ae = 0;
    return ot(h, ne, "", "", function(ue) {
      return E.call(ee, ue, ae++);
    }), ne;
  }
  function Ve(h) {
    if (h._status === -1) {
      var E = h._result;
      E = E(), E.then(function(ee) {
        (h._status === 0 || h._status === -1) && (h._status = 1, h._result = ee);
      }, function(ee) {
        (h._status === 0 || h._status === -1) && (h._status = 2, h._result = ee);
      }), h._status === -1 && (h._status = 0, h._result = E);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var ie = { current: null }, R = { transition: null }, Q = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: R, ReactCurrentOwner: Le };
  function O() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return re.Children = { map: ht, forEach: function(h, E, ee) {
    ht(h, function() {
      E.apply(this, arguments);
    }, ee);
  }, count: function(h) {
    var E = 0;
    return ht(h, function() {
      E++;
    }), E;
  }, toArray: function(h) {
    return ht(h, function(E) {
      return E;
    }) || [];
  }, only: function(h) {
    if (!Ae(h)) throw Error("React.Children.only expected to receive a single React element child.");
    return h;
  } }, re.Component = D, re.Fragment = s, re.Profiler = g, re.PureComponent = Ie, re.StrictMode = k, re.Suspense = L, re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, re.act = O, re.cloneElement = function(h, E, ee) {
    if (h == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
    var ne = J({}, h.props), ae = h.key, ue = h.ref, he = h._owner;
    if (E != null) {
      if (E.ref !== void 0 && (ue = E.ref, he = Le.current), E.key !== void 0 && (ae = "" + E.key), h.type && h.type.defaultProps) var oe = h.type.defaultProps;
      for (me in E) xe.call(E, me) && !Te.hasOwnProperty(me) && (ne[me] = E[me] === void 0 && oe !== void 0 ? oe[me] : E[me]);
    }
    var me = arguments.length - 2;
    if (me === 1) ne.children = ee;
    else if (1 < me) {
      oe = Array(me);
      for (var q = 0; q < me; q++) oe[q] = arguments[q + 2];
      ne.children = oe;
    }
    return { $$typeof: c, type: h.type, key: ae, ref: ue, props: ne, _owner: he };
  }, re.createContext = function(h) {
    return h = { $$typeof: S, _currentValue: h, _currentValue2: h, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, h.Provider = { $$typeof: T, _context: h }, h.Consumer = h;
  }, re.createElement = Fe, re.createFactory = function(h) {
    var E = Fe.bind(null, h);
    return E.type = h, E;
  }, re.createRef = function() {
    return { current: null };
  }, re.forwardRef = function(h) {
    return { $$typeof: M, render: h };
  }, re.isValidElement = Ae, re.lazy = function(h) {
    return { $$typeof: $, _payload: { _status: -1, _result: h }, _init: Ve };
  }, re.memo = function(h, E) {
    return { $$typeof: V, type: h, compare: E === void 0 ? null : E };
  }, re.startTransition = function(h) {
    var E = R.transition;
    R.transition = {};
    try {
      h();
    } finally {
      R.transition = E;
    }
  }, re.unstable_act = O, re.useCallback = function(h, E) {
    return ie.current.useCallback(h, E);
  }, re.useContext = function(h) {
    return ie.current.useContext(h);
  }, re.useDebugValue = function() {
  }, re.useDeferredValue = function(h) {
    return ie.current.useDeferredValue(h);
  }, re.useEffect = function(h, E) {
    return ie.current.useEffect(h, E);
  }, re.useId = function() {
    return ie.current.useId();
  }, re.useImperativeHandle = function(h, E, ee) {
    return ie.current.useImperativeHandle(h, E, ee);
  }, re.useInsertionEffect = function(h, E) {
    return ie.current.useInsertionEffect(h, E);
  }, re.useLayoutEffect = function(h, E) {
    return ie.current.useLayoutEffect(h, E);
  }, re.useMemo = function(h, E) {
    return ie.current.useMemo(h, E);
  }, re.useReducer = function(h, E, ee) {
    return ie.current.useReducer(h, E, ee);
  }, re.useRef = function(h) {
    return ie.current.useRef(h);
  }, re.useState = function(h) {
    return ie.current.useState(h);
  }, re.useSyncExternalStore = function(h, E, ee) {
    return ie.current.useSyncExternalStore(h, E, ee);
  }, re.useTransition = function() {
    return ie.current.useTransition();
  }, re.version = "18.3.1", re;
}
var Ba;
function ao() {
  return Ba || (Ba = 1, to.exports = ad()), to.exports;
}
var Ha;
function cd() {
  if (Ha) return br;
  Ha = 1;
  var c = ao(), o = /* @__PURE__ */ Symbol.for("react.element"), s = /* @__PURE__ */ Symbol.for("react.fragment"), k = Object.prototype.hasOwnProperty, g = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(M, L, V) {
    var $, G = {}, X = null, le = null;
    V !== void 0 && (X = "" + V), L.key !== void 0 && (X = "" + L.key), L.ref !== void 0 && (le = L.ref);
    for ($ in L) k.call(L, $) && !T.hasOwnProperty($) && (G[$] = L[$]);
    if (M && M.defaultProps) for ($ in L = M.defaultProps, L) G[$] === void 0 && (G[$] = L[$]);
    return { $$typeof: o, type: M, key: X, ref: le, props: G, _owner: g.current };
  }
  return br.Fragment = s, br.jsx = S, br.jsxs = S, br;
}
var Qa;
function fd() {
  return Qa || (Qa = 1, eo.exports = cd()), eo.exports;
}
var F = fd(), hi = {}, no = { exports: {} }, ut = {}, ro = { exports: {} }, lo = {};
var Ka;
function dd() {
  return Ka || (Ka = 1, (function(c) {
    function o(R, Q) {
      var O = R.length;
      R.push(Q);
      e: for (; 0 < O; ) {
        var h = O - 1 >>> 1, E = R[h];
        if (0 < g(E, Q)) R[h] = Q, R[O] = E, O = h;
        else break e;
      }
    }
    function s(R) {
      return R.length === 0 ? null : R[0];
    }
    function k(R) {
      if (R.length === 0) return null;
      var Q = R[0], O = R.pop();
      if (O !== Q) {
        R[0] = O;
        e: for (var h = 0, E = R.length, ee = E >>> 1; h < ee; ) {
          var ne = 2 * (h + 1) - 1, ae = R[ne], ue = ne + 1, he = R[ue];
          if (0 > g(ae, O)) ue < E && 0 > g(he, ae) ? (R[h] = he, R[ue] = O, h = ue) : (R[h] = ae, R[ne] = O, h = ne);
          else if (ue < E && 0 > g(he, O)) R[h] = he, R[ue] = O, h = ue;
          else break e;
        }
      }
      return Q;
    }
    function g(R, Q) {
      var O = R.sortIndex - Q.sortIndex;
      return O !== 0 ? O : R.id - Q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var T = performance;
      c.unstable_now = function() {
        return T.now();
      };
    } else {
      var S = Date, M = S.now();
      c.unstable_now = function() {
        return S.now() - M;
      };
    }
    var L = [], V = [], $ = 1, G = null, X = 3, le = !1, J = !1, j = !1, D = typeof setTimeout == "function" ? setTimeout : null, se = typeof clearTimeout == "function" ? clearTimeout : null, Ie = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function de(R) {
      for (var Q = s(V); Q !== null; ) {
        if (Q.callback === null) k(V);
        else if (Q.startTime <= R) k(V), Q.sortIndex = Q.expirationTime, o(L, Q);
        else break;
        Q = s(V);
      }
    }
    function ge(R) {
      if (j = !1, de(R), !J) if (s(L) !== null) J = !0, Ve(xe);
      else {
        var Q = s(V);
        Q !== null && ie(ge, Q.startTime - R);
      }
    }
    function xe(R, Q) {
      J = !1, j && (j = !1, se(Fe), Fe = -1), le = !0;
      var O = X;
      try {
        for (de(Q), G = s(L); G !== null && (!(G.expirationTime > Q) || R && !qe()); ) {
          var h = G.callback;
          if (typeof h == "function") {
            G.callback = null, X = G.priorityLevel;
            var E = h(G.expirationTime <= Q);
            Q = c.unstable_now(), typeof E == "function" ? G.callback = E : G === s(L) && k(L), de(Q);
          } else k(L);
          G = s(L);
        }
        if (G !== null) var ee = !0;
        else {
          var ne = s(V);
          ne !== null && ie(ge, ne.startTime - Q), ee = !1;
        }
        return ee;
      } finally {
        G = null, X = O, le = !1;
      }
    }
    var Le = !1, Te = null, Fe = -1, Ke = 5, Ae = -1;
    function qe() {
      return !(c.unstable_now() - Ae < Ke);
    }
    function pt() {
      if (Te !== null) {
        var R = c.unstable_now();
        Ae = R;
        var Q = !0;
        try {
          Q = Te(!0, R);
        } finally {
          Q ? je() : (Le = !1, Te = null);
        }
      } else Le = !1;
    }
    var je;
    if (typeof Ie == "function") je = function() {
      Ie(pt);
    };
    else if (typeof MessageChannel < "u") {
      var ot = new MessageChannel(), ht = ot.port2;
      ot.port1.onmessage = pt, je = function() {
        ht.postMessage(null);
      };
    } else je = function() {
      D(pt, 0);
    };
    function Ve(R) {
      Te = R, Le || (Le = !0, je());
    }
    function ie(R, Q) {
      Fe = D(function() {
        R(c.unstable_now());
      }, Q);
    }
    c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, c.unstable_continueExecution = function() {
      J || le || (J = !0, Ve(xe));
    }, c.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ke = 0 < R ? Math.floor(1e3 / R) : 5;
    }, c.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, c.unstable_getFirstCallbackNode = function() {
      return s(L);
    }, c.unstable_next = function(R) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = X;
      }
      var O = X;
      X = Q;
      try {
        return R();
      } finally {
        X = O;
      }
    }, c.unstable_pauseExecution = function() {
    }, c.unstable_requestPaint = function() {
    }, c.unstable_runWithPriority = function(R, Q) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var O = X;
      X = R;
      try {
        return Q();
      } finally {
        X = O;
      }
    }, c.unstable_scheduleCallback = function(R, Q, O) {
      var h = c.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? h + O : h) : O = h, R) {
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
      return E = O + E, R = { id: $++, callback: Q, priorityLevel: R, startTime: O, expirationTime: E, sortIndex: -1 }, O > h ? (R.sortIndex = O, o(V, R), s(L) === null && R === s(V) && (j ? (se(Fe), Fe = -1) : j = !0, ie(ge, O - h))) : (R.sortIndex = E, o(L, R), J || le || (J = !0, Ve(xe))), R;
    }, c.unstable_shouldYield = qe, c.unstable_wrapCallback = function(R) {
      var Q = X;
      return function() {
        var O = X;
        X = Q;
        try {
          return R.apply(this, arguments);
        } finally {
          X = O;
        }
      };
    };
  })(lo)), lo;
}
var Ya;
function pd() {
  return Ya || (Ya = 1, ro.exports = dd()), ro.exports;
}
var Xa;
function hd() {
  if (Xa) return ut;
  Xa = 1;
  var c = ao(), o = pd();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var k = /* @__PURE__ */ new Set(), g = {};
  function T(e, t) {
    S(e, t), S(e + "Capture", t);
  }
  function S(e, t) {
    for (g[e] = t, e = 0; e < t.length; e++) k.add(t[e]);
  }
  var M = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), L = Object.prototype.hasOwnProperty, V = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, G = {};
  function X(e) {
    return L.call(G, e) ? !0 : L.call($, e) ? !1 : V.test(e) ? G[e] = !0 : ($[e] = !0, !1);
  }
  function le(e, t, n, r) {
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
  function J(e, t, n, r) {
    if (t === null || typeof t > "u" || le(e, t, n, r)) return !0;
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
  function j(e, t, n, r, l, i, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
  }
  var D = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    D[e] = new j(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    D[t] = new j(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    D[e] = new j(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    D[e] = new j(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    D[e] = new j(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    D[e] = new j(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    D[e] = new j(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    D[e] = new j(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    D[e] = new j(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var se = /[\-:]([a-z])/g;
  function Ie(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      se,
      Ie
    );
    D[t] = new j(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(se, Ie);
    D[t] = new j(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(se, Ie);
    D[t] = new j(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    D[e] = new j(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), D.xlinkHref = new j("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    D[e] = new j(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function de(e, t, n, r) {
    var l = D.hasOwnProperty(t) ? D[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (J(t, n, l, r) && (n = null), r || l === null ? X(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ge = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xe = /* @__PURE__ */ Symbol.for("react.element"), Le = /* @__PURE__ */ Symbol.for("react.portal"), Te = /* @__PURE__ */ Symbol.for("react.fragment"), Fe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ke = /* @__PURE__ */ Symbol.for("react.profiler"), Ae = /* @__PURE__ */ Symbol.for("react.provider"), qe = /* @__PURE__ */ Symbol.for("react.context"), pt = /* @__PURE__ */ Symbol.for("react.forward_ref"), je = /* @__PURE__ */ Symbol.for("react.suspense"), ot = /* @__PURE__ */ Symbol.for("react.suspense_list"), ht = /* @__PURE__ */ Symbol.for("react.memo"), Ve = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.offscreen"), R = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = R && e[R] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var O = Object.assign, h;
  function E(e) {
    if (h === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      h = t && t[1] || "";
    }
    return `
` + h + e;
  }
  var ee = !1;
  function ne(e, t) {
    if (!e || ee) return "";
    ee = !0;
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
        } catch (y) {
          var r = y;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (y) {
          r = y;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (y) {
          r = y;
        }
        e();
      }
    } catch (y) {
      if (y && r && typeof y.stack == "string") {
        for (var l = y.stack.split(`
`), i = r.stack.split(`
`), u = l.length - 1, a = i.length - 1; 1 <= u && 0 <= a && l[u] !== i[a]; ) a--;
        for (; 1 <= u && 0 <= a; u--, a--) if (l[u] !== i[a]) {
          if (u !== 1 || a !== 1)
            do
              if (u--, a--, 0 > a || l[u] !== i[a]) {
                var d = `
` + l[u].replace(" at new ", " at ");
                return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
              }
            while (1 <= u && 0 <= a);
          break;
        }
      }
    } finally {
      ee = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function ae(e) {
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
        return e = ne(e.type, !1), e;
      case 11:
        return e = ne(e.type.render, !1), e;
      case 1:
        return e = ne(e.type, !0), e;
      default:
        return "";
    }
  }
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case Le:
        return "Portal";
      case Ke:
        return "Profiler";
      case Fe:
        return "StrictMode";
      case je:
        return "Suspense";
      case ot:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case qe:
        return (e.displayName || "Context") + ".Consumer";
      case Ae:
        return (e._context.displayName || "Context") + ".Provider";
      case pt:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ht:
        return t = e.displayName || null, t !== null ? t : ue(e.type) || "Memo";
      case Ve:
        t = e._payload, e = e._init;
        try {
          return ue(e(t));
        } catch {
        }
    }
    return null;
  }
  function he(e) {
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
        return ue(t);
      case 8:
        return t === Fe ? "StrictMode" : "Mode";
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
  function oe(e) {
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
  function me(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function q(e) {
    var t = me(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, i = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(u) {
        r = "" + u, i.call(this, u);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Xt(e) {
    e._valueTracker || (e._valueTracker = q(e));
  }
  function nl(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = me(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function St(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wn(e, t) {
    var n = t.checked;
    return O({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function rl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = oe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Gt(e, t) {
    t = t.checked, t != null && de(e, "checked", t, !1);
  }
  function Vn(e, t) {
    Gt(e, t);
    var n = oe(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Dt(e, t.type, n) : t.hasOwnProperty("defaultValue") && Dt(e, t.type, oe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function pr(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Dt(e, t, n) {
    (t !== "number" || St(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var st = Array.isArray;
  function Et(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + oe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Zt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return O({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function hr(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (st(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: oe(n) };
  }
  function Bn(e, t) {
    var n = oe(t.value), r = oe(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function ll(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Sn(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function En(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Sn(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Jt, mr = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Jt = Jt || document.createElement("div"), Jt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jt.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function qt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var bt = {
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
  }, vr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(bt).forEach(function(e) {
    vr.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), bt[t] = bt[e];
    });
  });
  function Hn(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || bt.hasOwnProperty(e) && bt[e] ? ("" + t).trim() : t + "px";
  }
  function il(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Hn(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var xn = O({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function _n(e, t) {
    if (t) {
      if (xn[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Cn(e, t) {
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
  var It = null;
  function yr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var gr = null, At = null, en = null;
  function ul(e) {
    if (e = Ar(e)) {
      if (typeof gr != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = Pl(t), gr(e.stateNode, e.type, t));
    }
  }
  function kr(e) {
    At ? en ? en.push(e) : en = [e] : At = e;
  }
  function Ut() {
    if (At) {
      var e = At, t = en;
      if (en = At = null, ul(e), t) for (e = 0; e < t.length; e++) ul(t[e]);
    }
  }
  function ol(e, t) {
    return e(t);
  }
  function f() {
  }
  var w = !1;
  function P(e, t, n) {
    if (w) return e(t, n);
    w = !0;
    try {
      return ol(e, t, n);
    } finally {
      w = !1, (At !== null || en !== null) && (f(), Ut());
    }
  }
  function B(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Pl(n);
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
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var U = !1;
  if (M) try {
    var te = {};
    Object.defineProperty(te, "passive", { get: function() {
      U = !0;
    } }), window.addEventListener("test", te, te), window.removeEventListener("test", te, te);
  } catch {
    U = !1;
  }
  function ve(e, t, n, r, l, i, u, a, d) {
    var y = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, y);
    } catch (_) {
      this.onError(_);
    }
  }
  var Be = !1, Me = null, Ye = !1, Se = null, sl = { onError: function(e) {
    Be = !0, Me = e;
  } };
  function ki(e, t, n, r, l, i, u, a, d) {
    Be = !1, Me = null, ve.apply(sl, arguments);
  }
  function yc(e, t, n, r, l, i, u, a, d) {
    if (ki.apply(this, arguments), Be) {
      if (Be) {
        var y = Me;
        Be = !1, Me = null;
      } else throw Error(s(198));
      Ye || (Ye = !0, Se = y);
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
  function co(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function fo(e) {
    if (Tn(e) !== e) throw Error(s(188));
  }
  function gc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Tn(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return fo(l), e;
          if (i === r) return fo(l), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = l, r = i;
      else {
        for (var u = !1, a = l.child; a; ) {
          if (a === n) {
            u = !0, n = l, r = i;
            break;
          }
          if (a === r) {
            u = !0, r = l, n = i;
            break;
          }
          a = a.sibling;
        }
        if (!u) {
          for (a = i.child; a; ) {
            if (a === n) {
              u = !0, n = i, r = l;
              break;
            }
            if (a === r) {
              u = !0, r = i, n = l;
              break;
            }
            a = a.sibling;
          }
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function po(e) {
    return e = gc(e), e !== null ? ho(e) : null;
  }
  function ho(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ho(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var mo = o.unstable_scheduleCallback, vo = o.unstable_cancelCallback, kc = o.unstable_shouldYield, wc = o.unstable_requestPaint, Pe = o.unstable_now, Sc = o.unstable_getCurrentPriorityLevel, wi = o.unstable_ImmediatePriority, yo = o.unstable_UserBlockingPriority, al = o.unstable_NormalPriority, Ec = o.unstable_LowPriority, go = o.unstable_IdlePriority, cl = null, Rt = null;
  function xc(e) {
    if (Rt && typeof Rt.onCommitFiberRoot == "function") try {
      Rt.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var xt = Math.clz32 ? Math.clz32 : Tc, _c = Math.log, Cc = Math.LN2;
  function Tc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_c(e) / Cc | 0) | 0;
  }
  var fl = 64, dl = 4194304;
  function wr(e) {
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
  function pl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, i = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var a = u & ~l;
      a !== 0 ? r = wr(a) : (i &= u, i !== 0 && (r = wr(i)));
    } else u = n & ~l, u !== 0 ? r = wr(u) : i !== 0 && (r = wr(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - xt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Mc(e, t) {
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
  function Nc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
      var u = 31 - xt(i), a = 1 << u, d = l[u];
      d === -1 ? ((a & n) === 0 || (a & r) !== 0) && (l[u] = Mc(a, t)) : d <= t && (e.expiredLanes |= a), i &= ~a;
    }
  }
  function Si(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ko() {
    var e = fl;
    return fl <<= 1, (fl & 4194240) === 0 && (fl = 64), e;
  }
  function Ei(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Sr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - xt(t), e[t] = n;
  }
  function Pc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - xt(n), i = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
    }
  }
  function xi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - xt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var pe = 0;
  function wo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var So, _i, Eo, xo, _o, Ci = !1, hl = [], tn = null, nn = null, rn = null, Er = /* @__PURE__ */ new Map(), xr = /* @__PURE__ */ new Map(), ln = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Co(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        nn = null;
        break;
      case "mouseover":
      case "mouseout":
        rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Er.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xr.delete(t.pointerId);
    }
  }
  function _r(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = Ar(t), t !== null && _i(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Lc(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return tn = _r(tn, e, t, n, r, l), !0;
      case "dragenter":
        return nn = _r(nn, e, t, n, r, l), !0;
      case "mouseover":
        return rn = _r(rn, e, t, n, r, l), !0;
      case "pointerover":
        var i = l.pointerId;
        return Er.set(i, _r(Er.get(i) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return i = l.pointerId, xr.set(i, _r(xr.get(i) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function To(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var n = Tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = co(n), t !== null) {
            e.blockedOn = t, _o(e.priority, function() {
              Eo(n);
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
  function ml(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        It = r, n.target.dispatchEvent(r), It = null;
      } else return t = Ar(n), t !== null && _i(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Mo(e, t, n) {
    ml(e) && n.delete(t);
  }
  function jc() {
    Ci = !1, tn !== null && ml(tn) && (tn = null), nn !== null && ml(nn) && (nn = null), rn !== null && ml(rn) && (rn = null), Er.forEach(Mo), xr.forEach(Mo);
  }
  function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Ci || (Ci = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, jc)));
  }
  function Tr(e) {
    function t(l) {
      return Cr(l, e);
    }
    if (0 < hl.length) {
      Cr(hl[0], e);
      for (var n = 1; n < hl.length; n++) {
        var r = hl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (tn !== null && Cr(tn, e), nn !== null && Cr(nn, e), rn !== null && Cr(rn, e), Er.forEach(t), xr.forEach(t), n = 0; n < ln.length; n++) r = ln[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ln.length && (n = ln[0], n.blockedOn === null); ) To(n), n.blockedOn === null && ln.shift();
  }
  var Qn = ge.ReactCurrentBatchConfig, vl = !0;
  function zc(e, t, n, r) {
    var l = pe, i = Qn.transition;
    Qn.transition = null;
    try {
      pe = 1, Ti(e, t, n, r);
    } finally {
      pe = l, Qn.transition = i;
    }
  }
  function Fc(e, t, n, r) {
    var l = pe, i = Qn.transition;
    Qn.transition = null;
    try {
      pe = 4, Ti(e, t, n, r);
    } finally {
      pe = l, Qn.transition = i;
    }
  }
  function Ti(e, t, n, r) {
    if (vl) {
      var l = Mi(e, t, n, r);
      if (l === null) Hi(e, t, r, yl, n), Co(e, r);
      else if (Lc(l, e, t, n, r)) r.stopPropagation();
      else if (Co(e, r), t & 4 && -1 < Rc.indexOf(e)) {
        for (; l !== null; ) {
          var i = Ar(l);
          if (i !== null && So(i), i = Mi(e, t, n, r), i === null && Hi(e, t, r, yl, n), i === l) break;
          l = i;
        }
        l !== null && r.stopPropagation();
      } else Hi(e, t, r, null, n);
    }
  }
  var yl = null;
  function Mi(e, t, n, r) {
    if (yl = null, e = yr(r), e = Mn(e), e !== null) if (t = Tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = co(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return yl = e, null;
  }
  function No(e) {
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
        switch (Sc()) {
          case wi:
            return 1;
          case yo:
            return 4;
          case al:
          case Ec:
            return 16;
          case go:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var un = null, Ni = null, gl = null;
  function Po() {
    if (gl) return gl;
    var e, t = Ni, n = t.length, r, l = "value" in un ? un.value : un.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[i - r]; r++) ;
    return gl = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function kl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function wl() {
    return !0;
  }
  function Ro() {
    return !1;
  }
  function at(e) {
    function t(n, r, l, i, u) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? wl : Ro, this.isPropagationStopped = Ro, this;
    }
    return O(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wl);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wl);
    }, persist: function() {
    }, isPersistent: wl }), t;
  }
  var Kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pi = at(Kn), Mr = O({}, Kn, { view: 0, detail: 0 }), Oc = at(Mr), Ri, Li, Nr, Sl = O({}, Mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zi, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Nr && (Nr && e.type === "mousemove" ? (Ri = e.screenX - Nr.screenX, Li = e.screenY - Nr.screenY) : Li = Ri = 0, Nr = e), Ri);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Li;
  } }), Lo = at(Sl), Dc = O({}, Sl, { dataTransfer: 0 }), Ic = at(Dc), Ac = O({}, Mr, { relatedTarget: 0 }), ji = at(Ac), Uc = O({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), $c = at(Uc), Wc = O({}, Kn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Vc = at(Wc), Bc = O({}, Kn, { data: 0 }), jo = at(Bc), Hc = {
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
  }, Qc = {
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
  }, Kc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Yc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Kc[e]) ? !!t[e] : !1;
  }
  function zi() {
    return Yc;
  }
  var Xc = O({}, Mr, { key: function(e) {
    if (e.key) {
      var t = Hc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = kl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zi, charCode: function(e) {
    return e.type === "keypress" ? kl(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? kl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Gc = at(Xc), Zc = O({}, Sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), zo = at(Zc), Jc = O({}, Mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zi }), qc = at(Jc), bc = O({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ef = at(bc), tf = O({}, Sl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), nf = at(tf), rf = [9, 13, 27, 32], Fi = M && "CompositionEvent" in window, Pr = null;
  M && "documentMode" in document && (Pr = document.documentMode);
  var lf = M && "TextEvent" in window && !Pr, Fo = M && (!Fi || Pr && 8 < Pr && 11 >= Pr), Oo = " ", Do = !1;
  function Io(e, t) {
    switch (e) {
      case "keyup":
        return rf.indexOf(t.keyCode) !== -1;
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
  function Ao(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Yn = !1;
  function uf(e, t) {
    switch (e) {
      case "compositionend":
        return Ao(t);
      case "keypress":
        return t.which !== 32 ? null : (Do = !0, Oo);
      case "textInput":
        return e = t.data, e === Oo && Do ? null : e;
      default:
        return null;
    }
  }
  function of(e, t) {
    if (Yn) return e === "compositionend" || !Fi && Io(e, t) ? (e = Po(), gl = Ni = un = null, Yn = !1, e) : null;
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
        return Fo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Uo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sf[e.type] : t === "textarea";
  }
  function $o(e, t, n, r) {
    kr(r), t = Tl(t, "onChange"), 0 < t.length && (n = new Pi("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Rr = null, Lr = null;
  function af(e) {
    ls(e, 0);
  }
  function El(e) {
    var t = qn(e);
    if (nl(t)) return e;
  }
  function cf(e, t) {
    if (e === "change") return t;
  }
  var Wo = !1;
  if (M) {
    var Oi;
    if (M) {
      var Di = "oninput" in document;
      if (!Di) {
        var Vo = document.createElement("div");
        Vo.setAttribute("oninput", "return;"), Di = typeof Vo.oninput == "function";
      }
      Oi = Di;
    } else Oi = !1;
    Wo = Oi && (!document.documentMode || 9 < document.documentMode);
  }
  function Bo() {
    Rr && (Rr.detachEvent("onpropertychange", Ho), Lr = Rr = null);
  }
  function Ho(e) {
    if (e.propertyName === "value" && El(Lr)) {
      var t = [];
      $o(t, Lr, e, yr(e)), P(af, t);
    }
  }
  function ff(e, t, n) {
    e === "focusin" ? (Bo(), Rr = t, Lr = n, Rr.attachEvent("onpropertychange", Ho)) : e === "focusout" && Bo();
  }
  function df(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return El(Lr);
  }
  function pf(e, t) {
    if (e === "click") return El(t);
  }
  function hf(e, t) {
    if (e === "input" || e === "change") return El(t);
  }
  function mf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var _t = typeof Object.is == "function" ? Object.is : mf;
  function jr(e, t) {
    if (_t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!L.call(t, l) || !_t(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Qo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ko(e, t) {
    var n = Qo(e);
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
      n = Qo(n);
    }
  }
  function Yo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Xo() {
    for (var e = window, t = St(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = St(e.document);
    }
    return t;
  }
  function Ii(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function vf(e) {
    var t = Xo(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Yo(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ii(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, i = Math.min(r.start, l);
          r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ko(n, i);
          var u = Ko(
            n,
            r
          );
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var yf = M && "documentMode" in document && 11 >= document.documentMode, Xn = null, Ai = null, zr = null, Ui = !1;
  function Go(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ui || Xn == null || Xn !== St(r) || (r = Xn, "selectionStart" in r && Ii(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), zr && jr(zr, r) || (zr = r, r = Tl(Ai, "onSelect"), 0 < r.length && (t = new Pi("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xn)));
  }
  function xl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Gn = { animationend: xl("Animation", "AnimationEnd"), animationiteration: xl("Animation", "AnimationIteration"), animationstart: xl("Animation", "AnimationStart"), transitionend: xl("Transition", "TransitionEnd") }, $i = {}, Zo = {};
  M && (Zo = document.createElement("div").style, "AnimationEvent" in window || (delete Gn.animationend.animation, delete Gn.animationiteration.animation, delete Gn.animationstart.animation), "TransitionEvent" in window || delete Gn.transitionend.transition);
  function _l(e) {
    if ($i[e]) return $i[e];
    if (!Gn[e]) return e;
    var t = Gn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Zo) return $i[e] = t[n];
    return e;
  }
  var Jo = _l("animationend"), qo = _l("animationiteration"), bo = _l("animationstart"), es = _l("transitionend"), ts = /* @__PURE__ */ new Map(), ns = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function on(e, t) {
    ts.set(e, t), T(t, [e]);
  }
  for (var Wi = 0; Wi < ns.length; Wi++) {
    var Vi = ns[Wi], gf = Vi.toLowerCase(), kf = Vi[0].toUpperCase() + Vi.slice(1);
    on(gf, "on" + kf);
  }
  on(Jo, "onAnimationEnd"), on(qo, "onAnimationIteration"), on(bo, "onAnimationStart"), on("dblclick", "onDoubleClick"), on("focusin", "onFocus"), on("focusout", "onBlur"), on(es, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), T("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), T("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), T("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), T("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), T("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), wf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));
  function rs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, yc(r, t, void 0, e), e.currentTarget = null;
  }
  function ls(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var a = r[u], d = a.instance, y = a.currentTarget;
          if (a = a.listener, d !== i && l.isPropagationStopped()) break e;
          rs(l, a, y), i = d;
        }
        else for (u = 0; u < r.length; u++) {
          if (a = r[u], d = a.instance, y = a.currentTarget, a = a.listener, d !== i && l.isPropagationStopped()) break e;
          rs(l, a, y), i = d;
        }
      }
    }
    if (Ye) throw e = Se, Ye = !1, Se = null, e;
  }
  function ke(e, t) {
    var n = t[Zi];
    n === void 0 && (n = t[Zi] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (is(t, e, 2, !1), n.add(r));
  }
  function Bi(e, t, n) {
    var r = 0;
    t && (r |= 4), is(n, e, r, t);
  }
  var Cl = "_reactListening" + Math.random().toString(36).slice(2);
  function Or(e) {
    if (!e[Cl]) {
      e[Cl] = !0, k.forEach(function(n) {
        n !== "selectionchange" && (wf.has(n) || Bi(n, !1, e), Bi(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Cl] || (t[Cl] = !0, Bi("selectionchange", !1, t));
    }
  }
  function is(e, t, n, r) {
    switch (No(t)) {
      case 1:
        var l = zc;
        break;
      case 4:
        l = Fc;
        break;
      default:
        l = Ti;
    }
    n = l.bind(null, t, n, e), l = void 0, !U || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Hi(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || a.nodeType === 8 && a.parentNode === l) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var d = u.tag;
          if ((d === 3 || d === 4) && (d = u.stateNode.containerInfo, d === l || d.nodeType === 8 && d.parentNode === l)) return;
          u = u.return;
        }
        for (; a !== null; ) {
          if (u = Mn(a), u === null) return;
          if (d = u.tag, d === 5 || d === 6) {
            r = i = u;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
    P(function() {
      var y = i, _ = yr(n), C = [];
      e: {
        var x = ts.get(e);
        if (x !== void 0) {
          var z = Pi, A = e;
          switch (e) {
            case "keypress":
              if (kl(n) === 0) break e;
            case "keydown":
            case "keyup":
              z = Gc;
              break;
            case "focusin":
              A = "focus", z = ji;
              break;
            case "focusout":
              A = "blur", z = ji;
              break;
            case "beforeblur":
            case "afterblur":
              z = ji;
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
              z = Lo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = Ic;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = qc;
              break;
            case Jo:
            case qo:
            case bo:
              z = $c;
              break;
            case es:
              z = ef;
              break;
            case "scroll":
              z = Oc;
              break;
            case "wheel":
              z = nf;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = Vc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = zo;
          }
          var W = (t & 4) !== 0, Re = !W && e === "scroll", m = W ? x !== null ? x + "Capture" : null : x;
          W = [];
          for (var p = y, v; p !== null; ) {
            v = p;
            var N = v.stateNode;
            if (v.tag === 5 && N !== null && (v = N, m !== null && (N = B(p, m), N != null && W.push(Dr(p, N, v)))), Re) break;
            p = p.return;
          }
          0 < W.length && (x = new z(x, A, null, n, _), C.push({ event: x, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", x && n !== It && (A = n.relatedTarget || n.fromElement) && (Mn(A) || A[$t])) break e;
          if ((z || x) && (x = _.window === _ ? _ : (x = _.ownerDocument) ? x.defaultView || x.parentWindow : window, z ? (A = n.relatedTarget || n.toElement, z = y, A = A ? Mn(A) : null, A !== null && (Re = Tn(A), A !== Re || A.tag !== 5 && A.tag !== 6) && (A = null)) : (z = null, A = y), z !== A)) {
            if (W = Lo, N = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (W = zo, N = "onPointerLeave", m = "onPointerEnter", p = "pointer"), Re = z == null ? x : qn(z), v = A == null ? x : qn(A), x = new W(N, p + "leave", z, n, _), x.target = Re, x.relatedTarget = v, N = null, Mn(_) === y && (W = new W(m, p + "enter", A, n, _), W.target = v, W.relatedTarget = Re, N = W), Re = N, z && A) t: {
              for (W = z, m = A, p = 0, v = W; v; v = Zn(v)) p++;
              for (v = 0, N = m; N; N = Zn(N)) v++;
              for (; 0 < p - v; ) W = Zn(W), p--;
              for (; 0 < v - p; ) m = Zn(m), v--;
              for (; p--; ) {
                if (W === m || m !== null && W === m.alternate) break t;
                W = Zn(W), m = Zn(m);
              }
              W = null;
            }
            else W = null;
            z !== null && us(C, x, z, W, !1), A !== null && Re !== null && us(C, Re, A, W, !0);
          }
        }
        e: {
          if (x = y ? qn(y) : window, z = x.nodeName && x.nodeName.toLowerCase(), z === "select" || z === "input" && x.type === "file") var H = cf;
          else if (Uo(x)) if (Wo) H = hf;
          else {
            H = df;
            var K = ff;
          }
          else (z = x.nodeName) && z.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (H = pf);
          if (H && (H = H(e, y))) {
            $o(C, H, n, _);
            break e;
          }
          K && K(e, x, y), e === "focusout" && (K = x._wrapperState) && K.controlled && x.type === "number" && Dt(x, "number", x.value);
        }
        switch (K = y ? qn(y) : window, e) {
          case "focusin":
            (Uo(K) || K.contentEditable === "true") && (Xn = K, Ai = y, zr = null);
            break;
          case "focusout":
            zr = Ai = Xn = null;
            break;
          case "mousedown":
            Ui = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ui = !1, Go(C, n, _);
            break;
          case "selectionchange":
            if (yf) break;
          case "keydown":
          case "keyup":
            Go(C, n, _);
        }
        var Y;
        if (Fi) e: {
          switch (e) {
            case "compositionstart":
              var Z = "onCompositionStart";
              break e;
            case "compositionend":
              Z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Z = "onCompositionUpdate";
              break e;
          }
          Z = void 0;
        }
        else Yn ? Io(e, n) && (Z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Z = "onCompositionStart");
        Z && (Fo && n.locale !== "ko" && (Yn || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && Yn && (Y = Po()) : (un = _, Ni = "value" in un ? un.value : un.textContent, Yn = !0)), K = Tl(y, Z), 0 < K.length && (Z = new jo(Z, e, null, n, _), C.push({ event: Z, listeners: K }), Y ? Z.data = Y : (Y = Ao(n), Y !== null && (Z.data = Y)))), (Y = lf ? uf(e, n) : of(e, n)) && (y = Tl(y, "onBeforeInput"), 0 < y.length && (_ = new jo("onBeforeInput", "beforeinput", null, n, _), C.push({ event: _, listeners: y }), _.data = Y));
      }
      ls(C, t);
    });
  }
  function Dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Tl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, i = l.stateNode;
      l.tag === 5 && i !== null && (l = i, i = B(e, n), i != null && r.unshift(Dr(e, i, l)), i = B(e, t), i != null && r.push(Dr(e, i, l))), e = e.return;
    }
    return r;
  }
  function Zn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function us(e, t, n, r, l) {
    for (var i = t._reactName, u = []; n !== null && n !== r; ) {
      var a = n, d = a.alternate, y = a.stateNode;
      if (d !== null && d === r) break;
      a.tag === 5 && y !== null && (a = y, l ? (d = B(n, i), d != null && u.unshift(Dr(n, d, a))) : l || (d = B(n, i), d != null && u.push(Dr(n, d, a)))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Sf = /\r\n?/g, Ef = /\u0000|\uFFFD/g;
  function os(e) {
    return (typeof e == "string" ? e : "" + e).replace(Sf, `
`).replace(Ef, "");
  }
  function Ml(e, t, n) {
    if (t = os(t), os(e) !== t && n) throw Error(s(425));
  }
  function Nl() {
  }
  var Qi = null, Ki = null;
  function Yi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xi = typeof setTimeout == "function" ? setTimeout : void 0, xf = typeof clearTimeout == "function" ? clearTimeout : void 0, ss = typeof Promise == "function" ? Promise : void 0, _f = typeof queueMicrotask == "function" ? queueMicrotask : typeof ss < "u" ? function(e) {
    return ss.resolve(null).then(e).catch(Cf);
  } : Xi;
  function Cf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Gi(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Tr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Tr(t);
  }
  function sn(e) {
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
  function as(e) {
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
  var Jn = Math.random().toString(36).slice(2), Lt = "__reactFiber$" + Jn, Ir = "__reactProps$" + Jn, $t = "__reactContainer$" + Jn, Zi = "__reactEvents$" + Jn, Tf = "__reactListeners$" + Jn, Mf = "__reactHandles$" + Jn;
  function Mn(e) {
    var t = e[Lt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[$t] || n[Lt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = as(e); e !== null; ) {
          if (n = e[Lt]) return n;
          e = as(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ar(e) {
    return e = e[Lt] || e[$t], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function qn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Pl(e) {
    return e[Ir] || null;
  }
  var Ji = [], bn = -1;
  function an(e) {
    return { current: e };
  }
  function we(e) {
    0 > bn || (e.current = Ji[bn], Ji[bn] = null, bn--);
  }
  function ye(e, t) {
    bn++, Ji[bn] = e.current, e.current = t;
  }
  var cn = {}, Xe = an(cn), tt = an(!1), Nn = cn;
  function er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return cn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function nt(e) {
    return e = e.childContextTypes, e != null;
  }
  function Rl() {
    we(tt), we(Xe);
  }
  function cs(e, t, n) {
    if (Xe.current !== cn) throw Error(s(168));
    ye(Xe, t), ye(tt, n);
  }
  function fs(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(s(108, he(e) || "Unknown", l));
    return O({}, n, r);
  }
  function Ll(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || cn, Nn = Xe.current, ye(Xe, e), ye(tt, tt.current), !0;
  }
  function ds(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = fs(e, t, Nn), r.__reactInternalMemoizedMergedChildContext = e, we(tt), we(Xe), ye(Xe, e)) : we(tt), ye(tt, n);
  }
  var Wt = null, jl = !1, qi = !1;
  function ps(e) {
    Wt === null ? Wt = [e] : Wt.push(e);
  }
  function Nf(e) {
    jl = !0, ps(e);
  }
  function fn() {
    if (!qi && Wt !== null) {
      qi = !0;
      var e = 0, t = pe;
      try {
        var n = Wt;
        for (pe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Wt = null, jl = !1;
      } catch (l) {
        throw Wt !== null && (Wt = Wt.slice(e + 1)), mo(wi, fn), l;
      } finally {
        pe = t, qi = !1;
      }
    }
    return null;
  }
  var tr = [], nr = 0, zl = null, Fl = 0, mt = [], vt = 0, Pn = null, Vt = 1, Bt = "";
  function Rn(e, t) {
    tr[nr++] = Fl, tr[nr++] = zl, zl = e, Fl = t;
  }
  function hs(e, t, n) {
    mt[vt++] = Vt, mt[vt++] = Bt, mt[vt++] = Pn, Pn = e;
    var r = Vt;
    e = Bt;
    var l = 32 - xt(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - xt(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, Vt = 1 << 32 - xt(t) + l | n << l | r, Bt = i + e;
    } else Vt = 1 << i | n << l | r, Bt = e;
  }
  function bi(e) {
    e.return !== null && (Rn(e, 1), hs(e, 1, 0));
  }
  function eu(e) {
    for (; e === zl; ) zl = tr[--nr], tr[nr] = null, Fl = tr[--nr], tr[nr] = null;
    for (; e === Pn; ) Pn = mt[--vt], mt[vt] = null, Bt = mt[--vt], mt[vt] = null, Vt = mt[--vt], mt[vt] = null;
  }
  var ct = null, ft = null, Ee = !1, Ct = null;
  function ms(e, t) {
    var n = wt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function vs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ct = e, ft = sn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ct = e, ft = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Pn !== null ? { id: Vt, overflow: Bt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = wt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ct = e, ft = null, !0) : !1;
      default:
        return !1;
    }
  }
  function tu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function nu(e) {
    if (Ee) {
      var t = ft;
      if (t) {
        var n = t;
        if (!vs(e, t)) {
          if (tu(e)) throw Error(s(418));
          t = sn(n.nextSibling);
          var r = ct;
          t && vs(e, t) ? ms(r, n) : (e.flags = e.flags & -4097 | 2, Ee = !1, ct = e);
        }
      } else {
        if (tu(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, Ee = !1, ct = e;
      }
    }
  }
  function ys(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ct = e;
  }
  function Ol(e) {
    if (e !== ct) return !1;
    if (!Ee) return ys(e), Ee = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yi(e.type, e.memoizedProps)), t && (t = ft)) {
      if (tu(e)) throw gs(), Error(s(418));
      for (; t; ) ms(e, t), t = sn(t.nextSibling);
    }
    if (ys(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ft = sn(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ft = null;
      }
    } else ft = ct ? sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gs() {
    for (var e = ft; e; ) e = sn(e.nextSibling);
  }
  function rr() {
    ft = ct = null, Ee = !1;
  }
  function ru(e) {
    Ct === null ? Ct = [e] : Ct.push(e);
  }
  var Pf = ge.ReactCurrentBatchConfig;
  function Ur(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var l = r, i = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(u) {
          var a = l.refs;
          u === null ? delete a[i] : a[i] = u;
        }, t._stringRef = i, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Dl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ks(e) {
    var t = e._init;
    return t(e._payload);
  }
  function ws(e) {
    function t(m, p) {
      if (e) {
        var v = m.deletions;
        v === null ? (m.deletions = [p], m.flags |= 16) : v.push(p);
      }
    }
    function n(m, p) {
      if (!e) return null;
      for (; p !== null; ) t(m, p), p = p.sibling;
      return null;
    }
    function r(m, p) {
      for (m = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
      return m;
    }
    function l(m, p) {
      return m = kn(m, p), m.index = 0, m.sibling = null, m;
    }
    function i(m, p, v) {
      return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < p ? (m.flags |= 2, p) : v) : (m.flags |= 2, p)) : (m.flags |= 1048576, p);
    }
    function u(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, p, v, N) {
      return p === null || p.tag !== 6 ? (p = Xu(v, m.mode, N), p.return = m, p) : (p = l(p, v), p.return = m, p);
    }
    function d(m, p, v, N) {
      var H = v.type;
      return H === Te ? _(m, p, v.props.children, N, v.key) : p !== null && (p.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ve && ks(H) === p.type) ? (N = l(p, v.props), N.ref = Ur(m, p, v), N.return = m, N) : (N = ui(v.type, v.key, v.props, null, m.mode, N), N.ref = Ur(m, p, v), N.return = m, N);
    }
    function y(m, p, v, N) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Gu(v, m.mode, N), p.return = m, p) : (p = l(p, v.children || []), p.return = m, p);
    }
    function _(m, p, v, N, H) {
      return p === null || p.tag !== 7 ? (p = An(v, m.mode, N, H), p.return = m, p) : (p = l(p, v), p.return = m, p);
    }
    function C(m, p, v) {
      if (typeof p == "string" && p !== "" || typeof p == "number") return p = Xu("" + p, m.mode, v), p.return = m, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case xe:
            return v = ui(p.type, p.key, p.props, null, m.mode, v), v.ref = Ur(m, null, p), v.return = m, v;
          case Le:
            return p = Gu(p, m.mode, v), p.return = m, p;
          case Ve:
            var N = p._init;
            return C(m, N(p._payload), v);
        }
        if (st(p) || Q(p)) return p = An(p, m.mode, v, null), p.return = m, p;
        Dl(m, p);
      }
      return null;
    }
    function x(m, p, v, N) {
      var H = p !== null ? p.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return H !== null ? null : a(m, p, "" + v, N);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case xe:
            return v.key === H ? d(m, p, v, N) : null;
          case Le:
            return v.key === H ? y(m, p, v, N) : null;
          case Ve:
            return H = v._init, x(
              m,
              p,
              H(v._payload),
              N
            );
        }
        if (st(v) || Q(v)) return H !== null ? null : _(m, p, v, N, null);
        Dl(m, v);
      }
      return null;
    }
    function z(m, p, v, N, H) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return m = m.get(v) || null, a(p, m, "" + N, H);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case xe:
            return m = m.get(N.key === null ? v : N.key) || null, d(p, m, N, H);
          case Le:
            return m = m.get(N.key === null ? v : N.key) || null, y(p, m, N, H);
          case Ve:
            var K = N._init;
            return z(m, p, v, K(N._payload), H);
        }
        if (st(N) || Q(N)) return m = m.get(v) || null, _(p, m, N, H, null);
        Dl(p, N);
      }
      return null;
    }
    function A(m, p, v, N) {
      for (var H = null, K = null, Y = p, Z = p = 0, We = null; Y !== null && Z < v.length; Z++) {
        Y.index > Z ? (We = Y, Y = null) : We = Y.sibling;
        var fe = x(m, Y, v[Z], N);
        if (fe === null) {
          Y === null && (Y = We);
          break;
        }
        e && Y && fe.alternate === null && t(m, Y), p = i(fe, p, Z), K === null ? H = fe : K.sibling = fe, K = fe, Y = We;
      }
      if (Z === v.length) return n(m, Y), Ee && Rn(m, Z), H;
      if (Y === null) {
        for (; Z < v.length; Z++) Y = C(m, v[Z], N), Y !== null && (p = i(Y, p, Z), K === null ? H = Y : K.sibling = Y, K = Y);
        return Ee && Rn(m, Z), H;
      }
      for (Y = r(m, Y); Z < v.length; Z++) We = z(Y, m, Z, v[Z], N), We !== null && (e && We.alternate !== null && Y.delete(We.key === null ? Z : We.key), p = i(We, p, Z), K === null ? H = We : K.sibling = We, K = We);
      return e && Y.forEach(function(wn) {
        return t(m, wn);
      }), Ee && Rn(m, Z), H;
    }
    function W(m, p, v, N) {
      var H = Q(v);
      if (typeof H != "function") throw Error(s(150));
      if (v = H.call(v), v == null) throw Error(s(151));
      for (var K = H = null, Y = p, Z = p = 0, We = null, fe = v.next(); Y !== null && !fe.done; Z++, fe = v.next()) {
        Y.index > Z ? (We = Y, Y = null) : We = Y.sibling;
        var wn = x(m, Y, fe.value, N);
        if (wn === null) {
          Y === null && (Y = We);
          break;
        }
        e && Y && wn.alternate === null && t(m, Y), p = i(wn, p, Z), K === null ? H = wn : K.sibling = wn, K = wn, Y = We;
      }
      if (fe.done) return n(
        m,
        Y
      ), Ee && Rn(m, Z), H;
      if (Y === null) {
        for (; !fe.done; Z++, fe = v.next()) fe = C(m, fe.value, N), fe !== null && (p = i(fe, p, Z), K === null ? H = fe : K.sibling = fe, K = fe);
        return Ee && Rn(m, Z), H;
      }
      for (Y = r(m, Y); !fe.done; Z++, fe = v.next()) fe = z(Y, m, Z, fe.value, N), fe !== null && (e && fe.alternate !== null && Y.delete(fe.key === null ? Z : fe.key), p = i(fe, p, Z), K === null ? H = fe : K.sibling = fe, K = fe);
      return e && Y.forEach(function(sd) {
        return t(m, sd);
      }), Ee && Rn(m, Z), H;
    }
    function Re(m, p, v, N) {
      if (typeof v == "object" && v !== null && v.type === Te && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case xe:
            e: {
              for (var H = v.key, K = p; K !== null; ) {
                if (K.key === H) {
                  if (H = v.type, H === Te) {
                    if (K.tag === 7) {
                      n(m, K.sibling), p = l(K, v.props.children), p.return = m, m = p;
                      break e;
                    }
                  } else if (K.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Ve && ks(H) === K.type) {
                    n(m, K.sibling), p = l(K, v.props), p.ref = Ur(m, K, v), p.return = m, m = p;
                    break e;
                  }
                  n(m, K);
                  break;
                } else t(m, K);
                K = K.sibling;
              }
              v.type === Te ? (p = An(v.props.children, m.mode, N, v.key), p.return = m, m = p) : (N = ui(v.type, v.key, v.props, null, m.mode, N), N.ref = Ur(m, p, v), N.return = m, m = N);
            }
            return u(m);
          case Le:
            e: {
              for (K = v.key; p !== null; ) {
                if (p.key === K) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                  n(m, p.sibling), p = l(p, v.children || []), p.return = m, m = p;
                  break e;
                } else {
                  n(m, p);
                  break;
                }
                else t(m, p);
                p = p.sibling;
              }
              p = Gu(v, m.mode, N), p.return = m, m = p;
            }
            return u(m);
          case Ve:
            return K = v._init, Re(m, p, K(v._payload), N);
        }
        if (st(v)) return A(m, p, v, N);
        if (Q(v)) return W(m, p, v, N);
        Dl(m, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(m, p.sibling), p = l(p, v), p.return = m, m = p) : (n(m, p), p = Xu(v, m.mode, N), p.return = m, m = p), u(m)) : n(m, p);
    }
    return Re;
  }
  var lr = ws(!0), Ss = ws(!1), Il = an(null), Al = null, ir = null, lu = null;
  function iu() {
    lu = ir = Al = null;
  }
  function uu(e) {
    var t = Il.current;
    we(Il), e._currentValue = t;
  }
  function ou(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ur(e, t) {
    Al = e, lu = ir = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (rt = !0), e.firstContext = null);
  }
  function yt(e) {
    var t = e._currentValue;
    if (lu !== e) if (e = { context: e, memoizedValue: t, next: null }, ir === null) {
      if (Al === null) throw Error(s(308));
      ir = e, Al.dependencies = { lanes: 0, firstContext: e };
    } else ir = ir.next = e;
    return t;
  }
  var Ln = null;
  function su(e) {
    Ln === null ? Ln = [e] : Ln.push(e);
  }
  function Es(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, su(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ht(e, r);
  }
  function Ht(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var dn = !1;
  function au(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function xs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Qt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function pn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ce & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ht(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, su(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ht(e, n);
  }
  function Ul(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, xi(e, n);
    }
  }
  function _s(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          i === null ? l = i = u : i = i.next = u, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function $l(e, t, n, r) {
    var l = e.updateQueue;
    dn = !1;
    var i = l.firstBaseUpdate, u = l.lastBaseUpdate, a = l.shared.pending;
    if (a !== null) {
      l.shared.pending = null;
      var d = a, y = d.next;
      d.next = null, u === null ? i = y : u.next = y, u = d;
      var _ = e.alternate;
      _ !== null && (_ = _.updateQueue, a = _.lastBaseUpdate, a !== u && (a === null ? _.firstBaseUpdate = y : a.next = y, _.lastBaseUpdate = d));
    }
    if (i !== null) {
      var C = l.baseState;
      u = 0, _ = y = d = null, a = i;
      do {
        var x = a.lane, z = a.eventTime;
        if ((r & x) === x) {
          _ !== null && (_ = _.next = {
            eventTime: z,
            lane: 0,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null
          });
          e: {
            var A = e, W = a;
            switch (x = t, z = n, W.tag) {
              case 1:
                if (A = W.payload, typeof A == "function") {
                  C = A.call(z, C, x);
                  break e;
                }
                C = A;
                break e;
              case 3:
                A.flags = A.flags & -65537 | 128;
              case 0:
                if (A = W.payload, x = typeof A == "function" ? A.call(z, C, x) : A, x == null) break e;
                C = O({}, C, x);
                break e;
              case 2:
                dn = !0;
            }
          }
          a.callback !== null && a.lane !== 0 && (e.flags |= 64, x = l.effects, x === null ? l.effects = [a] : x.push(a));
        } else z = { eventTime: z, lane: x, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, _ === null ? (y = _ = z, d = C) : _ = _.next = z, u |= x;
        if (a = a.next, a === null) {
          if (a = l.shared.pending, a === null) break;
          x = a, a = x.next, x.next = null, l.lastBaseUpdate = x, l.shared.pending = null;
        }
      } while (!0);
      if (_ === null && (d = C), l.baseState = d, l.firstBaseUpdate = y, l.lastBaseUpdate = _, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          u |= l.lane, l = l.next;
        while (l !== t);
      } else i === null && (l.shared.lanes = 0);
      Fn |= u, e.lanes = u, e.memoizedState = C;
    }
  }
  function Cs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(s(191, l));
        l.call(r);
      }
    }
  }
  var $r = {}, jt = an($r), Wr = an($r), Vr = an($r);
  function jn(e) {
    if (e === $r) throw Error(s(174));
    return e;
  }
  function cu(e, t) {
    switch (ye(Vr, t), ye(Wr, e), ye(jt, $r), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : En(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = En(t, e);
    }
    we(jt), ye(jt, t);
  }
  function or() {
    we(jt), we(Wr), we(Vr);
  }
  function Ts(e) {
    jn(Vr.current);
    var t = jn(jt.current), n = En(t, e.type);
    t !== n && (ye(Wr, e), ye(jt, n));
  }
  function fu(e) {
    Wr.current === e && (we(jt), we(Wr));
  }
  var _e = an(0);
  function Wl(e) {
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
  var du = [];
  function pu() {
    for (var e = 0; e < du.length; e++) du[e]._workInProgressVersionPrimary = null;
    du.length = 0;
  }
  var Vl = ge.ReactCurrentDispatcher, hu = ge.ReactCurrentBatchConfig, zn = 0, Ce = null, Oe = null, Ue = null, Bl = !1, Br = !1, Hr = 0, Rf = 0;
  function Ge() {
    throw Error(s(321));
  }
  function mu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!_t(e[n], t[n])) return !1;
    return !0;
  }
  function vu(e, t, n, r, l, i) {
    if (zn = i, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Vl.current = e === null || e.memoizedState === null ? Ff : Of, e = n(r, l), Br) {
      i = 0;
      do {
        if (Br = !1, Hr = 0, 25 <= i) throw Error(s(301));
        i += 1, Ue = Oe = null, t.updateQueue = null, Vl.current = Df, e = n(r, l);
      } while (Br);
    }
    if (Vl.current = Kl, t = Oe !== null && Oe.next !== null, zn = 0, Ue = Oe = Ce = null, Bl = !1, t) throw Error(s(300));
    return e;
  }
  function yu() {
    var e = Hr !== 0;
    return Hr = 0, e;
  }
  function zt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ue === null ? Ce.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function gt() {
    if (Oe === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ue === null ? Ce.memoizedState : Ue.next;
    if (t !== null) Ue = t, Oe = e;
    else {
      if (e === null) throw Error(s(310));
      Oe = e, e = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, Ue === null ? Ce.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function Qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gu(e) {
    var t = gt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Oe, l = r.baseQueue, i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = i.next, i.next = u;
      }
      r.baseQueue = l = i, n.pending = null;
    }
    if (l !== null) {
      i = l.next, r = r.baseState;
      var a = u = null, d = null, y = i;
      do {
        var _ = y.lane;
        if ((zn & _) === _) d !== null && (d = d.next = { lane: 0, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), r = y.hasEagerState ? y.eagerState : e(r, y.action);
        else {
          var C = {
            lane: _,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          };
          d === null ? (a = d = C, u = r) : d = d.next = C, Ce.lanes |= _, Fn |= _;
        }
        y = y.next;
      } while (y !== null && y !== i);
      d === null ? u = r : d.next = a, _t(r, t.memoizedState) || (rt = !0), t.memoizedState = r, t.baseState = u, t.baseQueue = d, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        i = l.lane, Ce.lanes |= i, Fn |= i, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ku(e) {
    var t = gt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== l);
      _t(i, t.memoizedState) || (rt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, r];
  }
  function Ms() {
  }
  function Ns(e, t) {
    var n = Ce, r = gt(), l = t(), i = !_t(r.memoizedState, l);
    if (i && (r.memoizedState = l, rt = !0), r = r.queue, wu(Ls.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, Kr(9, Rs.bind(null, n, r, l, t), void 0, null), $e === null) throw Error(s(349));
      (zn & 30) !== 0 || Ps(n, t, l);
    }
    return l;
  }
  function Ps(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Rs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, js(t) && zs(e);
  }
  function Ls(e, t, n) {
    return n(function() {
      js(t) && zs(e);
    });
  }
  function js(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !_t(e, n);
    } catch {
      return !0;
    }
  }
  function zs(e) {
    var t = Ht(e, 1);
    t !== null && Pt(t, e, 1, -1);
  }
  function Fs(e) {
    var t = zt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qr, lastRenderedState: e }, t.queue = e, e = e.dispatch = zf.bind(null, Ce, e), [t.memoizedState, e];
  }
  function Kr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Os() {
    return gt().memoizedState;
  }
  function Hl(e, t, n, r) {
    var l = zt();
    Ce.flags |= e, l.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Ql(e, t, n, r) {
    var l = gt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Oe !== null) {
      var u = Oe.memoizedState;
      if (i = u.destroy, r !== null && mu(r, u.deps)) {
        l.memoizedState = Kr(t, n, i, r);
        return;
      }
    }
    Ce.flags |= e, l.memoizedState = Kr(1 | t, n, i, r);
  }
  function Ds(e, t) {
    return Hl(8390656, 8, e, t);
  }
  function wu(e, t) {
    return Ql(2048, 8, e, t);
  }
  function Is(e, t) {
    return Ql(4, 2, e, t);
  }
  function As(e, t) {
    return Ql(4, 4, e, t);
  }
  function Us(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function $s(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Ql(4, 4, Us.bind(null, t, e), n);
  }
  function Su() {
  }
  function Ws(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Vs(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && mu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Bs(e, t, n) {
    return (zn & 21) === 0 ? (e.baseState && (e.baseState = !1, rt = !0), e.memoizedState = n) : (_t(n, t) || (n = ko(), Ce.lanes |= n, Fn |= n, e.baseState = !0), t);
  }
  function Lf(e, t) {
    var n = pe;
    pe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = hu.transition;
    hu.transition = {};
    try {
      e(!1), t();
    } finally {
      pe = n, hu.transition = r;
    }
  }
  function Hs() {
    return gt().memoizedState;
  }
  function jf(e, t, n) {
    var r = yn(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Qs(e)) Ks(t, n);
    else if (n = Es(e, t, n, r), n !== null) {
      var l = et();
      Pt(n, e, r, l), Ys(n, t, r);
    }
  }
  function zf(e, t, n) {
    var r = yn(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Qs(e)) Ks(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
        var u = t.lastRenderedState, a = i(u, n);
        if (l.hasEagerState = !0, l.eagerState = a, _t(a, u)) {
          var d = t.interleaved;
          d === null ? (l.next = l, su(t)) : (l.next = d.next, d.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = Es(e, t, l, r), n !== null && (l = et(), Pt(n, e, r, l), Ys(n, t, r));
    }
  }
  function Qs(e) {
    var t = e.alternate;
    return e === Ce || t !== null && t === Ce;
  }
  function Ks(e, t) {
    Br = Bl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ys(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, xi(e, n);
    }
  }
  var Kl = { readContext: yt, useCallback: Ge, useContext: Ge, useEffect: Ge, useImperativeHandle: Ge, useInsertionEffect: Ge, useLayoutEffect: Ge, useMemo: Ge, useReducer: Ge, useRef: Ge, useState: Ge, useDebugValue: Ge, useDeferredValue: Ge, useTransition: Ge, useMutableSource: Ge, useSyncExternalStore: Ge, useId: Ge, unstable_isNewReconciler: !1 }, Ff = { readContext: yt, useCallback: function(e, t) {
    return zt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: yt, useEffect: Ds, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Hl(
      4194308,
      4,
      Us.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Hl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Hl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = zt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = zt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = jf.bind(null, Ce, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = zt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Fs, useDebugValue: Su, useDeferredValue: function(e) {
    return zt().memoizedState = e;
  }, useTransition: function() {
    var e = Fs(!1), t = e[0];
    return e = Lf.bind(null, e[1]), zt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ce, l = zt();
    if (Ee) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), $e === null) throw Error(s(349));
      (zn & 30) !== 0 || Ps(r, t, n);
    }
    l.memoizedState = n;
    var i = { value: n, getSnapshot: t };
    return l.queue = i, Ds(Ls.bind(
      null,
      r,
      i,
      e
    ), [e]), r.flags |= 2048, Kr(9, Rs.bind(null, r, i, n, t), void 0, null), n;
  }, useId: function() {
    var e = zt(), t = $e.identifierPrefix;
    if (Ee) {
      var n = Bt, r = Vt;
      n = (r & ~(1 << 32 - xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Rf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Of = {
    readContext: yt,
    useCallback: Ws,
    useContext: yt,
    useEffect: wu,
    useImperativeHandle: $s,
    useInsertionEffect: Is,
    useLayoutEffect: As,
    useMemo: Vs,
    useReducer: gu,
    useRef: Os,
    useState: function() {
      return gu(Qr);
    },
    useDebugValue: Su,
    useDeferredValue: function(e) {
      var t = gt();
      return Bs(t, Oe.memoizedState, e);
    },
    useTransition: function() {
      var e = gu(Qr)[0], t = gt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ms,
    useSyncExternalStore: Ns,
    useId: Hs,
    unstable_isNewReconciler: !1
  }, Df = { readContext: yt, useCallback: Ws, useContext: yt, useEffect: wu, useImperativeHandle: $s, useInsertionEffect: Is, useLayoutEffect: As, useMemo: Vs, useReducer: ku, useRef: Os, useState: function() {
    return ku(Qr);
  }, useDebugValue: Su, useDeferredValue: function(e) {
    var t = gt();
    return Oe === null ? t.memoizedState = e : Bs(t, Oe.memoizedState, e);
  }, useTransition: function() {
    var e = ku(Qr)[0], t = gt().memoizedState;
    return [e, t];
  }, useMutableSource: Ms, useSyncExternalStore: Ns, useId: Hs, unstable_isNewReconciler: !1 };
  function Tt(e, t) {
    if (e && e.defaultProps) {
      t = O({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Eu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : O({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Yl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = et(), l = yn(e), i = Qt(r, l);
    i.payload = t, n != null && (i.callback = n), t = pn(e, i, l), t !== null && (Pt(t, e, l, r), Ul(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = et(), l = yn(e), i = Qt(r, l);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = pn(e, i, l), t !== null && (Pt(t, e, l, r), Ul(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = et(), r = yn(e), l = Qt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = pn(e, l, r), t !== null && (Pt(t, e, r, n), Ul(t, e, r));
  } };
  function Xs(e, t, n, r, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, u) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, r) || !jr(l, i) : !0;
  }
  function Gs(e, t, n) {
    var r = !1, l = cn, i = t.contextType;
    return typeof i == "object" && i !== null ? i = yt(i) : (l = nt(t) ? Nn : Xe.current, r = t.contextTypes, i = (r = r != null) ? er(e, l) : cn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Yl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
  }
  function Zs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Yl.enqueueReplaceState(t, t.state, null);
  }
  function xu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, au(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = yt(i) : (i = nt(t) ? Nn : Xe.current, l.context = er(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Eu(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Yl.enqueueReplaceState(l, l.state, null), $l(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function sr(e, t) {
    try {
      var n = "", r = t;
      do
        n += ae(r), r = r.return;
      while (r);
      var l = n;
    } catch (i) {
      l = `
Error generating stack: ` + i.message + `
` + i.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function _u(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Cu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var If = typeof WeakMap == "function" ? WeakMap : Map;
  function Js(e, t, n) {
    n = Qt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      ei || (ei = !0, $u = r), Cu(e, t);
    }, n;
  }
  function qs(e, t, n) {
    n = Qt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Cu(e, t);
      };
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
      Cu(e, t), typeof r != "function" && (mn === null ? mn = /* @__PURE__ */ new Set([this]) : mn.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, { componentStack: u !== null ? u : "" });
    }), n;
  }
  function bs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new If();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Jf.bind(null, e, t, n), t.then(e, e));
  }
  function ea(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ta(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qt(-1, 1), t.tag = 2, pn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Af = ge.ReactCurrentOwner, rt = !1;
  function be(e, t, n, r) {
    t.child = e === null ? Ss(t, null, n, r) : lr(t, e.child, n, r);
  }
  function na(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return ur(t, l), r = vu(e, t, n, r, i, l), n = yu(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Kt(e, t, l)) : (Ee && n && bi(t), t.flags |= 1, be(e, t, r, l), t.child);
  }
  function ra(e, t, n, r, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !Yu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, la(e, t, i, r, l)) : (e = ui(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, (e.lanes & l) === 0) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : jr, n(u, r) && e.ref === t.ref) return Kt(e, t, l);
    }
    return t.flags |= 1, e = kn(i, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function la(e, t, n, r, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (jr(i, r) && e.ref === t.ref) if (rt = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (rt = !0);
      else return t.lanes = e.lanes, Kt(e, t, l);
    }
    return Tu(e, t, n, r, l);
  }
  function ia(e, t, n) {
    var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(cr, dt), dt |= n;
    else {
      if ((n & 1073741824) === 0) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(cr, dt), dt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ye(cr, dt), dt |= r;
    }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ye(cr, dt), dt |= r;
    return be(e, t, l, n), t.child;
  }
  function ua(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Tu(e, t, n, r, l) {
    var i = nt(n) ? Nn : Xe.current;
    return i = er(t, i), ur(t, l), n = vu(e, t, n, r, i, l), r = yu(), e !== null && !rt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Kt(e, t, l)) : (Ee && r && bi(t), t.flags |= 1, be(e, t, n, l), t.child);
  }
  function oa(e, t, n, r, l) {
    if (nt(n)) {
      var i = !0;
      Ll(t);
    } else i = !1;
    if (ur(t, l), t.stateNode === null) Gl(e, t), Gs(t, n, r), xu(t, n, r, l), r = !0;
    else if (e === null) {
      var u = t.stateNode, a = t.memoizedProps;
      u.props = a;
      var d = u.context, y = n.contextType;
      typeof y == "object" && y !== null ? y = yt(y) : (y = nt(n) ? Nn : Xe.current, y = er(t, y));
      var _ = n.getDerivedStateFromProps, C = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      C || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (a !== r || d !== y) && Zs(t, u, r, y), dn = !1;
      var x = t.memoizedState;
      u.state = x, $l(t, r, u, l), d = t.memoizedState, a !== r || x !== d || tt.current || dn ? (typeof _ == "function" && (Eu(t, n, _, r), d = t.memoizedState), (a = dn || Xs(t, n, a, r, x, d, y)) ? (C || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), u.props = r, u.state = d, u.context = y, r = a) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      u = t.stateNode, xs(e, t), a = t.memoizedProps, y = t.type === t.elementType ? a : Tt(t.type, a), u.props = y, C = t.pendingProps, x = u.context, d = n.contextType, typeof d == "object" && d !== null ? d = yt(d) : (d = nt(n) ? Nn : Xe.current, d = er(t, d));
      var z = n.getDerivedStateFromProps;
      (_ = typeof z == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (a !== C || x !== d) && Zs(t, u, r, d), dn = !1, x = t.memoizedState, u.state = x, $l(t, r, u, l);
      var A = t.memoizedState;
      a !== C || x !== A || tt.current || dn ? (typeof z == "function" && (Eu(t, n, z, r), A = t.memoizedState), (y = dn || Xs(t, n, y, r, x, A, d) || !1) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, A, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, A, d)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = A), u.props = r, u.state = A, u.context = d, r = y) : (typeof u.componentDidUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Mu(e, t, n, r, i, l);
  }
  function Mu(e, t, n, r, l, i) {
    ua(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && ds(t, n, !1), Kt(e, t, i);
    r = t.stateNode, Af.current = t;
    var a = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = lr(t, e.child, null, i), t.child = lr(t, null, a, i)) : be(e, t, a, i), t.memoizedState = r.state, l && ds(t, n, !0), t.child;
  }
  function sa(e) {
    var t = e.stateNode;
    t.pendingContext ? cs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cs(e, t.context, !1), cu(e, t.containerInfo);
  }
  function aa(e, t, n, r, l) {
    return rr(), ru(l), t.flags |= 256, be(e, t, n, r), t.child;
  }
  var Nu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Pu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ca(e, t, n) {
    var r = t.pendingProps, l = _e.current, i = !1, u = (t.flags & 128) !== 0, a;
    if ((a = u) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ye(_e, l & 1), e === null)
      return nu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, u = { mode: "hidden", children: u }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = u) : i = oi(u, r, 0, null), e = An(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Pu(n), t.memoizedState = Nu, e) : Ru(t, u));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return Uf(e, t, u, r, a, l, n);
    if (i) {
      i = r.fallback, u = t.mode, l = e.child, a = l.sibling;
      var d = { mode: "hidden", children: r.children };
      return (u & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = kn(l, d), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? i = kn(a, i) : (i = An(i, u, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, u = e.child.memoizedState, u = u === null ? Pu(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = Nu, r;
    }
    return i = e.child, e = i.sibling, r = kn(i, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ru(e, t) {
    return t = oi({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Xl(e, t, n, r) {
    return r !== null && ru(r), lr(t, e.child, null, n), e = Ru(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Uf(e, t, n, r, l, i, u) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = _u(Error(s(422))), Xl(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = oi({ mode: "visible", children: r.children }, l, 0, null), i = An(i, l, u, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && lr(t, e.child, null, u), t.child.memoizedState = Pu(u), t.memoizedState = Nu, i);
    if ((t.mode & 1) === 0) return Xl(e, t, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
      return r = a, i = Error(s(419)), r = _u(i, r, void 0), Xl(e, t, u, r);
    }
    if (a = (u & e.childLanes) !== 0, rt || a) {
      if (r = $e, r !== null) {
        switch (u & -u) {
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
        l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ht(e, l), Pt(r, e, l, -1));
      }
      return Ku(), r = _u(Error(s(421))), Xl(e, t, u, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = qf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ft = sn(l.nextSibling), ct = t, Ee = !0, Ct = null, e !== null && (mt[vt++] = Vt, mt[vt++] = Bt, mt[vt++] = Pn, Vt = e.id, Bt = e.overflow, Pn = t), t = Ru(t, r.children), t.flags |= 4096, t);
  }
  function fa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ou(e.return, t, n);
  }
  function Lu(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
  }
  function da(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, i = r.tail;
    if (be(e, t, r.children, n), r = _e.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fa(e, n, t);
        else if (e.tag === 19) fa(e, n, t);
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
    if (ye(_e, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && Wl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Lu(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Wl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Lu(t, !0, n, null, i);
        break;
      case "together":
        Lu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Kt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Fn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = kn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function $f(e, t, n) {
    switch (t.tag) {
      case 3:
        sa(t), rr();
        break;
      case 5:
        Ts(t);
        break;
      case 1:
        nt(t.type) && Ll(t);
        break;
      case 4:
        cu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ye(Il, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ye(_e, _e.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ca(e, t, n) : (ye(_e, _e.current & 1), e = Kt(e, t, n), e !== null ? e.sibling : null);
        ye(_e, _e.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return da(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ye(_e, _e.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ia(e, t, n);
    }
    return Kt(e, t, n);
  }
  var pa, ju, ha, ma;
  pa = function(e, t) {
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
  }, ju = function() {
  }, ha = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, jn(jt.current);
      var i = null;
      switch (n) {
        case "input":
          l = Wn(e, l), r = Wn(e, r), i = [];
          break;
        case "select":
          l = O({}, l, { value: void 0 }), r = O({}, r, { value: void 0 }), i = [];
          break;
        case "textarea":
          l = Zt(e, l), r = Zt(e, r), i = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Nl);
      }
      _n(n, r);
      var u;
      n = null;
      for (y in l) if (!r.hasOwnProperty(y) && l.hasOwnProperty(y) && l[y] != null) if (y === "style") {
        var a = l[y];
        for (u in a) a.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
      } else y !== "dangerouslySetInnerHTML" && y !== "children" && y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (g.hasOwnProperty(y) ? i || (i = []) : (i = i || []).push(y, null));
      for (y in r) {
        var d = r[y];
        if (a = l?.[y], r.hasOwnProperty(y) && d !== a && (d != null || a != null)) if (y === "style") if (a) {
          for (u in a) !a.hasOwnProperty(u) || d && d.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
          for (u in d) d.hasOwnProperty(u) && a[u] !== d[u] && (n || (n = {}), n[u] = d[u]);
        } else n || (i || (i = []), i.push(
          y,
          n
        )), n = d;
        else y === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, a = a ? a.__html : void 0, d != null && a !== d && (i = i || []).push(y, d)) : y === "children" ? typeof d != "string" && typeof d != "number" || (i = i || []).push(y, "" + d) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && (g.hasOwnProperty(y) ? (d != null && y === "onScroll" && ke("scroll", e), i || a === d || (i = [])) : (i = i || []).push(y, d));
      }
      n && (i = i || []).push("style", n);
      var y = i;
      (t.updateQueue = y) && (t.flags |= 4);
    }
  }, ma = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Yr(e, t) {
    if (!Ee) switch (e.tailMode) {
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
  function Ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Wf(e, t, n) {
    var r = t.pendingProps;
    switch (eu(t), t.tag) {
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
        return Ze(t), null;
      case 1:
        return nt(t.type) && Rl(), Ze(t), null;
      case 3:
        return r = t.stateNode, or(), we(tt), we(Xe), pu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ol(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ct !== null && (Bu(Ct), Ct = null))), ju(e, t), Ze(t), null;
      case 5:
        fu(t);
        var l = jn(Vr.current);
        if (n = t.type, e !== null && t.stateNode != null) ha(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ze(t), null;
          }
          if (e = jn(jt.current), Ol(t)) {
            r = t.stateNode, n = t.type;
            var i = t.memoizedProps;
            switch (r[Lt] = t, r[Ir] = i, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ke("cancel", r), ke("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Fr.length; l++) ke(Fr[l], r);
                break;
              case "source":
                ke("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  r
                ), ke("load", r);
                break;
              case "details":
                ke("toggle", r);
                break;
              case "input":
                rl(r, i), ke("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!i.multiple }, ke("invalid", r);
                break;
              case "textarea":
                hr(r, i), ke("invalid", r);
            }
            _n(n, i), l = null;
            for (var u in i) if (i.hasOwnProperty(u)) {
              var a = i[u];
              u === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Ml(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Ml(
                r.textContent,
                a,
                e
              ), l = ["children", "" + a]) : g.hasOwnProperty(u) && a != null && u === "onScroll" && ke("scroll", r);
            }
            switch (n) {
              case "input":
                Xt(r), pr(r, i, !0);
                break;
              case "textarea":
                Xt(r), ll(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Nl);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Sn(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Lt] = t, e[Ir] = r, pa(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (u = Cn(n, r), n) {
                case "dialog":
                  ke("cancel", e), ke("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Fr.length; l++) ke(Fr[l], e);
                  l = r;
                  break;
                case "source":
                  ke("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ke(
                    "error",
                    e
                  ), ke("load", e), l = r;
                  break;
                case "details":
                  ke("toggle", e), l = r;
                  break;
                case "input":
                  rl(e, r), l = Wn(e, r), ke("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = O({}, r, { value: void 0 }), ke("invalid", e);
                  break;
                case "textarea":
                  hr(e, r), l = Zt(e, r), ke("invalid", e);
                  break;
                default:
                  l = r;
              }
              _n(n, l), a = l;
              for (i in a) if (a.hasOwnProperty(i)) {
                var d = a[i];
                i === "style" ? il(e, d) : i === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && mr(e, d)) : i === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && qt(e, d) : typeof d == "number" && qt(e, "" + d) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (g.hasOwnProperty(i) ? d != null && i === "onScroll" && ke("scroll", e) : d != null && de(e, i, d, u));
              }
              switch (n) {
                case "input":
                  Xt(e), pr(e, r, !1);
                  break;
                case "textarea":
                  Xt(e), ll(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + oe(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, i = r.value, i != null ? Et(e, !!r.multiple, i, !1) : r.defaultValue != null && Et(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Nl);
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
        return Ze(t), null;
      case 6:
        if (e && t.stateNode != null) ma(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = jn(Vr.current), jn(jt.current), Ol(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Lt] = t, (i = r.nodeValue !== n) && (e = ct, e !== null)) switch (e.tag) {
              case 3:
                Ml(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ml(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            i && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Lt] = t, t.stateNode = r;
        }
        return Ze(t), null;
      case 13:
        if (we(_e), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ee && ft !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) gs(), rr(), t.flags |= 98560, i = !1;
          else if (i = Ol(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(s(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(s(317));
              i[Lt] = t;
            } else rr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ze(t), i = !1;
          } else Ct !== null && (Bu(Ct), Ct = null), i = !0;
          if (!i) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (_e.current & 1) !== 0 ? De === 0 && (De = 3) : Ku())), t.updateQueue !== null && (t.flags |= 4), Ze(t), null);
      case 4:
        return or(), ju(e, t), e === null && Or(t.stateNode.containerInfo), Ze(t), null;
      case 10:
        return uu(t.type._context), Ze(t), null;
      case 17:
        return nt(t.type) && Rl(), Ze(t), null;
      case 19:
        if (we(_e), i = t.memoizedState, i === null) return Ze(t), null;
        if (r = (t.flags & 128) !== 0, u = i.rendering, u === null) if (r) Yr(i, !1);
        else {
          if (De !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (u = Wl(e), u !== null) {
              for (t.flags |= 128, Yr(i, !1), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, u = i.alternate, u === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ye(_e, _e.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          i.tail !== null && Pe() > fr && (t.flags |= 128, r = !0, Yr(i, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = Wl(u), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Yr(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !Ee) return Ze(t), null;
          } else 2 * Pe() - i.renderingStartTime > fr && n !== 1073741824 && (t.flags |= 128, r = !0, Yr(i, !1), t.lanes = 4194304);
          i.isBackwards ? (u.sibling = t.child, t.child = u) : (n = i.last, n !== null ? n.sibling = u : t.child = u, i.last = u);
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Pe(), t.sibling = null, n = _e.current, ye(_e, r ? n & 1 | 2 : n & 1), t) : (Ze(t), null);
      case 22:
      case 23:
        return Qu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (dt & 1073741824) !== 0 && (Ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ze(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Vf(e, t) {
    switch (eu(t), t.tag) {
      case 1:
        return nt(t.type) && Rl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return or(), we(tt), we(Xe), pu(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return fu(t), null;
      case 13:
        if (we(_e), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          rr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return we(_e), null;
      case 4:
        return or(), null;
      case 10:
        return uu(t.type._context), null;
      case 22:
      case 23:
        return Qu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Zl = !1, Je = !1, Bf = typeof WeakSet == "function" ? WeakSet : Set, I = null;
  function ar(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Ne(e, t, r);
    }
    else n.current = null;
  }
  function zu(e, t, n) {
    try {
      n();
    } catch (r) {
      Ne(e, t, r);
    }
  }
  var va = !1;
  function Hf(e, t) {
    if (Qi = vl, e = Xo(), Ii(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, a = -1, d = -1, y = 0, _ = 0, C = e, x = null;
          t: for (; ; ) {
            for (var z; C !== n || l !== 0 && C.nodeType !== 3 || (a = u + l), C !== i || r !== 0 && C.nodeType !== 3 || (d = u + r), C.nodeType === 3 && (u += C.nodeValue.length), (z = C.firstChild) !== null; )
              x = C, C = z;
            for (; ; ) {
              if (C === e) break t;
              if (x === n && ++y === l && (a = u), x === i && ++_ === r && (d = u), (z = C.nextSibling) !== null) break;
              C = x, x = C.parentNode;
            }
            C = z;
          }
          n = a === -1 || d === -1 ? null : { start: a, end: d };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ki = { focusedElem: e, selectionRange: n }, vl = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
    else for (; I !== null; ) {
      t = I;
      try {
        var A = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (A !== null) {
              var W = A.memoizedProps, Re = A.memoizedState, m = t.stateNode, p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? W : Tt(t.type, W), Re);
              m.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          case 3:
            var v = t.stateNode.containerInfo;
            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (N) {
        Ne(t, t.return, N);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, I = e;
        break;
      }
      I = t.return;
    }
    return A = va, va = !1, A;
  }
  function Xr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var i = l.destroy;
          l.destroy = void 0, i !== void 0 && zu(t, n, i);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Jl(e, t) {
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
  function Fu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function ya(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ya(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Lt], delete t[Ir], delete t[Zi], delete t[Tf], delete t[Mf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ga(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ka(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ga(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ou(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nl));
    else if (r !== 4 && (e = e.child, e !== null)) for (Ou(e, t, n), e = e.sibling; e !== null; ) Ou(e, t, n), e = e.sibling;
  }
  function Du(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Du(e, t, n), e = e.sibling; e !== null; ) Du(e, t, n), e = e.sibling;
  }
  var He = null, Mt = !1;
  function hn(e, t, n) {
    for (n = n.child; n !== null; ) wa(e, t, n), n = n.sibling;
  }
  function wa(e, t, n) {
    if (Rt && typeof Rt.onCommitFiberUnmount == "function") try {
      Rt.onCommitFiberUnmount(cl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Je || ar(n, t);
      case 6:
        var r = He, l = Mt;
        He = null, hn(e, t, n), He = r, Mt = l, He !== null && (Mt ? (e = He, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : He.removeChild(n.stateNode));
        break;
      case 18:
        He !== null && (Mt ? (e = He, n = n.stateNode, e.nodeType === 8 ? Gi(e.parentNode, n) : e.nodeType === 1 && Gi(e, n), Tr(e)) : Gi(He, n.stateNode));
        break;
      case 4:
        r = He, l = Mt, He = n.stateNode.containerInfo, Mt = !0, hn(e, t, n), He = r, Mt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Je && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var i = l, u = i.destroy;
            i = i.tag, u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && zu(n, t, u), l = l.next;
          } while (l !== r);
        }
        hn(e, t, n);
        break;
      case 1:
        if (!Je && (ar(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Ne(n, t, a);
        }
        hn(e, t, n);
        break;
      case 21:
        hn(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Je = (r = Je) || n.memoizedState !== null, hn(e, t, n), Je = r) : hn(e, t, n);
        break;
      default:
        hn(e, t, n);
    }
  }
  function Sa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Bf()), t.forEach(function(r) {
        var l = bf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function Nt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e, u = t, a = u;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              He = a.stateNode, Mt = !1;
              break e;
            case 3:
              He = a.stateNode.containerInfo, Mt = !0;
              break e;
            case 4:
              He = a.stateNode.containerInfo, Mt = !0;
              break e;
          }
          a = a.return;
        }
        if (He === null) throw Error(s(160));
        wa(i, u, l), He = null, Mt = !1;
        var d = l.alternate;
        d !== null && (d.return = null), l.return = null;
      } catch (y) {
        Ne(l, t, y);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ea(t, e), t = t.sibling;
  }
  function Ea(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Nt(t, e), Ft(e), r & 4) {
          try {
            Xr(3, e, e.return), Jl(3, e);
          } catch (W) {
            Ne(e, e.return, W);
          }
          try {
            Xr(5, e, e.return);
          } catch (W) {
            Ne(e, e.return, W);
          }
        }
        break;
      case 1:
        Nt(t, e), Ft(e), r & 512 && n !== null && ar(n, n.return);
        break;
      case 5:
        if (Nt(t, e), Ft(e), r & 512 && n !== null && ar(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            qt(l, "");
          } catch (W) {
            Ne(e, e.return, W);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var i = e.memoizedProps, u = n !== null ? n.memoizedProps : i, a = e.type, d = e.updateQueue;
          if (e.updateQueue = null, d !== null) try {
            a === "input" && i.type === "radio" && i.name != null && Gt(l, i), Cn(a, u);
            var y = Cn(a, i);
            for (u = 0; u < d.length; u += 2) {
              var _ = d[u], C = d[u + 1];
              _ === "style" ? il(l, C) : _ === "dangerouslySetInnerHTML" ? mr(l, C) : _ === "children" ? qt(l, C) : de(l, _, C, y);
            }
            switch (a) {
              case "input":
                Vn(l, i);
                break;
              case "textarea":
                Bn(l, i);
                break;
              case "select":
                var x = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var z = i.value;
                z != null ? Et(l, !!i.multiple, z, !1) : x !== !!i.multiple && (i.defaultValue != null ? Et(
                  l,
                  !!i.multiple,
                  i.defaultValue,
                  !0
                ) : Et(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Ir] = i;
          } catch (W) {
            Ne(e, e.return, W);
          }
        }
        break;
      case 6:
        if (Nt(t, e), Ft(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          l = e.stateNode, i = e.memoizedProps;
          try {
            l.nodeValue = i;
          } catch (W) {
            Ne(e, e.return, W);
          }
        }
        break;
      case 3:
        if (Nt(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Tr(t.containerInfo);
        } catch (W) {
          Ne(e, e.return, W);
        }
        break;
      case 4:
        Nt(t, e), Ft(e);
        break;
      case 13:
        Nt(t, e), Ft(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Uu = Pe())), r & 4 && Sa(e);
        break;
      case 22:
        if (_ = n !== null && n.memoizedState !== null, e.mode & 1 ? (Je = (y = Je) || _, Nt(t, e), Je = y) : Nt(t, e), Ft(e), r & 8192) {
          if (y = e.memoizedState !== null, (e.stateNode.isHidden = y) && !_ && (e.mode & 1) !== 0) for (I = e, _ = e.child; _ !== null; ) {
            for (C = I = _; I !== null; ) {
              switch (x = I, z = x.child, x.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xr(4, x, x.return);
                  break;
                case 1:
                  ar(x, x.return);
                  var A = x.stateNode;
                  if (typeof A.componentWillUnmount == "function") {
                    r = x, n = x.return;
                    try {
                      t = r, A.props = t.memoizedProps, A.state = t.memoizedState, A.componentWillUnmount();
                    } catch (W) {
                      Ne(r, n, W);
                    }
                  }
                  break;
                case 5:
                  ar(x, x.return);
                  break;
                case 22:
                  if (x.memoizedState !== null) {
                    Ca(C);
                    continue;
                  }
              }
              z !== null ? (z.return = x, I = z) : Ca(C);
            }
            _ = _.sibling;
          }
          e: for (_ = null, C = e; ; ) {
            if (C.tag === 5) {
              if (_ === null) {
                _ = C;
                try {
                  l = C.stateNode, y ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = C.stateNode, d = C.memoizedProps.style, u = d != null && d.hasOwnProperty("display") ? d.display : null, a.style.display = Hn("display", u));
                } catch (W) {
                  Ne(e, e.return, W);
                }
              }
            } else if (C.tag === 6) {
              if (_ === null) try {
                C.stateNode.nodeValue = y ? "" : C.memoizedProps;
              } catch (W) {
                Ne(e, e.return, W);
              }
            } else if ((C.tag !== 22 && C.tag !== 23 || C.memoizedState === null || C === e) && C.child !== null) {
              C.child.return = C, C = C.child;
              continue;
            }
            if (C === e) break e;
            for (; C.sibling === null; ) {
              if (C.return === null || C.return === e) break e;
              _ === C && (_ = null), C = C.return;
            }
            _ === C && (_ = null), C.sibling.return = C.return, C = C.sibling;
          }
        }
        break;
      case 19:
        Nt(t, e), Ft(e), r & 4 && Sa(e);
        break;
      case 21:
        break;
      default:
        Nt(
          t,
          e
        ), Ft(e);
    }
  }
  function Ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ga(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (qt(l, ""), r.flags &= -33);
            var i = ka(e);
            Du(e, i, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, a = ka(e);
            Ou(e, a, u);
            break;
          default:
            throw Error(s(161));
        }
      } catch (d) {
        Ne(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qf(e, t, n) {
    I = e, xa(e);
  }
  function xa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
      var l = I, i = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Zl;
        if (!u) {
          var a = l.alternate, d = a !== null && a.memoizedState !== null || Je;
          a = Zl;
          var y = Je;
          if (Zl = u, (Je = d) && !y) for (I = l; I !== null; ) u = I, d = u.child, u.tag === 22 && u.memoizedState !== null ? Ta(l) : d !== null ? (d.return = u, I = d) : Ta(l);
          for (; i !== null; ) I = i, xa(i), i = i.sibling;
          I = l, Zl = a, Je = y;
        }
        _a(e);
      } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, I = i) : _a(e);
    }
  }
  function _a(e) {
    for (; I !== null; ) {
      var t = I;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Je || Jl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Je) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Tt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var i = t.updateQueue;
              i !== null && Cs(t, i, r);
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
                Cs(t, u, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src);
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
                var y = t.alternate;
                if (y !== null) {
                  var _ = y.memoizedState;
                  if (_ !== null) {
                    var C = _.dehydrated;
                    C !== null && Tr(C);
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
              throw Error(s(163));
          }
          Je || t.flags & 512 && Fu(t);
        } catch (x) {
          Ne(t, t.return, x);
        }
      }
      if (t === e) {
        I = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, I = n;
        break;
      }
      I = t.return;
    }
  }
  function Ca(e) {
    for (; I !== null; ) {
      var t = I;
      if (t === e) {
        I = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, I = n;
        break;
      }
      I = t.return;
    }
  }
  function Ta(e) {
    for (; I !== null; ) {
      var t = I;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Jl(4, t);
            } catch (d) {
              Ne(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                Ne(t, l, d);
              }
            }
            var i = t.return;
            try {
              Fu(t);
            } catch (d) {
              Ne(t, i, d);
            }
            break;
          case 5:
            var u = t.return;
            try {
              Fu(t);
            } catch (d) {
              Ne(t, u, d);
            }
        }
      } catch (d) {
        Ne(t, t.return, d);
      }
      if (t === e) {
        I = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        a.return = t.return, I = a;
        break;
      }
      I = t.return;
    }
  }
  var Kf = Math.ceil, ql = ge.ReactCurrentDispatcher, Iu = ge.ReactCurrentOwner, kt = ge.ReactCurrentBatchConfig, ce = 0, $e = null, ze = null, Qe = 0, dt = 0, cr = an(0), De = 0, Gr = null, Fn = 0, bl = 0, Au = 0, Zr = null, lt = null, Uu = 0, fr = 1 / 0, Yt = null, ei = !1, $u = null, mn = null, ti = !1, vn = null, ni = 0, Jr = 0, Wu = null, ri = -1, li = 0;
  function et() {
    return (ce & 6) !== 0 ? Pe() : ri !== -1 ? ri : ri = Pe();
  }
  function yn(e) {
    return (e.mode & 1) === 0 ? 1 : (ce & 2) !== 0 && Qe !== 0 ? Qe & -Qe : Pf.transition !== null ? (li === 0 && (li = ko()), li) : (e = pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : No(e.type)), e);
  }
  function Pt(e, t, n, r) {
    if (50 < Jr) throw Jr = 0, Wu = null, Error(s(185));
    Sr(e, n, r), ((ce & 2) === 0 || e !== $e) && (e === $e && ((ce & 2) === 0 && (bl |= n), De === 4 && gn(e, Qe)), it(e, r), n === 1 && ce === 0 && (t.mode & 1) === 0 && (fr = Pe() + 500, jl && fn()));
  }
  function it(e, t) {
    var n = e.callbackNode;
    Nc(e, t);
    var r = pl(e, e === $e ? Qe : 0);
    if (r === 0) n !== null && vo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && vo(n), t === 1) e.tag === 0 ? Nf(Na.bind(null, e)) : ps(Na.bind(null, e)), _f(function() {
        (ce & 6) === 0 && fn();
      }), n = null;
      else {
        switch (wo(r)) {
          case 1:
            n = wi;
            break;
          case 4:
            n = yo;
            break;
          case 16:
            n = al;
            break;
          case 536870912:
            n = go;
            break;
          default:
            n = al;
        }
        n = Da(n, Ma.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ma(e, t) {
    if (ri = -1, li = 0, (ce & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (dr() && e.callbackNode !== n) return null;
    var r = pl(e, e === $e ? Qe : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = ii(e, r);
    else {
      t = r;
      var l = ce;
      ce |= 2;
      var i = Ra();
      ($e !== e || Qe !== t) && (Yt = null, fr = Pe() + 500, Dn(e, t));
      do
        try {
          Gf();
          break;
        } catch (a) {
          Pa(e, a);
        }
      while (!0);
      iu(), ql.current = i, ce = l, ze !== null ? t = 0 : ($e = null, Qe = 0, t = De);
    }
    if (t !== 0) {
      if (t === 2 && (l = Si(e), l !== 0 && (r = l, t = Vu(e, l))), t === 1) throw n = Gr, Dn(e, 0), gn(e, r), it(e, Pe()), n;
      if (t === 6) gn(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Yf(l) && (t = ii(e, r), t === 2 && (i = Si(e), i !== 0 && (r = i, t = Vu(e, i))), t === 1)) throw n = Gr, Dn(e, 0), gn(e, r), it(e, Pe()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            In(e, lt, Yt);
            break;
          case 3:
            if (gn(e, r), (r & 130023424) === r && (t = Uu + 500 - Pe(), 10 < t)) {
              if (pl(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                et(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Xi(In.bind(null, e, lt, Yt), t);
              break;
            }
            In(e, lt, Yt);
            break;
          case 4:
            if (gn(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - xt(r);
              i = 1 << u, u = t[u], u > l && (l = u), r &= ~i;
            }
            if (r = l, r = Pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Kf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Xi(In.bind(null, e, lt, Yt), r);
              break;
            }
            In(e, lt, Yt);
            break;
          case 5:
            In(e, lt, Yt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return it(e, Pe()), e.callbackNode === n ? Ma.bind(null, e) : null;
  }
  function Vu(e, t) {
    var n = Zr;
    return e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256), e = ii(e, t), e !== 2 && (t = lt, lt = n, t !== null && Bu(t)), e;
  }
  function Bu(e) {
    lt === null ? lt = e : lt.push.apply(lt, e);
  }
  function Yf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], i = l.getSnapshot;
          l = l.value;
          try {
            if (!_t(i(), l)) return !1;
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
  function gn(e, t) {
    for (t &= ~Au, t &= ~bl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - xt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Na(e) {
    if ((ce & 6) !== 0) throw Error(s(327));
    dr();
    var t = pl(e, 0);
    if ((t & 1) === 0) return it(e, Pe()), null;
    var n = ii(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Si(e);
      r !== 0 && (t = r, n = Vu(e, r));
    }
    if (n === 1) throw n = Gr, Dn(e, 0), gn(e, t), it(e, Pe()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, In(e, lt, Yt), it(e, Pe()), null;
  }
  function Hu(e, t) {
    var n = ce;
    ce |= 1;
    try {
      return e(t);
    } finally {
      ce = n, ce === 0 && (fr = Pe() + 500, jl && fn());
    }
  }
  function On(e) {
    vn !== null && vn.tag === 0 && (ce & 6) === 0 && dr();
    var t = ce;
    ce |= 1;
    var n = kt.transition, r = pe;
    try {
      if (kt.transition = null, pe = 1, e) return e();
    } finally {
      pe = r, kt.transition = n, ce = t, (ce & 6) === 0 && fn();
    }
  }
  function Qu() {
    dt = cr.current, we(cr);
  }
  function Dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, xf(n)), ze !== null) for (n = ze.return; n !== null; ) {
      var r = n;
      switch (eu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Rl();
          break;
        case 3:
          or(), we(tt), we(Xe), pu();
          break;
        case 5:
          fu(r);
          break;
        case 4:
          or();
          break;
        case 13:
          we(_e);
          break;
        case 19:
          we(_e);
          break;
        case 10:
          uu(r.type._context);
          break;
        case 22:
        case 23:
          Qu();
      }
      n = n.return;
    }
    if ($e = e, ze = e = kn(e.current, null), Qe = dt = t, De = 0, Gr = null, Au = bl = Fn = 0, lt = Zr = null, Ln !== null) {
      for (t = 0; t < Ln.length; t++) if (n = Ln[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, i = n.pending;
        if (i !== null) {
          var u = i.next;
          i.next = l, r.next = u;
        }
        n.pending = r;
      }
      Ln = null;
    }
    return e;
  }
  function Pa(e, t) {
    do {
      var n = ze;
      try {
        if (iu(), Vl.current = Kl, Bl) {
          for (var r = Ce.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Bl = !1;
        }
        if (zn = 0, Ue = Oe = Ce = null, Br = !1, Hr = 0, Iu.current = null, n === null || n.return === null) {
          De = 1, Gr = t, ze = null;
          break;
        }
        e: {
          var i = e, u = n.return, a = n, d = t;
          if (t = Qe, a.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
            var y = d, _ = a, C = _.tag;
            if ((_.mode & 1) === 0 && (C === 0 || C === 11 || C === 15)) {
              var x = _.alternate;
              x ? (_.updateQueue = x.updateQueue, _.memoizedState = x.memoizedState, _.lanes = x.lanes) : (_.updateQueue = null, _.memoizedState = null);
            }
            var z = ea(u);
            if (z !== null) {
              z.flags &= -257, ta(z, u, a, i, t), z.mode & 1 && bs(i, y, t), t = z, d = y;
              var A = t.updateQueue;
              if (A === null) {
                var W = /* @__PURE__ */ new Set();
                W.add(d), t.updateQueue = W;
              } else A.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                bs(i, y, t), Ku();
                break e;
              }
              d = Error(s(426));
            }
          } else if (Ee && a.mode & 1) {
            var Re = ea(u);
            if (Re !== null) {
              (Re.flags & 65536) === 0 && (Re.flags |= 256), ta(Re, u, a, i, t), ru(sr(d, a));
              break e;
            }
          }
          i = d = sr(d, a), De !== 4 && (De = 2), Zr === null ? Zr = [i] : Zr.push(i), i = u;
          do {
            switch (i.tag) {
              case 3:
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var m = Js(i, d, t);
                _s(i, m);
                break e;
              case 1:
                a = d;
                var p = i.type, v = i.stateNode;
                if ((i.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (mn === null || !mn.has(v)))) {
                  i.flags |= 65536, t &= -t, i.lanes |= t;
                  var N = qs(i, a, t);
                  _s(i, N);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        ja(n);
      } catch (H) {
        t = H, ze === n && n !== null && (ze = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ra() {
    var e = ql.current;
    return ql.current = Kl, e === null ? Kl : e;
  }
  function Ku() {
    (De === 0 || De === 3 || De === 2) && (De = 4), $e === null || (Fn & 268435455) === 0 && (bl & 268435455) === 0 || gn($e, Qe);
  }
  function ii(e, t) {
    var n = ce;
    ce |= 2;
    var r = Ra();
    ($e !== e || Qe !== t) && (Yt = null, Dn(e, t));
    do
      try {
        Xf();
        break;
      } catch (l) {
        Pa(e, l);
      }
    while (!0);
    if (iu(), ce = n, ql.current = r, ze !== null) throw Error(s(261));
    return $e = null, Qe = 0, De;
  }
  function Xf() {
    for (; ze !== null; ) La(ze);
  }
  function Gf() {
    for (; ze !== null && !kc(); ) La(ze);
  }
  function La(e) {
    var t = Oa(e.alternate, e, dt);
    e.memoizedProps = e.pendingProps, t === null ? ja(e) : ze = t, Iu.current = null;
  }
  function ja(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Wf(n, t, dt), n !== null) {
          ze = n;
          return;
        }
      } else {
        if (n = Vf(n, t), n !== null) {
          n.flags &= 32767, ze = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          De = 6, ze = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    De === 0 && (De = 5);
  }
  function In(e, t, n) {
    var r = pe, l = kt.transition;
    try {
      kt.transition = null, pe = 1, Zf(e, t, n, r);
    } finally {
      kt.transition = l, pe = r;
    }
    return null;
  }
  function Zf(e, t, n, r) {
    do
      dr();
    while (vn !== null);
    if ((ce & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (Pc(e, i), e === $e && (ze = $e = null, Qe = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || ti || (ti = !0, Da(al, function() {
      return dr(), null;
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
      i = kt.transition, kt.transition = null;
      var u = pe;
      pe = 1;
      var a = ce;
      ce |= 4, Iu.current = null, Hf(e, n), Ea(n, e), vf(Ki), vl = !!Qi, Ki = Qi = null, e.current = n, Qf(n), wc(), ce = a, pe = u, kt.transition = i;
    } else e.current = n;
    if (ti && (ti = !1, vn = e, ni = l), i = e.pendingLanes, i === 0 && (mn = null), xc(n.stateNode), it(e, Pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ei) throw ei = !1, e = $u, $u = null, e;
    return (ni & 1) !== 0 && e.tag !== 0 && dr(), i = e.pendingLanes, (i & 1) !== 0 ? e === Wu ? Jr++ : (Jr = 0, Wu = e) : Jr = 0, fn(), null;
  }
  function dr() {
    if (vn !== null) {
      var e = wo(ni), t = kt.transition, n = pe;
      try {
        if (kt.transition = null, pe = 16 > e ? 16 : e, vn === null) var r = !1;
        else {
          if (e = vn, vn = null, ni = 0, (ce & 6) !== 0) throw Error(s(331));
          var l = ce;
          for (ce |= 4, I = e.current; I !== null; ) {
            var i = I, u = i.child;
            if ((I.flags & 16) !== 0) {
              var a = i.deletions;
              if (a !== null) {
                for (var d = 0; d < a.length; d++) {
                  var y = a[d];
                  for (I = y; I !== null; ) {
                    var _ = I;
                    switch (_.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xr(8, _, i);
                    }
                    var C = _.child;
                    if (C !== null) C.return = _, I = C;
                    else for (; I !== null; ) {
                      _ = I;
                      var x = _.sibling, z = _.return;
                      if (ya(_), _ === y) {
                        I = null;
                        break;
                      }
                      if (x !== null) {
                        x.return = z, I = x;
                        break;
                      }
                      I = z;
                    }
                  }
                }
                var A = i.alternate;
                if (A !== null) {
                  var W = A.child;
                  if (W !== null) {
                    A.child = null;
                    do {
                      var Re = W.sibling;
                      W.sibling = null, W = Re;
                    } while (W !== null);
                  }
                }
                I = i;
              }
            }
            if ((i.subtreeFlags & 2064) !== 0 && u !== null) u.return = i, I = u;
            else e: for (; I !== null; ) {
              if (i = I, (i.flags & 2048) !== 0) switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  Xr(9, i, i.return);
              }
              var m = i.sibling;
              if (m !== null) {
                m.return = i.return, I = m;
                break e;
              }
              I = i.return;
            }
          }
          var p = e.current;
          for (I = p; I !== null; ) {
            u = I;
            var v = u.child;
            if ((u.subtreeFlags & 2064) !== 0 && v !== null) v.return = u, I = v;
            else e: for (u = p; I !== null; ) {
              if (a = I, (a.flags & 2048) !== 0) try {
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jl(9, a);
                }
              } catch (H) {
                Ne(a, a.return, H);
              }
              if (a === u) {
                I = null;
                break e;
              }
              var N = a.sibling;
              if (N !== null) {
                N.return = a.return, I = N;
                break e;
              }
              I = a.return;
            }
          }
          if (ce = l, fn(), Rt && typeof Rt.onPostCommitFiberRoot == "function") try {
            Rt.onPostCommitFiberRoot(cl, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        pe = n, kt.transition = t;
      }
    }
    return !1;
  }
  function za(e, t, n) {
    t = sr(n, t), t = Js(e, t, 1), e = pn(e, t, 1), t = et(), e !== null && (Sr(e, 1, t), it(e, t));
  }
  function Ne(e, t, n) {
    if (e.tag === 3) za(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        za(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mn === null || !mn.has(r))) {
          e = sr(n, e), e = qs(t, e, 1), t = pn(t, e, 1), e = et(), t !== null && (Sr(t, 1, e), it(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Jf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = et(), e.pingedLanes |= e.suspendedLanes & n, $e === e && (Qe & n) === n && (De === 4 || De === 3 && (Qe & 130023424) === Qe && 500 > Pe() - Uu ? Dn(e, 0) : Au |= n), it(e, t);
  }
  function Fa(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = dl, dl <<= 1, (dl & 130023424) === 0 && (dl = 4194304)));
    var n = et();
    e = Ht(e, t), e !== null && (Sr(e, t, n), it(e, n));
  }
  function qf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Fa(e, n);
  }
  function bf(e, t) {
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
        throw Error(s(314));
    }
    r !== null && r.delete(t), Fa(e, n);
  }
  var Oa;
  Oa = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || tt.current) rt = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return rt = !1, $f(e, t, n);
      rt = (e.flags & 131072) !== 0;
    }
    else rt = !1, Ee && (t.flags & 1048576) !== 0 && hs(t, Fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Gl(e, t), e = t.pendingProps;
        var l = er(t, Xe.current);
        ur(t, n), l = vu(null, t, r, e, l, n);
        var i = yu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, nt(r) ? (i = !0, Ll(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, au(t), l.updater = Yl, t.stateNode = l, l._reactInternals = t, xu(t, r, e, n), t = Mu(null, t, r, !0, i, n)) : (t.tag = 0, Ee && i && bi(t), be(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Gl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = td(r), e = Tt(r, e), l) {
            case 0:
              t = Tu(null, t, r, e, n);
              break e;
            case 1:
              t = oa(null, t, r, e, n);
              break e;
            case 11:
              t = na(null, t, r, e, n);
              break e;
            case 14:
              t = ra(null, t, r, Tt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Tt(r, l), Tu(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Tt(r, l), oa(e, t, r, l, n);
      case 3:
        e: {
          if (sa(t), e === null) throw Error(s(387));
          r = t.pendingProps, i = t.memoizedState, l = i.element, xs(e, t), $l(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            l = sr(Error(s(423)), t), t = aa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = sr(Error(s(424)), t), t = aa(e, t, r, n, l);
            break e;
          } else for (ft = sn(t.stateNode.containerInfo.firstChild), ct = t, Ee = !0, Ct = null, n = Ss(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (rr(), r === l) {
              t = Kt(e, t, n);
              break e;
            }
            be(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ts(t), e === null && nu(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = l.children, Yi(r, l) ? u = null : i !== null && Yi(r, i) && (t.flags |= 32), ua(e, t), be(e, t, u, n), t.child;
      case 6:
        return e === null && nu(t), null;
      case 13:
        return ca(e, t, n);
      case 4:
        return cu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = lr(t, null, r, n) : be(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Tt(r, l), na(e, t, r, l, n);
      case 7:
        return be(e, t, t.pendingProps, n), t.child;
      case 8:
        return be(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return be(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, u = l.value, ye(Il, r._currentValue), r._currentValue = u, i !== null) if (_t(i.value, u)) {
            if (i.children === l.children && !tt.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
            var a = i.dependencies;
            if (a !== null) {
              u = i.child;
              for (var d = a.firstContext; d !== null; ) {
                if (d.context === r) {
                  if (i.tag === 1) {
                    d = Qt(-1, n & -n), d.tag = 2;
                    var y = i.updateQueue;
                    if (y !== null) {
                      y = y.shared;
                      var _ = y.pending;
                      _ === null ? d.next = d : (d.next = _.next, _.next = d), y.pending = d;
                    }
                  }
                  i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), ou(
                    i.return,
                    n,
                    t
                  ), a.lanes |= n;
                  break;
                }
                d = d.next;
              }
            } else if (i.tag === 10) u = i.type === t.type ? null : i.child;
            else if (i.tag === 18) {
              if (u = i.return, u === null) throw Error(s(341));
              u.lanes |= n, a = u.alternate, a !== null && (a.lanes |= n), ou(u, n, t), u = i.sibling;
            } else u = i.child;
            if (u !== null) u.return = i;
            else for (u = i; u !== null; ) {
              if (u === t) {
                u = null;
                break;
              }
              if (i = u.sibling, i !== null) {
                i.return = u.return, u = i;
                break;
              }
              u = u.return;
            }
            i = u;
          }
          be(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, ur(t, n), l = yt(l), r = r(l), t.flags |= 1, be(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Tt(r, t.pendingProps), l = Tt(r.type, l), ra(e, t, r, l, n);
      case 15:
        return la(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Tt(r, l), Gl(e, t), t.tag = 1, nt(r) ? (e = !0, Ll(t)) : e = !1, ur(t, n), Gs(t, r, l), xu(t, r, l, n), Mu(null, t, r, !0, e, n);
      case 19:
        return da(e, t, n);
      case 22:
        return ia(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Da(e, t) {
    return mo(e, t);
  }
  function ed(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wt(e, t, n, r) {
    return new ed(e, t, n, r);
  }
  function Yu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function td(e) {
    if (typeof e == "function") return Yu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === pt) return 11;
      if (e === ht) return 14;
    }
    return 2;
  }
  function kn(e, t) {
    var n = e.alternate;
    return n === null ? (n = wt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function ui(e, t, n, r, l, i) {
    var u = 2;
    if (r = e, typeof e == "function") Yu(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case Te:
        return An(n.children, l, i, t);
      case Fe:
        u = 8, l |= 8;
        break;
      case Ke:
        return e = wt(12, n, t, l | 2), e.elementType = Ke, e.lanes = i, e;
      case je:
        return e = wt(13, n, t, l), e.elementType = je, e.lanes = i, e;
      case ot:
        return e = wt(19, n, t, l), e.elementType = ot, e.lanes = i, e;
      case ie:
        return oi(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ae:
            u = 10;
            break e;
          case qe:
            u = 9;
            break e;
          case pt:
            u = 11;
            break e;
          case ht:
            u = 14;
            break e;
          case Ve:
            u = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = wt(u, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
  }
  function An(e, t, n, r) {
    return e = wt(7, e, r, t), e.lanes = n, e;
  }
  function oi(e, t, n, r) {
    return e = wt(22, e, r, t), e.elementType = ie, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Xu(e, t, n) {
    return e = wt(6, e, null, t), e.lanes = n, e;
  }
  function Gu(e, t, n) {
    return t = wt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function nd(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ei(0), this.expirationTimes = Ei(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ei(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Zu(e, t, n, r, l, i, u, a, d) {
    return e = new nd(e, t, n, a, d), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = wt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, au(i), e;
  }
  function rd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Le, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ia(e) {
    if (!e) return cn;
    e = e._reactInternals;
    e: {
      if (Tn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (nt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (nt(n)) return fs(e, n, t);
    }
    return t;
  }
  function Aa(e, t, n, r, l, i, u, a, d) {
    return e = Zu(n, r, !0, e, l, i, u, a, d), e.context = Ia(null), n = e.current, r = et(), l = yn(n), i = Qt(r, l), i.callback = t ?? null, pn(n, i, l), e.current.lanes = l, Sr(e, l, r), it(e, r), e;
  }
  function si(e, t, n, r) {
    var l = t.current, i = et(), u = yn(l);
    return n = Ia(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qt(i, u), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = pn(l, t, u), e !== null && (Pt(e, l, u, i), Ul(e, l, u)), u;
  }
  function ai(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Ua(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ju(e, t) {
    Ua(e, t), (e = e.alternate) && Ua(e, t);
  }
  function ld() {
    return null;
  }
  var $a = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function qu(e) {
    this._internalRoot = e;
  }
  ci.prototype.render = qu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    si(e, t, null, null);
  }, ci.prototype.unmount = qu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      On(function() {
        si(null, e, null, null);
      }), t[$t] = null;
    }
  };
  function ci(e) {
    this._internalRoot = e;
  }
  ci.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = xo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++) ;
      ln.splice(n, 0, e), n === 0 && To(e);
    }
  };
  function bu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function fi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Wa() {
  }
  function id(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var i = r;
        r = function() {
          var y = ai(u);
          i.call(y);
        };
      }
      var u = Aa(t, r, e, 0, null, !1, !1, "", Wa);
      return e._reactRootContainer = u, e[$t] = u.current, Or(e.nodeType === 8 ? e.parentNode : e), On(), u;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var y = ai(d);
        a.call(y);
      };
    }
    var d = Zu(e, 0, !1, null, null, !1, !1, "", Wa);
    return e._reactRootContainer = d, e[$t] = d.current, Or(e.nodeType === 8 ? e.parentNode : e), On(function() {
      si(t, d, n, r);
    }), d;
  }
  function di(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var u = i;
      if (typeof l == "function") {
        var a = l;
        l = function() {
          var d = ai(u);
          a.call(d);
        };
      }
      si(t, u, e, l);
    } else u = id(n, t, e, l, r);
    return ai(u);
  }
  So = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = wr(t.pendingLanes);
          n !== 0 && (xi(t, n | 1), it(t, Pe()), (ce & 6) === 0 && (fr = Pe() + 500, fn()));
        }
        break;
      case 13:
        On(function() {
          var r = Ht(e, 1);
          if (r !== null) {
            var l = et();
            Pt(r, e, 1, l);
          }
        }), Ju(e, 1);
    }
  }, _i = function(e) {
    if (e.tag === 13) {
      var t = Ht(e, 134217728);
      if (t !== null) {
        var n = et();
        Pt(t, e, 134217728, n);
      }
      Ju(e, 134217728);
    }
  }, Eo = function(e) {
    if (e.tag === 13) {
      var t = yn(e), n = Ht(e, t);
      if (n !== null) {
        var r = et();
        Pt(n, e, t, r);
      }
      Ju(e, t);
    }
  }, xo = function() {
    return pe;
  }, _o = function(e, t) {
    var n = pe;
    try {
      return pe = e, t();
    } finally {
      pe = n;
    }
  }, gr = function(e, t, n) {
    switch (t) {
      case "input":
        if (Vn(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = Pl(r);
              if (!l) throw Error(s(90));
              nl(r), Vn(r, l);
            }
          }
        }
        break;
      case "textarea":
        Bn(e, n);
        break;
      case "select":
        t = n.value, t != null && Et(e, !!n.multiple, t, !1);
    }
  }, ol = Hu, f = On;
  var ud = { usingClientEntryPoint: !1, Events: [Ar, qn, Pl, kr, Ut, Hu] }, qr = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, od = { bundleType: qr.bundleType, version: qr.version, rendererPackageName: qr.rendererPackageName, rendererConfig: qr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = po(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: qr.findFiberByHostInstance || ld, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pi.isDisabled && pi.supportsFiber) try {
      cl = pi.inject(od), Rt = pi;
    } catch {
    }
  }
  return ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ud, ut.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!bu(t)) throw Error(s(200));
    return rd(e, t, null, n);
  }, ut.createRoot = function(e, t) {
    if (!bu(e)) throw Error(s(299));
    var n = !1, r = "", l = $a;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zu(e, 1, !1, null, null, n, !1, r, l), e[$t] = t.current, Or(e.nodeType === 8 ? e.parentNode : e), new qu(t);
  }, ut.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = po(t), e = e === null ? null : e.stateNode, e;
  }, ut.flushSync = function(e) {
    return On(e);
  }, ut.hydrate = function(e, t, n) {
    if (!fi(t)) throw Error(s(200));
    return di(null, e, t, !0, n);
  }, ut.hydrateRoot = function(e, t, n) {
    if (!bu(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, l = !1, i = "", u = $a;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = Aa(t, null, e, 1, n ?? null, l, !1, i, u), e[$t] = t.current, Or(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new ci(t);
  }, ut.render = function(e, t, n) {
    if (!fi(t)) throw Error(s(200));
    return di(null, e, t, !1, n);
  }, ut.unmountComponentAtNode = function(e) {
    if (!fi(e)) throw Error(s(40));
    return e._reactRootContainer ? (On(function() {
      di(null, null, e, !1, function() {
        e._reactRootContainer = null, e[$t] = null;
      });
    }), !0) : !1;
  }, ut.unstable_batchedUpdates = Hu, ut.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!fi(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return di(e, t, n, !1, r);
  }, ut.version = "18.3.1-next-f1338f8080-20240426", ut;
}
var Ga;
function md() {
  if (Ga) return no.exports;
  Ga = 1;
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (o) {
        console.error(o);
      }
  }
  return c(), no.exports = hd(), no.exports;
}
var Za;
function vd() {
  if (Za) return hi;
  Za = 1;
  var c = md();
  return hi.createRoot = c.createRoot, hi.hydrateRoot = c.hydrateRoot, hi;
}
var yd = vd(), b = ao();
const gd = { backing: 0.85, guitar: 0.78, vocals: 0.78 }, Ja = 100;
function kd(c) {
  if (c === null || c.trim() === "") return Ja;
  const o = Number(c);
  return Number.isFinite(o) ? Math.round(Math.min(100, Math.max(0, o))) : Ja;
}
function qa(c, o, s = !0) {
  return s ? gd[c] * kd(String(o)) / 100 : 0;
}
function wd(c = () => new Audio()) {
  try {
    const o = c();
    return o.volume = 0.5, Math.abs(o.volume - 0.5) < 0.01;
  } catch {
    return !1;
  }
}
const Sd = 0.12, Ed = 2e3, xd = 3;
function _d(c, o = !1) {
  return o ? !0 : c.atLoopBoundary || c.drift <= Sd || c.seeking || c.readyState < xd ? !1 : c.msSinceLastFix >= Ed;
}
const Cd = 1.5, Td = 0.4, Md = 0.5;
let uo = null, Nd = null;
function Pd(c) {
  return uo !== null ? uo : (Nd ??= wd()) ? 0 : Td;
}
class Rd {
  constructor(o = Pd()) {
    this.latency = o;
  }
  latency;
  lastFix = /* @__PURE__ */ new WeakMap();
  /** Palauttaa true, jos raita kelattiin. force = toiston alku, käyttäjän kelaus tai raidan päälle kytkentä. */
  align(o, s, k = !1, g = performance.now()) {
    if (s.readyState < 1 || o.readyState < 1 || !k && (s.paused || o.paused)) return !1;
    const T = s.currentTime - o.currentTime, S = Math.abs(T), M = o.loop && Number.isFinite(o.duration) && Math.abs(S - o.duration) < 0.35, L = this.lastFix.get(s);
    if (!_d({
      drift: S,
      atLoopBoundary: M,
      seeking: s.seeking,
      readyState: s.readyState,
      msSinceLastFix: L === void 0 ? 1 / 0 : g - L
    }, k)) return !1;
    const V = !o.paused;
    !k && V && L !== void 0 && (this.latency = Math.min(Cd, Math.max(0, this.latency - Md * T)), uo = this.latency);
    let $ = o.currentTime + (V ? this.latency : 0);
    Number.isFinite(s.duration) && ($ = Math.min($, Math.max(0, s.duration - 0.05)));
    try {
      s.currentTime = $;
    } catch {
      return !1;
    }
    return V ? this.lastFix.set(s, g) : this.lastFix.delete(s), !0;
  }
}
function Ld(c = globalThis.navigator) {
  const o = c?.audioSession;
  o && o.type !== "playback" && (o.type = "playback");
}
const jd = () => {
  const c = globalThis.AudioContext ?? globalThis.webkitAudioContext;
  if (!c) throw new Error("Web Audio API puuttuu");
  return new c();
}, zd = 250, Fd = 0.5, ba = 2e3, Od = 50, Dd = 8;
class Id {
  samples = [];
  sample(o, s) {
    if (!Number.isFinite(o) || !Number.isFinite(s)) return;
    const k = this.samples.at(-1);
    k && s - k.wallMs < Od && this.samples.pop(), this.samples.push({ contextTime: o, wallMs: s }), this.samples.length > Dd && this.samples.shift();
  }
  reset() {
    this.samples = [];
  }
  check(o, s) {
    if (!Number.isFinite(o) || !Number.isFinite(s)) return "unknown";
    for (let k = this.samples.length - 1; k >= 0; k--) {
      const g = this.samples[k], T = s - g.wallMs;
      if (T < zd) continue;
      return (o - g.contextTime) * 1e3 < T * Fd ? "stalled" : "advancing";
    }
    return "unknown";
  }
}
function ec(c, o, s) {
  let k;
  const g = new Promise((T, S) => {
    k = setTimeout(() => S(new Error(`${s}: aikakatkaisu ${o} ms`)), o);
  });
  return Promise.race([c, g]).finally(() => clearTimeout(k));
}
function Ad(c) {
  const o = c?.name, s = c?.message;
  return typeof o == "string" && o !== "Error" ? typeof s == "string" && s ? `${o}: ${s}` : o : typeof s == "string" ? s : String(c);
}
class tc {
  constructor(o = jd, s = globalThis.navigator, k = () => performance.now()) {
    this.create = o, this.nav = s, this.now = k;
  }
  create;
  nav;
  now;
  context = null;
  gains = /* @__PURE__ */ new WeakMap();
  clock = new Id();
  recovery = null;
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
        Ld(this.nav);
      } catch (o) {
        this.lastError = "Ääni-istunnon asetus epäonnistui: " + String(o);
      }
      return (!this.context || this.context.state === "closed") && (this.context = this.create(), this.gains = /* @__PURE__ */ new WeakMap(), this.clock.reset()), this.context.state !== "running" && !this.recovery && this.context.resume().catch((o) => {
        this.lastError = "Web Audio ei käynnistynyt: " + String(o);
      }), !0;
    } catch (o) {
      return this.lastError = "Web Audio ei ole käytettävissä: " + String(o), !1;
    }
  }
  /** Kontekstin kello, kun konteksti on 'running'. Muissa tiloissa kellon pysähtyminen on odotettua. */
  runningTime() {
    const o = this.context;
    return !o || o.state !== "running" ? null : typeof o.currentTime == "number" ? o.currentTime : null;
  }
  /** Tallentaa kellonäytteen (tauko, näkyvyyden muutos, toiston alku). Muu kuin 'running' nollaa näytteet. */
  observe() {
    const o = this.runningTime();
    o === null ? this.clock.reset() : this.clock.sample(o, this.now());
  }
  /**
   * 'stalled', kun tila on 'running', mutta kello on edennyt alle MIN_CLOCK_RATE seinäkellosta
   * vähintään CLOCK_WINDOW_MS pituisella välillä. 'unknown', jos vertailukohtaa ei vielä ole.
   */
  clockState() {
    const o = this.runningTime();
    return o === null ? "unknown" : this.clock.check(o, this.now());
  }
  get recovering() {
    return this.recovery !== null;
  }
  /**
   * Käynnistää pysähtyneen kontekstin uudelleen: suspend() ja sen jälkeen resume(). Kutsutaan vain
   * käyttäjän Soita-painalluksesta. Samanaikaiset kutsut saavat saman lupauksen, joten palautuksia on
   * kerrallaan yksi. Palauttaa true, kun konteksti on taas 'running'. Virhe ei heitä vaan palauttaa false.
   */
  recover() {
    if (this.recovery) return this.recovery;
    const o = this.context;
    if (!o) return Promise.resolve(!1);
    const k = (async () => {
      try {
        if (typeof o.suspend != "function" || typeof o.resume != "function")
          throw new Error("suspend() tai resume() puuttuu");
        if (await ec(o.suspend(), ba, "suspend()"), await ec(o.resume(), ba, "resume()"), o.state !== "running") throw new Error(`tila ${o.state} palautuksen jälkeen`);
        if (o !== this.context) throw new Error("konteksti suljettiin palautuksen aikana");
        return this.clock.reset(), this.observe(), !0;
      } catch (g) {
        return this.lastError = "Web Audion palautus epäonnistui: " + Ad(g), !1;
      }
    })().finally(() => {
      this.recovery === k && (this.recovery = null);
    });
    return this.recovery = k, k;
  }
  /** Kytkee elementin yhden kerran: elementin oma ääni kulkee sen jälkeen vain GainNoden kautta. */
  route(o) {
    if (this.gains.has(o)) return !0;
    if (!this.context) return !1;
    try {
      const s = this.context.createMediaElementSource(o), k = this.context.createGain();
      return s.connect(k), k.connect(this.context.destination), this.gains.set(o, k), !0;
    } catch (s) {
      return this.lastError = "Raidan kytkentä äänenvoimakkuussäätimeen epäonnistui: " + String(s), !1;
    }
  }
  routed(o) {
    return !!o && this.gains.has(o);
  }
  setLevel(o, s) {
    const k = this.gains.get(o);
    k && (k.gain.value = s);
  }
  /** Raidan nykyinen GainNode-taso tai null, jos raitaa ei ole kytketty. */
  level(o) {
    const s = o ? this.gains.get(o) : void 0;
    return s ? s.gain.value : null;
  }
  close() {
    const o = this.context;
    this.context = null, this.gains = /* @__PURE__ */ new WeakMap(), this.clock.reset(), o?.close().catch(() => {
    });
  }
}
function Ud(c) {
  const o = new DataView(c), s = (T) => String.fromCharCode(
    o.getUint8(T),
    o.getUint8(T + 1),
    o.getUint8(T + 2),
    o.getUint8(T + 3)
  );
  if (o.byteLength < 12 || s(0) !== "RIFF" || s(8) !== "WAVE") throw new Error("Tiedosto ei ole WAV");
  let k = 12, g = null;
  for (; k + 8 <= o.byteLength; ) {
    const T = s(k), S = o.getUint32(k + 4, !0), M = k + 8;
    if (T === "fmt ") {
      let L = o.getUint16(M, !0);
      L === 65534 && S >= 26 && (L = o.getUint16(M + 24, !0)), g = {
        format: L,
        channels: o.getUint16(M + 2, !0),
        sampleRate: o.getUint32(M + 4, !0),
        blockAlign: o.getUint16(M + 12, !0),
        bitsPerSample: o.getUint16(M + 14, !0)
      };
    } else if (T === "data") {
      if (!g) throw new Error("WAV: data-lohko ennen fmt-lohkoa");
      if (!(g.format === 1 && [16, 24, 32].includes(g.bitsPerSample) || g.format === 3 && g.bitsPerSample === 32))
        throw new Error(`WAV: muotoa ${g.format}/${g.bitsPerSample} bittiä ei tueta`);
      return { ...g, dataOffset: M, dataBytes: S, frames: Math.floor(S / g.blockAlign) };
    }
    k = M + S + S % 2;
  }
  throw new Error("WAV: data-lohkoa ei löytynyt otsakkeesta");
}
function $d(c, o) {
  const s = Math.floor(c.byteLength / o.blockAlign), k = new DataView(c.buffer, c.byteOffset, c.byteLength), g = o.bitsPerSample / 8, T = o.format === 3 ? (M) => k.getFloat32(M, !0) : g === 2 ? (M) => k.getInt16(M, !0) / 32768 : g === 3 ? (M) => (k.getUint8(M) | k.getUint8(M + 1) << 8 | k.getInt8(M + 2) << 16) / 8388608 : (M) => k.getInt32(M, !0) / 2147483648, S = new Float32Array(s);
  for (let M = 0; M < s; M++) {
    let L = 0;
    const V = M * o.blockAlign;
    for (let $ = 0; $ < o.channels; $++) L += T(V + $ * g);
    S[M] = L / o.channels;
  }
  return S;
}
function Wd(c, o, s) {
  if (o === s) return c;
  const k = Math.floor(c.length * s / o), g = new Float32Array(k), T = o / s;
  for (let S = 0; S < k; S++) {
    const M = S * T, L = Math.floor(M), V = M - L, $ = c[L] ?? 0, G = c[L + 1] ?? $;
    g[S] = $ + (G - $) * V;
  }
  return g;
}
function nc(c, o) {
  if (o <= 1) return c;
  const s = Math.floor(c.length / o), k = new Float32Array(s);
  for (let g = 0; g < s; g++) {
    let T = 0;
    const S = g * o;
    for (let M = 0; M < o; M++) T += c[S + M];
    k[g] = T / o;
  }
  return k;
}
function Vd(c) {
  let o = 0;
  for (const s of c) o += s * s;
  return c.length ? Math.sqrt(o / c.length) : 0;
}
function rc(c, o, s, k) {
  const g = Math.max(0, s), T = Math.min(k, c.length - o.length);
  if (T < g) return new Float32Array(0);
  const S = new Float64Array(c.length + 1);
  for (let V = 0; V < c.length; V++) S[V + 1] = S[V] + c[V] * c[V];
  let M = 0;
  for (const V of o) M += V * V;
  const L = new Float32Array(T - g + 1);
  for (let V = g; V <= T; V++) {
    let $ = 0;
    for (let X = 0; X < o.length; X++) $ += o[X] * c[X + V];
    const G = Math.sqrt(M * (S[V + o.length] - S[V]));
    L[V - g] = G > 0 ? $ / G : 0;
  }
  return L;
}
function lc(c, o) {
  if (o <= 1) return c;
  const s = new Float32Array(c.length);
  let k = 0;
  for (let g = 0; g < c.length; g++)
    k += c[g], g >= o && (k -= c[g - o]), s[g] = k / Math.min(o, g + 1);
  return s;
}
function Bd(c, o, s) {
  let k = o;
  for (; k > 0 && c[k - 1] <= c[k]; ) k--;
  let g = o;
  for (; g < c.length - 1 && c[g + 1] <= c[g]; ) g++;
  let T = 0;
  for (let S = 0; S < c.length; S++) {
    if (S >= k && S <= g || Math.abs(S - o) <= s) continue;
    (S === 0 || c[S] >= c[S - 1]) && (S === c.length - 1 || c[S] >= c[S + 1]) && c[S] > T && (T = c[S]);
  }
  return T;
}
function Hd(c, o, s, k = 16) {
  if (o.length === 0 || c.length < o.length) throw new Error("Referenssi on lyhyempi kuin näyte");
  const g = nc(c, k), T = nc(o, k), S = rc(g, T, 0, g.length - T.length);
  let M = 0;
  for (let D = 1; D < S.length; D++) S[D] > S[M] && (M = D);
  const L = Bd(S, M, Math.max(1, Math.round(0.02 * s / k))), V = M * k, $ = Math.max(0, V - 2 * k), G = Math.min(c.length - o.length, V + 2 * k), X = Math.max(1, Math.round(s / 12e3)), le = rc(lc(c, X), lc(o, X), $, G);
  let J = 0;
  for (let D = 1; D < le.length; D++) le[D] > le[J] && (J = D);
  let j = 0;
  if (J > 0 && J < le.length - 1) {
    const [D, se, Ie] = [le[J - 1], le[J], le[J + 1]], de = D - 2 * se + Ie;
    de < 0 && (j = Math.max(-0.5, Math.min(0.5, 0.5 * (D - Ie) / de)));
  }
  return { lag: $ + J + j, score: le[J], runnerUp: L };
}
function Qd(c, o = 0.6, s = 0.1) {
  return c.score >= o && c.score - c.runnerUp >= s;
}
const oo = 32768, mi = 1.5, mc = /* @__PURE__ */ new WeakMap();
function Kd() {
  const c = globalThis.AudioContext?.prototype;
  if (!c || c.__kaksiraita) return;
  const o = c.createMediaElementSource;
  c.createMediaElementSource = function(s) {
    const k = o.call(this, s), g = this.createAnalyser();
    return g.fftSize = oo, k.connect(g), mc.set(s, { analyser: g, context: this, source: k }), k;
  }, c.__kaksiraita = !0;
}
function tl(c) {
  return c ? mc.get(c) ?? null : null;
}
function ic(c) {
  let o = null;
  async function s(g, T) {
    const S = await c();
    return new Uint8Array(await S.slice(g, T + 1).arrayBuffer());
  }
  const k = () => {
    if (!o) {
      const g = s(0, 4095).then((T) => Ud(T.slice().buffer));
      o = g, g.catch(() => {
        o === g && (o = null);
      });
    }
    return o;
  };
  return {
    async durationSeconds() {
      const g = await k();
      return g.frames / g.sampleRate;
    },
    async window(g, T) {
      const S = await k(), M = Math.max(0, Math.floor(g * S.sampleRate)), L = Math.min(S.frames, Math.ceil(T * S.sampleRate));
      if (L <= M) throw new Error("Referenssi-ikkuna on tiedoston ulkopuolella");
      const V = await s(S.dataOffset + M * S.blockAlign, S.dataOffset + L * S.blockAlign - 1);
      return { samples: $d(V, S), sampleRate: S.sampleRate, startSeconds: M / S.sampleRate };
    }
  };
}
function uc(c, o) {
  return {
    async durationSeconds() {
      return c.length / o;
    },
    async window(s, k) {
      const g = Math.max(0, Math.floor(s * o)), T = Math.min(c.length, Math.ceil(k * o));
      return { samples: c.slice(g, T), sampleRate: o, startSeconds: g / o };
    }
  };
}
async function Yd(c, o) {
  const s = o.map((J) => ({ input: J, tap: tl(J.element) }));
  if (s.some((J) => !J.tap)) throw new Error("Raitaa ei ole vielä kytketty Web Audioon");
  const k = s[0].tap.context;
  let g = 0, T = [], S = [], M = 0;
  for (; ; ) {
    g++;
    const J = k.currentTime;
    if (T = s.map(({ tap: j }) => {
      const D = new Float32Array(oo);
      return j.analyser.getFloatTimeDomainData(D), D;
    }), S = s.map(({ input: j }) => j.element.currentTime), M = k.currentTime, M === J || g >= 8) break;
    await new Promise((j) => setTimeout(j, 0));
  }
  const L = k.sampleRate, V = oo / L, $ = [];
  for (let J = 0; J < s.length; J++) {
    const { input: j } = s[J], D = T[J], se = Vd(D), Ie = { name: j.name, mediaTime: S[J], probeRms: se };
    try {
      const de = S[J] + j.referenceOffsetSeconds, ge = await j.reference.durationSeconds();
      if (de - V - mi < 0 || de + mi > ge)
        throw new Error("Kohta on referenssin ulkopuolella");
      const xe = await j.reference.window(de - V - mi, de + mi), Le = Wd(xe.samples, xe.sampleRate, L), Te = Hd(Le, D, L), Fe = xe.startSeconds + (Te.lag + D.length) / L, Ke = Qd(Te) && se > 1e-4;
      $.push({
        ...Ie,
        renderedTime: Fe,
        score: Te.score,
        runnerUp: Te.runnerUp,
        reliable: Ke,
        mediaMinusRenderedMs: (de - Fe) * 1e3
      });
    } catch (de) {
      $.push({ ...Ie, renderedTime: null, score: null, runnerUp: null, reliable: !1, mediaMinusRenderedMs: null, error: String(de) });
    }
  }
  const [G, X] = $, le = G.reliable && X.reliable && G.renderedTime !== null && X.renderedTime !== null;
  return {
    phase: c,
    ms: Math.round(performance.now()),
    contextTime: M,
    sampleRate: L,
    attempts: g,
    tracks: $,
    mediaDiffMs: (X.mediaTime - G.mediaTime) * 1e3,
    renderedDiffMs: le ? (X.renderedTime - G.renderedTime) * 1e3 : null,
    reliable: le
  };
}
class Xd {
  events = [];
  samples = [];
  measurements = [];
  limit = 4e3;
  record(o, s = {}) {
    this.events.push({ ms: Math.round(performance.now()), event: o, ...s }), this.events.length > this.limit && this.events.shift();
  }
  sample(o) {
    this.samples.push({ ms: Math.round(performance.now()), event: "sample", ...o }), this.samples.length > this.limit && this.samples.shift();
  }
}
function Gd(c) {
  const o = /* @__PURE__ */ new Map(), s = [];
  for (const k of c) {
    const g = String(k.track ?? "");
    if (k.event === "seek-write" && o.set(g, k), k.event === "seeked" && o.has(g)) {
      const T = o.get(g);
      s.push({ track: g, forced: !!T.forced, ms: k.ms - T.ms, from: Number(T.from), to: Number(T.to) }), o.delete(g);
    }
  }
  return s;
}
class vc extends Error {
  constructor(o, s, k) {
    super(`${s} (${k} ${k === 1 ? "yritys" : "yritystä"})`), this.url = o, this.reason = s, this.attempts = k, this.name = "LoadError";
  }
  url;
  reason;
  attempts;
}
class $n extends Error {
  constructor(o, s) {
    super(o), this.retryable = s;
  }
  retryable;
}
const Zd = (c) => c >= 500 || c === 408 || c === 429;
async function Jd(c, o, s) {
  const k = new AbortController(), g = s.idleTimeoutMs ?? 2e4;
  let T = 0, S = !1, M = null;
  const L = () => {
    clearTimeout(T), T = setTimeout(() => {
      S = !0, k.abort(), M?.cancel().catch(() => {
      });
    }, g);
  };
  L();
  const V = g >= 1e3 ? `${Math.round(g / 1e3)} s` : `${g} ms`;
  try {
    let $;
    try {
      $ = await (s.fetchImpl ?? fetch)(c, { signal: k.signal });
    } catch (j) {
      throw new $n(S ? `ei vastausta ${V}` : `verkkovirhe (${String(j)})`, !0);
    }
    if (!$.ok) throw new $n(`HTTP ${$.status}`, Zd($.status));
    const G = Number($.headers.get("Content-Length")) || null, X = $.headers.get("Content-Type") ?? "application/octet-stream";
    if (!$.body) {
      const j = await $.blob();
      return s.onProgress?.({ loaded: j.size, total: G, attempt: o }), j;
    }
    M = $.body.getReader();
    const le = [];
    let J = 0;
    for (; ; ) {
      let j;
      try {
        j = await M.read();
      } catch (D) {
        throw new $n(S ? `lataus pysähtyi ${V}` : `lataus katkesi (${String(D)})`, !0);
      }
      if (S) throw new $n(`lataus pysähtyi ${V}`, !0);
      if (j.done) break;
      L(), le.push(j.value), J += j.value.byteLength, s.onProgress?.({ loaded: J, total: G, attempt: o });
    }
    if (G !== null && J !== G) throw new $n(`vajaa tiedosto (${J}/${G} tavua)`, !0);
    return new Blob(le, { type: X });
  } finally {
    clearTimeout(T);
  }
}
async function qd(c, o = {}) {
  const s = Math.max(1, o.attempts ?? 3), k = o.retryDelaysMs ?? [1e3, 3e3], g = o.sleep ?? ((T) => new Promise((S) => setTimeout(S, T)));
  for (let T = 1; ; T++)
    try {
      return await Jd(c, T, o);
    } catch (S) {
      const M = S instanceof $n ? S.message : String(S), L = S instanceof $n && S.retryable && T < s;
      if (o.onAttemptFailed?.({ attempt: T, reason: M, willRetry: L }), !L) throw new vc(c, M, T);
      await g(k[Math.min(T - 1, k.length - 1)] ?? 0);
    }
}
class bd {
  constructor(o = () => ({})) {
    this.options = o;
  }
  options;
  cache = /* @__PURE__ */ new Map();
  load(o) {
    let s = this.cache.get(o);
    return s || (s = qd(o, this.options(o)), this.cache.set(o, s), s.catch(() => {
      this.cache.get(o) === s && this.cache.delete(o);
    })), s;
  }
}
function so(c, o) {
  let s = c * 2654435761 + o * 2246822507 | 0;
  return s = Math.imul(s ^ s >>> 16, 2146121005), s = Math.imul(s ^ s >>> 15, 2221713035), s ^= s >>> 16, (s >>> 0) / 4294967296 * 2 - 1;
}
function ep(c, o) {
  const s = [];
  let k = Math.round(0.25 * o);
  for (let g = 0; k < c; g++)
    s.push(k), k += Math.round((0.35 + 0.4 * (so(g, 101) * 0.5 + 0.5)) * o);
  return s;
}
function oc(c, o, s, k, g, T) {
  const S = new Float32Array(c), M = Math.round(0.1 * o), L = Math.round(0.03 * o), V = ep(c, o);
  let $ = 0, G = 0;
  for (let X = 0; X < c; X++) {
    const le = X - s;
    if (le < 0) {
      S[X] = 0;
      continue;
    }
    const J = 0.03 + 0.12 * (so(Math.floor(le / M), k + 7) * 0.5 + 0.5);
    G += 0.5 * (so(le, k) - G);
    let j = J * G;
    for (; $ < V.length && V[$] + L <= le; ) $++;
    const D = $ < V.length ? le - V[$] : -1;
    if (D >= 0 && D < L) {
      const se = 0.5 - 0.5 * Math.cos(2 * Math.PI * D / L);
      j += T * se * Math.sin(2 * Math.PI * g * D / o);
    }
    S[X] = j;
  }
  return S;
}
function sc(c = 60, o = 48e3, s = 0) {
  const k = Math.round(c * o), g = Math.round(s * o / 1e3);
  return {
    sampleRate: o,
    shiftSamples: g,
    tausta: oc(k, o, 0, 11, 300, 0.22),
    kitara: oc(k, o, g, 23, 1500, 0.16)
  };
}
function tp(c, o) {
  const s = new ArrayBuffer(44 + c.length * 2), k = new DataView(s), g = (T, S) => {
    for (let M = 0; M < S.length; M++) k.setUint8(T + M, S.charCodeAt(M));
  };
  g(0, "RIFF"), k.setUint32(4, 36 + c.length * 2, !0), g(8, "WAVE"), g(12, "fmt "), k.setUint32(16, 16, !0), k.setUint16(20, 1, !0), k.setUint16(22, 1, !0), k.setUint32(24, o, !0), k.setUint32(28, o * 2, !0), k.setUint16(32, 2, !0), k.setUint16(34, 16, !0), g(36, "data"), k.setUint32(40, c.length * 2, !0);
  for (let T = 0; T < c.length; T++) {
    const S = Math.max(-1, Math.min(1, c[T]));
    k.setInt16(44 + T * 2, Math.round(S * 32767), !0);
  }
  return s;
}
const Un = ["tausta", "kitara"], ac = { tausta: "tausta", kitara: "kitara" }, cc = { state: "odottaa", loaded: 0, total: null, attempt: 1, reason: "", url: null }, np = { 1: "keskeytetty", 2: "verkkovirhe", 3: "purkuvirhe", 4: "lähdettä ei voi toistaa" }, vi = "assets/audio/kaksiraitatesti/", yi = {
  mp3: { tausta: vi + "yksi-sointu-akustinen-tausta.mp3", kitara: vi + "yksi-sointu-akustinen-kitara.mp3" },
  wav: { tausta: vi + "yksi-sointu-akustinen-tausta-0-120s.wav", kitara: vi + "yksi-sointu-akustinen-kitara-0-120s.wav" }
}, fc = 1e-3, dc = 3e3;
function rp() {
  const c = new URLSearchParams(location.search), o = c.get("lahde"), s = o === "wav" || o === "synteettinen" ? o : "mp3", k = Number(c.get("siirto") ?? "0"), g = c.get("tahdistin") === "pois" ? "pois" : c.get("tahdistin") === "ei-korjauksia" ? "ei-korjauksia" : "kaytossa", T = Number(c.get("mittausvali") ?? "5000"), S = c.get("moottori") === "uusi" ? "uusi" : "nykyinen", M = s === "mp3" || s === "wav" && c.get("lataus") === "verkko" ? "verkko" : "muisti", L = Number(c.get("latausaikaraja") ?? "20000");
  return {
    source: s,
    engine: S,
    loading: M,
    loadIdleMs: Number.isFinite(L) && L >= 500 ? L : 2e4,
    syncMode: S === "uusi" ? "uusi-moottori" : g,
    sync: S === "nykyinen" && g !== "pois",
    corrections: S === "nykyinen" && g === "kaytossa",
    offsetMs: s === "synteettinen" && Number.isFinite(k) ? k : 0,
    measureIntervalMs: Number.isFinite(T) && T >= 1e3 ? T : 5e3
  };
}
function gi(c) {
  if (!Number.isFinite(c) || c < 0) return "0:00";
  const o = Math.floor(c);
  return `${Math.floor(o / 60)}:${String(o % 60).padStart(2, "0")}`;
}
const io = (c) => c === null ? "?" : (c / 1e6).toFixed(1).replace(".", ",");
function el(c) {
  const o = c.error;
  return o ? (np[o.code] ?? `virhe ${o.code}`) + (o.message ? `: ${o.message}` : "") : "";
}
const Ot = (c, o = 1) => c == null || !Number.isFinite(c) ? "–" : c.toFixed(o);
function pc(c) {
  if (!c.length) return null;
  const o = [...c].sort((k, g) => k - g), s = Math.floor(o.length / 2);
  return o.length % 2 ? o[s] : (o[s - 1] + o[s]) / 2;
}
function lp() {
  const c = b.useMemo(rp, []), o = b.useMemo(() => c.source === "synteettinen" ? sc(60, 48e3, c.offsetMs) : null, [c]), s = b.useMemo(() => {
    if (!o) return null;
    const f = (w) => URL.createObjectURL(new Blob([tp(w, o.sampleRate)], { type: "audio/wav" }));
    return { tausta: f(o.tausta), kitara: f(o.kitara) };
  }, [o]), k = c.source === "wav" && c.loading === "muisti", [g, T] = b.useState({ tausta: cc, kitara: cc }), S = b.useRef({}), M = b.useRef({ tausta: 0, kitara: 0 }), L = b.useMemo(() => new bd((f) => {
    const w = f === yi.wav.kitara ? "kitara" : "tausta";
    return {
      idleTimeoutMs: c.loadIdleMs,
      onProgress: ({ loaded: P, total: B, attempt: U }) => {
        P !== B && P - M.current[w] < 1 << 20 || (M.current[w] = P, T((te) => ({ ...te, [w]: { ...te[w], loaded: P, total: B, attempt: U } })));
      },
      onAttemptFailed: ({ attempt: P, reason: B, willRetry: U }) => {
        M.current[w] = 0, q("lataus-yritys-epaonnistui", { track: w, attempt: P, reason: B, willRetry: U });
      }
    };
  }), [c]), V = s ?? (k ? { tausta: g.tausta.url ?? void 0, kitara: g.kitara.url ?? void 0 } : yi[c.source]), $ = b.useMemo(() => o && c.offsetMs !== 0 ? sc(60, o.sampleRate, 0) : o, [c, o]), G = b.useRef(() => Promise.reject(new Error("ei alustettu"))), X = b.useRef(() => Promise.reject(new Error("ei alustettu"))), le = b.useRef({ tausta: !1, kitara: !1 }), J = b.useMemo(() => $ ? { tausta: uc($.tausta, $.sampleRate), kitara: uc($.kitara, $.sampleRate) } : { tausta: ic(() => X.current("tausta")), kitara: ic(() => X.current("kitara")) }, [$]), j = b.useRef(null), D = b.useRef(null), se = b.useRef(0), Ie = b.useRef(new Rd()), de = b.useRef(null), ge = b.useRef(null), xe = b.useRef(new Xd()), Le = b.useRef(!1), Te = b.useRef(/* @__PURE__ */ new WeakMap()), Fe = b.useRef(!1), Ke = b.useRef([]), [Ae, qe] = b.useState(!1), [pt, je] = b.useState(0), [ot, ht] = b.useState(0), [Ve, ie] = b.useState(""), [R, Q] = b.useState(""), [O, h] = b.useState([]), [E, ee] = b.useState(null), [ne, ae] = b.useState([]), [ue, he] = b.useState(""), oe = b.useRef(0), me = b.useRef(!1), q = (f, w = {}) => xe.current.record(f, w);
  function Xt(f) {
    const w = L.load(yi.wav[f]);
    if (S.current[f] === w) return w;
    S.current[f] = w;
    const P = performance.now();
    return M.current[f] = 0, q("lataus-alku", { track: f, url: yi.wav[f] }), T((B) => ({ ...B, [f]: { ...B[f], state: "lataa", loaded: 0, reason: "" } })), w.then((B) => {
      q("lataus-valmis", { track: f, bytes: B.size, kestoMs: Math.round(performance.now() - P) }), T((U) => ({ ...U, [f]: { ...U[f], state: "valmis", loaded: B.size, total: B.size, reason: "", url: k ? URL.createObjectURL(B) : null } }));
    }, (B) => {
      const U = B instanceof vc ? B.message : String(B);
      q("lataus-virhe", { track: f, reason: U }), le.current[f] = !0, T((te) => ({ ...te, [f]: { ...te[f], state: "virhe", reason: U } }));
    }), w;
  }
  G.current = Xt, X.current = (f) => le.current[f] ? Promise.reject(new Error(`Mittausreferenssi (${f}) ei latautunut: ${g[f].reason}`)) : Xt(f);
  function nl() {
    for (const f of Un)
      g[f].state === "virhe" && (le.current[f] = !1, Xt(f).catch(() => {
      }));
  }
  const St = !k || Un.every((f) => g[f].state === "valmis"), Wn = Un.filter((f) => g[f].state === "virhe");
  function rl(f) {
    let w = Te.current.get(f);
    return w || (w = {
      get currentTime() {
        return f.currentTime;
      },
      set currentTime(P) {
        q("seek-write", { track: "kitara", from: f.currentTime, to: P, forced: Le.current, readyState: f.readyState, paused: f.paused }), f.currentTime = P;
      },
      get paused() {
        return f.paused;
      },
      get seeking() {
        return f.seeking;
      },
      get readyState() {
        return f.readyState;
      },
      get loop() {
        return f.loop;
      },
      get duration() {
        return f.duration;
      }
    }, Te.current.set(f, w)), w;
  }
  function Gt(f = !1) {
    const w = j.current, P = D.current;
    !w || !P || !c.sync || !f && !c.corrections || (Le.current = f, Ie.current.align(w, rl(P), f));
  }
  function Vn(f, w) {
    q("seek-write", { track: "tausta", from: f.currentTime, to: w, forced: "käyttäjä", readyState: f.readyState, paused: f.paused });
    try {
      f.currentTime = w;
    } catch {
    }
  }
  function pr() {
    const f = ge.current;
    f && (j.current && f.setLevel(j.current, qa("backing", 100)), D.current && f.setLevel(D.current, qa("guitar", 100)));
  }
  function Dt() {
    for (const f of Ke.current) clearTimeout(f);
    Ke.current = [];
  }
  function st(f) {
    se.current++, Dt(), q("pause-call", { cause: f }), ge.current?.observe(), j.current?.pause(), D.current?.pause(), c.engine === "uusi" && j.current && (oe.current = j.current.currentTime), qe(!1);
  }
  function Et(f) {
    const w = j.current;
    if (!w || !Number.isFinite(f)) return;
    const P = Math.max(0, Math.min(f, Number.isFinite(w.duration) ? w.duration : f));
    if (q("control", { control: "kelaus", to: P }), c.engine === "uusi") {
      oe.current = P, je(P), Ae ? bt(P, "kelaus") : se.current++;
      return;
    }
    de.current = P, je(P), Vn(w, P), w.paused || Bn("kelaus", se.current);
  }
  function Zt(f) {
    const w = de.current;
    if (w === null || f !== j.current || f.seeking) return;
    const P = Number.isFinite(f.duration) ? Math.min(w, f.duration) : w;
    if (P !== w && (de.current = P, je(P)), Math.abs(f.currentTime - P) < fc) return;
    const B = f.seekable;
    for (let U = 0; U < B.length; U++)
      if (B.start(U) <= P && P <= B.end(U)) {
        Vn(f, P);
        return;
      }
  }
  async function hr(f, w) {
    if (Fe.current || w !== se.current) return;
    const P = j.current, B = D.current;
    if (!(!P || !B || !tl(P) || !tl(B))) {
      Fe.current = !0;
      try {
        const U = [
          { name: "tausta", element: P, reference: J.tausta, referenceOffsetSeconds: 0 },
          { name: "kitara", element: B, reference: J.kitara, referenceOffsetSeconds: 0 }
        ], te = await Yd(f, U);
        xe.current.measurements.push(te), q("mittaus", { phase: f, mediaDiffMs: te.mediaDiffMs, renderedDiffMs: te.renderedDiffMs, reliable: te.reliable }), h((ve) => [...ve, te]);
      } catch (U) {
        q("mittausvirhe", { phase: f, reason: String(U) });
      } finally {
        Fe.current = !1;
      }
    }
  }
  function Bn(f, w) {
    Dt(), Ke.current.push(window.setTimeout(() => {
      hr(f, w);
    }, dc));
    const P = () => {
      w === se.current && (hr("jatkuva", w), Ke.current.push(window.setTimeout(P, c.measureIntervalMs)));
    };
    Ke.current.push(window.setTimeout(P, dc + c.measureIntervalMs));
  }
  function ll(f) {
    if (f !== j.current) return;
    if (c.engine === "uusi") {
      je(f.currentTime);
      return;
    }
    const w = de.current;
    if (w === null)
      je(f.currentTime);
    else if (f.readyState >= 1 && !f.seeking && Math.abs(f.currentTime - w) < fc) {
      de.current = null, q("kelaus-valmis", { time: f.currentTime }), Gt(!0);
      return;
    }
    f.paused || Gt();
  }
  function Sn(f, w) {
    return q("play-call", { track: w, time: f.currentTime, readyState: f.readyState }), f.play().then(
      () => {
        q("play-result", { track: w, result: "fulfilled", time: f.currentTime });
      },
      (P) => {
        throw q("play-result", { track: w, result: "rejected", reason: P?.name ?? String(P) }), P;
      }
    );
  }
  async function En() {
    const f = j.current, w = D.current;
    if (!f || !w || !Ae && !St) return;
    if (q("control", { control: Ae ? "tauko" : "soita" }), Ae) {
      st("painallus");
      return;
    }
    if (c.engine === "uusi") return bt(oe.current, me.current ? "jatko" : "käynnistys");
    ie("");
    for (const [Me, Ye] of [[f, "tausta"], [w, "kitara"]])
      Me.error && (q("uusi-lataus", { track: Ye, reason: el(Me) }), Me.load());
    const P = f.currentTime > 0.05, B = de.current ?? f.currentTime;
    Number.isFinite(f.duration) && B >= f.duration - 0.05 && Et(0), Zt(f);
    const U = ge.current ??= new tc(), te = U.unlock() && [f, w].map((Me) => U.route(Me)).every(Boolean);
    Q(te ? "" : "Web Audio -kytkentä epäonnistui: " + U.lastError);
    let ve = null;
    te && (U.recovering || U.clockState() === "stalled") && (q("palautus", { reason: U.recovering ? "kesken" : "kello pysähtynyt" }), ve = U.recover()), pr(), Gt(!0);
    const Be = ++se.current;
    if (ve) {
      const Me = await ve;
      if (q("palautus-tulos", { restored: Me, error: Me ? "" : U.lastError }), Be !== se.current) return;
      if (!Me) {
        ie("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + U.lastError);
        return;
      }
    }
    try {
      if (await Promise.all([Sn(f, "tausta"), Sn(w, "kitara")]), Be !== se.current) return;
      Gt(), qe(!0), q("toisto-alkoi", { tausta: f.currentTime, kitara: w.currentTime }), Bn(P ? "jatko" : "käynnistys", Be), te && (U.observe(), window.setTimeout(() => {
        Be === se.current && (U.state !== "running" ? ie(`Ääni ei käynnistynyt (Web Audio: ${U.state}).`) : U.clockState() === "stalled" && (st("vahti"), ie("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
      }, 800));
    } catch {
      if (Be !== se.current) return;
      st("virhe"), ie(Jt() || "Toisto epäonnistui.");
    }
  }
  function Jt() {
    const f = [[j.current, "tausta"], [D.current, "kitara"]].filter(([w]) => w?.error).map(([w, P]) => `${P}: ${el(w)}`);
    return f.length ? `Äänitiedoston lataus epäonnistui (${f.join("; ")}). Paina Soita yrittääksesi uudelleen.` : "";
  }
  function mr(f, w) {
    Ae && st("latausvirhe"), ie(`Äänitiedoston lataus epäonnistui (${f}: ${el(w)}). Paina Soita yrittääksesi uudelleen.`);
  }
  function qt(f, w, P = 5e3) {
    return new Promise((B) => {
      const U = () => f.readyState >= 1 && !f.seeking && Math.abs(f.currentTime - w) < 0.25;
      if (f.error) {
        B("virhe");
        return;
      }
      if (U()) {
        B("valmis");
        return;
      }
      const te = ["loadedmetadata", "seeked", "canplay", "loadeddata", "error"], ve = () => {
        f.error ? Me("virhe") : U() && Me("valmis");
      }, Be = window.setTimeout(() => Me("aikakatkaisu"), P);
      function Me(Ye) {
        window.clearTimeout(Be);
        for (const Se of te) f.removeEventListener(Se, ve);
        B(Ye);
      }
      for (const Ye of te) f.addEventListener(Ye, ve);
    });
  }
  async function bt(f, w) {
    const P = ++se.current;
    Dt(), ie("");
    const B = me.current;
    me.current = !0, q("tuore-aloitus", { phase: w, target: f, reload: B }), je(f);
    const U = j.current, te = D.current;
    if (!U || !te) return;
    const ve = ge.current ??= new tc(), Be = ve.unlock() && [U, te].map((Se) => ve.route(Se)).every(Boolean);
    Q(Be ? "" : "Web Audio -kytkentä epäonnistui: " + ve.lastError);
    let Me = null;
    Be && (ve.recovering || ve.clockState() === "stalled") && (q("palautus", { reason: ve.recovering ? "kesken" : "kello pysähtynyt" }), Me = ve.recover()), pr();
    for (const Se of [U, te])
      Se.pause(), (B || Se.error) && Se.load(), f > 0 && (q("seek-write", { track: Se === U ? "tausta" : "kitara", from: Se.currentTime, to: f, forced: "aloitus", readyState: Se.readyState, paused: !0 }), Se.currentTime = f);
    if (Me) {
      const Se = await Me;
      if (q("palautus-tulos", { restored: Se, error: Se ? "" : ve.lastError }), P !== se.current) return;
      if (!Se) {
        ie("Ääni ei palautunut: Web Audio on pysähtynyt. Lataa sivu uudelleen. " + ve.lastError);
        return;
      }
    }
    const Ye = await Promise.all([qt(U, f), qt(te, f)]);
    if (q("kelattu", { tausta: Ye[0], kitara: Ye[1], tT: U.currentTime, tK: te.currentTime }), P === se.current) {
      if (Ye.includes("virhe")) {
        q("latausvirhe", { target: f, tausta: el(U), kitara: el(te) }), oe.current = f, qe(!1), ie(Jt());
        return;
      }
      if (Ye.includes("aikakatkaisu")) {
        const Se = Un.filter((sl, ki) => Ye[ki] !== "valmis");
        q("kelaus-aikakatkaisu", { target: f, raidat: Se }), oe.current = f, qe(!1), ie(`Kelaus ei valmistunut (${Se.join(", ")}). Paina Soita uudelleen.`);
        return;
      }
      try {
        if (await Promise.all([Sn(U, "tausta"), Sn(te, "kitara")]), P !== se.current) return;
        qe(!0), q("toisto-alkoi", { tausta: U.currentTime, kitara: te.currentTime }), Bn(w, P), Be && (ve.observe(), window.setTimeout(() => {
          P === se.current && (ve.state !== "running" ? ie(`Ääni ei käynnistynyt (Web Audio: ${ve.state}).`) : ve.clockState() === "stalled" && (st("vahti"), ie("Ääni ei kulje: Web Audio on pysähtynyt. Paina Soita uudelleen.")));
        }, 800));
      } catch (Se) {
        if (P !== se.current) return;
        st("virhe");
        const sl = Se?.name === "NotAllowedError";
        ie(sl ? "Toisto vaatii uuden painalluksen. Paina Soita." : Jt() || "Toisto epäonnistui.");
      }
    }
  }
  function vr(f) {
    const w = j.current?.currentTime ?? 0;
    q("kuulokuva", { value: f, time: w }), ae((P) => [...P, { value: f, time: w }]);
  }
  function Hn() {
    const f = j.current;
    return {
      meta: {
        test: "kaksiraitatesti",
        source: c.source,
        sync: c.sync,
        syncMode: c.syncMode,
        offsetMs: c.offsetMs,
        measureIntervalMs: c.measureIntervalMs,
        engine: c.engine,
        loading: c.loading,
        bundle: new URL(import.meta.url).searchParams.get("v"),
        files: V,
        userAgent: navigator.userAgent,
        fileLoads: Object.fromEntries(Un.map((w) => [w, { state: g[w].state, bytes: g[w].loaded, attempt: g[w].attempt, reason: g[w].reason }])),
        audioSession: navigator.audioSession?.type ?? null,
        contextSampleRate: tl(f)?.context.sampleRate ?? null
      },
      seekLatencies: Gd(xe.current.events),
      measurements: xe.current.measurements,
      events: xe.current.events,
      samples: xe.current.samples
    };
  }
  function il() {
    he(JSON.stringify(Hn()));
  }
  const xn = b.useRef(En);
  xn.current = En;
  const _n = b.useRef(Et);
  _n.current = Et;
  const Cn = b.useRef(!1), [It, yr] = b.useState("");
  async function gr() {
    if (Cn.current || Ae || !St) return;
    Cn.current = !0;
    const f = (P) => new Promise((B) => window.setTimeout(B, P)), w = (P) => {
      q("vakiokoe", { step: P, time: j.current?.currentTime ?? 0 }), yr(P);
    };
    try {
      w("soita"), await xn.current(), await f(25e3), w("kelaus"), _n.current(c.source === "synteettinen" ? 30 : 60), await f(15e3), w("tauko"), await xn.current(), await f(3e3), w("jatko"), await xn.current(), await f(15e3), w("tauko-loppu"), await xn.current(), w("valmis");
    } finally {
      Cn.current = !1;
    }
  }
  const At = b.useRef(Hn);
  At.current = Hn, b.useEffect(() => {
    window.kaksiraitatesti = {
      report: () => At.current(),
      // Selaintesteille: peräkkäiset ja keskeneräisen kelauksen aikana tehdyt kelaukset.
      seek: (f) => _n.current(f)
    };
  }, []), b.useEffect(() => {
    if (c.source !== "synteettinen")
      for (const f of Un) G.current(f).catch(() => {
      });
  }, [c]), b.useEffect(() => {
    const f = [[j.current, "tausta"], [D.current, "kitara"]], w = ["loadstart", "emptied", "loadedmetadata", "canplay", "canplaythrough", "play", "playing", "waiting", "stalled", "seeking", "seeked", "pause", "ended", "error"], P = [];
    for (const [B, U] of f)
      if (B)
        for (const te of w) {
          const ve = () => q(te, {
            track: U,
            time: B.currentTime,
            readyState: B.readyState,
            paused: B.paused,
            ...te === "error" ? { code: B.error?.code ?? null, message: B.error?.message ?? "" } : {}
          });
          B.addEventListener(te, ve), P.push(() => B.removeEventListener(te, ve));
        }
    return () => P.forEach((B) => B());
  }, []), b.useEffect(() => {
    const f = window.setInterval(() => {
      const P = j.current, B = D.current;
      if (!P || !B) return;
      const U = tl(P)?.context, te = (B.currentTime - P.currentTime) * 1e3;
      xe.current.sample({
        tausta: P.currentTime,
        kitara: B.currentTime,
        mediaDiffMs: te,
        pausedT: P.paused,
        pausedK: B.paused,
        readyT: P.readyState,
        readyK: B.readyState,
        contextState: U?.state ?? null,
        contextTime: U?.currentTime ?? null,
        hidden: document.hidden
      }), ee({ diff: te, tausta: P.currentTime, kitara: B.currentTime });
    }, 500), w = () => {
      q("visibilitychange", { hidden: document.hidden }), ge.current?.observe(), document.hidden && st("sivu-piiloon");
    };
    return document.addEventListener("visibilitychange", w), () => {
      clearInterval(f), document.removeEventListener("visibilitychange", w), se.current++, Dt(), ge.current?.close();
    };
  }, []);
  const en = O.filter((f) => f.reliable && f.renderedDiffMs !== null), ul = ["käynnistys", "jatko", "kelaus", "jatkuva"].map((f) => {
    const w = en.filter((U) => U.phase === f), P = w.map((U) => U.renderedDiffMs), B = w.map((U) => U.mediaDiffMs);
    return {
      phase: f,
      count: w.length,
      renderedMedian: pc(P),
      renderedMaxAbs: P.length ? Math.max(...P.map(Math.abs)) : null,
      mediaMedian: pc(B),
      unreliable: O.filter((U) => U.phase === f && !U.reliable).length
    };
  }), kr = c.source === "synteettinen" ? 30 : 60, Ut = (f, w = "kaytossa") => `?lahde=${f}${w === "kaytossa" ? "" : "&tahdistin=" + w}`, ol = c.source === "mp3" ? "MP3" : c.source === "wav" ? `WAV (0–120 s, ${k ? "muistista" : "verkosta"})` : `Synteettinen (kitara siirretty ${c.offsetMs} ms myöhemmäksi)`;
  return /* @__PURE__ */ F.jsxs("main", { className: "kaksiraita", children: [
    /* @__PURE__ */ F.jsx("h1", { children: "Kahden raidan synkronointitesti" }),
    /* @__PURE__ */ F.jsxs("p", { className: "mode", "data-source": c.source, "data-sync": c.sync ? "on" : "off", "data-sync-mode": c.syncMode, children: [
      "Tila: ",
      /* @__PURE__ */ F.jsx("strong", { children: ol }),
      " · ",
      c.engine === "uusi" ? /* @__PURE__ */ F.jsx("strong", { children: "uusi moottori (korjausehdokas)" }) : /* @__PURE__ */ F.jsxs(F.Fragment, { children: [
        "tahdistin ",
        /* @__PURE__ */ F.jsx("strong", { children: c.syncMode === "kaytossa" ? "käytössä" : c.syncMode === "pois" ? "pois" : "ilman korjauskelauksia" })
      ] })
    ] }),
    /* @__PURE__ */ F.jsxs("p", { className: "links", children: [
      /* @__PURE__ */ F.jsx("a", { href: Ut("mp3"), children: "MP3" }),
      " · ",
      /* @__PURE__ */ F.jsx("a", { href: Ut("wav"), children: "WAV" }),
      " · ",
      /* @__PURE__ */ F.jsx("a", { href: Ut("synteettinen"), children: "Synteettinen" }),
      " · ",
      /* @__PURE__ */ F.jsx("a", { href: Ut(c.source), children: "tahdistin käyttöön" }),
      " · ",
      /* @__PURE__ */ F.jsx("a", { href: Ut(c.source, "pois"), children: "pois" }),
      " · ",
      /* @__PURE__ */ F.jsx("a", { href: Ut(c.source, "ei-korjauksia"), children: "ilman korjauksia" }),
      " · ",
      /* @__PURE__ */ F.jsx("a", { href: `?lahde=${c.source}&moottori=uusi`, children: "uusi moottori" })
    ] }),
    /* @__PURE__ */ F.jsxs("section", { className: "player", "aria-label": "Testisoitin", children: [
      /* @__PURE__ */ F.jsx("button", { type: "button", className: "play", onClick: () => {
        En();
      }, disabled: !Ae && !St, children: Ae ? "■ Tauko" : "▶ Soita" }),
      /* @__PURE__ */ F.jsxs("button", { type: "button", onClick: () => Et(kr), disabled: !St, children: [
        "Siirry kohtaan ",
        gi(kr)
      ] }),
      /* @__PURE__ */ F.jsx("button", { type: "button", onClick: () => {
        gr();
      }, disabled: !St || It !== "" && It !== "valmis", children: "Aja vakiokoe (n. 60 s)" }),
      It && /* @__PURE__ */ F.jsxs("output", { className: "scenario", "data-step": It, children: [
        " Vakiokoe: ",
        It
      ] }),
      /* @__PURE__ */ F.jsxs("output", { className: "time", children: [
        gi(pt),
        " / ",
        gi(ot)
      ] }),
      c.source !== "synteettinen" && /* @__PURE__ */ F.jsxs("p", { className: "files", "data-ready": St ? "kyllä" : "ei", children: [
        k ? "Äänitiedostot" : "Mittausreferenssit (WAV)",
        ":",
        " ",
        Un.map((f, w) => /* @__PURE__ */ F.jsxs("span", { "data-track": f, "data-state": g[f].state, children: [
          w ? " · " : "",
          ac[f],
          " ",
          g[f].state === "valmis" ? `valmis (${io(g[f].loaded)} Mt)` : g[f].state === "virhe" ? "virhe" : `${io(g[f].loaded)} / ${io(g[f].total)} Mt${g[f].attempt > 1 ? ` (yritys ${g[f].attempt})` : ""}`
        ] }, f))
      ] }),
      Wn.length > 0 && /* @__PURE__ */ F.jsxs("p", { role: "alert", className: "error load-error", children: [
        k ? "Äänitiedoston" : "Mittausreferenssin",
        " lataus epäonnistui: ",
        Wn.map((f) => `${ac[f]} (${g[f].reason})`).join(", "),
        ".",
        k ? " Toistoa ei voi aloittaa." : " Toisto toimii, mutta mittaukset eivät.",
        " ",
        /* @__PURE__ */ F.jsx("button", { type: "button", onClick: nl, children: "Yritä uudelleen" })
      ] }),
      R && /* @__PURE__ */ F.jsx("p", { role: "status", children: R }),
      Ve && /* @__PURE__ */ F.jsx("p", { role: "alert", className: "error", children: Ve }),
      /* @__PURE__ */ F.jsx(
        "audio",
        {
          ref: j,
          src: V.tausta,
          preload: "metadata",
          onLoadedMetadata: (f) => {
            ht(f.currentTarget.duration), Zt(f.currentTarget);
          },
          onProgress: (f) => Zt(f.currentTarget),
          onCanPlay: (f) => Zt(f.currentTarget),
          onTimeUpdate: (f) => ll(f.currentTarget),
          onEnded: () => {
            de.current = null, Dt(), q("ended", {}), D.current?.pause(), qe(!1);
          },
          onPause: (f) => {
            f.currentTarget === j.current && qe(!1);
          },
          onError: (f) => mr("tausta", f.currentTarget)
        }
      ),
      /* @__PURE__ */ F.jsx(
        "audio",
        {
          ref: D,
          src: V.kitara,
          preload: "metadata",
          onLoadedMetadata: () => {
            c.engine === "nykyinen" && j.current?.paused && Gt(!0);
          },
          onError: (f) => mr("kitara", f.currentTarget)
        }
      )
    ] }),
    /* @__PURE__ */ F.jsxs("section", { "aria-label": "Mediakellot", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Mediaelementtien kellot" }),
      /* @__PURE__ */ F.jsxs("p", { className: "live", children: [
        "Tausta ",
        Ot(E?.tausta, 3),
        " s · Kitara ",
        Ot(E?.kitara, 3),
        " s · ",
        /* @__PURE__ */ F.jsxs("strong", { children: [
          "ero ",
          Ot(E?.diff),
          " ms"
        ] })
      ] }),
      /* @__PURE__ */ F.jsx("p", { className: "hint", children: "Ero on elementtien kellojen ero (kitara − tausta). Se ei ole kuultava kohdistus." })
    ] }),
    /* @__PURE__ */ F.jsxs("section", { "aria-label": "Renderöity kohdistus", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Renderöity kohdistus (Web Audio -graafi)" }),
      /* @__PURE__ */ F.jsx("p", { className: "hint", children: "Mitataan automaattisesti 3 s Soita-painalluksen ja kelauksen jälkeen ja sen jälkeen 5 s välein. Positiivinen = kitara edellä." }),
      /* @__PURE__ */ F.jsxs("table", { className: "summary", children: [
        /* @__PURE__ */ F.jsx("thead", { children: /* @__PURE__ */ F.jsxs("tr", { children: [
          /* @__PURE__ */ F.jsx("th", { children: "Vaihe" }),
          /* @__PURE__ */ F.jsx("th", { children: "Mittauksia" }),
          /* @__PURE__ */ F.jsx("th", { children: "Renderöity mediaani (ms)" }),
          /* @__PURE__ */ F.jsx("th", { children: "Suurin |ero| (ms)" }),
          /* @__PURE__ */ F.jsx("th", { children: "Mediakellojen mediaani (ms)" }),
          /* @__PURE__ */ F.jsx("th", { children: "Epävarmoja" })
        ] }) }),
        /* @__PURE__ */ F.jsx("tbody", { children: ul.map((f) => /* @__PURE__ */ F.jsxs("tr", { "data-phase": f.phase, children: [
          /* @__PURE__ */ F.jsx("td", { children: f.phase }),
          /* @__PURE__ */ F.jsx("td", { children: f.count }),
          /* @__PURE__ */ F.jsx("td", { children: Ot(f.renderedMedian) }),
          /* @__PURE__ */ F.jsx("td", { children: Ot(f.renderedMaxAbs) }),
          /* @__PURE__ */ F.jsx("td", { children: Ot(f.mediaMedian) }),
          /* @__PURE__ */ F.jsx("td", { children: f.unreliable })
        ] }, f.phase)) })
      ] }),
      /* @__PURE__ */ F.jsx("ol", { className: "measurements", "aria-label": "Mittaukset", children: O.slice(-12).map((f) => /* @__PURE__ */ F.jsxs("li", { "data-reliable": f.reliable ? "kyllä" : "ei", children: [
        f.phase,
        ": renderöity ",
        Ot(f.renderedDiffMs),
        " ms, mediakellot ",
        Ot(f.mediaDiffMs),
        " ms",
        " ",
        "(korrelaatio T ",
        Ot(f.tracks[0].score, 3),
        " / K ",
        Ot(f.tracks[1].score, 3),
        f.reliable ? "" : ", epävarma" + (f.tracks.find((w) => w.error)?.error ? ": " + f.tracks.find((w) => w.error).error : f.tracks.some((w) => w.probeRms <= 1e-4) ? ": raita hiljaa" : ""),
        ")"
      ] }, f.ms)) })
    ] }),
    /* @__PURE__ */ F.jsxs("section", { "aria-label": "Kuulokuva", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Kuulokuva" }),
      /* @__PURE__ */ F.jsx("p", { className: "hint", children: "Kirjaa, miltä kuulostaa juuri nyt. Kirjaus tallentuu raporttiin soittimen kohdan kanssa." }),
      /* @__PURE__ */ F.jsx("button", { type: "button", onClick: () => vr("tahdissa"), children: "Kuulostaa tahdissa" }),
      " ",
      /* @__PURE__ */ F.jsx("button", { type: "button", onClick: () => vr("epätahdissa"), children: "Kuulostaa epätahdissa" }),
      " ",
      /* @__PURE__ */ F.jsx("button", { type: "button", onClick: () => vr("epävarma"), children: "En osaa sanoa" }),
      /* @__PURE__ */ F.jsx("ul", { children: ne.map((f, w) => /* @__PURE__ */ F.jsxs("li", { children: [
        gi(f.time),
        ": ",
        f.value
      ] }, w)) })
    ] }),
    /* @__PURE__ */ F.jsxs("section", { "aria-label": "Raportti", children: [
      /* @__PURE__ */ F.jsx("h2", { children: "Raportti" }),
      /* @__PURE__ */ F.jsx("button", { type: "button", onClick: il, children: "Valitse raportti" }),
      ue && /* @__PURE__ */ F.jsx(
        "textarea",
        {
          readOnly: !0,
          rows: 8,
          "aria-label": "Testiraportti",
          value: ue,
          ref: (f) => {
            f?.focus(), f?.select();
          }
        }
      )
    ] })
  ] });
}
Kd();
const hc = document.getElementById("kaksiraitatesti");
hc && yd.createRoot(hc).render(/* @__PURE__ */ F.jsx(lp, {}));
//# sourceMappingURL=app.js.map
