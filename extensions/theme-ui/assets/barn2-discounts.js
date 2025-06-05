function ek(V) {
  return V && V.__esModule && Object.prototype.hasOwnProperty.call(V, "default") ? V.default : V;
}
var dE = { exports: {} }, Xp = {}, pE = { exports: {} }, wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var KR;
function tk() {
  if (KR) return wt;
  KR = 1;
  var V = Symbol.for("react.element"), q = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), De = Symbol.for("react.profiler"), pt = Symbol.for("react.provider"), Ae = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), me = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ae = Symbol.iterator;
  function B(x) {
    return x === null || typeof x != "object" ? null : (x = ae && x[ae] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var W = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $ = Object.assign, oe = {};
  function ue(x, k, G) {
    this.props = x, this.context = k, this.refs = oe, this.updater = G || W;
  }
  ue.prototype.isReactComponent = {}, ue.prototype.setState = function(x, k) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, k, "setState");
  }, ue.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function zt() {
  }
  zt.prototype = ue.prototype;
  function Ht(x, k, G) {
    this.props = x, this.context = k, this.refs = oe, this.updater = G || W;
  }
  var ot = Ht.prototype = new zt();
  ot.constructor = Ht, $(ot, ue.prototype), ot.isPureReactComponent = !0;
  var Ye = Array.isArray, Ot = Object.prototype.hasOwnProperty, Oe = { current: null }, ct = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(x, k, G) {
    var ie, Ee = {}, Le = null, Me = null;
    if (k != null) for (ie in k.ref !== void 0 && (Me = k.ref), k.key !== void 0 && (Le = "" + k.key), k) Ot.call(k, ie) && !ct.hasOwnProperty(ie) && (Ee[ie] = k[ie]);
    var Re = arguments.length - 2;
    if (Re === 1) Ee.children = G;
    else if (1 < Re) {
      for (var Ze = Array(Re), St = 0; St < Re; St++) Ze[St] = arguments[St + 2];
      Ee.children = Ze;
    }
    if (x && x.defaultProps) for (ie in Re = x.defaultProps, Re) Ee[ie] === void 0 && (Ee[ie] = Re[ie]);
    return { $$typeof: V, type: x, key: Le, ref: Me, props: Ee, _owner: Oe.current };
  }
  function Gt(x, k) {
    return { $$typeof: V, type: x.type, key: k, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Lt(x) {
    return typeof x == "object" && x !== null && x.$$typeof === V;
  }
  function an(x) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(G) {
      return k[G];
    });
  }
  var $t = /\/+/g;
  function gt(x, k) {
    return typeof x == "object" && x !== null && x.key != null ? an("" + x.key) : k.toString(36);
  }
  function Be(x, k, G, ie, Ee) {
    var Le = typeof x;
    (Le === "undefined" || Le === "boolean") && (x = null);
    var Me = !1;
    if (x === null) Me = !0;
    else switch (Le) {
      case "string":
      case "number":
        Me = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case V:
          case q:
            Me = !0;
        }
    }
    if (Me) return Me = x, Ee = Ee(Me), x = ie === "" ? "." + gt(Me, 0) : ie, Ye(Ee) ? (G = "", x != null && (G = x.replace($t, "$&/") + "/"), Be(Ee, k, G, "", function(St) {
      return St;
    })) : Ee != null && (Lt(Ee) && (Ee = Gt(Ee, G + (!Ee.key || Me && Me.key === Ee.key ? "" : ("" + Ee.key).replace($t, "$&/") + "/") + x)), k.push(Ee)), 1;
    if (Me = 0, ie = ie === "" ? "." : ie + ":", Ye(x)) for (var Re = 0; Re < x.length; Re++) {
      Le = x[Re];
      var Ze = ie + gt(Le, Re);
      Me += Be(Le, k, G, Ze, Ee);
    }
    else if (Ze = B(x), typeof Ze == "function") for (x = Ze.call(x), Re = 0; !(Le = x.next()).done; ) Le = Le.value, Ze = ie + gt(Le, Re++), Me += Be(Le, k, G, Ze, Ee);
    else if (Le === "object") throw k = String(x), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
    return Me;
  }
  function Ut(x, k, G) {
    if (x == null) return x;
    var ie = [], Ee = 0;
    return Be(x, ie, "", "", function(Le) {
      return k.call(G, Le, Ee++);
    }), ie;
  }
  function vt(x) {
    if (x._status === -1) {
      var k = x._result;
      k = k(), k.then(function(G) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = G);
      }, function(G) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = G);
      }), x._status === -1 && (x._status = 0, x._result = k);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var it = { current: null }, Q = { transition: null }, Te = { ReactCurrentDispatcher: it, ReactCurrentBatchConfig: Q, ReactCurrentOwner: Oe };
  function ce() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: Ut, forEach: function(x, k, G) {
    Ut(x, function() {
      k.apply(this, arguments);
    }, G);
  }, count: function(x) {
    var k = 0;
    return Ut(x, function() {
      k++;
    }), k;
  }, toArray: function(x) {
    return Ut(x, function(k) {
      return k;
    }) || [];
  }, only: function(x) {
    if (!Lt(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, wt.Component = ue, wt.Fragment = D, wt.Profiler = De, wt.PureComponent = Ht, wt.StrictMode = qe, wt.Suspense = Ie, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, wt.act = ce, wt.cloneElement = function(x, k, G) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var ie = $({}, x.props), Ee = x.key, Le = x.ref, Me = x._owner;
    if (k != null) {
      if (k.ref !== void 0 && (Le = k.ref, Me = Oe.current), k.key !== void 0 && (Ee = "" + k.key), x.type && x.type.defaultProps) var Re = x.type.defaultProps;
      for (Ze in k) Ot.call(k, Ze) && !ct.hasOwnProperty(Ze) && (ie[Ze] = k[Ze] === void 0 && Re !== void 0 ? Re[Ze] : k[Ze]);
    }
    var Ze = arguments.length - 2;
    if (Ze === 1) ie.children = G;
    else if (1 < Ze) {
      Re = Array(Ze);
      for (var St = 0; St < Ze; St++) Re[St] = arguments[St + 2];
      ie.children = Re;
    }
    return { $$typeof: V, type: x.type, key: Ee, ref: Le, props: ie, _owner: Me };
  }, wt.createContext = function(x) {
    return x = { $$typeof: Ae, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: pt, _context: x }, x.Consumer = x;
  }, wt.createElement = Qe, wt.createFactory = function(x) {
    var k = Qe.bind(null, x);
    return k.type = x, k;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(x) {
    return { $$typeof: S, render: x };
  }, wt.isValidElement = Lt, wt.lazy = function(x) {
    return { $$typeof: te, _payload: { _status: -1, _result: x }, _init: vt };
  }, wt.memo = function(x, k) {
    return { $$typeof: me, type: x, compare: k === void 0 ? null : k };
  }, wt.startTransition = function(x) {
    var k = Q.transition;
    Q.transition = {};
    try {
      x();
    } finally {
      Q.transition = k;
    }
  }, wt.unstable_act = ce, wt.useCallback = function(x, k) {
    return it.current.useCallback(x, k);
  }, wt.useContext = function(x) {
    return it.current.useContext(x);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(x) {
    return it.current.useDeferredValue(x);
  }, wt.useEffect = function(x, k) {
    return it.current.useEffect(x, k);
  }, wt.useId = function() {
    return it.current.useId();
  }, wt.useImperativeHandle = function(x, k, G) {
    return it.current.useImperativeHandle(x, k, G);
  }, wt.useInsertionEffect = function(x, k) {
    return it.current.useInsertionEffect(x, k);
  }, wt.useLayoutEffect = function(x, k) {
    return it.current.useLayoutEffect(x, k);
  }, wt.useMemo = function(x, k) {
    return it.current.useMemo(x, k);
  }, wt.useReducer = function(x, k, G) {
    return it.current.useReducer(x, k, G);
  }, wt.useRef = function(x) {
    return it.current.useRef(x);
  }, wt.useState = function(x) {
    return it.current.useState(x);
  }, wt.useSyncExternalStore = function(x, k, G) {
    return it.current.useSyncExternalStore(x, k, G);
  }, wt.useTransition = function() {
    return it.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var Jp = { exports: {} };
Jp.exports;
var JR;
function nk() {
  return JR || (JR = 1, function(V, q) {
    var D = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    D.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var qe = "18.3.1", De = Symbol.for("react.element"), pt = Symbol.for("react.portal"), Ae = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ie = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), te = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), zt = Symbol.iterator, Ht = "@@iterator";
      function ot(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = zt && h[zt] || h[Ht];
        return typeof C == "function" ? C : null;
      }
      var Ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ot = {
        transition: null
      }, Oe = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ct = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Qe = {}, Gt = null;
      function Lt(h) {
        Gt = h;
      }
      Qe.setExtraStackFrame = function(h) {
        Gt = h;
      }, Qe.getCurrentStack = null, Qe.getStackAddendum = function() {
        var h = "";
        Gt && (h += Gt);
        var C = Qe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var an = !1, $t = !1, gt = !1, Be = !1, Ut = !1, vt = {
        ReactCurrentDispatcher: Ye,
        ReactCurrentBatchConfig: Ot,
        ReactCurrentOwner: ct
      };
      vt.ReactDebugCurrentFrame = Qe, vt.ReactCurrentActQueue = Oe;
      function it(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          Te("warn", h, z);
        }
      }
      function Q(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          Te("error", h, z);
        }
      }
      function Te(h, C, z) {
        {
          var F = vt.ReactDebugCurrentFrame, re = F.getStackAddendum();
          re !== "" && (C += "%s", z = z.concat([re]));
          var we = z.map(function(ye) {
            return String(ye);
          });
          we.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, we);
        }
      }
      var ce = {};
      function x(h, C) {
        {
          var z = h.constructor, F = z && (z.displayName || z.name) || "ReactClass", re = F + "." + C;
          if (ce[re])
            return;
          Q("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), ce[re] = !0;
        }
      }
      var k = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, z) {
          x(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, z, F) {
          x(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, z, F) {
          x(h, "setState");
        }
      }, G = Object.assign, ie = {};
      Object.freeze(ie);
      function Ee(h, C, z) {
        this.props = h, this.context = C, this.refs = ie, this.updater = z || k;
      }
      Ee.prototype.isReactComponent = {}, Ee.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ee.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Le = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Me = function(h, C) {
          Object.defineProperty(Ee.prototype, h, {
            get: function() {
              it("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Re in Le)
          Le.hasOwnProperty(Re) && Me(Re, Le[Re]);
      }
      function Ze() {
      }
      Ze.prototype = Ee.prototype;
      function St(h, C, z) {
        this.props = h, this.context = C, this.refs = ie, this.updater = z || k;
      }
      var sn = St.prototype = new Ze();
      sn.constructor = St, G(sn, Ee.prototype), sn.isPureReactComponent = !0;
      function xn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Gn = Array.isArray;
      function Tn(h) {
        return Gn(h);
      }
      function Xn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Nt(h) {
        try {
          return cn(h), !1;
        } catch {
          return !0;
        }
      }
      function cn(h) {
        return "" + h;
      }
      function ca(h) {
        if (Nt(h))
          return Q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(h)), cn(h);
      }
      function qa(h, C, z) {
        var F = h.displayName;
        if (F)
          return F;
        var re = C.displayName || C.name || "";
        return re !== "" ? z + "(" + re + ")" : z;
      }
      function Dr(h) {
        return h.displayName || "Context";
      }
      function Yn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ae:
            return "Fragment";
          case pt:
            return "Portal";
          case Ie:
            return "Profiler";
          case S:
            return "StrictMode";
          case B:
            return "Suspense";
          case W:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case te:
              var C = h;
              return Dr(C) + ".Consumer";
            case me:
              var z = h;
              return Dr(z._context) + ".Provider";
            case ae:
              return qa(h, h.render, "ForwardRef");
            case $:
              var F = h.displayName || null;
              return F !== null ? F : Yn(h.type) || "Memo";
            case oe: {
              var re = h, we = re._payload, ye = re._init;
              try {
                return Yn(ye(we));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Kn = Object.prototype.hasOwnProperty, Jn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, Ga, Un;
      Un = {};
      function ur(h) {
        if (Kn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Ir(h) {
        if (Kn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Li(h, C) {
        var z = function() {
          Rr || (Rr = !0, Q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fa(h, C) {
        var z = function() {
          Ga || (Ga = !0, Q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function le(h) {
        if (typeof h.ref == "string" && ct.current && h.__self && ct.current.stateNode !== h.__self) {
          var C = Yn(ct.current.type);
          Un[C] || (Q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Un[C] = !0);
        }
      }
      var Pe = function(h, C, z, F, re, we, ye) {
        var Ge = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: De,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: ye,
          // Record the component responsible for creating this element.
          _owner: we
        };
        return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ge, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ge, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: re
        }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
      };
      function st(h, C, z) {
        var F, re = {}, we = null, ye = null, Ge = null, dt = null;
        if (C != null) {
          ur(C) && (ye = C.ref, le(C)), Ir(C) && (ca(C.key), we = "" + C.key), Ge = C.__self === void 0 ? null : C.__self, dt = C.__source === void 0 ? null : C.__source;
          for (F in C)
            Kn.call(C, F) && !Jn.hasOwnProperty(F) && (re[F] = C[F]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          re.children = z;
        else if (Yt > 1) {
          for (var Jt = Array(Yt), Zt = 0; Zt < Yt; Zt++)
            Jt[Zt] = arguments[Zt + 2];
          Object.freeze && Object.freeze(Jt), re.children = Jt;
        }
        if (h && h.defaultProps) {
          var lt = h.defaultProps;
          for (F in lt)
            re[F] === void 0 && (re[F] = lt[F]);
        }
        if (we || ye) {
          var ln = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          we && Li(re, ln), ye && fa(re, ln);
        }
        return Pe(h, we, ye, Ge, dt, ct.current, re);
      }
      function Pt(h, C) {
        var z = Pe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function pn(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, re = G({}, h.props), we = h.key, ye = h.ref, Ge = h._self, dt = h._source, Yt = h._owner;
        if (C != null) {
          ur(C) && (ye = C.ref, Yt = ct.current), Ir(C) && (ca(C.key), we = "" + C.key);
          var Jt;
          h.type && h.type.defaultProps && (Jt = h.type.defaultProps);
          for (F in C)
            Kn.call(C, F) && !Jn.hasOwnProperty(F) && (C[F] === void 0 && Jt !== void 0 ? re[F] = Jt[F] : re[F] = C[F]);
        }
        var Zt = arguments.length - 2;
        if (Zt === 1)
          re.children = z;
        else if (Zt > 1) {
          for (var lt = Array(Zt), ln = 0; ln < Zt; ln++)
            lt[ln] = arguments[ln + 2];
          re.children = lt;
        }
        return Pe(h.type, we, ye, Ge, dt, Yt, re);
      }
      function vn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === De;
      }
      var hn = ".", Zn = ":";
      function fn(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(re) {
          return z[re];
        });
        return "$" + F;
      }
      var Xt = !1, Vt = /\/+/g;
      function da(h) {
        return h.replace(Vt, "$&/");
      }
      function xa(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (ca(h.key), fn("" + h.key)) : C.toString(36);
      }
      function ka(h, C, z, F, re) {
        var we = typeof h;
        (we === "undefined" || we === "boolean") && (h = null);
        var ye = !1;
        if (h === null)
          ye = !0;
        else
          switch (we) {
            case "string":
            case "number":
              ye = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case De:
                case pt:
                  ye = !0;
              }
          }
        if (ye) {
          var Ge = h, dt = re(Ge), Yt = F === "" ? hn + xa(Ge, 0) : F;
          if (Tn(dt)) {
            var Jt = "";
            Yt != null && (Jt = da(Yt) + "/"), ka(dt, C, Jt, "", function(Kf) {
              return Kf;
            });
          } else dt != null && (vn(dt) && (dt.key && (!Ge || Ge.key !== dt.key) && ca(dt.key), dt = Pt(
            dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (dt.key && (!Ge || Ge.key !== dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + dt.key) + "/"
            ) : "") + Yt
          )), C.push(dt));
          return 1;
        }
        var Zt, lt, ln = 0, Dn = F === "" ? hn : F + Zn;
        if (Tn(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            Zt = h[Zl], lt = Dn + xa(Zt, Zl), ln += ka(Zt, C, z, lt, re);
        else {
          var Go = ot(h);
          if (typeof Go == "function") {
            var Vi = h;
            Go === Vi.entries && (Xt || it("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Xt = !0);
            for (var eu = Go.call(Vi), Xo, Xf = 0; !(Xo = eu.next()).done; )
              Zt = Xo.value, lt = Dn + xa(Zt, Xf++), ln += ka(Zt, C, z, lt, re);
          } else if (we === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ln;
      }
      function Ni(h, C, z) {
        if (h == null)
          return h;
        var F = [], re = 0;
        return ka(h, F, "", "", function(we) {
          return C.call(z, we, re++);
        }), F;
      }
      function Il(h) {
        var C = 0;
        return Ni(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, z) {
        Ni(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function Mi(h) {
        return Ni(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!vn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var C = {
          $$typeof: te,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: me,
          _context: C
        };
        var z = !1, F = !1, re = !1;
        {
          var we = {
            $$typeof: te,
            _context: C
          };
          Object.defineProperties(we, {
            Provider: {
              get: function() {
                return F || (F = !0, Q("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ye) {
                C.Provider = ye;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ye) {
                C._currentValue = ye;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ye) {
                C._currentValue2 = ye;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ye) {
                C._threadCount = ye;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, Q("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ye) {
                re || (it("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ye), re = !0);
              }
            }
          }), C.Consumer = we;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, or = 0, va = 1, Qr = 2;
      function ci(h) {
        if (h._status === pa) {
          var C = h._result, z = C();
          if (z.then(function(we) {
            if (h._status === or || h._status === pa) {
              var ye = h;
              ye._status = va, ye._result = we;
            }
          }, function(we) {
            if (h._status === or || h._status === pa) {
              var ye = h;
              ye._status = Qr, ye._result = we;
            }
          }), h._status === pa) {
            var F = h;
            F._status = or, F._result = z;
          }
        }
        if (h._status === va) {
          var re = h._result;
          return re === void 0 && Q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, re), "default" in re || Q(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, re), re.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, z = {
          $$typeof: oe,
          _payload: C,
          _init: ci
        };
        {
          var F, re;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(we) {
                Q("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = we, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return re;
              },
              set: function(we) {
                Q("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), re = we, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function zi(h) {
        h != null && h.$$typeof === $ ? Q("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Q("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Q("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Q("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: ae,
          render: h
        };
        {
          var z;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(F) {
              z = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function X(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ae || h === Ie || Ut || h === S || h === B || h === W || Be || h === ue || an || $t || gt || typeof h == "object" && h !== null && (h.$$typeof === oe || h.$$typeof === $ || h.$$typeof === me || h.$$typeof === te || h.$$typeof === ae || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function de(h, C) {
        X(h) || Q("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: $,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(re) {
              F = re, !h.name && !h.displayName && (h.displayName = re);
            }
          });
        }
        return z;
      }
      function ve() {
        var h = Ye.current;
        return h === null && Q(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function ht(h) {
        var C = ve();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? Q("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && Q("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function et(h) {
        var C = ve();
        return C.useState(h);
      }
      function Et(h, C, z) {
        var F = ve();
        return F.useReducer(h, C, z);
      }
      function ft(h) {
        var C = ve();
        return C.useRef(h);
      }
      function kn(h, C) {
        var z = ve();
        return z.useEffect(h, C);
      }
      function dn(h, C) {
        var z = ve();
        return z.useInsertionEffect(h, C);
      }
      function mn(h, C) {
        var z = ve();
        return z.useLayoutEffect(h, C);
      }
      function Tr(h, C) {
        var z = ve();
        return z.useCallback(h, C);
      }
      function Xa(h, C) {
        var z = ve();
        return z.useMemo(h, C);
      }
      function Bt(h, C, z) {
        var F = ve();
        return F.useImperativeHandle(h, C, z);
      }
      function Sn(h, C) {
        {
          var z = ve();
          return z.useDebugValue(h, C);
        }
      }
      function rt() {
        var h = ve();
        return h.useTransition();
      }
      function di(h) {
        var C = ve();
        return C.useDeferredValue(h);
      }
      function Ui() {
        var h = ve();
        return h.useId();
      }
      function ac(h, C, z) {
        var F = ve();
        return F.useSyncExternalStore(h, C, z);
      }
      var Ai = 0, ol, Wr, $o, Or, Yo, ic, lc;
      function ji() {
      }
      ji.__reactDisabledLog = !0;
      function sl() {
        {
          if (Ai === 0) {
            ol = console.log, Wr = console.info, $o = console.warn, Or = console.error, Yo = console.group, ic = console.groupCollapsed, lc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: ji,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ai++;
        }
      }
      function qr() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: G({}, h, {
                value: ol
              }),
              info: G({}, h, {
                value: Wr
              }),
              warn: G({}, h, {
                value: $o
              }),
              error: G({}, h, {
                value: Or
              }),
              group: G({}, h, {
                value: Yo
              }),
              groupCollapsed: G({}, h, {
                value: ic
              }),
              groupEnd: G({}, h, {
                value: lc
              })
            });
          }
          Ai < 0 && Q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = vt.ReactCurrentDispatcher, cl;
      function Fu(h, C, z) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (re) {
              var F = re.stack.trim().match(/\n( *(at )?)/);
              cl = F && F[1] || "";
            }
          return `
` + cl + h;
        }
      }
      var Fi = !1, ql;
      {
        var Gl = typeof WeakMap == "function" ? WeakMap : Map;
        ql = new Gl();
      }
      function fl(h, C) {
        if (!h || Fi)
          return "";
        {
          var z = ql.get(h);
          if (z !== void 0)
            return z;
        }
        var F;
        Fi = !0;
        var re = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var we;
        we = pi.current, pi.current = null, sl();
        try {
          if (C) {
            var ye = function() {
              throw Error();
            };
            if (Object.defineProperty(ye.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ye, []);
              } catch (Dn) {
                F = Dn;
              }
              Reflect.construct(h, [], ye);
            } else {
              try {
                ye.call();
              } catch (Dn) {
                F = Dn;
              }
              h.call(ye.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Dn) {
              F = Dn;
            }
            h();
          }
        } catch (Dn) {
          if (Dn && F && typeof Dn.stack == "string") {
            for (var Ge = Dn.stack.split(`
`), dt = F.stack.split(`
`), Yt = Ge.length - 1, Jt = dt.length - 1; Yt >= 1 && Jt >= 0 && Ge[Yt] !== dt[Jt]; )
              Jt--;
            for (; Yt >= 1 && Jt >= 0; Yt--, Jt--)
              if (Ge[Yt] !== dt[Jt]) {
                if (Yt !== 1 || Jt !== 1)
                  do
                    if (Yt--, Jt--, Jt < 0 || Ge[Yt] !== dt[Jt]) {
                      var Zt = `
` + Ge[Yt].replace(" at new ", " at ");
                      return h.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", h.displayName)), typeof h == "function" && ql.set(h, Zt), Zt;
                    }
                  while (Yt >= 1 && Jt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = we, qr(), Error.prepareStackTrace = re;
        }
        var lt = h ? h.displayName || h.name : "", ln = lt ? Fu(lt) : "";
        return typeof h == "function" && ql.set(h, ln), ln;
      }
      function Io(h, C, z) {
        return fl(h, !1);
      }
      function Qo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function _t(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Qo(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case B:
            return Fu("Suspense");
          case W:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ae:
              return Io(h.render);
            case $:
              return _t(h.type, C, z);
            case oe: {
              var F = h, re = F._payload, we = F._init;
              try {
                return _t(we(re), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Wo = {}, Hu = vt.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var C = h._owner, z = _t(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(z);
        } else
          Hu.setExtraStackFrame(null);
      }
      function uc(h, C, z, F, re) {
        {
          var we = Function.call.bind(Kn);
          for (var ye in h)
            if (we(h, ye)) {
              var Ge = void 0;
              try {
                if (typeof h[ye] != "function") {
                  var dt = Error((F || "React class") + ": " + z + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw dt.name = "Invariant Violation", dt;
                }
                Ge = h[ye](C, ye, F, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Yt) {
                Ge = Yt;
              }
              Ge && !(Ge instanceof Error) && (xt(re), Q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", z, ye, typeof Ge), xt(null)), Ge instanceof Error && !(Ge.message in Wo) && (Wo[Ge.message] = !0, xt(re), Q("Failed %s type: %s", z, Ge.message), xt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, z = _t(h.type, h._source, C ? C.type : null);
          Lt(z);
        } else
          Lt(null);
      }
      var Je;
      Je = !1;
      function Xl() {
        if (ct.current) {
          var h = Yn(ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function er(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function Gr(h) {
        return h != null ? er(h.__source) : "";
      }
      var Lr = {};
      function hi(h) {
        var C = Xl();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function bn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = hi(C);
          if (!Lr[z]) {
            Lr[z] = !0;
            var F = "";
            h && h._owner && h._owner !== ct.current && (F = " It was passed a child from " + Yn(h._owner.type) + "."), vi(h), Q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, F), vi(null);
          }
        }
      }
      function Kt(h, C) {
        if (typeof h == "object") {
          if (Tn(h))
            for (var z = 0; z < h.length; z++) {
              var F = h[z];
              vn(F) && bn(F, C);
            }
          else if (vn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var re = ot(h);
            if (typeof re == "function" && re !== h.entries)
              for (var we = re.call(h), ye; !(ye = we.next()).done; )
                vn(ye.value) && bn(ye.value, C);
          }
        }
      }
      function Ka(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === ae || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === $))
            z = C.propTypes;
          else
            return;
          if (z) {
            var F = Yn(C);
            uc(z, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Je) {
            Je = !0;
            var re = Yn(C);
            Q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Da(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var F = C[z];
            if (F !== "children" && F !== "key") {
              vi(h), Q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Q("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function br(h, C, z) {
        var F = X(h);
        if (!F) {
          var re = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = Gr(C);
          we ? re += we : re += Xl();
          var ye;
          h === null ? ye = "null" : Tn(h) ? ye = "array" : h !== void 0 && h.$$typeof === De ? (ye = "<" + (Yn(h.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : ye = typeof h, Q("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ye, re);
        }
        var Ge = st.apply(this, arguments);
        if (Ge == null)
          return Ge;
        if (F)
          for (var dt = 2; dt < arguments.length; dt++)
            Kt(arguments[dt], h);
        return h === Ae ? Da(Ge) : Ka(Ge), Ge;
      }
      var Nr = !1;
      function Gf(h) {
        var C = br.bind(null, h);
        return C.type = h, Nr || (Nr = !0, it("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return it("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, z) {
        for (var F = pn.apply(this, arguments), re = 2; re < arguments.length; re++)
          Kt(arguments[re], F.type);
        return Ka(F), F;
      }
      function Kl(h, C) {
        var z = Ot.transition;
        Ot.transition = {};
        var F = Ot.transition;
        Ot.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Ot.transition = z, z === null && F._updatedFibers) {
            var re = F._updatedFibers.size;
            re > 10 && it("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Jl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = V && V[C];
            Bu = z.call(V, "timers").setImmediate;
          } catch {
            Bu = function(re) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && Q("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var we = new MessageChannel();
              we.port1.onmessage = re, we.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, La = !1;
      function dl(h) {
        {
          var C = Oa;
          Oa++, Oe.current === null && (Oe.current = []);
          var z = Oe.isBatchingLegacy, F;
          try {
            if (Oe.isBatchingLegacy = !0, F = h(), !z && Oe.didScheduleLegacyUpdate) {
              var re = Oe.current;
              re !== null && (Oe.didScheduleLegacyUpdate = !1, Pi(re));
            }
          } catch (lt) {
            throw Hi(C), lt;
          } finally {
            Oe.isBatchingLegacy = z;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var we = F, ye = !1, Ge = {
              then: function(lt, ln) {
                ye = !0, we.then(function(Dn) {
                  Hi(C), Oa === 0 ? $u(Dn, lt, ln) : lt(Dn);
                }, function(Dn) {
                  Hi(C), ln(Dn);
                });
              }
            };
            return !La && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ye || (La = !0, Q("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ge;
          } else {
            var dt = F;
            if (Hi(C), Oa === 0) {
              var Yt = Oe.current;
              Yt !== null && (Pi(Yt), Oe.current = null);
              var Jt = {
                then: function(lt, ln) {
                  Oe.current === null ? (Oe.current = [], $u(dt, lt, ln)) : lt(dt);
                }
              };
              return Jt;
            } else {
              var Zt = {
                then: function(lt, ln) {
                  lt(dt);
                }
              };
              return Zt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Oa - 1 && Q("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function $u(h, C, z) {
        {
          var F = Oe.current;
          if (F !== null)
            try {
              Pi(F), Jl(function() {
                F.length === 0 ? (Oe.current = null, C(h)) : $u(h, C, z);
              });
            } catch (re) {
              z(re);
            }
          else
            C(h);
        }
      }
      var pl = !1;
      function Pi(h) {
        if (!pl) {
          pl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var z = h[C];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            pl = !1;
          }
        }
      }
      var Yu = br, qo = Pu, Na = Gf, Iu = {
        map: Ni,
        forEach: Ql,
        count: Il,
        toArray: Mi,
        only: Wl
      };
      q.Children = Iu, q.Component = Ee, q.Fragment = Ae, q.Profiler = Ie, q.PureComponent = St, q.StrictMode = S, q.Suspense = B, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vt, q.act = dl, q.cloneElement = qo, q.createContext = si, q.createElement = Yu, q.createFactory = Na, q.createRef = xn, q.forwardRef = zi, q.isValidElement = vn, q.lazy = fi, q.memo = de, q.startTransition = Kl, q.unstable_act = dl, q.useCallback = Tr, q.useContext = ht, q.useDebugValue = Sn, q.useDeferredValue = di, q.useEffect = kn, q.useId = Ui, q.useImperativeHandle = Bt, q.useInsertionEffect = dn, q.useLayoutEffect = mn, q.useMemo = Xa, q.useReducer = Et, q.useRef = ft, q.useState = et, q.useSyncExternalStore = ac, q.useTransition = rt, q.version = qe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var rk = {};
rk.NODE_ENV === "production" ? pE.exports = tk() : pE.exports = nk();
var Ft = pE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function ak() {
  if (ZR) return Xp;
  ZR = 1;
  var V = Ft, q = Symbol.for("react.element"), D = Symbol.for("react.fragment"), qe = Object.prototype.hasOwnProperty, De = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ae(S, Ie, me) {
    var te, ae = {}, B = null, W = null;
    me !== void 0 && (B = "" + me), Ie.key !== void 0 && (B = "" + Ie.key), Ie.ref !== void 0 && (W = Ie.ref);
    for (te in Ie) qe.call(Ie, te) && !pt.hasOwnProperty(te) && (ae[te] = Ie[te]);
    if (S && S.defaultProps) for (te in Ie = S.defaultProps, Ie) ae[te] === void 0 && (ae[te] = Ie[te]);
    return { $$typeof: q, type: S, key: B, ref: W, props: ae, _owner: De.current };
  }
  return Xp.Fragment = D, Xp.jsx = Ae, Xp.jsxs = Ae, Xp;
}
var Kp = {}, eT;
function ik() {
  if (eT) return Kp;
  eT = 1;
  var V = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return V.NODE_ENV !== "production" && function() {
    var q = Ft, D = Symbol.for("react.element"), qe = Symbol.for("react.portal"), De = Symbol.for("react.fragment"), pt = Symbol.for("react.strict_mode"), Ae = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), oe = Symbol.iterator, ue = "@@iterator";
    function zt(R) {
      if (R === null || typeof R != "object")
        return null;
      var X = oe && R[oe] || R[ue];
      return typeof X == "function" ? X : null;
    }
    var Ht = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ot(R) {
      {
        for (var X = arguments.length, de = new Array(X > 1 ? X - 1 : 0), ve = 1; ve < X; ve++)
          de[ve - 1] = arguments[ve];
        Ye("error", R, de);
      }
    }
    function Ye(R, X, de) {
      {
        var ve = Ht.ReactDebugCurrentFrame, ht = ve.getStackAddendum();
        ht !== "" && (X += "%s", de = de.concat([ht]));
        var et = de.map(function(Et) {
          return String(Et);
        });
        et.unshift("Warning: " + X), Function.prototype.apply.call(console[R], console, et);
      }
    }
    var Ot = !1, Oe = !1, ct = !1, Qe = !1, Gt = !1, Lt;
    Lt = Symbol.for("react.module.reference");
    function an(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === De || R === Ae || Gt || R === pt || R === te || R === ae || Qe || R === $ || Ot || Oe || ct || typeof R == "object" && R !== null && (R.$$typeof === W || R.$$typeof === B || R.$$typeof === S || R.$$typeof === Ie || R.$$typeof === me || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Lt || R.getModuleId !== void 0));
    }
    function $t(R, X, de) {
      var ve = R.displayName;
      if (ve)
        return ve;
      var ht = X.displayName || X.name || "";
      return ht !== "" ? de + "(" + ht + ")" : de;
    }
    function gt(R) {
      return R.displayName || "Context";
    }
    function Be(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ot("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case De:
          return "Fragment";
        case qe:
          return "Portal";
        case Ae:
          return "Profiler";
        case pt:
          return "StrictMode";
        case te:
          return "Suspense";
        case ae:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ie:
            var X = R;
            return gt(X) + ".Consumer";
          case S:
            var de = R;
            return gt(de._context) + ".Provider";
          case me:
            return $t(R, R.render, "ForwardRef");
          case B:
            var ve = R.displayName || null;
            return ve !== null ? ve : Be(R.type) || "Memo";
          case W: {
            var ht = R, et = ht._payload, Et = ht._init;
            try {
              return Be(Et(et));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ut = Object.assign, vt = 0, it, Q, Te, ce, x, k, G;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function Ee() {
      {
        if (vt === 0) {
          it = console.log, Q = console.info, Te = console.warn, ce = console.error, x = console.group, k = console.groupCollapsed, G = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        vt++;
      }
    }
    function Le() {
      {
        if (vt--, vt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ut({}, R, {
              value: it
            }),
            info: Ut({}, R, {
              value: Q
            }),
            warn: Ut({}, R, {
              value: Te
            }),
            error: Ut({}, R, {
              value: ce
            }),
            group: Ut({}, R, {
              value: x
            }),
            groupCollapsed: Ut({}, R, {
              value: k
            }),
            groupEnd: Ut({}, R, {
              value: G
            })
          });
        }
        vt < 0 && ot("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Me = Ht.ReactCurrentDispatcher, Re;
    function Ze(R, X, de) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (ht) {
            var ve = ht.stack.trim().match(/\n( *(at )?)/);
            Re = ve && ve[1] || "";
          }
        return `
` + Re + R;
      }
    }
    var St = !1, sn;
    {
      var xn = typeof WeakMap == "function" ? WeakMap : Map;
      sn = new xn();
    }
    function Gn(R, X) {
      if (!R || St)
        return "";
      {
        var de = sn.get(R);
        if (de !== void 0)
          return de;
      }
      var ve;
      St = !0;
      var ht = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = Me.current, Me.current = null, Ee();
      try {
        if (X) {
          var Et = function() {
            throw Error();
          };
          if (Object.defineProperty(Et.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Et, []);
            } catch (Sn) {
              ve = Sn;
            }
            Reflect.construct(R, [], Et);
          } else {
            try {
              Et.call();
            } catch (Sn) {
              ve = Sn;
            }
            R.call(Et.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Sn) {
            ve = Sn;
          }
          R();
        }
      } catch (Sn) {
        if (Sn && ve && typeof Sn.stack == "string") {
          for (var ft = Sn.stack.split(`
`), kn = ve.stack.split(`
`), dn = ft.length - 1, mn = kn.length - 1; dn >= 1 && mn >= 0 && ft[dn] !== kn[mn]; )
            mn--;
          for (; dn >= 1 && mn >= 0; dn--, mn--)
            if (ft[dn] !== kn[mn]) {
              if (dn !== 1 || mn !== 1)
                do
                  if (dn--, mn--, mn < 0 || ft[dn] !== kn[mn]) {
                    var Tr = `
` + ft[dn].replace(" at new ", " at ");
                    return R.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", R.displayName)), typeof R == "function" && sn.set(R, Tr), Tr;
                  }
                while (dn >= 1 && mn >= 0);
              break;
            }
        }
      } finally {
        St = !1, Me.current = et, Le(), Error.prepareStackTrace = ht;
      }
      var Xa = R ? R.displayName || R.name : "", Bt = Xa ? Ze(Xa) : "";
      return typeof R == "function" && sn.set(R, Bt), Bt;
    }
    function Tn(R, X, de) {
      return Gn(R, !1);
    }
    function Xn(R) {
      var X = R.prototype;
      return !!(X && X.isReactComponent);
    }
    function Nt(R, X, de) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return Gn(R, Xn(R));
      if (typeof R == "string")
        return Ze(R);
      switch (R) {
        case te:
          return Ze("Suspense");
        case ae:
          return Ze("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case me:
            return Tn(R.render);
          case B:
            return Nt(R.type, X, de);
          case W: {
            var ve = R, ht = ve._payload, et = ve._init;
            try {
              return Nt(et(ht), X, de);
            } catch {
            }
          }
        }
      return "";
    }
    var cn = Object.prototype.hasOwnProperty, ca = {}, qa = Ht.ReactDebugCurrentFrame;
    function Dr(R) {
      if (R) {
        var X = R._owner, de = Nt(R.type, R._source, X ? X.type : null);
        qa.setExtraStackFrame(de);
      } else
        qa.setExtraStackFrame(null);
    }
    function Yn(R, X, de, ve, ht) {
      {
        var et = Function.call.bind(cn);
        for (var Et in R)
          if (et(R, Et)) {
            var ft = void 0;
            try {
              if (typeof R[Et] != "function") {
                var kn = Error((ve || "React class") + ": " + de + " type `" + Et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kn.name = "Invariant Violation", kn;
              }
              ft = R[Et](X, Et, ve, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dn) {
              ft = dn;
            }
            ft && !(ft instanceof Error) && (Dr(ht), ot("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ve || "React class", de, Et, typeof ft), Dr(null)), ft instanceof Error && !(ft.message in ca) && (ca[ft.message] = !0, Dr(ht), ot("Failed %s type: %s", de, ft.message), Dr(null));
          }
      }
    }
    var Kn = Array.isArray;
    function Jn(R) {
      return Kn(R);
    }
    function Rr(R) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, de = X && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return de;
      }
    }
    function Ga(R) {
      try {
        return Un(R), !1;
      } catch {
        return !0;
      }
    }
    function Un(R) {
      return "" + R;
    }
    function ur(R) {
      if (Ga(R))
        return ot("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(R)), Un(R);
    }
    var Ir = Ht.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fa, le;
    function Pe(R) {
      if (cn.call(R, "ref")) {
        var X = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function st(R) {
      if (cn.call(R, "key")) {
        var X = Object.getOwnPropertyDescriptor(R, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Pt(R, X) {
      typeof R.ref == "string" && Ir.current;
    }
    function pn(R, X) {
      {
        var de = function() {
          fa || (fa = !0, ot("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        de.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function vn(R, X) {
      {
        var de = function() {
          le || (le = !0, ot("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        de.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var hn = function(R, X, de, ve, ht, et, Et) {
      var ft = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: R,
        key: X,
        ref: de,
        props: Et,
        // Record the component responsible for creating this element.
        _owner: et
      };
      return ft._store = {}, Object.defineProperty(ft._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ft, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ve
      }), Object.defineProperty(ft, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ht
      }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
    };
    function Zn(R, X, de, ve, ht) {
      {
        var et, Et = {}, ft = null, kn = null;
        de !== void 0 && (ur(de), ft = "" + de), st(X) && (ur(X.key), ft = "" + X.key), Pe(X) && (kn = X.ref, Pt(X, ht));
        for (et in X)
          cn.call(X, et) && !Li.hasOwnProperty(et) && (Et[et] = X[et]);
        if (R && R.defaultProps) {
          var dn = R.defaultProps;
          for (et in dn)
            Et[et] === void 0 && (Et[et] = dn[et]);
        }
        if (ft || kn) {
          var mn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ft && pn(Et, mn), kn && vn(Et, mn);
        }
        return hn(R, ft, kn, ht, ve, Ir.current, Et);
      }
    }
    var fn = Ht.ReactCurrentOwner, Xt = Ht.ReactDebugCurrentFrame;
    function Vt(R) {
      if (R) {
        var X = R._owner, de = Nt(R.type, R._source, X ? X.type : null);
        Xt.setExtraStackFrame(de);
      } else
        Xt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function xa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === D;
    }
    function ka() {
      {
        if (fn.current) {
          var R = Be(fn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Ni(R) {
      return "";
    }
    var Il = {};
    function Ql(R) {
      {
        var X = ka();
        if (!X) {
          var de = typeof R == "string" ? R : R.displayName || R.name;
          de && (X = `

Check the top-level render call using <` + de + ">.");
        }
        return X;
      }
    }
    function Mi(R, X) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var de = Ql(X);
        if (Il[de])
          return;
        Il[de] = !0;
        var ve = "";
        R && R._owner && R._owner !== fn.current && (ve = " It was passed a child from " + Be(R._owner.type) + "."), Vt(R), ot('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, ve), Vt(null);
      }
    }
    function Wl(R, X) {
      {
        if (typeof R != "object")
          return;
        if (Jn(R))
          for (var de = 0; de < R.length; de++) {
            var ve = R[de];
            xa(ve) && Mi(ve, X);
          }
        else if (xa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ht = zt(R);
          if (typeof ht == "function" && ht !== R.entries)
            for (var et = ht.call(R), Et; !(Et = et.next()).done; )
              xa(Et.value) && Mi(Et.value, X);
        }
      }
    }
    function si(R) {
      {
        var X = R.type;
        if (X == null || typeof X == "string")
          return;
        var de;
        if (typeof X == "function")
          de = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === me || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === B))
          de = X.propTypes;
        else
          return;
        if (de) {
          var ve = Be(X);
          Yn(de, R.props, "prop", ve, R);
        } else if (X.PropTypes !== void 0 && !da) {
          da = !0;
          var ht = Be(X);
          ot("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ht || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && ot("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(R) {
      {
        for (var X = Object.keys(R.props), de = 0; de < X.length; de++) {
          var ve = X[de];
          if (ve !== "children" && ve !== "key") {
            Vt(R), ot("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ve), Vt(null);
            break;
          }
        }
        R.ref !== null && (Vt(R), ot("Invalid attribute `ref` supplied to `React.Fragment`."), Vt(null));
      }
    }
    var or = {};
    function va(R, X, de, ve, ht, et) {
      {
        var Et = an(R);
        if (!Et) {
          var ft = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ft += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kn = Ni();
          kn ? ft += kn : ft += ka();
          var dn;
          R === null ? dn = "null" : Jn(R) ? dn = "array" : R !== void 0 && R.$$typeof === D ? (dn = "<" + (Be(R.type) || "Unknown") + " />", ft = " Did you accidentally export a JSX literal instead of a component?") : dn = typeof R, ot("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dn, ft);
        }
        var mn = Zn(R, X, de, ht, et);
        if (mn == null)
          return mn;
        if (Et) {
          var Tr = X.children;
          if (Tr !== void 0)
            if (ve)
              if (Jn(Tr)) {
                for (var Xa = 0; Xa < Tr.length; Xa++)
                  Wl(Tr[Xa], R);
                Object.freeze && Object.freeze(Tr);
              } else
                ot("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Tr, R);
        }
        if (cn.call(X, "key")) {
          var Bt = Be(R), Sn = Object.keys(X).filter(function(Ui) {
            return Ui !== "key";
          }), rt = Sn.length > 0 ? "{key: someKey, " + Sn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[Bt + rt]) {
            var di = Sn.length > 0 ? "{" + Sn.join(": ..., ") + ": ...}" : "{}";
            ot(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, Bt, di, Bt), or[Bt + rt] = !0;
          }
        }
        return R === De ? pa(mn) : si(mn), mn;
      }
    }
    function Qr(R, X, de) {
      return va(R, X, de, !0);
    }
    function ci(R, X, de) {
      return va(R, X, de, !1);
    }
    var fi = ci, zi = Qr;
    Kp.Fragment = De, Kp.jsx = fi, Kp.jsxs = zi;
  }(), Kp;
}
var lk = {};
lk.NODE_ENV === "production" ? dE.exports = ak() : dE.exports = ik();
var Ve = dE.exports, vE = { exports: {} }, Qa = {}, Bm = { exports: {} }, oE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function uk() {
  return tT || (tT = 1, function(V) {
    function q(Q, Te) {
      var ce = Q.length;
      Q.push(Te);
      e: for (; 0 < ce; ) {
        var x = ce - 1 >>> 1, k = Q[x];
        if (0 < De(k, Te)) Q[x] = Te, Q[ce] = k, ce = x;
        else break e;
      }
    }
    function D(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function qe(Q) {
      if (Q.length === 0) return null;
      var Te = Q[0], ce = Q.pop();
      if (ce !== Te) {
        Q[0] = ce;
        e: for (var x = 0, k = Q.length, G = k >>> 1; x < G; ) {
          var ie = 2 * (x + 1) - 1, Ee = Q[ie], Le = ie + 1, Me = Q[Le];
          if (0 > De(Ee, ce)) Le < k && 0 > De(Me, Ee) ? (Q[x] = Me, Q[Le] = ce, x = Le) : (Q[x] = Ee, Q[ie] = ce, x = ie);
          else if (Le < k && 0 > De(Me, ce)) Q[x] = Me, Q[Le] = ce, x = Le;
          else break e;
        }
      }
      return Te;
    }
    function De(Q, Te) {
      var ce = Q.sortIndex - Te.sortIndex;
      return ce !== 0 ? ce : Q.id - Te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var pt = performance;
      V.unstable_now = function() {
        return pt.now();
      };
    } else {
      var Ae = Date, S = Ae.now();
      V.unstable_now = function() {
        return Ae.now() - S;
      };
    }
    var Ie = [], me = [], te = 1, ae = null, B = 3, W = !1, $ = !1, oe = !1, ue = typeof setTimeout == "function" ? setTimeout : null, zt = typeof clearTimeout == "function" ? clearTimeout : null, Ht = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ot(Q) {
      for (var Te = D(me); Te !== null; ) {
        if (Te.callback === null) qe(me);
        else if (Te.startTime <= Q) qe(me), Te.sortIndex = Te.expirationTime, q(Ie, Te);
        else break;
        Te = D(me);
      }
    }
    function Ye(Q) {
      if (oe = !1, ot(Q), !$) if (D(Ie) !== null) $ = !0, vt(Ot);
      else {
        var Te = D(me);
        Te !== null && it(Ye, Te.startTime - Q);
      }
    }
    function Ot(Q, Te) {
      $ = !1, oe && (oe = !1, zt(Qe), Qe = -1), W = !0;
      var ce = B;
      try {
        for (ot(Te), ae = D(Ie); ae !== null && (!(ae.expirationTime > Te) || Q && !an()); ) {
          var x = ae.callback;
          if (typeof x == "function") {
            ae.callback = null, B = ae.priorityLevel;
            var k = x(ae.expirationTime <= Te);
            Te = V.unstable_now(), typeof k == "function" ? ae.callback = k : ae === D(Ie) && qe(Ie), ot(Te);
          } else qe(Ie);
          ae = D(Ie);
        }
        if (ae !== null) var G = !0;
        else {
          var ie = D(me);
          ie !== null && it(Ye, ie.startTime - Te), G = !1;
        }
        return G;
      } finally {
        ae = null, B = ce, W = !1;
      }
    }
    var Oe = !1, ct = null, Qe = -1, Gt = 5, Lt = -1;
    function an() {
      return !(V.unstable_now() - Lt < Gt);
    }
    function $t() {
      if (ct !== null) {
        var Q = V.unstable_now();
        Lt = Q;
        var Te = !0;
        try {
          Te = ct(!0, Q);
        } finally {
          Te ? gt() : (Oe = !1, ct = null);
        }
      } else Oe = !1;
    }
    var gt;
    if (typeof Ht == "function") gt = function() {
      Ht($t);
    };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), Ut = Be.port2;
      Be.port1.onmessage = $t, gt = function() {
        Ut.postMessage(null);
      };
    } else gt = function() {
      ue($t, 0);
    };
    function vt(Q) {
      ct = Q, Oe || (Oe = !0, gt());
    }
    function it(Q, Te) {
      Qe = ue(function() {
        Q(V.unstable_now());
      }, Te);
    }
    V.unstable_IdlePriority = 5, V.unstable_ImmediatePriority = 1, V.unstable_LowPriority = 4, V.unstable_NormalPriority = 3, V.unstable_Profiling = null, V.unstable_UserBlockingPriority = 2, V.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, V.unstable_continueExecution = function() {
      $ || W || ($ = !0, vt(Ot));
    }, V.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Gt = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, V.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, V.unstable_getFirstCallbackNode = function() {
      return D(Ie);
    }, V.unstable_next = function(Q) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var Te = 3;
          break;
        default:
          Te = B;
      }
      var ce = B;
      B = Te;
      try {
        return Q();
      } finally {
        B = ce;
      }
    }, V.unstable_pauseExecution = function() {
    }, V.unstable_requestPaint = function() {
    }, V.unstable_runWithPriority = function(Q, Te) {
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
      var ce = B;
      B = Q;
      try {
        return Te();
      } finally {
        B = ce;
      }
    }, V.unstable_scheduleCallback = function(Q, Te, ce) {
      var x = V.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? x + ce : x) : ce = x, Q) {
        case 1:
          var k = -1;
          break;
        case 2:
          k = 250;
          break;
        case 5:
          k = 1073741823;
          break;
        case 4:
          k = 1e4;
          break;
        default:
          k = 5e3;
      }
      return k = ce + k, Q = { id: te++, callback: Te, priorityLevel: Q, startTime: ce, expirationTime: k, sortIndex: -1 }, ce > x ? (Q.sortIndex = ce, q(me, Q), D(Ie) === null && Q === D(me) && (oe ? (zt(Qe), Qe = -1) : oe = !0, it(Ye, ce - x))) : (Q.sortIndex = k, q(Ie, Q), $ || W || ($ = !0, vt(Ot))), Q;
    }, V.unstable_shouldYield = an, V.unstable_wrapCallback = function(Q) {
      var Te = B;
      return function() {
        var ce = B;
        B = Te;
        try {
          return Q.apply(this, arguments);
        } finally {
          B = ce;
        }
      };
    };
  }(oE)), oE;
}
var sE = {}, nT;
function ok() {
  return nT || (nT = 1, function(V) {
    var q = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    q.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var D = !1, qe = 5;
      function De(le, Pe) {
        var st = le.length;
        le.push(Pe), S(le, Pe, st);
      }
      function pt(le) {
        return le.length === 0 ? null : le[0];
      }
      function Ae(le) {
        if (le.length === 0)
          return null;
        var Pe = le[0], st = le.pop();
        return st !== Pe && (le[0] = st, Ie(le, st, 0)), Pe;
      }
      function S(le, Pe, st) {
        for (var Pt = st; Pt > 0; ) {
          var pn = Pt - 1 >>> 1, vn = le[pn];
          if (me(vn, Pe) > 0)
            le[pn] = Pe, le[Pt] = vn, Pt = pn;
          else
            return;
        }
      }
      function Ie(le, Pe, st) {
        for (var Pt = st, pn = le.length, vn = pn >>> 1; Pt < vn; ) {
          var hn = (Pt + 1) * 2 - 1, Zn = le[hn], fn = hn + 1, Xt = le[fn];
          if (me(Zn, Pe) < 0)
            fn < pn && me(Xt, Zn) < 0 ? (le[Pt] = Xt, le[fn] = Pe, Pt = fn) : (le[Pt] = Zn, le[hn] = Pe, Pt = hn);
          else if (fn < pn && me(Xt, Pe) < 0)
            le[Pt] = Xt, le[fn] = Pe, Pt = fn;
          else
            return;
        }
      }
      function me(le, Pe) {
        var st = le.sortIndex - Pe.sortIndex;
        return st !== 0 ? st : le.id - Pe.id;
      }
      var te = 1, ae = 2, B = 3, W = 4, $ = 5;
      function oe(le, Pe) {
      }
      var ue = typeof performance == "object" && typeof performance.now == "function";
      if (ue) {
        var zt = performance;
        V.unstable_now = function() {
          return zt.now();
        };
      } else {
        var Ht = Date, ot = Ht.now();
        V.unstable_now = function() {
          return Ht.now() - ot;
        };
      }
      var Ye = 1073741823, Ot = -1, Oe = 250, ct = 5e3, Qe = 1e4, Gt = Ye, Lt = [], an = [], $t = 1, gt = null, Be = B, Ut = !1, vt = !1, it = !1, Q = typeof setTimeout == "function" ? setTimeout : null, Te = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function x(le) {
        for (var Pe = pt(an); Pe !== null; ) {
          if (Pe.callback === null)
            Ae(an);
          else if (Pe.startTime <= le)
            Ae(an), Pe.sortIndex = Pe.expirationTime, De(Lt, Pe);
          else
            return;
          Pe = pt(an);
        }
      }
      function k(le) {
        if (it = !1, x(le), !vt)
          if (pt(Lt) !== null)
            vt = !0, Un(G);
          else {
            var Pe = pt(an);
            Pe !== null && ur(k, Pe.startTime - le);
          }
      }
      function G(le, Pe) {
        vt = !1, it && (it = !1, Ir()), Ut = !0;
        var st = Be;
        try {
          var Pt;
          if (!D) return ie(le, Pe);
        } finally {
          gt = null, Be = st, Ut = !1;
        }
      }
      function ie(le, Pe) {
        var st = Pe;
        for (x(st), gt = pt(Lt); gt !== null && !(gt.expirationTime > st && (!le || qa())); ) {
          var Pt = gt.callback;
          if (typeof Pt == "function") {
            gt.callback = null, Be = gt.priorityLevel;
            var pn = gt.expirationTime <= st, vn = Pt(pn);
            st = V.unstable_now(), typeof vn == "function" ? gt.callback = vn : gt === pt(Lt) && Ae(Lt), x(st);
          } else
            Ae(Lt);
          gt = pt(Lt);
        }
        if (gt !== null)
          return !0;
        var hn = pt(an);
        return hn !== null && ur(k, hn.startTime - st), !1;
      }
      function Ee(le, Pe) {
        switch (le) {
          case te:
          case ae:
          case B:
          case W:
          case $:
            break;
          default:
            le = B;
        }
        var st = Be;
        Be = le;
        try {
          return Pe();
        } finally {
          Be = st;
        }
      }
      function Le(le) {
        var Pe;
        switch (Be) {
          case te:
          case ae:
          case B:
            Pe = B;
            break;
          default:
            Pe = Be;
            break;
        }
        var st = Be;
        Be = Pe;
        try {
          return le();
        } finally {
          Be = st;
        }
      }
      function Me(le) {
        var Pe = Be;
        return function() {
          var st = Be;
          Be = Pe;
          try {
            return le.apply(this, arguments);
          } finally {
            Be = st;
          }
        };
      }
      function Re(le, Pe, st) {
        var Pt = V.unstable_now(), pn;
        if (typeof st == "object" && st !== null) {
          var vn = st.delay;
          typeof vn == "number" && vn > 0 ? pn = Pt + vn : pn = Pt;
        } else
          pn = Pt;
        var hn;
        switch (le) {
          case te:
            hn = Ot;
            break;
          case ae:
            hn = Oe;
            break;
          case $:
            hn = Gt;
            break;
          case W:
            hn = Qe;
            break;
          case B:
          default:
            hn = ct;
            break;
        }
        var Zn = pn + hn, fn = {
          id: $t++,
          callback: Pe,
          priorityLevel: le,
          startTime: pn,
          expirationTime: Zn,
          sortIndex: -1
        };
        return pn > Pt ? (fn.sortIndex = pn, De(an, fn), pt(Lt) === null && fn === pt(an) && (it ? Ir() : it = !0, ur(k, pn - Pt))) : (fn.sortIndex = Zn, De(Lt, fn), !vt && !Ut && (vt = !0, Un(G))), fn;
      }
      function Ze() {
      }
      function St() {
        !vt && !Ut && (vt = !0, Un(G));
      }
      function sn() {
        return pt(Lt);
      }
      function xn(le) {
        le.callback = null;
      }
      function Gn() {
        return Be;
      }
      var Tn = !1, Xn = null, Nt = -1, cn = qe, ca = -1;
      function qa() {
        var le = V.unstable_now() - ca;
        return !(le < cn);
      }
      function Dr() {
      }
      function Yn(le) {
        if (le < 0 || le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        le > 0 ? cn = Math.floor(1e3 / le) : cn = qe;
      }
      var Kn = function() {
        if (Xn !== null) {
          var le = V.unstable_now();
          ca = le;
          var Pe = !0, st = !0;
          try {
            st = Xn(Pe, le);
          } finally {
            st ? Jn() : (Tn = !1, Xn = null);
          }
        } else
          Tn = !1;
      }, Jn;
      if (typeof ce == "function")
        Jn = function() {
          ce(Kn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), Ga = Rr.port2;
        Rr.port1.onmessage = Kn, Jn = function() {
          Ga.postMessage(null);
        };
      } else
        Jn = function() {
          Q(Kn, 0);
        };
      function Un(le) {
        Xn = le, Tn || (Tn = !0, Jn());
      }
      function ur(le, Pe) {
        Nt = Q(function() {
          le(V.unstable_now());
        }, Pe);
      }
      function Ir() {
        Te(Nt), Nt = -1;
      }
      var Li = Dr, fa = null;
      V.unstable_IdlePriority = $, V.unstable_ImmediatePriority = te, V.unstable_LowPriority = W, V.unstable_NormalPriority = B, V.unstable_Profiling = fa, V.unstable_UserBlockingPriority = ae, V.unstable_cancelCallback = xn, V.unstable_continueExecution = St, V.unstable_forceFrameRate = Yn, V.unstable_getCurrentPriorityLevel = Gn, V.unstable_getFirstCallbackNode = sn, V.unstable_next = Le, V.unstable_pauseExecution = Ze, V.unstable_requestPaint = Li, V.unstable_runWithPriority = Ee, V.unstable_scheduleCallback = Re, V.unstable_shouldYield = qa, V.unstable_wrapCallback = Me, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sE)), sE;
}
var rT;
function oT() {
  if (rT) return Bm.exports;
  rT = 1;
  var V = {};
  return V.NODE_ENV === "production" ? Bm.exports = uk() : Bm.exports = ok(), Bm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aT;
function sk() {
  if (aT) return Qa;
  aT = 1;
  var V = Ft, q = oT();
  function D(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var qe = /* @__PURE__ */ new Set(), De = {};
  function pt(n, r) {
    Ae(n, r), Ae(n + "Capture", r);
  }
  function Ae(n, r) {
    for (De[n] = r, n = 0; n < r.length; n++) qe.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ie = Object.prototype.hasOwnProperty, me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, te = {}, ae = {};
  function B(n) {
    return Ie.call(ae, n) ? !0 : Ie.call(te, n) ? !1 : me.test(n) ? ae[n] = !0 : (te[n] = !0, !1);
  }
  function W(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function $(n, r, l, o) {
    if (r === null || typeof r > "u" || W(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function oe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ue = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ue[n] = new oe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ue[r] = new oe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ue[n] = new oe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ue[n] = new oe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ue[n] = new oe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ue[n] = new oe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ue[n] = new oe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ue[n] = new oe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ue[n] = new oe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var zt = /[\-:]([a-z])/g;
  function Ht(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      zt,
      Ht
    );
    ue[r] = new oe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(zt, Ht);
    ue[r] = new oe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(zt, Ht);
    ue[r] = new oe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ue[n] = new oe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ue.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ue[n] = new oe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ot(n, r, l, o) {
    var c = ue.hasOwnProperty(r) ? ue[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && ($(r, l, c, o) && (l = null), o || c === null ? B(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ye = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ot = Symbol.for("react.element"), Oe = Symbol.for("react.portal"), ct = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), Gt = Symbol.for("react.profiler"), Lt = Symbol.for("react.provider"), an = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), Ut = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), it = Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = Q && n[Q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ce = Object.assign, x;
  function k(n) {
    if (x === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      x = r && r[1] || "";
    }
    return `
` + x + n;
  }
  var G = !1;
  function ie(n, r) {
    if (!n || G) return "";
    G = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (A) {
          var o = A;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (A) {
          o = A;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      G = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? k(n) : "";
  }
  function Ee(n) {
    switch (n.tag) {
      case 5:
        return k(n.type);
      case 16:
        return k("Lazy");
      case 13:
        return k("Suspense");
      case 19:
        return k("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ie(n.type, !1), n;
      case 11:
        return n = ie(n.type.render, !1), n;
      case 1:
        return n = ie(n.type, !0), n;
      default:
        return "";
    }
  }
  function Le(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ct:
        return "Fragment";
      case Oe:
        return "Portal";
      case Gt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case gt:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case an:
        return (n.displayName || "Context") + ".Consumer";
      case Lt:
        return (n._context.displayName || "Context") + ".Provider";
      case $t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ut:
        return r = n.displayName || null, r !== null ? r : Le(n.type) || "Memo";
      case vt:
        r = n._payload, n = n._init;
        try {
          return Le(n(r));
        } catch {
        }
    }
    return null;
  }
  function Me(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Le(r);
      case 8:
        return r === Qe ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function Re(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Ze(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function St(n) {
    var r = Ze(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function sn(n) {
    n._valueTracker || (n._valueTracker = St(n));
  }
  function xn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Ze(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Gn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Tn(n, r) {
    var l = r.checked;
    return ce({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Xn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Re(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Nt(n, r) {
    r = r.checked, r != null && ot(n, "checked", r, !1);
  }
  function cn(n, r) {
    Nt(n, r);
    var l = Re(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? qa(n, r.type, l) : r.hasOwnProperty("defaultValue") && qa(n, r.type, Re(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ca(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function qa(n, r, l) {
    (r !== "number" || Gn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Dr = Array.isArray;
  function Yn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Re(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Kn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(D(91));
    return ce({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Jn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(D(92));
        if (Dr(l)) {
          if (1 < l.length) throw Error(D(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Re(l) };
  }
  function Rr(n, r) {
    var l = Re(r.value), o = Re(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ga(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Un(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ur(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Un(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ir, Li = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ir = Ir || document.createElement("div"), Ir.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ir.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function fa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var le = {
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
  }, Pe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(le).forEach(function(n) {
    Pe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), le[r] = le[n];
    });
  });
  function st(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || le.hasOwnProperty(n) && le[n] ? ("" + r).trim() : r + "px";
  }
  function Pt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = st(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var pn = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function vn(n, r) {
    if (r) {
      if (pn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(D(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(D(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(D(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(D(62));
    }
  }
  function hn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var Zn = null;
  function fn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Xt = null, Vt = null, da = null;
  function xa(n) {
    if (n = cs(n)) {
      if (typeof Xt != "function") throw Error(D(280));
      var r = n.stateNode;
      r && (r = Ii(r), Xt(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    Vt ? da ? da.push(n) : da = [n] : Vt = n;
  }
  function Ni() {
    if (Vt) {
      var n = Vt, r = da;
      if (da = Vt = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
    }
  }
  function Il(n, r) {
    return n(r);
  }
  function Ql() {
  }
  var Mi = !1;
  function Wl(n, r, l) {
    if (Mi) return n(r, l);
    Mi = !0;
    try {
      return Il(n, r, l);
    } finally {
      Mi = !1, (Vt !== null || da !== null) && (Ql(), Ni());
    }
  }
  function si(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Ii(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
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
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(D(231, r, typeof l));
    return l;
  }
  var pa = !1;
  if (S) try {
    var or = {};
    Object.defineProperty(or, "passive", { get: function() {
      pa = !0;
    } }), window.addEventListener("test", or, or), window.removeEventListener("test", or, or);
  } catch {
    pa = !1;
  }
  function va(n, r, l, o, c, d, m, E, T) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (J) {
      this.onError(J);
    }
  }
  var Qr = !1, ci = null, fi = !1, zi = null, R = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function X(n, r, l, o, c, d, m, E, T) {
    Qr = !1, ci = null, va.apply(R, arguments);
  }
  function de(n, r, l, o, c, d, m, E, T) {
    if (X.apply(this, arguments), Qr) {
      if (Qr) {
        var A = ci;
        Qr = !1, ci = null;
      } else throw Error(D(198));
      fi || (fi = !0, zi = A);
    }
  }
  function ve(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function ht(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function et(n) {
    if (ve(n) !== n) throw Error(D(188));
  }
  function Et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ve(n), r === null) throw Error(D(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return et(c), n;
          if (d === o) return et(c), r;
          d = d.sibling;
        }
        throw Error(D(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(D(189));
        }
      }
      if (l.alternate !== o) throw Error(D(190));
    }
    if (l.tag !== 3) throw Error(D(188));
    return l.stateNode.current === l ? n : r;
  }
  function ft(n) {
    return n = Et(n), n !== null ? kn(n) : null;
  }
  function kn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = kn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var dn = q.unstable_scheduleCallback, mn = q.unstable_cancelCallback, Tr = q.unstable_shouldYield, Xa = q.unstable_requestPaint, Bt = q.unstable_now, Sn = q.unstable_getCurrentPriorityLevel, rt = q.unstable_ImmediatePriority, di = q.unstable_UserBlockingPriority, Ui = q.unstable_NormalPriority, ac = q.unstable_LowPriority, Ai = q.unstable_IdlePriority, ol = null, Wr = null;
  function $o(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : lc, Yo = Math.log, ic = Math.LN2;
  function lc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Yo(n) / ic | 0) | 0;
  }
  var ji = 64, sl = 4194304;
  function qr(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function pi(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = qr(E) : (d &= m, d !== 0 && (o = qr(d)));
    } else m = l & ~c, m !== 0 ? o = qr(m) : d !== 0 && (o = qr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Or(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function cl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function Fu(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Or(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = cl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ql() {
    var n = ji;
    return ji <<= 1, !(ji & 4194240) && (ji = 64), n;
  }
  function Gl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function fl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Or(r), n[r] = l;
  }
  function Io(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Qo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Or(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var _t = 0;
  function Wo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, xt, uc, vi, Je, Xl = !1, er = [], Gr = null, Lr = null, hi = null, bn = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), Ka = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function br(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Lr = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        bn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kt.delete(r.pointerId);
    }
  }
  function Nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && xt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Gf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Gr = Nr(Gr, n, r, l, o, c), !0;
      case "dragenter":
        return Lr = Nr(Lr, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Nr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return bn.set(d, Nr(bn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Kt.set(d, Nr(Kt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = ve(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = ht(l), r !== null) {
            n.blockedOn = r, Je(n.priority, function() {
              uc(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Kl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Zn = o, l.target.dispatchEvent(o), Zn = null;
      } else return r = cs(l), r !== null && xt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Kl(n) && l.delete(r);
  }
  function Bu() {
    Xl = !1, Gr !== null && Kl(Gr) && (Gr = null), Lr !== null && Kl(Lr) && (Lr = null), hi !== null && Kl(hi) && (hi = null), bn.forEach(Vu), Kt.forEach(Vu);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xl || (Xl = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, Bu)));
  }
  function Oa(n) {
    function r(c) {
      return Jl(c, n);
    }
    if (0 < er.length) {
      Jl(er[0], n);
      for (var l = 1; l < er.length; l++) {
        var o = er[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Gr !== null && Jl(Gr, n), Lr !== null && Jl(Lr, n), hi !== null && Jl(hi, n), bn.forEach(r), Kt.forEach(r), l = 0; l < Ka.length; l++) o = Ka[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ka.length && (l = Ka[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Ka.shift();
  }
  var La = Ye.ReactCurrentBatchConfig, dl = !0;
  function Hi(n, r, l, o) {
    var c = _t, d = La.transition;
    La.transition = null;
    try {
      _t = 1, pl(n, r, l, o);
    } finally {
      _t = c, La.transition = d;
    }
  }
  function $u(n, r, l, o) {
    var c = _t, d = La.transition;
    La.transition = null;
    try {
      _t = 4, pl(n, r, l, o);
    } finally {
      _t = c, La.transition = d;
    }
  }
  function pl(n, r, l, o) {
    if (dl) {
      var c = Yu(n, r, l, o);
      if (c === null) od(n, r, o, Pi, l), br(n, o);
      else if (Gf(c, n, r, l, o)) o.stopPropagation();
      else if (br(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = cs(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && od(n, r, o, Pi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else od(n, r, o, null, l);
    }
  }
  var Pi = null;
  function Yu(n, r, l, o) {
    if (Pi = null, n = fn(o), n = iu(n), n !== null) if (r = ve(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ht(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Pi = n, null;
  }
  function qo(n) {
    switch (n) {
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
        switch (Sn()) {
          case rt:
            return 1;
          case di:
            return 4;
          case Ui:
          case ac:
            return 16;
          case Ai:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Na = null, Iu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Iu, l = r.length, o, c = "value" in Na ? Na.value : Na.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function re() {
    return !1;
  }
  function we(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : re, this.isPropagationStopped = re, this;
    }
    return ce(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var ye = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ge = we(ye), dt = ce({}, ye, { view: 0, detail: 0 }), Yt = we(dt), Jt, Zt, lt, ln = ce({}, dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== lt && (lt && n.type === "mousemove" ? (Jt = n.screenX - lt.screenX, Zt = n.screenY - lt.screenY) : Zt = Jt = 0, lt = n), Jt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Zt;
  } }), Dn = we(ln), Zl = ce({}, ln, { dataTransfer: 0 }), Go = we(Zl), Vi = ce({}, dt, { relatedTarget: 0 }), eu = we(Vi), Xo = ce({}, ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xf = we(Xo), oc = ce({}, ye, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Kf = we(oc), Zp = ce({}, ye, { data: 0 }), sc = we(Zp), ev = {
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
  }, tv = {
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
  }, nv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ym(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = nv[n]) ? !!r[n] : !1;
  }
  function Ja() {
    return Ym;
  }
  var Im = ce({}, dt, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Jf = we(Im), Zf = ce({}, ln, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = we(Zf), Qm = ce({}, dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), fc = we(Qm), rv = ce({}, ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = we(rv), Bi = ce({}, ln, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), An = we(Bi), $i = [9, 13, 27, 32], Ko = S && "CompositionEvent" in window, vl = null;
  S && "documentMode" in document && (vl = document.documentMode);
  var Wm = S && "TextEvent" in window && !vl, Qu = S && (!Ko || vl && 8 < vl && 11 >= vl), av = " ", iv = !1;
  function dc(n, r) {
    switch (n) {
      case "keyup":
        return $i.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Wu = !1;
  function qm(n, r) {
    switch (n) {
      case "compositionend":
        return lv(r);
      case "keypress":
        return r.which !== 32 ? null : (iv = !0, av);
      case "textInput":
        return n = r.data, n === av && iv ? null : n;
      default:
        return null;
    }
  }
  function uv(n, r) {
    if (Wu) return n === "compositionend" || !Ko && dc(n, r) ? (n = C(), h = Iu = Na = null, Wu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Qu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Gm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ov(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Gm[n.type] : r === "textarea";
  }
  function sv(n, r, l, o) {
    ka(o), r = us(r, "onChange"), 0 < r.length && (l = new Ge("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qu = null, mi = null;
  function ed(n) {
    mc(n, 0);
  }
  function Jo(n) {
    var r = je(n);
    if (xn(r)) return n;
  }
  function cv(n, r) {
    if (n === "change") return r;
  }
  var fv = !1;
  if (S) {
    var td;
    if (S) {
      var nd = "oninput" in document;
      if (!nd) {
        var dv = document.createElement("div");
        dv.setAttribute("oninput", "return;"), nd = typeof dv.oninput == "function";
      }
      td = nd;
    } else td = !1;
    fv = td && (!document.documentMode || 9 < document.documentMode);
  }
  function pv() {
    qu && (qu.detachEvent("onpropertychange", vv), mi = qu = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Jo(mi)) {
      var r = [];
      sv(r, mi, n, fn(n)), Wl(ed, r);
    }
  }
  function Xm(n, r, l) {
    n === "focusin" ? (pv(), qu = r, mi = l, qu.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function Km(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Jo(mi);
  }
  function hv(n, r) {
    if (n === "click") return Jo(r);
  }
  function Jm(n, r) {
    if (n === "input" || n === "change") return Jo(r);
  }
  function mv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : mv;
  function Zo(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Ie.call(r, c) || !Za(n[c], r[c])) return !1;
    }
    return !0;
  }
  function yv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function gv(n, r) {
    var l = yv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = yv(l);
    }
  }
  function pc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function hl() {
    for (var n = window, r = Gn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Gn(n.document);
    }
    return r;
  }
  function Gu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Sv(n) {
    var r = hl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Gu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = gv(l, d);
          var m = gv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Xu = S && "documentMode" in document && 11 >= document.documentMode, Ku = null, rd = null, es = null, ad = !1;
  function Ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Ku == null || Ku !== Gn(o) || (o = Ku, "selectionStart" in o && Gu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Zo(es, o) || (es = o, o = us(rd, "onSelect"), 0 < o.length && (r = new Ge("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ku)));
  }
  function ts(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ju = { animationend: ts("Animation", "AnimationEnd"), animationiteration: ts("Animation", "AnimationIteration"), animationstart: ts("Animation", "AnimationStart"), transitionend: ts("Transition", "TransitionEnd") }, vc = {}, wr = {};
  S && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function ns(n) {
    if (vc[n]) return vc[n];
    if (!Ju[n]) return n;
    var r = Ju[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in wr) return vc[n] = r[l];
    return n;
  }
  var Cv = ns("animationend"), Rv = ns("animationiteration"), Tv = ns("animationstart"), bv = ns("transitionend"), wv = /* @__PURE__ */ new Map(), id = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    wv.set(n, r), pt(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], rs = ld.toLowerCase(), Zm = ld[0].toUpperCase() + ld.slice(1);
    yi(rs, "on" + Zm);
  }
  yi(Cv, "onAnimationEnd"), yi(Rv, "onAnimationIteration"), yi(Tv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(bv, "onTransitionEnd"), Ae("onMouseEnter", ["mouseout", "mouseover"]), Ae("onMouseLeave", ["mouseout", "mouseover"]), Ae("onPointerEnter", ["pointerout", "pointerover"]), Ae("onPointerLeave", ["pointerout", "pointerover"]), pt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), pt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), pt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), pt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function hc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, de(o, r, void 0, n), n.currentTarget = null;
  }
  function mc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, A = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, E, A), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, A = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, E, A), d = T;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function It(n, r) {
    var l = r[sd];
    l === void 0 && (l = r[sd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ud(r, n, 2, !1), l.add(o));
  }
  function ml(n, r, l) {
    var o = 0;
    r && (o |= 4), ud(l, n, o, r);
  }
  var is = "_reactListening" + Math.random().toString(36).slice(2);
  function ls(n) {
    if (!n[is]) {
      n[is] = !0, qe.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || ml(l, !1, n), ml(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[is] || (r[is] = !0, ml("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
    switch (qo(r)) {
      case 1:
        var c = Hi;
        break;
      case 4:
        c = $u;
        break;
      default:
        c = pl;
    }
    l = c.bind(null, r, l, n), c = void 0, !pa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function od(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = iu(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Wl(function() {
      var A = d, J = fn(l), Z = [];
      e: {
        var K = wv.get(n);
        if (K !== void 0) {
          var ge = Ge, _e = n;
          switch (n) {
            case "keypress":
              if (z(l) === 0) break e;
            case "keydown":
            case "keyup":
              ge = Jf;
              break;
            case "focusin":
              _e = "focus", ge = eu;
              break;
            case "focusout":
              _e = "blur", ge = eu;
              break;
            case "beforeblur":
            case "afterblur":
              ge = eu;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ge = Dn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ge = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = fc;
              break;
            case Cv:
            case Rv:
            case Tv:
              ge = Xf;
              break;
            case bv:
              ge = Xr;
              break;
            case "scroll":
              ge = Yt;
              break;
            case "wheel":
              ge = An;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = Kf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = cc;
          }
          var Ne = (r & 4) !== 0, Mn = !Ne && n === "scroll", O = Ne ? K !== null ? K + "Capture" : null : K;
          Ne = [];
          for (var w = A, M; w !== null; ) {
            M = w;
            var ne = M.stateNode;
            if (M.tag === 5 && ne !== null && (M = ne, O !== null && (ne = si(w, O), ne != null && Ne.push(Zu(w, ne, M)))), Mn) break;
            w = w.return;
          }
          0 < Ne.length && (K = new ge(K, _e, null, l, J), Z.push({ event: K, listeners: Ne }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", K && l !== Zn && (_e = l.relatedTarget || l.fromElement) && (iu(_e) || _e[Yi])) break e;
          if ((ge || K) && (K = J.window === J ? J : (K = J.ownerDocument) ? K.defaultView || K.parentWindow : window, ge ? (_e = l.relatedTarget || l.toElement, ge = A, _e = _e ? iu(_e) : null, _e !== null && (Mn = ve(_e), _e !== Mn || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (ge = null, _e = A), ge !== _e)) {
            if (Ne = Dn, ne = "onMouseLeave", O = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Ne = cc, ne = "onPointerLeave", O = "onPointerEnter", w = "pointer"), Mn = ge == null ? K : je(ge), M = _e == null ? K : je(_e), K = new Ne(ne, w + "leave", ge, l, J), K.target = Mn, K.relatedTarget = M, ne = null, iu(J) === A && (Ne = new Ne(O, w + "enter", _e, l, J), Ne.target = M, Ne.relatedTarget = Mn, ne = Ne), Mn = ne, ge && _e) t: {
              for (Ne = ge, O = _e, w = 0, M = Ne; M; M = nu(M)) w++;
              for (M = 0, ne = O; ne; ne = nu(ne)) M++;
              for (; 0 < w - M; ) Ne = nu(Ne), w--;
              for (; 0 < M - w; ) O = nu(O), M--;
              for (; w--; ) {
                if (Ne === O || O !== null && Ne === O.alternate) break t;
                Ne = nu(Ne), O = nu(O);
              }
              Ne = null;
            }
            else Ne = null;
            ge !== null && yc(Z, K, ge, Ne, !1), _e !== null && Mn !== null && yc(Z, Mn, _e, Ne, !0);
          }
        }
        e: {
          if (K = A ? je(A) : window, ge = K.nodeName && K.nodeName.toLowerCase(), ge === "select" || ge === "input" && K.type === "file") var ze = cv;
          else if (ov(K)) if (fv) ze = Jm;
          else {
            ze = Km;
            var xe = Xm;
          }
          else (ge = K.nodeName) && ge.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (ze = hv);
          if (ze && (ze = ze(n, A))) {
            sv(Z, ze, l, J);
            break e;
          }
          xe && xe(n, K, A), n === "focusout" && (xe = K._wrapperState) && xe.controlled && K.type === "number" && qa(K, "number", K.value);
        }
        switch (xe = A ? je(A) : window, n) {
          case "focusin":
            (ov(xe) || xe.contentEditable === "true") && (Ku = xe, rd = A, es = null);
            break;
          case "focusout":
            es = rd = Ku = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Ev(Z, l, J);
            break;
          case "selectionchange":
            if (Xu) break;
          case "keydown":
          case "keyup":
            Ev(Z, l, J);
        }
        var He;
        if (Ko) e: {
          switch (n) {
            case "compositionstart":
              var Ke = "onCompositionStart";
              break e;
            case "compositionend":
              Ke = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ke = "onCompositionUpdate";
              break e;
          }
          Ke = void 0;
        }
        else Wu ? dc(n, l) && (Ke = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (Qu && l.locale !== "ko" && (Wu || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && Wu && (He = C()) : (Na = J, Iu = "value" in Na ? Na.value : Na.textContent, Wu = !0)), xe = us(A, Ke), 0 < xe.length && (Ke = new sc(Ke, n, null, l, J), Z.push({ event: Ke, listeners: xe }), He ? Ke.data = He : (He = lv(l), He !== null && (Ke.data = He)))), (He = Wm ? qm(n, l) : uv(n, l)) && (A = us(A, "onBeforeInput"), 0 < A.length && (J = new sc("onBeforeInput", "beforeinput", null, l, J), Z.push({ event: J, listeners: A }), J.data = He));
      }
      mc(Z, r);
    });
  }
  function Zu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function us(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = si(n, l), d != null && o.unshift(Zu(n, d, c)), d = si(n, r), d != null && o.push(Zu(n, d, c))), n = n.return;
    }
    return o;
  }
  function nu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function yc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, A = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && A !== null && (E = A, c ? (T = si(l, d), T != null && m.unshift(Zu(l, T, E))) : c || (T = si(l, d), T != null && m.push(Zu(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ty = /\r\n?/g, _v = /\u0000|\uFFFD/g;
  function xv(n) {
    return (typeof n == "string" ? n : "" + n).replace(ty, `
`).replace(_v, "");
  }
  function gc(n, r, l) {
    if (r = xv(r), xv(n) !== r && l) throw Error(D(425));
  }
  function Sc() {
  }
  var ru = null, os = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ec = typeof setTimeout == "function" ? setTimeout : void 0, kv = typeof clearTimeout == "function" ? clearTimeout : void 0, Cc = typeof Promise == "function" ? Promise : void 0, ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cc < "u" ? function(n) {
    return Cc.resolve(null).then(n).catch(eo);
  } : Ec;
  function eo(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function to(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), Oa(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    Oa(r);
  }
  function ei(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Rc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var no = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + no, ss = "__reactProps$" + no, Yi = "__reactContainer$" + no, sd = "__reactEvents$" + no, cd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Rc(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Rc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function cs(n) {
    return n = n[Ma] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function je(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(D(33));
  }
  function Ii(n) {
    return n[ss] || null;
  }
  var jn = [], Ct = -1;
  function Kr(n) {
    return { current: n };
  }
  function en(n) {
    0 > Ct || (n.current = jn[Ct], jn[Ct] = null, Ct--);
  }
  function un(n, r) {
    Ct++, jn[Ct] = n.current, n.current = r;
  }
  var mt = {}, wn = Kr(mt), Fn = Kr(!1), za = mt;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l) return mt;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Hn(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    en(Fn), en(wn);
  }
  function Tc(n, r, l) {
    if (wn.current !== mt) throw Error(D(168));
    un(wn, r), un(Fn, l);
  }
  function Dv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(D(108, Me(n) || "Unknown", c));
    return ce({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mt, za = wn.current, un(wn, n), un(Fn, Fn.current), !0;
  }
  function Ua(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(D(169));
    l ? (n = Dv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, en(Fn), en(wn), un(wn, n)) : en(Fn), un(Fn, l);
  }
  var ti = null, fs = !1, ds = !1;
  function yl(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  function fd(n) {
    fs = !0, yl(n);
  }
  function Mr() {
    if (!ds && ti !== null) {
      ds = !0;
      var n = 0, r = _t;
      try {
        var l = ti;
        for (_t = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, fs = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), dn(rt, Mr), c;
      } finally {
        _t = r, ds = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, ao = null, El = 0, sr = [], Pn = 0, uu = null, zr = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = ao, ao = n, El = r;
  }
  function Ov(n, r, l) {
    sr[Pn++] = zr, sr[Pn++] = Si, sr[Pn++] = uu, uu = n;
    var o = zr;
    n = Si;
    var c = 32 - Or(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Or(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, zr = 1 << 32 - Or(r) + c | l << c | o, Si = d + n;
    } else zr = 1 << d | l << c | o, Si = n;
  }
  function dd(n) {
    n.return !== null && (Cl(n, 1), Ov(n, 1, 0));
  }
  function bc(n) {
    for (; n === ao; ) ao = gl[--Sl], gl[Sl] = null, El = gl[--Sl], gl[Sl] = null;
    for (; n === uu; ) uu = sr[--Pn], sr[Pn] = null, Si = sr[--Pn], sr[Pn] = null, zr = sr[--Pn], sr[Pn] = null;
  }
  var Jr = null, Zr = null, yn = !1, ni = null;
  function pd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Jr = n, Zr = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Jr = n, Zr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = uu !== null ? { id: zr, overflow: Si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Jr = n, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function md(n) {
    if (yn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(D(418));
          r = ei(l.nextSibling);
          var o = Jr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, yn = !1, Jr = n);
        }
      } else {
        if (hd(n)) throw Error(D(418));
        n.flags = n.flags & -4097 | 2, yn = !1, Jr = n;
      }
    }
  }
  function Lv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function On(n) {
    if (n !== Jr) return !1;
    if (!yn) return Lv(n), yn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (hd(n)) throw Nv(), Error(D(418));
      for (; r; ) pd(n, r), r = ei(r.nextSibling);
    }
    if (Lv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(D(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Zr = ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Zr = null;
      }
    } else Zr = Jr ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Nv() {
    for (var n = Zr; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    Zr = Jr = null, yn = !1;
  }
  function ps(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = Ye.ReactCurrentBatchConfig;
  function vs(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(D(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(D(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(D(284));
      if (!l._owner) throw Error(D(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(D(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(O, w) {
      if (n) {
        var M = O.deletions;
        M === null ? (O.deletions = [w], O.flags |= 16) : M.push(w);
      }
    }
    function l(O, w) {
      if (!n) return null;
      for (; w !== null; ) r(O, w), w = w.sibling;
      return null;
    }
    function o(O, w) {
      for (O = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? O.set(w.key, w) : O.set(w.index, w), w = w.sibling;
      return O;
    }
    function c(O, w) {
      return O = Nl(O, w), O.index = 0, O.sibling = null, O;
    }
    function d(O, w, M) {
      return O.index = M, n ? (M = O.alternate, M !== null ? (M = M.index, M < w ? (O.flags |= 2, w) : M) : (O.flags |= 2, w)) : (O.flags |= 1048576, w);
    }
    function m(O) {
      return n && O.alternate === null && (O.flags |= 2), O;
    }
    function E(O, w, M, ne) {
      return w === null || w.tag !== 6 ? (w = wu(M, O.mode, ne), w.return = O, w) : (w = c(w, M), w.return = O, w);
    }
    function T(O, w, M, ne) {
      var ze = M.type;
      return ze === ct ? J(O, w, M.props.children, ne, M.key) : w !== null && (w.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === vt && Mv(ze) === w.type) ? (ne = c(w, M.props), ne.ref = vs(O, w, M), ne.return = O, ne) : (ne = cf(M.type, M.key, M.props, null, O.mode, ne), ne.ref = vs(O, w, M), ne.return = O, ne);
    }
    function A(O, w, M, ne) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== M.containerInfo || w.stateNode.implementation !== M.implementation ? (w = Wd(M, O.mode, ne), w.return = O, w) : (w = c(w, M.children || []), w.return = O, w);
    }
    function J(O, w, M, ne, ze) {
      return w === null || w.tag !== 7 ? (w = Ml(M, O.mode, ne, ze), w.return = O, w) : (w = c(w, M), w.return = O, w);
    }
    function Z(O, w, M) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = wu("" + w, O.mode, M), w.return = O, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ot:
            return M = cf(w.type, w.key, w.props, null, O.mode, M), M.ref = vs(O, null, w), M.return = O, M;
          case Oe:
            return w = Wd(w, O.mode, M), w.return = O, w;
          case vt:
            var ne = w._init;
            return Z(O, ne(w._payload), M);
        }
        if (Dr(w) || Te(w)) return w = Ml(w, O.mode, M, null), w.return = O, w;
        io(O, w);
      }
      return null;
    }
    function K(O, w, M, ne) {
      var ze = w !== null ? w.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return ze !== null ? null : E(O, w, "" + M, ne);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ot:
            return M.key === ze ? T(O, w, M, ne) : null;
          case Oe:
            return M.key === ze ? A(O, w, M, ne) : null;
          case vt:
            return ze = M._init, K(
              O,
              w,
              ze(M._payload),
              ne
            );
        }
        if (Dr(M) || Te(M)) return ze !== null ? null : J(O, w, M, ne, null);
        io(O, M);
      }
      return null;
    }
    function ge(O, w, M, ne, ze) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return O = O.get(M) || null, E(w, O, "" + ne, ze);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case Ot:
            return O = O.get(ne.key === null ? M : ne.key) || null, T(w, O, ne, ze);
          case Oe:
            return O = O.get(ne.key === null ? M : ne.key) || null, A(w, O, ne, ze);
          case vt:
            var xe = ne._init;
            return ge(O, w, M, xe(ne._payload), ze);
        }
        if (Dr(ne) || Te(ne)) return O = O.get(M) || null, J(w, O, ne, ze, null);
        io(w, ne);
      }
      return null;
    }
    function _e(O, w, M, ne) {
      for (var ze = null, xe = null, He = w, Ke = w = 0, ir = null; He !== null && Ke < M.length; Ke++) {
        He.index > Ke ? (ir = He, He = null) : ir = He.sibling;
        var Mt = K(O, He, M[Ke], ne);
        if (Mt === null) {
          He === null && (He = ir);
          break;
        }
        n && He && Mt.alternate === null && r(O, He), w = d(Mt, w, Ke), xe === null ? ze = Mt : xe.sibling = Mt, xe = Mt, He = ir;
      }
      if (Ke === M.length) return l(O, He), yn && Cl(O, Ke), ze;
      if (He === null) {
        for (; Ke < M.length; Ke++) He = Z(O, M[Ke], ne), He !== null && (w = d(He, w, Ke), xe === null ? ze = He : xe.sibling = He, xe = He);
        return yn && Cl(O, Ke), ze;
      }
      for (He = o(O, He); Ke < M.length; Ke++) ir = ge(He, O, Ke, M[Ke], ne), ir !== null && (n && ir.alternate !== null && He.delete(ir.key === null ? Ke : ir.key), w = d(ir, w, Ke), xe === null ? ze = ir : xe.sibling = ir, xe = ir);
      return n && He.forEach(function(zl) {
        return r(O, zl);
      }), yn && Cl(O, Ke), ze;
    }
    function Ne(O, w, M, ne) {
      var ze = Te(M);
      if (typeof ze != "function") throw Error(D(150));
      if (M = ze.call(M), M == null) throw Error(D(151));
      for (var xe = ze = null, He = w, Ke = w = 0, ir = null, Mt = M.next(); He !== null && !Mt.done; Ke++, Mt = M.next()) {
        He.index > Ke ? (ir = He, He = null) : ir = He.sibling;
        var zl = K(O, He, Mt.value, ne);
        if (zl === null) {
          He === null && (He = ir);
          break;
        }
        n && He && zl.alternate === null && r(O, He), w = d(zl, w, Ke), xe === null ? ze = zl : xe.sibling = zl, xe = zl, He = ir;
      }
      if (Mt.done) return l(
        O,
        He
      ), yn && Cl(O, Ke), ze;
      if (He === null) {
        for (; !Mt.done; Ke++, Mt = M.next()) Mt = Z(O, Mt.value, ne), Mt !== null && (w = d(Mt, w, Ke), xe === null ? ze = Mt : xe.sibling = Mt, xe = Mt);
        return yn && Cl(O, Ke), ze;
      }
      for (He = o(O, He); !Mt.done; Ke++, Mt = M.next()) Mt = ge(He, O, Ke, Mt.value, ne), Mt !== null && (n && Mt.alternate !== null && He.delete(Mt.key === null ? Ke : Mt.key), w = d(Mt, w, Ke), xe === null ? ze = Mt : xe.sibling = Mt, xe = Mt);
      return n && He.forEach(function(yy) {
        return r(O, yy);
      }), yn && Cl(O, Ke), ze;
    }
    function Mn(O, w, M, ne) {
      if (typeof M == "object" && M !== null && M.type === ct && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ot:
            e: {
              for (var ze = M.key, xe = w; xe !== null; ) {
                if (xe.key === ze) {
                  if (ze = M.type, ze === ct) {
                    if (xe.tag === 7) {
                      l(O, xe.sibling), w = c(xe, M.props.children), w.return = O, O = w;
                      break e;
                    }
                  } else if (xe.elementType === ze || typeof ze == "object" && ze !== null && ze.$$typeof === vt && Mv(ze) === xe.type) {
                    l(O, xe.sibling), w = c(xe, M.props), w.ref = vs(O, xe, M), w.return = O, O = w;
                    break e;
                  }
                  l(O, xe);
                  break;
                } else r(O, xe);
                xe = xe.sibling;
              }
              M.type === ct ? (w = Ml(M.props.children, O.mode, ne, M.key), w.return = O, O = w) : (ne = cf(M.type, M.key, M.props, null, O.mode, ne), ne.ref = vs(O, w, M), ne.return = O, O = ne);
            }
            return m(O);
          case Oe:
            e: {
              for (xe = M.key; w !== null; ) {
                if (w.key === xe) if (w.tag === 4 && w.stateNode.containerInfo === M.containerInfo && w.stateNode.implementation === M.implementation) {
                  l(O, w.sibling), w = c(w, M.children || []), w.return = O, O = w;
                  break e;
                } else {
                  l(O, w);
                  break;
                }
                else r(O, w);
                w = w.sibling;
              }
              w = Wd(M, O.mode, ne), w.return = O, O = w;
            }
            return m(O);
          case vt:
            return xe = M._init, Mn(O, w, xe(M._payload), ne);
        }
        if (Dr(M)) return _e(O, w, M, ne);
        if (Te(M)) return Ne(O, w, M, ne);
        io(O, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, w !== null && w.tag === 6 ? (l(O, w.sibling), w = c(w, M), w.return = O, O = w) : (l(O, w), w = wu(M, O.mode, ne), w.return = O, O = w), m(O)) : l(O, w);
    }
    return Mn;
  }
  var ri = zv(!0), cr = zv(!1), fe = Kr(null), ma = null, _r = null, yd = null;
  function gd() {
    yd = _r = ma = null;
  }
  function Sd(n) {
    var r = fe.current;
    en(fe), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ma = n, yd = _r = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (rr = !0), n.firstContext = null);
  }
  function Wt(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, _r === null) {
      if (ma === null) throw Error(D(308));
      _r = n, ma.dependencies = { lanes: 0, firstContext: n };
    } else _r = _r.next = n;
    return r;
  }
  var su = null;
  function Cd(n) {
    su === null ? su = [n] : su.push(n);
  }
  function Uv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ei(n, o);
  }
  function Ei(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Aa = !1;
  function Rl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Av(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Rt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ei(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ei(n, l);
  }
  function wc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qo(n, l);
    }
  }
  function jv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function _c(n, r, l, o) {
    var c = n.updateQueue;
    Aa = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, A = T.next;
      T.next = null, m === null ? d = A : m.next = A, m = T;
      var J = n.alternate;
      J !== null && (J = J.updateQueue, E = J.lastBaseUpdate, E !== m && (E === null ? J.firstBaseUpdate = A : E.next = A, J.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Z = c.baseState;
      m = 0, J = A = T = null, E = d;
      do {
        var K = E.lane, ge = E.eventTime;
        if ((o & K) === K) {
          J !== null && (J = J.next = {
            eventTime: ge,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var _e = n, Ne = E;
            switch (K = r, ge = l, Ne.tag) {
              case 1:
                if (_e = Ne.payload, typeof _e == "function") {
                  Z = _e.call(ge, Z, K);
                  break e;
                }
                Z = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = Ne.payload, K = typeof _e == "function" ? _e.call(ge, Z, K) : _e, K == null) break e;
                Z = ce({}, Z, K);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, K = c.effects, K === null ? c.effects = [E] : K.push(E));
        } else ge = { eventTime: ge, lane: K, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, J === null ? (A = J = ge, T = Z) : J = J.next = ge, m |= K;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          K = E, E = K.next, K.next = null, c.lastBaseUpdate = K, c.shared.pending = null;
        }
      } while (!0);
      if (J === null && (T = Z), c.baseState = T, c.firstBaseUpdate = A, c.lastBaseUpdate = J, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = Z;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(D(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ci = Kr(uo), hs = Kr(uo), ms = Kr(uo);
  function cu(n) {
    if (n === uo) throw Error(D(174));
    return n;
  }
  function Td(n, r) {
    switch (un(ms, r), un(hs, n), un(Ci, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ur(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ur(r, n);
    }
    en(Ci), un(Ci, r);
  }
  function oo() {
    en(Ci), en(hs), en(ms);
  }
  function bd(n) {
    cu(ms.current);
    var r = cu(Ci.current), l = ur(r, n.type);
    r !== l && (un(hs, n), un(Ci, l));
  }
  function wd(n) {
    hs.current === n && (en(Ci), en(hs));
  }
  var En = Kr(0);
  function xc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var _d = [];
  function ys() {
    for (var n = 0; n < _d.length; n++) _d[n]._workInProgressVersionPrimary = null;
    _d.length = 0;
  }
  var Fe = Ye.ReactCurrentDispatcher, yt = Ye.ReactCurrentBatchConfig, bt = 0, at = null, tn = null, In = null, kc = !1, gs = !1, Ss = 0, xd = 0;
  function Y() {
    throw Error(D(321));
  }
  function Vn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function We(n, r, l, o, c, d) {
    if (bt = d, at = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fe.current = n === null || n.memoizedState === null ? $c : Yc, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ss = 0, 25 <= d) throw Error(D(301));
        d += 1, In = tn = null, r.updateQueue = null, Fe.current = bs, n = l(o, c);
      } while (gs);
    }
    if (Fe.current = qt, r = tn !== null && tn.next !== null, bt = 0, In = tn = at = null, kc = !1, r) throw Error(D(300));
    return n;
  }
  function bl() {
    var n = Ss !== 0;
    return Ss = 0, n;
  }
  function tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return In === null ? at.memoizedState = In = n : In = In.next = n, In;
  }
  function nr() {
    if (tn === null) {
      var n = at.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = tn.next;
    var r = In === null ? at.memoizedState : In.next;
    if (r !== null) In = r, tn = n;
    else {
      if (n === null) throw Error(D(310));
      tn = n, n = { memoizedState: tn.memoizedState, baseState: tn.baseState, baseQueue: tn.baseQueue, queue: tn.queue, next: null }, In === null ? at.memoizedState = In = n : In = In.next = n;
    }
    return In;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = nr(), l = r.queue;
    if (l === null) throw Error(D(311));
    l.lastRenderedReducer = n;
    var o = tn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, A = d;
      do {
        var J = A.lane;
        if ((bt & J) === J) T !== null && (T = T.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var Z = {
            lane: J,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          T === null ? (E = T = Z, m = o) : T = T.next = Z, at.lanes |= J, Su |= J;
        }
        A = A.next;
      } while (A !== null && A !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (rr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, at.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function wl(n) {
    var r = nr(), l = r.queue;
    if (l === null) throw Error(D(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (rr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function Dc(n, r) {
    var l = at, o = nr(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, rr = !0), o = o.queue, Es(Nc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || In !== null && In.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Lc.bind(null, l, o, c, r), void 0, null), Bn === null) throw Error(D(349));
      bt & 30 || Oc(l, r, c);
    }
    return c;
  }
  function Oc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = at.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, at.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Lc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Mc(r) && zc(n);
  }
  function Nc(n, r, l) {
    return l(function() {
      Mc(r) && zc(n);
    });
  }
  function Mc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function zc(n) {
    var r = Ei(n, 1);
    r !== null && Ca(r, n, 1, -1);
  }
  function Uc(n) {
    var r = tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ts.bind(null, at, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = at.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, at.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ac() {
    return nr().memoizedState;
  }
  function co(n, r, l, o) {
    var c = tr();
    at.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = nr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (tn !== null) {
      var m = tn.memoizedState;
      if (d = m.destroy, o !== null && Vn(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    at.flags |= n, c.memoizedState = du(1 | r, l, d, o);
  }
  function jc(n, r) {
    return co(8390656, 8, n, r);
  }
  function Es(n, r) {
    return fo(2048, 8, n, r);
  }
  function Fc(n, r) {
    return fo(4, 2, n, r);
  }
  function Hc(n, r) {
    return fo(4, 4, n, r);
  }
  function Cs(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function pu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(4, 4, Cs.bind(null, r, n), l);
  }
  function Rs() {
  }
  function Pc(n, r) {
    var l = nr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Vn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Vc(n, r) {
    var l = nr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Vn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Bc(n, r, l) {
    return bt & 21 ? (Za(l, r) || (l = ql(), at.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, rr = !0), n.memoizedState = l);
  }
  function Fv(n, r) {
    var l = _t;
    _t = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = yt.transition;
    yt.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = l, yt.transition = o;
    }
  }
  function po() {
    return nr().memoizedState;
  }
  function Hv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, _l(n)) ya(r, l);
    else if (l = Uv(n, r, l, o), l !== null) {
      var c = on();
      Ca(l, n, o, c), Pv(l, r, o);
    }
  }
  function Ts(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (_l(n)) ya(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Uv(n, r, c, o), l !== null && (c = on(), Ca(l, n, o, c), Pv(l, r, o));
    }
  }
  function _l(n) {
    var r = n.alternate;
    return n === at || r !== null && r === at;
  }
  function ya(n, r) {
    gs = kc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Pv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qo(n, l);
    }
  }
  var qt = { readContext: Wt, useCallback: Y, useContext: Y, useEffect: Y, useImperativeHandle: Y, useInsertionEffect: Y, useLayoutEffect: Y, useMemo: Y, useReducer: Y, useRef: Y, useState: Y, useDebugValue: Y, useDeferredValue: Y, useTransition: Y, useMutableSource: Y, useSyncExternalStore: Y, useId: Y, unstable_isNewReconciler: !1 }, $c = { readContext: Wt, useCallback: function(n, r) {
    return tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Wt, useEffect: jc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(
      4194308,
      4,
      Cs.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return co(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return co(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = tr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = tr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hv.bind(null, at, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Uc, useDebugValue: Rs, useDeferredValue: function(n) {
    return tr().memoizedState = n;
  }, useTransition: function() {
    var n = Uc(!1), r = n[0];
    return n = Fv.bind(null, n[1]), tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = at, c = tr();
    if (yn) {
      if (l === void 0) throw Error(D(407));
      l = l();
    } else {
      if (l = r(), Bn === null) throw Error(D(349));
      bt & 30 || Oc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, jc(Nc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, du(9, Lc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = tr(), r = Bn.identifierPrefix;
    if (yn) {
      var l = Si, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ss++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = xd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yc = {
    readContext: Wt,
    useCallback: Pc,
    useContext: Wt,
    useEffect: Es,
    useImperativeHandle: pu,
    useInsertionEffect: Fc,
    useLayoutEffect: Hc,
    useMemo: Vc,
    useReducer: fu,
    useRef: Ac,
    useState: function() {
      return fu(ea);
    },
    useDebugValue: Rs,
    useDeferredValue: function(n) {
      var r = nr();
      return Bc(r, tn.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ea)[0], r = nr().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Dc,
    useId: po,
    unstable_isNewReconciler: !1
  }, bs = { readContext: Wt, useCallback: Pc, useContext: Wt, useEffect: Es, useImperativeHandle: pu, useInsertionEffect: Fc, useLayoutEffect: Hc, useMemo: Vc, useReducer: wl, useRef: Ac, useState: function() {
    return wl(ea);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = nr();
    return tn === null ? r.memoizedState = n : Bc(r, tn.memoizedState, n);
  }, useTransition: function() {
    var n = wl(ea)[0], r = nr().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: Dc, useId: po, unstable_isNewReconciler: !1 };
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = ce({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function kd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ce({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ic = { isMounted: function(n) {
    return (n = n._reactInternals) ? ve(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = on(), c = Ea(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), wc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = on(), c = Ea(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), wc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = on(), o = Ea(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, o), r !== null && (Ca(r, n, o, l), wc(r, n, o));
  } };
  function Vv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Bv(n, r, l) {
    var o = !1, c = mt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Wt(d) : (c = Hn(r) ? za : wn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : mt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Wt(d) : (d = Hn(r) ? za : wn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (kd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), _c(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ee(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Wc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Od(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ry = typeof WeakMap == "function" ? WeakMap : Map;
  function ws(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dl || (Dl = !0, Ms = o), Od(n, r);
    }, l;
  }
  function $v(n, r, l) {
    l = Wi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Od(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Od(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ld(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ry();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Yd.bind(null, n, r, l), r.then(n, n));
  }
  function Nd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, Tl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = Ye.ReactCurrentOwner, rr = !1;
  function Ln(n, r, l, o) {
    r.child = n === null ? cr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function qc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = We(n, r, l, o, d, c), l = bl(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, fr(n, r, c)) : (yn && l && dd(r), r.flags |= 1, Ln(n, r, o, c), r.child);
  }
  function na(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = cf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return fr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (rr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (rr = !0);
      else return r.lanes = n.lanes, fr(n, r, c);
    }
    return Gc(n, r, l, o, c);
  }
  function ut(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, un(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, un(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, un(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, un(yo, Sa), Sa |= o;
    return Ln(n, r, c, l), r.child;
  }
  function _s(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Gc(n, r, l, o, c) {
    var d = Hn(l) ? za : wn.current;
    return d = ha(r, d), lo(r, c), l = We(n, r, l, o, d, c), o = bl(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, fr(n, r, c)) : (yn && o && dd(r), r.flags |= 1, Ln(n, r, l, c), r.child);
  }
  function ay(n, r, l, o, c) {
    if (Hn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) ja(n, r), Bv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = Wt(A) : (A = Hn(l) ? za : wn.current, A = ha(r, A));
      var J = l.getDerivedStateFromProps, Z = typeof J == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Z || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== A) && Qc(r, m, o, A), Aa = !1;
      var K = r.memoizedState;
      m.state = K, _c(r, o, m, c), T = r.memoizedState, E !== o || K !== T || Fn.current || Aa ? (typeof J == "function" && (kd(r, l, J, o), T = r.memoizedState), (E = Aa || Vv(r, l, E, o, K, T, A)) ? (Z || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ta(r.type, E), m.props = A, Z = r.pendingProps, K = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Wt(T) : (T = Hn(l) ? za : wn.current, T = ha(r, T));
      var ge = l.getDerivedStateFromProps;
      (J = typeof ge == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Z || K !== T) && Qc(r, m, o, T), Aa = !1, K = r.memoizedState, m.state = K, _c(r, o, m, c);
      var _e = r.memoizedState;
      E !== Z || K !== _e || Fn.current || Aa ? (typeof ge == "function" && (kd(r, l, ge, o), _e = r.memoizedState), (A = Aa || Vv(r, l, A, o, K, _e, T) || !1) ? (J || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, _e, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, _e, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = _e), m.props = o, m.state = _e, m.context = T, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    _s(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ua(r, l, !1), fr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : Ln(n, r, E, d), r.memoizedState = o.state, c && Ua(r, l, !0), r.child;
  }
  function Xc(n) {
    var r = n.stateNode;
    r.pendingContext ? Tc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tc(n, r.context, !1), Td(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Qi(), ps(c), r.flags |= 256, Ln(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Kc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = En.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), un(En, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Kc(l), r.memoizedState = zd, n) : xs(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Nl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Kc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function xs(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jc(n, r, l, o) {
    return o !== null && ps(o), ri(r, n.child, null, l), n = xs(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Wc(Error(D(422))), Jc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Kc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Jc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(D(419)), o = Wc(d, o, void 0), Jc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, rr || E) {
      if (o = Bn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ei(n, c), Ca(o, n, c, -1));
      }
      return Bd(), o = Wc(Error(D(421))), Jc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = ei(c.nextSibling), Jr = r, yn = !0, ni = null, n !== null && (sr[Pn++] = zr, sr[Pn++] = Si, sr[Pn++] = uu, zr = n.id, Si = n.overflow, uu = r), r = xs(r, o.children), r.flags |= 4096, r);
  }
  function Ud(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Ed(n.return, r, l);
  }
  function Zc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ra(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Ln(n, r, o.children, l), o = En.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ud(n, l, r);
        else if (n.tag === 19) Ud(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (un(En, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && xc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Zc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && xc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Zc(r, !0, l, null, d);
        break;
      case "together":
        Zc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ja(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function fr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(D(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ef(n, r, l) {
    switch (r.tag) {
      case 3:
        Xc(r), Qi();
        break;
      case 5:
        bd(r);
        break;
      case 1:
        Hn(r.type) && lu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        un(fe, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (un(En, En.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (un(En, En.current & 1), n = fr(n, r, l), n !== null ? n.sibling : null);
        un(En, En.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ra(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), un(En, En.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ut(n, r, l);
    }
    return fr(n, r, l);
  }
  var ho, ga, Qn, Wv;
  ho = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ga = function() {
  }, Qn = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = Tn(n, c), o = Tn(n, o), d = [];
          break;
        case "select":
          c = ce({}, c, { value: void 0 }), o = ce({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Kn(n, c), o = Kn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Sc);
      }
      vn(l, o);
      var m;
      l = null;
      for (A in c) if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var E = c[A];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (De.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var T = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && T !== E && (T != null || E != null)) if (A === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          A,
          l
        )), l = T;
        else A === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(A, T)) : A === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(A, "" + T) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (De.hasOwnProperty(A) ? (T != null && A === "onScroll" && It("scroll", n), d || E === T || (d = [])) : (d = d || []).push(A, T));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!yn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function xr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Ad(n, r, l) {
    var o = r.pendingProps;
    switch (bc(r), r.tag) {
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
        return xr(r), null;
      case 1:
        return Hn(r.type) && gi(), xr(r), null;
      case 3:
        return o = r.stateNode, oo(), en(Fn), en(wn), ys(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (On(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (js(ni), ni = null))), ga(n, r), xr(r), null;
      case 5:
        wd(r);
        var c = cu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) Qn(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(D(166));
            return xr(r), null;
          }
          if (n = cu(Ci.current), On(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                It("cancel", o), It("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                It("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) It(as[c], o);
                break;
              case "source":
                It("error", o);
                break;
              case "img":
              case "image":
              case "link":
                It(
                  "error",
                  o
                ), It("load", o);
                break;
              case "details":
                It("toggle", o);
                break;
              case "input":
                Xn(o, d), It("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, It("invalid", o);
                break;
              case "textarea":
                Jn(o, d), It("invalid", o);
            }
            vn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && gc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && gc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : De.hasOwnProperty(m) && E != null && m === "onScroll" && It("scroll", o);
            }
            switch (l) {
              case "input":
                sn(o), ca(o, d, !0);
                break;
              case "textarea":
                sn(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Sc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Un(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[ss] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = hn(l, o), l) {
                case "dialog":
                  It("cancel", n), It("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  It("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) It(as[c], n);
                  c = o;
                  break;
                case "source":
                  It("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  It(
                    "error",
                    n
                  ), It("load", n), c = o;
                  break;
                case "details":
                  It("toggle", n), c = o;
                  break;
                case "input":
                  Xn(n, o), c = Tn(n, o), It("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ce({}, o, { value: void 0 }), It("invalid", n);
                  break;
                case "textarea":
                  Jn(n, o), c = Kn(n, o), It("invalid", n);
                  break;
                default:
                  c = o;
              }
              vn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Pt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Li(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && fa(n, T) : typeof T == "number" && fa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (De.hasOwnProperty(d) ? T != null && d === "onScroll" && It("scroll", n) : T != null && ot(n, d, T, m));
              }
              switch (l) {
                case "input":
                  sn(n), ca(n, o, !1);
                  break;
                case "textarea":
                  sn(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Re(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Yn(n, !!o.multiple, d, !1) : o.defaultValue != null && Yn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Sc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return xr(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(D(166));
          if (l = cu(ms.current), cu(Ci.current), On(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Jr, n !== null)) switch (n.tag) {
              case 3:
                gc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && gc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return xr(r), null;
      case 13:
        if (en(En), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (yn && Zr !== null && r.mode & 1 && !(r.flags & 128)) Nv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = On(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(D(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(D(317));
              d[Ma] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), d = !1;
          } else ni !== null && (js(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || En.current & 1 ? Wn === 0 && (Wn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return oo(), ga(n, r), n === null && ls(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return Sd(r.type._context), xr(r), null;
      case 17:
        return Hn(r.type) && gi(), xr(r), null;
      case 19:
        if (en(En), d = r.memoizedState, d === null) return xr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) ks(d, !1);
        else {
          if (Wn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = xc(n), m !== null) {
              for (r.flags |= 128, ks(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return un(En, En.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Bt() > So && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = xc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), ks(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !yn) return xr(r), null;
          } else 2 * Bt() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, ks(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Bt(), r.sibling = null, l = En.current, un(En, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(D(156, r.tag));
  }
  function qv(n, r) {
    switch (bc(r), r.tag) {
      case 1:
        return Hn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), en(Fn), en(wn), ys(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (en(En), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(D(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return en(En), null;
      case 4:
        return oo(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mu = !1, dr = !1, iy = typeof WeakSet == "function" ? WeakSet : Set, be = null;
  function kl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      _n(n, r, o);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (o) {
      _n(n, r, o);
    }
  }
  var Fd = !1;
  function ly(n, r) {
    if (ru = dl, n = hl(), Gu(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, A = 0, J = 0, Z = n, K = null;
          t: for (; ; ) {
            for (var ge; Z !== l || c !== 0 && Z.nodeType !== 3 || (E = m + c), Z !== d || o !== 0 && Z.nodeType !== 3 || (T = m + o), Z.nodeType === 3 && (m += Z.nodeValue.length), (ge = Z.firstChild) !== null; )
              K = Z, Z = ge;
            for (; ; ) {
              if (Z === n) break t;
              if (K === l && ++A === c && (E = m), K === d && ++J === o && (T = m), (ge = Z.nextSibling) !== null) break;
              Z = K, K = Z.parentNode;
            }
            Z = ge;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, dl = !1, be = r; be !== null; ) if (r = be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, be = n;
    else for (; be !== null; ) {
      r = be;
      try {
        var _e = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (_e !== null) {
              var Ne = _e.memoizedProps, Mn = _e.memoizedState, O = r.stateNode, w = O.getSnapshotBeforeUpdate(r.elementType === r.type ? Ne : ta(r.type, Ne), Mn);
              O.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var M = r.stateNode.containerInfo;
            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(D(163));
        }
      } catch (ne) {
        _n(r, r.return, ne);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, be = n;
        break;
      }
      be = r.return;
    }
    return _e = Fd, Fd = !1, _e;
  }
  function mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && jd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function tf(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function nf(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Gv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Gv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[ss], delete r[sd], delete r[cd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ds(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || rf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ri(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Sc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  function Ti(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ti(n, r, l), n = n.sibling; n !== null; ) Ti(n, r, l), n = n.sibling;
  }
  var Cn = null, Ur = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; ) qi(n, r, l), l = l.sibling;
  }
  function qi(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ol, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        dr || kl(l, r);
      case 6:
        var o = Cn, c = Ur;
        Cn = null, Fa(n, r, l), Cn = o, Ur = c, Cn !== null && (Ur ? (n = Cn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Cn.removeChild(l.stateNode));
        break;
      case 18:
        Cn !== null && (Ur ? (n = Cn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), Oa(n)) : to(Cn, l.stateNode));
        break;
      case 4:
        o = Cn, c = Ur, Cn = l.stateNode.containerInfo, Ur = !0, Fa(n, r, l), Cn = o, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!dr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && jd(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!dr && (kl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          _n(l, r, E);
        }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (dr = (o = dr) || l.memoizedState !== null, Fa(n, r, l), dr = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function Xv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new iy()), r.forEach(function(o) {
        var c = fy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ai(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              Cn = E.stateNode, Ur = !1;
              break e;
            case 3:
              Cn = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              Cn = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (Cn === null) throw Error(D(160));
        qi(d, m, c), Cn = null, Ur = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (A) {
        _n(c, r, A);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Kv(r, n), r = r.sibling;
  }
  function Kv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ii(n), o & 4) {
          try {
            mo(3, n, n.return), tf(3, n);
          } catch (Ne) {
            _n(n, n.return, Ne);
          }
          try {
            mo(5, n, n.return);
          } catch (Ne) {
            _n(n, n.return, Ne);
          }
        }
        break;
      case 1:
        ai(r, n), ii(n), o & 512 && l !== null && kl(l, l.return);
        break;
      case 5:
        if (ai(r, n), ii(n), o & 512 && l !== null && kl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            fa(c, "");
          } catch (Ne) {
            _n(n, n.return, Ne);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Nt(c, d), hn(E, m);
            var A = hn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var J = T[m], Z = T[m + 1];
              J === "style" ? Pt(c, Z) : J === "dangerouslySetInnerHTML" ? Li(c, Z) : J === "children" ? fa(c, Z) : ot(c, J, Z, A);
            }
            switch (E) {
              case "input":
                cn(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var K = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ge = d.value;
                ge != null ? Yn(c, !!d.multiple, ge, !1) : K !== !!d.multiple && (d.defaultValue != null ? Yn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Yn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (Ne) {
            _n(n, n.return, Ne);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(D(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ne) {
            _n(n, n.return, Ne);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (Ne) {
          _n(n, n.return, Ne);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = Bt())), o & 4 && Xv(n);
        break;
      case 22:
        if (J = l !== null && l.memoizedState !== null, n.mode & 1 ? (dr = (A = dr) || J, ai(r, n), dr = A) : ai(r, n), ii(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !J && n.mode & 1) for (be = n, J = n.child; J !== null; ) {
            for (Z = be = J; be !== null; ) {
              switch (K = be, ge = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, K, K.return);
                  break;
                case 1:
                  kl(K, K.return);
                  var _e = K.stateNode;
                  if (typeof _e.componentWillUnmount == "function") {
                    o = K, l = K.return;
                    try {
                      r = o, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                    } catch (Ne) {
                      _n(o, l, Ne);
                    }
                  }
                  break;
                case 5:
                  kl(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    Zv(Z);
                    continue;
                  }
              }
              ge !== null ? (ge.return = K, be = ge) : Zv(Z);
            }
            J = J.sibling;
          }
          e: for (J = null, Z = n; ; ) {
            if (Z.tag === 5) {
              if (J === null) {
                J = Z;
                try {
                  c = Z.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Z.stateNode, T = Z.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = st("display", m));
                } catch (Ne) {
                  _n(n, n.return, Ne);
                }
              }
            } else if (Z.tag === 6) {
              if (J === null) try {
                Z.stateNode.nodeValue = A ? "" : Z.memoizedProps;
              } catch (Ne) {
                _n(n, n.return, Ne);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === n) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === n) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === n) break e;
              J === Z && (J = null), Z = Z.return;
            }
            J === Z && (J = null), Z.sibling.return = Z.return, Z = Z.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ii(n), o & 4 && Xv(n);
        break;
      case 21:
        break;
      default:
        ai(
          r,
          n
        ), ii(n);
    }
  }
  function ii(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (rf(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(D(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (fa(c, ""), o.flags &= -33);
            var d = Ds(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ds(n);
            Ri(n, E, m);
            break;
          default:
            throw Error(D(161));
        }
      } catch (T) {
        _n(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Os(n, r, l) {
    be = n, Jv(n);
  }
  function Jv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; be !== null; ) {
      var c = be, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || dr;
          E = mu;
          var A = dr;
          if (mu = m, (dr = T) && !A) for (be = c; be !== null; ) m = be, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ls(c) : T !== null ? (T.return = m, be = T) : Ls(c);
          for (; d !== null; ) be = d, Jv(d), d = d.sibling;
          be = c, mu = E, dr = A;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, be = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; be !== null; ) {
      var r = be;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              dr || tf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !dr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ta(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Rd(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Rd(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
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
              if (r.memoizedState === null) {
                var A = r.alternate;
                if (A !== null) {
                  var J = A.memoizedState;
                  if (J !== null) {
                    var Z = J.dehydrated;
                    Z !== null && Oa(Z);
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
              throw Error(D(163));
          }
          dr || r.flags & 512 && nf(r);
        } catch (K) {
          _n(r, r.return, K);
        }
      }
      if (r === n) {
        be = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, be = l;
        break;
      }
      be = r.return;
    }
  }
  function Zv(n) {
    for (; be !== null; ) {
      var r = be;
      if (r === n) {
        be = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, be = l;
        break;
      }
      be = r.return;
    }
  }
  function Ls(n) {
    for (; be !== null; ) {
      var r = be;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              tf(4, r);
            } catch (T) {
              _n(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                _n(r, c, T);
              }
            }
            var d = r.return;
            try {
              nf(r);
            } catch (T) {
              _n(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              nf(r);
            } catch (T) {
              _n(r, m, T);
            }
        }
      } catch (T) {
        _n(r, r.return, T);
      }
      if (r === n) {
        be = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, be = E;
        break;
      }
      be = r.return;
    }
  }
  var eh = Math.ceil, af = Ye.ReactCurrentDispatcher, yu = Ye.ReactCurrentOwner, kr = Ye.ReactCurrentBatchConfig, Rt = 0, Bn = null, Nn = null, pr = 0, Sa = 0, yo = Kr(0), Wn = 0, gu = null, Su = 0, Eu = 0, Ns = 0, go = null, aa = null, Pd = 0, So = 1 / 0, Gi = null, Dl = !1, Ms = null, Ha = null, lf = !1, Ol = null, zs = 0, Eo = 0, Co = null, Cu = -1, Us = 0;
  function on() {
    return Rt & 6 ? Bt() : Cu !== -1 ? Cu : Cu = Bt();
  }
  function Ea(n) {
    return n.mode & 1 ? Rt & 2 && pr !== 0 ? pr & -pr : ou.transition !== null ? (Us === 0 && (Us = ql()), Us) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : qo(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(D(185));
    fl(n, l, o), (!(Rt & 2) || n !== Bn) && (n === Bn && (!(Rt & 2) && (Eu |= l), Wn === 4 && Ll(n, pr)), ar(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (So = Bt() + 500, fs && Mr()));
  }
  function ar(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = pi(n, n === Bn ? pr : 0);
    if (o === 0) l !== null && mn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && mn(l), r === 1) n.tag === 0 ? fd(Hs.bind(null, n)) : yl(Hs.bind(null, n)), ny(function() {
        !(Rt & 6) && Mr();
      }), l = null;
      else {
        switch (Wo(o)) {
          case 1:
            l = rt;
            break;
          case 4:
            l = di;
            break;
          case 16:
            l = Ui;
            break;
          case 536870912:
            l = Ai;
            break;
          default:
            l = Ui;
        }
        l = lh(l, th.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function th(n, r) {
    if (Cu = -1, Us = 0, Rt & 6) throw Error(D(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = pi(n, n === Bn ? pr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = sf(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = nh();
      (Bn !== n || pr !== r) && (Gi = null, So = Bt() + 500, Tu(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          of(n, E);
        }
      while (!0);
      gd(), af.current = d, Rt = c, Nn !== null ? r = 0 : (Bn = null, pr = 0, r = Wn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = As(n, c))), r === 1) throw l = gu, Tu(n, 0), Ll(n, o), ar(n, Bt()), l;
      if (r === 6) Ll(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fs(c) && (r = sf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = As(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ll(n, o), ar(n, Bt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(D(345));
          case 2:
            bu(n, aa, Gi);
            break;
          case 3:
            if (Ll(n, o), (o & 130023424) === o && (r = Pd + 500 - Bt(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                on(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ec(bu.bind(null, n, aa, Gi), r);
              break;
            }
            bu(n, aa, Gi);
            break;
          case 4:
            if (Ll(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Bt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * eh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ec(bu.bind(null, n, aa, Gi), o);
              break;
            }
            bu(n, aa, Gi);
            break;
          case 5:
            bu(n, aa, Gi);
            break;
          default:
            throw Error(D(329));
        }
      }
    }
    return ar(n, Bt()), n.callbackNode === l ? th.bind(null, n) : null;
  }
  function As(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = sf(n, r), n !== 2 && (r = aa, aa = l, r !== null && js(r)), n;
  }
  function js(n) {
    aa === null ? aa = n : aa.push.apply(aa, n);
  }
  function Fs(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Za(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ll(n, r) {
    for (r &= ~Ns, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Hs(n) {
    if (Rt & 6) throw Error(D(327));
    Ro();
    var r = pi(n, 0);
    if (!(r & 1)) return ar(n, Bt()), null;
    var l = sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = As(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ll(n, r), ar(n, Bt()), l;
    if (l === 6) throw Error(D(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, bu(n, aa, Gi), ar(n, Bt()), null;
  }
  function uf(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (So = Bt() + 500, fs && Mr());
    }
  }
  function Ru(n) {
    Ol !== null && Ol.tag === 0 && !(Rt & 6) && Ro();
    var r = Rt;
    Rt |= 1;
    var l = kr.transition, o = _t;
    try {
      if (kr.transition = null, _t = 1, n) return n();
    } finally {
      _t = o, kr.transition = l, Rt = r, !(Rt & 6) && Mr();
    }
  }
  function Vd() {
    Sa = yo.current, en(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, kv(l)), Nn !== null) for (l = Nn.return; l !== null; ) {
      var o = l;
      switch (bc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), en(Fn), en(wn), ys();
          break;
        case 5:
          wd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          en(En);
          break;
        case 19:
          en(En);
          break;
        case 10:
          Sd(o.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      l = l.return;
    }
    if (Bn = n, Nn = n = Nl(n.current, null), pr = Sa = r, Wn = 0, gu = null, Ns = Eu = Su = 0, aa = go = null, su !== null) {
      for (r = 0; r < su.length; r++) if (l = su[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      su = null;
    }
    return n;
  }
  function of(n, r) {
    do {
      var l = Nn;
      try {
        if (gd(), Fe.current = qt, kc) {
          for (var o = at.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          kc = !1;
        }
        if (bt = 0, In = tn = at = null, gs = !1, Ss = 0, yu.current = null, l === null || l.return === null) {
          Wn = 1, gu = r, Nn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = pr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var A = T, J = E, Z = J.tag;
            if (!(J.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var K = J.alternate;
              K ? (J.updateQueue = K.updateQueue, J.memoizedState = K.memoizedState, J.lanes = K.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var ge = Nd(m);
            if (ge !== null) {
              ge.flags &= -257, Yv(ge, m, E, d, r), ge.mode & 1 && Ld(d, A, r), r = ge, T = A;
              var _e = r.updateQueue;
              if (_e === null) {
                var Ne = /* @__PURE__ */ new Set();
                Ne.add(T), r.updateQueue = Ne;
              } else _e.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Ld(d, A, r), Bd();
                break e;
              }
              T = Error(D(426));
            }
          } else if (yn && E.mode & 1) {
            var Mn = Nd(m);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), Yv(Mn, m, E, d, r), ps(xl(T, E));
              break e;
            }
          }
          d = T = xl(T, E), Wn !== 4 && (Wn = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var O = ws(d, T, r);
                jv(d, O);
                break e;
              case 1:
                E = T;
                var w = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Ha === null || !Ha.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ne = $v(d, E, r);
                  jv(d, ne);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (ze) {
        r = ze, Nn === l && l !== null && (Nn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = af.current;
    return af.current = qt, n === null ? qt : n;
  }
  function Bd() {
    (Wn === 0 || Wn === 3 || Wn === 2) && (Wn = 4), Bn === null || !(Su & 268435455) && !(Eu & 268435455) || Ll(Bn, pr);
  }
  function sf(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = nh();
    (Bn !== n || pr !== r) && (Gi = null, Tu(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        of(n, c);
      }
    while (!0);
    if (gd(), Rt = l, af.current = o, Nn !== null) throw Error(D(261));
    return Bn = null, pr = 0, Wn;
  }
  function uy() {
    for (; Nn !== null; ) $d(Nn);
  }
  function oy() {
    for (; Nn !== null && !Tr(); ) $d(Nn);
  }
  function $d(n) {
    var r = Id(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : Nn = r, yu.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = qv(l, r), l !== null) {
          l.flags &= 32767, Nn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Wn = 6, Nn = null;
          return;
        }
      } else if (l = Ad(l, r, Sa), l !== null) {
        Nn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Nn = r;
        return;
      }
      Nn = r = n;
    } while (r !== null);
    Wn === 0 && (Wn = 5);
  }
  function bu(n, r, l) {
    var o = _t, c = kr.transition;
    try {
      kr.transition = null, _t = 1, sy(n, r, l, o);
    } finally {
      kr.transition = c, _t = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      Ro();
    while (Ol !== null);
    if (Rt & 6) throw Error(D(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(D(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Bn && (Nn = Bn = null, pr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, lh(Ui, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = kr.transition, kr.transition = null;
      var m = _t;
      _t = 1;
      var E = Rt;
      Rt |= 4, yu.current = null, ly(n, l), Kv(l, n), Sv(os), dl = !!ru, os = ru = null, n.current = l, Os(l), Xa(), Rt = E, _t = m, kr.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ol = n, zs = c), d = n.pendingLanes, d === 0 && (Ha = null), $o(l.stateNode), ar(n, Bt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = Ms, Ms = null, n;
    return zs & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Ol !== null) {
      var n = Wo(zs), r = kr.transition, l = _t;
      try {
        if (kr.transition = null, _t = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, zs = 0, Rt & 6) throw Error(D(331));
          var c = Rt;
          for (Rt |= 4, be = n.current; be !== null; ) {
            var d = be, m = d.child;
            if (be.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var A = E[T];
                  for (be = A; be !== null; ) {
                    var J = be;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, J, d);
                    }
                    var Z = J.child;
                    if (Z !== null) Z.return = J, be = Z;
                    else for (; be !== null; ) {
                      J = be;
                      var K = J.sibling, ge = J.return;
                      if (Gv(J), J === A) {
                        be = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = ge, be = K;
                        break;
                      }
                      be = ge;
                    }
                  }
                }
                var _e = d.alternate;
                if (_e !== null) {
                  var Ne = _e.child;
                  if (Ne !== null) {
                    _e.child = null;
                    do {
                      var Mn = Ne.sibling;
                      Ne.sibling = null, Ne = Mn;
                    } while (Ne !== null);
                  }
                }
                be = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, be = m;
            else e: for (; be !== null; ) {
              if (d = be, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var O = d.sibling;
              if (O !== null) {
                O.return = d.return, be = O;
                break e;
              }
              be = d.return;
            }
          }
          var w = n.current;
          for (be = w; be !== null; ) {
            m = be;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null) M.return = m, be = M;
            else e: for (m = w; be !== null; ) {
              if (E = be, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tf(9, E);
                }
              } catch (ze) {
                _n(E, E.return, ze);
              }
              if (E === m) {
                be = null;
                break e;
              }
              var ne = E.sibling;
              if (ne !== null) {
                ne.return = E.return, be = ne;
                break e;
              }
              be = E.return;
            }
          }
          if (Rt = c, Mr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        _t = l, kr.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = xl(l, r), r = ws(n, r, 1), n = Tl(n, r, 1), r = on(), n !== null && (fl(n, 1, r), ar(n, r));
  }
  function _n(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
          n = xl(l, n), n = $v(r, n, 1), r = Tl(r, n, 1), n = on(), r !== null && (fl(r, 1, n), ar(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = on(), n.pingedLanes |= n.suspendedLanes & l, Bn === n && (pr & l) === l && (Wn === 4 || Wn === 3 && (pr & 130023424) === pr && 500 > Bt() - Pd ? Tu(n, 0) : Ns |= l), ar(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = on();
    n = Ei(n, r), n !== null && (fl(n, r, l), ar(n, l));
  }
  function cy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ih(n, l);
  }
  function fy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(D(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var Id;
  Id = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Fn.current) rr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return rr = !1, ef(n, r, l);
      rr = !!(n.flags & 131072);
    }
    else rr = !1, yn && r.flags & 1048576 && Ov(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ha(r, wn.current);
        lo(r, l), c = We(null, r, o, n, c, l);
        var d = bl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Hn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, yn && d && dd(r), Ln(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = ta(o, n), c) {
            case 0:
              r = Gc(null, r, o, n, l);
              break e;
            case 1:
              r = ay(null, r, o, n, l);
              break e;
            case 11:
              r = qc(null, r, o, n, l);
              break e;
            case 14:
              r = na(null, r, o, ta(o.type, n), l);
              break e;
          }
          throw Error(D(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Gc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ay(n, r, o, c, l);
      case 3:
        e: {
          if (Xc(r), n === null) throw Error(D(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Av(n, r), _c(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xl(Error(D(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xl(Error(D(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Zr = ei(r.stateNode.containerInfo.firstChild), Jr = r, yn = !0, ni = null, l = cr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), o === c) {
              r = fr(n, r, l);
              break e;
            }
            Ln(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bd(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), _s(n, r), Ln(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Iv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : Ln(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), qc(n, r, o, c, l);
      case 7:
        return Ln(n, r, r.pendingProps, l), r.child;
      case 8:
        return Ln(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Ln(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, un(fe, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !Fn.current) {
              r = fr(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Wi(-1, l & -l), T.tag = 2;
                    var A = d.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var J = A.pending;
                      J === null ? T.next = T : (T.next = J.next, J.next = T), A.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Ed(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(D(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Ed(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          Ln(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = Wt(c), o = o(c), r.flags |= 1, Ln(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), na(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ja(n, r), r.tag = 1, Hn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Bv(r, o, c), Dd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return ra(n, r, l);
      case 22:
        return ut(n, r, l);
    }
    throw Error(D(156, r.tag));
  };
  function lh(n, r) {
    return dn(n, r);
  }
  function dy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new dy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function py(n) {
    if (typeof n == "function") return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === $t) return 11;
      if (n === Ut) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function cf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ct:
        return Ml(l.children, c, d, r);
      case Qe:
        m = 8, c |= 8;
        break;
      case Gt:
        return n = Pa(12, l, r, c | 2), n.elementType = Gt, n.lanes = d, n;
      case gt:
        return n = Pa(13, l, r, c), n.elementType = gt, n.lanes = d, n;
      case Be:
        return n = Pa(19, l, r, c), n.elementType = Be, n.lanes = d, n;
      case it:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Lt:
            m = 10;
            break e;
          case an:
            m = 9;
            break e;
          case $t:
            m = 11;
            break e;
          case Ut:
            m = 14;
            break e;
          case vt:
            m = 16, o = null;
            break e;
        }
        throw Error(D(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = it, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function wu(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function uh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ff(n, r, l, o, c, d, m, E, T) {
    return n = new uh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function oh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Oe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function sh(n) {
    if (!n) return mt;
    n = n._reactInternals;
    e: {
      if (ve(n) !== n || n.tag !== 1) throw Error(D(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Hn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(D(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Hn(l)) return Dv(n, l, r);
    }
    return r;
  }
  function qd(n, r, l, o, c, d, m, E, T) {
    return n = ff(l, o, !0, n, c, d, m, E, T), n.context = sh(null), l = n.current, o = on(), c = Ea(l), d = Wi(o, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, fl(n, c, o), ar(n, o), n;
  }
  function df(n, r, l, o) {
    var c = r.current, d = on(), m = Ea(c);
    return l = sh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Tl(c, r, m), n !== null && (Ca(n, c, m, d), wc(n, c, m)), m;
  }
  function pf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ch(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function vf(n, r) {
    ch(n, r), (n = n.alternate) && ch(n, r);
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function hf(n) {
    this._internalRoot = n;
  }
  Xi.prototype.render = hf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(D(409));
    df(n, r, null, null);
  }, Xi.prototype.unmount = hf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        df(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function Xi(n) {
    this._internalRoot = n;
  }
  Xi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ka.length && r !== 0 && r < Ka[l].priority; l++) ;
      Ka.splice(l, 0, n), l === 0 && Pu(n);
    }
  };
  function Xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function mf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function fh() {
  }
  function vy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = pf(m);
          d.call(A);
        };
      }
      var m = qd(r, o, n, 0, null, !1, !1, "", fh);
      return n._reactRootContainer = m, n[Yi] = m.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = pf(T);
        E.call(A);
      };
    }
    var T = ff(n, 0, !1, null, null, !1, !1, "", fh);
    return n._reactRootContainer = T, n[Yi] = T.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
      df(r, T, l, o);
    }), T;
  }
  function yf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = pf(m);
          E.call(T);
        };
      }
      df(r, m, n, c);
    } else m = vy(l, r, n, c, o);
    return pf(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qr(r.pendingLanes);
          l !== 0 && (Qo(r, l | 1), ar(r, Bt()), !(Rt & 6) && (So = Bt() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = on();
            Ca(o, n, 1, c);
          }
        }), vf(n, 1);
    }
  }, xt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = on();
        Ca(r, n, 134217728, l);
      }
      vf(n, 134217728);
    }
  }, uc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Ei(n, r);
      if (l !== null) {
        var o = on();
        Ca(l, n, r, o);
      }
      vf(n, r);
    }
  }, vi = function() {
    return _t;
  }, Je = function(n, r) {
    var l = _t;
    try {
      return _t = n, r();
    } finally {
      _t = l;
    }
  }, Xt = function(n, r, l) {
    switch (r) {
      case "input":
        if (cn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(D(90));
              xn(o), cn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, l);
        break;
      case "select":
        r = l.value, r != null && Yn(n, !!l.multiple, r, !1);
    }
  }, Il = uf, Ql = Ru;
  var hy = { usingClientEntryPoint: !1, Events: [cs, je, Ii, ka, Ni, uf] }, bo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ft(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: bo.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gf.isDisabled && gf.supportsFiber) try {
      ol = gf.inject(my), Wr = gf;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r)) throw Error(D(200));
    return oh(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!Xd(n)) throw Error(D(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ff(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, ls(n.nodeType === 8 ? n.parentNode : n), new hf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(D(188)) : (n = Object.keys(n).join(","), Error(D(268, n)));
    return n = ft(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ru(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!mf(r)) throw Error(D(200));
    return yf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!Xd(n)) throw Error(D(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = qd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, ls(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Xi(r);
  }, Qa.render = function(n, r, l) {
    if (!mf(r)) throw Error(D(200));
    return yf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!mf(n)) throw Error(D(40));
    return n._reactRootContainer ? (Ru(function() {
      yf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = uf, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mf(l)) throw Error(D(200));
    if (n == null || n._reactInternals === void 0) throw Error(D(38));
    return yf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, iT;
function ck() {
  if (iT) return Wa;
  iT = 1;
  var V = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return V.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var q = Ft, D = oT(), qe = q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = !1;
    function pt(e) {
      De = e;
    }
    function Ae(e) {
      if (!De) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ie("warn", e, a);
      }
    }
    function S(e) {
      if (!De) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ie("error", e, a);
      }
    }
    function Ie(e, t, a) {
      {
        var i = qe.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var me = 0, te = 1, ae = 2, B = 3, W = 4, $ = 5, oe = 6, ue = 7, zt = 8, Ht = 9, ot = 10, Ye = 11, Ot = 12, Oe = 13, ct = 14, Qe = 15, Gt = 16, Lt = 17, an = 18, $t = 19, gt = 21, Be = 22, Ut = 23, vt = 24, it = 25, Q = !0, Te = !1, ce = !1, x = !1, k = !1, G = !0, ie = !0, Ee = !0, Le = !0, Me = /* @__PURE__ */ new Set(), Re = {}, Ze = {};
    function St(e, t) {
      sn(e, t), sn(e + "Capture", t);
    }
    function sn(e, t) {
      Re[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Re[e] = t;
      {
        var a = e.toLowerCase();
        Ze[a] = e, e === "onDoubleClick" && (Ze.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Me.add(t[i]);
    }
    var xn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Gn = Object.prototype.hasOwnProperty;
    function Tn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Xn(e) {
      try {
        return Nt(e), !1;
      } catch {
        return !0;
      }
    }
    function Nt(e) {
      return "" + e;
    }
    function cn(e, t) {
      if (Xn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Nt(e);
    }
    function ca(e) {
      if (Xn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), Nt(e);
    }
    function qa(e, t) {
      if (Xn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Nt(e);
    }
    function Dr(e, t) {
      if (Xn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Tn(e)), Nt(e);
    }
    function Yn(e) {
      if (Xn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Tn(e)), Nt(e);
    }
    function Kn(e) {
      if (Xn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Tn(e)), Nt(e);
    }
    var Jn = 0, Rr = 1, Ga = 2, Un = 3, ur = 4, Ir = 5, Li = 6, fa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = fa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Pe = new RegExp("^[" + fa + "][" + le + "]*$"), st = {}, Pt = {};
    function pn(e) {
      return Gn.call(Pt, e) ? !0 : Gn.call(st, e) ? !1 : Pe.test(e) ? (Pt[e] = !0, !0) : (st[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function vn(e, t, a) {
      return t !== null ? t.type === Jn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function hn(e, t, a, i) {
      if (a !== null && a.type === Jn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Zn(e, t, a, i) {
      if (t === null || typeof t > "u" || hn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Un:
            return !t;
          case ur:
            return t === !1;
          case Ir:
            return isNaN(t);
          case Li:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function fn(e) {
      return Vt.hasOwnProperty(e) ? Vt[e] : null;
    }
    function Xt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === Un || t === ur, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Vt = {}, da = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    da.forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Jn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Vt[t] = new Xt(
        t,
        Rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Ga,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Un,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Un,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        ur,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Li,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Ir,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var xa = /[\-\:]([a-z])/g, ka = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, ka);
      Vt[t] = new Xt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, ka);
      Vt[t] = new Xt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(xa, ka);
      Vt[t] = new Xt(
        t,
        Rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ni = "xlinkHref";
    Vt[Ni] = new Xt(
      "xlinkHref",
      Rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Vt[e] = new Xt(
        e,
        Rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Il = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ql = !1;
    function Mi(e) {
      !Ql && Il.test(e) && (Ql = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Wl(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        cn(a, t), i.sanitizeURL && Mi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ur) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Zn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Zn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Un)
            return a;
          f = e.getAttribute(s);
        }
        return Zn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!pn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return cn(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = fn(t);
      if (!vn(t, u, i)) {
        if (Zn(t, a, u, i) && (a = null), i || u === null) {
          if (pn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (cn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Un ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, b;
          _ === Un || _ === ur && a === !0 ? b = "" : (cn(a, y), b = "" + a, u.sanitizeURL && Mi(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var or = Symbol.for("react.element"), va = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), R = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), Et = Symbol.for("react.scope"), ft = Symbol.for("react.debug_trace_mode"), kn = Symbol.for("react.offscreen"), dn = Symbol.for("react.legacy_hidden"), mn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Bt = "@@iterator";
    function Sn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Bt];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, di = 0, Ui, ac, Ai, ol, Wr, $o, Or;
    function Yo() {
    }
    Yo.__reactDisabledLog = !0;
    function ic() {
      {
        if (di === 0) {
          Ui = console.log, ac = console.info, Ai = console.warn, ol = console.error, Wr = console.group, $o = console.groupCollapsed, Or = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Yo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        di++;
      }
    }
    function lc() {
      {
        if (di--, di === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: rt({}, e, {
              value: Ui
            }),
            info: rt({}, e, {
              value: ac
            }),
            warn: rt({}, e, {
              value: Ai
            }),
            error: rt({}, e, {
              value: ol
            }),
            group: rt({}, e, {
              value: Wr
            }),
            groupCollapsed: rt({}, e, {
              value: $o
            }),
            groupEnd: rt({}, e, {
              value: Or
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = qe.ReactCurrentDispatcher, sl;
    function qr(e, t, a) {
      {
        if (sl === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            sl = i && i[1] || "";
          }
        return `
` + sl + e;
      }
    }
    var pi = !1, cl;
    {
      var Fu = typeof WeakMap == "function" ? WeakMap : Map;
      cl = new Fu();
    }
    function Fi(e, t) {
      if (!e || pi)
        return "";
      {
        var a = cl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ji.current, ji.current = null, ic();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              i = j;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var p = j.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pi = !1, ji.current = s, lc(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", U = b ? qr(b) : "";
      return typeof e == "function" && cl.set(e, U), U;
    }
    function ql(e, t, a) {
      return Fi(e, !0);
    }
    function Gl(e, t, a) {
      return Fi(e, !1);
    }
    function fl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Io(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fi(e, fl(e));
      if (typeof e == "string")
        return qr(e);
      switch (e) {
        case de:
          return qr("Suspense");
        case ve:
          return qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case X:
            return Gl(e.render);
          case ht:
            return Io(e.type, t, a);
          case et: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Io(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Qo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case $:
          return qr(e.type);
        case Gt:
          return qr("Lazy");
        case Oe:
          return qr("Suspense");
        case $t:
          return qr("SuspenseList");
        case me:
        case ae:
        case Qe:
          return Gl(e.type);
        case Ye:
          return Gl(e.type.render);
        case te:
          return ql(e.type);
        default:
          return "";
      }
    }
    function _t(e) {
      try {
        var t = "", a = e;
        do
          t += Qo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Wo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Hu(e) {
      return e.displayName || "Context";
    }
    function xt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qr:
          return "Fragment";
        case va:
          return "Portal";
        case fi:
          return "Profiler";
        case ci:
          return "StrictMode";
        case de:
          return "Suspense";
        case ve:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return Hu(t) + ".Consumer";
          case zi:
            var a = e;
            return Hu(a._context) + ".Provider";
          case X:
            return Wo(e, e.render, "ForwardRef");
          case ht:
            var i = e.displayName || null;
            return i !== null ? i : xt(e.type) || "Memo";
          case et: {
            var u = e, s = u._payload, f = u._init;
            try {
              return xt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function uc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function vi(e) {
      return e.displayName || "Context";
    }
    function Je(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case vt:
          return "Cache";
        case Ht:
          var i = a;
          return vi(i) + ".Consumer";
        case ot:
          var u = a;
          return vi(u._context) + ".Provider";
        case an:
          return "DehydratedFragment";
        case Ye:
          return uc(a, a.render, "ForwardRef");
        case ue:
          return "Fragment";
        case $:
          return a;
        case W:
          return "Portal";
        case B:
          return "Root";
        case oe:
          return "Text";
        case Gt:
          return xt(a);
        case zt:
          return a === ci ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case Ot:
          return "Profiler";
        case gt:
          return "Scope";
        case Oe:
          return "Suspense";
        case $t:
          return "SuspenseList";
        case it:
          return "TracingMarker";
        case te:
        case me:
        case Lt:
        case ae:
        case ct:
        case Qe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = qe.ReactDebugCurrentFrame, er = null, Gr = !1;
    function Lr() {
      {
        if (er === null)
          return null;
        var e = er._debugOwner;
        if (e !== null && typeof e < "u")
          return Je(e);
      }
      return null;
    }
    function hi() {
      return er === null ? "" : _t(er);
    }
    function bn() {
      Xl.getCurrentStack = null, er = null, Gr = !1;
    }
    function Kt(e) {
      Xl.getCurrentStack = e === null ? null : hi, er = e, Gr = !1;
    }
    function Ka() {
      return er;
    }
    function Da(e) {
      Gr = e;
    }
    function br(e) {
      return "" + e;
    }
    function Nr(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Kn(e), e;
        default:
          return "";
      }
    }
    var Gf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pu(e, t) {
      Gf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Kl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Vu(e) {
      return e._valueTracker;
    }
    function Bu(e) {
      e._valueTracker = null;
    }
    function Jl(e) {
      var t = "";
      return e && (Kl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = Kl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Kn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Kn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Kn(p), i = "" + p;
          },
          stopTracking: function() {
            Bu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function La(e) {
      Vu(e) || (e._valueTracker = Oa(e));
    }
    function dl(e) {
      if (!e)
        return !1;
      var t = Vu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Jl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Hi(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var $u = !1, pl = !1, Pi = !1, Yu = !1;
    function qo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function Na(e, t) {
      var a = e, i = t.checked, u = rt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Iu(e, t) {
      Pu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !pl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), pl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !$u && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component", t.type), $u = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Nr(t.value != null ? t.value : i),
        controlled: qo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && pa(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = qo(t);
        !a._wrapperState.controlled && i && !Yu && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Yu = !0), a._wrapperState.controlled && !i && !Pi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Pi = !0);
      }
      h(e, t);
      var u = Nr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = br(u)) : a.value !== br(u) && (a.value = br(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? we(a, t.type, u) : t.hasOwnProperty("defaultValue") && we(a, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = br(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function F(e, t) {
      var a = e;
      C(a, t), re(a, t);
    }
    function re(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        cn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = kh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dl(f), C(f, p);
          }
        }
      }
    }
    function we(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = br(e._wrapperState.initialValue) : e.defaultValue !== br(a) && (e.defaultValue = br(a)));
    }
    var ye = !1, Ge = !1, dt = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? q.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ge || (Ge = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (dt || (dt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ye && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ye = !0);
    }
    function Jt(e, t) {
      t.value != null && e.setAttribute("value", br(Nr(t.value)));
    }
    var Zt = Array.isArray;
    function lt(e) {
      return Zt(e);
    }
    var ln;
    ln = !1;
    function Dn() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zl = ["value", "defaultValue"];
    function Go(e) {
      {
        Pu("select", e);
        for (var t = 0; t < Zl.length; t++) {
          var a = Zl[t];
          if (e[a] != null) {
            var i = lt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Dn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Dn());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = br(Nr(a)), _ = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          _ === null && !u[b].disabled && (_ = u[b]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function eu(e, t) {
      return rt({}, t, {
        value: void 0
      });
    }
    function Xo(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ln && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ln = !0);
    }
    function Xf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function oc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Kf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var Zp = !1;
    function sc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = rt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: br(a._wrapperState.initialValue)
      });
      return i;
    }
    function ev(e, t) {
      var a = e;
      Pu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Zp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), Zp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (lt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Nr(i)
      };
    }
    function tv(e, t) {
      var a = e, i = Nr(t.value), u = Nr(t.defaultValue);
      if (i != null) {
        var s = br(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = br(u));
    }
    function nv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ym(e, t) {
      tv(e, t);
    }
    var Ja = "http://www.w3.org/1999/xhtml", Im = "http://www.w3.org/1998/Math/MathML", Jf = "http://www.w3.org/2000/svg";
    function Zf(e) {
      switch (e) {
        case "svg":
          return Jf;
        case "math":
          return Im;
        default:
          return Ja;
      }
    }
    function cc(e, t) {
      return e == null || e === Ja ? Zf(t) : e === Jf && t === "foreignObject" ? Ja : e;
    }
    var Qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, fc, rv = Qm(function(e, t) {
      if (e.namespaceURI === Jf && !("innerHTML" in e)) {
        fc = fc || document.createElement("div"), fc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = fc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Bi = 3, An = 8, $i = 9, Ko = 11, vl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Wm = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Qu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function av(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var iv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Qu).forEach(function(e) {
      iv.forEach(function(t) {
        Qu[av(t, e)] = Qu[e];
      });
    });
    function dc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Qu.hasOwnProperty(e) && Qu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var lv = /([A-Z])/g, Wu = /^ms-/;
    function qm(e) {
      return e.replace(lv, "-$1").toLowerCase().replace(Wu, "-ms-");
    }
    var uv = function() {
    };
    {
      var Gm = /^(?:webkit|moz|o)[A-Z]/, ov = /^-ms-/, sv = /-(.)/g, qu = /;\s*$/, mi = {}, ed = {}, Jo = !1, cv = !1, fv = function(e) {
        return e.replace(sv, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          fv(e.replace(ov, "ms-"))
        ));
      }, nd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, dv = function(e, t) {
        ed.hasOwnProperty(t) && ed[t] || (ed[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(qu, "")));
      }, pv = function(e, t) {
        Jo || (Jo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        cv || (cv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      uv = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : Gm.test(e) ? nd(e) : qu.test(t) && dv(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var Xm = uv;
    function Km(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : qm(i)) + ":", t += dc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function hv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Xm(i, t[i]);
          var s = dc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Jm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function mv(e) {
      var t = {};
      for (var a in e)
        for (var i = Wm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Za(e, t) {
      {
        if (!t)
          return;
        var a = mv(e), i = mv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Jm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var Zo = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, yv = rt({
      menuitem: !0
    }, Zo), gv = "__html";
    function pc(e, t) {
      if (t) {
        if (yv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function hl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var Gu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Sv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Xu = {}, Ku = new RegExp("^(aria)-[" + le + "]*$"), rd = new RegExp("^(aria)[A-Z][" + le + "]*$");
    function es(e, t) {
      {
        if (Gn.call(Xu, t) && Xu[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xu[t] = !0, !0;
        }
        if (Ku.test(t)) {
          var u = t.toLowerCase(), s = Sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Xu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Xu[t] = !0, !0;
        }
      }
      return !0;
    }
    function ad(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = es(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Ev(e, t) {
      hl(e, t) || ad(e, t);
    }
    var ts = !1;
    function Ju(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ts && (ts = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var vc = function() {
    };
    {
      var wr = {}, ns = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + le + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + le + "]*$");
      vc = function(e, t, a, i) {
        if (Gn.call(wr, t) && wr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), wr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), wr[t] = !0, !0;
          if (ns.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (ns.test(t))
          return Cv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (Rv.test(t) || Tv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var v = fn(t), y = v !== null && v.type === Jn;
        if (Gu.hasOwnProperty(u)) {
          var g = Gu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && hn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : hn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Un && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var bv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = vc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function wv(e, t, a) {
      hl(e, t) || bv(e, t, a);
    }
    var id = 1, yi = 2, tu = 4, ld = id | yi | tu, rs = null;
    function Zm(e) {
      rs !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), rs = e;
    }
    function as() {
      rs === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), rs = null;
    }
    function ey(e) {
      return e === rs;
    }
    function hc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var mc = null, It = null, ml = null;
    function is(e) {
      var t = xo(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = kh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function ls(e) {
      mc = e;
    }
    function ud(e) {
      It ? ml ? ml.push(e) : ml = [e] : It = e;
    }
    function od() {
      return It !== null || ml !== null;
    }
    function Zu() {
      if (It) {
        var e = It, t = ml;
        if (It = null, ml = null, is(e), t)
          for (var a = 0; a < t.length; a++)
            is(t[a]);
      }
    }
    var us = function(e, t) {
      return e(t);
    }, nu = function() {
    }, yc = !1;
    function ty() {
      var e = od();
      e && (nu(), Zu());
    }
    function _v(e, t, a) {
      if (yc)
        return e(t, a);
      yc = !0;
      try {
        return us(e, t, a);
      } finally {
        yc = !1, ty();
      }
    }
    function xv(e, t, a) {
      us = e, nu = a;
    }
    function gc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Sc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && gc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = kh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Sc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var os = !1;
    if (xn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            os = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        os = !1;
      }
    function Ec(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var kv = Ec;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Cc = document.createElement("react");
      kv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, b = !0, U = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          Cc.removeEventListener(P, $e, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var pe = Array.prototype.slice.call(arguments, 3);
        function $e() {
          _ = !0, H(), a.apply(i, pe), b = !1;
        }
        var Ue, Dt = !1, Tt = !1;
        function L(N) {
          if (Ue = N.error, Dt = !0, Ue === null && N.colno === 0 && N.lineno === 0 && (Tt = !0), N.defaultPrevented && Ue != null && typeof Ue == "object")
            try {
              Ue._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), Cc.addEventListener(P, $e, !1), g.initEvent(P, !1, !1), Cc.dispatchEvent(g), j && Object.defineProperty(window, "event", j), _ && b && (Dt ? Tt && (Ue = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ue = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ue)), window.removeEventListener("error", L), !_)
          return H(), Ec.apply(this, arguments);
      };
    }
    var ny = kv, eo = !1, to = null, ei = !1, Rc = null, no = {
      onError: function(e) {
        eo = !0, to = e;
      }
    };
    function Ma(e, t, a, i, u, s, f, p, v) {
      eo = !1, to = null, ny.apply(no, arguments);
    }
    function ss(e, t, a, i, u, s, f, p, v) {
      if (Ma.apply(this, arguments), eo) {
        var y = cd();
        ei || (ei = !0, Rc = y);
      }
    }
    function Yi() {
      if (ei) {
        var e = Rc;
        throw ei = !1, Rc = null, e;
      }
    }
    function sd() {
      return eo;
    }
    function cd() {
      if (eo) {
        var e = to;
        return eo = !1, to = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ro(e) {
      return e._reactInternals;
    }
    function iu(e) {
      return e._reactInternals !== void 0;
    }
    function cs(e, t) {
      e._reactInternals = t;
    }
    var je = (
      /*                      */
      0
    ), Ii = (
      /*                */
      1
    ), jn = (
      /*                    */
      2
    ), Ct = (
      /*                       */
      4
    ), Kr = (
      /*                */
      16
    ), en = (
      /*                 */
      32
    ), un = (
      /*                     */
      64
    ), mt = (
      /*                   */
      128
    ), wn = (
      /*            */
      256
    ), Fn = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), ha = (
      /*                      */
      2048
    ), Hn = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), Tc = (
      /*             */
      16384
    ), Dv = (
      /*               */
      32767
    ), lu = (
      /*                   */
      32768
    ), Ua = (
      /*                */
      65536
    ), ti = (
      /* */
      131072
    ), fs = (
      /*                       */
      1048576
    ), ds = (
      /*                    */
      2097152
    ), yl = (
      /*                 */
      4194304
    ), fd = (
      /*                */
      8388608
    ), Mr = (
      /*               */
      16777216
    ), gl = (
      /*              */
      33554432
    ), Sl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ct | za | 0
    ), ao = jn | Ct | Kr | en | Fn | Hn | gi, El = Ct | un | Fn | gi, sr = ha | Kr, Pn = yl | fd | ds, uu = qe.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (jn | Hn)) !== je && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === B ? a : null;
    }
    function Si(e) {
      if (e.tag === Oe) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Cl(e) {
      return e.tag === B ? e.stateNode.containerInfo : null;
    }
    function Ov(e) {
      return zr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === te) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Je(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ro(e);
      return u ? zr(u) === u : !1;
    }
    function bc(e) {
      if (zr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Jr(e) {
      var t = e.alternate;
      if (!t) {
        var a = zr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return bc(s), e;
            if (v === u)
              return bc(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== B)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Jr(e);
      return t !== null ? yn(t) : null;
    }
    function yn(e) {
      if (e.tag === $ || e.tag === oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = yn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ni(e) {
      var t = Jr(e);
      return t !== null ? pd(t) : null;
    }
    function pd(e) {
      if (e.tag === $ || e.tag === oe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== W) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = D.unstable_scheduleCallback, hd = D.unstable_cancelCallback, md = D.unstable_shouldYield, Lv = D.unstable_requestPaint, On = D.unstable_now, Nv = D.unstable_getCurrentPriorityLevel, Qi = D.unstable_ImmediatePriority, ps = D.unstable_UserBlockingPriority, ou = D.unstable_NormalPriority, vs = D.unstable_LowPriority, io = D.unstable_IdlePriority, Mv = D.unstable_yieldValue, zv = D.unstable_setDisableYieldValue, ri = null, cr = null, fe = null, ma = !1, _r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ie && (e = rt({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: su
        })), ri = t.inject(e), cr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (cr && typeof cr.onScheduleFiberRoot == "function")
        try {
          cr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (cr && typeof cr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & mt) === mt;
          if (Ee) {
            var i;
            switch (t) {
              case ra:
                i = Qi;
                break;
              case ja:
                i = ps;
                break;
              case fr:
                i = ou;
                break;
              case ef:
                i = io;
                break;
              default:
                i = ou;
                break;
            }
            cr.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (u) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (cr && typeof cr.onPostCommitFiberRoot == "function")
        try {
          cr.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (cr && typeof cr.onCommitFiberUnmount == "function")
        try {
          cr.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Wt(e) {
      if (typeof Mv == "function" && (zv(e), pt(e)), cr && typeof cr.setStrictMode == "function")
        try {
          cr.setStrictMode(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      fe = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xd; a++) {
          var i = Pv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      fe !== null && typeof fe.markCommitStarted == "function" && fe.markCommitStarted(e);
    }
    function Ei() {
      fe !== null && typeof fe.markCommitStopped == "function" && fe.markCommitStopped();
    }
    function Aa(e) {
      fe !== null && typeof fe.markComponentRenderStarted == "function" && fe.markComponentRenderStarted(e);
    }
    function Rl() {
      fe !== null && typeof fe.markComponentRenderStopped == "function" && fe.markComponentRenderStopped();
    }
    function Av(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function jv(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function _c() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function hs(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function cu() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function Td(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function oo() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function bd(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function wd() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function En() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function xc(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function _d(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      fe !== null && typeof fe.markStateUpdateScheduled == "function" && fe.markStateUpdateScheduled(e, t);
    }
    var Fe = (
      /*                         */
      0
    ), yt = (
      /*                 */
      1
    ), bt = (
      /*                    */
      2
    ), at = (
      /*               */
      8
    ), tn = (
      /*              */
      16
    ), In = Math.clz32 ? Math.clz32 : Ss, kc = Math.log, gs = Math.LN2;
    function Ss(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (kc(t) / gs | 0) | 0;
    }
    var xd = 31, Y = (
      /*                        */
      0
    ), Vn = (
      /*                          */
      0
    ), We = (
      /*                        */
      1
    ), bl = (
      /*    */
      2
    ), tr = (
      /*             */
      4
    ), nr = (
      /*            */
      8
    ), ea = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), wl = (
      /*                       */
      4194240
    ), so = (
      /*                        */
      64
    ), Dc = (
      /*                        */
      128
    ), Oc = (
      /*                        */
      256
    ), Lc = (
      /*                        */
      512
    ), Nc = (
      /*                        */
      1024
    ), Mc = (
      /*                        */
      2048
    ), zc = (
      /*                        */
      4096
    ), Uc = (
      /*                        */
      8192
    ), du = (
      /*                        */
      16384
    ), Ac = (
      /*                       */
      32768
    ), co = (
      /*                       */
      65536
    ), fo = (
      /*                       */
      131072
    ), jc = (
      /*                       */
      262144
    ), Es = (
      /*                       */
      524288
    ), Fc = (
      /*                       */
      1048576
    ), Hc = (
      /*                       */
      2097152
    ), Cs = (
      /*                            */
      130023424
    ), pu = (
      /*                             */
      4194304
    ), Rs = (
      /*                             */
      8388608
    ), Pc = (
      /*                             */
      16777216
    ), Vc = (
      /*                             */
      33554432
    ), Bc = (
      /*                             */
      67108864
    ), Fv = pu, po = (
      /*          */
      134217728
    ), Hv = (
      /*                          */
      268435455
    ), Ts = (
      /*               */
      268435456
    ), _l = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function Pv(e) {
      {
        if (e & We)
          return "Sync";
        if (e & bl)
          return "InputContinuousHydration";
        if (e & tr)
          return "InputContinuous";
        if (e & nr)
          return "DefaultHydration";
        if (e & ea)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & wl)
          return "Transition";
        if (e & Cs)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & Ts)
          return "IdleHydration";
        if (e & _l)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var qt = -1, $c = so, Yc = pu;
    function bs(e) {
      switch (vu(e)) {
        case We:
          return We;
        case bl:
          return bl;
        case tr:
          return tr;
        case nr:
          return nr;
        case ea:
          return ea;
        case fu:
          return fu;
        case so:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case jc:
        case Es:
        case Fc:
        case Hc:
          return e & wl;
        case pu:
        case Rs:
        case Pc:
        case Vc:
        case Bc:
          return e & Cs;
        case po:
          return po;
        case Ts:
          return Ts;
        case _l:
          return _l;
        case ya:
          return ya;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ta(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hv;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = bs(p);
        else {
          var v = f & s;
          v !== Y && (i = bs(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = bs(y) : s !== Y && (i = bs(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = vu(i), _ = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ea && (_ & wl) !== Y
        )
          return t;
      }
      (i & tr) !== Y && (i |= a & ea);
      var b = e.entangledLanes;
      if (b !== Y)
        for (var U = e.entanglements, j = i & b; j > 0; ) {
          var H = Ln(j), pe = 1 << H;
          i |= U[H], j &= ~pe;
        }
      return i;
    }
    function kd(e, t) {
      for (var a = e.eventTimes, i = qt; t > 0; ) {
        var u = Ln(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ic(e, t) {
      switch (e) {
        case We:
        case bl:
        case tr:
          return t + 250;
        case nr:
        case ea:
        case fu:
        case so:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case jc:
        case Es:
        case Fc:
        case Hc:
          return t + 5e3;
        case pu:
        case Rs:
        case Pc:
        case Vc:
        case Bc:
          return qt;
        case po:
        case Ts:
        case _l:
        case ya:
          return qt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), qt;
      }
    }
    function Vv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ln(f), v = 1 << p, y = s[p];
        y === qt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = Ic(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return bs(e.pendingLanes);
    }
    function Qc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== Y ? t : t & ya ? ya : Y;
    }
    function Dd(e) {
      return (e & We) !== Y;
    }
    function xl(e) {
      return (e & Hv) !== Y;
    }
    function Wc(e) {
      return (e & Cs) === e;
    }
    function Od(e) {
      var t = We | tr | ea;
      return (e & t) === Y;
    }
    function ry(e) {
      return (e & wl) === e;
    }
    function ws(e, t) {
      var a = bl | tr | nr | ea;
      return (t & a) !== Y;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Ld(e) {
      return (e & wl) !== Y;
    }
    function Nd() {
      var e = $c;
      return $c <<= 1, ($c & wl) === Y && ($c = so), e;
    }
    function Yv() {
      var e = Yc;
      return Yc <<= 1, (Yc & Cs) === Y && (Yc = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function rr(e) {
      return vu(e);
    }
    function Ln(e) {
      return 31 - In(e);
    }
    function qc(e) {
      return Ln(e);
    }
    function na(e, t) {
      return (e & t) !== Y;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function ut(e, t) {
      return e | t;
    }
    function _s(e, t) {
      return e & ~t;
    }
    function Gc(e, t) {
      return e & t;
    }
    function ay(e) {
      return e;
    }
    function Md(e, t) {
      return e !== Vn && e < t ? e : t;
    }
    function Xc(e) {
      for (var t = [], a = 0; a < xd; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== _l && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = qc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ln(i), s = 1 << u;
        a[u] = qt, i &= ~s;
      }
    }
    function Kc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Iv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = Y, e.pingedLanes = Y, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ln(f), v = 1 << p;
        i[p] = Y, u[p] = qt, s[p] = qt, f &= ~v;
      }
    }
    function xs(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ln(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Jc(e, t) {
      var a = vu(t), i;
      switch (a) {
        case tr:
          i = bl;
          break;
        case ea:
          i = nr;
          break;
        case so:
        case Dc:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case du:
        case Ac:
        case co:
        case fo:
        case jc:
        case Es:
        case Fc:
        case Hc:
        case pu:
        case Rs:
        case Pc:
        case Vc:
        case Bc:
          i = fu;
          break;
        case _l:
          i = Ts;
          break;
        default:
          i = Vn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vn ? Vn : i;
    }
    function Qv(e, t, a) {
      if (_r)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = qc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ud(e, t) {
      if (_r)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = qc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Zc(e, t) {
      return null;
    }
    var ra = We, ja = tr, fr = ea, ef = _l, ho = Vn;
    function ga() {
      return ho;
    }
    function Qn(e) {
      ho = e;
    }
    function Wv(e, t) {
      var a = ho;
      try {
        return ho = e, t();
      } finally {
        ho = a;
      }
    }
    function ks(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xr(e, t) {
      return e > t ? e : t;
    }
    function Ad(e, t) {
      return e !== 0 && e < t;
    }
    function qv(e) {
      var t = vu(e);
      return Ad(ra, t) ? Ad(ja, t) ? xl(t) ? fr : ef : ja : ra;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var dr;
    function iy(e) {
      dr = e;
    }
    function be(e) {
      dr(e);
    }
    var kl;
    function jd(e) {
      kl = e;
    }
    var Fd;
    function ly(e) {
      Fd = e;
    }
    var mo;
    function tf(e) {
      mo = e;
    }
    var nf;
    function Gv(e) {
      nf = e;
    }
    var rf = !1, Ds = [], Ri = null, Ti = null, Cn = null, Ur = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), qi = [], Xv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ai(e) {
      return Xv.indexOf(e) > -1;
    }
    function Kv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ii(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ri = null;
          break;
        case "dragenter":
        case "dragleave":
          Ti = null;
          break;
        case "mouseover":
        case "mouseout":
          Cn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Ur.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Fa.delete(i);
          break;
        }
      }
    }
    function Os(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Kv(t, a, i, u, s);
        if (t !== null) {
          var p = xo(t);
          p !== null && kl(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Jv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ri = Os(Ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ti = Os(Ti, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Cn = Os(Cn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, Os(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return Fa.set(_, Os(Fa.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Bs(e.target);
      if (t !== null) {
        var a = zr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Oe) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, nf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === B) {
            var s = a.stateNode;
            if (mu(s)) {
              e.blockedOn = Cl(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qi.length && Ad(t, qi[i].priority); i++)
        ;
      qi.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ls(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ns(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Zm(s), u.target.dispatchEvent(s), as();
        } else {
          var f = xo(i);
          return f !== null && kl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function eh(e, t, a) {
      Ls(e) && a.delete(t);
    }
    function af() {
      rf = !1, Ri !== null && Ls(Ri) && (Ri = null), Ti !== null && Ls(Ti) && (Ti = null), Cn !== null && Ls(Cn) && (Cn = null), Ur.forEach(eh), Fa.forEach(eh);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, af)));
    }
    function kr(e) {
      if (Ds.length > 0) {
        yu(Ds[0], e);
        for (var t = 1; t < Ds.length; t++) {
          var a = Ds[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && yu(Ri, e), Ti !== null && yu(Ti, e), Cn !== null && yu(Cn, e);
      var i = function(p) {
        return yu(p, e);
      };
      Ur.forEach(i), Fa.forEach(i);
      for (var u = 0; u < qi.length; u++) {
        var s = qi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; qi.length > 0; ) {
        var f = qi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && qi.shift();
      }
    }
    var Rt = qe.ReactCurrentBatchConfig, Bn = !0;
    function Nn(e) {
      Bn = !!e;
    }
    function pr() {
      return Bn;
    }
    function Sa(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case ra:
          u = yo;
          break;
        case ja:
          u = Wn;
          break;
        case fr:
        default:
          u = gu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = ga(), s = Rt.transition;
      Rt.transition = null;
      try {
        Qn(ra), gu(e, t, a, i);
      } finally {
        Qn(u), Rt.transition = s;
      }
    }
    function Wn(e, t, a, i) {
      var u = ga(), s = Rt.transition;
      Rt.transition = null;
      try {
        Qn(ja), gu(e, t, a, i);
      } finally {
        Qn(u), Rt.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Bn && Su(e, t, a, i);
    }
    function Su(e, t, a, i) {
      var u = Ns(e, t, a, i);
      if (u === null) {
        by(e, t, i, Eu, a), ii(e, i);
        return;
      }
      if (Jv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ii(e, i), t & tu && ai(e)) {
        for (; u !== null; ) {
          var s = xo(u);
          s !== null && be(s);
          var f = Ns(e, t, a, i);
          if (f === null && by(e, t, i, Eu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      by(e, t, i, null, a);
    }
    var Eu = null;
    function Ns(e, t, a, i) {
      Eu = null;
      var u = hc(i), s = Bs(u);
      if (s !== null) {
        var f = zr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Oe) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === B) {
            var y = f.stateNode;
            if (mu(y))
              return Cl(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Eu = s, null;
    }
    function go(e) {
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
          return ra;
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
          return ja;
        case "message": {
          var t = Nv();
          switch (t) {
            case Qi:
              return ra;
            case ps:
              return ja;
            case ou:
            case vs:
              return fr;
            case io:
              return ef;
            default:
              return fr;
          }
        }
        default:
          return fr;
      }
    }
    function aa(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Pd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function So(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Gi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Dl = null, Ms = null, Ha = null;
    function lf(e) {
      return Dl = e, Ms = Eo(), !0;
    }
    function Ol() {
      Dl = null, Ms = null, Ha = null;
    }
    function zs() {
      if (Ha)
        return Ha;
      var e, t = Ms, a = t.length, i, u = Eo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ha = u.slice(e, p), Ha;
    }
    function Eo() {
      return "value" in Dl ? Dl.value : Dl.textContent;
    }
    function Co(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Cu() {
      return !0;
    }
    function Us() {
      return !1;
    }
    function on(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = Us, this.isPropagationStopped = Us, this;
      }
      return rt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Cu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Cu
      }), t;
    }
    var Ea = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ca = on(Ea), ar = rt({}, Ea, {
      view: 0,
      detail: 0
    }), th = on(ar), As, js, Fs;
    function Ll(e) {
      e !== Fs && (Fs && e.type === "mousemove" ? (As = e.screenX - Fs.screenX, js = e.screenY - Fs.screenY) : (As = 0, js = 0), Fs = e);
    }
    var Hs = rt({}, ar, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Yd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ll(e), As);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : js;
      }
    }), uf = on(Hs), Ru = rt({}, Hs, {
      dataTransfer: 0
    }), Vd = on(Ru), Tu = rt({}, ar, {
      relatedTarget: 0
    }), of = on(Tu), nh = rt({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = on(nh), sf = rt({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = on(sf), oy = rt({}, Ea, {
      data: 0
    }), $d = on(oy), rh = $d, bu = {
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
    }, sy = {
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
    };
    function Ro(e) {
      if (e.key) {
        var t = bu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Co(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? sy[e.keyCode] || "Unidentified" : "";
    }
    var ah = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _n(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return _n;
    }
    var ih = rt({}, ar, {
      key: Ro,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Yd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Co(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Co(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cy = on(ih), fy = rt({}, Hs, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Id = on(fy), lh = rt({}, ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), dy = on(lh), Pa = rt({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = on(Pa), py = rt({}, Hs, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Nl = on(py), cf = [9, 13, 27, 32], Ml = 229, To = xn && "CompositionEvent" in window, wu = null;
    xn && "documentMode" in document && (wu = document.documentMode);
    var Wd = xn && "TextEvent" in window && !wu, uh = xn && (!To || wu && wu > 8 && wu <= 11), ff = 32, oh = String.fromCharCode(ff);
    function sh() {
      St("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), St("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), St("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), St("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qd = !1;
    function df(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function pf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ch(e, t) {
      return e === "keydown" && t.keyCode === Ml;
    }
    function vf(e, t) {
      switch (e) {
        case "keyup":
          return cf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ml;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hf(e) {
      return e.locale === "ko";
    }
    var Xi = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (To ? s = pf(t) : Xi ? vf(t, i) && (s = "onCompositionEnd") : ch(t, i) && (s = "onCompositionStart"), !s)
        return null;
      uh && !hf(i) && (!Xi && s === "onCompositionStart" ? Xi = lf(u) : s === "onCompositionEnd" && Xi && (f = zs()));
      var p = hh(a, s);
      if (p.length > 0) {
        var v = new $d(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== ff ? null : (qd = !0, oh);
        case "textInput":
          var i = t.data;
          return i === oh && qd ? null : i;
        default:
          return null;
      }
    }
    function fh(e, t) {
      if (Xi) {
        if (e === "compositionend" || !To && vf(e, t)) {
          var a = zs();
          return Ol(), Xi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!df(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return uh && !hf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vy(e, t, a, i, u) {
      var s;
      if (Wd ? s = mf(t, i) : s = fh(t, i), !s)
        return null;
      var f = hh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new rh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function yf(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), vy(e, t, a, i, u);
    }
    var hy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function bo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!hy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function my(e) {
      if (!xn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function gf() {
      St("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      ud(i);
      var u = hh(t, "onChange");
      if (u.length > 0) {
        var s = new Ca("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, hc(e)), _v(d, t);
    }
    function d(e) {
      kE(e, 0);
    }
    function m(e) {
      var t = bf(e);
      if (dl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    xn && (T = my("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", Z);
    }
    function J() {
      r && (r.detachEvent("onpropertychange", Z), r = null, l = null);
    }
    function Z(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function K(e, t, a) {
      e === "focusin" ? (J(), A(t, a)) : e === "focusout" && J();
    }
    function ge(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function _e(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ne(e, t) {
      if (e === "click")
        return m(t);
    }
    function Mn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function O(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || we(e, "number", e.value);
    }
    function w(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, v, y;
      if (o(p) ? v = E : bo(p) ? T ? v = Mn : (v = ge, y = K) : _e(p) && (v = Ne), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && O(p);
    }
    function M() {
      sn("onMouseEnter", ["mouseout", "mouseover"]), sn("onMouseLeave", ["mouseout", "mouseover"]), sn("onPointerEnter", ["pointerout", "pointerover"]), sn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ne(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ey(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Bs(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var b, U;
        if (v) {
          var j = i.relatedTarget || i.toElement;
          if (b = a, U = j ? Bs(j) : null, U !== null) {
            var H = zr(U);
            (U !== H || U.tag !== $ && U.tag !== oe) && (U = null);
          }
        } else
          b = null, U = a;
        if (b !== U) {
          var pe = uf, $e = "onMouseLeave", Ue = "onMouseEnter", Dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (pe = Id, $e = "onPointerLeave", Ue = "onPointerEnter", Dt = "pointer");
          var Tt = b == null ? g : bf(b), L = U == null ? g : bf(U), P = new pe($e, Dt + "leave", b, i, u);
          P.target = Tt, P.relatedTarget = L;
          var N = null, ee = Bs(u);
          if (ee === a) {
            var Ce = new pe(Ue, Dt + "enter", U, i, u);
            Ce.target = L, Ce.relatedTarget = Tt, N = Ce;
          }
          NT(e, P, N, b, U);
        }
      }
    }
    function ze(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : ze;
    function He(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Gn.call(t, s) || !xe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ke(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ir(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Mt(e, t) {
      for (var a = Ke(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ke(ir(a));
      }
    }
    function zl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return yy(e, u, s, f, p);
    }
    function yy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var b = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
          _ = g, g = b;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (b = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = b;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function pT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Mt(e, f), g = Mt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function mE(e) {
      return e && e.nodeType === Bi;
    }
    function yE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : mE(e) ? !1 : mE(t) ? yE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function vT(e) {
      return e && e.ownerDocument && yE(e.ownerDocument.documentElement, e);
    }
    function hT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function gE() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (hT(t))
          e = t.contentWindow;
        else
          return t;
        t = Hi(e.document);
      }
      return t;
    }
    function gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function mT() {
      var e = gE();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? gT(e) : null
      };
    }
    function yT(e) {
      var t = gE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && vT(a)) {
        i !== null && gy(a) && ST(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Xr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function gT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zl(e), t || {
        start: 0,
        end: 0
      };
    }
    function ST(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : pT(e, t);
    }
    var ET = xn && "documentMode" in document && document.documentMode <= 11;
    function CT() {
      St("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Sy = null, Kd = null, Ey = !1;
    function RT(e) {
      if ("selectionStart" in e && gy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function TT(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function SE(e, t, a) {
      var i = TT(a);
      if (!(Ey || Sf == null || Sf !== Hi(i))) {
        var u = RT(Sf);
        if (!Kd || !He(Kd, u)) {
          Kd = u;
          var s = hh(Sy, "onSelect");
          if (s.length > 0) {
            var f = new Ca("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Sf;
          }
        }
      }
    }
    function bT(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        case "focusin":
          (bo(p) || p.contentEditable === "true") && (Sf = p, Sy = a, Kd = null);
          break;
        case "focusout":
          Sf = null, Sy = null, Kd = null;
          break;
        case "mousedown":
          Ey = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ey = !1, SE(e, i, u);
          break;
        case "selectionchange":
          if (ET)
            break;
        case "keydown":
        case "keyup":
          SE(e, i, u);
      }
    }
    function dh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ef = {
      animationend: dh("Animation", "AnimationEnd"),
      animationiteration: dh("Animation", "AnimationIteration"),
      animationstart: dh("Animation", "AnimationStart"),
      transitionend: dh("Transition", "TransitionEnd")
    }, Cy = {}, EE = {};
    xn && (EE = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function ph(e) {
      if (Cy[e])
        return Cy[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in EE)
          return Cy[e] = t[a];
      return e;
    }
    var CE = ph("animationend"), RE = ph("animationiteration"), TE = ph("animationstart"), bE = ph("transitionend"), wE = /* @__PURE__ */ new Map(), _E = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function wo(e, t) {
      wE.set(e, t), St(t, [e]);
    }
    function wT() {
      for (var e = 0; e < _E.length; e++) {
        var t = _E[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        wo(a, "on" + i);
      }
      wo(CE, "onAnimationEnd"), wo(RE, "onAnimationIteration"), wo(TE, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(bE, "onTransitionEnd");
    }
    function _T(e, t, a, i, u, s, f) {
      var p = wE.get(t);
      if (p !== void 0) {
        var v = Ca, y = t;
        switch (t) {
          case "keypress":
            if (Co(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = cy;
            break;
          case "focusin":
            y = "focus", v = of;
            break;
          case "focusout":
            y = "blur", v = of;
            break;
          case "beforeblur":
          case "afterblur":
            v = of;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = uf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Vd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = dy;
            break;
          case CE:
          case RE:
          case TE:
            v = Bd;
            break;
          case bE:
            v = Qd;
            break;
          case "scroll":
            v = th;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = uy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Id;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = OT(a, p, i.type, g, _);
          if (b.length > 0) {
            var U = new v(p, y, null, i, u);
            e.push({
              event: U,
              listeners: b
            });
          }
        }
      }
    }
    wT(), M(), gf(), CT(), sh();
    function xT(e, t, a, i, u, s, f) {
      _T(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (ne(e, t, a, i, u), w(e, t, a, i, u), bT(e, t, a, i, u), yf(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function xE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ss(i, t, void 0, e), e.currentTarget = null;
    }
    function kT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          xE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, b = g.currentTarget, U = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          xE(e, U, b), i = _;
        }
    }
    function kE(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        kT(s, f, a);
      }
      Yi();
    }
    function DT(e, t, a, i, u) {
      var s = hc(a), f = [];
      xT(f, e, i, a, s, t), kE(f, t);
    }
    function Rn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = iw(t), u = MT(e);
      i.has(u) || (DE(t, e, yi, a), i.add(u));
    }
    function Ty(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), DE(a, e, i, t);
    }
    var vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[vh]) {
        e[vh] = !0, Me.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[vh] || (t[vh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function DE(e, t, a, i, u) {
      var s = Sa(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Pd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : aa(e, t, s);
    }
    function OE(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function by(e, t, a, i, u) {
      var s = i;
      if (!(t & id) && !(t & yi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === B || v === W) {
              var y = p.stateNode.containerInfo;
              if (OE(y, f))
                break;
              if (v === W)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === B || _ === W) {
                    var b = g.stateNode.containerInfo;
                    if (OE(b, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var U = Bs(y);
                if (U === null)
                  return;
                var j = U.tag;
                if (j === $ || j === oe) {
                  p = s = U;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      _v(function() {
        return DT(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function OT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, b = _.stateNode, U = _.tag;
        if (U === $ && b !== null && (g = b, p !== null)) {
          var j = ru(y, p);
          j != null && v.push(ep(y, j, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function hh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === $ && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = ru(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Cf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== $);
      return e || null;
    }
    function LT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Cf(s))
        u++;
      for (var f = 0, p = i; p; p = Cf(p))
        f++;
      for (; u - f > 0; )
        a = Cf(a), u--;
      for (; f - u > 0; )
        i = Cf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Cf(a), i = Cf(i);
      }
      return null;
    }
    function LE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === $ && g !== null) {
          var b = g;
          if (u) {
            var U = ru(p, s);
            U != null && f.unshift(ep(p, U, b));
          } else if (!u) {
            var j = ru(p, s);
            j != null && f.push(ep(p, j, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function NT(e, t, a, i, u) {
      var s = i && u ? LT(i, u) : null;
      i !== null && LE(e, t, i, s, !1), u !== null && a !== null && LE(e, a, u, s, !0);
    }
    function MT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, tp = "dangerouslySetInnerHTML", mh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", NE = "autoFocus", Ps = "children", Vs = "style", yh = "__html", wy, gh, np, ME, Sh, zE, UE;
    wy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, gh = function(e, t) {
      Ev(e, t), Ju(e, t), wv(e, t, {
        registrationNameDependencies: Re,
        possibleRegistrationNames: Ze
      });
    }, zE = xn && !document.documentMode, np = function(e, t, a) {
      if (!Va) {
        var i = Eh(a), u = Eh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, ME = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Sh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, UE = function(e, t) {
      var a = e.namespaceURI === Ja ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var zT = /\r\n?/g, UT = /\u0000|\uFFFD/g;
    function Eh(e) {
      Yn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(zT, `
`).replace(UT, "");
    }
    function Ch(e, t, a, i) {
      var u = Eh(t), s = Eh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Q))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function AE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function AT() {
    }
    function Rh(e) {
      e.onclick = AT;
    }
    function jT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Vs)
            f && Object.freeze(f), hv(t, f);
          else if (s === tp) {
            var p = f ? f[yh] : void 0;
            p != null && rv(t, p);
          } else if (s === Ps)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && vl(t, f);
            } else typeof f == "number" && vl(t, "" + f);
          else s === mh || s === _o || s === NE || (Re.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sh(s, f), s === "onScroll" && Rn("scroll", t)) : f != null && pa(t, s, f, u));
        }
    }
    function FT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vs ? hv(e, f) : s === tp ? rv(e, f) : s === Ps ? vl(e, f) : pa(e, s, f, i);
      }
    }
    function HT(e, t, a, i) {
      var u, s = AE(a), f, p = i;
      if (p === Ja && (p = Zf(e)), p === Ja) {
        if (u = hl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ja && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Gn.call(wy, e) && (wy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function PT(e, t) {
      return AE(t).createTextNode(e);
    }
    function VT(e, t, a, i) {
      var u = hl(t, a);
      gh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            Rn(Jd[f], e);
          s = a;
          break;
        case "source":
          Rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e), s = a;
          break;
        case "details":
          Rn("toggle", e), s = a;
          break;
        case "input":
          Iu(e, a), s = Na(e, a), Rn("invalid", e);
          break;
        case "option":
          Yt(e, a), s = a;
          break;
        case "select":
          Xo(e, a), s = eu(e, a), Rn("invalid", e);
          break;
        case "textarea":
          ev(e, a), s = sc(e, a), Rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), jT(t, e, i, s, u), t) {
        case "input":
          La(e), z(e, a, !1);
          break;
        case "textarea":
          La(e), nv(e);
          break;
        case "option":
          Jt(e, a);
          break;
        case "select":
          Xf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Rh(e);
          break;
      }
    }
    function BT(e, t, a, i, u) {
      gh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Na(e, a), p = Na(e, i), s = [];
          break;
        case "select":
          f = eu(e, a), p = eu(e, i), s = [];
          break;
        case "textarea":
          f = sc(e, a), p = sc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Rh(e);
          break;
      }
      pc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Vs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Ps || v === mh || v === _o || v === NE || (Re.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], U = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === U || b == null && U == null))
          if (v === Vs)
            if (b && Object.freeze(b), U) {
              for (y in U)
                U.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && U[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === tp) {
            var j = b ? b[yh] : void 0, H = U ? U[yh] : void 0;
            j != null && H !== j && (s = s || []).push(v, j);
          } else v === Ps ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === mh || v === _o || (Re.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Sh(v, b), v === "onScroll" && Rn("scroll", e)), !s && U !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (Za(g, p[Vs]), (s = s || []).push(Vs, g)), s;
    }
    function $T(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = hl(a, i), f = hl(a, u);
      switch (FT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          tv(e, u);
          break;
        case "select":
          oc(e, u);
          break;
      }
    }
    function YT(e) {
      {
        var t = e.toLowerCase();
        return Gu.hasOwnProperty(t) && Gu[t] || null;
      }
    }
    function IT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = hl(t, a), gh(t, a), t) {
        case "dialog":
          Rn("cancel", e), Rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Rn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            Rn(Jd[y], e);
          break;
        case "source":
          Rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Rn("error", e), Rn("load", e);
          break;
        case "details":
          Rn("toggle", e);
          break;
        case "input":
          Iu(e, a), Rn("invalid", e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          Xo(e, a), Rn("invalid", e);
          break;
        case "textarea":
          ev(e, a), Rn("invalid", e);
          break;
      }
      pc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var b = g[_].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var U = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var H = a[j];
          if (j === Ps)
            typeof H == "string" ? e.textContent !== H && (a[_o] !== !0 && Ch(e.textContent, H, s, f), U = [Ps, H]) : typeof H == "number" && e.textContent !== "" + H && (a[_o] !== !0 && Ch(e.textContent, H, s, f), U = [Ps, "" + H]);
          else if (Re.hasOwnProperty(j))
            H != null && (typeof H != "function" && Sh(j, H), j === "onScroll" && Rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var pe = void 0, $e = fn(j);
            if (a[_o] !== !0) {
              if (!(j === mh || j === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === tp) {
                  var Ue = e.innerHTML, Dt = H ? H[yh] : void 0;
                  if (Dt != null) {
                    var Tt = UE(e, Dt);
                    Tt !== Ue && np(j, Ue, Tt);
                  }
                } else if (j === Vs) {
                  if (v.delete(j), zE) {
                    var L = Km(H);
                    pe = e.getAttribute("style"), L !== pe && np(j, pe, L);
                  }
                } else if (p)
                  v.delete(j.toLowerCase()), pe = si(e, j, H), H !== pe && np(j, pe, H);
                else if (!vn(j, $e, p) && !Zn(j, H, $e, p)) {
                  var P = !1;
                  if ($e !== null)
                    v.delete($e.attributeName), pe = Wl(e, j, H, $e);
                  else {
                    var N = i;
                    if (N === Ja && (N = Zf(t)), N === Ja)
                      v.delete(j.toLowerCase());
                    else {
                      var ee = YT(j);
                      ee !== null && ee !== j && (P = !0, v.delete(ee)), v.delete(j);
                    }
                    pe = si(e, j, H);
                  }
                  var Ce = k;
                  !Ce && H !== pe && !P && np(j, pe, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && ME(v), t) {
        case "input":
          La(e), z(e, a, !0);
          break;
        case "textarea":
          La(e), nv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Rh(e);
          break;
      }
      return U;
    }
    function QT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function _y(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function xy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function WT(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          Ym(e, a);
          return;
        case "select":
          Kf(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var qT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], jE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], GT = jE.concat(["button"]), XT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], FE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = rt({}, e || FE), i = {
          tag: t
        };
        return jE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), GT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), qT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var KT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return XT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, JT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, HE = {};
      rp = function(e, t, a) {
        a = a || FE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = KT(e, u) ? null : i, f = s ? null : JT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!HE[y]) {
            HE[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, b);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Th = "suppressHydrationWarning", bh = "$", wh = "/$", ip = "$?", lp = "$!", ZT = "style", Oy = null, Ly = null;
    function eb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case Ko: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : cc(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = cc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function tb(e, t, a) {
      {
        var i = e, u = cc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Sk(e) {
      return e;
    }
    function nb(e) {
      Oy = pr(), Ly = mT();
      var t = null;
      return Nn(!1), t;
    }
    function rb(e) {
      yT(Ly), Nn(Oy), Oy = null, Ly = null;
    }
    function ab(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = HT(e, t, a, s);
      return sp(u, y), Hy(y, t), y;
    }
    function ib(e, t) {
      e.appendChild(t);
    }
    function lb(e, t, a, i, u) {
      switch (VT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function ub(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return BT(e, t, a, i);
    }
    function Ny(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ob(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = PT(e, t);
      return sp(i, s), s;
    }
    function sb() {
      var e = window.event;
      return e === void 0 ? fr : go(e.type);
    }
    var My = typeof setTimeout == "function" ? setTimeout : void 0, cb = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, PE = typeof Promise == "function" ? Promise : void 0, fb = typeof queueMicrotask == "function" ? queueMicrotask : typeof PE < "u" ? function(e) {
      return PE.resolve(null).then(e).catch(db);
    } : My;
    function db(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pb(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function vb(e, t, a, i, u, s) {
      $T(e, t, a, i, u), Hy(e, u);
    }
    function VE(e) {
      vl(e, "");
    }
    function hb(e, t, a) {
      e.nodeValue = a;
    }
    function mb(e, t) {
      e.appendChild(t);
    }
    function yb(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Rh(a);
    }
    function gb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Sb(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Eb(e, t) {
      e.removeChild(t);
    }
    function Cb(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === An) {
          var s = u.data;
          if (s === wh)
            if (i === 0) {
              e.removeChild(u), kr(t);
              return;
            } else
              i--;
          else (s === bh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      kr(t);
    }
    function Rb(e, t) {
      e.nodeType === An ? Uy(e.parentNode, t) : e.nodeType === Xr && Uy(e, t), kr(e);
    }
    function Tb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function bb(e) {
      e.nodeValue = "";
    }
    function wb(e, t) {
      e = e;
      var a = t[ZT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function _b(e, t) {
      e.nodeValue = t;
    }
    function xb(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function kb(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Db(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function Ob(e) {
      return e.nodeType !== An ? null : e;
    }
    function BE(e) {
      return e.data === ip;
    }
    function Ay(e) {
      return e.data === lp;
    }
    function Lb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Nb(e, t) {
      e._reactRetry = t;
    }
    function _h(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Bi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === bh || a === lp || a === ip)
            break;
          if (a === wh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return _h(e.nextSibling);
    }
    function Mb(e) {
      return _h(e.firstChild);
    }
    function zb(e) {
      return _h(e.firstChild);
    }
    function Ub(e) {
      return _h(e.nextSibling);
    }
    function Ab(e, t, a, i, u, s, f) {
      sp(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & yt) !== Fe;
      return IT(e, t, a, p, i, y, f);
    }
    function jb(e, t, a, i) {
      return sp(a, e), a.mode & yt, QT(e, t);
    }
    function Fb(e, t) {
      sp(t, e);
    }
    function Hb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === wh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === bh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function $E(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === bh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === wh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Pb(e) {
      kr(e);
    }
    function Vb(e) {
      kr(e);
    }
    function Bb(e) {
      return e !== "head" && e !== "body";
    }
    function $b(e, t, a, i) {
      var u = !0;
      Ch(t.nodeValue, a, i, u);
    }
    function Yb(e, t, a, i, u, s) {
      if (t[Th] !== !0) {
        var f = !0;
        Ch(i.nodeValue, u, s, f);
      }
    }
    function Ib(e, t) {
      t.nodeType === Xr ? _y(e, t) : t.nodeType === An || xy(e, t);
    }
    function Qb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? _y(a, t) : t.nodeType === An || xy(a, t));
      }
    }
    function Wb(e, t, a, i, u) {
      (u || t[Th] !== !0) && (i.nodeType === Xr ? _y(a, i) : i.nodeType === An || xy(a, i));
    }
    function qb(e, t, a) {
      ky(e, t);
    }
    function Gb(e, t) {
      Dy(e, t);
    }
    function Xb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && ky(i, t);
      }
    }
    function Kb(e, t) {
      {
        var a = e.parentNode;
        a !== null && Dy(a, t);
      }
    }
    function Jb(e, t, a, i, u, s) {
      (s || t[Th] !== !0) && ky(a, i);
    }
    function Zb(e, t, a, i, u) {
      (u || t[Th] !== !0) && Dy(a, i);
    }
    function ew(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function tw(e) {
      Zd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, jy = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, Fy = "__reactEvents$" + Rf, nw = "__reactListeners$" + Rf, rw = "__reactHandles$" + Rf;
    function aw(e) {
      delete e[Tf], delete e[jy], delete e[Fy], delete e[nw], delete e[rw];
    }
    function sp(e, t) {
      t[Tf] = e;
    }
    function xh(e, t) {
      t[op] = e;
    }
    function YE(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Bs(e) {
      var t = e[Tf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[Tf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = $E(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = $E(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xo(e) {
      var t = e[Tf] || e[op];
      return t && (t.tag === $ || t.tag === oe || t.tag === Oe || t.tag === B) ? t : null;
    }
    function bf(e) {
      if (e.tag === $ || e.tag === oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function kh(e) {
      return e[jy] || null;
    }
    function Hy(e, t) {
      e[jy] = t;
    }
    function iw(e) {
      var t = e[Fy];
      return t === void 0 && (t = e[Fy] = /* @__PURE__ */ new Set()), t;
    }
    var IE = {}, QE = qe.ReactDebugCurrentFrame;
    function Dh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        QE.setExtraStackFrame(a);
      } else
        QE.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
      {
        var s = Function.call.bind(Gn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Dh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Dh(null)), p instanceof Error && !(p.message in IE) && (IE[p.message] = !0, Dh(u), S("Failed %s type: %s", a, p.message), Dh(null));
          }
      }
    }
    var Py = [], Oh;
    Oh = [];
    var _u = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (_u < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Oh[_u] && S("Unexpected Fiber popped."), e.current = Py[_u], Py[_u] = null, Oh[_u] = null, _u--;
    }
    function la(e, t, a) {
      _u++, Py[_u] = e.current, Oh[_u] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var li = {};
    Object.freeze(li);
    var xu = ko(li), Ul = ko(!1), By = li;
    function wf(e, t, a) {
      return a && Al(t) ? By : xu.current;
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function _f(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Je(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && WE(e, t, s), s;
      }
    }
    function Lh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Nh(e) {
      ia(Ul, e), ia(xu, e);
    }
    function $y(e) {
      ia(Ul, e), ia(xu, e);
    }
    function qE(e, t, a) {
      {
        if (xu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(xu, t, e), la(Ul, a, e);
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Je(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Je(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Je(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return rt({}, a, f);
      }
    }
    function Mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return By = xu.current, la(xu, a, e), la(Ul, Ul.current, e), !0;
      }
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = GE(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Ul, e), ia(xu, e), la(xu, u, e), la(Ul, a, e);
        } else
          ia(Ul, e), la(Ul, a, e);
      }
    }
    function lw(e) {
      {
        if (!Ov(e) || e.tag !== te)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case B:
              return t.stateNode.context;
            case te: {
              var a = t.type;
              if (Al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Do = 0, zh = 1, ku = null, Yy = !1, Iy = !1;
    function KE(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function uw(e) {
      Yy = !0, KE(e);
    }
    function JE() {
      Yy && Oo();
    }
    function Oo() {
      if (!Iy && ku !== null) {
        Iy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = ku;
          for (Qn(ra); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Yy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), vd(Qi, Oo), s;
        } finally {
          Qn(t), Iy = !1;
        }
      }
      return null;
    }
    var xf = [], kf = 0, Uh = null, Ah = 0, bi = [], wi = 0, $s = null, Du = 1, Ou = "";
    function ow(e) {
      return Is(), (e.flags & fs) !== je;
    }
    function sw(e) {
      return Is(), Ah;
    }
    function cw() {
      var e = Ou, t = Du, a = t & ~fw(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Is(), xf[kf++] = Ah, xf[kf++] = Uh, Uh = e, Ah = t;
    }
    function ZE(e, t, a) {
      Is(), bi[wi++] = Du, bi[wi++] = Ou, bi[wi++] = $s, $s = e;
      var i = Du, u = Ou, s = jh(i) - 1, f = i & ~(1 << s), p = a + 1, v = jh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), b = f >> y, U = s - y, j = jh(t) + U, H = p << U, pe = H | b, $e = _ + u;
        Du = 1 << j | pe, Ou = $e;
      } else {
        var Ue = p << s, Dt = Ue | f, Tt = u;
        Du = 1 << v | Dt, Ou = Tt;
      }
    }
    function Qy(e) {
      Is();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ys(e, a), ZE(e, a, i);
      }
    }
    function jh(e) {
      return 32 - In(e);
    }
    function fw(e) {
      return 1 << jh(e) - 1;
    }
    function Wy(e) {
      for (; e === Uh; )
        Uh = xf[--kf], xf[kf] = null, Ah = xf[--kf], xf[kf] = null;
      for (; e === $s; )
        $s = bi[--wi], bi[wi] = null, Ou = bi[--wi], bi[wi] = null, Du = bi[--wi], bi[wi] = null;
    }
    function dw() {
      return Is(), $s !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function pw(e, t) {
      Is(), bi[wi++] = Du, bi[wi++] = Ou, bi[wi++] = $s, Du = t.id, Ou = t.overflow, $s = e;
    }
    function Is() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, _i = null, Ji = !1, Qs = !1, Lo = null;
    function vw() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function eC() {
      Qs = !0;
    }
    function hw() {
      return Qs;
    }
    function mw(e) {
      var t = e.stateNode.containerInfo;
      return _i = zb(t), Ar = e, Ji = !0, Lo = null, Qs = !1, !0;
    }
    function yw(e, t, a) {
      return _i = Ub(t), Ar = e, Ji = !0, Lo = null, Qs = !1, a !== null && pw(e, a), !0;
    }
    function tC(e, t) {
      switch (e.tag) {
        case B: {
          Ib(e.stateNode.containerInfo, t);
          break;
        }
        case $: {
          var a = (e.mode & yt) !== Fe;
          Wb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Oe: {
          var i = e.memoizedState;
          i.dehydrated !== null && Qb(i.dehydrated, t);
          break;
        }
      }
    }
    function nC(e, t) {
      tC(e, t);
      var a = Cx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Kr) : i.push(a);
    }
    function qy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case B: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case $:
                var i = t.type;
                t.pendingProps, qb(a, i);
                break;
              case oe:
                var u = t.pendingProps;
                Gb(a, u);
                break;
            }
            break;
          }
          case $: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case $: {
                var v = t.type, y = t.pendingProps, g = (e.mode & yt) !== Fe;
                Jb(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case oe: {
                var _ = t.pendingProps, b = (e.mode & yt) !== Fe;
                Zb(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case Oe: {
            var U = e.memoizedState, j = U.dehydrated;
            if (j !== null) switch (t.tag) {
              case $:
                var H = t.type;
                t.pendingProps, Xb(j, H);
                break;
              case oe:
                var pe = t.pendingProps;
                Kb(j, pe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function rC(e, t) {
      t.flags = t.flags & -4097 | jn, qy(e, t);
    }
    function aC(e, t) {
      switch (e.tag) {
        case $: {
          var a = e.type;
          e.pendingProps;
          var i = kb(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, _i = Mb(i), !0) : !1;
        }
        case oe: {
          var u = e.pendingProps, s = Db(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, _i = null, !0) : !1;
        }
        case Oe: {
          var f = Ob(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: dw(),
              retryLane: ya
            };
            e.memoizedState = p;
            var v = Rx(f);
            return v.return = e, e.child = v, Ar = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gy(e) {
      return (e.mode & yt) !== Fe && (e.flags & mt) === je;
    }
    function Xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ky(e) {
      if (Ji) {
        var t = _i;
        if (!t) {
          Gy(e) && (qy(Ar, e), Xy()), rC(Ar, e), Ji = !1, Ar = e;
          return;
        }
        var a = t;
        if (!aC(e, t)) {
          Gy(e) && (qy(Ar, e), Xy()), t = up(a);
          var i = Ar;
          if (!t || !aC(e, t)) {
            rC(Ar, e), Ji = !1, Ar = e;
            return;
          }
          nC(i, a);
        }
      }
    }
    function gw(e, t, a) {
      var i = e.stateNode, u = !Qs, s = Ab(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Sw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jb(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case B: {
              var s = u.stateNode.containerInfo, f = (u.mode & yt) !== Fe;
              $b(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case $: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & yt) !== Fe;
              Yb(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Ew(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Fb(a, e);
    }
    function Cw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Hb(a);
    }
    function iC(e) {
      for (var t = e.return; t !== null && t.tag !== $ && t.tag !== B && t.tag !== Oe; )
        t = t.return;
      Ar = t;
    }
    function Fh(e) {
      if (e !== Ar)
        return !1;
      if (!Ji)
        return iC(e), Ji = !0, !1;
      if (e.tag !== B && (e.tag !== $ || Bb(e.type) && !Ny(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (Gy(e))
            lC(e), Xy();
          else
            for (; t; )
              nC(e, t), t = up(t);
      }
      return iC(e), e.tag === Oe ? _i = Cw(e) : _i = Ar ? up(e.stateNode) : null, !0;
    }
    function Rw() {
      return Ji && _i !== null;
    }
    function lC(e) {
      for (var t = _i; t; )
        tC(e, t), t = up(t);
    }
    function Df() {
      Ar = null, _i = null, Ji = !1, Qs = !1;
    }
    function uC() {
      Lo !== null && (eR(Lo), Lo = null);
    }
    function jr() {
      return Ji;
    }
    function Jy(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var Tw = qe.ReactCurrentBatchConfig, bw = null;
    function ww() {
      return Tw.transition;
    }
    var Zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var _w = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & at && (t = a), a = a.return;
        return t;
      }, Ws = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], qs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        qs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & at && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & at && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & at && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(b) {
          e.add(Je(b) || "Component"), qs.add(b.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          t.add(Je(b) || "Component"), qs.add(b.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          a.add(Je(b) || "Component"), qs.add(b.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          i.add(Je(b) || "Component"), qs.add(b.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          u.add(Je(b) || "Component"), qs.add(b.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(b) {
          s.add(Je(b) || "Component"), qs.add(b.type);
        }), mp = []), t.size > 0) {
          var f = Ws(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ws(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ws(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ws(e);
          Ae(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ws(a);
          Ae(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Ws(u);
          Ae(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Hh = /* @__PURE__ */ new Map(), oC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = _w(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!oC.has(e.type)) {
          var i = Hh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Hh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Hh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Je(s) || "Component"), oC.add(s.type);
            });
            var u = Ws(i);
            try {
              Kt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              bn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Hh = /* @__PURE__ */ new Map();
      };
    }
    var Zy, eg, tg, ng, rg, sC = function(e, t) {
    };
    Zy = !1, eg = !1, tg = {}, ng = {}, rg = {}, sC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Je(t) || "Component";
        ng[a] || (ng[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & at || G) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== te) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Je(e) || "Component";
          tg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== te)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          qa(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var b = v.refs;
            _ === null ? delete b[y] : b[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Ph(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Vh(e) {
      {
        var t = Je(e) || "Component";
        if (rg[t])
          return;
        rg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function cC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function fC(e) {
      function t(L, P) {
        if (e) {
          var N = L.deletions;
          N === null ? (L.deletions = [P], L.flags |= Kr) : N.push(P);
        }
      }
      function a(L, P) {
        if (!e)
          return null;
        for (var N = P; N !== null; )
          t(L, N), N = N.sibling;
        return null;
      }
      function i(L, P) {
        for (var N = /* @__PURE__ */ new Map(), ee = P; ee !== null; )
          ee.key !== null ? N.set(ee.key, ee) : N.set(ee.index, ee), ee = ee.sibling;
        return N;
      }
      function u(L, P) {
        var N = rc(L, P);
        return N.index = 0, N.sibling = null, N;
      }
      function s(L, P, N) {
        if (L.index = N, !e)
          return L.flags |= fs, P;
        var ee = L.alternate;
        if (ee !== null) {
          var Ce = ee.index;
          return Ce < P ? (L.flags |= jn, P) : Ce;
        } else
          return L.flags |= jn, P;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= jn), L;
      }
      function p(L, P, N, ee) {
        if (P === null || P.tag !== oe) {
          var Ce = JS(N, L.mode, ee);
          return Ce.return = L, Ce;
        } else {
          var he = u(P, N);
          return he.return = L, he;
        }
      }
      function v(L, P, N, ee) {
        var Ce = N.type;
        if (Ce === Qr)
          return g(L, P, N.props.children, ee, N.key);
        if (P !== null && (P.elementType === Ce || // Keep this check inline so it only runs on the false path:
        mR(P, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === et && cC(Ce) === P.type)) {
          var he = u(P, N.props);
          return he.ref = yp(L, P, N), he.return = L, he._debugSource = N._source, he._debugOwner = N._owner, he;
        }
        var Xe = KS(N, L.mode, ee);
        return Xe.ref = yp(L, P, N), Xe.return = L, Xe;
      }
      function y(L, P, N, ee) {
        if (P === null || P.tag !== W || P.stateNode.containerInfo !== N.containerInfo || P.stateNode.implementation !== N.implementation) {
          var Ce = ZS(N, L.mode, ee);
          return Ce.return = L, Ce;
        } else {
          var he = u(P, N.children || []);
          return he.return = L, he;
        }
      }
      function g(L, P, N, ee, Ce) {
        if (P === null || P.tag !== ue) {
          var he = Bo(N, L.mode, ee, Ce);
          return he.return = L, he;
        } else {
          var Xe = u(P, N);
          return Xe.return = L, Xe;
        }
      }
      function _(L, P, N) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var ee = JS("" + P, L.mode, N);
          return ee.return = L, ee;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case or: {
              var Ce = KS(P, L.mode, N);
              return Ce.ref = yp(L, null, P), Ce.return = L, Ce;
            }
            case va: {
              var he = ZS(P, L.mode, N);
              return he.return = L, he;
            }
            case et: {
              var Xe = P._payload, nt = P._init;
              return _(L, nt(Xe), N);
            }
          }
          if (lt(P) || Sn(P)) {
            var rn = Bo(P, L.mode, N, null);
            return rn.return = L, rn;
          }
          Ph(L, P);
        }
        return typeof P == "function" && Vh(L), null;
      }
      function b(L, P, N, ee) {
        var Ce = P !== null ? P.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return Ce !== null ? null : p(L, P, "" + N, ee);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case or:
              return N.key === Ce ? v(L, P, N, ee) : null;
            case va:
              return N.key === Ce ? y(L, P, N, ee) : null;
            case et: {
              var he = N._payload, Xe = N._init;
              return b(L, P, Xe(he), ee);
            }
          }
          if (lt(N) || Sn(N))
            return Ce !== null ? null : g(L, P, N, ee, null);
          Ph(L, N);
        }
        return typeof N == "function" && Vh(L), null;
      }
      function U(L, P, N, ee, Ce) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var he = L.get(N) || null;
          return p(P, he, "" + ee, Ce);
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case or: {
              var Xe = L.get(ee.key === null ? N : ee.key) || null;
              return v(P, Xe, ee, Ce);
            }
            case va: {
              var nt = L.get(ee.key === null ? N : ee.key) || null;
              return y(P, nt, ee, Ce);
            }
            case et:
              var rn = ee._payload, At = ee._init;
              return U(L, P, N, At(rn), Ce);
          }
          if (lt(ee) || Sn(ee)) {
            var qn = L.get(N) || null;
            return g(P, qn, ee, Ce, null);
          }
          Ph(P, ee);
        }
        return typeof ee == "function" && Vh(P), null;
      }
      function j(L, P, N) {
        {
          if (typeof L != "object" || L === null)
            return P;
          switch (L.$$typeof) {
            case or:
            case va:
              sC(L, N);
              var ee = L.key;
              if (typeof ee != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(ee);
                break;
              }
              if (!P.has(ee)) {
                P.add(ee);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ee);
              break;
            case et:
              var Ce = L._payload, he = L._init;
              j(he(Ce), P, N);
              break;
          }
        }
        return P;
      }
      function H(L, P, N, ee) {
        for (var Ce = null, he = 0; he < N.length; he++) {
          var Xe = N[he];
          Ce = j(Xe, Ce, L);
        }
        for (var nt = null, rn = null, At = P, qn = 0, jt = 0, $n = null; At !== null && jt < N.length; jt++) {
          At.index > jt ? ($n = At, At = null) : $n = At.sibling;
          var oa = b(L, At, N[jt], ee);
          if (oa === null) {
            At === null && (At = $n);
            break;
          }
          e && At && oa.alternate === null && t(L, At), qn = s(oa, qn, jt), rn === null ? nt = oa : rn.sibling = oa, rn = oa, At = $n;
        }
        if (jt === N.length) {
          if (a(L, At), jr()) {
            var Yr = jt;
            Ys(L, Yr);
          }
          return nt;
        }
        if (At === null) {
          for (; jt < N.length; jt++) {
            var oi = _(L, N[jt], ee);
            oi !== null && (qn = s(oi, qn, jt), rn === null ? nt = oi : rn.sibling = oi, rn = oi);
          }
          if (jr()) {
            var wa = jt;
            Ys(L, wa);
          }
          return nt;
        }
        for (var _a = i(L, At); jt < N.length; jt++) {
          var sa = U(_a, L, jt, N[jt], ee);
          sa !== null && (e && sa.alternate !== null && _a.delete(sa.key === null ? jt : sa.key), qn = s(sa, qn, jt), rn === null ? nt = sa : rn.sibling = sa, rn = sa);
        }
        if (e && _a.forEach(function(qf) {
          return t(L, qf);
        }), jr()) {
          var ju = jt;
          Ys(L, ju);
        }
        return nt;
      }
      function pe(L, P, N, ee) {
        var Ce = Sn(N);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (eg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), N.entries === Ce && (Zy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zy = !0);
          var he = Ce.call(N);
          if (he)
            for (var Xe = null, nt = he.next(); !nt.done; nt = he.next()) {
              var rn = nt.value;
              Xe = j(rn, Xe, L);
            }
        }
        var At = Ce.call(N);
        if (At == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, jt = null, $n = P, oa = 0, Yr = 0, oi = null, wa = At.next(); $n !== null && !wa.done; Yr++, wa = At.next()) {
          $n.index > Yr ? (oi = $n, $n = null) : oi = $n.sibling;
          var _a = b(L, $n, wa.value, ee);
          if (_a === null) {
            $n === null && ($n = oi);
            break;
          }
          e && $n && _a.alternate === null && t(L, $n), oa = s(_a, oa, Yr), jt === null ? qn = _a : jt.sibling = _a, jt = _a, $n = oi;
        }
        if (wa.done) {
          if (a(L, $n), jr()) {
            var sa = Yr;
            Ys(L, sa);
          }
          return qn;
        }
        if ($n === null) {
          for (; !wa.done; Yr++, wa = At.next()) {
            var ju = _(L, wa.value, ee);
            ju !== null && (oa = s(ju, oa, Yr), jt === null ? qn = ju : jt.sibling = ju, jt = ju);
          }
          if (jr()) {
            var qf = Yr;
            Ys(L, qf);
          }
          return qn;
        }
        for (var Gp = i(L, $n); !wa.done; Yr++, wa = At.next()) {
          var Yl = U(Gp, L, Yr, wa.value, ee);
          Yl !== null && (e && Yl.alternate !== null && Gp.delete(Yl.key === null ? Yr : Yl.key), oa = s(Yl, oa, Yr), jt === null ? qn = Yl : jt.sibling = Yl, jt = Yl);
        }
        if (e && Gp.forEach(function(Zx) {
          return t(L, Zx);
        }), jr()) {
          var Jx = Yr;
          Ys(L, Jx);
        }
        return qn;
      }
      function $e(L, P, N, ee) {
        if (P !== null && P.tag === oe) {
          a(L, P.sibling);
          var Ce = u(P, N);
          return Ce.return = L, Ce;
        }
        a(L, P);
        var he = JS(N, L.mode, ee);
        return he.return = L, he;
      }
      function Ue(L, P, N, ee) {
        for (var Ce = N.key, he = P; he !== null; ) {
          if (he.key === Ce) {
            var Xe = N.type;
            if (Xe === Qr) {
              if (he.tag === ue) {
                a(L, he.sibling);
                var nt = u(he, N.props.children);
                return nt.return = L, nt._debugSource = N._source, nt._debugOwner = N._owner, nt;
              }
            } else if (he.elementType === Xe || // Keep this check inline so it only runs on the false path:
            mR(he, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Xe == "object" && Xe !== null && Xe.$$typeof === et && cC(Xe) === he.type) {
              a(L, he.sibling);
              var rn = u(he, N.props);
              return rn.ref = yp(L, he, N), rn.return = L, rn._debugSource = N._source, rn._debugOwner = N._owner, rn;
            }
            a(L, he);
            break;
          } else
            t(L, he);
          he = he.sibling;
        }
        if (N.type === Qr) {
          var At = Bo(N.props.children, L.mode, ee, N.key);
          return At.return = L, At;
        } else {
          var qn = KS(N, L.mode, ee);
          return qn.ref = yp(L, P, N), qn.return = L, qn;
        }
      }
      function Dt(L, P, N, ee) {
        for (var Ce = N.key, he = P; he !== null; ) {
          if (he.key === Ce)
            if (he.tag === W && he.stateNode.containerInfo === N.containerInfo && he.stateNode.implementation === N.implementation) {
              a(L, he.sibling);
              var Xe = u(he, N.children || []);
              return Xe.return = L, Xe;
            } else {
              a(L, he);
              break;
            }
          else
            t(L, he);
          he = he.sibling;
        }
        var nt = ZS(N, L.mode, ee);
        return nt.return = L, nt;
      }
      function Tt(L, P, N, ee) {
        var Ce = typeof N == "object" && N !== null && N.type === Qr && N.key === null;
        if (Ce && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case or:
              return f(Ue(L, P, N, ee));
            case va:
              return f(Dt(L, P, N, ee));
            case et:
              var he = N._payload, Xe = N._init;
              return Tt(L, P, Xe(he), ee);
          }
          if (lt(N))
            return H(L, P, N, ee);
          if (Sn(N))
            return pe(L, P, N, ee);
          Ph(L, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f($e(L, P, "" + N, ee)) : (typeof N == "function" && Vh(L), a(L, P));
      }
      return Tt;
    }
    var Of = fC(!0), dC = fC(!1);
    function kw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = rc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = rc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Dw(e, t) {
      for (var a = e.child; a !== null; )
        mx(a, t), a = a.sibling;
    }
    var ag = ko(null), ig;
    ig = {};
    var Bh = null, Lf = null, lg = null, $h = !1;
    function Yh() {
      Bh = null, Lf = null, lg = null, $h = !1;
    }
    function pC() {
      $h = !0;
    }
    function vC() {
      $h = !1;
    }
    function hC(e, t, a) {
      la(ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ig && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ig;
    }
    function ug(e, t) {
      var a = ag.current;
      ia(ag, t), e._currentValue = a;
    }
    function og(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = ut(u.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), u !== null && (u.childLanes = ut(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ow(e, t, a) {
      Lw(e, t, a);
    }
    function Lw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === te) {
                var p = rr(a), v = Lu(qt, p);
                v.tag = Qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = ut(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = ut(b.lanes, a)), og(i.return, a, e), s.lanes = ut(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ot)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === an) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = ut(U.lanes, a);
          var j = U.alternate;
          j !== null && (j.lanes = ut(j.lanes, a)), og(U, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Nf(e, t) {
      Bh = e, Lf = null, lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function lr(e) {
      $h && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (lg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Lf === null) {
          if (Bh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Lf = a, Bh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var Gs = null;
    function sg(e) {
      Gs === null ? Gs = [e] : Gs.push(e);
    }
    function Nw() {
      if (Gs !== null) {
        for (var e = 0; e < Gs.length; e++) {
          var t = Gs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Gs = null;
      }
    }
    function mC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Mw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function zw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Ba(e, t) {
      return Ih(e, t);
    }
    var Uw = Ih;
    function Ih(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (jn | Hn)) !== je && dR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ut(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (u.flags & (jn | Hn)) !== je && dR(e), i = u, u = u.return;
      if (i.tag === B) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yC = 0, gC = 1, Qh = 2, cg = 3, Wh = !1, fg, qh;
    fg = !1, qh = null;
    function dg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (qh === u && !fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), M1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Uw(e, a);
      } else
        return zw(e, u, t, a);
    }
    function Gh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = Gc(s, e.pendingLanes);
          var f = ut(s, a);
          u.lanes = f, xs(e, f);
        }
      }
    }
    function pg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Aw(e, t, a, i, u, s) {
      switch (a.tag) {
        case gC: {
          var f = a.payload;
          if (typeof f == "function") {
            pC();
            var p = f.call(s, i, u);
            {
              if (e.mode & at) {
                Wt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Wt(!1);
                }
              }
              vC();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & -65537 | mt;
        case yC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pC(), y = v.call(s, i, u);
            {
              if (e.mode & at) {
                Wt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Wt(!1);
                }
              }
              vC();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case Qh:
          return Wh = !0, i;
      }
      return i;
    }
    function Xh(e, t, a, i) {
      var u = e.updateQueue;
      Wh = !1, qh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, b = _.lastBaseUpdate;
          b !== f && (b === null ? _.firstBaseUpdate = y : b.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = u.baseState, j = Y, H = null, pe = null, $e = null, Ue = s;
        do {
          var Dt = Ue.lane, Tt = Ue.eventTime;
          if (hu(i, Dt)) {
            if ($e !== null) {
              var P = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                tag: Ue.tag,
                payload: Ue.payload,
                callback: Ue.callback,
                next: null
              };
              $e = $e.next = P;
            }
            U = Aw(e, u, Ue, U, t, a);
            var N = Ue.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ue.lane !== Vn) {
              e.flags |= un;
              var ee = u.effects;
              ee === null ? u.effects = [Ue] : ee.push(Ue);
            }
          } else {
            var L = {
              eventTime: Tt,
              lane: Dt,
              tag: Ue.tag,
              payload: Ue.payload,
              callback: Ue.callback,
              next: null
            };
            $e === null ? (pe = $e = L, H = U) : $e = $e.next = L, j = ut(j, Dt);
          }
          if (Ue = Ue.next, Ue === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Ce = p, he = Ce.next;
            Ce.next = null, Ue = he, u.lastBaseUpdate = Ce, u.shared.pending = null;
          }
        } while (!0);
        $e === null && (H = U), u.baseState = H, u.firstBaseUpdate = pe, u.lastBaseUpdate = $e;
        var Xe = u.shared.interleaved;
        if (Xe !== null) {
          var nt = Xe;
          do
            j = ut(j, nt.lane), nt = nt.next;
          while (nt !== Xe);
        } else s === null && (u.shared.lanes = Y);
        Yp(j), e.lanes = j, e.memoizedState = U;
      }
      qh = null;
    }
    function jw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EC() {
      Wh = !1;
    }
    function Kh() {
      return Wh;
    }
    function CC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, jw(f, a));
        }
    }
    var gp = {}, Mo = ko(gp), Sp = ko(gp), Jh = ko(gp);
    function Zh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function RC() {
      var e = Zh(Jh.current);
      return e;
    }
    function vg(e, t) {
      la(Jh, t, e), la(Sp, e, e), la(Mo, gp, e);
      var a = eb(t);
      ia(Mo, e), la(Mo, a, e);
    }
    function Mf(e) {
      ia(Mo, e), ia(Sp, e), ia(Jh, e);
    }
    function hg() {
      var e = Zh(Mo.current);
      return e;
    }
    function TC(e) {
      Zh(Jh.current);
      var t = Zh(Mo.current), a = tb(t, e.type);
      t !== a && (la(Sp, e, e), la(Mo, a, e));
    }
    function mg(e) {
      Sp.current === e && (ia(Mo, e), ia(Sp, e));
    }
    var Fw = 0, bC = 1, wC = 1, Ep = 2, el = ko(Fw);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & bC;
    }
    function gg(e, t) {
      return e & bC | t;
    }
    function Hw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      la(el, t, e);
    }
    function Uf(e) {
      ia(el, e);
    }
    function Pw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || BE(i) || Ay(i))
              return t;
          }
        } else if (t.tag === $t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & mt) !== je;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var $a = (
      /*   */
      0
    ), vr = (
      /* */
      1
    ), jl = (
      /*  */
      2
    ), hr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Sg = [];
    function Eg() {
      for (var e = 0; e < Sg.length; e++) {
        var t = Sg[e];
        t._workInProgressVersionPrimary = null;
      }
      Sg.length = 0;
    }
    function Vw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Se = qe.ReactCurrentDispatcher, Cp = qe.ReactCurrentBatchConfig, Cg, Af;
    Cg = /* @__PURE__ */ new Set();
    var Xs = Y, nn = null, mr = null, yr = null, tm = !1, Rp = !1, Tp = 0, Bw = 0, $w = 25, I = null, xi = null, Uo = -1, Rg = !1;
    function Qt() {
      {
        var e = I;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function se() {
      {
        var e = I;
        xi !== null && (Uo++, xi[Uo] !== e && Yw(e));
      }
    }
    function jf(e) {
      e != null && !lt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", I, typeof e);
    }
    function Yw(e) {
      {
        var t = Je(nn);
        if (!Cg.has(t) && (Cg.add(t), xi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uo; u++) {
            for (var s = xi[u], f = u === Uo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ua() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Tg(e, t) {
      if (Rg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", I), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, I, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Xs = s, nn = t, xi = e !== null ? e._debugHookTypes : null, Uo = -1, Rg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? Se.current = WC : xi !== null ? Se.current = QC : Se.current = IC;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= $w)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Rg = !1, mr = null, yr = null, t.updateQueue = null, Uo = -1, Se.current = qC, f = a(i, u);
        } while (Rp);
      }
      Se.current = vm, t._debugHookTypes = xi;
      var v = mr !== null && mr.next !== null;
      if (Xs = Y, nn = null, mr = null, yr = null, I = null, xi = null, Uo = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & yt) !== Fe && S("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function _C(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & tn) !== Fe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = _s(e.lanes, a);
    }
    function xC() {
      if (Se.current = vm, tm) {
        for (var e = nn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      Xs = Y, nn = null, mr = null, yr = null, xi = null, Uo = -1, I = null, PC = !1, Rp = !1, Tp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return yr === null ? nn.memoizedState = yr = e : yr = yr.next = e, yr;
    }
    function ki() {
      var e;
      if (mr === null) {
        var t = nn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = mr.next;
      var a;
      if (yr === null ? a = nn.memoizedState : a = yr.next, a !== null)
        yr = a, a = yr.next, mr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        mr = e;
        var i = {
          memoizedState: mr.memoizedState,
          baseState: mr.baseState,
          baseQueue: mr.baseQueue,
          queue: mr.queue,
          next: null
        };
        yr === null ? nn.memoizedState = yr = i : yr = yr.next = i;
      }
      return yr;
    }
    function kC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function bg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function wg(e, t, a) {
      var i = Fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = qw.bind(null, nn, s);
      return [i.memoizedState, f];
    }
    function _g(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = mr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, b = null, U = null, j = null, H = g;
        do {
          var pe = H.lane;
          if (hu(Xs, pe)) {
            if (j !== null) {
              var Ue = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              j = j.next = Ue;
            }
            if (H.hasEagerState)
              _ = H.eagerState;
            else {
              var Dt = H.action;
              _ = e(_, Dt);
            }
          } else {
            var $e = {
              lane: pe,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            j === null ? (U = j = $e, b = _) : j = j.next = $e, nn.lanes = ut(nn.lanes, pe), Yp(pe);
          }
          H = H.next;
        } while (H !== null && H !== g);
        j === null ? b = _ : j.next = U, xe(_, i.memoizedState) || Np(), i.memoizedState = _, i.baseState = b, i.baseQueue = j, u.lastRenderedState = _;
      }
      var Tt = u.interleaved;
      if (Tt !== null) {
        var L = Tt;
        do {
          var P = L.lane;
          nn.lanes = ut(nn.lanes, P), Yp(P), L = L.next;
        } while (L !== Tt);
      } else f === null && (u.lanes = Y);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function xg(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        xe(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Ek(e, t, a) {
    }
    function Ck(e, t, a) {
    }
    function kg(e, t, a) {
      var i = nn, u = Fl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          xe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, Xs) || DC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, lm(LC.bind(null, i, y, e), [e]), i.flags |= ha, bp(vr | Fr, OC.bind(null, i, y, s, t), void 0, null), s;
    }
    function nm(e, t, a) {
      var i = nn, u = ki(), s = t();
      if (!Af) {
        var f = t();
        xe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !xe(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (_p(LC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      yr !== null && yr.memoizedState.tag & vr) {
        i.flags |= ha, bp(vr | Fr, OC.bind(null, i, y, s, t), void 0, null);
        var g = Mm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, Xs) || DC(i, t, s);
      }
      return s;
    }
    function DC(e, t, a) {
      e.flags |= Tc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = nn.updateQueue;
      if (u === null)
        u = kC(), nn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function OC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, NC(t) && MC(e);
    }
    function LC(e, t, a) {
      var i = function() {
        NC(t) && MC(e);
      };
      return a(i);
    }
    function NC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xe(a, i);
      } catch {
        return !0;
      }
    }
    function MC(e) {
      var t = Ba(e, We);
      t !== null && Cr(t, e, We, qt);
    }
    function rm(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Gw.bind(null, nn, a);
      return [t.memoizedState, i];
    }
    function Dg(e) {
      return _g(bg);
    }
    function Og(e) {
      return xg(bg);
    }
    function bp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = nn.updateQueue;
      if (s === null)
        s = kC(), nn.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Lg(e) {
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function am(e) {
      var t = ki();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      nn.flags |= e, u.memoizedState = bp(vr | t, a, void 0, s);
    }
    function im(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (mr !== null) {
        var p = mr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Tg(s, v)) {
            u.memoizedState = bp(t, a, f, s);
            return;
          }
        }
      }
      nn.flags |= e, u.memoizedState = bp(vr | t, a, f, s);
    }
    function lm(e, t) {
      return (nn.mode & tn) !== Fe ? wp(gl | ha | fd, Fr, e, t) : wp(ha | fd, Fr, e, t);
    }
    function _p(e, t) {
      return im(ha, Fr, e, t);
    }
    function Ng(e, t) {
      return wp(Ct, jl, e, t);
    }
    function um(e, t) {
      return im(Ct, jl, e, t);
    }
    function Mg(e, t) {
      var a = Ct;
      return a |= yl, (nn.mode & tn) !== Fe && (a |= Mr), wp(a, hr, e, t);
    }
    function om(e, t) {
      return im(Ct, hr, e, t);
    }
    function zC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function zg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= yl, (nn.mode & tn) !== Fe && (u |= Mr), wp(u, hr, zC.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(Ct, hr, zC.bind(null, t, e), i);
    }
    function Iw(e, t) {
    }
    var cm = Iw;
    function Ug(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ag(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function dm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function jg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function UC(e) {
      var t = ki(), a = mr, i = a.memoizedState;
      return jC(t, i, e);
    }
    function AC(e) {
      var t = ki();
      if (mr === null)
        return t.memoizedState = e, e;
      var a = mr.memoizedState;
      return jC(t, a, e);
    }
    function jC(e, t, a) {
      var i = !Od(Xs);
      if (i) {
        if (!xe(a, t)) {
          var u = Nd();
          nn.lanes = ut(nn.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function Qw(e, t, a) {
      var i = ga();
      Qn(ks(i, ja)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Qn(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ae("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Fg() {
      var e = rm(!1), t = e[0], a = e[1], i = Qw.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function FC() {
      var e = Dg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function HC() {
      var e = Og(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var PC = !1;
    function Ww() {
      return PC;
    }
    function Hg() {
      var e = Fl(), t = Mm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = cw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Bw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function qw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        BC(t, u);
      else {
        var s = mC(e, t, u, i);
        if (s !== null) {
          var f = ba();
          Cr(s, e, i, f), $C(s, t, i);
        }
      }
      YC(e, i);
    }
    function Gw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (VC(e))
        BC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Se.current, Se.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, xe(y, v)) {
                Mw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Se.current = p;
            }
          }
        }
        var g = mC(e, t, u, i);
        if (g !== null) {
          var _ = ba();
          Cr(g, e, i, _), $C(g, t, i);
        }
      }
      YC(e, i);
    }
    function VC(e) {
      var t = e.alternate;
      return e === nn || t !== null && t === nn;
    }
    function BC(e, t) {
      Rp = tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $C(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = Gc(i, e.pendingLanes);
        var u = ut(i, a);
        t.lanes = u, xs(e, u);
      }
    }
    function YC(e, t, a) {
      ys(e, t);
    }
    var vm = {
      readContext: lr,
      useCallback: ua,
      useContext: ua,
      useEffect: ua,
      useImperativeHandle: ua,
      useInsertionEffect: ua,
      useLayoutEffect: ua,
      useMemo: ua,
      useReducer: ua,
      useRef: ua,
      useState: ua,
      useDebugValue: ua,
      useDeferredValue: ua,
      useTransition: ua,
      useMutableSource: ua,
      useSyncExternalStore: ua,
      useId: ua,
      unstable_isNewReconciler: Te
    }, IC = null, QC = null, WC = null, qC = null, Hl = null, tl = null, hm = null;
    {
      var Pg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Qt(), jf(t), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Qt(), lr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Qt(), jf(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Qt(), jf(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Qt(), jf(t), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Qt(), jf(t), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Qt(), jf(t);
          var a = Se.current;
          Se.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Qt();
          var i = Se.current;
          Se.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Qt(), Lg(e);
        },
        useState: function(e) {
          I = "useState", Qt();
          var t = Se.current;
          Se.current = Hl;
          try {
            return rm(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Qt(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", Qt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Qt(), kg(e, t, a);
        },
        useId: function() {
          return I = "useId", Qt(), Hg();
        },
        unstable_isNewReconciler: Te
      }, QC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", se(), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", se(), lr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", se(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", se(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", se(), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", se(), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", se();
          var a = Se.current;
          Se.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", se();
          var i = Se.current;
          Se.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", se(), Lg(e);
        },
        useState: function(e) {
          I = "useState", se();
          var t = Se.current;
          Se.current = Hl;
          try {
            return rm(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", se(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", se(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", se(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", se(), kg(e, t, a);
        },
        useId: function() {
          return I = "useId", se(), Hg();
        },
        unstable_isNewReconciler: Te
      }, WC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", se(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", se(), lr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", se(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", se(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", se(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", se(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", se();
          var a = Se.current;
          Se.current = tl;
          try {
            return dm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", se();
          var i = Se.current;
          Se.current = tl;
          try {
            return _g(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", se(), am();
        },
        useState: function(e) {
          I = "useState", se();
          var t = Se.current;
          Se.current = tl;
          try {
            return Dg(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", se(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", se(), UC(e);
        },
        useTransition: function() {
          return I = "useTransition", se(), FC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", se(), nm(e, t);
        },
        useId: function() {
          return I = "useId", se(), pm();
        },
        unstable_isNewReconciler: Te
      }, qC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", se(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", se(), lr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", se(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", se(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", se(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", se(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", se();
          var a = Se.current;
          Se.current = hm;
          try {
            return dm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", se();
          var i = Se.current;
          Se.current = hm;
          try {
            return xg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", se(), am();
        },
        useState: function(e) {
          I = "useState", se();
          var t = Se.current;
          Se.current = hm;
          try {
            return Og(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", se(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", se(), AC(e);
        },
        useTransition: function() {
          return I = "useTransition", se(), HC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", se(), nm(e, t);
        },
        useId: function() {
          return I = "useId", se(), pm();
        },
        unstable_isNewReconciler: Te
      }, Hl = {
        readContext: function(e) {
          return Pg(), lr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", tt(), Qt(), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", tt(), Qt(), lr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", tt(), Qt(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", tt(), Qt(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", tt(), Qt(), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", tt(), Qt(), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", tt(), Qt();
          var a = Se.current;
          Se.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", tt(), Qt();
          var i = Se.current;
          Se.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", tt(), Qt(), Lg(e);
        },
        useState: function(e) {
          I = "useState", tt(), Qt();
          var t = Se.current;
          Se.current = Hl;
          try {
            return rm(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", tt(), Qt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", tt(), Qt(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", tt(), Qt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", tt(), Qt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", tt(), Qt(), kg(e, t, a);
        },
        useId: function() {
          return I = "useId", tt(), Qt(), Hg();
        },
        unstable_isNewReconciler: Te
      }, tl = {
        readContext: function(e) {
          return Pg(), lr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", tt(), se(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", tt(), se(), lr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", tt(), se(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", tt(), se(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", tt(), se(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", tt(), se(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", tt(), se();
          var a = Se.current;
          Se.current = tl;
          try {
            return dm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", tt(), se();
          var i = Se.current;
          Se.current = tl;
          try {
            return _g(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", tt(), se(), am();
        },
        useState: function(e) {
          I = "useState", tt(), se();
          var t = Se.current;
          Se.current = tl;
          try {
            return Dg(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", tt(), se(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", tt(), se(), UC(e);
        },
        useTransition: function() {
          return I = "useTransition", tt(), se(), FC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", tt(), se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", tt(), se(), nm(e, t);
        },
        useId: function() {
          return I = "useId", tt(), se(), pm();
        },
        unstable_isNewReconciler: Te
      }, hm = {
        readContext: function(e) {
          return Pg(), lr(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", tt(), se(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", tt(), se(), lr(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", tt(), se(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", tt(), se(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", tt(), se(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", tt(), se(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", tt(), se();
          var a = Se.current;
          Se.current = tl;
          try {
            return dm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", tt(), se();
          var i = Se.current;
          Se.current = tl;
          try {
            return xg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", tt(), se(), am();
        },
        useState: function(e) {
          I = "useState", tt(), se();
          var t = Se.current;
          Se.current = tl;
          try {
            return Og(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", tt(), se(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", tt(), se(), AC(e);
        },
        useTransition: function() {
          return I = "useTransition", tt(), se(), HC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", tt(), se(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", tt(), se(), nm(e, t);
        },
        useId: function() {
          return I = "useId", tt(), se(), pm();
        },
        unstable_isNewReconciler: Te
      };
    }
    var Ao = D.unstable_now, GC = 0, mm = -1, xp = -1, ym = -1, Vg = !1, gm = !1;
    function XC() {
      return Vg;
    }
    function Xw() {
      gm = !0;
    }
    function Kw() {
      Vg = !1, gm = !1;
    }
    function Jw() {
      Vg = gm, gm = !1;
    }
    function KC() {
      return GC;
    }
    function JC() {
      GC = Ao();
    }
    function Bg(e) {
      xp = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function ZC(e) {
      xp = -1;
    }
    function Sm(e, t) {
      if (xp >= 0) {
        var a = Ao() - xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), xp = -1;
      }
    }
    function Pl(e) {
      if (mm >= 0) {
        var t = Ao() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Ot:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (ym >= 0) {
        var t = Ao() - ym;
        ym = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case B:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Ot:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Vl() {
      mm = Ao();
    }
    function Yg() {
      ym = Ao();
    }
    function Ig(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = rt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Wg, qg, Gg, Xg, Kg, e0, Em, Jg, Zg, eS, kp;
    {
      Wg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), kp = /* @__PURE__ */ new Set();
      var t0 = /* @__PURE__ */ new Set();
      Em = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          t0.has(a) || (t0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, e0 = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          Kg.has(a) || (Kg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Qg);
    }
    function tS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & at) {
          Wt(!0);
          try {
            s = a(i, u);
          } finally {
            Wt(!1);
          }
        }
        e0(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var nS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Em(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Cr(p, i, s, u), Gh(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.tag = gC, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Cr(p, i, s, u), Gh(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = ba(), u = Po(a), s = Lu(i, u);
        s.tag = Qh, t != null && (Em(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Cr(f, a, u, i), Gh(f, a, u)), _d(a, u);
      }
    };
    function n0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & at) {
            Wt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Wt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !He(a, i) || !He(u, s) : !0;
    }
    function Zw(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & at) === Fe && (kp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !kp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & at) === Fe && (kp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Zg.has(t) && (Zg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Gg.has(t) && (Gg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || lt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function r0(e, t) {
      t.updater = nS, e.stateNode = t, cs(t, e), t._reactInternalInstance = Qg;
    }
    function a0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !eS.has(t)) {
          eS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = lr(f);
      else {
        u = wf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? _f(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & at) {
        Wt(!0);
        try {
          g = new t(a, s);
        } finally {
          Wt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      r0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = xt(t) || "Component";
          qg.has(b) || (qg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var U = null, j = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), U !== null || j !== null || H !== null) {
            var pe = xt(t) || "Component", $e = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Xg.has(pe) || (Xg.add(pe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, pe, $e, U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && WE(e, u, s), g;
    }
    function e_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Je(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function i0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Je(e) || "Component";
          Wg.has(s) || (Wg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      Zw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, dg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = lr(s);
      else {
        var f = wf(e, t, !0);
        u.context = _f(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          Jg.has(p) || (Jg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & at && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (e_(e, u), Xh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ct;
        y |= yl, (e.mode & tn) !== Fe && (y |= Mr), e.flags |= y;
      }
    }
    function t_(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = lr(p);
      else {
        var y = wf(e, t, !0);
        v = _f(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && i0(e, u, a, v), EC();
      var b = e.memoizedState, U = u.state = b;
      if (Xh(e, a, u, i), U = e.memoizedState, s === a && b === U && !Lh() && !Kh()) {
        if (typeof u.componentDidMount == "function") {
          var j = Ct;
          j |= yl, (e.mode & tn) !== Fe && (j |= Mr), e.flags |= j;
        }
        return !1;
      }
      typeof g == "function" && (tS(e, t, g, a), U = e.memoizedState);
      var H = Kh() || n0(e, t, s, a, b, U, v);
      if (H) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var pe = Ct;
          pe |= yl, (e.mode & tn) !== Fe && (pe |= Mr), e.flags |= pe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var $e = Ct;
          $e |= yl, (e.mode & tn) !== Fe && ($e |= Mr), e.flags |= $e;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, H;
    }
    function n_(e, t, a, i, u) {
      var s = t.stateNode;
      SC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = lr(g);
      else {
        var b = wf(t, a, !0);
        _ = _f(t, b);
      }
      var U = a.getDerivedStateFromProps, j = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && i0(t, s, i, _), EC();
      var H = t.memoizedState, pe = s.state = H;
      if (Xh(t, i, s, u), pe = t.memoizedState, f === v && H === pe && !Lh() && !Kh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= za), !1;
      typeof U == "function" && (tS(t, a, U, i), pe = t.memoizedState);
      var $e = Kh() || n0(t, a, p, i, H, pe, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ce;
      return $e ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, pe, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, pe, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = pe), s.props = i, s.state = pe, s.context = _, $e;
    }
    function Ks(e, t) {
      return {
        value: e,
        source: t,
        stack: _t(t),
        digest: null
      };
    }
    function aS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function r_(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = r_(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === te)
            return;
          console.error(i);
        }
        var p = u ? Je(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === B)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Je(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var a_ = typeof WeakMap == "function" ? WeakMap : Map;
    function l0(e, t, a) {
      var i = Lu(qt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        X1(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Lu(qt, a);
      i.tag = cg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          yR(e), iS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        yR(e), iS(e, t), typeof u != "function" && q1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (na(e.lanes, We) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Je(e) || "Unknown"));
      }), i;
    }
    function u0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new a_(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = K1.bind(null, e, t, a);
        _r && Ip(e, a), t.then(s, s);
      }
    }
    function i_(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function l_(e, t) {
      var a = e.tag;
      if ((e.mode & yt) === Fe && (a === me || a === Ye || a === Qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function o0(e) {
      var t = e;
      do {
        if (t.tag === Oe && Pw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function s0(e, t, a, i, u) {
      if ((e.mode & yt) === Fe) {
        if (e === t)
          e.flags |= Ua;
        else {
          if (e.flags |= mt, a.flags |= ti, a.flags &= -52805, a.tag === te) {
            var s = a.alternate;
            if (s === null)
              a.tag = Lt;
            else {
              var f = Lu(qt, We);
              f.tag = Qh, No(a, f, We);
            }
          }
          a.lanes = ut(a.lanes, We);
        }
        return e;
      }
      return e.flags |= Ua, e.lanes = u, e;
    }
    function u_(e, t, a, i, u) {
      if (a.flags |= lu, _r && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        l_(a), jr() && a.mode & yt && eC();
        var f = o0(t);
        if (f !== null) {
          f.flags &= -257, s0(f, t, a, e, u), f.mode & yt && u0(e, s, u), i_(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            u0(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & yt) {
        eC();
        var v = o0(t);
        if (v !== null) {
          (v.flags & Ua) === je && (v.flags |= wn), s0(v, t, a, e, u), Jy(Ks(i, a));
          return;
        }
      }
      i = Ks(i, a), P1(i);
      var y = t;
      do {
        switch (y.tag) {
          case B: {
            var g = i;
            y.flags |= Ua;
            var _ = rr(u);
            y.lanes = ut(y.lanes, _);
            var b = l0(y, g, _);
            pg(y, b);
            return;
          }
          case te:
            var U = i, j = y.type, H = y.stateNode;
            if ((y.flags & mt) === je && (typeof j.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !oR(H))) {
              y.flags |= Ua;
              var pe = rr(u);
              y.lanes = ut(y.lanes, pe);
              var $e = lS(y, U, pe);
              pg(y, $e);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function o_() {
      return null;
    }
    var Dp = qe.ReactCurrentOwner, rl = !1, uS, Op, oS, sS, cS, Js, fS, Cm, Lp;
    uS = {}, Op = {}, oS = {}, sS = {}, cS = {}, Js = !1, fS = {}, Cm = {}, Lp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = dC(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function s_(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function c0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Nf(t, u), Aa(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & at) {
          Wt(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            Wt(!1);
          }
        }
        Da(!1);
      }
      return Rl(), e !== null && !rl ? (_C(e, t, u), Nu(e, t, u)) : (jr() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function f0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (vx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = Qe, t.type = f, vS(t, s), d0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            xt(s)
          ), a.defaultProps !== void 0) {
            var v = xt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = XS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Ki(
          _,
          i,
          // Resolved props
          "prop",
          xt(g)
        );
      }
      var b = e.child, U = ES(e, u);
      if (!U) {
        var j = b.memoizedProps, H = a.compare;
        if (H = H !== null ? H : He, H(j, i) && e.ref === t.ref)
          return Nu(e, t, u);
      }
      t.flags |= Ii;
      var pe = rc(b, i);
      return pe.ref = t.ref, pe.return = t, t.child = pe, pe;
    }
    function d0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === et) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ki(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            xt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (He(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & ti) !== je && (rl = !0);
          else return t.lanes = e.lanes, Nu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function p0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || x)
        if ((t.mode & yt) === Fe) {
          var f = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (na(a, ya)) {
          var _ = {
            baseLanes: Y,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var b = s !== null ? s.baseLanes : a;
          zm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = ut(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ya;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, zm(t, v), null;
        }
      else {
        var U;
        s !== null ? (U = ut(s.baseLanes, a), t.memoizedState = null) : U = a, zm(t, U);
      }
      return Ra(e, t, u, a), t.child;
    }
    function c_(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function f_(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function d_(e, t, a) {
      {
        t.flags |= Ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function v0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Fn, t.flags |= ds);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          xt(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = _f(t, p);
      }
      var v, y;
      Nf(t, u), Aa(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, a, i, f, u), y = Hf(), t.mode & at) {
          Wt(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            Wt(!1);
          }
        }
        Da(!1);
      }
      return Rl(), e !== null && !rl ? (_C(e, t, u), Nu(e, t, u)) : (jr() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function h0(e, t, a, i, u) {
      {
        switch (Dx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= mt, t.flags |= Ua;
            var y = new Error("Simulated error coming from DevTools"), g = rr(u);
            t.lanes = ut(t.lanes, g);
            var _ = lS(t, Ks(y, t), g);
            pg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && Ki(
            b,
            i,
            // Resolved props
            "prop",
            xt(a)
          );
        }
      }
      var U;
      Al(a) ? (U = !0, Mh(t)) : U = !1, Nf(t, u);
      var j = t.stateNode, H;
      j === null ? (Tm(e, t), a0(t, a, i), rS(t, a, i, u), H = !0) : e === null ? H = t_(t, a, i, u) : H = n_(e, t, a, i, u);
      var pe = pS(e, t, a, H, U, u);
      {
        var $e = t.stateNode;
        H && $e.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Je(t) || "a component"), Js = !0);
      }
      return pe;
    }
    function pS(e, t, a, i, u, s) {
      v0(e, t);
      var f = (t.flags & mt) !== je;
      if (!i && !f)
        return u && XE(t, a, !1), Nu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, ZC();
      else {
        Aa(t);
        {
          if (Da(!0), v = p.render(), t.mode & at) {
            Wt(!0);
            try {
              p.render();
            } finally {
              Wt(!1);
            }
          }
          Da(!1);
        }
        Rl();
      }
      return t.flags |= Ii, e !== null && f ? s_(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && XE(t, a, !0), t.child;
    }
    function m0(e) {
      var t = e.stateNode;
      t.pendingContext ? qE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && qE(e, t.context, !1), vg(e, t.containerInfo);
    }
    function p_(e, t, a) {
      if (m0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SC(e, t), Xh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & wn) {
          var g = Ks(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return y0(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Ks(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return y0(e, t, p, a, _);
        } else {
          mw(t);
          var b = dC(t, null, p, a);
          t.child = b;
          for (var U = b; U; )
            U.flags = U.flags & -3 | Hn, U = U.sibling;
        }
      } else {
        if (Df(), p === s)
          return Nu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function y0(e, t, a, i, u) {
      return Df(), Jy(u), t.flags |= wn, Ra(e, t, a, i), t.child;
    }
    function v_(e, t, a) {
      TC(t), e === null && Ky(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ny(i, u);
      return p ? f = null : s !== null && Ny(i, s) && (t.flags |= en), v0(e, t), Ra(e, t, f, a), t.child;
    }
    function h_(e, t) {
      return e === null && Ky(t), null;
    }
    function m_(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = hx(v), g = nl(v, u), _;
      switch (y) {
        case me:
          return vS(t, v), t.type = v = Wf(v), _ = dS(null, t, v, g, i), _;
        case te:
          return t.type = v = YS(v), _ = h0(null, t, v, g, i), _;
        case Ye:
          return t.type = v = IS(v), _ = c0(null, t, v, g, i), _;
        case ct: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Ki(
              b,
              g,
              // Resolved for outer only
              "prop",
              xt(v)
            );
          }
          return _ = f0(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var U = "";
      throw v !== null && typeof v == "object" && v.$$typeof === et && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function y_(e, t, a, i, u) {
      Tm(e, t), t.tag = te;
      var s;
      return Al(a) ? (s = !0, Mh(t)) : s = !1, Nf(t, u), a0(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function g_(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = _f(t, f);
      }
      Nf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & at && Zi.recordLegacyContextWarning(t, null), Da(!0), Dp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), Da(!1);
      }
      if (Rl(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = xt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = xt(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = te, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Al(a) ? (b = !0, Mh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), r0(t, p), rS(t, a, u, i), pS(null, t, a, !0, b, i);
      } else {
        if (t.tag = me, t.mode & at) {
          Wt(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = Hf();
          } finally {
            Wt(!1);
          }
        }
        return jr() && v && Qy(t), Ra(null, t, p, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = xt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = xt(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), sS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          oS[v] || (S("%s: Function components do not support contextType.", v), oS[v] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vn
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: o_(),
        transitions: null
      };
    }
    function S_(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function E_(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, Ep);
    }
    function C_(e, t) {
      return _s(e.childLanes, t);
    }
    function g0(e, t, a) {
      var i = t.pendingProps;
      Ox(t) && (t.flags |= mt);
      var u = el.current, s = !1, f = (t.flags & mt) !== je;
      if (f || E_(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = Hw(u, wC)), u = zf(u), zo(t, u), e === null) {
        Ky(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return __(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = R_(t, y, g, a), b = t.child;
          return b.memoizedState = mS(a), t.memoizedState = hS, _;
        } else
          return yS(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var j = U.dehydrated;
          if (j !== null)
            return x_(e, t, f, i, j, U, a);
        }
        if (s) {
          var H = i.fallback, pe = i.children, $e = b_(e, t, pe, H, a), Ue = t.child, Dt = e.child.memoizedState;
          return Ue.memoizedState = Dt === null ? mS(a) : S_(Dt, a), Ue.childLanes = C_(e, a), t.memoizedState = hS, $e;
        } else {
          var Tt = i.children, L = T_(e, t, Tt, a);
          return t.memoizedState = null, L;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = gS(u, i);
      return s.return = e, e.child = s, s;
    }
    function R_(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & yt) === Fe && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & bt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = gS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return SR(e, t, Y, null);
    }
    function S0(e, t) {
      return rc(e, t);
    }
    function T_(e, t, a, i) {
      var u = e.child, s = u.sibling, f = S0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & yt) === Fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Kr) : p.push(s);
      }
      return t.child = f, f;
    }
    function b_(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & yt) === Fe && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = S0(f, v), y.subtreeFlags = f.subtreeFlags & Pn;
      var _;
      return p !== null ? _ = rc(p, i) : (_ = Bo(i, s, u, null), _.flags |= jn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Rm(e, t, a, i) {
      i !== null && Jy(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= jn, t.memoizedState = null, f;
    }
    function w_(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Bo(i, s, u, null);
      return v.flags |= jn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & yt) !== Fe && Of(t, e.child, null, u), v;
    }
    function __(e, t, a) {
      return (e.mode & yt) === Fe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = We) : Ay(t) ? e.lanes = nr : e.lanes = ya, null;
    }
    function x_(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & wn) {
          t.flags &= -257;
          var L = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Rm(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= mt, null;
          var P = i.children, N = i.fallback, ee = w_(e, t, P, N, f), Ce = t.child;
          return Ce.memoizedState = mS(f), t.memoizedState = hS, ee;
        }
      else {
        if (vw(), (t.mode & yt) === Fe)
          return Rm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Ay(u)) {
          var p, v, y;
          {
            var g = Lb(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = aS(_, p, y);
          return Rm(e, t, f, b);
        }
        var U = na(f, e.childLanes);
        if (rl || U) {
          var j = Mm();
          if (j !== null) {
            var H = Jc(j, f);
            if (H !== Vn && H !== s.retryLane) {
              s.retryLane = H;
              var pe = qt;
              Ba(e, H), Cr(j, e, H, pe);
            }
          }
          HS();
          var $e = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Rm(e, t, f, $e);
        } else if (BE(u)) {
          t.flags |= mt, t.child = e.child;
          var Ue = J1.bind(null, e);
          return Nb(u, Ue), null;
        } else {
          yw(t, u, s.treeContext);
          var Dt = i.children, Tt = yS(t, Dt);
          return Tt.flags |= Hn, Tt;
        }
      }
    }
    function E0(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), og(e.return, t, a);
    }
    function k_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Oe) {
          var u = i.memoizedState;
          u !== null && E0(i, a, e);
        } else if (i.tag === $t)
          E0(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function D_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function O_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fS[e])
        if (fS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function L_(e, t) {
      e !== void 0 && !Cm[e] && (e !== "collapsed" && e !== "hidden" ? (Cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function C0(e, t) {
      {
        var a = lt(e), i = !a && typeof Sn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function N_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (lt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!C0(e[a], a))
              return;
        } else {
          var i = Sn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!C0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function SS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function R0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      O_(u), L_(s, u), N_(f, u), Ra(e, t, f, a);
      var p = el.current, v = yg(p, Ep);
      if (v)
        p = gg(p, Ep), t.flags |= mt;
      else {
        var y = e !== null && (e.flags & mt) !== je;
        y && k_(t, t.child, a), p = zf(p);
      }
      if (zo(t, p), (t.mode & yt) === Fe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = D_(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), SS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, U = t.child;
            for (t.child = null; U !== null; ) {
              var j = U.alternate;
              if (j !== null && em(j) === null) {
                t.child = U;
                break;
              }
              var H = U.sibling;
              U.sibling = b, b = U, U = H;
            }
            SS(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            SS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function M_(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var T0 = !1;
    function z_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || T0 || (T0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (hC(t, u, p), f !== null) {
        var y = f.value;
        if (xe(y, p)) {
          if (f.children === s.children && !Lh())
            return Nu(e, t, a);
        } else
          Ow(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var b0 = !1;
    function U_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (b0 || (b0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = lr(i);
      Aa(t);
      var p;
      return Dp.current = t, Da(!0), p = s(f), Da(!1), Rl(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Np() {
      rl = !0;
    }
    function Tm(e, t) {
      (t.mode & yt) === Fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= jn);
    }
    function Nu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), ZC(), Yp(t.lanes), na(a, t.childLanes) ? (kw(e, t), t.child) : null;
    }
    function A_(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Kr) : s.push(e), a.flags |= jn, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function j_(e, t, a) {
      switch (t.tag) {
        case B:
          m0(t), t.stateNode, Df();
          break;
        case $:
          TC(t);
          break;
        case te: {
          var i = t.type;
          Al(i) && Mh(t);
          break;
        }
        case W:
          vg(t, t.stateNode.containerInfo);
          break;
        case ot: {
          var u = t.memoizedProps.value, s = t.type._context;
          hC(t, s, u);
          break;
        }
        case Ot:
          {
            var f = na(a, t.childLanes);
            f && (t.flags |= Ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Oe: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, zf(el.current)), t.flags |= mt, null;
            var y = t.child, g = y.childLanes;
            if (na(a, g))
              return g0(e, t, a);
            zo(t, zf(el.current));
            var _ = Nu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            zo(t, zf(el.current));
          break;
        }
        case $t: {
          var b = (e.flags & mt) !== je, U = na(a, t.childLanes);
          if (b) {
            if (U)
              return R0(e, t, a);
            t.flags |= mt;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), zo(t, el.current), U)
            break;
          return null;
        }
        case Be:
        case Ut:
          return t.lanes = Y, p0(e, t, a);
      }
      return Nu(e, t, a);
    }
    function w0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return A_(e, t, XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Lh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & mt) === je)
            return rl = !1, j_(e, t, a);
          (e.flags & ti) !== je ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && ow(t)) {
        var f = t.index, p = sw();
        ZE(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case ae:
          return g_(e, t, t.type, a);
        case Gt: {
          var v = t.elementType;
          return m_(e, t, v, a);
        }
        case me: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : nl(y, g);
          return dS(e, t, y, _, a);
        }
        case te: {
          var b = t.type, U = t.pendingProps, j = t.elementType === b ? U : nl(b, U);
          return h0(e, t, b, j, a);
        }
        case B:
          return p_(e, t, a);
        case $:
          return v_(e, t, a);
        case oe:
          return h_(e, t);
        case Oe:
          return g0(e, t, a);
        case W:
          return M_(e, t, a);
        case Ye: {
          var H = t.type, pe = t.pendingProps, $e = t.elementType === H ? pe : nl(H, pe);
          return c0(e, t, H, $e, a);
        }
        case ue:
          return c_(e, t, a);
        case zt:
          return f_(e, t, a);
        case Ot:
          return d_(e, t, a);
        case ot:
          return z_(e, t, a);
        case Ht:
          return U_(e, t, a);
        case ct: {
          var Ue = t.type, Dt = t.pendingProps, Tt = nl(Ue, Dt);
          if (t.type !== t.elementType) {
            var L = Ue.propTypes;
            L && Ki(
              L,
              Tt,
              // Resolved for outer only
              "prop",
              xt(Ue)
            );
          }
          return Tt = nl(Ue.type, Tt), f0(e, t, Ue, Tt, a);
        }
        case Qe:
          return d0(e, t, t.type, t.pendingProps, a);
        case Lt: {
          var P = t.type, N = t.pendingProps, ee = t.elementType === P ? N : nl(P, N);
          return y_(e, t, P, ee, a);
        }
        case $t:
          return R0(e, t, a);
        case gt:
          break;
        case Be:
          return p0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= Ct;
    }
    function _0(e) {
      e.flags |= Fn, e.flags |= ds;
    }
    var x0, CS, k0, D0;
    x0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === $ || u.tag === oe)
          ib(e, u.stateNode);
        else if (u.tag !== W) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, CS = function(e, t) {
    }, k0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = hg(), v = ub(f, a, s, i, u, p);
        t.updateQueue = v, v && Pf(t);
      }
    }, D0 = function(e, t, a, i) {
      a !== i && Pf(t);
    };
    function Mp(e, t) {
      if (!jr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Hr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = je;
      if (t) {
        if ((e.mode & bt) !== Fe) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = ut(a, ut(y.lanes, y.childLanes)), i |= y.subtreeFlags & Pn, i |= y.flags & Pn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = ut(a, ut(g.lanes, g.childLanes)), i |= g.subtreeFlags & Pn, i |= g.flags & Pn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & bt) !== Fe) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = ut(a, ut(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = ut(a, ut(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function F_(e, t, a) {
      if (Rw() && (t.mode & yt) !== Fe && (t.flags & mt) === je)
        return lC(t), Df(), t.flags |= wn | lu | Ua, !1;
      var i = Fh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Ew(t), Hr(t), (t.mode & bt) !== Fe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & mt) === je && (t.memoizedState = null), t.flags |= Ct, Hr(t), (t.mode & bt) !== Fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return uC(), !0;
    }
    function O0(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case ae:
        case Gt:
        case Qe:
        case me:
        case Ye:
        case ue:
        case zt:
        case Ot:
        case Ht:
        case ct:
          return Hr(t), null;
        case te: {
          var u = t.type;
          return Al(u) && Nh(t), Hr(t), null;
        }
        case B: {
          var s = t.stateNode;
          if (Mf(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Fh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wn) !== je) && (t.flags |= za, uC());
            }
          }
          return CS(e, t), Hr(t), null;
        }
        case $: {
          mg(t);
          var v = RC(), y = t.type;
          if (e !== null && t.stateNode != null)
            k0(e, t, y, i, v), e.ref !== t.ref && _0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = hg(), _ = Fh(t);
            if (_)
              gw(t, v, g) && Pf(t);
            else {
              var b = ab(y, i, v, g, t);
              x0(b, t, !1, !1), t.stateNode = b, lb(b, y, i, v) && Pf(t);
            }
            t.ref !== null && _0(t);
          }
          return Hr(t), null;
        }
        case oe: {
          var U = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            D0(e, t, j, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = RC(), pe = hg(), $e = Fh(t);
            $e ? Sw(t) && Pf(t) : t.stateNode = ob(U, H, pe, t);
          }
          return Hr(t), null;
        }
        case Oe: {
          Uf(t);
          var Ue = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Dt = F_(e, t, Ue);
            if (!Dt)
              return t.flags & Ua ? t : null;
          }
          if ((t.flags & mt) !== je)
            return t.lanes = a, (t.mode & bt) !== Fe && Ig(t), t;
          var Tt = Ue !== null, L = e !== null && e.memoizedState !== null;
          if (Tt !== L && Tt) {
            var P = t.child;
            if (P.flags |= gi, (t.mode & yt) !== Fe) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              N || yg(el.current, wC) ? H1() : HS();
            }
          }
          var ee = t.updateQueue;
          if (ee !== null && (t.flags |= Ct), Hr(t), (t.mode & bt) !== Fe && Tt) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case W:
          return Mf(t), CS(e, t), e === null && tw(t.stateNode.containerInfo), Hr(t), null;
        case ot:
          var he = t.type._context;
          return ug(he, t), Hr(t), null;
        case Lt: {
          var Xe = t.type;
          return Al(Xe) && Nh(t), Hr(t), null;
        }
        case $t: {
          Uf(t);
          var nt = t.memoizedState;
          if (nt === null)
            return Hr(t), null;
          var rn = (t.flags & mt) !== je, At = nt.rendering;
          if (At === null)
            if (rn)
              Mp(nt, !1);
            else {
              var qn = V1() && (e === null || (e.flags & mt) === je);
              if (!qn)
                for (var jt = t.child; jt !== null; ) {
                  var $n = em(jt);
                  if ($n !== null) {
                    rn = !0, t.flags |= mt, Mp(nt, !1);
                    var oa = $n.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= Ct), t.subtreeFlags = je, Dw(t, a), zo(t, gg(el.current, Ep)), t.child;
                  }
                  jt = jt.sibling;
                }
              nt.tail !== null && On() > K0() && (t.flags |= mt, rn = !0, Mp(nt, !1), t.lanes = Fv);
            }
          else {
            if (!rn) {
              var Yr = em(At);
              if (Yr !== null) {
                t.flags |= mt, rn = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Ct), Mp(nt, !0), nt.tail === null && nt.tailMode === "hidden" && !At.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              On() * 2 - nt.renderingStartTime > K0() && a !== ya && (t.flags |= mt, rn = !0, Mp(nt, !1), t.lanes = Fv);
            }
            if (nt.isBackwards)
              At.sibling = t.child, t.child = At;
            else {
              var wa = nt.last;
              wa !== null ? wa.sibling = At : t.child = At, nt.last = At;
            }
          }
          if (nt.tail !== null) {
            var _a = nt.tail;
            nt.rendering = _a, nt.tail = _a.sibling, nt.renderingStartTime = On(), _a.sibling = null;
            var sa = el.current;
            return rn ? sa = gg(sa, Ep) : sa = zf(sa), zo(t, sa), _a;
          }
          return Hr(t), null;
        }
        case gt:
          break;
        case Be:
        case Ut: {
          FS(t);
          var ju = t.memoizedState, qf = ju !== null;
          if (e !== null) {
            var Gp = e.memoizedState, Yl = Gp !== null;
            Yl !== qf && (t.flags |= gi);
          }
          return !qf || (t.mode & yt) === Fe ? Hr(t) : na($l, ya) && (Hr(t), t.subtreeFlags & (jn | Ct) && (t.flags |= gi)), null;
        }
        case vt:
          return null;
        case it:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function H_(e, t, a) {
      switch (Wy(t), t.tag) {
        case te: {
          var i = t.type;
          Al(i) && Nh(t);
          var u = t.flags;
          return u & Ua ? (t.flags = u & -65537 | mt, (t.mode & bt) !== Fe && Ig(t), t) : null;
        }
        case B: {
          t.stateNode, Mf(t), $y(t), Eg();
          var s = t.flags;
          return (s & Ua) !== je && (s & mt) === je ? (t.flags = s & -65537 | mt, t) : null;
        }
        case $:
          return mg(t), null;
        case Oe: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & Ua ? (t.flags = p & -65537 | mt, (t.mode & bt) !== Fe && Ig(t), t) : null;
        }
        case $t:
          return Uf(t), null;
        case W:
          return Mf(t), null;
        case ot:
          var v = t.type._context;
          return ug(v, t), null;
        case Be:
        case Ut:
          return FS(t), null;
        case vt:
          return null;
        default:
          return null;
      }
    }
    function L0(e, t, a) {
      switch (Wy(t), t.tag) {
        case te: {
          var i = t.type.childContextTypes;
          i != null && Nh(t);
          break;
        }
        case B: {
          t.stateNode, Mf(t), $y(t), Eg();
          break;
        }
        case $: {
          mg(t);
          break;
        }
        case W:
          Mf(t);
          break;
        case Oe:
          Uf(t);
          break;
        case $t:
          Uf(t);
          break;
        case ot:
          var u = t.type._context;
          ug(u, t);
          break;
        case Be:
        case Ut:
          FS(t);
          break;
      }
    }
    var N0 = null;
    N0 = /* @__PURE__ */ new Set();
    var bm = !1, Pr = !1, P_ = typeof WeakSet == "function" ? WeakSet : Set, ke = null, Vf = null, Bf = null;
    function V_(e) {
      Ma(null, function() {
        throw e;
      }), cd();
    }
    var B_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & bt)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function M0(e, t) {
      try {
        jo(hr, e);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        B_(e, a);
      } catch (i) {
        gn(e, t, i);
      }
    }
    function $_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        gn(e, t, i);
      }
    }
    function z0(e, t) {
      try {
        A0(e);
      } catch (a) {
        gn(e, t, a);
      }
    }
    function $f(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ee && Le && e.mode & bt)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            gn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          a.current = null;
    }
    function wm(e, t, a) {
      try {
        a();
      } catch (i) {
        gn(e, t, i);
      }
    }
    var U0 = !1;
    function Y_(e, t) {
      nb(e.containerInfo), ke = t, I_();
      var a = U0;
      return U0 = !1, a;
    }
    function I_() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        (e.subtreeFlags & Sl) !== je && t !== null ? (t.return = e, ke = t) : Q_();
      }
    }
    function Q_() {
      for (; ke !== null; ) {
        var e = ke;
        Kt(e);
        try {
          W_(e);
        } catch (a) {
          gn(e, e.return, a);
        }
        bn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function W_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== je) {
        switch (Kt(e), e.tag) {
          case me:
          case Ye:
          case Qe:
            break;
          case te: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = N0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Je(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case B: {
            {
              var v = e.stateNode;
              xb(v.containerInfo);
            }
            break;
          }
          case $:
          case oe:
          case W:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        bn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== $a ? Tl(t) : (e & hr) !== $a && Rd(t), (e & jl) !== $a && Qp(!0), wm(t, a, p), (e & jl) !== $a && Qp(!1), (e & Fr) !== $a ? wc() : (e & hr) !== $a && uo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function jo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Fr) !== $a ? Av(t) : (e & hr) !== $a && jv(t);
            var f = s.create;
            (e & jl) !== $a && Qp(!0), s.destroy = f(), (e & jl) !== $a && Qp(!1), (e & Fr) !== $a ? Wi() : (e & hr) !== $a && _c();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & hr) !== je ? v = "useLayoutEffect" : (s.tag & jl) !== je ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function q_(e, t) {
      if ((t.flags & Ct) !== je)
        switch (t.tag) {
          case Ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = KC(), p = t.alternate === null ? "mount" : "update";
            XC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case B:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case Ot:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function G_(e, t, a, i) {
      if ((a.flags & El) !== je)
        switch (a.tag) {
          case me:
          case Ye:
          case Qe: {
            if (!Pr)
              if (a.mode & bt)
                try {
                  Vl(), jo(hr | vr, a);
                } finally {
                  Pl(a);
                }
              else
                jo(hr | vr, a);
            break;
          }
          case te: {
            var u = a.stateNode;
            if (a.flags & Ct && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), a.mode & bt)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), a.mode & bt)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), CC(a, p, u));
            break;
          }
          case B: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case $:
                    y = a.child.stateNode;
                    break;
                  case te:
                    y = a.child.stateNode;
                    break;
                }
              CC(a, v, y);
            }
            break;
          }
          case $: {
            var g = a.stateNode;
            if (t === null && a.flags & Ct) {
              var _ = a.type, b = a.memoizedProps;
              pb(g, _, b);
            }
            break;
          }
          case oe:
            break;
          case W:
            break;
          case Ot: {
            {
              var U = a.memoizedProps, j = U.onCommit, H = U.onRender, pe = a.stateNode.effectDuration, $e = KC(), Ue = t === null ? "mount" : "update";
              XC() && (Ue = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, Ue, a.actualDuration, a.treeBaseDuration, a.actualStartTime, $e);
              {
                typeof j == "function" && j(a.memoizedProps.id, Ue, pe, $e), Q1(a);
                var Dt = a.return;
                e: for (; Dt !== null; ) {
                  switch (Dt.tag) {
                    case B:
                      var Tt = Dt.stateNode;
                      Tt.effectDuration += pe;
                      break e;
                    case Ot:
                      var L = Dt.stateNode;
                      L.effectDuration += pe;
                      break e;
                  }
                  Dt = Dt.return;
                }
              }
            }
            break;
          }
          case Oe: {
            r1(e, a);
            break;
          }
          case $t:
          case Lt:
          case gt:
          case Be:
          case Ut:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Fn && A0(a);
    }
    function X_(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case Qe: {
          if (e.mode & bt)
            try {
              Vl(), M0(e, e.return);
            } finally {
              Pl(e);
            }
          else
            M0(e, e.return);
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $_(e, e.return, t), z0(e, e.return);
          break;
        }
        case $: {
          z0(e, e.return);
          break;
        }
      }
    }
    function K_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === $) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Tb(u) : wb(i.stateNode, i.memoizedProps);
            } catch (f) {
              gn(e, e.return, f);
            }
          }
        } else if (i.tag === oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? bb(s) : _b(s, i.memoizedProps);
            } catch (f) {
              gn(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === Ut) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function A0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case $:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & bt)
            try {
              Vl(), u = t(i);
            } finally {
              Pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Je(e)), t.current = i;
      }
    }
    function J_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function j0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, j0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === $) {
          var a = e.stateNode;
          a !== null && aw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Z_(e) {
      for (var t = e.return; t !== null; ) {
        if (F0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function F0(e) {
      return e.tag === $ || e.tag === B || e.tag === W;
    }
    function H0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || F0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== $ && t.tag !== oe && t.tag !== an; ) {
          if (t.flags & jn || t.child === null || t.tag === W)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & jn))
          return t.stateNode;
      }
    }
    function e1(e) {
      var t = Z_(e);
      switch (t.tag) {
        case $: {
          var a = t.stateNode;
          t.flags & en && (VE(a), t.flags &= -33);
          var i = H0(e);
          bS(e, i, a);
          break;
        }
        case B:
        case W: {
          var u = t.stateNode.containerInfo, s = H0(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === $ || i === oe;
      if (u) {
        var s = e.stateNode;
        t ? Sb(a, s, t) : yb(a, s);
      } else if (i !== W) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === $ || i === oe;
      if (u) {
        var s = e.stateNode;
        t ? gb(a, s, t) : mb(a, s);
      } else if (i !== W) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, il = !1;
    function t1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case $: {
              Vr = i.stateNode, il = !1;
              break e;
            }
            case B: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case W: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        P0(e, t, a), Vr = null, il = !1;
      }
      J_(a);
    }
    function Fo(e, t, a) {
      for (var i = a.child; i !== null; )
        P0(e, t, i), i = i.sibling;
    }
    function P0(e, t, a) {
      switch (lo(a), a.tag) {
        case $:
          Pr || $f(a, t);
        case oe: {
          {
            var i = Vr, u = il;
            Vr = null, Fo(e, t, a), Vr = i, il = u, Vr !== null && (il ? Cb(Vr, a.stateNode) : Eb(Vr, a.stateNode));
          }
          return;
        }
        case an: {
          Vr !== null && (il ? Rb(Vr, a.stateNode) : Uy(Vr, a.stateNode));
          return;
        }
        case W: {
          {
            var s = Vr, f = il;
            Vr = a.stateNode.containerInfo, il = !0, Fo(e, t, a), Vr = s, il = f;
          }
          return;
        }
        case me:
        case Ye:
        case ct:
        case Qe: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, b = _.destroy, U = _.tag;
                  b !== void 0 && ((U & jl) !== $a ? wm(a, t, b) : (U & hr) !== $a && (Rd(a), a.mode & bt ? (Vl(), wm(a, t, b), Pl(a)) : wm(a, t, b), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Fo(e, t, a);
          return;
        }
        case te: {
          if (!Pr) {
            $f(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && RS(a, t, j);
          }
          Fo(e, t, a);
          return;
        }
        case gt: {
          Fo(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & yt
          ) {
            var H = Pr;
            Pr = H || a.memoizedState !== null, Fo(e, t, a), Pr = H;
          } else
            Fo(e, t, a);
          break;
        }
        default: {
          Fo(e, t, a);
          return;
        }
      }
    }
    function n1(e) {
      e.memoizedState;
    }
    function r1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Vb(s);
          }
        }
      }
    }
    function V0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new P_()), t.forEach(function(i) {
          var u = Z1.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _r)
              if (Vf !== null && Bf !== null)
                Ip(Bf, Vf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function a1(e, t, a) {
      Vf = a, Bf = e, Kt(t), B0(t, e), Kt(t), Vf = null, Bf = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            t1(e, t, s);
          } catch (v) {
            gn(s, t, v);
          }
        }
      var f = Ka();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Kt(p), B0(p, e), p = p.sibling;
      Kt(f);
    }
    function B0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case me:
        case Ye:
        case ct:
        case Qe: {
          if (ll(t, e), Bl(e), u & Ct) {
            try {
              al(jl | vr, e, e.return), jo(jl | vr, e);
            } catch (Xe) {
              gn(e, e.return, Xe);
            }
            if (e.mode & bt) {
              try {
                Vl(), al(hr | vr, e, e.return);
              } catch (Xe) {
                gn(e, e.return, Xe);
              }
              Pl(e);
            } else
              try {
                al(hr | vr, e, e.return);
              } catch (Xe) {
                gn(e, e.return, Xe);
              }
          }
          return;
        }
        case te: {
          ll(t, e), Bl(e), u & Fn && i !== null && $f(i, i.return);
          return;
        }
        case $: {
          ll(t, e), Bl(e), u & Fn && i !== null && $f(i, i.return);
          {
            if (e.flags & en) {
              var s = e.stateNode;
              try {
                VE(s);
              } catch (Xe) {
                gn(e, e.return, Xe);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    vb(f, g, y, v, p, e);
                  } catch (Xe) {
                    gn(e, e.return, Xe);
                  }
              }
            }
          }
          return;
        }
        case oe: {
          if (ll(t, e), Bl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, U = i !== null ? i.memoizedProps : b;
            try {
              hb(_, U, b);
            } catch (Xe) {
              gn(e, e.return, Xe);
            }
          }
          return;
        }
        case B: {
          if (ll(t, e), Bl(e), u & Ct && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                Pb(t.containerInfo);
              } catch (Xe) {
                gn(e, e.return, Xe);
              }
          }
          return;
        }
        case W: {
          ll(t, e), Bl(e);
          return;
        }
        case Oe: {
          ll(t, e), Bl(e);
          var H = e.child;
          if (H.flags & gi) {
            var pe = H.stateNode, $e = H.memoizedState, Ue = $e !== null;
            if (pe.isHidden = Ue, Ue) {
              var Dt = H.alternate !== null && H.alternate.memoizedState !== null;
              Dt || F1();
            }
          }
          if (u & Ct) {
            try {
              n1(e);
            } catch (Xe) {
              gn(e, e.return, Xe);
            }
            V0(e);
          }
          return;
        }
        case Be: {
          var Tt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & yt
          ) {
            var L = Pr;
            Pr = L || Tt, ll(t, e), Pr = L;
          } else
            ll(t, e);
          if (Bl(e), u & gi) {
            var P = e.stateNode, N = e.memoizedState, ee = N !== null, Ce = e;
            if (P.isHidden = ee, ee && !Tt && (Ce.mode & yt) !== Fe) {
              ke = Ce;
              for (var he = Ce.child; he !== null; )
                ke = he, l1(he), he = he.sibling;
            }
            K_(Ce, ee);
          }
          return;
        }
        case $t: {
          ll(t, e), Bl(e), u & Ct && V0(e);
          return;
        }
        case gt:
          return;
        default: {
          ll(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & jn) {
        try {
          e1(e);
        } catch (a) {
          gn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & Hn && (e.flags &= -4097);
    }
    function i1(e, t, a) {
      Vf = a, Bf = t, ke = e, $0(e, t, a), Vf = null, Bf = null;
    }
    function $0(e, t, a) {
      for (var i = (e.mode & yt) !== Fe; ke !== null; ) {
        var u = ke, s = u.child;
        if (u.tag === Be && i) {
          var f = u.memoizedState !== null, p = f || bm;
          if (p) {
            wS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, _ = bm, b = Pr;
            bm = p, Pr = g, Pr && !b && (ke = u, u1(u));
            for (var U = s; U !== null; )
              ke = U, $0(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            ke = u, bm = _, Pr = b, wS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== je && s !== null ? (s.return = u, ke = s) : wS(e, t, a);
      }
    }
    function wS(e, t, a) {
      for (; ke !== null; ) {
        var i = ke;
        if ((i.flags & El) !== je) {
          var u = i.alternate;
          Kt(i);
          try {
            G_(t, u, i, a);
          } catch (f) {
            gn(i, i.return, f);
          }
          bn();
        }
        if (i === e) {
          ke = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ke = s;
          return;
        }
        ke = i.return;
      }
    }
    function l1(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        switch (t.tag) {
          case me:
          case Ye:
          case ct:
          case Qe: {
            if (t.mode & bt)
              try {
                Vl(), al(hr, t, t.return);
              } finally {
                Pl(t);
              }
            else
              al(hr, t, t.return);
            break;
          }
          case te: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case $: {
            $f(t, t.return);
            break;
          }
          case Be: {
            var u = t.memoizedState !== null;
            if (u) {
              Y0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ke = a) : Y0(e);
      }
    }
    function Y0(e) {
      for (; ke !== null; ) {
        var t = ke;
        if (t === e) {
          ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ke = a;
          return;
        }
        ke = t.return;
      }
    }
    function u1(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            I0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ke = a) : I0(e);
      }
    }
    function I0(e) {
      for (; ke !== null; ) {
        var t = ke;
        Kt(t);
        try {
          X_(t);
        } catch (i) {
          gn(t, t.return, i);
        }
        if (bn(), t === e) {
          ke = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ke = a;
          return;
        }
        ke = t.return;
      }
    }
    function o1(e, t, a, i) {
      ke = t, s1(t, e, a, i);
    }
    function s1(e, t, a, i) {
      for (; ke !== null; ) {
        var u = ke, s = u.child;
        (u.subtreeFlags & sr) !== je && s !== null ? (s.return = u, ke = s) : c1(e, t, a, i);
      }
    }
    function c1(e, t, a, i) {
      for (; ke !== null; ) {
        var u = ke;
        if ((u.flags & ha) !== je) {
          Kt(u);
          try {
            f1(t, u, a, i);
          } catch (f) {
            gn(u, u.return, f);
          }
          bn();
        }
        if (u === e) {
          ke = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ke = s;
          return;
        }
        ke = u.return;
      }
    }
    function f1(e, t, a, i) {
      switch (t.tag) {
        case me:
        case Ye:
        case Qe: {
          if (t.mode & bt) {
            Yg();
            try {
              jo(Fr | vr, t);
            } finally {
              $g(t);
            }
          } else
            jo(Fr | vr, t);
          break;
        }
      }
    }
    function d1(e) {
      ke = e, p1();
    }
    function p1() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        if ((ke.flags & Kr) !== je) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ke = u, m1(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ke = e;
          }
        }
        (e.subtreeFlags & sr) !== je && t !== null ? (t.return = e, ke = t) : v1();
      }
    }
    function v1() {
      for (; ke !== null; ) {
        var e = ke;
        (e.flags & ha) !== je && (Kt(e), h1(e), bn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function h1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case Qe: {
          e.mode & bt ? (Yg(), al(Fr | vr, e, e.return), $g(e)) : al(Fr | vr, e, e.return);
          break;
        }
      }
    }
    function m1(e, t) {
      for (; ke !== null; ) {
        var a = ke;
        Kt(a), g1(a, t), bn();
        var i = a.child;
        i !== null ? (i.return = a, ke = i) : y1(e);
      }
    }
    function y1(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.sibling, i = t.return;
        if (j0(t), t === e) {
          ke = null;
          return;
        }
        if (a !== null) {
          a.return = i, ke = a;
          return;
        }
        ke = i;
      }
    }
    function g1(e, t) {
      switch (e.tag) {
        case me:
        case Ye:
        case Qe: {
          e.mode & bt ? (Yg(), al(Fr, e, t), $g(e)) : al(Fr, e, t);
          break;
        }
      }
    }
    function S1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case Qe: {
          try {
            jo(hr | vr, e);
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
      }
    }
    function E1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case Qe: {
          try {
            jo(Fr | vr, e);
          } catch (t) {
            gn(e, e.return, t);
          }
          break;
        }
      }
    }
    function C1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case Qe: {
          try {
            al(hr | vr, e, e.return);
          } catch (a) {
            gn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function R1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case Qe:
          try {
            al(Fr | vr, e, e.return);
          } catch (t) {
            gn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var T1 = [];
    function b1() {
      T1.forEach(function(e) {
        return e();
      });
    }
    var w1 = qe.ReactCurrentActQueue;
    function _1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function Q0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && w1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x1 = Math.ceil, _S = qe.ReactCurrentDispatcher, xS = qe.ReactCurrentOwner, Br = qe.ReactCurrentBatchConfig, ul = qe.ReactCurrentActQueue, gr = (
      /*             */
      0
    ), W0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Mu = 0, Up = 1, Zs = 2, _m = 3, Ap = 4, q0 = 5, kS = 6, kt = gr, Ta = null, zn = null, Sr = Y, $l = Y, DS = ko(Y), Er = Mu, jp = null, xm = Y, Fp = Y, km = Y, Hp = null, Ya = null, OS = 0, G0 = 500, X0 = 1 / 0, k1 = 500, zu = null;
    function Pp() {
      X0 = On() + k1;
    }
    function K0() {
      return X0;
    }
    var Dm = !1, LS = null, Yf = null, ec = !1, Ho = null, Vp = Y, NS = [], MS = null, D1 = 50, Bp = 0, zS = null, US = !1, Om = !1, O1 = 50, If = 0, Lm = null, $p = qt, Nm = Y, J0 = !1;
    function Mm() {
      return Ta;
    }
    function ba() {
      return (kt & ($r | Di)) !== gr ? On() : ($p !== qt || ($p = On()), $p);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & yt) === Fe)
        return We;
      if ((kt & $r) !== gr && Sr !== Y)
        return rr(Sr);
      var a = ww() !== bw;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Nm === Vn && (Nm = Nd()), Nm;
      }
      var u = ga();
      if (u !== Vn)
        return u;
      var s = sb();
      return s;
    }
    function L1(e) {
      var t = e.mode;
      return (t & yt) === Fe ? We : Yv();
    }
    function Cr(e, t, a, i) {
      tx(), J0 && S("useInsertionEffect must not schedule updates."), US && (Om = !0), vo(e, a, i), (kt & $r) !== Y && e === Ta ? ax(t) : (_r && Qv(e, t, a), ix(t), e === Ta && ((kt & $r) === gr && (Fp = ut(Fp, a)), Er === Ap && Vo(e, Sr)), Ia(e, i), a === We && kt === gr && (t.mode & yt) === Fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Pp(), JE()));
    }
    function N1(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ia(e, a);
    }
    function M1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (kt & $r) !== gr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Vv(e, t);
      var i = ta(e, e === Ta ? Sr : Y);
      if (i === Y) {
        a !== null && vR(a), e.callbackNode = null, e.callbackPriority = Vn;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== BS)) {
        a == null && s !== We && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && vR(a);
      var f;
      if (u === We)
        e.tag === Do ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), uw(tR.bind(null, e))) : KE(tR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : fb(function() {
          (kt & ($r | Di)) === gr && Oo();
        }), f = null;
      else {
        var p;
        switch (qv(i)) {
          case ra:
            p = Qi;
            break;
          case ja:
            p = ps;
            break;
          case fr:
            p = ou;
            break;
          case ef:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = $S(p, Z0.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function Z0(e, t) {
      if (Kw(), $p = qt, Nm = Y, (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ta(e, e === Ta ? Sr : Y);
      if (u === Y)
        return null;
      var s = !ws(e, u) && !$v(e, u) && !t, f = s ? $1(e, u) : Um(e, u);
      if (f !== Mu) {
        if (f === Zs) {
          var p = Qc(e);
          p !== Y && (u = p, f = AS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw tc(e, Y), Vo(e, u), Ia(e, On()), v;
        }
        if (f === kS)
          Vo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !U1(g)) {
            if (f = Um(e, u), f === Zs) {
              var _ = Qc(e);
              _ !== Y && (u = _, f = AS(e, _));
            }
            if (f === Up) {
              var b = jp;
              throw tc(e, Y), Vo(e, u), Ia(e, On()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, z1(e, f, u);
        }
      }
      return Ia(e, On()), e.callbackNode === a ? Z0.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = tc(e, t);
        i.flags |= wn, ew(e.containerInfo);
      }
      var u = Um(e, t);
      if (u !== Zs) {
        var s = Ya;
        Ya = a, s !== null && eR(s);
      }
      return u;
    }
    function eR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function z1(e, t, a) {
      switch (t) {
        case Mu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zs: {
          nc(e, Ya, zu);
          break;
        }
        case _m: {
          if (Vo(e, a), Wc(a) && // do not delay if we're inside an act() scope
          !hR()) {
            var i = OS + G0 - On();
            if (i > 10) {
              var u = ta(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                ba(), Kc(e, s);
                break;
              }
              e.timeoutHandle = My(nc.bind(null, e, Ya, zu), i);
              break;
            }
          }
          nc(e, Ya, zu);
          break;
        }
        case Ap: {
          if (Vo(e, a), ry(a))
            break;
          if (!hR()) {
            var f = kd(e, a), p = f, v = On() - p, y = ex(v) - v;
            if (y > 10) {
              e.timeoutHandle = My(nc.bind(null, e, Ya, zu), y);
              break;
            }
          }
          nc(e, Ya, zu);
          break;
        }
        case q0: {
          nc(e, Ya, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function U1(e) {
      for (var t = e; ; ) {
        if (t.flags & Tc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!xe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Tc && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Vo(e, t) {
      t = _s(t, km), t = _s(t, Fp), zd(e, t);
    }
    function tR(e) {
      if (Jw(), (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      Au();
      var t = ta(e, Y);
      if (!na(t, We))
        return Ia(e, On()), null;
      var a = Um(e, t);
      if (e.tag !== Do && a === Zs) {
        var i = Qc(e);
        i !== Y && (t = i, a = AS(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw tc(e, Y), Vo(e, t), Ia(e, On()), u;
      }
      if (a === kS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, nc(e, Ya, zu), Ia(e, On()), null;
    }
    function A1(e, t) {
      t !== Y && (xs(e, ut(t, We)), Ia(e, On()), (kt & ($r | Di)) === gr && (Pp(), Oo()));
    }
    function jS(e, t) {
      var a = kt;
      kt |= W0;
      try {
        return e(t);
      } finally {
        kt = a, kt === gr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Pp(), JE());
      }
    }
    function j1(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, Qn(ra), e(t, a, i, u);
      } finally {
        Qn(s), Br.transition = f, kt === gr && Pp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === Do && (kt & ($r | Di)) === gr && Au();
      var t = kt;
      kt |= W0;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, Qn(ra), e ? e() : void 0;
      } finally {
        Qn(i), Br.transition = a, kt = t, (kt & ($r | Di)) === gr && Oo();
      }
    }
    function nR() {
      return (kt & ($r | Di)) !== gr;
    }
    function zm(e, t) {
      la(DS, $l, e), $l = ut($l, t);
    }
    function FS(e) {
      $l = DS.current, ia(DS, e);
    }
    function tc(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, cb(a)), zn !== null)
        for (var i = zn.return; i !== null; ) {
          var u = i.alternate;
          L0(u, i), i = i.return;
        }
      Ta = e;
      var s = rc(e.current, null);
      return zn = s, Sr = $l = t, Er = Mu, jp = null, xm = Y, Fp = Y, km = Y, Hp = null, Ya = null, Nw(), Zi.discardPendingWarnings(), s;
    }
    function rR(e, t) {
      do {
        var a = zn;
        try {
          if (Yh(), xC(), bn(), xS.current = null, a === null || a.return === null) {
            Er = Up, jp = t, zn = null;
            return;
          }
          if (Ee && a.mode & bt && Sm(a, !0), ie)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hs(a, i, Sr);
            } else
              Ci(a, t, Sr);
          u_(e, a.return, a, t, Sr), uR(a);
        } catch (u) {
          t = u, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
          continue;
        }
        return;
      } while (!0);
    }
    function aR() {
      var e = _S.current;
      return _S.current = vm, e === null ? vm : e;
    }
    function iR(e) {
      _S.current = e;
    }
    function F1() {
      OS = On();
    }
    function Yp(e) {
      xm = ut(e, xm);
    }
    function H1() {
      Er === Mu && (Er = _m);
    }
    function HS() {
      (Er === Mu || Er === _m || Er === Zs) && (Er = Ap), Ta !== null && (xl(xm) || xl(Fp)) && Vo(Ta, Sr);
    }
    function P1(e) {
      Er !== Ap && (Er = Zs), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function V1() {
      return Er === Mu;
    }
    function Um(e, t) {
      var a = kt;
      kt |= $r;
      var i = aR();
      if (Ta !== e || Sr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, Sr), u.clear()), Ud(e, t);
        }
        zu = Zc(), tc(e, t);
      }
      bd(t);
      do
        try {
          B1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      if (Yh(), kt = a, iR(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return En(), Ta = null, Sr = Y, Er;
    }
    function B1() {
      for (; zn !== null; )
        lR(zn);
    }
    function $1(e, t) {
      var a = kt;
      kt |= $r;
      var i = aR();
      if (Ta !== e || Sr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, Sr), u.clear()), Ud(e, t);
        }
        zu = Zc(), Pp(), tc(e, t);
      }
      bd(t);
      do
        try {
          Y1();
          break;
        } catch (s) {
          rR(e, s);
        }
      while (!0);
      return Yh(), iR(i), kt = a, zn !== null ? (wd(), Mu) : (En(), Ta = null, Sr = Y, Er);
    }
    function Y1() {
      for (; zn !== null && !md(); )
        lR(zn);
    }
    function lR(e) {
      var t = e.alternate;
      Kt(e);
      var a;
      (e.mode & bt) !== Fe ? (Bg(e), a = PS(t, e, $l), Sm(e, !0)) : a = PS(t, e, $l), bn(), e.memoizedProps = e.pendingProps, a === null ? uR(e) : zn = a, xS.current = null;
    }
    function uR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === je) {
          Kt(t);
          var u = void 0;
          if ((t.mode & bt) === Fe ? u = O0(a, t, $l) : (Bg(t), u = O0(a, t, $l), Sm(t, !1)), bn(), u !== null) {
            zn = u;
            return;
          }
        } else {
          var s = H_(a, t);
          if (s !== null) {
            s.flags &= Dv, zn = s;
            return;
          }
          if ((t.mode & bt) !== Fe) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = je, i.deletions = null;
          else {
            Er = kS, zn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          zn = v;
          return;
        }
        t = i, zn = t;
      } while (t !== null);
      Er === Mu && (Er = q0);
    }
    function nc(e, t, a) {
      var i = ga(), u = Br.transition;
      try {
        Br.transition = null, Qn(ra), I1(e, t, a, i);
      } finally {
        Br.transition = u, Qn(i);
      }
      return null;
    }
    function I1(e, t, a, i) {
      do
        Au();
      while (Ho !== null);
      if (nx(), (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), u === null)
        return Ei(), null;
      if (s === Y && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vn;
      var f = ut(u.lanes, u.childLanes);
      Iv(e, f), e === Ta && (Ta = null, zn = null, Sr = Y), ((u.subtreeFlags & sr) !== je || (u.flags & sr) !== je) && (ec || (ec = !0, MS = a, $S(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Sl | ao | El | sr)) !== je, v = (u.flags & (Sl | ao | El | sr)) !== je;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        Qn(ra);
        var _ = kt;
        kt |= Di, xS.current = null, Y_(e, u), JC(), a1(e, u, s), rb(e.containerInfo), e.current = u, ms(s), i1(u, e, s), cu(), Lv(), kt = _, Qn(g), Br.transition = y;
      } else
        e.current = u, JC();
      var b = ec;
      if (ec ? (ec = !1, Ho = e, Vp = s) : (If = 0, Lm = null), f = e.pendingLanes, f === Y && (Yf = null), b || fR(e.current, !1), Sd(u.stateNode, i), _r && e.memoizedUpdaters.clear(), b1(), Ia(e, On()), t !== null)
        for (var U = e.onRecoverableError, j = 0; j < t.length; j++) {
          var H = t[j], pe = H.stack, $e = H.digest;
          U(H.value, {
            componentStack: pe,
            digest: $e
          });
        }
      if (Dm) {
        Dm = !1;
        var Ue = LS;
        throw LS = null, Ue;
      }
      return na(Vp, We) && e.tag !== Do && Au(), f = e.pendingLanes, na(f, We) ? (Xw(), e === zS ? Bp++ : (Bp = 0, zS = e)) : Bp = 0, Oo(), Ei(), null;
    }
    function Au() {
      if (Ho !== null) {
        var e = qv(Vp), t = xr(fr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, Qn(t), W1();
        } finally {
          Qn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Q1(e) {
      NS.push(e), ec || (ec = !0, $S(ou, function() {
        return Au(), null;
      }));
    }
    function W1() {
      if (Ho === null)
        return !1;
      var e = MS;
      MS = null;
      var t = Ho, a = Vp;
      if (Ho = null, Vp = Y, (kt & ($r | Di)) !== gr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Om = !1, Td(a);
      var i = kt;
      kt |= Di, d1(t.current), o1(t, t.current, a, e);
      {
        var u = NS;
        NS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          q_(t, f);
        }
      }
      oo(), fR(t.current, !0), kt = i, Oo(), Om ? t === Lm ? If++ : (If = 0, Lm = t) : If = 0, US = !1, Om = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function oR(e) {
      return Yf !== null && Yf.has(e);
    }
    function q1(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function G1(e) {
      Dm || (Dm = !0, LS = e);
    }
    var X1 = G1;
    function sR(e, t, a) {
      var i = Ks(a, t), u = l0(e, i, We), s = No(e, u, We), f = ba();
      s !== null && (vo(s, We, f), Ia(s, f));
    }
    function gn(e, t, a) {
      if (V_(a), Qp(!1), e.tag === B) {
        sR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === B) {
          sR(i, e, a);
          return;
        } else if (i.tag === te) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !oR(s)) {
            var f = Ks(a, e), p = lS(i, f, We), v = No(i, p, We), y = ba();
            v !== null && (vo(v, We, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function K1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ba();
      Kc(e, a), lx(e), Ta === e && hu(Sr, a) && (Er === Ap || Er === _m && Wc(Sr) && On() - OS < G0 ? tc(e, Y) : km = ut(km, a)), Ia(e, u);
    }
    function cR(e, t) {
      t === Vn && (t = L1(e));
      var a = ba(), i = Ba(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function J1(e) {
      var t = e.memoizedState, a = Vn;
      t !== null && (a = t.retryLane), cR(e, a);
    }
    function Z1(e, t) {
      var a = Vn, i;
      switch (e.tag) {
        case Oe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case $t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), cR(e, a);
    }
    function ex(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x1(e / 1960) * 1960;
    }
    function tx() {
      if (Bp > D1)
        throw Bp = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > O1 && (If = 0, Lm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function nx() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function fR(e, t) {
      Kt(e), Am(e, Mr, C1), t && Am(e, gl, R1), Am(e, Mr, S1), t && Am(e, gl, E1), bn();
    }
    function Am(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== je ? i = i.child : ((i.flags & t) !== je && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var jm = null;
    function dR(e) {
      {
        if ((kt & $r) !== gr || !(e.mode & yt))
          return;
        var t = e.tag;
        if (t !== ae && t !== B && t !== te && t !== me && t !== Ye && t !== ct && t !== Qe)
          return;
        var a = Je(e) || "ReactComponent";
        if (jm !== null) {
          if (jm.has(a))
            return;
          jm.add(a);
        } else
          jm = /* @__PURE__ */ new Set([a]);
        var i = er;
        try {
          Kt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Kt(e) : bn();
        }
      }
    }
    var PS;
    {
      var rx = null;
      PS = function(e, t, a) {
        var i = ER(rx, t);
        try {
          return w0(e, t, a);
        } catch (s) {
          if (hw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Yh(), xC(), L0(e, t), ER(t, i), t.mode & bt && Bg(t), Ma(null, w0, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var pR = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function ax(e) {
      if (Gr && !Ww())
        switch (e.tag) {
          case me:
          case Ye:
          case Qe: {
            var t = zn && Je(zn) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Je(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case te: {
            pR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), pR = !0);
            break;
          }
        }
    }
    function Ip(e, t) {
      if (_r) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Qv(e, i, t);
        });
      }
    }
    var BS = {};
    function $S(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), BS) : vd(e, t);
      }
    }
    function vR(e) {
      if (e !== BS)
        return hd(e);
    }
    function hR() {
      return ul.current !== null;
    }
    function ix(e) {
      {
        if (e.mode & yt) {
          if (!Q0())
            return;
        } else if (!_1() || kt !== gr || e.tag !== me && e.tag !== Ye && e.tag !== Qe)
          return;
        if (ul.current === null) {
          var t = er;
          try {
            Kt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Je(e));
          } finally {
            t ? Kt(e) : bn();
          }
        }
      }
    }
    function lx(e) {
      e.tag !== Do && Q0() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      J0 = e;
    }
    var Oi = null, Qf = null, ux = function(e) {
      Oi = e;
    };
    function Wf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return Wf(e);
    }
    function IS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Wf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: X,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function mR(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case te: {
            typeof i == "function" && (u = !0);
            break;
          }
          case me: {
            (typeof i == "function" || s === et) && (u = !0);
            break;
          }
          case Ye: {
            (s === X || s === et) && (u = !0);
            break;
          }
          case ct:
          case Qe: {
            (s === ht || s === et) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function yR(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var ox = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          QS(e.current, i, a);
        });
      }
    }, sx = function(e, t) {
      {
        if (e.context !== li)
          return;
        Au(), Uu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case me:
          case Qe:
          case te:
            v = p;
            break;
          case Ye:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Oi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === te ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = Ba(e, We);
          b !== null && Cr(b, e, We, qt);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var cx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case me:
          case Qe:
          case te:
            p = f;
            break;
          case Ye:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? fx(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function fx(e, t) {
      {
        var a = dx(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case $:
              t.add(i.stateNode);
              return;
            case W:
              t.add(i.stateNode.containerInfo);
              return;
            case B:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function dx(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === $)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var qS;
    {
      qS = !1;
      try {
        var gR = Object.preventExtensions({});
      } catch {
        qS = !0;
      }
    }
    function px(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = je, this.subtreeFlags = je, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !qS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new px(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vx(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function hx(e) {
      if (typeof e == "function")
        return GS(e) ? te : me;
      if (e != null) {
        var t = e.$$typeof;
        if (t === X)
          return Ye;
        if (t === ht)
          return ct;
      }
      return ae;
    }
    function rc(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = je, a.subtreeFlags = je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ae:
        case me:
        case Qe:
          a.type = Wf(e.type);
          break;
        case te:
          a.type = YS(e.type);
          break;
        case Ye:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function mx(e, t) {
      e.flags &= Pn | jn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = je, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function yx(e, t, a) {
      var i;
      return e === zh ? (i = yt, t === !0 && (i |= at, i |= tn)) : i = Fe, _r && (i |= bt), ui(B, null, null, i);
    }
    function XS(e, t, a, i, u, s) {
      var f = ae, p = e;
      if (typeof e == "function")
        GS(e) ? (f = te, p = YS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = $;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = zt, u |= at, (u & yt) !== Fe && (u |= tn);
            break;
          case fi:
            return gx(a, u, s, t);
          case de:
            return Sx(a, u, s, t);
          case ve:
            return Ex(a, u, s, t);
          case kn:
            return SR(a, u, s, t);
          case dn:
          case Et:
          case mn:
          case Tr:
          case ft:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = ot;
                  break e;
                case R:
                  f = Ht;
                  break e;
                case X:
                  f = Ye, p = IS(p);
                  break e;
                case ht:
                  f = ct;
                  break e;
                case et:
                  f = Gt, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Je(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function KS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = XS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(ue, e, i, t);
      return u.lanes = a, u;
    }
    function gx(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(Ot, e, i, t | bt);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Sx(e, t, a, i) {
      var u = ui(Oe, e, i, t);
      return u.elementType = de, u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      var u = ui($t, e, i, t);
      return u.elementType = ve, u.lanes = a, u;
    }
    function SR(e, t, a, i) {
      var u = ui(Be, e, i, t);
      u.elementType = kn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function JS(e, t, a) {
      var i = ui(oe, e, null, t);
      return i.lanes = a, i;
    }
    function Cx() {
      var e = ui($, null, null, Fe);
      return e.elementType = "DELETED", e;
    }
    function Rx(e) {
      var t = ui(an, null, null, Fe);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(W, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function ER(e, t) {
      return e === null && (e = ui(ae, null, null, Fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Tx(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vn, this.eventTimes = Xc(Y), this.expirationTimes = Xc(qt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = Xc(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case zh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Do:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function CR(e, t, a, i, u, s, f, p, v, y) {
      var g = new Tx(e, t, a, p, v), _ = yx(t, s);
      g.current = _, _.stateNode = g;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = b;
      }
      return dg(_), g;
    }
    var eE = "18.3.1";
    function bx(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ca(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: va,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var tE, nE;
    tE = !1, nE = {};
    function RR(e) {
      if (!e)
        return li;
      var t = ro(e), a = lw(t);
      if (t.tag === te) {
        var i = t.type;
        if (Al(i))
          return GE(t, i, a);
      }
      return a;
    }
    function wx(e, t) {
      {
        var a = ro(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Zr(a);
        if (u === null)
          return null;
        if (u.mode & at) {
          var s = Je(a) || "Component";
          if (!nE[s]) {
            nE[s] = !0;
            var f = er;
            try {
              Kt(u), a.mode & at ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Kt(f) : bn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function TR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return CR(e, t, v, y, a, i, u, s, f);
    }
    function bR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = CR(a, i, g, e, u, s, f, p, v);
      _.context = RR(null);
      var b = _.current, U = ba(), j = Po(b), H = Lu(U, j);
      return H.callback = t ?? null, No(b, H, j), N1(_, j, U), _;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = ba(), f = Po(u);
      xc(f);
      var p = RR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && er !== null && !tE && (tE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Je(er) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Cr(y, u, f, s), Gh(y, u, f)), f;
    }
    function Fm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case $:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function _x(e) {
      switch (e.tag) {
        case B: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Bv(t);
            A1(t, a);
          }
          break;
        }
        case Oe: {
          Uu(function() {
            var u = Ba(e, We);
            if (u !== null) {
              var s = ba();
              Cr(u, e, We, s);
            }
          });
          var i = We;
          rE(e, i);
          break;
        }
      }
    }
    function wR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function rE(e, t) {
      wR(e, t);
      var a = e.alternate;
      a && wR(a, t);
    }
    function xx(e) {
      if (e.tag === Oe) {
        var t = po, a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Cr(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function kx(e) {
      if (e.tag === Oe) {
        var t = Po(e), a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Cr(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function _R(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var xR = function(e) {
      return null;
    };
    function Dx(e) {
      return xR(e);
    }
    var kR = function(e) {
      return !1;
    };
    function Ox(e) {
      return kR(e);
    }
    var DR = null, OR = null, LR = null, NR = null, MR = null, zR = null, UR = null, AR = null, jR = null;
    {
      var FR = function(e, t, a) {
        var i = t[a], u = lt(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (lt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = FR(e[i], t, a + 1), u);
      }, HR = function(e, t) {
        return FR(e, t, 0);
      }, PR = function(e, t, a, i) {
        var u = t[i], s = lt(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], lt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = PR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, VR = function(e, t, a) {
        if (t.length !== a.length) {
          Ae("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ae("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return PR(e, t, a, 0);
      }, BR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = lt(e) ? e.slice() : rt({}, e);
        return s[u] = BR(e[u], t, a + 1, i), s;
      }, $R = function(e, t, a) {
        return BR(e, t, 0, a);
      }, aE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      DR = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = $R(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ba(e, We);
          f !== null && Cr(f, e, We, qt);
        }
      }, OR = function(e, t, a) {
        var i = aE(e, t);
        if (i !== null) {
          var u = HR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = Ba(e, We);
          s !== null && Cr(s, e, We, qt);
        }
      }, LR = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = VR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ba(e, We);
          f !== null && Cr(f, e, We, qt);
        }
      }, NR = function(e, t, a) {
        e.pendingProps = $R(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, We);
        i !== null && Cr(i, e, We, qt);
      }, MR = function(e, t) {
        e.pendingProps = HR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, We);
        a !== null && Cr(a, e, We, qt);
      }, zR = function(e, t, a) {
        e.pendingProps = VR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, We);
        i !== null && Cr(i, e, We, qt);
      }, UR = function(e) {
        var t = Ba(e, We);
        t !== null && Cr(t, e, We, qt);
      }, AR = function(e) {
        xR = e;
      }, jR = function(e) {
        kR = e;
      };
    }
    function Lx(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function Nx(e) {
      return null;
    }
    function Mx() {
      return er;
    }
    function zx(e) {
      var t = e.findFiberByHostInstance, a = qe.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: DR,
        overrideHookStateDeletePath: OR,
        overrideHookStateRenamePath: LR,
        overrideProps: NR,
        overridePropsDeletePath: MR,
        overridePropsRenamePath: zR,
        setErrorHandler: AR,
        setSuspenseHandler: jR,
        scheduleUpdate: UR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Lx,
        findFiberByHostInstance: t || Nx,
        // React Refresh
        findHostInstancesForRefresh: cx,
        scheduleRefresh: ox,
        scheduleRoot: sx,
        setRefreshHandler: ux,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Mx,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: eE
      });
    }
    var YR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function iE(e) {
      this._internalRoot = e;
    }
    Hm.prototype.render = iE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Pm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = _R(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Hm.prototype.unmount = iE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        nR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Wp(null, e, null, null);
        }), YE(t);
      }
    };
    function Ux(e, t) {
      if (!Pm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      IR(e);
      var a = !1, i = !1, u = "", s = YR;
      t != null && (t.hydrate ? Ae("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === or && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = TR(e, zh, null, a, i, u, s);
      xh(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return Zd(p), new iE(f);
    }
    function Hm(e) {
      this._internalRoot = e;
    }
    function Ax(e) {
      e && Zv(e);
    }
    Hm.prototype.unstable_scheduleHydration = Ax;
    function jx(e, t, a) {
      if (!Pm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      IR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = YR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = bR(t, null, e, zh, i, s, f, p, v);
      if (xh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Vw(y, _);
        }
      return new Hm(y);
    }
    function Pm(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === $i || e.nodeType === Ko));
    }
    function qp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === $i || e.nodeType === Ko || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function IR(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Fx = qe.ReactCurrentOwner, QR;
    QR = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = _R(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = lE(e), u = !!(i && xo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function lE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function WR() {
    }
    function Hx(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Fm(f);
            s.call(b);
          };
        }
        var f = bR(
          t,
          i,
          e,
          Do,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WR
        );
        e._reactRootContainer = f, xh(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return Zd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Fm(g);
            y.call(b);
          };
        }
        var g = TR(
          e,
          Do,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          WR
        );
        e._reactRootContainer = g, xh(g.current, e);
        var _ = e.nodeType === An ? e.parentNode : e;
        return Zd(_), Uu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function Px(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      QR(a), Px(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Hx(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Fm(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return Fm(f);
    }
    var qR = !1;
    function Vx(e) {
      {
        qR || (qR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Fx.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : wx(e, "findDOMNode");
    }
    function Bx(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function $x(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function Yx(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var GR = !1;
    function Ix(e) {
      if (GR || (GR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = lE(e), i = a && !xo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, YE(e);
          });
        }), !0;
      } else {
        {
          var u = lE(e), s = !!(u && xo(u)), f = e.nodeType === Xr && qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    iy(_x), jd(xx), ly(kx), tf(ga), Gv(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ls(WT), xv(jS, j1, Uu);
    function Qx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Pm(t))
        throw new Error("Target container is not a DOM element.");
      return bx(e, t, null, a);
    }
    function Wx(e, t, a, i) {
      return Yx(e, t, a, i);
    }
    var uE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xo, bf, kh, ud, Zu, jS]
    };
    function qx(e, t) {
      return uE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ux(e, t);
    }
    function Gx(e, t, a) {
      return uE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jx(e, t, a);
    }
    function Xx(e) {
      return nR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Kx = zx({
      findFiberByHostInstance: Bs,
      bundleType: 1,
      version: eE,
      rendererPackageName: "react-dom"
    });
    if (!Kx && xn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var XR = window.location.protocol;
      /^(https?|file):$/.test(XR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uE, Wa.createPortal = Qx, Wa.createRoot = qx, Wa.findDOMNode = Vx, Wa.flushSync = Xx, Wa.hydrate = Bx, Wa.hydrateRoot = Gx, Wa.render = $x, Wa.unmountComponentAtNode = Ix, Wa.unstable_batchedUpdates = jS, Wa.unstable_renderSubtreeIntoContainer = Wx, Wa.version = eE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var sT = {};
function cT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (sT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT);
    } catch (V) {
      console.error(V);
    }
  }
}
sT.NODE_ENV === "production" ? (cT(), vE.exports = sk()) : vE.exports = ck();
var fk = vE.exports, hE, dk = {}, $m = fk;
if (dk.NODE_ENV === "production")
  hE = $m.createRoot, $m.hydrateRoot;
else {
  var lT = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hE = function(V, q) {
    lT.usingClientEntryPoint = !0;
    try {
      return $m.createRoot(V, q);
    } finally {
      lT.usingClientEntryPoint = !1;
    }
  };
}
const pk = (V) => {
  if (!V.designOptions || V.designOptions !== "custom_design") return;
  const q = JSON.parse(V.customDesigns);
  document.documentElement.style.setProperty("--barn2-bundles-bundle-text-color", q.bundleTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-text-color", q.highlightedTextColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-border-color", q.bundleBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-border-color", q.highlightedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-color", q.highlightedColor), document.documentElement.style.setProperty("--barn2-bundles-selected-text-color", q.selectedTextColor), document.documentElement.style.setProperty("--barn2-bundles-selected-border-color", q.selectedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-selected-color", q.selectedColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-badge-color", q.badgeBackgroundColor), document.documentElement.style.setProperty("--barn2-bundles-badge-text-color", q.badgeTextColor), document.documentElement.style.setProperty("--barn2-bundles-table-color", q.tableColor), document.documentElement.style.setProperty("--barn2-bundles-header-text-color", q.headerTextColor), document.documentElement.style.setProperty("--barn2-bundles-background-color", q.backgroundColor), document.documentElement.style.setProperty("--barn2-bundles-text-color", q.textColor), document.documentElement.style.setProperty("--barn2-bundles-label-color", q.labelColor), document.documentElement.style.setProperty("--barn2-bundles-label-text-color", q.lebelTextColor), document.documentElement.style.setProperty("--barn2-bundles-border-color", q.borderColor);
  let D = "0";
  switch (q.cornerRadius) {
    case "slightlyRounded":
      D = "8px";
      break;
    case "fullyRounded":
      D = "15px";
      break;
    case "square":
    default:
      D = "0";
  }
  document.documentElement.style.setProperty("--barn2-bundles-corner-radius", D);
}, fT = () => {
  const V = document.querySelector(".product-form__input.product-form__quantity, quantity-selector-component.quantity-selector");
  V && (V.style.display = "block");
  const q = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker");
  q && (q.style.display = "block");
};
var dT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(V) {
  (function() {
    var q = function() {
      function D() {
      }
      D.prototype = /* @__PURE__ */ Object.create(null);
      function qe(ae, B) {
        for (var W = B.length, $ = 0; $ < W; ++$)
          me(ae, B[$]);
      }
      var De = {}.hasOwnProperty;
      function pt(ae, B) {
        ae[B] = !0;
      }
      function Ae(ae, B) {
        if (B.toString !== Object.prototype.toString && !B.toString.toString().includes("[native code]")) {
          ae[B.toString()] = !0;
          return;
        }
        for (var W in B)
          De.call(B, W) && (ae[W] = !!B[W]);
      }
      var S = /\s+/;
      function Ie(ae, B) {
        for (var W = B.split(S), $ = W.length, oe = 0; oe < $; ++oe)
          ae[W[oe]] = !0;
      }
      function me(ae, B) {
        if (B) {
          var W = typeof B;
          W === "string" ? Ie(ae, B) : Array.isArray(B) ? qe(ae, B) : W === "object" ? Ae(ae, B) : W === "number" && pt(ae, B);
        }
      }
      function te() {
        for (var ae = arguments.length, B = Array(ae), W = 0; W < ae; W++)
          B[W] = arguments[W];
        var $ = new D();
        qe($, B);
        var oe = [];
        for (var ue in $)
          $[ue] && oe.push(ue);
        return oe.join(" ");
      }
      return te;
    }();
    V.exports ? (q.default = q, V.exports = q) : window.classNames = q;
  })();
})(dT);
var vk = dT.exports;
const cE = /* @__PURE__ */ ek(vk);
function hk({
  bundleData: V,
  isInEditor: q,
  currentVariant: D,
  storeDetails: qe
}) {
  var Q, Te, ce, x;
  const [De, pt] = Ft.useState(null), [Ae, S] = Ft.useState([]), [Ie, me] = Ft.useState(), [te, ae] = Ft.useState([]), [B, W] = Ft.useState(((Te = (Q = window.b2ProductData) == null ? void 0 : Q.product) == null ? void 0 : Te.options) || []), [$, oe] = Ft.useState(((x = (ce = window.b2ProductData) == null ? void 0 : ce.product) == null ? void 0 : x.variants) || []), [ue, zt] = Ft.useState([]), Ht = Ft.useRef(ue), ot = Ft.useRef(De), Ye = (k) => {
    const G = typeof k == "number" ? k % 1 === 0 ? k.toString() : k.toFixed(2) : k;
    return qe.moneyFormat.replace("{{amount}}", G);
  }, Ot = (k) => {
    let G = "";
    return k.discount_type === "amount" ? G = /* @__PURE__ */ Ve.jsxs("span", { children: [
      "Save ",
      Ye(k.discount)
    ] }) : G = /* @__PURE__ */ Ve.jsxs("span", { children: [
      "Save ",
      k.discount,
      "%"
    ] }), k.discount || (G = /* @__PURE__ */ Ve.jsx("span", { children: "Regular price" })), G;
  }, Oe = (k) => (q ? window.b2ProductData.product.price : D.price) / 100, ct = (k, G = "discounted") => {
    let ie = 0;
    if (De && ue && k.id === (De == null ? void 0 : De.id) ? ie = ue.reduce((Me, Re) => Me + Re.price / 100, 0) : ie = Oe() * k.quantity, G === "regular")
      return Qe(ie);
    let Ee = ie;
    if (k.discount_type === "percentage" && k.discount) {
      const Le = ie * k.discount / 100;
      Ee = ie - Le;
    } else k.discount_type === "amount" && k.discount && (Ee = ie - k.discount);
    return Qe(Ee);
  }, Qe = (k) => {
    const G = Number(k), ie = Number(G.toFixed(2));
    return Ye(ie);
  }, Gt = (k) => {
    const G = document.querySelector('.product-form__input.product-form__quantity input[type="number"], input[name="quantity"]');
    G && (G.value = k, G.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, Lt = () => {
    const k = document.querySelector('.product-variant-id, [ref="variantId"]');
    k && (k.value = D.id, k.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, an = (k) => De ? De.id === k.id : !1, $t = (k, G) => {
    if (!(ue != null && ue[k])) return "";
    const ie = ue[k].options;
    return (ie == null ? void 0 : ie[G]) || "";
  }, gt = () => {
    if (De === null) return;
    const k = Array.from({ length: De.quantity }, () => ({
      available: D.available,
      id: D.id,
      options: [...D.options],
      price: D.price
    }));
    zt(k);
  }, Be = (k) => {
    new URL(window.location.href).searchParams.set("variant", k), window.dispatchEvent(new Event("popstate"));
    const ie = document.querySelector('.product-variant-id, [ref="variantId"]');
    ie && (ie.value = k, ie.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, Ut = (k, G, ie) => {
    zt((Ee) => {
      const Le = Ee.map((Re, Ze) => Ze === G ? {
        ...Re,
        options: Re.options.map(
          (St, sn) => sn === ie ? k.target.value : St
        )
      } : Re), Me = $.find((Re) => Re.options.every(
        (Ze, St) => Ze === Le[G].options[St]
      ));
      return Be(Me.id), Le[G].id = Me.id, Le[G].available = Me.available, Le[G].price = Me.price, Le;
    });
  };
  Ft.useEffect(() => {
    const k = Ae.find((G) => G.highlighted);
    k && (Gt(k.quantity), $.length > 1 ? pt(k) : (Gt(k.quantity), vt()));
  }, [Ae]), Ft.useEffect(() => {
    gt();
  }, [De, D]), Ft.useEffect(() => {
    De !== null && (Gt(De.quantity), vt(), ot.current = De);
  }, [De]), Ft.useEffect(() => {
    const k = (Ee, Le = 5e3) => new Promise((Me, Re) => {
      const Ze = Date.now(), St = () => {
        const sn = document.querySelector(Ee);
        sn ? Me(sn) : Date.now() - Ze > Le ? Re(new Error(`Element ${Ee} not found within ${Le}ms`)) : setTimeout(St, 100);
      };
      St();
    }), G = async () => {
      try {
        const Ee = await k('form[action="/cart/add"] [type="submit"]'), Le = (Me) => {
          const Re = document.querySelector('[action="/cart/add"] [type="submit"]');
          if (!(Re != null && Re.classList.contains("b2-different-variants-selected")))
            return;
          Me.preventDefault(), Me.target.setAttribute("disabled", "disabled");
          const Ze = document.querySelector('.product-variant-id, [ref="variantId"]'), St = Ht.current, sn = ot.current;
          let xn = !1;
          const Tn = St.filter((Nt) => Nt.id === parseInt(Ze.value) && !xn ? (xn = !0, !1) : !0).filter((Nt) => Nt.available).map((Nt) => Nt.id).reduce((Nt, cn) => (Nt[cn] = (Nt[cn] || 0) + 1, Nt), {}), Xn = {
            items: Object.entries(Tn).map(([Nt, cn]) => ({
              id: parseInt(Nt),
              quantity: cn,
              properties: {
                _barn2_discount_campaign_name: V.name,
                _barn2_discount_bundle_type: "volume_discount",
                _barn2_discount_volume_bundles: V.volumeBundles || ""
              }
            }))
          };
          fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(Xn)
          }).then(() => {
            Re.removeAttribute("disabled");
            const Nt = new SubmitEvent("submit", {
              bubbles: !0,
              cancelable: !0
            });
            (Re == null ? void 0 : Re.closest("form")).dispatchEvent(Nt);
          });
        };
        return Ee.addEventListener("click", Le), () => {
          Ee.removeEventListener("click", Le);
        };
      } catch {
        return () => {
        };
      }
    };
    let ie = null;
    return G().then((Ee) => {
      ie = Ee;
    }), () => {
      ie && ie();
    };
  }, []), Ft.useEffect(() => {
    if (ue.length === 0) return;
    Ht.current = ue;
    const k = ue.every(
      (Ee, Le, Me) => Ee.id === Me[0].id
    ), G = document.querySelector('[action="/cart/add"] [type="submit"]'), ie = document.querySelector(".shopify-payment-button");
    k ? (Gt(ue.length), G == null || G.classList.remove("b2-different-variants-selected"), ie && (ie.style.display = "")) : (Gt(1), G == null || G.classList.add("b2-different-variants-selected"), ie && (ie.style.display = "none"));
  }, [ue]), Ft.useEffect(() => {
    S(JSON.parse(V.volumeBundles || [])), ae(JSON.parse(V.previewOptions || {})), me(V.layout);
  }, []);
  const vt = (k) => {
    const G = document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]');
    if (!G)
      return;
    const ie = (Ee, Le) => {
      let Me = G.querySelector(`input[name="${Ee}"]`);
      Me ? Me.value = Le : (Me = document.createElement("input"), Me.type = "hidden", Me.name = Ee, Me.value = Le, G.appendChild(Me));
    };
    ie(
      "properties[_barn2_discount_campaign_name]",
      V.name || ""
    ), ie(
      "properties[_barn2_discount_bundle_type]",
      "volume_discount"
    ), ie(
      "properties[_barn2_discount_volume_bundles]",
      V.volumeBundles || ""
    );
  };
  return /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-discount-bundles", children: [
    V.previewEnabled && /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
      (te == null ? void 0 : te.title) && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Ve.jsx("span", { children: te == null ? void 0 : te.title }) }),
      (te == null ? void 0 : te.description) && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Ve.jsx("span", { children: te == null ? void 0 : te.description }) })
    ] }),
    /* @__PURE__ */ Ve.jsx(
      "div",
      {
        className: cE(
          "barn2-discount-bundles-list",
          `barn2-dbs-layout-${Ie}`,
          `discount-columns-${Ae.length}`
        ),
        children: Ae.map((k, G) => /* @__PURE__ */ Ve.jsxs(
          "div",
          {
            className: cE(
              "barn2-discount-bundle",
              {
                highlighted: k.highlighted,
                selected: an(k)
              }
            ),
            onClick: () => {
              pt(k), (De == null ? void 0 : De.id) !== (k == null ? void 0 : k.id) && (Gt(k.quantity), Lt());
            },
            children: [
              k.label.length > 0 && /* @__PURE__ */ Ve.jsx("span", { className: "barn2-highlighted-text", children: k.label }),
              /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-dbs-top", children: [
                /* @__PURE__ */ Ve.jsx("span", { className: "barn2-input-circle" }),
                /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-dbs-text-block-wrapper", children: [
                  /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-dbs-text-block", children: [
                    /* @__PURE__ */ Ve.jsx("h4", { className: "barn2-dbs-bundle-title", children: k.description }),
                    te.amountSaved && /* @__PURE__ */ Ve.jsx("p", { children: Ot(k) })
                  ] }),
                  V.layout === "horizontal" && an(k) && $.length > 1 && it()
                ] })
              ] }),
              /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-dbs-bottom", children: [
                /* @__PURE__ */ Ve.jsx("span", { className: "barn2-dbs-price", children: ct(k, "discounted") }),
                te.showOriginalPrice && k.discount && /* @__PURE__ */ Ve.jsx(
                  "span",
                  {
                    className: cE(
                      "barn2-dbs-regular-price",
                      {
                        "price-strike-through": parseFloat(k.discount) !== 0
                      }
                    ),
                    children: ct(k, "regular")
                  }
                )
              ] })
            ]
          },
          G
        ))
      }
    ),
    V.layout === "vertical" && $.length > 1 && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-bars-wrapper", children: it() })
  ] });
  function it() {
    return /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-bars", children: Array.from({ length: De == null ? void 0 : De.quantity }).map((k, G) => {
      var ie, Ee;
      return /* @__PURE__ */ Ve.jsxs("div", { children: [
        /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-db-bar", "data-variant-available": (ie = ue[G]) == null ? void 0 : ie.available, children: [
          /* @__PURE__ */ Ve.jsx("span", { className: "barn2-db-bar-number", children: G + 1 }),
          /* @__PURE__ */ Ve.jsx("div", { className: `barn2-dbs-select-variants barn2-dbs-variants-number-${B.length}`, children: B.map((Le, Me) => /* @__PURE__ */ Ve.jsx("div", { className: "barn2-dbs-variant", children: /* @__PURE__ */ Ve.jsx(
            "select",
            {
              value: $t(G, Me),
              onChange: (Re) => {
                Ut(Re, G, Me);
              },
              children: Le.values.map((Re, Ze) => /* @__PURE__ */ Ve.jsx("option", { value: Re, children: Re }, Ze))
            }
          ) }, Me)) })
        ] }),
        !((Ee = ue[G]) != null && Ee.available) && /* @__PURE__ */ Ve.jsx("p", { className: "barn2-dbs-stock-unavailable", children: "Sorry, this is currently unavailable." })
      ] }, G);
    }) });
  }
}
function mk({
  bundleData: V,
  isInEditor: q,
  currentVariant: D,
  storeDetails: qe
}) {
  const [De, pt] = Ft.useState([]), [Ae, S] = Ft.useState([]);
  Ft.useEffect(() => {
    pt(JSON.parse(V.pricingTiers || [])), S(JSON.parse(V.previewOptions || {})), V && B(), fT();
  }, []);
  const Ie = (W) => {
    let $;
    return W.discount_type === "percentage" ? $ = W.discount + "% off" : $ = ae(W.discount) + " off", /* @__PURE__ */ Ve.jsx("span", { className: "b2-pricing-tier-discount", children: $ });
  }, me = () => (q ? window.b2ProductData.product.price : D.price) / 100, te = (W) => {
    let $ = me();
    if (W.discount_type === "percentage" && W.discount) {
      const oe = me() * W.discount / 100;
      $ = me() - oe;
    } else W.discount_type === "amount" && W.discount && ($ = me() - W.discount);
    return Math.max(0, $.toFixed(2));
  }, ae = (W) => {
    const $ = typeof W == "number" ? W % 1 === 0 ? W.toString() : W.toFixed(2) : W;
    return qe.moneyFormat.replace("{{amount}}", $);
  }, B = () => {
    const W = document.querySelector("product-form.product-form form");
    if (!W)
      return;
    const $ = (oe, ue) => {
      let zt = W.querySelector(`input[name="${oe}"]`);
      zt ? zt.value = ue : (zt = document.createElement("input"), zt.type = "hidden", zt.name = oe, zt.value = ue, W.appendChild(zt));
    };
    $(
      "properties[_barn2_discount_campaign_name]",
      V.name || ""
    ), $(
      "properties[_barn2_discount_bundle_type]",
      "bulk_pricing"
    ), $(
      "properties[_barn2_discount_pricing_tiers]",
      V.pricingTiers || ""
    ), $(
      "properties[_barn2_discount_applies_to]",
      V.discountCalculation || "individual_products"
    );
  };
  return V.previewEnabled ? /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-bulk-table-wrapper", children: [
    V.previewEnabled && /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
      (Ae == null ? void 0 : Ae.title) && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Ve.jsx("span", { children: Ae == null ? void 0 : Ae.title }) }),
      (Ae == null ? void 0 : Ae.description) && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Ve.jsx("span", { children: Ae == null ? void 0 : Ae.description }) })
    ] }),
    /* @__PURE__ */ Ve.jsx("div", { className: "barn2-bulk-table-container", children: /* @__PURE__ */ Ve.jsxs("table", { className: "barn2-bulk-table", children: [
      /* @__PURE__ */ Ve.jsx("thead", { children: /* @__PURE__ */ Ve.jsxs("tr", { children: [
        /* @__PURE__ */ Ve.jsx("th", { children: "Quantity" }),
        /* @__PURE__ */ Ve.jsx("th", { children: "Discount" }),
        /* @__PURE__ */ Ve.jsx("th", { children: "Price per item" })
      ] }) }),
      /* @__PURE__ */ Ve.jsx("tbody", { children: De.length > 0 && De.map((W, $) => /* @__PURE__ */ Ve.jsxs("tr", { children: [
        /* @__PURE__ */ Ve.jsxs("td", { children: [
          W.min_quantity,
          "-",
          W.max_quantity
        ] }),
        /* @__PURE__ */ Ve.jsx("td", { children: /* @__PURE__ */ Ve.jsx("span", { className: "discount-pill", children: Ie(W) }) }),
        /* @__PURE__ */ Ve.jsx("td", { children: ae(te(W)) })
      ] }, $)) })
    ] }) })
  ] }) : null;
}
function yk({ bundleData: V, isInEditor: q, storeDetails: D }) {
  const [qe, De] = Ft.useState(null), [pt, Ae] = Ft.useState(!1), S = () => {
    var B, W;
    const ae = ((W = (B = window.b2ProductData) == null ? void 0 : B.product) == null ? void 0 : W.variants) || [];
    return ae.length > 0 ? ae[0] : 0;
  }, Ie = (ae) => {
    var $, oe;
    const W = (((oe = ($ = window.b2ProductData) == null ? void 0 : $.product) == null ? void 0 : oe.variants) || []).find((ue) => ue.id === Number(ae));
    W && De(W);
  }, me = () => {
    const ae = document.querySelector(".product-form__input.product-form__quantity, quantity-selector-component.quantity-selector");
    ae && (ae.style.display = "none");
  }, te = () => {
    const ae = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker");
    ae && (ae.style.display = "none");
  };
  if (Ft.useEffect(() => {
    const B = new URLSearchParams(window.location.search).get("variant");
    B ? Ie(B) : De(S());
    const W = new MutationObserver((oe) => {
      oe.forEach((ue) => {
        if (ue.type === "attributes" || ue.type === "childList") {
          const Ht = new URLSearchParams(window.location.search).get("variant");
          Ht && Ie(Ht);
        }
      });
    }), $ = document.querySelector("form[action*='/cart/add']");
    return $ && W.observe($, { attributes: !0, childList: !0, subtree: !0 }), () => {
      W.disconnect();
    };
  }, []), Ft.useEffect(() => {
    const ae = new MutationObserver((W) => {
      W.forEach(($) => {
        var ue;
        $.target.closest('form[action*="/cart/add"]') && $.type === "attributes" && $.attributeName === "class" && !$.target.classList.contains("loading") && (ue = $.oldValue) != null && ue.includes("loading") && Ae(!0);
      });
    }), B = document.querySelector('form[action*="/cart/add"] button[type="submit"]');
    return B && ae.observe(B, {
      attributes: !0,
      attributeOldValue: !0
    }), () => {
      ae.disconnect();
    };
  }, []), Ft.useEffect(() => {
    pk(V), V.type === "volume_bundle" && (me(), te());
  }, []), qe !== null) {
    if (qe !== null && V.type === "volume_bundle")
      return /* @__PURE__ */ Ve.jsx(
        hk,
        {
          bundleData: V,
          isInEditor: q,
          currentVariant: qe,
          storeDetails: D
        }
      );
    if (qe !== null && V.type === "bulk_pricing")
      return /* @__PURE__ */ Ve.jsx(
        mk,
        {
          bundleData: V,
          isInEditor: q,
          currentVariant: qe,
          storeDetails: D
        }
      );
  }
}
function gk() {
  var ae, B, W, $;
  const [V, q] = Ft.useState((W = (B = (ae = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : ae.meta) == null ? void 0 : B.product) == null ? void 0 : W.id), [D, qe] = Ft.useState(null), [De, pt] = Ft.useState((($ = window == null ? void 0 : window.b2ProductData) == null ? void 0 : $.isDesignMode) || !1), [Ae, S] = Ft.useState({}), [Ie, me] = Ft.useState(!1), te = async (oe) => {
    try {
      return await (await fetch("/apps/barn2-bundles-bulk-discounts/discountbundle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: oe,
          isInEditor: De
        })
      })).json();
    } catch {
      return me(!0), null;
    }
  };
  return Ft.useEffect(() => {
    (async () => {
      try {
        const ue = await te(V);
        if ((ue == null ? void 0 : ue.success) === !1) {
          me(!0);
          return;
        } else
          qe(ue == null ? void 0 : ue.eligibleProductBundle), S(ue == null ? void 0 : ue.store);
      } catch {
      }
    })();
  }, [V, De]), Ft.useEffect(() => {
    Ie && fT();
  }, [Ie]), D && /* @__PURE__ */ Ve.jsx(
    yk,
    {
      bundleData: D,
      isInEditor: De,
      storeDetails: Ae,
      unHideQuantityVariantBlocks: Ie
    }
  );
}
const fE = (V) => {
  hE(V).render(/* @__PURE__ */ Ve.jsx(gk, {}));
}, uT = document.getElementById("barn2_discounts_block");
if (uT)
  fE(uT);
else {
  const V = document.querySelector("product-form-component"), q = document.querySelector('form[action="/cart/add"]');
  if (V) {
    const D = document.createElement("div");
    D.id = "barn2_discounts", D.classList.add("barn2_discounts"), V.insertBefore(D, V.firstChild), fE(D);
  } else if (q) {
    const D = document.createElement("div");
    D.id = "barn2_discounts", D.classList.add("barn2_discounts"), q.parentNode.insertBefore(D, q), fE(D);
  }
}
