/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bird.js":
/*!*********************!*\
  !*** ./src/bird.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bird)\n/* harmony export */ });\nconst CONSTANTS = {\r\n  GRAVITY: 0.3,\r\n  FLAP_SPEED: -6,\r\n  TERMINAL_VEL: 12,\r\n  BIRD_WIDTH: 40,\r\n  BIRD_HEIGHT: 30,\r\n};\r\n\r\nclass Bird {\r\n  constructor(dimensions) {\r\n    this.dimensions = dimensions;\r\n    this.velocity = 0;\r\n    this.x = dimensions.width / 3;\r\n    this.y = dimensions.height / 2;\r\n  }\r\n\r\n  move() {\r\n    this.y += this.velocity;\r\n    this.velocity += CONSTANTS.GRAVITY;\r\n    if (this.velocity > 12) {\r\n      this.velocity = 12;\r\n    }\r\n    if (this.velocity < -12) {\r\n      this.velocity = -12;\r\n    }\r\n    if (this.y < 0) {\r\n      this.y = 0;\r\n    }\r\n    if (this.y > 600) {\r\n      this.y = 600;\r\n    }\r\n  }\r\n\r\n  flap() {\r\n    this.velocity = CONSTANTS.FLAP_SPEED;\r\n  }\r\n\r\n  drawBird(ctx) {\r\n    ctx.fillStyle = \"yellow\";\r\n    ctx.fillRect(this.x, this.y, 30, 40);\r\n  }\r\n\r\n  animate(ctx) {\r\n    this.move();\r\n    this.drawBird(ctx);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/bird.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FlappyBird)\n/* harmony export */ });\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level */ \"./src/level.js\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird */ \"./src/bird.js\");\n\r\n\r\n\r\nclass FlappyBird {\r\n  constructor(canvas) {\r\n    this.ctx = canvas.getContext(\"2d\");\r\n    this.dimensions = { width: canvas.width, height: canvas.height };\r\n    this.restart();\r\n    this.registerEventListener();\r\n  }\r\n\r\n  registerEventListener() {\r\n    addEventListener(\"click\", () => {\r\n      this.bird.flap();\r\n      console.log(\"flapping!\");\r\n    });\r\n  }\r\n\r\n  click() {\r\n    if (this.running) {\r\n      this.animate();\r\n    }\r\n    this.bird.flap();\r\n  }\r\n\r\n  play() {\r\n    this.restart();\r\n    this.running = true;\r\n    this.animate();\r\n  }\r\n\r\n  animate() {\r\n    this.level.animate(this.ctx);\r\n    this.bird.animate(this.ctx);\r\n    if (this.running) {\r\n      requestAnimationFrame(this.animate.bind(this));\r\n    }\r\n  }\r\n\r\n  restart() {\r\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.dimensions);\r\n    this.bird = new _bird__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.dimensions);\r\n    this.running = false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nconst canvas = document.getElementById(\"bird-game\");\nnew _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas).play();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Level)\n/* harmony export */ });\nclass Level {\r\n  constructor(dimensions) {\r\n    this.dimensions = dimensions;\r\n    this.pipes = [\r\n      {\r\n        x: 480,\r\n        y: Math.random() * 490,\r\n      },\r\n      {\r\n        x: 480 + 220,\r\n        y: Math.random() * 490,\r\n      },\r\n      {\r\n        x: 480 + 220 + 220,\r\n        y: Math.random() * 490,\r\n      },\r\n    ];\r\n  }\r\n\r\n  animate(ctx) {\r\n    this.drawBackground(ctx);\r\n    this.drawPipes(ctx);\r\n    this.movePipes();\r\n  }\r\n\r\n  movePipes() {\r\n    const pipes = this.pipes;\r\n    this.pipes = [];\r\n    for (let i = 0; i < pipes.length; i++) {\r\n      const pipe = pipes[i];\r\n      if (pipe.x < -30) {\r\n        this.pipes.push({ x: 660, y: Math.random() * 490 });\r\n      } else {\r\n        this.pipes.push({\r\n          x: pipe.x - 1,\r\n          y: pipe.y,\r\n        });\r\n      }\r\n    }\r\n  }\r\n\r\n  drawPipes(ctx) {\r\n    const pipes = this.pipes;\r\n    ctx.fillStyle = \"green\";\r\n    for (let i = 0; i < pipes.length; i++) {\r\n      const pipe = pipes[i];\r\n      ctx.fillRect(pipe.x, 0, 30, pipe.y);\r\n      ctx.fillRect(pipe.x, pipe.y + 150, 30, 640 - pipe.y - 150);\r\n    }\r\n  }\r\n\r\n  drawBackground(ctx) {\r\n    ctx.fillStyle = \"skyblue\";\r\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/level.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;