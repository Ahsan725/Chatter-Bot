"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ai_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ai/react */ \"(app-pages-browser)/./node_modules/ai/react/dist/index.mjs\");\n/* harmony import */ var _components_GPTLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GPTLogo */ \"(app-pages-browser)/./src/app/components/GPTLogo.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./src/app/components/Header.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const { messages, input, handleInputChange, handleSubmit } = (0,ai_react__WEBPACK_IMPORTED_MODULE_3__.useChat)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-4 pb-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-t border-white/10 \".concat(message.role === \"assistant\" && \"bg-indigo-700 text-white\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-3xl mx-auto py-6 flex\",\n                        children: [\n                            message.role === \"assistant\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GPTLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 46\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-3\",\n                                children: message.content\n                            }, void 0, false, {\n                                fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, message.id, false, {\n                    fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"fixed inset-x-0 bottom-10\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background\",\n                    placeholder: \"Harness the power of Artificial Intelligence!\",\n                    value: input,\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"huPK7I7CsQMAUkxk7W0gSV/2cq0=\", false, function() {\n    return [\n        ai_react__WEBPACK_IMPORTED_MODULE_3__.useChat\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtQztBQUNRO0FBQ0Y7QUFDMUIsU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLGlCQUFpQixFQUFFQyxZQUFZLEVBQUUsR0FBR1AsaURBQU9BO0lBQ3BFLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1AsMERBQU1BOzs7OztZQUNORSxTQUFTTSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNIO29CQUVDQyxXQUFXLDRCQUVWLE9BRENFLFFBQVFDLElBQUksS0FBSyxlQUFlOzhCQUdsQyw0RUFBQ0o7d0JBQUlDLFdBQVU7OzRCQUNaRSxRQUFRQyxJQUFJLEtBQUssNkJBQWUsOERBQUNYLDJEQUFPQTs7Ozs7MENBQ3pDLDhEQUFDWTtnQ0FBS0osV0FBVTswQ0FBUUUsUUFBUUcsT0FBTzs7Ozs7Ozs7Ozs7O21CQVBwQ0gsUUFBUUksRUFBRTs7Ozs7MEJBWW5CLDhEQUFDQztnQkFBS1AsV0FBVTtnQkFBNEJRLFVBQVVWOzBCQUNwRCw0RUFBQ0Y7b0JBQ0NJLFdBQVU7b0JBQ1ZTLGFBQVk7b0JBQ1pDLE9BQU9kO29CQUNQZSxVQUFVZDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0E3QndCSDs7UUFDdUNILDZDQUFPQTs7O0tBRDlDRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VDaGF0IH0gZnJvbSBcImFpL3JlYWN0XCI7XG5pbXBvcnQgR1BUTG9nbyBmcm9tIFwiLi9jb21wb25lbnRzL0dQVExvZ29cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgbWVzc2FnZXMsIGlucHV0LCBoYW5kbGVJbnB1dENoYW5nZSwgaGFuZGxlU3VibWl0IH0gPSB1c2VDaGF0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHBiLTMyXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e21lc3NhZ2UuaWR9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwICR7XG4gICAgICAgICAgICBtZXNzYWdlLnJvbGUgPT09IFwiYXNzaXN0YW50XCIgJiYgXCJiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBweS02IGZsZXhcIj5cbiAgICAgICAgICAgIHttZXNzYWdlLnJvbGUgPT09IFwiYXNzaXN0YW50XCIgJiYgPEdQVExvZ28gLz59XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0zXCI+e21lc3NhZ2UuY29udGVudH08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXgtMCBib3R0b20tMTBcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctM3hsIHNoYWRvdy14bCB3LWZ1bGwgbXgtYXV0byBweS04IGZsZXggaC0xMCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItaW5wdXQgYmctYmFja2dyb3VuZCBweC0zIHRleHQtc20gcmluZy1vZmZzZXQtYmFja2dyb3VuZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJIYXJuZXNzIHRoZSBwb3dlciBvZiBBcnRpZmljaWFsIEludGVsbGlnZW5jZSFcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUNoYXQiLCJHUFRMb2dvIiwiSGVhZGVyIiwiSG9tZSIsIm1lc3NhZ2VzIiwiaW5wdXQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1lc3NhZ2UiLCJyb2xlIiwic3BhbiIsImNvbnRlbnQiLCJpZCIsImZvcm0iLCJvblN1Ym1pdCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});