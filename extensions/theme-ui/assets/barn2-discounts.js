function Z_(Y) {
  return Y && Y.__esModule && Object.prototype.hasOwnProperty.call(Y, "default") ? Y.default : Y;
}
var cE = { exports: {} }, Kp = {}, fE = { exports: {} }, bt = {};
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
  if (q0) return bt;
  q0 = 1;
  var Y = Symbol.for("react.element"), G = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), Ie = Symbol.for("react.strict_mode"), Oe = Symbol.for("react.profiler"), ot = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), ve = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), ie = Symbol.iterator;
  function F(w) {
    return w === null || typeof w != "object" ? null : (w = ie && w[ie] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var ae = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, q = Object.assign, pe = {};
  function Ve(w, P, ge) {
    this.props = w, this.context = P, this.refs = pe, this.updater = ge || ae;
  }
  Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(w, P) {
    if (typeof w != "object" && typeof w != "function" && w != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, w, P, "setState");
  }, Ve.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function on() {
  }
  on.prototype = Ve.prototype;
  function It(w, P, ge) {
    this.props = w, this.context = P, this.refs = pe, this.updater = ge || ae;
  }
  var st = It.prototype = new on();
  st.constructor = It, q(st, Ve.prototype), st.isPureReactComponent = !0;
  var Be = Array.isArray, wt = Object.prototype.hasOwnProperty, we = { current: null }, tt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(w, P, ge) {
    var _e, He = {}, Ae = null, Et = null;
    if (P != null) for (_e in P.ref !== void 0 && (Et = P.ref), P.key !== void 0 && (Ae = "" + P.key), P) wt.call(P, _e) && !tt.hasOwnProperty(_e) && (He[_e] = P[_e]);
    var Ze = arguments.length - 2;
    if (Ze === 1) He.children = ge;
    else if (1 < Ze) {
      for (var Rt = Array(Ze), Bt = 0; Bt < Ze; Bt++) Rt[Bt] = arguments[Bt + 2];
      He.children = Rt;
    }
    if (w && w.defaultProps) for (_e in Ze = w.defaultProps, Ze) He[_e] === void 0 && (He[_e] = Ze[_e]);
    return { $$typeof: Y, type: w, key: Ae, ref: Et, props: He, _owner: we.current };
  }
  function gn(w, P) {
    return { $$typeof: Y, type: w.type, key: P, ref: w.ref, props: w.props, _owner: w._owner };
  }
  function Ot(w) {
    return typeof w == "object" && w !== null && w.$$typeof === Y;
  }
  function rn(w) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(ge) {
      return P[ge];
    });
  }
  var Ft = /\/+/g;
  function pt(w, P) {
    return typeof w == "object" && w !== null && w.key != null ? rn("" + w.key) : P.toString(36);
  }
  function Ue(w, P, ge, _e, He) {
    var Ae = typeof w;
    (Ae === "undefined" || Ae === "boolean") && (w = null);
    var Et = !1;
    if (w === null) Et = !0;
    else switch (Ae) {
      case "string":
      case "number":
        Et = !0;
        break;
      case "object":
        switch (w.$$typeof) {
          case Y:
          case G:
            Et = !0;
        }
    }
    if (Et) return Et = w, He = He(Et), w = _e === "" ? "." + pt(Et, 0) : _e, Be(He) ? (ge = "", w != null && (ge = w.replace(Ft, "$&/") + "/"), Ue(He, P, ge, "", function(Bt) {
      return Bt;
    })) : He != null && (Ot(He) && (He = gn(He, ge + (!He.key || Et && Et.key === He.key ? "" : ("" + He.key).replace(Ft, "$&/") + "/") + w)), P.push(He)), 1;
    if (Et = 0, _e = _e === "" ? "." : _e + ":", Be(w)) for (var Ze = 0; Ze < w.length; Ze++) {
      Ae = w[Ze];
      var Rt = _e + pt(Ae, Ze);
      Et += Ue(Ae, P, ge, Rt, He);
    }
    else if (Rt = F(w), typeof Rt == "function") for (w = Rt.call(w), Ze = 0; !(Ae = w.next()).done; ) Ae = Ae.value, Rt = _e + pt(Ae, Ze++), Et += Ue(Ae, P, ge, Rt, He);
    else if (Ae === "object") throw P = String(w), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Et;
  }
  function Nt(w, P, ge) {
    if (w == null) return w;
    var _e = [], He = 0;
    return Ue(w, _e, "", "", function(Ae) {
      return P.call(ge, Ae, He++);
    }), _e;
  }
  function dt(w) {
    if (w._status === -1) {
      var P = w._result;
      P = P(), P.then(function(ge) {
        (w._status === 0 || w._status === -1) && (w._status = 1, w._result = ge);
      }, function(ge) {
        (w._status === 0 || w._status === -1) && (w._status = 2, w._result = ge);
      }), w._status === -1 && (w._status = 0, w._result = P);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var at = { current: null }, k = { transition: null }, Q = { ReactCurrentDispatcher: at, ReactCurrentBatchConfig: k, ReactCurrentOwner: we };
  function te() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return bt.Children = { map: Nt, forEach: function(w, P, ge) {
    Nt(w, function() {
      P.apply(this, arguments);
    }, ge);
  }, count: function(w) {
    var P = 0;
    return Nt(w, function() {
      P++;
    }), P;
  }, toArray: function(w) {
    return Nt(w, function(P) {
      return P;
    }) || [];
  }, only: function(w) {
    if (!Ot(w)) throw Error("React.Children.only expected to receive a single React element child.");
    return w;
  } }, bt.Component = Ve, bt.Fragment = M, bt.Profiler = Oe, bt.PureComponent = It, bt.StrictMode = Ie, bt.Suspense = Ge, bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Q, bt.act = te, bt.cloneElement = function(w, P, ge) {
    if (w == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + w + ".");
    var _e = q({}, w.props), He = w.key, Ae = w.ref, Et = w._owner;
    if (P != null) {
      if (P.ref !== void 0 && (Ae = P.ref, Et = we.current), P.key !== void 0 && (He = "" + P.key), w.type && w.type.defaultProps) var Ze = w.type.defaultProps;
      for (Rt in P) wt.call(P, Rt) && !tt.hasOwnProperty(Rt) && (_e[Rt] = P[Rt] === void 0 && Ze !== void 0 ? Ze[Rt] : P[Rt]);
    }
    var Rt = arguments.length - 2;
    if (Rt === 1) _e.children = ge;
    else if (1 < Rt) {
      Ze = Array(Rt);
      for (var Bt = 0; Bt < Rt; Bt++) Ze[Bt] = arguments[Bt + 2];
      _e.children = Ze;
    }
    return { $$typeof: Y, type: w.type, key: He, ref: Ae, props: _e, _owner: Et };
  }, bt.createContext = function(w) {
    return w = { $$typeof: Ne, _currentValue: w, _currentValue2: w, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, w.Provider = { $$typeof: ot, _context: w }, w.Consumer = w;
  }, bt.createElement = $e, bt.createFactory = function(w) {
    var P = $e.bind(null, w);
    return P.type = w, P;
  }, bt.createRef = function() {
    return { current: null };
  }, bt.forwardRef = function(w) {
    return { $$typeof: S, render: w };
  }, bt.isValidElement = Ot, bt.lazy = function(w) {
    return { $$typeof: J, _payload: { _status: -1, _result: w }, _init: dt };
  }, bt.memo = function(w, P) {
    return { $$typeof: ve, type: w, compare: P === void 0 ? null : P };
  }, bt.startTransition = function(w) {
    var P = k.transition;
    k.transition = {};
    try {
      w();
    } finally {
      k.transition = P;
    }
  }, bt.unstable_act = te, bt.useCallback = function(w, P) {
    return at.current.useCallback(w, P);
  }, bt.useContext = function(w) {
    return at.current.useContext(w);
  }, bt.useDebugValue = function() {
  }, bt.useDeferredValue = function(w) {
    return at.current.useDeferredValue(w);
  }, bt.useEffect = function(w, P) {
    return at.current.useEffect(w, P);
  }, bt.useId = function() {
    return at.current.useId();
  }, bt.useImperativeHandle = function(w, P, ge) {
    return at.current.useImperativeHandle(w, P, ge);
  }, bt.useInsertionEffect = function(w, P) {
    return at.current.useInsertionEffect(w, P);
  }, bt.useLayoutEffect = function(w, P) {
    return at.current.useLayoutEffect(w, P);
  }, bt.useMemo = function(w, P) {
    return at.current.useMemo(w, P);
  }, bt.useReducer = function(w, P, ge) {
    return at.current.useReducer(w, P, ge);
  }, bt.useRef = function(w) {
    return at.current.useRef(w);
  }, bt.useState = function(w) {
    return at.current.useState(w);
  }, bt.useSyncExternalStore = function(w, P, ge) {
    return at.current.useSyncExternalStore(w, P, ge);
  }, bt.useTransition = function() {
    return at.current.useTransition();
  }, bt.version = "18.3.1", bt;
}
var Jp = { exports: {} };
Jp.exports;
var K0;
function tD() {
  return K0 || (K0 = 1, function(Y, G) {
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
      var Ie = "18.3.1", Oe = Symbol.for("react.element"), ot = Symbol.for("react.portal"), Ne = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ge = Symbol.for("react.profiler"), ve = Symbol.for("react.provider"), J = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), Ve = Symbol.for("react.offscreen"), on = Symbol.iterator, It = "@@iterator";
      function st(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = on && h[on] || h[It];
        return typeof C == "function" ? C : null;
      }
      var Be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, wt = {
        transition: null
      }, we = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, tt = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, $e = {}, gn = null;
      function Ot(h) {
        gn = h;
      }
      $e.setExtraStackFrame = function(h) {
        gn = h;
      }, $e.getCurrentStack = null, $e.getStackAddendum = function() {
        var h = "";
        gn && (h += gn);
        var C = $e.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var rn = !1, Ft = !1, pt = !1, Ue = !1, Nt = !1, dt = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: wt,
        ReactCurrentOwner: tt
      };
      dt.ReactDebugCurrentFrame = $e, dt.ReactCurrentActQueue = we;
      function at(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          Q("warn", h, z);
        }
      }
      function k(h) {
        {
          for (var C = arguments.length, z = new Array(C > 1 ? C - 1 : 0), H = 1; H < C; H++)
            z[H - 1] = arguments[H];
          Q("error", h, z);
        }
      }
      function Q(h, C, z) {
        {
          var H = dt.ReactDebugCurrentFrame, re = H.getStackAddendum();
          re !== "" && (C += "%s", z = z.concat([re]));
          var Ce = z.map(function(he) {
            return String(he);
          });
          Ce.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ce);
        }
      }
      var te = {};
      function w(h, C) {
        {
          var z = h.constructor, H = z && (z.displayName || z.name) || "ReactClass", re = H + "." + C;
          if (te[re])
            return;
          k("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, H), te[re] = !0;
        }
      }
      var P = {
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
          w(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, z, H) {
          w(h, "replaceState");
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
        enqueueSetState: function(h, C, z, H) {
          w(h, "setState");
        }
      }, ge = Object.assign, _e = {};
      Object.freeze(_e);
      function He(h, C, z) {
        this.props = h, this.context = C, this.refs = _e, this.updater = z || P;
      }
      He.prototype.isReactComponent = {}, He.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, He.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Ae = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Et = function(h, C) {
          Object.defineProperty(He.prototype, h, {
            get: function() {
              at("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var Ze in Ae)
          Ae.hasOwnProperty(Ze) && Et(Ze, Ae[Ze]);
      }
      function Rt() {
      }
      Rt.prototype = He.prototype;
      function Bt(h, C, z) {
        this.props = h, this.context = C, this.refs = _e, this.updater = z || P;
      }
      var On = Bt.prototype = new Rt();
      On.constructor = Bt, ge(On, He.prototype), On.isPureReactComponent = !0;
      function Gn() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var ir = Array.isArray;
      function Nn(h) {
        return ir(h);
      }
      function Cr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, z = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
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
          return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(h)), Ln(h);
      }
      function Ga(h, C, z) {
        var H = h.displayName;
        if (H)
          return H;
        var re = C.displayName || C.name || "";
        return re !== "" ? z + "(" + re + ")" : z;
      }
      function kr(h) {
        return h.displayName || "Context";
      }
      function $n(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Ne:
            return "Fragment";
          case ot:
            return "Portal";
          case Ge:
            return "Profiler";
          case S:
            return "StrictMode";
          case F:
            return "Suspense";
          case ae:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case J:
              var C = h;
              return kr(C) + ".Consumer";
            case ve:
              var z = h;
              return kr(z._context) + ".Provider";
            case ie:
              return Ga(h, h.render, "ForwardRef");
            case q:
              var H = h.displayName || null;
              return H !== null ? H : $n(h.type) || "Memo";
            case pe: {
              var re = h, Ce = re._payload, he = re._init;
              try {
                return $n(he(Ce));
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
      }, Rr, qa, Mn;
      Mn = {};
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
      function Ni(h, C) {
        var z = function() {
          Rr || (Rr = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fa(h, C) {
        var z = function() {
          qa || (qa = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function le(h) {
        if (typeof h.ref == "string" && tt.current && h.__self && tt.current.stateNode !== h.__self) {
          var C = $n(tt.current.type);
          Mn[C] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Mn[C] = !0);
        }
      }
      var je = function(h, C, z, H, re, Ce, he) {
        var Qe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Oe,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: z,
          props: he,
          // Record the component responsible for creating this element.
          _owner: Ce
        };
        return Qe._store = {}, Object.defineProperty(Qe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Qe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: H
        }), Object.defineProperty(Qe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: re
        }), Object.freeze && (Object.freeze(Qe.props), Object.freeze(Qe)), Qe;
      };
      function ut(h, C, z) {
        var H, re = {}, Ce = null, he = null, Qe = null, ft = null;
        if (C != null) {
          lr(C) && (he = C.ref, le(C)), Ir(C) && (ca(C.key), Ce = "" + C.key), Qe = C.__self === void 0 ? null : C.__self, ft = C.__source === void 0 ? null : C.__source;
          for (H in C)
            qn.call(C, H) && !Kn.hasOwnProperty(H) && (re[H] = C[H]);
        }
        var Ht = arguments.length - 2;
        if (Ht === 1)
          re.children = z;
        else if (Ht > 1) {
          for (var Gt = Array(Ht), qt = 0; qt < Ht; qt++)
            Gt[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(Gt), re.children = Gt;
        }
        if (h && h.defaultProps) {
          var it = h.defaultProps;
          for (H in it)
            re[H] === void 0 && (re[H] = it[H]);
        }
        if (Ce || he) {
          var en = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ce && Ni(re, en), he && fa(re, en);
        }
        return je(h, Ce, he, Qe, ft, tt.current, re);
      }
      function Ut(h, C) {
        var z = je(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function sn(h, C, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var H, re = ge({}, h.props), Ce = h.key, he = h.ref, Qe = h._self, ft = h._source, Ht = h._owner;
        if (C != null) {
          lr(C) && (he = C.ref, Ht = tt.current), Ir(C) && (ca(C.key), Ce = "" + C.key);
          var Gt;
          h.type && h.type.defaultProps && (Gt = h.type.defaultProps);
          for (H in C)
            qn.call(C, H) && !Kn.hasOwnProperty(H) && (C[H] === void 0 && Gt !== void 0 ? re[H] = Gt[H] : re[H] = C[H]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          re.children = z;
        else if (qt > 1) {
          for (var it = Array(qt), en = 0; en < qt; en++)
            it[en] = arguments[en + 2];
          re.children = it;
        }
        return je(h.type, Ce, he, Qe, ft, Ht, re);
      }
      function cn(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Oe;
      }
      var fn = ".", Xn = ":";
      function an(h) {
        var C = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, H = h.replace(C, function(re) {
          return z[re];
        });
        return "$" + H;
      }
      var Qt = !1, At = /\/+/g;
      function da(h) {
        return h.replace(At, "$&/");
      }
      function _a(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (ca(h.key), an("" + h.key)) : C.toString(36);
      }
      function Da(h, C, z, H, re) {
        var Ce = typeof h;
        (Ce === "undefined" || Ce === "boolean") && (h = null);
        var he = !1;
        if (h === null)
          he = !0;
        else
          switch (Ce) {
            case "string":
            case "number":
              he = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Oe:
                case ot:
                  he = !0;
              }
          }
        if (he) {
          var Qe = h, ft = re(Qe), Ht = H === "" ? fn + _a(Qe, 0) : H;
          if (Nn(ft)) {
            var Gt = "";
            Ht != null && (Gt = da(Ht) + "/"), Da(ft, C, Gt, "", function(Xf) {
              return Xf;
            });
          } else ft != null && (cn(ft) && (ft.key && (!Qe || Qe.key !== ft.key) && ca(ft.key), ft = Ut(
            ft,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ft.key && (!Qe || Qe.key !== ft.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              da("" + ft.key) + "/"
            ) : "") + Ht
          )), C.push(ft));
          return 1;
        }
        var qt, it, en = 0, bn = H === "" ? fn : H + Xn;
        if (Nn(h))
          for (var Zl = 0; Zl < h.length; Zl++)
            qt = h[Zl], it = bn + _a(qt, Zl), en += Da(qt, C, z, it, re);
        else {
          var qo = st(h);
          if (typeof qo == "function") {
            var Vi = h;
            qo === Vi.entries && (Qt || at("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qt = !0);
            for (var eu = qo.call(Vi), Ko, Kf = 0; !(Ko = eu.next()).done; )
              qt = Ko.value, it = bn + _a(qt, Kf++), en += Da(qt, C, z, it, re);
          } else if (Ce === "object") {
            var oc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (oc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : oc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return en;
      }
      function Li(h, C, z) {
        if (h == null)
          return h;
        var H = [], re = 0;
        return Da(h, H, "", "", function(Ce) {
          return C.call(z, Ce, re++);
        }), H;
      }
      function Il(h) {
        var C = 0;
        return Li(h, function() {
          C++;
        }), C;
      }
      function Ql(h, C, z) {
        Li(h, function() {
          C.apply(this, arguments);
        }, z);
      }
      function Mi(h) {
        return Li(h, function(C) {
          return C;
        }) || [];
      }
      function Wl(h) {
        if (!cn(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function si(h) {
        var C = {
          $$typeof: J,
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
          $$typeof: ve,
          _context: C
        };
        var z = !1, H = !1, re = !1;
        {
          var Ce = {
            $$typeof: J,
            _context: C
          };
          Object.defineProperties(Ce, {
            Provider: {
              get: function() {
                return H || (H = !0, k("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(he) {
                C.Provider = he;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(he) {
                C._currentValue = he;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(he) {
                C._currentValue2 = he;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(he) {
                C._threadCount = he;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, k("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(he) {
                re || (at("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", he), re = !0);
              }
            }
          }), C.Consumer = Ce;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var pa = -1, ur = 0, va = 1, Qr = 2;
      function ci(h) {
        if (h._status === pa) {
          var C = h._result, z = C();
          if (z.then(function(Ce) {
            if (h._status === ur || h._status === pa) {
              var he = h;
              he._status = va, he._result = Ce;
            }
          }, function(Ce) {
            if (h._status === ur || h._status === pa) {
              var he = h;
              he._status = Qr, he._result = Ce;
            }
          }), h._status === pa) {
            var H = h;
            H._status = ur, H._result = z;
          }
        }
        if (h._status === va) {
          var re = h._result;
          return re === void 0 && k(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, re), "default" in re || k(`lazy: Expected the result of a dynamic import() call. Instead received: %s

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
          $$typeof: pe,
          _payload: C,
          _init: ci
        };
        {
          var H, re;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return H;
              },
              set: function(Ce) {
                k("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), H = Ce, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return re;
              },
              set: function(Ce) {
                k("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), re = Ce, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function zi(h) {
        h != null && h.$$typeof === q ? k("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? k("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && k("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && k("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: ie,
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
            set: function(H) {
              z = H, !h.name && !h.displayName && (h.displayName = H);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function W(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Ne || h === Ge || Nt || h === S || h === F || h === ae || Ue || h === Ve || rn || Ft || pt || typeof h == "object" && h !== null && (h.$$typeof === pe || h.$$typeof === q || h.$$typeof === ve || h.$$typeof === J || h.$$typeof === ie || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function se(h, C) {
        W(h) || k("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: q,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var H;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(re) {
              H = re, !h.name && !h.displayName && (h.displayName = re);
            }
          });
        }
        return z;
      }
      function fe() {
        var h = Be.current;
        return h === null && k(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function vt(h) {
        var C = fe();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? k("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && k("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Xe(h) {
        var C = fe();
        return C.useState(h);
      }
      function yt(h, C, z) {
        var H = fe();
        return H.useReducer(h, C, z);
      }
      function ct(h) {
        var C = fe();
        return C.useRef(h);
      }
      function Tn(h, C) {
        var z = fe();
        return z.useEffect(h, C);
      }
      function ln(h, C) {
        var z = fe();
        return z.useInsertionEffect(h, C);
      }
      function dn(h, C) {
        var z = fe();
        return z.useLayoutEffect(h, C);
      }
      function Tr(h, C) {
        var z = fe();
        return z.useCallback(h, C);
      }
      function Ka(h, C) {
        var z = fe();
        return z.useMemo(h, C);
      }
      function jt(h, C, z) {
        var H = fe();
        return H.useImperativeHandle(h, C, z);
      }
      function hn(h, C) {
        {
          var z = fe();
          return z.useDebugValue(h, C);
        }
      }
      function nt() {
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
      function ac(h, C, z) {
        var H = fe();
        return H.useSyncExternalStore(h, C, z);
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
              log: ge({}, h, {
                value: ol
              }),
              info: ge({}, h, {
                value: Wr
              }),
              warn: ge({}, h, {
                value: $o
              }),
              error: ge({}, h, {
                value: Or
              }),
              group: ge({}, h, {
                value: Yo
              }),
              groupCollapsed: ge({}, h, {
                value: ic
              }),
              groupEnd: ge({}, h, {
                value: lc
              })
            });
          }
          Ai < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var pi = dt.ReactCurrentDispatcher, cl;
      function Fu(h, C, z) {
        {
          if (cl === void 0)
            try {
              throw Error();
            } catch (re) {
              var H = re.stack.trim().match(/\n( *(at )?)/);
              cl = H && H[1] || "";
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
          var z = Gl.get(h);
          if (z !== void 0)
            return z;
        }
        var H;
        Fi = !0;
        var re = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ce;
        Ce = pi.current, pi.current = null, sl();
        try {
          if (C) {
            var he = function() {
              throw Error();
            };
            if (Object.defineProperty(he.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(he, []);
              } catch (bn) {
                H = bn;
              }
              Reflect.construct(h, [], he);
            } else {
              try {
                he.call();
              } catch (bn) {
                H = bn;
              }
              h.call(he.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (bn) {
              H = bn;
            }
            h();
          }
        } catch (bn) {
          if (bn && H && typeof bn.stack == "string") {
            for (var Qe = bn.stack.split(`
`), ft = H.stack.split(`
`), Ht = Qe.length - 1, Gt = ft.length - 1; Ht >= 1 && Gt >= 0 && Qe[Ht] !== ft[Gt]; )
              Gt--;
            for (; Ht >= 1 && Gt >= 0; Ht--, Gt--)
              if (Qe[Ht] !== ft[Gt]) {
                if (Ht !== 1 || Gt !== 1)
                  do
                    if (Ht--, Gt--, Gt < 0 || Qe[Ht] !== ft[Gt]) {
                      var qt = `
` + Qe[Ht].replace(" at new ", " at ");
                      return h.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", h.displayName)), typeof h == "function" && Gl.set(h, qt), qt;
                    }
                  while (Ht >= 1 && Gt >= 0);
                break;
              }
          }
        } finally {
          Fi = !1, pi.current = Ce, Gr(), Error.prepareStackTrace = re;
        }
        var it = h ? h.displayName || h.name : "", en = it ? Fu(it) : "";
        return typeof h == "function" && Gl.set(h, en), en;
      }
      function Io(h, C, z) {
        return fl(h, !1);
      }
      function Qo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function xt(h, C, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return fl(h, Qo(h));
        if (typeof h == "string")
          return Fu(h);
        switch (h) {
          case F:
            return Fu("Suspense");
          case ae:
            return Fu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ie:
              return Io(h.render);
            case q:
              return xt(h.type, C, z);
            case pe: {
              var H = h, re = H._payload, Ce = H._init;
              try {
                return xt(Ce(re), C, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Wo = {}, Hu = dt.ReactDebugCurrentFrame;
      function _t(h) {
        if (h) {
          var C = h._owner, z = xt(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(z);
        } else
          Hu.setExtraStackFrame(null);
      }
      function uc(h, C, z, H, re) {
        {
          var Ce = Function.call.bind(qn);
          for (var he in h)
            if (Ce(h, he)) {
              var Qe = void 0;
              try {
                if (typeof h[he] != "function") {
                  var ft = Error((H || "React class") + ": " + z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ft.name = "Invariant Violation", ft;
                }
                Qe = h[he](C, he, H, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ht) {
                Qe = Ht;
              }
              Qe && !(Qe instanceof Error) && (_t(re), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", z, he, typeof Qe), _t(null)), Qe instanceof Error && !(Qe.message in Wo) && (Wo[Qe.message] = !0, _t(re), k("Failed %s type: %s", z, Qe.message), _t(null));
            }
        }
      }
      function vi(h) {
        if (h) {
          var C = h._owner, z = xt(h.type, h._source, C ? C.type : null);
          Ot(z);
        } else
          Ot(null);
      }
      var Ke;
      Ke = !1;
      function Kl() {
        if (tt.current) {
          var h = $n(tt.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Jn(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + C + ":" + z + ".";
        }
        return "";
      }
      function qr(h) {
        return h != null ? Jn(h.__source) : "";
      }
      var Nr = {};
      function hi(h) {
        var C = Kl();
        if (!C) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (C = `

Check the top-level render call using <` + z + ">.");
        }
        return C;
      }
      function En(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = hi(C);
          if (!Nr[z]) {
            Nr[z] = !0;
            var H = "";
            h && h._owner && h._owner !== tt.current && (H = " It was passed a child from " + $n(h._owner.type) + "."), vi(h), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, H), vi(null);
          }
        }
      }
      function Wt(h, C) {
        if (typeof h == "object") {
          if (Nn(h))
            for (var z = 0; z < h.length; z++) {
              var H = h[z];
              cn(H) && En(H, C);
            }
          else if (cn(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var re = st(h);
            if (typeof re == "function" && re !== h.entries)
              for (var Ce = re.call(h), he; !(he = Ce.next()).done; )
                cn(he.value) && En(he.value, C);
          }
        }
      }
      function Xa(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var z;
          if (typeof C == "function")
            z = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === ie || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === q))
            z = C.propTypes;
          else
            return;
          if (z) {
            var H = $n(C);
            uc(z, h.props, "prop", H, h);
          } else if (C.PropTypes !== void 0 && !Ke) {
            Ke = !0;
            var re = $n(C);
            k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function ka(h) {
        {
          for (var C = Object.keys(h.props), z = 0; z < C.length; z++) {
            var H = C[z];
            if (H !== "children" && H !== "key") {
              vi(h), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), vi(null);
              break;
            }
          }
          h.ref !== null && (vi(h), k("Invalid attribute `ref` supplied to `React.Fragment`."), vi(null));
        }
      }
      function br(h, C, z) {
        var H = W(h);
        if (!H) {
          var re = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (re += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ce = qr(C);
          Ce ? re += Ce : re += Kl();
          var he;
          h === null ? he = "null" : Nn(h) ? he = "array" : h !== void 0 && h.$$typeof === Oe ? (he = "<" + ($n(h.type) || "Unknown") + " />", re = " Did you accidentally export a JSX literal instead of a component?") : he = typeof h, k("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, re);
        }
        var Qe = ut.apply(this, arguments);
        if (Qe == null)
          return Qe;
        if (H)
          for (var ft = 2; ft < arguments.length; ft++)
            Wt(arguments[ft], h);
        return h === Ne ? ka(Qe) : Xa(Qe), Qe;
      }
      var Lr = !1;
      function qf(h) {
        var C = br.bind(null, h);
        return C.type = h, Lr || (Lr = !0, at("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return at("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Pu(h, C, z) {
        for (var H = sn.apply(this, arguments), re = 2; re < arguments.length; re++)
          Wt(arguments[re], H.type);
        return Xa(H), H;
      }
      function Xl(h, C) {
        var z = wt.transition;
        wt.transition = {};
        var H = wt.transition;
        wt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (wt.transition = z, z === null && H._updatedFibers) {
            var re = H._updatedFibers.size;
            re > 10 && at("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), H._updatedFibers.clear();
          }
        }
      }
      var Vu = !1, Bu = null;
      function Jl(h) {
        if (Bu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), z = Y && Y[C];
            Bu = z.call(Y, "timers").setImmediate;
          } catch {
            Bu = function(re) {
              Vu === !1 && (Vu = !0, typeof MessageChannel > "u" && k("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ce = new MessageChannel();
              Ce.port1.onmessage = re, Ce.port2.postMessage(void 0);
            };
          }
        return Bu(h);
      }
      var Oa = 0, Na = !1;
      function dl(h) {
        {
          var C = Oa;
          Oa++, we.current === null && (we.current = []);
          var z = we.isBatchingLegacy, H;
          try {
            if (we.isBatchingLegacy = !0, H = h(), !z && we.didScheduleLegacyUpdate) {
              var re = we.current;
              re !== null && (we.didScheduleLegacyUpdate = !1, Pi(re));
            }
          } catch (it) {
            throw Hi(C), it;
          } finally {
            we.isBatchingLegacy = z;
          }
          if (H !== null && typeof H == "object" && typeof H.then == "function") {
            var Ce = H, he = !1, Qe = {
              then: function(it, en) {
                he = !0, Ce.then(function(bn) {
                  Hi(C), Oa === 0 ? $u(bn, it, en) : it(bn);
                }, function(bn) {
                  Hi(C), en(bn);
                });
              }
            };
            return !Na && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              he || (Na = !0, k("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Qe;
          } else {
            var ft = H;
            if (Hi(C), Oa === 0) {
              var Ht = we.current;
              Ht !== null && (Pi(Ht), we.current = null);
              var Gt = {
                then: function(it, en) {
                  we.current === null ? (we.current = [], $u(ft, it, en)) : it(ft);
                }
              };
              return Gt;
            } else {
              var qt = {
                then: function(it, en) {
                  it(ft);
                }
              };
              return qt;
            }
          }
        }
      }
      function Hi(h) {
        h !== Oa - 1 && k("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Oa = h;
      }
      function $u(h, C, z) {
        {
          var H = we.current;
          if (H !== null)
            try {
              Pi(H), Jl(function() {
                H.length === 0 ? (we.current = null, C(h)) : $u(h, C, z);
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
          } catch (H) {
            throw h = h.slice(C + 1), H;
          } finally {
            pl = !1;
          }
        }
      }
      var Yu = br, Go = Pu, La = qf, Iu = {
        map: Li,
        forEach: Ql,
        count: Il,
        toArray: Mi,
        only: Wl
      };
      G.Children = Iu, G.Component = He, G.Fragment = Ne, G.Profiler = Ge, G.PureComponent = Bt, G.StrictMode = S, G.Suspense = F, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dt, G.act = dl, G.cloneElement = Go, G.createContext = si, G.createElement = Yu, G.createFactory = La, G.createRef = Gn, G.forwardRef = zi, G.isValidElement = cn, G.lazy = fi, G.memo = se, G.startTransition = Xl, G.unstable_act = dl, G.useCallback = Tr, G.useContext = vt, G.useDebugValue = hn, G.useDeferredValue = di, G.useEffect = Tn, G.useId = Ui, G.useImperativeHandle = jt, G.useInsertionEffect = ln, G.useLayoutEffect = dn, G.useMemo = Ka, G.useReducer = yt, G.useRef = ct, G.useState = Xe, G.useSyncExternalStore = ac, G.useTransition = nt, G.version = Ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var nD = {};
nD.NODE_ENV === "production" ? fE.exports = eD() : fE.exports = tD();
var un = fE.exports;
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
  var Y = un, G = Symbol.for("react.element"), M = Symbol.for("react.fragment"), Ie = Object.prototype.hasOwnProperty, Oe = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ot = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(S, Ge, ve) {
    var J, ie = {}, F = null, ae = null;
    ve !== void 0 && (F = "" + ve), Ge.key !== void 0 && (F = "" + Ge.key), Ge.ref !== void 0 && (ae = Ge.ref);
    for (J in Ge) Ie.call(Ge, J) && !ot.hasOwnProperty(J) && (ie[J] = Ge[J]);
    if (S && S.defaultProps) for (J in Ge = S.defaultProps, Ge) ie[J] === void 0 && (ie[J] = Ge[J]);
    return { $$typeof: G, type: S, key: F, ref: ae, props: ie, _owner: Oe.current };
  }
  return Kp.Fragment = M, Kp.jsx = Ne, Kp.jsxs = Ne, Kp;
}
var Xp = {}, J0;
function aD() {
  if (J0) return Xp;
  J0 = 1;
  var Y = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return Y.NODE_ENV !== "production" && function() {
    var G = un, M = Symbol.for("react.element"), Ie = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), ot = Symbol.for("react.strict_mode"), Ne = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ge = Symbol.for("react.context"), ve = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), pe = Symbol.iterator, Ve = "@@iterator";
    function on(R) {
      if (R === null || typeof R != "object")
        return null;
      var W = pe && R[pe] || R[Ve];
      return typeof W == "function" ? W : null;
    }
    var It = G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function st(R) {
      {
        for (var W = arguments.length, se = new Array(W > 1 ? W - 1 : 0), fe = 1; fe < W; fe++)
          se[fe - 1] = arguments[fe];
        Be("error", R, se);
      }
    }
    function Be(R, W, se) {
      {
        var fe = It.ReactDebugCurrentFrame, vt = fe.getStackAddendum();
        vt !== "" && (W += "%s", se = se.concat([vt]));
        var Xe = se.map(function(yt) {
          return String(yt);
        });
        Xe.unshift("Warning: " + W), Function.prototype.apply.call(console[R], console, Xe);
      }
    }
    var wt = !1, we = !1, tt = !1, $e = !1, gn = !1, Ot;
    Ot = Symbol.for("react.module.reference");
    function rn(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Oe || R === Ne || gn || R === ot || R === J || R === ie || $e || R === q || wt || we || tt || typeof R == "object" && R !== null && (R.$$typeof === ae || R.$$typeof === F || R.$$typeof === S || R.$$typeof === Ge || R.$$typeof === ve || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Ot || R.getModuleId !== void 0));
    }
    function Ft(R, W, se) {
      var fe = R.displayName;
      if (fe)
        return fe;
      var vt = W.displayName || W.name || "";
      return vt !== "" ? se + "(" + vt + ")" : se;
    }
    function pt(R) {
      return R.displayName || "Context";
    }
    function Ue(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && st("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Oe:
          return "Fragment";
        case Ie:
          return "Portal";
        case Ne:
          return "Profiler";
        case ot:
          return "StrictMode";
        case J:
          return "Suspense";
        case ie:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Ge:
            var W = R;
            return pt(W) + ".Consumer";
          case S:
            var se = R;
            return pt(se._context) + ".Provider";
          case ve:
            return Ft(R, R.render, "ForwardRef");
          case F:
            var fe = R.displayName || null;
            return fe !== null ? fe : Ue(R.type) || "Memo";
          case ae: {
            var vt = R, Xe = vt._payload, yt = vt._init;
            try {
              return Ue(yt(Xe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Nt = Object.assign, dt = 0, at, k, Q, te, w, P, ge;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function He() {
      {
        if (dt === 0) {
          at = console.log, k = console.info, Q = console.warn, te = console.error, w = console.group, P = console.groupCollapsed, ge = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
        dt++;
      }
    }
    function Ae() {
      {
        if (dt--, dt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Nt({}, R, {
              value: at
            }),
            info: Nt({}, R, {
              value: k
            }),
            warn: Nt({}, R, {
              value: Q
            }),
            error: Nt({}, R, {
              value: te
            }),
            group: Nt({}, R, {
              value: w
            }),
            groupCollapsed: Nt({}, R, {
              value: P
            }),
            groupEnd: Nt({}, R, {
              value: ge
            })
          });
        }
        dt < 0 && st("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Et = It.ReactCurrentDispatcher, Ze;
    function Rt(R, W, se) {
      {
        if (Ze === void 0)
          try {
            throw Error();
          } catch (vt) {
            var fe = vt.stack.trim().match(/\n( *(at )?)/);
            Ze = fe && fe[1] || "";
          }
        return `
` + Ze + R;
      }
    }
    var Bt = !1, On;
    {
      var Gn = typeof WeakMap == "function" ? WeakMap : Map;
      On = new Gn();
    }
    function ir(R, W) {
      if (!R || Bt)
        return "";
      {
        var se = On.get(R);
        if (se !== void 0)
          return se;
      }
      var fe;
      Bt = !0;
      var vt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Xe;
      Xe = Et.current, Et.current = null, He();
      try {
        if (W) {
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
            } catch (hn) {
              fe = hn;
            }
            Reflect.construct(R, [], yt);
          } else {
            try {
              yt.call();
            } catch (hn) {
              fe = hn;
            }
            R.call(yt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (hn) {
            fe = hn;
          }
          R();
        }
      } catch (hn) {
        if (hn && fe && typeof hn.stack == "string") {
          for (var ct = hn.stack.split(`
`), Tn = fe.stack.split(`
`), ln = ct.length - 1, dn = Tn.length - 1; ln >= 1 && dn >= 0 && ct[ln] !== Tn[dn]; )
            dn--;
          for (; ln >= 1 && dn >= 0; ln--, dn--)
            if (ct[ln] !== Tn[dn]) {
              if (ln !== 1 || dn !== 1)
                do
                  if (ln--, dn--, dn < 0 || ct[ln] !== Tn[dn]) {
                    var Tr = `
` + ct[ln].replace(" at new ", " at ");
                    return R.displayName && Tr.includes("<anonymous>") && (Tr = Tr.replace("<anonymous>", R.displayName)), typeof R == "function" && On.set(R, Tr), Tr;
                  }
                while (ln >= 1 && dn >= 0);
              break;
            }
        }
      } finally {
        Bt = !1, Et.current = Xe, Ae(), Error.prepareStackTrace = vt;
      }
      var Ka = R ? R.displayName || R.name : "", jt = Ka ? Rt(Ka) : "";
      return typeof R == "function" && On.set(R, jt), jt;
    }
    function Nn(R, W, se) {
      return ir(R, !1);
    }
    function Cr(R) {
      var W = R.prototype;
      return !!(W && W.isReactComponent);
    }
    function Bn(R, W, se) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ir(R, Cr(R));
      if (typeof R == "string")
        return Rt(R);
      switch (R) {
        case J:
          return Rt("Suspense");
        case ie:
          return Rt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ve:
            return Nn(R.render);
          case F:
            return Bn(R.type, W, se);
          case ae: {
            var fe = R, vt = fe._payload, Xe = fe._init;
            try {
              return Bn(Xe(vt), W, se);
            } catch {
            }
          }
        }
      return "";
    }
    var Ln = Object.prototype.hasOwnProperty, ca = {}, Ga = It.ReactDebugCurrentFrame;
    function kr(R) {
      if (R) {
        var W = R._owner, se = Bn(R.type, R._source, W ? W.type : null);
        Ga.setExtraStackFrame(se);
      } else
        Ga.setExtraStackFrame(null);
    }
    function $n(R, W, se, fe, vt) {
      {
        var Xe = Function.call.bind(Ln);
        for (var yt in R)
          if (Xe(R, yt)) {
            var ct = void 0;
            try {
              if (typeof R[yt] != "function") {
                var Tn = Error((fe || "React class") + ": " + se + " type `" + yt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[yt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Tn.name = "Invariant Violation", Tn;
              }
              ct = R[yt](W, yt, fe, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ln) {
              ct = ln;
            }
            ct && !(ct instanceof Error) && (kr(vt), st("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", se, yt, typeof ct), kr(null)), ct instanceof Error && !(ct.message in ca) && (ca[ct.message] = !0, kr(vt), st("Failed %s type: %s", se, ct.message), kr(null));
          }
      }
    }
    var qn = Array.isArray;
    function Kn(R) {
      return qn(R);
    }
    function Rr(R) {
      {
        var W = typeof Symbol == "function" && Symbol.toStringTag, se = W && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return se;
      }
    }
    function qa(R) {
      try {
        return Mn(R), !1;
      } catch {
        return !0;
      }
    }
    function Mn(R) {
      return "" + R;
    }
    function lr(R) {
      if (qa(R))
        return st("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(R)), Mn(R);
    }
    var Ir = It.ReactCurrentOwner, Ni = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fa, le;
    function je(R) {
      if (Ln.call(R, "ref")) {
        var W = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ut(R) {
      if (Ln.call(R, "key")) {
        var W = Object.getOwnPropertyDescriptor(R, "key").get;
        if (W && W.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ut(R, W) {
      typeof R.ref == "string" && Ir.current;
    }
    function sn(R, W) {
      {
        var se = function() {
          fa || (fa = !0, st("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        se.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function cn(R, W) {
      {
        var se = function() {
          le || (le = !0, st("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", W));
        };
        se.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var fn = function(R, W, se, fe, vt, Xe, yt) {
      var ct = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: M,
        // Built-in properties that belong on the element
        type: R,
        key: W,
        ref: se,
        props: yt,
        // Record the component responsible for creating this element.
        _owner: Xe
      };
      return ct._store = {}, Object.defineProperty(ct._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ct, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: fe
      }), Object.defineProperty(ct, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: vt
      }), Object.freeze && (Object.freeze(ct.props), Object.freeze(ct)), ct;
    };
    function Xn(R, W, se, fe, vt) {
      {
        var Xe, yt = {}, ct = null, Tn = null;
        se !== void 0 && (lr(se), ct = "" + se), ut(W) && (lr(W.key), ct = "" + W.key), je(W) && (Tn = W.ref, Ut(W, vt));
        for (Xe in W)
          Ln.call(W, Xe) && !Ni.hasOwnProperty(Xe) && (yt[Xe] = W[Xe]);
        if (R && R.defaultProps) {
          var ln = R.defaultProps;
          for (Xe in ln)
            yt[Xe] === void 0 && (yt[Xe] = ln[Xe]);
        }
        if (ct || Tn) {
          var dn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          ct && sn(yt, dn), Tn && cn(yt, dn);
        }
        return fn(R, ct, Tn, vt, fe, Ir.current, yt);
      }
    }
    var an = It.ReactCurrentOwner, Qt = It.ReactDebugCurrentFrame;
    function At(R) {
      if (R) {
        var W = R._owner, se = Bn(R.type, R._source, W ? W.type : null);
        Qt.setExtraStackFrame(se);
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
        if (an.current) {
          var R = Ue(an.current.type);
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
    var Il = {};
    function Ql(R) {
      {
        var W = Da();
        if (!W) {
          var se = typeof R == "string" ? R : R.displayName || R.name;
          se && (W = `

Check the top-level render call using <` + se + ">.");
        }
        return W;
      }
    }
    function Mi(R, W) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var se = Ql(W);
        if (Il[se])
          return;
        Il[se] = !0;
        var fe = "";
        R && R._owner && R._owner !== an.current && (fe = " It was passed a child from " + Ue(R._owner.type) + "."), At(R), st('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, fe), At(null);
      }
    }
    function Wl(R, W) {
      {
        if (typeof R != "object")
          return;
        if (Kn(R))
          for (var se = 0; se < R.length; se++) {
            var fe = R[se];
            _a(fe) && Mi(fe, W);
          }
        else if (_a(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var vt = on(R);
          if (typeof vt == "function" && vt !== R.entries)
            for (var Xe = vt.call(R), yt; !(yt = Xe.next()).done; )
              _a(yt.value) && Mi(yt.value, W);
        }
      }
    }
    function si(R) {
      {
        var W = R.type;
        if (W == null || typeof W == "string")
          return;
        var se;
        if (typeof W == "function")
          se = W.propTypes;
        else if (typeof W == "object" && (W.$$typeof === ve || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        W.$$typeof === F))
          se = W.propTypes;
        else
          return;
        if (se) {
          var fe = Ue(W);
          $n(se, R.props, "prop", fe, R);
        } else if (W.PropTypes !== void 0 && !da) {
          da = !0;
          var vt = Ue(W);
          st("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", vt || "Unknown");
        }
        typeof W.getDefaultProps == "function" && !W.getDefaultProps.isReactClassApproved && st("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pa(R) {
      {
        for (var W = Object.keys(R.props), se = 0; se < W.length; se++) {
          var fe = W[se];
          if (fe !== "children" && fe !== "key") {
            At(R), st("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), At(null);
            break;
          }
        }
        R.ref !== null && (At(R), st("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    var ur = {};
    function va(R, W, se, fe, vt, Xe) {
      {
        var yt = rn(R);
        if (!yt) {
          var ct = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (ct += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Tn = Li();
          Tn ? ct += Tn : ct += Da();
          var ln;
          R === null ? ln = "null" : Kn(R) ? ln = "array" : R !== void 0 && R.$$typeof === M ? (ln = "<" + (Ue(R.type) || "Unknown") + " />", ct = " Did you accidentally export a JSX literal instead of a component?") : ln = typeof R, st("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ln, ct);
        }
        var dn = Xn(R, W, se, vt, Xe);
        if (dn == null)
          return dn;
        if (yt) {
          var Tr = W.children;
          if (Tr !== void 0)
            if (fe)
              if (Kn(Tr)) {
                for (var Ka = 0; Ka < Tr.length; Ka++)
                  Wl(Tr[Ka], R);
                Object.freeze && Object.freeze(Tr);
              } else
                st("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Wl(Tr, R);
        }
        if (Ln.call(W, "key")) {
          var jt = Ue(R), hn = Object.keys(W).filter(function(Ui) {
            return Ui !== "key";
          }), nt = hn.length > 0 ? "{key: someKey, " + hn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[jt + nt]) {
            var di = hn.length > 0 ? "{" + hn.join(": ..., ") + ": ...}" : "{}";
            st(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, jt, di, jt), ur[jt + nt] = !0;
          }
        }
        return R === Oe ? pa(dn) : si(dn), dn;
      }
    }
    function Qr(R, W, se) {
      return va(R, W, se, !0);
    }
    function ci(R, W, se) {
      return va(R, W, se, !1);
    }
    var fi = ci, zi = Qr;
    Xp.Fragment = Oe, Xp.jsx = fi, Xp.jsxs = zi;
  }(), Xp;
}
var iD = {};
iD.NODE_ENV === "production" ? cE.exports = rD() : cE.exports = aD();
var Fe = cE.exports, dE = { exports: {} }, Qa = {}, Bm = { exports: {} }, oE = {};
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
  return Z0 || (Z0 = 1, function(Y) {
    function G(k, Q) {
      var te = k.length;
      k.push(Q);
      e: for (; 0 < te; ) {
        var w = te - 1 >>> 1, P = k[w];
        if (0 < Oe(P, Q)) k[w] = Q, k[te] = P, te = w;
        else break e;
      }
    }
    function M(k) {
      return k.length === 0 ? null : k[0];
    }
    function Ie(k) {
      if (k.length === 0) return null;
      var Q = k[0], te = k.pop();
      if (te !== Q) {
        k[0] = te;
        e: for (var w = 0, P = k.length, ge = P >>> 1; w < ge; ) {
          var _e = 2 * (w + 1) - 1, He = k[_e], Ae = _e + 1, Et = k[Ae];
          if (0 > Oe(He, te)) Ae < P && 0 > Oe(Et, He) ? (k[w] = Et, k[Ae] = te, w = Ae) : (k[w] = He, k[_e] = te, w = _e);
          else if (Ae < P && 0 > Oe(Et, te)) k[w] = Et, k[Ae] = te, w = Ae;
          else break e;
        }
      }
      return Q;
    }
    function Oe(k, Q) {
      var te = k.sortIndex - Q.sortIndex;
      return te !== 0 ? te : k.id - Q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ot = performance;
      Y.unstable_now = function() {
        return ot.now();
      };
    } else {
      var Ne = Date, S = Ne.now();
      Y.unstable_now = function() {
        return Ne.now() - S;
      };
    }
    var Ge = [], ve = [], J = 1, ie = null, F = 3, ae = !1, q = !1, pe = !1, Ve = typeof setTimeout == "function" ? setTimeout : null, on = typeof clearTimeout == "function" ? clearTimeout : null, It = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function st(k) {
      for (var Q = M(ve); Q !== null; ) {
        if (Q.callback === null) Ie(ve);
        else if (Q.startTime <= k) Ie(ve), Q.sortIndex = Q.expirationTime, G(Ge, Q);
        else break;
        Q = M(ve);
      }
    }
    function Be(k) {
      if (pe = !1, st(k), !q) if (M(Ge) !== null) q = !0, dt(wt);
      else {
        var Q = M(ve);
        Q !== null && at(Be, Q.startTime - k);
      }
    }
    function wt(k, Q) {
      q = !1, pe && (pe = !1, on($e), $e = -1), ae = !0;
      var te = F;
      try {
        for (st(Q), ie = M(Ge); ie !== null && (!(ie.expirationTime > Q) || k && !rn()); ) {
          var w = ie.callback;
          if (typeof w == "function") {
            ie.callback = null, F = ie.priorityLevel;
            var P = w(ie.expirationTime <= Q);
            Q = Y.unstable_now(), typeof P == "function" ? ie.callback = P : ie === M(Ge) && Ie(Ge), st(Q);
          } else Ie(Ge);
          ie = M(Ge);
        }
        if (ie !== null) var ge = !0;
        else {
          var _e = M(ve);
          _e !== null && at(Be, _e.startTime - Q), ge = !1;
        }
        return ge;
      } finally {
        ie = null, F = te, ae = !1;
      }
    }
    var we = !1, tt = null, $e = -1, gn = 5, Ot = -1;
    function rn() {
      return !(Y.unstable_now() - Ot < gn);
    }
    function Ft() {
      if (tt !== null) {
        var k = Y.unstable_now();
        Ot = k;
        var Q = !0;
        try {
          Q = tt(!0, k);
        } finally {
          Q ? pt() : (we = !1, tt = null);
        }
      } else we = !1;
    }
    var pt;
    if (typeof It == "function") pt = function() {
      It(Ft);
    };
    else if (typeof MessageChannel < "u") {
      var Ue = new MessageChannel(), Nt = Ue.port2;
      Ue.port1.onmessage = Ft, pt = function() {
        Nt.postMessage(null);
      };
    } else pt = function() {
      Ve(Ft, 0);
    };
    function dt(k) {
      tt = k, we || (we = !0, pt());
    }
    function at(k, Q) {
      $e = Ve(function() {
        k(Y.unstable_now());
      }, Q);
    }
    Y.unstable_IdlePriority = 5, Y.unstable_ImmediatePriority = 1, Y.unstable_LowPriority = 4, Y.unstable_NormalPriority = 3, Y.unstable_Profiling = null, Y.unstable_UserBlockingPriority = 2, Y.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, Y.unstable_continueExecution = function() {
      q || ae || (q = !0, dt(wt));
    }, Y.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : gn = 0 < k ? Math.floor(1e3 / k) : 5;
    }, Y.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, Y.unstable_getFirstCallbackNode = function() {
      return M(Ge);
    }, Y.unstable_next = function(k) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = F;
      }
      var te = F;
      F = Q;
      try {
        return k();
      } finally {
        F = te;
      }
    }, Y.unstable_pauseExecution = function() {
    }, Y.unstable_requestPaint = function() {
    }, Y.unstable_runWithPriority = function(k, Q) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var te = F;
      F = k;
      try {
        return Q();
      } finally {
        F = te;
      }
    }, Y.unstable_scheduleCallback = function(k, Q, te) {
      var w = Y.unstable_now();
      switch (typeof te == "object" && te !== null ? (te = te.delay, te = typeof te == "number" && 0 < te ? w + te : w) : te = w, k) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = te + P, k = { id: J++, callback: Q, priorityLevel: k, startTime: te, expirationTime: P, sortIndex: -1 }, te > w ? (k.sortIndex = te, G(ve, k), M(Ge) === null && k === M(ve) && (pe ? (on($e), $e = -1) : pe = !0, at(Be, te - w))) : (k.sortIndex = P, G(Ge, k), q || ae || (q = !0, dt(wt))), k;
    }, Y.unstable_shouldYield = rn, Y.unstable_wrapCallback = function(k) {
      var Q = F;
      return function() {
        var te = F;
        F = Q;
        try {
          return k.apply(this, arguments);
        } finally {
          F = te;
        }
      };
    };
  }(oE)), oE;
}
var sE = {}, eT;
function uD() {
  return eT || (eT = 1, function(Y) {
    var G = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    G.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = !1, Ie = 5;
      function Oe(le, je) {
        var ut = le.length;
        le.push(je), S(le, je, ut);
      }
      function ot(le) {
        return le.length === 0 ? null : le[0];
      }
      function Ne(le) {
        if (le.length === 0)
          return null;
        var je = le[0], ut = le.pop();
        return ut !== je && (le[0] = ut, Ge(le, ut, 0)), je;
      }
      function S(le, je, ut) {
        for (var Ut = ut; Ut > 0; ) {
          var sn = Ut - 1 >>> 1, cn = le[sn];
          if (ve(cn, je) > 0)
            le[sn] = je, le[Ut] = cn, Ut = sn;
          else
            return;
        }
      }
      function Ge(le, je, ut) {
        for (var Ut = ut, sn = le.length, cn = sn >>> 1; Ut < cn; ) {
          var fn = (Ut + 1) * 2 - 1, Xn = le[fn], an = fn + 1, Qt = le[an];
          if (ve(Xn, je) < 0)
            an < sn && ve(Qt, Xn) < 0 ? (le[Ut] = Qt, le[an] = je, Ut = an) : (le[Ut] = Xn, le[fn] = je, Ut = fn);
          else if (an < sn && ve(Qt, je) < 0)
            le[Ut] = Qt, le[an] = je, Ut = an;
          else
            return;
        }
      }
      function ve(le, je) {
        var ut = le.sortIndex - je.sortIndex;
        return ut !== 0 ? ut : le.id - je.id;
      }
      var J = 1, ie = 2, F = 3, ae = 4, q = 5;
      function pe(le, je) {
      }
      var Ve = typeof performance == "object" && typeof performance.now == "function";
      if (Ve) {
        var on = performance;
        Y.unstable_now = function() {
          return on.now();
        };
      } else {
        var It = Date, st = It.now();
        Y.unstable_now = function() {
          return It.now() - st;
        };
      }
      var Be = 1073741823, wt = -1, we = 250, tt = 5e3, $e = 1e4, gn = Be, Ot = [], rn = [], Ft = 1, pt = null, Ue = F, Nt = !1, dt = !1, at = !1, k = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function w(le) {
        for (var je = ot(rn); je !== null; ) {
          if (je.callback === null)
            Ne(rn);
          else if (je.startTime <= le)
            Ne(rn), je.sortIndex = je.expirationTime, Oe(Ot, je);
          else
            return;
          je = ot(rn);
        }
      }
      function P(le) {
        if (at = !1, w(le), !dt)
          if (ot(Ot) !== null)
            dt = !0, Mn(ge);
          else {
            var je = ot(rn);
            je !== null && lr(P, je.startTime - le);
          }
      }
      function ge(le, je) {
        dt = !1, at && (at = !1, Ir()), Nt = !0;
        var ut = Ue;
        try {
          var Ut;
          if (!M) return _e(le, je);
        } finally {
          pt = null, Ue = ut, Nt = !1;
        }
      }
      function _e(le, je) {
        var ut = je;
        for (w(ut), pt = ot(Ot); pt !== null && !(pt.expirationTime > ut && (!le || Ga())); ) {
          var Ut = pt.callback;
          if (typeof Ut == "function") {
            pt.callback = null, Ue = pt.priorityLevel;
            var sn = pt.expirationTime <= ut, cn = Ut(sn);
            ut = Y.unstable_now(), typeof cn == "function" ? pt.callback = cn : pt === ot(Ot) && Ne(Ot), w(ut);
          } else
            Ne(Ot);
          pt = ot(Ot);
        }
        if (pt !== null)
          return !0;
        var fn = ot(rn);
        return fn !== null && lr(P, fn.startTime - ut), !1;
      }
      function He(le, je) {
        switch (le) {
          case J:
          case ie:
          case F:
          case ae:
          case q:
            break;
          default:
            le = F;
        }
        var ut = Ue;
        Ue = le;
        try {
          return je();
        } finally {
          Ue = ut;
        }
      }
      function Ae(le) {
        var je;
        switch (Ue) {
          case J:
          case ie:
          case F:
            je = F;
            break;
          default:
            je = Ue;
            break;
        }
        var ut = Ue;
        Ue = je;
        try {
          return le();
        } finally {
          Ue = ut;
        }
      }
      function Et(le) {
        var je = Ue;
        return function() {
          var ut = Ue;
          Ue = je;
          try {
            return le.apply(this, arguments);
          } finally {
            Ue = ut;
          }
        };
      }
      function Ze(le, je, ut) {
        var Ut = Y.unstable_now(), sn;
        if (typeof ut == "object" && ut !== null) {
          var cn = ut.delay;
          typeof cn == "number" && cn > 0 ? sn = Ut + cn : sn = Ut;
        } else
          sn = Ut;
        var fn;
        switch (le) {
          case J:
            fn = wt;
            break;
          case ie:
            fn = we;
            break;
          case q:
            fn = gn;
            break;
          case ae:
            fn = $e;
            break;
          case F:
          default:
            fn = tt;
            break;
        }
        var Xn = sn + fn, an = {
          id: Ft++,
          callback: je,
          priorityLevel: le,
          startTime: sn,
          expirationTime: Xn,
          sortIndex: -1
        };
        return sn > Ut ? (an.sortIndex = sn, Oe(rn, an), ot(Ot) === null && an === ot(rn) && (at ? Ir() : at = !0, lr(P, sn - Ut))) : (an.sortIndex = Xn, Oe(Ot, an), !dt && !Nt && (dt = !0, Mn(ge))), an;
      }
      function Rt() {
      }
      function Bt() {
        !dt && !Nt && (dt = !0, Mn(ge));
      }
      function On() {
        return ot(Ot);
      }
      function Gn(le) {
        le.callback = null;
      }
      function ir() {
        return Ue;
      }
      var Nn = !1, Cr = null, Bn = -1, Ln = Ie, ca = -1;
      function Ga() {
        var le = Y.unstable_now() - ca;
        return !(le < Ln);
      }
      function kr() {
      }
      function $n(le) {
        if (le < 0 || le > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        le > 0 ? Ln = Math.floor(1e3 / le) : Ln = Ie;
      }
      var qn = function() {
        if (Cr !== null) {
          var le = Y.unstable_now();
          ca = le;
          var je = !0, ut = !0;
          try {
            ut = Cr(je, le);
          } finally {
            ut ? Kn() : (Nn = !1, Cr = null);
          }
        } else
          Nn = !1;
      }, Kn;
      if (typeof te == "function")
        Kn = function() {
          te(qn);
        };
      else if (typeof MessageChannel < "u") {
        var Rr = new MessageChannel(), qa = Rr.port2;
        Rr.port1.onmessage = qn, Kn = function() {
          qa.postMessage(null);
        };
      } else
        Kn = function() {
          k(qn, 0);
        };
      function Mn(le) {
        Cr = le, Nn || (Nn = !0, Kn());
      }
      function lr(le, je) {
        Bn = k(function() {
          le(Y.unstable_now());
        }, je);
      }
      function Ir() {
        Q(Bn), Bn = -1;
      }
      var Ni = kr, fa = null;
      Y.unstable_IdlePriority = q, Y.unstable_ImmediatePriority = J, Y.unstable_LowPriority = ae, Y.unstable_NormalPriority = F, Y.unstable_Profiling = fa, Y.unstable_UserBlockingPriority = ie, Y.unstable_cancelCallback = Gn, Y.unstable_continueExecution = Bt, Y.unstable_forceFrameRate = $n, Y.unstable_getCurrentPriorityLevel = ir, Y.unstable_getFirstCallbackNode = On, Y.unstable_next = Ae, Y.unstable_pauseExecution = Rt, Y.unstable_requestPaint = Ni, Y.unstable_runWithPriority = He, Y.unstable_scheduleCallback = Ze, Y.unstable_shouldYield = Ga, Y.unstable_wrapCallback = Et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sE)), sE;
}
var tT;
function oT() {
  if (tT) return Bm.exports;
  tT = 1;
  var Y = {};
  return Y.NODE_ENV === "production" ? Bm.exports = lD() : Bm.exports = uD(), Bm.exports;
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
  var Y = un, G = oT();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ie = /* @__PURE__ */ new Set(), Oe = {};
  function ot(n, r) {
    Ne(n, r), Ne(n + "Capture", r);
  }
  function Ne(n, r) {
    for (Oe[n] = r, n = 0; n < r.length; n++) Ie.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ge = Object.prototype.hasOwnProperty, ve = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, J = {}, ie = {};
  function F(n) {
    return Ge.call(ie, n) ? !0 : Ge.call(J, n) ? !1 : ve.test(n) ? ie[n] = !0 : (J[n] = !0, !1);
  }
  function ae(n, r, l, o) {
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
  function q(n, r, l, o) {
    if (r === null || typeof r > "u" || ae(n, r, l, o)) return !0;
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
  function pe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Ve = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ve[n] = new pe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ve[r] = new pe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ve[n] = new pe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ve[n] = new pe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ve[n] = new pe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ve[n] = new pe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ve[n] = new pe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ve[n] = new pe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ve[n] = new pe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var on = /[\-:]([a-z])/g;
  function It(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      on,
      It
    );
    Ve[r] = new pe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(on, It);
    Ve[r] = new pe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(on, It);
    Ve[r] = new pe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ve[n] = new pe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ve.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ve[n] = new pe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function st(n, r, l, o) {
    var c = Ve.hasOwnProperty(r) ? Ve[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (q(r, l, c, o) && (l = null), o || c === null ? F(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Be = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, wt = Symbol.for("react.element"), we = Symbol.for("react.portal"), tt = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), gn = Symbol.for("react.profiler"), Ot = Symbol.for("react.provider"), rn = Symbol.for("react.context"), Ft = Symbol.for("react.forward_ref"), pt = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), Nt = Symbol.for("react.memo"), dt = Symbol.for("react.lazy"), at = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function Q(n) {
    return n === null || typeof n != "object" ? null : (n = k && n[k] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var te = Object.assign, w;
  function P(n) {
    if (w === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      w = r && r[1] || "";
    }
    return `
` + w + n;
  }
  var ge = !1;
  function _e(n, r) {
    if (!n || ge) return "";
    ge = !0;
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
      ge = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? P(n) : "";
  }
  function He(n) {
    switch (n.tag) {
      case 5:
        return P(n.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = _e(n.type, !1), n;
      case 11:
        return n = _e(n.type.render, !1), n;
      case 1:
        return n = _e(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ae(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case tt:
        return "Fragment";
      case we:
        return "Portal";
      case gn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case pt:
        return "Suspense";
      case Ue:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case rn:
        return (n.displayName || "Context") + ".Consumer";
      case Ot:
        return (n._context.displayName || "Context") + ".Provider";
      case Ft:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Nt:
        return r = n.displayName || null, r !== null ? r : Ae(n.type) || "Memo";
      case dt:
        r = n._payload, n = n._init;
        try {
          return Ae(n(r));
        } catch {
        }
    }
    return null;
  }
  function Et(n) {
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
        return Ae(r);
      case 8:
        return r === $e ? "StrictMode" : "Mode";
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
  function Ze(n) {
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
  function Rt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Bt(n) {
    var r = Rt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
  function On(n) {
    n._valueTracker || (n._valueTracker = Bt(n));
  }
  function Gn(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Rt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function ir(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Nn(n, r) {
    var l = r.checked;
    return te({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Ze(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Bn(n, r) {
    r = r.checked, r != null && st(n, "checked", r, !1);
  }
  function Ln(n, r) {
    Bn(n, r);
    var l = Ze(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Ga(n, r.type, l) : r.hasOwnProperty("defaultValue") && Ga(n, r.type, Ze(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
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
      for (l = "" + Ze(l), r = null, c = 0; c < n.length; c++) {
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
    return te({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
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
    n._wrapperState = { initialValue: Ze(l) };
  }
  function Rr(n, r) {
    var l = Ze(r.value), o = Ze(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function qa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Mn(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Mn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ir, Ni = function(n) {
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
  }, je = ["Webkit", "ms", "Moz", "O"];
  Object.keys(le).forEach(function(n) {
    je.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), le[r] = le[n];
    });
  });
  function ut(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || le.hasOwnProperty(n) && le[n] ? ("" + r).trim() : r + "px";
  }
  function Ut(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = ut(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var sn = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cn(n, r) {
    if (r) {
      if (sn[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(M(62));
    }
  }
  function fn(n, r) {
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
  function an(n) {
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
  function Li() {
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
      Mi = !1, (At !== null || da !== null) && (Ql(), Li());
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
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (X) {
      this.onError(X);
    }
  }
  var Qr = !1, ci = null, fi = !1, zi = null, R = { onError: function(n) {
    Qr = !0, ci = n;
  } };
  function W(n, r, l, o, c, d, m, E, T) {
    Qr = !1, ci = null, va.apply(R, arguments);
  }
  function se(n, r, l, o, c, d, m, E, T) {
    if (W.apply(this, arguments), Qr) {
      if (Qr) {
        var A = ci;
        Qr = !1, ci = null;
      } else throw Error(M(198));
      fi || (fi = !0, zi = A);
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
  function vt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Xe(n) {
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
          if (d === l) return Xe(c), n;
          if (d === o) return Xe(c), r;
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
  function ct(n) {
    return n = yt(n), n !== null ? Tn(n) : null;
  }
  function Tn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Tn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var ln = G.unstable_scheduleCallback, dn = G.unstable_cancelCallback, Tr = G.unstable_shouldYield, Ka = G.unstable_requestPaint, jt = G.unstable_now, hn = G.unstable_getCurrentPriorityLevel, nt = G.unstable_ImmediatePriority, di = G.unstable_UserBlockingPriority, Ui = G.unstable_NormalPriority, ac = G.unstable_LowPriority, Ai = G.unstable_IdlePriority, ol = null, Wr = null;
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
  var xt = 0;
  function Wo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, _t, uc, vi, Ke, Kl = !1, Jn = [], qr = null, Nr = null, hi = null, En = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), Xa = [], ka = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function br(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        qr = null;
        break;
      case "dragenter":
      case "dragleave":
        Nr = null;
        break;
      case "mouseover":
      case "mouseout":
        hi = null;
        break;
      case "pointerover":
      case "pointerout":
        En.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wt.delete(r.pointerId);
    }
  }
  function Lr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = cs(r), r !== null && _t(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function qf(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return qr = Lr(qr, n, r, l, o, c), !0;
      case "dragenter":
        return Nr = Lr(Nr, n, r, l, o, c), !0;
      case "mouseover":
        return hi = Lr(hi, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return En.set(d, Lr(En.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Wt.set(d, Lr(Wt.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Pu(n) {
    var r = iu(n.target);
    if (r !== null) {
      var l = fe(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = vt(l), r !== null) {
            n.blockedOn = r, Ke(n.priority, function() {
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
      } else return r = cs(l), r !== null && _t(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Vu(n, r, l) {
    Xl(n) && l.delete(r);
  }
  function Bu() {
    Kl = !1, qr !== null && Xl(qr) && (qr = null), Nr !== null && Xl(Nr) && (Nr = null), hi !== null && Xl(hi) && (hi = null), En.forEach(Vu), Wt.forEach(Vu);
  }
  function Jl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Kl || (Kl = !0, G.unstable_scheduleCallback(G.unstable_NormalPriority, Bu)));
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
    for (qr !== null && Jl(qr, n), Nr !== null && Jl(Nr, n), hi !== null && Jl(hi, n), En.forEach(r), Wt.forEach(r), l = 0; l < Xa.length; l++) o = Xa[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xa.length && (l = Xa[0], l.blockedOn === null); ) Pu(l), l.blockedOn === null && Xa.shift();
  }
  var Na = Be.ReactCurrentBatchConfig, dl = !0;
  function Hi(n, r, l, o) {
    var c = xt, d = Na.transition;
    Na.transition = null;
    try {
      xt = 1, pl(n, r, l, o);
    } finally {
      xt = c, Na.transition = d;
    }
  }
  function $u(n, r, l, o) {
    var c = xt, d = Na.transition;
    Na.transition = null;
    try {
      xt = 4, pl(n, r, l, o);
    } finally {
      xt = c, Na.transition = d;
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
    if (Pi = null, n = an(o), n = iu(n), n !== null) if (r = fe(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = vt(r), n !== null) return n;
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
        switch (hn()) {
          case nt:
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
  var La = null, Iu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Iu, l = r.length, o, c = "value" in La ? La.value : La.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function z(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function H() {
    return !0;
  }
  function re() {
    return !1;
  }
  function Ce(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? H : re, this.isPropagationStopped = re, this;
    }
    return te(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = H);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = H);
    }, persist: function() {
    }, isPersistent: H }), r;
  }
  var he = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Qe = Ce(he), ft = te({}, he, { view: 0, detail: 0 }), Ht = Ce(ft), Gt, qt, it, en = te({}, ft, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ja, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== it && (it && n.type === "mousemove" ? (Gt = n.screenX - it.screenX, qt = n.screenY - it.screenY) : qt = Gt = 0, it = n), Gt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : qt;
  } }), bn = Ce(en), Zl = te({}, en, { dataTransfer: 0 }), qo = Ce(Zl), Vi = te({}, ft, { relatedTarget: 0 }), eu = Ce(Vi), Ko = te({}, he, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kf = Ce(Ko), oc = te({}, he, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xf = Ce(oc), Zp = te({}, he, { data: 0 }), sc = Ce(Zp), ev = {
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
  var Im = te({}, ft, { key: function(n) {
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
  } }), Jf = Ce(Im), Zf = te({}, en, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cc = Ce(Zf), Qm = te({}, ft, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ja }), fc = Ce(Qm), rv = te({}, he, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Kr = Ce(rv), Bi = te({}, en, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), zn = Ce(Bi), $i = [9, 13, 27, 32], Xo = S && "CompositionEvent" in window, vl = null;
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
    if (Wu) return n === "compositionend" || !Xo && dc(n, r) ? (n = C(), h = Iu = La = null, Wu = !1, n) : null;
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
    Da(o), r = us(r, "onChange"), 0 < r.length && (l = new Qe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
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
      sv(r, mi, n, an(n)), Wl(ed, r);
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
      if (!Ge.call(r, c) || !Za(n[c], r[c])) return !1;
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
    ad || Xu == null || Xu !== ir(o) || (o = Xu, "selectionStart" in o && qu(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), es && Zo(es, o) || (es = o, o = us(rd, "onSelect"), 0 < o.length && (r = new Qe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Xu)));
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
    wv.set(n, r), ot(r, [n]);
  }
  for (var tu = 0; tu < id.length; tu++) {
    var ld = id[tu], rs = ld.toLowerCase(), Zm = ld[0].toUpperCase() + ld.slice(1);
    yi(rs, "on" + Zm);
  }
  yi(Cv, "onAnimationEnd"), yi(Rv, "onAnimationIteration"), yi(Tv, "onAnimationStart"), yi("dblclick", "onDoubleClick"), yi("focusin", "onFocus"), yi("focusout", "onBlur"), yi(bv, "onTransitionEnd"), Ne("onMouseEnter", ["mouseout", "mouseover"]), Ne("onMouseLeave", ["mouseout", "mouseover"]), Ne("onPointerEnter", ["pointerout", "pointerover"]), Ne("onPointerLeave", ["pointerout", "pointerover"]), ot("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ot("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ot("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ot("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ot("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var as = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
  function hc(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, se(o, r, void 0, n), n.currentTarget = null;
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
      n[is] = !0, Ie.forEach(function(l) {
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
      var A = d, X = an(l), Z = [];
      e: {
        var K = wv.get(n);
        if (K !== void 0) {
          var me = Qe, Re = n;
          switch (n) {
            case "keypress":
              if (z(l) === 0) break e;
            case "keydown":
            case "keyup":
              me = Jf;
              break;
            case "focusin":
              Re = "focus", me = eu;
              break;
            case "focusout":
              Re = "blur", me = eu;
              break;
            case "beforeblur":
            case "afterblur":
              me = eu;
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
              me = bn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              me = qo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              me = fc;
              break;
            case Cv:
            case Rv:
            case Tv:
              me = Kf;
              break;
            case bv:
              me = Kr;
              break;
            case "scroll":
              me = Ht;
              break;
            case "wheel":
              me = zn;
              break;
            case "copy":
            case "cut":
            case "paste":
              me = Xf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              me = cc;
          }
          var xe = (r & 4) !== 0, Dn = !xe && n === "scroll", D = xe ? K !== null ? K + "Capture" : null : K;
          xe = [];
          for (var x = A, L; x !== null; ) {
            L = x;
            var ne = L.stateNode;
            if (L.tag === 5 && ne !== null && (L = ne, D !== null && (ne = si(x, D), ne != null && xe.push(Zu(x, ne, L)))), Dn) break;
            x = x.return;
          }
          0 < xe.length && (K = new me(K, Re, null, l, X), Z.push({ event: K, listeners: xe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (K = n === "mouseover" || n === "pointerover", me = n === "mouseout" || n === "pointerout", K && l !== Xn && (Re = l.relatedTarget || l.fromElement) && (iu(Re) || Re[Yi])) break e;
          if ((me || K) && (K = X.window === X ? X : (K = X.ownerDocument) ? K.defaultView || K.parentWindow : window, me ? (Re = l.relatedTarget || l.toElement, me = A, Re = Re ? iu(Re) : null, Re !== null && (Dn = fe(Re), Re !== Dn || Re.tag !== 5 && Re.tag !== 6) && (Re = null)) : (me = null, Re = A), me !== Re)) {
            if (xe = bn, ne = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (xe = cc, ne = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Dn = me == null ? K : Le(me), L = Re == null ? K : Le(Re), K = new xe(ne, x + "leave", me, l, X), K.target = Dn, K.relatedTarget = L, ne = null, iu(X) === A && (xe = new xe(D, x + "enter", Re, l, X), xe.target = L, xe.relatedTarget = Dn, ne = xe), Dn = ne, me && Re) t: {
              for (xe = me, D = Re, x = 0, L = xe; L; L = nu(L)) x++;
              for (L = 0, ne = D; ne; ne = nu(ne)) L++;
              for (; 0 < x - L; ) xe = nu(xe), x--;
              for (; 0 < L - x; ) D = nu(D), L--;
              for (; x--; ) {
                if (xe === D || D !== null && xe === D.alternate) break t;
                xe = nu(xe), D = nu(D);
              }
              xe = null;
            }
            else xe = null;
            me !== null && yc(Z, K, me, xe, !1), Re !== null && Dn !== null && yc(Z, Dn, Re, xe, !0);
          }
        }
        e: {
          if (K = A ? Le(A) : window, me = K.nodeName && K.nodeName.toLowerCase(), me === "select" || me === "input" && K.type === "file") var De = cv;
          else if (ov(K)) if (fv) De = Jm;
          else {
            De = Xm;
            var Te = Km;
          }
          else (me = K.nodeName) && me.toLowerCase() === "input" && (K.type === "checkbox" || K.type === "radio") && (De = hv);
          if (De && (De = De(n, A))) {
            sv(Z, De, l, X);
            break e;
          }
          Te && Te(n, K, A), n === "focusout" && (Te = K._wrapperState) && Te.controlled && K.type === "number" && Ga(K, "number", K.value);
        }
        switch (Te = A ? Le(A) : window, n) {
          case "focusin":
            (ov(Te) || Te.contentEditable === "true") && (Xu = Te, rd = A, es = null);
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
            ad = !1, Ev(Z, l, X);
            break;
          case "selectionchange":
            if (Ku) break;
          case "keydown":
          case "keyup":
            Ev(Z, l, X);
        }
        var ze;
        if (Xo) e: {
          switch (n) {
            case "compositionstart":
              var qe = "onCompositionStart";
              break e;
            case "compositionend":
              qe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              qe = "onCompositionUpdate";
              break e;
          }
          qe = void 0;
        }
        else Wu ? dc(n, l) && (qe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (qe = "onCompositionStart");
        qe && (Qu && l.locale !== "ko" && (Wu || qe !== "onCompositionStart" ? qe === "onCompositionEnd" && Wu && (ze = C()) : (La = X, Iu = "value" in La ? La.value : La.textContent, Wu = !0)), Te = us(A, qe), 0 < Te.length && (qe = new sc(qe, n, null, l, X), Z.push({ event: qe, listeners: Te }), ze ? qe.data = ze : (ze = lv(l), ze !== null && (qe.data = ze)))), (ze = Wm ? Gm(n, l) : uv(n, l)) && (A = us(A, "onBeforeInput"), 0 < A.length && (X = new sc("onBeforeInput", "beforeinput", null, l, X), Z.push({ event: X, listeners: A }), X.data = ze));
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
  var Un = [], gt = -1;
  function Xr(n) {
    return { current: n };
  }
  function Kt(n) {
    0 > gt || (n.current = Un[gt], Un[gt] = null, gt--);
  }
  function tn(n, r) {
    gt++, Un[gt] = n.current, n.current = r;
  }
  var ht = {}, Cn = Xr(ht), An = Xr(!1), za = ht;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ht;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function gi() {
    Kt(An), Kt(Cn);
  }
  function Tc(n, r, l) {
    if (Cn.current !== ht) throw Error(M(168));
    tn(Cn, r), tn(An, l);
  }
  function kv(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(M(108, Et(n) || "Unknown", c));
    return te({}, l, o);
  }
  function lu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ht, za = Cn.current, tn(Cn, n), tn(An, An.current), !0;
  }
  function Ua(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(M(169));
    l ? (n = kv(n, r, za), o.__reactInternalMemoizedMergedChildContext = n, Kt(An), Kt(Cn), tn(Cn, n)) : Kt(An), tn(An, l);
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
      var n = 0, r = xt;
      try {
        var l = ti;
        for (xt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ti = null, fs = !1;
      } catch (c) {
        throw ti !== null && (ti = ti.slice(n + 1)), ln(nt, Mr), c;
      } finally {
        xt = r, ds = !1;
      }
    }
    return null;
  }
  var gl = [], Sl = 0, ao = null, El = 0, or = [], Fn = 0, uu = null, zr = 1, Si = "";
  function Cl(n, r) {
    gl[Sl++] = El, gl[Sl++] = ao, ao = n, El = r;
  }
  function Ov(n, r, l) {
    or[Fn++] = zr, or[Fn++] = Si, or[Fn++] = uu, uu = n;
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
    for (; n === uu; ) uu = or[--Fn], or[Fn] = null, Si = or[--Fn], or[Fn] = null, zr = or[--Fn], or[Fn] = null;
  }
  var Jr = null, Zr = null, pn = !1, ni = null;
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
    if (pn) {
      var r = Zr;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n)) throw Error(M(418));
          r = ei(l.nextSibling);
          var o = Jr;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, pn = !1, Jr = n);
        }
      } else {
        if (hd(n)) throw Error(M(418));
        n.flags = n.flags & -4097 | 2, pn = !1, Jr = n;
      }
    }
  }
  function Nv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Jr = n;
  }
  function wn(n) {
    if (n !== Jr) return !1;
    if (!pn) return Nv(n), pn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !au(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (hd(n)) throw Lv(), Error(M(418));
      for (; r; ) pd(n, r), r = ei(r.nextSibling);
    }
    if (Nv(n), n.tag === 13) {
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
  function Lv() {
    for (var n = Zr; n; ) n = ei(n.nextSibling);
  }
  function Qi() {
    Zr = Jr = null, pn = !1;
  }
  function ps(n) {
    ni === null ? ni = [n] : ni.push(n);
  }
  var ou = Be.ReactCurrentBatchConfig;
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
    function E(D, x, L, ne) {
      return x === null || x.tag !== 6 ? (x = wu(L, D.mode, ne), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, ne) {
      var De = L.type;
      return De === tt ? X(D, x, L.props.children, ne, L.key) : x !== null && (x.elementType === De || typeof De == "object" && De !== null && De.$$typeof === dt && Mv(De) === x.type) ? (ne = c(x, L.props), ne.ref = vs(D, x, L), ne.return = D, ne) : (ne = cf(L.type, L.key, L.props, null, D.mode, ne), ne.ref = vs(D, x, L), ne.return = D, ne);
    }
    function A(D, x, L, ne) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Wd(L, D.mode, ne), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function X(D, x, L, ne, De) {
      return x === null || x.tag !== 7 ? (x = Ml(L, D.mode, ne, De), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function Z(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = wu("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case wt:
            return L = cf(x.type, x.key, x.props, null, D.mode, L), L.ref = vs(D, null, x), L.return = D, L;
          case we:
            return x = Wd(x, D.mode, L), x.return = D, x;
          case dt:
            var ne = x._init;
            return Z(D, ne(x._payload), L);
        }
        if (kr(x) || Q(x)) return x = Ml(x, D.mode, L, null), x.return = D, x;
        io(D, x);
      }
      return null;
    }
    function K(D, x, L, ne) {
      var De = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return De !== null ? null : E(D, x, "" + L, ne);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case wt:
            return L.key === De ? T(D, x, L, ne) : null;
          case we:
            return L.key === De ? A(D, x, L, ne) : null;
          case dt:
            return De = L._init, K(
              D,
              x,
              De(L._payload),
              ne
            );
        }
        if (kr(L) || Q(L)) return De !== null ? null : X(D, x, L, ne, null);
        io(D, L);
      }
      return null;
    }
    function me(D, x, L, ne, De) {
      if (typeof ne == "string" && ne !== "" || typeof ne == "number") return D = D.get(L) || null, E(x, D, "" + ne, De);
      if (typeof ne == "object" && ne !== null) {
        switch (ne.$$typeof) {
          case wt:
            return D = D.get(ne.key === null ? L : ne.key) || null, T(x, D, ne, De);
          case we:
            return D = D.get(ne.key === null ? L : ne.key) || null, A(x, D, ne, De);
          case dt:
            var Te = ne._init;
            return me(D, x, L, Te(ne._payload), De);
        }
        if (kr(ne) || Q(ne)) return D = D.get(L) || null, X(x, D, ne, De, null);
        io(x, ne);
      }
      return null;
    }
    function Re(D, x, L, ne) {
      for (var De = null, Te = null, ze = x, qe = x = 0, rr = null; ze !== null && qe < L.length; qe++) {
        ze.index > qe ? (rr = ze, ze = null) : rr = ze.sibling;
        var Lt = K(D, ze, L[qe], ne);
        if (Lt === null) {
          ze === null && (ze = rr);
          break;
        }
        n && ze && Lt.alternate === null && r(D, ze), x = d(Lt, x, qe), Te === null ? De = Lt : Te.sibling = Lt, Te = Lt, ze = rr;
      }
      if (qe === L.length) return l(D, ze), pn && Cl(D, qe), De;
      if (ze === null) {
        for (; qe < L.length; qe++) ze = Z(D, L[qe], ne), ze !== null && (x = d(ze, x, qe), Te === null ? De = ze : Te.sibling = ze, Te = ze);
        return pn && Cl(D, qe), De;
      }
      for (ze = o(D, ze); qe < L.length; qe++) rr = me(ze, D, qe, L[qe], ne), rr !== null && (n && rr.alternate !== null && ze.delete(rr.key === null ? qe : rr.key), x = d(rr, x, qe), Te === null ? De = rr : Te.sibling = rr, Te = rr);
      return n && ze.forEach(function(zl) {
        return r(D, zl);
      }), pn && Cl(D, qe), De;
    }
    function xe(D, x, L, ne) {
      var De = Q(L);
      if (typeof De != "function") throw Error(M(150));
      if (L = De.call(L), L == null) throw Error(M(151));
      for (var Te = De = null, ze = x, qe = x = 0, rr = null, Lt = L.next(); ze !== null && !Lt.done; qe++, Lt = L.next()) {
        ze.index > qe ? (rr = ze, ze = null) : rr = ze.sibling;
        var zl = K(D, ze, Lt.value, ne);
        if (zl === null) {
          ze === null && (ze = rr);
          break;
        }
        n && ze && zl.alternate === null && r(D, ze), x = d(zl, x, qe), Te === null ? De = zl : Te.sibling = zl, Te = zl, ze = rr;
      }
      if (Lt.done) return l(
        D,
        ze
      ), pn && Cl(D, qe), De;
      if (ze === null) {
        for (; !Lt.done; qe++, Lt = L.next()) Lt = Z(D, Lt.value, ne), Lt !== null && (x = d(Lt, x, qe), Te === null ? De = Lt : Te.sibling = Lt, Te = Lt);
        return pn && Cl(D, qe), De;
      }
      for (ze = o(D, ze); !Lt.done; qe++, Lt = L.next()) Lt = me(ze, D, qe, Lt.value, ne), Lt !== null && (n && Lt.alternate !== null && ze.delete(Lt.key === null ? qe : Lt.key), x = d(Lt, x, qe), Te === null ? De = Lt : Te.sibling = Lt, Te = Lt);
      return n && ze.forEach(function(yy) {
        return r(D, yy);
      }), pn && Cl(D, qe), De;
    }
    function Dn(D, x, L, ne) {
      if (typeof L == "object" && L !== null && L.type === tt && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case wt:
            e: {
              for (var De = L.key, Te = x; Te !== null; ) {
                if (Te.key === De) {
                  if (De = L.type, De === tt) {
                    if (Te.tag === 7) {
                      l(D, Te.sibling), x = c(Te, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Te.elementType === De || typeof De == "object" && De !== null && De.$$typeof === dt && Mv(De) === Te.type) {
                    l(D, Te.sibling), x = c(Te, L.props), x.ref = vs(D, Te, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Te);
                  break;
                } else r(D, Te);
                Te = Te.sibling;
              }
              L.type === tt ? (x = Ml(L.props.children, D.mode, ne, L.key), x.return = D, D = x) : (ne = cf(L.type, L.key, L.props, null, D.mode, ne), ne.ref = vs(D, x, L), ne.return = D, D = ne);
            }
            return m(D);
          case we:
            e: {
              for (Te = L.key; x !== null; ) {
                if (x.key === Te) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = Wd(L, D.mode, ne), x.return = D, D = x;
            }
            return m(D);
          case dt:
            return Te = L._init, Dn(D, x, Te(L._payload), ne);
        }
        if (kr(L)) return Re(D, x, L, ne);
        if (Q(L)) return xe(D, x, L, ne);
        io(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = wu(L, D.mode, ne), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Dn;
  }
  var ri = zv(!0), sr = zv(!1), oe = Xr(null), ma = null, xr = null, yd = null;
  function gd() {
    yd = xr = ma = null;
  }
  function Sd(n) {
    var r = oe.current;
    Kt(oe), n._currentValue = r;
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
      var T = E, A = T.next;
      T.next = null, m === null ? d = A : m.next = A, m = T;
      var X = n.alternate;
      X !== null && (X = X.updateQueue, E = X.lastBaseUpdate, E !== m && (E === null ? X.firstBaseUpdate = A : E.next = A, X.lastBaseUpdate = T));
    }
    if (d !== null) {
      var Z = c.baseState;
      m = 0, X = A = T = null, E = d;
      do {
        var K = E.lane, me = E.eventTime;
        if ((o & K) === K) {
          X !== null && (X = X.next = {
            eventTime: me,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var Re = n, xe = E;
            switch (K = r, me = l, xe.tag) {
              case 1:
                if (Re = xe.payload, typeof Re == "function") {
                  Z = Re.call(me, Z, K);
                  break e;
                }
                Z = Re;
                break e;
              case 3:
                Re.flags = Re.flags & -65537 | 128;
              case 0:
                if (Re = xe.payload, K = typeof Re == "function" ? Re.call(me, Z, K) : Re, K == null) break e;
                Z = te({}, Z, K);
                break e;
              case 2:
                Aa = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, K = c.effects, K === null ? c.effects = [E] : K.push(E));
        } else me = { eventTime: me, lane: K, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, X === null ? (A = X = me, T = Z) : X = X.next = me, m |= K;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          K = E, E = K.next, K.next = null, c.lastBaseUpdate = K, c.shared.pending = null;
        }
      } while (!0);
      if (X === null && (T = Z), c.baseState = T, c.firstBaseUpdate = A, c.lastBaseUpdate = X, r = c.shared.interleaved, r !== null) {
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
  var mn = Xr(0);
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
  var Me = Be.ReactCurrentDispatcher, mt = Be.ReactCurrentBatchConfig, Tt = 0, rt = null, Xt = null, Yn = null, Dc = !1, gs = !1, Ss = 0, _d = 0;
  function $() {
    throw Error(M(321));
  }
  function Hn(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function Ye(n, r, l, o, c, d) {
    if (Tt = d, rt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Me.current = n === null || n.memoizedState === null ? $c : Yc, n = l(o, c), gs) {
      d = 0;
      do {
        if (gs = !1, Ss = 0, 25 <= d) throw Error(M(301));
        d += 1, Yn = Xt = null, r.updateQueue = null, Me.current = bs, n = l(o, c);
      } while (gs);
    }
    if (Me.current = Yt, r = Xt !== null && Xt.next !== null, Tt = 0, Yn = Xt = rt = null, Dc = !1, r) throw Error(M(300));
    return n;
  }
  function bl() {
    var n = Ss !== 0;
    return Ss = 0, n;
  }
  function Zn() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Yn === null ? rt.memoizedState = Yn = n : Yn = Yn.next = n, Yn;
  }
  function er() {
    if (Xt === null) {
      var n = rt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Xt.next;
    var r = Yn === null ? rt.memoizedState : Yn.next;
    if (r !== null) Yn = r, Xt = n;
    else {
      if (n === null) throw Error(M(310));
      Xt = n, n = { memoizedState: Xt.memoizedState, baseState: Xt.baseState, baseQueue: Xt.baseQueue, queue: Xt.queue, next: null }, Yn === null ? rt.memoizedState = Yn = n : Yn = Yn.next = n;
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
      var E = m = null, T = null, A = d;
      do {
        var X = A.lane;
        if ((Tt & X) === X) T !== null && (T = T.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var Z = {
            lane: X,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          T === null ? (E = T = Z, m = o) : T = T.next = Z, rt.lanes |= X, Su |= X;
        }
        A = A.next;
      } while (A !== null && A !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, rt.lanes |= d, Su |= d, c = c.next;
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
    var l = rt, o = er(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, tr = !0), o = o.queue, Es(Lc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Yn !== null && Yn.memoizedState.tag & 1) {
      if (l.flags |= 2048, du(9, Nc.bind(null, l, o, c, r), void 0, null), Pn === null) throw Error(M(349));
      Tt & 30 || Oc(l, r, c);
    }
    return c;
  }
  function Oc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = rt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, rt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Nc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Mc(r) && zc(n);
  }
  function Lc(n, r, l) {
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
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ea, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ts.bind(null, rt, n), [r.memoizedState, n];
  }
  function du(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = rt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, rt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Ac() {
    return er().memoizedState;
  }
  function co(n, r, l, o) {
    var c = Zn();
    rt.flags |= n, c.memoizedState = du(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function fo(n, r, l, o) {
    var c = er();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Xt !== null) {
      var m = Xt.memoizedState;
      if (d = m.destroy, o !== null && Hn(o, m.deps)) {
        c.memoizedState = du(r, l, d, o);
        return;
      }
    }
    rt.flags |= n, c.memoizedState = du(1 | r, l, d, o);
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
    return o !== null && r !== null && Hn(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Vc(n, r) {
    var l = er();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Hn(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Bc(n, r, l) {
    return Tt & 21 ? (Za(l, r) || (l = Gl(), rt.lanes |= l, Su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = l);
  }
  function Fv(n, r) {
    var l = xt;
    xt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = mt.transition;
    mt.transition = {};
    try {
      n(!1), r();
    } finally {
      xt = l, mt.transition = o;
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
    return n === rt || r !== null && r === rt;
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
  var Yt = { readContext: $t, useCallback: $, useContext: $, useEffect: $, useImperativeHandle: $, useInsertionEffect: $, useLayoutEffect: $, useMemo: $, useReducer: $, useRef: $, useState: $, useDebugValue: $, useDeferredValue: $, useTransition: $, useMutableSource: $, useSyncExternalStore: $, useId: $, unstable_isNewReconciler: !1 }, $c = { readContext: $t, useCallback: function(n, r) {
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
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hv.bind(null, rt, n), [o.memoizedState, n];
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
    var o = rt, c = Zn();
    if (pn) {
      if (l === void 0) throw Error(M(407));
      l = l();
    } else {
      if (l = r(), Pn === null) throw Error(M(349));
      Tt & 30 || Oc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, jc(Lc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, du(9, Nc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Zn(), r = Pn.identifierPrefix;
    if (pn) {
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
      r = te({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Dd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : te({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
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
    var o = !1, c = ht, d = r.contextType;
    return typeof d == "object" && d !== null ? d = $t(d) : (c = jn(r) ? za : Cn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : ht), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ic, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Qc(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ic.enqueueReplaceState(r, r.state, null);
  }
  function kd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Rl(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = $t(d) : (d = jn(r) ? za : Cn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Dd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ic.enqueueReplaceState(c, c.state, null), xc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function _l(n, r) {
    try {
      var l = "", o = r;
      do
        l += He(o), o = o.return;
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
  function Nd(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ry();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = Yd.bind(null, n, r, l), r.then(n, n));
  }
  function Ld(n) {
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
  var vu = Be.ReactCurrentOwner, tr = !1;
  function xn(n, r, l, o) {
    r.child = n === null ? sr(r, null, l, o) : ri(r, n.child, l, o);
  }
  function Gc(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = Ye(n, r, l, o, d, c), l = bl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (pn && l && dd(r), r.flags |= 1, xn(n, r, o, c), r.child);
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
    return r.flags |= 1, n = Ll(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function hu(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Zo(d, o) && n.ref === r.ref) if (tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, cr(n, r, c);
    }
    return qc(n, r, l, o, c);
  }
  function lt(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tn(yo, Sa), Sa |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tn(yo, Sa), Sa |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, tn(yo, Sa), Sa |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, tn(yo, Sa), Sa |= o;
    return xn(n, r, c, l), r.child;
  }
  function xs(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function qc(n, r, l, o, c) {
    var d = jn(l) ? za : Cn.current;
    return d = ha(r, d), lo(r, c), l = Ye(n, r, l, o, d, c), o = bl(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, cr(n, r, c)) : (pn && o && dd(r), r.flags |= 1, xn(n, r, l, c), r.child);
  }
  function ay(n, r, l, o, c) {
    if (jn(l)) {
      var d = !0;
      lu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) ja(n, r), Bv(r, l, o), kd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = $t(A) : (A = jn(l) ? za : Cn.current, A = ha(r, A));
      var X = l.getDerivedStateFromProps, Z = typeof X == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Z || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== A) && Qc(r, m, o, A), Aa = !1;
      var K = r.memoizedState;
      m.state = K, xc(r, o, m, c), T = r.memoizedState, E !== o || K !== T || An.current || Aa ? (typeof X == "function" && (Dd(r, l, X, o), T = r.memoizedState), (E = Aa || Vv(r, l, E, o, K, T, A)) ? (Z || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Av(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : ta(r.type, E), m.props = A, Z = r.pendingProps, K = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = $t(T) : (T = jn(l) ? za : Cn.current, T = ha(r, T));
      var me = l.getDerivedStateFromProps;
      (X = typeof me == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== Z || K !== T) && Qc(r, m, o, T), Aa = !1, K = r.memoizedState, m.state = K, xc(r, o, m, c);
      var Re = r.memoizedState;
      E !== Z || K !== Re || An.current || Aa ? (typeof me == "function" && (Dd(r, l, me, o), Re = r.memoizedState), (A = Aa || Vv(r, l, A, o, K, Re, T) || !1) ? (X || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, Re, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Re, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = Re), m.props = o, m.state = Re, m.context = T, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && K === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Md(n, r, l, o, d, c);
  }
  function Md(n, r, l, o, c, d) {
    xs(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ua(r, l, !1), cr(n, r, d);
    o = r.stateNode, vu.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ri(r, n.child, null, d), r.child = ri(r, null, E, d)) : xn(n, r, E, d), r.memoizedState = o.state, c && Ua(r, l, !0), r.child;
  }
  function Kc(n) {
    var r = n.stateNode;
    r.pendingContext ? Tc(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Tc(n, r.context, !1), Td(n, r.containerInfo);
  }
  function vo(n, r, l, o, c) {
    return Qi(), ps(c), r.flags |= 256, xn(n, r, l, o), r.child;
  }
  var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = mn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), tn(mn, c & 1), n === null)
      return md(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = To(m, o, 0, null), n = Ml(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Xc(l), r.memoizedState = zd, n) : _s(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Qv(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = Ll(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Ll(E, d) : (d = Ml(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Xc(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zd, o;
    }
    return d = n.child, n = d.sibling, o = Ll(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
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
      if (o = Pn, o !== null) {
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
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = cy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Zr = ei(c.nextSibling), Jr = r, pn = !0, ni = null, n !== null && (or[Fn++] = zr, or[Fn++] = Si, or[Fn++] = uu, zr = n.id, Si = n.overflow, uu = r), r = _s(r, o.children), r.flags |= 4096, r);
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
    if (xn(n, r, o.children, l), o = mn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
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
    if (tn(mn, o), !(r.mode & 1)) r.memoizedState = null;
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
      for (n = r.child, l = Ll(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Ll(n, n.pendingProps), l.return = r;
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
        jn(r.type) && lu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        tn(oe, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (tn(mn, mn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (tn(mn, mn.current & 1), n = cr(n, r, l), n !== null ? n.sibling : null);
        tn(mn, mn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return ra(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), tn(mn, mn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, lt(n, r, l);
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
          c = Nn(n, c), o = Nn(n, o), d = [];
          break;
        case "select":
          c = te({}, c, { value: void 0 }), o = te({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = qn(n, c), o = qn(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Sc);
      }
      cn(l, o);
      var m;
      l = null;
      for (A in c) if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var E = c[A];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (Oe.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var T = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && T !== E && (T != null || E != null)) if (A === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          A,
          l
        )), l = T;
        else A === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(A, T)) : A === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(A, "" + T) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (Oe.hasOwnProperty(A) ? (T != null && A === "onScroll" && Pt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(A, T));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Wv = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Ds(n, r) {
    if (!pn) switch (n.tailMode) {
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
        return jn(r.type) && gi(), _r(r), null;
      case 3:
        return o = r.stateNode, oo(), Kt(An), Kt(Cn), ys(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (wn(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ni !== null && (js(ni), ni = null))), ga(n, r), _r(r), null;
      case 5:
        wd(r);
        var c = cu(ms.current);
        if (l = r.type, n !== null && r.stateNode != null) In(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(M(166));
            return _r(r), null;
          }
          if (n = cu(Ci.current), wn(r)) {
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
            cn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && gc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && gc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Oe.hasOwnProperty(m) && E != null && m === "onScroll" && Pt("scroll", o);
            }
            switch (l) {
              case "input":
                On(o), ca(o, d, !0);
                break;
              case "textarea":
                On(o), qa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Sc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Mn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[ss] = o, ho(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = fn(l, o), l) {
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
                  Cr(n, o), c = Nn(n, o), Pt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = te({}, o, { value: void 0 }), Pt("invalid", n);
                  break;
                case "textarea":
                  Kn(n, o), c = qn(n, o), Pt("invalid", n);
                  break;
                default:
                  c = o;
              }
              cn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? Ut(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Ni(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && fa(n, T) : typeof T == "number" && fa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Oe.hasOwnProperty(d) ? T != null && d === "onScroll" && Pt("scroll", n) : T != null && st(n, d, T, m));
              }
              switch (l) {
                case "input":
                  On(n), ca(n, o, !1);
                  break;
                case "textarea":
                  On(n), qa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Ze(o.value));
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
          if (l = cu(ms.current), cu(Ci.current), wn(r)) {
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
        if (Kt(mn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (pn && Zr !== null && r.mode & 1 && !(r.flags & 128)) Lv(), Qi(), r.flags |= 98560, d = !1;
          else if (d = wn(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(M(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(M(317));
              d[Ma] = r;
            } else Qi(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _r(r), d = !1;
          } else ni !== null && (js(ni), ni = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || mn.current & 1 ? Qn === 0 && (Qn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), _r(r), null);
      case 4:
        return oo(), ga(n, r), n === null && ls(r.stateNode.containerInfo), _r(r), null;
      case 10:
        return Sd(r.type._context), _r(r), null;
      case 17:
        return jn(r.type) && gi(), _r(r), null;
      case 19:
        if (Kt(mn), d = r.memoizedState, d === null) return _r(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Ds(d, !1);
        else {
          if (Qn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = _c(n), m !== null) {
              for (r.flags |= 128, Ds(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return tn(mn, mn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && jt() > So && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = _c(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ds(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !pn) return _r(r), null;
          } else 2 * jt() - d.renderingStartTime > So && l !== 1073741824 && (r.flags |= 128, o = !0, Ds(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = jt(), r.sibling = null, l = mn.current, tn(mn, o ? l & 1 | 2 : l & 1), r) : (_r(r), null);
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
        return jn(r.type) && gi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return oo(), Kt(An), Kt(Cn), ys(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return wd(r), null;
      case 13:
        if (Kt(mn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(M(340));
          Qi();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Kt(mn), null;
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
  var mu = !1, fr = !1, iy = typeof WeakSet == "function" ? WeakSet : Set, Ee = null;
  function Dl(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Rn(n, r, o);
    }
    else l.current = null;
  }
  function jd(n, r, l) {
    try {
      l();
    } catch (o) {
      Rn(n, r, o);
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
          var m = 0, E = -1, T = -1, A = 0, X = 0, Z = n, K = null;
          t: for (; ; ) {
            for (var me; Z !== l || c !== 0 && Z.nodeType !== 3 || (E = m + c), Z !== d || o !== 0 && Z.nodeType !== 3 || (T = m + o), Z.nodeType === 3 && (m += Z.nodeValue.length), (me = Z.firstChild) !== null; )
              K = Z, Z = me;
            for (; ; ) {
              if (Z === n) break t;
              if (K === l && ++A === c && (E = m), K === d && ++X === o && (T = m), (me = Z.nextSibling) !== null) break;
              Z = K, K = Z.parentNode;
            }
            Z = me;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (os = { focusedElem: n, selectionRange: l }, dl = !1, Ee = r; Ee !== null; ) if (r = Ee, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Ee = n;
    else for (; Ee !== null; ) {
      r = Ee;
      try {
        var Re = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Re !== null) {
              var xe = Re.memoizedProps, Dn = Re.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? xe : ta(r.type, xe), Dn);
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
            throw Error(M(163));
        }
      } catch (ne) {
        Rn(r, r.return, ne);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Ee = n;
        break;
      }
      Ee = r.return;
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
  var yn = null, Ur = !1;
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
        var o = yn, c = Ur;
        yn = null, Fa(n, r, l), yn = o, Ur = c, yn !== null && (Ur ? (n = yn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : yn.removeChild(l.stateNode));
        break;
      case 18:
        yn !== null && (Ur ? (n = yn, l = l.stateNode, n.nodeType === 8 ? to(n.parentNode, l) : n.nodeType === 1 && to(n, l), Oa(n)) : to(yn, l.stateNode));
        break;
      case 4:
        o = yn, c = Ur, yn = l.stateNode.containerInfo, Ur = !0, Fa(n, r, l), yn = o, Ur = c;
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
          Rn(l, r, E);
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
              yn = E.stateNode, Ur = !1;
              break e;
            case 3:
              yn = E.stateNode.containerInfo, Ur = !0;
              break e;
            case 4:
              yn = E.stateNode.containerInfo, Ur = !0;
              break e;
          }
          E = E.return;
        }
        if (yn === null) throw Error(M(160));
        Gi(d, m, c), yn = null, Ur = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (A) {
        Rn(c, r, A);
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
          } catch (xe) {
            Rn(n, n.return, xe);
          }
          try {
            mo(5, n, n.return);
          } catch (xe) {
            Rn(n, n.return, xe);
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
          } catch (xe) {
            Rn(n, n.return, xe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && Bn(c, d), fn(E, m);
            var A = fn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var X = T[m], Z = T[m + 1];
              X === "style" ? Ut(c, Z) : X === "dangerouslySetInnerHTML" ? Ni(c, Z) : X === "children" ? fa(c, Z) : st(c, X, Z, A);
            }
            switch (E) {
              case "input":
                Ln(c, d);
                break;
              case "textarea":
                Rr(c, d);
                break;
              case "select":
                var K = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var me = d.value;
                me != null ? $n(c, !!d.multiple, me, !1) : K !== !!d.multiple && (d.defaultValue != null ? $n(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : $n(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ss] = d;
          } catch (xe) {
            Rn(n, n.return, xe);
          }
        }
        break;
      case 6:
        if (ai(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(M(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (xe) {
            Rn(n, n.return, xe);
          }
        }
        break;
      case 3:
        if (ai(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          Oa(r.containerInfo);
        } catch (xe) {
          Rn(n, n.return, xe);
        }
        break;
      case 4:
        ai(r, n), ii(n);
        break;
      case 13:
        ai(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Pd = jt())), o & 4 && Kv(n);
        break;
      case 22:
        if (X = l !== null && l.memoizedState !== null, n.mode & 1 ? (fr = (A = fr) || X, ai(r, n), fr = A) : ai(r, n), ii(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !X && n.mode & 1) for (Ee = n, X = n.child; X !== null; ) {
            for (Z = Ee = X; Ee !== null; ) {
              switch (K = Ee, me = K.child, K.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mo(4, K, K.return);
                  break;
                case 1:
                  Dl(K, K.return);
                  var Re = K.stateNode;
                  if (typeof Re.componentWillUnmount == "function") {
                    o = K, l = K.return;
                    try {
                      r = o, Re.props = r.memoizedProps, Re.state = r.memoizedState, Re.componentWillUnmount();
                    } catch (xe) {
                      Rn(o, l, xe);
                    }
                  }
                  break;
                case 5:
                  Dl(K, K.return);
                  break;
                case 22:
                  if (K.memoizedState !== null) {
                    Zv(Z);
                    continue;
                  }
              }
              me !== null ? (me.return = K, Ee = me) : Zv(Z);
            }
            X = X.sibling;
          }
          e: for (X = null, Z = n; ; ) {
            if (Z.tag === 5) {
              if (X === null) {
                X = Z;
                try {
                  c = Z.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = Z.stateNode, T = Z.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = ut("display", m));
                } catch (xe) {
                  Rn(n, n.return, xe);
                }
              }
            } else if (Z.tag === 6) {
              if (X === null) try {
                Z.stateNode.nodeValue = A ? "" : Z.memoizedProps;
              } catch (xe) {
                Rn(n, n.return, xe);
              }
            } else if ((Z.tag !== 22 && Z.tag !== 23 || Z.memoizedState === null || Z === n) && Z.child !== null) {
              Z.child.return = Z, Z = Z.child;
              continue;
            }
            if (Z === n) break e;
            for (; Z.sibling === null; ) {
              if (Z.return === null || Z.return === n) break e;
              X === Z && (X = null), Z = Z.return;
            }
            X === Z && (X = null), Z.sibling.return = Z.return, Z = Z.sibling;
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
        Rn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Os(n, r, l) {
    Ee = n, Jv(n);
  }
  function Jv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; Ee !== null; ) {
      var c = Ee, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || mu;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || fr;
          E = mu;
          var A = fr;
          if (mu = m, (fr = T) && !A) for (Ee = c; Ee !== null; ) m = Ee, T = m.child, m.tag === 22 && m.memoizedState !== null ? Ns(c) : T !== null ? (T.return = m, Ee = T) : Ns(c);
          for (; d !== null; ) Ee = d, Jv(d), d = d.sibling;
          Ee = c, mu = E, fr = A;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Ee = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; Ee !== null; ) {
      var r = Ee;
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
                var A = r.alternate;
                if (A !== null) {
                  var X = A.memoizedState;
                  if (X !== null) {
                    var Z = X.dehydrated;
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
              throw Error(M(163));
          }
          fr || r.flags & 512 && nf(r);
        } catch (K) {
          Rn(r, r.return, K);
        }
      }
      if (r === n) {
        Ee = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Ee = l;
        break;
      }
      Ee = r.return;
    }
  }
  function Zv(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      if (r === n) {
        Ee = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Ee = l;
        break;
      }
      Ee = r.return;
    }
  }
  function Ns(n) {
    for (; Ee !== null; ) {
      var r = Ee;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              tf(4, r);
            } catch (T) {
              Rn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Rn(r, c, T);
              }
            }
            var d = r.return;
            try {
              nf(r);
            } catch (T) {
              Rn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              nf(r);
            } catch (T) {
              Rn(r, m, T);
            }
        }
      } catch (T) {
        Rn(r, r.return, T);
      }
      if (r === n) {
        Ee = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, Ee = E;
        break;
      }
      Ee = r.return;
    }
  }
  var eh = Math.ceil, af = Be.ReactCurrentDispatcher, yu = Be.ReactCurrentOwner, Dr = Be.ReactCurrentBatchConfig, St = 0, Pn = null, _n = null, dr = 0, Sa = 0, yo = Xr(0), Qn = 0, gu = null, Su = 0, Eu = 0, Ls = 0, go = null, aa = null, Pd = 0, So = 1 / 0, qi = null, kl = !1, Ms = null, Ha = null, lf = !1, Ol = null, zs = 0, Eo = 0, Co = null, Cu = -1, Us = 0;
  function nn() {
    return St & 6 ? jt() : Cu !== -1 ? Cu : Cu = jt();
  }
  function Ea(n) {
    return n.mode & 1 ? St & 2 && dr !== 0 ? dr & -dr : ou.transition !== null ? (Us === 0 && (Us = Gl()), Us) : (n = xt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Ca(n, r, l, o) {
    if (50 < Eo) throw Eo = 0, Co = null, Error(M(185));
    fl(n, l, o), (!(St & 2) || n !== Pn) && (n === Pn && (!(St & 2) && (Eu |= l), Qn === 4 && Nl(n, dr)), nr(n, o), l === 1 && St === 0 && !(r.mode & 1) && (So = jt() + 500, fs && Mr()));
  }
  function nr(n, r) {
    var l = n.callbackNode;
    Fu(n, r);
    var o = pi(n, n === Pn ? dr : 0);
    if (o === 0) l !== null && dn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && dn(l), r === 1) n.tag === 0 ? fd(Hs.bind(null, n)) : yl(Hs.bind(null, n)), ny(function() {
        !(St & 6) && Mr();
      }), l = null;
      else {
        switch (Wo(o)) {
          case 1:
            l = nt;
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
    var o = pi(n, n === Pn ? dr : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = sf(n, o);
    else {
      r = o;
      var c = St;
      St |= 2;
      var d = nh();
      (Pn !== n || dr !== r) && (qi = null, So = jt() + 500, Tu(n, r));
      do
        try {
          oy();
          break;
        } catch (E) {
          of(n, E);
        }
      while (!0);
      gd(), af.current = d, St = c, _n !== null ? r = 0 : (Pn = null, dr = 0, r = Qn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Fi(n), c !== 0 && (o = c, r = As(n, c))), r === 1) throw l = gu, Tu(n, 0), Nl(n, o), nr(n, jt()), l;
      if (r === 6) Nl(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fs(c) && (r = sf(n, o), r === 2 && (d = Fi(n), d !== 0 && (o = d, r = As(n, d))), r === 1)) throw l = gu, Tu(n, 0), Nl(n, o), nr(n, jt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            bu(n, aa, qi);
            break;
          case 3:
            if (Nl(n, o), (o & 130023424) === o && (r = Pd + 500 - jt(), 10 < r)) {
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
            if (Nl(n, o), (o & 4194240) === o) break;
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
  function Nl(n, r) {
    for (r &= ~Ls, r &= ~Eu, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
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
    if (l === 1) throw l = gu, Tu(n, 0), Nl(n, r), nr(n, jt()), l;
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
    var l = Dr.transition, o = xt;
    try {
      if (Dr.transition = null, xt = 1, n) return n();
    } finally {
      xt = o, Dr.transition = l, St = r, !(St & 6) && Mr();
    }
  }
  function Vd() {
    Sa = yo.current, Kt(yo);
  }
  function Tu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Dv(l)), _n !== null) for (l = _n.return; l !== null; ) {
      var o = l;
      switch (bc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && gi();
          break;
        case 3:
          oo(), Kt(An), Kt(Cn), ys();
          break;
        case 5:
          wd(o);
          break;
        case 4:
          oo();
          break;
        case 13:
          Kt(mn);
          break;
        case 19:
          Kt(mn);
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
    if (Pn = n, _n = n = Ll(n.current, null), dr = Sa = r, Qn = 0, gu = null, Ls = Eu = Su = 0, aa = go = null, su !== null) {
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
      var l = _n;
      try {
        if (gd(), Me.current = Yt, Dc) {
          for (var o = rt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dc = !1;
        }
        if (Tt = 0, Yn = Xt = rt = null, gs = !1, Ss = 0, yu.current = null, l === null || l.return === null) {
          Qn = 1, gu = r, _n = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = dr, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var A = T, X = E, Z = X.tag;
            if (!(X.mode & 1) && (Z === 0 || Z === 11 || Z === 15)) {
              var K = X.alternate;
              K ? (X.updateQueue = K.updateQueue, X.memoizedState = K.memoizedState, X.lanes = K.lanes) : (X.updateQueue = null, X.memoizedState = null);
            }
            var me = Ld(m);
            if (me !== null) {
              me.flags &= -257, Yv(me, m, E, d, r), me.mode & 1 && Nd(d, A, r), r = me, T = A;
              var Re = r.updateQueue;
              if (Re === null) {
                var xe = /* @__PURE__ */ new Set();
                xe.add(T), r.updateQueue = xe;
              } else Re.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Nd(d, A, r), Bd();
                break e;
              }
              T = Error(M(426));
            }
          } else if (pn && E.mode & 1) {
            var Dn = Ld(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), Yv(Dn, m, E, d, r), ps(_l(T, E));
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
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ha === null || !Ha.has(L)))) {
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
      } catch (De) {
        r = De, _n === l && l !== null && (_n = l = l.return);
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
    (Qn === 0 || Qn === 3 || Qn === 2) && (Qn = 4), Pn === null || !(Su & 268435455) && !(Eu & 268435455) || Nl(Pn, dr);
  }
  function sf(n, r) {
    var l = St;
    St |= 2;
    var o = nh();
    (Pn !== n || dr !== r) && (qi = null, Tu(n, r));
    do
      try {
        uy();
        break;
      } catch (c) {
        of(n, c);
      }
    while (!0);
    if (gd(), St = l, af.current = o, _n !== null) throw Error(M(261));
    return Pn = null, dr = 0, Qn;
  }
  function uy() {
    for (; _n !== null; ) $d(_n);
  }
  function oy() {
    for (; _n !== null && !Tr(); ) $d(_n);
  }
  function $d(n) {
    var r = Id(n.alternate, n, Sa);
    n.memoizedProps = n.pendingProps, r === null ? rh(n) : _n = r, yu.current = null;
  }
  function rh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Gv(l, r), l !== null) {
          l.flags &= 32767, _n = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Qn = 6, _n = null;
          return;
        }
      } else if (l = Ad(l, r, Sa), l !== null) {
        _n = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        _n = r;
        return;
      }
      _n = r = n;
    } while (r !== null);
    Qn === 0 && (Qn = 5);
  }
  function bu(n, r, l) {
    var o = xt, c = Dr.transition;
    try {
      Dr.transition = null, xt = 1, sy(n, r, l, o);
    } finally {
      Dr.transition = c, xt = o;
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
    if (Io(n, d), n === Pn && (_n = Pn = null, dr = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || lf || (lf = !0, lh(Ui, function() {
      return Ro(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Dr.transition, Dr.transition = null;
      var m = xt;
      xt = 1;
      var E = St;
      St |= 4, yu.current = null, ly(n, l), Xv(l, n), Sv(os), dl = !!ru, os = ru = null, n.current = l, Os(l), Ka(), St = E, xt = m, Dr.transition = d;
    } else n.current = l;
    if (lf && (lf = !1, Ol = n, zs = c), d = n.pendingLanes, d === 0 && (Ha = null), $o(l.stateNode), nr(n, jt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (kl) throw kl = !1, n = Ms, Ms = null, n;
    return zs & 1 && n.tag !== 0 && Ro(), d = n.pendingLanes, d & 1 ? n === Co ? Eo++ : (Eo = 0, Co = n) : Eo = 0, Mr(), null;
  }
  function Ro() {
    if (Ol !== null) {
      var n = Wo(zs), r = Dr.transition, l = xt;
      try {
        if (Dr.transition = null, xt = 16 > n ? 16 : n, Ol === null) var o = !1;
        else {
          if (n = Ol, Ol = null, zs = 0, St & 6) throw Error(M(331));
          var c = St;
          for (St |= 4, Ee = n.current; Ee !== null; ) {
            var d = Ee, m = d.child;
            if (Ee.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var A = E[T];
                  for (Ee = A; Ee !== null; ) {
                    var X = Ee;
                    switch (X.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mo(8, X, d);
                    }
                    var Z = X.child;
                    if (Z !== null) Z.return = X, Ee = Z;
                    else for (; Ee !== null; ) {
                      X = Ee;
                      var K = X.sibling, me = X.return;
                      if (qv(X), X === A) {
                        Ee = null;
                        break;
                      }
                      if (K !== null) {
                        K.return = me, Ee = K;
                        break;
                      }
                      Ee = me;
                    }
                  }
                }
                var Re = d.alternate;
                if (Re !== null) {
                  var xe = Re.child;
                  if (xe !== null) {
                    Re.child = null;
                    do {
                      var Dn = xe.sibling;
                      xe.sibling = null, xe = Dn;
                    } while (xe !== null);
                  }
                }
                Ee = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, Ee = m;
            else e: for (; Ee !== null; ) {
              if (d = Ee, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, Ee = D;
                break e;
              }
              Ee = d.return;
            }
          }
          var x = n.current;
          for (Ee = x; Ee !== null; ) {
            m = Ee;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, Ee = L;
            else e: for (m = x; Ee !== null; ) {
              if (E = Ee, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tf(9, E);
                }
              } catch (De) {
                Rn(E, E.return, De);
              }
              if (E === m) {
                Ee = null;
                break e;
              }
              var ne = E.sibling;
              if (ne !== null) {
                ne.return = E.return, Ee = ne;
                break e;
              }
              Ee = E.return;
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
        xt = l, Dr.transition = r;
      }
    }
    return !1;
  }
  function ah(n, r, l) {
    r = _l(l, r), r = ws(n, r, 1), n = Tl(n, r, 1), r = nn(), n !== null && (fl(n, 1, r), nr(n, r));
  }
  function Rn(n, r, l) {
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
    o !== null && o.delete(r), r = nn(), n.pingedLanes |= n.suspendedLanes & l, Pn === n && (dr & l) === l && (Qn === 4 || Qn === 3 && (dr & 130023424) === dr && 500 > jt() - Pd ? Tu(n, 0) : Ls |= l), nr(n, r);
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
    if (n !== null) if (n.memoizedProps !== r.pendingProps || An.current) tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return tr = !1, ef(n, r, l);
      tr = !!(n.flags & 131072);
    }
    else tr = !1, pn && r.flags & 1048576 && Ov(r, El, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        ja(n, r), n = r.pendingProps;
        var c = ha(r, Cn.current);
        lo(r, l), c = Ye(null, r, o, n, c, l);
        var d = bl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(o) ? (d = !0, lu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Rl(r), c.updater = Ic, r.stateNode = c, c._reactInternals = r, kd(r, o, n, l), r = Md(null, r, o, !0, d, l)) : (r.tag = 0, pn && d && dd(r), xn(null, r, c, l), r = r.child), r;
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
          } else for (Zr = ei(r.stateNode.containerInfo.firstChild), Jr = r, pn = !0, ni = null, l = sr(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Qi(), o === c) {
              r = cr(n, r, l);
              break e;
            }
            xn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bd(r), n === null && md(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, au(o, c) ? m = null : d !== null && au(o, d) && (r.flags |= 32), xs(n, r), xn(n, r, m, l), r.child;
      case 6:
        return n === null && md(r), null;
      case 13:
        return Iv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ri(r, null, o, l) : xn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), Gc(n, r, o, c, l);
      case 7:
        return xn(n, r, r.pendingProps, l), r.child;
      case 8:
        return xn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return xn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, tn(oe, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !An.current) {
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
                    var A = d.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var X = A.pending;
                      X === null ? T.next = T : (T.next = X.next, X.next = T), A.pending = T;
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
          xn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = $t(c), o = o(c), r.flags |= 1, xn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ta(o, r.pendingProps), c = ta(o.type, c), na(n, r, o, c, l);
      case 15:
        return hu(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ta(o, c), ja(n, r), r.tag = 1, jn(o) ? (n = !0, lu(r)) : n = !1, lo(r, l), Bv(r, o, c), kd(r, o, c, l), Md(null, r, o, !0, n, l);
      case 19:
        return ra(n, r, l);
      case 22:
        return lt(n, r, l);
    }
    throw Error(M(156, r.tag));
  };
  function lh(n, r) {
    return ln(n, r);
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
      if (n = n.$$typeof, n === Ft) return 11;
      if (n === Nt) return 14;
    }
    return 2;
  }
  function Ll(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function cf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Qd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case tt:
        return Ml(l.children, c, d, r);
      case $e:
        m = 8, c |= 8;
        break;
      case gn:
        return n = Pa(12, l, r, c | 2), n.elementType = gn, n.lanes = d, n;
      case pt:
        return n = Pa(13, l, r, c), n.elementType = pt, n.lanes = d, n;
      case Ue:
        return n = Pa(19, l, r, c), n.elementType = Ue, n.lanes = d, n;
      case at:
        return To(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Ot:
            m = 10;
            break e;
          case rn:
            m = 9;
            break e;
          case Ft:
            m = 11;
            break e;
          case Nt:
            m = 14;
            break e;
          case dt:
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
    return n = Pa(22, n, o, r), n.elementType = at, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
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
    return { $$typeof: we, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function sh(n) {
    if (!n) return ht;
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
            if (jn(r.type)) {
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
      if (jn(l)) return kv(n, l, r);
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
          var A = pf(m);
          d.call(A);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", fh);
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
  }, _t = function(n) {
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
    return xt;
  }, Ke = function(n, r) {
    var l = xt;
    try {
      return xt = n, r();
    } finally {
      xt = l;
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
  var hy = { usingClientEntryPoint: !1, Events: [cs, Le, Ii, Da, Li, uf] }, bo = { findFiberByHostInstance: iu, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: bo.bundleType, version: bo.version, rendererPackageName: bo.rendererPackageName, rendererConfig: bo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Be.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ct(n), n === null ? null : n.stateNode;
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
    return n = ct(r), n = n === null ? null : n.stateNode, n;
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
  var Y = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return Y.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var G = un, M = oT(), Ie = G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = !1;
    function ot(e) {
      Oe = e;
    }
    function Ne(e) {
      if (!Oe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ge("warn", e, a);
      }
    }
    function S(e) {
      if (!Oe) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ge("error", e, a);
      }
    }
    function Ge(e, t, a) {
      {
        var i = Ie.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ve = 0, J = 1, ie = 2, F = 3, ae = 4, q = 5, pe = 6, Ve = 7, on = 8, It = 9, st = 10, Be = 11, wt = 12, we = 13, tt = 14, $e = 15, gn = 16, Ot = 17, rn = 18, Ft = 19, pt = 21, Ue = 22, Nt = 23, dt = 24, at = 25, k = !0, Q = !1, te = !1, w = !1, P = !1, ge = !0, _e = !0, He = !0, Ae = !0, Et = /* @__PURE__ */ new Set(), Ze = {}, Rt = {};
    function Bt(e, t) {
      On(e, t), On(e + "Capture", t);
    }
    function On(e, t) {
      Ze[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ze[e] = t;
      {
        var a = e.toLowerCase();
        Rt[a] = e, e === "onDoubleClick" && (Rt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Et.add(t[i]);
    }
    var Gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ir = Object.prototype.hasOwnProperty;
    function Nn(e) {
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
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), Bn(e);
    }
    function ca(e) {
      if (Cr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Nn(e)), Bn(e);
    }
    function Ga(e, t) {
      if (Cr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), Bn(e);
    }
    function kr(e, t) {
      if (Cr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Nn(e)), Bn(e);
    }
    function $n(e) {
      if (Cr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Nn(e)), Bn(e);
    }
    function qn(e) {
      if (Cr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Nn(e)), Bn(e);
    }
    var Kn = 0, Rr = 1, qa = 2, Mn = 3, lr = 4, Ir = 5, Ni = 6, fa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", le = fa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", je = new RegExp("^[" + fa + "][" + le + "]*$"), ut = {}, Ut = {};
    function sn(e) {
      return ir.call(Ut, e) ? !0 : ir.call(ut, e) ? !1 : je.test(e) ? (Ut[e] = !0, !0) : (ut[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === Kn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fn(e, t, a, i) {
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
      if (t === null || typeof t > "u" || fn(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Mn:
            return !t;
          case lr:
            return t === !1;
          case Ir:
            return isNaN(t);
          case Ni:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function an(e) {
      return At.hasOwnProperty(e) ? At[e] : null;
    }
    function Qt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === qa || t === Mn || t === lr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
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
        Mn,
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
        Mn,
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
        Ni,
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
    var Li = "xlinkHref";
    At[Li] = new Qt(
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
          if (i.type === Mn)
            return a;
          f = e.getAttribute(s);
        }
        return Xn(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function si(e, t, a, i) {
      {
        if (!sn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Ln(a, t), u === "" + a ? a : u;
      }
    }
    function pa(e, t, a, i) {
      var u = an(t);
      if (!cn(t, u, i)) {
        if (Xn(t, a, u, i) && (a = null), i || u === null) {
          if (sn(t)) {
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
            e[p] = v === Mn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, b;
          _ === Mn || _ === lr && a === !0 ? b = "" : (Ln(a, y), b = "" + a, u.sanitizeURL && Mi(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var ur = Symbol.for("react.element"), va = Symbol.for("react.portal"), Qr = Symbol.for("react.fragment"), ci = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zi = Symbol.for("react.provider"), R = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), vt = Symbol.for("react.memo"), Xe = Symbol.for("react.lazy"), yt = Symbol.for("react.scope"), ct = Symbol.for("react.debug_trace_mode"), Tn = Symbol.for("react.offscreen"), ln = Symbol.for("react.legacy_hidden"), dn = Symbol.for("react.cache"), Tr = Symbol.for("react.tracing_marker"), Ka = Symbol.iterator, jt = "@@iterator";
    function hn(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ka && e[Ka] || e[jt];
      return typeof t == "function" ? t : null;
    }
    var nt = Object.assign, di = 0, Ui, ac, Ai, ol, Wr, $o, Or;
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
            log: nt({}, e, {
              value: Ui
            }),
            info: nt({}, e, {
              value: ac
            }),
            warn: nt({}, e, {
              value: Ai
            }),
            error: nt({}, e, {
              value: ol
            }),
            group: nt({}, e, {
              value: Wr
            }),
            groupCollapsed: nt({}, e, {
              value: $o
            }),
            groupEnd: nt({}, e, {
              value: Or
            })
          });
        }
        di < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ji = Ie.ReactCurrentDispatcher, sl;
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
      var b = e ? e.displayName || e.name : "", U = b ? Gr(b) : "";
      return typeof e == "function" && cl.set(e, U), U;
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
        case se:
          return Gr("Suspense");
        case fe:
          return Gr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            return ql(e.render);
          case vt:
            return Io(e.type, t, a);
          case Xe: {
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
        case q:
          return Gr(e.type);
        case gn:
          return Gr("Lazy");
        case we:
          return Gr("Suspense");
        case Ft:
          return Gr("SuspenseList");
        case ve:
        case ie:
        case $e:
          return ql(e.type);
        case Be:
          return ql(e.type.render);
        case J:
          return Gl(e.type);
        default:
          return "";
      }
    }
    function xt(e) {
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
    function _t(e) {
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
        case se:
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
          case W:
            return Wo(e, e.render, "ForwardRef");
          case vt:
            var i = e.displayName || null;
            return i !== null ? i : _t(e.type) || "Memo";
          case Xe: {
            var u = e, s = u._payload, f = u._init;
            try {
              return _t(f(s));
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
    function Ke(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case dt:
          return "Cache";
        case It:
          var i = a;
          return vi(i) + ".Consumer";
        case st:
          var u = a;
          return vi(u._context) + ".Provider";
        case rn:
          return "DehydratedFragment";
        case Be:
          return uc(a, a.render, "ForwardRef");
        case Ve:
          return "Fragment";
        case q:
          return a;
        case ae:
          return "Portal";
        case F:
          return "Root";
        case pe:
          return "Text";
        case gn:
          return _t(a);
        case on:
          return a === ci ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case wt:
          return "Profiler";
        case pt:
          return "Scope";
        case we:
          return "Suspense";
        case Ft:
          return "SuspenseList";
        case at:
          return "TracingMarker";
        case J:
        case ve:
        case Ot:
        case ie:
        case tt:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Kl = Ie.ReactDebugCurrentFrame, Jn = null, qr = !1;
    function Nr() {
      {
        if (Jn === null)
          return null;
        var e = Jn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ke(e);
      }
      return null;
    }
    function hi() {
      return Jn === null ? "" : xt(Jn);
    }
    function En() {
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
    function Lr(e) {
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
    function Na(e) {
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
    function La(e, t) {
      var a = e, i = t.checked, u = nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function Iu(e, t) {
      Pu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !pl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), pl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !$u && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component", t.type), $u = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Lr(t.value != null ? t.value : i),
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
      var u = Lr(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = br(u)) : a.value !== br(u) && (a.value = br(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ce(a, t.type, u) : t.hasOwnProperty("defaultValue") && Ce(a, t.type, Lr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
    function H(e, t) {
      var a = e;
      C(a, t), re(a, t);
    }
    function re(e, t) {
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
    function Ce(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Hi(e.ownerDocument) !== e) && (a == null ? e.defaultValue = br(e._wrapperState.initialValue) : e.defaultValue !== br(a) && (e.defaultValue = br(a)));
    }
    var he = !1, Qe = !1, ft = !1;
    function Ht(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? G.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Qe || (Qe = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ft || (ft = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !he && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), he = !0);
    }
    function Gt(e, t) {
      t.value != null && e.setAttribute("value", br(Lr(t.value)));
    }
    var qt = Array.isArray;
    function it(e) {
      return qt(e);
    }
    var en;
    en = !1;
    function bn() {
      var e = Nr();
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
            var i = it(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, bn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, bn());
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
        for (var g = br(Lr(a)), _ = null, b = 0; b < u.length; b++) {
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
      return nt({}, t, {
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
      var i = nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: br(a._wrapperState.initialValue)
      });
      return i;
    }
    function ev(e, t) {
      var a = e;
      Pu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Zp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Nr() || "A component"), Zp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (it(u)) {
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
        initialValue: Lr(i)
      };
    }
    function tv(e, t) {
      var a = e, i = Lr(t.value), u = Lr(t.defaultValue);
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
    }), Kr = 1, Bi = 3, zn = 8, $i = 9, Xo = 11, vl = function(e, t) {
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
    }, yv = nt({
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
    }, Ku = {}, Xu = new RegExp("^(aria)-[" + le + "]*$"), rd = new RegExp("^(aria)[A-Z][" + le + "]*$");
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
      var wr = {}, ns = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + le + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + le + "]*$");
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
        var v = an(t), y = v !== null && v.type === Kn;
        if (qu.hasOwnProperty(u)) {
          var g = qu[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), wr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), wr[t] = !0, !0;
        return typeof a == "boolean" && fn(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), wr[t] = !0, !0) : y ? !0 : fn(t, a, v, !1) ? (wr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Mn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), wr[t] = !0), !0);
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
        var g = document.createEvent("Event"), _ = !1, b = !0, U = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function V() {
          Cc.removeEventListener(B, Pe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = U);
        }
        var ce = Array.prototype.slice.call(arguments, 3);
        function Pe() {
          _ = !0, V(), a.apply(i, ce), b = !1;
        }
        var ke, kt = !1, Ct = !1;
        function O(N) {
          if (ke = N.error, kt = !0, ke === null && N.colno === 0 && N.lineno === 0 && (Ct = !0), N.defaultPrevented && ke != null && typeof ke == "object")
            try {
              ke._suppressLogging = !0;
            } catch {
            }
        }
        var B = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), Cc.addEventListener(B, Pe, !1), g.initEvent(B, !1, !1), Cc.dispatchEvent(g), j && Object.defineProperty(window, "event", j), _ && b && (kt ? Ct && (ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ke)), window.removeEventListener("error", O), !_)
          return V(), Ec.apply(this, arguments);
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
    ), Un = (
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
    ), ht = (
      /*                   */
      128
    ), Cn = (
      /*            */
      256
    ), An = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), ha = (
      /*                      */
      2048
    ), jn = (
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
    ), ao = Un | gt | Xr | Kt | An | jn | gi, El = gt | tn | An | gi, or = ha | Xr, Fn = yl | fd | ds, uu = Ie.ReactCurrentOwner;
    function zr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Un | jn)) !== Le && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === F ? a : null;
    }
    function Si(e) {
      if (e.tag === we) {
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
      return e.tag === F ? e.stateNode.containerInfo : null;
    }
    function Ov(e) {
      return zr(e) === e;
    }
    function dd(e) {
      {
        var t = uu.current;
        if (t !== null && t.tag === J) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ke(a) || "A component"), i._warnedAboutRefsInRender = !0;
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
      if (i.tag !== F)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Zr(e) {
      var t = Jr(e);
      return t !== null ? pn(t) : null;
    }
    function pn(e) {
      if (e.tag === q || e.tag === pe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = pn(t);
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
      if (e.tag === q || e.tag === pe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ae) {
          var a = pd(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = M.unstable_scheduleCallback, hd = M.unstable_cancelCallback, md = M.unstable_shouldYield, Nv = M.unstable_requestPaint, wn = M.unstable_now, Lv = M.unstable_getCurrentPriorityLevel, Qi = M.unstable_ImmediatePriority, ps = M.unstable_UserBlockingPriority, ou = M.unstable_NormalPriority, vs = M.unstable_LowPriority, io = M.unstable_IdlePriority, Mv = M.unstable_yieldValue, zv = M.unstable_setDisableYieldValue, ri = null, sr = null, oe = null, ma = !1, xr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function yd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        _e && (e = nt({}, e, {
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
          var a = (e.current.flags & ht) === ht;
          if (He) {
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
      if (typeof Mv == "function" && (zv(e), ot(e)), sr && typeof sr.setStrictMode == "function")
        try {
          sr.setStrictMode(ri, e);
        } catch (t) {
          ma || (ma = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function su(e) {
      oe = e;
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
      oe !== null && typeof oe.markCommitStarted == "function" && oe.markCommitStarted(e);
    }
    function Ei() {
      oe !== null && typeof oe.markCommitStopped == "function" && oe.markCommitStopped();
    }
    function Aa(e) {
      oe !== null && typeof oe.markComponentRenderStarted == "function" && oe.markComponentRenderStarted(e);
    }
    function Rl() {
      oe !== null && typeof oe.markComponentRenderStopped == "function" && oe.markComponentRenderStopped();
    }
    function Av(e) {
      oe !== null && typeof oe.markComponentPassiveEffectMountStarted == "function" && oe.markComponentPassiveEffectMountStarted(e);
    }
    function Wi() {
      oe !== null && typeof oe.markComponentPassiveEffectMountStopped == "function" && oe.markComponentPassiveEffectMountStopped();
    }
    function Tl(e) {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStarted == "function" && oe.markComponentPassiveEffectUnmountStarted(e);
    }
    function wc() {
      oe !== null && typeof oe.markComponentPassiveEffectUnmountStopped == "function" && oe.markComponentPassiveEffectUnmountStopped();
    }
    function jv(e) {
      oe !== null && typeof oe.markComponentLayoutEffectMountStarted == "function" && oe.markComponentLayoutEffectMountStarted(e);
    }
    function xc() {
      oe !== null && typeof oe.markComponentLayoutEffectMountStopped == "function" && oe.markComponentLayoutEffectMountStopped();
    }
    function Rd(e) {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStarted == "function" && oe.markComponentLayoutEffectUnmountStarted(e);
    }
    function uo() {
      oe !== null && typeof oe.markComponentLayoutEffectUnmountStopped == "function" && oe.markComponentLayoutEffectUnmountStopped();
    }
    function Ci(e, t, a) {
      oe !== null && typeof oe.markComponentErrored == "function" && oe.markComponentErrored(e, t, a);
    }
    function hs(e, t, a) {
      oe !== null && typeof oe.markComponentSuspended == "function" && oe.markComponentSuspended(e, t, a);
    }
    function ms(e) {
      oe !== null && typeof oe.markLayoutEffectsStarted == "function" && oe.markLayoutEffectsStarted(e);
    }
    function cu() {
      oe !== null && typeof oe.markLayoutEffectsStopped == "function" && oe.markLayoutEffectsStopped();
    }
    function Td(e) {
      oe !== null && typeof oe.markPassiveEffectsStarted == "function" && oe.markPassiveEffectsStarted(e);
    }
    function oo() {
      oe !== null && typeof oe.markPassiveEffectsStopped == "function" && oe.markPassiveEffectsStopped();
    }
    function bd(e) {
      oe !== null && typeof oe.markRenderStarted == "function" && oe.markRenderStarted(e);
    }
    function wd() {
      oe !== null && typeof oe.markRenderYielded == "function" && oe.markRenderYielded();
    }
    function mn() {
      oe !== null && typeof oe.markRenderStopped == "function" && oe.markRenderStopped();
    }
    function _c(e) {
      oe !== null && typeof oe.markRenderScheduled == "function" && oe.markRenderScheduled(e);
    }
    function xd(e, t) {
      oe !== null && typeof oe.markForceUpdateScheduled == "function" && oe.markForceUpdateScheduled(e, t);
    }
    function ys(e, t) {
      oe !== null && typeof oe.markStateUpdateScheduled == "function" && oe.markStateUpdateScheduled(e, t);
    }
    var Me = (
      /*                         */
      0
    ), mt = (
      /*                 */
      1
    ), Tt = (
      /*                    */
      2
    ), rt = (
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
    var _d = 31, $ = (
      /*                        */
      0
    ), Hn = (
      /*                          */
      0
    ), Ye = (
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
    ), Nc = (
      /*                        */
      512
    ), Lc = (
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
        if (e & Ye)
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
        case Ye:
          return Ye;
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
        case Nc:
        case Lc:
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
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & Hv;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = bs(p);
        else {
          var v = f & s;
          v !== $ && (i = bs(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = bs(y) : s !== $ && (i = bs(s));
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
      (i & Zn) !== $ && (i |= a & ea);
      var b = e.entangledLanes;
      if (b !== $)
        for (var U = e.entanglements, j = i & b; j > 0; ) {
          var V = xn(j), ce = 1 << V;
          i |= U[V], j &= ~ce;
        }
      return i;
    }
    function Dd(e, t) {
      for (var a = e.eventTimes, i = Yt; t > 0; ) {
        var u = xn(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Ic(e, t) {
      switch (e) {
        case Ye:
        case bl:
        case Zn:
          return t + 250;
        case er:
        case ea:
        case fu:
        case so:
        case kc:
        case Oc:
        case Nc:
        case Lc:
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
        var p = xn(f), v = 1 << p, y = s[p];
        y === Yt ? ((v & i) === $ || (v & u) !== $) && (s[p] = Ic(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Bv(e) {
      return bs(e.pendingLanes);
    }
    function Qc(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== $ ? t : t & ya ? ya : $;
    }
    function kd(e) {
      return (e & Ye) !== $;
    }
    function _l(e) {
      return (e & Hv) !== $;
    }
    function Wc(e) {
      return (e & Cs) === e;
    }
    function Od(e) {
      var t = Ye | Zn | ea;
      return (e & t) === $;
    }
    function ry(e) {
      return (e & wl) === e;
    }
    function ws(e, t) {
      var a = bl | Zn | er | ea;
      return (t & a) !== $;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Nd(e) {
      return (e & wl) !== $;
    }
    function Ld() {
      var e = $c;
      return $c <<= 1, ($c & wl) === $ && ($c = so), e;
    }
    function Yv() {
      var e = Yc;
      return Yc <<= 1, (Yc & Cs) === $ && (Yc = pu), e;
    }
    function vu(e) {
      return e & -e;
    }
    function tr(e) {
      return vu(e);
    }
    function xn(e) {
      return 31 - Yn(e);
    }
    function Gc(e) {
      return xn(e);
    }
    function na(e, t) {
      return (e & t) !== $;
    }
    function hu(e, t) {
      return (e & t) === t;
    }
    function lt(e, t) {
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
      return e !== Hn && e < t ? e : t;
    }
    function Kc(e) {
      for (var t = [], a = 0; a < _d; a++)
        t.push(e);
      return t;
    }
    function vo(e, t, a) {
      e.pendingLanes |= t, t !== xl && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = Gc(t);
      i[u] = a;
    }
    function zd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = xn(i), s = 1 << u;
        a[u] = Yt, i &= ~s;
      }
    }
    function Xc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Iv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xn(f), v = 1 << p;
        i[p] = $, u[p] = Yt, s[p] = Yt, f &= ~v;
      }
    }
    function _s(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = xn(u), f = 1 << s;
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
        case Nc:
        case Lc:
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
          i = Hn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Hn ? Hn : i;
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
    var ra = Ye, ja = Zn, cr = ea, ef = xl, ho = Hn;
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
    function Ee(e) {
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
    var rf = !1, ks = [], Ri = null, Ti = null, yn = null, Ur = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Gi = [], Kv = [
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
          yn = null;
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
          return yn = Os(yn, e, t, a, i, p), !0;
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
          if (i === we) {
            var u = Si(a);
            if (u !== null) {
              e.blockedOn = u, nf(e.priority, function() {
                Fd(a);
              });
              return;
            }
          } else if (i === F) {
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
    function Ns(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Ls(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
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
      Ns(e) && a.delete(t);
    }
    function af() {
      rf = !1, Ri !== null && Ns(Ri) && (Ri = null), Ti !== null && Ns(Ti) && (Ti = null), yn !== null && Ns(yn) && (yn = null), Ur.forEach(eh), Fa.forEach(eh);
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
      Ri !== null && yu(Ri, e), Ti !== null && yu(Ti, e), yn !== null && yu(yn, e);
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
    var St = Ie.ReactCurrentBatchConfig, Pn = !0;
    function _n(e) {
      Pn = !!e;
    }
    function dr() {
      return Pn;
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
      Pn && Su(e, t, a, i);
    }
    function Su(e, t, a, i) {
      var u = Ls(e, t, a, i);
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
          s !== null && Ee(s);
          var f = Ls(e, t, a, i);
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
    function Ls(e, t, a, i) {
      Eu = null;
      var u = hc(i), s = Bs(u);
      if (s !== null) {
        var f = zr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === we) {
            var v = Si(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === F) {
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
          var t = Lv();
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
      return nt(t.prototype, {
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
    }, Ca = nn(Ea), nr = nt({}, Ea, {
      view: 0,
      detail: 0
    }), th = nn(nr), As, js, Fs;
    function Nl(e) {
      e !== Fs && (Fs && e.type === "mousemove" ? (As = e.screenX - Fs.screenX, js = e.screenY - Fs.screenY) : (As = 0, js = 0), Fs = e);
    }
    var Hs = nt({}, nr, {
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
        return "movementX" in e ? e.movementX : (Nl(e), As);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : js;
      }
    }), uf = nn(Hs), Ru = nt({}, Hs, {
      dataTransfer: 0
    }), Vd = nn(Ru), Tu = nt({}, nr, {
      relatedTarget: 0
    }), of = nn(Tu), nh = nt({}, Ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Bd = nn(nh), sf = nt({}, Ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uy = nn(sf), oy = nt({}, Ea, {
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
    function Rn(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ah[e];
      return i ? !!a[i] : !1;
    }
    function Yd(e) {
      return Rn;
    }
    var ih = nt({}, nr, {
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
    }), cy = nn(ih), fy = nt({}, Hs, {
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
    }), Id = nn(fy), lh = nt({}, nr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Yd
    }), dy = nn(lh), Pa = nt({}, Ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Qd = nn(Pa), py = nt({}, Hs, {
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
    }), Ll = nn(py), cf = [9, 13, 27, 32], Ml = 229, To = Gn && "CompositionEvent" in window, wu = null;
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
    function A(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", Z);
    }
    function X() {
      r && (r.detachEvent("onpropertychange", Z), r = null, l = null);
    }
    function Z(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function K(e, t, a) {
      e === "focusin" ? (X(), A(t, a)) : e === "focusout" && X();
    }
    function me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function Re(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function xe(e, t) {
      if (e === "click")
        return m(t);
    }
    function Dn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function D(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ce(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? bf(a) : window, v, y;
      if (o(p) ? v = E : bo(p) ? T ? v = Dn : (v = me, y = K) : Re(p) && (v = xe), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && D(p);
    }
    function L() {
      On("onMouseEnter", ["mouseout", "mouseover"]), On("onMouseLeave", ["mouseout", "mouseover"]), On("onPointerEnter", ["pointerout", "pointerover"]), On("onPointerLeave", ["pointerout", "pointerover"]);
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
            var V = zr(U);
            (U !== V || U.tag !== q && U.tag !== pe) && (U = null);
          }
        } else
          b = null, U = a;
        if (b !== U) {
          var ce = uf, Pe = "onMouseLeave", ke = "onMouseEnter", kt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ce = Id, Pe = "onPointerLeave", ke = "onPointerEnter", kt = "pointer");
          var Ct = b == null ? g : bf(b), O = U == null ? g : bf(U), B = new ce(Pe, kt + "leave", b, i, u);
          B.target = Ct, B.relatedTarget = O;
          var N = null, ee = Bs(u);
          if (ee === a) {
            var Se = new ce(ke, kt + "enter", U, i, u);
            Se.target = O, Se.relatedTarget = Ct, N = Se;
          }
          NT(e, B, N, b, U);
        }
      }
    }
    function De(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Te = typeof Object.is == "function" ? Object.is : De;
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
    function qe(e) {
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
      for (var a = qe(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = qe(rr(a));
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
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
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
            v = Id;
            break;
        }
        var g = (s & tu) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = kT(a, p, i.type, g, _);
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
    bT(), L(), gf(), ET(), sh();
    function xT(e, t, a, i, u, s, f) {
      wT(e, t, a, i, u, s);
      var p = (s & ld) === 0;
      p && (ne(e, t, a, i, u), x(e, t, a, i, u), TT(e, t, a, i, u), yf(e, t, a, i, u));
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
          var g = t[y], _ = g.instance, b = g.currentTarget, U = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          wE(e, U, b), i = _;
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
    function Sn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = aw(t), u = LT(e);
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
        e[vh] = !0, Et.forEach(function(a) {
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
      return e === t || e.nodeType === zn && e.parentNode === t;
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
            if (v === F || v === ae) {
              var y = p.stateNode.containerInfo;
              if (DE(y, f))
                break;
              if (v === ae)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === F || _ === ae) {
                    var b = g.stateNode.containerInfo;
                    if (DE(b, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var U = Bs(y);
                if (U === null)
                  return;
                var j = U.tag;
                if (j === q || j === pe) {
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
        var _ = y, b = _.stateNode, U = _.tag;
        if (U === q && b !== null && (g = b, p !== null)) {
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
        if (p === q && f !== null) {
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
      while (e && e.tag !== q);
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
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === q && g !== null) {
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
      var s = i && u ? OT(i, u) : null;
      i !== null && kE(e, t, i, s, !1), u !== null && a !== null && kE(e, a, u, s, !0);
    }
    function LT(e, t) {
      return e + "__bubble";
    }
    var Va = !1, tp = "dangerouslySetInnerHTML", mh = "suppressContentEditableWarning", xo = "suppressHydrationWarning", OE = "autoFocus", Ps = "children", Vs = "style", yh = "__html", wy, gh, np, NE, Sh, LE, ME;
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
        registrationNameDependencies: Ze,
        possibleRegistrationNames: Rt
      });
    }, LE = Gn && !document.documentMode, np = function(e, t, a) {
      if (!Va) {
        var i = Eh(a), u = Eh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, NE = function(e) {
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
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && k))
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
          else s === mh || s === xo || s === OE || (Ze.hasOwnProperty(s) ? f != null && (typeof f != "function" && Sh(s, f), s === "onScroll" && Sn("scroll", t)) : f != null && pa(t, s, f, u));
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
          Sn("cancel", e), Sn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            Sn(Jd[f], e);
          s = a;
          break;
        case "source":
          Sn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e), s = a;
          break;
        case "details":
          Sn("toggle", e), s = a;
          break;
        case "input":
          Iu(e, a), s = La(e, a), Sn("invalid", e);
          break;
        case "option":
          Ht(e, a), s = a;
          break;
        case "select":
          Ko(e, a), s = eu(e, a), Sn("invalid", e);
          break;
        case "textarea":
          ev(e, a), s = sc(e, a), Sn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (pc(t, s), AT(t, e, i, s, u), t) {
        case "input":
          Na(e), z(e, a, !1);
          break;
        case "textarea":
          Na(e), nv(e);
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
          f = La(e, a), p = La(e, i), s = [];
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
          } else v === tp || v === Ps || v === mh || v === xo || v === OE || (Ze.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
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
            var j = b ? b[yh] : void 0, V = U ? U[yh] : void 0;
            j != null && V !== j && (s = s || []).push(v, j);
          } else v === Ps ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === mh || v === xo || (Ze.hasOwnProperty(v) ? (b != null && (typeof b != "function" && Sh(v, b), v === "onScroll" && Sn("scroll", e)), !s && U !== b && (s = [])) : (s = s || []).push(v, b));
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
          Sn("cancel", e), Sn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Sn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            Sn(Jd[y], e);
          break;
        case "source":
          Sn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Sn("error", e), Sn("load", e);
          break;
        case "details":
          Sn("toggle", e);
          break;
        case "input":
          Iu(e, a), Sn("invalid", e);
          break;
        case "option":
          Ht(e, a);
          break;
        case "select":
          Ko(e, a), Sn("invalid", e);
          break;
        case "textarea":
          ev(e, a), Sn("invalid", e);
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
          var V = a[j];
          if (j === Ps)
            typeof V == "string" ? e.textContent !== V && (a[xo] !== !0 && Ch(e.textContent, V, s, f), U = [Ps, V]) : typeof V == "number" && e.textContent !== "" + V && (a[xo] !== !0 && Ch(e.textContent, V, s, f), U = [Ps, "" + V]);
          else if (Ze.hasOwnProperty(j))
            V != null && (typeof V != "function" && Sh(j, V), j === "onScroll" && Sn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ce = void 0, Pe = an(j);
            if (a[xo] !== !0) {
              if (!(j === mh || j === xo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === tp) {
                  var ke = e.innerHTML, kt = V ? V[yh] : void 0;
                  if (kt != null) {
                    var Ct = ME(e, kt);
                    Ct !== ke && np(j, ke, Ct);
                  }
                } else if (j === Vs) {
                  if (v.delete(j), LE) {
                    var O = Xm(V);
                    ce = e.getAttribute("style"), O !== ce && np(j, ce, O);
                  }
                } else if (p)
                  v.delete(j.toLowerCase()), ce = si(e, j, V), V !== ce && np(j, ce, V);
                else if (!cn(j, Pe, p) && !Xn(j, V, Pe, p)) {
                  var B = !1;
                  if (Pe !== null)
                    v.delete(Pe.attributeName), ce = Wl(e, j, V, Pe);
                  else {
                    var N = i;
                    if (N === Ja && (N = Zf(t)), N === Ja)
                      v.delete(j.toLowerCase());
                    else {
                      var ee = $T(j);
                      ee !== null && ee !== j && (B = !0, v.delete(ee)), v.delete(j);
                    }
                    ce = si(e, j, V);
                  }
                  var Se = P;
                  !Se && V !== ce && !B && np(j, ce, V);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[xo] !== !0 && NE(v), t) {
        case "input":
          Na(e), z(e, a, !0);
          break;
        case "textarea":
          Na(e), nv(e);
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
          H(e, a);
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
        var a = nt({}, e || AE), i = {
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
    var Th = "suppressHydrationWarning", bh = "$", wh = "/$", ip = "$?", lp = "$!", JT = "style", Oy = null, Ny = null;
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
          var s = i === zn ? e.parentNode : e, f = s.namespaceURI || null;
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
      Oy = dr(), Ny = hT();
      var t = null;
      return _n(!1), t;
    }
    function nb(e) {
      mT(Ny), _n(Oy), Oy = null, Ny = null;
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
    function Ly(e, t) {
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
      e.nodeType === zn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Rh(a);
    }
    function yb(e, t, a) {
      e.insertBefore(t, a);
    }
    function gb(e, t, a) {
      e.nodeType === zn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Sb(e, t) {
      e.removeChild(t);
    }
    function Eb(e, t) {
      e.nodeType === zn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === zn) {
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
      e.nodeType === zn ? Uy(e.parentNode, t) : e.nodeType === Kr && Uy(e, t), Dr(e);
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
      return e.nodeType !== zn ? null : e;
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
    function Nb(e, t) {
      e._reactRetry = t;
    }
    function xh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Bi)
          break;
        if (t === zn) {
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
    function Lb(e) {
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
      var y = (s.mode & mt) !== Me;
      return YT(e, t, a, p, i, y, f);
    }
    function Ab(e, t, a, i) {
      return sp(a, e), a.mode & mt, IT(e, t);
    }
    function jb(e, t) {
      sp(t, e);
    }
    function Fb(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
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
        if (t.nodeType === zn) {
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
      t.nodeType === Kr ? xy(e, t) : t.nodeType === zn || _y(e, t);
    }
    function Ib(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? xy(a, t) : t.nodeType === zn || _y(a, t));
      }
    }
    function Qb(e, t, a, i, u) {
      (u || t[Th] !== !0) && (i.nodeType === Kr ? xy(a, i) : i.nodeType === zn || _y(a, i));
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
    function ew(e) {
      Zd(e);
    }
    var Rf = Math.random().toString(36).slice(2), Tf = "__reactFiber$" + Rf, jy = "__reactProps$" + Rf, op = "__reactContainer$" + Rf, Fy = "__reactEvents$" + Rf, tw = "__reactListeners$" + Rf, nw = "__reactHandles$" + Rf;
    function rw(e) {
      delete e[Tf], delete e[jy], delete e[Fy], delete e[tw], delete e[nw];
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
      return t && (t.tag === q || t.tag === pe || t.tag === we || t.tag === F) ? t : null;
    }
    function bf(e) {
      if (e.tag === q || e.tag === pe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Dh(e) {
      return e[jy] || null;
    }
    function Hy(e, t) {
      e[jy] = t;
    }
    function aw(e) {
      var t = e[Fy];
      return t === void 0 && (t = e[Fy] = /* @__PURE__ */ new Set()), t;
    }
    var $E = {}, YE = Ie.ReactDebugCurrentFrame;
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
          var p = Ke(e) || "Unknown";
          Xi(i, s, "context", p);
        }
        return u && IE(e, t, s), s;
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
    function Lh(e) {
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
            var s = Ke(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ke(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ke(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return nt({}, a, f);
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
    function iw(e) {
      {
        if (!Ov(e) || e.tag !== J)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case F:
              return t.stateNode.context;
            case J: {
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
    function lw(e) {
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
    function uw(e) {
      return Is(), (e.flags & fs) !== Le;
    }
    function ow(e) {
      return Is(), Ah;
    }
    function sw() {
      var e = Ou, t = ku, a = t & ~cw(t);
      return a.toString(32) + e;
    }
    function Ys(e, t) {
      Is(), _f[Df++] = Ah, _f[Df++] = Uh, Uh = e, Ah = t;
    }
    function XE(e, t, a) {
      Is(), bi[wi++] = ku, bi[wi++] = Ou, bi[wi++] = $s, $s = e;
      var i = ku, u = Ou, s = jh(i) - 1, f = i & ~(1 << s), p = a + 1, v = jh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), b = f >> y, U = s - y, j = jh(t) + U, V = p << U, ce = V | b, Pe = _ + u;
        ku = 1 << j | ce, Ou = Pe;
      } else {
        var ke = p << s, kt = ke | f, Ct = u;
        ku = 1 << v | kt, Ou = Ct;
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
    function cw(e) {
      return 1 << jh(e) - 1;
    }
    function Wy(e) {
      for (; e === Uh; )
        Uh = _f[--Df], _f[Df] = null, Ah = _f[--Df], _f[Df] = null;
      for (; e === $s; )
        $s = bi[--wi], bi[wi] = null, Ou = bi[--wi], bi[wi] = null, ku = bi[--wi], bi[wi] = null;
    }
    function fw() {
      return Is(), $s !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function dw(e, t) {
      Is(), bi[wi++] = ku, bi[wi++] = Ou, bi[wi++] = $s, ku = t.id, Ou = t.overflow, $s = e;
    }
    function Is() {
      jr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ar = null, xi = null, Ji = !1, Qs = !1, No = null;
    function pw() {
      Ji && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function JE() {
      Qs = !0;
    }
    function vw() {
      return Qs;
    }
    function hw(e) {
      var t = e.stateNode.containerInfo;
      return xi = Mb(t), Ar = e, Ji = !0, No = null, Qs = !1, !0;
    }
    function mw(e, t, a) {
      return xi = zb(t), Ar = e, Ji = !0, No = null, Qs = !1, a !== null && dw(e, a), !0;
    }
    function ZE(e, t) {
      switch (e.tag) {
        case F: {
          Yb(e.stateNode.containerInfo, t);
          break;
        }
        case q: {
          var a = (e.mode & mt) !== Me;
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
        case we: {
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
          case F: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case q:
                var i = t.type;
                t.pendingProps, Wb(a, i);
                break;
              case pe:
                var u = t.pendingProps;
                Gb(a, u);
                break;
            }
            break;
          }
          case q: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case q: {
                var v = t.type, y = t.pendingProps, g = (e.mode & mt) !== Me;
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
              case pe: {
                var _ = t.pendingProps, b = (e.mode & mt) !== Me;
                Jb(
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
          case we: {
            var U = e.memoizedState, j = U.dehydrated;
            if (j !== null) switch (t.tag) {
              case q:
                var V = t.type;
                t.pendingProps, qb(j, V);
                break;
              case pe:
                var ce = t.pendingProps;
                Kb(j, ce);
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
      t.flags = t.flags & -4097 | Un, Gy(e, t);
    }
    function nC(e, t) {
      switch (e.tag) {
        case q: {
          var a = e.type;
          e.pendingProps;
          var i = _b(t, a);
          return i !== null ? (e.stateNode = i, Ar = e, xi = Lb(i), !0) : !1;
        }
        case pe: {
          var u = e.pendingProps, s = Db(t, u);
          return s !== null ? (e.stateNode = s, Ar = e, xi = null, !0) : !1;
        }
        case we: {
          var f = kb(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: fw(),
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
      return (e.mode & mt) !== Me && (e.flags & ht) === Le;
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
    function yw(e, t, a) {
      var i = e.stateNode, u = !Qs, s = Ub(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function gw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = Ab(t, a, e);
      if (i) {
        var u = Ar;
        if (u !== null)
          switch (u.tag) {
            case F: {
              var s = u.stateNode.containerInfo, f = (u.mode & mt) !== Me;
              Bb(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case q: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & mt) !== Me;
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
    function Sw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      jb(a, e);
    }
    function Ew(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Fb(a);
    }
    function rC(e) {
      for (var t = e.return; t !== null && t.tag !== q && t.tag !== F && t.tag !== we; )
        t = t.return;
      Ar = t;
    }
    function Fh(e) {
      if (e !== Ar)
        return !1;
      if (!Ji)
        return rC(e), Ji = !0, !1;
      if (e.tag !== F && (e.tag !== q || Vb(e.type) && !Ly(e.type, e.memoizedProps))) {
        var t = xi;
        if (t)
          if (qy(e))
            aC(e), Ky();
          else
            for (; t; )
              eC(e, t), t = up(t);
      }
      return rC(e), e.tag === we ? xi = Ew(e) : xi = Ar ? up(e.stateNode) : null, !0;
    }
    function Cw() {
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
      No !== null && (JR(No), No = null);
    }
    function jr() {
      return Ji;
    }
    function Jy(e) {
      No === null ? No = [e] : No.push(e);
    }
    var Rw = Ie.ReactCurrentBatchConfig, Tw = null;
    function bw() {
      return Rw.transition;
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
      var ww = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & rt && (t = a), a = a.return;
        return t;
      }, Ws = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Gs = /* @__PURE__ */ new Set();
      Zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & rt && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, Zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(b) {
          e.add(Ke(b) || "Component"), Gs.add(b.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(b) {
          t.add(Ke(b) || "Component"), Gs.add(b.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(b) {
          a.add(Ke(b) || "Component"), Gs.add(b.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(b) {
          i.add(Ke(b) || "Component"), Gs.add(b.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(b) {
          u.add(Ke(b) || "Component"), Gs.add(b.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(b) {
          s.add(Ke(b) || "Component"), Gs.add(b.type);
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
          Ne(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ws(a);
          Ne(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Ws(u);
          Ne(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Hh = /* @__PURE__ */ new Map(), lC = /* @__PURE__ */ new Set();
      Zi.recordLegacyContextWarning = function(e, t) {
        var a = ww(e);
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
              i.add(Ke(s) || "Component"), lC.add(s.type);
            });
            var u = Ws(i);
            try {
              Wt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              En();
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
        var a = Ke(t) || "Component";
        ng[a] || (ng[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function xw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & rt || ge) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== J) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !xw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ke(e) || "Component";
          tg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== J)
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
        var t = Ke(e) || "Component";
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
      function t(O, B) {
        if (e) {
          var N = O.deletions;
          N === null ? (O.deletions = [B], O.flags |= Xr) : N.push(B);
        }
      }
      function a(O, B) {
        if (!e)
          return null;
        for (var N = B; N !== null; )
          t(O, N), N = N.sibling;
        return null;
      }
      function i(O, B) {
        for (var N = /* @__PURE__ */ new Map(), ee = B; ee !== null; )
          ee.key !== null ? N.set(ee.key, ee) : N.set(ee.index, ee), ee = ee.sibling;
        return N;
      }
      function u(O, B) {
        var N = rc(O, B);
        return N.index = 0, N.sibling = null, N;
      }
      function s(O, B, N) {
        if (O.index = N, !e)
          return O.flags |= fs, B;
        var ee = O.alternate;
        if (ee !== null) {
          var Se = ee.index;
          return Se < B ? (O.flags |= Un, B) : Se;
        } else
          return O.flags |= Un, B;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Un), O;
      }
      function p(O, B, N, ee) {
        if (B === null || B.tag !== pe) {
          var Se = JS(N, O.mode, ee);
          return Se.return = O, Se;
        } else {
          var de = u(B, N);
          return de.return = O, de;
        }
      }
      function v(O, B, N, ee) {
        var Se = N.type;
        if (Se === Qr)
          return g(O, B, N.props.children, ee, N.key);
        if (B !== null && (B.elementType === Se || // Keep this check inline so it only runs on the false path:
        v0(B, N) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Se == "object" && Se !== null && Se.$$typeof === Xe && oC(Se) === B.type)) {
          var de = u(B, N.props);
          return de.ref = yp(O, B, N), de.return = O, de._debugSource = N._source, de._debugOwner = N._owner, de;
        }
        var We = XS(N, O.mode, ee);
        return We.ref = yp(O, B, N), We.return = O, We;
      }
      function y(O, B, N, ee) {
        if (B === null || B.tag !== ae || B.stateNode.containerInfo !== N.containerInfo || B.stateNode.implementation !== N.implementation) {
          var Se = ZS(N, O.mode, ee);
          return Se.return = O, Se;
        } else {
          var de = u(B, N.children || []);
          return de.return = O, de;
        }
      }
      function g(O, B, N, ee, Se) {
        if (B === null || B.tag !== Ve) {
          var de = Bo(N, O.mode, ee, Se);
          return de.return = O, de;
        } else {
          var We = u(B, N);
          return We.return = O, We;
        }
      }
      function _(O, B, N) {
        if (typeof B == "string" && B !== "" || typeof B == "number") {
          var ee = JS("" + B, O.mode, N);
          return ee.return = O, ee;
        }
        if (typeof B == "object" && B !== null) {
          switch (B.$$typeof) {
            case ur: {
              var Se = XS(B, O.mode, N);
              return Se.ref = yp(O, null, B), Se.return = O, Se;
            }
            case va: {
              var de = ZS(B, O.mode, N);
              return de.return = O, de;
            }
            case Xe: {
              var We = B._payload, et = B._init;
              return _(O, et(We), N);
            }
          }
          if (it(B) || hn(B)) {
            var Zt = Bo(B, O.mode, N, null);
            return Zt.return = O, Zt;
          }
          Ph(O, B);
        }
        return typeof B == "function" && Vh(O), null;
      }
      function b(O, B, N, ee) {
        var Se = B !== null ? B.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number")
          return Se !== null ? null : p(O, B, "" + N, ee);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ur:
              return N.key === Se ? v(O, B, N, ee) : null;
            case va:
              return N.key === Se ? y(O, B, N, ee) : null;
            case Xe: {
              var de = N._payload, We = N._init;
              return b(O, B, We(de), ee);
            }
          }
          if (it(N) || hn(N))
            return Se !== null ? null : g(O, B, N, ee, null);
          Ph(O, N);
        }
        return typeof N == "function" && Vh(O), null;
      }
      function U(O, B, N, ee, Se) {
        if (typeof ee == "string" && ee !== "" || typeof ee == "number") {
          var de = O.get(N) || null;
          return p(B, de, "" + ee, Se);
        }
        if (typeof ee == "object" && ee !== null) {
          switch (ee.$$typeof) {
            case ur: {
              var We = O.get(ee.key === null ? N : ee.key) || null;
              return v(B, We, ee, Se);
            }
            case va: {
              var et = O.get(ee.key === null ? N : ee.key) || null;
              return y(B, et, ee, Se);
            }
            case Xe:
              var Zt = ee._payload, Mt = ee._init;
              return U(O, B, N, Mt(Zt), Se);
          }
          if (it(ee) || hn(ee)) {
            var Wn = O.get(N) || null;
            return g(B, Wn, ee, Se, null);
          }
          Ph(B, ee);
        }
        return typeof ee == "function" && Vh(B), null;
      }
      function j(O, B, N) {
        {
          if (typeof O != "object" || O === null)
            return B;
          switch (O.$$typeof) {
            case ur:
            case va:
              uC(O, N);
              var ee = O.key;
              if (typeof ee != "string")
                break;
              if (B === null) {
                B = /* @__PURE__ */ new Set(), B.add(ee);
                break;
              }
              if (!B.has(ee)) {
                B.add(ee);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ee);
              break;
            case Xe:
              var Se = O._payload, de = O._init;
              j(de(Se), B, N);
              break;
          }
        }
        return B;
      }
      function V(O, B, N, ee) {
        for (var Se = null, de = 0; de < N.length; de++) {
          var We = N[de];
          Se = j(We, Se, O);
        }
        for (var et = null, Zt = null, Mt = B, Wn = 0, zt = 0, Vn = null; Mt !== null && zt < N.length; zt++) {
          Mt.index > zt ? (Vn = Mt, Mt = null) : Vn = Mt.sibling;
          var oa = b(O, Mt, N[zt], ee);
          if (oa === null) {
            Mt === null && (Mt = Vn);
            break;
          }
          e && Mt && oa.alternate === null && t(O, Mt), Wn = s(oa, Wn, zt), Zt === null ? et = oa : Zt.sibling = oa, Zt = oa, Mt = Vn;
        }
        if (zt === N.length) {
          if (a(O, Mt), jr()) {
            var Yr = zt;
            Ys(O, Yr);
          }
          return et;
        }
        if (Mt === null) {
          for (; zt < N.length; zt++) {
            var oi = _(O, N[zt], ee);
            oi !== null && (Wn = s(oi, Wn, zt), Zt === null ? et = oi : Zt.sibling = oi, Zt = oi);
          }
          if (jr()) {
            var wa = zt;
            Ys(O, wa);
          }
          return et;
        }
        for (var xa = i(O, Mt); zt < N.length; zt++) {
          var sa = U(xa, O, zt, N[zt], ee);
          sa !== null && (e && sa.alternate !== null && xa.delete(sa.key === null ? zt : sa.key), Wn = s(sa, Wn, zt), Zt === null ? et = sa : Zt.sibling = sa, Zt = sa);
        }
        if (e && xa.forEach(function(Gf) {
          return t(O, Gf);
        }), jr()) {
          var ju = zt;
          Ys(O, ju);
        }
        return et;
      }
      function ce(O, B, N, ee) {
        var Se = hn(N);
        if (typeof Se != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          N[Symbol.toStringTag] === "Generator" && (eg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), eg = !0), N.entries === Se && (Zy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zy = !0);
          var de = Se.call(N);
          if (de)
            for (var We = null, et = de.next(); !et.done; et = de.next()) {
              var Zt = et.value;
              We = j(Zt, We, O);
            }
        }
        var Mt = Se.call(N);
        if (Mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Wn = null, zt = null, Vn = B, oa = 0, Yr = 0, oi = null, wa = Mt.next(); Vn !== null && !wa.done; Yr++, wa = Mt.next()) {
          Vn.index > Yr ? (oi = Vn, Vn = null) : oi = Vn.sibling;
          var xa = b(O, Vn, wa.value, ee);
          if (xa === null) {
            Vn === null && (Vn = oi);
            break;
          }
          e && Vn && xa.alternate === null && t(O, Vn), oa = s(xa, oa, Yr), zt === null ? Wn = xa : zt.sibling = xa, zt = xa, Vn = oi;
        }
        if (wa.done) {
          if (a(O, Vn), jr()) {
            var sa = Yr;
            Ys(O, sa);
          }
          return Wn;
        }
        if (Vn === null) {
          for (; !wa.done; Yr++, wa = Mt.next()) {
            var ju = _(O, wa.value, ee);
            ju !== null && (oa = s(ju, oa, Yr), zt === null ? Wn = ju : zt.sibling = ju, zt = ju);
          }
          if (jr()) {
            var Gf = Yr;
            Ys(O, Gf);
          }
          return Wn;
        }
        for (var qp = i(O, Vn); !wa.done; Yr++, wa = Mt.next()) {
          var Yl = U(qp, O, Yr, wa.value, ee);
          Yl !== null && (e && Yl.alternate !== null && qp.delete(Yl.key === null ? Yr : Yl.key), oa = s(Yl, oa, Yr), zt === null ? Wn = Yl : zt.sibling = Yl, zt = Yl);
        }
        if (e && qp.forEach(function(J_) {
          return t(O, J_);
        }), jr()) {
          var X_ = Yr;
          Ys(O, X_);
        }
        return Wn;
      }
      function Pe(O, B, N, ee) {
        if (B !== null && B.tag === pe) {
          a(O, B.sibling);
          var Se = u(B, N);
          return Se.return = O, Se;
        }
        a(O, B);
        var de = JS(N, O.mode, ee);
        return de.return = O, de;
      }
      function ke(O, B, N, ee) {
        for (var Se = N.key, de = B; de !== null; ) {
          if (de.key === Se) {
            var We = N.type;
            if (We === Qr) {
              if (de.tag === Ve) {
                a(O, de.sibling);
                var et = u(de, N.props.children);
                return et.return = O, et._debugSource = N._source, et._debugOwner = N._owner, et;
              }
            } else if (de.elementType === We || // Keep this check inline so it only runs on the false path:
            v0(de, N) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof We == "object" && We !== null && We.$$typeof === Xe && oC(We) === de.type) {
              a(O, de.sibling);
              var Zt = u(de, N.props);
              return Zt.ref = yp(O, de, N), Zt.return = O, Zt._debugSource = N._source, Zt._debugOwner = N._owner, Zt;
            }
            a(O, de);
            break;
          } else
            t(O, de);
          de = de.sibling;
        }
        if (N.type === Qr) {
          var Mt = Bo(N.props.children, O.mode, ee, N.key);
          return Mt.return = O, Mt;
        } else {
          var Wn = XS(N, O.mode, ee);
          return Wn.ref = yp(O, B, N), Wn.return = O, Wn;
        }
      }
      function kt(O, B, N, ee) {
        for (var Se = N.key, de = B; de !== null; ) {
          if (de.key === Se)
            if (de.tag === ae && de.stateNode.containerInfo === N.containerInfo && de.stateNode.implementation === N.implementation) {
              a(O, de.sibling);
              var We = u(de, N.children || []);
              return We.return = O, We;
            } else {
              a(O, de);
              break;
            }
          else
            t(O, de);
          de = de.sibling;
        }
        var et = ZS(N, O.mode, ee);
        return et.return = O, et;
      }
      function Ct(O, B, N, ee) {
        var Se = typeof N == "object" && N !== null && N.type === Qr && N.key === null;
        if (Se && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ur:
              return f(ke(O, B, N, ee));
            case va:
              return f(kt(O, B, N, ee));
            case Xe:
              var de = N._payload, We = N._init;
              return Ct(O, B, We(de), ee);
          }
          if (it(N))
            return V(O, B, N, ee);
          if (hn(N))
            return ce(O, B, N, ee);
          Ph(O, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" ? f(Pe(O, B, "" + N, ee)) : (typeof N == "function" && Vh(O), a(O, B));
      }
      return Ct;
    }
    var Of = sC(!0), cC = sC(!1);
    function _w(e, t) {
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
        h_(a, t), a = a.sibling;
    }
    var ag = Do(null), ig;
    ig = {};
    var Bh = null, Nf = null, lg = null, $h = !1;
    function Yh() {
      Bh = null, Nf = null, lg = null, $h = !1;
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
        if (hu(i.childLanes, t) ? u !== null && !hu(u.childLanes, t) && (u.childLanes = lt(u.childLanes, t)) : (i.childLanes = lt(i.childLanes, t), u !== null && (u.childLanes = lt(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kw(e, t, a) {
      Ow(e, t, a);
    }
    function Ow(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === J) {
                var p = tr(a), v = Nu(Yt, p);
                v.tag = Qh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = lt(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = lt(b.lanes, a)), og(i.return, a, e), s.lanes = lt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === st)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === rn) {
          var U = i.return;
          if (U === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          U.lanes = lt(U.lanes, a);
          var j = U.alternate;
          j !== null && (j.lanes = lt(j.lanes, a)), og(U, a, e), u = i.sibling;
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
            var V = u.sibling;
            if (V !== null) {
              V.return = u.return, u = V;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Lf(e, t) {
      Bh = e, Nf = null, lg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (na(a.lanes, t) && Lp(), a.firstContext = null);
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
        if (Nf === null) {
          if (Bh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Nf = a, Bh.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          Nf = Nf.next = a;
      }
      return t;
    }
    var qs = null;
    function sg(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    function Nw() {
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
    function Lw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Mw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, sg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ih(e, i);
    }
    function Ba(e, t) {
      return Ih(e, t);
    }
    var zw = Ih;
    function Ih(e, t) {
      e.lanes = lt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = lt(a.lanes, t)), a === null && (e.flags & (Un | jn)) !== Le && c0(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = lt(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = lt(a.childLanes, t) : (u.flags & (Un | jn)) !== Le && c0(e), i = u, u = u.return;
      if (i.tag === F) {
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
          lanes: $
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
    function Nu(e, t) {
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
      if (Gh === u && !fg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), fg = !0), Lx()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, zw(e, a);
      } else
        return Mw(e, u, t, a);
    }
    function qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = qc(s, e.pendingLanes);
          var f = lt(s, a);
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
    function Uw(e, t, a, i, u, s) {
      switch (a.tag) {
        case mC: {
          var f = a.payload;
          if (typeof f == "function") {
            fC();
            var p = f.call(s, i, u);
            {
              if (e.mode & rt) {
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
          e.flags = e.flags & -65537 | ht;
        case hC: {
          var v = a.payload, y;
          if (typeof v == "function") {
            fC(), y = v.call(s, i, u);
            {
              if (e.mode & rt) {
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
          return y == null ? i : nt({}, i, y);
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
          var _ = g.updateQueue, b = _.lastBaseUpdate;
          b !== f && (b === null ? _.firstBaseUpdate = y : b.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var U = u.baseState, j = $, V = null, ce = null, Pe = null, ke = s;
        do {
          var kt = ke.lane, Ct = ke.eventTime;
          if (hu(i, kt)) {
            if (Pe !== null) {
              var B = {
                eventTime: Ct,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                tag: ke.tag,
                payload: ke.payload,
                callback: ke.callback,
                next: null
              };
              Pe = Pe.next = B;
            }
            U = Uw(e, u, ke, U, t, a);
            var N = ke.callback;
            if (N !== null && // If the update was already committed, we should not queue its
            // callback again.
            ke.lane !== Hn) {
              e.flags |= tn;
              var ee = u.effects;
              ee === null ? u.effects = [ke] : ee.push(ke);
            }
          } else {
            var O = {
              eventTime: Ct,
              lane: kt,
              tag: ke.tag,
              payload: ke.payload,
              callback: ke.callback,
              next: null
            };
            Pe === null ? (ce = Pe = O, V = U) : Pe = Pe.next = O, j = lt(j, kt);
          }
          if (ke = ke.next, ke === null) {
            if (p = u.shared.pending, p === null)
              break;
            var Se = p, de = Se.next;
            Se.next = null, ke = de, u.lastBaseUpdate = Se, u.shared.pending = null;
          }
        } while (!0);
        Pe === null && (V = U), u.baseState = V, u.firstBaseUpdate = ce, u.lastBaseUpdate = Pe;
        var We = u.shared.interleaved;
        if (We !== null) {
          var et = We;
          do
            j = lt(j, et.lane), et = et.next;
          while (et !== We);
        } else s === null && (u.shared.lanes = $);
        Yp(j), e.lanes = j, e.memoizedState = U;
      }
      Gh = null;
    }
    function Aw(e, t) {
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
          f !== null && (s.callback = null, Aw(f, a));
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
    var jw = 0, RC = 1, TC = 1, Ep = 2, el = Do(jw);
    function yg(e, t) {
      return (e & t) !== 0;
    }
    function zf(e) {
      return e & RC;
    }
    function gg(e, t) {
      return e & RC | t;
    }
    function Fw(e, t) {
      return e | t;
    }
    function zo(e, t) {
      la(el, t, e);
    }
    function Uf(e) {
      ia(el, e);
    }
    function Hw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function em(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === we) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || PE(i) || Ay(i))
              return t;
          }
        } else if (t.tag === Ft && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ht) !== Le;
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
    function Pw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ye = Ie.ReactCurrentDispatcher, Cp = Ie.ReactCurrentBatchConfig, Cg, Af;
    Cg = /* @__PURE__ */ new Set();
    var Ks = $, Jt = null, hr = null, mr = null, tm = !1, Rp = !1, Tp = 0, Vw = 0, Bw = 25, I = null, _i = null, Uo = -1, Rg = !1;
    function Vt() {
      {
        var e = I;
        _i === null ? _i = [e] : _i.push(e);
      }
    }
    function ue() {
      {
        var e = I;
        _i !== null && (Uo++, _i[Uo] !== e && $w(e));
      }
    }
    function jf(e) {
      e != null && !it(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", I, typeof e);
    }
    function $w(e) {
      {
        var t = Ke(Jt);
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
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", I), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, I, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Te(e[a], t[a]))
          return !1;
      return !0;
    }
    function Ff(e, t, a, i, u, s) {
      Ks = s, Jt = t, _i = e !== null ? e._debugHookTypes : null, Uo = -1, Rg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? ye.current = IC : _i !== null ? ye.current = YC : ye.current = $C;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Bw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Rg = !1, hr = null, mr = null, t.updateQueue = null, Uo = -1, ye.current = QC, f = a(i, u);
        } while (Rp);
      }
      ye.current = vm, t._debugHookTypes = _i;
      var v = hr !== null && hr.next !== null;
      if (Ks = $, Jt = null, hr = null, mr = null, I = null, _i = null, Uo = -1, e !== null && (e.flags & Fn) !== (t.flags & Fn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & mt) !== Me && S("Internal React error: Expected static flag was missing. Please notify the React team."), tm = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Hf() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function bC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Xt) !== Me ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = xs(e.lanes, a);
    }
    function wC() {
      if (ye.current = vm, tm) {
        for (var e = Jt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        tm = !1;
      }
      Ks = $, Jt = null, hr = null, mr = null, _i = null, Uo = -1, I = null, FC = !1, Rp = !1, Tp = 0;
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
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Ww.bind(null, Jt, s);
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
        var g = f.next, _ = s.baseState, b = null, U = null, j = null, V = g;
        do {
          var ce = V.lane;
          if (hu(Ks, ce)) {
            if (j !== null) {
              var ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Hn,
                action: V.action,
                hasEagerState: V.hasEagerState,
                eagerState: V.eagerState,
                next: null
              };
              j = j.next = ke;
            }
            if (V.hasEagerState)
              _ = V.eagerState;
            else {
              var kt = V.action;
              _ = e(_, kt);
            }
          } else {
            var Pe = {
              lane: ce,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            };
            j === null ? (U = j = Pe, b = _) : j = j.next = Pe, Jt.lanes = lt(Jt.lanes, ce), Yp(ce);
          }
          V = V.next;
        } while (V !== null && V !== g);
        j === null ? b = _ : j.next = U, Te(_, i.memoizedState) || Lp(), i.memoizedState = _, i.baseState = b, i.baseQueue = j, u.lastRenderedState = _;
      }
      var Ct = u.interleaved;
      if (Ct !== null) {
        var O = Ct;
        do {
          var B = O.lane;
          Jt.lanes = lt(Jt.lanes, B), Yp(B), O = O.next;
        } while (O !== Ct);
      } else f === null && (u.lanes = $);
      var N = u.dispatch;
      return [i.memoizedState, N];
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
        Te(p, i.memoizedState) || Lp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
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
      v && (u.memoizedState = s, Lp());
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
      t.value = a, t.getSnapshot = i, OC(t) && NC(e);
    }
    function kC(e, t, a) {
      var i = function() {
        OC(t) && NC(e);
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
    function NC(e) {
      var t = Ba(e, Ye);
      t !== null && Er(t, e, Ye, Yt);
    }
    function rm(e) {
      var t = Fl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: bg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Gw.bind(null, Jt, a);
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
    function Ng(e) {
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
      return (Jt.mode & Xt) !== Me ? wp(gl | ha | fd, Fr, e, t) : wp(ha | fd, Fr, e, t);
    }
    function xp(e, t) {
      return im(ha, Fr, e, t);
    }
    function Lg(e, t) {
      return wp(gt, jl, e, t);
    }
    function um(e, t) {
      return im(gt, jl, e, t);
    }
    function Mg(e, t) {
      var a = gt;
      return a |= yl, (Jt.mode & Xt) !== Me && (a |= Mr), wp(a, vr, e, t);
    }
    function om(e, t) {
      return im(gt, vr, e, t);
    }
    function LC(e, t) {
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
      return u |= yl, (Jt.mode & Xt) !== Me && (u |= Mr), wp(u, vr, LC.bind(null, t, e), i);
    }
    function sm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return im(gt, vr, LC.bind(null, t, e), i);
    }
    function Yw(e, t) {
    }
    var cm = Yw;
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
          var u = Ld();
          Jt.lanes = lt(Jt.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Lp()), e.memoizedState = a, a;
    }
    function Iw(e, t, a) {
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
          f > 10 && Ne("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Fg() {
      var e = rm(!1), t = e[0], a = e[1], i = Iw.bind(null, a), u = Fl();
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
    function Qw() {
      return FC;
    }
    function Hg() {
      var e = Fl(), t = Mm(), a = t.identifierPrefix, i;
      if (jr()) {
        var u = sw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Vw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function pm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function Ww(e, t, a) {
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
    function Gw(e, t, a) {
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
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ye.current, ye.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Te(y, v)) {
                Lw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ye.current = p;
            }
          }
        }
        var g = vC(e, t, u, i);
        if (g !== null) {
          var _ = ba();
          Er(g, e, i, _), VC(g, t, i);
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
      if (Nd(a)) {
        var i = t.lanes;
        i = qc(i, e.pendingLanes);
        var u = lt(i, a);
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
      unstable_isNewReconciler: Q
    }, $C = null, YC = null, IC = null, QC = null, Hl = null, tl = null, hm = null;
    {
      var Pg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Je = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      $C = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Vt(), jf(t), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Vt(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Vt(), jf(t), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Vt(), jf(a), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Vt(), jf(t), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Vt(), jf(t), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Vt(), jf(t);
          var a = ye.current;
          ye.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Vt();
          var i = ye.current;
          ye.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Vt(), Ng(e);
        },
        useState: function(e) {
          I = "useState", Vt();
          var t = ye.current;
          ye.current = Hl;
          try {
            return rm(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Vt(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", Vt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Vt(), Dg(e, t, a);
        },
        useId: function() {
          return I = "useId", Vt(), Hg();
        },
        unstable_isNewReconciler: Q
      }, YC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ue(), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ue(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ue(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ue(), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ue(), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ue();
          var a = ye.current;
          ye.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ue();
          var i = ye.current;
          ye.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ue(), Ng(e);
        },
        useState: function(e) {
          I = "useState", ue();
          var t = ye.current;
          ye.current = Hl;
          try {
            return rm(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ue(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ue(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", ue(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ue(), Dg(e, t, a);
        },
        useId: function() {
          return I = "useId", ue(), Hg();
        },
        unstable_isNewReconciler: Q
      }, IC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ue(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ue(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ue();
          var a = ye.current;
          ye.current = tl;
          try {
            return dm(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ue();
          var i = ye.current;
          ye.current = tl;
          try {
            return xg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ue(), am();
        },
        useState: function(e) {
          I = "useState", ue();
          var t = ye.current;
          ye.current = tl;
          try {
            return kg(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ue(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ue(), MC(e);
        },
        useTransition: function() {
          return I = "useTransition", ue(), AC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ue(), nm(e, t);
        },
        useId: function() {
          return I = "useId", ue(), pm();
        },
        unstable_isNewReconciler: Q
      }, QC = {
        readContext: function(e) {
          return ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", ue(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", ue(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", ue();
          var a = ye.current;
          ye.current = hm;
          try {
            return dm(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", ue();
          var i = ye.current;
          ye.current = hm;
          try {
            return _g(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", ue(), am();
        },
        useState: function(e) {
          I = "useState", ue();
          var t = ye.current;
          ye.current = hm;
          try {
            return Og(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", ue(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", ue(), zC(e);
        },
        useTransition: function() {
          return I = "useTransition", ue(), jC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", ue(), nm(e, t);
        },
        useId: function() {
          return I = "useId", ue(), pm();
        },
        unstable_isNewReconciler: Q
      }, Hl = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Je(), Vt(), Ug(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Je(), Vt(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Je(), Vt(), lm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Je(), Vt(), zg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Je(), Vt(), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Je(), Vt(), Mg(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Je(), Vt();
          var a = ye.current;
          ye.current = Hl;
          try {
            return Ag(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Je(), Vt();
          var i = ye.current;
          ye.current = Hl;
          try {
            return wg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Je(), Vt(), Ng(e);
        },
        useState: function(e) {
          I = "useState", Je(), Vt();
          var t = ye.current;
          ye.current = Hl;
          try {
            return rm(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Je(), Vt(), void 0;
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Je(), Vt(), jg(e);
        },
        useTransition: function() {
          return I = "useTransition", Je(), Vt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Je(), Vt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Je(), Vt(), Dg(e, t, a);
        },
        useId: function() {
          return I = "useId", Je(), Vt(), Hg();
        },
        unstable_isNewReconciler: Q
      }, tl = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Je(), ue(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Je(), ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Je(), ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Je(), ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Je(), ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Je(), ue(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Je(), ue();
          var a = ye.current;
          ye.current = tl;
          try {
            return dm(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Je(), ue();
          var i = ye.current;
          ye.current = tl;
          try {
            return xg(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Je(), ue(), am();
        },
        useState: function(e) {
          I = "useState", Je(), ue();
          var t = ye.current;
          ye.current = tl;
          try {
            return kg(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Je(), ue(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Je(), ue(), MC(e);
        },
        useTransition: function() {
          return I = "useTransition", Je(), ue(), AC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Je(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Je(), ue(), nm(e, t);
        },
        useId: function() {
          return I = "useId", Je(), ue(), pm();
        },
        unstable_isNewReconciler: Q
      }, hm = {
        readContext: function(e) {
          return Pg(), ar(e);
        },
        useCallback: function(e, t) {
          return I = "useCallback", Je(), ue(), fm(e, t);
        },
        useContext: function(e) {
          return I = "useContext", Je(), ue(), ar(e);
        },
        useEffect: function(e, t) {
          return I = "useEffect", Je(), ue(), xp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return I = "useImperativeHandle", Je(), ue(), sm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return I = "useInsertionEffect", Je(), ue(), um(e, t);
        },
        useLayoutEffect: function(e, t) {
          return I = "useLayoutEffect", Je(), ue(), om(e, t);
        },
        useMemo: function(e, t) {
          I = "useMemo", Je(), ue();
          var a = ye.current;
          ye.current = tl;
          try {
            return dm(e, t);
          } finally {
            ye.current = a;
          }
        },
        useReducer: function(e, t, a) {
          I = "useReducer", Je(), ue();
          var i = ye.current;
          ye.current = tl;
          try {
            return _g(e, t, a);
          } finally {
            ye.current = i;
          }
        },
        useRef: function(e) {
          return I = "useRef", Je(), ue(), am();
        },
        useState: function(e) {
          I = "useState", Je(), ue();
          var t = ye.current;
          ye.current = tl;
          try {
            return Og(e);
          } finally {
            ye.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return I = "useDebugValue", Je(), ue(), cm();
        },
        useDeferredValue: function(e) {
          return I = "useDeferredValue", Je(), ue(), zC(e);
        },
        useTransition: function() {
          return I = "useTransition", Je(), ue(), jC();
        },
        useMutableSource: function(e, t, a) {
          return I = "useMutableSource", Je(), ue(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return I = "useSyncExternalStore", Je(), ue(), nm(e, t);
        },
        useId: function() {
          return I = "useId", Je(), ue(), pm();
        },
        unstable_isNewReconciler: Q
      };
    }
    var Ao = M.unstable_now, WC = 0, mm = -1, _p = -1, ym = -1, Vg = !1, gm = !1;
    function GC() {
      return Vg;
    }
    function qw() {
      gm = !0;
    }
    function Kw() {
      Vg = !1, gm = !1;
    }
    function Xw() {
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
            case F:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case wt:
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
            case F:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case wt:
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
        var a = nt({}, t), i = e.defaultProps;
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
          var a = _t(e) || "Component";
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
        if (e.mode & rt) {
          $t(!0);
          try {
            s = a(i, u);
          } finally {
            $t(!1);
          }
        }
        JC(t, s);
      }
      var f = s == null ? u : nt({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var nS = {
      isMounted: dd,
      enqueueSetState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Nu(u, s);
        f.payload = t, a != null && (Em(a, "setState"), f.callback = a);
        var p = Lo(i, f, s);
        p !== null && (Er(p, i, s, u), qh(p, i, s)), ys(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ro(e), u = ba(), s = Po(i), f = Nu(u, s);
        f.tag = mC, f.payload = t, a != null && (Em(a, "replaceState"), f.callback = a);
        var p = Lo(i, f, s);
        p !== null && (Er(p, i, s, u), qh(p, i, s)), ys(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ro(e), i = ba(), u = Po(a), s = Nu(i, u);
        s.tag = Qh, t != null && (Em(t, "forceUpdate"), s.callback = t);
        var f = Lo(a, s, u);
        f !== null && (Er(f, a, u, i), qh(f, a, u)), xd(a, u);
      }
    };
    function eR(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & rt) {
            $t(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              $t(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", _t(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ze(a, i) || !ze(u, s) : !0;
    }
    function Jw(e, t, a) {
      var i = e.stateNode;
      {
        var u = _t(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rt) === Me && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & rt) === Me && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Zg.has(t) && (Zg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", _t(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !qg.has(t) && (qg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", _t(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || it(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
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
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === zi ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", _t(t) || "Component", v);
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
      if (e.mode & rt) {
        $t(!0);
        try {
          g = new t(a, s);
        } finally {
          $t(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      tR(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var b = _t(t) || "Component";
          Gg.has(b) || (Gg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var U = null, j = null, V = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? U = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (U = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? V = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (V = "UNSAFE_componentWillUpdate"), U !== null || j !== null || V !== null) {
            var ce = _t(t) || "Component", Pe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Kg.has(ce) || (Kg.add(ce), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ce, Pe, U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : "", V !== null ? `
  ` + V : ""));
          }
        }
      }
      return i && IE(e, u, s), g;
    }
    function Zw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ke(e) || "Component"), nS.enqueueReplaceState(t, t.state, null));
    }
    function rR(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ke(e) || "Component";
          Wg.has(s) || (Wg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        nS.enqueueReplaceState(t, t.state, null);
      }
    }
    function rS(e, t, a, i) {
      Jw(e, t, a);
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
          var p = _t(t) || "Component";
          Jg.has(p) || (Jg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & rt && Zi.recordLegacyContextWarning(e, u), Zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (tS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Zw(e, u), Kh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = gt;
        y |= yl, (e.mode & Xt) !== Me && (y |= Mr), e.flags |= y;
      }
    }
    function e1(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = li;
      if (typeof p == "object" && p !== null)
        v = ar(p);
      else {
        var y = wf(e, t, !0);
        v = xf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && rR(e, u, a, v), gC();
      var b = e.memoizedState, U = u.state = b;
      if (Kh(e, a, u, i), U = e.memoizedState, s === a && b === U && !Nh() && !Xh()) {
        if (typeof u.componentDidMount == "function") {
          var j = gt;
          j |= yl, (e.mode & Xt) !== Me && (j |= Mr), e.flags |= j;
        }
        return !1;
      }
      typeof g == "function" && (tS(e, t, g, a), U = e.memoizedState);
      var V = Xh() || eR(e, t, s, a, b, U, v);
      if (V) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ce = gt;
          ce |= yl, (e.mode & Xt) !== Me && (ce |= Mr), e.flags |= ce;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Pe = gt;
          Pe |= yl, (e.mode & Xt) !== Me && (Pe |= Mr), e.flags |= Pe;
        }
        e.memoizedProps = a, e.memoizedState = U;
      }
      return u.props = a, u.state = U, u.context = v, V;
    }
    function t1(e, t, a, i, u) {
      var s = t.stateNode;
      yC(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = li;
      if (typeof g == "object" && g !== null)
        _ = ar(g);
      else {
        var b = wf(t, a, !0);
        _ = xf(t, b);
      }
      var U = a.getDerivedStateFromProps, j = typeof U == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && rR(t, s, i, _), gC();
      var V = t.memoizedState, ce = s.state = V;
      if (Kh(t, i, s, u), ce = t.memoizedState, f === v && V === ce && !Nh() && !Xh())
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= za), !1;
      typeof U == "function" && (tS(t, a, U, i), ce = t.memoizedState);
      var Pe = Xh() || eR(t, a, p, i, V, ce, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      te;
      return Pe ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ce, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ce, _)), typeof s.componentDidUpdate == "function" && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= gt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || V !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = ce), s.props = i, s.state = ce, s.context = _, Pe;
    }
    function Xs(e, t) {
      return {
        value: e,
        source: t,
        stack: xt(t),
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
    function n1(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = n1(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === J)
            return;
          console.error(i);
        }
        var p = u ? Ke(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === F)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ke(e) || "Anonymous";
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
    var r1 = typeof WeakMap == "function" ? WeakMap : Map;
    function aR(e, t, a) {
      var i = Nu(Yt, a);
      i.tag = cg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        qx(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Nu(Yt, a);
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
        }), typeof u != "function" && (na(e.lanes, Ye) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ke(e) || "Unknown"));
      }), i;
    }
    function iR(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new r1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Kx.bind(null, e, t, a);
        xr && Ip(e, a), t.then(s, s);
      }
    }
    function a1(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function i1(e, t) {
      var a = e.tag;
      if ((e.mode & mt) === Me && (a === ve || a === Be || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function lR(e) {
      var t = e;
      do {
        if (t.tag === we && Hw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function uR(e, t, a, i, u) {
      if ((e.mode & mt) === Me) {
        if (e === t)
          e.flags |= Ua;
        else {
          if (e.flags |= ht, a.flags |= ti, a.flags &= -52805, a.tag === J) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ot;
            else {
              var f = Nu(Yt, Ye);
              f.tag = Qh, Lo(a, f, Ye);
            }
          }
          a.lanes = lt(a.lanes, Ye);
        }
        return e;
      }
      return e.flags |= Ua, e.lanes = u, e;
    }
    function l1(e, t, a, i, u) {
      if (a.flags |= lu, xr && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        i1(a), jr() && a.mode & mt && JE();
        var f = lR(t);
        if (f !== null) {
          f.flags &= -257, uR(f, t, a, e, u), f.mode & mt && iR(e, s, u), a1(f, e, s);
          return;
        } else {
          if (!kd(u)) {
            iR(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (jr() && a.mode & mt) {
        JE();
        var v = lR(t);
        if (v !== null) {
          (v.flags & Ua) === Le && (v.flags |= Cn), uR(v, t, a, e, u), Jy(Xs(i, a));
          return;
        }
      }
      i = Xs(i, a), Hx(i);
      var y = t;
      do {
        switch (y.tag) {
          case F: {
            var g = i;
            y.flags |= Ua;
            var _ = tr(u);
            y.lanes = lt(y.lanes, _);
            var b = aR(y, g, _);
            pg(y, b);
            return;
          }
          case J:
            var U = i, j = y.type, V = y.stateNode;
            if ((y.flags & ht) === Le && (typeof j.getDerivedStateFromError == "function" || V !== null && typeof V.componentDidCatch == "function" && !l0(V))) {
              y.flags |= Ua;
              var ce = tr(u);
              y.lanes = lt(y.lanes, ce);
              var Pe = lS(y, U, ce);
              pg(y, Pe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function u1() {
      return null;
    }
    var kp = Ie.ReactCurrentOwner, rl = !1, uS, Op, oS, sS, cS, Js, fS, Cm, Np;
    uS = {}, Op = {}, oS = {}, sS = {}, cS = {}, Js = !1, fS = {}, Cm = {}, Np = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = cC(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function o1(e, t, a, i) {
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
          _t(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Lf(t, u), Aa(t);
      {
        if (kp.current = t, ka(!0), v = Ff(e, t, f, i, p, u), y = Hf(), t.mode & rt) {
          $t(!0);
          try {
            v = Ff(e, t, f, i, p, u), y = Hf();
          } finally {
            $t(!1);
          }
        }
        ka(!1);
      }
      return Rl(), e !== null && !rl ? (bC(e, t, u), Lu(e, t, u)) : (jr() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
    }
    function sR(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (p_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Wf(s), t.tag = $e, t.type = f, vS(t, s), cR(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            _t(s)
          ), a.defaultProps !== void 0) {
            var v = _t(s) || "Unknown";
            Np[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Np[v] = !0);
          }
        }
        var y = KS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && Xi(
          _,
          i,
          // Resolved props
          "prop",
          _t(g)
        );
      }
      var b = e.child, U = ES(e, u);
      if (!U) {
        var j = b.memoizedProps, V = a.compare;
        if (V = V !== null ? V : ze, V(j, i) && e.ref === t.ref)
          return Lu(e, t, u);
      }
      t.flags |= Ii;
      var ce = rc(b, i);
      return ce.ref = t.ref, ce.return = t, t.child = ce, ce;
    }
    function cR(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Xe) {
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
            _t(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ze(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & ti) !== Le && (rl = !0);
          else return t.lanes = e.lanes, Lu(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function fR(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || w)
        if ((t.mode & mt) === Me) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, zm(t, a);
        } else if (na(a, ya)) {
          var _ = {
            baseLanes: $,
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
            v = lt(y, a);
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
        s !== null ? (U = lt(s.baseLanes, a), t.memoizedState = null) : U = a, zm(t, U);
      }
      return Ra(e, t, u, a), t.child;
    }
    function s1(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function c1(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function f1(e, t, a) {
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
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= An, t.flags |= ds);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          _t(a)
        );
      }
      var f;
      {
        var p = wf(t, a, !0);
        f = xf(t, p);
      }
      var v, y;
      Lf(t, u), Aa(t);
      {
        if (kp.current = t, ka(!0), v = Ff(e, t, a, i, f, u), y = Hf(), t.mode & rt) {
          $t(!0);
          try {
            v = Ff(e, t, a, i, f, u), y = Hf();
          } finally {
            $t(!1);
          }
        }
        ka(!1);
      }
      return Rl(), e !== null && !rl ? (bC(e, t, u), Lu(e, t, u)) : (jr() && y && Qy(t), t.flags |= Ii, Ra(e, t, v, u), t.child);
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
            t.flags |= ht, t.flags |= Ua;
            var y = new Error("Simulated error coming from DevTools"), g = tr(u);
            t.lanes = lt(t.lanes, g);
            var _ = lS(t, Xs(y, t), g);
            pg(t, _);
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
            _t(a)
          );
        }
      }
      var U;
      Al(a) ? (U = !0, Mh(t)) : U = !1, Lf(t, u);
      var j = t.stateNode, V;
      j === null ? (Tm(e, t), nR(t, a, i), rS(t, a, i, u), V = !0) : e === null ? V = e1(t, a, i, u) : V = t1(e, t, a, i, u);
      var ce = pS(e, t, a, V, U, u);
      {
        var Pe = t.stateNode;
        V && Pe.props !== i && (Js || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ke(t) || "a component"), Js = !0);
      }
      return ce;
    }
    function pS(e, t, a, i, u, s) {
      dR(e, t);
      var f = (t.flags & ht) !== Le;
      if (!i && !f)
        return u && GE(t, a, !1), Lu(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, XC();
      else {
        Aa(t);
        {
          if (ka(!0), v = p.render(), t.mode & rt) {
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
      return t.flags |= Ii, e !== null && f ? o1(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && GE(t, a, !0), t.child;
    }
    function vR(e) {
      var t = e.stateNode;
      t.pendingContext ? QE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QE(e, t.context, !1), vg(e, t.containerInfo);
    }
    function d1(e, t, a) {
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
        if (y.baseState = v, t.memoizedState = v, t.flags & Cn) {
          var g = Xs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return hR(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Xs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return hR(e, t, p, a, _);
        } else {
          hw(t);
          var b = cC(t, null, p, a);
          t.child = b;
          for (var U = b; U; )
            U.flags = U.flags & -3 | jn, U = U.sibling;
        }
      } else {
        if (kf(), p === s)
          return Lu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function hR(e, t, a, i, u) {
      return kf(), Jy(u), t.flags |= Cn, Ra(e, t, a, i), t.child;
    }
    function p1(e, t, a) {
      CC(t), e === null && Xy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ly(i, u);
      return p ? f = null : s !== null && Ly(i, s) && (t.flags |= Kt), dR(e, t), Ra(e, t, f, a), t.child;
    }
    function v1(e, t) {
      return e === null && Xy(t), null;
    }
    function h1(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = v_(v), g = nl(v, u), _;
      switch (y) {
        case ve:
          return vS(t, v), t.type = v = Wf(v), _ = dS(null, t, v, g, i), _;
        case J:
          return t.type = v = YS(v), _ = pR(null, t, v, g, i), _;
        case Be:
          return t.type = v = IS(v), _ = oR(null, t, v, g, i), _;
        case tt: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Xi(
              b,
              g,
              // Resolved for outer only
              "prop",
              _t(v)
            );
          }
          return _ = sR(
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
      throw v !== null && typeof v == "object" && v.$$typeof === Xe && (U = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + U));
    }
    function m1(e, t, a, i, u) {
      Tm(e, t), t.tag = J;
      var s;
      return Al(a) ? (s = !0, Mh(t)) : s = !1, Lf(t, u), nR(t, a, i), rS(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function y1(e, t, a, i) {
      Tm(e, t);
      var u = t.pendingProps, s;
      {
        var f = wf(t, a, !1);
        s = xf(t, f);
      }
      Lf(t, i);
      var p, v;
      Aa(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = _t(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & rt && Zi.recordLegacyContextWarning(t, null), ka(!0), kp.current = t, p = Ff(null, t, a, u, s, i), v = Hf(), ka(!1);
      }
      if (Rl(), t.flags |= Ii, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = _t(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = _t(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = J, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Al(a) ? (b = !0, Mh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, dg(t), tR(t, p), rS(t, a, u, i), pS(null, t, a, !0, b, i);
      } else {
        if (t.tag = ve, t.mode & rt) {
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
          var a = "", i = Nr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = _t(t) || "Unknown";
          Np[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Np[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = _t(t) || "Unknown";
          sS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), sS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = _t(t) || "Unknown";
          oS[v] || (S("%s: Function components do not support contextType.", v), oS[v] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Hn
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: u1(),
        transitions: null
      };
    }
    function g1(e, t) {
      var a = null;
      return {
        baseLanes: lt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function S1(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return yg(e, Ep);
    }
    function E1(e, t) {
      return xs(e.childLanes, t);
    }
    function mR(e, t, a) {
      var i = t.pendingProps;
      k_(t) && (t.flags |= ht);
      var u = el.current, s = !1, f = (t.flags & ht) !== Le;
      if (f || S1(u, e) ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u = Fw(u, TC)), u = zf(u), zo(t, u), e === null) {
        Xy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return w1(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = C1(t, y, g, a), b = t.child;
          return b.memoizedState = mS(a), t.memoizedState = hS, _;
        } else
          return yS(t, y);
      } else {
        var U = e.memoizedState;
        if (U !== null) {
          var j = U.dehydrated;
          if (j !== null)
            return x1(e, t, f, i, j, U, a);
        }
        if (s) {
          var V = i.fallback, ce = i.children, Pe = T1(e, t, ce, V, a), ke = t.child, kt = e.child.memoizedState;
          return ke.memoizedState = kt === null ? mS(a) : g1(kt, a), ke.childLanes = E1(e, a), t.memoizedState = hS, Pe;
        } else {
          var Ct = i.children, O = R1(e, t, Ct, a);
          return t.memoizedState = null, O;
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
    function C1(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & mt) === Me && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Tt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Bo(a, u, i, null)) : (p = gS(f, u), v = Bo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return y0(e, t, $, null);
    }
    function yR(e, t) {
      return rc(e, t);
    }
    function R1(e, t, a, i) {
      var u = e.child, s = u.sibling, f = yR(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & mt) === Me && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Xr) : p.push(s);
      }
      return t.child = f, f;
    }
    function T1(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & mt) === Me && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Tt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = yR(f, v), y.subtreeFlags = f.subtreeFlags & Fn;
      var _;
      return p !== null ? _ = rc(p, i) : (_ = Bo(i, s, u, null), _.flags |= Un), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Rm(e, t, a, i) {
      i !== null && Jy(i), Of(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= Un, t.memoizedState = null, f;
    }
    function b1(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Bo(i, s, u, null);
      return v.flags |= Un, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & mt) !== Me && Of(t, e.child, null, u), v;
    }
    function w1(e, t, a) {
      return (e.mode & mt) === Me ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ye) : Ay(t) ? e.lanes = er : e.lanes = ya, null;
    }
    function x1(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cn) {
          t.flags &= -257;
          var O = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Rm(e, t, f, O);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= ht, null;
          var B = i.children, N = i.fallback, ee = b1(e, t, B, N, f), Se = t.child;
          return Se.memoizedState = mS(f), t.memoizedState = hS, ee;
        }
      else {
        if (pw(), (t.mode & mt) === Me)
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
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = aS(_, p, y);
          return Rm(e, t, f, b);
        }
        var U = na(f, e.childLanes);
        if (rl || U) {
          var j = Mm();
          if (j !== null) {
            var V = Jc(j, f);
            if (V !== Hn && V !== s.retryLane) {
              s.retryLane = V;
              var ce = Yt;
              Ba(e, V), Er(j, e, V, ce);
            }
          }
          HS();
          var Pe = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Rm(e, t, f, Pe);
        } else if (PE(u)) {
          t.flags |= ht, t.child = e.child;
          var ke = Xx.bind(null, e);
          return Nb(u, ke), null;
        } else {
          mw(t, u, s.treeContext);
          var kt = i.children, Ct = yS(t, kt);
          return Ct.flags |= jn, Ct;
        }
      }
    }
    function gR(e, t, a) {
      e.lanes = lt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = lt(i.lanes, t)), og(e.return, t, a);
    }
    function _1(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === we) {
          var u = i.memoizedState;
          u !== null && gR(i, a, e);
        } else if (i.tag === Ft)
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
    function D1(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && em(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function k1(e) {
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
    function O1(e, t) {
      e !== void 0 && !Cm[e] && (e !== "collapsed" && e !== "hidden" ? (Cm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function SR(e, t) {
      {
        var a = it(e), i = !a && typeof hn(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function N1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (it(e)) {
          for (var a = 0; a < e.length; a++)
            if (!SR(e[a], a))
              return;
        } else {
          var i = hn(e);
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
      k1(u), O1(s, u), N1(f, u), Ra(e, t, f, a);
      var p = el.current, v = yg(p, Ep);
      if (v)
        p = gg(p, Ep), t.flags |= ht;
      else {
        var y = e !== null && (e.flags & ht) !== Le;
        y && _1(t, t.child, a), p = zf(p);
      }
      if (zo(t, p), (t.mode & mt) === Me)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = D1(t.child), _;
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
              var V = U.sibling;
              U.sibling = b, b = U, U = V;
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
    function L1(e, t, a) {
      vg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var CR = !1;
    function M1(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || CR || (CR = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (pC(t, u, p), f !== null) {
        var y = f.value;
        if (Te(y, p)) {
          if (f.children === s.children && !Nh())
            return Lu(e, t, a);
        } else
          kw(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var RR = !1;
    function z1(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (RR || (RR = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Lf(t, a);
      var f = ar(i);
      Aa(t);
      var p;
      return kp.current = t, ka(!0), p = s(f), ka(!1), Rl(), t.flags |= Ii, Ra(e, t, p, a), t.child;
    }
    function Lp() {
      rl = !0;
    }
    function Tm(e, t) {
      (t.mode & mt) === Me && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Un);
    }
    function Lu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), Yp(t.lanes), na(a, t.childLanes) ? (_w(e, t), t.child) : null;
    }
    function U1(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= Xr) : s.push(e), a.flags |= Un, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!na(a, t);
    }
    function A1(e, t, a) {
      switch (t.tag) {
        case F:
          vR(t), t.stateNode, kf();
          break;
        case q:
          CC(t);
          break;
        case J: {
          var i = t.type;
          Al(i) && Mh(t);
          break;
        }
        case ae:
          vg(t, t.stateNode.containerInfo);
          break;
        case st: {
          var u = t.memoizedProps.value, s = t.type._context;
          pC(t, s, u);
          break;
        }
        case wt:
          {
            var f = na(a, t.childLanes);
            f && (t.flags |= gt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case we: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return zo(t, zf(el.current)), t.flags |= ht, null;
            var y = t.child, g = y.childLanes;
            if (na(a, g))
              return mR(e, t, a);
            zo(t, zf(el.current));
            var _ = Lu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            zo(t, zf(el.current));
          break;
        }
        case Ft: {
          var b = (e.flags & ht) !== Le, U = na(a, t.childLanes);
          if (b) {
            if (U)
              return ER(e, t, a);
            t.flags |= ht;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), zo(t, el.current), U)
            break;
          return null;
        }
        case Ue:
        case Nt:
          return t.lanes = $, fR(e, t, a);
      }
      return Lu(e, t, a);
    }
    function TR(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return U1(e, t, KS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Nh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = ES(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ht) === Le)
            return rl = !1, A1(e, t, a);
          (e.flags & ti) !== Le ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, jr() && uw(t)) {
        var f = t.index, p = ow();
        XE(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case ie:
          return y1(e, t, t.type, a);
        case gn: {
          var v = t.elementType;
          return h1(e, t, v, a);
        }
        case ve: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : nl(y, g);
          return dS(e, t, y, _, a);
        }
        case J: {
          var b = t.type, U = t.pendingProps, j = t.elementType === b ? U : nl(b, U);
          return pR(e, t, b, j, a);
        }
        case F:
          return d1(e, t, a);
        case q:
          return p1(e, t, a);
        case pe:
          return v1(e, t);
        case we:
          return mR(e, t, a);
        case ae:
          return L1(e, t, a);
        case Be: {
          var V = t.type, ce = t.pendingProps, Pe = t.elementType === V ? ce : nl(V, ce);
          return oR(e, t, V, Pe, a);
        }
        case Ve:
          return s1(e, t, a);
        case on:
          return c1(e, t, a);
        case wt:
          return f1(e, t, a);
        case st:
          return M1(e, t, a);
        case It:
          return z1(e, t, a);
        case tt: {
          var ke = t.type, kt = t.pendingProps, Ct = nl(ke, kt);
          if (t.type !== t.elementType) {
            var O = ke.propTypes;
            O && Xi(
              O,
              Ct,
              // Resolved for outer only
              "prop",
              _t(ke)
            );
          }
          return Ct = nl(ke.type, Ct), sR(e, t, ke, Ct, a);
        }
        case $e:
          return cR(e, t, t.type, t.pendingProps, a);
        case Ot: {
          var B = t.type, N = t.pendingProps, ee = t.elementType === B ? N : nl(B, N);
          return m1(e, t, B, ee, a);
        }
        case Ft:
          return ER(e, t, a);
        case pt:
          break;
        case Ue:
          return fR(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pf(e) {
      e.flags |= gt;
    }
    function bR(e) {
      e.flags |= An, e.flags |= ds;
    }
    var wR, CS, xR, _R;
    wR = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === q || u.tag === pe)
          ab(e, u.stateNode);
        else if (u.tag !== ae) {
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
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = Le;
      if (t) {
        if ((e.mode & Tt) !== Me) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = lt(a, lt(y.lanes, y.childLanes)), i |= y.subtreeFlags & Fn, i |= y.flags & Fn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = lt(a, lt(g.lanes, g.childLanes)), i |= g.subtreeFlags & Fn, i |= g.flags & Fn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Tt) !== Me) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = lt(a, lt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = lt(a, lt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function j1(e, t, a) {
      if (Cw() && (t.mode & mt) !== Me && (t.flags & ht) === Le)
        return aC(t), kf(), t.flags |= Cn | lu | Ua, !1;
      var i = Fh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Sw(t), Hr(t), (t.mode & Tt) !== Me) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (kf(), (t.flags & ht) === Le && (t.memoizedState = null), t.flags |= gt, Hr(t), (t.mode & Tt) !== Me) {
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
        case ie:
        case gn:
        case $e:
        case ve:
        case Be:
        case Ve:
        case on:
        case wt:
        case It:
        case tt:
          return Hr(t), null;
        case J: {
          var u = t.type;
          return Al(u) && Lh(t), Hr(t), null;
        }
        case F: {
          var s = t.stateNode;
          if (Mf(t), $y(t), Eg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Fh(t);
            if (f)
              Pf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cn) !== Le) && (t.flags |= za, iC());
            }
          }
          return CS(e, t), Hr(t), null;
        }
        case q: {
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
            var g = hg(), _ = Fh(t);
            if (_)
              yw(t, v, g) && Pf(t);
            else {
              var b = rb(y, i, v, g, t);
              wR(b, t, !1, !1), t.stateNode = b, ib(b, y, i, v) && Pf(t);
            }
            t.ref !== null && bR(t);
          }
          return Hr(t), null;
        }
        case pe: {
          var U = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            _R(e, t, j, U);
          } else {
            if (typeof U != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var V = EC(), ce = hg(), Pe = Fh(t);
            Pe ? gw(t) && Pf(t) : t.stateNode = ub(U, V, ce, t);
          }
          return Hr(t), null;
        }
        case we: {
          Uf(t);
          var ke = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var kt = j1(e, t, ke);
            if (!kt)
              return t.flags & Ua ? t : null;
          }
          if ((t.flags & ht) !== Le)
            return t.lanes = a, (t.mode & Tt) !== Me && Ig(t), t;
          var Ct = ke !== null, O = e !== null && e.memoizedState !== null;
          if (Ct !== O && Ct) {
            var B = t.child;
            if (B.flags |= gi, (t.mode & mt) !== Me) {
              var N = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              N || yg(el.current, TC) ? Fx() : HS();
            }
          }
          var ee = t.updateQueue;
          if (ee !== null && (t.flags |= gt), Hr(t), (t.mode & Tt) !== Me && Ct) {
            var Se = t.child;
            Se !== null && (t.treeBaseDuration -= Se.treeBaseDuration);
          }
          return null;
        }
        case ae:
          return Mf(t), CS(e, t), e === null && ew(t.stateNode.containerInfo), Hr(t), null;
        case st:
          var de = t.type._context;
          return ug(de, t), Hr(t), null;
        case Ot: {
          var We = t.type;
          return Al(We) && Lh(t), Hr(t), null;
        }
        case Ft: {
          Uf(t);
          var et = t.memoizedState;
          if (et === null)
            return Hr(t), null;
          var Zt = (t.flags & ht) !== Le, Mt = et.rendering;
          if (Mt === null)
            if (Zt)
              Mp(et, !1);
            else {
              var Wn = Px() && (e === null || (e.flags & ht) === Le);
              if (!Wn)
                for (var zt = t.child; zt !== null; ) {
                  var Vn = em(zt);
                  if (Vn !== null) {
                    Zt = !0, t.flags |= ht, Mp(et, !1);
                    var oa = Vn.updateQueue;
                    return oa !== null && (t.updateQueue = oa, t.flags |= gt), t.subtreeFlags = Le, Dw(t, a), zo(t, gg(el.current, Ep)), t.child;
                  }
                  zt = zt.sibling;
                }
              et.tail !== null && wn() > qR() && (t.flags |= ht, Zt = !0, Mp(et, !1), t.lanes = Fv);
            }
          else {
            if (!Zt) {
              var Yr = em(Mt);
              if (Yr !== null) {
                t.flags |= ht, Zt = !0;
                var oi = Yr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= gt), Mp(et, !0), et.tail === null && et.tailMode === "hidden" && !Mt.alternate && !jr())
                  return Hr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              wn() * 2 - et.renderingStartTime > qR() && a !== ya && (t.flags |= ht, Zt = !0, Mp(et, !1), t.lanes = Fv);
            }
            if (et.isBackwards)
              Mt.sibling = t.child, t.child = Mt;
            else {
              var wa = et.last;
              wa !== null ? wa.sibling = Mt : t.child = Mt, et.last = Mt;
            }
          }
          if (et.tail !== null) {
            var xa = et.tail;
            et.rendering = xa, et.tail = xa.sibling, et.renderingStartTime = wn(), xa.sibling = null;
            var sa = el.current;
            return Zt ? sa = gg(sa, Ep) : sa = zf(sa), zo(t, sa), xa;
          }
          return Hr(t), null;
        }
        case pt:
          break;
        case Ue:
        case Nt: {
          FS(t);
          var ju = t.memoizedState, Gf = ju !== null;
          if (e !== null) {
            var qp = e.memoizedState, Yl = qp !== null;
            Yl !== Gf && (t.flags |= gi);
          }
          return !Gf || (t.mode & mt) === Me ? Hr(t) : na($l, ya) && (Hr(t), t.subtreeFlags & (Un | gt) && (t.flags |= gi)), null;
        }
        case dt:
          return null;
        case at:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function F1(e, t, a) {
      switch (Wy(t), t.tag) {
        case J: {
          var i = t.type;
          Al(i) && Lh(t);
          var u = t.flags;
          return u & Ua ? (t.flags = u & -65537 | ht, (t.mode & Tt) !== Me && Ig(t), t) : null;
        }
        case F: {
          t.stateNode, Mf(t), $y(t), Eg();
          var s = t.flags;
          return (s & Ua) !== Le && (s & ht) === Le ? (t.flags = s & -65537 | ht, t) : null;
        }
        case q:
          return mg(t), null;
        case we: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            kf();
          }
          var p = t.flags;
          return p & Ua ? (t.flags = p & -65537 | ht, (t.mode & Tt) !== Me && Ig(t), t) : null;
        }
        case Ft:
          return Uf(t), null;
        case ae:
          return Mf(t), null;
        case st:
          var v = t.type._context;
          return ug(v, t), null;
        case Ue:
        case Nt:
          return FS(t), null;
        case dt:
          return null;
        default:
          return null;
      }
    }
    function kR(e, t, a) {
      switch (Wy(t), t.tag) {
        case J: {
          var i = t.type.childContextTypes;
          i != null && Lh(t);
          break;
        }
        case F: {
          t.stateNode, Mf(t), $y(t), Eg();
          break;
        }
        case q: {
          mg(t);
          break;
        }
        case ae:
          Mf(t);
          break;
        case we:
          Uf(t);
          break;
        case Ft:
          Uf(t);
          break;
        case st:
          var u = t.type._context;
          ug(u, t);
          break;
        case Ue:
        case Nt:
          FS(t);
          break;
      }
    }
    var OR = null;
    OR = /* @__PURE__ */ new Set();
    var bm = !1, Pr = !1, H1 = typeof WeakSet == "function" ? WeakSet : Set, be = null, Vf = null, Bf = null;
    function P1(e) {
      Ma(null, function() {
        throw e;
      }), cd();
    }
    var V1 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Tt)
        try {
          Vl(), t.componentWillUnmount();
        } finally {
          Pl(e);
        }
      else
        t.componentWillUnmount();
    };
    function NR(e, t) {
      try {
        jo(vr, e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        V1(e, a);
      } catch (i) {
        vn(e, t, i);
      }
    }
    function B1(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        vn(e, t, i);
      }
    }
    function LR(e, t) {
      try {
        zR(e);
      } catch (a) {
        vn(e, t, a);
      }
    }
    function $f(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (He && Ae && e.mode & Tt)
              try {
                Vl(), i = a(null);
              } finally {
                Pl(e);
              }
            else
              i = a(null);
          } catch (u) {
            vn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          a.current = null;
    }
    function wm(e, t, a) {
      try {
        a();
      } catch (i) {
        vn(e, t, i);
      }
    }
    var MR = !1;
    function $1(e, t) {
      tb(e.containerInfo), be = t, Y1();
      var a = MR;
      return MR = !1, a;
    }
    function Y1() {
      for (; be !== null; ) {
        var e = be, t = e.child;
        (e.subtreeFlags & Sl) !== Le && t !== null ? (t.return = e, be = t) : I1();
      }
    }
    function I1() {
      for (; be !== null; ) {
        var e = be;
        Wt(e);
        try {
          Q1(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        En();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, be = t;
          return;
        }
        be = e.return;
      }
    }
    function Q1(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== Le) {
        switch (Wt(e), e.tag) {
          case ve:
          case Be:
          case $e:
            break;
          case J: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Js && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = OR;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ke(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case F: {
            {
              var v = e.stateNode;
              xb(v.containerInfo);
            }
            break;
          }
          case q:
          case pe:
          case ae:
          case Ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        En();
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
    function W1(e, t) {
      if ((t.flags & gt) !== Le)
        switch (t.tag) {
          case wt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = qC(), p = t.alternate === null ? "mount" : "update";
            GC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case F:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case wt:
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
    function G1(e, t, a, i) {
      if ((a.flags & El) !== Le)
        switch (a.tag) {
          case ve:
          case Be:
          case $e: {
            if (!Pr)
              if (a.mode & Tt)
                try {
                  Vl(), jo(vr | pr, a);
                } finally {
                  Pl(a);
                }
              else
                jo(vr | pr, a);
            break;
          }
          case J: {
            var u = a.stateNode;
            if (a.flags & gt && !Pr)
              if (t === null)
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Tt)
                  try {
                    Vl(), u.componentDidMount();
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), a.mode & Tt)
                  try {
                    Vl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Pl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Js && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ke(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ke(a) || "instance")), SC(a, p, u));
            break;
          }
          case F: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case q:
                    y = a.child.stateNode;
                    break;
                  case J:
                    y = a.child.stateNode;
                    break;
                }
              SC(a, v, y);
            }
            break;
          }
          case q: {
            var g = a.stateNode;
            if (t === null && a.flags & gt) {
              var _ = a.type, b = a.memoizedProps;
              db(g, _, b);
            }
            break;
          }
          case pe:
            break;
          case ae:
            break;
          case wt: {
            {
              var U = a.memoizedProps, j = U.onCommit, V = U.onRender, ce = a.stateNode.effectDuration, Pe = qC(), ke = t === null ? "mount" : "update";
              GC() && (ke = "nested-update"), typeof V == "function" && V(a.memoizedProps.id, ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Pe);
              {
                typeof j == "function" && j(a.memoizedProps.id, ke, ce, Pe), Ix(a);
                var kt = a.return;
                e: for (; kt !== null; ) {
                  switch (kt.tag) {
                    case F:
                      var Ct = kt.stateNode;
                      Ct.effectDuration += ce;
                      break e;
                    case wt:
                      var O = kt.stateNode;
                      O.effectDuration += ce;
                      break e;
                  }
                  kt = kt.return;
                }
              }
            }
            break;
          }
          case we: {
            nx(e, a);
            break;
          }
          case Ft:
          case Ot:
          case pt:
          case Ue:
          case Nt:
          case at:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Pr || a.flags & An && zR(a);
    }
    function q1(e) {
      switch (e.tag) {
        case ve:
        case Be:
        case $e: {
          if (e.mode & Tt)
            try {
              Vl(), NR(e, e.return);
            } finally {
              Pl(e);
            }
          else
            NR(e, e.return);
          break;
        }
        case J: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && B1(e, e.return, t), LR(e, e.return);
          break;
        }
        case q: {
          LR(e, e.return);
          break;
        }
      }
    }
    function K1(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === q) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? Rb(u) : bb(i.stateNode, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
          }
        } else if (i.tag === pe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Tb(s) : wb(s, i.memoizedProps);
            } catch (f) {
              vn(e, e.return, f);
            }
        } else if (!((i.tag === Ue || i.tag === Nt) && i.memoizedState !== null && i !== e)) {
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
          case q:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Tt)
            try {
              Vl(), u = t(i);
            } finally {
              Pl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ke(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ke(e)), t.current = i;
      }
    }
    function X1(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function UR(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, UR(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
          var a = e.stateNode;
          a !== null && rw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function J1(e) {
      for (var t = e.return; t !== null; ) {
        if (AR(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function AR(e) {
      return e.tag === q || e.tag === F || e.tag === ae;
    }
    function jR(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || AR(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== pe && t.tag !== rn; ) {
          if (t.flags & Un || t.child === null || t.tag === ae)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Un))
          return t.stateNode;
      }
    }
    function Z1(e) {
      var t = J1(e);
      switch (t.tag) {
        case q: {
          var a = t.stateNode;
          t.flags & Kt && (HE(a), t.flags &= -33);
          var i = jR(e);
          bS(e, i, a);
          break;
        }
        case F:
        case ae: {
          var u = t.stateNode.containerInfo, s = jR(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === q || i === pe;
      if (u) {
        var s = e.stateNode;
        t ? gb(a, s, t) : mb(a, s);
      } else if (i !== ae) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function bS(e, t, a) {
      var i = e.tag, u = i === q || i === pe;
      if (u) {
        var s = e.stateNode;
        t ? yb(a, s, t) : hb(a, s);
      } else if (i !== ae) {
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
            case q: {
              Vr = i.stateNode, il = !1;
              break e;
            }
            case F: {
              Vr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case ae: {
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
      X1(a);
    }
    function Fo(e, t, a) {
      for (var i = a.child; i !== null; )
        FR(e, t, i), i = i.sibling;
    }
    function FR(e, t, a) {
      switch (lo(a), a.tag) {
        case q:
          Pr || $f(a, t);
        case pe: {
          {
            var i = Vr, u = il;
            Vr = null, Fo(e, t, a), Vr = i, il = u, Vr !== null && (il ? Eb(Vr, a.stateNode) : Sb(Vr, a.stateNode));
          }
          return;
        }
        case rn: {
          Vr !== null && (il ? Cb(Vr, a.stateNode) : Uy(Vr, a.stateNode));
          return;
        }
        case ae: {
          {
            var s = Vr, f = il;
            Vr = a.stateNode.containerInfo, il = !0, Fo(e, t, a), Vr = s, il = f;
          }
          return;
        }
        case ve:
        case Be:
        case tt:
        case $e: {
          if (!Pr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, b = _.destroy, U = _.tag;
                  b !== void 0 && ((U & jl) !== $a ? wm(a, t, b) : (U & vr) !== $a && (Rd(a), a.mode & Tt ? (Vl(), wm(a, t, b), Pl(a)) : wm(a, t, b), uo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Fo(e, t, a);
          return;
        }
        case J: {
          if (!Pr) {
            $f(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && RS(a, t, j);
          }
          Fo(e, t, a);
          return;
        }
        case pt: {
          Fo(e, t, a);
          return;
        }
        case Ue: {
          if (
            // TODO: Remove this dead flag
            a.mode & mt
          ) {
            var V = Pr;
            Pr = V || a.memoizedState !== null, Fo(e, t, a), Pr = V;
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
        a === null && (a = e.stateNode = new H1()), t.forEach(function(i) {
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
            vn(s, t, v);
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
        case ve:
        case Be:
        case tt:
        case $e: {
          if (ll(t, e), Bl(e), u & gt) {
            try {
              al(jl | pr, e, e.return), jo(jl | pr, e);
            } catch (We) {
              vn(e, e.return, We);
            }
            if (e.mode & Tt) {
              try {
                Vl(), al(vr | pr, e, e.return);
              } catch (We) {
                vn(e, e.return, We);
              }
              Pl(e);
            } else
              try {
                al(vr | pr, e, e.return);
              } catch (We) {
                vn(e, e.return, We);
              }
          }
          return;
        }
        case J: {
          ll(t, e), Bl(e), u & An && i !== null && $f(i, i.return);
          return;
        }
        case q: {
          ll(t, e), Bl(e), u & An && i !== null && $f(i, i.return);
          {
            if (e.flags & Kt) {
              var s = e.stateNode;
              try {
                HE(s);
              } catch (We) {
                vn(e, e.return, We);
              }
            }
            if (u & gt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    pb(f, g, y, v, p, e);
                  } catch (We) {
                    vn(e, e.return, We);
                  }
              }
            }
          }
          return;
        }
        case pe: {
          if (ll(t, e), Bl(e), u & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, b = e.memoizedProps, U = i !== null ? i.memoizedProps : b;
            try {
              vb(_, U, b);
            } catch (We) {
              vn(e, e.return, We);
            }
          }
          return;
        }
        case F: {
          if (ll(t, e), Bl(e), u & gt && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                Hb(t.containerInfo);
              } catch (We) {
                vn(e, e.return, We);
              }
          }
          return;
        }
        case ae: {
          ll(t, e), Bl(e);
          return;
        }
        case we: {
          ll(t, e), Bl(e);
          var V = e.child;
          if (V.flags & gi) {
            var ce = V.stateNode, Pe = V.memoizedState, ke = Pe !== null;
            if (ce.isHidden = ke, ke) {
              var kt = V.alternate !== null && V.alternate.memoizedState !== null;
              kt || jx();
            }
          }
          if (u & gt) {
            try {
              tx(e);
            } catch (We) {
              vn(e, e.return, We);
            }
            HR(e);
          }
          return;
        }
        case Ue: {
          var Ct = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & mt
          ) {
            var O = Pr;
            Pr = O || Ct, ll(t, e), Pr = O;
          } else
            ll(t, e);
          if (Bl(e), u & gi) {
            var B = e.stateNode, N = e.memoizedState, ee = N !== null, Se = e;
            if (B.isHidden = ee, ee && !Ct && (Se.mode & mt) !== Me) {
              be = Se;
              for (var de = Se.child; de !== null; )
                be = de, ix(de), de = de.sibling;
            }
            K1(Se, ee);
          }
          return;
        }
        case Ft: {
          ll(t, e), Bl(e), u & gt && HR(e);
          return;
        }
        case pt:
          return;
        default: {
          ll(t, e), Bl(e);
          return;
        }
      }
    }
    function Bl(e) {
      var t = e.flags;
      if (t & Un) {
        try {
          Z1(e);
        } catch (a) {
          vn(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & jn && (e.flags &= -4097);
    }
    function ax(e, t, a) {
      Vf = a, Bf = t, be = e, VR(e, t, a), Vf = null, Bf = null;
    }
    function VR(e, t, a) {
      for (var i = (e.mode & mt) !== Me; be !== null; ) {
        var u = be, s = u.child;
        if (u.tag === Ue && i) {
          var f = u.memoizedState !== null, p = f || bm;
          if (p) {
            wS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Pr, _ = bm, b = Pr;
            bm = p, Pr = g, Pr && !b && (be = u, lx(u));
            for (var U = s; U !== null; )
              be = U, VR(
                U,
                // New root; bubble back up to here and stop.
                t,
                a
              ), U = U.sibling;
            be = u, bm = _, Pr = b, wS(e, t, a);
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
            G1(t, u, i, a);
          } catch (f) {
            vn(i, i.return, f);
          }
          En();
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
          case ve:
          case Be:
          case tt:
          case $e: {
            if (t.mode & Tt)
              try {
                Vl(), al(vr, t, t.return);
              } finally {
                Pl(t);
              }
            else
              al(vr, t, t.return);
            break;
          }
          case J: {
            $f(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case q: {
            $f(t, t.return);
            break;
          }
          case Ue: {
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
        if (t.tag === Ue) {
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
          q1(t);
        } catch (i) {
          vn(t, t.return, i);
        }
        if (En(), t === e) {
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
            vn(u, u.return, f);
          }
          En();
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
        case ve:
        case Be:
        case $e: {
          if (t.mode & Tt) {
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
        (e.flags & ha) !== Le && (Wt(e), vx(e), En());
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
        case ve:
        case Be:
        case $e: {
          e.mode & Tt ? (Yg(), al(Fr | pr, e, e.return), $g(e)) : al(Fr | pr, e, e.return);
          break;
        }
      }
    }
    function hx(e, t) {
      for (; be !== null; ) {
        var a = be;
        Wt(a), yx(a, t), En();
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
        case ve:
        case Be:
        case $e: {
          e.mode & Tt ? (Yg(), al(Fr, e, t), $g(e)) : al(Fr, e, t);
          break;
        }
      }
    }
    function gx(e) {
      switch (e.tag) {
        case ve:
        case Be:
        case $e: {
          try {
            jo(vr | pr, e);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case J: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Sx(e) {
      switch (e.tag) {
        case ve:
        case Be:
        case $e: {
          try {
            jo(Fr | pr, e);
          } catch (t) {
            vn(e, e.return, t);
          }
          break;
        }
      }
    }
    function Ex(e) {
      switch (e.tag) {
        case ve:
        case Be:
        case $e: {
          try {
            al(vr | pr, e, e.return);
          } catch (a) {
            vn(e, e.return, a);
          }
          break;
        }
        case J: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function Cx(e) {
      switch (e.tag) {
        case ve:
        case Be:
        case $e:
          try {
            al(Fr | pr, e, e.return);
          } catch (t) {
            vn(e, e.return, t);
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
    var bx = Ie.ReactCurrentActQueue;
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
    var xx = Math.ceil, xS = Ie.ReactCurrentDispatcher, _S = Ie.ReactCurrentOwner, Br = Ie.ReactCurrentBatchConfig, ul = Ie.ReactCurrentActQueue, yr = (
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
    ), Mu = 0, Up = 1, Zs = 2, xm = 3, Ap = 4, QR = 5, DS = 6, Dt = yr, Ta = null, kn = null, gr = $, $l = $, kS = Do($), Sr = Mu, jp = null, _m = $, Fp = $, Dm = $, Hp = null, Ya = null, OS = 0, WR = 500, GR = 1 / 0, _x = 500, zu = null;
    function Pp() {
      GR = wn() + _x;
    }
    function qR() {
      return GR;
    }
    var km = !1, NS = null, Yf = null, ec = !1, Ho = null, Vp = $, LS = [], MS = null, Dx = 50, Bp = 0, zS = null, US = !1, Om = !1, kx = 50, If = 0, Nm = null, $p = Yt, Lm = $, KR = !1;
    function Mm() {
      return Ta;
    }
    function ba() {
      return (Dt & ($r | ki)) !== yr ? wn() : ($p !== Yt || ($p = wn()), $p);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & mt) === Me)
        return Ye;
      if ((Dt & $r) !== yr && gr !== $)
        return tr(gr);
      var a = bw() !== Tw;
      if (a) {
        if (Br.transition !== null) {
          var i = Br.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Lm === Hn && (Lm = Ld()), Lm;
      }
      var u = ga();
      if (u !== Hn)
        return u;
      var s = ob();
      return s;
    }
    function Ox(e) {
      var t = e.mode;
      return (t & mt) === Me ? Ye : Yv();
    }
    function Er(e, t, a, i) {
      e_(), KR && S("useInsertionEffect must not schedule updates."), US && (Om = !0), vo(e, a, i), (Dt & $r) !== $ && e === Ta ? r_(t) : (xr && Qv(e, t, a), a_(t), e === Ta && ((Dt & $r) === yr && (Fp = lt(Fp, a)), Sr === Ap && Vo(e, gr)), Ia(e, i), a === Ye && Dt === yr && (t.mode & mt) === Me && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Pp(), KE()));
    }
    function Nx(e, t, a) {
      var i = e.current;
      i.lanes = t, vo(e, t, a), Ia(e, a);
    }
    function Lx(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Dt & $r) !== yr
      );
    }
    function Ia(e, t) {
      var a = e.callbackNode;
      Vv(e, t);
      var i = ta(e, e === Ta ? gr : $);
      if (i === $) {
        a !== null && d0(a), e.callbackNode = null, e.callbackPriority = Hn;
        return;
      }
      var u = vu(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== BS)) {
        a == null && s !== Ye && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && d0(a);
      var f;
      if (u === Ye)
        e.tag === ko ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), lw(ZR.bind(null, e))) : qE(ZR.bind(null, e)), ul.current !== null ? ul.current.push(Oo) : cb(function() {
          (Dt & ($r | ki)) === yr && Oo();
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
      if (Kw(), $p = Yt, Lm = $, (Dt & ($r | ki)) !== yr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = ta(e, e === Ta ? gr : $);
      if (u === $)
        return null;
      var s = !ws(e, u) && !$v(e, u) && !t, f = s ? Bx(e, u) : Um(e, u);
      if (f !== Mu) {
        if (f === Zs) {
          var p = Qc(e);
          p !== $ && (u = p, f = AS(e, p));
        }
        if (f === Up) {
          var v = jp;
          throw tc(e, $), Vo(e, u), Ia(e, wn()), v;
        }
        if (f === DS)
          Vo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !zx(g)) {
            if (f = Um(e, u), f === Zs) {
              var _ = Qc(e);
              _ !== $ && (u = _, f = AS(e, _));
            }
            if (f === Up) {
              var b = jp;
              throw tc(e, $), Vo(e, u), Ia(e, wn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Mx(e, f, u);
        }
      }
      return Ia(e, wn()), e.callbackNode === a ? XR.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Hp;
      if (mu(e)) {
        var i = tc(e, t);
        i.flags |= Cn, Zb(e.containerInfo);
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
            var i = OS + WR - wn();
            if (i > 10) {
              var u = ta(e, $);
              if (u !== $)
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
            var f = Dd(e, a), p = f, v = wn() - p, y = Zx(v) - v;
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
      if (Xw(), (Dt & ($r | ki)) !== yr)
        throw new Error("Should not already be working.");
      Au();
      var t = ta(e, $);
      if (!na(t, Ye))
        return Ia(e, wn()), null;
      var a = Um(e, t);
      if (e.tag !== ko && a === Zs) {
        var i = Qc(e);
        i !== $ && (t = i, a = AS(e, i));
      }
      if (a === Up) {
        var u = jp;
        throw tc(e, $), Vo(e, t), Ia(e, wn()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, nc(e, Ya, zu), Ia(e, wn()), null;
    }
    function Ux(e, t) {
      t !== $ && (_s(e, lt(t, Ye)), Ia(e, wn()), (Dt & ($r | ki)) === yr && (Pp(), Oo()));
    }
    function jS(e, t) {
      var a = Dt;
      Dt |= IR;
      try {
        return e(t);
      } finally {
        Dt = a, Dt === yr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Pp(), KE());
      }
    }
    function Ax(e, t, a, i, u) {
      var s = ga(), f = Br.transition;
      try {
        return Br.transition = null, In(ra), e(t, a, i, u);
      } finally {
        In(s), Br.transition = f, Dt === yr && Pp();
      }
    }
    function Uu(e) {
      Ho !== null && Ho.tag === ko && (Dt & ($r | ki)) === yr && Au();
      var t = Dt;
      Dt |= IR;
      var a = Br.transition, i = ga();
      try {
        return Br.transition = null, In(ra), e ? e() : void 0;
      } finally {
        In(i), Br.transition = a, Dt = t, (Dt & ($r | ki)) === yr && Oo();
      }
    }
    function e0() {
      return (Dt & ($r | ki)) !== yr;
    }
    function zm(e, t) {
      la(kS, $l, e), $l = lt($l, t);
    }
    function FS(e) {
      $l = kS.current, ia(kS, e);
    }
    function tc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, sb(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          kR(u, i), i = i.return;
        }
      Ta = e;
      var s = rc(e.current, null);
      return kn = s, gr = $l = t, Sr = Mu, jp = null, _m = $, Fp = $, Dm = $, Hp = null, Ya = null, Nw(), Zi.discardPendingWarnings(), s;
    }
    function t0(e, t) {
      do {
        var a = kn;
        try {
          if (Yh(), wC(), En(), _S.current = null, a === null || a.return === null) {
            Sr = Up, jp = t, kn = null;
            return;
          }
          if (He && a.mode & Tt && Sm(a, !0), _e)
            if (Rl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              hs(a, i, gr);
            } else
              Ci(a, t, gr);
          l1(e, a.return, a, t, gr), i0(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
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
      OS = wn();
    }
    function Yp(e) {
      _m = lt(e, _m);
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
      var a = Dt;
      Dt |= $r;
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
      if (Yh(), Dt = a, r0(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return mn(), Ta = null, gr = $, Sr;
    }
    function Vx() {
      for (; kn !== null; )
        a0(kn);
    }
    function Bx(e, t) {
      var a = Dt;
      Dt |= $r;
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
      return Yh(), r0(i), Dt = a, kn !== null ? (wd(), Mu) : (mn(), Ta = null, gr = $, Sr);
    }
    function $x() {
      for (; kn !== null && !md(); )
        a0(kn);
    }
    function a0(e) {
      var t = e.alternate;
      Wt(e);
      var a;
      (e.mode & Tt) !== Me ? (Bg(e), a = PS(t, e, $l), Sm(e, !0)) : a = PS(t, e, $l), En(), e.memoizedProps = e.pendingProps, a === null ? i0(e) : kn = a, _S.current = null;
    }
    function i0(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & lu) === Le) {
          Wt(t);
          var u = void 0;
          if ((t.mode & Tt) === Me ? u = DR(a, t, $l) : (Bg(t), u = DR(a, t, $l), Sm(t, !1)), En(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = F1(a, t);
          if (s !== null) {
            s.flags &= kv, kn = s;
            return;
          }
          if ((t.mode & Tt) !== Me) {
            Sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= lu, i.subtreeFlags = Le, i.deletions = null;
          else {
            Sr = DS, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
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
      if (t_(), (Dt & ($r | ki)) !== yr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Uv(s), u === null)
        return Ei(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Hn;
      var f = lt(u.lanes, u.childLanes);
      Iv(e, f), e === Ta && (Ta = null, kn = null, gr = $), ((u.subtreeFlags & or) !== Le || (u.flags & or) !== Le) && (ec || (ec = !0, MS = a, $S(ou, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Sl | ao | El | or)) !== Le, v = (u.flags & (Sl | ao | El | or)) !== Le;
      if (p || v) {
        var y = Br.transition;
        Br.transition = null;
        var g = ga();
        In(ra);
        var _ = Dt;
        Dt |= ki, _S.current = null, $1(e, u), KC(), rx(e, u, s), nb(e.containerInfo), e.current = u, ms(s), ax(u, e, s), cu(), Nv(), Dt = _, In(g), Br.transition = y;
      } else
        e.current = u, KC();
      var b = ec;
      if (ec ? (ec = !1, Ho = e, Vp = s) : (If = 0, Nm = null), f = e.pendingLanes, f === $ && (Yf = null), b || s0(e.current, !1), Sd(u.stateNode, i), xr && e.memoizedUpdaters.clear(), Tx(), Ia(e, wn()), t !== null)
        for (var U = e.onRecoverableError, j = 0; j < t.length; j++) {
          var V = t[j], ce = V.stack, Pe = V.digest;
          U(V.value, {
            componentStack: ce,
            digest: Pe
          });
        }
      if (km) {
        km = !1;
        var ke = NS;
        throw NS = null, ke;
      }
      return na(Vp, Ye) && e.tag !== ko && Au(), f = e.pendingLanes, na(f, Ye) ? (qw(), e === zS ? Bp++ : (Bp = 0, zS = e)) : Bp = 0, Oo(), Ei(), null;
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
      LS.push(e), ec || (ec = !0, $S(ou, function() {
        return Au(), null;
      }));
    }
    function Qx() {
      if (Ho === null)
        return !1;
      var e = MS;
      MS = null;
      var t = Ho, a = Vp;
      if (Ho = null, Vp = $, (Dt & ($r | ki)) !== yr)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Om = !1, Td(a);
      var i = Dt;
      Dt |= ki, fx(t.current), ux(t, t.current, a, e);
      {
        var u = LS;
        LS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          W1(t, f);
        }
      }
      oo(), s0(t.current, !0), Dt = i, Oo(), Om ? t === Nm ? If++ : (If = 0, Nm = t) : If = 0, US = !1, Om = !1, Ed(t);
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
      km || (km = !0, NS = e);
    }
    var qx = Gx;
    function u0(e, t, a) {
      var i = Xs(a, t), u = aR(e, i, Ye), s = Lo(e, u, Ye), f = ba();
      s !== null && (vo(s, Ye, f), Ia(s, f));
    }
    function vn(e, t, a) {
      if (P1(a), Qp(!1), e.tag === F) {
        u0(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === F) {
          u0(i, e, a);
          return;
        } else if (i.tag === J) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !l0(s)) {
            var f = Xs(a, e), p = lS(i, f, Ye), v = Lo(i, p, Ye), y = ba();
            v !== null && (vo(v, Ye, y), Ia(v, y));
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
      Xc(e, a), i_(e), Ta === e && hu(gr, a) && (Sr === Ap || Sr === xm && Wc(gr) && wn() - OS < WR ? tc(e, $) : Dm = lt(Dm, a)), Ia(e, u);
    }
    function o0(e, t) {
      t === Hn && (t = Ox(e));
      var a = ba(), i = Ba(e, t);
      i !== null && (vo(i, t, a), Ia(i, a));
    }
    function Xx(e) {
      var t = e.memoizedState, a = Hn;
      t !== null && (a = t.retryLane), o0(e, a);
    }
    function Jx(e, t) {
      var a = Hn, i;
      switch (e.tag) {
        case we:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Ft:
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
      If > kx && (If = 0, Nm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function t_() {
      Zi.flushLegacyContextWarning(), Zi.flushPendingUnsafeLifecycleWarnings();
    }
    function s0(e, t) {
      Wt(e), Am(e, Mr, Ex), t && Am(e, gl, Cx), Am(e, Mr, gx), t && Am(e, gl, Sx), En();
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
        if ((Dt & $r) !== yr || !(e.mode & mt))
          return;
        var t = e.tag;
        if (t !== ie && t !== F && t !== J && t !== ve && t !== Be && t !== tt && t !== $e)
          return;
        var a = Ke(e) || "ReactComponent";
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
          i ? Wt(e) : En();
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
          if (vw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Yh(), wC(), kR(e, t), g0(t, i), t.mode & Tt && Bg(t), Ma(null, TR, null, e, t, a), sd()) {
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
      if (qr && !Qw())
        switch (e.tag) {
          case ve:
          case Be:
          case $e: {
            var t = kn && Ke(kn) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Ke(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case J: {
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
        if (e.mode & mt) {
          if (!YR())
            return;
        } else if (!wx() || Dt !== yr || e.tag !== ve && e.tag !== Be && e.tag !== $e)
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

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ke(e));
          } finally {
            t ? Wt(e) : En();
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
                $$typeof: W,
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
          case J: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ve: {
            (typeof i == "function" || s === Xe) && (u = !0);
            break;
          }
          case Be: {
            (s === W || s === Xe) && (u = !0);
            break;
          }
          case tt:
          case $e: {
            (s === vt || s === Xe) && (u = !0);
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
          case ve:
          case $e:
          case J:
            v = p;
            break;
          case Be:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Oi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === J ? g = !0 : y = !0));
        }
        if (Qf !== null && (Qf.has(e) || i !== null && Qf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = Ba(e, Ye);
          b !== null && Er(b, e, Ye, Yt);
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
          case ve:
          case $e:
          case J:
            p = f;
            break;
          case Be:
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
            case q:
              t.add(i.stateNode);
              return;
            case ae:
              t.add(i.stateNode.containerInfo);
              return;
            case F:
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
        if (a.tag === q)
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
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Le, this.subtreeFlags = Le, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
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
        return qS(e) ? J : ve;
      if (e != null) {
        var t = e.$$typeof;
        if (t === W)
          return Be;
        if (t === vt)
          return tt;
      }
      return ie;
    }
    function rc(e, t) {
      var a = e.alternate;
      a === null ? (a = ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Le, a.subtreeFlags = Le, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Fn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ie:
        case ve:
        case $e:
          a.type = Wf(e.type);
          break;
        case J:
          a.type = YS(e.type);
          break;
        case Be:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function h_(e, t) {
      e.flags &= Fn | Un;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = Le, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
      return e === zh ? (i = mt, t === !0 && (i |= rt, i |= Xt)) : i = Me, xr && (i |= Tt), ui(F, null, null, i);
    }
    function KS(e, t, a, i, u, s) {
      var f = ie, p = e;
      if (typeof e == "function")
        qS(e) ? (f = J, p = YS(p)) : p = Wf(p);
      else if (typeof e == "string")
        f = q;
      else
        e: switch (e) {
          case Qr:
            return Bo(a.children, u, s, t);
          case ci:
            f = on, u |= rt, (u & mt) !== Me && (u |= Xt);
            break;
          case fi:
            return y_(a, u, s, t);
          case se:
            return g_(a, u, s, t);
          case fe:
            return S_(a, u, s, t);
          case Tn:
            return y0(a, u, s, t);
          case ln:
          case yt:
          case dn:
          case Tr:
          case ct:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case zi:
                  f = st;
                  break e;
                case R:
                  f = It;
                  break e;
                case W:
                  f = Be, p = IS(p);
                  break e;
                case vt:
                  f = tt;
                  break e;
                case Xe:
                  f = gn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ke(i) : null;
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
      var u = ui(Ve, e, i, t);
      return u.lanes = a, u;
    }
    function y_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ui(wt, e, i, t | Tt);
      return u.elementType = fi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function g_(e, t, a, i) {
      var u = ui(we, e, i, t);
      return u.elementType = se, u.lanes = a, u;
    }
    function S_(e, t, a, i) {
      var u = ui(Ft, e, i, t);
      return u.elementType = fe, u.lanes = a, u;
    }
    function y0(e, t, a, i) {
      var u = ui(Ue, e, i, t);
      u.elementType = Tn, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function JS(e, t, a) {
      var i = ui(pe, e, null, t);
      return i.lanes = a, i;
    }
    function E_() {
      var e = ui(q, null, null, Me);
      return e.elementType = "DELETED", e;
    }
    function C_(e) {
      var t = ui(rn, null, null, Me);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ui(ae, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function g0(e, t) {
      return e === null && (e = ui(ie, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function R_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Hn, this.eventTimes = Kc($), this.expirationTimes = Kc(Yt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Kc($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
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
      var g = new R_(e, t, a, p, v), _ = m_(t, s);
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
      var t = ro(e), a = iw(t);
      if (t.tag === J) {
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
        if (u.mode & rt) {
          var s = Ke(a) || "Component";
          if (!nE[s]) {
            nE[s] = !0;
            var f = Jn;
            try {
              Wt(u), a.mode & rt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Wt(f) : En();
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
      var b = _.current, U = ba(), j = Po(b), V = Nu(U, j);
      return V.callback = t ?? null, Lo(b, V, j), Nx(_, j, U), _;
    }
    function Wp(e, t, a, i) {
      gd(t, e);
      var u = t.current, s = ba(), f = Po(u);
      _c(f);
      var p = E0(a);
      t.context === null ? t.context = p : t.pendingContext = p, qr && Jn !== null && !tE && (tE = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ke(Jn) || "Unknown"));
      var v = Nu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Lo(u, v, f);
      return y !== null && (Er(y, u, f, s), qh(y, u, f)), f;
    }
    function Fm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case q:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function w_(e) {
      switch (e.tag) {
        case F: {
          var t = e.stateNode;
          if (mu(t)) {
            var a = Bv(t);
            Ux(t, a);
          }
          break;
        }
        case we: {
          Uu(function() {
            var u = Ba(e, Ye);
            if (u !== null) {
              var s = ba();
              Er(u, e, Ye, s);
            }
          });
          var i = Ye;
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
      if (e.tag === we) {
        var t = po, a = Ba(e, t);
        if (a !== null) {
          var i = ba();
          Er(a, e, t, i);
        }
        rE(e, t);
      }
    }
    function __(e) {
      if (e.tag === we) {
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
    var _0 = null, D0 = null, k0 = null, O0 = null, N0 = null, L0 = null, M0 = null, z0 = null, U0 = null;
    {
      var A0 = function(e, t, a) {
        var i = t[a], u = it(e) ? e.slice() : nt({}, e);
        return a + 1 === t.length ? (it(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = A0(e[i], t, a + 1), u);
      }, j0 = function(e, t) {
        return A0(e, t, 0);
      }, F0 = function(e, t, a, i) {
        var u = t[i], s = it(e) ? e.slice() : nt({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], it(s) ? s.splice(u, 1) : delete s[u];
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
          Ne("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Ne("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return F0(e, t, a, 0);
      }, P0 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = it(e) ? e.slice() : nt({}, e);
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
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Ba(e, Ye);
          f !== null && Er(f, e, Ye, Yt);
        }
      }, D0 = function(e, t, a) {
        var i = aE(e, t);
        if (i !== null) {
          var u = j0(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = nt({}, e.memoizedProps);
          var s = Ba(e, Ye);
          s !== null && Er(s, e, Ye, Yt);
        }
      }, k0 = function(e, t, a, i) {
        var u = aE(e, t);
        if (u !== null) {
          var s = H0(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = nt({}, e.memoizedProps);
          var f = Ba(e, Ye);
          f !== null && Er(f, e, Ye, Yt);
        }
      }, O0 = function(e, t, a) {
        e.pendingProps = V0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ye);
        i !== null && Er(i, e, Ye, Yt);
      }, N0 = function(e, t) {
        e.pendingProps = j0(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ba(e, Ye);
        a !== null && Er(a, e, Ye, Yt);
      }, L0 = function(e, t, a) {
        e.pendingProps = H0(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ba(e, Ye);
        i !== null && Er(i, e, Ye, Yt);
      }, M0 = function(e) {
        var t = Ba(e, Ye);
        t !== null && Er(t, e, Ye, Yt);
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
    function N_(e) {
      return null;
    }
    function L_() {
      return Jn;
    }
    function M_(e) {
      var t = e.findFiberByHostInstance, a = Ie.ReactCurrentDispatcher;
      return yd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: _0,
        overrideHookStateDeletePath: D0,
        overrideHookStateRenamePath: k0,
        overrideProps: O0,
        overridePropsDeletePath: N0,
        overridePropsRenamePath: L0,
        setErrorHandler: z0,
        setSuspenseHandler: U0,
        scheduleUpdate: M0,
        currentDispatcherRef: a,
        findHostInstanceByFiber: O_,
        findFiberByHostInstance: t || N_,
        // React Refresh
        findHostInstancesForRefresh: s_,
        scheduleRefresh: u_,
        scheduleRoot: o_,
        setRefreshHandler: l_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: L_,
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
        if (a.nodeType !== zn) {
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
      t != null && (t.hydrate ? Ne("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ur && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = C0(e, zh, null, a, i, u, s);
      _h(f.current, e);
      var p = e.nodeType === zn ? e.parentNode : e;
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
          var _ = u[g];
          Pw(y, _);
        }
      return new Hm(y);
    }
    function Pm(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === $i || e.nodeType === Xo));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === $i || e.nodeType === Xo || e.nodeType === zn && e.nodeValue === " react-mount-point-unstable "));
    }
    function $0(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var j_ = Ie.ReactCurrentOwner, Y0;
    Y0 = function(e) {
      if (e._reactRootContainer && e.nodeType !== zn) {
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
        var p = e.nodeType === zn ? e.parentNode : e;
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
        var _ = e.nodeType === zn ? e.parentNode : e;
        return Zd(_), Uu(function() {
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
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", _t(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
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
    } catch (Y) {
      console.error(Y);
    }
  }
}
sT.NODE_ENV === "production" ? (cT(), dE.exports = oD()) : dE.exports = sD();
var cD = dE.exports, pE, fD = {}, $m = cD;
if (fD.NODE_ENV === "production")
  pE = $m.createRoot, $m.hydrateRoot;
else {
  var aT = $m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  pE = function(Y, G) {
    aT.usingClientEntryPoint = !0;
    try {
      return $m.createRoot(Y, G);
    } finally {
      aT.usingClientEntryPoint = !1;
    }
  };
}
const dD = (Y) => {
  switch (Y) {
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
      return Y;
  }
}, pD = (Y) => {
  if (!Y.designOptions || Y.designOptions !== "custom_design") return;
  const G = JSON.parse(Y.customDesigns);
  document.documentElement.style.setProperty("--barn2-bundles-bundle-text-color", G.bundleTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-text-color", G.highlightedTextColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-border-color", G.bundleBorderColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-border-color", G.highlightedBorderColor), document.documentElement.style.setProperty("--barn2-bundles-bundle-badge-color", G.bundleBadgeColor), document.documentElement.style.setProperty("--barn2-bundles-badge-text-color", G.badgeTextColor), document.documentElement.style.setProperty("--barn2-bundles-highlighted-color", G.highlightedColor), document.documentElement.style.setProperty("--barn2-bundles-table-color", G.tableColor), document.documentElement.style.setProperty("--barn2-bundles-header-text-color", G.headerTextColor), document.documentElement.style.setProperty("--barn2-bundles-background-color", G.backgroundColor), document.documentElement.style.setProperty("--barn2-bundles-text-color", G.textColor), document.documentElement.style.setProperty("--barn2-bundles-label-color", G.labelColor), document.documentElement.style.setProperty("--barn2-bundles-label-text-color", G.lebelTextColor), document.documentElement.style.setProperty("--barn2-bundles-cart-notice-bg-color", G.cartNoticeBackgroundColor), document.documentElement.style.setProperty("--barn2-bundles-cart-notice-text-color", G.cartNoticeTextColor), document.documentElement.style.setProperty("--barn2-bundles-badge-color", G.badgeColor), document.documentElement.style.setProperty("--barn2-bundles-border-color", G.borderColor);
  let M = "0";
  switch (G.cornerRadius) {
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
(function(Y) {
  (function() {
    var G = function() {
      function M() {
      }
      M.prototype = /* @__PURE__ */ Object.create(null);
      function Ie(ie, F) {
        for (var ae = F.length, q = 0; q < ae; ++q)
          ve(ie, F[q]);
      }
      var Oe = {}.hasOwnProperty;
      function ot(ie, F) {
        ie[F] = !0;
      }
      function Ne(ie, F) {
        if (F.toString !== Object.prototype.toString && !F.toString.toString().includes("[native code]")) {
          ie[F.toString()] = !0;
          return;
        }
        for (var ae in F)
          Oe.call(F, ae) && (ie[ae] = !!F[ae]);
      }
      var S = /\s+/;
      function Ge(ie, F) {
        for (var ae = F.split(S), q = ae.length, pe = 0; pe < q; ++pe)
          ie[ae[pe]] = !0;
      }
      function ve(ie, F) {
        if (F) {
          var ae = typeof F;
          ae === "string" ? Ge(ie, F) : Array.isArray(F) ? Ie(ie, F) : ae === "object" ? Ne(ie, F) : ae === "number" && ot(ie, F);
        }
      }
      function J() {
        for (var ie = arguments.length, F = Array(ie), ae = 0; ae < ie; ae++)
          F[ae] = arguments[ae];
        var q = new M();
        Ie(q, F);
        var pe = [];
        for (var Ve in q)
          q[Ve] && pe.push(Ve);
        return pe.join(" ");
      }
      return J;
    }();
    Y.exports ? (G.default = G, Y.exports = G) : window.classNames = G;
  })();
})(fT);
var vD = fT.exports;
const iT = /* @__PURE__ */ Z_(vD);
function hD({ bundleData: Y, isInEditor: G, currentVariant: M, storeDetails: Ie }) {
  var Ue, Nt, dt, at;
  const [Oe, ot] = un.useState(null), [Ne, S] = un.useState([]), [Ge, ve] = un.useState(), [J, ie] = un.useState([]), [F, ae] = un.useState(((Nt = (Ue = window.b2ProductData) == null ? void 0 : Ue.product) == null ? void 0 : Nt.options) || []), [q, pe] = un.useState(((at = (dt = window.b2ProductData) == null ? void 0 : dt.product) == null ? void 0 : at.variants) || []), [Ve, on] = un.useState([]), It = (k) => Ie.moneyFormat.replace("{{amount}}", k), st = (k) => {
    let Q = "";
    return k.discount_type === "amount" ? Q = /* @__PURE__ */ Fe.jsxs("span", { children: [
      "Save ",
      It(k.discount)
    ] }) : Q = /* @__PURE__ */ Fe.jsxs("span", { children: [
      "Save ",
      k.discount,
      "%"
    ] }), k.discount || (Q = /* @__PURE__ */ Fe.jsx("span", { children: "Regular price" })), Q;
  }, Be = (k) => (G ? window.b2ProductData.product.price : M.price) / 100, wt = (k, Q = "discounted") => {
    const w = Be() * k.quantity;
    if (Q === "regular")
      return we(w);
    let P = w;
    if (k.discount_type === "percentage" && k.discount) {
      const ge = w * k.discount / 100;
      P = w - ge;
    } else k.discount_type === "amount" && k.discount && (P = w - k.discount);
    return we(P);
  }, we = (k) => {
    const Q = Number(k), te = Number(Q.toFixed(2));
    return It(te);
  }, tt = (k) => {
    const Q = document.querySelector('.product-form__input.product-form__quantity input[type="number"]');
    Q && (Q.value = k, Q.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, $e = (k) => Oe ? Oe.id === k.id : !1, gn = (k, Q) => {
    if (!(Ve != null && Ve[k])) return "";
    const te = Ve[k].options;
    return (te == null ? void 0 : te[Q]) || "";
  }, Ot = () => {
    if (Oe === null) return;
    const k = {
      available: M.available,
      id: M.id,
      options: M.options
    }, Q = Array(Oe.quantity).fill(null).map(() => ({ ...k }));
    on(Q);
  }, rn = (k) => {
    const Q = new URL(window.location.href);
    Q.searchParams.set("variant", k), window.history.replaceState({}, "", Q.toString()), window.dispatchEvent(new Event("popstate"));
    const te = document.querySelector(".product-variant-id");
    te && (te.value = k, te.dispatchEvent(new Event("change", { bubbles: !0 })));
  }, Ft = (k, Q, te) => {
    on((w) => {
      const P = w.map((_e, He) => He === Q ? {
        ..._e,
        options: _e.options.map(
          (Ae, Et) => Et === te ? k.target.value : Ae
        )
      } : _e), ge = q.find((_e) => _e.options.every(
        (He, Ae) => He === P[Q].options[Ae]
      ));
      return rn(ge.id), P[Q].id = ge.id, P[Q].available = ge.available, P;
    });
  };
  return un.useEffect(() => {
    const k = Ne.find((Q) => Q.highlighted);
    k && (ot(k), tt(k.quantity));
  }, [Ne]), un.useEffect(() => {
    Ot();
  }, [Oe, M]), un.useEffect(() => {
    Oe !== null && tt(Oe.quantity);
  }, [Oe]), un.useEffect(() => {
    const k = Ve.every(
      (P, ge, _e) => P.id === _e[0].id
    ), Q = document.querySelector('[type="submit"]'), te = Q == null ? void 0 : Q.closest("form");
    k ? (tt(Ve.length), Q.classList.remove("b2-different-variants-selected")) : (tt(1), Q.classList.add("b2-different-variants-selected"));
    const w = async (P) => {
      if (!Q.classList.contains("b2-different-variants-selected"))
        return;
      P.preventDefault(), P.target.setAttribute("disabled", "disabled");
      const ge = document.querySelector(".product-variant-id"), He = {
        items: [
          ...Ve.filter((Ae) => Ae.id !== parseInt(ge.value)).filter((Ae) => Ae.available).map((Ae) => Ae.id).map((Ae) => ({
            id: Ae,
            quantity: 1
          }))
        ]
      };
      try {
        await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(He)
        }).then(() => {
          P.target.removeAttribute("disabled");
        });
        const Ae = new SubmitEvent("submit", {
          bubbles: !0,
          cancelable: !0
        });
        te.dispatchEvent(Ae);
      } catch {
      }
    };
    return Q == null || Q.addEventListener("click", w), () => {
      Q == null || Q.removeEventListener("click", w);
    };
  }, [Ve]), un.useEffect(() => {
    S(JSON.parse(Y.volumeBundles || [])), ie(JSON.parse(Y.previewOptions || {})), ve(Y.layout);
  }, []), /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-discount-bundles", children: [
    Y.previewEnabled && /* @__PURE__ */ Fe.jsxs(Fe.Fragment, { children: [
      (J == null ? void 0 : J.title) && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Fe.jsx("span", { children: J == null ? void 0 : J.title }) }),
      (J == null ? void 0 : J.description) && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Fe.jsx("span", { children: J == null ? void 0 : J.description }) })
    ] }),
    /* @__PURE__ */ Fe.jsx(
      "div",
      {
        className: iT(
          "barn2-discount-bundles-list",
          `barn2-dbs-layout-${Ge}`,
          `discount-columns-${Ne.length}`
        ),
        children: Ne.map((k, Q) => /* @__PURE__ */ Fe.jsxs(
          "div",
          {
            className: iT(
              "barn2-discount-bundle",
              {
                highlighted: k.highlighted,
                selected: $e(k)
              }
            ),
            onClick: () => {
              ot(k), tt(k.quantity);
            },
            children: [
              k.label.length > 0 && /* @__PURE__ */ Fe.jsx("span", { className: "barn2-highlighted-text", children: k.label }),
              /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-dbs-top", children: [
                /* @__PURE__ */ Fe.jsx("span", { className: "barn2-input-circle" }),
                /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-dbs-text-block-wrapper", children: [
                  /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-dbs-text-block", children: [
                    /* @__PURE__ */ Fe.jsx("h4", { className: "barn2-dbs-bundle-title", children: k.description }),
                    J.amountSaved && /* @__PURE__ */ Fe.jsx("p", { children: st(k) })
                  ] }),
                  Y.layout === "horizontal" && $e(k) && F[0].values.length > 1 && (Oe == null ? void 0 : Oe.quantity) > 1 && pt()
                ] })
              ] }),
              /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-dbs-bottom", children: [
                /* @__PURE__ */ Fe.jsx("span", { className: "barn2-dbs-price", children: wt(k, "discounted") }),
                J.showOriginalPrice && k.discount && /* @__PURE__ */ Fe.jsx("span", { className: "barn2-dbs-regular-price", children: wt(k, "regular") })
              ] })
            ]
          },
          Q
        ))
      }
    ),
    Y.layout === "vertical" && F[0].values.length > 1 && (Oe == null ? void 0 : Oe.quantity) > 1 && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-bars-wrapper", children: pt() })
  ] });
  function pt() {
    return /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-bars", children: Array.from({ length: Oe.quantity }).map((k, Q) => {
      var te, w;
      return /* @__PURE__ */ Fe.jsxs("div", { children: [
        /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-db-bar", "data-variant-available": (te = Ve[Q]) == null ? void 0 : te.available, children: [
          /* @__PURE__ */ Fe.jsx("span", { className: "barn2-db-bar-number", children: Q + 1 }),
          /* @__PURE__ */ Fe.jsx("div", { className: `barn2-dbs-select-variants barn2-dbs-variants-number-${F.length}`, children: F.map((P, ge) => /* @__PURE__ */ Fe.jsx("div", { className: "barn2-dbs-variant", children: /* @__PURE__ */ Fe.jsx(
            "select",
            {
              value: gn(Q, ge),
              onChange: (_e) => {
                Ft(_e, Q, ge);
              },
              children: P.values.map((_e, He) => /* @__PURE__ */ Fe.jsx("option", { value: _e, children: _e }, He))
            }
          ) }, ge)) })
        ] }),
        !((w = Ve[Q]) != null && w.available) && /* @__PURE__ */ Fe.jsx("p", { className: "barn2-dbs-stock-unavailable", children: "Sorry, this is currently unavailable." })
      ] }, Q);
    }) });
  }
}
function mD({ bundleData: Y, isInEditor: G, currentVariant: M, storeDetails: Ie }) {
  const [Oe, ot] = un.useState([]), [Ne, S] = un.useState([]);
  un.useEffect(() => {
    ot(JSON.parse(Y.pricingTiers || [])), S(JSON.parse(Y.previewOptions || {}));
  }, []);
  const Ge = (F) => {
    let ae;
    return F.discount_type === "percentage" ? ae = F.discount + "% off" : ae = ie(F.discount) + " off", /* @__PURE__ */ Fe.jsx("span", { className: "b2-pricing-tier-discount", children: ae });
  }, ve = () => (G ? window.b2ProductData.product.price : M.price) / 100, J = (F) => {
    let ae = ve();
    if (F.discount_type === "percentage" && F.discount) {
      const q = ve() * F.discount / 100;
      ae = ve() - q;
    } else F.discount_type === "amount" && F.discount && (ae = ve() - F.discount);
    return Math.max(0, ae.toFixed(2));
  }, ie = (F) => Ie.moneyFormat.replace("{{amount}}", F);
  return /* @__PURE__ */ Fe.jsxs("div", { className: "barn2-bulk-table-wrapper", children: [
    Y.previewEnabled && /* @__PURE__ */ Fe.jsxs(Fe.Fragment, { children: [
      (Ne == null ? void 0 : Ne.title) && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-main-title", children: /* @__PURE__ */ Fe.jsx("span", { children: Ne == null ? void 0 : Ne.title }) }),
      (Ne == null ? void 0 : Ne.description) && /* @__PURE__ */ Fe.jsx("div", { className: "barn2-db-main-description", children: /* @__PURE__ */ Fe.jsx("span", { children: Ne == null ? void 0 : Ne.description }) })
    ] }),
    /* @__PURE__ */ Fe.jsx("div", { className: "barn2-bulk-table-container", children: /* @__PURE__ */ Fe.jsxs("table", { className: "barn2-bulk-table", children: [
      /* @__PURE__ */ Fe.jsx("thead", { children: /* @__PURE__ */ Fe.jsxs("tr", { children: [
        /* @__PURE__ */ Fe.jsx("th", { children: "Quantity" }),
        /* @__PURE__ */ Fe.jsx("th", { children: "Discount" }),
        /* @__PURE__ */ Fe.jsx("th", { children: "Price per item" })
      ] }) }),
      /* @__PURE__ */ Fe.jsx("tbody", { children: Oe.length > 0 && Oe.map((F, ae) => /* @__PURE__ */ Fe.jsxs("tr", { children: [
        /* @__PURE__ */ Fe.jsxs("td", { children: [
          F.min_quantity,
          "-",
          F.max_quantity
        ] }),
        /* @__PURE__ */ Fe.jsx("td", { children: /* @__PURE__ */ Fe.jsx("span", { className: "discount-pill", children: Ge(F) }) }),
        /* @__PURE__ */ Fe.jsx("td", { children: ie(J(F)) })
      ] }, ae)) })
    ] }) })
  ] });
}
function yD({ bundleData: Y, isInEditor: G, storeDetails: M }) {
  const [Ie, Oe] = un.useState(null), [ot, Ne] = un.useState("$"), S = () => {
    var ie, F;
    const J = ((F = (ie = window.b2ProductData) == null ? void 0 : ie.product) == null ? void 0 : F.variants) || [];
    return J.length > 0 ? J[0] : 0;
  }, Ge = (J) => {
    var ae, q;
    const F = (((q = (ae = window.b2ProductData) == null ? void 0 : ae.product) == null ? void 0 : q.variants) || []).find((pe) => pe.id === Number(J));
    F && Oe(F);
  }, ve = () => {
    const J = document.querySelector(".product-form__input.product-form__quantity");
    J && (J.style.display = "none");
  };
  if (un.useEffect(() => {
    const ie = new URLSearchParams(window.location.search).get("variant");
    ie ? Ge(ie) : Oe(S());
    const F = new MutationObserver((q) => {
      q.forEach((pe) => {
        if (pe.type === "attributes" || pe.type === "childList") {
          const on = new URLSearchParams(window.location.search).get("variant");
          on && Ge(on);
        }
      });
    }), ae = document.querySelector("form[action*='/cart/add']");
    ae && F.observe(ae, { attributes: !0, childList: !0, subtree: !0 });
  }, []), un.useEffect(() => {
    var ie, F;
    const J = G ? window.b2ProductData.storeCurrency : (F = (ie = window == null ? void 0 : window.Shopify) == null ? void 0 : ie.currency) == null ? void 0 : F.active;
    Ne(dD(J)), pD(Y), Y.type === "volume_bundle" && ve();
  }, []), Ie !== null) {
    if (Ie !== null && Y.type === "volume_bundle")
      return /* @__PURE__ */ Fe.jsx(
        hD,
        {
          bundleData: Y,
          isInEditor: G,
          currentVariant: Ie,
          storeDetails: M
        }
      );
    if (Ie !== null && Y.type === "bulk_pricing" && Y.previewEnabled === !0)
      return /* @__PURE__ */ Fe.jsx(
        mD,
        {
          bundleData: Y,
          isInEditor: G,
          currentVariant: Ie,
          storeDetails: M,
          storeCurrency: ot
        }
      );
  }
}
function gD() {
  var ve, J, ie, F;
  const [Y, G] = un.useState((ie = (J = (ve = window == null ? void 0 : window.ShopifyAnalytics) == null ? void 0 : ve.meta) == null ? void 0 : J.product) == null ? void 0 : ie.id), [M, Ie] = un.useState(null), [Oe, ot] = un.useState(((F = window == null ? void 0 : window.b2ProductData) == null ? void 0 : F.isDesignMode) || !1), [Ne, S] = un.useState({}), Ge = async (ae) => {
    try {
      return await (await fetch("/apps/barn2-bundles-bulk-discounts/discountbundle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          productId: ae,
          isInEditor: Oe
        })
      })).json();
    } catch (q) {
      return console.error("Error fetching discount bundle:", q), null;
    }
  };
  return un.useEffect(() => {
    (async () => {
      try {
        const q = await Ge(Y);
        if (q.response === "no_discounts") return;
        Ie(q == null ? void 0 : q.eligibleProductBundle), S(q == null ? void 0 : q.store);
      } catch (q) {
        console.error("Error in useEffect:", q);
      }
    })();
  }, [Y, Oe]), M && /* @__PURE__ */ Fe.jsx(yD, { bundleData: M, isInEditor: Oe, storeDetails: Ne });
}
const lT = (Y) => {
  pE(Y).render(/* @__PURE__ */ Fe.jsx(gD, {}));
}, uT = document.getElementById("barn2_discounts_block");
if (uT)
  lT(uT);
else {
  const Y = document.querySelector("product-form.product-form");
  if (Y) {
    const G = document.createElement("div");
    G.id = "barn2_discounts", G.classList.add("barn2_discounts"), Y.parentNode.insertBefore(G, Y.nextSibling), lT(G);
  }
}
