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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var ai_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ai/react */ \"(app-pages-browser)/./node_modules/ai/react/dist/index.mjs\");\n/* harmony import */ var _components_GPTLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/GPTLogo */ \"(app-pages-browser)/./src/app/components/GPTLogo.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"(app-pages-browser)/./src/app/components/Header.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const { messages, input, handleInputChange, handleSubmit } = (0,ai_react__WEBPACK_IMPORTED_MODULE_3__.useChat)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-4 pb-32\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            messages.map((message)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-t border-black/10 \".concat(message.role === \"assistant\" ? \"bg-indigo-700 text-white\" : \"bg-white text-black\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-3xl mx-auto py-6 flex\",\n                        children: [\n                            message.role === \"assistant\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GPTLogo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 46\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-3\",\n                                children: message.content\n                            }, void 0, false, {\n                                fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, message.id, false, {\n                    fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"fixed inset-x-0 bottom-10\",\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background\",\n                    placeholder: \"Harness the power of Artificial Intelligence!\",\n                    value: input,\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/syedahsan/Desktop/ChatGPT-Clone/src/app/page.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"huPK7I7CsQMAUkxk7W0gSV/2cq0=\", false, function() {\n    return [\n        ai_react__WEBPACK_IMPORTED_MODULE_3__.useChat\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNtQztBQUNRO0FBQ0Y7QUFDMUIsU0FBU0c7O0lBQ3RCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLGlCQUFpQixFQUFFQyxZQUFZLEVBQUUsR0FBR1AsaURBQU9BO0lBQ3BFLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ1AsMERBQU1BOzs7OztZQUNORSxTQUFTTSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNIO29CQUVDQyxXQUFXLDRCQUVWLE9BRENFLFFBQVFDLElBQUksS0FBSyxjQUFjLDZCQUE2Qjs4QkFHOUQsNEVBQUNKO3dCQUFJQyxXQUFVOzs0QkFDWkUsUUFBUUMsSUFBSSxLQUFLLDZCQUFlLDhEQUFDWCwyREFBT0E7Ozs7OzBDQUN6Qyw4REFBQ1k7Z0NBQUtKLFdBQVU7MENBQVFFLFFBQVFHLE9BQU87Ozs7Ozs7Ozs7OzttQkFQcENILFFBQVFJLEVBQUU7Ozs7OzBCQVluQiw4REFBQ0M7Z0JBQUtQLFdBQVU7Z0JBQTRCUSxVQUFVVjswQkFDcEQsNEVBQUNGO29CQUNDSSxXQUFVO29CQUNWUyxhQUFZO29CQUNaQyxPQUFPZDtvQkFDUGUsVUFBVWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBN0J3Qkg7O1FBQ3VDSCw2Q0FBT0E7OztLQUQ5Q0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlQ2hhdCB9IGZyb20gXCJhaS9yZWFjdFwiO1xuaW1wb3J0IEdQVExvZ28gZnJvbSBcIi4vY29tcG9uZW50cy9HUFRMb2dvXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IG1lc3NhZ2VzLCBpbnB1dCwgaGFuZGxlSW5wdXRDaGFuZ2UsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlQ2hhdCgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBwYi0zMlwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXttZXNzYWdlLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGJvcmRlci10IGJvcmRlci1ibGFjay8xMCAke1xuICAgICAgICAgICAgbWVzc2FnZS5yb2xlID09PSBcImFzc2lzdGFudFwiID8gXCJiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGVcIiA6IFwiYmctd2hpdGUgdGV4dC1ibGFja1wiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTN4bCBteC1hdXRvIHB5LTYgZmxleFwiPlxuICAgICAgICAgICAge21lc3NhZ2Uucm9sZSA9PT0gXCJhc3Npc3RhbnRcIiAmJiA8R1BUTG9nbyAvPn1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTNcIj57bWVzc2FnZS5jb250ZW50fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cblxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQteC0wIGJvdHRvbS0xMFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy0zeGwgc2hhZG93LXhsIHctZnVsbCBteC1hdXRvIHB5LTggZmxleCBoLTEwIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1pbnB1dCBiZy1iYWNrZ3JvdW5kIHB4LTMgdGV4dC1zbSByaW5nLW9mZnNldC1iYWNrZ3JvdW5kXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhhcm5lc3MgdGhlIHBvd2VyIG9mIEFydGlmaWNpYWwgSW50ZWxsaWdlbmNlIVwiXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlQ2hhdCIsIkdQVExvZ28iLCJIZWFkZXIiLCJIb21lIiwibWVzc2FnZXMiLCJpbnB1dCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibWVzc2FnZSIsInJvbGUiLCJzcGFuIiwiY29udGVudCIsImlkIiwiZm9ybSIsIm9uU3VibWl0IiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});