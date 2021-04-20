webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/customHooks/useRequest.js":
/*!***************************************!*\
  !*** ./src/customHooks/useRequest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");



var _s = $RefreshSig$();






var useRequest = function useRequest(baseUrl, routeName) {
  _s();

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], {
    records: [],
    status: _reducers__WEBPACK_IMPORTED_MODULE_4__["REQUEST_STATUS"].LOADING,
    error: null
  }),
      _useReducer$ = _useReducer[0],
      records = _useReducer$.records,
      status = _useReducer$.status,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(baseUrl, "/").concat(routeName));

              case 3:
                response = _context.sent;
                dispatch({
                  records: response.data,
                  type: _actions__WEBPACK_IMPORTED_MODULE_5__["GET_ALL_SUCCESS"]
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: _actions__WEBPACK_IMPORTED_MODULE_5__["GET_ALL_FAILURE"],
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
      var _put = Object(J_react_search_designed_component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(record) {
        return J_react_search_designed_component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("".concat(baseUrl, "/").concat(routeName, "/").concat(record.id), record);

              case 3:
                dispatch({
                  type: _actions__WEBPACK_IMPORTED_MODULE_5__["PUT_SUCCESS"],
                  singleRecord: record
                });
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                dispatch({
                  type: _actions__WEBPACK_IMPORTED_MODULE_5__["PUT_FAILURE"],
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
  return propsLocal;
};

_s(useRequest, "to6ZE4cp0O5ABh6IXZAdwYu2Wx4=");

/* harmony default export */ __webpack_exports__["default"] = (useRequest);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2N1c3RvbUhvb2tzL3VzZVJlcXVlc3QuanMiXSwibmFtZXMiOlsidXNlUmVxdWVzdCIsImJhc2VVcmwiLCJyb3V0ZU5hbWUiLCJ1c2VSZWR1Y2VyIiwiUmVxdWVzdFJlZHVjZXIiLCJyZWNvcmRzIiwic3RhdHVzIiwiUkVRVUVTVF9TVEFUVVMiLCJMT0FESU5HIiwiZXJyb3IiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJkYXRhIiwidHlwZSIsIkdFVF9BTExfU1VDQ0VTUyIsIkdFVF9BTExfRkFJTFVSRSIsInByb3BzTG9jYWwiLCJwdXQiLCJyZWNvcmQiLCJpZCIsIlBVVF9TVUNDRVNTIiwic2luZ2xlUmVjb3JkIiwiUFVUX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQVVDLFNBQVYsRUFBd0I7QUFBQTs7QUFBQSxvQkFDTUMsd0RBQVUsQ0FBQ0MsaURBQUQsRUFBaUI7QUFDeEVDLFdBQU8sRUFBRSxFQUQrRDtBQUV4RUMsVUFBTSxFQUFFQyx3REFBYyxDQUFDQyxPQUZpRDtBQUd4RUMsU0FBSyxFQUFFO0FBSGlFLEdBQWpCLENBRGhCO0FBQUE7QUFBQSxNQUNoQ0osT0FEZ0MsZ0JBQ2hDQSxPQURnQztBQUFBLE1BQ3ZCQyxNQUR1QixnQkFDdkJBLE1BRHVCO0FBQUEsTUFDZkcsS0FEZSxnQkFDZkEsS0FEZTtBQUFBLE1BQ05DLFFBRE07O0FBT3pDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTO0FBQUEsOFJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVTQyw0Q0FBSyxDQUFDQyxHQUFOLFdBQWFiLE9BQWIsY0FBd0JDLFNBQXhCLEVBRlQ7O0FBQUE7QUFFUmEsd0JBRlE7QUFHZEwsd0JBQVEsQ0FBQztBQUNQTCx5QkFBTyxFQUFFVSxRQUFRLENBQUNDLElBRFg7QUFFUEMsc0JBQUksRUFBRUMsd0RBQWVBO0FBRmQsaUJBQUQsQ0FBUjtBQUhjO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUWRSLHdCQUFRLENBQUM7QUFDUE8sc0JBQUksRUFBRUUsd0RBREM7QUFFUFYsdUJBQUs7QUFGRSxpQkFBRCxDQUFSOztBQVJjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRHLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFjQUEsYUFBUztBQUNWLEdBaEJRLEVBZ0JOLENBQUNYLE9BQUQsRUFBVUMsU0FBVixDQWhCTSxDQUFUO0FBa0JBLE1BQU1rQixVQUFVLEdBQUc7QUFDakJmLFdBQU8sRUFBUEEsT0FEaUI7QUFFakJDLFVBQU0sRUFBTkEsTUFGaUI7QUFHakJHLFNBQUssRUFBTEEsS0FIaUI7QUFJakJZLE9BQUc7QUFBQSw4UkFBRSxrQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVLVCw0Q0FBSyxDQUFDUSxHQUFOLFdBQWFwQixPQUFiLGNBQXdCQyxTQUF4QixjQUFxQ29CLE1BQU0sQ0FBQ0MsRUFBNUMsR0FBa0RELE1BQWxELENBRkw7O0FBQUE7QUFHRFosd0JBQVEsQ0FBQztBQUNQTyxzQkFBSSxFQUFFTyxvREFEQztBQUVQQyw4QkFBWSxFQUFFSDtBQUZQLGlCQUFELENBQVI7QUFIQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFEWix3QkFBUSxDQUFDO0FBQ1BPLHNCQUFJLEVBQUVTLG9EQURDO0FBRVBqQix1QkFBSztBQUZFLGlCQUFELENBQVI7O0FBUkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUpjLEdBQW5CO0FBbUJBLFNBQU9XLFVBQVA7QUFDRCxDQTdDRDs7R0FBTXBCLFU7O0FBK0NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zcGVha2Vycy42MmNhZGZhMzZkYjRiMDJkNWRjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZXF1ZXN0UmVkdWNlciwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQge1xyXG4gIEdFVF9BTExfU1VDQ0VTUyxcclxuICBHRVRfQUxMX0ZBSUxVUkUsXHJcbiAgUFVUX1NVQ0NFU1MsXHJcbiAgUFVUX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmNvbnN0IHVzZVJlcXVlc3QgPSAoYmFzZVVybCwgcm91dGVOYW1lKSA9PiB7XHJcbiAgY29uc3QgW3sgcmVjb3Jkcywgc3RhdHVzLCBlcnJvciB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFJlcXVlc3RSZWR1Y2VyLCB7XHJcbiAgICByZWNvcmRzOiBbXSxcclxuICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuTE9BRElORyxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9LyR7cm91dGVOYW1lfWApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHJlY29yZHM6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB0eXBlOiBHRVRfQUxMX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfQUxMX0ZBSUxVUkUsXHJcbiAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtiYXNlVXJsLCByb3V0ZU5hbWVdKTtcclxuXHJcbiAgY29uc3QgcHJvcHNMb2NhbCA9IHtcclxuICAgIHJlY29yZHMsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHB1dDogYXN5bmMgKHJlY29yZCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtiYXNlVXJsfS8ke3JvdXRlTmFtZX0vJHtyZWNvcmQuaWR9YCwgcmVjb3JkKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBQVVRfU1VDQ0VTUyxcclxuICAgICAgICAgIHNpbmdsZVJlY29yZDogcmVjb3JkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogUFVUX0ZBSUxVUkUsXHJcbiAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiBwcm9wc0xvY2FsO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==