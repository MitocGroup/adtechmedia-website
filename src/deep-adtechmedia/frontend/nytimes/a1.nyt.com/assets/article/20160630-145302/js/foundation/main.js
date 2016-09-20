! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = "length" in e && e.length,
			n = Z.type(e);
		return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function r(e, t, n) {
		if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return Z.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (se.test(t)) return Z.filter(t, e, n);
			t = Z.filter(t, e)
		}
		return Z.grep(e, function(e) {
			return W.call(t, e) >= 0 !== n
		})
	}

	function i(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function o(e) {
		var t = pe[e] = {};
		return Z.each(e.match(he) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function a() {
		K.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
	}

	function s() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = Z.expando + s.uid++
	}

	function u(e, t, n) {
		var r;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(we, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : be.test(n) ? Z.parseJSON(n) : n
				} catch (i) {}
				ye.set(e, t, n)
			} else n = void 0;
		return n
	}

	function c() {
		return !0
	}

	function l() {
		return !1
	}

	function f() {
		try {
			return K.activeElement
		} catch (e) {}
	}

	function d(e, t) {
		return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function h(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function p(e) {
		var t = Ie.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function g(e, t) {
		for (var n = 0, r = e.length; r > n; n++) ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
	}

	function m(e, t) {
		var n, r, i, o, a, s, u, c;
		if (1 === t.nodeType) {
			if (ve.hasData(e) && (o = ve.access(e), a = ve.set(t, o), c = o.events)) {
				delete a.handle, a.events = {};
				for (i in c)
					for (n = 0, r = c[i].length; r > n; n++) Z.event.add(t, i, c[i][n])
			}
			ye.hasData(e) && (s = ye.access(e), u = Z.extend({}, s), ye.set(t, u))
		}
	}

	function v(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
	}

	function y(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && Te.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}

	function b(t, n) {
		var r, i = Z(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
		return i.detach(), o
	}

	function w(e) {
		var t = K,
			n = Fe[e];
		return n || (n = b(e, t), "none" !== n && n || (qe = (qe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qe[0].contentDocument, t.write(), t.close(), n = b(e, t), qe.detach()), Fe[e] = n), n
	}

	function x(e, t, n) {
		var r, i, o, a, s = e.style;
		return n = n || Be(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Ue.test(a) && $e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function _(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function E(e, t) {
		if (t in e) return t;
		for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ye.length; i--;)
			if (t = Ye[i] + n, t in e) return t;
		return r
	}

	function T(e, t, n) {
		var r = Xe.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function S(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += Z.css(e, n + _e[o], !0, i)), r ? ("content" === n && (a -= Z.css(e, "padding" + _e[o], !0, i)), "margin" !== n && (a -= Z.css(e, "border" + _e[o] + "Width", !0, i))) : (a += Z.css(e, "padding" + _e[o], !0, i), "padding" !== n && (a += Z.css(e, "border" + _e[o] + "Width", !0, i)));
		return a
	}

	function k(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Be(e),
			a = "border-box" === Z.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = x(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ue.test(i)) return i;
			r = a && (G.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + S(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function N(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = ve.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ee(r) && (o[a] = ve.access(r, "olddisplay", w(r.nodeName)))) : (i = Ee(r), "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}

	function C(e, t, n, r, i) {
		return new C.prototype.init(e, t, n, r, i)
	}

	function O() {
		return setTimeout(function() {
			Ge = void 0
		}), Ge = Z.now()
	}

	function D(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = _e[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function j(e, t, n) {
		for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length; a > o; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function A(e, t, n) {
		var r, i, o, a, s, u, c, l, f = this,
			d = {},
			h = e.style,
			p = e.nodeType && Ee(e),
			g = ve.get(e, "fxshow");
		n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
			s.unqueued || u()
		}), s.unqueued++, f.always(function() {
			f.always(function() {
				s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = Z.css(e, "display"), l = "none" === c ? ve.get(e, "olddisplay") || w(e.nodeName) : c, "inline" === l && "none" === Z.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
			h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
		}));
		for (r in t)
			if (i = t[r], Qe.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
					if ("show" !== i || !g || void 0 === g[r]) continue;
					p = !0
				}
				d[r] = g && g[r] || Z.style(e, r)
			} else c = void 0;
		if (Z.isEmptyObject(d)) "inline" === ("none" === c ? w(e.nodeName) : c) && (h.display = c);
		else {
			g ? "hidden" in g && (p = g.hidden) : g = ve.access(e, "fxshow", {}), o && (g.hidden = !p), p ? Z(e).show() : f.done(function() {
				Z(e).hide()
			}), f.done(function() {
				var t;
				ve.remove(e, "fxshow");
				for (t in d) Z.style(e, t, d[t])
			});
			for (r in d) a = j(p ? g[r] : 0, r, f), r in g || (g[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function R(e, t) {
		var n, r, i, o, a;
		for (n in e)
			if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}

	function M(e, t, n) {
		var r, i, o = 0,
			a = tt.length,
			s = Z.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				for (var t = Ge || O(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[a].run(o);
				return s.notifyWith(e, [c, o, n]), 1 > o && u ? n : (s.resolveWith(e, [c]), !1)
			},
			c = s.promise({
				elem: e,
				props: Z.extend({}, t),
				opts: Z.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Ge || O(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? c.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) c.tweens[n].run(1);
					return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
				}
			}),
			l = c.props;
		for (R(l, c.opts.specialEasing); a > o; o++)
			if (r = tt[o].call(c, e, l, c.opts)) return r;
		return Z.map(l, j, c), Z.isFunction(c.opts.start) && c.opts.start.call(e, c), Z.fx.timer(Z.extend(u, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function P(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(he) || [];
			if (Z.isFunction(n))
				for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function I(e, t, n, r) {
		function i(s) {
			var u;
			return o[s] = !0, Z.each(e[s] || [], function(e, s) {
				var c = s(t, n, r);
				return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
			}), u
		}
		var o = {},
			a = e === bt;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}

	function H(e, t) {
		var n, r, i = Z.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && Z.extend(!0, e, r), e
	}

	function L(e, t, n) {
		for (var r, i, o, a, s = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in s)
				if (s[i] && s[i].test(r)) {
					u.unshift(i);
					break
				}
		if (u[0] in n) o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				a || (a = i)
			}
			o = o || a
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}

	function q(e, t, n, r) {
		var i, o, a, s, u, c = {},
			l = e.dataTypes.slice();
		if (l[1])
			for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
		for (o = l.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
			if (a = c[u + " " + o] || c["* " + o], !a)
				for (i in c)
					if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
						a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
						break
					}
			if (a !== !0)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function F(e, t, n, r) {
		var i;
		if (Z.isArray(t)) Z.each(t, function(t, i) {
			n || Tt.test(e) ? r(e, i) : F(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== Z.type(t)) r(e, t);
		else
			for (i in t) F(e + "[" + i + "]", t[i], n, r)
	}

	function $(e) {
		return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var U = [],
		B = U.slice,
		V = U.concat,
		X = U.push,
		W = U.indexOf,
		J = {},
		z = J.toString,
		Y = J.hasOwnProperty,
		G = {},
		K = e.document,
		Q = "2.1.4",
		Z = function(e, t) {
			return new Z.fn.init(e, t)
		},
		ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		te = /^-ms-/,
		ne = /-([\da-z])/gi,
		re = function(e, t) {
			return t.toUpperCase()
		};
	Z.fn = Z.prototype = {
		jquery: Q,
		constructor: Z,
		selector: "",
		length: 0,
		toArray: function() {
			return B.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
		},
		pushStack: function(e) {
			var t = Z.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return Z.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(Z.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(B.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: X,
		sort: U.sort,
		splice: U.splice
	}, Z.extend = Z.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			c = !1;
		for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], r = e[t], a !== r && (c && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(c, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, Z.extend({
		expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === Z.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isPlainObject: function(e) {
			return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !Y.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[z.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			var t, n = eval;
			e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(te, "ms-").replace(ne, re)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, r) {
			var i, o = 0,
				a = e.length,
				s = n(e);
			if (r) {
				if (s)
					for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
				else
					for (o in e)
						if (i = t.apply(e[o], r), i === !1) break
			} else if (s)
				for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
			else
				for (o in e)
					if (i = t.call(e[o], o, e[o]), i === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ee, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)), r
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : W.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o = 0,
				a = e.length,
				s = n(e),
				u = [];
			if (s)
				for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
			else
				for (o in e) i = t(e[o], o, r), null != i && u.push(i);
			return V.apply([], u)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = B.call(arguments, 2), i = function() {
				return e.apply(t || this, r.concat(B.call(arguments)))
			}, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
		},
		now: Date.now,
		support: G
	}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		J["[object " + t + "]"] = t.toLowerCase()
	});
	var ie = function(e) {
		function t(e, t, n, r) {
			var i, o, a, s, u, c, f, h, p, g;
			if ((t ? t.ownerDocument || t : F) !== A && j(t), t = t || A, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
			if (!r && M) {
				if (11 !== s && (i = ye.exec(e)))
					if (a = i[1]) {
						if (9 === s) {
							if (o = t.getElementById(a), !o || !o.parentNode) return n;
							if (o.id === a) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && L(t, o) && o.id === a) return n.push(o), n
					} else {
						if (i[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
						if ((a = i[3]) && x.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(a)), n
					}
				if (x.qsa && (!P || !P.test(e))) {
					if (h = f = q, p = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (c = S(e), (f = t.getAttribute("id")) ? h = f.replace(we, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = c.length; u--;) c[u] = h + d(c[u]);
						p = be.test(e) && l(t.parentNode) || t, g = c.join(",")
					}
					if (g) try {
						return Q.apply(n, p.querySelectorAll(g)), n
					} catch (m) {} finally {
						f || t.removeAttribute("id")
					}
				}
			}
			return N(e.replace(ue, "$1"), t, n, r)
		}

		function n() {
			function e(n, r) {
				return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = r
			}
			var t = [];
			return e
		}

		function r(e) {
			return e[q] = !0, e
		}

		function i(e) {
			var t = A.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for (var n = e.split("|"), r = e.length; r--;) _.attrHandle[n[r]] = t
		}

		function a(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
			if (r) return r;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function u(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}

		function c(e) {
			return r(function(t) {
				return t = +t, r(function(n, r) {
					for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function l(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function f() {}

		function d(e) {
			for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
			return r
		}

		function h(e, t, n) {
			var r = t.dir,
				i = n && "parentNode" === r,
				o = U++;
			return t.first ? function(t, n, o) {
				for (; t = t[r];)
					if (1 === t.nodeType || i) return e(t, n, o)
			} : function(t, n, a) {
				var s, u, c = [$, o];
				if (a) {
					for (; t = t[r];)
						if ((1 === t.nodeType || i) && e(t, n, a)) return !0
				} else
					for (; t = t[r];)
						if (1 === t.nodeType || i) {
							if (u = t[q] || (t[q] = {}), (s = u[r]) && s[0] === $ && s[1] === o) return c[2] = s[2];
							if (u[r] = c, c[2] = e(t, n, a)) return !0
						}
			}
		}

		function p(e) {
			return e.length > 1 ? function(t, n, r) {
				for (var i = e.length; i--;)
					if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function g(e, n, r) {
			for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
			return r
		}

		function m(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, c = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
			return a
		}

		function v(e, t, n, i, o, a) {
			return i && !i[q] && (i = v(i)), o && !o[q] && (o = v(o, a)), r(function(r, a, s, u) {
				var c, l, f, d = [],
					h = [],
					p = a.length,
					v = r || g(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !r && t ? v : m(v, d, e, s, u),
					b = n ? o || (r ? e : p || i) ? [] : a : y;
				if (n && n(y, b, s, u), i)
					for (c = m(b, h), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (b[h[l]] = !(y[h[l]] = f));
				if (r) {
					if (o || e) {
						if (o) {
							for (c = [], l = b.length; l--;)(f = b[l]) && c.push(y[l] = f);
							o(null, b = [], c, u)
						}
						for (l = b.length; l--;)(f = b[l]) && (c = o ? ee(r, f) : d[l]) > -1 && (r[c] = !(a[c] = f))
					}
				} else b = m(b === a ? b.splice(p, b.length) : b), o ? o(null, a, b, u) : Q.apply(a, b)
			})
		}

		function y(e) {
			for (var t, n, r, i = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, u = h(function(e) {
					return e === t
				}, a, !0), c = h(function(e) {
					return ee(t, e) > -1
				}, a, !0), l = [function(e, n, r) {
					var i = !o && (r || n !== C) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
					return t = null, i
				}]; i > s; s++)
				if (n = _.relative[e[s].type]) l = [h(p(l), n)];
				else {
					if (n = _.filter[e[s].type].apply(null, e[s].matches), n[q]) {
						for (r = ++s; i > r && !_.relative[e[r].type]; r++);
						return v(s > 1 && p(l), s > 1 && d(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(ue, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
					}
					l.push(n)
				}
			return p(l)
		}

		function b(e, n) {
			var i = n.length > 0,
				o = e.length > 0,
				a = function(r, a, s, u, c) {
					var l, f, d, h = 0,
						p = "0",
						g = r && [],
						v = [],
						y = C,
						b = r || o && _.find.TAG("*", c),
						w = $ += null == y ? 1 : Math.random() || .1,
						x = b.length;
					for (c && (C = a !== A && a); p !== x && null != (l = b[p]); p++) {
						if (o && l) {
							for (f = 0; d = e[f++];)
								if (d(l, a, s)) {
									u.push(l);
									break
								}
							c && ($ = w)
						}
						i && ((l = !d && l) && h--, r && g.push(l))
					}
					if (h += p, i && p !== h) {
						for (f = 0; d = n[f++];) d(g, v, a, s);
						if (r) {
							if (h > 0)
								for (; p--;) g[p] || v[p] || (v[p] = G.call(u));
							v = m(v)
						}
						Q.apply(u, v), c && !r && v.length > 0 && h + n.length > 1 && t.uniqueSort(u)
					}
					return c && ($ = w, C = y), g
				};
			return i ? r(a) : a
		}
		var w, x, _, E, T, S, k, N, C, O, D, j, A, R, M, P, I, H, L, q = "sizzle" + 1 * new Date,
			F = e.document,
			$ = 0,
			U = 0,
			B = n(),
			V = n(),
			X = n(),
			W = function(e, t) {
				return e === t && (D = !0), 0
			},
			J = 1 << 31,
			z = {}.hasOwnProperty,
			Y = [],
			G = Y.pop,
			K = Y.push,
			Q = Y.push,
			Z = Y.slice,
			ee = function(e, t) {
				for (var n = 0, r = e.length; r > n; n++)
					if (e[n] === t) return n;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ie = re.replace("w", "w#"),
			oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
			ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
			se = new RegExp(ne + "+", "g"),
			ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			ce = new RegExp("^" + ne + "*," + ne + "*"),
			le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			de = new RegExp(ae),
			he = new RegExp("^" + ie + "$"),
			pe = {
				ID: new RegExp("^#(" + re + ")"),
				CLASS: new RegExp("^\\.(" + re + ")"),
				TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + oe),
				PSEUDO: new RegExp("^" + ae),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			},
			ge = /^(?:input|select|textarea|button)$/i,
			me = /^h\d$/i,
			ve = /^[^{]+\{\s*\[native \w/,
			ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			be = /[+~]/,
			we = /'|\\/g,
			xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			_e = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			},
			Ee = function() {
				j()
			};
		try {
			Q.apply(Y = Z.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
		} catch (Te) {
			Q = {
				apply: Y.length ? function(e, t) {
					K.apply(e, Z.call(t))
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}
		x = t.support = {}, T = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, j = t.setDocument = function(e) {
			var t, n, r = e ? e.ownerDocument || e : F;
			return r !== A && 9 === r.nodeType && r.documentElement ? (A = r, R = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ee, !1) : n.attachEvent && n.attachEvent("onunload", Ee)), M = !T(r), x.attributes = i(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), x.getElementsByTagName = i(function(e) {
				return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
			}), x.getElementsByClassName = ve.test(r.getElementsByClassName), x.getById = i(function(e) {
				return R.appendChild(e).id = q, !r.getElementsByName || !r.getElementsByName(q).length
			}), x.getById ? (_.find.ID = function(e, t) {
				if ("undefined" != typeof t.getElementById && M) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, _.filter.ID = function(e) {
				var t = e.replace(xe, _e);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete _.find.ID, _.filter.ID = function(e) {
				var t = e.replace(xe, _e);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), _.find.TAG = x.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, _.find.CLASS = x.getElementsByClassName && function(e, t) {
				return M ? t.getElementsByClassName(e) : void 0
			}, I = [], P = [], (x.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
				R.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || P.push(".#.+[+~]")
			}), i(function(e) {
				var t = r.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
			})), (x.matchesSelector = ve.test(H = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && i(function(e) {
				x.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), I.push("!=", ae)
			}), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), t = ve.test(R.compareDocumentPosition), L = t || ve.test(R.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, W = t ? function(e, t) {
				if (e === t) return D = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === F && L(F, e) ? -1 : t === r || t.ownerDocument === F && L(F, t) ? 1 : O ? ee(O, e) - ee(O, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if (e === t) return D = !0, 0;
				var n, i = 0,
					o = e.parentNode,
					s = t.parentNode,
					u = [e],
					c = [t];
				if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : O ? ee(O, e) - ee(O, t) : 0;
				if (o === s) return a(e, t);
				for (n = e; n = n.parentNode;) u.unshift(n);
				for (n = t; n = n.parentNode;) c.unshift(n);
				for (; u[i] === c[i];) i++;
				return i ? a(u[i], c[i]) : u[i] === F ? -1 : c[i] === F ? 1 : 0
			}, r) : A
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== A && j(e), n = n.replace(fe, "='$1']"), x.matchesSelector && M && (!I || !I.test(n)) && (!P || !P.test(n))) try {
				var r = H.call(e, n);
				if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch (i) {}
			return t(n, A, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== A && j(e), L(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== A && j(e);
			var n = _.attrHandle[t.toLowerCase()],
				r = n && z.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !M) : void 0;
			return void 0 !== r ? r : x.attributes || !M ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				r = 0,
				i = 0;
			if (D = !x.detectDuplicates, O = !x.sortStable && e.slice(0), e.sort(W), D) {
				for (; t = e[i++];) t === e[i] && (r = n.push(i));
				for (; r--;) e.splice(n[r], 1)
			}
			return O = null, e
		}, E = t.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += E(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else
				for (; t = e[r++];) n += E(t);
			return n
		}, _ = t.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: pe,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(xe, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, _e), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(xe, _e).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = B[e + " "];
					return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, r) {
					return function(i) {
						var o = t.attr(i, e);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, u) {
						var c, l, f, d, h, p, g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !u && !s;
						if (m) {
							if (o) {
								for (; g;) {
									for (f = t; f = f[g];)
										if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
									p = g = "only" === e && !p && "nextSibling"
								}
								return !0
							}
							if (p = [a ? m.firstChild : m.lastChild], a && y) {
								for (l = m[q] || (m[q] = {}), c = l[e] || [], h = c[0] === $ && c[1], d = c[0] === $ && c[2], f = h && m.childNodes[h]; f = ++h && f && f[g] || (d = h = 0) || p.pop();)
									if (1 === f.nodeType && ++d && f === t) {
										l[e] = [$, h, d];
										break
									}
							} else if (y && (c = (t[q] || (t[q] = {}))[e]) && c[0] === $) d = c[1];
							else
								for (;
									(f = ++h && f && f[g] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++d || (y && ((f[q] || (f[q] = {}))[e] = [$, d]), f !== t)););
							return d -= i, d === r || d % r === 0 && d / r >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var i, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[q] ? o(n) : o.length > 1 ? (i = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
						for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
					}) : function(e) {
						return o(e, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: r(function(e) {
					var t = [],
						n = [],
						i = k(e.replace(ue, "$1"));
					return i[q] ? r(function(e, t, n, r) {
						for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, r, o) {
						return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
					}
				}),
				has: r(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: r(function(e) {
					return e = e.replace(xe, _e),
						function(t) {
							return (t.textContent || t.innerText || E(t)).indexOf(e) > -1
						}
				}),
				lang: r(function(e) {
					return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, _e).toLowerCase(),
						function(t) {
							var n;
							do
								if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === R
				},
				focus: function(e) {
					return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !_.pseudos.empty(e)
				},
				header: function(e) {
					return me.test(e.nodeName)
				},
				input: function(e) {
					return ge.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: c(function() {
					return [0]
				}),
				last: c(function(e, t) {
					return [t - 1]
				}),
				eq: c(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: c(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: c(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: c(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: c(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, _.pseudos.nth = _.pseudos.eq;
		for (w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) _.pseudos[w] = s(w);
		for (w in {
				submit: !0,
				reset: !0
			}) _.pseudos[w] = u(w);
		return f.prototype = _.filters = _.pseudos, _.setFilters = new f, S = t.tokenize = function(e, n) {
			var r, i, o, a, s, u, c, l = V[e + " "];
			if (l) return n ? 0 : l.slice(0);
			for (s = e, u = [], c = _.preFilter; s;) {
				(!r || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = le.exec(s)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(ue, " ")
				}), s = s.slice(r.length));
				for (a in _.filter) !(i = pe[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
					value: r,
					type: a,
					matches: i
				}), s = s.slice(r.length));
				if (!r) break
			}
			return n ? s.length : s ? t.error(e) : V(e, u).slice(0)
		}, k = t.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = X[e + " "];
			if (!o) {
				for (t || (t = S(e)), n = t.length; n--;) o = y(t[n]), o[q] ? r.push(o) : i.push(o);
				o = X(e, b(i, r)), o.selector = e
			}
			return o
		}, N = t.select = function(e, t, n, r) {
			var i, o, a, s, u, c = "function" == typeof e && e,
				f = !r && S(e = c.selector || e);
			if (n = n || [], 1 === f.length) {
				if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && M && _.relative[o[1].type]) {
					if (t = (_.find.ID(a.matches[0].replace(xe, _e), t) || [])[0], !t) return n;
					c && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);)
					if ((u = _.find[s]) && (r = u(a.matches[0].replace(xe, _e), be.test(o[0].type) && l(t.parentNode) || t))) {
						if (o.splice(i, 1), e = r.length && d(o), !e) return Q.apply(n, r), n;
						break
					}
			}
			return (c || k(e, f))(r, t, !M, n, be.test(e) && l(t.parentNode) || t), n
		}, x.sortStable = q.split("").sort(W).join("") === q, x.detectDuplicates = !!D, j(), x.sortDetached = i(function(e) {
			return 1 & e.compareDocumentPosition(A.createElement("div"))
		}), i(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), x.attributes && i(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), i(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(te, function(e, t, n) {
			var r;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), t
	}(e);
	Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
	var oe = Z.expr.match.needsContext,
		ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		se = /^.[^:#\[\.,]*$/;
	Z.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, Z.fn.extend({
		find: function(e) {
			var t, n = this.length,
				r = [],
				i = this;
			if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
				for (t = 0; n > t; t++)
					if (Z.contains(i[t], this)) return !0
			}));
			for (t = 0; n > t; t++) Z.find(e, i[t], r);
			return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
		},
		filter: function(e) {
			return this.pushStack(r(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(r(this, e || [], !0))
		},
		is: function(e) {
			return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
		}
	});
	var ue, ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		le = Z.fn.init = function(e, t) {
			var n, r;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ce.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), ae.test(n[1]) && Z.isPlainObject(t))
						for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
		};
	le.prototype = Z.fn, ue = Z(K);
	var fe = /^(?:parents|prev(?:Until|All))/,
		de = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Z.extend({
		dir: function(e, t, n) {
			for (var r = [], i = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (i && Z(e).is(n)) break;
					r.push(e)
				}
			return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), Z.fn.extend({
		has: function(e) {
			var t = Z(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; n > e; e++)
					if (Z.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
						o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? Z.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? W.call(Z(e), this[0]) : W.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), Z.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return Z.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return Z.dir(e, "parentNode", n)
		},
		next: function(e) {
			return i(e, "nextSibling")
		},
		prev: function(e) {
			return i(e, "previousSibling")
		},
		nextAll: function(e) {
			return Z.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return Z.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return Z.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return Z.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return Z.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return Z.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || Z.merge([], e.childNodes)
		}
	}, function(e, t) {
		Z.fn[e] = function(n, r) {
			var i = Z.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (de[e] || Z.unique(i), fe.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var he = /\S+/g,
		pe = {};
	Z.Callbacks = function(e) {
		e = "string" == typeof e ? pe[e] || o(e) : Z.extend({}, e);
		var t, n, r, i, a, s, u = [],
			c = !e.once && [],
			l = function(o) {
				for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++)
					if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
						t = !1;
						break
					}
				r = !1, u && (c ? c.length && l(c.shift()) : t ? u = [] : f.disable())
			},
			f = {
				add: function() {
					if (u) {
						var n = u.length;
						! function o(t) {
							Z.each(t, function(t, n) {
								var r = Z.type(n);
								"function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
							})
						}(arguments), r ? a = u.length : t && (i = n, l(t))
					}
					return this
				},
				remove: function() {
					return u && Z.each(arguments, function(e, t) {
						for (var n;
							(n = Z.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
					}), this
				},
				has: function(e) {
					return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], a = 0, this
				},
				disable: function() {
					return u = c = t = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return c = void 0, t || f.disable(), this
				},
				locked: function() {
					return !c
				},
				fireWith: function(e, t) {
					return !u || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? c.push(t) : l(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return f
	}, Z.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", Z.Callbacks("once memory"), "resolved"],
					["reject", "fail", Z.Callbacks("once memory"), "rejected"],
					["notify", "progress", Z.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return Z.Deferred(function(n) {
							Z.each(t, function(t, o) {
								var a = Z.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? Z.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, Z.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = B.call(arguments),
				a = o.length,
				s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
				u = 1 === s ? e : Z.Deferred(),
				c = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
					}
				};
			if (a > 1)
				for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --s;
			return s || u.resolveWith(r, o), u.promise()
		}
	});
	var ge;
	Z.fn.ready = function(e) {
		return Z.ready.promise().done(e), this
	}, Z.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? Z.readyWait++ : Z.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(K, [Z]), Z.fn.triggerHandler && (Z(K).triggerHandler("ready"), Z(K).off("ready"))))
		}
	}), Z.ready.promise = function(t) {
		return ge || (ge = Z.Deferred(), "complete" === K.readyState ? setTimeout(Z.ready) : (K.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
	}, Z.ready.promise();
	var me = Z.access = function(e, t, n, r, i, o, a) {
		var s = 0,
			u = e.length,
			c = null == n;
		if ("object" === Z.type(n)) {
			i = !0;
			for (s in n) Z.access(e, t, s, n[s], !0, o, a)
		} else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), c && (a ? (t.call(e, r), t = null) : (c = t, t = function(e, t, n) {
				return c.call(Z(e), n)
			})), t))
			for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
		return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
	};
	Z.acceptData = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
		key: function(e) {
			if (!s.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if (!n) {
				n = s.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n, Z.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
				o = this.cache[i];
			if ("string" == typeof t) o[t] = n;
			else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
			else
				for (r in t) o[r] = t[r];
			return o
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return void 0 === t ? n : n[t]
		},
		access: function(e, t, n) {
			var r;
			return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r, i, o = this.key(e),
				a = this.cache[o];
			if (void 0 === t) this.cache[o] = {};
			else {
				Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(he) || [])), n = r.length;
				for (; n--;) delete a[r[n]]
			}
		},
		hasData: function(e) {
			return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var ve = new s,
		ye = new s,
		be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		we = /([A-Z])/g;
	Z.extend({
		hasData: function(e) {
			return ye.hasData(e) || ve.hasData(e)
		},
		data: function(e, t, n) {
			return ye.access(e, t, n)
		},
		removeData: function(e, t) {
			ye.remove(e, t)
		},
		_data: function(e, t, n) {
			return ve.access(e, t, n)
		},
		_removeData: function(e, t) {
			ve.remove(e, t)
		}
	}), Z.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (i = ye.get(o), 1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
					for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), u(o, r, i[r])));
					ve.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				ye.set(this, e)
			}) : me(this, function(t) {
				var n, r = Z.camelCase(e);
				if (o && void 0 === t) {
					if (n = ye.get(o, e), void 0 !== n) return n;
					if (n = ye.get(o, r), void 0 !== n) return n;
					if (n = u(o, r, void 0), void 0 !== n) return n
				} else this.each(function() {
					var n = ye.get(this, r);
					ye.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				ye.remove(this, e)
			})
		}
	}), Z.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = ve.get(e, t), n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = Z.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = Z._queueHooks(e, t),
				a = function() {
					Z.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return ve.get(e, n) || ve.access(e, n, {
				empty: Z.Callbacks("once memory").add(function() {
					ve.remove(e, [t + "queue", n])
				})
			})
		}
	}), Z.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = Z.queue(this, e, t);
				Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				Z.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = Z.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		_e = ["Top", "Right", "Bottom", "Left"],
		Ee = function(e, t) {
			return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
		},
		Te = /^(?:checkbox|radio)$/i;
	! function() {
		var e = K.createDocumentFragment(),
			t = e.appendChild(K.createElement("div")),
			n = K.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	var Se = "undefined";
	G.focusinBubbles = "onfocusin" in e;
	var ke = /^key/,
		Ne = /^(?:mouse|pointer|contextmenu)|click/,
		Ce = /^(?:focusinfocus|focusoutblur)$/,
		Oe = /^([^.]*)(?:\.(.+)|)$/;
	Z.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, u, c, l, f, d, h, p, g, m = ve.get(e);
			if (m)
				for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
						return typeof Z !== Se && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(he) || [""], c = t.length; c--;) s = Oe.exec(t[c]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h && (f = Z.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = Z.event.special[h] || {}, l = Z.extend({
					type: h,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && Z.expr.match.needsContext.test(i),
					namespace: p.join(".")
				}, o), (d = u[h]) || (d = u[h] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, p, a) !== !1 || e.addEventListener && e.addEventListener(h, a, !1)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), Z.event.global[h] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, c, l, f, d, h, p, g, m = ve.hasData(e) && ve.get(e);
			if (m && (u = m.events)) {
				for (t = (t || "").match(he) || [""], c = t.length; c--;)
					if (s = Oe.exec(t[c]) || [], h = g = s[1], p = (s[2] || "").split(".").sort(), h) {
						for (f = Z.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, d = u[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) l = d[o], !i && g !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
						a && !d.length && (f.teardown && f.teardown.call(e, p, m.handle) !== !1 || Z.removeEvent(e, h, m.handle), delete u[h])
					} else
						for (h in u) Z.event.remove(e, h + t[c], n, r, !0);
				Z.isEmptyObject(u) && (delete m.handle, ve.remove(e, "events"))
			}
		},
		trigger: function(t, n, r, i) {
			var o, a, s, u, c, l, f, d = [r || K],
				h = Y.call(t, "type") ? t.type : t,
				p = Y.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = s = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !Ce.test(h + Z.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[Z.expando] ? t : new Z.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), f = Z.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if (!i && !f.noBubble && !Z.isWindow(r)) {
					for (u = f.delegateType || h, Ce.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
					s === (r.ownerDocument || K) && d.push(s.defaultView || s.parentWindow || e)
				}
				for (o = 0;
					(a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || h, l = (ve.get(a, "events") || {})[t.type] && ve.get(a, "handle"), l && l.apply(a, n), l = c && a[c], l && l.apply && Z.acceptData(a) && (t.result = l.apply(a, n), t.result === !1 && t.preventDefault());
				return t.type = h, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Z.acceptData(r) || c && Z.isFunction(r[h]) && !Z.isWindow(r) && (s = r[c], s && (r[c] = null), Z.event.triggered = h, r[h](), Z.event.triggered = void 0, s && (r[c] = s)), t.result
			}
		},
		dispatch: function(e) {
			e = Z.event.fix(e);
			var t, n, r, i, o, a = [],
				s = B.call(arguments),
				u = (ve.get(this, "events") || {})[e.type] || [],
				c = Z.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				for (a = Z.event.handlers.call(this, e, u), t = 0;
					(i = a[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a = [],
				s = t.delegateCount,
				u = e.target;
			if (s && u.nodeType && (!e.button || "click" !== e.type))
				for (; u !== this; u = u.parentNode || this)
					if (u.disabled !== !0 || "click" !== e.type) {
						for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
						r.length && a.push({
							elem: u,
							handlers: r
						})
					}
			return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, o = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[Z.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = Ne.test(i) ? this.mouseHooks : ke.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== f() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === f() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return Z.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = Z.extend(new Z.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, Z.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, Z.Event = function(e, t) {
		return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c : l) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
	}, Z.Event.prototype = {
		isDefaultPrevented: l,
		isPropagationStopped: l,
		isImmediatePropagationStopped: l,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = c, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = c, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = c, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Z.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		Z.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), G.focusinBubbles || Z.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			Z.event.simulate(t, e.target, Z.event.fix(e), !0)
		};
		Z.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = ve.access(r, t);
				i || r.addEventListener(e, n, !0), ve.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = ve.access(r, t) - 1;
				i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0), ve.remove(r, t))
			}
		}
	}), Z.fn.extend({
		on: function(e, t, n, r, i) {
			var o, a;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (a in e) this.on(a, t, n, e[a], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = l;
			else if (!r) return this;
			return 1 === i && (o = r, r = function(e) {
				return Z().off(e), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
				Z.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = l), this.each(function() {
				Z.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				Z.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? Z.event.trigger(e, t, n, !0) : void 0
		}
	});
	var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		je = /<([\w:]+)/,
		Ae = /<|&#?\w+;/,
		Re = /<(?:script|style|link)/i,
		Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Pe = /^$|\/(?:java|ecma)script/i,
		Ie = /^true\/(.*)/,
		He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Le = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Le.optgroup = Le.option, Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead, Le.th = Le.td, Z.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s = e.cloneNode(!0),
				u = Z.contains(e.ownerDocument, e);
			if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
				for (a = v(s), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
			if (t)
				if (n)
					for (o = o || v(e), a = a || v(s), r = 0, i = o.length; i > r; r++) m(o[r], a[r]);
				else m(e, s);
			return a = v(s, "script"), a.length > 0 && g(a, !u && v(e, "script")), s
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, a, s, u, c, l = t.createDocumentFragment(), f = [], d = 0, h = e.length; h > d; d++)
				if (i = e[d], i || 0 === i)
					if ("object" === Z.type(i)) Z.merge(f, i.nodeType ? [i] : i);
					else if (Ae.test(i)) {
				for (o = o || l.appendChild(t.createElement("div")), a = (je.exec(i) || ["", ""])[1].toLowerCase(), s = Le[a] || Le._default, o.innerHTML = s[1] + i.replace(De, "<$1></$2>") + s[2], c = s[0]; c--;) o = o.lastChild;
				Z.merge(f, o.childNodes), o = l.firstChild, o.textContent = ""
			} else f.push(t.createTextNode(i));
			for (l.textContent = "", d = 0; i = f[d++];)
				if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = v(l.appendChild(i), "script"), u && g(o), n))
					for (c = 0; i = o[c++];) Pe.test(i.type || "") && n.push(i);
			return l
		},
		cleanData: function(e) {
			for (var t, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
				if (Z.acceptData(n) && (i = n[ve.expando], i && (t = ve.cache[i]))) {
					if (t.events)
						for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
					ve.cache[i] && delete ve.cache[i]
				}
				delete ye.cache[n[ye.expando]]
			}
		}
	}), Z.fn.extend({
		text: function(e) {
			return me(this, function(e) {
				return void 0 === e ? Z.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = d(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = d(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(v(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return Z.clone(this, e, t)
			})
		},
		html: function(e) {
			return me(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Re.test(e) && !Le[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(De, "<$1></$2>");
					try {
						for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, Z.cleanData(v(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = V.apply([], e);
			var n, r, i, o, a, s, u = 0,
				c = this.length,
				l = this,
				f = c - 1,
				d = e[0],
				g = Z.isFunction(d);
			if (g || c > 1 && "string" == typeof d && !G.checkClone && Me.test(d)) return this.each(function(n) {
				var r = l.eq(n);
				g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t)
			});
			if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
				for (i = Z.map(v(n, "script"), h), o = i.length; c > u; u++) a = n, u !== f && (a = Z.clone(a, !0, !0), o && Z.merge(i, v(a, "script"))), t.call(this[u], a, u);
				if (o)
					for (s = i[i.length - 1].ownerDocument, Z.map(i, p), u = 0; o > u; u++) a = i[u], Pe.test(a.type || "") && !ve.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(He, "")))
			}
			return this
		}
	}), Z.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		Z.fn[e] = function(e) {
			for (var n, r = [], i = Z(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(i[a])[t](n), X.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var qe, Fe = {},
		$e = /^margin/,
		Ue = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"),
		Be = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
		};
	! function() {
		function t() {
			a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
			var t = e.getComputedStyle(a, null);
			n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
		}
		var n, r, i = K.documentElement,
			o = K.createElement("div"),
			a = K.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(G, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return null == r && t(), r
			},
			reliableMarginRight: function() {
				var t, n = a.appendChild(K.createElement("div"));
				return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), t
			}
		}))
	}(), Z.swap = function(e, t, n, r) {
		var i, o, a = {};
		for (o in t) a[o] = e.style[o], e.style[o] = t[o];
		i = n.apply(e, r || []);
		for (o in t) e.style[o] = a[o];
		return i
	};
	var Ve = /^(none|table(?!-c[ea]).+)/,
		Xe = new RegExp("^(" + xe + ")(.*)$", "i"),
		We = new RegExp("^([+-])=(" + xe + ")", "i"),
		Je = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ze = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Ye = ["Webkit", "O", "Moz", "ms"];
	Z.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = x(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = Z.camelCase(t),
					u = e.style;
				return t = Z.cssProps[s] || (Z.cssProps[s] = E(u, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = We.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0)
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = Z.camelCase(t);
			return t = Z.cssProps[s] || (Z.cssProps[s] = E(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = x(e, t, r)), "normal" === i && t in ze && (i = ze[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
		}
	}), Z.each(["height", "width"], function(e, t) {
		Z.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? Ve.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Je, function() {
					return k(e, t, r)
				}) : k(e, t, r) : void 0
			},
			set: function(e, n, r) {
				var i = r && Be(e);
				return T(e, n, r ? S(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), Z.cssHooks.marginRight = _(G.reliableMarginRight, function(e, t) {
		return t ? Z.swap(e, {
			display: "inline-block"
		}, x, [e, "marginRight"]) : void 0
	}), Z.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		Z.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + _e[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, $e.test(e) || (Z.cssHooks[e + t].set = T)
	}), Z.fn.extend({
		css: function(e, t) {
			return me(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Z.isArray(t)) {
					for (r = Be(e), i = t.length; i > a; a++) o[t[a]] = Z.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return N(this, !0)
		},
		hide: function() {
			return N(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Ee(this) ? Z(this).show() : Z(this).hide()
			})
		}
	}), Z.Tween = C, C.prototype = {
		constructor: C,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = C.propHooks[this.prop];
			return e && e.get ? e.get(this) : C.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = C.propHooks[this.prop];
			return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : C.propHooks._default.set(this), this
		}
	}, C.prototype.init.prototype = C.prototype, C.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, Z.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, Z.fx = C.prototype.init, Z.fx.step = {};
	var Ge, Ke, Qe = /^(?:toggle|show|hide)$/,
		Ze = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"),
		et = /queueHooks$/,
		tt = [A],
		nt = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Ze.exec(t),
					o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
					a = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
					s = 1,
					u = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, Z.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --u)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	Z.Animation = Z.extend(M, {
			tweener: function(e, t) {
				Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
			},
			prefilter: function(e, t) {
				t ? tt.unshift(e) : tt.push(e)
			}
		}), Z.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? Z.extend({}, e) : {
				complete: n || !n && t || Z.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !Z.isFunction(t) && t
			};
			return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
			}, r
		}, Z.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(Ee).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = Z.isEmptyObject(e),
					o = Z.speed(t, n, r),
					a = function() {
						var t = M(this, Z.extend({}, e), o);
						(i || ve.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						o = Z.timers,
						a = ve.get(this);
					if (i) a[i] && a[i].stop && r(a[i]);
					else
						for (i in a) a[i] && a[i].stop && et.test(i) && r(a[i]);
					for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					(t || !n) && Z.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = ve.get(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = Z.timers,
						a = r ? r.length : 0;
					for (n.finish = !0, Z.queue(this, e, []),
						i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), Z.each(["toggle", "show", "hide"], function(e, t) {
			var n = Z.fn[t];
			Z.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, r, i)
			}
		}), Z.each({
			slideDown: D("show"),
			slideUp: D("hide"),
			slideToggle: D("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			Z.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), Z.timers = [], Z.fx.tick = function() {
			var e, t = 0,
				n = Z.timers;
			for (Ge = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || Z.fx.stop(), Ge = void 0
		}, Z.fx.timer = function(e) {
			Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
		}, Z.fx.interval = 13, Z.fx.start = function() {
			Ke || (Ke = setInterval(Z.fx.tick, Z.fx.interval))
		}, Z.fx.stop = function() {
			clearInterval(Ke), Ke = null
		}, Z.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, Z.fn.delay = function(e, t) {
			return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		function() {
			var e = K.createElement("input"),
				t = K.createElement("select"),
				n = t.appendChild(K.createElement("option"));
			e.type = "checkbox", G.checkOn = "" !== e.value, G.optSelected = n.selected, t.disabled = !0, G.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = "t" === e.value
		}();
	var rt, it, ot = Z.expr.attrHandle;
	Z.fn.extend({
		attr: function(e, t) {
			return me(this, Z.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				Z.removeAttr(this, e)
			})
		}
	}), Z.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Se ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(he);
			if (o && 1 === e.nodeType)
				for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!G.radioValue && "radio" === t && Z.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), it = {
		set: function(e, t, n) {
			return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = ot[t] || Z.find.attr;
		ot[t] = function(e, t, r) {
			var i, o;
			return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
		}
	});
	var at = /^(?:input|select|textarea|button)$/i;
	Z.fn.extend({
		prop: function(e, t) {
			return me(this, Z.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[Z.propFix[e] || e]
			})
		}
	}), Z.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, o, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), G.optSelected || (Z.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		Z.propFix[this.toLowerCase()] = this
	});
	var st = /[\t\r\n\f]/g;
	Z.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, a, s = "string" == typeof e && e,
				u = 0,
				c = this.length;
			if (Z.isFunction(e)) return this.each(function(t) {
				Z(this).addClass(e.call(this, t, this.className))
			});
			if (s)
				for (t = (e || "").match(he) || []; c > u; u++)
					if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
						for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						a = Z.trim(r), n.className !== a && (n.className = a)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
				u = 0,
				c = this.length;
			if (Z.isFunction(e)) return this.each(function(t) {
				Z(this).removeClass(e.call(this, t, this.className))
			});
			if (s)
				for (t = (e || "").match(he) || []; c > u; u++)
					if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
						for (o = 0; i = t[o++];)
							for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
						a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function(n) {
				Z(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n)
					for (var t, r = 0, i = Z(this), o = e.match(he) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else(n === Se || "boolean" === n) && (this.className && ve.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	});
	var ut = /\r/g;
	Z.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = Z.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
			}
		}
	}), Z.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = Z.find.attr(e, "value");
					return null != t ? t : Z.trim(Z.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)
						if (n = r[u], (n.selected || u === i) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
							if (t = Z(n).val(), o) return t;
							a.push(t)
						}
					return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = Z.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), Z.each(["radio", "checkbox"], function() {
		Z.valHooks[this] = {
			set: function(e, t) {
				return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
			}
		}, G.checkOn || (Z.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		Z.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), Z.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var ct = Z.now(),
		lt = /\?/;
	Z.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, Z.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			n = new DOMParser, t = n.parseFromString(e, "text/xml")
		} catch (r) {
			t = void 0
		}
		return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
	};
	var ft = /#.*$/,
		dt = /([?&])_=[^&]*/,
		ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		gt = /^(?:GET|HEAD)$/,
		mt = /^\/\//,
		vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		yt = {},
		bt = {},
		wt = "*/".concat("*"),
		xt = e.location.href,
		_t = vt.exec(xt.toLowerCase()) || [];
	Z.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: xt,
			type: "GET",
			isLocal: pt.test(_t[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": wt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": Z.parseJSON,
				"text xml": Z.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? H(H(e, Z.ajaxSettings), t) : H(Z.ajaxSettings, e)
		},
		ajaxPrefilter: P(yt),
		ajaxTransport: P(bt),
		ajax: function(e, t) {
			function n(e, t, n, a) {
				var u, l, v, y, w, _ = t;
				2 !== b && (b = 2, s && clearTimeout(s), r = void 0, o = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = L(f, x, n)), y = q(f, y, x, u), u ? (f.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (Z.lastModified[i] = w), w = x.getResponseHeader("etag"), w && (Z.etag[i] = w)), 204 === e || "HEAD" === f.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = y.state, l = y.data, v = y.error, u = !v)) : (v = _, (e || !_) && (_ = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (t || _) + "", u ? p.resolveWith(d, [l, _, x]) : p.rejectWith(d, [x, _, v]), x.statusCode(m), m = void 0, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [x, f, u ? l : v]), g.fireWith(d, [x, _]), c && (h.trigger("ajaxComplete", [x, f]), --Z.active || Z.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var r, i, o, a, s, u, c, l, f = Z.ajaxSetup({}, t),
				d = f.context || f,
				h = f.context && (d.nodeType || d.jquery) ? Z(d) : Z.event,
				p = Z.Deferred(),
				g = Z.Callbacks("once memory"),
				m = f.statusCode || {},
				v = {},
				y = {},
				b = 0,
				w = "canceled",
				x = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === b) {
							if (!a)
								for (a = {}; t = ht.exec(o);) a[t[1].toLowerCase()] = t[2];
							t = a[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === b ? o : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return b || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return b || (f.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > b)
								for (t in e) m[t] = [m[t], e[t]];
							else x.always(e[x.status]);
						return this
					},
					abort: function(e) {
						var t = e || w;
						return r && r.abort(t), n(0, t), this
					}
				};
			if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((e || f.url || xt) + "").replace(ft, "").replace(mt, _t[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(he) || [""], null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === _t[1] && u[2] === _t[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (_t[3] || ("http:" === _t[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)), I(yt, f, t, x), 2 === b) return x;
			c = Z.event && f.global, c && 0 === Z.active++ && Z.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !gt.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (lt.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = dt.test(i) ? i.replace(dt, "$1_=" + ct++) : i + (lt.test(i) ? "&" : "?") + "_=" + ct++)), f.ifModified && (Z.lastModified[i] && x.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && x.setRequestHeader("If-None-Match", Z.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : f.accepts["*"]);
			for (l in f.headers) x.setRequestHeader(l, f.headers[l]);
			if (f.beforeSend && (f.beforeSend.call(d, x, f) === !1 || 2 === b)) return x.abort();
			w = "abort";
			for (l in {
					success: 1,
					error: 1,
					complete: 1
				}) x[l](f[l]);
			if (r = I(bt, f, t, x)) {
				x.readyState = 1, c && h.trigger("ajaxSend", [x, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
					x.abort("timeout")
				}, f.timeout));
				try {
					b = 1, r.send(v, n)
				} catch (_) {
					if (!(2 > b)) throw _;
					n(-1, _)
				}
			} else n(-1, "No Transport");
			return x
		},
		getJSON: function(e, t, n) {
			return Z.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return Z.get(e, void 0, t, "script")
		}
	}), Z.each(["get", "post"], function(e, t) {
		Z[t] = function(e, n, r, i) {
			return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), Z._evalUrl = function(e) {
		return Z.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, Z.fn.extend({
		wrapAll: function(e) {
			var t;
			return Z.isFunction(e) ? this.each(function(t) {
				Z(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return Z.isFunction(e) ? this.each(function(t) {
				Z(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = Z(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = Z.isFunction(e);
			return this.each(function(n) {
				Z(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
			}).end()
		}
	}), Z.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, Z.expr.filters.visible = function(e) {
		return !Z.expr.filters.hidden(e)
	};
	var Et = /%20/g,
		Tt = /\[\]$/,
		St = /\r?\n/g,
		kt = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i;
	Z.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) F(n, e[n], t, i);
		return r.join("&").replace(Et, "+")
	}, Z.fn.extend({
		serialize: function() {
			return Z.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Z.prop(this, "elements");
				return e ? Z.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !Z(this).is(":disabled") && Nt.test(this.nodeName) && !kt.test(e) && (this.checked || !Te.test(e))
			}).map(function(e, t) {
				var n = Z(this).val();
				return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(St, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(St, "\r\n")
				}
			}).get()
		}
	}), Z.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var Ct = 0,
		Ot = {},
		Dt = {
			0: 200,
			1223: 204
		},
		jt = Z.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Ot) Ot[e]()
	}), G.cors = !!jt && "withCredentials" in jt, G.ajax = jt = !!jt, Z.ajaxTransport(function(e) {
		var t;
		return G.cors || jt && !e.crossDomain ? {
			send: function(n, r) {
				var i, o = e.xhr(),
					a = ++Ct;
				if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (i in e.xhrFields) o[i] = e.xhrFields[i];
				e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n) o.setRequestHeader(i, n[i]);
				t = function(e) {
					return function() {
						t && (delete Ot[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Dt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
							text: o.responseText
						} : void 0, o.getAllResponseHeaders()))
					}
				}, o.onload = t(), o.onerror = t("error"), t = Ot[a] = t("abort");
				try {
					o.send(e.hasContent && e.data || null)
				} catch (s) {
					if (t) throw s
				}
			},
			abort: function() {
				t && t()
			}
		} : void 0
	}), Z.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return Z.globalEval(e), e
			}
		}
	}), Z.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), Z.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(r, i) {
					t = Z("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), K.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var At = [],
		Rt = /(=)\?(?=&|$)|\?\?/;
	Z.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = At.pop() || Z.expando + "_" + ct++;
			return this[e] = !0, e
		}
	}), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, a, s = t.jsonp !== !1 && (Rt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Rt, "$1" + i) : t.jsonp !== !1 && (t.url += (lt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return a || Z.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			a = arguments
		}, r.always(function() {
			e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, At.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), Z.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || K;
		var r = ae.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
	};
	var Mt = Z.fn.load;
	Z.fn.load = function(e, t, n) {
		if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Z.ajax({
			url: e,
			type: i,
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
		}).complete(n && function(e, t) {
			a.each(n, o || [e.responseText, t, e])
		}), this
	}, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		Z.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), Z.expr.filters.animated = function(e) {
		return Z.grep(Z.timers, function(t) {
			return e === t.elem
		}).length
	};
	var Pt = e.document.documentElement;
	Z.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, c, l = Z.css(e, "position"),
				f = Z(e),
				d = {};
			"static" === l && (e.style.position = "relative"), s = f.offset(), o = Z.css(e, "top"), u = Z.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
		}
	}, Z.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				Z.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0],
				i = {
					top: 0,
					left: 0
				},
				o = r && r.ownerDocument;
			if (o) return t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Se && (i = r.getBoundingClientRect()), n = $(o), {
				top: i.top + n.pageYOffset - t.clientTop,
				left: i.left + n.pageXOffset - t.clientLeft
			}) : i
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - r.top - Z.css(n, "marginTop", !0),
					left: t.left - r.left - Z.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Pt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
				return e || Pt
			})
		}
	}), Z.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, n) {
		var r = "pageYOffset" === n;
		Z.fn[t] = function(i) {
			return me(this, function(t, i, o) {
				var a = $(t);
				return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
			}, t, i, arguments.length, null)
		}
	}), Z.each(["top", "left"], function(e, t) {
		Z.cssHooks[t] = _(G.pixelPosition, function(e, n) {
			return n ? (n = x(e, t), Ue.test(n) ? Z(e).position()[t] + "px" : n) : void 0
		})
	}), Z.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		Z.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			Z.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					a = n || (r === !0 || i === !0 ? "margin" : "border");
				return me(this, function(t, n, r) {
					var i;
					return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
				}, t, o ? r : void 0, o, null)
			}
		})
	}), Z.fn.size = function() {
		return this.length
	}, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("foundation/lib/jquery/2.1.4", [], function() {
		return Z.noConflict(!0)
	});
	var It = e.jQuery,
		Ht = e.$;
	return Z.noConflict = function(t) {
		return e.$ === Z && (e.$ = Ht), t && e.jQuery === Z && (e.jQuery = It), Z
	}, typeof t === Se && (e.jQuery = e.$ = Z), Z
}), define("foundation/consolefix", ["jquery/nyt"], function(e) {
		"use strict";
		for (var t, n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], r = n.length, i = window.console = window.console || {}; r--;) t = n[r], i[t] || (i[t] = e.noop)
	}), define("foundation/cookies", ["jquery/nyt"], function(e) {
		"use strict";
		var t = {
				expires: 365,
				domain: ".nytimes.com",
				path: "/",
				secure: !1
			},
			n = function(e) {
				var t, n, r, i, o = document.cookie.split("; ");
				for (t = 0, n = o.length; n > t; ++t)
					if (r = o[t].split("="), i = r.shift(), i === e) return r.join("=");
				return null
			},
			r = function(n, r, i) {
				var o, a;
				i = e.extend({}, t, i), null === r && (i.expires = -1), e.isNumeric(i.expires) && (o = i.expires, a = new Date, a.setDate(a.getDate() + o), i.expires = a), document.cookie = [n, "=", r, "; expires=" + i.expires.toUTCString(), "; path=" + i.path, "; domain=" + i.domain, i.secure ? "; secure" : ""].join("")
			},
			i = function(e, t) {
				var i = n(e);
				null !== i && r(e, null, t)
			},
			o = function() {
				var e = "NYTCookiesEnabled",
					t = new Date,
					n = !1;
				return t.setTime(t.getTime() + 1e4), document.cookie = e + "=test; expires=" + t.toGMTString(), n = -1 !== document.cookie.indexOf(e), n && (t = new Date, t.setTime(t.getTime() - 1e4), document.cookie = e + "=test; expires=" + t.toGMTString()), n
			};
		return {
			readCookie: n,
			writeCookie: r,
			deleteCookie: i,
			cookiesEnabled: o
		}
	}), define("foundation/browser", [], function() {
		"use strict";
		var e = {
			getDocument: function() {
				return document
			},
			getWindow: function() {
				return window
			}
		};
		return e
	}), define("foundation/framebuster", ["foundation/cookies", "foundation/browser"], function(e, t) {
		"use strict";
		var n, r = t.getDocument().referrer,
			i = t.getWindow().top,
			o = t.getWindow().location,
			a = /^https?:\/\/(?:[^?\/]+\.)?(?:localhost|(?:nytimes|nytlabs|stumbleupon|starbucks)\.com|(?:newsdev|nyt)\.net)(?:\:[1-9][0-9]*)?\//;
		return window.self === i || o.pathname.match(/^\/portals/) && "www.nytimes.com" === o.hostname || r.match(a) || i.location.href.match(a) || (n = new Date, n.setTime(n.getTime() + 6e4), e.writeCookie({
			name: "FramesetReferrer",
			value: r,
			options: {
				expires: new Date(n)
			}
		}), i.location.replace(o.pathname)), a
	}),
	function() {
		function e(e) {
			function t(t, n, r, i, o, a) {
				for (; o >= 0 && a > o; o += e) {
					var s = i ? i[o] : o;
					r = n(r, t[s], s, t)
				}
				return r
			}
			return function(n, r, i, o) {
				r = b(r, o, 4);
				var a = !k(n) && y.keys(n),
					s = (a || n).length,
					u = e > 0 ? 0 : s - 1;
				return arguments.length < 3 && (i = n[a ? a[u] : u], u += e), t(n, r, i, a, u, s)
			}
		}

		function t(e) {
			return function(t, n, r) {
				n = w(n, r);
				for (var i = S(t), o = e > 0 ? 0 : i - 1; o >= 0 && i > o; o += e)
					if (n(t[o], o, t)) return o;
				return -1
			}
		}

		function n(e, t, n) {
			return function(r, i, o) {
				var a = 0,
					s = S(r);
				if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
				else if (n && o && s) return o = n(r, i), r[o] === i ? o : -1;
				if (i !== i) return o = t(l.call(r, a, s), y.isNaN), o >= 0 ? o + a : -1;
				for (o = e > 0 ? a : s - 1; o >= 0 && s > o; o += e)
					if (r[o] === i) return o;
				return -1
			}
		}

		function r(e, t) {
			var n = j.length,
				r = e.constructor,
				i = y.isFunction(r) && r.prototype || s,
				o = "constructor";
			for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;) o = j[n], o in e && e[o] !== i[o] && !y.contains(t, o) && t.push(o)
		}
		var i = this,
			o = i._,
			a = Array.prototype,
			s = Object.prototype,
			u = Function.prototype,
			c = a.push,
			l = a.slice,
			f = s.toString,
			d = s.hasOwnProperty,
			h = Array.isArray,
			p = Object.keys,
			g = u.bind,
			m = Object.create,
			v = function() {},
			y = function(e) {
				return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
			};
		"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : i._ = y, y.VERSION = "1.8.3";
		var b = function(e, t, n) {
				if (void 0 === t) return e;
				switch (null == n ? 3 : n) {
					case 1:
						return function(n) {
							return e.call(t, n)
						};
					case 2:
						return function(n, r) {
							return e.call(t, n, r)
						};
					case 3:
						return function(n, r, i) {
							return e.call(t, n, r, i)
						};
					case 4:
						return function(n, r, i, o) {
							return e.call(t, n, r, i, o)
						}
				}
				return function() {
					return e.apply(t, arguments)
				}
			},
			w = function(e, t, n) {
				return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
			};
		y.iteratee = function(e, t) {
			return w(e, t, 1 / 0)
		};
		var x = function(e, t) {
				return function(n) {
					var r = arguments.length;
					if (2 > r || null == n) return n;
					for (var i = 1; r > i; i++)
						for (var o = arguments[i], a = e(o), s = a.length, u = 0; s > u; u++) {
							var c = a[u];
							t && void 0 !== n[c] || (n[c] = o[c])
						}
					return n
				}
			},
			_ = function(e) {
				if (!y.isObject(e)) return {};
				if (m) return m(e);
				v.prototype = e;
				var t = new v;
				return v.prototype = null, t
			},
			E = function(e) {
				return function(t) {
					return null == t ? void 0 : t[e]
				}
			},
			T = Math.pow(2, 53) - 1,
			S = E("length"),
			k = function(e) {
				var t = S(e);
				return "number" == typeof t && t >= 0 && T >= t
			};
		y.each = y.forEach = function(e, t, n) {
			t = b(t, n);
			var r, i;
			if (k(e))
				for (r = 0, i = e.length; i > r; r++) t(e[r], r, e);
			else {
				var o = y.keys(e);
				for (r = 0, i = o.length; i > r; r++) t(e[o[r]], o[r], e)
			}
			return e
		}, y.map = y.collect = function(e, t, n) {
			t = w(t, n);
			for (var r = !k(e) && y.keys(e), i = (r || e).length, o = Array(i), a = 0; i > a; a++) {
				var s = r ? r[a] : a;
				o[a] = t(e[s], s, e)
			}
			return o
		}, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
			var r;
			return r = k(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n), void 0 !== r && -1 !== r ? e[r] : void 0
		}, y.filter = y.select = function(e, t, n) {
			var r = [];
			return t = w(t, n), y.each(e, function(e, n, i) {
				t(e, n, i) && r.push(e)
			}), r
		}, y.reject = function(e, t, n) {
			return y.filter(e, y.negate(w(t)), n)
		}, y.every = y.all = function(e, t, n) {
			t = w(t, n);
			for (var r = !k(e) && y.keys(e), i = (r || e).length, o = 0; i > o; o++) {
				var a = r ? r[o] : o;
				if (!t(e[a], a, e)) return !1
			}
			return !0
		}, y.some = y.any = function(e, t, n) {
			t = w(t, n);
			for (var r = !k(e) && y.keys(e), i = (r || e).length, o = 0; i > o; o++) {
				var a = r ? r[o] : o;
				if (t(e[a], a, e)) return !0
			}
			return !1
		}, y.contains = y.includes = y.include = function(e, t, n, r) {
			return k(e) || (e = y.values(e)), ("number" != typeof n || r) && (n = 0), y.indexOf(e, t, n) >= 0
		}, y.invoke = function(e, t) {
			var n = l.call(arguments, 2),
				r = y.isFunction(t);
			return y.map(e, function(e) {
				var i = r ? t : e[t];
				return null == i ? i : i.apply(e, n)
			})
		}, y.pluck = function(e, t) {
			return y.map(e, y.property(t))
		}, y.where = function(e, t) {
			return y.filter(e, y.matcher(t))
		}, y.findWhere = function(e, t) {
			return y.find(e, y.matcher(t))
		}, y.max = function(e, t, n) {
			var r, i, o = -(1 / 0),
				a = -(1 / 0);
			if (null == t && null != e) {
				e = k(e) ? e : y.values(e);
				for (var s = 0, u = e.length; u > s; s++) r = e[s], r > o && (o = r)
			} else t = w(t, n), y.each(e, function(e, n, r) {
				i = t(e, n, r), (i > a || i === -(1 / 0) && o === -(1 / 0)) && (o = e, a = i)
			});
			return o
		}, y.min = function(e, t, n) {
			var r, i, o = 1 / 0,
				a = 1 / 0;
			if (null == t && null != e) {
				e = k(e) ? e : y.values(e);
				for (var s = 0, u = e.length; u > s; s++) r = e[s], o > r && (o = r)
			} else t = w(t, n), y.each(e, function(e, n, r) {
				i = t(e, n, r), (a > i || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
			});
			return o
		}, y.shuffle = function(e) {
			for (var t, n = k(e) ? e : y.values(e), r = n.length, i = Array(r), o = 0; r > o; o++) t = y.random(0, o), t !== o && (i[o] = i[t]), i[t] = n[o];
			return i
		}, y.sample = function(e, t, n) {
			return null == t || n ? (k(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
		}, y.sortBy = function(e, t, n) {
			return t = w(t, n), y.pluck(y.map(e, function(e, n, r) {
				return {
					value: e,
					index: n,
					criteria: t(e, n, r)
				}
			}).sort(function(e, t) {
				var n = e.criteria,
					r = t.criteria;
				if (n !== r) {
					if (n > r || void 0 === n) return 1;
					if (r > n || void 0 === r) return -1
				}
				return e.index - t.index
			}), "value")
		};
		var N = function(e) {
			return function(t, n, r) {
				var i = {};
				return n = w(n, r), y.each(t, function(r, o) {
					var a = n(r, o, t);
					e(i, r, a)
				}), i
			}
		};
		y.groupBy = N(function(e, t, n) {
			y.has(e, n) ? e[n].push(t) : e[n] = [t]
		}), y.indexBy = N(function(e, t, n) {
			e[n] = t
		}), y.countBy = N(function(e, t, n) {
			y.has(e, n) ? e[n]++ : e[n] = 1
		}), y.toArray = function(e) {
			return e ? y.isArray(e) ? l.call(e) : k(e) ? y.map(e, y.identity) : y.values(e) : []
		}, y.size = function(e) {
			return null == e ? 0 : k(e) ? e.length : y.keys(e).length
		}, y.partition = function(e, t, n) {
			t = w(t, n);
			var r = [],
				i = [];
			return y.each(e, function(e, n, o) {
				(t(e, n, o) ? r : i).push(e)
			}), [r, i]
		}, y.first = y.head = y.take = function(e, t, n) {
			return null != e ? null == t || n ? e[0] : y.initial(e, e.length - t) : void 0
		}, y.initial = function(e, t, n) {
			return l.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
		}, y.last = function(e, t, n) {
			return null != e ? null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t)) : void 0
		}, y.rest = y.tail = y.drop = function(e, t, n) {
			return l.call(e, null == t || n ? 1 : t)
		}, y.compact = function(e) {
			return y.filter(e, y.identity)
		};
		var C = function(e, t, n, r) {
			for (var i = [], o = 0, a = r || 0, s = S(e); s > a; a++) {
				var u = e[a];
				if (k(u) && (y.isArray(u) || y.isArguments(u))) {
					t || (u = C(u, t, n));
					var c = 0,
						l = u.length;
					for (i.length += l; l > c;) i[o++] = u[c++]
				} else n || (i[o++] = u)
			}
			return i
		};
		y.flatten = function(e, t) {
			return C(e, t, !1)
		}, y.without = function(e) {
			return y.difference(e, l.call(arguments, 1))
		}, y.uniq = y.unique = function(e, t, n, r) {
			y.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = w(n, r));
			for (var i = [], o = [], a = 0, s = S(e); s > a; a++) {
				var u = e[a],
					c = n ? n(u, a, e) : u;
				t ? (a && o === c || i.push(u), o = c) : n ? y.contains(o, c) || (o.push(c), i.push(u)) : y.contains(i, u) || i.push(u)
			}
			return i
		}, y.union = function() {
			return y.uniq(C(arguments, !0, !0))
		}, y.intersection = function(e) {
			for (var t = [], n = arguments.length, r = 0, i = S(e); i > r; r++) {
				var o = e[r];
				if (!y.contains(t, o)) {
					for (var a = 1; n > a && y.contains(arguments[a], o); a++);
					a === n && t.push(o)
				}
			}
			return t
		}, y.difference = function(e) {
			var t = C(arguments, !0, !0, 1);
			return y.filter(e, function(e) {
				return !y.contains(t, e)
			})
		}, y.zip = function() {
			return y.unzip(arguments)
		}, y.unzip = function(e) {
			for (var t = e && y.max(e, S).length || 0, n = Array(t), r = 0; t > r; r++) n[r] = y.pluck(e, r);
			return n
		}, y.object = function(e, t) {
			for (var n = {}, r = 0, i = S(e); i > r; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
			return n
		}, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, r) {
			n = w(n, r, 1);
			for (var i = n(t), o = 0, a = S(e); a > o;) {
				var s = Math.floor((o + a) / 2);
				n(e[s]) < i ? o = s + 1 : a = s
			}
			return o
		}, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
			null == t && (t = e || 0, e = 0), n = n || 1;
			for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; r > o; o++, e += n) i[o] = e;
			return i
		};
		var O = function(e, t, n, r, i) {
			if (!(r instanceof t)) return e.apply(n, i);
			var o = _(e.prototype),
				a = e.apply(o, i);
			return y.isObject(a) ? a : o
		};
		y.bind = function(e, t) {
			if (g && e.bind === g) return g.apply(e, l.call(arguments, 1));
			if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
			var n = l.call(arguments, 2),
				r = function() {
					return O(e, r, t, this, n.concat(l.call(arguments)))
				};
			return r
		}, y.partial = function(e) {
			var t = l.call(arguments, 1),
				n = function() {
					for (var r = 0, i = t.length, o = Array(i), a = 0; i > a; a++) o[a] = t[a] === y ? arguments[r++] : t[a];
					for (; r < arguments.length;) o.push(arguments[r++]);
					return O(e, n, this, this, o)
				};
			return n
		}, y.bindAll = function(e) {
			var t, n, r = arguments.length;
			if (1 >= r) throw new Error("bindAll must be passed function names");
			for (t = 1; r > t; t++) n = arguments[t], e[n] = y.bind(e[n], e);
			return e
		}, y.memoize = function(e, t) {
			var n = function(r) {
				var i = n.cache,
					o = "" + (t ? t.apply(this, arguments) : r);
				return y.has(i, o) || (i[o] = e.apply(this, arguments)), i[o]
			};
			return n.cache = {}, n
		}, y.delay = function(e, t) {
			var n = l.call(arguments, 2);
			return setTimeout(function() {
				return e.apply(null, n)
			}, t)
		}, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
			var r, i, o, a = null,
				s = 0;
			n || (n = {});
			var u = function() {
				s = n.leading === !1 ? 0 : y.now(), a = null, o = e.apply(r, i), a || (r = i = null)
			};
			return function() {
				var c = y.now();
				s || n.leading !== !1 || (s = c);
				var l = t - (c - s);
				return r = this, i = arguments, 0 >= l || l > t ? (a && (clearTimeout(a), a = null), s = c, o = e.apply(r, i), a || (r = i = null)) : a || n.trailing === !1 || (a = setTimeout(u, l)), o
			}
		}, y.debounce = function(e, t, n) {
			var r, i, o, a, s, u = function() {
				var c = y.now() - a;
				t > c && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)))
			};
			return function() {
				o = this, i = arguments, a = y.now();
				var c = n && !r;
				return r || (r = setTimeout(u, t)), c && (s = e.apply(o, i), o = i = null), s
			}
		}, y.wrap = function(e, t) {
			return y.partial(t, e)
		}, y.negate = function(e) {
			return function() {
				return !e.apply(this, arguments)
			}
		}, y.compose = function() {
			var e = arguments,
				t = e.length - 1;
			return function() {
				for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
				return r
			}
		}, y.after = function(e, t) {
			return function() {
				return --e < 1 ? t.apply(this, arguments) : void 0
			}
		}, y.before = function(e, t) {
			var n;
			return function() {
				return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
			}
		}, y.once = y.partial(y.before, 2);
		var D = !{
				toString: null
			}.propertyIsEnumerable("toString"),
			j = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
		y.keys = function(e) {
			if (!y.isObject(e)) return [];
			if (p) return p(e);
			var t = [];
			for (var n in e) y.has(e, n) && t.push(n);
			return D && r(e, t),
				t
		}, y.allKeys = function(e) {
			if (!y.isObject(e)) return [];
			var t = [];
			for (var n in e) t.push(n);
			return D && r(e, t), t
		}, y.values = function(e) {
			for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = e[t[i]];
			return r
		}, y.mapObject = function(e, t, n) {
			t = w(t, n);
			for (var r, i = y.keys(e), o = i.length, a = {}, s = 0; o > s; s++) r = i[s], a[r] = t(e[r], r, e);
			return a
		}, y.pairs = function(e) {
			for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; n > i; i++) r[i] = [t[i], e[t[i]]];
			return r
		}, y.invert = function(e) {
			for (var t = {}, n = y.keys(e), r = 0, i = n.length; i > r; r++) t[e[n[r]]] = n[r];
			return t
		}, y.functions = y.methods = function(e) {
			var t = [];
			for (var n in e) y.isFunction(e[n]) && t.push(n);
			return t.sort()
		}, y.extend = x(y.allKeys), y.extendOwn = y.assign = x(y.keys), y.findKey = function(e, t, n) {
			t = w(t, n);
			for (var r, i = y.keys(e), o = 0, a = i.length; a > o; o++)
				if (r = i[o], t(e[r], r, e)) return r
		}, y.pick = function(e, t, n) {
			var r, i, o = {},
				a = e;
			if (null == a) return o;
			y.isFunction(t) ? (i = y.allKeys(a), r = b(t, n)) : (i = C(arguments, !1, !1, 1), r = function(e, t, n) {
				return t in n
			}, a = Object(a));
			for (var s = 0, u = i.length; u > s; s++) {
				var c = i[s],
					l = a[c];
				r(l, c, a) && (o[c] = l)
			}
			return o
		}, y.omit = function(e, t, n) {
			if (y.isFunction(t)) t = y.negate(t);
			else {
				var r = y.map(C(arguments, !1, !1, 1), String);
				t = function(e, t) {
					return !y.contains(r, t)
				}
			}
			return y.pick(e, t, n)
		}, y.defaults = x(y.allKeys, !0), y.create = function(e, t) {
			var n = _(e);
			return t && y.extendOwn(n, t), n
		}, y.clone = function(e) {
			return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
		}, y.tap = function(e, t) {
			return t(e), e
		}, y.isMatch = function(e, t) {
			var n = y.keys(t),
				r = n.length;
			if (null == e) return !r;
			for (var i = Object(e), o = 0; r > o; o++) {
				var a = n[o];
				if (t[a] !== i[a] || !(a in i)) return !1
			}
			return !0
		};
		var A = function(e, t, n, r) {
			if (e === t) return 0 !== e || 1 / e === 1 / t;
			if (null == e || null == t) return e === t;
			e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
			var i = f.call(e);
			if (i !== f.call(t)) return !1;
			switch (i) {
				case "[object RegExp]":
				case "[object String]":
					return "" + e == "" + t;
				case "[object Number]":
					return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
				case "[object Date]":
				case "[object Boolean]":
					return +e === +t
			}
			var o = "[object Array]" === i;
			if (!o) {
				if ("object" != typeof e || "object" != typeof t) return !1;
				var a = e.constructor,
					s = t.constructor;
				if (a !== s && !(y.isFunction(a) && a instanceof a && y.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
			}
			n = n || [], r = r || [];
			for (var u = n.length; u--;)
				if (n[u] === e) return r[u] === t;
			if (n.push(e), r.push(t), o) {
				if (u = e.length, u !== t.length) return !1;
				for (; u--;)
					if (!A(e[u], t[u], n, r)) return !1
			} else {
				var c, l = y.keys(e);
				if (u = l.length, y.keys(t).length !== u) return !1;
				for (; u--;)
					if (c = l[u], !y.has(t, c) || !A(e[c], t[c], n, r)) return !1
			}
			return n.pop(), r.pop(), !0
		};
		y.isEqual = function(e, t) {
			return A(e, t)
		}, y.isEmpty = function(e) {
			return null == e ? !0 : k(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length
		}, y.isElement = function(e) {
			return !(!e || 1 !== e.nodeType)
		}, y.isArray = h || function(e) {
			return "[object Array]" === f.call(e)
		}, y.isObject = function(e) {
			var t = typeof e;
			return "function" === t || "object" === t && !!e
		}, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
			y["is" + e] = function(t) {
				return f.call(t) === "[object " + e + "]"
			}
		}), y.isArguments(arguments) || (y.isArguments = function(e) {
			return y.has(e, "callee")
		}), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
			return "function" == typeof e || !1
		}), y.isFinite = function(e) {
			return isFinite(e) && !isNaN(parseFloat(e))
		}, y.isNaN = function(e) {
			return y.isNumber(e) && e !== +e
		}, y.isBoolean = function(e) {
			return e === !0 || e === !1 || "[object Boolean]" === f.call(e)
		}, y.isNull = function(e) {
			return null === e
		}, y.isUndefined = function(e) {
			return void 0 === e
		}, y.has = function(e, t) {
			return null != e && d.call(e, t)
		}, y.noConflict = function() {
			return i._ = o, this
		}, y.identity = function(e) {
			return e
		}, y.constant = function(e) {
			return function() {
				return e
			}
		}, y.noop = function() {}, y.property = E, y.propertyOf = function(e) {
			return null == e ? function() {} : function(t) {
				return e[t]
			}
		}, y.matcher = y.matches = function(e) {
			return e = y.extendOwn({}, e),
				function(t) {
					return y.isMatch(t, e)
				}
		}, y.times = function(e, t, n) {
			var r = Array(Math.max(0, e));
			t = b(t, n, 1);
			for (var i = 0; e > i; i++) r[i] = t(i);
			return r
		}, y.random = function(e, t) {
			return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
		}, y.now = Date.now || function() {
			return (new Date).getTime()
		};
		var R = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"`": "&#x60;"
			},
			M = y.invert(R),
			P = function(e) {
				var t = function(t) {
						return e[t]
					},
					n = "(?:" + y.keys(e).join("|") + ")",
					r = RegExp(n),
					i = RegExp(n, "g");
				return function(e) {
					return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
				}
			};
		y.escape = P(R), y.unescape = P(M), y.result = function(e, t, n) {
			var r = null == e ? void 0 : e[t];
			return void 0 === r && (r = n), y.isFunction(r) ? r.call(e) : r
		};
		var I = 0;
		y.uniqueId = function(e) {
			var t = ++I + "";
			return e ? e + t : t
		}, y.templateSettings = {
			evaluate: /<%([\s\S]+?)%>/g,
			interpolate: /<%=([\s\S]+?)%>/g,
			escape: /<%-([\s\S]+?)%>/g
		};
		var H = /(.)^/,
			L = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			q = /\\|'|\r|\n|\u2028|\u2029/g,
			F = function(e) {
				return "\\" + L[e]
			};
		y.template = function(e, t, n) {
			!t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
			var r = RegExp([(t.escape || H).source, (t.interpolate || H).source, (t.evaluate || H).source].join("|") + "|$", "g"),
				i = 0,
				o = "__p+='";
			e.replace(r, function(t, n, r, a, s) {
				return o += e.slice(i, s).replace(q, F), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), t
			}), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
			try {
				var a = new Function(t.variable || "obj", "_", o)
			} catch (s) {
				throw s.source = o, s
			}
			var u = function(e) {
					return a.call(this, e, y)
				},
				c = t.variable || "obj";
			return u.source = "function(" + c + "){\n" + o + "}", u
		}, y.chain = function(e) {
			var t = y(e);
			return t._chain = !0, t
		};
		var $ = function(e, t) {
			return e._chain ? y(t).chain() : t
		};
		y.mixin = function(e) {
			y.each(y.functions(e), function(t) {
				var n = y[t] = e[t];
				y.prototype[t] = function() {
					var e = [this._wrapped];
					return c.apply(e, arguments), $(this, n.apply(y, e))
				}
			})
		}, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
			var t = a[e];
			y.prototype[e] = function() {
				var n = this._wrapped;
				return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], $(this, n)
			}
		}), y.each(["concat", "join", "slice"], function(e) {
			var t = a[e];
			y.prototype[e] = function() {
				return $(this, t.apply(this._wrapped, arguments))
			}
		}), y.prototype.value = function() {
			return this._wrapped
		}, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
			return "" + this._wrapped
		}, "function" == typeof define && define.amd && define("foundation/lib/underscore/1.8.3", [], function() {
			return y
		})
	}.call(this),
	function(e, t) {
		if ("function" == typeof define && define.amd) define("foundation/lib/backbone/1.1.2", ["underscore/nyt", "jquery/nyt", "exports"], function(n, r, i) {
			e.Backbone = t(e, i, n, r)
		});
		else if ("undefined" != typeof exports) {
			var n = require("underscore/nyt");
			t(e, exports, n)
		} else e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
	}(this, function(e, t, n, r) {
		var i = e.Backbone,
			o = [],
			a = (o.push, o.slice);
		o.splice;
		t.VERSION = "1.1.2", t.$ = r, t.noConflict = function() {
			return e.Backbone = i, this
		}, t.emulateHTTP = !1, t.emulateJSON = !1;
		var s = t.Events = {
				on: function(e, t, n) {
					if (!c(this, "on", e, [t, n]) || !t) return this;
					this._events || (this._events = {});
					var r = this._events[e] || (this._events[e] = []);
					return r.push({
						callback: t,
						context: n,
						ctx: n || this
					}), this
				},
				once: function(e, t, r) {
					if (!c(this, "once", e, [t, r]) || !t) return this;
					var i = this,
						o = n.once(function() {
							i.off(e, o), t.apply(this, arguments)
						});
					return o._callback = t, this.on(e, o, r)
				},
				off: function(e, t, r) {
					var i, o, a, s, u, l, f, d;
					if (!this._events || !c(this, "off", e, [t, r])) return this;
					if (!e && !t && !r) return this._events = void 0, this;
					for (s = e ? [e] : n.keys(this._events), u = 0, l = s.length; l > u; u++)
						if (e = s[u], a = this._events[e]) {
							if (this._events[e] = i = [], t || r)
								for (f = 0, d = a.length; d > f; f++) o = a[f], (t && t !== o.callback && t !== o.callback._callback || r && r !== o.context) && i.push(o);
							i.length || delete this._events[e]
						}
					return this
				},
				trigger: function(e) {
					if (!this._events) return this;
					var t = a.call(arguments, 1);
					if (!c(this, "trigger", e, t)) return this;
					var n = this._events[e],
						r = this._events.all;
					return n && l(n, t), r && l(r, arguments), this
				},
				stopListening: function(e, t, r) {
					var i = this._listeningTo;
					if (!i) return this;
					var o = !t && !r;
					r || "object" != typeof t || (r = this), e && ((i = {})[e._listenId] = e);
					for (var a in i) e = i[a], e.off(t, r, this), (o || n.isEmpty(e._events)) && delete this._listeningTo[a];
					return this
				}
			},
			u = /\s+/,
			c = function(e, t, n, r) {
				if (!n) return !0;
				if ("object" == typeof n) {
					for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
					return !1
				}
				if (u.test(n)) {
					for (var o = n.split(u), a = 0, s = o.length; s > a; a++) e[t].apply(e, [o[a]].concat(r));
					return !1
				}
				return !0
			},
			l = function(e, t) {
				var n, r = -1,
					i = e.length,
					o = t[0],
					a = t[1],
					s = t[2];
				switch (t.length) {
					case 0:
						for (; ++r < i;)(n = e[r]).callback.call(n.ctx);
						return;
					case 1:
						for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o);
						return;
					case 2:
						for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a);
						return;
					case 3:
						for (; ++r < i;)(n = e[r]).callback.call(n.ctx, o, a, s);
						return;
					default:
						for (; ++r < i;)(n = e[r]).callback.apply(n.ctx, t);
						return
				}
			},
			f = {
				listenTo: "on",
				listenToOnce: "once"
			};
		n.each(f, function(e, t) {
			s[t] = function(t, r, i) {
				var o = this._listeningTo || (this._listeningTo = {}),
					a = t._listenId || (t._listenId = n.uniqueId("l"));
				return o[a] = t, i || "object" != typeof r || (i = this), t[e](r, i, this), this
			}
		}), s.bind = s.on, s.unbind = s.off, n.extend(t, s);
		var d = t.Model = function(e, t) {
			var r = e || {};
			t || (t = {}), this.cid = n.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (r = this.parse(r, t) || {}), r = n.defaults({}, r, n.result(this, "defaults")), this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
		};
		n.extend(d.prototype, s, {
			changed: null,
			validationError: null,
			idAttribute: "id",
			initialize: function() {},
			toJSON: function(e) {
				return n.clone(this.attributes)
			},
			sync: function() {
				return t.sync.apply(this, arguments)
			},
			get: function(e) {
				return this.attributes[e]
			},
			escape: function(e) {
				return n.escape(this.get(e))
			},
			has: function(e) {
				return null != this.get(e)
			},
			set: function(e, t, r) {
				var i, o, a, s, u, c, l, f;
				if (null == e) return this;
				if ("object" == typeof e ? (o = e, r = t) : (o = {})[e] = t, r || (r = {}), !this._validate(o, r)) return !1;
				a = r.unset, u = r.silent, s = [], c = this._changing, this._changing = !0, c || (this._previousAttributes = n.clone(this.attributes), this.changed = {}), f = this.attributes, l = this._previousAttributes, this.idAttribute in o && (this.id = o[this.idAttribute]);
				for (i in o) t = o[i], n.isEqual(f[i], t) || s.push(i), n.isEqual(l[i], t) ? delete this.changed[i] : this.changed[i] = t, a ? delete f[i] : f[i] = t;
				if (!u) {
					s.length && (this._pending = r);
					for (var d = 0, h = s.length; h > d; d++) this.trigger("change:" + s[d], this, f[s[d]], r)
				}
				if (c) return this;
				if (!u)
					for (; this._pending;) r = this._pending, this._pending = !1, this.trigger("change", this, r);
				return this._pending = !1, this._changing = !1, this
			},
			unset: function(e, t) {
				return this.set(e, void 0, n.extend({}, t, {
					unset: !0
				}))
			},
			clear: function(e) {
				var t = {};
				for (var r in this.attributes) t[r] = void 0;
				return this.set(t, n.extend({}, e, {
					unset: !0
				}))
			},
			hasChanged: function(e) {
				return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
			},
			changedAttributes: function(e) {
				if (!e) return this.hasChanged() ? n.clone(this.changed) : !1;
				var t, r = !1,
					i = this._changing ? this._previousAttributes : this.attributes;
				for (var o in e) n.isEqual(i[o], t = e[o]) || ((r || (r = {}))[o] = t);
				return r
			},
			previous: function(e) {
				return null != e && this._previousAttributes ? this._previousAttributes[e] : null
			},
			previousAttributes: function() {
				return n.clone(this._previousAttributes)
			},
			fetch: function(e) {
				e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
				var t = this,
					r = e.success;
				return e.success = function(n) {
					return t.set(t.parse(n, e), e) ? (r && r(t, n, e), void t.trigger("sync", t, n, e)) : !1
				}, H(this, e), this.sync("read", this, e)
			},
			save: function(e, t, r) {
				var i, o, a, s = this.attributes;
				if (null == e || "object" == typeof e ? (i = e, r = t) : (i = {})[e] = t, r = n.extend({
						validate: !0
					}, r), i && !r.wait) {
					if (!this.set(i, r)) return !1
				} else if (!this._validate(i, r)) return !1;
				i && r.wait && (this.attributes = n.extend({}, s, i)), void 0 === r.parse && (r.parse = !0);
				var u = this,
					c = r.success;
				return r.success = function(e) {
					u.attributes = s;
					var t = u.parse(e, r);
					return r.wait && (t = n.extend(i || {}, t)), n.isObject(t) && !u.set(t, r) ? !1 : (c && c(u, e, r), void u.trigger("sync", u, e, r))
				}, H(this, r), o = this.isNew() ? "create" : r.patch ? "patch" : "update", "patch" === o && (r.attrs = i), a = this.sync(o, this, r), i && r.wait && (this.attributes = s), a
			},
			destroy: function(e) {
				e = e ? n.clone(e) : {};
				var t = this,
					r = e.success,
					i = function() {
						t.trigger("destroy", t, t.collection, e)
					};
				if (e.success = function(n) {
						(e.wait || t.isNew()) && i(), r && r(t, n, e), t.isNew() || t.trigger("sync", t, n, e)
					}, this.isNew()) return e.success(), !1;
				H(this, e);
				var o = this.sync("delete", this, e);
				return e.wait || i(), o
			},
			url: function() {
				var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || I();
				return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
			},
			parse: function(e, t) {
				return e
			},
			clone: function() {
				return new this.constructor(this.attributes)
			},
			isNew: function() {
				return !this.has(this.idAttribute)
			},
			isValid: function(e) {
				return this._validate({}, n.extend(e || {}, {
					validate: !0
				}))
			},
			_validate: function(e, t) {
				if (!t.validate || !this.validate) return !0;
				e = n.extend({}, this.attributes, e);
				var r = this.validationError = this.validate(e, t) || null;
				return r ? (this.trigger("invalid", this, r, n.extend(t, {
					validationError: r
				})), !1) : !0
			}
		});
		var h = ["keys", "values", "pairs", "invert", "pick", "omit"];
		n.each(h, function(e) {
			d.prototype[e] = function() {
				var t = a.call(arguments);
				return t.unshift(this.attributes), n[e].apply(n, t)
			}
		});
		var p = t.Collection = function(e, t) {
				t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
					silent: !0
				}, t))
			},
			g = {
				add: !0,
				remove: !0,
				merge: !0
			},
			m = {
				add: !0,
				remove: !1
			};
		n.extend(p.prototype, s, {
			model: d,
			initialize: function() {},
			toJSON: function(e) {
				return this.map(function(t) {
					return t.toJSON(e)
				})
			},
			sync: function() {
				return t.sync.apply(this, arguments)
			},
			add: function(e, t) {
				return this.set(e, n.extend({
					merge: !1
				}, t, m))
			},
			remove: function(e, t) {
				var r = !n.isArray(e);
				e = r ? [e] : n.clone(e), t || (t = {});
				var i, o, a, s;
				for (i = 0, o = e.length; o > i; i++) s = e[i] = this.get(e[i]), s && (delete this._byId[s.id], delete this._byId[s.cid], a = this.indexOf(s), this.models.splice(a, 1), this.length--, t.silent || (t.index = a, s.trigger("remove", s, this, t)), this._removeReference(s, t));
				return r ? e[0] : e
			},
			set: function(e, t) {
				t = n.defaults({}, t, g), t.parse && (e = this.parse(e, t));
				var r = !n.isArray(e);
				e = r ? e ? [e] : [] : n.clone(e);
				var i, o, a, s, u, c, l, f = t.at,
					h = this.model,
					p = this.comparator && null == f && t.sort !== !1,
					m = n.isString(this.comparator) ? this.comparator : null,
					v = [],
					y = [],
					b = {},
					w = t.add,
					x = t.merge,
					_ = t.remove,
					E = !p && w && _ ? [] : !1;
				for (i = 0, o = e.length; o > i; i++) {
					if (u = e[i] || {}, a = u instanceof d ? s = u : u[h.prototype.idAttribute || "id"], c = this.get(a)) _ && (b[c.cid] = !0), x && (u = u === s ? s.attributes : u, t.parse && (u = c.parse(u, t)), c.set(u, t), p && !l && c.hasChanged(m) && (l = !0)), e[i] = c;
					else if (w) {
						if (s = e[i] = this._prepareModel(u, t), !s) continue;
						v.push(s), this._addReference(s, t)
					}
					s = c || s, !E || !s.isNew() && b[s.id] || E.push(s), b[s.id] = !0
				}
				if (_) {
					for (i = 0, o = this.length; o > i; ++i) b[(s = this.models[i]).cid] || y.push(s);
					y.length && this.remove(y, t)
				}
				if (v.length || E && E.length)
					if (p && (l = !0), this.length += v.length, null != f)
						for (i = 0, o = v.length; o > i; i++) this.models.splice(f + i, 0, v[i]);
					else {
						E && (this.models.length = 0);
						var T = E || v;
						for (i = 0, o = T.length; o > i; i++) this.models.push(T[i])
					}
				if (l && this.sort({
						silent: !0
					}), !t.silent) {
					for (i = 0, o = v.length; o > i; i++)(s = v[i]).trigger("add", s, this, t);
					(l || E && E.length) && this.trigger("sort", this, t)
				}
				return r ? e[0] : e
			},
			reset: function(e, t) {
				t || (t = {});
				for (var r = 0, i = this.models.length; i > r; r++) this._removeReference(this.models[r], t);
				return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
					silent: !0
				}, t)), t.silent || this.trigger("reset", this, t), e
			},
			push: function(e, t) {
				return this.add(e, n.extend({
					at: this.length
				}, t))
			},
			pop: function(e) {
				var t = this.at(this.length - 1);
				return this.remove(t, e), t
			},
			unshift: function(e, t) {
				return this.add(e, n.extend({
					at: 0
				}, t))
			},
			shift: function(e) {
				var t = this.at(0);
				return this.remove(t, e), t
			},
			slice: function() {
				return a.apply(this.models, arguments)
			},
			get: function(e) {
				return null != e ? this._byId[e] || this._byId[e.id] || this._byId[e.cid] : void 0
			},
			at: function(e) {
				return this.models[e]
			},
			where: function(e, t) {
				return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
					for (var n in e)
						if (e[n] !== t.get(n)) return !1;
					return !0
				})
			},
			findWhere: function(e) {
				return this.where(e, !0)
			},
			sort: function(e) {
				if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
				return e || (e = {}), n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
			},
			pluck: function(e) {
				return n.invoke(this.models, "get", e)
			},
			fetch: function(e) {
				e = e ? n.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
				var t = e.success,
					r = this;
				return e.success = function(n) {
					var i = e.reset ? "reset" : "set";
					r[i](n, e), t && t(r, n, e), r.trigger("sync", r, n, e)
				}, H(this, e), this.sync("read", this, e)
			},
			create: function(e, t) {
				if (t = t ? n.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
				t.wait || this.add(e, t);
				var r = this,
					i = t.success;
				return t.success = function(e, n) {
					t.wait && r.add(e, t), i && i(e, n, t)
				}, e.save(null, t), e
			},
			parse: function(e, t) {
				return e
			},
			clone: function() {
				return new this.constructor(this.models)
			},
			_reset: function() {
				this.length = 0, this.models = [], this._byId = {}
			},
			_prepareModel: function(e, t) {
				if (e instanceof d) return e;
				t = t ? n.clone(t) : {}, t.collection = this;
				var r = new this.model(e, t);
				return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r
			},
			_addReference: function(e, t) {
				this._byId[e.cid] = e, null != e.id && (this._byId[e.id] = e), e.collection || (e.collection = this), e.on("all", this._onModelEvent, this)
			},
			_removeReference: function(e, t) {
				this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
			},
			_onModelEvent: function(e, t, n, r) {
				("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
			}
		});
		var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
		n.each(v, function(e) {
			p.prototype[e] = function() {
				var t = a.call(arguments);
				return t.unshift(this.models), n[e].apply(n, t)
			}
		});
		var y = ["groupBy", "countBy", "sortBy", "indexBy"];
		n.each(y, function(e) {
			p.prototype[e] = function(t, r) {
				var i = n.isFunction(t) ? t : function(e) {
					return e.get(t)
				};
				return n[e](this.models, i, r)
			}
		});
		var b = t.View = function(e) {
				this.cid = n.uniqueId("view"), e || (e = {}), n.extend(this, n.pick(e, x)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
			},
			w = /^(\S+)\s*(.*)$/,
			x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
		n.extend(b.prototype, s, {
			tagName: "div",
			$: function(e) {
				return this.$el.find(e)
			},
			initialize: function() {},
			render: function() {
				return this
			},
			remove: function() {
				return this.$el.remove(), this.stopListening(), this
			},
			setElement: function(e, n) {
				return this.$el && this.undelegateEvents(), this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this
			},
			delegateEvents: function(e) {
				if (!e && !(e = n.result(this, "events"))) return this;
				this.undelegateEvents();
				for (var t in e) {
					var r = e[t];
					if (n.isFunction(r) || (r = this[e[t]]), r) {
						var i = t.match(w),
							o = i[1],
							a = i[2];
						r = n.bind(r, this), o += ".delegateEvents" + this.cid, "" === a ? this.$el.on(o, r) : this.$el.on(o, a, r)
					}
				}
				return this
			},
			undelegateEvents: function() {
				return this.$el.off(".delegateEvents" + this.cid), this
			},
			_ensureElement: function() {
				if (this.el) this.setElement(n.result(this, "el"), !1);
				else {
					var e = n.extend({}, n.result(this, "attributes"));
					this.id && (e.id = n.result(this, "id")), this.className && (e["class"] = n.result(this, "className"));
					var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
					this.setElement(r, !1)
				}
			}
		}), t.sync = function(e, r, i) {
			var o = E[e];
			n.defaults(i || (i = {}), {
				emulateHTTP: t.emulateHTTP,
				emulateJSON: t.emulateJSON
			});
			var a = {
				type: o,
				dataType: "json"
			};
			if (i.url || (a.url = n.result(r, "url") || I()), null != i.data || !r || "create" !== e && "update" !== e && "patch" !== e || (a.contentType = "application/json", a.data = JSON.stringify(i.attrs || r.toJSON(i))), i.emulateJSON && (a.contentType = "application/x-www-form-urlencoded", a.data = a.data ? {
					model: a.data
				} : {}), i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
				a.type = "POST", i.emulateJSON && (a.data._method = o);
				var s = i.beforeSend;
				i.beforeSend = function(e) {
					return e.setRequestHeader("X-HTTP-Method-Override", o), s ? s.apply(this, arguments) : void 0
				}
			}
			"GET" === a.type || i.emulateJSON || (a.processData = !1), "PATCH" === a.type && _ && (a.xhr = function() {
				return new ActiveXObject("Microsoft.XMLHTTP")
			});
			var u = i.xhr = t.ajax(n.extend(a, i));
			return r.trigger("request", r, u, i), u
		};
		var _ = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
			E = {
				create: "POST",
				update: "PUT",
				patch: "PATCH",
				"delete": "DELETE",
				read: "GET"
			};
		t.ajax = function() {
			return t.$.ajax.apply(t.$, arguments)
		};
		var T = t.Router = function(e) {
				e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
			},
			S = /\((.*?)\)/g,
			k = /(\(\?)?:\w+/g,
			N = /\*\w+/g,
			C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
		n.extend(T.prototype, s, {
			initialize: function() {},
			route: function(e, r, i) {
				n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(r) && (i = r, r = ""), i || (i = this[r]);
				var o = this;
				return t.history.route(e, function(n) {
					var a = o._extractParameters(e, n);
					o.execute(i, a), o.trigger.apply(o, ["route:" + r].concat(a)), o.trigger("route", r, a), t.history.trigger("route", o, r, a)
				}), this
			},
			execute: function(e, t) {
				e && e.apply(this, t)
			},
			navigate: function(e, n) {
				return t.history.navigate(e, n), this
			},
			_bindRoutes: function() {
				if (this.routes) {
					this.routes = n.result(this, "routes");
					for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
				}
			},
			_routeToRegExp: function(e) {
				return e = e.replace(C, "\\$&").replace(S, "(?:$1)?").replace(k, function(e, t) {
					return t ? e : "([^/?]+)"
				}).replace(N, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
			},
			_extractParameters: function(e, t) {
				var r = e.exec(t).slice(1);
				return n.map(r, function(e, t) {
					return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
				})
			}
		});
		var O = t.History = function() {
				this.handlers = [], n.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
			},
			D = /^[#\/]|\s+$/g,
			j = /^\/+|\/+$/g,
			A = /msie [\w.]+/,
			R = /\/$/,
			M = /#.*$/;
		O.started = !1, n.extend(O.prototype, s, {
			interval: 50,
			atRoot: function() {
				return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
			},
			getHash: function(e) {
				var t = (e || this).location.href.match(/#(.*)$/);
				return t ? t[1] : ""
			},
			getFragment: function(e, t) {
				if (null == e)
					if (this._hasPushState || !this._wantsHashChange || t) {
						e = decodeURI(this.location.pathname + this.location.search);
						var n = this.root.replace(R, "");
						e.indexOf(n) || (e = e.slice(n.length))
					} else e = this.getHash();
				return e.replace(D, "")
			},
			start: function(e) {
				if (O.started) throw new Error("Backbone.history has already been started");
				O.started = !0, this.options = n.extend({
					root: "/"
				}, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
				var r = this.getFragment(),
					i = document.documentMode,
					o = A.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
				if (this.root = ("/" + this.root + "/").replace(j, "/"), o && this._wantsHashChange) {
					var a = t.$('<iframe src="javascript:0" tabindex="-1">');
					this.iframe = a.hide().appendTo("body")[0].contentWindow, this.navigate(r)
				}
				this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = r;
				var s = this.location;
				if (this._wantsHashChange && this._wantsPushState) {
					if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
					this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(D, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
				}
				return this.options.silent ? void 0 : this.loadUrl()
			},
			stop: function() {
				t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), O.started = !1
			},
			route: function(e, t) {
				this.handlers.unshift({
					route: e,
					callback: t
				})
			},
			checkUrl: function(e) {
				var t = this.getFragment();
				return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), void this.loadUrl())
			},
			loadUrl: function(e) {
				return e = this.fragment = this.getFragment(e), n.any(this.handlers, function(t) {
					return t.route.test(e) ? (t.callback(e), !0) : void 0
				})
			},
			navigate: function(e, t) {
				if (!O.started) return !1;
				t && t !== !0 || (t = {
					trigger: !!t
				});
				var n = this.root + (e = this.getFragment(e || ""));
				if (e = e.replace(M, ""), this.fragment !== e) {
					if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
					else {
						if (!this._wantsHashChange) return this.location.assign(n);
						this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
					}
					return t.trigger ? this.loadUrl(e) : void 0
				}
			},
			_updateHash: function(e, t, n) {
				if (n) {
					var r = e.href.replace(/(javascript:|#).*$/, "");
					e.replace(r + "#" + t)
				} else e.hash = "#" + t
			}
		}), t.history = new O;
		var P = function(e, t) {
			var r, i = this;
			r = e && n.has(e, "constructor") ? e.constructor : function() {
				return i.apply(this, arguments)
			}, n.extend(r, i, t);
			var o = function() {
				this.constructor = r
			};
			return o.prototype = i.prototype, r.prototype = new o, e && n.extend(r.prototype, e), r.__super__ = i.prototype, r
		};
		d.extend = p.extend = T.extend = b.extend = O.extend = P;
		var I = function() {
				throw new Error('A "url" property or function must be specified')
			},
			H = function(e, t) {
				var n = t.error;
				t.error = function(r) {
					n && n(e, r, t), e.trigger("error", e, r, t)
				}
			};
		return t
	}),
	function(e, t) {
		"use strict";

		function n() {
			r.READY || (r.event.determineEventTypes(), r.utils.each(r.gestures, function(e) {
				r.detection.register(e)
			}), r.event.onTouch(r.DOCUMENT, r.EVENT_MOVE, r.detection.detect), r.event.onTouch(r.DOCUMENT, r.EVENT_END, r.detection.detect), r.READY = !0)
		}
		var r = function(e, t) {
			return new r.Instance(e, t || {})
		};
		r.defaults = {
			stop_browser_behavior: {
				userSelect: "none",
				touchAction: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		}, r.HAS_POINTEREVENTS = e.navigator.pointerEnabled || e.navigator.msPointerEnabled, r.HAS_TOUCHEVENTS = "ontouchstart" in e, r.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i, r.NO_MOUSEEVENTS = r.HAS_TOUCHEVENTS && e.navigator.userAgent.match(r.MOBILE_REGEX), r.EVENT_TYPES = {}, r.DIRECTION_DOWN = "down", r.DIRECTION_LEFT = "left", r.DIRECTION_UP = "up", r.DIRECTION_RIGHT = "right", r.POINTER_MOUSE = "mouse", r.POINTER_TOUCH = "touch", r.POINTER_PEN = "pen", r.EVENT_START = "start", r.EVENT_MOVE = "move", r.EVENT_END = "end", r.DOCUMENT = e.document, r.plugins = r.plugins || {}, r.gestures = r.gestures || {}, r.READY = !1, r.utils = {
			extend: function(e, n, r) {
				for (var i in n) e[i] !== t && r || (e[i] = n[i]);
				return e
			},
			each: function(e, n, r) {
				var i, o;
				if ("forEach" in e) e.forEach(n, r);
				else if (e.length !== t) {
					for (i = 0, o = e.length; o > i; i++)
						if (n.call(r, e[i], i, e) === !1) return
				} else
					for (i in e)
						if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1) return
			},
			hasParent: function(e, t) {
				for (; e;) {
					if (e == t) return !0;
					e = e.parentNode
				}
				return !1
			},
			getCenter: function(e) {
				var t = [],
					n = [];
				return r.utils.each(e, function(e) {
					t.push("undefined" != typeof e.clientX ? e.clientX : e.pageX), n.push("undefined" != typeof e.clientY ? e.clientY : e.pageY)
				}), {
					pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
					pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
				}
			},
			getVelocity: function(e, t, n) {
				return {
					x: Math.abs(t / e) || 0,
					y: Math.abs(n / e) || 0
				}
			},
			getAngle: function(e, t) {
				var n = t.pageY - e.pageY,
					r = t.pageX - e.pageX;
				return 180 * Math.atan2(n, r) / Math.PI
			},
			getDirection: function(e, t) {
				var n = Math.abs(e.pageX - t.pageX),
					i = Math.abs(e.pageY - t.pageY);
				return n >= i ? e.pageX - t.pageX > 0 ? r.DIRECTION_LEFT : r.DIRECTION_RIGHT : e.pageY - t.pageY > 0 ? r.DIRECTION_UP : r.DIRECTION_DOWN
			},
			getDistance: function(e, t) {
				var n = t.pageX - e.pageX,
					r = t.pageY - e.pageY;
				return Math.sqrt(n * n + r * r)
			},
			getScale: function(e, t) {
				return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
			},
			getRotation: function(e, t) {
				return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
			},
			isVertical: function(e) {
				return e == r.DIRECTION_UP || e == r.DIRECTION_DOWN
			},
			stopDefaultBrowserBehavior: function(e, t) {
				t && e && e.style && (r.utils.each(["webkit", "khtml", "moz", "Moz", "ms", "o", ""], function(n) {
					r.utils.each(t, function(t) {
						n && (t = n + t.substring(0, 1).toUpperCase() + t.substring(1)), t in e.style && (e.style[t] = t)
					})
				}), "none" == t.userSelect && (e.onselectstart = function() {
					return !1
				}), "none" == t.userDrag && (e.ondragstart = function() {
					return !1
				}))
			}
		}, r.Instance = function(e, t) {
			var i = this;
			return n(), this.element = e, this.enabled = !0, this.options = r.utils.extend(r.utils.extend({}, r.defaults), t || {}), this.options.stop_browser_behavior && r.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), r.event.onTouch(e, r.EVENT_START, function(e) {
				i.enabled && r.detection.startDetect(i, e)
			}), this
		}, r.Instance.prototype = {
			on: function(e, t) {
				var n = e.split(" ");
				return r.utils.each(n, function(e) {
					this.element.addEventListener(e, t, !1)
				}, this), this
			},
			off: function(e, t) {
				var n = e.split(" ");
				return r.utils.each(n, function(e) {
					this.element.removeEventListener(e, t, !1)
				}, this), this
			},
			trigger: function(e, t) {
				t || (t = {});
				var n = r.DOCUMENT.createEvent("Event");
				n.initEvent(e, !0, !0), n.gesture = t;
				var i = this.element;
				return r.utils.hasParent(t.target, i) && (i = t.target), i.dispatchEvent(n), this
			},
			enable: function(e) {
				return this.enabled = e, this
			}
		};
		var i = null,
			o = !1,
			a = !1;
		r.event = {
			bindDom: function(e, t, n) {
				var i = t.split(" ");
				r.utils.each(i, function(t) {
					e.addEventListener(t, n, !1)
				})
			},
			onTouch: function(e, t, n) {
				var s = this;
				this.bindDom(e, r.EVENT_TYPES[t], function(u) {
					var c = u.type.toLowerCase();
					if (!c.match(/mouse/) || !a) {
						c.match(/touch/) || c.match(/pointerdown/) || c.match(/mouse/) && 1 === u.which ? o = !0 : c.match(/mouse/) && !u.which && (o = !1), c.match(/touch|pointer/) && (a = !0);
						var l = 0;
						o && (r.HAS_POINTEREVENTS && t != r.EVENT_END ? l = r.PointerEvent.updatePointer(t, u) : c.match(/touch/) ? l = u.touches.length : a || (l = c.match(/up/) ? 0 : 1), l > 0 && t == r.EVENT_END ? t = r.EVENT_MOVE : l || (t = r.EVENT_END), (l || null === i) && (i = u), n.call(r.detection, s.collectEventData(e, t, s.getTouchList(i, t), u)), r.HAS_POINTEREVENTS && t == r.EVENT_END && (l = r.PointerEvent.updatePointer(t, u))), l || (i = null, o = !1, a = !1, r.PointerEvent.reset())
					}
				})
			},
			determineEventTypes: function() {
				var e;
				e = r.HAS_POINTEREVENTS ? r.PointerEvent.getEvents() : r.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], r.EVENT_TYPES[r.EVENT_START] = e[0], r.EVENT_TYPES[r.EVENT_MOVE] = e[1], r.EVENT_TYPES[r.EVENT_END] = e[2]
			},
			getTouchList: function(e) {
				return r.HAS_POINTEREVENTS ? r.PointerEvent.getTouchList() : e.touches ? e.touches : (e.identifier = 1, [e])
			},
			collectEventData: function(e, t, n, i) {
				var o = r.POINTER_TOUCH;
				return (i.type.match(/mouse/) || r.PointerEvent.matchType(r.POINTER_MOUSE, i)) && (o = r.POINTER_MOUSE), {
					center: r.utils.getCenter(n),
					timeStamp: (new Date).getTime(),
					target: i.target,
					touches: n,
					eventType: t,
					pointerType: o,
					srcEvent: i,
					preventDefault: function() {
						this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
					},
					stopPropagation: function() {
						this.srcEvent.stopPropagation()
					},
					stopDetect: function() {
						return r.detection.stopDetect()
					}
				}
			}
		}, r.PointerEvent = {
			pointers: {},
			getTouchList: function() {
				var e = this,
					t = [];
				return r.utils.each(e.pointers, function(e) {
					t.push(e)
				}), t
			},
			updatePointer: function(e, t) {
				return e == r.EVENT_END ? this.pointers = {} : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
			},
			matchType: function(e, t) {
				if (!t.pointerType) return !1;
				var n = t.pointerType,
					i = {};
				return i[r.POINTER_MOUSE] = n === t.MSPOINTER_TYPE_MOUSE || n === r.POINTER_MOUSE, i[r.POINTER_TOUCH] = n === t.MSPOINTER_TYPE_TOUCH || n === r.POINTER_TOUCH, i[r.POINTER_PEN] = n === t.MSPOINTER_TYPE_PEN || n === r.POINTER_PEN, i[e]
			},
			getEvents: function() {
				return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
			},
			reset: function() {
				this.pointers = {}
			}
		}, r.detection = {
			gestures: [],
			current: null,
			previous: null,
			stopped: !1,
			startDetect: function(e, t) {
				this.current || (this.stopped = !1, this.current = {
					inst: e,
					startEvent: r.utils.extend({}, t),
					lastEvent: !1,
					name: ""
				}, this.detect(t))
			},
			detect: function(e) {
				if (this.current && !this.stopped) {
					e = this.extendEventData(e);
					var t = this.current.inst.options;
					return r.utils.each(this.gestures, function(n) {
						return this.stopped || t[n.name] === !1 || n.handler.call(n, e, this.current.inst) !== !1 ? void 0 : (this.stopDetect(), !1)
					}, this), this.current && (this.current.lastEvent = e), e.eventType == r.EVENT_END && !e.touches.length - 1 && this.stopDetect(), e
				}
			},
			stopDetect: function() {
				this.previous = r.utils.extend({}, this.current), this.current = null, this.stopped = !0
			},
			extendEventData: function(e) {
				var t = this.current.startEvent;
				!t || e.touches.length == t.touches.length && e.touches !== t.touches || (t.touches = [], r.utils.each(e.touches, function(e) {
					t.touches.push(r.utils.extend({}, e))
				}));
				var n, i, o = e.timeStamp - t.timeStamp,
					a = e.center.pageX - t.center.pageX,
					s = e.center.pageY - t.center.pageY,
					u = r.utils.getVelocity(o, a, s);
				return "end" === e.eventType ? (n = this.current.lastEvent && this.current.lastEvent.interimAngle, i = this.current.lastEvent && this.current.lastEvent.interimDirection) : (n = this.current.lastEvent && r.utils.getAngle(this.current.lastEvent.center, e.center), i = this.current.lastEvent && r.utils.getDirection(this.current.lastEvent.center, e.center)), r.utils.extend(e, {
					deltaTime: o,
					deltaX: a,
					deltaY: s,
					velocityX: u.x,
					velocityY: u.y,
					distance: r.utils.getDistance(t.center, e.center),
					angle: r.utils.getAngle(t.center, e.center),
					interimAngle: n,
					direction: r.utils.getDirection(t.center, e.center),
					interimDirection: i,
					scale: r.utils.getScale(t.touches, e.touches),
					rotation: r.utils.getRotation(t.touches, e.touches),
					startEvent: t
				}), e
			},
			register: function(e) {
				var n = e.defaults || {};
				return n[e.name] === t && (n[e.name] = !0), r.utils.extend(r.defaults, n, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function(e, t) {
					return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
				}), this.gestures
			}
		}, r.gestures.Drag = {
			name: "drag",
			index: 50,
			defaults: {
				drag_min_distance: 10,
				correct_for_drag_min_distance: !0,
				drag_max_touches: 1,
				drag_block_horizontal: !1,
				drag_block_vertical: !1,
				drag_lock_to_axis: !1,
				drag_lock_min_distance: 25
			},
			triggered: !1,
			handler: function(e, t) {
				if (r.detection.current.name != this.name && this.triggered) return t.trigger(this.name + "end", e), void(this.triggered = !1);
				if (!(t.options.drag_max_touches > 0 && e.touches.length > t.options.drag_max_touches)) switch (e.eventType) {
					case r.EVENT_START:
						this.triggered = !1;
						break;
					case r.EVENT_MOVE:
						if (e.distance < t.options.drag_min_distance && r.detection.current.name != this.name) return;
						if (r.detection.current.name != this.name && (r.detection.current.name = this.name, t.options.correct_for_drag_min_distance && e.distance > 0)) {
							var n = Math.abs(t.options.drag_min_distance / e.distance);
							r.detection.current.startEvent.center.pageX += e.deltaX * n, r.detection.current.startEvent.center.pageY += e.deltaY * n, e = r.detection.extendEventData(e)
						}(r.detection.current.lastEvent.drag_locked_to_axis || t.options.drag_lock_to_axis && t.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
						var i = r.detection.current.lastEvent.direction;
						e.drag_locked_to_axis && i !== e.direction && (r.utils.isVertical(i) ? e.direction = e.deltaY < 0 ? r.DIRECTION_UP : r.DIRECTION_DOWN : e.direction = e.deltaX < 0 ? r.DIRECTION_LEFT : r.DIRECTION_RIGHT), this.triggered || (t.trigger(this.name + "start", e), this.triggered = !0), t.trigger(this.name, e), t.trigger(this.name + e.direction, e), (t.options.drag_block_vertical && r.utils.isVertical(e.direction) || t.options.drag_block_horizontal && !r.utils.isVertical(e.direction)) && e.preventDefault();
						break;
					case r.EVENT_END:
						this.triggered && t.trigger(this.name + "end", e), this.triggered = !1
				}
			}
		}, r.gestures.Hold = {
			name: "hold",
			index: 10,
			defaults: {
				hold_timeout: 500,
				hold_threshold: 1
			},
			timer: null,
			handler: function(e, t) {
				switch (e.eventType) {
					case r.EVENT_START:
						clearTimeout(this.timer), r.detection.current.name = this.name, this.timer = setTimeout(function() {
							"hold" == r.detection.current.name && t.trigger("hold", e)
						}, t.options.hold_timeout);
						break;
					case r.EVENT_MOVE:
						e.distance > t.options.hold_threshold && clearTimeout(this.timer);
						break;
					case r.EVENT_END:
						clearTimeout(this.timer)
				}
			}
		}, r.gestures.Release = {
			name: "release",
			index: 1 / 0,
			handler: function(e, t) {
				e.eventType == r.EVENT_END && t.trigger(this.name, e)
			}
		}, r.gestures.Swipe = {
			name: "swipe",
			index: 40,
			defaults: {
				swipe_min_touches: 1,
				swipe_max_touches: 1,
				swipe_velocity: .7
			},
			handler: function(e, t) {
				if (e.eventType == r.EVENT_END) {
					if (t.options.swipe_max_touches > 0 && e.touches.length < t.options.swipe_min_touches && e.touches.length > t.options.swipe_max_touches) return;
					(e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
				}
			}
		}, r.gestures.Tap = {
			name: "tap",
			index: 100,
			defaults: {
				tap_max_touchtime: 250,
				tap_max_distance: 10,
				tap_always: !0,
				doubletap_distance: 20,
				doubletap_interval: 300
			},
			handler: function(e, t) {
				if (e.eventType == r.EVENT_END && "touchcancel" != e.srcEvent.type) {
					var n = r.detection.previous,
						i = !1;
					if (e.deltaTime > t.options.tap_max_touchtime || e.distance > t.options.tap_max_distance) return;
					n && "tap" == n.name && e.timeStamp - n.lastEvent.timeStamp < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger("doubletap", e), i = !0), (!i || t.options.tap_always) && (r.detection.current.name = "tap", t.trigger(r.detection.current.name, e))
				}
			}
		}, r.gestures.Touch = {
			name: "touch",
			index: -(1 / 0),
			defaults: {
				prevent_default: !1,
				prevent_mouseevents: !1
			},
			handler: function(e, t) {
				return t.options.prevent_mouseevents && e.pointerType == r.POINTER_MOUSE ? void e.stopDetect() : (t.options.prevent_default && e.preventDefault(), void(e.eventType == r.EVENT_START && t.trigger(this.name, e)))
			}
		}, r.gestures.Transform = {
			name: "transform",
			index: 45,
			defaults: {
				transform_min_scale: .01,
				transform_min_rotation: 1,
				transform_always_block: !1
			},
			triggered: !1,
			handler: function(e, t) {
				if (r.detection.current.name != this.name && this.triggered) return t.trigger(this.name + "end", e), void(this.triggered = !1);
				if (!(e.touches.length < 2)) switch (t.options.transform_always_block && e.preventDefault(), e.eventType) {
					case r.EVENT_START:
						this.triggered = !1;
						break;
					case r.EVENT_MOVE:
						var n = Math.abs(1 - e.scale),
							i = Math.abs(e.rotation);
						if (n < t.options.transform_min_scale && i < t.options.transform_min_rotation) return;
						r.detection.current.name = this.name, this.triggered || (t.trigger(this.name + "start", e), this.triggered = !0), t.trigger(this.name, e), i > t.options.transform_min_rotation && t.trigger("rotate", e), n > t.options.transform_min_scale && (t.trigger("pinch", e), t.trigger("pinch" + (e.scale < 1 ? "in" : "out"), e));
						break;
					case r.EVENT_END:
						this.triggered && t.trigger(this.name + "end", e), this.triggered = !1
				}
			}
		}, "function" == typeof define && "object" == typeof define.amd && define.amd ? define("foundation/lib/hammer/1.0.6", [], function() {
			return r
		}) : "object" == typeof module && "object" == typeof module.exports ? module.exports = r : e.Hammer = r
	}(this);
var JSON;
JSON || (JSON = {}),
	function() {
		function str(e, t) {
			var n, r, i, o, a, s = gap,
				u = t[e];
			switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(e)), "function" == typeof rep && (u = rep.call(t, e, u)), typeof u) {
				case "string":
					return quote(u);
				case "number":
					return isFinite(u) ? String(u) : "null";
				case "boolean":
				case "null":
					return String(u);
				case "object":
					if (!u) return "null";
					if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(u)) {
						for (o = u.length, n = 0; o > n; n += 1) a[n] = str(n, u) || "null";
						return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + s + "]" : "[" + a.join(",") + "]", gap = s, i
					}
					if (rep && "object" == typeof rep)
						for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (r = rep[n], i = str(r, u), i && a.push(quote(r) + (gap ? ": " : ":") + i));
					else
						for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (i = str(r, u), i && a.push(quote(r) + (gap ? ": " : ":") + i));
					return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + s + "}" : "{" + a.join(",") + "}", gap = s, i
			}
		}

		function quote(e) {
			return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
				var t = meta[e];
				return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
			}) + '"' : '"' + e + '"'
		}

		function f(e) {
			return 10 > e ? "0" + e : e
		}
		"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
			return this.valueOf()
		});
		var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			gap, indent, meta = {
				"\b": "\\b",
				"	": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			rep;
		"function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
			var r;
			if (gap = "", indent = "", "number" == typeof n)
				for (r = 0; n > r; r += 1) indent += " ";
			else "string" == typeof n && (indent = n);
			if (rep = t, !t || "function" == typeof t || "object" == typeof t && "number" == typeof t.length) return str("", {
				"": e
			});
			throw new Error("JSON.stringify")
		}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
			function walk(e, t) {
				var n, r, i = e[t];
				if (i && "object" == typeof i)
					for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
				return reviver.call(e, t, i)
			}
			var j;
			if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
					return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
				})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
				"": j
			}, "") : j;
			throw new SyntaxError("JSON.parse")
		})
	}(), SockJS = function() {
		var e = document,
			t = window,
			n = {},
			r = function() {};
		r.prototype.addEventListener = function(e, t) {
			this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []);
			var r = this._listeners[e]; - 1 === n.arrIndexOf(r, t) && r.push(t)
		}, r.prototype.removeEventListener = function(e, t) {
			if (this._listeners && e in this._listeners) {
				var r = this._listeners[e],
					i = n.arrIndexOf(r, t);
				return -1 !== i ? void(r.length > 1 ? this._listeners[e] = r.slice(0, i).concat(r.slice(i + 1)) : delete this._listeners[e]) : void 0
			}
		}, r.prototype.dispatchEvent = function(e) {
			var t = e.type,
				n = Array.prototype.slice.call(arguments, 0);
			if (this["on" + t] && this["on" + t].apply(this, n), this._listeners && t in this._listeners)
				for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].apply(this, n)
		};
		var i = function(e, t) {
			if (this.type = e, "undefined" != typeof t)
				for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
		};
		i.prototype.toString = function() {
			var e = [];
			for (var t in this)
				if (this.hasOwnProperty(t)) {
					var n = this[t];
					"function" == typeof n && (n = "[function]"), e.push(t + "=" + n)
				}
			return "SimpleEvent(" + e.join(", ") + ")"
		};
		var o = function(e) {
			var t = this;
			t._events = e || [], t._listeners = {}
		};
		o.prototype.emit = function(e) {
			var t = this;
			if (t._verifyType(e), !t._nuked) {
				var n = Array.prototype.slice.call(arguments, 1);
				if (t["on" + e] && t["on" + e].apply(t, n), e in t._listeners)
					for (var r = 0; r < t._listeners[e].length; r++) t._listeners[e][r].apply(t, n)
			}
		}, o.prototype.on = function(e, t) {
			var n = this;
			n._verifyType(e), n._nuked || (e in n._listeners || (n._listeners[e] = []), n._listeners[e].push(t))
		}, o.prototype._verifyType = function(e) {
			var t = this; - 1 === n.arrIndexOf(t._events, e) && n.log("Event " + JSON.stringify(e) + " not listed " + JSON.stringify(t._events) + " in " + t)
		}, o.prototype.nuke = function() {
			var e = this;
			e._nuked = !0;
			for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
			e._listeners = {}
		};
		var a = "abcdefghijklmnopqrstuvwxyz0123456789_";
		n.random_string = function(e, t) {
			t = t || a.length;
			var n, r = [];
			for (n = 0; e > n; n++) r.push(a.substr(Math.floor(Math.random() * t), 1));
			return r.join("")
		}, n.random_number = function(e) {
			return Math.floor(Math.random() * e)
		}, n.random_number_string = function(e) {
			var t = ("" + (e - 1)).length,
				r = Array(t + 1).join("0");
			return (r + n.random_number(e)).slice(-t)
		}, n.getOrigin = function(e) {
			e += "/";
			var t = e.split("/").slice(0, 3);
			return t.join("/")
		}, n.isSameOriginUrl = function(e, n) {
			return n || (n = t.location.href), e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/")
		}, n.getParentDomain = function(e) {
			if (/^[0-9.]*$/.test(e)) return e;
			if (/^\[/.test(e)) return e;
			if (!/[.]/.test(e)) return e;
			var t = e.split(".").slice(1);
			return t.join(".")
		}, n.objectExtend = function(e, t) {
			for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
			return e
		};
		var s = "_jp";
		n.polluteGlobalNamespace = function() {
			s in t || (t[s] = {})
		}, n.closeFrame = function(e, t) {
			return "c" + JSON.stringify([e, t])
		}, n.userSetCode = function(e) {
			return 1e3 === e || e >= 3e3 && 4999 >= e
		}, n.countRTO = function(e) {
			var t;
			return t = e > 100 ? 3 * e : e + 200
		}, n.log = function() {}, n.bind = function(e, t) {
			return e.bind ? e.bind(t) : function() {
				return e.apply(t, arguments)
			}
		}, n.flatUrl = function(e) {
			return -1 === e.indexOf("?") && -1 === e.indexOf("#")
		}, n.amendUrl = function(t) {
			var r = e.location;
			if (!t) throw new Error("Wrong url for SockJS");
			if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
			0 === t.indexOf("//") && (t = r.protocol + t), 0 === t.indexOf("/") && (t = r.protocol + "//" + r.host + t), t = t.replace(/[/]+$/, "");
			var i = t.split("/");
			return ("http:" === i[0] && /:80$/.test(i[2]) || "https:" === i[0] && /:443$/.test(i[2])) && (i[2] = i[2].replace(/:(80|443)$/, "")), t = i.join("/")
		}, n.arrIndexOf = function(e, t) {
			for (var n = 0; n < e.length; n++)
				if (e[n] === t) return n;
			return -1
		}, n.arrSkip = function(e, t) {
			var r = n.arrIndexOf(e, t);
			if (-1 === r) return e.slice();
			var i = e.slice(0, r);
			return i.concat(e.slice(r + 1))
		}, n.isArray = Array.isArray || function(e) {
			return {}.toString.call(e).indexOf("Array") >= 0
		}, n.delay = function(e, t) {
			return "function" == typeof e && (t = e, e = 0), setTimeout(t, e)
		};
		var u, c = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
			l = {},
			f = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
			d = JSON && JSON.stringify || function(e) {
				return c.lastIndex = 0, c.test(e) && (e = e.replace(c, function(e) {
					return l[e]
				})), '"' + e + '"'
			},
			h = function(e) {
				var t, n = {},
					r = [];
				for (t = 0; 65536 > t; t++) r.push(String.fromCharCode(t));
				return e.lastIndex = 0, r.join("").replace(e, function(e) {
					return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), ""
				}), e.lastIndex = 0, n
			};
		n.quote = function(e) {
			var t = d(e);
			return f.lastIndex = 0, f.test(t) ? (u || (u = h(f)), t.replace(f, function(e) {
				return u[e]
			})) : t
		};
		var p = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
		n.probeProtocols = function() {
			for (var e = {}, t = 0; t < p.length; t++) {
				var n = p[t];
				e[n] = T[n] && T[n].enabled()
			}
			return e
		}, n.detectProtocols = function(e, t, n) {
			var r = {},
				i = [];
			t || (t = p);
			for (var o = 0; o < t.length; o++) {
				var a = t[o];
				r[a] = e[a]
			}
			var s = function(e) {
				var t = e.shift();
				r[t] ? i.push(t) : e.length > 0 && s(e)
			};
			return n.websocket !== !1 && s(["websocket"]), r["xhr-streaming"] && !n.null_origin ? i.push("xhr-streaming") : !r["xdr-streaming"] || n.cookie_needed || n.null_origin ? s(["iframe-eventsource", "iframe-htmlfile"]) : i.push("xdr-streaming"), r["xhr-polling"] && !n.null_origin ? i.push("xhr-polling") : !r["xdr-polling"] || n.cookie_needed || n.null_origin ? s(["iframe-xhr-polling", "jsonp-polling"]) : i.push("xdr-polling"), i
		};
		var g = "_sockjs_global";
		n.createHook = function() {
			var e = "a" + n.random_string(8);
			if (!(g in t)) {
				var r = {};
				t[g] = function(e) {
					return e in r || (r[e] = {
						id: e,
						del: function() {
							delete r[e]
						}
					}), r[e]
				}
			}
			return t[g](e)
		}, n.attachMessage = function(e) {
			n.attachEvent("message", e)
		}, n.attachEvent = function(n, r) {
			"undefined" != typeof t.addEventListener ? t.addEventListener(n, r, !1) : (e.attachEvent("on" + n, r), t.attachEvent("on" + n, r))
		}, n.detachMessage = function(e) {
			n.detachEvent("message", e)
		}, n.detachEvent = function(n, r) {
			"undefined" != typeof t.addEventListener ? t.removeEventListener(n, r, !1) : (e.detachEvent("on" + n, r), t.detachEvent("on" + n, r))
		};
		var m = {},
			v = !1,
			y = function() {
				for (var e in m) m[e](), delete m[e]
			},
			b = function() {
				v || (v = !0, y())
			};
		n.attachEvent("unload", b), n.unload_add = function(e) {
			var t = n.random_string(8);
			return m[t] = e, v && n.delay(y), t
		}, n.unload_del = function(e) {
			e in m && delete m[e]
		}, n.createIframe = function(t, r) {
			var i, o, a = e.createElement("iframe"),
				s = function() {
					clearTimeout(i);
					try {
						a.onload = null
					} catch (e) {}
					a.onerror = null
				},
				u = function() {
					a && (s(), setTimeout(function() {
						a && a.parentNode.removeChild(a), a = null
					}, 0), n.unload_del(o))
				},
				c = function(e) {
					a && (u(), r(e))
				},
				l = function(e, t) {
					try {
						a && a.contentWindow && a.contentWindow.postMessage(e, t)
					} catch (n) {}
				};
			return a.src = t, a.style.display = "none", a.style.position = "absolute", a.onerror = function() {
				c("onerror")
			}, a.onload = function() {
				clearTimeout(i), i = setTimeout(function() {
					c("onload timeout")
				}, 2e3)
			}, e.body.appendChild(a), i = setTimeout(function() {
				c("timeout")
			}, 15e3), o = n.unload_add(u), {
				post: l,
				cleanup: u,
				loaded: s
			}
		}, n.createHtmlfile = function(e, r) {
			var i, o, a, u = new ActiveXObject("htmlfile"),
				c = function() {
					clearTimeout(i)
				},
				l = function() {
					u && (c(), n.unload_del(o), a.parentNode.removeChild(a), a = u = null, CollectGarbage())
				},
				f = function(e) {
					u && (l(), r(e))
				},
				d = function(e, t) {
					try {
						a && a.contentWindow && a.contentWindow.postMessage(e, t)
					} catch (n) {}
				};
			u.open(), u.write('<html><script>document.domain="' + document.domain + '";</script></html>'), u.close(), u.parentWindow[s] = t[s];
			var h = u.createElement("div");
			return u.body.appendChild(h), a = u.createElement("iframe"), h.appendChild(a), a.src = e, i = setTimeout(function() {
				f("timeout")
			}, 15e3), o = n.unload_add(l), {
				post: d,
				cleanup: l,
				loaded: c
			}
		};
		var w = function() {};
		w.prototype = new o(["chunk", "finish"]), w.prototype._start = function(e, r, i, o) {
			var a = this;
			try {
				a.xhr = new XMLHttpRequest
			} catch (s) {}
			if (!a.xhr) try {
				a.xhr = new t.ActiveXObject("Microsoft.XMLHTTP")
			} catch (s) {}(t.ActiveXObject || t.XDomainRequest) && (r += (-1 === r.indexOf("?") ? "?" : "&") + "t=" + +new Date), a.unload_ref = n.unload_add(function() {
				a._cleanup(!0)
			});
			try {
				a.xhr.open(e, r, !0)
			} catch (u) {
				return a.emit("finish", 0, ""), void a._cleanup()
			}
			if (o && o.no_credentials || (a.xhr.withCredentials = "true"), o && o.headers)
				for (var c in o.headers) a.xhr.setRequestHeader(c, o.headers[c]);
			a.xhr.onreadystatechange = function() {
				if (a.xhr) {
					var e = a.xhr;
					switch (e.readyState) {
						case 3:
							try {
								var t = e.status,
									n = e.responseText
							} catch (e) {}
							1223 === t && (t = 204), n && n.length > 0 && a.emit("chunk", t, n);
							break;
						case 4:
							var t = e.status;
							1223 === t && (t = 204), a.emit("finish", t, e.responseText), a._cleanup(!1)
					}
				}
			}, a.xhr.send(i)
		}, w.prototype._cleanup = function(e) {
			var t = this;
			if (t.xhr) {
				if (n.unload_del(t.unload_ref), t.xhr.onreadystatechange = function() {}, e) try {
					t.xhr.abort()
				} catch (r) {}
				t.unload_ref = t.xhr = null
			}
		}, w.prototype.close = function() {
			var e = this;
			e.nuke(), e._cleanup(!0)
		};
		var x = n.XHRCorsObject = function() {
			var e = this,
				t = arguments;
			n.delay(function() {
				e._start.apply(e, t)
			})
		};
		x.prototype = new w;
		var _ = n.XHRLocalObject = function(e, t, r) {
			var i = this;
			n.delay(function() {
				i._start(e, t, r, {
					no_credentials: !0
				})
			})
		};
		_.prototype = new w;
		var E = n.XDRObject = function(e, t, r) {
			var i = this;
			n.delay(function() {
				i._start(e, t, r)
			})
		};
		E.prototype = new o(["chunk", "finish"]), E.prototype._start = function(e, t, r) {
			var i = this,
				o = new XDomainRequest;
			t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date;
			var a = o.ontimeout = o.onerror = function() {
				i.emit("finish", 0, ""), i._cleanup(!1)
			};
			o.onprogress = function() {
				i.emit("chunk", 200, o.responseText)
			}, o.onload = function() {
				i.emit("finish", 200, o.responseText), i._cleanup(!1)
			}, i.xdr = o, i.unload_ref = n.unload_add(function() {
				i._cleanup(!0)
			});
			try {
				i.xdr.open(e, t), i.xdr.send(r)
			} catch (s) {
				a()
			}
		}, E.prototype._cleanup = function(e) {
			var t = this;
			if (t.xdr) {
				if (n.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null, e) try {
					t.xdr.abort()
				} catch (r) {}
				t.unload_ref = t.xdr = null
			}
		}, E.prototype.close = function() {
			var e = this;
			e.nuke(), e._cleanup(!0)
		}, n.isXHRCorsCapable = function() {
			return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : t.XDomainRequest && e.domain ? 2 : H.enabled() ? 3 : 4
		};
		var T = function(e, t, r) {
			if (!(this instanceof T)) return new T(e, t, r);
			var i, o = this;
			o._options = {
				devel: !1,
				debug: !1,
				protocols_whitelist: [],
				info: void 0,
				rtt: void 0
			}, r && n.objectExtend(o._options, r), o._base_url = n.amendUrl(e), o._server = o._options.server || n.random_number_string(1e3), o._options.protocols_whitelist && o._options.protocols_whitelist.length ? i = o._options.protocols_whitelist : (i = "string" == typeof t && t.length > 0 ? [t] : n.isArray(t) ? t : null, i && o._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), o._protocols = [], o.protocol = null, o.readyState = T.CONNECTING, o._ir = V(o._base_url), o._ir.onfinish = function(e, t) {
				o._ir = null, e ? (o._options.info && (e = n.objectExtend(e, o._options.info)), o._options.rtt && (t = o._options.rtt), o._applyInfo(e, t, i), o._didClose()) : o._didClose(1002, "Can't connect to server", !0)
			}
		};
		T.prototype = new r, T.version = "0.3.4.12.gb154", T.CONNECTING = 0, T.OPEN = 1, T.CLOSING = 2, T.CLOSED = 3, T.prototype._debug = function() {
			this._options.debug && n.log.apply(n, arguments)
		}, T.prototype._dispatchOpen = function() {
			var e = this;
			e.readyState === T.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), e._transport_tref = null), e.readyState = T.OPEN, e.dispatchEvent(new i("open"))) : e._didClose(1006, "Server lost session")
		}, T.prototype._dispatchMessage = function(e) {
			var t = this;
			t.readyState === T.OPEN && t.dispatchEvent(new i("message", {
				data: e
			}))
		}, T.prototype._dispatchHeartbeat = function(e) {
			var t = this;
			t.readyState === T.OPEN && t.dispatchEvent(new i("heartbeat", {}))
		}, T.prototype._didClose = function(e, t, r) {
			var o = this;
			if (o.readyState !== T.CONNECTING && o.readyState !== T.OPEN && o.readyState !== T.CLOSING) throw new Error("INVALID_STATE_ERR");
			o._ir && (o._ir.nuke(), o._ir = null), o._transport && (o._transport.doCleanup(), o._transport = null);
			var a = new i("close", {
				code: e,
				reason: t,
				wasClean: n.userSetCode(e)
			});
			if (!n.userSetCode(e) && o.readyState === T.CONNECTING && !r) {
				if (o._try_next_protocol(a)) return;
				a = new i("close", {
					code: 2e3,
					reason: "All transports failed",
					wasClean: !1,
					last_event: a
				})
			}
			o.readyState = T.CLOSED, n.delay(function() {
				o.dispatchEvent(a)
			})
		}, T.prototype._didMessage = function(e) {
			var t = this,
				n = e.slice(0, 1);
			switch (n) {
				case "o":
					t._dispatchOpen();
					break;
				case "a":
					for (var r = JSON.parse(e.slice(1) || "[]"), i = 0; i < r.length; i++) t._dispatchMessage(r[i]);
					break;
				case "m":
					var r = JSON.parse(e.slice(1) || "null");
					t._dispatchMessage(r);
					break;
				case "c":
					var r = JSON.parse(e.slice(1) || "[]");
					t._didClose(r[0], r[1]);
					break;
				case "h":
					t._dispatchHeartbeat()
			}
		}, T.prototype._try_next_protocol = function(t) {
			var r = this;
			for (r.protocol && (r._debug("Closed transport:", r.protocol, "" + t), r.protocol = null), r._transport_tref && (clearTimeout(r._transport_tref), r._transport_tref = null);;) {
				var i = r.protocol = r._protocols.shift();
				if (!i) return !1;
				if (T[i] && T[i].need_body === !0 && (!e.body || "undefined" != typeof e.readyState && "complete" !== e.readyState)) return r._protocols.unshift(i), r.protocol = "waiting-for-load", n.attachEvent("load", function() {
					r._try_next_protocol()
				}), !0;
				if (T[i] && T[i].enabled(r._options)) {
					var o = T[i].roundTrips || 1,
						a = (r._options.rto || 0) * o || 5e3;
					r._transport_tref = n.delay(a, function() {
						r.readyState === T.CONNECTING && r._didClose(2007, "Transport timeouted")
					});
					var s = n.random_string(8),
						u = r._base_url + "/" + r._server + "/" + s;
					return r._debug("Opening transport:", i, " url:" + u, " RTO:" + r._options.rto), r._transport = new T[i](r, u, r._base_url), !0
				}
				r._debug("Skipping transport:", i)
			}
		}, T.prototype.close = function(e, t) {
			var r = this;
			if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR");
			return r.readyState !== T.CONNECTING && r.readyState !== T.OPEN ? !1 : (r.readyState = T.CLOSING, r._didClose(e || 1e3, t || "Normal closure"), !0)
		}, T.prototype.send = function(e) {
			var t = this;
			if (t.readyState === T.CONNECTING) throw new Error("INVALID_STATE_ERR");
			return t.readyState === T.OPEN && t._transport.doSend(n.quote("" + e)), !0
		}, T.prototype._applyInfo = function(t, r, i) {
			var o = this;
			o._options.info = t, o._options.rtt = r, o._options.rto = n.countRTO(r), o._options.info.null_origin = !e.domain;
			var a = n.probeProtocols();
			o._protocols = n.detectProtocols(a, i, t)
		};
		var S = T.websocket = function(e, r) {
			var i = this,
				o = r + "/websocket";
			o = "https" === o.slice(0, 5) ? "wss" + o.slice(5) : "ws" + o.slice(4), i.ri = e, i.url = o;
			var a = t.WebSocket || t.MozWebSocket;
			i.ws = new a(i.url), i.ws.onmessage = function(e) {
				i.ri._didMessage(e.data)
			}, i.unload_ref = n.unload_add(function() {
				i.ws.close()
			}), i.ws.onclose = function() {
				i.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken"))
			}
		};
		S.prototype.doSend = function(e) {
			this.ws.send("[" + e + "]")
		}, S.prototype.doCleanup = function() {
			var e = this,
				t = e.ws;
			t && (t.onmessage = t.onclose = null, t.close(), n.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null)
		}, S.enabled = function() {
			return !(!t.WebSocket && !t.MozWebSocket)
		}, S.roundTrips = 2;
		var k = function() {};
		k.prototype.send_constructor = function(e) {
			var t = this;
			t.send_buffer = [], t.sender = e
		}, k.prototype.doSend = function(e) {
			var t = this;
			t.send_buffer.push(e), t.send_stop || t.send_schedule()
		}, k.prototype.send_schedule_wait = function() {
			var e, t = this;
			t.send_stop = function() {
				t.send_stop = null, clearTimeout(e)
			}, e = n.delay(25, function() {
				t.send_stop = null, t.send_schedule()
			})
		}, k.prototype.send_schedule = function() {
			var e = this;
			if (e.send_buffer.length > 0) {
				var t = "[" + e.send_buffer.join(",") + "]";
				e.send_stop = e.sender(e.trans_url, t, function(t, n) {
					e.send_stop = null, t === !1 ? e.ri._didClose(1006, "Sending error " + n) : e.send_schedule_wait()
				}), e.send_buffer = []
			}
		}, k.prototype.send_destructor = function() {
			var e = this;
			e._send_stop && e._send_stop(), e._send_stop = null
		};
		var N = function(t, r, i) {
				var o = this;
				if (!("_send_form" in o)) {
					var a = o._send_form = e.createElement("form"),
						s = o._send_area = e.createElement("textarea");
					s.name = "d", a.style.display = "none", a.style.position = "absolute", a.method = "POST", a.enctype = "application/x-www-form-urlencoded", a.acceptCharset = "UTF-8", a.appendChild(s), e.body.appendChild(a)
				}
				var a = o._send_form,
					s = o._send_area,
					u = "a" + n.random_string(8);
				a.target = u, a.action = t + "/jsonp_send?i=" + u;
				var c;
				try {
					c = e.createElement('<iframe name="' + u + '">')
				} catch (l) {
					c = e.createElement("iframe"), c.name = u
				}
				c.id = u, a.appendChild(c), c.style.display = "none";
				try {
					s.value = r
				} catch (f) {
					n.log("Your browser is seriously broken. Go home! " + f.message)
				}
				a.submit();
				var d = function(e) {
					c.onerror && (c.onreadystatechange = c.onerror = c.onload = null, n.delay(500, function() {
						c.parentNode.removeChild(c), c = null
					}), s.value = "", i(!0))
				};
				return c.onerror = c.onload = d, c.onreadystatechange = function(e) {
					"complete" == c.readyState && d()
				}, d
			},
			C = function(e) {
				return function(t, n, r) {
					var i = new e("POST", t + "/xhr_send", n);
					return i.onfinish = function(e, t) {
							r(200 === e || 204 === e, "http status " + e)
						},
						function(e) {
							r(!1, e)
						}
				}
			},
			O = function(t, r) {
				var i, o, a = e.createElement("script"),
					s = function(e) {
						o && (o.parentNode.removeChild(o), o = null), a && (clearTimeout(i), a.parentNode.removeChild(a), a.onreadystatechange = a.onerror = a.onload = a.onclick = null, a = null, r(e), r = null)
					},
					u = !1,
					c = null;
				if (a.id = "a" + n.random_string(8), a.src = t, a.type = "text/javascript", a.charset = "UTF-8", a.onerror = function(e) {
						c || (c = setTimeout(function() {
							u || s(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
						}, 1e3))
					}, a.onload = function(e) {
						s(n.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
					}, a.onreadystatechange = function(e) {
						if (/loaded|closed/.test(a.readyState)) {
							if (a && a.htmlFor && a.onclick) {
								u = !0;
								try {
									a.onclick()
								} catch (t) {}
							}
							a && s(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
						}
					}, "undefined" == typeof a.async && e.attachEvent)
					if (/opera/i.test(navigator.userAgent)) o = e.createElement("script"), o.text = "try{var a = document.getElementById('" + a.id + "'); if(a)a.onerror();}catch(x){};", a.async = o.async = !1;
					else {
						try {
							a.htmlFor = a.id, a.event = "onclick"
						} catch (l) {}
						a.async = !0
					}
					"undefined" != typeof a.async && (a.async = !0), i = setTimeout(function() {
					s(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
				}, 35e3);
				var f = e.getElementsByTagName("head")[0];
				return f.insertBefore(a, f.firstChild), o && f.insertBefore(o, f.firstChild), s
			},
			D = T["jsonp-polling"] = function(e, t) {
				n.polluteGlobalNamespace();
				var r = this;
				r.ri = e, r.trans_url = t, r.send_constructor(N), r._schedule_recv()
			};
		D.prototype = new k, D.prototype._schedule_recv = function() {
			var e = this,
				t = function(t) {
					e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv()
				};
			e._recv_stop = j(e.trans_url + "/jsonp", O, t)
		}, D.enabled = function() {
			return !0
		}, D.need_body = !0, D.prototype.doCleanup = function() {
			var e = this;
			e._is_closing = !0, e._recv_stop && e._recv_stop(), e.ri = e._recv_stop = null, e.send_destructor()
		};
		var j = function(e, r, i) {
				var o = "a" + n.random_string(6),
					a = e + "?c=" + escape(s + "." + o),
					u = 0,
					c = function(e) {
						switch (u) {
							case 0:
								delete t[s][o], i(e);
								break;
							case 1:
								i(e), u = 2;
								break;
							case 2:
								delete t[s][o]
						}
					},
					l = r(a, c);
				t[s][o] = l;
				var f = function() {
					t[s][o] && (u = 1, t[s][o](n.closeFrame(1e3, "JSONP user aborted read")))
				};
				return f
			},
			A = function() {};
		A.prototype = new k, A.prototype.run = function(e, t, n, r, i) {
			var o = this;
			o.ri = e, o.trans_url = t, o.send_constructor(C(i)), o.poll = new Q(e, r, t + n, i)
		}, A.prototype.doCleanup = function() {
			var e = this;
			e.poll && (e.poll.abort(), e.poll = null)
		};
		var R = T["xhr-streaming"] = function(e, t) {
			this.run(e, t, "/xhr_streaming", re, n.XHRCorsObject)
		};
		R.prototype = new A, R.enabled = function() {
			return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
		}, R.roundTrips = 2, R.need_body = !0;
		var M = T["xdr-streaming"] = function(e, t) {
			this.run(e, t, "/xhr_streaming", re, n.XDRObject)
		};
		M.prototype = new A, M.enabled = function() {
			return !!t.XDomainRequest
		}, M.roundTrips = 2;
		var P = T["xhr-polling"] = function(e, t) {
			this.run(e, t, "/xhr", re, n.XHRCorsObject)
		};
		P.prototype = new A, P.enabled = R.enabled, P.roundTrips = 2;
		var I = T["xdr-polling"] = function(e, t) {
			this.run(e, t, "/xhr", re, n.XDRObject)
		};
		I.prototype = new A, I.enabled = M.enabled, I.roundTrips = 2;
		var H = function() {};
		H.prototype.i_constructor = function(e, t, r) {
			var i = this;
			i.ri = e, i.origin = n.getOrigin(r), i.base_url = r, i.trans_url = t;
			var o = r + "/iframe.html";
			i.ri._options.devel && (o += "?t=" + +new Date), i.window_id = n.random_string(8), o += "#" + i.window_id, i.iframeObj = n.createIframe(o, function(e) {
				i.ri._didClose(1006, "Unable to load an iframe (" + e + ")")
			}), i.onmessage_cb = n.bind(i.onmessage, i), n.attachMessage(i.onmessage_cb)
		}, H.prototype.doCleanup = function() {
			var e = this;
			if (e.iframeObj) {
				n.detachMessage(e.onmessage_cb);
				try {
					e.iframeObj.iframe.contentWindow && e.postMessage("c")
				} catch (t) {}
				e.iframeObj.cleanup(), e.iframeObj = null, e.onmessage_cb = e.iframeObj = null
			}
		}, H.prototype.onmessage = function(e) {
			var t = this;
			if (e.origin === t.origin) {
				var n = e.data.slice(0, 8),
					r = e.data.slice(8, 9),
					i = e.data.slice(9);
				if (n === t.window_id) switch (r) {
					case "s":
						t.iframeObj.loaded(), t.postMessage("s", JSON.stringify([T.version, t.protocol, t.trans_url, t.base_url]));
						break;
					case "t":
						t.ri._didMessage(i)
				}
			}
		}, H.prototype.postMessage = function(e, t) {
			var n = this;
			n.iframeObj.post(n.window_id + e + (t || ""), n.origin)
		}, H.prototype.doSend = function(e) {
			this.postMessage("m", e)
		}, H.enabled = function() {
			var e = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
			return ("function" == typeof t.postMessage || "object" == typeof t.postMessage) && !e
		};
		var L, q = function(e, r) {
				parent !== t ? parent.postMessage(L + e + (r || ""), "*") : n.log("Can't postMessage, no parent window.", e, r)
			},
			F = function() {};
		F.prototype._didClose = function(e, t) {
			q("t", n.closeFrame(e, t))
		}, F.prototype._didMessage = function(e) {
			q("t", e)
		}, F.prototype._doSend = function(e) {
			this._transport.doSend(e)
		}, F.prototype._doCleanup = function() {
			this._transport.doCleanup()
		}, n.parent_origin = void 0, T.bootstrap_iframe = function() {
			var r;
			L = e.location.hash.slice(1);
			var i = function(e) {
				if (e.source === parent && ("undefined" == typeof n.parent_origin && (n.parent_origin = e.origin), e.origin === n.parent_origin)) {
					var i = e.data.slice(0, 8),
						o = e.data.slice(8, 9),
						a = e.data.slice(9);
					if (i === L) switch (o) {
						case "s":
							var s = JSON.parse(a),
								u = s[0],
								c = s[1],
								l = s[2],
								f = s[3];
							if (u !== T.version && n.log('Incompatibile SockJS! Main site uses: "' + u + '", the iframe: "' + T.version + '".'), !n.flatUrl(l) || !n.flatUrl(f)) return void n.log("Only basic urls are supported in SockJS");
							if (!n.isSameOriginUrl(l) || !n.isSameOriginUrl(f)) return void n.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([t.location.href, l, f]) + ")");
							r = new F, r._transport = new F[c](r, l, f);
							break;
						case "m":
							r._doSend(a);
							break;
						case "c":
							r && r._doCleanup(), r = null
					}
				}
			};
			n.attachMessage(i), q("s")
		};
		var $ = function(e, t) {
			var r = this;
			n.delay(function() {
				r.doXhr(e, t)
			})
		};
		$.prototype = new o(["finish"]), $.prototype.doXhr = function(e, t) {
			var r = this,
				i = (new Date).getTime(),
				o = new t("GET", e + "/info"),
				a = n.delay(8e3, function() {
					o.ontimeout()
				});
			o.onfinish = function(e, t) {
				if (clearTimeout(a), a = null, 200 === e) {
					var n = (new Date).getTime() - i,
						o = JSON.parse(t);
					"object" != typeof o && (o = {}), r.emit("finish", o, n)
				} else r.emit("finish")
			}, o.ontimeout = function() {
				o.close(), r.emit("finish")
			}
		};
		var U = function(t) {
			var r = this,
				i = function() {
					var e = new H;
					e.protocol = "w-iframe-info-receiver";
					var n = function(t) {
							if ("string" == typeof t && "m" === t.substr(0, 1)) {
								var n = JSON.parse(t.substr(1)),
									i = n[0],
									o = n[1];
								r.emit("finish", i, o)
							} else r.emit("finish");
							e.doCleanup(), e = null
						},
						i = {
							_options: {},
							_didClose: n,
							_didMessage: n
						};
					e.i_constructor(i, t, t)
				};
			e.body ? i() : n.attachEvent("load", i)
		};
		U.prototype = new o(["finish"]);
		var B = function() {
			var e = this;
			n.delay(function() {
				e.emit("finish", {}, 2e3)
			})
		};
		B.prototype = new o(["finish"]);
		var V = function(e) {
				if (n.isSameOriginUrl(e)) return new $(e, n.XHRLocalObject);
				switch (n.isXHRCorsCapable()) {
					case 1:
						return new $(e, n.XHRLocalObject);
					case 2:
						return new $(e, n.XDRObject);
					case 3:
						return new U(e);
					default:
						return new B
				}
			},
			X = F["w-iframe-info-receiver"] = function(e, t, r) {
				var i = new $(r, n.XHRLocalObject);
				i.onfinish = function(t, n) {
					e._didMessage("m" + JSON.stringify([t, n])), e._didClose()
				}
			};
		X.prototype.doCleanup = function() {};
		var W = T["iframe-eventsource"] = function() {
			var e = this;
			e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments)
		};
		W.prototype = new H, W.enabled = function() {
			return "EventSource" in t && H.enabled()
		}, W.need_body = !0, W.roundTrips = 3;
		var J = F["w-iframe-eventsource"] = function(e, t) {
			this.run(e, t, "/eventsource", Z, n.XHRLocalObject)
		};
		J.prototype = new A;
		var z = T["iframe-xhr-polling"] = function() {
			var e = this;
			e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments)
		};
		z.prototype = new H, z.enabled = function() {
			return t.XMLHttpRequest && H.enabled()
		}, z.need_body = !0, z.roundTrips = 3;
		var Y = F["w-iframe-xhr-polling"] = function(e, t) {
			this.run(e, t, "/xhr", re, n.XHRLocalObject)
		};
		Y.prototype = new A;
		var G = T["iframe-htmlfile"] = function() {
			var e = this;
			e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments)
		};
		G.prototype = new H, G.enabled = function() {
			return H.enabled()
		}, G.need_body = !0, G.roundTrips = 3;
		var K = F["w-iframe-htmlfile"] = function(e, t) {
			this.run(e, t, "/htmlfile", ne, n.XHRLocalObject)
		};
		K.prototype = new A;
		var Q = function(e, t, n, r) {
			var i = this;
			i.ri = e, i.Receiver = t, i.recv_url = n, i.AjaxObject = r, i._scheduleRecv()
		};
		Q.prototype._scheduleRecv = function() {
			var e = this,
				t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject),
				n = 0;
			t.onmessage = function(t) {
				n += 1, e.ri._didMessage(t.data)
			}, t.onclose = function(n) {
				e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || ("permanent" === n.reason ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") : e._scheduleRecv())
			}
		}, Q.prototype.abort = function() {
			var e = this;
			e.poll_is_closing = !0, e.poll && e.poll.abort()
		};
		var Z = function(e) {
			var t = this,
				r = new EventSource(e);
			r.onmessage = function(e) {
				t.dispatchEvent(new i("message", {
					data: unescape(e.data)
				}))
			}, t.es_close = r.onerror = function(e, o) {
				var a = o ? "user" : 2 !== r.readyState ? "network" : "permanent";
				t.es_close = r.onmessage = r.onerror = null, r.close(), r = null, n.delay(200, function() {
					t.dispatchEvent(new i("close", {
						reason: a
					}))
				})
			}
		};
		Z.prototype = new r, Z.prototype.abort = function() {
			var e = this;
			e.es_close && e.es_close({}, !0)
		};
		var ee, te = function() {
				if (void 0 === ee)
					if ("ActiveXObject" in t) try {
						ee = !!new ActiveXObject("htmlfile")
					} catch (e) {} else ee = !1;
				return ee
			},
			ne = function(e) {
				var r = this;
				n.polluteGlobalNamespace(), r.id = "a" + n.random_string(6, 26), e += (-1 === e.indexOf("?") ? "?" : "&") + "c=" + escape(s + "." + r.id);
				var o, a = te() ? n.createHtmlfile : n.createIframe;
				t[s][r.id] = {
					start: function() {
						o.loaded()
					},
					message: function(e) {
						r.dispatchEvent(new i("message", {
							data: e
						}))
					},
					stop: function() {
						r.iframe_close({}, "network")
					}
				}, r.iframe_close = function(e, n) {
					o.cleanup(), r.iframe_close = o = null, delete t[s][r.id], r.dispatchEvent(new i("close", {
						reason: n
					}))
				}, o = a(e, function(e) {
					r.iframe_close({}, "permanent")
				})
			};
		ne.prototype = new r, ne.prototype.abort = function() {
			var e = this;
			e.iframe_close && e.iframe_close({}, "user")
		};
		var re = function(e, t) {
			var n = this,
				r = 0;
			n.xo = new t("POST", e, null), n.xo.onchunk = function(e, t) {
				if (200 === e)
					for (;;) {
						var o = t.slice(r),
							a = o.indexOf("\n");
						if (-1 === a) break;
						r += a + 1;
						var s = o.slice(0, a);
						n.dispatchEvent(new i("message", {
							data: s
						}))
					}
			}, n.xo.onfinish = function(e, t) {
				n.xo.onchunk(e, t), n.xo = null;
				var r = 200 === e ? "network" : "permanent";
				n.dispatchEvent(new i("close", {
					reason: r
				}))
			}
		};
		return re.prototype = new r, re.prototype.abort = function() {
			var e = this;
			e.xo && (e.xo.close(), e.dispatchEvent(new i("close", {
				reason: "user"
			})), e.xo = null)
		}, T.getUtils = function() {
			return n
		}, T.getIframeTransport = function() {
			return H
		}, T
	}(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("foundation/lib/sockjs", [], function() {
		return SockJS
	}), define("foundation/views/page-manager", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/cookies"], function(e, t, n, r) {
		"use strict";
		var i = n.View.extend({
			el: e(window),
			$document: e(document),
			$window: e(window),
			$html: e("html"),
			$body: e("body"),
			$shell: e("#shell"),
			$dom: {},
			disabledComponents: [],
			cachedViewport: {},
			metaTagStore: {},
			urlParamStore: {},
			edition: "us",
			furniture: {
				mediaViewerOpen: !1
			},
			pageReferrer: document.referrer,
			KEYS: {
				ENTER: 13,
				ESC: 27,
				LEFT: 37,
				UP: 38,
				RIGHT: 39,
				DOWN: 40,
				SPACE: 32,
				PAGE_UP: 33,
				PAGE_DOWN: 34,
				TAB: 9
			},
			trackingEventQueue: [],
			trackingQueueEmptied: !1,
			navigationKeysEnabled: !0,
			a11yEnabled: !1,
			adBlockDetectionPromise: new e.Deferred,
			router: new n.Router,
			initialize: function() {
				var n = this;
				t.bindAll(this, "handleBreakpoint", "handleKeyDown", "handleOrientation", "handlePageReady", "handleResizeDebounce", "handleResizeThrottle", "handleScrollDebounce", "handleScrollThrottle", "handleScrollUnthrottled", "handleHashChange", "handleSkipTo", "handleContentFocus", "handleUserActivity", "handleOnFocus", "handleBlur"), e.ajaxSetup({
					cache: !0
				}), this.isReady = !1, this.initEdition(), this.initMetaTags(), this.initComponentToggle(), this.initUrlParams(window.location.search), this.$document.ready(this.handlePageReady), this.initCanonical(), this.currentlyHasFocus = document.hasFocus(), "undefined" == typeof blockAdBlock ? this.adBlockDetectionPromise.reject() : (window.blockAdBlock.check(), window.blockAdBlock.onDetected(function() {
					n.adBlockDetectionPromise.resolve()
				}), window.blockAdBlock.onNotDetected(function() {
					n.adBlockDetectionPromise.reject()
				}))
			},
			handlePageReady: function() {
				this.isReady = !0, this.$body = e("body"), this.$shell = e("#shell"), this.$masthead = e("#masthead"), this.trigger("nyt:page-ready"), this.listenTo(this, "nyt:page-viewportchange", this.setViewport), this.listenTo(this, "nyt:app-swipe", this.handleSwipe), this.listenTo(this, "nyt:app-drag", this.handleDrag), this.$el.on("scroll", this.handleScrollThrottle), this.$el.on("scroll", this.handleScrollDebounce), this.$el.on("scroll", this.handleScrollUnthrottled), this.$el.on("resize", this.handleResizeThrottle), this.$el.on("resize", this.handleResizeDebounce), this.$el.on("hashchange", this.handleHashChange), this.$body.on("click", ".skip-button", this.handleSkipTo), this.$window.on("scroll", this.handleUserActivity), this.$window.on("focus", this.handleOnFocus), this.$window.on("focusout", this.handleBlur), this.$document.on("keydown mousedown mouseenter", this.handleUserActivity), this.$document.on("keydown", this.handleKeyDown), window.magnum.on("breakPoint", this.handleBreakpoint), window.magnum.on("orientationChange", this.handleOrientation), this.listenTo(this.router, "route", function(e, t) {
					this.trigger("nyt:route:" + e, t)
				}), n.history.start()
			},
			handleBreakpoint: function() {
				var e = Array.prototype.slice.call(arguments, 0);
				e.unshift("nyt:page-breakpoint"), this.trigger.apply(this, e)
			},
			handleOrientation: function() {
				var e = Array.prototype.slice.call(arguments, 0);
				e.unshift("nyt:page-orientation"), this.trigger.apply(this, e)
			},
			handleScroll: function() {
				this.trigger("nyt:page-scroll"), this.trigger("nyt:page-viewportchange")
			},
			handleScrollThrottle: t.throttle(function() {
				this.handleScroll()
			}, 100),
			handleScrollUnthrottled: t.throttle(function() {
				this.trigger("nyt:page-scroll-unthrottled")
			}, 17),
			handleScrollDebounce: t.debounce(function() {
				this.handleScroll(), this.trigger("nyt:page-scroll-after")
			}, 100),
			handleResize: function() {
				this.trigger("nyt:page-resize"), this.trigger("nyt:page-viewportchange")
			},
			handleResizeThrottle: t.throttle(function() {
				this.handleResize()
			}, 100),
			handleResizeDebounce: t.debounce(function() {
				this.handleResize(), this.trigger("nyt:page-resize-after")
			}, 100),
			handleSwipe: function(e) {
				this.trigger("nyt:page-swipe", e)
			},
			handleDrag: function(e, t) {
				this.trigger("nyt:page-drag", e, t)
			},
			enableNavigationKeys: function() {
				this.navigationKeysEnabled = !0
			},
			disableNavigationKeys: function() {
				this.navigationKeysEnabled = !1
			},
			handleKeyDown: function(t) {
				var n = t.keyCode,
					r = e(t.target),
					i = r.is("input, textarea"),
					o = t.shiftKey || t.altKey || t.ctrlKey || t.metaKey,
					a = this.getMeta("mediaviewer_isVisible") || !1,
					s = this.getMeta("commentspanel_isOpen") || !1,
					u = this.getMeta("applicationName");
				switch (!this.a11yEnabled && r.is(".enable-a11y") && this.toggleA11y(!0), n) {
					case this.KEYS.UP:
						this.a11yEnabled && this.trigger("nyt:page-key-up-a11y", t);
						break;
					case this.KEYS.DOWN:
						this.a11yEnabled && this.trigger("nyt:page-key-down-a11y", t);
						break;
					case this.KEYS.LEFT:
						if (this.a11yEnabled) {
							this.trigger("nyt:page-key-left-a11y", t);
							break
						}
						if (!this.navigationKeysEnabled || s) break;
						"slideshow" === u && this.trigger("nyt:slideshow-left", t), a && !o ? this.trigger("nyt:mediaviewer-left") : i || o || this.trigger("nyt:ribbon-left");
						break;
					case this.KEYS.RIGHT:
						if (this.a11yEnabled) {
							this.trigger("nyt:page-key-right-a11y", t);
							break
						}
						if (!this.navigationKeysEnabled || s) break;
						"slideshow" === u && this.trigger("nyt:slideshow-right", t), a && !o ? this.trigger("nyt:mediaviewer-right") : i || o || this.trigger("nyt:ribbon-right");
						break;
					case this.KEYS.ESC:
						this.a11yEnabled ? this.trigger("nyt:page-key-esc-a11y", t) : this.trigger("nyt:page-key-esc", t);
						break;
					case this.KEYS.TAB:
						this.trigger("nyt:page-key-tab", t);
						break;
					case this.KEYS.ENTER:
						this.trigger("nyt:page-key-enter", t);
						break;
					case this.KEYS.PAGE_UP:
					case this.KEYS.PAGE_DOWN:
						if (o) break;
					case this.KEYS.SPACE:
						r.is("body") && !this.$body.attr("contenteditable") && (t.preventDefault(), this.adjustScrollDepth(n, t.shiftKey))
				}
			},
			handleHashChange: function() {
				this.trigger("nyt:page-hashchange", this.getUrlHash())
			},
			handleSkipTo: function(e) {
				this.trigger("nyt:page-skipto", e), e.target.blur(), t.defer(this.handleContentFocus)
			},
			handleContentFocus: function() {
				var e = document.getElementById(this.getUrlHash());
				e && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1), e.focus())
			},
			handleOnFocus: function() {
				this.currentlyHasFocus = !0, this.trigger("nyt:on-focus")
			},
			handleBlur: function() {
				this.currentlyHasFocus = !1, this.trigger("nyt:blur")
			},
			handleUserActivity: function() {
				this.currentlyHasFocus = !0, this.trigger("nyt:user-activity")
			},
			adjustScrollDepth: function(t, n) {
				var r, i = this,
					o = this.getViewport(),
					a = this.$masthead.outerHeight() || 0,
					s = 1,
					u = 0,
					c = e("#ribbon");
				this.isScrolling !== !0 && ((t === this.KEYS.PAGE_UP || t === this.KEYS.SPACE && n) && (s = -1), this.isComponentVisible(c) && (u = c.outerHeight()), r = o.top + s * (o.height - a - u - 40), 0 > r && (r = 0), this.isScrolling = !0, e("html, body").animate({
					scrollTop: r
				}, this.scrollAnimateTime, function() {
					i.isScrolling = !1
				})), this.scrollAnimateTime = 0, this.resetScrollAnimateTime()
			},
			resetScrollAnimateTime: t.debounce(function() {
				this.scrollAnimateTime = 200
			}, 300),
			isDomReady: function() {
				return this.isReady
			},
			setViewport: function() {
				var e = this.$el.width(),
					t = this.$el.height(),
					n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
					r = t + n;
				this.cachedViewport = {
					width: e,
					height: t,
					top: n,
					bottom: r
				}
			},
			getApplicationName: function() {
				return e("#applicationName").attr("content")
			},
			getViewport: function() {
				return "undefined" == typeof this.cachedViewport.width && this.setViewport(), this.cachedViewport
			},
			getCurrentBreakpoint: function() {
				return window.magnum.getViewportInteger()
			},
			getDevice: function() {
				return window.magnum.device
			},
			isDesktop: function() {
				return "desktop" === this.getDevice()
			},
			isMobile: function() {
				return "mobile" === this.getDevice()
			},
			initCanonical: function() {
				this.canonical = this.$html.find("head link[rel=canonical]").attr("href")
			},
			initMetaTags: function() {
				var t = this;
				e("meta").each(function() {
					var n = e(this),
						r = n.attr("name") || n.attr("property"),
						i = n.attr("content") || n.attr("value");
					r && t.setMeta(r, i, !1)
				})
			},
			getMeta: function(e) {
				return this.metaTagStore[e]
			},
			setMeta: function(e, t, n) {
				this.metaTagStore[e] && n === !1 ? "string" == typeof this.metaTagStore[e] ? (this.metaTagStore[e] = [this.metaTagStore[e]], this.metaTagStore[e].push(t)) : this.metaTagStore[e] && this.metaTagStore[e].push(t) : this.metaTagStore[e] = t
			},
			initUrlParams: function(e) {
				var t, n, r, i, o = {};
				if (!e || 0 === e.length) return !1;
				for (i = e.substring(1).split("&"), t = 0, r = i.length; r > t; t += 1) n = i[t].split("="), n[1] && n[1].indexOf(",") >= 0 ? o[n[0]] = n[1].split(",") : o[n[0]] = n[1] || "";
				this.urlParamStore = o
			},
			getUrlParam: function(e) {
				return this.urlParamStore[e]
			},
			getUrlHash: function() {
				var e = window.location.hash || "";
				return e.replace("#", "")
			},
			setUrlHash: function(e) {
				("string" == typeof e || "number" == typeof e) && (window.location.hash = e)
			},
			initComponentToggle: function() {
				var t, n, r, i = "HIDE_",
					o = e("#display_overrides")[0];
				if (o) {
					try {
						r = JSON.parse(o.innerHTML)
					} catch (a) {
						return
					}
					for (t = 0; t < r.length; t += 1) n = r[t], n = n.replace(i, "").toLowerCase(), this.disabledComponents.push(n)
				}
			},
			isDisabled: function(e) {
				return t.indexOf(this.disabledComponents, e) > -1
			},
			flag: function(e) {
				return t.indexOf(window.magnum.getFlags(), e) > -1
			},
			initEdition: function() {
				var e = r.readCookie("NYT-Edition") || "edition|US";
				e = e.match(/\w+$/)[0].toLowerCase(), "us" !== e && "global" !== e && "spanish" !== e && (r.deleteCookie("NYT-Edition"), e = "us"), window.location.host.indexOf("international") > -1 && (e = "global", this.setEdition(e)), this.edition = e, window.magnum.addEditionClass(e)
			},
			setEdition: function(e) {
				var t = "NYT-Edition";
				"us" === e ? (r.writeCookie(t, "edition|US"), this.edition = e) : "global" === e ? (r.writeCookie(t, "edition|GLOBAL"), this.edition = e) : "spanish" === e && (r.writeCookie(t, "edition|SPANISH"), this.edition = e)
			},
			getEdition: function() {
				return this.edition
			},
			isDomesticEdition: function() {
				return "us" === this.edition
			},
			isInternationalEdition: function() {
				return "global" === this.edition
			},
			hasAdBlock: function() {
				return this.adBlockDetectionPromise.promise()
			},
			isComponentVisible: function(e) {
				var t;
				return !e || e && 0 === e.length || !e.is(":visible") ? !1 : (t = e.get(0).getBoundingClientRect(), t.top + e.height() >= 0 && t.left + e.width() >= 0 && t.bottom - e.height() <= this.$el.height() && t.right - e.width() <= this.$el.width())
			},
			getCanonical: function() {
				return this.canonical
			},
			isInteractive: function() {
				return e(".page-interactive").length > 0
			},
			hasEmbeddedInteractive: function() {
				return e(".interactive-embedded").length > 0
			},
			isReferrerArticle: function(e) {
				var t = /nytimes\.com\/(aponline|reuters)?\/?[0-9]{4}\/[0-9]{2}\/[0-9]{2}/,
					n = e || this.pageReferrer;
				return t.test(n)
			},
			isReferrerHomepage: function(e) {
				var t = /nytimes\.com\/(\?.*)?$/,
					n = e || this.pageReferrer;
				return t.test(n)
			},
			isReferrerSlideshow: function(e) {
				var t = /nytimes\.com\/slideshow\/?[0-9]{4}\/[0-9]{2}\/[0-9]{2}/,
					n = e || this.pageReferrer;
				return t.test(n)
			},
			isReferrerInteractive: function(e) {
				var t = /nytimes\.com\/interactive\/?[0-9]{4}\/[0-9]{2}\/[0-9]{2}/,
					n = e || this.pageReferrer;
				return t.test(n)
			},
			isReferrerNytimes: function(e) {
				var t, n, r, i = e || this.pageReferrer;
				return t = i.split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/), n = t[4], r = /nytimes\.com/, r.test(n)
			},
			toggleA11y: function(e) {
				this.a11yEnabled = "boolean" == typeof e ? e : !1, this.trigger("nyt:a11y-" + (this.a11yEnabled ? "en" : "dis") + "abled")
			},
			trackingAddToEventQueue: function(e) {
				this.trackingQueueEmptied || this.trackingEventQueue.push(e)
			},
			trackingFireEventQueue: function() {
				var e, t, n;
				for (e = 0, t = this.trackingEventQueue.length; t > e; ++e) n = this.trackingEventQueue[e], this.trackingTriggerEvent(n.action, n.data, n.type);
				this.trackingQueueEmptied = !0
			},
			trackingTriggerEvent: function(e, t, n) {
				if (window.TAGX && window.TAGX.EventProxy && window.TAGX.EventProxy.trigger) {
					try {
						window.TAGX.EventProxy.trigger(e, t, n)
					} catch (r) {}
					return !0
				}
				return !1
			},
			addRoute: function(t, n) {
				this.router.route(t, n, e.noop)
			},
			checkRoute: t.once(function() {
				n.History.started && n.history.loadUrl()
			}),
			navigateRoute: function(e, t) {
				this.router.navigate(e, t || {})
			},
			clearRoute: function() {
				var t = e(document).scrollTop();
				this.router.navigate("", {
					trigger: !1,
					replace: !0
				}), window.scrollTo(0, t)
			}
		});
		return new i
	}), define("foundation/base-mixin", ["jquery/nyt", "underscore/nyt", "foundation/views/page-manager"], function(e, t, n) {
		"use strict";
		var r = {
			pageManager: n,
			dateHelper: {
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthsShort: ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
				getDayName: function(e) {
					return this.days[e]
				},
				getMonthName: function(e) {
					return this.months[e]
				},
				getMonthShortName: function(e) {
					return this.monthsShort[e]
				}
			},
			flag: function(e) {
				return n.flag(e)
			},
			broadcast: function() {
				n.trigger.apply(n, arguments)
			},
			local: function(e) {
				var t = Array.prototype.slice.call(arguments, 0);
				t.shift(), e.trigger.apply(e, t)
			},
			subscribe: function() {
				this.subscribeHelper("listenTo", arguments)
			},
			subscribeOnce: function() {
				this.subscribeHelper("listenToOnce", arguments)
			},
			stopSubscribing: function() {
				this.subscribeHelper("stopListening", arguments)
			},
			subscribeHelper: function(e, r) {
				t.isString(r[0]) ? this[e](n, r[0], r[1]) : this[e](r[0], r[1], r[2])
			},
			createAnchor: function(e) {
				var t = document.createElement("a");
				return t.href = e, t
			},
			isUserVariant: function(e) {
				return window.NYTABTEST.engine.isUserVariant(e)
			},
			isUserControl: function(e) {
				return window.NYTABTEST.engine.isUserControl(e)
			},
			isUserInAnyVariant: function(e) {
				return window.NYTABTEST.engine.isUserInAnyVariant(e)
			},
			isExperiment: function(e) {
				return window.NYTEXPERIMENTS.engine.isExperiment(e)
			},
			loadGoogleAnalytics: function() {
				var t = new e.Deferred;
				return window.NYTABTEST.engine.isUserThrottle() && require(["foundation/lib/ga/ga-nyt5"], function(e) {
					t.resolve(e)
				}), t.promise()
			}
		};
		return r
	}), define("foundation/helpers/utils", ["foundation/views/page-manager", "foundation/hosts", "foundation/browser"], function(e, t, n) {
		"use strict";
		var r = {
			appendQueryParams: function(e, t) {
				var n, r, i, o, a = [],
					s = document.createElement("a");
				t = t || {}, s.href = e, i = s.search;
				for (n in t) o = encodeURIComponent(n), o += "" !== t[n] ? "=" : "", a.push(o + encodeURIComponent(t[n])), -1 !== i.indexOf(o) && (i = i.replace(new RegExp("&?" + o + "[^&]*"), ""));
				return i = 1 === i.length && 0 === i.indexOf("?") ? "" : i, r = i.length > 0 && 0 === i.indexOf("?") ? "&" : "?", e = [":" !== s.protocol ? s.protocol + "//" : "http://", "" !== s.hostname ? s.hostname : "", "/", s.pathname.replace(/^\//, ""), i, r, a.join("&"), s.hash].join("")
			},
			getHostBasedOnEdition: function() {
				return e.isInternationalEdition() && n.getWindow().location.host.indexOf("international") >= 0 ? t.international : t.www
			}
		};
		return r
	}), define("foundation/tracking/tracking-mixin", ["jquery/nyt", "underscore/nyt", "foundation/helpers/utils", "foundation/views/page-manager", "foundation/hosts", "foundation/cookies"], function(e, t, n, r, i, o) {
		"use strict";
		var a = {
			trackingBaseData: {},
			trackingCombineData: function(e) {
				e = e || {};
				try {
					return t.extend({}, this.trackingBaseData, e, {
						pgtype: this.pageManager.getMeta("PT")
					})
				} catch (n) {}
			},
			trackingTrigger: function(e, t) {
				t = this.trackingCombineData(t), this.trackingTriggerRaw(e, t, "interaction")
			},
			trackingTriggerImpression: function(e, t) {
				t = this.trackingCombineData(t), this.trackingTriggerRaw(e, t, "impression")
			},
			trackingTriggerRaw: function(e, t, n) {
				var i = r.trackingTriggerEvent(e, t, n);
				i || r.trackingAddToEventQueue({
					action: e,
					data: t,
					type: n
				})
			},
			trackingAppendParams: function(e, t) {
				var r;
				return r = n.appendQueryParams(e, this.trackingCombineData(t))
			},
			writeTrackingParamsCookie: function(e) {
				var t = new Date,
					n = "qry" + Math.ceil(1e3 * Math.random());
				return t.setMinutes(t.getMinutes() + 2), o.writeCookie(n, e, {
					expires: t
				}), null === o.readCookie(n) && (e = "alxcookie=0&" + e), e
			},
			trackingComscorePVC: function(e) {
				(new Image).src = i.comscorePvc + "/svc/comscore/pvc.html", e && this.trackingTriggerRaw("comscore-pageview-candidate", e, "other")
			}
		};
		return a
	}), define("foundation/models/base-model", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/base-mixin"], function(e, t, n, r) {
		"use strict";
		var i = n.Model.extend(t.extend({}, r));
		return i
	}), define("foundation/helpers/model-mixin", [], function() {
		"use strict";
		var e = {
			hasSynced: !1,
			ready: function(e) {
				e && this.hasSynced ? e() : e && this.subscribeOnce(this.eventName, e)
			},
			isReady: function() {
				return this.hasSynced
			}
		};
		return e
	}), define("foundation/models/user-data", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model", "foundation/helpers/model-mixin", "foundation/cookies", "foundation/hosts"], function(e, t, n, r, i, o, a) {
		"use strict";
		var s = r.extend(i).extend({
			defaults: {
				id: "",
				name: "",
				profileImage: "",
				subscription: [],
				demographics: {}
			},
			eventName: "nyt:user-ready",
			initialize: function() {
				var e = this;
				this.subscribeOnce(this, "sync error", this.loadProfileImage), this.subscribeOnce(this, "sync error", function() {
					e.hasSynced = !0, e.broadcast(this.eventName)
				}), this.loadData()
			},
			loadData: function() {
				var t = e("#user-info-data").text();
				t ? (this.set(e.parseJSON(t).data), this.trigger("sync")) : this.fetch()
			},
			sync: function(e, t, r) {
				return r.url = a.userInfoHost + "/svc/web-products/userinfo-v3.jsonp", r.cache = !1, r.dataType = "jsonp", r.jsonpCallback = "userInfoCallback", r.data = {
					cookie: o.readCookie("NYT-S") || ""
				}, n.sync(e, t, r)
			},
			parse: function(e) {
				return e.data
			},
			hasEntitlement: function(e) {
				return t.indexOf(this.get("subscription"), e) > -1
			},
			isLoggedIn: function() {
				var e = this.get("id");
				return e.length > 0 && "0" !== e
			},
			getUserId: function() {
				return this.get("id")
			},
			getUserName: function() {
				return this.get("name")
			},
			getTruncatedUserName: function(e) {
				var n = this.get("name");
				return t.isNumber(e) && n.length > e && (n = n.substring(0, e - 1) + "..."), n
			},
			getImageUrl: function() {
				return this.get("profileImage")
			},
			isWebSubscriber: function() {
				return this.hasEntitlement("MM")
			},
			isMobileSubscriber: function() {
				return this.hasEntitlement("MTD") && this.hasEntitlement("MSD")
			},
			isTabletSubscriber: function() {
				return this.hasEntitlement("MTD")
			},
			isSmartphoneSubscriber: function() {
				return this.hasEntitlement("MSD")
			},
			isCrosswordsSubscriber: function() {
				return this.hasEntitlement("XWD")
			},
			isHomeDeliverySubscriber: function() {
				return this.hasEntitlement("HD")
			},
			isCookingSubscriber: function() {
				return this.hasEntitlement("COO")
			},
			isOpinionSubscriber: function() {
				return this.hasEntitlement("OPI")
			},
			isPremierSubscriber: function() {
				return this.hasEntitlement("TPR")
			},
			getImageSource: function(e) {
				var t = a.profileImageHost + "/" + e.substring(4, 0) + "/" + e.substring(4) + "/cropped-" + e + ".jpg";
				return t
			},
			loadProfileImage: function() {
				var e, t, n, r;
				this.isLoggedIn() && (e = this, t = new Image, n = e.getUserId(), r = e.getImageSource(n), n.length > 0 && (t.onload = function() {
					e.set("profileImage", r), e.local(e, "nyt:user-image-loaded")
				}, t.src = r))
			},
			getPostalCode: function() {
				return this.get("demographics").postal_code
			},
			getIncomeRange: function() {
				return this.get("demographics").income_range
			},
			getJobTitle: function() {
				return this.get("demographics").job_title
			},
			getJobIndustry: function() {
				return this.get("demographics").job_industry
			},
			getGender: function() {
				return this.get("demographics").gender
			},
			getCountryCode: function() {
				return this.get("demographics").country_code
			},
			getWat: function() {
				return this.get("demographics").wat
			},
			getCompanySize: function() {
				return this.get("demographics").company_size
			},
			getEmailSubscriptions: function() {
				return this.get("demographics").email_subscriptions
			},
			getBundleSubscriptions: function() {
				return this.get("demographics").bundle_subscriptions
			}
		});
		return new s
	}), define("foundation/models/page-storage", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model", "foundation/helpers/model-mixin", "foundation/hosts"], function(e, t, n, r, i, o) {
		"use strict";
		var a = r.extend(i).extend({
			storageKey: "nyt:site-storage",
			serviceUrl: "../../../../../www.nytimes.com/svc/web/localstorage.html",
			eventName: "nyt:storage-ready",
			initialize: function() {
				t.bindAll(this, "handleFrameLoad", "handleMessage"), this.isXDomain() ? this.setupXDomain() : this.syncData(window.localStorage.getItem(this.storageKey) || "{}")
			},
			syncData: function(e) {
				try {
					this.clear().set(JSON.parse(e))
				} catch (t) {}
				this.hasSynced = !0, this.broadcast(this.eventName), this.listenTo(this, "change", this.handleDataChange)
			},
			handleDataChange: function() {
				var e = JSON.stringify(this.toJSON());
				this.isXDomain() ? this.sendMessage(e) : window.localStorage.setItem(this.storageKey, e)
			},
			isXDomain: function() {
				return window.location.host.indexOf("www") < 0
			},
			setupXDomain: function() {
				this.iframe = document.createElement("iframe"), this.iframe.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;", document.body.appendChild(this.iframe), window.addEventListener ? (this.iframe.addEventListener("load", this.handleFrameLoad, !1), window.addEventListener("message", this.handleMessage, !1)) : this.iframe.attachEvent && (this.iframe.attachEvent("onload", this.handleFrameLoad, !1), window.attachEvent("onmessage", this.handleMessage)), this.iframe.src = this.serviceUrl
			},
			sendMessage: function(e) {
				// var t = {
				// 	key: this.storageKey
				// };
				// e && (t.value = e), this.iframe.contentWindow.postMessage(JSON.stringify(t), window.location.protocol + o.www)
			},
			handleFrameLoad: function() {
				this.sendMessage()
			},
			handleMessage: function(e) {
				var t = "",
					n = e.origin || "";
				e && "string" == typeof e.data && (t = e.data), /\.nytimes\.com$/.test(n) && 0 === t.indexOf("localstorage:") && this.syncData(t.replace("localstorage:", ""))
			}
		});
		return window.Modernizr.localstorage && window.Modernizr.postmessage || (a = n.Model.extend({
			ready: e.noop
		})), new a
	}), define("foundation/views/base-view", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "hammer/nyt", "foundation/views/page-manager", "foundation/base-mixin", "foundation/tracking/tracking-mixin", "foundation/models/user-data", "foundation/models/page-storage"], function(e, t, n, r, i, o, a, s, u) {
		"use strict";
		var c = n.View.prototype.delegateEvents,
			l = n.View.prototype.undelegateEvents,
			f = n.View.extend(t.extend({}, o, a, {
				magnum: window.magnum,
				hammer: r,
				$window: i.$window,
				$document: i.$document,
				$html: i.$html,
				$body: i.$body,
				$shell: i.$shell,
				hammerEvents: ["hold", "tap", "doubletap", "drag", "dragstart", "dragend", "dragup", "dragdown", "dragleft", "dragright", "swipe", "swipeup", "swipedown", "swipeleft", "swiperight", "transform", "transformstart", "transformend", "rotate", "pinch", "pinchin", "pinchout", "touch", "release"],
				truncateText: function(e, t, n) {
					var r, i, o = [],
						a = [],
						s = n ? '<span class="ellipsis">â€¦</span>' : "...",
						u = e.html().replace(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\/?>/gi, function(e) {
							return " " + e.replace(/ /g, "%%%") + " "
						});
					if (u = u.replace(/ {2}/g, " ").split(" "), !(0 > t)) {
						for (; e.height() > t && (0 === u[u.length - 1].indexOf("<img") ? u.pop() : 0 === u[u.length - 1].indexOf("<") ? a.push(u.pop()) : o.push(u.pop()), r = u.join(" "), n || (r = r.replace(/[\,:,;]$/, "")), r = r + s + a.join(""), e.html(r.replace(/\%\%\%/g, " ")), 0 !== u.length););
						n && o.length && (o.reverse(), i = o.join(" "), e.after('<span class="visually-hidden">' + i + "</span>"), e.find(".ellipsis").attr("title", i))
					}
				},
				prettyDate: function(e, t, n, r) {
					var i = r || (new Date).getTime(),
						o = "number" == typeof e ? new Date(e) : new Date((e || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
						a = (i - o.getTime()) / 1e3,
						s = o.getDate(),
						u = Math.floor(a / 86400),
						c = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						l = c[o.getMonth()],
						f = o.getFullYear(),
						d = t ? "m" : " minutes",
						h = t ? "m" : " minute",
						p = t ? "h" : " hours",
						g = t ? "h" : " hour",
						m = t ? "d" : " day",
						v = t ? "d" : " days";
					if (isNaN(u) || 0 > u) return !1;
					if ("function" == typeof n && n(a)) return !1;
					if (0 === u) {
						if (60 > a) return "Just now";
						if (120 > a) return "1" + h + " ago";
						if (3600 > a) return Math.floor(a / 60) + d + " ago";
						if (7200 > a) return "1" + g + " ago";
						if (86400 > a) return Math.floor(a / 3600) + p + " ago"
					} else {
						if (1 === u) return u + m + " ago";
						if (3 > u) return u + v + " ago";
						if (u >= 3) return l + " " + s + ", " + f
					}
					return !1
				},
				isElementInViewport: function(t) {
					var n;
					return !t || t && 0 === t.length ? !1 : (n = t.get(0).getBoundingClientRect(), n.top + t.height() >= 0 && n.left + t.width() >= 0 && n.bottom - t.height() <= e(window).height() && n.right - t.width() <= e(window).width())
				},
				durationFromMilliseconds: function(e) {
					var t, n, r;
					return "number" != typeof e || isNaN(e) ? "0:00" : (t = e / 1e3, n = Math.floor(t / 60), r = Math.floor(t % 60), 10 > r && (r = "0" + r), n + ":" + r)
				},
				toggleNytEvents: function(e) {
					var t;
					if (this.nytEvents)
						for (t in this.nytEvents) this[e](i, t, this[this.nytEvents[t]])
				},
				proxyHammer: function(e) {
					var n, i, o, a = t.extend({}, e),
						s = this,
						u = this.hammerEvents,
						c = this.hammerSettings || {};
					return t.each(a, function(e, l) {
						n = l.match(/^(\S+)\s*(.*)$/), i = n[1], o = n[2], t.isFunction(e) || (e = s[a[l]]), e = t.bind(e, s), t.indexOf(u, i) > -1 && (delete a[l], "" === o ? s.$el[0] && r(s.$el[0], c).on(i, e) : s.$(o).each(function() {
							r(this, c).on(i, e)
						}))
					}), a
				},
				hasDomDelegated: !1,
				hasLocalStorageDelegated: !1,
				hasUserDelegated: !1,
				delegateEvents: function() {
					var e = t.result(this, "events"),
						n = Modernizr.touch ? this.proxyHammer(e) : e;
					return c.call(this, n), this.toggleNytEvents("listenTo"), this.handleDomReady && !this.hasDomDelegated && (this.hasDomDelegated = !0, i.isDomReady() ? (t.bindAll(this, "handleDomReady"), t.defer(this.handleDomReady)) : this.listenToOnce(i, "nyt:page-ready", this.handleDomReady)), this.handleLocalStorageReady && !this.hasLocalStorageDelegated && (this.hasLocalStorageDelegated = !0, "function" == typeof u.isReady && (u.isReady() ? (t.bindAll(this, "handleLocalStorageReady"), t.defer(this.handleLocalStorageReady)) : this.listenToOnce(i, "nyt:storage-ready", this.handleLocalStorageReady))), this.handleUserReady && !this.hasUserDelegated && (this.hasUserDelegated = !0, s.isReady() ? (t.bindAll(this, "handleUserReady"), t.defer(this.handleUserReady)) : this.listenToOnce(i, "nyt:user-ready", this.handleUserReady)), this
				},
				undelegateEvents: function() {
					return l.apply(this, arguments), this.toggleNytEvents("stopListening"), this
				}
			}));
		return f.registerView = function(e) {
			var t = function() {
				return t
			};
			return t.extend = t, e && i.isDisabled(e) ? t : f
		}, f
	}), define("foundation/collections/base-collection", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/views/page-manager", "foundation/base-mixin"], function(e, t, n, r, i) {
		"use strict";
		var o = n.Collection.extend(t.extend({}, i));
		return o
	}), define("foundation/views/sitewide-view", ["foundation/views/base-view"], function(e) {
		"use strict";
		var t = e.extend({
			handleDomReady: function() {
				var e = this;
				this.timer = setInterval(function() {
					window.NYTD && (window.NYTD.EventTracker && e.experimentTracking(), window.clearInterval(e.timer))
				}, 500)
			},
			experimentTracking: function() {
				var e, t = window.NYTEXPERIMENTS.config,
					n = new window.NYTD.EventTracker,
					r = {
						subject: "ab-alloc",
						skipAugment: !0
					};
				for (e in t) r.test = e, r.variant = t[e].value, t[e].record === !0 ? (r.instant = 1, n.track(r)) : this.subscribeOnce("nyt:experiments-tracking", function(e) {
					r.test = e, r.variant = t[e].value, r.instant = 0, n.track(r)
				})
			}
		});
		return t
	}), define("foundation/instances/sitewide-view", ["foundation/views/sitewide-view"], function(e) {
		"use strict";
		new e
	}), define("foundation/models/group-name", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model", "foundation/helpers/model-mixin", "foundation/hosts", "foundation/models/user-data"], function(e, t, n, r, i, o, a) {
		"use strict";
		var s = r.extend(i).extend({
			defaults: {
				groupAccountName: ""
			},
			eventName: "nyt:regiGroup-ready",
			initialize: function() {
				this.subscribe(this, "sync", this.handleSyncComplete), a.isReady() ? this.loadData() : this.subscribeOnce("nyt:user-ready", this.loadData)
			},
			handleSyncComplete: function() {
				this.hasSynced = !0, this.broadcast(this.eventName)
			},
			loadData: function() {
				this.flag("myAccountGroupName") && a.isWebSubscriber() && "7" === a.getUserId().substr(-1) ? this.fetch() : this.handleSyncComplete()
			},
			sync: function(e, t, r) {
				return r.url = o.myaccountHost + "/svc/group-accounts/v1/group-name?" + a.getUserId(), r.cache = !0, r.xhrFields = {
					withCredentials: !0
				}, n.sync(e, t, r)
			},
			parse: function(e) {
				return e.data
			},
			isGroupAccountMember: function() {
				return this.get("groupAccountMember") || !1
			},
			getGroupName: function() {
				return this.get("groupAccountName")
			}
		});
		return new s
	}), define("foundation/models/token", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model", "foundation/helpers/model-mixin", "foundation/cookies", "foundation/hosts"], function(e, t, n, r, i, o, a) {
		"use strict";
		var s = r.extend({
			defaults: {
				token: ""
			},
			TOKEN_EXPIRATION: 6e4,
			initialize: function() {
				this.subscribe(this, "sync", this.handleSyncComplete)
			},
			handleSyncComplete: function() {
				this.updateTokenExpiration(), this.broadcast("nyt:myaccount-token", this)
			},
			loadData: function() {
				this.set("token", ""), this.tokenExpiration = null, this.fetch()
			},
			sync: function(e, t, r) {
				return r.url = a.tokenHost + "/svc/profile/token.jsonp", r.cache = !1, r.dataType = "jsonp", r.jsonpCallback = "tokenCallback", n.sync(e, t, r)
			},
			parse: function(e) {
				return e.data
			},
			updateTokenExpiration: function() {
				this.tokenExpiration = (new Date).getTime() + this.TOKEN_EXPIRATION
			},
			isTokenValid: function() {
				return this.tokenExpiration && this.tokenExpiration > (new Date).getTime()
			},
			getTokenExpiration: function() {
				return this.tokenExpiration
			},
			getToken: function() {
				return this.isTokenValid() ? this.get("token") : null
			}
		});
		return new s
	}), define("foundation/views/user-data", ["underscore/nyt", "jquery/nyt", "foundation/models/user-data", "foundation/views/base-view"], function(e, t, n, r) {
		"use strict";
		var i = r.extend({
			handleUserReady: function() {
				this.addUserCapabilities()
			},
			addUserCapabilities: function() {
				n.isLoggedIn() && this.$html.addClass("user-logged-in"), n.isPremierSubscriber() && this.$html.addClass("user-times-premier"), n.isOpinionSubscriber() && !n.isWebSubscriber() && this.$html.addClass("user-opinion"), n.isCookingSubscriber() && !n.isWebSubscriber() && this.$html.addClass("user-cooking"), n.isCrosswordsSubscriber() && this.$html.addClass("user-crosswords"), n.isWebSubscriber() && this.$html.addClass("user-web")
			}
		});
		return new i
	}), define("foundation/views/websockets-transport", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/lib/sockjs", "foundation/views/base-view", "foundation/hosts"], function(e, t, n, r, i, o) {
		"use strict";
		var a = i.extend({
			url: "",
			apps: {},
			states: {
				notConnected: 0,
				connecting: 1,
				connected: 2,
				stopConnecting: 3
			},
			sockjsOptions: {
				protocols_whitelist: ["websocket"]
			},
			reconnectAttempt: 0,
			maxReconnects: 5,
			initialize: function() {
				this.infoUrl = o.fabrikEndpointsHost + "/endpoints.json", this.state = this.states.notConnected, this.subscribe(this, "nyt:fabrik-client-connected", this.login)
			},
			registerClient: function(e) {
				var t, n, r = this.apps;
				if (e.name && e.fabrikApp && e.handleMessage && e.collection) {
					t = e.name, r[t] = {};
					for (n in e) e.hasOwnProperty(n) && (r[t][n] = e[n]);
					r[t].connected = !1, this.connectOrLogin(r[t])
				}
			},
			connectOrLogin: function(e) {
				switch (this.state) {
					case this.states.notConnected:
						this.state = this.states.connecting, this.prepareToConnect();
						break;
					case this.states.connected:
						this.login(this);
						break;
					case this.states.stopConnecting:
						e.handleFailover && e.handleFailover(e.collection);
						break;
					default:
						return !1
				}
			},
			prepareToConnect: function() {
				this.pageManager.isDomReady() ? this.getWebSocketsUrl() : this.subscribe(this.pageManager, "nyt:page-ready", this.getWebSocketsUrl)
			},
			getWebSocketsUrl: function() {
				var t = this;
				this.state !== this.states.connecting && (this.state = this.states.connecting), this.flag("fabrikDirectConnect") ? (this.url = o.fabrikConnectHost, this.initWebSockets()) : e.ajax({
					dataType: "json",
					url: this.infoUrl,
					success: function(e) {
						e.wss_url && (t.url = e.wss_url, t.initWebSockets())
					},
					error: function() {
						t.initiateFailOver(t)
					}
				})
			},
			initWebSockets: function() {
				var e = this;
				if (this.url && this.state !== this.states.connected && this.state !== this.states.stopConnecting) {
					if (this.webSocket = null, Modernizr.websockets && (this.webSocket = new WebSocket(this.url, ["fabrik"])), null === this.webSocket) return void this.initiateFailOver(e);
					this.webSocket.onopen = function() {
						e.state = e.states.connected, e.local(e, "nyt:fabrik-client-connected", e)
					}, this.webSocket.onmessage = function(t) {
						e.reconnectAttempt = 0, e.onMessage(t, e)
					}, this.webSocket.onclose = function(t) {
						e.updateAppStatus(!1, e), e.reconnect(t, e)
					}, this.webSocket.onerror = function(t) {
						e.updateAppStatus(!1, e), e.onError(t, e)
					}
				}
			},
			publish: function(e) {
				this.webSocket && this.webSocket.readyState === WebSocket.OPEN && this.webSocket.send(JSON.stringify(e))
			},
			login: function(e) {
				var t, n, r = e.apps;
				for (t in r) r.hasOwnProperty(t) && (n = r[t], n.connected || (n.connected = !0, e.publish({
					action: "login",
					client_app: n.fabrikApp,
					cookies: n.cookies
				})))
			},
			onMessage: function(e, t) {
				var n, r, i, o = t.apps,
					a = JSON.parse(e.data);
				if (a && "start" !== a.type && "finish" !== a.type) {
					i = a.product + "." + a.project;
					for (n in o) o.hasOwnProperty(n) && (r = o[n], r.fabrikApp === i && r.handleMessage(a, r.collection))
				}
			},
			onError: function(e, t) {
				var n, r = t.apps;
				for (n in r) r.hasOwnProperty(n) && r[n].notifyOnError()
			},
			updateAppStatus: function(e, t) {
				var n, r = t.apps;
				for (n in r) r.hasOwnProperty(n) && (r[n].connected = e)
			},
			reconnect: function(e, t) {
				var n = e.wasClean;
				n ? (t.state = t.states.connecting, t.initWebSockets()) : (t.reconnectAttempt += 1, t.reconnectAttempt > t.maxReconnects ? (t.state = t.states.stopConnecting, t.initiateFailOver(t)) : window.setTimeout(function() {
					t.getWebSocketsUrl()
				}, 3e3))
			},
			initiateFailOver: function(e) {
				var t, n, r = e.apps;
				for (t in r) r.hasOwnProperty(t) && (n = r[t], n.handleFailover(n.collection))
			}
		});
		return new a
	}), define("foundation/lib/auth/userauth", ["jquery/nyt", "foundation/hosts"], function(e, t) {
		"use strict";
		var n, r, i, o, a, s = t.myaccountHost,
			u = t.tokenHost + "/svc/profile/token.jsonp?callback=?",
			c = 5e3,
			l = 6e5,
			f = "X-Nyt-Sartre-Token",
			d = s + "/register",
			h = s + "/auth/login",
			p = "timeout",
			g = "corrupt",
			m = "dead",
			v = function(t) {
				var i = d + "?" + S(),
					o = function() {
						var o = ['<form action="', i, '" method="POST" class="hidden" id="authRegiForm">', '<input name="is_continue" value="1" type="text">', '<input name="email_address" value="', t.email, '" type="text">', '<input name="password1" type="password">', '<input name="password2" type="password">', t.specialOffers ? '<input name="subscribe[]" type="text" value="MM">' : "", '<input name="token" value="', n, '" type="text">', '<input name="expires" value="', r, '">', "</form>"].join("");
						e(document.body).append(o), e("#authRegiForm input[name=password1]").val(t.password), e("#authRegiForm input[name=password2]").val(t.confPassword), e("#authRegiForm").submit()
					},
					a = function() {
						window.location.replace(i)
					};
				b().done(o).fail(a)
			},
			y = function(t) {
				var i = h + "?" + S(),
					o = function() {
						var o = ['<form action="', i, '" method="POST" class="hidden" id="authLoginForm">', '<input name="is_continue" value="1" type="text">', '<input name="userid" value="', t.user, '" type="text">', '<input name="password" type="password">', '<input name="remember" value="', t.remember, '" type="text">', '<input name="token" value="', n, '" type="text">', '<input name="expires" value="', r, '">', "</form>"].join("");
						e(document.body).append(o), e("#authLoginForm input[name=password]").val(t.password), e("#authLoginForm").submit()
					},
					a = function() {
						window.location.replace(i)
					};
				b().done(o).fail(a)
			},
			b = function() {
				if (i) return a.promise();
				if (a = new e.Deferred, T()) return a.resolve(n, f, !0), a.promise();
				if (o) return a.reject(m), a.promise();
				i = !0;
				var t = setTimeout(function() {
					i = !1, x(), a.reject(p)
				}, c);
				return e.getJSON(u, null, function(e) {
					i = !1, e && e.data && e.data.token ? (n = e.data.token, clearTimeout(t), E(), a.resolve(n, f, !1)) : (x(), clearTimeout(t), a.reject(g))
				}), a.promise()
			},
			w = function(e, t, n) {
				var r = "/oauth/" + t + "-link";
				return s + r + "?type=login&URI=" + e + (n ? "&view=popup" : "") + "&flow=HPLI"
			},
			x = function() {
				o = !0, setTimeout(_, 3e5)
			},
			_ = function() {
				o = !1
			},
			E = function() {
				r = (new Date).getTime() + l
			},
			T = function() {
				return r > (new Date).getTime()
			},
			S = function() {
				var t, n = window.location,
					r = {
						URI: n.protocol + "//" + n.hostname + "/" + n.pathname.replace(/^\//, "")
					};
				return n.search.length > 1 && (t = n.search.substr(1), t = t.replace(/(\?|&)?gwh=([^&]+)/g, ""), t = t.replace(/(\?|&)?gwt=([^&]+)/g, ""), t = t.replace(/%/g, "Q"), r.OQ = t), e.param(r)
			};
		return {
			register: v,
			login: y,
			getToken: b,
			getSocialLinkUrl: w
		}
	}), define("foundation/lib/polyfills/placeholder", ["jquery/nyt"], function(e) {
		if (window.Modernizr.input.placeholder) return e.noop;
		var t = function(t) {
			var n = "[placeholder]",
				r = t ? t.find(n) : e(n);
			r.each(function() {
				var t, n = e(this);
				if (n.is("input[type=text]") || n.is("input[type=password]") || n.is("input[type=email]")) t = e('<input type="text" />');
				else {
					if (!n.is("textarea")) return;
					t = e("<textarea></textarea>")
				}
				return n.is(".withPlaceholder") ? (n.hide(), n.siblings(".faux").show().val(n.attr("placeholder")), !0) : (t.attr({
					value: n.attr("placeholder"),
					"class": n.attr("class"),
					style: n.attr("style")
				}).addClass("faux"), t.is("textarea") && t.text(n.attr("placeholder")), n.addClass("withPlaceholder").after(t).hide(), t.show().focus(function() {
					t.hide(), n.show().focus()
				}), void n.blur(function() {
					"" === n.val() && (n.hide(), t.show())
				}))
			})
		};
		return t
	}), define("foundation/lib/polyfills/balancetext", ["foundation/views/page-manager", "backbone/nyt", "jquery/nyt"], function(e, t, n) {
		"use strict";

		function r() {
			this.reset()
		}

		function i() {
			f(n("body").find(".balance-text"))
		}
		var o;
		r.prototype.reset = function() {
			this.index = 0, this.width = 0
		};
		var a = function(e, t) {
				var n, r = /\s(?![^<]*>)/g;
				if (!o)
					for (o = []; null !== (n = r.exec(e));) o.push(n.index);
				return -1 !== o.indexOf(t)
			},
			s = function(e) {
				e.removeAttr("style"), e.find('br[data-owner="balance-text"]').replaceWith(" ");
				var t = e.find('span[data-owner="balance-text"]');
				if (t.length > 0) {
					var r = "";
					t.each(function() {
						r += n(this).text(), n(this).remove()
					}), e.html(r)
				}
			},
			u = function(e, t) {
				return 0 === t || t === e.length || a(e, t - 1) && !a(e, t)
			},
			c = function(e, t, n, r, i, o, a) {
				for (var s;;) {
					for (; !u(t, o);) o += i;
					if (e.html(t.substr(0, o)), s = e.width(), 0 > i ? r >= s || 0 >= s || 0 === o : s >= r || s >= n || o === t.length) break;
					o += i
				}
				a.index = o, a.width = s
			},
			l = function(e, t) {
				var n = document.createElement("div");
				n.style.display = "block", n.style.position = "absolute", n.style.bottom = "0", n.style.right = "0", n.style.width = "0px", n.style.height = "0px", n.style.margin = "0", n.style.padding = "0", n.style.visibility = "hidden", n.style.overflow = "hidden";
				var r = document.createElement("span");
				r.style.fontSize = "2000px", r.innerHTML = "&nbsp;", n.appendChild(r), e.append(n);
				var i = r.getBoundingClientRect();
				n.parentNode.removeChild(n);
				var o = i.height / i.width;
				return t / o
			},
			f = function(e) {
				e.each(function() {
					var e = n(this),
						t = 5e3;
					s(e);
					var i = "";
					e.css("line-height", "normal");
					var a = e.width(),
						u = e.height(),
						f = e.css("white-space"),
						d = e.css("float"),
						h = e.css("display"),
						p = e.css("position");
					e.css({
						"white-space": "nowrap",
						"float": "none",
						display: "inline",
						position: "static"
					});
					var g = e.width(),
						m = e.height(),
						v = "pre-wrap" === f ? 0 : l(e, m);
					if (a > 0 && g > a && t > g) {
						for (var y = e.html(), b = "", w = "", x = Math.round(u / m), _ = x; _ > 1;) {
							o = null;
							var E = Math.round((g + v) / _ - v),
								T = Math.round((y.length + 1) / _) - 1,
								S = new r;
							c(e, y, a, E, -1, T, S);
							var k = new r;
							T = S.index, c(e, y, a, E, 1, T, k), S.reset(), T = k.index, c(e, y, a, E, -1, T, S);
							var N;
							N = 0 === S.index ? k.index : a < k.width || S.index === k.index ? S.index : Math.abs(E - S.width) < Math.abs(k.width - E) ? S.index : k.index, w = y.substr(0, N), b += w.replace(/\s$/, ""), b += '<br data-owner="balance-text" />', y = y.substr(N), _--, e.html(y), g = e.width()
						}
						e.html(b + y)
					}
					e.css({
						position: p,
						display: h,
						"float": d,
						"white-space": f,
						"line-height": i
					})
				})
			};
		n(document).ready(i), t.Events.listenTo(e, "nyt:page-resize-after", i)
	}), define("foundation/lib/polyfills/requestAnimationFrame", [], function() {
		for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
		window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
			var r = (new Date).getTime(),
				i = Math.max(0, 16 - (r - e)),
				o = window.setTimeout(function() {
					t(r + i)
				}, i);
			return e = r + i, o
		}), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
			clearTimeout(e)
		})
	}), require(["foundation/consolefix", "foundation/framebuster", "foundation/hosts", "jquery/nyt", "underscore/nyt", "backbone/nyt", "hammer/nyt", "foundation/lib/sockjs", "foundation/cookies", "foundation/views/page-manager", "foundation/views/base-view", "foundation/models/base-model", "foundation/collections/base-collection", "foundation/instances/sitewide-view", "foundation/models/user-data", "foundation/models/group-name", "foundation/models/token", "foundation/views/user-data", "foundation/models/page-storage", "foundation/views/websockets-transport", "foundation/lib/auth/userauth", "foundation/lib/polyfills/placeholder", "foundation/lib/polyfills/balancetext", "foundation/lib/polyfills/requestAnimationFrame"]), define("foundation/main_includes", [], function() {}), require.config({
		map: {
			"*": {
				"jquery/nyt": "foundation/lib/jquery/2.1.4",
				"jquery/2.1": "foundation/lib/jquery/2.1.4",
				"jquery/2.0": "foundation/lib/jquery/2.0.3",
				"jquery/1.11": "foundation/lib/jquery/1.11.3",
				"jquery/1.10": "foundation/lib/jquery/1.10.2",
				"jquery/1.9": "foundation/lib/jquery/1.9.1",
				"underscore/nyt": "foundation/lib/underscore/1.8.3",
				"underscore/1.8": "foundation/lib/underscore/1.8.3",
				"underscore/1.6": "foundation/lib/underscore/1.6.0",
				"underscore/1.5": "foundation/lib/underscore/1.5.2",
				"underscore/1.4": "foundation/lib/underscore/1.4.4",
				"backbone/nyt": "foundation/lib/backbone/1.1.2",
				"hammer/nyt": "foundation/lib/hammer/1.0.6",
				"d3/3": "foundation/lib/d3/3.4.11",
				"topojson/1": "foundation/lib/topojson/1.6.15",
				"queue/1": "foundation/lib/queue/1.0.7"
			}
		}
	}), require(["foundation/main_includes"]);