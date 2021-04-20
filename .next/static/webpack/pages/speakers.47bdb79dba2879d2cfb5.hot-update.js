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

    return _s(function () {
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
      var props = {
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
                      record: record
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
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hPQ3Mvd2l0aFJlcXVlc3QuanMiXSwibmFtZXMiOlsid2l0aFJlcXVlc3QiLCJiYXNlVXJsIiwicm91dGVOYW1lIiwiQ29tcG9uZW50IiwidXNlUmVkdWNlciIsIlJlcXVlc3RSZWR1Y2VyIiwicmVjb3JkcyIsInN0YXR1cyIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsImVycm9yIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInR5cGUiLCJHRVRfQUxMX1NVQ0NFU1MiLCJHRVRfQUxMX0ZBSUxVUkUiLCJwcm9wcyIsInB1dCIsInJlY29yZCIsImlkIiwiUFVUX1NVQ0NFU1MiLCJQVVRfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQVVDLFNBQVY7QUFBQSxTQUF3QixVQUFDQyxTQUFEO0FBQUE7O0FBQUEsY0FBZSxZQUFNO0FBQUE7O0FBQUEsd0JBQ2hCQyx3REFBVSxDQUFDQyxpREFBRCxFQUFpQjtBQUN4RUMsZUFBTyxFQUFFLEVBRCtEO0FBRXhFQyxjQUFNLEVBQUVDLHdEQUFjLENBQUNDLE9BRmlEO0FBR3hFQyxhQUFLLEVBQUU7QUFIaUUsT0FBakIsQ0FETTtBQUFBO0FBQUEsVUFDdERKLE9BRHNELGdCQUN0REEsT0FEc0Q7QUFBQSxVQUM3Q0MsTUFENkMsZ0JBQzdDQSxNQUQ2QztBQUFBLFVBQ3JDRyxLQURxQyxnQkFDckNBLEtBRHFDO0FBQUEsVUFDNUJDLFFBRDRCOztBQU8vREMsNkRBQVMsQ0FBQyxZQUFNO0FBQ2QsWUFBTUMsU0FBUztBQUFBLGtTQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFFU0MsNENBQUssQ0FBQ0MsR0FBTixXQUFhZCxPQUFiLGNBQXdCQyxTQUF4QixFQUZUOztBQUFBO0FBRVJjLDRCQUZRO0FBR2RMLDRCQUFRLENBQUM7QUFDUEwsNkJBQU8sRUFBRVUsUUFBUSxDQUFDQyxJQURYO0FBRVBDLDBCQUFJLEVBQUVDLHdEQUFlQTtBQUZkLHFCQUFELENBQVI7QUFIYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFkUiw0QkFBUSxDQUFDO0FBQ1BPLDBCQUFJLEVBQUVFLHdEQURDO0FBRVBWLDJCQUFLO0FBRkUscUJBQUQsQ0FBUjs7QUFSYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFIOztBQUFBLDBCQUFURyxTQUFTO0FBQUE7QUFBQTtBQUFBLFdBQWY7O0FBY0FBLGlCQUFTO0FBQ1YsT0FoQlEsRUFnQk4sQ0FBQ1osT0FBRCxFQUFVQyxTQUFWLENBaEJNLENBQVQ7QUFrQkEsVUFBTW1CLEtBQUssR0FBRztBQUNaZixlQUFPLEVBQVBBLE9BRFk7QUFFWkMsY0FBTSxFQUFOQSxNQUZZO0FBR1pHLGFBQUssRUFBTEEsS0FIWTtBQUlaWSxXQUFHO0FBQUEsa1NBQUUsa0JBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFFS1QsNENBQUssQ0FBQ1EsR0FBTixXQUFhckIsT0FBYixjQUF3QkMsU0FBeEIsY0FBcUNxQixNQUFNLENBQUNDLEVBQTVDLEdBQWtERCxNQUFsRCxDQUZMOztBQUFBO0FBR0RaLDRCQUFRLENBQUM7QUFDUE8sMEJBQUksRUFBRU8sb0RBREM7QUFFUEYsNEJBQU0sRUFBRUE7QUFGRCxxQkFBRCxDQUFSO0FBSEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRRFosNEJBQVEsQ0FBQztBQUNQTywwQkFBSSxFQUFFUSxvREFEQztBQUVQaEIsMkJBQUs7QUFGRSxxQkFBRCxDQUFSOztBQVJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFKUyxPQUFkO0FBbUJBLDBCQUFPLHFFQUFDLFNBQUQsb0JBQWVXLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsS0E3QzJDO0FBQUEsR0FBeEI7QUFBQSxDQUFwQjs7QUErQ2VyQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy40N2JkYjc5ZGJhMjg3OWQyY2ZiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZXF1ZXN0UmVkdWNlciwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9BTExfU1VDQ0VTUyxcclxuICBHRVRfQUxMX0ZBSUxVUkUsXHJcbiAgUFVUX1NVQ0NFU1MsXHJcbiAgUFVUX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IHdpdGhSZXF1ZXN0ID0gKGJhc2VVcmwsIHJvdXRlTmFtZSkgPT4gKENvbXBvbmVudCkgPT4gKCkgPT4ge1xyXG4gIGNvbnN0IFt7IHJlY29yZHMsIHN0YXR1cywgZXJyb3IgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihSZXF1ZXN0UmVkdWNlciwge1xyXG4gICAgcmVjb3JkczogW10sXHJcbiAgICBzdGF0dXM6IFJFUVVFU1RfU1RBVFVTLkxPQURJTkcsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS8ke3JvdXRlTmFtZX1gKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICByZWNvcmRzOiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgdHlwZTogR0VUX0FMTF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogR0VUX0FMTF9GQUlMVVJFLFxyXG4gICAgICAgICAgZXJyb3I6IGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbYmFzZVVybCwgcm91dGVOYW1lXSk7XHJcblxyXG4gIGNvbnN0IHByb3BzID0ge1xyXG4gICAgcmVjb3JkcyxcclxuICAgIHN0YXR1cyxcclxuICAgIGVycm9yLFxyXG4gICAgcHV0OiBhc3luYyAocmVjb3JkKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucHV0KGAke2Jhc2VVcmx9LyR7cm91dGVOYW1lfS8ke3JlY29yZC5pZH1gLCByZWNvcmQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFBVVF9TVUNDRVNTLFxyXG4gICAgICAgICAgcmVjb3JkOiByZWNvcmQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBQVVRfRkFJTFVSRSxcclxuICAgICAgICAgIGVycm9yOiBlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfT48L0NvbXBvbmVudD47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVxdWVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==