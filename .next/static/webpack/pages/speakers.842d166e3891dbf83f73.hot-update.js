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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0hPQ3Mvd2l0aFJlcXVlc3QuanMiXSwibmFtZXMiOlsid2l0aFJlcXVlc3QiLCJiYXNlVXJsIiwicm91dGVOYW1lIiwiQ29tcG9uZW50IiwidXNlUmVkdWNlciIsIlJlcXVlc3RSZWR1Y2VyIiwicmVjb3JkcyIsInN0YXR1cyIsIlJFUVVFU1RfU1RBVFVTIiwiTE9BRElORyIsImVycm9yIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJheGlvcyIsImdldCIsInJlc3BvbnNlIiwiZGF0YSIsInR5cGUiLCJHRVRfQUxMX1NVQ0NFU1MiLCJHRVRfQUxMX0ZBSUxVUkUiLCJwcm9wc0xvY2FsIiwicHV0IiwicmVjb3JkIiwiaWQiLCJQVVRfU1VDQ0VTUyIsInNpbmdsZVJlY29yZCIsIlBVVF9GQUlMVVJFIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVQyxTQUFWO0FBQUEsU0FBd0IsVUFBQ0MsU0FBRDtBQUFBOztBQUFBLGNBQWUsWUFBTTtBQUFBOztBQUFBLHdCQUNoQkMsd0RBQVUsQ0FBQ0MsaURBQUQsRUFBaUI7QUFDeEVDLGVBQU8sRUFBRSxFQUQrRDtBQUV4RUMsY0FBTSxFQUFFQyx3REFBYyxDQUFDQyxPQUZpRDtBQUd4RUMsYUFBSyxFQUFFO0FBSGlFLE9BQWpCLENBRE07QUFBQTtBQUFBLFVBQ3RESixPQURzRCxnQkFDdERBLE9BRHNEO0FBQUEsVUFDN0NDLE1BRDZDLGdCQUM3Q0EsTUFENkM7QUFBQSxVQUNyQ0csS0FEcUMsZ0JBQ3JDQSxLQURxQztBQUFBLFVBQzVCQyxRQUQ0Qjs7QUFPL0RDLDZEQUFTLENBQUMsWUFBTTtBQUNkLFlBQU1DLFNBQVM7QUFBQSxrU0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRVNDLDRDQUFLLENBQUNDLEdBQU4sV0FBYWQsT0FBYixjQUF3QkMsU0FBeEIsRUFGVDs7QUFBQTtBQUVSYyw0QkFGUTtBQUdkTCw0QkFBUSxDQUFDO0FBQ1BMLDZCQUFPLEVBQUVVLFFBQVEsQ0FBQ0MsSUFEWDtBQUVQQywwQkFBSSxFQUFFQyx3REFBZUE7QUFGZCxxQkFBRCxDQUFSO0FBSGM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRZFIsNEJBQVEsQ0FBQztBQUNQTywwQkFBSSxFQUFFRSx3REFEQztBQUVQViwyQkFBSztBQUZFLHFCQUFELENBQVI7O0FBUmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSDs7QUFBQSwwQkFBVEcsU0FBUztBQUFBO0FBQUE7QUFBQSxXQUFmOztBQWNBQSxpQkFBUztBQUNWLE9BaEJRLEVBZ0JOLENBQUNaLE9BQUQsRUFBVUMsU0FBVixDQWhCTSxDQUFUO0FBa0JBLFVBQU1tQixVQUFVLEdBQUc7QUFDakJmLGVBQU8sRUFBUEEsT0FEaUI7QUFFakJDLGNBQU0sRUFBTkEsTUFGaUI7QUFHakJHLGFBQUssRUFBTEEsS0FIaUI7QUFJakJZLFdBQUc7QUFBQSxrU0FBRSxrQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUVLVCw0Q0FBSyxDQUFDUSxHQUFOLFdBQWFyQixPQUFiLGNBQXdCQyxTQUF4QixjQUFxQ3FCLE1BQU0sQ0FBQ0MsRUFBNUMsR0FBa0RELE1BQWxELENBRkw7O0FBQUE7QUFHRFosNEJBQVEsQ0FBQztBQUNQTywwQkFBSSxFQUFFTyxvREFEQztBQUVQQyxrQ0FBWSxFQUFFSDtBQUZQLHFCQUFELENBQVI7QUFIQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFEWiw0QkFBUSxDQUFDO0FBQ1BPLDBCQUFJLEVBQUVTLG9EQURDO0FBRVBqQiwyQkFBSztBQUZFLHFCQUFELENBQVI7O0FBUkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUpjLE9BQW5CO0FBbUJBLDBCQUFPLHFFQUFDLFNBQUQsa0NBQWVrQixLQUFmLEdBQTBCUCxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQTdDMkM7QUFBQSxHQUF4QjtBQUFBLENBQXBCOztBQStDZXJCLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NwZWFrZXJzLjg0MmQxNjZlMzg5MWRiZjgzZjczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlcXVlc3RSZWR1Y2VyLCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7XHJcbiAgR0VUX0FMTF9TVUNDRVNTLFxyXG4gIEdFVF9BTExfRkFJTFVSRSxcclxuICBQVVRfU1VDQ0VTUyxcclxuICBQVVRfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuY29uc3Qgd2l0aFJlcXVlc3QgPSAoYmFzZVVybCwgcm91dGVOYW1lKSA9PiAoQ29tcG9uZW50KSA9PiAoKSA9PiB7XHJcbiAgY29uc3QgW3sgcmVjb3Jkcywgc3RhdHVzLCBlcnJvciB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKFJlcXVlc3RSZWR1Y2VyLCB7XHJcbiAgICByZWNvcmRzOiBbXSxcclxuICAgIHN0YXR1czogUkVRVUVTVF9TVEFUVVMuTE9BRElORyxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9LyR7cm91dGVOYW1lfWApO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHJlY29yZHM6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICB0eXBlOiBHRVRfQUxMX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBHRVRfQUxMX0ZBSUxVUkUsXHJcbiAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtiYXNlVXJsLCByb3V0ZU5hbWVdKTtcclxuXHJcbiAgY29uc3QgcHJvcHNMb2NhbCA9IHtcclxuICAgIHJlY29yZHMsXHJcbiAgICBzdGF0dXMsXHJcbiAgICBlcnJvcixcclxuICAgIHB1dDogYXN5bmMgKHJlY29yZCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtiYXNlVXJsfS8ke3JvdXRlTmFtZX0vJHtyZWNvcmQuaWR9YCwgcmVjb3JkKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBQVVRfU1VDQ0VTUyxcclxuICAgICAgICAgIHNpbmdsZVJlY29yZDogcmVjb3JkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogUFVUX0ZBSUxVUkUsXHJcbiAgICAgICAgICBlcnJvcjogZSxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gey4uLnByb3BzTG9jYWx9PjwvQ29tcG9uZW50PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZXF1ZXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9