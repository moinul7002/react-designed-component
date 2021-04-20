webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/HOCs/withRequest.js":
/*!*********************************!*\
  !*** ./src/HOCs/withRequest.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");





var _jsxFileName = "J:\\react-search-designed-component\\src\\HOCs\\withRequest.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var withRequest = function withRequest(baseUrl, routeName) {
  return function (Component) {
    var _s = $RefreshSig$();

    return _s(function (props) {
      _s();

      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useReducer"])(_reducers__WEBPACK_IMPORTED_MODULE_6__["default"], {
        records: [],
        status: _reducers__WEBPACK_IMPORTED_MODULE_6__["REQUEST_STATUS"].LOADING,
        error: null
      }),
          _useReducer$ = _useReducer[0],
          records = _useReducer$.records,
          status = _useReducer$.status,
          error = _useReducer$.error,
          dispatch = _useReducer[1];

      Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
        var fetchData = /*#__PURE__*/function () {
          var _ref = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
            var response;
            return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("".concat(baseUrl, "/").concat(routeName));

                  case 3:
                    response = _context.sent;
                    dispatch({
                      records: response.data,
                      type: _actions__WEBPACK_IMPORTED_MODULE_7__["GET_ALL_SUCCESS"]
                    });
                    _context.next = 10;
                    break;

                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    dispatch({
                      type: _actions__WEBPACK_IMPORTED_MODULE_7__["GET_ALL_FAILURE"],
                      error: _context.t0
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 7]]);
          }));

          return function fetchData() {
            return _ref.apply(this, arguments);
          };
        }();

        fetchData();
      }, [baseUrl, routeName]);
      var propsLocal = {
        records: records,
        status: status,
        error: error,
        put: function () {
          var _put = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(record) {
            return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return axios__WEBPACK_IMPORTED_MODULE_5___default.a.put("".concat(baseUrl, "/").concat(routeName, "/").concat(record.id), record);

                  case 3:
                    dispatch({
                      type: _actions__WEBPACK_IMPORTED_MODULE_7__["PUT_SUCCESS"],
                      singleRecord: record
                    });
                    _context2.next = 9;
                    break;

                  case 6:
                    _context2.prev = 6;
                    _context2.t0 = _context2["catch"](0);
                    dispatch({
                      type: _actions__WEBPACK_IMPORTED_MODULE_7__["PUT_FAILURE"],
                      error: _context2.t0
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[0, 6]]);
          }));

          function put(_x) {
            return _put.apply(this, arguments);
          }

          return put;
        }()
      };
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, props), propsLocal), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 10
      }, _this);
    }, "to6ZE4cp0O5ABh6IXZAdwYu2Wx4=");
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withRequest);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hPQ3Mvd2l0aFJlcXVlc3QuanMiXSwibmFtZXMiOlsid2l0aFJlcXVlc3QiLCJiYXNlVXJsIiwicm91dGVOYW1lIiwiQ29tcG9uZW50IiwicHJvcHMiLCJ1c2VSZWR1Y2VyIiwiUmVxdWVzdFJlZHVjZXIiLCJyZWNvcmRzIiwic3RhdHVzIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiZXJyb3IiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwidHlwZSIsIkdFVF9BTExfU1VDQ0VTUyIsIkdFVF9BTExfRkFJTFVSRSIsInByb3BzTG9jYWwiLCJwdXQiLCJyZWNvcmQiLCJpZCIsIlBVVF9TVUNDRVNTIiwic2luZ2xlUmVjb3JkIiwiUFVUX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWO0FBQUEsU0FBd0IsVUFBQ0MsU0FBRDtBQUFBOztBQUFBLGNBQWUsVUFBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQ3JCQyx3REFBVSxDQUFDQyxpREFBRCxFQUFpQjtBQUN4RUMsZUFBTyxFQUFFLEVBRCtEO0FBRXhFQyxjQUFNLEVBQUVDLHdEQUFjLENBQUNDLE9BRmlEO0FBR3hFQyxhQUFLLEVBQUU7QUFIaUUsT0FBakIsQ0FEVztBQUFBO0FBQUEsVUFDM0RKLE9BRDJELGdCQUMzREEsT0FEMkQ7QUFBQSxVQUNsREMsTUFEa0QsZ0JBQ2xEQSxNQURrRDtBQUFBLFVBQzFDRyxLQUQwQyxnQkFDMUNBLEtBRDBDO0FBQUEsVUFDakNDLFFBRGlDOztBQU9wRUMsNkRBQVMsQ0FBQyxZQUFNO0FBQ2QsWUFBTUMsU0FBUztBQUFBLGtTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFFU0MsNENBQUssQ0FBQ0MsR0FBTixXQUFhZixPQUFiLGNBQXdCQyxTQUF4QixFQUZUOztBQUFBO0FBRVJlLDRCQUZRO0FBR2RMLDRCQUFRLENBQUM7QUFDUEwsNkJBQU8sRUFBRVUsUUFBUSxDQUFDQyxJQURYO0FBRVBDLDBCQUFJLEVBQUVDLHdEQUFlQTtBQUZkLHFCQUFELENBQVI7QUFIYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFkUiw0QkFBUSxDQUFDO0FBQ1BPLDBCQUFJLEVBQUVFLHdEQURDO0FBRVBWLDJCQUFLO0FBRkUscUJBQUQsQ0FBUjs7QUFSYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFIOztBQUFBLDBCQUFURyxTQUFTO0FBQUE7QUFBQTtBQUFBLFdBQWY7O0FBY0FBLGlCQUFTO0FBQ1YsT0FoQlEsRUFnQk4sQ0FBQ2IsT0FBRCxFQUFVQyxTQUFWLENBaEJNLENBQVQ7QUFrQkEsVUFBTW9CLFVBQVUsR0FBRztBQUNqQmYsZUFBTyxFQUFQQSxPQURpQjtBQUVqQkMsY0FBTSxFQUFOQSxNQUZpQjtBQUdqQkcsYUFBSyxFQUFMQSxLQUhpQjtBQUlqQlksV0FBRztBQUFBLGtTQUFFLGtCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRUtULDRDQUFLLENBQUNRLEdBQU4sV0FBYXRCLE9BQWIsY0FBd0JDLFNBQXhCLGNBQXFDc0IsTUFBTSxDQUFDQyxFQUE1QyxHQUFrREQsTUFBbEQsQ0FGTDs7QUFBQTtBQUdEWiw0QkFBUSxDQUFDO0FBQ1BPLDBCQUFJLEVBQUVPLG9EQURDO0FBRVBDLGtDQUFZLEVBQUVIO0FBRlAscUJBQUQsQ0FBUjtBQUhDO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUURaLDRCQUFRLENBQUM7QUFDUE8sMEJBQUksRUFBRVMsb0RBREM7QUFFUGpCLDJCQUFLO0FBRkUscUJBQUQsQ0FBUjs7QUFSQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFGOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBSmMsT0FBbkI7QUFtQkEsMEJBQU8scUVBQUMsU0FBRCxrQ0FBZVAsS0FBZixHQUEwQmtCLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBN0MyQztBQUFBLEdBQXhCO0FBQUEsQ0FBcEI7O0FBK0NldEIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BlYWtlcnMuYzJmNGYwYzFiMzU1NzgxOGM2MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVxdWVzdFJlZHVjZXIsIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHtcclxuICBHRVRfQUxMX1NVQ0NFU1MsXHJcbiAgR0VUX0FMTF9GQUlMVVJFLFxyXG4gIFBVVF9TVUNDRVNTLFxyXG4gIFBVVF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5jb25zdCB3aXRoUmVxdWVzdCA9IChiYXNlVXJsLCByb3V0ZU5hbWUpID0+IChDb21wb25lbnQpID0+IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt7IHJlY29yZHMsIHN0YXR1cywgZXJyb3IgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihSZXF1ZXN0UmVkdWNlciwge1xyXG4gICAgcmVjb3JkczogW10sXHJcbiAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkxPQURJTkcsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS8ke3JvdXRlTmFtZX1gKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICByZWNvcmRzOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgdHlwZTogR0VUX0FMTF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0FMTF9GQUlMVVJFLFxyXG4gICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbYmFzZVVybCwgcm91dGVOYW1lXSk7XHJcblxyXG4gIGNvbnN0IHByb3BzTG9jYWwgPSB7XHJcbiAgICByZWNvcmRzLFxyXG4gICAgc3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICBwdXQ6IGFzeW5jIChyZWNvcmQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7YmFzZVVybH0vJHtyb3V0ZU5hbWV9LyR7cmVjb3JkLmlkfWAsIHJlY29yZCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogUFVUX1NVQ0NFU1MsXHJcbiAgICAgICAgICBzaW5nbGVSZWNvcmQ6IHJlY29yZCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFBVVF9GQUlMVVJFLFxyXG4gICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHsuLi5wcm9wc0xvY2FsfT48L0NvbXBvbmVudD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVxdWVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==