var cE = { exports: {} }, qp = {}, fE = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q0;
function Xb() {
  if (q0) return gt;
  q0 = 1;
  var ee = Symbol.for("react.element"), oe = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), wt = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), Ot = Symbol.for("react.provider"), xt = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), dt = Symbol.for("react.suspense"), be = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Be = Symbol.iterator;
  function Z(b) {
    return b === null || typeof b != "object" ? null : (b = Be && b[Be] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var Fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, le = Object.assign, we = {};
  function ut(b, $, De) {
    this.props = b, this.context = $, this.refs = we, this.updater = De || Fe;
  }
  ut.prototype.isReactComponent = {}, ut.prototype.setState = function(b, $) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, $, "setState");
  }, ut.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Hn() {
  }
  Hn.prototype = ut.prototype;
  function rn(b, $, De) {
    this.props = b, this.context = $, this.refs = we, this.updater = De || Fe;
  }
  var rt = rn.prototype = new Hn();
  rt.constructor = rn, le(rt, ut.prototype), rt.isPureReactComponent = !0;
  var Ne = Array.isArray, bt = Object.prototype.hasOwnProperty, Ce = { current: null }, ot = { key: !0, ref: !0, __self: !0, __source: !0 };
  function He(b, $, De) {
    var Ve, $e = {}, nt = null, St = null;
    if ($ != null) for (Ve in $.ref !== void 0 && (St = $.ref), $.key !== void 0 && (nt = "" + $.key), $) bt.call($, Ve) && !ot.hasOwnProperty(Ve) && ($e[Ve] = $[Ve]);
    var Qe = arguments.length - 2;
    if (Qe === 1) $e.children = De;
    else if (1 < Qe) {
      for (var mt = Array(Qe), Vt = 0; Vt < Qe; Vt++) mt[Vt] = arguments[Vt + 2];
      $e.children = mt;
    }
    if (b && b.defaultProps) for (Ve in Qe = b.defaultProps, Qe) $e[Ve] === void 0 && ($e[Ve] = Qe[Ve]);
    return { $$typeof: ee, type: b, key: nt, ref: St, props: $e, _owner: Ce.current };
  }
  function Sn(b, $) {
    return { $$typeof: ee, type: b.type, key: $, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function Lt(b) {
    return typeof b == "object" && b !== null && b.$$typeof === ee;
  }
  function fn(b) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(De) {
      return $[De];
    });
  }
  var $t = /\/+/g;
  function ht(b, $) {
    return typeof b == "object" && b !== null && b.key != null ? fn("" + b.key) : $.toString(36);
  }
  function Me(b, $, De, Ve, $e) {
    var nt = typeof b;
    (nt === "undefined" || nt === "boolean") && (b = null);
    var St = !1;
    if (b === null) St = !0;
    else switch (nt) {
      case "string":
      case "number":
        St = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case ee:
          case oe:
            St = !0;
        }
    }
    if (St) return St = b, $e = $e(St), b = Ve === "" ? "." + ht(St, 0) : Ve, Ne($e) ? (De = "", b != null && (De = b.replace($t, "$&/") + "/"), Me($e, $, De, "", function(Vt) {
      return Vt;
    })) : $e != null && (Lt($e) && ($e = Sn($e, De + (!$e.key || St && St.key === $e.key ? "" : ("" + $e.key).replace($t, "$&/") + "/") + b)), $.push($e)), 1;
    if (St = 0, Ve = Ve === "" ? "." : Ve + ":", Ne(b)) for (var Qe = 0; Qe < b.length; Qe++) {
      nt = b[Qe];
      var mt = Ve + ht(nt, Qe);
      St += Me(nt, $, De, mt, $e);
    }
    else if (mt = Z(b), typeof mt == "function") for (b = mt.call(b), Qe = 0; !(nt = b.next()).done; ) nt = nt.value, mt = Ve + ht(nt, Qe++), St += Me(nt, $, De, mt, $e);
    else if (nt === "object") throw $ = String(b), Error("Objects are not valid as a React child (found: " + ($ === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : $) + "). If you meant to render a collection of children, use an array instead.");
    return St;
  }
  function At(b, $, De) {
    if (b == null) return b;
    var Ve = [], $e = 0;
    return Me(b, Ve, "", "", function(nt) {
      return $.call(De, nt, $e++);
    }), Ve;
  }
  function pt(b) {
    if (b._status === -1) {
      var $ = b._result;
      $ = $(), $.then(function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = De);
      }, function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = De);
      }), b._status === -1 && (b._status = 0, b._result = $);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var tt = { current: null }, B = { transition: null }, me = { ReactCurrentDispatcher: tt, ReactCurrentBatchConfig: B, ReactCurrentOwner: Ce };
  function re() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: At, forEach: function(b, $, De) {
    At(b, function() {
      $.apply(this, arguments);
    }, De);
  }, count: function(b) {
    var $ = 0;
    return At(b, function() {
      $++;
    }), $;
  }, toArray: function(b) {
    return At(b, function($) {
      return $;
    }) || [];
  }, only: function(b) {
    if (!Lt(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, gt.Component = ut, gt.Fragment = A, gt.Profiler = Ut, gt.PureComponent = rn, gt.StrictMode = wt, gt.Suspense = dt, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, gt.act = re, gt.cloneElement = function(b, $, De) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Ve = le({}, b.props), $e = b.key, nt = b.ref, St = b._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (nt = $.ref, St = Ce.current), $.key !== void 0 && ($e = "" + $.key), b.type && b.type.defaultProps) var Qe = b.type.defaultProps;
      for (mt in $) bt.call($, mt) && !ot.hasOwnProperty(mt) && (Ve[mt] = $[mt] === void 0 && Qe !== void 0 ? Qe[mt] : $[mt]);
    }
    var mt = arguments.length - 2;
    if (mt === 1) Ve.children = De;
    else if (1 < mt) {
      Qe = Array(mt);
      for (var Vt = 0; Vt < mt; Vt++) Qe[Vt] = arguments[Vt + 2];
      Ve.children = Qe;
    }
    return { $$typeof: ee, type: b.type, key: $e, ref: nt, props: Ve, _owner: St };
  }, gt.createContext = function(b) {
    return b = { $$typeof: xt, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: Ot, _context: b }, b.Consumer = b;
  }, gt.createElement = He, gt.createFactory = function(b) {
    var $ = He.bind(null, b);
    return $.type = b, $;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, gt.isValidElement = Lt, gt.lazy = function(b) {
    return { $$typeof: pe, _payload: { _status: -1, _result: b }, _init: pt };
  }, gt.memo = function(b, $) {
    return { $$typeof: be, type: b, compare: $ === void 0 ? null : $ };
  }, gt.startTransition = function(b) {
    var $ = B.transition;
    B.transition = {};
    try {
      b();
    } finally {
      B.transition = $;
    }
  }, gt.unstable_act = re, gt.useCallback = function(b, $) {
    return tt.current.useCallback(b, $);
  }, gt.useContext = function(b) {
    return tt.current.useContext(b);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(b) {
    return tt.current.useDeferredValue(b);
  }, gt.useEffect = function(b, $) {
    return tt.current.useEffect(b, $);
  }, gt.useId = function() {
    return tt.current.useId();
  }, gt.useImperativeHandle = function(b, $, De) {
    return tt.current.useImperativeHandle(b, $, De);
  }, gt.useInsertionEffect = function(b, $) {
    return tt.current.useInsertionEffect(b, $);
  }, gt.useLayoutEffect = function(b, $) {
    return tt.current.useLayoutEffect(b, $);
  }, gt.useMemo = function(b, $) {
    return tt.current.useMemo(b, $);
  }, gt.useReducer = function(b, $, De) {
    return tt.current.useReducer(b, $, De);
  }, gt.useRef = function(b) {
    return tt.current.useRef(b);
  }, gt.useState = function(b) {
    return tt.current.useState(b);
  }, gt.useSyncExternalStore = function(b, $, De) {
    return tt.current.useSyncExternalStore(b, $, De);
  }, gt.useTransition = function() {
    return tt.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var Kp = { exports: {} };
Kp.exports;
var X0;
function Kb() {
  return X0 || (X0 = 1, function(ee, oe) {
    var A = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    A.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var wt = "18.3.1", Ut = Symbol.for("react.element"), Ot = Symbol.for("react.portal"), xt = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), dt = Symbol.for("react.profiler"), be = Symbol.for("react.provider"), pe = Symbol.for("react.context"), Be = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), ut = Symbol.for("react.offscreen"), Hn = Symbol.iterator, rn = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Hn && h[Hn] || h[rn];
        return typeof C == "function" ? C : null;
      }
      var Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, bt = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ot = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, He = {}, Sn = null;
      function Lt(h) {
        Sn = h;
      }
      He.setExtraStackFrame = function(h) {
        Sn = h;
      }, He.getCurrentStack = null, He.getStackAddendum = function() {
        var h = "";
        Sn && (h += Sn);
        var C = He.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var fn = !1, $t = !1, ht = !1, Me = !1, At = !1, pt = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: bt,
        ReactCurrentOwner: ot
      };
      pt.ReactDebugCurrentFrame = He, pt.ReactCurrentActQueue = Ce;
      function tt(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          me("warn", h, M);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          me("error", h, M);
        }
      }
      function me(h, C, M) {
        {
          var F = pt.ReactDebugCurrentFrame, X = F.getStackAddendum();
          X !== "" && (C += "%s", M = M.concat([X]));
          var he = M.map(function(se) {
            return String(se);
          });
          he.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, he);
        }
      }
      var re = {};
      function b(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", X = F + "." + C;
          if (re[X])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), re[X] = !0;
        }
      }
      var $ = {
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
          b(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, M, F) {
          b(h, "replaceState");
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
        enqueueSetState: function(h, C, M, F) {
          b(h, "setState");
        }
      }, De = Object.assign, Ve = {};
      Object.freeze(Ve);
      function $e(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || $;
      }
      $e.prototype.isReactComponent = {}, $e.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, $e.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var nt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, St = function(h, C) {
          Object.defineProperty($e.prototype, h, {
            get: function() {
              tt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Qe in nt)
          nt.hasOwnProperty(Qe) && St(Qe, nt[Qe]);
      }
      function mt() {
      }
      mt.prototype = $e.prototype;
      function Vt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || $;
      }
      var bn = Vt.prototype = new mt();
      bn.constructor = Vt, De(bn, $e.prototype), bn.isPureReactComponent = !0;
      function Qn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var rr = Array.isArray;
      function Dn(h) {
        return rr(h);
      }
      function Sr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Vn(h) {
        try {
          return kn(h), !1;
        } catch {
          return !0;
        }
      }
      function kn(h) {
        return "" + h;
      }
      function oa(h) {
        if (Vn(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(h)), kn(h);
      }
      function Wa(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var X = C.displayName || C.name || "";
        return X !== "" ? M + "(" + X + ")" : M;
      }
      function br(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case xt:
            return "Fragment";
          case Ot:
            return "Portal";
          case dt:
            return "Profiler";
          case S:
            return "StrictMode";
          case Z:
            return "Suspense";
          case Fe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var C = h;
              return br(C) + ".Consumer";
            case be:
              var M = h;
              return br(M._context) + ".Provider";
            case Be:
              return Wa(h, h.render, "ForwardRef");
            case le:
              var F = h.displayName || null;
              return F !== null ? F : Pn(h.type) || "Memo";
            case we: {
              var X = h, he = X._payload, se = X._init;
              try {
                return Pn(se(he));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Wn = Object.prototype.hasOwnProperty, Gn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Er, Ga, On;
      On = {};
      function ar(h) {
        if (Wn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function $r(h) {
        if (Wn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Oi(h, C) {
        var M = function() {
          Er || (Er = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function sa(h, C) {
        var M = function() {
          Ga || (Ga = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function K(h) {
        if (typeof h.ref == "string" && ot.current && h.__self && ot.current.stateNode !== h.__self) {
          var C = Pn(ot.current.type);
          On[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), On[C] = !0);
        }
      }
      var Oe = function(h, C, M, F, X, he, se) {
        var Ue = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ut,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: se,
          // Record the component responsible for creating this element.
          _owner: he
        };
        return Ue._store = {}, Object.defineProperty(Ue._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ue, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ue, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: X
        }), Object.freeze && (Object.freeze(Ue.props), Object.freeze(Ue)), Ue;
      };
      function Ze(h, C, M) {
        var F, X = {}, he = null, se = null, Ue = null, et = null;
        if (C != null) {
          ar(C) && (se = C.ref, K(C)), $r(C) && (oa(C.key), he = "" + C.key), Ue = C.__self === void 0 ? null : C.__self, et = C.__source === void 0 ? null : C.__source;
          for (F in C)
            Wn.call(C, F) && !Gn.hasOwnProperty(F) && (X[F] = C[F]);
        }
        var Ft = arguments.length - 2;
        if (Ft === 1)
          X.children = M;
        else if (Ft > 1) {
          for (var Qt = Array(Ft), Wt = 0; Wt < Ft; Wt++)
            Qt[Wt] = arguments[Wt + 2];
          Object.freeze && Object.freeze(Qt), X.children = Qt;
        }
        if (h && h.defaultProps) {
          var Xe = h.defaultProps;
          for (F in Xe)
            X[F] === void 0 && (X[F] = Xe[F]);
        }
        if (he || se) {
          var Zt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          he && Oi(X, Zt), se && sa(X, Zt);
        }
        return Oe(h, he, se, Ue, et, ot.current, X);
      }
      function Mt(h, C) {
        var M = Oe(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function an(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, X = De({}, h.props), he = h.key, se = h.ref, Ue = h._self, et = h._source, Ft = h._owner;
        if (C != null) {
          ar(C) && (se = C.ref, Ft = ot.current), $r(C) && (oa(C.key), he = "" + C.key);
          var Qt;
          h.type && h.type.defaultProps && (Qt = h.type.defaultProps);
          for (F in C)
            Wn.call(C, F) && !Gn.hasOwnProperty(F) && (C[F] === void 0 && Qt !== void 0 ? X[F] = Qt[F] : X[F] = C[F]);
        }
        var Wt = arguments.length - 2;
        if (Wt === 1)
          X.children = M;
        else if (Wt > 1) {
          for (var Xe = Array(Wt), Zt = 0; Zt < Wt; Zt++)
            Xe[Zt] = arguments[Zt + 2];
          X.children = Xe;
        }
        return Oe(h.type, he, se, Ue, et, Ft, X);
      }
      function ln(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ut;
      }
      var un = ".", qn = ":";
      function tn(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(X) {
          return M[X];
        });
        return "$" + F;
      }
      var Yt = !1, Nt = /\/+/g;
      function ca(h) {
        return h.replace(Nt, "$&/");
      }
      function _a(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (oa(h.key), tn("" + h.key)) : C.toString(36);
      }
      function ba(h, C, M, F, X) {
        var he = typeof h;
        (he === "undefined" || he === "boolean") && (h = null);
        var se = !1;
        if (h === null)
          se = !0;
        else
          switch (he) {
            case "string":
            case "number":
              se = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ut:
                case Ot:
                  se = !0;
              }
          }
        if (se) {
          var Ue = h, et = X(Ue), Ft = F === "" ? un + _a(Ue, 0) : F;
          if (Dn(et)) {
            var Qt = "";
            Ft != null && (Qt = ca(Ft) + "/"), ba(et, C, Qt, "", function(Xf) {
              return Xf;
            });
          } else et != null && (ln(et) && (et.key && (!Ue || Ue.key !== et.key) && oa(et.key), et = Mt(
            et,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (et.key && (!Ue || Ue.key !== et.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ca("" + et.key) + "/"
            ) : "") + Ft
          )), C.push(et));
          return 1;
        }
        var Wt, Xe, Zt = 0, Cn = F === "" ? un : F + qn;
        if (Dn(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            Wt = h[Zl], Xe = Cn + _a(Wt, Zl), Zt += ba(Wt, C, M, Xe, X);
        else {
          var Go = rt(h);
          if (typeof Go == "function") {
            var Vi = h;
            Go === Vi.entries && (Yt || tt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Yt = !0);
            for (var Jl = Go.call(Vi), qo, qf = 0; !(qo = Jl.next()).done; )
              Wt = qo.value, Xe = Cn + _a(Wt, qf++), Zt += ba(Wt, C, M, Xe, X);
          } else if (he === "object") {
            var uc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (uc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : uc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Zt;
      }
      function Li(h, C, M) {
        if (h == null)
          return h;
        var F = [], X = 0;
        return ba(h, F, "", "", function(he) {
          return C.call(M, he, X++);
        }), F;
      }
      function Yl(h) {
        var C = 0;
        return Li(h, function() {
          C++;
        }), C;
      }
      function Il(h, C, M) {
        Li(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Mi(h) {
        return Li(h, function(C) {
          return C;
        }) || [];
      }
      function Ql(h) {
        if (!ln(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function oi(h) {
        var C = {
          $$typeof: pe,
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
          $$typeof: be,
          _context: C
        };
        var M = !1, F = !1, X = !1;
        {
          var he = {
            $$typeof: pe,
            _context: C
          };
          Object.defineProperties(he, {
            Provider: {
              get: function() {
                return F || (F = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(se) {
                C.Provider = se;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(se) {
                C._currentValue = se;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(se) {
                C._currentValue2 = se;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(se) {
                C._threadCount = se;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(se) {
                X || (tt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", se), X = !0);
              }
            }
          }), C.Consumer = he;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var fa = -1, ir = 0, da = 1, Yr = 2;
      function si(h) {
        if (h._status === fa) {
          var C = h._result, M = C();
          if (M.then(function(he) {
            if (h._status === ir || h._status === fa) {
              var se = h;
              se._status = da, se._result = he;
            }
          }, function(he) {
            if (h._status === ir || h._status === fa) {
              var se = h;
              se._status = Yr, se._result = he;
            }
          }), h._status === fa) {
            var F = h;
            F._status = ir, F._result = M;
          }
        }
        if (h._status === da) {
          var X = h._result;
          return X === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, X), "default" in X || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, X), X.default;
        } else
          throw h._result;
      }
      function ci(h) {
        var C = {
          // We use these fields to store the result.
          _status: fa,
          _result: h
        }, M = {
          $$typeof: we,
          _payload: C,
          _init: si
        };
        {
          var F, X;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(he) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = he, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return X;
              },
              set: function(he) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), X = he, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Ni(h) {
        h != null && h.$$typeof === le ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Be,
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
            set: function(F) {
              M = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Y(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === xt || h === dt || At || h === S || h === Z || h === Fe || Me || h === ut || fn || $t || ht || typeof h == "object" && h !== null && (h.$$typeof === we || h.$$typeof === le || h.$$typeof === be || h.$$typeof === pe || h.$$typeof === Be || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ne(h, C) {
        Y(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: le,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(X) {
              F = X, !h.name && !h.displayName && (h.displayName = X);
            }
          });
        }
        return M;
      }
      function ie() {
        var h = Ne.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function at(h) {
        var C = ie();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ye(h) {
        var C = ie();
        return C.useState(h);
      }
      function st(h, C, M) {
        var F = ie();
        return F.useReducer(h, C, M);
      }
      function Je(h) {
        var C = ie();
        return C.useRef(h);
      }
      function En(h, C) {
        var M = ie();
        return M.useEffect(h, C);
      }
      function nn(h, C) {
        var M = ie();
        return M.useInsertionEffect(h, C);
      }
      function on(h, C) {
        var M = ie();
        return M.useLayoutEffect(h, C);
      }
      function Cr(h, C) {
        var M = ie();
        return M.useCallback(h, C);
      }
      function qa(h, C) {
        var M = ie();
        return M.useMemo(h, C);
      }
      function zt(h, C, M) {
        var F = ie();
        return F.useImperativeHandle(h, C, M);
      }
      function dn(h, C) {
        {
          var M = ie();
          return M.useDebugValue(h, C);
        }
      }
      function Ge() {
        var h = ie();
        return h.useTransition();
      }
      function fi(h) {
        var C = ie();
        return C.useDeferredValue(h);
      }
      function zi() {
        var h = ie();
        return h.useId();
      }
      function rc(h, C, M) {
        var F = ie();
        return F.useSyncExternalStore(h, C, M);
      }
      var Ui = 0, ul, Ir, Bo, Dr, $o, ac, ic;
      function Ai() {
      }
      Ai.__reactDisabledLog = !0;
      function ol() {
        {
          if (Ui === 0) {
            ul = console.log, Ir = console.info, Bo = console.warn, Dr = console.error, $o = console.group, ac = console.groupCollapsed, ic = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Ai,
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
          Ui++;
        }
      }
      function Qr() {
        {
          if (Ui--, Ui === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: De({}, h, {
                value: ul
              }),
              info: De({}, h, {
                value: Ir
              }),
              warn: De({}, h, {
                value: Bo
              }),
              error: De({}, h, {
                value: Dr
              }),
              group: De({}, h, {
                value: $o
              }),
              groupCollapsed: De({}, h, {
                value: ac
              }),
              groupEnd: De({}, h, {
                value: ic
              })
            });
          }
          Ui < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var di = pt.ReactCurrentDispatcher, sl;
      function Fu(h, C, M) {
        {
          if (sl === void 0)
            try {
              throw Error();
            } catch (X) {
              var F = X.stack.trim().match(/\n( *(at )?)/);
              sl = F && F[1] || "";
            }
          return `
` + sl + h;
        }
      }
      var Fi = !1, Wl;
      {
        var Gl = typeof WeakMap == "function" ? WeakMap : Map;
        Wl = new Gl();
      }
      function cl(h, C) {
        if (!h || Fi)
          return "";
        {
          var M = Wl.get(h);
          if (M !== void 0)
            return M;
        }
        var F;
        Fi = !0;
        var X = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var he;
        he = di.current, di.current = null, ol();
        try {
          if (C) {
            var se = function() {
              throw Error();
            };
            if (Object.defineProperty(se.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(se, []);
              } catch (Cn) {
                F = Cn;
              }
              Reflect.construct(h, [], se);
            } else {
              try {
                se.call();
              } catch (Cn) {
                F = Cn;
              }
              h.call(se.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Cn) {
              F = Cn;
            }
            h();
          }
        } catch (Cn) {
          if (Cn && F && typeof Cn.stack == "string") {
            for (var Ue = Cn.stack.split(`
`), et = F.stack.split(`
`), Ft = Ue.length - 1, Qt = et.length - 1; Ft >= 1 && Qt >= 0 && Ue[Ft] !== et[Qt]; )
              Qt--;
            for (; Ft >= 1 && Qt >= 0; Ft--, Qt--)
              if (Ue[Ft] !== et[Qt]) {
                if (Ft !== 1 || Qt !== 1)
                  do
                    if (Ft--, Qt--, Qt < 0 || Ue[Ft] !== et[Qt]) {
                      var Wt = `
` + Ue[Ft].replace(" at new ", " at ");
                      return h.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", h.displayName)), typeof h == "function" && Wl.set(h, Wt), Wt;
                    }
                  while (Ft >= 1 && Qt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, di.current = he, Qr(), Error.prepareStackTrace = X;
        }
        var Xe = h ? h.displayName || h.name : "", Zt = Xe ? Fu(Xe) : "";
        return typeof h == "function" && Wl.set(h, Zt), Zt;
      }
      function Yo(h, C, M) {
        return cl(h, !1);
      }
      function Io(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function Et(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return cl(h, Io(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case Z:
            return Fu("Suspense");
          case Fe:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Be:
              return Yo(h.render);
            case le:
              return Et(h.type, C, M);
            case we: {
              var F = h, X = F._payload, he = F._init;
              try {
                return Et(he(X), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Qo = {}, ju = pt.ReactDebugCurrentFrame;
      function Ct(h) {
        if (h) {
          var C = h._owner, M = Et(h.type, h._source, C ? C.type : null);
          ju.setExtraStackFrame(M);
        } else
          ju.setExtraStackFrame(null);
      }
      function lc(h, C, M, F, X) {
        {
          var he = Function.call.bind(Wn);
          for (var se in h)
            if (he(h, se)) {
              var Ue = void 0;
              try {
                if (typeof h[se] != "function") {
                  var et = Error((F || "React class") + ": " + M + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw et.name = "Invariant Violation", et;
                }
                Ue = h[se](C, se, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ft) {
                Ue = Ft;
              }
              Ue && !(Ue instanceof Error) && (Ct(X), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, se, typeof Ue), Ct(null)), Ue instanceof Error && !(Ue.message in Qo) && (Qo[Ue.message] = !0, Ct(X), B("Failed %s type: %s", M, Ue.message), Ct(null));
            }
        }
      }
      function pi(h) {
        if (h) {
          var C = h._owner, M = Et(h.type, h._source, C ? C.type : null);
          Lt(M);
        } else
          Lt(null);
      }
      var Pe;
      Pe = !1;
      function ql() {
        if (ot.current) {
          var h = Pn(ot.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Xn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Wr(h) {
        return h != null ? Xn(h.__source) : "";
      }
      var kr = {};
      function vi(h) {
        var C = ql();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function mn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = vi(C);
          if (!kr[M]) {
            kr[M] = !0;
            var F = "";
            h && h._owner && h._owner !== ot.current && (F = " It was passed a child from " + Pn(h._owner.type) + "."), pi(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), pi(null);
          }
        }
      }
      function It(h, C) {
        if (typeof h == "object") {
          if (Dn(h))
            for (var M = 0; M < h.length; M++) {
              var F = h[M];
              ln(F) && mn(F, C);
            }
          else if (ln(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var X = rt(h);
            if (typeof X == "function" && X !== h.entries)
              for (var he = X.call(h), se; !(se = he.next()).done; )
                ln(se.value) && mn(se.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Be || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === le))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Pn(C);
            lc(M, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Pe) {
            Pe = !0;
            var X = Pn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Da(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              pi(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), pi(null);
              break;
            }
          }
          h.ref !== null && (pi(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), pi(null));
        }
      }
      function Rr(h, C, M) {
        var F = Y(h);
        if (!F) {
          var X = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Wr(C);
          he ? X += he : X += ql();
          var se;
          h === null ? se = "null" : Dn(h) ? se = "array" : h !== void 0 && h.$$typeof === Ut ? (se = "<" + (Pn(h.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : se = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", se, X);
        }
        var Ue = Ze.apply(this, arguments);
        if (Ue == null)
          return Ue;
        if (F)
          for (var et = 2; et < arguments.length; et++)
            It(arguments[et], h);
        return h === xt ? Da(Ue) : Xa(Ue), Ue;
      }
      var Or = !1;
      function Gf(h) {
        var C = Rr.bind(null, h);
        return C.type = h, Or || (Or = !0, tt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return tt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Hu(h, C, M) {
        for (var F = an.apply(this, arguments), X = 2; X < arguments.length; X++)
          It(arguments[X], F.type);
        return Xa(F), F;
      }
      function Xl(h, C) {
        var M = bt.transition;
        bt.transition = {};
        var F = bt.transition;
        bt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (bt.transition = M, M === null && F._updatedFibers) {
            var X = F._updatedFibers.size;
            X > 10 && tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Pu = null;
      function Kl(h) {
        if (Pu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = ee && ee[C];
            Pu = M.call(ee, "timers").setImmediate;
          } catch {
            Pu = function(X) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var he = new MessageChannel();
              he.port1.onmessage = X, he.port2.postMessage(void 0);
            };
          }
        return Pu(h);
      }
      var ka = 0, Oa = !1;
      function fl(h) {
        {
          var C = ka;
          ka++, Ce.current === null && (Ce.current = []);
          var M = Ce.isBatchingLegacy, F;
          try {
            if (Ce.isBatchingLegacy = !0, F = h(), !M && Ce.didScheduleLegacyUpdate) {
              var X = Ce.current;
              X !== null && (Ce.didScheduleLegacyUpdate = !1, Hi(X));
            }
          } catch (Xe) {
            throw ji(C), Xe;
          } finally {
            Ce.isBatchingLegacy = M;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var he = F, se = !1, Ue = {
              then: function(Xe, Zt) {
                se = !0, he.then(function(Cn) {
                  ji(C), ka === 0 ? Bu(Cn, Xe, Zt) : Xe(Cn);
                }, function(Cn) {
                  ji(C), Zt(Cn);
                });
              }
            };
            return !Oa && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              se || (Oa = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ue;
          } else {
            var et = F;
            if (ji(C), ka === 0) {
              var Ft = Ce.current;
              Ft !== null && (Hi(Ft), Ce.current = null);
              var Qt = {
                then: function(Xe, Zt) {
                  Ce.current === null ? (Ce.current = [], Bu(et, Xe, Zt)) : Xe(et);
                }
              };
              return Qt;
            } else {
              var Wt = {
                then: function(Xe, Zt) {
                  Xe(et);
                }
              };
              return Wt;
            }
          }
        }
      }
      function ji(h) {
        h !== ka - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ka = h;
      }
      function Bu(h, C, M) {
        {
          var F = Ce.current;
          if (F !== null)
            try {
              Hi(F), Kl(function() {
                F.length === 0 ? (Ce.current = null, C(h)) : Bu(h, C, M);
              });
            } catch (X) {
              M(X);
            }
          else
            C(h);
        }
      }
      var dl = !1;
      function Hi(h) {
        if (!dl) {
          dl = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            dl = !1;
          }
        }
      }
      var $u = Rr, Wo = Hu, La = Gf, Yu = {
        map: Li,
        forEach: Il,
        count: Yl,
        toArray: Mi,
        only: Ql
      };
      oe.Children = Yu, oe.Component = $e, oe.Fragment = xt, oe.Profiler = dt, oe.PureComponent = Vt, oe.StrictMode = S, oe.Suspense = Z, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pt, oe.act = fl, oe.cloneElement = Wo, oe.createContext = oi, oe.createElement = $u, oe.createFactory = La, oe.createRef = Qn, oe.forwardRef = Ni, oe.isValidElement = ln, oe.lazy = ci, oe.memo = ne, oe.startTransition = Xl, oe.unstable_act = fl, oe.useCallback = Cr, oe.useContext = at, oe.useDebugValue = dn, oe.useDeferredValue = fi, oe.useEffect = En, oe.useId = zi, oe.useImperativeHandle = zt, oe.useInsertionEffect = nn, oe.useLayoutEffect = on, oe.useMemo = qa, oe.useReducer = st, oe.useRef = Je, oe.useState = Ye, oe.useSyncExternalStore = rc, oe.useTransition = Ge, oe.version = wt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kp, Kp.exports)), Kp.exports;
}
var Zb = {};
Zb.NODE_ENV === "production" ? fE.exports = Xb() : fE.exports = Kb();
var $m = fE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K0;
function Jb() {
  if (K0) return qp;
  K0 = 1;
  var ee = $m, oe = Symbol.for("react.element"), A = Symbol.for("react.fragment"), wt = Object.prototype.hasOwnProperty, Ut = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ot = { key: !0, ref: !0, __self: !0, __source: !0 };
  function xt(S, dt, be) {
    var pe, Be = {}, Z = null, Fe = null;
    be !== void 0 && (Z = "" + be), dt.key !== void 0 && (Z = "" + dt.key), dt.ref !== void 0 && (Fe = dt.ref);
    for (pe in dt) wt.call(dt, pe) && !Ot.hasOwnProperty(pe) && (Be[pe] = dt[pe]);
    if (S && S.defaultProps) for (pe in dt = S.defaultProps, dt) Be[pe] === void 0 && (Be[pe] = dt[pe]);
    return { $$typeof: oe, type: S, key: Z, ref: Fe, props: Be, _owner: Ut.current };
  }
  return qp.Fragment = A, qp.jsx = xt, qp.jsxs = xt, qp;
}
var Xp = {}, Z0;
function eD() {
  if (Z0) return Xp;
  Z0 = 1;
  var ee = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return ee.NODE_ENV !== "production" && function() {
    var oe = $m, A = Symbol.for("react.element"), wt = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), Ot = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), dt = Symbol.for("react.context"), be = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), le = Symbol.for("react.offscreen"), we = Symbol.iterator, ut = "@@iterator";
    function Hn(R) {
      if (R === null || typeof R != "object")
        return null;
      var Y = we && R[we] || R[ut];
      return typeof Y == "function" ? Y : null;
    }
    var rn = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var Y = arguments.length, ne = new Array(Y > 1 ? Y - 1 : 0), ie = 1; ie < Y; ie++)
          ne[ie - 1] = arguments[ie];
        Ne("error", R, ne);
      }
    }
    function Ne(R, Y, ne) {
      {
        var ie = rn.ReactDebugCurrentFrame, at = ie.getStackAddendum();
        at !== "" && (Y += "%s", ne = ne.concat([at]));
        var Ye = ne.map(function(st) {
          return String(st);
        });
        Ye.unshift("Warning: " + Y), Function.prototype.apply.call(console[R], console, Ye);
      }
    }
    var bt = !1, Ce = !1, ot = !1, He = !1, Sn = !1, Lt;
    Lt = Symbol.for("react.module.reference");
    function fn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ut || R === xt || Sn || R === Ot || R === pe || R === Be || He || R === le || bt || Ce || ot || typeof R == "object" && R !== null && (R.$$typeof === Fe || R.$$typeof === Z || R.$$typeof === S || R.$$typeof === dt || R.$$typeof === be || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Lt || R.getModuleId !== void 0));
    }
    function $t(R, Y, ne) {
      var ie = R.displayName;
      if (ie)
        return ie;
      var at = Y.displayName || Y.name || "";
      return at !== "" ? ne + "(" + at + ")" : ne;
    }
    function ht(R) {
      return R.displayName || "Context";
    }
    function Me(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ut:
          return "Fragment";
        case wt:
          return "Portal";
        case xt:
          return "Profiler";
        case Ot:
          return "StrictMode";
        case pe:
          return "Suspense";
        case Be:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case dt:
            var Y = R;
            return ht(Y) + ".Consumer";
          case S:
            var ne = R;
            return ht(ne._context) + ".Provider";
          case be:
            return $t(R, R.render, "ForwardRef");
          case Z:
            var ie = R.displayName || null;
            return ie !== null ? ie : Me(R.type) || "Memo";
          case Fe: {
            var at = R, Ye = at._payload, st = at._init;
            try {
              return Me(st(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var At = Object.assign, pt = 0, tt, B, me, re, b, $, De;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function $e() {
      {
        if (pt === 0) {
          tt = console.log, B = console.info, me = console.warn, re = console.error, b = console.group, $ = console.groupCollapsed, De = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
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
        pt++;
      }
    }
    function nt() {
      {
        if (pt--, pt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: At({}, R, {
              value: tt
            }),
            info: At({}, R, {
              value: B
            }),
            warn: At({}, R, {
              value: me
            }),
            error: At({}, R, {
              value: re
            }),
            group: At({}, R, {
              value: b
            }),
            groupCollapsed: At({}, R, {
              value: $
            }),
            groupEnd: At({}, R, {
              value: De
            })
          });
        }
        pt < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var St = rn.ReactCurrentDispatcher, Qe;
    function mt(R, Y, ne) {
      {
        if (Qe === void 0)
          try {
            throw Error();
          } catch (at) {
            var ie = at.stack.trim().match(/\n( *(at )?)/);
            Qe = ie && ie[1] || "";
          }
        return `
` + Qe + R;
      }
    }
    var Vt = !1, bn;
    {
      var Qn = typeof WeakMap == "function" ? WeakMap : Map;
      bn = new Qn();
    }
    function rr(R, Y) {
      if (!R || Vt)
        return "";
      {
        var ne = bn.get(R);
        if (ne !== void 0)
          return ne;
      }
      var ie;
      Vt = !0;
      var at = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = St.current, St.current = null, $e();
      try {
        if (Y) {
          var st = function() {
            throw Error();
          };
          if (Object.defineProperty(st.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(st, []);
            } catch (dn) {
              ie = dn;
            }
            Reflect.construct(R, [], st);
          } else {
            try {
              st.call();
            } catch (dn) {
              ie = dn;
            }
            R.call(st.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (dn) {
            ie = dn;
          }
          R();
        }
      } catch (dn) {
        if (dn && ie && typeof dn.stack == "string") {
          for (var Je = dn.stack.split(`
`), En = ie.stack.split(`
`), nn = Je.length - 1, on = En.length - 1; nn >= 1 && on >= 0 && Je[nn] !== En[on]; )
            on--;
          for (; nn >= 1 && on >= 0; nn--, on--)
            if (Je[nn] !== En[on]) {
              if (nn !== 1 || on !== 1)
                do
                  if (nn--, on--, on < 0 || Je[nn] !== En[on]) {
                    var Cr = `
` + Je[nn].replace(" at new ", " at ");
                    return R.displayName && Cr.includes("<anonymous>") && (Cr = Cr.replace("<anonymous>", R.displayName)), typeof R == "function" && bn.set(R, Cr), Cr;
                  }
                while (nn >= 1 && on >= 0);
              break;
            }
        }
      } finally {
        Vt = !1, St.current = Ye, nt(), Error.prepareStackTrace = at;
      }
      var qa = R ? R.displayName || R.name : "", zt = qa ? mt(qa) : "";
      return typeof R == "function" && bn.set(R, zt), zt;
    }
    function Dn(R, Y, ne) {
      return rr(R, !1);
    }
    function Sr(R) {
      var Y = R.prototype;
      return !!(Y && Y.isReactComponent);
    }
    function Vn(R, Y, ne) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return rr(R, Sr(R));
      if (typeof R == "string")
        return mt(R);
      switch (R) {
        case pe:
          return mt("Suspense");
        case Be:
          return mt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case be:
            return Dn(R.render);
          case Z:
            return Vn(R.type, Y, ne);
          case Fe: {
            var ie = R, at = ie._payload, Ye = ie._init;
            try {
              return Vn(Ye(at), Y, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var kn = Object.prototype.hasOwnProperty, oa = {}, Wa = rn.ReactDebugCurrentFrame;
    function br(R) {
      if (R) {
        var Y = R._owner, ne = Vn(R.type, R._source, Y ? Y.type : null);
        Wa.setExtraStackFrame(ne);
      } else
        Wa.setExtraStackFrame(null);
    }
    function Pn(R, Y, ne, ie, at) {
      {
        var Ye = Function.call.bind(kn);
        for (var st in R)
          if (Ye(R, st)) {
            var Je = void 0;
            try {
              if (typeof R[st] != "function") {
                var En = Error((ie || "React class") + ": " + ne + " type `" + st + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[st] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw En.name = "Invariant Violation", En;
              }
              Je = R[st](Y, st, ie, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nn) {
              Je = nn;
            }
            Je && !(Je instanceof Error) && (br(at), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", ne, st, typeof Je), br(null)), Je instanceof Error && !(Je.message in oa) && (oa[Je.message] = !0, br(at), rt("Failed %s type: %s", ne, Je.message), br(null));
          }
      }
    }
    var Wn = Array.isArray;
    function Gn(R) {
      return Wn(R);
    }
    function Er(R) {
      {
        var Y = typeof Symbol == "function" && Symbol.toStringTag, ne = Y && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ne;
      }
    }
    function Ga(R) {
      try {
        return On(R), !1;
      } catch {
        return !0;
      }
    }
    function On(R) {
      return "" + R;
    }
    function ar(R) {
      if (Ga(R))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(R)), On(R);
    }
    var $r = rn.ReactCurrentOwner, Oi = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sa, K;
    function Oe(R) {
      if (kn.call(R, "ref")) {
        var Y = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function Ze(R) {
      if (kn.call(R, "key")) {
        var Y = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Y && Y.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Mt(R, Y) {
      typeof R.ref == "string" && $r.current;
    }
    function an(R, Y) {
      {
        var ne = function() {
          sa || (sa = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function ln(R, Y) {
      {
        var ne = function() {
          K || (K = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Y));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var un = function(R, Y, ne, ie, at, Ye, st) {
      var Je = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: R,
        key: Y,
        ref: ne,
        props: st,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return Je._store = {}, Object.defineProperty(Je._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Je, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(Je, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: at
      }), Object.freeze && (Object.freeze(Je.props), Object.freeze(Je)), Je;
    };
    function qn(R, Y, ne, ie, at) {
      {
        var Ye, st = {}, Je = null, En = null;
        ne !== void 0 && (ar(ne), Je = "" + ne), Ze(Y) && (ar(Y.key), Je = "" + Y.key), Oe(Y) && (En = Y.ref, Mt(Y, at));
        for (Ye in Y)
          kn.call(Y, Ye) && !Oi.hasOwnProperty(Ye) && (st[Ye] = Y[Ye]);
        if (R && R.defaultProps) {
          var nn = R.defaultProps;
          for (Ye in nn)
            st[Ye] === void 0 && (st[Ye] = nn[Ye]);
        }
        if (Je || En) {
          var on = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Je && an(st, on), En && ln(st, on);
        }
        return un(R, Je, En, at, ie, $r.current, st);
      }
    }
    var tn = rn.ReactCurrentOwner, Yt = rn.ReactDebugCurrentFrame;
    function Nt(R) {
      if (R) {
        var Y = R._owner, ne = Vn(R.type, R._source, Y ? Y.type : null);
        Yt.setExtraStackFrame(ne);
      } else
        Yt.setExtraStackFrame(null);
    }
    var ca;
    ca = !1;
    function _a(R) {
      return typeof R == "object" && R !== null && R.$$typeof === A;
    }
    function ba() {
      {
        if (tn.current) {
          var R = Me(tn.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function Li(R) {
      return "";
    }
    var Yl = {};
    function Il(R) {
      {
        var Y = ba();
        if (!Y) {
          var ne = typeof R == "string" ? R : R.displayName || R.name;
          ne && (Y = `

Check the top-level render call using <` + ne + ">.");
        }
        return Y;
      }
    }
    function Mi(R, Y) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ne = Il(Y);
        if (Yl[ne])
          return;
        Yl[ne] = !0;
        var ie = "";
        R && R._owner && R._owner !== tn.current && (ie = " It was passed a child from " + Me(R._owner.type) + "."), Nt(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, ie), Nt(null);
      }
    }
    function Ql(R, Y) {
      {
        if (typeof R != "object")
          return;
        if (Gn(R))
          for (var ne = 0; ne < R.length; ne++) {
            var ie = R[ne];
            _a(ie) && Mi(ie, Y);
          }
        else if (_a(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var at = Hn(R);
          if (typeof at == "function" && at !== R.entries)
            for (var Ye = at.call(R), st; !(st = Ye.next()).done; )
              _a(st.value) && Mi(st.value, Y);
        }
      }
    }
    function oi(R) {
      {
        var Y = R.type;
        if (Y == null || typeof Y == "string")
          return;
        var ne;
        if (typeof Y == "function")
          ne = Y.propTypes;
        else if (typeof Y == "object" && (Y.$$typeof === be || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Y.$$typeof === Z))
          ne = Y.propTypes;
        else
          return;
        if (ne) {
          var ie = Me(Y);
          Pn(ne, R.props, "prop", ie, R);
        } else if (Y.PropTypes !== void 0 && !ca) {
          ca = !0;
          var at = Me(Y);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", at || "Unknown");
        }
        typeof Y.getDefaultProps == "function" && !Y.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function fa(R) {
      {
        for (var Y = Object.keys(R.props), ne = 0; ne < Y.length; ne++) {
          var ie = Y[ne];
          if (ie !== "children" && ie !== "key") {
            Nt(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Nt(null);
            break;
          }
        }
        R.ref !== null && (Nt(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
      }
    }
    var ir = {};
    function da(R, Y, ne, ie, at, Ye) {
      {
        var st = fn(R);
        if (!st) {
          var Je = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Je += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var En = Li();
          En ? Je += En : Je += ba();
          var nn;
          R === null ? nn = "null" : Gn(R) ? nn = "array" : R !== void 0 && R.$$typeof === A ? (nn = "<" + (Me(R.type) || "Unknown") + " />", Je = " Did you accidentally export a JSX literal instead of a component?") : nn = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nn, Je);
        }
        var on = qn(R, Y, ne, at, Ye);
        if (on == null)
          return on;
        if (st) {
          var Cr = Y.children;
          if (Cr !== void 0)
            if (ie)
              if (Gn(Cr)) {
                for (var qa = 0; qa < Cr.length; qa++)
                  Ql(Cr[qa], R);
                Object.freeze && Object.freeze(Cr);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ql(Cr, R);
        }
        if (kn.call(Y, "key")) {
          var zt = Me(R), dn = Object.keys(Y).filter(function(zi) {
            return zi !== "key";
          }), Ge = dn.length > 0 ? "{key: someKey, " + dn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ir[zt + Ge]) {
            var fi = dn.length > 0 ? "{" + dn.join(": ..., ") + ": ...}" : "{}";
            rt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, zt, fi, zt), ir[zt + Ge] = !0;
          }
        }
        return R === Ut ? fa(on) : oi(on), on;
      }
    }
    function Yr(R, Y, ne) {
      return da(R, Y, ne, !0);
    }
    function si(R, Y, ne) {
      return da(R, Y, ne, !1);
    }
    var ci = si, Ni = Yr;
    Xp.Fragment = Ut, Xp.jsx = ci, Xp.jsxs = Ni;
  }(), Xp;
}
var tD = {};
tD.NODE_ENV === "production" ? cE.exports = Jb() : cE.exports = eD();
var xa = cE.exports, dE = { exports: {} }, Ia = {}, Pm = { exports: {} }, oE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J0;
function nD() {
  return J0 || (J0 = 1, function(ee) {
    function oe(B, me) {
      var re = B.length;
      B.push(me);
      e: for (; 0 < re; ) {
        var b = re - 1 >>> 1, $ = B[b];
        if (0 < Ut($, me)) B[b] = me, B[re] = $, re = b;
        else break e;
      }
    }
    function A(B) {
      return B.length === 0 ? null : B[0];
    }
    function wt(B) {
      if (B.length === 0) return null;
      var me = B[0], re = B.pop();
      if (re !== me) {
        B[0] = re;
        e: for (var b = 0, $ = B.length, De = $ >>> 1; b < De; ) {
          var Ve = 2 * (b + 1) - 1, $e = B[Ve], nt = Ve + 1, St = B[nt];
          if (0 > Ut($e, re)) nt < $ && 0 > Ut(St, $e) ? (B[b] = St, B[nt] = re, b = nt) : (B[b] = $e, B[Ve] = re, b = Ve);
          else if (nt < $ && 0 > Ut(St, re)) B[b] = St, B[nt] = re, b = nt;
          else break e;
        }
      }
      return me;
    }
    function Ut(B, me) {
      var re = B.sortIndex - me.sortIndex;
      return re !== 0 ? re : B.id - me.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Ot = performance;
      ee.unstable_now = function() {
        return Ot.now();
      };
    } else {
      var xt = Date, S = xt.now();
      ee.unstable_now = function() {
        return xt.now() - S;
      };
    }
    var dt = [], be = [], pe = 1, Be = null, Z = 3, Fe = !1, le = !1, we = !1, ut = typeof setTimeout == "function" ? setTimeout : null, Hn = typeof clearTimeout == "function" ? clearTimeout : null, rn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function rt(B) {
      for (var me = A(be); me !== null; ) {
        if (me.callback === null) wt(be);
        else if (me.startTime <= B) wt(be), me.sortIndex = me.expirationTime, oe(dt, me);
        else break;
        me = A(be);
      }
    }
    function Ne(B) {
      if (we = !1, rt(B), !le) if (A(dt) !== null) le = !0, pt(bt);
      else {
        var me = A(be);
        me !== null && tt(Ne, me.startTime - B);
      }
    }
    function bt(B, me) {
      le = !1, we && (we = !1, Hn(He), He = -1), Fe = !0;
      var re = Z;
      try {
        for (rt(me), Be = A(dt); Be !== null && (!(Be.expirationTime > me) || B && !fn()); ) {
          var b = Be.callback;
          if (typeof b == "function") {
            Be.callback = null, Z = Be.priorityLevel;
            var $ = b(Be.expirationTime <= me);
            me = ee.unstable_now(), typeof $ == "function" ? Be.callback = $ : Be === A(dt) && wt(dt), rt(me);
          } else wt(dt);
          Be = A(dt);
        }
        if (Be !== null) var De = !0;
        else {
          var Ve = A(be);
          Ve !== null && tt(Ne, Ve.startTime - me), De = !1;
        }
        return De;
      } finally {
        Be = null, Z = re, Fe = !1;
      }
    }
    var Ce = !1, ot = null, He = -1, Sn = 5, Lt = -1;
    function fn() {
      return !(ee.unstable_now() - Lt < Sn);
    }
    function $t() {
      if (ot !== null) {
        var B = ee.unstable_now();
        Lt = B;
        var me = !0;
        try {
          me = ot(!0, B);
        } finally {
          me ? ht() : (Ce = !1, ot = null);
        }
      } else Ce = !1;
    }
    var ht;
    if (typeof rn == "function") ht = function() {
      rn($t);
    };
    else if (typeof MessageChannel < "u") {
      var Me = new MessageChannel(), At = Me.port2;
      Me.port1.onmessage = $t, ht = function() {
        At.postMessage(null);
      };
    } else ht = function() {
      ut($t, 0);
    };
    function pt(B) {
      ot = B, Ce || (Ce = !0, ht());
    }
    function tt(B, me) {
      He = ut(function() {
        B(ee.unstable_now());
      }, me);
    }
    ee.unstable_IdlePriority = 5, ee.unstable_ImmediatePriority = 1, ee.unstable_LowPriority = 4, ee.unstable_NormalPriority = 3, ee.unstable_Profiling = null, ee.unstable_UserBlockingPriority = 2, ee.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, ee.unstable_continueExecution = function() {
      le || Fe || (le = !0, pt(bt));
    }, ee.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Sn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, ee.unstable_getCurrentPriorityLevel = function() {
      return Z;
    }, ee.unstable_getFirstCallbackNode = function() {
      return A(dt);
    }, ee.unstable_next = function(B) {
      switch (Z) {
        case 1:
        case 2:
        case 3:
          var me = 3;
          break;
        default:
          me = Z;
      }
      var re = Z;
      Z = me;
      try {
        return B();
      } finally {
        Z = re;
      }
    }, ee.unstable_pauseExecution = function() {
    }, ee.unstable_requestPaint = function() {
    }, ee.unstable_runWithPriority = function(B, me) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var re = Z;
      Z = B;
      try {
        return me();
      } finally {
        Z = re;
      }
    }, ee.unstable_scheduleCallback = function(B, me, re) {
      var b = ee.unstable_now();
      switch (typeof re == "object" && re !== null ? (re = re.delay, re = typeof re == "number" && 0 < re ? b + re : b) : re = b, B) {
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
      return $ = re + $, B = { id: pe++, callback: me, priorityLevel: B, startTime: re, expirationTime: $, sortIndex: -1 }, re > b ? (B.sortIndex = re, oe(be, B), A(dt) === null && B === A(be) && (we ? (Hn(He), He = -1) : we = !0, tt(Ne, re - b))) : (B.sortIndex = $, oe(dt, B), le || Fe || (le = !0, pt(bt))), B;
    }, ee.unstable_shouldYield = fn, ee.unstable_wrapCallback = function(B) {
      var me = Z;
      return function() {
        var re = Z;
        Z = me;
        try {
          return B.apply(this, arguments);
        } finally {
          Z = re;
        }
      };
    };
  }(oE)), oE;
}
var sE = {}, eT;
function rD() {
  return eT || (eT = 1, function(ee) {
    var oe = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    oe.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, wt = 5;
      function Ut(K, Oe) {
        var Ze = K.length;
        K.push(Oe), S(K, Oe, Ze);
      }
      function Ot(K) {
        return K.length === 0 ? null : K[0];
      }
      function xt(K) {
        if (K.length === 0)
          return null;
        var Oe = K[0], Ze = K.pop();
        return Ze !== Oe && (K[0] = Ze, dt(K, Ze, 0)), Oe;
      }
      function S(K, Oe, Ze) {
        for (var Mt = Ze; Mt > 0; ) {
          var an = Mt - 1 >>> 1, ln = K[an];
          if (be(ln, Oe) > 0)
            K[an] = Oe, K[Mt] = ln, Mt = an;
          else
            return;
        }
      }
      function dt(K, Oe, Ze) {
        for (var Mt = Ze, an = K.length, ln = an >>> 1; Mt < ln; ) {
          var un = (Mt + 1) * 2 - 1, qn = K[un], tn = un + 1, Yt = K[tn];
          if (be(qn, Oe) < 0)
            tn < an && be(Yt, qn) < 0 ? (K[Mt] = Yt, K[tn] = Oe, Mt = tn) : (K[Mt] = qn, K[un] = Oe, Mt = un);
          else if (tn < an && be(Yt, Oe) < 0)
            K[Mt] = Yt, K[tn] = Oe, Mt = tn;
          else
            return;
        }
      }
      function be(K, Oe) {
        var Ze = K.sortIndex - Oe.sortIndex;
        return Ze !== 0 ? Ze : K.id - Oe.id;
      }
      var pe = 1, Be = 2, Z = 3, Fe = 4, le = 5;
      function we(K, Oe) {
      }
      var ut = typeof performance == "object" && typeof performance.now == "function";
      if (ut) {
        var Hn = performance;
        ee.unstable_now = function() {
          return Hn.now();
        };
      } else {
        var rn = Date, rt = rn.now();
        ee.unstable_now = function() {
          return rn.now() - rt;
        };
      }
      var Ne = 1073741823, bt = -1, Ce = 250, ot = 5e3, He = 1e4, Sn = Ne, Lt = [], fn = [], $t = 1, ht = null, Me = Z, At = !1, pt = !1, tt = !1, B = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function b(K) {
        for (var Oe = Ot(fn); Oe !== null; ) {
          if (Oe.callback === null)
            xt(fn);
          else if (Oe.startTime <= K)
            xt(fn), Oe.sortIndex = Oe.expirationTime, Ut(Lt, Oe);
          else
            return;
          Oe = Ot(fn);
        }
      }
      function $(K) {
        if (tt = !1, b(K), !pt)
          if (Ot(Lt) !== null)
            pt = !0, On(De);
          else {
            var Oe = Ot(fn);
            Oe !== null && ar($, Oe.startTime - K);
          }
      }
      function De(K, Oe) {
        pt = !1, tt && (tt = !1, $r()), At = !0;
        var Ze = Me;
        try {
          var Mt;
          if (!A) return Ve(K, Oe);
        } finally {
          ht = null, Me = Ze, At = !1;
        }
      }
      function Ve(K, Oe) {
        var Ze = Oe;
        for (b(Ze), ht = Ot(Lt); ht !== null && !(ht.expirationTime > Ze && (!K || Wa())); ) {
          var Mt = ht.callback;
          if (typeof Mt == "function") {
            ht.callback = null, Me = ht.priorityLevel;
            var an = ht.expirationTime <= Ze, ln = Mt(an);
            Ze = ee.unstable_now(), typeof ln == "function" ? ht.callback = ln : ht === Ot(Lt) && xt(Lt), b(Ze);
          } else
            xt(Lt);
          ht = Ot(Lt);
        }
        if (ht !== null)
          return !0;
        var un = Ot(fn);
        return un !== null && ar($, un.startTime - Ze), !1;
      }
      function $e(K, Oe) {
        switch (K) {
          case pe:
          case Be:
          case Z:
          case Fe:
          case le:
            break;
          default:
            K = Z;
        }
        var Ze = Me;
        Me = K;
        try {
          return Oe();
        } finally {
          Me = Ze;
        }
      }
      function nt(K) {
        var Oe;
        switch (Me) {
          case pe:
          case Be:
          case Z:
            Oe = Z;
            break;
          default:
            Oe = Me;
            break;
        }
        var Ze = Me;
        Me = Oe;
        try {
          return K();
        } finally {
          Me = Ze;
        }
      }
      function St(K) {
        var Oe = Me;
        return function() {
          var Ze = Me;
          Me = Oe;
          try {
            return K.apply(this, arguments);
          } finally {
            Me = Ze;
          }
        };
      }
      function Qe(K, Oe, Ze) {
        var Mt = ee.unstable_now(), an;
        if (typeof Ze == "object" && Ze !== null) {
          var ln = Ze.delay;
          typeof ln == "number" && ln > 0 ? an = Mt + ln : an = Mt;
        } else
          an = Mt;
        var un;
        switch (K) {
          case pe:
            un = bt;
            break;
          case Be:
            un = Ce;
            break;
          case le:
            un = Sn;
            break;
          case Fe:
            un = He;
            break;
          case Z:
          default:
            un = ot;
            break;
        }
        var qn = an + un, tn = {
          id: $t++,
          callback: Oe,
          priorityLevel: K,
          startTime: an,
          expirationTime: qn,
          sortIndex: -1
        };
        return an > Mt ? (tn.sortIndex = an, Ut(fn, tn), Ot(Lt) === null && tn === Ot(fn) && (tt ? $r() : tt = !0, ar($, an - Mt))) : (tn.sortIndex = qn, Ut(Lt, tn), !pt && !At && (pt = !0, On(De))), tn;
      }
      function mt() {
      }
      function Vt() {
        !pt && !At && (pt = !0, On(De));
      }
      function bn() {
        return Ot(Lt);
      }
      function Qn(K) {
        K.callback = null;
      }
      function rr() {
        return Me;
      }
      var Dn = !1, Sr = null, Vn = -1, kn = wt, oa = -1;
      function Wa() {
        var K = ee.unstable_now() - oa;
        return !(K < kn);
      }
      function br() {
      }
      function Pn(K) {
        if (K < 0 || K > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        K > 0 ? kn = Math.floor(1e3 / K) : kn = wt;
      }
      var Wn = function() {
        if (Sr !== null) {
          var K = ee.unstable_now();
          oa = K;
          var Oe = !0, Ze = !0;
          try {
            Ze = Sr(Oe, K);
          } finally {
            Ze ? Gn() : (Dn = !1, Sr = null);
          }
        } else
          Dn = !1;
      }, Gn;
      if (typeof re == "function")
        Gn = function() {
          re(Wn);
        };
      else if (typeof MessageChannel < "u") {
        var Er = new MessageChannel(), Ga = Er.port2;
        Er.port1.onmessage = Wn, Gn = function() {
          Ga.postMessage(null);
        };
      } else
        Gn = function() {
          B(Wn, 0);
        };
      function On(K) {
        Sr = K, Dn || (Dn = !0, Gn());
      }
      function ar(K, Oe) {
        Vn = B(function() {
          K(ee.unstable_now());
        }, Oe);
      }
      function $r() {
        me(Vn), Vn = -1;
      }
      var Oi = br, sa = null;
      ee.unstable_IdlePriority = le, ee.unstable_ImmediatePriority = pe, ee.unstable_LowPriority = Fe, ee.unstable_NormalPriority = Z, ee.unstable_Profiling = sa, ee.unstable_UserBlockingPriority = Be, ee.unstable_cancelCallback = Qn, ee.unstable_continueExecution = Vt, ee.unstable_forceFrameRate = Pn, ee.unstable_getCurrentPriorityLevel = rr, ee.unstable_getFirstCallbackNode = bn, ee.unstable_next = nt, ee.unstable_pauseExecution = mt, ee.unstable_requestPaint = Oi, ee.unstable_runWithPriority = $e, ee.unstable_scheduleCallback = Qe, ee.unstable_shouldYield = Wa, ee.unstable_wrapCallback = St, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sE)), sE;
}
var tT;
function lT() {
  if (tT) return Pm.exports;
  tT = 1;
  var ee = {};
  return ee.NODE_ENV === "production" ? Pm.exports = nD() : Pm.exports = rD(), Pm.exports;
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
var nT;
function aD() {
  if (nT) return Ia;
  nT = 1;
  var ee = $m, oe = lT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var wt = /* @__PURE__ */ new Set(), Ut = {};
  function Ot(n, r) {
    xt(n, r), xt(n + "Capture", r);
  }
  function xt(n, r) {
    for (Ut[n] = r, n = 0; n < r.length; n++) wt.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dt = Object.prototype.hasOwnProperty, be = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pe = {}, Be = {};
  function Z(n) {
    return dt.call(Be, n) ? !0 : dt.call(pe, n) ? !1 : be.test(n) ? Be[n] = !0 : (pe[n] = !0, !1);
  }
  function Fe(n, r, l, o) {
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
  function le(n, r, l, o) {
    if (r === null || typeof r > "u" || Fe(n, r, l, o)) return !0;
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
  function we(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ut = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ut[n] = new we(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ut[r] = new we(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ut[n] = new we(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ut[n] = new we(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ut[n] = new we(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ut[n] = new we(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ut[n] = new we(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ut[n] = new we(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ut[n] = new we(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Hn = /[\-:]([a-z])/g;
  function rn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Hn,
      rn
    );
    ut[r] = new we(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Hn, rn);
    ut[r] = new we(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Hn, rn);
    ut[r] = new we(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ut[n] = new we(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ut.xlinkHref = new we("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ut[n] = new we(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function rt(n, r, l, o) {
    var c = ut.hasOwnProperty(r) ? ut[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (le(r, l, c, o) && (l = null), o || c === null ? Z(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ne = ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, bt = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), ot = Symbol.for("react.fragment"), He = Symbol.for("react.strict_mode"), Sn = Symbol.for("react.profiler"), Lt = Symbol.for("react.provider"), fn = Symbol.for("react.context"), $t = Symbol.for("react.forward_ref"), ht = Symbol.for("react.suspense"), Me = Symbol.for("react.suspense_list"), At = Symbol.for("react.memo"), pt = Symbol.for("react.lazy"), tt = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function me(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var re = Object.assign, b;
  function $(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var De = !1;
  function Ve(n, r) {
    if (!n || De) return "";
    De = !0;
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
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
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
      De = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? $(n) : "";
  }
  function $e(n) {
    switch (n.tag) {
      case 5:
        return $(n.type);
      case 16:
        return $("Lazy");
      case 13:
        return $("Suspense");
      case 19:
        return $("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function nt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ot:
        return "Fragment";
      case Ce:
        return "Portal";
      case Sn:
        return "Profiler";
      case He:
        return "StrictMode";
      case ht:
        return "Suspense";
      case Me:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case fn:
        return (n.displayName || "Context") + ".Consumer";
      case Lt:
        return (n._context.displayName || "Context") + ".Provider";
      case $t:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case At:
        return r = n.displayName || null, r !== null ? r : nt(n.type) || "Memo";
      case pt:
        r = n._payload, n = n._init;
        try {
          return nt(n(r));
        } catch {
        }
    }
    return null;
  }
  function St(n) {
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
        return nt(r);
      case 8:
        return r === He ? "StrictMode" : "Mode";
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
  function Qe(n) {
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
  function mt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = mt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function bn(n) {
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function Qn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = mt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function rr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Dn(n, r) {
    var l = r.checked;
    return re({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Sr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Qe(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Vn(n, r) {
    r = r.checked, r != null && rt(n, "checked", r, !1);
  }
  function kn(n, r) {
    Vn(n, r);
    var l = Qe(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Wa(n, r.type, l) : r.hasOwnProperty("defaultValue") && Wa(n, r.type, Qe(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function oa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Wa(n, r, l) {
    (r !== "number" || rr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var br = Array.isArray;
  function Pn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Qe(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Wn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return re({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Gn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (br(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Qe(l) };
  }
  function Er(n, r) {
    var l = Qe(r.value), o = Qe(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Ga(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function On(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ar(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? On(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var $r, Oi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = $r.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function sa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var K = {
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
  }, Oe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(K).forEach(function(n) {
    Oe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), K[r] = K[n];
    });
  });
  function Ze(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || K.hasOwnProperty(n) && K[n] ? ("" + r).trim() : r + "px";
  }
  function Mt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Ze(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var an = re({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ln(n, r) {
    if (r) {
      if (an[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function un(n, r) {
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
  var qn = null;
  function tn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Yt = null, Nt = null, ca = null;
  function _a(n) {
    if (n = ss(n)) {
      if (typeof Yt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Yi(r), Yt(n.stateNode, n.type, r));
    }
  }
  function ba(n) {
    Nt ? ca ? ca.push(n) : ca = [n] : Nt = n;
  }
  function Li() {
    if (Nt) {
      var n = Nt, r = ca;
      if (ca = Nt = null, _a(n), r) for (n = 0; n < r.length; n++) _a(r[n]);
    }
  }
  function Yl(n, r) {
    return n(r);
  }
  function Il() {
  }
  var Mi = !1;
  function Ql(n, r, l) {
    if (Mi) return n(r, l);
    Mi = !0;
    try {
      return Yl(n, r, l);
    } finally {
      Mi = !1, (Nt !== null || ca !== null) && (Il(), Li());
    }
  }
  function oi(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Yi(l);
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
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var fa = !1;
  if (S) try {
    var ir = {};
    Object.defineProperty(ir, "passive", { get: function() {
      fa = !0;
    } }), window.addEventListener("test", ir, ir), window.removeEventListener("test", ir, ir);
  } catch {
    fa = !1;
  }
  function da(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Yr = !1, si = null, ci = !1, Ni = null, R = { onError: function(n) {
    Yr = !0, si = n;
  } };
  function Y(n, r, l, o, c, d, m, E, T) {
    Yr = !1, si = null, da.apply(R, arguments);
  }
  function ne(n, r, l, o, c, d, m, E, T) {
    if (Y.apply(this, arguments), Yr) {
      if (Yr) {
        var z = si;
        Yr = !1, si = null;
      } else throw Error(A(198));
      ci || (ci = !0, Ni = z);
    }
  }
  function ie(n) {
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
  function at(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ye(n) {
    if (ie(n) !== n) throw Error(A(188));
  }
  function st(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ie(n), r === null) throw Error(A(188));
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
          if (d === l) return Ye(c), n;
          if (d === o) return Ye(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
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
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function Je(n) {
    return n = st(n), n !== null ? En(n) : null;
  }
  function En(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = En(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var nn = oe.unstable_scheduleCallback, on = oe.unstable_cancelCallback, Cr = oe.unstable_shouldYield, qa = oe.unstable_requestPaint, zt = oe.unstable_now, dn = oe.unstable_getCurrentPriorityLevel, Ge = oe.unstable_ImmediatePriority, fi = oe.unstable_UserBlockingPriority, zi = oe.unstable_NormalPriority, rc = oe.unstable_LowPriority, Ui = oe.unstable_IdlePriority, ul = null, Ir = null;
  function Bo(n) {
    if (Ir && typeof Ir.onCommitFiberRoot == "function") try {
      Ir.onCommitFiberRoot(ul, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : ic, $o = Math.log, ac = Math.LN2;
  function ic(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - ($o(n) / ac | 0) | 0;
  }
  var Ai = 64, ol = 4194304;
  function Qr(n) {
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
  function di(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Qr(E) : (d &= m, d !== 0 && (o = Qr(d)));
    } else m = l & ~c, m !== 0 ? o = Qr(m) : d !== 0 && (o = Qr(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function sl(n, r) {
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
      var m = 31 - Dr(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = sl(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Wl() {
    var n = Ai;
    return Ai <<= 1, !(Ai & 4194240) && (Ai = 64), n;
  }
  function Gl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function cl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function Yo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Io(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Et = 0;
  function Qo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ju, Ct, lc, pi, Pe, ql = !1, Xn = [], Wr = null, kr = null, vi = null, mn = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), Xa = [], Da = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Rr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Wr = null;
        break;
      case "dragenter":
      case "dragleave":
        kr = null;
        break;
      case "mouseover":
      case "mouseout":
        vi = null;
        break;
      case "pointerover":
      case "pointerout":
        mn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        It.delete(r.pointerId);
    }
  }
  function Or(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ss(r), r !== null && Ct(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Gf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Wr = Or(Wr, n, r, l, o, c), !0;
      case "dragenter":
        return kr = Or(kr, n, r, l, o, c), !0;
      case "mouseover":
        return vi = Or(vi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return mn.set(d, Or(mn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, It.set(d, Or(It.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Hu(n) {
    var r = au(n.target);
    if (r !== null) {
      var l = ie(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = at(l), r !== null) {
            n.blockedOn = r, Pe(n.priority, function() {
              lc(l);
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
  function Xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = $u(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        qn = o, l.target.dispatchEvent(o), qn = null;
      } else return r = ss(l), r !== null && Ct(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Pu() {
    ql = !1, Wr !== null && Xl(Wr) && (Wr = null), kr !== null && Xl(kr) && (kr = null), vi !== null && Xl(vi) && (vi = null), mn.forEach(Vu), It.forEach(Vu);
  }
  function Kl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ql || (ql = !0, oe.unstable_scheduleCallback(oe.unstable_NormalPriority, Pu)));
  }
  function ka(n) {
    function r(c) {
      return Kl(c, n);
    }
    if (0 < Xn.length) {
      Kl(Xn[0], n);
      for (var l = 1; l < Xn.length; l++) {
        var o = Xn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Wr !== null && Kl(Wr, n), kr !== null && Kl(kr, n), vi !== null && Kl(vi, n), mn.forEach(r), It.forEach(r), l = 0; l < Xa.length; l++) o = Xa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Hu(l), l.blockedOn === null && Xa.shift();
  }
  var Oa = Ne.ReactCurrentBatchConfig, fl = !0;
  function ji(n, r, l, o) {
    var c = Et, d = Oa.transition;
    Oa.transition = null;
    try {
      Et = 1, dl(n, r, l, o);
    } finally {
      Et = c, Oa.transition = d;
    }
  }
  function Bu(n, r, l, o) {
    var c = Et, d = Oa.transition;
    Oa.transition = null;
    try {
      Et = 4, dl(n, r, l, o);
    } finally {
      Et = c, Oa.transition = d;
    }
  }
  function dl(n, r, l, o) {
    if (fl) {
      var c = $u(n, r, l, o);
      if (c === null) ud(n, r, o, Hi, l), Rr(n, o);
      else if (Gf(c, n, r, l, o)) o.stopPropagation();
      else if (Rr(n, o), r & 4 && -1 < Da.indexOf(n)) {
        for (; c !== null; ) {
          var d = ss(c);
          if (d !== null && ju(d), d = $u(n, r, l, o), d === null && ud(n, r, o, Hi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else ud(n, r, o, null, l);
    }
  }
  var Hi = null;
  function $u(n, r, l, o) {
    if (Hi = null, n = tn(o), n = au(n), n !== null) if (r = ie(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = at(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Hi = n, null;
  }
  function Wo(n) {
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
        switch (dn()) {
          case Ge:
            return 1;
          case fi:
            return 4;
          case zi:
          case rc:
            return 16;
          case Ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var La = null, Yu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Yu, l = r.length, o, c = "value" in La ? La.value : La.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function X() {
    return !1;
  }
  function he(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : X, this.isPropagationStopped = X, this;
    }
    return re(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var se = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ue = he(se), et = re({}, se, { view: 0, detail: 0 }), Ft = he(et), Qt, Wt, Xe, Zt = re({}, et, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ka, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Xe && (Xe && n.type === "mousemove" ? (Qt = n.screenX - Xe.screenX, Wt = n.screenY - Xe.screenY) : Wt = Qt = 0, Xe = n), Qt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Wt;
  } }), Cn = he(Zt), Zl = re({}, Zt, { dataTransfer: 0 }), Go = he(Zl), Vi = re({}, et, { relatedTarget: 0 }), Jl = he(Vi), qo = re({}, se, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), qf = he(qo), uc = re({}, se, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = he(uc), Zp = re({}, se, { data: 0 }), oc = he(Zp), Jp = {
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
  }, ev = {
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
  }, tv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ym(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = tv[n]) ? !!r[n] : !1;
  }
  function Ka() {
    return Ym;
  }
  var Im = re({}, et, { key: function(n) {
    if (n.key) {
      var r = Jp[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? ev[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ka, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Kf = he(Im), Zf = re({}, Zt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), sc = he(Zf), Qm = re({}, et, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ka }), cc = he(Qm), nv = re({}, se, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gr = he(nv), Pi = re({}, Zt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ln = he(Pi), Bi = [9, 13, 27, 32], Xo = S && "CompositionEvent" in window, pl = null;
  S && "documentMode" in document && (pl = document.documentMode);
  var Wm = S && "TextEvent" in window && !pl, Iu = S && (!Xo || pl && 8 < pl && 11 >= pl), rv = " ", av = !1;
  function fc(n, r) {
    switch (n) {
      case "keyup":
        return Bi.indexOf(r.keyCode) !== -1;
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
  function iv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qu = !1;
  function Gm(n, r) {
    switch (n) {
      case "compositionend":
        return iv(r);
      case "keypress":
        return r.which !== 32 ? null : (av = !0, rv);
      case "textInput":
        return n = r.data, n === rv && av ? null : n;
      default:
        return null;
    }
  }
  function lv(n, r) {
    if (Qu) return n === "compositionend" || !Xo && fc(n, r) ? (n = C(), h = Yu = La = null, Qu = !1, n) : null;
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
        return Iu && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function uv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!qm[n.type] : r === "textarea";
  }
  function ov(n, r, l, o) {
    ba(o), r = ls(r, "onChange"), 0 < r.length && (l = new Ue("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Wu = null, hi = null;
  function Jf(n) {
    hc(n, 0);
  }
  function Ko(n) {
    var r = xe(n);
    if (Qn(r)) return n;
  }
  function sv(n, r) {
    if (n === "change") return r;
  }
  var cv = !1;
  if (S) {
    var ed;
    if (S) {
      var td = "oninput" in document;
      if (!td) {
        var fv = document.createElement("div");
        fv.setAttribute("oninput", "return;"), td = typeof fv.oninput == "function";
      }
      ed = td;
    } else ed = !1;
    cv = ed && (!document.documentMode || 9 < document.documentMode);
  }
  function dv() {
    Wu && (Wu.detachEvent("onpropertychange", pv), hi = Wu = null);
  }
  function pv(n) {
    if (n.propertyName === "value" && Ko(hi)) {
      var r = [];
      ov(r, hi, n, tn(n)), Ql(Jf, r);
    }
  }
  function Xm(n, r, l) {
    n === "focusin" ? (dv(), Wu = r, hi = l, Wu.attachEvent("onpropertychange", pv)) : n === "focusout" && dv();
  }
  function Km(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return Ko(hi);
  }
  function vv(n, r) {
    if (n === "click") return Ko(r);
  }
  function Zm(n, r) {
    if (n === "input" || n === "change") return Ko(r);
  }
  function hv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : hv;
  function Zo(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!dt.call(r, c) || !Za(n[c], r[c])) return !1;
    }
    return !0;
  }
  function mv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function yv(n, r) {
    var l = mv(n);
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
      l = mv(l);
    }
  }
  function dc(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? dc(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function vl() {
    for (var n = window, r = rr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = rr(n.document);
    }
    return r;
  }
  function Gu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function gv(n) {
    var r = vl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && dc(l.ownerDocument.documentElement, l)) {
      if (o !== null && Gu(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = yv(l, d);
          var m = yv(
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
  var qu = S && "documentMode" in document && 11 >= document.documentMode, Xu = null, nd = null, Jo = null, rd = !1;
  function Sv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    rd || Xu == null || Xu !== rr(o) || (o = Xu, "selectionStart" in o && Gu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Jo && Zo(Jo, o) || (Jo = o, o = ls(nd, "onSelect"), 0 < o.length && (r = new Ue("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Xu)));
  }
  function es(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Ku = { animationend: es("Animation", "AnimationEnd"), animationiteration: es("Animation", "AnimationIteration"), animationstart: es("Animation", "AnimationStart"), transitionend: es("Transition", "TransitionEnd") }, pc = {}, Tr = {};
  S && (Tr = document.createElement("div").style, "AnimationEvent" in window || (delete Ku.animationend.animation, delete Ku.animationiteration.animation, delete Ku.animationstart.animation), "TransitionEvent" in window || delete Ku.transitionend.transition);
  function ts(n) {
    if (pc[n]) return pc[n];
    if (!Ku[n]) return n;
    var r = Ku[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Tr) return pc[n] = r[l];
    return n;
  }
  var Ev = ts("animationend"), Cv = ts("animationiteration"), Rv = ts("animationstart"), Tv = ts("transitionend"), wv = /* @__PURE__ */ new Map(), ad = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function mi(n, r) {
    wv.set(n, r), Ot(r, [n]);
  }
  for (var eu = 0; eu < ad.length; eu++) {
    var id = ad[eu], ns = id.toLowerCase(), Jm = id[0].toUpperCase() + id.slice(1);
    mi(ns, "on" + Jm);
  }
  mi(Ev, "onAnimationEnd"), mi(Cv, "onAnimationIteration"), mi(Rv, "onAnimationStart"), mi("dblclick", "onDoubleClick"), mi("focusin", "onFocus"), mi("focusout", "onBlur"), mi(Tv, "onTransitionEnd"), xt("onMouseEnter", ["mouseout", "mouseover"]), xt("onMouseLeave", ["mouseout", "mouseover"]), xt("onPointerEnter", ["pointerout", "pointerover"]), xt("onPointerLeave", ["pointerout", "pointerover"]), Ot("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ot("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ot("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ot("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ot("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var rs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));
  function vc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ne(o, r, void 0, n), n.currentTarget = null;
  }
  function hc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          vc(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          vc(c, E, z), d = T;
        }
      }
    }
    if (ci) throw n = Ni, ci = !1, Ni = null, n;
  }
  function jt(n, r) {
    var l = r[od];
    l === void 0 && (l = r[od] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ld(r, n, 2, !1), l.add(o));
  }
  function hl(n, r, l) {
    var o = 0;
    r && (o |= 4), ld(l, n, o, r);
  }
  var as = "_reactListening" + Math.random().toString(36).slice(2);
  function is(n) {
    if (!n[as]) {
      n[as] = !0, wt.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || hl(l, !1, n), hl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[as] || (r[as] = !0, hl("selectionchange", !1, r));
    }
  }
  function ld(n, r, l, o) {
    switch (Wo(r)) {
      case 1:
        var c = ji;
        break;
      case 4:
        c = Bu;
        break;
      default:
        c = dl;
    }
    l = c.bind(null, r, l, n), c = void 0, !fa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function ud(n, r, l, o, c) {
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
          if (m = au(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Ql(function() {
      var z = d, Q = tn(l), W = [];
      e: {
        var I = wv.get(n);
        if (I !== void 0) {
          var ce = Ue, ye = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Kf;
              break;
            case "focusin":
              ye = "focus", ce = Jl;
              break;
            case "focusout":
              ye = "blur", ce = Jl;
              break;
            case "beforeblur":
            case "afterblur":
              ce = Jl;
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
              ce = Cn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Go;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = cc;
              break;
            case Ev:
            case Cv:
            case Rv:
              ce = qf;
              break;
            case Tv:
              ce = Gr;
              break;
            case "scroll":
              ce = Ft;
              break;
            case "wheel":
              ce = Ln;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = sc;
          }
          var Ee = (r & 4) !== 0, xn = !Ee && n === "scroll", D = Ee ? I !== null ? I + "Capture" : null : I;
          Ee = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var q = L.stateNode;
            if (L.tag === 5 && q !== null && (L = q, D !== null && (q = oi(x, D), q != null && Ee.push(Zu(x, q, L)))), xn) break;
            x = x.return;
          }
          0 < Ee.length && (I = new ce(I, ye, null, l, Q), W.push({ event: I, listeners: Ee }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", I && l !== qn && (ye = l.relatedTarget || l.fromElement) && (au(ye) || ye[$i])) break e;
          if ((ce || I) && (I = Q.window === Q ? Q : (I = Q.ownerDocument) ? I.defaultView || I.parentWindow : window, ce ? (ye = l.relatedTarget || l.toElement, ce = z, ye = ye ? au(ye) : null, ye !== null && (xn = ie(ye), ye !== xn || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (ce = null, ye = z), ce !== ye)) {
            if (Ee = Cn, q = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ee = sc, q = "onPointerLeave", D = "onPointerEnter", x = "pointer"), xn = ce == null ? I : xe(ce), L = ye == null ? I : xe(ye), I = new Ee(q, x + "leave", ce, l, Q), I.target = xn, I.relatedTarget = L, q = null, au(Q) === z && (Ee = new Ee(D, x + "enter", ye, l, Q), Ee.target = L, Ee.relatedTarget = xn, q = Ee), xn = q, ce && ye) t: {
              for (Ee = ce, D = ye, x = 0, L = Ee; L; L = tu(L)) x++;
              for (L = 0, q = D; q; q = tu(q)) L++;
              for (; 0 < x - L; ) Ee = tu(Ee), x--;
              for (; 0 < L - x; ) D = tu(D), L--;
              for (; x--; ) {
                if (Ee === D || D !== null && Ee === D.alternate) break t;
                Ee = tu(Ee), D = tu(D);
              }
              Ee = null;
            }
            else Ee = null;
            ce !== null && mc(W, I, ce, Ee, !1), ye !== null && xn !== null && mc(W, xn, ye, Ee, !0);
          }
        }
        e: {
          if (I = z ? xe(z) : window, ce = I.nodeName && I.nodeName.toLowerCase(), ce === "select" || ce === "input" && I.type === "file") var Re = sv;
          else if (uv(I)) if (cv) Re = Zm;
          else {
            Re = Km;
            var ge = Xm;
          }
          else (ce = I.nodeName) && ce.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (Re = vv);
          if (Re && (Re = Re(n, z))) {
            ov(W, Re, l, Q);
            break e;
          }
          ge && ge(n, I, z), n === "focusout" && (ge = I._wrapperState) && ge.controlled && I.type === "number" && Wa(I, "number", I.value);
        }
        switch (ge = z ? xe(z) : window, n) {
          case "focusin":
            (uv(ge) || ge.contentEditable === "true") && (Xu = ge, nd = z, Jo = null);
            break;
          case "focusout":
            Jo = nd = Xu = null;
            break;
          case "mousedown":
            rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rd = !1, Sv(W, l, Q);
            break;
          case "selectionchange":
            if (qu) break;
          case "keydown":
          case "keyup":
            Sv(W, l, Q);
        }
        var ke;
        if (Xo) e: {
          switch (n) {
            case "compositionstart":
              var je = "onCompositionStart";
              break e;
            case "compositionend":
              je = "onCompositionEnd";
              break e;
            case "compositionupdate":
              je = "onCompositionUpdate";
              break e;
          }
          je = void 0;
        }
        else Qu ? fc(n, l) && (je = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (je = "onCompositionStart");
        je && (Iu && l.locale !== "ko" && (Qu || je !== "onCompositionStart" ? je === "onCompositionEnd" && Qu && (ke = C()) : (La = Q, Yu = "value" in La ? La.value : La.textContent, Qu = !0)), ge = ls(z, je), 0 < ge.length && (je = new oc(je, n, null, l, Q), W.push({ event: je, listeners: ge }), ke ? je.data = ke : (ke = iv(l), ke !== null && (je.data = ke)))), (ke = Wm ? Gm(n, l) : lv(n, l)) && (z = ls(z, "onBeforeInput"), 0 < z.length && (Q = new oc("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: z }), Q.data = ke));
      }
      hc(W, r);
    });
  }
  function Zu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ls(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = oi(n, l), d != null && o.unshift(Zu(n, d, c)), d = oi(n, r), d != null && o.push(Zu(n, d, c))), n = n.return;
    }
    return o;
  }
  function tu(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function mc(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = oi(l, d), T != null && m.unshift(Zu(l, T, E))) : c || (T = oi(l, d), T != null && m.push(Zu(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ty = /\r\n?/g, xv = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(ty, `
`).replace(xv, "");
  }
  function yc(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(A(425));
  }
  function gc() {
  }
  var nu = null, us = null;
  function ru(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Sc = typeof setTimeout == "function" ? setTimeout : void 0, bv = typeof clearTimeout == "function" ? clearTimeout : void 0, Ec = typeof Promise == "function" ? Promise : void 0, ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ec < "u" ? function(n) {
    return Ec.resolve(null).then(n).catch(Ju);
  } : Sc;
  function Ju(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function eo(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), ka(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ka(r);
  }
  function Ja(n) {
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
  function Cc(n) {
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
  var to = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + to, os = "__reactProps$" + to, $i = "__reactContainer$" + to, od = "__reactEvents$" + to, sd = "__reactListeners$" + to, no = "__reactHandles$" + to;
  function au(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[$i] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Cc(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Cc(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ss(n) {
    return n = n[Ma] || n[$i], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function xe(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Yi(n) {
    return n[os] || null;
  }
  var Mn = [], ct = -1;
  function qr(n) {
    return { current: n };
  }
  function Gt(n) {
    0 > ct || (n.current = Mn[ct], Mn[ct] = null, ct--);
  }
  function Jt(n, r) {
    ct++, Mn[ct] = n.current, n.current = r;
  }
  var it = {}, yn = qr(it), Nn = qr(!1), Na = it;
  function pa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return it;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function yi() {
    Gt(Nn), Gt(yn);
  }
  function Rc(n, r, l) {
    if (yn.current !== it) throw Error(A(168));
    Jt(yn, r), Jt(Nn, l);
  }
  function Dv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, St(n) || "Unknown", c));
    return re({}, l, o);
  }
  function iu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || it, Na = yn.current, Jt(yn, n), Jt(Nn, Nn.current), !0;
  }
  function za(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = Dv(n, r, Na), o.__reactInternalMemoizedMergedChildContext = n, Gt(Nn), Gt(yn), Jt(yn, n)) : Gt(Nn), Jt(Nn, l);
  }
  var ei = null, cs = !1, fs = !1;
  function ml(n) {
    ei === null ? ei = [n] : ei.push(n);
  }
  function cd(n) {
    cs = !0, ml(n);
  }
  function Lr() {
    if (!fs && ei !== null) {
      fs = !0;
      var n = 0, r = Et;
      try {
        var l = ei;
        for (Et = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ei = null, cs = !1;
      } catch (c) {
        throw ei !== null && (ei = ei.slice(n + 1)), nn(Ge, Lr), c;
      } finally {
        Et = r, fs = !1;
      }
    }
    return null;
  }
  var yl = [], gl = 0, ro = null, Sl = 0, lr = [], Un = 0, lu = null, Mr = 1, gi = "";
  function El(n, r) {
    yl[gl++] = Sl, yl[gl++] = ro, ro = n, Sl = r;
  }
  function kv(n, r, l) {
    lr[Un++] = Mr, lr[Un++] = gi, lr[Un++] = lu, lu = n;
    var o = Mr;
    n = gi;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Mr = 1 << 32 - Dr(r) + c | l << c | o, gi = d + n;
    } else Mr = 1 << d | l << c | o, gi = n;
  }
  function fd(n) {
    n.return !== null && (El(n, 1), kv(n, 1, 0));
  }
  function Tc(n) {
    for (; n === ro; ) ro = yl[--gl], yl[gl] = null, Sl = yl[--gl], yl[gl] = null;
    for (; n === lu; ) lu = lr[--Un], lr[Un] = null, gi = lr[--Un], lr[Un] = null, Mr = lr[--Un], lr[Un] = null;
  }
  var Xr = null, Kr = null, sn = !1, ti = null;
  function dd(n, r) {
    var l = Ha(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function pd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Xr = n, Kr = Ja(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Xr = n, Kr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = lu !== null ? { id: Mr, overflow: gi } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ha(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Xr = n, Kr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function hd(n) {
    if (sn) {
      var r = Kr;
      if (r) {
        var l = r;
        if (!pd(n, r)) {
          if (vd(n)) throw Error(A(418));
          r = Ja(l.nextSibling);
          var o = Xr;
          r && pd(n, r) ? dd(o, l) : (n.flags = n.flags & -4097 | 2, sn = !1, Xr = n);
        }
      } else {
        if (vd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, sn = !1, Xr = n;
      }
    }
  }
  function Ov(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Xr = n;
  }
  function Rn(n) {
    if (n !== Xr) return !1;
    if (!sn) return Ov(n), sn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ru(n.type, n.memoizedProps)), r && (r = Kr)) {
      if (vd(n)) throw Lv(), Error(A(418));
      for (; r; ) dd(n, r), r = Ja(r.nextSibling);
    }
    if (Ov(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Kr = Ja(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Kr = null;
      }
    } else Kr = Xr ? Ja(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Lv() {
    for (var n = Kr; n; ) n = Ja(n.nextSibling);
  }
  function Ii() {
    Kr = Xr = null, sn = !1;
  }
  function ds(n) {
    ti === null ? ti = [n] : ti.push(n);
  }
  var uu = Ne.ReactCurrentBatchConfig;
  function ps(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function ao(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Nv(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = Ll(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, q) {
      return x === null || x.tag !== 6 ? (x = wu(L, D.mode, q), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, q) {
      var Re = L.type;
      return Re === ot ? Q(D, x, L.props.children, q, L.key) : x !== null && (x.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === pt && Mv(Re) === x.type) ? (q = c(x, L.props), q.ref = ps(D, x, L), q.return = D, q) : (q = sf(L.type, L.key, L.props, null, D.mode, q), q.ref = ps(D, x, L), q.return = D, q);
    }
    function z(D, x, L, q) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Qd(L, D.mode, q), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function Q(D, x, L, q, Re) {
      return x === null || x.tag !== 7 ? (x = Ml(L, D.mode, q, Re), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function W(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = wu("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case bt:
            return L = sf(x.type, x.key, x.props, null, D.mode, L), L.ref = ps(D, null, x), L.return = D, L;
          case Ce:
            return x = Qd(x, D.mode, L), x.return = D, x;
          case pt:
            var q = x._init;
            return W(D, q(x._payload), L);
        }
        if (br(x) || me(x)) return x = Ml(x, D.mode, L, null), x.return = D, x;
        ao(D, x);
      }
      return null;
    }
    function I(D, x, L, q) {
      var Re = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Re !== null ? null : E(D, x, "" + L, q);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case bt:
            return L.key === Re ? T(D, x, L, q) : null;
          case Ce:
            return L.key === Re ? z(D, x, L, q) : null;
          case pt:
            return Re = L._init, I(
              D,
              x,
              Re(L._payload),
              q
            );
        }
        if (br(L) || me(L)) return Re !== null ? null : Q(D, x, L, q, null);
        ao(D, L);
      }
      return null;
    }
    function ce(D, x, L, q, Re) {
      if (typeof q == "string" && q !== "" || typeof q == "number") return D = D.get(L) || null, E(x, D, "" + q, Re);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case bt:
            return D = D.get(q.key === null ? L : q.key) || null, T(x, D, q, Re);
          case Ce:
            return D = D.get(q.key === null ? L : q.key) || null, z(x, D, q, Re);
          case pt:
            var ge = q._init;
            return ce(D, x, L, ge(q._payload), Re);
        }
        if (br(q) || me(q)) return D = D.get(L) || null, Q(x, D, q, Re, null);
        ao(x, q);
      }
      return null;
    }
    function ye(D, x, L, q) {
      for (var Re = null, ge = null, ke = x, je = x = 0, tr = null; ke !== null && je < L.length; je++) {
        ke.index > je ? (tr = ke, ke = null) : tr = ke.sibling;
        var _t = I(D, ke, L[je], q);
        if (_t === null) {
          ke === null && (ke = tr);
          break;
        }
        n && ke && _t.alternate === null && r(D, ke), x = d(_t, x, je), ge === null ? Re = _t : ge.sibling = _t, ge = _t, ke = tr;
      }
      if (je === L.length) return l(D, ke), sn && El(D, je), Re;
      if (ke === null) {
        for (; je < L.length; je++) ke = W(D, L[je], q), ke !== null && (x = d(ke, x, je), ge === null ? Re = ke : ge.sibling = ke, ge = ke);
        return sn && El(D, je), Re;
      }
      for (ke = o(D, ke); je < L.length; je++) tr = ce(ke, D, je, L[je], q), tr !== null && (n && tr.alternate !== null && ke.delete(tr.key === null ? je : tr.key), x = d(tr, x, je), ge === null ? Re = tr : ge.sibling = tr, ge = tr);
      return n && ke.forEach(function(Nl) {
        return r(D, Nl);
      }), sn && El(D, je), Re;
    }
    function Ee(D, x, L, q) {
      var Re = me(L);
      if (typeof Re != "function") throw Error(A(150));
      if (L = Re.call(L), L == null) throw Error(A(151));
      for (var ge = Re = null, ke = x, je = x = 0, tr = null, _t = L.next(); ke !== null && !_t.done; je++, _t = L.next()) {
        ke.index > je ? (tr = ke, ke = null) : tr = ke.sibling;
        var Nl = I(D, ke, _t.value, q);
        if (Nl === null) {
          ke === null && (ke = tr);
          break;
        }
        n && ke && Nl.alternate === null && r(D, ke), x = d(Nl, x, je), ge === null ? Re = Nl : ge.sibling = Nl, ge = Nl, ke = tr;
      }
      if (_t.done) return l(
        D,
        ke
      ), sn && El(D, je), Re;
      if (ke === null) {
        for (; !_t.done; je++, _t = L.next()) _t = W(D, _t.value, q), _t !== null && (x = d(_t, x, je), ge === null ? Re = _t : ge.sibling = _t, ge = _t);
        return sn && El(D, je), Re;
      }
      for (ke = o(D, ke); !_t.done; je++, _t = L.next()) _t = ce(ke, D, je, _t.value, q), _t !== null && (n && _t.alternate !== null && ke.delete(_t.key === null ? je : _t.key), x = d(_t, x, je), ge === null ? Re = _t : ge.sibling = _t, ge = _t);
      return n && ke.forEach(function(yy) {
        return r(D, yy);
      }), sn && El(D, je), Re;
    }
    function xn(D, x, L, q) {
      if (typeof L == "object" && L !== null && L.type === ot && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case bt:
            e: {
              for (var Re = L.key, ge = x; ge !== null; ) {
                if (ge.key === Re) {
                  if (Re = L.type, Re === ot) {
                    if (ge.tag === 7) {
                      l(D, ge.sibling), x = c(ge, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (ge.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === pt && Mv(Re) === ge.type) {
                    l(D, ge.sibling), x = c(ge, L.props), x.ref = ps(D, ge, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, ge);
                  break;
                } else r(D, ge);
                ge = ge.sibling;
              }
              L.type === ot ? (x = Ml(L.props.children, D.mode, q, L.key), x.return = D, D = x) : (q = sf(L.type, L.key, L.props, null, D.mode, q), q.ref = ps(D, x, L), q.return = D, D = q);
            }
            return m(D);
          case Ce:
            e: {
              for (ge = L.key; x !== null; ) {
                if (x.key === ge) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = Qd(L, D.mode, q), x.return = D, D = x;
            }
            return m(D);
          case pt:
            return ge = L._init, xn(D, x, ge(L._payload), q);
        }
        if (br(L)) return ye(D, x, L, q);
        if (me(L)) return Ee(D, x, L, q);
        ao(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = wu(L, D.mode, q), x.return = D, D = x), m(D)) : l(D, x);
    }
    return xn;
  }
  var ni = Nv(!0), ur = Nv(!1), te = qr(null), va = null, wr = null, md = null;
  function yd() {
    md = wr = va = null;
  }
  function gd(n) {
    var r = te.current;
    Gt(te), n._currentValue = r;
  }
  function Sd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function io(n, r) {
    va = n, md = wr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Jn = !0), n.firstContext = null);
  }
  function Pt(n) {
    var r = n._currentValue;
    if (md !== n) if (n = { context: n, memoizedValue: r, next: null }, wr === null) {
      if (va === null) throw Error(A(308));
      wr = n, va.dependencies = { lanes: 0, firstContext: n };
    } else wr = wr.next = n;
    return r;
  }
  var ou = null;
  function Ed(n) {
    ou === null ? ou = [n] : ou.push(n);
  }
  function zv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Ed(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Si(n, o);
  }
  function Si(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Ua = !1;
  function Cl(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Uv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Qi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ft & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Si(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Ed(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Si(n, l);
  }
  function wc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Io(n, l);
    }
  }
  function Av(n, r) {
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
    Ua = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = z : E.next = z, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = z = T = null, E = d;
      do {
        var I = E.lane, ce = E.eventTime;
        if ((o & I) === I) {
          Q !== null && (Q = Q.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ee = E;
            switch (I = r, ce = l, Ee.tag) {
              case 1:
                if (ye = Ee.payload, typeof ye == "function") {
                  W = ye.call(ce, W, I);
                  break e;
                }
                W = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ee.payload, I = typeof ye == "function" ? ye.call(ce, W, I) : ye, I == null) break e;
                W = re({}, W, I);
                break e;
              case 2:
                Ua = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else ce = { eventTime: ce, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (z = Q = ce, T = W) : Q = Q.next = ce, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = W), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      gu |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function Cd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var lo = {}, Ei = qr(lo), vs = qr(lo), hs = qr(lo);
  function su(n) {
    if (n === lo) throw Error(A(174));
    return n;
  }
  function Rd(n, r) {
    switch (Jt(hs, r), Jt(vs, n), Jt(Ei, lo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ar(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ar(r, n);
    }
    Gt(Ei), Jt(Ei, r);
  }
  function uo() {
    Gt(Ei), Gt(vs), Gt(hs);
  }
  function Td(n) {
    su(hs.current);
    var r = su(Ei.current), l = ar(r, n.type);
    r !== l && (Jt(vs, n), Jt(Ei, l));
  }
  function wd(n) {
    vs.current === n && (Gt(Ei), Gt(vs));
  }
  var pn = qr(0);
  function _c(n) {
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
  function ms() {
    for (var n = 0; n < xd.length; n++) xd[n]._workInProgressVersionPrimary = null;
    xd.length = 0;
  }
  var _e = Ne.ReactCurrentDispatcher, lt = Ne.ReactCurrentBatchConfig, yt = 0, qe = null, qt = null, Bn = null, bc = !1, ys = !1, gs = 0, _d = 0;
  function V() {
    throw Error(A(321));
  }
  function An(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function ze(n, r, l, o, c, d) {
    if (yt = d, qe = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, _e.current = n === null || n.memoizedState === null ? Bc : $c, n = l(o, c), ys) {
      d = 0;
      do {
        if (ys = !1, gs = 0, 25 <= d) throw Error(A(301));
        d += 1, Bn = qt = null, r.updateQueue = null, _e.current = Ts, n = l(o, c);
      } while (ys);
    }
    if (_e.current = Bt, r = qt !== null && qt.next !== null, yt = 0, Bn = qt = qe = null, bc = !1, r) throw Error(A(300));
    return n;
  }
  function Tl() {
    var n = gs !== 0;
    return gs = 0, n;
  }
  function Kn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Bn === null ? qe.memoizedState = Bn = n : Bn = Bn.next = n, Bn;
  }
  function Zn() {
    if (qt === null) {
      var n = qe.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = qt.next;
    var r = Bn === null ? qe.memoizedState : Bn.next;
    if (r !== null) Bn = r, qt = n;
    else {
      if (n === null) throw Error(A(310));
      qt = n, n = { memoizedState: qt.memoizedState, baseState: qt.baseState, baseQueue: qt.baseQueue, queue: qt.queue, next: null }, Bn === null ? qe.memoizedState = Bn = n : Bn = Bn.next = n;
    }
    return Bn;
  }
  function Zr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function cu(n) {
    var r = Zn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = qt, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var Q = z.lane;
        if ((yt & Q) === Q) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var W = {
            lane: Q,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = W, m = o) : T = T.next = W, qe.lanes |= Q, gu |= Q;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (Jn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, qe.lanes |= d, gu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function wl(n) {
    var r = Zn(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (Jn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function oo() {
  }
  function Dc(n, r) {
    var l = qe, o = Zn(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, Jn = !0), o = o.queue, Ss(Lc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Bn !== null && Bn.memoizedState.tag & 1) {
      if (l.flags |= 2048, fu(9, Oc.bind(null, l, o, c, r), void 0, null), Fn === null) throw Error(A(349));
      yt & 30 || kc(l, r, c);
    }
    return c;
  }
  function kc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Oc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Mc(r) && Nc(n);
  }
  function Lc(n, r, l) {
    return l(function() {
      Mc(r) && Nc(n);
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
  function Nc(n) {
    var r = Si(n, 1);
    r !== null && Sa(r, n, 1, -1);
  }
  function zc(n) {
    var r = Kn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Zr, lastRenderedState: n }, r.queue = n, n = n.dispatch = Rs.bind(null, qe, n), [r.memoizedState, n];
  }
  function fu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = qe.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qe.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Uc() {
    return Zn().memoizedState;
  }
  function so(n, r, l, o) {
    var c = Kn();
    qe.flags |= n, c.memoizedState = fu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function co(n, r, l, o) {
    var c = Zn();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (qt !== null) {
      var m = qt.memoizedState;
      if (d = m.destroy, o !== null && An(o, m.deps)) {
        c.memoizedState = fu(r, l, d, o);
        return;
      }
    }
    qe.flags |= n, c.memoizedState = fu(1 | r, l, d, o);
  }
  function Ac(n, r) {
    return so(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return co(2048, 8, n, r);
  }
  function Fc(n, r) {
    return co(4, 2, n, r);
  }
  function jc(n, r) {
    return co(4, 4, n, r);
  }
  function Es(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function du(n, r, l) {
    return l = l != null ? l.concat([n]) : null, co(4, 4, Es.bind(null, r, n), l);
  }
  function Cs() {
  }
  function Hc(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Vc(n, r) {
    var l = Zn();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && An(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Pc(n, r, l) {
    return yt & 21 ? (Za(l, r) || (l = Wl(), qe.lanes |= l, gu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Jn = !0), n.memoizedState = l);
  }
  function Fv(n, r) {
    var l = Et;
    Et = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = lt.transition;
    lt.transition = {};
    try {
      n(!1), r();
    } finally {
      Et = l, lt.transition = o;
    }
  }
  function fo() {
    return Zn().memoizedState;
  }
  function jv(n, r, l) {
    var o = ga(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, xl(n)) ha(r, l);
    else if (l = zv(n, r, l, o), l !== null) {
      var c = en();
      Sa(l, n, o, c), Hv(l, r, o);
    }
  }
  function Rs(n, r, l) {
    var o = ga(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (xl(n)) ha(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, Ed(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = zv(n, r, c, o), l !== null && (c = en(), Sa(l, n, o, c), Hv(l, r, o));
    }
  }
  function xl(n) {
    var r = n.alternate;
    return n === qe || r !== null && r === qe;
  }
  function ha(n, r) {
    ys = bc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Hv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Io(n, l);
    }
  }
  var Bt = { readContext: Pt, useCallback: V, useContext: V, useEffect: V, useImperativeHandle: V, useInsertionEffect: V, useLayoutEffect: V, useMemo: V, useReducer: V, useRef: V, useState: V, useDebugValue: V, useDeferredValue: V, useTransition: V, useMutableSource: V, useSyncExternalStore: V, useId: V, unstable_isNewReconciler: !1 }, Bc = { readContext: Pt, useCallback: function(n, r) {
    return Kn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Pt, useEffect: Ac, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, so(
      4194308,
      4,
      Es.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return so(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return so(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Kn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Kn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = jv.bind(null, qe, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Kn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: zc, useDebugValue: Cs, useDeferredValue: function(n) {
    return Kn().memoizedState = n;
  }, useTransition: function() {
    var n = zc(!1), r = n[0];
    return n = Fv.bind(null, n[1]), Kn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = qe, c = Kn();
    if (sn) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), Fn === null) throw Error(A(349));
      yt & 30 || kc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Ac(Lc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, fu(9, Oc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Kn(), r = Fn.identifierPrefix;
    if (sn) {
      var l = gi, o = Mr;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = gs++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = _d++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $c = {
    readContext: Pt,
    useCallback: Hc,
    useContext: Pt,
    useEffect: Ss,
    useImperativeHandle: du,
    useInsertionEffect: Fc,
    useLayoutEffect: jc,
    useMemo: Vc,
    useReducer: cu,
    useRef: Uc,
    useState: function() {
      return cu(Zr);
    },
    useDebugValue: Cs,
    useDeferredValue: function(n) {
      var r = Zn();
      return Pc(r, qt.memoizedState, n);
    },
    useTransition: function() {
      var n = cu(Zr)[0], r = Zn().memoizedState;
      return [n, r];
    },
    useMutableSource: oo,
    useSyncExternalStore: Dc,
    useId: fo,
    unstable_isNewReconciler: !1
  }, Ts = { readContext: Pt, useCallback: Hc, useContext: Pt, useEffect: Ss, useImperativeHandle: du, useInsertionEffect: Fc, useLayoutEffect: jc, useMemo: Vc, useReducer: wl, useRef: Uc, useState: function() {
    return wl(Zr);
  }, useDebugValue: Cs, useDeferredValue: function(n) {
    var r = Zn();
    return qt === null ? r.memoizedState = n : Pc(r, qt.memoizedState, n);
  }, useTransition: function() {
    var n = wl(Zr)[0], r = Zn().memoizedState;
    return [n, r];
  }, useMutableSource: oo, useSyncExternalStore: Dc, useId: fo, unstable_isNewReconciler: !1 };
  function Jr(n, r) {
    if (n && n.defaultProps) {
      r = re({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function bd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : re({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Yc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ie(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = ga(n), d = Qi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Sa(r, n, c, o), wc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = en(), c = ga(n), d = Qi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Rl(n, d, c), r !== null && (Sa(r, n, c, o), wc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = en(), o = ga(n), c = Qi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Rl(n, c, o), r !== null && (Sa(r, n, o, l), wc(r, n, o));
  } };
  function Vv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Pv(n, r, l) {
    var o = !1, c = it, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Pt(d) : (c = zn(r) ? Na : yn.current, o = r.contextTypes, d = (o = o != null) ? pa(n, c) : it), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Yc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Ic(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Yc.enqueueReplaceState(r, r.state, null);
  }
  function Dd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Cl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Pt(d) : (d = zn(r) ? Na : yn.current, c.context = pa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (bd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Yc.enqueueReplaceState(c, c.state, null), xc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var l = "", o = r;
      do
        l += $e(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Qc(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function kd(n, r) {
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
    l = Qi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Dl || (Dl = !0, Ms = o), kd(n, r);
    }, l;
  }
  function Bv(n, r, l) {
    l = Qi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        kd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      kd(n, r), typeof o != "function" && (ja === null ? ja = /* @__PURE__ */ new Set([this]) : ja.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Od(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ry();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = $d.bind(null, n, r, l), r.then(n, n));
  }
  function Ld(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function $v(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Qi(-1, 1), r.tag = 2, Rl(l, r, 1))), l.lanes |= 1), n);
  }
  var pu = Ne.ReactCurrentOwner, Jn = !1;
  function Tn(n, r, l, o) {
    r.child = n === null ? ur(r, null, l, o) : ni(r, n.child, l, o);
  }
  function Wc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return io(r, c), o = ze(n, r, l, o, d, c), l = Tl(), n !== null && !Jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && l && fd(r), r.flags |= 1, Tn(n, r, o, c), r.child);
  }
  function ea(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Id(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, vu(n, r, d, o, c)) : (n = sf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return or(n, r, c);
    }
    return r.flags |= 1, n = Ll(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function vu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (Jn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Jn = !0);
      else return r.lanes = n.lanes, or(n, r, c);
    }
    return Gc(n, r, l, o, c);
  }
  function Ke(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Jt(mo, ya), ya |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Jt(mo, ya), ya |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Jt(mo, ya), ya |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Jt(mo, ya), ya |= o;
    return Tn(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Gc(n, r, l, o, c) {
    var d = zn(l) ? Na : yn.current;
    return d = pa(r, d), io(r, c), l = ze(n, r, l, o, d, c), o = Tl(), n !== null && !Jn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, or(n, r, c)) : (sn && o && fd(r), r.flags |= 1, Tn(n, r, l, c), r.child);
  }
  function ay(n, r, l, o, c) {
    if (zn(l)) {
      var d = !0;
      iu(r);
    } else d = !1;
    if (io(r, c), r.stateNode === null) Aa(n, r), Pv(r, l, o), Dd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Pt(z) : (z = zn(l) ? Na : yn.current, z = pa(r, z));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Ic(r, m, o, z), Ua = !1;
      var I = r.memoizedState;
      m.state = I, xc(r, o, m, c), T = r.memoizedState, E !== o || I !== T || Nn.current || Ua ? (typeof Q == "function" && (bd(r, l, Q, o), T = r.memoizedState), (E = Ua || Vv(r, l, E, o, I, T, z)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Uv(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : Jr(r.type, E), m.props = z, W = r.pendingProps, I = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = Pt(T) : (T = zn(l) ? Na : yn.current, T = pa(r, T));
      var ce = l.getDerivedStateFromProps;
      (Q = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || I !== T) && Ic(r, m, o, T), Ua = !1, I = r.memoizedState, m.state = I, xc(r, o, m, c);
      var ye = r.memoizedState;
      E !== W || I !== ye || Nn.current || Ua ? (typeof ce == "function" && (bd(r, l, ce, o), ye = r.memoizedState), (z = Ua || Vv(r, l, z, o, I, ye, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && za(r, l, !1), or(n, r, d);
    o = r.stateNode, pu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ni(r, n.child, null, d), r.child = ni(r, null, E, d)) : Tn(n, r, E, d), r.memoizedState = o.state, c && za(r, l, !0), r.child;
  }
  function qc(n) {
    var r = n.stateNode;
    r.pendingContext ? Rc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Rc(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function po(n, r, l, o, c) {
    return Ii(), ds(c), r.flags |= 256, Tn(n, r, l, o), r.child;
  }
  var Nd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Yv(n, r, l) {
    var o = r.pendingProps, c = pn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Jt(pn, c & 1), n === null)
      return hd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Ro(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Xc(l), r.memoizedState = Nd, n) : _s(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Iv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ll(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ll(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Xc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Nd, o;
    }
    return d = n.child, n = d.sibling, o = Ll(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function _s(n, r) {
    return r = Ro({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Kc(n, r, l, o) {
    return o !== null && ds(o), ni(r, n.child, null, l), n = _s(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Iv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Qc(Error(A(422))), Kc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ro({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ni(r, n.child, null, m), r.child.memoizedState = Xc(m), r.memoizedState = Nd, d);
    if (!(r.mode & 1)) return Kc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Qc(d, o, void 0), Kc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Jn || E) {
      if (o = Fn, o !== null) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Si(n, c), Sa(o, n, c, -1));
      }
      return Pd(), o = Qc(Error(A(421))), Kc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Kr = Ja(c.nextSibling), Xr = r, sn = !0, ti = null, n !== null && (lr[Un++] = Mr, lr[Un++] = gi, lr[Un++] = lu, Mr = n.id, gi = n.overflow, lu = r), r = _s(r, o.children), r.flags |= 4096, r);
  }
  function zd(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Sd(n.return, r, l);
  }
  function Zc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function ta(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Tn(n, r, o.children, l), o = pn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && zd(n, l, r);
        else if (n.tag === 19) zd(n, l, r);
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
    if (Jt(pn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && _c(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Zc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && _c(n) === null) {
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
  function Aa(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function or(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), gu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Ll(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ll(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Jc(n, r, l) {
    switch (r.tag) {
      case 3:
        qc(r), Ii();
        break;
      case 5:
        Td(r);
        break;
      case 1:
        zn(r.type) && iu(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Jt(te, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Jt(pn, pn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Yv(n, r, l) : (Jt(pn, pn.current & 1), n = or(n, r, l), n !== null ? n.sibling : null);
        Jt(pn, pn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ta(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Jt(pn, pn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ke(n, r, l);
    }
    return or(n, r, l);
  }
  var vo, ma, $n, Qv;
  vo = function(n, r) {
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
  }, ma = function() {
  }, $n = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, su(Ei.current);
      var d = null;
      switch (l) {
        case "input":
          c = Dn(n, c), o = Dn(n, o), d = [];
          break;
        case "select":
          c = re({}, c, { value: void 0 }), o = re({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Wn(n, c), o = Wn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = gc);
      }
      ln(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (Ut.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (Ut.hasOwnProperty(z) ? (T != null && z === "onScroll" && jt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, Qv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function bs(n, r) {
    if (!sn) switch (n.tailMode) {
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
  function Ud(n, r, l) {
    var o = r.pendingProps;
    switch (Tc(r), r.tag) {
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
        return zn(r.type) && yi(), xr(r), null;
      case 3:
        return o = r.stateNode, uo(), Gt(Nn), Gt(yn), ms(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Rn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ti !== null && (As(ti), ti = null))), ma(n, r), xr(r), null;
      case 5:
        wd(r);
        var c = su(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) $n(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return xr(r), null;
          }
          if (n = su(Ei.current), Rn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[os] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                jt("cancel", o), jt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                jt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < rs.length; c++) jt(rs[c], o);
                break;
              case "source":
                jt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                jt(
                  "error",
                  o
                ), jt("load", o);
                break;
              case "details":
                jt("toggle", o);
                break;
              case "input":
                Sr(o, d), jt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, jt("invalid", o);
                break;
              case "textarea":
                Gn(o, d), jt("invalid", o);
            }
            ln(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && yc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && yc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Ut.hasOwnProperty(m) && E != null && m === "onScroll" && jt("scroll", o);
            }
            switch (l) {
              case "input":
                bn(o), oa(o, d, !0);
                break;
              case "textarea":
                bn(o), Ga(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = gc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = On(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[os] = o, vo(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = un(l, o), l) {
                case "dialog":
                  jt("cancel", n), jt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  jt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < rs.length; c++) jt(rs[c], n);
                  c = o;
                  break;
                case "source":
                  jt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  jt(
                    "error",
                    n
                  ), jt("load", n), c = o;
                  break;
                case "details":
                  jt("toggle", n), c = o;
                  break;
                case "input":
                  Sr(n, o), c = Dn(n, o), jt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = re({}, o, { value: void 0 }), jt("invalid", n);
                  break;
                case "textarea":
                  Gn(n, o), c = Wn(n, o), jt("invalid", n);
                  break;
                default:
                  c = o;
              }
              ln(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Mt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Oi(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && sa(n, T) : typeof T == "number" && sa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ut.hasOwnProperty(d) ? T != null && d === "onScroll" && jt("scroll", n) : T != null && rt(n, d, T, m));
              }
              switch (l) {
                case "input":
                  bn(n), oa(n, o, !1);
                  break;
                case "textarea":
                  bn(n), Ga(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Qe(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Pn(n, !!o.multiple, d, !1) : o.defaultValue != null && Pn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = gc);
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
        if (n && r.stateNode != null) Qv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = su(hs.current), su(Ei.current), Rn(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = Xr, n !== null)) switch (n.tag) {
              case 3:
                yc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && yc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return xr(r), null;
      case 13:
        if (Gt(pn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (sn && Kr !== null && r.mode & 1 && !(r.flags & 128)) Lv(), Ii(), r.flags |= 98560, d = !1;
          else if (d = Rn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ma] = r;
            } else Ii(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            xr(r), d = !1;
          } else ti !== null && (As(ti), ti = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || pn.current & 1 ? Yn === 0 && (Yn = 3) : Pd())), r.updateQueue !== null && (r.flags |= 4), xr(r), null);
      case 4:
        return uo(), ma(n, r), n === null && is(r.stateNode.containerInfo), xr(r), null;
      case 10:
        return gd(r.type._context), xr(r), null;
      case 17:
        return zn(r.type) && yi(), xr(r), null;
      case 19:
        if (Gt(pn), d = r.memoizedState, d === null) return xr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) bs(d, !1);
        else {
          if (Yn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = _c(n), m !== null) {
              for (r.flags |= 128, bs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Jt(pn, pn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && zt() > go && (r.flags |= 128, o = !0, bs(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = _c(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), bs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !sn) return xr(r), null;
          } else 2 * zt() - d.renderingStartTime > go && l !== 1073741824 && (r.flags |= 128, o = !0, bs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = zt(), r.sibling = null, l = pn.current, Jt(pn, o ? l & 1 | 2 : l & 1), r) : (xr(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ya & 1073741824 && (xr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function Wv(n, r) {
    switch (Tc(r), r.tag) {
      case 1:
        return zn(r.type) && yi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return uo(), Gt(Nn), Gt(yn), ms(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (Gt(pn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Ii();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Gt(pn), null;
      case 4:
        return uo(), null;
      case 10:
        return gd(r.type._context), null;
      case 22:
      case 23:
        return Vd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hu = !1, sr = !1, iy = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function bl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      gn(n, r, o);
    }
    else l.current = null;
  }
  function Ad(n, r, l) {
    try {
      l();
    } catch (o) {
      gn(n, r, o);
    }
  }
  var Fd = !1;
  function ly(n, r) {
    if (nu = fl, n = vl(), Gu(n)) {
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
          var m = 0, E = -1, T = -1, z = 0, Q = 0, W = n, I = null;
          t: for (; ; ) {
            for (var ce; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (T = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (ce = W.firstChild) !== null; )
              I = W, W = ce;
            for (; ; ) {
              if (W === n) break t;
              if (I === l && ++z === c && (E = m), I === d && ++Q === o && (T = m), (ce = W.nextSibling) !== null) break;
              W = I, I = W.parentNode;
            }
            W = ce;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (us = { focusedElem: n, selectionRange: l }, fl = !1, ve = r; ve !== null; ) if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ve = n;
    else for (; ve !== null; ) {
      r = ve;
      try {
        var ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ye !== null) {
              var Ee = ye.memoizedProps, xn = ye.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ee : Jr(r.type, Ee), xn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (q) {
        gn(r, r.return, q);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ve = n;
        break;
      }
      ve = r.return;
    }
    return ye = Fd, Fd = !1, ye;
  }
  function ho(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ad(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function ef(n, r) {
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
  function tf(n) {
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
    r !== null && (n.alternate = null, Gv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[os], delete r[od], delete r[sd], delete r[no])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function nf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ds(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || nf(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ci(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = gc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ci(n, r, l), n = n.sibling; n !== null; ) Ci(n, r, l), n = n.sibling;
  }
  function Ri(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ri(n, r, l), n = n.sibling; n !== null; ) Ri(n, r, l), n = n.sibling;
  }
  var vn = null, Nr = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; ) Wi(n, r, l), l = l.sibling;
  }
  function Wi(n, r, l) {
    if (Ir && typeof Ir.onCommitFiberUnmount == "function") try {
      Ir.onCommitFiberUnmount(ul, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        sr || bl(l, r);
      case 6:
        var o = vn, c = Nr;
        vn = null, Fa(n, r, l), vn = o, Nr = c, vn !== null && (Nr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : vn.removeChild(l.stateNode));
        break;
      case 18:
        vn !== null && (Nr ? (n = vn, l = l.stateNode, n.nodeType === 8 ? eo(n.parentNode, l) : n.nodeType === 1 && eo(n, l), ka(n)) : eo(vn, l.stateNode));
        break;
      case 4:
        o = vn, c = Nr, vn = l.stateNode.containerInfo, Nr = !0, Fa(n, r, l), vn = o, Nr = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!sr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ad(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!sr && (bl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          gn(l, r, E);
        }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (sr = (o = sr) || l.memoizedState !== null, Fa(n, r, l), sr = o) : Fa(n, r, l);
        break;
      default:
        Fa(n, r, l);
    }
  }
  function qv(n) {
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
  function ri(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              vn = E.stateNode, Nr = !1;
              break e;
            case 3:
              vn = E.stateNode.containerInfo, Nr = !0;
              break e;
            case 4:
              vn = E.stateNode.containerInfo, Nr = !0;
              break e;
          }
          E = E.return;
        }
        if (vn === null) throw Error(A(160));
        Wi(d, m, c), vn = null, Nr = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        gn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Xv(r, n), r = r.sibling;
  }
  function Xv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ri(r, n), ai(n), o & 4) {
          try {
            ho(3, n, n.return), ef(3, n);
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
          try {
            ho(5, n, n.return);
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 1:
        ri(r, n), ai(n), o & 512 && l !== null && bl(l, l.return);
        break;
      case 5:
        if (ri(r, n), ai(n), o & 512 && l !== null && bl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            sa(c, "");
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Vn(c, d), un(E, m);
            var z = un(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], W = T[m + 1];
              Q === "style" ? Mt(c, W) : Q === "dangerouslySetInnerHTML" ? Oi(c, W) : Q === "children" ? sa(c, W) : rt(c, Q, W, z);
            }
            switch (E) {
              case "input":
                kn(c, d);
                break;
              case "textarea":
                Er(c, d);
                break;
              case "select":
                var I = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ce = d.value;
                ce != null ? Pn(c, !!d.multiple, ce, !1) : I !== !!d.multiple && (d.defaultValue != null ? Pn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Pn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[os] = d;
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 6:
        if (ri(r, n), ai(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ee) {
            gn(n, n.return, Ee);
          }
        }
        break;
      case 3:
        if (ri(r, n), ai(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ka(r.containerInfo);
        } catch (Ee) {
          gn(n, n.return, Ee);
        }
        break;
      case 4:
        ri(r, n), ai(n);
        break;
      case 13:
        ri(r, n), ai(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Hd = zt())), o & 4 && qv(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (sr = (z = sr) || Q, ri(r, n), sr = z) : ri(r, n), ai(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Q && n.mode & 1) for (ve = n, Q = n.child; Q !== null; ) {
            for (W = ve = Q; ve !== null; ) {
              switch (I = ve, ce = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ho(4, I, I.return);
                  break;
                case 1:
                  bl(I, I.return);
                  var ye = I.stateNode;
                  if (typeof ye.componentWillUnmount == "function") {
                    o = I, l = I.return;
                    try {
                      r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                    } catch (Ee) {
                      gn(o, l, Ee);
                    }
                  }
                  break;
                case 5:
                  bl(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Zv(W);
                    continue;
                  }
              }
              ce !== null ? (ce.return = I, ve = ce) : Zv(W);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Q === null) {
                Q = W;
                try {
                  c = W.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, T = W.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ze("display", m));
                } catch (Ee) {
                  gn(n, n.return, Ee);
                }
              }
            } else if (W.tag === 6) {
              if (Q === null) try {
                W.stateNode.nodeValue = z ? "" : W.memoizedProps;
              } catch (Ee) {
                gn(n, n.return, Ee);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              Q === W && (Q = null), W = W.return;
            }
            Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        ri(r, n), ai(n), o & 4 && qv(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), ai(n);
    }
  }
  function ai(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (nf(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (sa(c, ""), o.flags &= -33);
            var d = Ds(n);
            Ri(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Ds(n);
            Ci(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        gn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ks(n, r, l) {
    ve = n, Kv(n);
  }
  function Kv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || hu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || sr;
          E = hu;
          var z = sr;
          if (hu = m, (sr = T) && !z) for (ve = c; ve !== null; ) m = ve, T = m.child, m.tag === 22 && m.memoizedState !== null ? Os(c) : T !== null ? (T.return = m, ve = T) : Os(c);
          for (; d !== null; ) ve = d, Kv(d), d = d.sibling;
          ve = c, hu = E, sr = z;
        }
        jd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : jd(n);
    }
  }
  function jd(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              sr || ef(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !sr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : Jr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Cd(r, d, o);
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
                Cd(r, m, l);
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
                var z = r.alternate;
                if (z !== null) {
                  var Q = z.memoizedState;
                  if (Q !== null) {
                    var W = Q.dehydrated;
                    W !== null && ka(W);
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
              throw Error(A(163));
          }
          sr || r.flags & 512 && tf(r);
        } catch (I) {
          gn(r, r.return, I);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Zv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Os(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              ef(4, r);
            } catch (T) {
              gn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                gn(r, c, T);
              }
            }
            var d = r.return;
            try {
              tf(r);
            } catch (T) {
              gn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              tf(r);
            } catch (T) {
              gn(r, m, T);
            }
        }
      } catch (T) {
        gn(r, r.return, T);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var Jv = Math.ceil, rf = Ne.ReactCurrentDispatcher, mu = Ne.ReactCurrentOwner, _r = Ne.ReactCurrentBatchConfig, ft = 0, Fn = null, wn = null, cr = 0, ya = 0, mo = qr(0), Yn = 0, yu = null, gu = 0, Su = 0, Ls = 0, yo = null, na = null, Hd = 0, go = 1 / 0, Gi = null, Dl = !1, Ms = null, ja = null, af = !1, kl = null, Ns = 0, So = 0, Eo = null, Eu = -1, zs = 0;
  function en() {
    return ft & 6 ? zt() : Eu !== -1 ? Eu : Eu = zt();
  }
  function ga(n) {
    return n.mode & 1 ? ft & 2 && cr !== 0 ? cr & -cr : uu.transition !== null ? (zs === 0 && (zs = Wl()), zs) : (n = Et, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Wo(n.type)), n) : 1;
  }
  function Sa(n, r, l, o) {
    if (50 < So) throw So = 0, Eo = null, Error(A(185));
    cl(n, l, o), (!(ft & 2) || n !== Fn) && (n === Fn && (!(ft & 2) && (Su |= l), Yn === 4 && Ol(n, cr)), er(n, o), l === 1 && ft === 0 && !(r.mode & 1) && (go = zt() + 500, cs && Lr()));
  }
  function er(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = di(n, n === Fn ? cr : 0);
    if (o === 0) l !== null && on(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && on(l), r === 1) n.tag === 0 ? cd(js.bind(null, n)) : ml(js.bind(null, n)), ny(function() {
        !(ft & 6) && Lr();
      }), l = null;
      else {
        switch (Qo(o)) {
          case 1:
            l = Ge;
            break;
          case 4:
            l = fi;
            break;
          case 16:
            l = zi;
            break;
          case 536870912:
            l = Ui;
            break;
          default:
            l = zi;
        }
        l = ih(l, eh.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function eh(n, r) {
    if (Eu = -1, zs = 0, ft & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (Co() && n.callbackNode !== l) return null;
    var o = di(n, n === Fn ? cr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = of(n, o);
    else {
      r = o;
      var c = ft;
      ft |= 2;
      var d = th();
      (Fn !== n || cr !== r) && (Gi = null, go = zt() + 500, Ru(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          uf(n, E);
        }
      while (!0);
      yd(), rf.current = d, ft = c, wn !== null ? r = 0 : (Fn = null, cr = 0, r = Yn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = Us(n, c))), r === 1) throw l = yu, Ru(n, 0), Ol(n, o), er(n, zt()), l;
      if (r === 6) Ol(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fs(c) && (r = of(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = Us(n, d))), r === 1)) throw l = yu, Ru(n, 0), Ol(n, o), er(n, zt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Tu(n, na, Gi);
            break;
          case 3:
            if (Ol(n, o), (o & 130023424) === o && (r = Hd + 500 - zt(), 10 < r)) {
              if (di(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                en(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Sc(Tu.bind(null, n, na, Gi), r);
              break;
            }
            Tu(n, na, Gi);
            break;
          case 4:
            if (Ol(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = zt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Jv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Sc(Tu.bind(null, n, na, Gi), o);
              break;
            }
            Tu(n, na, Gi);
            break;
          case 5:
            Tu(n, na, Gi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return er(n, zt()), n.callbackNode === l ? eh.bind(null, n) : null;
  }
  function Us(n, r) {
    var l = yo;
    return n.current.memoizedState.isDehydrated && (Ru(n, r).flags |= 256), n = of(n, r), n !== 2 && (r = na, na = l, r !== null && As(r)), n;
  }
  function As(n) {
    na === null ? na = n : na.push.apply(na, n);
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
  function Ol(n, r) {
    for (r &= ~Ls, r &= ~Su, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function js(n) {
    if (ft & 6) throw Error(A(327));
    Co();
    var r = di(n, 0);
    if (!(r & 1)) return er(n, zt()), null;
    var l = of(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = Us(n, o));
    }
    if (l === 1) throw l = yu, Ru(n, 0), Ol(n, r), er(n, zt()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Tu(n, na, Gi), er(n, zt()), null;
  }
  function lf(n, r) {
    var l = ft;
    ft |= 1;
    try {
      return n(r);
    } finally {
      ft = l, ft === 0 && (go = zt() + 500, cs && Lr());
    }
  }
  function Cu(n) {
    kl !== null && kl.tag === 0 && !(ft & 6) && Co();
    var r = ft;
    ft |= 1;
    var l = _r.transition, o = Et;
    try {
      if (_r.transition = null, Et = 1, n) return n();
    } finally {
      Et = o, _r.transition = l, ft = r, !(ft & 6) && Lr();
    }
  }
  function Vd() {
    ya = mo.current, Gt(mo);
  }
  function Ru(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, bv(l)), wn !== null) for (l = wn.return; l !== null; ) {
      var o = l;
      switch (Tc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && yi();
          break;
        case 3:
          uo(), Gt(Nn), Gt(yn), ms();
          break;
        case 5:
          wd(o);
          break;
        case 4:
          uo();
          break;
        case 13:
          Gt(pn);
          break;
        case 19:
          Gt(pn);
          break;
        case 10:
          gd(o.type._context);
          break;
        case 22:
        case 23:
          Vd();
      }
      l = l.return;
    }
    if (Fn = n, wn = n = Ll(n.current, null), cr = ya = r, Yn = 0, yu = null, Ls = Su = gu = 0, na = yo = null, ou !== null) {
      for (r = 0; r < ou.length; r++) if (l = ou[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      ou = null;
    }
    return n;
  }
  function uf(n, r) {
    do {
      var l = wn;
      try {
        if (yd(), _e.current = Bt, bc) {
          for (var o = qe.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          bc = !1;
        }
        if (yt = 0, Bn = qt = qe = null, ys = !1, gs = 0, mu.current = null, l === null || l.return === null) {
          Yn = 1, yu = r, wn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = cr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var I = Q.alternate;
              I ? (Q.updateQueue = I.updateQueue, Q.memoizedState = I.memoizedState, Q.lanes = I.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ce = Ld(m);
            if (ce !== null) {
              ce.flags &= -257, $v(ce, m, E, d, r), ce.mode & 1 && Od(d, z, r), r = ce, T = z;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ee = /* @__PURE__ */ new Set();
                Ee.add(T), r.updateQueue = Ee;
              } else ye.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Od(d, z, r), Pd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (sn && E.mode & 1) {
            var xn = Ld(m);
            if (xn !== null) {
              !(xn.flags & 65536) && (xn.flags |= 256), $v(xn, m, E, d, r), ds(_l(T, E));
              break e;
            }
          }
          d = T = _l(T, E), Yn !== 4 && (Yn = 2), yo === null ? yo = [d] : yo.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = ws(d, T, r);
                Av(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (ja === null || !ja.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var q = Bv(d, E, r);
                  Av(d, q);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        nh(l);
      } catch (Re) {
        r = Re, wn === l && l !== null && (wn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function th() {
    var n = rf.current;
    return rf.current = Bt, n === null ? Bt : n;
  }
  function Pd() {
    (Yn === 0 || Yn === 3 || Yn === 2) && (Yn = 4), Fn === null || !(gu & 268435455) && !(Su & 268435455) || Ol(Fn, cr);
  }
  function of(n, r) {
    var l = ft;
    ft |= 2;
    var o = th();
    (Fn !== n || cr !== r) && (Gi = null, Ru(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        uf(n, c);
      }
    while (!0);
    if (yd(), ft = l, rf.current = o, wn !== null) throw Error(A(261));
    return Fn = null, cr = 0, Yn;
  }
  function uy() {
    for (; wn !== null; ) Bd(wn);
  }
  function oy() {
    for (; wn !== null && !Cr(); ) Bd(wn);
  }
  function Bd(n) {
    var r = Yd(n.alternate, n, ya);
    n.memoizedProps = n.pendingProps, r === null ? nh(n) : wn = r, mu.current = null;
  }
  function nh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Wv(l, r), l !== null) {
          l.flags &= 32767, wn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Yn = 6, wn = null;
          return;
        }
      } else if (l = Ud(l, r, ya), l !== null) {
        wn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        wn = r;
        return;
      }
      wn = r = n;
    } while (r !== null);
    Yn === 0 && (Yn = 5);
  }
  function Tu(n, r, l) {
    var o = Et, c = _r.transition;
    try {
      _r.transition = null, Et = 1, sy(n, r, l, o);
    } finally {
      _r.transition = c, Et = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      Co();
    while (kl !== null);
    if (ft & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Yo(n, d), n === Fn && (wn = Fn = null, cr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || af || (af = !0, ih(zi, function() {
      return Co(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = _r.transition, _r.transition = null;
      var m = Et;
      Et = 1;
      var E = ft;
      ft |= 4, mu.current = null, ly(n, l), Xv(l, n), gv(us), fl = !!nu, us = nu = null, n.current = l, ks(l), qa(), ft = E, Et = m, _r.transition = d;
    } else n.current = l;
    if (af && (af = !1, kl = n, Ns = c), d = n.pendingLanes, d === 0 && (ja = null), Bo(l.stateNode), er(n, zt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Dl) throw Dl = !1, n = Ms, Ms = null, n;
    return Ns & 1 && n.tag !== 0 && Co(), d = n.pendingLanes, d & 1 ? n === Eo ? So++ : (So = 0, Eo = n) : So = 0, Lr(), null;
  }
  function Co() {
    if (kl !== null) {
      var n = Qo(Ns), r = _r.transition, l = Et;
      try {
        if (_r.transition = null, Et = 16 > n ? 16 : n, kl === null) var o = !1;
        else {
          if (n = kl, kl = null, Ns = 0, ft & 6) throw Error(A(331));
          var c = ft;
          for (ft |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (ve = z; ve !== null; ) {
                    var Q = ve;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null) W.return = Q, ve = W;
                    else for (; ve !== null; ) {
                      Q = ve;
                      var I = Q.sibling, ce = Q.return;
                      if (Gv(Q), Q === z) {
                        ve = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = ce, ve = I;
                        break;
                      }
                      ve = ce;
                    }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ee = ye.child;
                  if (Ee !== null) {
                    ye.child = null;
                    do {
                      var xn = Ee.sibling;
                      Ee.sibling = null, Ee = xn;
                    } while (Ee !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ve = m;
            else e: for (; ve !== null; ) {
              if (d = ve, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  ho(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ve = D;
                break e;
              }
              ve = d.return;
            }
          }
          var x = n.current;
          for (ve = x; ve !== null; ) {
            m = ve;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ve = L;
            else e: for (m = x; ve !== null; ) {
              if (E = ve, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ef(9, E);
                }
              } catch (Re) {
                gn(E, E.return, Re);
              }
              if (E === m) {
                ve = null;
                break e;
              }
              var q = E.sibling;
              if (q !== null) {
                q.return = E.return, ve = q;
                break e;
              }
              ve = E.return;
            }
          }
          if (ft = c, Lr(), Ir && typeof Ir.onPostCommitFiberRoot == "function") try {
            Ir.onPostCommitFiberRoot(ul, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Et = l, _r.transition = r;
      }
    }
    return !1;
  }
  function rh(n, r, l) {
    r = _l(l, r), r = ws(n, r, 1), n = Rl(n, r, 1), r = en(), n !== null && (cl(n, 1, r), er(n, r));
  }
  function gn(n, r, l) {
    if (n.tag === 3) rh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        rh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ja === null || !ja.has(o))) {
          n = _l(l, n), n = Bv(r, n, 1), r = Rl(r, n, 1), n = en(), r !== null && (cl(r, 1, n), er(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function $d(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = en(), n.pingedLanes |= n.suspendedLanes & l, Fn === n && (cr & l) === l && (Yn === 4 || Yn === 3 && (cr & 130023424) === cr && 500 > zt() - Hd ? Ru(n, 0) : Ls |= l), er(n, r);
  }
  function ah(n, r) {
    r === 0 && (n.mode & 1 ? (r = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : r = 1);
    var l = en();
    n = Si(n, r), n !== null && (cl(n, r, l), er(n, l));
  }
  function cy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), ah(n, l);
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
        throw Error(A(314));
    }
    o !== null && o.delete(r), ah(n, l);
  }
  var Yd;
  Yd = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Nn.current) Jn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Jn = !1, Jc(n, r, l);
      Jn = !!(n.flags & 131072);
    }
    else Jn = !1, sn && r.flags & 1048576 && kv(r, Sl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Aa(n, r), n = r.pendingProps;
        var c = pa(r, yn.current);
        io(r, l), c = ze(null, r, o, n, c, l);
        var d = Tl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, zn(o) ? (d = !0, iu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Cl(r), c.updater = Yc, r.stateNode = c, c._reactInternals = r, Dd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, sn && d && fd(r), Tn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Aa(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = Jr(o, n), c) {
            case 0:
              r = Gc(null, r, o, n, l);
              break e;
            case 1:
              r = ay(null, r, o, n, l);
              break e;
            case 11:
              r = Wc(null, r, o, n, l);
              break e;
            case 14:
              r = ea(null, r, o, Jr(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Jr(o, c), Gc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Jr(o, c), ay(n, r, o, c, l);
      case 3:
        e: {
          if (qc(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Uv(n, r), xc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(A(423)), r), r = po(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(A(424)), r), r = po(n, r, o, l, c);
            break e;
          } else for (Kr = Ja(r.stateNode.containerInfo.firstChild), Xr = r, sn = !0, ti = null, l = ur(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Ii(), o === c) {
              r = or(n, r, l);
              break e;
            }
            Tn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Td(r), n === null && hd(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ru(o, c) ? m = null : d !== null && ru(o, d) && (r.flags |= 32), xs(n, r), Tn(n, r, m, l), r.child;
      case 6:
        return n === null && hd(r), null;
      case 13:
        return Yv(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ni(r, null, o, l) : Tn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Jr(o, c), Wc(n, r, o, c, l);
      case 7:
        return Tn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Jt(te, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !Nn.current) {
              r = or(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = Qi(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Q = z.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Sd(
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
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Sd(m, l, r), m = d.sibling;
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
          Tn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, io(r, l), c = Pt(c), o = o(c), r.flags |= 1, Tn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = Jr(o, r.pendingProps), c = Jr(o.type, c), ea(n, r, o, c, l);
      case 15:
        return vu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : Jr(o, c), Aa(n, r), r.tag = 1, zn(o) ? (n = !0, iu(r)) : n = !1, io(r, l), Pv(r, o, c), Dd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return ta(n, r, l);
      case 22:
        return Ke(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function ih(n, r) {
    return nn(n, r);
  }
  function dy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ha(n, r, l, o) {
    return new dy(n, r, l, o);
  }
  function Id(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function py(n) {
    if (typeof n == "function") return Id(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === $t) return 11;
      if (n === At) return 14;
    }
    return 2;
  }
  function Ll(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ha(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function sf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Id(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ot:
        return Ml(l.children, c, d, r);
      case He:
        m = 8, c |= 8;
        break;
      case Sn:
        return n = Ha(12, l, r, c | 2), n.elementType = Sn, n.lanes = d, n;
      case ht:
        return n = Ha(13, l, r, c), n.elementType = ht, n.lanes = d, n;
      case Me:
        return n = Ha(19, l, r, c), n.elementType = Me, n.lanes = d, n;
      case tt:
        return Ro(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Lt:
            m = 10;
            break e;
          case fn:
            m = 9;
            break e;
          case $t:
            m = 11;
            break e;
          case At:
            m = 14;
            break e;
          case pt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ha(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Ha(7, n, o, r), n.lanes = l, n;
  }
  function Ro(n, r, l, o) {
    return n = Ha(22, n, o, r), n.elementType = tt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function wu(n, r, l) {
    return n = Ha(6, n, null, r), n.lanes = l, n;
  }
  function Qd(n, r, l) {
    return r = Ha(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function lh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function cf(n, r, l, o, c, d, m, E, T) {
    return n = new lh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ha(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cl(d), n;
  }
  function uh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function oh(n) {
    if (!n) return it;
    n = n._reactInternals;
    e: {
      if (ie(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (zn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (zn(l)) return Dv(n, l, r);
    }
    return r;
  }
  function Wd(n, r, l, o, c, d, m, E, T) {
    return n = cf(l, o, !0, n, c, d, m, E, T), n.context = oh(null), l = n.current, o = en(), c = ga(l), d = Qi(o, c), d.callback = r ?? null, Rl(l, d, c), n.current.lanes = c, cl(n, c, o), er(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = en(), m = ga(c);
    return l = oh(l), r.context === null ? r.context = l : r.pendingContext = l, r = Qi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Rl(c, r, m), n !== null && (Sa(n, c, m, d), wc(n, c, m)), m;
  }
  function df(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function sh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function pf(n, r) {
    sh(n, r), (n = n.alternate) && sh(n, r);
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function vf(n) {
    this._internalRoot = n;
  }
  qi.prototype.render = vf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    ff(n, r, null, null);
  }, qi.prototype.unmount = vf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Cu(function() {
        ff(null, n, null, null);
      }), r[$i] = null;
    }
  };
  function qi(n) {
    this._internalRoot = n;
  }
  qi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = pi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Xa.length && r !== 0 && r < Xa[l].priority; l++) ;
      Xa.splice(l, 0, n), l === 0 && Hu(n);
    }
  };
  function qd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function hf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ch() {
  }
  function vy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = df(m);
          d.call(z);
        };
      }
      var m = Wd(r, o, n, 0, null, !1, !1, "", ch);
      return n._reactRootContainer = m, n[$i] = m.current, is(n.nodeType === 8 ? n.parentNode : n), Cu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = df(T);
        E.call(z);
      };
    }
    var T = cf(n, 0, !1, null, null, !1, !1, "", ch);
    return n._reactRootContainer = T, n[$i] = T.current, is(n.nodeType === 8 ? n.parentNode : n), Cu(function() {
      ff(r, T, l, o);
    }), T;
  }
  function mf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = df(m);
          E.call(T);
        };
      }
      ff(r, m, n, c);
    } else m = vy(l, r, n, c, o);
    return df(m);
  }
  ju = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Qr(r.pendingLanes);
          l !== 0 && (Io(r, l | 1), er(r, zt()), !(ft & 6) && (go = zt() + 500, Lr()));
        }
        break;
      case 13:
        Cu(function() {
          var o = Si(n, 1);
          if (o !== null) {
            var c = en();
            Sa(o, n, 1, c);
          }
        }), pf(n, 1);
    }
  }, Ct = function(n) {
    if (n.tag === 13) {
      var r = Si(n, 134217728);
      if (r !== null) {
        var l = en();
        Sa(r, n, 134217728, l);
      }
      pf(n, 134217728);
    }
  }, lc = function(n) {
    if (n.tag === 13) {
      var r = ga(n), l = Si(n, r);
      if (l !== null) {
        var o = en();
        Sa(l, n, r, o);
      }
      pf(n, r);
    }
  }, pi = function() {
    return Et;
  }, Pe = function(n, r) {
    var l = Et;
    try {
      return Et = n, r();
    } finally {
      Et = l;
    }
  }, Yt = function(n, r, l) {
    switch (r) {
      case "input":
        if (kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Yi(o);
              if (!c) throw Error(A(90));
              Qn(o), kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Er(n, l);
        break;
      case "select":
        r = l.value, r != null && Pn(n, !!l.multiple, r, !1);
    }
  }, Yl = lf, Il = Cu;
  var hy = { usingClientEntryPoint: !1, Events: [ss, xe, Yi, ba, Li, lf] }, To = { findFiberByHostInstance: au, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: To.bundleType, version: To.version, rendererPackageName: To.rendererPackageName, rendererConfig: To.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Je(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: To.findFiberByHostInstance, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var yf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yf.isDisabled && yf.supportsFiber) try {
      ul = yf.inject(my), Ir = yf;
    } catch {
    }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qd(r)) throw Error(A(200));
    return uh(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!qd(n)) throw Error(A(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = cf(n, 1, !1, null, null, l, !1, o, c), n[$i] = r.current, is(n.nodeType === 8 ? n.parentNode : n), new vf(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = Je(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return Cu(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return mf(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!qd(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Wd(r, null, n, 1, l ?? null, c, !1, d, m), n[$i] = r.current, is(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new qi(r);
  }, Ia.render = function(n, r, l) {
    if (!hf(r)) throw Error(A(200));
    return mf(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!hf(n)) throw Error(A(40));
    return n._reactRootContainer ? (Cu(function() {
      mf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[$i] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = lf, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!hf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return mf(n, r, l, !1, o);
  }, Ia.version = "18.3.1-next-f1338f8080-20240426", Ia;
}
var Qa = {}, rT;
function iD() {
  if (rT) return Qa;
  rT = 1;
  var ee = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return ee.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var oe = $m, A = lT(), wt = oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ut = !1;
    function Ot(e) {
      Ut = e;
    }
    function xt(e) {
      if (!Ut) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        dt("warn", e, a);
      }
    }
    function S(e) {
      if (!Ut) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        dt("error", e, a);
      }
    }
    function dt(e, t, a) {
      {
        var i = wt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var be = 0, pe = 1, Be = 2, Z = 3, Fe = 4, le = 5, we = 6, ut = 7, Hn = 8, rn = 9, rt = 10, Ne = 11, bt = 12, Ce = 13, ot = 14, He = 15, Sn = 16, Lt = 17, fn = 18, $t = 19, ht = 21, Me = 22, At = 23, pt = 24, tt = 25, B = !0, me = !1, re = !1, b = !1, $ = !1, De = !0, Ve = !0, $e = !0, nt = !0, St = /* @__PURE__ */ new Set(), Qe = {}, mt = {};
    function Vt(e, t) {
      bn(e, t), bn(e + "Capture", t);
    }
    function bn(e, t) {
      Qe[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Qe[e] = t;
      {
        var a = e.toLowerCase();
        mt[a] = e, e === "onDoubleClick" && (mt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        St.add(t[i]);
    }
    var Qn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", rr = Object.prototype.hasOwnProperty;
    function Dn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Sr(e) {
      try {
        return Vn(e), !1;
      } catch {
        return !0;
      }
    }
    function Vn(e) {
      return "" + e;
    }
    function kn(e, t) {
      if (Sr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function oa(e) {
      if (Sr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    function Wa(e, t) {
      if (Sr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function br(e, t) {
      if (Sr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Dn(e)), Vn(e);
    }
    function Pn(e) {
      if (Sr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    function Wn(e) {
      if (Sr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Dn(e)), Vn(e);
    }
    var Gn = 0, Er = 1, Ga = 2, On = 3, ar = 4, $r = 5, Oi = 6, sa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", K = sa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Oe = new RegExp("^[" + sa + "][" + K + "]*$"), Ze = {}, Mt = {};
    function an(e) {
      return rr.call(Mt, e) ? !0 : rr.call(Ze, e) ? !1 : Oe.test(e) ? (Mt[e] = !0, !0) : (Ze[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function ln(e, t, a) {
      return t !== null ? t.type === Gn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function un(e, t, a, i) {
      if (a !== null && a.type === Gn)
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
    function qn(e, t, a, i) {
      if (t === null || typeof t > "u" || un(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case On:
            return !t;
          case ar:
            return t === !1;
          case $r:
            return isNaN(t);
          case Oi:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function tn(e) {
      return Nt.hasOwnProperty(e) ? Nt[e] : null;
    }
    function Yt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Ga || t === On || t === ar, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Nt = {}, ca = [
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
    ca.forEach(function(e) {
      Nt[e] = new Yt(
        e,
        Gn,
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
      Nt[t] = new Yt(
        t,
        Er,
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
      Nt[e] = new Yt(
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
      Nt[e] = new Yt(
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
      Nt[e] = new Yt(
        e,
        On,
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
      Nt[e] = new Yt(
        e,
        On,
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
      Nt[e] = new Yt(
        e,
        ar,
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
      Nt[e] = new Yt(
        e,
        Oi,
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
      Nt[e] = new Yt(
        e,
        $r,
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
    var _a = /[\-\:]([a-z])/g, ba = function(e) {
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
      var t = e.replace(_a, ba);
      Nt[t] = new Yt(
        t,
        Er,
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
      var t = e.replace(_a, ba);
      Nt[t] = new Yt(
        t,
        Er,
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
      var t = e.replace(_a, ba);
      Nt[t] = new Yt(
        t,
        Er,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Nt[e] = new Yt(
        e,
        Er,
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
    var Li = "xlinkHref";
    Nt[Li] = new Yt(
      "xlinkHref",
      Er,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Nt[e] = new Yt(
        e,
        Er,
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
    var Yl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Il = !1;
    function Mi(e) {
      !Il && Yl.test(e) && (Il = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ql(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        kn(a, t), i.sanitizeURL && Mi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ar) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : qn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (qn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === On)
            return a;
          f = e.getAttribute(s);
        }
        return qn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function oi(e, t, a, i) {
      {
        if (!an(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return kn(a, t), u === "" + a ? a : u;
      }
    }
    function fa(e, t, a, i) {
      var u = tn(t);
      if (!ln(t, u, i)) {
        if (qn(t, a, u, i) && (a = null), i || u === null) {
          if (an(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (kn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === On ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, w;
          _ === On || _ === ar && a === !0 ? w = "" : (kn(a, y), w = "" + a, u.sanitizeURL && Mi(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var ir = Symbol.for("react.element"), da = Symbol.for("react.portal"), Yr = Symbol.for("react.fragment"), si = Symbol.for("react.strict_mode"), ci = Symbol.for("react.profiler"), Ni = Symbol.for("react.provider"), R = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), at = Symbol.for("react.memo"), Ye = Symbol.for("react.lazy"), st = Symbol.for("react.scope"), Je = Symbol.for("react.debug_trace_mode"), En = Symbol.for("react.offscreen"), nn = Symbol.for("react.legacy_hidden"), on = Symbol.for("react.cache"), Cr = Symbol.for("react.tracing_marker"), qa = Symbol.iterator, zt = "@@iterator";
    function dn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = qa && e[qa] || e[zt];
      return typeof t == "function" ? t : null;
    }
    var Ge = Object.assign, fi = 0, zi, rc, Ui, ul, Ir, Bo, Dr;
    function $o() {
    }
    $o.__reactDisabledLog = !0;
    function ac() {
      {
        if (fi === 0) {
          zi = console.log, rc = console.info, Ui = console.warn, ul = console.error, Ir = console.group, Bo = console.groupCollapsed, Dr = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: $o,
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
        fi++;
      }
    }
    function ic() {
      {
        if (fi--, fi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ge({}, e, {
              value: zi
            }),
            info: Ge({}, e, {
              value: rc
            }),
            warn: Ge({}, e, {
              value: Ui
            }),
            error: Ge({}, e, {
              value: ul
            }),
            group: Ge({}, e, {
              value: Ir
            }),
            groupCollapsed: Ge({}, e, {
              value: Bo
            }),
            groupEnd: Ge({}, e, {
              value: Dr
            })
          });
        }
        fi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = wt.ReactCurrentDispatcher, ol;
    function Qr(e, t, a) {
      {
        if (ol === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ol = i && i[1] || "";
          }
        return `
` + ol + e;
      }
    }
    var di = !1, sl;
    {
      var Fu = typeof WeakMap == "function" ? WeakMap : Map;
      sl = new Fu();
    }
    function Fi(e, t) {
      if (!e || di)
        return "";
      {
        var a = sl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      di = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ai.current, Ai.current = null, ac();
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
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
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
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && sl.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        di = !1, Ai.current = s, ic(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? Qr(w) : "";
      return typeof e == "function" && sl.set(e, N), N;
    }
    function Wl(e, t, a) {
      return Fi(e, !0);
    }
    function Gl(e, t, a) {
      return Fi(e, !1);
    }
    function cl(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Yo(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fi(e, cl(e));
      if (typeof e == "string")
        return Qr(e);
      switch (e) {
        case ne:
          return Qr("Suspense");
        case ie:
          return Qr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Y:
            return Gl(e.render);
          case at:
            return Yo(e.type, t, a);
          case Ye: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Yo(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Io(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case le:
          return Qr(e.type);
        case Sn:
          return Qr("Lazy");
        case Ce:
          return Qr("Suspense");
        case $t:
          return Qr("SuspenseList");
        case be:
        case Be:
        case He:
          return Gl(e.type);
        case Ne:
          return Gl(e.type.render);
        case pe:
          return Wl(e.type);
        default:
          return "";
      }
    }
    function Et(e) {
      try {
        var t = "", a = e;
        do
          t += Io(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Qo(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ju(e) {
      return e.displayName || "Context";
    }
    function Ct(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Yr:
          return "Fragment";
        case da:
          return "Portal";
        case ci:
          return "Profiler";
        case si:
          return "StrictMode";
        case ne:
          return "Suspense";
        case ie:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return ju(t) + ".Consumer";
          case Ni:
            var a = e;
            return ju(a._context) + ".Provider";
          case Y:
            return Qo(e, e.render, "ForwardRef");
          case at:
            var i = e.displayName || null;
            return i !== null ? i : Ct(e.type) || "Memo";
          case Ye: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Ct(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function lc(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function pi(e) {
      return e.displayName || "Context";
    }
    function Pe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case pt:
          return "Cache";
        case rn:
          var i = a;
          return pi(i) + ".Consumer";
        case rt:
          var u = a;
          return pi(u._context) + ".Provider";
        case fn:
          return "DehydratedFragment";
        case Ne:
          return lc(a, a.render, "ForwardRef");
        case ut:
          return "Fragment";
        case le:
          return a;
        case Fe:
          return "Portal";
        case Z:
          return "Root";
        case we:
          return "Text";
        case Sn:
          return Ct(a);
        case Hn:
          return a === si ? "StrictMode" : "Mode";
        case Me:
          return "Offscreen";
        case bt:
          return "Profiler";
        case ht:
          return "Scope";
        case Ce:
          return "Suspense";
        case $t:
          return "SuspenseList";
        case tt:
          return "TracingMarker";
        case pe:
        case be:
        case Lt:
        case Be:
        case ot:
        case He:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ql = wt.ReactDebugCurrentFrame, Xn = null, Wr = !1;
    function kr() {
      {
        if (Xn === null)
          return null;
        var e = Xn._debugOwner;
        if (e !== null && typeof e < "u")
          return Pe(e);
      }
      return null;
    }
    function vi() {
      return Xn === null ? "" : Et(Xn);
    }
    function mn() {
      ql.getCurrentStack = null, Xn = null, Wr = !1;
    }
    function It(e) {
      ql.getCurrentStack = e === null ? null : vi, Xn = e, Wr = !1;
    }
    function Xa() {
      return Xn;
    }
    function Da(e) {
      Wr = e;
    }
    function Rr(e) {
      return "" + e;
    }
    function Or(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Wn(e), e;
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
    function Hu(e, t) {
      Gf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Vu(e) {
      return e._valueTracker;
    }
    function Pu(e) {
      e._valueTracker = null;
    }
    function Kl(e) {
      var t = "";
      return e && (Xl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ka(e) {
      var t = Xl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            Wn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            Wn(p), i = "" + p;
          },
          stopTracking: function() {
            Pu(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Oa(e) {
      Vu(e) || (e._valueTracker = ka(e));
    }
    function fl(e) {
      if (!e)
        return !1;
      var t = Vu(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Kl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ji(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Bu = !1, dl = !1, Hi = !1, $u = !1;
    function Wo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function La(e, t) {
      var a = e, i = t.checked, u = Ge({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Yu(e, t) {
      Hu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !dl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), dl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Bu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component", t.type), Bu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Or(t.value != null ? t.value : i),
        controlled: Wo(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && fa(a, "checked", i, !1);
    }
    function C(e, t) {
      var a = e;
      {
        var i = Wo(t);
        !a._wrapperState.controlled && i && !$u && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), $u = !0), a._wrapperState.controlled && !i && !Hi && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Hi = !0);
      }
      h(e, t);
      var u = Or(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Rr(u)) : a.value !== Rr(u) && (a.value = Rr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? he(a, t.type, u) : t.hasOwnProperty("defaultValue") && he(a, t.type, Or(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function M(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Rr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function F(e, t) {
      var a = e;
      C(a, t), X(a, t);
    }
    function X(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        kn(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = bh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            fl(f), C(f, p);
          }
        }
      }
    }
    function he(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ji(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Rr(e._wrapperState.initialValue) : e.defaultValue !== Rr(a) && (e.defaultValue = Rr(a)));
    }
    var se = !1, Ue = !1, et = !1;
    function Ft(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? oe.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ue || (Ue = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (et || (et = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !se && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), se = !0);
    }
    function Qt(e, t) {
      t.value != null && e.setAttribute("value", Rr(Or(t.value)));
    }
    var Wt = Array.isArray;
    function Xe(e) {
      return Wt(e);
    }
    var Zt;
    Zt = !1;
    function Cn() {
      var e = kr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zl = ["value", "defaultValue"];
    function Go(e) {
      {
        Hu("select", e);
        for (var t = 0; t < Zl.length; t++) {
          var a = Zl[t];
          if (e[a] != null) {
            var i = Xe(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Cn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Cn());
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
        for (var g = Rr(Or(a)), _ = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          _ === null && !u[w].disabled && (_ = u[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Jl(e, t) {
      return Ge({}, t, {
        value: void 0
      });
    }
    function qo(e, t) {
      var a = e;
      Go(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Zt && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Zt = !0);
    }
    function qf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function uc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var Zp = !1;
    function oc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ge({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Rr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Jp(e, t) {
      var a = e;
      Hu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Zp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", kr() || "A component"), Zp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Xe(u)) {
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
        initialValue: Or(i)
      };
    }
    function ev(e, t) {
      var a = e, i = Or(t.value), u = Or(t.defaultValue);
      if (i != null) {
        var s = Rr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Rr(u));
    }
    function tv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ym(e, t) {
      ev(e, t);
    }
    var Ka = "http://www.w3.org/1999/xhtml", Im = "http://www.w3.org/1998/Math/MathML", Kf = "http://www.w3.org/2000/svg";
    function Zf(e) {
      switch (e) {
        case "svg":
          return Kf;
        case "math":
          return Im;
        default:
          return Ka;
      }
    }
    function sc(e, t) {
      return e == null || e === Ka ? Zf(t) : e === Kf && t === "foreignObject" ? Ka : e;
    }
    var Qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, cc, nv = Qm(function(e, t) {
      if (e.namespaceURI === Kf && !("innerHTML" in e)) {
        cc = cc || document.createElement("div"), cc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = cc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gr = 1, Pi = 3, Ln = 8, Bi = 9, Xo = 11, pl = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Pi) {
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
    }, Iu = {
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
    function rv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var av = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Iu).forEach(function(e) {
      av.forEach(function(t) {
        Iu[rv(t, e)] = Iu[e];
      });
    });
    function fc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Iu.hasOwnProperty(e) && Iu[e]) ? t + "px" : (br(t, e), ("" + t).trim());
    }
    var iv = /([A-Z])/g, Qu = /^ms-/;
    function Gm(e) {
      return e.replace(iv, "-$1").toLowerCase().replace(Qu, "-ms-");
    }
    var lv = function() {
    };
    {
      var qm = /^(?:webkit|moz|o)[A-Z]/, uv = /^-ms-/, ov = /-(.)/g, Wu = /;\s*$/, hi = {}, Jf = {}, Ko = !1, sv = !1, cv = function(e) {
        return e.replace(ov, function(t, a) {
          return a.toUpperCase();
        });
      }, ed = function(e) {
        hi.hasOwnProperty(e) && hi[e] || (hi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          cv(e.replace(uv, "ms-"))
        ));
      }, td = function(e) {
        hi.hasOwnProperty(e) && hi[e] || (hi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, fv = function(e, t) {
        Jf.hasOwnProperty(t) && Jf[t] || (Jf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Wu, "")));
      }, dv = function(e, t) {
        Ko || (Ko = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, pv = function(e, t) {
        sv || (sv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      lv = function(e, t) {
        e.indexOf("-") > -1 ? ed(e) : qm.test(e) ? td(e) : Wu.test(t) && fv(e, t), typeof t == "number" && (isNaN(t) ? dv(e, t) : isFinite(t) || pv(e, t));
      };
    }
    var Xm = lv;
    function Km(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Gm(i)) + ":", t += fc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function vv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Xm(i, t[i]);
          var s = fc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Zm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function hv(e) {
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
        var a = hv(e), i = hv(t), u = {};
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
    }, mv = Ge({
      menuitem: !0
    }, Zo), yv = "__html";
    function dc(e, t) {
      if (t) {
        if (mv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(yv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function vl(e, t) {
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
    }, gv = {
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
    }, qu = {}, Xu = new RegExp("^(aria)-[" + K + "]*$"), nd = new RegExp("^(aria)[A-Z][" + K + "]*$");
    function Jo(e, t) {
      {
        if (rr.call(qu, t) && qu[t])
          return !0;
        if (nd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = gv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), qu[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), qu[t] = !0, !0;
        }
        if (Xu.test(t)) {
          var u = t.toLowerCase(), s = gv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return qu[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), qu[t] = !0, !0;
        }
      }
      return !0;
    }
    function rd(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Jo(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Sv(e, t) {
      vl(e, t) || rd(e, t);
    }
    var es = !1;
    function Ku(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !es && (es = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var pc = function() {
    };
    {
      var Tr = {}, ts = /^on./, Ev = /^on[^A-Z]/, Cv = new RegExp("^(aria)-[" + K + "]*$"), Rv = new RegExp("^(aria)[A-Z][" + K + "]*$");
      pc = function(e, t, a, i) {
        if (rr.call(Tr, t) && Tr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Tr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Tr[t] = !0, !0;
          if (ts.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Tr[t] = !0, !0;
        } else if (ts.test(t))
          return Ev.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Tr[t] = !0, !0;
        if (Cv.test(t) || Rv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Tr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Tr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Tr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Tr[t] = !0, !0;
        var v = tn(t), y = v !== null && v.type === Gn;
        if (Gu.hasOwnProperty(u)) {
          var g = Gu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Tr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Tr[t] = !0, !0;
        return typeof a == "boolean" && un(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Tr[t] = !0, !0) : y ? !0 : un(t, a, v, !1) ? (Tr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === On && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Tr[t] = !0), !0);
      };
    }
    var Tv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = pc(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function wv(e, t, a) {
      vl(e, t) || Tv(e, t, a);
    }
    var ad = 1, mi = 2, eu = 4, id = ad | mi | eu, ns = null;
    function Jm(e) {
      ns !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ns = e;
    }
    function rs() {
      ns === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ns = null;
    }
    function ey(e) {
      return e === ns;
    }
    function vc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Pi ? t.parentNode : t;
    }
    var hc = null, jt = null, hl = null;
    function as(e) {
      var t = _o(e);
      if (t) {
        if (typeof hc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = bh(a);
          hc(t.stateNode, t.type, i);
        }
      }
    }
    function is(e) {
      hc = e;
    }
    function ld(e) {
      jt ? hl ? hl.push(e) : hl = [e] : jt = e;
    }
    function ud() {
      return jt !== null || hl !== null;
    }
    function Zu() {
      if (jt) {
        var e = jt, t = hl;
        if (jt = null, hl = null, as(e), t)
          for (var a = 0; a < t.length; a++)
            as(t[a]);
      }
    }
    var ls = function(e, t) {
      return e(t);
    }, tu = function() {
    }, mc = !1;
    function ty() {
      var e = ud();
      e && (tu(), Zu());
    }
    function xv(e, t, a) {
      if (mc)
        return e(t, a);
      mc = !0;
      try {
        return ls(e, t, a);
      } finally {
        mc = !1, ty();
      }
    }
    function _v(e, t, a) {
      ls = e, tu = a;
    }
    function yc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function gc(e, t, a) {
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
          return !!(a.disabled && yc(t));
        default:
          return !1;
      }
    }
    function nu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = bh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (gc(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var us = !1;
    if (Qn)
      try {
        var ru = {};
        Object.defineProperty(ru, "passive", {
          get: function() {
            us = !0;
          }
        }), window.addEventListener("test", ru, ru), window.removeEventListener("test", ru, ru);
      } catch {
        us = !1;
      }
    function Sc(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var bv = Sc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ec = document.createElement("react");
      bv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          Ec.removeEventListener(H, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function Le() {
          _ = !0, j(), a.apply(i, ae), w = !1;
        }
        var Te, Tt = !1, vt = !1;
        function k(O) {
          if (Te = O.error, Tt = !0, Te === null && O.colno === 0 && O.lineno === 0 && (vt = !0), O.defaultPrevented && Te != null && typeof Te == "object")
            try {
              Te._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Ec.addEventListener(H, Le, !1), g.initEvent(H, !1, !1), Ec.dispatchEvent(g), U && Object.defineProperty(window, "event", U), _ && w && (Tt ? vt && (Te = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Te = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Te)), window.removeEventListener("error", k), !_)
          return j(), Sc.apply(this, arguments);
      };
    }
    var ny = bv, Ju = !1, eo = null, Ja = !1, Cc = null, to = {
      onError: function(e) {
        Ju = !0, eo = e;
      }
    };
    function Ma(e, t, a, i, u, s, f, p, v) {
      Ju = !1, eo = null, ny.apply(to, arguments);
    }
    function os(e, t, a, i, u, s, f, p, v) {
      if (Ma.apply(this, arguments), Ju) {
        var y = sd();
        Ja || (Ja = !0, Cc = y);
      }
    }
    function $i() {
      if (Ja) {
        var e = Cc;
        throw Ja = !1, Cc = null, e;
      }
    }
    function od() {
      return Ju;
    }
    function sd() {
      if (Ju) {
        var e = eo;
        return Ju = !1, eo = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function no(e) {
      return e._reactInternals;
    }
    function au(e) {
      return e._reactInternals !== void 0;
    }
    function ss(e, t) {
      e._reactInternals = t;
    }
    var xe = (
      /*                      */
      0
    ), Yi = (
      /*                */
      1
    ), Mn = (
      /*                    */
      2
    ), ct = (
      /*                       */
      4
    ), qr = (
      /*                */
      16
    ), Gt = (
      /*                 */
      32
    ), Jt = (
      /*                     */
      64
    ), it = (
      /*                   */
      128
    ), yn = (
      /*            */
      256
    ), Nn = (
      /*                          */
      512
    ), Na = (
      /*                     */
      1024
    ), pa = (
      /*                      */
      2048
    ), zn = (
      /*                    */
      4096
    ), yi = (
      /*                   */
      8192
    ), Rc = (
      /*             */
      16384
    ), Dv = (
      /*               */
      32767
    ), iu = (
      /*                   */
      32768
    ), za = (
      /*                */
      65536
    ), ei = (
      /* */
      131072
    ), cs = (
      /*                       */
      1048576
    ), fs = (
      /*                    */
      2097152
    ), ml = (
      /*                 */
      4194304
    ), cd = (
      /*                */
      8388608
    ), Lr = (
      /*               */
      16777216
    ), yl = (
      /*              */
      33554432
    ), gl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ct | Na | 0
    ), ro = Mn | ct | qr | Gt | Nn | zn | yi, Sl = ct | Jt | Nn | yi, lr = pa | qr, Un = ml | cd | fs, lu = wt.ReactCurrentOwner;
    function Mr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Mn | zn)) !== xe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === Z ? a : null;
    }
    function gi(e) {
      if (e.tag === Ce) {
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
    function El(e) {
      return e.tag === Z ? e.stateNode.containerInfo : null;
    }
    function kv(e) {
      return Mr(e) === e;
    }
    function fd(e) {
      {
        var t = lu.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = no(e);
      return u ? Mr(u) === u : !1;
    }
    function Tc(e) {
      if (Mr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Xr(e) {
      var t = e.alternate;
      if (!t) {
        var a = Mr(e);
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
              return Tc(s), e;
            if (v === u)
              return Tc(s), t;
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
      if (i.tag !== Z)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Kr(e) {
      var t = Xr(e);
      return t !== null ? sn(t) : null;
    }
    function sn(e) {
      if (e.tag === le || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = sn(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ti(e) {
      var t = Xr(e);
      return t !== null ? dd(t) : null;
    }
    function dd(e) {
      if (e.tag === le || e.tag === we)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Fe) {
          var a = dd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var pd = A.unstable_scheduleCallback, vd = A.unstable_cancelCallback, hd = A.unstable_shouldYield, Ov = A.unstable_requestPaint, Rn = A.unstable_now, Lv = A.unstable_getCurrentPriorityLevel, Ii = A.unstable_ImmediatePriority, ds = A.unstable_UserBlockingPriority, uu = A.unstable_NormalPriority, ps = A.unstable_LowPriority, ao = A.unstable_IdlePriority, Mv = A.unstable_yieldValue, Nv = A.unstable_setDisableYieldValue, ni = null, ur = null, te = null, va = !1, wr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function md(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ve && (e = Ge({}, e, {
          getLaneLabelMap: Ed,
          injectProfilingHooks: ou
        })), ni = t.inject(e), ur = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function yd(e, t) {
      if (ur && typeof ur.onScheduleFiberRoot == "function")
        try {
          ur.onScheduleFiberRoot(ni, e, t);
        } catch (a) {
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function gd(e, t) {
      if (ur && typeof ur.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & it) === it;
          if ($e) {
            var i;
            switch (t) {
              case ta:
                i = Ii;
                break;
              case Aa:
                i = ds;
                break;
              case or:
                i = uu;
                break;
              case Jc:
                i = ao;
                break;
              default:
                i = uu;
                break;
            }
            ur.onCommitFiberRoot(ni, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Sd(e) {
      if (ur && typeof ur.onPostCommitFiberRoot == "function")
        try {
          ur.onPostCommitFiberRoot(ni, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function io(e) {
      if (ur && typeof ur.onCommitFiberUnmount == "function")
        try {
          ur.onCommitFiberUnmount(ni, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Pt(e) {
      if (typeof Mv == "function" && (Nv(e), Ot(e)), ur && typeof ur.setStrictMode == "function")
        try {
          ur.setStrictMode(ni, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function ou(e) {
      te = e;
    }
    function Ed() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _d; a++) {
          var i = Hv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function zv(e) {
      te !== null && typeof te.markCommitStarted == "function" && te.markCommitStarted(e);
    }
    function Si() {
      te !== null && typeof te.markCommitStopped == "function" && te.markCommitStopped();
    }
    function Ua(e) {
      te !== null && typeof te.markComponentRenderStarted == "function" && te.markComponentRenderStarted(e);
    }
    function Cl() {
      te !== null && typeof te.markComponentRenderStopped == "function" && te.markComponentRenderStopped();
    }
    function Uv(e) {
      te !== null && typeof te.markComponentPassiveEffectMountStarted == "function" && te.markComponentPassiveEffectMountStarted(e);
    }
    function Qi() {
      te !== null && typeof te.markComponentPassiveEffectMountStopped == "function" && te.markComponentPassiveEffectMountStopped();
    }
    function Rl(e) {
      te !== null && typeof te.markComponentPassiveEffectUnmountStarted == "function" && te.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      te !== null && typeof te.markComponentPassiveEffectUnmountStopped == "function" && te.markComponentPassiveEffectUnmountStopped();
    }
    function Av(e) {
      te !== null && typeof te.markComponentLayoutEffectMountStarted == "function" && te.markComponentLayoutEffectMountStarted(e);
    }
    function xc() {
      te !== null && typeof te.markComponentLayoutEffectMountStopped == "function" && te.markComponentLayoutEffectMountStopped();
    }
    function Cd(e) {
      te !== null && typeof te.markComponentLayoutEffectUnmountStarted == "function" && te.markComponentLayoutEffectUnmountStarted(e);
    }
    function lo() {
      te !== null && typeof te.markComponentLayoutEffectUnmountStopped == "function" && te.markComponentLayoutEffectUnmountStopped();
    }
    function Ei(e, t, a) {
      te !== null && typeof te.markComponentErrored == "function" && te.markComponentErrored(e, t, a);
    }
    function vs(e, t, a) {
      te !== null && typeof te.markComponentSuspended == "function" && te.markComponentSuspended(e, t, a);
    }
    function hs(e) {
      te !== null && typeof te.markLayoutEffectsStarted == "function" && te.markLayoutEffectsStarted(e);
    }
    function su() {
      te !== null && typeof te.markLayoutEffectsStopped == "function" && te.markLayoutEffectsStopped();
    }
    function Rd(e) {
      te !== null && typeof te.markPassiveEffectsStarted == "function" && te.markPassiveEffectsStarted(e);
    }
    function uo() {
      te !== null && typeof te.markPassiveEffectsStopped == "function" && te.markPassiveEffectsStopped();
    }
    function Td(e) {
      te !== null && typeof te.markRenderStarted == "function" && te.markRenderStarted(e);
    }
    function wd() {
      te !== null && typeof te.markRenderYielded == "function" && te.markRenderYielded();
    }
    function pn() {
      te !== null && typeof te.markRenderStopped == "function" && te.markRenderStopped();
    }
    function _c(e) {
      te !== null && typeof te.markRenderScheduled == "function" && te.markRenderScheduled(e);
    }
    function xd(e, t) {
      te !== null && typeof te.markForceUpdateScheduled == "function" && te.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      te !== null && typeof te.markStateUpdateScheduled == "function" && te.markStateUpdateScheduled(e, t);
    }
    var _e = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), yt = (
      /*                    */
      2
    ), qe = (
      /*               */
      8
    ), qt = (
      /*              */
      16
    ), Bn = Math.clz32 ? Math.clz32 : gs, bc = Math.log, ys = Math.LN2;
    function gs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (bc(t) / ys | 0) | 0;
    }
    var _d = 31, V = (
      /*                        */
      0
    ), An = (
      /*                          */
      0
    ), ze = (
      /*                        */
      1
    ), Tl = (
      /*    */
      2
    ), Kn = (
      /*             */
      4
    ), Zn = (
      /*            */
      8
    ), Zr = (
      /*                     */
      16
    ), cu = (
      /*                */
      32
    ), wl = (
      /*                       */
      4194240
    ), oo = (
      /*                        */
      64
    ), Dc = (
      /*                        */
      128
    ), kc = (
      /*                        */
      256
    ), Oc = (
      /*                        */
      512
    ), Lc = (
      /*                        */
      1024
    ), Mc = (
      /*                        */
      2048
    ), Nc = (
      /*                        */
      4096
    ), zc = (
      /*                        */
      8192
    ), fu = (
      /*                        */
      16384
    ), Uc = (
      /*                       */
      32768
    ), so = (
      /*                       */
      65536
    ), co = (
      /*                       */
      131072
    ), Ac = (
      /*                       */
      262144
    ), Ss = (
      /*                       */
      524288
    ), Fc = (
      /*                       */
      1048576
    ), jc = (
      /*                       */
      2097152
    ), Es = (
      /*                            */
      130023424
    ), du = (
      /*                             */
      4194304
    ), Cs = (
      /*                             */
      8388608
    ), Hc = (
      /*                             */
      16777216
    ), Vc = (
      /*                             */
      33554432
    ), Pc = (
      /*                             */
      67108864
    ), Fv = du, fo = (
      /*          */
      134217728
    ), jv = (
      /*                          */
      268435455
    ), Rs = (
      /*               */
      268435456
    ), xl = (
      /*                        */
      536870912
    ), ha = (
      /*                   */
      1073741824
    );
    function Hv(e) {
      {
        if (e & ze)
          return "Sync";
        if (e & Tl)
          return "InputContinuousHydration";
        if (e & Kn)
          return "InputContinuous";
        if (e & Zn)
          return "DefaultHydration";
        if (e & Zr)
          return "Default";
        if (e & cu)
          return "TransitionHydration";
        if (e & wl)
          return "Transition";
        if (e & Es)
          return "Retry";
        if (e & fo)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & xl)
          return "Idle";
        if (e & ha)
          return "Offscreen";
      }
    }
    var Bt = -1, Bc = oo, $c = du;
    function Ts(e) {
      switch (pu(e)) {
        case ze:
          return ze;
        case Tl:
          return Tl;
        case Kn:
          return Kn;
        case Zn:
          return Zn;
        case Zr:
          return Zr;
        case cu:
          return cu;
        case oo:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case fu:
        case Uc:
        case so:
        case co:
        case Ac:
        case Ss:
        case Fc:
        case jc:
          return e & wl;
        case du:
        case Cs:
        case Hc:
        case Vc:
        case Pc:
          return e & Es;
        case fo:
          return fo;
        case Rs:
          return Rs;
        case xl:
          return xl;
        case ha:
          return ha;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Jr(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & jv;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = Ts(p);
        else {
          var v = f & s;
          v !== V && (i = Ts(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = Ts(y) : s !== V && (i = Ts(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = pu(i), _ = pu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Zr && (_ & wl) !== V
        )
          return t;
      }
      (i & Kn) !== V && (i |= a & Zr);
      var w = e.entangledLanes;
      if (w !== V)
        for (var N = e.entanglements, U = i & w; U > 0; ) {
          var j = Tn(U), ae = 1 << j;
          i |= N[j], U &= ~ae;
        }
      return i;
    }
    function bd(e, t) {
      for (var a = e.eventTimes, i = Bt; t > 0; ) {
        var u = Tn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Yc(e, t) {
      switch (e) {
        case ze:
        case Tl:
        case Kn:
          return t + 250;
        case Zn:
        case Zr:
        case cu:
        case oo:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case fu:
        case Uc:
        case so:
        case co:
        case Ac:
        case Ss:
        case Fc:
        case jc:
          return t + 5e3;
        case du:
        case Cs:
        case Hc:
        case Vc:
        case Pc:
          return Bt;
        case fo:
        case Rs:
        case xl:
        case ha:
          return Bt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Bt;
      }
    }
    function Vv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p, y = s[p];
        y === Bt ? ((v & i) === V || (v & u) !== V) && (s[p] = Yc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Pv(e) {
      return Ts(e.pendingLanes);
    }
    function Ic(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== V ? t : t & ha ? ha : V;
    }
    function Dd(e) {
      return (e & ze) !== V;
    }
    function _l(e) {
      return (e & jv) !== V;
    }
    function Qc(e) {
      return (e & Es) === e;
    }
    function kd(e) {
      var t = ze | Kn | Zr;
      return (e & t) === V;
    }
    function ry(e) {
      return (e & wl) === e;
    }
    function ws(e, t) {
      var a = Tl | Kn | Zn | Zr;
      return (t & a) !== V;
    }
    function Bv(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function Od(e) {
      return (e & wl) !== V;
    }
    function Ld() {
      var e = Bc;
      return Bc <<= 1, (Bc & wl) === V && (Bc = oo), e;
    }
    function $v() {
      var e = $c;
      return $c <<= 1, ($c & Es) === V && ($c = du), e;
    }
    function pu(e) {
      return e & -e;
    }
    function Jn(e) {
      return pu(e);
    }
    function Tn(e) {
      return 31 - Bn(e);
    }
    function Wc(e) {
      return Tn(e);
    }
    function ea(e, t) {
      return (e & t) !== V;
    }
    function vu(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function Gc(e, t) {
      return e & t;
    }
    function ay(e) {
      return e;
    }
    function Md(e, t) {
      return e !== An && e < t ? e : t;
    }
    function qc(e) {
      for (var t = [], a = 0; a < _d; a++)
        t.push(e);
      return t;
    }
    function po(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = Wc(t);
      i[u] = a;
    }
    function Nd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Tn(i), s = 1 << u;
        a[u] = Bt, i &= ~s;
      }
    }
    function Xc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Yv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Tn(f), v = 1 << p;
        i[p] = V, u[p] = Bt, s[p] = Bt, f &= ~v;
      }
    }
    function _s(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Tn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Kc(e, t) {
      var a = pu(t), i;
      switch (a) {
        case Kn:
          i = Tl;
          break;
        case Zr:
          i = Zn;
          break;
        case oo:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case fu:
        case Uc:
        case so:
        case co:
        case Ac:
        case Ss:
        case Fc:
        case jc:
        case du:
        case Cs:
        case Hc:
        case Vc:
        case Pc:
          i = cu;
          break;
        case xl:
          i = Rs;
          break;
        default:
          i = An;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== An ? An : i;
    }
    function Iv(e, t, a) {
      if (wr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Wc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function zd(e, t) {
      if (wr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Wc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Zc(e, t) {
      return null;
    }
    var ta = ze, Aa = Kn, or = Zr, Jc = xl, vo = An;
    function ma() {
      return vo;
    }
    function $n(e) {
      vo = e;
    }
    function Qv(e, t) {
      var a = vo;
      try {
        return vo = e, t();
      } finally {
        vo = a;
      }
    }
    function bs(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function xr(e, t) {
      return e > t ? e : t;
    }
    function Ud(e, t) {
      return e !== 0 && e < t;
    }
    function Wv(e) {
      var t = pu(e);
      return Ud(ta, t) ? Ud(Aa, t) ? _l(t) ? or : Jc : Aa : ta;
    }
    function hu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var sr;
    function iy(e) {
      sr = e;
    }
    function ve(e) {
      sr(e);
    }
    var bl;
    function Ad(e) {
      bl = e;
    }
    var Fd;
    function ly(e) {
      Fd = e;
    }
    var ho;
    function ef(e) {
      ho = e;
    }
    var tf;
    function Gv(e) {
      tf = e;
    }
    var nf = !1, Ds = [], Ci = null, Ri = null, vn = null, Nr = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Wi = [], qv = [
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
    function ri(e) {
      return qv.indexOf(e) > -1;
    }
    function Xv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function ai(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ci = null;
          break;
        case "dragenter":
        case "dragleave":
          Ri = null;
          break;
        case "mouseover":
        case "mouseout":
          vn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Nr.delete(a);
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
    function ks(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Xv(t, a, i, u, s);
        if (t !== null) {
          var p = _o(t);
          p !== null && bl(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Kv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ci = ks(Ci, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Ri = ks(Ri, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return vn = ks(vn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Nr.set(y, ks(Nr.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return Fa.set(_, ks(Fa.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function jd(e) {
      var t = Ps(e.target);
      if (t !== null) {
        var a = Mr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var u = gi(a);
            if (u !== null) {
              e.blockedOn = u, tf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === Z) {
            var s = a.stateNode;
            if (hu(s)) {
              e.blockedOn = El(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zv(e) {
      for (var t = ho(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Wi.length && Ud(t, Wi[i].priority); i++)
        ;
      Wi.splice(i, 0, a), i === 0 && jd(a);
    }
    function Os(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ls(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Jm(s), u.target.dispatchEvent(s), rs();
        } else {
          var f = _o(i);
          return f !== null && bl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Jv(e, t, a) {
      Os(e) && a.delete(t);
    }
    function rf() {
      nf = !1, Ci !== null && Os(Ci) && (Ci = null), Ri !== null && Os(Ri) && (Ri = null), vn !== null && Os(vn) && (vn = null), Nr.forEach(Jv), Fa.forEach(Jv);
    }
    function mu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, nf || (nf = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, rf)));
    }
    function _r(e) {
      if (Ds.length > 0) {
        mu(Ds[0], e);
        for (var t = 1; t < Ds.length; t++) {
          var a = Ds[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ci !== null && mu(Ci, e), Ri !== null && mu(Ri, e), vn !== null && mu(vn, e);
      var i = function(p) {
        return mu(p, e);
      };
      Nr.forEach(i), Fa.forEach(i);
      for (var u = 0; u < Wi.length; u++) {
        var s = Wi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Wi.length > 0; ) {
        var f = Wi[0];
        if (f.blockedOn !== null)
          break;
        jd(f), f.blockedOn === null && Wi.shift();
      }
    }
    var ft = wt.ReactCurrentBatchConfig, Fn = !0;
    function wn(e) {
      Fn = !!e;
    }
    function cr() {
      return Fn;
    }
    function ya(e, t, a) {
      var i = yo(t), u;
      switch (i) {
        case ta:
          u = mo;
          break;
        case Aa:
          u = Yn;
          break;
        case or:
        default:
          u = yu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function mo(e, t, a, i) {
      var u = ma(), s = ft.transition;
      ft.transition = null;
      try {
        $n(ta), yu(e, t, a, i);
      } finally {
        $n(u), ft.transition = s;
      }
    }
    function Yn(e, t, a, i) {
      var u = ma(), s = ft.transition;
      ft.transition = null;
      try {
        $n(Aa), yu(e, t, a, i);
      } finally {
        $n(u), ft.transition = s;
      }
    }
    function yu(e, t, a, i) {
      Fn && gu(e, t, a, i);
    }
    function gu(e, t, a, i) {
      var u = Ls(e, t, a, i);
      if (u === null) {
        wy(e, t, i, Su, a), ai(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (ai(e, i), t & eu && ri(e)) {
        for (; u !== null; ) {
          var s = _o(u);
          s !== null && ve(s);
          var f = Ls(e, t, a, i);
          if (f === null && wy(e, t, i, Su, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var Su = null;
    function Ls(e, t, a, i) {
      Su = null;
      var u = vc(i), s = Ps(u);
      if (s !== null) {
        var f = Mr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ce) {
            var v = gi(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === Z) {
            var y = f.stateNode;
            if (hu(y))
              return El(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Su = s, null;
    }
    function yo(e) {
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
          return ta;
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
          return Aa;
        case "message": {
          var t = Lv();
          switch (t) {
            case Ii:
              return ta;
            case ds:
              return Aa;
            case uu:
            case ps:
              return or;
            case ao:
              return Jc;
            default:
              return or;
          }
        }
        default:
          return or;
      }
    }
    function na(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Hd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function go(e, t, a, i) {
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
    var Dl = null, Ms = null, ja = null;
    function af(e) {
      return Dl = e, Ms = So(), !0;
    }
    function kl() {
      Dl = null, Ms = null, ja = null;
    }
    function Ns() {
      if (ja)
        return ja;
      var e, t = Ms, a = t.length, i, u = So(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return ja = u.slice(e, p), ja;
    }
    function So() {
      return "value" in Dl ? Dl.value : Dl.textContent;
    }
    function Eo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Eu() {
      return !0;
    }
    function zs() {
      return !1;
    }
    function en(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Eu : this.isDefaultPrevented = zs, this.isPropagationStopped = zs, this;
      }
      return Ge(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Eu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Eu);
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
        isPersistent: Eu
      }), t;
    }
    var ga = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Sa = en(ga), er = Ge({}, ga, {
      view: 0,
      detail: 0
    }), eh = en(er), Us, As, Fs;
    function Ol(e) {
      e !== Fs && (Fs && e.type === "mousemove" ? (Us = e.screenX - Fs.screenX, As = e.screenY - Fs.screenY) : (Us = 0, As = 0), Fs = e);
    }
    var js = Ge({}, er, {
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
      getModifierState: $d,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ol(e), Us);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : As;
      }
    }), lf = en(js), Cu = Ge({}, js, {
      dataTransfer: 0
    }), Vd = en(Cu), Ru = Ge({}, er, {
      relatedTarget: 0
    }), uf = en(Ru), th = Ge({}, ga, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pd = en(th), of = Ge({}, ga, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = en(of), oy = Ge({}, ga, {
      data: 0
    }), Bd = en(oy), nh = Bd, Tu = {
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
    function Co(e) {
      if (e.key) {
        var t = Tu[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Eo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? sy[e.keyCode] || "Unidentified" : "";
    }
    var rh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function gn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = rh[e];
      return i ? !!a[i] : !1;
    }
    function $d(e) {
      return gn;
    }
    var ah = Ge({}, er, {
      key: Co,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $d,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Eo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Eo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cy = en(ah), fy = Ge({}, js, {
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
    }), Yd = en(fy), ih = Ge({}, er, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $d
    }), dy = en(ih), Ha = Ge({}, ga, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Id = en(Ha), py = Ge({}, js, {
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
    }), Ll = en(py), sf = [9, 13, 27, 32], Ml = 229, Ro = Qn && "CompositionEvent" in window, wu = null;
    Qn && "documentMode" in document && (wu = document.documentMode);
    var Qd = Qn && "TextEvent" in window && !wu, lh = Qn && (!Ro || wu && wu > 8 && wu <= 11), cf = 32, uh = String.fromCharCode(cf);
    function oh() {
      Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Vt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Vt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Wd = !1;
    function ff(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function df(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function sh(e, t) {
      return e === "keydown" && t.keyCode === Ml;
    }
    function pf(e, t) {
      switch (e) {
        case "keyup":
          return sf.indexOf(t.keyCode) !== -1;
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
    function vf(e) {
      return e.locale === "ko";
    }
    var qi = !1;
    function qd(e, t, a, i, u) {
      var s, f;
      if (Ro ? s = df(t) : qi ? pf(t, i) && (s = "onCompositionEnd") : sh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      lh && !vf(i) && (!qi && s === "onCompositionStart" ? qi = af(u) : s === "onCompositionEnd" && qi && (f = Ns()));
      var p = vh(a, s);
      if (p.length > 0) {
        var v = new Bd(s, t, null, i, u);
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
    function hf(e, t) {
      switch (e) {
        case "compositionend":
          return Gd(t);
        case "keypress":
          var a = t.which;
          return a !== cf ? null : (Wd = !0, uh);
        case "textInput":
          var i = t.data;
          return i === uh && Wd ? null : i;
        default:
          return null;
      }
    }
    function ch(e, t) {
      if (qi) {
        if (e === "compositionend" || !Ro && pf(e, t)) {
          var a = Ns();
          return kl(), qi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ff(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return lh && !vf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vy(e, t, a, i, u) {
      var s;
      if (Qd ? s = hf(t, i) : s = ch(t, i), !s)
        return null;
      var f = vh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new nh("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function mf(e, t, a, i, u, s, f) {
      qd(e, t, a, i, u), vy(e, t, a, i, u);
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
    function To(e) {
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
      if (!Qn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function yf() {
      Vt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      ld(i);
      var u = vh(t, "onChange");
      if (u.length > 0) {
        var s = new Sa("onChange", "change", null, a, i);
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
      n(t, l, e, vc(e)), xv(d, t);
    }
    function d(e) {
      _E(e, 0);
    }
    function m(e) {
      var t = Tf(e);
      if (fl(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    Qn && (T = my("input") && (!document.documentMode || document.documentMode > 9));
    function z(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", W);
    }
    function Q() {
      r && (r.detachEvent("onpropertychange", W), r = null, l = null);
    }
    function W(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function I(e, t, a) {
      e === "focusin" ? (Q(), z(t, a)) : e === "focusout" && Q();
    }
    function ce(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ye(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ee(e, t) {
      if (e === "click")
        return m(t);
    }
    function xn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || he(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? Tf(a) : window, v, y;
      if (o(p) ? v = E : To(p) ? T ? v = xn : (v = ce, y = I) : ye(p) && (v = Ee), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      bn("onMouseEnter", ["mouseout", "mouseover"]), bn("onMouseLeave", ["mouseout", "mouseover"]), bn("onPointerEnter", ["pointerout", "pointerover"]), bn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function q(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !ey(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Ps(y) || sp(y)))
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
        var w, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, N = U ? Ps(U) : null, N !== null) {
            var j = Mr(N);
            (N !== j || N.tag !== le && N.tag !== we) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var ae = lf, Le = "onMouseLeave", Te = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = Yd, Le = "onPointerLeave", Te = "onPointerEnter", Tt = "pointer");
          var vt = w == null ? g : Tf(w), k = N == null ? g : Tf(N), H = new ae(Le, Tt + "leave", w, i, u);
          H.target = vt, H.relatedTarget = k;
          var O = null, G = Ps(u);
          if (G === a) {
            var de = new ae(Te, Tt + "enter", N, i, u);
            de.target = k, de.relatedTarget = vt, O = de;
          }
          DT(e, H, O, w, N);
        }
      }
    }
    function Re(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ge = typeof Object.is == "function" ? Object.is : Re;
    function ke(e, t) {
      if (ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!rr.call(t, s) || !ge(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function je(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function tr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function _t(e, t) {
      for (var a = je(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Pi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = je(tr(a));
      }
    }
    function Nl(e) {
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
        for (var w = null; g === t && (a === 0 || g.nodeType === Pi) && (f = s + a), g === i && (u === 0 || g.nodeType === Pi) && (p = s + u), g.nodeType === Pi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          _ = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function sT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = _t(e, f), g = _t(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function vE(e) {
      return e && e.nodeType === Pi;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vE(e) ? !1 : vE(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = ji(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = ji(e.document);
      }
      return t;
    }
    function gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && gy(a) && hT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Gr && u.push({
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
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Nl(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : sT(e, t);
    }
    var mT = Qn && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      Vt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var gf = null, Sy = null, Xd = null, Ey = !1;
    function gT(e) {
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
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Bi ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = ST(a);
      if (!(Ey || gf == null || gf !== ji(i))) {
        var u = gT(gf);
        if (!Xd || !ke(Xd, u)) {
          Xd = u;
          var s = vh(Sy, "onSelect");
          if (s.length > 0) {
            var f = new Sa("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = gf;
          }
        }
      }
    }
    function ET(e, t, a, i, u, s, f) {
      var p = a ? Tf(a) : window;
      switch (t) {
        case "focusin":
          (To(p) || p.contentEditable === "true") && (gf = p, Sy = a, Xd = null);
          break;
        case "focusout":
          gf = null, Sy = null, Xd = null;
          break;
        case "mousedown":
          Ey = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ey = !1, yE(e, i, u);
          break;
        case "selectionchange":
          if (mT)
            break;
        case "keydown":
        case "keyup":
          yE(e, i, u);
      }
    }
    function fh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Sf = {
      animationend: fh("Animation", "AnimationEnd"),
      animationiteration: fh("Animation", "AnimationIteration"),
      animationstart: fh("Animation", "AnimationStart"),
      transitionend: fh("Transition", "TransitionEnd")
    }, Cy = {}, gE = {};
    Qn && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete Sf.animationend.animation, delete Sf.animationiteration.animation, delete Sf.animationstart.animation), "TransitionEvent" in window || delete Sf.transitionend.transition);
    function dh(e) {
      if (Cy[e])
        return Cy[e];
      if (!Sf[e])
        return e;
      var t = Sf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return Cy[e] = t[a];
      return e;
    }
    var SE = dh("animationend"), EE = dh("animationiteration"), CE = dh("animationstart"), RE = dh("transitionend"), TE = /* @__PURE__ */ new Map(), wE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function wo(e, t) {
      TE.set(e, t), Vt(t, [e]);
    }
    function CT() {
      for (var e = 0; e < wE.length; e++) {
        var t = wE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        wo(a, "on" + i);
      }
      wo(SE, "onAnimationEnd"), wo(EE, "onAnimationIteration"), wo(CE, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(RE, "onTransitionEnd");
    }
    function RT(e, t, a, i, u, s, f) {
      var p = TE.get(t);
      if (p !== void 0) {
        var v = Sa, y = t;
        switch (t) {
          case "keypress":
            if (Eo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = cy;
            break;
          case "focusin":
            y = "focus", v = uf;
            break;
          case "focusout":
            y = "blur", v = uf;
            break;
          case "beforeblur":
          case "afterblur":
            v = uf;
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
            v = lf;
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
          case SE:
          case EE:
          case CE:
            v = Pd;
            break;
          case RE:
            v = Id;
            break;
          case "scroll":
            v = eh;
            break;
          case "wheel":
            v = Ll;
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
            v = Yd;
            break;
        }
        var g = (s & eu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = _T(a, p, i.type, g, _);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    CT(), L(), yf(), yT(), oh();
    function TT(e, t, a, i, u, s, f) {
      RT(e, t, a, i, u, s);
      var p = (s & id) === 0;
      p && (q(e, t, a, i, u), x(e, t, a, i, u), ET(e, t, a, i, u), mf(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function xE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, os(i, t, void 0, e), e.currentTarget = null;
    }
    function wT(e, t, a) {
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
          var g = t[y], _ = g.instance, w = g.currentTarget, N = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          xE(e, N, w), i = _;
        }
    }
    function _E(e, t) {
      for (var a = (t & eu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        wT(s, f, a);
      }
      $i();
    }
    function xT(e, t, a, i, u) {
      var s = vc(a), f = [];
      TT(f, e, i, a, s, t), _E(f, t);
    }
    function hn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tw(t), u = kT(e);
      i.has(u) || (bE(t, e, mi, a), i.add(u));
    }
    function Ty(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= eu), bE(a, e, i, t);
    }
    var ph = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[ph]) {
        e[ph] = !0, St.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === Bi ? e : e.ownerDocument;
        t !== null && (t[ph] || (t[ph] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function bE(e, t, a, i, u) {
      var s = ya(e, t, a), f = void 0;
      us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? go(e, t, s, f) : Hd(e, t, s) : f !== void 0 ? Gi(e, t, s, f) : na(e, t, s);
    }
    function DE(e, t) {
      return e === t || e.nodeType === Ln && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if (!(t & ad) && !(t & mi)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === Z || v === Fe) {
              var y = p.stateNode.containerInfo;
              if (DE(y, f))
                break;
              if (v === Fe)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === Z || _ === Fe) {
                    var w = g.stateNode.containerInfo;
                    if (DE(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Ps(y);
                if (N === null)
                  return;
                var U = N.tag;
                if (U === le || U === we) {
                  p = s = N;
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
        return xT(e, t, a, s);
      });
    }
    function Jd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _T(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, N = _.tag;
        if (N === le && w !== null && (g = w, p !== null)) {
          var U = nu(y, p);
          U != null && v.push(Jd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function vh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === le && f !== null) {
          var v = f, y = nu(u, a);
          y != null && i.unshift(Jd(u, y, v));
          var g = nu(u, t);
          g != null && i.push(Jd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ef(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== le);
      return e || null;
    }
    function bT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = Ef(s))
        u++;
      for (var f = 0, p = i; p; p = Ef(p))
        f++;
      for (; u - f > 0; )
        a = Ef(a), u--;
      for (; f - u > 0; )
        i = Ef(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ef(a), i = Ef(i);
      }
      return null;
    }
    function kE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === le && g !== null) {
          var w = g;
          if (u) {
            var N = nu(p, s);
            N != null && f.unshift(Jd(p, N, w));
          } else if (!u) {
            var U = nu(p, s);
            U != null && f.push(Jd(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function DT(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && kE(e, t, i, s, !1), u !== null && a !== null && kE(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, ep = "dangerouslySetInnerHTML", hh = "suppressContentEditableWarning", xo = "suppressHydrationWarning", OE = "autoFocus", Hs = "children", Vs = "style", mh = "__html", xy, yh, tp, LE, gh, ME, NE;
    xy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, yh = function(e, t) {
      Sv(e, t), Ku(e, t), wv(e, t, {
        registrationNameDependencies: Qe,
        possibleRegistrationNames: mt
      });
    }, ME = Qn && !document.documentMode, tp = function(e, t, a) {
      if (!Va) {
        var i = Sh(a), u = Sh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, LE = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, gh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, NE = function(e, t) {
      var a = e.namespaceURI === Ka ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
    function Sh(e) {
      Pn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(LT, "");
    }
    function Eh(e, t, a, i) {
      var u = Sh(t), s = Sh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === Bi ? e : e.ownerDocument;
    }
    function MT() {
    }
    function Ch(e) {
      e.onclick = MT;
    }
    function NT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Vs)
            f && Object.freeze(f), vv(t, f);
          else if (s === ep) {
            var p = f ? f[mh] : void 0;
            p != null && nv(t, p);
          } else if (s === Hs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && pl(t, f);
            } else typeof f == "number" && pl(t, "" + f);
          else s === hh || s === xo || s === OE || (Qe.hasOwnProperty(s) ? f != null && (typeof f != "function" && gh(s, f), s === "onScroll" && hn("scroll", t)) : f != null && fa(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vs ? vv(e, f) : s === ep ? nv(e, f) : s === Hs ? pl(e, f) : fa(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = zE(a), f, p = i;
      if (p === Ka && (p = Zf(e)), p === Ka) {
        if (u = vl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === Ka && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !rr.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return zE(t).createTextNode(e);
    }
    function FT(e, t, a, i) {
      var u = vl(t, a);
      yh(t, a);
      var s;
      switch (t) {
        case "dialog":
          hn("cancel", e), hn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            hn(Kd[f], e);
          s = a;
          break;
        case "source":
          hn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e), s = a;
          break;
        case "details":
          hn("toggle", e), s = a;
          break;
        case "input":
          Yu(e, a), s = La(e, a), hn("invalid", e);
          break;
        case "option":
          Ft(e, a), s = a;
          break;
        case "select":
          qo(e, a), s = Jl(e, a), hn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), s = oc(e, a), hn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (dc(t, s), NT(t, e, i, s, u), t) {
        case "input":
          Oa(e), M(e, a, !1);
          break;
        case "textarea":
          Oa(e), tv(e);
          break;
        case "option":
          Qt(e, a);
          break;
        case "select":
          qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Ch(e);
          break;
      }
    }
    function jT(e, t, a, i, u) {
      yh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = La(e, a), p = La(e, i), s = [];
          break;
        case "select":
          f = Jl(e, a), p = Jl(e, i), s = [];
          break;
        case "textarea":
          f = oc(e, a), p = oc(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Ch(e);
          break;
      }
      dc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Vs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === ep || v === Hs || v === hh || v === xo || v === OE || (Qe.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === Vs)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === ep) {
            var U = w ? w[mh] : void 0, j = N ? N[mh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === Hs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === hh || v === xo || (Qe.hasOwnProperty(v) ? (w != null && (typeof w != "function" && gh(v, w), v === "onScroll" && hn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Za(g, p[Vs]), (s = s || []).push(Vs, g)), s;
    }
    function HT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = vl(a, i), f = vl(a, u);
      switch (zT(e, t, s, f), a) {
        case "input":
          C(e, u);
          break;
        case "textarea":
          ev(e, u);
          break;
        case "select":
          uc(e, u);
          break;
      }
    }
    function VT(e) {
      {
        var t = e.toLowerCase();
        return Gu.hasOwnProperty(t) && Gu[t] || null;
      }
    }
    function PT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = vl(t, a), yh(t, a), t) {
        case "dialog":
          hn("cancel", e), hn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            hn(Kd[y], e);
          break;
        case "source":
          hn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e);
          break;
        case "details":
          hn("toggle", e);
          break;
        case "input":
          Yu(e, a), hn("invalid", e);
          break;
        case "option":
          Ft(e, a);
          break;
        case "select":
          qo(e, a), hn("invalid", e);
          break;
        case "textarea":
          Jp(e, a), hn("invalid", e);
          break;
      }
      dc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
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
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Hs)
            typeof j == "string" ? e.textContent !== j && (a[xo] !== !0 && Eh(e.textContent, j, s, f), N = [Hs, j]) : typeof j == "number" && e.textContent !== "" + j && (a[xo] !== !0 && Eh(e.textContent, j, s, f), N = [Hs, "" + j]);
          else if (Qe.hasOwnProperty(U))
            j != null && (typeof j != "function" && gh(U, j), U === "onScroll" && hn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, Le = tn(U);
            if (a[xo] !== !0) {
              if (!(U === hh || U === xo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === ep) {
                  var Te = e.innerHTML, Tt = j ? j[mh] : void 0;
                  if (Tt != null) {
                    var vt = NE(e, Tt);
                    vt !== Te && tp(U, Te, vt);
                  }
                } else if (U === Vs) {
                  if (v.delete(U), ME) {
                    var k = Km(j);
                    ae = e.getAttribute("style"), k !== ae && tp(U, ae, k);
                  }
                } else if (p)
                  v.delete(U.toLowerCase()), ae = oi(e, U, j), j !== ae && tp(U, ae, j);
                else if (!ln(U, Le, p) && !qn(U, j, Le, p)) {
                  var H = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), ae = Ql(e, U, j, Le);
                  else {
                    var O = i;
                    if (O === Ka && (O = Zf(t)), O === Ka)
                      v.delete(U.toLowerCase());
                    else {
                      var G = VT(U);
                      G !== null && G !== U && (H = !0, v.delete(G)), v.delete(U);
                    }
                    ae = oi(e, U, j);
                  }
                  var de = $;
                  !de && j !== ae && !H && tp(U, ae, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[xo] !== !0 && LE(v), t) {
        case "input":
          Oa(e), M(e, a, !0);
          break;
        case "textarea":
          Oa(e), tv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ch(e);
          break;
      }
      return N;
    }
    function BT(e, t, a) {
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
    function by(e, t) {
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
    function ky(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $T(e, t, a) {
      switch (t) {
        case "input":
          F(e, a);
          return;
        case "textarea":
          Ym(e, a);
          return;
        case "select":
          Xf(e, a);
          return;
      }
    }
    var np = function() {
    }, rp = function() {
    };
    {
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], UE = [
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
      ], IT = UE.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      rp = function(e, t) {
        var a = Ge({}, e || AE), i = {
          tag: t
        };
        return UE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), IT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
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
            return QT.indexOf(t) === -1;
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
      }, GT = function(e, t) {
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
      }, FE = {};
      np = function(e, t, a) {
        a = a || AE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!FE[y]) {
            FE[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Rh = "suppressHydrationWarning", Th = "$", wh = "/$", ap = "$?", ip = "$!", qT = "style", Oy = null, Ly = null;
    function XT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Bi:
        case Xo: {
          t = i === Bi ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : sc(null, "");
          break;
        }
        default: {
          var s = i === Ln ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = sc(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = rp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KT(e, t, a) {
      {
        var i = e, u = sc(i.namespace, t), s = rp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function cD(e) {
      return e;
    }
    function ZT(e) {
      Oy = cr(), Ly = dT();
      var t = null;
      return wn(!1), t;
    }
    function JT(e) {
      pT(Ly), wn(Oy), Oy = null, Ly = null;
    }
    function e1(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (np(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = rp(f.ancestorInfo, e);
          np(null, p, v);
        }
        s = f.namespace;
      }
      var y = UT(e, t, a, s);
      return op(u, y), Hy(y, t), y;
    }
    function t1(e, t) {
      e.appendChild(t);
    }
    function n1(e, t, a, i, u) {
      switch (FT(e, t, a, i), t) {
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
    function r1(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = rp(f.ancestorInfo, t);
          np(null, p, v);
        }
      }
      return jT(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function a1(e, t, a, i) {
      {
        var u = a;
        np(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return op(i, s), s;
    }
    function i1() {
      var e = window.event;
      return e === void 0 ? or : yo(e.type);
    }
    var Ny = typeof setTimeout == "function" ? setTimeout : void 0, l1 = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, jE = typeof Promise == "function" ? Promise : void 0, u1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jE < "u" ? function(e) {
      return jE.resolve(null).then(e).catch(o1);
    } : Ny;
    function o1(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function s1(e, t, a, i) {
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
    function c1(e, t, a, i, u, s) {
      HT(e, t, a, i, u), Hy(e, u);
    }
    function HE(e) {
      pl(e, "");
    }
    function f1(e, t, a) {
      e.nodeValue = a;
    }
    function d1(e, t) {
      e.appendChild(t);
    }
    function p1(e, t) {
      var a;
      e.nodeType === Ln ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Ch(a);
    }
    function v1(e, t, a) {
      e.insertBefore(t, a);
    }
    function h1(e, t, a) {
      e.nodeType === Ln ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function m1(e, t) {
      e.removeChild(t);
    }
    function y1(e, t) {
      e.nodeType === Ln ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Ln) {
          var s = u.data;
          if (s === wh)
            if (i === 0) {
              e.removeChild(u), _r(t);
              return;
            } else
              i--;
          else (s === Th || s === ap || s === ip) && i++;
        }
        a = u;
      } while (a);
      _r(t);
    }
    function g1(e, t) {
      e.nodeType === Ln ? Uy(e.parentNode, t) : e.nodeType === Gr && Uy(e, t), _r(e);
    }
    function S1(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function E1(e) {
      e.nodeValue = "";
    }
    function C1(e, t) {
      e = e;
      var a = t[qT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = fc("display", i);
    }
    function R1(e, t) {
      e.nodeValue = t;
    }
    function T1(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === Bi && e.documentElement && e.removeChild(e.documentElement);
    }
    function w1(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function x1(e, t) {
      return t === "" || e.nodeType !== Pi ? null : e;
    }
    function _1(e) {
      return e.nodeType !== Ln ? null : e;
    }
    function VE(e) {
      return e.data === ap;
    }
    function Ay(e) {
      return e.data === ip;
    }
    function b1(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function D1(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === Pi)
          break;
        if (t === Ln) {
          var a = e.data;
          if (a === Th || a === ip || a === ap)
            break;
          if (a === wh)
            return null;
        }
      }
      return e;
    }
    function lp(e) {
      return xh(e.nextSibling);
    }
    function k1(e) {
      return xh(e.firstChild);
    }
    function O1(e) {
      return xh(e.firstChild);
    }
    function L1(e) {
      return xh(e.nextSibling);
    }
    function M1(e, t, a, i, u, s, f) {
      op(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & lt) !== _e;
      return PT(e, t, a, p, i, y, f);
    }
    function N1(e, t, a, i) {
      return op(a, e), a.mode & lt, BT(e, t);
    }
    function z1(e, t) {
      op(t, e);
    }
    function U1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === wh) {
            if (a === 0)
              return lp(t);
            a--;
          } else (i === Th || i === ip || i === ap) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function PE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ln) {
          var i = t.data;
          if (i === Th || i === ip || i === ap) {
            if (a === 0)
              return t;
            a--;
          } else i === wh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function A1(e) {
      _r(e);
    }
    function F1(e) {
      _r(e);
    }
    function j1(e) {
      return e !== "head" && e !== "body";
    }
    function H1(e, t, a, i) {
      var u = !0;
      Eh(t.nodeValue, a, i, u);
    }
    function V1(e, t, a, i, u, s) {
      if (t[Rh] !== !0) {
        var f = !0;
        Eh(i.nodeValue, u, s, f);
      }
    }
    function P1(e, t) {
      t.nodeType === Gr ? _y(e, t) : t.nodeType === Ln || by(e, t);
    }
    function B1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? _y(a, t) : t.nodeType === Ln || by(a, t));
      }
    }
    function $1(e, t, a, i, u) {
      (u || t[Rh] !== !0) && (i.nodeType === Gr ? _y(a, i) : i.nodeType === Ln || by(a, i));
    }
    function Y1(e, t, a) {
      Dy(e, t);
    }
    function I1(e, t) {
      ky(e, t);
    }
    function Q1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function W1(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function G1(e, t, a, i, u, s) {
      (s || t[Rh] !== !0) && Dy(a, i);
    }
    function q1(e, t, a, i, u) {
      (u || t[Rh] !== !0) && ky(a, i);
    }
    function X1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function K1(e) {
      Zd(e);
    }
    var Cf = Math.random().toString(36).slice(2), Rf = "__reactFiber$" + Cf, Fy = "__reactProps$" + Cf, up = "__reactContainer$" + Cf, jy = "__reactEvents$" + Cf, Z1 = "__reactListeners$" + Cf, J1 = "__reactHandles$" + Cf;
    function ew(e) {
      delete e[Rf], delete e[Fy], delete e[jy], delete e[Z1], delete e[J1];
    }
    function op(e, t) {
      t[Rf] = e;
    }
    function _h(e, t) {
      t[up] = e;
    }
    function BE(e) {
      e[up] = null;
    }
    function sp(e) {
      return !!e[up];
    }
    function Ps(e) {
      var t = e[Rf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[up] || a[Rf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = PE(e); u !== null; ) {
              var s = u[Rf];
              if (s)
                return s;
              u = PE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _o(e) {
      var t = e[Rf] || e[up];
      return t && (t.tag === le || t.tag === we || t.tag === Ce || t.tag === Z) ? t : null;
    }
    function Tf(e) {
      if (e.tag === le || e.tag === we)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function bh(e) {
      return e[Fy] || null;
    }
    function Hy(e, t) {
      e[Fy] = t;
    }
    function tw(e) {
      var t = e[jy];
      return t === void 0 && (t = e[jy] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, YE = wt.ReactDebugCurrentFrame;
    function Dh(e) {
      if (e) {
        var t = e._owner, a = Yo(e.type, e._source, t ? t.type : null);
        YE.setExtraStackFrame(a);
      } else
        YE.setExtraStackFrame(null);
    }
    function Xi(e, t, a, i, u) {
      {
        var s = Function.call.bind(rr);
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
            p && !(p instanceof Error) && (Dh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Dh(null)), p instanceof Error && !(p.message in $E) && ($E[p.message] = !0, Dh(u), S("Failed %s type: %s", a, p.message), Dh(null));
          }
      }
    }
    var Vy = [], kh;
    kh = [];
    var xu = -1;
    function bo(e) {
      return {
        current: e
      };
    }
    function ra(e, t) {
      if (xu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== kh[xu] && S("Unexpected Fiber popped."), e.current = Vy[xu], Vy[xu] = null, kh[xu] = null, xu--;
    }
    function aa(e, t, a) {
      xu++, Vy[xu] = e.current, kh[xu] = a, e.current = t;
    }
    var Py;
    Py = {};
    var ii = {};
    Object.freeze(ii);
    var _u = bo(ii), zl = bo(!1), By = ii;
    function wf(e, t, a) {
      return a && Ul(t) ? By : _u.current;
    }
    function IE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function xf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ii;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Pe(e) || "Unknown";
          Xi(i, s, "context", p);
        }
        return u && IE(e, t, s), s;
      }
    }
    function Oh() {
      return zl.current;
    }
    function Ul(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lh(e) {
      ra(zl, e), ra(_u, e);
    }
    function $y(e) {
      ra(zl, e), ra(_u, e);
    }
    function QE(e, t, a) {
      {
        if (_u.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        aa(_u, t, e), aa(zl, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Pe(e) || "Unknown";
            Py[s] || (Py[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Pe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Pe(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return Ge({}, a, f);
      }
    }
    function Mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return By = _u.current, aa(_u, a, e), aa(zl, zl.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, ra(zl, e), ra(_u, e), aa(_u, u, e), aa(zl, a, e);
        } else
          ra(zl, e), aa(zl, a, e);
      }
    }
    function nw(e) {
      {
        if (!kv(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Z:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (Ul(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Do = 0, Nh = 1, bu = null, Yy = !1, Iy = !1;
    function qE(e) {
      bu === null ? bu = [e] : bu.push(e);
    }
    function rw(e) {
      Yy = !0, qE(e);
    }
    function XE() {
      Yy && ko();
    }
    function ko() {
      if (!Iy && bu !== null) {
        Iy = !0;
        var e = 0, t = ma();
        try {
          var a = !0, i = bu;
          for ($n(ta); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          bu = null, Yy = !1;
        } catch (s) {
          throw bu !== null && (bu = bu.slice(e + 1)), pd(Ii, ko), s;
        } finally {
          $n(t), Iy = !1;
        }
      }
      return null;
    }
    var _f = [], bf = 0, zh = null, Uh = 0, Ti = [], wi = 0, Bs = null, Du = 1, ku = "";
    function aw(e) {
      return Ys(), (e.flags & cs) !== xe;
    }
    function iw(e) {
      return Ys(), Uh;
    }
    function lw() {
      var e = ku, t = Du, a = t & ~uw(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Ys(), _f[bf++] = Uh, _f[bf++] = zh, zh = e, Uh = t;
    }
    function KE(e, t, a) {
      Ys(), Ti[wi++] = Du, Ti[wi++] = ku, Ti[wi++] = Bs, Bs = e;
      var i = Du, u = ku, s = Ah(i) - 1, f = i & ~(1 << s), p = a + 1, v = Ah(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, N = s - y, U = Ah(t) + N, j = p << N, ae = j | w, Le = _ + u;
        Du = 1 << U | ae, ku = Le;
      } else {
        var Te = p << s, Tt = Te | f, vt = u;
        Du = 1 << v | Tt, ku = vt;
      }
    }
    function Qy(e) {
      Ys();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), KE(e, a, i);
      }
    }
    function Ah(e) {
      return 32 - Bn(e);
    }
    function uw(e) {
      return 1 << Ah(e) - 1;
    }
    function Wy(e) {
      for (; e === zh; )
        zh = _f[--bf], _f[bf] = null, Uh = _f[--bf], _f[bf] = null;
      for (; e === Bs; )
        Bs = Ti[--wi], Ti[wi] = null, ku = Ti[--wi], Ti[wi] = null, Du = Ti[--wi], Ti[wi] = null;
    }
    function ow() {
      return Ys(), Bs !== null ? {
        id: Du,
        overflow: ku
      } : null;
    }
    function sw(e, t) {
      Ys(), Ti[wi++] = Du, Ti[wi++] = ku, Ti[wi++] = Bs, Du = t.id, ku = t.overflow, Bs = e;
    }
    function Ys() {
      Ur() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var zr = null, xi = null, Ki = !1, Is = !1, Oo = null;
    function cw() {
      Ki && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ZE() {
      Is = !0;
    }
    function fw() {
      return Is;
    }
    function dw(e) {
      var t = e.stateNode.containerInfo;
      return xi = O1(t), zr = e, Ki = !0, Oo = null, Is = !1, !0;
    }
    function pw(e, t, a) {
      return xi = L1(t), zr = e, Ki = !0, Oo = null, Is = !1, a !== null && sw(e, a), !0;
    }
    function JE(e, t) {
      switch (e.tag) {
        case Z: {
          P1(e.stateNode.containerInfo, t);
          break;
        }
        case le: {
          var a = (e.mode & lt) !== _e;
          $1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && B1(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      JE(e, t);
      var a = yb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= qr) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (Is)
          return;
        switch (e.tag) {
          case Z: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case le:
                var i = t.type;
                t.pendingProps, Y1(a, i);
                break;
              case we:
                var u = t.pendingProps;
                I1(a, u);
                break;
            }
            break;
          }
          case le: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case le: {
                var v = t.type, y = t.pendingProps, g = (e.mode & lt) !== _e;
                G1(
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
              case we: {
                var _ = t.pendingProps, w = (e.mode & lt) !== _e;
                q1(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null) switch (t.tag) {
              case le:
                var j = t.type;
                t.pendingProps, Q1(U, j);
                break;
              case we:
                var ae = t.pendingProps;
                W1(U, ae);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function tC(e, t) {
      t.flags = t.flags & -4097 | Mn, Gy(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case le: {
          var a = e.type;
          e.pendingProps;
          var i = w1(t, a);
          return i !== null ? (e.stateNode = i, zr = e, xi = k1(i), !0) : !1;
        }
        case we: {
          var u = e.pendingProps, s = x1(t, u);
          return s !== null ? (e.stateNode = s, zr = e, xi = null, !0) : !1;
        }
        case Ce: {
          var f = _1(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ow(),
              retryLane: ha
            };
            e.memoizedState = p;
            var v = gb(f);
            return v.return = e, e.child = v, zr = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qy(e) {
      return (e.mode & lt) !== _e && (e.flags & it) === xe;
    }
    function Xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ky(e) {
      if (Ki) {
        var t = xi;
        if (!t) {
          qy(e) && (Gy(zr, e), Xy()), tC(zr, e), Ki = !1, zr = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          qy(e) && (Gy(zr, e), Xy()), t = lp(a);
          var i = zr;
          if (!t || !nC(e, t)) {
            tC(zr, e), Ki = !1, zr = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function vw(e, t, a) {
      var i = e.stateNode, u = !Is, s = M1(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = N1(t, a, e);
      if (i) {
        var u = zr;
        if (u !== null)
          switch (u.tag) {
            case Z: {
              var s = u.stateNode.containerInfo, f = (u.mode & lt) !== _e;
              H1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case le: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & lt) !== _e;
              V1(
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
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      z1(a, e);
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return U1(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== le && t.tag !== Z && t.tag !== Ce; )
        t = t.return;
      zr = t;
    }
    function Fh(e) {
      if (e !== zr)
        return !1;
      if (!Ki)
        return rC(e), Ki = !0, !1;
      if (e.tag !== Z && (e.tag !== le || j1(e.type) && !My(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (qy(e))
            aC(e), Xy();
          else
            for (; t; )
              eC(e, t), t = lp(t);
      }
      return rC(e), e.tag === Ce ? xi = yw(e) : xi = zr ? lp(e.stateNode) : null, !0;
    }
    function gw() {
      return Ki && xi !== null;
    }
    function aC(e) {
      for (var t = xi; t; )
        JE(e, t), t = lp(t);
    }
    function Df() {
      zr = null, xi = null, Ki = !1, Is = !1;
    }
    function iC() {
      Oo !== null && (ZR(Oo), Oo = null);
    }
    function Ur() {
      return Ki;
    }
    function Zy(e) {
      Oo === null ? Oo = [e] : Oo.push(e);
    }
    var Sw = wt.ReactCurrentBatchConfig, Ew = null;
    function Cw() {
      return Sw.transition;
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
      var Rw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & qe && (t = a), a = a.return;
        return t;
      }, Qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], Ws = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ws.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillMount == "function" && fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillReceiveProps == "function" && pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vp.push(e), e.mode & qe && typeof t.UNSAFE_componentWillUpdate == "function" && hp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(w) {
          e.add(Pe(w) || "Component"), Ws.add(w.type);
        }), cp = []);
        var t = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          t.add(Pe(w) || "Component"), Ws.add(w.type);
        }), fp = []);
        var a = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          a.add(Pe(w) || "Component"), Ws.add(w.type);
        }), dp = []);
        var i = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          i.add(Pe(w) || "Component"), Ws.add(w.type);
        }), pp = []);
        var u = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          u.add(Pe(w) || "Component"), Ws.add(w.type);
        }), vp = []);
        var s = /* @__PURE__ */ new Set();
        if (hp.length > 0 && (hp.forEach(function(w) {
          s.add(Pe(w) || "Component"), Ws.add(w.type);
        }), hp = []), t.size > 0) {
          var f = Qs(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Qs(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Qs(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Qs(e);
          xt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Qs(a);
          xt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Qs(u);
          xt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var jh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = Rw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lC.has(e.type)) {
          var i = jh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], jh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        jh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Pe(s) || "Component"), lC.add(s.type);
            });
            var u = Qs(i);
            try {
              It(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              mn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        cp = [], fp = [], dp = [], pp = [], vp = [], hp = [], jh = /* @__PURE__ */ new Map();
      };
    }
    var Jy, eg, tg, ng, rg, uC = function(e, t) {
    };
    Jy = !1, eg = !1, tg = {}, ng = {}, rg = {}, uC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Pe(t) || "Component";
        ng[a] || (ng[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Tw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function mp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & qe || De) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== pe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Tw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Pe(e) || "Component";
          tg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Wa(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            _ === null ? delete w[y] : w[y] = _;
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
    function Hh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Vh(e) {
      {
        var t = Pe(e) || "Component";
        if (rg[t])
          return;
        rg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function oC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function sC(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= qr) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), G = H; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(k, H) {
        var O = nc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= cs, H;
        var G = k.alternate;
        if (G !== null) {
          var de = G.index;
          return de < H ? (k.flags |= Mn, H) : de;
        } else
          return k.flags |= Mn, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= Mn), k;
      }
      function p(k, H, O, G) {
        if (H === null || H.tag !== we) {
          var de = ZS(O, k.mode, G);
          return de.return = k, de;
        } else {
          var ue = u(H, O);
          return ue.return = k, ue;
        }
      }
      function v(k, H, O, G) {
        var de = O.type;
        if (de === Yr)
          return g(k, H, O.props.children, G, O.key);
        if (H !== null && (H.elementType === de || // Keep this check inline so it only runs on the false path:
        v0(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof de == "object" && de !== null && de.$$typeof === Ye && oC(de) === H.type)) {
          var ue = u(H, O.props);
          return ue.ref = mp(k, H, O), ue.return = k, ue._debugSource = O._source, ue._debugOwner = O._owner, ue;
        }
        var Ae = KS(O, k.mode, G);
        return Ae.ref = mp(k, H, O), Ae.return = k, Ae;
      }
      function y(k, H, O, G) {
        if (H === null || H.tag !== Fe || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var de = JS(O, k.mode, G);
          return de.return = k, de;
        } else {
          var ue = u(H, O.children || []);
          return ue.return = k, ue;
        }
      }
      function g(k, H, O, G, de) {
        if (H === null || H.tag !== ut) {
          var ue = Po(O, k.mode, G, de);
          return ue.return = k, ue;
        } else {
          var Ae = u(H, O);
          return Ae.return = k, Ae;
        }
      }
      function _(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var G = ZS("" + H, k.mode, O);
          return G.return = k, G;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case ir: {
              var de = KS(H, k.mode, O);
              return de.ref = mp(k, null, H), de.return = k, de;
            }
            case da: {
              var ue = JS(H, k.mode, O);
              return ue.return = k, ue;
            }
            case Ye: {
              var Ae = H._payload, We = H._init;
              return _(k, We(Ae), O);
            }
          }
          if (Xe(H) || dn(H)) {
            var Kt = Po(H, k.mode, O, null);
            return Kt.return = k, Kt;
          }
          Hh(k, H);
        }
        return typeof H == "function" && Vh(k), null;
      }
      function w(k, H, O, G) {
        var de = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return de !== null ? null : p(k, H, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return O.key === de ? v(k, H, O, G) : null;
            case da:
              return O.key === de ? y(k, H, O, G) : null;
            case Ye: {
              var ue = O._payload, Ae = O._init;
              return w(k, H, Ae(ue), G);
            }
          }
          if (Xe(O) || dn(O))
            return de !== null ? null : g(k, H, O, G, null);
          Hh(k, O);
        }
        return typeof O == "function" && Vh(k), null;
      }
      function N(k, H, O, G, de) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var ue = k.get(O) || null;
          return p(H, ue, "" + G, de);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case ir: {
              var Ae = k.get(G.key === null ? O : G.key) || null;
              return v(H, Ae, G, de);
            }
            case da: {
              var We = k.get(G.key === null ? O : G.key) || null;
              return y(H, We, G, de);
            }
            case Ye:
              var Kt = G._payload, Dt = G._init;
              return N(k, H, O, Dt(Kt), de);
          }
          if (Xe(G) || dn(G)) {
            var In = k.get(O) || null;
            return g(H, In, G, de, null);
          }
          Hh(H, G);
        }
        return typeof G == "function" && Vh(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case ir:
            case da:
              uC(k, O);
              var G = k.key;
              if (typeof G != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(G);
                break;
              }
              if (!H.has(G)) {
                H.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case Ye:
              var de = k._payload, ue = k._init;
              U(ue(de), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, G) {
        for (var de = null, ue = 0; ue < O.length; ue++) {
          var Ae = O[ue];
          de = U(Ae, de, k);
        }
        for (var We = null, Kt = null, Dt = H, In = 0, kt = 0, jn = null; Dt !== null && kt < O.length; kt++) {
          Dt.index > kt ? (jn = Dt, Dt = null) : jn = Dt.sibling;
          var la = w(k, Dt, O[kt], G);
          if (la === null) {
            Dt === null && (Dt = jn);
            break;
          }
          e && Dt && la.alternate === null && t(k, Dt), In = s(la, In, kt), Kt === null ? We = la : Kt.sibling = la, Kt = la, Dt = jn;
        }
        if (kt === O.length) {
          if (a(k, Dt), Ur()) {
            var Br = kt;
            $s(k, Br);
          }
          return We;
        }
        if (Dt === null) {
          for (; kt < O.length; kt++) {
            var ui = _(k, O[kt], G);
            ui !== null && (In = s(ui, In, kt), Kt === null ? We = ui : Kt.sibling = ui, Kt = ui);
          }
          if (Ur()) {
            var Ta = kt;
            $s(k, Ta);
          }
          return We;
        }
        for (var wa = i(k, Dt); kt < O.length; kt++) {
          var ua = N(wa, k, kt, O[kt], G);
          ua !== null && (e && ua.alternate !== null && wa.delete(ua.key === null ? kt : ua.key), In = s(ua, In, kt), Kt === null ? We = ua : Kt.sibling = ua, Kt = ua);
        }
        if (e && wa.forEach(function(Wf) {
          return t(k, Wf);
        }), Ur()) {
          var Au = kt;
          $s(k, Au);
        }
        return We;
      }
      function ae(k, H, O, G) {
        var de = dn(O);
        if (typeof de != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (eg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), O.entries === de && (Jy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Jy = !0);
          var ue = de.call(O);
          if (ue)
            for (var Ae = null, We = ue.next(); !We.done; We = ue.next()) {
              var Kt = We.value;
              Ae = U(Kt, Ae, k);
            }
        }
        var Dt = de.call(O);
        if (Dt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, kt = null, jn = H, la = 0, Br = 0, ui = null, Ta = Dt.next(); jn !== null && !Ta.done; Br++, Ta = Dt.next()) {
          jn.index > Br ? (ui = jn, jn = null) : ui = jn.sibling;
          var wa = w(k, jn, Ta.value, G);
          if (wa === null) {
            jn === null && (jn = ui);
            break;
          }
          e && jn && wa.alternate === null && t(k, jn), la = s(wa, la, Br), kt === null ? In = wa : kt.sibling = wa, kt = wa, jn = ui;
        }
        if (Ta.done) {
          if (a(k, jn), Ur()) {
            var ua = Br;
            $s(k, ua);
          }
          return In;
        }
        if (jn === null) {
          for (; !Ta.done; Br++, Ta = Dt.next()) {
            var Au = _(k, Ta.value, G);
            Au !== null && (la = s(Au, la, Br), kt === null ? In = Au : kt.sibling = Au, kt = Au);
          }
          if (Ur()) {
            var Wf = Br;
            $s(k, Wf);
          }
          return In;
        }
        for (var Gp = i(k, jn); !Ta.done; Br++, Ta = Dt.next()) {
          var $l = N(Gp, k, Br, Ta.value, G);
          $l !== null && (e && $l.alternate !== null && Gp.delete($l.key === null ? Br : $l.key), la = s($l, la, Br), kt === null ? In = $l : kt.sibling = $l, kt = $l);
        }
        if (e && Gp.forEach(function(qb) {
          return t(k, qb);
        }), Ur()) {
          var Gb = Br;
          $s(k, Gb);
        }
        return In;
      }
      function Le(k, H, O, G) {
        if (H !== null && H.tag === we) {
          a(k, H.sibling);
          var de = u(H, O);
          return de.return = k, de;
        }
        a(k, H);
        var ue = ZS(O, k.mode, G);
        return ue.return = k, ue;
      }
      function Te(k, H, O, G) {
        for (var de = O.key, ue = H; ue !== null; ) {
          if (ue.key === de) {
            var Ae = O.type;
            if (Ae === Yr) {
              if (ue.tag === ut) {
                a(k, ue.sibling);
                var We = u(ue, O.props.children);
                return We.return = k, We._debugSource = O._source, We._debugOwner = O._owner, We;
              }
            } else if (ue.elementType === Ae || // Keep this check inline so it only runs on the false path:
            v0(ue, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Ae == "object" && Ae !== null && Ae.$$typeof === Ye && oC(Ae) === ue.type) {
              a(k, ue.sibling);
              var Kt = u(ue, O.props);
              return Kt.ref = mp(k, ue, O), Kt.return = k, Kt._debugSource = O._source, Kt._debugOwner = O._owner, Kt;
            }
            a(k, ue);
            break;
          } else
            t(k, ue);
          ue = ue.sibling;
        }
        if (O.type === Yr) {
          var Dt = Po(O.props.children, k.mode, G, O.key);
          return Dt.return = k, Dt;
        } else {
          var In = KS(O, k.mode, G);
          return In.ref = mp(k, H, O), In.return = k, In;
        }
      }
      function Tt(k, H, O, G) {
        for (var de = O.key, ue = H; ue !== null; ) {
          if (ue.key === de)
            if (ue.tag === Fe && ue.stateNode.containerInfo === O.containerInfo && ue.stateNode.implementation === O.implementation) {
              a(k, ue.sibling);
              var Ae = u(ue, O.children || []);
              return Ae.return = k, Ae;
            } else {
              a(k, ue);
              break;
            }
          else
            t(k, ue);
          ue = ue.sibling;
        }
        var We = JS(O, k.mode, G);
        return We.return = k, We;
      }
      function vt(k, H, O, G) {
        var de = typeof O == "object" && O !== null && O.type === Yr && O.key === null;
        if (de && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ir:
              return f(Te(k, H, O, G));
            case da:
              return f(Tt(k, H, O, G));
            case Ye:
              var ue = O._payload, Ae = O._init;
              return vt(k, H, Ae(ue), G);
          }
          if (Xe(O))
            return j(k, H, O, G);
          if (dn(O))
            return ae(k, H, O, G);
          Hh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(k, H, "" + O, G)) : (typeof O == "function" && Vh(k), a(k, H));
      }
      return vt;
    }
    var kf = sC(!0), cC = sC(!1);
    function ww(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = nc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = nc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function xw(e, t) {
      for (var a = e.child; a !== null; )
        db(a, t), a = a.sibling;
    }
    var ag = bo(null), ig;
    ig = {};
    var Ph = null, Of = null, lg = null, Bh = !1;
    function $h() {
      Ph = null, Of = null, lg = null, Bh = !1;
    }
    function fC() {
      Bh = !0;
    }
    function dC() {
      Bh = !1;
    }
    function pC(e, t, a) {
      aa(ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ig && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ig;
    }
    function ug(e, t) {
      var a = ag.current;
      ra(ag, t), e._currentValue = a;
    }
    function og(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (vu(i.childLanes, t) ? u !== null && !vu(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _w(e, t, a) {
      bw(e, t, a);
    }
    function bw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = Jn(a), v = Ou(Bt, p);
                v.tag = Ih;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Ke(w.lanes, a)), og(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === fn) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Ke(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = Ke(U.lanes, a)), og(N, a, e), u = i.sibling;
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
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Lf(e, t) {
      Ph = e, Of = null, lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ea(a.lanes, t) && Lp(), a.firstContext = null);
      }
    }
    function nr(e) {
      Bh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (lg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Of === null) {
          if (Ph === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Of = a, Ph.dependencies = {
            lanes: V,
            firstContext: a
          };
        } else
          Of = Of.next = a;
      }
      return t;
    }
    var Gs = null;
    function sg(e) {
      Gs === null ? Gs = [e] : Gs.push(e);
    }
    function Dw() {
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
    function vC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Yh(e, i);
    }
    function kw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Yh(e, i);
    }
    function Pa(e, t) {
      return Yh(e, t);
    }
    var Lw = Yh;
    function Yh(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (Mn | zn)) !== xe && c0(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & (Mn | zn)) !== xe && c0(e), i = u, u = u.return;
      if (i.tag === Z) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hC = 0, mC = 1, Ih = 2, cg = 3, Qh = !1, fg, Wh;
    fg = !1, Wh = null;
    function dg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: V
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function yC(e, t) {
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
    function Ou(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: hC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Lo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Wh === u && !fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), k_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lw(e, a);
      } else
        return Ow(e, u, t, a);
    }
    function Gh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Od(a)) {
          var s = u.lanes;
          s = Gc(s, e.pendingLanes);
          var f = Ke(s, a);
          u.lanes = f, _s(e, f);
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
    function Mw(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & qe) {
                Pt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Pt(!1);
                }
              }
              dC();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & -65537 | it;
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & qe) {
                Pt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Pt(!1);
                }
              }
              dC();
            }
          } else
            y = v;
          return y == null ? i : Ge({}, i, y);
        }
        case Ih:
          return Qh = !0, i;
      }
      return i;
    }
    function qh(e, t, a, i) {
      var u = e.updateQueue;
      Qh = !1, Wh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, U = V, j = null, ae = null, Le = null, Te = s;
        do {
          var Tt = Te.lane, vt = Te.eventTime;
          if (vu(i, Tt)) {
            if (Le !== null) {
              var H = {
                eventTime: vt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                tag: Te.tag,
                payload: Te.payload,
                callback: Te.callback,
                next: null
              };
              Le = Le.next = H;
            }
            N = Mw(e, u, Te, N, t, a);
            var O = Te.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            Te.lane !== An) {
              e.flags |= Jt;
              var G = u.effects;
              G === null ? u.effects = [Te] : G.push(Te);
            }
          } else {
            var k = {
              eventTime: vt,
              lane: Tt,
              tag: Te.tag,
              payload: Te.payload,
              callback: Te.callback,
              next: null
            };
            Le === null ? (ae = Le = k, j = N) : Le = Le.next = k, U = Ke(U, Tt);
          }
          if (Te = Te.next, Te === null) {
            if (p = u.shared.pending, p === null)
              break;
            var de = p, ue = de.next;
            de.next = null, Te = ue, u.lastBaseUpdate = de, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (j = N), u.baseState = j, u.firstBaseUpdate = ae, u.lastBaseUpdate = Le;
        var Ae = u.shared.interleaved;
        if (Ae !== null) {
          var We = Ae;
          do
            U = Ke(U, We.lane), We = We.next;
          while (We !== Ae);
        } else s === null && (u.shared.lanes = V);
        $p(U), e.lanes = U, e.memoizedState = N;
      }
      Wh = null;
    }
    function Nw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gC() {
      Qh = !1;
    }
    function Xh() {
      return Qh;
    }
    function SC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Nw(f, a));
        }
    }
    var yp = {}, Mo = bo(yp), gp = bo(yp), Kh = bo(yp);
    function Zh(e) {
      if (e === yp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = Zh(Kh.current);
      return e;
    }
    function vg(e, t) {
      aa(Kh, t, e), aa(gp, e, e), aa(Mo, yp, e);
      var a = XT(t);
      ra(Mo, e), aa(Mo, a, e);
    }
    function Mf(e) {
      ra(Mo, e), ra(gp, e), ra(Kh, e);
    }
    function hg() {
      var e = Zh(Mo.current);
      return e;
    }
    function CC(e) {
      Zh(Kh.current);
      var t = Zh(Mo.current), a = KT(t, e.type);
      t !== a && (aa(gp, e, e), aa(Mo, a, e));
    }
    function mg(e) {
      gp.current === e && (ra(Mo, e), ra(gp, e));
    }
    var zw = 0, RC = 1, TC = 1, Sp = 2, Ji = bo(zw);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function Nf(e) {
      return e & RC;
    }
    function gg(e, t) {
      return e & RC | t;
    }
    function Uw(e, t) {
      return e | t;
    }
    function No(e, t) {
      aa(Ji, t, e);
    }
    function zf(e) {
      ra(Ji, e);
    }
    function Aw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Jh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || VE(i) || Ay(i))
              return t;
          }
        } else if (t.tag === $t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & it) !== xe;
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
    var Ba = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Al = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), Ar = (
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
    function Fw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = wt.ReactCurrentDispatcher, Ep = wt.ReactCurrentBatchConfig, Cg, Uf;
    Cg = /* @__PURE__ */ new Set();
    var qs = V, Xt = null, pr = null, vr = null, em = !1, Cp = !1, Rp = 0, jw = 0, Hw = 25, P = null, _i = null, zo = -1, Rg = !1;
    function Ht() {
      {
        var e = P;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function J() {
      {
        var e = P;
        _i !== null && (zo++, _i[zo] !== e && Vw(e));
      }
    }
    function Af(e) {
      e != null && !Xe(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", P, typeof e);
    }
    function Vw(e) {
      {
        var t = Pe(Xt);
        if (!Cg.has(t) && (Cg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= zo; u++) {
            for (var s = _i[u], f = u === zo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
    function ia() {
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
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", P), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, P, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      qs = s, Xt = t, _i = e !== null ? e._debugHookTypes : null, zo = -1, Rg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? fe.current = IC : _i !== null ? fe.current = YC : fe.current = $C;
      var f = a(i, u);
      if (Cp) {
        var p = 0;
        do {
          if (Cp = !1, Rp = 0, p >= Hw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Rg = !1, pr = null, vr = null, t.updateQueue = null, zo = -1, fe.current = QC, f = a(i, u);
        } while (Cp);
      }
      fe.current = pm, t._debugHookTypes = _i;
      var v = pr !== null && pr.next !== null;
      if (qs = V, Xt = null, pr = null, vr = null, P = null, _i = null, zo = -1, e !== null && (e.flags & Un) !== (t.flags & Un) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== _e && S("Internal React error: Expected static flag was missing. Please notify the React team."), em = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function jf() {
      var e = Rp !== 0;
      return Rp = 0, e;
    }
    function wC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & qt) !== _e ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function xC() {
      if (fe.current = pm, em) {
        for (var e = Xt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        em = !1;
      }
      qs = V, Xt = null, pr = null, vr = null, _i = null, zo = -1, P = null, jC = !1, Cp = !1, Rp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? Xt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function bi() {
      var e;
      if (pr === null) {
        var t = Xt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = Xt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? Xt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function _C() {
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
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Yw.bind(null, Xt, s);
      return [i.memoizedState, f];
    }
    function _g(e, t, a) {
      var i = bi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = pr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, N = null, U = null, j = g;
        do {
          var ae = j.lane;
          if (vu(qs, ae)) {
            if (U !== null) {
              var Te = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: An,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = Te;
            }
            if (j.hasEagerState)
              _ = j.eagerState;
            else {
              var Tt = j.action;
              _ = e(_, Tt);
            }
          } else {
            var Le = {
              lane: ae,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (N = U = Le, w = _) : U = U.next = Le, Xt.lanes = Ke(Xt.lanes, ae), $p(ae);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = _ : U.next = N, ge(_, i.memoizedState) || Lp(), i.memoizedState = _, i.baseState = w, i.baseQueue = U, u.lastRenderedState = _;
      }
      var vt = u.interleaved;
      if (vt !== null) {
        var k = vt;
        do {
          var H = k.lane;
          Xt.lanes = Ke(Xt.lanes, H), $p(H), k = k.next;
        } while (k !== vt);
      } else f === null && (u.lanes = V);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function bg(e, t, a) {
      var i = bi(), u = i.queue;
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
        ge(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function fD(e, t, a) {
    }
    function dD(e, t, a) {
    }
    function Dg(e, t, a) {
      var i = Xt, u = Fl(), s, f = Ur();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Uf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      } else {
        if (s = t(), !Uf) {
          var p = t();
          ge(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
        }
        var v = Mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, qs) || bC(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, im(kC.bind(null, i, y, e), [e]), i.flags |= pa, Tp(fr | Ar, DC.bind(null, i, y, s, t), void 0, null), s;
    }
    function tm(e, t, a) {
      var i = Xt, u = bi(), s = t();
      if (!Uf) {
        var f = t();
        ge(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Uf = !0);
      }
      var p = u.memoizedState, v = !ge(p, s);
      v && (u.memoizedState = s, Lp());
      var y = u.queue;
      if (xp(kC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= pa, Tp(fr | Ar, DC.bind(null, i, y, s, t), void 0, null);
        var g = Mm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, qs) || bC(i, t, s);
      }
      return s;
    }
    function bC(e, t, a) {
      e.flags |= Rc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Xt.updateQueue;
      if (u === null)
        u = _C(), Xt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function DC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, OC(t) && LC(e);
    }
    function kC(e, t, a) {
      var i = function() {
        OC(t) && LC(e);
      };
      return a(i);
    }
    function OC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function LC(e) {
      var t = Pa(e, ze);
      t !== null && gr(t, e, ze, Bt);
    }
    function nm(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: wg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Iw.bind(null, Xt, a);
      return [t.memoizedState, i];
    }
    function kg(e) {
      return _g(wg);
    }
    function Og(e) {
      return bg(wg);
    }
    function Tp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Xt.updateQueue;
      if (s === null)
        s = _C(), Xt.updateQueue = s, s.lastEffect = u.next = u;
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
    function rm(e) {
      var t = bi();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      Xt.flags |= e, u.memoizedState = Tp(fr | t, a, void 0, s);
    }
    function am(e, t, a, i) {
      var u = bi(), s = i === void 0 ? null : i, f = void 0;
      if (pr !== null) {
        var p = pr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Tg(s, v)) {
            u.memoizedState = Tp(t, a, f, s);
            return;
          }
        }
      }
      Xt.flags |= e, u.memoizedState = Tp(fr | t, a, f, s);
    }
    function im(e, t) {
      return (Xt.mode & qt) !== _e ? wp(yl | pa | cd, Ar, e, t) : wp(pa | cd, Ar, e, t);
    }
    function xp(e, t) {
      return am(pa, Ar, e, t);
    }
    function Mg(e, t) {
      return wp(ct, Al, e, t);
    }
    function lm(e, t) {
      return am(ct, Al, e, t);
    }
    function Ng(e, t) {
      var a = ct;
      return a |= ml, (Xt.mode & qt) !== _e && (a |= Lr), wp(a, dr, e, t);
    }
    function um(e, t) {
      return am(ct, dr, e, t);
    }
    function MC(e, t) {
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
      var i = a != null ? a.concat([e]) : null, u = ct;
      return u |= ml, (Xt.mode & qt) !== _e && (u |= Lr), wp(u, dr, MC.bind(null, t, e), i);
    }
    function om(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return am(ct, dr, MC.bind(null, t, e), i);
    }
    function Pw(e, t) {
    }
    var sm = Pw;
    function Ug(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function cm(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
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
    function fm(e, t) {
      var a = bi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Fg(e) {
      var t = Fl();
      return t.memoizedState = e, e;
    }
    function NC(e) {
      var t = bi(), a = pr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function zC(e) {
      var t = bi();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !kd(qs);
      if (i) {
        if (!ge(a, t)) {
          var u = Ld();
          Xt.lanes = Ke(Xt.lanes, u), $p(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function Bw(e, t, a) {
      var i = ma();
      $n(bs(i, Aa)), e(!0);
      var u = Ep.transition;
      Ep.transition = {};
      var s = Ep.transition;
      Ep.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), Ep.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && xt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function jg() {
      var e = nm(!1), t = e[0], a = e[1], i = Bw.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function AC() {
      var e = kg(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    function FC() {
      var e = Og(), t = e[0], a = bi(), i = a.memoizedState;
      return [t, i];
    }
    var jC = !1;
    function $w() {
      return jC;
    }
    function Hg() {
      var e = Fl(), t = Mm(), a = t.identifierPrefix, i;
      if (Ur()) {
        var u = lw();
        i = ":" + a + "R" + u;
        var s = Rp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = jw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function dm() {
      var e = bi(), t = e.memoizedState;
      return t;
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ho(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        VC(t, u);
      else {
        var s = vC(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          gr(s, e, i, f), PC(s, t, i);
        }
      }
      BC(e, i);
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Ho(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        VC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = el;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ge(y, v)) {
                kw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var _ = Ra();
          gr(g, e, i, _), PC(g, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === Xt || t !== null && t === Xt;
    }
    function VC(e, t) {
      Cp = em = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function PC(e, t, a) {
      if (Od(a)) {
        var i = t.lanes;
        i = Gc(i, e.pendingLanes);
        var u = Ke(i, a);
        t.lanes = u, _s(e, u);
      }
    }
    function BC(e, t, a) {
      ms(e, t);
    }
    var pm = {
      readContext: nr,
      useCallback: ia,
      useContext: ia,
      useEffect: ia,
      useImperativeHandle: ia,
      useInsertionEffect: ia,
      useLayoutEffect: ia,
      useMemo: ia,
      useReducer: ia,
      useRef: ia,
      useState: ia,
      useDebugValue: ia,
      useDeferredValue: ia,
      useTransition: ia,
      useMutableSource: ia,
      useSyncExternalStore: ia,
      useId: ia,
      unstable_isNewReconciler: me
    }, $C = null, YC = null, IC = null, QC = null, jl = null, el = null, vm = null;
    {
      var Vg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ht(), Af(t), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ht(), Af(t), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ht(), Af(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ht(), Af(t), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ht(), Af(t), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ht(), Af(t);
          var a = fe.current;
          fe.current = jl;
          try {
            return Ag(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ht();
          var i = fe.current;
          fe.current = jl;
          try {
            return xg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ht(), Lg(e);
        },
        useState: function(e) {
          P = "useState", Ht();
          var t = fe.current;
          fe.current = jl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ht(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ht(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ht(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ht(), Hg();
        },
        unstable_isNewReconciler: me
      }, YC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", J(), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", J(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", J(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", J(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", J(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", J(), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", J();
          var a = fe.current;
          fe.current = jl;
          try {
            return Ag(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", J();
          var i = fe.current;
          fe.current = jl;
          try {
            return xg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", J(), Lg(e);
        },
        useState: function(e) {
          P = "useState", J();
          var t = fe.current;
          fe.current = jl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", J(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", J(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", J(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", J(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", J(), Hg();
        },
        unstable_isNewReconciler: me
      }, IC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", J(), cm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", J(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", J(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", J(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", J(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", J(), um(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", J();
          var a = fe.current;
          fe.current = el;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", J();
          var i = fe.current;
          fe.current = el;
          try {
            return _g(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", J(), rm();
        },
        useState: function(e) {
          P = "useState", J();
          var t = fe.current;
          fe.current = el;
          try {
            return kg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", J(), sm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", J(), NC(e);
        },
        useTransition: function() {
          return P = "useTransition", J(), AC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", J(), tm(e, t);
        },
        useId: function() {
          return P = "useId", J(), dm();
        },
        unstable_isNewReconciler: me
      }, QC = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", J(), cm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", J(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", J(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", J(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", J(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", J(), um(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", J();
          var a = fe.current;
          fe.current = vm;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", J();
          var i = fe.current;
          fe.current = vm;
          try {
            return bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", J(), rm();
        },
        useState: function(e) {
          P = "useState", J();
          var t = fe.current;
          fe.current = vm;
          try {
            return Og(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", J(), sm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", J(), zC(e);
        },
        useTransition: function() {
          return P = "useTransition", J(), FC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", J(), tm(e, t);
        },
        useId: function() {
          return P = "useId", J(), dm();
        },
        unstable_isNewReconciler: me
      }, jl = {
        readContext: function(e) {
          return Vg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), Ht(), Ug(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), Ht(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), Ht(), im(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), Ht(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), Ht(), Mg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), Ht(), Ng(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), Ht();
          var a = fe.current;
          fe.current = jl;
          try {
            return Ag(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), Ht();
          var i = fe.current;
          fe.current = jl;
          try {
            return xg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), Ht(), Lg(e);
        },
        useState: function(e) {
          P = "useState", Ie(), Ht();
          var t = fe.current;
          fe.current = jl;
          try {
            return nm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), Ht(), Fg(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), Ht(), jg();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), Ht(), Dg(e, t, a);
        },
        useId: function() {
          return P = "useId", Ie(), Ht(), Hg();
        },
        unstable_isNewReconciler: me
      }, el = {
        readContext: function(e) {
          return Vg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), J(), cm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), J(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), J(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), J(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), J(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), J(), um(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), J();
          var a = fe.current;
          fe.current = el;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), J();
          var i = fe.current;
          fe.current = el;
          try {
            return _g(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), J(), rm();
        },
        useState: function(e) {
          P = "useState", Ie(), J();
          var t = fe.current;
          fe.current = el;
          try {
            return kg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), J(), sm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), J(), NC(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), J(), AC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), J(), tm(e, t);
        },
        useId: function() {
          return P = "useId", Ie(), J(), dm();
        },
        unstable_isNewReconciler: me
      }, vm = {
        readContext: function(e) {
          return Vg(), nr(e);
        },
        useCallback: function(e, t) {
          return P = "useCallback", Ie(), J(), cm(e, t);
        },
        useContext: function(e) {
          return P = "useContext", Ie(), J(), nr(e);
        },
        useEffect: function(e, t) {
          return P = "useEffect", Ie(), J(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return P = "useImperativeHandle", Ie(), J(), om(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return P = "useInsertionEffect", Ie(), J(), lm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return P = "useLayoutEffect", Ie(), J(), um(e, t);
        },
        useMemo: function(e, t) {
          P = "useMemo", Ie(), J();
          var a = fe.current;
          fe.current = el;
          try {
            return fm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          P = "useReducer", Ie(), J();
          var i = fe.current;
          fe.current = el;
          try {
            return bg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return P = "useRef", Ie(), J(), rm();
        },
        useState: function(e) {
          P = "useState", Ie(), J();
          var t = fe.current;
          fe.current = el;
          try {
            return Og(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return P = "useDebugValue", Ie(), J(), sm();
        },
        useDeferredValue: function(e) {
          return P = "useDeferredValue", Ie(), J(), zC(e);
        },
        useTransition: function() {
          return P = "useTransition", Ie(), J(), FC();
        },
        useMutableSource: function(e, t, a) {
          return P = "useMutableSource", Ie(), J(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return P = "useSyncExternalStore", Ie(), J(), tm(e, t);
        },
        useId: function() {
          return P = "useId", Ie(), J(), dm();
        },
        unstable_isNewReconciler: me
      };
    }
    var Uo = A.unstable_now, WC = 0, hm = -1, _p = -1, mm = -1, Pg = !1, ym = !1;
    function GC() {
      return Pg;
    }
    function Qw() {
      ym = !0;
    }
    function Ww() {
      Pg = !1, ym = !1;
    }
    function Gw() {
      Pg = ym, ym = !1;
    }
    function qC() {
      return WC;
    }
    function XC() {
      WC = Uo();
    }
    function Bg(e) {
      _p = Uo(), e.actualStartTime < 0 && (e.actualStartTime = Uo());
    }
    function KC(e) {
      _p = -1;
    }
    function gm(e, t) {
      if (_p >= 0) {
        var a = Uo() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Hl(e) {
      if (hm >= 0) {
        var t = Uo() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case bt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function $g(e) {
      if (mm >= 0) {
        var t = Uo() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case Z:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case bt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Vl() {
      hm = Uo();
    }
    function Yg() {
      mm = Uo();
    }
    function Ig(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function tl(e, t) {
      if (e && e.defaultProps) {
        var a = Ge({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Wg, Gg, qg, Xg, Kg, ZC, Sm, Zg, Jg, eS, bp;
    {
      Wg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), bp = /* @__PURE__ */ new Set();
      var JC = /* @__PURE__ */ new Set();
      Sm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          JC.has(a) || (JC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, ZC = function(e, t) {
        if (t === void 0) {
          var a = Ct(e) || "Component";
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
        if (e.mode & qe) {
          Pt(!0);
          try {
            s = a(i, u);
          } finally {
            Pt(!1);
          }
        }
        ZC(t, s);
      }
      var f = s == null ? u : Ge({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var nS = {
      isMounted: fd,
      enqueueSetState: function(e, t, a) {
        var i = no(e), u = Ra(), s = Ho(i), f = Ou(u, s);
        f.payload = t, a != null && (Sm(a, "setState"), f.callback = a);
        var p = Lo(i, f, s);
        p !== null && (gr(p, i, s, u), Gh(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = no(e), u = Ra(), s = Ho(i), f = Ou(u, s);
        f.tag = mC, f.payload = t, a != null && (Sm(a, "replaceState"), f.callback = a);
        var p = Lo(i, f, s);
        p !== null && (gr(p, i, s, u), Gh(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = no(e), i = Ra(), u = Ho(a), s = Ou(i, u);
        s.tag = Ih, t != null && (Sm(t, "forceUpdate"), s.callback = t);
        var f = Lo(a, s, u);
        f !== null && (gr(f, a, u, i), Gh(f, a, u)), xd(a, u);
      }
    };
    function eR(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & qe) {
            Pt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Pt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Ct(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ke(a, i) || !ke(u, s) : !0;
    }
    function qw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Ct(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === _e && (bp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !bp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & qe) === _e && (bp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Jg.has(t) && (Jg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ct(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !qg.has(t) && (qg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ct(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Xe(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function tR(e, t) {
      t.updater = nS, e.stateNode = t, ss(t, e), t._reactInternalInstance = Qg;
    }
    function nR(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !eS.has(t)) {
          eS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ni ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ct(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = wf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? xf(e, u) : ii;
      }
      var g = new t(a, s);
      if (e.mode & qe) {
        Pt(!0);
        try {
          g = new t(a, s);
        } finally {
          Pt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      tR(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = Ct(t) || "Component";
          Gg.has(w) || (Gg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), N !== null || U !== null || j !== null) {
            var ae = Ct(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Xg.has(ae) || (Xg.add(ae), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, Le, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && IE(e, u, s), g;
    }
    function Xw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Pe(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function rR(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Pe(e) || "Component";
          Wg.has(s) || (Wg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      qw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, dg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = wf(e, t, !0);
        u.context = xf(e, f);
      }
      {
        if (u.state === a) {
          var p = Ct(t) || "Component";
          Zg.has(p) || (Zg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & qe && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Xw(e, u), qh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = ct;
        y |= ml, (e.mode & qt) !== _e && (y |= Lr), e.flags |= y;
      }
    }
    function Kw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ii;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = wf(e, t, !0);
        v = xf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && rR(e, u, a, v), gC();
      var w = e.memoizedState, N = u.state = w;
      if (qh(e, a, u, i), N = e.memoizedState, s === a && w === N && !Oh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var U = ct;
          U |= ml, (e.mode & qt) !== _e && (U |= Lr), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (tS(e, t, g, a), N = e.memoizedState);
      var j = Xh() || eR(e, t, s, a, w, N, v);
      if (j) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = ct;
          ae |= ml, (e.mode & qt) !== _e && (ae |= Lr), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = ct;
          Le |= ml, (e.mode & qt) !== _e && (Le |= Lr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function Zw(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : tl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = ii;
      if (typeof g == "object" && g !== null)
        _ = nr(g);
      else {
        var w = wf(t, a, !0);
        _ = xf(t, w);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && rR(t, s, i, _), gC();
      var j = t.memoizedState, ae = s.state = j;
      if (qh(t, i, s, u), ae = t.memoizedState, f === v && j === ae && !Oh() && !Xh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), !1;
      typeof N == "function" && (tS(t, a, N, i), ae = t.memoizedState);
      var Le = Xh() || eR(t, a, p, i, j, ae, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      re;
      return Le ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, _)), typeof s.componentDidUpdate == "function" && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Na)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= ct), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Na), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = _, Le;
    }
    function Xs(e, t) {
      return {
        value: e,
        source: t,
        stack: Et(t),
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
    function Jw(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = Jw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Pe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === Z)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Pe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var ex = typeof WeakMap == "function" ? WeakMap : Map;
    function aR(e, t, a) {
      var i = Ou(Bt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Q_(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Ou(Bt, a);
      i.tag = cg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          h0(e), iS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        h0(e), iS(e, t), typeof u != "function" && Y_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ea(e.lanes, ze) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Pe(e) || "Unknown"));
      }), i;
    }
    function iR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ex(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = W_.bind(null, e, t, a);
        wr && Yp(e, a), t.then(s, s);
      }
    }
    function tx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nx(e, t) {
      var a = e.tag;
      if ((e.mode & lt) === _e && (a === be || a === Ne || a === He)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lR(e) {
      var t = e;
      do {
        if (t.tag === Ce && Aw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uR(e, t, a, i, u) {
      if ((e.mode & lt) === _e) {
        if (e === t)
          e.flags |= za;
        else {
          if (e.flags |= it, a.flags |= ei, a.flags &= -52805, a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = Lt;
            else {
              var f = Ou(Bt, ze);
              f.tag = Ih, Lo(a, f, ze);
            }
          }
          a.lanes = Ke(a.lanes, ze);
        }
        return e;
      }
      return e.flags |= za, e.lanes = u, e;
    }
    function rx(e, t, a, i, u) {
      if (a.flags |= iu, wr && Yp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nx(a), Ur() && a.mode & lt && ZE();
        var f = lR(t);
        if (f !== null) {
          f.flags &= -257, uR(f, t, a, e, u), f.mode & lt && iR(e, s, u), tx(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            iR(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Ur() && a.mode & lt) {
        ZE();
        var v = lR(t);
        if (v !== null) {
          (v.flags & za) === xe && (v.flags |= yn), uR(v, t, a, e, u), Zy(Xs(i, a));
          return;
        }
      }
      i = Xs(i, a), A_(i);
      var y = t;
      do {
        switch (y.tag) {
          case Z: {
            var g = i;
            y.flags |= za;
            var _ = Jn(u);
            y.lanes = Ke(y.lanes, _);
            var w = aR(y, g, _);
            pg(y, w);
            return;
          }
          case pe:
            var N = i, U = y.type, j = y.stateNode;
            if ((y.flags & it) === xe && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !l0(j))) {
              y.flags |= za;
              var ae = Jn(u);
              y.lanes = Ke(y.lanes, ae);
              var Le = lS(y, N, ae);
              pg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ax() {
      return null;
    }
    var Dp = wt.ReactCurrentOwner, nl = !1, uS, kp, oS, sS, cS, Ks, fS, Em, Op;
    uS = {}, kp = {}, oS = {}, sS = {}, cS = {}, Ks = !1, fS = {}, Em = {}, Op = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = kf(t, e.child, a, i);
    }
    function ix(e, t, a, i) {
      t.child = kf(t, e.child, null, i), t.child = kf(t, null, a, i);
    }
    function oR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Lf(t, u), Ua(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, f, i, p, u), y = jf(), t.mode & qe) {
          Pt(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = jf();
          } finally {
            Pt(!1);
          }
        }
        Da(!1);
      }
      return Cl(), e !== null && !nl ? (wC(e, t, u), Lu(e, t, u)) : (Ur() && y && Qy(t), t.flags |= Yi, Ea(e, t, v, u), t.child);
    }
    function sR(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (cb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Qf(s), t.tag = He, t.type = f, vS(t, s), cR(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            Ct(s)
          ), a.defaultProps !== void 0) {
            var v = Ct(s) || "Unknown";
            Op[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Op[v] = !0);
          }
        }
        var y = XS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Xi(
          _,
          i,
          // Resolved props
          "prop",
          Ct(g)
        );
      }
      var w = e.child, N = ES(e, u);
      if (!N) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : ke, j(U, i) && e.ref === t.ref)
          return Lu(e, t, u);
      }
      t.flags |= Yi;
      var ae = nc(w, i);
      return ae.ref = t.ref, ae.return = t, t.child = ae, ae;
    }
    function cR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ye) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Xi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Ct(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ke(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (nl = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & ei) !== xe && (nl = !0);
          else return t.lanes = e.lanes, Lu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function fR(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & lt) === _e) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Nm(t, a);
        } else if (ea(a, ha)) {
          var _ = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          Nm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ke(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ha;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Nm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Ke(s.baseLanes, a), t.memoizedState = null) : N = a, Nm(t, N);
      }
      return Ea(e, t, u, a), t.child;
    }
    function lx(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function ux(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function ox(e, t, a) {
      {
        t.flags |= ct;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function dR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Nn, t.flags |= fs);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          Ct(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Lf(t, u), Ua(t);
      {
        if (Dp.current = t, Da(!0), v = Ff(e, t, a, i, f, u), y = jf(), t.mode & qe) {
          Pt(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = jf();
          } finally {
            Pt(!1);
          }
        }
        Da(!1);
      }
      return Cl(), e !== null && !nl ? (wC(e, t, u), Lu(e, t, u)) : (Ur() && y && Qy(t), t.flags |= Yi, Ea(e, t, v, u), t.child);
    }
    function pR(e, t, a, i, u) {
      {
        switch (xb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= it, t.flags |= za;
            var y = new Error("Simulated error coming from DevTools"), g = Jn(u);
            t.lanes = Ke(t.lanes, g);
            var _ = lS(t, Xs(y, t), g);
            pg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Xi(
            w,
            i,
            // Resolved props
            "prop",
            Ct(a)
          );
        }
      }
      var N;
      Ul(a) ? (N = !0, Mh(t)) : N = !1, Lf(t, u);
      var U = t.stateNode, j;
      U === null ? (Rm(e, t), nR(t, a, i), rS(t, a, i, u), j = !0) : e === null ? j = Kw(t, a, i, u) : j = Zw(e, t, a, i, u);
      var ae = pS(e, t, a, j, N, u);
      {
        var Le = t.stateNode;
        j && Le.props !== i && (Ks || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Pe(t) || "a component"), Ks = !0);
      }
      return ae;
    }
    function pS(e, t, a, i, u, s) {
      dR(e, t);
      var f = (t.flags & it) !== xe;
      if (!i && !f)
        return u && GE(t, a, !1), Lu(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, KC();
      else {
        Ua(t);
        {
          if (Da(!0), v = p.render(), t.mode & qe) {
            Pt(!0);
            try {
              p.render();
            } finally {
              Pt(!1);
            }
          }
          Da(!1);
        }
        Cl();
      }
      return t.flags |= Yi, e !== null && f ? ix(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && GE(t, a, !0), t.child;
    }
    function vR(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), vg(e, t.containerInfo);
    }
    function sx(e, t, a) {
      if (vR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yC(e, t), qh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & yn) {
          var g = Xs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hR(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Xs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hR(e, t, p, a, _);
        } else {
          dw(t);
          var w = cC(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & -3 | zn, N = N.sibling;
        }
      } else {
        if (Df(), p === s)
          return Lu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function hR(e, t, a, i, u) {
      return Df(), Zy(u), t.flags |= yn, Ea(e, t, a, i), t.child;
    }
    function cx(e, t, a) {
      CC(t), e === null && Ky(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= Gt), dR(e, t), Ea(e, t, f, a), t.child;
    }
    function fx(e, t) {
      return e === null && Ky(t), null;
    }
    function dx(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = fb(v), g = tl(v, u), _;
      switch (y) {
        case be:
          return vS(t, v), t.type = v = Qf(v), _ = dS(null, t, v, g, i), _;
        case pe:
          return t.type = v = YS(v), _ = pR(null, t, v, g, i), _;
        case Ne:
          return t.type = v = IS(v), _ = oR(null, t, v, g, i), _;
        case ot: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Xi(
              w,
              g,
              // Resolved for outer only
              "prop",
              Ct(v)
            );
          }
          return _ = sR(
            null,
            t,
            v,
            tl(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Ye && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function px(e, t, a, i, u) {
      Rm(e, t), t.tag = pe;
      var s;
      return Ul(a) ? (s = !0, Mh(t)) : s = !1, Lf(t, u), nR(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function vx(e, t, a, i) {
      Rm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = xf(t, f);
      }
      Lf(t, i);
      var p, v;
      Ua(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Ct(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & qe && Zi.recordLegacyContextWarning(t, null), Da(!0), Dp.current = t, p = Ff(null, t, a, u, s, i), v = jf(), Da(!1);
      }
      if (Cl(), t.flags |= Yi, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Ct(a) || "Unknown";
        kp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), kp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = Ct(a) || "Unknown";
          kp[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), kp[_] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Ul(a) ? (w = !0, Mh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), tR(t, p), rS(t, a, u, i), pS(null, t, a, !0, w, i);
      } else {
        if (t.tag = be, t.mode & qe) {
          Pt(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = jf();
          } finally {
            Pt(!1);
          }
        }
        return Ur() && v && Qy(t), Ea(null, t, p, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = kr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Ct(t) || "Unknown";
          Op[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Op[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Ct(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), sS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Ct(t) || "Unknown";
          oS[v] || (S("%s: Function components do not support contextType.", v), oS[v] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: An
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: ax(),
        transitions: null
      };
    }
    function hx(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, Sp);
    }
    function yx(e, t) {
      return xs(e.childLanes, t);
    }
    function mR(e, t, a) {
      var i = t.pendingProps;
      _b(t) && (t.flags |= it);
      var u = Ji.current, s = !1, f = (t.flags & it) !== xe;
      if (f || mx(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = Uw(u, TC)), u = Nf(u), No(t, u), e === null) {
        Ky(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Rx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = gx(t, y, g, a), w = t.child;
          return w.memoizedState = mS(a), t.memoizedState = hS, _;
        } else
          return yS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return Tx(e, t, f, i, U, N, a);
        }
        if (s) {
          var j = i.fallback, ae = i.children, Le = Ex(e, t, ae, j, a), Te = t.child, Tt = e.child.memoizedState;
          return Te.memoizedState = Tt === null ? mS(a) : hx(Tt, a), Te.childLanes = yx(e, a), t.memoizedState = hS, Le;
        } else {
          var vt = i.children, k = Sx(e, t, vt, a);
          return t.memoizedState = null, k;
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
    function gx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & lt) === _e && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & yt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Po(a, u, i, null)) : (p = gS(f, u), v = Po(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return y0(e, t, V, null);
    }
    function yR(e, t) {
      return nc(e, t);
    }
    function Sx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yR(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & lt) === _e && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= qr) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ex(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & lt) === _e && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & yt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = yR(f, v), y.subtreeFlags = f.subtreeFlags & Un;
      var _;
      return p !== null ? _ = nc(p, i) : (_ = Po(i, s, u, null), _.flags |= Mn), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Cm(e, t, a, i) {
      i !== null && Zy(i), kf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= Mn, t.memoizedState = null, f;
    }
    function Cx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Po(i, s, u, null);
      return v.flags |= Mn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & lt) !== _e && kf(t, e.child, null, u), v;
    }
    function Rx(e, t, a) {
      return (e.mode & lt) === _e ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ze) : Ay(t) ? e.lanes = Zn : e.lanes = ha, null;
    }
    function Tx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & yn) {
          t.flags &= -257;
          var k = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Cm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= it, null;
          var H = i.children, O = i.fallback, G = Cx(e, t, H, O, f), de = t.child;
          return de.memoizedState = mS(f), t.memoizedState = hS, G;
        }
      else {
        if (cw(), (t.mode & lt) === _e)
          return Cm(
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
            var g = b1(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = aS(_, p, y);
          return Cm(e, t, f, w);
        }
        var N = ea(f, e.childLanes);
        if (nl || N) {
          var U = Mm();
          if (U !== null) {
            var j = Kc(U, f);
            if (j !== An && j !== s.retryLane) {
              s.retryLane = j;
              var ae = Bt;
              Pa(e, j), gr(U, e, j, ae);
            }
          }
          HS();
          var Le = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Cm(e, t, f, Le);
        } else if (VE(u)) {
          t.flags |= it, t.child = e.child;
          var Te = G_.bind(null, e);
          return D1(u, Te), null;
        } else {
          pw(t, u, s.treeContext);
          var Tt = i.children, vt = yS(t, Tt);
          return vt.flags |= zn, vt;
        }
      }
    }
    function gR(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), og(e.return, t, a);
    }
    function wx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
          var u = i.memoizedState;
          u !== null && gR(i, a, e);
        } else if (i.tag === $t)
          gR(i, a, e);
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
    function xx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Jh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _x(e) {
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
    function bx(e, t) {
      e !== void 0 && !Em[e] && (e !== "collapsed" && e !== "hidden" ? (Em[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Em[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SR(e, t) {
      {
        var a = Xe(e), i = !a && typeof dn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Xe(e)) {
          for (var a = 0; a < e.length; a++)
            if (!SR(e[a], a))
              return;
        } else {
          var i = dn(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!SR(s.value, f))
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
    function ER(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      _x(u), bx(s, u), Dx(f, u), Ea(e, t, f, a);
      var p = Ji.current, v = yg(p, Sp);
      if (v)
        p = gg(p, Sp), t.flags |= it;
      else {
        var y = e !== null && (e.flags & it) !== xe;
        y && wx(t, t.child, a), p = Nf(p);
      }
      if (No(t, p), (t.mode & lt) === _e)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = xx(t.child), _;
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
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && Jh(U) === null) {
                t.child = N;
                break;
              }
              var j = N.sibling;
              N.sibling = w, w = N, N = j;
            }
            SS(
              t,
              !0,
              // isBackwards
              w,
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
    function kx(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = kf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var CR = !1;
    function Ox(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CR || (CR = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (ge(y, p)) {
          if (f.children === s.children && !Oh())
            return Lu(e, t, a);
        } else
          _w(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var RR = !1;
    function Lx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (RR || (RR = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Lf(t, a);
      var f = nr(i);
      Ua(t);
      var p;
      return Dp.current = t, Da(!0), p = s(f), Da(!1), Cl(), t.flags |= Yi, Ea(e, t, p, a), t.child;
    }
    function Lp() {
      nl = !0;
    }
    function Rm(e, t) {
      (t.mode & lt) === _e && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Mn);
    }
    function Lu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), KC(), $p(t.lanes), ea(a, t.childLanes) ? (ww(e, t), t.child) : null;
    }
    function Mx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= qr) : s.push(e), a.flags |= Mn, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!ea(a, t);
    }
    function Nx(e, t, a) {
      switch (t.tag) {
        case Z:
          vR(t), t.stateNode, Df();
          break;
        case le:
          CC(t);
          break;
        case pe: {
          var i = t.type;
          Ul(i) && Mh(t);
          break;
        }
        case Fe:
          vg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case bt:
          {
            var f = ea(a, t.childLanes);
            f && (t.flags |= ct);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return No(t, Nf(Ji.current)), t.flags |= it, null;
            var y = t.child, g = y.childLanes;
            if (ea(a, g))
              return mR(e, t, a);
            No(t, Nf(Ji.current));
            var _ = Lu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            No(t, Nf(Ji.current));
          break;
        }
        case $t: {
          var w = (e.flags & it) !== xe, N = ea(a, t.childLanes);
          if (w) {
            if (N)
              return ER(e, t, a);
            t.flags |= it;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), No(t, Ji.current), N)
            break;
          return null;
        }
        case Me:
        case At:
          return t.lanes = V, fR(e, t, a);
      }
      return Lu(e, t, a);
    }
    function TR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mx(e, t, XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Oh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          nl = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & it) === xe)
            return nl = !1, Nx(e, t, a);
          (e.flags & ei) !== xe ? nl = !0 : nl = !1;
        }
      } else if (nl = !1, Ur() && aw(t)) {
        var f = t.index, p = iw();
        KE(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case Be:
          return vx(e, t, t.type, a);
        case Sn: {
          var v = t.elementType;
          return dx(e, t, v, a);
        }
        case be: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : tl(y, g);
          return dS(e, t, y, _, a);
        }
        case pe: {
          var w = t.type, N = t.pendingProps, U = t.elementType === w ? N : tl(w, N);
          return pR(e, t, w, U, a);
        }
        case Z:
          return sx(e, t, a);
        case le:
          return cx(e, t, a);
        case we:
          return fx(e, t);
        case Ce:
          return mR(e, t, a);
        case Fe:
          return kx(e, t, a);
        case Ne: {
          var j = t.type, ae = t.pendingProps, Le = t.elementType === j ? ae : tl(j, ae);
          return oR(e, t, j, Le, a);
        }
        case ut:
          return lx(e, t, a);
        case Hn:
          return ux(e, t, a);
        case bt:
          return ox(e, t, a);
        case rt:
          return Ox(e, t, a);
        case rn:
          return Lx(e, t, a);
        case ot: {
          var Te = t.type, Tt = t.pendingProps, vt = tl(Te, Tt);
          if (t.type !== t.elementType) {
            var k = Te.propTypes;
            k && Xi(
              k,
              vt,
              // Resolved for outer only
              "prop",
              Ct(Te)
            );
          }
          return vt = tl(Te.type, vt), sR(e, t, Te, vt, a);
        }
        case He:
          return cR(e, t, t.type, t.pendingProps, a);
        case Lt: {
          var H = t.type, O = t.pendingProps, G = t.elementType === H ? O : tl(H, O);
          return px(e, t, H, G, a);
        }
        case $t:
          return ER(e, t, a);
        case ht:
          break;
        case Me:
          return fR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hf(e) {
      e.flags |= ct;
    }
    function wR(e) {
      e.flags |= Nn, e.flags |= fs;
    }
    var xR, CS, _R, bR;
    xR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === le || u.tag === we)
          t1(e, u.stateNode);
        else if (u.tag !== Fe) {
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
    }, _R = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = hg(), v = r1(f, a, s, i, u, p);
        t.updateQueue = v, v && Hf(t);
      }
    }, bR = function(e, t, a, i) {
      a !== i && Hf(t);
    };
    function Mp(e, t) {
      if (!Ur())
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
    function Fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = xe;
      if (t) {
        if ((e.mode & yt) !== _e) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & Un, i |= y.flags & Un, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), i |= g.subtreeFlags & Un, i |= g.flags & Un, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & yt) !== _e) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ke(a, Ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ke(a, Ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zx(e, t, a) {
      if (gw() && (t.mode & lt) !== _e && (t.flags & it) === xe)
        return aC(t), Df(), t.flags |= yn | iu | za, !1;
      var i = Fh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mw(t), Fr(t), (t.mode & yt) !== _e) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Df(), (t.flags & it) === xe && (t.memoizedState = null), t.flags |= ct, Fr(t), (t.mode & yt) !== _e) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return iC(), !0;
    }
    function DR(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case Be:
        case Sn:
        case He:
        case be:
        case Ne:
        case ut:
        case Hn:
        case bt:
        case rn:
        case ot:
          return Fr(t), null;
        case pe: {
          var u = t.type;
          return Ul(u) && Lh(t), Fr(t), null;
        }
        case Z: {
          var s = t.stateNode;
          if (Mf(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Fh(t);
            if (f)
              Hf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & yn) !== xe) && (t.flags |= Na, iC());
            }
          }
          return CS(e, t), Fr(t), null;
        }
        case le: {
          mg(t);
          var v = EC(), y = t.type;
          if (e !== null && t.stateNode != null)
            _R(e, t, y, i, v), e.ref !== t.ref && wR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fr(t), null;
            }
            var g = hg(), _ = Fh(t);
            if (_)
              vw(t, v, g) && Hf(t);
            else {
              var w = e1(y, i, v, g, t);
              xR(w, t, !1, !1), t.stateNode = w, n1(w, y, i, v) && Hf(t);
            }
            t.ref !== null && wR(t);
          }
          return Fr(t), null;
        }
        case we: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            bR(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = EC(), ae = hg(), Le = Fh(t);
            Le ? hw(t) && Hf(t) : t.stateNode = a1(N, j, ae, t);
          }
          return Fr(t), null;
        }
        case Ce: {
          zf(t);
          var Te = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = zx(e, t, Te);
            if (!Tt)
              return t.flags & za ? t : null;
          }
          if ((t.flags & it) !== xe)
            return t.lanes = a, (t.mode & yt) !== _e && Ig(t), t;
          var vt = Te !== null, k = e !== null && e.memoizedState !== null;
          if (vt !== k && vt) {
            var H = t.child;
            if (H.flags |= yi, (t.mode & lt) !== _e) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || yg(Ji.current, TC) ? U_() : HS();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= ct), Fr(t), (t.mode & yt) !== _e && vt) {
            var de = t.child;
            de !== null && (t.treeBaseDuration -= de.treeBaseDuration);
          }
          return null;
        }
        case Fe:
          return Mf(t), CS(e, t), e === null && K1(t.stateNode.containerInfo), Fr(t), null;
        case rt:
          var ue = t.type._context;
          return ug(ue, t), Fr(t), null;
        case Lt: {
          var Ae = t.type;
          return Ul(Ae) && Lh(t), Fr(t), null;
        }
        case $t: {
          zf(t);
          var We = t.memoizedState;
          if (We === null)
            return Fr(t), null;
          var Kt = (t.flags & it) !== xe, Dt = We.rendering;
          if (Dt === null)
            if (Kt)
              Mp(We, !1);
            else {
              var In = F_() && (e === null || (e.flags & it) === xe);
              if (!In)
                for (var kt = t.child; kt !== null; ) {
                  var jn = Jh(kt);
                  if (jn !== null) {
                    Kt = !0, t.flags |= it, Mp(We, !1);
                    var la = jn.updateQueue;
                    return la !== null && (t.updateQueue = la, t.flags |= ct), t.subtreeFlags = xe, xw(t, a), No(t, gg(Ji.current, Sp)), t.child;
                  }
                  kt = kt.sibling;
                }
              We.tail !== null && Rn() > qR() && (t.flags |= it, Kt = !0, Mp(We, !1), t.lanes = Fv);
            }
          else {
            if (!Kt) {
              var Br = Jh(Dt);
              if (Br !== null) {
                t.flags |= it, Kt = !0;
                var ui = Br.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= ct), Mp(We, !0), We.tail === null && We.tailMode === "hidden" && !Dt.alternate && !Ur())
                  return Fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Rn() * 2 - We.renderingStartTime > qR() && a !== ha && (t.flags |= it, Kt = !0, Mp(We, !1), t.lanes = Fv);
            }
            if (We.isBackwards)
              Dt.sibling = t.child, t.child = Dt;
            else {
              var Ta = We.last;
              Ta !== null ? Ta.sibling = Dt : t.child = Dt, We.last = Dt;
            }
          }
          if (We.tail !== null) {
            var wa = We.tail;
            We.rendering = wa, We.tail = wa.sibling, We.renderingStartTime = Rn(), wa.sibling = null;
            var ua = Ji.current;
            return Kt ? ua = gg(ua, Sp) : ua = Nf(ua), No(t, ua), wa;
          }
          return Fr(t), null;
        }
        case ht:
          break;
        case Me:
        case At: {
          jS(t);
          var Au = t.memoizedState, Wf = Au !== null;
          if (e !== null) {
            var Gp = e.memoizedState, $l = Gp !== null;
            $l !== Wf && (t.flags |= yi);
          }
          return !Wf || (t.mode & lt) === _e ? Fr(t) : ea(Bl, ha) && (Fr(t), t.subtreeFlags & (Mn | ct) && (t.flags |= yi)), null;
        }
        case pt:
          return null;
        case tt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ux(e, t, a) {
      switch (Wy(t), t.tag) {
        case pe: {
          var i = t.type;
          Ul(i) && Lh(t);
          var u = t.flags;
          return u & za ? (t.flags = u & -65537 | it, (t.mode & yt) !== _e && Ig(t), t) : null;
        }
        case Z: {
          t.stateNode, Mf(t), $y(t), Eg();
          var s = t.flags;
          return (s & za) !== xe && (s & it) === xe ? (t.flags = s & -65537 | it, t) : null;
        }
        case le:
          return mg(t), null;
        case Ce: {
          zf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Df();
          }
          var p = t.flags;
          return p & za ? (t.flags = p & -65537 | it, (t.mode & yt) !== _e && Ig(t), t) : null;
        }
        case $t:
          return zf(t), null;
        case Fe:
          return Mf(t), null;
        case rt:
          var v = t.type._context;
          return ug(v, t), null;
        case Me:
        case At:
          return jS(t), null;
        case pt:
          return null;
        default:
          return null;
      }
    }
    function kR(e, t, a) {
      switch (Wy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && Lh(t);
          break;
        }
        case Z: {
          t.stateNode, Mf(t), $y(t), Eg();
          break;
        }
        case le: {
          mg(t);
          break;
        }
        case Fe:
          Mf(t);
          break;
        case Ce:
          zf(t);
          break;
        case $t:
          zf(t);
          break;
        case rt:
          var u = t.type._context;
          ug(u, t);
          break;
        case Me:
        case At:
          jS(t);
          break;
      }
    }
    var OR = null;
    OR = /* @__PURE__ */ new Set();
    var Tm = !1, jr = !1, Ax = typeof WeakSet == "function" ? WeakSet : Set, Se = null, Vf = null, Pf = null;
    function Fx(e) {
      Ma(null, function() {
        throw e;
      }), sd();
    }
    var jx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & yt)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Hl(e);
        }
      else
        t.componentWillUnmount();
    };
    function LR(e, t) {
      try {
        Ao(dr, e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        jx(e, a);
      } catch (i) {
        cn(e, t, i);
      }
    }
    function Hx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        cn(e, t, i);
      }
    }
    function MR(e, t) {
      try {
        zR(e);
      } catch (a) {
        cn(e, t, a);
      }
    }
    function Bf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if ($e && nt && e.mode & yt)
              try {
                Vl(), i = a(null);
              } finally {
                Hl(e);
              }
            else
              i = a(null);
          } catch (u) {
            cn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Pe(e));
        } else
          a.current = null;
    }
    function wm(e, t, a) {
      try {
        a();
      } catch (i) {
        cn(e, t, i);
      }
    }
    var NR = !1;
    function Vx(e, t) {
      ZT(e.containerInfo), Se = t, Px();
      var a = NR;
      return NR = !1, a;
    }
    function Px() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & gl) !== xe && t !== null ? (t.return = e, Se = t) : Bx();
      }
    }
    function Bx() {
      for (; Se !== null; ) {
        var e = Se;
        It(e);
        try {
          $x(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        mn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function $x(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Na) !== xe) {
        switch (It(e), e.tag) {
          case be:
          case Ne:
          case He:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ks && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : tl(e.type, i), u);
              {
                var p = OR;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Pe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case Z: {
            {
              var v = e.stateNode;
              T1(v.containerInfo);
            }
            break;
          }
          case le:
          case we:
          case Fe:
          case Lt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        mn();
      }
    }
    function rl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ar) !== Ba ? Rl(t) : (e & dr) !== Ba && Cd(t), (e & Al) !== Ba && Ip(!0), wm(t, a, p), (e & Al) !== Ba && Ip(!1), (e & Ar) !== Ba ? wc() : (e & dr) !== Ba && lo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Ao(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ar) !== Ba ? Uv(t) : (e & dr) !== Ba && Av(t);
            var f = s.create;
            (e & Al) !== Ba && Ip(!0), s.destroy = f(), (e & Al) !== Ba && Ip(!1), (e & Ar) !== Ba ? Qi() : (e & dr) !== Ba && xc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & dr) !== xe ? v = "useLayoutEffect" : (s.tag & Al) !== xe ? v = "useInsertionEffect" : v = "useEffect";
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
    function Yx(e, t) {
      if ((t.flags & ct) !== xe)
        switch (t.tag) {
          case bt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qC(), p = t.alternate === null ? "mount" : "update";
            GC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case Z:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case bt:
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
    function Ix(e, t, a, i) {
      if ((a.flags & Sl) !== xe)
        switch (a.tag) {
          case be:
          case Ne:
          case He: {
            if (!jr)
              if (a.mode & yt)
                try {
                  Vl(), Ao(dr | fr, a);
                } finally {
                  Hl(a);
                }
              else
                Ao(dr | fr, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & ct && !jr)
              if (t === null)
                if (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), a.mode & yt)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : tl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), a.mode & yt)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Hl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Pe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Pe(a) || "instance")), SC(a, p, u));
            break;
          }
          case Z: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case le:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case le: {
            var g = a.stateNode;
            if (t === null && a.flags & ct) {
              var _ = a.type, w = a.memoizedProps;
              s1(g, _, w);
            }
            break;
          }
          case we:
            break;
          case Fe:
            break;
          case bt: {
            {
              var N = a.memoizedProps, U = N.onCommit, j = N.onRender, ae = a.stateNode.effectDuration, Le = qC(), Te = t === null ? "mount" : "update";
              GC() && (Te = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, Te, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof U == "function" && U(a.memoizedProps.id, Te, ae, Le), B_(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case Z:
                      var vt = Tt.stateNode;
                      vt.effectDuration += ae;
                      break e;
                    case bt:
                      var k = Tt.stateNode;
                      k.effectDuration += ae;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case Ce: {
            Jx(e, a);
            break;
          }
          case $t:
          case Lt:
          case ht:
          case Me:
          case At:
          case tt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      jr || a.flags & Nn && zR(a);
    }
    function Qx(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          if (e.mode & yt)
            try {
              Vl(), LR(e, e.return);
            } finally {
              Hl(e);
            }
          else
            LR(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Hx(e, e.return, t), MR(e, e.return);
          break;
        }
        case le: {
          MR(e, e.return);
          break;
        }
      }
    }
    function Wx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === le) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? S1(u) : C1(i.stateNode, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
          }
        } else if (i.tag === we) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? E1(s) : R1(s, i.memoizedProps);
            } catch (f) {
              cn(e, e.return, f);
            }
        } else if (!((i.tag === Me || i.tag === At) && i.memoizedState !== null && i !== e)) {
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
    function zR(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case le:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & yt)
            try {
              Vl(), u = t(i);
            } finally {
              Hl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Pe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Pe(e)), t.current = i;
      }
    }
    function Gx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === le) {
          var a = e.stateNode;
          a !== null && ew(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function qx(e) {
      for (var t = e.return; t !== null; ) {
        if (AR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AR(e) {
      return e.tag === le || e.tag === Z || e.tag === Fe;
    }
    function FR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || AR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== le && t.tag !== we && t.tag !== fn; ) {
          if (t.flags & Mn || t.child === null || t.tag === Fe)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Mn))
          return t.stateNode;
      }
    }
    function Xx(e) {
      var t = qx(e);
      switch (t.tag) {
        case le: {
          var a = t.stateNode;
          t.flags & Gt && (HE(a), t.flags &= -33);
          var i = FR(e);
          wS(e, i, a);
          break;
        }
        case Z:
        case Fe: {
          var u = t.stateNode.containerInfo, s = FR(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === le || i === we;
      if (u) {
        var s = e.stateNode;
        t ? h1(a, s, t) : p1(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === le || i === we;
      if (u) {
        var s = e.stateNode;
        t ? v1(a, s, t) : d1(a, s);
      } else if (i !== Fe) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var Hr = null, al = !1;
    function Kx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case le: {
              Hr = i.stateNode, al = !1;
              break e;
            }
            case Z: {
              Hr = i.stateNode.containerInfo, al = !0;
              break e;
            }
            case Fe: {
              Hr = i.stateNode.containerInfo, al = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Hr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        jR(e, t, a), Hr = null, al = !1;
      }
      Gx(a);
    }
    function Fo(e, t, a) {
      for (var i = a.child; i !== null; )
        jR(e, t, i), i = i.sibling;
    }
    function jR(e, t, a) {
      switch (io(a), a.tag) {
        case le:
          jr || Bf(a, t);
        case we: {
          {
            var i = Hr, u = al;
            Hr = null, Fo(e, t, a), Hr = i, al = u, Hr !== null && (al ? y1(Hr, a.stateNode) : m1(Hr, a.stateNode));
          }
          return;
        }
        case fn: {
          Hr !== null && (al ? g1(Hr, a.stateNode) : Uy(Hr, a.stateNode));
          return;
        }
        case Fe: {
          {
            var s = Hr, f = al;
            Hr = a.stateNode.containerInfo, al = !0, Fo(e, t, a), Hr = s, al = f;
          }
          return;
        }
        case be:
        case Ne:
        case ot:
        case He: {
          if (!jr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, N = _.tag;
                  w !== void 0 && ((N & Al) !== Ba ? wm(a, t, w) : (N & dr) !== Ba && (Cd(a), a.mode & yt ? (Vl(), wm(a, t, w), Hl(a)) : wm(a, t, w), lo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Fo(e, t, a);
          return;
        }
        case pe: {
          if (!jr) {
            Bf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && RS(a, t, U);
          }
          Fo(e, t, a);
          return;
        }
        case ht: {
          Fo(e, t, a);
          return;
        }
        case Me: {
          if (
            // TODO: Remove this dead flag
            a.mode & lt
          ) {
            var j = jr;
            jr = j || a.memoizedState !== null, Fo(e, t, a), jr = j;
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
    function Zx(e) {
      e.memoizedState;
    }
    function Jx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && F1(s);
          }
        }
      }
    }
    function HR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ax()), t.forEach(function(i) {
          var u = q_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), wr)
              if (Vf !== null && Pf !== null)
                Yp(Pf, Vf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function e_(e, t, a) {
      Vf = a, Pf = e, It(t), VR(t, e), It(t), Vf = null, Pf = null;
    }
    function il(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Kx(e, t, s);
          } catch (v) {
            cn(s, t, v);
          }
        }
      var f = Xa();
      if (t.subtreeFlags & ro)
        for (var p = t.child; p !== null; )
          It(p), VR(p, e), p = p.sibling;
      It(f);
    }
    function VR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case be:
        case Ne:
        case ot:
        case He: {
          if (il(t, e), Pl(e), u & ct) {
            try {
              rl(Al | fr, e, e.return), Ao(Al | fr, e);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
            if (e.mode & yt) {
              try {
                Vl(), rl(dr | fr, e, e.return);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
              Hl(e);
            } else
              try {
                rl(dr | fr, e, e.return);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
          }
          return;
        }
        case pe: {
          il(t, e), Pl(e), u & Nn && i !== null && Bf(i, i.return);
          return;
        }
        case le: {
          il(t, e), Pl(e), u & Nn && i !== null && Bf(i, i.return);
          {
            if (e.flags & Gt) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
            }
            if (u & ct) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    c1(f, g, y, v, p, e);
                  } catch (Ae) {
                    cn(e, e.return, Ae);
                  }
              }
            }
          }
          return;
        }
        case we: {
          if (il(t, e), Pl(e), u & ct) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              f1(_, N, w);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
          }
          return;
        }
        case Z: {
          if (il(t, e), Pl(e), u & ct && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                A1(t.containerInfo);
              } catch (Ae) {
                cn(e, e.return, Ae);
              }
          }
          return;
        }
        case Fe: {
          il(t, e), Pl(e);
          return;
        }
        case Ce: {
          il(t, e), Pl(e);
          var j = e.child;
          if (j.flags & yi) {
            var ae = j.stateNode, Le = j.memoizedState, Te = Le !== null;
            if (ae.isHidden = Te, Te) {
              var Tt = j.alternate !== null && j.alternate.memoizedState !== null;
              Tt || z_();
            }
          }
          if (u & ct) {
            try {
              Zx(e);
            } catch (Ae) {
              cn(e, e.return, Ae);
            }
            HR(e);
          }
          return;
        }
        case Me: {
          var vt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var k = jr;
            jr = k || vt, il(t, e), jr = k;
          } else
            il(t, e);
          if (Pl(e), u & yi) {
            var H = e.stateNode, O = e.memoizedState, G = O !== null, de = e;
            if (H.isHidden = G, G && !vt && (de.mode & lt) !== _e) {
              Se = de;
              for (var ue = de.child; ue !== null; )
                Se = ue, n_(ue), ue = ue.sibling;
            }
            Wx(de, G);
          }
          return;
        }
        case $t: {
          il(t, e), Pl(e), u & ct && HR(e);
          return;
        }
        case ht:
          return;
        default: {
          il(t, e), Pl(e);
          return;
        }
      }
    }
    function Pl(e) {
      var t = e.flags;
      if (t & Mn) {
        try {
          Xx(e);
        } catch (a) {
          cn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & zn && (e.flags &= -4097);
    }
    function t_(e, t, a) {
      Vf = a, Pf = t, Se = e, PR(e, t, a), Vf = null, Pf = null;
    }
    function PR(e, t, a) {
      for (var i = (e.mode & lt) !== _e; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Me && i) {
          var f = u.memoizedState !== null, p = f || Tm;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || jr, _ = Tm, w = jr;
            Tm = p, jr = g, jr && !w && (Se = u, r_(u));
            for (var N = s; N !== null; )
              Se = N, PR(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Se = u, Tm = _, jr = w, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Sl) !== xe && s !== null ? (s.return = u, Se = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & Sl) !== xe) {
          var u = i.alternate;
          It(i);
          try {
            Ix(t, u, i, a);
          } catch (f) {
            cn(i, i.return, f);
          }
          mn();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function n_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case be:
          case Ne:
          case ot:
          case He: {
            if (t.mode & yt)
              try {
                Vl(), rl(dr, t, t.return);
              } finally {
                Hl(t);
              }
            else
              rl(dr, t, t.return);
            break;
          }
          case pe: {
            Bf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case le: {
            Bf(t, t.return);
            break;
          }
          case Me: {
            var u = t.memoizedState !== null;
            if (u) {
              BR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : BR(e);
      }
    }
    function BR(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function r_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Me) {
          var i = t.memoizedState !== null;
          if (i) {
            $R(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : $R(e);
      }
    }
    function $R(e) {
      for (; Se !== null; ) {
        var t = Se;
        It(t);
        try {
          Qx(t);
        } catch (i) {
          cn(t, t.return, i);
        }
        if (mn(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function a_(e, t, a, i) {
      Se = t, i_(t, e, a, i);
    }
    function i_(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & lr) !== xe && s !== null ? (s.return = u, Se = s) : l_(e, t, a, i);
      }
    }
    function l_(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & pa) !== xe) {
          It(u);
          try {
            u_(t, u, a, i);
          } catch (f) {
            cn(u, u.return, f);
          }
          mn();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function u_(e, t, a, i) {
      switch (t.tag) {
        case be:
        case Ne:
        case He: {
          if (t.mode & yt) {
            Yg();
            try {
              Ao(Ar | fr, t);
            } finally {
              $g(t);
            }
          } else
            Ao(Ar | fr, t);
          break;
        }
      }
    }
    function o_(e) {
      Se = e, s_();
    }
    function s_() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & qr) !== xe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, d_(u, e);
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
            Se = e;
          }
        }
        (e.subtreeFlags & lr) !== xe && t !== null ? (t.return = e, Se = t) : c_();
      }
    }
    function c_() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & pa) !== xe && (It(e), f_(e), mn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function f_(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          e.mode & yt ? (Yg(), rl(Ar | fr, e, e.return), $g(e)) : rl(Ar | fr, e, e.return);
          break;
        }
      }
    }
    function d_(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        It(a), v_(a, t), mn();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : p_(e);
      }
    }
    function p_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (UR(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function v_(e, t) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          e.mode & yt ? (Yg(), rl(Ar, e, t), $g(e)) : rl(Ar, e, t);
          break;
        }
      }
    }
    function h_(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          try {
            Ao(dr | fr, e);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function m_(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          try {
            Ao(Ar | fr, e);
          } catch (t) {
            cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function y_(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He: {
          try {
            rl(dr | fr, e, e.return);
          } catch (a) {
            cn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case be:
        case Ne:
        case He:
          try {
            rl(Ar | fr, e, e.return);
          } catch (t) {
            cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Np = Symbol.for;
      Np("selector.component"), Np("selector.has_pseudo_class"), Np("selector.role"), Np("selector.test_id"), Np("selector.text");
    }
    var S_ = [];
    function E_() {
      S_.forEach(function(e) {
        return e();
      });
    }
    var C_ = wt.ReactCurrentActQueue;
    function R_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function YR() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && C_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var T_ = Math.ceil, _S = wt.ReactCurrentDispatcher, bS = wt.ReactCurrentOwner, Vr = wt.ReactCurrentBatchConfig, ll = wt.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), IR = (
      /*               */
      1
    ), Pr = (
      /*                */
      2
    ), Di = (
      /*                */
      4
    ), Mu = 0, zp = 1, Zs = 2, xm = 3, Up = 4, QR = 5, DS = 6, Rt = hr, Ca = null, _n = null, mr = V, Bl = V, kS = bo(V), yr = Mu, Ap = null, _m = V, Fp = V, bm = V, jp = null, $a = null, OS = 0, WR = 500, GR = 1 / 0, w_ = 500, Nu = null;
    function Hp() {
      GR = Rn() + w_;
    }
    function qR() {
      return GR;
    }
    var Dm = !1, LS = null, $f = null, Js = !1, jo = null, Vp = V, MS = [], NS = null, x_ = 50, Pp = 0, zS = null, US = !1, km = !1, __ = 50, Yf = 0, Om = null, Bp = Bt, Lm = V, XR = !1;
    function Mm() {
      return Ca;
    }
    function Ra() {
      return (Rt & (Pr | Di)) !== hr ? Rn() : (Bp !== Bt || (Bp = Rn()), Bp);
    }
    function Ho(e) {
      var t = e.mode;
      if ((t & lt) === _e)
        return ze;
      if ((Rt & Pr) !== hr && mr !== V)
        return Jn(mr);
      var a = Cw() !== Ew;
      if (a) {
        if (Vr.transition !== null) {
          var i = Vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Lm === An && (Lm = Ld()), Lm;
      }
      var u = ma();
      if (u !== An)
        return u;
      var s = i1();
      return s;
    }
    function b_(e) {
      var t = e.mode;
      return (t & lt) === _e ? ze : $v();
    }
    function gr(e, t, a, i) {
      K_(), XR && S("useInsertionEffect must not schedule updates."), US && (km = !0), po(e, a, i), (Rt & Pr) !== V && e === Ca ? eb(t) : (wr && Iv(e, t, a), tb(t), e === Ca && ((Rt & Pr) === hr && (Fp = Ke(Fp, a)), yr === Up && Vo(e, mr)), Ya(e, i), a === ze && Rt === hr && (t.mode & lt) === _e && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ll.isBatchingLegacy && (Hp(), XE()));
    }
    function D_(e, t, a) {
      var i = e.current;
      i.lanes = t, po(e, t, a), Ya(e, a);
    }
    function k_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Pr) !== hr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      Vv(e, t);
      var i = Jr(e, e === Ca ? mr : V);
      if (i === V) {
        a !== null && d0(a), e.callbackNode = null, e.callbackPriority = An;
        return;
      }
      var u = pu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ll.current !== null && a !== BS)) {
        a == null && s !== ze && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && d0(a);
      var f;
      if (u === ze)
        e.tag === Do ? (ll.isBatchingLegacy !== null && (ll.didScheduleLegacyUpdate = !0), rw(JR.bind(null, e))) : qE(JR.bind(null, e)), ll.current !== null ? ll.current.push(ko) : u1(function() {
          (Rt & (Pr | Di)) === hr && ko();
        }), f = null;
      else {
        var p;
        switch (Wv(i)) {
          case ta:
            p = Ii;
            break;
          case Aa:
            p = ds;
            break;
          case or:
            p = uu;
            break;
          case Jc:
            p = ao;
            break;
          default:
            p = uu;
            break;
        }
        f = $S(p, KR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function KR(e, t) {
      if (Ww(), Bp = Bt, Lm = V, (Rt & (Pr | Di)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Uu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Jr(e, e === Ca ? mr : V);
      if (u === V)
        return null;
      var s = !ws(e, u) && !Bv(e, u) && !t, f = s ? H_(e, u) : zm(e, u);
      if (f !== Mu) {
        if (f === Zs) {
          var p = Ic(e);
          p !== V && (u = p, f = AS(e, p));
        }
        if (f === zp) {
          var v = Ap;
          throw ec(e, V), Vo(e, u), Ya(e, Rn()), v;
        }
        if (f === DS)
          Vo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !L_(g)) {
            if (f = zm(e, u), f === Zs) {
              var _ = Ic(e);
              _ !== V && (u = _, f = AS(e, _));
            }
            if (f === zp) {
              var w = Ap;
              throw ec(e, V), Vo(e, u), Ya(e, Rn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, O_(e, f, u);
        }
      }
      return Ya(e, Rn()), e.callbackNode === a ? KR.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = jp;
      if (hu(e)) {
        var i = ec(e, t);
        i.flags |= yn, X1(e.containerInfo);
      }
      var u = zm(e, t);
      if (u !== Zs) {
        var s = $a;
        $a = a, s !== null && ZR(s);
      }
      return u;
    }
    function ZR(e) {
      $a === null ? $a = e : $a.push.apply($a, e);
    }
    function O_(e, t, a) {
      switch (t) {
        case Mu:
        case zp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zs: {
          tc(e, $a, Nu);
          break;
        }
        case xm: {
          if (Vo(e, a), Qc(a) && // do not delay if we're inside an act() scope
          !p0()) {
            var i = OS + WR - Rn();
            if (i > 10) {
              var u = Jr(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!vu(s, a)) {
                Ra(), Xc(e, s);
                break;
              }
              e.timeoutHandle = Ny(tc.bind(null, e, $a, Nu), i);
              break;
            }
          }
          tc(e, $a, Nu);
          break;
        }
        case Up: {
          if (Vo(e, a), ry(a))
            break;
          if (!p0()) {
            var f = bd(e, a), p = f, v = Rn() - p, y = X_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ny(tc.bind(null, e, $a, Nu), y);
              break;
            }
          }
          tc(e, $a, Nu);
          break;
        }
        case QR: {
          tc(e, $a, Nu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function L_(e) {
      for (var t = e; ; ) {
        if (t.flags & Rc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ge(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Rc && v !== null) {
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
      t = xs(t, bm), t = xs(t, Fp), Nd(e, t);
    }
    function JR(e) {
      if (Gw(), (Rt & (Pr | Di)) !== hr)
        throw new Error("Should not already be working.");
      Uu();
      var t = Jr(e, V);
      if (!ea(t, ze))
        return Ya(e, Rn()), null;
      var a = zm(e, t);
      if (e.tag !== Do && a === Zs) {
        var i = Ic(e);
        i !== V && (t = i, a = AS(e, i));
      }
      if (a === zp) {
        var u = Ap;
        throw ec(e, V), Vo(e, t), Ya(e, Rn()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, tc(e, $a, Nu), Ya(e, Rn()), null;
    }
    function M_(e, t) {
      t !== V && (_s(e, Ke(t, ze)), Ya(e, Rn()), (Rt & (Pr | Di)) === hr && (Hp(), ko()));
    }
    function FS(e, t) {
      var a = Rt;
      Rt |= IR;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ll.isBatchingLegacy && (Hp(), XE());
      }
    }
    function N_(e, t, a, i, u) {
      var s = ma(), f = Vr.transition;
      try {
        return Vr.transition = null, $n(ta), e(t, a, i, u);
      } finally {
        $n(s), Vr.transition = f, Rt === hr && Hp();
      }
    }
    function zu(e) {
      jo !== null && jo.tag === Do && (Rt & (Pr | Di)) === hr && Uu();
      var t = Rt;
      Rt |= IR;
      var a = Vr.transition, i = ma();
      try {
        return Vr.transition = null, $n(ta), e ? e() : void 0;
      } finally {
        $n(i), Vr.transition = a, Rt = t, (Rt & (Pr | Di)) === hr && ko();
      }
    }
    function e0() {
      return (Rt & (Pr | Di)) !== hr;
    }
    function Nm(e, t) {
      aa(kS, Bl, e), Bl = Ke(Bl, t);
    }
    function jS(e) {
      Bl = kS.current, ra(kS, e);
    }
    function ec(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, l1(a)), _n !== null)
        for (var i = _n.return; i !== null; ) {
          var u = i.alternate;
          kR(u, i), i = i.return;
        }
      Ca = e;
      var s = nc(e.current, null);
      return _n = s, mr = Bl = t, yr = Mu, Ap = null, _m = V, Fp = V, bm = V, jp = null, $a = null, Dw(), Zi.discardPendingWarnings(), s;
    }
    function t0(e, t) {
      do {
        var a = _n;
        try {
          if ($h(), xC(), mn(), bS.current = null, a === null || a.return === null) {
            yr = zp, Ap = t, _n = null;
            return;
          }
          if ($e && a.mode & yt && gm(a, !0), Ve)
            if (Cl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              vs(a, i, mr);
            } else
              Ei(a, t, mr);
          rx(e, a.return, a, t, mr), i0(a);
        } catch (u) {
          t = u, _n === a && a !== null ? (a = a.return, _n = a) : a = _n;
          continue;
        }
        return;
      } while (!0);
    }
    function n0() {
      var e = _S.current;
      return _S.current = pm, e === null ? pm : e;
    }
    function r0(e) {
      _S.current = e;
    }
    function z_() {
      OS = Rn();
    }
    function $p(e) {
      _m = Ke(e, _m);
    }
    function U_() {
      yr === Mu && (yr = xm);
    }
    function HS() {
      (yr === Mu || yr === xm || yr === Zs) && (yr = Up), Ca !== null && (_l(_m) || _l(Fp)) && Vo(Ca, mr);
    }
    function A_(e) {
      yr !== Up && (yr = Zs), jp === null ? jp = [e] : jp.push(e);
    }
    function F_() {
      return yr === Mu;
    }
    function zm(e, t) {
      var a = Rt;
      Rt |= Pr;
      var i = n0();
      if (Ca !== e || mr !== t) {
        if (wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, mr), u.clear()), zd(e, t);
        }
        Nu = Zc(), ec(e, t);
      }
      Td(t);
      do
        try {
          j_();
          break;
        } catch (s) {
          t0(e, s);
        }
      while (!0);
      if ($h(), Rt = a, r0(i), _n !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return pn(), Ca = null, mr = V, yr;
    }
    function j_() {
      for (; _n !== null; )
        a0(_n);
    }
    function H_(e, t) {
      var a = Rt;
      Rt |= Pr;
      var i = n0();
      if (Ca !== e || mr !== t) {
        if (wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Yp(e, mr), u.clear()), zd(e, t);
        }
        Nu = Zc(), Hp(), ec(e, t);
      }
      Td(t);
      do
        try {
          V_();
          break;
        } catch (s) {
          t0(e, s);
        }
      while (!0);
      return $h(), r0(i), Rt = a, _n !== null ? (wd(), Mu) : (pn(), Ca = null, mr = V, yr);
    }
    function V_() {
      for (; _n !== null && !hd(); )
        a0(_n);
    }
    function a0(e) {
      var t = e.alternate;
      It(e);
      var a;
      (e.mode & yt) !== _e ? (Bg(e), a = VS(t, e, Bl), gm(e, !0)) : a = VS(t, e, Bl), mn(), e.memoizedProps = e.pendingProps, a === null ? i0(e) : _n = a, bS.current = null;
    }
    function i0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & iu) === xe) {
          It(t);
          var u = void 0;
          if ((t.mode & yt) === _e ? u = DR(a, t, Bl) : (Bg(t), u = DR(a, t, Bl), gm(t, !1)), mn(), u !== null) {
            _n = u;
            return;
          }
        } else {
          var s = Ux(a, t);
          if (s !== null) {
            s.flags &= Dv, _n = s;
            return;
          }
          if ((t.mode & yt) !== _e) {
            gm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= iu, i.subtreeFlags = xe, i.deletions = null;
          else {
            yr = DS, _n = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          _n = v;
          return;
        }
        t = i, _n = t;
      } while (t !== null);
      yr === Mu && (yr = QR);
    }
    function tc(e, t, a) {
      var i = ma(), u = Vr.transition;
      try {
        Vr.transition = null, $n(ta), P_(e, t, a, i);
      } finally {
        Vr.transition = u, $n(i);
      }
      return null;
    }
    function P_(e, t, a, i) {
      do
        Uu();
      while (jo !== null);
      if (Z_(), (Rt & (Pr | Di)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (zv(s), u === null)
        return Si(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = An;
      var f = Ke(u.lanes, u.childLanes);
      Yv(e, f), e === Ca && (Ca = null, _n = null, mr = V), ((u.subtreeFlags & lr) !== xe || (u.flags & lr) !== xe) && (Js || (Js = !0, NS = a, $S(uu, function() {
        return Uu(), null;
      })));
      var p = (u.subtreeFlags & (gl | ro | Sl | lr)) !== xe, v = (u.flags & (gl | ro | Sl | lr)) !== xe;
      if (p || v) {
        var y = Vr.transition;
        Vr.transition = null;
        var g = ma();
        $n(ta);
        var _ = Rt;
        Rt |= Di, bS.current = null, Vx(e, u), XC(), e_(e, u, s), JT(e.containerInfo), e.current = u, hs(s), t_(u, e, s), su(), Ov(), Rt = _, $n(g), Vr.transition = y;
      } else
        e.current = u, XC();
      var w = Js;
      if (Js ? (Js = !1, jo = e, Vp = s) : (Yf = 0, Om = null), f = e.pendingLanes, f === V && ($f = null), w || s0(e.current, !1), gd(u.stateNode, i), wr && e.memoizedUpdaters.clear(), E_(), Ya(e, Rn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], ae = j.stack, Le = j.digest;
          N(j.value, {
            componentStack: ae,
            digest: Le
          });
        }
      if (Dm) {
        Dm = !1;
        var Te = LS;
        throw LS = null, Te;
      }
      return ea(Vp, ze) && e.tag !== Do && Uu(), f = e.pendingLanes, ea(f, ze) ? (Qw(), e === zS ? Pp++ : (Pp = 0, zS = e)) : Pp = 0, ko(), Si(), null;
    }
    function Uu() {
      if (jo !== null) {
        var e = Wv(Vp), t = xr(or, e), a = Vr.transition, i = ma();
        try {
          return Vr.transition = null, $n(t), $_();
        } finally {
          $n(i), Vr.transition = a;
        }
      }
      return !1;
    }
    function B_(e) {
      MS.push(e), Js || (Js = !0, $S(uu, function() {
        return Uu(), null;
      }));
    }
    function $_() {
      if (jo === null)
        return !1;
      var e = NS;
      NS = null;
      var t = jo, a = Vp;
      if (jo = null, Vp = V, (Rt & (Pr | Di)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, km = !1, Rd(a);
      var i = Rt;
      Rt |= Di, o_(t.current), a_(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yx(t, f);
        }
      }
      uo(), s0(t.current, !0), Rt = i, ko(), km ? t === Om ? Yf++ : (Yf = 0, Om = t) : Yf = 0, US = !1, km = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function l0(e) {
      return $f !== null && $f.has(e);
    }
    function Y_(e) {
      $f === null ? $f = /* @__PURE__ */ new Set([e]) : $f.add(e);
    }
    function I_(e) {
      Dm || (Dm = !0, LS = e);
    }
    var Q_ = I_;
    function u0(e, t, a) {
      var i = Xs(a, t), u = aR(e, i, ze), s = Lo(e, u, ze), f = Ra();
      s !== null && (po(s, ze, f), Ya(s, f));
    }
    function cn(e, t, a) {
      if (Fx(a), Ip(!1), e.tag === Z) {
        u0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === Z) {
          u0(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !l0(s)) {
            var f = Xs(a, e), p = lS(i, f, ze), v = Lo(i, p, ze), y = Ra();
            v !== null && (po(v, ze, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function W_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      Xc(e, a), nb(e), Ca === e && vu(mr, a) && (yr === Up || yr === xm && Qc(mr) && Rn() - OS < WR ? ec(e, V) : bm = Ke(bm, a)), Ya(e, u);
    }
    function o0(e, t) {
      t === An && (t = b_(e));
      var a = Ra(), i = Pa(e, t);
      i !== null && (po(i, t, a), Ya(i, a));
    }
    function G_(e) {
      var t = e.memoizedState, a = An;
      t !== null && (a = t.retryLane), o0(e, a);
    }
    function q_(e, t) {
      var a = An, i;
      switch (e.tag) {
        case Ce:
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
      i !== null && i.delete(t), o0(e, a);
    }
    function X_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : T_(e / 1960) * 1960;
    }
    function K_() {
      if (Pp > x_)
        throw Pp = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Yf > __ && (Yf = 0, Om = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Z_() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function s0(e, t) {
      It(e), Um(e, Lr, y_), t && Um(e, yl, g_), Um(e, Lr, h_), t && Um(e, yl, m_), mn();
    }
    function Um(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== xe ? i = i.child : ((i.flags & t) !== xe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Am = null;
    function c0(e) {
      {
        if ((Rt & Pr) !== hr || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== Be && t !== Z && t !== pe && t !== be && t !== Ne && t !== ot && t !== He)
          return;
        var a = Pe(e) || "ReactComponent";
        if (Am !== null) {
          if (Am.has(a))
            return;
          Am.add(a);
        } else
          Am = /* @__PURE__ */ new Set([a]);
        var i = Xn;
        try {
          It(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? It(e) : mn();
        }
      }
    }
    var VS;
    {
      var J_ = null;
      VS = function(e, t, a) {
        var i = g0(J_, t);
        try {
          return TR(e, t, a);
        } catch (s) {
          if (fw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if ($h(), xC(), kR(e, t), g0(t, i), t.mode & yt && Bg(t), Ma(null, TR, null, e, t, a), od()) {
            var u = sd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var f0 = !1, PS;
    PS = /* @__PURE__ */ new Set();
    function eb(e) {
      if (Wr && !$w())
        switch (e.tag) {
          case be:
          case Ne:
          case He: {
            var t = _n && Pe(_n) || "Unknown", a = t;
            if (!PS.has(a)) {
              PS.add(a);
              var i = Pe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            f0 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), f0 = !0);
            break;
          }
        }
    }
    function Yp(e, t) {
      if (wr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Iv(e, i, t);
        });
      }
    }
    var BS = {};
    function $S(e, t) {
      {
        var a = ll.current;
        return a !== null ? (a.push(t), BS) : pd(e, t);
      }
    }
    function d0(e) {
      if (e !== BS)
        return vd(e);
    }
    function p0() {
      return ll.current !== null;
    }
    function tb(e) {
      {
        if (e.mode & lt) {
          if (!YR())
            return;
        } else if (!R_() || Rt !== hr || e.tag !== be && e.tag !== Ne && e.tag !== He)
          return;
        if (ll.current === null) {
          var t = Xn;
          try {
            It(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Pe(e));
          } finally {
            t ? It(e) : mn();
          }
        }
      }
    }
    function nb(e) {
      e.tag !== Do && YR() && ll.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Ip(e) {
      XR = e;
    }
    var ki = null, If = null, rb = function(e) {
      ki = e;
    };
    function Qf(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return Qf(e);
    }
    function IS(e) {
      {
        if (ki === null)
          return e;
        var t = ki(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Y,
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
    function v0(e, t) {
      {
        if (ki === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case be: {
            (typeof i == "function" || s === Ye) && (u = !0);
            break;
          }
          case Ne: {
            (s === Y || s === Ye) && (u = !0);
            break;
          }
          case ot:
          case He: {
            (s === at || s === Ye) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ki(a);
          if (f !== void 0 && f === ki(i))
            return !0;
        }
        return !1;
      }
    }
    function h0(e) {
      {
        if (ki === null || typeof WeakSet != "function")
          return;
        If === null && (If = /* @__PURE__ */ new WeakSet()), If.add(e);
      }
    }
    var ab = function(e, t) {
      {
        if (ki === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Uu(), zu(function() {
          QS(e.current, i, a);
        });
      }
    }, ib = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Uu(), zu(function() {
          Qp(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case be:
          case He:
          case pe:
            v = p;
            break;
          case Ne:
            v = p.render;
            break;
        }
        if (ki === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = ki(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === pe ? g = !0 : y = !0));
        }
        if (If !== null && (If.has(e) || i !== null && If.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Pa(e, ze);
          w !== null && gr(w, e, ze, Bt);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var lb = function(e, t) {
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
          case be:
          case He:
          case pe:
            p = f;
            break;
          case Ne:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ub(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function ub(e, t) {
      {
        var a = ob(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case le:
              t.add(i.stateNode);
              return;
            case Fe:
              t.add(i.stateNode.containerInfo);
              return;
            case Z:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ob(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === le)
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
        var m0 = Object.preventExtensions({});
      } catch {
        GS = !0;
      }
    }
    function sb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = xe, this.subtreeFlags = xe, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new sb(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cb(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function fb(e) {
      if (typeof e == "function")
        return qS(e) ? pe : be;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Y)
          return Ne;
        if (t === at)
          return ot;
      }
      return Be;
    }
    function nc(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = xe, a.subtreeFlags = xe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Un, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Be:
        case be:
        case He:
          a.type = Qf(e.type);
          break;
        case pe:
          a.type = YS(e.type);
          break;
        case Ne:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function db(e, t) {
      e.flags &= Un | Mn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = xe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = xe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function pb(e, t, a) {
      var i;
      return e === Nh ? (i = lt, t === !0 && (i |= qe, i |= qt)) : i = _e, wr && (i |= yt), li(Z, null, null, i);
    }
    function XS(e, t, a, i, u, s) {
      var f = Be, p = e;
      if (typeof e == "function")
        qS(e) ? (f = pe, p = YS(p)) : p = Qf(p);
      else if (typeof e == "string")
        f = le;
      else
        e: switch (e) {
          case Yr:
            return Po(a.children, u, s, t);
          case si:
            f = Hn, u |= qe, (u & lt) !== _e && (u |= qt);
            break;
          case ci:
            return vb(a, u, s, t);
          case ne:
            return hb(a, u, s, t);
          case ie:
            return mb(a, u, s, t);
          case En:
            return y0(a, u, s, t);
          case nn:
          case st:
          case on:
          case Cr:
          case Je:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ni:
                  f = rt;
                  break e;
                case R:
                  f = rn;
                  break e;
                case Y:
                  f = Ne, p = IS(p);
                  break e;
                case at:
                  f = ot;
                  break e;
                case Ye:
                  f = Sn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Pe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = li(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function KS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = XS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Po(e, t, a, i) {
      var u = li(ut, e, i, t);
      return u.lanes = a, u;
    }
    function vb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(bt, e, i, t | yt);
      return u.elementType = ci, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hb(e, t, a, i) {
      var u = li(Ce, e, i, t);
      return u.elementType = ne, u.lanes = a, u;
    }
    function mb(e, t, a, i) {
      var u = li($t, e, i, t);
      return u.elementType = ie, u.lanes = a, u;
    }
    function y0(e, t, a, i) {
      var u = li(Me, e, i, t);
      u.elementType = En, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = li(we, e, null, t);
      return i.lanes = a, i;
    }
    function yb() {
      var e = li(le, null, null, _e);
      return e.elementType = "DELETED", e;
    }
    function gb(e) {
      var t = li(fn, null, null, _e);
      return t.stateNode = e, t;
    }
    function JS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(Fe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function g0(e, t) {
      return e === null && (e = li(Be, null, null, _e)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Sb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = An, this.eventTimes = qc(V), this.expirationTimes = qc(Bt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = qc(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _d; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Nh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Do:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function S0(e, t, a, i, u, s, f, p, v, y) {
      var g = new Sb(e, t, a, p, v), _ = pb(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return dg(_), g;
    }
    var eE = "18.3.1";
    function Eb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return oa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: da,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var tE, nE;
    tE = !1, nE = {};
    function E0(e) {
      if (!e)
        return ii;
      var t = no(e), a = nw(t);
      if (t.tag === pe) {
        var i = t.type;
        if (Ul(i))
          return WE(t, i, a);
      }
      return a;
    }
    function Cb(e, t) {
      {
        var a = no(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Kr(a);
        if (u === null)
          return null;
        if (u.mode & qe) {
          var s = Pe(a) || "Component";
          if (!nE[s]) {
            nE[s] = !0;
            var f = Xn;
            try {
              It(u), a.mode & qe ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? It(f) : mn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function C0(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return S0(e, t, v, y, a, i, u, s, f);
    }
    function R0(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = S0(a, i, g, e, u, s, f, p, v);
      _.context = E0(null);
      var w = _.current, N = Ra(), U = Ho(w), j = Ou(N, U);
      return j.callback = t ?? null, Lo(w, j, U), D_(_, U, N), _;
    }
    function Qp(e, t, a, i) {
      yd(t, e);
      var u = t.current, s = Ra(), f = Ho(u);
      _c(f);
      var p = E0(a);
      t.context === null ? t.context = p : t.pendingContext = p, Wr && Xn !== null && !tE && (tE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Pe(Xn) || "Unknown"));
      var v = Ou(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Lo(u, v, f);
      return y !== null && (gr(y, u, f, s), Gh(y, u, f)), f;
    }
    function Fm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case le:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Rb(e) {
      switch (e.tag) {
        case Z: {
          var t = e.stateNode;
          if (hu(t)) {
            var a = Pv(t);
            M_(t, a);
          }
          break;
        }
        case Ce: {
          zu(function() {
            var u = Pa(e, ze);
            if (u !== null) {
              var s = Ra();
              gr(u, e, ze, s);
            }
          });
          var i = ze;
          rE(e, i);
          break;
        }
      }
    }
    function T0(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Md(a.retryLane, t));
    }
    function rE(e, t) {
      T0(e, t);
      var a = e.alternate;
      a && T0(a, t);
    }
    function Tb(e) {
      if (e.tag === Ce) {
        var t = fo, a = Pa(e, t);
        if (a !== null) {
          var i = Ra();
          gr(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function wb(e) {
      if (e.tag === Ce) {
        var t = Ho(e), a = Pa(e, t);
        if (a !== null) {
          var i = Ra();
          gr(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function w0(e) {
      var t = ti(e);
      return t === null ? null : t.stateNode;
    }
    var x0 = function(e) {
      return null;
    };
    function xb(e) {
      return x0(e);
    }
    var _0 = function(e) {
      return !1;
    };
    function _b(e) {
      return _0(e);
    }
    var b0 = null, D0 = null, k0 = null, O0 = null, L0 = null, M0 = null, N0 = null, z0 = null, U0 = null;
    {
      var A0 = function(e, t, a) {
        var i = t[a], u = Xe(e) ? e.slice() : Ge({}, e);
        return a + 1 === t.length ? (Xe(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = A0(e[i], t, a + 1), u);
      }, F0 = function(e, t) {
        return A0(e, t, 0);
      }, j0 = function(e, t, a, i) {
        var u = t[i], s = Xe(e) ? e.slice() : Ge({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Xe(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = j0(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, H0 = function(e, t, a) {
        if (t.length !== a.length) {
          xt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              xt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return j0(e, t, a, 0);
      }, V0 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Xe(e) ? e.slice() : Ge({}, e);
        return s[u] = V0(e[u], t, a + 1, i), s;
      }, P0 = function(e, t, a) {
        return V0(e, t, 0, a);
      }, aE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      b0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = P0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ge({}, e.memoizedProps);
          var f = Pa(e, ze);
          f !== null && gr(f, e, ze, Bt);
        }
      }, D0 = function(e, t, a) {
        var i = aE(e, t);
        if (i !== null) {
          var u = F0(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ge({}, e.memoizedProps);
          var s = Pa(e, ze);
          s !== null && gr(s, e, ze, Bt);
        }
      }, k0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = H0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ge({}, e.memoizedProps);
          var f = Pa(e, ze);
          f !== null && gr(f, e, ze, Bt);
        }
      }, O0 = function(e, t, a) {
        e.pendingProps = P0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, ze);
        i !== null && gr(i, e, ze, Bt);
      }, L0 = function(e, t) {
        e.pendingProps = F0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Pa(e, ze);
        a !== null && gr(a, e, ze, Bt);
      }, M0 = function(e, t, a) {
        e.pendingProps = H0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, ze);
        i !== null && gr(i, e, ze, Bt);
      }, N0 = function(e) {
        var t = Pa(e, ze);
        t !== null && gr(t, e, ze, Bt);
      }, z0 = function(e) {
        x0 = e;
      }, U0 = function(e) {
        _0 = e;
      };
    }
    function bb(e) {
      var t = Kr(e);
      return t === null ? null : t.stateNode;
    }
    function Db(e) {
      return null;
    }
    function kb() {
      return Xn;
    }
    function Ob(e) {
      var t = e.findFiberByHostInstance, a = wt.ReactCurrentDispatcher;
      return md({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: b0,
        overrideHookStateDeletePath: D0,
        overrideHookStateRenamePath: k0,
        overrideProps: O0,
        overridePropsDeletePath: L0,
        overridePropsRenamePath: M0,
        setErrorHandler: z0,
        setSuspenseHandler: U0,
        scheduleUpdate: N0,
        currentDispatcherRef: a,
        findHostInstanceByFiber: bb,
        findFiberByHostInstance: t || Db,
        // React Refresh
        findHostInstancesForRefresh: lb,
        scheduleRefresh: ab,
        scheduleRoot: ib,
        setRefreshHandler: rb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: eE
      });
    }
    var B0 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function iE(e) {
      this._internalRoot = e;
    }
    jm.prototype.render = iE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Hm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Ln) {
          var i = w0(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Qp(e, t, null, null);
    }, jm.prototype.unmount = iE.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        e0() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), zu(function() {
          Qp(null, e, null, null);
        }), BE(t);
      }
    };
    function Lb(e, t) {
      if (!Hm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $0(e);
      var a = !1, i = !1, u = "", s = B0;
      t != null && (t.hydrate ? xt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ir && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = C0(e, Nh, null, a, i, u, s);
      _h(f.current, e);
      var p = e.nodeType === Ln ? e.parentNode : e;
      return Zd(p), new iE(f);
    }
    function jm(e) {
      this._internalRoot = e;
    }
    function Mb(e) {
      e && Zv(e);
    }
    jm.prototype.unstable_scheduleHydration = Mb;
    function Nb(e, t, a) {
      if (!Hm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $0(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = B0;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = R0(t, null, e, Nh, i, s, f, p, v);
      if (_h(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Fw(y, _);
        }
      return new jm(y);
    }
    function Hm(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Bi || e.nodeType === Xo));
    }
    function Wp(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Bi || e.nodeType === Xo || e.nodeType === Ln && e.nodeValue === " react-mount-point-unstable "));
    }
    function $0(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), sp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var zb = wt.ReactCurrentOwner, Y0;
    Y0 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ln) {
        var t = w0(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = lE(e), u = !!(i && _o(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function lE(e) {
      return e ? e.nodeType === Bi ? e.documentElement : e.firstChild : null;
    }
    function I0() {
    }
    function Ub(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Fm(f);
            s.call(w);
          };
        }
        var f = R0(
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
          I0
        );
        e._reactRootContainer = f, _h(f.current, e);
        var p = e.nodeType === Ln ? e.parentNode : e;
        return Zd(p), zu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Fm(g);
            y.call(w);
          };
        }
        var g = C0(
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
          I0
        );
        e._reactRootContainer = g, _h(g.current, e);
        var _ = e.nodeType === Ln ? e.parentNode : e;
        return Zd(_), zu(function() {
          Qp(t, g, a, i);
        }), g;
      }
    }
    function Ab(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      Y0(a), Ab(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ub(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Fm(f);
            p.call(v);
          };
        }
        Qp(t, f, e, u);
      }
      return Fm(f);
    }
    var Q0 = !1;
    function Fb(e) {
      {
        Q0 || (Q0 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = zb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ct(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : Cb(e, "findDOMNode");
    }
    function jb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function Hb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = sp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function Vb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !au(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var W0 = !1;
    function Pb(e) {
      if (W0 || (W0 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Wp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = sp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = lE(e), i = a && !_o(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return zu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, BE(e);
          });
        }), !0;
      } else {
        {
          var u = lE(e), s = !!(u && _o(u)), f = e.nodeType === Gr && Wp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    iy(Rb), Ad(Tb), ly(wb), ef(ma), Gv(Qv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), is($T), _v(FS, N_, zu);
    function Bb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Hm(t))
        throw new Error("Target container is not a DOM element.");
      return Eb(e, t, null, a);
    }
    function $b(e, t, a, i) {
      return Vb(e, t, a, i);
    }
    var uE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [_o, Tf, bh, ld, Zu, FS]
    };
    function Yb(e, t) {
      return uE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Lb(e, t);
    }
    function Ib(e, t, a) {
      return uE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Nb(e, t, a);
    }
    function Qb(e) {
      return e0() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), zu(e);
    }
    var Wb = Ob({
      findFiberByHostInstance: Ps,
      bundleType: 1,
      version: eE,
      rendererPackageName: "react-dom"
    });
    if (!Wb && Qn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var G0 = window.location.protocol;
      /^(https?|file):$/.test(G0) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (G0 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uE, Qa.createPortal = Bb, Qa.createRoot = Yb, Qa.findDOMNode = Fb, Qa.flushSync = Qb, Qa.hydrate = jb, Qa.hydrateRoot = Ib, Qa.render = Hb, Qa.unmountComponentAtNode = Pb, Qa.unstable_batchedUpdates = FS, Qa.unstable_renderSubtreeIntoContainer = $b, Qa.version = eE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var uT = {};
function oT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (uT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oT);
    } catch (ee) {
      console.error(ee);
    }
  }
}
uT.NODE_ENV === "production" ? (oT(), dE.exports = aD()) : dE.exports = iD();
var lD = dE.exports, pE, uD = {}, Bm = lD;
if (uD.NODE_ENV === "production")
  pE = Bm.createRoot, Bm.hydrateRoot;
else {
  var aT = Bm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  pE = function(ee, oe) {
    aT.usingClientEntryPoint = !0;
    try {
      return Bm.createRoot(ee, oe);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
function oD({}) {
  window.Shopify.currency.active;
  const ee = {
    layout: "horizontal",
    bundles: [
      {
        id: 1,
        description: "Buy one product",
        highlighted: !1,
        price: 100,
        discountedPrice: 80,
        discount: 20,
        discount_type: "percentage"
      },
      {
        id: 2,
        description: "Buy two products",
        highlighted: !0,
        price: 300,
        discountedPrice: 240,
        discount: 20,
        discount_type: "amount"
      },
      {
        id: 3,
        description: "Buy three products",
        highlighted: !1,
        price: 500,
        discountedPrice: 240,
        discount: 20,
        discount_type: "percentage"
      }
    ]
  };
  return /* @__PURE__ */ xa.jsxs("div", { className: "barn2-discount-bundles", children: [
    /* @__PURE__ */ xa.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ xa.jsx("span", { children: "Buy" }) }),
    /* @__PURE__ */ xa.jsx("div", { className: `barn2-discounts-list barn2-dbs-layout-${ee.layout}`, children: ee.bundles.map((oe) => /* @__PURE__ */ xa.jsxs("div", { className: `${oe.highlighted ? "highlighted" : ""} barn2-discount-bundle`, children: [
      oe.highlighted && /* @__PURE__ */ xa.jsx("span", { className: "barn2-highlighted-text", children: "Most popular" }),
      /* @__PURE__ */ xa.jsxs("div", { className: "barn2-dbs-top", children: [
        /* @__PURE__ */ xa.jsx("span", { className: "barn2-input-circle" }),
        /* @__PURE__ */ xa.jsx("div", { className: "barn2-dbs-text-block", children: /* @__PURE__ */ xa.jsx("h4", { className: "barn2-dbs-bundle-title", children: oe.description }) })
      ] }),
      /* @__PURE__ */ xa.jsxs("div", { className: "barn2-dbs-bottom", children: [
        /* @__PURE__ */ xa.jsx("span", { className: "barn2-dbs-price", children: "$150" }),
        /* @__PURE__ */ xa.jsx("span", { className: "barn2-dbs-regular-price", children: "$450" })
      ] })
    ] }, oe.id)) })
  ] });
}
function sD() {
  return /* @__PURE__ */ xa.jsx(oD, {});
}
const iT = document.getElementById("barn2_discounts");
iT && pE(iT).render(/* @__PURE__ */ xa.jsx(sD, {}));
