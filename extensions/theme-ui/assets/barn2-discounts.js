function Z_($) {
  return $ && $.__esModule && Object.prototype.hasOwnProperty.call($, "default") ? $.default : $;
}
var cE = { exports: {} }, Kp = {}, fE = { exports: {} }, wt = {};
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
function eD() {
  if (q0) return wt;
  q0 = 1;
  var $ = Symbol.for("react.element"), W = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), Pe = Symbol.for("react.strict_mode"), rt = Symbol.for("react.profiler"), ut = Symbol.for("react.provider"), ke = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), $e = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), re = Symbol.iterator;
  function j(_) {
    return _ === null || typeof _ != "object" ? null : (_ = re && _[re] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var ee = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, G = Object.assign, oe = {};
  function Ie(_, I, Me) {
    this.props = _, this.context = I, this.refs = oe, this.updater = Me || ee;
  }
  Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(_, I) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, I, "setState");
  }, Ie.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function ln() {
  }
  ln.prototype = Ie.prototype;
  function Oe(_, I, Me) {
    this.props = _, this.context = I, this.refs = oe, this.updater = Me || ee;
  }
  var xe = Oe.prototype = new ln();
  xe.constructor = Oe, G(xe, Ie.prototype), xe.isPureReactComponent = !0;
  var je = Array.isArray, mt = Object.prototype.hasOwnProperty, Ee = { current: null }, ct = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(_, I, Me) {
    var We, qe = {}, dt = null, xt = null;
    if (I != null) for (We in I.ref !== void 0 && (xt = I.ref), I.key !== void 0 && (dt = "" + I.key), I) mt.call(I, We) && !ct.hasOwnProperty(We) && (qe[We] = I[We]);
    var Je = arguments.length - 2;
    if (Je === 1) qe.children = Me;
    else if (1 < Je) {
      for (var Tt = Array(Je), Bt = 0; Bt < Je; Bt++) Tt[Bt] = arguments[Bt + 2];
      qe.children = Tt;
    }
    if (_ && _.defaultProps) for (We in Je = _.defaultProps, Je) qe[We] === void 0 && (qe[We] = Je[We]);
    return { $$typeof: $, type: _, key: dt, ref: xt, props: qe, _owner: Ee.current };
  }
  function Cn(_, I) {
    return { $$typeof: $, type: _.type, key: I, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function zt(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === $;
  }
  function pn(_) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(Me) {
      return I[Me];
    });
  }
  var It = /\/+/g;
  function Rt(_, I) {
    return typeof _ == "object" && _ !== null && _.key != null ? pn("" + _.key) : I.toString(36);
  }
  function Fe(_, I, Me, We, qe) {
    var dt = typeof _;
    (dt === "undefined" || dt === "boolean") && (_ = null);
    var xt = !1;
    if (_ === null) xt = !0;
    else switch (dt) {
      case "string":
      case "number":
        xt = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case $:
          case W:
            xt = !0;
        }
    }
    if (xt) return xt = _, qe = qe(xt), _ = We === "" ? "." + Rt(xt, 0) : We, je(qe) ? (Me = "", _ != null && (Me = _.replace(It, "$&/") + "/"), Fe(qe, I, Me, "", function(Bt) {
      return Bt;
    })) : qe != null && (zt(qe) && (qe = Cn(qe, Me + (!qe.key || xt && xt.key === qe.key ? "" : ("" + qe.key).replace(It, "$&/") + "/") + _)), I.push(qe)), 1;
    if (xt = 0, We = We === "" ? "." : We + ":", je(_)) for (var Je = 0; Je < _.length; Je++) {
      dt = _[Je];
      var Tt = We + Rt(dt, Je);
      xt += Fe(dt, I, Me, Tt, qe);
    }
    else if (Tt = j(_), typeof Tt == "function") for (_ = Tt.call(_), Je = 0; !(dt = _.next()).done; ) dt = dt.value, Tt = We + Rt(dt, Je++), xt += Fe(dt, I, Me, Tt, qe);
    else if (dt === "object") throw I = String(_), Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
    return xt;
  }
  function Ft(_, I, Me) {
    if (_ == null) return _;
    var We = [], qe = 0;
    return Fe(_, We, "", "", function(dt) {
      return I.call(Me, dt, qe++);
    }), We;
  }
  function Et(_) {
    if (_._status === -1) {
      var I = _._result;
      I = I(), I.then(function(Me) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = Me);
      }, function(Me) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = Me);
      }), _._status === -1 && (_._status = 0, _._result = I);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var ft = { current: null }, Y = { transition: null }, Ce = { ReactCurrentDispatcher: ft, ReactCurrentBatchConfig: Y, ReactCurrentOwner: Ee };
  function se() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return wt.Children = { map: Ft, forEach: function(_, I, Me) {
    Ft(_, function() {
      I.apply(this, arguments);
    }, Me);
  }, count: function(_) {
    var I = 0;
    return Ft(_, function() {
      I++;
    }), I;
  }, toArray: function(_) {
    return Ft(_, function(I) {
      return I;
    }) || [];
  }, only: function(_) {
    if (!zt(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, wt.Component = Ie, wt.Fragment = M, wt.Profiler = rt, wt.PureComponent = Oe, wt.StrictMode = Pe, wt.Suspense = $e, wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ce, wt.act = se, wt.cloneElement = function(_, I, Me) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var We = G({}, _.props), qe = _.key, dt = _.ref, xt = _._owner;
    if (I != null) {
      if (I.ref !== void 0 && (dt = I.ref, xt = Ee.current), I.key !== void 0 && (qe = "" + I.key), _.type && _.type.defaultProps) var Je = _.type.defaultProps;
      for (Tt in I) mt.call(I, Tt) && !ct.hasOwnProperty(Tt) && (We[Tt] = I[Tt] === void 0 && Je !== void 0 ? Je[Tt] : I[Tt]);
    }
    var Tt = arguments.length - 2;
    if (Tt === 1) We.children = Me;
    else if (1 < Tt) {
      Je = Array(Tt);
      for (var Bt = 0; Bt < Tt; Bt++) Je[Bt] = arguments[Bt + 2];
      We.children = Je;
    }
    return { $$typeof: $, type: _.type, key: qe, ref: dt, props: We, _owner: xt };
  }, wt.createContext = function(_) {
    return _ = { $$typeof: ke, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: ut, _context: _ }, _.Consumer = _;
  }, wt.createElement = Qe, wt.createFactory = function(_) {
    var I = Qe.bind(null, _);
    return I.type = _, I;
  }, wt.createRef = function() {
    return { current: null };
  }, wt.forwardRef = function(_) {
    return { $$typeof: S, render: _ };
  }, wt.isValidElement = zt, wt.lazy = function(_) {
    return { $$typeof: X, _payload: { _status: -1, _result: _ }, _init: Et };
  }, wt.memo = function(_, I) {
    return { $$typeof: pe, type: _, compare: I === void 0 ? null : I };
  }, wt.startTransition = function(_) {
    var I = Y.transition;
    Y.transition = {};
    try {
      _();
    } finally {
      Y.transition = I;
    }
  }, wt.unstable_act = se, wt.useCallback = function(_, I) {
    return ft.current.useCallback(_, I);
  }, wt.useContext = function(_) {
    return ft.current.useContext(_);
  }, wt.useDebugValue = function() {
  }, wt.useDeferredValue = function(_) {
    return ft.current.useDeferredValue(_);
  }, wt.useEffect = function(_, I) {
    return ft.current.useEffect(_, I);
  }, wt.useId = function() {
    return ft.current.useId();
  }, wt.useImperativeHandle = function(_, I, Me) {
    return ft.current.useImperativeHandle(_, I, Me);
  }, wt.useInsertionEffect = function(_, I) {
    return ft.current.useInsertionEffect(_, I);
  }, wt.useLayoutEffect = function(_, I) {
    return ft.current.useLayoutEffect(_, I);
  }, wt.useMemo = function(_, I) {
    return ft.current.useMemo(_, I);
  }, wt.useReducer = function(_, I, Me) {
    return ft.current.useReducer(_, I, Me);
  }, wt.useRef = function(_) {
    return ft.current.useRef(_);
  }, wt.useState = function(_) {
    return ft.current.useState(_);
  }, wt.useSyncExternalStore = function(_, I, Me) {
    return ft.current.useSyncExternalStore(_, I, Me);
  }, wt.useTransition = function() {
    return ft.current.useTransition();
  }, wt.version = "18.3.1", wt;
}
var Jp = { exports: {} };
Jp.exports;
var K0;
function tD() {
  return K0 || (K0 = 1, function($, W) {
    var M = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    M.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Pe = "18.3.1", rt = Symbol.for("react.element"), ut = Symbol.for("react.portal"), ke = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), X = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ln = Symbol.iterator, Oe = "@@iterator";
      function xe(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ln && h[ln] || h[Oe];
        return typeof C == "function" ? C : null;
      }
      var je = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, mt = {
        transition: null
      }, Ee = {
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
      }, Qe = {}, Cn = null;
      function zt(h) {
        Cn = h;
      }
      Qe.setExtraStackFrame = function(h) {
        Cn = h;
      }, Qe.getCurrentStack = null, Qe.getStackAddendum = function() {
        var h = "";
        Cn && (h += Cn);
        var C = Qe.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var pn = !1, It = !1, Rt = !1, Fe = !1, Ft = !1, Et = {
        ReactCurrentDispatcher: je,
        ReactCurrentBatchConfig: mt,
        ReactCurrentOwner: ct
      };
      Et.ReactDebugCurrentFrame = Qe, Et.ReactCurrentActQueue = Ee;
      function ft(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          Ce("warn", h, N);
        }
      }
      function Y(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          Ce("error", h, N);
        }
      }
      function Ce(h, C, N) {
        {
          var F = Et.ReactDebugCurrentFrame, ne = F.getStackAddendum();
          ne !== "" && (C += "%s", N = N.concat([ne]));
          var Se = N.map(function(ve) {
            return String(ve);
          });
          Se.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Se);
        }
      }
      var se = {};
      function _(h, C) {
        {
          var N = h.constructor, F = N && (N.displayName || N.name) || "ReactClass", ne = F + "." + C;
          if (se[ne])
            return;
          Y("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), se[ne] = !0;
        }
      }
      var I = {
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
        enqueueForceUpdate: function(h, C, N) {
          _(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, N, F) {
          _(h, "replaceState");
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
        enqueueSetState: function(h, C, N, F) {
          _(h, "setState");
        }
      }, Me = Object.assign, We = {};
      Object.freeze(We);
      function qe(h, C, N) {
        this.props = h, this.context = C, this.refs = We, this.updater = N || I;
      }
      qe.prototype.isReactComponent = {}, qe.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, qe.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var dt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, xt = function(h, C) {
          Object.defineProperty(qe.prototype, h, {
            get: function() {
              ft("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Je in dt)
          dt.hasOwnProperty(Je) && xt(Je, dt[Je]);
      }
      function Tt() {
      }
      Tt.prototype = qe.prototype;
      function Bt(h, C, N) {
        this.props = h, this.context = C, this.refs = We, this.updater = N || I;
      }
      var kn = Bt.prototype = new Tt();
      kn.constructor = Bt, Me(kn, qe.prototype), kn.isPureReactComponent = !0;
      function Gn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ir = Array.isArray;
      function On(h) {
        return ir(h);
      }
      function Cr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Bn(h) {
        try {
          return Ln(h), !1;
        } catch {
          return !0;
        }
      }
      function Ln(h) {
        return "" + h;
      }
      function ca(h) {
        if (Bn(h))
          return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(h)), Ln(h);
      }
      function Ga(h, C, N) {
        var F = h.displayName;
        if (F)
          return F;
        var ne = C.displayName || C.name || "";
        return ne !== "" ? N + "(" + ne + ")" : N;
      }
      function kr(h) {
        return h.displayName || "Context";
      }
      function $n(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ke:
            return "Fragment";
          case ut:
            return "Portal";
          case $e:
            return "Profiler";
          case S:
            return "StrictMode";
          case j:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case X:
              var C = h;
              return kr(C) + ".Consumer";
            case pe:
              var N = h;
              return kr(N._context) + ".Provider";
            case re:
              return Ga(h, h.render, "ForwardRef");
            case G:
              var F = h.displayName || null;
              return F !== null ? F : $n(h.type) || "Memo";
            case oe: {
              var ne = h, Se = ne._payload, ve = ne._init;
              try {
                return $n(ve(Se));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var qn = Object.prototype.hasOwnProperty, Kn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Rr, qa, Nn;
      Nn = {};
      function lr(h) {
        if (qn.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Ir(h) {
        if (qn.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Li(h, C) {
        var N = function() {
          Rr || (Rr = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function fa(h, C) {
        var N = function() {
          qa || (qa = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function ae(h) {
        if (typeof h.ref == "string" && ct.current && h.__self && ct.current.stateNode !== h.__self) {
          var C = $n(ct.current.type);
          Nn[C] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Nn[C] = !0);
        }
      }
      var Ue = function(h, C, N, F, ne, Se, ve) {
        var Ve = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: rt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: ve,
          // Record the component responsible for creating this element.
          _owner: Se
        };
        return Ve._store = {}, Object.defineProperty(Ve._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ve, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ve, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ne
        }), Object.freeze && (Object.freeze(Ve.props), Object.freeze(Ve)), Ve;
      };
      function lt(h, C, N) {
        var F, ne = {}, Se = null, ve = null, Ve = null, st = null;
        if (C != null) {
          lr(C) && (ve = C.ref, ae(C)), Ir(C) && (ca(C.key), Se = "" + C.key), Ve = C.__self === void 0 ? null : C.__self, st = C.__source === void 0 ? null : C.__source;
          for (F in C)
            qn.call(C, F) && !Kn.hasOwnProperty(F) && (ne[F] = C[F]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          ne.children = N;
        else if (Ht > 1) {
          for (var Gt = Array(Ht), qt = 0; qt < Ht; qt++)
            Gt[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(Gt), ne.children = Gt;
        }
        if (h && h.defaultProps) {
          var at = h.defaultProps;
          for (F in at)
            ne[F] === void 0 && (ne[F] = at[F]);
        }
        if (Se || ve) {
          var en = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Se && Li(ne, en), ve && fa(ne, en);
        }
        return Ue(h, Se, ve, Ve, st, ct.current, ne);
      }
      function Ut(h, C) {
        var N = Ue(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function un(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, ne = Me({}, h.props), Se = h.key, ve = h.ref, Ve = h._self, st = h._source, Ht = h._owner;
        if (C != null) {
          lr(C) && (ve = C.ref, Ht = ct.current), Ir(C) && (ca(C.key), Se = "" + C.key);
          var Gt;
          h.type && h.type.defaultProps && (Gt = h.type.defaultProps);
          for (F in C)
            qn.call(C, F) && !Kn.hasOwnProperty(F) && (C[F] === void 0 && Gt !== void 0 ? ne[F] = Gt[F] : ne[F] = C[F]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          ne.children = N;
        else if (qt > 1) {
          for (var at = Array(qt), en = 0; en < qt; en++)
            at[en] = arguments[en + 2];
          ne.children = at;
        }
        return Ue(h.type, Se, ve, Ve, st, Ht, ne);
      }
      function on(h) {
        return typeof h == "object" && h !== null && h.$$typeof === rt;
      }
      var sn = ".", Xn = ":";
      function rn(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(ne) {
          return N[ne];
        });
        return "$" + F;
      }
      var Qt = !1, At = /\/+/g;
      function da(h) {
        return h.replace(At, "$&/");
      }
      function _a(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (ca(h.key), rn("" + h.key)) : C.toString(36);
      }
      function Da(h, C, N, F, ne) {
        var Se = typeof h;
        (Se === "undefined" || Se === "boolean") && (h = null);
        var ve = !1;
        if (h === null)
          ve = !0;
        else
          switch (Se) {
            case "string":
            case "number":
              ve = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case rt:
                case ut:
                  ve = !0;
              }
          }
        if (ve) {
          var Ve = h, st = ne(Ve), Ht = F === "" ? sn + _a(Ve, 0) : F;
          if (On(st)) {
            var Gt = "";
            Ht != null && (Gt = da(Ht) + "/"), Da(st, C, Gt, "", function(Xf) {
              return Xf;
            });
          } else st != null && (on(st) && (st.key && (!Ve || Ve.key !== st.key) && ca(st.key), st = Ut(
            st,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (st.key && (!Ve || Ve.key !== st.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + st.key) + "/"
            ) : "") + Ht
          )), C.push(st));
          return 1;
        }
        var qt, at, en = 0, Tn = F === "" ? sn : F + Xn;
        if (On(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            qt = h[Zl], at = Tn + _a(qt, Zl), en += Da(qt, C, N, at, ne);
        else {
          var qo = xe(h);
          if (typeof qo == "function") {
            var Vi = h;
            qo === Vi.entries && (Qt || ft("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var eu = qo.call(Vi), Ko, Kf = 0; !(Ko = eu.next()).done; )
              qt = Ko.value, at = Tn + _a(qt, Kf++), en += Da(qt, C, N, at, ne);
          } else if (Se === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return en;
      }
      function Ni(h, C, N) {
        if (h == null)
          return h;
        var F = [], ne = 0;
        return Da(h, F, "", "", function(Se) {
          return C.call(N, Se, ne++);
        }), F;
      }
      function Il(h) {
        var C = 0;
        return Ni(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, N) {
        Ni(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function Mi(h) {
        return Ni(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!on(h))
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
          $$typeof: pe,
          _context: C
        };
        var N = !1, F = !1, ne = !1;
        {
          var Se = {
            $$typeof: X,
            _context: C
          };
          Object.defineProperties(Se, {
            Provider: {
              get: function() {
                return F || (F = !0, Y("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ve) {
                C.Provider = ve;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ve) {
                C._currentValue = ve;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ve) {
                C._currentValue2 = ve;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ve) {
                C._threadCount = ve;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, Y("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ve) {
                ne || (ft("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ve), ne = !0);
              }
            }
          }), C.Consumer = Se;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, ur = 0, va = 1, Qr = 2;
      function ci(h) {
        if (h._status === pa) {
          var C = h._result, N = C();
          if (N.then(function(Se) {
            if (h._status === ur || h._status === pa) {
              var ve = h;
              ve._status = va, ve._result = Se;
            }
          }, function(Se) {
            if (h._status === ur || h._status === pa) {
              var ve = h;
              ve._status = Qr, ve._result = Se;
            }
          }), h._status === pa) {
            var F = h;
            F._status = ur, F._result = N;
          }
        }
        if (h._status === va) {
          var ne = h._result;
          return ne === void 0 && Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ne), "default" in ne || Y(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ne), ne.default;
        } else
          throw h._result;
      }
      function fi(h) {
        var C = {
          // We use these fields to store the result.
          _status: pa,
          _result: h
        }, N = {
          $$typeof: oe,
          _payload: C,
          _init: ci
        };
        {
          var F, ne;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Se) {
                Y("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Se, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ne;
              },
              set: function(Se) {
                Y("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ne = Se, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function zi(h) {
        h != null && h.$$typeof === G ? Y("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Y("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Y("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Y("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: re,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(F) {
              N = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Q(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ke || h === $e || Ft || h === S || h === j || h === ee || Fe || h === Ie || pn || It || Rt || typeof h == "object" && h !== null && (h.$$typeof === oe || h.$$typeof === G || h.$$typeof === pe || h.$$typeof === X || h.$$typeof === re || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ue(h, C) {
        Q(h) || Y("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: G,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(ne) {
              F = ne, !h.name && !h.displayName && (h.displayName = ne);
            }
          });
        }
        return N;
      }
      function fe() {
        var h = je.current;
        return h === null && Y(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function pt(h) {
        var C = fe();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? Y("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && Y("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Ke(h) {
        var C = fe();
        return C.useState(h);
      }
      function yt(h, C, N) {
        var F = fe();
        return F.useReducer(h, C, N);
      }
      function ot(h) {
        var C = fe();
        return C.useRef(h);
      }
      function Rn(h, C) {
        var N = fe();
        return N.useEffect(h, C);
      }
      function an(h, C) {
        var N = fe();
        return N.useInsertionEffect(h, C);
      }
      function cn(h, C) {
        var N = fe();
        return N.useLayoutEffect(h, C);
      }
      function Tr(h, C) {
        var N = fe();
        return N.useCallback(h, C);
      }
      function Ka(h, C) {
        var N = fe();
        return N.useMemo(h, C);
      }
      function jt(h, C, N) {
        var F = fe();
        return F.useImperativeHandle(h, C, N);
      }
      function vn(h, C) {
        {
          var N = fe();
          return N.useDebugValue(h, C);
        }
      }
      function et() {
        var h = fe();
        return h.useTransition();
      }
      function di(h) {
        var C = fe();
        return C.useDeferredValue(h);
      }
      function Ui() {
        var h = fe();
        return h.useId();
      }
      function ac(h, C, N) {
        var F = fe();
        return F.useSyncExternalStore(h, C, N);
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
      function Gr() {
        {
          if (Ai--, Ai === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Me({}, h, {
                value: ol
              }),
              info: Me({}, h, {
                value: Wr
              }),
              warn: Me({}, h, {
                value: $o
              }),
              error: Me({}, h, {
                value: Or
              }),
              group: Me({}, h, {
                value: Yo
              }),
              groupCollapsed: Me({}, h, {
                value: ic
              }),
              groupEnd: Me({}, h, {
                value: lc
              })
            });
          }
          Ai < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = Et.ReactCurrentDispatcher, cl;
      function Fu(h, C, N) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (ne) {
              var F = ne.stack.trim().match(/\n( *(at )?)/);
              cl = F && F[1] || "";
            }
          return `
` + cl + h;
        }
      }
      var Fi = !1, Gl;
      {
        var ql = typeof WeakMap == "function" ? WeakMap : Map;
        Gl = new ql();
      }
      function fl(h, C) {
        if (!h || Fi)
          return "";
        {
          var N = Gl.get(h);
          if (N !== void 0)
            return N;
        }
        var F;
        Fi = !0;
        var ne = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Se;
        Se = pi.current, pi.current = null, sl();
        try {
          if (C) {
            var ve = function() {
              throw Error();
            };
            if (Object.defineProperty(ve.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ve, []);
              } catch (Tn) {
                F = Tn;
              }
              Reflect.construct(h, [], ve);
            } else {
              try {
                ve.call();
              } catch (Tn) {
                F = Tn;
              }
              h.call(ve.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Tn) {
              F = Tn;
            }
            h();
          }
        } catch (Tn) {
          if (Tn && F && typeof Tn.stack == "string") {
            for (var Ve = Tn.stack.split(`
`), st = F.stack.split(`
`), Ht = Ve.length - 1, Gt = st.length - 1; Ht >= 1 && Gt >= 0 && Ve[Ht] !== st[Gt]; )
              Gt--;
            for (; Ht >= 1 && Gt >= 0; Ht--, Gt--)
              if (Ve[Ht] !== st[Gt]) {
                if (Ht !== 1 || Gt !== 1)
                  do
                    if (Ht--, Gt--, Gt < 0 || Ve[Ht] !== st[Gt]) {
                      var qt = `
` + Ve[Ht].replace(" at new ", " at ");
                      return h.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", h.displayName)), typeof h == "function" && Gl.set(h, qt), qt;
                    }
                  while (Ht >= 1 && Gt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = Se, Gr(), Error.prepareStackTrace = ne;
        }
        var at = h ? h.displayName || h.name : "", en = at ? Fu(at) : "";
        return typeof h == "function" && Gl.set(h, en), en;
      }
      function Io(h, C, N) {
        return fl(h, !1);
      }
      function Qo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function _t(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Qo(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case j:
            return Fu("Suspense");
          case ee:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case re:
              return Io(h.render);
            case G:
              return _t(h.type, C, N);
            case oe: {
              var F = h, ne = F._payload, Se = F._init;
              try {
                return _t(Se(ne), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Wo = {}, Hu = Et.ReactDebugCurrentFrame;
      function Dt(h) {
        if (h) {
          var C = h._owner, N = _t(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(N);
        } else
          Hu.setExtraStackFrame(null);
      }
      function uc(h, C, N, F, ne) {
        {
          var Se = Function.call.bind(qn);
          for (var ve in h)
            if (Se(h, ve)) {
              var Ve = void 0;
              try {
                if (typeof h[ve] != "function") {
                  var st = Error((F || "React class") + ": " + N + " type `" + ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ve] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw st.name = "Invariant Violation", st;
                }
                Ve = h[ve](C, ve, F, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                Ve = Ht;
              }
              Ve && !(Ve instanceof Error) && (Dt(ne), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", N, ve, typeof Ve), Dt(null)), Ve instanceof Error && !(Ve.message in Wo) && (Wo[Ve.message] = !0, Dt(ne), Y("Failed %s type: %s", N, Ve.message), Dt(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, N = _t(h.type, h._source, C ? C.type : null);
          zt(N);
        } else
          zt(null);
      }
      var Ge;
      Ge = !1;
      function Kl() {
        if (ct.current) {
          var h = $n(ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Jn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function qr(h) {
        return h != null ? Jn(h.__source) : "";
      }
      var Lr = {};
      function hi(h) {
        var C = Kl();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function gn(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = hi(C);
          if (!Lr[N]) {
            Lr[N] = !0;
            var F = "";
            h && h._owner && h._owner !== ct.current && (F = " It was passed a child from " + $n(h._owner.type) + "."), vi(h), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, F), vi(null);
          }
        }
      }
      function Wt(h, C) {
        if (typeof h == "object") {
          if (On(h))
            for (var N = 0; N < h.length; N++) {
              var F = h[N];
              on(F) && gn(F, C);
            }
          else if (on(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ne = xe(h);
            if (typeof ne == "function" && ne !== h.entries)
              for (var Se = ne.call(h), ve; !(ve = Se.next()).done; )
                on(ve.value) && gn(ve.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === re || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === G))
            N = C.propTypes;
          else
            return;
          if (N) {
            var F = $n(C);
            uc(N, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Ge) {
            Ge = !0;
            var ne = $n(C);
            Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ka(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var F = C[N];
            if (F !== "children" && F !== "key") {
              vi(h), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), Y("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function br(h, C, N) {
        var F = Q(h);
        if (!F) {
          var ne = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = qr(C);
          Se ? ne += Se : ne += Kl();
          var ve;
          h === null ? ve = "null" : On(h) ? ve = "array" : h !== void 0 && h.$$typeof === rt ? (ve = "<" + ($n(h.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : ve = typeof h, Y("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ve, ne);
        }
        var Ve = lt.apply(this, arguments);
        if (Ve == null)
          return Ve;
        if (F)
          for (var st = 2; st < arguments.length; st++)
            Wt(arguments[st], h);
        return h === ke ? ka(Ve) : Xa(Ve), Ve;
      }
      var Nr = !1;
      function qf(h) {
        var C = br.bind(null, h);
        return C.type = h, Nr || (Nr = !0, ft("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return ft("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, N) {
        for (var F = un.apply(this, arguments), ne = 2; ne < arguments.length; ne++)
          Wt(arguments[ne], F.type);
        return Xa(F), F;
      }
      function Xl(h, C) {
        var N = mt.transition;
        mt.transition = {};
        var F = mt.transition;
        mt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (mt.transition = N, N === null && F._updatedFibers) {
            var ne = F._updatedFibers.size;
            ne > 10 && ft("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Jl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = $ && $[C];
            Bu = N.call($, "timers").setImmediate;
          } catch {
            Bu = function(ne) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && Y("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Se = new MessageChannel();
              Se.port1.onmessage = ne, Se.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, La = !1;
      function dl(h) {
        {
          var C = Oa;
          Oa++, Ee.current === null && (Ee.current = []);
          var N = Ee.isBatchingLegacy, F;
          try {
            if (Ee.isBatchingLegacy = !0, F = h(), !N && Ee.didScheduleLegacyUpdate) {
              var ne = Ee.current;
              ne !== null && (Ee.didScheduleLegacyUpdate = !1, Pi(ne));
            }
          } catch (at) {
            throw Hi(C), at;
          } finally {
            Ee.isBatchingLegacy = N;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Se = F, ve = !1, Ve = {
              then: function(at, en) {
                ve = !0, Se.then(function(Tn) {
                  Hi(C), Oa === 0 ? $u(Tn, at, en) : at(Tn);
                }, function(Tn) {
                  Hi(C), en(Tn);
                });
              }
            };
            return !La && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ve || (La = !0, Y("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ve;
          } else {
            var st = F;
            if (Hi(C), Oa === 0) {
              var Ht = Ee.current;
              Ht !== null && (Pi(Ht), Ee.current = null);
              var Gt = {
                then: function(at, en) {
                  Ee.current === null ? (Ee.current = [], $u(st, at, en)) : at(st);
                }
              };
              return Gt;
            } else {
              var qt = {
                then: function(at, en) {
                  at(st);
                }
              };
              return qt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Oa - 1 && Y("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function $u(h, C, N) {
        {
          var F = Ee.current;
          if (F !== null)
            try {
              Pi(F), Jl(function() {
                F.length === 0 ? (Ee.current = null, C(h)) : $u(h, C, N);
              });
            } catch (ne) {
              N(ne);
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
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            pl = !1;
          }
        }
      }
      var Yu = br, Go = Pu, Na = qf, Iu = {
        map: Ni,
        forEach: Ql,
        count: Il,
        toArray: Mi,
        only: Wl
      };
      W.Children = Iu, W.Component = qe, W.Fragment = ke, W.Profiler = $e, W.PureComponent = Bt, W.StrictMode = S, W.Suspense = j, W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Et, W.act = dl, W.cloneElement = Go, W.createContext = si, W.createElement = Yu, W.createFactory = Na, W.createRef = Gn, W.forwardRef = zi, W.isValidElement = on, W.lazy = fi, W.memo = ue, W.startTransition = Xl, W.unstable_act = dl, W.useCallback = Tr, W.useContext = pt, W.useDebugValue = vn, W.useDeferredValue = di, W.useEffect = Rn, W.useId = Ui, W.useImperativeHandle = jt, W.useInsertionEffect = an, W.useLayoutEffect = cn, W.useMemo = Ka, W.useReducer = yt, W.useRef = ot, W.useState = Ke, W.useSyncExternalStore = ac, W.useTransition = et, W.version = Pe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var nD = {};
nD.NODE_ENV === "production" ? fE.exports = eD() : fE.exports = tD();
var Vn = fE.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X0;
function rD() {
  if (X0) return Kp;
  X0 = 1;
  var $ = Vn, W = Symbol.for("react.element"), M = Symbol.for("react.fragment"), Pe = Object.prototype.hasOwnProperty, rt = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ut = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ke(S, $e, pe) {
    var X, re = {}, j = null, ee = null;
    pe !== void 0 && (j = "" + pe), $e.key !== void 0 && (j = "" + $e.key), $e.ref !== void 0 && (ee = $e.ref);
    for (X in $e) Pe.call($e, X) && !ut.hasOwnProperty(X) && (re[X] = $e[X]);
    if (S && S.defaultProps) for (X in $e = S.defaultProps, $e) re[X] === void 0 && (re[X] = $e[X]);
    return { $$typeof: W, type: S, key: j, ref: ee, props: re, _owner: rt.current };
  }
  return Kp.Fragment = M, Kp.jsx = ke, Kp.jsxs = ke, Kp;
}
var Xp = {}, J0;
function aD() {
  if (J0) return Xp;
  J0 = 1;
  var $ = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return $.NODE_ENV !== "production" && function() {
    var W = Vn, M = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), rt = Symbol.for("react.fragment"), ut = Symbol.for("react.strict_mode"), ke = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), $e = Symbol.for("react.context"), pe = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), oe = Symbol.iterator, Ie = "@@iterator";
    function ln(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = oe && R[oe] || R[Ie];
      return typeof Q == "function" ? Q : null;
    }
    var Oe = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function xe(R) {
      {
        for (var Q = arguments.length, ue = new Array(Q > 1 ? Q - 1 : 0), fe = 1; fe < Q; fe++)
          ue[fe - 1] = arguments[fe];
        je("error", R, ue);
      }
    }
    function je(R, Q, ue) {
      {
        var fe = Oe.ReactDebugCurrentFrame, pt = fe.getStackAddendum();
        pt !== "" && (Q += "%s", ue = ue.concat([pt]));
        var Ke = ue.map(function(yt) {
          return String(yt);
        });
        Ke.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, Ke);
      }
    }
    var mt = !1, Ee = !1, ct = !1, Qe = !1, Cn = !1, zt;
    zt = Symbol.for("react.module.reference");
    function pn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === rt || R === ke || Cn || R === ut || R === X || R === re || Qe || R === G || mt || Ee || ct || typeof R == "object" && R !== null && (R.$$typeof === ee || R.$$typeof === j || R.$$typeof === S || R.$$typeof === $e || R.$$typeof === pe || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === zt || R.getModuleId !== void 0));
    }
    function It(R, Q, ue) {
      var fe = R.displayName;
      if (fe)
        return fe;
      var pt = Q.displayName || Q.name || "";
      return pt !== "" ? ue + "(" + pt + ")" : ue;
    }
    function Rt(R) {
      return R.displayName || "Context";
    }
    function Fe(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && xe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case rt:
          return "Fragment";
        case Pe:
          return "Portal";
        case ke:
          return "Profiler";
        case ut:
          return "StrictMode";
        case X:
          return "Suspense";
        case re:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case $e:
            var Q = R;
            return Rt(Q) + ".Consumer";
          case S:
            var ue = R;
            return Rt(ue._context) + ".Provider";
          case pe:
            return It(R, R.render, "ForwardRef");
          case j:
            var fe = R.displayName || null;
            return fe !== null ? fe : Fe(R.type) || "Memo";
          case ee: {
            var pt = R, Ke = pt._payload, yt = pt._init;
            try {
              return Fe(yt(Ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ft = Object.assign, Et = 0, ft, Y, Ce, se, _, I, Me;
    function We() {
    }
    We.__reactDisabledLog = !0;
    function qe() {
      {
        if (Et === 0) {
          ft = console.log, Y = console.info, Ce = console.warn, se = console.error, _ = console.group, I = console.groupCollapsed, Me = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: We,
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
        Et++;
      }
    }
    function dt() {
      {
        if (Et--, Et === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ft({}, R, {
              value: ft
            }),
            info: Ft({}, R, {
              value: Y
            }),
            warn: Ft({}, R, {
              value: Ce
            }),
            error: Ft({}, R, {
              value: se
            }),
            group: Ft({}, R, {
              value: _
            }),
            groupCollapsed: Ft({}, R, {
              value: I
            }),
            groupEnd: Ft({}, R, {
              value: Me
            })
          });
        }
        Et < 0 && xe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xt = Oe.ReactCurrentDispatcher, Je;
    function Tt(R, Q, ue) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (pt) {
            var fe = pt.stack.trim().match(/\n( *(at )?)/);
            Je = fe && fe[1] || "";
          }
        return `
` + Je + R;
      }
    }
    var Bt = !1, kn;
    {
      var Gn = typeof WeakMap == "function" ? WeakMap : Map;
      kn = new Gn();
    }
    function ir(R, Q) {
      if (!R || Bt)
        return "";
      {
        var ue = kn.get(R);
        if (ue !== void 0)
          return ue;
      }
      var fe;
      Bt = !0;
      var pt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ke;
      Ke = xt.current, xt.current = null, qe();
      try {
        if (Q) {
          var yt = function() {
            throw Error();
          };
          if (Object.defineProperty(yt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(yt, []);
            } catch (vn) {
              fe = vn;
            }
            Reflect.construct(R, [], yt);
          } else {
            try {
              yt.call();
            } catch (vn) {
              fe = vn;
            }
            R.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (vn) {
            fe = vn;
          }
          R();
        }
      } catch (vn) {
        if (vn && fe && typeof vn.stack == "string") {
          for (var ot = vn.stack.split(`
`), Rn = fe.stack.split(`
`), an = ot.length - 1, cn = Rn.length - 1; an >= 1 && cn >= 0 && ot[an] !== Rn[cn]; )
            cn--;
          for (; an >= 1 && cn >= 0; an--, cn--)
            if (ot[an] !== Rn[cn]) {
              if (an !== 1 || cn !== 1)
                do
                  if (an--, cn--, cn < 0 || ot[an] !== Rn[cn]) {
                    var Tr = `
` + ot[an].replace(" at new ", " at ");
                    return R.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", R.displayName)), typeof R == "function" && kn.set(R, Tr), Tr;
                  }
                while (an >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        Bt = !1, xt.current = Ke, dt(), Error.prepareStackTrace = pt;
      }
      var Ka = R ? R.displayName || R.name : "", jt = Ka ? Tt(Ka) : "";
      return typeof R == "function" && kn.set(R, jt), jt;
    }
    function On(R, Q, ue) {
      return ir(R, !1);
    }
    function Cr(R) {
      var Q = R.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Bn(R, Q, ue) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ir(R, Cr(R));
      if (typeof R == "string")
        return Tt(R);
      switch (R) {
        case X:
          return Tt("Suspense");
        case re:
          return Tt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case pe:
            return On(R.render);
          case j:
            return Bn(R.type, Q, ue);
          case ee: {
            var fe = R, pt = fe._payload, Ke = fe._init;
            try {
              return Bn(Ke(pt), Q, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var Ln = Object.prototype.hasOwnProperty, ca = {}, Ga = Oe.ReactDebugCurrentFrame;
    function kr(R) {
      if (R) {
        var Q = R._owner, ue = Bn(R.type, R._source, Q ? Q.type : null);
        Ga.setExtraStackFrame(ue);
      } else
        Ga.setExtraStackFrame(null);
    }
    function $n(R, Q, ue, fe, pt) {
      {
        var Ke = Function.call.bind(Ln);
        for (var yt in R)
          if (Ke(R, yt)) {
            var ot = void 0;
            try {
              if (typeof R[yt] != "function") {
                var Rn = Error((fe || "React class") + ": " + ue + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rn.name = "Invariant Violation", Rn;
              }
              ot = R[yt](Q, yt, fe, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (an) {
              ot = an;
            }
            ot && !(ot instanceof Error) && (kr(pt), xe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", ue, yt, typeof ot), kr(null)), ot instanceof Error && !(ot.message in ca) && (ca[ot.message] = !0, kr(pt), xe("Failed %s type: %s", ue, ot.message), kr(null));
          }
      }
    }
    var qn = Array.isArray;
    function Kn(R) {
      return qn(R);
    }
    function Rr(R) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, ue = Q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ue;
      }
    }
    function qa(R) {
      try {
        return Nn(R), !1;
      } catch {
        return !0;
      }
    }
    function Nn(R) {
      return "" + R;
    }
    function lr(R) {
      if (qa(R))
        return xe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(R)), Nn(R);
    }
    var Ir = Oe.ReactCurrentOwner, Li = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fa, ae;
    function Ue(R) {
      if (Ln.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function lt(R) {
      if (Ln.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ut(R, Q) {
      typeof R.ref == "string" && Ir.current;
    }
    function un(R, Q) {
      {
        var ue = function() {
          fa || (fa = !0, xe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function on(R, Q) {
      {
        var ue = function() {
          ae || (ae = !0, xe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ue.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var sn = function(R, Q, ue, fe, pt, Ke, yt) {
      var ot = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: M,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: ue,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: Ke
      };
      return ot._store = {}, Object.defineProperty(ot._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ot, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(ot, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pt
      }), Object.freeze && (Object.freeze(ot.props), Object.freeze(ot)), ot;
    };
    function Xn(R, Q, ue, fe, pt) {
      {
        var Ke, yt = {}, ot = null, Rn = null;
        ue !== void 0 && (lr(ue), ot = "" + ue), lt(Q) && (lr(Q.key), ot = "" + Q.key), Ue(Q) && (Rn = Q.ref, Ut(Q, pt));
        for (Ke in Q)
          Ln.call(Q, Ke) && !Li.hasOwnProperty(Ke) && (yt[Ke] = Q[Ke]);
        if (R && R.defaultProps) {
          var an = R.defaultProps;
          for (Ke in an)
            yt[Ke] === void 0 && (yt[Ke] = an[Ke]);
        }
        if (ot || Rn) {
          var cn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ot && un(yt, cn), Rn && on(yt, cn);
        }
        return sn(R, ot, Rn, pt, fe, Ir.current, yt);
      }
    }
    var rn = Oe.ReactCurrentOwner, Qt = Oe.ReactDebugCurrentFrame;
    function At(R) {
      if (R) {
        var Q = R._owner, ue = Bn(R.type, R._source, Q ? Q.type : null);
        Qt.setExtraStackFrame(ue);
      } else
        Qt.setExtraStackFrame(null);
    }
    var da;
    da = !1;
    function _a(R) {
      return typeof R == "object" && R !== null && R.$$typeof === M;
    }
    function Da() {
      {
        if (rn.current) {
          var R = Fe(rn.current.type);
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
        var Q = Da();
        if (!Q) {
          var ue = typeof R == "string" ? R : R.displayName || R.name;
          ue && (Q = `

Check the top-level render call using <` + ue + ">.");
        }
        return Q;
      }
    }
    function Mi(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ue = Ql(Q);
        if (Il[ue])
          return;
        Il[ue] = !0;
        var fe = "";
        R && R._owner && R._owner !== rn.current && (fe = " It was passed a child from " + Fe(R._owner.type) + "."), At(R), xe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, fe), At(null);
      }
    }
    function Wl(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (Kn(R))
          for (var ue = 0; ue < R.length; ue++) {
            var fe = R[ue];
            _a(fe) && Mi(fe, Q);
          }
        else if (_a(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var pt = ln(R);
          if (typeof pt == "function" && pt !== R.entries)
            for (var Ke = pt.call(R), yt; !(yt = Ke.next()).done; )
              _a(yt.value) && Mi(yt.value, Q);
        }
      }
    }
    function si(R) {
      {
        var Q = R.type;
        if (Q == null || typeof Q == "string")
          return;
        var ue;
        if (typeof Q == "function")
          ue = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === pe || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === j))
          ue = Q.propTypes;
        else
          return;
        if (ue) {
          var fe = Fe(Q);
          $n(ue, R.props, "prop", fe, R);
        } else if (Q.PropTypes !== void 0 && !da) {
          da = !0;
          var pt = Fe(Q);
          xe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pt || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && xe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(R) {
      {
        for (var Q = Object.keys(R.props), ue = 0; ue < Q.length; ue++) {
          var fe = Q[ue];
          if (fe !== "children" && fe !== "key") {
            At(R), xe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), At(null);
            break;
          }
        }
        R.ref !== null && (At(R), xe("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    var ur = {};
    function va(R, Q, ue, fe, pt, Ke) {
      {
        var yt = pn(R);
        if (!yt) {
          var ot = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ot += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rn = Ni();
          Rn ? ot += Rn : ot += Da();
          var an;
          R === null ? an = "null" : Kn(R) ? an = "array" : R !== void 0 && R.$$typeof === M ? (an = "<" + (Fe(R.type) || "Unknown") + " />", ot = " Did you accidentally export a JSX literal instead of a component?") : an = typeof R, xe("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", an, ot);
        }
        var cn = Xn(R, Q, ue, pt, Ke);
        if (cn == null)
          return cn;
        if (yt) {
          var Tr = Q.children;
          if (Tr !== void 0)
            if (fe)
              if (Kn(Tr)) {
                for (var Ka = 0; Ka < Tr.length; Ka++)
                  Wl(Tr[Ka], R);
                Object.freeze && Object.freeze(Tr);
              } else
                xe("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Tr, R);
        }
        if (Ln.call(Q, "key")) {
          var jt = Fe(R), vn = Object.keys(Q).filter(function(Ui) {
            return Ui !== "key";
          }), et = vn.length > 0 ? "{key: someKey, " + vn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[jt + et]) {
            var di = vn.length > 0 ? "{" + vn.join(": ..., ") + ": ...}" : "{}";
            xe(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, jt, di, jt), ur[jt + et] = !0;
          }
        }
        return R === rt ? pa(cn) : si(cn), cn;
      }
    }
    function Qr(R, Q, ue) {
      return va(R, Q, ue, !0);
    }
    function ci(R, Q, ue) {
      return va(R, Q, ue, !1);
    }
    var fi = ci, zi = Qr;
    Xp.Fragment = rt, Xp.jsx = fi, Xp.jsxs = zi;
  }(), Xp;
}
var iD = {};
iD.NODE_ENV === "production" ? cE.exports = rD() : cE.exports = aD();
var nt = cE.exports, dE = { exports: {} }, Qa = {}, Bm = { exports: {} }, oE = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z0;
function lD() {
  return Z0 || (Z0 = 1, function($) {
    function W(Y, Ce) {
      var se = Y.length;
      Y.push(Ce);
      e: for (; 0 < se; ) {
        var _ = se - 1 >>> 1, I = Y[_];
        if (0 < rt(I, Ce)) Y[_] = Ce, Y[se] = I, se = _;
        else break e;
      }
    }
    function M(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function Pe(Y) {
      if (Y.length === 0) return null;
      var Ce = Y[0], se = Y.pop();
      if (se !== Ce) {
        Y[0] = se;
        e: for (var _ = 0, I = Y.length, Me = I >>> 1; _ < Me; ) {
          var We = 2 * (_ + 1) - 1, qe = Y[We], dt = We + 1, xt = Y[dt];
          if (0 > rt(qe, se)) dt < I && 0 > rt(xt, qe) ? (Y[_] = xt, Y[dt] = se, _ = dt) : (Y[_] = qe, Y[We] = se, _ = We);
          else if (dt < I && 0 > rt(xt, se)) Y[_] = xt, Y[dt] = se, _ = dt;
          else break e;
        }
      }
      return Ce;
    }
    function rt(Y, Ce) {
      var se = Y.sortIndex - Ce.sortIndex;
      return se !== 0 ? se : Y.id - Ce.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ut = performance;
      $.unstable_now = function() {
        return ut.now();
      };
    } else {
      var ke = Date, S = ke.now();
      $.unstable_now = function() {
        return ke.now() - S;
      };
    }
    var $e = [], pe = [], X = 1, re = null, j = 3, ee = !1, G = !1, oe = !1, Ie = typeof setTimeout == "function" ? setTimeout : null, ln = typeof clearTimeout == "function" ? clearTimeout : null, Oe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function xe(Y) {
      for (var Ce = M(pe); Ce !== null; ) {
        if (Ce.callback === null) Pe(pe);
        else if (Ce.startTime <= Y) Pe(pe), Ce.sortIndex = Ce.expirationTime, W($e, Ce);
        else break;
        Ce = M(pe);
      }
    }
    function je(Y) {
      if (oe = !1, xe(Y), !G) if (M($e) !== null) G = !0, Et(mt);
      else {
        var Ce = M(pe);
        Ce !== null && ft(je, Ce.startTime - Y);
      }
    }
    function mt(Y, Ce) {
      G = !1, oe && (oe = !1, ln(Qe), Qe = -1), ee = !0;
      var se = j;
      try {
        for (xe(Ce), re = M($e); re !== null && (!(re.expirationTime > Ce) || Y && !pn()); ) {
          var _ = re.callback;
          if (typeof _ == "function") {
            re.callback = null, j = re.priorityLevel;
            var I = _(re.expirationTime <= Ce);
            Ce = $.unstable_now(), typeof I == "function" ? re.callback = I : re === M($e) && Pe($e), xe(Ce);
          } else Pe($e);
          re = M($e);
        }
        if (re !== null) var Me = !0;
        else {
          var We = M(pe);
          We !== null && ft(je, We.startTime - Ce), Me = !1;
        }
        return Me;
      } finally {
        re = null, j = se, ee = !1;
      }
    }
    var Ee = !1, ct = null, Qe = -1, Cn = 5, zt = -1;
    function pn() {
      return !($.unstable_now() - zt < Cn);
    }
    function It() {
      if (ct !== null) {
        var Y = $.unstable_now();
        zt = Y;
        var Ce = !0;
        try {
          Ce = ct(!0, Y);
        } finally {
          Ce ? Rt() : (Ee = !1, ct = null);
        }
      } else Ee = !1;
    }
    var Rt;
    if (typeof Oe == "function") Rt = function() {
      Oe(It);
    };
    else if (typeof MessageChannel < "u") {
      var Fe = new MessageChannel(), Ft = Fe.port2;
      Fe.port1.onmessage = It, Rt = function() {
        Ft.postMessage(null);
      };
    } else Rt = function() {
      Ie(It, 0);
    };
    function Et(Y) {
      ct = Y, Ee || (Ee = !0, Rt());
    }
    function ft(Y, Ce) {
      Qe = Ie(function() {
        Y($.unstable_now());
      }, Ce);
    }
    $.unstable_IdlePriority = 5, $.unstable_ImmediatePriority = 1, $.unstable_LowPriority = 4, $.unstable_NormalPriority = 3, $.unstable_Profiling = null, $.unstable_UserBlockingPriority = 2, $.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, $.unstable_continueExecution = function() {
      G || ee || (G = !0, Et(mt));
    }, $.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Cn = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, $.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, $.unstable_getFirstCallbackNode = function() {
      return M($e);
    }, $.unstable_next = function(Y) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var Ce = 3;
          break;
        default:
          Ce = j;
      }
      var se = j;
      j = Ce;
      try {
        return Y();
      } finally {
        j = se;
      }
    }, $.unstable_pauseExecution = function() {
    }, $.unstable_requestPaint = function() {
    }, $.unstable_runWithPriority = function(Y, Ce) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var se = j;
      j = Y;
      try {
        return Ce();
      } finally {
        j = se;
      }
    }, $.unstable_scheduleCallback = function(Y, Ce, se) {
      var _ = $.unstable_now();
      switch (typeof se == "object" && se !== null ? (se = se.delay, se = typeof se == "number" && 0 < se ? _ + se : _) : se = _, Y) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = se + I, Y = { id: X++, callback: Ce, priorityLevel: Y, startTime: se, expirationTime: I, sortIndex: -1 }, se > _ ? (Y.sortIndex = se, W(pe, Y), M($e) === null && Y === M(pe) && (oe ? (ln(Qe), Qe = -1) : oe = !0, ft(je, se - _))) : (Y.sortIndex = I, W($e, Y), G || ee || (G = !0, Et(mt))), Y;
    }, $.unstable_shouldYield = pn, $.unstable_wrapCallback = function(Y) {
      var Ce = j;
      return function() {
        var se = j;
        j = Ce;
        try {
          return Y.apply(this, arguments);
        } finally {
          j = se;
        }
      };
    };
  }(oE)), oE;
}
var sE = {}, eT;
function uD() {
  return eT || (eT = 1, function($) {
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
      var M = !1, Pe = 5;
      function rt(ae, Ue) {
        var lt = ae.length;
        ae.push(Ue), S(ae, Ue, lt);
      }
      function ut(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function ke(ae) {
        if (ae.length === 0)
          return null;
        var Ue = ae[0], lt = ae.pop();
        return lt !== Ue && (ae[0] = lt, $e(ae, lt, 0)), Ue;
      }
      function S(ae, Ue, lt) {
        for (var Ut = lt; Ut > 0; ) {
          var un = Ut - 1 >>> 1, on = ae[un];
          if (pe(on, Ue) > 0)
            ae[un] = Ue, ae[Ut] = on, Ut = un;
          else
            return;
        }
      }
      function $e(ae, Ue, lt) {
        for (var Ut = lt, un = ae.length, on = un >>> 1; Ut < on; ) {
          var sn = (Ut + 1) * 2 - 1, Xn = ae[sn], rn = sn + 1, Qt = ae[rn];
          if (pe(Xn, Ue) < 0)
            rn < un && pe(Qt, Xn) < 0 ? (ae[Ut] = Qt, ae[rn] = Ue, Ut = rn) : (ae[Ut] = Xn, ae[sn] = Ue, Ut = sn);
          else if (rn < un && pe(Qt, Ue) < 0)
            ae[Ut] = Qt, ae[rn] = Ue, Ut = rn;
          else
            return;
        }
      }
      function pe(ae, Ue) {
        var lt = ae.sortIndex - Ue.sortIndex;
        return lt !== 0 ? lt : ae.id - Ue.id;
      }
      var X = 1, re = 2, j = 3, ee = 4, G = 5;
      function oe(ae, Ue) {
      }
      var Ie = typeof performance == "object" && typeof performance.now == "function";
      if (Ie) {
        var ln = performance;
        $.unstable_now = function() {
          return ln.now();
        };
      } else {
        var Oe = Date, xe = Oe.now();
        $.unstable_now = function() {
          return Oe.now() - xe;
        };
      }
      var je = 1073741823, mt = -1, Ee = 250, ct = 5e3, Qe = 1e4, Cn = je, zt = [], pn = [], It = 1, Rt = null, Fe = j, Ft = !1, Et = !1, ft = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Ce = typeof clearTimeout == "function" ? clearTimeout : null, se = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function _(ae) {
        for (var Ue = ut(pn); Ue !== null; ) {
          if (Ue.callback === null)
            ke(pn);
          else if (Ue.startTime <= ae)
            ke(pn), Ue.sortIndex = Ue.expirationTime, rt(zt, Ue);
          else
            return;
          Ue = ut(pn);
        }
      }
      function I(ae) {
        if (ft = !1, _(ae), !Et)
          if (ut(zt) !== null)
            Et = !0, Nn(Me);
          else {
            var Ue = ut(pn);
            Ue !== null && lr(I, Ue.startTime - ae);
          }
      }
      function Me(ae, Ue) {
        Et = !1, ft && (ft = !1, Ir()), Ft = !0;
        var lt = Fe;
        try {
          var Ut;
          if (!M) return We(ae, Ue);
        } finally {
          Rt = null, Fe = lt, Ft = !1;
        }
      }
      function We(ae, Ue) {
        var lt = Ue;
        for (_(lt), Rt = ut(zt); Rt !== null && !(Rt.expirationTime > lt && (!ae || Ga())); ) {
          var Ut = Rt.callback;
          if (typeof Ut == "function") {
            Rt.callback = null, Fe = Rt.priorityLevel;
            var un = Rt.expirationTime <= lt, on = Ut(un);
            lt = $.unstable_now(), typeof on == "function" ? Rt.callback = on : Rt === ut(zt) && ke(zt), _(lt);
          } else
            ke(zt);
          Rt = ut(zt);
        }
        if (Rt !== null)
          return !0;
        var sn = ut(pn);
        return sn !== null && lr(I, sn.startTime - lt), !1;
      }
      function qe(ae, Ue) {
        switch (ae) {
          case X:
          case re:
          case j:
          case ee:
          case G:
            break;
          default:
            ae = j;
        }
        var lt = Fe;
        Fe = ae;
        try {
          return Ue();
        } finally {
          Fe = lt;
        }
      }
      function dt(ae) {
        var Ue;
        switch (Fe) {
          case X:
          case re:
          case j:
            Ue = j;
            break;
          default:
            Ue = Fe;
            break;
        }
        var lt = Fe;
        Fe = Ue;
        try {
          return ae();
        } finally {
          Fe = lt;
        }
      }
      function xt(ae) {
        var Ue = Fe;
        return function() {
          var lt = Fe;
          Fe = Ue;
          try {
            return ae.apply(this, arguments);
          } finally {
            Fe = lt;
          }
        };
      }
      function Je(ae, Ue, lt) {
        var Ut = $.unstable_now(), un;
        if (typeof lt == "object" && lt !== null) {
          var on = lt.delay;
          typeof on == "number" && on > 0 ? un = Ut + on : un = Ut;
        } else
          un = Ut;
        var sn;
        switch (ae) {
          case X:
            sn = mt;
            break;
          case re:
            sn = Ee;
            break;
          case G:
            sn = Cn;
            break;
          case ee:
            sn = Qe;
            break;
          case j:
          default:
            sn = ct;
            break;
        }
        var Xn = un + sn, rn = {
          id: It++,
          callback: Ue,
          priorityLevel: ae,
          startTime: un,
          expirationTime: Xn,
          sortIndex: -1
        };
        return un > Ut ? (rn.sortIndex = un, rt(pn, rn), ut(zt) === null && rn === ut(pn) && (ft ? Ir() : ft = !0, lr(I, un - Ut))) : (rn.sortIndex = Xn, rt(zt, rn), !Et && !Ft && (Et = !0, Nn(Me))), rn;
      }
      function Tt() {
      }
      function Bt() {
        !Et && !Ft && (Et = !0, Nn(Me));
      }
      function kn() {
        return ut(zt);
      }
      function Gn(ae) {
        ae.callback = null;
      }
      function ir() {
        return Fe;
      }
      var On = !1, Cr = null, Bn = -1, Ln = Pe, ca = -1;
      function Ga() {
        var ae = $.unstable_now() - ca;
        return !(ae < Ln);
      }
      function kr() {
      }
      function $n(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? Ln = Math.floor(1e3 / ae) : Ln = Pe;
      }
      var qn = function() {
        if (Cr !== null) {
          var ae = $.unstable_now();
          ca = ae;
          var Ue = !0, lt = !0;
          try {
            lt = Cr(Ue, ae);
          } finally {
            lt ? Kn() : (On = !1, Cr = null);
          }
        } else
          On = !1;
      }, Kn;
      if (typeof se == "function")
        Kn = function() {
          se(qn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), qa = Rr.port2;
        Rr.port1.onmessage = qn, Kn = function() {
          qa.postMessage(null);
        };
      } else
        Kn = function() {
          Y(qn, 0);
        };
      function Nn(ae) {
        Cr = ae, On || (On = !0, Kn());
      }
      function lr(ae, Ue) {
        Bn = Y(function() {
          ae($.unstable_now());
        }, Ue);
      }
      function Ir() {
        Ce(Bn), Bn = -1;
      }
      var Li = kr, fa = null;
      $.unstable_IdlePriority = G, $.unstable_ImmediatePriority = X, $.unstable_LowPriority = ee, $.unstable_NormalPriority = j, $.unstable_Profiling = fa, $.unstable_UserBlockingPriority = re, $.unstable_cancelCallback = Gn, $.unstable_continueExecution = Bt, $.unstable_forceFrameRate = $n, $.unstable_getCurrentPriorityLevel = ir, $.unstable_getFirstCallbackNode = kn, $.unstable_next = dt, $.unstable_pauseExecution = Tt, $.unstable_requestPaint = Li, $.unstable_runWithPriority = qe, $.unstable_scheduleCallback = Je, $.unstable_shouldYield = Ga, $.unstable_wrapCallback = xt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sE)), sE;
}
var tT;
function oT() {
  if (tT) return Bm.exports;
  tT = 1;
  var $ = {};
  return $.NODE_ENV === "production" ? Bm.exports = lD() : Bm.exports = uD(), Bm.exports;
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
function oD() {
  if (nT) return Qa;
  nT = 1;
  var $ = Vn, W = oT();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Pe = /* @__PURE__ */ new Set(), rt = {};
  function ut(n, r) {
    ke(n, r), ke(n + "Capture", r);
  }
  function ke(n, r) {
    for (rt[n] = r, n = 0; n < r.length; n++) Pe.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $e = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, X = {}, re = {};
  function j(n) {
    return $e.call(re, n) ? !0 : $e.call(X, n) ? !1 : pe.test(n) ? re[n] = !0 : (X[n] = !0, !1);
  }
  function ee(n, r, l, o) {
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
  function G(n, r, l, o) {
    if (r === null || typeof r > "u" || ee(n, r, l, o)) return !0;
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
  var Ie = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ie[n] = new oe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ie[r] = new oe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ie[n] = new oe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ie[n] = new oe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ie[n] = new oe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ie[n] = new oe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ie[n] = new oe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ie[n] = new oe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ie[n] = new oe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var ln = /[\-:]([a-z])/g;
  function Oe(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      ln,
      Oe
    );
    Ie[r] = new oe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(ln, Oe);
    Ie[r] = new oe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(ln, Oe);
    Ie[r] = new oe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ie[n] = new oe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ie.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ie[n] = new oe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function xe(n, r, l, o) {
    var c = Ie.hasOwnProperty(r) ? Ie[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (G(r, l, c, o) && (l = null), o || c === null ? j(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var je = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mt = Symbol.for("react.element"), Ee = Symbol.for("react.portal"), ct = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), Cn = Symbol.for("react.profiler"), zt = Symbol.for("react.provider"), pn = Symbol.for("react.context"), It = Symbol.for("react.forward_ref"), Rt = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), Ft = Symbol.for("react.memo"), Et = Symbol.for("react.lazy"), ft = Symbol.for("react.offscreen"), Y = Symbol.iterator;
  function Ce(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var se = Object.assign, _;
  function I(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var Me = !1;
  function We(n, r) {
    if (!n || Me) return "";
    Me = !0;
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
      Me = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? I(n) : "";
  }
  function qe(n) {
    switch (n.tag) {
      case 5:
        return I(n.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = We(n.type, !1), n;
      case 11:
        return n = We(n.type.render, !1), n;
      case 1:
        return n = We(n.type, !0), n;
      default:
        return "";
    }
  }
  function dt(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ct:
        return "Fragment";
      case Ee:
        return "Portal";
      case Cn:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Rt:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case pn:
        return (n.displayName || "Context") + ".Consumer";
      case zt:
        return (n._context.displayName || "Context") + ".Provider";
      case It:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Ft:
        return r = n.displayName || null, r !== null ? r : dt(n.type) || "Memo";
      case Et:
        r = n._payload, n = n._init;
        try {
          return dt(n(r));
        } catch {
        }
    }
    return null;
  }
  function xt(n) {
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
        return dt(r);
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
  function Je(n) {
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
  function Tt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = Tt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function kn(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function Gn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Tt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ir(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function On(n, r) {
    var l = r.checked;
    return se({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Je(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && xe(n, "checked", r, !1);
  }
  function Ln(n, r) {
    Bn(n, r);
    var l = Je(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ga(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ga(n, r.type, Je(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function ca(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Ga(n, r, l) {
    (r !== "number" || ir(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var kr = Array.isArray;
  function $n(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Je(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function qn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(M(91));
    return se({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Kn(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(M(92));
        if (kr(l)) {
          if (1 < l.length) throw Error(M(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Je(l) };
  }
  function Rr(n, r) {
    var l = Je(r.value), o = Je(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function qa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Nn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Nn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
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
  var ae = {
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
  }, Ue = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ae).forEach(function(n) {
    Ue.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ae[r] = ae[n];
    });
  });
  function lt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ae.hasOwnProperty(n) && ae[n] ? ("" + r).trim() : r + "px";
  }
  function Ut(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = lt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var un = se({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function on(n, r) {
    if (r) {
      if (un[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(M(62));
    }
  }
  function sn(n, r) {
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
  var Xn = null;
  function rn(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Qt = null, At = null, da = null;
  function _a(n) {
    if (n = cs(n)) {
      if (typeof Qt != "function") throw Error(M(280));
      var r = n.stateNode;
      r && (r = Ii(r), Qt(n.stateNode, n.type, r));
    }
  }
  function Da(n) {
    At ? da ? da.push(n) : da = [n] : At = n;
  }
  function Ni() {
    if (At) {
      var n = At, r = da;
      if (da = At = null, _a(n), r) for (n = 0; n < r.length; n++) _a(r[n]);
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
      Mi = !1, (At !== null || da !== null) && (Ql(), Ni());
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
    if (l && typeof l != "function") throw Error(M(231, r, typeof l));
    return l;
  }
  var pa = !1;
  if (S) try {
    var ur = {};
    Object.defineProperty(ur, "passive", { get: function() {
      pa = !0;
    } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
  } catch {
    pa = !1;
  }
  function va(n, r, l, o, c, d, m, E, T) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (K) {
      this.onError(K);
    }
  }
  var Qr = !1, ci = null, fi = !1, zi = null, R = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function Q(n, r, l, o, c, d, m, E, T) {
    Qr = !1, ci = null, va.apply(R, arguments);
  }
  function ue(n, r, l, o, c, d, m, E, T) {
    if (Q.apply(this, arguments), Qr) {
      if (Qr) {
        var U = ci;
        Qr = !1, ci = null;
      } else throw Error(M(198));
      fi || (fi = !0, zi = U);
    }
  }
  function fe(n) {
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
  function pt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Ke(n) {
    if (fe(n) !== n) throw Error(M(188));
  }
  function yt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = fe(n), r === null) throw Error(M(188));
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
          if (d === l) return Ke(c), n;
          if (d === o) return Ke(c), r;
          d = d.sibling;
        }
        throw Error(M(188));
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
          if (!m) throw Error(M(189));
        }
      }
      if (l.alternate !== o) throw Error(M(190));
    }
    if (l.tag !== 3) throw Error(M(188));
    return l.stateNode.current === l ? n : r;
  }
  function ot(n) {
    return n = yt(n), n !== null ? Rn(n) : null;
  }
  function Rn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Rn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var an = W.unstable_scheduleCallback, cn = W.unstable_cancelCallback, Tr = W.unstable_shouldYield, Ka = W.unstable_requestPaint, jt = W.unstable_now, vn = W.unstable_getCurrentPriorityLevel, et = W.unstable_ImmediatePriority, di = W.unstable_UserBlockingPriority, Ui = W.unstable_NormalPriority, ac = W.unstable_LowPriority, Ai = W.unstable_IdlePriority, ol = null, Wr = null;
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
  function Gl() {
    var n = ji;
    return ji <<= 1, !(ji & 4194240) && (ji = 64), n;
  }
  function ql(n) {
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
  var Hu, Dt, uc, vi, Ge, Kl = !1, Jn = [], qr = null, Lr = null, hi = null, gn = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), Xa = [], ka = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function br(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        qr = null;
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
        gn.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wt.delete(r.pointerId);
    }
  }
  function Nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && Dt(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return qr = Nr(qr, n, r, l, o, c), !0;
      case "dragenter":
        return Lr = Nr(Lr, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Nr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return gn.set(d, Nr(gn.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Wt.set(d, Nr(Wt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = fe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = pt(l), r !== null) {
            n.blockedOn = r, Ge(n.priority, function() {
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
  function Xl(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        Xn = o, l.target.dispatchEvent(o), Xn = null;
      } else return r = cs(l), r !== null && Dt(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Bu() {
    Kl = !1, qr !== null && Xl(qr) && (qr = null), Lr !== null && Xl(Lr) && (Lr = null), hi !== null && Xl(hi) && (hi = null), gn.forEach(Vu), Wt.forEach(Vu);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Kl || (Kl = !0, W.unstable_scheduleCallback(W.unstable_NormalPriority, Bu)));
  }
  function Oa(n) {
    function r(c) {
      return Jl(c, n);
    }
    if (0 < Jn.length) {
      Jl(Jn[0], n);
      for (var l = 1; l < Jn.length; l++) {
        var o = Jn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (qr !== null && Jl(qr, n), Lr !== null && Jl(Lr, n), hi !== null && Jl(hi, n), gn.forEach(r), Wt.forEach(r), l = 0; l < Xa.length; l++) o = Xa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Xa.shift();
  }
  var La = je.ReactCurrentBatchConfig, dl = !0;
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
      else if (qf(c, n, r, l, o)) o.stopPropagation();
      else if (br(n, o), r & 4 && -1 < ka.indexOf(n)) {
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
    if (Pi = null, n = rn(o), n = iu(n), n !== null) if (r = fe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = pt(r), n !== null) return n;
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
        switch (vn()) {
          case et:
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
  function N(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function ne() {
    return !1;
  }
  function Se(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : ne, this.isPropagationStopped = ne, this;
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
  var ve = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ve = Se(ve), st = se({}, ve, { view: 0, detail: 0 }), Ht = Se(st), Gt, qt, at, en = se({}, st, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== at && (at && n.type === "mousemove" ? (Gt = n.screenX - at.screenX, qt = n.screenY - at.screenY) : qt = Gt = 0, at = n), Gt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qt;
  } }), Tn = Se(en), Zl = se({}, en, { dataTransfer: 0 }), qo = Se(Zl), Vi = se({}, st, { relatedTarget: 0 }), eu = Se(Vi), Ko = se({}, ve, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = Se(Ko), oc = se({}, ve, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = Se(oc), Zp = se({}, ve, { data: 0 }), sc = Se(Zp), ev = {
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
  var Im = se({}, st, { key: function(n) {
    if (n.key) {
      var r = ev[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = N(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? tv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ja, charCode: function(n) {
    return n.type === "keypress" ? N(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? N(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Jf = Se(Im), Zf = se({}, en, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = Se(Zf), Qm = se({}, st, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), fc = Se(Qm), rv = se({}, ve, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kr = Se(rv), Bi = se({}, en, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mn = Se(Bi), $i = [9, 13, 27, 32], Xo = S && "CompositionEvent" in window, vl = null;
  S && "documentMode" in document && (vl = document.documentMode);
  var Wm = S && "TextEvent" in window && !vl, Qu = S && (!Xo || vl && 8 < vl && 11 >= vl), av = " ", iv = !1;
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
  function Gm(n, r) {
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
    if (Wu) return n === "compositionend" || !Xo && dc(n, r) ? (n = C(), h = Iu = Na = null, Wu = !1, n) : null;
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
  var qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ov(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!qm[n.type] : r === "textarea";
  }
  function sv(n, r, l, o) {
    Da(o), r = us(r, "onChange"), 0 < r.length && (l = new Ve("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Gu = null, mi = null;
  function ed(n) {
    mc(n, 0);
  }
  function Jo(n) {
    var r = Le(n);
    if (Gn(r)) return n;
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
    Gu && (Gu.detachEvent("onpropertychange", vv), mi = Gu = null);
  }
  function vv(n) {
    if (n.propertyName === "value" && Jo(mi)) {
      var r = [];
      sv(r, mi, n, rn(n)), Wl(ed, r);
    }
  }
  function Km(n, r, l) {
    n === "focusin" ? (pv(), Gu = r, mi = l, Gu.attachEvent("onpropertychange", vv)) : n === "focusout" && pv();
  }
  function Xm(n) {
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
      if (!$e.call(r, c) || !Za(n[c], r[c])) return !1;
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
    for (var n = window, r = ir(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = ir(n.document);
    }
    return r;
  }
  function qu(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Sv(n) {
    var r = hl(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pc(l.ownerDocument.documentElement, l)) {
      if (o !== null && qu(l)) {
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
  var Ku = S && "documentMode" in document && 11 >= document.documentMode, Xu = null, rd = null, es = null, ad = !1;
  function Ev(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ad || Xu == null || Xu !== ir(o) || (o = Xu, "selectionStart" in o && qu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Zo(es, o) || (es = o, o = us(rd, "onSelect"), 0 < o.length && (r = new Ve("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Xu)));
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
    wv.set(n, r), ut(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], rs = ld.toLowerCase(), Zm = ld[0].toUpperCase() + ld.slice(1);
    yi(rs, "on" + Zm);
  }
  yi(Cv, "onAnimationEnd"), yi(Rv, "onAnimationIteration"), yi(Tv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(bv, "onTransitionEnd"), ke("onMouseEnter", ["mouseout", "mouseover"]), ke("onMouseLeave", ["mouseout", "mouseover"]), ke("onPointerEnter", ["pointerout", "pointerover"]), ke("onPointerLeave", ["pointerout", "pointerover"]), ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function hc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ue(o, r, void 0, n), n.currentTarget = null;
  }
  function mc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, U = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, E, U), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, U = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          hc(c, E, U), d = T;
        }
      }
    }
    if (fi) throw n = zi, fi = !1, zi = null, n;
  }
  function Pt(n, r) {
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
      n[is] = !0, Pe.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || ml(l, !1, n), ml(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[is] || (r[is] = !0, ml("selectionchange", !1, r));
    }
  }
  function ud(n, r, l, o) {
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
      var U = d, K = rn(l), J = [];
      e: {
        var q = wv.get(n);
        if (q !== void 0) {
          var he = Ve, Re = n;
          switch (n) {
            case "keypress":
              if (N(l) === 0) break e;
            case "keydown":
            case "keyup":
              he = Jf;
              break;
            case "focusin":
              Re = "focus", he = eu;
              break;
            case "focusout":
              Re = "blur", he = eu;
              break;
            case "beforeblur":
            case "afterblur":
              he = eu;
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
              he = Tn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              he = qo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              he = fc;
              break;
            case Cv:
            case Rv:
            case Tv:
              he = Kf;
              break;
            case bv:
              he = Kr;
              break;
            case "scroll":
              he = Ht;
              break;
            case "wheel":
              he = Mn;
              break;
            case "copy":
            case "cut":
            case "paste":
              he = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              he = cc;
          }
          var we = (r & 4) !== 0, _n = !we && n === "scroll", D = we ? q !== null ? q + "Capture" : null : q;
          we = [];
          for (var w = U, L; w !== null; ) {
            L = w;
            var te = L.stateNode;
            if (L.tag === 5 && te !== null && (L = te, D !== null && (te = si(w, D), te != null && we.push(Zu(w, te, L)))), _n) break;
            w = w.return;
          }
          0 < we.length && (q = new he(q, Re, null, l, K), J.push({ event: q, listeners: we }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (q = n === "mouseover" || n === "pointerover", he = n === "mouseout" || n === "pointerout", q && l !== Xn && (Re = l.relatedTarget || l.fromElement) && (iu(Re) || Re[Yi])) break e;
          if ((he || q) && (q = K.window === K ? K : (q = K.ownerDocument) ? q.defaultView || q.parentWindow : window, he ? (Re = l.relatedTarget || l.toElement, he = U, Re = Re ? iu(Re) : null, Re !== null && (_n = fe(Re), Re !== _n || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (he = null, Re = U), he !== Re)) {
            if (we = Tn, te = "onMouseLeave", D = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (we = cc, te = "onPointerLeave", D = "onPointerEnter", w = "pointer"), _n = he == null ? q : Le(he), L = Re == null ? q : Le(Re), q = new we(te, w + "leave", he, l, K), q.target = _n, q.relatedTarget = L, te = null, iu(K) === U && (we = new we(D, w + "enter", Re, l, K), we.target = L, we.relatedTarget = _n, te = we), _n = te, he && Re) t: {
              for (we = he, D = Re, w = 0, L = we; L; L = nu(L)) w++;
              for (L = 0, te = D; te; te = nu(te)) L++;
              for (; 0 < w - L; ) we = nu(we), w--;
              for (; 0 < L - w; ) D = nu(D), L--;
              for (; w--; ) {
                if (we === D || D !== null && we === D.alternate) break t;
                we = nu(we), D = nu(D);
              }
              we = null;
            }
            else we = null;
            he !== null && yc(J, q, he, we, !1), Re !== null && _n !== null && yc(J, _n, Re, we, !0);
          }
        }
        e: {
          if (q = U ? Le(U) : window, he = q.nodeName && q.nodeName.toLowerCase(), he === "select" || he === "input" && q.type === "file") var _e = cv;
          else if (ov(q)) if (fv) _e = Jm;
          else {
            _e = Xm;
            var Te = Km;
          }
          else (he = q.nodeName) && he.toLowerCase() === "input" && (q.type === "checkbox" || q.type === "radio") && (_e = hv);
          if (_e && (_e = _e(n, U))) {
            sv(J, _e, l, K);
            break e;
          }
          Te && Te(n, q, U), n === "focusout" && (Te = q._wrapperState) && Te.controlled && q.type === "number" && Ga(q, "number", q.value);
        }
        switch (Te = U ? Le(U) : window, n) {
          case "focusin":
            (ov(Te) || Te.contentEditable === "true") && (Xu = Te, rd = U, es = null);
            break;
          case "focusout":
            es = rd = Xu = null;
            break;
          case "mousedown":
            ad = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ad = !1, Ev(J, l, K);
            break;
          case "selectionchange":
            if (Ku) break;
          case "keydown":
          case "keyup":
            Ev(J, l, K);
        }
        var ze;
        if (Xo) e: {
          switch (n) {
            case "compositionstart":
              var Ye = "onCompositionStart";
              break e;
            case "compositionend":
              Ye = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Ye = "onCompositionUpdate";
              break e;
          }
          Ye = void 0;
        }
        else Wu ? dc(n, l) && (Ye = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Ye = "onCompositionStart");
        Ye && (Qu && l.locale !== "ko" && (Wu || Ye !== "onCompositionStart" ? Ye === "onCompositionEnd" && Wu && (ze = C()) : (Na = K, Iu = "value" in Na ? Na.value : Na.textContent, Wu = !0)), Te = us(U, Ye), 0 < Te.length && (Ye = new sc(Ye, n, null, l, K), J.push({ event: Ye, listeners: Te }), ze ? Ye.data = ze : (ze = lv(l), ze !== null && (Ye.data = ze)))), (ze = Wm ? Gm(n, l) : uv(n, l)) && (U = us(U, "onBeforeInput"), 0 < U.length && (K = new sc("onBeforeInput", "beforeinput", null, l, K), J.push({ event: K, listeners: U }), K.data = ze));
      }
      mc(J, r);
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
      var E = l, T = E.alternate, U = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (T = si(l, d), T != null && m.unshift(Zu(l, T, E))) : c || (T = si(l, d), T != null && m.push(Zu(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var ty = /\r\n?/g, xv = /\u0000|\uFFFD/g;
  function _v(n) {
    return (typeof n == "string" ? n : "" + n).replace(ty, `
`).replace(xv, "");
  }
  function gc(n, r, l) {
    if (r = _v(r), _v(n) !== r && l) throw Error(M(425));
  }
  function Sc() {
  }
  var ru = null, os = null;
  function au(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ec = typeof setTimeout == "function" ? setTimeout : void 0, Dv = typeof clearTimeout == "function" ? clearTimeout : void 0, Cc = typeof Promise == "function" ? Promise : void 0, ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cc < "u" ? function(n) {
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
  function Le(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(M(33));
  }
  function Ii(n) {
    return n[ss] || null;
  }
  var zn = [], gt = -1;
  function Xr(n) {
    return { current: n };
  }
  function Kt(n) {
    0 > gt || (n.current = zn[gt], zn[gt] = null, gt--);
  }
  function tn(n, r) {
    gt++, zn[gt] = n.current, n.current = r;
  }
  var vt = {}, Sn = Xr(vt), Un = Xr(!1), za = vt;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l) return vt;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function An(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    Kt(Un), Kt(Sn);
  }
  function Tc(n, r, l) {
    if (Sn.current !== vt) throw Error(M(168));
    tn(Sn, r), tn(Un, l);
  }
  function kv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(M(108, xt(n) || "Unknown", c));
    return se({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || vt, za = Sn.current, tn(Sn, n), tn(Un, Un.current), !0;
  }
  function Ua(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(M(169));
    l ? (n = kv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Kt(Un), Kt(Sn), tn(Sn, n)) : Kt(Un), tn(Un, l);
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
        throw ti !== null && (ti = ti.slice(n + 1)), an(et, Mr), c;
      } finally {
        _t = r, ds = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, ao = null, El = 0, or = [], jn = 0, uu = null, zr = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = ao, ao = n, El = r;
  }
  function Ov(n, r, l) {
    or[jn++] = zr, or[jn++] = Si, or[jn++] = uu, uu = n;
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
    for (; n === uu; ) uu = or[--jn], or[jn] = null, Si = or[--jn], or[jn] = null, zr = or[--jn], or[jn] = null;
  }
  var Jr = null, Zr = null, fn = !1, ni = null;
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
    if (fn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(M(418));
          r = ei(l.nextSibling);
          var o = Jr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, fn = !1, Jr = n);
        }
      } else {
        if (hd(n)) throw Error(M(418));
        n.flags = n.flags & -4097 | 2, fn = !1, Jr = n;
      }
    }
  }
  function Lv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function bn(n) {
    if (n !== Jr) return !1;
    if (!fn) return Lv(n), fn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (hd(n)) throw Nv(), Error(M(418));
      for (; r; ) pd(n, r), r = ei(r.nextSibling);
    }
    if (Lv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(M(317));
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
    Zr = Jr = null, fn = !1;
  }
  function ps(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = je.ReactCurrentBatchConfig;
  function vs(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(M(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(M(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(M(284));
      if (!l._owner) throw Error(M(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(M(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(D, w) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [w], D.flags |= 16) : L.push(w);
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
    function d(D, w, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < w ? (D.flags |= 2, w) : L) : (D.flags |= 2, w)) : (D.flags |= 1048576, w);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, w, L, te) {
      return w === null || w.tag !== 6 ? (w = wu(L, D.mode, te), w.return = D, w) : (w = c(w, L), w.return = D, w);
    }
    function T(D, w, L, te) {
      var _e = L.type;
      return _e === ct ? K(D, w, L.props.children, te, L.key) : w !== null && (w.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === Et && Mv(_e) === w.type) ? (te = c(w, L.props), te.ref = vs(D, w, L), te.return = D, te) : (te = cf(L.type, L.key, L.props, null, D.mode, te), te.ref = vs(D, w, L), te.return = D, te);
    }
    function U(D, w, L, te) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== L.containerInfo || w.stateNode.implementation !== L.implementation ? (w = Wd(L, D.mode, te), w.return = D, w) : (w = c(w, L.children || []), w.return = D, w);
    }
    function K(D, w, L, te, _e) {
      return w === null || w.tag !== 7 ? (w = Ml(L, D.mode, te, _e), w.return = D, w) : (w = c(w, L), w.return = D, w);
    }
    function J(D, w, L) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = wu("" + w, D.mode, L), w.return = D, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case mt:
            return L = cf(w.type, w.key, w.props, null, D.mode, L), L.ref = vs(D, null, w), L.return = D, L;
          case Ee:
            return w = Wd(w, D.mode, L), w.return = D, w;
          case Et:
            var te = w._init;
            return J(D, te(w._payload), L);
        }
        if (kr(w) || Ce(w)) return w = Ml(w, D.mode, L, null), w.return = D, w;
        io(D, w);
      }
      return null;
    }
    function q(D, w, L, te) {
      var _e = w !== null ? w.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return _e !== null ? null : E(D, w, "" + L, te);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case mt:
            return L.key === _e ? T(D, w, L, te) : null;
          case Ee:
            return L.key === _e ? U(D, w, L, te) : null;
          case Et:
            return _e = L._init, q(
              D,
              w,
              _e(L._payload),
              te
            );
        }
        if (kr(L) || Ce(L)) return _e !== null ? null : K(D, w, L, te, null);
        io(D, L);
      }
      return null;
    }
    function he(D, w, L, te, _e) {
      if (typeof te == "string" && te !== "" || typeof te == "number") return D = D.get(L) || null, E(w, D, "" + te, _e);
      if (typeof te == "object" && te !== null) {
        switch (te.$$typeof) {
          case mt:
            return D = D.get(te.key === null ? L : te.key) || null, T(w, D, te, _e);
          case Ee:
            return D = D.get(te.key === null ? L : te.key) || null, U(w, D, te, _e);
          case Et:
            var Te = te._init;
            return he(D, w, L, Te(te._payload), _e);
        }
        if (kr(te) || Ce(te)) return D = D.get(L) || null, K(w, D, te, _e, null);
        io(w, te);
      }
      return null;
    }
    function Re(D, w, L, te) {
      for (var _e = null, Te = null, ze = w, Ye = w = 0, rr = null; ze !== null && Ye < L.length; Ye++) {
        ze.index > Ye ? (rr = ze, ze = null) : rr = ze.sibling;
        var Lt = q(D, ze, L[Ye], te);
        if (Lt === null) {
          ze === null && (ze = rr);
          break;
        }
        n && ze && Lt.alternate === null && r(D, ze), w = d(Lt, w, Ye), Te === null ? _e = Lt : Te.sibling = Lt, Te = Lt, ze = rr;
      }
      if (Ye === L.length) return l(D, ze), fn && Cl(D, Ye), _e;
      if (ze === null) {
        for (; Ye < L.length; Ye++) ze = J(D, L[Ye], te), ze !== null && (w = d(ze, w, Ye), Te === null ? _e = ze : Te.sibling = ze, Te = ze);
        return fn && Cl(D, Ye), _e;
      }
      for (ze = o(D, ze); Ye < L.length; Ye++) rr = he(ze, D, Ye, L[Ye], te), rr !== null && (n && rr.alternate !== null && ze.delete(rr.key === null ? Ye : rr.key), w = d(rr, w, Ye), Te === null ? _e = rr : Te.sibling = rr, Te = rr);
      return n && ze.forEach(function(zl) {
        return r(D, zl);
      }), fn && Cl(D, Ye), _e;
    }
    function we(D, w, L, te) {
      var _e = Ce(L);
      if (typeof _e != "function") throw Error(M(150));
      if (L = _e.call(L), L == null) throw Error(M(151));
      for (var Te = _e = null, ze = w, Ye = w = 0, rr = null, Lt = L.next(); ze !== null && !Lt.done; Ye++, Lt = L.next()) {
        ze.index > Ye ? (rr = ze, ze = null) : rr = ze.sibling;
        var zl = q(D, ze, Lt.value, te);
        if (zl === null) {
          ze === null && (ze = rr);
          break;
        }
        n && ze && zl.alternate === null && r(D, ze), w = d(zl, w, Ye), Te === null ? _e = zl : Te.sibling = zl, Te = zl, ze = rr;
      }
      if (Lt.done) return l(
        D,
        ze
      ), fn && Cl(D, Ye), _e;
      if (ze === null) {
        for (; !Lt.done; Ye++, Lt = L.next()) Lt = J(D, Lt.value, te), Lt !== null && (w = d(Lt, w, Ye), Te === null ? _e = Lt : Te.sibling = Lt, Te = Lt);
        return fn && Cl(D, Ye), _e;
      }
      for (ze = o(D, ze); !Lt.done; Ye++, Lt = L.next()) Lt = he(ze, D, Ye, Lt.value, te), Lt !== null && (n && Lt.alternate !== null && ze.delete(Lt.key === null ? Ye : Lt.key), w = d(Lt, w, Ye), Te === null ? _e = Lt : Te.sibling = Lt, Te = Lt);
      return n && ze.forEach(function(yy) {
        return r(D, yy);
      }), fn && Cl(D, Ye), _e;
    }
    function _n(D, w, L, te) {
      if (typeof L == "object" && L !== null && L.type === ct && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case mt:
            e: {
              for (var _e = L.key, Te = w; Te !== null; ) {
                if (Te.key === _e) {
                  if (_e = L.type, _e === ct) {
                    if (Te.tag === 7) {
                      l(D, Te.sibling), w = c(Te, L.props.children), w.return = D, D = w;
                      break e;
                    }
                  } else if (Te.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === Et && Mv(_e) === Te.type) {
                    l(D, Te.sibling), w = c(Te, L.props), w.ref = vs(D, Te, L), w.return = D, D = w;
                    break e;
                  }
                  l(D, Te);
                  break;
                } else r(D, Te);
                Te = Te.sibling;
              }
              L.type === ct ? (w = Ml(L.props.children, D.mode, te, L.key), w.return = D, D = w) : (te = cf(L.type, L.key, L.props, null, D.mode, te), te.ref = vs(D, w, L), te.return = D, D = te);
            }
            return m(D);
          case Ee:
            e: {
              for (Te = L.key; w !== null; ) {
                if (w.key === Te) if (w.tag === 4 && w.stateNode.containerInfo === L.containerInfo && w.stateNode.implementation === L.implementation) {
                  l(D, w.sibling), w = c(w, L.children || []), w.return = D, D = w;
                  break e;
                } else {
                  l(D, w);
                  break;
                }
                else r(D, w);
                w = w.sibling;
              }
              w = Wd(L, D.mode, te), w.return = D, D = w;
            }
            return m(D);
          case Et:
            return Te = L._init, _n(D, w, Te(L._payload), te);
        }
        if (kr(L)) return Re(D, w, L, te);
        if (Ce(L)) return we(D, w, L, te);
        io(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, w !== null && w.tag === 6 ? (l(D, w.sibling), w = c(w, L), w.return = D, D = w) : (l(D, w), w = wu(L, D.mode, te), w.return = D, D = w), m(D)) : l(D, w);
    }
    return _n;
  }
  var ri = zv(!0), sr = zv(!1), le = Xr(null), ma = null, xr = null, yd = null;
  function gd() {
    yd = xr = ma = null;
  }
  function Sd(n) {
    var r = le.current;
    Kt(le), n._currentValue = r;
  }
  function Ed(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    ma = n, yd = xr = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (tr = !0), n.firstContext = null);
  }
  function $t(n) {
    var r = n._currentValue;
    if (yd !== n) if (n = { context: n, memoizedValue: r, next: null }, xr === null) {
      if (ma === null) throw Error(M(308));
      xr = n, ma.dependencies = { lanes: 0, firstContext: n };
    } else xr = xr.next = n;
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
    if (o = o.shared, St & 2) {
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
  function xc(n, r, l, o) {
    var c = n.updateQueue;
    Aa = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, U = T.next;
      T.next = null, m === null ? d = U : m.next = U, m = T;
      var K = n.alternate;
      K !== null && (K = K.updateQueue, E = K.lastBaseUpdate, E !== m && (E === null ? K.firstBaseUpdate = U : E.next = U, K.lastBaseUpdate = T));
    }
    if (d !== null) {
      var J = c.baseState;
      m = 0, K = U = T = null, E = d;
      do {
        var q = E.lane, he = E.eventTime;
        if ((o & q) === q) {
          K !== null && (K = K.next = {
            eventTime: he,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Re = n, we = E;
            switch (q = r, he = l, we.tag) {
              case 1:
                if (Re = we.payload, typeof Re == "function") {
                  J = Re.call(he, J, q);
                  break e;
                }
                J = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = we.payload, q = typeof Re == "function" ? Re.call(he, J, q) : Re, q == null) break e;
                J = se({}, J, q);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, q = c.effects, q === null ? c.effects = [E] : q.push(E));
        } else he = { eventTime: he, lane: q, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, K === null ? (U = K = he, T = J) : K = K.next = he, m |= q;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          q = E, E = q.next, q.next = null, c.lastBaseUpdate = q, c.shared.pending = null;
        }
      } while (!0);
      if (K === null && (T = J), c.baseState = T, c.firstBaseUpdate = U, c.lastBaseUpdate = K, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      Su |= m, n.lanes = m, n.memoizedState = J;
    }
  }
  function Rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(M(191, c));
        c.call(o);
      }
    }
  }
  var uo = {}, Ci = Xr(uo), hs = Xr(uo), ms = Xr(uo);
  function cu(n) {
    if (n === uo) throw Error(M(174));
    return n;
  }
  function Td(n, r) {
    switch (tn(ms, r), tn(hs, n), tn(Ci, uo), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : lr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = lr(r, n);
    }
    Kt(Ci), tn(Ci, r);
  }
  function oo() {
    Kt(Ci), Kt(hs), Kt(ms);
  }
  function bd(n) {
    cu(ms.current);
    var r = cu(Ci.current), l = lr(r, n.type);
    r !== l && (tn(hs, n), tn(Ci, l));
  }
  function wd(n) {
    hs.current === n && (Kt(Ci), Kt(hs));
  }
  var hn = Xr(0);
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
  function ys() {
    for (var n = 0; n < xd.length; n++) xd[n]._workInProgressVersionPrimary = null;
    xd.length = 0;
  }
  var Ne = je.ReactCurrentDispatcher, ht = je.ReactCurrentBatchConfig, bt = 0, tt = null, Xt = null, Yn = null, Dc = !1, gs = !1, Ss = 0, _d = 0;
  function V() {
    throw Error(M(321));
  }
  function Fn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function He(n, r, l, o, c, d) {
    if (bt = d, tt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ne.current = n === null || n.memoizedState === null ? $c : Yc, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ss = 0, 25 <= d) throw Error(M(301));
        d += 1, Yn = Xt = null, r.updateQueue = null, Ne.current = bs, n = l(o, c);
      } while (gs);
    }
    if (Ne.current = Yt, r = Xt !== null && Xt.next !== null, bt = 0, Yn = Xt = tt = null, Dc = !1, r) throw Error(M(300));
    return n;
  }
  function bl() {
    var n = Ss !== 0;
    return Ss = 0, n;
  }
  function Zn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yn === null ? tt.memoizedState = Yn = n : Yn = Yn.next = n, Yn;
  }
  function er() {
    if (Xt === null) {
      var n = tt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Xt.next;
    var r = Yn === null ? tt.memoizedState : Yn.next;
    if (r !== null) Yn = r, Xt = n;
    else {
      if (n === null) throw Error(M(310));
      Xt = n, n = { memoizedState: Xt.memoizedState, baseState: Xt.baseState, baseQueue: Xt.baseQueue, queue: Xt.queue, next: null }, Yn === null ? tt.memoizedState = Yn = n : Yn = Yn.next = n;
    }
    return Yn;
  }
  function ea(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function fu(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = Xt, c = o.baseQueue, d = l.pending;
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
        var K = U.lane;
        if ((bt & K) === K) T !== null && (T = T.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var J = {
            lane: K,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          T === null ? (E = T = J, m = o) : T = T.next = J, tt.lanes |= K, Su |= K;
        }
        U = U.next;
      } while (U !== null && U !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, tt.lanes |= d, Su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function wl(n) {
    var r = er(), l = r.queue;
    if (l === null) throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function so() {
  }
  function kc(n, r) {
    var l = tt, o = er(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, tr = !0), o = o.queue, Es(Nc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Lc.bind(null, l, o, c, r), void 0, null), Hn === null) throw Error(M(349));
      bt & 30 || Oc(l, r, c);
    }
    return c;
  }
  function Oc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
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
    var r = Zn();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ts.bind(null, tt, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = tt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, tt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ac() {
    return er().memoizedState;
  }
  function co(n, r, l, o) {
    var c = Zn();
    tt.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = er();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Xt !== null) {
      var m = Xt.memoizedState;
      if (d = m.destroy, o !== null && Fn(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    tt.flags |= n, c.memoizedState = du(1 | r, l, d, o);
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
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Vc(n, r) {
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Fn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Bc(n, r, l) {
    return bt & 21 ? (Za(l, r) || (l = Gl(), tt.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = l);
  }
  function Fv(n, r) {
    var l = _t;
    _t = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ht.transition;
    ht.transition = {};
    try {
      n(!1), r();
    } finally {
      _t = l, ht.transition = o;
    }
  }
  function po() {
    return er().memoizedState;
  }
  function Hv(n, r, l) {
    var o = Ea(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, xl(n)) ya(r, l);
    else if (l = Uv(n, r, l, o), l !== null) {
      var c = nn();
      Ca(l, n, o, c), Pv(l, r, o);
    }
  }
  function Ts(n, r, l) {
    var o = Ea(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (xl(n)) ya(r, c);
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
      l = Uv(n, r, c, o), l !== null && (c = nn(), Ca(l, n, o, c), Pv(l, r, o));
    }
  }
  function xl(n) {
    var r = n.alternate;
    return n === tt || r !== null && r === tt;
  }
  function ya(n, r) {
    gs = Dc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Pv(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Qo(n, l);
    }
  }
  var Yt = { readContext: $t, useCallback: V, useContext: V, useEffect: V, useImperativeHandle: V, useInsertionEffect: V, useLayoutEffect: V, useMemo: V, useReducer: V, useRef: V, useState: V, useDebugValue: V, useDeferredValue: V, useTransition: V, useMutableSource: V, useSyncExternalStore: V, useId: V, unstable_isNewReconciler: !1 }, $c = { readContext: $t, useCallback: function(n, r) {
    return Zn().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: $t, useEffect: jc, useImperativeHandle: function(n, r, l) {
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
    var l = Zn();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Zn();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hv.bind(null, tt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Zn();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Uc, useDebugValue: Rs, useDeferredValue: function(n) {
    return Zn().memoizedState = n;
  }, useTransition: function() {
    var n = Uc(!1), r = n[0];
    return n = Fv.bind(null, n[1]), Zn().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = tt, c = Zn();
    if (fn) {
      if (l === void 0) throw Error(M(407));
      l = l();
    } else {
      if (l = r(), Hn === null) throw Error(M(349));
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
    var n = Zn(), r = Hn.identifierPrefix;
    if (fn) {
      var l = Si, o = zr;
      l = (o & ~(1 << 32 - Or(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ss++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = _d++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Yc = {
    readContext: $t,
    useCallback: Pc,
    useContext: $t,
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
      var r = er();
      return Bc(r, Xt.memoizedState, n);
    },
    useTransition: function() {
      var n = fu(ea)[0], r = er().memoizedState;
      return [n, r];
    },
    useMutableSource: so,
    useSyncExternalStore: kc,
    useId: po,
    unstable_isNewReconciler: !1
  }, bs = { readContext: $t, useCallback: Pc, useContext: $t, useEffect: Es, useImperativeHandle: pu, useInsertionEffect: Fc, useLayoutEffect: Hc, useMemo: Vc, useReducer: wl, useRef: Ac, useState: function() {
    return wl(ea);
  }, useDebugValue: Rs, useDeferredValue: function(n) {
    var r = er();
    return Xt === null ? r.memoizedState = n : Bc(r, Xt.memoizedState, n);
  }, useTransition: function() {
    var n = wl(ea)[0], r = er().memoizedState;
    return [n, r];
  }, useMutableSource: so, useSyncExternalStore: kc, useId: po, unstable_isNewReconciler: !1 };
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
  var Ic = { isMounted: function(n) {
    return (n = n._reactInternals) ? fe(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = nn(), c = Ea(n), d = Wi(o, c);
    d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), wc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = nn(), c = Ea(n), d = Wi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Tl(n, d, c), r !== null && (Ca(r, n, c, o), wc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = nn(), o = Ea(n), c = Wi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Tl(n, c, o), r !== null && (Ca(r, n, o, l), wc(r, n, o));
  } };
  function Vv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Zo(l, o) || !Zo(c, d) : !0;
  }
  function Bv(n, r, l) {
    var o = !1, c = vt, d = r.contextType;
    return typeof d == "object" && d !== null ? d = $t(d) : (c = An(r) ? za : Sn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : vt), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function kd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = $t(d) : (d = An(r) ? za : Sn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), xc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var l = "", o = r;
      do
        l += qe(o), o = o.return;
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
      kl || (kl = !0, Ms = o), Od(n, r);
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
  var vu = je.ReactCurrentOwner, tr = !1;
  function wn(n, r, l, o) {
    r.child = n === null ? sr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function Gc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = He(n, r, l, o, d, c), l = bl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (fn && l && dd(r), r.flags |= 1, wn(n, r, o, c), r.child);
  }
  function na(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, hu(n, r, d, o, c)) : (n = cf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Zo, l(m, o) && n.ref === r.ref) return cr(n, r, c);
    }
    return r.flags |= 1, n = Nl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return qc(n, r, l, o, c);
  }
  function it(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tn(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tn(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, tn(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, tn(yo, Sa), Sa |= o;
    return wn(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qc(n, r, l, o, c) {
    var d = An(l) ? za : Sn.current;
    return d = ha(r, d), lo(r, c), l = He(n, r, l, o, d, c), o = bl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (fn && o && dd(r), r.flags |= 1, wn(n, r, l, c), r.child);
  }
  function ay(n, r, l, o, c) {
    if (An(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) ja(n, r), Bv(r, l, o), kd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = $t(U) : (U = An(l) ? za : Sn.current, U = ha(r, U));
      var K = l.getDerivedStateFromProps, J = typeof K == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      J || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== U) && Qc(r, m, o, U), Aa = !1;
      var q = r.memoizedState;
      m.state = q, xc(r, o, m, c), T = r.memoizedState, E !== o || q !== T || Un.current || Aa ? (typeof K == "function" && (Dd(r, l, K, o), T = r.memoizedState), (E = Aa || Vv(r, l, E, o, q, T, U)) ? (J || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ta(r.type, E), m.props = U, J = r.pendingProps, q = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = $t(T) : (T = An(l) ? za : Sn.current, T = ha(r, T));
      var he = l.getDerivedStateFromProps;
      (K = typeof he == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== J || q !== T) && Qc(r, m, o, T), Aa = !1, q = r.memoizedState, m.state = q, xc(r, o, m, c);
      var Re = r.memoizedState;
      E !== J || q !== Re || Un.current || Aa ? (typeof he == "function" && (Dd(r, l, he, o), Re = r.memoizedState), (U = Aa || Vv(r, l, U, o, q, Re, T) || !1) ? (K || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Re, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Re, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Re), m.props = o, m.state = Re, m.context = T, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ua(r, l, !1), cr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : wn(n, r, E, d), r.memoizedState = o.state, c && Ua(r, l, !0), r.child;
  }
  function Kc(n) {
    var r = n.stateNode;
    r.pendingContext ? Tc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tc(n, r.context, !1), Td(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Qi(), ps(c), r.flags |= 256, wn(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = hn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), tn(hn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Xc(l), r.memoizedState = zd, n) : _s(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Nl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Nl(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Xc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Nl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function _s(n, r) {
    return r = To({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Jc(n, r, l, o) {
    return o !== null && ps(o), ri(r, n.child, null, l), n = _s(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qv(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Wc(Error(M(422))), Jc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = To({ mode: "visible", children: o.children }, c, 0, null), d = Ml(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ri(r, n.child, null, m), r.child.memoizedState = Xc(m), r.memoizedState = zd, d);
    if (!(r.mode & 1)) return Jc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(M(419)), o = Wc(d, o, void 0), Jc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, tr || E) {
      if (o = Hn, o !== null) {
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
      return Bd(), o = Wc(Error(M(421))), Jc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = ei(c.nextSibling), Jr = r, fn = !0, ni = null, n !== null && (or[jn++] = zr, or[jn++] = Si, or[jn++] = uu, zr = n.id, Si = n.overflow, uu = r), r = _s(r, o.children), r.flags |= 4096, r);
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
    if (wn(n, r, o.children, l), o = hn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (tn(hn, o), !(r.mode & 1)) r.memoizedState = null;
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
  function ja(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function cr(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(M(153));
    if (r.child !== null) {
      for (n = r.child, l = Nl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Nl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ef(n, r, l) {
    switch (r.tag) {
      case 3:
        Kc(r), Qi();
        break;
      case 5:
        bd(r);
        break;
      case 1:
        An(r.type) && lu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        tn(le, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (tn(hn, hn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (tn(hn, hn.current & 1), n = cr(n, r, l), n !== null ? n.sibling : null);
        tn(hn, hn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ra(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), tn(hn, hn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, it(n, r, l);
    }
    return cr(n, r, l);
  }
  var ho, ga, In, Wv;
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
  }, In = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, cu(Ci.current);
      var d = null;
      switch (l) {
        case "input":
          c = On(n, c), o = On(n, o), d = [];
          break;
        case "select":
          c = se({}, c, { value: void 0 }), o = se({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = qn(n, c), o = qn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Sc);
      }
      on(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (rt.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var T = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && T !== E && (T != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = T;
        else U === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(U, T)) : U === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(U, "" + T) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (rt.hasOwnProperty(U) ? (T != null && U === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(U, T));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!fn) switch (n.tailMode) {
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
  function _r(n) {
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
        return _r(r), null;
      case 1:
        return An(r.type) && gi(), _r(r), null;
      case 3:
        return o = r.stateNode, oo(), Kt(Un), Kt(Sn), ys(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (js(ni), ni = null))), ga(n, r), _r(r), null;
      case 5:
        wd(r);
        var c = cu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) In(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(M(166));
            return _r(r), null;
          }
          if (n = cu(Ci.current), bn(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Pt("cancel", o), Pt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Pt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < as.length; c++) Pt(as[c], o);
                break;
              case "source":
                Pt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Pt(
                  "error",
                  o
                ), Pt("load", o);
                break;
              case "details":
                Pt("toggle", o);
                break;
              case "input":
                Cr(o, d), Pt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Pt("invalid", o);
                break;
              case "textarea":
                Kn(o, d), Pt("invalid", o);
            }
            on(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && gc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && gc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : rt.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                kn(o), ca(o, d, !0);
                break;
              case "textarea":
                kn(o), qa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Sc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Nn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[ss] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = sn(l, o), l) {
                case "dialog":
                  Pt("cancel", n), Pt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Pt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < as.length; c++) Pt(as[c], n);
                  c = o;
                  break;
                case "source":
                  Pt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Pt(
                    "error",
                    n
                  ), Pt("load", n), c = o;
                  break;
                case "details":
                  Pt("toggle", n), c = o;
                  break;
                case "input":
                  Cr(n, o), c = On(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = se({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Kn(n, o), c = qn(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              on(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Ut(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Li(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && fa(n, T) : typeof T == "number" && fa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (rt.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && xe(n, d, T, m));
              }
              switch (l) {
                case "input":
                  kn(n), ca(n, o, !1);
                  break;
                case "textarea":
                  kn(n), qa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Je(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? $n(n, !!o.multiple, d, !1) : o.defaultValue != null && $n(
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
        return _r(r), null;
      case 6:
        if (n && r.stateNode != null) Wv(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(M(166));
          if (l = cu(ms.current), cu(Ci.current), bn(r)) {
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
        return _r(r), null;
      case 13:
        if (Kt(hn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (fn && Zr !== null && r.mode & 1 && !(r.flags & 128)) Nv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = bn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(M(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(M(317));
              d[Ma] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), d = !1;
          } else ni !== null && (js(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || hn.current & 1 ? Qn === 0 && (Qn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return oo(), ga(n, r), n === null && ls(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Sd(r.type._context), _r(r), null;
      case 17:
        return An(r.type) && gi(), _r(r), null;
      case 19:
        if (Kt(hn), d = r.memoizedState, d === null) return _r(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (Qn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = _c(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return tn(hn, hn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && jt() > So && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = _c(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !fn) return _r(r), null;
          } else 2 * jt() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = jt(), r.sibling = null, l = hn.current, tn(hn, o ? l & 1 | 2 : l & 1), r) : (_r(r), null);
      case 22:
      case 23:
        return Vd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Sa & 1073741824 && (_r(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _r(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(M(156, r.tag));
  }
  function Gv(n, r) {
    switch (bc(r), r.tag) {
      case 1:
        return An(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Kt(Un), Kt(Sn), ys(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (Kt(hn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(M(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Kt(hn), null;
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
  var mu = !1, fr = !1, iy = typeof WeakSet == "function" ? WeakSet : Set, ge = null;
  function Dl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      En(n, r, o);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (o) {
      En(n, r, o);
    }
  }
  var Fd = !1;
  function ly(n, r) {
    if (ru = dl, n = hl(), qu(n)) {
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
          var m = 0, E = -1, T = -1, U = 0, K = 0, J = n, q = null;
          t: for (; ; ) {
            for (var he; J !== l || c !== 0 && J.nodeType !== 3 || (E = m + c), J !== d || o !== 0 && J.nodeType !== 3 || (T = m + o), J.nodeType === 3 && (m += J.nodeValue.length), (he = J.firstChild) !== null; )
              q = J, J = he;
            for (; ; ) {
              if (J === n) break t;
              if (q === l && ++U === c && (E = m), q === d && ++K === o && (T = m), (he = J.nextSibling) !== null) break;
              J = q, q = J.parentNode;
            }
            J = he;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, dl = !1, ge = r; ge !== null; ) if (r = ge, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ge = n;
    else for (; ge !== null; ) {
      r = ge;
      try {
        var Re = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Re !== null) {
              var we = Re.memoizedProps, _n = Re.memoizedState, D = r.stateNode, w = D.getSnapshotBeforeUpdate(r.elementType === r.type ? we : ta(r.type, we), _n);
              D.__reactInternalSnapshotBeforeUpdate = w;
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
            throw Error(M(163));
        }
      } catch (te) {
        En(r, r.return, te);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ge = n;
        break;
      }
      ge = r.return;
    }
    return Re = Fd, Fd = !1, Re;
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
  function qv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, qv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[ss], delete r[sd], delete r[cd], delete r[ro])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rf(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ks(n) {
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
  var mn = null, Ur = !1;
  function Fa(n, r, l) {
    for (l = l.child; l !== null; ) Gi(n, r, l), l = l.sibling;
  }
  function Gi(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(ol, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        fr || Dl(l, r);
      case 6:
        var o = mn, c = Ur;
        mn = null, Fa(n, r, l), mn = o, Ur = c, mn !== null && (Ur ? (n = mn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : mn.removeChild(l.stateNode));
        break;
      case 18:
        mn !== null && (Ur ? (n = mn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), Oa(n)) : to(mn, l.stateNode));
        break;
      case 4:
        o = mn, c = Ur, mn = l.stateNode.containerInfo, Ur = !0, Fa(n, r, l), mn = o, Ur = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!fr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && jd(l, r, m), c = c.next;
          } while (c !== o);
        }
        Fa(n, r, l);
        break;
      case 1:
        if (!fr && (Dl(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          En(l, r, E);
        }
        Fa(n, r, l);
        break;
      case 21:
        Fa(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (fr = (o = fr) || l.memoizedState !== null, Fa(n, r, l), fr = o) : Fa(n, r, l);
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
              mn = E.stateNode, Ur = !1;
              break e;
            case 3:
              mn = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              mn = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (mn === null) throw Error(M(160));
        Gi(d, m, c), mn = null, Ur = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (U) {
        En(c, r, U);
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
        if (ai(r, n), ii(n), o & 4) {
          try {
            mo(3, n, n.return), tf(3, n);
          } catch (we) {
            En(n, n.return, we);
          }
          try {
            mo(5, n, n.return);
          } catch (we) {
            En(n, n.return, we);
          }
        }
        break;
      case 1:
        ai(r, n), ii(n), o & 512 && l !== null && Dl(l, l.return);
        break;
      case 5:
        if (ai(r, n), ii(n), o & 512 && l !== null && Dl(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            fa(c, "");
          } catch (we) {
            En(n, n.return, we);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), sn(E, m);
            var U = sn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var K = T[m], J = T[m + 1];
              K === "style" ? Ut(c, J) : K === "dangerouslySetInnerHTML" ? Li(c, J) : K === "children" ? fa(c, J) : xe(c, K, J, U);
            }
            switch (E) {
              case "input":
                Ln(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var q = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var he = d.value;
                he != null ? $n(c, !!d.multiple, he, !1) : q !== !!d.multiple && (d.defaultValue != null ? $n(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : $n(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (we) {
            En(n, n.return, we);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(M(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (we) {
            En(n, n.return, we);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (we) {
          En(n, n.return, we);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = jt())), o & 4 && Kv(n);
        break;
      case 22:
        if (K = l !== null && l.memoizedState !== null, n.mode & 1 ? (fr = (U = fr) || K, ai(r, n), fr = U) : ai(r, n), ii(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !K && n.mode & 1) for (ge = n, K = n.child; K !== null; ) {
            for (J = ge = K; ge !== null; ) {
              switch (q = ge, he = q.child, q.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, q, q.return);
                  break;
                case 1:
                  Dl(q, q.return);
                  var Re = q.stateNode;
                  if (typeof Re.componentWillUnmount == "function") {
                    o = q, l = q.return;
                    try {
                      r = o, Re.props = r.memoizedProps, Re.state = r.memoizedState, Re.componentWillUnmount();
                    } catch (we) {
                      En(o, l, we);
                    }
                  }
                  break;
                case 5:
                  Dl(q, q.return);
                  break;
                case 22:
                  if (q.memoizedState !== null) {
                    Zv(J);
                    continue;
                  }
              }
              he !== null ? (he.return = q, ge = he) : Zv(J);
            }
            K = K.sibling;
          }
          e: for (K = null, J = n; ; ) {
            if (J.tag === 5) {
              if (K === null) {
                K = J;
                try {
                  c = J.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = J.stateNode, T = J.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = lt("display", m));
                } catch (we) {
                  En(n, n.return, we);
                }
              }
            } else if (J.tag === 6) {
              if (K === null) try {
                J.stateNode.nodeValue = U ? "" : J.memoizedProps;
              } catch (we) {
                En(n, n.return, we);
              }
            } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === n) && J.child !== null) {
              J.child.return = J, J = J.child;
              continue;
            }
            if (J === n) break e;
            for (; J.sibling === null; ) {
              if (J.return === null || J.return === n) break e;
              K === J && (K = null), J = J.return;
            }
            K === J && (K = null), J.sibling.return = J.return, J = J.sibling;
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
            if (rf(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(M(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (fa(c, ""), o.flags &= -33);
            var d = ks(n);
            Ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = ks(n);
            Ri(n, E, m);
            break;
          default:
            throw Error(M(161));
        }
      } catch (T) {
        En(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Os(n, r, l) {
    ge = n, Jv(n);
  }
  function Jv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ge !== null; ) {
      var c = ge, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || fr;
          E = mu;
          var U = fr;
          if (mu = m, (fr = T) && !U) for (ge = c; ge !== null; ) m = ge, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ls(c) : T !== null ? (T.return = m, ge = T) : Ls(c);
          for (; d !== null; ) ge = d, Jv(d), d = d.sibling;
          ge = c, mu = E, fr = U;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ge = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              fr || tf(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !fr) if (l === null) o.componentDidMount();
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
                var U = r.alternate;
                if (U !== null) {
                  var K = U.memoizedState;
                  if (K !== null) {
                    var J = K.dehydrated;
                    J !== null && Oa(J);
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
              throw Error(M(163));
          }
          fr || r.flags & 512 && nf(r);
        } catch (q) {
          En(r, r.return, q);
        }
      }
      if (r === n) {
        ge = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function Zv(n) {
    for (; ge !== null; ) {
      var r = ge;
      if (r === n) {
        ge = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ge = l;
        break;
      }
      ge = r.return;
    }
  }
  function Ls(n) {
    for (; ge !== null; ) {
      var r = ge;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              tf(4, r);
            } catch (T) {
              En(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                En(r, c, T);
              }
            }
            var d = r.return;
            try {
              nf(r);
            } catch (T) {
              En(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              nf(r);
            } catch (T) {
              En(r, m, T);
            }
        }
      } catch (T) {
        En(r, r.return, T);
      }
      if (r === n) {
        ge = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ge = E;
        break;
      }
      ge = r.return;
    }
  }
  var eh = Math.ceil, af = je.ReactCurrentDispatcher, yu = je.ReactCurrentOwner, Dr = je.ReactCurrentBatchConfig, St = 0, Hn = null, xn = null, dr = 0, Sa = 0, yo = Xr(0), Qn = 0, gu = null, Su = 0, Eu = 0, Ns = 0, go = null, aa = null, Pd = 0, So = 1 / 0, qi = null, kl = !1, Ms = null, Ha = null, lf = !1, Ol = null, zs = 0, Eo = 0, Co = null, Cu = -1, Us = 0;
  function nn() {
    return St & 6 ? jt() : Cu !== -1 ? Cu : Cu = jt();
  }
  function Ea(n) {
    return n.mode & 1 ? St & 2 && dr !== 0 ? dr & -dr : ou.transition !== null ? (Us === 0 && (Us = Gl()), Us) : (n = _t, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(M(185));
    fl(n, l, o), (!(St & 2) || n !== Hn) && (n === Hn && (!(St & 2) && (Eu |= l), Qn === 4 && Ll(n, dr)), nr(n, o), l === 1 && St === 0 && !(r.mode & 1) && (So = jt() + 500, fs && Mr()));
  }
  function nr(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = pi(n, n === Hn ? dr : 0);
    if (o === 0) l !== null && cn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && cn(l), r === 1) n.tag === 0 ? fd(Hs.bind(null, n)) : yl(Hs.bind(null, n)), ny(function() {
        !(St & 6) && Mr();
      }), l = null;
      else {
        switch (Wo(o)) {
          case 1:
            l = et;
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
    if (Cu = -1, Us = 0, St & 6) throw Error(M(327));
    var l = n.callbackNode;
    if (Ro() && n.callbackNode !== l) return null;
    var o = pi(n, n === Hn ? dr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = sf(n, o);
    else {
      r = o;
      var c = St;
      St |= 2;
      var d = nh();
      (Hn !== n || dr !== r) && (qi = null, So = jt() + 500, Tu(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          of(n, E);
        }
      while (!0);
      gd(), af.current = d, St = c, xn !== null ? r = 0 : (Hn = null, dr = 0, r = Qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = As(n, c))), r === 1) throw l = gu, Tu(n, 0), Ll(n, o), nr(n, jt()), l;
      if (r === 6) Ll(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fs(c) && (r = sf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = As(n, d))), r === 1)) throw l = gu, Tu(n, 0), Ll(n, o), nr(n, jt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            bu(n, aa, qi);
            break;
          case 3:
            if (Ll(n, o), (o & 130023424) === o && (r = Pd + 500 - jt(), 10 < r)) {
              if (pi(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                nn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ec(bu.bind(null, n, aa, qi), r);
              break;
            }
            bu(n, aa, qi);
            break;
          case 4:
            if (Ll(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Or(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = jt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * eh(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ec(bu.bind(null, n, aa, qi), o);
              break;
            }
            bu(n, aa, qi);
            break;
          case 5:
            bu(n, aa, qi);
            break;
          default:
            throw Error(M(329));
        }
      }
    }
    return nr(n, jt()), n.callbackNode === l ? th.bind(null, n) : null;
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
    if (St & 6) throw Error(M(327));
    Ro();
    var r = pi(n, 0);
    if (!(r & 1)) return nr(n, jt()), null;
    var l = sf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Fi(n);
      o !== 0 && (r = o, l = As(n, o));
    }
    if (l === 1) throw l = gu, Tu(n, 0), Ll(n, r), nr(n, jt()), l;
    if (l === 6) throw Error(M(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, bu(n, aa, qi), nr(n, jt()), null;
  }
  function uf(n, r) {
    var l = St;
    St |= 1;
    try {
      return n(r);
    } finally {
      St = l, St === 0 && (So = jt() + 500, fs && Mr());
    }
  }
  function Ru(n) {
    Ol !== null && Ol.tag === 0 && !(St & 6) && Ro();
    var r = St;
    St |= 1;
    var l = Dr.transition, o = _t;
    try {
      if (Dr.transition = null, _t = 1, n) return n();
    } finally {
      _t = o, Dr.transition = l, St = r, !(St & 6) && Mr();
    }
  }
  function Vd() {
    Sa = yo.current, Kt(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dv(l)), xn !== null) for (l = xn.return; l !== null; ) {
      var o = l;
      switch (bc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), Kt(Un), Kt(Sn), ys();
          break;
        case 5:
          wd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          Kt(hn);
          break;
        case 19:
          Kt(hn);
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
    if (Hn = n, xn = n = Nl(n.current, null), dr = Sa = r, Qn = 0, gu = null, Ns = Eu = Su = 0, aa = go = null, su !== null) {
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
      var l = xn;
      try {
        if (gd(), Ne.current = Yt, Dc) {
          for (var o = tt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (bt = 0, Yn = Xt = tt = null, gs = !1, Ss = 0, yu.current = null, l === null || l.return === null) {
          Qn = 1, gu = r, xn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = dr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var U = T, K = E, J = K.tag;
            if (!(K.mode & 1) && (J === 0 || J === 11 || J === 15)) {
              var q = K.alternate;
              q ? (K.updateQueue = q.updateQueue, K.memoizedState = q.memoizedState, K.lanes = q.lanes) : (K.updateQueue = null, K.memoizedState = null);
            }
            var he = Nd(m);
            if (he !== null) {
              he.flags &= -257, Yv(he, m, E, d, r), he.mode & 1 && Ld(d, U, r), r = he, T = U;
              var Re = r.updateQueue;
              if (Re === null) {
                var we = /* @__PURE__ */ new Set();
                we.add(T), r.updateQueue = we;
              } else Re.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Ld(d, U, r), Bd();
                break e;
              }
              T = Error(M(426));
            }
          } else if (fn && E.mode & 1) {
            var _n = Nd(m);
            if (_n !== null) {
              !(_n.flags & 65536) && (_n.flags |= 256), Yv(_n, m, E, d, r), ps(_l(T, E));
              break e;
            }
          }
          d = T = _l(T, E), Qn !== 4 && (Qn = 2), go === null ? go = [d] : go.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = ws(d, T, r);
                jv(d, D);
                break e;
              case 1:
                E = T;
                var w = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ha === null || !Ha.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var te = $v(d, E, r);
                  jv(d, te);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        rh(l);
      } catch (_e) {
        r = _e, xn === l && l !== null && (xn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nh() {
    var n = af.current;
    return af.current = Yt, n === null ? Yt : n;
  }
  function Bd() {
    (Qn === 0 || Qn === 3 || Qn === 2) && (Qn = 4), Hn === null || !(Su & 268435455) && !(Eu & 268435455) || Ll(Hn, dr);
  }
  function sf(n, r) {
    var l = St;
    St |= 2;
    var o = nh();
    (Hn !== n || dr !== r) && (qi = null, Tu(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        of(n, c);
      }
    while (!0);
    if (gd(), St = l, af.current = o, xn !== null) throw Error(M(261));
    return Hn = null, dr = 0, Qn;
  }
  function uy() {
    for (; xn !== null; ) $d(xn);
  }
  function oy() {
    for (; xn !== null && !Tr(); ) $d(xn);
  }
  function $d(n) {
    var r = Id(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : xn = r, yu.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Gv(l, r), l !== null) {
          l.flags &= 32767, xn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Qn = 6, xn = null;
          return;
        }
      } else if (l = Ad(l, r, Sa), l !== null) {
        xn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        xn = r;
        return;
      }
      xn = r = n;
    } while (r !== null);
    Qn === 0 && (Qn = 5);
  }
  function bu(n, r, l) {
    var o = _t, c = Dr.transition;
    try {
      Dr.transition = null, _t = 1, sy(n, r, l, o);
    } finally {
      Dr.transition = c, _t = o;
    }
    return null;
  }
  function sy(n, r, l, o) {
    do
      Ro();
    while (Ol !== null);
    if (St & 6) throw Error(M(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(M(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Io(n, d), n === Hn && (xn = Hn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, lh(Ui, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dr.transition, Dr.transition = null;
      var m = _t;
      _t = 1;
      var E = St;
      St |= 4, yu.current = null, ly(n, l), Xv(l, n), Sv(os), dl = !!ru, os = ru = null, n.current = l, Os(l), Ka(), St = E, _t = m, Dr.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ol = n, zs = c), d = n.pendingLanes, d === 0 && (Ha = null), $o(l.stateNode), nr(n, jt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (kl) throw kl = !1, n = Ms, Ms = null, n;
    return zs & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Ol !== null) {
      var n = Wo(zs), r = Dr.transition, l = _t;
      try {
        if (Dr.transition = null, _t = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, zs = 0, St & 6) throw Error(M(331));
          var c = St;
          for (St |= 4, ge = n.current; ge !== null; ) {
            var d = ge, m = d.child;
            if (ge.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var U = E[T];
                  for (ge = U; ge !== null; ) {
                    var K = ge;
                    switch (K.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, K, d);
                    }
                    var J = K.child;
                    if (J !== null) J.return = K, ge = J;
                    else for (; ge !== null; ) {
                      K = ge;
                      var q = K.sibling, he = K.return;
                      if (qv(K), K === U) {
                        ge = null;
                        break;
                      }
                      if (q !== null) {
                        q.return = he, ge = q;
                        break;
                      }
                      ge = he;
                    }
                  }
                }
                var Re = d.alternate;
                if (Re !== null) {
                  var we = Re.child;
                  if (we !== null) {
                    Re.child = null;
                    do {
                      var _n = we.sibling;
                      we.sibling = null, we = _n;
                    } while (we !== null);
                  }
                }
                ge = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ge = m;
            else e: for (; ge !== null; ) {
              if (d = ge, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, ge = D;
                break e;
              }
              ge = d.return;
            }
          }
          var w = n.current;
          for (ge = w; ge !== null; ) {
            m = ge;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, ge = L;
            else e: for (m = w; ge !== null; ) {
              if (E = ge, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tf(9, E);
                }
              } catch (_e) {
                En(E, E.return, _e);
              }
              if (E === m) {
                ge = null;
                break e;
              }
              var te = E.sibling;
              if (te !== null) {
                te.return = E.return, ge = te;
                break e;
              }
              ge = E.return;
            }
          }
          if (St = c, Mr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(ol, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        _t = l, Dr.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = _l(l, r), r = ws(n, r, 1), n = Tl(n, r, 1), r = nn(), n !== null && (fl(n, 1, r), nr(n, r));
  }
  function En(n, r, l) {
    if (n.tag === 3) ah(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        ah(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
          n = _l(l, n), n = $v(r, n, 1), r = Tl(r, n, 1), n = nn(), r !== null && (fl(r, 1, n), nr(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function Yd(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = nn(), n.pingedLanes |= n.suspendedLanes & l, Hn === n && (dr & l) === l && (Qn === 4 || Qn === 3 && (dr & 130023424) === dr && 500 > jt() - Pd ? Tu(n, 0) : Ns |= l), nr(n, r);
  }
  function ih(n, r) {
    r === 0 && (n.mode & 1 ? (r = sl, sl <<= 1, !(sl & 130023424) && (sl = 4194304)) : r = 1);
    var l = nn();
    n = Ei(n, r), n !== null && (fl(n, r, l), nr(n, l));
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
        throw Error(M(314));
    }
    o !== null && o.delete(r), ih(n, l);
  }
  var Id;
  Id = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Un.current) tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return tr = !1, ef(n, r, l);
      tr = !!(n.flags & 131072);
    }
    else tr = !1, fn && r.flags & 1048576 && Ov(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ha(r, Sn.current);
        lo(r, l), c = He(null, r, o, n, c, l);
        var d = bl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, An(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, kd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, fn && d && dd(r), wn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (ja(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = py(o), n = ta(o, n), c) {
            case 0:
              r = qc(null, r, o, n, l);
              break e;
            case 1:
              r = ay(null, r, o, n, l);
              break e;
            case 11:
              r = Gc(null, r, o, n, l);
              break e;
            case 14:
              r = na(null, r, o, ta(o.type, n), l);
              break e;
          }
          throw Error(M(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), qc(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ay(n, r, o, c, l);
      case 3:
        e: {
          if (Kc(r), n === null) throw Error(M(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Av(n, r), xc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = _l(Error(M(423)), r), r = vo(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = _l(Error(M(424)), r), r = vo(n, r, o, l, c);
            break e;
          } else for (Zr = ei(r.stateNode.containerInfo.firstChild), Jr = r, fn = !0, ni = null, l = sr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), o === c) {
              r = cr(n, r, l);
              break e;
            }
            wn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bd(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), xs(n, r), wn(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Iv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : wn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Gc(n, r, o, c, l);
      case 7:
        return wn(n, r, r.pendingProps, l), r.child;
      case 8:
        return wn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return wn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, tn(le, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !Un.current) {
              r = cr(n, r, l);
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
                      var K = U.pending;
                      K === null ? T.next = T : (T.next = K.next, K.next = T), U.pending = T;
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
              if (m = d.return, m === null) throw Error(M(341));
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
          wn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = $t(c), o = o(c), r.flags |= 1, wn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), na(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ja(n, r), r.tag = 1, An(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Bv(r, o, c), kd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return ra(n, r, l);
      case 22:
        return it(n, r, l);
    }
    throw Error(M(156, r.tag));
  };
  function lh(n, r) {
    return an(n, r);
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
      if (n = n.$$typeof, n === It) return 11;
      if (n === Ft) return 14;
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
      case Cn:
        return n = Pa(12, l, r, c | 2), n.elementType = Cn, n.lanes = d, n;
      case Rt:
        return n = Pa(13, l, r, c), n.elementType = Rt, n.lanes = d, n;
      case Fe:
        return n = Pa(19, l, r, c), n.elementType = Fe, n.lanes = d, n;
      case ft:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case zt:
            m = 10;
            break e;
          case pn:
            m = 9;
            break e;
          case It:
            m = 11;
            break e;
          case Ft:
            m = 14;
            break e;
          case Et:
            m = 16, o = null;
            break e;
        }
        throw Error(M(130, n == null ? n : typeof n, ""));
    }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Ml(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function To(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = ft, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function wu(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function Wd(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function uh(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ql(0), this.expirationTimes = ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ql(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ff(n, r, l, o, c, d, m, E, T) {
    return n = new uh(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(d), n;
  }
  function oh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ee, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function sh(n) {
    if (!n) return vt;
    n = n._reactInternals;
    e: {
      if (fe(n) !== n || n.tag !== 1) throw Error(M(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (An(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(M(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (An(l)) return kv(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = ff(l, o, !0, n, c, d, m, E, T), n.context = sh(null), l = n.current, o = nn(), c = Ea(l), d = Wi(o, c), d.callback = r ?? null, Tl(l, d, c), n.current.lanes = c, fl(n, c, o), nr(n, o), n;
  }
  function df(n, r, l, o) {
    var c = r.current, d = nn(), m = Ea(c);
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
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function hf(n) {
    this._internalRoot = n;
  }
  Ki.prototype.render = hf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(M(409));
    df(n, r, null, null);
  }, Ki.prototype.unmount = hf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ru(function() {
        df(null, n, null, null);
      }), r[Yi] = null;
    }
  };
  function Ki(n) {
    this._internalRoot = n;
  }
  Ki.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = vi();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Xa.length && r !== 0 && r < Xa[l].priority; l++) ;
      Xa.splice(l, 0, n), l === 0 && Pu(n);
    }
  };
  function Kd(n) {
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
          var U = pf(m);
          d.call(U);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", fh);
      return n._reactRootContainer = m, n[Yi] = m.current, ls(n.nodeType === 8 ? n.parentNode : n), Ru(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = pf(T);
        E.call(U);
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
          var l = Gr(r.pendingLanes);
          l !== 0 && (Qo(r, l | 1), nr(r, jt()), !(St & 6) && (So = jt() + 500, Mr()));
        }
        break;
      case 13:
        Ru(function() {
          var o = Ei(n, 1);
          if (o !== null) {
            var c = nn();
            Ca(o, n, 1, c);
          }
        }), vf(n, 1);
    }
  }, Dt = function(n) {
    if (n.tag === 13) {
      var r = Ei(n, 134217728);
      if (r !== null) {
        var l = nn();
        Ca(r, n, 134217728, l);
      }
      vf(n, 134217728);
    }
  }, uc = function(n) {
    if (n.tag === 13) {
      var r = Ea(n), l = Ei(n, r);
      if (l !== null) {
        var o = nn();
        Ca(l, n, r, o);
      }
      vf(n, r);
    }
  }, vi = function() {
    return _t;
  }, Ge = function(n, r) {
    var l = _t;
    try {
      return _t = n, r();
    } finally {
      _t = l;
    }
  }, Qt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Ln(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Ii(o);
              if (!c) throw Error(M(90));
              Gn(o), Ln(o, c);
            }
          }
        }
        break;
      case "textarea":
        Rr(n, l);
        break;
      case "select":
        r = l.value, r != null && $n(n, !!l.multiple, r, !1);
    }
  }, Il = uf, Ql = Ru;
  var hy = { usingClientEntryPoint: !1, Events: [cs, Le, Ii, Da, Ni, uf] }, bo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ot(n), n === null ? null : n.stateNode;
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
    if (!Kd(r)) throw Error(M(200));
    return oh(n, r, null, l);
  }, Qa.createRoot = function(n, r) {
    if (!Kd(n)) throw Error(M(299));
    var l = !1, o = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ff(n, 1, !1, null, null, l, !1, o, c), n[Yi] = r.current, ls(n.nodeType === 8 ? n.parentNode : n), new hf(r);
  }, Qa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(M(188)) : (n = Object.keys(n).join(","), Error(M(268, n)));
    return n = ot(r), n = n === null ? null : n.stateNode, n;
  }, Qa.flushSync = function(n) {
    return Ru(n);
  }, Qa.hydrate = function(n, r, l) {
    if (!mf(r)) throw Error(M(200));
    return yf(null, n, r, !0, l);
  }, Qa.hydrateRoot = function(n, r, l) {
    if (!Kd(n)) throw Error(M(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[Yi] = r.current, ls(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Ki(r);
  }, Qa.render = function(n, r, l) {
    if (!mf(r)) throw Error(M(200));
    return yf(null, n, r, !1, l);
  }, Qa.unmountComponentAtNode = function(n) {
    if (!mf(n)) throw Error(M(40));
    return n._reactRootContainer ? (Ru(function() {
      yf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Yi] = null;
      });
    }), !0) : !1;
  }, Qa.unstable_batchedUpdates = uf, Qa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!mf(l)) throw Error(M(200));
    if (n == null || n._reactInternals === void 0) throw Error(M(38));
    return yf(n, r, l, !1, o);
  }, Qa.version = "18.3.1-next-f1338f8080-20240426", Qa;
}
var Wa = {}, rT;
function sD() {
  if (rT) return Wa;
  rT = 1;
  var $ = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return $.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var W = Vn, M = oT(), Pe = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, rt = !1;
    function ut(e) {
      rt = e;
    }
    function ke(e) {
      if (!rt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        $e("warn", e, a);
      }
    }
    function S(e) {
      if (!rt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        $e("error", e, a);
      }
    }
    function $e(e, t, a) {
      {
        var i = Pe.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var pe = 0, X = 1, re = 2, j = 3, ee = 4, G = 5, oe = 6, Ie = 7, ln = 8, Oe = 9, xe = 10, je = 11, mt = 12, Ee = 13, ct = 14, Qe = 15, Cn = 16, zt = 17, pn = 18, It = 19, Rt = 21, Fe = 22, Ft = 23, Et = 24, ft = 25, Y = !0, Ce = !1, se = !1, _ = !1, I = !1, Me = !0, We = !0, qe = !0, dt = !0, xt = /* @__PURE__ */ new Set(), Je = {}, Tt = {};
    function Bt(e, t) {
      kn(e, t), kn(e + "Capture", t);
    }
    function kn(e, t) {
      Je[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Je[e] = t;
      {
        var a = e.toLowerCase();
        Tt[a] = e, e === "onDoubleClick" && (Tt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        xt.add(t[i]);
    }
    var Gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function On(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Cr(e) {
      try {
        return Bn(e), !1;
      } catch {
        return !0;
      }
    }
    function Bn(e) {
      return "" + e;
    }
    function Ln(e, t) {
      if (Cr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Bn(e);
    }
    function ca(e) {
      if (Cr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", On(e)), Bn(e);
    }
    function Ga(e, t) {
      if (Cr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Bn(e);
    }
    function kr(e, t) {
      if (Cr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, On(e)), Bn(e);
    }
    function $n(e) {
      if (Cr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", On(e)), Bn(e);
    }
    function qn(e) {
      if (Cr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", On(e)), Bn(e);
    }
    var Kn = 0, Rr = 1, qa = 2, Nn = 3, lr = 4, Ir = 5, Li = 6, fa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ae = fa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ue = new RegExp("^[" + fa + "][" + ae + "]*$"), lt = {}, Ut = {};
    function un(e) {
      return ir.call(Ut, e) ? !0 : ir.call(lt, e) ? !1 : Ue.test(e) ? (Ut[e] = !0, !0) : (lt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function on(e, t, a) {
      return t !== null ? t.type === Kn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function sn(e, t, a, i) {
      if (a !== null && a.type === Kn)
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
    function Xn(e, t, a, i) {
      if (t === null || typeof t > "u" || sn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Nn:
            return !t;
          case lr:
            return t === !1;
          case Ir:
            return isNaN(t);
          case Li:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function rn(e) {
      return At.hasOwnProperty(e) ? At[e] : null;
    }
    function Qt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === qa || t === Nn || t === lr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var At = {}, da = [
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
      At[e] = new Qt(
        e,
        Kn,
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
      At[t] = new Qt(
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
      At[e] = new Qt(
        e,
        qa,
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
      At[e] = new Qt(
        e,
        qa,
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
      At[e] = new Qt(
        e,
        Nn,
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
      At[e] = new Qt(
        e,
        Nn,
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
      At[e] = new Qt(
        e,
        lr,
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
      At[e] = new Qt(
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
      At[e] = new Qt(
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
    var _a = /[\-\:]([a-z])/g, Da = function(e) {
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
      var t = e.replace(_a, Da);
      At[t] = new Qt(
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
      var t = e.replace(_a, Da);
      At[t] = new Qt(
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
      var t = e.replace(_a, Da);
      At[t] = new Qt(
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
      At[e] = new Qt(
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
    At[Ni] = new Qt(
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
      At[e] = new Qt(
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
        Ln(a, t), i.sanitizeURL && Mi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === lr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Xn(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Xn(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Nn)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!un(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Ln(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = rn(t);
      if (!on(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (un(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Ln(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Nn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, b;
          x === Nn || x === lr && a === !0 ? b = "" : (Ln(a, y), b = "" + a, u.sanitizeURL && Mi(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var ur = Symbol.for("react.element"), va = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), R = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), pt = Symbol.for("react.memo"), Ke = Symbol.for("react.lazy"), yt = Symbol.for("react.scope"), ot = Symbol.for("react.debug_trace_mode"), Rn = Symbol.for("react.offscreen"), an = Symbol.for("react.legacy_hidden"), cn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, jt = "@@iterator";
    function vn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[jt];
      return typeof t == "function" ? t : null;
    }
    var et = Object.assign, di = 0, Ui, ac, Ai, ol, Wr, $o, Or;
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
            log: et({}, e, {
              value: Ui
            }),
            info: et({}, e, {
              value: ac
            }),
            warn: et({}, e, {
              value: Ai
            }),
            error: et({}, e, {
              value: ol
            }),
            group: et({}, e, {
              value: Wr
            }),
            groupCollapsed: et({}, e, {
              value: $o
            }),
            groupEnd: et({}, e, {
              value: Or
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = Pe.ReactCurrentDispatcher, sl;
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
        pi = !1, ji.current = s, lc(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", z = b ? Gr(b) : "";
      return typeof e == "function" && cl.set(e, z), z;
    }
    function Gl(e, t, a) {
      return Fi(e, !0);
    }
    function ql(e, t, a) {
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
        return Gr(e);
      switch (e) {
        case ue:
          return Gr("Suspense");
        case fe:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Q:
            return ql(e.render);
          case pt:
            return Io(e.type, t, a);
          case Ke: {
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
        case G:
          return Gr(e.type);
        case Cn:
          return Gr("Lazy");
        case Ee:
          return Gr("Suspense");
        case It:
          return Gr("SuspenseList");
        case pe:
        case re:
        case Qe:
          return ql(e.type);
        case je:
          return ql(e.type.render);
        case X:
          return Gl(e.type);
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
    function Dt(e) {
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
        case ue:
          return "Suspense";
        case fe:
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
          case Q:
            return Wo(e, e.render, "ForwardRef");
          case pt:
            var i = e.displayName || null;
            return i !== null ? i : Dt(e.type) || "Memo";
          case Ke: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Dt(f(s));
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
    function Ge(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Et:
          return "Cache";
        case Oe:
          var i = a;
          return vi(i) + ".Consumer";
        case xe:
          var u = a;
          return vi(u._context) + ".Provider";
        case pn:
          return "DehydratedFragment";
        case je:
          return uc(a, a.render, "ForwardRef");
        case Ie:
          return "Fragment";
        case G:
          return a;
        case ee:
          return "Portal";
        case j:
          return "Root";
        case oe:
          return "Text";
        case Cn:
          return Dt(a);
        case ln:
          return a === ci ? "StrictMode" : "Mode";
        case Fe:
          return "Offscreen";
        case mt:
          return "Profiler";
        case Rt:
          return "Scope";
        case Ee:
          return "Suspense";
        case It:
          return "SuspenseList";
        case ft:
          return "TracingMarker";
        case X:
        case pe:
        case zt:
        case re:
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
    var Kl = Pe.ReactDebugCurrentFrame, Jn = null, qr = !1;
    function Lr() {
      {
        if (Jn === null)
          return null;
        var e = Jn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ge(e);
      }
      return null;
    }
    function hi() {
      return Jn === null ? "" : _t(Jn);
    }
    function gn() {
      Kl.getCurrentStack = null, Jn = null, qr = !1;
    }
    function Wt(e) {
      Kl.getCurrentStack = e === null ? null : hi, Jn = e, qr = !1;
    }
    function Xa() {
      return Jn;
    }
    function ka(e) {
      qr = e;
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
          return qn(e), e;
        default:
          return "";
      }
    }
    var qf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Pu(e, t) {
      qf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Xl(e) {
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
      return e && (Xl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Oa(e) {
      var t = Xl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      qn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            qn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            qn(p), i = "" + p;
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
      var a = e, i = t.checked, u = et({}, t, {
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
      t.hasOwnProperty("value") ? Se(a, t.type, u) : t.hasOwnProperty("defaultValue") && Se(a, t.type, Nr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function N(e, t, a) {
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
      C(a, t), ne(a, t);
    }
    function ne(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Ln(a, "name");
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
    function Se(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = br(e._wrapperState.initialValue) : e.defaultValue !== br(a) && (e.defaultValue = br(a)));
    }
    var ve = !1, Ve = !1, st = !1;
    function Ht(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? W.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Ve || (Ve = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (st || (st = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ve && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ve = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", br(Nr(t.value)));
    }
    var qt = Array.isArray;
    function at(e) {
      return qt(e);
    }
    var en;
    en = !1;
    function Tn() {
      var e = Lr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zl = ["value", "defaultValue"];
    function qo(e) {
      {
        Pu("select", e);
        for (var t = 0; t < Zl.length; t++) {
          var a = Zl[t];
          if (e[a] != null) {
            var i = at(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Tn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Tn());
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
        for (var g = br(Nr(a)), x = null, b = 0; b < u.length; b++) {
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
      return et({}, t, {
        value: void 0
      });
    }
    function Ko(e, t) {
      var a = e;
      qo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !en && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), en = !0);
    }
    function Kf(e, t) {
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
    function Xf(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var Zp = !1;
    function sc(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = et({}, t, {
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
            if (at(u)) {
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
    }), Kr = 1, Bi = 3, Mn = 8, $i = 9, Xo = 11, vl = function(e, t) {
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
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Qu.hasOwnProperty(e) && Qu[e]) ? t + "px" : (kr(t, e), ("" + t).trim());
    }
    var lv = /([A-Z])/g, Wu = /^ms-/;
    function Gm(e) {
      return e.replace(lv, "-$1").toLowerCase().replace(Wu, "-ms-");
    }
    var uv = function() {
    };
    {
      var qm = /^(?:webkit|moz|o)[A-Z]/, ov = /^-ms-/, sv = /-(.)/g, Gu = /;\s*$/, mi = {}, ed = {}, Jo = !1, cv = !1, fv = function(e) {
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
        ed.hasOwnProperty(t) && ed[t] || (ed[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Gu, "")));
      }, pv = function(e, t) {
        Jo || (Jo = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, vv = function(e, t) {
        cv || (cv = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      uv = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : qm.test(e) ? nd(e) : Gu.test(t) && dv(e, t), typeof t == "number" && (isNaN(t) ? pv(e, t) : isFinite(t) || vv(e, t));
      };
    }
    var Km = uv;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Gm(i)) + ":", t += dc(i, u, s), a = ";";
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
          u || Km(i, t[i]);
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
    }, yv = et({
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
    var qu = {
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
    }, Ku = {}, Xu = new RegExp("^(aria)-[" + ae + "]*$"), rd = new RegExp("^(aria)[A-Z][" + ae + "]*$");
    function es(e, t) {
      {
        if (ir.call(Ku, t) && Ku[t])
          return !0;
        if (rd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Sv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ku[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ku[t] = !0, !0;
        }
        if (Xu.test(t)) {
          var u = t.toLowerCase(), s = Sv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ku[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ku[t] = !0, !0;
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
      var wr = {}, ns = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + ae + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + ae + "]*$");
      vc = function(e, t, a, i) {
        if (ir.call(wr, t) && wr[t])
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
        var v = rn(t), y = v !== null && v.type === Kn;
        if (qu.hasOwnProperty(u)) {
          var g = qu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && sn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : sn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Nn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
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
    var mc = null, Pt = null, ml = null;
    function is(e) {
      var t = _o(e);
      if (t) {
        if (typeof mc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Dh(a);
          mc(t.stateNode, t.type, i);
        }
      }
    }
    function ls(e) {
      mc = e;
    }
    function ud(e) {
      Pt ? ml ? ml.push(e) : ml = [e] : Pt = e;
    }
    function od() {
      return Pt !== null || ml !== null;
    }
    function Zu() {
      if (Pt) {
        var e = Pt, t = ml;
        if (Pt = null, ml = null, is(e), t)
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
    function xv(e, t, a) {
      if (yc)
        return e(t, a);
      yc = !0;
      try {
        return us(e, t, a);
      } finally {
        yc = !1, ty();
      }
    }
    function _v(e, t, a) {
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
      var i = Dh(a);
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
    if (Gn)
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
    var Dv = Ec;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Cc = document.createElement("react");
      Dv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, b = !0, z = window.event, A = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          Cc.removeEventListener(P, Ae, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var ce = Array.prototype.slice.call(arguments, 3);
        function Ae() {
          x = !0, H(), a.apply(i, ce), b = !1;
        }
        var De, Ot = !1, Ct = !1;
        function k(O) {
          if (De = O.error, Ot = !0, De === null && O.colno === 0 && O.lineno === 0 && (Ct = !0), O.defaultPrevented && De != null && typeof De == "object")
            try {
              De._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), Cc.addEventListener(P, Ae, !1), g.initEvent(P, !1, !1), Cc.dispatchEvent(g), A && Object.defineProperty(window, "event", A), x && b && (Ot ? Ct && (De = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : De = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(De)), window.removeEventListener("error", k), !x)
          return H(), Ec.apply(this, arguments);
      };
    }
    var ny = Dv, eo = !1, to = null, ei = !1, Rc = null, no = {
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
    var Le = (
      /*                      */
      0
    ), Ii = (
      /*                */
      1
    ), zn = (
      /*                    */
      2
    ), gt = (
      /*                       */
      4
    ), Xr = (
      /*                */
      16
    ), Kt = (
      /*                 */
      32
    ), tn = (
      /*                     */
      64
    ), vt = (
      /*                   */
      128
    ), Sn = (
      /*            */
      256
    ), Un = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), ha = (
      /*                      */
      2048
    ), An = (
      /*                    */
      4096
    ), gi = (
      /*                   */
      8192
    ), Tc = (
      /*             */
      16384
    ), kv = (
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
      gt | za | 0
    ), ao = zn | gt | Xr | Kt | Un | An | gi, El = gt | tn | Un | gi, or = ha | Xr, jn = yl | fd | ds, uu = Pe.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (zn | An)) !== Le && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === j ? a : null;
    }
    function Si(e) {
      if (e.tag === Ee) {
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
    function Ov(e) {
      return zr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === X) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ge(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
      if (i.tag !== j)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Jr(e);
      return t !== null ? fn(t) : null;
    }
    function fn(e) {
      if (e.tag === G || e.tag === oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = fn(t);
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
      if (e.tag === G || e.tag === oe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ee) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = M.unstable_scheduleCallback, hd = M.unstable_cancelCallback, md = M.unstable_shouldYield, Lv = M.unstable_requestPaint, bn = M.unstable_now, Nv = M.unstable_getCurrentPriorityLevel, Qi = M.unstable_ImmediatePriority, ps = M.unstable_UserBlockingPriority, ou = M.unstable_NormalPriority, vs = M.unstable_LowPriority, io = M.unstable_IdlePriority, Mv = M.unstable_yieldValue, zv = M.unstable_setDisableYieldValue, ri = null, sr = null, le = null, ma = !1, xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        We && (e = et({}, e, {
          getLaneLabelMap: Cd,
          injectProfilingHooks: su
        })), ri = t.inject(e), sr = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function gd(e, t) {
      if (sr && typeof sr.onScheduleFiberRoot == "function")
        try {
          sr.onScheduleFiberRoot(ri, e, t);
        } catch (a) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Sd(e, t) {
      if (sr && typeof sr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & vt) === vt;
          if (qe) {
            var i;
            switch (t) {
              case ra:
                i = Qi;
                break;
              case ja:
                i = ps;
                break;
              case cr:
                i = ou;
                break;
              case ef:
                i = io;
                break;
              default:
                i = ou;
                break;
            }
            sr.onCommitFiberRoot(ri, e, i, a);
          }
        } catch (u) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (sr && typeof sr.onPostCommitFiberRoot == "function")
        try {
          sr.onPostCommitFiberRoot(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function lo(e) {
      if (sr && typeof sr.onCommitFiberUnmount == "function")
        try {
          sr.onCommitFiberUnmount(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function $t(e) {
      if (typeof Mv == "function" && (zv(e), ut(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      le = e;
    }
    function Cd() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < _d; a++) {
          var i = Pv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Uv(e) {
      le !== null && typeof le.markCommitStarted == "function" && le.markCommitStarted(e);
    }
    function Ei() {
      le !== null && typeof le.markCommitStopped == "function" && le.markCommitStopped();
    }
    function Aa(e) {
      le !== null && typeof le.markComponentRenderStarted == "function" && le.markComponentRenderStarted(e);
    }
    function Rl() {
      le !== null && typeof le.markComponentRenderStopped == "function" && le.markComponentRenderStopped();
    }
    function Av(e) {
      le !== null && typeof le.markComponentPassiveEffectMountStarted == "function" && le.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      le !== null && typeof le.markComponentPassiveEffectMountStopped == "function" && le.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      le !== null && typeof le.markComponentPassiveEffectUnmountStarted == "function" && le.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      le !== null && typeof le.markComponentPassiveEffectUnmountStopped == "function" && le.markComponentPassiveEffectUnmountStopped();
    }
    function jv(e) {
      le !== null && typeof le.markComponentLayoutEffectMountStarted == "function" && le.markComponentLayoutEffectMountStarted(e);
    }
    function xc() {
      le !== null && typeof le.markComponentLayoutEffectMountStopped == "function" && le.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      le !== null && typeof le.markComponentLayoutEffectUnmountStarted == "function" && le.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      le !== null && typeof le.markComponentLayoutEffectUnmountStopped == "function" && le.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      le !== null && typeof le.markComponentErrored == "function" && le.markComponentErrored(e, t, a);
    }
    function hs(e, t, a) {
      le !== null && typeof le.markComponentSuspended == "function" && le.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      le !== null && typeof le.markLayoutEffectsStarted == "function" && le.markLayoutEffectsStarted(e);
    }
    function cu() {
      le !== null && typeof le.markLayoutEffectsStopped == "function" && le.markLayoutEffectsStopped();
    }
    function Td(e) {
      le !== null && typeof le.markPassiveEffectsStarted == "function" && le.markPassiveEffectsStarted(e);
    }
    function oo() {
      le !== null && typeof le.markPassiveEffectsStopped == "function" && le.markPassiveEffectsStopped();
    }
    function bd(e) {
      le !== null && typeof le.markRenderStarted == "function" && le.markRenderStarted(e);
    }
    function wd() {
      le !== null && typeof le.markRenderYielded == "function" && le.markRenderYielded();
    }
    function hn() {
      le !== null && typeof le.markRenderStopped == "function" && le.markRenderStopped();
    }
    function _c(e) {
      le !== null && typeof le.markRenderScheduled == "function" && le.markRenderScheduled(e);
    }
    function xd(e, t) {
      le !== null && typeof le.markForceUpdateScheduled == "function" && le.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      le !== null && typeof le.markStateUpdateScheduled == "function" && le.markStateUpdateScheduled(e, t);
    }
    var Ne = (
      /*                         */
      0
    ), ht = (
      /*                 */
      1
    ), bt = (
      /*                    */
      2
    ), tt = (
      /*               */
      8
    ), Xt = (
      /*              */
      16
    ), Yn = Math.clz32 ? Math.clz32 : Ss, Dc = Math.log, gs = Math.LN2;
    function Ss(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Dc(t) / gs | 0) | 0;
    }
    var _d = 31, V = (
      /*                        */
      0
    ), Fn = (
      /*                          */
      0
    ), He = (
      /*                        */
      1
    ), bl = (
      /*    */
      2
    ), Zn = (
      /*             */
      4
    ), er = (
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
    ), kc = (
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
    ), xl = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function Pv(e) {
      {
        if (e & He)
          return "Sync";
        if (e & bl)
          return "InputContinuousHydration";
        if (e & Zn)
          return "InputContinuous";
        if (e & er)
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
        if (e & xl)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var Yt = -1, $c = so, Yc = pu;
    function bs(e) {
      switch (vu(e)) {
        case He:
          return He;
        case bl:
          return bl;
        case Zn:
          return Zn;
        case er:
          return er;
        case ea:
          return ea;
        case fu:
          return fu;
        case so:
        case kc:
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
        case xl:
          return xl;
        case ya:
          return ya;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ta(e, t) {
      var a = e.pendingLanes;
      if (a === V)
        return V;
      var i = V, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hv;
      if (f !== V) {
        var p = f & ~u;
        if (p !== V)
          i = bs(p);
        else {
          var v = f & s;
          v !== V && (i = bs(v));
        }
      } else {
        var y = a & ~u;
        y !== V ? i = bs(y) : s !== V && (i = bs(s));
      }
      if (i === V)
        return V;
      if (t !== V && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === V) {
        var g = vu(i), x = vu(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ea && (x & wl) !== V
        )
          return t;
      }
      (i & Zn) !== V && (i |= a & ea);
      var b = e.entangledLanes;
      if (b !== V)
        for (var z = e.entanglements, A = i & b; A > 0; ) {
          var H = wn(A), ce = 1 << H;
          i |= z[H], A &= ~ce;
        }
      return i;
    }
    function Dd(e, t) {
      for (var a = e.eventTimes, i = Yt; t > 0; ) {
        var u = wn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ic(e, t) {
      switch (e) {
        case He:
        case bl:
        case Zn:
          return t + 250;
        case er:
        case ea:
        case fu:
        case so:
        case kc:
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
          return Yt;
        case po:
        case Ts:
        case xl:
        case ya:
          return Yt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Yt;
      }
    }
    function Vv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = wn(f), v = 1 << p, y = s[p];
        y === Yt ? ((v & i) === V || (v & u) !== V) && (s[p] = Ic(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return bs(e.pendingLanes);
    }
    function Qc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== V ? t : t & ya ? ya : V;
    }
    function kd(e) {
      return (e & He) !== V;
    }
    function _l(e) {
      return (e & Hv) !== V;
    }
    function Wc(e) {
      return (e & Cs) === e;
    }
    function Od(e) {
      var t = He | Zn | ea;
      return (e & t) === V;
    }
    function ry(e) {
      return (e & wl) === e;
    }
    function ws(e, t) {
      var a = bl | Zn | er | ea;
      return (t & a) !== V;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== V;
    }
    function Ld(e) {
      return (e & wl) !== V;
    }
    function Nd() {
      var e = $c;
      return $c <<= 1, ($c & wl) === V && ($c = so), e;
    }
    function Yv() {
      var e = Yc;
      return Yc <<= 1, (Yc & Cs) === V && (Yc = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function tr(e) {
      return vu(e);
    }
    function wn(e) {
      return 31 - Yn(e);
    }
    function Gc(e) {
      return wn(e);
    }
    function na(e, t) {
      return (e & t) !== V;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function it(e, t) {
      return e | t;
    }
    function xs(e, t) {
      return e & ~t;
    }
    function qc(e, t) {
      return e & t;
    }
    function ay(e) {
      return e;
    }
    function Md(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Kc(e) {
      for (var t = [], a = 0; a < _d; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = V, e.pingedLanes = V);
      var i = e.eventTimes, u = Gc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = wn(i), s = 1 << u;
        a[u] = Yt, i &= ~s;
      }
    }
    function Xc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Iv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = V, e.pingedLanes = V, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = wn(f), v = 1 << p;
        i[p] = V, u[p] = Yt, s[p] = Yt, f &= ~v;
      }
    }
    function _s(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = wn(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Jc(e, t) {
      var a = vu(t), i;
      switch (a) {
        case Zn:
          i = bl;
          break;
        case ea:
          i = er;
          break;
        case so:
        case kc:
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
        case xl:
          i = Ts;
          break;
        default:
          i = Fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fn ? Fn : i;
    }
    function Qv(e, t, a) {
      if (xr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Gc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ud(e, t) {
      if (xr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Gc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Zc(e, t) {
      return null;
    }
    var ra = He, ja = Zn, cr = ea, ef = xl, ho = Fn;
    function ga() {
      return ho;
    }
    function In(e) {
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
    function Ds(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function _r(e, t) {
      return e > t ? e : t;
    }
    function Ad(e, t) {
      return e !== 0 && e < t;
    }
    function Gv(e) {
      var t = vu(e);
      return Ad(ra, t) ? Ad(ja, t) ? _l(t) ? cr : ef : ja : ra;
    }
    function mu(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fr;
    function iy(e) {
      fr = e;
    }
    function ge(e) {
      fr(e);
    }
    var Dl;
    function jd(e) {
      Dl = e;
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
    function qv(e) {
      nf = e;
    }
    var rf = !1, ks = [], Ri = null, Ti = null, mn = null, Ur = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Gi = [], Kv = [
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
    function Xv(e, t, a, i, u) {
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
          mn = null;
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
        var f = Xv(t, a, i, u, s);
        if (t !== null) {
          var p = _o(t);
          p !== null && Dl(p);
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
          return mn = Os(mn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return Ur.set(y, Os(Ur.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return Fa.set(x, Os(Fa.get(x) || null, e, t, a, i, g)), !0;
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
          if (i === Ee) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, nf(e.priority, function() {
                Fd(a);
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
    function Zv(e) {
      for (var t = mo(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Gi.length && Ad(t, Gi[i].priority); i++)
        ;
      Gi.splice(i, 0, a), i === 0 && Hd(a);
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
          var f = _o(i);
          return f !== null && Dl(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function eh(e, t, a) {
      Ls(e) && a.delete(t);
    }
    function af() {
      rf = !1, Ri !== null && Ls(Ri) && (Ri = null), Ti !== null && Ls(Ti) && (Ti = null), mn !== null && Ls(mn) && (mn = null), Ur.forEach(eh), Fa.forEach(eh);
    }
    function yu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, M.unstable_scheduleCallback(M.unstable_NormalPriority, af)));
    }
    function Dr(e) {
      if (ks.length > 0) {
        yu(ks[0], e);
        for (var t = 1; t < ks.length; t++) {
          var a = ks[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ri !== null && yu(Ri, e), Ti !== null && yu(Ti, e), mn !== null && yu(mn, e);
      var i = function(p) {
        return yu(p, e);
      };
      Ur.forEach(i), Fa.forEach(i);
      for (var u = 0; u < Gi.length; u++) {
        var s = Gi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Gi.length > 0; ) {
        var f = Gi[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Gi.shift();
      }
    }
    var St = Pe.ReactCurrentBatchConfig, Hn = !0;
    function xn(e) {
      Hn = !!e;
    }
    function dr() {
      return Hn;
    }
    function Sa(e, t, a) {
      var i = go(t), u;
      switch (i) {
        case ra:
          u = yo;
          break;
        case ja:
          u = Qn;
          break;
        case cr:
        default:
          u = gu;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function yo(e, t, a, i) {
      var u = ga(), s = St.transition;
      St.transition = null;
      try {
        In(ra), gu(e, t, a, i);
      } finally {
        In(u), St.transition = s;
      }
    }
    function Qn(e, t, a, i) {
      var u = ga(), s = St.transition;
      St.transition = null;
      try {
        In(ja), gu(e, t, a, i);
      } finally {
        In(u), St.transition = s;
      }
    }
    function gu(e, t, a, i) {
      Hn && Su(e, t, a, i);
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
          var s = _o(u);
          s !== null && ge(s);
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
          if (p === Ee) {
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
              return cr;
            case io:
              return ef;
            default:
              return cr;
          }
        }
        default:
          return cr;
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
    function qi(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var kl = null, Ms = null, Ha = null;
    function lf(e) {
      return kl = e, Ms = Eo(), !0;
    }
    function Ol() {
      kl = null, Ms = null, Ha = null;
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
      return "value" in kl ? kl.value : kl.textContent;
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
    function nn(e) {
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
      return et(t.prototype, {
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
    }, Ca = nn(Ea), nr = et({}, Ea, {
      view: 0,
      detail: 0
    }), th = nn(nr), As, js, Fs;
    function Ll(e) {
      e !== Fs && (Fs && e.type === "mousemove" ? (As = e.screenX - Fs.screenX, js = e.screenY - Fs.screenY) : (As = 0, js = 0), Fs = e);
    }
    var Hs = et({}, nr, {
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
    }), uf = nn(Hs), Ru = et({}, Hs, {
      dataTransfer: 0
    }), Vd = nn(Ru), Tu = et({}, nr, {
      relatedTarget: 0
    }), of = nn(Tu), nh = et({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = nn(nh), sf = et({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = nn(sf), oy = et({}, Ea, {
      data: 0
    }), $d = nn(oy), rh = $d, bu = {
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
    function En(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return En;
    }
    var ih = et({}, nr, {
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
    }), cy = nn(ih), fy = et({}, Hs, {
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
    }), Id = nn(fy), lh = et({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), dy = nn(lh), Pa = et({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = nn(Pa), py = et({}, Hs, {
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
    }), Nl = nn(py), cf = [9, 13, 27, 32], Ml = 229, To = Gn && "CompositionEvent" in window, wu = null;
    Gn && "documentMode" in document && (wu = document.documentMode);
    var Wd = Gn && "TextEvent" in window && !wu, uh = Gn && (!To || wu && wu > 8 && wu <= 11), ff = 32, oh = String.fromCharCode(ff);
    function sh() {
      Bt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Bt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Bt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Bt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gd = !1;
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
    function qd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function hf(e) {
      return e.locale === "ko";
    }
    var Ki = !1;
    function Kd(e, t, a, i, u) {
      var s, f;
      if (To ? s = pf(t) : Ki ? vf(t, i) && (s = "onCompositionEnd") : ch(t, i) && (s = "onCompositionStart"), !s)
        return null;
      uh && !hf(i) && (!Ki && s === "onCompositionStart" ? Ki = lf(u) : s === "onCompositionEnd" && Ki && (f = zs()));
      var p = hh(a, s);
      if (p.length > 0) {
        var v = new $d(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = qd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function mf(e, t) {
      switch (e) {
        case "compositionend":
          return qd(t);
        case "keypress":
          var a = t.which;
          return a !== ff ? null : (Gd = !0, oh);
        case "textInput":
          var i = t.data;
          return i === oh && Gd ? null : i;
        default:
          return null;
      }
    }
    function fh(e, t) {
      if (Ki) {
        if (e === "compositionend" || !To && vf(e, t)) {
          var a = zs();
          return Ol(), Ki = !1, a;
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
      Kd(e, t, a, i, u), vy(e, t, a, i, u);
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
      if (!Gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function gf() {
      Bt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
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
      n(t, l, e, hc(e)), xv(d, t);
    }
    function d(e) {
      xE(e, 0);
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
    Gn && (T = my("input") && (!document.documentMode || document.documentMode > 9));
    function U(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", J);
    }
    function K() {
      r && (r.detachEvent("onpropertychange", J), r = null, l = null);
    }
    function J(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function q(e, t, a) {
      e === "focusin" ? (K(), U(t, a)) : e === "focusout" && K();
    }
    function he(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function Re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function we(e, t) {
      if (e === "click")
        return m(t);
    }
    function _n(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Se(e, "number", e.value);
    }
    function w(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, v, y;
      if (o(p) ? v = E : bo(p) ? T ? v = _n : (v = he, y = q) : Re(p) && (v = we), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      kn("onMouseEnter", ["mouseout", "mouseover"]), kn("onMouseLeave", ["mouseout", "mouseover"]), kn("onPointerEnter", ["pointerout", "pointerover"]), kn("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function te(e, t, a, i, u, s, f) {
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
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var b, z;
        if (v) {
          var A = i.relatedTarget || i.toElement;
          if (b = a, z = A ? Bs(A) : null, z !== null) {
            var H = zr(z);
            (z !== H || z.tag !== G && z.tag !== oe) && (z = null);
          }
        } else
          b = null, z = a;
        if (b !== z) {
          var ce = uf, Ae = "onMouseLeave", De = "onMouseEnter", Ot = "mouse";
          (t === "pointerout" || t === "pointerover") && (ce = Id, Ae = "onPointerLeave", De = "onPointerEnter", Ot = "pointer");
          var Ct = b == null ? g : bf(b), k = z == null ? g : bf(z), P = new ce(Ae, Ot + "leave", b, i, u);
          P.target = Ct, P.relatedTarget = k;
          var O = null, Z = Bs(u);
          if (Z === a) {
            var ye = new ce(De, Ot + "enter", z, i, u);
            ye.target = k, ye.relatedTarget = Ct, O = ye;
          }
          LT(e, P, O, b, z);
        }
      }
    }
    function _e(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Te = typeof Object.is == "function" ? Object.is : _e;
    function ze(e, t) {
      if (Te(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!ir.call(t, s) || !Te(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Ye(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function rr(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Lt(e, t) {
      for (var a = Ye(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Ye(rr(a));
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
    function dT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Lt(e, f), g = Lt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function vE(e) {
      return e && e.nodeType === Bi;
    }
    function hE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : vE(e) ? !1 : vE(t) ? hE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function pT(e) {
      return e && e.ownerDocument && hE(e.ownerDocument.documentElement, e);
    }
    function vT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function mE() {
      for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
        if (vT(t))
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
    function hT() {
      var e = mE();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? yT(e) : null
      };
    }
    function mT(e) {
      var t = mE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && pT(a)) {
        i !== null && gy(a) && gT(a, i);
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
    function yT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = zl(e), t || {
        start: 0,
        end: 0
      };
    }
    function gT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : dT(e, t);
    }
    var ST = Gn && "documentMode" in document && document.documentMode <= 11;
    function ET() {
      Bt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Sf = null, Sy = null, Xd = null, Ey = !1;
    function CT(e) {
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
    function RT(e) {
      return e.window === e ? e.document : e.nodeType === $i ? e : e.ownerDocument;
    }
    function yE(e, t, a) {
      var i = RT(a);
      if (!(Ey || Sf == null || Sf !== Hi(i))) {
        var u = CT(Sf);
        if (!Xd || !ze(Xd, u)) {
          Xd = u;
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
    function TT(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window;
      switch (t) {
        case "focusin":
          (bo(p) || p.contentEditable === "true") && (Sf = p, Sy = a, Xd = null);
          break;
        case "focusout":
          Sf = null, Sy = null, Xd = null;
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
          if (ST)
            break;
        case "keydown":
        case "keyup":
          yE(e, i, u);
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
    }, Cy = {}, gE = {};
    Gn && (gE = document.createElement("div").style, "AnimationEvent" in window || (delete Ef.animationend.animation, delete Ef.animationiteration.animation, delete Ef.animationstart.animation), "TransitionEvent" in window || delete Ef.transitionend.transition);
    function ph(e) {
      if (Cy[e])
        return Cy[e];
      if (!Ef[e])
        return e;
      var t = Ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in gE)
          return Cy[e] = t[a];
      return e;
    }
    var SE = ph("animationend"), EE = ph("animationiteration"), CE = ph("animationstart"), RE = ph("transitionend"), TE = /* @__PURE__ */ new Map(), bE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function wo(e, t) {
      TE.set(e, t), Bt(t, [e]);
    }
    function bT() {
      for (var e = 0; e < bE.length; e++) {
        var t = bE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        wo(a, "on" + i);
      }
      wo(SE, "onAnimationEnd"), wo(EE, "onAnimationIteration"), wo(CE, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(RE, "onTransitionEnd");
    }
    function wT(e, t, a, i, u, s, f) {
      var p = TE.get(t);
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
          case SE:
          case EE:
          case CE:
            v = Bd;
            break;
          case RE:
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
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = kT(a, p, i.type, g, x);
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
    bT(), L(), gf(), ET(), sh();
    function xT(e, t, a, i, u, s, f) {
      wT(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (te(e, t, a, i, u), w(e, t, a, i, u), TT(e, t, a, i, u), yf(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function wE(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ss(i, t, void 0, e), e.currentTarget = null;
    }
    function _T(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          wE(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, b = g.currentTarget, z = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          wE(e, z, b), i = x;
        }
    }
    function xE(e, t) {
      for (var a = (t & tu) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        _T(s, f, a);
      }
      Yi();
    }
    function DT(e, t, a, i, u) {
      var s = hc(a), f = [];
      xT(f, e, i, a, s, t), xE(f, t);
    }
    function yn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = a1(t), u = NT(e);
      i.has(u) || (_E(t, e, yi, a), i.add(u));
    }
    function Ty(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= tu), _E(a, e, i, t);
    }
    var vh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[vh]) {
        e[vh] = !0, xt.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === $i ? e : e.ownerDocument;
        t !== null && (t[vh] || (t[vh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function _E(e, t, a, i, u) {
      var s = Sa(e, t, a), f = void 0;
      os && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? So(e, t, s, f) : Pd(e, t, s) : f !== void 0 ? qi(e, t, s, f) : aa(e, t, s);
    }
    function DE(e, t) {
      return e === t || e.nodeType === Mn && e.parentNode === t;
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
            if (v === j || v === ee) {
              var y = p.stateNode.containerInfo;
              if (DE(y, f))
                break;
              if (v === ee)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === j || x === ee) {
                    var b = g.stateNode.containerInfo;
                    if (DE(b, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var z = Bs(y);
                if (z === null)
                  return;
                var A = z.tag;
                if (A === G || A === oe) {
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
      xv(function() {
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
    function kT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, b = x.stateNode, z = x.tag;
        if (z === G && b !== null && (g = b, p !== null)) {
          var A = ru(y, p);
          A != null && v.push(ep(y, A, g));
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
        if (p === G && f !== null) {
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
      while (e && e.tag !== G);
      return e || null;
    }
    function OT(e, t) {
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
    function kE(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === G && g !== null) {
          var b = g;
          if (u) {
            var z = ru(p, s);
            z != null && f.unshift(ep(p, z, b));
          } else if (!u) {
            var A = ru(p, s);
            A != null && f.push(ep(p, A, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function LT(e, t, a, i, u) {
      var s = i && u ? OT(i, u) : null;
      i !== null && kE(e, t, i, s, !1), u !== null && a !== null && kE(e, a, u, s, !0);
    }
    function NT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, tp = "dangerouslySetInnerHTML", mh = "suppressContentEditableWarning", xo = "suppressHydrationWarning", OE = "autoFocus", Ps = "children", Vs = "style", yh = "__html", wy, gh, np, LE, Sh, NE, ME;
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
        registrationNameDependencies: Je,
        possibleRegistrationNames: Tt
      });
    }, NE = Gn && !document.documentMode, np = function(e, t, a) {
      if (!Va) {
        var i = Eh(a), u = Eh(t);
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
    }, Sh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, ME = function(e, t) {
      var a = e.namespaceURI === Ja ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var MT = /\r\n?/g, zT = /\u0000|\uFFFD/g;
    function Eh(e) {
      $n(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(MT, `
`).replace(zT, "");
    }
    function Ch(e, t, a, i) {
      var u = Eh(t), s = Eh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && Y))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function zE(e) {
      return e.nodeType === $i ? e : e.ownerDocument;
    }
    function UT() {
    }
    function Rh(e) {
      e.onclick = UT;
    }
    function AT(e, t, a, i, u) {
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
          else s === mh || s === xo || s === OE || (Je.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sh(s, f), s === "onScroll" && yn("scroll", t)) : f != null && pa(t, s, f, u));
        }
    }
    function jT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vs ? hv(e, f) : s === tp ? rv(e, f) : s === Ps ? vl(e, f) : pa(e, s, f, i);
      }
    }
    function FT(e, t, a, i) {
      var u, s = zE(a), f, p = i;
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
      return p === Ja && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !ir.call(wy, e) && (wy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function HT(e, t) {
      return zE(t).createTextNode(e);
    }
    function PT(e, t, a, i) {
      var u = hl(t, a);
      gh(t, a);
      var s;
      switch (t) {
        case "dialog":
          yn("cancel", e), yn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            yn(Jd[f], e);
          s = a;
          break;
        case "source":
          yn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e), s = a;
          break;
        case "details":
          yn("toggle", e), s = a;
          break;
        case "input":
          Iu(e, a), s = Na(e, a), yn("invalid", e);
          break;
        case "option":
          Ht(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = eu(e, a), yn("invalid", e);
          break;
        case "textarea":
          ev(e, a), s = sc(e, a), yn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), AT(t, e, i, s, u), t) {
        case "input":
          La(e), N(e, a, !1);
          break;
        case "textarea":
          La(e), nv(e);
          break;
        case "option":
          Gt(e, a);
          break;
        case "select":
          Kf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Rh(e);
          break;
      }
    }
    function VT(e, t, a, i, u) {
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
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Ps || v === mh || v === xo || v === OE || (Je.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === z || b == null && z == null))
          if (v === Vs)
            if (b && Object.freeze(b), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && z[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === tp) {
            var A = b ? b[yh] : void 0, H = z ? z[yh] : void 0;
            A != null && H !== A && (s = s || []).push(v, A);
          } else v === Ps ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === mh || v === xo || (Je.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Sh(v, b), v === "onScroll" && yn("scroll", e)), !s && z !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (Za(g, p[Vs]), (s = s || []).push(Vs, g)), s;
    }
    function BT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && h(e, u);
      var s = hl(a, i), f = hl(a, u);
      switch (jT(e, t, s, f), a) {
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
    function $T(e) {
      {
        var t = e.toLowerCase();
        return qu.hasOwnProperty(t) && qu[t] || null;
      }
    }
    function YT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = hl(t, a), gh(t, a), t) {
        case "dialog":
          yn("cancel", e), yn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          yn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            yn(Jd[y], e);
          break;
        case "source":
          yn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          yn("error", e), yn("load", e);
          break;
        case "details":
          yn("toggle", e);
          break;
        case "input":
          Iu(e, a), yn("invalid", e);
          break;
        case "option":
          Ht(e, a);
          break;
        case "select":
          Ko(e, a), yn("invalid", e);
          break;
        case "textarea":
          ev(e, a), yn("invalid", e);
          break;
      }
      pc(t, a);
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
          var H = a[A];
          if (A === Ps)
            typeof H == "string" ? e.textContent !== H && (a[xo] !== !0 && Ch(e.textContent, H, s, f), z = [Ps, H]) : typeof H == "number" && e.textContent !== "" + H && (a[xo] !== !0 && Ch(e.textContent, H, s, f), z = [Ps, "" + H]);
          else if (Je.hasOwnProperty(A))
            H != null && (typeof H != "function" && Sh(A, H), A === "onScroll" && yn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ce = void 0, Ae = rn(A);
            if (a[xo] !== !0) {
              if (!(A === mh || A === xo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              A === "value" || A === "checked" || A === "selected")) {
                if (A === tp) {
                  var De = e.innerHTML, Ot = H ? H[yh] : void 0;
                  if (Ot != null) {
                    var Ct = ME(e, Ot);
                    Ct !== De && np(A, De, Ct);
                  }
                } else if (A === Vs) {
                  if (v.delete(A), NE) {
                    var k = Xm(H);
                    ce = e.getAttribute("style"), k !== ce && np(A, ce, k);
                  }
                } else if (p)
                  v.delete(A.toLowerCase()), ce = si(e, A, H), H !== ce && np(A, ce, H);
                else if (!on(A, Ae, p) && !Xn(A, H, Ae, p)) {
                  var P = !1;
                  if (Ae !== null)
                    v.delete(Ae.attributeName), ce = Wl(e, A, H, Ae);
                  else {
                    var O = i;
                    if (O === Ja && (O = Zf(t)), O === Ja)
                      v.delete(A.toLowerCase());
                    else {
                      var Z = $T(A);
                      Z !== null && Z !== A && (P = !0, v.delete(Z)), v.delete(A);
                    }
                    ce = si(e, A, H);
                  }
                  var ye = I;
                  !ye && H !== ce && !P && np(A, ce, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[xo] !== !0 && LE(v), t) {
        case "input":
          La(e), N(e, a, !0);
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
      return z;
    }
    function IT(e, t, a) {
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
    function _y(e, t) {
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
    function QT(e, t, a) {
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
    var rp = function() {
    }, ap = function() {
    };
    {
      var WT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], UE = [
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
      ], GT = UE.concat(["button"]), qT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], AE = {
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
        var a = et({}, e || AE), i = {
          tag: t
        };
        return UE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), GT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), WT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
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
            return qT.indexOf(t) === -1;
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
      }, XT = function(e, t) {
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
      }, jE = {};
      rp = function(e, t, a) {
        a = a || AE;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = KT(e, u) ? null : i, f = s ? null : XT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!jE[y]) {
            jE[y] = !0;
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
    var Th = "suppressHydrationWarning", bh = "$", wh = "/$", ip = "$?", lp = "$!", JT = "style", Oy = null, Ly = null;
    function ZT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case $i:
        case Xo: {
          t = i === $i ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : cc(null, "");
          break;
        }
        default: {
          var s = i === Mn ? e.parentNode : e, f = s.namespaceURI || null;
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
    function eb(e, t, a) {
      {
        var i = e, u = cc(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function SD(e) {
      return e;
    }
    function tb(e) {
      Oy = dr(), Ly = hT();
      var t = null;
      return xn(!1), t;
    }
    function nb(e) {
      mT(Ly), xn(Oy), Oy = null, Ly = null;
    }
    function rb(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = FT(e, t, a, s);
      return sp(u, y), Hy(y, t), y;
    }
    function ab(e, t) {
      e.appendChild(t);
    }
    function ib(e, t, a, i, u) {
      switch (PT(e, t, a, i), t) {
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
    function lb(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return VT(e, t, a, i);
    }
    function Ny(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ub(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = HT(e, t);
      return sp(i, s), s;
    }
    function ob() {
      var e = window.event;
      return e === void 0 ? cr : go(e.type);
    }
    var My = typeof setTimeout == "function" ? setTimeout : void 0, sb = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, FE = typeof Promise == "function" ? Promise : void 0, cb = typeof queueMicrotask == "function" ? queueMicrotask : typeof FE < "u" ? function(e) {
      return FE.resolve(null).then(e).catch(fb);
    } : My;
    function fb(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function db(e, t, a, i) {
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
    function pb(e, t, a, i, u, s) {
      BT(e, t, a, i, u), Hy(e, u);
    }
    function HE(e) {
      vl(e, "");
    }
    function vb(e, t, a) {
      e.nodeValue = a;
    }
    function hb(e, t) {
      e.appendChild(t);
    }
    function mb(e, t) {
      var a;
      e.nodeType === Mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Rh(a);
    }
    function yb(e, t, a) {
      e.insertBefore(t, a);
    }
    function gb(e, t, a) {
      e.nodeType === Mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Sb(e, t) {
      e.removeChild(t);
    }
    function Eb(e, t) {
      e.nodeType === Mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Mn) {
          var s = u.data;
          if (s === wh)
            if (i === 0) {
              e.removeChild(u), Dr(t);
              return;
            } else
              i--;
          else (s === bh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      Dr(t);
    }
    function Cb(e, t) {
      e.nodeType === Mn ? Uy(e.parentNode, t) : e.nodeType === Kr && Uy(e, t), Dr(e);
    }
    function Rb(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Tb(e) {
      e.nodeValue = "";
    }
    function bb(e, t) {
      e = e;
      var a = t[JT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = dc("display", i);
    }
    function wb(e, t) {
      e.nodeValue = t;
    }
    function xb(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === $i && e.documentElement && e.removeChild(e.documentElement);
    }
    function _b(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Db(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function kb(e) {
      return e.nodeType !== Mn ? null : e;
    }
    function PE(e) {
      return e.data === ip;
    }
    function Ay(e) {
      return e.data === lp;
    }
    function Ob(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function Lb(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Bi)
          break;
        if (t === Mn) {
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
      return xh(e.nextSibling);
    }
    function Nb(e) {
      return xh(e.firstChild);
    }
    function Mb(e) {
      return xh(e.firstChild);
    }
    function zb(e) {
      return xh(e.nextSibling);
    }
    function Ub(e, t, a, i, u, s, f) {
      sp(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ht) !== Ne;
      return YT(e, t, a, p, i, y, f);
    }
    function Ab(e, t, a, i) {
      return sp(a, e), a.mode & ht, IT(e, t);
    }
    function jb(e, t) {
      sp(t, e);
    }
    function Fb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
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
    function VE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Mn) {
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
    function Hb(e) {
      Dr(e);
    }
    function Pb(e) {
      Dr(e);
    }
    function Vb(e) {
      return e !== "head" && e !== "body";
    }
    function Bb(e, t, a, i) {
      var u = !0;
      Ch(t.nodeValue, a, i, u);
    }
    function $b(e, t, a, i, u, s) {
      if (t[Th] !== !0) {
        var f = !0;
        Ch(i.nodeValue, u, s, f);
      }
    }
    function Yb(e, t) {
      t.nodeType === Kr ? xy(e, t) : t.nodeType === Mn || _y(e, t);
    }
    function Ib(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? xy(a, t) : t.nodeType === Mn || _y(a, t));
      }
    }
    function Qb(e, t, a, i, u) {
      (u || t[Th] !== !0) && (i.nodeType === Kr ? xy(a, i) : i.nodeType === Mn || _y(a, i));
    }
    function Wb(e, t, a) {
      Dy(e, t);
    }
    function Gb(e, t) {
      ky(e, t);
    }
    function qb(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function Kb(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function Xb(e, t, a, i, u, s) {
      (s || t[Th] !== !0) && Dy(a, i);
    }
    function Jb(e, t, a, i, u) {
      (u || t[Th] !== !0) && ky(a, i);
    }
    function Zb(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function e1(e) {
      Zd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, jy = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, Fy = "__reactEvents$" + Rf, t1 = "__reactListeners$" + Rf, n1 = "__reactHandles$" + Rf;
    function r1(e) {
      delete e[Tf], delete e[jy], delete e[Fy], delete e[t1], delete e[n1];
    }
    function sp(e, t) {
      t[Tf] = e;
    }
    function _h(e, t) {
      t[op] = e;
    }
    function BE(e) {
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
            for (var u = VE(e); u !== null; ) {
              var s = u[Tf];
              if (s)
                return s;
              u = VE(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function _o(e) {
      var t = e[Tf] || e[op];
      return t && (t.tag === G || t.tag === oe || t.tag === Ee || t.tag === j) ? t : null;
    }
    function bf(e) {
      if (e.tag === G || e.tag === oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[jy] || null;
    }
    function Hy(e, t) {
      e[jy] = t;
    }
    function a1(e) {
      var t = e[Fy];
      return t === void 0 && (t = e[Fy] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, YE = Pe.ReactDebugCurrentFrame;
    function kh(e) {
      if (e) {
        var t = e._owner, a = Io(e.type, e._source, t ? t.type : null);
        YE.setExtraStackFrame(a);
      } else
        YE.setExtraStackFrame(null);
    }
    function Xi(e, t, a, i, u) {
      {
        var s = Function.call.bind(ir);
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
            p && !(p instanceof Error) && (kh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), kh(null)), p instanceof Error && !(p.message in $E) && ($E[p.message] = !0, kh(u), S("Failed %s type: %s", a, p.message), kh(null));
          }
      }
    }
    var Py = [], Oh;
    Oh = [];
    var xu = -1;
    function Do(e) {
      return {
        current: e
      };
    }
    function ia(e, t) {
      if (xu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Oh[xu] && S("Unexpected Fiber popped."), e.current = Py[xu], Py[xu] = null, Oh[xu] = null, xu--;
    }
    function la(e, t, a) {
      xu++, Py[xu] = e.current, Oh[xu] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var li = {};
    Object.freeze(li);
    var _u = Do(li), Ul = Do(!1), By = li;
    function wf(e, t, a) {
      return a && Al(t) ? By : _u.current;
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
          return li;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ge(e) || "Unknown";
          Xi(i, s, "context", p);
        }
        return u && IE(e, t, s), s;
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
      ia(Ul, e), ia(_u, e);
    }
    function $y(e) {
      ia(Ul, e), ia(_u, e);
    }
    function QE(e, t, a) {
      {
        if (_u.current !== li)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        la(_u, t, e), la(Ul, a, e);
      }
    }
    function WE(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ge(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ge(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ge(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return et({}, a, f);
      }
    }
    function Mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || li;
        return By = _u.current, la(_u, a, e), la(Ul, Ul.current, e), !0;
      }
    }
    function GE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = WE(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, ia(Ul, e), ia(_u, e), la(_u, u, e), la(Ul, a, e);
        } else
          ia(Ul, e), la(Ul, a, e);
      }
    }
    function i1(e) {
      {
        if (!Ov(e) || e.tag !== X)
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
    var ko = 0, zh = 1, Du = null, Yy = !1, Iy = !1;
    function qE(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function l1(e) {
      Yy = !0, qE(e);
    }
    function KE() {
      Yy && Oo();
    }
    function Oo() {
      if (!Iy && Du !== null) {
        Iy = !0;
        var e = 0, t = ga();
        try {
          var a = !0, i = Du;
          for (In(ra); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, Yy = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), vd(Qi, Oo), s;
        } finally {
          In(t), Iy = !1;
        }
      }
      return null;
    }
    var _f = [], Df = 0, Uh = null, Ah = 0, bi = [], wi = 0, $s = null, ku = 1, Ou = "";
    function u1(e) {
      return Is(), (e.flags & fs) !== Le;
    }
    function o1(e) {
      return Is(), Ah;
    }
    function s1() {
      var e = Ou, t = ku, a = t & ~c1(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Is(), _f[Df++] = Ah, _f[Df++] = Uh, Uh = e, Ah = t;
    }
    function XE(e, t, a) {
      Is(), bi[wi++] = ku, bi[wi++] = Ou, bi[wi++] = $s, $s = e;
      var i = ku, u = Ou, s = jh(i) - 1, f = i & ~(1 << s), p = a + 1, v = jh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), b = f >> y, z = s - y, A = jh(t) + z, H = p << z, ce = H | b, Ae = x + u;
        ku = 1 << A | ce, Ou = Ae;
      } else {
        var De = p << s, Ot = De | f, Ct = u;
        ku = 1 << v | Ot, Ou = Ct;
      }
    }
    function Qy(e) {
      Is();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ys(e, a), XE(e, a, i);
      }
    }
    function jh(e) {
      return 32 - Yn(e);
    }
    function c1(e) {
      return 1 << jh(e) - 1;
    }
    function Wy(e) {
      for (; e === Uh; )
        Uh = _f[--Df], _f[Df] = null, Ah = _f[--Df], _f[Df] = null;
      for (; e === $s; )
        $s = bi[--wi], bi[wi] = null, Ou = bi[--wi], bi[wi] = null, ku = bi[--wi], bi[wi] = null;
    }
    function f1() {
      return Is(), $s !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function d1(e, t) {
      Is(), bi[wi++] = ku, bi[wi++] = Ou, bi[wi++] = $s, ku = t.id, Ou = t.overflow, $s = e;
    }
    function Is() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, xi = null, Ji = !1, Qs = !1, Lo = null;
    function p1() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      Qs = !0;
    }
    function v1() {
      return Qs;
    }
    function h1(e) {
      var t = e.stateNode.containerInfo;
      return xi = Mb(t), Ar = e, Ji = !0, Lo = null, Qs = !1, !0;
    }
    function m1(e, t, a) {
      return xi = zb(t), Ar = e, Ji = !0, Lo = null, Qs = !1, a !== null && d1(e, a), !0;
    }
    function ZE(e, t) {
      switch (e.tag) {
        case j: {
          Yb(e.stateNode.containerInfo, t);
          break;
        }
        case G: {
          var a = (e.mode & ht) !== Ne;
          Qb(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ee: {
          var i = e.memoizedState;
          i.dehydrated !== null && Ib(i.dehydrated, t);
          break;
        }
      }
    }
    function eC(e, t) {
      ZE(e, t);
      var a = E_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Xr) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (Qs)
          return;
        switch (e.tag) {
          case j: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case G:
                var i = t.type;
                t.pendingProps, Wb(a, i);
                break;
              case oe:
                var u = t.pendingProps;
                Gb(a, u);
                break;
            }
            break;
          }
          case G: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case G: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ht) !== Ne;
                Xb(
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
                var x = t.pendingProps, b = (e.mode & ht) !== Ne;
                Jb(
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
          case Ee: {
            var z = e.memoizedState, A = z.dehydrated;
            if (A !== null) switch (t.tag) {
              case G:
                var H = t.type;
                t.pendingProps, qb(A, H);
                break;
              case oe:
                var ce = t.pendingProps;
                Kb(A, ce);
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
      t.flags = t.flags & -4097 | zn, Gy(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case G: {
          var a = e.type;
          e.pendingProps;
          var i = _b(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, xi = Nb(i), !0) : !1;
        }
        case oe: {
          var u = e.pendingProps, s = Db(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, xi = null, !0) : !1;
        }
        case Ee: {
          var f = kb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: f1(),
              retryLane: ya
            };
            e.memoizedState = p;
            var v = C_(f);
            return v.return = e, e.child = v, Ar = e, xi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qy(e) {
      return (e.mode & ht) !== Ne && (e.flags & vt) === Le;
    }
    function Ky(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Xy(e) {
      if (Ji) {
        var t = xi;
        if (!t) {
          qy(e) && (Gy(Ar, e), Ky()), tC(Ar, e), Ji = !1, Ar = e;
          return;
        }
        var a = t;
        if (!nC(e, t)) {
          qy(e) && (Gy(Ar, e), Ky()), t = up(a);
          var i = Ar;
          if (!t || !nC(e, t)) {
            tC(Ar, e), Ji = !1, Ar = e;
            return;
          }
          eC(i, a);
        }
      }
    }
    function y1(e, t, a) {
      var i = e.stateNode, u = !Qs, s = Ub(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function g1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Ab(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case j: {
              var s = u.stateNode.containerInfo, f = (u.mode & ht) !== Ne;
              Bb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case G: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ht) !== Ne;
              $b(
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
    function S1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      jb(a, e);
    }
    function E1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Fb(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== G && t.tag !== j && t.tag !== Ee; )
        t = t.return;
      Ar = t;
    }
    function Fh(e) {
      if (e !== Ar)
        return !1;
      if (!Ji)
        return rC(e), Ji = !0, !1;
      if (e.tag !== j && (e.tag !== G || Vb(e.type) && !Ny(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (qy(e))
            aC(e), Ky();
          else
            for (; t; )
              eC(e, t), t = up(t);
      }
      return rC(e), e.tag === Ee ? xi = E1(e) : xi = Ar ? up(e.stateNode) : null, !0;
    }
    function C1() {
      return Ji && xi !== null;
    }
    function aC(e) {
      for (var t = xi; t; )
        ZE(e, t), t = up(t);
    }
    function kf() {
      Ar = null, xi = null, Ji = !1, Qs = !1;
    }
    function iC() {
      Lo !== null && (JR(Lo), Lo = null);
    }
    function jr() {
      return Ji;
    }
    function Jy(e) {
      Lo === null ? Lo = [e] : Lo.push(e);
    }
    var R1 = Pe.ReactCurrentBatchConfig, T1 = null;
    function b1() {
      return R1.transition;
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
      var w1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tt && (t = a), a = a.return;
        return t;
      }, Ws = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Gs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & tt && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & tt && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & tt && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(b) {
          e.add(Ge(b) || "Component"), Gs.add(b.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          t.add(Ge(b) || "Component"), Gs.add(b.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          a.add(Ge(b) || "Component"), Gs.add(b.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          i.add(Ge(b) || "Component"), Gs.add(b.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          u.add(Ge(b) || "Component"), Gs.add(b.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(b) {
          s.add(Ge(b) || "Component"), Gs.add(b.type);
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
          ke(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ws(a);
          ke(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = Ws(u);
          ke(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var Hh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = w1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!lC.has(e.type)) {
          var i = Hh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Hh.set(a, i)), i.push(e));
        }
      }, Zi.flushLegacyContextWarning = function() {
        Hh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ge(s) || "Component"), lC.add(s.type);
            });
            var u = Ws(i);
            try {
              Wt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              gn();
            }
          }
        });
      }, Zi.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Hh = /* @__PURE__ */ new Map();
      };
    }
    var Zy, eg, tg, ng, rg, uC = function(e, t) {
    };
    Zy = !1, eg = !1, tg = {}, ng = {}, rg = {}, uC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ge(t) || "Component";
        ng[a] || (ng[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function x1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & tt || Me) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== X) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !x1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ge(e) || "Component";
          tg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
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
          Ga(i, "ref");
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
    function Ph(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Vh(e) {
      {
        var t = Ge(e) || "Component";
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
      function t(k, P) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [P], k.flags |= Xr) : O.push(P);
        }
      }
      function a(k, P) {
        if (!e)
          return null;
        for (var O = P; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, P) {
        for (var O = /* @__PURE__ */ new Map(), Z = P; Z !== null; )
          Z.key !== null ? O.set(Z.key, Z) : O.set(Z.index, Z), Z = Z.sibling;
        return O;
      }
      function u(k, P) {
        var O = rc(k, P);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, P, O) {
        if (k.index = O, !e)
          return k.flags |= fs, P;
        var Z = k.alternate;
        if (Z !== null) {
          var ye = Z.index;
          return ye < P ? (k.flags |= zn, P) : ye;
        } else
          return k.flags |= zn, P;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= zn), k;
      }
      function p(k, P, O, Z) {
        if (P === null || P.tag !== oe) {
          var ye = JS(O, k.mode, Z);
          return ye.return = k, ye;
        } else {
          var de = u(P, O);
          return de.return = k, de;
        }
      }
      function v(k, P, O, Z) {
        var ye = O.type;
        if (ye === Qr)
          return g(k, P, O.props.children, Z, O.key);
        if (P !== null && (P.elementType === ye || // Keep this check inline so it only runs on the false path:
        v0(P, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ye == "object" && ye !== null && ye.$$typeof === Ke && oC(ye) === P.type)) {
          var de = u(P, O.props);
          return de.ref = yp(k, P, O), de.return = k, de._debugSource = O._source, de._debugOwner = O._owner, de;
        }
        var Be = XS(O, k.mode, Z);
        return Be.ref = yp(k, P, O), Be.return = k, Be;
      }
      function y(k, P, O, Z) {
        if (P === null || P.tag !== ee || P.stateNode.containerInfo !== O.containerInfo || P.stateNode.implementation !== O.implementation) {
          var ye = ZS(O, k.mode, Z);
          return ye.return = k, ye;
        } else {
          var de = u(P, O.children || []);
          return de.return = k, de;
        }
      }
      function g(k, P, O, Z, ye) {
        if (P === null || P.tag !== Ie) {
          var de = Bo(O, k.mode, Z, ye);
          return de.return = k, de;
        } else {
          var Be = u(P, O);
          return Be.return = k, Be;
        }
      }
      function x(k, P, O) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var Z = JS("" + P, k.mode, O);
          return Z.return = k, Z;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ur: {
              var ye = XS(P, k.mode, O);
              return ye.ref = yp(k, null, P), ye.return = k, ye;
            }
            case va: {
              var de = ZS(P, k.mode, O);
              return de.return = k, de;
            }
            case Ke: {
              var Be = P._payload, Ze = P._init;
              return x(k, Ze(Be), O);
            }
          }
          if (at(P) || vn(P)) {
            var Zt = Bo(P, k.mode, O, null);
            return Zt.return = k, Zt;
          }
          Ph(k, P);
        }
        return typeof P == "function" && Vh(k), null;
      }
      function b(k, P, O, Z) {
        var ye = P !== null ? P.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ye !== null ? null : p(k, P, "" + O, Z);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ur:
              return O.key === ye ? v(k, P, O, Z) : null;
            case va:
              return O.key === ye ? y(k, P, O, Z) : null;
            case Ke: {
              var de = O._payload, Be = O._init;
              return b(k, P, Be(de), Z);
            }
          }
          if (at(O) || vn(O))
            return ye !== null ? null : g(k, P, O, Z, null);
          Ph(k, O);
        }
        return typeof O == "function" && Vh(k), null;
      }
      function z(k, P, O, Z, ye) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number") {
          var de = k.get(O) || null;
          return p(P, de, "" + Z, ye);
        }
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case ur: {
              var Be = k.get(Z.key === null ? O : Z.key) || null;
              return v(P, Be, Z, ye);
            }
            case va: {
              var Ze = k.get(Z.key === null ? O : Z.key) || null;
              return y(P, Ze, Z, ye);
            }
            case Ke:
              var Zt = Z._payload, Nt = Z._init;
              return z(k, P, O, Nt(Zt), ye);
          }
          if (at(Z) || vn(Z)) {
            var Wn = k.get(O) || null;
            return g(P, Wn, Z, ye, null);
          }
          Ph(P, Z);
        }
        return typeof Z == "function" && Vh(P), null;
      }
      function A(k, P, O) {
        {
          if (typeof k != "object" || k === null)
            return P;
          switch (k.$$typeof) {
            case ur:
            case va:
              uC(k, O);
              var Z = k.key;
              if (typeof Z != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(Z);
                break;
              }
              if (!P.has(Z)) {
                P.add(Z);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Z);
              break;
            case Ke:
              var ye = k._payload, de = k._init;
              A(de(ye), P, O);
              break;
          }
        }
        return P;
      }
      function H(k, P, O, Z) {
        for (var ye = null, de = 0; de < O.length; de++) {
          var Be = O[de];
          ye = A(Be, ye, k);
        }
        for (var Ze = null, Zt = null, Nt = P, Wn = 0, Mt = 0, Pn = null; Nt !== null && Mt < O.length; Mt++) {
          Nt.index > Mt ? (Pn = Nt, Nt = null) : Pn = Nt.sibling;
          var oa = b(k, Nt, O[Mt], Z);
          if (oa === null) {
            Nt === null && (Nt = Pn);
            break;
          }
          e && Nt && oa.alternate === null && t(k, Nt), Wn = s(oa, Wn, Mt), Zt === null ? Ze = oa : Zt.sibling = oa, Zt = oa, Nt = Pn;
        }
        if (Mt === O.length) {
          if (a(k, Nt), jr()) {
            var Yr = Mt;
            Ys(k, Yr);
          }
          return Ze;
        }
        if (Nt === null) {
          for (; Mt < O.length; Mt++) {
            var oi = x(k, O[Mt], Z);
            oi !== null && (Wn = s(oi, Wn, Mt), Zt === null ? Ze = oi : Zt.sibling = oi, Zt = oi);
          }
          if (jr()) {
            var wa = Mt;
            Ys(k, wa);
          }
          return Ze;
        }
        for (var xa = i(k, Nt); Mt < O.length; Mt++) {
          var sa = z(xa, k, Mt, O[Mt], Z);
          sa !== null && (e && sa.alternate !== null && xa.delete(sa.key === null ? Mt : sa.key), Wn = s(sa, Wn, Mt), Zt === null ? Ze = sa : Zt.sibling = sa, Zt = sa);
        }
        if (e && xa.forEach(function(Gf) {
          return t(k, Gf);
        }), jr()) {
          var ju = Mt;
          Ys(k, ju);
        }
        return Ze;
      }
      function ce(k, P, O, Z) {
        var ye = vn(O);
        if (typeof ye != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (eg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), O.entries === ye && (Zy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zy = !0);
          var de = ye.call(O);
          if (de)
            for (var Be = null, Ze = de.next(); !Ze.done; Ze = de.next()) {
              var Zt = Ze.value;
              Be = A(Zt, Be, k);
            }
        }
        var Nt = ye.call(O);
        if (Nt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, Mt = null, Pn = P, oa = 0, Yr = 0, oi = null, wa = Nt.next(); Pn !== null && !wa.done; Yr++, wa = Nt.next()) {
          Pn.index > Yr ? (oi = Pn, Pn = null) : oi = Pn.sibling;
          var xa = b(k, Pn, wa.value, Z);
          if (xa === null) {
            Pn === null && (Pn = oi);
            break;
          }
          e && Pn && xa.alternate === null && t(k, Pn), oa = s(xa, oa, Yr), Mt === null ? Wn = xa : Mt.sibling = xa, Mt = xa, Pn = oi;
        }
        if (wa.done) {
          if (a(k, Pn), jr()) {
            var sa = Yr;
            Ys(k, sa);
          }
          return Wn;
        }
        if (Pn === null) {
          for (; !wa.done; Yr++, wa = Nt.next()) {
            var ju = x(k, wa.value, Z);
            ju !== null && (oa = s(ju, oa, Yr), Mt === null ? Wn = ju : Mt.sibling = ju, Mt = ju);
          }
          if (jr()) {
            var Gf = Yr;
            Ys(k, Gf);
          }
          return Wn;
        }
        for (var qp = i(k, Pn); !wa.done; Yr++, wa = Nt.next()) {
          var Yl = z(qp, k, Yr, wa.value, Z);
          Yl !== null && (e && Yl.alternate !== null && qp.delete(Yl.key === null ? Yr : Yl.key), oa = s(Yl, oa, Yr), Mt === null ? Wn = Yl : Mt.sibling = Yl, Mt = Yl);
        }
        if (e && qp.forEach(function(J_) {
          return t(k, J_);
        }), jr()) {
          var X_ = Yr;
          Ys(k, X_);
        }
        return Wn;
      }
      function Ae(k, P, O, Z) {
        if (P !== null && P.tag === oe) {
          a(k, P.sibling);
          var ye = u(P, O);
          return ye.return = k, ye;
        }
        a(k, P);
        var de = JS(O, k.mode, Z);
        return de.return = k, de;
      }
      function De(k, P, O, Z) {
        for (var ye = O.key, de = P; de !== null; ) {
          if (de.key === ye) {
            var Be = O.type;
            if (Be === Qr) {
              if (de.tag === Ie) {
                a(k, de.sibling);
                var Ze = u(de, O.props.children);
                return Ze.return = k, Ze._debugSource = O._source, Ze._debugOwner = O._owner, Ze;
              }
            } else if (de.elementType === Be || // Keep this check inline so it only runs on the false path:
            v0(de, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === Ke && oC(Be) === de.type) {
              a(k, de.sibling);
              var Zt = u(de, O.props);
              return Zt.ref = yp(k, de, O), Zt.return = k, Zt._debugSource = O._source, Zt._debugOwner = O._owner, Zt;
            }
            a(k, de);
            break;
          } else
            t(k, de);
          de = de.sibling;
        }
        if (O.type === Qr) {
          var Nt = Bo(O.props.children, k.mode, Z, O.key);
          return Nt.return = k, Nt;
        } else {
          var Wn = XS(O, k.mode, Z);
          return Wn.ref = yp(k, P, O), Wn.return = k, Wn;
        }
      }
      function Ot(k, P, O, Z) {
        for (var ye = O.key, de = P; de !== null; ) {
          if (de.key === ye)
            if (de.tag === ee && de.stateNode.containerInfo === O.containerInfo && de.stateNode.implementation === O.implementation) {
              a(k, de.sibling);
              var Be = u(de, O.children || []);
              return Be.return = k, Be;
            } else {
              a(k, de);
              break;
            }
          else
            t(k, de);
          de = de.sibling;
        }
        var Ze = ZS(O, k.mode, Z);
        return Ze.return = k, Ze;
      }
      function Ct(k, P, O, Z) {
        var ye = typeof O == "object" && O !== null && O.type === Qr && O.key === null;
        if (ye && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ur:
              return f(De(k, P, O, Z));
            case va:
              return f(Ot(k, P, O, Z));
            case Ke:
              var de = O._payload, Be = O._init;
              return Ct(k, P, Be(de), Z);
          }
          if (at(O))
            return H(k, P, O, Z);
          if (vn(O))
            return ce(k, P, O, Z);
          Ph(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ae(k, P, "" + O, Z)) : (typeof O == "function" && Vh(k), a(k, P));
      }
      return Ct;
    }
    var Of = sC(!0), cC = sC(!1);
    function _1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = rc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = rc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function D1(e, t) {
      for (var a = e.child; a !== null; )
        h_(a, t), a = a.sibling;
    }
    var ag = Do(null), ig;
    ig = {};
    var Bh = null, Lf = null, lg = null, $h = !1;
    function Yh() {
      Bh = null, Lf = null, lg = null, $h = !1;
    }
    function fC() {
      $h = !0;
    }
    function dC() {
      $h = !1;
    }
    function pC(e, t, a) {
      la(ag, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ig && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ig;
    }
    function ug(e, t) {
      var a = ag.current;
      ia(ag, t), e._currentValue = a;
    }
    function og(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = it(u.childLanes, t)) : (i.childLanes = it(i.childLanes, t), u !== null && (u.childLanes = it(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function k1(e, t, a) {
      O1(e, t, a);
    }
    function O1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === X) {
                var p = tr(a), v = Lu(Yt, p);
                v.tag = Qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = it(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = it(b.lanes, a)), og(i.return, a, e), s.lanes = it(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === xe)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === pn) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = it(z.lanes, a);
          var A = z.alternate;
          A !== null && (A.lanes = it(A.lanes, a)), og(z, a, e), u = i.sibling;
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
    function ar(e) {
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
            lanes: V,
            firstContext: a
          };
        } else
          Lf = Lf.next = a;
      }
      return t;
    }
    var qs = null;
    function sg(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    function L1() {
      if (qs !== null) {
        for (var e = 0; e < qs.length; e++) {
          var t = qs[e], a = t.interleaved;
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
        qs = null;
      }
    }
    function vC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function N1(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function M1(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Ba(e, t) {
      return Ih(e, t);
    }
    var z1 = Ih;
    function Ih(e, t) {
      e.lanes = it(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = it(a.lanes, t)), a === null && (e.flags & (zn | An)) !== Le && c0(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = it(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = it(a.childLanes, t) : (u.flags & (zn | An)) !== Le && c0(e), i = u, u = u.return;
      if (i.tag === j) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var hC = 0, mC = 1, Qh = 2, cg = 3, Wh = !1, fg, Gh;
    fg = !1, Gh = null;
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
    function Lu(e, t) {
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
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Gh === u && !fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), Nx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, z1(e, a);
      } else
        return M1(e, u, t, a);
    }
    function qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Ld(a)) {
          var s = u.lanes;
          s = qc(s, e.pendingLanes);
          var f = it(s, a);
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
    function U1(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & tt) {
                $t(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  $t(!1);
                }
              }
              dC();
            }
            return p;
          }
          return f;
        }
        case cg:
          e.flags = e.flags & -65537 | vt;
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & tt) {
                $t(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  $t(!1);
                }
              }
              dC();
            }
          } else
            y = v;
          return y == null ? i : et({}, i, y);
        }
        case Qh:
          return Wh = !0, i;
      }
      return i;
    }
    function Kh(e, t, a, i) {
      var u = e.updateQueue;
      Wh = !1, Gh = u.shared;
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
        var z = u.baseState, A = V, H = null, ce = null, Ae = null, De = s;
        do {
          var Ot = De.lane, Ct = De.eventTime;
          if (hu(i, Ot)) {
            if (Ae !== null) {
              var P = {
                eventTime: Ct,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: De.tag,
                payload: De.payload,
                callback: De.callback,
                next: null
              };
              Ae = Ae.next = P;
            }
            z = U1(e, u, De, z, t, a);
            var O = De.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            De.lane !== Fn) {
              e.flags |= tn;
              var Z = u.effects;
              Z === null ? u.effects = [De] : Z.push(De);
            }
          } else {
            var k = {
              eventTime: Ct,
              lane: Ot,
              tag: De.tag,
              payload: De.payload,
              callback: De.callback,
              next: null
            };
            Ae === null ? (ce = Ae = k, H = z) : Ae = Ae.next = k, A = it(A, Ot);
          }
          if (De = De.next, De === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ye = p, de = ye.next;
            ye.next = null, De = de, u.lastBaseUpdate = ye, u.shared.pending = null;
          }
        } while (!0);
        Ae === null && (H = z), u.baseState = H, u.firstBaseUpdate = ce, u.lastBaseUpdate = Ae;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var Ze = Be;
          do
            A = it(A, Ze.lane), Ze = Ze.next;
          while (Ze !== Be);
        } else s === null && (u.shared.lanes = V);
        Yp(A), e.lanes = A, e.memoizedState = z;
      }
      Gh = null;
    }
    function A1(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function gC() {
      Wh = !1;
    }
    function Xh() {
      return Wh;
    }
    function SC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, A1(f, a));
        }
    }
    var gp = {}, Mo = Do(gp), Sp = Do(gp), Jh = Do(gp);
    function Zh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = Zh(Jh.current);
      return e;
    }
    function vg(e, t) {
      la(Jh, t, e), la(Sp, e, e), la(Mo, gp, e);
      var a = ZT(t);
      ia(Mo, e), la(Mo, a, e);
    }
    function Mf(e) {
      ia(Mo, e), ia(Sp, e), ia(Jh, e);
    }
    function hg() {
      var e = Zh(Mo.current);
      return e;
    }
    function CC(e) {
      Zh(Jh.current);
      var t = Zh(Mo.current), a = eb(t, e.type);
      t !== a && (la(Sp, e, e), la(Mo, a, e));
    }
    function mg(e) {
      Sp.current === e && (ia(Mo, e), ia(Sp, e));
    }
    var j1 = 0, RC = 1, TC = 1, Ep = 2, el = Do(j1);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & RC;
    }
    function gg(e, t) {
      return e & RC | t;
    }
    function F1(e, t) {
      return e | t;
    }
    function zo(e, t) {
      la(el, t, e);
    }
    function Uf(e) {
      ia(el, e);
    }
    function H1(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ee) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Ay(i))
              return t;
          }
        } else if (t.tag === It && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & vt) !== Le;
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
    ), pr = (
      /* */
      1
    ), jl = (
      /*  */
      2
    ), vr = (
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
    function P1(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var me = Pe.ReactCurrentDispatcher, Cp = Pe.ReactCurrentBatchConfig, Cg, Af;
    Cg = /* @__PURE__ */ new Set();
    var Ks = V, Jt = null, hr = null, mr = null, tm = !1, Rp = !1, Tp = 0, V1 = 0, B1 = 25, B = null, _i = null, Uo = -1, Rg = !1;
    function Vt() {
      {
        var e = B;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function ie() {
      {
        var e = B;
        _i !== null && (Uo++, _i[Uo] !== e && $1(e));
      }
    }
    function jf(e) {
      e != null && !at(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function $1(e) {
      {
        var t = Ge(Jt);
        if (!Cg.has(t) && (Cg.add(t), _i !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uo; u++) {
            for (var s = _i[u], f = u === Uo ? e : s, p = u + 1 + ". " + s; p.length < i; )
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
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Te(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Ks = s, Jt = t, _i = e !== null ? e._debugHookTypes : null, Uo = -1, Rg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = V, e !== null && e.memoizedState !== null ? me.current = IC : _i !== null ? me.current = YC : me.current = $C;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= B1)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Rg = !1, hr = null, mr = null, t.updateQueue = null, Uo = -1, me.current = QC, f = a(i, u);
        } while (Rp);
      }
      me.current = vm, t._debugHookTypes = _i;
      var v = hr !== null && hr.next !== null;
      if (Ks = V, Jt = null, hr = null, mr = null, B = null, _i = null, Uo = -1, e !== null && (e.flags & jn) !== (t.flags & jn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ht) !== Ne && S("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function bC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Xt) !== Ne ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function wC() {
      if (me.current = vm, tm) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      Ks = V, Jt = null, hr = null, mr = null, _i = null, Uo = -1, B = null, FC = !1, Rp = !1, Tp = 0;
    }
    function Fl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return mr === null ? Jt.memoizedState = mr = e : mr = mr.next = e, mr;
    }
    function Di() {
      var e;
      if (hr === null) {
        var t = Jt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = hr.next;
      var a;
      if (mr === null ? a = Jt.memoizedState : a = mr.next, a !== null)
        mr = a, a = mr.next, hr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        hr = e;
        var i = {
          memoizedState: hr.memoizedState,
          baseState: hr.baseState,
          baseQueue: hr.baseQueue,
          queue: hr.queue,
          next: null
        };
        mr === null ? Jt.memoizedState = mr = i : mr = mr.next = i;
      }
      return mr;
    }
    function xC() {
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
        lanes: V,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = W1.bind(null, Jt, s);
      return [i.memoizedState, f];
    }
    function xg(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = hr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, b = null, z = null, A = null, H = g;
        do {
          var ce = H.lane;
          if (hu(Ks, ce)) {
            if (A !== null) {
              var De = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              A = A.next = De;
            }
            if (H.hasEagerState)
              x = H.eagerState;
            else {
              var Ot = H.action;
              x = e(x, Ot);
            }
          } else {
            var Ae = {
              lane: ce,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            A === null ? (z = A = Ae, b = x) : A = A.next = Ae, Jt.lanes = it(Jt.lanes, ce), Yp(ce);
          }
          H = H.next;
        } while (H !== null && H !== g);
        A === null ? b = x : A.next = z, Te(x, i.memoizedState) || Np(), i.memoizedState = x, i.baseState = b, i.baseQueue = A, u.lastRenderedState = x;
      }
      var Ct = u.interleaved;
      if (Ct !== null) {
        var k = Ct;
        do {
          var P = k.lane;
          Jt.lanes = it(Jt.lanes, P), Yp(P), k = k.next;
        } while (k !== Ct);
      } else f === null && (u.lanes = V);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function _g(e, t, a) {
      var i = Di(), u = i.queue;
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
        Te(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function ED(e, t, a) {
    }
    function CD(e, t, a) {
    }
    function Dg(e, t, a) {
      var i = Jt, u = Fl(), s, f = jr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Af || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Af = !0);
      } else {
        if (s = t(), !Af) {
          var p = t();
          Te(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
        }
        var v = Mm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, Ks) || _C(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, lm(kC.bind(null, i, y, e), [e]), i.flags |= ha, bp(pr | Fr, DC.bind(null, i, y, s, t), void 0, null), s;
    }
    function nm(e, t, a) {
      var i = Jt, u = Di(), s = t();
      if (!Af) {
        var f = t();
        Te(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Af = !0);
      }
      var p = u.memoizedState, v = !Te(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (xp(kC.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      mr !== null && mr.memoizedState.tag & pr) {
        i.flags |= ha, bp(pr | Fr, DC.bind(null, i, y, s, t), void 0, null);
        var g = Mm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, Ks) || _C(i, t, s);
      }
      return s;
    }
    function _C(e, t, a) {
      e.flags |= Tc;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Jt.updateQueue;
      if (u === null)
        u = xC(), Jt.updateQueue = u, u.stores = [i];
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
        return !Te(a, i);
      } catch {
        return !0;
      }
    }
    function LC(e) {
      var t = Ba(e, He);
      t !== null && Er(t, e, He, Yt);
    }
    function rm(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: V,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = G1.bind(null, Jt, a);
      return [t.memoizedState, i];
    }
    function kg(e) {
      return xg(bg);
    }
    function Og(e) {
      return _g(bg);
    }
    function bp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Jt.updateQueue;
      if (s === null)
        s = xC(), Jt.updateQueue = s, s.lastEffect = u.next = u;
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
      var t = Di();
      return t.memoizedState;
    }
    function wp(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i;
      Jt.flags |= e, u.memoizedState = bp(pr | t, a, void 0, s);
    }
    function im(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (hr !== null) {
        var p = hr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Tg(s, v)) {
            u.memoizedState = bp(t, a, f, s);
            return;
          }
        }
      }
      Jt.flags |= e, u.memoizedState = bp(pr | t, a, f, s);
    }
    function lm(e, t) {
      return (Jt.mode & Xt) !== Ne ? wp(gl | ha | fd, Fr, e, t) : wp(ha | fd, Fr, e, t);
    }
    function xp(e, t) {
      return im(ha, Fr, e, t);
    }
    function Ng(e, t) {
      return wp(gt, jl, e, t);
    }
    function um(e, t) {
      return im(gt, jl, e, t);
    }
    function Mg(e, t) {
      var a = gt;
      return a |= yl, (Jt.mode & Xt) !== Ne && (a |= Mr), wp(a, vr, e, t);
    }
    function om(e, t) {
      return im(gt, vr, e, t);
    }
    function NC(e, t) {
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
      var i = a != null ? a.concat([e]) : null, u = gt;
      return u |= yl, (Jt.mode & Xt) !== Ne && (u |= Mr), wp(u, vr, NC.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(gt, vr, NC.bind(null, t, e), i);
    }
    function Y1(e, t) {
    }
    var cm = Y1;
    function Ug(e, t) {
      var a = Fl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function fm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
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
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
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
    function MC(e) {
      var t = Di(), a = hr, i = a.memoizedState;
      return UC(t, i, e);
    }
    function zC(e) {
      var t = Di();
      if (hr === null)
        return t.memoizedState = e, e;
      var a = hr.memoizedState;
      return UC(t, a, e);
    }
    function UC(e, t, a) {
      var i = !Od(Ks);
      if (i) {
        if (!Te(a, t)) {
          var u = Nd();
          Jt.lanes = it(Jt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function I1(e, t, a) {
      var i = ga();
      In(Ds(i, ja)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (In(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ke("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Fg() {
      var e = rm(!1), t = e[0], a = e[1], i = I1.bind(null, a), u = Fl();
      return u.memoizedState = i, [t, i];
    }
    function AC() {
      var e = kg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function jC() {
      var e = Og(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var FC = !1;
    function Q1() {
      return FC;
    }
    function Hg() {
      var e = Fl(), t = Mm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = s1();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = V1++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function W1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = vC(e, t, u, i);
        if (s !== null) {
          var f = ba();
          Er(s, e, i, f), VC(s, t, i);
        }
      }
      BC(e, i);
    }
    function G1(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (HC(e))
        PC(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === V && (s === null || s.lanes === V)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = me.current, me.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Te(y, v)) {
                N1(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              me.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var x = ba();
          Er(g, e, i, x), VC(g, t, i);
        }
      }
      BC(e, i);
    }
    function HC(e) {
      var t = e.alternate;
      return e === Jt || t !== null && t === Jt;
    }
    function PC(e, t) {
      Rp = tm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (Ld(a)) {
        var i = t.lanes;
        i = qc(i, e.pendingLanes);
        var u = it(i, a);
        t.lanes = u, _s(e, u);
      }
    }
    function BC(e, t, a) {
      ys(e, t);
    }
    var vm = {
      readContext: ar,
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
      unstable_isNewReconciler: Ce
    }, $C = null, YC = null, IC = null, QC = null, Hl = null, tl = null, hm = null;
    {
      var Pg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Xe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Vt(), jf(t), Ug(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Vt(), ar(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Vt(), jf(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Vt(), jf(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Vt(), jf(t), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Vt(), jf(t), Mg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Vt(), jf(t);
          var a = me.current;
          me.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Vt();
          var i = me.current;
          me.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Vt(), Lg(e);
        },
        useState: function(e) {
          B = "useState", Vt();
          var t = me.current;
          me.current = Hl;
          try {
            return rm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Vt(), jg(e);
        },
        useTransition: function() {
          return B = "useTransition", Vt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Vt(), Dg(e, t, a);
        },
        useId: function() {
          return B = "useId", Vt(), Hg();
        },
        unstable_isNewReconciler: Ce
      }, YC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ie(), Ug(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ie(), ar(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ie(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ie(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ie(), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ie(), Mg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ie();
          var a = me.current;
          me.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ie();
          var i = me.current;
          me.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ie(), Lg(e);
        },
        useState: function(e) {
          B = "useState", ie();
          var t = me.current;
          me.current = Hl;
          try {
            return rm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ie(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ie(), jg(e);
        },
        useTransition: function() {
          return B = "useTransition", ie(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ie(), Dg(e, t, a);
        },
        useId: function() {
          return B = "useId", ie(), Hg();
        },
        unstable_isNewReconciler: Ce
      }, IC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ie(), fm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ie(), ar(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ie(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ie(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ie(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ie(), om(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ie();
          var a = me.current;
          me.current = tl;
          try {
            return dm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ie();
          var i = me.current;
          me.current = tl;
          try {
            return xg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ie(), am();
        },
        useState: function(e) {
          B = "useState", ie();
          var t = me.current;
          me.current = tl;
          try {
            return kg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ie(), cm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ie(), MC(e);
        },
        useTransition: function() {
          return B = "useTransition", ie(), AC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ie(), nm(e, t);
        },
        useId: function() {
          return B = "useId", ie(), pm();
        },
        unstable_isNewReconciler: Ce
      }, QC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ie(), fm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ie(), ar(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ie(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ie(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ie(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ie(), om(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ie();
          var a = me.current;
          me.current = hm;
          try {
            return dm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ie();
          var i = me.current;
          me.current = hm;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ie(), am();
        },
        useState: function(e) {
          B = "useState", ie();
          var t = me.current;
          me.current = hm;
          try {
            return Og(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ie(), cm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ie(), zC(e);
        },
        useTransition: function() {
          return B = "useTransition", ie(), jC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ie(), nm(e, t);
        },
        useId: function() {
          return B = "useId", ie(), pm();
        },
        unstable_isNewReconciler: Ce
      }, Hl = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Xe(), Vt(), Ug(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Xe(), Vt(), ar(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Xe(), Vt(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Xe(), Vt(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Xe(), Vt(), Ng(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Xe(), Vt(), Mg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Xe(), Vt();
          var a = me.current;
          me.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Xe(), Vt();
          var i = me.current;
          me.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Xe(), Vt(), Lg(e);
        },
        useState: function(e) {
          B = "useState", Xe(), Vt();
          var t = me.current;
          me.current = Hl;
          try {
            return rm(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Xe(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Xe(), Vt(), jg(e);
        },
        useTransition: function() {
          return B = "useTransition", Xe(), Vt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Xe(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Xe(), Vt(), Dg(e, t, a);
        },
        useId: function() {
          return B = "useId", Xe(), Vt(), Hg();
        },
        unstable_isNewReconciler: Ce
      }, tl = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Xe(), ie(), fm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Xe(), ie(), ar(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Xe(), ie(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Xe(), ie(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Xe(), ie(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Xe(), ie(), om(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Xe(), ie();
          var a = me.current;
          me.current = tl;
          try {
            return dm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Xe(), ie();
          var i = me.current;
          me.current = tl;
          try {
            return xg(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Xe(), ie(), am();
        },
        useState: function(e) {
          B = "useState", Xe(), ie();
          var t = me.current;
          me.current = tl;
          try {
            return kg(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Xe(), ie(), cm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Xe(), ie(), MC(e);
        },
        useTransition: function() {
          return B = "useTransition", Xe(), ie(), AC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Xe(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Xe(), ie(), nm(e, t);
        },
        useId: function() {
          return B = "useId", Xe(), ie(), pm();
        },
        unstable_isNewReconciler: Ce
      }, hm = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Xe(), ie(), fm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Xe(), ie(), ar(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Xe(), ie(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Xe(), ie(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Xe(), ie(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Xe(), ie(), om(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Xe(), ie();
          var a = me.current;
          me.current = tl;
          try {
            return dm(e, t);
          } finally {
            me.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Xe(), ie();
          var i = me.current;
          me.current = tl;
          try {
            return _g(e, t, a);
          } finally {
            me.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Xe(), ie(), am();
        },
        useState: function(e) {
          B = "useState", Xe(), ie();
          var t = me.current;
          me.current = tl;
          try {
            return Og(e);
          } finally {
            me.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Xe(), ie(), cm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Xe(), ie(), zC(e);
        },
        useTransition: function() {
          return B = "useTransition", Xe(), ie(), jC();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Xe(), ie(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Xe(), ie(), nm(e, t);
        },
        useId: function() {
          return B = "useId", Xe(), ie(), pm();
        },
        unstable_isNewReconciler: Ce
      };
    }
    var Ao = M.unstable_now, WC = 0, mm = -1, _p = -1, ym = -1, Vg = !1, gm = !1;
    function GC() {
      return Vg;
    }
    function q1() {
      gm = !0;
    }
    function K1() {
      Vg = !1, gm = !1;
    }
    function X1() {
      Vg = gm, gm = !1;
    }
    function qC() {
      return WC;
    }
    function KC() {
      WC = Ao();
    }
    function Bg(e) {
      _p = Ao(), e.actualStartTime < 0 && (e.actualStartTime = Ao());
    }
    function XC(e) {
      _p = -1;
    }
    function Sm(e, t) {
      if (_p >= 0) {
        var a = Ao() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Pl(e) {
      if (mm >= 0) {
        var t = Ao() - mm;
        mm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case j:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case mt:
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
            case j:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case mt:
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
        var a = et({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Qg = {}, Wg, Gg, qg, Kg, Xg, JC, Em, Jg, Zg, eS, Dp;
    {
      Wg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var ZC = /* @__PURE__ */ new Set();
      Em = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          ZC.has(a) || (ZC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, JC = function(e, t) {
        if (t === void 0) {
          var a = Dt(e) || "Component";
          Xg.has(a) || (Xg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
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
        if (e.mode & tt) {
          $t(!0);
          try {
            s = a(i, u);
          } finally {
            $t(!1);
          }
        }
        JC(t, s);
      }
      var f = s == null ? u : et({}, u, s);
      if (e.memoizedState = f, e.lanes === V) {
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
        p !== null && (Er(p, i, s, u), qh(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Lu(u, s);
        f.tag = mC, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (Er(p, i, s, u), qh(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = ba(), u = Po(a), s = Lu(i, u);
        s.tag = Qh, t != null && (Em(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (Er(f, a, u, i), qh(f, a, u)), xd(a, u);
      }
    };
    function eR(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & tt) {
            $t(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              $t(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Dt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ze(a, i) || !ze(u, s) : !0;
    }
    function J1(e, t, a) {
      var i = e.stateNode;
      {
        var u = Dt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tt) === Ne && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & tt) === Ne && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Zg.has(t) && (Zg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Dt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !qg.has(t) && (qg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Dt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || at(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function tR(e, t) {
      t.updater = nS, e.stateNode = t, cs(t, e), t._reactInternalInstance = Qg;
    }
    function nR(e, t, a) {
      var i = !1, u = li, s = li, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === R && f._context === void 0
        );
        if (!p && !eS.has(t)) {
          eS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Dt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = ar(f);
      else {
        u = wf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? xf(e, u) : li;
      }
      var g = new t(a, s);
      if (e.mode & tt) {
        $t(!0);
        try {
          g = new t(a, s);
        } finally {
          $t(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      tR(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var b = Dt(t) || "Component";
          Gg.has(b) || (Gg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, A = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? A = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (A = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), z !== null || A !== null || H !== null) {
            var ce = Dt(t) || "Component", Ae = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Kg.has(ce) || (Kg.add(ce), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ce, Ae, z !== null ? `
  ` + z : "", A !== null ? `
  ` + A : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && IE(e, u, s), g;
    }
    function Z1(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ge(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function rR(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ge(e) || "Component";
          Wg.has(s) || (Wg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      J1(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, dg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = ar(s);
      else {
        var f = wf(e, t, !0);
        u.context = xf(e, f);
      }
      {
        if (u.state === a) {
          var p = Dt(t) || "Component";
          Jg.has(p) || (Jg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & tt && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Z1(e, u), Kh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = gt;
        y |= yl, (e.mode & Xt) !== Ne && (y |= Mr), e.flags |= y;
      }
    }
    function ew(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = ar(p);
      else {
        var y = wf(e, t, !0);
        v = xf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && rR(e, u, a, v), gC();
      var b = e.memoizedState, z = u.state = b;
      if (Kh(e, a, u, i), z = e.memoizedState, s === a && b === z && !Lh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var A = gt;
          A |= yl, (e.mode & Xt) !== Ne && (A |= Mr), e.flags |= A;
        }
        return !1;
      }
      typeof g == "function" && (tS(e, t, g, a), z = e.memoizedState);
      var H = Xh() || eR(e, t, s, a, b, z, v);
      if (H) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ce = gt;
          ce |= yl, (e.mode & Xt) !== Ne && (ce |= Mr), e.flags |= ce;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ae = gt;
          Ae |= yl, (e.mode & Xt) !== Ne && (Ae |= Mr), e.flags |= Ae;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, H;
    }
    function tw(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = li;
      if (typeof g == "object" && g !== null)
        x = ar(g);
      else {
        var b = wf(t, a, !0);
        x = xf(t, b);
      }
      var z = a.getDerivedStateFromProps, A = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !A && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && rR(t, s, i, x), gC();
      var H = t.memoizedState, ce = s.state = H;
      if (Kh(t, i, s, u), ce = t.memoizedState, f === v && H === ce && !Lh() && !Xh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= za), !1;
      typeof z == "function" && (tS(t, a, z, i), ce = t.memoizedState);
      var Ae = Xh() || eR(t, a, p, i, H, ce, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      se;
      return Ae ? (!A && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ce, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ce, x)), typeof s.componentDidUpdate == "function" && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = ce), s.props = i, s.state = ce, s.context = x, Ae;
    }
    function Xs(e, t) {
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
    function nw(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = nw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === X)
            return;
          console.error(i);
        }
        var p = u ? Ge(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === j)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ge(e) || "Anonymous";
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
    var rw = typeof WeakMap == "function" ? WeakMap : Map;
    function aR(e, t, a) {
      var i = Lu(Yt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        qx(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Lu(Yt, a);
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
        h0(e), iS(e, t), typeof u != "function" && Wx(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (na(e.lanes, He) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ge(e) || "Unknown"));
      }), i;
    }
    function iR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new rw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Kx.bind(null, e, t, a);
        xr && Ip(e, a), t.then(s, s);
      }
    }
    function aw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function iw(e, t) {
      var a = e.tag;
      if ((e.mode & ht) === Ne && (a === pe || a === je || a === Qe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lR(e) {
      var t = e;
      do {
        if (t.tag === Ee && H1(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uR(e, t, a, i, u) {
      if ((e.mode & ht) === Ne) {
        if (e === t)
          e.flags |= Ua;
        else {
          if (e.flags |= vt, a.flags |= ti, a.flags &= -52805, a.tag === X) {
            var s = a.alternate;
            if (s === null)
              a.tag = zt;
            else {
              var f = Lu(Yt, He);
              f.tag = Qh, No(a, f, He);
            }
          }
          a.lanes = it(a.lanes, He);
        }
        return e;
      }
      return e.flags |= Ua, e.lanes = u, e;
    }
    function lw(e, t, a, i, u) {
      if (a.flags |= lu, xr && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        iw(a), jr() && a.mode & ht && JE();
        var f = lR(t);
        if (f !== null) {
          f.flags &= -257, uR(f, t, a, e, u), f.mode & ht && iR(e, s, u), aw(f, e, s);
          return;
        } else {
          if (!kd(u)) {
            iR(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & ht) {
        JE();
        var v = lR(t);
        if (v !== null) {
          (v.flags & Ua) === Le && (v.flags |= Sn), uR(v, t, a, e, u), Jy(Xs(i, a));
          return;
        }
      }
      i = Xs(i, a), Hx(i);
      var y = t;
      do {
        switch (y.tag) {
          case j: {
            var g = i;
            y.flags |= Ua;
            var x = tr(u);
            y.lanes = it(y.lanes, x);
            var b = aR(y, g, x);
            pg(y, b);
            return;
          }
          case X:
            var z = i, A = y.type, H = y.stateNode;
            if ((y.flags & vt) === Le && (typeof A.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !l0(H))) {
              y.flags |= Ua;
              var ce = tr(u);
              y.lanes = it(y.lanes, ce);
              var Ae = lS(y, z, ce);
              pg(y, Ae);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function uw() {
      return null;
    }
    var kp = Pe.ReactCurrentOwner, rl = !1, uS, Op, oS, sS, cS, Js, fS, Cm, Lp;
    uS = {}, Op = {}, oS = {}, sS = {}, cS = {}, Js = !1, fS = {}, Cm = {}, Lp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function ow(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function oR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Nf(t, u), Aa(t);
      {
        if (kp.current = t, ka(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & tt) {
          $t(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            $t(!1);
          }
        }
        ka(!1);
      }
      return Rl(), e !== null && !rl ? (bC(e, t, u), Nu(e, t, u)) : (jr() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function sR(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (p_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = Qe, t.type = f, vS(t, s), cR(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            Dt(s)
          ), a.defaultProps !== void 0) {
            var v = Dt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = KS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && Xi(
          x,
          i,
          // Resolved props
          "prop",
          Dt(g)
        );
      }
      var b = e.child, z = ES(e, u);
      if (!z) {
        var A = b.memoizedProps, H = a.compare;
        if (H = H !== null ? H : ze, H(A, i) && e.ref === t.ref)
          return Nu(e, t, u);
      }
      t.flags |= Ii;
      var ce = rc(b, i);
      return ce.ref = t.ref, ce.return = t, t.child = ce, ce;
    }
    function cR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ke) {
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
            Dt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ze(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & ti) !== Le && (rl = !0);
          else return t.lanes = e.lanes, Nu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function fR(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || _)
        if ((t.mode & ht) === Ne) {
          var f = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (na(a, ya)) {
          var x = {
            baseLanes: V,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var b = s !== null ? s.baseLanes : a;
          zm(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = it(y, a);
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
        var z;
        s !== null ? (z = it(s.baseLanes, a), t.memoizedState = null) : z = a, zm(t, z);
      }
      return Ra(e, t, u, a), t.child;
    }
    function sw(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function cw(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function fw(e, t, a) {
      {
        t.flags |= gt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function dR(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Un, t.flags |= ds);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          Dt(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Nf(t, u), Aa(t);
      {
        if (kp.current = t, ka(!0), v = Ff(e, t, a, i, f, u), y = Hf(), t.mode & tt) {
          $t(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            $t(!1);
          }
        }
        ka(!1);
      }
      return Rl(), e !== null && !rl ? (bC(e, t, u), Nu(e, t, u)) : (jr() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function pR(e, t, a, i, u) {
      {
        switch (D_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= vt, t.flags |= Ua;
            var y = new Error("Simulated error coming from DevTools"), g = tr(u);
            t.lanes = it(t.lanes, g);
            var x = lS(t, Xs(y, t), g);
            pg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && Xi(
            b,
            i,
            // Resolved props
            "prop",
            Dt(a)
          );
        }
      }
      var z;
      Al(a) ? (z = !0, Mh(t)) : z = !1, Nf(t, u);
      var A = t.stateNode, H;
      A === null ? (Tm(e, t), nR(t, a, i), rS(t, a, i, u), H = !0) : e === null ? H = ew(t, a, i, u) : H = tw(e, t, a, i, u);
      var ce = pS(e, t, a, H, z, u);
      {
        var Ae = t.stateNode;
        H && Ae.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ge(t) || "a component"), Js = !0);
      }
      return ce;
    }
    function pS(e, t, a, i, u, s) {
      dR(e, t);
      var f = (t.flags & vt) !== Le;
      if (!i && !f)
        return u && GE(t, a, !1), Nu(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, XC();
      else {
        Aa(t);
        {
          if (ka(!0), v = p.render(), t.mode & tt) {
            $t(!0);
            try {
              p.render();
            } finally {
              $t(!1);
            }
          }
          ka(!1);
        }
        Rl();
      }
      return t.flags |= Ii, e !== null && f ? ow(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && GE(t, a, !0), t.child;
    }
    function vR(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), vg(e, t.containerInfo);
    }
    function dw(e, t, a) {
      if (vR(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      yC(e, t), Kh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & Sn) {
          var g = Xs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hR(e, t, p, a, g);
        } else if (p !== s) {
          var x = Xs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hR(e, t, p, a, x);
        } else {
          h1(t);
          var b = cC(t, null, p, a);
          t.child = b;
          for (var z = b; z; )
            z.flags = z.flags & -3 | An, z = z.sibling;
        }
      } else {
        if (kf(), p === s)
          return Nu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function hR(e, t, a, i, u) {
      return kf(), Jy(u), t.flags |= Sn, Ra(e, t, a, i), t.child;
    }
    function pw(e, t, a) {
      CC(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ny(i, u);
      return p ? f = null : s !== null && Ny(i, s) && (t.flags |= Kt), dR(e, t), Ra(e, t, f, a), t.child;
    }
    function vw(e, t) {
      return e === null && Xy(t), null;
    }
    function hw(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = v_(v), g = nl(v, u), x;
      switch (y) {
        case pe:
          return vS(t, v), t.type = v = Wf(v), x = dS(null, t, v, g, i), x;
        case X:
          return t.type = v = YS(v), x = pR(null, t, v, g, i), x;
        case je:
          return t.type = v = IS(v), x = oR(null, t, v, g, i), x;
        case ct: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Xi(
              b,
              g,
              // Resolved for outer only
              "prop",
              Dt(v)
            );
          }
          return x = sR(
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
      throw v !== null && typeof v == "object" && v.$$typeof === Ke && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function mw(e, t, a, i, u) {
      Tm(e, t), t.tag = X;
      var s;
      return Al(a) ? (s = !0, Mh(t)) : s = !1, Nf(t, u), nR(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function yw(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = xf(t, f);
      }
      Nf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Dt(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & tt && Zi.recordLegacyContextWarning(t, null), ka(!0), kp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), ka(!1);
      }
      if (Rl(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Dt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = Dt(a) || "Unknown";
          Op[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Op[x] = !0);
        }
        t.tag = X, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Al(a) ? (b = !0, Mh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), tR(t, p), rS(t, a, u, i), pS(null, t, a, !0, b, i);
      } else {
        if (t.tag = pe, t.mode & tt) {
          $t(!0);
          try {
            p = Ff(null, t, a, u, s, i), v = Hf();
          } finally {
            $t(!1);
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
          var f = Dt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Dt(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), sS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = Dt(t) || "Unknown";
          oS[v] || (S("%s: Function components do not support contextType.", v), oS[v] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fn
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: uw(),
        transitions: null
      };
    }
    function gw(e, t) {
      var a = null;
      return {
        baseLanes: it(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Sw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, Ep);
    }
    function Ew(e, t) {
      return xs(e.childLanes, t);
    }
    function mR(e, t, a) {
      var i = t.pendingProps;
      k_(t) && (t.flags |= vt);
      var u = el.current, s = !1, f = (t.flags & vt) !== Le;
      if (f || Sw(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = F1(u, TC)), u = zf(u), zo(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return ww(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = Cw(t, y, g, a), b = t.child;
          return b.memoizedState = mS(a), t.memoizedState = hS, x;
        } else
          return yS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var A = z.dehydrated;
          if (A !== null)
            return xw(e, t, f, i, A, z, a);
        }
        if (s) {
          var H = i.fallback, ce = i.children, Ae = Tw(e, t, ce, H, a), De = t.child, Ot = e.child.memoizedState;
          return De.memoizedState = Ot === null ? mS(a) : gw(Ot, a), De.childLanes = Ew(e, a), t.memoizedState = hS, Ae;
        } else {
          var Ct = i.children, k = Rw(e, t, Ct, a);
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
    function Cw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ht) === Ne && s !== null ? (p = s, p.childLanes = V, p.pendingProps = f, e.mode & bt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = gS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return y0(e, t, V, null);
    }
    function yR(e, t) {
      return rc(e, t);
    }
    function Rw(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yR(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ht) === Ne && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Xr) : p.push(s);
      }
      return t.child = f, f;
    }
    function Tw(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ht) === Ne && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = V, y.pendingProps = v, t.mode & bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = yR(f, v), y.subtreeFlags = f.subtreeFlags & jn;
      var x;
      return p !== null ? x = rc(p, i) : (x = Bo(i, s, u, null), x.flags |= zn), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function Rm(e, t, a, i) {
      i !== null && Jy(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= zn, t.memoizedState = null, f;
    }
    function bw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Bo(i, s, u, null);
      return v.flags |= zn, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ht) !== Ne && Of(t, e.child, null, u), v;
    }
    function ww(e, t, a) {
      return (e.mode & ht) === Ne ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = He) : Ay(t) ? e.lanes = er : e.lanes = ya, null;
    }
    function xw(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Sn) {
          t.flags &= -257;
          var k = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Rm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= vt, null;
          var P = i.children, O = i.fallback, Z = bw(e, t, P, O, f), ye = t.child;
          return ye.memoizedState = mS(f), t.memoizedState = hS, Z;
        }
      else {
        if (p1(), (t.mode & ht) === Ne)
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
            var g = Ob(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = aS(x, p, y);
          return Rm(e, t, f, b);
        }
        var z = na(f, e.childLanes);
        if (rl || z) {
          var A = Mm();
          if (A !== null) {
            var H = Jc(A, f);
            if (H !== Fn && H !== s.retryLane) {
              s.retryLane = H;
              var ce = Yt;
              Ba(e, H), Er(A, e, H, ce);
            }
          }
          HS();
          var Ae = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Rm(e, t, f, Ae);
        } else if (PE(u)) {
          t.flags |= vt, t.child = e.child;
          var De = Xx.bind(null, e);
          return Lb(u, De), null;
        } else {
          m1(t, u, s.treeContext);
          var Ot = i.children, Ct = yS(t, Ot);
          return Ct.flags |= An, Ct;
        }
      }
    }
    function gR(e, t, a) {
      e.lanes = it(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = it(i.lanes, t)), og(e.return, t, a);
    }
    function _w(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ee) {
          var u = i.memoizedState;
          u !== null && gR(i, a, e);
        } else if (i.tag === It)
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
    function Dw(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function kw(e) {
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
    function Ow(e, t) {
      e !== void 0 && !Cm[e] && (e !== "collapsed" && e !== "hidden" ? (Cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SR(e, t) {
      {
        var a = at(e), i = !a && typeof vn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Lw(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (at(e)) {
          for (var a = 0; a < e.length; a++)
            if (!SR(e[a], a))
              return;
        } else {
          var i = vn(e);
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
      kw(u), Ow(s, u), Lw(f, u), Ra(e, t, f, a);
      var p = el.current, v = yg(p, Ep);
      if (v)
        p = gg(p, Ep), t.flags |= vt;
      else {
        var y = e !== null && (e.flags & vt) !== Le;
        y && _w(t, t.child, a), p = zf(p);
      }
      if (zo(t, p), (t.mode & ht) === Ne)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Dw(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), SS(
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
              if (A !== null && em(A) === null) {
                t.child = z;
                break;
              }
              var H = z.sibling;
              z.sibling = b, b = z, z = H;
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
    function Nw(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var CR = !1;
    function Mw(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CR || (CR = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (Te(y, p)) {
          if (f.children === s.children && !Lh())
            return Nu(e, t, a);
        } else
          k1(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var RR = !1;
    function zw(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (RR || (RR = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Nf(t, a);
      var f = ar(i);
      Aa(t);
      var p;
      return kp.current = t, ka(!0), p = s(f), ka(!1), Rl(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Np() {
      rl = !0;
    }
    function Tm(e, t) {
      (t.mode & ht) === Ne && e !== null && (e.alternate = null, t.alternate = null, t.flags |= zn);
    }
    function Nu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), Yp(t.lanes), na(a, t.childLanes) ? (_1(e, t), t.child) : null;
    }
    function Uw(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Xr) : s.push(e), a.flags |= zn, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function Aw(e, t, a) {
      switch (t.tag) {
        case j:
          vR(t), t.stateNode, kf();
          break;
        case G:
          CC(t);
          break;
        case X: {
          var i = t.type;
          Al(i) && Mh(t);
          break;
        }
        case ee:
          vg(t, t.stateNode.containerInfo);
          break;
        case xe: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case mt:
          {
            var f = na(a, t.childLanes);
            f && (t.flags |= gt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ee: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, zf(el.current)), t.flags |= vt, null;
            var y = t.child, g = y.childLanes;
            if (na(a, g))
              return mR(e, t, a);
            zo(t, zf(el.current));
            var x = Nu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            zo(t, zf(el.current));
          break;
        }
        case It: {
          var b = (e.flags & vt) !== Le, z = na(a, t.childLanes);
          if (b) {
            if (z)
              return ER(e, t, a);
            t.flags |= vt;
          }
          var A = t.memoizedState;
          if (A !== null && (A.rendering = null, A.tail = null, A.lastEffect = null), zo(t, el.current), z)
            break;
          return null;
        }
        case Fe:
        case Ft:
          return t.lanes = V, fR(e, t, a);
      }
      return Nu(e, t, a);
    }
    function TR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Uw(e, t, KS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Lh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & vt) === Le)
            return rl = !1, Aw(e, t, a);
          (e.flags & ti) !== Le ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && u1(t)) {
        var f = t.index, p = o1();
        XE(t, p, f);
      }
      switch (t.lanes = V, t.tag) {
        case re:
          return yw(e, t, t.type, a);
        case Cn: {
          var v = t.elementType;
          return hw(e, t, v, a);
        }
        case pe: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : nl(y, g);
          return dS(e, t, y, x, a);
        }
        case X: {
          var b = t.type, z = t.pendingProps, A = t.elementType === b ? z : nl(b, z);
          return pR(e, t, b, A, a);
        }
        case j:
          return dw(e, t, a);
        case G:
          return pw(e, t, a);
        case oe:
          return vw(e, t);
        case Ee:
          return mR(e, t, a);
        case ee:
          return Nw(e, t, a);
        case je: {
          var H = t.type, ce = t.pendingProps, Ae = t.elementType === H ? ce : nl(H, ce);
          return oR(e, t, H, Ae, a);
        }
        case Ie:
          return sw(e, t, a);
        case ln:
          return cw(e, t, a);
        case mt:
          return fw(e, t, a);
        case xe:
          return Mw(e, t, a);
        case Oe:
          return zw(e, t, a);
        case ct: {
          var De = t.type, Ot = t.pendingProps, Ct = nl(De, Ot);
          if (t.type !== t.elementType) {
            var k = De.propTypes;
            k && Xi(
              k,
              Ct,
              // Resolved for outer only
              "prop",
              Dt(De)
            );
          }
          return Ct = nl(De.type, Ct), sR(e, t, De, Ct, a);
        }
        case Qe:
          return cR(e, t, t.type, t.pendingProps, a);
        case zt: {
          var P = t.type, O = t.pendingProps, Z = t.elementType === P ? O : nl(P, O);
          return mw(e, t, P, Z, a);
        }
        case It:
          return ER(e, t, a);
        case Rt:
          break;
        case Fe:
          return fR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= gt;
    }
    function bR(e) {
      e.flags |= Un, e.flags |= ds;
    }
    var wR, CS, xR, _R;
    wR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === G || u.tag === oe)
          ab(e, u.stateNode);
        else if (u.tag !== ee) {
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
    }, xR = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = hg(), v = lb(f, a, s, i, u, p);
        t.updateQueue = v, v && Pf(t);
      }
    }, _R = function(e, t, a, i) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = V, i = Le;
      if (t) {
        if ((e.mode & bt) !== Ne) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = it(a, it(y.lanes, y.childLanes)), i |= y.subtreeFlags & jn, i |= y.flags & jn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = it(a, it(g.lanes, g.childLanes)), i |= g.subtreeFlags & jn, i |= g.flags & jn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & bt) !== Ne) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = it(a, it(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = it(a, it(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function jw(e, t, a) {
      if (C1() && (t.mode & ht) !== Ne && (t.flags & vt) === Le)
        return aC(t), kf(), t.flags |= Sn | lu | Ua, !1;
      var i = Fh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (S1(t), Hr(t), (t.mode & bt) !== Ne) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & vt) === Le && (t.memoizedState = null), t.flags |= gt, Hr(t), (t.mode & bt) !== Ne) {
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
        case re:
        case Cn:
        case Qe:
        case pe:
        case je:
        case Ie:
        case ln:
        case mt:
        case Oe:
        case ct:
          return Hr(t), null;
        case X: {
          var u = t.type;
          return Al(u) && Nh(t), Hr(t), null;
        }
        case j: {
          var s = t.stateNode;
          if (Mf(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Fh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Sn) !== Le) && (t.flags |= za, iC());
            }
          }
          return CS(e, t), Hr(t), null;
        }
        case G: {
          mg(t);
          var v = EC(), y = t.type;
          if (e !== null && t.stateNode != null)
            xR(e, t, y, i, v), e.ref !== t.ref && bR(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Hr(t), null;
            }
            var g = hg(), x = Fh(t);
            if (x)
              y1(t, v, g) && Pf(t);
            else {
              var b = rb(y, i, v, g, t);
              wR(b, t, !1, !1), t.stateNode = b, ib(b, y, i, v) && Pf(t);
            }
            t.ref !== null && bR(t);
          }
          return Hr(t), null;
        }
        case oe: {
          var z = i;
          if (e && t.stateNode != null) {
            var A = e.memoizedProps;
            _R(e, t, A, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = EC(), ce = hg(), Ae = Fh(t);
            Ae ? g1(t) && Pf(t) : t.stateNode = ub(z, H, ce, t);
          }
          return Hr(t), null;
        }
        case Ee: {
          Uf(t);
          var De = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Ot = jw(e, t, De);
            if (!Ot)
              return t.flags & Ua ? t : null;
          }
          if ((t.flags & vt) !== Le)
            return t.lanes = a, (t.mode & bt) !== Ne && Ig(t), t;
          var Ct = De !== null, k = e !== null && e.memoizedState !== null;
          if (Ct !== k && Ct) {
            var P = t.child;
            if (P.flags |= gi, (t.mode & ht) !== Ne) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              O || yg(el.current, TC) ? Fx() : HS();
            }
          }
          var Z = t.updateQueue;
          if (Z !== null && (t.flags |= gt), Hr(t), (t.mode & bt) !== Ne && Ct) {
            var ye = t.child;
            ye !== null && (t.treeBaseDuration -= ye.treeBaseDuration);
          }
          return null;
        }
        case ee:
          return Mf(t), CS(e, t), e === null && e1(t.stateNode.containerInfo), Hr(t), null;
        case xe:
          var de = t.type._context;
          return ug(de, t), Hr(t), null;
        case zt: {
          var Be = t.type;
          return Al(Be) && Nh(t), Hr(t), null;
        }
        case It: {
          Uf(t);
          var Ze = t.memoizedState;
          if (Ze === null)
            return Hr(t), null;
          var Zt = (t.flags & vt) !== Le, Nt = Ze.rendering;
          if (Nt === null)
            if (Zt)
              Mp(Ze, !1);
            else {
              var Wn = Px() && (e === null || (e.flags & vt) === Le);
              if (!Wn)
                for (var Mt = t.child; Mt !== null; ) {
                  var Pn = em(Mt);
                  if (Pn !== null) {
                    Zt = !0, t.flags |= vt, Mp(Ze, !1);
                    var oa = Pn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= gt), t.subtreeFlags = Le, D1(t, a), zo(t, gg(el.current, Ep)), t.child;
                  }
                  Mt = Mt.sibling;
                }
              Ze.tail !== null && bn() > qR() && (t.flags |= vt, Zt = !0, Mp(Ze, !1), t.lanes = Fv);
            }
          else {
            if (!Zt) {
              var Yr = em(Nt);
              if (Yr !== null) {
                t.flags |= vt, Zt = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= gt), Mp(Ze, !0), Ze.tail === null && Ze.tailMode === "hidden" && !Nt.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              bn() * 2 - Ze.renderingStartTime > qR() && a !== ya && (t.flags |= vt, Zt = !0, Mp(Ze, !1), t.lanes = Fv);
            }
            if (Ze.isBackwards)
              Nt.sibling = t.child, t.child = Nt;
            else {
              var wa = Ze.last;
              wa !== null ? wa.sibling = Nt : t.child = Nt, Ze.last = Nt;
            }
          }
          if (Ze.tail !== null) {
            var xa = Ze.tail;
            Ze.rendering = xa, Ze.tail = xa.sibling, Ze.renderingStartTime = bn(), xa.sibling = null;
            var sa = el.current;
            return Zt ? sa = gg(sa, Ep) : sa = zf(sa), zo(t, sa), xa;
          }
          return Hr(t), null;
        }
        case Rt:
          break;
        case Fe:
        case Ft: {
          FS(t);
          var ju = t.memoizedState, Gf = ju !== null;
          if (e !== null) {
            var qp = e.memoizedState, Yl = qp !== null;
            Yl !== Gf && (t.flags |= gi);
          }
          return !Gf || (t.mode & ht) === Ne ? Hr(t) : na($l, ya) && (Hr(t), t.subtreeFlags & (zn | gt) && (t.flags |= gi)), null;
        }
        case Et:
          return null;
        case ft:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Fw(e, t, a) {
      switch (Wy(t), t.tag) {
        case X: {
          var i = t.type;
          Al(i) && Nh(t);
          var u = t.flags;
          return u & Ua ? (t.flags = u & -65537 | vt, (t.mode & bt) !== Ne && Ig(t), t) : null;
        }
        case j: {
          t.stateNode, Mf(t), $y(t), Eg();
          var s = t.flags;
          return (s & Ua) !== Le && (s & vt) === Le ? (t.flags = s & -65537 | vt, t) : null;
        }
        case G:
          return mg(t), null;
        case Ee: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & Ua ? (t.flags = p & -65537 | vt, (t.mode & bt) !== Ne && Ig(t), t) : null;
        }
        case It:
          return Uf(t), null;
        case ee:
          return Mf(t), null;
        case xe:
          var v = t.type._context;
          return ug(v, t), null;
        case Fe:
        case Ft:
          return FS(t), null;
        case Et:
          return null;
        default:
          return null;
      }
    }
    function kR(e, t, a) {
      switch (Wy(t), t.tag) {
        case X: {
          var i = t.type.childContextTypes;
          i != null && Nh(t);
          break;
        }
        case j: {
          t.stateNode, Mf(t), $y(t), Eg();
          break;
        }
        case G: {
          mg(t);
          break;
        }
        case ee:
          Mf(t);
          break;
        case Ee:
          Uf(t);
          break;
        case It:
          Uf(t);
          break;
        case xe:
          var u = t.type._context;
          ug(u, t);
          break;
        case Fe:
        case Ft:
          FS(t);
          break;
      }
    }
    var OR = null;
    OR = /* @__PURE__ */ new Set();
    var bm = !1, Pr = !1, Hw = typeof WeakSet == "function" ? WeakSet : Set, be = null, Vf = null, Bf = null;
    function Pw(e) {
      Ma(null, function() {
        throw e;
      }), cd();
    }
    var Vw = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & bt)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function LR(e, t) {
      try {
        jo(vr, e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Vw(e, a);
      } catch (i) {
        dn(e, t, i);
      }
    }
    function Bw(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        dn(e, t, i);
      }
    }
    function NR(e, t) {
      try {
        zR(e);
      } catch (a) {
        dn(e, t, a);
      }
    }
    function $f(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (qe && dt && e.mode & bt)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            dn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          a.current = null;
    }
    function wm(e, t, a) {
      try {
        a();
      } catch (i) {
        dn(e, t, i);
      }
    }
    var MR = !1;
    function $w(e, t) {
      tb(e.containerInfo), be = t, Yw();
      var a = MR;
      return MR = !1, a;
    }
    function Yw() {
      for (; be !== null; ) {
        var e = be, t = e.child;
        (e.subtreeFlags & Sl) !== Le && t !== null ? (t.return = e, be = t) : Iw();
      }
    }
    function Iw() {
      for (; be !== null; ) {
        var e = be;
        Wt(e);
        try {
          Qw(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        gn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, be = t;
          return;
        }
        be = e.return;
      }
    }
    function Qw(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== Le) {
        switch (Wt(e), e.tag) {
          case pe:
          case je:
          case Qe:
            break;
          case X: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = OR;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ge(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case j: {
            {
              var v = e.stateNode;
              xb(v.containerInfo);
            }
            break;
          }
          case G:
          case oe:
          case ee:
          case zt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        gn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Fr) !== $a ? Tl(t) : (e & vr) !== $a && Rd(t), (e & jl) !== $a && Qp(!0), wm(t, a, p), (e & jl) !== $a && Qp(!1), (e & Fr) !== $a ? wc() : (e & vr) !== $a && uo());
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
            (e & Fr) !== $a ? Av(t) : (e & vr) !== $a && jv(t);
            var f = s.create;
            (e & jl) !== $a && Qp(!0), s.destroy = f(), (e & jl) !== $a && Qp(!1), (e & Fr) !== $a ? Wi() : (e & vr) !== $a && xc();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & vr) !== Le ? v = "useLayoutEffect" : (s.tag & jl) !== Le ? v = "useInsertionEffect" : v = "useEffect";
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
    function Ww(e, t) {
      if ((t.flags & gt) !== Le)
        switch (t.tag) {
          case mt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qC(), p = t.alternate === null ? "mount" : "update";
            GC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case j:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case mt:
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
    function Gw(e, t, a, i) {
      if ((a.flags & El) !== Le)
        switch (a.tag) {
          case pe:
          case je:
          case Qe: {
            if (!Pr)
              if (a.mode & bt)
                try {
                  Vl(), jo(vr | pr, a);
                } finally {
                  Pl(a);
                }
              else
                jo(vr | pr, a);
            break;
          }
          case X: {
            var u = a.stateNode;
            if (a.flags & gt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & bt)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), a.mode & bt)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ge(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ge(a) || "instance")), SC(a, p, u));
            break;
          }
          case j: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case G:
                    y = a.child.stateNode;
                    break;
                  case X:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case G: {
            var g = a.stateNode;
            if (t === null && a.flags & gt) {
              var x = a.type, b = a.memoizedProps;
              db(g, x, b);
            }
            break;
          }
          case oe:
            break;
          case ee:
            break;
          case mt: {
            {
              var z = a.memoizedProps, A = z.onCommit, H = z.onRender, ce = a.stateNode.effectDuration, Ae = qC(), De = t === null ? "mount" : "update";
              GC() && (De = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, De, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ae);
              {
                typeof A == "function" && A(a.memoizedProps.id, De, ce, Ae), Ix(a);
                var Ot = a.return;
                e: for (; Ot !== null; ) {
                  switch (Ot.tag) {
                    case j:
                      var Ct = Ot.stateNode;
                      Ct.effectDuration += ce;
                      break e;
                    case mt:
                      var k = Ot.stateNode;
                      k.effectDuration += ce;
                      break e;
                  }
                  Ot = Ot.return;
                }
              }
            }
            break;
          }
          case Ee: {
            nx(e, a);
            break;
          }
          case It:
          case zt:
          case Rt:
          case Fe:
          case Ft:
          case ft:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & Un && zR(a);
    }
    function qw(e) {
      switch (e.tag) {
        case pe:
        case je:
        case Qe: {
          if (e.mode & bt)
            try {
              Vl(), LR(e, e.return);
            } finally {
              Pl(e);
            }
          else
            LR(e, e.return);
          break;
        }
        case X: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Bw(e, e.return, t), NR(e, e.return);
          break;
        }
        case G: {
          NR(e, e.return);
          break;
        }
      }
    }
    function Kw(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === G) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Rb(u) : bb(i.stateNode, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
          }
        } else if (i.tag === oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Tb(s) : wb(s, i.memoizedProps);
            } catch (f) {
              dn(e, e.return, f);
            }
        } else if (!((i.tag === Fe || i.tag === Ft) && i.memoizedState !== null && i !== e)) {
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
          case G:
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
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ge(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ge(e)), t.current = i;
      }
    }
    function Xw(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === G) {
          var a = e.stateNode;
          a !== null && r1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Jw(e) {
      for (var t = e.return; t !== null; ) {
        if (AR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AR(e) {
      return e.tag === G || e.tag === j || e.tag === ee;
    }
    function jR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || AR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== G && t.tag !== oe && t.tag !== pn; ) {
          if (t.flags & zn || t.child === null || t.tag === ee)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & zn))
          return t.stateNode;
      }
    }
    function Zw(e) {
      var t = Jw(e);
      switch (t.tag) {
        case G: {
          var a = t.stateNode;
          t.flags & Kt && (HE(a), t.flags &= -33);
          var i = jR(e);
          bS(e, i, a);
          break;
        }
        case j:
        case ee: {
          var u = t.stateNode.containerInfo, s = jR(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === G || i === oe;
      if (u) {
        var s = e.stateNode;
        t ? gb(a, s, t) : mb(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === G || i === oe;
      if (u) {
        var s = e.stateNode;
        t ? yb(a, s, t) : hb(a, s);
      } else if (i !== ee) {
        var f = e.child;
        if (f !== null) {
          bS(f, t, a);
          for (var p = f.sibling; p !== null; )
            bS(p, t, a), p = p.sibling;
        }
      }
    }
    var Vr = null, il = !1;
    function ex(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case G: {
              Vr = i.stateNode, il = !1;
              break e;
            }
            case j: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case ee: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        FR(e, t, a), Vr = null, il = !1;
      }
      Xw(a);
    }
    function Fo(e, t, a) {
      for (var i = a.child; i !== null; )
        FR(e, t, i), i = i.sibling;
    }
    function FR(e, t, a) {
      switch (lo(a), a.tag) {
        case G:
          Pr || $f(a, t);
        case oe: {
          {
            var i = Vr, u = il;
            Vr = null, Fo(e, t, a), Vr = i, il = u, Vr !== null && (il ? Eb(Vr, a.stateNode) : Sb(Vr, a.stateNode));
          }
          return;
        }
        case pn: {
          Vr !== null && (il ? Cb(Vr, a.stateNode) : Uy(Vr, a.stateNode));
          return;
        }
        case ee: {
          {
            var s = Vr, f = il;
            Vr = a.stateNode.containerInfo, il = !0, Fo(e, t, a), Vr = s, il = f;
          }
          return;
        }
        case pe:
        case je:
        case ct:
        case Qe: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, b = x.destroy, z = x.tag;
                  b !== void 0 && ((z & jl) !== $a ? wm(a, t, b) : (z & vr) !== $a && (Rd(a), a.mode & bt ? (Vl(), wm(a, t, b), Pl(a)) : wm(a, t, b), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Fo(e, t, a);
          return;
        }
        case X: {
          if (!Pr) {
            $f(a, t);
            var A = a.stateNode;
            typeof A.componentWillUnmount == "function" && RS(a, t, A);
          }
          Fo(e, t, a);
          return;
        }
        case Rt: {
          Fo(e, t, a);
          return;
        }
        case Fe: {
          if (
            // TODO: Remove this dead flag
            a.mode & ht
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
    function tx(e) {
      e.memoizedState;
    }
    function nx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && Pb(s);
          }
        }
      }
    }
    function HR(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Hw()), t.forEach(function(i) {
          var u = Jx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), xr)
              if (Vf !== null && Bf !== null)
                Ip(Bf, Vf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function rx(e, t, a) {
      Vf = a, Bf = e, Wt(t), PR(t, e), Wt(t), Vf = null, Bf = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            ex(e, t, s);
          } catch (v) {
            dn(s, t, v);
          }
        }
      var f = Xa();
      if (t.subtreeFlags & ao)
        for (var p = t.child; p !== null; )
          Wt(p), PR(p, e), p = p.sibling;
      Wt(f);
    }
    function PR(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case pe:
        case je:
        case ct:
        case Qe: {
          if (ll(t, e), Bl(e), u & gt) {
            try {
              al(jl | pr, e, e.return), jo(jl | pr, e);
            } catch (Be) {
              dn(e, e.return, Be);
            }
            if (e.mode & bt) {
              try {
                Vl(), al(vr | pr, e, e.return);
              } catch (Be) {
                dn(e, e.return, Be);
              }
              Pl(e);
            } else
              try {
                al(vr | pr, e, e.return);
              } catch (Be) {
                dn(e, e.return, Be);
              }
          }
          return;
        }
        case X: {
          ll(t, e), Bl(e), u & Un && i !== null && $f(i, i.return);
          return;
        }
        case G: {
          ll(t, e), Bl(e), u & Un && i !== null && $f(i, i.return);
          {
            if (e.flags & Kt) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (Be) {
                dn(e, e.return, Be);
              }
            }
            if (u & gt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    pb(f, g, y, v, p, e);
                  } catch (Be) {
                    dn(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case oe: {
          if (ll(t, e), Bl(e), u & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, b = e.memoizedProps, z = i !== null ? i.memoizedProps : b;
            try {
              vb(x, z, b);
            } catch (Be) {
              dn(e, e.return, Be);
            }
          }
          return;
        }
        case j: {
          if (ll(t, e), Bl(e), u & gt && i !== null) {
            var A = i.memoizedState;
            if (A.isDehydrated)
              try {
                Hb(t.containerInfo);
              } catch (Be) {
                dn(e, e.return, Be);
              }
          }
          return;
        }
        case ee: {
          ll(t, e), Bl(e);
          return;
        }
        case Ee: {
          ll(t, e), Bl(e);
          var H = e.child;
          if (H.flags & gi) {
            var ce = H.stateNode, Ae = H.memoizedState, De = Ae !== null;
            if (ce.isHidden = De, De) {
              var Ot = H.alternate !== null && H.alternate.memoizedState !== null;
              Ot || jx();
            }
          }
          if (u & gt) {
            try {
              tx(e);
            } catch (Be) {
              dn(e, e.return, Be);
            }
            HR(e);
          }
          return;
        }
        case Fe: {
          var Ct = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ht
          ) {
            var k = Pr;
            Pr = k || Ct, ll(t, e), Pr = k;
          } else
            ll(t, e);
          if (Bl(e), u & gi) {
            var P = e.stateNode, O = e.memoizedState, Z = O !== null, ye = e;
            if (P.isHidden = Z, Z && !Ct && (ye.mode & ht) !== Ne) {
              be = ye;
              for (var de = ye.child; de !== null; )
                be = de, ix(de), de = de.sibling;
            }
            Kw(ye, Z);
          }
          return;
        }
        case It: {
          ll(t, e), Bl(e), u & gt && HR(e);
          return;
        }
        case Rt:
          return;
        default: {
          ll(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & zn) {
        try {
          Zw(e);
        } catch (a) {
          dn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & An && (e.flags &= -4097);
    }
    function ax(e, t, a) {
      Vf = a, Bf = t, be = e, VR(e, t, a), Vf = null, Bf = null;
    }
    function VR(e, t, a) {
      for (var i = (e.mode & ht) !== Ne; be !== null; ) {
        var u = be, s = u.child;
        if (u.tag === Fe && i) {
          var f = u.memoizedState !== null, p = f || bm;
          if (p) {
            wS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, x = bm, b = Pr;
            bm = p, Pr = g, Pr && !b && (be = u, lx(u));
            for (var z = s; z !== null; )
              be = z, VR(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            be = u, bm = x, Pr = b, wS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & El) !== Le && s !== null ? (s.return = u, be = s) : wS(e, t, a);
      }
    }
    function wS(e, t, a) {
      for (; be !== null; ) {
        var i = be;
        if ((i.flags & El) !== Le) {
          var u = i.alternate;
          Wt(i);
          try {
            Gw(t, u, i, a);
          } catch (f) {
            dn(i, i.return, f);
          }
          gn();
        }
        if (i === e) {
          be = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, be = s;
          return;
        }
        be = i.return;
      }
    }
    function ix(e) {
      for (; be !== null; ) {
        var t = be, a = t.child;
        switch (t.tag) {
          case pe:
          case je:
          case ct:
          case Qe: {
            if (t.mode & bt)
              try {
                Vl(), al(vr, t, t.return);
              } finally {
                Pl(t);
              }
            else
              al(vr, t, t.return);
            break;
          }
          case X: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case G: {
            $f(t, t.return);
            break;
          }
          case Fe: {
            var u = t.memoizedState !== null;
            if (u) {
              BR(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, be = a) : BR(e);
      }
    }
    function BR(e) {
      for (; be !== null; ) {
        var t = be;
        if (t === e) {
          be = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, be = a;
          return;
        }
        be = t.return;
      }
    }
    function lx(e) {
      for (; be !== null; ) {
        var t = be, a = t.child;
        if (t.tag === Fe) {
          var i = t.memoizedState !== null;
          if (i) {
            $R(e);
            continue;
          }
        }
        a !== null ? (a.return = t, be = a) : $R(e);
      }
    }
    function $R(e) {
      for (; be !== null; ) {
        var t = be;
        Wt(t);
        try {
          qw(t);
        } catch (i) {
          dn(t, t.return, i);
        }
        if (gn(), t === e) {
          be = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, be = a;
          return;
        }
        be = t.return;
      }
    }
    function ux(e, t, a, i) {
      be = t, ox(t, e, a, i);
    }
    function ox(e, t, a, i) {
      for (; be !== null; ) {
        var u = be, s = u.child;
        (u.subtreeFlags & or) !== Le && s !== null ? (s.return = u, be = s) : sx(e, t, a, i);
      }
    }
    function sx(e, t, a, i) {
      for (; be !== null; ) {
        var u = be;
        if ((u.flags & ha) !== Le) {
          Wt(u);
          try {
            cx(t, u, a, i);
          } catch (f) {
            dn(u, u.return, f);
          }
          gn();
        }
        if (u === e) {
          be = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, be = s;
          return;
        }
        be = u.return;
      }
    }
    function cx(e, t, a, i) {
      switch (t.tag) {
        case pe:
        case je:
        case Qe: {
          if (t.mode & bt) {
            Yg();
            try {
              jo(Fr | pr, t);
            } finally {
              $g(t);
            }
          } else
            jo(Fr | pr, t);
          break;
        }
      }
    }
    function fx(e) {
      be = e, dx();
    }
    function dx() {
      for (; be !== null; ) {
        var e = be, t = e.child;
        if ((be.flags & Xr) !== Le) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              be = u, hx(u, e);
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
            be = e;
          }
        }
        (e.subtreeFlags & or) !== Le && t !== null ? (t.return = e, be = t) : px();
      }
    }
    function px() {
      for (; be !== null; ) {
        var e = be;
        (e.flags & ha) !== Le && (Wt(e), vx(e), gn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, be = t;
          return;
        }
        be = e.return;
      }
    }
    function vx(e) {
      switch (e.tag) {
        case pe:
        case je:
        case Qe: {
          e.mode & bt ? (Yg(), al(Fr | pr, e, e.return), $g(e)) : al(Fr | pr, e, e.return);
          break;
        }
      }
    }
    function hx(e, t) {
      for (; be !== null; ) {
        var a = be;
        Wt(a), yx(a, t), gn();
        var i = a.child;
        i !== null ? (i.return = a, be = i) : mx(e);
      }
    }
    function mx(e) {
      for (; be !== null; ) {
        var t = be, a = t.sibling, i = t.return;
        if (UR(t), t === e) {
          be = null;
          return;
        }
        if (a !== null) {
          a.return = i, be = a;
          return;
        }
        be = i;
      }
    }
    function yx(e, t) {
      switch (e.tag) {
        case pe:
        case je:
        case Qe: {
          e.mode & bt ? (Yg(), al(Fr, e, t), $g(e)) : al(Fr, e, t);
          break;
        }
      }
    }
    function gx(e) {
      switch (e.tag) {
        case pe:
        case je:
        case Qe: {
          try {
            jo(vr | pr, e);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case X: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Sx(e) {
      switch (e.tag) {
        case pe:
        case je:
        case Qe: {
          try {
            jo(Fr | pr, e);
          } catch (t) {
            dn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ex(e) {
      switch (e.tag) {
        case pe:
        case je:
        case Qe: {
          try {
            al(vr | pr, e, e.return);
          } catch (a) {
            dn(e, e.return, a);
          }
          break;
        }
        case X: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function Cx(e) {
      switch (e.tag) {
        case pe:
        case je:
        case Qe:
          try {
            al(Fr | pr, e, e.return);
          } catch (t) {
            dn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var Rx = [];
    function Tx() {
      Rx.forEach(function(e) {
        return e();
      });
    }
    var bx = Pe.ReactCurrentActQueue;
    function wx(e) {
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
        return !e && bx.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var xx = Math.ceil, xS = Pe.ReactCurrentDispatcher, _S = Pe.ReactCurrentOwner, Br = Pe.ReactCurrentBatchConfig, ul = Pe.ReactCurrentActQueue, yr = (
      /*             */
      0
    ), IR = (
      /*               */
      1
    ), $r = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), Mu = 0, Up = 1, Zs = 2, xm = 3, Ap = 4, QR = 5, DS = 6, kt = yr, Ta = null, Dn = null, gr = V, $l = V, kS = Do(V), Sr = Mu, jp = null, _m = V, Fp = V, Dm = V, Hp = null, Ya = null, OS = 0, WR = 500, GR = 1 / 0, _x = 500, zu = null;
    function Pp() {
      GR = bn() + _x;
    }
    function qR() {
      return GR;
    }
    var km = !1, LS = null, Yf = null, ec = !1, Ho = null, Vp = V, NS = [], MS = null, Dx = 50, Bp = 0, zS = null, US = !1, Om = !1, kx = 50, If = 0, Lm = null, $p = Yt, Nm = V, KR = !1;
    function Mm() {
      return Ta;
    }
    function ba() {
      return (kt & ($r | ki)) !== yr ? bn() : ($p !== Yt || ($p = bn()), $p);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & ht) === Ne)
        return He;
      if ((kt & $r) !== yr && gr !== V)
        return tr(gr);
      var a = b1() !== T1;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Nm === Fn && (Nm = Nd()), Nm;
      }
      var u = ga();
      if (u !== Fn)
        return u;
      var s = ob();
      return s;
    }
    function Ox(e) {
      var t = e.mode;
      return (t & ht) === Ne ? He : Yv();
    }
    function Er(e, t, a, i) {
      e_(), KR && S("useInsertionEffect must not schedule updates."), US && (Om = !0), vo(e, a, i), (kt & $r) !== V && e === Ta ? r_(t) : (xr && Qv(e, t, a), a_(t), e === Ta && ((kt & $r) === yr && (Fp = it(Fp, a)), Sr === Ap && Vo(e, gr)), Ia(e, i), a === He && kt === yr && (t.mode & ht) === Ne && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Pp(), KE()));
    }
    function Lx(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ia(e, a);
    }
    function Nx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (kt & $r) !== yr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Vv(e, t);
      var i = ta(e, e === Ta ? gr : V);
      if (i === V) {
        a !== null && d0(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== BS)) {
        a == null && s !== He && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && d0(a);
      var f;
      if (u === He)
        e.tag === ko ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), l1(ZR.bind(null, e))) : qE(ZR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : cb(function() {
          (kt & ($r | ki)) === yr && Oo();
        }), f = null;
      else {
        var p;
        switch (Gv(i)) {
          case ra:
            p = Qi;
            break;
          case ja:
            p = ps;
            break;
          case cr:
            p = ou;
            break;
          case ef:
            p = io;
            break;
          default:
            p = ou;
            break;
        }
        f = $S(p, XR.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function XR(e, t) {
      if (K1(), $p = Yt, Nm = V, (kt & ($r | ki)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ta(e, e === Ta ? gr : V);
      if (u === V)
        return null;
      var s = !ws(e, u) && !$v(e, u) && !t, f = s ? Bx(e, u) : Um(e, u);
      if (f !== Mu) {
        if (f === Zs) {
          var p = Qc(e);
          p !== V && (u = p, f = AS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw tc(e, V), Vo(e, u), Ia(e, bn()), v;
        }
        if (f === DS)
          Vo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !zx(g)) {
            if (f = Um(e, u), f === Zs) {
              var x = Qc(e);
              x !== V && (u = x, f = AS(e, x));
            }
            if (f === Up) {
              var b = jp;
              throw tc(e, V), Vo(e, u), Ia(e, bn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Mx(e, f, u);
        }
      }
      return Ia(e, bn()), e.callbackNode === a ? XR.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = tc(e, t);
        i.flags |= Sn, Zb(e.containerInfo);
      }
      var u = Um(e, t);
      if (u !== Zs) {
        var s = Ya;
        Ya = a, s !== null && JR(s);
      }
      return u;
    }
    function JR(e) {
      Ya === null ? Ya = e : Ya.push.apply(Ya, e);
    }
    function Mx(e, t, a) {
      switch (t) {
        case Mu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zs: {
          nc(e, Ya, zu);
          break;
        }
        case xm: {
          if (Vo(e, a), Wc(a) && // do not delay if we're inside an act() scope
          !p0()) {
            var i = OS + WR - bn();
            if (i > 10) {
              var u = ta(e, V);
              if (u !== V)
                break;
              var s = e.suspendedLanes;
              if (!hu(s, a)) {
                ba(), Xc(e, s);
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
          if (!p0()) {
            var f = Dd(e, a), p = f, v = bn() - p, y = Zx(v) - v;
            if (y > 10) {
              e.timeoutHandle = My(nc.bind(null, e, Ya, zu), y);
              break;
            }
          }
          nc(e, Ya, zu);
          break;
        }
        case QR: {
          nc(e, Ya, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function zx(e) {
      for (var t = e; ; ) {
        if (t.flags & Tc) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Te(f(), p))
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
      t = xs(t, Dm), t = xs(t, Fp), zd(e, t);
    }
    function ZR(e) {
      if (X1(), (kt & ($r | ki)) !== yr)
        throw new Error("Should not already be working.");
      Au();
      var t = ta(e, V);
      if (!na(t, He))
        return Ia(e, bn()), null;
      var a = Um(e, t);
      if (e.tag !== ko && a === Zs) {
        var i = Qc(e);
        i !== V && (t = i, a = AS(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw tc(e, V), Vo(e, t), Ia(e, bn()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, nc(e, Ya, zu), Ia(e, bn()), null;
    }
    function Ux(e, t) {
      t !== V && (_s(e, it(t, He)), Ia(e, bn()), (kt & ($r | ki)) === yr && (Pp(), Oo()));
    }
    function jS(e, t) {
      var a = kt;
      kt |= IR;
      try {
        return e(t);
      } finally {
        kt = a, kt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Pp(), KE());
      }
    }
    function Ax(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, In(ra), e(t, a, i, u);
      } finally {
        In(s), Br.transition = f, kt === yr && Pp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === ko && (kt & ($r | ki)) === yr && Au();
      var t = kt;
      kt |= IR;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, In(ra), e ? e() : void 0;
      } finally {
        In(i), Br.transition = a, kt = t, (kt & ($r | ki)) === yr && Oo();
      }
    }
    function e0() {
      return (kt & ($r | ki)) !== yr;
    }
    function zm(e, t) {
      la(kS, $l, e), $l = it($l, t);
    }
    function FS(e) {
      $l = kS.current, ia(kS, e);
    }
    function tc(e, t) {
      e.finishedWork = null, e.finishedLanes = V;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, sb(a)), Dn !== null)
        for (var i = Dn.return; i !== null; ) {
          var u = i.alternate;
          kR(u, i), i = i.return;
        }
      Ta = e;
      var s = rc(e.current, null);
      return Dn = s, gr = $l = t, Sr = Mu, jp = null, _m = V, Fp = V, Dm = V, Hp = null, Ya = null, L1(), Zi.discardPendingWarnings(), s;
    }
    function t0(e, t) {
      do {
        var a = Dn;
        try {
          if (Yh(), wC(), gn(), _S.current = null, a === null || a.return === null) {
            Sr = Up, jp = t, Dn = null;
            return;
          }
          if (qe && a.mode & bt && Sm(a, !0), We)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hs(a, i, gr);
            } else
              Ci(a, t, gr);
          lw(e, a.return, a, t, gr), i0(a);
        } catch (u) {
          t = u, Dn === a && a !== null ? (a = a.return, Dn = a) : a = Dn;
          continue;
        }
        return;
      } while (!0);
    }
    function n0() {
      var e = xS.current;
      return xS.current = vm, e === null ? vm : e;
    }
    function r0(e) {
      xS.current = e;
    }
    function jx() {
      OS = bn();
    }
    function Yp(e) {
      _m = it(e, _m);
    }
    function Fx() {
      Sr === Mu && (Sr = xm);
    }
    function HS() {
      (Sr === Mu || Sr === xm || Sr === Zs) && (Sr = Ap), Ta !== null && (_l(_m) || _l(Fp)) && Vo(Ta, gr);
    }
    function Hx(e) {
      Sr !== Ap && (Sr = Zs), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function Px() {
      return Sr === Mu;
    }
    function Um(e, t) {
      var a = kt;
      kt |= $r;
      var i = n0();
      if (Ta !== e || gr !== t) {
        if (xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, gr), u.clear()), Ud(e, t);
        }
        zu = Zc(), tc(e, t);
      }
      bd(t);
      do
        try {
          Vx();
          break;
        } catch (s) {
          t0(e, s);
        }
      while (!0);
      if (Yh(), kt = a, r0(i), Dn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return hn(), Ta = null, gr = V, Sr;
    }
    function Vx() {
      for (; Dn !== null; )
        a0(Dn);
    }
    function Bx(e, t) {
      var a = kt;
      kt |= $r;
      var i = n0();
      if (Ta !== e || gr !== t) {
        if (xr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, gr), u.clear()), Ud(e, t);
        }
        zu = Zc(), Pp(), tc(e, t);
      }
      bd(t);
      do
        try {
          $x();
          break;
        } catch (s) {
          t0(e, s);
        }
      while (!0);
      return Yh(), r0(i), kt = a, Dn !== null ? (wd(), Mu) : (hn(), Ta = null, gr = V, Sr);
    }
    function $x() {
      for (; Dn !== null && !md(); )
        a0(Dn);
    }
    function a0(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & bt) !== Ne ? (Bg(e), a = PS(t, e, $l), Sm(e, !0)) : a = PS(t, e, $l), gn(), e.memoizedProps = e.pendingProps, a === null ? i0(e) : Dn = a, _S.current = null;
    }
    function i0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === Le) {
          Wt(t);
          var u = void 0;
          if ((t.mode & bt) === Ne ? u = DR(a, t, $l) : (Bg(t), u = DR(a, t, $l), Sm(t, !1)), gn(), u !== null) {
            Dn = u;
            return;
          }
        } else {
          var s = Fw(a, t);
          if (s !== null) {
            s.flags &= kv, Dn = s;
            return;
          }
          if ((t.mode & bt) !== Ne) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = Le, i.deletions = null;
          else {
            Sr = DS, Dn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Dn = v;
          return;
        }
        t = i, Dn = t;
      } while (t !== null);
      Sr === Mu && (Sr = QR);
    }
    function nc(e, t, a) {
      var i = ga(), u = Br.transition;
      try {
        Br.transition = null, In(ra), Yx(e, t, a, i);
      } finally {
        Br.transition = u, In(i);
      }
      return null;
    }
    function Yx(e, t, a, i) {
      do
        Au();
      while (Ho !== null);
      if (t_(), (kt & ($r | ki)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), u === null)
        return Ei(), null;
      if (s === V && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = V, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = it(u.lanes, u.childLanes);
      Iv(e, f), e === Ta && (Ta = null, Dn = null, gr = V), ((u.subtreeFlags & or) !== Le || (u.flags & or) !== Le) && (ec || (ec = !0, MS = a, $S(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Sl | ao | El | or)) !== Le, v = (u.flags & (Sl | ao | El | or)) !== Le;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        In(ra);
        var x = kt;
        kt |= ki, _S.current = null, $w(e, u), KC(), rx(e, u, s), nb(e.containerInfo), e.current = u, ms(s), ax(u, e, s), cu(), Lv(), kt = x, In(g), Br.transition = y;
      } else
        e.current = u, KC();
      var b = ec;
      if (ec ? (ec = !1, Ho = e, Vp = s) : (If = 0, Lm = null), f = e.pendingLanes, f === V && (Yf = null), b || s0(e.current, !1), Sd(u.stateNode, i), xr && e.memoizedUpdaters.clear(), Tx(), Ia(e, bn()), t !== null)
        for (var z = e.onRecoverableError, A = 0; A < t.length; A++) {
          var H = t[A], ce = H.stack, Ae = H.digest;
          z(H.value, {
            componentStack: ce,
            digest: Ae
          });
        }
      if (km) {
        km = !1;
        var De = LS;
        throw LS = null, De;
      }
      return na(Vp, He) && e.tag !== ko && Au(), f = e.pendingLanes, na(f, He) ? (q1(), e === zS ? Bp++ : (Bp = 0, zS = e)) : Bp = 0, Oo(), Ei(), null;
    }
    function Au() {
      if (Ho !== null) {
        var e = Gv(Vp), t = _r(cr, e), a = Br.transition, i = ga();
        try {
          return Br.transition = null, In(t), Qx();
        } finally {
          In(i), Br.transition = a;
        }
      }
      return !1;
    }
    function Ix(e) {
      NS.push(e), ec || (ec = !0, $S(ou, function() {
        return Au(), null;
      }));
    }
    function Qx() {
      if (Ho === null)
        return !1;
      var e = MS;
      MS = null;
      var t = Ho, a = Vp;
      if (Ho = null, Vp = V, (kt & ($r | ki)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Om = !1, Td(a);
      var i = kt;
      kt |= ki, fx(t.current), ux(t, t.current, a, e);
      {
        var u = NS;
        NS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Ww(t, f);
        }
      }
      oo(), s0(t.current, !0), kt = i, Oo(), Om ? t === Lm ? If++ : (If = 0, Lm = t) : If = 0, US = !1, Om = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function l0(e) {
      return Yf !== null && Yf.has(e);
    }
    function Wx(e) {
      Yf === null ? Yf = /* @__PURE__ */ new Set([e]) : Yf.add(e);
    }
    function Gx(e) {
      km || (km = !0, LS = e);
    }
    var qx = Gx;
    function u0(e, t, a) {
      var i = Xs(a, t), u = aR(e, i, He), s = No(e, u, He), f = ba();
      s !== null && (vo(s, He, f), Ia(s, f));
    }
    function dn(e, t, a) {
      if (Pw(a), Qp(!1), e.tag === j) {
        u0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === j) {
          u0(i, e, a);
          return;
        } else if (i.tag === X) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !l0(s)) {
            var f = Xs(a, e), p = lS(i, f, He), v = No(i, p, He), y = ba();
            v !== null && (vo(v, He, y), Ia(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Kx(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ba();
      Xc(e, a), i_(e), Ta === e && hu(gr, a) && (Sr === Ap || Sr === xm && Wc(gr) && bn() - OS < WR ? tc(e, V) : Dm = it(Dm, a)), Ia(e, u);
    }
    function o0(e, t) {
      t === Fn && (t = Ox(e));
      var a = ba(), i = Ba(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function Xx(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), o0(e, a);
    }
    function Jx(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case Ee:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case It:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), o0(e, a);
    }
    function Zx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : xx(e / 1960) * 1960;
    }
    function e_() {
      if (Bp > Dx)
        throw Bp = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      If > kx && (If = 0, Lm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function t_() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function s0(e, t) {
      Wt(e), Am(e, Mr, Ex), t && Am(e, gl, Cx), Am(e, Mr, gx), t && Am(e, gl, Sx), gn();
    }
    function Am(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Le ? i = i.child : ((i.flags & t) !== Le && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var jm = null;
    function c0(e) {
      {
        if ((kt & $r) !== yr || !(e.mode & ht))
          return;
        var t = e.tag;
        if (t !== re && t !== j && t !== X && t !== pe && t !== je && t !== ct && t !== Qe)
          return;
        var a = Ge(e) || "ReactComponent";
        if (jm !== null) {
          if (jm.has(a))
            return;
          jm.add(a);
        } else
          jm = /* @__PURE__ */ new Set([a]);
        var i = Jn;
        try {
          Wt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Wt(e) : gn();
        }
      }
    }
    var PS;
    {
      var n_ = null;
      PS = function(e, t, a) {
        var i = g0(n_, t);
        try {
          return TR(e, t, a);
        } catch (s) {
          if (v1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Yh(), wC(), kR(e, t), g0(t, i), t.mode & bt && Bg(t), Ma(null, TR, null, e, t, a), sd()) {
            var u = cd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var f0 = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function r_(e) {
      if (qr && !Q1())
        switch (e.tag) {
          case pe:
          case je:
          case Qe: {
            var t = Dn && Ge(Dn) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Ge(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case X: {
            f0 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), f0 = !0);
            break;
          }
        }
    }
    function Ip(e, t) {
      if (xr) {
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
    function d0(e) {
      if (e !== BS)
        return hd(e);
    }
    function p0() {
      return ul.current !== null;
    }
    function a_(e) {
      {
        if (e.mode & ht) {
          if (!YR())
            return;
        } else if (!wx() || kt !== yr || e.tag !== pe && e.tag !== je && e.tag !== Qe)
          return;
        if (ul.current === null) {
          var t = Jn;
          try {
            Wt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ge(e));
          } finally {
            t ? Wt(e) : gn();
          }
        }
      }
    }
    function i_(e) {
      e.tag !== ko && YR() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      KR = e;
    }
    var Oi = null, Qf = null, l_ = function(e) {
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
                $$typeof: Q,
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
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case X: {
            typeof i == "function" && (u = !0);
            break;
          }
          case pe: {
            (typeof i == "function" || s === Ke) && (u = !0);
            break;
          }
          case je: {
            (s === Q || s === Ke) && (u = !0);
            break;
          }
          case ct:
          case Qe: {
            (s === pt || s === Ke) && (u = !0);
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
    function h0(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Qf === null && (Qf = /* @__PURE__ */ new WeakSet()), Qf.add(e);
      }
    }
    var u_ = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          QS(e.current, i, a);
        });
      }
    }, o_ = function(e, t) {
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
          case pe:
          case Qe:
          case X:
            v = p;
            break;
          case je:
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
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = Ba(e, He);
          b !== null && Er(b, e, He, Yt);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var s_ = function(e, t) {
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
          case pe:
          case Qe:
          case X:
            p = f;
            break;
          case je:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? c_(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function c_(e, t) {
      {
        var a = f_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case G:
              t.add(i.stateNode);
              return;
            case ee:
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
    function f_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === G)
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
    function d_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Le, this.subtreeFlags = Le, this.deletions = null, this.lanes = V, this.childLanes = V, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ui = function(e, t, a, i) {
      return new d_(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function p_(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function v_(e) {
      if (typeof e == "function")
        return qS(e) ? X : pe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Q)
          return je;
        if (t === pt)
          return ct;
      }
      return re;
    }
    function rc(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Le, a.subtreeFlags = Le, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & jn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case re:
        case pe:
        case Qe:
          a.type = Wf(e.type);
          break;
        case X:
          a.type = YS(e.type);
          break;
        case je:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function h_(e, t) {
      e.flags &= jn | zn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = V, e.lanes = t, e.child = null, e.subtreeFlags = Le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Le, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function m_(e, t, a) {
      var i;
      return e === zh ? (i = ht, t === !0 && (i |= tt, i |= Xt)) : i = Ne, xr && (i |= bt), ui(j, null, null, i);
    }
    function KS(e, t, a, i, u, s) {
      var f = re, p = e;
      if (typeof e == "function")
        qS(e) ? (f = X, p = YS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = G;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = ln, u |= tt, (u & ht) !== Ne && (u |= Xt);
            break;
          case fi:
            return y_(a, u, s, t);
          case ue:
            return g_(a, u, s, t);
          case fe:
            return S_(a, u, s, t);
          case Rn:
            return y0(a, u, s, t);
          case an:
          case yt:
          case cn:
          case Tr:
          case ot:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = xe;
                  break e;
                case R:
                  f = Oe;
                  break e;
                case Q:
                  f = je, p = IS(p);
                  break e;
                case pt:
                  f = ct;
                  break e;
                case Ke:
                  f = Cn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ge(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = ui(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function XS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = KS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Bo(e, t, a, i) {
      var u = ui(Ie, e, i, t);
      return u.lanes = a, u;
    }
    function y_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(mt, e, i, t | bt);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function g_(e, t, a, i) {
      var u = ui(Ee, e, i, t);
      return u.elementType = ue, u.lanes = a, u;
    }
    function S_(e, t, a, i) {
      var u = ui(It, e, i, t);
      return u.elementType = fe, u.lanes = a, u;
    }
    function y0(e, t, a, i) {
      var u = ui(Fe, e, i, t);
      u.elementType = Rn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function JS(e, t, a) {
      var i = ui(oe, e, null, t);
      return i.lanes = a, i;
    }
    function E_() {
      var e = ui(G, null, null, Ne);
      return e.elementType = "DELETED", e;
    }
    function C_(e) {
      var t = ui(pn, null, null, Ne);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(ee, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function g0(e, t) {
      return e === null && (e = ui(re, null, null, Ne)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function R_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Kc(V), this.expirationTimes = Kc(Yt), this.pendingLanes = V, this.suspendedLanes = V, this.pingedLanes = V, this.expiredLanes = V, this.mutableReadLanes = V, this.finishedLanes = V, this.entangledLanes = V, this.entanglements = Kc(V), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < _d; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case zh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ko:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function S0(e, t, a, i, u, s, f, p, v, y) {
      var g = new R_(e, t, a, p, v), x = m_(t, s);
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
      return dg(x), g;
    }
    var eE = "18.3.1";
    function T_(e, t, a) {
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
    function E0(e) {
      if (!e)
        return li;
      var t = ro(e), a = i1(t);
      if (t.tag === X) {
        var i = t.type;
        if (Al(i))
          return WE(t, i, a);
      }
      return a;
    }
    function b_(e, t) {
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
        if (u.mode & tt) {
          var s = Ge(a) || "Component";
          if (!nE[s]) {
            nE[s] = !0;
            var f = Jn;
            try {
              Wt(u), a.mode & tt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Wt(f) : gn();
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
      var g = !0, x = S0(a, i, g, e, u, s, f, p, v);
      x.context = E0(null);
      var b = x.current, z = ba(), A = Po(b), H = Lu(z, A);
      return H.callback = t ?? null, No(b, H, A), Lx(x, A, z), x;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = ba(), f = Po(u);
      _c(f);
      var p = E0(a);
      t.context === null ? t.context = p : t.pendingContext = p, qr && Jn !== null && !tE && (tE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ge(Jn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (Er(y, u, f, s), qh(y, u, f)), f;
    }
    function Fm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case G:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function w_(e) {
      switch (e.tag) {
        case j: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Bv(t);
            Ux(t, a);
          }
          break;
        }
        case Ee: {
          Uu(function() {
            var u = Ba(e, He);
            if (u !== null) {
              var s = ba();
              Er(u, e, He, s);
            }
          });
          var i = He;
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
    function x_(e) {
      if (e.tag === Ee) {
        var t = po, a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Er(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function __(e) {
      if (e.tag === Ee) {
        var t = Po(e), a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Er(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function b0(e) {
      var t = ni(e);
      return t === null ? null : t.stateNode;
    }
    var w0 = function(e) {
      return null;
    };
    function D_(e) {
      return w0(e);
    }
    var x0 = function(e) {
      return !1;
    };
    function k_(e) {
      return x0(e);
    }
    var _0 = null, D0 = null, k0 = null, O0 = null, L0 = null, N0 = null, M0 = null, z0 = null, U0 = null;
    {
      var A0 = function(e, t, a) {
        var i = t[a], u = at(e) ? e.slice() : et({}, e);
        return a + 1 === t.length ? (at(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = A0(e[i], t, a + 1), u);
      }, j0 = function(e, t) {
        return A0(e, t, 0);
      }, F0 = function(e, t, a, i) {
        var u = t[i], s = at(e) ? e.slice() : et({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], at(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = F0(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, H0 = function(e, t, a) {
        if (t.length !== a.length) {
          ke("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ke("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return F0(e, t, a, 0);
      }, P0 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = at(e) ? e.slice() : et({}, e);
        return s[u] = P0(e[u], t, a + 1, i), s;
      }, V0 = function(e, t, a) {
        return P0(e, t, 0, a);
      }, aE = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      _0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = V0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = Ba(e, He);
          f !== null && Er(f, e, He, Yt);
        }
      }, D0 = function(e, t, a) {
        var i = aE(e, t);
        if (i !== null) {
          var u = j0(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = et({}, e.memoizedProps);
          var s = Ba(e, He);
          s !== null && Er(s, e, He, Yt);
        }
      }, k0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = H0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var f = Ba(e, He);
          f !== null && Er(f, e, He, Yt);
        }
      }, O0 = function(e, t, a) {
        e.pendingProps = V0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, He);
        i !== null && Er(i, e, He, Yt);
      }, L0 = function(e, t) {
        e.pendingProps = j0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, He);
        a !== null && Er(a, e, He, Yt);
      }, N0 = function(e, t, a) {
        e.pendingProps = H0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, He);
        i !== null && Er(i, e, He, Yt);
      }, M0 = function(e) {
        var t = Ba(e, He);
        t !== null && Er(t, e, He, Yt);
      }, z0 = function(e) {
        w0 = e;
      }, U0 = function(e) {
        x0 = e;
      };
    }
    function O_(e) {
      var t = Zr(e);
      return t === null ? null : t.stateNode;
    }
    function L_(e) {
      return null;
    }
    function N_() {
      return Jn;
    }
    function M_(e) {
      var t = e.findFiberByHostInstance, a = Pe.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: _0,
        overrideHookStateDeletePath: D0,
        overrideHookStateRenamePath: k0,
        overrideProps: O0,
        overridePropsDeletePath: L0,
        overridePropsRenamePath: N0,
        setErrorHandler: z0,
        setSuspenseHandler: U0,
        scheduleUpdate: M0,
        currentDispatcherRef: a,
        findHostInstanceByFiber: O_,
        findFiberByHostInstance: t || L_,
        // React Refresh
        findHostInstancesForRefresh: s_,
        scheduleRefresh: u_,
        scheduleRoot: o_,
        setRefreshHandler: l_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: N_,
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
    Hm.prototype.render = iE.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Pm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Mn) {
          var i = b0(t.current);
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
        e0() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Wp(null, e, null, null);
        }), BE(t);
      }
    };
    function z_(e, t) {
      if (!Pm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      $0(e);
      var a = !1, i = !1, u = "", s = B0;
      t != null && (t.hydrate ? ke("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ur && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = C0(e, zh, null, a, i, u, s);
      _h(f.current, e);
      var p = e.nodeType === Mn ? e.parentNode : e;
      return Zd(p), new iE(f);
    }
    function Hm(e) {
      this._internalRoot = e;
    }
    function U_(e) {
      e && Zv(e);
    }
    Hm.prototype.unstable_scheduleHydration = U_;
    function A_(e, t, a) {
      if (!Pm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      $0(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = B0;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = R0(t, null, e, zh, i, s, f, p, v);
      if (_h(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          P1(y, x);
        }
      return new Hm(y);
    }
    function Pm(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === $i || e.nodeType === Xo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === $i || e.nodeType === Xo || e.nodeType === Mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $0(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var j_ = Pe.ReactCurrentOwner, Y0;
    Y0 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Mn) {
        var t = b0(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = lE(e), u = !!(i && _o(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function lE(e) {
      return e ? e.nodeType === $i ? e.documentElement : e.firstChild : null;
    }
    function I0() {
    }
    function F_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Fm(f);
            s.call(b);
          };
        }
        var f = R0(
          t,
          i,
          e,
          ko,
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
        var p = e.nodeType === Mn ? e.parentNode : e;
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
        var g = C0(
          e,
          ko,
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
        var x = e.nodeType === Mn ? e.parentNode : e;
        return Zd(x), Uu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function H_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, i, u) {
      Y0(a), H_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = F_(a, t, e, u, i);
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
    var Q0 = !1;
    function P_(e) {
      {
        Q0 || (Q0 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = j_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Dt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : b_(e, "findDOMNode");
    }
    function V_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function B_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function $_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !iu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, i);
    }
    var W0 = !1;
    function Y_(e) {
      if (W0 || (W0 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = lE(e), i = a && !_o(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, BE(e);
          });
        }), !0;
      } else {
        {
          var u = lE(e), s = !!(u && _o(u)), f = e.nodeType === Kr && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    iy(w_), jd(x_), ly(__), tf(ga), qv(Wv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ls(QT), _v(jS, Ax, Uu);
    function I_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Pm(t))
        throw new Error("Target container is not a DOM element.");
      return T_(e, t, null, a);
    }
    function Q_(e, t, a, i) {
      return $_(e, t, a, i);
    }
    var uE = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [_o, bf, Dh, ud, Zu, jS]
    };
    function W_(e, t) {
      return uE.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), z_(e, t);
    }
    function G_(e, t, a) {
      return uE.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), A_(e, t, a);
    }
    function q_(e) {
      return e0() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var K_ = M_({
      findFiberByHostInstance: Bs,
      bundleType: 1,
      version: eE,
      rendererPackageName: "react-dom"
    });
    if (!K_ && Gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var G0 = window.location.protocol;
      /^(https?|file):$/.test(G0) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (G0 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uE, Wa.createPortal = I_, Wa.createRoot = W_, Wa.findDOMNode = P_, Wa.flushSync = q_, Wa.hydrate = V_, Wa.hydrateRoot = G_, Wa.render = B_, Wa.unmountComponentAtNode = Y_, Wa.unstable_batchedUpdates = jS, Wa.unstable_renderSubtreeIntoContainer = Q_, Wa.version = eE, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Wa;
}
var sT = {};
function cT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (sT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cT);
    } catch ($) {
      console.error($);
    }
  }
}
sT.NODE_ENV === "production" ? (cT(), dE.exports = oD()) : dE.exports = sD();
var cD = dE.exports, pE, fD = {}, $m = cD;
if (fD.NODE_ENV === "production")
  pE = $m.createRoot, $m.hydrateRoot;
else {
  var aT = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  pE = function($, W) {
    aT.usingClientEntryPoint = !0;
    try {
      return $m.createRoot($, W);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
const dD = ($) => {
  switch ($) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "JPY":
      return "¥";
    case "CNY":
      return "¥";
    case "KRW":
      return "₩";
    case "INR":
      return "₹";
    case "RUB":
      return "₽";
    case "BRL":
      return "R$";
    case "ZAR":
      return "R";
    case "AUD":
      return "A$";
    case "CAD":
      return "C$";
    case "NZD":
      return "NZ$";
    case "CHF":
      return "Fr";
    case "HKD":
      return "HK$";
    case "SGD":
      return "S$";
    case "SEK":
      return "kr";
    case "NOK":
      return "kr";
    case "DKK":
      return "kr";
    case "PLN":
      return "zł";
    case "THB":
      return "฿";
    case "MXN":
      return "Mex$";
    default:
      return $;
  }
}, pD = ($) => {
  if (!$.designOptions || $.designOptions !== "custom_design") return;
  const W = JSON.parse($.customDesigns);
  document.documentElement.style.setProperty("--barn2-bundles-bundle-text-color", W.bundleTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-text-color", W.highlightedTextColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-border-color", W.bundleBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-border-color", W.highlightedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-badge-color", W.bundleBadgeColor), document.documentElement.style.setProperty("--barn2-bundles-badge-text-color", W.badgeTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-color", W.highlightedColor), document.documentElement.style.setProperty("--barn2-bundles-table-color", W.tableColor), document.documentElement.style.setProperty("--barn2-bundles-header-text-color", W.headerTextColor), document.documentElement.style.setProperty("--barn2-bundles-background-color", W.backgroundColor), document.documentElement.style.setProperty("--barn2-bundles-text-color", W.textColor), document.documentElement.style.setProperty("--barn2-bundles-label-color", W.labelColor), document.documentElement.style.setProperty("--barn2-bundles-label-text-color", W.lebelTextColor), document.documentElement.style.setProperty("--barn2-bundles-cart-notice-bg-color", W.cartNoticeBackgroundColor), document.documentElement.style.setProperty("--barn2-bundles-cart-notice-text-color", W.cartNoticeTextColor), document.documentElement.style.setProperty("--barn2-bundles-badge-color", W.badgeColor), document.documentElement.style.setProperty("--barn2-bundles-border-color", W.borderColor);
  let M = "0";
  switch (W.cornerRadius) {
    case "slightlyRounded":
      M = "8px";
      break;
    case "fullyRounded":
      M = "15px";
      break;
    case "square":
    default:
      M = "0";
  }
  document.documentElement.style.setProperty("--barn2-bundles-corner-radius", M);
};
var fT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function($) {
  (function() {
    var W = function() {
      function M() {
      }
      M.prototype = /* @__PURE__ */ Object.create(null);
      function Pe(re, j) {
        for (var ee = j.length, G = 0; G < ee; ++G)
          pe(re, j[G]);
      }
      var rt = {}.hasOwnProperty;
      function ut(re, j) {
        re[j] = !0;
      }
      function ke(re, j) {
        if (j.toString !== Object.prototype.toString && !j.toString.toString().includes("[native code]")) {
          re[j.toString()] = !0;
          return;
        }
        for (var ee in j)
          rt.call(j, ee) && (re[ee] = !!j[ee]);
      }
      var S = /\s+/;
      function $e(re, j) {
        for (var ee = j.split(S), G = ee.length, oe = 0; oe < G; ++oe)
          re[ee[oe]] = !0;
      }
      function pe(re, j) {
        if (j) {
          var ee = typeof j;
          ee === "string" ? $e(re, j) : Array.isArray(j) ? Pe(re, j) : ee === "object" ? ke(re, j) : ee === "number" && ut(re, j);
        }
      }
      function X() {
        for (var re = arguments.length, j = Array(re), ee = 0; ee < re; ee++)
          j[ee] = arguments[ee];
        var G = new M();
        Pe(G, j);
        var oe = [];
        for (var Ie in G)
          G[Ie] && oe.push(Ie);
        return oe.join(" ");
      }
      return X;
    }();
    $.exports ? (W.default = W, $.exports = W) : window.classNames = W;
  })();
})(fT);
var vD = fT.exports;
const iT = /* @__PURE__ */ Z_(vD);
function hD({ bundleData: $, isInEditor: W, currentVariant: M, storeDetails: Pe }) {
  const [rt, ut] = Vn.useState(null), [ke, S] = Vn.useState([]), [$e, pe] = Vn.useState(), [X, re] = Vn.useState([]);
  Vn.useEffect(() => {
    S(JSON.parse($.volumeBundles || [])), re(JSON.parse($.previewOptions || {})), pe($.layout);
  }, []);
  const j = (Oe) => Pe.moneyFormat.replace("{{amount}}", Oe), ee = (Oe) => {
    let xe = "";
    return Oe.discount_type === "amount" ? xe = /* @__PURE__ */ nt.jsxs("span", { children: [
      "Save ",
      j(Oe.discount)
    ] }) : xe = /* @__PURE__ */ nt.jsxs("span", { children: [
      "Save ",
      Oe.discount,
      "%"
    ] }), Oe.discount || (xe = /* @__PURE__ */ nt.jsx("span", { children: "Regular price" })), xe;
  }, G = (Oe) => (W ? window.b2ProductData.product.price : M.price) / 100, oe = (Oe, xe = "discounted") => {
    const mt = G() * Oe.quantity;
    if (xe === "regular")
      return Ie(mt);
    let Ee = mt;
    if (Oe.discount_type === "percentage" && Oe.discount) {
      const ct = mt * Oe.discount / 100;
      Ee = mt - ct;
    } else Oe.discount_type === "amount" && Oe.discount && (Ee = mt - Oe.discount);
    return Ie(Ee);
  }, Ie = (Oe) => {
    const xe = Number(Oe), je = Number(xe.toFixed(2));
    return j(je);
  }, ln = (Oe) => {
    const xe = document.querySelector('.product-form__input.product-form__quantity input[type="number"]');
    xe && (xe.value = Oe.quantity, xe.dispatchEvent(new Event("change", { bubbles: !0 })));
  };
  return Vn.useEffect(() => {
    const Oe = ke.find((xe) => xe.highlighted);
    if (Oe) {
      const xe = ke.indexOf(Oe);
      ut(xe), ln(Oe);
    }
  }, [ke]), /* @__PURE__ */ nt.jsxs("div", { className: "barn2-discount-bundles", children: [
    $.previewEnabled && /* @__PURE__ */ nt.jsxs(nt.Fragment, { children: [
      (X == null ? void 0 : X.title) && /* @__PURE__ */ nt.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ nt.jsx("span", { children: X == null ? void 0 : X.title }) }),
      (X == null ? void 0 : X.description) && /* @__PURE__ */ nt.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ nt.jsx("span", { children: X == null ? void 0 : X.description }) })
    ] }),
    /* @__PURE__ */ nt.jsx(
      "div",
      {
        className: iT(
          "barn2-discount-bundles-list",
          `barn2-dbs-layout-${$e}`,
          `discount-columns-${ke.length}`
        ),
        children: ke.map((Oe, xe) => /* @__PURE__ */ nt.jsxs(
          "div",
          {
            className: iT(
              "barn2-discount-bundle",
              {
                highlighted: Oe.highlighted,
                selected: rt === xe
              }
            ),
            onClick: () => {
              ut(xe), ln(Oe);
            },
            children: [
              Oe.label.length > 0 && /* @__PURE__ */ nt.jsx("span", { className: "barn2-highlighted-text", children: Oe.label }),
              /* @__PURE__ */ nt.jsxs("div", { className: "barn2-dbs-top", children: [
                /* @__PURE__ */ nt.jsx("span", { className: "barn2-input-circle" }),
                /* @__PURE__ */ nt.jsxs("div", { className: "barn2-dbs-text-block", children: [
                  /* @__PURE__ */ nt.jsx("h4", { className: "barn2-dbs-bundle-title", children: Oe.description }),
                  X.amountSaved && /* @__PURE__ */ nt.jsx("p", { children: ee(Oe) })
                ] })
              ] }),
              /* @__PURE__ */ nt.jsxs("div", { className: "barn2-dbs-bottom", children: [
                /* @__PURE__ */ nt.jsx("span", { className: "barn2-dbs-price", children: oe(Oe, "discounted") }),
                X.showOriginalPrice && /* @__PURE__ */ nt.jsx("span", { className: "barn2-dbs-regular-price", children: oe(Oe, "regular") })
              ] })
            ]
          },
          xe
        ))
      }
    )
  ] });
}
function mD({ bundleData: $, isInEditor: W, currentVariant: M, storeDetails: Pe }) {
  const [rt, ut] = Vn.useState([]), [ke, S] = Vn.useState([]);
  Vn.useEffect(() => {
    ut(JSON.parse($.pricingTiers || [])), S(JSON.parse($.previewOptions || {}));
  }, []);
  const $e = (j) => {
    let ee;
    return j.discount_type === "percentage" ? ee = j.discount + "% off" : ee = re(j.discount) + " off", /* @__PURE__ */ nt.jsx("span", { className: "b2-pricing-tier-discount", children: ee });
  }, pe = () => (W ? window.b2ProductData.product.price : M.price) / 100, X = (j) => {
    let ee = pe();
    if (j.discount_type === "percentage" && j.discount) {
      const G = pe() * j.discount / 100;
      ee = pe() - G;
    } else j.discount_type === "amount" && j.discount && (ee = pe() - j.discount);
    return Math.max(0, ee.toFixed(2));
  }, re = (j) => Pe.moneyFormat.replace("{{amount}}", j);
  return /* @__PURE__ */ nt.jsxs("div", { className: "barn2-bulk-table-wrapper", children: [
    $.previewEnabled && /* @__PURE__ */ nt.jsxs(nt.Fragment, { children: [
      (ke == null ? void 0 : ke.title) && /* @__PURE__ */ nt.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ nt.jsx("span", { children: ke == null ? void 0 : ke.title }) }),
      (ke == null ? void 0 : ke.description) && /* @__PURE__ */ nt.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ nt.jsx("span", { children: ke == null ? void 0 : ke.description }) })
    ] }),
    /* @__PURE__ */ nt.jsx("div", { className: "barn2-bulk-table-container", children: /* @__PURE__ */ nt.jsxs("table", { className: "barn2-bulk-table", children: [
      /* @__PURE__ */ nt.jsx("thead", { children: /* @__PURE__ */ nt.jsxs("tr", { children: [
        /* @__PURE__ */ nt.jsx("th", { children: "Quantity" }),
        /* @__PURE__ */ nt.jsx("th", { children: "Discount" }),
        /* @__PURE__ */ nt.jsx("th", { children: "Price per item" })
      ] }) }),
      /* @__PURE__ */ nt.jsx("tbody", { children: rt.length > 0 && rt.map((j, ee) => /* @__PURE__ */ nt.jsxs("tr", { children: [
        /* @__PURE__ */ nt.jsxs("td", { children: [
          j.min_quantity,
          "-",
          j.max_quantity
        ] }),
        /* @__PURE__ */ nt.jsx("td", { children: /* @__PURE__ */ nt.jsx("span", { className: "discount-pill", children: $e(j) }) }),
        /* @__PURE__ */ nt.jsx("td", { children: re(X(j)) })
      ] }, ee)) })
    ] }) })
  ] });
}
function yD({ bundleData: $, isInEditor: W, storeDetails: M }) {
  const [Pe, rt] = Vn.useState(null), [ut, ke] = Vn.useState("$"), S = () => {
    var re, j, ee;
    const X = ((ee = (j = (re = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : re.meta) == null ? void 0 : j.product) == null ? void 0 : ee.variants) || [];
    return X.length > 0 ? X[0] : 0;
  }, $e = (X) => {
    var ee, G, oe;
    const j = (((oe = (G = (ee = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : ee.meta) == null ? void 0 : G.product) == null ? void 0 : oe.variants) || []).find((Ie) => Ie.id === Number(X));
    j && rt(j);
  }, pe = () => {
    const X = document.querySelector(".product-form__input.product-form__quantity");
    X && (X.style.display = "none");
  };
  if (Vn.useEffect(() => {
    const re = new URLSearchParams(window.location.search).get("variant");
    re ? $e(re) : rt(S());
    const j = new MutationObserver((G) => {
      G.forEach((oe) => {
        if (oe.type === "attributes" || oe.type === "childList") {
          const ln = new URLSearchParams(window.location.search).get("variant");
          ln && $e(ln);
        }
      });
    }), ee = document.querySelector("form[action*='/cart/add']");
    ee && j.observe(ee, { attributes: !0, childList: !0, subtree: !0 });
  }, []), Vn.useEffect(() => {
    var re, j;
    const X = W ? window.b2ProductData.storeCurrency : (j = (re = window == null ? void 0 : window.Shopify) == null ? void 0 : re.currency) == null ? void 0 : j.active;
    ke(dD(X)), pD($), $.type === "volume_bundle" && pe();
  }, []), Pe !== null) {
    if (Pe !== null && $.type === "volume_bundle")
      return /* @__PURE__ */ nt.jsx(
        hD,
        {
          bundleData: $,
          isInEditor: W,
          currentVariant: Pe,
          storeDetails: M
        }
      );
    if (Pe !== null && $.type === "bulk_pricing" && $.previewEnabled === !0)
      return /* @__PURE__ */ nt.jsx(
        mD,
        {
          bundleData: $,
          isInEditor: W,
          currentVariant: Pe,
          storeDetails: M,
          storeCurrency: ut
        }
      );
  }
}
function gD() {
  var pe, X, re, j;
  const [$, W] = Vn.useState((re = (X = (pe = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : pe.meta) == null ? void 0 : X.product) == null ? void 0 : re.id), [M, Pe] = Vn.useState(null), [rt, ut] = Vn.useState(((j = window == null ? void 0 : window.b2ProductData) == null ? void 0 : j.isDesignMode) || !1), [ke, S] = Vn.useState({}), $e = async (ee) => {
    try {
      return await (await fetch(`/apps/barn2-bundles-bulk-discounts/discountbundle?productId=${ee}`)).json();
    } catch (G) {
      return console.error("Error fetching discount bundle:", G), null;
    }
  };
  return Vn.useEffect(() => {
    (async () => {
      try {
        const G = await $e($);
        if (G.response === "no_discounts") return;
        Pe(G == null ? void 0 : G.eligibleProductBundle), S(G == null ? void 0 : G.store);
      } catch (G) {
        console.error("Error in useEffect:", G);
      }
    })();
  }, [$, rt]), M && /* @__PURE__ */ nt.jsx(yD, { bundleData: M, isInEditor: rt, storeDetails: ke });
}
const lT = ($) => {
  pE($).render(/* @__PURE__ */ nt.jsx(gD, {}));
}, uT = document.getElementById("barn2_discounts_block");
if (uT)
  lT(uT);
else {
  const $ = document.querySelector("product-form.product-form");
  if ($) {
    const W = document.createElement("div");
    W.id = "barn2_discounts", W.classList.add("barn2_discounts"), $.parentNode.insertBefore(W, $.nextSibling), lT(W);
  }
}
