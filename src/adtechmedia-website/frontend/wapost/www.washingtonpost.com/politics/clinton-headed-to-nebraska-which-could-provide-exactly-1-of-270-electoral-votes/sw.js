var serviceWorkerOption = {
  "assets": [
    "./atm.js",
    "./../../docs/deps-diagram.html"
  ]
};
        
        /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var _ServiceWorkerRuntime = __webpack_require__(1);
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// enable for localhost by default
	var IS_DEBUG = location.hostname.toLowerCase() === 'localhost';
	
	// @todo abstract this
	function debug() {
	  if (IS_DEBUG) {
	    var _console;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    (_console = console).log.apply(_console, ['[ATM SW]'].concat(args));
	  }
	}
	
	var runtime = new _ServiceWorkerRuntime.ServiceWorkerRuntime(self);
	var ATM_HOSTS = ['localhost:8000', 'www.adtechmedia.io', 'demo.adtechmedia.io', 'adm.adtechmedia.io', 'api.adtechmedia.io', 'api-dev.adtechmedia.io'];
	
	var originsVector = ATM_HOSTS.map(function (host) {
	  return 'https://' + host;
	}).concat(ATM_HOSTS.map(function (host) {
	  return 'http://' + host;
	}));
	
	debug.apply(undefined, ['allowed origins'].concat(_toConsumableArray(originsVector)));
	
	function createFetch(runtime, event, fetchRequest) {
	  debug('start fetching ' + fetchRequest.url);
	
	  return fetch(fetchRequest).then(function (response) {
	
	    // Check if we received a valid response
	    if (!response || response.status !== 200 || response.type === 'error') {
	      debug('bad response for ' + fetchRequest.url, response, fetchRequest);
	
	      return response;
	    }
	
	    // IMPORTANT: Clone the response. A response is a stream
	    // and because we want the browser to consume the response
	    // as well as the cache consuming the response, we need
	    // to clone it so we have two streams.
	    var responseToCache = response.clone();
	
	    debug('update caches for ' + fetchRequest.url);
	
	    runtime.cache.put(event.request, responseToCache);
	
	    return response;
	  });
	}
	
	// log common events
	runtime.on(_ServiceWorkerRuntime.ServiceWorkerRuntime.INSTALL, function () {
	  return debug('installed');
	});
	runtime.on(_ServiceWorkerRuntime.ServiceWorkerRuntime.ACTIVATE, function () {
	  return debug('activated');
	});
	runtime.on(_ServiceWorkerRuntime.ServiceWorkerRuntime.INVALIDATE_CACHE, function () {
	  return debug('\'' + runtime.cacheName + '\' cache invalidated');
	});
	runtime.on(_ServiceWorkerRuntime.ServiceWorkerRuntime.ADD_TO_CACHE, function (assets) {
	  return debug.apply(undefined, ['assets added to cache'].concat(_toConsumableArray(assets)));
	});
	
	runtime.on(_ServiceWorkerRuntime.ServiceWorkerRuntime.MESSAGE, function (name, data) {
	  debug('message received:', name, '-->', data);
	
	  switch (name.toLowerCase()) {
	    case 'origin':
	      originsVector.push(data.toString());
	      break;
	    case 'debug':
	      IS_DEBUG = !!data;
	      break;
	    default:
	      break;
	  }
	});
	
	runtime.on(_ServiceWorkerRuntime.ServiceWorkerRuntime.FETCH, function (event) {
	
	  // IMPORTANT: Clone the request. A request is a stream and
	  // can only be consumed once. Since we are consuming this
	  // once by cache and once by the browser for fetch, we need
	  // to clone the response.
	  var fetchRequest = event.request.clone();
	
	  // Ignore not GET request.
	  if (fetchRequest.method !== 'GET') {
	    return;
	  }
	
	  var requestUrl = new URL(fetchRequest.url);
	
	  // Ignore unknown origins
	  if (originsVector.indexOf(requestUrl.origin) === -1) {
	    return;
	  }
	
	  debug('managing request to ' + fetchRequest.url);
	
	  event.respondWith(global.caches.match(event.request).then(function (response) {
	
	    // Cache hit - return response
	    if (response) {
	      debug('cached response for ' + fetchRequest.url);
	
	      // start updating caches in background so the 
	      // next time will be a fresh result out there...
	      createFetch(runtime, event, fetchRequest);
	
	      return response;
	    }
	
	    return createFetch(runtime, event, fetchRequest);
	  }));
	});
	
	runtime.register().catch(function (error) {
	  return debug('Error', error);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ServiceWorkerRuntime = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _events = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ServiceWorkerRuntime = exports.ServiceWorkerRuntime = function (_EventEmitter) {
	  _inherits(ServiceWorkerRuntime, _EventEmitter);
	
	  /**
	   * @param {*} context
	   * @param {String} cacheName
	   */
	  function ServiceWorkerRuntime(context) {
	    var cacheName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ServiceWorkerRuntime.CACHE_NAME;
	
	    _classCallCheck(this, ServiceWorkerRuntime);
	
	    var _this = _possibleConstructorReturn(this, (ServiceWorkerRuntime.__proto__ || Object.getPrototypeOf(ServiceWorkerRuntime)).call(this));
	
	    _this.context = context;
	    _this.cacheName = cacheName;
	    _this.cache = null;
	    return _this;
	  }
	
	  /**
	   * @returns {Promise|*}
	   */
	
	
	  _createClass(ServiceWorkerRuntime, [{
	    key: 'register',
	    value: function register() {
	      var _this2 = this;
	
	      return new Promise(function (resolve) {
	        _this2.once(ServiceWorkerRuntime.ACTIVATE, resolve);
	
	        _this2._registerInstall();
	        _this2._registerMsg();
	        _this2._registerFetch();
	        _this2._registerActivate();
	      });
	    }
	
	    /**
	     * @private
	     */
	
	  }, {
	    key: '_registerInstall',
	    value: function _registerInstall() {
	      var _this3 = this;
	
	      this.context.addEventListener(ServiceWorkerRuntime.INSTALL, function (event) {
	        if (typeof _this3.context.skipWaiting === 'function') {
	          _this3.context.skipWaiting();
	        }
	
	        // atm event ServiceWorkerRuntime.INSTALL
	        _this3.emit(ServiceWorkerRuntime.INSTALL, event);
	      });
	    }
	
	    /**
	     * @private
	     */
	
	  }, {
	    key: '_registerMsg',
	    value: function _registerMsg() {
	      var _this4 = this;
	
	      this.context.addEventListener(ServiceWorkerRuntime.MESSAGE, function (event) {
	        var data = { action: null };
	
	        try {
	          data = JSON.parse(event.data);
	        } catch (e) {}
	
	        switch (data.action.toLowerCase()) {
	          case ServiceWorkerRuntime.INVALIDATE_CACHE:
	            event.waitUntil(_this4._reloadCache(true));
	            break;
	          case ServiceWorkerRuntime.ADD_TO_CACHE:
	            if (data.payload) {
	              var assets = typeof data.payload === 'string' ? [data.payload] : data.payload;
	
	              _this4.cache.addAll(assets);
	
	              // atm event ServiceWorkerRuntime.ADD_TO_CACHE
	              _this4.emit(ServiceWorkerRuntime.ADD_TO_CACHE, assets, event.waitUntil);
	            }
	            break;
	          case ServiceWorkerRuntime.MESSAGE:
	            var payload = data.payload || {};
	
	            // atm event ServiceWorkerRuntime.MESSAGE
	            _this4.emit(ServiceWorkerRuntime.MESSAGE, payload.name || null, payload.data || null, event.waitUntil);
	            break;
	          default:
	            break;
	        }
	      });
	    }
	
	    /**
	     * @private
	     */
	
	  }, {
	    key: '_registerFetch',
	    value: function _registerFetch() {
	      var _this5 = this;
	
	      this.context.addEventListener(ServiceWorkerRuntime.FETCH, function (event) {
	
	        // atm event ServiceWorkerRuntime.FETCH
	        _this5.emit(ServiceWorkerRuntime.FETCH, event);
	      });
	    }
	
	    /**
	     * @private
	     */
	
	  }, {
	    key: '_registerActivate',
	    value: function _registerActivate() {
	      var _this6 = this;
	
	      this.context.addEventListener(ServiceWorkerRuntime.ACTIVATE, function (event) {
	        var supportsClaim = _this6.context.clients && typeof _this6.context.clients.claim === 'function';
	
	        var claimPromise = supportsClaim ? _this6.context.clients.claim() : Promise.resolve();
	
	        event.waitUntil(claimPromise.then(function () {
	          return _this6._reloadCache();
	        }).then(function () {
	
	          // atm event ServiceWorkerRuntime.ACTIVATE
	          _this6.emit(ServiceWorkerRuntime.ACTIVATE, event);
	
	          return Promise.resolve();
	        }));
	      });
	    }
	
	    /**
	     * @returns {Promise|*}
	     *
	     * @private
	     */
	
	  }, {
	    key: '_reloadCache',
	    value: function _reloadCache() {
	      var _this7 = this;
	
	      var clearSelf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      return global.caches.keys().then(function (cacheNames) {
	        var promises = cacheNames.filter(function (cacheName) {
	          return clearSelf || cacheName !== _this7.cacheName;
	        }).map(function (cacheName) {
	          return global.caches.delete(cacheName);
	        });
	
	        return Promise.all(promises);
	      }).then(function () {
	        return global.caches.open(_this7.cacheName);
	      }).then(function (cache) {
	        _this7.cache = cache;
	
	        // atm event ServiceWorkerRuntime.INVALIDATE_CACHE
	        _this7.emit(ServiceWorkerRuntime.INVALIDATE_CACHE);
	      });
	    }
	
	    /**
	     * @returns {String}
	     */
	
	  }], [{
	    key: 'INVALIDATE_CACHE',
	    get: function get() {
	      return 'invalidate-cache';
	    }
	
	    /**
	     * @returns {String}
	     */
	
	  }, {
	    key: 'ADD_TO_CACHE',
	    get: function get() {
	      return 'add-to-cache';
	    }
	
	    /**
	     * @returns {String}
	     */
	
	  }, {
	    key: 'MESSAGE',
	    get: function get() {
	      return 'message';
	    }
	
	    /**
	     * @returns {String}
	     */
	
	  }, {
	    key: 'FETCH',
	    get: function get() {
	      return 'fetch';
	    }
	
	    /**
	     * @returns {String}
	     */
	
	  }, {
	    key: 'INSTALL',
	    get: function get() {
	      return 'install';
	    }
	
	    /**
	     * @returns {String}
	     */
	
	  }, {
	    key: 'ACTIVATE',
	    get: function get() {
	      return 'activate';
	    }
	
	    /**
	     * @returns {String}
	     */
	
	  }, {
	    key: 'CACHE_NAME',
	    get: function get() {
	      return 'atm-sw-cache';
	    }
	  }]);
	
	  return ServiceWorkerRuntime;
	}(_events.EventEmitter);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=sw.js.map