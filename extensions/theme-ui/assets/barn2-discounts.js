function nk(F) {
  return F && F.__esModule && Object.prototype.hasOwnProperty.call(F, "default") ? F.default : F;
}
var vE = { exports: {} }, Kp = {}, hE = { exports: {} }, Dt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZR;
function rk() {
  if (ZR) return Dt;
  ZR = 1;
  var F = Symbol.for("react.element"), W = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), ve = Symbol.for("react.strict_mode"), ye = Symbol.for("react.profiler"), qe = Symbol.for("react.provider"), Me = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), ge = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), ie = Symbol.iterator;
  function j(k) {
    return k === null || typeof k != "object" ? null : (k = ie && k[ie] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var ne = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, K = Object.assign, fe = {};
  function Te(k, Y, ze) {
    this.props = k, this.context = Y, this.refs = fe, this.updater = ze || ne;
  }
  Te.prototype.isReactComponent = {}, Te.prototype.setState = function(k, Y) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, Y, "setState");
  }, Te.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function kn() {
  }
  kn.prototype = Te.prototype;
  function lt(k, Y, ze) {
    this.props = k, this.context = Y, this.refs = fe, this.updater = ze || ne;
  }
  var ct = lt.prototype = new kn();
  ct.constructor = lt, K(ct, Te.prototype), ct.isPureReactComponent = !0;
  var $e = Array.isArray, Ot = Object.prototype.hasOwnProperty, Oe = { current: null }, mt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ge(k, Y, ze) {
    var Qe, Xe = {}, ut = null, Q = null;
    if (Y != null) for (Qe in Y.ref !== void 0 && (Q = Y.ref), Y.key !== void 0 && (ut = "" + Y.key), Y) Ot.call(Y, Qe) && !mt.hasOwnProperty(Qe) && (Xe[Qe] = Y[Qe]);
    var Z = arguments.length - 2;
    if (Z === 1) Xe.children = ze;
    else if (1 < Z) {
      for (var he = Array(Z), Ye = 0; Ye < Z; Ye++) he[Ye] = arguments[Ye + 2];
      Xe.children = he;
    }
    if (k && k.defaultProps) for (Qe in Z = k.defaultProps, Z) Xe[Qe] === void 0 && (Xe[Qe] = Z[Qe]);
    return { $$typeof: F, type: k, key: ut, ref: Q, props: Xe, _owner: Oe.current };
  }
  function pn(k, Y) {
    return { $$typeof: F, type: k.type, key: Y, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Ut(k) {
    return typeof k == "object" && k !== null && k.$$typeof === F;
  }
  function un(k) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(ze) {
      return Y[ze];
    });
  }
  var At = /\/+/g;
  function Tt(k, Y) {
    return typeof k == "object" && k !== null && k.key != null ? un("" + k.key) : Y.toString(36);
  }
  function Ve(k, Y, ze, Qe, Xe) {
    var ut = typeof k;
    (ut === "undefined" || ut === "boolean") && (k = null);
    var Q = !1;
    if (k === null) Q = !0;
    else switch (ut) {
      case "string":
      case "number":
        Q = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case F:
          case W:
            Q = !0;
        }
    }
    if (Q) return Q = k, Xe = Xe(Q), k = Qe === "" ? "." + Tt(Q, 0) : Qe, $e(Xe) ? (ze = "", k != null && (ze = k.replace(At, "$&/") + "/"), Ve(Xe, Y, ze, "", function(Ye) {
      return Ye;
    })) : Xe != null && (Ut(Xe) && (Xe = pn(Xe, ze + (!Xe.key || Q && Q.key === Xe.key ? "" : ("" + Xe.key).replace(At, "$&/") + "/") + k)), Y.push(Xe)), 1;
    if (Q = 0, Qe = Qe === "" ? "." : Qe + ":", $e(k)) for (var Z = 0; Z < k.length; Z++) {
      ut = k[Z];
      var he = Qe + Tt(ut, Z);
      Q += Ve(ut, Y, ze, he, Xe);
    }
    else if (he = j(k), typeof he == "function") for (k = he.call(k), Z = 0; !(ut = k.next()).done; ) ut = ut.value, he = Qe + Tt(ut, Z++), Q += Ve(ut, Y, ze, he, Xe);
    else if (ut === "object") throw Y = String(k), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
    return Q;
  }
  function Pt(k, Y, ze) {
    if (k == null) return k;
    var Qe = [], Xe = 0;
    return Ve(k, Qe, "", "", function(ut) {
      return Y.call(ze, ut, Xe++);
    }), Qe;
  }
  function St(k) {
    if (k._status === -1) {
      var Y = k._result;
      Y = Y(), Y.then(function(ze) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = ze);
      }, function(ze) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = ze);
      }), k._status === -1 && (k._status = 0, k._result = Y);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ft = { current: null }, I = { transition: null }, be = { ReactCurrentDispatcher: ft, ReactCurrentBatchConfig: I, ReactCurrentOwner: Oe };
  function oe() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Dt.Children = { map: Pt, forEach: function(k, Y, ze) {
    Pt(k, function() {
      Y.apply(this, arguments);
    }, ze);
  }, count: function(k) {
    var Y = 0;
    return Pt(k, function() {
      Y++;
    }), Y;
  }, toArray: function(k) {
    return Pt(k, function(Y) {
      return Y;
    }) || [];
  }, only: function(k) {
    if (!Ut(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, Dt.Component = Te, Dt.Fragment = _, Dt.Profiler = ye, Dt.PureComponent = lt, Dt.StrictMode = ve, Dt.Suspense = Ie, Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = be, Dt.act = oe, Dt.cloneElement = function(k, Y, ze) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Qe = K({}, k.props), Xe = k.key, ut = k.ref, Q = k._owner;
    if (Y != null) {
      if (Y.ref !== void 0 && (ut = Y.ref, Q = Oe.current), Y.key !== void 0 && (Xe = "" + Y.key), k.type && k.type.defaultProps) var Z = k.type.defaultProps;
      for (he in Y) Ot.call(Y, he) && !mt.hasOwnProperty(he) && (Qe[he] = Y[he] === void 0 && Z !== void 0 ? Z[he] : Y[he]);
    }
    var he = arguments.length - 2;
    if (he === 1) Qe.children = ze;
    else if (1 < he) {
      Z = Array(he);
      for (var Ye = 0; Ye < he; Ye++) Z[Ye] = arguments[Ye + 2];
      Qe.children = Z;
    }
    return { $$typeof: F, type: k.type, key: Xe, ref: ut, props: Qe, _owner: Q };
  }, Dt.createContext = function(k) {
    return k = { $$typeof: Me, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: qe, _context: k }, k.Consumer = k;
  }, Dt.createElement = Ge, Dt.createFactory = function(k) {
    var Y = Ge.bind(null, k);
    return Y.type = k, Y;
  }, Dt.createRef = function() {
    return { current: null };
  }, Dt.forwardRef = function(k) {
    return { $$typeof: S, render: k };
  }, Dt.isValidElement = Ut, Dt.lazy = function(k) {
    return { $$typeof: X, _payload: { _status: -1, _result: k }, _init: St };
  }, Dt.memo = function(k, Y) {
    return { $$typeof: ge, type: k, compare: Y === void 0 ? null : Y };
  }, Dt.startTransition = function(k) {
    var Y = I.transition;
    I.transition = {};
    try {
      k();
    } finally {
      I.transition = Y;
    }
  }, Dt.unstable_act = oe, Dt.useCallback = function(k, Y) {
    return ft.current.useCallback(k, Y);
  }, Dt.useContext = function(k) {
    return ft.current.useContext(k);
  }, Dt.useDebugValue = function() {
  }, Dt.useDeferredValue = function(k) {
    return ft.current.useDeferredValue(k);
  }, Dt.useEffect = function(k, Y) {
    return ft.current.useEffect(k, Y);
  }, Dt.useId = function() {
    return ft.current.useId();
  }, Dt.useImperativeHandle = function(k, Y, ze) {
    return ft.current.useImperativeHandle(k, Y, ze);
  }, Dt.useInsertionEffect = function(k, Y) {
    return ft.current.useInsertionEffect(k, Y);
  }, Dt.useLayoutEffect = function(k, Y) {
    return ft.current.useLayoutEffect(k, Y);
  }, Dt.useMemo = function(k, Y) {
    return ft.current.useMemo(k, Y);
  }, Dt.useReducer = function(k, Y, ze) {
    return ft.current.useReducer(k, Y, ze);
  }, Dt.useRef = function(k) {
    return ft.current.useRef(k);
  }, Dt.useState = function(k) {
    return ft.current.useState(k);
  }, Dt.useSyncExternalStore = function(k, Y, ze) {
    return ft.current.useSyncExternalStore(k, Y, ze);
  }, Dt.useTransition = function() {
    return ft.current.useTransition();
  }, Dt.version = "18.3.1", Dt;
}
var Zp = { exports: {} };
Zp.exports;
var eT;
function ak() {
  return eT || (eT = 1, function(F, W) {
    var _ = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    _.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ve = "18.3.1", ye = Symbol.for("react.element"), qe = Symbol.for("react.portal"), Me = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ie = Symbol.for("react.profiler"), ge = Symbol.for("react.provider"), X = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), kn = Symbol.iterator, lt = "@@iterator";
      function ct(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = kn && h[kn] || h[lt];
        return typeof C == "function" ? C : null;
      }
      var $e = {
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
      }, mt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ge = {}, pn = null;
      function Ut(h) {
        pn = h;
      }
      Ge.setExtraStackFrame = function(h) {
        pn = h;
      }, Ge.getCurrentStack = null, Ge.getStackAddendum = function() {
        var h = "";
        pn && (h += pn);
        var C = Ge.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var un = !1, At = !1, Tt = !1, Ve = !1, Pt = !1, St = {
        ReactCurrentDispatcher: $e,
        ReactCurrentBatchConfig: Ot,
        ReactCurrentOwner: mt
      };
      St.ReactDebugCurrentFrame = Ge, St.ReactCurrentActQueue = Oe;
      function ft(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            M[H - 1] = arguments[H];
          be("warn", h, M);
        }
      }
      function I(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            M[H - 1] = arguments[H];
          be("error", h, M);
        }
      }
      function be(h, C, M) {
        {
          var H = St.ReactDebugCurrentFrame, ae = H.getStackAddendum();
          ae !== "" && (C += "%s", M = M.concat([ae]));
          var we = M.map(function(Se) {
            return String(Se);
          });
          we.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, we);
        }
      }
      var oe = {};
      function k(h, C) {
        {
          var M = h.constructor, H = M && (M.displayName || M.name) || "ReactClass", ae = H + "." + C;
          if (oe[ae])
            return;
          I("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), oe[ae] = !0;
        }
      }
      var Y = {
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
        enqueueForceUpdate: function(h, C, M) {
          k(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, M, H) {
          k(h, "replaceState");
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
        enqueueSetState: function(h, C, M, H) {
          k(h, "setState");
        }
      }, ze = Object.assign, Qe = {};
      Object.freeze(Qe);
      function Xe(h, C, M) {
        this.props = h, this.context = C, this.refs = Qe, this.updater = M || Y;
      }
      Xe.prototype.isReactComponent = {}, Xe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Xe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Q = function(h, C) {
          Object.defineProperty(Xe.prototype, h, {
            get: function() {
              ft("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Z in ut)
          ut.hasOwnProperty(Z) && Q(Z, ut[Z]);
      }
      function he() {
      }
      he.prototype = Xe.prototype;
      function Ye(h, C, M) {
        this.props = h, this.context = C, this.refs = Qe, this.updater = M || Y;
      }
      var dt = Ye.prototype = new he();
      dt.constructor = Ye, ze(dt, Xe.prototype), dt.isPureReactComponent = !0;
      function yt() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var gt = Array.isArray;
      function Qt(h) {
        return gt(h);
      }
      function vn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function hn(h) {
        try {
          return wn(h), !1;
        } catch {
          return !0;
        }
      }
      function wn(h) {
        return "" + h;
      }
      function Ir(h) {
        if (hn(h))
          return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vn(h)), wn(h);
      }
      function fa(h, C, M) {
        var H = h.displayName;
        if (H)
          return H;
        var ae = C.displayName || C.name || "";
        return ae !== "" ? M + "(" + ae + ")" : M;
      }
      function ur(h) {
        return h.displayName || "Context";
      }
      function jt(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Me:
            return "Fragment";
          case qe:
            return "Portal";
          case Ie:
            return "Profiler";
          case S:
            return "StrictMode";
          case j:
            return "Suspense";
          case ne:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case X:
              var C = h;
              return ur(C) + ".Consumer";
            case ge:
              var M = h;
              return ur(M._context) + ".Provider";
            case ie:
              return fa(h, h.render, "ForwardRef");
            case K:
              var H = h.displayName || null;
              return H !== null ? H : jt(h.type) || "Memo";
            case fe: {
              var ae = h, we = ae._payload, Se = ae._init;
              try {
                return jt(Se(we));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Rn = Object.prototype.hasOwnProperty, Jn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Tr, Ga, Hn;
      Hn = {};
      function or(h) {
        if (Rn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Qr(h) {
        if (Rn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Li(h, C) {
        var M = function() {
          Tr || (Tr = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function da(h, C) {
        var M = function() {
          Ga || (Ga = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function le(h) {
        if (typeof h.ref == "string" && mt.current && h.__self && mt.current.stateNode !== h.__self) {
          var C = jt(mt.current.type);
          Hn[C] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Hn[C] = !0);
        }
      }
      var Pe = function(h, C, M, H, ae, we, Se) {
        var Ke = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ye,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: Se,
          // Record the component responsible for creating this element.
          _owner: we
        };
        return Ke._store = {}, Object.defineProperty(Ke._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ke, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Ke, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ae
        }), Object.freeze && (Object.freeze(Ke.props), Object.freeze(Ke)), Ke;
      };
      function pt(h, C, M) {
        var H, ae = {}, we = null, Se = null, Ke = null, ht = null;
        if (C != null) {
          or(C) && (Se = C.ref, le(C)), Qr(C) && (Ir(C.key), we = "" + C.key), Ke = C.__self === void 0 ? null : C.__self, ht = C.__source === void 0 ? null : C.__source;
          for (H in C)
            Rn.call(C, H) && !Jn.hasOwnProperty(H) && (ae[H] = C[H]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          ae.children = M;
        else if (Wt > 1) {
          for (var en = Array(Wt), tn = 0; tn < Wt; tn++)
            en[tn] = arguments[tn + 2];
          Object.freeze && Object.freeze(en), ae.children = en;
        }
        if (h && h.defaultProps) {
          var ot = h.defaultProps;
          for (H in ot)
            ae[H] === void 0 && (ae[H] = ot[H]);
        }
        if (we || Se) {
          var on = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          we && Li(ae, on), Se && da(ae, on);
        }
        return Pe(h, we, Se, Ke, ht, mt.current, ae);
      }
      function $t(h, C) {
        var M = Pe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function mn(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, ae = ze({}, h.props), we = h.key, Se = h.ref, Ke = h._self, ht = h._source, Wt = h._owner;
        if (C != null) {
          or(C) && (Se = C.ref, Wt = mt.current), Qr(C) && (Ir(C.key), we = "" + C.key);
          var en;
          h.type && h.type.defaultProps && (en = h.type.defaultProps);
          for (H in C)
            Rn.call(C, H) && !Jn.hasOwnProperty(H) && (C[H] === void 0 && en !== void 0 ? ae[H] = en[H] : ae[H] = C[H]);
        }
        var tn = arguments.length - 2;
        if (tn === 1)
          ae.children = M;
        else if (tn > 1) {
          for (var ot = Array(tn), on = 0; on < tn; on++)
            ot[on] = arguments[on + 2];
          ae.children = ot;
        }
        return Pe(h.type, we, Se, Ke, ht, Wt, ae);
      }
      function yn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ye;
      }
      var gn = ".", Zn = ":";
      function fn(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(ae) {
          return M[ae];
        });
        return "$" + H;
      }
      var Jt = !1, Yt = /\/+/g;
      function pa(h) {
        return h.replace(Yt, "$&/");
      }
      function ka(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Ir(h.key), fn("" + h.key)) : C.toString(36);
      }
      function Da(h, C, M, H, ae) {
        var we = typeof h;
        (we === "undefined" || we === "boolean") && (h = null);
        var Se = !1;
        if (h === null)
          Se = !0;
        else
          switch (we) {
            case "string":
            case "number":
              Se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ye:
                case qe:
                  Se = !0;
              }
          }
        if (Se) {
          var Ke = h, ht = ae(Ke), Wt = H === "" ? gn + ka(Ke, 0) : H;
          if (Qt(ht)) {
            var en = "";
            Wt != null && (en = pa(Wt) + "/"), Da(ht, C, en, "", function(Jf) {
              return Jf;
            });
          } else ht != null && (yn(ht) && (ht.key && (!Ke || Ke.key !== ht.key) && Ir(ht.key), ht = $t(
            ht,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ht.key && (!Ke || Ke.key !== ht.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              pa("" + ht.key) + "/"
            ) : "") + Wt
          )), C.push(ht));
          return 1;
        }
        var tn, ot, on = 0, Mn = H === "" ? gn : H + Zn;
        if (Qt(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            tn = h[Zl], ot = Mn + ka(tn, Zl), on += Da(tn, C, M, ot, ae);
        else {
          var Xo = ct(h);
          if (typeof Xo == "function") {
            var Vi = h;
            Xo === Vi.entries && (Jt || ft("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jt = !0);
            for (var eu = Xo.call(Vi), Ko, Kf = 0; !(Ko = eu.next()).done; )
              tn = Ko.value, ot = Mn + ka(tn, Kf++), on += Da(tn, C, M, ot, ae);
          } else if (we === "object") {
            var sc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (sc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : sc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return on;
      }
      function Ni(h, C, M) {
        if (h == null)
          return h;
        var H = [], ae = 0;
        return Da(h, H, "", "", function(we) {
          return C.call(M, we, ae++);
        }), H;
      }
      function Il(h) {
        var C = 0;
        return Ni(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, M) {
        Ni(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Mi(h) {
        return Ni(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!yn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var C = {
          $$typeof: X,
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
          $$typeof: ge,
          _context: C
        };
        var M = !1, H = !1, ae = !1;
        {
          var we = {
            $$typeof: X,
            _context: C
          };
          Object.defineProperties(we, {
            Provider: {
              get: function() {
                return H || (H = !0, I("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(Se) {
                C.Provider = Se;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(Se) {
                C._currentValue = Se;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(Se) {
                C._currentValue2 = Se;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(Se) {
                C._threadCount = Se;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, I("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(Se) {
                ae || (ft("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Se), ae = !0);
              }
            }
          }), C.Consumer = we;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var va = -1, sr = 0, ha = 1, Wr = 2;
      function ci(h) {
        if (h._status === va) {
          var C = h._result, M = C();
          if (M.then(function(we) {
            if (h._status === sr || h._status === va) {
              var Se = h;
              Se._status = ha, Se._result = we;
            }
          }, function(we) {
            if (h._status === sr || h._status === va) {
              var Se = h;
              Se._status = Wr, Se._result = we;
            }
          }), h._status === va) {
            var H = h;
            H._status = sr, H._result = M;
          }
        }
        if (h._status === ha) {
          var ae = h._result;
          return ae === void 0 && I(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ae), "default" in ae || I(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ae), ae.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: va,
          _result: h
        }, M = {
          $$typeof: fe,
          _payload: C,
          _init: ci
        };
        {
          var H, ae;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(we) {
                I("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = we, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ae;
              },
              set: function(we) {
                I("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ae = we, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function zi(h) {
        h != null && h.$$typeof === K ? I("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? I("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && I("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && I("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: ie,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(H) {
              M = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function q(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Me || h === Ie || Pt || h === S || h === j || h === ne || Ve || h === Te || un || At || Tt || typeof h == "object" && h !== null && (h.$$typeof === fe || h.$$typeof === K || h.$$typeof === ge || h.$$typeof === X || h.$$typeof === ie || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ce(h, C) {
        q(h) || I("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: K,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(ae) {
              H = ae, !h.name && !h.displayName && (h.displayName = ae);
            }
          });
        }
        return M;
      }
      function pe() {
        var h = $e.current;
        return h === null && I(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Et(h) {
        var C = pe();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? I("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && I("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function tt(h) {
        var C = pe();
        return C.useState(h);
      }
      function bt(h, C, M) {
        var H = pe();
        return H.useReducer(h, C, M);
      }
      function vt(h) {
        var C = pe();
        return C.useRef(h);
      }
      function Nn(h, C) {
        var M = pe();
        return M.useEffect(h, C);
      }
      function dn(h, C) {
        var M = pe();
        return M.useInsertionEffect(h, C);
      }
      function Sn(h, C) {
        var M = pe();
        return M.useLayoutEffect(h, C);
      }
      function br(h, C) {
        var M = pe();
        return M.useCallback(h, C);
      }
      function Xa(h, C) {
        var M = pe();
        return M.useMemo(h, C);
      }
      function It(h, C, M) {
        var H = pe();
        return H.useImperativeHandle(h, C, M);
      }
      function Tn(h, C) {
        {
          var M = pe();
          return M.useDebugValue(h, C);
        }
      }
      function at() {
        var h = pe();
        return h.useTransition();
      }
      function di(h) {
        var C = pe();
        return C.useDeferredValue(h);
      }
      function Ui() {
        var h = pe();
        return h.useId();
      }
      function ic(h, C, M) {
        var H = pe();
        return H.useSyncExternalStore(h, C, M);
      }
      var Ai = 0, ol, qr, Yo, Or, Io, lc, uc;
      function ji() {
      }
      ji.__reactDisabledLog = !0;
      function sl() {
        {
          if (Ai === 0) {
            ol = console.log, qr = console.info, Yo = console.warn, Or = console.error, Io = console.group, lc = console.groupCollapsed, uc = console.groupEnd;
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
      function Gr() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ze({}, h, {
                value: ol
              }),
              info: ze({}, h, {
                value: qr
              }),
              warn: ze({}, h, {
                value: Yo
              }),
              error: ze({}, h, {
                value: Or
              }),
              group: ze({}, h, {
                value: Io
              }),
              groupCollapsed: ze({}, h, {
                value: lc
              }),
              groupEnd: ze({}, h, {
                value: uc
              })
            });
          }
          Ai < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = St.ReactCurrentDispatcher, cl;
      function Fu(h, C, M) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (ae) {
              var H = ae.stack.trim().match(/\n( *(at )?)/);
              cl = H && H[1] || "";
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
          var M = ql.get(h);
          if (M !== void 0)
            return M;
        }
        var H;
        Fi = !0;
        var ae = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var we;
        we = pi.current, pi.current = null, sl();
        try {
          if (C) {
            var Se = function() {
              throw Error();
            };
            if (Object.defineProperty(Se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Se, []);
              } catch (Mn) {
                H = Mn;
              }
              Reflect.construct(h, [], Se);
            } else {
              try {
                Se.call();
              } catch (Mn) {
                H = Mn;
              }
              h.call(Se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Mn) {
              H = Mn;
            }
            h();
          }
        } catch (Mn) {
          if (Mn && H && typeof Mn.stack == "string") {
            for (var Ke = Mn.stack.split(`
`), ht = H.stack.split(`
`), Wt = Ke.length - 1, en = ht.length - 1; Wt >= 1 && en >= 0 && Ke[Wt] !== ht[en]; )
              en--;
            for (; Wt >= 1 && en >= 0; Wt--, en--)
              if (Ke[Wt] !== ht[en]) {
                if (Wt !== 1 || en !== 1)
                  do
                    if (Wt--, en--, en < 0 || Ke[Wt] !== ht[en]) {
                      var tn = `
` + Ke[Wt].replace(" at new ", " at ");
                      return h.displayName && tn.includes("<anonymous>") && (tn = tn.replace("<anonymous>", h.displayName)), typeof h == "function" && ql.set(h, tn), tn;
                    }
                  while (Wt >= 1 && en >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = we, Gr(), Error.prepareStackTrace = ae;
        }
        var ot = h ? h.displayName || h.name : "", on = ot ? Fu(ot) : "";
        return typeof h == "function" && ql.set(h, on), on;
      }
      function Qo(h, C, M) {
        return fl(h, !1);
      }
      function Wo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Lt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Wo(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case j:
            return Fu("Suspense");
          case ne:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ie:
              return Qo(h.render);
            case K:
              return Lt(h.type, C, M);
            case fe: {
              var H = h, ae = H._payload, we = H._init;
              try {
                return Lt(we(ae), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var qo = {}, Hu = St.ReactDebugCurrentFrame;
      function Nt(h) {
        if (h) {
          var C = h._owner, M = Lt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function oc(h, C, M, H, ae) {
        {
          var we = Function.call.bind(Rn);
          for (var Se in h)
            if (we(h, Se)) {
              var Ke = void 0;
              try {
                if (typeof h[Se] != "function") {
                  var ht = Error((H || "React class") + ": " + M + " type `" + Se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ht.name = "Invariant Violation", ht;
                }
                Ke = h[Se](C, Se, H, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Wt) {
                Ke = Wt;
              }
              Ke && !(Ke instanceof Error) && (Nt(ae), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", M, Se, typeof Ke), Nt(null)), Ke instanceof Error && !(Ke.message in qo) && (qo[Ke.message] = !0, Nt(ae), I("Failed %s type: %s", M, Ke.message), Nt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, M = Lt(h.type, h._source, C ? C.type : null);
          Ut(M);
        } else
          Ut(null);
      }
      var et;
      et = !1;
      function Xl() {
        if (mt.current) {
          var h = jt(mt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function er(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Xr(h) {
        return h != null ? er(h.__source) : "";
      }
      var Lr = {};
      function hi(h) {
        var C = Xl();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Dn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = hi(C);
          if (!Lr[M]) {
            Lr[M] = !0;
            var H = "";
            h && h._owner && h._owner !== mt.current && (H = " It was passed a child from " + jt(h._owner.type) + "."), vi(h), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, H), vi(null);
          }
        }
      }
      function Zt(h, C) {
        if (typeof h == "object") {
          if (Qt(h))
            for (var M = 0; M < h.length; M++) {
              var H = h[M];
              yn(H) && Dn(H, C);
            }
          else if (yn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ae = ct(h);
            if (typeof ae == "function" && ae !== h.entries)
              for (var we = ae.call(h), Se; !(Se = we.next()).done; )
                yn(Se.value) && Dn(Se.value, C);
          }
        }
      }
      function Ka(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === ie || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === K))
            M = C.propTypes;
          else
            return;
          if (M) {
            var H = jt(C);
            oc(M, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !et) {
            et = !0;
            var ae = jt(C);
            I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ae || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Oa(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var H = C[M];
            if (H !== "children" && H !== "key") {
              vi(h), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), I("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function _r(h, C, M) {
        var H = q(h);
        if (!H) {
          var ae = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ae += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = Xr(C);
          we ? ae += we : ae += Xl();
          var Se;
          h === null ? Se = "null" : Qt(h) ? Se = "array" : h !== void 0 && h.$$typeof === ye ? (Se = "<" + (jt(h.type) || "Unknown") + " />", ae = " Did you accidentally export a JSX literal instead of a component?") : Se = typeof h, I("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Se, ae);
        }
        var Ke = pt.apply(this, arguments);
        if (Ke == null)
          return Ke;
        if (H)
          for (var ht = 2; ht < arguments.length; ht++)
            Zt(arguments[ht], h);
        return h === Me ? Oa(Ke) : Ka(Ke), Ke;
      }
      var Nr = !1;
      function Xf(h) {
        var C = _r.bind(null, h);
        return C.type = h, Nr || (Nr = !0, ft("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return ft("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, M) {
        for (var H = mn.apply(this, arguments), ae = 2; ae < arguments.length; ae++)
          Zt(arguments[ae], H.type);
        return Ka(H), H;
      }
      function Kl(h, C) {
        var M = Ot.transition;
        Ot.transition = {};
        var H = Ot.transition;
        Ot.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Ot.transition = M, M === null && H._updatedFibers) {
            var ae = H._updatedFibers.size;
            ae > 10 && ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Jl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = F && F[C];
            Bu = M.call(F, "timers").setImmediate;
          } catch {
            Bu = function(ae) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && I("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var we = new MessageChannel();
              we.port1.onmessage = ae, we.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var La = 0, Na = !1;
      function dl(h) {
        {
          var C = La;
          La++, Oe.current === null && (Oe.current = []);
          var M = Oe.isBatchingLegacy, H;
          try {
            if (Oe.isBatchingLegacy = !0, H = h(), !M && Oe.didScheduleLegacyUpdate) {
              var ae = Oe.current;
              ae !== null && (Oe.didScheduleLegacyUpdate = !1, Pi(ae));
            }
          } catch (ot) {
            throw Hi(C), ot;
          } finally {
            Oe.isBatchingLegacy = M;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var we = H, Se = !1, Ke = {
              then: function(ot, on) {
                Se = !0, we.then(function(Mn) {
                  Hi(C), La === 0 ? $u(Mn, ot, on) : ot(Mn);
                }, function(Mn) {
                  Hi(C), on(Mn);
                });
              }
            };
            return !Na && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Se || (Na = !0, I("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ke;
          } else {
            var ht = H;
            if (Hi(C), La === 0) {
              var Wt = Oe.current;
              Wt !== null && (Pi(Wt), Oe.current = null);
              var en = {
                then: function(ot, on) {
                  Oe.current === null ? (Oe.current = [], $u(ht, ot, on)) : ot(ht);
                }
              };
              return en;
            } else {
              var tn = {
                then: function(ot, on) {
                  ot(ht);
                }
              };
              return tn;
            }
          }
        }
      }
      function Hi(h) {
        h !== La - 1 && I("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = h;
      }
      function $u(h, C, M) {
        {
          var H = Oe.current;
          if (H !== null)
            try {
              Pi(H), Jl(function() {
                H.length === 0 ? (Oe.current = null, C(h)) : $u(h, C, M);
              });
            } catch (ae) {
              M(ae);
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
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            pl = !1;
          }
        }
      }
      var Yu = _r, Go = Pu, Ma = Xf, Iu = {
        map: Ni,
        forEach: Ql,
        count: Il,
        toArray: Mi,
        only: Wl
      };
      W.Children = Iu, W.Component = Xe, W.Fragment = Me, W.Profiler = Ie, W.PureComponent = Ye, W.StrictMode = S, W.Suspense = j, W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = St, W.act = dl, W.cloneElement = Go, W.createContext = si, W.createElement = Yu, W.createFactory = Ma, W.createRef = yt, W.forwardRef = zi, W.isValidElement = yn, W.lazy = fi, W.memo = ce, W.startTransition = Kl, W.unstable_act = dl, W.useCallback = br, W.useContext = Et, W.useDebugValue = Tn, W.useDeferredValue = di, W.useEffect = Nn, W.useId = Ui, W.useImperativeHandle = It, W.useInsertionEffect = dn, W.useLayoutEffect = Sn, W.useMemo = Xa, W.useReducer = bt, W.useRef = vt, W.useState = tt, W.useSyncExternalStore = ic, W.useTransition = at, W.version = ve, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Zp, Zp.exports)), Zp.exports;
}
var ik = {};
ik.NODE_ENV === "production" ? hE.exports = rk() : hE.exports = ak();
var Ht = hE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tT;
function lk() {
  if (tT) return Kp;
  tT = 1;
  var F = Ht, W = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), ve = Object.prototype.hasOwnProperty, ye = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(S, Ie, ge) {
    var X, ie = {}, j = null, ne = null;
    ge !== void 0 && (j = "" + ge), Ie.key !== void 0 && (j = "" + Ie.key), Ie.ref !== void 0 && (ne = Ie.ref);
    for (X in Ie) ve.call(Ie, X) && !qe.hasOwnProperty(X) && (ie[X] = Ie[X]);
    if (S && S.defaultProps) for (X in Ie = S.defaultProps, Ie) ie[X] === void 0 && (ie[X] = Ie[X]);
    return { $$typeof: W, type: S, key: j, ref: ne, props: ie, _owner: ye.current };
  }
  return Kp.Fragment = _, Kp.jsx = Me, Kp.jsxs = Me, Kp;
}
var Jp = {}, nT;
function uk() {
  if (nT) return Jp;
  nT = 1;
  var F = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return F.NODE_ENV !== "production" && function() {
    var W = Ht, _ = Symbol.for("react.element"), ve = Symbol.for("react.portal"), ye = Symbol.for("react.fragment"), qe = Symbol.for("react.strict_mode"), Me = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ie = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), fe = Symbol.iterator, Te = "@@iterator";
    function kn(R) {
      if (R === null || typeof R != "object")
        return null;
      var q = fe && R[fe] || R[Te];
      return typeof q == "function" ? q : null;
    }
    var lt = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function ct(R) {
      {
        for (var q = arguments.length, ce = new Array(q > 1 ? q - 1 : 0), pe = 1; pe < q; pe++)
          ce[pe - 1] = arguments[pe];
        $e("error", R, ce);
      }
    }
    function $e(R, q, ce) {
      {
        var pe = lt.ReactDebugCurrentFrame, Et = pe.getStackAddendum();
        Et !== "" && (q += "%s", ce = ce.concat([Et]));
        var tt = ce.map(function(bt) {
          return String(bt);
        });
        tt.unshift("Warning: " + q), Function.prototype.apply.call(console[R], console, tt);
      }
    }
    var Ot = !1, Oe = !1, mt = !1, Ge = !1, pn = !1, Ut;
    Ut = Symbol.for("react.module.reference");
    function un(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === ye || R === Me || pn || R === qe || R === X || R === ie || Ge || R === K || Ot || Oe || mt || typeof R == "object" && R !== null && (R.$$typeof === ne || R.$$typeof === j || R.$$typeof === S || R.$$typeof === Ie || R.$$typeof === ge || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ut || R.getModuleId !== void 0));
    }
    function At(R, q, ce) {
      var pe = R.displayName;
      if (pe)
        return pe;
      var Et = q.displayName || q.name || "";
      return Et !== "" ? ce + "(" + Et + ")" : ce;
    }
    function Tt(R) {
      return R.displayName || "Context";
    }
    function Ve(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && ct("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case ye:
          return "Fragment";
        case ve:
          return "Portal";
        case Me:
          return "Profiler";
        case qe:
          return "StrictMode";
        case X:
          return "Suspense";
        case ie:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ie:
            var q = R;
            return Tt(q) + ".Consumer";
          case S:
            var ce = R;
            return Tt(ce._context) + ".Provider";
          case ge:
            return At(R, R.render, "ForwardRef");
          case j:
            var pe = R.displayName || null;
            return pe !== null ? pe : Ve(R.type) || "Memo";
          case ne: {
            var Et = R, tt = Et._payload, bt = Et._init;
            try {
              return Ve(bt(tt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Pt = Object.assign, St = 0, ft, I, be, oe, k, Y, ze;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function Xe() {
      {
        if (St === 0) {
          ft = console.log, I = console.info, be = console.warn, oe = console.error, k = console.group, Y = console.groupCollapsed, ze = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
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
        St++;
      }
    }
    function ut() {
      {
        if (St--, St === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Pt({}, R, {
              value: ft
            }),
            info: Pt({}, R, {
              value: I
            }),
            warn: Pt({}, R, {
              value: be
            }),
            error: Pt({}, R, {
              value: oe
            }),
            group: Pt({}, R, {
              value: k
            }),
            groupCollapsed: Pt({}, R, {
              value: Y
            }),
            groupEnd: Pt({}, R, {
              value: ze
            })
          });
        }
        St < 0 && ct("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = lt.ReactCurrentDispatcher, Z;
    function he(R, q, ce) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (Et) {
            var pe = Et.stack.trim().match(/\n( *(at )?)/);
            Z = pe && pe[1] || "";
          }
        return `
` + Z + R;
      }
    }
    var Ye = !1, dt;
    {
      var yt = typeof WeakMap == "function" ? WeakMap : Map;
      dt = new yt();
    }
    function gt(R, q) {
      if (!R || Ye)
        return "";
      {
        var ce = dt.get(R);
        if (ce !== void 0)
          return ce;
      }
      var pe;
      Ye = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var tt;
      tt = Q.current, Q.current = null, Xe();
      try {
        if (q) {
          var bt = function() {
            throw Error();
          };
          if (Object.defineProperty(bt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(bt, []);
            } catch (Tn) {
              pe = Tn;
            }
            Reflect.construct(R, [], bt);
          } else {
            try {
              bt.call();
            } catch (Tn) {
              pe = Tn;
            }
            R.call(bt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Tn) {
            pe = Tn;
          }
          R();
        }
      } catch (Tn) {
        if (Tn && pe && typeof Tn.stack == "string") {
          for (var vt = Tn.stack.split(`
`), Nn = pe.stack.split(`
`), dn = vt.length - 1, Sn = Nn.length - 1; dn >= 1 && Sn >= 0 && vt[dn] !== Nn[Sn]; )
            Sn--;
          for (; dn >= 1 && Sn >= 0; dn--, Sn--)
            if (vt[dn] !== Nn[Sn]) {
              if (dn !== 1 || Sn !== 1)
                do
                  if (dn--, Sn--, Sn < 0 || vt[dn] !== Nn[Sn]) {
                    var br = `
` + vt[dn].replace(" at new ", " at ");
                    return R.displayName && br.includes("<anonymous>") && (br = br.replace("<anonymous>", R.displayName)), typeof R == "function" && dt.set(R, br), br;
                  }
                while (dn >= 1 && Sn >= 0);
              break;
            }
        }
      } finally {
        Ye = !1, Q.current = tt, ut(), Error.prepareStackTrace = Et;
      }
      var Xa = R ? R.displayName || R.name : "", It = Xa ? he(Xa) : "";
      return typeof R == "function" && dt.set(R, It), It;
    }
    function Qt(R, q, ce) {
      return gt(R, !1);
    }
    function vn(R) {
      var q = R.prototype;
      return !!(q && q.isReactComponent);
    }
    function hn(R, q, ce) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return gt(R, vn(R));
      if (typeof R == "string")
        return he(R);
      switch (R) {
        case X:
          return he("Suspense");
        case ie:
          return he("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ge:
            return Qt(R.render);
          case j:
            return hn(R.type, q, ce);
          case ne: {
            var pe = R, Et = pe._payload, tt = pe._init;
            try {
              return hn(tt(Et), q, ce);
            } catch {
            }
          }
        }
      return "";
    }
    var wn = Object.prototype.hasOwnProperty, Ir = {}, fa = lt.ReactDebugCurrentFrame;
    function ur(R) {
      if (R) {
        var q = R._owner, ce = hn(R.type, R._source, q ? q.type : null);
        fa.setExtraStackFrame(ce);
      } else
        fa.setExtraStackFrame(null);
    }
    function jt(R, q, ce, pe, Et) {
      {
        var tt = Function.call.bind(wn);
        for (var bt in R)
          if (tt(R, bt)) {
            var vt = void 0;
            try {
              if (typeof R[bt] != "function") {
                var Nn = Error((pe || "React class") + ": " + ce + " type `" + bt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[bt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Nn.name = "Invariant Violation", Nn;
              }
              vt = R[bt](q, bt, pe, ce, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dn) {
              vt = dn;
            }
            vt && !(vt instanceof Error) && (ur(Et), ct("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", pe || "React class", ce, bt, typeof vt), ur(null)), vt instanceof Error && !(vt.message in Ir) && (Ir[vt.message] = !0, ur(Et), ct("Failed %s type: %s", ce, vt.message), ur(null));
          }
      }
    }
    var Rn = Array.isArray;
    function Jn(R) {
      return Rn(R);
    }
    function Tr(R) {
      {
        var q = typeof Symbol == "function" && Symbol.toStringTag, ce = q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ce;
      }
    }
    function Ga(R) {
      try {
        return Hn(R), !1;
      } catch {
        return !0;
      }
    }
    function Hn(R) {
      return "" + R;
    }
    function or(R) {
      if (Ga(R))
        return ct("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(R)), Hn(R);
    }
    var Qr = lt.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, da, le;
    function Pe(R) {
      if (wn.call(R, "ref")) {
        var q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function pt(R) {
      if (wn.call(R, "key")) {
        var q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (q && q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function $t(R, q) {
      typeof R.ref == "string" && Qr.current;
    }
    function mn(R, q) {
      {
        var ce = function() {
          da || (da = !0, ct("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ce.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ce,
          configurable: !0
        });
      }
    }
    function yn(R, q) {
      {
        var ce = function() {
          le || (le = !0, ct("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
        };
        ce.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ce,
          configurable: !0
        });
      }
    }
    var gn = function(R, q, ce, pe, Et, tt, bt) {
      var vt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: _,
        // Built-in properties that belong on the element
        type: R,
        key: q,
        ref: ce,
        props: bt,
        // Record the component responsible for creating this element.
        _owner: tt
      };
      return vt._store = {}, Object.defineProperty(vt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(vt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.defineProperty(vt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(vt.props), Object.freeze(vt)), vt;
    };
    function Zn(R, q, ce, pe, Et) {
      {
        var tt, bt = {}, vt = null, Nn = null;
        ce !== void 0 && (or(ce), vt = "" + ce), pt(q) && (or(q.key), vt = "" + q.key), Pe(q) && (Nn = q.ref, $t(q, Et));
        for (tt in q)
          wn.call(q, tt) && !Li.hasOwnProperty(tt) && (bt[tt] = q[tt]);
        if (R && R.defaultProps) {
          var dn = R.defaultProps;
          for (tt in dn)
            bt[tt] === void 0 && (bt[tt] = dn[tt]);
        }
        if (vt || Nn) {
          var Sn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          vt && mn(bt, Sn), Nn && yn(bt, Sn);
        }
        return gn(R, vt, Nn, Et, pe, Qr.current, bt);
      }
    }
    var fn = lt.ReactCurrentOwner, Jt = lt.ReactDebugCurrentFrame;
    function Yt(R) {
      if (R) {
        var q = R._owner, ce = hn(R.type, R._source, q ? q.type : null);
        Jt.setExtraStackFrame(ce);
      } else
        Jt.setExtraStackFrame(null);
    }
    var pa;
    pa = !1;
    function ka(R) {
      return typeof R == "object" && R !== null && R.$$typeof === _;
    }
    function Da() {
      {
        if (fn.current) {
          var R = Ve(fn.current.type);
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
        var q = Da();
        if (!q) {
          var ce = typeof R == "string" ? R : R.displayName || R.name;
          ce && (q = `

Check the top-level render call using <` + ce + ">.");
        }
        return q;
      }
    }
    function Mi(R, q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ce = Ql(q);
        if (Il[ce])
          return;
        Il[ce] = !0;
        var pe = "";
        R && R._owner && R._owner !== fn.current && (pe = " It was passed a child from " + Ve(R._owner.type) + "."), Yt(R), ct('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ce, pe), Yt(null);
      }
    }
    function Wl(R, q) {
      {
        if (typeof R != "object")
          return;
        if (Jn(R))
          for (var ce = 0; ce < R.length; ce++) {
            var pe = R[ce];
            ka(pe) && Mi(pe, q);
          }
        else if (ka(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Et = kn(R);
          if (typeof Et == "function" && Et !== R.entries)
            for (var tt = Et.call(R), bt; !(bt = tt.next()).done; )
              ka(bt.value) && Mi(bt.value, q);
        }
      }
    }
    function si(R) {
      {
        var q = R.type;
        if (q == null || typeof q == "string")
          return;
        var ce;
        if (typeof q == "function")
          ce = q.propTypes;
        else if (typeof q == "object" && (q.$$typeof === ge || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        q.$$typeof === j))
          ce = q.propTypes;
        else
          return;
        if (ce) {
          var pe = Ve(q);
          jt(ce, R.props, "prop", pe, R);
        } else if (q.PropTypes !== void 0 && !pa) {
          pa = !0;
          var Et = Ve(q);
          ct("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && ct("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function va(R) {
      {
        for (var q = Object.keys(R.props), ce = 0; ce < q.length; ce++) {
          var pe = q[ce];
          if (pe !== "children" && pe !== "key") {
            Yt(R), ct("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", pe), Yt(null);
            break;
          }
        }
        R.ref !== null && (Yt(R), ct("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    var sr = {};
    function ha(R, q, ce, pe, Et, tt) {
      {
        var bt = un(R);
        if (!bt) {
          var vt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (vt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Nn = Ni();
          Nn ? vt += Nn : vt += Da();
          var dn;
          R === null ? dn = "null" : Jn(R) ? dn = "array" : R !== void 0 && R.$$typeof === _ ? (dn = "<" + (Ve(R.type) || "Unknown") + " />", vt = " Did you accidentally export a JSX literal instead of a component?") : dn = typeof R, ct("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dn, vt);
        }
        var Sn = Zn(R, q, ce, Et, tt);
        if (Sn == null)
          return Sn;
        if (bt) {
          var br = q.children;
          if (br !== void 0)
            if (pe)
              if (Jn(br)) {
                for (var Xa = 0; Xa < br.length; Xa++)
                  Wl(br[Xa], R);
                Object.freeze && Object.freeze(br);
              } else
                ct("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(br, R);
        }
        if (wn.call(q, "key")) {
          var It = Ve(R), Tn = Object.keys(q).filter(function(Ui) {
            return Ui !== "key";
          }), at = Tn.length > 0 ? "{key: someKey, " + Tn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!sr[It + at]) {
            var di = Tn.length > 0 ? "{" + Tn.join(": ..., ") + ": ...}" : "{}";
            ct(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, It, di, It), sr[It + at] = !0;
          }
        }
        return R === ye ? va(Sn) : si(Sn), Sn;
      }
    }
    function Wr(R, q, ce) {
      return ha(R, q, ce, !0);
    }
    function ci(R, q, ce) {
      return ha(R, q, ce, !1);
    }
    var fi = ci, zi = Wr;
    Jp.Fragment = ye, Jp.jsx = fi, Jp.jsxs = zi;
  }(), Jp;
}
var ok = {};
ok.NODE_ENV === "production" ? vE.exports = lk() : vE.exports = uk();
var Fe = vE.exports, mE = { exports: {} }, Wa = {}, Ym = { exports: {} }, cE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rT;
function sk() {
  return rT || (rT = 1, function(F) {
    function W(I, be) {
      var oe = I.length;
      I.push(be);
      e: for (; 0 < oe; ) {
        var k = oe - 1 >>> 1, Y = I[k];
        if (0 < ye(Y, be)) I[k] = be, I[oe] = Y, oe = k;
        else break e;
      }
    }
    function _(I) {
      return I.length === 0 ? null : I[0];
    }
    function ve(I) {
      if (I.length === 0) return null;
      var be = I[0], oe = I.pop();
      if (oe !== be) {
        I[0] = oe;
        e: for (var k = 0, Y = I.length, ze = Y >>> 1; k < ze; ) {
          var Qe = 2 * (k + 1) - 1, Xe = I[Qe], ut = Qe + 1, Q = I[ut];
          if (0 > ye(Xe, oe)) ut < Y && 0 > ye(Q, Xe) ? (I[k] = Q, I[ut] = oe, k = ut) : (I[k] = Xe, I[Qe] = oe, k = Qe);
          else if (ut < Y && 0 > ye(Q, oe)) I[k] = Q, I[ut] = oe, k = ut;
          else break e;
        }
      }
      return be;
    }
    function ye(I, be) {
      var oe = I.sortIndex - be.sortIndex;
      return oe !== 0 ? oe : I.id - be.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var qe = performance;
      F.unstable_now = function() {
        return qe.now();
      };
    } else {
      var Me = Date, S = Me.now();
      F.unstable_now = function() {
        return Me.now() - S;
      };
    }
    var Ie = [], ge = [], X = 1, ie = null, j = 3, ne = !1, K = !1, fe = !1, Te = typeof setTimeout == "function" ? setTimeout : null, kn = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function ct(I) {
      for (var be = _(ge); be !== null; ) {
        if (be.callback === null) ve(ge);
        else if (be.startTime <= I) ve(ge), be.sortIndex = be.expirationTime, W(Ie, be);
        else break;
        be = _(ge);
      }
    }
    function $e(I) {
      if (fe = !1, ct(I), !K) if (_(Ie) !== null) K = !0, St(Ot);
      else {
        var be = _(ge);
        be !== null && ft($e, be.startTime - I);
      }
    }
    function Ot(I, be) {
      K = !1, fe && (fe = !1, kn(Ge), Ge = -1), ne = !0;
      var oe = j;
      try {
        for (ct(be), ie = _(Ie); ie !== null && (!(ie.expirationTime > be) || I && !un()); ) {
          var k = ie.callback;
          if (typeof k == "function") {
            ie.callback = null, j = ie.priorityLevel;
            var Y = k(ie.expirationTime <= be);
            be = F.unstable_now(), typeof Y == "function" ? ie.callback = Y : ie === _(Ie) && ve(Ie), ct(be);
          } else ve(Ie);
          ie = _(Ie);
        }
        if (ie !== null) var ze = !0;
        else {
          var Qe = _(ge);
          Qe !== null && ft($e, Qe.startTime - be), ze = !1;
        }
        return ze;
      } finally {
        ie = null, j = oe, ne = !1;
      }
    }
    var Oe = !1, mt = null, Ge = -1, pn = 5, Ut = -1;
    function un() {
      return !(F.unstable_now() - Ut < pn);
    }
    function At() {
      if (mt !== null) {
        var I = F.unstable_now();
        Ut = I;
        var be = !0;
        try {
          be = mt(!0, I);
        } finally {
          be ? Tt() : (Oe = !1, mt = null);
        }
      } else Oe = !1;
    }
    var Tt;
    if (typeof lt == "function") Tt = function() {
      lt(At);
    };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), Pt = Ve.port2;
      Ve.port1.onmessage = At, Tt = function() {
        Pt.postMessage(null);
      };
    } else Tt = function() {
      Te(At, 0);
    };
    function St(I) {
      mt = I, Oe || (Oe = !0, Tt());
    }
    function ft(I, be) {
      Ge = Te(function() {
        I(F.unstable_now());
      }, be);
    }
    F.unstable_IdlePriority = 5, F.unstable_ImmediatePriority = 1, F.unstable_LowPriority = 4, F.unstable_NormalPriority = 3, F.unstable_Profiling = null, F.unstable_UserBlockingPriority = 2, F.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, F.unstable_continueExecution = function() {
      K || ne || (K = !0, St(Ot));
    }, F.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : pn = 0 < I ? Math.floor(1e3 / I) : 5;
    }, F.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, F.unstable_getFirstCallbackNode = function() {
      return _(Ie);
    }, F.unstable_next = function(I) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var be = 3;
          break;
        default:
          be = j;
      }
      var oe = j;
      j = be;
      try {
        return I();
      } finally {
        j = oe;
      }
    }, F.unstable_pauseExecution = function() {
    }, F.unstable_requestPaint = function() {
    }, F.unstable_runWithPriority = function(I, be) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var oe = j;
      j = I;
      try {
        return be();
      } finally {
        j = oe;
      }
    }, F.unstable_scheduleCallback = function(I, be, oe) {
      var k = F.unstable_now();
      switch (typeof oe == "object" && oe !== null ? (oe = oe.delay, oe = typeof oe == "number" && 0 < oe ? k + oe : k) : oe = k, I) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return Y = oe + Y, I = { id: X++, callback: be, priorityLevel: I, startTime: oe, expirationTime: Y, sortIndex: -1 }, oe > k ? (I.sortIndex = oe, W(ge, I), _(Ie) === null && I === _(ge) && (fe ? (kn(Ge), Ge = -1) : fe = !0, ft($e, oe - k))) : (I.sortIndex = Y, W(Ie, I), K || ne || (K = !0, St(Ot))), I;
    }, F.unstable_shouldYield = un, F.unstable_wrapCallback = function(I) {
      var be = j;
      return function() {
        var oe = j;
        j = be;
        try {
          return I.apply(this, arguments);
        } finally {
          j = oe;
        }
      };
    };
  }(cE)), cE;
}
var fE = {}, aT;
function ck() {
  return aT || (aT = 1, function(F) {
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
      var _ = !1, ve = 5;
      function ye(le, Pe) {
        var pt = le.length;
        le.push(Pe), S(le, Pe, pt);
      }
      function qe(le) {
        return le.length === 0 ? null : le[0];
      }
      function Me(le) {
        if (le.length === 0)
          return null;
        var Pe = le[0], pt = le.pop();
        return pt !== Pe && (le[0] = pt, Ie(le, pt, 0)), Pe;
      }
      function S(le, Pe, pt) {
        for (var $t = pt; $t > 0; ) {
          var mn = $t - 1 >>> 1, yn = le[mn];
          if (ge(yn, Pe) > 0)
            le[mn] = Pe, le[$t] = yn, $t = mn;
          else
            return;
        }
      }
      function Ie(le, Pe, pt) {
        for (var $t = pt, mn = le.length, yn = mn >>> 1; $t < yn; ) {
          var gn = ($t + 1) * 2 - 1, Zn = le[gn], fn = gn + 1, Jt = le[fn];
          if (ge(Zn, Pe) < 0)
            fn < mn && ge(Jt, Zn) < 0 ? (le[$t] = Jt, le[fn] = Pe, $t = fn) : (le[$t] = Zn, le[gn] = Pe, $t = gn);
          else if (fn < mn && ge(Jt, Pe) < 0)
            le[$t] = Jt, le[fn] = Pe, $t = fn;
          else
            return;
        }
      }
      function ge(le, Pe) {
        var pt = le.sortIndex - Pe.sortIndex;
        return pt !== 0 ? pt : le.id - Pe.id;
      }
      var X = 1, ie = 2, j = 3, ne = 4, K = 5;
      function fe(le, Pe) {
      }
      var Te = typeof performance == "object" && typeof performance.now == "function";
      if (Te) {
        var kn = performance;
        F.unstable_now = function() {
          return kn.now();
        };
      } else {
        var lt = Date, ct = lt.now();
        F.unstable_now = function() {
          return lt.now() - ct;
        };
      }
      var $e = 1073741823, Ot = -1, Oe = 250, mt = 5e3, Ge = 1e4, pn = $e, Ut = [], un = [], At = 1, Tt = null, Ve = j, Pt = !1, St = !1, ft = !1, I = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, oe = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function k(le) {
        for (var Pe = qe(un); Pe !== null; ) {
          if (Pe.callback === null)
            Me(un);
          else if (Pe.startTime <= le)
            Me(un), Pe.sortIndex = Pe.expirationTime, ye(Ut, Pe);
          else
            return;
          Pe = qe(un);
        }
      }
      function Y(le) {
        if (ft = !1, k(le), !St)
          if (qe(Ut) !== null)
            St = !0, Hn(ze);
          else {
            var Pe = qe(un);
            Pe !== null && or(Y, Pe.startTime - le);
          }
      }
      function ze(le, Pe) {
        St = !1, ft && (ft = !1, Qr()), Pt = !0;
        var pt = Ve;
        try {
          var $t;
          if (!_) return Qe(le, Pe);
        } finally {
          Tt = null, Ve = pt, Pt = !1;
        }
      }
      function Qe(le, Pe) {
        var pt = Pe;
        for (k(pt), Tt = qe(Ut); Tt !== null && !(Tt.expirationTime > pt && (!le || fa())); ) {
          var $t = Tt.callback;
          if (typeof $t == "function") {
            Tt.callback = null, Ve = Tt.priorityLevel;
            var mn = Tt.expirationTime <= pt, yn = $t(mn);
            pt = F.unstable_now(), typeof yn == "function" ? Tt.callback = yn : Tt === qe(Ut) && Me(Ut), k(pt);
          } else
            Me(Ut);
          Tt = qe(Ut);
        }
        if (Tt !== null)
          return !0;
        var gn = qe(un);
        return gn !== null && or(Y, gn.startTime - pt), !1;
      }
      function Xe(le, Pe) {
        switch (le) {
          case X:
          case ie:
          case j:
          case ne:
          case K:
            break;
          default:
            le = j;
        }
        var pt = Ve;
        Ve = le;
        try {
          return Pe();
        } finally {
          Ve = pt;
        }
      }
      function ut(le) {
        var Pe;
        switch (Ve) {
          case X:
          case ie:
          case j:
            Pe = j;
            break;
          default:
            Pe = Ve;
            break;
        }
        var pt = Ve;
        Ve = Pe;
        try {
          return le();
        } finally {
          Ve = pt;
        }
      }
      function Q(le) {
        var Pe = Ve;
        return function() {
          var pt = Ve;
          Ve = Pe;
          try {
            return le.apply(this, arguments);
          } finally {
            Ve = pt;
          }
        };
      }
      function Z(le, Pe, pt) {
        var $t = F.unstable_now(), mn;
        if (typeof pt == "object" && pt !== null) {
          var yn = pt.delay;
          typeof yn == "number" && yn > 0 ? mn = $t + yn : mn = $t;
        } else
          mn = $t;
        var gn;
        switch (le) {
          case X:
            gn = Ot;
            break;
          case ie:
            gn = Oe;
            break;
          case K:
            gn = pn;
            break;
          case ne:
            gn = Ge;
            break;
          case j:
          default:
            gn = mt;
            break;
        }
        var Zn = mn + gn, fn = {
          id: At++,
          callback: Pe,
          priorityLevel: le,
          startTime: mn,
          expirationTime: Zn,
          sortIndex: -1
        };
        return mn > $t ? (fn.sortIndex = mn, ye(un, fn), qe(Ut) === null && fn === qe(un) && (ft ? Qr() : ft = !0, or(Y, mn - $t))) : (fn.sortIndex = Zn, ye(Ut, fn), !St && !Pt && (St = !0, Hn(ze))), fn;
      }
      function he() {
      }
      function Ye() {
        !St && !Pt && (St = !0, Hn(ze));
      }
      function dt() {
        return qe(Ut);
      }
      function yt(le) {
        le.callback = null;
      }
      function gt() {
        return Ve;
      }
      var Qt = !1, vn = null, hn = -1, wn = ve, Ir = -1;
      function fa() {
        var le = F.unstable_now() - Ir;
        return !(le < wn);
      }
      function ur() {
      }
      function jt(le) {
        if (le < 0 || le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        le > 0 ? wn = Math.floor(1e3 / le) : wn = ve;
      }
      var Rn = function() {
        if (vn !== null) {
          var le = F.unstable_now();
          Ir = le;
          var Pe = !0, pt = !0;
          try {
            pt = vn(Pe, le);
          } finally {
            pt ? Jn() : (Qt = !1, vn = null);
          }
        } else
          Qt = !1;
      }, Jn;
      if (typeof oe == "function")
        Jn = function() {
          oe(Rn);
        };
      else if (typeof MessageChannel < "u") {
        var Tr = new MessageChannel(), Ga = Tr.port2;
        Tr.port1.onmessage = Rn, Jn = function() {
          Ga.postMessage(null);
        };
      } else
        Jn = function() {
          I(Rn, 0);
        };
      function Hn(le) {
        vn = le, Qt || (Qt = !0, Jn());
      }
      function or(le, Pe) {
        hn = I(function() {
          le(F.unstable_now());
        }, Pe);
      }
      function Qr() {
        be(hn), hn = -1;
      }
      var Li = ur, da = null;
      F.unstable_IdlePriority = K, F.unstable_ImmediatePriority = X, F.unstable_LowPriority = ne, F.unstable_NormalPriority = j, F.unstable_Profiling = da, F.unstable_UserBlockingPriority = ie, F.unstable_cancelCallback = yt, F.unstable_continueExecution = Ye, F.unstable_forceFrameRate = jt, F.unstable_getCurrentPriorityLevel = gt, F.unstable_getFirstCallbackNode = dt, F.unstable_next = ut, F.unstable_pauseExecution = he, F.unstable_requestPaint = Li, F.unstable_runWithPriority = Xe, F.unstable_scheduleCallback = Z, F.unstable_shouldYield = fa, F.unstable_wrapCallback = Q, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fE)), fE;
}
var iT;
function cT() {
  if (iT) return Ym.exports;
  iT = 1;
  var F = {};
  return F.NODE_ENV === "production" ? Ym.exports = sk() : Ym.exports = ck(), Ym.exports;
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
var lT;
function fk() {
  if (lT) return Wa;
  lT = 1;
  var F = Ht, W = cT();
  function _(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ve = /* @__PURE__ */ new Set(), ye = {};
  function qe(n, r) {
    Me(n, r), Me(n + "Capture", r);
  }
  function Me(n, r) {
    for (ye[n] = r, n = 0; n < r.length; n++) ve.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ie = Object.prototype.hasOwnProperty, ge = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, X = {}, ie = {};
  function j(n) {
    return Ie.call(ie, n) ? !0 : Ie.call(X, n) ? !1 : ge.test(n) ? ie[n] = !0 : (X[n] = !0, !1);
  }
  function ne(n, r, l, o) {
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
  function K(n, r, l, o) {
    if (r === null || typeof r > "u" || ne(n, r, l, o)) return !0;
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
  function fe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Te[n] = new fe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Te[r] = new fe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Te[n] = new fe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Te[n] = new fe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Te[n] = new fe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Te[n] = new fe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Te[n] = new fe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Te[n] = new fe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Te[n] = new fe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var kn = /[\-:]([a-z])/g;
  function lt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      kn,
      lt
    );
    Te[r] = new fe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(kn, lt);
    Te[r] = new fe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(kn, lt);
    Te[r] = new fe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Te[n] = new fe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Te.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Te[n] = new fe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function ct(n, r, l, o) {
    var c = Te.hasOwnProperty(r) ? Te[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (K(r, l, c, o) && (l = null), o || c === null ? j(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var $e = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ot = Symbol.for("react.element"), Oe = Symbol.for("react.portal"), mt = Symbol.for("react.fragment"), Ge = Symbol.for("react.strict_mode"), pn = Symbol.for("react.profiler"), Ut = Symbol.for("react.provider"), un = Symbol.for("react.context"), At = Symbol.for("react.forward_ref"), Tt = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), Pt = Symbol.for("react.memo"), St = Symbol.for("react.lazy"), ft = Symbol.for("react.offscreen"), I = Symbol.iterator;
  function be(n) {
    return n === null || typeof n != "object" ? null : (n = I && n[I] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var oe = Object.assign, k;
  function Y(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var ze = !1;
  function Qe(n, r) {
    if (!n || ze) return "";
    ze = !0;
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
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
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
      ze = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? Y(n) : "";
  }
  function Xe(n) {
    switch (n.tag) {
      case 5:
        return Y(n.type);
      case 16:
        return Y("Lazy");
      case 13:
        return Y("Suspense");
      case 19:
        return Y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Qe(n.type, !1), n;
      case 11:
        return n = Qe(n.type.render, !1), n;
      case 1:
        return n = Qe(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case mt:
        return "Fragment";
      case Oe:
        return "Portal";
      case pn:
        return "Profiler";
      case Ge:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Ve:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case un:
        return (n.displayName || "Context") + ".Consumer";
      case Ut:
        return (n._context.displayName || "Context") + ".Provider";
      case At:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Pt:
        return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
      case St:
        r = n._payload, n = n._init;
        try {
          return ut(n(r));
        } catch {
        }
    }
    return null;
  }
  function Q(n) {
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
        return ut(r);
      case 8:
        return r === Ge ? "StrictMode" : "Mode";
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
  function Z(n) {
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
  function he(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ye(n) {
    var r = he(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function dt(n) {
    n._valueTracker || (n._valueTracker = Ye(n));
  }
  function yt(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = he(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function gt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Qt(n, r) {
    var l = r.checked;
    return oe({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function vn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Z(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function hn(n, r) {
    r = r.checked, r != null && ct(n, "checked", r, !1);
  }
  function wn(n, r) {
    hn(n, r);
    var l = Z(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? fa(n, r.type, l) : r.hasOwnProperty("defaultValue") && fa(n, r.type, Z(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ir(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function fa(n, r, l) {
    (r !== "number" || gt(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var ur = Array.isArray;
  function jt(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Z(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Rn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(_(91));
    return oe({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Jn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(_(92));
        if (ur(l)) {
          if (1 < l.length) throw Error(_(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Z(l) };
  }
  function Tr(n, r) {
    var l = Z(r.value), o = Z(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ga(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Hn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function or(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Hn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Qr, Li = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Qr = Qr || document.createElement("div"), Qr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Qr.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function da(n, r) {
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
  function pt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || le.hasOwnProperty(n) && le[n] ? ("" + r).trim() : r + "px";
  }
  function $t(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = pt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var mn = oe({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function yn(n, r) {
    if (r) {
      if (mn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(_(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(_(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(_(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(_(62));
    }
  }
  function gn(n, r) {
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
  var Jt = null, Yt = null, pa = null;
  function ka(n) {
    if (n = fs(n)) {
      if (typeof Jt != "function") throw Error(_(280));
      var r = n.stateNode;
      r && (r = Ii(r), Jt(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    Yt ? pa ? pa.push(n) : pa = [n] : Yt = n;
  }
  function Ni() {
    if (Yt) {
      var n = Yt, r = pa;
      if (pa = Yt = null, ka(n), r) for (n = 0; n < r.length; n++) ka(r[n]);
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
      Mi = !1, (Yt !== null || pa !== null) && (Ql(), Ni());
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
    if (l && typeof l != "function") throw Error(_(231, r, typeof l));
    return l;
  }
  var va = !1;
  if (S) try {
    var sr = {};
    Object.defineProperty(sr, "passive", { get: function() {
      va = !0;
    } }), window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    va = !1;
  }
  function ha(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (J) {
      this.onError(J);
    }
  }
  var Wr = !1, ci = null, fi = !1, zi = null, R = { onError: function(n) {
    Wr = !0, ci = n;
  } };
  function q(n, r, l, o, c, d, m, E, T) {
    Wr = !1, ci = null, ha.apply(R, arguments);
  }
  function ce(n, r, l, o, c, d, m, E, T) {
    if (q.apply(this, arguments), Wr) {
      if (Wr) {
        var U = ci;
        Wr = !1, ci = null;
      } else throw Error(_(198));
      fi || (fi = !0, zi = U);
    }
  }
  function pe(n) {
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
  function Et(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function tt(n) {
    if (pe(n) !== n) throw Error(_(188));
  }
  function bt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = pe(n), r === null) throw Error(_(188));
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
          if (d === l) return tt(c), n;
          if (d === o) return tt(c), r;
          d = d.sibling;
        }
        throw Error(_(188));
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
          if (!m) throw Error(_(189));
        }
      }
      if (l.alternate !== o) throw Error(_(190));
    }
    if (l.tag !== 3) throw Error(_(188));
    return l.stateNode.current === l ? n : r;
  }
  function vt(n) {
    return n = bt(n), n !== null ? Nn(n) : null;
  }
  function Nn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Nn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var dn = W.unstable_scheduleCallback, Sn = W.unstable_cancelCallback, br = W.unstable_shouldYield, Xa = W.unstable_requestPaint, It = W.unstable_now, Tn = W.unstable_getCurrentPriorityLevel, at = W.unstable_ImmediatePriority, di = W.unstable_UserBlockingPriority, Ui = W.unstable_NormalPriority, ic = W.unstable_LowPriority, Ai = W.unstable_IdlePriority, ol = null, qr = null;
  function Yo(n) {
    if (qr && typeof qr.onCommitFiberRoot == "function") try {
      qr.onCommitFiberRoot(ol, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Or = Math.clz32 ? Math.clz32 : uc, Io = Math.log, lc = Math.LN2;
  function uc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Io(n) / lc | 0) | 0;
  }
  var ji = 64, sl = 4194304;
  function Gr(n) {
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
      E !== 0 ? o = Gr(E) : (d &= m, d !== 0 && (o = Gr(d)));
    } else m = l & ~c, m !== 0 ? o = Gr(m) : d !== 0 && (o = Gr(d));
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
  var Lt = 0;
  function qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, Nt, oc, vi, et, Xl = !1, er = [], Xr = null, Lr = null, hi = null, Dn = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map(), Ka = [], Oa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _r(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Xr = null;
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
        Dn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Zt.delete(r.pointerId);
    }
  }
  function Nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = fs(r), r !== null && Nt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Xr = Nr(Xr, n, r, l, o, c), !0;
      case "dragenter":
        return Lr = Nr(Lr, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Nr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Dn.set(d, Nr(Dn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Zt.set(d, Nr(Zt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = pe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Et(l), r !== null) {
            n.blockedOn = r, et(n.priority, function() {
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
      } else return r = fs(l), r !== null && Nt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Kl(n) && l.delete(r);
  }
  function Bu() {
    Xl = !1, Xr !== null && Kl(Xr) && (Xr = null), Lr !== null && Kl(Lr) && (Lr = null), hi !== null && Kl(hi) && (hi = null), Dn.forEach(Vu), Zt.forEach(Vu);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Xl || (Xl = !0, W.unstable_scheduleCallback(W.unstable_NormalPriority, Bu)));
  }
  function La(n) {
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
    for (Xr !== null && Jl(Xr, n), Lr !== null && Jl(Lr, n), hi !== null && Jl(hi, n), Dn.forEach(r), Zt.forEach(r), l = 0; l < Ka.length; l++) o = Ka[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ka.length && (l = Ka[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Ka.shift();
  }
  var Na = $e.ReactCurrentBatchConfig, dl = !0;
  function Hi(n, r, l, o) {
    var c = Lt, d = Na.transition;
    Na.transition = null;
    try {
      Lt = 1, pl(n, r, l, o);
    } finally {
      Lt = c, Na.transition = d;
    }
  }
  function $u(n, r, l, o) {
    var c = Lt, d = Na.transition;
    Na.transition = null;
    try {
      Lt = 4, pl(n, r, l, o);
    } finally {
      Lt = c, Na.transition = d;
    }
  }
  function pl(n, r, l, o) {
    if (dl) {
      var c = Yu(n, r, l, o);
      if (c === null) sd(n, r, o, Pi, l), _r(n, o);
      else if (Xf(c, n, r, l, o)) o.stopPropagation();
      else if (_r(n, o), r & 4 && -1 < Oa.indexOf(n)) {
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
    if (Pi = null, n = fn(o), n = iu(n), n !== null) if (r = pe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Et(r), n !== null) return n;
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
        switch (Tn()) {
          case at:
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
  var Ma = null, Iu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Iu, l = r.length, o, c = "value" in Ma ? Ma.value : Ma.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function H() {
    return !0;
  }
  function ae() {
    return !1;
  }
  function we(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? H : ae, this.isPropagationStopped = ae, this;
    }
    return oe(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = H);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = H);
    }, persist: function() {
    }, isPersistent: H }), r;
  }
  var Se = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ke = we(Se), ht = oe({}, Se, { view: 0, detail: 0 }), Wt = we(ht), en, tn, ot, on = oe({}, ht, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== ot && (ot && n.type === "mousemove" ? (en = n.screenX - ot.screenX, tn = n.screenY - ot.screenY) : tn = en = 0, ot = n), en);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : tn;
  } }), Mn = we(on), Zl = oe({}, on, { dataTransfer: 0 }), Xo = we(Zl), Vi = oe({}, ht, { relatedTarget: 0 }), eu = we(Vi), Ko = oe({}, Se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = we(Ko), sc = oe({}, Se, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Jf = we(sc), tv = oe({}, Se, { data: 0 }), cc = we(tv), nv = {
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
  }, rv = {
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
  }, av = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Qm(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = av[n]) ? !!r[n] : !1;
  }
  function Ja() {
    return Qm;
  }
  var Wm = oe({}, ht, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? rv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Zf = we(Wm), ed = oe({}, on, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fc = we(ed), qm = oe({}, ht, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), dc = we(qm), iv = oe({}, Se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kr = we(iv), Bi = oe({}, on, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pn = we(Bi), $i = [9, 13, 27, 32], Jo = S && "CompositionEvent" in window, vl = null;
  S && "documentMode" in document && (vl = document.documentMode);
  var Gm = S && "TextEvent" in window && !vl, Qu = S && (!Jo || vl && 8 < vl && 11 >= vl), lv = " ", uv = !1;
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
  function ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Wu = !1;
  function Xm(n, r) {
    switch (n) {
      case "compositionend":
        return ov(r);
      case "keypress":
        return r.which !== 32 ? null : (uv = !0, lv);
      case "textInput":
        return n = r.data, n === lv && uv ? null : n;
      default:
        return null;
    }
  }
  function sv(n, r) {
    if (Wu) return n === "compositionend" || !Jo && pc(n, r) ? (n = C(), h = Iu = Ma = null, Wu = !1, n) : null;
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
  var Km = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function cv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Km[n.type] : r === "textarea";
  }
  function fv(n, r, l, o) {
    Da(o), r = os(r, "onChange"), 0 < r.length && (l = new Ke("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var qu = null, mi = null;
  function td(n) {
    yc(n, 0);
  }
  function Zo(n) {
    var r = Ae(n);
    if (yt(r)) return n;
  }
  function dv(n, r) {
    if (n === "change") return r;
  }
  var pv = !1;
  if (S) {
    var nd;
    if (S) {
      var rd = "oninput" in document;
      if (!rd) {
        var vv = document.createElement("div");
        vv.setAttribute("oninput", "return;"), rd = typeof vv.oninput == "function";
      }
      nd = rd;
    } else nd = !1;
    pv = nd && (!document.documentMode || 9 < document.documentMode);
  }
  function hv() {
    qu && (qu.detachEvent("onpropertychange", mv), mi = qu = null);
  }
  function mv(n) {
    if (n.propertyName === "value" && Zo(mi)) {
      var r = [];
      fv(r, mi, n, fn(n)), Wl(td, r);
    }
  }
  function Jm(n, r, l) {
    n === "focusin" ? (hv(), qu = r, mi = l, qu.attachEvent("onpropertychange", mv)) : n === "focusout" && hv();
  }
  function Zm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Zo(mi);
  }
  function yv(n, r) {
    if (n === "click") return Zo(r);
  }
  function ey(n, r) {
    if (n === "input" || n === "change") return Zo(r);
  }
  function gv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : gv;
  function es(n, r) {
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
  function Sv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function Ev(n, r) {
    var l = Sv(n);
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
      l = Sv(l);
    }
  }
  function vc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function hl() {
    for (var n = window, r = gt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = gt(n.document);
    }
    return r;
  }
  function Gu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Cv(n) {
    var r = hl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Gu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = Ev(l, d);
          var m = Ev(
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
  function Rv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    id || Ku == null || Ku !== gt(o) || (o = Ku, "selectionStart" in o && Gu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ts && es(ts, o) || (ts = o, o = os(ad, "onSelect"), 0 < o.length && (r = new Ke("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Ku)));
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
  var Tv = rs("animationend"), bv = rs("animationiteration"), _v = rs("animationstart"), wv = rs("transitionend"), xv = /* @__PURE__ */ new Map(), ld = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function yi(n, r) {
    xv.set(n, r), qe(r, [n]);
  }
  for (var tu = 0; tu < ld.length; tu++) {
    var ud = ld[tu], as = ud.toLowerCase(), ty = ud[0].toUpperCase() + ud.slice(1);
    yi(as, "on" + ty);
  }
  yi(Tv, "onAnimationEnd"), yi(bv, "onAnimationIteration"), yi(_v, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(wv, "onTransitionEnd"), Me("onMouseEnter", ["mouseout", "mouseover"]), Me("onMouseLeave", ["mouseout", "mouseover"]), Me("onPointerEnter", ["pointerout", "pointerover"]), Me("onPointerLeave", ["pointerout", "pointerover"]), qe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), qe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), qe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), qe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), qe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), qe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var is = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(is));
  function mc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ce(o, r, void 0, n), n.currentTarget = null;
  }
  function yc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          mc(c, E, U), d = T;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function qt(n, r) {
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
      n[ls] = !0, ve.forEach(function(l) {
        l !== "selectionchange" && (ny.has(l) || ml(l, !1, n), ml(l, !0, n));
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
    l = c.bind(null, r, l, n), c = void 0, !va || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
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
      var U = d, J = fn(l), ee = [];
      e: {
        var G = xv.get(n);
        if (G !== void 0) {
          var Ee = Ke, xe = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ee = Zf;
              break;
            case "focusin":
              xe = "focus", Ee = eu;
              break;
            case "focusout":
              xe = "blur", Ee = eu;
              break;
            case "beforeblur":
            case "afterblur":
              Ee = eu;
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
              Ee = Mn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ee = Xo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ee = dc;
              break;
            case Tv:
            case bv:
            case _v:
              Ee = Kf;
              break;
            case wv:
              Ee = Kr;
              break;
            case "scroll":
              Ee = Wt;
              break;
            case "wheel":
              Ee = Pn;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ee = Jf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ee = fc;
          }
          var Le = (r & 4) !== 0, jn = !Le && n === "scroll", D = Le ? G !== null ? G + "Capture" : null : G;
          Le = [];
          for (var w = U, N; w !== null; ) {
            N = w;
            var re = N.stateNode;
            if (N.tag === 5 && re !== null && (N = re, D !== null && (re = si(w, D), re != null && Le.push(Zu(w, re, N)))), jn) break;
            w = w.return;
          }
          0 < Le.length && (G = new Ee(G, xe, null, l, J), ee.push({ event: G, listeners: Le }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (G = n === "mouseover" || n === "pointerover", Ee = n === "mouseout" || n === "pointerout", G && l !== Zn && (xe = l.relatedTarget || l.fromElement) && (iu(xe) || xe[Yi])) break e;
          if ((Ee || G) && (G = J.window === J ? J : (G = J.ownerDocument) ? G.defaultView || G.parentWindow : window, Ee ? (xe = l.relatedTarget || l.toElement, Ee = U, xe = xe ? iu(xe) : null, xe !== null && (jn = pe(xe), xe !== jn || xe.tag !== 5 && xe.tag !== 6) && (xe = null)) : (Ee = null, xe = U), Ee !== xe)) {
            if (Le = Mn, re = "onMouseLeave", D = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (Le = fc, re = "onPointerLeave", D = "onPointerEnter", w = "pointer"), jn = Ee == null ? G : Ae(Ee), N = xe == null ? G : Ae(xe), G = new Le(re, w + "leave", Ee, l, J), G.target = jn, G.relatedTarget = N, re = null, iu(J) === U && (Le = new Le(D, w + "enter", xe, l, J), Le.target = N, Le.relatedTarget = jn, re = Le), jn = re, Ee && xe) t: {
              for (Le = Ee, D = xe, w = 0, N = Le; N; N = nu(N)) w++;
              for (N = 0, re = D; re; re = nu(re)) N++;
              for (; 0 < w - N; ) Le = nu(Le), w--;
              for (; 0 < N - w; ) D = nu(D), N--;
              for (; w--; ) {
                if (Le === D || D !== null && Le === D.alternate) break t;
                Le = nu(Le), D = nu(D);
              }
              Le = null;
            }
            else Le = null;
            Ee !== null && gc(ee, G, Ee, Le, !1), xe !== null && jn !== null && gc(ee, jn, xe, Le, !0);
          }
        }
        e: {
          if (G = U ? Ae(U) : window, Ee = G.nodeName && G.nodeName.toLowerCase(), Ee === "select" || Ee === "input" && G.type === "file") var Ne = dv;
          else if (cv(G)) if (pv) Ne = ey;
          else {
            Ne = Zm;
            var ke = Jm;
          }
          else (Ee = G.nodeName) && Ee.toLowerCase() === "input" && (G.type === "checkbox" || G.type === "radio") && (Ne = yv);
          if (Ne && (Ne = Ne(n, U))) {
            fv(ee, Ne, l, J);
            break e;
          }
          ke && ke(n, G, U), n === "focusout" && (ke = G._wrapperState) && ke.controlled && G.type === "number" && fa(G, "number", G.value);
        }
        switch (ke = U ? Ae(U) : window, n) {
          case "focusin":
            (cv(ke) || ke.contentEditable === "true") && (Ku = ke, ad = U, ts = null);
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
            id = !1, Rv(ee, l, J);
            break;
          case "selectionchange":
            if (Xu) break;
          case "keydown":
          case "keyup":
            Rv(ee, l, J);
        }
        var He;
        if (Jo) e: {
          switch (n) {
            case "compositionstart":
              var Ze = "onCompositionStart";
              break e;
            case "compositionend":
              Ze = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ze = "onCompositionUpdate";
              break e;
          }
          Ze = void 0;
        }
        else Wu ? pc(n, l) && (Ze = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ze = "onCompositionStart");
        Ze && (Qu && l.locale !== "ko" && (Wu || Ze !== "onCompositionStart" ? Ze === "onCompositionEnd" && Wu && (He = C()) : (Ma = J, Iu = "value" in Ma ? Ma.value : Ma.textContent, Wu = !0)), ke = os(U, Ze), 0 < ke.length && (Ze = new cc(Ze, n, null, l, J), ee.push({ event: Ze, listeners: ke }), He ? Ze.data = He : (He = ov(l), He !== null && (Ze.data = He)))), (He = Gm ? Xm(n, l) : sv(n, l)) && (U = os(U, "onBeforeInput"), 0 < U.length && (J = new cc("onBeforeInput", "beforeinput", null, l, J), ee.push({ event: J, listeners: U }), J.data = He));
      }
      yc(ee, r);
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
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = si(l, d), T != null && m.unshift(Zu(l, T, E))) : c || (T = si(l, d), T != null && m.push(Zu(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ry = /\r\n?/g, kv = /\u0000|\uFFFD/g;
  function Dv(n) {
    return (typeof n == "string" ? n : "" + n).replace(ry, `
`).replace(kv, "");
  }
  function Sc(n, r, l) {
    if (r = Dv(r), Dv(n) !== r && l) throw Error(_(425));
  }
  function Ec() {
  }
  var ru = null, ss = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Cc = typeof setTimeout == "function" ? setTimeout : void 0, Ov = typeof clearTimeout == "function" ? clearTimeout : void 0, Rc = typeof Promise == "function" ? Promise : void 0, ay = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rc < "u" ? function(n) {
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
          n.removeChild(c), La(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    La(r);
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
  var no = Math.random().toString(36).slice(2), za = "__reactFiber$" + no, cs = "__reactProps$" + no, Yi = "__reactContainer$" + no, cd = "__reactEvents$" + no, fd = "__reactListeners$" + no, ro = "__reactHandles$" + no;
  function iu(n) {
    var r = n[za];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Yi] || l[za]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Tc(n); n !== null; ) {
          if (l = n[za]) return l;
          n = Tc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function fs(n) {
    return n = n[za] || n[Yi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ae(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(_(33));
  }
  function Ii(n) {
    return n[cs] || null;
  }
  var Vn = [], _t = -1;
  function Jr(n) {
    return { current: n };
  }
  function nn(n) {
    0 > _t || (n.current = Vn[_t], Vn[_t] = null, _t--);
  }
  function sn(n, r) {
    _t++, Vn[_t] = n.current, n.current = r;
  }
  var Ct = {}, On = Jr(Ct), Bn = Jr(!1), Ua = Ct;
  function ma(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Ct;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function $n(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    nn(Bn), nn(On);
  }
  function bc(n, r, l) {
    if (On.current !== Ct) throw Error(_(168));
    sn(On, r), sn(Bn, l);
  }
  function Lv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(_(108, Q(n) || "Unknown", c));
    return oe({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ct, Ua = On.current, sn(On, n), sn(Bn, Bn.current), !0;
  }
  function Aa(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(_(169));
    l ? (n = Lv(n, r, Ua), o.__reactInternalMemoizedMergedChildContext = n, nn(Bn), nn(On), sn(On, n)) : nn(Bn), sn(Bn, l);
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
      var n = 0, r = Lt;
      try {
        var l = ti;
        for (Lt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, ds = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), dn(at, Mr), c;
      } finally {
        Lt = r, ps = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, ao = null, El = 0, cr = [], Yn = 0, uu = null, zr = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = ao, ao = n, El = r;
  }
  function Nv(n, r, l) {
    cr[Yn++] = zr, cr[Yn++] = Si, cr[Yn++] = uu, uu = n;
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
    n.return !== null && (Cl(n, 1), Nv(n, 1, 0));
  }
  function _c(n) {
    for (; n === ao; ) ao = gl[--Sl], gl[Sl] = null, El = gl[--Sl], gl[Sl] = null;
    for (; n === uu; ) uu = cr[--Yn], cr[Yn] = null, Si = cr[--Yn], cr[Yn] = null, zr = cr[--Yn], cr[Yn] = null;
  }
  var Zr = null, ea = null, En = !1, ni = null;
  function vd(n, r) {
    var l = Va(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = ei(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Zr = n, ea = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = uu !== null ? { id: zr, overflow: Si } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Va(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Zr = n, ea = null, !0) : !1;
      default:
        return !1;
    }
  }
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function yd(n) {
    if (En) {
      var r = ea;
      if (r) {
        var l = r;
        if (!hd(n, r)) {
          if (md(n)) throw Error(_(418));
          r = ei(l.nextSibling);
          var o = Zr;
          r && hd(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, En = !1, Zr = n);
        }
      } else {
        if (md(n)) throw Error(_(418));
        n.flags = n.flags & -4097 | 2, En = !1, Zr = n;
      }
    }
  }
  function Mv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Zr = n;
  }
  function zn(n) {
    if (n !== Zr) return !1;
    if (!En) return Mv(n), En = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = ea)) {
      if (md(n)) throw zv(), Error(_(418));
      for (; r; ) vd(n, r), r = ei(r.nextSibling);
    }
    if (Mv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(_(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ea = ei(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ea = null;
      }
    } else ea = Zr ? ei(n.stateNode.nextSibling) : null;
    return !0;
  }
  function zv() {
    for (var n = ea; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    ea = Zr = null, En = !1;
  }
  function vs(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = $e.ReactCurrentBatchConfig;
  function hs(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(_(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(_(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(_(284));
      if (!l._owner) throw Error(_(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(_(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Uv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Av(n) {
    function r(D, w) {
      if (n) {
        var N = D.deletions;
        N === null ? (D.deletions = [w], D.flags |= 16) : N.push(w);
      }
    }
    function l(D, w) {
      if (!n) return null;
      for (; w !== null; ) r(D, w), w = w.sibling;
      return null;
    }
    function o(D, w) {
      for (D = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? D.set(w.key, w) : D.set(w.index, w), w = w.sibling;
      return D;
    }
    function c(D, w) {
      return D = Nl(D, w), D.index = 0, D.sibling = null, D;
    }
    function d(D, w, N) {
      return D.index = N, n ? (N = D.alternate, N !== null ? (N = N.index, N < w ? (D.flags |= 2, w) : N) : (D.flags |= 2, w)) : (D.flags |= 1048576, w);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, w, N, re) {
      return w === null || w.tag !== 6 ? (w = _u(N, D.mode, re), w.return = D, w) : (w = c(w, N), w.return = D, w);
    }
    function T(D, w, N, re) {
      var Ne = N.type;
      return Ne === mt ? J(D, w, N.props.children, re, N.key) : w !== null && (w.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === St && Uv(Ne) === w.type) ? (re = c(w, N.props), re.ref = hs(D, w, N), re.return = D, re) : (re = ff(N.type, N.key, N.props, null, D.mode, re), re.ref = hs(D, w, N), re.return = D, re);
    }
    function U(D, w, N, re) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = qd(N, D.mode, re), w.return = D, w) : (w = c(w, N.children || []), w.return = D, w);
    }
    function J(D, w, N, re, Ne) {
      return w === null || w.tag !== 7 ? (w = Ml(N, D.mode, re, Ne), w.return = D, w) : (w = c(w, N), w.return = D, w);
    }
    function ee(D, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = _u("" + w, D.mode, N), w.return = D, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case Ot:
            return N = ff(w.type, w.key, w.props, null, D.mode, N), N.ref = hs(D, null, w), N.return = D, N;
          case Oe:
            return w = qd(w, D.mode, N), w.return = D, w;
          case St:
            var re = w._init;
            return ee(D, re(w._payload), N);
        }
        if (ur(w) || be(w)) return w = Ml(w, D.mode, N, null), w.return = D, w;
        io(D, w);
      }
      return null;
    }
    function G(D, w, N, re) {
      var Ne = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return Ne !== null ? null : E(D, w, "" + N, re);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ot:
            return N.key === Ne ? T(D, w, N, re) : null;
          case Oe:
            return N.key === Ne ? U(D, w, N, re) : null;
          case St:
            return Ne = N._init, G(
              D,
              w,
              Ne(N._payload),
              re
            );
        }
        if (ur(N) || be(N)) return Ne !== null ? null : J(D, w, N, re, null);
        io(D, N);
      }
      return null;
    }
    function Ee(D, w, N, re, Ne) {
      if (typeof re == "string" && re !== "" || typeof re == "number") return D = D.get(N) || null, E(w, D, "" + re, Ne);
      if (typeof re == "object" && re !== null) {
        switch (re.$$typeof) {
          case Ot:
            return D = D.get(re.key === null ? N : re.key) || null, T(w, D, re, Ne);
          case Oe:
            return D = D.get(re.key === null ? N : re.key) || null, U(w, D, re, Ne);
          case St:
            var ke = re._init;
            return Ee(D, w, N, ke(re._payload), Ne);
        }
        if (ur(re) || be(re)) return D = D.get(N) || null, J(w, D, re, Ne, null);
        io(w, re);
      }
      return null;
    }
    function xe(D, w, N, re) {
      for (var Ne = null, ke = null, He = w, Ze = w = 0, ir = null; He !== null && Ze < N.length; Ze++) {
        He.index > Ze ? (ir = He, He = null) : ir = He.sibling;
        var Ft = G(D, He, N[Ze], re);
        if (Ft === null) {
          He === null && (He = ir);
          break;
        }
        n && He && Ft.alternate === null && r(D, He), w = d(Ft, w, Ze), ke === null ? Ne = Ft : ke.sibling = Ft, ke = Ft, He = ir;
      }
      if (Ze === N.length) return l(D, He), En && Cl(D, Ze), Ne;
      if (He === null) {
        for (; Ze < N.length; Ze++) He = ee(D, N[Ze], re), He !== null && (w = d(He, w, Ze), ke === null ? Ne = He : ke.sibling = He, ke = He);
        return En && Cl(D, Ze), Ne;
      }
      for (He = o(D, He); Ze < N.length; Ze++) ir = Ee(He, D, Ze, N[Ze], re), ir !== null && (n && ir.alternate !== null && He.delete(ir.key === null ? Ze : ir.key), w = d(ir, w, Ze), ke === null ? Ne = ir : ke.sibling = ir, ke = ir);
      return n && He.forEach(function(zl) {
        return r(D, zl);
      }), En && Cl(D, Ze), Ne;
    }
    function Le(D, w, N, re) {
      var Ne = be(N);
      if (typeof Ne != "function") throw Error(_(150));
      if (N = Ne.call(N), N == null) throw Error(_(151));
      for (var ke = Ne = null, He = w, Ze = w = 0, ir = null, Ft = N.next(); He !== null && !Ft.done; Ze++, Ft = N.next()) {
        He.index > Ze ? (ir = He, He = null) : ir = He.sibling;
        var zl = G(D, He, Ft.value, re);
        if (zl === null) {
          He === null && (He = ir);
          break;
        }
        n && He && zl.alternate === null && r(D, He), w = d(zl, w, Ze), ke === null ? Ne = zl : ke.sibling = zl, ke = zl, He = ir;
      }
      if (Ft.done) return l(
        D,
        He
      ), En && Cl(D, Ze), Ne;
      if (He === null) {
        for (; !Ft.done; Ze++, Ft = N.next()) Ft = ee(D, Ft.value, re), Ft !== null && (w = d(Ft, w, Ze), ke === null ? Ne = Ft : ke.sibling = Ft, ke = Ft);
        return En && Cl(D, Ze), Ne;
      }
      for (He = o(D, He); !Ft.done; Ze++, Ft = N.next()) Ft = Ee(He, D, Ze, Ft.value, re), Ft !== null && (n && Ft.alternate !== null && He.delete(Ft.key === null ? Ze : Ft.key), w = d(Ft, w, Ze), ke === null ? Ne = Ft : ke.sibling = Ft, ke = Ft);
      return n && He.forEach(function(Sy) {
        return r(D, Sy);
      }), En && Cl(D, Ze), Ne;
    }
    function jn(D, w, N, re) {
      if (typeof N == "object" && N !== null && N.type === mt && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case Ot:
            e: {
              for (var Ne = N.key, ke = w; ke !== null; ) {
                if (ke.key === Ne) {
                  if (Ne = N.type, Ne === mt) {
                    if (ke.tag === 7) {
                      l(D, ke.sibling), w = c(ke, N.props.children), w.return = D, D = w;
                      break e;
                    }
                  } else if (ke.elementType === Ne || typeof Ne == "object" && Ne !== null && Ne.$$typeof === St && Uv(Ne) === ke.type) {
                    l(D, ke.sibling), w = c(ke, N.props), w.ref = hs(D, ke, N), w.return = D, D = w;
                    break e;
                  }
                  l(D, ke);
                  break;
                } else r(D, ke);
                ke = ke.sibling;
              }
              N.type === mt ? (w = Ml(N.props.children, D.mode, re, N.key), w.return = D, D = w) : (re = ff(N.type, N.key, N.props, null, D.mode, re), re.ref = hs(D, w, N), re.return = D, D = re);
            }
            return m(D);
          case Oe:
            e: {
              for (ke = N.key; w !== null; ) {
                if (w.key === ke) if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                  l(D, w.sibling), w = c(w, N.children || []), w.return = D, D = w;
                  break e;
                } else {
                  l(D, w);
                  break;
                }
                else r(D, w);
                w = w.sibling;
              }
              w = qd(N, D.mode, re), w.return = D, D = w;
            }
            return m(D);
          case St:
            return ke = N._init, jn(D, w, ke(N._payload), re);
        }
        if (ur(N)) return xe(D, w, N, re);
        if (be(N)) return Le(D, w, N, re);
        io(D, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, w !== null && w.tag === 6 ? (l(D, w.sibling), w = c(w, N), w.return = D, D = w) : (l(D, w), w = _u(N, D.mode, re), w.return = D, D = w), m(D)) : l(D, w);
    }
    return jn;
  }
  var ri = Av(!0), fr = Av(!1), se = Jr(null), ya = null, xr = null, gd = null;
  function Sd() {
    gd = xr = ya = null;
  }
  function Ed(n) {
    var r = se.current;
    nn(se), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ya = n, gd = xr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (rr = !0), n.firstContext = null);
  }
  function Xt(n) {
    var r = n._currentValue;
    if (gd !== n) if (n = { context: n, memoizedValue: r, next: null }, xr === null) {
      if (ya === null) throw Error(_(308));
      xr = n, ya.dependencies = { lanes: 0, firstContext: n };
    } else xr = xr.next = n;
    return r;
  }
  var su = null;
  function Rd(n) {
    su === null ? su = [n] : su.push(n);
  }
  function jv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Rd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ei(n, o);
  }
  function Ei(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ja = !1;
  function Rl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Fv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Wi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, wt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ei(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Rd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ei(n, l);
  }
  function wc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  function Hv(n, r) {
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
    ja = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var J = n.alternate;
      J !== null && (J = J.updateQueue, E = J.lastBaseUpdate, E !== m && (E === null ? J.firstBaseUpdate = U : E.next = U, J.lastBaseUpdate = T));
    }
    if (d !== null) {
      var ee = c.baseState;
      m = 0, J = U = T = null, E = d;
      do {
        var G = E.lane, Ee = E.eventTime;
        if ((o & G) === G) {
          J !== null && (J = J.next = {
            eventTime: Ee,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var xe = n, Le = E;
            switch (G = r, Ee = l, Le.tag) {
              case 1:
                if (xe = Le.payload, typeof xe == "function") {
                  ee = xe.call(Ee, ee, G);
                  break e;
                }
                ee = xe;
                break e;
              case 3:
                xe.flags = xe.flags & -65537 | 128;
              case 0:
                if (xe = Le.payload, G = typeof xe == "function" ? xe.call(Ee, ee, G) : xe, G == null) break e;
                ee = oe({}, ee, G);
                break e;
              case 2:
                ja = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, G = c.effects, G === null ? c.effects = [E] : G.push(E));
        } else Ee = { eventTime: Ee, lane: G, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, J === null ? (U = J = Ee, T = ee) : J = J.next = Ee, m |= G;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          G = E, E = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      if (J === null && (T = ee), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = J, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = ee;
    }
  }
  function Td(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(_(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ci = Jr(uo), ms = Jr(uo), ys = Jr(uo);
  function cu(n) {
    if (n === uo) throw Error(_(174));
    return n;
  }
  function bd(n, r) {
    switch (sn(ys, r), sn(ms, n), sn(Ci, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : or(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = or(r, n);
    }
    nn(Ci), sn(Ci, r);
  }
  function oo() {
    nn(Ci), nn(ms), nn(ys);
  }
  function _d(n) {
    cu(ys.current);
    var r = cu(Ci.current), l = or(r, n.type);
    r !== l && (sn(ms, n), sn(Ci, l));
  }
  function wd(n) {
    ms.current === n && (nn(Ci), nn(ms));
  }
  var bn = Jr(0);
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
  var je = $e.ReactCurrentDispatcher, Rt = $e.ReactCurrentBatchConfig, kt = 0, it = null, rn = null, qn = null, Dc = !1, Ss = !1, Es = 0, kd = 0;
  function B() {
    throw Error(_(321));
  }
  function In(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function We(n, r, l, o, c, d) {
    if (kt = d, it = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, je.current = n === null || n.memoizedState === null ? Yc : Ic, n = l(o, c), Ss) {
      d = 0;
      do {
        if (Ss = !1, Es = 0, 25 <= d) throw Error(_(301));
        d += 1, qn = rn = null, r.updateQueue = null, je.current = _s, n = l(o, c);
      } while (Ss);
    }
    if (je.current = Kt, r = rn !== null && rn.next !== null, kt = 0, qn = rn = it = null, Dc = !1, r) throw Error(_(300));
    return n;
  }
  function bl() {
    var n = Es !== 0;
    return Es = 0, n;
  }
  function tr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return qn === null ? it.memoizedState = qn = n : qn = qn.next = n, qn;
  }
  function nr() {
    if (rn === null) {
      var n = it.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = rn.next;
    var r = qn === null ? it.memoizedState : qn.next;
    if (r !== null) qn = r, rn = n;
    else {
      if (n === null) throw Error(_(310));
      rn = n, n = { memoizedState: rn.memoizedState, baseState: rn.baseState, baseQueue: rn.baseQueue, queue: rn.queue, next: null }, qn === null ? it.memoizedState = qn = n : qn = qn.next = n;
    }
    return qn;
  }
  function ta(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = nr(), l = r.queue;
    if (l === null) throw Error(_(311));
    l.lastRenderedReducer = n;
    var o = rn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, U = d;
      do {
        var J = U.lane;
        if ((kt & J) === J) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var ee = {
            lane: J,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = ee, m = o) : T = T.next = ee, it.lanes |= J, Su |= J;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (rr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, it.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function _l(n) {
    var r = nr(), l = r.queue;
    if (l === null) throw Error(_(311));
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
    var l = it, o = nr(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, rr = !0), o = o.queue, Cs(Mc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || qn !== null && qn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Nc.bind(null, l, o, c, r), void 0, null), Qn === null) throw Error(_(349));
      kt & 30 || Lc(l, r, c);
    }
    return c;
  }
  function Lc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = it.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, it.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
    r !== null && Ra(r, n, 1, -1);
  }
  function Ac(n) {
    var r = tr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ta, lastRenderedState: n }, r.queue = n, n = n.dispatch = bs.bind(null, it, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = it.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, it.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function jc() {
    return nr().memoizedState;
  }
  function co(n, r, l, o) {
    var c = tr();
    it.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = nr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (rn !== null) {
      var m = rn.memoizedState;
      if (d = m.destroy, o !== null && In(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    it.flags |= n, c.memoizedState = du(1 | r, l, d, o);
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
    return o !== null && r !== null && In(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Bc(n, r) {
    var l = nr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && In(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function $c(n, r, l) {
    return kt & 21 ? (Za(l, r) || (l = ql(), it.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, rr = !0), n.memoizedState = l);
  }
  function Pv(n, r) {
    var l = Lt;
    Lt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Rt.transition;
    Rt.transition = {};
    try {
      n(!1), r();
    } finally {
      Lt = l, Rt.transition = o;
    }
  }
  function po() {
    return nr().memoizedState;
  }
  function Vv(n, r, l) {
    var o = Ca(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, wl(n)) ga(r, l);
    else if (l = jv(n, r, l, o), l !== null) {
      var c = cn();
      Ra(l, n, o, c), Bv(l, r, o);
    }
  }
  function bs(n, r, l) {
    var o = Ca(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (wl(n)) ga(r, c);
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
      l = jv(n, r, c, o), l !== null && (c = cn(), Ra(l, n, o, c), Bv(l, r, o));
    }
  }
  function wl(n) {
    var r = n.alternate;
    return n === it || r !== null && r === it;
  }
  function ga(n, r) {
    Ss = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Bv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  var Kt = { readContext: Xt, useCallback: B, useContext: B, useEffect: B, useImperativeHandle: B, useInsertionEffect: B, useLayoutEffect: B, useMemo: B, useReducer: B, useRef: B, useState: B, useDebugValue: B, useDeferredValue: B, useTransition: B, useMutableSource: B, useSyncExternalStore: B, useId: B, unstable_isNewReconciler: !1 }, Yc = { readContext: Xt, useCallback: function(n, r) {
    return tr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Xt, useEffect: Fc, useImperativeHandle: function(n, r, l) {
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Vv.bind(null, it, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = tr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ac, useDebugValue: Ts, useDeferredValue: function(n) {
    return tr().memoizedState = n;
  }, useTransition: function() {
    var n = Ac(!1), r = n[0];
    return n = Pv.bind(null, n[1]), tr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = it, c = tr();
    if (En) {
      if (l === void 0) throw Error(_(407));
      l = l();
    } else {
      if (l = r(), Qn === null) throw Error(_(349));
      kt & 30 || Lc(o, r, l);
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
    var n = tr(), r = Qn.identifierPrefix;
    if (En) {
      var l = Si, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Es++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = kd++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ic = {
    readContext: Xt,
    useCallback: Vc,
    useContext: Xt,
    useEffect: Cs,
    useImperativeHandle: pu,
    useInsertionEffect: Hc,
    useLayoutEffect: Pc,
    useMemo: Bc,
    useReducer: fu,
    useRef: jc,
    useState: function() {
      return fu(ta);
    },
    useDebugValue: Ts,
    useDeferredValue: function(n) {
      var r = nr();
      return $c(r, rn.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ta)[0], r = nr().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: Oc,
    useId: po,
    unstable_isNewReconciler: !1
  }, _s = { readContext: Xt, useCallback: Vc, useContext: Xt, useEffect: Cs, useImperativeHandle: pu, useInsertionEffect: Hc, useLayoutEffect: Pc, useMemo: Bc, useReducer: _l, useRef: jc, useState: function() {
    return _l(ta);
  }, useDebugValue: Ts, useDeferredValue: function(n) {
    var r = nr();
    return rn === null ? r.memoizedState = n : $c(r, rn.memoizedState, n);
  }, useTransition: function() {
    var n = _l(ta)[0], r = nr().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: Oc, useId: po, unstable_isNewReconciler: !1 };
  function na(n, r) {
    if (n && n.defaultProps) {
      r = oe({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : oe({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Qc = { isMounted: function(n) {
    return (n = n._reactInternals) ? pe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = cn(), c = Ca(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ra(r, n, c, o), wc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = cn(), c = Ca(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ra(r, n, c, o), wc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = cn(), o = Ca(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, o), r !== null && (Ra(r, n, o, l), wc(r, n, o));
  } };
  function $v(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !es(l, o) || !es(c, d) : !0;
  }
  function Yv(n, r, l) {
    var o = !1, c = Ct, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Xt(d) : (c = $n(r) ? Ua : On.current, o = r.contextTypes, d = (o = o != null) ? ma(n, c) : Ct), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Qc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Wc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Qc.enqueueReplaceState(r, r.state, null);
  }
  function Od(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Xt(d) : (d = $n(r) ? Ua : On.current, c.context = ma(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Qc.enqueueReplaceState(c, c.state, null), xc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function xl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Xe(o), o = o.return;
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
  var iy = typeof WeakMap == "function" ? WeakMap : Map;
  function ws(n, r, l) {
    l = Wi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dl || (Dl = !0, zs = o), Ld(n, r);
    }, l;
  }
  function Iv(n, r, l) {
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
      Ld(n, r), typeof o != "function" && (Pa === null ? Pa = /* @__PURE__ */ new Set([this]) : Pa.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new iy();
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
  function Qv(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Wi(-1, 1), r.tag = 2, Tl(l, r, 1))), l.lanes |= 1), n);
  }
  var vu = $e.ReactCurrentOwner, rr = !1;
  function Un(n, r, l, o) {
    r.child = n === null ? fr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function Gc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = We(n, r, l, o, d, c), l = bl(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, dr(n, r, c)) : (En && l && pd(r), r.flags |= 1, Un(n, r, o, c), r.child);
  }
  function ra(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Wd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = ff(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : es, l(m, o) && n.ref === r.ref) return dr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (es(d, o) && n.ref === r.ref) if (rr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (rr = !0);
      else return r.lanes = n.lanes, dr(n, r, c);
    }
    return Xc(n, r, l, o, c);
  }
  function st(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, sn(yo, Ea), Ea |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, sn(yo, Ea), Ea |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, sn(yo, Ea), Ea |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, sn(yo, Ea), Ea |= o;
    return Un(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Xc(n, r, l, o, c) {
    var d = $n(l) ? Ua : On.current;
    return d = ma(r, d), lo(r, c), l = We(n, r, l, o, d, c), o = bl(), n !== null && !rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, dr(n, r, c)) : (En && o && pd(r), r.flags |= 1, Un(n, r, l, c), r.child);
  }
  function ly(n, r, l, o, c) {
    if ($n(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) Fa(n, r), Yv(r, l, o), Od(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Xt(U) : (U = $n(l) ? Ua : On.current, U = ma(r, U));
      var J = l.getDerivedStateFromProps, ee = typeof J == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      ee || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Wc(r, m, o, U), ja = !1;
      var G = r.memoizedState;
      m.state = G, xc(r, o, m, c), T = r.memoizedState, E !== o || G !== T || Bn.current || ja ? (typeof J == "function" && (Dd(r, l, J, o), T = r.memoizedState), (E = ja || $v(r, l, E, o, G, T, U)) ? (ee || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Fv(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : na(r.type, E), m.props = U, ee = r.pendingProps, G = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Xt(T) : (T = $n(l) ? Ua : On.current, T = ma(r, T));
      var Ee = l.getDerivedStateFromProps;
      (J = typeof Ee == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== ee || G !== T) && Wc(r, m, o, T), ja = !1, G = r.memoizedState, m.state = G, xc(r, o, m, c);
      var xe = r.memoizedState;
      E !== ee || G !== xe || Bn.current || ja ? (typeof Ee == "function" && (Dd(r, l, Ee, o), xe = r.memoizedState), (U = ja || $v(r, l, U, o, G, xe, T) || !1) ? (J || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, xe, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, xe, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = xe), m.props = o, m.state = xe, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && G === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return zd(n, r, l, o, d, c);
  }
  function zd(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Aa(r, l, !1), dr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : Un(n, r, E, d), r.memoizedState = o.state, c && Aa(r, l, !0), r.child;
  }
  function Kc(n) {
    var r = n.stateNode;
    r.pendingContext ? bc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && bc(n, r.context, !1), bd(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Qi(), vs(c), r.flags |= 256, Un(n, r, l, o), r.child;
  }
  var Ud = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Jc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Wv(n, r, l) {
    var o = r.pendingProps, c = bn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), sn(bn, c & 1), n === null)
      return yd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Jc(l), r.memoizedState = Ud, n) : ks(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return qv(n, r, m, o, E, c, l);
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
  function qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = qc(Error(_(422))), Zc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Jc(m), r.memoizedState = Ud, d);
    if (!(r.mode & 1)) return Zc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(_(419)), o = qc(d, o, void 0), Zc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, rr || E) {
      if (o = Qn, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ei(n, c), Ra(o, n, c, -1));
      }
      return $d(), o = qc(Error(_(421))), Zc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = dy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ea = ei(c.nextSibling), Zr = r, En = !0, ni = null, n !== null && (cr[Yn++] = zr, cr[Yn++] = Si, cr[Yn++] = uu, zr = n.id, Si = n.overflow, uu = r), r = ks(r, o.children), r.flags |= 4096, r);
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
  function aa(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Un(n, r, o.children, l), o = bn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (sn(bn, o), !(r.mode & 1)) r.memoizedState = null;
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
  function Fa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function dr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(_(153));
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
        _d(r);
        break;
      case 1:
        $n(r.type) && lu(r);
        break;
      case 4:
        bd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        sn(se, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (sn(bn, bn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Wv(n, r, l) : (sn(bn, bn.current & 1), n = dr(n, r, l), n !== null ? n.sibling : null);
        sn(bn, bn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return aa(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), sn(bn, bn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, st(n, r, l);
    }
    return dr(n, r, l);
  }
  var ho, Sa, Gn, Gv;
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
  }, Sa = function() {
  }, Gn = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = Qt(n, c), o = Qt(n, o), d = [];
          break;
        case "select":
          c = oe({}, c, { value: void 0 }), o = oe({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Rn(n, c), o = Rn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      yn(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (ye.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (ye.hasOwnProperty(U) ? (T != null && U === "onScroll" && qt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Gv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!En) switch (n.tailMode) {
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
  function kr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function jd(n, r, l) {
    var o = r.pendingProps;
    switch (_c(r), r.tag) {
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
        return kr(r), null;
      case 1:
        return $n(r.type) && gi(), kr(r), null;
      case 3:
        return o = r.stateNode, oo(), nn(Bn), nn(On), gs(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (zn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (Fs(ni), ni = null))), Sa(n, r), kr(r), null;
      case 5:
        wd(r);
        var c = cu(ys.current);
        if (l = r.type, n !== null && r.stateNode != null) Gn(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(_(166));
            return kr(r), null;
          }
          if (n = cu(Ci.current), zn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[za] = r, o[cs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                qt("cancel", o), qt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                qt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < is.length; c++) qt(is[c], o);
                break;
              case "source":
                qt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                qt(
                  "error",
                  o
                ), qt("load", o);
                break;
              case "details":
                qt("toggle", o);
                break;
              case "input":
                vn(o, d), qt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, qt("invalid", o);
                break;
              case "textarea":
                Jn(o, d), qt("invalid", o);
            }
            yn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && Sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && Sc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : ye.hasOwnProperty(m) && E != null && m === "onScroll" && qt("scroll", o);
            }
            switch (l) {
              case "input":
                dt(o), Ir(o, d, !0);
                break;
              case "textarea":
                dt(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ec);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Hn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[za] = r, n[cs] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = gn(l, o), l) {
                case "dialog":
                  qt("cancel", n), qt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  qt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < is.length; c++) qt(is[c], n);
                  c = o;
                  break;
                case "source":
                  qt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  qt(
                    "error",
                    n
                  ), qt("load", n), c = o;
                  break;
                case "details":
                  qt("toggle", n), c = o;
                  break;
                case "input":
                  vn(n, o), c = Qt(n, o), qt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = oe({}, o, { value: void 0 }), qt("invalid", n);
                  break;
                case "textarea":
                  Jn(n, o), c = Rn(n, o), qt("invalid", n);
                  break;
                default:
                  c = o;
              }
              yn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? $t(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Li(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && da(n, T) : typeof T == "number" && da(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ye.hasOwnProperty(d) ? T != null && d === "onScroll" && qt("scroll", n) : T != null && ct(n, d, T, m));
              }
              switch (l) {
                case "input":
                  dt(n), Ir(n, o, !1);
                  break;
                case "textarea":
                  dt(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Z(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? jt(n, !!o.multiple, d, !1) : o.defaultValue != null && jt(
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
        return kr(r), null;
      case 6:
        if (n && r.stateNode != null) Gv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(_(166));
          if (l = cu(ys.current), cu(Ci.current), zn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[za] = r, (d = o.nodeValue !== l) && (n = Zr, n !== null)) switch (n.tag) {
              case 3:
                Sc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Sc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[za] = r, r.stateNode = o;
        }
        return kr(r), null;
      case 13:
        if (nn(bn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (En && ea !== null && r.mode & 1 && !(r.flags & 128)) zv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = zn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(_(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(_(317));
              d[za] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            kr(r), d = !1;
          } else ni !== null && (Fs(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || bn.current & 1 ? Xn === 0 && (Xn = 3) : $d())), r.updateQueue !== null && (r.flags |= 4), kr(r), null);
      case 4:
        return oo(), Sa(n, r), n === null && us(r.stateNode.containerInfo), kr(r), null;
      case 10:
        return Ed(r.type._context), kr(r), null;
      case 17:
        return $n(r.type) && gi(), kr(r), null;
      case 19:
        if (nn(bn), d = r.memoizedState, d === null) return kr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (Xn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = kc(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return sn(bn, bn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && It() > So && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = kc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !En) return kr(r), null;
          } else 2 * It() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = It(), r.sibling = null, l = bn.current, sn(bn, o ? l & 1 | 2 : l & 1), r) : (kr(r), null);
      case 22:
      case 23:
        return Bd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Ea & 1073741824 && (kr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : kr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(_(156, r.tag));
  }
  function Xv(n, r) {
    switch (_c(r), r.tag) {
      case 1:
        return $n(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), nn(Bn), nn(On), gs(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (nn(bn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(_(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return nn(bn), null;
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
  var mu = !1, pr = !1, uy = typeof WeakSet == "function" ? WeakSet : Set, _e = null;
  function kl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Ln(n, r, o);
    }
    else l.current = null;
  }
  function Fd(n, r, l) {
    try {
      l();
    } catch (o) {
      Ln(n, r, o);
    }
  }
  var Hd = !1;
  function oy(n, r) {
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
          var m = 0, E = -1, T = -1, U = 0, J = 0, ee = n, G = null;
          t: for (; ; ) {
            for (var Ee; ee !== l || c !== 0 && ee.nodeType !== 3 || (E = m + c), ee !== d || o !== 0 && ee.nodeType !== 3 || (T = m + o), ee.nodeType === 3 && (m += ee.nodeValue.length), (Ee = ee.firstChild) !== null; )
              G = ee, ee = Ee;
            for (; ; ) {
              if (ee === n) break t;
              if (G === l && ++U === c && (E = m), G === d && ++J === o && (T = m), (Ee = ee.nextSibling) !== null) break;
              ee = G, G = ee.parentNode;
            }
            ee = Ee;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ss = { focusedElem: n, selectionRange: l }, dl = !1, _e = r; _e !== null; ) if (r = _e, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, _e = n;
    else for (; _e !== null; ) {
      r = _e;
      try {
        var xe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (xe !== null) {
              var Le = xe.memoizedProps, jn = xe.memoizedState, D = r.stateNode, w = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Le : na(r.type, Le), jn);
              D.__reactInternalSnapshotBeforeUpdate = w;
            }
            break;
          case 3:
            var N = r.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(_(163));
        }
      } catch (re) {
        Ln(r, r.return, re);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, _e = n;
        break;
      }
      _e = r.return;
    }
    return xe = Hd, Hd = !1, xe;
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
  function Kv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Kv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[za], delete r[cs], delete r[cd], delete r[fd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
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
  var _n = null, Ur = !1;
  function Ha(n, r, l) {
    for (l = l.child; l !== null; ) qi(n, r, l), l = l.sibling;
  }
  function qi(n, r, l) {
    if (qr && typeof qr.onCommitFiberUnmount == "function") try {
      qr.onCommitFiberUnmount(ol, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        pr || kl(l, r);
      case 6:
        var o = _n, c = Ur;
        _n = null, Ha(n, r, l), _n = o, Ur = c, _n !== null && (Ur ? (n = _n, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : _n.removeChild(l.stateNode));
        break;
      case 18:
        _n !== null && (Ur ? (n = _n, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), La(n)) : to(_n, l.stateNode));
        break;
      case 4:
        o = _n, c = Ur, _n = l.stateNode.containerInfo, Ur = !0, Ha(n, r, l), _n = o, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!pr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Fd(l, r, m), c = c.next;
          } while (c !== o);
        }
        Ha(n, r, l);
        break;
      case 1:
        if (!pr && (kl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Ln(l, r, E);
        }
        Ha(n, r, l);
        break;
      case 21:
        Ha(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (pr = (o = pr) || l.memoizedState !== null, Ha(n, r, l), pr = o) : Ha(n, r, l);
        break;
      default:
        Ha(n, r, l);
    }
  }
  function Jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new uy()), r.forEach(function(o) {
        var c = py.bind(null, n, o);
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
              _n = E.stateNode, Ur = !1;
              break e;
            case 3:
              _n = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              _n = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (_n === null) throw Error(_(160));
        qi(d, m, c), _n = null, Ur = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        Ln(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Zv(r, n), r = r.sibling;
  }
  function Zv(n, r) {
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
            Ln(n, n.return, Le);
          }
          try {
            mo(5, n, n.return);
          } catch (Le) {
            Ln(n, n.return, Le);
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
            da(c, "");
          } catch (Le) {
            Ln(n, n.return, Le);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && hn(c, d), gn(E, m);
            var U = gn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var J = T[m], ee = T[m + 1];
              J === "style" ? $t(c, ee) : J === "dangerouslySetInnerHTML" ? Li(c, ee) : J === "children" ? da(c, ee) : ct(c, J, ee, U);
            }
            switch (E) {
              case "input":
                wn(c, d);
                break;
              case "textarea":
                Tr(c, d);
                break;
              case "select":
                var G = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Ee = d.value;
                Ee != null ? jt(c, !!d.multiple, Ee, !1) : G !== !!d.multiple && (d.defaultValue != null ? jt(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : jt(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[cs] = d;
          } catch (Le) {
            Ln(n, n.return, Le);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(_(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Le) {
            Ln(n, n.return, Le);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          La(r.containerInfo);
        } catch (Le) {
          Ln(n, n.return, Le);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Vd = It())), o & 4 && Jv(n);
        break;
      case 22:
        if (J = l !== null && l.memoizedState !== null, n.mode & 1 ? (pr = (U = pr) || J, ai(r, n), pr = U) : ai(r, n), ii(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !J && n.mode & 1) for (_e = n, J = n.child; J !== null; ) {
            for (ee = _e = J; _e !== null; ) {
              switch (G = _e, Ee = G.child, G.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, G, G.return);
                  break;
                case 1:
                  kl(G, G.return);
                  var xe = G.stateNode;
                  if (typeof xe.componentWillUnmount == "function") {
                    o = G, l = G.return;
                    try {
                      r = o, xe.props = r.memoizedProps, xe.state = r.memoizedState, xe.componentWillUnmount();
                    } catch (Le) {
                      Ln(o, l, Le);
                    }
                  }
                  break;
                case 5:
                  kl(G, G.return);
                  break;
                case 22:
                  if (G.memoizedState !== null) {
                    th(ee);
                    continue;
                  }
              }
              Ee !== null ? (Ee.return = G, _e = Ee) : th(ee);
            }
            J = J.sibling;
          }
          e: for (J = null, ee = n; ; ) {
            if (ee.tag === 5) {
              if (J === null) {
                J = ee;
                try {
                  c = ee.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = ee.stateNode, T = ee.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = pt("display", m));
                } catch (Le) {
                  Ln(n, n.return, Le);
                }
              }
            } else if (ee.tag === 6) {
              if (J === null) try {
                ee.stateNode.nodeValue = U ? "" : ee.memoizedProps;
              } catch (Le) {
                Ln(n, n.return, Le);
              }
            } else if ((ee.tag !== 22 && ee.tag !== 23 || ee.memoizedState === null || ee === n) && ee.child !== null) {
              ee.child.return = ee, ee = ee.child;
              continue;
            }
            if (ee === n) break e;
            for (; ee.sibling === null; ) {
              if (ee.return === null || ee.return === n) break e;
              J === ee && (J = null), ee = ee.return;
            }
            J === ee && (J = null), ee.sibling.return = ee.return, ee = ee.sibling;
          }
        }
        break;
      case 19:
        ai(r, n), ii(n), o & 4 && Jv(n);
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
          throw Error(_(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (da(c, ""), o.flags &= -33);
            var d = Os(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Os(n);
            Ri(n, E, m);
            break;
          default:
            throw Error(_(161));
        }
      } catch (T) {
        Ln(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Ls(n, r, l) {
    _e = n, eh(n);
  }
  function eh(n, r, l) {
    for (var o = (n.mode & 1) !== 0; _e !== null; ) {
      var c = _e, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || pr;
          E = mu;
          var U = pr;
          if (mu = m, (pr = T) && !U) for (_e = c; _e !== null; ) m = _e, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ns(c) : T !== null ? (T.return = m, _e = T) : Ns(c);
          for (; d !== null; ) _e = d, eh(d), d = d.sibling;
          _e = c, mu = E, pr = U;
        }
        Pd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, _e = d) : Pd(n);
    }
  }
  function Pd(n) {
    for (; _e !== null; ) {
      var r = _e;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              pr || nf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !pr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : na(r.type, l.memoizedProps);
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
                var U = r.alternate;
                if (U !== null) {
                  var J = U.memoizedState;
                  if (J !== null) {
                    var ee = J.dehydrated;
                    ee !== null && La(ee);
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
              throw Error(_(163));
          }
          pr || r.flags & 512 && rf(r);
        } catch (G) {
          Ln(r, r.return, G);
        }
      }
      if (r === n) {
        _e = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, _e = l;
        break;
      }
      _e = r.return;
    }
  }
  function th(n) {
    for (; _e !== null; ) {
      var r = _e;
      if (r === n) {
        _e = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, _e = l;
        break;
      }
      _e = r.return;
    }
  }
  function Ns(n) {
    for (; _e !== null; ) {
      var r = _e;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              nf(4, r);
            } catch (T) {
              Ln(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Ln(r, c, T);
              }
            }
            var d = r.return;
            try {
              rf(r);
            } catch (T) {
              Ln(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              rf(r);
            } catch (T) {
              Ln(r, m, T);
            }
        }
      } catch (T) {
        Ln(r, r.return, T);
      }
      if (r === n) {
        _e = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, _e = E;
        break;
      }
      _e = r.return;
    }
  }
  var nh = Math.ceil, lf = $e.ReactCurrentDispatcher, yu = $e.ReactCurrentOwner, Dr = $e.ReactCurrentBatchConfig, wt = 0, Qn = null, An = null, vr = 0, Ea = 0, yo = Jr(0), Xn = 0, gu = null, Su = 0, Eu = 0, Ms = 0, go = null, ia = null, Vd = 0, So = 1 / 0, Gi = null, Dl = !1, zs = null, Pa = null, uf = !1, Ol = null, Us = 0, Eo = 0, Co = null, Cu = -1, As = 0;
  function cn() {
    return wt & 6 ? It() : Cu !== -1 ? Cu : Cu = It();
  }
  function Ca(n) {
    return n.mode & 1 ? wt & 2 && vr !== 0 ? vr & -vr : ou.transition !== null ? (As === 0 && (As = ql()), As) : (n = Lt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ra(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(_(185));
    fl(n, l, o), (!(wt & 2) || n !== Qn) && (n === Qn && (!(wt & 2) && (Eu |= l), Xn === 4 && Ll(n, vr)), ar(n, o), l === 1 && wt === 0 && !(r.mode & 1) && (So = It() + 500, ds && Mr()));
  }
  function ar(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = pi(n, n === Qn ? vr : 0);
    if (o === 0) l !== null && Sn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Sn(l), r === 1) n.tag === 0 ? dd(Ps.bind(null, n)) : yl(Ps.bind(null, n)), ay(function() {
        !(wt & 6) && Mr();
      }), l = null;
      else {
        switch (qo(o)) {
          case 1:
            l = at;
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
        l = oh(l, rh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function rh(n, r) {
    if (Cu = -1, As = 0, wt & 6) throw Error(_(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = pi(n, n === Qn ? vr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = cf(n, o);
    else {
      r = o;
      var c = wt;
      wt |= 2;
      var d = ah();
      (Qn !== n || vr !== r) && (Gi = null, So = It() + 500, Tu(n, r));
      do
        try {
          cy();
          break;
        } catch (E) {
          sf(n, E);
        }
      while (!0);
      Sd(), lf.current = d, wt = c, An !== null ? r = 0 : (Qn = null, vr = 0, r = Xn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = gu, Tu(n, 0), Ll(n, o), ar(n, It()), l;
      if (r === 6) Ll(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Hs(c) && (r = cf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ll(n, o), ar(n, It()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(_(345));
          case 2:
            bu(n, ia, Gi);
            break;
          case 3:
            if (Ll(n, o), (o & 130023424) === o && (r = Vd + 500 - It(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                cn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Cc(bu.bind(null, n, ia, Gi), r);
              break;
            }
            bu(n, ia, Gi);
            break;
          case 4:
            if (Ll(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = It() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * nh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Cc(bu.bind(null, n, ia, Gi), o);
              break;
            }
            bu(n, ia, Gi);
            break;
          case 5:
            bu(n, ia, Gi);
            break;
          default:
            throw Error(_(329));
        }
      }
    }
    return ar(n, It()), n.callbackNode === l ? rh.bind(null, n) : null;
  }
  function js(n, r) {
    var l = go;
    return n.current.memoizedState.isDehydrated && (Tu(n, r).flags |= 256), n = cf(n, r), n !== 2 && (r = ia, ia = l, r !== null && Fs(r)), n;
  }
  function Fs(n) {
    ia === null ? ia = n : ia.push.apply(ia, n);
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
    if (wt & 6) throw Error(_(327));
    Ro();
    var r = pi(n, 0);
    if (!(r & 1)) return ar(n, It()), null;
    var l = cf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ll(n, r), ar(n, It()), l;
    if (l === 6) throw Error(_(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, bu(n, ia, Gi), ar(n, It()), null;
  }
  function of(n, r) {
    var l = wt;
    wt |= 1;
    try {
      return n(r);
    } finally {
      wt = l, wt === 0 && (So = It() + 500, ds && Mr());
    }
  }
  function Ru(n) {
    Ol !== null && Ol.tag === 0 && !(wt & 6) && Ro();
    var r = wt;
    wt |= 1;
    var l = Dr.transition, o = Lt;
    try {
      if (Dr.transition = null, Lt = 1, n) return n();
    } finally {
      Lt = o, Dr.transition = l, wt = r, !(wt & 6) && Mr();
    }
  }
  function Bd() {
    Ea = yo.current, nn(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Ov(l)), An !== null) for (l = An.return; l !== null; ) {
      var o = l;
      switch (_c(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), nn(Bn), nn(On), gs();
          break;
        case 5:
          wd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          nn(bn);
          break;
        case 19:
          nn(bn);
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
    if (Qn = n, An = n = Nl(n.current, null), vr = Ea = r, Xn = 0, gu = null, Ms = Eu = Su = 0, ia = go = null, su !== null) {
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
      var l = An;
      try {
        if (Sd(), je.current = Kt, Dc) {
          for (var o = it.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (kt = 0, qn = rn = it = null, Ss = !1, Es = 0, yu.current = null, l === null || l.return === null) {
          Xn = 1, gu = r, An = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = vr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, J = E, ee = J.tag;
            if (!(J.mode & 1) && (ee === 0 || ee === 11 || ee === 15)) {
              var G = J.alternate;
              G ? (J.updateQueue = G.updateQueue, J.memoizedState = G.memoizedState, J.lanes = G.lanes) : (J.updateQueue = null, J.memoizedState = null);
            }
            var Ee = Md(m);
            if (Ee !== null) {
              Ee.flags &= -257, Qv(Ee, m, E, d, r), Ee.mode & 1 && Nd(d, U, r), r = Ee, T = U;
              var xe = r.updateQueue;
              if (xe === null) {
                var Le = /* @__PURE__ */ new Set();
                Le.add(T), r.updateQueue = Le;
              } else xe.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, U, r), $d();
                break e;
              }
              T = Error(_(426));
            }
          } else if (En && E.mode & 1) {
            var jn = Md(m);
            if (jn !== null) {
              !(jn.flags & 65536) && (jn.flags |= 256), Qv(jn, m, E, d, r), vs(xl(T, E));
              break e;
            }
          }
          d = T = xl(T, E), Xn !== 4 && (Xn = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = ws(d, T, r);
                Hv(d, D);
                break e;
              case 1:
                E = T;
                var w = d.type, N = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Pa === null || !Pa.has(N)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var re = Iv(d, E, r);
                  Hv(d, re);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        ih(l);
      } catch (Ne) {
        r = Ne, An === l && l !== null && (An = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ah() {
    var n = lf.current;
    return lf.current = Kt, n === null ? Kt : n;
  }
  function $d() {
    (Xn === 0 || Xn === 3 || Xn === 2) && (Xn = 4), Qn === null || !(Su & 268435455) && !(Eu & 268435455) || Ll(Qn, vr);
  }
  function cf(n, r) {
    var l = wt;
    wt |= 2;
    var o = ah();
    (Qn !== n || vr !== r) && (Gi = null, Tu(n, r));
    do
      try {
        sy();
        break;
      } catch (c) {
        sf(n, c);
      }
    while (!0);
    if (Sd(), wt = l, lf.current = o, An !== null) throw Error(_(261));
    return Qn = null, vr = 0, Xn;
  }
  function sy() {
    for (; An !== null; ) Yd(An);
  }
  function cy() {
    for (; An !== null && !br(); ) Yd(An);
  }
  function Yd(n) {
    var r = Qd(n.alternate, n, Ea);
    n.memoizedProps = n.pendingProps, r === null ? ih(n) : An = r, yu.current = null;
  }
  function ih(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Xv(l, r), l !== null) {
          l.flags &= 32767, An = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Xn = 6, An = null;
          return;
        }
      } else if (l = jd(l, r, Ea), l !== null) {
        An = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        An = r;
        return;
      }
      An = r = n;
    } while (r !== null);
    Xn === 0 && (Xn = 5);
  }
  function bu(n, r, l) {
    var o = Lt, c = Dr.transition;
    try {
      Dr.transition = null, Lt = 1, fy(n, r, l, o);
    } finally {
      Dr.transition = c, Lt = o;
    }
    return null;
  }
  function fy(n, r, l, o) {
    do
      Ro();
    while (Ol !== null);
    if (wt & 6) throw Error(_(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(_(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Qo(n, d), n === Qn && (An = Qn = null, vr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || uf || (uf = !0, oh(Ui, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dr.transition, Dr.transition = null;
      var m = Lt;
      Lt = 1;
      var E = wt;
      wt |= 4, yu.current = null, oy(n, l), Zv(l, n), Cv(ss), dl = !!ru, ss = ru = null, n.current = l, Ls(l), Xa(), wt = E, Lt = m, Dr.transition = d;
    } else n.current = l;
    if (uf && (uf = !1, Ol = n, Us = c), d = n.pendingLanes, d === 0 && (Pa = null), Yo(l.stateNode), ar(n, It()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = zs, zs = null, n;
    return Us & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Ol !== null) {
      var n = qo(Us), r = Dr.transition, l = Lt;
      try {
        if (Dr.transition = null, Lt = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, Us = 0, wt & 6) throw Error(_(331));
          var c = wt;
          for (wt |= 4, _e = n.current; _e !== null; ) {
            var d = _e, m = d.child;
            if (_e.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (_e = U; _e !== null; ) {
                    var J = _e;
                    switch (J.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, J, d);
                    }
                    var ee = J.child;
                    if (ee !== null) ee.return = J, _e = ee;
                    else for (; _e !== null; ) {
                      J = _e;
                      var G = J.sibling, Ee = J.return;
                      if (Kv(J), J === U) {
                        _e = null;
                        break;
                      }
                      if (G !== null) {
                        G.return = Ee, _e = G;
                        break;
                      }
                      _e = Ee;
                    }
                  }
                }
                var xe = d.alternate;
                if (xe !== null) {
                  var Le = xe.child;
                  if (Le !== null) {
                    xe.child = null;
                    do {
                      var jn = Le.sibling;
                      Le.sibling = null, Le = jn;
                    } while (Le !== null);
                  }
                }
                _e = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, _e = m;
            else e: for (; _e !== null; ) {
              if (d = _e, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, _e = D;
                break e;
              }
              _e = d.return;
            }
          }
          var w = n.current;
          for (_e = w; _e !== null; ) {
            m = _e;
            var N = m.child;
            if (m.subtreeFlags & 2064 && N !== null) N.return = m, _e = N;
            else e: for (m = w; _e !== null; ) {
              if (E = _e, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    nf(9, E);
                }
              } catch (Ne) {
                Ln(E, E.return, Ne);
              }
              if (E === m) {
                _e = null;
                break e;
              }
              var re = E.sibling;
              if (re !== null) {
                re.return = E.return, _e = re;
                break e;
              }
              _e = E.return;
            }
          }
          if (wt = c, Mr(), qr && typeof qr.onPostCommitFiberRoot == "function") try {
            qr.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Lt = l, Dr.transition = r;
      }
    }
    return !1;
  }
  function lh(n, r, l) {
    r = xl(l, r), r = ws(n, r, 1), n = Tl(n, r, 1), r = cn(), n !== null && (fl(n, 1, r), ar(n, r));
  }
  function Ln(n, r, l) {
    if (n.tag === 3) lh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        lh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Pa === null || !Pa.has(o))) {
          n = xl(l, n), n = Iv(r, n, 1), r = Tl(r, n, 1), n = cn(), r !== null && (fl(r, 1, n), ar(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Id(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = cn(), n.pingedLanes |= n.suspendedLanes & l, Qn === n && (vr & l) === l && (Xn === 4 || Xn === 3 && (vr & 130023424) === vr && 500 > It() - Vd ? Tu(n, 0) : Ms |= l), ar(n, r);
  }
  function uh(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = cn();
    n = Ei(n, r), n !== null && (fl(n, r, l), ar(n, l));
  }
  function dy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), uh(n, l);
  }
  function py(n, r) {
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
        throw Error(_(314));
    }
    o !== null && o.delete(r), uh(n, l);
  }
  var Qd;
  Qd = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Bn.current) rr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return rr = !1, tf(n, r, l);
      rr = !!(n.flags & 131072);
    }
    else rr = !1, En && r.flags & 1048576 && Nv(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Fa(n, r), n = r.pendingProps;
        var c = ma(r, On.current);
        lo(r, l), c = We(null, r, o, n, c, l);
        var d = bl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, $n(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Qc, r.stateNode = c, c._reactInternals = r, Od(r, o, n, l), r = zd(null, r, o, !0, d, l)) : (r.tag = 0, En && d && pd(r), Un(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Fa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = hy(o), n = na(o, n), c) {
            case 0:
              r = Xc(null, r, o, n, l);
              break e;
            case 1:
              r = ly(null, r, o, n, l);
              break e;
            case 11:
              r = Gc(null, r, o, n, l);
              break e;
            case 14:
              r = ra(null, r, o, na(o.type, n), l);
              break e;
          }
          throw Error(_(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Xc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), ly(n, r, o, c, l);
      case 3:
        e: {
          if (Kc(r), n === null) throw Error(_(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Fv(n, r), xc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = xl(Error(_(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = xl(Error(_(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (ea = ei(r.stateNode.containerInfo.firstChild), Zr = r, En = !0, ni = null, l = fr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), o === c) {
              r = dr(n, r, l);
              break e;
            }
            Un(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return _d(r), n === null && yd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), xs(n, r), Un(n, r, m, l), r.child;
      case 6:
        return n === null && yd(r), null;
      case 13:
        return Wv(n, r, l);
      case 4:
        return bd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : Un(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Gc(n, r, o, c, l);
      case 7:
        return Un(n, r, r.pendingProps, l), r.child;
      case 8:
        return Un(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Un(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, sn(se, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !Bn.current) {
              r = dr(n, r, l);
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
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var J = U.pending;
                      J === null ? T.next = T : (T.next = J.next, J.next = T), U.pending = T;
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
              if (m = d.return, m === null) throw Error(_(341));
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
          Un(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = Xt(c), o = o(c), r.flags |= 1, Un(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = na(o, r.pendingProps), c = na(o.type, c), ra(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : na(o, c), Fa(n, r), r.tag = 1, $n(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Yv(r, o, c), Od(r, o, c, l), zd(null, r, o, !0, n, l);
      case 19:
        return aa(n, r, l);
      case 22:
        return st(n, r, l);
    }
    throw Error(_(156, r.tag));
  };
  function oh(n, r) {
    return dn(n, r);
  }
  function vy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Va(n, r, l, o) {
    return new vy(n, r, l, o);
  }
  function Wd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function hy(n) {
    if (typeof n == "function") return Wd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === At) return 11;
      if (n === Pt) return 14;
    }
    return 2;
  }
  function Nl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Va(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function ff(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Wd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case mt:
        return Ml(l.children, c, d, r);
      case Ge:
        m = 8, c |= 8;
        break;
      case pn:
        return n = Va(12, l, r, c | 2), n.elementType = pn, n.lanes = d, n;
      case Tt:
        return n = Va(13, l, r, c), n.elementType = Tt, n.lanes = d, n;
      case Ve:
        return n = Va(19, l, r, c), n.elementType = Ve, n.lanes = d, n;
      case ft:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ut:
            m = 10;
            break e;
          case un:
            m = 9;
            break e;
          case At:
            m = 11;
            break e;
          case Pt:
            m = 14;
            break e;
          case St:
            m = 16, o = null;
            break e;
        }
        throw Error(_(130, n == null ? n : typeof n, ""));
    }
    return r = Va(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Va(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Va(22, n, o, r), n.elementType = ft, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function _u(n, r, l) {
    return n = Va(6, n, null, r), n.lanes = l, n;
  }
  function qd(n, r, l) {
    return r = Va(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function sh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function df(n, r, l, o, c, d, m, E, T) {
    return n = new sh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Va(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function ch(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Oe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function fh(n) {
    if (!n) return Ct;
    n = n._reactInternals;
    e: {
      if (pe(n) !== n || n.tag !== 1) throw Error(_(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if ($n(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(_(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if ($n(l)) return Lv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = df(l, o, !0, n, c, d, m, E, T), n.context = fh(null), l = n.current, o = cn(), c = Ca(l), d = Wi(o, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, fl(n, c, o), ar(n, o), n;
  }
  function pf(n, r, l, o) {
    var c = r.current, d = cn(), m = Ca(c);
    return l = fh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Wi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Tl(c, r, m), n !== null && (Ra(n, c, m, d), wc(n, c, m)), m;
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
  function dh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function hf(n, r) {
    dh(n, r), (n = n.alternate) && dh(n, r);
  }
  var Xd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function mf(n) {
    this._internalRoot = n;
  }
  Xi.prototype.render = mf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(_(409));
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
  function ph() {
  }
  function my(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = vf(m);
          d.call(U);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", ph);
      return n._reactRootContainer = m, n[Yi] = m.current, us(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = vf(T);
        E.call(U);
      };
    }
    var T = df(n, 0, !1, null, null, !1, !1, "", ph);
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
    } else m = my(l, r, n, c, o);
    return vf(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Gr(r.pendingLanes);
          l !== 0 && (Wo(r, l | 1), ar(r, It()), !(wt & 6) && (So = It() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = cn();
            Ra(o, n, 1, c);
          }
        }), hf(n, 1);
    }
  }, Nt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = cn();
        Ra(r, n, 134217728, l);
      }
      hf(n, 134217728);
    }
  }, oc = function(n) {
    if (n.tag === 13) {
      var r = Ca(n), l = Ei(n, r);
      if (l !== null) {
        var o = cn();
        Ra(l, n, r, o);
      }
      hf(n, r);
    }
  }, vi = function() {
    return Lt;
  }, et = function(n, r) {
    var l = Lt;
    try {
      return Lt = n, r();
    } finally {
      Lt = l;
    }
  }, Jt = function(n, r, l) {
    switch (r) {
      case "input":
        if (wn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(_(90));
              yt(o), wn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Tr(n, l);
        break;
      case "select":
        r = l.value, r != null && jt(n, !!l.multiple, r, !1);
    }
  }, Il = of, Ql = Ru;
  var yy = { usingClientEntryPoint: !1, Events: [fs, Ae, Ii, Da, Ni, of] }, bo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, gy = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $e.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = vt(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: bo.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Sf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Sf.isDisabled && Sf.supportsFiber) try {
      ol = Sf.inject(gy), qr = Sf;
    } catch {
    }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy, Wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Kd(r)) throw Error(_(200));
    return ch(n, r, null, l);
  }, Wa.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(_(299));
    var l = !1, o = "", c = Xd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = df(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, us(n.nodeType === 8 ? n.parentNode : n), new mf(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(_(188)) : (n = Object.keys(n).join(","), Error(_(268, n)));
    return n = vt(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Ru(n);
  }, Wa.hydrate = function(n, r, l) {
    if (!yf(r)) throw Error(_(200));
    return gf(null, n, r, !0, l);
  }, Wa.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(_(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Xd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, us(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Xi(r);
  }, Wa.render = function(n, r, l) {
    if (!yf(r)) throw Error(_(200));
    return gf(null, n, r, !1, l);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!yf(n)) throw Error(_(40));
    return n._reactRootContainer ? (Ru(function() {
      gf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = of, Wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!yf(l)) throw Error(_(200));
    if (n == null || n._reactInternals === void 0) throw Error(_(38));
    return gf(n, r, l, !1, o);
  }, Wa.version = "18.3.1-next-f1338f8080-20240426", Wa;
}
var qa = {}, uT;
function dk() {
  if (uT) return qa;
  uT = 1;
  var F = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return F.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var W = Ht, _ = cT(), ve = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ye = !1;
    function qe(e) {
      ye = e;
    }
    function Me(e) {
      if (!ye) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ie("warn", e, a);
      }
    }
    function S(e) {
      if (!ye) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ie("error", e, a);
      }
    }
    function Ie(e, t, a) {
      {
        var i = ve.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ge = 0, X = 1, ie = 2, j = 3, ne = 4, K = 5, fe = 6, Te = 7, kn = 8, lt = 9, ct = 10, $e = 11, Ot = 12, Oe = 13, mt = 14, Ge = 15, pn = 16, Ut = 17, un = 18, At = 19, Tt = 21, Ve = 22, Pt = 23, St = 24, ft = 25, I = !0, be = !1, oe = !1, k = !1, Y = !1, ze = !0, Qe = !0, Xe = !0, ut = !0, Q = /* @__PURE__ */ new Set(), Z = {}, he = {};
    function Ye(e, t) {
      dt(e, t), dt(e + "Capture", t);
    }
    function dt(e, t) {
      Z[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Z[e] = t;
      {
        var a = e.toLowerCase();
        he[a] = e, e === "onDoubleClick" && (he.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Q.add(t[i]);
    }
    var yt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", gt = Object.prototype.hasOwnProperty;
    function Qt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function vn(e) {
      try {
        return hn(e), !1;
      } catch {
        return !0;
      }
    }
    function hn(e) {
      return "" + e;
    }
    function wn(e, t) {
      if (vn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Qt(e)), hn(e);
    }
    function Ir(e) {
      if (vn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qt(e)), hn(e);
    }
    function fa(e, t) {
      if (vn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Qt(e)), hn(e);
    }
    function ur(e, t) {
      if (vn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Qt(e)), hn(e);
    }
    function jt(e) {
      if (vn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Qt(e)), hn(e);
    }
    function Rn(e) {
      if (vn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Qt(e)), hn(e);
    }
    var Jn = 0, Tr = 1, Ga = 2, Hn = 3, or = 4, Qr = 5, Li = 6, da = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = da + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Pe = new RegExp("^[" + da + "][" + le + "]*$"), pt = {}, $t = {};
    function mn(e) {
      return gt.call($t, e) ? !0 : gt.call(pt, e) ? !1 : Pe.test(e) ? ($t[e] = !0, !0) : (pt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function yn(e, t, a) {
      return t !== null ? t.type === Jn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gn(e, t, a, i) {
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
      if (t === null || typeof t > "u" || gn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Hn:
            return !t;
          case or:
            return t === !1;
          case Qr:
            return isNaN(t);
          case Li:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function fn(e) {
      return Yt.hasOwnProperty(e) ? Yt[e] : null;
    }
    function Jt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === Hn || t === or, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Yt = {}, pa = [
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
    pa.forEach(function(e) {
      Yt[e] = new Jt(
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
      Yt[t] = new Jt(
        t,
        Tr,
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
      Yt[e] = new Jt(
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
      Yt[e] = new Jt(
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
      Yt[e] = new Jt(
        e,
        Hn,
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
      Yt[e] = new Jt(
        e,
        Hn,
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
      Yt[e] = new Jt(
        e,
        or,
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
      Yt[e] = new Jt(
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
      Yt[e] = new Jt(
        e,
        Qr,
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
    var ka = /[\-\:]([a-z])/g, Da = function(e) {
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
      var t = e.replace(ka, Da);
      Yt[t] = new Jt(
        t,
        Tr,
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
      var t = e.replace(ka, Da);
      Yt[t] = new Jt(
        t,
        Tr,
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
      var t = e.replace(ka, Da);
      Yt[t] = new Jt(
        t,
        Tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Yt[e] = new Jt(
        e,
        Tr,
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
    Yt[Ni] = new Jt(
      "xlinkHref",
      Tr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Yt[e] = new Jt(
        e,
        Tr,
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
        wn(a, t), i.sanitizeURL && Mi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === or) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Zn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Zn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Hn)
            return a;
          f = e.getAttribute(s);
        }
        return Zn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!mn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return wn(a, t), u === "" + a ? a : u;
      }
    }
    function va(e, t, a, i) {
      var u = fn(t);
      if (!yn(t, u, i)) {
        if (Zn(t, a, u, i) && (a = null), i || u === null) {
          if (mn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (wn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Hn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, b;
          x === Hn || x === or && a === !0 ? b = "" : (wn(a, y), b = "" + a, u.sanitizeURL && Mi(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var sr = Symbol.for("react.element"), ha = Symbol.for("react.portal"), Wr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), R = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), pe = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), bt = Symbol.for("react.scope"), vt = Symbol.for("react.debug_trace_mode"), Nn = Symbol.for("react.offscreen"), dn = Symbol.for("react.legacy_hidden"), Sn = Symbol.for("react.cache"), br = Symbol.for("react.tracing_marker"), Xa = Symbol.iterator, It = "@@iterator";
    function Tn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Xa && e[Xa] || e[It];
      return typeof t == "function" ? t : null;
    }
    var at = Object.assign, di = 0, Ui, ic, Ai, ol, qr, Yo, Or;
    function Io() {
    }
    Io.__reactDisabledLog = !0;
    function lc() {
      {
        if (di === 0) {
          Ui = console.log, ic = console.info, Ai = console.warn, ol = console.error, qr = console.group, Yo = console.groupCollapsed, Or = console.groupEnd;
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
            log: at({}, e, {
              value: Ui
            }),
            info: at({}, e, {
              value: ic
            }),
            warn: at({}, e, {
              value: Ai
            }),
            error: at({}, e, {
              value: ol
            }),
            group: at({}, e, {
              value: qr
            }),
            groupCollapsed: at({}, e, {
              value: Yo
            }),
            groupEnd: at({}, e, {
              value: Or
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = ve.ReactCurrentDispatcher, sl;
    function Gr(e, t, a) {
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
            } catch (A) {
              i = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              i = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            i = A;
          }
          e();
        }
      } catch (A) {
        if (A && i && typeof A.stack == "string") {
          for (var p = A.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && cl.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pi = !1, ji.current = s, uc(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", z = b ? Gr(b) : "";
      return typeof e == "function" && cl.set(e, z), z;
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
        return Gr(e);
      switch (e) {
        case ce:
          return Gr("Suspense");
        case pe:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return Gl(e.render);
          case Et:
            return Qo(e.type, t, a);
          case tt: {
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
        case K:
          return Gr(e.type);
        case pn:
          return Gr("Lazy");
        case Oe:
          return Gr("Suspense");
        case At:
          return Gr("SuspenseList");
        case ge:
        case ie:
        case Ge:
          return Gl(e.type);
        case $e:
          return Gl(e.type.render);
        case X:
          return ql(e.type);
        default:
          return "";
      }
    }
    function Lt(e) {
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
    function Nt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Wr:
          return "Fragment";
        case ha:
          return "Portal";
        case fi:
          return "Profiler";
        case ci:
          return "StrictMode";
        case ce:
          return "Suspense";
        case pe:
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
          case q:
            return qo(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : Nt(e.type) || "Memo";
          case tt: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Nt(f(s));
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
    function et(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case St:
          return "Cache";
        case lt:
          var i = a;
          return vi(i) + ".Consumer";
        case ct:
          var u = a;
          return vi(u._context) + ".Provider";
        case un:
          return "DehydratedFragment";
        case $e:
          return oc(a, a.render, "ForwardRef");
        case Te:
          return "Fragment";
        case K:
          return a;
        case ne:
          return "Portal";
        case j:
          return "Root";
        case fe:
          return "Text";
        case pn:
          return Nt(a);
        case kn:
          return a === ci ? "StrictMode" : "Mode";
        case Ve:
          return "Offscreen";
        case Ot:
          return "Profiler";
        case Tt:
          return "Scope";
        case Oe:
          return "Suspense";
        case At:
          return "SuspenseList";
        case ft:
          return "TracingMarker";
        case X:
        case ge:
        case Ut:
        case ie:
        case mt:
        case Ge:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xl = ve.ReactDebugCurrentFrame, er = null, Xr = !1;
    function Lr() {
      {
        if (er === null)
          return null;
        var e = er._debugOwner;
        if (e !== null && typeof e < "u")
          return et(e);
      }
      return null;
    }
    function hi() {
      return er === null ? "" : Lt(er);
    }
    function Dn() {
      Xl.getCurrentStack = null, er = null, Xr = !1;
    }
    function Zt(e) {
      Xl.getCurrentStack = e === null ? null : hi, er = e, Xr = !1;
    }
    function Ka() {
      return er;
    }
    function Oa(e) {
      Xr = e;
    }
    function _r(e) {
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
          return Rn(e), e;
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
    function La(e) {
      var t = Kl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Rn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Rn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Rn(p), i = "" + p;
          },
          stopTracking: function() {
            Bu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Na(e) {
      Vu(e) || (e._valueTracker = La(e));
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
    function Ma(e, t) {
      var a = e, i = t.checked, u = at({}, t, {
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
      i != null && va(a, "checked", i, !1);
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
        a.value != u) && (a.value = _r(u)) : a.value !== _r(u) && (a.value = _r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? we(a, t.type, u) : t.hasOwnProperty("defaultValue") && we(a, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function M(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = _r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function H(e, t) {
      var a = e;
      C(a, t), ae(a, t);
    }
    function ae(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        wn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Oh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            dl(f), C(f, p);
          }
        }
      }
    }
    function we(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = _r(e._wrapperState.initialValue) : e.defaultValue !== _r(a) && (e.defaultValue = _r(a)));
    }
    var Se = !1, Ke = !1, ht = !1;
    function Wt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? W.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ke || (Ke = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ht || (ht = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Se && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Se = !0);
    }
    function en(e, t) {
      t.value != null && e.setAttribute("value", _r(Nr(t.value)));
    }
    var tn = Array.isArray;
    function ot(e) {
      return tn(e);
    }
    var on;
    on = !1;
    function Mn() {
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
            var i = ot(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Mn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Mn());
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
        for (var g = _r(Nr(a)), x = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          x === null && !u[b].disabled && (x = u[b]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function eu(e, t) {
      return at({}, t, {
        value: void 0
      });
    }
    function Ko(e, t) {
      var a = e;
      Xo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !on && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), on = !0);
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
    var tv = !1;
    function cc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = at({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: _r(a._wrapperState.initialValue)
      });
      return i;
    }
    function nv(e, t) {
      var a = e;
      Pu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !tv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Lr() || "A component"), tv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ot(u)) {
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
    function rv(e, t) {
      var a = e, i = Nr(t.value), u = Nr(t.defaultValue);
      if (i != null) {
        var s = _r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = _r(u));
    }
    function av(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Qm(e, t) {
      rv(e, t);
    }
    var Ja = "http://www.w3.org/1999/xhtml", Wm = "http://www.w3.org/1998/Math/MathML", Zf = "http://www.w3.org/2000/svg";
    function ed(e) {
      switch (e) {
        case "svg":
          return Zf;
        case "math":
          return Wm;
        default:
          return Ja;
      }
    }
    function fc(e, t) {
      return e == null || e === Ja ? ed(t) : e === Zf && t === "foreignObject" ? Ja : e;
    }
    var qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, dc, iv = qm(function(e, t) {
      if (e.namespaceURI === Zf && !("innerHTML" in e)) {
        dc = dc || document.createElement("div"), dc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = dc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Kr = 1, Bi = 3, Pn = 8, $i = 9, Jo = 11, vl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Gm = {
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
    function lv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var uv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Qu).forEach(function(e) {
      uv.forEach(function(t) {
        Qu[lv(t, e)] = Qu[e];
      });
    });
    function pc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Qu.hasOwnProperty(e) && Qu[e]) ? t + "px" : (ur(t, e), ("" + t).trim());
    }
    var ov = /([A-Z])/g, Wu = /^ms-/;
    function Xm(e) {
      return e.replace(ov, "-$1").toLowerCase().replace(Wu, "-ms-");
    }
    var sv = function() {
    };
    {
      var Km = /^(?:webkit|moz|o)[A-Z]/, cv = /^-ms-/, fv = /-(.)/g, qu = /;\s*$/, mi = {}, td = {}, Zo = !1, dv = !1, pv = function(e) {
        return e.replace(fv, function(t, a) {
          return a.toUpperCase();
        });
      }, nd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          pv(e.replace(cv, "ms-"))
        ));
      }, rd = function(e) {
        mi.hasOwnProperty(e) && mi[e] || (mi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, vv = function(e, t) {
        td.hasOwnProperty(t) && td[t] || (td[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(qu, "")));
      }, hv = function(e, t) {
        Zo || (Zo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mv = function(e, t) {
        dv || (dv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sv = function(e, t) {
        e.indexOf("-") > -1 ? nd(e) : Km.test(e) ? rd(e) : qu.test(t) && vv(e, t), typeof t == "number" && (isNaN(t) ? hv(e, t) : isFinite(t) || mv(e, t));
      };
    }
    var Jm = sv;
    function Zm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Xm(i)) + ":", t += pc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function yv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Jm(i, t[i]);
          var s = pc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ey(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function gv(e) {
      var t = {};
      for (var a in e)
        for (var i = Gm[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Za(e, t) {
      {
        if (!t)
          return;
        var a = gv(e), i = gv(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ey(e[f]) ? "Removing" : "Updating", f, p);
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
    }, Sv = at({
      menuitem: !0
    }, es), Ev = "__html";
    function vc(e, t) {
      if (t) {
        if (Sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Ev in t.dangerouslySetInnerHTML))
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
    }, Cv = {
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
    }, Xu = {}, Ku = new RegExp("^(aria)-[" + le + "]*$"), ad = new RegExp("^(aria)[A-Z][" + le + "]*$");
    function ts(e, t) {
      {
        if (gt.call(Xu, t) && Xu[t])
          return !0;
        if (ad.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Cv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Xu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Xu[t] = !0, !0;
        }
        if (Ku.test(t)) {
          var u = t.toLowerCase(), s = Cv.hasOwnProperty(u) ? u : null;
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
    function Rv(e, t) {
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
      var wr = {}, rs = /^on./, Tv = /^on[^A-Z]/, bv = new RegExp("^(aria)-[" + le + "]*$"), _v = new RegExp("^(aria)[A-Z][" + le + "]*$");
      hc = function(e, t, a, i) {
        if (gt.call(wr, t) && wr[t])
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
          return Tv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), wr[t] = !0, !0;
        if (bv.test(t) || _v.test(t))
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
        return typeof a == "boolean" && gn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : gn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Hn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
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
    function xv(e, t, a) {
      hl(e, t) || wv(e, t, a);
    }
    var ld = 1, yi = 2, tu = 4, ud = ld | yi | tu, as = null;
    function ty(e) {
      as !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), as = e;
    }
    function is() {
      as === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), as = null;
    }
    function ny(e) {
      return e === as;
    }
    function mc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var yc = null, qt = null, ml = null;
    function ls(e) {
      var t = xo(e);
      if (t) {
        if (typeof yc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Oh(a);
          yc(t.stateNode, t.type, i);
        }
      }
    }
    function us(e) {
      yc = e;
    }
    function od(e) {
      qt ? ml ? ml.push(e) : ml = [e] : qt = e;
    }
    function sd() {
      return qt !== null || ml !== null;
    }
    function Zu() {
      if (qt) {
        var e = qt, t = ml;
        if (qt = null, ml = null, ls(e), t)
          for (var a = 0; a < t.length; a++)
            ls(t[a]);
      }
    }
    var os = function(e, t) {
      return e(t);
    }, nu = function() {
    }, gc = !1;
    function ry() {
      var e = sd();
      e && (nu(), Zu());
    }
    function kv(e, t, a) {
      if (gc)
        return e(t, a);
      gc = !0;
      try {
        return os(e, t, a);
      } finally {
        gc = !1, ry();
      }
    }
    function Dv(e, t, a) {
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
      var i = Oh(a);
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
    if (yt)
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
    var Ov = Cc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Rc = document.createElement("react");
      Ov = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, b = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          Rc.removeEventListener(V, Be, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function Be() {
          x = !0, P(), a.apply(i, de), b = !1;
        }
        var Ue, zt = !1, xt = !1;
        function O(L) {
          if (Ue = L.error, zt = !0, Ue === null && L.colno === 0 && L.lineno === 0 && (xt = !0), L.defaultPrevented && Ue != null && typeof Ue == "object")
            try {
              Ue._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), Rc.addEventListener(V, Be, !1), g.initEvent(V, !1, !1), Rc.dispatchEvent(g), A && Object.defineProperty(window, "event", A), x && b && (zt ? xt && (Ue = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ue = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ue)), window.removeEventListener("error", O), !x)
          return P(), Cc.apply(this, arguments);
      };
    }
    var ay = Ov, eo = !1, to = null, ei = !1, Tc = null, no = {
      onError: function(e) {
        eo = !0, to = e;
      }
    };
    function za(e, t, a, i, u, s, f, p, v) {
      eo = !1, to = null, ay.apply(no, arguments);
    }
    function cs(e, t, a, i, u, s, f, p, v) {
      if (za.apply(this, arguments), eo) {
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
    var Ae = (
      /*                      */
      0
    ), Ii = (
      /*                */
      1
    ), Vn = (
      /*                    */
      2
    ), _t = (
      /*                       */
      4
    ), Jr = (
      /*                */
      16
    ), nn = (
      /*                 */
      32
    ), sn = (
      /*                     */
      64
    ), Ct = (
      /*                   */
      128
    ), On = (
      /*            */
      256
    ), Bn = (
      /*                          */
      512
    ), Ua = (
      /*                     */
      1024
    ), ma = (
      /*                      */
      2048
    ), $n = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), bc = (
      /*             */
      16384
    ), Lv = (
      /*               */
      32767
    ), lu = (
      /*                   */
      32768
    ), Aa = (
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
      _t | Ua | 0
    ), ao = Vn | _t | Jr | nn | Bn | $n | gi, El = _t | sn | Bn | gi, cr = ma | Jr, Yn = yl | dd | ps, uu = ve.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Vn | $n)) !== Ae && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === j ? a : null;
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
      return e.tag === j ? e.stateNode.containerInfo : null;
    }
    function Nv(e) {
      return zr(e) === e;
    }
    function pd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === X) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", et(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = ro(e);
      return u ? zr(u) === u : !1;
    }
    function _c(e) {
      if (zr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Zr(e) {
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
              return _c(s), e;
            if (v === u)
              return _c(s), t;
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
      if (i.tag !== j)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ea(e) {
      var t = Zr(e);
      return t !== null ? En(t) : null;
    }
    function En(e) {
      if (e.tag === K || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = En(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ni(e) {
      var t = Zr(e);
      return t !== null ? vd(t) : null;
    }
    function vd(e) {
      if (e.tag === K || e.tag === fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ne) {
          var a = vd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var hd = _.unstable_scheduleCallback, md = _.unstable_cancelCallback, yd = _.unstable_shouldYield, Mv = _.unstable_requestPaint, zn = _.unstable_now, zv = _.unstable_getCurrentPriorityLevel, Qi = _.unstable_ImmediatePriority, vs = _.unstable_UserBlockingPriority, ou = _.unstable_NormalPriority, hs = _.unstable_LowPriority, io = _.unstable_IdlePriority, Uv = _.unstable_yieldValue, Av = _.unstable_setDisableYieldValue, ri = null, fr = null, se = null, ya = !1, xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Qe && (e = at({}, e, {
          getLaneLabelMap: Rd,
          injectProfilingHooks: su
        })), ri = t.inject(e), fr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Sd(e, t) {
      if (fr && typeof fr.onScheduleFiberRoot == "function")
        try {
          fr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ed(e, t) {
      if (fr && typeof fr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ct) === Ct;
          if (Xe) {
            var i;
            switch (t) {
              case aa:
                i = Qi;
                break;
              case Fa:
                i = vs;
                break;
              case dr:
                i = ou;
                break;
              case tf:
                i = io;
                break;
              default:
                i = ou;
                break;
            }
            fr.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (u) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Cd(e) {
      if (fr && typeof fr.onPostCommitFiberRoot == "function")
        try {
          fr.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (fr && typeof fr.onCommitFiberUnmount == "function")
        try {
          fr.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Xt(e) {
      if (typeof Uv == "function" && (Av(e), qe(e)), fr && typeof fr.setStrictMode == "function")
        try {
          fr.setStrictMode(ri, e);
        } catch (t) {
          ya || (ya = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      se = e;
    }
    function Rd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < kd; a++) {
          var i = Bv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function jv(e) {
      se !== null && typeof se.markCommitStarted == "function" && se.markCommitStarted(e);
    }
    function Ei() {
      se !== null && typeof se.markCommitStopped == "function" && se.markCommitStopped();
    }
    function ja(e) {
      se !== null && typeof se.markComponentRenderStarted == "function" && se.markComponentRenderStarted(e);
    }
    function Rl() {
      se !== null && typeof se.markComponentRenderStopped == "function" && se.markComponentRenderStopped();
    }
    function Fv(e) {
      se !== null && typeof se.markComponentPassiveEffectMountStarted == "function" && se.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      se !== null && typeof se.markComponentPassiveEffectMountStopped == "function" && se.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      se !== null && typeof se.markComponentPassiveEffectUnmountStarted == "function" && se.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      se !== null && typeof se.markComponentPassiveEffectUnmountStopped == "function" && se.markComponentPassiveEffectUnmountStopped();
    }
    function Hv(e) {
      se !== null && typeof se.markComponentLayoutEffectMountStarted == "function" && se.markComponentLayoutEffectMountStarted(e);
    }
    function xc() {
      se !== null && typeof se.markComponentLayoutEffectMountStopped == "function" && se.markComponentLayoutEffectMountStopped();
    }
    function Td(e) {
      se !== null && typeof se.markComponentLayoutEffectUnmountStarted == "function" && se.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      se !== null && typeof se.markComponentLayoutEffectUnmountStopped == "function" && se.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      se !== null && typeof se.markComponentErrored == "function" && se.markComponentErrored(e, t, a);
    }
    function ms(e, t, a) {
      se !== null && typeof se.markComponentSuspended == "function" && se.markComponentSuspended(e, t, a);
    }
    function ys(e) {
      se !== null && typeof se.markLayoutEffectsStarted == "function" && se.markLayoutEffectsStarted(e);
    }
    function cu() {
      se !== null && typeof se.markLayoutEffectsStopped == "function" && se.markLayoutEffectsStopped();
    }
    function bd(e) {
      se !== null && typeof se.markPassiveEffectsStarted == "function" && se.markPassiveEffectsStarted(e);
    }
    function oo() {
      se !== null && typeof se.markPassiveEffectsStopped == "function" && se.markPassiveEffectsStopped();
    }
    function _d(e) {
      se !== null && typeof se.markRenderStarted == "function" && se.markRenderStarted(e);
    }
    function wd() {
      se !== null && typeof se.markRenderYielded == "function" && se.markRenderYielded();
    }
    function bn() {
      se !== null && typeof se.markRenderStopped == "function" && se.markRenderStopped();
    }
    function kc(e) {
      se !== null && typeof se.markRenderScheduled == "function" && se.markRenderScheduled(e);
    }
    function xd(e, t) {
      se !== null && typeof se.markForceUpdateScheduled == "function" && se.markForceUpdateScheduled(e, t);
    }
    function gs(e, t) {
      se !== null && typeof se.markStateUpdateScheduled == "function" && se.markStateUpdateScheduled(e, t);
    }
    var je = (
      /*                         */
      0
    ), Rt = (
      /*                 */
      1
    ), kt = (
      /*                    */
      2
    ), it = (
      /*               */
      8
    ), rn = (
      /*              */
      16
    ), qn = Math.clz32 ? Math.clz32 : Es, Dc = Math.log, Ss = Math.LN2;
    function Es(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / Ss | 0) | 0;
    }
    var kd = 31, B = (
      /*                        */
      0
    ), In = (
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
    ), ta = (
      /*                     */
      16
    ), fu = (
      /*                */
      32
    ), _l = (
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
    ), Pv = pu, po = (
      /*          */
      134217728
    ), Vv = (
      /*                          */
      268435455
    ), bs = (
      /*               */
      268435456
    ), wl = (
      /*                        */
      536870912
    ), ga = (
      /*                   */
      1073741824
    );
    function Bv(e) {
      {
        if (e & We)
          return "Sync";
        if (e & bl)
          return "InputContinuousHydration";
        if (e & tr)
          return "InputContinuous";
        if (e & nr)
          return "DefaultHydration";
        if (e & ta)
          return "Default";
        if (e & fu)
          return "TransitionHydration";
        if (e & _l)
          return "Transition";
        if (e & Rs)
          return "Retry";
        if (e & po)
          return "SelectiveHydration";
        if (e & bs)
          return "IdleHydration";
        if (e & wl)
          return "Idle";
        if (e & ga)
          return "Offscreen";
      }
    }
    var Kt = -1, Yc = so, Ic = pu;
    function _s(e) {
      switch (vu(e)) {
        case We:
          return We;
        case bl:
          return bl;
        case tr:
          return tr;
        case nr:
          return nr;
        case ta:
          return ta;
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
          return e & _l;
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
        case wl:
          return wl;
        case ga:
          return ga;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function na(e, t) {
      var a = e.pendingLanes;
      if (a === B)
        return B;
      var i = B, u = e.suspendedLanes, s = e.pingedLanes, f = a & Vv;
      if (f !== B) {
        var p = f & ~u;
        if (p !== B)
          i = _s(p);
        else {
          var v = f & s;
          v !== B && (i = _s(v));
        }
      } else {
        var y = a & ~u;
        y !== B ? i = _s(y) : s !== B && (i = _s(s));
      }
      if (i === B)
        return B;
      if (t !== B && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === B) {
        var g = vu(i), x = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ta && (x & _l) !== B
        )
          return t;
      }
      (i & tr) !== B && (i |= a & ta);
      var b = e.entangledLanes;
      if (b !== B)
        for (var z = e.entanglements, A = i & b; A > 0; ) {
          var P = Un(A), de = 1 << P;
          i |= z[P], A &= ~de;
        }
      return i;
    }
    function Dd(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = Un(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Qc(e, t) {
      switch (e) {
        case We:
        case bl:
        case tr:
          return t + 250;
        case nr:
        case ta:
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
          return Kt;
        case po:
        case bs:
        case wl:
        case ga:
          return Kt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function $v(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Un(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === B || (v & u) !== B) && (s[p] = Qc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Yv(e) {
      return _s(e.pendingLanes);
    }
    function Wc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== B ? t : t & ga ? ga : B;
    }
    function Od(e) {
      return (e & We) !== B;
    }
    function xl(e) {
      return (e & Vv) !== B;
    }
    function qc(e) {
      return (e & Rs) === e;
    }
    function Ld(e) {
      var t = We | tr | ta;
      return (e & t) === B;
    }
    function iy(e) {
      return (e & _l) === e;
    }
    function ws(e, t) {
      var a = bl | tr | nr | ta;
      return (t & a) !== B;
    }
    function Iv(e, t) {
      return (t & e.expiredLanes) !== B;
    }
    function Nd(e) {
      return (e & _l) !== B;
    }
    function Md() {
      var e = Yc;
      return Yc <<= 1, (Yc & _l) === B && (Yc = so), e;
    }
    function Qv() {
      var e = Ic;
      return Ic <<= 1, (Ic & Rs) === B && (Ic = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function rr(e) {
      return vu(e);
    }
    function Un(e) {
      return 31 - qn(e);
    }
    function Gc(e) {
      return Un(e);
    }
    function ra(e, t) {
      return (e & t) !== B;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function st(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Xc(e, t) {
      return e & t;
    }
    function ly(e) {
      return e;
    }
    function zd(e, t) {
      return e !== In && e < t ? e : t;
    }
    function Kc(e) {
      for (var t = [], a = 0; a < kd; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== wl && (e.suspendedLanes = B, e.pingedLanes = B);
      var i = e.eventTimes, u = Gc(t);
      i[u] = a;
    }
    function Ud(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Un(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function Jc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Wv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = B, e.pingedLanes = B, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Un(f), v = 1 << p;
        i[p] = B, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function ks(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Un(u), f = 1 << s;
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
        case ta:
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
        case wl:
          i = bs;
          break;
        default:
          i = In;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== In ? In : i;
    }
    function qv(e, t, a) {
      if (xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ad(e, t) {
      if (xr)
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
    var aa = We, Fa = tr, dr = ta, tf = wl, ho = In;
    function Sa() {
      return ho;
    }
    function Gn(e) {
      ho = e;
    }
    function Gv(e, t) {
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
    function kr(e, t) {
      return e > t ? e : t;
    }
    function jd(e, t) {
      return e !== 0 && e < t;
    }
    function Xv(e) {
      var t = vu(e);
      return jd(aa, t) ? jd(Fa, t) ? xl(t) ? dr : tf : Fa : aa;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var pr;
    function uy(e) {
      pr = e;
    }
    function _e(e) {
      pr(e);
    }
    var kl;
    function Fd(e) {
      kl = e;
    }
    var Hd;
    function oy(e) {
      Hd = e;
    }
    var mo;
    function nf(e) {
      mo = e;
    }
    var rf;
    function Kv(e) {
      rf = e;
    }
    var af = !1, Os = [], Ri = null, Ti = null, _n = null, Ur = /* @__PURE__ */ new Map(), Ha = /* @__PURE__ */ new Map(), qi = [], Jv = [
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
      return Jv.indexOf(e) > -1;
    }
    function Zv(e, t, a, i, u) {
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
          _n = null;
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
          Ha.delete(i);
          break;
        }
      }
    }
    function Ls(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Zv(t, a, i, u, s);
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
    function eh(e, t, a, i, u) {
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
          return _n = Ls(_n, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, Ls(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return Ha.set(x, Ls(Ha.get(x) || null, e, t, a, i, g)), !0;
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
          } else if (i === j) {
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
    function th(e) {
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
          ty(s), u.target.dispatchEvent(s), is();
        } else {
          var f = xo(i);
          return f !== null && kl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function nh(e, t, a) {
      Ns(e) && a.delete(t);
    }
    function lf() {
      af = !1, Ri !== null && Ns(Ri) && (Ri = null), Ti !== null && Ns(Ti) && (Ti = null), _n !== null && Ns(_n) && (_n = null), Ur.forEach(nh), Ha.forEach(nh);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, af || (af = !0, _.unstable_scheduleCallback(_.unstable_NormalPriority, lf)));
    }
    function Dr(e) {
      if (Os.length > 0) {
        yu(Os[0], e);
        for (var t = 1; t < Os.length; t++) {
          var a = Os[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && yu(Ri, e), Ti !== null && yu(Ti, e), _n !== null && yu(_n, e);
      var i = function(p) {
        return yu(p, e);
      };
      Ur.forEach(i), Ha.forEach(i);
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
    var wt = ve.ReactCurrentBatchConfig, Qn = !0;
    function An(e) {
      Qn = !!e;
    }
    function vr() {
      return Qn;
    }
    function Ea(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case aa:
          u = yo;
          break;
        case Fa:
          u = Xn;
          break;
        case dr:
        default:
          u = gu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = Sa(), s = wt.transition;
      wt.transition = null;
      try {
        Gn(aa), gu(e, t, a, i);
      } finally {
        Gn(u), wt.transition = s;
      }
    }
    function Xn(e, t, a, i) {
      var u = Sa(), s = wt.transition;
      wt.transition = null;
      try {
        Gn(Fa), gu(e, t, a, i);
      } finally {
        Gn(u), wt.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Qn && Su(e, t, a, i);
    }
    function Su(e, t, a, i) {
      var u = Ms(e, t, a, i);
      if (u === null) {
        wy(e, t, i, Eu, a), ii(e, i);
        return;
      }
      if (eh(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ii(e, i), t & tu && ai(e)) {
        for (; u !== null; ) {
          var s = xo(u);
          s !== null && _e(s);
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
          } else if (p === j) {
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
          return aa;
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
          return Fa;
        case "message": {
          var t = zv();
          switch (t) {
            case Qi:
              return aa;
            case vs:
              return Fa;
            case ou:
            case hs:
              return dr;
            case io:
              return tf;
            default:
              return dr;
          }
        }
        default:
          return dr;
      }
    }
    function ia(e, t, a) {
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
    var Dl = null, zs = null, Pa = null;
    function uf(e) {
      return Dl = e, zs = Eo(), !0;
    }
    function Ol() {
      Dl = null, zs = null, Pa = null;
    }
    function Us() {
      if (Pa)
        return Pa;
      var e, t = zs, a = t.length, i, u = Eo(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Pa = u.slice(e, p), Pa;
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
    function cn(e) {
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
      return at(t.prototype, {
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
    var Ca = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ra = cn(Ca), ar = at({}, Ca, {
      view: 0,
      detail: 0
    }), rh = cn(ar), js, Fs, Hs;
    function Ll(e) {
      e !== Hs && (Hs && e.type === "mousemove" ? (js = e.screenX - Hs.screenX, Fs = e.screenY - Hs.screenY) : (js = 0, Fs = 0), Hs = e);
    }
    var Ps = at({}, ar, {
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
    }), of = cn(Ps), Ru = at({}, Ps, {
      dataTransfer: 0
    }), Bd = cn(Ru), Tu = at({}, ar, {
      relatedTarget: 0
    }), sf = cn(Tu), ah = at({}, Ca, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), $d = cn(ah), cf = at({}, Ca, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sy = cn(cf), cy = at({}, Ca, {
      data: 0
    }), Yd = cn(cy), ih = Yd, bu = {
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
    }, fy = {
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
      return e.type === "keydown" || e.type === "keyup" ? fy[e.keyCode] || "Unidentified" : "";
    }
    var lh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Ln(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = lh[e];
      return i ? !!a[i] : !1;
    }
    function Id(e) {
      return Ln;
    }
    var uh = at({}, ar, {
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
    }), dy = cn(uh), py = at({}, Ps, {
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
    }), Qd = cn(py), oh = at({}, ar, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Id
    }), vy = cn(oh), Va = at({}, Ca, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Wd = cn(Va), hy = at({}, Ps, {
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
    }), Nl = cn(hy), ff = [9, 13, 27, 32], Ml = 229, To = yt && "CompositionEvent" in window, _u = null;
    yt && "documentMode" in document && (_u = document.documentMode);
    var qd = yt && "TextEvent" in window && !_u, sh = yt && (!To || _u && _u > 8 && _u <= 11), df = 32, ch = String.fromCharCode(df);
    function fh() {
      Ye("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ye("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ye("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ye("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
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
    function dh(e, t) {
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
      if (To ? s = vf(t) : Xi ? hf(t, i) && (s = "onCompositionEnd") : dh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sh && !mf(i) && (!Xi && s === "onCompositionStart" ? Xi = uf(u) : s === "onCompositionEnd" && Xi && (f = Us()));
      var p = yh(a, s);
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
          return a !== df ? null : (Gd = !0, ch);
        case "textInput":
          var i = t.data;
          return i === ch && Gd ? null : i;
        default:
          return null;
      }
    }
    function ph(e, t) {
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
          return sh && !mf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function my(e, t, a, i, u) {
      var s;
      if (qd ? s = yf(t, i) : s = ph(t, i), !s)
        return null;
      var f = yh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ih("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function gf(e, t, a, i, u, s, f) {
      Kd(e, t, a, i, u), my(e, t, a, i, u);
    }
    var yy = {
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
      return t === "input" ? !!yy[e.type] : t === "textarea";
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
    function gy(e) {
      if (!yt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Sf() {
      Ye("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      od(i);
      var u = yh(t, "onChange");
      if (u.length > 0) {
        var s = new Ra("onChange", "change", null, a, i);
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
      n(t, l, e, mc(e)), kv(d, t);
    }
    function d(e) {
      OE(e, 0);
    }
    function m(e) {
      var t = _f(e);
      if (dl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    yt && (T = gy("input") && (!document.documentMode || document.documentMode > 9));
    function U(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", ee);
    }
    function J() {
      r && (r.detachEvent("onpropertychange", ee), r = null, l = null);
    }
    function ee(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function G(e, t, a) {
      e === "focusin" ? (J(), U(t, a)) : e === "focusout" && J();
    }
    function Ee(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function xe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Le(e, t) {
      if (e === "click")
        return m(t);
    }
    function jn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || we(e, "number", e.value);
    }
    function w(e, t, a, i, u, s, f) {
      var p = a ? _f(a) : window, v, y;
      if (o(p) ? v = E : bo(p) ? T ? v = jn : (v = Ee, y = G) : xe(p) && (v = Le), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function N() {
      dt("onMouseEnter", ["mouseout", "mouseover"]), dt("onMouseLeave", ["mouseout", "mouseover"]), dt("onPointerEnter", ["pointerout", "pointerover"]), dt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function re(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ny(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && ($s(y) || fp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var b, z;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (b = a, z = A ? $s(A) : null, z !== null) {
            var P = zr(z);
            (z !== P || z.tag !== K && z.tag !== fe) && (z = null);
          }
        } else
          b = null, z = a;
        if (b !== z) {
          var de = of, Be = "onMouseLeave", Ue = "onMouseEnter", zt = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = Qd, Be = "onPointerLeave", Ue = "onPointerEnter", zt = "pointer");
          var xt = b == null ? g : _f(b), O = z == null ? g : _f(z), V = new de(Be, zt + "leave", b, i, u);
          V.target = xt, V.relatedTarget = O;
          var L = null, te = $s(u);
          if (te === a) {
            var Re = new de(Ue, zt + "enter", z, i, u);
            Re.target = O, Re.relatedTarget = xt, L = Re;
          }
          zT(e, V, L, b, z);
        }
      }
    }
    function Ne(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ke = typeof Object.is == "function" ? Object.is : Ne;
    function He(e, t) {
      if (ke(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!gt.call(t, s) || !ke(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ze(e) {
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
    function Ft(e, t) {
      for (var a = Ze(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ze(ir(a));
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
      return Sy(e, u, s, f, p);
    }
    function Sy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e: for (; ; ) {
        for (var b = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
          x = g, g = b;
        for (; ; ) {
          if (g === e)
            break e;
          if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (b = g.nextSibling) !== null)
            break;
          g = x, x = g.parentNode;
        }
        g = b;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function hT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ft(e, f), g = Ft(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function gE(e) {
      return e && e.nodeType === Bi;
    }
    function SE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : gE(e) ? !1 : gE(t) ? SE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function mT(e) {
      return e && e.ownerDocument && SE(e.ownerDocument.documentElement, e);
    }
    function yT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function EE() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (yT(t))
          e = t.contentWindow;
        else
          return t;
        t = Hi(e.document);
      }
      return t;
    }
    function Ey(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function gT() {
      var e = EE();
      return {
        focusedElem: e,
        selectionRange: Ey(e) ? ET(e) : null
      };
    }
    function ST(e) {
      var t = EE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && mT(a)) {
        i !== null && Ey(a) && CT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Kr && u.push({
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
    function ET(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zl(e), t || {
        start: 0,
        end: 0
      };
    }
    function CT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : hT(e, t);
    }
    var RT = yt && "documentMode" in document && document.documentMode <= 11;
    function TT() {
      Ye("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Ef = null, Cy = null, Jd = null, Ry = !1;
    function bT(e) {
      if ("selectionStart" in e && Ey(e))
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
    function _T(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function CE(e, t, a) {
      var i = _T(a);
      if (!(Ry || Ef == null || Ef !== Hi(i))) {
        var u = bT(Ef);
        if (!Jd || !He(Jd, u)) {
          Jd = u;
          var s = yh(Cy, "onSelect");
          if (s.length > 0) {
            var f = new Ra("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Ef;
          }
        }
      }
    }
    function wT(e, t, a, i, u, s, f) {
      var p = a ? _f(a) : window;
      switch (t) {
        case "focusin":
          (bo(p) || p.contentEditable === "true") && (Ef = p, Cy = a, Jd = null);
          break;
        case "focusout":
          Ef = null, Cy = null, Jd = null;
          break;
        case "mousedown":
          Ry = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ry = !1, CE(e, i, u);
          break;
        case "selectionchange":
          if (RT)
            break;
        case "keydown":
        case "keyup":
          CE(e, i, u);
      }
    }
    function vh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Cf = {
      animationend: vh("Animation", "AnimationEnd"),
      animationiteration: vh("Animation", "AnimationIteration"),
      animationstart: vh("Animation", "AnimationStart"),
      transitionend: vh("Transition", "TransitionEnd")
    }, Ty = {}, RE = {};
    yt && (RE = document.createElement("div").style, "AnimationEvent" in window || (delete Cf.animationend.animation, delete Cf.animationiteration.animation, delete Cf.animationstart.animation), "TransitionEvent" in window || delete Cf.transitionend.transition);
    function hh(e) {
      if (Ty[e])
        return Ty[e];
      if (!Cf[e])
        return e;
      var t = Cf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in RE)
          return Ty[e] = t[a];
      return e;
    }
    var TE = hh("animationend"), bE = hh("animationiteration"), _E = hh("animationstart"), wE = hh("transitionend"), xE = /* @__PURE__ */ new Map(), kE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      xE.set(e, t), Ye(t, [e]);
    }
    function xT() {
      for (var e = 0; e < kE.length; e++) {
        var t = kE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(TE, "onAnimationEnd"), _o(bE, "onAnimationIteration"), _o(_E, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(wE, "onTransitionEnd");
    }
    function kT(e, t, a, i, u, s, f) {
      var p = xE.get(t);
      if (p !== void 0) {
        var v = Ra, y = t;
        switch (t) {
          case "keypress":
            if (Co(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = dy;
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
            v = vy;
            break;
          case TE:
          case bE:
          case _E:
            v = $d;
            break;
          case wE:
            v = Wd;
            break;
          case "scroll":
            v = rh;
            break;
          case "wheel":
            v = Nl;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sy;
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
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = NT(a, p, i.type, g, x);
          if (b.length > 0) {
            var z = new v(p, y, null, i, u);
            e.push({
              event: z,
              listeners: b
            });
          }
        }
      }
    }
    xT(), N(), Sf(), TT(), fh();
    function DT(e, t, a, i, u, s, f) {
      kT(e, t, a, i, u, s);
      var p = (s & ud) === 0;
      p && (re(e, t, a, i, u), w(e, t, a, i, u), wT(e, t, a, i, u), gf(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], by = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function DE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, cs(i, t, void 0, e), e.currentTarget = null;
    }
    function OT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          DE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, b = g.currentTarget, z = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          DE(e, z, b), i = x;
        }
    }
    function OE(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        OT(s, f, a);
      }
      Yi();
    }
    function LT(e, t, a, i, u) {
      var s = mc(a), f = [];
      DT(f, e, i, a, s, t), OE(f, t);
    }
    function xn(e, t) {
      by.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = u_(t), u = UT(e);
      i.has(u) || (LE(t, e, yi, a), i.add(u));
    }
    function _y(e, t, a) {
      by.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), LE(a, e, i, t);
    }
    var mh = "_reactListening" + Math.random().toString(36).slice(2);
    function ep(e) {
      if (!e[mh]) {
        e[mh] = !0, Q.forEach(function(a) {
          a !== "selectionchange" && (by.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[mh] || (t[mh] = !0, _y("selectionchange", !1, t)));
      }
    }
    function LE(e, t, a, i, u) {
      var s = Ea(e, t, a), f = void 0;
      ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Vd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : ia(e, t, s);
    }
    function NE(e, t) {
      return e === t || e.nodeType === Pn && e.parentNode === t;
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
            if (v === j || v === ne) {
              var y = p.stateNode.containerInfo;
              if (NE(y, f))
                break;
              if (v === ne)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === j || x === ne) {
                    var b = g.stateNode.containerInfo;
                    if (NE(b, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = $s(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === K || A === fe) {
                  p = s = z;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      kv(function() {
        return LT(e, t, a, s);
      });
    }
    function tp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function NT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, b = x.stateNode, z = x.tag;
        if (z === K && b !== null && (g = b, p !== null)) {
          var A = ru(y, p);
          A != null && v.push(tp(y, A, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function yh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === K && f !== null) {
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
      while (e && e.tag !== K);
      return e || null;
    }
    function MT(e, t) {
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
    function ME(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === K && g !== null) {
          var b = g;
          if (u) {
            var z = ru(p, s);
            z != null && f.unshift(tp(p, z, b));
          } else if (!u) {
            var A = ru(p, s);
            A != null && f.push(tp(p, A, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function zT(e, t, a, i, u) {
      var s = i && u ? MT(i, u) : null;
      i !== null && ME(e, t, i, s, !1), u !== null && a !== null && ME(e, a, u, s, !0);
    }
    function UT(e, t) {
      return e + "__bubble";
    }
    var Ba = !1, np = "dangerouslySetInnerHTML", gh = "suppressContentEditableWarning", wo = "suppressHydrationWarning", zE = "autoFocus", Vs = "children", Bs = "style", Sh = "__html", xy, Eh, rp, UE, Ch, AE, jE;
    xy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Eh = function(e, t) {
      Rv(e, t), Ju(e, t), xv(e, t, {
        registrationNameDependencies: Z,
        possibleRegistrationNames: he
      });
    }, AE = yt && !document.documentMode, rp = function(e, t, a) {
      if (!Ba) {
        var i = Rh(a), u = Rh(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, UE = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Ch = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, jE = function(e, t) {
      var a = e.namespaceURI === Ja ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var AT = /\r\n?/g, jT = /\u0000|\uFFFD/g;
    function Rh(e) {
      jt(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(AT, `
`).replace(jT, "");
    }
    function Th(e, t, a, i) {
      var u = Rh(t), s = Rh(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && I))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function FE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function FT() {
    }
    function bh(e) {
      e.onclick = FT;
    }
    function HT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Bs)
            f && Object.freeze(f), yv(t, f);
          else if (s === np) {
            var p = f ? f[Sh] : void 0;
            p != null && iv(t, p);
          } else if (s === Vs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && vl(t, f);
            } else typeof f == "number" && vl(t, "" + f);
          else s === gh || s === wo || s === zE || (Z.hasOwnProperty(s) ? f != null && (typeof f != "function" && Ch(s, f), s === "onScroll" && xn("scroll", t)) : f != null && va(t, s, f, u));
        }
    }
    function PT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Bs ? yv(e, f) : s === np ? iv(e, f) : s === Vs ? vl(e, f) : va(e, s, f, i);
      }
    }
    function VT(e, t, a, i) {
      var u, s = FE(a), f, p = i;
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
      return p === Ja && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !gt.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function BT(e, t) {
      return FE(t).createTextNode(e);
    }
    function $T(e, t, a, i) {
      var u = hl(t, a);
      Eh(t, a);
      var s;
      switch (t) {
        case "dialog":
          xn("cancel", e), xn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            xn(Zd[f], e);
          s = a;
          break;
        case "source":
          xn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e), s = a;
          break;
        case "details":
          xn("toggle", e), s = a;
          break;
        case "input":
          Iu(e, a), s = Ma(e, a), xn("invalid", e);
          break;
        case "option":
          Wt(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = eu(e, a), xn("invalid", e);
          break;
        case "textarea":
          nv(e, a), s = cc(e, a), xn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (vc(t, s), HT(t, e, i, s, u), t) {
        case "input":
          Na(e), M(e, a, !1);
          break;
        case "textarea":
          Na(e), av(e);
          break;
        case "option":
          en(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && bh(e);
          break;
      }
    }
    function YT(e, t, a, i, u) {
      Eh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = Ma(e, a), p = Ma(e, i), s = [];
          break;
        case "select":
          f = eu(e, a), p = eu(e, i), s = [];
          break;
        case "textarea":
          f = cc(e, a), p = cc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && bh(e);
          break;
      }
      vc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Bs) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === np || v === Vs || v === gh || v === wo || v === zE || (Z.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === z || b == null && z == null))
          if (v === Bs)
            if (b && Object.freeze(b), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && z[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === np) {
            var A = b ? b[Sh] : void 0, P = z ? z[Sh] : void 0;
            A != null && P !== A && (s = s || []).push(v, A);
          } else v === Vs ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === gh || v === wo || (Z.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Ch(v, b), v === "onScroll" && xn("scroll", e)), !s && z !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (Za(g, p[Bs]), (s = s || []).push(Bs, g)), s;
    }
    function IT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = hl(a, i), f = hl(a, u);
      switch (PT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          rv(e, u);
          break;
        case "select":
          sc(e, u);
          break;
      }
    }
    function QT(e) {
      {
        var t = e.toLowerCase();
        return Gu.hasOwnProperty(t) && Gu[t] || null;
      }
    }
    function WT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = hl(t, a), Eh(t, a), t) {
        case "dialog":
          xn("cancel", e), xn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          xn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            xn(Zd[y], e);
          break;
        case "source":
          xn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          xn("error", e), xn("load", e);
          break;
        case "details":
          xn("toggle", e);
          break;
        case "input":
          Iu(e, a), xn("invalid", e);
          break;
        case "option":
          Wt(e, a);
          break;
        case "select":
          Ko(e, a), xn("invalid", e);
          break;
        case "textarea":
          nv(e, a), xn("invalid", e);
          break;
      }
      vc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var b = g[x].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var z = null;
      for (var A in a)
        if (a.hasOwnProperty(A)) {
          var P = a[A];
          if (A === Vs)
            typeof P == "string" ? e.textContent !== P && (a[wo] !== !0 && Th(e.textContent, P, s, f), z = [Vs, P]) : typeof P == "number" && e.textContent !== "" + P && (a[wo] !== !0 && Th(e.textContent, P, s, f), z = [Vs, "" + P]);
          else if (Z.hasOwnProperty(A))
            P != null && (typeof P != "function" && Ch(A, P), A === "onScroll" && xn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var de = void 0, Be = fn(A);
            if (a[wo] !== !0) {
              if (!(A === gh || A === wo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === np) {
                  var Ue = e.innerHTML, zt = P ? P[Sh] : void 0;
                  if (zt != null) {
                    var xt = jE(e, zt);
                    xt !== Ue && rp(A, Ue, xt);
                  }
                } else if (A === Bs) {
                  if (v.delete(A), AE) {
                    var O = Zm(P);
                    de = e.getAttribute("style"), O !== de && rp(A, de, O);
                  }
                } else if (p)
                  v.delete(A.toLowerCase()), de = si(e, A, P), P !== de && rp(A, de, P);
                else if (!yn(A, Be, p) && !Zn(A, P, Be, p)) {
                  var V = !1;
                  if (Be !== null)
                    v.delete(Be.attributeName), de = Wl(e, A, P, Be);
                  else {
                    var L = i;
                    if (L === Ja && (L = ed(t)), L === Ja)
                      v.delete(A.toLowerCase());
                    else {
                      var te = QT(A);
                      te !== null && te !== A && (V = !0, v.delete(te)), v.delete(A);
                    }
                    de = si(e, A, P);
                  }
                  var Re = Y;
                  !Re && P !== de && !V && rp(A, de, P);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[wo] !== !0 && UE(v), t) {
        case "input":
          Na(e), M(e, a, !0);
          break;
        case "textarea":
          Na(e), av(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && bh(e);
          break;
      }
      return z;
    }
    function qT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function GT(e, t, a) {
      switch (t) {
        case "input":
          H(e, a);
          return;
        case "textarea":
          Qm(e, a);
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
      var XT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], HE = [
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
      ], KT = HE.concat(["button"]), JT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], PE = {
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
        var a = at({}, e || PE), i = {
          tag: t
        };
        return HE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), KT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), XT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ZT = function(e, t) {
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
            return JT.indexOf(t) === -1;
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
      }, eb = function(e, t) {
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
      }, VE = {};
      ap = function(e, t, a) {
        a = a || PE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ZT(e, u) ? null : i, f = s ? null : eb(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!VE[y]) {
            VE[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, b);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var _h = "suppressHydrationWarning", wh = "$", xh = "/$", lp = "$?", up = "$!", tb = "style", Ny = null, My = null;
    function nb(e) {
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
          var s = i === Pn ? e.parentNode : e, f = s.namespaceURI || null;
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
    function rb(e, t, a) {
      {
        var i = e, u = fc(i.namespace, t), s = ip(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function Ck(e) {
      return e;
    }
    function ab(e) {
      Ny = vr(), My = gT();
      var t = null;
      return An(!1), t;
    }
    function ib(e) {
      ST(My), An(Ny), Ny = null, My = null;
    }
    function lb(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ap(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ip(f.ancestorInfo, e);
          ap(null, p, v);
        }
        s = f.namespace;
      }
      var y = VT(e, t, a, s);
      return cp(u, y), Vy(y, t), y;
    }
    function ub(e, t) {
      e.appendChild(t);
    }
    function ob(e, t, a, i, u) {
      switch ($T(e, t, a, i), t) {
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
    function sb(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ip(f.ancestorInfo, t);
          ap(null, p, v);
        }
      }
      return YT(e, t, a, i);
    }
    function zy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function cb(e, t, a, i) {
      {
        var u = a;
        ap(null, e, u.ancestorInfo);
      }
      var s = BT(e, t);
      return cp(i, s), s;
    }
    function fb() {
      var e = window.event;
      return e === void 0 ? dr : go(e.type);
    }
    var Uy = typeof setTimeout == "function" ? setTimeout : void 0, db = typeof clearTimeout == "function" ? clearTimeout : void 0, Ay = -1, BE = typeof Promise == "function" ? Promise : void 0, pb = typeof queueMicrotask == "function" ? queueMicrotask : typeof BE < "u" ? function(e) {
      return BE.resolve(null).then(e).catch(vb);
    } : Uy;
    function vb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function hb(e, t, a, i) {
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
    function mb(e, t, a, i, u, s) {
      IT(e, t, a, i, u), Vy(e, u);
    }
    function $E(e) {
      vl(e, "");
    }
    function yb(e, t, a) {
      e.nodeValue = a;
    }
    function gb(e, t) {
      e.appendChild(t);
    }
    function Sb(e, t) {
      var a;
      e.nodeType === Pn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && bh(a);
    }
    function Eb(e, t, a) {
      e.insertBefore(t, a);
    }
    function Cb(e, t, a) {
      e.nodeType === Pn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Rb(e, t) {
      e.removeChild(t);
    }
    function Tb(e, t) {
      e.nodeType === Pn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Pn) {
          var s = u.data;
          if (s === xh)
            if (i === 0) {
              e.removeChild(u), Dr(t);
              return;
            } else
              i--;
          else (s === wh || s === lp || s === up) && i++;
        }
        a = u;
      } while (a);
      Dr(t);
    }
    function bb(e, t) {
      e.nodeType === Pn ? jy(e.parentNode, t) : e.nodeType === Kr && jy(e, t), Dr(e);
    }
    function _b(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function wb(e) {
      e.nodeValue = "";
    }
    function xb(e, t) {
      e = e;
      var a = t[tb], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = pc("display", i);
    }
    function kb(e, t) {
      e.nodeValue = t;
    }
    function Db(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function Ob(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Lb(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function Nb(e) {
      return e.nodeType !== Pn ? null : e;
    }
    function YE(e) {
      return e.data === lp;
    }
    function Fy(e) {
      return e.data === up;
    }
    function Mb(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function zb(e, t) {
      e._reactRetry = t;
    }
    function kh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Bi)
          break;
        if (t === Pn) {
          var a = e.data;
          if (a === wh || a === up || a === lp)
            break;
          if (a === xh)
            return null;
        }
      }
      return e;
    }
    function op(e) {
      return kh(e.nextSibling);
    }
    function Ub(e) {
      return kh(e.firstChild);
    }
    function Ab(e) {
      return kh(e.firstChild);
    }
    function jb(e) {
      return kh(e.nextSibling);
    }
    function Fb(e, t, a, i, u, s, f) {
      cp(s, e), Vy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Rt) !== je;
      return WT(e, t, a, p, i, y, f);
    }
    function Hb(e, t, a, i) {
      return cp(a, e), a.mode & Rt, qT(e, t);
    }
    function Pb(e, t) {
      cp(t, e);
    }
    function Vb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === xh) {
            if (a === 0)
              return op(t);
            a--;
          } else (i === wh || i === up || i === lp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function IE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Pn) {
          var i = t.data;
          if (i === wh || i === up || i === lp) {
            if (a === 0)
              return t;
            a--;
          } else i === xh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Bb(e) {
      Dr(e);
    }
    function $b(e) {
      Dr(e);
    }
    function Yb(e) {
      return e !== "head" && e !== "body";
    }
    function Ib(e, t, a, i) {
      var u = !0;
      Th(t.nodeValue, a, i, u);
    }
    function Qb(e, t, a, i, u, s) {
      if (t[_h] !== !0) {
        var f = !0;
        Th(i.nodeValue, u, s, f);
      }
    }
    function Wb(e, t) {
      t.nodeType === Kr ? ky(e, t) : t.nodeType === Pn || Dy(e, t);
    }
    function qb(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? ky(a, t) : t.nodeType === Pn || Dy(a, t));
      }
    }
    function Gb(e, t, a, i, u) {
      (u || t[_h] !== !0) && (i.nodeType === Kr ? ky(a, i) : i.nodeType === Pn || Dy(a, i));
    }
    function Xb(e, t, a) {
      Oy(e, t);
    }
    function Kb(e, t) {
      Ly(e, t);
    }
    function Jb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Oy(i, t);
      }
    }
    function Zb(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ly(a, t);
      }
    }
    function e_(e, t, a, i, u, s) {
      (s || t[_h] !== !0) && Oy(a, i);
    }
    function t_(e, t, a, i, u) {
      (u || t[_h] !== !0) && Ly(a, i);
    }
    function n_(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function r_(e) {
      ep(e);
    }
    var Tf = Math.random().toString(36).slice(2), bf = "__reactFiber$" + Tf, Hy = "__reactProps$" + Tf, sp = "__reactContainer$" + Tf, Py = "__reactEvents$" + Tf, a_ = "__reactListeners$" + Tf, i_ = "__reactHandles$" + Tf;
    function l_(e) {
      delete e[bf], delete e[Hy], delete e[Py], delete e[a_], delete e[i_];
    }
    function cp(e, t) {
      t[bf] = e;
    }
    function Dh(e, t) {
      t[sp] = e;
    }
    function QE(e) {
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
            for (var u = IE(e); u !== null; ) {
              var s = u[bf];
              if (s)
                return s;
              u = IE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function xo(e) {
      var t = e[bf] || e[sp];
      return t && (t.tag === K || t.tag === fe || t.tag === Oe || t.tag === j) ? t : null;
    }
    function _f(e) {
      if (e.tag === K || e.tag === fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Oh(e) {
      return e[Hy] || null;
    }
    function Vy(e, t) {
      e[Hy] = t;
    }
    function u_(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var WE = {}, qE = ve.ReactDebugCurrentFrame;
    function Lh(e) {
      if (e) {
        var t = e._owner, a = Qo(e.type, e._source, t ? t.type : null);
        qE.setExtraStackFrame(a);
      } else
        qE.setExtraStackFrame(null);
    }
    function Ki(e, t, a, i, u) {
      {
        var s = Function.call.bind(gt);
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
            p && !(p instanceof Error) && (Lh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Lh(null)), p instanceof Error && !(p.message in WE) && (WE[p.message] = !0, Lh(u), S("Failed %s type: %s", a, p.message), Lh(null));
          }
      }
    }
    var By = [], Nh;
    Nh = [];
    var wu = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function la(e, t) {
      if (wu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Nh[wu] && S("Unexpected Fiber popped."), e.current = By[wu], By[wu] = null, Nh[wu] = null, wu--;
    }
    function ua(e, t, a) {
      wu++, By[wu] = e.current, Nh[wu] = a, e.current = t;
    }
    var $y;
    $y = {};
    var li = {};
    Object.freeze(li);
    var xu = ko(li), Ul = ko(!1), Yy = li;
    function wf(e, t, a) {
      return a && Al(t) ? Yy : xu.current;
    }
    function GE(e, t, a) {
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
          var p = et(e) || "Unknown";
          Ki(i, s, "context", p);
        }
        return u && GE(e, t, s), s;
      }
    }
    function Mh() {
      return Ul.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function zh(e) {
      la(Ul, e), la(xu, e);
    }
    function Iy(e) {
      la(Ul, e), la(xu, e);
    }
    function XE(e, t, a) {
      {
        if (xu.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ua(xu, t, e), ua(Ul, a, e);
      }
    }
    function KE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = et(e) || "Unknown";
            $y[s] || ($y[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((et(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = et(e) || "Unknown";
          Ki(u, f, "child context", v);
        }
        return at({}, a, f);
      }
    }
    function Uh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return Yy = xu.current, ua(xu, a, e), ua(Ul, Ul.current, e), !0;
      }
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = KE(e, t, Yy);
          i.__reactInternalMemoizedMergedChildContext = u, la(Ul, e), la(xu, e), ua(xu, u, e), ua(Ul, a, e);
        } else
          la(Ul, e), ua(Ul, a, e);
      }
    }
    function o_(e) {
      {
        if (!Nv(e) || e.tag !== X)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case j:
              return t.stateNode.context;
            case X: {
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
    var Do = 0, Ah = 1, ku = null, Qy = !1, Wy = !1;
    function ZE(e) {
      ku === null ? ku = [e] : ku.push(e);
    }
    function s_(e) {
      Qy = !0, ZE(e);
    }
    function eC() {
      Qy && Oo();
    }
    function Oo() {
      if (!Wy && ku !== null) {
        Wy = !0;
        var e = 0, t = Sa();
        try {
          var a = !0, i = ku;
          for (Gn(aa); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          ku = null, Qy = !1;
        } catch (s) {
          throw ku !== null && (ku = ku.slice(e + 1)), hd(Qi, Oo), s;
        } finally {
          Gn(t), Wy = !1;
        }
      }
      return null;
    }
    var kf = [], Df = 0, jh = null, Fh = 0, bi = [], _i = 0, Ys = null, Du = 1, Ou = "";
    function c_(e) {
      return Qs(), (e.flags & ds) !== Ae;
    }
    function f_(e) {
      return Qs(), Fh;
    }
    function d_() {
      var e = Ou, t = Du, a = t & ~p_(t);
      return a.toString(32) + e;
    }
    function Is(e, t) {
      Qs(), kf[Df++] = Fh, kf[Df++] = jh, jh = e, Fh = t;
    }
    function tC(e, t, a) {
      Qs(), bi[_i++] = Du, bi[_i++] = Ou, bi[_i++] = Ys, Ys = e;
      var i = Du, u = Ou, s = Hh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Hh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), b = f >> y, z = s - y, A = Hh(t) + z, P = p << z, de = P | b, Be = x + u;
        Du = 1 << A | de, Ou = Be;
      } else {
        var Ue = p << s, zt = Ue | f, xt = u;
        Du = 1 << v | zt, Ou = xt;
      }
    }
    function qy(e) {
      Qs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Is(e, a), tC(e, a, i);
      }
    }
    function Hh(e) {
      return 32 - qn(e);
    }
    function p_(e) {
      return 1 << Hh(e) - 1;
    }
    function Gy(e) {
      for (; e === jh; )
        jh = kf[--Df], kf[Df] = null, Fh = kf[--Df], kf[Df] = null;
      for (; e === Ys; )
        Ys = bi[--_i], bi[_i] = null, Ou = bi[--_i], bi[_i] = null, Du = bi[--_i], bi[_i] = null;
    }
    function v_() {
      return Qs(), Ys !== null ? {
        id: Du,
        overflow: Ou
      } : null;
    }
    function h_(e, t) {
      Qs(), bi[_i++] = Du, bi[_i++] = Ou, bi[_i++] = Ys, Du = t.id, Ou = t.overflow, Ys = e;
    }
    function Qs() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, wi = null, Ji = !1, Ws = !1, Lo = null;
    function m_() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function nC() {
      Ws = !0;
    }
    function y_() {
      return Ws;
    }
    function g_(e) {
      var t = e.stateNode.containerInfo;
      return wi = Ab(t), Ar = e, Ji = !0, Lo = null, Ws = !1, !0;
    }
    function S_(e, t, a) {
      return wi = jb(t), Ar = e, Ji = !0, Lo = null, Ws = !1, a !== null && h_(e, a), !0;
    }
    function rC(e, t) {
      switch (e.tag) {
        case j: {
          Wb(e.stateNode.containerInfo, t);
          break;
        }
        case K: {
          var a = (e.mode & Rt) !== je;
          Gb(
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
          i.dehydrated !== null && qb(i.dehydrated, t);
          break;
        }
      }
    }
    function aC(e, t) {
      rC(e, t);
      var a = Tx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Jr) : i.push(a);
    }
    function Xy(e, t) {
      {
        if (Ws)
          return;
        switch (e.tag) {
          case j: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case K:
                var i = t.type;
                t.pendingProps, Xb(a, i);
                break;
              case fe:
                var u = t.pendingProps;
                Kb(a, u);
                break;
            }
            break;
          }
          case K: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case K: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Rt) !== je;
                e_(
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
              case fe: {
                var x = t.pendingProps, b = (e.mode & Rt) !== je;
                t_(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case Oe: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case K:
                var P = t.type;
                t.pendingProps, Jb(A, P);
                break;
              case fe:
                var de = t.pendingProps;
                Zb(A, de);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function iC(e, t) {
      t.flags = t.flags & -4097 | Vn, Xy(e, t);
    }
    function lC(e, t) {
      switch (e.tag) {
        case K: {
          var a = e.type;
          e.pendingProps;
          var i = Ob(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, wi = Ub(i), !0) : !1;
        }
        case fe: {
          var u = e.pendingProps, s = Lb(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, wi = null, !0) : !1;
        }
        case Oe: {
          var f = Nb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: v_(),
              retryLane: ga
            };
            e.memoizedState = p;
            var v = bx(f);
            return v.return = e, e.child = v, Ar = e, wi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ky(e) {
      return (e.mode & Rt) !== je && (e.flags & Ct) === Ae;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Zy(e) {
      if (Ji) {
        var t = wi;
        if (!t) {
          Ky(e) && (Xy(Ar, e), Jy()), iC(Ar, e), Ji = !1, Ar = e;
          return;
        }
        var a = t;
        if (!lC(e, t)) {
          Ky(e) && (Xy(Ar, e), Jy()), t = op(a);
          var i = Ar;
          if (!t || !lC(e, t)) {
            iC(Ar, e), Ji = !1, Ar = e;
            return;
          }
          aC(i, a);
        }
      }
    }
    function E_(e, t, a) {
      var i = e.stateNode, u = !Ws, s = Fb(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function C_(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Hb(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case j: {
              var s = u.stateNode.containerInfo, f = (u.mode & Rt) !== je;
              Ib(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case K: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Rt) !== je;
              Qb(
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
    function R_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Pb(a, e);
    }
    function T_(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Vb(a);
    }
    function uC(e) {
      for (var t = e.return; t !== null && t.tag !== K && t.tag !== j && t.tag !== Oe; )
        t = t.return;
      Ar = t;
    }
    function Ph(e) {
      if (e !== Ar)
        return !1;
      if (!Ji)
        return uC(e), Ji = !0, !1;
      if (e.tag !== j && (e.tag !== K || Yb(e.type) && !zy(e.type, e.memoizedProps))) {
        var t = wi;
        if (t)
          if (Ky(e))
            oC(e), Jy();
          else
            for (; t; )
              aC(e, t), t = op(t);
      }
      return uC(e), e.tag === Oe ? wi = T_(e) : wi = Ar ? op(e.stateNode) : null, !0;
    }
    function b_() {
      return Ji && wi !== null;
    }
    function oC(e) {
      for (var t = wi; t; )
        rC(e, t), t = op(t);
    }
    function Of() {
      Ar = null, wi = null, Ji = !1, Ws = !1;
    }
    function sC() {
      Lo !== null && (nR(Lo), Lo = null);
    }
    function jr() {
      return Ji;
    }
    function eg(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var __ = ve.ReactCurrentBatchConfig, w_ = null;
    function x_() {
      return __.transition;
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
      var k_ = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & it && (t = a), a = a.return;
        return t;
      }, qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Gs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & it && typeof t.UNSAFE_componentWillMount == "function" && pp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & it && typeof t.UNSAFE_componentWillReceiveProps == "function" && hp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && mp.push(e), e.mode & it && typeof t.UNSAFE_componentWillUpdate == "function" && yp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          e.add(et(b) || "Component"), Gs.add(b.type);
        }), dp = []);
        var t = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          t.add(et(b) || "Component"), Gs.add(b.type);
        }), pp = []);
        var a = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          a.add(et(b) || "Component"), Gs.add(b.type);
        }), vp = []);
        var i = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          i.add(et(b) || "Component"), Gs.add(b.type);
        }), hp = []);
        var u = /* @__PURE__ */ new Set();
        mp.length > 0 && (mp.forEach(function(b) {
          u.add(et(b) || "Component"), Gs.add(b.type);
        }), mp = []);
        var s = /* @__PURE__ */ new Set();
        if (yp.length > 0 && (yp.forEach(function(b) {
          s.add(et(b) || "Component"), Gs.add(b.type);
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
          Me(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = qs(a);
          Me(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = qs(u);
          Me(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var Vh = /* @__PURE__ */ new Map(), cC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = k_(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!cC.has(e.type)) {
          var i = Vh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Vh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Vh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(et(s) || "Component"), cC.add(s.type);
            });
            var u = qs(i);
            try {
              Zt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Dn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        dp = [], pp = [], vp = [], hp = [], mp = [], yp = [], Vh = /* @__PURE__ */ new Map();
      };
    }
    var tg, ng, rg, ag, ig, fC = function(e, t) {
    };
    tg = !1, ng = !1, rg = {}, ag = {}, ig = {}, fC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = et(t) || "Component";
        ag[a] || (ag[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function D_(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function gp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & it || ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== X) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !D_(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = et(e) || "Component";
          rg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), rg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== X)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          fa(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var b = v.refs;
            x === null ? delete b[y] : b[y] = x;
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
    function Bh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function $h(e) {
      {
        var t = et(e) || "Component";
        if (ig[t])
          return;
        ig[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function dC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function pC(e) {
      function t(O, V) {
        if (e) {
          var L = O.deletions;
          L === null ? (O.deletions = [V], O.flags |= Jr) : L.push(V);
        }
      }
      function a(O, V) {
        if (!e)
          return null;
        for (var L = V; L !== null; )
          t(O, L), L = L.sibling;
        return null;
      }
      function i(O, V) {
        for (var L = /* @__PURE__ */ new Map(), te = V; te !== null; )
          te.key !== null ? L.set(te.key, te) : L.set(te.index, te), te = te.sibling;
        return L;
      }
      function u(O, V) {
        var L = ac(O, V);
        return L.index = 0, L.sibling = null, L;
      }
      function s(O, V, L) {
        if (O.index = L, !e)
          return O.flags |= ds, V;
        var te = O.alternate;
        if (te !== null) {
          var Re = te.index;
          return Re < V ? (O.flags |= Vn, V) : Re;
        } else
          return O.flags |= Vn, V;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Vn), O;
      }
      function p(O, V, L, te) {
        if (V === null || V.tag !== fe) {
          var Re = eE(L, O.mode, te);
          return Re.return = O, Re;
        } else {
          var me = u(V, L);
          return me.return = O, me;
        }
      }
      function v(O, V, L, te) {
        var Re = L.type;
        if (Re === Wr)
          return g(O, V, L.props.children, te, L.key);
        if (V !== null && (V.elementType === Re || // Keep this check inline so it only runs on the false path:
        gR(V, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Re == "object" && Re !== null && Re.$$typeof === tt && dC(Re) === V.type)) {
          var me = u(V, L.props);
          return me.ref = gp(O, V, L), me.return = O, me._debugSource = L._source, me._debugOwner = L._owner, me;
        }
        var Je = ZS(L, O.mode, te);
        return Je.ref = gp(O, V, L), Je.return = O, Je;
      }
      function y(O, V, L, te) {
        if (V === null || V.tag !== ne || V.stateNode.containerInfo !== L.containerInfo || V.stateNode.implementation !== L.implementation) {
          var Re = tE(L, O.mode, te);
          return Re.return = O, Re;
        } else {
          var me = u(V, L.children || []);
          return me.return = O, me;
        }
      }
      function g(O, V, L, te, Re) {
        if (V === null || V.tag !== Te) {
          var me = Bo(L, O.mode, te, Re);
          return me.return = O, me;
        } else {
          var Je = u(V, L);
          return Je.return = O, Je;
        }
      }
      function x(O, V, L) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var te = eE("" + V, O.mode, L);
          return te.return = O, te;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case sr: {
              var Re = ZS(V, O.mode, L);
              return Re.ref = gp(O, null, V), Re.return = O, Re;
            }
            case ha: {
              var me = tE(V, O.mode, L);
              return me.return = O, me;
            }
            case tt: {
              var Je = V._payload, rt = V._init;
              return x(O, rt(Je), L);
            }
          }
          if (ot(V) || Tn(V)) {
            var ln = Bo(V, O.mode, L, null);
            return ln.return = O, ln;
          }
          Bh(O, V);
        }
        return typeof V == "function" && $h(O), null;
      }
      function b(O, V, L, te) {
        var Re = V !== null ? V.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return Re !== null ? null : p(O, V, "" + L, te);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case sr:
              return L.key === Re ? v(O, V, L, te) : null;
            case ha:
              return L.key === Re ? y(O, V, L, te) : null;
            case tt: {
              var me = L._payload, Je = L._init;
              return b(O, V, Je(me), te);
            }
          }
          if (ot(L) || Tn(L))
            return Re !== null ? null : g(O, V, L, te, null);
          Bh(O, L);
        }
        return typeof L == "function" && $h(O), null;
      }
      function z(O, V, L, te, Re) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var me = O.get(L) || null;
          return p(V, me, "" + te, Re);
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case sr: {
              var Je = O.get(te.key === null ? L : te.key) || null;
              return v(V, Je, te, Re);
            }
            case ha: {
              var rt = O.get(te.key === null ? L : te.key) || null;
              return y(V, rt, te, Re);
            }
            case tt:
              var ln = te._payload, Vt = te._init;
              return z(O, V, L, Vt(ln), Re);
          }
          if (ot(te) || Tn(te)) {
            var Kn = O.get(L) || null;
            return g(V, Kn, te, Re, null);
          }
          Bh(V, te);
        }
        return typeof te == "function" && $h(V), null;
      }
      function A(O, V, L) {
        {
          if (typeof O != "object" || O === null)
            return V;
          switch (O.$$typeof) {
            case sr:
            case ha:
              fC(O, L);
              var te = O.key;
              if (typeof te != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(te);
                break;
              }
              if (!V.has(te)) {
                V.add(te);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", te);
              break;
            case tt:
              var Re = O._payload, me = O._init;
              A(me(Re), V, L);
              break;
          }
        }
        return V;
      }
      function P(O, V, L, te) {
        for (var Re = null, me = 0; me < L.length; me++) {
          var Je = L[me];
          Re = A(Je, Re, O);
        }
        for (var rt = null, ln = null, Vt = V, Kn = 0, Bt = 0, Wn = null; Vt !== null && Bt < L.length; Bt++) {
          Vt.index > Bt ? (Wn = Vt, Vt = null) : Wn = Vt.sibling;
          var sa = b(O, Vt, L[Bt], te);
          if (sa === null) {
            Vt === null && (Vt = Wn);
            break;
          }
          e && Vt && sa.alternate === null && t(O, Vt), Kn = s(sa, Kn, Bt), ln === null ? rt = sa : ln.sibling = sa, ln = sa, Vt = Wn;
        }
        if (Bt === L.length) {
          if (a(O, Vt), jr()) {
            var Yr = Bt;
            Is(O, Yr);
          }
          return rt;
        }
        if (Vt === null) {
          for (; Bt < L.length; Bt++) {
            var oi = x(O, L[Bt], te);
            oi !== null && (Kn = s(oi, Kn, Bt), ln === null ? rt = oi : ln.sibling = oi, ln = oi);
          }
          if (jr()) {
            var wa = Bt;
            Is(O, wa);
          }
          return rt;
        }
        for (var xa = i(O, Vt); Bt < L.length; Bt++) {
          var ca = z(xa, O, Bt, L[Bt], te);
          ca !== null && (e && ca.alternate !== null && xa.delete(ca.key === null ? Bt : ca.key), Kn = s(ca, Kn, Bt), ln === null ? rt = ca : ln.sibling = ca, ln = ca);
        }
        if (e && xa.forEach(function(Gf) {
          return t(O, Gf);
        }), jr()) {
          var ju = Bt;
          Is(O, ju);
        }
        return rt;
      }
      function de(O, V, L, te) {
        var Re = Tn(L);
        if (typeof Re != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (ng || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ng = !0), L.entries === Re && (tg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tg = !0);
          var me = Re.call(L);
          if (me)
            for (var Je = null, rt = me.next(); !rt.done; rt = me.next()) {
              var ln = rt.value;
              Je = A(ln, Je, O);
            }
        }
        var Vt = Re.call(L);
        if (Vt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Kn = null, Bt = null, Wn = V, sa = 0, Yr = 0, oi = null, wa = Vt.next(); Wn !== null && !wa.done; Yr++, wa = Vt.next()) {
          Wn.index > Yr ? (oi = Wn, Wn = null) : oi = Wn.sibling;
          var xa = b(O, Wn, wa.value, te);
          if (xa === null) {
            Wn === null && (Wn = oi);
            break;
          }
          e && Wn && xa.alternate === null && t(O, Wn), sa = s(xa, sa, Yr), Bt === null ? Kn = xa : Bt.sibling = xa, Bt = xa, Wn = oi;
        }
        if (wa.done) {
          if (a(O, Wn), jr()) {
            var ca = Yr;
            Is(O, ca);
          }
          return Kn;
        }
        if (Wn === null) {
          for (; !wa.done; Yr++, wa = Vt.next()) {
            var ju = x(O, wa.value, te);
            ju !== null && (sa = s(ju, sa, Yr), Bt === null ? Kn = ju : Bt.sibling = ju, Bt = ju);
          }
          if (jr()) {
            var Gf = Yr;
            Is(O, Gf);
          }
          return Kn;
        }
        for (var Xp = i(O, Wn); !wa.done; Yr++, wa = Vt.next()) {
          var Yl = z(Xp, O, Yr, wa.value, te);
          Yl !== null && (e && Yl.alternate !== null && Xp.delete(Yl.key === null ? Yr : Yl.key), sa = s(Yl, sa, Yr), Bt === null ? Kn = Yl : Bt.sibling = Yl, Bt = Yl);
        }
        if (e && Xp.forEach(function(tk) {
          return t(O, tk);
        }), jr()) {
          var ek = Yr;
          Is(O, ek);
        }
        return Kn;
      }
      function Be(O, V, L, te) {
        if (V !== null && V.tag === fe) {
          a(O, V.sibling);
          var Re = u(V, L);
          return Re.return = O, Re;
        }
        a(O, V);
        var me = eE(L, O.mode, te);
        return me.return = O, me;
      }
      function Ue(O, V, L, te) {
        for (var Re = L.key, me = V; me !== null; ) {
          if (me.key === Re) {
            var Je = L.type;
            if (Je === Wr) {
              if (me.tag === Te) {
                a(O, me.sibling);
                var rt = u(me, L.props.children);
                return rt.return = O, rt._debugSource = L._source, rt._debugOwner = L._owner, rt;
              }
            } else if (me.elementType === Je || // Keep this check inline so it only runs on the false path:
            gR(me, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Je == "object" && Je !== null && Je.$$typeof === tt && dC(Je) === me.type) {
              a(O, me.sibling);
              var ln = u(me, L.props);
              return ln.ref = gp(O, me, L), ln.return = O, ln._debugSource = L._source, ln._debugOwner = L._owner, ln;
            }
            a(O, me);
            break;
          } else
            t(O, me);
          me = me.sibling;
        }
        if (L.type === Wr) {
          var Vt = Bo(L.props.children, O.mode, te, L.key);
          return Vt.return = O, Vt;
        } else {
          var Kn = ZS(L, O.mode, te);
          return Kn.ref = gp(O, V, L), Kn.return = O, Kn;
        }
      }
      function zt(O, V, L, te) {
        for (var Re = L.key, me = V; me !== null; ) {
          if (me.key === Re)
            if (me.tag === ne && me.stateNode.containerInfo === L.containerInfo && me.stateNode.implementation === L.implementation) {
              a(O, me.sibling);
              var Je = u(me, L.children || []);
              return Je.return = O, Je;
            } else {
              a(O, me);
              break;
            }
          else
            t(O, me);
          me = me.sibling;
        }
        var rt = tE(L, O.mode, te);
        return rt.return = O, rt;
      }
      function xt(O, V, L, te) {
        var Re = typeof L == "object" && L !== null && L.type === Wr && L.key === null;
        if (Re && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case sr:
              return f(Ue(O, V, L, te));
            case ha:
              return f(zt(O, V, L, te));
            case tt:
              var me = L._payload, Je = L._init;
              return xt(O, V, Je(me), te);
          }
          if (ot(L))
            return P(O, V, L, te);
          if (Tn(L))
            return de(O, V, L, te);
          Bh(O, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? f(Be(O, V, "" + L, te)) : (typeof L == "function" && $h(O), a(O, V));
      }
      return xt;
    }
    var Lf = pC(!0), vC = pC(!1);
    function O_(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ac(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ac(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function L_(e, t) {
      for (var a = e.child; a !== null; )
        gx(a, t), a = a.sibling;
    }
    var lg = ko(null), ug;
    ug = {};
    var Yh = null, Nf = null, og = null, Ih = !1;
    function Qh() {
      Yh = null, Nf = null, og = null, Ih = !1;
    }
    function hC() {
      Ih = !0;
    }
    function mC() {
      Ih = !1;
    }
    function yC(e, t, a) {
      ua(lg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ug && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ug;
    }
    function sg(e, t) {
      var a = lg.current;
      la(lg, t), e._currentValue = a;
    }
    function cg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = st(u.childLanes, t)) : (i.childLanes = st(i.childLanes, t), u !== null && (u.childLanes = st(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function N_(e, t, a) {
      M_(e, t, a);
    }
    function M_(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === X) {
                var p = rr(a), v = Lu(Kt, p);
                v.tag = qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = st(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = st(b.lanes, a)), cg(i.return, a, e), s.lanes = st(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === ct)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === un) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = st(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = st(A.lanes, a)), cg(z, a, e), u = i.sibling;
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
      Yh = e, Nf = null, og = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ra(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function lr(e) {
      Ih && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (og !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Nf === null) {
          if (Yh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, Yh.dependencies = {
            lanes: B,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var Xs = null;
    function fg(e) {
      Xs === null ? Xs = [e] : Xs.push(e);
    }
    function z_() {
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
    function gC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Wh(e, i);
    }
    function U_(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function A_(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, fg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Wh(e, i);
    }
    function $a(e, t) {
      return Wh(e, t);
    }
    var j_ = Wh;
    function Wh(e, t) {
      e.lanes = st(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = st(a.lanes, t)), a === null && (e.flags & (Vn | $n)) !== Ae && vR(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = st(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = st(a.childLanes, t) : (u.flags & (Vn | $n)) !== Ae && vR(e), i = u, u = u.return;
      if (i.tag === j) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var SC = 0, EC = 1, qh = 2, dg = 3, Gh = !1, pg, Xh;
    pg = !1, Xh = null;
    function vg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: B
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function CC(e, t) {
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
        tag: SC,
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
      if (Xh === u && !pg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), pg = !0), Uw()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, j_(e, a);
      } else
        return A_(e, u, t, a);
    }
    function Kh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = Xc(s, e.pendingLanes);
          var f = st(s, a);
          u.lanes = f, ks(e, f);
        }
      }
    }
    function hg(e, t) {
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
    function F_(e, t, a, i, u, s) {
      switch (a.tag) {
        case EC: {
          var f = a.payload;
          if (typeof f == "function") {
            hC();
            var p = f.call(s, i, u);
            {
              if (e.mode & it) {
                Xt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Xt(!1);
                }
              }
              mC();
            }
            return p;
          }
          return f;
        }
        case dg:
          e.flags = e.flags & -65537 | Ct;
        case SC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            hC(), y = v.call(s, i, u);
            {
              if (e.mode & it) {
                Xt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Xt(!1);
                }
              }
              mC();
            }
          } else
            y = v;
          return y == null ? i : at({}, i, y);
        }
        case qh:
          return Gh = !0, i;
      }
      return i;
    }
    function Jh(e, t, a, i) {
      var u = e.updateQueue;
      Gh = !1, Xh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, b = x.lastBaseUpdate;
          b !== f && (b === null ? x.firstBaseUpdate = y : b.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = u.baseState, A = B, P = null, de = null, Be = null, Ue = s;
        do {
          var zt = Ue.lane, xt = Ue.eventTime;
          if (hu(i, zt)) {
            if (Be !== null) {
              var V = {
                eventTime: xt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: In,
                tag: Ue.tag,
                payload: Ue.payload,
                callback: Ue.callback,
                next: null
              };
              Be = Be.next = V;
            }
            z = F_(e, u, Ue, z, t, a);
            var L = Ue.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ue.lane !== In) {
              e.flags |= sn;
              var te = u.effects;
              te === null ? u.effects = [Ue] : te.push(Ue);
            }
          } else {
            var O = {
              eventTime: xt,
              lane: zt,
              tag: Ue.tag,
              payload: Ue.payload,
              callback: Ue.callback,
              next: null
            };
            Be === null ? (de = Be = O, P = z) : Be = Be.next = O, A = st(A, zt);
          }
          if (Ue = Ue.next, Ue === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Re = p, me = Re.next;
            Re.next = null, Ue = me, u.lastBaseUpdate = Re, u.shared.pending = null;
          }
        } while (!0);
        Be === null && (P = z), u.baseState = P, u.firstBaseUpdate = de, u.lastBaseUpdate = Be;
        var Je = u.shared.interleaved;
        if (Je !== null) {
          var rt = Je;
          do
            A = st(A, rt.lane), rt = rt.next;
          while (rt !== Je);
        } else s === null && (u.shared.lanes = B);
        Ip(A), e.lanes = A, e.memoizedState = z;
      }
      Xh = null;
    }
    function H_(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function RC() {
      Gh = !1;
    }
    function Zh() {
      return Gh;
    }
    function TC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, H_(f, a));
        }
    }
    var Sp = {}, Mo = ko(Sp), Ep = ko(Sp), em = ko(Sp);
    function tm(e) {
      if (e === Sp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function bC() {
      var e = tm(em.current);
      return e;
    }
    function mg(e, t) {
      ua(em, t, e), ua(Ep, e, e), ua(Mo, Sp, e);
      var a = nb(t);
      la(Mo, e), ua(Mo, a, e);
    }
    function zf(e) {
      la(Mo, e), la(Ep, e), la(em, e);
    }
    function yg() {
      var e = tm(Mo.current);
      return e;
    }
    function _C(e) {
      tm(em.current);
      var t = tm(Mo.current), a = rb(t, e.type);
      t !== a && (ua(Ep, e, e), ua(Mo, a, e));
    }
    function gg(e) {
      Ep.current === e && (la(Mo, e), la(Ep, e));
    }
    var P_ = 0, wC = 1, xC = 1, Cp = 2, el = ko(P_);
    function Sg(e, t) {
      return (e & t) !== 0;
    }
    function Uf(e) {
      return e & wC;
    }
    function Eg(e, t) {
      return e & wC | t;
    }
    function V_(e, t) {
      return e | t;
    }
    function zo(e, t) {
      ua(el, t, e);
    }
    function Af(e) {
      la(el, e);
    }
    function B_(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function nm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Oe) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || YE(i) || Fy(i))
              return t;
          }
        } else if (t.tag === At && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ct) !== Ae;
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
    var Ya = (
      /*   */
      0
    ), hr = (
      /* */
      1
    ), jl = (
      /*  */
      2
    ), mr = (
      /*    */
      4
    ), Fr = (
      /*   */
      8
    ), Cg = [];
    function Rg() {
      for (var e = 0; e < Cg.length; e++) {
        var t = Cg[e];
        t._workInProgressVersionPrimary = null;
      }
      Cg.length = 0;
    }
    function $_(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ce = ve.ReactCurrentDispatcher, Rp = ve.ReactCurrentBatchConfig, Tg, jf;
    Tg = /* @__PURE__ */ new Set();
    var Ks = B, an = null, yr = null, gr = null, rm = !1, Tp = !1, bp = 0, Y_ = 0, I_ = 25, $ = null, xi = null, Uo = -1, bg = !1;
    function Gt() {
      {
        var e = $;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function ue() {
      {
        var e = $;
        xi !== null && (Uo++, xi[Uo] !== e && Q_(e));
      }
    }
    function Ff(e) {
      e != null && !ot(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", $, typeof e);
    }
    function Q_(e) {
      {
        var t = et(an);
        if (!Tg.has(t) && (Tg.add(t), xi !== null)) {
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
    function oa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function _g(e, t) {
      if (bg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", $), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, $, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ke(e[a], t[a]))
          return !1;
      return !0;
    }
    function Hf(e, t, a, i, u, s) {
      Ks = s, an = t, xi = e !== null ? e._debugHookTypes : null, Uo = -1, bg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = B, e !== null && e.memoizedState !== null ? Ce.current = GC : xi !== null ? Ce.current = qC : Ce.current = WC;
      var f = a(i, u);
      if (Tp) {
        var p = 0;
        do {
          if (Tp = !1, bp = 0, p >= I_)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, bg = !1, yr = null, gr = null, t.updateQueue = null, Uo = -1, Ce.current = XC, f = a(i, u);
        } while (Tp);
      }
      Ce.current = mm, t._debugHookTypes = xi;
      var v = yr !== null && yr.next !== null;
      if (Ks = B, an = null, yr = null, gr = null, $ = null, xi = null, Uo = -1, e !== null && (e.flags & Yn) !== (t.flags & Yn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Rt) !== je && S("Internal React error: Expected static flag was missing. Please notify the React team."), rm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Pf() {
      var e = bp !== 0;
      return bp = 0, e;
    }
    function kC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & rn) !== je ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function DC() {
      if (Ce.current = mm, rm) {
        for (var e = an.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rm = !1;
      }
      Ks = B, an = null, yr = null, gr = null, xi = null, Uo = -1, $ = null, BC = !1, Tp = !1, bp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return gr === null ? an.memoizedState = gr = e : gr = gr.next = e, gr;
    }
    function ki() {
      var e;
      if (yr === null) {
        var t = an.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = yr.next;
      var a;
      if (gr === null ? a = an.memoizedState : a = gr.next, a !== null)
        gr = a, a = gr.next, yr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        yr = e;
        var i = {
          memoizedState: yr.memoizedState,
          baseState: yr.baseState,
          baseQueue: yr.baseQueue,
          queue: yr.queue,
          next: null
        };
        gr === null ? an.memoizedState = gr = i : gr = gr.next = i;
      }
      return gr;
    }
    function OC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function xg(e, t, a) {
      var i = Fl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = X_.bind(null, an, s);
      return [i.memoizedState, f];
    }
    function kg(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = yr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, b = null, z = null, A = null, P = g;
        do {
          var de = P.lane;
          if (hu(Ks, de)) {
            if (A !== null) {
              var Ue = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: In,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              A = A.next = Ue;
            }
            if (P.hasEagerState)
              x = P.eagerState;
            else {
              var zt = P.action;
              x = e(x, zt);
            }
          } else {
            var Be = {
              lane: de,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            A === null ? (z = A = Be, b = x) : A = A.next = Be, an.lanes = st(an.lanes, de), Ip(de);
          }
          P = P.next;
        } while (P !== null && P !== g);
        A === null ? b = x : A.next = z, ke(x, i.memoizedState) || Mp(), i.memoizedState = x, i.baseState = b, i.baseQueue = A, u.lastRenderedState = x;
      }
      var xt = u.interleaved;
      if (xt !== null) {
        var O = xt;
        do {
          var V = O.lane;
          an.lanes = st(an.lanes, V), Ip(V), O = O.next;
        } while (O !== xt);
      } else f === null && (u.lanes = B);
      var L = u.dispatch;
      return [i.memoizedState, L];
    }
    function Dg(e, t, a) {
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
        ke(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function Rk(e, t, a) {
    }
    function Tk(e, t, a) {
    }
    function Og(e, t, a) {
      var i = an, u = Fl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), jf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), jf = !0);
      } else {
        if (s = t(), !jf) {
          var p = t();
          ke(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), jf = !0);
        }
        var v = Um();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, Ks) || LC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, om(MC.bind(null, i, y, e), [e]), i.flags |= ma, _p(hr | Fr, NC.bind(null, i, y, s, t), void 0, null), s;
    }
    function am(e, t, a) {
      var i = an, u = ki(), s = t();
      if (!jf) {
        var f = t();
        ke(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), jf = !0);
      }
      var p = u.memoizedState, v = !ke(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (xp(MC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      gr !== null && gr.memoizedState.tag & hr) {
        i.flags |= ma, _p(hr | Fr, NC.bind(null, i, y, s, t), void 0, null);
        var g = Um();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, Ks) || LC(i, t, s);
      }
      return s;
    }
    function LC(e, t, a) {
      e.flags |= bc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = an.updateQueue;
      if (u === null)
        u = OC(), an.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function NC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zC(t) && UC(e);
    }
    function MC(e, t, a) {
      var i = function() {
        zC(t) && UC(e);
      };
      return a(i);
    }
    function zC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ke(a, i);
      } catch {
        return !0;
      }
    }
    function UC(e) {
      var t = $a(e, We);
      t !== null && Rr(t, e, We, Kt);
    }
    function im(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: B,
        dispatch: null,
        lastRenderedReducer: wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = K_.bind(null, an, a);
      return [t.memoizedState, i];
    }
    function Lg(e) {
      return kg(wg);
    }
    function Ng(e) {
      return Dg(wg);
    }
    function _p(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = an.updateQueue;
      if (s === null)
        s = OC(), an.updateQueue = s, s.lastEffect = u.next = u;
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
    function Mg(e) {
      var t = Fl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function lm(e) {
      var t = ki();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      an.flags |= e, u.memoizedState = _p(hr | t, a, void 0, s);
    }
    function um(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (yr !== null) {
        var p = yr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (_g(s, v)) {
            u.memoizedState = _p(t, a, f, s);
            return;
          }
        }
      }
      an.flags |= e, u.memoizedState = _p(hr | t, a, f, s);
    }
    function om(e, t) {
      return (an.mode & rn) !== je ? wp(gl | ma | dd, Fr, e, t) : wp(ma | dd, Fr, e, t);
    }
    function xp(e, t) {
      return um(ma, Fr, e, t);
    }
    function zg(e, t) {
      return wp(_t, jl, e, t);
    }
    function sm(e, t) {
      return um(_t, jl, e, t);
    }
    function Ug(e, t) {
      var a = _t;
      return a |= yl, (an.mode & rn) !== je && (a |= Mr), wp(a, mr, e, t);
    }
    function cm(e, t) {
      return um(_t, mr, e, t);
    }
    function AC(e, t) {
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
    function Ag(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = _t;
      return u |= yl, (an.mode & rn) !== je && (u |= Mr), wp(u, mr, AC.bind(null, t, e), i);
    }
    function fm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return um(_t, mr, AC.bind(null, t, e), i);
    }
    function W_(e, t) {
    }
    var dm = W_;
    function jg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function pm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Fg(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function vm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Hg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function jC(e) {
      var t = ki(), a = yr, i = a.memoizedState;
      return HC(t, i, e);
    }
    function FC(e) {
      var t = ki();
      if (yr === null)
        return t.memoizedState = e, e;
      var a = yr.memoizedState;
      return HC(t, a, e);
    }
    function HC(e, t, a) {
      var i = !Ld(Ks);
      if (i) {
        if (!ke(a, t)) {
          var u = Md();
          an.lanes = st(an.lanes, u), Ip(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function q_(e, t, a) {
      var i = Sa();
      Gn(Ds(i, Fa)), e(!0);
      var u = Rp.transition;
      Rp.transition = {};
      var s = Rp.transition;
      Rp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Gn(i), Rp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Me("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Pg() {
      var e = im(!1), t = e[0], a = e[1], i = q_.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function PC() {
      var e = Lg(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function VC() {
      var e = Ng(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var BC = !1;
    function G_() {
      return BC;
    }
    function Vg() {
      var e = Fl(), t = Um(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = d_();
        i = ":" + a + "R" + u;
        var s = bp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Y_++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function hm() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function X_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        YC(t, u);
      else {
        var s = gC(e, t, u, i);
        if (s !== null) {
          var f = _a();
          Rr(s, e, i, f), IC(s, t, i);
        }
      }
      QC(e, i);
    }
    function K_(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        YC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === B && (s === null || s.lanes === B)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ce.current, Ce.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ke(y, v)) {
                U_(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Ce.current = p;
            }
          }
        }
        var g = gC(e, t, u, i);
        if (g !== null) {
          var x = _a();
          Rr(g, e, i, x), IC(g, t, i);
        }
      }
      QC(e, i);
    }
    function $C(e) {
      var t = e.alternate;
      return e === an || t !== null && t === an;
    }
    function YC(e, t) {
      Tp = rm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function IC(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Xc(i, e.pendingLanes);
        var u = st(i, a);
        t.lanes = u, ks(e, u);
      }
    }
    function QC(e, t, a) {
      gs(e, t);
    }
    var mm = {
      readContext: lr,
      useCallback: oa,
      useContext: oa,
      useEffect: oa,
      useImperativeHandle: oa,
      useInsertionEffect: oa,
      useLayoutEffect: oa,
      useMemo: oa,
      useReducer: oa,
      useRef: oa,
      useState: oa,
      useDebugValue: oa,
      useDeferredValue: oa,
      useTransition: oa,
      useMutableSource: oa,
      useSyncExternalStore: oa,
      useId: oa,
      unstable_isNewReconciler: be
    }, WC = null, qC = null, GC = null, XC = null, Hl = null, tl = null, ym = null;
    {
      var Bg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, nt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", Gt(), Ff(t), jg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", Gt(), lr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", Gt(), Ff(t), om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", Gt(), Ff(a), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", Gt(), Ff(t), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", Gt(), Ff(t), Ug(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", Gt(), Ff(t);
          var a = Ce.current;
          Ce.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", Gt();
          var i = Ce.current;
          Ce.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", Gt(), Mg(e);
        },
        useState: function(e) {
          $ = "useState", Gt();
          var t = Ce.current;
          Ce.current = Hl;
          try {
            return im(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", Gt(), Hg(e);
        },
        useTransition: function() {
          return $ = "useTransition", Gt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", Gt(), Og(e, t, a);
        },
        useId: function() {
          return $ = "useId", Gt(), Vg();
        },
        unstable_isNewReconciler: be
      }, qC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ue(), jg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ue(), lr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ue(), om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ue(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ue(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ue(), Ug(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ue();
          var a = Ce.current;
          Ce.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ue();
          var i = Ce.current;
          Ce.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ue(), Mg(e);
        },
        useState: function(e) {
          $ = "useState", ue();
          var t = Ce.current;
          Ce.current = Hl;
          try {
            return im(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ue(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ue(), Hg(e);
        },
        useTransition: function() {
          return $ = "useTransition", ue(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ue(), Og(e, t, a);
        },
        useId: function() {
          return $ = "useId", ue(), Vg();
        },
        unstable_isNewReconciler: be
      }, GC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ue(), pm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ue(), lr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ue(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ue(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ue(), cm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ue();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return vm(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ue();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return kg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ue(), lm();
        },
        useState: function(e) {
          $ = "useState", ue();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return Lg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ue(), dm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ue(), jC(e);
        },
        useTransition: function() {
          return $ = "useTransition", ue(), PC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ue(), am(e, t);
        },
        useId: function() {
          return $ = "useId", ue(), hm();
        },
        unstable_isNewReconciler: be
      }, XC = {
        readContext: function(e) {
          return lr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", ue(), pm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", ue(), lr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", ue(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", ue(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", ue(), cm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", ue();
          var a = Ce.current;
          Ce.current = ym;
          try {
            return vm(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", ue();
          var i = Ce.current;
          Ce.current = ym;
          try {
            return Dg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", ue(), lm();
        },
        useState: function(e) {
          $ = "useState", ue();
          var t = Ce.current;
          Ce.current = ym;
          try {
            return Ng(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", ue(), dm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", ue(), FC(e);
        },
        useTransition: function() {
          return $ = "useTransition", ue(), VC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", ue(), am(e, t);
        },
        useId: function() {
          return $ = "useId", ue(), hm();
        },
        unstable_isNewReconciler: be
      }, Hl = {
        readContext: function(e) {
          return Bg(), lr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", nt(), Gt(), jg(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", nt(), Gt(), lr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", nt(), Gt(), om(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", nt(), Gt(), Ag(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", nt(), Gt(), zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", nt(), Gt(), Ug(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", nt(), Gt();
          var a = Ce.current;
          Ce.current = Hl;
          try {
            return Fg(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", nt(), Gt();
          var i = Ce.current;
          Ce.current = Hl;
          try {
            return xg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", nt(), Gt(), Mg(e);
        },
        useState: function(e) {
          $ = "useState", nt(), Gt();
          var t = Ce.current;
          Ce.current = Hl;
          try {
            return im(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", nt(), Gt(), void 0;
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", nt(), Gt(), Hg(e);
        },
        useTransition: function() {
          return $ = "useTransition", nt(), Gt(), Pg();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", nt(), Gt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", nt(), Gt(), Og(e, t, a);
        },
        useId: function() {
          return $ = "useId", nt(), Gt(), Vg();
        },
        unstable_isNewReconciler: be
      }, tl = {
        readContext: function(e) {
          return Bg(), lr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", nt(), ue(), pm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", nt(), ue(), lr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", nt(), ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", nt(), ue(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", nt(), ue(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", nt(), ue(), cm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", nt(), ue();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return vm(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", nt(), ue();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return kg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", nt(), ue(), lm();
        },
        useState: function(e) {
          $ = "useState", nt(), ue();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return Lg(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", nt(), ue(), dm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", nt(), ue(), jC(e);
        },
        useTransition: function() {
          return $ = "useTransition", nt(), ue(), PC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", nt(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", nt(), ue(), am(e, t);
        },
        useId: function() {
          return $ = "useId", nt(), ue(), hm();
        },
        unstable_isNewReconciler: be
      }, ym = {
        readContext: function(e) {
          return Bg(), lr(e);
        },
        useCallback: function(e, t) {
          return $ = "useCallback", nt(), ue(), pm(e, t);
        },
        useContext: function(e) {
          return $ = "useContext", nt(), ue(), lr(e);
        },
        useEffect: function(e, t) {
          return $ = "useEffect", nt(), ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return $ = "useImperativeHandle", nt(), ue(), fm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return $ = "useInsertionEffect", nt(), ue(), sm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return $ = "useLayoutEffect", nt(), ue(), cm(e, t);
        },
        useMemo: function(e, t) {
          $ = "useMemo", nt(), ue();
          var a = Ce.current;
          Ce.current = tl;
          try {
            return vm(e, t);
          } finally {
            Ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          $ = "useReducer", nt(), ue();
          var i = Ce.current;
          Ce.current = tl;
          try {
            return Dg(e, t, a);
          } finally {
            Ce.current = i;
          }
        },
        useRef: function(e) {
          return $ = "useRef", nt(), ue(), lm();
        },
        useState: function(e) {
          $ = "useState", nt(), ue();
          var t = Ce.current;
          Ce.current = tl;
          try {
            return Ng(e);
          } finally {
            Ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return $ = "useDebugValue", nt(), ue(), dm();
        },
        useDeferredValue: function(e) {
          return $ = "useDeferredValue", nt(), ue(), FC(e);
        },
        useTransition: function() {
          return $ = "useTransition", nt(), ue(), VC();
        },
        useMutableSource: function(e, t, a) {
          return $ = "useMutableSource", nt(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return $ = "useSyncExternalStore", nt(), ue(), am(e, t);
        },
        useId: function() {
          return $ = "useId", nt(), ue(), hm();
        },
        unstable_isNewReconciler: be
      };
    }
    var Ao = _.unstable_now, KC = 0, gm = -1, kp = -1, Sm = -1, $g = !1, Em = !1;
    function JC() {
      return $g;
    }
    function J_() {
      Em = !0;
    }
    function Z_() {
      $g = !1, Em = !1;
    }
    function e1() {
      $g = Em, Em = !1;
    }
    function ZC() {
      return KC;
    }
    function e0() {
      KC = Ao();
    }
    function Yg(e) {
      kp = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function t0(e) {
      kp = -1;
    }
    function Cm(e, t) {
      if (kp >= 0) {
        var a = Ao() - kp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), kp = -1;
      }
    }
    function Pl(e) {
      if (gm >= 0) {
        var t = Ao() - gm;
        gm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case j:
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
    function Ig(e) {
      if (Sm >= 0) {
        var t = Ao() - Sm;
        Sm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case j:
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
      gm = Ao();
    }
    function Qg() {
      Sm = Ao();
    }
    function Wg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = at({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var qg = {}, Gg, Xg, Kg, Jg, Zg, n0, Rm, eS, tS, nS, Dp;
    {
      Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var r0 = /* @__PURE__ */ new Set();
      Rm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          r0.has(a) || (r0.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, n0 = function(e, t) {
        if (t === void 0) {
          var a = Nt(e) || "Component";
          Zg.has(a) || (Zg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(qg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(qg);
    }
    function rS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & it) {
          Xt(!0);
          try {
            s = a(i, u);
          } finally {
            Xt(!1);
          }
        }
        n0(t, s);
      }
      var f = s == null ? u : at({}, u, s);
      if (e.memoizedState = f, e.lanes === B) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var aS = {
      isMounted: pd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = _a(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Rm(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Rr(p, i, s, u), Kh(p, i, s)), gs(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = _a(), s = Po(i), f = Lu(u, s);
        f.tag = EC, f.payload = t, a != null && (Rm(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Rr(p, i, s, u), Kh(p, i, s)), gs(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = _a(), u = Po(a), s = Lu(i, u);
        s.tag = qh, t != null && (Rm(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Rr(f, a, u, i), Kh(f, a, u)), xd(a, u);
      }
    };
    function a0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & it) {
            Xt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Xt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Nt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !He(a, i) || !He(u, s) : !0;
    }
    function t1(e, t, a) {
      var i = e.stateNode;
      {
        var u = Nt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & it) === je && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & it) === je && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !tS.has(t) && (tS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Nt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Kg.has(t) && (Kg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Nt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ot(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function i0(e, t) {
      t.updater = aS, e.stateNode = t, fs(t, e), t._reactInternalInstance = qg;
    }
    function l0(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !nS.has(t)) {
          nS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Nt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = lr(f);
      else {
        u = wf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? xf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & it) {
        Xt(!0);
        try {
          g = new t(a, s);
        } finally {
          Xt(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      i0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var b = Nt(t) || "Component";
          Xg.has(b) || (Xg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, P = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), z !== null || A !== null || P !== null) {
            var de = Nt(t) || "Component", Be = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Jg.has(de) || (Jg.add(de), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, Be, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && GE(e, u, s), g;
    }
    function n1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", et(e) || "Component"), aS.enqueueReplaceState(t, t.state, null));
    }
    function u0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = et(e) || "Component";
          Gg.has(s) || (Gg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        aS.enqueueReplaceState(t, t.state, null);
      }
    }
    function iS(e, t, a, i) {
      t1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, vg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = lr(s);
      else {
        var f = wf(e, t, !0);
        u.context = xf(e, f);
      }
      {
        if (u.state === a) {
          var p = Nt(t) || "Component";
          eS.has(p) || (eS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & it && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (rS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (n1(e, u), Jh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = _t;
        y |= yl, (e.mode & rn) !== je && (y |= Mr), e.flags |= y;
      }
    }
    function r1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = lr(p);
      else {
        var y = wf(e, t, !0);
        v = xf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && u0(e, u, a, v), RC();
      var b = e.memoizedState, z = u.state = b;
      if (Jh(e, a, u, i), z = e.memoizedState, s === a && b === z && !Mh() && !Zh()) {
        if (typeof u.componentDidMount == "function") {
          var A = _t;
          A |= yl, (e.mode & rn) !== je && (A |= Mr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (rS(e, t, g, a), z = e.memoizedState);
      var P = Zh() || a0(e, t, s, a, b, z, v);
      if (P) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var de = _t;
          de |= yl, (e.mode & rn) !== je && (de |= Mr), e.flags |= de;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Be = _t;
          Be |= yl, (e.mode & rn) !== je && (Be |= Mr), e.flags |= Be;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, P;
    }
    function a1(e, t, a, i, u) {
      var s = t.stateNode;
      CC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = li;
      if (typeof g == "object" && g !== null)
        x = lr(g);
      else {
        var b = wf(t, a, !0);
        x = xf(t, b);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && u0(t, s, i, x), RC();
      var P = t.memoizedState, de = s.state = P;
      if (Jh(t, i, s, u), de = t.memoizedState, f === v && P === de && !Mh() && !Zh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= _t), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ua), !1;
      typeof z == "function" && (rS(t, a, z, i), de = t.memoizedState);
      var Be = Zh() || a0(t, a, p, i, P, de, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      oe;
      return Be ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, x)), typeof s.componentDidUpdate == "function" && (t.flags |= _t), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Ua)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= _t), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ua), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = x, Be;
    }
    function Js(e, t) {
      return {
        value: e,
        source: t,
        stack: Lt(t),
        digest: null
      };
    }
    function lS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function i1(e, t) {
      return !0;
    }
    function uS(e, t) {
      try {
        var a = i1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === X)
            return;
          console.error(i);
        }
        var p = u ? et(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === j)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = et(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var l1 = typeof WeakMap == "function" ? WeakMap : Map;
    function o0(e, t, a) {
      var i = Lu(Kt, a);
      i.tag = dg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Jw(u), uS(e, t);
      }, i;
    }
    function oS(e, t, a) {
      var i = Lu(Kt, a);
      i.tag = dg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          SR(e), uS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        SR(e), uS(e, t), typeof u != "function" && Xw(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ra(e.lanes, We) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", et(e) || "Unknown"));
      }), i;
    }
    function s0(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new l1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Zw.bind(null, e, t, a);
        xr && Qp(e, a), t.then(s, s);
      }
    }
    function u1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function o1(e, t) {
      var a = e.tag;
      if ((e.mode & Rt) === je && (a === ge || a === $e || a === Ge)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function c0(e) {
      var t = e;
      do {
        if (t.tag === Oe && B_(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function f0(e, t, a, i, u) {
      if ((e.mode & Rt) === je) {
        if (e === t)
          e.flags |= Aa;
        else {
          if (e.flags |= Ct, a.flags |= ti, a.flags &= -52805, a.tag === X) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ut;
            else {
              var f = Lu(Kt, We);
              f.tag = qh, No(a, f, We);
            }
          }
          a.lanes = st(a.lanes, We);
        }
        return e;
      }
      return e.flags |= Aa, e.lanes = u, e;
    }
    function s1(e, t, a, i, u) {
      if (a.flags |= lu, xr && Qp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        o1(a), jr() && a.mode & Rt && nC();
        var f = c0(t);
        if (f !== null) {
          f.flags &= -257, f0(f, t, a, e, u), f.mode & Rt && s0(e, s, u), u1(f, e, s);
          return;
        } else {
          if (!Od(u)) {
            s0(e, s, u), VS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & Rt) {
        nC();
        var v = c0(t);
        if (v !== null) {
          (v.flags & Aa) === Ae && (v.flags |= On), f0(v, t, a, e, u), eg(Js(i, a));
          return;
        }
      }
      i = Js(i, a), Bw(i);
      var y = t;
      do {
        switch (y.tag) {
          case j: {
            var g = i;
            y.flags |= Aa;
            var x = rr(u);
            y.lanes = st(y.lanes, x);
            var b = o0(y, g, x);
            hg(y, b);
            return;
          }
          case X:
            var z = i, A = y.type, P = y.stateNode;
            if ((y.flags & Ct) === Ae && (typeof A.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !cR(P))) {
              y.flags |= Aa;
              var de = rr(u);
              y.lanes = st(y.lanes, de);
              var Be = oS(y, z, de);
              hg(y, Be);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function c1() {
      return null;
    }
    var Op = ve.ReactCurrentOwner, rl = !1, sS, Lp, cS, fS, dS, Zs, pS, Tm, Np;
    sS = {}, Lp = {}, cS = {}, fS = {}, dS = {}, Zs = !1, pS = {}, Tm = {}, Np = {};
    function Ta(e, t, a, i) {
      e === null ? t.child = vC(t, null, a, i) : t.child = Lf(t, e.child, a, i);
    }
    function f1(e, t, a, i) {
      t.child = Lf(t, e.child, null, i), t.child = Lf(t, null, a, i);
    }
    function d0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Mf(t, u), ja(t);
      {
        if (Op.current = t, Oa(!0), v = Hf(e, t, f, i, p, u), y = Pf(), t.mode & it) {
          Xt(!0);
          try {
            v = Hf(e, t, f, i, p, u), y = Pf();
          } finally {
            Xt(!1);
          }
        }
        Oa(!1);
      }
      return Rl(), e !== null && !rl ? (kC(e, t, u), Nu(e, t, u)) : (jr() && y && qy(t), t.flags |= Ii, Ta(e, t, v, u), t.child);
    }
    function p0(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (mx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = qf(s), t.tag = Ge, t.type = f, mS(t, s), v0(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Ki(
            p,
            i,
            // Resolved props
            "prop",
            Nt(s)
          ), a.defaultProps !== void 0) {
            var v = Nt(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = JS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && Ki(
          x,
          i,
          // Resolved props
          "prop",
          Nt(g)
        );
      }
      var b = e.child, z = RS(e, u);
      if (!z) {
        var A = b.memoizedProps, P = a.compare;
        if (P = P !== null ? P : He, P(A, i) && e.ref === t.ref)
          return Nu(e, t, u);
      }
      t.flags |= Ii;
      var de = ac(b, i);
      return de.ref = t.ref, de.return = t, t.child = de, de;
    }
    function v0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === tt) {
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
            Nt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (He(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, RS(e, u))
            (e.flags & ti) !== Ae && (rl = !0);
          else return t.lanes = e.lanes, Nu(e, t, u);
      }
      return vS(e, t, a, i, u);
    }
    function h0(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || k)
        if ((t.mode & Rt) === je) {
          var f = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Am(t, a);
        } else if (ra(a, ga)) {
          var x = {
            baseLanes: B,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var b = s !== null ? s.baseLanes : a;
          Am(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = st(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ga;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Am(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = st(s.baseLanes, a), t.memoizedState = null) : z = a, Am(t, z);
      }
      return Ta(e, t, u, a), t.child;
    }
    function d1(e, t, a) {
      var i = t.pendingProps;
      return Ta(e, t, i, a), t.child;
    }
    function p1(e, t, a) {
      var i = t.pendingProps.children;
      return Ta(e, t, i, a), t.child;
    }
    function v1(e, t, a) {
      {
        t.flags |= _t;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ta(e, t, s, a), t.child;
    }
    function m0(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Bn, t.flags |= ps);
    }
    function vS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ki(
          s,
          i,
          // Resolved props
          "prop",
          Nt(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Mf(t, u), ja(t);
      {
        if (Op.current = t, Oa(!0), v = Hf(e, t, a, i, f, u), y = Pf(), t.mode & it) {
          Xt(!0);
          try {
            v = Hf(e, t, a, i, f, u), y = Pf();
          } finally {
            Xt(!1);
          }
        }
        Oa(!1);
      }
      return Rl(), e !== null && !rl ? (kC(e, t, u), Nu(e, t, u)) : (jr() && y && qy(t), t.flags |= Ii, Ta(e, t, v, u), t.child);
    }
    function y0(e, t, a, i, u) {
      {
        switch (Lx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ct, t.flags |= Aa;
            var y = new Error("Simulated error coming from DevTools"), g = rr(u);
            t.lanes = st(t.lanes, g);
            var x = oS(t, Js(y, t), g);
            hg(t, x);
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
            Nt(a)
          );
        }
      }
      var z;
      Al(a) ? (z = !0, Uh(t)) : z = !1, Mf(t, u);
      var A = t.stateNode, P;
      A === null ? (_m(e, t), l0(t, a, i), iS(t, a, i, u), P = !0) : e === null ? P = r1(t, a, i, u) : P = a1(e, t, a, i, u);
      var de = hS(e, t, a, P, z, u);
      {
        var Be = t.stateNode;
        P && Be.props !== i && (Zs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", et(t) || "a component"), Zs = !0);
      }
      return de;
    }
    function hS(e, t, a, i, u, s) {
      m0(e, t);
      var f = (t.flags & Ct) !== Ae;
      if (!i && !f)
        return u && JE(t, a, !1), Nu(e, t, s);
      var p = t.stateNode;
      Op.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, t0();
      else {
        ja(t);
        {
          if (Oa(!0), v = p.render(), t.mode & it) {
            Xt(!0);
            try {
              p.render();
            } finally {
              Xt(!1);
            }
          }
          Oa(!1);
        }
        Rl();
      }
      return t.flags |= Ii, e !== null && f ? f1(e, t, v, s) : Ta(e, t, v, s), t.memoizedState = p.state, u && JE(t, a, !0), t.child;
    }
    function g0(e) {
      var t = e.stateNode;
      t.pendingContext ? XE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && XE(e, t.context, !1), mg(e, t.containerInfo);
    }
    function h1(e, t, a) {
      if (g0(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      CC(e, t), Jh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & On) {
          var g = Js(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return S0(e, t, p, a, g);
        } else if (p !== s) {
          var x = Js(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return S0(e, t, p, a, x);
        } else {
          g_(t);
          var b = vC(t, null, p, a);
          t.child = b;
          for (var z = b; z; )
            z.flags = z.flags & -3 | $n, z = z.sibling;
        }
      } else {
        if (Of(), p === s)
          return Nu(e, t, a);
        Ta(e, t, p, a);
      }
      return t.child;
    }
    function S0(e, t, a, i, u) {
      return Of(), eg(u), t.flags |= On, Ta(e, t, a, i), t.child;
    }
    function m1(e, t, a) {
      _C(t), e === null && Zy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = zy(i, u);
      return p ? f = null : s !== null && zy(i, s) && (t.flags |= nn), m0(e, t), Ta(e, t, f, a), t.child;
    }
    function y1(e, t) {
      return e === null && Zy(t), null;
    }
    function g1(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = yx(v), g = nl(v, u), x;
      switch (y) {
        case ge:
          return mS(t, v), t.type = v = qf(v), x = vS(null, t, v, g, i), x;
        case X:
          return t.type = v = QS(v), x = y0(null, t, v, g, i), x;
        case $e:
          return t.type = v = WS(v), x = d0(null, t, v, g, i), x;
        case mt: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Ki(
              b,
              g,
              // Resolved for outer only
              "prop",
              Nt(v)
            );
          }
          return x = p0(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === tt && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function S1(e, t, a, i, u) {
      _m(e, t), t.tag = X;
      var s;
      return Al(a) ? (s = !0, Uh(t)) : s = !1, Mf(t, u), l0(t, a, i), iS(t, a, i, u), hS(null, t, a, !0, s, u);
    }
    function E1(e, t, a, i) {
      _m(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = xf(t, f);
      }
      Mf(t, i);
      var p, v;
      ja(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Nt(a) || "Unknown";
          sS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), sS[y] = !0);
        }
        t.mode & it && Zi.recordLegacyContextWarning(t, null), Oa(!0), Op.current = t, p = Hf(null, t, a, u, s, i), v = Pf(), Oa(!1);
      }
      if (Rl(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Nt(a) || "Unknown";
        Lp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Lp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = Nt(a) || "Unknown";
          Lp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Lp[x] = !0);
        }
        t.tag = X, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Al(a) ? (b = !0, Uh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, vg(t), i0(t, p), iS(t, a, u, i), hS(null, t, a, !0, b, i);
      } else {
        if (t.tag = ge, t.mode & it) {
          Xt(!0);
          try {
            p = Hf(null, t, a, u, s, i), v = Pf();
          } finally {
            Xt(!1);
          }
        }
        return jr() && v && qy(t), Ta(null, t, p, i), mS(t, a), t.child;
      }
    }
    function mS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Lr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), dS[u] || (dS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Nt(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Nt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), fS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Nt(t) || "Unknown";
          cS[v] || (S("%s: Function components do not support contextType.", v), cS[v] = !0);
        }
      }
    }
    var yS = {
      dehydrated: null,
      treeContext: null,
      retryLane: In
    };
    function gS(e) {
      return {
        baseLanes: e,
        cachePool: c1(),
        transitions: null
      };
    }
    function C1(e, t) {
      var a = null;
      return {
        baseLanes: st(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function R1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Sg(e, Cp);
    }
    function T1(e, t) {
      return xs(e.childLanes, t);
    }
    function E0(e, t, a) {
      var i = t.pendingProps;
      Nx(t) && (t.flags |= Ct);
      var u = el.current, s = !1, f = (t.flags & Ct) !== Ae;
      if (f || R1(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = V_(u, xC)), u = Uf(u), zo(t, u), e === null) {
        Zy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return k1(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = b1(t, y, g, a), b = t.child;
          return b.memoizedState = gS(a), t.memoizedState = yS, x;
        } else
          return SS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return D1(e, t, f, i, A, z, a);
        }
        if (s) {
          var P = i.fallback, de = i.children, Be = w1(e, t, de, P, a), Ue = t.child, zt = e.child.memoizedState;
          return Ue.memoizedState = zt === null ? gS(a) : C1(zt, a), Ue.childLanes = T1(e, a), t.memoizedState = yS, Be;
        } else {
          var xt = i.children, O = _1(e, t, xt, a);
          return t.memoizedState = null, O;
        }
      }
    }
    function SS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = ES(u, i);
      return s.return = e, e.child = s, s;
    }
    function b1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Rt) === je && s !== null ? (p = s, p.childLanes = B, p.pendingProps = f, e.mode & kt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = ES(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function ES(e, t, a) {
      return CR(e, t, B, null);
    }
    function C0(e, t) {
      return ac(e, t);
    }
    function _1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = C0(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Rt) === je && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Jr) : p.push(s);
      }
      return t.child = f, f;
    }
    function w1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Rt) === je && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = B, y.pendingProps = v, t.mode & kt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = C0(f, v), y.subtreeFlags = f.subtreeFlags & Yn;
      var x;
      return p !== null ? x = ac(p, i) : (x = Bo(i, s, u, null), x.flags |= Vn), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function bm(e, t, a, i) {
      i !== null && eg(i), Lf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = SS(t, s);
      return f.flags |= Vn, t.memoizedState = null, f;
    }
    function x1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = ES(f, s), v = Bo(i, s, u, null);
      return v.flags |= Vn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Rt) !== je && Lf(t, e.child, null, u), v;
    }
    function k1(e, t, a) {
      return (e.mode & Rt) === je ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = We) : Fy(t) ? e.lanes = nr : e.lanes = ga, null;
    }
    function D1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & On) {
          t.flags &= -257;
          var O = lS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return bm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ct, null;
          var V = i.children, L = i.fallback, te = x1(e, t, V, L, f), Re = t.child;
          return Re.memoizedState = gS(f), t.memoizedState = yS, te;
        }
      else {
        if (m_(), (t.mode & Rt) === je)
          return bm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Fy(u)) {
          var p, v, y;
          {
            var g = Mb(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = lS(x, p, y);
          return bm(e, t, f, b);
        }
        var z = ra(f, e.childLanes);
        if (rl || z) {
          var A = Um();
          if (A !== null) {
            var P = Zc(A, f);
            if (P !== In && P !== s.retryLane) {
              s.retryLane = P;
              var de = Kt;
              $a(e, P), Rr(A, e, P, de);
            }
          }
          VS();
          var Be = lS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return bm(e, t, f, Be);
        } else if (YE(u)) {
          t.flags |= Ct, t.child = e.child;
          var Ue = ex.bind(null, e);
          return zb(u, Ue), null;
        } else {
          S_(t, u, s.treeContext);
          var zt = i.children, xt = SS(t, zt);
          return xt.flags |= $n, xt;
        }
      }
    }
    function R0(e, t, a) {
      e.lanes = st(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = st(i.lanes, t)), cg(e.return, t, a);
    }
    function O1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Oe) {
          var u = i.memoizedState;
          u !== null && R0(i, a, e);
        } else if (i.tag === At)
          R0(i, a, e);
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
    function L1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && nm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function N1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !pS[e])
        if (pS[e] = !0, typeof e == "string")
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
    function M1(e, t) {
      e !== void 0 && !Tm[e] && (e !== "collapsed" && e !== "hidden" ? (Tm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Tm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function T0(e, t) {
      {
        var a = ot(e), i = !a && typeof Tn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function z1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ot(e)) {
          for (var a = 0; a < e.length; a++)
            if (!T0(e[a], a))
              return;
        } else {
          var i = Tn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!T0(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CS(e, t, a, i, u) {
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
    function b0(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      N1(u), M1(s, u), z1(f, u), Ta(e, t, f, a);
      var p = el.current, v = Sg(p, Cp);
      if (v)
        p = Eg(p, Cp), t.flags |= Ct;
      else {
        var y = e !== null && (e.flags & Ct) !== Ae;
        y && O1(t, t.child, a), p = Uf(p);
      }
      if (zo(t, p), (t.mode & Rt) === je)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = L1(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), CS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var A = z.alternate;
              if (A !== null && nm(A) === null) {
                t.child = z;
                break;
              }
              var P = z.sibling;
              z.sibling = b, b = z, z = P;
            }
            CS(
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
            CS(
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
    function U1(e, t, a) {
      mg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Lf(t, null, i, a) : Ta(e, t, i, a), t.child;
    }
    var _0 = !1;
    function A1(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || _0 || (_0 = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ki(v, s, "prop", "Context.Provider");
      }
      if (yC(t, u, p), f !== null) {
        var y = f.value;
        if (ke(y, p)) {
          if (f.children === s.children && !Mh())
            return Nu(e, t, a);
        } else
          N_(t, u, a);
      }
      var g = s.children;
      return Ta(e, t, g, a), t.child;
    }
    var w0 = !1;
    function j1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (w0 || (w0 = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Mf(t, a);
      var f = lr(i);
      ja(t);
      var p;
      return Op.current = t, Oa(!0), p = s(f), Oa(!1), Rl(), t.flags |= Ii, Ta(e, t, p, a), t.child;
    }
    function Mp() {
      rl = !0;
    }
    function _m(e, t) {
      (t.mode & Rt) === je && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Vn);
    }
    function Nu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), t0(), Ip(t.lanes), ra(a, t.childLanes) ? (O_(e, t), t.child) : null;
    }
    function F1(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Jr) : s.push(e), a.flags |= Vn, a;
      }
    }
    function RS(e, t) {
      var a = e.lanes;
      return !!ra(a, t);
    }
    function H1(e, t, a) {
      switch (t.tag) {
        case j:
          g0(t), t.stateNode, Of();
          break;
        case K:
          _C(t);
          break;
        case X: {
          var i = t.type;
          Al(i) && Uh(t);
          break;
        }
        case ne:
          mg(t, t.stateNode.containerInfo);
          break;
        case ct: {
          var u = t.memoizedProps.value, s = t.type._context;
          yC(t, s, u);
          break;
        }
        case Ot:
          {
            var f = ra(a, t.childLanes);
            f && (t.flags |= _t);
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
              return zo(t, Uf(el.current)), t.flags |= Ct, null;
            var y = t.child, g = y.childLanes;
            if (ra(a, g))
              return E0(e, t, a);
            zo(t, Uf(el.current));
            var x = Nu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            zo(t, Uf(el.current));
          break;
        }
        case At: {
          var b = (e.flags & Ct) !== Ae, z = ra(a, t.childLanes);
          if (b) {
            if (z)
              return b0(e, t, a);
            t.flags |= Ct;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), zo(t, el.current), z)
            break;
          return null;
        }
        case Ve:
        case Pt:
          return t.lanes = B, h0(e, t, a);
      }
      return Nu(e, t, a);
    }
    function x0(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return F1(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Mh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = RS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ct) === Ae)
            return rl = !1, H1(e, t, a);
          (e.flags & ti) !== Ae ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && c_(t)) {
        var f = t.index, p = f_();
        tC(t, p, f);
      }
      switch (t.lanes = B, t.tag) {
        case ie:
          return E1(e, t, t.type, a);
        case pn: {
          var v = t.elementType;
          return g1(e, t, v, a);
        }
        case ge: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : nl(y, g);
          return vS(e, t, y, x, a);
        }
        case X: {
          var b = t.type, z = t.pendingProps, A = t.elementType === b ? z : nl(b, z);
          return y0(e, t, b, A, a);
        }
        case j:
          return h1(e, t, a);
        case K:
          return m1(e, t, a);
        case fe:
          return y1(e, t);
        case Oe:
          return E0(e, t, a);
        case ne:
          return U1(e, t, a);
        case $e: {
          var P = t.type, de = t.pendingProps, Be = t.elementType === P ? de : nl(P, de);
          return d0(e, t, P, Be, a);
        }
        case Te:
          return d1(e, t, a);
        case kn:
          return p1(e, t, a);
        case Ot:
          return v1(e, t, a);
        case ct:
          return A1(e, t, a);
        case lt:
          return j1(e, t, a);
        case mt: {
          var Ue = t.type, zt = t.pendingProps, xt = nl(Ue, zt);
          if (t.type !== t.elementType) {
            var O = Ue.propTypes;
            O && Ki(
              O,
              xt,
              // Resolved for outer only
              "prop",
              Nt(Ue)
            );
          }
          return xt = nl(Ue.type, xt), p0(e, t, Ue, xt, a);
        }
        case Ge:
          return v0(e, t, t.type, t.pendingProps, a);
        case Ut: {
          var V = t.type, L = t.pendingProps, te = t.elementType === V ? L : nl(V, L);
          return S1(e, t, V, te, a);
        }
        case At:
          return b0(e, t, a);
        case Tt:
          break;
        case Ve:
          return h0(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vf(e) {
      e.flags |= _t;
    }
    function k0(e) {
      e.flags |= Bn, e.flags |= ps;
    }
    var D0, TS, O0, L0;
    D0 = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === K || u.tag === fe)
          ub(e, u.stateNode);
        else if (u.tag !== ne) {
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
    }, TS = function(e, t) {
    }, O0 = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = yg(), v = sb(f, a, s, i, u, p);
        t.updateQueue = v, v && Vf(t);
      }
    }, L0 = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = B, i = Ae;
      if (t) {
        if ((e.mode & kt) !== je) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = st(a, st(y.lanes, y.childLanes)), i |= y.subtreeFlags & Yn, i |= y.flags & Yn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = st(a, st(g.lanes, g.childLanes)), i |= g.subtreeFlags & Yn, i |= g.flags & Yn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & kt) !== je) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = st(a, st(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = st(a, st(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function P1(e, t, a) {
      if (b_() && (t.mode & Rt) !== je && (t.flags & Ct) === Ae)
        return oC(t), Of(), t.flags |= On | lu | Aa, !1;
      var i = Ph(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (R_(t), Hr(t), (t.mode & kt) !== je) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Of(), (t.flags & Ct) === Ae && (t.memoizedState = null), t.flags |= _t, Hr(t), (t.mode & kt) !== je) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return sC(), !0;
    }
    function N0(e, t, a) {
      var i = t.pendingProps;
      switch (Gy(t), t.tag) {
        case ie:
        case pn:
        case Ge:
        case ge:
        case $e:
        case Te:
        case kn:
        case Ot:
        case lt:
        case mt:
          return Hr(t), null;
        case X: {
          var u = t.type;
          return Al(u) && zh(t), Hr(t), null;
        }
        case j: {
          var s = t.stateNode;
          if (zf(t), Iy(t), Rg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Ph(t);
            if (f)
              Vf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & On) !== Ae) && (t.flags |= Ua, sC());
            }
          }
          return TS(e, t), Hr(t), null;
        }
        case K: {
          gg(t);
          var v = bC(), y = t.type;
          if (e !== null && t.stateNode != null)
            O0(e, t, y, i, v), e.ref !== t.ref && k0(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = yg(), x = Ph(t);
            if (x)
              E_(t, v, g) && Vf(t);
            else {
              var b = lb(y, i, v, g, t);
              D0(b, t, !1, !1), t.stateNode = b, ob(b, y, i, v) && Vf(t);
            }
            t.ref !== null && k0(t);
          }
          return Hr(t), null;
        }
        case fe: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            L0(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = bC(), de = yg(), Be = Ph(t);
            Be ? C_(t) && Vf(t) : t.stateNode = cb(z, P, de, t);
          }
          return Hr(t), null;
        }
        case Oe: {
          Af(t);
          var Ue = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var zt = P1(e, t, Ue);
            if (!zt)
              return t.flags & Aa ? t : null;
          }
          if ((t.flags & Ct) !== Ae)
            return t.lanes = a, (t.mode & kt) !== je && Wg(t), t;
          var xt = Ue !== null, O = e !== null && e.memoizedState !== null;
          if (xt !== O && xt) {
            var V = t.child;
            if (V.flags |= gi, (t.mode & Rt) !== je) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              L || Sg(el.current, xC) ? Vw() : VS();
            }
          }
          var te = t.updateQueue;
          if (te !== null && (t.flags |= _t), Hr(t), (t.mode & kt) !== je && xt) {
            var Re = t.child;
            Re !== null && (t.treeBaseDuration -= Re.treeBaseDuration);
          }
          return null;
        }
        case ne:
          return zf(t), TS(e, t), e === null && r_(t.stateNode.containerInfo), Hr(t), null;
        case ct:
          var me = t.type._context;
          return sg(me, t), Hr(t), null;
        case Ut: {
          var Je = t.type;
          return Al(Je) && zh(t), Hr(t), null;
        }
        case At: {
          Af(t);
          var rt = t.memoizedState;
          if (rt === null)
            return Hr(t), null;
          var ln = (t.flags & Ct) !== Ae, Vt = rt.rendering;
          if (Vt === null)
            if (ln)
              zp(rt, !1);
            else {
              var Kn = $w() && (e === null || (e.flags & Ct) === Ae);
              if (!Kn)
                for (var Bt = t.child; Bt !== null; ) {
                  var Wn = nm(Bt);
                  if (Wn !== null) {
                    ln = !0, t.flags |= Ct, zp(rt, !1);
                    var sa = Wn.updateQueue;
                    return sa !== null && (t.updateQueue = sa, t.flags |= _t), t.subtreeFlags = Ae, L_(t, a), zo(t, Eg(el.current, Cp)), t.child;
                  }
                  Bt = Bt.sibling;
                }
              rt.tail !== null && zn() > Z0() && (t.flags |= Ct, ln = !0, zp(rt, !1), t.lanes = Pv);
            }
          else {
            if (!ln) {
              var Yr = nm(Vt);
              if (Yr !== null) {
                t.flags |= Ct, ln = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= _t), zp(rt, !0), rt.tail === null && rt.tailMode === "hidden" && !Vt.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              zn() * 2 - rt.renderingStartTime > Z0() && a !== ga && (t.flags |= Ct, ln = !0, zp(rt, !1), t.lanes = Pv);
            }
            if (rt.isBackwards)
              Vt.sibling = t.child, t.child = Vt;
            else {
              var wa = rt.last;
              wa !== null ? wa.sibling = Vt : t.child = Vt, rt.last = Vt;
            }
          }
          if (rt.tail !== null) {
            var xa = rt.tail;
            rt.rendering = xa, rt.tail = xa.sibling, rt.renderingStartTime = zn(), xa.sibling = null;
            var ca = el.current;
            return ln ? ca = Eg(ca, Cp) : ca = Uf(ca), zo(t, ca), xa;
          }
          return Hr(t), null;
        }
        case Tt:
          break;
        case Ve:
        case Pt: {
          PS(t);
          var ju = t.memoizedState, Gf = ju !== null;
          if (e !== null) {
            var Xp = e.memoizedState, Yl = Xp !== null;
            Yl !== Gf && (t.flags |= gi);
          }
          return !Gf || (t.mode & Rt) === je ? Hr(t) : ra($l, ga) && (Hr(t), t.subtreeFlags & (Vn | _t) && (t.flags |= gi)), null;
        }
        case St:
          return null;
        case ft:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function V1(e, t, a) {
      switch (Gy(t), t.tag) {
        case X: {
          var i = t.type;
          Al(i) && zh(t);
          var u = t.flags;
          return u & Aa ? (t.flags = u & -65537 | Ct, (t.mode & kt) !== je && Wg(t), t) : null;
        }
        case j: {
          t.stateNode, zf(t), Iy(t), Rg();
          var s = t.flags;
          return (s & Aa) !== Ae && (s & Ct) === Ae ? (t.flags = s & -65537 | Ct, t) : null;
        }
        case K:
          return gg(t), null;
        case Oe: {
          Af(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Of();
          }
          var p = t.flags;
          return p & Aa ? (t.flags = p & -65537 | Ct, (t.mode & kt) !== je && Wg(t), t) : null;
        }
        case At:
          return Af(t), null;
        case ne:
          return zf(t), null;
        case ct:
          var v = t.type._context;
          return sg(v, t), null;
        case Ve:
        case Pt:
          return PS(t), null;
        case St:
          return null;
        default:
          return null;
      }
    }
    function M0(e, t, a) {
      switch (Gy(t), t.tag) {
        case X: {
          var i = t.type.childContextTypes;
          i != null && zh(t);
          break;
        }
        case j: {
          t.stateNode, zf(t), Iy(t), Rg();
          break;
        }
        case K: {
          gg(t);
          break;
        }
        case ne:
          zf(t);
          break;
        case Oe:
          Af(t);
          break;
        case At:
          Af(t);
          break;
        case ct:
          var u = t.type._context;
          sg(u, t);
          break;
        case Ve:
        case Pt:
          PS(t);
          break;
      }
    }
    var z0 = null;
    z0 = /* @__PURE__ */ new Set();
    var wm = !1, Pr = !1, B1 = typeof WeakSet == "function" ? WeakSet : Set, De = null, Bf = null, $f = null;
    function $1(e) {
      za(null, function() {
        throw e;
      }), fd();
    }
    var Y1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & kt)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function U0(e, t) {
      try {
        jo(mr, e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function bS(e, t, a) {
      try {
        Y1(e, a);
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function I1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function A0(e, t) {
      try {
        F0(e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Xe && ut && e.mode & kt)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            Cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          a.current = null;
    }
    function xm(e, t, a) {
      try {
        a();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    var j0 = !1;
    function Q1(e, t) {
      ab(e.containerInfo), De = t, W1();
      var a = j0;
      return j0 = !1, a;
    }
    function W1() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        (e.subtreeFlags & Sl) !== Ae && t !== null ? (t.return = e, De = t) : q1();
      }
    }
    function q1() {
      for (; De !== null; ) {
        var e = De;
        Zt(e);
        try {
          G1(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        Dn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function G1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Ua) !== Ae) {
        switch (Zt(e), e.tag) {
          case ge:
          case $e:
          case Ge:
            break;
          case X: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Zs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = z0;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", et(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case j: {
            {
              var v = e.stateNode;
              Db(v.containerInfo);
            }
            break;
          }
          case K:
          case fe:
          case ne:
          case Ut:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Dn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== Ya ? Tl(t) : (e & mr) !== Ya && Td(t), (e & jl) !== Ya && Wp(!0), xm(t, a, p), (e & jl) !== Ya && Wp(!1), (e & Fr) !== Ya ? wc() : (e & mr) !== Ya && uo());
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
            (e & Fr) !== Ya ? Fv(t) : (e & mr) !== Ya && Hv(t);
            var f = s.create;
            (e & jl) !== Ya && Wp(!0), s.destroy = f(), (e & jl) !== Ya && Wp(!1), (e & Fr) !== Ya ? Wi() : (e & mr) !== Ya && xc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & mr) !== Ae ? v = "useLayoutEffect" : (s.tag & jl) !== Ae ? v = "useInsertionEffect" : v = "useEffect";
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
    function X1(e, t) {
      if ((t.flags & _t) !== Ae)
        switch (t.tag) {
          case Ot: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ZC(), p = t.alternate === null ? "mount" : "update";
            JC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case j:
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
    function K1(e, t, a, i) {
      if ((a.flags & El) !== Ae)
        switch (a.tag) {
          case ge:
          case $e:
          case Ge: {
            if (!Pr)
              if (a.mode & kt)
                try {
                  Vl(), jo(mr | hr, a);
                } finally {
                  Pl(a);
                }
              else
                jo(mr | hr, a);
            break;
          }
          case X: {
            var u = a.stateNode;
            if (a.flags & _t && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & kt)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), a.mode & kt)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Zs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", et(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", et(a) || "instance")), TC(a, p, u));
            break;
          }
          case j: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case K:
                    y = a.child.stateNode;
                    break;
                  case X:
                    y = a.child.stateNode;
                    break;
                }
              TC(a, v, y);
            }
            break;
          }
          case K: {
            var g = a.stateNode;
            if (t === null && a.flags & _t) {
              var x = a.type, b = a.memoizedProps;
              hb(g, x, b);
            }
            break;
          }
          case fe:
            break;
          case ne:
            break;
          case Ot: {
            {
              var z = a.memoizedProps, A = z.onCommit, P = z.onRender, de = a.stateNode.effectDuration, Be = ZC(), Ue = t === null ? "mount" : "update";
              JC() && (Ue = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, Ue, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Be);
              {
                typeof A == "function" && A(a.memoizedProps.id, Ue, de, Be), qw(a);
                var zt = a.return;
                e: for (; zt !== null; ) {
                  switch (zt.tag) {
                    case j:
                      var xt = zt.stateNode;
                      xt.effectDuration += de;
                      break e;
                    case Ot:
                      var O = zt.stateNode;
                      O.effectDuration += de;
                      break e;
                  }
                  zt = zt.return;
                }
              }
            }
            break;
          }
          case Oe: {
            iw(e, a);
            break;
          }
          case At:
          case Ut:
          case Tt:
          case Ve:
          case Pt:
          case ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Bn && F0(a);
    }
    function J1(e) {
      switch (e.tag) {
        case ge:
        case $e:
        case Ge: {
          if (e.mode & kt)
            try {
              Vl(), U0(e, e.return);
            } finally {
              Pl(e);
            }
          else
            U0(e, e.return);
          break;
        }
        case X: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && I1(e, e.return, t), A0(e, e.return);
          break;
        }
        case K: {
          A0(e, e.return);
          break;
        }
      }
    }
    function Z1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === K) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? _b(u) : xb(i.stateNode, i.memoizedProps);
            } catch (f) {
              Cn(e, e.return, f);
            }
          }
        } else if (i.tag === fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? wb(s) : kb(s, i.memoizedProps);
            } catch (f) {
              Cn(e, e.return, f);
            }
        } else if (!((i.tag === Ve || i.tag === Pt) && i.memoizedState !== null && i !== e)) {
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
    function F0(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case K:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & kt)
            try {
              Vl(), u = t(i);
            } finally {
              Pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", et(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", et(e)), t.current = i;
      }
    }
    function ew(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function H0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, H0(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === K) {
          var a = e.stateNode;
          a !== null && l_(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function tw(e) {
      for (var t = e.return; t !== null; ) {
        if (P0(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function P0(e) {
      return e.tag === K || e.tag === j || e.tag === ne;
    }
    function V0(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || P0(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== K && t.tag !== fe && t.tag !== un; ) {
          if (t.flags & Vn || t.child === null || t.tag === ne)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Vn))
          return t.stateNode;
      }
    }
    function nw(e) {
      var t = tw(e);
      switch (t.tag) {
        case K: {
          var a = t.stateNode;
          t.flags & nn && ($E(a), t.flags &= -33);
          var i = V0(e);
          wS(e, i, a);
          break;
        }
        case j:
        case ne: {
          var u = t.stateNode.containerInfo, s = V0(e);
          _S(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === K || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? Cb(a, s, t) : Sb(a, s);
      } else if (i !== ne) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === K || i === fe;
      if (u) {
        var s = e.stateNode;
        t ? Eb(a, s, t) : gb(a, s);
      } else if (i !== ne) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, il = !1;
    function rw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case K: {
              Vr = i.stateNode, il = !1;
              break e;
            }
            case j: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case ne: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        B0(e, t, a), Vr = null, il = !1;
      }
      ew(a);
    }
    function Fo(e, t, a) {
      for (var i = a.child; i !== null; )
        B0(e, t, i), i = i.sibling;
    }
    function B0(e, t, a) {
      switch (lo(a), a.tag) {
        case K:
          Pr || Yf(a, t);
        case fe: {
          {
            var i = Vr, u = il;
            Vr = null, Fo(e, t, a), Vr = i, il = u, Vr !== null && (il ? Tb(Vr, a.stateNode) : Rb(Vr, a.stateNode));
          }
          return;
        }
        case un: {
          Vr !== null && (il ? bb(Vr, a.stateNode) : jy(Vr, a.stateNode));
          return;
        }
        case ne: {
          {
            var s = Vr, f = il;
            Vr = a.stateNode.containerInfo, il = !0, Fo(e, t, a), Vr = s, il = f;
          }
          return;
        }
        case ge:
        case $e:
        case mt:
        case Ge: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, b = x.destroy, z = x.tag;
                  b !== void 0 && ((z & jl) !== Ya ? xm(a, t, b) : (z & mr) !== Ya && (Td(a), a.mode & kt ? (Vl(), xm(a, t, b), Pl(a)) : xm(a, t, b), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Fo(e, t, a);
          return;
        }
        case X: {
          if (!Pr) {
            Yf(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && bS(a, t, A);
          }
          Fo(e, t, a);
          return;
        }
        case Tt: {
          Fo(e, t, a);
          return;
        }
        case Ve: {
          if (
            // TODO: Remove this dead flag
            a.mode & Rt
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
    function aw(e) {
      e.memoizedState;
    }
    function iw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && $b(s);
          }
        }
      }
    }
    function $0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new B1()), t.forEach(function(i) {
          var u = tx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), xr)
              if (Bf !== null && $f !== null)
                Qp($f, Bf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function lw(e, t, a) {
      Bf = a, $f = e, Zt(t), Y0(t, e), Zt(t), Bf = null, $f = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            rw(e, t, s);
          } catch (v) {
            Cn(s, t, v);
          }
        }
      var f = Ka();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Zt(p), Y0(p, e), p = p.sibling;
      Zt(f);
    }
    function Y0(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ge:
        case $e:
        case mt:
        case Ge: {
          if (ll(t, e), Bl(e), u & _t) {
            try {
              al(jl | hr, e, e.return), jo(jl | hr, e);
            } catch (Je) {
              Cn(e, e.return, Je);
            }
            if (e.mode & kt) {
              try {
                Vl(), al(mr | hr, e, e.return);
              } catch (Je) {
                Cn(e, e.return, Je);
              }
              Pl(e);
            } else
              try {
                al(mr | hr, e, e.return);
              } catch (Je) {
                Cn(e, e.return, Je);
              }
          }
          return;
        }
        case X: {
          ll(t, e), Bl(e), u & Bn && i !== null && Yf(i, i.return);
          return;
        }
        case K: {
          ll(t, e), Bl(e), u & Bn && i !== null && Yf(i, i.return);
          {
            if (e.flags & nn) {
              var s = e.stateNode;
              try {
                $E(s);
              } catch (Je) {
                Cn(e, e.return, Je);
              }
            }
            if (u & _t) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    mb(f, g, y, v, p, e);
                  } catch (Je) {
                    Cn(e, e.return, Je);
                  }
              }
            }
          }
          return;
        }
        case fe: {
          if (ll(t, e), Bl(e), u & _t) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, b = e.memoizedProps, z = i !== null ? i.memoizedProps : b;
            try {
              yb(x, z, b);
            } catch (Je) {
              Cn(e, e.return, Je);
            }
          }
          return;
        }
        case j: {
          if (ll(t, e), Bl(e), u & _t && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Bb(t.containerInfo);
              } catch (Je) {
                Cn(e, e.return, Je);
              }
          }
          return;
        }
        case ne: {
          ll(t, e), Bl(e);
          return;
        }
        case Oe: {
          ll(t, e), Bl(e);
          var P = e.child;
          if (P.flags & gi) {
            var de = P.stateNode, Be = P.memoizedState, Ue = Be !== null;
            if (de.isHidden = Ue, Ue) {
              var zt = P.alternate !== null && P.alternate.memoizedState !== null;
              zt || Pw();
            }
          }
          if (u & _t) {
            try {
              aw(e);
            } catch (Je) {
              Cn(e, e.return, Je);
            }
            $0(e);
          }
          return;
        }
        case Ve: {
          var xt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Rt
          ) {
            var O = Pr;
            Pr = O || xt, ll(t, e), Pr = O;
          } else
            ll(t, e);
          if (Bl(e), u & gi) {
            var V = e.stateNode, L = e.memoizedState, te = L !== null, Re = e;
            if (V.isHidden = te, te && !xt && (Re.mode & Rt) !== je) {
              De = Re;
              for (var me = Re.child; me !== null; )
                De = me, ow(me), me = me.sibling;
            }
            Z1(Re, te);
          }
          return;
        }
        case At: {
          ll(t, e), Bl(e), u & _t && $0(e);
          return;
        }
        case Tt:
          return;
        default: {
          ll(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & Vn) {
        try {
          nw(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & $n && (e.flags &= -4097);
    }
    function uw(e, t, a) {
      Bf = a, $f = t, De = e, I0(e, t, a), Bf = null, $f = null;
    }
    function I0(e, t, a) {
      for (var i = (e.mode & Rt) !== je; De !== null; ) {
        var u = De, s = u.child;
        if (u.tag === Ve && i) {
          var f = u.memoizedState !== null, p = f || wm;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, x = wm, b = Pr;
            wm = p, Pr = g, Pr && !b && (De = u, sw(u));
            for (var z = s; z !== null; )
              De = z, I0(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            De = u, wm = x, Pr = b, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== Ae && s !== null ? (s.return = u, De = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; De !== null; ) {
        var i = De;
        if ((i.flags & El) !== Ae) {
          var u = i.alternate;
          Zt(i);
          try {
            K1(t, u, i, a);
          } catch (f) {
            Cn(i, i.return, f);
          }
          Dn();
        }
        if (i === e) {
          De = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, De = s;
          return;
        }
        De = i.return;
      }
    }
    function ow(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        switch (t.tag) {
          case ge:
          case $e:
          case mt:
          case Ge: {
            if (t.mode & kt)
              try {
                Vl(), al(mr, t, t.return);
              } finally {
                Pl(t);
              }
            else
              al(mr, t, t.return);
            break;
          }
          case X: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && bS(t, t.return, i);
            break;
          }
          case K: {
            Yf(t, t.return);
            break;
          }
          case Ve: {
            var u = t.memoizedState !== null;
            if (u) {
              Q0(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, De = a) : Q0(e);
      }
    }
    function Q0(e) {
      for (; De !== null; ) {
        var t = De;
        if (t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function sw(e) {
      for (; De !== null; ) {
        var t = De, a = t.child;
        if (t.tag === Ve) {
          var i = t.memoizedState !== null;
          if (i) {
            W0(e);
            continue;
          }
        }
        a !== null ? (a.return = t, De = a) : W0(e);
      }
    }
    function W0(e) {
      for (; De !== null; ) {
        var t = De;
        Zt(t);
        try {
          J1(t);
        } catch (i) {
          Cn(t, t.return, i);
        }
        if (Dn(), t === e) {
          De = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, De = a;
          return;
        }
        De = t.return;
      }
    }
    function cw(e, t, a, i) {
      De = t, fw(t, e, a, i);
    }
    function fw(e, t, a, i) {
      for (; De !== null; ) {
        var u = De, s = u.child;
        (u.subtreeFlags & cr) !== Ae && s !== null ? (s.return = u, De = s) : dw(e, t, a, i);
      }
    }
    function dw(e, t, a, i) {
      for (; De !== null; ) {
        var u = De;
        if ((u.flags & ma) !== Ae) {
          Zt(u);
          try {
            pw(t, u, a, i);
          } catch (f) {
            Cn(u, u.return, f);
          }
          Dn();
        }
        if (u === e) {
          De = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, De = s;
          return;
        }
        De = u.return;
      }
    }
    function pw(e, t, a, i) {
      switch (t.tag) {
        case ge:
        case $e:
        case Ge: {
          if (t.mode & kt) {
            Qg();
            try {
              jo(Fr | hr, t);
            } finally {
              Ig(t);
            }
          } else
            jo(Fr | hr, t);
          break;
        }
      }
    }
    function vw(e) {
      De = e, hw();
    }
    function hw() {
      for (; De !== null; ) {
        var e = De, t = e.child;
        if ((De.flags & Jr) !== Ae) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              De = u, gw(u, e);
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
            De = e;
          }
        }
        (e.subtreeFlags & cr) !== Ae && t !== null ? (t.return = e, De = t) : mw();
      }
    }
    function mw() {
      for (; De !== null; ) {
        var e = De;
        (e.flags & ma) !== Ae && (Zt(e), yw(e), Dn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, De = t;
          return;
        }
        De = e.return;
      }
    }
    function yw(e) {
      switch (e.tag) {
        case ge:
        case $e:
        case Ge: {
          e.mode & kt ? (Qg(), al(Fr | hr, e, e.return), Ig(e)) : al(Fr | hr, e, e.return);
          break;
        }
      }
    }
    function gw(e, t) {
      for (; De !== null; ) {
        var a = De;
        Zt(a), Ew(a, t), Dn();
        var i = a.child;
        i !== null ? (i.return = a, De = i) : Sw(e);
      }
    }
    function Sw(e) {
      for (; De !== null; ) {
        var t = De, a = t.sibling, i = t.return;
        if (H0(t), t === e) {
          De = null;
          return;
        }
        if (a !== null) {
          a.return = i, De = a;
          return;
        }
        De = i;
      }
    }
    function Ew(e, t) {
      switch (e.tag) {
        case ge:
        case $e:
        case Ge: {
          e.mode & kt ? (Qg(), al(Fr, e, t), Ig(e)) : al(Fr, e, t);
          break;
        }
      }
    }
    function Cw(e) {
      switch (e.tag) {
        case ge:
        case $e:
        case Ge: {
          try {
            jo(mr | hr, e);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case X: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Rw(e) {
      switch (e.tag) {
        case ge:
        case $e:
        case Ge: {
          try {
            jo(Fr | hr, e);
          } catch (t) {
            Cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Tw(e) {
      switch (e.tag) {
        case ge:
        case $e:
        case Ge: {
          try {
            al(mr | hr, e, e.return);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case X: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && bS(e, e.return, t);
          break;
        }
      }
    }
    function bw(e) {
      switch (e.tag) {
        case ge:
        case $e:
        case Ge:
          try {
            al(Fr | hr, e, e.return);
          } catch (t) {
            Cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Up = Symbol.for;
      Up("selector.component"), Up("selector.has_pseudo_class"), Up("selector.role"), Up("selector.test_id"), Up("selector.text");
    }
    var _w = [];
    function ww() {
      _w.forEach(function(e) {
        return e();
      });
    }
    var xw = ve.ReactCurrentActQueue;
    function kw(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function q0() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && xw.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Dw = Math.ceil, kS = ve.ReactCurrentDispatcher, DS = ve.ReactCurrentOwner, Br = ve.ReactCurrentBatchConfig, ul = ve.ReactCurrentActQueue, Sr = (
      /*             */
      0
    ), G0 = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Mu = 0, Ap = 1, ec = 2, km = 3, jp = 4, X0 = 5, OS = 6, Mt = Sr, ba = null, Fn = null, Er = B, $l = B, LS = ko(B), Cr = Mu, Fp = null, Dm = B, Hp = B, Om = B, Pp = null, Ia = null, NS = 0, K0 = 500, J0 = 1 / 0, Ow = 500, zu = null;
    function Vp() {
      J0 = zn() + Ow;
    }
    function Z0() {
      return J0;
    }
    var Lm = !1, MS = null, If = null, tc = !1, Ho = null, Bp = B, zS = [], US = null, Lw = 50, $p = 0, AS = null, jS = !1, Nm = !1, Nw = 50, Qf = 0, Mm = null, Yp = Kt, zm = B, eR = !1;
    function Um() {
      return ba;
    }
    function _a() {
      return (Mt & ($r | Di)) !== Sr ? zn() : (Yp !== Kt || (Yp = zn()), Yp);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & Rt) === je)
        return We;
      if ((Mt & $r) !== Sr && Er !== B)
        return rr(Er);
      var a = x_() !== w_;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return zm === In && (zm = Md()), zm;
      }
      var u = Sa();
      if (u !== In)
        return u;
      var s = fb();
      return s;
    }
    function Mw(e) {
      var t = e.mode;
      return (t & Rt) === je ? We : Qv();
    }
    function Rr(e, t, a, i) {
      rx(), eR && S("useInsertionEffect must not schedule updates."), jS && (Nm = !0), vo(e, a, i), (Mt & $r) !== B && e === ba ? lx(t) : (xr && qv(e, t, a), ux(t), e === ba && ((Mt & $r) === Sr && (Hp = st(Hp, a)), Cr === jp && Vo(e, Er)), Qa(e, i), a === We && Mt === Sr && (t.mode & Rt) === je && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Vp(), eC()));
    }
    function zw(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Qa(e, a);
    }
    function Uw(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Mt & $r) !== Sr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      $v(e, t);
      var i = na(e, e === ba ? Er : B);
      if (i === B) {
        a !== null && mR(a), e.callbackNode = null, e.callbackPriority = In;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== YS)) {
        a == null && s !== We && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && mR(a);
      var f;
      if (u === We)
        e.tag === Do ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), s_(rR.bind(null, e))) : ZE(rR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : pb(function() {
          (Mt & ($r | Di)) === Sr && Oo();
        }), f = null;
      else {
        var p;
        switch (Xv(i)) {
          case aa:
            p = Qi;
            break;
          case Fa:
            p = vs;
            break;
          case dr:
            p = ou;
            break;
          case tf:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = IS(p, tR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function tR(e, t) {
      if (Z_(), Yp = Kt, zm = B, (Mt & ($r | Di)) !== Sr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = na(e, e === ba ? Er : B);
      if (u === B)
        return null;
      var s = !ws(e, u) && !Iv(e, u) && !t, f = s ? Iw(e, u) : jm(e, u);
      if (f !== Mu) {
        if (f === ec) {
          var p = Wc(e);
          p !== B && (u = p, f = FS(e, p));
        }
        if (f === Ap) {
          var v = Fp;
          throw nc(e, B), Vo(e, u), Qa(e, zn()), v;
        }
        if (f === OS)
          Vo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !jw(g)) {
            if (f = jm(e, u), f === ec) {
              var x = Wc(e);
              x !== B && (u = x, f = FS(e, x));
            }
            if (f === Ap) {
              var b = Fp;
              throw nc(e, B), Vo(e, u), Qa(e, zn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Aw(e, f, u);
        }
      }
      return Qa(e, zn()), e.callbackNode === a ? tR.bind(null, e) : null;
    }
    function FS(e, t) {
      var a = Pp;
      if (mu(e)) {
        var i = nc(e, t);
        i.flags |= On, n_(e.containerInfo);
      }
      var u = jm(e, t);
      if (u !== ec) {
        var s = Ia;
        Ia = a, s !== null && nR(s);
      }
      return u;
    }
    function nR(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function Aw(e, t, a) {
      switch (t) {
        case Mu:
        case Ap:
          throw new Error("Root did not complete. This is a bug in React.");
        case ec: {
          rc(e, Ia, zu);
          break;
        }
        case km: {
          if (Vo(e, a), qc(a) && // do not delay if we're inside an act() scope
          !yR()) {
            var i = NS + K0 - zn();
            if (i > 10) {
              var u = na(e, B);
              if (u !== B)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                _a(), Jc(e, s);
                break;
              }
              e.timeoutHandle = Uy(rc.bind(null, e, Ia, zu), i);
              break;
            }
          }
          rc(e, Ia, zu);
          break;
        }
        case jp: {
          if (Vo(e, a), iy(a))
            break;
          if (!yR()) {
            var f = Dd(e, a), p = f, v = zn() - p, y = nx(v) - v;
            if (y > 10) {
              e.timeoutHandle = Uy(rc.bind(null, e, Ia, zu), y);
              break;
            }
          }
          rc(e, Ia, zu);
          break;
        }
        case X0: {
          rc(e, Ia, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function jw(e) {
      for (var t = e; ; ) {
        if (t.flags & bc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ke(f(), p))
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
      t = xs(t, Om), t = xs(t, Hp), Ud(e, t);
    }
    function rR(e) {
      if (e1(), (Mt & ($r | Di)) !== Sr)
        throw new Error("Should not already be working.");
      Au();
      var t = na(e, B);
      if (!ra(t, We))
        return Qa(e, zn()), null;
      var a = jm(e, t);
      if (e.tag !== Do && a === ec) {
        var i = Wc(e);
        i !== B && (t = i, a = FS(e, i));
      }
      if (a === Ap) {
        var u = Fp;
        throw nc(e, B), Vo(e, t), Qa(e, zn()), u;
      }
      if (a === OS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, rc(e, Ia, zu), Qa(e, zn()), null;
    }
    function Fw(e, t) {
      t !== B && (ks(e, st(t, We)), Qa(e, zn()), (Mt & ($r | Di)) === Sr && (Vp(), Oo()));
    }
    function HS(e, t) {
      var a = Mt;
      Mt |= G0;
      try {
        return e(t);
      } finally {
        Mt = a, Mt === Sr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Vp(), eC());
      }
    }
    function Hw(e, t, a, i, u) {
      var s = Sa(), f = Br.transition;
      try {
        return Br.transition = null, Gn(aa), e(t, a, i, u);
      } finally {
        Gn(s), Br.transition = f, Mt === Sr && Vp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === Do && (Mt & ($r | Di)) === Sr && Au();
      var t = Mt;
      Mt |= G0;
      var a = Br.transition, i = Sa();
      try {
        return Br.transition = null, Gn(aa), e ? e() : void 0;
      } finally {
        Gn(i), Br.transition = a, Mt = t, (Mt & ($r | Di)) === Sr && Oo();
      }
    }
    function aR() {
      return (Mt & ($r | Di)) !== Sr;
    }
    function Am(e, t) {
      ua(LS, $l, e), $l = st($l, t);
    }
    function PS(e) {
      $l = LS.current, la(LS, e);
    }
    function nc(e, t) {
      e.finishedWork = null, e.finishedLanes = B;
      var a = e.timeoutHandle;
      if (a !== Ay && (e.timeoutHandle = Ay, db(a)), Fn !== null)
        for (var i = Fn.return; i !== null; ) {
          var u = i.alternate;
          M0(u, i), i = i.return;
        }
      ba = e;
      var s = ac(e.current, null);
      return Fn = s, Er = $l = t, Cr = Mu, Fp = null, Dm = B, Hp = B, Om = B, Pp = null, Ia = null, z_(), Zi.discardPendingWarnings(), s;
    }
    function iR(e, t) {
      do {
        var a = Fn;
        try {
          if (Qh(), DC(), Dn(), DS.current = null, a === null || a.return === null) {
            Cr = Ap, Fp = t, Fn = null;
            return;
          }
          if (Xe && a.mode & kt && Cm(a, !0), Qe)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              ms(a, i, Er);
            } else
              Ci(a, t, Er);
          s1(e, a.return, a, t, Er), sR(a);
        } catch (u) {
          t = u, Fn === a && a !== null ? (a = a.return, Fn = a) : a = Fn;
          continue;
        }
        return;
      } while (!0);
    }
    function lR() {
      var e = kS.current;
      return kS.current = mm, e === null ? mm : e;
    }
    function uR(e) {
      kS.current = e;
    }
    function Pw() {
      NS = zn();
    }
    function Ip(e) {
      Dm = st(e, Dm);
    }
    function Vw() {
      Cr === Mu && (Cr = km);
    }
    function VS() {
      (Cr === Mu || Cr === km || Cr === ec) && (Cr = jp), ba !== null && (xl(Dm) || xl(Hp)) && Vo(ba, Er);
    }
    function Bw(e) {
      Cr !== jp && (Cr = ec), Pp === null ? Pp = [e] : Pp.push(e);
    }
    function $w() {
      return Cr === Mu;
    }
    function jm(e, t) {
      var a = Mt;
      Mt |= $r;
      var i = lR();
      if (ba !== e || Er !== t) {
        if (xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, Er), u.clear()), Ad(e, t);
        }
        zu = ef(), nc(e, t);
      }
      _d(t);
      do
        try {
          Yw();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      if (Qh(), Mt = a, uR(i), Fn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return bn(), ba = null, Er = B, Cr;
    }
    function Yw() {
      for (; Fn !== null; )
        oR(Fn);
    }
    function Iw(e, t) {
      var a = Mt;
      Mt |= $r;
      var i = lR();
      if (ba !== e || Er !== t) {
        if (xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Qp(e, Er), u.clear()), Ad(e, t);
        }
        zu = ef(), Vp(), nc(e, t);
      }
      _d(t);
      do
        try {
          Qw();
          break;
        } catch (s) {
          iR(e, s);
        }
      while (!0);
      return Qh(), uR(i), Mt = a, Fn !== null ? (wd(), Mu) : (bn(), ba = null, Er = B, Cr);
    }
    function Qw() {
      for (; Fn !== null && !yd(); )
        oR(Fn);
    }
    function oR(e) {
      var t = e.alternate;
      Zt(e);
      var a;
      (e.mode & kt) !== je ? (Yg(e), a = BS(t, e, $l), Cm(e, !0)) : a = BS(t, e, $l), Dn(), e.memoizedProps = e.pendingProps, a === null ? sR(e) : Fn = a, DS.current = null;
    }
    function sR(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === Ae) {
          Zt(t);
          var u = void 0;
          if ((t.mode & kt) === je ? u = N0(a, t, $l) : (Yg(t), u = N0(a, t, $l), Cm(t, !1)), Dn(), u !== null) {
            Fn = u;
            return;
          }
        } else {
          var s = V1(a, t);
          if (s !== null) {
            s.flags &= Lv, Fn = s;
            return;
          }
          if ((t.mode & kt) !== je) {
            Cm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = Ae, i.deletions = null;
          else {
            Cr = OS, Fn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Fn = v;
          return;
        }
        t = i, Fn = t;
      } while (t !== null);
      Cr === Mu && (Cr = X0);
    }
    function rc(e, t, a) {
      var i = Sa(), u = Br.transition;
      try {
        Br.transition = null, Gn(aa), Ww(e, t, a, i);
      } finally {
        Br.transition = u, Gn(i);
      }
      return null;
    }
    function Ww(e, t, a, i) {
      do
        Au();
      while (Ho !== null);
      if (ax(), (Mt & ($r | Di)) !== Sr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (jv(s), u === null)
        return Ei(), null;
      if (s === B && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = B, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = In;
      var f = st(u.lanes, u.childLanes);
      Wv(e, f), e === ba && (ba = null, Fn = null, Er = B), ((u.subtreeFlags & cr) !== Ae || (u.flags & cr) !== Ae) && (tc || (tc = !0, US = a, IS(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Sl | ao | El | cr)) !== Ae, v = (u.flags & (Sl | ao | El | cr)) !== Ae;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = Sa();
        Gn(aa);
        var x = Mt;
        Mt |= Di, DS.current = null, Q1(e, u), e0(), lw(e, u, s), ib(e.containerInfo), e.current = u, ys(s), uw(u, e, s), cu(), Mv(), Mt = x, Gn(g), Br.transition = y;
      } else
        e.current = u, e0();
      var b = tc;
      if (tc ? (tc = !1, Ho = e, Bp = s) : (Qf = 0, Mm = null), f = e.pendingLanes, f === B && (If = null), b || pR(e.current, !1), Ed(u.stateNode, i), xr && e.memoizedUpdaters.clear(), ww(), Qa(e, zn()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var P = t[A], de = P.stack, Be = P.digest;
          z(P.value, {
            componentStack: de,
            digest: Be
          });
        }
      if (Lm) {
        Lm = !1;
        var Ue = MS;
        throw MS = null, Ue;
      }
      return ra(Bp, We) && e.tag !== Do && Au(), f = e.pendingLanes, ra(f, We) ? (J_(), e === AS ? $p++ : ($p = 0, AS = e)) : $p = 0, Oo(), Ei(), null;
    }
    function Au() {
      if (Ho !== null) {
        var e = Xv(Bp), t = kr(dr, e), a = Br.transition, i = Sa();
        try {
          return Br.transition = null, Gn(t), Gw();
        } finally {
          Gn(i), Br.transition = a;
        }
      }
      return !1;
    }
    function qw(e) {
      zS.push(e), tc || (tc = !0, IS(ou, function() {
        return Au(), null;
      }));
    }
    function Gw() {
      if (Ho === null)
        return !1;
      var e = US;
      US = null;
      var t = Ho, a = Bp;
      if (Ho = null, Bp = B, (Mt & ($r | Di)) !== Sr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, Nm = !1, bd(a);
      var i = Mt;
      Mt |= Di, vw(t.current), cw(t, t.current, a, e);
      {
        var u = zS;
        zS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          X1(t, f);
        }
      }
      oo(), pR(t.current, !0), Mt = i, Oo(), Nm ? t === Mm ? Qf++ : (Qf = 0, Mm = t) : Qf = 0, jS = !1, Nm = !1, Cd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cR(e) {
      return If !== null && If.has(e);
    }
    function Xw(e) {
      If === null ? If = /* @__PURE__ */ new Set([e]) : If.add(e);
    }
    function Kw(e) {
      Lm || (Lm = !0, MS = e);
    }
    var Jw = Kw;
    function fR(e, t, a) {
      var i = Js(a, t), u = o0(e, i, We), s = No(e, u, We), f = _a();
      s !== null && (vo(s, We, f), Qa(s, f));
    }
    function Cn(e, t, a) {
      if ($1(a), Wp(!1), e.tag === j) {
        fR(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === j) {
          fR(i, e, a);
          return;
        } else if (i.tag === X) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !cR(s)) {
            var f = Js(a, e), p = oS(i, f, We), v = No(i, p, We), y = _a();
            v !== null && (vo(v, We, y), Qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Zw(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = _a();
      Jc(e, a), ox(e), ba === e && hu(Er, a) && (Cr === jp || Cr === km && qc(Er) && zn() - NS < K0 ? nc(e, B) : Om = st(Om, a)), Qa(e, u);
    }
    function dR(e, t) {
      t === In && (t = Mw(e));
      var a = _a(), i = $a(e, t);
      i !== null && (vo(i, t, a), Qa(i, a));
    }
    function ex(e) {
      var t = e.memoizedState, a = In;
      t !== null && (a = t.retryLane), dR(e, a);
    }
    function tx(e, t) {
      var a = In, i;
      switch (e.tag) {
        case Oe:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case At:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), dR(e, a);
    }
    function nx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Dw(e / 1960) * 1960;
    }
    function rx() {
      if ($p > Lw)
        throw $p = 0, AS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Qf > Nw && (Qf = 0, Mm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ax() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function pR(e, t) {
      Zt(e), Fm(e, Mr, Tw), t && Fm(e, gl, bw), Fm(e, Mr, Cw), t && Fm(e, gl, Rw), Dn();
    }
    function Fm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Ae ? i = i.child : ((i.flags & t) !== Ae && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Hm = null;
    function vR(e) {
      {
        if ((Mt & $r) !== Sr || !(e.mode & Rt))
          return;
        var t = e.tag;
        if (t !== ie && t !== j && t !== X && t !== ge && t !== $e && t !== mt && t !== Ge)
          return;
        var a = et(e) || "ReactComponent";
        if (Hm !== null) {
          if (Hm.has(a))
            return;
          Hm.add(a);
        } else
          Hm = /* @__PURE__ */ new Set([a]);
        var i = er;
        try {
          Zt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Zt(e) : Dn();
        }
      }
    }
    var BS;
    {
      var ix = null;
      BS = function(e, t, a) {
        var i = RR(ix, t);
        try {
          return x0(e, t, a);
        } catch (s) {
          if (y_() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Qh(), DC(), M0(e, t), RR(t, i), t.mode & kt && Yg(t), za(null, x0, null, e, t, a), cd()) {
            var u = fd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var hR = !1, $S;
    $S = /* @__PURE__ */ new Set();
    function lx(e) {
      if (Xr && !G_())
        switch (e.tag) {
          case ge:
          case $e:
          case Ge: {
            var t = Fn && et(Fn) || "Unknown", a = t;
            if (!$S.has(a)) {
              $S.add(a);
              var i = et(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case X: {
            hR || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hR = !0);
            break;
          }
        }
    }
    function Qp(e, t) {
      if (xr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          qv(e, i, t);
        });
      }
    }
    var YS = {};
    function IS(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), YS) : hd(e, t);
      }
    }
    function mR(e) {
      if (e !== YS)
        return md(e);
    }
    function yR() {
      return ul.current !== null;
    }
    function ux(e) {
      {
        if (e.mode & Rt) {
          if (!q0())
            return;
        } else if (!kw() || Mt !== Sr || e.tag !== ge && e.tag !== $e && e.tag !== Ge)
          return;
        if (ul.current === null) {
          var t = er;
          try {
            Zt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, et(e));
          } finally {
            t ? Zt(e) : Dn();
          }
        }
      }
    }
    function ox(e) {
      e.tag !== Do && q0() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Wp(e) {
      eR = e;
    }
    var Oi = null, Wf = null, sx = function(e) {
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
    function QS(e) {
      return qf(e);
    }
    function WS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: q,
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
    function gR(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case X: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ge: {
            (typeof i == "function" || s === tt) && (u = !0);
            break;
          }
          case $e: {
            (s === q || s === tt) && (u = !0);
            break;
          }
          case mt:
          case Ge: {
            (s === Et || s === tt) && (u = !0);
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
    function SR(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Wf === null && (Wf = /* @__PURE__ */ new WeakSet()), Wf.add(e);
      }
    }
    var cx = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          qS(e.current, i, a);
        });
      }
    }, fx = function(e, t) {
      {
        if (e.context !== li)
          return;
        Au(), Uu(function() {
          qp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ge:
          case Ge:
          case X:
            v = p;
            break;
          case $e:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = Oi(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === X ? g = !0 : y = !0));
        }
        if (Wf !== null && (Wf.has(e) || i !== null && Wf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = $a(e, We);
          b !== null && Rr(b, e, We, Kt);
        }
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var dx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return GS(e.current, i, a), a;
      }
    };
    function GS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ge:
          case Ge:
          case X:
            p = f;
            break;
          case $e:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? px(e, a) : i !== null && GS(i, t, a), u !== null && GS(u, t, a);
      }
    }
    function px(e, t) {
      {
        var a = vx(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case K:
              t.add(i.stateNode);
              return;
            case ne:
              t.add(i.stateNode.containerInfo);
              return;
            case j:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function vx(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === K)
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
    var XS;
    {
      XS = !1;
      try {
        var ER = Object.preventExtensions({});
      } catch {
        XS = !0;
      }
    }
    function hx(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ae, this.subtreeFlags = Ae, this.deletions = null, this.lanes = B, this.childLanes = B, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new hx(e, t, a, i);
    };
    function KS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mx(e) {
      return typeof e == "function" && !KS(e) && e.defaultProps === void 0;
    }
    function yx(e) {
      if (typeof e == "function")
        return KS(e) ? X : ge;
      if (e != null) {
        var t = e.$$typeof;
        if (t === q)
          return $e;
        if (t === Et)
          return mt;
      }
      return ie;
    }
    function ac(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ae, a.subtreeFlags = Ae, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Yn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ie:
        case ge:
        case Ge:
          a.type = qf(e.type);
          break;
        case X:
          a.type = QS(e.type);
          break;
        case $e:
          a.type = WS(e.type);
          break;
      }
      return a;
    }
    function gx(e, t) {
      e.flags &= Yn | Vn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = B, e.lanes = t, e.child = null, e.subtreeFlags = Ae, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ae, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Sx(e, t, a) {
      var i;
      return e === Ah ? (i = Rt, t === !0 && (i |= it, i |= rn)) : i = je, xr && (i |= kt), ui(j, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = ie, p = e;
      if (typeof e == "function")
        KS(e) ? (f = X, p = QS(p)) : p = qf(p);
      else if (typeof e == "string")
        f = K;
      else
        e: switch (e) {
          case Wr:
            return Bo(a.children, u, s, t);
          case ci:
            f = kn, u |= it, (u & Rt) !== je && (u |= rn);
            break;
          case fi:
            return Ex(a, u, s, t);
          case ce:
            return Cx(a, u, s, t);
          case pe:
            return Rx(a, u, s, t);
          case Nn:
            return CR(a, u, s, t);
          case dn:
          case bt:
          case Sn:
          case br:
          case vt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = ct;
                  break e;
                case R:
                  f = lt;
                  break e;
                case q:
                  f = $e, p = WS(p);
                  break e;
                case Et:
                  f = mt;
                  break e;
                case tt:
                  f = pn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? et(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function ZS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(Te, e, i, t);
      return u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(Ot, e, i, t | kt);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Cx(e, t, a, i) {
      var u = ui(Oe, e, i, t);
      return u.elementType = ce, u.lanes = a, u;
    }
    function Rx(e, t, a, i) {
      var u = ui(At, e, i, t);
      return u.elementType = pe, u.lanes = a, u;
    }
    function CR(e, t, a, i) {
      var u = ui(Ve, e, i, t);
      u.elementType = Nn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function eE(e, t, a) {
      var i = ui(fe, e, null, t);
      return i.lanes = a, i;
    }
    function Tx() {
      var e = ui(K, null, null, je);
      return e.elementType = "DELETED", e;
    }
    function bx(e) {
      var t = ui(un, null, null, je);
      return t.stateNode = e, t;
    }
    function tE(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(ne, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function RR(e, t) {
      return e === null && (e = ui(ie, null, null, je)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function _x(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ay, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = In, this.eventTimes = Kc(B), this.expirationTimes = Kc(Kt), this.pendingLanes = B, this.suspendedLanes = B, this.pingedLanes = B, this.expiredLanes = B, this.mutableReadLanes = B, this.finishedLanes = B, this.entangledLanes = B, this.entanglements = Kc(B), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < kd; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Ah:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Do:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function TR(e, t, a, i, u, s, f, p, v, y) {
      var g = new _x(e, t, a, p, v), x = Sx(t, s);
      g.current = x, x.stateNode = g;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = b;
      }
      return vg(x), g;
    }
    var nE = "18.3.1";
    function wx(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Ir(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ha,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var rE, aE;
    rE = !1, aE = {};
    function bR(e) {
      if (!e)
        return li;
      var t = ro(e), a = o_(t);
      if (t.tag === X) {
        var i = t.type;
        if (Al(i))
          return KE(t, i, a);
      }
      return a;
    }
    function xx(e, t) {
      {
        var a = ro(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = ea(a);
        if (u === null)
          return null;
        if (u.mode & it) {
          var s = et(a) || "Component";
          if (!aE[s]) {
            aE[s] = !0;
            var f = er;
            try {
              Zt(u), a.mode & it ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Zt(f) : Dn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function _R(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return TR(e, t, v, y, a, i, u, s, f);
    }
    function wR(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = TR(a, i, g, e, u, s, f, p, v);
      x.context = bR(null);
      var b = x.current, z = _a(), A = Po(b), P = Lu(z, A);
      return P.callback = t ?? null, No(b, P, A), zw(x, A, z), x;
    }
    function qp(e, t, a, i) {
      Sd(t, e);
      var u = t.current, s = _a(), f = Po(u);
      kc(f);
      var p = bR(a);
      t.context === null ? t.context = p : t.pendingContext = p, Xr && er !== null && !rE && (rE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, et(er) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Rr(y, u, f, s), Kh(y, u, f)), f;
    }
    function Pm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case K:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function kx(e) {
      switch (e.tag) {
        case j: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Yv(t);
            Fw(t, a);
          }
          break;
        }
        case Oe: {
          Uu(function() {
            var u = $a(e, We);
            if (u !== null) {
              var s = _a();
              Rr(u, e, We, s);
            }
          });
          var i = We;
          iE(e, i);
          break;
        }
      }
    }
    function xR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = zd(a.retryLane, t));
    }
    function iE(e, t) {
      xR(e, t);
      var a = e.alternate;
      a && xR(a, t);
    }
    function Dx(e) {
      if (e.tag === Oe) {
        var t = po, a = $a(e, t);
        if (a !== null) {
          var i = _a();
          Rr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function Ox(e) {
      if (e.tag === Oe) {
        var t = Po(e), a = $a(e, t);
        if (a !== null) {
          var i = _a();
          Rr(a, e, t, i);
        }
        iE(e, t);
      }
    }
    function kR(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var DR = function(e) {
      return null;
    };
    function Lx(e) {
      return DR(e);
    }
    var OR = function(e) {
      return !1;
    };
    function Nx(e) {
      return OR(e);
    }
    var LR = null, NR = null, MR = null, zR = null, UR = null, AR = null, jR = null, FR = null, HR = null;
    {
      var PR = function(e, t, a) {
        var i = t[a], u = ot(e) ? e.slice() : at({}, e);
        return a + 1 === t.length ? (ot(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = PR(e[i], t, a + 1), u);
      }, VR = function(e, t) {
        return PR(e, t, 0);
      }, BR = function(e, t, a, i) {
        var u = t[i], s = ot(e) ? e.slice() : at({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ot(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = BR(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, $R = function(e, t, a) {
        if (t.length !== a.length) {
          Me("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Me("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return BR(e, t, a, 0);
      }, YR = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ot(e) ? e.slice() : at({}, e);
        return s[u] = YR(e[u], t, a + 1, i), s;
      }, IR = function(e, t, a) {
        return YR(e, t, 0, a);
      }, lE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = IR(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = $a(e, We);
          f !== null && Rr(f, e, We, Kt);
        }
      }, NR = function(e, t, a) {
        var i = lE(e, t);
        if (i !== null) {
          var u = VR(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = at({}, e.memoizedProps);
          var s = $a(e, We);
          s !== null && Rr(s, e, We, Kt);
        }
      }, MR = function(e, t, a, i) {
        var u = lE(e, t);
        if (u !== null) {
          var s = $R(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = $a(e, We);
          f !== null && Rr(f, e, We, Kt);
        }
      }, zR = function(e, t, a) {
        e.pendingProps = IR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, We);
        i !== null && Rr(i, e, We, Kt);
      }, UR = function(e, t) {
        e.pendingProps = VR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, We);
        a !== null && Rr(a, e, We, Kt);
      }, AR = function(e, t, a) {
        e.pendingProps = $R(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, We);
        i !== null && Rr(i, e, We, Kt);
      }, jR = function(e) {
        var t = $a(e, We);
        t !== null && Rr(t, e, We, Kt);
      }, FR = function(e) {
        DR = e;
      }, HR = function(e) {
        OR = e;
      };
    }
    function Mx(e) {
      var t = ea(e);
      return t === null ? null : t.stateNode;
    }
    function zx(e) {
      return null;
    }
    function Ux() {
      return er;
    }
    function Ax(e) {
      var t = e.findFiberByHostInstance, a = ve.ReactCurrentDispatcher;
      return gd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: LR,
        overrideHookStateDeletePath: NR,
        overrideHookStateRenamePath: MR,
        overrideProps: zR,
        overridePropsDeletePath: UR,
        overridePropsRenamePath: AR,
        setErrorHandler: FR,
        setSuspenseHandler: HR,
        scheduleUpdate: jR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Mx,
        findFiberByHostInstance: t || zx,
        // React Refresh
        findHostInstancesForRefresh: dx,
        scheduleRefresh: cx,
        scheduleRoot: fx,
        setRefreshHandler: sx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ux,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: nE
      });
    }
    var QR = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function uE(e) {
      this._internalRoot = e;
    }
    Vm.prototype.render = uE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Bm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Pn) {
          var i = kR(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      qp(e, t, null, null);
    }, Vm.prototype.unmount = uE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aR() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          qp(null, e, null, null);
        }), QE(t);
      }
    };
    function jx(e, t) {
      if (!Bm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      WR(e);
      var a = !1, i = !1, u = "", s = QR;
      t != null && (t.hydrate ? Me("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === sr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = _R(e, Ah, null, a, i, u, s);
      Dh(f.current, e);
      var p = e.nodeType === Pn ? e.parentNode : e;
      return ep(p), new uE(f);
    }
    function Vm(e) {
      this._internalRoot = e;
    }
    function Fx(e) {
      e && th(e);
    }
    Vm.prototype.unstable_scheduleHydration = Fx;
    function Hx(e, t, a) {
      if (!Bm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      WR(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = QR;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = wR(t, null, e, Ah, i, s, f, p, v);
      if (Dh(y.current, e), ep(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          $_(y, x);
        }
      return new Vm(y);
    }
    function Bm(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === $i || e.nodeType === Jo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === $i || e.nodeType === Jo || e.nodeType === Pn && e.nodeValue === " react-mount-point-unstable "));
    }
    function WR(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), fp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Px = ve.ReactCurrentOwner, qR;
    qR = function(e) {
      if (e._reactRootContainer && e.nodeType !== Pn) {
        var t = kR(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = oE(e), u = !!(i && xo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function oE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function GR() {
    }
    function Vx(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Pm(f);
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
          GR
        );
        e._reactRootContainer = f, Dh(f.current, e);
        var p = e.nodeType === Pn ? e.parentNode : e;
        return ep(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Pm(g);
            y.call(b);
          };
        }
        var g = _R(
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
          GR
        );
        e._reactRootContainer = g, Dh(g.current, e);
        var x = e.nodeType === Pn ? e.parentNode : e;
        return ep(x), Uu(function() {
          qp(t, g, a, i);
        }), g;
      }
    }
    function Bx(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $m(e, t, a, i, u) {
      qR(a), Bx(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Vx(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Pm(f);
            p.call(v);
          };
        }
        qp(t, f, e, u);
      }
      return Pm(f);
    }
    var XR = !1;
    function $x(e) {
      {
        XR || (XR = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Px.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Nt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : xx(e, "findDOMNode");
    }
    function Yx(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return $m(null, e, t, !0, a);
    }
    function Ix(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = fp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $m(null, e, t, !1, a);
    }
    function Qx(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return $m(e, t, a, !1, i);
    }
    var KR = !1;
    function Wx(e) {
      if (KR || (KR = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = fp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = oE(e), i = a && !xo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          $m(null, null, e, !1, function() {
            e._reactRootContainer = null, QE(e);
          });
        }), !0;
      } else {
        {
          var u = oE(e), s = !!(u && xo(u)), f = e.nodeType === Kr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    uy(kx), Fd(Dx), oy(Ox), nf(Sa), Kv(Gv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), us(GT), Dv(HS, Hw, Uu);
    function qx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Bm(t))
        throw new Error("Target container is not a DOM element.");
      return wx(e, t, null, a);
    }
    function Gx(e, t, a, i) {
      return Qx(e, t, a, i);
    }
    var sE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [xo, _f, Oh, od, Zu, HS]
    };
    function Xx(e, t) {
      return sE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), jx(e, t);
    }
    function Kx(e, t, a) {
      return sE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Hx(e, t, a);
    }
    function Jx(e) {
      return aR() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Zx = Ax({
      findFiberByHostInstance: $s,
      bundleType: 1,
      version: nE,
      rendererPackageName: "react-dom"
    });
    if (!Zx && yt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var JR = window.location.protocol;
      /^(https?|file):$/.test(JR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (JR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sE, qa.createPortal = qx, qa.createRoot = Xx, qa.findDOMNode = $x, qa.flushSync = Jx, qa.hydrate = Yx, qa.hydrateRoot = Kx, qa.render = Ix, qa.unmountComponentAtNode = Wx, qa.unstable_batchedUpdates = HS, qa.unstable_renderSubtreeIntoContainer = Gx, qa.version = nE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), qa;
}
var fT = {};
function dT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (fT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dT);
    } catch (F) {
      console.error(F);
    }
  }
}
fT.NODE_ENV === "production" ? (dT(), mE.exports = fk()) : mE.exports = dk();
var pk = mE.exports, yE, vk = {}, Im = pk;
if (vk.NODE_ENV === "production")
  yE = Im.createRoot, Im.hydrateRoot;
else {
  var oT = Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  yE = function(F, W) {
    oT.usingClientEntryPoint = !0;
    try {
      return Im.createRoot(F, W);
    } finally {
      oT.usingClientEntryPoint = !1;
    }
  };
}
const hk = (F) => {
  if (!F.designOptions || F.designOptions !== "custom_design") return;
  const W = JSON.parse(F.customDesigns);
  document.documentElement.style.setProperty("--barn2-bundles-bundle-text-color", W.bundleTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-text-color", W.highlightedTextColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-border-color", W.bundleBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-border-color", W.highlightedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-color", W.highlightedColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-badge-color", W.badgeBackgroundColor), document.documentElement.style.setProperty("--barn2-bundles-badge-text-color", W.badgeTextColor), document.documentElement.style.setProperty("--barn2-bundles-table-color", W.tableColor), document.documentElement.style.setProperty("--barn2-bundles-header-text-color", W.headerTextColor), document.documentElement.style.setProperty("--barn2-bundles-background-color", W.backgroundColor), document.documentElement.style.setProperty("--barn2-bundles-text-color", W.textColor), document.documentElement.style.setProperty("--barn2-bundles-label-color", W.labelColor), document.documentElement.style.setProperty("--barn2-bundles-label-text-color", W.lebelTextColor), document.documentElement.style.setProperty("--barn2-bundles-border-color", W.borderColor);
  let _ = "0";
  switch (W.cornerRadius) {
    case "slightlyRounded":
      _ = "12px";
      break;
    case "fullyRounded":
      _ = "50px";
      break;
    case "square":
    default:
      _ = "0";
  }
  document.documentElement.style.setProperty("--barn2-bundles-corner-radius", _);
}, pT = () => {
  const F = document.querySelector(".product-form__input.product-form__quantity, quantity-selector-component.quantity-selector");
  F && F.style.removeProperty("display");
  const W = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker");
  W && W.style.removeProperty("display");
}, $o = (F, W) => {
  const _ = document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]');
  if (!_) return;
  let ve = _.querySelector(`input[name="${F}"]`);
  ve ? ve.value = W : (ve = document.createElement("input"), ve.type = "hidden", ve.name = F, ve.value = W, _.appendChild(ve));
}, ev = (F, W) => {
  const _ = typeof W == "number" ? W : parseFloat(W);
  if (isNaN(_)) return W;
  const ve = {
    "{{amount}}": () => _ % 1 === 0 ? _.toString() : _.toFixed(2),
    "{{amount_no_decimals}}": () => Math.round(_).toString(),
    "{{amount_with_comma_separator}}": () => (_ % 1 === 0 ? _.toString() : _.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    "{{amount_no_decimals_with_comma_separator}}": () => Math.round(_).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    "{{amount_with_apostrophe_separator}}": () => (_ % 1 === 0 ? _.toString() : _.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, "'"),
    "{{amount_no_decimals_with_space_separator}}": () => Math.round(_).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
    "{{amount_with_space_separator}}": () => (_ % 1 === 0 ? _.toString() : _.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, " "),
    "{{amount_with_period_and_space_separator}}": () => (_ % 1 === 0 ? _.toString() : _.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ". ")
  };
  for (const [qe, Me] of Object.entries(ve))
    if (F.includes(qe))
      return F.replace(qe, Me());
  const ye = _ % 1 === 0 ? _.toString() : _.toFixed(2);
  return F.replace("{{amount}}", ye);
};
var vT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(F) {
  (function() {
    var W = function() {
      function _() {
      }
      _.prototype = /* @__PURE__ */ Object.create(null);
      function ve(ie, j) {
        for (var ne = j.length, K = 0; K < ne; ++K)
          ge(ie, j[K]);
      }
      var ye = {}.hasOwnProperty;
      function qe(ie, j) {
        ie[j] = !0;
      }
      function Me(ie, j) {
        if (j.toString !== Object.prototype.toString && !j.toString.toString().includes("[native code]")) {
          ie[j.toString()] = !0;
          return;
        }
        for (var ne in j)
          ye.call(j, ne) && (ie[ne] = !!j[ne]);
      }
      var S = /\s+/;
      function Ie(ie, j) {
        for (var ne = j.split(S), K = ne.length, fe = 0; fe < K; ++fe)
          ie[ne[fe]] = !0;
      }
      function ge(ie, j) {
        if (j) {
          var ne = typeof j;
          ne === "string" ? Ie(ie, j) : Array.isArray(j) ? ve(ie, j) : ne === "object" ? Me(ie, j) : ne === "number" && qe(ie, j);
        }
      }
      function X() {
        for (var ie = arguments.length, j = Array(ie), ne = 0; ne < ie; ne++)
          j[ne] = arguments[ne];
        var K = new _();
        ve(K, j);
        var fe = [];
        for (var Te in K)
          K[Te] && fe.push(Te);
        return fe.join(" ");
      }
      return X;
    }();
    F.exports ? (W.default = W, F.exports = W) : window.classNames = W;
  })();
})(vT);
var mk = vT.exports;
const dE = /* @__PURE__ */ nk(mk);
function yk({
  bundleData: F,
  isInEditor: W,
  currentVariant: _,
  storeDetails: ve
}) {
  var ze, Qe, Xe, ut;
  const [ye, qe] = Ht.useState(null), [Me, S] = Ht.useState([]), [Ie, ge] = Ht.useState(), [X, ie] = Ht.useState([]), [j, ne] = Ht.useState({}), [K, fe] = Ht.useState(((Qe = (ze = window.b2ProductData) == null ? void 0 : ze.product) == null ? void 0 : Qe.options) || []), [Te, kn] = Ht.useState(((ut = (Xe = window.b2ProductData) == null ? void 0 : Xe.product) == null ? void 0 : ut.variants) || []), [lt, ct] = Ht.useState([]), $e = Ht.useRef(lt), Ot = Ht.useRef(ye), Oe = () => {
    const Q = X == null ? void 0 : X.displaySaving, Z = X == null ? void 0 : X.amountSaved;
    return Q ? Q !== "none" : Z === !0;
  }, mt = () => {
    const Q = X == null ? void 0 : X.displaySaving, Z = X == null ? void 0 : X.amountSaved;
    return Q || (Z === !0 ? "percentage_saving" : "none");
  }, Ge = (Q) => {
    let Z = "";
    const he = mt();
    if (!Q.discount)
      return Z = /* @__PURE__ */ Fe.jsx("span", { children: "Regular price" }), Z;
    if (he === "exact_saving")
      if (Q.discount_type === "amount")
        Z = /* @__PURE__ */ Fe.jsxs("span", { children: [
          "Save ",
          ev(ve == null ? void 0 : ve.moneyFormat, Q.discount)
        ] });
      else {
        const Ye = pn(), yt = Q.quantity * Ye * Q.discount / 100;
        Z = /* @__PURE__ */ Fe.jsxs("span", { children: [
          "Save ",
          ev(ve == null ? void 0 : ve.moneyFormat, yt)
        ] });
      }
    else if (he === "percentage_saving")
      if (Q.discount_type === "amount") {
        const Ye = pn(), dt = Q.quantity * Ye, yt = (Q.discount / dt * 100).toFixed(0);
        Z = /* @__PURE__ */ Fe.jsxs("span", { children: [
          "Save ",
          yt,
          "%"
        ] });
      } else
        Z = /* @__PURE__ */ Fe.jsxs("span", { children: [
          "Save ",
          Q.discount,
          "%"
        ] });
    return Z;
  }, pn = (Q) => (W ? window.b2ProductData.product.price : _.price) / 100, Ut = (Q, Z = "discounted") => {
    let he = 0;
    if (ye && lt && Q.id === (ye == null ? void 0 : ye.id) ? he = lt.reduce((yt, gt) => yt + gt.price / 100, 0) : he = pn() * Q.quantity, Z === "regular")
      return un(he);
    let Ye = he;
    if (Q.discount_type === "percentage" && Q.discount) {
      const dt = he * Q.discount / 100;
      Ye = he - dt;
    } else Q.discount_type === "amount" && Q.discount && (Ye = he - Q.discount);
    return un(Ye);
  }, un = (Q) => {
    const Z = Number(Q), he = Number(Z.toFixed(2));
    return ev(ve == null ? void 0 : ve.moneyFormat, he);
  }, At = (Q) => {
    const Z = document.querySelector('.product-form__input.product-form__quantity input[type="number"], input[name="quantity"]');
    Z ? (Z.value = Q, Z.dispatchEvent(new Event("change", { bubbles: !0 }))) : $o("quantity", Q);
  }, Tt = () => {
    const Q = document.querySelector('.product-variant-id, [ref="variantId"]');
    Q && (Q.value = _.id, Q.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, Ve = (Q) => ye ? ye.id === Q.id : !1, Pt = (Q, Z) => {
    if (!(lt != null && lt[Q])) return "";
    const he = lt[Q].options;
    return (he == null ? void 0 : he[Z]) || "";
  }, St = () => {
    if (ye === null) return;
    const Q = Array.from({ length: ye.quantity }, () => ({
      available: _.available,
      id: _.id,
      options: [..._.options],
      price: _.price
    }));
    ct(Q);
  }, ft = (Q) => {
    new URL(window.location.href).searchParams.set("variant", Q), window.dispatchEvent(new Event("popstate"));
    const he = document.querySelector('.product-variant-id, [ref="variantId"]');
    he && (he.value = Q, he.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, I = (Q, Z, he) => {
    ct((Ye) => {
      const dt = Ye.map((gt, Qt) => Qt === Z ? {
        ...gt,
        options: gt.options.map(
          (vn, hn) => hn === he ? Q.target.value : vn
        )
      } : gt), yt = Te.find((gt) => gt.options.every(
        (Qt, vn) => Qt === dt[Z].options[vn]
      ));
      return ft(yt.id), dt[Z].id = yt.id, dt[Z].available = yt.available, dt[Z].price = yt.price, dt;
    });
  }, be = (Q) => {
    const Z = ye && ye.id === Q.id;
    return {
      highlighted: !ye && Q.highlighted,
      selected: Z
    };
  }, oe = (Q) => {
    ye && ye.id === Q.id ? qe(null) : (qe(Q), (ye == null ? void 0 : ye.id) !== (Q == null ? void 0 : Q.id) && (At(Q.quantity), Tt()));
  };
  Ht.useEffect(() => {
    const Q = Me.find((Z) => Z.highlighted);
    Q && !ye && (At(Q.quantity), k());
  }, [Me]), Ht.useEffect(() => {
    St();
  }, [ye, _]), Ht.useEffect(() => {
    ye !== null && (At(ye.quantity), k(), Ot.current = ye);
  }, [ye]), Ht.useEffect(() => {
    const Q = (Ye, dt = 5e3) => new Promise((yt, gt) => {
      const Qt = Date.now(), vn = () => {
        const hn = document.querySelector(Ye);
        hn ? yt(hn) : Date.now() - Qt > dt ? gt(new Error(`Element ${Ye} not found within ${dt}ms`)) : setTimeout(vn, 100);
      };
      vn();
    }), Z = async () => {
      try {
        const Ye = await Q('form[action="/cart/add"] [type="submit"]'), dt = (yt) => {
          const gt = document.querySelector('[action="/cart/add"] [type="submit"]');
          if (!(gt != null && gt.classList.contains("b2-different-variants-selected")))
            return;
          yt.preventDefault(), yt.target.setAttribute("disabled", "disabled");
          const Qt = document.querySelector('.product-variant-id, [ref="variantId"]'), vn = $e.current, hn = Ot.current;
          let wn = !1;
          const fa = vn.filter((jt) => jt.id === parseInt(Qt.value) && !wn ? (wn = !0, !1) : !0).filter((jt) => jt.available).map((jt) => jt.id).reduce((jt, Rn) => (jt[Rn] = (jt[Rn] || 0) + 1, jt), {}), ur = {
            items: Object.entries(fa).map(([jt, Rn]) => ({
              id: parseInt(jt),
              quantity: Rn,
              properties: {
                _barn2_discount_campaign_name: F.name,
                _barn2_discount_bundle_type: "volume_discount",
                _barn2_discount_volume_bundles: F.volumeBundles || ""
              }
            }))
          };
          fetch("/cart/add.js", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(ur)
          }).then(() => {
            gt.removeAttribute("disabled");
            const jt = new SubmitEvent("submit", {
              bubbles: !0,
              cancelable: !0
            });
            (gt == null ? void 0 : gt.closest("form")).dispatchEvent(jt);
          });
        };
        return Ye.addEventListener("click", dt), () => {
          Ye.removeEventListener("click", dt);
        };
      } catch {
        return () => {
        };
      }
    };
    let he = null;
    return Z().then((Ye) => {
      he = Ye;
    }), () => {
      he && he();
    };
  }, []), Ht.useEffect(() => {
    if (lt.length === 0) return;
    $e.current = lt;
    const Q = lt.every(
      (Ye, dt, yt) => Ye.id === yt[0].id
    ), Z = document.querySelector('[action="/cart/add"] [type="submit"]'), he = document.querySelector(".shopify-payment-button");
    Q ? (At(lt.length), Z == null || Z.classList.remove("b2-different-variants-selected"), he && (he.style.display = "")) : (At(1), Z == null || Z.classList.add("b2-different-variants-selected"), he && (he.style.display = "none"));
  }, [lt]), Ht.useEffect(() => {
    S(JSON.parse(F.volumeBundles || [])), ie(JSON.parse(F.previewOptions || {})), ne(JSON.parse(F.customDesigns || {})), ge(F.layout);
  }, []);
  const k = (Q) => {
    document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]') && ($o(
      "properties[_barn2_discount_campaign_name]",
      F.name || ""
    ), $o(
      "properties[_barn2_discount_bundle_type]",
      "volume_discount"
    ), $o(
      "properties[_barn2_discount_volume_bundles]",
      F.volumeBundles || ""
    ));
  };
  return /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-discount-bundles", children: [
    F.previewEnabled && /* @__PURE__ */ Fe.jsxs(Fe.Fragment, { children: [
      (X == null ? void 0 : X.title) && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Fe.jsx("span", { children: X == null ? void 0 : X.title }) }),
      (X == null ? void 0 : X.description) && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Fe.jsx("span", { children: X == null ? void 0 : X.description }) })
    ] }),
    /* @__PURE__ */ Fe.jsx(
      "div",
      {
        className: dE(
          "barn2-discount-bundles-list",
          `barn2-dbs-layout-${Ie}`,
          `discount-columns-${Me.length}`,
          `barn2-bundle-corner-${(j == null ? void 0 : j.cornerRadius) || "square"}`
        ),
        children: Me.map((Q, Z) => /* @__PURE__ */ Fe.jsxs(
          "div",
          {
            className: dE(
              "barn2-discount-bundle",
              be(Q)
            ),
            onClick: () => oe(Q),
            children: [
              Q.label.length > 0 && /* @__PURE__ */ Fe.jsx("span", { className: "barn2-highlighted-text", children: Q.label }),
              /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-dbs-top", children: [
                /* @__PURE__ */ Fe.jsx("span", { className: "barn2-input-circle" }),
                /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-dbs-text-block-wrapper", children: [
                  /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-dbs-text-block", children: [
                    /* @__PURE__ */ Fe.jsx("h4", { className: "barn2-dbs-bundle-title", children: Q.description }),
                    Oe() && /* @__PURE__ */ Fe.jsx("p", { children: Ge(Q) })
                  ] }),
                  F.layout === "horizontal" && Ve(Q) && Te.length > 1 && Y()
                ] })
              ] }),
              /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-dbs-bottom", children: [
                /* @__PURE__ */ Fe.jsx("span", { className: "barn2-dbs-price", children: Ut(Q, "discounted") }),
                X.showOriginalPrice && parseFloat(Q.discount) !== 0 && /* @__PURE__ */ Fe.jsx(
                  "span",
                  {
                    className: dE(
                      "barn2-dbs-regular-price",
                      {
                        "price-strike-through": parseFloat(Q.discount) !== 0
                      }
                    ),
                    children: Ut(Q, "regular")
                  }
                )
              ] })
            ]
          },
          Z
        ))
      }
    ),
    F.layout === "vertical" && Te.length > 1 && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-bars-wrapper", children: Y() })
  ] });
  function Y() {
    return /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-bars", children: Array.from({ length: ye == null ? void 0 : ye.quantity }).map((Q, Z) => {
      var he, Ye;
      return /* @__PURE__ */ Fe.jsxs("div", { children: [
        /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-db-bar", "data-variant-available": (he = lt[Z]) == null ? void 0 : he.available, children: [
          /* @__PURE__ */ Fe.jsx("span", { className: "barn2-db-bar-number", children: Z + 1 }),
          /* @__PURE__ */ Fe.jsx("div", { className: `barn2-dbs-select-variants barn2-dbs-variants-number-${K.length}`, children: K.map((dt, yt) => /* @__PURE__ */ Fe.jsx("div", { className: "barn2-dbs-variant", children: /* @__PURE__ */ Fe.jsx(
            "select",
            {
              value: Pt(Z, yt),
              onChange: (gt) => {
                I(gt, Z, yt);
              },
              children: dt.values.map((gt, Qt) => /* @__PURE__ */ Fe.jsx("option", { value: gt, children: gt }, Qt))
            }
          ) }, yt)) })
        ] }),
        !((Ye = lt[Z]) != null && Ye.available) && /* @__PURE__ */ Fe.jsx("p", { className: "barn2-dbs-stock-unavailable", children: "Sorry, this is currently unavailable." })
      ] }, Z);
    }) });
  }
}
function gk({
  bundleData: F,
  isInEditor: W,
  currentVariant: _,
  storeDetails: ve
}) {
  const [ye, qe] = Ht.useState([]), [Me, S] = Ht.useState([]);
  Ht.useEffect(() => {
    qe(JSON.parse(F.pricingTiers || [])), S(JSON.parse(F.previewOptions || {})), F && ie(), pT();
  }, []);
  const Ie = (j) => {
    let ne;
    return j.discount_type === "percentage" ? ne = j.discount + "% off" : ne = ev(ve == null ? void 0 : ve.moneyFormat, j.discount) + " off", /* @__PURE__ */ Fe.jsx("span", { className: "b2-pricing-tier-discount", children: ne });
  }, ge = () => (W ? window.b2ProductData.product.price : _.price) / 100, X = (j) => {
    let ne = ge();
    if (j.discount_type === "percentage" && j.discount) {
      const K = ge() * j.discount / 100;
      ne = ge() - K;
    } else j.discount_type === "amount" && j.discount && (ne = ge() - j.discount);
    return Math.max(0, ne.toFixed(2));
  }, ie = () => {
    document.querySelector('product-form.product-form form, product-form-component [action="/cart/add"]') && ($o(
      "properties[_barn2_discount_campaign_name]",
      F.name || ""
    ), $o(
      "properties[_barn2_discount_bundle_type]",
      "bulk_pricing"
    ), $o(
      "properties[_barn2_discount_pricing_tiers]",
      F.pricingTiers || ""
    ), $o(
      "properties[_barn2_discount_applies_to]",
      F.discountCalculation || "individual_products"
    ));
  };
  return F.previewEnabled ? /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-bulk-table-wrapper", children: [
    F.previewEnabled && /* @__PURE__ */ Fe.jsxs(Fe.Fragment, { children: [
      (Me == null ? void 0 : Me.title) && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Fe.jsx("span", { children: Me == null ? void 0 : Me.title }) }),
      (Me == null ? void 0 : Me.description) && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Fe.jsx("span", { children: Me == null ? void 0 : Me.description }) })
    ] }),
    /* @__PURE__ */ Fe.jsx("div", { className: "barn2-bulk-table-container", children: /* @__PURE__ */ Fe.jsxs("table", { className: "barn2-bulk-table", children: [
      /* @__PURE__ */ Fe.jsx("thead", { children: /* @__PURE__ */ Fe.jsxs("tr", { children: [
        /* @__PURE__ */ Fe.jsx("th", { children: "Quantity" }),
        /* @__PURE__ */ Fe.jsx("th", { children: "Discount" }),
        /* @__PURE__ */ Fe.jsx("th", { children: "Price per item" })
      ] }) }),
      /* @__PURE__ */ Fe.jsx("tbody", { children: ye.length > 0 && ye.map((j, ne) => /* @__PURE__ */ Fe.jsxs("tr", { children: [
        /* @__PURE__ */ Fe.jsx("td", { children: j.max_quantity === 0 || !j.max_quantity ? `${j.min_quantity}+` : `${j.min_quantity}-${j.max_quantity}` }),
        /* @__PURE__ */ Fe.jsx("td", { children: /* @__PURE__ */ Fe.jsx("span", { className: "discount-pill", children: Ie(j) }) }),
        /* @__PURE__ */ Fe.jsx("td", { children: ev(ve == null ? void 0 : ve.moneyFormat, X(j)) })
      ] }, ne)) })
    ] }) })
  ] }) : null;
}
function Sk({ bundleData: F, isInEditor: W, storeDetails: _ }) {
  const [ve, ye] = Ht.useState(null), [qe, Me] = Ht.useState(!1), S = () => {
    var j, ne;
    const ie = ((ne = (j = window.b2ProductData) == null ? void 0 : j.product) == null ? void 0 : ne.variants) || [];
    return ie.length > 0 ? ie[0] : 0;
  }, Ie = (ie) => {
    var K, fe;
    const ne = (((fe = (K = window.b2ProductData) == null ? void 0 : K.product) == null ? void 0 : fe.variants) || []).find((Te) => Te.id === Number(ie));
    ne && ye(ne);
  }, ge = () => {
    const ie = document.querySelector(".product-form__input.product-form__quantity, quantity-selector-component.quantity-selector");
    ie && (ie.style.display = "none");
  }, X = () => {
    const ie = document.querySelector(".product__info-container variant-selects, .product__info-wrapper variant-selects, .product-page-section variant-selects, .product__info-wrapper variant-radios, variant-picker.variant-picker");
    ie && (ie.style.display = "none");
  };
  if (Ht.useEffect(() => {
    const j = new URLSearchParams(window.location.search).get("variant");
    j ? Ie(j) : ye(S());
    const ne = new MutationObserver((fe) => {
      fe.forEach((Te) => {
        if (Te.type === "attributes" || Te.type === "childList") {
          const lt = new URLSearchParams(window.location.search).get("variant");
          lt && Ie(lt);
        }
      });
    }), K = document.querySelector("form[action*='/cart/add']");
    return K && ne.observe(K, { attributes: !0, childList: !0, subtree: !0 }), () => {
      ne.disconnect();
    };
  }, []), Ht.useEffect(() => {
    const ie = new MutationObserver((ne) => {
      ne.forEach((K) => {
        var Te;
        K.target.closest('form[action*="/cart/add"]') && K.type === "attributes" && K.attributeName === "class" && !K.target.classList.contains("loading") && (Te = K.oldValue) != null && Te.includes("loading") && Me(!0);
      });
    }), j = document.querySelector('form[action*="/cart/add"] button[type="submit"]');
    return j && ie.observe(j, {
      attributes: !0,
      attributeOldValue: !0
    }), () => {
      ie.disconnect();
    };
  }, []), Ht.useEffect(() => {
    hk(F), F.type === "volume_bundle" && (ge(), X());
  }, []), ve !== null) {
    if (ve !== null && F.type === "volume_bundle")
      return /* @__PURE__ */ Fe.jsx(
        yk,
        {
          bundleData: F,
          isInEditor: W,
          currentVariant: ve,
          storeDetails: _
        }
      );
    if (ve !== null && F.type === "bulk_pricing")
      return /* @__PURE__ */ Fe.jsx(
        gk,
        {
          bundleData: F,
          isInEditor: W,
          currentVariant: ve,
          storeDetails: _
        }
      );
  }
}
function Ek() {
  var ie, j, ne, K;
  const [F, W] = Ht.useState((ne = (j = (ie = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : ie.meta) == null ? void 0 : j.product) == null ? void 0 : ne.id), [_, ve] = Ht.useState(null), [ye, qe] = Ht.useState(((K = window == null ? void 0 : window.b2ProductData) == null ? void 0 : K.isDesignMode) || !1), [Me, S] = Ht.useState({}), [Ie, ge] = Ht.useState(!1), X = async (fe) => {
    try {
      return await (await fetch("/apps/barn2-bundles-bulk-discounts/discountbundle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: fe,
          isInEditor: ye
        })
      })).json();
    } catch {
      return ge(!0), null;
    }
  };
  return Ht.useEffect(() => {
    (async () => {
      try {
        const Te = await X(F);
        if ((Te == null ? void 0 : Te.success) === !1) {
          ge(!0);
          return;
        } else
          ve(Te == null ? void 0 : Te.eligibleProductBundle), S(Te == null ? void 0 : Te.store);
      } catch {
      }
    })();
  }, [F, ye]), Ht.useEffect(() => {
    Ie && pT();
  }, [Ie]), _ && /* @__PURE__ */ Fe.jsx(
    Sk,
    {
      bundleData: _,
      isInEditor: ye,
      storeDetails: Me,
      unHideQuantityVariantBlocks: Ie
    }
  );
}
const pE = (F) => {
  yE(F).render(/* @__PURE__ */ Fe.jsx(Ek, {}));
}, sT = document.getElementById("barn2_discounts_block");
if (sT)
  pE(sT);
else {
  const F = document.querySelector("product-form-component"), W = document.querySelector('form[action="/cart/add"]');
  if (F) {
    const _ = document.createElement("div");
    _.id = "barn2_discounts", _.classList.add("barn2_discounts"), F.insertBefore(_, F.firstChild), pE(_);
  } else if (W) {
    const _ = document.createElement("div");
    _.id = "barn2_discounts", _.classList.add("barn2_discounts"), W.parentNode.insertBefore(_, W), pE(_);
  }
}
