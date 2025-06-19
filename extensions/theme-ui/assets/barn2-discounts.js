function tk(H) {
  return H && H.__esModule && Object.prototype.hasOwnProperty.call(H, "default") ? H.default : H;
}
var pE = { exports: {} }, Kp = {}, vE = { exports: {} }, wt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JR;
function nk() {
  if (JR) return wt;
  JR = 1;
  var H = Symbol.for("react.element"), W = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), Ue = Symbol.for("react.strict_mode"), De = Symbol.for("react.profiler"), pt = Symbol.for("react.provider"), Ae = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Qe = Symbol.for("react.suspense"), me = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), ae = Symbol.iterator;
  function B(x) {
    return x === null || typeof x != "object" ? null : (x = ae && x[ae] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, I = Object.assign, ce = {};
  function oe(x, k, K) {
    this.props = x, this.context = k, this.refs = ce, this.updater = K || q;
  }
  oe.prototype.isReactComponent = {}, oe.prototype.setState = function(x, k) {
    if (typeof x != "object" && typeof x != "function" && x != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, x, k, "setState");
  }, oe.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function gn() {
  }
  gn.prototype = oe.prototype;
  function Ft(x, k, K) {
    this.props = x, this.context = k, this.refs = ce, this.updater = K || q;
  }
  var ot = Ft.prototype = new gn();
  ot.constructor = Ft, I(ot, oe.prototype), ot.isPureReactComponent = !0;
  var Ye = Array.isArray, Ot = Object.prototype.hasOwnProperty, Oe = { current: null }, ct = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(x, k, K) {
    var le, Te = {}, Me = null, Ie = null;
    if (k != null) for (le in k.ref !== void 0 && (Ie = k.ref), k.key !== void 0 && (Me = "" + k.key), k) Ot.call(k, le) && !ct.hasOwnProperty(le) && (Te[le] = k[le]);
    var Ce = arguments.length - 2;
    if (Ce === 1) Te.children = K;
    else if (1 < Ce) {
      for (var Ze = Array(Ce), St = 0; St < Ce; St++) Ze[St] = arguments[St + 2];
      Te.children = Ze;
    }
    if (x && x.defaultProps) for (le in Ce = x.defaultProps, Ce) Te[le] === void 0 && (Te[le] = Ce[le]);
    return { $$typeof: H, type: x, key: Me, ref: Ie, props: Te, _owner: Oe.current };
  }
  function qt(x, k) {
    return { $$typeof: H, type: x.type, key: k, ref: x.ref, props: x.props, _owner: x._owner };
  }
  function Lt(x) {
    return typeof x == "object" && x !== null && x.$$typeof === H;
  }
  function rn(x) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(K) {
      return k[K];
    });
  }
  var Bt = /\/+/g;
  function gt(x, k) {
    return typeof x == "object" && x !== null && x.key != null ? rn("" + x.key) : k.toString(36);
  }
  function Be(x, k, K, le, Te) {
    var Me = typeof x;
    (Me === "undefined" || Me === "boolean") && (x = null);
    var Ie = !1;
    if (x === null) Ie = !0;
    else switch (Me) {
      case "string":
      case "number":
        Ie = !0;
        break;
      case "object":
        switch (x.$$typeof) {
          case H:
          case W:
            Ie = !0;
        }
    }
    if (Ie) return Ie = x, Te = Te(Ie), x = le === "" ? "." + gt(Ie, 0) : le, Ye(Te) ? (K = "", x != null && (K = x.replace(Bt, "$&/") + "/"), Be(Te, k, K, "", function(St) {
      return St;
    })) : Te != null && (Lt(Te) && (Te = qt(Te, K + (!Te.key || Ie && Ie.key === Te.key ? "" : ("" + Te.key).replace(Bt, "$&/") + "/") + x)), k.push(Te)), 1;
    if (Ie = 0, le = le === "" ? "." : le + ":", Ye(x)) for (var Ce = 0; Ce < x.length; Ce++) {
      Me = x[Ce];
      var Ze = le + gt(Me, Ce);
      Ie += Be(Me, k, K, Ze, Te);
    }
    else if (Ze = B(x), typeof Ze == "function") for (x = Ze.call(x), Ce = 0; !(Me = x.next()).done; ) Me = Me.value, Ze = le + gt(Me, Ce++), Ie += Be(Me, k, K, Ze, Te);
    else if (Me === "object") throw k = String(x), Error("Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead.");
    return Ie;
  }
  function zt(x, k, K) {
    if (x == null) return x;
    var le = [], Te = 0;
    return Be(x, le, "", "", function(Me) {
      return k.call(K, Me, Te++);
    }), le;
  }
  function vt(x) {
    if (x._status === -1) {
      var k = x._result;
      k = k(), k.then(function(K) {
        (x._status === 0 || x._status === -1) && (x._status = 1, x._result = K);
      }, function(K) {
        (x._status === 0 || x._status === -1) && (x._status = 2, x._result = K);
      }), x._status === -1 && (x._status = 0, x._result = k);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var it = { current: null }, Q = { transition: null }, Re = { ReactCurrentDispatcher: it, ReactCurrentBatchConfig: Q, ReactCurrentOwner: Oe };
  function se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: zt, forEach: function(x, k, K) {
    zt(x, function() {
      k.apply(this, arguments);
    }, K);
  }, count: function(x) {
    var k = 0;
    return zt(x, function() {
      k++;
    }), k;
  }, toArray: function(x) {
    return zt(x, function(k) {
      return k;
    }) || [];
  }, only: function(x) {
    if (!Lt(x)) throw Error("React.Children.only expected to receive a single React element child.");
    return x;
  } }, wt.Component = oe, wt.Fragment = D, wt.Profiler = De, wt.PureComponent = Ft, wt.StrictMode = Ue, wt.Suspense = Qe, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Re, wt.act = se, wt.cloneElement = function(x, k, K) {
    if (x == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + x + ".");
    var le = I({}, x.props), Te = x.key, Me = x.ref, Ie = x._owner;
    if (k != null) {
      if (k.ref !== void 0 && (Me = k.ref, Ie = Oe.current), k.key !== void 0 && (Te = "" + k.key), x.type && x.type.defaultProps) var Ce = x.type.defaultProps;
      for (Ze in k) Ot.call(k, Ze) && !ct.hasOwnProperty(Ze) && (le[Ze] = k[Ze] === void 0 && Ce !== void 0 ? Ce[Ze] : k[Ze]);
    }
    var Ze = arguments.length - 2;
    if (Ze === 1) le.children = K;
    else if (1 < Ze) {
      Ce = Array(Ze);
      for (var St = 0; St < Ze; St++) Ce[St] = arguments[St + 2];
      le.children = Ce;
    }
    return { $$typeof: H, type: x.type, key: Te, ref: Me, props: le, _owner: Ie };
  }, wt.createContext = function(x) {
    return x = { $$typeof: Ae, _currentValue: x, _currentValue2: x, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, x.Provider = { $$typeof: pt, _context: x }, x.Consumer = x;
  }, wt.createElement = We, wt.createFactory = function(x) {
    var k = We.bind(null, x);
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
  }, wt.unstable_act = se, wt.useCallback = function(x, k) {
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
  }, wt.useImperativeHandle = function(x, k, K) {
    return it.current.useImperativeHandle(x, k, K);
  }, wt.useInsertionEffect = function(x, k) {
    return it.current.useInsertionEffect(x, k);
  }, wt.useLayoutEffect = function(x, k) {
    return it.current.useLayoutEffect(x, k);
  }, wt.useMemo = function(x, k) {
    return it.current.useMemo(x, k);
  }, wt.useReducer = function(x, k, K) {
    return it.current.useReducer(x, k, K);
  }, wt.useRef = function(x) {
    return it.current.useRef(x);
  }, wt.useState = function(x) {
    return it.current.useState(x);
  }, wt.useSyncExternalStore = function(x, k, K) {
    return it.current.useSyncExternalStore(x, k, K);
  }, wt.useTransition = function() {
    return it.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var Zp = { exports: {} };
Zp.exports;
var ZR;
function rk() {
  return ZR || (ZR = 1, function(H, W) {
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
      var Ue = "18.3.1", De = Symbol.for("react.element"), pt = Symbol.for("react.portal"), Ae = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), te = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), q = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), ce = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), gn = Symbol.iterator, Ft = "@@iterator";
      function ot(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = gn && h[gn] || h[Ft];
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
      }, We = {}, qt = null;
      function Lt(h) {
        qt = h;
      }
      We.setExtraStackFrame = function(h) {
        qt = h;
      }, We.getCurrentStack = null, We.getStackAddendum = function() {
        var h = "";
        qt && (h += qt);
        var C = We.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var rn = !1, Bt = !1, gt = !1, Be = !1, zt = !1, vt = {
        ReactCurrentDispatcher: Ye,
        ReactCurrentBatchConfig: Ot,
        ReactCurrentOwner: ct
      };
      vt.ReactDebugCurrentFrame = We, vt.ReactCurrentActQueue = Oe;
      function it(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          Re("warn", h, z);
        }
      }
      function Q(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            z[F - 1] = arguments[F];
          Re("error", h, z);
        }
      }
      function Re(h, C, z) {
        {
          var F = vt.ReactDebugCurrentFrame, re = F.getStackAddendum();
          re !== "" && (C += "%s", z = z.concat([re]));
          var we = z.map(function(ye) {
            return String(ye);
          });
          we.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, we);
        }
      }
      var se = {};
      function x(h, C) {
        {
          var z = h.constructor, F = z && (z.displayName || z.name) || "ReactClass", re = F + "." + C;
          if (se[re])
            return;
          Q("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), se[re] = !0;
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
      }, K = Object.assign, le = {};
      Object.freeze(le);
      function Te(h, C, z) {
        this.props = h, this.context = C, this.refs = le, this.updater = z || k;
      }
      Te.prototype.isReactComponent = {}, Te.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Te.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Me = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ie = function(h, C) {
          Object.defineProperty(Te.prototype, h, {
            get: function() {
              it("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ce in Me)
          Me.hasOwnProperty(Ce) && Ie(Ce, Me[Ce]);
      }
      function Ze() {
      }
      Ze.prototype = Te.prototype;
      function St(h, C, z) {
        this.props = h, this.context = C, this.refs = le, this.updater = z || k;
      }
      var on = St.prototype = new Ze();
      on.constructor = St, K(on, Te.prototype), on.isPureReactComponent = !0;
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
          return sn(h), !1;
        } catch {
          return !0;
        }
      }
      function sn(h) {
        return "" + h;
      }
      function ca(h) {
        if (Nt(h))
          return Q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(h)), sn(h);
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
          case Qe:
            return "Profiler";
          case S:
            return "StrictMode";
          case B:
            return "Suspense";
          case q:
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
            case I:
              var F = h.displayName || null;
              return F !== null ? F : Yn(h.type) || "Memo";
            case ce: {
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
      function ie(h) {
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
          ur(C) && (ye = C.ref, ie(C)), Ir(C) && (ca(C.key), we = "" + C.key), Ge = C.__self === void 0 ? null : C.__self, dt = C.__source === void 0 ? null : C.__source;
          for (F in C)
            Kn.call(C, F) && !Jn.hasOwnProperty(F) && (re[F] = C[F]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          re.children = z;
        else if ($t > 1) {
          for (var Kt = Array($t), Jt = 0; Jt < $t; Jt++)
            Kt[Jt] = arguments[Jt + 2];
          Object.freeze && Object.freeze(Kt), re.children = Kt;
        }
        if (h && h.defaultProps) {
          var lt = h.defaultProps;
          for (F in lt)
            re[F] === void 0 && (re[F] = lt[F]);
        }
        if (we || ye) {
          var an = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          we && Li(re, an), ye && fa(re, an);
        }
        return Pe(h, we, ye, Ge, dt, ct.current, re);
      }
      function Ht(h, C) {
        var z = Pe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function dn(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, re = K({}, h.props), we = h.key, ye = h.ref, Ge = h._self, dt = h._source, $t = h._owner;
        if (C != null) {
          ur(C) && (ye = C.ref, $t = ct.current), Ir(C) && (ca(C.key), we = "" + C.key);
          var Kt;
          h.type && h.type.defaultProps && (Kt = h.type.defaultProps);
          for (F in C)
            Kn.call(C, F) && !Jn.hasOwnProperty(F) && (C[F] === void 0 && Kt !== void 0 ? re[F] = Kt[F] : re[F] = C[F]);
        }
        var Jt = arguments.length - 2;
        if (Jt === 1)
          re.children = z;
        else if (Jt > 1) {
          for (var lt = Array(Jt), an = 0; an < Jt; an++)
            lt[an] = arguments[an + 2];
          re.children = lt;
        }
        return Pe(h.type, we, ye, Ge, dt, $t, re);
      }
      function pn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === De;
      }
      var vn = ".", Zn = ":";
      function cn(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(re) {
          return z[re];
        });
        return "$" + F;
      }
      var Gt = !1, Pt = /\/+/g;
      function da(h) {
        return h.replace(Pt, "$&/");
      }
      function xa(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (ca(h.key), cn("" + h.key)) : C.toString(36);
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
          var Ge = h, dt = re(Ge), $t = F === "" ? vn + xa(Ge, 0) : F;
          if (Tn(dt)) {
            var Kt = "";
            $t != null && (Kt = da($t) + "/"), ka(dt, C, Kt, "", function(Jf) {
              return Jf;
            });
          } else dt != null && (pn(dt) && (dt.key && (!Ge || Ge.key !== dt.key) && ca(dt.key), dt = Ht(
            dt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (dt.key && (!Ge || Ge.key !== dt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + dt.key) + "/"
            ) : "") + $t
          )), C.push(dt));
          return 1;
        }
        var Jt, lt, an = 0, Dn = F === "" ? vn : F + Zn;
        if (Tn(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            Jt = h[Zl], lt = Dn + xa(Jt, Zl), an += ka(Jt, C, z, lt, re);
        else {
          var Xo = ot(h);
          if (typeof Xo == "function") {
            var Vi = h;
            Xo === Vi.entries && (Gt || it("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Gt = !0);
            for (var eu = Xo.call(Vi), Ko, Kf = 0; !(Ko = eu.next()).done; )
              Jt = Ko.value, lt = Dn + xa(Jt, Kf++), an += ka(Jt, C, z, lt, re);
          } else if (we === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return an;
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
        if (!pn(h))
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
          $$typeof: ce,
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
        h != null && h.$$typeof === I ? Q("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Q("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Q("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Q("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
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
      function G(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ae || h === Qe || zt || h === S || h === B || h === q || Be || h === oe || rn || Bt || gt || typeof h == "object" && h !== null && (h.$$typeof === ce || h.$$typeof === I || h.$$typeof === me || h.$$typeof === te || h.$$typeof === ae || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function de(h, C) {
        G(h) || Q("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: I,
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
      function fn(h, C) {
        var z = ve();
        return z.useInsertionEffect(h, C);
      }
      function hn(h, C) {
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
      function Vt(h, C, z) {
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
      function ic(h, C, z) {
        var F = ve();
        return F.useSyncExternalStore(h, C, z);
      }
      var Ai = 0, ol, Wr, Yo, Or, Io, lc, uc;
      function ji() {
      }
      ji.__reactDisabledLog = !0;
      function sl() {
        {
          if (Ai === 0) {
            ol = console.log, Wr = console.info, Yo = console.warn, Or = console.error, Io = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
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
              log: K({}, h, {
                value: ol
              }),
              info: K({}, h, {
                value: Wr
              }),
              warn: K({}, h, {
                value: Yo
              }),
              error: K({}, h, {
                value: Or
              }),
              group: K({}, h, {
                value: Io
              }),
              groupCollapsed: K({}, h, {
                value: lc
              }),
              groupEnd: K({}, h, {
                value: uc
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
`), $t = Ge.length - 1, Kt = dt.length - 1; $t >= 1 && Kt >= 0 && Ge[$t] !== dt[Kt]; )
              Kt--;
            for (; $t >= 1 && Kt >= 0; $t--, Kt--)
              if (Ge[$t] !== dt[Kt]) {
                if ($t !== 1 || Kt !== 1)
                  do
                    if ($t--, Kt--, Kt < 0 || Ge[$t] !== dt[Kt]) {
                      var Jt = `
` + Ge[$t].replace(" at new ", " at ");
                      return h.displayName && Jt.includes("<anonymous>") && (Jt = Jt.replace("<anonymous>", h.displayName)), typeof h == "function" && ql.set(h, Jt), Jt;
                    }
                  while ($t >= 1 && Kt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = we, qr(), Error.prepareStackTrace = re;
        }
        var lt = h ? h.displayName || h.name : "", an = lt ? Fu(lt) : "";
        return typeof h == "function" && ql.set(h, an), an;
      }
      function Qo(h, C, z) {
        return fl(h, !1);
      }
      function Wo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function _t(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Wo(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case B:
            return Fu("Suspense");
          case q:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ae:
              return Qo(h.render);
            case I:
              return _t(h.type, C, z);
            case ce: {
              var F = h, re = F._payload, we = F._init;
              try {
                return _t(we(re), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var qo = {}, Hu = vt.ReactDebugCurrentFrame;
      function xt(h) {
        if (h) {
          var C = h._owner, z = _t(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(z);
        } else
          Hu.setExtraStackFrame(null);
      }
      function oc(h, C, z, F, re) {
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
              } catch ($t) {
                Ge = $t;
              }
              Ge && !(Ge instanceof Error) && (xt(re), Q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", z, ye, typeof Ge), xt(null)), Ge instanceof Error && !(Ge.message in qo) && (qo[Ge.message] = !0, xt(re), Q("Failed %s type: %s", z, Ge.message), xt(null));
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
      function Xt(h, C) {
        if (typeof h == "object") {
          if (Tn(h))
            for (var z = 0; z < h.length; z++) {
              var F = h[z];
              pn(F) && bn(F, C);
            }
          else if (pn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var re = ot(h);
            if (typeof re == "function" && re !== h.entries)
              for (var we = re.call(h), ye; !(ye = we.next()).done; )
                pn(ye.value) && bn(ye.value, C);
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
          C.$$typeof === I))
            z = C.propTypes;
          else
            return;
          if (z) {
            var F = Yn(C);
            oc(z, h.props, "prop", F, h);
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
        var F = G(h);
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
            Xt(arguments[dt], h);
        return h === Ae ? Da(Ge) : Ka(Ge), Ge;
      }
      var Nr = !1;
      function Xf(h) {
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
        for (var F = dn.apply(this, arguments), re = 2; re < arguments.length; re++)
          Xt(arguments[re], F.type);
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
            var C = ("require" + Math.random()).slice(0, 7), z = H && H[C];
            Bu = z.call(H, "timers").setImmediate;
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
              then: function(lt, an) {
                ye = !0, we.then(function(Dn) {
                  Hi(C), Oa === 0 ? $u(Dn, lt, an) : lt(Dn);
                }, function(Dn) {
                  Hi(C), an(Dn);
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
              var $t = Oe.current;
              $t !== null && (Pi($t), Oe.current = null);
              var Kt = {
                then: function(lt, an) {
                  Oe.current === null ? (Oe.current = [], $u(dt, lt, an)) : lt(dt);
                }
              };
              return Kt;
            } else {
              var Jt = {
                then: function(lt, an) {
                  lt(dt);
                }
              };
              return Jt;
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
      var Yu = br, Go = Pu, Na = Xf, Iu = {
        map: Ni,
        forEach: Ql,
        count: Il,
        toArray: Mi,
        only: Wl
      };
      W.Children = Iu, W.Component = Te, W.Fragment = Ae, W.Profiler = Qe, W.PureComponent = St, W.StrictMode = S, W.Suspense = B, W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vt, W.act = dl, W.cloneElement = Go, W.createContext = si, W.createElement = Yu, W.createFactory = Na, W.createRef = xn, W.forwardRef = zi, W.isValidElement = pn, W.lazy = fi, W.memo = de, W.startTransition = Kl, W.unstable_act = dl, W.useCallback = Tr, W.useContext = ht, W.useDebugValue = Sn, W.useDeferredValue = di, W.useEffect = kn, W.useId = Ui, W.useImperativeHandle = Vt, W.useInsertionEffect = fn, W.useLayoutEffect = hn, W.useMemo = Xa, W.useReducer = Et, W.useRef = ft, W.useState = et, W.useSyncExternalStore = ic, W.useTransition = rt, W.version = Ue, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var ak = {};
ak.NODE_ENV === "production" ? vE.exports = nk() : vE.exports = rk();
var jt = vE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eT;
function ik() {
  if (eT) return Kp;
  eT = 1;
  var H = jt, W = Symbol.for("react.element"), D = Symbol.for("react.fragment"), Ue = Object.prototype.hasOwnProperty, De = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, pt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ae(S, Qe, me) {
    var te, ae = {}, B = null, q = null;
    me !== void 0 && (B = "" + me), Qe.key !== void 0 && (B = "" + Qe.key), Qe.ref !== void 0 && (q = Qe.ref);
    for (te in Qe) Ue.call(Qe, te) && !pt.hasOwnProperty(te) && (ae[te] = Qe[te]);
    if (S && S.defaultProps) for (te in Qe = S.defaultProps, Qe) ae[te] === void 0 && (ae[te] = Qe[te]);
    return { $$typeof: W, type: S, key: B, ref: q, props: ae, _owner: De.current };
  }
  return Kp.Fragment = D, Kp.jsx = Ae, Kp.jsxs = Ae, Kp;
}
var Jp = {}, tT;
function lk() {
  if (tT) return Jp;
  tT = 1;
  var H = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return H.NODE_ENV !== "production" && function() {
    var W = jt, D = Symbol.for("react.element"), Ue = Symbol.for("react.portal"), De = Symbol.for("react.fragment"), pt = Symbol.for("react.strict_mode"), Ae = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Qe = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), ce = Symbol.iterator, oe = "@@iterator";
    function gn(R) {
      if (R === null || typeof R != "object")
        return null;
      var G = ce && R[ce] || R[oe];
      return typeof G == "function" ? G : null;
    }
    var Ft = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ot(R) {
      {
        for (var G = arguments.length, de = new Array(G > 1 ? G - 1 : 0), ve = 1; ve < G; ve++)
          de[ve - 1] = arguments[ve];
        Ye("error", R, de);
      }
    }
    function Ye(R, G, de) {
      {
        var ve = Ft.ReactDebugCurrentFrame, ht = ve.getStackAddendum();
        ht !== "" && (G += "%s", de = de.concat([ht]));
        var et = de.map(function(Et) {
          return String(Et);
        });
        et.unshift("Warning: " + G), Function.prototype.apply.call(console[R], console, et);
      }
    }
    var Ot = !1, Oe = !1, ct = !1, We = !1, qt = !1, Lt;
    Lt = Symbol.for("react.module.reference");
    function rn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === De || R === Ae || qt || R === pt || R === te || R === ae || We || R === I || Ot || Oe || ct || typeof R == "object" && R !== null && (R.$$typeof === q || R.$$typeof === B || R.$$typeof === S || R.$$typeof === Qe || R.$$typeof === me || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Lt || R.getModuleId !== void 0));
    }
    function Bt(R, G, de) {
      var ve = R.displayName;
      if (ve)
        return ve;
      var ht = G.displayName || G.name || "";
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
        case Ue:
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
          case Qe:
            var G = R;
            return gt(G) + ".Consumer";
          case S:
            var de = R;
            return gt(de._context) + ".Provider";
          case me:
            return Bt(R, R.render, "ForwardRef");
          case B:
            var ve = R.displayName || null;
            return ve !== null ? ve : Be(R.type) || "Memo";
          case q: {
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
    var zt = Object.assign, vt = 0, it, Q, Re, se, x, k, K;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function Te() {
      {
        if (vt === 0) {
          it = console.log, Q = console.info, Re = console.warn, se = console.error, x = console.group, k = console.groupCollapsed, K = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
    function Me() {
      {
        if (vt--, vt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: zt({}, R, {
              value: it
            }),
            info: zt({}, R, {
              value: Q
            }),
            warn: zt({}, R, {
              value: Re
            }),
            error: zt({}, R, {
              value: se
            }),
            group: zt({}, R, {
              value: x
            }),
            groupCollapsed: zt({}, R, {
              value: k
            }),
            groupEnd: zt({}, R, {
              value: K
            })
          });
        }
        vt < 0 && ot("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ie = Ft.ReactCurrentDispatcher, Ce;
    function Ze(R, G, de) {
      {
        if (Ce === void 0)
          try {
            throw Error();
          } catch (ht) {
            var ve = ht.stack.trim().match(/\n( *(at )?)/);
            Ce = ve && ve[1] || "";
          }
        return `
` + Ce + R;
      }
    }
    var St = !1, on;
    {
      var xn = typeof WeakMap == "function" ? WeakMap : Map;
      on = new xn();
    }
    function Gn(R, G) {
      if (!R || St)
        return "";
      {
        var de = on.get(R);
        if (de !== void 0)
          return de;
      }
      var ve;
      St = !0;
      var ht = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var et;
      et = Ie.current, Ie.current = null, Te();
      try {
        if (G) {
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
`), fn = ft.length - 1, hn = kn.length - 1; fn >= 1 && hn >= 0 && ft[fn] !== kn[hn]; )
            hn--;
          for (; fn >= 1 && hn >= 0; fn--, hn--)
            if (ft[fn] !== kn[hn]) {
              if (fn !== 1 || hn !== 1)
                do
                  if (fn--, hn--, hn < 0 || ft[fn] !== kn[hn]) {
                    var Tr = `
` + ft[fn].replace(" at new ", " at ");
                    return R.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", R.displayName)), typeof R == "function" && on.set(R, Tr), Tr;
                  }
                while (fn >= 1 && hn >= 0);
              break;
            }
        }
      } finally {
        St = !1, Ie.current = et, Me(), Error.prepareStackTrace = ht;
      }
      var Xa = R ? R.displayName || R.name : "", Vt = Xa ? Ze(Xa) : "";
      return typeof R == "function" && on.set(R, Vt), Vt;
    }
    function Tn(R, G, de) {
      return Gn(R, !1);
    }
    function Xn(R) {
      var G = R.prototype;
      return !!(G && G.isReactComponent);
    }
    function Nt(R, G, de) {
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
            return Nt(R.type, G, de);
          case q: {
            var ve = R, ht = ve._payload, et = ve._init;
            try {
              return Nt(et(ht), G, de);
            } catch {
            }
          }
        }
      return "";
    }
    var sn = Object.prototype.hasOwnProperty, ca = {}, qa = Ft.ReactDebugCurrentFrame;
    function Dr(R) {
      if (R) {
        var G = R._owner, de = Nt(R.type, R._source, G ? G.type : null);
        qa.setExtraStackFrame(de);
      } else
        qa.setExtraStackFrame(null);
    }
    function Yn(R, G, de, ve, ht) {
      {
        var et = Function.call.bind(sn);
        for (var Et in R)
          if (et(R, Et)) {
            var ft = void 0;
            try {
              if (typeof R[Et] != "function") {
                var kn = Error((ve || "React class") + ": " + de + " type `" + Et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw kn.name = "Invariant Violation", kn;
              }
              ft = R[Et](G, Et, ve, de, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fn) {
              ft = fn;
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
        var G = typeof Symbol == "function" && Symbol.toStringTag, de = G && R[Symbol.toStringTag] || R.constructor.name || "Object";
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
    var Ir = Ft.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fa, ie;
    function Pe(R) {
      if (sn.call(R, "ref")) {
        var G = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function st(R) {
      if (sn.call(R, "key")) {
        var G = Object.getOwnPropertyDescriptor(R, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ht(R, G) {
      typeof R.ref == "string" && Ir.current;
    }
    function dn(R, G) {
      {
        var de = function() {
          fa || (fa = !0, ot("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        de.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: de,
          configurable: !0
        });
      }
    }
    function pn(R, G) {
      {
        var de = function() {
          ie || (ie = !0, ot("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        de.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: de,
          configurable: !0
        });
      }
    }
    var vn = function(R, G, de, ve, ht, et, Et) {
      var ft = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: R,
        key: G,
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
    function Zn(R, G, de, ve, ht) {
      {
        var et, Et = {}, ft = null, kn = null;
        de !== void 0 && (ur(de), ft = "" + de), st(G) && (ur(G.key), ft = "" + G.key), Pe(G) && (kn = G.ref, Ht(G, ht));
        for (et in G)
          sn.call(G, et) && !Li.hasOwnProperty(et) && (Et[et] = G[et]);
        if (R && R.defaultProps) {
          var fn = R.defaultProps;
          for (et in fn)
            Et[et] === void 0 && (Et[et] = fn[et]);
        }
        if (ft || kn) {
          var hn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ft && dn(Et, hn), kn && pn(Et, hn);
        }
        return vn(R, ft, kn, ht, ve, Ir.current, Et);
      }
    }
    var cn = Ft.ReactCurrentOwner, Gt = Ft.ReactDebugCurrentFrame;
    function Pt(R) {
      if (R) {
        var G = R._owner, de = Nt(R.type, R._source, G ? G.type : null);
        Gt.setExtraStackFrame(de);
      } else
        Gt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function xa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === D;
    }
    function ka() {
      {
        if (cn.current) {
          var R = Be(cn.current.type);
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
        var G = ka();
        if (!G) {
          var de = typeof R == "string" ? R : R.displayName || R.name;
          de && (G = `

Check the top-level render call using <` + de + ">.");
        }
        return G;
      }
    }
    function Mi(R, G) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var de = Ql(G);
        if (Il[de])
          return;
        Il[de] = !0;
        var ve = "";
        R && R._owner && R._owner !== cn.current && (ve = " It was passed a child from " + Be(R._owner.type) + "."), Pt(R), ot('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', de, ve), Pt(null);
      }
    }
    function Wl(R, G) {
      {
        if (typeof R != "object")
          return;
        if (Jn(R))
          for (var de = 0; de < R.length; de++) {
            var ve = R[de];
            xa(ve) && Mi(ve, G);
          }
        else if (xa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var ht = gn(R);
          if (typeof ht == "function" && ht !== R.entries)
            for (var et = ht.call(R), Et; !(Et = et.next()).done; )
              xa(Et.value) && Mi(Et.value, G);
        }
      }
    }
    function si(R) {
      {
        var G = R.type;
        if (G == null || typeof G == "string")
          return;
        var de;
        if (typeof G == "function")
          de = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === me || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === B))
          de = G.propTypes;
        else
          return;
        if (de) {
          var ve = Be(G);
          Yn(de, R.props, "prop", ve, R);
        } else if (G.PropTypes !== void 0 && !da) {
          da = !0;
          var ht = Be(G);
          ot("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ht || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && ot("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(R) {
      {
        for (var G = Object.keys(R.props), de = 0; de < G.length; de++) {
          var ve = G[de];
          if (ve !== "children" && ve !== "key") {
            Pt(R), ot("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ve), Pt(null);
            break;
          }
        }
        R.ref !== null && (Pt(R), ot("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var or = {};
    function va(R, G, de, ve, ht, et) {
      {
        var Et = rn(R);
        if (!Et) {
          var ft = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ft += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var kn = Ni();
          kn ? ft += kn : ft += ka();
          var fn;
          R === null ? fn = "null" : Jn(R) ? fn = "array" : R !== void 0 && R.$$typeof === D ? (fn = "<" + (Be(R.type) || "Unknown") + " />", ft = " Did you accidentally export a JSX literal instead of a component?") : fn = typeof R, ot("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fn, ft);
        }
        var hn = Zn(R, G, de, ht, et);
        if (hn == null)
          return hn;
        if (Et) {
          var Tr = G.children;
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
        if (sn.call(G, "key")) {
          var Vt = Be(R), Sn = Object.keys(G).filter(function(Ui) {
            return Ui !== "key";
          }), rt = Sn.length > 0 ? "{key: someKey, " + Sn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!or[Vt + rt]) {
            var di = Sn.length > 0 ? "{" + Sn.join(": ..., ") + ": ...}" : "{}";
            ot(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, Vt, di, Vt), or[Vt + rt] = !0;
          }
        }
        return R === De ? pa(hn) : si(hn), hn;
      }
    }
    function Qr(R, G, de) {
      return va(R, G, de, !0);
    }
    function ci(R, G, de) {
      return va(R, G, de, !1);
    }
    var fi = ci, zi = Qr;
    Jp.Fragment = De, Jp.jsx = fi, Jp.jsxs = zi;
  }(), Jp;
}
var uk = {};
uk.NODE_ENV === "production" ? pE.exports = ik() : pE.exports = lk();
var Ve = pE.exports, hE = { exports: {} }, Qa = {}, $m = { exports: {} }, sE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nT;
function ok() {
  return nT || (nT = 1, function(H) {
    function W(Q, Re) {
      var se = Q.length;
      Q.push(Re);
      e: for (; 0 < se; ) {
        var x = se - 1 >>> 1, k = Q[x];
        if (0 < De(k, Re)) Q[x] = Re, Q[se] = k, se = x;
        else break e;
      }
    }
    function D(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function Ue(Q) {
      if (Q.length === 0) return null;
      var Re = Q[0], se = Q.pop();
      if (se !== Re) {
        Q[0] = se;
        e: for (var x = 0, k = Q.length, K = k >>> 1; x < K; ) {
          var le = 2 * (x + 1) - 1, Te = Q[le], Me = le + 1, Ie = Q[Me];
          if (0 > De(Te, se)) Me < k && 0 > De(Ie, Te) ? (Q[x] = Ie, Q[Me] = se, x = Me) : (Q[x] = Te, Q[le] = se, x = le);
          else if (Me < k && 0 > De(Ie, se)) Q[x] = Ie, Q[Me] = se, x = Me;
          else break e;
        }
      }
      return Re;
    }
    function De(Q, Re) {
      var se = Q.sortIndex - Re.sortIndex;
      return se !== 0 ? se : Q.id - Re.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var pt = performance;
      H.unstable_now = function() {
        return pt.now();
      };
    } else {
      var Ae = Date, S = Ae.now();
      H.unstable_now = function() {
        return Ae.now() - S;
      };
    }
    var Qe = [], me = [], te = 1, ae = null, B = 3, q = !1, I = !1, ce = !1, oe = typeof setTimeout == "function" ? setTimeout : null, gn = typeof clearTimeout == "function" ? clearTimeout : null, Ft = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ot(Q) {
      for (var Re = D(me); Re !== null; ) {
        if (Re.callback === null) Ue(me);
        else if (Re.startTime <= Q) Ue(me), Re.sortIndex = Re.expirationTime, W(Qe, Re);
        else break;
        Re = D(me);
      }
    }
    function Ye(Q) {
      if (ce = !1, ot(Q), !I) if (D(Qe) !== null) I = !0, vt(Ot);
      else {
        var Re = D(me);
        Re !== null && it(Ye, Re.startTime - Q);
      }
    }
    function Ot(Q, Re) {
      I = !1, ce && (ce = !1, gn(We), We = -1), q = !0;
      var se = B;
      try {
        for (ot(Re), ae = D(Qe); ae !== null && (!(ae.expirationTime > Re) || Q && !rn()); ) {
          var x = ae.callback;
          if (typeof x == "function") {
            ae.callback = null, B = ae.priorityLevel;
            var k = x(ae.expirationTime <= Re);
            Re = H.unstable_now(), typeof k == "function" ? ae.callback = k : ae === D(Qe) && Ue(Qe), ot(Re);
          } else Ue(Qe);
          ae = D(Qe);
        }
        if (ae !== null) var K = !0;
        else {
          var le = D(me);
          le !== null && it(Ye, le.startTime - Re), K = !1;
        }
        return K;
      } finally {
        ae = null, B = se, q = !1;
      }
    }
    var Oe = !1, ct = null, We = -1, qt = 5, Lt = -1;
    function rn() {
      return !(H.unstable_now() - Lt < qt);
    }
    function Bt() {
      if (ct !== null) {
        var Q = H.unstable_now();
        Lt = Q;
        var Re = !0;
        try {
          Re = ct(!0, Q);
        } finally {
          Re ? gt() : (Oe = !1, ct = null);
        }
      } else Oe = !1;
    }
    var gt;
    if (typeof Ft == "function") gt = function() {
      Ft(Bt);
    };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), zt = Be.port2;
      Be.port1.onmessage = Bt, gt = function() {
        zt.postMessage(null);
      };
    } else gt = function() {
      oe(Bt, 0);
    };
    function vt(Q) {
      ct = Q, Oe || (Oe = !0, gt());
    }
    function it(Q, Re) {
      We = oe(function() {
        Q(H.unstable_now());
      }, Re);
    }
    H.unstable_IdlePriority = 5, H.unstable_ImmediatePriority = 1, H.unstable_LowPriority = 4, H.unstable_NormalPriority = 3, H.unstable_Profiling = null, H.unstable_UserBlockingPriority = 2, H.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, H.unstable_continueExecution = function() {
      I || q || (I = !0, vt(Ot));
    }, H.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : qt = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, H.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, H.unstable_getFirstCallbackNode = function() {
      return D(Qe);
    }, H.unstable_next = function(Q) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var Re = 3;
          break;
        default:
          Re = B;
      }
      var se = B;
      B = Re;
      try {
        return Q();
      } finally {
        B = se;
      }
    }, H.unstable_pauseExecution = function() {
    }, H.unstable_requestPaint = function() {
    }, H.unstable_runWithPriority = function(Q, Re) {
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
      var se = B;
      B = Q;
      try {
        return Re();
      } finally {
        B = se;
      }
    }, H.unstable_scheduleCallback = function(Q, Re, se) {
      var x = H.unstable_now();
      switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? x + se : x) : se = x, Q) {
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
      return k = se + k, Q = { id: te++, callback: Re, priorityLevel: Q, startTime: se, expirationTime: k, sortIndex: -1 }, se > x ? (Q.sortIndex = se, W(me, Q), D(Qe) === null && Q === D(me) && (ce ? (gn(We), We = -1) : ce = !0, it(Ye, se - x))) : (Q.sortIndex = k, W(Qe, Q), I || q || (I = !0, vt(Ot))), Q;
    }, H.unstable_shouldYield = rn, H.unstable_wrapCallback = function(Q) {
      var Re = B;
      return function() {
        var se = B;
        B = Re;
        try {
          return Q.apply(this, arguments);
        } finally {
          B = se;
        }
      };
    };
  }(sE)), sE;
}
var cE = {}, rT;
function sk() {
  return rT || (rT = 1, function(H) {
    var W = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    W.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var D = !1, Ue = 5;
      function De(ie, Pe) {
        var st = ie.length;
        ie.push(Pe), S(ie, Pe, st);
      }
      function pt(ie) {
        return ie.length === 0 ? null : ie[0];
      }
      function Ae(ie) {
        if (ie.length === 0)
          return null;
        var Pe = ie[0], st = ie.pop();
        return st !== Pe && (ie[0] = st, Qe(ie, st, 0)), Pe;
      }
      function S(ie, Pe, st) {
        for (var Ht = st; Ht > 0; ) {
          var dn = Ht - 1 >>> 1, pn = ie[dn];
          if (me(pn, Pe) > 0)
            ie[dn] = Pe, ie[Ht] = pn, Ht = dn;
          else
            return;
        }
      }
      function Qe(ie, Pe, st) {
        for (var Ht = st, dn = ie.length, pn = dn >>> 1; Ht < pn; ) {
          var vn = (Ht + 1) * 2 - 1, Zn = ie[vn], cn = vn + 1, Gt = ie[cn];
          if (me(Zn, Pe) < 0)
            cn < dn && me(Gt, Zn) < 0 ? (ie[Ht] = Gt, ie[cn] = Pe, Ht = cn) : (ie[Ht] = Zn, ie[vn] = Pe, Ht = vn);
          else if (cn < dn && me(Gt, Pe) < 0)
            ie[Ht] = Gt, ie[cn] = Pe, Ht = cn;
          else
            return;
        }
      }
      function me(ie, Pe) {
        var st = ie.sortIndex - Pe.sortIndex;
        return st !== 0 ? st : ie.id - Pe.id;
      }
      var te = 1, ae = 2, B = 3, q = 4, I = 5;
      function ce(ie, Pe) {
      }
      var oe = typeof performance == "object" && typeof performance.now == "function";
      if (oe) {
        var gn = performance;
        H.unstable_now = function() {
          return gn.now();
        };
      } else {
        var Ft = Date, ot = Ft.now();
        H.unstable_now = function() {
          return Ft.now() - ot;
        };
      }
      var Ye = 1073741823, Ot = -1, Oe = 250, ct = 5e3, We = 1e4, qt = Ye, Lt = [], rn = [], Bt = 1, gt = null, Be = B, zt = !1, vt = !1, it = !1, Q = typeof setTimeout == "function" ? setTimeout : null, Re = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function x(ie) {
        for (var Pe = pt(rn); Pe !== null; ) {
          if (Pe.callback === null)
            Ae(rn);
          else if (Pe.startTime <= ie)
            Ae(rn), Pe.sortIndex = Pe.expirationTime, De(Lt, Pe);
          else
            return;
          Pe = pt(rn);
        }
      }
      function k(ie) {
        if (it = !1, x(ie), !vt)
          if (pt(Lt) !== null)
            vt = !0, Un(K);
          else {
            var Pe = pt(rn);
            Pe !== null && ur(k, Pe.startTime - ie);
          }
      }
      function K(ie, Pe) {
        vt = !1, it && (it = !1, Ir()), zt = !0;
        var st = Be;
        try {
          var Ht;
          if (!D) return le(ie, Pe);
        } finally {
          gt = null, Be = st, zt = !1;
        }
      }
      function le(ie, Pe) {
        var st = Pe;
        for (x(st), gt = pt(Lt); gt !== null && !(gt.expirationTime > st && (!ie || qa())); ) {
          var Ht = gt.callback;
          if (typeof Ht == "function") {
            gt.callback = null, Be = gt.priorityLevel;
            var dn = gt.expirationTime <= st, pn = Ht(dn);
            st = H.unstable_now(), typeof pn == "function" ? gt.callback = pn : gt === pt(Lt) && Ae(Lt), x(st);
          } else
            Ae(Lt);
          gt = pt(Lt);
        }
        if (gt !== null)
          return !0;
        var vn = pt(rn);
        return vn !== null && ur(k, vn.startTime - st), !1;
      }
      function Te(ie, Pe) {
        switch (ie) {
          case te:
          case ae:
          case B:
          case q:
          case I:
            break;
          default:
            ie = B;
        }
        var st = Be;
        Be = ie;
        try {
          return Pe();
        } finally {
          Be = st;
        }
      }
      function Me(ie) {
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
          return ie();
        } finally {
          Be = st;
        }
      }
      function Ie(ie) {
        var Pe = Be;
        return function() {
          var st = Be;
          Be = Pe;
          try {
            return ie.apply(this, arguments);
          } finally {
            Be = st;
          }
        };
      }
      function Ce(ie, Pe, st) {
        var Ht = H.unstable_now(), dn;
        if (typeof st == "object" && st !== null) {
          var pn = st.delay;
          typeof pn == "number" && pn > 0 ? dn = Ht + pn : dn = Ht;
        } else
          dn = Ht;
        var vn;
        switch (ie) {
          case te:
            vn = Ot;
            break;
          case ae:
            vn = Oe;
            break;
          case I:
            vn = qt;
            break;
          case q:
            vn = We;
            break;
          case B:
          default:
            vn = ct;
            break;
        }
        var Zn = dn + vn, cn = {
          id: Bt++,
          callback: Pe,
          priorityLevel: ie,
          startTime: dn,
          expirationTime: Zn,
          sortIndex: -1
        };
        return dn > Ht ? (cn.sortIndex = dn, De(rn, cn), pt(Lt) === null && cn === pt(rn) && (it ? Ir() : it = !0, ur(k, dn - Ht))) : (cn.sortIndex = Zn, De(Lt, cn), !vt && !zt && (vt = !0, Un(K))), cn;
      }
      function Ze() {
      }
      function St() {
        !vt && !zt && (vt = !0, Un(K));
      }
      function on() {
        return pt(Lt);
      }
      function xn(ie) {
        ie.callback = null;
      }
      function Gn() {
        return Be;
      }
      var Tn = !1, Xn = null, Nt = -1, sn = Ue, ca = -1;
      function qa() {
        var ie = H.unstable_now() - ca;
        return !(ie < sn);
      }
      function Dr() {
      }
      function Yn(ie) {
        if (ie < 0 || ie > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ie > 0 ? sn = Math.floor(1e3 / ie) : sn = Ue;
      }
      var Kn = function() {
        if (Xn !== null) {
          var ie = H.unstable_now();
          ca = ie;
          var Pe = !0, st = !0;
          try {
            st = Xn(Pe, ie);
          } finally {
            st ? Jn() : (Tn = !1, Xn = null);
          }
        } else
          Tn = !1;
      }, Jn;
      if (typeof se == "function")
        Jn = function() {
          se(Kn);
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
      function Un(ie) {
        Xn = ie, Tn || (Tn = !0, Jn());
      }
      function ur(ie, Pe) {
        Nt = Q(function() {
          ie(H.unstable_now());
        }, Pe);
      }
      function Ir() {
        Re(Nt), Nt = -1;
      }
      var Li = Dr, fa = null;
      H.unstable_IdlePriority = I, H.unstable_ImmediatePriority = te, H.unstable_LowPriority = q, H.unstable_NormalPriority = B, H.unstable_Profiling = fa, H.unstable_UserBlockingPriority = ae, H.unstable_cancelCallback = xn, H.unstable_continueExecution = St, H.unstable_forceFrameRate = Yn, H.unstable_getCurrentPriorityLevel = Gn, H.unstable_getFirstCallbackNode = on, H.unstable_next = Me, H.unstable_pauseExecution = Ze, H.unstable_requestPaint = Li, H.unstable_runWithPriority = Te, H.unstable_scheduleCallback = Ce, H.unstable_shouldYield = qa, H.unstable_wrapCallback = Ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(cE)), cE;
}
var aT;
function sT() {
  if (aT) return $m.exports;
  aT = 1;
  var H = {};
  return H.NODE_ENV === "production" ? $m.exports = ok() : $m.exports = sk(), $m.exports;
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
var iT;
function ck() {
  if (iT) return Qa;
  iT = 1;
  var H = jt, W = sT();
  function D(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ue = /* @__PURE__ */ new Set(), De = {};
  function pt(n, r) {
    Ae(n, r), Ae(n + "Capture", r);
  }
  function Ae(n, r) {
    for (De[n] = r, n = 0; n < r.length; n++) Ue.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qe = Object.prototype.hasOwnProperty, me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, te = {}, ae = {};
  function B(n) {
    return Qe.call(ae, n) ? !0 : Qe.call(te, n) ? !1 : me.test(n) ? ae[n] = !0 : (te[n] = !0, !1);
  }
  function q(n, r, l, o) {
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
  function I(n, r, l, o) {
    if (r === null || typeof r > "u" || q(n, r, l, o)) return !0;
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
  function ce(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var oe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    oe[n] = new ce(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    oe[r] = new ce(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    oe[n] = new ce(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    oe[n] = new ce(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    oe[n] = new ce(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    oe[n] = new ce(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    oe[n] = new ce(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    oe[n] = new ce(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    oe[n] = new ce(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var gn = /[\-:]([a-z])/g;
  function Ft(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      gn,
      Ft
    );
    oe[r] = new ce(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(gn, Ft);
    oe[r] = new ce(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(gn, Ft);
    oe[r] = new ce(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    oe[n] = new ce(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), oe.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    oe[n] = new ce(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ot(n, r, l, o) {
    var c = oe.hasOwnProperty(r) ? oe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (I(r, l, c, o) && (l = null), o || c === null ? B(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ye = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ot = Symbol.for("react.element"), Oe = Symbol.for("react.portal"), ct = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), qt = Symbol.for("react.profiler"), Lt = Symbol.for("react.provider"), rn = Symbol.for("react.context"), Bt = Symbol.for("react.forward_ref"), gt = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), zt = Symbol.for("react.memo"), vt = Symbol.for("react.lazy"), it = Symbol.for("react.offscreen"), Q = Symbol.iterator;
  function Re(n) {
    return n === null || typeof n != "object" ? null : (n = Q && n[Q] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var se = Object.assign, x;
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
  var K = !1;
  function le(n, r) {
    if (!n || K) return "";
    K = !0;
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
      K = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? k(n) : "";
  }
  function Te(n) {
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
        return n = le(n.type, !1), n;
      case 11:
        return n = le(n.type.render, !1), n;
      case 1:
        return n = le(n.type, !0), n;
      default:
        return "";
    }
  }
  function Me(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ct:
        return "Fragment";
      case Oe:
        return "Portal";
      case qt:
        return "Profiler";
      case We:
        return "StrictMode";
      case gt:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case rn:
        return (n.displayName || "Context") + ".Consumer";
      case Lt:
        return (n._context.displayName || "Context") + ".Provider";
      case Bt:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case zt:
        return r = n.displayName || null, r !== null ? r : Me(n.type) || "Memo";
      case vt:
        r = n._payload, n = n._init;
        try {
          return Me(n(r));
        } catch {
        }
    }
    return null;
  }
  function Ie(n) {
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
        return Me(r);
      case 8:
        return r === We ? "StrictMode" : "Mode";
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
  function Ce(n) {
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
  function on(n) {
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
    return se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Xn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Ce(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Nt(n, r) {
    r = r.checked, r != null && ot(n, "checked", r, !1);
  }
  function sn(n, r) {
    Nt(n, r);
    var l = Ce(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? qa(n, r.type, l) : r.hasOwnProperty("defaultValue") && qa(n, r.type, Ce(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (l = "" + Ce(l), r = null, c = 0; c < n.length; c++) {
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
    return se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
    n._wrapperState = { initialValue: Ce(l) };
  }
  function Rr(n, r) {
    var l = Ce(r.value), o = Ce(r.defaultValue);
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
  var ie = {
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
  Object.keys(ie).forEach(function(n) {
    Pe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ie[r] = ie[n];
    });
  });
  function st(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ie.hasOwnProperty(n) && ie[n] ? ("" + r).trim() : r + "px";
  }
  function Ht(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = st(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var dn = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pn(n, r) {
    if (r) {
      if (dn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(D(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(D(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(D(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(D(62));
    }
  }
  function vn(n, r) {
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
  function cn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Gt = null, Pt = null, da = null;
  function xa(n) {
    if (n = fs(n)) {
      if (typeof Gt != "function") throw Error(D(280));
      var r = n.stateNode;
      r && (r = Ii(r), Gt(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    Pt ? da ? da.push(n) : da = [n] : Pt = n;
  }
  function Ni() {
    if (Pt) {
      var n = Pt, r = da;
      if (da = Pt = null, xa(n), r) for (n = 0; n < r.length; n++) xa(r[n]);
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
      Mi = !1, (Pt !== null || da !== null) && (Ql(), Ni());
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
  function G(n, r, l, o, c, d, m, E, T) {
    Qr = !1, ci = null, va.apply(R, arguments);
  }
  function de(n, r, l, o, c, d, m, E, T) {
    if (G.apply(this, arguments), Qr) {
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
  var fn = W.unstable_scheduleCallback, hn = W.unstable_cancelCallback, Tr = W.unstable_shouldYield, Xa = W.unstable_requestPaint, Vt = W.unstable_now, Sn = W.unstable_getCurrentPriorityLevel, rt = W.unstable_ImmediatePriority, di = W.unstable_UserBlockingPriority, Ui = W.unstable_NormalPriority, ic = W.unstable_LowPriority, Ai = W.unstable_IdlePriority, ol = null, Wr = null;
  function Yo(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : uc, Io = Math.log, lc = Math.LN2;
  function uc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Io(n) / lc | 0) | 0;
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
  function Qo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Or(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Or(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var _t = 0;
  function qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, xt, oc, vi, Je, Xl = !1, er = [], Gr = null, Lr = null, hi = null, bn = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Ka = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        Xt.delete(r.pointerId);
    }
  }
  function Nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = fs(r), r !== null && xt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xf(n, r, l, o, c) {
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
        return d = c.pointerId, Xt.set(d, Nr(Xt.get(d) || null, n, r, l, o, c)), !0;
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
              oc(l);
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
      } else return r = fs(l), r !== null && xt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Kl(n) && l.delete(r);
  }
  function Bu() {
    Xl = !1, Gr !== null && Kl(Gr) && (Gr = null), Lr !== null && Kl(Lr) && (Lr = null), hi !== null && Kl(hi) && (hi = null), bn.forEach(Vu), Xt.forEach(Vu);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xl || (Xl = !0, W.unstable_scheduleCallback(W.unstable_NormalPriority, Bu)));
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
    for (Gr !== null && Jl(Gr, n), Lr !== null && Jl(Lr, n), hi !== null && Jl(hi, n), bn.forEach(r), Xt.forEach(r), l = 0; l < Ka.length; l++) o = Ka[l], o.blockedOn === n && (o.blockedOn = null);
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
      if (c === null) sd(n, r, o, Pi, l), br(n, o);
      else if (Xf(c, n, r, l, o)) o.stopPropagation();
      else if (br(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = fs(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && sd(n, r, o, Pi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else sd(n, r, o, null, l);
    }
  }
  var Pi = null;
  function Yu(n, r, l, o) {
    if (Pi = null, n = cn(o), n = iu(n), n !== null) if (r = ve(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = ht(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Pi = n, null;
  }
  function Go(n) {
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
          case ic:
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
    return se(r.prototype, { preventDefault: function() {
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
  }, defaultPrevented: 0, isTrusted: 0 }, Ge = we(ye), dt = se({}, ye, { view: 0, detail: 0 }), $t = we(dt), Kt, Jt, lt, an = se({}, dt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== lt && (lt && n.type === "mousemove" ? (Kt = n.screenX - lt.screenX, Jt = n.screenY - lt.screenY) : Jt = Kt = 0, lt = n), Kt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Jt;
  } }), Dn = we(an), Zl = se({}, an, { dataTransfer: 0 }), Xo = we(Zl), Vi = se({}, dt, { relatedTarget: 0 }), eu = we(Vi), Ko = se({}, ye, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = we(Ko), sc = se({}, ye, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Jf = we(sc), ev = se({}, ye, { data: 0 }), cc = we(ev), tv = {
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
  }, nv = {
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
  }, rv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Im(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = rv[n]) ? !!r[n] : !1;
  }
  function Ja() {
    return Im;
  }
  var Qm = se({}, dt, { key: function(n) {
    if (n.key) {
      var r = tv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = z(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? z(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? z(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = we(Qm), ed = se({}, an, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = we(ed), Wm = se({}, dt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), dc = we(Wm), av = se({}, ye, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xr = we(av), Bi = se({}, an, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), An = we(Bi), $i = [9, 13, 27, 32], Jo = S && "CompositionEvent" in window, vl = null;
  S && "documentMode" in document && (vl = document.documentMode);
  var qm = S && "TextEvent" in window && !vl, Qu = S && (!Jo || vl && 8 < vl && 11 >= vl), iv = " ", lv = !1;
  function pc(n, r) {
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
  function uv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Wu = !1;
  function Gm(n, r) {
    switch (n) {
      case "compositionend":
        return uv(r);
      case "keypress":
        return r.which !== 32 ? null : (lv = !0, iv);
      case "textInput":
        return n = r.data, n === iv && lv ? null : n;
      default:
        return null;
    }
  }
  function ov(n, r) {
    if (Wu) return n === "compositionend" || !Jo && pc(n, r) ? (n = C(), h = Iu = Na = null, Wu = !1, n) : null;
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
  var Xm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function sv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Xm[n.type] : r === "textarea";
  }
  function cv(n, r, l, o) {
    ka(o), r = os(r, "onChange"), 0 < r.length && (l = new Ge("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qu = null, mi = null;
  function td(n) {
    yc(n, 0);
  }
  function Zo(n) {
    var r = je(n);
    if (xn(r)) return n;
  }
  function fv(n, r) {
    if (n === "change") return r;
  }
  var dv = !1;
  if (S) {
    var nd;
    if (S) {
      var rd = "oninput" in document;
      if (!rd) {
        var pv = document.createElement("div");
        pv.setAttribute("oninput", "return;"), rd = typeof pv.oninput == "function";
      }
      nd = rd;
    } else nd = !1;
    dv = nd && (!document.documentMode || 9 < document.documentMode);
  }
  function vv() {
    qu && (qu.detachEvent("onpropertychange", hv), mi = qu = null);
  }
  function hv(n) {
    if (n.propertyName === "value" && Zo(mi)) {
      var r = [];
      cv(r, mi, n, cn(n)), Wl(td, r);
    }
  }
  function Km(n, r, l) {
    n === "focusin" ? (vv(), qu = r, mi = l, qu.attachEvent("onpropertychange", hv)) : n === "focusout" && vv();
  }
  function Jm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(mi);
  }
  function mv(n, r) {
    if (n === "click") return Zo(r);
  }
  function Zm(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function yv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : yv;
  function es(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Qe.call(r, c) || !Za(n[c], r[c])) return !1;
    }
    return !0;
  }
  function gv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Sv(n, r) {
    var l = gv(n);
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
      l = gv(l);
    }
  }
  function vc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
  function Ev(n) {
    var r = hl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Gu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Sv(l, d);
          var m = Sv(
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
  var Xu = S && "documentMode" in document && 11 >= document.documentMode, Ku = null, ad = null, ts = null, id = !1;
  function Cv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    id || Ku == null || Ku !== Gn(o) || (o = Ku, "selectionStart" in o && Gu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && es(ts, o) || (ts = o, o = os(ad, "onSelect"), 0 < o.length && (r = new Ge("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ku)));
  }
  function ns(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ju = { animationend: ns("Animation", "AnimationEnd"), animationiteration: ns("Animation", "AnimationIteration"), animationstart: ns("Animation", "AnimationStart"), transitionend: ns("Transition", "TransitionEnd") }, hc = {}, wr = {};
  S && (wr = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function rs(n) {
    if (hc[n]) return hc[n];
    if (!Ju[n]) return n;
    var r = Ju[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in wr) return hc[n] = r[l];
    return n;
  }
  var Rv = rs("animationend"), Tv = rs("animationiteration"), bv = rs("animationstart"), wv = rs("transitionend"), _v = /* @__PURE__ */ new Map(), ld = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    _v.set(n, r), pt(r, [n]);
  }
  for (var tu = 0; tu < ld.length; tu++) {
    var ud = ld[tu], as = ud.toLowerCase(), ey = ud[0].toUpperCase() + ud.slice(1);
    yi(as, "on" + ey);
  }
  yi(Rv, "onAnimationEnd"), yi(Tv, "onAnimationIteration"), yi(bv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(wv, "onTransitionEnd"), Ae("onMouseEnter", ["mouseout", "mouseover"]), Ae("onMouseLeave", ["mouseout", "mouseover"]), Ae("onPointerEnter", ["pointerout", "pointerover"]), Ae("onPointerLeave", ["pointerout", "pointerover"]), pt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), pt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), pt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), pt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), pt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), pt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, de(o, r, void 0, n), n.currentTarget = null;
  }
  function yc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, A = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, A), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, A = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, A), d = T;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function Yt(n, r) {
    var l = r[cd];
    l === void 0 && (l = r[cd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (od(r, n, 2, !1), l.add(o));
  }
  function ml(n, r, l) {
    var o = 0;
    r && (o |= 4), od(l, n, o, r);
  }
  var ls = "_reactListening" + Math.random().toString(36).slice(2);
  function us(n) {
    if (!n[ls]) {
      n[ls] = !0, Ue.forEach(function(l) {
        l !== "selectionchange" && (ty.has(l) || ml(l, !1, n), ml(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ls] || (r[ls] = !0, ml("selectionchange", !1, r));
    }
  }
  function od(n, r, l, o) {
    switch (Go(r)) {
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
  function sd(n, r, l, o, c) {
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
      var A = d, J = cn(l), Z = [];
      e: {
        var X = _v.get(n);
        if (X !== void 0) {
          var ge = Ge, _e = n;
          switch (n) {
            case "keypress":
              if (z(l) === 0) break e;
            case "keydown":
            case "keyup":
              ge = Zf;
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
              ge = Xo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ge = dc;
              break;
            case Rv:
            case Tv:
            case bv:
              ge = Kf;
              break;
            case wv:
              ge = Xr;
              break;
            case "scroll":
              ge = $t;
              break;
            case "wheel":
              ge = An;
              break;
            case "copy":
            case "cut":
            case "paste":
              ge = Jf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ge = fc;
          }
          var Le = (r & 4) !== 0, Mn = !Le && n === "scroll", O = Le ? X !== null ? X + "Capture" : null : X;
          Le = [];
          for (var w = A, M; w !== null; ) {
            M = w;
            var ne = M.stateNode;
            if (M.tag === 5 && ne !== null && (M = ne, O !== null && (ne = si(w, O), ne != null && Le.push(Zu(w, ne, M)))), Mn) break;
            w = w.return;
          }
          0 < Le.length && (X = new ge(X, _e, null, l, J), Z.push({ event: X, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (X = n === "mouseover" || n === "pointerover", ge = n === "mouseout" || n === "pointerout", X && l !== Zn && (_e = l.relatedTarget || l.fromElement) && (iu(_e) || _e[Yi])) break e;
          if ((ge || X) && (X = J.window === J ? J : (X = J.ownerDocument) ? X.defaultView || X.parentWindow : window, ge ? (_e = l.relatedTarget || l.toElement, ge = A, _e = _e ? iu(_e) : null, _e !== null && (Mn = ve(_e), _e !== Mn || _e.tag !== 5 && _e.tag !== 6) && (_e = null)) : (ge = null, _e = A), ge !== _e)) {
            if (Le = Dn, ne = "onMouseLeave", O = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Le = fc, ne = "onPointerLeave", O = "onPointerEnter", w = "pointer"), Mn = ge == null ? X : je(ge), M = _e == null ? X : je(_e), X = new Le(ne, w + "leave", ge, l, J), X.target = Mn, X.relatedTarget = M, ne = null, iu(J) === A && (Le = new Le(O, w + "enter", _e, l, J), Le.target = M, Le.relatedTarget = Mn, ne = Le), Mn = ne, ge && _e) t: {
              for (Le = ge, O = _e, w = 0, M = Le; M; M = nu(M)) w++;
              for (M = 0, ne = O; ne; ne = nu(ne)) M++;
              for (; 0 < w - M; ) Le = nu(Le), w--;
              for (; 0 < M - w; ) O = nu(O), M--;
              for (; w--; ) {
                if (Le === O || O !== null && Le === O.alternate) break t;
                Le = nu(Le), O = nu(O);
              }
              Le = null;
            }
            else Le = null;
            ge !== null && gc(Z, X, ge, Le, !1), _e !== null && Mn !== null && gc(Z, Mn, _e, Le, !0);
          }
        }
        e: {
          if (X = A ? je(A) : window, ge = X.nodeName && X.nodeName.toLowerCase(), ge === "select" || ge === "input" && X.type === "file") var Ne = fv;
          else if (sv(X)) if (dv) Ne = Zm;
          else {
            Ne = Jm;
            var xe = Km;
          }
          else (ge = X.nodeName) && ge.toLowerCase() === "input" && (X.type === "checkbox" || X.type === "radio") && (Ne = mv);
          if (Ne && (Ne = Ne(n, A))) {
            cv(Z, Ne, l, J);
            break e;
          }
          xe && xe(n, X, A), n === "focusout" && (xe = X._wrapperState) && xe.controlled && X.type === "number" && qa(X, "number", X.value);
        }
        switch (xe = A ? je(A) : window, n) {
          case "focusin":
            (sv(xe) || xe.contentEditable === "true") && (Ku = xe, ad = A, ts = null);
            break;
          case "focusout":
            ts = ad = Ku = null;
            break;
          case "mousedown":
            id = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            id = !1, Cv(Z, l, J);
            break;
          case "selectionchange":
            if (Xu) break;
          case "keydown":
          case "keyup":
            Cv(Z, l, J);
        }
        var He;
        if (Jo) e: {
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
        else Wu ? pc(n, l) && (Ke = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (Qu && l.locale !== "ko" && (Wu || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && Wu && (He = C()) : (Na = J, Iu = "value" in Na ? Na.value : Na.textContent, Wu = !0)), xe = os(A, Ke), 0 < xe.length && (Ke = new cc(Ke, n, null, l, J), Z.push({ event: Ke, listeners: xe }), He ? Ke.data = He : (He = uv(l), He !== null && (Ke.data = He)))), (He = qm ? Gm(n, l) : ov(n, l)) && (A = os(A, "onBeforeInput"), 0 < A.length && (J = new cc("onBeforeInput", "beforeinput", null, l, J), Z.push({ event: J, listeners: A }), J.data = He));
      }
      yc(Z, r);
    });
  }
  function Zu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function os(n, r) {
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
  function gc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, A = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && A !== null && (E = A, c ? (T = si(l, d), T != null && m.unshift(Zu(l, T, E))) : c || (T = si(l, d), T != null && m.push(Zu(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ny = /\r\n?/g, xv = /\u0000|\uFFFD/g;
  function kv(n) {
    return (typeof n == "string" ? n : "" + n).replace(ny, `
`).replace(xv, "");
  }
  function Sc(n, r, l) {
    if (r = kv(r), kv(n) !== r && l) throw Error(D(425));
  }
  function Ec() {
  }
  var ru = null, ss = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, Dv = typeof clearTimeout == "function" ? clearTimeout : void 0, Rc = typeof Promise == "function" ? Promise : void 0, ry = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rc < "u" ? function(n) {
    return Rc.resolve(null).then(n).catch(eo);
  } : Cc;
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
  function Tc(n) {
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
  var no = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + no, cs = "__reactProps$" + no, Yi = "__reactContainer$" + no, cd = "__reactEvents$" + no, fd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Tc(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Tc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function fs(n) {
    return n = n[Ma] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function je(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(D(33));
  }
  function Ii(n) {
    return n[cs] || null;
  }
  var jn = [], Ct = -1;
  function Kr(n) {
    return { current: n };
  }
  function Zt(n) {
    0 > Ct || (n.current = jn[Ct], jn[Ct] = null, Ct--);
  }
  function ln(n, r) {
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
    Zt(Fn), Zt(wn);
  }
  function bc(n, r, l) {
    if (wn.current !== mt) throw Error(D(168));
    ln(wn, r), ln(Fn, l);
  }
  function Ov(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(D(108, Ie(n) || "Unknown", c));
    return se({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || mt, za = wn.current, ln(wn, n), ln(Fn, Fn.current), !0;
  }
  function Ua(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(D(169));
    l ? (n = Ov(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Zt(Fn), Zt(wn), ln(wn, n)) : Zt(Fn), ln(Fn, l);
  }
  var ti = null, ds = !1, ps = !1;
  function yl(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  function dd(n) {
    ds = !0, yl(n);
  }
  function Mr() {
    if (!ps && ti !== null) {
      ps = !0;
      var n = 0, r = _t;
      try {
        var l = ti;
        for (_t = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, ds = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), fn(rt, Mr), c;
      } finally {
        _t = r, ps = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, ao = null, El = 0, sr = [], Pn = 0, uu = null, zr = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = ao, ao = n, El = r;
  }
  function Lv(n, r, l) {
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
  function pd(n) {
    n.return !== null && (Cl(n, 1), Lv(n, 1, 0));
  }
  function wc(n) {
    for (; n === ao; ) ao = gl[--Sl], gl[Sl] = null, El = gl[--Sl], gl[Sl] = null;
    for (; n === uu; ) uu = sr[--Pn], sr[Pn] = null, Si = sr[--Pn], sr[Pn] = null, zr = sr[--Pn], sr[Pn] = null;
  }
  var Jr = null, Zr = null, mn = !1, ni = null;
  function vd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hd(n, r) {
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
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yd(n) {
    if (mn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!hd(n, r)) {
          if (md(n)) throw Error(D(418));
          r = ei(l.nextSibling);
          var o = Jr;
          r && hd(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, mn = !1, Jr = n);
        }
      } else {
        if (md(n)) throw Error(D(418));
        n.flags = n.flags & -4097 | 2, mn = !1, Jr = n;
      }
    }
  }
  function Nv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function On(n) {
    if (n !== Jr) return !1;
    if (!mn) return Nv(n), mn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (md(n)) throw Mv(), Error(D(418));
      for (; r; ) vd(n, r), r = ei(r.nextSibling);
    }
    if (Nv(n), n.tag === 13) {
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
  function Mv() {
    for (var n = Zr; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    Zr = Jr = null, mn = !1;
  }
  function vs(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = Ye.ReactCurrentBatchConfig;
  function hs(n, r, l) {
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
  function zv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Uv(n) {
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
      var Ne = M.type;
      return Ne === ct ? J(O, w, M.props.children, ne, M.key) : w !== null && (w.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === vt && zv(Ne) === w.type) ? (ne = c(w, M.props), ne.ref = hs(O, w, M), ne.return = O, ne) : (ne = ff(M.type, M.key, M.props, null, O.mode, ne), ne.ref = hs(O, w, M), ne.return = O, ne);
    }
    function A(O, w, M, ne) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== M.containerInfo || w.stateNode.implementation !== M.implementation ? (w = qd(M, O.mode, ne), w.return = O, w) : (w = c(w, M.children || []), w.return = O, w);
    }
    function J(O, w, M, ne, Ne) {
      return w === null || w.tag !== 7 ? (w = Ml(M, O.mode, ne, Ne), w.return = O, w) : (w = c(w, M), w.return = O, w);
    }
    function Z(O, w, M) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = wu("" + w, O.mode, M), w.return = O, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ot:
            return M = ff(w.type, w.key, w.props, null, O.mode, M), M.ref = hs(O, null, w), M.return = O, M;
          case Oe:
            return w = qd(w, O.mode, M), w.return = O, w;
          case vt:
            var ne = w._init;
            return Z(O, ne(w._payload), M);
        }
        if (Dr(w) || Re(w)) return w = Ml(w, O.mode, M, null), w.return = O, w;
        io(O, w);
      }
      return null;
    }
    function X(O, w, M, ne) {
      var Ne = w !== null ? w.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number") return Ne !== null ? null : E(O, w, "" + M, ne);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ot:
            return M.key === Ne ? T(O, w, M, ne) : null;
          case Oe:
            return M.key === Ne ? A(O, w, M, ne) : null;
          case vt:
            return Ne = M._init, X(
              O,
              w,
              Ne(M._payload),
              ne
            );
        }
        if (Dr(M) || Re(M)) return Ne !== null ? null : J(O, w, M, ne, null);
        io(O, M);
      }
      return null;
    }
    function ge(O, w, M, ne, Ne) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return O = O.get(M) || null, E(w, O, "" + ne, Ne);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case Ot:
            return O = O.get(ne.key === null ? M : ne.key) || null, T(w, O, ne, Ne);
          case Oe:
            return O = O.get(ne.key === null ? M : ne.key) || null, A(w, O, ne, Ne);
          case vt:
            var xe = ne._init;
            return ge(O, w, M, xe(ne._payload), Ne);
        }
        if (Dr(ne) || Re(ne)) return O = O.get(M) || null, J(w, O, ne, Ne, null);
        io(w, ne);
      }
      return null;
    }
    function _e(O, w, M, ne) {
      for (var Ne = null, xe = null, He = w, Ke = w = 0, ir = null; He !== null && Ke < M.length; Ke++) {
        He.index > Ke ? (ir = He, He = null) : ir = He.sibling;
        var Mt = X(O, He, M[Ke], ne);
        if (Mt === null) {
          He === null && (He = ir);
          break;
        }
        n && He && Mt.alternate === null && r(O, He), w = d(Mt, w, Ke), xe === null ? Ne = Mt : xe.sibling = Mt, xe = Mt, He = ir;
      }
      if (Ke === M.length) return l(O, He), mn && Cl(O, Ke), Ne;
      if (He === null) {
        for (; Ke < M.length; Ke++) He = Z(O, M[Ke], ne), He !== null && (w = d(He, w, Ke), xe === null ? Ne = He : xe.sibling = He, xe = He);
        return mn && Cl(O, Ke), Ne;
      }
      for (He = o(O, He); Ke < M.length; Ke++) ir = ge(He, O, Ke, M[Ke], ne), ir !== null && (n && ir.alternate !== null && He.delete(ir.key === null ? Ke : ir.key), w = d(ir, w, Ke), xe === null ? Ne = ir : xe.sibling = ir, xe = ir);
      return n && He.forEach(function(zl) {
        return r(O, zl);
      }), mn && Cl(O, Ke), Ne;
    }
    function Le(O, w, M, ne) {
      var Ne = Re(M);
      if (typeof Ne != "function") throw Error(D(150));
      if (M = Ne.call(M), M == null) throw Error(D(151));
      for (var xe = Ne = null, He = w, Ke = w = 0, ir = null, Mt = M.next(); He !== null && !Mt.done; Ke++, Mt = M.next()) {
        He.index > Ke ? (ir = He, He = null) : ir = He.sibling;
        var zl = X(O, He, Mt.value, ne);
        if (zl === null) {
          He === null && (He = ir);
          break;
        }
        n && He && zl.alternate === null && r(O, He), w = d(zl, w, Ke), xe === null ? Ne = zl : xe.sibling = zl, xe = zl, He = ir;
      }
      if (Mt.done) return l(
        O,
        He
      ), mn && Cl(O, Ke), Ne;
      if (He === null) {
        for (; !Mt.done; Ke++, Mt = M.next()) Mt = Z(O, Mt.value, ne), Mt !== null && (w = d(Mt, w, Ke), xe === null ? Ne = Mt : xe.sibling = Mt, xe = Mt);
        return mn && Cl(O, Ke), Ne;
      }
      for (He = o(O, He); !Mt.done; Ke++, Mt = M.next()) Mt = ge(He, O, Ke, Mt.value, ne), Mt !== null && (n && Mt.alternate !== null && He.delete(Mt.key === null ? Ke : Mt.key), w = d(Mt, w, Ke), xe === null ? Ne = Mt : xe.sibling = Mt, xe = Mt);
      return n && He.forEach(function(gy) {
        return r(O, gy);
      }), mn && Cl(O, Ke), Ne;
    }
    function Mn(O, w, M, ne) {
      if (typeof M == "object" && M !== null && M.type === ct && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Ot:
            e: {
              for (var Ne = M.key, xe = w; xe !== null; ) {
                if (xe.key === Ne) {
                  if (Ne = M.type, Ne === ct) {
                    if (xe.tag === 7) {
                      l(O, xe.sibling), w = c(xe, M.props.children), w.return = O, O = w;
                      break e;
                    }
                  } else if (xe.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === vt && zv(Ne) === xe.type) {
                    l(O, xe.sibling), w = c(xe, M.props), w.ref = hs(O, xe, M), w.return = O, O = w;
                    break e;
                  }
                  l(O, xe);
                  break;
                } else r(O, xe);
                xe = xe.sibling;
              }
              M.type === ct ? (w = Ml(M.props.children, O.mode, ne, M.key), w.return = O, O = w) : (ne = ff(M.type, M.key, M.props, null, O.mode, ne), ne.ref = hs(O, w, M), ne.return = O, O = ne);
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
              w = qd(M, O.mode, ne), w.return = O, O = w;
            }
            return m(O);
          case vt:
            return xe = M._init, Mn(O, w, xe(M._payload), ne);
        }
        if (Dr(M)) return _e(O, w, M, ne);
        if (Re(M)) return Le(O, w, M, ne);
        io(O, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, w !== null && w.tag === 6 ? (l(O, w.sibling), w = c(w, M), w.return = O, O = w) : (l(O, w), w = wu(M, O.mode, ne), w.return = O, O = w), m(O)) : l(O, w);
    }
    return Mn;
  }
  var ri = Uv(!0), cr = Uv(!1), fe = Kr(null), ma = null, _r = null, gd = null;
  function Sd() {
    gd = _r = ma = null;
  }
  function Ed(n) {
    var r = fe.current;
    Zt(fe), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ma = n, gd = _r = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (rr = !0), n.firstContext = null);
  }
  function Qt(n) {
    var r = n._currentValue;
    if (gd !== n) if (n = { context: n, memoizedValue: r, next: null }, _r === null) {
      if (ma === null) throw Error(D(308));
      _r = n, ma.dependencies = { lanes: 0, firstContext: n };
    } else _r = _r.next = n;
    return r;
  }
  var su = null;
  function Rd(n) {
    su === null ? su = [n] : su.push(n);
  }
  function Av(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Rd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ei(n, o);
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
  function jv(n, r) {
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
    return c = o.interleaved, c === null ? (r.next = r, Rd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ei(n, l);
  }
  function _c(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  function Fv(n, r) {
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
  function xc(n, r, l, o) {
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
        var X = E.lane, ge = E.eventTime;
        if ((o & X) === X) {
          J !== null && (J = J.next = {
            eventTime: ge,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var _e = n, Le = E;
            switch (X = r, ge = l, Le.tag) {
              case 1:
                if (_e = Le.payload, typeof _e == "function") {
                  Z = _e.call(ge, Z, X);
                  break e;
                }
                Z = _e;
                break e;
              case 3:
                _e.flags = _e.flags & -65537 | 128;
              case 0:
                if (_e = Le.payload, X = typeof _e == "function" ? _e.call(ge, Z, X) : _e, X == null) break e;
                Z = se({}, Z, X);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, X = c.effects, X === null ? c.effects = [E] : X.push(E));
        } else ge = { eventTime: ge, lane: X, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, J === null ? (A = J = ge, T = Z) : J = J.next = ge, m |= X;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          X = E, E = X.next, X.next = null, c.lastBaseUpdate = X, c.shared.pending = null;
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
  function Td(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(D(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ci = Kr(uo), ms = Kr(uo), ys = Kr(uo);
  function cu(n) {
    if (n === uo) throw Error(D(174));
    return n;
  }
  function bd(n, r) {
    switch (ln(ys, r), ln(ms, n), ln(Ci, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ur(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ur(r, n);
    }
    Zt(Ci), ln(Ci, r);
  }
  function oo() {
    Zt(Ci), Zt(ms), Zt(ys);
  }
  function wd(n) {
    cu(ys.current);
    var r = cu(Ci.current), l = ur(r, n.type);
    r !== l && (ln(ms, n), ln(Ci, l));
  }
  function _d(n) {
    ms.current === n && (Zt(Ci), Zt(ms));
  }
  var En = Kr(0);
  function kc(n) {
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
  var xd = [];
  function gs() {
    for (var n = 0; n < xd.length; n++) xd[n]._workInProgressVersionPrimary = null;
    xd.length = 0;
  }
  var Fe = Ye.ReactCurrentDispatcher, yt = Ye.ReactCurrentBatchConfig, bt = 0, at = null, en = null, In = null, Dc = !1, Ss = !1, Es = 0, kd = 0;
  function $() {
    throw Error(D(321));
  }
  function Vn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function qe(n, r, l, o, c, d) {
    if (bt = d, at = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Fe.current = n === null || n.memoizedState === null ? Yc : Ic, n = l(o, c), Ss) {
      d = 0;
      do {
        if (Ss = !1, Es = 0, 25 <= d) throw Error(D(301));
        d += 1, In = en = null, r.updateQueue = null, Fe.current = ws, n = l(o, c);
      } while (Ss);
    }
    if (Fe.current = Wt, r = en !== null && en.next !== null, bt = 0, In = en = at = null, Dc = !1, r) throw Error(D(300));
    return n;
  }
  function bl() {
    var n = Es !== 0;
    return Es = 0, n;
  }
  function tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return In === null ? at.memoizedState = In = n : In = In.next = n, In;
  }
  function nr() {
    if (en === null) {
      var n = at.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = en.next;
    var r = In === null ? at.memoizedState : In.next;
    if (r !== null) In = r, en = n;
    else {
      if (n === null) throw Error(D(310));
      en = n, n = { memoizedState: en.memoizedState, baseState: en.baseState, baseQueue: en.baseQueue, queue: en.queue, next: null }, In === null ? at.memoizedState = In = n : In = In.next = n;
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
    var o = en, c = o.baseQueue, d = l.pending;
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
  function Oc(n, r) {
    var l = at, o = nr(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, rr = !0), o = o.queue, Cs(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || In !== null && In.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Nc.bind(null, l, o, c, r), void 0, null), Bn === null) throw Error(D(349));
      bt & 30 || Lc(l, r, c);
    }
    return c;
  }
  function Lc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = at.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, at.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Nc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, zc(r) && Uc(n);
  }
  function Mc(n, r, l) {
    return l(function() {
      zc(r) && Uc(n);
    });
  }
  function zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function Uc(n) {
    var r = Ei(n, 1);
    r !== null && Ca(r, n, 1, -1);
  }
  function Ac(n) {
    var r = tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = bs.bind(null, at, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = at.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, at.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function jc() {
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
    if (en !== null) {
      var m = en.memoizedState;
      if (d = m.destroy, o !== null && Vn(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    at.flags |= n, c.memoizedState = du(1 | r, l, d, o);
  }
  function Fc(n, r) {
    return co(8390656, 8, n, r);
  }
  function Cs(n, r) {
    return fo(2048, 8, n, r);
  }
  function Hc(n, r) {
    return fo(4, 2, n, r);
  }
  function Pc(n, r) {
    return fo(4, 4, n, r);
  }
  function Rs(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function pu(n, r, l) {
    return l = l != null ? l.concat([n]) : null, fo(4, 4, Rs.bind(null, r, n), l);
  }
  function Ts() {
  }
  function Vc(n, r) {
    var l = nr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Vn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Bc(n, r) {
    var l = nr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Vn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function $c(n, r, l) {
    return bt & 21 ? (Za(l, r) || (l = ql(), at.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, rr = !0), n.memoizedState = l);
  }
  function Hv(n, r) {
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
  function Pv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, _l(n)) ya(r, l);
    else if (l = Av(n, r, l, o), l !== null) {
      var c = un();
      Ca(l, n, o, c), Vv(l, r, o);
    }
  }
  function bs(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (_l(n)) ya(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Rd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Av(n, r, c, o), l !== null && (c = un(), Ca(l, n, o, c), Vv(l, r, o));
    }
  }
  function _l(n) {
    var r = n.alternate;
    return n === at || r !== null && r === at;
  }
  function ya(n, r) {
    Ss = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Vv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  var Wt = { readContext: Qt, useCallback: $, useContext: $, useEffect: $, useImperativeHandle: $, useInsertionEffect: $, useLayoutEffect: $, useMemo: $, useReducer: $, useRef: $, useState: $, useDebugValue: $, useDeferredValue: $, useTransition: $, useMutableSource: $, useSyncExternalStore: $, useId: $, unstable_isNewReconciler: !1 }, Yc = { readContext: Qt, useCallback: function(n, r) {
    return tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Qt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(
      4194308,
      4,
      Rs.bind(null, r, n),
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Pv.bind(null, at, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ac, useDebugValue: Ts, useDeferredValue: function(n) {
    return tr().memoizedState = n;
  }, useTransition: function() {
    var n = Ac(!1), r = n[0];
    return n = Hv.bind(null, n[1]), tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = at, c = tr();
    if (mn) {
      if (l === void 0) throw Error(D(407));
      l = l();
    } else {
      if (l = r(), Bn === null) throw Error(D(349));
      bt & 30 || Lc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Fc(Mc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, du(9, Nc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = tr(), r = Bn.identifierPrefix;
    if (mn) {
      var l = Si, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Es++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = kd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ic = {
    readContext: Qt,
    useCallback: Vc,
    useContext: Qt,
    useEffect: Cs,
    useImperativeHandle: pu,
    useInsertionEffect: Hc,
    useLayoutEffect: Pc,
    useMemo: Bc,
    useReducer: fu,
    useRef: jc,
    useState: function() {
      return fu(ea);
    },
    useDebugValue: Ts,
    useDeferredValue: function(n) {
      var r = nr();
      return $c(r, en.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ea)[0], r = nr().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Oc,
    useId: po,
    unstable_isNewReconciler: !1
  }, ws = { readContext: Qt, useCallback: Vc, useContext: Qt, useEffect: Cs, useImperativeHandle: pu, useInsertionEffect: Hc, useLayoutEffect: Pc, useMemo: Bc, useReducer: wl, useRef: jc, useState: function() {
    return wl(ea);
  }, useDebugValue: Ts, useDeferredValue: function(n) {
    var r = nr();
    return en === null ? r.memoizedState = n : $c(r, en.memoizedState, n);
  }, useTransition: function() {
    var n = wl(ea)[0], r = nr().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: Oc, useId: po, unstable_isNewReconciler: !1 };
  function ta(n, r) {
    if (n && n.defaultProps) {
      r = se({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : se({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ve(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = un(), c = Ea(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), _c(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = un(), c = Ea(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), _c(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = un(), o = Ea(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, o), r !== null && (Ca(r, n, o, l), _c(r, n, o));
  } };
  function Bv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function $v(n, r, l) {
    var o = !1, c = mt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Qt(d) : (c = Hn(r) ? za : wn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : mt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Wc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Od(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Qt(d) : (d = Hn(r) ? za : wn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), xc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Te(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function qc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ay = typeof WeakMap == "function" ? WeakMap : Map;
  function _s(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dl || (Dl = !0, zs = o), Ld(n, r);
    }, l;
  }
  function Yv(n, r, l) {
    l = Wi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ay();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Id.bind(null, n, r, l), r.then(n, n));
  }
  function Md(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Iv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, Tl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = Ye.ReactCurrentOwner, rr = !1;
  function Ln(n, r, l, o) {
    r.child = n === null ? cr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function Gc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = qe(n, r, l, o, d, c), l = bl(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, fr(n, r, c)) : (mn && l && pd(r), r.flags |= 1, Ln(n, r, o, c), r.child);
  }
  function na(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = ff(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return fr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (rr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (rr = !0);
      else return r.lanes = n.lanes, fr(n, r, c);
    }
    return Xc(n, r, l, o, c);
  }
  function ut(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ln(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, ln(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, ln(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, ln(yo, Sa), Sa |= o;
    return Ln(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xc(n, r, l, o, c) {
    var d = Hn(l) ? za : wn.current;
    return d = ha(r, d), lo(r, c), l = qe(n, r, l, o, d, c), o = bl(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, fr(n, r, c)) : (mn && o && pd(r), r.flags |= 1, Ln(n, r, l, c), r.child);
  }
  function iy(n, r, l, o, c) {
    if (Hn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) ja(n, r), $v(r, l, o), Od(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = Qt(A) : (A = Hn(l) ? za : wn.current, A = ha(r, A));
      var J = l.getDerivedStateFromProps, Z = typeof J == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Z || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== A) && Wc(r, m, o, A), Aa = !1;
      var X = r.memoizedState;
      m.state = X, xc(r, o, m, c), T = r.memoizedState, E !== o || X !== T || Fn.current || Aa ? (typeof J == "function" && (Dd(r, l, J, o), T = r.memoizedState), (E = Aa || Bv(r, l, E, o, X, T, A)) ? (Z || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, jv(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ta(r.type, E), m.props = A, Z = r.pendingProps, X = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Qt(T) : (T = Hn(l) ? za : wn.current, T = ha(r, T));
      var ge = l.getDerivedStateFromProps;
      (J = typeof ge == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Z || X !== T) && Wc(r, m, o, T), Aa = !1, X = r.memoizedState, m.state = X, xc(r, o, m, c);
      var _e = r.memoizedState;
      E !== Z || X !== _e || Fn.current || Aa ? (typeof ge == "function" && (Dd(r, l, ge, o), _e = r.memoizedState), (A = Aa || Bv(r, l, A, o, X, _e, T) || !1) ? (J || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, _e, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, _e, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = _e), m.props = o, m.state = _e, m.context = T, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && X === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && X === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return zd(n, r, l, o, d, c);
  }
  function zd(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ua(r, l, !1), fr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : Ln(n, r, E, d), r.memoizedState = o.state, c && Ua(r, l, !0), r.child;
  }
  function Kc(n) {
    var r = n.stateNode;
    r.pendingContext ? bc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && bc(n, r.context, !1), bd(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Qi(), vs(c), r.flags |= 256, Ln(n, r, l, o), r.child;
  }
  var Ud = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Qv(n, r, l) {
    var o = r.pendingProps, c = En.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), ln(En, c & 1), n === null)
      return yd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Jc(l), r.memoizedState = Ud, n) : ks(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Wv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Nl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Jc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Ud, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function ks(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Zc(n, r, l, o) {
    return o !== null && vs(o), ri(r, n.child, null, l), n = ks(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Wv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = qc(Error(D(422))), Zc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Jc(m), r.memoizedState = Ud, d);
    if (!(r.mode & 1)) return Zc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(D(419)), o = qc(d, o, void 0), Zc(n, r, m, o);
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
      return $d(), o = qc(Error(D(421))), Zc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = fy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = ei(c.nextSibling), Jr = r, mn = !0, ni = null, n !== null && (sr[Pn++] = zr, sr[Pn++] = Si, sr[Pn++] = uu, zr = n.id, Si = n.overflow, uu = r), r = ks(r, o.children), r.flags |= 4096, r);
  }
  function Ad(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, l);
  }
  function ef(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ra(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Ln(n, r, o.children, l), o = En.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Ad(n, l, r);
        else if (n.tag === 19) Ad(n, l, r);
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
    if (ln(En, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && kc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), ef(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && kc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        ef(r, !0, l, null, d);
        break;
      case "together":
        ef(r, !1, null, null, void 0);
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
  function tf(n, r, l) {
    switch (r.tag) {
      case 3:
        Kc(r), Qi();
        break;
      case 5:
        wd(r);
        break;
      case 1:
        Hn(r.type) && lu(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        ln(fe, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (ln(En, En.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Qv(n, r, l) : (ln(En, En.current & 1), n = fr(n, r, l), n !== null ? n.sibling : null);
        ln(En, En.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ra(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ln(En, En.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ut(n, r, l);
    }
    return fr(n, r, l);
  }
  var ho, ga, Qn, qv;
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
          c = se({}, c, { value: void 0 }), o = se({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Kn(n, c), o = Kn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      pn(l, o);
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
        else A === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(A, T)) : A === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(A, "" + T) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (De.hasOwnProperty(A) ? (T != null && A === "onScroll" && Yt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(A, T));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!mn) switch (n.tailMode) {
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
  function jd(n, r, l) {
    var o = r.pendingProps;
    switch (wc(r), r.tag) {
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
        return o = r.stateNode, oo(), Zt(Fn), Zt(wn), gs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (On(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (Fs(ni), ni = null))), ga(n, r), xr(r), null;
      case 5:
        _d(r);
        var c = cu(ys.current);
        if (l = r.type, n !== null && r.stateNode != null) Qn(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(D(166));
            return xr(r), null;
          }
          if (n = cu(Ci.current), On(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[cs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Yt("cancel", o), Yt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Yt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < is.length; c++) Yt(is[c], o);
                break;
              case "source":
                Yt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Yt(
                  "error",
                  o
                ), Yt("load", o);
                break;
              case "details":
                Yt("toggle", o);
                break;
              case "input":
                Xn(o, d), Yt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Yt("invalid", o);
                break;
              case "textarea":
                Jn(o, d), Yt("invalid", o);
            }
            pn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : De.hasOwnProperty(m) && E != null && m === "onScroll" && Yt("scroll", o);
            }
            switch (l) {
              case "input":
                on(o), ca(o, d, !0);
                break;
              case "textarea":
                on(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ec);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Un(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[cs] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = vn(l, o), l) {
                case "dialog":
                  Yt("cancel", n), Yt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < is.length; c++) Yt(is[c], n);
                  c = o;
                  break;
                case "source":
                  Yt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Yt(
                    "error",
                    n
                  ), Yt("load", n), c = o;
                  break;
                case "details":
                  Yt("toggle", n), c = o;
                  break;
                case "input":
                  Xn(n, o), c = Tn(n, o), Yt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = se({}, o, { value: void 0 }), Yt("invalid", n);
                  break;
                case "textarea":
                  Jn(n, o), c = Kn(n, o), Yt("invalid", n);
                  break;
                default:
                  c = o;
              }
              pn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Ht(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Li(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && fa(n, T) : typeof T == "number" && fa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (De.hasOwnProperty(d) ? T != null && d === "onScroll" && Yt("scroll", n) : T != null && ot(n, d, T, m));
              }
              switch (l) {
                case "input":
                  on(n), ca(n, o, !1);
                  break;
                case "textarea":
                  on(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Ce(o.value));
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
                  typeof c.onClick == "function" && (n.onclick = Ec);
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
        if (n && r.stateNode != null) qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(D(166));
          if (l = cu(ys.current), cu(Ci.current), On(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Jr, n !== null)) switch (n.tag) {
              case 3:
                Sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return xr(r), null;
      case 13:
        if (Zt(En), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (mn && Zr !== null && r.mode & 1 && !(r.flags & 128)) Mv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = On(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(D(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(D(317));
              d[Ma] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), d = !1;
          } else ni !== null && (Fs(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || En.current & 1 ? Wn === 0 && (Wn = 3) : $d())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return oo(), ga(n, r), n === null && us(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return Ed(r.type._context), xr(r), null;
      case 17:
        return Hn(r.type) && gi(), xr(r), null;
      case 19:
        if (Zt(En), d = r.memoizedState, d === null) return xr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (Wn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = kc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return ln(En, En.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Vt() > So && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = kc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !mn) return xr(r), null;
          } else 2 * Vt() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Vt(), r.sibling = null, l = En.current, ln(En, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Bd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(D(156, r.tag));
  }
  function Gv(n, r) {
    switch (wc(r), r.tag) {
      case 1:
        return Hn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Zt(Fn), Zt(wn), gs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return _d(r), null;
      case 13:
        if (Zt(En), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(D(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Zt(En), null;
      case 4:
        return oo(), null;
      case 10:
        return Ed(r.type._context), null;
      case 22:
      case 23:
        return Bd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var mu = !1, dr = !1, ly = typeof WeakSet == "function" ? WeakSet : Set, be = null;
  function kl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      _n(n, r, o);
    }
    else l.current = null;
  }
  function Fd(n, r, l) {
    try {
      l();
    } catch (o) {
      _n(n, r, o);
    }
  }
  var Hd = !1;
  function uy(n, r) {
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
          var m = 0, E = -1, T = -1, A = 0, J = 0, Z = n, X = null;
          t: for (; ; ) {
            for (var ge; Z !== l || c !== 0 && Z.nodeType !== 3 || (E = m + c), Z !== d || o !== 0 && Z.nodeType !== 3 || (T = m + o), Z.nodeType === 3 && (m += Z.nodeValue.length), (ge = Z.firstChild) !== null; )
              X = Z, Z = ge;
            for (; ; ) {
              if (Z === n) break t;
              if (X === l && ++A === c && (E = m), X === d && ++J === o && (T = m), (ge = Z.nextSibling) !== null) break;
              Z = X, X = Z.parentNode;
            }
            Z = ge;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ss = { focusedElem: n, selectionRange: l }, dl = !1, be = r; be !== null; ) if (r = be, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, be = n;
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
              var Le = _e.memoizedProps, Mn = _e.memoizedState, O = r.stateNode, w = O.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : ta(r.type, Le), Mn);
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
    return _e = Hd, Hd = !1, _e;
  }
  function mo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Fd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function nf(n, r) {
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
  function rf(n) {
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
  function Xv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Xv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[cs], delete r[cd], delete r[fd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function af(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Os(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || af(n.return)) return null;
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
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ec));
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
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Fd(l, r, m), c = c.next;
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
  function Kv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new ly()), r.forEach(function(o) {
        var c = dy.bind(null, n, o);
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
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Jv(r, n), r = r.sibling;
  }
  function Jv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ai(r, n), ii(n), o & 4) {
          try {
            mo(3, n, n.return), nf(3, n);
          } catch (Le) {
            _n(n, n.return, Le);
          }
          try {
            mo(5, n, n.return);
          } catch (Le) {
            _n(n, n.return, Le);
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
          } catch (Le) {
            _n(n, n.return, Le);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Nt(c, d), vn(E, m);
            var A = vn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var J = T[m], Z = T[m + 1];
              J === "style" ? Ht(c, Z) : J === "dangerouslySetInnerHTML" ? Li(c, Z) : J === "children" ? fa(c, Z) : ot(c, J, Z, A);
            }
            switch (E) {
              case "input":
                sn(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var X = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ge = d.value;
                ge != null ? Yn(c, !!d.multiple, ge, !1) : X !== !!d.multiple && (d.defaultValue != null ? Yn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Yn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[cs] = d;
          } catch (Le) {
            _n(n, n.return, Le);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(D(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Le) {
            _n(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (Le) {
          _n(n, n.return, Le);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = Vt())), o & 4 && Kv(n);
        break;
      case 22:
        if (J = l !== null && l.memoizedState !== null, n.mode & 1 ? (dr = (A = dr) || J, ai(r, n), dr = A) : ai(r, n), ii(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !J && n.mode & 1) for (be = n, J = n.child; J !== null; ) {
            for (Z = be = J; be !== null; ) {
              switch (X = be, ge = X.child, X.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, X, X.return);
                  break;
                case 1:
                  kl(X, X.return);
                  var _e = X.stateNode;
                  if (typeof _e.componentWillUnmount == "function") {
                    o = X, l = X.return;
                    try {
                      r = o, _e.props = r.memoizedProps, _e.state = r.memoizedState, _e.componentWillUnmount();
                    } catch (Le) {
                      _n(o, l, Le);
                    }
                  }
                  break;
                case 5:
                  kl(X, X.return);
                  break;
                case 22:
                  if (X.memoizedState !== null) {
                    eh(Z);
                    continue;
                  }
              }
              ge !== null ? (ge.return = X, be = ge) : eh(Z);
            }
            J = J.sibling;
          }
          e: for (J = null, Z = n; ; ) {
            if (Z.tag === 5) {
              if (J === null) {
                J = Z;
                try {
                  c = Z.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Z.stateNode, T = Z.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = st("display", m));
                } catch (Le) {
                  _n(n, n.return, Le);
                }
              }
            } else if (Z.tag === 6) {
              if (J === null) try {
                Z.stateNode.nodeValue = A ? "" : Z.memoizedProps;
              } catch (Le) {
                _n(n, n.return, Le);
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
        ai(r, n), ii(n), o & 4 && Kv(n);
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
            if (af(l)) {
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
            var d = Os(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Os(n);
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
  function Ls(n, r, l) {
    be = n, Zv(n);
  }
  function Zv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; be !== null; ) {
      var c = be, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || dr;
          E = mu;
          var A = dr;
          if (mu = m, (dr = T) && !A) for (be = c; be !== null; ) m = be, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ns(c) : T !== null ? (T.return = m, be = T) : Ns(c);
          for (; d !== null; ) be = d, Zv(d), d = d.sibling;
          be = c, mu = E, dr = A;
        }
        Pd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, be = d) : Pd(n);
    }
  }
  function Pd(n) {
    for (; be !== null; ) {
      var r = be;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              dr || nf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !dr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ta(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Td(r, d, o);
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
                Td(r, m, l);
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
          dr || r.flags & 512 && rf(r);
        } catch (X) {
          _n(r, r.return, X);
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
  function eh(n) {
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
  function Ns(n) {
    for (; be !== null; ) {
      var r = be;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              nf(4, r);
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
              rf(r);
            } catch (T) {
              _n(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              rf(r);
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
  var th = Math.ceil, lf = Ye.ReactCurrentDispatcher, yu = Ye.ReactCurrentOwner, kr = Ye.ReactCurrentBatchConfig, Rt = 0, Bn = null, Nn = null, pr = 0, Sa = 0, yo = Kr(0), Wn = 0, gu = null, Su = 0, Eu = 0, Ms = 0, go = null, aa = null, Vd = 0, So = 1 / 0, Gi = null, Dl = !1, zs = null, Ha = null, uf = !1, Ol = null, Us = 0, Eo = 0, Co = null, Cu = -1, As = 0;
  function un() {
    return Rt & 6 ? Vt() : Cu !== -1 ? Cu : Cu = Vt();
  }
  function Ea(n) {
    return n.mode & 1 ? Rt & 2 && pr !== 0 ? pr & -pr : ou.transition !== null ? (As === 0 && (As = ql()), As) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(D(185));
    fl(n, l, o), (!(Rt & 2) || n !== Bn) && (n === Bn && (!(Rt & 2) && (Eu |= l), Wn === 4 && Ll(n, pr)), ar(n, o), l === 1 && Rt === 0 && !(r.mode & 1) && (So = Vt() + 500, ds && Mr()));
  }
  function ar(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = pi(n, n === Bn ? pr : 0);
    if (o === 0) l !== null && hn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && hn(l), r === 1) n.tag === 0 ? dd(Ps.bind(null, n)) : yl(Ps.bind(null, n)), ry(function() {
        !(Rt & 6) && Mr();
      }), l = null;
      else {
        switch (qo(o)) {
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
        l = uh(l, nh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function nh(n, r) {
    if (Cu = -1, As = 0, Rt & 6) throw Error(D(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = pi(n, n === Bn ? pr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = Rt;
      Rt |= 2;
      var d = rh();
      (Bn !== n || pr !== r) && (Gi = null, So = Vt() + 500, Tu(n, r));
      do
        try {
          sy();
          break;
        } catch (E) {
          sf(n, E);
        }
      while (!0);
      Sd(), lf.current = d, Rt = c, Nn !== null ? r = 0 : (Bn = null, pr = 0, r = Wn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = gu, Tu(n, 0), Ll(n, o), ar(n, Vt()), l;
      if (r === 6) Ll(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Hs(c) && (r = cf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ll(n, o), ar(n, Vt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(D(345));
          case 2:
            bu(n, aa, Gi);
            break;
          case 3:
            if (Ll(n, o), (o & 130023424) === o && (r = Vd + 500 - Vt(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                un(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(bu.bind(null, n, aa, Gi), r);
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
            if (o = c, o = Vt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * th(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(bu.bind(null, n, aa, Gi), o);
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
    return ar(n, Vt()), n.callbackNode === l ? nh.bind(null, n) : null;
  }
  function js(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = aa, aa = l, r !== null && Fs(r)), n;
  }
  function Fs(n) {
    aa === null ? aa = n : aa.push.apply(aa, n);
  }
  function Hs(n) {
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
    for (r &= ~Ms, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Or(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Ps(n) {
    if (Rt & 6) throw Error(D(327));
    Ro();
    var r = pi(n, 0);
    if (!(r & 1)) return ar(n, Vt()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ll(n, r), ar(n, Vt()), l;
    if (l === 6) throw Error(D(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, bu(n, aa, Gi), ar(n, Vt()), null;
  }
  function of(n, r) {
    var l = Rt;
    Rt |= 1;
    try {
      return n(r);
    } finally {
      Rt = l, Rt === 0 && (So = Vt() + 500, ds && Mr());
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
  function Bd() {
    Sa = yo.current, Zt(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dv(l)), Nn !== null) for (l = Nn.return; l !== null; ) {
      var o = l;
      switch (wc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), Zt(Fn), Zt(wn), gs();
          break;
        case 5:
          _d(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          Zt(En);
          break;
        case 19:
          Zt(En);
          break;
        case 10:
          Ed(o.type._context);
          break;
        case 22:
        case 23:
          Bd();
      }
      l = l.return;
    }
    if (Bn = n, Nn = n = Nl(n.current, null), pr = Sa = r, Wn = 0, gu = null, Ms = Eu = Su = 0, aa = go = null, su !== null) {
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
  function sf(n, r) {
    do {
      var l = Nn;
      try {
        if (Sd(), Fe.current = Wt, Dc) {
          for (var o = at.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (bt = 0, In = en = at = null, Ss = !1, Es = 0, yu.current = null, l === null || l.return === null) {
          Wn = 1, gu = r, Nn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = pr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var A = T, J = E, Z = J.tag;
            if (!(J.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var X = J.alternate;
              X ? (J.updateQueue = X.updateQueue, J.memoizedState = X.memoizedState, J.lanes = X.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var ge = Md(m);
            if (ge !== null) {
              ge.flags &= -257, Iv(ge, m, E, d, r), ge.mode & 1 && Nd(d, A, r), r = ge, T = A;
              var _e = r.updateQueue;
              if (_e === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(T), r.updateQueue = Le;
              } else _e.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, A, r), $d();
                break e;
              }
              T = Error(D(426));
            }
          } else if (mn && E.mode & 1) {
            var Mn = Md(m);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), Iv(Mn, m, E, d, r), vs(xl(T, E));
              break e;
            }
          }
          d = T = xl(T, E), Wn !== 4 && (Wn = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var O = _s(d, T, r);
                Fv(d, O);
                break e;
              case 1:
                E = T;
                var w = d.type, M = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (Ha === null || !Ha.has(M)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var ne = Yv(d, E, r);
                  Fv(d, ne);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ah(l);
      } catch (Ne) {
        r = Ne, Nn === l && l !== null && (Nn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rh() {
    var n = lf.current;
    return lf.current = Wt, n === null ? Wt : n;
  }
  function $d() {
    (Wn === 0 || Wn === 3 || Wn === 2) && (Wn = 4), Bn === null || !(Su & 268435455) && !(Eu & 268435455) || Ll(Bn, pr);
  }
  function cf(n, r) {
    var l = Rt;
    Rt |= 2;
    var o = rh();
    (Bn !== n || pr !== r) && (Gi = null, Tu(n, r));
    do
      try {
        oy();
        break;
      } catch (c) {
        sf(n, c);
      }
    while (!0);
    if (Sd(), Rt = l, lf.current = o, Nn !== null) throw Error(D(261));
    return Bn = null, pr = 0, Wn;
  }
  function oy() {
    for (; Nn !== null; ) Yd(Nn);
  }
  function sy() {
    for (; Nn !== null && !Tr(); ) Yd(Nn);
  }
  function Yd(n) {
    var r = Qd(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? ah(n) : Nn = r, yu.current = null;
  }
  function ah(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Gv(l, r), l !== null) {
          l.flags &= 32767, Nn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Wn = 6, Nn = null;
          return;
        }
      } else if (l = jd(l, r, Sa), l !== null) {
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
      kr.transition = null, _t = 1, cy(n, r, l, o);
    } finally {
      kr.transition = c, _t = o;
    }
    return null;
  }
  function cy(n, r, l, o) {
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
    if (Qo(n, d), n === Bn && (Nn = Bn = null, pr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, uh(Ui, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = kr.transition, kr.transition = null;
      var m = _t;
      _t = 1;
      var E = Rt;
      Rt |= 4, yu.current = null, uy(n, l), Jv(l, n), Ev(ss), dl = !!ru, ss = ru = null, n.current = l, Ls(l), Xa(), Rt = E, _t = m, kr.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, Ol = n, Us = c), d = n.pendingLanes, d === 0 && (Ha = null), Yo(l.stateNode), ar(n, Vt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = zs, zs = null, n;
    return Us & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Ol !== null) {
      var n = qo(Us), r = kr.transition, l = _t;
      try {
        if (kr.transition = null, _t = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, Us = 0, Rt & 6) throw Error(D(331));
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
                      var X = J.sibling, ge = J.return;
                      if (Xv(J), J === A) {
                        be = null;
                        break;
                      }
                      if (X !== null) {
                        X.return = ge, be = X;
                        break;
                      }
                      be = ge;
                    }
                  }
                }
                var _e = d.alternate;
                if (_e !== null) {
                  var Le = _e.child;
                  if (Le !== null) {
                    _e.child = null;
                    do {
                      var Mn = Le.sibling;
                      Le.sibling = null, Le = Mn;
                    } while (Le !== null);
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
                    nf(9, E);
                }
              } catch (Ne) {
                _n(E, E.return, Ne);
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
  function ih(n, r, l) {
    r = xl(l, r), r = _s(n, r, 1), n = Tl(n, r, 1), r = un(), n !== null && (fl(n, 1, r), ar(n, r));
  }
  function _n(n, r, l) {
    if (n.tag === 3) ih(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ih(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
          n = xl(l, n), n = Yv(r, n, 1), r = Tl(r, n, 1), n = un(), r !== null && (fl(r, 1, n), ar(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Id(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = un(), n.pingedLanes |= n.suspendedLanes & l, Bn === n && (pr & l) === l && (Wn === 4 || Wn === 3 && (pr & 130023424) === pr && 500 > Vt() - Vd ? Tu(n, 0) : Ms |= l), ar(n, r);
  }
  function lh(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = un();
    n = Ei(n, r), n !== null && (fl(n, r, l), ar(n, l));
  }
  function fy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), lh(n, l);
  }
  function dy(n, r) {
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
    o !== null && o.delete(r), lh(n, l);
  }
  var Qd;
  Qd = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Fn.current) rr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return rr = !1, tf(n, r, l);
      rr = !!(n.flags & 131072);
    }
    else rr = !1, mn && r.flags & 1048576 && Lv(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ha(r, wn.current);
        lo(r, l), c = qe(null, r, o, n, c, l);
        var d = bl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Hn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, Od(r, o, n, l), r = zd(null, r, o, !0, d, l)) : (r.tag = 0, mn && d && pd(r), Ln(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = vy(o), n = ta(o, n), c) {
            case 0:
              r = Xc(null, r, o, n, l);
              break e;
            case 1:
              r = iy(null, r, o, n, l);
              break e;
            case 11:
              r = Gc(null, r, o, n, l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Xc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), iy(n, r, o, c, l);
      case 3:
        e: {
          if (Kc(r), n === null) throw Error(D(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, jv(n, r), xc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xl(Error(D(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xl(Error(D(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Zr = ei(r.stateNode.containerInfo.firstChild), Jr = r, mn = !0, ni = null, l = cr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
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
        return wd(r), n === null && yd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), xs(n, r), Ln(n, r, m, l), r.child;
      case 6:
        return n === null && yd(r), null;
      case 13:
        return Qv(n, r, l);
      case 4:
        return bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : Ln(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Gc(n, r, o, c, l);
      case 7:
        return Ln(n, r, r.pendingProps, l), r.child;
      case 8:
        return Ln(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Ln(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, ln(fe, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
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
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Cd(
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
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Cd(m, l, r), m = d.sibling;
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
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = Qt(c), o = o(c), r.flags |= 1, Ln(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), na(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ja(n, r), r.tag = 1, Hn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), $v(r, o, c), Od(r, o, c, l), zd(null, r, o, !0, n, l);
      case 19:
        return ra(n, r, l);
      case 22:
        return ut(n, r, l);
    }
    throw Error(D(156, r.tag));
  };
  function uh(n, r) {
    return fn(n, r);
  }
  function py(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new py(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function vy(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Bt) return 11;
      if (n === zt) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ff(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ct:
        return Ml(l.children, c, d, r);
      case We:
        m = 8, c |= 8;
        break;
      case qt:
        return n = Pa(12, l, r, c | 2), n.elementType = qt, n.lanes = d, n;
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
          case rn:
            m = 9;
            break e;
          case Bt:
            m = 11;
            break e;
          case zt:
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
  function qd(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function oh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, T) {
    return n = new oh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function sh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Oe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function ch(n) {
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
      if (Hn(l)) return Ov(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = df(l, o, !0, n, c, d, m, E, T), n.context = ch(null), l = n.current, o = un(), c = Ea(l), d = Wi(o, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, fl(n, c, o), ar(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = un(), m = Ea(c);
    return l = ch(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Tl(c, r, m), n !== null && (Ca(n, c, m, d), _c(n, c, m)), m;
  }
  function vf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function fh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    fh(n, r), (n = n.alternate) && fh(n, r);
  }
  var Xd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function mf(n) {
    this._internalRoot = n;
  }
  Xi.prototype.render = mf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(D(409));
    pf(n, r, null, null);
  }, Xi.prototype.unmount = mf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        pf(null, n, null, null);
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
  function Kd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function yf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function dh() {
  }
  function hy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = vf(m);
          d.call(A);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", dh);
      return n._reactRootContainer = m, n[Yi] = m.current, us(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = vf(T);
        E.call(A);
      };
    }
    var T = df(n, 0, !1, null, null, !1, !1, "", dh);
    return n._reactRootContainer = T, n[Yi] = T.current, us(n.nodeType === 8 ? n.parentNode : n), Ru(function() {
      pf(r, T, l, o);
    }), T;
  }
  function gf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = vf(m);
          E.call(T);
        };
      }
      pf(r, m, n, c);
    } else m = hy(l, r, n, c, o);
    return vf(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = qr(r.pendingLanes);
          l !== 0 && (Wo(r, l | 1), ar(r, Vt()), !(Rt & 6) && (So = Vt() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = un();
            Ca(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, xt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = un();
        Ca(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, oc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Ei(n, r);
      if (l !== null) {
        var o = un();
        Ca(l, n, r, o);
      }
      hf(n, r);
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
  }, Gt = function(n, r, l) {
    switch (r) {
      case "input":
        if (sn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(D(90));
              xn(o), sn(o, c);
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
  }, Il = of, Ql = Ru;
  var my = { usingClientEntryPoint: !1, Events: [fs, je, Ii, ka, Ni, of] }, bo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, yy = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ye.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ft(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: bo.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sf.isDisabled && Sf.supportsFiber) try {
      ol = Sf.inject(yy), Wr = Sf;
    } catch {
    }
  }
  return Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = my, Qa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(D(200));
    return sh(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(D(299));
    var l = !1, o = "", c = Xd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, us(n.nodeType === 8 ? n.parentNode : n), new mf(r);
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
    if (!yf(r)) throw Error(D(200));
    return gf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(D(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Xd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, us(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Xi(r);
  }, Qa.render = function(n, r, l) {
    if (!yf(r)) throw Error(D(200));
    return gf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(D(40));
    return n._reactRootContainer ? (Ru(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = of, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(D(200));
    if (n == null || n._reactInternals === void 0) throw Error(D(38));
    return gf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, lT;
function fk() {
  if (lT) return Wa;
  lT = 1;
  var H = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return H.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var W = jt, D = sT(), Ue = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, De = !1;
    function pt(e) {
      De = e;
    }
    function Ae(e) {
      if (!De) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Qe("warn", e, a);
      }
    }
    function S(e) {
      if (!De) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Qe("error", e, a);
      }
    }
    function Qe(e, t, a) {
      {
        var i = Ue.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var me = 0, te = 1, ae = 2, B = 3, q = 4, I = 5, ce = 6, oe = 7, gn = 8, Ft = 9, ot = 10, Ye = 11, Ot = 12, Oe = 13, ct = 14, We = 15, qt = 16, Lt = 17, rn = 18, Bt = 19, gt = 21, Be = 22, zt = 23, vt = 24, it = 25, Q = !0, Re = !1, se = !1, x = !1, k = !1, K = !0, le = !0, Te = !0, Me = !0, Ie = /* @__PURE__ */ new Set(), Ce = {}, Ze = {};
    function St(e, t) {
      on(e, t), on(e + "Capture", t);
    }
    function on(e, t) {
      Ce[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ce[e] = t;
      {
        var a = e.toLowerCase();
        Ze[a] = e, e === "onDoubleClick" && (Ze.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ie.add(t[i]);
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
    function sn(e, t) {
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
    var Jn = 0, Rr = 1, Ga = 2, Un = 3, ur = 4, Ir = 5, Li = 6, fa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ie = fa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Pe = new RegExp("^[" + fa + "][" + ie + "]*$"), st = {}, Ht = {};
    function dn(e) {
      return Gn.call(Ht, e) ? !0 : Gn.call(st, e) ? !1 : Pe.test(e) ? (Ht[e] = !0, !0) : (st[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function pn(e, t, a) {
      return t !== null ? t.type === Jn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function vn(e, t, a, i) {
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
      if (t === null || typeof t > "u" || vn(e, t, a, i))
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
    function cn(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function Gt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === Un || t === ur, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Pt = {}, da = [
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
      Pt[e] = new Gt(
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
      Pt[t] = new Gt(
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
      Pt[e] = new Gt(
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
      Pt[e] = new Gt(
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
      Pt[e] = new Gt(
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
      Pt[e] = new Gt(
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
      Pt[e] = new Gt(
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
      Pt[e] = new Gt(
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
      Pt[e] = new Gt(
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
      Pt[t] = new Gt(
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
      Pt[t] = new Gt(
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
      Pt[t] = new Gt(
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
      Pt[e] = new Gt(
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
    Pt[Ni] = new Gt(
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
      Pt[e] = new Gt(
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
        sn(a, t), i.sanitizeURL && Mi("" + a);
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
        if (!dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return sn(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = cn(t);
      if (!pn(t, u, i)) {
        if (Zn(t, a, u, i) && (a = null), i || u === null) {
          if (dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (sn(a, t), e.setAttribute(s, "" + a));
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
          _ === Un || _ === ur && a === !0 ? b = "" : (sn(a, y), b = "" + a, u.sanitizeURL && Mi(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var or = Symbol.for("react.element"), va = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), R = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), ht = Symbol.for("react.memo"), et = Symbol.for("react.lazy"), Et = Symbol.for("react.scope"), ft = Symbol.for("react.debug_trace_mode"), kn = Symbol.for("react.offscreen"), fn = Symbol.for("react.legacy_hidden"), hn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, Vt = "@@iterator";
    function Sn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[Vt];
      return typeof t == "function" ? t : null;
    }
    var rt = Object.assign, di = 0, Ui, ic, Ai, ol, Wr, Yo, Or;
    function Io() {
    }
    Io.__reactDisabledLog = !0;
    function lc() {
      {
        if (di === 0) {
          Ui = console.log, ic = console.info, Ai = console.warn, ol = console.error, Wr = console.group, Yo = console.groupCollapsed, Or = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Io,
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
    function uc() {
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
              value: ic
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
              value: Yo
            }),
            groupEnd: rt({}, e, {
              value: Or
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = Ue.ReactCurrentDispatcher, sl;
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
      s = ji.current, ji.current = null, lc();
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
        pi = !1, ji.current = s, uc(), Error.prepareStackTrace = u;
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
    function Qo(e, t, a) {
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
          case G:
            return Gl(e.render);
          case ht:
            return Qo(e.type, t, a);
          case et: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Qo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Wo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case I:
          return qr(e.type);
        case qt:
          return qr("Lazy");
        case Oe:
          return qr("Suspense");
        case Bt:
          return qr("SuspenseList");
        case me:
        case ae:
        case We:
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
          t += Wo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function qo(e, t, a) {
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
          case G:
            return qo(e, e.render, "ForwardRef");
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
    function oc(e, t, a) {
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
        case Ft:
          var i = a;
          return vi(i) + ".Consumer";
        case ot:
          var u = a;
          return vi(u._context) + ".Provider";
        case rn:
          return "DehydratedFragment";
        case Ye:
          return oc(a, a.render, "ForwardRef");
        case oe:
          return "Fragment";
        case I:
          return a;
        case q:
          return "Portal";
        case B:
          return "Root";
        case ce:
          return "Text";
        case qt:
          return xt(a);
        case gn:
          return a === ci ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case Ot:
          return "Profiler";
        case gt:
          return "Scope";
        case Oe:
          return "Suspense";
        case Bt:
          return "SuspenseList";
        case it:
          return "TracingMarker";
        case te:
        case me:
        case Lt:
        case ae:
        case ct:
        case We:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = Ue.ReactDebugCurrentFrame, er = null, Gr = !1;
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
    function Xt(e) {
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
    var Xf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pu(e, t) {
      Xf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
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
    function Go(e) {
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
        controlled: Go(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && pa(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Go(t);
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
        sn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Dh(f);
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
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? W.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ge || (Ge = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (dt || (dt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ye && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ye = !0);
    }
    function Kt(e, t) {
      t.value != null && e.setAttribute("value", br(Nr(t.value)));
    }
    var Jt = Array.isArray;
    function lt(e) {
      return Jt(e);
    }
    var an;
    an = !1;
    function Dn() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zl = ["value", "defaultValue"];
    function Xo(e) {
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
    function Ko(e, t) {
      var a = e;
      Xo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !an && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), an = !0);
    }
    function Kf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function sc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Jf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var ev = !1;
    function cc(e, t) {
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
    function tv(e, t) {
      var a = e;
      Pu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !ev && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), ev = !0);
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
    function nv(e, t) {
      var a = e, i = Nr(t.value), u = Nr(t.defaultValue);
      if (i != null) {
        var s = br(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = br(u));
    }
    function rv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Im(e, t) {
      nv(e, t);
    }
    var Ja = "http://www.w3.org/1999/xhtml", Qm = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Qm;
        default:
          return Ja;
      }
    }
    function fc(e, t) {
      return e == null || e === Ja ? ed(t) : e === Zf && t === "foreignObject" ? Ja : e;
    }
    var Wm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, av = Wm(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Xr = 1, Bi = 3, An = 8, $i = 9, Jo = 11, vl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, qm = {
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
    function iv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var lv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Qu).forEach(function(e) {
      lv.forEach(function(t) {
        Qu[iv(t, e)] = Qu[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Qu.hasOwnProperty(e) && Qu[e]) ? t + "px" : (Dr(t, e), ("" + t).trim());
    }
    var uv = /([A-Z])/g, Wu = /^ms-/;
    function Gm(e) {
      return e.replace(uv, "-$1").toLowerCase().replace(Wu, "-ms-");
    }
    var ov = function() {
    };
    {
      var Xm = /^(?:webkit|moz|o)[A-Z]/, sv = /^-ms-/, cv = /-(.)/g, qu = /;\s*$/, mi = {}, td = {}, Zo = !1, fv = !1, dv = function(e) {
        return e.replace(cv, function(t, a) {
          return a.toUpperCase();
        });
      }, nd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          dv(e.replace(sv, "ms-"))
        ));
      }, rd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, pv = function(e, t) {
        td.hasOwnProperty(t) && td[t] || (td[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(qu, "")));
      }, vv = function(e, t) {
        Zo || (Zo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hv = function(e, t) {
        fv || (fv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      ov = function(e, t) {
        e.indexOf("-") > -1 ? nd(e) : Xm.test(e) ? rd(e) : qu.test(t) && pv(e, t), typeof t == "number" && (isNaN(t) ? vv(e, t) : isFinite(t) || hv(e, t));
      };
    }
    var Km = ov;
    function Jm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Gm(i)) + ":", t += pc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function mv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Km(i, t[i]);
          var s = pc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Zm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function yv(e) {
      var t = {};
      for (var a in e)
        for (var i = qm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Za(e, t) {
      {
        if (!t)
          return;
        var a = yv(e), i = yv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Zm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var es = {
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
    }, gv = rt({
      menuitem: !0
    }, es), Sv = "__html";
    function vc(e, t) {
      if (t) {
        if (gv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Sv in t.dangerouslySetInnerHTML))
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
    }, Ev = {
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
    }, Xu = {}, Ku = new RegExp("^(aria)-[" + ie + "]*$"), ad = new RegExp("^(aria)[A-Z][" + ie + "]*$");
    function ts(e, t) {
      {
        if (Gn.call(Xu, t) && Xu[t])
          return !0;
        if (ad.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Ev.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xu[t] = !0, !0;
        }
        if (Ku.test(t)) {
          var u = t.toLowerCase(), s = Ev.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Xu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Xu[t] = !0, !0;
        }
      }
      return !0;
    }
    function id(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = ts(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Cv(e, t) {
      hl(e, t) || id(e, t);
    }
    var ns = !1;
    function Ju(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !ns && (ns = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var hc = function() {
    };
    {
      var wr = {}, rs = /^on./, Rv = /^on[^A-Z]/, Tv = new RegExp("^(aria)-[" + ie + "]*$"), bv = new RegExp("^(aria)[A-Z][" + ie + "]*$");
      hc = function(e, t, a, i) {
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
          if (rs.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), wr[t] = !0, !0;
        } else if (rs.test(t))
          return Rv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (Tv.test(t) || bv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), wr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), wr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), wr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), wr[t] = !0, !0;
        var v = cn(t), y = v !== null && v.type === Jn;
        if (Gu.hasOwnProperty(u)) {
          var g = Gu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && vn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : vn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Un && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = hc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function _v(e, t, a) {
      hl(e, t) || wv(e, t, a);
    }
    var ld = 1, yi = 2, tu = 4, ud = ld | yi | tu, as = null;
    function ey(e) {
      as !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), as = e;
    }
    function is() {
      as === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), as = null;
    }
    function ty(e) {
      return e === as;
    }
    function mc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var yc = null, Yt = null, ml = null;
    function ls(e) {
      var t = xo(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Dh(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function us(e) {
      yc = e;
    }
    function od(e) {
      Yt ? ml ? ml.push(e) : ml = [e] : Yt = e;
    }
    function sd() {
      return Yt !== null || ml !== null;
    }
    function Zu() {
      if (Yt) {
        var e = Yt, t = ml;
        if (Yt = null, ml = null, ls(e), t)
          for (var a = 0; a < t.length; a++)
            ls(t[a]);
      }
    }
    var os = function(e, t) {
      return e(t);
    }, nu = function() {
    }, gc = !1;
    function ny() {
      var e = sd();
      e && (nu(), Zu());
    }
    function xv(e, t, a) {
      if (gc)
        return e(t, a);
      gc = !0;
      try {
        return os(e, t, a);
      } finally {
        gc = !1, ny();
      }
    }
    function kv(e, t, a) {
      os = e, nu = a;
    }
    function Sc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ec(e, t, a) {
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
          return !!(a.disabled && Sc(t));
        default:
          return !1;
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Dh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Ec(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ss = !1;
    if (xn)
      try {
        var au = {};
        Object.defineProperty(au, "passive", {
          get: function() {
            ss = !0;
          }
        }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
      } catch {
        ss = !1;
      }
    function Cc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Dv = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rc = document.createElement("react");
      Dv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, b = !0, U = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          Rc.removeEventListener(V, $e, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var pe = Array.prototype.slice.call(arguments, 3);
        function $e() {
          _ = !0, P(), a.apply(i, pe), b = !1;
        }
        var ze, Dt = !1, Tt = !1;
        function L(N) {
          if (ze = N.error, Dt = !0, ze === null && N.colno === 0 && N.lineno === 0 && (Tt = !0), N.defaultPrevented && ze != null && typeof ze == "object")
            try {
              ze._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", L), Rc.addEventListener(V, $e, !1), g.initEvent(V, !1, !1), Rc.dispatchEvent(g), j && Object.defineProperty(window, "event", j), _ && b && (Dt ? Tt && (ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ze)), window.removeEventListener("error", L), !_)
          return P(), Cc.apply(this, arguments);
      };
    }
    var ry = Dv, eo = !1, to = null, ei = !1, Tc = null, no = {
      onError: function(e) {
        eo = !0, to = e;
      }
    };
    function Ma(e, t, a, i, u, s, f, p, v) {
      eo = !1, to = null, ry.apply(no, arguments);
    }
    function cs(e, t, a, i, u, s, f, p, v) {
      if (Ma.apply(this, arguments), eo) {
        var y = fd();
        ei || (ei = !0, Tc = y);
      }
    }
    function Yi() {
      if (ei) {
        var e = Tc;
        throw ei = !1, Tc = null, e;
      }
    }
    function cd() {
      return eo;
    }
    function fd() {
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
    function fs(e, t) {
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
    ), Zt = (
      /*                 */
      32
    ), ln = (
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
    ), bc = (
      /*             */
      16384
    ), Ov = (
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
    ), ds = (
      /*                       */
      1048576
    ), ps = (
      /*                    */
      2097152
    ), yl = (
      /*                 */
      4194304
    ), dd = (
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
    ), ao = jn | Ct | Kr | Zt | Fn | Hn | gi, El = Ct | ln | Fn | gi, sr = ha | Kr, Pn = yl | dd | ps, uu = Ue.ReactCurrentOwner;
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
    function Lv(e) {
      return zr(e) === e;
    }
    function pd(e) {
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
    function wc(e) {
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
              return wc(s), e;
            if (v === u)
              return wc(s), t;
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
      return t !== null ? mn(t) : null;
    }
    function mn(e) {
      if (e.tag === I || e.tag === ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = mn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ni(e) {
      var t = Jr(e);
      return t !== null ? vd(t) : null;
    }
    function vd(e) {
      if (e.tag === I || e.tag === ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== q) {
          var a = vd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = D.unstable_scheduleCallback, md = D.unstable_cancelCallback, yd = D.unstable_shouldYield, Nv = D.unstable_requestPaint, On = D.unstable_now, Mv = D.unstable_getCurrentPriorityLevel, Qi = D.unstable_ImmediatePriority, vs = D.unstable_UserBlockingPriority, ou = D.unstable_NormalPriority, hs = D.unstable_LowPriority, io = D.unstable_IdlePriority, zv = D.unstable_yieldValue, Uv = D.unstable_setDisableYieldValue, ri = null, cr = null, fe = null, ma = !1, _r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        le && (e = rt({}, e, {
          getLaneLabelMap: Rd,
          injectProfilingHooks: su
        })), ri = t.inject(e), cr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sd(e, t) {
      if (cr && typeof cr.onScheduleFiberRoot == "function")
        try {
          cr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ed(e, t) {
      if (cr && typeof cr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & mt) === mt;
          if (Te) {
            var i;
            switch (t) {
              case ra:
                i = Qi;
                break;
              case ja:
                i = vs;
                break;
              case fr:
                i = ou;
                break;
              case tf:
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
    function Cd(e) {
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
    function Qt(e) {
      if (typeof zv == "function" && (Uv(e), pt(e)), cr && typeof cr.setStrictMode == "function")
        try {
          cr.setStrictMode(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      fe = e;
    }
    function Rd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < kd; a++) {
          var i = Vv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Av(e) {
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
    function jv(e) {
      fe !== null && typeof fe.markComponentPassiveEffectMountStarted == "function" && fe.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      fe !== null && typeof fe.markComponentPassiveEffectMountStopped == "function" && fe.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStarted == "function" && fe.markComponentPassiveEffectUnmountStarted(e);
    }
    function _c() {
      fe !== null && typeof fe.markComponentPassiveEffectUnmountStopped == "function" && fe.markComponentPassiveEffectUnmountStopped();
    }
    function Fv(e) {
      fe !== null && typeof fe.markComponentLayoutEffectMountStarted == "function" && fe.markComponentLayoutEffectMountStarted(e);
    }
    function xc() {
      fe !== null && typeof fe.markComponentLayoutEffectMountStopped == "function" && fe.markComponentLayoutEffectMountStopped();
    }
    function Td(e) {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStarted == "function" && fe.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      fe !== null && typeof fe.markComponentLayoutEffectUnmountStopped == "function" && fe.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      fe !== null && typeof fe.markComponentErrored == "function" && fe.markComponentErrored(e, t, a);
    }
    function ms(e, t, a) {
      fe !== null && typeof fe.markComponentSuspended == "function" && fe.markComponentSuspended(e, t, a);
    }
    function ys(e) {
      fe !== null && typeof fe.markLayoutEffectsStarted == "function" && fe.markLayoutEffectsStarted(e);
    }
    function cu() {
      fe !== null && typeof fe.markLayoutEffectsStopped == "function" && fe.markLayoutEffectsStopped();
    }
    function bd(e) {
      fe !== null && typeof fe.markPassiveEffectsStarted == "function" && fe.markPassiveEffectsStarted(e);
    }
    function oo() {
      fe !== null && typeof fe.markPassiveEffectsStopped == "function" && fe.markPassiveEffectsStopped();
    }
    function wd(e) {
      fe !== null && typeof fe.markRenderStarted == "function" && fe.markRenderStarted(e);
    }
    function _d() {
      fe !== null && typeof fe.markRenderYielded == "function" && fe.markRenderYielded();
    }
    function En() {
      fe !== null && typeof fe.markRenderStopped == "function" && fe.markRenderStopped();
    }
    function kc(e) {
      fe !== null && typeof fe.markRenderScheduled == "function" && fe.markRenderScheduled(e);
    }
    function xd(e, t) {
      fe !== null && typeof fe.markForceUpdateScheduled == "function" && fe.markForceUpdateScheduled(e, t);
    }
    function gs(e, t) {
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
    ), en = (
      /*              */
      16
    ), In = Math.clz32 ? Math.clz32 : Es, Dc = Math.log, Ss = Math.LN2;
    function Es(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / Ss | 0) | 0;
    }
    var kd = 31, $ = (
      /*                        */
      0
    ), Vn = (
      /*                          */
      0
    ), qe = (
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
    ), Oc = (
      /*                        */
      128
    ), Lc = (
      /*                        */
      256
    ), Nc = (
      /*                        */
      512
    ), Mc = (
      /*                        */
      1024
    ), zc = (
      /*                        */
      2048
    ), Uc = (
      /*                        */
      4096
    ), Ac = (
      /*                        */
      8192
    ), du = (
      /*                        */
      16384
    ), jc = (
      /*                       */
      32768
    ), co = (
      /*                       */
      65536
    ), fo = (
      /*                       */
      131072
    ), Fc = (
      /*                       */
      262144
    ), Cs = (
      /*                       */
      524288
    ), Hc = (
      /*                       */
      1048576
    ), Pc = (
      /*                       */
      2097152
    ), Rs = (
      /*                            */
      130023424
    ), pu = (
      /*                             */
      4194304
    ), Ts = (
      /*                             */
      8388608
    ), Vc = (
      /*                             */
      16777216
    ), Bc = (
      /*                             */
      33554432
    ), $c = (
      /*                             */
      67108864
    ), Hv = pu, po = (
      /*          */
      134217728
    ), Pv = (
      /*                          */
      268435455
    ), bs = (
      /*               */
      268435456
    ), _l = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function Vv(e) {
      {
        if (e & qe)
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
        if (e & Rs)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & bs)
          return "IdleHydration";
        if (e & _l)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var Wt = -1, Yc = so, Ic = pu;
    function ws(e) {
      switch (vu(e)) {
        case qe:
          return qe;
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
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Cs:
        case Hc:
        case Pc:
          return e & wl;
        case pu:
        case Ts:
        case Vc:
        case Bc:
        case $c:
          return e & Rs;
        case po:
          return po;
        case bs:
          return bs;
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
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & Pv;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = ws(p);
        else {
          var v = f & s;
          v !== $ && (i = ws(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = ws(y) : s !== $ && (i = ws(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = vu(i), _ = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ea && (_ & wl) !== $
        )
          return t;
      }
      (i & tr) !== $ && (i |= a & ea);
      var b = e.entangledLanes;
      if (b !== $)
        for (var U = e.entanglements, j = i & b; j > 0; ) {
          var P = Ln(j), pe = 1 << P;
          i |= U[P], j &= ~pe;
        }
      return i;
    }
    function Dd(e, t) {
      for (var a = e.eventTimes, i = Wt; t > 0; ) {
        var u = Ln(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Qc(e, t) {
      switch (e) {
        case qe:
        case bl:
        case tr:
          return t + 250;
        case nr:
        case ea:
        case fu:
        case so:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Cs:
        case Hc:
        case Pc:
          return t + 5e3;
        case pu:
        case Ts:
        case Vc:
        case Bc:
        case $c:
          return Wt;
        case po:
        case bs:
        case _l:
        case ya:
          return Wt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Wt;
      }
    }
    function Bv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ln(f), v = 1 << p, y = s[p];
        y === Wt ? ((v & i) === $ || (v & u) !== $) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function $v(e) {
      return ws(e.pendingLanes);
    }
    function Wc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== $ ? t : t & ya ? ya : $;
    }
    function Od(e) {
      return (e & qe) !== $;
    }
    function xl(e) {
      return (e & Pv) !== $;
    }
    function qc(e) {
      return (e & Rs) === e;
    }
    function Ld(e) {
      var t = qe | tr | ea;
      return (e & t) === $;
    }
    function ay(e) {
      return (e & wl) === e;
    }
    function _s(e, t) {
      var a = bl | tr | nr | ea;
      return (t & a) !== $;
    }
    function Yv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Nd(e) {
      return (e & wl) !== $;
    }
    function Md() {
      var e = Yc;
      return Yc <<= 1, (Yc & wl) === $ && (Yc = so), e;
    }
    function Iv() {
      var e = Ic;
      return Ic <<= 1, (Ic & Rs) === $ && (Ic = pu), e;
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
    function Gc(e) {
      return Ln(e);
    }
    function na(e, t) {
      return (e & t) !== $;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function ut(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Xc(e, t) {
      return e & t;
    }
    function iy(e) {
      return e;
    }
    function zd(e, t) {
      return e !== Vn && e < t ? e : t;
    }
    function Kc(e) {
      for (var t = [], a = 0; a < kd; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== _l && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = Gc(t);
      i[u] = a;
    }
    function Ud(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ln(i), s = 1 << u;
        a[u] = Wt, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Qv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ln(f), v = 1 << p;
        i[p] = $, u[p] = Wt, s[p] = Wt, f &= ~v;
      }
    }
    function ks(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ln(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Zc(e, t) {
      var a = vu(t), i;
      switch (a) {
        case tr:
          i = bl;
          break;
        case ea:
          i = nr;
          break;
        case so:
        case Oc:
        case Lc:
        case Nc:
        case Mc:
        case zc:
        case Uc:
        case Ac:
        case du:
        case jc:
        case co:
        case fo:
        case Fc:
        case Cs:
        case Hc:
        case Pc:
        case pu:
        case Ts:
        case Vc:
        case Bc:
        case $c:
          i = fu;
          break;
        case _l:
          i = bs;
          break;
        default:
          i = Vn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Vn ? Vn : i;
    }
    function Wv(e, t, a) {
      if (_r)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ad(e, t) {
      if (_r)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Gc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ef(e, t) {
      return null;
    }
    var ra = qe, ja = tr, fr = ea, tf = _l, ho = Vn;
    function ga() {
      return ho;
    }
    function Qn(e) {
      ho = e;
    }
    function qv(e, t) {
      var a = ho;
      try {
        return ho = e, t();
      } finally {
        ho = a;
      }
    }
    function Ds(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xr(e, t) {
      return e > t ? e : t;
    }
    function jd(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = vu(e);
      return jd(ra, t) ? jd(ja, t) ? xl(t) ? fr : tf : ja : ra;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var dr;
    function ly(e) {
      dr = e;
    }
    function be(e) {
      dr(e);
    }
    var kl;
    function Fd(e) {
      kl = e;
    }
    var Hd;
    function uy(e) {
      Hd = e;
    }
    var mo;
    function nf(e) {
      mo = e;
    }
    var rf;
    function Xv(e) {
      rf = e;
    }
    var af = !1, Os = [], Ri = null, Ti = null, Cn = null, Ur = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), qi = [], Kv = [
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
      return Kv.indexOf(e) > -1;
    }
    function Jv(e, t, a, i, u) {
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
    function Ls(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Jv(t, a, i, u, s);
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
    function Zv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ri = Ls(Ri, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ti = Ls(Ti, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Cn = Ls(Cn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, Ls(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return Fa.set(_, Ls(Fa.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Pd(e) {
      var t = $s(e.target);
      if (t !== null) {
        var a = zr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Oe) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, rf(e.priority, function() {
                Hd(a);
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
    function eh(e) {
      for (var t = mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qi.length && jd(t, qi[i].priority); i++)
        ;
      qi.splice(i, 0, a), i === 0 && Pd(a);
    }
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ms(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ey(s), u.target.dispatchEvent(s), is();
        } else {
          var f = xo(i);
          return f !== null && kl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function th(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function lf() {
      af = !1, Ri !== null && Ns(Ri) && (Ri = null), Ti !== null && Ns(Ti) && (Ti = null), Cn !== null && Ns(Cn) && (Cn = null), Ur.forEach(th), Fa.forEach(th);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, D.unstable_scheduleCallback(D.unstable_NormalPriority, lf)));
    }
    function kr(e) {
      if (Os.length > 0) {
        yu(Os[0], e);
        for (var t = 1; t < Os.length; t++) {
          var a = Os[t];
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
        Pd(f), f.blockedOn === null && qi.shift();
      }
    }
    var Rt = Ue.ReactCurrentBatchConfig, Bn = !0;
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
      var u = Ms(e, t, a, i);
      if (u === null) {
        wy(e, t, i, Eu, a), ii(e, i);
        return;
      }
      if (Zv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ii(e, i), t & tu && ai(e)) {
        for (; u !== null; ) {
          var s = xo(u);
          s !== null && be(s);
          var f = Ms(e, t, a, i);
          if (f === null && wy(e, t, i, Eu, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var Eu = null;
    function Ms(e, t, a, i) {
      Eu = null;
      var u = mc(i), s = $s(u);
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
          var t = Mv();
          switch (t) {
            case Qi:
              return ra;
            case vs:
              return ja;
            case ou:
            case hs:
              return fr;
            case io:
              return tf;
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
    function Vd(e, t, a) {
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
    var Dl = null, zs = null, Ha = null;
    function uf(e) {
      return Dl = e, zs = Eo(), !0;
    }
    function Ol() {
      Dl = null, zs = null, Ha = null;
    }
    function Us() {
      if (Ha)
        return Ha;
      var e, t = zs, a = t.length, i, u = Eo(), s = u.length;
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
    function As() {
      return !1;
    }
    function un(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Cu : this.isDefaultPrevented = As, this.isPropagationStopped = As, this;
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
    }, Ca = un(Ea), ar = rt({}, Ea, {
      view: 0,
      detail: 0
    }), nh = un(ar), js, Fs, Hs;
    function Ll(e) {
      e !== Hs && (Hs && e.type === "mousemove" ? (js = e.screenX - Hs.screenX, Fs = e.screenY - Hs.screenY) : (js = 0, Fs = 0), Hs = e);
    }
    var Ps = rt({}, ar, {
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
      getModifierState: Id,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ll(e), js);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fs;
      }
    }), of = un(Ps), Ru = rt({}, Ps, {
      dataTransfer: 0
    }), Bd = un(Ru), Tu = rt({}, ar, {
      relatedTarget: 0
    }), sf = un(Tu), rh = rt({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $d = un(rh), cf = rt({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), oy = un(cf), sy = rt({}, Ea, {
      data: 0
    }), Yd = un(sy), ah = Yd, bu = {
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
    }, cy = {
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
      return e.type === "keydown" || e.type === "keyup" ? cy[e.keyCode] || "Unidentified" : "";
    }
    var ih = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _n(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ih[e];
      return i ? !!a[i] : !1;
    }
    function Id(e) {
      return _n;
    }
    var lh = rt({}, ar, {
      key: Ro,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Id,
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
    }), fy = un(lh), dy = rt({}, Ps, {
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
    }), Qd = un(dy), uh = rt({}, ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Id
    }), py = un(uh), Pa = rt({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wd = un(Pa), vy = rt({}, Ps, {
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
    }), Nl = un(vy), ff = [9, 13, 27, 32], Ml = 229, To = xn && "CompositionEvent" in window, wu = null;
    xn && "documentMode" in document && (wu = document.documentMode);
    var qd = xn && "TextEvent" in window && !wu, oh = xn && (!To || wu && wu > 8 && wu <= 11), df = 32, sh = String.fromCharCode(df);
    function ch() {
      St("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), St("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), St("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), St("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
    function pf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function vf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function fh(e, t) {
      return e === "keydown" && t.keyCode === Ml;
    }
    function hf(e, t) {
      switch (e) {
        case "keyup":
          return ff.indexOf(t.keyCode) !== -1;
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
    function Xd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function mf(e) {
      return e.locale === "ko";
    }
    var Xi = !1;
    function Kd(e, t, a, i, u) {
      var s, f;
      if (To ? s = vf(t) : Xi ? hf(t, i) && (s = "onCompositionEnd") : fh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      oh && !mf(i) && (!Xi && s === "onCompositionStart" ? Xi = uf(u) : s === "onCompositionEnd" && Xi && (f = Us()));
      var p = mh(a, s);
      if (p.length > 0) {
        var v = new Yd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Xd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function yf(e, t) {
      switch (e) {
        case "compositionend":
          return Xd(t);
        case "keypress":
          var a = t.which;
          return a !== df ? null : (Gd = !0, sh);
        case "textInput":
          var i = t.data;
          return i === sh && Gd ? null : i;
        default:
          return null;
      }
    }
    function dh(e, t) {
      if (Xi) {
        if (e === "compositionend" || !To && hf(e, t)) {
          var a = Us();
          return Ol(), Xi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!pf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return oh && !mf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hy(e, t, a, i, u) {
      var s;
      if (qd ? s = yf(t, i) : s = dh(t, i), !s)
        return null;
      var f = mh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ah("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gf(e, t, a, i, u, s, f) {
      Kd(e, t, a, i, u), hy(e, t, a, i, u);
    }
    var my = {
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
      return t === "input" ? !!my[e.type] : t === "textarea";
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
    function yy(e) {
      if (!xn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Sf() {
      St("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      od(i);
      var u = mh(t, "onChange");
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
      n(t, l, e, mc(e)), xv(d, t);
    }
    function d(e) {
      DE(e, 0);
    }
    function m(e) {
      var t = wf(e);
      if (dl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    xn && (T = yy("input") && (!document.documentMode || document.documentMode > 9));
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", Z);
    }
    function J() {
      r && (r.detachEvent("onpropertychange", Z), r = null, l = null);
    }
    function Z(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function X(e, t, a) {
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
    function Le(e, t) {
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
      var p = a ? wf(a) : window, v, y;
      if (o(p) ? v = E : bo(p) ? T ? v = Mn : (v = ge, y = X) : _e(p) && (v = Le), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && O(p);
    }
    function M() {
      on("onMouseEnter", ["mouseout", "mouseover"]), on("onMouseLeave", ["mouseout", "mouseover"]), on("onPointerEnter", ["pointerout", "pointerover"]), on("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ne(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ty(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && ($s(y) || fp(y)))
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
          if (b = a, U = j ? $s(j) : null, U !== null) {
            var P = zr(U);
            (U !== P || U.tag !== I && U.tag !== ce) && (U = null);
          }
        } else
          b = null, U = a;
        if (b !== U) {
          var pe = of, $e = "onMouseLeave", ze = "onMouseEnter", Dt = "mouse";
          (t === "pointerout" || t === "pointerover") && (pe = Qd, $e = "onPointerLeave", ze = "onPointerEnter", Dt = "pointer");
          var Tt = b == null ? g : wf(b), L = U == null ? g : wf(U), V = new pe($e, Dt + "leave", b, i, u);
          V.target = Tt, V.relatedTarget = L;
          var N = null, ee = $s(u);
          if (ee === a) {
            var Ee = new pe(ze, Dt + "enter", U, i, u);
            Ee.target = L, Ee.relatedTarget = Tt, N = Ee;
          }
          MT(e, V, N, b, U);
        }
      }
    }
    function Ne(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : Ne;
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
      return gy(e, u, s, f, p);
    }
    function gy(e, t, a, i, u) {
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
    function vT(e, t) {
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
    function yE(e) {
      return e && e.nodeType === Bi;
    }
    function gE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : yE(e) ? !1 : yE(t) ? gE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function hT(e) {
      return e && e.ownerDocument && gE(e.ownerDocument.documentElement, e);
    }
    function mT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function SE() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (mT(t))
          e = t.contentWindow;
        else
          return t;
        t = Hi(e.document);
      }
      return t;
    }
    function Sy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function yT() {
      var e = SE();
      return {
        focusedElem: e,
        selectionRange: Sy(e) ? ST(e) : null
      };
    }
    function gT(e) {
      var t = SE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && hT(a)) {
        i !== null && Sy(a) && ET(a, i);
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
    function ST(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zl(e), t || {
        start: 0,
        end: 0
      };
    }
    function ET(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : vT(e, t);
    }
    var CT = xn && "documentMode" in document && document.documentMode <= 11;
    function RT() {
      St("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ef = null, Ey = null, Jd = null, Cy = !1;
    function TT(e) {
      if ("selectionStart" in e && Sy(e))
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
    function bT(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function EE(e, t, a) {
      var i = bT(a);
      if (!(Cy || Ef == null || Ef !== Hi(i))) {
        var u = TT(Ef);
        if (!Jd || !He(Jd, u)) {
          Jd = u;
          var s = mh(Ey, "onSelect");
          if (s.length > 0) {
            var f = new Ca("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ef;
          }
        }
      }
    }
    function wT(e, t, a, i, u, s, f) {
      var p = a ? wf(a) : window;
      switch (t) {
        case "focusin":
          (bo(p) || p.contentEditable === "true") && (Ef = p, Ey = a, Jd = null);
          break;
        case "focusout":
          Ef = null, Ey = null, Jd = null;
          break;
        case "mousedown":
          Cy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Cy = !1, EE(e, i, u);
          break;
        case "selectionchange":
          if (CT)
            break;
        case "keydown":
        case "keyup":
          EE(e, i, u);
      }
    }
    function ph(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Cf = {
      animationend: ph("Animation", "AnimationEnd"),
      animationiteration: ph("Animation", "AnimationIteration"),
      animationstart: ph("Animation", "AnimationStart"),
      transitionend: ph("Transition", "TransitionEnd")
    }, Ry = {}, CE = {};
    xn && (CE = document.createElement("div").style, "AnimationEvent" in window || (delete Cf.animationend.animation, delete Cf.animationiteration.animation, delete Cf.animationstart.animation), "TransitionEvent" in window || delete Cf.transitionend.transition);
    function vh(e) {
      if (Ry[e])
        return Ry[e];
      if (!Cf[e])
        return e;
      var t = Cf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in CE)
          return Ry[e] = t[a];
      return e;
    }
    var RE = vh("animationend"), TE = vh("animationiteration"), bE = vh("animationstart"), wE = vh("transitionend"), _E = /* @__PURE__ */ new Map(), xE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function wo(e, t) {
      _E.set(e, t), St(t, [e]);
    }
    function _T() {
      for (var e = 0; e < xE.length; e++) {
        var t = xE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        wo(a, "on" + i);
      }
      wo(RE, "onAnimationEnd"), wo(TE, "onAnimationIteration"), wo(bE, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(wE, "onTransitionEnd");
    }
    function xT(e, t, a, i, u, s, f) {
      var p = _E.get(t);
      if (p !== void 0) {
        var v = Ca, y = t;
        switch (t) {
          case "keypress":
            if (Co(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = fy;
            break;
          case "focusin":
            y = "focus", v = sf;
            break;
          case "focusout":
            y = "blur", v = sf;
            break;
          case "beforeblur":
          case "afterblur":
            v = sf;
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
            v = of;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Bd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = py;
            break;
          case RE:
          case TE:
          case bE:
            v = $d;
            break;
          case wE:
            v = Wd;
            break;
          case "scroll":
            v = nh;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = oy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Qd;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = LT(a, p, i.type, g, _);
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
    _T(), M(), Sf(), RT(), ch();
    function kT(e, t, a, i, u, s, f) {
      xT(e, t, a, i, u, s);
      var p = (s & ud) === 0;
      p && (ne(e, t, a, i, u), w(e, t, a, i, u), wT(e, t, a, i, u), gf(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ty = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function kE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, cs(i, t, void 0, e), e.currentTarget = null;
    }
    function DT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          kE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, b = g.currentTarget, U = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          kE(e, U, b), i = _;
        }
    }
    function DE(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        DT(s, f, a);
      }
      Yi();
    }
    function OT(e, t, a, i, u) {
      var s = mc(a), f = [];
      kT(f, e, i, a, s, t), DE(f, t);
    }
    function Rn(e, t) {
      Ty.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = lw(t), u = zT(e);
      i.has(u) || (OE(t, e, yi, a), i.add(u));
    }
    function by(e, t, a) {
      Ty.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), OE(a, e, i, t);
    }
    var hh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[hh]) {
        e[hh] = !0, Ie.forEach(function(a) {
          a !== "selectionchange" && (Ty.has(a) || by(a, !1, e), by(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[hh] || (t[hh] = !0, by("selectionchange", !1, t)));
      }
    }
    function OE(e, t, a, i, u) {
      var s = Sa(e, t, a), f = void 0;
      ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Vd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : aa(e, t, s);
    }
    function LE(e, t) {
      return e === t || e.nodeType === An && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & ld) && !(t & yi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === B || v === q) {
              var y = p.stateNode.containerInfo;
              if (LE(y, f))
                break;
              if (v === q)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === B || _ === q) {
                    var b = g.stateNode.containerInfo;
                    if (LE(b, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var U = $s(y);
                if (U === null)
                  return;
                var j = U.tag;
                if (j === I || j === ce) {
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
      xv(function() {
        return OT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function LT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, b = _.stateNode, U = _.tag;
        if (U === I && b !== null && (g = b, p !== null)) {
          var j = ru(y, p);
          j != null && v.push(tp(y, j, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function mh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === I && f !== null) {
          var v = f, y = ru(u, a);
          y != null && i.unshift(tp(u, y, v));
          var g = ru(u, t);
          g != null && i.push(tp(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Rf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== I);
      return e || null;
    }
    function NT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Rf(s))
        u++;
      for (var f = 0, p = i; p; p = Rf(p))
        f++;
      for (; u - f > 0; )
        a = Rf(a), u--;
      for (; f - u > 0; )
        i = Rf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Rf(a), i = Rf(i);
      }
      return null;
    }
    function NE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === I && g !== null) {
          var b = g;
          if (u) {
            var U = ru(p, s);
            U != null && f.unshift(tp(p, U, b));
          } else if (!u) {
            var j = ru(p, s);
            j != null && f.push(tp(p, j, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function MT(e, t, a, i, u) {
      var s = i && u ? NT(i, u) : null;
      i !== null && NE(e, t, i, s, !1), u !== null && a !== null && NE(e, a, u, s, !0);
    }
    function zT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, np = "dangerouslySetInnerHTML", yh = "suppressContentEditableWarning", _o = "suppressHydrationWarning", ME = "autoFocus", Vs = "children", Bs = "style", gh = "__html", _y, Sh, rp, zE, Eh, UE, AE;
    _y = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Sh = function(e, t) {
      Cv(e, t), Ju(e, t), _v(e, t, {
        registrationNameDependencies: Ce,
        possibleRegistrationNames: Ze
      });
    }, UE = xn && !document.documentMode, rp = function(e, t, a) {
      if (!Va) {
        var i = Ch(a), u = Ch(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, zE = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Eh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, AE = function(e, t) {
      var a = e.namespaceURI === Ja ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var UT = /\r\n?/g, AT = /\u0000|\uFFFD/g;
    function Ch(e) {
      Yn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(UT, `
`).replace(AT, "");
    }
    function Rh(e, t, a, i) {
      var u = Ch(t), s = Ch(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Q))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function jE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function jT() {
    }
    function Th(e) {
      e.onclick = jT;
    }
    function FT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), mv(t, f);
          else if (s === np) {
            var p = f ? f[gh] : void 0;
            p != null && av(t, p);
          } else if (s === Vs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && vl(t, f);
            } else typeof f == "number" && vl(t, "" + f);
          else s === yh || s === _o || s === ME || (Ce.hasOwnProperty(s) ? f != null && (typeof f != "function" && Eh(s, f), s === "onScroll" && Rn("scroll", t)) : f != null && pa(t, s, f, u));
        }
    }
    function HT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? mv(e, f) : s === np ? av(e, f) : s === Vs ? vl(e, f) : pa(e, s, f, i);
      }
    }
    function PT(e, t, a, i) {
      var u, s = jE(a), f, p = i;
      if (p === Ja && (p = ed(e)), p === Ja) {
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
      return p === Ja && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Gn.call(_y, e) && (_y[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function VT(e, t) {
      return jE(t).createTextNode(e);
    }
    function BT(e, t, a, i) {
      var u = hl(t, a);
      Sh(t, a);
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
          for (var f = 0; f < Zd.length; f++)
            Rn(Zd[f], e);
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
          $t(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = eu(e, a), Rn("invalid", e);
          break;
        case "textarea":
          tv(e, a), s = cc(e, a), Rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), FT(t, e, i, s, u), t) {
        case "input":
          La(e), z(e, a, !1);
          break;
        case "textarea":
          La(e), rv(e);
          break;
        case "option":
          Kt(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Th(e);
          break;
      }
    }
    function $T(e, t, a, i, u) {
      Sh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Na(e, a), p = Na(e, i), s = [];
          break;
        case "select":
          f = eu(e, a), p = eu(e, i), s = [];
          break;
        case "textarea":
          f = cc(e, a), p = cc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Th(e);
          break;
      }
      vc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Vs || v === yh || v === _o || v === ME || (Ce.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], U = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === U || b == null && U == null))
          if (v === Bs)
            if (b && Object.freeze(b), U) {
              for (y in U)
                U.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && U[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === np) {
            var j = b ? b[gh] : void 0, P = U ? U[gh] : void 0;
            j != null && P !== j && (s = s || []).push(v, j);
          } else v === Vs ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === yh || v === _o || (Ce.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Eh(v, b), v === "onScroll" && Rn("scroll", e)), !s && U !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (Za(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function YT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = hl(a, i), f = hl(a, u);
      switch (HT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          nv(e, u);
          break;
        case "select":
          sc(e, u);
          break;
      }
    }
    function IT(e) {
      {
        var t = e.toLowerCase();
        return Gu.hasOwnProperty(t) && Gu[t] || null;
      }
    }
    function QT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = hl(t, a), Sh(t, a), t) {
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
          for (var y = 0; y < Zd.length; y++)
            Rn(Zd[y], e);
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
          $t(e, a);
          break;
        case "select":
          Ko(e, a), Rn("invalid", e);
          break;
        case "textarea":
          tv(e, a), Rn("invalid", e);
          break;
      }
      vc(t, a);
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
          var P = a[j];
          if (j === Vs)
            typeof P == "string" ? e.textContent !== P && (a[_o] !== !0 && Rh(e.textContent, P, s, f), U = [Vs, P]) : typeof P == "number" && e.textContent !== "" + P && (a[_o] !== !0 && Rh(e.textContent, P, s, f), U = [Vs, "" + P]);
          else if (Ce.hasOwnProperty(j))
            P != null && (typeof P != "function" && Eh(j, P), j === "onScroll" && Rn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var pe = void 0, $e = cn(j);
            if (a[_o] !== !0) {
              if (!(j === yh || j === _o || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === np) {
                  var ze = e.innerHTML, Dt = P ? P[gh] : void 0;
                  if (Dt != null) {
                    var Tt = AE(e, Dt);
                    Tt !== ze && rp(j, ze, Tt);
                  }
                } else if (j === Bs) {
                  if (v.delete(j), UE) {
                    var L = Jm(P);
                    pe = e.getAttribute("style"), L !== pe && rp(j, pe, L);
                  }
                } else if (p)
                  v.delete(j.toLowerCase()), pe = si(e, j, P), P !== pe && rp(j, pe, P);
                else if (!pn(j, $e, p) && !Zn(j, P, $e, p)) {
                  var V = !1;
                  if ($e !== null)
                    v.delete($e.attributeName), pe = Wl(e, j, P, $e);
                  else {
                    var N = i;
                    if (N === Ja && (N = ed(t)), N === Ja)
                      v.delete(j.toLowerCase());
                    else {
                      var ee = IT(j);
                      ee !== null && ee !== j && (V = !0, v.delete(ee)), v.delete(j);
                    }
                    pe = si(e, j, P);
                  }
                  var Ee = k;
                  !Ee && P !== pe && !V && rp(j, pe, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[_o] !== !0 && zE(v), t) {
        case "input":
          La(e), z(e, a, !0);
          break;
        case "textarea":
          La(e), rv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Th(e);
          break;
      }
      return U;
    }
    function WT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xy(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function qT(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          Im(e, a);
          return;
        case "select":
          Jf(e, a);
          return;
      }
    }
    var ap = function() {
    }, ip = function() {
    };
    {
      var GT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], FE = [
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
      ], XT = FE.concat(["button"]), KT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], HE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ip = function(e, t) {
        var a = rt({}, e || HE), i = {
          tag: t
        };
        return FE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), XT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), GT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var JT = function(e, t) {
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
            return KT.indexOf(t) === -1;
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
      }, ZT = function(e, t) {
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
      }, PE = {};
      ap = function(e, t, a) {
        a = a || HE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = JT(e, u) ? null : i, f = s ? null : ZT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!PE[y]) {
            PE[y] = !0;
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
    var bh = "suppressHydrationWarning", wh = "$", _h = "/$", lp = "$?", up = "$!", eb = "style", Ly = null, Ny = null;
    function tb(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case Jo: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : fc(null, "");
          break;
        }
        default: {
          var s = i === An ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = fc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ip(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function nb(e, t, a) {
      {
        var i = e, u = fc(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Ek(e) {
      return e;
    }
    function rb(e) {
      Ly = pr(), Ny = yT();
      var t = null;
      return Nn(!1), t;
    }
    function ab(e) {
      gT(Ny), Nn(Ly), Ly = null, Ny = null;
    }
    function ib(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = PT(e, t, a, s);
      return cp(u, y), Py(y, t), y;
    }
    function lb(e, t) {
      e.appendChild(t);
    }
    function ub(e, t, a, i, u) {
      switch (BT(e, t, a, i), t) {
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
    function ob(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return $T(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function sb(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = VT(e, t);
      return cp(i, s), s;
    }
    function cb() {
      var e = window.event;
      return e === void 0 ? fr : go(e.type);
    }
    var zy = typeof setTimeout == "function" ? setTimeout : void 0, fb = typeof clearTimeout == "function" ? clearTimeout : void 0, Uy = -1, VE = typeof Promise == "function" ? Promise : void 0, db = typeof queueMicrotask == "function" ? queueMicrotask : typeof VE < "u" ? function(e) {
      return VE.resolve(null).then(e).catch(pb);
    } : zy;
    function pb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vb(e, t, a, i) {
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
    function hb(e, t, a, i, u, s) {
      YT(e, t, a, i, u), Py(e, u);
    }
    function BE(e) {
      vl(e, "");
    }
    function mb(e, t, a) {
      e.nodeValue = a;
    }
    function yb(e, t) {
      e.appendChild(t);
    }
    function gb(e, t) {
      var a;
      e.nodeType === An ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Th(a);
    }
    function Sb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Eb(e, t, a) {
      e.nodeType === An ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Cb(e, t) {
      e.removeChild(t);
    }
    function Rb(e, t) {
      e.nodeType === An ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ay(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === An) {
          var s = u.data;
          if (s === _h)
            if (i === 0) {
              e.removeChild(u), kr(t);
              return;
            } else
              i--;
          else (s === wh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      kr(t);
    }
    function Tb(e, t) {
      e.nodeType === An ? Ay(e.parentNode, t) : e.nodeType === Xr && Ay(e, t), kr(e);
    }
    function bb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function wb(e) {
      e.nodeValue = "";
    }
    function _b(e, t) {
      e = e;
      var a = t[eb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function xb(e, t) {
      e.nodeValue = t;
    }
    function kb(e) {
      e.nodeType === Xr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function Db(e, t, a) {
      return e.nodeType !== Xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Ob(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function Lb(e) {
      return e.nodeType !== An ? null : e;
    }
    function $E(e) {
      return e.data === lp;
    }
    function jy(e) {
      return e.data === up;
    }
    function Nb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Mb(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Xr || t === Bi)
          break;
        if (t === An) {
          var a = e.data;
          if (a === wh || a === up || a === lp)
            break;
          if (a === _h)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return xh(e.nextSibling);
    }
    function zb(e) {
      return xh(e.firstChild);
    }
    function Ub(e) {
      return xh(e.firstChild);
    }
    function Ab(e) {
      return xh(e.nextSibling);
    }
    function jb(e, t, a, i, u, s, f) {
      cp(s, e), Py(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & yt) !== Fe;
      return QT(e, t, a, p, i, y, f);
    }
    function Fb(e, t, a, i) {
      return cp(a, e), a.mode & yt, WT(e, t);
    }
    function Hb(e, t) {
      cp(t, e);
    }
    function Pb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === _h) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === wh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function YE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === An) {
          var i = t.data;
          if (i === wh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === _h && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Vb(e) {
      kr(e);
    }
    function Bb(e) {
      kr(e);
    }
    function $b(e) {
      return e !== "head" && e !== "body";
    }
    function Yb(e, t, a, i) {
      var u = !0;
      Rh(t.nodeValue, a, i, u);
    }
    function Ib(e, t, a, i, u, s) {
      if (t[bh] !== !0) {
        var f = !0;
        Rh(i.nodeValue, u, s, f);
      }
    }
    function Qb(e, t) {
      t.nodeType === Xr ? xy(e, t) : t.nodeType === An || ky(e, t);
    }
    function Wb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Xr ? xy(a, t) : t.nodeType === An || ky(a, t));
      }
    }
    function qb(e, t, a, i, u) {
      (u || t[bh] !== !0) && (i.nodeType === Xr ? xy(a, i) : i.nodeType === An || ky(a, i));
    }
    function Gb(e, t, a) {
      Dy(e, t);
    }
    function Xb(e, t) {
      Oy(e, t);
    }
    function Kb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function Jb(e, t) {
      {
        var a = e.parentNode;
        a !== null && Oy(a, t);
      }
    }
    function Zb(e, t, a, i, u, s) {
      (s || t[bh] !== !0) && Dy(a, i);
    }
    function ew(e, t, a, i, u) {
      (u || t[bh] !== !0) && Oy(a, i);
    }
    function tw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function nw(e) {
      ep(e);
    }
    var Tf = Math.random().toString(36).slice(2), bf = "__reactFiber$" + Tf, Fy = "__reactProps$" + Tf, sp = "__reactContainer$" + Tf, Hy = "__reactEvents$" + Tf, rw = "__reactListeners$" + Tf, aw = "__reactHandles$" + Tf;
    function iw(e) {
      delete e[bf], delete e[Fy], delete e[Hy], delete e[rw], delete e[aw];
    }
    function cp(e, t) {
      t[bf] = e;
    }
    function kh(e, t) {
      t[sp] = e;
    }
    function IE(e) {
      e[sp] = null;
    }
    function fp(e) {
      return !!e[sp];
    }
    function $s(e) {
      var t = e[bf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[sp] || a[bf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = YE(e); u !== null; ) {
              var s = u[bf];
              if (s)
                return s;
              u = YE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xo(e) {
      var t = e[bf] || e[sp];
      return t && (t.tag === I || t.tag === ce || t.tag === Oe || t.tag === B) ? t : null;
    }
    function wf(e) {
      if (e.tag === I || e.tag === ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[Fy] || null;
    }
    function Py(e, t) {
      e[Fy] = t;
    }
    function lw(e) {
      var t = e[Hy];
      return t === void 0 && (t = e[Hy] = /* @__PURE__ */ new Set()), t;
    }
    var QE = {}, WE = Ue.ReactDebugCurrentFrame;
    function Oh(e) {
      if (e) {
        var t = e._owner, a = Qo(e.type, e._source, t ? t.type : null);
        WE.setExtraStackFrame(a);
      } else
        WE.setExtraStackFrame(null);
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
            p && !(p instanceof Error) && (Oh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Oh(null)), p instanceof Error && !(p.message in QE) && (QE[p.message] = !0, Oh(u), S("Failed %s type: %s", a, p.message), Oh(null));
          }
      }
    }
    var Vy = [], Lh;
    Lh = [];
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
      t !== Lh[_u] && S("Unexpected Fiber popped."), e.current = Vy[_u], Vy[_u] = null, Lh[_u] = null, _u--;
    }
    function la(e, t, a) {
      _u++, Vy[_u] = e.current, Lh[_u] = a, e.current = t;
    }
    var By;
    By = {};
    var li = {};
    Object.freeze(li);
    var xu = ko(li), Ul = ko(!1), $y = li;
    function _f(e, t, a) {
      return a && Al(t) ? $y : xu.current;
    }
    function qE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function xf(e, t) {
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
        return u && qE(e, t, s), s;
      }
    }
    function Nh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Mh(e) {
      ia(Ul, e), ia(xu, e);
    }
    function Yy(e) {
      ia(Ul, e), ia(xu, e);
    }
    function GE(e, t, a) {
      {
        if (xu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(xu, t, e), la(Ul, a, e);
      }
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Je(e) || "Unknown";
            By[s] || (By[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
    function zh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return $y = xu.current, la(xu, a, e), la(Ul, Ul.current, e), !0;
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = XE(e, t, $y);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Ul, e), ia(xu, e), la(xu, u, e), la(Ul, a, e);
        } else
          ia(Ul, e), la(Ul, a, e);
      }
    }
    function uw(e) {
      {
        if (!Lv(e) || e.tag !== te)
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
    var Do = 0, Uh = 1, ku = null, Iy = !1, Qy = !1;
    function JE(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function ow(e) {
      Iy = !0, JE(e);
    }
    function ZE() {
      Iy && Oo();
    }
    function Oo() {
      if (!Qy && ku !== null) {
        Qy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = ku;
          for (Qn(ra); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Iy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), hd(Qi, Oo), s;
        } finally {
          Qn(t), Qy = !1;
        }
      }
      return null;
    }
    var kf = [], Df = 0, Ah = null, jh = 0, bi = [], wi = 0, Ys = null, Du = 1, Ou = "";
    function sw(e) {
      return Qs(), (e.flags & ds) !== je;
    }
    function cw(e) {
      return Qs(), jh;
    }
    function fw() {
      var e = Ou, t = Du, a = t & ~dw(t);
      return a.toString(32) + e;
    }
    function Is(e, t) {
      Qs(), kf[Df++] = jh, kf[Df++] = Ah, Ah = e, jh = t;
    }
    function eC(e, t, a) {
      Qs(), bi[wi++] = Du, bi[wi++] = Ou, bi[wi++] = Ys, Ys = e;
      var i = Du, u = Ou, s = Fh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Fh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), b = f >> y, U = s - y, j = Fh(t) + U, P = p << U, pe = P | b, $e = _ + u;
        Du = 1 << j | pe, Ou = $e;
      } else {
        var ze = p << s, Dt = ze | f, Tt = u;
        Du = 1 << v | Dt, Ou = Tt;
      }
    }
    function Wy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Is(e, a), eC(e, a, i);
      }
    }
    function Fh(e) {
      return 32 - In(e);
    }
    function dw(e) {
      return 1 << Fh(e) - 1;
    }
    function qy(e) {
      for (; e === Ah; )
        Ah = kf[--Df], kf[Df] = null, jh = kf[--Df], kf[Df] = null;
      for (; e === Ys; )
        Ys = bi[--wi], bi[wi] = null, Ou = bi[--wi], bi[wi] = null, Du = bi[--wi], bi[wi] = null;
    }
    function pw() {
      return Qs(), Ys !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function vw(e, t) {
      Qs(), bi[wi++] = Du, bi[wi++] = Ou, bi[wi++] = Ys, Du = t.id, Ou = t.overflow, Ys = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, _i = null, Ji = !1, Ws = !1, Lo = null;
    function hw() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tC() {
      Ws = !0;
    }
    function mw() {
      return Ws;
    }
    function yw(e) {
      var t = e.stateNode.containerInfo;
      return _i = Ub(t), Ar = e, Ji = !0, Lo = null, Ws = !1, !0;
    }
    function gw(e, t, a) {
      return _i = Ab(t), Ar = e, Ji = !0, Lo = null, Ws = !1, a !== null && vw(e, a), !0;
    }
    function nC(e, t) {
      switch (e.tag) {
        case B: {
          Qb(e.stateNode.containerInfo, t);
          break;
        }
        case I: {
          var a = (e.mode & yt) !== Fe;
          qb(
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
          i.dehydrated !== null && Wb(i.dehydrated, t);
          break;
        }
      }
    }
    function rC(e, t) {
      nC(e, t);
      var a = Rx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Kr) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (Ws)
          return;
        switch (e.tag) {
          case B: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case I:
                var i = t.type;
                t.pendingProps, Gb(a, i);
                break;
              case ce:
                var u = t.pendingProps;
                Xb(a, u);
                break;
            }
            break;
          }
          case I: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case I: {
                var v = t.type, y = t.pendingProps, g = (e.mode & yt) !== Fe;
                Zb(
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
              case ce: {
                var _ = t.pendingProps, b = (e.mode & yt) !== Fe;
                ew(
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
              case I:
                var P = t.type;
                t.pendingProps, Kb(j, P);
                break;
              case ce:
                var pe = t.pendingProps;
                Jb(j, pe);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function aC(e, t) {
      t.flags = t.flags & -4097 | jn, Gy(e, t);
    }
    function iC(e, t) {
      switch (e.tag) {
        case I: {
          var a = e.type;
          e.pendingProps;
          var i = Db(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, _i = zb(i), !0) : !1;
        }
        case ce: {
          var u = e.pendingProps, s = Ob(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, _i = null, !0) : !1;
        }
        case Oe: {
          var f = Lb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: pw(),
              retryLane: ya
            };
            e.memoizedState = p;
            var v = Tx(f);
            return v.return = e, e.child = v, Ar = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Xy(e) {
      return (e.mode & yt) !== Fe && (e.flags & mt) === je;
    }
    function Ky(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Jy(e) {
      if (Ji) {
        var t = _i;
        if (!t) {
          Xy(e) && (Gy(Ar, e), Ky()), aC(Ar, e), Ji = !1, Ar = e;
          return;
        }
        var a = t;
        if (!iC(e, t)) {
          Xy(e) && (Gy(Ar, e), Ky()), t = op(a);
          var i = Ar;
          if (!t || !iC(e, t)) {
            aC(Ar, e), Ji = !1, Ar = e;
            return;
          }
          rC(i, a);
        }
      }
    }
    function Sw(e, t, a) {
      var i = e.stateNode, u = !Ws, s = jb(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Ew(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Fb(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case B: {
              var s = u.stateNode.containerInfo, f = (u.mode & yt) !== Fe;
              Yb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case I: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & yt) !== Fe;
              Ib(
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
    function Cw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Hb(a, e);
    }
    function Rw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Pb(a);
    }
    function lC(e) {
      for (var t = e.return; t !== null && t.tag !== I && t.tag !== B && t.tag !== Oe; )
        t = t.return;
      Ar = t;
    }
    function Hh(e) {
      if (e !== Ar)
        return !1;
      if (!Ji)
        return lC(e), Ji = !0, !1;
      if (e.tag !== B && (e.tag !== I || $b(e.type) && !My(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (Xy(e))
            uC(e), Ky();
          else
            for (; t; )
              rC(e, t), t = op(t);
      }
      return lC(e), e.tag === Oe ? _i = Rw(e) : _i = Ar ? op(e.stateNode) : null, !0;
    }
    function Tw() {
      return Ji && _i !== null;
    }
    function uC(e) {
      for (var t = _i; t; )
        nC(e, t), t = op(t);
    }
    function Of() {
      Ar = null, _i = null, Ji = !1, Ws = !1;
    }
    function oC() {
      Lo !== null && (tR(Lo), Lo = null);
    }
    function jr() {
      return Ji;
    }
    function Zy(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var bw = Ue.ReactCurrentBatchConfig, ww = null;
    function _w() {
      return bw.transition;
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
      var xw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & at && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Gs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & at && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & at && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & at && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          e.add(Je(b) || "Component"), Gs.add(b.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          t.add(Je(b) || "Component"), Gs.add(b.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          a.add(Je(b) || "Component"), Gs.add(b.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          i.add(Je(b) || "Component"), Gs.add(b.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(b) {
          u.add(Je(b) || "Component"), Gs.add(b.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(b) {
          s.add(Je(b) || "Component"), Gs.add(b.type);
        }), yp = []), t.size > 0) {
          var f = qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = qs(e);
          Ae(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          Ae(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = qs(u);
          Ae(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Ph = /* @__PURE__ */ new Map(), sC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = xw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sC.has(e.type)) {
          var i = Ph.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ph.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Ph.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Je(s) || "Component"), sC.add(s.type);
            });
            var u = qs(i);
            try {
              Xt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              bn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Ph = /* @__PURE__ */ new Map();
      };
    }
    var eg, tg, ng, rg, ag, cC = function(e, t) {
    };
    eg = !1, tg = !1, ng = {}, rg = {}, ag = {}, cC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Je(t) || "Component";
        rg[a] || (rg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function kw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & at || K) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== te) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !kw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Je(e) || "Component";
          ng[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ng[u] = !0);
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
    function Vh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bh(e) {
      {
        var t = Je(e) || "Component";
        if (ag[t])
          return;
        ag[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function dC(e) {
      function t(L, V) {
        if (e) {
          var N = L.deletions;
          N === null ? (L.deletions = [V], L.flags |= Kr) : N.push(V);
        }
      }
      function a(L, V) {
        if (!e)
          return null;
        for (var N = V; N !== null; )
          t(L, N), N = N.sibling;
        return null;
      }
      function i(L, V) {
        for (var N = /* @__PURE__ */ new Map(), ee = V; ee !== null; )
          ee.key !== null ? N.set(ee.key, ee) : N.set(ee.index, ee), ee = ee.sibling;
        return N;
      }
      function u(L, V) {
        var N = ac(L, V);
        return N.index = 0, N.sibling = null, N;
      }
      function s(L, V, N) {
        if (L.index = N, !e)
          return L.flags |= ds, V;
        var ee = L.alternate;
        if (ee !== null) {
          var Ee = ee.index;
          return Ee < V ? (L.flags |= jn, V) : Ee;
        } else
          return L.flags |= jn, V;
      }
      function f(L) {
        return e && L.alternate === null && (L.flags |= jn), L;
      }
      function p(L, V, N, ee) {
        if (V === null || V.tag !== ce) {
          var Ee = ZS(N, L.mode, ee);
          return Ee.return = L, Ee;
        } else {
          var he = u(V, N);
          return he.return = L, he;
        }
      }
      function v(L, V, N, ee) {
        var Ee = N.type;
        if (Ee === Qr)
          return g(L, V, N.props.children, ee, N.key);
        if (V !== null && (V.elementType === Ee || // Keep this check inline so it only runs on the false path:
        yR(V, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ee == "object" && Ee !== null && Ee.$$typeof === et && fC(Ee) === V.type)) {
          var he = u(V, N.props);
          return he.ref = gp(L, V, N), he.return = L, he._debugSource = N._source, he._debugOwner = N._owner, he;
        }
        var Xe = JS(N, L.mode, ee);
        return Xe.ref = gp(L, V, N), Xe.return = L, Xe;
      }
      function y(L, V, N, ee) {
        if (V === null || V.tag !== q || V.stateNode.containerInfo !== N.containerInfo || V.stateNode.implementation !== N.implementation) {
          var Ee = eE(N, L.mode, ee);
          return Ee.return = L, Ee;
        } else {
          var he = u(V, N.children || []);
          return he.return = L, he;
        }
      }
      function g(L, V, N, ee, Ee) {
        if (V === null || V.tag !== oe) {
          var he = Bo(N, L.mode, ee, Ee);
          return he.return = L, he;
        } else {
          var Xe = u(V, N);
          return Xe.return = L, Xe;
        }
      }
      function _(L, V, N) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var ee = ZS("" + V, L.mode, N);
          return ee.return = L, ee;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case or: {
              var Ee = JS(V, L.mode, N);
              return Ee.ref = gp(L, null, V), Ee.return = L, Ee;
            }
            case va: {
              var he = eE(V, L.mode, N);
              return he.return = L, he;
            }
            case et: {
              var Xe = V._payload, nt = V._init;
              return _(L, nt(Xe), N);
            }
          }
          if (lt(V) || Sn(V)) {
            var nn = Bo(V, L.mode, N, null);
            return nn.return = L, nn;
          }
          Vh(L, V);
        }
        return typeof V == "function" && Bh(L), null;
      }
      function b(L, V, N, ee) {
        var Ee = V !== null ? V.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return Ee !== null ? null : p(L, V, "" + N, ee);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case or:
              return N.key === Ee ? v(L, V, N, ee) : null;
            case va:
              return N.key === Ee ? y(L, V, N, ee) : null;
            case et: {
              var he = N._payload, Xe = N._init;
              return b(L, V, Xe(he), ee);
            }
          }
          if (lt(N) || Sn(N))
            return Ee !== null ? null : g(L, V, N, ee, null);
          Vh(L, N);
        }
        return typeof N == "function" && Bh(L), null;
      }
      function U(L, V, N, ee, Ee) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var he = L.get(N) || null;
          return p(V, he, "" + ee, Ee);
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case or: {
              var Xe = L.get(ee.key === null ? N : ee.key) || null;
              return v(V, Xe, ee, Ee);
            }
            case va: {
              var nt = L.get(ee.key === null ? N : ee.key) || null;
              return y(V, nt, ee, Ee);
            }
            case et:
              var nn = ee._payload, Ut = ee._init;
              return U(L, V, N, Ut(nn), Ee);
          }
          if (lt(ee) || Sn(ee)) {
            var qn = L.get(N) || null;
            return g(V, qn, ee, Ee, null);
          }
          Vh(V, ee);
        }
        return typeof ee == "function" && Bh(V), null;
      }
      function j(L, V, N) {
        {
          if (typeof L != "object" || L === null)
            return V;
          switch (L.$$typeof) {
            case or:
            case va:
              cC(L, N);
              var ee = L.key;
              if (typeof ee != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(ee);
                break;
              }
              if (!V.has(ee)) {
                V.add(ee);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ee);
              break;
            case et:
              var Ee = L._payload, he = L._init;
              j(he(Ee), V, N);
              break;
          }
        }
        return V;
      }
      function P(L, V, N, ee) {
        for (var Ee = null, he = 0; he < N.length; he++) {
          var Xe = N[he];
          Ee = j(Xe, Ee, L);
        }
        for (var nt = null, nn = null, Ut = V, qn = 0, At = 0, $n = null; Ut !== null && At < N.length; At++) {
          Ut.index > At ? ($n = Ut, Ut = null) : $n = Ut.sibling;
          var oa = b(L, Ut, N[At], ee);
          if (oa === null) {
            Ut === null && (Ut = $n);
            break;
          }
          e && Ut && oa.alternate === null && t(L, Ut), qn = s(oa, qn, At), nn === null ? nt = oa : nn.sibling = oa, nn = oa, Ut = $n;
        }
        if (At === N.length) {
          if (a(L, Ut), jr()) {
            var Yr = At;
            Is(L, Yr);
          }
          return nt;
        }
        if (Ut === null) {
          for (; At < N.length; At++) {
            var oi = _(L, N[At], ee);
            oi !== null && (qn = s(oi, qn, At), nn === null ? nt = oi : nn.sibling = oi, nn = oi);
          }
          if (jr()) {
            var wa = At;
            Is(L, wa);
          }
          return nt;
        }
        for (var _a = i(L, Ut); At < N.length; At++) {
          var sa = U(_a, L, At, N[At], ee);
          sa !== null && (e && sa.alternate !== null && _a.delete(sa.key === null ? At : sa.key), qn = s(sa, qn, At), nn === null ? nt = sa : nn.sibling = sa, nn = sa);
        }
        if (e && _a.forEach(function(Gf) {
          return t(L, Gf);
        }), jr()) {
          var ju = At;
          Is(L, ju);
        }
        return nt;
      }
      function pe(L, V, N, ee) {
        var Ee = Sn(N);
        if (typeof Ee != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (tg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), tg = !0), N.entries === Ee && (eg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), eg = !0);
          var he = Ee.call(N);
          if (he)
            for (var Xe = null, nt = he.next(); !nt.done; nt = he.next()) {
              var nn = nt.value;
              Xe = j(nn, Xe, L);
            }
        }
        var Ut = Ee.call(N);
        if (Ut == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, At = null, $n = V, oa = 0, Yr = 0, oi = null, wa = Ut.next(); $n !== null && !wa.done; Yr++, wa = Ut.next()) {
          $n.index > Yr ? (oi = $n, $n = null) : oi = $n.sibling;
          var _a = b(L, $n, wa.value, ee);
          if (_a === null) {
            $n === null && ($n = oi);
            break;
          }
          e && $n && _a.alternate === null && t(L, $n), oa = s(_a, oa, Yr), At === null ? qn = _a : At.sibling = _a, At = _a, $n = oi;
        }
        if (wa.done) {
          if (a(L, $n), jr()) {
            var sa = Yr;
            Is(L, sa);
          }
          return qn;
        }
        if ($n === null) {
          for (; !wa.done; Yr++, wa = Ut.next()) {
            var ju = _(L, wa.value, ee);
            ju !== null && (oa = s(ju, oa, Yr), At === null ? qn = ju : At.sibling = ju, At = ju);
          }
          if (jr()) {
            var Gf = Yr;
            Is(L, Gf);
          }
          return qn;
        }
        for (var Xp = i(L, $n); !wa.done; Yr++, wa = Ut.next()) {
          var Yl = U(Xp, L, Yr, wa.value, ee);
          Yl !== null && (e && Yl.alternate !== null && Xp.delete(Yl.key === null ? Yr : Yl.key), oa = s(Yl, oa, Yr), At === null ? qn = Yl : At.sibling = Yl, At = Yl);
        }
        if (e && Xp.forEach(function(ek) {
          return t(L, ek);
        }), jr()) {
          var Zx = Yr;
          Is(L, Zx);
        }
        return qn;
      }
      function $e(L, V, N, ee) {
        if (V !== null && V.tag === ce) {
          a(L, V.sibling);
          var Ee = u(V, N);
          return Ee.return = L, Ee;
        }
        a(L, V);
        var he = ZS(N, L.mode, ee);
        return he.return = L, he;
      }
      function ze(L, V, N, ee) {
        for (var Ee = N.key, he = V; he !== null; ) {
          if (he.key === Ee) {
            var Xe = N.type;
            if (Xe === Qr) {
              if (he.tag === oe) {
                a(L, he.sibling);
                var nt = u(he, N.props.children);
                return nt.return = L, nt._debugSource = N._source, nt._debugOwner = N._owner, nt;
              }
            } else if (he.elementType === Xe || // Keep this check inline so it only runs on the false path:
            yR(he, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Xe == "object" && Xe !== null && Xe.$$typeof === et && fC(Xe) === he.type) {
              a(L, he.sibling);
              var nn = u(he, N.props);
              return nn.ref = gp(L, he, N), nn.return = L, nn._debugSource = N._source, nn._debugOwner = N._owner, nn;
            }
            a(L, he);
            break;
          } else
            t(L, he);
          he = he.sibling;
        }
        if (N.type === Qr) {
          var Ut = Bo(N.props.children, L.mode, ee, N.key);
          return Ut.return = L, Ut;
        } else {
          var qn = JS(N, L.mode, ee);
          return qn.ref = gp(L, V, N), qn.return = L, qn;
        }
      }
      function Dt(L, V, N, ee) {
        for (var Ee = N.key, he = V; he !== null; ) {
          if (he.key === Ee)
            if (he.tag === q && he.stateNode.containerInfo === N.containerInfo && he.stateNode.implementation === N.implementation) {
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
        var nt = eE(N, L.mode, ee);
        return nt.return = L, nt;
      }
      function Tt(L, V, N, ee) {
        var Ee = typeof N == "object" && N !== null && N.type === Qr && N.key === null;
        if (Ee && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case or:
              return f(ze(L, V, N, ee));
            case va:
              return f(Dt(L, V, N, ee));
            case et:
              var he = N._payload, Xe = N._init;
              return Tt(L, V, Xe(he), ee);
          }
          if (lt(N))
            return P(L, V, N, ee);
          if (Sn(N))
            return pe(L, V, N, ee);
          Vh(L, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f($e(L, V, "" + N, ee)) : (typeof N == "function" && Bh(L), a(L, V));
      }
      return Tt;
    }
    var Lf = dC(!0), pC = dC(!1);
    function Dw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Ow(e, t) {
      for (var a = e.child; a !== null; )
        yx(a, t), a = a.sibling;
    }
    var ig = ko(null), lg;
    lg = {};
    var $h = null, Nf = null, ug = null, Yh = !1;
    function Ih() {
      $h = null, Nf = null, ug = null, Yh = !1;
    }
    function vC() {
      Yh = !0;
    }
    function hC() {
      Yh = !1;
    }
    function mC(e, t, a) {
      la(ig, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== lg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = lg;
    }
    function og(e, t) {
      var a = ig.current;
      ia(ig, t), e._currentValue = a;
    }
    function sg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = ut(u.childLanes, t)) : (i.childLanes = ut(i.childLanes, t), u !== null && (u.childLanes = ut(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lw(e, t, a) {
      Nw(e, t, a);
    }
    function Nw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === te) {
                var p = rr(a), v = Lu(Wt, p);
                v.tag = Wh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = ut(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = ut(b.lanes, a)), sg(i.return, a, e), s.lanes = ut(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ot)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === rn) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = ut(U.lanes, a);
          var j = U.alternate;
          j !== null && (j.lanes = ut(j.lanes, a)), sg(U, a, e), u = i.sibling;
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
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Mf(e, t) {
      $h = e, Nf = null, ug = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function lr(e) {
      Yh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ug !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if ($h === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, $h.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var Xs = null;
    function cg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function Mw() {
      if (Xs !== null) {
        for (var e = 0; e < Xs.length; e++) {
          var t = Xs[e], a = t.interleaved;
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
        Xs = null;
      }
    }
    function yC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qh(e, i);
    }
    function zw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Uw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, cg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qh(e, i);
    }
    function Ba(e, t) {
      return Qh(e, t);
    }
    var Aw = Qh;
    function Qh(e, t) {
      e.lanes = ut(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = ut(a.lanes, t)), a === null && (e.flags & (jn | Hn)) !== je && pR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = ut(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = ut(a.childLanes, t) : (u.flags & (jn | Hn)) !== je && pR(e), i = u, u = u.return;
      if (i.tag === B) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var gC = 0, SC = 1, Wh = 2, fg = 3, qh = !1, dg, Gh;
    dg = !1, Gh = null;
    function pg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function EC(e, t) {
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
        tag: gC,
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
      if (Gh === u && !dg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), dg = !0), z1()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Aw(e, a);
      } else
        return Uw(e, u, t, a);
    }
    function Xh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = Xc(s, e.pendingLanes);
          var f = ut(s, a);
          u.lanes = f, ks(e, f);
        }
      }
    }
    function vg(e, t) {
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
    function jw(e, t, a, i, u, s) {
      switch (a.tag) {
        case SC: {
          var f = a.payload;
          if (typeof f == "function") {
            vC();
            var p = f.call(s, i, u);
            {
              if (e.mode & at) {
                Qt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Qt(!1);
                }
              }
              hC();
            }
            return p;
          }
          return f;
        }
        case fg:
          e.flags = e.flags & -65537 | mt;
        case gC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            vC(), y = v.call(s, i, u);
            {
              if (e.mode & at) {
                Qt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Qt(!1);
                }
              }
              hC();
            }
          } else
            y = v;
          return y == null ? i : rt({}, i, y);
        }
        case Wh:
          return qh = !0, i;
      }
      return i;
    }
    function Kh(e, t, a, i) {
      var u = e.updateQueue;
      qh = !1, Gh = u.shared;
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
        var U = u.baseState, j = $, P = null, pe = null, $e = null, ze = s;
        do {
          var Dt = ze.lane, Tt = ze.eventTime;
          if (hu(i, Dt)) {
            if ($e !== null) {
              var V = {
                eventTime: Tt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                tag: ze.tag,
                payload: ze.payload,
                callback: ze.callback,
                next: null
              };
              $e = $e.next = V;
            }
            U = jw(e, u, ze, U, t, a);
            var N = ze.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            ze.lane !== Vn) {
              e.flags |= ln;
              var ee = u.effects;
              ee === null ? u.effects = [ze] : ee.push(ze);
            }
          } else {
            var L = {
              eventTime: Tt,
              lane: Dt,
              tag: ze.tag,
              payload: ze.payload,
              callback: ze.callback,
              next: null
            };
            $e === null ? (pe = $e = L, P = U) : $e = $e.next = L, j = ut(j, Dt);
          }
          if (ze = ze.next, ze === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Ee = p, he = Ee.next;
            Ee.next = null, ze = he, u.lastBaseUpdate = Ee, u.shared.pending = null;
          }
        } while (!0);
        $e === null && (P = U), u.baseState = P, u.firstBaseUpdate = pe, u.lastBaseUpdate = $e;
        var Xe = u.shared.interleaved;
        if (Xe !== null) {
          var nt = Xe;
          do
            j = ut(j, nt.lane), nt = nt.next;
          while (nt !== Xe);
        } else s === null && (u.shared.lanes = $);
        Ip(j), e.lanes = j, e.memoizedState = U;
      }
      Gh = null;
    }
    function Fw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function CC() {
      qh = !1;
    }
    function Jh() {
      return qh;
    }
    function RC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Fw(f, a));
        }
    }
    var Sp = {}, Mo = ko(Sp), Ep = ko(Sp), Zh = ko(Sp);
    function em(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function TC() {
      var e = em(Zh.current);
      return e;
    }
    function hg(e, t) {
      la(Zh, t, e), la(Ep, e, e), la(Mo, Sp, e);
      var a = tb(t);
      ia(Mo, e), la(Mo, a, e);
    }
    function zf(e) {
      ia(Mo, e), ia(Ep, e), ia(Zh, e);
    }
    function mg() {
      var e = em(Mo.current);
      return e;
    }
    function bC(e) {
      em(Zh.current);
      var t = em(Mo.current), a = nb(t, e.type);
      t !== a && (la(Ep, e, e), la(Mo, a, e));
    }
    function yg(e) {
      Ep.current === e && (ia(Mo, e), ia(Ep, e));
    }
    var Hw = 0, wC = 1, _C = 1, Cp = 2, el = ko(Hw);
    function gg(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & wC;
    }
    function Sg(e, t) {
      return e & wC | t;
    }
    function Pw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      la(el, t, e);
    }
    function Af(e) {
      ia(el, e);
    }
    function Vw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function tm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $E(i) || jy(i))
              return t;
          }
        } else if (t.tag === Bt && // revealOrder undefined can't be trusted because it don't
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
    ), Eg = [];
    function Cg() {
      for (var e = 0; e < Eg.length; e++) {
        var t = Eg[e];
        t._workInProgressVersionPrimary = null;
      }
      Eg.length = 0;
    }
    function Bw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Se = Ue.ReactCurrentDispatcher, Rp = Ue.ReactCurrentBatchConfig, Rg, jf;
    Rg = /* @__PURE__ */ new Set();
    var Ks = $, tn = null, mr = null, yr = null, nm = !1, Tp = !1, bp = 0, $w = 0, Yw = 25, Y = null, xi = null, Uo = -1, Tg = !1;
    function It() {
      {
        var e = Y;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function ue() {
      {
        var e = Y;
        xi !== null && (Uo++, xi[Uo] !== e && Iw(e));
      }
    }
    function Ff(e) {
      e != null && !lt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Y, typeof e);
    }
    function Iw(e) {
      {
        var t = Je(tn);
        if (!Rg.has(t) && (Rg.add(t), xi !== null)) {
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
    function bg(e, t) {
      if (Tg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Y), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Y, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function Hf(e, t, a, i, u, s) {
      Ks = s, tn = t, xi = e !== null ? e._debugHookTypes : null, Uo = -1, Tg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? Se.current = qC : xi !== null ? Se.current = WC : Se.current = QC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, bp = 0, p >= Yw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Tg = !1, mr = null, yr = null, t.updateQueue = null, Uo = -1, Se.current = GC, f = a(i, u);
        } while (Tp);
      }
      Se.current = hm, t._debugHookTypes = xi;
      var v = mr !== null && mr.next !== null;
      if (Ks = $, tn = null, mr = null, yr = null, Y = null, xi = null, Uo = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & yt) !== Fe && S("Internal React error: Expected static flag was missing. Please notify the React team."), nm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Pf() {
      var e = bp !== 0;
      return bp = 0, e;
    }
    function xC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & en) !== Fe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function kC() {
      if (Se.current = hm, nm) {
        for (var e = tn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        nm = !1;
      }
      Ks = $, tn = null, mr = null, yr = null, xi = null, Uo = -1, Y = null, VC = !1, Tp = !1, bp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return yr === null ? tn.memoizedState = yr = e : yr = yr.next = e, yr;
    }
    function ki() {
      var e;
      if (mr === null) {
        var t = tn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = mr.next;
      var a;
      if (yr === null ? a = tn.memoizedState : a = yr.next, a !== null)
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
        yr === null ? tn.memoizedState = yr = i : yr = yr.next = i;
      }
      return yr;
    }
    function DC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _g(e, t, a) {
      var i = Fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Gw.bind(null, tn, s);
      return [i.memoizedState, f];
    }
    function xg(e, t, a) {
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
        var g = f.next, _ = s.baseState, b = null, U = null, j = null, P = g;
        do {
          var pe = P.lane;
          if (hu(Ks, pe)) {
            if (j !== null) {
              var ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Vn,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              j = j.next = ze;
            }
            if (P.hasEagerState)
              _ = P.eagerState;
            else {
              var Dt = P.action;
              _ = e(_, Dt);
            }
          } else {
            var $e = {
              lane: pe,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            j === null ? (U = j = $e, b = _) : j = j.next = $e, tn.lanes = ut(tn.lanes, pe), Ip(pe);
          }
          P = P.next;
        } while (P !== null && P !== g);
        j === null ? b = _ : j.next = U, xe(_, i.memoizedState) || Mp(), i.memoizedState = _, i.baseState = b, i.baseQueue = j, u.lastRenderedState = _;
      }
      var Tt = u.interleaved;
      if (Tt !== null) {
        var L = Tt;
        do {
          var V = L.lane;
          tn.lanes = ut(tn.lanes, V), Ip(V), L = L.next;
        } while (L !== Tt);
      } else f === null && (u.lanes = $);
      var N = u.dispatch;
      return [i.memoizedState, N];
    }
    function kg(e, t, a) {
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
        xe(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Ck(e, t, a) {
    }
    function Rk(e, t, a) {
    }
    function Dg(e, t, a) {
      var i = tn, u = Fl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), jf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), jf = !0);
      } else {
        if (s = t(), !jf) {
          var p = t();
          xe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), jf = !0);
        }
        var v = zm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _s(v, Ks) || OC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, um(NC.bind(null, i, y, e), [e]), i.flags |= ha, wp(vr | Fr, LC.bind(null, i, y, s, t), void 0, null), s;
    }
    function rm(e, t, a) {
      var i = tn, u = ki(), s = t();
      if (!jf) {
        var f = t();
        xe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), jf = !0);
      }
      var p = u.memoizedState, v = !xe(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (xp(NC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      yr !== null && yr.memoizedState.tag & vr) {
        i.flags |= ha, wp(vr | Fr, LC.bind(null, i, y, s, t), void 0, null);
        var g = zm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        _s(g, Ks) || OC(i, t, s);
      }
      return s;
    }
    function OC(e, t, a) {
      e.flags |= bc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = tn.updateQueue;
      if (u === null)
        u = DC(), tn.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function LC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, MC(t) && zC(e);
    }
    function NC(e, t, a) {
      var i = function() {
        MC(t) && zC(e);
      };
      return a(i);
    }
    function MC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xe(a, i);
      } catch {
        return !0;
      }
    }
    function zC(e) {
      var t = Ba(e, qe);
      t !== null && Cr(t, e, qe, Wt);
    }
    function am(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Xw.bind(null, tn, a);
      return [t.memoizedState, i];
    }
    function Og(e) {
      return xg(wg);
    }
    function Lg(e) {
      return kg(wg);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = tn.updateQueue;
      if (s === null)
        s = DC(), tn.updateQueue = s, s.lastEffect = u.next = u;
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
    function Ng(e) {
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function im(e) {
      var t = ki();
      return t.memoizedState;
    }
    function _p(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      tn.flags |= e, u.memoizedState = wp(vr | t, a, void 0, s);
    }
    function lm(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (mr !== null) {
        var p = mr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (bg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      tn.flags |= e, u.memoizedState = wp(vr | t, a, f, s);
    }
    function um(e, t) {
      return (tn.mode & en) !== Fe ? _p(gl | ha | dd, Fr, e, t) : _p(ha | dd, Fr, e, t);
    }
    function xp(e, t) {
      return lm(ha, Fr, e, t);
    }
    function Mg(e, t) {
      return _p(Ct, jl, e, t);
    }
    function om(e, t) {
      return lm(Ct, jl, e, t);
    }
    function zg(e, t) {
      var a = Ct;
      return a |= yl, (tn.mode & en) !== Fe && (a |= Mr), _p(a, hr, e, t);
    }
    function sm(e, t) {
      return lm(Ct, hr, e, t);
    }
    function UC(e, t) {
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
    function Ug(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ct;
      return u |= yl, (tn.mode & en) !== Fe && (u |= Mr), _p(u, hr, UC.bind(null, t, e), i);
    }
    function cm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return lm(Ct, hr, UC.bind(null, t, e), i);
    }
    function Qw(e, t) {
    }
    var fm = Qw;
    function Ag(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function dm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function jg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function pm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (bg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Fg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function AC(e) {
      var t = ki(), a = mr, i = a.memoizedState;
      return FC(t, i, e);
    }
    function jC(e) {
      var t = ki();
      if (mr === null)
        return t.memoizedState = e, e;
      var a = mr.memoizedState;
      return FC(t, a, e);
    }
    function FC(e, t, a) {
      var i = !Ld(Ks);
      if (i) {
        if (!xe(a, t)) {
          var u = Md();
          tn.lanes = ut(tn.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function Ww(e, t, a) {
      var i = ga();
      Qn(Ds(i, ja)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Qn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Ae("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Hg() {
      var e = am(!1), t = e[0], a = e[1], i = Ww.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function HC() {
      var e = Og(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function PC() {
      var e = Lg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var VC = !1;
    function qw() {
      return VC;
    }
    function Pg() {
      var e = Fl(), t = zm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = fw();
        i = ":" + a + "R" + u;
        var s = bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = $w++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function vm() {
      var e = ki(), t = e.memoizedState;
      return t;
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
      if (BC(e))
        $C(t, u);
      else {
        var s = yC(e, t, u, i);
        if (s !== null) {
          var f = ba();
          Cr(s, e, i, f), YC(s, t, i);
        }
      }
      IC(e, i);
    }
    function Xw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (BC(e))
        $C(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Se.current, Se.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, xe(y, v)) {
                zw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Se.current = p;
            }
          }
        }
        var g = yC(e, t, u, i);
        if (g !== null) {
          var _ = ba();
          Cr(g, e, i, _), YC(g, t, i);
        }
      }
      IC(e, i);
    }
    function BC(e) {
      var t = e.alternate;
      return e === tn || t !== null && t === tn;
    }
    function $C(e, t) {
      Tp = nm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YC(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Xc(i, e.pendingLanes);
        var u = ut(i, a);
        t.lanes = u, ks(e, u);
      }
    }
    function IC(e, t, a) {
      gs(e, t);
    }
    var hm = {
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
      unstable_isNewReconciler: Re
    }, QC = null, WC = null, qC = null, GC = null, Hl = null, tl = null, mm = null;
    {
      var Vg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, tt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      QC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", It(), Ff(t), Ag(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", It(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", It(), Ff(t), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", It(), Ff(a), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", It(), Ff(t), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", It(), Ff(t), zg(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", It(), Ff(t);
          var a = Se.current;
          Se.current = Hl;
          try {
            return jg(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", It();
          var i = Se.current;
          Se.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", It(), Ng(e);
        },
        useState: function(e) {
          Y = "useState", It();
          var t = Se.current;
          Se.current = Hl;
          try {
            return am(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", It(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", It(), Fg(e);
        },
        useTransition: function() {
          return Y = "useTransition", It(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", It(), Dg(e, t, a);
        },
        useId: function() {
          return Y = "useId", It(), Pg();
        },
        unstable_isNewReconciler: Re
      }, WC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), Ag(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), zg(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = Se.current;
          Se.current = Hl;
          try {
            return jg(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = Se.current;
          Se.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), Ng(e);
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = Se.current;
          Se.current = Hl;
          try {
            return am(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), Fg(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), Dg(e, t, a);
        },
        useId: function() {
          return Y = "useId", ue(), Pg();
        },
        unstable_isNewReconciler: Re
      }, qC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), dm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), sm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = Se.current;
          Se.current = tl;
          try {
            return pm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = Se.current;
          Se.current = tl;
          try {
            return xg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), im();
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = Se.current;
          Se.current = tl;
          try {
            return Og(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), fm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), AC(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), HC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), rm(e, t);
        },
        useId: function() {
          return Y = "useId", ue(), vm();
        },
        unstable_isNewReconciler: Re
      }, GC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ue(), dm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", ue(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", ue(), cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", ue(), om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ue(), sm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ue();
          var a = Se.current;
          Se.current = mm;
          try {
            return pm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", ue();
          var i = Se.current;
          Se.current = mm;
          try {
            return kg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ue(), im();
        },
        useState: function(e) {
          Y = "useState", ue();
          var t = Se.current;
          Se.current = mm;
          try {
            return Lg(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ue(), fm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ue(), jC(e);
        },
        useTransition: function() {
          return Y = "useTransition", ue(), PC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", ue(), rm(e, t);
        },
        useId: function() {
          return Y = "useId", ue(), vm();
        },
        unstable_isNewReconciler: Re
      }, Hl = {
        readContext: function(e) {
          return Vg(), lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", tt(), It(), Ag(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", tt(), It(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", tt(), It(), um(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", tt(), It(), Ug(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", tt(), It(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", tt(), It(), zg(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", tt(), It();
          var a = Se.current;
          Se.current = Hl;
          try {
            return jg(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", tt(), It();
          var i = Se.current;
          Se.current = Hl;
          try {
            return _g(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", tt(), It(), Ng(e);
        },
        useState: function(e) {
          Y = "useState", tt(), It();
          var t = Se.current;
          Se.current = Hl;
          try {
            return am(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", tt(), It(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", tt(), It(), Fg(e);
        },
        useTransition: function() {
          return Y = "useTransition", tt(), It(), Hg();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", tt(), It(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", tt(), It(), Dg(e, t, a);
        },
        useId: function() {
          return Y = "useId", tt(), It(), Pg();
        },
        unstable_isNewReconciler: Re
      }, tl = {
        readContext: function(e) {
          return Vg(), lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", tt(), ue(), dm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", tt(), ue(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", tt(), ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", tt(), ue(), cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", tt(), ue(), om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", tt(), ue(), sm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", tt(), ue();
          var a = Se.current;
          Se.current = tl;
          try {
            return pm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", tt(), ue();
          var i = Se.current;
          Se.current = tl;
          try {
            return xg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", tt(), ue(), im();
        },
        useState: function(e) {
          Y = "useState", tt(), ue();
          var t = Se.current;
          Se.current = tl;
          try {
            return Og(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", tt(), ue(), fm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", tt(), ue(), AC(e);
        },
        useTransition: function() {
          return Y = "useTransition", tt(), ue(), HC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", tt(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", tt(), ue(), rm(e, t);
        },
        useId: function() {
          return Y = "useId", tt(), ue(), vm();
        },
        unstable_isNewReconciler: Re
      }, mm = {
        readContext: function(e) {
          return Vg(), lr(e);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", tt(), ue(), dm(e, t);
        },
        useContext: function(e) {
          return Y = "useContext", tt(), ue(), lr(e);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", tt(), ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Y = "useImperativeHandle", tt(), ue(), cm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Y = "useInsertionEffect", tt(), ue(), om(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", tt(), ue(), sm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", tt(), ue();
          var a = Se.current;
          Se.current = tl;
          try {
            return pm(e, t);
          } finally {
            Se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Y = "useReducer", tt(), ue();
          var i = Se.current;
          Se.current = tl;
          try {
            return kg(e, t, a);
          } finally {
            Se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", tt(), ue(), im();
        },
        useState: function(e) {
          Y = "useState", tt(), ue();
          var t = Se.current;
          Se.current = tl;
          try {
            return Lg(e);
          } finally {
            Se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", tt(), ue(), fm();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", tt(), ue(), jC(e);
        },
        useTransition: function() {
          return Y = "useTransition", tt(), ue(), PC();
        },
        useMutableSource: function(e, t, a) {
          return Y = "useMutableSource", tt(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Y = "useSyncExternalStore", tt(), ue(), rm(e, t);
        },
        useId: function() {
          return Y = "useId", tt(), ue(), vm();
        },
        unstable_isNewReconciler: Re
      };
    }
    var Ao = D.unstable_now, XC = 0, ym = -1, kp = -1, gm = -1, Bg = !1, Sm = !1;
    function KC() {
      return Bg;
    }
    function Kw() {
      Sm = !0;
    }
    function Jw() {
      Bg = !1, Sm = !1;
    }
    function Zw() {
      Bg = Sm, Sm = !1;
    }
    function JC() {
      return XC;
    }
    function ZC() {
      XC = Ao();
    }
    function $g(e) {
      kp = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function e0(e) {
      kp = -1;
    }
    function Em(e, t) {
      if (kp >= 0) {
        var a = Ao() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Pl(e) {
      if (ym >= 0) {
        var t = Ao() - ym;
        ym = -1;
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
    function Yg(e) {
      if (gm >= 0) {
        var t = Ao() - gm;
        gm = -1;
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
      ym = Ao();
    }
    function Ig() {
      gm = Ao();
    }
    function Qg(e) {
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
    var Wg = {}, qg, Gg, Xg, Kg, Jg, t0, Cm, Zg, eS, tS, Dp;
    {
      qg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var n0 = /* @__PURE__ */ new Set();
      Cm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          n0.has(a) || (n0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, t0 = function(e, t) {
        if (t === void 0) {
          var a = xt(e) || "Component";
          Jg.has(a) || (Jg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Wg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Wg);
    }
    function nS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & at) {
          Qt(!0);
          try {
            s = a(i, u);
          } finally {
            Qt(!1);
          }
        }
        t0(t, s);
      }
      var f = s == null ? u : rt({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var rS = {
      isMounted: pd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Cm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Cr(p, i, s, u), Xh(p, i, s)), gs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.tag = SC, f.payload = t, a != null && (Cm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Cr(p, i, s, u), Xh(p, i, s)), gs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = ba(), u = Po(a), s = Lu(i, u);
        s.tag = Wh, t != null && (Cm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Cr(f, a, u, i), Xh(f, a, u)), xd(a, u);
      }
    };
    function r0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & at) {
            Qt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Qt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", xt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !He(a, i) || !He(u, s) : !0;
    }
    function e_(e, t, a) {
      var i = e.stateNode;
      {
        var u = xt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & at) === Fe && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & at) === Fe && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !eS.has(t) && (eS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", xt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Xg.has(t) && (Xg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", xt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || lt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function a0(e, t) {
      t.updater = rS, e.stateNode = t, fs(t, e), t._reactInternalInstance = Wg;
    }
    function i0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !tS.has(t)) {
          tS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", xt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = lr(f);
      else {
        u = _f(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? xf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & at) {
        Qt(!0);
        try {
          g = new t(a, s);
        } finally {
          Qt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      a0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = xt(t) || "Component";
          Gg.has(b) || (Gg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var U = null, j = null, P = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), U !== null || j !== null || P !== null) {
            var pe = xt(t) || "Component", $e = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Kg.has(pe) || (Kg.add(pe), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, pe, $e, U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && qE(e, u, s), g;
    }
    function t_(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Je(e) || "Component"), rS.enqueueReplaceState(t, t.state, null));
    }
    function l0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Je(e) || "Component";
          qg.has(s) || (qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        rS.enqueueReplaceState(t, t.state, null);
      }
    }
    function aS(e, t, a, i) {
      e_(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, pg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = lr(s);
      else {
        var f = _f(e, t, !0);
        u.context = xf(e, f);
      }
      {
        if (u.state === a) {
          var p = xt(t) || "Component";
          Zg.has(p) || (Zg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & at && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (nS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (t_(e, u), Kh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ct;
        y |= yl, (e.mode & en) !== Fe && (y |= Mr), e.flags |= y;
      }
    }
    function n_(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = lr(p);
      else {
        var y = _f(e, t, !0);
        v = xf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && l0(e, u, a, v), CC();
      var b = e.memoizedState, U = u.state = b;
      if (Kh(e, a, u, i), U = e.memoizedState, s === a && b === U && !Nh() && !Jh()) {
        if (typeof u.componentDidMount == "function") {
          var j = Ct;
          j |= yl, (e.mode & en) !== Fe && (j |= Mr), e.flags |= j;
        }
        return !1;
      }
      typeof g == "function" && (nS(e, t, g, a), U = e.memoizedState);
      var P = Jh() || r0(e, t, s, a, b, U, v);
      if (P) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var pe = Ct;
          pe |= yl, (e.mode & en) !== Fe && (pe |= Mr), e.flags |= pe;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var $e = Ct;
          $e |= yl, (e.mode & en) !== Fe && ($e |= Mr), e.flags |= $e;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, P;
    }
    function r_(e, t, a, i, u) {
      var s = t.stateNode;
      EC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = lr(g);
      else {
        var b = _f(t, a, !0);
        _ = xf(t, b);
      }
      var U = a.getDerivedStateFromProps, j = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && l0(t, s, i, _), CC();
      var P = t.memoizedState, pe = s.state = P;
      if (Kh(t, i, s, u), pe = t.memoizedState, f === v && P === pe && !Nh() && !Jh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= za), !1;
      typeof U == "function" && (nS(t, a, U, i), pe = t.memoizedState);
      var $e = Jh() || r0(t, a, p, i, P, pe, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      se;
      return $e ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, pe, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, pe, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = pe), s.props = i, s.state = pe, s.context = _, $e;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: _t(t),
        digest: null
      };
    }
    function iS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function a_(e, t) {
      return !0;
    }
    function lS(e, t) {
      try {
        var a = a_(e, t);
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
    var i_ = typeof WeakMap == "function" ? WeakMap : Map;
    function u0(e, t, a) {
      var i = Lu(Wt, a);
      i.tag = fg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        K1(u), lS(e, t);
      }, i;
    }
    function uS(e, t, a) {
      var i = Lu(Wt, a);
      i.tag = fg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          gR(e), lS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        gR(e), lS(e, t), typeof u != "function" && G1(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (na(e.lanes, qe) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Je(e) || "Unknown"));
      }), i;
    }
    function o0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new i_(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = J1.bind(null, e, t, a);
        _r && Qp(e, a), t.then(s, s);
      }
    }
    function l_(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function u_(e, t) {
      var a = e.tag;
      if ((e.mode & yt) === Fe && (a === me || a === Ye || a === We)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function s0(e) {
      var t = e;
      do {
        if (t.tag === Oe && Vw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function c0(e, t, a, i, u) {
      if ((e.mode & yt) === Fe) {
        if (e === t)
          e.flags |= Ua;
        else {
          if (e.flags |= mt, a.flags |= ti, a.flags &= -52805, a.tag === te) {
            var s = a.alternate;
            if (s === null)
              a.tag = Lt;
            else {
              var f = Lu(Wt, qe);
              f.tag = Wh, No(a, f, qe);
            }
          }
          a.lanes = ut(a.lanes, qe);
        }
        return e;
      }
      return e.flags |= Ua, e.lanes = u, e;
    }
    function o_(e, t, a, i, u) {
      if (a.flags |= lu, _r && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        u_(a), jr() && a.mode & yt && tC();
        var f = s0(t);
        if (f !== null) {
          f.flags &= -257, c0(f, t, a, e, u), f.mode & yt && o0(e, s, u), l_(f, e, s);
          return;
        } else {
          if (!Od(u)) {
            o0(e, s, u), PS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & yt) {
        tC();
        var v = s0(t);
        if (v !== null) {
          (v.flags & Ua) === je && (v.flags |= wn), c0(v, t, a, e, u), Zy(Js(i, a));
          return;
        }
      }
      i = Js(i, a), V1(i);
      var y = t;
      do {
        switch (y.tag) {
          case B: {
            var g = i;
            y.flags |= Ua;
            var _ = rr(u);
            y.lanes = ut(y.lanes, _);
            var b = u0(y, g, _);
            vg(y, b);
            return;
          }
          case te:
            var U = i, j = y.type, P = y.stateNode;
            if ((y.flags & mt) === je && (typeof j.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !sR(P))) {
              y.flags |= Ua;
              var pe = rr(u);
              y.lanes = ut(y.lanes, pe);
              var $e = uS(y, U, pe);
              vg(y, $e);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function s_() {
      return null;
    }
    var Op = Ue.ReactCurrentOwner, rl = !1, oS, Lp, sS, cS, fS, Zs, dS, Rm, Np;
    oS = {}, Lp = {}, sS = {}, cS = {}, fS = {}, Zs = !1, dS = {}, Rm = {}, Np = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = pC(t, null, a, i) : t.child = Lf(t, e.child, a, i);
    }
    function c_(e, t, a, i) {
      t.child = Lf(t, e.child, null, i), t.child = Lf(t, null, a, i);
    }
    function f0(e, t, a, i, u) {
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
      Mf(t, u), Aa(t);
      {
        if (Op.current = t, Da(!0), v = Hf(e, t, f, i, p, u), y = Pf(), t.mode & at) {
          Qt(!0);
          try {
            v = Hf(e, t, f, i, p, u), y = Pf();
          } finally {
            Qt(!1);
          }
        }
        Da(!1);
      }
      return Rl(), e !== null && !rl ? (xC(e, t, u), Nu(e, t, u)) : (jr() && y && Wy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function d0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (hx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = qf(s), t.tag = We, t.type = f, hS(t, s), p0(e, t, f, i, u);
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
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = KS(a.type, null, i, t, t.mode, u);
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
      var b = e.child, U = CS(e, u);
      if (!U) {
        var j = b.memoizedProps, P = a.compare;
        if (P = P !== null ? P : He, P(j, i) && e.ref === t.ref)
          return Nu(e, t, u);
      }
      t.flags |= Ii;
      var pe = ac(b, i);
      return pe.ref = t.ref, pe.return = t, t.child = pe, pe;
    }
    function p0(e, t, a, i, u) {
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
          if (rl = !1, t.pendingProps = i = g, CS(e, u))
            (e.flags & ti) !== je && (rl = !0);
          else return t.lanes = e.lanes, Nu(e, t, u);
      }
      return pS(e, t, a, i, u);
    }
    function v0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || x)
        if ((t.mode & yt) === Fe) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Um(t, a);
        } else if (na(a, ya)) {
          var _ = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var b = s !== null ? s.baseLanes : a;
          Um(t, b);
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
          return t.memoizedState = g, t.updateQueue = null, Um(t, v), null;
        }
      else {
        var U;
        s !== null ? (U = ut(s.baseLanes, a), t.memoizedState = null) : U = a, Um(t, U);
      }
      return Ra(e, t, u, a), t.child;
    }
    function f_(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function d_(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function p_(e, t, a) {
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
    function h0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Fn, t.flags |= ps);
    }
    function pS(e, t, a, i, u) {
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
        var p = _f(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Mf(t, u), Aa(t);
      {
        if (Op.current = t, Da(!0), v = Hf(e, t, a, i, f, u), y = Pf(), t.mode & at) {
          Qt(!0);
          try {
            v = Hf(e, t, a, i, f, u), y = Pf();
          } finally {
            Qt(!1);
          }
        }
        Da(!1);
      }
      return Rl(), e !== null && !rl ? (xC(e, t, u), Nu(e, t, u)) : (jr() && y && Wy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function m0(e, t, a, i, u) {
      {
        switch (Ox(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= mt, t.flags |= Ua;
            var y = new Error("Simulated error coming from DevTools"), g = rr(u);
            t.lanes = ut(t.lanes, g);
            var _ = uS(t, Js(y, t), g);
            vg(t, _);
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
      Al(a) ? (U = !0, zh(t)) : U = !1, Mf(t, u);
      var j = t.stateNode, P;
      j === null ? (bm(e, t), i0(t, a, i), aS(t, a, i, u), P = !0) : e === null ? P = n_(t, a, i, u) : P = r_(e, t, a, i, u);
      var pe = vS(e, t, a, P, U, u);
      {
        var $e = t.stateNode;
        P && $e.props !== i && (Zs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Je(t) || "a component"), Zs = !0);
      }
      return pe;
    }
    function vS(e, t, a, i, u, s) {
      h0(e, t);
      var f = (t.flags & mt) !== je;
      if (!i && !f)
        return u && KE(t, a, !1), Nu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, e0();
      else {
        Aa(t);
        {
          if (Da(!0), v = p.render(), t.mode & at) {
            Qt(!0);
            try {
              p.render();
            } finally {
              Qt(!1);
            }
          }
          Da(!1);
        }
        Rl();
      }
      return t.flags |= Ii, e !== null && f ? c_(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && KE(t, a, !0), t.child;
    }
    function y0(e) {
      var t = e.stateNode;
      t.pendingContext ? GE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && GE(e, t.context, !1), hg(e, t.containerInfo);
    }
    function v_(e, t, a) {
      if (y0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      EC(e, t), Kh(t, i, null, a);
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
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return g0(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return g0(e, t, p, a, _);
        } else {
          yw(t);
          var b = pC(t, null, p, a);
          t.child = b;
          for (var U = b; U; )
            U.flags = U.flags & -3 | Hn, U = U.sibling;
        }
      } else {
        if (Of(), p === s)
          return Nu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function g0(e, t, a, i, u) {
      return Of(), Zy(u), t.flags |= wn, Ra(e, t, a, i), t.child;
    }
    function h_(e, t, a) {
      bC(t), e === null && Jy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= Zt), h0(e, t), Ra(e, t, f, a), t.child;
    }
    function m_(e, t) {
      return e === null && Jy(t), null;
    }
    function y_(e, t, a, i) {
      bm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = mx(v), g = nl(v, u), _;
      switch (y) {
        case me:
          return hS(t, v), t.type = v = qf(v), _ = pS(null, t, v, g, i), _;
        case te:
          return t.type = v = IS(v), _ = m0(null, t, v, g, i), _;
        case Ye:
          return t.type = v = QS(v), _ = f0(null, t, v, g, i), _;
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
          return _ = d0(
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
    function g_(e, t, a, i, u) {
      bm(e, t), t.tag = te;
      var s;
      return Al(a) ? (s = !0, zh(t)) : s = !1, Mf(t, u), i0(t, a, i), aS(t, a, i, u), vS(null, t, a, !0, s, u);
    }
    function S_(e, t, a, i) {
      bm(e, t);
      var u = t.pendingProps, s;
      {
        var f = _f(t, a, !1);
        s = xf(t, f);
      }
      Mf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = xt(a) || "Unknown";
          oS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), oS[y] = !0);
        }
        t.mode & at && Zi.recordLegacyContextWarning(t, null), Da(!0), Op.current = t, p = Hf(null, t, a, u, s, i), v = Pf(), Da(!1);
      }
      if (Rl(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = xt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = xt(a) || "Unknown";
          Lp[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Lp[_] = !0);
        }
        t.tag = te, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Al(a) ? (b = !0, zh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, pg(t), a0(t, p), aS(t, a, u, i), vS(null, t, a, !0, b, i);
      } else {
        if (t.tag = me, t.mode & at) {
          Qt(!0);
          try {
            p = Hf(null, t, a, u, s, i), v = Pf();
          } finally {
            Qt(!1);
          }
        }
        return jr() && v && Wy(t), Ra(null, t, p, i), hS(t, a), t.child;
      }
    }
    function hS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), fS[u] || (fS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = xt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = xt(t) || "Unknown";
          cS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), cS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = xt(t) || "Unknown";
          sS[v] || (S("%s: Function components do not support contextType.", v), sS[v] = !0);
        }
      }
    }
    var mS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Vn
    };
    function yS(e) {
      return {
        baseLanes: e,
        cachePool: s_(),
        transitions: null
      };
    }
    function E_(e, t) {
      var a = null;
      return {
        baseLanes: ut(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function C_(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return gg(e, Cp);
    }
    function R_(e, t) {
      return xs(e.childLanes, t);
    }
    function S0(e, t, a) {
      var i = t.pendingProps;
      Lx(t) && (t.flags |= mt);
      var u = el.current, s = !1, f = (t.flags & mt) !== je;
      if (f || C_(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = Pw(u, _C)), u = Uf(u), zo(t, u), e === null) {
        Jy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return x_(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = T_(t, y, g, a), b = t.child;
          return b.memoizedState = yS(a), t.memoizedState = mS, _;
        } else
          return gS(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var j = U.dehydrated;
          if (j !== null)
            return k_(e, t, f, i, j, U, a);
        }
        if (s) {
          var P = i.fallback, pe = i.children, $e = w_(e, t, pe, P, a), ze = t.child, Dt = e.child.memoizedState;
          return ze.memoizedState = Dt === null ? yS(a) : E_(Dt, a), ze.childLanes = R_(e, a), t.memoizedState = mS, $e;
        } else {
          var Tt = i.children, L = b_(e, t, Tt, a);
          return t.memoizedState = null, L;
        }
      }
    }
    function gS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = SS(u, i);
      return s.return = e, e.child = s, s;
    }
    function T_(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & yt) === Fe && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & bt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = SS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function SS(e, t, a) {
      return ER(e, t, $, null);
    }
    function E0(e, t) {
      return ac(e, t);
    }
    function b_(e, t, a, i) {
      var u = e.child, s = u.sibling, f = E0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & yt) === Fe && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Kr) : p.push(s);
      }
      return t.child = f, f;
    }
    function w_(e, t, a, i, u) {
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
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = E0(f, v), y.subtreeFlags = f.subtreeFlags & Pn;
      var _;
      return p !== null ? _ = ac(p, i) : (_ = Bo(i, s, u, null), _.flags |= jn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Tm(e, t, a, i) {
      i !== null && Zy(i), Lf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = gS(t, s);
      return f.flags |= jn, t.memoizedState = null, f;
    }
    function __(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = SS(f, s), v = Bo(i, s, u, null);
      return v.flags |= jn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & yt) !== Fe && Lf(t, e.child, null, u), v;
    }
    function x_(e, t, a) {
      return (e.mode & yt) === Fe ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = qe) : jy(t) ? e.lanes = nr : e.lanes = ya, null;
    }
    function k_(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & wn) {
          t.flags &= -257;
          var L = iS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Tm(e, t, f, L);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= mt, null;
          var V = i.children, N = i.fallback, ee = __(e, t, V, N, f), Ee = t.child;
          return Ee.memoizedState = yS(f), t.memoizedState = mS, ee;
        }
      else {
        if (hw(), (t.mode & yt) === Fe)
          return Tm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (jy(u)) {
          var p, v, y;
          {
            var g = Nb(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = iS(_, p, y);
          return Tm(e, t, f, b);
        }
        var U = na(f, e.childLanes);
        if (rl || U) {
          var j = zm();
          if (j !== null) {
            var P = Zc(j, f);
            if (P !== Vn && P !== s.retryLane) {
              s.retryLane = P;
              var pe = Wt;
              Ba(e, P), Cr(j, e, P, pe);
            }
          }
          PS();
          var $e = iS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Tm(e, t, f, $e);
        } else if ($E(u)) {
          t.flags |= mt, t.child = e.child;
          var ze = Z1.bind(null, e);
          return Mb(u, ze), null;
        } else {
          gw(t, u, s.treeContext);
          var Dt = i.children, Tt = gS(t, Dt);
          return Tt.flags |= Hn, Tt;
        }
      }
    }
    function C0(e, t, a) {
      e.lanes = ut(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = ut(i.lanes, t)), sg(e.return, t, a);
    }
    function D_(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Oe) {
          var u = i.memoizedState;
          u !== null && C0(i, a, e);
        } else if (i.tag === Bt)
          C0(i, a, e);
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
    function O_(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && tm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function L_(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !dS[e])
        if (dS[e] = !0, typeof e == "string")
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
    function N_(e, t) {
      e !== void 0 && !Rm[e] && (e !== "collapsed" && e !== "hidden" ? (Rm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Rm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function R0(e, t) {
      {
        var a = lt(e), i = !a && typeof Sn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function M_(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (lt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!R0(e[a], a))
              return;
        } else {
          var i = Sn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!R0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ES(e, t, a, i, u) {
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
    function T0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      L_(u), N_(s, u), M_(f, u), Ra(e, t, f, a);
      var p = el.current, v = gg(p, Cp);
      if (v)
        p = Sg(p, Cp), t.flags |= mt;
      else {
        var y = e !== null && (e.flags & mt) !== je;
        y && D_(t, t.child, a), p = Uf(p);
      }
      if (zo(t, p), (t.mode & yt) === Fe)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = O_(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), ES(
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
              if (j !== null && tm(j) === null) {
                t.child = U;
                break;
              }
              var P = U.sibling;
              U.sibling = b, b = U, U = P;
            }
            ES(
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
            ES(
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
    function z_(e, t, a) {
      hg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var b0 = !1;
    function U_(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || b0 || (b0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (mC(t, u, p), f !== null) {
        var y = f.value;
        if (xe(y, p)) {
          if (f.children === s.children && !Nh())
            return Nu(e, t, a);
        } else
          Lw(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var w0 = !1;
    function A_(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (w0 || (w0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = lr(i);
      Aa(t);
      var p;
      return Op.current = t, Da(!0), p = s(f), Da(!1), Rl(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Mp() {
      rl = !0;
    }
    function bm(e, t) {
      (t.mode & yt) === Fe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= jn);
    }
    function Nu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), e0(), Ip(t.lanes), na(a, t.childLanes) ? (Dw(e, t), t.child) : null;
    }
    function j_(e, t, a) {
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
    function CS(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function F_(e, t, a) {
      switch (t.tag) {
        case B:
          y0(t), t.stateNode, Of();
          break;
        case I:
          bC(t);
          break;
        case te: {
          var i = t.type;
          Al(i) && zh(t);
          break;
        }
        case q:
          hg(t, t.stateNode.containerInfo);
          break;
        case ot: {
          var u = t.memoizedProps.value, s = t.type._context;
          mC(t, s, u);
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
              return zo(t, Uf(el.current)), t.flags |= mt, null;
            var y = t.child, g = y.childLanes;
            if (na(a, g))
              return S0(e, t, a);
            zo(t, Uf(el.current));
            var _ = Nu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            zo(t, Uf(el.current));
          break;
        }
        case Bt: {
          var b = (e.flags & mt) !== je, U = na(a, t.childLanes);
          if (b) {
            if (U)
              return T0(e, t, a);
            t.flags |= mt;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), zo(t, el.current), U)
            break;
          return null;
        }
        case Be:
        case zt:
          return t.lanes = $, v0(e, t, a);
      }
      return Nu(e, t, a);
    }
    function _0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return j_(e, t, KS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Nh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = CS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & mt) === je)
            return rl = !1, F_(e, t, a);
          (e.flags & ti) !== je ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && sw(t)) {
        var f = t.index, p = cw();
        eC(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case ae:
          return S_(e, t, t.type, a);
        case qt: {
          var v = t.elementType;
          return y_(e, t, v, a);
        }
        case me: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : nl(y, g);
          return pS(e, t, y, _, a);
        }
        case te: {
          var b = t.type, U = t.pendingProps, j = t.elementType === b ? U : nl(b, U);
          return m0(e, t, b, j, a);
        }
        case B:
          return v_(e, t, a);
        case I:
          return h_(e, t, a);
        case ce:
          return m_(e, t);
        case Oe:
          return S0(e, t, a);
        case q:
          return z_(e, t, a);
        case Ye: {
          var P = t.type, pe = t.pendingProps, $e = t.elementType === P ? pe : nl(P, pe);
          return f0(e, t, P, $e, a);
        }
        case oe:
          return f_(e, t, a);
        case gn:
          return d_(e, t, a);
        case Ot:
          return p_(e, t, a);
        case ot:
          return U_(e, t, a);
        case Ft:
          return A_(e, t, a);
        case ct: {
          var ze = t.type, Dt = t.pendingProps, Tt = nl(ze, Dt);
          if (t.type !== t.elementType) {
            var L = ze.propTypes;
            L && Ki(
              L,
              Tt,
              // Resolved for outer only
              "prop",
              xt(ze)
            );
          }
          return Tt = nl(ze.type, Tt), d0(e, t, ze, Tt, a);
        }
        case We:
          return p0(e, t, t.type, t.pendingProps, a);
        case Lt: {
          var V = t.type, N = t.pendingProps, ee = t.elementType === V ? N : nl(V, N);
          return g_(e, t, V, ee, a);
        }
        case Bt:
          return T0(e, t, a);
        case gt:
          break;
        case Be:
          return v0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vf(e) {
      e.flags |= Ct;
    }
    function x0(e) {
      e.flags |= Fn, e.flags |= ps;
    }
    var k0, RS, D0, O0;
    k0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === I || u.tag === ce)
          lb(e, u.stateNode);
        else if (u.tag !== q) {
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
    }, RS = function(e, t) {
    }, D0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = mg(), v = ob(f, a, s, i, u, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, O0 = function(e, t, a, i) {
      a !== i && Vf(t);
    };
    function zp(e, t) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = je;
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
    function H_(e, t, a) {
      if (Tw() && (t.mode & yt) !== Fe && (t.flags & mt) === je)
        return uC(t), Of(), t.flags |= wn | lu | Ua, !1;
      var i = Hh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Cw(t), Hr(t), (t.mode & bt) !== Fe) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Of(), (t.flags & mt) === je && (t.memoizedState = null), t.flags |= Ct, Hr(t), (t.mode & bt) !== Fe) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return oC(), !0;
    }
    function L0(e, t, a) {
      var i = t.pendingProps;
      switch (qy(t), t.tag) {
        case ae:
        case qt:
        case We:
        case me:
        case Ye:
        case oe:
        case gn:
        case Ot:
        case Ft:
        case ct:
          return Hr(t), null;
        case te: {
          var u = t.type;
          return Al(u) && Mh(t), Hr(t), null;
        }
        case B: {
          var s = t.stateNode;
          if (zf(t), Yy(t), Cg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Hh(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & wn) !== je) && (t.flags |= za, oC());
            }
          }
          return RS(e, t), Hr(t), null;
        }
        case I: {
          yg(t);
          var v = TC(), y = t.type;
          if (e !== null && t.stateNode != null)
            D0(e, t, y, i, v), e.ref !== t.ref && x0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = mg(), _ = Hh(t);
            if (_)
              Sw(t, v, g) && Vf(t);
            else {
              var b = ib(y, i, v, g, t);
              k0(b, t, !1, !1), t.stateNode = b, ub(b, y, i, v) && Vf(t);
            }
            t.ref !== null && x0(t);
          }
          return Hr(t), null;
        }
        case ce: {
          var U = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            O0(e, t, j, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = TC(), pe = mg(), $e = Hh(t);
            $e ? Ew(t) && Vf(t) : t.stateNode = sb(U, P, pe, t);
          }
          return Hr(t), null;
        }
        case Oe: {
          Af(t);
          var ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Dt = H_(e, t, ze);
            if (!Dt)
              return t.flags & Ua ? t : null;
          }
          if ((t.flags & mt) !== je)
            return t.lanes = a, (t.mode & bt) !== Fe && Qg(t), t;
          var Tt = ze !== null, L = e !== null && e.memoizedState !== null;
          if (Tt !== L && Tt) {
            var V = t.child;
            if (V.flags |= gi, (t.mode & yt) !== Fe) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              N || gg(el.current, _C) ? P1() : PS();
            }
          }
          var ee = t.updateQueue;
          if (ee !== null && (t.flags |= Ct), Hr(t), (t.mode & bt) !== Fe && Tt) {
            var Ee = t.child;
            Ee !== null && (t.treeBaseDuration -= Ee.treeBaseDuration);
          }
          return null;
        }
        case q:
          return zf(t), RS(e, t), e === null && nw(t.stateNode.containerInfo), Hr(t), null;
        case ot:
          var he = t.type._context;
          return og(he, t), Hr(t), null;
        case Lt: {
          var Xe = t.type;
          return Al(Xe) && Mh(t), Hr(t), null;
        }
        case Bt: {
          Af(t);
          var nt = t.memoizedState;
          if (nt === null)
            return Hr(t), null;
          var nn = (t.flags & mt) !== je, Ut = nt.rendering;
          if (Ut === null)
            if (nn)
              zp(nt, !1);
            else {
              var qn = B1() && (e === null || (e.flags & mt) === je);
              if (!qn)
                for (var At = t.child; At !== null; ) {
                  var $n = tm(At);
                  if ($n !== null) {
                    nn = !0, t.flags |= mt, zp(nt, !1);
                    var oa = $n.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= Ct), t.subtreeFlags = je, Ow(t, a), zo(t, Sg(el.current, Cp)), t.child;
                  }
                  At = At.sibling;
                }
              nt.tail !== null && On() > J0() && (t.flags |= mt, nn = !0, zp(nt, !1), t.lanes = Hv);
            }
          else {
            if (!nn) {
              var Yr = tm(Ut);
              if (Yr !== null) {
                t.flags |= mt, nn = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= Ct), zp(nt, !0), nt.tail === null && nt.tailMode === "hidden" && !Ut.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              On() * 2 - nt.renderingStartTime > J0() && a !== ya && (t.flags |= mt, nn = !0, zp(nt, !1), t.lanes = Hv);
            }
            if (nt.isBackwards)
              Ut.sibling = t.child, t.child = Ut;
            else {
              var wa = nt.last;
              wa !== null ? wa.sibling = Ut : t.child = Ut, nt.last = Ut;
            }
          }
          if (nt.tail !== null) {
            var _a = nt.tail;
            nt.rendering = _a, nt.tail = _a.sibling, nt.renderingStartTime = On(), _a.sibling = null;
            var sa = el.current;
            return nn ? sa = Sg(sa, Cp) : sa = Uf(sa), zo(t, sa), _a;
          }
          return Hr(t), null;
        }
        case gt:
          break;
        case Be:
        case zt: {
          HS(t);
          var ju = t.memoizedState, Gf = ju !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Yl = Xp !== null;
            Yl !== Gf && (t.flags |= gi);
          }
          return !Gf || (t.mode & yt) === Fe ? Hr(t) : na($l, ya) && (Hr(t), t.subtreeFlags & (jn | Ct) && (t.flags |= gi)), null;
        }
        case vt:
          return null;
        case it:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function P_(e, t, a) {
      switch (qy(t), t.tag) {
        case te: {
          var i = t.type;
          Al(i) && Mh(t);
          var u = t.flags;
          return u & Ua ? (t.flags = u & -65537 | mt, (t.mode & bt) !== Fe && Qg(t), t) : null;
        }
        case B: {
          t.stateNode, zf(t), Yy(t), Cg();
          var s = t.flags;
          return (s & Ua) !== je && (s & mt) === je ? (t.flags = s & -65537 | mt, t) : null;
        }
        case I:
          return yg(t), null;
        case Oe: {
          Af(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Of();
          }
          var p = t.flags;
          return p & Ua ? (t.flags = p & -65537 | mt, (t.mode & bt) !== Fe && Qg(t), t) : null;
        }
        case Bt:
          return Af(t), null;
        case q:
          return zf(t), null;
        case ot:
          var v = t.type._context;
          return og(v, t), null;
        case Be:
        case zt:
          return HS(t), null;
        case vt:
          return null;
        default:
          return null;
      }
    }
    function N0(e, t, a) {
      switch (qy(t), t.tag) {
        case te: {
          var i = t.type.childContextTypes;
          i != null && Mh(t);
          break;
        }
        case B: {
          t.stateNode, zf(t), Yy(t), Cg();
          break;
        }
        case I: {
          yg(t);
          break;
        }
        case q:
          zf(t);
          break;
        case Oe:
          Af(t);
          break;
        case Bt:
          Af(t);
          break;
        case ot:
          var u = t.type._context;
          og(u, t);
          break;
        case Be:
        case zt:
          HS(t);
          break;
      }
    }
    var M0 = null;
    M0 = /* @__PURE__ */ new Set();
    var wm = !1, Pr = !1, V_ = typeof WeakSet == "function" ? WeakSet : Set, ke = null, Bf = null, $f = null;
    function B_(e) {
      Ma(null, function() {
        throw e;
      }), fd();
    }
    var $_ = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & bt)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function z0(e, t) {
      try {
        jo(hr, e);
      } catch (a) {
        yn(e, t, a);
      }
    }
    function TS(e, t, a) {
      try {
        $_(e, a);
      } catch (i) {
        yn(e, t, i);
      }
    }
    function Y_(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        yn(e, t, i);
      }
    }
    function U0(e, t) {
      try {
        j0(e);
      } catch (a) {
        yn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Te && Me && e.mode & bt)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            yn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          a.current = null;
    }
    function _m(e, t, a) {
      try {
        a();
      } catch (i) {
        yn(e, t, i);
      }
    }
    var A0 = !1;
    function I_(e, t) {
      rb(e.containerInfo), ke = t, Q_();
      var a = A0;
      return A0 = !1, a;
    }
    function Q_() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        (e.subtreeFlags & Sl) !== je && t !== null ? (t.return = e, ke = t) : W_();
      }
    }
    function W_() {
      for (; ke !== null; ) {
        var e = ke;
        Xt(e);
        try {
          q_(e);
        } catch (a) {
          yn(e, e.return, a);
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
    function q_(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== je) {
        switch (Xt(e), e.tag) {
          case me:
          case Ye:
          case We:
            break;
          case te: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Zs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = M0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Je(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case B: {
            {
              var v = e.stateNode;
              kb(v.containerInfo);
            }
            break;
          }
          case I:
          case ce:
          case q:
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
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== $a ? Tl(t) : (e & hr) !== $a && Td(t), (e & jl) !== $a && Wp(!0), _m(t, a, p), (e & jl) !== $a && Wp(!1), (e & Fr) !== $a ? _c() : (e & hr) !== $a && uo());
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
            (e & Fr) !== $a ? jv(t) : (e & hr) !== $a && Fv(t);
            var f = s.create;
            (e & jl) !== $a && Wp(!0), s.destroy = f(), (e & jl) !== $a && Wp(!1), (e & Fr) !== $a ? Wi() : (e & hr) !== $a && xc();
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
    function G_(e, t) {
      if ((t.flags & Ct) !== je)
        switch (t.tag) {
          case Ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = JC(), p = t.alternate === null ? "mount" : "update";
            KC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
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
    function X_(e, t, a, i) {
      if ((a.flags & El) !== je)
        switch (a.tag) {
          case me:
          case Ye:
          case We: {
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
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), a.mode & bt)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), a.mode & bt)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(a) || "instance")), RC(a, p, u));
            break;
          }
          case B: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case I:
                    y = a.child.stateNode;
                    break;
                  case te:
                    y = a.child.stateNode;
                    break;
                }
              RC(a, v, y);
            }
            break;
          }
          case I: {
            var g = a.stateNode;
            if (t === null && a.flags & Ct) {
              var _ = a.type, b = a.memoizedProps;
              vb(g, _, b);
            }
            break;
          }
          case ce:
            break;
          case q:
            break;
          case Ot: {
            {
              var U = a.memoizedProps, j = U.onCommit, P = U.onRender, pe = a.stateNode.effectDuration, $e = JC(), ze = t === null ? "mount" : "update";
              KC() && (ze = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, $e);
              {
                typeof j == "function" && j(a.memoizedProps.id, ze, pe, $e), W1(a);
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
            a1(e, a);
            break;
          }
          case Bt:
          case Lt:
          case gt:
          case Be:
          case zt:
          case it:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Fn && j0(a);
    }
    function K_(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case We: {
          if (e.mode & bt)
            try {
              Vl(), z0(e, e.return);
            } finally {
              Pl(e);
            }
          else
            z0(e, e.return);
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Y_(e, e.return, t), U0(e, e.return);
          break;
        }
        case I: {
          U0(e, e.return);
          break;
        }
      }
    }
    function J_(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === I) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? bb(u) : _b(i.stateNode, i.memoizedProps);
            } catch (f) {
              yn(e, e.return, f);
            }
          }
        } else if (i.tag === ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? wb(s) : xb(s, i.memoizedProps);
            } catch (f) {
              yn(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === zt) && i.memoizedState !== null && i !== e)) {
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
    function j0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case I:
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
    function Z_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function F0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, F0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === I) {
          var a = e.stateNode;
          a !== null && iw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function e1(e) {
      for (var t = e.return; t !== null; ) {
        if (H0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function H0(e) {
      return e.tag === I || e.tag === B || e.tag === q;
    }
    function P0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || H0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== I && t.tag !== ce && t.tag !== rn; ) {
          if (t.flags & jn || t.child === null || t.tag === q)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & jn))
          return t.stateNode;
      }
    }
    function t1(e) {
      var t = e1(e);
      switch (t.tag) {
        case I: {
          var a = t.stateNode;
          t.flags & Zt && (BE(a), t.flags &= -33);
          var i = P0(e);
          wS(e, i, a);
          break;
        }
        case B:
        case q: {
          var u = t.stateNode.containerInfo, s = P0(e);
          bS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === I || i === ce;
      if (u) {
        var s = e.stateNode;
        t ? Eb(a, s, t) : gb(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === I || i === ce;
      if (u) {
        var s = e.stateNode;
        t ? Sb(a, s, t) : yb(a, s);
      } else if (i !== q) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, il = !1;
    function n1(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case I: {
              Vr = i.stateNode, il = !1;
              break e;
            }
            case B: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case q: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        V0(e, t, a), Vr = null, il = !1;
      }
      Z_(a);
    }
    function Fo(e, t, a) {
      for (var i = a.child; i !== null; )
        V0(e, t, i), i = i.sibling;
    }
    function V0(e, t, a) {
      switch (lo(a), a.tag) {
        case I:
          Pr || Yf(a, t);
        case ce: {
          {
            var i = Vr, u = il;
            Vr = null, Fo(e, t, a), Vr = i, il = u, Vr !== null && (il ? Rb(Vr, a.stateNode) : Cb(Vr, a.stateNode));
          }
          return;
        }
        case rn: {
          Vr !== null && (il ? Tb(Vr, a.stateNode) : Ay(Vr, a.stateNode));
          return;
        }
        case q: {
          {
            var s = Vr, f = il;
            Vr = a.stateNode.containerInfo, il = !0, Fo(e, t, a), Vr = s, il = f;
          }
          return;
        }
        case me:
        case Ye:
        case ct:
        case We: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, b = _.destroy, U = _.tag;
                  b !== void 0 && ((U & jl) !== $a ? _m(a, t, b) : (U & hr) !== $a && (Td(a), a.mode & bt ? (Vl(), _m(a, t, b), Pl(a)) : _m(a, t, b), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Fo(e, t, a);
          return;
        }
        case te: {
          if (!Pr) {
            Yf(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && TS(a, t, j);
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
            var P = Pr;
            Pr = P || a.memoizedState !== null, Fo(e, t, a), Pr = P;
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
    function r1(e) {
      e.memoizedState;
    }
    function a1(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Bb(s);
          }
        }
      }
    }
    function B0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new V_()), t.forEach(function(i) {
          var u = ex.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), _r)
              if (Bf !== null && $f !== null)
                Qp($f, Bf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function i1(e, t, a) {
      Bf = a, $f = e, Xt(t), $0(t, e), Xt(t), Bf = null, $f = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            n1(e, t, s);
          } catch (v) {
            yn(s, t, v);
          }
        }
      var f = Ka();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Xt(p), $0(p, e), p = p.sibling;
      Xt(f);
    }
    function $0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case me:
        case Ye:
        case ct:
        case We: {
          if (ll(t, e), Bl(e), u & Ct) {
            try {
              al(jl | vr, e, e.return), jo(jl | vr, e);
            } catch (Xe) {
              yn(e, e.return, Xe);
            }
            if (e.mode & bt) {
              try {
                Vl(), al(hr | vr, e, e.return);
              } catch (Xe) {
                yn(e, e.return, Xe);
              }
              Pl(e);
            } else
              try {
                al(hr | vr, e, e.return);
              } catch (Xe) {
                yn(e, e.return, Xe);
              }
          }
          return;
        }
        case te: {
          ll(t, e), Bl(e), u & Fn && i !== null && Yf(i, i.return);
          return;
        }
        case I: {
          ll(t, e), Bl(e), u & Fn && i !== null && Yf(i, i.return);
          {
            if (e.flags & Zt) {
              var s = e.stateNode;
              try {
                BE(s);
              } catch (Xe) {
                yn(e, e.return, Xe);
              }
            }
            if (u & Ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    hb(f, g, y, v, p, e);
                  } catch (Xe) {
                    yn(e, e.return, Xe);
                  }
              }
            }
          }
          return;
        }
        case ce: {
          if (ll(t, e), Bl(e), u & Ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, U = i !== null ? i.memoizedProps : b;
            try {
              mb(_, U, b);
            } catch (Xe) {
              yn(e, e.return, Xe);
            }
          }
          return;
        }
        case B: {
          if (ll(t, e), Bl(e), u & Ct && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                Vb(t.containerInfo);
              } catch (Xe) {
                yn(e, e.return, Xe);
              }
          }
          return;
        }
        case q: {
          ll(t, e), Bl(e);
          return;
        }
        case Oe: {
          ll(t, e), Bl(e);
          var P = e.child;
          if (P.flags & gi) {
            var pe = P.stateNode, $e = P.memoizedState, ze = $e !== null;
            if (pe.isHidden = ze, ze) {
              var Dt = P.alternate !== null && P.alternate.memoizedState !== null;
              Dt || H1();
            }
          }
          if (u & Ct) {
            try {
              r1(e);
            } catch (Xe) {
              yn(e, e.return, Xe);
            }
            B0(e);
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
            var V = e.stateNode, N = e.memoizedState, ee = N !== null, Ee = e;
            if (V.isHidden = ee, ee && !Tt && (Ee.mode & yt) !== Fe) {
              ke = Ee;
              for (var he = Ee.child; he !== null; )
                ke = he, u1(he), he = he.sibling;
            }
            J_(Ee, ee);
          }
          return;
        }
        case Bt: {
          ll(t, e), Bl(e), u & Ct && B0(e);
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
          t1(e);
        } catch (a) {
          yn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & Hn && (e.flags &= -4097);
    }
    function l1(e, t, a) {
      Bf = a, $f = t, ke = e, Y0(e, t, a), Bf = null, $f = null;
    }
    function Y0(e, t, a) {
      for (var i = (e.mode & yt) !== Fe; ke !== null; ) {
        var u = ke, s = u.child;
        if (u.tag === Be && i) {
          var f = u.memoizedState !== null, p = f || wm;
          if (p) {
            _S(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, _ = wm, b = Pr;
            wm = p, Pr = g, Pr && !b && (ke = u, o1(u));
            for (var U = s; U !== null; )
              ke = U, Y0(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            ke = u, wm = _, Pr = b, _S(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== je && s !== null ? (s.return = u, ke = s) : _S(e, t, a);
      }
    }
    function _S(e, t, a) {
      for (; ke !== null; ) {
        var i = ke;
        if ((i.flags & El) !== je) {
          var u = i.alternate;
          Xt(i);
          try {
            X_(t, u, i, a);
          } catch (f) {
            yn(i, i.return, f);
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
    function u1(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        switch (t.tag) {
          case me:
          case Ye:
          case ct:
          case We: {
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
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && TS(t, t.return, i);
            break;
          }
          case I: {
            Yf(t, t.return);
            break;
          }
          case Be: {
            var u = t.memoizedState !== null;
            if (u) {
              I0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ke = a) : I0(e);
      }
    }
    function I0(e) {
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
    function o1(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            Q0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ke = a) : Q0(e);
      }
    }
    function Q0(e) {
      for (; ke !== null; ) {
        var t = ke;
        Xt(t);
        try {
          K_(t);
        } catch (i) {
          yn(t, t.return, i);
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
    function s1(e, t, a, i) {
      ke = t, c1(t, e, a, i);
    }
    function c1(e, t, a, i) {
      for (; ke !== null; ) {
        var u = ke, s = u.child;
        (u.subtreeFlags & sr) !== je && s !== null ? (s.return = u, ke = s) : f1(e, t, a, i);
      }
    }
    function f1(e, t, a, i) {
      for (; ke !== null; ) {
        var u = ke;
        if ((u.flags & ha) !== je) {
          Xt(u);
          try {
            d1(t, u, a, i);
          } catch (f) {
            yn(u, u.return, f);
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
    function d1(e, t, a, i) {
      switch (t.tag) {
        case me:
        case Ye:
        case We: {
          if (t.mode & bt) {
            Ig();
            try {
              jo(Fr | vr, t);
            } finally {
              Yg(t);
            }
          } else
            jo(Fr | vr, t);
          break;
        }
      }
    }
    function p1(e) {
      ke = e, v1();
    }
    function v1() {
      for (; ke !== null; ) {
        var e = ke, t = e.child;
        if ((ke.flags & Kr) !== je) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ke = u, y1(u, e);
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
        (e.subtreeFlags & sr) !== je && t !== null ? (t.return = e, ke = t) : h1();
      }
    }
    function h1() {
      for (; ke !== null; ) {
        var e = ke;
        (e.flags & ha) !== je && (Xt(e), m1(e), bn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ke = t;
          return;
        }
        ke = e.return;
      }
    }
    function m1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case We: {
          e.mode & bt ? (Ig(), al(Fr | vr, e, e.return), Yg(e)) : al(Fr | vr, e, e.return);
          break;
        }
      }
    }
    function y1(e, t) {
      for (; ke !== null; ) {
        var a = ke;
        Xt(a), S1(a, t), bn();
        var i = a.child;
        i !== null ? (i.return = a, ke = i) : g1(e);
      }
    }
    function g1(e) {
      for (; ke !== null; ) {
        var t = ke, a = t.sibling, i = t.return;
        if (F0(t), t === e) {
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
    function S1(e, t) {
      switch (e.tag) {
        case me:
        case Ye:
        case We: {
          e.mode & bt ? (Ig(), al(Fr, e, t), Yg(e)) : al(Fr, e, t);
          break;
        }
      }
    }
    function E1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case We: {
          try {
            jo(hr | vr, e);
          } catch (a) {
            yn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            yn(e, e.return, a);
          }
          break;
        }
      }
    }
    function C1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case We: {
          try {
            jo(Fr | vr, e);
          } catch (t) {
            yn(e, e.return, t);
          }
          break;
        }
      }
    }
    function R1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case We: {
          try {
            al(hr | vr, e, e.return);
          } catch (a) {
            yn(e, e.return, a);
          }
          break;
        }
        case te: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && TS(e, e.return, t);
          break;
        }
      }
    }
    function T1(e) {
      switch (e.tag) {
        case me:
        case Ye:
        case We:
          try {
            al(Fr | vr, e, e.return);
          } catch (t) {
            yn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var b1 = [];
    function w1() {
      b1.forEach(function(e) {
        return e();
      });
    }
    var _1 = Ue.ReactCurrentActQueue;
    function x1(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function W0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && _1.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var k1 = Math.ceil, xS = Ue.ReactCurrentDispatcher, kS = Ue.ReactCurrentOwner, Br = Ue.ReactCurrentBatchConfig, ul = Ue.ReactCurrentActQueue, gr = (
      /*             */
      0
    ), q0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Mu = 0, Ap = 1, ec = 2, xm = 3, jp = 4, G0 = 5, DS = 6, kt = gr, Ta = null, zn = null, Sr = $, $l = $, OS = ko($), Er = Mu, Fp = null, km = $, Hp = $, Dm = $, Pp = null, Ya = null, LS = 0, X0 = 500, K0 = 1 / 0, D1 = 500, zu = null;
    function Vp() {
      K0 = On() + D1;
    }
    function J0() {
      return K0;
    }
    var Om = !1, NS = null, If = null, tc = !1, Ho = null, Bp = $, MS = [], zS = null, O1 = 50, $p = 0, US = null, AS = !1, Lm = !1, L1 = 50, Qf = 0, Nm = null, Yp = Wt, Mm = $, Z0 = !1;
    function zm() {
      return Ta;
    }
    function ba() {
      return (kt & ($r | Di)) !== gr ? On() : (Yp !== Wt || (Yp = On()), Yp);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & yt) === Fe)
        return qe;
      if ((kt & $r) !== gr && Sr !== $)
        return rr(Sr);
      var a = _w() !== ww;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Mm === Vn && (Mm = Md()), Mm;
      }
      var u = ga();
      if (u !== Vn)
        return u;
      var s = cb();
      return s;
    }
    function N1(e) {
      var t = e.mode;
      return (t & yt) === Fe ? qe : Iv();
    }
    function Cr(e, t, a, i) {
      nx(), Z0 && S("useInsertionEffect must not schedule updates."), AS && (Lm = !0), vo(e, a, i), (kt & $r) !== $ && e === Ta ? ix(t) : (_r && Wv(e, t, a), lx(t), e === Ta && ((kt & $r) === gr && (Hp = ut(Hp, a)), Er === jp && Vo(e, Sr)), Ia(e, i), a === qe && kt === gr && (t.mode & yt) === Fe && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Vp(), ZE()));
    }
    function M1(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ia(e, a);
    }
    function z1(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (kt & $r) !== gr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Bv(e, t);
      var i = ta(e, e === Ta ? Sr : $);
      if (i === $) {
        a !== null && hR(a), e.callbackNode = null, e.callbackPriority = Vn;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== $S)) {
        a == null && s !== qe && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && hR(a);
      var f;
      if (u === qe)
        e.tag === Do ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), ow(nR.bind(null, e))) : JE(nR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : db(function() {
          (kt & ($r | Di)) === gr && Oo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case ra:
            p = Qi;
            break;
          case ja:
            p = vs;
            break;
          case fr:
            p = ou;
            break;
          case tf:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = YS(p, eR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function eR(e, t) {
      if (Jw(), Yp = Wt, Mm = $, (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ta(e, e === Ta ? Sr : $);
      if (u === $)
        return null;
      var s = !_s(e, u) && !Yv(e, u) && !t, f = s ? Y1(e, u) : Am(e, u);
      if (f !== Mu) {
        if (f === ec) {
          var p = Wc(e);
          p !== $ && (u = p, f = jS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw nc(e, $), Vo(e, u), Ia(e, On()), v;
        }
        if (f === DS)
          Vo(e, u);
        else {
          var y = !_s(e, u), g = e.current.alternate;
          if (y && !A1(g)) {
            if (f = Am(e, u), f === ec) {
              var _ = Wc(e);
              _ !== $ && (u = _, f = jS(e, _));
            }
            if (f === Ap) {
              var b = Fp;
              throw nc(e, $), Vo(e, u), Ia(e, On()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, U1(e, f, u);
        }
      }
      return Ia(e, On()), e.callbackNode === a ? eR.bind(null, e) : null;
    }
    function jS(e, t) {
      var a = Pp;
      if (mu(e)) {
        var i = nc(e, t);
        i.flags |= wn, tw(e.containerInfo);
      }
      var u = Am(e, t);
      if (u !== ec) {
        var s = Ya;
        Ya = a, s !== null && tR(s);
      }
      return u;
    }
    function tR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function U1(e, t, a) {
      switch (t) {
        case Mu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ya, zu);
          break;
        }
        case xm: {
          if (Vo(e, a), qc(a) && // do not delay if we're inside an act() scope
          !mR()) {
            var i = LS + X0 - On();
            if (i > 10) {
              var u = ta(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                ba(), Jc(e, s);
                break;
              }
              e.timeoutHandle = zy(rc.bind(null, e, Ya, zu), i);
              break;
            }
          }
          rc(e, Ya, zu);
          break;
        }
        case jp: {
          if (Vo(e, a), ay(a))
            break;
          if (!mR()) {
            var f = Dd(e, a), p = f, v = On() - p, y = tx(v) - v;
            if (y > 10) {
              e.timeoutHandle = zy(rc.bind(null, e, Ya, zu), y);
              break;
            }
          }
          rc(e, Ya, zu);
          break;
        }
        case G0: {
          rc(e, Ya, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function A1(e) {
      for (var t = e; ; ) {
        if (t.flags & bc) {
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
        if (t.subtreeFlags & bc && v !== null) {
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
      t = xs(t, Dm), t = xs(t, Hp), Ud(e, t);
    }
    function nR(e) {
      if (Zw(), (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      Au();
      var t = ta(e, $);
      if (!na(t, qe))
        return Ia(e, On()), null;
      var a = Am(e, t);
      if (e.tag !== Do && a === ec) {
        var i = Wc(e);
        i !== $ && (t = i, a = jS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw nc(e, $), Vo(e, t), Ia(e, On()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ya, zu), Ia(e, On()), null;
    }
    function j1(e, t) {
      t !== $ && (ks(e, ut(t, qe)), Ia(e, On()), (kt & ($r | Di)) === gr && (Vp(), Oo()));
    }
    function FS(e, t) {
      var a = kt;
      kt |= q0;
      try {
        return e(t);
      } finally {
        kt = a, kt === gr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Vp(), ZE());
      }
    }
    function F1(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, Qn(ra), e(t, a, i, u);
      } finally {
        Qn(s), Br.transition = f, kt === gr && Vp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === Do && (kt & ($r | Di)) === gr && Au();
      var t = kt;
      kt |= q0;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, Qn(ra), e ? e() : void 0;
      } finally {
        Qn(i), Br.transition = a, kt = t, (kt & ($r | Di)) === gr && Oo();
      }
    }
    function rR() {
      return (kt & ($r | Di)) !== gr;
    }
    function Um(e, t) {
      la(OS, $l, e), $l = ut($l, t);
    }
    function HS(e) {
      $l = OS.current, ia(OS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== Uy && (e.timeoutHandle = Uy, fb(a)), zn !== null)
        for (var i = zn.return; i !== null; ) {
          var u = i.alternate;
          N0(u, i), i = i.return;
        }
      Ta = e;
      var s = ac(e.current, null);
      return zn = s, Sr = $l = t, Er = Mu, Fp = null, km = $, Hp = $, Dm = $, Pp = null, Ya = null, Mw(), Zi.discardPendingWarnings(), s;
    }
    function aR(e, t) {
      do {
        var a = zn;
        try {
          if (Ih(), kC(), bn(), kS.current = null, a === null || a.return === null) {
            Er = Ap, Fp = t, zn = null;
            return;
          }
          if (Te && a.mode & bt && Em(a, !0), le)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ms(a, i, Sr);
            } else
              Ci(a, t, Sr);
          o_(e, a.return, a, t, Sr), oR(a);
        } catch (u) {
          t = u, zn === a && a !== null ? (a = a.return, zn = a) : a = zn;
          continue;
        }
        return;
      } while (!0);
    }
    function iR() {
      var e = xS.current;
      return xS.current = hm, e === null ? hm : e;
    }
    function lR(e) {
      xS.current = e;
    }
    function H1() {
      LS = On();
    }
    function Ip(e) {
      km = ut(e, km);
    }
    function P1() {
      Er === Mu && (Er = xm);
    }
    function PS() {
      (Er === Mu || Er === xm || Er === ec) && (Er = jp), Ta !== null && (xl(km) || xl(Hp)) && Vo(Ta, Sr);
    }
    function V1(e) {
      Er !== jp && (Er = ec), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function B1() {
      return Er === Mu;
    }
    function Am(e, t) {
      var a = kt;
      kt |= $r;
      var i = iR();
      if (Ta !== e || Sr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, Sr), u.clear()), Ad(e, t);
        }
        zu = ef(), nc(e, t);
      }
      wd(t);
      do
        try {
          $1();
          break;
        } catch (s) {
          aR(e, s);
        }
      while (!0);
      if (Ih(), kt = a, lR(i), zn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return En(), Ta = null, Sr = $, Er;
    }
    function $1() {
      for (; zn !== null; )
        uR(zn);
    }
    function Y1(e, t) {
      var a = kt;
      kt |= $r;
      var i = iR();
      if (Ta !== e || Sr !== t) {
        if (_r) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, Sr), u.clear()), Ad(e, t);
        }
        zu = ef(), Vp(), nc(e, t);
      }
      wd(t);
      do
        try {
          I1();
          break;
        } catch (s) {
          aR(e, s);
        }
      while (!0);
      return Ih(), lR(i), kt = a, zn !== null ? (_d(), Mu) : (En(), Ta = null, Sr = $, Er);
    }
    function I1() {
      for (; zn !== null && !yd(); )
        uR(zn);
    }
    function uR(e) {
      var t = e.alternate;
      Xt(e);
      var a;
      (e.mode & bt) !== Fe ? ($g(e), a = VS(t, e, $l), Em(e, !0)) : a = VS(t, e, $l), bn(), e.memoizedProps = e.pendingProps, a === null ? oR(e) : zn = a, kS.current = null;
    }
    function oR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === je) {
          Xt(t);
          var u = void 0;
          if ((t.mode & bt) === Fe ? u = L0(a, t, $l) : ($g(t), u = L0(a, t, $l), Em(t, !1)), bn(), u !== null) {
            zn = u;
            return;
          }
        } else {
          var s = P_(a, t);
          if (s !== null) {
            s.flags &= Ov, zn = s;
            return;
          }
          if ((t.mode & bt) !== Fe) {
            Em(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = je, i.deletions = null;
          else {
            Er = DS, zn = null;
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
      Er === Mu && (Er = G0);
    }
    function rc(e, t, a) {
      var i = ga(), u = Br.transition;
      try {
        Br.transition = null, Qn(ra), Q1(e, t, a, i);
      } finally {
        Br.transition = u, Qn(i);
      }
      return null;
    }
    function Q1(e, t, a, i) {
      do
        Au();
      while (Ho !== null);
      if (rx(), (kt & ($r | Di)) !== gr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Av(s), u === null)
        return Ei(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Vn;
      var f = ut(u.lanes, u.childLanes);
      Qv(e, f), e === Ta && (Ta = null, zn = null, Sr = $), ((u.subtreeFlags & sr) !== je || (u.flags & sr) !== je) && (tc || (tc = !0, zS = a, YS(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Sl | ao | El | sr)) !== je, v = (u.flags & (Sl | ao | El | sr)) !== je;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        Qn(ra);
        var _ = kt;
        kt |= Di, kS.current = null, I_(e, u), ZC(), i1(e, u, s), ab(e.containerInfo), e.current = u, ys(s), l1(u, e, s), cu(), Nv(), kt = _, Qn(g), Br.transition = y;
      } else
        e.current = u, ZC();
      var b = tc;
      if (tc ? (tc = !1, Ho = e, Bp = s) : (Qf = 0, Nm = null), f = e.pendingLanes, f === $ && (If = null), b || dR(e.current, !1), Ed(u.stateNode, i), _r && e.memoizedUpdaters.clear(), w1(), Ia(e, On()), t !== null)
        for (var U = e.onRecoverableError, j = 0; j < t.length; j++) {
          var P = t[j], pe = P.stack, $e = P.digest;
          U(P.value, {
            componentStack: pe,
            digest: $e
          });
        }
      if (Om) {
        Om = !1;
        var ze = NS;
        throw NS = null, ze;
      }
      return na(Bp, qe) && e.tag !== Do && Au(), f = e.pendingLanes, na(f, qe) ? (Kw(), e === US ? $p++ : ($p = 0, US = e)) : $p = 0, Oo(), Ei(), null;
    }
    function Au() {
      if (Ho !== null) {
        var e = Gv(Bp), t = xr(fr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, Qn(t), q1();
        } finally {
          Qn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function W1(e) {
      MS.push(e), tc || (tc = !0, YS(ou, function() {
        return Au(), null;
      }));
    }
    function q1() {
      if (Ho === null)
        return !1;
      var e = zS;
      zS = null;
      var t = Ho, a = Bp;
      if (Ho = null, Bp = $, (kt & ($r | Di)) !== gr)
        throw new Error("Cannot flush passive effects while already rendering.");
      AS = !0, Lm = !1, bd(a);
      var i = kt;
      kt |= Di, p1(t.current), s1(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          G_(t, f);
        }
      }
      oo(), dR(t.current, !0), kt = i, Oo(), Lm ? t === Nm ? Qf++ : (Qf = 0, Nm = t) : Qf = 0, AS = !1, Lm = !1, Cd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function sR(e) {
      return If !== null && If.has(e);
    }
    function G1(e) {
      If === null ? If = /* @__PURE__ */ new Set([e]) : If.add(e);
    }
    function X1(e) {
      Om || (Om = !0, NS = e);
    }
    var K1 = X1;
    function cR(e, t, a) {
      var i = Js(a, t), u = u0(e, i, qe), s = No(e, u, qe), f = ba();
      s !== null && (vo(s, qe, f), Ia(s, f));
    }
    function yn(e, t, a) {
      if (B_(a), Wp(!1), e.tag === B) {
        cR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === B) {
          cR(i, e, a);
          return;
        } else if (i.tag === te) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !sR(s)) {
            var f = Js(a, e), p = uS(i, f, qe), v = No(i, p, qe), y = ba();
            v !== null && (vo(v, qe, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function J1(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ba();
      Jc(e, a), ux(e), Ta === e && hu(Sr, a) && (Er === jp || Er === xm && qc(Sr) && On() - LS < X0 ? nc(e, $) : Dm = ut(Dm, a)), Ia(e, u);
    }
    function fR(e, t) {
      t === Vn && (t = N1(e));
      var a = ba(), i = Ba(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function Z1(e) {
      var t = e.memoizedState, a = Vn;
      t !== null && (a = t.retryLane), fR(e, a);
    }
    function ex(e, t) {
      var a = Vn, i;
      switch (e.tag) {
        case Oe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Bt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), fR(e, a);
    }
    function tx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : k1(e / 1960) * 1960;
    }
    function nx() {
      if ($p > O1)
        throw $p = 0, US = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > L1 && (Qf = 0, Nm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function rx() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function dR(e, t) {
      Xt(e), jm(e, Mr, R1), t && jm(e, gl, T1), jm(e, Mr, E1), t && jm(e, gl, C1), bn();
    }
    function jm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== je ? i = i.child : ((i.flags & t) !== je && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Fm = null;
    function pR(e) {
      {
        if ((kt & $r) !== gr || !(e.mode & yt))
          return;
        var t = e.tag;
        if (t !== ae && t !== B && t !== te && t !== me && t !== Ye && t !== ct && t !== We)
          return;
        var a = Je(e) || "ReactComponent";
        if (Fm !== null) {
          if (Fm.has(a))
            return;
          Fm.add(a);
        } else
          Fm = /* @__PURE__ */ new Set([a]);
        var i = er;
        try {
          Xt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Xt(e) : bn();
        }
      }
    }
    var VS;
    {
      var ax = null;
      VS = function(e, t, a) {
        var i = CR(ax, t);
        try {
          return _0(e, t, a);
        } catch (s) {
          if (mw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ih(), kC(), N0(e, t), CR(t, i), t.mode & bt && $g(t), Ma(null, _0, null, e, t, a), cd()) {
            var u = fd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var vR = !1, BS;
    BS = /* @__PURE__ */ new Set();
    function ix(e) {
      if (Gr && !qw())
        switch (e.tag) {
          case me:
          case Ye:
          case We: {
            var t = zn && Je(zn) || "Unknown", a = t;
            if (!BS.has(a)) {
              BS.add(a);
              var i = Je(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case te: {
            vR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (_r) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Wv(e, i, t);
        });
      }
    }
    var $S = {};
    function YS(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), $S) : hd(e, t);
      }
    }
    function hR(e) {
      if (e !== $S)
        return md(e);
    }
    function mR() {
      return ul.current !== null;
    }
    function lx(e) {
      {
        if (e.mode & yt) {
          if (!W0())
            return;
        } else if (!x1() || kt !== gr || e.tag !== me && e.tag !== Ye && e.tag !== We)
          return;
        if (ul.current === null) {
          var t = er;
          try {
            Xt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Je(e));
          } finally {
            t ? Xt(e) : bn();
          }
        }
      }
    }
    function ux(e) {
      e.tag !== Do && W0() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      Z0 = e;
    }
    var Oi = null, Wf = null, ox = function(e) {
      Oi = e;
    };
    function qf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function IS(e) {
      return qf(e);
    }
    function QS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: G,
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
    function yR(e, t) {
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
            (s === G || s === et) && (u = !0);
            break;
          }
          case ct:
          case We: {
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
    function gR(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Wf === null && (Wf = /* @__PURE__ */ new WeakSet()), Wf.add(e);
      }
    }
    var sx = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          WS(e.current, i, a);
        });
      }
    }, cx = function(e, t) {
      {
        if (e.context !== li)
          return;
        Au(), Uu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function WS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case me:
          case We:
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
        if (Wf !== null && (Wf.has(e) || i !== null && Wf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = Ba(e, qe);
          b !== null && Cr(b, e, qe, Wt);
        }
        u !== null && !g && WS(u, t, a), s !== null && WS(s, t, a);
      }
    }
    var fx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return qS(e.current, i, a), a;
      }
    };
    function qS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case me:
          case We:
          case te:
            p = f;
            break;
          case Ye:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? dx(e, a) : i !== null && qS(i, t, a), u !== null && qS(u, t, a);
      }
    }
    function dx(e, t) {
      {
        var a = px(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case I:
              t.add(i.stateNode);
              return;
            case q:
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
    function px(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === I)
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
    var GS;
    {
      GS = !1;
      try {
        var SR = Object.preventExtensions({});
      } catch {
        GS = !0;
      }
    }
    function vx(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = je, this.subtreeFlags = je, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new vx(e, t, a, i);
    };
    function XS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function hx(e) {
      return typeof e == "function" && !XS(e) && e.defaultProps === void 0;
    }
    function mx(e) {
      if (typeof e == "function")
        return XS(e) ? te : me;
      if (e != null) {
        var t = e.$$typeof;
        if (t === G)
          return Ye;
        if (t === ht)
          return ct;
      }
      return ae;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = je, a.subtreeFlags = je, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ae:
        case me:
        case We:
          a.type = qf(e.type);
          break;
        case te:
          a.type = IS(e.type);
          break;
        case Ye:
          a.type = QS(e.type);
          break;
      }
      return a;
    }
    function yx(e, t) {
      e.flags &= Pn | jn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = je, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function gx(e, t, a) {
      var i;
      return e === Uh ? (i = yt, t === !0 && (i |= at, i |= en)) : i = Fe, _r && (i |= bt), ui(B, null, null, i);
    }
    function KS(e, t, a, i, u, s) {
      var f = ae, p = e;
      if (typeof e == "function")
        XS(e) ? (f = te, p = IS(p)) : p = qf(p);
      else if (typeof e == "string")
        f = I;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = gn, u |= at, (u & yt) !== Fe && (u |= en);
            break;
          case fi:
            return Sx(a, u, s, t);
          case de:
            return Ex(a, u, s, t);
          case ve:
            return Cx(a, u, s, t);
          case kn:
            return ER(a, u, s, t);
          case fn:
          case Et:
          case hn:
          case Tr:
          case ft:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = ot;
                  break e;
                case R:
                  f = Ft;
                  break e;
                case G:
                  f = Ye, p = QS(p);
                  break e;
                case ht:
                  f = ct;
                  break e;
                case et:
                  f = qt, p = null;
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
    function JS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = KS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(oe, e, i, t);
      return u.lanes = a, u;
    }
    function Sx(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(Ot, e, i, t | bt);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Ex(e, t, a, i) {
      var u = ui(Oe, e, i, t);
      return u.elementType = de, u.lanes = a, u;
    }
    function Cx(e, t, a, i) {
      var u = ui(Bt, e, i, t);
      return u.elementType = ve, u.lanes = a, u;
    }
    function ER(e, t, a, i) {
      var u = ui(Be, e, i, t);
      u.elementType = kn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = ui(ce, e, null, t);
      return i.lanes = a, i;
    }
    function Rx() {
      var e = ui(I, null, null, Fe);
      return e.elementType = "DELETED", e;
    }
    function Tx(e) {
      var t = ui(rn, null, null, Fe);
      return t.stateNode = e, t;
    }
    function eE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(q, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function CR(e, t) {
      return e === null && (e = ui(ae, null, null, Fe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bx(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Uy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Vn, this.eventTimes = Kc($), this.expirationTimes = Kc(Wt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Kc($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < kd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Uh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Do:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function RR(e, t, a, i, u, s, f, p, v, y) {
      var g = new bx(e, t, a, p, v), _ = gx(t, s);
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
      return pg(_), g;
    }
    var tE = "18.3.1";
    function wx(e, t, a) {
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
    var nE, rE;
    nE = !1, rE = {};
    function TR(e) {
      if (!e)
        return li;
      var t = ro(e), a = uw(t);
      if (t.tag === te) {
        var i = t.type;
        if (Al(i))
          return XE(t, i, a);
      }
      return a;
    }
    function _x(e, t) {
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
          if (!rE[s]) {
            rE[s] = !0;
            var f = er;
            try {
              Xt(u), a.mode & at ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Xt(f) : bn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function bR(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return RR(e, t, v, y, a, i, u, s, f);
    }
    function wR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = RR(a, i, g, e, u, s, f, p, v);
      _.context = TR(null);
      var b = _.current, U = ba(), j = Po(b), P = Lu(U, j);
      return P.callback = t ?? null, No(b, P, j), M1(_, j, U), _;
    }
    function qp(e, t, a, i) {
      Sd(t, e);
      var u = t.current, s = ba(), f = Po(u);
      kc(f);
      var p = TR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && er !== null && !nE && (nE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Je(er) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Cr(y, u, f, s), Xh(y, u, f)), f;
    }
    function Hm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case I:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function xx(e) {
      switch (e.tag) {
        case B: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = $v(t);
            j1(t, a);
          }
          break;
        }
        case Oe: {
          Uu(function() {
            var u = Ba(e, qe);
            if (u !== null) {
              var s = ba();
              Cr(u, e, qe, s);
            }
          });
          var i = qe;
          aE(e, i);
          break;
        }
      }
    }
    function _R(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = zd(a.retryLane, t));
    }
    function aE(e, t) {
      _R(e, t);
      var a = e.alternate;
      a && _R(a, t);
    }
    function kx(e) {
      if (e.tag === Oe) {
        var t = po, a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Cr(a, e, t, i);
        }
        aE(e, t);
      }
    }
    function Dx(e) {
      if (e.tag === Oe) {
        var t = Po(e), a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Cr(a, e, t, i);
        }
        aE(e, t);
      }
    }
    function xR(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var kR = function(e) {
      return null;
    };
    function Ox(e) {
      return kR(e);
    }
    var DR = function(e) {
      return !1;
    };
    function Lx(e) {
      return DR(e);
    }
    var OR = null, LR = null, NR = null, MR = null, zR = null, UR = null, AR = null, jR = null, FR = null;
    {
      var HR = function(e, t, a) {
        var i = t[a], u = lt(e) ? e.slice() : rt({}, e);
        return a + 1 === t.length ? (lt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = HR(e[i], t, a + 1), u);
      }, PR = function(e, t) {
        return HR(e, t, 0);
      }, VR = function(e, t, a, i) {
        var u = t[i], s = lt(e) ? e.slice() : rt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], lt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = VR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, BR = function(e, t, a) {
        if (t.length !== a.length) {
          Ae("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ae("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return VR(e, t, a, 0);
      }, $R = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = lt(e) ? e.slice() : rt({}, e);
        return s[u] = $R(e[u], t, a + 1, i), s;
      }, YR = function(e, t, a) {
        return $R(e, t, 0, a);
      }, iE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      OR = function(e, t, a, i) {
        var u = iE(e, t);
        if (u !== null) {
          var s = YR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ba(e, qe);
          f !== null && Cr(f, e, qe, Wt);
        }
      }, LR = function(e, t, a) {
        var i = iE(e, t);
        if (i !== null) {
          var u = PR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = rt({}, e.memoizedProps);
          var s = Ba(e, qe);
          s !== null && Cr(s, e, qe, Wt);
        }
      }, NR = function(e, t, a, i) {
        var u = iE(e, t);
        if (u !== null) {
          var s = BR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = rt({}, e.memoizedProps);
          var f = Ba(e, qe);
          f !== null && Cr(f, e, qe, Wt);
        }
      }, MR = function(e, t, a) {
        e.pendingProps = YR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, qe);
        i !== null && Cr(i, e, qe, Wt);
      }, zR = function(e, t) {
        e.pendingProps = PR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, qe);
        a !== null && Cr(a, e, qe, Wt);
      }, UR = function(e, t, a) {
        e.pendingProps = BR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, qe);
        i !== null && Cr(i, e, qe, Wt);
      }, AR = function(e) {
        var t = Ba(e, qe);
        t !== null && Cr(t, e, qe, Wt);
      }, jR = function(e) {
        kR = e;
      }, FR = function(e) {
        DR = e;
      };
    }
    function Nx(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function Mx(e) {
      return null;
    }
    function zx() {
      return er;
    }
    function Ux(e) {
      var t = e.findFiberByHostInstance, a = Ue.ReactCurrentDispatcher;
      return gd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: OR,
        overrideHookStateDeletePath: LR,
        overrideHookStateRenamePath: NR,
        overrideProps: MR,
        overridePropsDeletePath: zR,
        overridePropsRenamePath: UR,
        setErrorHandler: jR,
        setSuspenseHandler: FR,
        scheduleUpdate: AR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Nx,
        findFiberByHostInstance: t || Mx,
        // React Refresh
        findHostInstancesForRefresh: fx,
        scheduleRefresh: sx,
        scheduleRoot: cx,
        setRefreshHandler: ox,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: zx,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: tE
      });
    }
    var IR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function lE(e) {
      this._internalRoot = e;
    }
    Pm.prototype.render = lE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Vm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== An) {
          var i = xR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Pm.prototype.unmount = lE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        rR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          qp(null, e, null, null);
        }), IE(t);
      }
    };
    function Ax(e, t) {
      if (!Vm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      QR(e);
      var a = !1, i = !1, u = "", s = IR;
      t != null && (t.hydrate ? Ae("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === or && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = bR(e, Uh, null, a, i, u, s);
      kh(f.current, e);
      var p = e.nodeType === An ? e.parentNode : e;
      return ep(p), new lE(f);
    }
    function Pm(e) {
      this._internalRoot = e;
    }
    function jx(e) {
      e && eh(e);
    }
    Pm.prototype.unstable_scheduleHydration = jx;
    function Fx(e, t, a) {
      if (!Vm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      QR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = IR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Uh, i, s, f, p, v);
      if (kh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Bw(y, _);
        }
      return new Pm(y);
    }
    function Vm(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === $i || e.nodeType === Jo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Xr || e.nodeType === $i || e.nodeType === Jo || e.nodeType === An && e.nodeValue === " react-mount-point-unstable "));
    }
    function QR(e) {
      e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Hx = Ue.ReactCurrentOwner, WR;
    WR = function(e) {
      if (e._reactRootContainer && e.nodeType !== An) {
        var t = xR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = uE(e), u = !!(i && xo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Xr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function uE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function qR() {
    }
    function Px(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Hm(f);
            s.call(b);
          };
        }
        var f = wR(
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
          qR
        );
        e._reactRootContainer = f, kh(f.current, e);
        var p = e.nodeType === An ? e.parentNode : e;
        return ep(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Hm(g);
            y.call(b);
          };
        }
        var g = bR(
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
          qR
        );
        e._reactRootContainer = g, kh(g.current, e);
        var _ = e.nodeType === An ? e.parentNode : e;
        return ep(_), Uu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function Vx(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Bm(e, t, a, i, u) {
      WR(a), Vx(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Px(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Hm(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return Hm(f);
    }
    var GR = !1;
    function Bx(e) {
      {
        GR || (GR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Hx.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Xr ? e : _x(e, "findDOMNode");
    }
    function $x(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Bm(null, e, t, !0, a);
    }
    function Yx(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Bm(null, e, t, !1, a);
    }
    function Ix(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Bm(e, t, a, !1, i);
    }
    var XR = !1;
    function Qx(e) {
      if (XR || (XR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = uE(e), i = a && !xo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Bm(null, null, e, !1, function() {
            e._reactRootContainer = null, IE(e);
          });
        }), !0;
      } else {
        {
          var u = uE(e), s = !!(u && xo(u)), f = e.nodeType === Xr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ly(xx), Fd(kx), uy(Dx), nf(ga), Xv(qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), us(qT), kv(FS, F1, Uu);
    function Wx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Vm(t))
        throw new Error("Target container is not a DOM element.");
      return wx(e, t, null, a);
    }
    function qx(e, t, a, i) {
      return Ix(e, t, a, i);
    }
    var oE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xo, wf, Dh, od, Zu, FS]
    };
    function Gx(e, t) {
      return oE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ax(e, t);
    }
    function Xx(e, t, a) {
      return oE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Fx(e, t, a);
    }
    function Kx(e) {
      return rR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Jx = Ux({
      findFiberByHostInstance: $s,
      bundleType: 1,
      version: tE,
      rendererPackageName: "react-dom"
    });
    if (!Jx && xn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var KR = window.location.protocol;
      /^(https?|file):$/.test(KR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (KR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oE, Wa.createPortal = Wx, Wa.createRoot = Gx, Wa.findDOMNode = Bx, Wa.flushSync = Kx, Wa.hydrate = $x, Wa.hydrateRoot = Xx, Wa.render = Yx, Wa.unmountComponentAtNode = Qx, Wa.unstable_batchedUpdates = FS, Wa.unstable_renderSubtreeIntoContainer = qx, Wa.version = tE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var cT = {};
function fT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (cT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fT);
    } catch (H) {
      console.error(H);
    }
  }
}
cT.NODE_ENV === "production" ? (fT(), hE.exports = ck()) : hE.exports = fk();
var dk = hE.exports, mE, pk = {}, Ym = dk;
if (pk.NODE_ENV === "production")
  mE = Ym.createRoot, Ym.hydrateRoot;
else {
  var uT = Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  mE = function(H, W) {
    uT.usingClientEntryPoint = !0;
    try {
      return Ym.createRoot(H, W);
    } finally {
      uT.usingClientEntryPoint = !1;
    }
  };
}
const vk = (H) => {
  if (!H.designOptions || H.designOptions !== "custom_design") return;
  const W = JSON.parse(H.customDesigns);
  document.documentElement.style.setProperty("--barn2-bundles-bundle-text-color", W.bundleTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-text-color", W.highlightedTextColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-border-color", W.bundleBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-border-color", W.highlightedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-color", W.highlightedColor), document.documentElement.style.setProperty("--barn2-bundles-selected-text-color", W.selectedTextColor), document.documentElement.style.setProperty("--barn2-bundles-selected-border-color", W.selectedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-selected-color", W.selectedColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-badge-color", W.badgeBackgroundColor), document.documentElement.style.setProperty("--barn2-bundles-badge-text-color", W.badgeTextColor), document.documentElement.style.setProperty("--barn2-bundles-table-color", W.tableColor), document.documentElement.style.setProperty("--barn2-bundles-header-text-color", W.headerTextColor), document.documentElement.style.setProperty("--barn2-bundles-background-color", W.backgroundColor), document.documentElement.style.setProperty("--barn2-bundles-text-color", W.textColor), document.documentElement.style.setProperty("--barn2-bundles-label-color", W.labelColor), document.documentElement.style.setProperty("--barn2-bundles-label-text-color", W.lebelTextColor), document.documentElement.style.setProperty("--barn2-bundles-border-color", W.borderColor);
  let D = "0";
  switch (W.cornerRadius) {
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
}, dT = () => {
  const H = document.querySelector(".product-form__input.product-form__quantity, quantity-selector-component.quantity-selector");
  H && H.style.removeProperty("display"), document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker") && H.style.removeProperty("display");
}, $o = (H, W) => {
  const D = document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]');
  if (!D) return;
  let Ue = D.querySelector(`input[name="${H}"]`);
  Ue ? Ue.value = W : (Ue = document.createElement("input"), Ue.type = "hidden", Ue.name = H, Ue.value = W, D.appendChild(Ue));
};
var pT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(H) {
  (function() {
    var W = function() {
      function D() {
      }
      D.prototype = /* @__PURE__ */ Object.create(null);
      function Ue(ae, B) {
        for (var q = B.length, I = 0; I < q; ++I)
          me(ae, B[I]);
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
        for (var q in B)
          De.call(B, q) && (ae[q] = !!B[q]);
      }
      var S = /\s+/;
      function Qe(ae, B) {
        for (var q = B.split(S), I = q.length, ce = 0; ce < I; ++ce)
          ae[q[ce]] = !0;
      }
      function me(ae, B) {
        if (B) {
          var q = typeof B;
          q === "string" ? Qe(ae, B) : Array.isArray(B) ? Ue(ae, B) : q === "object" ? Ae(ae, B) : q === "number" && pt(ae, B);
        }
      }
      function te() {
        for (var ae = arguments.length, B = Array(ae), q = 0; q < ae; q++)
          B[q] = arguments[q];
        var I = new D();
        Ue(I, B);
        var ce = [];
        for (var oe in I)
          I[oe] && ce.push(oe);
        return ce.join(" ");
      }
      return te;
    }();
    H.exports ? (W.default = W, H.exports = W) : window.classNames = W;
  })();
})(pT);
var hk = pT.exports;
const fE = /* @__PURE__ */ tk(hk);
function mk({
  bundleData: H,
  isInEditor: W,
  currentVariant: D,
  storeDetails: Ue
}) {
  var Q, Re, se, x;
  const [De, pt] = jt.useState(null), [Ae, S] = jt.useState([]), [Qe, me] = jt.useState(), [te, ae] = jt.useState([]), [B, q] = jt.useState(((Re = (Q = window.b2ProductData) == null ? void 0 : Q.product) == null ? void 0 : Re.options) || []), [I, ce] = jt.useState(((x = (se = window.b2ProductData) == null ? void 0 : se.product) == null ? void 0 : x.variants) || []), [oe, gn] = jt.useState([]), Ft = jt.useRef(oe), ot = jt.useRef(De), Ye = (k) => {
    const K = typeof k == "number" ? k % 1 === 0 ? k.toString() : k.toFixed(2) : k;
    return Ue.moneyFormat.replace("{{amount}}", K);
  }, Ot = (k) => {
    let K = "";
    return k.discount_type === "amount" ? K = /* @__PURE__ */ Ve.jsxs("span", { children: [
      "Save ",
      Ye(k.discount)
    ] }) : K = /* @__PURE__ */ Ve.jsxs("span", { children: [
      "Save ",
      k.discount,
      "%"
    ] }), k.discount || (K = /* @__PURE__ */ Ve.jsx("span", { children: "Regular price" })), K;
  }, Oe = (k) => (W ? window.b2ProductData.product.price : D.price) / 100, ct = (k, K = "discounted") => {
    let le = 0;
    if (De && oe && k.id === (De == null ? void 0 : De.id) ? le = oe.reduce((Ie, Ce) => Ie + Ce.price / 100, 0) : le = Oe() * k.quantity, K === "regular")
      return We(le);
    let Te = le;
    if (k.discount_type === "percentage" && k.discount) {
      const Me = le * k.discount / 100;
      Te = le - Me;
    } else k.discount_type === "amount" && k.discount && (Te = le - k.discount);
    return We(Te);
  }, We = (k) => {
    const K = Number(k), le = Number(K.toFixed(2));
    return Ye(le);
  }, qt = (k) => {
    const K = document.querySelector('.product-form__input.product-form__quantity input[type="number"], input[name="quantity"]');
    K ? (K.value = k, K.dispatchEvent(new Event("change", { bubbles: !0 }))) : $o("quantity", k);
  }, Lt = () => {
    const k = document.querySelector('.product-variant-id, [ref="variantId"]');
    k && (k.value = D.id, k.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, rn = (k) => De ? De.id === k.id : !1, Bt = (k, K) => {
    if (!(oe != null && oe[k])) return "";
    const le = oe[k].options;
    return (le == null ? void 0 : le[K]) || "";
  }, gt = () => {
    if (De === null) return;
    const k = Array.from({ length: De.quantity }, () => ({
      available: D.available,
      id: D.id,
      options: [...D.options],
      price: D.price
    }));
    gn(k);
  }, Be = (k) => {
    new URL(window.location.href).searchParams.set("variant", k), window.dispatchEvent(new Event("popstate"));
    const le = document.querySelector('.product-variant-id, [ref="variantId"]');
    le && (le.value = k, le.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, zt = (k, K, le) => {
    gn((Te) => {
      const Me = Te.map((Ce, Ze) => Ze === K ? {
        ...Ce,
        options: Ce.options.map(
          (St, on) => on === le ? k.target.value : St
        )
      } : Ce), Ie = I.find((Ce) => Ce.options.every(
        (Ze, St) => Ze === Me[K].options[St]
      ));
      return Be(Ie.id), Me[K].id = Ie.id, Me[K].available = Ie.available, Me[K].price = Ie.price, Me;
    });
  };
  jt.useEffect(() => {
    const k = Ae.find((K) => K.highlighted);
    k && (qt(k.quantity), I.length > 1 ? pt(k) : (qt(k.quantity), vt()));
  }, [Ae]), jt.useEffect(() => {
    gt();
  }, [De, D]), jt.useEffect(() => {
    De !== null && (qt(De.quantity), vt(), ot.current = De);
  }, [De]), jt.useEffect(() => {
    const k = (Te, Me = 5e3) => new Promise((Ie, Ce) => {
      const Ze = Date.now(), St = () => {
        const on = document.querySelector(Te);
        on ? Ie(on) : Date.now() - Ze > Me ? Ce(new Error(`Element ${Te} not found within ${Me}ms`)) : setTimeout(St, 100);
      };
      St();
    }), K = async () => {
      try {
        const Te = await k('form[action="/cart/add"] [type="submit"]'), Me = (Ie) => {
          const Ce = document.querySelector('[action="/cart/add"] [type="submit"]');
          if (!(Ce != null && Ce.classList.contains("b2-different-variants-selected")))
            return;
          Ie.preventDefault(), Ie.target.setAttribute("disabled", "disabled");
          const Ze = document.querySelector('.product-variant-id, [ref="variantId"]'), St = Ft.current, on = ot.current;
          let xn = !1;
          const Tn = St.filter((Nt) => Nt.id === parseInt(Ze.value) && !xn ? (xn = !0, !1) : !0).filter((Nt) => Nt.available).map((Nt) => Nt.id).reduce((Nt, sn) => (Nt[sn] = (Nt[sn] || 0) + 1, Nt), {}), Xn = {
            items: Object.entries(Tn).map(([Nt, sn]) => ({
              id: parseInt(Nt),
              quantity: sn,
              properties: {
                _barn2_discount_campaign_name: H.name,
                _barn2_discount_bundle_type: "volume_discount",
                _barn2_discount_volume_bundles: H.volumeBundles || ""
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
            Ce.removeAttribute("disabled");
            const Nt = new SubmitEvent("submit", {
              bubbles: !0,
              cancelable: !0
            });
            (Ce == null ? void 0 : Ce.closest("form")).dispatchEvent(Nt);
          });
        };
        return Te.addEventListener("click", Me), () => {
          Te.removeEventListener("click", Me);
        };
      } catch {
        return () => {
        };
      }
    };
    let le = null;
    return K().then((Te) => {
      le = Te;
    }), () => {
      le && le();
    };
  }, []), jt.useEffect(() => {
    if (oe.length === 0) return;
    Ft.current = oe;
    const k = oe.every(
      (Te, Me, Ie) => Te.id === Ie[0].id
    ), K = document.querySelector('[action="/cart/add"] [type="submit"]'), le = document.querySelector(".shopify-payment-button");
    k ? (qt(oe.length), K == null || K.classList.remove("b2-different-variants-selected"), le && (le.style.display = "")) : (qt(1), K == null || K.classList.add("b2-different-variants-selected"), le && (le.style.display = "none"));
  }, [oe]), jt.useEffect(() => {
    S(JSON.parse(H.volumeBundles || [])), ae(JSON.parse(H.previewOptions || {})), me(H.layout);
  }, []);
  const vt = (k) => {
    document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]') && ($o(
      "properties[_barn2_discount_campaign_name]",
      H.name || ""
    ), $o(
      "properties[_barn2_discount_bundle_type]",
      "volume_discount"
    ), $o(
      "properties[_barn2_discount_volume_bundles]",
      H.volumeBundles || ""
    ));
  };
  return /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-discount-bundles", children: [
    H.previewEnabled && /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
      (te == null ? void 0 : te.title) && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Ve.jsx("span", { children: te == null ? void 0 : te.title }) }),
      (te == null ? void 0 : te.description) && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Ve.jsx("span", { children: te == null ? void 0 : te.description }) })
    ] }),
    /* @__PURE__ */ Ve.jsx(
      "div",
      {
        className: fE(
          "barn2-discount-bundles-list",
          `barn2-dbs-layout-${Qe}`,
          `discount-columns-${Ae.length}`
        ),
        children: Ae.map((k, K) => /* @__PURE__ */ Ve.jsxs(
          "div",
          {
            className: fE(
              "barn2-discount-bundle",
              {
                highlighted: k.highlighted,
                selected: rn(k)
              }
            ),
            onClick: () => {
              pt(k), (De == null ? void 0 : De.id) !== (k == null ? void 0 : k.id) && (qt(k.quantity), Lt());
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
                  H.layout === "horizontal" && rn(k) && I.length > 1 && it()
                ] })
              ] }),
              /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-dbs-bottom", children: [
                /* @__PURE__ */ Ve.jsx("span", { className: "barn2-dbs-price", children: ct(k, "discounted") }),
                te.showOriginalPrice && k.discount && /* @__PURE__ */ Ve.jsx(
                  "span",
                  {
                    className: fE(
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
          K
        ))
      }
    ),
    H.layout === "vertical" && I.length > 1 && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-bars-wrapper", children: it() })
  ] });
  function it() {
    return /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-bars", children: Array.from({ length: De == null ? void 0 : De.quantity }).map((k, K) => {
      var le, Te;
      return /* @__PURE__ */ Ve.jsxs("div", { children: [
        /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-db-bar", "data-variant-available": (le = oe[K]) == null ? void 0 : le.available, children: [
          /* @__PURE__ */ Ve.jsx("span", { className: "barn2-db-bar-number", children: K + 1 }),
          /* @__PURE__ */ Ve.jsx("div", { className: `barn2-dbs-select-variants barn2-dbs-variants-number-${B.length}`, children: B.map((Me, Ie) => /* @__PURE__ */ Ve.jsx("div", { className: "barn2-dbs-variant", children: /* @__PURE__ */ Ve.jsx(
            "select",
            {
              value: Bt(K, Ie),
              onChange: (Ce) => {
                zt(Ce, K, Ie);
              },
              children: Me.values.map((Ce, Ze) => /* @__PURE__ */ Ve.jsx("option", { value: Ce, children: Ce }, Ze))
            }
          ) }, Ie)) })
        ] }),
        !((Te = oe[K]) != null && Te.available) && /* @__PURE__ */ Ve.jsx("p", { className: "barn2-dbs-stock-unavailable", children: "Sorry, this is currently unavailable." })
      ] }, K);
    }) });
  }
}
function yk({
  bundleData: H,
  isInEditor: W,
  currentVariant: D,
  storeDetails: Ue
}) {
  const [De, pt] = jt.useState([]), [Ae, S] = jt.useState([]);
  jt.useEffect(() => {
    pt(JSON.parse(H.pricingTiers || [])), S(JSON.parse(H.previewOptions || {})), H && B(), dT();
  }, []);
  const Qe = (q) => {
    let I;
    return q.discount_type === "percentage" ? I = q.discount + "% off" : I = ae(q.discount) + " off", /* @__PURE__ */ Ve.jsx("span", { className: "b2-pricing-tier-discount", children: I });
  }, me = () => (W ? window.b2ProductData.product.price : D.price) / 100, te = (q) => {
    let I = me();
    if (q.discount_type === "percentage" && q.discount) {
      const ce = me() * q.discount / 100;
      I = me() - ce;
    } else q.discount_type === "amount" && q.discount && (I = me() - q.discount);
    return Math.max(0, I.toFixed(2));
  }, ae = (q) => {
    const I = typeof q == "number" ? q % 1 === 0 ? q.toString() : q.toFixed(2) : q;
    return Ue.moneyFormat.replace("{{amount}}", I);
  }, B = () => {
    document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]') && ($o(
      "properties[_barn2_discount_campaign_name]",
      H.name || ""
    ), $o(
      "properties[_barn2_discount_bundle_type]",
      "bulk_pricing"
    ), $o(
      "properties[_barn2_discount_pricing_tiers]",
      H.pricingTiers || ""
    ), $o(
      "properties[_barn2_discount_applies_to]",
      H.discountCalculation || "individual_products"
    ));
  };
  return H.previewEnabled ? /* @__PURE__ */ Ve.jsxs("div", { className: "barn2-bulk-table-wrapper", children: [
    H.previewEnabled && /* @__PURE__ */ Ve.jsxs(Ve.Fragment, { children: [
      (Ae == null ? void 0 : Ae.title) && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Ve.jsx("span", { children: Ae == null ? void 0 : Ae.title }) }),
      (Ae == null ? void 0 : Ae.description) && /* @__PURE__ */ Ve.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Ve.jsx("span", { children: Ae == null ? void 0 : Ae.description }) })
    ] }),
    /* @__PURE__ */ Ve.jsx("div", { className: "barn2-bulk-table-container", children: /* @__PURE__ */ Ve.jsxs("table", { className: "barn2-bulk-table", children: [
      /* @__PURE__ */ Ve.jsx("thead", { children: /* @__PURE__ */ Ve.jsxs("tr", { children: [
        /* @__PURE__ */ Ve.jsx("th", { children: "Quantity" }),
        /* @__PURE__ */ Ve.jsx("th", { children: "Discount" }),
        /* @__PURE__ */ Ve.jsx("th", { children: "Price per item" })
      ] }) }),
      /* @__PURE__ */ Ve.jsx("tbody", { children: De.length > 0 && De.map((q, I) => /* @__PURE__ */ Ve.jsxs("tr", { children: [
        /* @__PURE__ */ Ve.jsxs("td", { children: [
          q.min_quantity,
          "-",
          q.max_quantity
        ] }),
        /* @__PURE__ */ Ve.jsx("td", { children: /* @__PURE__ */ Ve.jsx("span", { className: "discount-pill", children: Qe(q) }) }),
        /* @__PURE__ */ Ve.jsx("td", { children: ae(te(q)) })
      ] }, I)) })
    ] }) })
  ] }) : null;
}
function gk({ bundleData: H, isInEditor: W, storeDetails: D }) {
  const [Ue, De] = jt.useState(null), [pt, Ae] = jt.useState(!1), S = () => {
    var B, q;
    const ae = ((q = (B = window.b2ProductData) == null ? void 0 : B.product) == null ? void 0 : q.variants) || [];
    return ae.length > 0 ? ae[0] : 0;
  }, Qe = (ae) => {
    var I, ce;
    const q = (((ce = (I = window.b2ProductData) == null ? void 0 : I.product) == null ? void 0 : ce.variants) || []).find((oe) => oe.id === Number(ae));
    q && De(q);
  }, me = () => {
    const ae = document.querySelector(".product-form__input.product-form__quantity, quantity-selector-component.quantity-selector");
    ae && (ae.style.display = "none");
  }, te = () => {
    const ae = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker");
    ae && (ae.style.display = "none");
  };
  if (jt.useEffect(() => {
    const B = new URLSearchParams(window.location.search).get("variant");
    B ? Qe(B) : De(S());
    const q = new MutationObserver((ce) => {
      ce.forEach((oe) => {
        if (oe.type === "attributes" || oe.type === "childList") {
          const Ft = new URLSearchParams(window.location.search).get("variant");
          Ft && Qe(Ft);
        }
      });
    }), I = document.querySelector("form[action*='/cart/add']");
    return I && q.observe(I, { attributes: !0, childList: !0, subtree: !0 }), () => {
      q.disconnect();
    };
  }, []), jt.useEffect(() => {
    const ae = new MutationObserver((q) => {
      q.forEach((I) => {
        var oe;
        I.target.closest('form[action*="/cart/add"]') && I.type === "attributes" && I.attributeName === "class" && !I.target.classList.contains("loading") && (oe = I.oldValue) != null && oe.includes("loading") && Ae(!0);
      });
    }), B = document.querySelector('form[action*="/cart/add"] button[type="submit"]');
    return B && ae.observe(B, {
      attributes: !0,
      attributeOldValue: !0
    }), () => {
      ae.disconnect();
    };
  }, []), jt.useEffect(() => {
    vk(H), H.type === "volume_bundle" && (me(), te());
  }, []), Ue !== null) {
    if (Ue !== null && H.type === "volume_bundle")
      return /* @__PURE__ */ Ve.jsx(
        mk,
        {
          bundleData: H,
          isInEditor: W,
          currentVariant: Ue,
          storeDetails: D
        }
      );
    if (Ue !== null && H.type === "bulk_pricing")
      return /* @__PURE__ */ Ve.jsx(
        yk,
        {
          bundleData: H,
          isInEditor: W,
          currentVariant: Ue,
          storeDetails: D
        }
      );
  }
}
function Sk() {
  var ae, B, q, I;
  const [H, W] = jt.useState((q = (B = (ae = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : ae.meta) == null ? void 0 : B.product) == null ? void 0 : q.id), [D, Ue] = jt.useState(null), [De, pt] = jt.useState(((I = window == null ? void 0 : window.b2ProductData) == null ? void 0 : I.isDesignMode) || !1), [Ae, S] = jt.useState({}), [Qe, me] = jt.useState(!1), te = async (ce) => {
    try {
      return await (await fetch("/apps/barn2-bundles-bulk-discounts/discountbundle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: ce,
          isInEditor: De
        })
      })).json();
    } catch {
      return me(!0), null;
    }
  };
  return jt.useEffect(() => {
    (async () => {
      try {
        const oe = await te(H);
        if ((oe == null ? void 0 : oe.success) === !1) {
          me(!0);
          return;
        } else
          Ue(oe == null ? void 0 : oe.eligibleProductBundle), S(oe == null ? void 0 : oe.store);
      } catch {
      }
    })();
  }, [H, De]), jt.useEffect(() => {
    Qe && dT();
  }, [Qe]), D && /* @__PURE__ */ Ve.jsx(
    gk,
    {
      bundleData: D,
      isInEditor: De,
      storeDetails: Ae,
      unHideQuantityVariantBlocks: Qe
    }
  );
}
const dE = (H) => {
  mE(H).render(/* @__PURE__ */ Ve.jsx(Sk, {}));
}, oT = document.getElementById("barn2_discounts_block");
if (oT)
  dE(oT);
else {
  const H = document.querySelector("product-form-component"), W = document.querySelector('form[action="/cart/add"]');
  if (H) {
    const D = document.createElement("div");
    D.id = "barn2_discounts", D.classList.add("barn2_discounts"), H.insertBefore(D, H.firstChild), dE(D);
  } else if (W) {
    const D = document.createElement("div");
    D.id = "barn2_discounts", D.classList.add("barn2_discounts"), W.parentNode.insertBefore(D, W), dE(D);
  }
}
