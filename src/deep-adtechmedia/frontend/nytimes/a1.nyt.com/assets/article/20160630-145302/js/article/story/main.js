define("article/story/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.communityPlaceholder = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="community-placeholder" class="community-placeholder marginalia-item nocontent robots-nocontent"></div>';
			return __p
		}, templates.drawerItemDebug = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "<div id='drawer-item-debug'class=\"debug-template " + (null == (__t = name.toLowerCase()) ? "" : __t) + ' marginalia-item nocontent robots-nocontent">\n' + (null == (__t = name) ? "" : __t) + "\n</div>";
			return __p
		}, templates.google300x250Text = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n<ins class="adsbygoogle"\nstyle="display:inline-block;width:300px;height:250px"\ndata-ad-client="nytimes_article_var"\ndata-color-bg="#ffffff"\ndata-font-face="times"\ndata-font-size="small"\ndata-color-border = \'e5e5e5\'\ndata-color-line = \'ffffff\'\ndata-color-link = \'3886ab\'\ndata-color-url = \'3886ab\'\ndata-color-text = \'666666\'\ndata-safe = \'high\'\n></ins>\n<script>\n(adsbygoogle = window.adsbygoogle || []).push({});\n</script>';
			return __p
		}, templates.google728x90Text = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<script async src="http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n<ins class="adsbygoogle"\nstyle="display:inline-block;width:728px;height:90px"\ndata-ad-client="nytimes_article_var"\ndata-color-bg="#ffffff"\ndata-font-face="times"\ndata-font-size="small"\ndata-color-border = \'e5e5e5\'\ndata-color-line = \'ffffff\'\ndata-color-link = \'3886ab\'\ndata-color-url = \'3886ab\'\ndata-color-text = \'666666\'\ndata-safe = \'high\'></ins>\n<script>\n(adsbygoogle = window.adsbygoogle || []).push({});\n</script>';
			return __p
		}, templates.ledeAd = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="lede-ad" class="ad lede-ad marginalia-anchor-ad marginalia-item nocontent robots-nocontent"></div>';
			return __p
		}, templates.ledeAdDebug = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="lede-ad-debug" class="debug-template debug-ad lede-ad marginalia-anchor-ad marginalia-item nocontent robots-nocontent">LEDE AD</div>';
			return __p
		}, templates.marketingModule = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="marketing-ad" class="ad marketing-ad marginalia-anchor-ad marginalia-item nocontent robots-nocontent"></div>';
			return __p
		}, templates.marketingModuleDebug = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="marketing-ad-debug" class="debug-template debug-ad maketing-ad marginalia-anchor-ad marginalia-item nocontent robots-nocontent">MARKETING MODULE</div>';
			return __p
		}, templates.mediumRectangleAd = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "<div id='medium-rectangle-ad-" + (null == (__t = index) ? "" : __t) + '\' class="ad ad-placeholder medium-rectangle-ad marginalia-item nocontent robots-nocontent"></div>';
			return __p
		}, templates.mediumRectangleAdDebug = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "<div id='medium-rectangle-ad-debug'class=\"debug-template debug-ad medium-rectangle-ad marginalia-item nocontent robots-nocontent\">MED REC</div>";
			return __p
		}, templates.realestateSearchSuggestion = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", results.length && (__p += "\n<ul class='real-estate-search-results'>\n", _.each(results, function(e) {
				__p += '\n<li><a data-href="' + (null == (__t = e.id) ? "" : __t) + '">' + (null == (__t = e.display) ? "" : __t) + "</a></li>\n"
			}), __p += "\n</ul>\n"), __p += "";
			return __p
		}, templates.reviewsMapInfowin = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<aside class="review-details">\n<header>\n<h4 class="review-heading">' + (null == (__t = title) ? "" : __t) + '</h4>\n<ul class="review-meta-list">', criticsPick && (__p += '\n<li class="critics-pick"><i class="icon sprite-icon"></i></li>\n'), __p += "", rating && (__p += '\n<li class="' + (null == (__t = ratingClass) ? "" : __t) + '">' + (null == (__t = rating) ? "" : __t) + "</li>\n"), __p += "\n", linkAddr && (__p += '\n<li class="address-info"><a target="_blank" href="https://maps.google.com?saddr=Current+Location&amp;daddr=' + (null == (__t = linkAddr) ? "" : __t) + '" class="' + (null == (__t = attrTitle) ? "" : __t) + '">Get Directions &raquo;</a></li>\n'), __p += "\n</ul>\n</header>\n</aside>";
			return __p
		}, templates.reviewsRestaurantMapInfowin = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<aside class="review-details">\n<header>\n<h4 class="review-heading">' + (null == (__t = title) ? "" : __t) + '</h4>\n<ul class="review-meta-list">', criticsPick && (__p += '\n<li class="critics-pick"><i class="icon sprite-icon"></i></li>\n'), __p += "", rating && (__p += '\n<li class="' + (null == (__t = ratingClass) ? "" : __t) + '">' + (null == (__t = rating) ? "" : __t) + "</li>\n"), __p += "\n", linkAddr && (__p += '\n<li class="address-info"><a target="_blank" href="https://maps.google.com?saddr=Current+Location&amp;daddr=' + (null == (__t = linkAddr) ? "" : __t) + '" class="' + (null == (__t = attrTitle) ? "" : __t) + '">Get Directions &raquo;</a></li>\n'), __p += "\n</ul>\n</header>\n</aside>";
			return __p
		}, templates.reviewsTheaterMapInfowin = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<aside class="review-details">\n<header>\n<h4 class="review-heading">' + (null == (__t = venueName) ? "" : __t) + '</h4>\n<ul class="review-meta-list">', criticsPick && (__p += '\n<li class="critics-pick"><i class="icon sprite-icon"></i></li>\n'), __p += "", rating && (__p += '\n<li class="' + (null == (__t = ratingClass) ? "" : __t) + '">' + (null == (__t = rating) ? "" : __t) + "</li>\n"), __p += "\n", linkAddr && (__p += '\n<li class="address-info"><a target="_blank" href="https://maps.google.com?saddr=Current+Location&amp;daddr=' + (null == (__t = linkAddr) ? "" : __t) + '" class="' + (null == (__t = attrTitle) ? "" : __t) + '">Get Directions &raquo;</a></li>\n'), __p += "\n</ul>\n</header>\n</aside>";
			return __p
		}, templates.supplementalItem = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="supplemental-items hidden" data-supplemental-order="' + (null == (__t = index) ? "" : __t) + '"></div>';
			return __p
		}, templates
	}), define("article/story/helpers/sprinkling-rules", ["jquery/nyt", "underscore/nyt", "article/story/templates"], function(e, t, i) {
		"use strict";
		var n = {
			sprinkler: null,
			1: e.noop,
			2: function() {
				var e = this.getItemFromDrawer("NewsEvent"),
					t = this.sprinkler.getNextAvailableColumn();
				e && t && !t.isLast && this.placeItem(t, e)
			},
			3: function() {
				var e = this.getItemFromDrawer("CombinedMarginalia"),
					t = this.sprinkler.getNextAvailableColumn(0, 395);
				e && t && !t.isLast && this.placeItem(t, e)
			},
			4: function() {
				var e = 410,
					t = this.getItemFromDrawer("PaidPost"),
					i = this.sprinkler.getNextAvailableColumn(0, e);
				t && i && this.placeItem(i, t, e)
			},
			5: function() {
				var e = this.sprinkler.getLastAvailableColumn();
				e && this.placeMarketingModule(e)
			},
			6: function() {
				for (var e = 0, t = ["RealEstateSearch", "CollectionMarginalia"], i = this.getItemFromDrawer(t), n = this.sprinkler.getNextAvailableColumn(); i && this.sprinkler.hasAvailableColumns() && 100 > e;) "CollectionMarginalia" !== i.name || n.isLast ? "RealEstateSearch" === i.type ? this.placeItem(n, i) : i.$el.remove() : this.placeItem(n, i), i = this.getItemFromDrawer(t), n = this.sprinkler.getNextAvailableColumn(n.order + 1), e++
			},
			7: function() {
				var n = this,
					s = this.sprinkler,
					a = 345,
					o = "undefined" != typeof this.getItemFromDrawer("Community"),
					r = s.getNextAvailableColumn(0, a),
					l = {
						$el: e(i.communityPlaceholder())
					};
				o && r && (this.placeItem(r, l, a), this.placeCommunityItem(), s.subscribe("nyt:community:peek-rendered", function() {
					t.delay(function() {
						n.placeCommunityItem()
					}, 2e3), s.stopSubscribing("nyt:community:peek-rendered")
				}))
			},
			8: function() {
				for (var e = 1, t = this.sprinkler.getNextAvailableColumn(), i = this.sprinkler.config.ads.max; this.sprinkler.hasAvailableColumns() && i >= e;) this.placeMedRec(t, e), e += 1, t = this.sprinkler.getNextAvailableColumn()
			},
			placeLedeAd: function() {
				var e, t = 1,
					n = this.sprinkler.columns[0];
				n && (e = n.remaining >= 700 ? "ledeAd" : "mediumRectangleAd", n.$el.append(i[e]({
					index: t
				})), n.remaining = 0, n.items += 1)
			},
			placeItem: function(e, i, n) {
				n = n || 0, e.$el.append(i.$el), e.remaining -= n || parseInt(i.$el.outerHeight(!0), 10), e.items += 1, this.sprinkler.drawer = t.without(this.sprinkler.drawer, i)
			},
			getItemFromDrawer: function(e) {
				var i, n, s, a = this.sprinkler.drawer,
					o = t.isArray(e) ? e : [e];
				for (n = 0; n < o.length; n += 1)
					for (s = o[n], i = 0; i < a.length; i += 1)
						if (s === a[i].name || s === a[i].type || s === a[i].subtype) return a[i]
			},
			placeMarketingModule: function(e) {
				e.$el.append(i.marketingModule()), e.remaining -= 330, e.items += 1
			},
			placeMedRec: function(e, t) {
				e.$el.attr("data-no-med-rec") || e.$el.append(i.mediumRectangleAd({
					index: t
				})), e.remaining = 0, e.items += 1
			},
			placeCommunityItem: function() {
				var i = this.getItemFromDrawer("Prompt"),
					n = this.getItemFromDrawer("Featured"),
					s = this.getItemFromDrawer("Recent"),
					a = e(".community-placeholder");
				i && i.$el.children().length > 0 ? (a.replaceWith(i.$el), this.sprinkler.drawer = t.without(this.sprinkler.drawer, i)) : n && n.$el.children().length > 0 ? (a.replaceWith(n.$el), this.sprinkler.drawer = t.without(this.sprinkler.drawer, n)) : s && s.$el.children().length > 0 ? (a.replaceWith(s.$el), this.sprinkler.drawer = t.without(this.sprinkler.drawer, s)) : a.addClass("hidden no-content")
			},
			setup: function(e) {
				var i = this,
					n = 0;
				this.sprinkler = e, this.sprinkler.subscribeOnce("nyt:sprinkler:columns-set", function() {
					i.placeLedeAd()
				}), this.sprinkler.subscribeOnce("nyt:sprinkler:rules-complete", function() {
					e.broadcast("nyt:ad-library:dfp:discover")
				}), t.each(i, function(e, i) {
					t.isNaN(parseInt(i, 10)) || (n += 1)
				}, this), this.length = n
			},
			run: function(e) {
				"function" == typeof this[e] && this[e]()
			}
		};
		return n
	}), define("article/story/views/sprinkler", ["underscore/nyt", "jquery/nyt", "foundation/views/base-view", "article/story/templates", "article/story/helpers/sprinkling-rules"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			config: {
				ads: {
					max: 15
				},
				height: {
					firstItem: 700,
					item: 900,
					minItem: 400,
					margin: 45
				},
				selectors: {
					drawer: "#storage-drawer",
					supplemental: ".supplemental",
					subItem: ".supplemental-sub-item"
				}
			},
			rules: s,
			columns: [],
			supplementals: [],
			drawer: [],
			sprinkled: !1,
			nytEvents: {
				"nyt:sprinkler:rules-complete": "handleAfterSprinkled"
			},
			initialize: function() {
				this.rules.setup(this), this.setColumns(), this.pageManager.getUrlParam("DEBUG") && this.debug(), this.setDrawer(), this.broadcast("nyt:sprinkler:columns-set", this)
			},
			handleDomReady: function() {
				this.measure(), this.hasAvailableColumns() ? this.executeRules() : this.checkForTablets()
			},
			checkForTablets: function() {
				this.$html.hasClass("viewport-portrait") && this.subscribe("nyt:page-viewportchange", function() {
					this.magnum.getWidth() > 1020 && !this.sprinkled && (this.initialize(), this.measure(), this.executeRules(), this.broadcast("nyt:refresh-paidposts"))
				})
			},
			setColumns: function() {
				var e = 0,
					i = this;
				t(this.config.selectors.supplemental).each(function(n) {
					var s, a, o = 0,
						r = t(this),
						l = i.getColumnStats(n, r);
					for (i.setColumnAttributes(l, r); o < l.maxNumberOfItems;) s = i.addItemToSupplementalColumn(r, e, o), a = i.determineItemHeight(n, o, l), i.createColumnObject(s, a, e), o += 1, e += 1;
					l.lastOrder = e - 1, i.supplementals[n] = l
				}), this.columns.length > 0 && (this.columns[this.columns.length - 1].isLast = !0)
			},
			createColumnObject: function(e, t, i) {
				this.columns[i] = {
					$el: e,
					height: t,
					remaining: t,
					items: 0,
					order: i
				}
			},
			determineItemHeight: function(e, t, i) {
				var n;
				return n = 0 === e && 0 === t ? i.firstItemHeight : t + 1 === i.maxNumberOfItems ? i.lastItemHeight : i.defaultItemHeight
			},
			setColumnAttributes: function(e, t) {
				e.isShort && t.addClass("short"), this.checkForMegaAd(t) && t.attr("data-mega-ad-adjacency", !0), t.attr("data-pre-height", e.height).attr("data-max-items", e.maxNumberOfItems).attr("data-remaining", e.remaining).attr("data-minimum", e.minimum).attr("data-last-item-height", e.lastItemHeight)
			},
			checkForMegaAd: function(e) {
				var t = e.parent(".story-body-supplemental"),
					i = t.next(".story-interrupter"),
					n = i.children("#MegaAd");
				return n.length > 0
			},
			measure: function() {
				var e, i, n = 0;
				for (n = 0; n < this.supplementals.length; n += 1) e = this.supplementals[n], i = e.$el.outerHeight(), this.checkForErrors(e, i), e.$el.attr("data-post-height", i);
				t(".supplemental-items").removeClass("hidden")
			},
			checkForErrors: function(e, t) {
				var i, n = this.getLastColumn(e);
				t < e.height && (i = e.height - t, n.height - i < this.config.height.minItem ? (n.$el.addClass("hidden height-discrepency validity-questionable"), n.remaining = 0) : (n.height -= i, n.remaining -= i, n.$el.addClass("height-discrepency reduced-height").attr("data-reduced-height", n.height)))
			},
			addItemToSupplementalColumn: function(e, i, s) {
				var a = e.data("max-items"),
					o = t(n.supplementalItem({
						index: i
					}));
				return e.attr("data-mega-ad-adjacency") && a === s + 1 && o.attr("data-no-med-rec", !0), o.appendTo(e)
			},
			getColumnStats: function(e, t) {
				var i = !1,
					n = this.config.height.item + this.config.height.margin,
					s = this.config.height.firstItem + this.config.height.margin,
					a = this.config.height.item + this.config.height.margin,
					o = parseInt(t.outerHeight(), 10),
					r = this.config.height.minItem,
					l = Math.floor(o / n),
					d = o - n * l,
					c = n - s;
				return 0 === e ? d + c >= r && (l += 1, a = d + c, 1 === l && (s = d, i = !0)) : d >= r && (l += 1, a = d, s = 1 === l ? a : n), {
					firstItemHeight: 0 === e ? s : n,
					defaultItemHeight: n,
					height: o,
					maxNumberOfItems: l,
					lastItemHeight: a,
					isShort: i,
					remaining: d,
					minimum: r,
					$el: t
				}
			},
			setDrawer: function() {
				var e = this;
				t(this.config.selectors.drawer).children().each(function(i) {
					var n = t(this);
					e.drawer[i] = {
						$el: n.children(),
						name: n.attr("data-attribute-name"),
						type: n.attr("data-attribute-type"),
						subtype: n.attr("data-attribute-subtype") || ""
					}
				})
			},
			executeRules: function() {
				var e = 0;
				for (e = 0; e <= this.rules.length && this.hasAvailableColumns(); e += 1) this.rules.run(e);
				this.broadcast("nyt:sprinkler:rules-complete")
			},
			handleAfterSprinkled: function() {
				this.sprinkled = !0
			},
			getNextAvailableColumn: function(e, t) {
				var i = e || 0,
					n = this.columns;
				for (t = t || 330, i = i; i < n.length; i += 1)
					if (n[i].remaining >= t && n[i].items < 2) return n[i];
				return e > 0 ? this.getNextAvailableColumn() : void 0
			},
			hasAvailableColumns: function() {
				return void 0 !== this.getNextAvailableColumn()
			},
			getLastColumn: function(e) {
				var t;
				return t = e && e.lastOrder ? this.columns[e.lastOrder] : this.columns[this.columns.length - 1]
			},
			getLastAvailableColumn: function() {
				var e = this.columns,
					t = this.columns.length - 1,
					i = 330;
				for (t = t; t >= 0; t -= 1)
					if (e[t].remaining >= i && e[t].items < 2) return e[t]
			},
			getColumn: function(e) {
				return this.columns[e]
			},
			debug: function() {
				t(this.config.selectors.supplemental).each(function() {
					t(this).addClass("debug-supplemental")
				}), n.ledeAd = n.ledeAdDebug, n.marketingModule = n.marketingModuleDebug, n.mediumRectangleAd = n.mediumRectangleAdDebug, t(this.config.selectors.subItem).each(function() {
					var e = t(this),
						i = e.attr("data-attribute-name") + " " + e.attr("data-attribute-type") + " " + e.attr("data-attribute-subtype");
					e.html(n.drawerItemDebug({
						name: i
					}))
				})
			}
		});
		return a
	}), define("article/common/instances/sprinkler", ["foundation/views/page-manager", "article/story/views/sprinkler"], function(e, t) {
		"use strict";
		return new t
	}), define("shared/adlibrary/helpers/filter-placements-mixin", ["underscore/nyt"], function(e) {
		"use strict";
		var t = {
			map: {
				forcexxl: {
					placement: "lede-ad",
					size: [468, 648]
				},
				force970x250: {
					placement: "TopAd",
					size: [970, 250]
				},
				force970x90: {
					placement: "TopAd",
					size: [970, 90]
				},
				forcemega: {
					placement: "MegaAd",
					size: [1600, 512]
				},
				force300x600: {
					placement: ["lede-ad", "MiddleRight"],
					size: [300, 600]
				},
				force300x250: {
					placement: "lede-ad",
					size: [300, 250]
				},
				force970x418: {
					placement: "MegaAd",
					size: [970, 418]
				},
				forcexxl2: {
					placement: "lede-ad",
					size: [450, 623]
				}
			},
			run: function(t, i) {
				var n;
				!e.isUndefined(t) && this.map[t] && (n = this.map[t], e.isArray(n.placement) ? e.each(n.placement, function(e) {
					i[e] && (i[e] = n.size)
				}) : i[n.placement] && (i[n.placement] = n.size))
			}
		};
		return t
	}), define("shared/adlibrary/views/base-ad", ["underscore/nyt", "foundation/views/base-view", "shared/adlibrary/helpers/filter-placements-mixin"], function(e, t, i) {
		"use strict";
		var n = t.extend({
			isReady: !1,
			constructor: function(e) {
				this.isDisabled() || (this.setUpOptions(e), i.run(this.pageManager.getUrlParam("ad-keywords"), this.placements), t.apply(this, arguments), this.sitewide.initialize(this), this.sitewide.async || (this.sitewide.isReady = !0, this.signalReady()), this.requirements.initialize(this), this.requirements.async || (this.requirements.isReady = !0, this.signalReady()))
			},
			requirements: {
				async: !1,
				initialize: function(e) {
					this[e.viewName] = e
				}
			},
			sitewide: {
				async: !1,
				initialize: function(e) {
					this[e.viewName] = e
				}
			},
			placements: {
				TopAd: [
					[728, 90],
					[970, 90],
					[970, 66],
					[970, 250]
				]
			},
			broadcastAdEvent: function() {
				var e, t, i = Array.prototype.slice.call(arguments);
				if (0 === i.length) throw "Please provide event name as the first argument to notify()";
				e = i.slice(0, 1)[0], i = i.slice(1), t = -1 === e.indexOf("nyt:") ? "nyt:ad-library:" + this.viewName + ":" + e : e, this.broadcast.apply(this, [t].concat(i))
			},
			listenToAdEvent: function(e, t) {
				var i = Array.prototype.slice.call(arguments, 2),
					n = "boolean" == typeof i[0] ? i[0] : !1,
					s = "object" == typeof i[0] ? i[0] : i[1],
					a = n ? "listenToOnce" : "listenTo",
					o = -1 === e.indexOf("nyt:") ? "nyt:ad-library:" + this.viewName + ":" + e : e;
				if (arguments.length < 2) throw "Please provide event name and callback to watch()";
				this[a].call(s || this, this.pageManager, o, t)
			},
			ignoreAdEvent: function(e, t) {
				var i = -1 === e.indexOf("nyt:") ? "nyt:ad-library:" + this.viewName + ":" + e : e;
				this.stopSubscribing(i, t)
			},
			signalReady: function() {
				this.sitewide.isReady && this.requirements.isReady && this.broadcastAdEvent("ready")
			},
			triggerTagX: function() {
				var e = this.$html,
					t = {
						module: "Page",
						viewportWidth: this.$window.width(),
						ledeMediaSize: e.attr("data-lede-media-size"),
						pageLayout: e.attr("data-page-layout")
					};
				this.trackingTriggerRaw("ad-tracking", t, "interaction")
			},
			setUpOptions: function(t) {
				t && (this.placements = t.placements ? e.extend({}, this.placements, t.placements) : this.placements, this.requirements = t.requirements || this.requirements)
			},
			getAdPlacements: function() {
				return this.placements
			},
			getAdKeywords: function() {
				return this.pageManager.getUrlParam("ad-keywords")
			},
			getAdSensitivity: function() {
				return this.pageManager.getMeta("ad_sensitivity")
			},
			isDisabled: function() {
				return "undefined" != typeof this.pageManager.getUrlParam("nojoy") || "noads" === this.pageManager.getUrlParam("adx_campaign") || "pay" === this.pageManager.getUrlParam("gwt")
			},
			isAmazonDisabled: function() {
				return "false" === this.pageManager.getMeta("dfp-amazon-enabled") || this.pageManager.getMeta("dfp-amazon-enabled") === !1
			}
		});
		return n
	}), define("shared/adlibrary/helpers/dfp-ordered-custom-criteria-mixin", ["underscore/nyt", "foundation/views/page-manager"], function(e, t) {
		"use strict";

		function i(t) {
			var i = "";
			return e.isArray(t) ? (t = e.each(t, function(e, t) {
				i += t > 0 ? "," : "", i += e.toLowerCase().replace(/[^a-z0-9]+/gi, "").substring(0, 30)
			}), i) : e.isString(t) ? t.toLowerCase().replace(/[^a-z0-9]+/gi, "").substring(0, 30) : ""
		}

		function n() {
			return "rec" === t.getUrlParam("src") ? "recpg" : "Recommendation" === t.getUrlParam("module") ? "recmod" : t.getUrlParam("pgtype") ? t.getUrlParam("pgtype") : ""
		}

		function s() {
			if (t.getUrlParam("smid")) {
				if ("fb-nytimes" === t.getUrlParam("smid") || "fb-share" === t.getUrlParam("smid")) return "facebook";
				if ("tw-nytimes" === t.getUrlParam("smid") || "tw-share" === t.getUrlParam("smid")) return "twitter"
			}
			return ""
		}

		function a() {
			var e, t = document.createElement("a");
			return document.referrer ? (t.href = document.referrer, e = t.hostname.toLowerCase().split("."), e = e.length > 2 ? e[1] : e[0]) : ""
		}
		var o;
		return o = [{
			key: "adv",
			value: t.getUrlParam("ad-keywords")
		}, {
			key: "plat",
			value: "web"
		}, {
			key: "prop",
			value: "nyt"
		}, {
			key: "ver",
			value: "nyt5"
		}, {
			key: "sub",
			value: ""
		}, {
			key: "typ",
			value: ""
		}, {
			key: "pos",
			value: ""
		}, {
			key: "spon",
			value: i(t.getMeta("ad-sponsor"))
		}, {
			key: "des",
			value: i(t.getMeta("des"))
		}, {
			key: "per",
			value: i(t.getMeta("per"))
		}, {
			key: "org",
			value: i(t.getMeta("org"))
		}, {
			key: "geo",
			value: i(t.getMeta("geo"))
		}, {
			key: "ttl",
			value: i(t.getMeta("ttl"))
		}, {
			key: "col",
			value: i(t.getMeta("col"))
		}, {
			key: "ser",
			value: i(t.getMeta("ser"))
		}, {
			key: "id",
			value: t.getMeta("articleid")
		}, {
			key: "auth",
			value: i(t.getMeta("author"))
		}, {
			key: "amznslots",
			value: ""
		}, {
			key: "ref",
			value: n()
		}, {
			key: "srch",
			value: ""
		}, {
			key: "edn",
			value: t.isInternationalEdition() ? "intl" : "us"
		}, {
			key: "lan",
			value: ""
		}, {
			key: "etua",
			value: ""
		}, {
			key: "subsrc",
			value: ""
		}, {
			key: "env",
			value: ""
		}, {
			key: "cs",
			value: ""
		}, {
			key: "jt",
			value: ""
		}, {
			key: "ind",
			value: ""
		}, {
			key: "g",
			value: ""
		}, {
			key: "em",
			value: ""
		}, {
			key: "inc",
			value: ""
		}, {
			key: "wat",
			value: ""
		}, {
			key: "refdom",
			value: s()
		}, {
			key: "topref",
			value: a()
		}, {
			key: "sov",
			value: (Math.floor(4 * Math.random()) + 1).toString()
		}]
	}), define("shared/adlibrary/helpers/dfp-placements-mixin", [], function() {
		"use strict";
		var e = {
			TopAd: [
				[728, 90],
				[970, 90],
				[970, 66],
				[970, 250]
			],
			TopAd1: [728, 90],
			TopAd2: [728, 90],
			TopAd3: [728, 90],
			TopAd4: [728, 90],
			TopAd5: [728, 90],
			"lede-ad": [
				[468, 648],
				[300, 600],
				[300, 250]
			],
			"marketing-ad": [301, 250],
			MiddleRight1: [300, 250],
			MiddleRight2: [300, 250],
			MiddleRight3: [300, 250],
			MiddleRight4: [300, 250],
			MiddleRight5: [300, 250],
			MiddleRight6: [300, 250],
			MiddleRight7: [300, 250],
			MiddleRight8: [300, 250],
			MiddleRight9: [300, 250],
			MiddleRight10: [300, 250],
			MiddleRight11: [300, 250],
			MiddleRight12: [300, 250],
			MiddleRight13: [300, 250],
			MiddleRight14: [300, 250],
			MiddleRight15: [300, 250],
			Middle1C: [88, 31],
			MostEm: [88, 31],
			TopNavAd: [88, 31],
			MegaAd: [1600, 512],
			Moses: [
				[970, 418],
				[970, 40]
			],
			Frame4A: [96, 60],
			Frame6A: [336, 90],
			Position1: [96, 60],
			Spon2: [88, 31],
			MiddleRightN: [300, 250],
			TopAdN: [728, 90],
			BigAd3: [300, 250],
			MobileBanner: [320, 50],
			MobileBanner2: [
				[320, 50],
				[300, 250]
			],
			Ribbon: [240, 75],
			RibbonInterstitial: [900, 500],
			Interstitial: [
				[1, 1],
				[640, 480]
			],
			WelcomeBack: [300, 250],
			sponsortile: [150, 50]
		};
		return e
	}), define("shared/adlibrary/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.iFrameStyleSheet = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<style type="text/css">\nbody {\nmargin: 0;\noverflow: hidden;\n}a img {\nborder: none;\n}\n</style>';
			return __p
		}, templates.interstitialModal = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="Interstitial" class="ad interstitial-ad"></div><p class="user-action dismiss-button">Continue &raquo;</p>';
			return __p
		}, templates.ribbonInterstitial = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="ribbon-interstitial-ad-overlay hidden">\n<h4 class="ad-heading"> Advertisement </h4>\n<div id="RibbonInterstitial" class="ad ribbon-interstitial-ad"> </div>\n</div>';
			return __p
		}, templates
	}), define("shared/modal/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.modal = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="overlay"></div>\n<div class="modal ' + (null == (__t = id) ? "" : __t) + " " + (null == (__t = addlClasses) ? "" : __t) + '" style="' + (null == (__t = modalStyles) ? "" : __t) + '" role="dialog" aria-labelledby="' + (null == (__t = id) ? "" : __t) + '-modal-heading" tabindex="-1">\n<div class="modal-header">\n<h3 class="modal-heading" id="' + (null == (__t = id) ? "" : __t) + '-modal-heading">' + (null == (__t = modalTitle) ? "" : __t) + "</h3>\n" + (null == (__t = headerContent) ? "" : __t) + '\n</div>\n<div class="modal-content">\n' + (null == (__t = modalContent) ? "" : __t) + '\n</div>\n<div class="modal-footer">\n' + (null == (__t = modalFooter) ? "" : __t) + '\n</div>\n<button type="button" class="modal-close ' + (null == (__t = closeClass) ? "" : __t) + '" aria-disabled="false"><i class="icon"></i><span class="visually-hidden">Close this modal window</span></button>\n<div class="modal-pointer ' + (null == (__t = "modal-pointer-" + tailDirection) ? "" : __t) + '"><div class="modal-pointer-conceal"></div></div>\n</div>';
			return __p
		}, templates
	}), define("shared/modal/views/modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/modal/templates"], function(e, t, i, n) {
		"use strict";
		var s = i.registerView("modal").extend({
			template: n.modal,
			className: "modal-container",
			events: {
				"click .modal-close, .modal-pointer, .dismiss-button": "close",
				"mouseenter .modal": "handleMouseOutClose"
			},
			defaultSettings: {
				id: "default-modal",
				modalTitle: "",
				headerContent: "",
				modalContent: "",
				modalFooter: "",
				addlClasses: "",
				binding: "",
				disableBindings: !1,
				tailDirection: "down",
				tailTopOffset: 0,
				tailLeftOffset: 0,
				fixedOverride: !1,
				hasOverlay: !1,
				hasCloseButton: !1,
				canOpenOnHover: !1,
				closeOnMouseOut: !1,
				mouseOutDelay: 0,
				mouseEnterDelay: 0,
				closeOnClick: !0,
				autoPosition: !1,
				positionTailSide: !1,
				toggleSpeed: 300,
				focusOnShow: !0,
				closeOnEsc: !0
			},
			initialize: function(e) {
				t.bindAll(this, "close", "open", "mouseEnterOpen", "mouseOutClose", "handleClickClose", "removeFromPage"), this.settings = t.extend({}, this.defaultSettings, e), this.settings.modalStyles = "width: " + e.width + ";", this.render()
			},
			render: function() {
				var e = this.settings.id + "-container";
				return this.settings.closeClass = this.settings.hasCloseButton ? "" : "hidden", this.$el.hide().addClass(e).html(this.template(this.settings)), this.$modal = this.$el.find(".modal"), this.$el.find(".overlay").toggle(this.settings.hasOverlay), this
			},
			addToPage: function(e, t) {
				var i = "string" == typeof e ? this.$body.find(e) : this.$body;
				return t = "function" == typeof i[t] ? t : "append", i[t](this.$el), "" === this.settings.binding || this.settings.disableBindings || (this.$body.on("click", this.settings.binding, this.open), this.settings.canOpenOnHover && (this.$body.on("mouseenter", this.settings.binding, this.mouseEnterOpen), this.$body.on("mouseleave", this.settings.binding, this.mouseOutClose))), this
			},
			removeFromPage: function() {
				return this.close(), this.$el.remove(), "" === this.settings.binding || this.settings.disableBindings || (this.$body.off("click", this.settings.binding, this.open), this.settings.canOpenOnHover && (this.$body.off("mouseenter", this.settings.binding, this.mouseEnterOpen), this.$body.off("mouseleave", this.settings.binding, this.mouseOutClose))), this.remove()
			},
			updateTemplate: function(e) {
				return this.$modal.find(".modal-content").html(e), this.positionDialog(!1), this
			},
			updateModalTitle: function(e) {
				this.$modal.find(".modal-heading").html(e)
			},
			open: function(t) {
				var i = this;
				return t ? (t.returnValue = !1, t.preventDefault(), this.$target = e(t.currentTarget)) : this.$target = e(this.settings.binding).eq(0), this.$el.fadeIn(this.settings.toggleSpeed, function() {
					i.broadcast("nyt:modal-show"), i.broadcast("nyt:modal-show-" + i.settings.id)
				}), this.settings.autoPosition ? this.autoPosition() : this.positionDialog(!0), (this.settings.openCallback || e.noop).call(this), this.subscribe("nyt:page-resize", this.positionDialog), this.settings.closeOnEsc && this.subscribeOnce("nyt:page-key-esc", this.close), this.$body.on("click", this.handleClickClose), this.pageManager.isMobile() && this.$body.css("cursor", "pointer"), this.settings.focusOnShow && this.$modal.focus(), this
			},
			mouseEnterOpen: function(e) {
				window.clearTimeout(this.mouseLeaveTimeout), this.mouseEnterTimeout = t.delay(this.open, this.settings.mouseEnterDelay, e)
			},
			close: function(t) {
				var i = this;
				return t && t.currentTarget && this.settings.disableBindings && e(t.currentTarget).hasClass("modal-pointer") ? this : (this.$el.fadeOut(this.settings.toggleSpeed, function() {
					(i.settings.closeCallback || e.noop).call(i), i.broadcast("nyt:modal-hide"), i.broadcast("nyt:modal-hide-" + i.settings.id)
				}), this.stopSubscribing("nyt:page-resize", this.positionDialog), this.$body.off("click", this.handleClickClose), window.clearTimeout(this.mouseEnterTimeout), this.pageManager.isMobile() && this.$body.css("cursor", ""), this)
			},
			mouseOutClose: function(t) {
				var i = e(t.relatedTarget);
				i.is(this.$.target) || this.$modal.has(i).length > 0 || (window.clearTimeout(this.mouseEnterTimeout), this.$modal.is(":visible") && (this.mouseLeaveTimeout = window.setTimeout(this.close, this.settings.mouseOutDelay)))
			},
			handleMouseOutClose: function() {
				this.settings.closeOnMouseOut && this.$modal.on("mouseleave", this.close)
			},
			handleClickClose: function(e) {
				this.settings.closeOnClick && 0 === this.$modal.has(e.target).length && this.$modal[0] !== e.target && this.close()
			},
			positionDialog: function(t) {
				var i, n, s, a, o, r = this.pageManager.getViewport(),
					l = this.$target,
					d = this.$modal,
					c = "absolute",
					h = d.outerHeight(),
					u = d.outerWidth(),
					m = {
						marginLeft: "0",
						marginTop: "0",
						top: "",
						left: ""
					};
				switch (l && l.length > 0 && (a = l.outerHeight(), o = l.outerWidth(), n = l.offset().top + this.settings.tailTopOffset, s = l.offset().left + this.settings.tailLeftOffset), this.settings.tailDirection) {
					case "up":
						m.top = n + a + 14, m.left = s + Math.floor(.5 * o) - Math.floor(.5 * u) - 9;
						break;
					case "up-right":
						m.top = n + a + 14, m.left = s + Math.floor(.5 * o) - (u - 25);
						break;
					case "up-left":
						m.top = n + a + 14, m.left = s + Math.floor(.5 * o) - 25;
						break;
					case "down":
						m.top = n - h - 15, m.left = s + Math.floor(.5 * o) - Math.floor(.5 * u) - 8;
						break;
					case "down-right":
						m.top = n - h - 15, m.left = s + Math.floor(.5 * o) - (u - 25);
						break;
					case "down-left":
						m.top = n - h - 15, m.left = s + Math.floor(.5 * o) - 25;
						break;
					case "left":
						m.top = n + Math.floor(.5 * a) - Math.floor(.5 * h) + 5, this.pageManager.isMobile() && this.$html.hasClass("navigation-active") ? m.left = s + o : m.left = s + o + 15;
						break;
					case "left-bottom":
						m.top = n + Math.floor(.5 * a) - (h - 25), m.left = s + o + 15;
						break;
					case "left-top":
						m.top = n + Math.floor(.5 * a) - 25, m.left = s + o + 15;
						break;
					case "right":
						m.top = n + Math.floor(.5 * a) - Math.floor(.5 * h) + 5, m.left = s - u - 16;
						break;
					case "right-bottom":
						m.top = n + Math.floor(.5 * a) - (h - 25), m.left = s - u - 16;
						break;
					case "right-top":
						m.top = n + Math.floor(.5 * a) - 25, m.left = s - u - 16;
						break;
					case "centered":
						i = r.height, m.top = h > i ? r.top + 5 : Math.floor(.5 * (i - h)) + r.top, m.left = Math.floor(.5 * r.width - .5 * u);
						break;
					case "fixed":
					default:
						c = "fixed", u = this.settings.width || d.width(), h = this.settings.height || d.height(), m.top = "50%", m.left = "50%", m.marginLeft = -Math.floor(.5 * u) + this.settings.tailLeftOffset + "px", m.marginTop = -Math.floor(.5 * h) + this.settings.tailTopOffset + "px"
				}
				return l && "fixed" === l.css("position") || this.settings.fixedOverride ? (c = "fixed", m.top -= r.top, this.$el.css("position", "fixed")) : this.$el.css("position", ""), m.top += e.isNumeric(m.top) ? "px" : "", m.left += e.isNumeric(m.left) ? "px" : "", d.css("position", c), t === !0 ? d.css(m) : d.stop().animate(m, "fast"), this
			},
			autoPosition: function() {
				var e, t, i, n = this.pageManager.getViewport(),
					s = this.$modal.outerHeight(),
					a = this.$modal.outerWidth();
				return this.settings.positionTailSide && (i = this.$target.offset().left > n.width / 2, this.settings.tailDirection = i ? "right" : "left"), this.positionDialog(!0), e = this.$target.offset(), this.settings.positionTailSide ? (t = this.settings.tailDirection, e.top - n.top - .5 * s < 0 ? t += "-top" : e.top - n.top + .5 * s > n.height && s - 42 < e.top - n.top && (t += "-bottom")) : (t = e.top - s < 0 ? "up" : "down", e.left + a > n.width ? t += "-right" : e.left < 0 && (t += "-left")), this.$modal.find(".modal-pointer").attr("class", "modal-pointer modal-pointer-" + t), this.settings.tailDirection = t, this.positionDialog(!0), this
			}
		});
		return s
	}), define("shared/adlibrary/helpers/dfp-sitewide-requirements-mixin", ["jquery/nyt", "underscore/nyt", "foundation/models/user-data", "shared/adlibrary/templates", "shared/modal/views/modal"], function(e, t, i, n, s) {
		"use strict";
		var a = {
			aax: "3030",
			async: !0,
			dfp: null,
			isReady: !1,
			amazonKeywords: [],
			tabletPortraitSize: 1020,
			small20ViewportSize: 719,
			hasSentComscore: !1,
			pageViewId: "",
			hasTrackedPageView: !1,
			initialize: function(e) {
				var t = this;
				this.dfp = e, this.dfp.isAmazonDisabled() ? this.async = !1 : this.setUpAmazonGlobal(), this.setPageViewId(), this.dfp.setCustomCriteria({
					page_view_id: this.getPageViewId()
				}), this.addCookieData(), this.integrateKrux(), this.determineAdSizes(), this.modifyChamber(), this.handleSupportedBy(), "article" === this.dfp.pageManager.getApplicationName() && this.addTrendingKeywords(), e.listenToAdEvent("ad-rendered", t.handleAdRendered, t), e.listenToAdEvent("ad-rendered", t.handlePageViewId, t), e.listenToAdEvent("ad-slot-defined", this.handleSlotDefined, t), e.listenToAdEvent("nyt:masthead-search-toggle", t.handleSearchSponsor, t), e.listenToAdEvent("nyt:page-breakpoint", t.handleBreakpoint, t), e.listenToAdEvent("refresh", t.handleRefresh, t)
			},
			handlePageExclusivity: function(t, i) {
				var n = this,
					s = e("#" + t).find("iframe");
				s.load(function() {
					s.contents().find("#onlychild").length > 0 && (n.dfp.setCustomCriteria({
						adv: i
					}), n.dfp.addPageLevelParameters(), n.dfp.deleteAllPlacements(), n.dfp.ignoreAdEvent("nyt:page-scroll", n.dfp.scan), e("#middle-right-paid-post-container").addClass("hidden")), s.contents().find("#familyplan").length > 0 && (n.dfp.setCustomCriteria({
						adv: i
					}), n.dfp.addPageLevelParameters(), n.modifyChamber())
				})
			},
			handlePageViewId: function() {
				this.hasTrackedPageView || (this.dfp.trackingTriggerRaw("page_view_id", {
					module: "page",
					priority: !0,
					page_view_id: this.getPageViewId()
				}, "interaction"), this.hasTrackedPageView = !0)
			},
			setPageViewId: function() {
				this.pageViewId = this.generatePageViewId()
			},
			generatePageViewId: function() {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
					var t = 16 * Math.random() | 0,
						i = "x" == e ? t : 3 & t | 8;
					return i.toString(16)
				})
			},
			getPageViewId: function() {
				return this.pageViewId
			},
			modifyChamber: function() {
				var e = this.dfp;
				e.clearChamber()
			},
			signalReady: function() {
				this.isReady = !0, this.dfp.signalReady()
			},
			handleAdRendered: function(e, t, i, n, s) {
				var a = this,
					o = this.dfp.getAdElement(e);
				switch (this.determineVisibility(o, i), t = t || [0, 0], t[0]) {
					case 728:
						a.checkPoliticalStatus(o, i, t[0]);
						break;
					case 300:
						a.checkPoliticalStatus(o, i, t[0]),
							a.triggerComScore(e, n, s);
						break;
					case 301:
						a.checkPoliticalStatus(o, i, t[0]), a.triggerComScore(e, n, s);
						break;
					case 468:
						a.triggerComScore(e, n, s)
				}
				switch (e) {
					case "TopAd":
						a.handleTopAd(o, t, i), a.handlePageExclusivity(e, n);
						break;
					case "lede-ad":
						a.handleBigAdRendered(o, t, i);
						break;
					case "SupportedBy":
						a.handleSupportedByAd(o, i);
						break;
					case "Interstitial":
						a.handleInterstitial(o, i, t)
				}
			},
			handleTopAd: function(e, t, i) {
				var n = e.find("iframe"),
					s = n.prev("div"),
					a = this.dfp.$adsOnPage.TopAd;
				return i ? (this.dfp.$html.removeClass("has-top-ad"), void this.dfp.$html.removeClass("has-top-flex-frame-ad")) : (1605 == n.width() || 1605 == t[0] || 0 == t[0] ? (this.dfp.$html.addClass("has-top-flex-frame-ad"), e.addClass("flex-frame-ad")) : (this.dfp.$html.addClass("has-top-ad"), e.removeClass("flex-frame-ad")), e.attr("display", "block"), this.has970TopAd = this.dfp.$html.hasClass("has-top-ad") && (n.width() > 728 || s.width() > 728) && 1605 !== t[0], this.hasFlexFrameTopAd = this.dfp.$html.hasClass("has-top-ad") && (1605 == t[0] || 0 == t[0]), void(this.has970TopAd && a.css("min-height", "26px")))
			},
			handleBigAdRendered: function(e, t, i) {
				i ? this.dfp.$html.removeClass("has-big-ad") : (t[0] >= 468 || 450 === t[0] && 623 === t[1]) && (this.dfp.$html.addClass("has-xxl"), this.hasXXLAd = !0)
			},
			handleSupportedBy: function() {
				var t = e("html").hasClass("viewport-medium-10");
				this.dfp.pageManager.flag("supportedBy") && (t ? this.dfp.addPlacementSize("SupportedBy", [150, 50]) : this.dfp.addPlacementSize("SupportedBy", [320, 25]))
			},
			handleSupportedByAd: function(t, i) {
				i || (e(".supported-by").removeClass("hidden"), this.dfp.$html.addClass("has-supported-by-ad"))
			},
			handleTileAds: function(t, i) {
				i || e(".tile-ads").removeClass("hidden")
			},
			checkPoliticalStatus: function(t, i, n) {
				var s;
				if (!i) try {
					t.find("iframe").contents().find("html #politicalAd").length > 0 && (s = e("<div>").addClass("ad-header").attr("aria-hidden", "true").append(e("<p>")).find("p").css({
						width: n + "px"
					}).text("ADVERTISEMENT").end(), t.prepend(s))
				} catch (a) {
					e.noop()
				}
			},
			integrateKrux: function() {
				this.setUpKruxGlobal(), this.addKruxKeywords()
			},
			setUpKruxGlobal: function() {
				window.Krux = window.Krux || ((window.Krux = function() {
					window.Krux.q.push(arguments)
				}).q = [])
			},
			addKruxKeywords: function() {
				var e = {},
					t = this.retrieveKruxData("segs"),
					i = this.retrieveKruxData("user");
				t && (e.ksg = t, window.Krux.segments = t.split(",") || []), i && (e.kuid = i, window.Krux.user = i), this.dfp.setCustomCriteria(e)
			},
			retrieveKruxData: function(e) {
				var t, i = "kx" + e;
				return window.localStorage ? window.localStorage[i] || "" : navigator.cookieEnabled ? (t = document.cookie.match(i + "=([^;]*)"), t && window.unescape(t[1]) || "") : ""
			},
			setUpAmazonGlobal: function() {
				var t = this;
				window.amznads = {
					updateAds: e.noop,
					renderAd: e.noop
				}, e.ajax({
					url: "//c.amazon-adsystem.com/aax2/amzn_ads.js",
					dataType: "script",
					timeout: 1e3
				}).always(function() {
					t.getAmazonKeywords()
				})
			},
			getAmazonKeywords: function() {
				var t = this,
					i = encodeURIComponent(document.location.toString().split("?")[0]);
				try {
					i = encodeURIComponent("" + window.top.location.toString().split("?")[0])
				} catch (n) {
					e.noop()
				}
				e.ajax({
					url: "//aax.amazon-adsystem.com/e/dtb/bid?src=" + t.aax + "&u=" + i + "&cb=" + Math.round(1e7 * Math.random()),
					dataType: "script",
					timeout: 1e3
				}).done(function() {
					t.addAmazonKeywords()
				}).always(function() {
					t.signalReady()
				})
			},
			handleRefresh: function() {
				var e = this.dfp,
					i = t.toArray(arguments),
					n = function() {
						e.refreshSlots.apply(e, i)
					};
				this.dfp.isAmazonDisabled() ? n() : this.refreshAmazonKeywords(n)
			},
			refreshAmazonKeywords: function(e) {
				var i = this;
				window.amznads.getAdsCallback && (window.amznads.getAdsCallback(this.aax, function() {
					i.addAmazonKeywords(), t.isFunction(e) && e()
				}), this.dfp.googletag.cmd.push(function() {
					i.dfp.googletag.pubads().clearTargeting("amznslots")
				}))
			},
			addAmazonKeywords: function() {
				window.amznads.ads && this.dfp.setCustomCriteria({
					amznslots: t.keys(window.amznads.ads)
				})
			},
			addTrendingKeywords: function() {
				var t, i, n = e("#trending-link-json").get(0).innerHTML;
				try {
					i = JSON.parse(n)
				} catch (s) {
					i = {}
				}
				if (null !== i) {
					switch (i.trending_type) {
						case "trending_page":
							i.dfpTrendingType = "trending";
							break;
						case "most_emailed_1":
							i.dfpTrendingType = "email";
							break;
						case "most_viewed_7":
							i.dfpTrendingType = "icymi";
							break;
						case "most_shared_facebook_1":
							i.dfpTrendingType = "fb"
					}
					t = {
						trend: i.dfpTrendingType
					}, this.dfp.setCustomCriteria(t)
				}
			},
			addCookieData: function() {
				var e = i.attributes;
				this.addEventTrackerId(e), this.parseSubscriberStatus(e), this.parseDemographicData(e.demographics)
			},
			addEventTrackerId: function(e) {
				var t = {};
				"0" !== e.id && (t.etua = e.id, this.dfp.setCustomCriteria(t))
			},
			parseSubscriberStatus: function(e) {
				var t, i = {};
				t = "0" === e.id ? "anon" : e.subscription.length <= 4 ? "reg" : "sub", i.sub = t, this.dfp.setCustomCriteria(i)
			},
			parseDemographicData: function(e) {
				var n, s = {};
				t.isObject(e) && (s.cs = i.getCompanySize(), s.jt = i.getJobTitle(), s.ind = i.getJobIndustry(), s.g = i.getGender(), s.em = i.getEmailSubscriptions(), s.inc = i.getIncomeRange(), s.wat = i.getWat(), i.getBundleSubscriptions() && i.getBundleSubscriptions().length > 0 && (n = i.getBundleSubscriptions()[0], s.subprm = n.promotion, s.grace = n.in_grace ? "t" : "f", t.isString(n.bundle) && (s.sub = n.bundle.toLowerCase()), t.isString(n.source) && (s.subsrc = n.source)), this.dfp.setCustomCriteria(s))
			},
			determineAdSizes: function() {
				var e, t = this.dfp.pageManager.getViewport().width;
				975 > t && (this.dfp.removePlacementSize("TopAd", [970, 90]), this.dfp.removePlacementSize("TopAd", [970, 66]), this.dfp.removePlacementSize("TopAd", [970, 250]), this.dfp.removePlacementSize("lede-ad", [468, 648])), 765 > t && (this.dfp.editPlacementSize("TopAd", [320, 50]), this.dfp.editPlacementSize("TopAd1", [320, 50]), this.dfp.editPlacementSize("TopAd2", [320, 50]), this.dfp.editPlacementSize("TopAd3", [320, 50]), this.dfp.editPlacementSize("TopAd4", [320, 50]), this.dfp.editPlacementSize("TopAd5", [320, 50]), this.dfp.removePlacement("SponLink"), e = {
					plat: "mweb",
					prop: "mnyt"
				}, this.dfp.setCustomCriteria(e))
			},
			handleSlotDefined: function(e, t) {
				var i;
				switch (t) {
					case "lede-ad":
						i = "mid1";
						break;
					case "MiddleRight2":
						i = "mid2";
						break;
					case "Frame6A":
						i = "artexp";
						break;
					case "MostEm":
						i = "emmod";
						break;
					case "TopAd":
						i = "top";
						break;
					case "TopAd1":
						i = "bottom";
						break;
					case "TopNavAd":
					case "SponsorAd":
						i = "ssearch";
						break;
					case "Middle1C":
					case "Spon2":
						i = t;
						break;
					case "FlexAd":
						i = "flex"
				}
				i && e.setTargeting("pos", i)
			},
			determineVisibility: function(e, t) {
				if (t) e.addClass("hidden").removeClass("request-pending");
				else try {
					e.find("iframe").contents().find("html #exclusivity").length > 0 ? e.addClass("hidden ad-exclusivity") : e.removeClass("hidden request-pending")
				} catch (i) {
					e.removeClass("hidden request-pending")
				}
			},
			handleSearchSponsor: function() {
				var e = this.dfp.$shell.find("#SponsorAd");
				e.find("iframe").length > 0 || this.dfp.requestDynamicAd("SponsorAd", [88, 31])
			},
			handleBreakpoint: function(e) {
				this.has970TopAd && this.hideTopAdForSmallViewport(e), this.hasXXLAd && this.hideXxlForSmallViewport(e), this.hasFlexFrameTopAd && this.hideFlexFrameTopAdForSmallViewport(e)
			},
			hideTopAdForSmallViewport: function(e) {
				var t = this.dfp.getAdElement("TopAd");
				e <= this.tabletPortraitSize ? (t.addClass("hidden"), this.dfp.$html.removeClass("has-top-ad")) : (t.removeClass("hidden"), this.dfp.$html.addClass("has-top-ad"))
			},
			hideXxlForSmallViewport: function(e) {
				var t = this.dfp.getAdElement("lede-ad");
				e <= this.tabletPortraitSize ? (t.addClass("hidden"), this.dfp.$html.removeClass("has-xxl")) : (t.removeClass("hidden"), this.dfp.$html.addClass("has-xxl"))
			},
			hideFlexFrameTopAdForSmallViewport: function(e) {
				var t = this.dfp.getAdElement("TopAd");
				e <= this.small20ViewportSize ? (t.addClass("hidden"), this.dfp.$html.removeClass("has-top-ad")) : (t.removeClass("hidden"), this.dfp.$html.addClass("has-top-ad"))
			},
			triggerComScore: function(e, t, i) {
				this.dfp.getAdElement(e).data("isInitial") || this.hasSentComscore || (this.dfp.trackingComscorePVC({
					module: "Ad",
					version: e,
					action: "Impression",
					contentCollection: i,
					contentID: t,
					region: this.dfp.adPath,
					eventName: "AdImpression"
				}), this.hasSentComscore = !0)
			},
			setupInterstitial: function() {
				var e = this;
				this.interstitialModal = new s({
					id: "interstitial-ad-modal",
					modalTitle: "advertisement",
					tailDirection: "fixed",
					hasOverlay: !0,
					hasCloseButton: !0,
					width: 640,
					height: 480,
					modalContent: n.interstitialModal(),
					closeCallback: function() {
						e.closeInterstitial()
					}
				}).addToPage(), e.requestInterstitial()
			},
			requestInterstitial: function() {
				this.dfp.broadcastAdEvent("request-placement", "Interstitial")
			},
			scheduleInterstitialClose: function() {
				this.closeTimeout = window.setTimeout(this.interstitialModal.close, 17e3)
			},
			closeInterstitial: function() {
				window.clearTimeout(this.closeTimeout)
			},
			handleInterstitial: function(e, t, i) {
				t || 1 === i[0] || (this.interstitialModal.open(), this.scheduleInterstitialClose())
			}
		};
		return a
	}), define("shared/adlibrary/views/dfp", ["jquery/nyt", "underscore/nyt", "shared/adlibrary/views/base-ad", "foundation/hosts", "shared/adlibrary/helpers/dfp-ordered-custom-criteria-mixin", "shared/adlibrary/helpers/dfp-placements-mixin", "shared/adlibrary/helpers/dfp-sitewide-requirements-mixin"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = i.extend({
			alreadyRequested: {},
			notYetRequested: {},
			readyForDisplay: {},
			adPath: "",
			viewName: "dfp",
			chamber: [],
			adsOnPage: {},
			$adsOnPage: {},
			slots: {},
			googletag: null,
			customCriteria: [],
			placements: a,
			isScanning: !1,
			hasTragedy: !1,
			initialize: function(e) {
				e = e || {}, this.listenToAdEvent("ready", this.handleReady), this.adPath = this.getAdUnitPath(), this.sitewide = o, this.customCriteria = t.each(s, function(e) {
					return t.clone(e)
				}), this.setCustomCriteria(e.customCriteria), this.discoverAdsOnPage(), this.addToChamber(this.adsOnPage), this.listenToAdEvent("ad-slot-defined", this.handleSlotDefined), this.listenToAdEvent("ad-rendered", this.triggerTagX, !0), this.listenToAdEvent("request-placement", this.requestDynamicAd), this.listenToAdEvent("queue-placement", this.queueDynamicAd), this.listenToAdEvent("scan", this.scan), this.listenToAdEvent("discover", this.discoverAdsOnPage), this.broadcastAdEvent("waiting", this)
			},
			getAdUnitPath: function() {
				var e, i, s = this.getAdSensitivity(),
					a = "tragedy" !== s && "noads" !== s ? this.pageManager.getMeta("dfp-ad-unit-path") : s;
				return this.flag("requestTragedyAd") && (a = this.pageManager.getMeta("dfp-ad-unit-path")), t.isUndefined(a) && (e = this.pageManager.getMeta("CG"), i = this.pageManager.getMeta("SCG") ? "/" + this.pageManager.getMeta("SCG") : "", a = e + i), n.dfpHost + a
			},
			handleReady: function() {
				var e = this;
				if (this.googletag = window.googletag, !this.googletag) return setTimeout(function() {
					e.handleReady()
				}, 500);
				if (this.isReady) throw new Error("DFP already in ready state.  Do not signal ready more than once.");
				this.isReady = !0, this.addPageLevelParameters(), this.initialAdRequest(), this.enableServices(), this.scan(), this.listenToAdEvent("placement-added", this.scan)
			},
			handleSlotDefined: function(e, t) {
				this.trackRequested(e, t)
			},
			requestAdsInViewport: function() {
				this.requestMultipleAds(this.getAdsInViewport())
			},
			trackRequested: function(e, i) {
				this.readyForDisplay[i] = this.notYetRequested[i], delete this.notYetRequested[i], 0 === t.keys(this.notYetRequested).length && (this.isScanning = !1, this.stopSubscribing("nyt:page-scroll", this.requestAdsInViewport))
			},
			getAdsInViewport: function() {
				var e = this,
					i = {};
				return t.each(this.$adsOnPage, function(t, n) {
					!e.alreadyRequested[n] && e.isElementInViewport(t) && (i[n] = {
						$el: t,
						size: e.adsOnPage[n]
					})
				}), i
			},
			enableServices: function() {
				var e = this.googletag,
					t = this;
				e.cmd.push(function() {
					e.pubads().addEventListener && e.pubads().addEventListener("slotRenderEnded", function(e) {
						t.broadcastAdEvent("ad-rendered", e.slot.getSlotId().getDomId(), e.size, e.isEmpty, e.lineItemId, e.serviceName)
					}), t.broadcastAdEvent("enable-services"), e.pubads().enableSingleRequest(), e.enableServices()
				})
			},
			addPageLevelParameters: function() {
				var e = this.googletag;
				t.each(this.customCriteria, function(i) {
					t.isEmpty(i.value) || e.cmd.push(function() {
						e.pubads().setTargeting(i.key, i.value)
					})
				})
			},
			setCustomCriteria: function(e) {
				t.isObject(e) && t.each(e, function(e, i) {
					var n = t.findWhere(this.customCriteria, {
						key: i
					});
					"undefined" != typeof e && (t.isString(e) || t.isArray(e) || (e = e.toString()), n ? n.value = e : this.customCriteria.push({
						key: i,
						value: e
					}))
				}, this)
			},
			defineAdSlots: function(e) {
				var i = this,
					n = e.isInitial,
					s = i.googletag;
				e = t.omit(e, t.keys(i.slots)), t.isEmpty(e) || s.cmd.push(function() {
					t.each(e, function(e, a) {
						var o, r, l;
						"fluid" === e || t.isArray(e) && e.indexOf("fluid") > -1 ? o = e : t.isArray(e) && t.isArray(e[0]) && t.isArray(e[0][0]) ? (o = [], r = e) : o = e, l = s.defineSlot(i.adPath, o, a), r && l.defineSizeMapping(r), l.addService(s.pubads()).setCollapseEmptyDiv(!0), i.slots[a] = l, i.$adsOnPage[a].data("isInitial", n), i.broadcastAdEvent("ad-slot-defined", l, a, e)
					})
				})
			},
			requestMultipleAds: function(e) {
				t.each(e, function(e, t) {
					"undefined" == typeof this.slots[t] ? this.requestDynamicAd(t, e.size) : this.requestSingleAd(t)
				}, this)
			},
			requestSingleAd: function(e) {
				var i = this.googletag,
					n = this;
				if (!this.hasTragedy) {
					if (!n.isReady) return n.listenToAdEvent("ready", function() {
						n.requestSingleAd(e)
					}, !0);
					i.cmd.push(function() {
						i.display(e), t.extend(n.alreadyRequested, n.readyForDisplay), delete n.readyForDisplay[e]
					})
				}
			},
			discoverAdsOnPage: function() {
				var t = this,
					i = e(".ad, .text-ad, .sponsor-ad");
				i.each(function(e, i) {
					i.id in t.placements && !t.$adsOnPage[i.id] && t.addPlacement(i.id)
				})
			},
			addToChamber: function() {
				this.chamber.push.apply(this.chamber, t.toArray(arguments))
			},
			clearChamber: function() {
				var e = this.chamber;
				return this.chamber = [], e
			},
			initialAdRequest: function() {
				t.each(this.chamber, function(e) {
					e.isInitial = !0, this.defineAdSlots(e)
				}, this)
			},
			requestDynamicAd: function(t, i) {
				var n = this;
				return n.isReady ? this.alreadyRequested[t] ? (this.$adsOnPage[t] = e("#" + t), !1) : (this.addPlacement(t, i), this.defineAdSlots(this.getPlacement(t)), void this.requestSingleAd(t)) : n.listenToAdEvent("ready", function() {
					n.requestDynamicAd(t, i)
				}, !0)
			},
			queueDynamicAd: function(e, t) {
				this.addPlacement(e, t), this.scan()
			},
			getAdElement: function(t) {
				return this.$adsOnPage[t] || e()
			},
			hasPlacementSize: function(e, t) {
				var i, n = this.placements[e];
				for (i = 0; i < n.length; i++)
					if ("string" != typeof n[i] && n[i][0] === t[0] && n[i][1] === t[1]) return !0;
				return !1
			},
			addPlacement: function(i, n) {
				var s;
				return t.isObject(i) ? t.each(i, function(e, t) {
					this.addPlacement(t, e)
				}, this) : (s = e("#" + i), 0 === s.length ? !1 : (this.placements[i] = n || this.placements[i], this.adsOnPage[i] = this.placements[i], this.$adsOnPage[i] = e("#" + i), this.notYetRequested[i] = this.$adsOnPage[i], void this.broadcastAdEvent("placement-added", i, n)))
			},
			getPlacement: function() {
				var e = {};
				return t.each(t.toArray(arguments), function(t) {
					this.adsOnPage[t] && (e[t] = this.adsOnPage[t])
				}, this), e
			},
			removePlacement: function(e) {
				delete this.placements[e], delete this.adsOnPage[e], delete this.$adsOnPage[e], delete this.notYetRequested[e]
			},
			deleteAllPlacements: function() {
				this.placements = {}, this.adsOnPage = {}, this.$adsOnPage = {}, this.notYetRequested = {}
			},
			removePlacementSize: function(e, i) {
				var n, s, a;
				if (this.adsOnPage && this.adsOnPage[e] && (n = this.adsOnPage[e]), this.adsOnPage && this.adsOnPage[e] && t.isArray(this.adsOnPage[e][0]))
					for (a = 0; a < n.length; a += 1) s = n[a], s[0] === i[0] && s[1] === i[1] && n.splice(a, 1);
				else n && n[0] === i[0] && n[1] === i[1] && this.removePlacement(e)
			},
			editPlacementSize: function(e, t) {
				this.adsOnPage && this.adsOnPage[e] && (this.adsOnPage[e].length = 0, this.adsOnPage[e].push.apply(this.adsOnPage[e], t))
			},
			addPlacementSize: function(e, i) {
				var n, s, a = !1,
					o = 0;
				if (t.isUndefined(this.adsOnPage[e])) return this.addPlacement(e, i);
				if (t.isArray(this.adsOnPage[e][0])) {
					for (o; o < this.adsOnPage[e].length; o += 1)
						if (n = this.adsOnPage[e][o][0], s = this.adsOnPage[e][o][1], n === i[0] && s === i[1]) {
							a = !0;
							break
						}
					a || this.adsOnPage[e].push(i)
				} else n = this.adsOnPage[e][0], s = this.adsOnPage[e][1], (n !== i[0] || s !== i[1]) && (this.adsOnPage[e].length = 0, this.adsOnPage[e].push([n, s]), this.adsOnPage[e].push(i))
			},
			refreshSlots: function(i, n) {
				var s, a = this;
				n = n || !1, i && (s = [], i = t.isArray(i) ? i : [i], t.each(i, function(e) {
					this.slots[e] && s.push(this.slots[e])
				}, this)), t.each(this.$adsOnPage, function(t, i) {
					a.$adsOnPage[i] = e("#" + i)
				}), this.googletag.cmd.push(function() {
					a.googletag.pubads().refresh(s, {
						changeCorrelator: n
					})
				})
			},
			scan: function() {
				this.isScanning || (this.isScanning = !0, this.requestAdsInViewport(), this.subscribe("nyt:page-scroll", this.requestAdsInViewport))
			}
		});
		return r
	}), define("shared/ad/models/ad", ["backbone/nyt"], function(e) {
		"use strict";
		var t = e.Model.extend({});
		return t
	}), define("shared/adlibrary/collections/adx-collection", ["backbone/nyt", "underscore/nyt", "foundation/collections/base-collection", "foundation/hosts", "shared/ad/models/ad"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			url: n.ADXHost + "/adx/bin/adxrun.html",
			model: s,
			initialize: function(e) {
				if (this.options = e || {}, this.placements = this.options.placements, !this.options.placements) throw new Error("No ad placements found in ADX collection");
				t.isUndefined(this.pageManager.getMeta("adxPage")) ? this.host = this.pageManager.getUrlParam("adx_campaign") || this.options.adx_campaign || "www.nytimes.com" : (this.host = "", this.options.page = this.pageManager.getMeta("adxPage")), this.interstitial = this.options.interstitial ? 1 : 0, this.setPageParameter()
			},
			setPageParameter: function() {
				var e;
				this.options.page || (e = location.pathname, e = e.replace(/\d{4}/, "yr").replace(/\d{2}/, "mo").replace(/\d{2}/, "day"), this.options.page = this.host + e)
			},
			sync: function(i, n, s) {
				var a = this;
				return s.dataType = "jsonp", s.jsonp = "jsonp", s.jsonpCallback = "processAdx", s.data = {
					page: a.options.page,
					positions: t.keys(this.placements).join(","),
					autoconfirm: 0,
					v: 3,
					cpp: 0,
					attributes: "nyt5",
					keywords: this.getAdxKeywords(),
					secureClientside: 1
				}, e.sync(i, n, s)
			},
			getAdxKeywords: function() {
				var e = this.pageManager.getMeta("keywords") || "",
					t = this.pageManager.getUrlParam("ad-keywords");
				return t && (e = e + "," + t), e
			},
			parse: function(e) {
				var t, i = [];
				for (t in e.ads) e.ads.hasOwnProperty(t) && this.placements.hasOwnProperty(t) && (e.ads[t].adId = t, i.push(e.ads[t]));
				return i
			}
		});
		return a
	}), define("shared/adlibrary/helpers/adx-placements-mixin", [], function() {
		"use strict";
		var e = {
			Inv1: [],
			Inv2: [],
			Inv3: [],
			ab1: [],
			ab2: [],
			ab3: [],
			prop1: [],
			prop2: [],
			Anchor: [],
			Bar1: [],
			ADX_CLIENTSIDE: []
		};
		return e
	}), define("shared/adlibrary/views/adx", ["jquery/nyt", "underscore/nyt", "shared/adlibrary/views/base-ad", "shared/adlibrary/templates", "shared/adlibrary/collections/adx-collection", "shared/adlibrary/helpers/adx-placements-mixin"], function(e, t, i, n, s, a) {
		"use strict";
		var o = i.extend({
			viewName: "adx",
			placements: a,
			iframeClass: "ad-frame",
			initialize: function() {
				this.ads = new s({
					placements: this.placements
				}), this.subscribe(this.ads, "sync", this.receiveAds), this.requestAds(), this.listenToAdEvent("request-placement", function(e) {
					this.renderAdFromData({
						id: e
					})
				})
			},
			requestAds: function() {
				this.ads.fetch()
			},
			renderAdFromData: function(t) {
				var i, s;
				(t.model || t.id) && (i = t.model || this.ads.findWhere({
					adId: t.id
				}), s = t.id || (i ? i.get("adId") : null), i && s && this.renderInIframe({
					el: e("#" + s),
					model: i,
					frameStyle: n.iFrameStyleSheet(),
					secondaryIframeClass: "frame-for-article"
				}))
			},
			receiveAds: function(e) {
				var t = this;
				e.each(function(e) {
					t.renderAdFromData({
						model: e,
						id: e.get("adId")
					})
				})
			},
			renderInIframe: function(i) {
				var n, s, a, o, r, l, d, c = document.createElement("iframe");
				i = i || {}, s = i.model, s && "undefined" != typeof s.get && i.el && !s.get("hasPainted") && (i.el = e(i.el), o = s.get("confirmation-url"), r = s.get("creative"), d = s.get("isInlineSafe"), "string" == typeof d && "n" === d.toLowerCase() && (d = !1), d ? i.el.append(i.el.html() + r) : 0 === i.el.find("iframe").length && "ADX_CLIENTSIDE" !== s.get("name") && (a = i.frameStyle ? i.frameStyle + r : r, e(c).attr("frameBorder", 0).addClass(this.iframeClass).css(this.calculateIFrameCss(s.get("width"), s.get("height"))), i.secondaryIframeClass && (c.className += " " + i.secondaryIframeClass), i.el.append(c), c.contentDocument ? n = c.contentDocument : c.contentWindow && (n = c.contentWindow.document), n && (n.open(), n.write(a), t.defer(function() {
					n.close()
				}))), e(i.el.selector + "-alternate-content").addClass("hidden"), o && "" !== o && (l = new Image, l.src = o), this.trackingTriggerImpression("ad-render", {
					module: "Ad",
					version: s.get("name"),
					action: "Impression",
					contentCollection: s.get("campaign"),
					contentID: s.get("classification"),
					region: i.page || "",
					eventName: "AdImpression"
				}), this.broadcastAdEvent("ad-rendered", s.get("adId")), i.callback && i.callback())
			},
			calculateIFrameCss: function(e, t) {
				var i = {};
				return i.width = e || 0, i.height = t || 0, i
			}
		});
		return o
	}), define("article/common/views/adlibrary/placements/adx-placements-mixin", [], function() {
		"use strict";
		var e = {
			Inv1: [],
			Inv2: [],
			Inv3: [],
			ab1: [],
			ab2: [],
			ab3: [],
			prop1: [],
			prop2: [],
			Anchor: [],
			Bar1: []
		};
		return e
	}), define("article/common/views/adlibrary/placements/dfp-placements-mixin", [], function() {
		"use strict";
		var e = {
			TopAd: ["fluid", [728, 90],
				[970, 90],
				[970, 66],
				[970, 250],
				[1605, 300]
			],
			TopAd1: [
				[728, 90]
			],
			TopAd2: [
				[728, 90]
			],
			TopAd3: [
				[728, 90]
			],
			TopAd4: [
				[728, 90]
			],
			TopAd5: [
				[728, 90]
			],
			"lede-ad": [
				[450, 623],
				[300, 600],
				[300, 250]
			],
			"marketing-ad": [301, 250],
			MiddleRight1: [300, 250],
			MiddleRight2: [300, 250],
			MiddleRight3: [300, 250],
			MiddleRight4: [300, 250],
			MiddleRight5: [300, 250],
			MiddleRight6: [300, 250],
			MiddleRight7: [300, 250],
			MiddleRight8: [300, 250],
			MiddleRight9: [300, 250],
			MiddleRight10: [300, 250],
			MiddleRight11: [300, 250],
			MiddleRight12: [300, 250],
			MiddleRight13: [300, 250],
			MiddleRight14: [300, 250],
			MiddleRight15: [300, 250],
			Middle1C: [88, 31],
			MostEm: [88, 31],
			TopNavAd: [88, 31],
			MegaAd: ["fluid", [1605, 300],
				[1600, 512]
			],
			Moses: [
				[1605, 300],
				[970, 418],
				[970, 40],
				[971, 90],
				[971, 250],
				[729, 90]
			],
			Frame4A: [96, 60],
			Frame6A: [336, 90],
			Position1: [96, 60],
			Spon2: [88, 31],
			MiddleRightN: [300, 250],
			TopAdN: [728, 90],
			BigAd3: [300, 250],
			MobileBanner: [320, 50],
			MobileBanner2: [
				[320, 50],
				[300, 250]
			],
			Ribbon: [244, 75],
			Interstitial: [
				[1, 1],
				[640, 480]
			],
			WelcomeBack: [300, 250],
			"supported-by-ad": [150, 50],
			"medium-rectangle-ad-1": [300, 250],
			"medium-rectangle-ad-2": [300, 250],
			"medium-rectangle-ad-3": [300, 250],
			"medium-rectangle-ad-4": [300, 250],
			"medium-rectangle-ad-5": [300, 250],
			"medium-rectangle-ad-6": [300, 250],
			"medium-rectangle-ad-7": [300, 250],
			"medium-rectangle-ad-8": [300, 250],
			"medium-rectangle-ad-9": [300, 250],
			"medium-rectangle-ad-10": [300, 250],
			"medium-rectangle-ad-11": [300, 250],
			"medium-rectangle-ad-12": [300, 250],
			"medium-rectangle-ad-13": [300, 250],
			"medium-rectangle-ad-14": [300, 250],
			"medium-rectangle-ad-15": [300, 250],
			FlexBody: [1605, 300]
		};
		return e
	}), define("article/common/views/adlibrary/requirements/dfp-article-requirements-mixin", ["jquery/nyt", "underscore/nyt"], function(e, t) {
		"use strict";
		var i = {
			dfp: null,
			closeTimeout: null,
			tabletPortraitSize: 1020,
			ribbonImpressionSent: !1,
			marginaliaImpressionSent: !1,
			moreInSent: !1,
			marginaliaPaidPostCounter: 0,
			flexFrameVariant: null,
			surveyLink: null,
			containers: {
				mobile: {
					$el: null,
					selector: ".ad.story-ad",
					isLoaded: !1
				},
				desktop: {
					$el: null,
					selector: ".medium-rectangle-ad",
					isLoaded: !1
				}
			},
			initialize: function(e) {
				var t = this;
				this.dfp = e, e.listenToAdEvent("ad-rendered", t.handleAdRendered, t), e.listenToAdEvent("nyt:ribbon-rendered", t.requestRibbonAd, t), e.listenToAdEvent("ad-slot-defined", t.handleSlotDefined, t), e.listenToAdEvent("nyt:comments-panel-opened", t.requestCommentsTile, t), e.listenToAdEvent("nyt:refresh-paidposts", this.addPaidPostPlacements, t), this.addMarketingPlacement(), this.shouldRequestInterstitial() && this.dfp.sitewide.setupInterstitial(), this.setArticleCustomCriteria(), this.setAdPlacementsOnPageManager(), this.removeXxlOnLede(), this.removeFinalAdOnShortArticles(), this.addPaidPostPlacements(), this.prepareInitialRequest(), this.setupViewportToggle(), this.dfp.flag("requestTragedyAd") && this.checkForTragedy(), e.listenToAdEvent("enable-services", t.handleEnableServices, t), this.dfp.flag("storyFlexFrames") && this.runFlexFrameAbTest()
			},
			runFlexFrameAbTest: function() {
				var t, i, n, s, a = null,
					o = e(".flex-candidate"),
					r = {
						DisplayAd: [728, 90]
					},
					l = {
						FlexBody: [
							[1605, 300],
							[1600, 512]
						]
					};
				window.NYTD && window.NYTD.Abra && (a = window.NYTD.Abra("www-story-flexframe")), a && "controlB" !== a ? (this.dfp.removePlacement("MegaAd"), e("#MegaAd").hide(), e("#story-ad-1").remove(), "1a" === a ? (this.dfp.removePlacement("TopAd"), this.dfp.addPlacement("TopAd", [728, 90]), t = r, i = e(o[2]), n = "DisplayAd") : "1b" === a ? (this.dfp.removePlacement("TopAd"), this.dfp.addPlacement("TopAd", [728, 90]), t = r, i = e(o[2]), this.surveyLink = "http://nyt.qualtrics.com/SE/?SID=SV_6LQf2tgtFLpzwLX", n = "DisplayAd") : "2a" === a ? (t = l, i = e(o[2]), n = "FlexBody") : "2b" === a ? (t = l, i = e(o[2]), this.surveyLink = "http://nyt.qualtrics.com/SE/?SID=SV_eFFwpXeWPbZu1Kd", e("#story-ad-1").remove(), n = "FlexBody") : "3a" === a ? (t = l, i = e(o[3]), n = "FlexBody") : "3b" === a ? (t = l, i = e(o[3]), this.surveyLink = "http://nyt.qualtrics.com/SE/?SID=SV_6yuC0Gni0xhajv7", n = "FlexBody") : "4a" === a ? (t = l, i = e(o[4]), n = "FlexBody") : "4b" === a ? (t = l, i = e(o[4]), this.surveyLink = "http://nyt.qualtrics.com/SE/?SID=SV_cO85PFo9ggJ0NdX", n = "FlexBody") : "5a" === a ? (t = l, i = e(o[6]), n = "FlexBody") : "5b" === a && (t = l, i = e(o[6]), this.surveyLink = "http://nyt.qualtrics.com/SE/?SID=SV_czHlvy9vgxXdJ8F", n = "FlexBody"), s = "DisplayAd" === n ? "display-ad" : "", i.attr("id", n).attr("class", "ad mega-ad flex-frame-ab-ad " + s), this.dfp.addPlacement(t), this.findNextSupplemental(n), this.flexFrameVariant = a) : a && "controlB" === a && (this.surveyLink = "http://nyt.qualtrics.com/jfe/form/SV_8wzyEmdeoAxNMUt")
			},
			findNextSupplemental: function(t) {
				var i, n = e("#" + t),
					s = n.parent().siblings().attr("id").split("-")[1];
				for (i = parseInt(s, 10); i >= 1; i--) e("#supplemental-" + i).remove()
			},
			prepareInitialRequest: function() {
				this.dfp.clearChamber(), "tragedy" === this.dfp.getAdSensitivity() && this.dfp.flag("requestTragedyAd") ? (this.dfp.deleteAllPlacements(), this.dfp.addPlacement({
					TragedyAd: [2, 2]
				}), this.dfp.requestSingleAd("TragedyAd")) : this.dfp.addToChamber(this.dfp.getPlacement("TopAd", "lede-ad", "TopNavAd", "supported-by-ad", "MiddleRightPaidPost1", "MiddleRightPaidPost2", "MiddleRightPaidPost3", "MiddleRightPaidPost4"))
			},
			checkForTragedy: function() {
				"tragedy" === this.dfp.getAdSensitivity() && (this.dfp.addPlacement({
					TragedyAd: [2, 2]
				}), this.dfp.requestSingleAd("TragedyAd"))
			},
			addPaidPostPlacements: function() {
				this.dfp.pageManager.getCurrentBreakpoint() >= 1031 && this.dfp.addPlacement({
					MiddleRightPaidPost1: [300, 77],
					MiddleRightPaidPost2: [300, 77],
					MiddleRightPaidPost3: [300, 77],
					MiddleRightPaidPost4: [300, 77]
				})
			},
			setAdTargeting: function(e, t) {
				switch (t) {
					case "marketing":
					case "marketing-ad":
						e.setTargeting("pos", "mktg");
						break;
					case "Spon2":
						e.setTargeting("pos", "comment");
						break;
					case "FlexBody":
						e.setTargeting("pos", "mid1"), e.setTargeting("article_test", "deskvar" + this.flexFrameVariant);
						break;
					case "TopAd":
						window.NYTD && window.NYTD.Abra && window.NYTD.Abra("www-story-flexframe") && (e.setTargeting("pos", "top"), e.setTargeting("article_test", "deskvar" + this.flexFrameVariant))
				}
			},
			addMarketingPlacement: function() {
				var e = 0,
					i = this.dfp;
				i.$html.hasClass("format-short") || (t.each(i.adsOnPage, function(t, i) {
					i.indexOf("MiddleRight") > -1 && "MiddleRightN" !== i && e++
				}), i.getAdElement("MiddleRight" + e).attr("id", "marketing-ad"), i.removePlacement("MiddleRight" + e), i.addPlacement("marketing-ad"))
			},
			setAdPlacementsOnPageManager: function() {
				var e = this.dfp;
				e.pageManager.setMeta("ads_adNames", t.keys(e.placements))
			},
			hasJumboLede: function() {
				return "jumbo" === this.dfp.$html.attr("data-lede-media-size") || this.dfp.$html.hasClass("has-jumbo-lede")
			},
			determineAdsizes: function() {
				this.determineLedeAdSizes(), this.dfp.$html.hasClass("has-cover-media") ? this.dfp.removePlacement("MegaAd") : (this.dfp.removePlacement("Moses"), this.dfp.addPlacement("Moses", [
					[970, 418],
					[971, 90],
					[971, 250],
					[729, 90]
				]))
			},
			determineLedeAdSizes: function() {
				var e = this.dfp.$html.attr("data-page-layout"),
					t = this.dfp.getAdKeywords(),
					i = !this.dfp.$html.hasClass("format-short"),
					n = this.dfp.pageManager.getViewport().width;
				"a" === e && "force300x250" === t && "force300x600" === t && this.dfp.editPlacementSize("lede-ad", [
					[300, 250],
					[300, 600]
				]), "b" === e && (i && n >= 975 ? this.dfp.editPlacementSize("lede-ad", [468, 648]) : this.dfp.editPlacementSize("lede-ad", [
					[300, 250],
					[300, 600]
				]))
			},
			setArticleCustomCriteria: function() {
				var i = {
						typ: "art",
						ledemedsz: this.dfp.$html.attr("data-lede-media-size"),
						coll: []
					},
					n = this.getArticleLengthParameter(this.dfp.$html.attr("data-keywords")),
					s = e("#page-config-data"),
					a = s.length > 0 ? JSON.parse(s.html()).pageconfig : {},
					o = a.collections;
				t.each(o, function(e) {
					t.each(e, function(e) {
						e = e.replace(/-/g, "").toLowerCase(), i.coll.push(e)
					})
				}), n && (i.artlen = n), "Review" == this.dfp.pageManager.getMeta("genre") && (i.typ = ["art", "rev"]), this.dfp.setCustomCriteria(i)
			},
			getArticleLengthParameter: function(e) {
				var t, i, n = {
					"article-short": "short",
					"article-medium": "medium",
					"article-long": "long",
					xlong: "xlong"
				};
				if (e)
					for (e = e.split(","), i = 0; i < e.length; i += 1)
						if (t = e[i], n[t]) return n[t];
				return ""
			},
			requestRibbonAd: function() {
				this.dfp.broadcastAdEvent("request-placement", "Ribbon")
			},
			shouldRequestInterstitial: function() {
				var t = "true" === e(".lede.video").attr("data-autoplay"),
					i = this.dfp.$html.attr("data-keywords"),
					n = !1;
				return i && (n = i.indexOf("has-embedded-interactive") > 0), t || n ? (this.dfp.removePlacement("Interstitial"), !1) : !0
			},
			handleAdRendered: function(t, i, n) {
				var s = this,
					a = s.dfp,
					o = a.getAdElement(t);
				switch (null === this.surveyLink || n || (e("#survey-link").attr("href", this.surveyLink), e("#survey-cta").removeClass("hidden"), this.surveyLink = null), (o.hasClass("story-ad") || o.hasClass("mega-ad")) && s.handleStoryAd(o, i, n), t) {
					case "Ribbon":
						s.handleRibbonAd(o, n);
						break;
					case "TragedyAd":
						s.handleTragedyAd(o, n);
						break;
					case "supported-by-ad":
						s.handleSponsorTile(o, n);
						break;
					case "MiddleRightPaidPost1":
					case "MiddleRightPaidPost2":
					case "MiddleRightPaidPost3":
					case "MiddleRightPaidPost4":
						s.handleMarginaliaPaidPostAd(o, n);
						break;
					case "MoreIn":
						s.handleMoreIn(o, n);
						break;
					case "FlexBody":
						s.handleFlexBody(o, n);
						break;
					case "MegaAd":
						s.handleMegaAd(o, n)
				}
			},
			handleMegaAd: function(e, t) {
				this.dfp.flag("inlineAdStyles") && (t || e.addClass("mega-ad-loaded"))
			},
			handleFlexBody: function(e, t) {
				var i = {
					"1a": 3,
					"1b": 3,
					"2a": 3,
					"2b": 3,
					"3a": 4,
					"3b": 4,
					"4a": 5,
					"4b": 5,
					"5a": 7,
					"5b": 7
				};
				t || this.dfp.trackingTriggerImpression("FlexFrameAbTest", {
					module: "FlexFrame",
					moduleDetail: i[this.flexFrameVariant],
					region: "Body",
					pgType: "Article"
				})
			},
			handleStoryAd: function(t, i, n) {
				var s;
				if (n || 728 !== i[0] || this.dfp.pageManager.flag("inlineAdStyles") || t.css({
						width: "728px"
					}), !n) try {
					1605 !== i[0] && 0 === t.find("iframe").contents().find("html #politicalAd").length && 0 !== i[0] && (s = e("<div>").addClass("ad-header").attr("aria-hidden", "true").append(e("<p>")).find("p").text("ADVERTISEMENT").end(), t.prepend(s))
				} catch (a) {
					e.noop()
				}
			},
			handleRibbonAd: function(e, t) {
				var i;
				t ? e.closest(".ribbon-ad-container").addClass("hidden") : (this.dfp.broadcastAdEvent("ribbon-ad-visible", e), i = {
					module: "PaidPostDriver",
					version: "Ribbon",
					region: "Header",
					action: "Impression",
					eventName: "Impression"
				}, this.handleTriggerPaidPostImpression(e, i))
			},
			moveLedeAds: function() {
				this.dfp.$html.find(".story-body-text").eq(0).before(this.dfp.$html.find(".lede-container-ads"))
			},
			removeXxlOnLede: function() {
				var e = this.dfp.$html.attr("data-lede-media-size");
				this.dfp.pageManager.flag("largeLedeXXL") ? this.hasJumboLede() && this.dfp.removePlacementSize("lede-ad", [468, 648]) : ("large" === e || this.hasJumboLede()) && this.dfp.removePlacementSize("lede-ad", [468, 648])
			},
			removeFinalAdOnShortArticles: function() {
				var e = this.dfp.$html.hasClass("format-short");
				this.hasJumboLede() && e && this.dfp.removePlacement("MiddleRightN")
			},
			handleSponsorTile: function(e, t) {
				t || e.parent().removeClass("hidden")
			},
			handleMarginaliaPaidPostAd: function(t, i) {
				var n;
				i || (t.parent().removeClass("hidden"), this.marginaliaPaidPostCounter++), 3 === this.marginaliaPaidPostCounter && (e("#middle-right-paid-post-container").removeClass("hidden").find(".marginalia-heading").text("From Our Advertisers"), n = {
					module: "PaidPostDriver",
					version: "Marginalia",
					region: "Marginalia",
					action: "Impression",
					eventName: "Impression"
				}, this.handleTriggerPaidPostImpression(e("#middle-right-paid-post-container"), n))
			},
			handleTriggerPaidPostImpression: function(e, t) {
				var i = this;
				e.is(":visible") && this.dfp.isElementInViewport(e) ? this.handlePaidPostImpression(e, t) : this.dfp.listenToAdEvent("nyt:page-scroll", function() {
					i.handleScrollCheck(e, t)
				})
			},
			handleScrollCheck: function(e, t) {
				e.is(":visible") && this.dfp.isElementInViewport(e) && this.handlePaidPostImpression(e, t)
			},
			handleMoreIn: function(t, i) {
				var n;
				i || (t.parent().removeClass("hidden"), this.dfp.broadcastAdEvent("morein-ad-visible", t), n = {
					module: "PaidPostDriver",
					version: "MoreInSection",
					region: "Footer",
					action: "Impression",
					eventName: "Impression"
				}, this.handleTriggerPaidPostImpression(e("#MoreIn"), n))
			},
			handlePaidPostImpression: function(e, t) {
				var i = !1;
				"Ribbon" === e.attr("id") && this.ribbonImpressionSent === !1 && (this.ribbonImpressionSent = !0, i = !0), "middle-right-paid-post-container" === e.attr("id") && this.marginaliaImpressionSent === !1 && (this.marginaliaImpressionSent = !0, i = !0), "MoreIn" === e.attr("id") && this.moreInSent === !1 && (this.moreInSent = !0, i = !0), i === !0 && this.dfp.trackingTrigger("post-paid-driver", t)
			},
			requestCommentsTile: function() {
				this.dfp.broadcastAdEvent("request-placement", "Spon2")
			},
			handleEnableServices: function() {
				this.dfp.pageManager.flag("headerBidder") && window.advBidxc && window.advBidxc.isLoaded && window.advBidxc.setTargetingForAdUnitsGPTAsync()
			},
			handleSlotDefined: function(e, t, i, n) {
				!n && window.advBidxc && window.advBidxc.isLoaded && window.advBidxc.setTargetingForAdUnitsGPTAsync(), this.setAdTargeting(e, t)
			},
			setupViewportToggle: function() {
				var t = this;
				this.containers.mobile.$el = e(this.containers.mobile.selector), this.containers.desktop.$el = e(this.containers.desktop.selector), this.checkViewport(), this.dfp.listenToAdEvent("nyt:page-viewportchange", t.checkViewport, t)
			},
			checkViewport: function() {
				var t = this.containers.desktop.$el,
					i = this.containers.mobile.$el,
					n = this.dfp.pageManager.cachedViewport.width;
				n >= this.tabletPortraitSize && !this.dfp.$html.hasClass("template-minimal") ? (this.containers.desktop.isLoaded || (this.installViewPortContainers(t, [300, 250]), this.containers.desktop.isLoaded = !0), t.removeClass("hidden"), i.addClass("hidden")) : (n < this.tabletPortraitSize && !this.dfp.$html.hasClass("viewport-medium-50") || this.dfp.$html.hasClass("template-minimal")) && (this.containers.mobile.isLoaded || (this.installViewPortContainers(i, [
					[728, 90],
					[300, 250]
				]), this.containers.mobile.isLoaded = !0), i.removeClass("hidden"), t.addClass("hidden")), this.dfp.flag("phaseOneAds") && n < this.tabletPortraitSize && !this.dfp.hasPlacementSize("MegaAd", [300, 250]) && (e("#story-ad-1").remove(), this.dfp.removePlacement("MegaAd"), this.dfp.addPlacement("MegaAd", ["fluid", [1605, 300],
					[1600, 512],
					[300, 250],
					[300, 600]
				])), 1155 > n && this.dfp.editPlacementSize("lede-ad", [
					[300, 250],
					[300, 600]
				])
			},
			installViewPortContainers: function(e, t) {
				var i, n = this.dfp;
				e.each(function(e, s) {
					i = s.id, !n.flag("storyFlexFrames") || window.NYTD && window.NYTD.Abra && !window.NYTD.Abra("www-story-flexframe") ? n.addPlacement(i, t) : n.flag("phaseOneAds") ? "story-ad-1" !== i && n.addPlacement(i, t) : n.addPlacement(i, t)
				}), this.dfp.broadcastAdEvent("scan")
			},
			handleTragedyAd: function() {
				this.dfp.hasTragedy = !0
			}
		};
		return i
	}), define("article/story/instances/ad-manager", ["foundation/views/page-manager", "shared/adlibrary/views/dfp", "shared/adlibrary/views/adx", "article/common/views/adlibrary/placements/adx-placements-mixin", "article/common/views/adlibrary/placements/dfp-placements-mixin", "article/common/views/adlibrary/requirements/dfp-article-requirements-mixin"], function(e, t, i, n, s, a) {
		"use strict";
		var o;
		return e.getMeta("errorpage") || (new i({
			placements: n
		}), o = new t({
			placements: s,
			requirements: a
		})), o
	}), define("shared/interstitialmodal/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.freetrialInterstitialMessage = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="free-trial-message">\n<div class="container">\n<div class="free-trial-message-body">\n<button class="button close-button" type="button"><i class="icon"></i><span class="visually-hidden">close modal window</span></button>\n<div class="free-trial-logo">\n<i class="icon sprite-icon"></i>\n</div>\n<div class="content">\n<h1 class="heading">Unlimited Times articles. For 4 weeks.<span class="message"> For free. </span></h1>\n<p class="credit-message">No credit card required.</p>\n<a class="button free-trial-button" href="' + (null == (__t = this.templateParams.host) ? "" : __t) + "/free-trial?ftv=v3&URI=" + (null == (__t = this.templateParams.currentUrl) ? "" : __t) + '&campaignId=66QHR">Start Your Free Trial</a>\n</div>\n<div class="footer">\n<p class="subscriber-message">Already a subscriber?\n<a class="login-link" href="' + (null == (__t = this.templateParams.host) ? "" : __t) + '/auth/login">Log In</a>\n<span> or </span>\n<a class="home-delivery-link" href="' + (null == (__t = this.templateParams.host) ? "" : __t) + '/link/homedelivery">Link Your Home Delivery Account</a>\n</p>\n</div>\n</div>\n</div>\n</div>';
			return __p
		}, templates.whitelistHeader = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="nyt-logo">\n<a href="http://www.nytimes.com">\n<img width="152" height="21" src="http://static01.nyt.com/marketing/instl/images/NYT_Logo.png" alt="The New York Times">\n</a>\n</div>';
			return __p
		}, templates.whitelistMessage = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="whitelist-message ' + (null == (__t = this.templateParams.interstitialClass) ? "" : __t) + ' ">\n<div class="container">\n<div class="whitelist-message-body">\n', ("soft" === this.templateParams.interstitialType || "soft-1" === this.templateParams.interstitialType || "soft-2" === this.templateParams.interstitialType) && (__p += '\n<button class="button close-button" type="button"><i class="icon"></i><span class="visually-hidden">close modal window</span></button>\n'), __p += '\n<div class="header">\n<img width="250" height="35" src="http://static01.nyt.com/marketing/instl/images/NYT_Ad_Block_logo.png" alt="The New York Times">\n</div>\n<div class="content">\n<h1 class="heading">' + (null == (__t = this.templateParams.interstitialHeading) ? "" : __t) + '</h1>\n<p class="message">' + (null == (__t = this.templateParams.interstitialMessage) ? "" : __t) + "</p>\n", "soft" === this.templateParams.interstitialType && (__p += '\n<p class="message">Thank you.</p>\n'), __p += '\n</div>\n<div class="footer">\n', ("hard" === this.templateParams.interstitialType || "hard-1" === this.templateParams.interstitialType || "hard-2" === this.templateParams.interstitialType) && (__p += '\n<a class="button subscribe-button" href="http://www.nytimes.com/subscriptions/Multiproduct/lp3004.html?campaignId=64WY8">SUBSCRIBE</a>\n'), __p += '\n<a class="button whitelist-button" href="http://www.nytimes.com/marketing/howto/whitelist.html">WHITELIST US</a>\n</div>\n</div>\n</div>\n</div>';
			return __p
		}, templates
	}), define("shared/data/helpers/collection-mixin", [], function() {
		"use strict";
		var e = {
			hasFetched: !1,
			getNext: function(e, t) {
				var i = e.indexOf(t),
					n = i === e.length ? 0 : i + 1;
				return e.at(n)
			},
			loadData: function() {
				var e = this;
				return 0 !== this.length || this.hasFetched || (this.hasFetched = !0, this.fetch({
					success: function() {
						e.trigger("fetchSuccess")
					},
					error: function() {
						e.trigger("fetchError")
					}
				})), this
			},
			getIdentifier: function() {
				return "rref=" + this.sectionId
			},
			getName: function() {
				return this.sectionName
			},
			getUrl: function() {
				return this.sectionUrl
			}
		};
		return e
	}), define("shared/data/collections/location", ["backbone/nyt", "foundation/collections/base-collection", "underscore/nyt", "shared/data/helpers/collection-mixin", "foundation/hosts"], function(e, t, i, n, s) {
		"use strict";
		var a = t.extend(i.extend({}, n, {
			initialize: function() {
				this.fetch()
			},
			sync: function(t, i, n) {
				return n.url = "../../../../../www.nytimes.com/svc/location/v1/current.json", n.cache = !0, e.sync(t, i, n)
			},
			parse: function(e) {
				return this.country = e.country || "", e
			},
			getCountry: function() {
				return this.country
			}
		}));
		return a
	}), define("shared/data/instances/location", ["shared/data/collections/location"], function(e) {
		"use strict";
		return new e
	}), define("shared/interstitialmodal/views/whitelist-interstitial", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/views/base-view", "shared/modal/views/modal", "shared/interstitialmodal/templates", "foundation/models/page-storage", "foundation/cookies", "shared/data/instances/location", "foundation/hosts"], function(e, t, i, n, s, a, o, r, l, d) {
		"use strict";
		var c = n.registerView("interstitial").extend({
			template: a.whitelistMessage,
			events: {
				"click .container .whitelist-button": "handleWhitelistButtonClick",
				"click .container .subscribe-button": "handleSubscribeButtonClick",
				"click .container .close-button": "handleCloseClick",
				"click .nyt-logo a": "handleNYTLogoClick",
				"click .container .free-trial-button": "handleFreetrialButtonClick",
				"click .footer .login-link": "handleLoginClick",
				"click .footer .home-delivery-link": "handleLoginClick"
			},
			userDetails: {},
			templateParams: {
				interstitialType: "soft",
				interstitialClass: "whitelist-message-soft",
				interstitialHeading: "Help The Times remain The Times.",
				interstitialMessage: "You currently have an ad blocker installed. Advertising helps fund our journalism. Please add us to your whitelist.",
				currentUrl: "",
				host: d.myaccountHost
			},
			trackingParams: {
				module: "AdBlock",
				versionName: "Soft",
				region: "Interstitial",
				typeName: "soft-interstitial"
			},
			defaultModalSettings: {
				id: "whitelist-interstitial-modal",
				binding: ".whitelist-interstitial-modal",
				tailDirection: "centered",
				hasOverlay: !0,
				hasCloseButton: !1,
				headerContent: a.whitelistHeader(),
				modalContent: ""
			},
			initialize: function() {
				var e = this;
				this.userDetails.isSubscriber = "sub" === this.determineUserStatus(), this.userDetails.subWhitelistVariant1 = this.userDetails.isSubscriber && "1" === this.isUserVariant("subscriberWhitelist") && o.get("subSoftInterstitial") !== !0 && o.get("nonSubHardInterstitial") !== !0, this.userDetails.nonsubWhitelistVariant1 = !this.userDetails.isSubscriber && "1" === this.isUserVariant("nonsubscriberWhitelist") && this.getSessionStorage("nonSubSoftInterstitial") !== !0, this.userDetails.nonsubWhitelistVariant2 = !this.userDetails.isSubscriber && "2" === this.isUserVariant("nonsubscriberWhitelist"), this.userDetails.subWhitelistTwoVariant1 = this.userDetails.isSubscriber && "1" === this.isUserVariant("subscriberWhitelistTwo") && "1" !== this.isUserVariant("subscriberWhitelist") && null === r.readCookie("NYT-whitelist"), this.userDetails.subWhitelistTwoVariant2 = this.userDetails.isSubscriber && "2" === this.isUserVariant("subscriberWhitelistTwo") && "1" !== this.isUserVariant("subscriberWhitelist") && null === r.readCookie("NYT-whitelist"), this.userDetails.nonsubWhitelistTwoVariant1 = !this.userDetails.isSubscriber && "1" === this.isUserVariant("nonsubscriberWhitelistTwo") && "1" !== this.isUserVariant("nonsubscriberWhitelist") && "2" !== this.isUserVariant("nonsubscriberWhitelist") && this.getSessionStorage("nonSubSoftInterstitial") !== !0, this.userDetails.nonsubWhitelistTwoVariant2 = !this.userDetails.isSubscriber && "2" === this.isUserVariant("nonsubscriberWhitelistTwo") && "1" !== this.isUserVariant("nonsubscriberWhitelist") && "2" !== this.isUserVariant("nonsubscriberWhitelist") && this.getSessionStorage("nonSubSoftInterstitial") !== !0, this.userDetails.nonsubWhitelistTwoVariant3 = !this.userDetails.isSubscriber && "3" === this.isUserVariant("nonsubscriberWhitelistTwo") && "1" !== this.isUserVariant("nonsubscriberWhitelist") && "2" !== this.isUserVariant("nonsubscriberWhitelist"), this.userDetails.nonsubWhitelistTwoVariant4 = !this.userDetails.isSubscriber && "4" === this.isUserVariant("nonsubscriberWhitelistTwo") && "1" !== this.isUserVariant("nonsubscriberWhitelist") && "2" !== this.isUserVariant("nonsubscriberWhitelist"), this.userDetails.nonsubFreeTrial = !this.userDetails.isSubscriber && "1" === this.isUserVariant("freeTrialOfferV3") && null === r.readCookie("NYT-freetrial"), this.userDetails.nonsubWhitelistVariant2 ? (this.defaultModalSettings.closeOnEsc = !1, this.defaultModalSettings.closeOnClick = !1, this.templateParams.interstitialType = "hard", this.templateParams.interstitialClass = "whitelist-message-hard", this.templateParams.interstitialHeading = "The best things in life arenâ€™t free.", this.templateParams.interstitialMessage = "You currently have an ad blocker installed. Advertising helps fund our journalism. To continue to enjoy The Times, please support us in one of the following ways.", this.trackingParams.versionName = "Hard", this.trackingParams.typeName = "hard-interstitial") : this.userDetails.subWhitelistTwoVariant1 || this.userDetails.nonsubWhitelistTwoVariant1 ? (this.templateParams.interstitialType = "soft-1", this.templateParams.interstitialClass = "whitelist-message-soft-1", this.templateParams.interstitialHeading = "We canâ€™t go on like this.", this.templateParams.interstitialMessage = "Please disable your ad blocker to view our site.", this.trackingParams.versionName = "Soft_v1", this.trackingParams.typeName = "soft-interstitial") : this.userDetails.subWhitelistTwoVariant2 || this.userDetails.nonsubWhitelistTwoVariant2 ? (this.templateParams.interstitialType = "soft-2", this.templateParams.interstitialClass = "whitelist-message-soft-2", this.templateParams.interstitialHeading = "Ad blockers are a real turnoff.", this.templateParams.interstitialMessage = "Please disable yours to visit this website.", this.trackingParams.versionName = "Soft_v2", this.trackingParams.typeName = "soft-interstitial") : this.userDetails.nonsubWhitelistTwoVariant3 ? (this.defaultModalSettings.closeOnEsc = !1, this.defaultModalSettings.closeOnClick = !1, this.templateParams.interstitialType = "hard-2", this.templateParams.interstitialClass = "whitelist-message-hard-2", this.templateParams.interstitialHeading = "Please disable your", this.templateParams.interstitialMessage = "ad blocker to continue reading The Times.", this.trackingParams.versionName = "Hard_v3", this.trackingParams.typeName = "hard-interstitial") : this.userDetails.nonsubWhitelistTwoVariant4 && (this.defaultModalSettings.closeOnEsc = !1, this.defaultModalSettings.closeOnClick = !1, this.templateParams.interstitialType = "hard-1", this.templateParams.interstitialClass = "whitelist-message-hard-1", this.templateParams.interstitialHeading = "We have no choice. But you do.", this.templateParams.interstitialMessage = "Advertising enables us to publish The Times. Please disable your ad blocker or subscribe to continue reading.", this.trackingParams.versionName = "Hard_v4", this.trackingParams.typeName = "hard-interstitial"), this.modalSettings = t.extend({}, this.defaultModalSettings, {
					openCallback: function() {
						null === r.readCookie("NYT-wli") && r.writeCookie("NYT-wli", "displayed", {
							expires: 90
						}), e.userDetails.isSubscriber && e.userDetails.subWhitelistVariant1 && o.set("subSoftInterstitial", !0), (!e.userDetails.isSubscriber && e.userDetails.nonsubWhitelistVariant1 || !e.userDetails.isSubscriber && e.userDetails.nonsubWhitelistTwoVariant1 || !e.userDetails.isSubscriber && e.userDetails.nonsubWhitelistTwoVariant2) && e.setSessionStorage("nonSubSoftInterstitial", !0), !e.userDetails.isSubscriber && e.userDetails.nonsubWhitelistVariant2 && o.set("nonSubHardInterstitial", !0), (e.userDetails.isSubscriber && e.userDetails.subWhitelistTwoVariant1 || e.userDetails.isSubscriber && e.userDetails.subWhitelistTwoVariant2) && r.writeCookie("NYT-whitelist", "soft-variant", {
							expires: 1
						})
					},
					closeCallback: function() {
						this.removeFromPage()
					}
				}), this.userDetails.nonsubFreeTrial && (this.templateParams.currentUrl = window.location.href.split("?")[0], this.template = a.freetrialInterstitialMessage, this.modalSettings = t.extend({}, {
					id: "free-trial-modal",
					binding: "free-trial-modal",
					tailDirection: "centered",
					hasOverlay: !0,
					modalContent: "",
					closeOnClick: !1,
					closeOnEsc: !1
				}, {
					openCallback: function() {
						null === r.readCookie("NYT-freetrial") && r.writeCookie("NYT-freetrial", "free-trial", {
							expires: 1
						})
					},
					closeCallback: function() {
						this.removeFromPage()
					}
				})), this.flag("whitelistInterstitial") && this.pageManager.hasAdBlock().done(function() {
					e.userDetails.subWhitelistVariant1 || e.userDetails.nonsubWhitelistVariant1 || e.userDetails.nonsubWhitelistVariant2 || e.userDetails.subWhitelistTwoVariant1 || e.userDetails.subWhitelistTwoVariant2 || e.userDetails.nonsubWhitelistTwoVariant1 || e.userDetails.nonsubWhitelistTwoVariant2 || e.userDetails.nonsubWhitelistTwoVariant3 || e.userDetails.nonsubWhitelistTwoVariant4 ? e.render() : e.userDetails.nonsubFreeTrial && (l.length > 0 ? e.renderFreeTrialInterstitial() : e.subscribeOnce(l, "sync", e.renderFreeTrialInterstitial))
				}).fail(function() {
					r.readCookie("NYT-wli") && "displayed" == r.readCookie("NYT-wli") && e.trackingTriggerImpression("whitelist-impression", {
						module: e.trackingParams.module,
						region: "Whitelist",
						IsSub: e.userDetails.isSubscriber,
						action: "Impression",
						priority: !0
					}, "interaction")
				})
			},
			getSessionStorage: function(e) {
				var t = window.sessionStorage.getItem(e);
				if (t) try {
					return JSON.parse(t)
				} catch (i) {}
				return {}
			},
			setSessionStorage: function(e, t) {
				try {
					window.sessionStorage.setItem(e, JSON.stringify(t))
				} catch (i) {}
			},
			render: function() {
				this.modalSettings.modalContent = this.template(this.templateParams), this.interstitialModal = new s(this.modalSettings), this.interstitialModal.addToPage(), this.setElement(this.interstitialModal.$modal), this.interstitialModal.open(), this.userDetails.isSubscriber && this.userDetails.subWhitelistVariant1 || !this.userDetails.isSubscriber && this.userDetails.nonsubWhitelistVariant1 || !this.userDetails.isSubscriber && this.userDetails.nonsubWhitelistVariant2 ? this.trackingTriggerImpression(this.trackingParams.typeName, {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Impression",
					priority: !0
				}) : this.userDetails.nonsubFreeTrial ? this.trackingTriggerImpression("Freetrial-impression", {
					module: "FreeTrial_WelcomeAd",
					region: this.trackingParams.region,
					action: "Impression"
				}) : this.trackingTriggerImpression(this.trackingParams.typeName, {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Impression",
					IsSub: this.userDetails.isSubscriber,
					priority: !0
				})
			},
			determineUserStatus: function() {
				var e, t = document.getElementById("user-info-data");
				if (!t) return "";
				try {
					e = JSON.parse(t.innerHTML)
				} catch (i) {
					return ""
				}
				return e.data && e.data.subscription && e.data.subscription.length && e.data.subscription.length > 4 ? "sub" : ""
			},
			handleSubscribeButtonClick: function(t) {
				var i, n = e(t.currentTarget);
				i = this.userDetails.subWhitelistVariant1 || this.userDetails.nonsubWhitelistVariant1 || this.userDetails.nonsubWhitelistVariant2 ? this.trackingAppendParams(n.attr("href"), {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Click"
				}) : this.trackingAppendParams(n.attr("href"), {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Click",
					IsSub: this.userDetails.isSubscriber
				}), window.location = i
			},
			handleWhitelistButtonClick: function(t) {
				var i, n = e(t.currentTarget);
				i = this.userDetails.subWhitelistVariant1 || this.userDetails.nonsubWhitelistVariant1 || this.userDetails.nonsubWhitelistVariant2 ? this.trackingAppendParams(n.attr("href"), {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Click"
				}) : this.trackingAppendParams(n.attr("href"), {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Click",
					IsSub: this.userDetails.isSubscriber
				}), window.location = i
			},
			handleCloseClick: function() {
				var e = "dismiss-click";
				this.userDetails.isSubscriber && this.userDetails.subWhitelistVariant1 || !this.userDetails.isSubscriber && this.userDetails.nonsubWhitelistVariant1 ? this.trackingTriggerRaw(e, {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Click",
					eventname: e,
					priority: !0
				}, "interaction") : this.userDetails.nonsubFreeTrial ? this.trackingTriggerRaw(e, {
					module: "FreeTrial_WelcomeAd",
					region: this.trackingParams.region,
					action: "Click",
					eventname: e
				}, "interaction") : this.trackingTriggerRaw(e, {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Click",
					eventname: e,
					IsSub: this.userDetails.isSubscriber
				}, "interaction"), this.interstitialModal.close()
			},
			handleNYTLogoClick: function(t) {
				var i, n = e(t.currentTarget);
				i = this.userDetails.subWhitelistVariant1 || this.userDetails.nonsubWhitelistVariant1 || this.userDetails.nonsubWhitelistVariant2 ? "http://www.nytimes.com" : this.trackingAppendParams(n.attr("href"), {
					module: this.trackingParams.module,
					version: this.trackingParams.versionName,
					region: this.trackingParams.region,
					action: "Click",
					IsSub: this.userDetails.isSubscriber
				}), window.location = i
			},
			renderFreeTrialInterstitial: function() {
				"US" === l.getCountry() && this.render()
			},
			handleFreetrialButtonClick: function(t) {
				var i = e(t.currentTarget),
					n = i.attr("href");
				this.trackingTriggerRaw("FreeTrial-click", {
					module: "FreeTrial_WelcomeAd",
					region: this.trackingParams.region,
					action: "Click",
					eventname: "offer-click"
				}, "interaction"), window.location = n
			},
			handleLoginClick: function(t) {
				var i = e(t.currentTarget),
					n = i.attr("href");
				window.location = n
			}
		});
		return c
	}), define("shared/interstitialmodal/instances/whitelist-interstitial", ["shared/interstitialmodal/views/whitelist-interstitial"], function(e) {
		"use strict";
		return new e
	}), define("article/story/views/image-resizer", ["underscore/nyt", "jquery/nyt", "foundation/views/base-view"], function(e, t, i) {
		"use strict";
		var n = i.extend({
			imageRatioLimit: .6,
			initialize: function() {
				this.checkMobileBreakpoint(), this.subscribe("nyt:page-breakpoint", this.checkMobileBreakpoint)
			},
			handleVerticalImageRatio: function(i, n) {
				var s, a, o, r, l, d = t(".embedded.layout-large-vertical img"),
					c = this;
				e.each(d, function(e) {
					r = t(e), s = new Image, s.src = r.attr("src"), a = s.width, o = s.height, a / o <= c.imageRatioLimit && (l = r.parents(".media"), n === !0 ? l.addClass(i) : l.removeClass(i))
				})
			},
			checkMobileBreakpoint: function() {
				this.pageManager.getCurrentBreakpoint() >= 1010 ? this.handleVerticalImageRatio("ratio-tall", !1) : this.pageManager.getCurrentBreakpoint() < 1010 && this.handleVerticalImageRatio("ratio-tall", !0)
			}
		});
		return n
	}), define("article/common/instances/image-resizer", ["article/story/views/image-resizer"], function(e) {
		"use strict";
		return new e
	}), define("shared/community/api-mixin", ["jquery/nyt", "underscore/nyt", "foundation/hosts"], function(e, t, i) {
		"use strict";
		var n = {
			apiPath: i.communityApiHost + "/svc/community/V3/requestHandler",
			COMMANDS: {
				all: "GetCommentsAll",
				reader: "GetCommentsReadersPicks",
				nytpicks: "GetCommentsNYTPicks",
				nytreplies: "GetCommentsNYTReplies",
				replies: "GetRepliesBySequence",
				permalink: "GetCommentByPermid",
				recommend: "PostRecommend",
				userinfo: "GetBasicInfo",
				comment: "PostComment",
				notify: "CommentNotify",
				summary: "GetCommentSummary",
				content: "GetUserContentSummary",
				reply: "PostComment",
				flag: "FlagComment",
				review: "",
				rate: "",
				avgRating: "",
				usrRating: ""
			},
			QUERIES: {
				asset: "url",
				filter: "cmd",
				command: "cmd",
				context: "commentSequence"
			},
			apiPost: function(e) {
				return this.makeRequest(e, "post")
			},
			apiGet: function(e) {
				return this.makeRequest(e, "get")
			},
			hasErrors: function(e, t) {
				var i = !0;
				return e && ("undefined" != typeof e.status ? (i = !1, this.wantsComments(t) ? i = !(e.results && e.results.comments) : "OK" !== e.status && (i = !0)) : i = !1), i
			},
			wantsComments: function(e) {
				if (!e) return !1;
				switch (e.filter) {
					case "all":
					case "nytreplies":
					case "nytpicks":
					case "reader":
					case "replies":
						return !0;
					default:
						return !1
				}
			},
			sanitize: function(e, t) {
				var i = [];
				return e && (i = e.comments), t && i && i[0] && ("replies" === t.filter ? (i[0].replies.context = i[0].commentSequence, i = i[0].replies) : "permalink" === t.filter && (i.context = i[0].commentSequence)), i
			},
			formatRequest: function(e, i) {
				var n, s, a = {};
				switch (t.each(e, function(e, t) {
					t = this.QUERIES[t] || t, "cmd" === t || "commentSequence" === t && 0 === e || (a[t] = e)
				}, this), e.command) {
					case "comment":
						a.commentType = "comment";
						break;
					case "notify":
						i = a.commentNotify ? "post" : "delete", delete a.commentNotify;
						break;
					case "reply":
						a.commentType = "userReply";
						break;
					case "review":
				}
				return a.url && a.url.match && a.url.match(/\/story\//) && (s = a.url.substr(a.url.indexOf("/story/") + 7), a.url.match(/\/qa-fe\//) ? a.url = "http://www.nytimes.com/" + s : a.url = "http://www.stg.nytimes.com/" + s), "post" === i ? a = {
					postdata: encodeURIComponent(JSON.stringify(a))
				} : a.url = a.url ? encodeURIComponent(a.url) : void 0, a.cmd = this.COMMANDS[e.filter || e.command], a.method = i, n = {
					url: this.apiPath,
					dataType: "jsonp",
					data: a,
					contentType: "post" === i ? "application/json; charset=utf-8" : "application/x-www-form-urlencoded; charset=utf-8",
					jsonp: "callback",
					cache: !1
				}
			},
			makeRequest: function(t, i) {
				var n = this,
					s = new e.Deferred,
					a = this.formatRequest(t, i),
					o = !0;
				return a.success = function(e) {
					n.hasErrors(e, t) ? a.error(e) : s.resolve(e.results || e)
				}, a.error = function(t) {
					o ? (e.ajax(a), o = !1) : s.reject({
						status: "ERROR",
						message: "The request failed",
						response: t
					})
				}, e.ajax(a), s.promise()
			}
		};
		return n
	}), define("shared/community/models/community-user", ["jquery/nyt", "backbone/nyt", "underscore/nyt", "foundation/models/base-model", "foundation/hosts", "foundation/models/user-data", "shared/community/api-mixin"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = n.extend(i.extend({}, o, {
			defaults: {
				userID: null,
				picURL: "",
				location: "",
				displayName: "",
				email: "",
				myaccounturl: "",
				wwwhost: "",
				tphost: "",
				comment_notify: !0
			},
			initialize: function() {
				!this.getUserId() && a.isLoggedIn() && this.fetch()
			},
			setCarefully: function(e) {
				var t = {
					userID: "UserId",
					location: "Location",
					displayName: "Name",
					email: "Email"
				};
				i.isObject(e) && i.each(e, function(e, i) {
					t[i] && !this["has" + t[i]]() && e && this["set" + t[i]](e)
				}, this)
			},
			getUserId: function() {
				return this.get("userID")
			},
			getAvatar: function() {
				return this.get("picURL")
			},
			addCSRFHeader: function(e) {
				this.csrf_token && e.setRequestHeader("X-CSRF-Token", this.csrf_token)
			},
			broadcastAvatarFailure: function() {
				this.local(this, "avatarFailed")
			},
			addRawAvatar: function(t) {
				var i = new FormData;
				i.append("image", t), e.ajax({
					url: this.avatarURL,
					type: "POST",
					data: i,
					processData: !1,
					contentType: !1,
					xhrFields: {
						withCredentials: !0
					},
					beforeSend: this.addCSRFHeader.bind(this),
					success: function(e) {
						this.local(this, "avatarUploaded", e.results)
					}.bind(this),
					error: this.broadcastAvatarFailure.bind(this)
				})
			},
			cropRawAvatar: function(t) {
				e.ajax({
					url: this.avatarURL,
					type: "PUT",
					data: t,
					xhrFields: {
						withCredentials: !0
					},
					beforeSend: this.addCSRFHeader.bind(this),
					success: function(e) {
						this.setAvatar(e.results), this.local(this, "avatarCropped", e.results)
					}.bind(this),
					error: this.broadcastAvatarFailure.bind(this)
				})
			},
			getLocation: function() {
				return this.get("location")
			},
			getName: function() {
				return this.get("displayName")
			},
			getEmail: function() {
				return this.get("email")
			},
			getAccountUrl: function() {
				return this.get("myaccounturl")
			},
			getNotify: function() {
				return this.get("comment_notify")
			},
			hasUserId: function() {
				return null !== this.get("userID") && this.get("userID") > 0
			},
			hasAvatar: function() {
				return this.getAvatar().length > 0 ? -1 === this.getAvatar().indexOf("none.png") : !1
			},
			hasLocation: function() {
				return "string" == typeof this.get("location") && this.get("location").length > 0
			},
			hasName: function() {
				return "string" == typeof this.get("displayName") && this.get("displayName").length > 0
			},
			hasEmail: function() {
				return "string" == typeof this.get("email") && this.get("email").length > 0
			},
			setUserId: function(e) {
				this.set("userID", e)
			},
			setLocation: function(e) {
				this.set("location", e)
			},
			setName: function(e) {
				return this.set("displayName", e)
			},
			setEmail: function(e) {
				return this.set("email", e)
			},
			setNotify: function(e) {
				return this.set("comment_notify", e)
			},
			setAvatar: function(e) {
				return this.set("picURL", e)
			},
			url: s.personasApiHost + "/v1/current/user.json",
			avatarURL: s.personasApiHost + "/v1/current/avatar.json",
			sync: function(n, s, a) {
				var o, r = this,
					l = "X-CSRF-Token";
				return a = i.extend({}, a, {
					xhrFields: {
						withCredentials: !0
					}
				}), o = a.success, a.success = function(e, t, i) {
					r.csrf_token = i.getResponseHeader(l) || i.getResponseHeader(l.toLowerCase()), o && o.call(this, e, t, i)
				}, "read" !== n && (a.data = e.param(i.extend({
					csrf_token: r.csrf_token
				}, this.toJSON())), a.beforeSend = function(e) {
					e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
				}), t.sync.call(this, n, this, a)
			},
			parse: function(e) {
				return e.results && "OK" === e.status ? (e.results.id = e.results.userID, e.results) : void 0
			},
			toJSON: function() {
				return {
					uid: this.get("uid"),
					displayname: this.getName(),
					location: this.getLocation(),
					comment_notify: this.getNotify()
				}
			}
		}));
		return r
	}), define("shared/community/instances/community-user", ["shared/community/models/community-user"], function(e) {
		"use strict";
		return new e
	}), define("shared/community/models/post", ["underscore/nyt", "foundation/models/base-model", "shared/community/api-mixin", "shared/community/instances/community-user"], function(e, t, i, n) {
		"use strict";
		var s = t.extend(e.extend({}, i, {
			defaults: {
				commentID: 0,
				replies: []
			},
			initialize: function() {
				this.getReplies().length > 2 && (this.getReplies().length = 2), this.convertUnixTimeStamp()
			},
			recommend: function(e, t, i) {
				var s = this,
					a = arguments.length > 3 ? Array.prototype.slice.call(arguments, 3) : [];
				return "undefined" == typeof e && (e = this.isRecommended() ? 0 : 1), this.apiPost({
					command: "recommend",
					userID: n.getUserId(),
					userEmail: n.getEmail(),
					asset: t,
					commentSequence: this.getSequence(),
					parentID: this.getParentId(),
					recommend: e
				}).done(function(e) {
					s.set({
						recommendedFlag: e.recommended,
						recommendations: e.recommendations
					}), i.local.apply(this, [i, "nyt:community-post-recommended", s].concat(a))
				})
			},
			convertUnixTimeStamp: function() {
				e.each(["approveDate", "createDate", "updateDate"], function(e) {
					this.set(e, 1e3 * parseInt(this.get(e), 10))
				}, this)
			},
			isTrusted: function() {
				return this.get("trusted") > 0
			},
			isPicked: function() {
				return this.get("editorsSelection")
			},
			isNyt: function() {
				return "reporterReply" === this.get("commentType")
			},
			isRecommended: function() {
				return 1 === this.get("recommendedFlag")
			},
			isReported: function() {
				return 1 === this.get("reportAbuseFlag")
			},
			hasReplies: function() {
				return this.getReplyCount() > 0
			},
			hasAvatar: function() {
				return this.getAvatar().length > 0 ? -1 === this.getAvatar().indexOf("none.png") : !1
			},
			hasAdditionalReplies: function() {
				return this.getReplyCount() > this.getReplies().length
			},
			getDate: function() {
				return this.get("approveDate")
			},
			getBody: function() {
				return this.get("commentBody")
			},
			getAuthor: function() {
				return this.get("userDisplayName") || this.get("display_name")
			},
			getAvatar: function() {
				return this.get("picURL") || ""
			},
			getLocation: function() {
				return this.get("userLocation") || this.get("location")
			},
			getReplies: function() {
				return this.get("replies")
			},
			getReplyCount: function() {
				return this.get("replyCount")
			},
			getId: function() {
				return this.get("commentID")
			},
			getPermId: function() {
				return this.get("permID")
			},
			getSequence: function() {
				return this.get("commentSequence")
			},
			getParentId: function() {
				return this.get("parentID") || 0
			},
			getRecommendations: function() {
				return this.get("recommendations")
			},
			getUserTitle: function() {
				return this.get("userTitle")
			},
			getParentAuthor: function() {
				return this.get("parentUserDisplayName")
			},
			getParentPermId: function() {
				return this.get("parentPermID")
			}
		}));
		return s
	}), define("shared/community/collections/stream", ["underscore/nyt", "foundation/collections/base-collection", "shared/community/models/post"], function(e, t, i) {
		"use strict";
		var n = t.extend({
			model: i,
			sortMethods: {
				newest: function(e) {
					return -parseInt(e.getDate(), 10)
				},
				oldest: function(e) {
					return parseInt(e.getDate(), 10)
				},
				reader: function(e) {
					return -parseInt(e.getRecommendations(), 10)
				}
			},
			order: function(e) {
				this.comparator = this.sortMethods[e || "newest"]
			},
			has: function(e) {
				return this.where({
					commentID: e.getId()
				}).length > 0
			},
			convertPosts: function(t, n) {
				return e.each(t, function(e, s) {
					var a = new i(e);
					n && (n.getReplies()[s] = a), a.hasReplies() && this.convertPosts(a.getReplies(), a), t[s] = a
				}, this), this
			},
			stripDupes: function(t) {
				var i = [],
					n = [];
				return e.each(t, function(t) {
					-1 === e.indexOf(n, t.getId()) && (i.push(t), n.push(t.getId()))
				}, this), i
			},
			populate: function(t) {
				var i = [],
					n = t.context;
				return t = this.convertPosts(t).stripDupes(t), e.each(t, function(t) {
					this.has(t) || (i.push(t), this.ensurePermId(t, n), t.hasReplies() && (t.set("replies", this.stripDupes(t.getReplies())), e.each(t.getReplies(), function(e) {
						this.ensurePermId(e, t.getSequence())
					}, this)))
				}, this), this.add(i), i
			},
			ensurePermId: function(e, t) {
				e.getPermId() || e.set("permID", (t ? t + ":" : "") + e.getSequence()), e.set("parentPermID", e.getPermId().split(":")[0])
			}
		});
		return n
	}), define("shared/community/models/thread", ["underscore/nyt", "foundation/models/base-model", "shared/community/collections/stream"], function(e, t, i) {
		"use strict";
		var n = t.extend({
			defaults: {
				context: "0",
				filter: "all",
				sort: "newest",
				offset: 0,
				permID: null,
				stream: null,
				requested: 25
			},
			initialize: function() {
				var e = this.getStream();
				e && "function" != typeof e.slice || (e = new i(e), this.set("stream", e)), e.order(this.get("sort"))
			},
			toQuery: function(t) {
				return e.extend({
					context: this.get("context"),
					filter: this.get("filter"),
					sort: this.get("sort"),
					offset: this.get("offset")
				}, {
					permID: this.get("permID") || void 0
				}, t)
			},
			getStream: function() {
				return this.get("stream")
			},
			getCount: function() {
				return this.get("count")
			},
			getRequested: function() {
				return this.get("requested")
			},
			isEmpty: function() {
				return !this.isLoading() && 0 === this.getStream().length
			},
			isLoading: function() {
				return this.get("loading")
			},
			setLoading: function(e) {
				this.set("loading", e)
			},
			setCount: function(e) {
				this.set("count", e)
			},
			trackRequested: function(e) {
				this.set("requested", e + (this.getRequested() || 0))
			},
			hasAdditionalPosts: function() {
				return this.getRequested() < this.get("count")
			}
		});
		return n
	}), define("shared/community/models/discussion", ["underscore/nyt", "foundation/models/base-model", "foundation/collections/base-collection", "shared/community/api-mixin", "shared/community/models/thread"], function(e, t, i, n, s) {
		"use strict";
		var a = t.extend(e.extend({}, n, {
			defaults: {
				views: [],
				isOpen: !0,
				totalPosts: 0,
				nytPicks: 0,
				nytReplies: 0,
				userPicks: 0,
				averageRating: 0,
				userRating: 0,
				prompt: "Share your thoughts."
			},
			initialize: function(e) {
				var t = new i([], {
					model: s
				});
				e.asset && !e.taxonomy && this.listenToOnce(t, "add", this.buildTaxonomy), this.listenToOnce(t, "add", this.getUserContent), this.listenToOnce(this, "nyt:community-summary", this.load), this.set("threads", t), this.getSummary()
			},
			buildValidQuery: function(t) {
				var i, n = ["context", "filter", "sort", "permID", "taxonomy"],
					s = {};
				for (i in t) e.indexOf(n, i) > -1 && "undefined" != typeof t[i] && (s[i] = t[i]);
				return s
			},
			getSummary: function() {
				var e = this,
					t = {
						"comment-list-sort-approvedate": {
							sort: "oldest",
							filter: "all"
						},
						"comment-list-sort-approvedate-desc": {
							sort: "newest",
							filter: "all"
						},
						"comment-list-sort-recommended": {
							filter: "reader"
						},
						"comment-list-sort-editors": {
							filter: "nytpicks"
						},
						"comment-list-sort-replies": {
							filter: "nytreplies"
						}
					};
				this.apiGet({
					asset: this.getAsset(),
					command: "summary"
				}).done(function(i) {
					var n = t[i.sortBy || "comment-list-sort-approvedate-desc"];
					e.setDefaultQuery(n), e.setMetaData(i), e.local(e, "nyt:community-summary", n, e)
				}).fail(function() {
					e.local(e, "nyt:community-summary", t["comment-list-sort-approvedate-desc"], e)
				})
			},
			load: function(e, t) {
				var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [],
					n = this.getThreads(),
					s = this.buildValidQuery(e),
					a = n.findWhere(s);
				this.local(t || this, "nyt:community-request", e), a || (n.add(s), a = n.findWhere(s)), a.isLoading() ? this.addThreadWatcher.apply(this, [t, a].concat(i)) : e.limit ? this.fetchMorePosts(e, a, t, i) : a.isEmpty() || "replies" === e.filter ? this.fetchPosts(e, a, t, i) : (this.local.apply(this, [t || this, "nyt:community-thread-loaded", [], a.getStream().models].concat(i)), this.addReplies.apply(this, [a.getStream().models, t, a].concat(i)))
			},
			addThreadWatcher: function(e, t) {
				var i = this;
				this.listenTo(t, "nyt:community-thread-loaded", function() {
					i.local.apply(i, [e, "nyt:community-thread-loaded"].concat(Array.prototype.slice.call(arguments, 0)))
				})
			},
			fetchPosts: function(e, t, i, n) {
				var s, a, o = this,
					r = this.toQuery(e || {}, t);
				t.setLoading(!0), this.addThreadWatcher.apply(this, [i || this, t].concat(n)), a = this.apiGet(r).done(function(i) {
					s = t.getStream().populate(o.sanitize(i, r)), "replies" === e.filter && o.updateParentPost(t), o.setMetaData(i, t, e), t.setLoading(!1), o.local.apply(o, [t, "nyt:community-thread-loaded", s, t.getStream().models].concat(n)), o.addReplies.apply(o, [s, t, t].concat(n)), o.stopListening(t, "nyt:community-thread-loaded")
				}).fail(function() {
					t.setLoading(!1), o.local.apply(o, [t, "nyt:community-thread-loaded", [], t.getStream().models].concat(n))
				}), this.local(i || this, "nyt:community-thread-requested", this, a)
			},
			toQuery: function(t, i, n) {
				return e.extend(i.toQuery(), {
					offset: t && t.offset ? t.offset : i.get("offset"),
					limit: t ? t.limit : void 0,
					asset: this.getAsset()
				}, n)
			},
			addReplies: function(t, i, n, a) {
				var o = this.getThreads();
				a = a || {}, e.each(t, function(t) {
					var r, l = {
							context: t.getSequence(),
							permID: t.getPermId()
						},
						d = t.getReplies();
					n && "nytreplies" === n.get("filter") ? l.filter = n.get("filter") : l.filter = "replies", r = o.findWhere(l), d.length > 0 && (r || (r = new s({
						context: t.getSequence(),
						filter: l.filter,
						permID: t.getPermId(),
						stream: d
					}), o.add(r)), a.parent = t.getId(), this.local.apply(this, [i || this, "nyt:community-thread-loaded", d, r.getStream().models, a]), this.addReplies(r.getStream().models, i, n, e.clone(a)))
				}, this)
			},
			updateParentPost: function(e) {
				var t, i = this.getThreads().findWhere({
						context: "0"
					}),
					n = i.getStream().findWhere({
						commentSequence: e.get("context")
					});
				n && (n.set("replies", e.getStream().models), t = this.getThreads().findWhere({
					context: n.getSequence(),
					filter: "replies",
					sort: "newest"
				}), t && this.getThreads().remove(t))
			},
			buildTaxonomy: function() {
				var e, t, i, n, s, a = this.pageManager.getMeta("SCG");
				this.isValidTaxonomy(this.getTaxonomy()) || (s = this.pageManager.getMeta("communityAssetTaxonomy"), t = this.pageManager.getMeta("CG"), i = this.pageManager.getMeta("hdl"), n = this.pageManager.getMeta("slug"), s || (e = [], "string" == typeof t && "" !== t && e.push(t), "string" == typeof i && "" !== i && (i = i.replace(/\&\%\?/g, ""), e.push(i)), s = e.join("/"), "string" == typeof n && "" !== n && (s += " (" + n + ")")), "roomfordebate" === a && s.indexOf("(undefined)") > -1 && (e = [], "string" == typeof t && "" !== t && e.push(t.toLowerCase()), e.push(a), "string" == typeof n && "" !== n && "undefined" !== n && e.push(n), s = e.join("/")), this.setTaxonomy(s))
			},
			fetchMorePosts: function(t, i, n) {
				this.fetchPosts(e.extend({
					limit: 25
				}, t, {
					offset: i.getStream().length
				}), i, n)
			},
			fetchLatestPosts: function(e) {
				this.fetchPosts({}, e)
			},
			post: function(e, t, i) {
				var n, s, a = this.getUser();
				return i.ancestorId > 0 || i.parentId > 0 ? (n = "reply", s = i.ancestorId > 0 ? i.ancestorId : i.parentId) : (n = "comment", s = 0), this.apiPost({
					command: n,
					userID: a.getUserId(),
					userEmail: a.getEmail(),
					userDisplayName: a.getName(),
					userLocation: a.getLocation(),
					asset: this.getAsset(),
					parentID: s,
					commentBody: t.commentBody,
					commentTitle: t.commentTitle,
					notifyViaEmailOnApproval: t.commentNotify,
					assetTaxonomy: this.getTaxonomy()
				}).done(function() {
					e.local(e, "nyt:community-comment-posted", t, i), a.setNotify(t.commentNotify), a.save()
				})
			},
			setMetaData: function(t, i, n) {
				var s = ["all"];
				i && "permalink" !== i.get("filter") && (this.setCount(t, i, n), this.setUserData(t.userData)), "string" == typeof t.commentQuestion && t.commentQuestion.length > 0 && this.setPrompt(t.commentQuestion), "undefined" != typeof t.userRating && this.setRating(t), e.isObject(t.asset) && this.isValidTaxonomy(t.asset.taxonomy) && this.setTaxonomy(t.asset.taxonomy), "undefined" != typeof t.canSubmit && this.setOpen(t.canSubmit), t.totalRecommendationsFound && s.push("reader"), t.totalEditorsSelectionFound && s.push("nytpicks"), t.totalReporterReplyCommentsFound && s.push("nytreplies"), this.setFilters(s)
			},
			findPost: function(e) {
				var t = !1;
				return this.getThreads().each(function(i) {
					var n;
					return t ? !1 : (n = i.getStream().findWhere(e), n ? (t = n, !1) : void 0)
				}, this), t
			},
			setUserData: function(e) {
				var t = this.getUser();
				t && t.setCarefully(e)
			},
			setRating: function(e) {
				this.set("userRating", e.userRating), this.set("avgRating", e.averageRating)
			},
			setCount: function(e, t, i) {
				if ("replies" !== t.get("filter")) {
					switch (this.set("total-all", e.totalCommentsFound), this.set("total-parent", e.totalParentCommentsFound), this.set("total-reader", e.totalRecommendationsFound), this.set("total-nytpicks", e.totalEditorsSelectionFound), this.set("total-nytreplies", e.totalReporterReplyCommentsFound), t.get("filter")) {
						case "all":
							t.set("count", e.totalParentCommentsFound);
							break;
						case "reader":
							t.set("count", e.totalRecommendationsFound);
							break;
						case "nytpicks":
							t.set("count", e.totalEditorsSelectionFound);
							break;
						case "nytreplies":
							t.set("count", e.totalReporterReplyCommentsFound)
					}
					i.limit && t.trackRequested(i.limit)
				}
			},
			getUserContent: function() {
				var e = this,
					t = e.getThreads();
				("undefined" == typeof this.getExcerpt() || 0 === this.getExcerpt().length) && this.apiGet({
					path: this.getAsset(),
					command: "content"
				}).done(function(i) {
					var n;
					i.hasOwnProperty("excerpts") && (n = new s({
						context: 0,
						filter: "excerpt",
						stream: i.excerpts
					}), t.add(n), e.setExcerpt(n.getStream().models[0]))
				})
			},
			getNumberOfPosts: function(e) {
				return this.get("total-" + ("string" == typeof e ? e : "all"))
			},
			hasAdditionalPosts: function(e) {
				var t = this.getThreads(),
					i = this.buildValidQuery(e),
					n = t.findWhere(i);
				return n ? n.hasAdditionalPosts() : !1
			},
			isValidTaxonomy: function(e) {
				return "string" == typeof e && e.length > 0 && -1 === e.indexOf("undefined")
			},
			getAverageRating: function() {
				return this.get("averageRating")
			},
			getViews: function() {
				return this.get("views")
			},
			getAsset: function() {
				return this.get("asset")
			},
			getThreads: function() {
				return this.get("threads")
			},
			getTaxonomy: function() {
				return this.get("taxonomy")
			},
			getExcerpt: function() {
				return this.get("excerpt") || ""
			},
			getUser: function() {
				return this.get("user")
			},
			isOpen: function() {
				return this.get("isOpen")
			},
			getPrompt: function() {
				return this.get("prompt")
			},
			getFilters: function() {
				return this.get("filters")
			},
			getDefaultQuery: function() {
				return this.get("defaultQuery")
			},
			setTaxonomy: function(e) {
				this.set("taxonomy", e)
			},
			setExcerpt: function(e) {
				this.set("excerpt", e)
			},
			setOpen: function(e) {
				this.set("isOpen", e)
			},
			setPrompt: function(e) {
				this.set("prompt", e)
			},
			setFilters: function(e) {
				this.set("filters", e)
			},
			setUser: function(e) {
				this.set("user", e)
			},
			setDefaultQuery: function(e) {
				this.set("defaultQuery", e)
			}
		}));
		return a
	}), define("shared/community/collections/community-loader", ["underscore/nyt", "foundation/collections/base-collection", "shared/community/models/discussion", "shared/community/instances/community-user"], function(e, t, i, n) {
		"use strict";
		var s = t.extend({
			model: i,
			StatusCode: {
				ENABLED: "enabled",
				DISABLED: "disabled",
				WAITING: "waiting"
			},
			enabledQueue: [],
			disabledQueue: [],
			initialize: function() {
				this.subscribe("nyt:community-request", this.loadDiscussion), this.subscribe(this, "add", this.notify), this.subscribe(this, "add", this.setUserModel), this.status = this.StatusCode.WAITING, this.pageManager.isDomReady() ? this.ready() : this.subscribe("nyt:page-ready", this.ready)
			},
			enabled: function(e) {
				"function" == typeof e && this.enabledQueue.push(e)
			},
			disabled: function(e) {
				"function" == typeof e && this.disabledQueue.push(e)
			},
			ready: function() {
				this.pageManager.$html.hasClass("has-comments") ? this.setStatus(this.StatusCode.ENABLED) : this.setStatus(this.StatusCode.DISABLED), this.runQueue()
			},
			setStatus: function(e) {
				this.status = e
			},
			isEnabled: function() {
				return this.status === this.StatusCode.ENABLED
			},
			runQueue: function() {
				e.each(this[this.status + "Queue"], function(e) {
					e.call(this)
				}, this), this[this.status] = function(e) {
					"function" == typeof e && e.call(this)
				}
			},
			loadDiscussion: function(t, i, n) {
				var s;
				t = t || ((location.origin || location.protocol + "//" + location.hostname) + location.pathname).replace(/www\.dev|www\.sbx/i, "www.stg"), this.pageManager.getMeta("communityAssetURL") && (t = this.pageManager.getMeta("communityAssetURL")), s = this.findWhere({
					asset: t
				}), this.local(i, "nyt:community-loading", t), s ? (s.getViews().push(i), this.notify(s, this, {}, i)) : this.add(e.extend({}, n || {}, {
					asset: t,
					views: [i],
					permID: location.hash.substr(location.hash.indexOf("=") + 1) || void 0
				}))
			},
			notify: function(e, t, i, n) {
				this.local(n || e.getViews()[0], "nyt:community-loaded", e)
			},
			setUserModel: function(e) {
				e.setUser(n)
			}
		});
		return s
	}), define("shared/community/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.button = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", skipToContentId && (__p += '\n<a class="visually-hidden" href="#' + (null == (__t = skipToContentId) ? "" : __t) + '">Continue reading the main story</a>\n'), __p += '\n<i class="icon"></i>\n', __p += count > 0 ? '\n<span class="button-text">\n' : '\n<span class="button-text no-comments">\n', __p += "\n", count > 0 ? (__p += '\n<span class="count">' + (null == (__t = count) ? "" : __t) + "</span>\n", showUnits && (__p += '\n<span class="units">' + (null == (__t = units) ? "" : __t) + "</span>\n"), __p += "\n") : defaultText && (__p += '\n<span class="default">' + (null == (__t = defaultText) ? "" : __t) + "</span>\n"), __p += "\n</span>";
			return __p
		}, templates.comments = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<section id="comments" class="comments" tabindex="1">\n<div class="comment-permalink-view">\n</div>\n<div class="comments-header-container">\n<header class="comments-header">\n<div id="Spon2" class="ad comments-tile-ad"></div>\n<h2 class="section-heading" tabindex="1"><i class="icon comments-icon"></i>' + (null == (__t = header) ? "" : __t) + "</h2>\n", commentPromptVisibility && (__p += '\n<p class="comment-prompt">' + (null == (__t = commentPrompt) ? "" : __t) + "</p>\n"), __p += "\n", isOpen || (__p += '\n<p class="comments-status">The comments section is closed. To submit a letter to the editor for publication, write to <a href="mailto:letters@nytimes.com">letters@nytimes.com</a>. </p>\n'), __p += '\n</header>\n<div class="comment-form-control form-control thread-form active"></div>\n<div class="comments-view-navigation">\n<div class="tabs-container">\n<ul class="tabs">\n', _.each(filters, function(e, t) {
				__p += '\n<li class="tab ' + (null == (__t = t) ? "" : __t) + '" data-filter="' + (null == (__t = t) ? "" : __t) + '" tabindex="5">' + (null == (__t = e) ? "" : __t) + '<span class="count" data-filter="' + (null == (__t = t) ? "" : __t) + '">&nbsp;' + (null == (__t = view.model.getNumberOfPosts(t)) ? "" : __t) + "</span></li>\n"
			}), __p += '\n</ul>\n</div>\n<div class= "comments-sort-container">\n<div class="comments-sort" tabindex="5">' + (null == (__t = sort) ? "" : __t) + '</div><i class="icon"></i>\n</div>\n</div>\n</div>\n<div class="comments-view tab-content" tabindex="50">\n<footer class="comments-footer">\n<div class="comments-expand comments-thread-expand" data-action="read-more" tabindex="55">Read More <i class="icon"></i></div>\n</footer>\n<div class="loader-container">\n<div class="loader loader-t-logo-32x32-ecedeb-ffffff"><span class="visually-hidden">Loading...</span></div>\n</div>\n</div><!-- close comments-view -->\n', view.model.getNumberOfPosts("all") > 1 && (__p += '\n<div class="view-all" data-filter="all">View all ' + (null == (__t = view.model.getNumberOfPosts("all")) ? "" : __t) + " comments</div>\n"), __p += "\n</section><!-- close comments -->";
			return __p
		}, templates.commentsButton = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", skipToContentId && (__p += '\n<a class="visually-hidden" href="#' + (null == (__t = skipToContentId) ? "" : __t) + '">Continue reading the main story</a>\n'), __p += '\n<i class="icon">\n', count > 0 ? (__p += '\n<span class="button-text">\n<span class="count">' + (null == (__t = count) ? "" : __t) + "</span>\n", showUnits && (__p += '\n<span class="units">' + (null == (__t = units) ? "" : __t) + "</span>\n"), __p += "\n</span>\n") : defaultText && (__p += '\n<span class="button-text no-comments">\n<span class="default">' + (null == (__t = defaultText) ? "" : __t) + "</span>\n</span>\n"), __p += "\n</i>";
			return __p
		}, templates.commentsButtonThemeSpeechBubbleXSmall = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<span class="button-meta">\n<i class="icon"></i>\n', count > 0 ? __p += '\n<span class="button-text">\n<span class="count">' + (null == (__t = count) ? "" : __t) + "</span>\n</span>\n" : defaultText && (__p += '\n<span class="button-text no-comments">\n<span class="default">' + (null == (__t = defaultText) ? "" : __t) + "</span>\n</span>\n"), __p += "\n</span>";
			return __p
		}, templates.commentsPanel = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="panel-controls">\n<button class="button close-panel-button">\n<i class="icon"></i><span class="visually-hidden">Close this panel</span>\n</button>\n</div>\n<div class="panel-content">\n</div>';
			return __p
		}, templates.flag = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) {
				__p += '<form class="flag-form">\n';
				var i = 0;
				_.each(reasons, function(e, t) {
					i += 1, __p += '\n<div class="control checkbox-control control-' + (null == (__t = i % 2 === 1 ? "odd" : "even") ? "" : __t) + '">\n<div class="field-container">\n<input type="checkbox" value="' + (null == (__t = t) ? "" : __t) + '" id="flag-checkbox-' + (null == (__t = e) ? "" : __t) + '" name="flag-checkbox-' + (null == (__t = e) ? "" : __t) + '" class="flag-input checkbox" tabindex="' + (null == (__t = i) ? "" : __t) + '" />\n</div>\n<div class="label-container">\n<label for="flag-checkbox-' + (null == (__t = e) ? "" : __t) + '" class="checkbox-label">' + (null == (__t = t) ? "" : __t) + "</label>\n</div>\n</div><!-- close control -->\n"
				}), __p += '\n<div class="control last-control">\n<button id="flag-send-button" class="button flag-button" tabindex="' + (null == (__t = i += 1) ? "" : __t) + '" >Flag</button>\n<button id="flag-cancel-button" class="button cancel-button" tabindex="' + (null == (__t = i += 2) ? "" : __t) + '">Cancel</button>\n</div>\n</form>'
			}
			return __p
		}, templates.form = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<form class="comment-form" role="form">\n', "0" !== user.getUserId() && (__p += '<div class="control header-control layout-horizontal secondary-control">', user.getName() && user.getLocation() ? (__p += "<!-- registered/logged in commenter -->\n", user.hasAvatar() && (__p += '\n<div class="avatar"><img src="' + (null == (__t = user.getAvatar()) ? "" : __t) + '"/></div>\n'), __p += '\n<div class="commenter-meta">\n<h2 class="commenter">' + (null == (__t = user.getName()) ? "" : __t) + '</h2>\n<div class="form-hint-container">\n<p class="form-hint"><a href="javascript:;" class="user-profile-button">Edit Profile</a></p>\n<p class="form-hint">Not You? <a href="' + (null == (__t = user.get("wwwhost") + "/logout") ? "" : __t) + '">Log Out</a></p>\n</div>\n<p class="commenter-location">' + (null == (__t = user.getLocation()) ? "" : __t) + "</p>\n</div>") : (__p += "\n<!-- first time commenter -->", user.hasAvatar() && (__p += '\n<div class="avatar"><img src="' + (null == (__t = user.getAvatar()) ? "" : __t) + '"/></div>\n'), __p += '<div class="control">\n<div class="label-container visually-hidden">\n<label for="commenter-input" id="commenter-input-label">Full Name</label>\n</div>\n<div class="field-container">\n<input type="text" id="commenter-input" name="commenter-input" class="commenter-input text" placeholder="Full Name" tabindex="3" autocomplete="off" aria-labelledby="commenter-input-label" aria-required="true"/>\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-name-description"><i class="icon"></i><span class="visually-hidden" id="clear-name-description">Clear this text input</span></button>\n</div>\n</div><!-- close control --><div class="control">\n<div class="label-container visually-hidden">\n<label for="commenter-location-input" id="commenter-location-input-label">Location</label>\n</div>\n<div class="field-container">\n<input type="text" id="commenter-location-input" name="commenter-location-input" class="commenter-location-input text" placeholder="Location" tabindex="3" autocomplete="off" aria-labelledby="commenter-location-input-label" aria-required="true"/>\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-location-description"><i class="icon"></i><span class="visually-hidden" id="clear-location-description">Clear this text input</span></button>\n</div>\n</div><!-- close control -->'), __p += "\n</div><!-- close control -->"), __p += '<div class="control input-control primary-control">\n<div class="label-container visually-hidden">\n<label class="commenter-gateway-input-label" for="commenter-gateway-input" id="commenter-gateway-input-label">' + (null == (__t = gatewayLabel) ? "" : __t) + '</label>\n</div>\n<div class="field-container">\n<input type="text" id="commenter-gateway-input" name="commenter-gateway-input" class="commenter-gateway-input comment-primary" placeholder="' + (null == (__t = gatewayPlaceholder) ? "" : __t) + '" tabindex="3" aria-labelledby="commenter-gateway-input-label" aria-required="false" />\n</div>\n</div><!-- close control -->', parseInt(user.getUserId(), 10) > 0 && (__p += '\n<div class="control textarea-control secondary-control">\n<p id="comment-character-count" class="comment-character-count">1500</p>\n<div class="field-container">\n<textarea id="comment-textarea" class="comment-textarea textarea" tabindex="3" aria-required="true"></textarea>\n<div class="error-container">\n<div id="comment-form-error" class="comment-form-error">\n<p class="character-error hidden">Please ensure that your comment is under 1500 characters, and then click Submit.</p>\n<p class="user-info-error hidden">Please enter your location and name.</p>\n<p class="server-error hidden">An error has occurred, please try again later.</p>\n</div>\n</div>\n</div>\n</div><!-- close control --><div class="control footer-control layout-horizontal secondary-control">\n<div class="control checkbox-control">\n<div class="field-container">\n<input type="checkbox" id="comment-notify" class="comment-notify" name="comment-notify" class="checkbox" tabindex="3"\n' + (null == (__t = user.getNotify() ? 'checked="checked"' : "") ? "" : __t) + ' aria-labelledby="comment-notify-label" aria-required="false" />\n</div><!-- close field-container -->\n<div class="label-container">\n<label class="checkbox-label" for="comment-notify" id="comment-notify-label">Email me when my comment is published.</label>\n<p class="form-description">Comments are moderated. <a href="http://www.nytimes.com/content/help/site/usercontent/usercontent.html">FAQ &raquo;</a></p>\n</div>\n</div><!-- close control -->\n<div class="control button-control">\n<span id="comment-submit-loader" class="comment-submit-loader hidden"><img src=""></span><!-- this may end up a data uri in the less -->\n<button type="submit" id="comment-submit-button" class="button comment-submit-button disabled" disabled="disabled" tabindex="3">Submit</button>\n</div><!-- close control -->\n</div><!-- close control -->'), __p += "\n</form>", confirmPost && (__p += '\n<div class="comment-confirmation">\n<p class="confirmation">', __p += message.commentNotify ? " Thank you for your submission. We'll notify you at " + (null == (__t = user.getEmail()) ? "" : __t) + " when your comment has been approved.\n" : "\nThank you for your submission. Your comment will appear once it has been approved.\n", __p += '</p>\n<article class="comment">\n', showAvatar && user.hasAvatar() && (__p += '\n<div class="avatar"><img src="' + (null == (__t = user.getAvatar()) ? "" : __t) + '"/></div>\n'), __p += '\n<header>\n<h2 class="commenter">' + (null == (__t = user.getName()) ? "" : __t) + "</h2>\n", showLocation && (__p += '\n<span class="commenter-location">' + (null == (__t = user.getLocation()) ? "" : __t) + "</span>\n"), __p += '\n<time class="comment-time" datetime="">Pending Approval</time>\n</header>\n<p class="comment-text">' + (null == (__t = message.commentBody) ? "" : __t) + "</p>\n</article>\n</div>\n"), __p += "";
			return __p
		}, templates.peek = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", skipToContentId && (__p += '\n<a class="visually-hidden" href="#' + (null == (__t = skipToContentId) ? "" : __t) + '">Continue reading the main story</a>\n'), __p += "\n", header && (__p += '\n<header>\n<h2 class="module-heading"><i class="icon"></i>' + (null == (__t = header) ? "" : __t) + "</h2>\n</header>\n"), __p += '\n<div class="comments-view">\n', _.each(posts, function(e, t) {
				isPrompt ? __p += '\n<h3 class="comment-prompt">' + (null == (__t = e) ? "" : __t) + '</h3>\n<p class="user-action"><a href="javascript:">Share your thoughts &raquo;</a></p>\n' : t < maxPosts && (__p += '\n<article class="comment" data-permid="' + (null == (__t = e.getPermId()) ? "" : __t) + '">\n<header>\n<h2 class="commenter">' + (null == (__t = e.getAuthor()) ? "" : __t) + "</h2>\n", showDate && (__p += '\n<time class="comment-time" datetime="">' + (null == (__t = e.get(dateFormat + "Date")) ? "" : __t) + "</time>\n"), __p += "\n", showLocation && (__p += '\n<span class="commenter-location">' + (null == (__t = e.getLocation()) ? "" : __t) + "</span>\n"), __p += '\n</header>\n<p class="comment-text">' + (null == (__t = isExcerpt ? e.get("commentExcerpt") : e.get("commentBody" + (maxChars || ""))) ? "" : __t) + "</p>\n</article>\n")
			}), __p += "\n</div><!-- close comments-view -->\n", showFooter && (__p += '\n<footer>\n<ul class="comment-actions">\n<li class="comment-count">\n', __p += showCount ? "\n" + (null == (__t = count) ? "" : __t) + " Comment" + (null == (__t = 1 === count ? "" : "s") ? "" : __t) + "\n" : "\nSee All Comments\n", __p += "\n</li>\n", isOpen && (__p += '\n<li class="comment-reply">Write a comment</li>\n'), __p += "\n</ul>\n</footer>\n"), __p += "";
			return __p
		}, templates.post = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<article class="comment ' + (null == (__t = isSubThread ? "threaded-comment" : "") ? "" : __t) + " " + (null == (__t = post.isPicked() ? "picked-comment" : "") ? "" : __t) + " " + (null == (__t = post.isNyt() ? "reporter-comment" : "") ? "" : __t) + '" data-id="' + (null == (__t = post.getId()) ? "" : __t) + '" data-url= ' + (null == (__t = view.model.getAsset() + "#permid=" + post.getPermId()) ? "" : __t) + ' data-parentid="' + (null == (__t = post.getParentId()) ? "" : __t) + '" data-sequence="' + (null == (__t = post.getSequence()) ? "" : __t) + '"  data-permID="' + (null == (__t = post.getPermId()) ? "" : __t) + '" tabindex="30">\n', post.isPicked() && (__p += '\n<i class="icon sprite-icon nyt-pick-icon"><span class="visually-hidden">NYT Pick</span></i>\n'), __p += "\n", showAvatar && post.hasAvatar() && (__p += '\n<div class="avatar"><img src="' + (null == (__t = post.getAvatar()) ? "" : __t) + '"/></div>\n'), __p += '\n<header>\n<h3 class="commenter">' + (null == (__t = post.getAuthor()) ? "" : __t) + "</h3>\n", (post.isTrusted() || post.isNyt()) && (__p += '\n<span class="commenter-credentials"><i class="icon sprite-icon ' + (null == (__t = post.isTrusted() ? "trusted-icon" : "t-icon") ? "" : __t) + '"><span class="visually-hidden">' + (null == (__t = post.isTrusted() ? "is a trusted commenter" : "is an NYTimes reporter") ? "" : __t) + "</span></i></span>\n"), __p += "\n", post.isNyt() ? __p += '\n<span class="commenter-title">' + (null == (__t = post.getUserTitle()) ? "" : __t) + "</span>\n" : showLocation && (__p += '\n<span class="commenter-location">' + (null == (__t = post.getLocation()) ? "" : __t) + "</span>\n"), __p += '\n<a href="' + (null == (__t = view.model.getAsset() + "#permid=" + post.getPermId()) ? "" : __t) + '"class="comment-time" datetime="">' + (null == (__t = post.get(dateFormat + "Date")) ? "" : __t) + '</a>\n</header>\n<p class="comment-text">' + (null == (__t = post.get("commentBody")) ? "" : __t) + '</p>\n<footer>\n<ul class="comment-actions">\n<li class="comment-flag login-modal-trigger ' + (null == (__t = post.isReported() ? "comment-reported" : "") ? "" : __t) + '"><i class="icon sprite-icon"></i>' + (null == (__t = post.isReported() ? "Reported" : "Flag") ? "" : __t) + "</li>\n", "all" !== filter && !isPermalink && post.getParentId() > 0 && (__p += '\n<li class="comment-parent" data-permid="' + (null == (__t = post.getParentPermId()) ? "" : __t) + '">In Reply to ' + (null == (__t = post.getParentAuthor()) ? "" : __t) + "</li>\n"), __p += "\n", isOpen && (__p += '\n<li class="comment-reply login-modal-trigger">Reply</li>\n'), __p += '\n<li class="comment-recommend login-modal-trigger ' + (null == (__t = post.isRecommended() ? "recommended" : "") ? "" : __t) + '">', post.getRecommendations() > 0 && (__p += "<span class='recommend-count'><i class=\"icon sprite-icon\"></i>" + (null == (__t = post.getRecommendations()) ? "" : __t) + "</span>"), __p += "" + (null == (__t = post.isRecommended() ? "Recommended" : "Recommend") ? "" : __t) + '</li>\n<li class="sharetools"><span class="facebook-share" data-share="facebook"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Facebook</span></span><span class="twitter-share" data-share="twitter"><i class="icon sprite-icon"></i><span class="visually-hidden">Share this comment on Twitter</span></span></li>\n</ul>\n</footer>\n<div class="comment-form-control form-control reply-form-control active"></div>\n', post.hasReplies() && (__p += '\n<div class="thread"></div>\n', post.hasAdditionalReplies() && !isPermalink && "all" === filter && (__p += '\n<div class="comments-expand comments-subthread-expand">See All Replies <i class="icon"></i></div>\n'), __p += "\n"), __p += "\n</article>";
			return __p
		}, templates.verified = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<a class="faq-link" href="http://www.nytimes.com/content/help/site/usercontent/verified/verified-commenters.html">\nVerified Commenters\n</a>\ncan leave comments on NYTimes.com without initial moderation. Verified status is earned based on a history of quality comments.';
			return __p
		}, templates
	}), define("shared/community/views/comments-panel", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/community/templates", "foundation/hosts"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			className: "comments-panel",
			template: n.commentsPanel,
			events: {
				"click .close-panel-button": "close",
				"mousewheel #comments": "handleMouseScroll",
				"DOMMouseScroll #comments": "handleMouseScroll"
			},
			nytEvents: {
				"nyt:community-commentspanel-open": "open",
				"nyt:community-commentspanel-close": "close",
				"nyt:messaging-critical-alerts-move-furniture": "movePanelForAlerts",
				"nyt:messaging-suggestions-move-furniture": "movePanelForAlerts"
			},
			defaultSettings: {},
			initialize: function(i) {
				this.settings = t.extend({}, this.defaultSettings, i), this.$main = e("#main"), this.$story = e("#story"), this.$commentsButton = e(".comments-button"), this.expandIsExplicit = !1, this.pageManager.isDomReady() ? this.render() : this.subscribe("nyt:page-ready", this.render)
			},
			render: function() {
				var t = this;
				return this.$el.hide().addClass(this.settings.className).html(this.template(this.settings)), this.$story.append(this.$el), this.$body.on("click", function(i) {
					e(i.target).hasClass("comments-panel-trigger") && t.open()
				}), this
			},
			open: function() {
				return this.pageManager.isMobile() && this.pageManager.getViewport().width < this.$el.outerWidth() ? void(window.location.href = this.toMobileWebURL()) : (this.$commentsButton.each(function(t, i) {
					e(i).hasClass("theme-speech-bubble-small") || e(i).hasClass("theme-speech-bubble-x-small") ? e(i).addClass("active") : e(i).hide()
				}), this.$html.addClass("comments-panel-opened"), this.$el.show().animate({
					opacity: 1,
					right: this.handleRightOffset()
				}, 250), this.handlePanelSettings(), this.subscribe("nyt:page-breakpoint", this.handlePanelSettings), void this.broadcast("nyt:comments-panel-opened"))
			},
			close: function() {
				var t = this.pageManager.getMeta("isCommentsOpen");
				this.$el.animate({
					opacity: 0,
					right: "-40px"
				}, 250, function() {
					e(this).hide()
				}), this.$commentsButton.each(function(i, n) {
					var s = e(n);
					s.hasClass("theme-speech-bubble-small") || e(n).hasClass("theme-speech-bubble-x-small") ? s.removeClass("active") : s.hasClass("theme-speech-bubble") && !t ? s.hide() : s.show()
				}), this.$html.removeClass("comments-panel-opened"), this.stopSubscribing("nyt:page-breakpoint", this.handlePanelSettings), this.stopSubscribing("nyt:page-resize", this.adjustRightOffset), this.broadcast("nyt:comments-panel-closed")
			},
			scrollToTarget: function(e, t) {
				this.$body.animate({
					scrollTop: e.offset().top - t
				}, 500)
			},
			adjustRightOffset: function() {
				this.$el.css("right", this.$shell.offset().left + 1)
			},
			handleRightOffset: function() {
				var e, t = this.pageManager.getCurrentBreakpoint();
				return t >= 10070 ? (e = this.$shell.offset().left + 1, this.subscribe("nyt:page-resize", this.adjustRightOffset)) : (e = "0", this.stopSubscribing("nyt:page-resize", this.adjustRightOffset)), e
			},
			handlePanelSettings: function() {
				this.$el.css("right", this.handleRightOffset()), this.broadcast("nyt:community-panel-positioned")
			},
			movePanelForAlerts: function(e) {
				e(this.$el)
			},
			handleMouseScroll: function(e) {
				var t = e.originalEvent,
					i = e.currentTarget,
					n = t.wheelDelta || -t.detail,
					s = i.scrollHeight - i.scrollTop === i.clientHeight,
					a = 0 === i.scrollTop;
				return s && 0 > n || a && n > 0 ? (e.preventDefault(), !1) : !0
			},
			toMobileWebURL: function() {
				return s.mobileWeb + "/redirect?target=comments&to-mobile=" + encodeURIComponent(this.pageManager.getCanonical())
			}
		});
		return a
	}), define("shared/community/views/utils-mixin", ["jquery/nyt", "underscore/nyt"], function(e, t) {
		"use strict";
		var i = {
			request: function() {
				this.broadcast("nyt:community-request", this.settings.asset, this, this.settings)
			},
			getPosts: function(e) {
				this.model = e, this.model.load(this.settings, this)
			},
			toQuery: function(e) {
				return e = e || {}, t.extend({}, this.settings, e)
			},
			openPanel: function(e) {
				var i;
				this.broadcast("nyt:community-commentspanel-open", e), i = t.extend({
					module: "Comments",
					action: "Click",
					eventName: "OpenCommentsPanel"
				}, this.getTrackingParams()), this.trackingTrigger("comments-open-panel", i), this.trackingComscorePVC(i)
			},
			truncate: function(e) {
				var i = this,
					n = function(e, t) {
						return e.length <= t ? e : " " !== e.charAt(t) && "." !== e.charAt(t) ? n(e, t - 1) : e.substr(0, t) + "..."
					};
				"undefined" != typeof e && (e = e.slice ? e : [e], t.each(e, function(e) {
					e.set("commentBody" + i.settings.maxChars, n(i.stripHtml(e.getBody()), i.settings.maxChars))
				}))
			},
			stripHtml: function(t) {
				return "string" == typeof t ? e("<p>" + t + "</p>").text() : "" + t
			},
			formatDefaultDate: function(e) {
				return e
			},
			formatDate: function(e) {
				"undefined" != typeof e && (e = e.slice ? e : [e]), t.each(e, function(e) {
					var t = e.getDate();
					t = "interval" === this.settings.dateFormat ? this.prettyDate(t) : this.formatDefaultDate(t), e.set(this.settings.dateFormat + "Date", t), e.hasReplies() && this.formatDate(e.getReplies())
				}, this)
			},
			getTrackingParams: function() {
				var e = {},
					i = {
						"theme-kicker": {
							region: "Header",
							version: "CommentsHeader"
						},
						"button-masthead": {
							region: "TopBar",
							version: "CommentsTopBar"
						},
						"selected-comment-marginalia": {
							region: "Marginalia",
							version: "RecentComments"
						},
						"featured-comment-marginalia": {
							region: "Body",
							version: "FeaturedComments"
						},
						"comment-prompt-marginalia": {
							region: "Body",
							version: "CommentsPrompt"
						},
						"theme-speech-bubble": {
							region: "Body",
							version: "CommentsBubble"
						},
						"comments-panel": {
							region: "Body",
							version: "CommentsPanel"
						},
						"theme-story-footer": {
							region: "EndOfArticle",
							version: "ShareTools"
						},
						"story-meta-footer-comments-button": {
							region: "Header",
							version: "CommentsHeader"
						}
					},
					n = this.$el.attr("class").split(" ");
				return t.each(n, function(t) {
					i.hasOwnProperty(t) && (e = i[t])
				}), this.trackingBaseData.contentCollection = this.trackingBaseData.contentCollection || this.pageManager.getMeta("article:section"), e
			}
		};
		return i
	}), define("shared/community/views/comments-button", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/community/views/utils-mixin", "shared/community/templates"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend(t.extend({}, n, {
			template: s.button,
			events: {
				click: "openPanel"
			},
			defaultSettings: {
				units: "Comments",
				showUnits: !0,
				defaultText: null,
				hideWhenClosed: !1
			},
			commentsCount: 0,
			initialize: function(e) {
				this.settings = t.extend({}, this.defaultSettings, e), this.$el.hasClass("theme-speech-bubble-x-small") || this.$el.hasClass("theme-kicker") ? this.template = s.commentsButtonThemeSpeechBubbleXSmall : this.$el.hasClass("comments-button") && (this.template = s.commentsButton), this.subscribeOnce(this, "nyt:community-loaded", this.render), this.isTransparentMasthead() && this.subscribe("nyt:masthead-storytheme", this.updateCommentsButtonTemplate),
					this.request()
			},
			render: function(e) {
				var i, n = e.getNumberOfPosts(),
					s = this.$el.attr("data-skip-to-para-id");
				return this.commentsCount = n, 1 === n && (this.settings.units = "Comment"), i = t.extend({}, this.settings, {
					count: n,
					skipToContentId: s
				}), this.model || (this.model = e, this.listenTo(e, "change:total-all", this.render)), !this.model.isOpen() && this.settings.hideWhenClosed ? this.$el.hide() : (this.$el.html(this.template(i)), this)
			},
			isTransparentMasthead: function() {
				return this.pageManager.$masthead.is(".masthead-theme-transparent, .masthead-theme-transparent-ffffff")
			},
			updateCommentsButtonTemplate: t.debounce(function(e) {
				var t;
				t = e ? this.pageManager.$masthead.find(".theme-speech-bubble-small").append(s.commentsButton({
					skipToContentId: !1,
					count: this.commentsCount,
					showUnits: !1,
					units: "",
					defaultText: ""
				})) : this.pageManager.$masthead.find(".theme-speech-bubble-x-small").append(s.commentsButtonThemeSpeechBubbleXSmall({
					count: this.commentsCount
				})), t.hide().fadeIn(300).end()
			})
		}, 200));
		return a
	}), define("shared/community/views/comments-peek", ["underscore/nyt", "foundation/views/base-view", "shared/community/views/utils-mixin", "shared/community/templates"], function(e, t, i, n) {
		"use strict";
		var s = t.extend(e.extend({}, i, {
			className: "comments-peek",
			template: n.peek,
			events: {
				click: "openWithPermId"
			},
			defaultSettings: {
				header: null,
				hideOnOpen: !0,
				maxPosts: 3,
				filter: "all",
				sort: "newest",
				showCount: !1,
				showDate: !0,
				dateFormat: "standard",
				isExcerpt: !1,
				isPrompt: !1,
				showLocation: !0,
				showFooter: !0,
				maxChars: 140,
				defaultPrompt: "Share your thoughts."
			},
			initialize: function(t) {
				this.settings = e.extend({}, this.defaultSettings, t), this.settings.isPrompt && (this.settings.showFooter = !1, this.settings.showDate = !1), this.settings.isExcerpt && (this.settings.showDate = !1, this.settings.showCount = !0), this.subscribe(this, "nyt:community-loaded", this.getPosts), this.subscribeOnce(this, "nyt:community-thread-loaded", this.render), this.request()
			},
			render: function(t) {
				var i, n, s = this.$el.attr("data-skip-to-para-id");
				if (this.settings.isExcerpt) {
					if (0 === this.model.getExcerpt().length) return this.$el.addClass("hidden");
					t = [this.model.getExcerpt()], this.listenTo(this.model, "change:excerpt", this.render)
				} else if (this.settings.isPrompt) {
					if (!this.model.isOpen() || this.model.getPrompt().toLowerCase() === this.settings.defaultPrompt.toLowerCase()) return this.$el.addClass("hidden");
					t = [this.model.getPrompt()], n = 1 === this.model.getNumberOfPosts() ? "Comment" : "Comments", this.settings.header = this.model.getNumberOfPosts() + " " + n
				} else if (this.model.getNumberOfPosts() <= this.settings.maxPosts) return this.$el.addClass("hidden");
				return i = e.extend({}, this.settings, {
					posts: t,
					count: this.model.getNumberOfPosts(),
					isOpen: this.model.isOpen(),
					skipToContentId: s
				}), this.settings.maxChars > 0 && !this.settings.isPrompt && !this.settings.isExcerpt && this.truncate(i.posts), this.settings.showDate && this.formatDate(i.posts), this.$el.html(this.template(i)), this.broadcast("nyt:community:peek-rendered"), this
			},
			openWithPermId: function() {
				var e = this.$(".comment");
				1 === e.length ? this.openPanel(e.data("permid")) : this.openPanel()
			}
		}));
		return s
	}), define("shared/ad/collections/ads", ["backbone/nyt", "underscore/nyt", "foundation/collections/base-collection", "foundation/hosts", "shared/ad/models/ad"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			deliveryProofParams: ["adxforce", "debug"],
			adForceLookup: {
				leaderboard: "728x90testnyt5",
				billboard: "970x90horiztest",
				pushdown: "testnyt5pushdown",
				halfpage: "mediamindhalfexptest",
				xxl: "nyt5xxltestpickletag",
				bigad: "middlerighttest"
			},
			initialize: function(e, i) {
				return i ? (this.options = i, t.isUndefined(this.pageManager.getMeta("adxPage")) ? this.host = this.pageManager.getUrlParam("adx_campaign") || i.adx_campaign || "www.nytimes.com" : (this.host = "", this.options.page = this.pageManager.getMeta("adxPage")), this.interstitial = i.interstitial ? 1 : 0, void this.setPageParameter()) : !1
			},
			setPageParameter: function() {
				var e;
				this.options.page || (e = location.pathname, e = e.replace(/\d{4}/, "yr").replace(/\d{2}/, "mo").replace(/\d{2}/, "day"), this.options.page = this.host + e)
			},
			model: s,
			url: n.ADXHost + "/adx/bin/adxrun.html",
			sync: function(i, n, s) {
				var a = this,
					o = ["nyt5"];
				return s.dataType = "jsonp", s.jsonp = "jsonp", s.data = {
					page: a.options.page,
					positions: a.options.positions.join(","),
					autoconfirm: a.options.autoconfirm || 0,
					v: 3,
					cpp: 1,
					attributes: "nyt5",
					interstitials: this.interstitial,
					secureClientside: 1
				}, this.options.cpp === !1 && (delete s.data.interstitials, delete s.data.cpp), s.data = a.assignDeliveryProofParams(s.data), "undefined" != typeof this.pageManager.getUrlParam("hp") && o.push("hp"), "undefined" != typeof this.pageManager.getUrlParam("src") && o.push("src-" + this.pageManager.getUrlParam("src")), "undefined" != typeof a.options.keywords && (o = t.union(o, a.chainKeywords(a.options.keywords))), s.data.keywords = t.filter(o, function(e) {
					return !("undefined" == typeof e || "" === e)
				}).join(","), e.sync(i, n, s)
			},
			assignDeliveryProofParams: function(e) {
				var i, n, s = {};
				for (i = this.deliveryProofParams.length - 1; i >= 0; i -= 1) n = this.pageManager.getUrlParam(this.deliveryProofParams[i]), "undefined" != typeof n && (s[this.deliveryProofParams[i]] = n || "1");
				return t.extend(e, s)
			},
			chainKeywords: function(e) {
				var t, i, n = e.length,
					s = [],
					a = this;
				for (t = 0; n > t; t += 1) i = a.adForceLookup[e[t]], s.push(i || e[t]);
				return "1" === this.pageManager.getUrlParam("rico") && s.push(this.pageManager.getUrlParam("keywords")), s
			},
			parse: function(e) {
				var i = e.ads;
				return i = t.map(i, function(e, t) {
					var i = e.isInlineSafe;
					return e.name = t, e.isInlineSafe = "Y" === i || "true" === i, e
				}), "undefined" != typeof this.pageManager.getUrlParam("debug") && (window.adx_debug_output = e, console.log("adx debug page: ", this.options.page), console.log("adx debug positions: ", this.options.positions.join(",")), console.log("adx debug output: ", e), console.log("adx debug keywords: ", this.chainKeywords(this.options.keywords).join(","))), i
			},
			getConfirmPixel: function() {
				return this.confirmPixel ? this.confirmPixel.creative : void 0
			}
		});
		return a
	}), define("shared/ad/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.iFrameStyleSheet = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<!--\nDEPRECATED - DO NOT USE/MODIFY - USE SHARED/ADLIBRARY INSTEAD\n-->\n<style type="text/css">\nbody {\nmargin: 0;\noverflow: hidden;\n}a img {\nborder: none;\n}\n</style>';
			return __p
		}, templates.interstitialModal = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<!--\nDEPRECATED - DO NOT USE/MODIFY - USE SHARED/ADLIBRARY INSTEAD\n-->\n<div id="Interstitial" class="ad interstitial-ad"></div><p class="user-action dismiss-button">Continue &raquo;</p>';
			return __p
		}, templates.ribbonInterstitial = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<!--\nDEPRECATED - DO NOT USE/MODIFY - USE SHARED/ADLIBRARY INSTEAD\n-->\n<div class="ribbon-interstitial-ad-overlay">\n<h4 class="ad-heading"> Advertisement </h4>\n<div id="RibbonInterstitial" class="ad ribbon-interstitial-ad"> </div>\n</div>';
			return __p
		}, templates
	}), define("shared/ad/views/ads", ["underscore/nyt", "jquery/nyt", "foundation/views/base-view", "foundation/views/ad-view-manager", "shared/ad/collections/ads", "shared/ad/templates", "shared/modal/views/modal"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = i.registerView("ads").extend({
			el: ".ad",
			template: a,
			pushdownWidth: "970",
			billboardHeight: "90",
			navBreakPoint: 10040,
			positions: null,
			blocking: !1,
			adShown: {},
			initialize: function(t) {
				e.bindAll(this, "completeInterstitial", "renderAd"), this.options = t || this.options || {}, this.positions = [], this.preInitialize(), this.local(this, "nyt:ads-pre-initialize"), this.detectTragedy(), this.setAdParametersOnOptions(), this.scope = this.options.scope || this.scope, this.confirm = !0, this.ads = new s([], this.options), this.subscribe(this.ads, "sync", this.receiveAds), this.secondaryIframeClass = "frame-for-" + this.scope, this.listenTo(this.pageManager, "nyt:page-breakpoint", this.responsive), this.postInitialize(), this.local(this, "nyt:ads-post-initialize"), this.subscribe("nyt:ads-new-placement", this.handleRemoteAdRequest), this.subscribe("nyt:ads-fire-ribbon-interstitial", this.fireRibbonInterstitial), this.subscribe("nyt:slideshow-ad", this.fireSlideShowAd), this.addAmazonKeywords ? this.getAmazonAds() : this.requestAds()
			},
			getAmazonAds: function() {
				window.amznads = {
					updateAds: function(t) {
						window.amazonAdData = t.ads, window.amazonAdSlots = e.keys(window.amazonAdData)
					},
					renderAd: function(e, t) {
						var i, n;
						window.amazonAdData && window.amazonAdData[t] ? (e.write(window.amazonAdData[t]), e.close()) : (i = {
							c: "dtb",
							src: "3030",
							kvmismatch: 1,
							pubReturnedKey: t,
							aaxReturnedKeys: window.amazonAdSlots,
							cb: Math.round(1e7 * Math.random()),
							u: window.encodeURIComponent(window.location.host + window.location.pathname),
							ua: encodeURIComponent(window.navigator.userAgent)
						}, n = window.encodeURIComponent(JSON.stringify(i)), e.write('<img src="//aax.amazon-adsystem.com/x/px/p/0/' + n + '"/>'), e.close())
					}
				}, this.getAmazonKeywordsAndRequestAds()
			},
			getAmazonKeywordsAndRequestAds: function() {
				var e = this,
					i = "3030",
					n = encodeURIComponent(document.location);
				try {
					n = encodeURIComponent("" + window.top.location)
				} catch (s) {
					t.noop()
				}
				t.ajax({
					url: "//aax.amazon-adsystem.com/e/dtb/bid?src=" + i + "&u=" + n + "&cb=" + Math.round(1e7 * Math.random()),
					dataType: "script"
				}).done(function() {
					e.addAmazonKeywords()
				}).always(function() {
					e.requestAds()
				})
			},
			preInitialize: t.noop,
			postInitialize: t.noop,
			responsive: t.noop,
			setHtmlClasses: t.noop,
			requestAds: function() {
				this.options.response ? (this.ads.reset(this.ads.parse(this.options.response)), this.ads.trigger("sync")) : this.ads.fetch()
			},
			receiveAds: function() {
				this.hasInterstitial() || this.checkAds()
			},
			resizeTopAd: e.debounce(function() {
				var e, i = this.ads.findWhere({
					name: "TopAd"
				});
				i && (e = i.get("height"), e && 90 > e && t("#TopAd").css("min-height", parseInt(e, 10)))
			}, 1e3),
			checkAds: function() {
				var i, n, s, a, o, r = this;
				for (this.removeAds(), i = this.getReturnedAdNames(this.pageManager.isDomReady()), this.pageManager.isDomReady() || this.subscribe("nyt:page-ready", function() {
						r.getReturnedAdNames(!0)
					}), i && i.length > 0 && (this.pageManager.getMeta("ads_adNames") || this.pageManager.setMeta("ads_adNames", this.returnAdNames())), e.indexOf(i, "TopAd") < 0 ? (o = t("#TopAd"), 0 === o.length && o.addClass("hidden")) : r.resizeTopAd(), a = this.getPositions(), n = 0, s = a.length; s > n; n += 1) t("#" + a[n]).toggleClass("hidden", r.isAdUnavailable(i, a[n]));
				e.indexOf(this.options.positions, "Middle1C") >= 0 && !this.ads.findWhere({
					name: "Middle1C"
				}) && t("#TopNavAd, .search-flyout-panel .ad").addClass("hidden"), e.defer(function() {
					r.broadcast("nyt:ads-rendered", r)
				}), r.setHtmlClasses(), e.delay(function() {
					r.loadGoogleAdScript()
				}, 1200)
			},
			loadGoogleAdScript: function() {
				var e, i, n;
				0 === t("#SponLink, #SponLinkA, #HPSponLink, #TopAd1, #MiddleRightN").length || this.pageManager.getMeta("googleAdScriptInjected") || (e = "script", i = document.createElement(e), n = document.getElementsByTagName(e)[0], i.src = "http://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", n.parentNode.insertBefore(i, n), this.pageManager.setMeta("googleAdScriptInjected", "true"))
			},
			renderAd: function(e) {
				e.page = e.page || this.ads.options.page, e.frameStyle = e.frameStyle || this.template.iFrameStyleSheet(), e.secondaryIframeClass = e.secondaryIframeClass || this.secondaryIframeClass, n.render(e)
			},
			renderAdByPositionName: function(i, n) {
				var s = t("#" + i);
				return n || (n = this.ads.where({
					name: i
				})[0]), s.length && n || "ADX_CLIENTSIDE" === i ? (this.isCreativeBlank(n) || s.removeClass("hidden"), e.defer(this.renderAd, {
					model: n,
					el: s
				}), !0) : !1
			},
			handleRemoteAdRequest: function(e) {
				this.ads.length > 0 && this.renderAdByPositionName(e)
			},
			getPositions: function() {
				return this.options.positions
			},
			detectTragedy: function() {
				var e = this.pageManager.getMeta("ad_sensitivity");
				e && (this.options.page = "www.nytimes.com/" + e)
			},
			returnAdNames: function() {
				return this.ads.pluck("name")
			},
			cleanHtmlClasses: function() {
				this.htmlClasses && this.$html.removeClass(e.values(this.htmlClasses).join(" "))
			},
			isDirectlySold: function(e) {
				var t = this.ads.where({
					name: e
				})[0].attributes.isDirectlySold;
				return "true" === t
			},
			returnAdParametersObject: function() {
				var t = this.pageManager.getUrlParam("ad-keywords"),
					i = this.pageManager.getUrlParam("ad-positions");
				return {
					keywords: e.isString(t) ? [t] : t,
					positions: e.isString(i) ? [i] : i
				}
			},
			setAdParametersOnOptions: function() {
				var t = this.returnAdParametersObject();
				this.options.keywords = e.union(this.options.keywords, t.keywords), t.positions && (this.options.positions = t.positions)
			},
			isPlaceholderInViewport: function(e) {
				var i;
				return !e || e && 0 === e.length ? !1 : (i = e.get(0).getBoundingClientRect(), i.top + e.height() >= 0 && i.left + e.width() >= 0 && i.bottom - e.height() <= t(window).height() && i.right - e.width() <= t(window).width())
			},
			isCreativeBlank: function(e) {
				var t = e.get("classification");
				return "blank" === t || "blank-but-count-imps" === t
			},
			handleApplicationAd: function(e) {
				var t, i;
				return t = e.get("name"), i = this.renderAdByPositionName(t, e)
			},
			getReturnedAdNames: function(e) {
				var t = this,
					i = [];
				return e = "undefined" != typeof e ? e : !1, this.ads.length > 0 && this.ads.each(function(n) {
					e ? t.handleApplicationAd(n) ? i.push(n.get("name")) : t.confirm = !1 : i.push(n.get("name"))
				}), i
			},
			isAdUnavailable: function(t, i) {
				return e.indexOf(t, i) < 0 || this.isCreativeBlank(this.ads.where({
					name: i
				})[0])
			},
			removeAds: function() {
				t("." + this.secondaryIframeClass).remove()
			},
			isHalfPage: function(e, t) {
				return 300 === parseInt(e, 10) && 600 === parseInt(t, 10)
			},
			isPushdown: function(e, t) {
				return e === this.pushdownWidth && t !== this.billboardHeight
			},
			handleTopNav: function(i) {
				var n, s, a, o, r = t("#SponsorAd"),
					l = r.find("iframe"),
					d = t("#TopNavAd"),
					c = d.find("iframe");
				return n = this.ads.findWhere({
					name: "Middle1C"
				}), a = i < this.navBreakPoint && 0 === l.length, o = i >= this.navBreakPoint && 0 === c.length, n && (a || o) ? (a ? (s = r, c.remove()) : (s = d, l.remove()), e.defer(this.renderAd, {
					el: s,
					model: n
				}), !0) : !1
			},
			fireSlideShowAd: function(e) {
				var i = this.ads.findWhere({
						name: e.position
					}),
					n = t('<div class="ad-wrapper"></div>');
				this.adShown[e.position] || "object" != typeof i || (this.adShown[e.position] = !0, e.el.html(n), this.renderAd({
					el: n,
					model: i
				}), this.broadcast("nyt:slideshow-ad-render", i))
			},
			hasInterstitial: function() {
				var e, t = this.ads.findWhere({
					name: "Interstitial"
				});
				return t ? (e = t.get("timeout") ? 1e3 * parseInt(t.get("timeout"), 10) : 15e3, this.createInterstitial(t, this.completeInterstitial, e), !0) : !1
			},
			fireRibbonInterstitial: function() {
				var e = this.pageManager.getViewport();
				this.$shell.prepend(a.ribbonInterstitial()), this.renderAdByPositionName("RibbonInterstitial"), this.$shell.find("#main").addClass("visually-hidden").end().find(".ribbon-interstitial-ad-overlay").css("height", e.height - 150).find("iframe").css("width", "")
			},
			createInterstitial: function(e, t, i) {
				var n = this;
				this.interstitialModal = new o({
					id: "interstitial-ad-modal",
					modalTitle: "advertisement",
					tailDirection: "fixed",
					hasOverlay: !0,
					hasCloseButton: !0,
					width: e.get("width"),
					height: e.get("height"),
					modalContent: a.interstitialModal(),
					closeCallback: t,
					openCallback: function() {
						n.renderAdByPositionName(e.get("name"))
					}
				}).addToPage().open(), i && (n.closeTimeout = window.setTimeout(this.interstitialModal.close, i))
			},
			completeInterstitial: function(e) {
				window.clearTimeout(this.closeTimeout), this.interstitialModal.removeFromPage(), this.ads.remove(e), this.checkAds()
			}
		});
		return r
	}), define("shared/sharetools/helpers/share-tools-config", ["underscore/nyt", "foundation/views/page-manager"], function(e, t) {
		"use strict";
		var i = {
				width: 600,
				height: 450,
				adPosition: "Frame4A",
				overlayAdPosition: "Frame6A",
				isModalMember: !0,
				isArticleTool: !1,
				isInDefaultSet: !1,
				isPopup: !0,
				usesShortUrl: !1,
				shareDataParameters: {},
				shareServiceParameters: {}
			},
			n = function(t) {
				var n = e.extend({}, i, t);
				return Object.freeze ? Object.freeze(n) : n
			},
			s = {
				EMAIL: n({
					label: "Email",
					isInDefaultSet: !0,
					requiresLogin: !0,
					loginModalTitle: "Log in to email",
					modalDisplayOrder: 1,
					mobileModalDisplayOrder: 1
				}),
				FACEBOOK: n({
					label: "Share",
					isInDefaultSet: !0,
					url: "http://www.facebook.com/sharer.php",
					smid: "fb-share",
					modalDisplayOrder: 3,
					mobileModalDisplayOrder: 2,
					shareDataParameters: {
						url: "u"
					}
				}),
				GOOGLE: n({
					label: "Google+",
					url: "https://plus.google.com/share",
					smid: "go-share",
					height: 600,
					modalDisplayOrder: 4,
					mobileModalDisplayOrder: 6,
					shareDataParameters: {
						url: "url"
					},
					shareServiceParameters: {
						hl: "en-US"
					}
				}),
				REDDIT: n({
					label: "Reddit",
					url: "http://www.reddit.com/submit",
					smid: "re-share",
					width: 854,
					height: 550,
					modalDisplayOrder: 6,
					mobileModalDisplayOrder: 7,
					shareDataParameters: {
						url: "url",
						title: "title"
					}
				}),
				PINTEREST: n({
					label: "Pin",
					url: "https://www.pinterest.com/pin/create/button/",
					smid: "pin-share",
					width: 750,
					height: 330,
					modalDisplayOrder: 7,
					mobileModalDisplayOrder: 4,
					shareDataParameters: {
						url: "url",
						media: "media",
						description: "description"
					}
				}),
				TWITTER: n({
					label: "Tweet",
					isInDefaultSet: !0,
					url: "https://twitter.com/share",
					smid: "tw-share",
					usesShortUrl: !0,
					modalDisplayOrder: 5,
					mobileModalDisplayOrder: 3,
					shareDataParameters: {
						url: "url",
						title: "text"
					}
				}),
				LINKEDIN: n({
					label: "Linkedin",
					url: "http://www.linkedin.com/shareArticle",
					smid: "li-share",
					width: 750,
					modalDisplayOrder: 2,
					mobileModalDisplayOrder: 5,
					shareDataParameters: {
						url: "url",
						title: "title",
						description: "summary"
					},
					shareServiceParameters: {
						mini: "true",
						source: "The New York Times"
					}
				}),
				SAVE: n({
					label: "Save",
					isInDefaultSet: !0,
					isArticleTool: !0,
					loginModalTitle: "Log in to save",
					modalDisplayOrder: 1
				}),
				PRINT: n({
					label: "Print",
					isModalMember: "interactive" !== t.getApplicationName(),
					isArticleTool: "interactive" !== t.getApplicationName(),
					modalDisplayOrder: 3,
					shareServiceParameters: {
						pagewanted: "print"
					}
				}),
				REPRINTS: n({
					label: "Reprints",
					width: 930,
					height: 850,
					isArticleTool: !0,
					isModalMember: !0,
					url: "http://www.nytreprints.com",
					modalDisplayOrder: 2
				}),
				EMBED: n({
					label: "Embed",
					isArticleTool: !1,
					isInDefaultSet: !1,
					isModalMember: !1
				}),
				"SHOW-ALL": n({
					label: "More",
					isInDefaultSet: !0,
					isModalMember: !1,
					isModalTrigger: !0
				}),
				AD: n({
					label: "Advertisement",
					isInDefaultSet: !0,
					isModalMember: !1
				})
			};
		return Object.freeze ? Object.freeze(s) : s
	}), define("shared/sharetools/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.emailModal = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<iframe src="' + (null == (__t = emailThisUrl) ? "" : __t) + (null == (__t = dataUrl) ? "" : __t) + '" title="Email This" id="emailthis" scrolling="' + (null == (__t = scrolling) ? "" : __t) + '" marginheight="0" marginwidth="0" frameborder="0"></iframe>';
			return __p
		}, templates.savemodal = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<ul class="instructions">\n<li>This item has been saved to read later from any device. </li>\n<li>Access saved items through your user name at the top of the page.</li>\n</ul>\n<p><a href="' + (null == (__t = link) ? "" : __t) + '">View Saved Items</a><p>\n<button class="button dismiss-button">OK</button>';
			return __p
		}, templates.shareTool = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<a href="javascript:;" data-share="' + (null == (__t = id) ? "" : __t) + '" data-modal-title="' + (null == (__t = loginModalTitle) ? "" : __t) + '"><i class="icon sprite-icon"></i><span class="sharetool-text ' + (null == (__t = isLabelHidden === !0 ? "visually-hidden" : "") ? "" : __t) + '">' + (null == (__t = label) ? "" : __t) + "</span></a>";
			return __p
		}, templates.shareTools = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "<ul>\n", _.each(shares, function(e) {
				__p += '\n<li class="sharetool ' + (null == (__t = e.type) ? "" : __t) + "-sharetool " + (null == (__t = config[e.type].loginRequired ? "login-modal-trigger" : "") ? "" : __t) + '" data-modal-title="' + (null == (__t = config[e.type].loginModalText || "") ? "" : __t) + '">\n<a href="javascript:;" data-share="' + (null == (__t = e.type) ? "" : __t) + '"><i class="icon sprite-icon"></i><span class="sharetool-text">' + (null == (__t = e.label) ? "" : __t) + "</span></a>\n</li>\n"
			}), __p += "\n</ul>";
			return __p
		}, templates.shareToolsModal = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="section share ', isCompact && (__p += "compact-share-tools"), __p += '">\n<ul class="sharetools-menu">\n' + (null == (__t = standardToolsList) ? "" : __t) + '\n</ul>\n<form class="short-url-form">\n<div class="control">\n<div class="label-container"><label for="short-url-input">Permalink</label></div>\n<div class="field-container">\n<input id="short-url-input" class="short-url-input text" type="text" name="short-url-input" value="' + (null == (__t = shortUrl) ? "" : __t) + '" readonly="readonly" />\n</div>\n</div>\n</form>\n', isCompact && showTools && (__p += '\n<form class="embed-url-form">\n<div class="control">\n<div class="label-container"><label for="embed-input">Embed</label></div>\n<div class="field-container">\n<input id="embed-input" class="embed-input text" type="text" name="embed-input" readonly="readonly" />\n</div>\n</div>\n</form>\n'), __p += "\n</div><!--close section -->\n", !isCompact && showTools && (__p += '\n<div class="section tools">\n<h4 class="modal-heading">Tools</h4>\n<ul class="sharetools-menu">\n' + (null == (__t = articleToolsList) ? "" : __t) + "\n</ul>\n</div><!--close section -->\n"), __p += "";
			return __p
		}, templates.shareToolsModalFooter = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="ad show-all-sharetool-modal-ad hidden">\n<small class="ad-sponsor">' + (null == (__t = toolTypeSponsor) ? "" : __t) + " Tools Sponsored By</small>\n</div>";
			return __p
		}, templates.showAllSharetoolCompactModal = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="section share">\n<ul class="sharetools-menu">\n' + (null == (__t = showAllLinkList) ? "" : __t) + '\n</ul>\n</div> <!--close section -->\n<div class="section tools">\n<ul class="sharetools-menu">\n' + (null == (__t = showAllToolList) ? "" : __t) + '\n</ul>\n<div class="control permalink-control">\n<div class="label-container">\n<label for="permalink-input" class="sharetools-label">Permalink</label>\n</div>\n<div class="field-container">\n<input id="permalink-input" type="text" class="text short-url-input" placeholder="" readonly="readonly" />\n<span class="textbox-fade"></span>\n</div>\n</div><!-- close control -->\n<div class="control embed-control">\n<div class="label-container">\n<label for="embed-input" class="sharetools-label">Embed</label>\n</div>\n<div class="field-container">\n<input id="embed-input" type="text" class="text embed-input" placeholder="" readonly="readonly" />\n<span class="textbox-fade"></span>\n</div>\n</div><!-- close control -->\n</div><!--close section -->';
			return __p
		}, templates.showAllSharetoolModal = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="section share">\n<ul class="sharetools-menu">\n' + (null == (__t = showAllLinkList) ? "" : __t) + '\n</ul>\n<form class="short-url-form">\n<div class="control">\n<div class="label-container"><label for="short-url-input">Permalink</label></div>\n<div class="field-container">\n<input id="short-url-input" class="short-url-input text" type="text" name="short-url-input" value="' + (null == (__t = shortUrl) ? "" : __t) + '" readonly="readonly" />\n</div>\n</div>\n</form>\n</div> <!--close section -->\n<div class="section tools">\n<h5 class="modal-heading">Tools</h5>\n<ul class="sharetools-menu">\n' + (null == (__t = showAllToolList) ? "" : __t) + "\n</ul>\n</div><!--close section -->";
			return __p
		}, templates.showallLinks = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<li class="sharetool ' + (null == (__t = shareObj.type) ? "" : __t) + "-sharetool " + (null == (__t = config.loginRequired ? "login-modal-trigger" : "") ? "" : __t) + '" data-modal-title="' + (null == (__t = config.loginModalText || "") ? "" : __t) + '">\n<a href="javascript:;" data-share="' + (null == (__t = shareObj.type) ? "" : __t) + '"><i class="icon sprite-icon"></i>' + (null == (__t = shareObj.label) ? "" : __t) + "</a>\n</li>";
			return __p
		}, templates
	}), define("shared/sharetools/views/email", ["jquery/nyt", "underscore/nyt", "foundation/hosts", "foundation/views/base-view", "shared/modal/views/modal", "shared/sharetools/templates"], function(e, t, i, n, s, a) {
		"use strict";
		var o = n.extend({
			template: a.emailModal,
			className: "email-view-container",
			frameSize: {
				small: 507,
				full: 867,
				ad: 285
			},
			defaultSettings: {
				emailThisUrl: "https:" + i.www + "/mem/email-this.html?url=",
				scrolling: window.Modernizr.postmessage ? "no" : "yes"
			},
			defaultModalSettings: {
				id: "email-share-modal",
				modalTitle: "Email This Article",
				binding: ".email-sharetool",
				tailDirection: "centered",
				hasOverlay: !0,
				hasCloseButton: !0,
				modalContent: ""
			},
			initialize: function(e) {
				var i = this;
				t.bindAll(this, "handlePostMessage", "responsive"), this.settings = t.extend({}, this.defaultSettings, e), this.frameState = "full", this.modalSettings = t.extend({}, this.defaultModalSettings, {
					openCallback: function() {
						window.Modernizr.postmessage && (window.addEventListener ? window.addEventListener("message", i.handlePostMessage, !1) : window.attachEvent("onmessage", i.handlePostMessage)), i.listenTo(i.pageManager, "nyt:page-breakpoint", i.responsive)
					},
					closeCallback: function() {
						this.removeFromPage(), window.addEventListener ? window.removeEventListener("message", i.handlePostMessage, !1) : window.detachEvent("onmessage", i.handlePostMessage), i.stopListening(i.pageManager, "nyt:page-breakpoint", i.responsive)
					}
				}), this.prepareUrls(), this.render()
			},
			render: function() {
				this.modalSettings.modalContent = this.template(this.settings), this.emailModal = new s(this.modalSettings), this.emailModal.addToPage(), t.defer(this.responsive, this.pageManager.getCurrentBreakpoint())
			},
			responsive: function(e) {
				var t = this.emailModal.$modal.find("iframe");
				1010 >= e && "full" === this.frameState && (t.css("height", t.height() + this.frameSize.ad + "px").width(this.frameSize.small), this.frameSize.state = "small", this.emailModal.positionDialog()), e > 1010 && "small" === this.frameState && (t.css("height", t.height() - this.frameSize.ad + "px").width(this.frameSize.full), this.frameState = "full", this.emailModal.positionDialog())
			},
			handlePostMessage: function(e) {
				var t;
				/\.nytimes\.com$/.test(e.origin) && (t = e.data.match(/(.+)\:(.+)/), t && "frameheight" === t[1] ? this.$el.css("height", t[2]) : t && "closewindow" === t[1] ? this.emailModal.close() : t && "loginredirect" === t[1] && (window.location = i.myaccount + "/auth/login?URI=" + encodeURIComponent(window.location.href)))
			},
			prepareUrls: function() {
				"string" == typeof this.settings.dataUrl && -1 === this.settings.dataUrl.indexOf("http") && (this.settings.dataUrl = "http:" + i.www + this.settings.dataUrl)
			}
		});
		return o
	}), define("shared/sharetools/models/saved-article", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model"], function(e, t, i, n) {
		"use strict";
		var s = n.extend({
			getSummary: function() {
				return this.get("Data") ? this.get("Data").Summary : ""
			},
			getByline: function() {
				return this.get("Data") ? this.get("Data").Byline : ""
			},
			getTitle: function() {
				return this.get("Data") ? this.get("Data").Headline : this.get("URL")
			},
			getUrl: function() {
				return this.get("URL")
			},
			getDate: function() {
				return this.get("CreatedDate")
			},
			getFormattedDate: function() {
				var e = new Date(this.getDate());
				return this.dateHelper.getMonthShortName(e.getMonth()) + " " + e.getDate() + ", " + e.getFullYear()
			},
			getThumbUrl: function() {
				return this.get("Data") ? this.get("Data").ImageCrops.MediumThreeByTwo210 : ""
			},
			getCaption: function() {
				var e = "";
				return this.get("Data") && (e = this.get("Data").ImageCaption), e
			},
			getCaptionStripTags: function() {
				return this.getCaption().replace(/<\/?[^>]+>/gi, "")
			},
			hasThumb: function() {
				return !!this.getThumbUrl()
			}
		});
		return s
	}), define("shared/sharetools/collections/cross-platform-save", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/hosts", "foundation/lib/auth/userauth", "shared/sharetools/models/saved-article"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = n.extend({
			model: o,
			offset: 0,
			limit: 20,
			apiCommand: {
				save: "POST",
				list: "GET",
				remove: "DELETE"
			},
			url: s.readingListApiHost + "/reading-list/v2",
			currentArticleSaved: !1,
			save: function(e) {
				var t = this,
					i = {
						data: JSON.stringify({
							URL: e
						})
					};
				this.sync(this.apiCommand.save, i).done(function(i) {
					t.articleIsSaved(!0), t.add(i.Assets), t.trigger("nyt:xps-saved", e, i.Assets)
				}).fail(function() {
					t.trigger("nyt:xps-failed", e)
				})
			},
			removeSavedArticle: function(e) {
				var t = this,
					i = {
						data: JSON.stringify({
							URL: e
						})
					};
				this.sync(this.apiCommand.remove, i).done(function(i) {
					t.articleIsSaved(!1), t.remove(i), t.trigger("nyt:xps-article-removed", e, i)
				}).fail(function() {
					t.trigger("nyt:xps-failed", e)
				})
			},
			getSavedArticles: function() {
				var e = this,
					t = {
						data: {
							offset: this.offset,
							limit: this.limit
						},
						url: this.url + "/data"
					};
				e.reset(), this.sync(this.apiCommand.list, t).done(function(t) {
					e.add(t.Assets), e.totalCount = t.OverallSummary.Count, e.trigger("nyt:xps-articles-loaded", t.Assets)
				}).fail(function() {
					e.trigger("nyt:xps-load-failed")
				})
			},
			getNextSavedArticles: function() {
				return this.offset += this.limit, this.limit = 10, this.totalCount > this.offset ? (this.getSavedArticles(), this.totalCount <= this.offset + this.limit && this.trigger("nyt:xps-finished"), !0) : !1
			},
			getArticlesStatus: function(e) {
				var t = this,
					i = {
						data: {
							url: e
						},
						url: this.url + "/active"
					};
				this.sync(this.apiCommand.list, i).done(function(e) {
					t.articleIsSaved(e.length)
				}).fail(function() {
					t.broadcast("nyt:xps-load-failed")
				})
			},
			articleIsSaved: function(e) {
				this.currentArticleSaved = e, this.broadcast("nyt:xps-article-status", e)
			},
			sync: function(i, n) {
				var s = new e.Deferred,
					o = setTimeout(function() {
						s.reject()
					}, 5e3),
					r = {
						type: i,
						dataType: "json",
						contentType: "application/json",
						url: this.url,
						headers: {},
						xhrFields: {
							withCredentials: !0
						},
						success: function(e) {
							clearTimeout(o), e ? s.resolve(e) : s.reject()
						}
					};
				return a.getToken().done(function(i, s, a) {
					i && s && "undefined" != typeof a && (r.headers["X-Requested-By"] = i), e.ajax(t.extend(r, n))
				}), s.promise()
			}
		});
		return r
	}), define("shared/sharetools/instances/cross-platform-save", ["shared/sharetools/collections/cross-platform-save"], function(e) {
		"use strict";
		return new e
	}), define("shared/sharetools/collections/short-url", ["jquery/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/hosts"], function(e, t, i, n) {
		"use strict";
		var s = i.extend({
			url: n.shortenHost + "/svc/bitly/shorten.jsonp",
			initialize: function() {
				this.currentUrlRequest = "", this.addCurrentPage()
			},
			sync: function(e, i, n) {
				return n.dataType = "jsonp", n.jsonpCallback = "shortUrlCallback", n.jsonp = "callback", n.cache = !0, n.data = {
					url: this.currentUrlRequest
				}, t.sync(e, i, n)
			},
			parse: function(e) {
				return {
					url: this.currentUrlRequest,
					shortUrl: e.payload ? e.payload.short_url : ""
				}
			},
			addCurrentPage: function() {
				var t, i = this.pageManager.getCanonical();
				t = "1" === this.pageManager.getUrlParam("rico") && "undefined" != typeof this.pageManager.getUrlParam("share_url") ? this.pageManager.getUrlParam("share_url") : e("#masthead").find(".story-short-url").text(), i && t && this.add({
					url: i,
					shortUrl: t
				})
			},
			getRicoUrl: function(e) {
				var t = this.pageManager.getUrlParam("share_url"),
					i = document.createElement("a");
				return i.href = e, i.pathname === location.pathname && t && 7 === t.indexOf("r-i.co/") ? t : void 0
			},
			requestUrl: function(e) {
				var t, i = this.findWhere({
					url: e
				});
				return i ? i.get("shortUrl") : (t = this.getRicoUrl(e)) ? t : (this.currentUrlRequest = e, void this.fetch())
			}
		});
		return s
	}), define("shared/sharetools/instances/short-url", ["shared/sharetools/collections/short-url"], function(e) {
		"use strict";
		return new e
	}), define("shared/sharetools/views/common-mixin", ["jquery/nyt", "underscore/nyt", "foundation/hosts", "foundation/models/user-data", "foundation/models/page-storage", "foundation/tracking/tracking-mixin", "shared/modal/views/modal", "shared/sharetools/templates", "shared/sharetools/views/email", "shared/sharetools/helpers/share-tools-config", "shared/sharetools/instances/cross-platform-save", "shared/sharetools/instances/short-url"], function(e, t, i, n, s, a, o, r, l, d, c, h) {
		"use strict";
		var u = {
			handleShareAction: function(t, i) {
				var s = e(t.target),
					a = s.attr("data-share") || s.parent().attr("data-share"),
					o = a && d[a.toUpperCase()];
				return o ? (i && this.modal && this.modal.close(), "imageslideshow" !== this.pageManager.getMeta("PT") && this.trackShareData(a, o, i), o === d.EMBED ? void this.triggerEmbedLoginModal(t) : void(o.isModalTrigger ? this.broadcast("nyt:open-share-modal", {
					instanceContainer: this.$instanceContainer
				}) : o === d.EMAIL ? this.isMobileShareTools() ? this.openMailToLink() : n.isLoggedIn() ? new l({
					dataUrl: this.shareData.getUrl()
				}) : this.triggerLoginModal(t, "Log in to email", "Email") : o === d.PRINT ? window.print() : o === d.SAVE ? n.isLoggedIn() ? c.currentArticleSaved ? this.removeItem() : this.saveItem() : (this.trackingTrigger("loginmodal-open", {
					module: "LogIn",
					action: "Click",
					region: i ? "ToolsMenu" : this.trackingRegion,
					eventName: "ArticleTool-save"
				}), this.triggerLoginModal(t, "Log in to save", "Save")) : o.isPopup && this.popupShareWindow(o))) : void 0
			},
			handleModalShareAction: function(e) {
				this.handleShareAction(e, !0)
			},
			triggerLoginModal: function(e, t, i) {
				e.preventDefault(), e.stopPropagation(), this.broadcast("nyt:loginmodal-open", {
					modalTitle: t,
					moduleName: i
				})
			},
			triggerEmbedLoginModal: function(t) {
				t.stopPropagation(), e(".show-all-sharetool a").trigger("click"), this.$body.find(".show-all-sharetool-modal #embed-input").select()
			},
			popupShareWindow: function(e) {
				e.usesShortUrl ? this.handleShortUrlShareAction(e) : window.open(this.buildShareServiceUrl(e), "_blank", this.getPopupWindowFeatures(e));
			},
			getPopupWindowFeatures: function(e) {
				return "toolbar=0,status=0,height=" + e.height + ",width=" + e.width + ",scrollbars=yes,resizable=yes"
			},
			buildShareServiceUrl: function(e) {
				var t, i = [],
					n = e.smid,
					s = e.shareDataParameters,
					a = e.shareServiceParameters,
					o = {
						url: this.shareData.getUrl(),
						title: this.shareData.getTitle(),
						description: this.shareData.getDescription(),
						media: this.shareData.getMedia()
					};
				if (n && (o.url += this.getQuerystringDelimiter(o.url), o.url += "smid=" + n), s)
					for (t in s) s.hasOwnProperty(t) && o.hasOwnProperty(t) && i.push(s[t] + "=" + encodeURIComponent(o[t]));
				if (a) {
					a.hasOwnProperty("publicationDate") && (a.publicationDate = this.shareData.getPublicationDate()), a.hasOwnProperty("author") && (a.author = this.shareData.getAuthor());
					for (t in a) a.hasOwnProperty(t) && i.push(t + "=" + encodeURIComponent(a[t]))
				}
				return e.url + "?" + i.join("&")
			},
			handleShortUrlShareAction: function(t) {
				var i, n, s, a, o = this,
					r = this.shareData.getUrl(),
					l = t.smid;
				/(?:iPad|iPhone)/.test(navigator.userAgent) ? (a = e("#masthead").find(".story-short-url").text() || this.pageManager.getCanonical() || r, i = t.url + "?url=" + encodeURIComponent(a) + "&text=" + encodeURIComponent(o.shareData.getTitle()), window.open(i, "_blank", this.getPopupWindowFeatures(t))) : (n = window.open("", "_blank", this.getPopupWindowFeatures(t)), s = function(e) {
					var i = o.shareData.getVia();
					e = t.url + "?url=" + encodeURIComponent(e) + "&text=" + encodeURIComponent(o.shareData.getTitle()), i && (e += "&via=" + encodeURIComponent(i)), n.location.href = e
				}, l && !this.pageManager.isMobile() && (r += this.getQuerystringDelimiter(r), r += "smid=" + l), i = h.requestUrl(r) || "", i ? s(i) : this.listenToOnce(h, "add", function() {
					var e = h.findWhere({
						url: r
					});
					e && s(e.get("shortUrl"))
				}))
			},
			getQuerystringDelimiter: function(e) {
				return -1 === e.indexOf("?") ? "?" : "&"
			},
			saveItem: function() {
				var e, t, n, a, o = this,
					l = this.shareData.getUrl();
				t = function() {
					var e = "sharetools_hasSaves";
					s.get(e) !== !0 ? (a(), s.set(e, !0)) : n()
				}, n = function() {
					o.showModal({
						id: "save-item-growl-modal",
						modalTitle: '<i class="icon"></i>Saved',
						tailDirection: "centered",
						openCallback: function() {
							window.setTimeout(this.removeFromPage, 2e3)
						}
					})
				}, a = function() {
					o.showModal({
						id: "save-item-modal",
						modalTitle: '<i class="icon"></i>Saved',
						modalContent: r.savemodal({
							link: i.www + "/saved"
						}),
						hasOverlay: !0,
						hasCloseButton: !0,
						tailDirection: "centered",
						closeCallback: function() {
							this.removeFromPage()
						}
					})
				}, e = c.where({
					url: l
				}), e.length ? n() : (this.subscribeOnce(c, "nyt:xps-saved", t), c.save(l))
			},
			removeItem: function() {
				var e = this,
					t = this.shareData.getUrl(),
					i = function() {
						e.showModal({
							id: "save-item-growl-modal",
							modalTitle: '<i class="icon"></i>Removed',
							tailDirection: "centered",
							openCallback: function() {
								window.setTimeout(this.removeFromPage, 2e3)
							}
						})
					};
				this.subscribeOnce(c, "nyt:xps-article-removed", i), c.removeSavedArticle(t)
			},
			trackShareData: function(e, t, i) {
				var n = {};
				c.currentArticleSaved && (e = "unsave"), this.trackingBaseData = {
					module: "ShareTools",
					action: "click",
					version: this.shareData.getContentType(),
					contentCollection: this.pageManager.getMeta("article:section")
				}, i ? (n.region = "ToolsMenu", n.version = "Content") : n.region = this.trackingRegion, t.isArticleTool ? (n.module = "ArticleTools", n.eventName = "ArticleTool-" + e) : "show-all" === e ? n.eventName = "Share-ShowAll" : n.eventName = "Share-" + e, this.trackingTrigger("share-tools-click", n)
			},
			showModal: function(e) {
				var i = new o(e);
				i.addToPage(), t.defer(i.open)
			},
			isMobileShareTools: function() {
				return this.pageManager.getCurrentBreakpoint() < 1e3
			},
			openMailToLink: function() {
				var e = "%0A%0A",
					t = encodeURIComponent(this.shareData.getTitle()),
					i = encodeURIComponent(this.shareData.getDescription()),
					n = encodeURIComponent(this.shareData.getUrl()),
					s = "NYTimes.com: " + t,
					a = "From The New York Times:" + e + t + e + i + e + n;
				window.location = "mailto:?subject=" + s + "&body=" + a
			}
		};
		return u
	}), define("shared/sharetools/views/share-tool", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/sharetools/views/common-mixin", "shared/sharetools/templates"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend(t.extend({}, n, {
			tagName: "li",
			events: {
				click: "handleShareAction"
			},
			initialize: function(e) {
				this.toolId = e.toolId, this.toolConfig = e.toolConfig, this.label = e.customLabel || this.toolConfig.label, this.loginModalTitle = this.toolConfig.loginModalTitle || "", this.$instanceContainer = e.instanceContainer, this.shareData = e.shareData, this.trackingRegion = e.trackingRegion, "" === e.customLabel && (this.isLabelHidden = !0)
			},
			render: function() {
				var e, t, i = this.toolId.toLowerCase();
				return this.isAdView() ? (e = this.pageManager.getCurrentBreakpoint() <= 1020 ? "Position1" : "Frame4A", this.$instanceContainer.find(".sharetools-inline-article-ad").attr("id", e), this.broadcast("nyt:ad-library:dfp:queue-placement", e), this.$instanceContainer.find("#" + e).removeClass("hidden")) : (t = s.shareTool({
					id: i,
					label: this.label,
					loginModalTitle: this.loginModalTitle,
					isLabelHidden: this.isLabelHidden
				}), this.$el.addClass("sharetool " + i + "-sharetool"), this.$el.append(t)), this
			},
			isAdView: function() {
				return "AD" === this.toolId
			}
		}));
		return a
	}), define("shared/sharetools/models/share-data", ["foundation/models/base-model"], function(e) {
		"use strict";
		var t = e.extend({
			dataAttributes: {
				URL: "data-url",
				TITLE: "data-title",
				MEDIA: "data-media",
				DESCRIPTION: "data-description",
				PUBLICATION_DATE: "data-publish-date",
				CONTENT_TYPE: "data-content-type",
				AUTHOR: "data-author",
				VIA: "data-via"
			},
			initialize: function(e) {
				this.$container = e
			},
			getUrl: function() {
				var e = this.$container.attr(this.dataAttributes.URL);
				return e ? e : this.pageManager.getCanonical()
			},
			setUrl: function(e) {
				this.$container.attr(this.dataAttributes.URL, e)
			},
			getTitle: function() {
				var e = this.$container.attr(this.dataAttributes.TITLE);
				return e ? e : this.pageManager.getMeta("og:title")
			},
			setTitle: function(e) {
				this.$container.attr(this.dataAttributes.TITLE, e)
			},
			getAuthor: function() {
				var e = this.$container.attr(this.dataAttributes.AUTHOR);
				return e ? e : this.pageManager.getMeta("byl")
			},
			setAuthor: function(e) {
				this.$container.attr(this.dataAttributes.AUTHOR, e)
			},
			getMedia: function() {
				var e = this.$container.attr(this.dataAttributes.MEDIA);
				return e ? e : this.pageManager.getMeta("og:image")
			},
			setMedia: function(e) {
				this.$container.attr(this.dataAttributes.MEDIA, e)
			},
			getDescription: function() {
				var e = this.$container.attr(this.dataAttributes.DESCRIPTION);
				return e ? e : this.pageManager.getMeta("description")
			},
			setDescription: function(e) {
				this.$container.attr(this.dataAttributes.DESCRIPTION, e)
			},
			getPublicationDate: function() {
				var e = this.$container.attr(this.dataAttributes.PUBLICATION_DATE);
				return e ? e : this.pageManager.getMeta("DISPLAYDATE")
			},
			setPublicationDate: function(e) {
				this.$container.attr(this.dataAttributes.PUBLICATION_DATE, e)
			},
			getVia: function() {
				var e = this.$container.attr(this.dataAttributes.VIA),
					t = this.pageManager.getMeta("twitter:site");
				return e ? e : "upshot" === this.pageManager.getMeta("CG") ? "UpshotNYT" : t && "@nytimes" !== t ? t.replace("@", "") : ""
			},
			setVia: function(e) {
				this.$container.attr(this.dataAttributes.VIA, e)
			},
			getContentType: function() {
				var e = this.$container.attr(this.dataAttributes.CONTENT_TYPE);
				return e ? e : "Content"
			},
			setContentType: function(e) {
				this.$container.attr(this.dataAttributes.CONTENT_TYPE, e)
			}
		});
		return t
	}), define("shared/sharetools/views/containers-mixin", ["jquery/nyt", "underscore/nyt", "shared/sharetools/models/share-data", "shared/sharetools/views/share-tool", "shared/sharetools/helpers/share-tools-config"], function(e, t, i, n, s) {
		"use strict";
		var a = {
			getToolIdsAndCustomLabels: function(e) {
				var t, i, n, a;
				if (this.toolIds = [], this.customLabels = {}, e)
					for (e = e.split(","), t = 0, n = e.length; n > t; t++) i = e[t].toUpperCase(), a = i.indexOf("|"), -1 !== a && (i = i.substring(0, a), this.customLabels[i] = e[t].substr(a + 1)), this.toolIds.push(i);
				else
					for (i in s) s.hasOwnProperty(i) && s[i].isInDefaultSet === !0 && this.toolIds.push(i)
			},
			instantiateViews: function(e) {
				var i, a, o, r, l, d = [];
				for (i = 0, a = e.length; a > i; i++) o = e[i], r = this.customLabels && this.customLabels[o], s.hasOwnProperty(o) && (l = {
					toolId: o,
					toolConfig: s[o],
					instanceContainer: this.$instanceContainer,
					shareData: this.shareData,
					trackingRegion: this.trackingRegion
				}, t.isString(r) && (l.customLabel = r), d.push(new n(l)));
				return d
			},
			renderToolViews: function() {
				var e, t, i;
				for (t = this.instantiateViews(this.toolIds), e = 0, i = t.length; i > e; e++) t[e].isAdView() ? t[e].render() : this.$el.append(t[e].render().el)
			},
			getToolViewsMarkup: function(t) {
				var i, n = document.createElement("div"),
					s = this.instantiateViews(t),
					a = s.length;
				for (i = 0; a > i; i++) n.appendChild(s[i].render().el);
				return e(n).html()
			}
		};
		return a
	}), define("shared/sharetools/views/share-tools-modal-container", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/modal/views/modal", "shared/ad/views/ads", "shared/sharetools/helpers/share-tools-config", "shared/sharetools/views/share-tool", "shared/sharetools/views/common-mixin", "shared/sharetools/views/containers-mixin", "shared/sharetools/instances/short-url", "shared/sharetools/templates"], function(e, t, i, n, s, a, o, r, l, d, c) {
		"use strict";
		var h = i.extend(t.extend({}, r, l, {
			events: {
				click: "handleModalShareAction"
			},
			defaultModalSettings: {
				id: "show-all-sharetool-modal",
				modalTitle: "share",
				binding: ".show-all-sharetool",
				tailDirection: "up",
				hasOverlay: !1,
				hasCloseButton: !1,
				positionTailSide: !1,
				autoPosition: !1,
				modalContent: "",
				toolTypeSponsor: "Share",
				tailLeftOffset: 0,
				tailTopOffset: 0,
				openCallback: function() {
					this.$target.addClass("active")
				},
				closeCallback: function() {
					this.$target.removeClass("active"), this.removeFromPage()
				}
			},
			initialize: function(i) {
				this.$instanceContainer = i.instanceContainer, this.trackingRegion = i.trackingRegion, this.shareData = i.shareData, this.configIds = i.modalSettings.shares, this.showTools = i.modalSettings.hasOwnProperty("showTools") ? i.modalSettings.showTools : !0, this.modalSettings = t.extend({}, this.defaultModalSettings, i.modalSettings), this.modalSettings.modalFooter = c.shareToolsModalFooter({
					toolTypeSponsor: this.modalSettings.toolTypeSponsor
				}), this.isMobileShareTools() && (this.modalSettings = t.extend({}, this.modalSettings, {
					tailDirection: "centered",
					hasCloseButton: !0,
					hasOverlay: !0,
					positionTailSide: !1,
					autoPosition: !1
				})), this.el = document.createElement("ul"), this.el.className = "sharetools-menu", this.$el = e(this.el), this.urlWithSmid = this.shareData.getUrl(), this.urlWithSmid += -1 === this.urlWithSmid.indexOf("?") ? "?" : "&", this.urlWithSmid += "smid=pl-share", this.permalink = d.requestUrl(this.urlWithSmid) || "", this.permalink || this.listenToOnce(d, "add", this.handleShortUrl), this.render()
			},
			render: function() {
				var e = "Frame6A",
					t = this;
				this.modalSettings.modalContent = c.shareToolsModal(this.buildMarkup()), this.modal = new n(this.modalSettings), this.setElement(this.modal.$modal), this.modalSettings.embedCode && this.modal.$modal.find(".embed-input").val(this.modalSettings.embedCode), this.modal.$modal.find(".show-all-sharetool-modal-ad").attr("id", e), this.modalSettings.articleSaved && this.modal.$modal.find(".save-sharetool").addClass("article-saved"), this.modal.addToPage(), this.isMobileShareTools() || this.broadcast("nyt:ad-library:dfp:request-placement", e), this.subscribe("nyt:page-resize", function() {
					t.modal.close()
				})
			},
			buildMarkup: function() {
				var i, n, s, o = this,
					r = [],
					l = [],
					d = function(e) {
						var i;
						a.hasOwnProperty(e) && (i = t.extend({}, a[e], {
							id: e
						}), a[e].isArticleTool ? "REPRINTS" === e ? "article" !== o.pageManager.getMeta("PT") || /\/(?:aponline|reuters|opinion|t-magazine|magazine)\//.test(o.shareData.getUrl()) || "books" === o.pageManager.getMeta("CG") && "Review" === o.pageManager.getMeta("tom") || l.push(i) : a[e].isArticleTool && l.push(i) : r.push(i))
					};
				if (this.configIds)
					for (this.getToolIdsAndCustomLabels(this.configIds), i = 0, s = this.toolIds.length; s > i; i++) d(this.toolIds[i]);
				else {
					for (n in a) a[n].isModalMember && d(n);
					r = t.sortBy(r, function(t) {
						return e("html").hasClass("viewport-medium") ? t.modalDisplayOrder : t.mobileModalDisplayOrder
					}), l = t.sortBy(l, function(t) {
						return e("html").hasClass("viewport-medium") ? t.modalDisplayOrder : t.mobileModalDisplayOrder
					})
				}
				return {
					shortUrl: this.permalink,
					showTools: this.showTools,
					isCompact: "homepage" === o.pageManager.getApplicationName(),
					standardToolsList: this.getToolViewsMarkup(t.pluck(r, "id")),
					articleToolsList: this.getToolViewsMarkup(t.pluck(l, "id"))
				}
			},
			handleShortUrl: function() {
				var e = d.findWhere({
					url: this.urlWithSmid
				});
				e && this.modal.$modal.find(".short-url-input").val(e.get("shortUrl"))
			}
		}));
		return h
	}), define("shared/community/views/flag-modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/community/api-mixin", "shared/modal/views/modal", "shared/community/templates"], function(e, t, i, n, s, a) {
		"use strict";
		var o = i.extend(t.extend({}, n, {
			defaultSettings: {
				id: "flag-modal",
				addlClasses: "flag-modal",
				modalContent: "",
				binding: ".comment-flag:not(.comment-reported)",
				tailDirection: "down-right",
				hasOverlay: !1,
				reasons: {
					Vulgar: "Vulgar",
					Spam: "Spam",
					Inflammatory: "Inflammatory",
					"Off Topic": "Off-topic",
					"Personal Attack": "Personal-attack"
				},
				openCallback: function() {
					this.flaggedComment = this.$target.parents(".comment").data("id"), this.$target.addClass("active"), this.subscribeOnce("nyt:page-scroll", this.close), this.subscribeOnce(this.comments, "nyt:community-scroll", this.close), this.trackingTrigger("comment-flag-click", {
						module: "Comments",
						action: "Click",
						region: "Marginalia",
						eventName: "comments-user-flagged",
						eventType: "interaction"
					})
				}
			},
			events: {
				"click .flag-button": "submitFlag",
				"click .cancel-button": "handleClose"
			},
			initialize: function(e) {
				var i = this;
				this.defaultSettings.closeCallback = function() {
					i.resetReasons(), this.flaggedComment = 0, this.$target.removeClass("active")
				}, this.modalSettings = t.extend({}, this.defaultSettings, e), this.modalSettings.modalContent = a.flag(this.modalSettings), this.render(), this.model = e.model, this.flagModal.comments = e.view
			},
			render: function() {
				this.flagModal = new s(this.modalSettings).addToPage(), this.setElement(this.flagModal.$modal)
			},
			getReasons: function() {
				var e = 0,
					i = "";
				return t.each(this.modalSettings.reasons, function(t) {
					this.$("#flag-checkbox-" + t).is(":checked") && (i += e > 0 ? "," + t : t, e += 1)
				}, this), i
			},
			resetReasons: function() {
				t.each(this.modalSettings.reasons, function(e) {
					this.$("#flag-checkbox-" + e).attr("checked", !1)
				}, this)
			},
			submitFlag: function() {
				var e = this;
				return this.apiPost({
					command: "flag",
					userID: this.model.getUser().getUserId(),
					commentID: this.flagModal.flaggedComment,
					asset: this.model.getAsset(),
					commentLabels: this.getReasons()
				}).always(function() {
					e.local(e.flagModal.comments, "nyt:community-comment-flagged", e.flagModal.flaggedComment), e.flagModal.close()
				}), !1
			},
			removeLinkFromReported: function() {
				e(".comment-reported").click(function(e) {
					e.preventDefault()
				})
			},
			handleClose: function() {
				return this.flagModal.close(), !1
			}
		}));
		return o
	}), define("shared/community/views/verified-modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/modal/views/modal", "shared/community/templates"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			defaultSettings: {
				id: "verified-modal",
				addlClasses: "verified-modal",
				modalContent: "",
				binding: ".trusted-icon",
				tailDirection: "down",
				tailLeftOffset: 7,
				canOpenOnHover: !0,
				hasOverlay: !1,
				closeOnMouseOut: !0,
				closeOnClick: !1,
				openCallback: function() {
					this.subscribeOnce("nyt:page-scroll", this.close), this.subscribeOnce("nyt:community-scroll", this.close)
				}
			},
			initialize: function(e) {
				this.modalSettings = t.extend({}, this.defaultSettings, e), this.modalSettings.modalContent = s.verified(this.modalSettings), this.render()
			},
			render: function() {
				this.verifiedModal = new n(this.modalSettings).addToPage(), this.setElement(this.verifiedModal.$modal)
			}
		});
		return a
	}), define("shared/community/views/comments", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/community/views/utils-mixin", "shared/sharetools/views/share-tools-modal-container", "shared/sharetools/helpers/share-tools-config", "shared/community/views/flag-modal", "shared/community/views/verified-modal", "shared/community/templates", "foundation/lib/polyfills/placeholder", "shared/sharetools/models/share-data"], function(e, t, i, n, s, a, o, r, l, d, c, h) {
		"use strict";
		var u = i.extend(t.extend({}, s, {
			template: d.comments,
			postTemplate: d.post,
			formTemplate: d.form,
			shareTools: null,
			events: {
				click: "toggleForm",
				"click .comments-thread-expand": "loadMore",
				"click .comments-subthread-expand": "loadReplies",
				"click .comments-view-navigation li": "loadFilter",
				"click .comments-sort-container": "loadSort",
				"click .comments-view .comment .comment-time": "handlePermalinkClick",
				"click .comments-view .comment .comment-parent": "handlePermalinkClick",
				"click .comment-recommend": "recommend",
				"click .sharetools span": "handleShare",
				"click .comment-submit-button": "submitForm",
				"click .comment-reply": "toggleReplyForm",
				"click .view-all": "loadFilter",
				"keypress .commenter-gateway-input": "toggleForm",
				"focus .commenter-gateway-input": "toggleForm"
			},
			active: {
				0: {},
				permalink: {}
			},
			defaultSettings: {
				header: "Comments",
				maxPosts: 25,
				filter: "all",
				sort: "newest",
				showDate: !0,
				dateFormat: "interval",
				showLocation: !0,
				showAvatar: !0,
				maxCharCount: 1500,
				adPlacement: "Spon2",
				defaultPrompt: "Share your thoughts.",
				promoPrompt: '<a target="_blank" href="http://www.nytimes.com/interactive/2016/nytnow/best-comments.html">Click here</a> to read the best Times comments from the past week.',
				animateSpeed: 250
			},
			initialize: function(i) {
				this.settings = t.extend({}, this.defaultSettings, i), this.flag("shareToolsUnderHeadline") && "1" === this.isUserVariant("shareToolsUnderHeadline") && e(".comments-button.theme-kicker").remove(), this.subscribe(this, "nyt:community-loaded", this.getPosts), this.subscribe(this, "nyt:community-post-recommended", this.updateRecCount), this.subscribe(this, "nyt:community-comment-posted", this.confirmPost), this.subscribe("nyt:comments-panel-opened nyt:page-breakpoint nyt:page-resize", this.resizeHeaderContainer), this.subscribeOnce(this, "nyt:community-thread-loaded", this.render), this.subscribe("nyt:community-commentspanel-open", function(e) {
					(t.isString(e) || t.isNumber(e)) && this.loadPermalink("" + e), this.$el.focus(), this.panelActive(!0)
				}), this.subscribe("nyt:comments-panel-closed", function() {
					this.resetForms(), this.panelActive(!1)
				}), this.request()
			},
			request: function() {
				this.broadcast("nyt:community-request", this.settings.asset, this, this.settings)
			},
			getPosts: function(e) {
				var t;
				this.model = this.model || e, this.model.getDefaultQuery() ? (t = this.model.getDefaultQuery(), this.settings.filter = t.filter || this.settings.filter, this.settings.sort = t.sort || this.settings.sort, this.model.load(this.settings, this)) : this.subscribeOnce(this.model, "nyt:community-summary", this.getPosts)
			},
			render: function(e) {
				var i, n, s, a = this,
					o = this.model.getPrompt();
				return o.toLowerCase() === this.settings.defaultPrompt.toLowerCase() && (o = this.settings.promoPrompt), i = {
					all: "All",
					reader: "Readers&#8217; Picks",
					nytpicks: "NYT Picks",
					nytreplies: "NYT Replies"
				}, n = t.extend({}, this.settings, {
					filters: {},
					header: "Comment",
					view: this,
					isOpen: this.model.isOpen(),
					commentPrompt: o,
					commentPromptVisibility: !0
				}), s = t.throttle(function() {
					a.toggleHeader(), a.broadcast(a.comments, "nyt:community-scroll")
				}, 500), this.subscribe(this, "nyt:community-request", function(e) {
					e.limit || "replies" === e.filter || a.toggleLoader(!0)
				}), this.subscribe(this, "nyt:community-thread-loaded", function() {
					a.toggleLoader(!1)
				}), this.subscribe(this, "nyt:community-comment-flagged", this.confirmFlagged), this.model.getNumberOfPosts() > 0 && (n.header = this.model.getNumberOfPosts() + " " + n.header + (this.model.getNumberOfPosts() > 1 ? "s" : "")), this.settings.showDate && this.formatDate(n.posts), t.each(this.model.getFilters(), function(e) {
					n.filters[e] = i[e]
				}, this), this.subscribe(this, "nyt:community-thread-loaded", this.updateView), this.$el.html(this.template(n)).show(), this.renderAd(), this.cacheElements(), this.updateView(e), this.updateNavigation(), this.toggleSortButtons(), this.toggleLoadButtons(), this.renderForm(), this.renderFlagModal(), this.renderVerifiedModal(), this.toggleEmpty(0 === e.length), this.cloneHeader(), this.$comments.on("drag scroll touchend touchstart touchmove swipe", s), this.$clonedHeader.find(".section-heading").on("touchend click", function() {
					a.updateScrollPosition()
				}), this.broadcast("nyt:community-rendered", this.settings.asset, this), t.defer(function() {
					a.readHash()
				}), this.pageManager.setMeta("isCommentsOpen", this.model.isOpen()), this
			},
			cacheElements: function() {
				this.$comments = this.$(".comments"), this.$loader = this.$comments.find(".loader-container").hide(), this.$panelBody = this.$comments.find(".comments-view"), this.$loadMore = this.$comments.find(".comments-footer"), this.$permalink = this.$(".comment-permalink-view"), this.$viewAll = this.$(".view-all"), this.$header = this.$(".comments-header-container"), 0 === this.$loadMore.length && this.subscribeOnce(this, "nyt:community-thread-loaded", this.cacheElements)
			},
			setActive: function(e, i, n) {
				e = e || [], i && (n ? this.active.permalink = {} : this.active = {
					0: {},
					permalink: {}
				}), t.each(e, function(e) {
					var t = n ? "permalink" : e.getParentId();
					this.active[t] || (this.active[t] = {}), this.active[t][e.getId()] = e
				}, this)
			},
			isActive: function(e, i) {
				var n = !1;
				return i ? n = e && e.getId ? this.active.permalink[e.getId()] : this.active.permalink[e] : "number" == typeof e ? t.each(this.active, function(i) {
					t.has(i, e) && (n = i[e])
				}) : n = e && e.getParentId && this.active[e.getParentId()] ? this.active[e.getParentId()][e.getId()] : !1, n
			},
			configureProperties: function(e) {
				return e = e || {}, "undefined" == typeof e.isPermalink && (e.isPermalink = !1), e.isPermalink ? (e.container = this.$permalink, e.isSubThread = !1, "number" == typeof e.parent && (e.container = this.$permalink.find("[data-id=" + e.parent + "]").find(".thread"), e.isSubThread = !0)) : "number" == typeof e.parent ? (e.container = this.$panelBody.find("[data-id=" + e.parent + "]").find(".thread"), e.isSubThread = !0) : e.container && e.container.attr ? (e.container = e.container.find(".thread"), e.isSubThread = !0) : (e.container = this.$panelBody, e.isSubThread = !1), e.isSubThread && (e.clearView = !1), e.view = this, e
			},
			updateView: function(e, t, i) {
				t = t || e, i = this.configureProperties(i), this.settings.showDate && this.formatDate(t), i.clearView && this.unload(), this.addPostsToView(t, i), this.setActive(t, i.clearView, i.isPermalink), i.isSubThread || (this.togglePermalink(i.isPermalink), this.toggleLoadButtons(), this.orderElements(), this.toggleSortButtons(), this.updateNavigation()), 0 === e && this.updateNavigation(), this.toggleEmpty(0 === t.length)
			},
			updateScrollPosition: function() {
				this.slideHeaderUp(), this.$comments.scrollTop(0), this.$(".thread-form").show()
			},
			resizeHeaderContainer: function() {
				var e;
				this.$comments && (e = this.$comments.width() - 15, this.$header.css({
					width: e
				}), this.$clonedHeader.css({
					width: e
				}))
			},
			orderElements: function() {
				this.$loader.appendTo(this.$panelBody), this.$loadMore.appendTo(this.$panelBody)
			},
			addPostsToView: function(i, n) {
				var s = n.container.children("article").toArray(),
					a = this.model.isOpen(),
					o = this,
					r = s.length ? s[0] : !1;
				t.each(i, function(i, l) {
					var d;
					return this.isActive(i, n.isPermalink) ? (s.shift(), void(r = s.length ? s[0] : !1)) : (d = this.postTemplate(t.extend({}, this.settings, n, {
						post: i,
						view: o,
						isOpen: a,
						index: l
					})), void(r ? e(r).before(d) : n.container.append(d)))
				}, this), this.checkAvatars()
			},
			checkAvatars: function() {
				this.$(".avatar").not(".avatar-loaded").find("img").each(function(t, i) {
					var n = new Image,
						s = e(i.parentNode);
					n.addEventListener("load", function() {
						this.loadAvatar(s, i)
					}.bind(this)), n.src = i.src
				}.bind(this))
			},
			loadAvatar: function(e, t) {
				e.addClass("avatar-loaded"), t.naturalWidth > 1 && e.addClass("show-avatar")
			},
			togglePermalink: function(e) {
				this.$permalink[e ? "show" : "hide"]()
			},
			toQuery: function(e) {
				return e = e || {}, t.extend({}, this.settings, e)
			},
			loadMore: function() {
				this.model.load(this.toQuery({
					limit: this.settings.maxPosts
				}), this), this.track("load-more-comments", {
					eventName: "More-coms-in-panel",
					module: "Comments",
					action: "Click",
					region: "Comments"
				})
			},
			loadReplies: function(e, i) {
				var n;
				t.isObject(i) || (i = {}), t.isObject(e) ? (n = this.$(e.target).parents(".comment"), this.$(e.target).remove(), e = parseInt(n.data("sequence"), 10)) : n = this.$("[data-sequence=" + e + "]"), this.model.load(this.toQuery({
					context: e,
					filter: "replies",
					sort: "oldest"
				}), this, t.extend({
					container: n
				}, i)), this.track("load-replies", {
					eventName: "All-replies",
					module: "Comments",
					action: "Click",
					region: "Comments"
				})
			},
			loadFilter: function(e) {
				var t = this.$(e.target).data("filter");
				this.settings.filter = t, "reader" === t ? this.settings.sort = t : this.settings.sort = "newest", this.toggleLoadButtons(), this.model.load(this.toQuery(), this, {
					clearView: !0
				}), this.updateScrollPosition(), this.$(e.target).hasClass("view-all") ? this.track("click-view-all", {
					module: "Comments",
					version: "RecentComments",
					action: "Click",
					region: "Marginalia",
					eventName: "comments-open-panel",
					eventType: "interaction",
					clickLocation: "ViewAllComments"
				}) : "all" === t && this.track("click-all", {
					module: "Comments",
					version: "RecentComments",
					action: "Click",
					region: "Marginalia",
					eventName: "comments-open-panel",
					eventType: "interaction",
					clickLocation: "All"
				})
			},
			loadSort: function() {
				this.settings.sort = this.$(".comments-sort").data("sort"), this.model.load(this.toQuery({
					sort: this.$(".comments-sort").data("sort")
				}), this, {
					clearView: !0
				}), this.updateScrollPosition()
			},
			handlePermalinkClick: function(t) {
				var i, n;
				i = e(t.target), i.data("permid") || (i = i.parents(".comment")), n = i.data("permid"), this.loadPermalink(n), t.preventDefault()
			},
			loadPermalink: function(e) {
				var t;
				e += "", t = e.split(":")[0], this.$permalink.empty(), this.setActive([], !0, !0), this.subscribeOnce(this, "nyt:community-thread-loaded", function(e) {
					e[0] && this.loadReplies(t, {
						isPermalink: !0,
						parent: e[0].getId()
					})
				}), this.model.load(this.toQuery({
					filter: "permalink",
					permID: t
				}), this, {
					isPermalink: !0
				}), this.updateScrollPosition(), this.pageManager.setUrlHash("permid=" + e)
			},
			unload: function() {
				this.setActive([], !0), this.$loadMore.detach(), this.$loader.detach(), this.$panelBody.empty().append(this.$loadMore).append(this.$loader)
			},
			panelActive: function(e) {
				this.pageManager.setMeta("commentspanel_isOpen", e)
			},
			toggleLoadButtons: function() {
				this.model.hasAdditionalPosts(this.settings) ? this.$loadMore.find(".comments-expand").show() : this.$loadMore.find(".comments-expand").hide(), "all" !== this.settings.filter ? this.model.hasAdditionalPosts(this.settings) ? this.$viewAll.hide() : this.$viewAll.show() : this.$viewAll.hide()
			},
			toggleSortButtons: function() {
				var e = this.$(".comments-sort-container"),
					t = this.$(".comments-sort");
				"all" === this.settings.filter ? (this.settings.sort = this.settings.sort || "newest", "newest" === this.settings.sort ? t.text("Newest").data("sort", "oldest") : t.text("Oldest").data("sort", "newest"), e.show()) : e.hide()
			},
			updateNavigation: function() {
				this.$(".tab").removeClass("selected").filter("[data-filter=" + this.settings.filter + "]").addClass("selected")
			},
			recommend: function(e) {
				var t, i = this.$(e.target).hasClass("comment-recommend") ? this.$(e.target) : this.$(e.target).parents(".comment-recommend:first"),
					s = i.parents(".comment:first"),
					a = this.isActive(parseInt(s.data("id"), 10));
				n.isLoggedIn() || this.track("loginmodal-open", {
					module: "LogIn",
					action: "Click",
					region: "Marginalia",
					eventName: "Recommend"
				}), a.recommend(t, this.model.getAsset(), this, i)
			},
			updateRecCount: function(e, t) {
				var i, n = "";
				e.getRecommendations() > 0 && (n = '<span class="recommend-count"><i class="icon"></i>' + e.getRecommendations() + "</span>"), e.isRecommended() ? (t.html(n + "Recommended").addClass("recommended"), i = "Rec") : (t.html(n + "Recommend").removeClass("recommended"), i = "Un-Rec"), this.track("recommend-comment", {
					eventName: i,
					module: "Comments",
					action: "Click",
					region: "Comments"
				})
			},
			handleShare: function(e) {
				var t = this.$(e.target).data("share") || this.$(e.target).parent().data("share"),
					i = o[t.toUpperCase()];
				this.shareData = new h(this.$(e.target).parents(".comment:first")), this.shareTools = new a({
					el: this.$el.find(".sharetools"),
					modalSettings: {
						shares: "facebook,twitter"
					},
					shareData: this.shareData
				}), "facebook" === t ? this.shareTools.popupShareWindow(i) : this.shareTools.handleShortUrlShareAction(i), this.track("comments-share", {
					module: "ShareTools",
					action: "Click",
					version: "CommentsPanel",
					region: "Comments",
					eventName: "Share-" + (t || "").toLowerCase()
				})
			},
			renderAd: function() {
				this.settings.adPlacement && this.broadcast("nyt:ads-new-placement", this.settings.adPlacement)
			},
			renderForm: function() {
				var e = this;
				this.model.isOpen() && (this.$(".thread-form").html(this.formTemplate({
					user: this.model.getUser(),
					confirmPost: !1,
					gatewayLabel: this.model.getPrompt(),
					gatewayPlaceholder: this.settings.defaultPrompt
				})).on("change keyup cut paste", function() {
					e.updateCount(e.$(".thread-form")), e.toggleSubmitButton(e.$(".thread-form"))
				}), this.toggleForm(), c(), this.checkAvatars(), this.model.getUser().on("sync", this.updateUserInfo.bind(this)))
			},
			updateUserInfo: function() {
				var e = this.model.getUser(),
					t = this.$(".thread-form");
				t.find(".commenter").text(e.getName()), t.find(".commenter-location").text(e.getLocation()), e.getNotify() ? t.find(".comment-notify").attr("checked", "checked") : t.find(".comment-notify").removeAttr("checked"), e.hasAvatar() && t.find(".avatar img").attr("src", e.getAvatar())
			},
			toggleForm: function(e) {
				var t;
				e ? (t = this.$(e.target), t.hasClass("comment-flag") && !n.isLoggedIn() && this.track("loginmodal-open", {
					module: "LogIn",
					action: "Click",
					region: "Marginalia",
					eventName: "flag"
				}), 0 === t.parents(".thread-form").length ? this.toggleForm() : n.isLoggedIn() ? (this.$(".thread-form .primary-control").hide(), this.$(".thread-form .secondary-control").show(), t.hasClass(".thread-form") && t.find("textarea").focus()) : (t.blur(), e.preventDefault(), e.stopPropagation(), this.track("loginmodal-open", {
					module: "LogIn",
					action: "Click",
					region: "Marginalia",
					eventName: "ShareYourThoughts"
				}), this.broadcast("nyt:loginmodal-open", {
					modalTitle: "Log in to comment",
					moduleName: "CommentsPanel"
				}))) : (this.$(".thread-form .secondary-control").hide(), this.$(".thread-form .primary-control").show())
			},
			confirmPost: function(e, t) {
				var i = t.$formControl || this.$(".thread-form");
				this.toggleSubmitButton(i, !1), this.toggleTextBox(i, !1), i.html(this.formTemplate({
					user: this.model.getUser(),
					confirmPost: !0,
					message: e,
					showAvatar: this.settings.showAvatar,
					showLocation: this.settings.showLocation,
					gatewayLabel: this.model.getPrompt(),
					gatewayPlaceholder: this.settings.defaultPrompt
				})), i.find("form").hide().parent().find(".comment-confirmation").show()
			},
			updateCount: function(e) {
				var t = this.settings.maxCharCount - e.find(".comment-textarea").val().length;
				e.find(".comment-character-count").text(t)
			},
			checkUserInfo: function(e) {
				var t = e.find(".commenter-input").length > 0 ? e.find(".commenter-input").val() : null,
					i = e.find(".commenter-location-input").length > 0 ? e.find(".commenter-location-input").val() : null,
					n = !1,
					s = new RegExp(/^([a-zA-Z0-9])+([a-zA-Z0-9\._\-])*@([a-zA-Z0-9_\-])+([a-zA-Z0-9\._\-]+)+$/);
				return null === t || 0 !== t.length && !s.test(t) ? null === i || 0 !== i.length && !s.test(i) || (n = !0) : n = !0, this.toggleFormError(e, n, "user-info"), !n
			},
			toggleFormError: function(e, t, i) {
				var n, s;
				t ? (n = "removeClass", s = "attr") : (n = "addClass", s = "removeAttr"), e.find("." + i + "-error")[n]("hidden")[s]("aria-live", "assertive")[s]("role", "alert")
			},
			checkCommentForm: function(e) {
				var t = parseInt(e.find(".comment-character-count").text(), 10),
					i = !1,
					n = !1;
				return 0 > t ? (i = !0, n = !0) : t === this.settings.maxCharCount && (n = !0), this.toggleFormError(e, i, "character"), !n
			},
			toggleSubmitButton: function(e, t) {
				var i, n, s;
				"undefined" == typeof t ? (i = !this.checkUserInfo(e), n = !this.checkCommentForm(e), s = i || n) : s = t, s ? e.find(".comment-submit-button").attr("disabled", "disabled").addClass("disabled") : e.find(".comment-submit-button").removeAttr("disabled").removeClass("disabled")
			},
			toggleEmpty: function(e) {
				n.isLoggedIn() && ("undefined" == typeof e && 0 === this.model.totalPosts() ? (this.$(".thread-form .primary-control").hide(), this.$(".thread-form .secondary-control").show()) : e && (this.$(".thread-form .primary-control").hide(), this.$(".thread-form .secondary-control").show()))
			},
			submitForm: function(e) {
				var t = this.$(e.target),
					i = t.closest(".comment"),
					n = i.data("id"),
					s = i.data("parentid"),
					a = t.closest(".form-control"),
					o = /<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi,
					r = {
						$formControl: a,
						parentId: n,
						ancestorId: s
					};
				a.find(".commenter-input").length && (this.model.getUser().setName(this.stripHtml(a.find(".commenter-input").val().replace(o, ""))), this.model.getUser().setLocation(this.stripHtml(a.find(".commenter-location-input").val().replace(o, "")))), this.toggleSubmitButton(a, !0), this.toggleTextBox(a, !0), this.model.post(this, {
					commentBody: this.stripHtml(a.find(".comment-textarea").val().replace(o, "")),
					commentNotify: a.find(".comment-notify").is(":checked")
				}, r), e.preventDefault(), "undefined" == typeof n ? this.track("post-comment-new", {
					module: "Comments",
					version: "RecentComments",
					action: "Click",
					region: "Marginalia",
					eventName: "comments-submit-new",
					eventType: "interaction"
				}) : this.track("post-comment-reply", {
					module: "Comments",
					version: "RecentComments",
					action: "Click",
					region: "Marginalia",
					eventName: "comments-submit-reply",
					eventType: "interaction"
				})
			},
			toggleTextBox: function(e, t) {
				t ? e.find("textarea").attr("disabled", "disabled").addClass("disabled") : e.find("textarea").removeAttr("disabled").removeClass("disabled");
			},
			toggleReplyForm: function(e) {
				var t = this.$(".thread-form"),
					i = this.$(e.target).closest(".comment"),
					s = i.find(".reply-form-control").first(),
					a = i.closest(".comments-view, .comment-permalink-view"),
					o = this;
				0 === s.find(".secondary-control").length && n.isLoggedIn() && (s = s.append('<form class="comment-form comment-reply-form">').find("form"), a.find(".secondary-control").parents(".reply-form-control").empty(), t.find(".secondary-control").each(function(e, i) {
					t.find(i).clone().show().appendTo(s.show().focus())
				}), s.on("change keyup cut paste", function() {
					o.updateCount(o.$(".reply-form-control")), o.toggleSubmitButton(o.$(".reply-form-control"))
				}), s.find(".comment-character-count").html(this.settings.maxCharCount), s.find(".comment-submit-button").attr("disabled", "disabled").addClass("disabled"))
			},
			renderFlagModal: function() {
				n.isLoggedIn() && (this.$flagModal = new r({
					model: this.model,
					view: this
				}))
			},
			renderVerifiedModal: function() {
				this.$verifiedModal = new l
			},
			cloneHeader: function() {
				this.$clonedHeader = this.$header.clone().find(".form-control").remove().end().hide(), this.$el.append(this.$clonedHeader)
			},
			toggleHeader: function() {
				this.$panelBody.position().top < 0 ? this.$clonedHeader.isDown || this.slideHeaderDown() : this.$clonedHeader.isDown && this.slideHeaderUp()
			},
			toggleLoader: function(e) {
				this.$loader[e ? "show" : "fadeOut"]()
			},
			confirmFlagged: function(e) {
				this.$("[data-id=" + e + "]").find(".comment-flag:first").addClass("comment-reported").html("Reported")
			},
			readHash: function() {
				var e = this.pageManager.getUrlHash(),
					t = !1;
				"commentsContainer" === e ? (this.broadcast("nyt:community-commentspanel-open"), t = !0) : e.indexOf("permid") > -1 && (this.broadcast("nyt:community-commentspanel-open", e.substr(7)), t = !0), t && this.track("auto-open-comments-panel", {
					module: "Comments",
					version: "AutoOpen",
					action: "click",
					region: "FixedRight",
					eventName: "OpenCommentsPanel"
				})
			},
			resetForms: function() {
				this.$(".thread-form .comment-textarea").length > 0 && (this.updateCount(this.$(".thread-form").find("textarea").val("").end()), this.toggleSubmitButton(this.$(".thread-form"))), this.$(".reply-form-control .comment-textarea").length > 0 && (this.updateCount(this.$(".reply-form-control").find("textarea").val("").end()), this.toggleSubmitButton(this.$(".reply-form-control")))
			},
			track: function(e, i) {
				this.trackingTrigger(e, t.extend(this.getTrackingParams(), i))
			},
			slideHeaderDown: function() {
				this.$header.addClass("invisible"), this.$clonedHeader.isDown = !0, this.$clonedHeader.stop(!0).show().css({
					position: "absolute",
					top: "-" + this.$clonedHeader.height() + "px"
				}).removeClass("hidden").animate({
					top: 0,
					opacity: 1
				}, this.settings.animateSpeed)
			},
			slideHeaderUp: function() {
				this.$clonedHeader.isDown = !1, this.$clonedHeader.stop(!0).addClass("hidden"), this.$header.removeClass("invisible")
			}
		}));
		return u
	}), define("article/story/instances/community", ["foundation/hosts", "shared/community/collections/community-loader", "shared/community/views/comments-panel", "shared/community/views/comments-button", "shared/community/views/comments-peek", "shared/community/views/comments"], function(e, t, i, n, s, a) {
		"use strict";
		(new t).enabled(function() {
			new i, new a({
				el: ".panel-content"
			}), new s({
				el: ".selected-comment-marginalia",
				header: "Recent Comments",
				showLocation: !1,
				dateFormat: "interval"
			}), new s({
				el: ".featured-comment-marginalia",
				header: "Featured Comment",
				isExcerpt: !0
			}), new s({
				el: ".comment-prompt-marginalia",
				isPrompt: !0
			}), new n({
				el: ".comments-button.theme-speech-bubble",
				defaultText: "",
				hideWhenClosed: !1,
				showUnits: !1
			}), new n({
				el: ".comments-button.theme-speech-bubble-x-small",
				showUnits: !1
			}), new n({
				el: ".comments-button.theme-speech-bubble-small",
				showUnits: !1
			}), new n({
				el: ".comments-button.theme-speech-bubble-large",
				defaultText: "Write A Comment",
				hideWhenClosed: !0,
				hasAbTest: !0
			}), new n({
				el: ".comments-button.theme-upshot",
				defaultText: "Comment"
			}), new n({
				el: ".comments-button.theme-story-footer",
				defaultText: "Comment"
			})
		})
	}), define("article/story/views/related-combined-coverage/related-combined-coverage", ["underscore/nyt", "jquery/nyt", "foundation/views/base-view"], function(e, t, i) {
		"use strict";
		var n = i.extend({
			el: "#related-combined-coverage",
			events: {
				"click .show-all-button": "handleLoadAllClick"
			},
			handleLoadAllClick: function() {
				t("#story-menu-additional-set").removeClass("hidden"), t(".story-menu-options").addClass("hidden"), this.$el.find("#story-menu-additional-set li:first a:first").focus()
			}
		});
		return n
	}), define("article/story/instances/related-combined-coverage", ["foundation/views/page-manager", "article/story/views/related-combined-coverage/related-combined-coverage"], function(e, t) {
		"use strict";
		e.getMeta("errorpage") || new t
	}), define("shared/ribbon/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.ad = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<li class="collection-item ribbon-ad-container">\n<div id="Ribbon" class="ad ribbon-ad">\n</div>\n</li>';
			return __p
		}, templates.article = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) {
				__p += '<li class="collection-item ' + (null == (__t = classString) ? "" : __t) + ' " >\n<a class="story-link" href="' + (null == (__t = newLink) ? "" : __t) + '">\n<div class="story-container">\n<article class="story theme-summary">\n';
				var image = article.getCrop("thumbStandard");
				__p += "\n", _.isEmpty(image) || hideImage || (__p += '\n<div class="thumb">\n<img src="' + (null == (__t = image.url) ? "" : __t) + '" alt="" />\n<div class="media-action-overlay">\n', __p += article.isSlideshow() || article.isPromoMediaTypeSlideshow() ? '\n<i class="icon sprite-icon slideshow-icon"></i>\n<span class="overlay-text visually-hidden">View Slideshow</span>\n' : article.isVideo() || article.isPromoMediaTypeVideo() ? '\n<i class="icon sprite-icon video-icon"></i>\n<span class="overlay-text visually-hidden">Play Video</span>\n' : '\n<i class="icon sprite-icon ' + (null == (__t = image.type) ? "" : __t) + '-icon"></i>\n<span class="overlay-text visually-hidden">' + (null == (__t = image.typeName) ? "" : __t) + "</span>\n", __p += "\n</div>\n</div>\n"), __p += "", "" !== article.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = article.get("kicker")) ? "" : __t) + "</h3>\n"), __p += '<h2 class="story-heading" title="' + (null == (__t = article.get("headline")) ? "" : __t) + '">' + (null == (__t = article.get("headline")) ? "" : __t) + "</h2>\n</article>\n</div>\n</a>\n</li>"
			}
			return __p
		}, templates.ribbonPageNavTip = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="placeholder-button-group">\n<div class="placeholder-button"><div class="previous"></div></div>\n<div class="placeholder-button"><div class="next"></div></div>\n</div>\n<h4>New!</h4>\n<p>Use your left and right arrow keys to browse articles.</p>';
			return __p
		}, templates.ribbonPageNavigation = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<nav data-href="' + (null == (__t = link) ? "" : __t) + '" data-queue-ad="' + (null == (__t = shouldQueueAd) ? "" : __t) + '" class="ribbon-page-navigation ' + (null == (__t = direction) ? "" : __t) + '" style="display:' + (null == (__t = display) ? "" : __t) + '; overflow:hidden;">\n<a href="' + (null == (__t = link) ? "" : __t) + '" >\n<article class="story theme-summary ', _.isEmpty(image) && (__p += " no-thumb "), __p += '" style="display:none;">\n', _.isEmpty(image) || (__p += '\n<div class="thumb">\n<img src="' + (null == (__t = image.url) ? "" : __t) + '" />\n</div>\n'), __p += '\n<div class="summary">\n', kicker && (__p += '\n<h3 class="kicker">' + (null == (__t = kicker) ? "" : __t) + "</h3>\n"), __p += '\n<h2 title="' + (null == (__t = title) ? "" : __t) + '" class="story-heading">' + (null == (__t = title) ? "" : __t) + '</h2>\n</div>\n</article>\n<div class="arrow arrow-', __p += "next" === direction ? "right" : "left", __p += '">\n<span class="visually-hidden">Go to the ' + (null == (__t = direction) ? "" : __t) + ' story</span>\n<div class="arrow-conceal"></div>\n</div>\n</a>\n</nav>';
			return __p
		}, templates.storyCollection = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<li class="collection ' + (null == (__t = collectionLabel.type) ? "" : __t) + '-collection">\n', collectionLabel.title && (__p += '\n<div class="collection-marker">\n<h2 class="label"><a href="' + (null == (__t = collectionLabel.url) ? "" : __t) + '">' + (null == (__t = collectionLabel.title) ? "" : __t) + "</a></h2>\n</div>\n"), __p += '\n<ol class="collection-menu">\n' + (null == (__t = storyCollection) ? "" : __t) + "\n</ol>\n</li>";
			return __p
		}, templates
	}), define("shared/data/models/article", ["underscore/nyt", "backbone/nyt"], function(e, t) {
		"use strict";
		var i = t.Model.extend({
			defaults: {
				title: "",
				kicker: "",
				pubdate: "",
				link: "",
				media: [{
					caption: "",
					"media-metadata": [{
						url: ""
					}]
				}],
				promotional_media: [{
					image: {
						image_crops: {}
					}
				}],
				processed: !1
			},
			initialize: function() {
				this.adjustKicker()
			},
			adjustKicker: function() {
				this.isOpinion() && this.get("authors") && this.set("kicker", this.get("authors")[0])
			},
			isOpinion: function() {
				return "Op-Ed Columnist" === this.get("kicker") || "Opinionator" === this.get("kicker")
			},
			getCrop: function(e) {
				var t = this.get("promotional_media"),
					i = "",
					n = "image";
				try {
					if (t.type && "image" !== t.type) {
						switch (n = t.type) {
							case "video":
								i = "Play Video";
								break;
							case "slideshow":
								i = "View Slideshow";
								break;
							case "interactive":
								i = "View Interactive";
								break;
							default:
								i = "View Media"
						}
						t = t.promotional_media
					}
					return t.image.image_crops[e].type = n, t.image.image_crops[e].typeName = i, t.image.image_crops[e]
				} catch (s) {
					return {}
				}
			},
			getLink: function() {
				return this.get("link")
			},
			getType: function() {
				var e = "";
				return this.get("type") ? e = this.get("type") : this.get("item_type") && (e = this.get("item_type")), e.toLowerCase()
			},
			isVideo: function() {
				return "video" === this.getType()
			},
			isSlideshow: function() {
				var e = this.getType();
				return "imageslideshow" === e || "slideshow" === e
			},
			isPromoMediaTypeSlideshow: function() {
				var e = this.get("promotional_media");
				return "slideshow" === e.type
			},
			isPromoMediaTypeVideo: function() {
				var e = this.get("promotional_media");
				return "video" === e.type
			},
			getVideoKicker: function() {
				return this.get("kicker") ? this.get("kicker") : this.get("section")
			},
			createDateObject: function(e) {
				var t, i, n = new Date(e);
				return n.getDate() || e.search(/\d+T\d+/) >= 0 && (t = e.split("T")[0], i = t.split("-"), n = new Date(i[0], i[1] - 1, i[2])), n
			},
			getFormattedDate: function(e) {
				var t, i = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
				return e = e || this.get("pubDate"), t = this.createDateObject(e), i[t.getMonth()] + " " + t.getDate() + ", " + t.getFullYear()
			},
			getDatetime: function(e) {
				var t;
				return e = e || this.get("pubDate"), t = this.createDateObject(e), t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
			}
		});
		return i
	}), define("shared/data/collections/trending-pages", ["underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/hosts", "shared/data/models/article", "shared/data/helpers/collection-mixin"], function(e, t, i, n, s, a) {
		"use strict";
		var o = i.extend(e.extend({}, a, {
			model: s,
			url: n.s1Host + "/du/trending/top_pages.jsonp",
			sync: function(e, i, n) {
				return n.dataType = "jsonp", n.jsonpCallback = "top_pages_callback", n.jsonp = "callback", n.cache = !0, t.sync(e, i, n)
			},
			parse: function(t) {
				var i = t.top_pages;
				return this.last_updated = t.updated_ts, e.map(i, function(e) {
					e.link = e.url
				}), i
			},
			getIdentifier: function() {
				return "src=trending"
			}
		}));
		return o
	}), define("shared/data/instances/trending-pages", ["shared/data/collections/trending-pages"], function(e) {
		"use strict";
		return new e
	}), define("shared/data/collections/recommendations", ["backbone/nyt", "foundation/collections/base-collection", "shared/data/models/article", "foundation/hosts", "underscore/nyt", "shared/data/helpers/collection-mixin"], function(e, t, i, n, s, a) {
		"use strict";
		var o = t.extend(s.extend({}, a, {
			model: i,
			url: "../../../../../www.nytimes.com/svc/recommendations/v3/personalized.json",
			sync: function(t, i, n) {
				return n.cache = !0, n.data = {
					access_key: "776ACB1E-6C7F-4702-9E18-CF329376F5A3",
					location: this.pageManager.getApplicationName()
				}, n.xhrFields = {
					withCredentials: !0
				}, e.sync(t, i, n)
			},
			parse: function(e) {
				var t = this,
					i = s.map(e.suggestions, function(e) {
						var i = e.thumbs || {};
						return e.promotional_media = {
							image: {
								image_crops: {
									thumbStandard: e.thumbnail,
									mediumThreeByTwo210: t.getCrop(i, "mediumThreeByTwo210")
								}
							}
						}, e.kicker && "Video" === e.item_type && (e.kicker = "Video | " + e.kicker), e.byline ? e.authors = [e.byline.replace("By ", "").replace(/\w\S*/g, function(e) {
							return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
						})] : e.authors = "", e.description = e["abstract"], e.link = e.url, e.headline = e.title, e.pubDate = e.published_date, e
					});
				return this.num_articles = e.num_articles, this.uid = e.uid, this.user_displayname = e.user_displayname, this.user_pic_url = e.user_pic_url, i
			},
			getCount: function() {
				return this.num_articles || 0
			},
			getUserId: function() {
				return this.uid || 0
			},
			getUserDisplayName: function() {
				return this.user_displayname || null
			},
			getUserPictureUrl: function() {
				return this.user_pic_url || null
			},
			getCrop: function(e, t) {
				var i, n;
				for (i = 0, n = e.length; n > i; i += 1)
					if (e[i].type === t) return e[i].url = e[i].content, e[i]
			},
			getIdentifier: function() {
				return "src=recg"
			}
		}));
		return o
	}), define("shared/data/instances/recommendations", ["jquery/nyt", "foundation/views/page-manager", "shared/data/collections/recommendations"], function(e, t, i) {
		"use strict";
		return new i
	}), define("shared/data/collections/context", ["backbone/nyt", "foundation/collections/base-collection", "shared/data/models/article", "underscore/nyt", "shared/data/helpers/collection-mixin"], function(e, t, i, n, s) {
		"use strict";
		var a = t.extend(n.extend({}, s, {
			model: i,
			sync: function(t, i, n) {
				var s, a = this.pageManager.getMeta("article:collection");
				return a ? (n.url = a, n.dataType = "jsonp", s = n.url.match(/sectionfronts\/(.+)\/index/) || ["", "homepage"], n.jsonpCallback = "jsonFeedCallback_" + s[1].replace(/\/|\-/g, "_"), this.sectionId = s[1], e.sync(t, i, n)) : null
			},
			parse: function(e) {
				return this.sectionName = e.title.replace("NYT > ", ""), this.sectionUrl = e.link, e.items
			}
		}));
		return a
	}), define("shared/data/instances/context", ["jquery/nyt", "foundation/views/page-manager", "shared/data/collections/context"], function(e, t, i) {
		"use strict";
		return new i
	}), define("shared/data/collections/top-news", ["underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "shared/data/models/article", "foundation/hosts", "shared/data/helpers/collection-mixin"], function(e, t, i, n, s, a) {
		"use strict";
		var o = i.extend(e.extend({}, a, {
			model: n,
			initialize: function() {
				this.url = s.staticHost + ("us" === this.pageManager.getEdition() ? "/services/json/sectionfronts/index.jsonp" : "/services/json/sectionfronts/international/index.jsonp")
			},
			sync: function(e, i, n) {
				return n.dataType = "jsonp", n.jsonpCallback = "us" === this.pageManager.getEdition() ? "jsonFeedCallback_homepage" : "jsonFeedCallback_international", t.sync(e, i, n)
			},
			parse: function(e) {
				var t;
				if (e.items[0] && e.items[0].pubdate)
					for (t = 0; t < e.items.length; t++) e.items[t].pubdate = this.formatPubDate(e.items[t].pubdate, !0), e.items[t].datetime = this.formatPubDate(e.items[t].pubdate, !1);
				return e.items
			},
			formatPubDate: function(e, t) {
				var i, n = new Date(e),
					s = n.getDate(),
					a = n.getMonth(),
					o = n.getFullYear(),
					r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
				return i = t === !0 ? r[a] + ". " + s + ", " + o : o + "-" + a + "-" + s
			},
			getIdentifier: function() {
				return "rref=homepage"
			}
		}));
		return o
	}), define("shared/data/instances/top-news", ["jquery/nyt", "foundation/views/page-manager", "shared/data/collections/top-news"], function(e, t, i) {
		"use strict";
		return new i
	}), define("shared/data/collections/section-origin", ["underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "shared/data/models/article", "foundation/hosts", "shared/data/helpers/collection-mixin"], function(e, t, i, n, s, a) {
		"use strict";
		var o = i.extend(e.extend({}, a, {
			model: n,
			sync: function(e, i, n) {
				var a, o, r = this.pageManager.getUrlParam("rref");
				return r ? a = r : (o = this.createAnchor(document.referrer), a = o.pathname.match(/pages\/(.+)\//)[1]), n.url = s.staticHost + "/services/json/sectionfronts/" + a + "/index.jsonp", n.dataType = "jsonp", n.jsonpCallback = "jsonFeedCallback_" + a.replace(/\/|\-/g, "_"), this.sectionId = a, t.sync(e, i, n)
			},
			parse: function(e) {
				return this.sectionName = e.title.replace("NYT > ", ""), this.sectionUrl = e.link, e.items
			}
		}));
		return o
	}), define("shared/data/instances/section-origin", ["jquery/nyt", "foundation/views/page-manager", "shared/data/collections/section-origin"], function(e, t, i) {
		"use strict";
		return new i
	}), define("shared/data/collections/nyt-collection", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/hosts", "foundation/views/page-manager", "shared/data/helpers/collection-mixin", "shared/data/models/article"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = n.extend(t.extend({}, o, {
			model: r,
			url: s.ADDCollectionHost + "/svc/collections/v1/publish/" + s.wwwDomain,
			IDQuery: "",
			typeQuery: "",
			meta: "",
			type: "",
			relativeUrl: "",
			initialize: function(e, i) {
				t.bindAll(this, "getName", "getURL"), this.relativeUrl = i.relativeUrl ? i.relativeUrl : "", this.url = this.url + this.relativeUrl
			},
			sync: function(e, t, n) {
				return n.dataType = "json", n.cache = !0, n.data = {
					dom: s.wwwDomain
				}, i.sync(e, t, n)
			},
			parse: function(e) {
				var i, n, s, a;
				for (a = 0; a < e.members.items.length; a++) e.members.items[a].pubdate = this.formatPubDate(1e3 * e.members.items[a].publication_date, !0), e.members.items[a].datetime = this.formatPubDate(1e3 * e.members.items[a].publication_date, !1);
				return i = t.map(e.members.items, function(e) {
					return s = e.promotional_media, s && s.image && s.image.image_crops && (n = s.image.image_crops, n.mediumThreeByTwo210 && n.mediumThreeByTwo210.length > 0 ? e.thumbnail = n.mediumThreeByTwo210 : e.thumbnail = n.thumbWide || ""), "video" === e.data_type && (e.kicker = "Video"), e.link = e.url, e
				}), this.meta = e.papi.result, this.type = this.meta.data_type, i
			},
			formatPubDate: function(e, t) {
				var i, n = new Date(e),
					s = n.getDate(),
					a = this.dateHelper.getMonthShortName(n.getMonth()),
					o = n.getFullYear();
				return i = t === !0 ? a + " " + s + ", " + o : o + "-" + a + "-" + s
			},
			getIdentifier: function() {
				var e = ["collection"];
				return e[1] = this.type, e[2] = this.getID(), "rref=" + e.join("/")
			},
			getName: function() {
				return this.meta[this.type] && this.meta[this.type].display_name ? this.meta[this.type].display_name : ""
			},
			getDescription: function() {
				return this.meta[this.type] && this.meta[this.type].long_description ? this.meta[this.type].long_description : ""
			},
			getTagLine: function() {
				return this.meta[this.type] && this.meta[this.type].tagline ? this.meta[this.type].tagline : ""
			},
			getURL: function() {
				if ("column" === this.type) {
					if (this.meta[this.type] && this.meta[this.type].url) return this.meta[this.type].url;
					if (this.meta[this.type] && this.meta[this.type].landing_page_url) return this.meta[this.type].landing_page_url
				} else if (this.meta.url) return this.meta.url;
				return ""
			},
			getTone: function() {
				return this.meta.tone ? this.meta.tone.toLowerCase() : ""
			},
			getID: function() {
				if ("column" != this.type) {
					if (this.meta.data_name) return this.meta.data_name
				} else if (this.meta[this.type] && this.meta[this.type].name) return this.meta[this.type].name;
				return ""
			},
			getType: function() {
				return this.meta.data_type ? this.meta.data_type : ""
			},
			getAuthorImageAssetId: function() {
				var e = this.meta.authors[0];
				return e && e.image && e.image.data_id ? e.image.data_id : ""
			}
		}));
		return l
	}), define("shared/data/instances/nyt-collection", ["jquery/nyt", "foundation/views/page-manager", "shared/data/collections/nyt-collection"], function(e, t, i) {
		"use strict";
		return new i([], {
			typeQuery: t.getMeta("nyt-collection:type"),
			IDQuery: t.getMeta("nyt-collection:identifier"),
			relativeUrl: t.getMeta("nyt-collection:uri")
		})
	}), define("shared/ribbon/collections/ribbon", ["backbone/nyt", "underscore/nyt", "foundation/collections/base-collection", "shared/data/models/article", "foundation/hosts", "foundation/models/user-data", "shared/data/instances/trending-pages", "shared/data/instances/recommendations", "shared/data/instances/context", "shared/data/instances/top-news", "shared/data/instances/section-origin", "shared/data/instances/nyt-collection"], function(e, t, i, n, s, a, o, r, l, d, c, h) {
		"use strict";
		var u = i.extend({
			url: function() {
				return t.isFunction(this.feedUrl) && this.handleFeedAsFunction(this.feedUrl), this.feedUrl || ""
			},
			model: n,
			initialize: function(e) {
				t.bindAll(this, "getTrending", "getContext", "getTopNews", "getRecommendations", "getOrigin", "getNytCollection"), this.collectionLabels = [], this.feedSource = [{
					nytCollection: this.getNytCollection
				}, {
					origin: this.getOrigin
				}, {
					context: this.getContext
				}, {
					trending: this.getTrending
				}, {
					homepage: this.getTopNews
				}, {
					recommendations: this.getRecommendations
				}, {
					world: s.staticHost + "/services/json/sectionfronts/world/index.jsonp"
				}, {
					us: s.staticHost + "/services/json/sectionfronts/national/index.jsonp"
				}, {
					business: s.staticHost + "/services/json/sectionfronts/business/index.jsonp"
				}, {
					opinion: s.staticHost + "/services/json/sectionfronts/opinion/index.jsonp"
				}, {
					technology: s.staticHost + "/services/json/sectionfronts/technology/index.jsonp"
				}, {
					politics: s.staticHost + "/services/json/sectionfronts/politics/index.jsonp"
				}, {
					sports: s.staticHost + "/services/json/sectionfronts/sports/index.jsonp"
				}, {
					science: s.staticHost + "/services/json/sectionfronts/science/index.jsonp"
				}, {
					health: s.staticHost + "/services/json/sectionfronts/health/index.jsonp"
				}, {
					arts: s.staticHost + "/services/json/sectionfronts/arts/index.jsonp"
				}, {
					style: s.staticHost + "/services/json/sectionfronts/style/index.jsonp"
				}, {
					nyregion: s.staticHost + "/services/json/sectionfronts/nyregion/index.jsonp"
				}], this.currentArticleUrl = e.currentArticleUrl, this.originalLoadType = "context", this.feedUrl = this.setFeedUrl(e.sectionFeedUrl), this.subscribe(this, "sync", this.setCurrentArticle)
			},
			loadData: function() {
				t.isFunction(this.feedUrl) ? this.handleFeedAsFunction(this.feedUrl) : this.fetch()
			},
			sync: function(t, i, n) {
				var s = this.url().match(/sectionfronts\/(.+)\/index/) || ["", "homepage"];
				return n.dataType = "jsonp", n.jsonpCallback = "jsonFeedCallback_" + s[1].replace("/", "_"), this.sectionId = "rref=" + s[1], e.sync(t, i, n)
			},
			setCurrentArticle: function() {
				var e = this;
				this.currentArticle = this.find(function(t) {
					return t.get("link") === e.currentArticleUrl
				})
			},
			parse: function(e) {
				return this.prepCollection(e.items.slice(0, 20), e.title.replace("NYT > ", ""), e.link, "news")
			},
			getFeedSourceValue: function(e) {
				var t, i;
				for (t = 0, i = this.feedSource.length; i > t; t++)
					if (this.feedSource[t].hasOwnProperty(e)) return this.feedSource[t][e]
			},
			removeFeedByKey: function(e) {
				var i, n;
				for (i = 0, n = this.feedSource.length; n > i; i++)
					if (t.keys(this.feedSource[i])[0] === e) return void this.feedSource.splice(i, 1)
			},
			removeFeedByUrl: function(e) {
				var i, n, s, a = this.createAnchor(e).pathname;
				for (i = 0, n = this.feedSource.length; n > i; i++)
					if (s = t.values(this.feedSource[i])[0], !t.isFunction(s) && s.indexOf(a) > -1) return void this.feedSource.splice(i, 1)
			},
			createAnchor: function(e) {
				var t = document.createElement("a");
				return t.href = e, t
			},
			isUrlForSection: function(e, t) {
				var i = this.createAnchor(e).pathname,
					n = this.createAnchor(this.getFeedSourceValue(t)).pathname;
				return i === n
			},
			setFeedUrl: function() {
				var e, t, i, n, s = this,
					o = this.pageManager.getUrlParam("src") || "",
					r = this.pageManager.getUrlParam("rref"),
					l = h.IDQuery,
					d = "origin";
				return r && (n = decodeURIComponent(r).split("/")), n && 3 === n.length && n[2] === l ? t = "nytCollection" : !l && n && "collection" === n[0] ? (t = "context", d = "context") : r && "homepage" !== r ? (this.removeFeedByKey(r), t = "origin") : "" === this.pageManager.getUrlParam("hp") || "homepage" === r ? t = "homepage" : this.pageManager.getUrlParam("ref") ? (e = this.createAnchor(document.referrer), /.nytimes.com$/.test(e.host) && /^\/pages/.test(e.pathname) ? t = "origin" : (t = "context", d = "context")) : "trending" === o ? t = "trending" : 0 === o.indexOf("rec") ? t = "recommendations" : (t = "context", d = "context"), i = this.getFeedSourceValue(t), this.originalLoadType = d, l || this.removeFeedByKey("nytCollection"), this.removeFeedByKey("context"), this.removeFeedByKey("origin"), this.removeFeedByKey(t), a.ready(function() {
					a.isLoggedIn() || s.removeFeedByKey("recommendations")
				}), i
			},
			handleFeedAsFunction: function(e) {
				var i = e();
				t.isArray(i) ? (this[1 === this.length ? "reset" : "add"](i.slice(0, 20)), this.local(this, "sync"), this.local(this, "nyt:ribbon-custom-collection-loaded")) : i()
			},
			loadFeed: function() {
				var e;
				return this.feedSource.length > 0 ? (e = t.values(this.feedSource.shift())[0], t.isFunction(e) ? this.handleFeedAsFunction(e) : (this.feedUrl = e, this.fetch({
					remove: !1
				})), !0) : !1
			},
			getAdModel: function() {
				return new n({
					processed: !1,
					isAd: !0
				})
			},
			prepCollection: function(e, t, i, n) {
				var s, a, o = this.collectionLabels.length;
				for (s = 0, a = e.length; a > s; s += 1) e[s].collectionId = o;
				return this.collectionLabels.push({
					title: t,
					url: i,
					type: n
				}), e
			},
			next: function(e) {
				var t, i = this.indexOf(e);
				return t = i === this.length ? 0 : i + 1, this.local(this, "nyt:ribbon-collection-next", this.models[t]), this.models[t]
			},
			previous: function(e) {
				var t, i = this.indexOf(e);
				return t = 0 === i ? this.models.length : i - 1, this.local(this, "nyt:ribbon-collection-previous", this.models[t]), this.models[t]
			},
			importCollection: function(e) {
				var i, n = this,
					s = e.collection.toJSON();
				return s.length > 0 ? (e.name = t.isFunction(e.name) ? e.name() : e.name, e.url = t.isFunction(e.url) ? e.url() : e.url, this.sectionId = e.collection.getIdentifier(), this.prepCollection(s, e.name, e.url, e.type)) : (this.feedSource.unshift(e.callback), function() {
					var t = function() {
						window.clearTimeout(i), n.loadFeed()
					};
					i = window.setTimeout(function() {
						n.stopSubscribing(e.collection, "sync", t), n.feedSource.shift(), n.loadFeed()
					}, 1500), n.subscribeOnce(e.collection, "sync", t)
				})
			},
			getIdentifier: function() {
				return this.sectionId
			},
			getTrending: function() {
				return this.importCollection({
					collection: o.loadData(),
					name: "Trending",
					url: s.www + "/trending",
					type: "trending-pages",
					callback: {
						trending: this.getTrending
					}
				})
			},
			getNytCollection: function() {
				return this.importCollection({
					collection: h.loadData(),
					name: h.getName,
					url: h.getURL,
					type: "nytCollection",
					callback: {
						nytCollection: this.getNytCollection
					}
				})
			},
			getRecommendations: function() {
				return this.importCollection({
					collection: r.loadData(),
					name: "Recommended",
					url: s.www + "/recommendations",
					type: "news",
					callback: {
						recommendations: this.getRecommendations
					}
				})
			},
			getTopNews: function() {
				return this.importCollection({
					collection: d.loadData(),
					name: "Home Page",
					url: s.www,
					type: "news",
					callback: {
						homepage: this.getTopNews
					}
				})
			},
			getContext: function() {
				var e = this.pageManager.getMeta("article:collection") || "";
				return this.removeFeedByUrl(e), this.importCollection({
					collection: l.loadData(),
					name: l.getName(),
					url: l.getUrl(),
					type: "news",
					callback: {
						context: this.getContext
					}
				})
			},
			getOrigin: function() {
				return this.removeFeedByKey(this.pageManager.getUrlParam("ref")), this.importCollection({
					collection: c.loadData(),
					name: c.getName(),
					url: c.getUrl(),
					type: "news",
					callback: {
						origin: this.getOrigin
					}
				})
			}
		});
		return u
	}), define("shared/ribbon/instances/ribbon-data", ["jquery/nyt", "foundation/views/page-manager", "shared/ribbon/collections/ribbon"], function(e, t, i) {
		"use strict";
		var n = e('head link[rel="canonical"]').attr("href"),
			s = t.getMeta("article:collection");
		return new i({
			sectionFeedUrl: s,
			currentArticleUrl: n
		})
	}), define("shared/ribbon/views/helpers/mixin", ["underscore/nyt", "jquery/nyt"], function(e, t) {
		"use strict";
		var i = {
			collectionStoryWidth: 249,
			getActiveModel: function(t) {
				var i = this;
				return e.find(t, function(e) {
					return e.get("link") === i.canonical
				})
			},
			getStoryIndex: function(t, i) {
				var n;
				return i || (i = this.getActiveModel(t)), n = e.indexOf(t, i), n >= 0 ? n : 0
			},
			getAdIndex: function(e) {
				var i, n, s = t("#ribbon"),
					a = this.pageManager.getUrlParam("ribbon-ad-idx");
				return a ? i = a : this.pageManager.getCurrentBreakpoint() <= 1e4 ? (0 === e ? i = n = this.storyUnitsInView() : (n = Math.floor((s.width() - .25 * this.collectionStoryWidth) / this.collectionStoryWidth), i = e + n), n > 1 && (i -= 1)) : i = this.getLargeScreenAdPosition(e), i
			},
			getLargeScreenAdPosition: function(e) {
				var i, n, s, a = "ribbon" === this.$el.attr("id") ? this.$el : t("#ribbon"),
					o = this.storyUnitsInView(a);
				return i = 0 === e ? a.width() : a.width() - .25 * this.collectionStoryWidth, n = i % this.collectionStoryWidth > .25 * this.collectionStoryWidth, s = n ? o - 1 : o - 2, s += e
			},
			storyUnitsInView: function(e) {
				return e || (e = this.$el), Math.floor((e.width() - .25 * this.collectionStoryWidth) / this.collectionStoryWidth)
			},
			createAdsDeferral: function(e) {
				this.pageManager.getMeta("ads_adNames") ? e() : (this.adxTimeout = window.setTimeout(e, 500), this.subscribeOnce("nyt:ads-rendered", e))
			}
		};
		return i
	}), define("shared/ribbon/views/ribbon-page-navigation", ["jquery/nyt", "underscore/nyt", "foundation/hosts", "foundation/views/base-view", "foundation/views/page-manager", "shared/ribbon/instances/ribbon-data", "shared/ribbon/templates", "shared/modal/views/modal", "foundation/models/page-storage", "shared/ribbon/views/helpers/mixin"], function(e, t, i, n, s, a, o, r, l, d) {
		"use strict";
		var c = n.registerView("arrows").extend(t.extend({}, d, {
			el: "body",
			delay: 200,
			speed: 250,
			expandWidth: 275,
			expanded: !1,
			events: {
				"click .ribbon-page-navigation": "changeArticle",
				"mouseenter .ribbon-page-navigation": "showArticle",
				"mouseleave .ribbon-page-navigation": "hideArticle",
				"mouseleave #ribbon-page-navigation-modal .modal": "hideArticle"
			},
			nytEvents: {
				"nyt:comments-panel-opened": "hideRightArrow",
				"nyt:comments-panel-closed": "showRightArrow",
				"nyt:page-drag": "handlePageDrag"
			},
			initialize: function() {
				t.bindAll(this, "preventScroll", "checkForFeed"), this.feed = a, this.subscribe("nyt:ads-fire-ribbon-interstitial", this.ribbonInterstitialFired), this.pageManager.isDomReady() ? this.handlePageReady() : this.subscribe("nyt:page-ready", this.handlePageReady), this.trackingBaseData = {
					module: "ArrowsNav",
					contentCollection: this.pageManager.getMeta("article:section")
				}
			},
			handlePageReady: function() {
				this.restrict = this.pageManager.isComponentVisible(e("#ribbon")), this.createAdsDeferral(this.checkForFeed)
			},
			checkForFeed: function() {
				var e = this;
				this.feed.length > 1 && this.render(), this.subscribeOnce(a, "sync", this.render), l.ready(function() {
					l.get("ribbon_hasViewedTooltip") !== !0 && e.addToolTip()
				})
			},
			render: function() {
				var t = this.feed.currentArticle,
					i = this.feed.previous(t),
					n = this.feed.next(t);
				this.activeStoryIndex = this.getStoryIndex(this.feed.models, this.feed.currentArticle), this.$arrows = e(this.createTemplate("previous", i) + this.createTemplate("next", n)), this.$shell.append(this.$arrows), this.adjustArrows(), this.adjustText(), this.subscribe("nyt:page-resize", this.adjustArrows), this.subscribe("nyt:ribbon-visiblility", this.restrictArrow), this.subscribe("nyt:ribbon-left", this.handleKeyboardLeftArrow), this.subscribe("nyt:ribbon-right", this.handleKeyboardRightArrow), (this.pageManager.isMobile() || this.pageManager.$html.hasClass("has-cover-media")) && this.$arrows.hide()
			},
			adjustArrows: function() {
				var e, t, i = this.pageManager.getCurrentBreakpoint(),
					n = this.$arrows.filter(".previous"),
					s = this.$arrows.filter(".next");
				if (i >= 10070) e = this.$window.width(), t = this.$shell.width(), n.css("left", (e - t) / 2), s.css("right", (e - t) / 2), this.cssControl = !1;
				else {
					if (this.cssControl) return;
					n.css("left", ""), s.css("right", ""), this.cssControl = !0
				}
			},
			adjustText: function() {
				var t, i, n, s;
				this.$arrows.each(function(a, o) {
					n = e(o), i = n.find(".story"), t = n.find(".story .summary"), s = parseInt(i.css("padding-top"), 10), i.css({
						display: "block",
						opacity: 0
					}), t.css("margin-top", n.height() / 2 - t.height() / 2 - s), i.css({
						display: "none",
						opacity: 1
					})
				})
			},
			restrictArrow: function(e) {
				this.restrict = e
			},
			previousPage: function() {
				var e = this.$arrows.filter(".previous"),
					t = e.data("href");
				t && (window.location = t)
			},
			nextPage: function() {
				var e = this.$arrows.filter(".next"),
					t = e.data("href");
				t && (window.location = t)
			},
			createTemplate: function(e, i) {
				var n, s, a, r = {
					direction: e,
					display: "none",
					title: "",
					image: "",
					link: "",
					kicker: "",
					shouldQueueAd: !1
				};
				return i && (t.indexOf(this.pageManager.getMeta("ads_adNames"), "Ribbon") >= 0 && (a = this.getAdIndex(this.activeStoryIndex), n = a - t.indexOf(this.feed.models, i), s = "previous" === e && 1 === n || "next" === e && 0 === n), r = {
					direction: e,
					display: "block",
					title: i.get("headline") || i.get("title"),
					image: i.getCrop("thumbStandard"),
					link: this.processLink(i.get("link"), a),
					kicker: i.get("kicker"),
					shouldQueueAd: s
				}), o.ribbonPageNavigation(r)
			},
			processLink: function(e, t) {
				var n = document.createElement("a");
				return n.href = e, 0 === n.hostname.indexOf("www") && 0 === window.location.hostname.indexOf("www") && (e = 0 === n.pathname.indexOf("/") ? i.www + n.pathname : i.www + "/" + n.pathname), t && (e += "?ribbon-ad-idx=" + t), e += /\?/.test(e) ? "&" : "?", e += this.feed.getIdentifier(), n.search.length > 0 && (e += n.search.replace("?", "&")), e
			},
			changeArticle: function(t) {
				var i, n;
				t.preventDefault(), i = e(t.currentTarget), n = this.trackingAppendParams(i.data("href"), {
					action: "click",
					region: i.is(".next") ? "FixedRight" : "FixedLeft"
				}), this.fireQueuedAd(i) !== !0 && (window.location = n)
			},
			fireQueuedAd: function(t) {
				var i = t.data("queue-ad"),
					n = e(".ribbon-ad");
				return e("#ribbon").find(".collection-item").removeClass("active"), i !== !0 ? !1 : (n.find("> iframe").length > 0 ? (this.broadcast("nyt:ad-library:dfp:ribbon-interstitial"), t.data("queue-ad", !1)) : window.location = n.find("#ribbonAdBodytxt").attr("href"), !0)
			},
			ribbonInterstitialFired: function() {
				this.pageManager.isMobile() && this.$arrows.show()
			},
			preventScroll: function(e) {
				this.scrollLock = !0, e.preventDefault()
			},
			handlePageDrag: function(e, t) {
				var i, n, s, a, o = this.expandWidth,
					r = 0,
					l = this.pageManager.getMeta("mediaviewer_isVisible") || !1;
				return !l && e.gesture && this.$arrows ? (a = 1.5 * e.gesture.distance - 20, this.scrollLock || this.$document.on("touchmove", this.preventScroll), "left" === e.gesture.direction ? n = this.$arrows.filter(".next") : "right" === e.gesture.direction && (n = this.$arrows.filter(".previous")), !n || !n.data("href") || e.gesture.distance < 20 ? (this.$arrows.hide(), this.$document.off("touchmove", this.preventScroll), void(this.scrollLock = !1)) : void("right" === t || "left" === t ? (a = o > a ? a : o, a = a > r ? a : r, i = 100 > a ? "hide" : "show", n.show().css("width", a + "px").find(".story")[i](), this.truncateArticleSummary(n)) : n && "end" === t ? (n.width() < o - 5 ? n.hide() : (s = this.trackingAppendParams(n.data("href"), {
					action: "swipe",
					region: "left" === e.gesture.direction ? "FixedRight" : "FixedLeft"
				}), window.location = s), this.$document.off("touchmove", this.preventScroll), this.scrollLock = !1) : "start" !== t && (this.$arrows.hide(), this.$document.off("touchmove", this.preventScroll), this.scrollLock = !1))) : void 0
			},
			handleKeyboardLeftArrow: function() {
				var e = this.$arrows.filter(".previous"),
					t = this.trackingAppendParams(e.data("href"), {
						action: "keypress",
						region: "FixedLeft"
					});
				this.fireQueuedAd(e) !== !0 && (e.data("href", t), this.previousPage())
			},
			handleKeyboardRightArrow: function() {
				var e = this.$arrows.filter(".next"),
					t = this.trackingAppendParams(e.data("href"), {
						action: "keypress",
						region: "FixedRight"
					});
				this.fireQueuedAd(e) !== !0 && (e.data("href", t), this.nextPage())
			},
			showArticle: function(t) {
				var i = this,
					n = e(t.currentTarget);
				this.restrict || this.expanded || "undefined" == typeof this.$arrows || (this.origWidth = this.$arrows.width(), this.timeout = window.setTimeout(function() {
					n.animate({
						width: i.expandWidth
					}, {
						duration: i.speed,
						complete: function() {
							return i.expanded ? (n.find(".story").fadeIn(i.speed), void i.truncateArticleSummary(n)) : !1
						}
					}), i.expanded = !0
				}, this.delay))
			},
			truncateArticleSummary: function(e) {
				var t = 48,
					i = e.find(".story .summary");
				e.find(".story-heading").height() > t && (this.truncateText(e.find(".story-heading"), t), i.css("margin-top", e.find(".story-heading").height() / 2 - t / 2))
			},
			hideArticle: function(t) {
				var i = this,
					n = e("#ribbon-page-navigation-modal").find(".modal"),
					s = e(n.is(t.currentTarget) ? ".ribbon-page-navigation.next" : t.currentTarget);
				clearTimeout(this.timeout), !this.expanded || n.has(t.relatedTarget).length > 0 || (s.animate({
					width: i.origWidth
				}, {
					duration: this.speed,
					complete: function() {
						s.css("width", "")
					}
				}).find(".story").hide(), this.expanded = !1)
			},
			showRightArrow: function() {
				this.$arrows && this.$arrows.filter(".next").show()
			},
			hideRightArrow: function() {
				this.$arrows && this.$arrows.filter(".next").hide()
			},
			addToolTip: function() {
				var e, t = this,
					i = new r({
						id: "ribbon-page-navigation-modal",
						modalContent: o.ribbonPageNavTip(),
						binding: ".ribbon-page-navigation.next",
						tailDirection: "right",
						canOpenOnHover: !0,
						width: "322px",
						mouseEnterDelay: 500,
						tailTopOffset: -5,
						tailLeftOffset: 9,
						closeOnMouseOut: !0,
						openCallback: function() {
							l.set("ribbon_hasViewedTooltip", !0), e = window.setTimeout(i.close, 2e4), t.subscribeOnce("nyt:page-scroll", i.close)
						},
						closeCallback: function() {
							i.removeFromPage(), window.clearTimeout(e)
						}
					});
				i.addToPage()
			}
		}));
		return c
	}), define("shared/ribbon/views/ribbon", ["jquery/nyt", "underscore/nyt", "foundation/hosts", "foundation/views/base-view", "shared/ribbon/templates", "shared/ribbon/views/ribbon-page-navigation", "shared/ribbon/instances/ribbon-data", "shared/ribbon/views/helpers/mixin", "shared/data/instances/nyt-collection"], function(e, t, i, n, s, a, o, r, l) {
		"use strict";
		var d = n.registerView("ribbon").extend(t.extend({}, r, {
			el: "#ribbon",
			collection: o,
			template: s.storyCollection,
			articleTemplate: s.article,
			adTemplate: s.ad,
			isRibbonVisible: !1,
			isRibbonPermenant: !1,
			firstLoad: !0,
			toggleDisabled: 0,
			oldScrollTop: 0,
			animationDistance: 100,
			minDownDistance: 100,
			minUpDistance: 300,
			speed: 200,
			zIndexMasthead: 1000000090,
			zIndexRibbon: 1000000030,
			hammerSettings: {
				drag_block_vertical: !0,
				swipe_velocity: .7,
				drag_min_distance: 3
			},
			events: {
				"click .collection-menu li a": "handleArticleClick",
				"click .ribbon-navigation-container .next": "handleNextArrow",
				"click .ribbon-navigation-container .previous": "handlePreviousArrow",
				mouseenter: "handleRibbonMouseEnter",
				mouseleave: "handleRibbonMouseOut",
				touch: "handleTouch",
				tap: "handleArticleClick",
				hold: "handleTouchHold",
				dragstart: "handleTouchDragStart",
				drag: "handleRibbonDrag",
				swipe: "handleRibbonSwipe"
			},
			nytEvents: {
				"nyt:page-resize": "resizeRibbon",
				"nyt:messaging-critical-alerts-move-furniture": "moveRibbonForAlerts",
				"nyt:messaging-suggestions-move-furniture": "moveRibbonForAlerts",
				"nyt:messaging-message-critical-alerts-closed": "enableRibbonToggle",
				"nyt:messaging-message-suggestions-closed": "enableRibbonToggle",
				"nyt:comments-panel-opened": "disableRibbonToggle",
				"nyt:comments-panel-closed": "enableRibbonToggle",
				"nyt:masthead-absolute": "disableRibbonToggle",
				"nyt:masthead-fixed": "enableRibbonToggle"
			},
			initialize: function() {
				t.bindAll(this, "handleMouseMove", "handleArticleClick", "handleRibbonAdClick", "hideCollectionMarkers", "pollHiddenCollections", "pollShowingTabs", "revertRibbon", "handleRibbonSwipe", "handleRibbonDrag", "handleTouch", "handleTouchHold", "handleTouchDragStart", "applyTranslateToRibbon", "assignListenersAndLoad"), this.isDesktop = this.pageManager.isDesktop(), this.canonical = this.pageManager.getCanonical(), this.trackingBaseData = {
					module: "Ribbon",
					version: this.collection.originalLoadType,
					region: "Header"
				}, this.listenToOnce(this.collection, "sync", t.bind(function() {
					this.trackingTriggerImpression("ribbon-first-load", {
						eventName: "impression",
						action: "impression",
						contentCollection: this.collection.collectionLabels[0].title
					})
				}, this))
			},
			handleDomReady: function() {
				this.$loader = this.$(".ribbon-loader"), this.$html.addClass("has-ribbon"), this.ribbonMarginTop = parseInt(this.$el.css("margin-top"), 10), this.ribbonMarginBottom = parseInt(this.$el.css("margin-bottom"), 10), this.ribbonHeight = this.$el.height(), this.mastheadHeight = e("#masthead").height() - 3, this.toggleDisabled = 0, this.$ribbonMenu = this.$el.find(".ribbon-menu"), this.$ribbonNavigation = this.$el.find(".ribbon-navigation-container"), this.$previousArrow = this.$ribbonNavigation.find(".previous"), this.$nextArrow = this.$ribbonNavigation.find(".next"), this.isRibbonVisible = this.pageManager.isComponentVisible(this.$el), this.handleFixedRibbon(), this.listenTo(this.pageManager, "nyt:page-scroll", this.handleScroll), this.createAdsDeferral(this.assignListenersAndLoad)
			},
			assignListenersAndLoad: function() {
				window.clearTimeout(this.adxTimeout), this.stopSubscribing("nyt:ads-rendered", this.assignListenersAndLoad), this.listenTo(this.collection, "sync", this.render), this.listenToOnce(this.collection, "sync", this.renderFurniture), this.listenTo(this.collection, "nyt:ribbon-custom-collection-loaded", this.render), this.collection.loadData(), new a
			},
			render: function() {
				var i, n, s, a, o, r, l, d, c = this,
					h = this.collectionStoryWidth + this.animationDistance,
					u = t.indexOf(this.pageManager.getMeta("ads_adNames"), "Ribbon") >= 0;
				i = this.collection.where({
					processed: !1
				}), 0 !== i.length && ((u || this.pageManager.getUrlParam("ribbon-ad-idx")) && this.firstLoad === !0 && (r = this.returnRibbonAdData(i, u), o = r.index, r.model && i.splice(r.index, 0, r.model)), n = this.collection.collectionLabels[i[0].get("collectionId")], n && (s = e(this.template({
					storyCollection: this.createStoryCollection(i, o, n),
					collectionLabel: n
				})), a = this.collection.length * h + this.$loader.width() + this.collection.collectionLabels.length, this.$ribbonMenu.css("width", a), this.$loader.before(s), (this.firstLoad && !this.referredFromArticle() || !this.firstLoad) && this.animateRibbonStories(s), l = this.$el.find("#Ribbon"), l.length > 0 && this.firstLoad === !0 && this.subscribe("nyt:ad-library:dfp:ribbon-ad-visible", function(e) {
					d = e.find("> a"), d.length && d.attr("href", d.attr("href") + "?" + this.collection.getIdentifier()), 0 === e.find(".ribbonAdPaid").length && c.assignHandlerToIframeClick(e.find("iframe"), c.handleRibbonAdClick)
				}), this.assignSyncedHtmlToView(), this.updateCollectionValues(), this.firstLoad = !1, this.broadcast("nyt:ribbon-rendered")))
			},
			createStoryCollection: function(e, i, n) {
				var s, a, o, r = this,
					d = "",
					c = n.type;
				return "nytCollection" === c && (a = l.getAuthorImageAssetId()), t.each(e, function(e, n, l) {
					var h, u, m = [],
						p = e.get("link"),
						g = r.processLink(p, i),
						f = e.get("kicker");
					s = !1, t.isObject(f) && e.set("kicker", f.name), -1 !== p.indexOf(r.canonical) && r.firstLoad && m.push("active"), n === l.length - 1 && m.push("last-collection-item"), h = m.join(" "), e.get("isAd") !== !0 ? ("nytCollection" === c && (o = e.get("promotional_media"), o && o.data_id && (u = o.data_id, u === a && (s = !0))), d += r.articleTemplate({
						article: e,
						classString: h,
						newLink: g,
						hideImage: s
					})) : d += r.adTemplate(), e.set("processed", !0)
				}), d
			},
			processLink: function(e, t) {
				var n = document.createElement("a"),
					s = this.collection.getIdentifier();
				return n.href = e, 0 === n.hostname.indexOf("www") && 0 === window.location.hostname.indexOf("www") && (e = 0 === n.pathname.indexOf("/") ? i.www + n.pathname : i.www + "/" + n.pathname), t && (e += "?ribbon-ad-idx=" + t), e += /\?/.test(e) ? "&" : "?", e += s, n.search.length > 0 && (e += n.search.replace("?", "&")), e
			},
			assignHandlerToIframeClick: function(e, t) {
				var i, n;
				e.length && (i = e.get(0), n = i.contentDocument || i.contentWindow.document, "undefined" != typeof n.addEventListener ? n.addEventListener("click", t, !1) : "undefined" != typeof n.attachEvent && n.attachEvent("onclick", t))
			},
			returnRibbonAdData: function(e, t) {
				var i, n, s = null;
				return n = this.getStoryIndex(e), i = this.getAdIndex(n), t && (s = this.collection.getAdModel()), {
					index: i,
					model: s
				}
			},
			referredFromArticle: function() {
				var e, t = document.createElement("a");
				return document.referrer ? (t.href = document.referrer, e = t.pathname, t.hostname.indexOf("nytimes.com") > -1 && /^(\/\w+)?\/\d+/.test(e)) : !1
			},
			renderFurniture: function() {
				var e = -this.$el.find(".active").index();
				this.ribbonAnimation(e, !0), this.testForCollectionEnd() && this.collection.loadFeed(), Modernizr.touch ? this.assignCustomEasing() : this.collectionMarkerTimeout = setTimeout(this.hideCollectionMarkers, 2e3)
			},
			assignCustomEasing: function() {
				return e.easing.easeOutCirc = function(e, t, i, n, s) {
					return n * Math.sqrt(1 - (t = t / s - 1) * t) + i
				}, this
			},
			matrixToArray: function(e) {
				return e.substr(7, e.length - 8).split(", ")
			},
			returnXForTransform: function() {
				var e = this.$ribbonMenu.css("-webkit-transform");
				return "none" === e ? this.$ribbonMenu.position().left : parseInt(this.matrixToArray(e)[4], 10)
			},
			applyTranslateToRibbon: function(e) {
				var t;
				return isNaN(e) ? void 0 : (t = "translate3d(" + e + "px, 0, 0)", this.$ribbonMenu.css({
					transform: t,
					"-webkit-transform": t,
					msTransform: t
				}))
			},
			handleRibbonDrag: function(e) {
				var t, i, n, s, a = this.returnXForTransform();
				e.gesture && (e.gesture.preventDefault(), t = this.startDragLocation - a, i = 0 === t ? e.gesture.deltaX : e.gesture.deltaX + t, s = this.handleRibbonEdges(a + i), n = this.testForCollectionEnd(this.startDragLocation), this.applyTranslateToRibbon(s), this.testForCollectionEnd() && !n && this.collection.loadFeed(), e.gesture.deltaX < 0 ? this.pollShowingTabs() : this.pollHiddenCollections())
			},
			returnStartingXForTransform: function() {
				var e = this.$ribbonMenu.css("transform");
				return "none" === e ? this.$ribbonMenu.position().left : parseInt(this.matrixToArray(e)[4], 10)
			},
			handleRibbonSwipe: function(e) {
				var i, n, s, a, o, r, l = this,
					d = 2e3;
				e.gesture.preventDefault(), n = 1 + e.gesture.distance / l.$el.width(), s = e.gesture.deltaX * n, o = d / e.gesture.velocityX, a = l.handleRibbonEdges(l.returnXForTransform() + s), r = t.throttle(function() {
					"left" === e.gesture.direction ? l.pollShowingTabs() : l.pollHiddenCollections()
				}), i = {
					duration: o,
					easing: "easeOutCirc",
					step: l.applyTranslateToRibbon,
					progress: r,
					always: function() {
						l.testForCollectionEnd(a) && l.collection.loadFeed(), r()
					}
				}, this.animateSwipe(a, i)
			},
			handleTouch: function(e) {
				e.gesture.preventDefault()
			},
			handleTouchHold: function() {
				this.stopSwipeAnimation()
			},
			handleTouchDragStart: function() {
				this.stopSwipeAnimation(), this.startDragLocation = this.returnXForTransform()
			},
			stopSwipeAnimation: function() {
				this.$swipeAnimationElement && this.$swipeAnimationElement.stop()
			},
			handleRibbonMouseEnter: function() {
				Modernizr.touch || "undefined" == typeof this.$ribbonMenu || (this.$el.on("mousemove", this.handleMouseMove), clearTimeout(this.collectionMarkerTimeout), this.$collectionMarkers && this.$collectionMarkers.fadeIn(150), this.$firstCollectionMarker && this.$firstCollectionMarker.fadeIn(150))
			},
			handleMouseMove: t.throttle(function(e) {
				this.checkForActiveNavigation(e.clientX, e.clientY)
			}),
			handleRibbonMouseOut: function() {
				Modernizr.touch || (this.$el.off("mousemove", this.handleMouseMove), this.hideRibbonArrows(), this.hideCollectionMarkers())
			},
			handleNextArrow: function(t) {
				e(t.currentTarget).hasClass("inactive") || (this.trackingTrigger("ribbon-page-right", {
					eventName: "ScrollRight",
					contentCollection: this.getSectionInView(),
					action: "click"
				}), this.$previousArrow.removeClass("inactive"), this.shiftRibbonLeft())
			},
			handlePreviousArrow: function(t) {
				e(t.currentTarget).hasClass("inactive") || (this.trackingTrigger("ribbon-page-left", {
					eventName: "ScrollLeft",
					contentCollection: this.getSectionInView(),
					action: "click"
				}), this.$nextArrow.removeClass("inactive"), this.shiftRibbonRight())
			},
			handleRibbonAdClick: function(e) {
				var t;
				t = this.$el.find(".ribbon-ad-container"), this.animateRibbon(t), this.broadcast("nyt:ad-library:dfp:ribbon-interstitial", e)
			},
			animateRibbon: function(e) {
				var t, i, n;
				return i = Modernizr.touch ? -1 * this.returnXForTransform() : e.offset().left, t = -1 * Math.floor(i / this.collectionStoryWidth), n = this.ribbonAnimation(t)
			},
			handleArticleClick: function(t) {
				var i, n, s, a, o, r, l, d = e(t.target),
					c = d.parents("li.collection-item");
				c.length > 0 ? (s = c.find("> a, #Ribbon > a"), a = s.attr("href"), a = this.trackingAppendParams(a, {
					action: "click",
					contentCollection: this.getCollectionByArticleElement(c)
				}), t.metaKey !== !0 && t.ctrlKey !== !0 ? (t.preventDefault(), this.$el.find(".collection-item").removeClass("active"), c.addClass("active"), "tap" === t.type ? (r = .25 * this.collectionStoryWidth - c.offset().left, l = this.returnXForTransform() + r, n = this.animateSwipe(l)) : (o = c.offset().left, i = Math.floor(o / this.collectionStoryWidth), n = this.ribbonAnimation(-i)), n.done(function() {
				 var shref = s.attr("href").replace(/^([^?]+)?.*/, '$1'); shref = shref.indexOf('/') === 0 ? window.location.origin + shref : shref; window.location.href = shref
				})) : s.attr("href", a)) : d.parents(".collection-marker").length > 0 && (window.location.href = t.target.href)
			},
			handleScroll: function() {
				var e = this.pageManager.getViewport().top;
				this.toggleRibbon(e), this.checkRibbonVisibility()
			},
			hideCollectionMarkers: function() {
				this.$collectionMarkers && this.$collectionMarkers.fadeOut(200), this.$firstCollectionMarker && this.$firstCollectionMarker.fadeOut(200)
			},
			slideCollectionMarkers: function() {
				var e = this.$firstCollectionMarker.outerWidth(),
					t = this.$el.find(".first-collection-marker");
				return t.eq(0).animate({
					marginLeft: -e
				}, 100).promise()
			},
			pollHiddenCollections: function() {
				var t, i, n, s = this,
					a = this.$collectionMarkers.filter(".past-left-border");
				a.each(function(a, o) {
					i = e(o), t = i.offset().left, t - (s.$el.offset().left + 1) > .25 * s.collectionStoryWidth && (i.removeClass("past-left-border"), n = i.closest(".collection").prev().find(".collection-marker"), s.createFirstCollectionMarker(n, !0), s.$firstCollectionMarker.last().remove(), s.$firstCollectionMarker = s.$el.find(".first-collection-marker"))
				})
			},
			pollShowingTabs: function() {
				var t = this,
					i = this.$collectionMarkers.not(".past-left-border");
				i.each(function(i, n) {
					t.testForNewMarker(e(n))
				})
			},
			testForNewMarker: function(e) {
				var t, i = this,
					n = this.$firstCollectionMarker;
				e.offset().left - (i.$el.offset().left + 1) <= .25 * this.collectionStoryWidth && (this.createFirstCollectionMarker(e), t = this.slideCollectionMarkers(), t.done(function() {
					n.remove(), i.$firstCollectionMarker = i.$el.find(".first-collection-marker")
				}))
			},
			createFirstCollectionMarker: function(e, t) {
				var i = e.clone().addClass("first-collection-marker");
				return t === !0 ? (i.removeClass("past-left-border"), this.$firstCollectionMarker.before(i)) : (e.addClass("past-left-border"), i.appendTo(this.$el)), e
			},
			ribbonAnimation: function(e, i) {
				var n, s, a = this,
					o = this.$ribbonMenu.position() ? this.$ribbonMenu.position().left : 0;
				return 0 === o && (o = .25 * this.collectionStoryWidth), n = o + e * this.collectionStoryWidth, n = this.handleRibbonEdges(n), this.checkArrowsAgainstRibbonBoundaries(n), i ? Modernizr.touch ? this.applyTranslateToRibbon(n) : this.$ribbonMenu.css({
					left: n
				}) : Modernizr.touch ? this.animateSwipe(n) : (s = t.throttle(function() {
					0 > e ? a.pollShowingTabs() : a.pollHiddenCollections()
				}, 75), this.$ribbonMenu.stop().animate({
					left: n
				}, {
					step: s
				}).promise())
			},
			animateSwipe: function(t, i) {
				var n = this;
				return i || (i = {
					step: this.applyTranslateToRibbon
				}), this.stopSwipeAnimation(), this.$swipeAnimationElement = e({
					animateDummyProperty: n.returnXForTransform()
				}), this.$swipeAnimationElement.animate({
					animateDummyProperty: t
				}, i).promise()
			},
			checkArrowsAgainstRibbonBoundaries: function(e) {
				e === this.$el.width() - this.getCollectionsWidth() ? this.$nextArrow.addClass("inactive") : 0 === e && this.$previousArrow.addClass("inactive")
			},
			testForCollectionEnd: function(e) {
				return "undefined" == typeof e && (e = this.$ribbonMenu.position() ? this.$ribbonMenu.position().left : 0), e + this.getCollectionsWidth() < this.$el.width()
			},
			handleRibbonEdges: function(e) {
				return e > 0 && (e = 0), this.testForCollectionEnd(e) && 0 === this.collection.feedSource.length && (e = this.$el.width() - this.getCollectionsWidth()), this.$el.toggleClass("ribbon-start", 0 === e), e
			},
			shiftRibbonRight: function() {
				var e = this,
					t = this.storyUnitsInView(),
					i = e.ribbonAnimation(t);
				i.done(function() {
					e.pollHiddenCollections(), e.broadcast("nyt:ribbon-animation-finished")
				})
			},
			shiftRibbonLeft: function() {
				var e = this,
					t = this.storyUnitsInView(),
					i = this.ribbonAnimation(-t);
				i.done(function() {
					e.testForCollectionEnd() && e.collection.loadFeed(), e.pollShowingTabs(), e.broadcast("nyt:ribbon-animation-finished")
				})
			},
			assignSyncedHtmlToView: function() {
				this.$collectionMarkers = this.$ribbonMenu.find(".collection-marker"), 0 === this.$el.find(".first-collection-marker").length && this.createFirstCollectionMarker(this.$collectionMarkers.eq(0)), this.$firstCollectionMarker = this.$el.find(".first-collection-marker").eq(0)
			},
			updateCollectionValues: function() {
				var t = this;
				this.$ribbonMenu.find(".story").each(function() {
					var i = e(this),
						n = i.find(".story-heading");
					t.truncateText(n, i.find(".kicker").length ? 48 : 64), n.toggleClass("long-story-heading", n.height() > 48)
				})
			},
			checkForActiveNavigation: function(e) {
				var t, i = this.$el.width(),
					n = Math.ceil(.4 * i),
					s = Math.ceil(.6 * i),
					a = n >= e,
					o = e >= s;
				a ? t = {
					left: "10px",
					right: "auto"
				} : o && (t = {
					left: "auto",
					right: "10px"
				}), a || o ? (this.$ribbonNavigation.css(t), this.showRibbonArrows()) : this.hideRibbonArrows()
			},
			resizeRibbon: function() {
				this.$el.css("width", this.getWidth()), this.toggleDisabled || (this.checkRibbonVisibility(), this.handleFixedRibbon())
			},
			getWidth: function() {
				var e = parseInt(this.$el.css("margin-left"), 10);
				return this.$shell.width() - e
			},
			showRibbonArrows: function() {
				this.$ribbonNavigation.fadeIn(300)
			},
			hideRibbonArrows: function() {
				this.$ribbonNavigation && this.$ribbonNavigation.fadeOut(300)
			},
			getCollectionsWidth: function() {
				return this.collection.length * this.collectionStoryWidth
			},
			moveRibbonForAlerts: function(e) {
				this.disableRibbonToggle(), this.isRibbonPermenant = !1, e(this.$el)
			},
			disableRibbonToggle: function() {
				this.toggleDisabled = 1, this.revertRibbon()
			},
			enableRibbonToggle: function() {
				this.toggleDisabled = 0
			},
			handleFixedRibbon: function() {
				var e = this.pageManager.getViewport().height;
				"interactive" === this.pageManager.getApplicationName() && this.pageManager.getViewport().width < 765 || (800 > e ? (this.enableRibbonToggle(), this.isRibbonPermenant = !1, this.pageManager.getViewport().top >= 100 && this.slideRibbonUp()) : (this.isRibbonPermenant = !0, this.makeRibbonFixed()))
			},
			animateRibbonStories: function(t) {
				var i = 200,
					n = t.find(".active").index();
				n = 0 > n ? 0 : n, t.find(".collection-item").slice(n).css({
					opacity: 0,
					"margin-left": this.animationDistance
				}).each(function() {
					i += 200, e(this).animate({
						opacity: 1,
						"margin-left": 0
					}, i)
				})
			},
			checkRibbonVisibility: function() {
				var e = this.pageManager.isComponentVisible(this.$el);
				e !== this.isRibbonVisible && (this.isRibbonVisible = e, this.broadcast("nyt:ribbon-visiblility", e))
			},
			revertRibbon: function() {
				this.$html.hasClass("viewport-landscape") && this.pageManager.getViewport().top <= 0 && this.$el.css("top", "0"), this.ribbonFixed && (this.ribbonFixed = !1, this.$shell.css("padding-top", ""), this.$el.stop(!0).css({
					position: "",
					"margin-top": "",
					width: "",
					top: "",
					"z-index": "",
					transform: "translateZ(0)"
				}))
			},
			slideRibbonDown: function() {
				var e;
				e = this.mastheadHeight, this.makeRibbonFixed(), this.$el.stop(!0).animate({
					top: e
				}, this.speed)
			},
			makeRibbonFixed: function() {
				var e = this.ribbonHeight + this.ribbonMarginTop + this.ribbonMarginBottom;
				this.ribbonFixed = !0, this.$shell.css("padding-top", e + this.mastheadHeight), this.$el.stop(!0).css({
					position: "fixed",
					"margin-top": 0,
					width: this.getWidth(),
					top: this.mastheadHeight,
					"z-index": this.zIndexRibbon
				}), this.broadcast("nyt:ribbon-visiblility", !0)
			},
			slideRibbonUp: function() {
				this.$el.stop(!0).css({
					"z-index": this.zIndexRibbon
				}).animate({
					top: -this.ribbonHeight
				}, this.speed, this.revertRibbon)
			},
			toggleRibbon: function(e) {
				var t = 0 >= e,
					i = e > this.oldScrollTop,
					n = e < this.oldScrollTop,
					s = Math.abs(e - this.oldScrollTop);
				if (this.isRibbonPermenant) return void(this.oldScrollTop = e);
				if (t) return this.oldScrollTop = e, void this.revertRibbon();
				if (!(this.toggleDisabled > 0)) {
					if (i && this.ribbonFixed) {
						if (s < this.minDownDistance) return;
						this.slideRibbonUp(), this.broadcast("nyt:ribbon-visiblility", !1)
					} else if (n && !this.ribbonFixed) {
						if (s < this.minUpDistance) return void(this.oldScrollTop = e);
						this.slideRibbonDown(), this.broadcast("nyt:ribbon-visiblility", !0)
					}
					this.oldScrollTop = e
				}
			},
			getSectionInView: function() {
				return e.trim(this.$el.find(".first-collection-marker").text())
			},
			getCollectionByArticleElement: function(t) {
				return e.trim(t.parents(".collection-menu").prev(".collection-marker").text())
			}
		}));
		return d
	}), define("shared/ribbon/instances/ribbon", ["jquery/nyt", "underscore/nyt", "foundation/views/page-manager", "shared/ribbon/views/ribbon", "foundation/models/user-data"], function(e, t, i, n, s) {
		"use strict";
		var a = function() {
			return s.hasEntitlement("FTEX") ? null : new n
		};
		i.flag("freeTrial") && !i.getUrlParam("disable_ribbon") ? s.isReady() ? t.defer(a) : s.listenToOnce(i, "nyt:user-ready", a) : e("#ribbon").length > 0 && !i.getUrlParam("disable_ribbon") && new n
	}), define("shared/masthead/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.profileIcon = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<span class="avatar" role="presentation">\n<a href="javascript:;" href="user-profile-button"><img src="' + (null == (__t = userData.getImageUrl()) ? "" : __t) + '" alt="" /></a>\n</span>';
			return __p
		}, templates.userName = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<button class="button user-name-button">\n<span class="button-text">' + (null == (__t = getTruncatedUserName(15)) ? "" : __t) + '</span>\n<i class="icon sprite-icon user-icon"></i>\n<i class="icon caret-icon"></i>\n</button>';
			return __p
		}, templates.userNameModalContent = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<ul>\n<li><a href="javascript:;" class="user-profile-button">Edit Profile</a></li>\n<li><a href="' + (null == (__t = hosts.myaccount) ? "" : __t) + '/membercenter/myaccount.html">My Account</a></li>\n<li><a href="' + (null == (__t = hosts.myaccount) ? "" : __t) + '/mem/manage_billing.html">My Billing Information</a></li>\n<li><a href="' + (null == (__t = "http:" + hosts.www) ? "" : __t) + '/saved">My Saved Items</a></li>\n<li><button class="button log-out-button">Log Out</button></li>\n</ul>';
			return __p
		}, templates.userNameModalTitle = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", "" != userData.getImageUrl() && (__p += '<span class="avatar">\n<a href="javascript:;" class="user-profile-button"><img src="' + (null == (__t = userData.getImageUrl()) ? "" : __t) + '" /></a>\n</span>'), __p += '\n<span class="user-name-subscription">\n<span class="user-name">' + (null == (__t = userData.getUserName()) ? "" : __t) + '</span>\n<span class="user-subscription"><a href="https://myaccount.nytimes.com/membercenter/myaccount.html">' + (null == (__t = subscription.label) ? "" : __t) + "</a></span>\n</span>";
			return __p
		}, templates.userSettingsModal = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="menu edition-menu">\n<h5 class="modal-heading">Edition</h5>\n<ul>\n<li><a href="http://www.nytimes.com" data-edition="us">U.S.</a></li>\n<li><a href="http://global.nytimes.com" data-edition="global">International</a></li>\n<li><a href="http://cn.nytimes.com" data-edition="chinese">ä¸­æ–‡ (Chinese)</a></li>\n<li><a href="http://www.nytimes.com/es/" data-edition="spanish">EspaÃ±ol</a></li>\n</ul>\n</div>\n<div class="menu help-menu">\n<h5 class="modal-heading">Help</h5>\n<ul>\n<li><a href="http://www.nytimes.com/content/help/front.html">FAQ</a></li>\n<li><a href="http://www.nytimes.com/content/help/contact/directory.html">Contact Us</a></li>\n</ul>\n</div>\n', showTypeSizer && (__p += '\n<div class="menu type-sizer-menu">\n<h5 class="modal-heading">Type Size</h5>\n<ul>\n<li data-size="small" class="type-sizer-small"><a href="javascript:;">A <span class="visually-hidden">Type size small</span></a></li>\n<li data-size="medium" class="type-sizer-medium"><a href="javascript:;">A <span class="visually-hidden">Type size medium</span></a></li>\n<li data-size="large" class="type-sizer-large"><a href="javascript:;">A <span class="visually-hidden">Type size large</span></a></li>\n</ul>\n</div>\n'), __p += "";
			return __p
		}, templates
	}), define("shared/masthead/views/masthead", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/masthead/templates"], function(e, t, i, n, s) {
		"use strict";
		var a = i.registerView("masthead").extend({
			el: "#masthead",
			events: {
				"click .home-button": "handleHomeClick",
				"click .search-button": "handleSearchClick",
				"click .sections-button": "handleSectionsClick",
				"click .branding a": "handleLogoClick",
				"click .story-meta .nyt-logo": "handleLeftLogoClick",
				"click .editions-menu a": "handleEditionClick",
				"click .login-button": "handleLogInClick",
				"click .subscribe-button": "handleSubscribeClick"
			},
			nytEvents: {
				"nyt:ribbon-visiblility": "accomodateRibbon",
				"nyt:masthead-search-toggle": "handleSearchToggle",
				"nyt:messaging-critical-alerts-move-furniture": "handlePageAlerts",
				"nyt:messaging-suggestions-move-furniture": "handlePageAlerts",
				"nyt:messaging-notification-count-update": "handleMessagingCountChange",
				"nyt:masthead-edition-change": "handleEditionClick"
			},
			initialize: function() {
				this.trackingBaseData = {
					action: "click",
					contentCollection: this.pageManager.getMeta("article:section"),
					region: "TopBar"
				}
			},
			handleUserReady: function() {
				var e = this.$el.find(".user-tools-button-group");
				n.isLoggedIn() ? e.prepend(s.userName(n)) : (this.pageManager.hasAdBlock().done(function() {
					e.find(".subscribe-button").removeClass("hidden")
				}), e.find(".login-button").removeClass("hidden"))
			},
			accomodateRibbon: function(e) {
				e ? (this.$el.addClass("ribbon-visible"), this.$el.find(".update-text").css("display", "inline-block")) : (this.$el.find(".update-text").css("display", "none"), this.$el.removeClass("ribbon-visible"))
			},
			handlePageAlerts: function(e) {
				e(this.$el)
			},
			handleHomeClick: function(t) {
				var i, n;
				i = e(t.currentTarget).closest(".home-button"), n = this.trackingAppendParams(i.data("href"), {
					module: "HomePage-Button"
				}), window.location = n
			},
			handleSearchClick: function(e) {
				this.broadcast("nyt:masthead-search-click", e), this.trackingTrigger("masthead-search-click", {
					module: "SearchOpen",
					eventName: "OpenSearchBar"
				})
			},
			handleSectionsClick: function(e) {
				this.broadcast("nyt:masthead-section-click", e)
			},
			handleLogoClick: function(t) {
				var i, n;
				i = e(t.currentTarget), n = this.trackingAppendParams(i.attr("href"), {
					module: "HomePage-Title"
				}), i.attr("href", n)
			},
			handleLeftLogoClick: function(t) {
				var i, n;
				i = e(t.currentTarget).parent("a"), n = this.trackingAppendParams(i.attr("href"), {
					module: "HomePage-Left-Title"
				}), i.attr("href", n)
			},
			handleSearchToggle: function(e) {
				this.$el.find(".search-button")[e ? "addClass" : "removeClass"]("active")
			},
			handleMessagingCountChange: function(e) {
				var t = this.$el.find(".notifications-button"),
					i = e.count > 99 ? "99+" : e.count;
				t.find(".button-text").html(i), e.delta > 0 ? (t.addClass("has-notifications animate-notifications"), setTimeout(function() {
					t.removeClass("animate-notifications")
				}, 2e3)) : 0 === e.count && t.removeClass("has-notifications")
			},
			handleEditionClick: function(t) {
				var i = e(t.target),
					n = i.data("edition"),
					s = i.attr("href"),
					a = "";
				switch (this.pageManager.setEdition(n), n) {
					case "us":
						a = "EditionToggleToUS";
						break;
					case "global":
						a = "EditionToggleToGlobal";
						break;
					case "chinese":
						a = "EditionToggleToCHNS";
						break;
					case "spanish":
						a = "EditionToggleToSpanish"
				}
				s = this.trackingAppendParams(s, {
					module: a
				}), i.attr("href", s)
			},
			handleLogInClick: function() {
				var e = "masthead-login";
				this.trackingTrigger("masthead-login-click", {
					module: "LogIn",
					"WT.nav": "shell"
				}), this.trackingTrigger("tagx-auth-interaction", {
					module: e,
					state: n.isLoggedIn() ? "logged in" : "logged out",
					eventName: "login click | " + e
				})
			},
			handleSubscribeClick: function(t) {
				var i, n;
				i = e(t.currentTarget).closest(".subscribe-button"), n = this.trackingAppendParams(i.data("href"), {
					module: "Subscribe-Now"
				}), window.location = n
			}
		});
		return a
	}), define("shared/masthead/views/in-story-theme", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/views/page-manager"], function(e, t, i, n) {
		"use strict";
		var s = i.extend({
			el: "#masthead",
			events: {
				"click .kicker": "scrollToTop",
				"click .kicker-label a": "handleSectionClick"
			},
			nytEvents: {
				"nyt:page-scroll": "toggleTheme",
				"nyt:page-scroll-after": "setSwitchPosition",
				"nyt:page-resize": "handleResize",
				"nyt:page-breakpoint": "handleBreakPoint",
				"nyt:masthead-switch-change": "handleSwitchChange",
				"nyt:masthead-position-change": "handlePositionChange"
			},
			defaultSettings: {
				themeClass: "in-content",
				switchPosition: 0,
				shouldScrollAway: !1,
				currentBreakPoint: n.getCurrentBreakpoint(),
				metaContainer: ".story-meta",
				contentSelector: "#story",
				contentSwitchPointSelector: ".story-meta .kicker"
			},
			initialize: function(e) {
				this.settings = t.extend({}, this.defaultSettings, e)
			},
			handleDomReady: function() {
				this.isTransparent() ? this.setSwitchOverrides("#story .story-body-text", !0) : this.$switchSelector = e("#story").find(".story-meta .kicker"), this.$pageContainer = this.$el.find(".container"), this.$mastheadKicker = this.$el.find(".kicker"), this.setSwitchPosition(), this.toggleTheme()
			},
			handleSwitchChange: function(e, t) {
				this.setSwitchOverrides(e, t)
			},
			handlePositionChange: function(e) {
				this.settings.shouldScrollAway = e || !1, e || this.$el.css("position", "fixed"), this.toggleTheme()
			},
			handleResize: function() {
				n.isDomReady() && (this.isTransparent() ? this.setSwitchOverrides("#story .story-body-text", !0) : this.$switchSelector = e("#story").find(".story-meta .kicker"), this.moveMastheadKicker(), this.settings.currentBreakPoint < 1010 ? this.removeStoryTheme() : this.toggleTheme())
			},
			setSwitchOverrides: function(t, i) {
				this.settings.shouldScrollAway = i || !1, this.$switchSelector = e(t), this.setSwitchPosition(!0), this.toggleTheme()
			},
			setSwitchPosition: function(e) {
				this.$switchSelector.length > 0 && (this.settings.switchPosition = this.$switchSelector.offset().top - this.$el.height()), e === !0 && (this.settings.overridePosition = this.settings.switchPosition)
			},
			toggleTheme: function() {
				var e, t, i, s, a, o = this.settings.overridePosition || 100;
				this.settings.switchPosition < o && (this.settings.switchPosition = o), e = n.getViewport().top, t = e > this.settings.switchPosition, i = e > o, s = this.$el.hasClass(this.settings.themeClass), a = "nyt:masthead-storytheme", t && !s && this.settings.currentBreakPoint >= 1010 ? (this.settings.shouldScrollAway === !0 && this.$el.css("position", "fixed"), this.addStoryTheme(), this.removeSmallCommentButton(), this.broadcast(a, !0)) : !i && s ? (this.settings.shouldScrollAway === !0 && this.$el.css("position", "absolute"), this.removeStoryTheme(), this.removeExtraSmallCommentButton(), this.broadcast(a, !1)) : s || this.settings.shouldScrollAway !== !0 || this.$el.css("position", "absolute")
			},
			addStoryTheme: function() {
				this.isTransparent() || this.$el.find(".branding").fadeOut(300).end().addClass(this.settings.themeClass), this.$el.find(".comments-button").removeClass("theme-speech-bubble-x-small").addClass("theme-speech-bubble-small"), this.$el.find(this.settings.metaContainer).fadeIn(300).end().addClass(this.settings.themeClass), this.moveMastheadKicker()
			},
			removeStoryTheme: function() {
				this.isTransparent() || this.$el.find(".branding").stop(!1, !0).show().end().removeClass(this.settings.themeClass), this.$el.find(".comments-button").removeClass("theme-speech-bubble-small").addClass("theme-speech-bubble-x-small"), this.$el.find(this.settings.metaContainer).stop().hide().end().removeClass(this.settings.themeClass)
			},
			removeSmallCommentButton: function() {
				this.isTransparent() && this.$el.find(".theme-speech-bubble-small .button-meta").remove()
			},
			removeExtraSmallCommentButton: function() {
				this.isTransparent() && this.$el.find(".theme-speech-bubble-x-small .icon").remove()
			},
			moveMastheadKicker: function() {
				var e;
				this.$mastheadKicker && "collection" !== this.pageManager.getApplicationName() && (e = this.$pageContainer.width() - 1375,
					this.settings.currentBreakPoint >= 10050 && this.settings.currentBreakPoint < 10070 && e > 0 ? this.$mastheadKicker.css({
						"margin-left": Math.floor(e / 2) + "px"
					}) : this.settings.currentBreakPoint >= 10070 ? this.$mastheadKicker.css("margin-left", "138px") : this.settings.currentBreakPoint < 10050 && this.$mastheadKicker.css("margin-left", "0px"))
			},
			scrollToTop: function(t) {
				var i = e(t.target);
				i.is("a") || i.parent().is("a") || e("html, body").animate({
					scrollTop: 0
				}, 400)
			},
			handleBreakPoint: function(e) {
				this.settings.currentBreakPoint = e
			},
			isTransparent: function() {
				return this.$el.is(".masthead-theme-transparent, .masthead-theme-transparent-ffffff")
			},
			handleSectionClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						module: "SF-FixedNav",
						action: "click",
						contentCollection: this.pageManager.getMeta("article:section"),
						region: "TopBar"
					});
				i.attr("href", n)
			}
		});
		return s
	}), define("shared/searchform/models/search-suggest", ["foundation/models/base-model"], function(e) {
		"use strict";
		var t = e.extend({
			defaults: {
				query: "",
				results: []
			}
		});
		return t
	}), define("shared/searchform/collections/search-suggest", ["backbone/nyt", "foundation/collections/base-collection", "foundation/views/page-manager", "shared/searchform/models/search-suggest", "foundation/hosts"], function(e, t, i, n, s) {
		"use strict";
		var a = t.extend({
			model: n,
			mobileBaseUrl: s.mobileWeb,
			desktopBaseUrl: s.www,
			settings: {
				numOfSuggestions: 7
			},
			query: "",
			sync: function(t, i, n) {
				var s = "/svc/suggest/v1/homepage?query=" + this.query;
				return this.pageManager.getCurrentBreakpoint() < 120 ? n.url = this.mobileBaseUrl + s : n.url = this.desktopBaseUrl + s, e.sync(t, i, n)
			},
			parse: function(e) {
				return {
					query: e[0],
					results: e[1].slice(0, this.settings.numOfSuggestions)
				}
			},
			newQuery: function(e) {
				this.query = e, this.fetch()
			}
		});
		return a
	}), define("shared/searchform/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.autoSuggest = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<li><a href="' + (null == (__t = queryUrl) ? "" : __t) + '">\n' + (null == (__t = suggest.replace(queryRegExp, "<strong>" + query + "</strong>")) ? "" : __t) + "\n</a></li>";
			return __p
		}, templates
	}), define("shared/searchform/helpers/search-form-mixin", ["jquery/nyt", "underscore/nyt", "foundation/lib/polyfills/placeholder", "shared/searchform/collections/search-suggest", "shared/searchform/templates", "foundation/hosts"], function(e, t, i, n, s, a) {
		"use strict";
		var o = t.extend({}, {
			collection: new n,
			searchBaseUrl: a.search + "/search/sitesearch/#/",
			searchMobileUrl: a.mobileWeb + "/search?query=",
			KEYS: {
				ENTER: 13,
				ESC: 27,
				UP_ARROW: 38,
				DOWN_ARROW: 40,
				LEFT_ARROW: 37,
				RIGHT_ARROW: 39
			},
			initialize: function() {
				var e = this.pageManager.getMeta("article:section") || "";
				t.bindAll(this, "handlePageClicks"), this.trackingBaseData = {
					action: "click",
					contentCollection: e,
					region: "TopBar"
				}
			},
			handleDomReady: function() {
				this.$list = this.$el.find(".auto-suggest"), this.$clearButton = this.$el.find(".clear-button"), this.$overlay = this.$shell.find(".search-overlay"), this.$input = this.$el.find(".search-input"), this.$submitButton = this.$el.find(".submit-button"), this.disableSubmitButton(), this.listenTo(this.collection, "sync change", this.render), this.throttledSuggestions = t.debounce(this.getAutoSuggestions, 250), this.afterInitialize()
			},
			afterInitialize: e.noop,
			render: function() {
				var e, t = "",
					i = this.collection.toJSON()[0],
					n = new RegExp(i.query, "ig"),
					a = s.autoSuggest,
					o = i.results.length;
				if (o > 0 && this.getSearchValue().length > 0) {
					for (e = 0; o > e; e += 1) t += a({
						query: i.query,
						queryUrl: this.getSearchUrl(i.results[e]),
						suggest: i.results[e],
						queryRegExp: n
					});
					this.$list.show().find("ol").html(t)
				} else this.$list.hide()
			},
			handleKeyDown: function(e) {
				var t = e.which;
				t === this.KEYS.ENTER && e.preventDefault()
			},
			handleKeyUp: function(e) {
				var t = e.which;
				e.preventDefault(), t === this.KEYS.UP_ARROW || t === this.KEYS.DOWN_ARROW ? this.navigateAutoSuggestions(t) : t === this.KEYS.ENTER ? this.handleEnterKey(e) : t === this.KEYS.RIGHT_ARROW || t === this.KEYS.LEFT_ARROW ? this.handleRightLeftKey(e) : (this.$clearButton[this.getSearchValue().length > 0 ? "fadeIn" : "fadeOut"](200), this.getSearchValue().length ? this.$submitButton.hasClass("disabled") && this.$submitButton.removeClass("disabled") : this.disableSubmitButton(), this.throttledSuggestions())
			},
			handleEnterKey: function() {
				this.submitSearch()
			},
			handleRightLeftKey: e.noop,
			handleClearButton: function(e) {
				e.preventDefault(), this.setSearchValue(""), this.$clearButton.fadeOut(200), this.disableSubmitButton(), this.$input.focus(), i()
			},
			setSearchValue: function(e) {
				this.$input.val(e)
			},
			getSearchValue: function() {
				return e.trim(this.$input.val())
			},
			hideAutoSuggest: function() {
				this.$list.hide()
			},
			getAutoSuggestions: function() {
				var e = this.getSearchValue();
				e.length > 1 ? this.collection.newQuery(e) : this.hideAutoSuggest()
			},
			getSearchUrl: function(e) {
				return this.pageManager.getCurrentBreakpoint() < 120 ? this.searchMobileUrl + e + "&sort=rel" : this.searchBaseUrl + e
			},
			navigateAutoSuggestions: function(e) {
				var t, i;
				i = this.$list.find(".active"), t = i.parent().index() || 0, t += e === this.KEYS.UP_ARROW ? -1 : 1, this.$list.find("a").removeClass("active").eq(t).addClass("active"), this.setSearchValue(this.$list.find("a").eq(t).text())
			},
			submitSearch: function(e) {
				var t, i = this.getSearchValue();
				e && e.preventDefault(), i && (t = this.trackingAppendParams(this.getSearchUrl(i), {
					module: "SearchSubmit"
				}), this.$el.is(":visible") && (window.location = t))
			},
			handlePageClicks: function() {
				this.hideAutoSuggest()
			},
			disableSubmitButton: function() {
				this.$submitButton.addClass("disabled")
			}
		});
		return o
	}), define("shared/masthead/views/search", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/searchform/helpers/search-form-mixin"], function(e, t, i, n) {
		"use strict";
		var s = i.extend(t.extend({}, n, {
			el: e("#masthead").find(".search-flyout-panel"),
			events: {
				"click .close-button": "close",
				"keyup .search-input": "handleKeyUp",
				"keydown .search-input": "handleKeyDown",
				"click .submit-button": "submitSearch",
				"click .clear-button": "handleClearButton"
			},
			nytEvents: {
				"nyt:masthead-search-click": "toggle",
				"nyt:masthead-search-toggle": "handleSearchToggle",
				"nyt:navigation-search-click": "toggle",
				"nyt:search-close-ready": "close"
			},
			slideTiming: 100,
			afterInitialize: function() {
				this.trackingBaseData["WT.nav"] = "searchWidget", this.$input.removeAttr("placeholder")
			},
			open: function() {
				var e = this;
				this.$el.slideDown(this.slideTiming, function() {
					e.$el.find(".control").fadeIn(e.slideTiming).end().find(".search-input").val("").focus()
				}), this.broadcast("nyt:masthead-search-toggle", !0), this.$shell.on("click", this.handlePageClicks), this.subscribeOnce("nyt:page-key-esc", this.close), this.$overlay.fadeIn(200), this.$html.addClass("search-active")
			},
			close: function() {
				var e = this;
				this.$html.hasClass("search-active") && (this.$el.find(".control").fadeOut(this.slideTiming, function() {
					e.$el.slideUp(e.slideTiming, function() {
						e.$html.removeClass("search-active")
					})
				}), this.broadcast("nyt:masthead-search-toggle", !1), this.$shell.off("click", this.handlePageClicks), this.setSearchValue(""), this.$overlay.fadeOut(200))
			},
			toggle: function() {
				this[this.$el.is(":visible") ? "close" : "open"]()
			},
			isSearchButton: function(t) {
				var i = e(t).hasClass("search-button"),
					n = 1 === e(t).parents(".search-button").length;
				return i || n
			},
			isSearchFlyout: function(t) {
				var i = e(t).hasClass("search-flyout-panel"),
					n = 1 === e(t).parents(".search-flyout-panel").length;
				return i || n
			},
			handlePageClicks: function(e) {
				this.isSearchButton(e.target) || this.isSearchFlyout(e.target) || this.close(), this.hideAutoSuggest()
			},
			handleSearchToggle: function(e) {
				e === !1 && (this.$el.find(".submit-button").addClass("disabled"), this.$el.find(".clear-button").hide())
			}
		}));
		return s
	}), define("shared/masthead/views/user-settings-modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/modal/views/modal", "shared/masthead/templates"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			events: {
				"click .edition-menu a": "handleEditionClick",
				"click .type-sizer-menu li": "handleFontSizeClick",
				"click .help-menu a": "handleHelpMenuClick"
			},
			nytEvents: {
				"nyt:fontsizer-initialize": "handleFontSizeChange",
				"nyt:fontsizer-change": "handleFontSizeChange"
			},
			defaultSettings: {
				id: "user-settings-modal",
				binding: ".user-settings-button",
				tailDirection: "up-right",
				tailTopOffset: -8,
				tailLeftOffset: -1,
				width: "260px",
				toggleSpeed: 1,
				showTypeSizer: !0,
				openCallback: function() {
					this.$target.addClass("active"), this.subscribeOnce("nyt:page-scroll", this.close)
				},
				closeCallback: function() {
					this.$target.removeClass("active")
				}
			},
			webTrendsNav: "user-settings-modalContainer",
			initialize: function(e) {
				var i = this.pageManager.getMeta("article:section") || "";
				this.settings = t.extend({}, this.defaultSettings, e), this.settings.modalContent = s.userSettingsModal({
					showTypeSizer: this.settings.showTypeSizer
				}), this.trackingBaseData = {
					action: "click",
					region: "TopBar",
					"WT.nav": this.webTrendsNav,
					contentCollection: i
				}
			},
			handleDomReady: function() {
				this.render()
			},
			render: function() {
				var e = new n(this.settings);
				this.setElement(e.$modal), e.$modal.find("a[data-edition=" + this.pageManager.getEdition() + "]").addClass("selected"), e.addToPage(), this.handleFontSizeChange()
			},
			handleEditionClick: function(e) {
				this.broadcast("nyt:masthead-edition-change", e, {
					"WT.nav": this.webTrendsNav
				})
			},
			handleHelpMenuClick: function(t) {
				var i = e(t.target),
					n = i.attr("href");
				n && (n = this.trackingAppendParams(n, {}), i.attr("href", n))
			},
			handleFontSizeClick: function(t) {
				var i = e(t.currentTarget).data("size");
				this.broadcast("nyt:fontsizer-change", i)
			},
			handleFontSizeChange: function(e) {
				var t = "type-size-selected";
				e = e || this.pageManager.getMeta("fontsizer_typeSize"), this.$el.find(".type-sizer-menu li").removeClass(t), this.$el.find(".type-sizer-" + e).addClass(t)
			}
		});
		return a
	}), define("shared/account/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.accountModalHeader = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<h4 class="modal-subheading">To save articles or get newsletters, alerts or recommendations &ndash; all free.</h4>';
			return __p
		}, templates.logInModalContent = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="buttons">\n' + (null == (__t = oauthButtons) ? "" : __t) + '\n</div><!-- close buttons -->\n<div class="separator">\n<span class="separator-text">OR</span>\n</div>\n<div class="login-form-control form-control">\n<form id="login-form" class="login-form" role="form" method="post" action="' + (null == (__t = loginUrl) ? "" : __t) + '">\n<div class="control">\n<div class="label-container visually-hidden">\n<label for="login-email" id="login-email-label">Email address</label>\n</div>\n<div class="field-container">\n<input type="text" id="login-email" name="userid" class="text login-email" placeholder="Email address" aria-labelledby="login-email-label" aria-required="true">\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-email-description"><i class="icon"></i><span class="visually-hidden" id="clear-email-description">Clear this text input</span></button>\n</div>\n</div>\n<div class="control">\n<div class="label-container visually-hidden">\n<label for="login-password" id="login-password-label">Password</label>\n</div>\n<div class="field-container">\n<input type="password" id="login-password" name="password" class="text login-password" placeholder="Password" data-type="password" aria-labelledby="login-password-label" aria-required="true">\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-password-description"><i class="icon"></i><span class="visually-hidden" id="clear-password-description">Clear this text input</span></button>\n</div>\n</div>\n<div class="control user-action-control layout-horizontal">\n<div class="control checkbox-control">\n<div class="field-container">\n<input type="checkbox" id="login-remember-checkbox" name="login-remember" class="checkbox login-remember" checked="checked" aria-labelledby="login-remember-label" aria-checked="true" value="">\n</div>\n<div class="label-container">\n<label for="login-remember" class="checkbox-label" id="login-remember-label">Remember me</label>\n</div>\n</div>\n<p class="form-hint password-hint"><a href="' + (null == (__t = forgotPasswordUrl) ? "" : __t) + '">Forgot password?</a></p>\n</div>\n<div class="control">\n<p class="disclaimer"><a href="http://www.nytimes.com/content/help/rights/terms/terms-of-service.html">Terms of Service</a> <a href="http://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html">Privacy Policy</a></p>\n</div>\n<div class="control button-control">\n<button id="login-send-button" class="button login-button">Log in</button>\n</div>\n<input name="is_continue" value="1" type="hidden">\n<input id="account-form-token" name="token" value="" type="hidden">\n<input id="account-form-expiration" name="expires" value="" type="hidden">\n<input id="login-remember" name="remember" value="1" type="hidden">\n</form>\n</div><!-- close login-form-control -->';
			return __p
		}, templates.loginModalFooter = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<p class="user-action registration-modal-trigger">Don&#8217;t have an account? <a href="javascript:;">Sign Up</a></p>';
			return __p
		}, templates.oauthButtons = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<button id="' + (null == (__t = facebookId) ? "" : __t) + '" data-provider-name="facebook" class="button oauth-button facebook-oauth-button">\n<i class="icon sprite-icon"></i>\n<span class="button-text">' + (null == (__t = prefix) ? "" : __t) + ' with Facebook</span>\n</button>\n<button id="' + (null == (__t = googleId) ? "" : __t) + '" data-provider-name="google" class="button oauth-button google-oauth-button">\n<i class="icon sprite-icon"></i>\n<span class="button-text">' + (null == (__t = prefix) ? "" : __t) + " with Google</span>\n</button>";
			return __p
		}, templates.registrationModalContent = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="buttons">\n' + (null == (__t = oauthButtons) ? "" : __t) + '\n</div><!-- close buttons -->\n<div class="separator">\n<span class="separator-text">OR</span>\n</div>\n<div class="registration-form-control form-control">\n<form id="registration-form" class="registration-form" role="form" method="post" action="' + (null == (__t = regiUrl) ? "" : __t) + '">\n<div class="control">\n<div class="label-container visually-hidden">\n<label for="register-email" id="register-email-label">Email address</label>\n</div>\n<div class="field-container">\n<input type="email" id="register-email" name="email_address" class="text register-email" placeholder="Email address" aria-labelledby="register-email-label" aria-required="true" />\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-email-description"><i class="icon"></i><span class="visually-hidden" id="clear-email-description">Clear this text input</span></button>\n</div>\n</div><!-- close control -->\n<div class="control">\n<div class="label-container visually-hidden">\n<label for="register-password" id="register-password-label">Password</label>\n</div>\n<div class="field-container">\n<input type="password" id="register-password" name="password1" class="text register-password" placeholder="Password" data-type="password" aria-labelledby="register-password-label" aria-required="true" />\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-password-description"><i class="icon"></i><span class="visually-hidden" id="clear-password-description">Clear this text input</span></button>\n</div>\n</div><!-- close control -->\n<div class="control">\n<div class="label-container visually-hidden">\n<label for="retype-password" id="retype-password-label">Retype password</label>\n</div>\n<div class="field-container">\n<input type="password" id="retype-password" name="password2" class="text retype-password" placeholder="Retype password" data-type="password" aria-labelledby="retype-password-label" aria-required="true" />\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-retyped-password-description"><i class="icon"></i><span class="visually-hidden" id="clear-retyped-password-description">Clear this text input</span></button>\n</div>\n</div><!-- close control -->\n<div class="control layout-horizontal">\n<p class="form-hint">\nBy signing up, you agree to receive updates and special offers for The New York Timesâ€™s products and services. You may unsubscribe at any time.\n</p>\n</div>\n<div class="control">\n<p class="disclaimer"><a href="http://www.nytimes.com/content/help/rights/terms/terms-of-service.html">Terms of Service</a> <a href="http://www.nytimes.com/content/help/rights/privacy/policy/privacy-policy.html">Privacy Policy</a></p>\n</div>\n<div class="control button-control">\n<button id="register-send-button" class="button register-button">Create Account</button>\n</div>\n<input name="is_continue" value="1" type="hidden">\n<input id="account-form-token" name="token" value="" type="hidden">\n<input id="account-form-expiration" name="expires" value="" type="hidden">\n<input id="account-form-subscribe" name="subscribe[]" type="hidden" value="MM">\n</form>\n</div><!-- close registration-form-control -->';
			return __p
		}, templates.registrationModalFooter = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<p class="user-action login-modal-trigger">Already have an account? <a href="javascript:;">Log In</a></p>';
			return __p
		}, templates.userProfileModalContent = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="user-profile-form-control form-control ' + (null == (__t = user ? "" : "user-profile-form-control-loading") ? "" : __t) + '">\n', user && (__p += '\n<form id="user-profile-form" class="user-profile-form" role="form" method="post">\n<div class="controls">\n<div class="control">\n<div class="label-container visually-hidden">\n<label for="user-profile-name" id="user-profile-name-label">Name</label>\n</div>\n<div class="field-container">\n<input type="text" id="user-profile-name" name="name" class="text user-profile-name" placeholder="Name" aria-labelledby="user-profile-name-label" aria-required="true" value="' + (null == (__t = user.getName()) ? "" : __t) + '">\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-name-description"><i class="icon"></i><span class="visually-hidden" id="clear-name-description">Clear this text input</span></button>\n</div>\n</div>\n<div class="control">\n<div class="label-container visually-hidden">\n<label for="user-profile-location" id="user-profile-location-label">Location</label>\n</div>\n<div class="field-container">\n<input type="text" id="user-profile-location" name="location" class="text user-profile-location" placeholder="Location" aria-labelledby="user-profile-location-label" aria-required="true" value="' + (null == (__t = user.getLocation()) ? "" : __t) + '">\n<button type="button" class="button clear-button" tabindex="-1" aria-describedby="clear-location-description"><i class="icon"></i><span class="visually-hidden" id="clear-location-description">Clear this text input</span></button>\n</div>\n</div>\n<div class="control checkbox-control">\n<div class="field-container">\n<input type="checkbox" id="global-comment-notify-checkbox" name="global-comment-notify" class="checkbox comment-notify" ' + (null == (__t = user.getNotify() ? 'checked="checked"' : "") ? "" : __t) + ' aria-labelledby="comment-notify-label" aria-checked="true" value="">\n</div>\n<div class="label-container">\n<label for="global-comment-notify" class="checkbox-label" id="global-comment-notify-label">Receive email notifications when your comments are published.</label>\n</div>\n</div>\n<div class="control button-control">\n<button class="button save-button">Save</button>\n<button class="button cancel-button">Cancel</button>\n</div>\n</div>\n<div class="avatar" role="presentation">\n<span class="avatar-image"><img width="80" height="80" src="' + (null == (__t = user.getAvatar()) ? "" : __t) + '"/></span>\n<label class="user-profile-avatar-button" for="user-profile-avatar-input">\nEdit photo\n<input type="file" name="avatar" id="user-profile-avatar-input" class="user-profile-avatar-input"/>\n</label>\n<div class="avatar-editor">\n<div class="avatar-crop"></div>\n<button class="button crop-button">Crop</button>\n</div>\n</div>\n</form>\n'), __p += "\n</div><!-- close user-profile-form-control -->";
			return __p
		}, templates.userProfileModalHeader = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<h4 class="modal-subheading">Your profile is public. It will appear with any comments you leave on NYTimes.com</h4>';
			return __p
		}, templates
	}), define("shared/account/views/user-profile-modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/modal/views/modal", "shared/account/templates"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			events: {
				"change #user-profile-avatar-input": "handleAvatarUpload",
				"click .cancel-button": "handleCancelClick",
				"click .save-button": "handleSaveClick",
				"click .crop-button": "handleCropClick",
				"submit #profile-form": "handleFormSubmit"
			},
			defaultSettings: {
				id: "user-profile-modal",
				addlClasses: "",
				headerContent: s.userProfileModalHeader(),
				modalTitle: "Edit Profile",
				modalContent: "",
				binding: ".user-profile-button",
				tailDirection: "fixed",
				hasCloseButton: !0,
				hasOverlay: !0,
				cropBoundaries: {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 0
				},
				tailLeftOffset: -40,
				tailTopOffset: -40,
				cropperWidth: 80,
				cropperHeight: 80
			},
			initialize: function(e) {
				var i = this;
				this.settings = t.extend({}, this.defaultSettings, e), this.settings.openCallback = function() {
					i.model || require(["shared/community/instances/community-user"], function(e) {
						i.model = e, i.model.isNew() ? i.model.once("change", i.render, i) : i.render(), i.model.on("avatarFailed", i.render, i)
					}), this.subscribeOnce(i, "nyt:profile-modal-close", this.close)
				}, this.settings.modalContent = this.renderModalContent()
			},
			renderModalContent: function() {
				return s.userProfileModalContent({
					user: this.model ? this.model : null
				})
			},
			handleUserReady: function() {
				var e = new n(this.settings);
				this.setElement(e.$modal), e.addToPage(), e.settings.closeCallback = this.render.bind(this), this.modal = e
			},
			render: function() {
				this.modal && this.model && this.modal.updateTemplate(this.renderModalContent())
			},
			handleCancelClick: function(e) {
				e.preventDefault(), this.local(this, "nyt:profile-modal-close")
			},
			handleSaveClick: function(e) {
				e.preventDefault(), this.model && (this.model.setName(this.$el.find("#user-profile-name").val()), this.model.setLocation(this.$el.find("#user-profile-location").val()), this.model.setNotify(this.$el.find("#global-comment-notify-checkbox").is(":checked")), this.$(".save-button").addClass("disabled").attr("disabled", "disabled"), this.model.once("sync", function() {
					this.local(this, "nyt:profile-modal-close")
				}, this).save())
			},
			handleFormSubmit: function(e) {
				e.preventDefault()
			},
			handleAvatarUpload: function(e) {
				this.$(".user-profile-avatar-button").addClass("loading"), this.model && e.target.files && this.model.once("avatarUploaded", this.createCropper.bind(this)).addRawAvatar(e.target.files[0])
			},
			handleCropClick: function(t) {
				var i = this;
				t.preventDefault(), e(t.target).addClass("disabled").attr("disabled", "disabled"), this.model.once("avatarCropped", function() {
					i.render()
				}).cropRawAvatar(this.settings.cropBoundaries)
			},
			getCropBoundingBox: function(e, t) {
				var i = Math.abs(parseInt(e.css("left"), 10)),
					n = Math.abs(parseInt(e.css("top"), 10)),
					s = {};
				return s.x1 = Math.ceil(i * t), s.y1 = Math.ceil(n * t), s.x2 = Math.ceil((i + this.settings.cropperWidth) * t), s.y2 = Math.ceil((n + this.settings.cropperHeight) * t), s
			},
			createCropper: function(t) {
				var i, n = this.$(".avatar-crop"),
					s = this;
				return e.fn.draggable ? (this.$("#user-profile-form").addClass("avatar-editing"), void(i = e('<img src="' + t + '"/>').on("load", function() {
					var t, a = this.width > this.height ? "avatar-horizontal" : "avatar-vertical",
						o = this.width > this.height ? "x" : "y",
						r = this.naturalHeight / n.height();
					i.removeClass("avatar-horizontal avatar-vertical").addClass(a).css({
						left: "0px",
						top: "0px"
					}), n.empty().append(i), s.settings.cropBoundaries = s.getCropBoundingBox(i, r), t = e('<div class="avatar-crop-container"></div>').prependTo(n).css({
						height: s.settings.cropperHeight + 2 * (this.height - s.settings.cropperHeight) + "px",
						width: s.settings.cropperWidth + 2 * (this.width - s.settings.cropperWidth) + "px",
						top: -1 * (this.height - s.settings.cropperHeight) + "px",
						left: -1 * (this.width - s.settings.cropperWidth) + "px"
					}), i.draggable({
						axis: o,
						containment: t,
						stop: function() {
							s.settings.cropBoundaries = s.getCropBoundingBox(i, r)
						},
						cursor: "move"
					})
				}))) : void require(["foundation/lib/jquery/jquery.draggable/1.11.4"], function() {
					this.createCropper(t)
				}.bind(this))
			}
		});
		return a
	}), define("shared/masthead/views/user-name-modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/modal/views/modal", "shared/masthead/templates", "foundation/models/user-data", "foundation/hosts", "shared/account/views/user-profile-modal"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = i.extend({
			events: {
				"click .premier-subscriber a": "handleUserSubscriptionClick",
				"click li a": "handleUserOptionClick"
			},
			defaultSettings: {
				id: "user-name-modal",
				modalTitle: "",
				modalContent: "",
				binding: ".user-name-button",
				tailDirection: "up-right",
				tailTopOffset: -8,
				tailLeftOffset: -1,
				width: "260px",
				toggleSpeed: 1,
				openCallback: function() {
					this.$target.addClass("active"), this.listenToOnce(this.pageManager, "nyt:page-scroll", this.close)
				},
				closeCallback: function() {
					this.$target.removeClass("active")
				}
			},
			initialize: function(e) {
				t.bindAll(this, "handleLogOut"), this.settings = t.extend({}, this.defaultSettings, e), this.trackingBaseData = {
					module: "ProfileDropdown",
					action: "click",
					region: "Masthead",
					"WT.nav": "shell"
				}
			},
			handleUserReady: function() {
				var e, t = this.getSubscriptionLabel(a);
				this.settings.modalTitle = s.userNameModalTitle({
					userData: a,
					subscription: t
				}), this.settings.modalContent = s.userNameModalContent({
					userData: a,
					hosts: o
				}), new r, this.render(), e = this.$el.find(".user-subscription"), "" === t.label && e.remove(), "" !== t.className && e.addClass(t.className), "" !== t.link && e.find("a").attr("href", t.link), this.listenToOnce(a, "nyt:user-image-loaded", this.handleProfileImage), this.$el.on("click", ".log-out-button", this.handleLogOut)
			},
			getSubscriptionLabel: function(e) {
				var t = {
					label: "",
					className: "",
					link: ""
				};
				return e.isPremierSubscriber() ? (t.label = "Times Insider Subscriber", t.className = "premier-subscriber", t.link = "http://www.nytimes.com/section/insider") : e.isWebSubscriber() && e.isMobileSubscriber() ? t.label = "All Digital Access Subscriber" : e.isTabletSubscriber() && e.isWebSubscriber() ? t.label = "Tablet and Web Subscriber" : e.isSmartphoneSubscriber() && e.isWebSubscriber() ? t.label = "Smartphone and Web Subscriber" : e.isWebSubscriber() ? t.label = "Web Subscriber" : e.isOpinionSubscriber() && e.isCookingSubscriber() ? t.label = "NYT Opinion & Cooking Subscriber" : e.isCookingSubscriber() ? t.label = "Cooking Subscriber" : e.isOpinionSubscriber() ? (t.label = "NYT Opinion Subscriber", t.link = "http://www.nytimes.com/content/help/mobile/nyt-opinion/nyt-opinion.html") : e.isCrosswordsSubscriber() && (t.label = "Crosswords Subscriber"), t
			},
			render: function() {
				var e = new n(this.settings);
				this.setElement(e.$modal), e.addToPage()
			},
			handleProfileImage: function() {
				var e = s.profileIcon({
					userData: a
				});
				this.$el.find(".modal-heading").prepend(e)
			},
			handleUserSubscriptionClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						contentCollection: "TimesPremier-InsideStory"
					});
				i.attr("href", n)
			},
			handleUserOptionClick: function(t) {
				var i = e(t.target),
					n = i.text(),
					s = i.attr("href"),
					a = {
						action: "Click",
						region: "TopBar",
						"WT.nav": "shell"
					};
				s && (n && (a.module = n.replace(/\s/g, "")), s = this.trackingAppendParams(s, a), i.attr("href", s))
			},
			handleLogOut: function() {
				var e = "http:" + o.www + "/logout";
				e = this.trackingAppendParams(e, {
					module: "LogOut",
					action: "Click",
					region: "TopBar",
					"WT.nav": "shell"
				}), this.trackingTrigger("tagx-auth-interaction", {
					module: "LogOut",
					state: a.isLoggedIn() ? "logged in" : "logged out",
					eventName: "logout click | LogOut"
				}), window.location = e
			}
		});
		return l
	}), define("shared/masthead/instances/masthead", ["jquery/nyt", "shared/masthead/views/masthead", "shared/masthead/views/in-story-theme", "shared/masthead/views/search", "shared/masthead/views/user-settings-modal", "shared/masthead/views/user-name-modal"], function(e, t, i, n, s, a) {
		"use strict";
		new t, new n, new s({
			fixedOverride: !0,
			openCallback: function() {
				this.$target.addClass("active"), this.listenToOnce(this.pageManager, "nyt:masthead-storytheme", this.close)
			}
		}), new a({
			fixedOverride: !0,
			openCallback: function() {
				this.$target.addClass("active"), this.listenToOnce(this.pageManager, "nyt:masthead-storytheme", this.close)
			}
		}), e("#masthead .kicker").text().length > 1 && new i
	}), define("shared/fontsizer/views/font-sizer", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/page-storage"], function(e, t, i, n) {
		"use strict";
		var s = i.extend({
			events: {
				doubletap: "handleDoubleTap"
			},
			nytEvents: {
				"nyt:fontsizer-change": "handleFontChange"
			},
			typeSizes: ["small", "medium", "large"],
			typePrefix: "type-size-",
			settingsKey: "fontsizer_typeSize",
			handleLocalStorageReady: function() {
				var e = n.get(this.settingsKey) || (this.pageManager.isMobile() ? "medium" : "small");
				this.broadcast("nyt:fontsizer-initialize", e), this.setSize(e)
			},
			getSize: function() {
				return this.typeSizes[this.sizeIndex]
			},
			setSize: function(e) {
				var i = t.indexOf(this.typeSizes, e);
				0 > i || (n.set(this.settingsKey, e), this.pageManager.setMeta(this.settingsKey, e), this.sizeIndex = i, this.adjustTypeSize())
			},
			cycle: function() {
				var e = this.sizeIndex;
				e += 1, e === this.typeSizes.length && (e = 0), this.broadcast("nyt:fontsizer-change", this.typeSizes[e])
			},
			adjustTypeSize: function() {
				this.$html.removeClass(function(e, t) {
					return (t.match(/\btype-size\S+/g) || []).join(" ")
				}).addClass(this.typePrefix + this.getSize())
			},
			handleFontChange: function(e) {
				this.setSize(e)
			},
			handleDoubleTap: function() {
				Modernizr.touch && this.cycle()
			}
		});
		return s
	}), define("article/common/instances/font-sizer", ["shared/fontsizer/views/font-sizer"], function(e) {
		"use strict";
		new e({
			el: "#story"
		})
	}), define("shared/account/helpers/account-modal-mixin", ["jquery/nyt", "underscore/nyt", "foundation/lib/polyfills/placeholder", "shared/account/templates", "foundation/models/token", "foundation/hosts"], function(e, t, i, n, s, a) {
		"use strict";
		var o = {
			oauthProviders: ["google", "facebook"],
			handleFormSubmit: function(e) {
				s.getToken() ? (this.$el.find("#account-form-token").val(s.getToken()), this.$el.find("#account-form-expiration").val(s.getTokenExpiration()), this.$el.find("#login-remember").val(this.$el.find("#login-remember-checkbox").is(":checked") ? 1 : 0)) : e.preventDefault()
			},
			handleFormButton: function() {
				s.getToken() ? this.$el.find("form").submit() : (this.subscribeOnce("nyt:myaccount-token", this.handleFormButton), s.loadData())
			},
			handleKeyUp: function(t) {
				var i = e(t.target);
				i.parent().find(".clear-button").toggle("" !== i.val())
			},
			handleClearButton: function(t) {
				var n = e(t.currentTarget),
					s = n.parent().find("input");
				n.toggle(!1), s.val(""), i()
			},
			executeOauthLogin: function(t) {
				t.preventDefault(), this.oauthPopup(e(t.currentTarget).data("providerName"))
			},
			addEvent: function(e, t, i) {
				e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i)
			},
			getPageUrlParams: function() {
				var t, i = window.location,
					n = {
						URI: i.protocol + "//" + i.hostname + "/" + i.pathname.replace(/^\//, "")
					};
				return i.search.length > 1 && (t = i.search.substr(1), t = t.replace(/(\?|&)?gwh=([^&]+)/g, ""), t = t.replace(/(\?|&)?gwt=([^&]+)/g, ""), t = t.replace(/%/g, "Q"), n.OQ = t), e.param(n)
			},
			getSocialLinkUrl: function(e, t, i) {
				return a.myaccount + "/oauth/" + t + "-link?type=login&URI=" + e + (i ? "&view=popup" : "") + "&flow=HPLI"
			},
			oauthPopup: function(e) {
				var i, n, s = "oauthPopup",
					a = 450,
					o = 600; - 1 !== t.indexOf(this.oauthProviders, e) && (n = ["height=" + o, "width=" + a, "left=" + (window.screen.availLeft + window.screen.width / 2 - a / 2), "top=" + Math.max(window.screen.height / 2 - o / 2 - 20, 0), "scrollbars=1"], i = window.open("about:blank", s, n.join(",")), i ? (i = window.open(this.getSocialLinkUrl(document.URL, e, !0), s, n.join(",")), i.focus()) : window.location.href = this.getSocialLinkUrl(document.URL, e))
			},
			renderOauthButtons: function() {
				return n.oauthButtons({
					facebookId: this.getFacebookButtonId(this.modalSettings.id),
					googleId: this.getGoogleButtonId(this.modalSettings.id),
					prefix: this.modalSettings.oauthButtonText
				})
			},
			addOauthEvents: function(e) {
				this.$el.find("#" + this.getGoogleButtonId(e) + ", #" + this.getFacebookButtonId(e)).on("click", t.bind(this.executeOauthLogin, this))
			},
			getFacebookButtonId: function(e) {
				return "facebook-oauth-button-" + e
			},
			getGoogleButtonId: function(e) {
				return "google-oauth-button-" + e
			}
		};
		return o
	}), define("shared/account/views/login-modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/modal/views/modal", "shared/account/templates", "foundation/hosts", "shared/account/helpers/account-modal-mixin", "foundation/lib/polyfills/placeholder"], function(e, t, i, n, s, a, o, r, l) {
		"use strict";
		var d = i.extend(t.extend({}, r, {
			state: n.isLoggedIn() ? "logged in" : "logged out",
			events: {
				"click .registration-modal-trigger": "handleRegisterClick",
				"click #login-send-button": "handleFormButton",
				"submit #login-form": "handleFormSubmit",
				"click .clear-button": "handleClearButton",
				"keyup .text": "handleKeyUp",
				"click .oauth-button": "handleLoginModalClick",
				"click .login-form": "handleLoginModalClick"
			},
			nytEvents: {
				"nyt:loginmodal-open": "handleOpen"
			},
			defaultSettings: {
				id: "login-modal",
				addlClasses: "account-modal",
				headerContent: a.accountModalHeader(),
				modalContent: "",
				modalFooter: a.loginModalFooter(),
				modalTitle: "Log in",
				moduleName: "LogIn",
				oauthButtonText: "Log in",
				binding: ".login-modal-trigger",
				tailDirection: "fixed",
				hasCloseButton: !0,
				hasOverlay: !0,
				tailLeftOffset: -40,
				tailTopOffset: -40
			},
			initialize: function(e) {
				var i = this;
				this.modalSettings = t.extend({}, this.defaultSettings, e), this.registrationPlatform = !1, this.modalSettings.modalContent = a.logInModalContent({
					oauthButtons: this.renderOauthButtons(),
					loginUrl: o.myaccount + "/auth/login?" + this.getPageUrlParams(),
					forgotPasswordUrl: o.myaccount + "/seg/forgot-password?EXIT_URI=" + encodeURIComponent(window.location.href)
				}), this.modalSettings.openCallback = function() {
					var e = i.modalTitle || this.$target.data("modal-title") || "Log in",
						t = i.moduleName || "LogIn";
					i.hasPlaceholderSupport && this.$modal.find(".login-email").focus(), this.$modal.find("#login-modal-modal-heading").text(e), this.$modal.find(".modal-subheading").toggleClass("hidden", "Log in" !== e), this.$modal.find(".field-container input").val(""), i.modalTitle = null, this.trackingTrigger("tagx-auth-interaction", {
						module: t,
						state: i.state,
						eventName: "modal popup | " + t
					})
				}, this.subscribe("nyt:modal-show-login-modal", l)
			},
			handleDomReady: function() {
				this.render()
			},
			render: function() {
				this.logInModal = new s(this.modalSettings).addToPage(), this.setElement(this.logInModal.$modal), this.local(this, "nyt:modal-login-modal-rendered"), this.addOauthEvents(this.modalSettings.id)
			},
			handleOpen: function(e) {
				e && e.modalTitle && (this.modalTitle = e.modalTitle), e && e.moduleName && (this.moduleName = e.moduleName), e && e.registrationPlatform && (this.registrationPlatform = e.registrationPlatform), this.logInModal && this.logInModal.open()
			},
			handleUserReady: function() {
				n.isLoggedIn() && (this.logInModal ? (this.logInModal.removeFromPage(), this.remove()) : this.subscribeOnce(this, "nyt:modal-login-modal-rendered", this.handleUserReady))
			},
			handleRegisterClick: function(e) {
				var t = {};
				e.stopPropagation(), this.registrationPlatform && (t.platformTracking = this.registrationPlatform, this.registrationPlatform = !1), this.logInModal.close(), this.broadcast("nyt:registrationmodal-open", t), this.trackingTrigger("loginmodal-register-click", {
					module: "Registration",
					action: "Click",
					"WT.z_ract": "Regnow"
				}), this.trackingTrigger("tagx-auth-interaction", {
					module: "Registration",
					state: this.state,
					eventName: "modal click | Registration"
				})
			},
			handleLoginModalClick: function() {
				this.trackingTrigger("tagx-auth-interaction", {
					module: "LogIn",
					state: this.state,
					eventName: "modal click | LogIn"
				})
			}
		}));
		return d
	}), define("shared/account/views/registration-modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/modal/views/modal", "shared/account/templates", "foundation/hosts", "shared/account/helpers/account-modal-mixin", "foundation/lib/polyfills/placeholder"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = i.extend(t.extend({}, o, {
			events: {
				"click .login-modal-trigger": "handleLoginClick",
				"click #register-send-button": "handleFormButton",
				"submit #registration-form": "handleFormSubmit",
				"click .clear-button": "handleClearButton",
				"keyup .text": "handleKeyUp"
			},
			nytEvents: {
				"nyt:registrationmodal-open": "handleOpen"
			},
			defaultSettings: {
				id: "registration-modal",
				addlClasses: "account-modal",
				headerContent: s.accountModalHeader(),
				modalContent: "",
				modalFooter: s.registrationModalFooter(),
				modalTitle: "Sign up",
				oauthButtonText: "Sign up",
				binding: ".registration-modal-trigger",
				tailDirection: "fixed",
				hasCloseButton: !0,
				hasOverlay: !0,
				tailLeftOffset: -40,
				tailTopOffset: -40
			},
			initialize: function(i) {
				var n = this;
				this.modalSettings = t.extend({}, this.defaultSettings, i), this.platformTracking = !1, this.modalSettings.modalContent = s.registrationModalContent({
					oauthButtons: this.renderOauthButtons(),
					regiUrl: a.myaccount + "/register?" + this.getPageUrlParams()
				}), this.modalSettings.openCallback = function() {
					n.hasPlaceholderSupport && this.$modal.find(".register-email").focus(), this.$modal.find(".field-container input").val(""), e("#account-form-platform").remove(), n.platformTracking && (e("#registration-form").append('<input id="account-form-platform" name="regi_info_platform" type="hidden" value="' + n.platformTracking + '">'), n.platformTracking = !1)
				}, this.subscribe("nyt:modal-show-registration-modal", r)
			},
			handleDomReady: function() {
				this.render()
			},
			render: function() {
				this.registrationModal = new n(this.modalSettings).addToPage(), this.setElement(this.registrationModal.$modal), this.addOauthEvents(this.modalSettings.id)
			},
			handleLoginClick: function() {
				this.registrationModal.close()
			},
			handleOpen: function(e) {
				e && e.platformTracking && (this.platformTracking = e.platformTracking), this.registrationModal && this.registrationModal.open()
			}
		}));
		return l
	}), define("shared/account/instances/account", ["shared/account/views/login-modal", "shared/account/views/registration-modal", "foundation/models/user-data"], function(e, t, i) {
		"use strict";
		i.isLoggedIn() || (new e, new t)
	}), define("shared/navigation/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.mainPanel = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) {
				__p += '<div class="sections">\n';
				var count = 1;
				__p += "\n", _.each(level1, function(e) {
					__p += '\n<div class="section ' + (null == (__t = isVisible(e[0], count) === !1 ? "hidden" : "") ? "" : __t) + '">\n<ul class="menu" role="menubar">\n', _.each(e, function(e) {
						__p += "\n" + (null == (__t = liTemplate({
							model: e,
							isVisible: isVisible(e, count)
						})) ? "" : __t) + "\n", count += iterateTemplateCount(e), __p += "\n"
					}), __p += "\n", count += 1, __p += "\n</ul>\n</div>\n"
				}), __p += "\n</div>"
			}
			return __p
		}, templates.menuItem = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<li role="presentation" class="' + (null == (__t = isVisible === !1 ? "hidden" : "menuitem-visible") ? "" : __t) + '">\n<a id="navId-' + (null == (__t = model.getTaxonomyId()) ? "" : __t) + '"\nclass="' + (null == (__t = model.getEdition()) ? "" : __t) + " " + (null == (__t = model.hasChildren() ? "expandable" : "") ? "" : __t) + '"\nrole="menuitem" ' + (null == (__t = model.getPath() ? ' href="' + model.getPath() + '"' : ' tabindex="0"') ? "" : __t) + "\n" + (null == (__t = model.hasChildren() ? ' aria-haspopup="true" aria-expanded="false"' : "") ? "" : __t) + ">\n" + (null == (__t = model.get("name")) ? "" : __t) + "\n", model.hasChildren() && (__p += '\n<div class="arrow arrow-right">\n<div class="arrow-conceal"></div>\n</div>\n', model.getLevel() > 1 && (__p += '\n<div class="arrow arrow-left">\n<div class="arrow-conceal"></div>\n</div>\n'), __p += "\n"), __p += "\n</a>\n</li>";
			return __p
		}, templates.mobileNav = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<section class="edition-navigation">\n<h2 class="section-heading visually-hidden">Navigation Section</h2>\n<ul class="menu">\n<li class="' + (null == (__t = isGlobalEdition ? "" : "active") ? "" : __t) + '"><a href="http://mobile.nytimes.com/"><span>U.S. Edition</span></a></li>\n</ul>\n<ul class="menu">\n<li class="' + (null == (__t = isGlobalEdition ? "active" : "") ? "" : __t) + '"><a href="http://mobile.nytimes.com/international/"><span>International Edition</span></a></li>\n</ul>\n</section>\n<section class="primary-navigation">\n<h2 class="section-heading visually-hidden">Navigation Section</h2>\n<ul class="menu">\n<li><a href="http://mobile.nytimes.com/' + (null == (__t = isGlobalEdition ? "international/" : "") ? "" : __t) + '"><span>Home</span></a></li>\n<li><a href="http://mobile.nytimes.com/world/"><span>World</span></a></li>\n<li><a href="http://mobile.nytimes.com/national/"><span>U.S. ' + (null == (__t = isGlobalEdition ? "News" : "") ? "" : __t) + '</span></a></li>\n<li><a href="http://mobile.nytimes.com/politics/"><span>' + (null == (__t = isGlobalEdition ? "U.S." : "") ? "" : __t) + ' Politics</span></a></li>\n<li><a href="http://mobile.nytimes.com/upshot/"><span>The Upshot</span></a></li>\n<li><a href="http://mobile.nytimes.com/nyregion/"><span>New York</span></a></li>\n<li><a href="http://mobile.nytimes.com/' + (null == (__t = isGlobalEdition ? "international/" : "") ? "" : __t) + 'business/"><span>Business ' + (null == (__t = isGlobalEdition ? "" : "Day") ? "" : __t) + '</span></a></li>\n<li><a href="http://mobile.nytimes.com/technology/"><span>Technology</span></a></li>\n<li><a href="http://mobile.nytimes.com/' + (null == (__t = isGlobalEdition ? "international/" : "") ? "" : __t) + 'sports/"><span>Sports</span></a></li>\n</ul>\n<ul class="menu">\n<li><a href="http://mobile.nytimes.com/' + (null == (__t = isGlobalEdition ? "international/" : "") ? "" : __t) + 'opinion/"><span>Opinion</span></a></li>\n<li><a href="http://mobile.nytimes.com/science/"><span>Science</span></a></li>\n<li><a href="http://mobile.nytimes.com/health/"><span>Health</span></a></li>\n<li><a href="http://mobile.nytimes.com/' + (null == (__t = isGlobalEdition ? "international/" : "") ? "" : __t) + 'arts/"><span>Arts</span></a></li>\n<li><a href="http://mobile.nytimes.com/' + (null == (__t = isGlobalEdition ? "international/" : "") ? "" : __t) + 'style/"><span>Style</span></a></li>\n<li><a href="http://mobile.nytimes.com/photos/"><span>Photos</span></a></li>\n<li><a href="http://mobile.nytimes.com/video/"><span>Video</span></a></li>\n<li><a href="http://mobile.nytimes.com/most-emailed/"><span>Most Emailed</span></a></li>\n<li><a href="http://mobile.nytimes.com/times-insider/"><span>Times Insider</span></a></li>\n</ul>\n</section>\n<section class="secondary-navigation">\n<h2 class="section-heading visually-hidden">Navigation Section</h2>\n<ul class="menu">\n<li><a href="http://mobile.nytimes.com/automobiles/"><span>Automobiles</span></a></li>\n<li><a href="http://mobile.nytimes.com/blogs/"><span>Blogs</span></a></li>\n<li><a href="http://mobile.nytimes.com/books/"><span>Books</span></a></li>\n<li><a href="http://mobile.nytimes.com/' + (null == (__t = isGlobalEdition ? "international/" : "") ? "" : __t) + 'dining/"><span>Food</span></a></li>\n<li><a href="http://mobile.nytimes.com/education/"><span>Education</span></a></li>\n<li><a href="http://mobile.nytimes.com/magazine/"><span>Magazine</span></a></li>\n<li><a href="http://mobile.nytimes.com/mens-style/"><span>Men\'s Style</span></a></li>\n<li><a href="http://mobile.nytimes.com/movies/"><span>Movies</span></a></li>\n<li><a href="http://mobile.nytimes.com/music/"><span>Music</span></a></li>\n<li><a href="http://mobile.nytimes.com/business/media/"><span>Media &amp; Advertising</span></a></li>\n<li><a href="http://mobile.nytimes.com/obituaries/"><span>Obituaries</span></a></li>\n</ul>\n<ul class="menu">\n<li><a href="http://mobile.nytimes.com/publiceditor/"><span>Public Editor</span></a></li>\n', isGlobalEdition || (__p += '\n<li><a href="http://mobile.nytimes.com/realestate/"><span>Real Estate</span></a></li>\n'), __p += '\n<li><a href="http://mobile.nytimes.com/opinion/sundayreview/"><span>Sunday Review</span></a></li>\n', isGlobalEdition && (__p += '\n<li><a href="http://mobile.nytimes.com/opinion/international/greathomes/"><span>Great Homes and Destinations</span></a></li>\n'), __p += '\n<li><a href="http://mobile.nytimes.com/tmagazine/"><span>T Magazine</span></a></li>\n<li><a href="http://mobile.nytimes.com/television/"><span>Television</span></a></li>\n<li><a href="http://mobile.nytimes.com/theater/"><span>Theater</span></a></li>\n<li><a href="http://mobile.nytimes.com/timeswire/"><span>Times Wire</span></a></li>\n<li><a href="http://mobile.nytimes.com/travel/"><span>Travel</span></a></li>\n<li><a href="http://mobile.nytimes.com/weddings/"><span>Weddings</span></a></li>\n<li><a href="http://nytlive.nytimes.com/womenintheworld/"><span>Women In The World</span></a></li>\n<li><a href="http://mobile.nytimes.com/corrections/"><span>Corrections</span></a></li>\n</ul>\n</section>\n<section class="tertiary-navigation">\n<h2 class="section-heading visually-hidden">Navigation Section</h2>\n<ul class="menu">\n<li><a href="http://mobile.nytimes.com/recommendations/"><span>Recommendations</span></a></li>\n</ul>\n<ul class="menu">\n<li><a href="http://mobile.nytimes.com/saved/"><span>Saved</span></a></li>\n</ul>\n</section>\n<section class="settings ' + (null == (__t = userData.isLoggedIn() ? "" : "hidden") ? "" : __t) + '">\n<h2 class="section-heading visually-hidden">Navigation Section</h2>\n<ul class="menu">\n<li><span class="label">Account:</span> ' + (null == (__t = userData.getUserName()) ? "" : __t) + '</li>\n</ul>\n</section>\n<section class="logout ' + (null == (__t = userData.isLoggedIn() ? "" : "hidden") ? "" : __t) + '">\n<h2 class="section-heading visually-hidden">Navigation Section</h2>\n<ul class="menu">\n<li><a href="https://myaccount.nytimes.com/mobile/logout/smart/index.html?EXIT_URI=' + (null == (__t = encodeURIComponent(window.location)) ? "" : __t) + '"><span>Log out</span></a></li>\n</ul>\n</section>\n<section class="account ' + (null == (__t = userData.isLoggedIn() ? "hidden" : "") ? "" : __t) + '">\n<h2 class="section-heading visually-hidden">Navigation Section</h2>\n<ul class="menu">\n<li><a href="http://www.nytimes.com/mowweb/ftnotlog"><span>Subscribe</span></a></li>\n</ul>\n<ul class="menu">\n<li><a href="https://myaccount.nytimes.com/mobile/login/smart/index.html?EXIT_URI=' + (null == (__t = encodeURIComponent(window.location)) ? "" : __t) + '"><span>Log In</span></a></li>\n</ul>\n</section>';
			return __p
		}, templates.navigationModalContent = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="secondary-container">\n' + (null == (__t = secondary) ? "" : __t) + '\n</div>\n<div class="tertiary-container">\n' + (null == (__t = tertiary) ? "" : __t) + "\n</div>";
			return __p
		}, templates.secondaryPanel = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) {
				__p += '<div class="secondary-container">\n<div class="header">\n<h5 class="section-heading"><a href="" role="menuitem"></a></h5>\n</div>\n';
				var count = 1;
				__p += "", _.each(level2, function(e) {
					__p += '\n<div class="section ' + (null == (__t = "432A1823-3F24-43C0-8004-79088F94E754" === e[0].getParentId() ? "video" : "") ? "" : __t) + '" data-parent="navId-' + (null == (__t = e[0].getParentId()) ? "" : __t) + '">\n<ul class="secondary" role="menu">\n', _.each(e, function(e) {
						__p += "\n" + (null == (__t = liTemplate({
							model: e,
							isVisible: !0
						})) ? "" : __t) + "\n"
					}), __p += "\n</ul>\n</div><!-- close secondary " + (null == (__t = e[0].getParentId()) ? "" : __t) + " sections -->\n"
				}), __p += "", _.each(level1, function(e) {
					__p += '\n<div class="section section-more ' + (null == (__t = isVisible(e[0], count, !0) === !1 ? "hidden" : "") ? "" : __t) + '"  data-parent="navId-more-section">\n<ul class="secondary" role="menu">\n', _.each(e, function(e) {
						__p += "\n" + (null == (__t = liTemplate({
							model: e,
							isVisible: isVisible(e, count, !0)
						})) ? "" : __t) + "\n", count += iterateTemplateCount(e), __p += "\n"
					}), __p += "\n", count += 1, __p += "\n</ul>\n</div>\n"
				}), __p += "</div><!-- close secondary modal -->"
			}
			return __p
		}, templates.tertiaryPanel = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="header">\n<h5 class="section-heading"><a href="" role="menuitem"></a></h5>\n</div>\n', _.each(level3, function(e, t) {
				__p += '\n<ul class="tertiary" data-parent="navId-' + (null == (__t = e[0].getParentId()) ? "" : __t) + '" role="menu">\n', _.each(e, function(e, t) {
					__p += "\n" + (null == (__t = liTemplate({
						model: e,
						isVisible: !0
					})) ? "" : __t) + "\n"
				}), __p += "\n</ul>\n"
			}), __p += "";
			return __p
		}, templates
	}), define("shared/data/models/section", ["backbone/nyt"], function(e) {
		"use strict";
		var t = e.Model.extend({
			defaults: {
				name: "",
				edition: "",
				className: "",
				path: "",
				show_in_nav: !0,
				hasSubsections: !1,
				level: 1,
				taxonomyId: ""
			},
			getTaxonomyId: function() {
				return this.get("taxonomyId")
			},
			getParentId: function() {
				return this.get("parent")
			},
			getEdition: function() {
				var e = this.get("edition");
				return "global" === e ? "international" : e
			},
			hasChildren: function() {
				return this.get("hasSubsections")
			},
			getPath: function() {
				return this.get("path")
			},
			getLevel: function() {
				return this.get("level")
			}
		});
		return t
	}), define("shared/data/collections/taxonomy", ["backbone/nyt", "underscore/nyt", "foundation/collections/base-collection", "shared/data/models/section", "foundation/hosts", "foundation/models/user-data"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			url: s.staticHost + "/services/json/taxonomy/v2/flat.jsonp",
			model: n,
			sectionMarkers: ["C5BFA7D5-359C-427B-90E6-6B7245A6CDD8", "5C13EEDD-D905-4D8C-A284-6859EA434563", "8FB1308A-FFE4-4BED-ADF6-659A680D0884", "6101A43A-8BDE-45FF-AAD5-EF7396F83AC9", "FED853D9-D192-46F6-8D18-447803EB4A7B"],
			initialize: function() {
				this.editionString = "us" === this.pageManager.getEdition() ? "domestic" : "global", this.level1 = [], this.level2 = [], this.level3 = [], this.fetch()
			},
			sync: function(t, i, n) {
				return n.dataType = "jsonp", n.jsonpCallback = "jsonTaxonomyCallback", n.cache = !0, e.sync(t, i, n)
			},
			parse: function(i) {
				var s, a, o, r = 0,
					l = new e.Collection,
					d = t.map(i.elements, function(e) {
						return e.taxonomyId = e.id, e.id = r++, e
					});
				for (l.model = n, l.reset(d), s = l.where({
						parent: null
					}), a = 0, r = 0, o = s.length; o > r; r += 1) t.indexOf(this.sectionMarkers, s[r].get("taxonomyId")) >= 0 && (this.levelData(l, s.slice(a, r), 0), a = r);
				return this.levelData(l, s.slice(a, s.length), 0), this.level1.push([new n({
					name: "More",
					taxonomyId: "more-section",
					hasSubsections: !0
				})]), l.toJSON()
			},
			levelData: function(e, i, n) {
				var s, a, o, r, l, d, c;
				if (t.isArray(i))
					for (this["level" + (n + 1)].push(i), s = 0, a = i.length; a > s; s += 1) this.levelData(e, i[s], n + 1);
				else 3 > n && (c = e.where({
					taxonomyId: i.get("taxonomyId")
				}).length > 1, o = e.where({
					parent: i.get("taxonomyId"),
					show_in_nav: !0
				}), c && (o = t.uniq(o, function(e) {
					return e.get("taxonomyId")
				}))), r = o && o.length > 0, i.set("className", i.get("name").replace(/[^a-zA-Z0-9]/g, "").toLowerCase()), i.set("hasSubsections", r), i.set("level", n), l = i.get("alternate_editions"), l && l[this.editionString] && (d = e.findWhere({
					taxonomyId: l[this.editionString]
				}), i.set("editionName", d.get("name")), i.set("editionPath", d.get("path"))), r && this.levelData(e, o, n)
			},
			getPrimarySections: function() {
				return this.level1
			},
			getSecondarySections: function() {
				return this.level2
			},
			getTertiarySections: function() {
				return this.level3
			},
			getSectionByKeyword: function(e) {
				return this.find(function(t) {
					var i = t.get("path") || "";
					return i.indexOf("/" + e + "/index.html") > 0
				})
			}
		});
		return a
	}), define("shared/data/instances/taxonomy", ["shared/data/collections/taxonomy"], function(e) {
		"use strict";
		return new e
	}), define("shared/navigation/views/navigation", ["module", "jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/views/page-manager", "foundation/hosts", "foundation/models/user-data", "shared/modal/views/modal", "shared/navigation/templates", "shared/data/instances/taxonomy"], function(e, t, i, n, s, a, o, r, l, d) {
		"use strict";
		var c = n.registerView("navigation").extend({
			module: e,
			el: "#navigation",
			navTemplate: l.navigation,
			modalTemplate: l.navigationModalContent,
			events: {
				mouseleave: "delayedClose",
				mouseenter: "cancelDelayedClose",
				"mouseenter li a": "tryPrimaryHover",
				"mouseleave li a.expandable": "delayedModalClose",
				"click li a": "activatePrimaryItem",
				"click .menu a[href]": "handlePrimaryNavigationClick"
			},
			nytEvents: {
				"nyt:masthead-section-click": "toggle",
				"nyt:navigation-toggle-ready": "toggle",
				"nyt:navigation-edge-click": "open",
				"nyt:navigation-edge-mouse-enter": "delayedOpen",
				"nyt:navigation-edge-mouse-leave": "cancelDelayedOpen",
				"nyt:messaging-critical-alerts-move-furniture": "moveNav",
				"nyt:messaging-suggestions-move-furniture": "moveNav",
				"nyt:a11y-enabled": "enableA11Nav",
				"nyt:a11y-disabled": "disableA11yNav"
			},
			defaultSettings: {
				panelwidth: 210,
				navTimeout: 500,
				navAnimation: 150,
				hoverTimeout: 500,
				intentRangeLower: 10,
				intentRangeUpper: 170,
				maxMouseLocs: 2,
				a11yEnabled: !1
			},
			modalSettings: {
				id: "navigation-modal",
				modalTitle: "",
				modalContent: "",
				tailDirection: "left-top",
				closeOnClick: !1,
				fixedOverride: !0,
				autoPosition: !0,
				positionTailSide: !0,
				toggleSpeed: 1
			},
			mouseLocs: [],
			navIds: {
				REAL_ESTATE: "navId-92720057-BCB6-4BDB-9351-12F29393259F",
				OPINION_DOMESTIC: "navId-09736473-CB3F-4B2F-9772-3AF128ABE12D",
				OPINION_INTERNATIONAL: "navId-AD8090D7-4137-4D71-84C8-70DA3BD89778",
				VIDEO: "navId-432A1823-3F24-43C0-8004-79088F94E754",
				CONFERENCES: "navId-0442C365-4B63-4B63-B9DE-3C28319CB622",
				MORE: "navId-more-section"
			},
			navLevels: {
				PRIMARY: 1,
				SECONDARY: 2,
				TERTIARY: 3
			},
			initialize: function(e) {
				i.bindAll(this, "tryPrimaryHover", "trySecondaryHover", "open", "close", "render", "saveMousePosition", "delayedOpen", "delayedClose", "cancelDelayedOpen", "cancelDelayedClose", "delayedModalOpen", "delayedModalClose", "cancelDelayedModalOpen", "cancelDelayedModalClose", "delayedPrimaryHover", "cancelDelayedPrimaryHover", "delayedSecondaryHover", "cancelDelayedSecondaryHover", "handleClickClose", "handleTapClose", "detectFalsePositive", "isNavItemVisible", "iterateTemplateCount"), this.settings = i.extend({}, this.defaultSettings, e), this.singlePanelWidth = this.settings.panelwidth + "px", this.singlePanelPartlyShut = this.settings.panelwidth - 20 + "px", this.isNavAnimating = !1, this.timer = {}, d.length > 0 ? this.render() : this.subscribeOnce(d, "sync", this.render), this.$document.on("click", "#navigation-modal a[href]", i.bind(this.handleModalClick, this)), this.trackingBaseData = {
					module: "SectionsNav",
					action: "click",
					version: "BrowseTree",
					region: "TopBar"
				}
			},
			handleUserReady: function() {
				this.updateCrosswordSubscriptionLink()
			},
			updateCrosswordSubscriptionLink: function() {
				var e = o.isTabletSubscriber(),
					i = o.isSmartphoneSubscriber(),
					n = o.isHomeDeliverySubscriber(),
					s = o.isPremierSubscriber(),
					r = o.isOpinionSubscriber(),
					l = o.isCrosswordsSubscriber(),
					d = a.www + "/subscriptions/games/lp8J6KQ.html?campaignId=49W96",
					c = a.www + "/subscriptions/games/lp897H9.html?campaignId=49W8Y";
				(e || i || n || s || r) && !l ? t("#nyt-crossword").attr("href", d) : l || t("#nyt-crossword").attr("href", c)
			},
			handlePrimaryNavigationClick: function(e) {
				var i = t(e.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						contentCollection: t.trim(i.text())
					});
				i.attr("href", n)
			},
			handleModalClick: function(e) {
				var i = t(e.currentTarget),
					n = t.trim(t("#navigation-modal").find(".secondary-container .header").text()),
					s = this.trackingAppendParams(i.attr("href"), {
						contentCollection: n + "/" + t.trim(i.text()),
						contentPlacement: i.closest("ul").hasClass("secondary") ? 2 : 3
					});
				i.attr("href", s)
			},
			moveNav: function(e) {
				e(this.$el)
			},
			render: function() {
				var e, t, n, s = 23,
					a = 33,
					o = this,
					c = this.$body.find(".navigation-modal");
				this.navItemsInView = s, this.navItemsInView = Math.floor((this.pageManager.getViewport().height - 41) / 26), this.pageManager.isMobile() ? this.navItemsInView = s : this.navItemsInView > a ? this.navItemsInView = a : this.navItemsInView < s && (this.navItemsInView = s), this.$el.append(l.mainPanel({
					level1: d.getPrimarySections(),
					liTemplate: l.menuItem,
					isVisible: this.isNavItemVisible,
					iterateTemplateCount: this.iterateTemplateCount
				})), e = l.secondaryPanel({
					level1: i.initial(d.getPrimarySections()),
					level2: d.getSecondarySections(),
					liTemplate: l.menuItem,
					isVisible: this.isNavItemVisible,
					iterateTemplateCount: this.iterateTemplateCount
				}), t = l.tertiaryPanel({
					level3: d.getTertiarySections(),
					liTemplate: l.menuItem
				}), c.eq(0).remove(), this.modalSettings.modalContent = l.navigationModalContent({
					secondary: e,
					tertiary: t
				}), this.navigationModal = new r(this.modalSettings), this.navigationModal.addToPage(), this.navigationModal.$modal.on("mouseover", ".secondary li a", o.trySecondaryHover).on("click", ".secondary li a.expandable", o.activateSecondaryItem).on("mouseenter", ".tertiary-container", o.cancelDelayedSecondaryHover).on("mouseenter", function() {
					o.cancelDelayedClose(), o.cancelDelayedModalClose(), o.cancelDelayedPrimaryHover()
				}).on("mouseleave", function() {
					o.delayedClose(), o.delayedModalClose()
				}), this.navigationModal.$modal.find(".secondary-container .hidden .menuitem-visible").eq(0).closest(".section").removeClass("hidden"), n = this.navigationModal.$modal.find(".section-more"), this.moreInModalHeight = 25 * n.find(".menuitem-visible").length + 30 * n.not(".hidden").length + 45
			},
			isNavItemVisible: function(e, t, i) {
				return i ? t > this.navItemsInView && "more-section" !== e.getTaxonomyId() : t <= this.navItemsInView || "more-section" === e.getTaxonomyId()
			},
			iterateTemplateCount: function(e) {
				var t = "global" === this.pageManager.getEdition() ? "international" : "domestic";
				return e.getEdition() && t !== e.getEdition() ? 0 : 1
			},
			toggle: function() {
				this.$el.hasClass("active") ? this.close() : this.open()
			},
			open: function() {
				var e = this,
					t = {
						width: e.singlePanelPartlyShut,
						display: "block",
						opacity: "0"
					},
					i = {
						width: e.singlePanelWidth,
						opacity: "1"
					};
				this.isNavAnimating || this.$el.hasClass("active") !== !1 || (this.$el.css(t), this.$el.toggleClass("active"), this.$html.toggleClass("navigation-active"), this.isNavAnimating = !0, this.$el.animate(i, this.settings.navAnimation, function() {
					e.isNavAnimating = !1, e.$body.on("click", e.handleTapClose)
				}), this.pageManager.isMobile() && this.$body.css("cursor", "pointer"), this.settings.a11yEnabled && this.toggleFocusEvents(!0), this.broadcast("nyt:navigation-opened", this), this.$document.on("mousemove", this.saveMousePosition))
			},
			close: function() {
				var e, t, i;
				this.isNavAnimating || this.$el.hasClass("active") !== !0 || (e = this, t = this.$el.css("marginTop"), i = {
					width: this.singlePanelPartlyShut,
					opacity: "0"
				}, this.navigationModal.close(), this.resetNav(this.navLevels.SECONDARY), this.isNavAnimating = !0, this.$el.animate(i, this.settings.navAnimation, function() {
					e.$el.toggleClass("active"), e.$html.toggleClass("navigation-active"), e.$body.off("click", e.handleClickClose), e.$body.off("click", e.handleTapClose), e.$el.removeAttr("style"), e.$el.css("marginTop", t), e.$el.find("a").removeClass("active"), e.isNavAnimating = !1
				}), this.pageManager.isMobile() && this.$body.css("cursor", ""), this.settings.a11yEnabled && this.toggleFocusEvents(!1), this.broadcast("nyt:navigation-closed", this), this.$document.off("mousemove", this.saveMousePosition))
			},
			resetNav: function(e) {
				var t = this.navigationModal.$modal;
				e === this.navLevels.SECONDARY && t.find(".section").removeClass("active"), t.find(".secondary a").removeClass("active"), t.find(".tertiary").removeClass("active"), t.find(".modal-content").removeClass("expanded"), t.find(".section-heading a").removeClass("active")
			},
			activatePrimaryItem: function(e) {
				var i, n, s, a, o, r, l, d = t(e.target).closest("a"),
					c = d.attr("id");
				e.stopPropagation(), d.hasClass("active") || this.isNavAnimating !== !1 || (d.hasClass("expandable") ? (i = this.navigationModal, n = i.$modal.find('[data-parent="' + c + '"]').find("li").length, s = 55, a = 29 * n, o = a + s, l = i.$modal.find(".secondary-container"), c === this.navIds.MORE ? o = this.moreInModalHeight || 553 : c === this.navIds.OPINION_DOMESTIC || c === this.navIds.OPINION_INTERNATIONAL ? o = 357 : c === this.navIds.VIDEO ? (o = 310, l.css("width", "380px")) : c === this.navIds.CONFERENCES && l.css("width", "220px"), this.cancelDelayedModalClose(), this.resetNav(this.navLevels.SECONDARY), i.$modal.height(o), e.currentTarget = e.target, i.open(e), this.moveModalArrow(), this.$el.find("a").removeClass("active").attr("aria-expanded", "false"), d.addClass("active").attr("aria-expanded", "true"), i.$modal.find(".secondary").removeClass("active"), r = i.$modal.find(".secondary-container .section-heading"), this.setHeadingText(d, r), i.$modal.find('[data-parent="' + c + '"]').addClass("active"), c !== this.navIds.VIDEO && c !== this.navIds.CONFERENCES && l.css("width", "190px"), this.broadcast("nyt:navigation-level-one-open", i.$modal)) : this.modalClose())
			},
			setHeadingText: function(e, t) {
				e.attr("href") ? t.html('<a href="' + e.attr("href") + '" tabinxdex="0" role="menuitem" class="active">' + e.text() + "</a>") : t.html(e.text())
			},
			moveModalArrow: function() {
				var e, i, n, s = this.navigationModal.$modal,
					a = 12,
					o = 18,
					r = 39,
					l = this.settings.panelwidth - 10;
				t("html").hasClass("viewport-large-70") && (l += t("#navigation-edge").width()), s.css("left", l + "px"), e = s.find(".modal-pointer"), e.hasClass("modal-pointer-left") ? (i = Math.floor(s.outerHeight() / 2) - o, e.css("top", i + "px")) : e.hasClass("modal-pointer-left-top") ? e.css("top", a, "px") : e.hasClass("modal-pointer-left-bottom") && (n = s.outerHeight() - r, e.css("top", n + "px"))
			},
			activateSecondaryItem: function(e) {
				var i, n, s = t(e.target).closest("a");
				s.hasClass("active") || this.isNavAnimating !== !1 || (e.preventDefault(), i = this.navigationModal.$modal, s.hasClass("expandable") ? (this.resetNav(this.navLevels.TERTIARY), i.find(".modal-content").addClass("expanded"), n = i.find(".tertiary-container .section-heading"), this.setHeadingText(s, n), i.find('[data-parent="' + s.attr("id") + '"]').eq(0).addClass("active"), s.addClass("active").attr("aria-expanded", "true"), this.broadcast("nyt:navigation-level-two-open", i.find(".tertiary-container"))) : (this.resetNav(this.navLevels.TERTIARY), s.addClass("active")))
			},
			tryPrimaryHover: function(e) {
				var i, n = t(e.target).closest("a"),
					s = n.hasClass("expandable");
				this.cancelDelayedClose(), s && this.cancelDelayedModalClose(), this.cancelDelayedPrimaryHover(), this.$el.find("li a.active").length > 0 ? (i = this.getAngle(this.mouseLocs[0], this.mouseLocs[1]), i > this.defaultSettings.intentRangeLower && i < this.defaultSettings.intentRangeUpper ? this.delayedPrimaryHover(e) : this.activatePrimaryItem(e)) : this.activatePrimaryItem(e)
			},
			trySecondaryHover: function(e) {
				var t;
				this.cancelDelayedClose(), this.cancelDelayedModalClose(), this.cancelDelayedSecondaryHover(), this.navigationModal.$modal.find(".modal-content").hasClass("expanded") ? (t = this.getAngle(this.mouseLocs[0], this.mouseLocs[1]), t > this.defaultSettings.intentRangeLower && t < this.defaultSettings.intentRangeUpper ? this.delayedSecondaryHover(e) : this.activateSecondaryItem(e)) : this.activateSecondaryItem(e)
			},
			getAngle: function(e, t) {
				var i, n, s, a, o, r, l;
				return e && t ? (i = e.x, n = e.y, s = t.x, a = t.y, o = s - i, r = a - n, l = Math.round(180 * Math.atan2(o, r) / Math.PI * 10) / 10) : null
			},
			delayedOpen: function() {
				this.timer.navOpen = window.setTimeout(this.open, this.defaultSettings.navTimeout)
			},
			delayedClose: function() {
				this.timer.navClose = window.setTimeout(this.close, this.defaultSettings.navTimeout)
			},
			cancelDelayedOpen: function() {
				window.clearTimeout(this.timer.navOpen)
			},
			cancelDelayedClose: function() {
				window.clearTimeout(this.timer.navClose)
			},
			delayedModalOpen: function() {
				this.timer.modalOpen = window.setTimeout(this.navigationModal.open, this.defaultSettings.navTimeout)
			},
			delayedModalClose: function() {
				var e = this;
				this.cancelDelayedPrimaryHover(), this.cancelDelayedSecondaryHover(), this.timer.modalClose = window.setTimeout(function() {
					e.modalClose()
				}, this.defaultSettings.navTimeout)
			},
			modalClose: function() {
				this.$el.find("a").removeClass("active"), this.navigationModal.close(), this.broadcast("nyt:navigation-level-one-closed")
			},
			cancelDelayedModalOpen: function() {
				window.clearTimeout(this.timer.modalOpen)
			},
			cancelDelayedModalClose: function() {
				window.clearTimeout(this.timer.modalClose)
			},
			delayedPrimaryHover: function(e) {
				var t = this;
				t.timer.primaryHoverIntent = window.setTimeout(function() {
					t.activatePrimaryItem(e)
				}, this.defaultSettings.hoverTimeout)
			},
			cancelDelayedPrimaryHover: function() {
				window.clearTimeout(this.timer.primaryHoverIntent)
			},
			delayedSecondaryHover: function(e) {
				var t = this;
				t.timer.secondaryHoverIntent = window.setTimeout(function() {
					t.activateSecondaryItem(e)
				}, this.defaultSettings.hoverTimeout)
			},
			cancelDelayedSecondaryHover: function() {
				window.clearTimeout(this.timer.secondaryHoverIntent)
			},
			handleClickClose: function(e) {
				0 === t(e.target).closest("#navigation, #navigation-modal").length && this.close()
			},
			handleTapClose: function(e) {
				0 === t(e.target).closest("#navigation, #navigation-modal").length && this.close()
			},
			saveMousePosition: function(e) {
				this.mouseLocs.length > 1 ? (this.mouseLocs[1].x !== e.pageX || this.mouseLocs[1].y !== e.pageY) && (this.mouseLocs.push({
					x: e.pageX,
					y: e.pageY
				}), this.mouseLocs.length > this.defaultSettings.maxMouseLocs && this.mouseLocs.shift()) : this.mouseLocs.push({
					x: e.pageX,
					y: e.pageY
				})
			},
			toggleFocusEvents: function(e) {
				var t = e ? "subscribe" : "stopSubscribing";
				this[t]("nyt:page-key-tab nyt:page-key-up-a11y nyt:page-key-down-a11y", this.handleFocusKey), this[t]("nyt:page-key-esc-a11y nyt:page-key-left-a11y", this.handleCollapseKey), this[t]("nyt:page-key-enter nyt:page-key-right-a11y", this.handleExpandKey), this[t]("nyt:navigation-level-one-open nyt:navigation-level-two-open", this.addFocusableElements), e ? (this.focusableElements = [], this.addFocusableElements(), this.$document.on("mousemove", this.detectFalsePositive)) : delete this.focusableElements
			},
			addFocusableElements: function(e) {
				var t, n;
				this.settings.a11yEnabled && (e && e.length > 0 ? n = ".active a[role=menuitem]:visible, .section-heading a.active[role=menuitem]:visible" : (e = this.$el, n = "a[role=menuitem]:visible, .section-heading a.active[role=menuitem]:visible"), t = e.find(n).toArray(), this.focusableElements.push({
					first: t[0],
					all: t,
					last: i.last(t)
				}), t[0].focus())
			},
			handleFocusKey: function(e) {
				var t = i.last(this.focusableElements),
					n = this.getKeyDirection(e),
					s = document.activeElement;
				if (s === t.last && "forward" === n) t.first.focus();
				else if (s === t.first && "backward" === n) t.last.focus();
				else if ("forward" === n) t.all[i.indexOf(t.all, s) + 1].focus();
				else {
					if ("backward" !== n) return;
					t.all[i.indexOf(t.all, s) - 1].focus()
				}
				e.preventDefault()
			},
			handleCollapseKey: function() {
				var e;
				this.focusableElements.pop(), e = i.last(this.focusableElements), this.focusableElements.length > 1 ? (this.resetNav(this.navLevels.TERTIARY), e.active.focus()) : this.focusableElements.length > 0 ? (this.modalClose(), e.active.focus()) : this.close()
			},
			handleExpandKey: function(e) {
				var n = t(document.activeElement),
					s = i.last(this.focusableElements);
				s.active = n, n.hasClass("expandable") && (e.preventDefault(), n.closest(".secondary").length > 0 ? this.activateSecondaryItem(e) : this.activatePrimaryItem(e))
			},
			detectFalsePositive: i.throttle(function(e) {
				t(e.target).is('a[role="menuitem"], li[role="presentation"') && this.disableA11yNav()
			}, 1e3),
			getKeyDirection: function(e) {
				var t = "",
					i = this.pageManager.KEYS,
					n = e && e.keyCode ? e.keyCode : null;
				switch (n) {
					case i.UP:
					case i.LEFT:
						t = "backward";
						break;
					case i.DOWN:
					case i.RIGHT:
					case i.TAB:
						t = "forward"
				}
				return t
			},
			enableA11Nav: function() {
				this.settings.a11yEnabled = !0
			},
			disableA11yNav: function() {
				this.settings.a11yEnabled = !1, this.toggleFocusEvents(!1), this.$document.off("mousemove", this.detectFalsePositive)
			}
		});
		return c
	}), define("shared/navigation/views/navigation-edge-adjust", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view"], function(e, t, i) {
		"use strict";
		var n = i.registerView("navigation").extend({
			el: "#navigation-edge",
			events: {
				mouseenter: "handleMouseOver",
				mouseleave: "handleMouseOut",
				click: "handleClick"
			},
			nytEvents: {
				"nyt:page-breakpoint": "handleBreakPoint"
			},
			initialize: function() {
				this.pageManager.isDomReady() ? this.render() : this.subscribe("nyt:page-ready", this.render)
			},
			render: function() {
				this.$shell = e("#shell"), this.pageManager.getCurrentBreakpoint() >= 10070 && (this.setNavWidth(), this.subscribe("nyt:page-resize", this.setNavWidth))
			},
			setNavWidth: function() {
				var e = this.$shell.offset();
				this.$shell.offset() && (this.broadcast("nyt:navigation-edge-size-change", e.left), this.$el.css("width", e.left))
			},
			handleBreakPoint: function(e) {
				e >= 10070 ? this.subscribe("nyt:page-resize", this.setNavWidth) : (this.stopSubscribing("nyt:page-resize", this.setNavWidth), this.$el.css("width", ""))
			},
			handleMouseOver: function(e) {
				(0 !== e.clientX || 0 !== e.clientY) && this.broadcast("nyt:navigation-edge-mouse-enter", e)
			},
			handleMouseOut: function(e) {
				this.broadcast("nyt:navigation-edge-mouse-leave", e)
			},
			handleClick: function() {
				this.broadcast("nyt:navigation-edge-click")
			}
		});
		return n
	}), define("shared/navigation/views/mobile-navigation", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/navigation/views/navigation", "shared/navigation/views/navigation-edge-adjust", "shared/navigation/templates", "foundation/models/user-data"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = i.registerView("mobile-navigation").extend({
			el: "#mobile-navigation",
			hiddenEl: "#main, #ribbon, #site-index",
			nytEvents: {
				"nyt:masthead-section-click": "handleSectionClick",
				"nyt:page-breakpoint": "handleBreakPoint"
			},
			handleUserReady: function() {
				this.$masthead = e("#masthead").find(".sections-button"), this.render()
			},
			render: function() {
				this.$el.append(a.mobileNav({
					userData: o,
					isGlobalEdition: this.pageManager.isInternationalEdition()
				}))
			},
			open: function() {
				this.$el.removeClass("hidden"), this.$masthead.addClass("mobile-navigation-active"), this.$el.focus(), e(this.hiddenEl).addClass("hidden"), window.scrollTo(0, 0)
			},
			close: function() {
				this.$el.addClass("hidden"), this.$masthead.removeClass("mobile-navigation-active"), e(this.hiddenEl).removeClass("hidden")
			},
			handleSectionClick: function() {
				this[this.$el.is(":visible") ? "close" : "open"]()
			},
			handleBreakPoint: function(e) {
				e >= 120 && (new n, new s, this.close(), this.remove())
			}
		});
		return r
	}), define("shared/navigation/views/site-index-responsive", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view"], function(e, t, i) {
		"use strict";
		var n = i.registerView("navigation").extend({
			events: {
				"click a": "handleSiteIndexClick",
				"click .menu-heading": "handleClick",
				"click .menu-label": "handleClick",
				"keyup .menu-heading": "handleKeyboard"
			},
			nytEvents: {
				"nyt:page-breakpoint": "handleBreakPoint"
			},
			initialize: function() {
				var e = this.$el.find(".column");
				this.$columnHeader = e.find("h3"), this.$columnContents = e.find("ul")
			},
			handleDomReady: function() {
				this.render()
			},
			render: function() {
				this.subscribe("nyt:page-resize", this.setNavWidth), this.handleBreakPoint()
			},
			handleBreakPoint: function() {
				var t, i, n, s;
				this.pageManager.getCurrentBreakpoint() >= 1e3 ? (this.isSmallSiteIndex = !1, t = "removeClass", i = "removeAttr", this.$columnContents[t]("expanded")[t]("collapsed")[i]("aria-expanded", "true")[i]("aria-expanded", "false")) : (this.isSmallSiteIndex = !0, t = "addClass", i = "attr", this.$columnContents[t]("collapsed")[i]("aria-expanded", "true")[i]("aria-expanded", "false")), this.$columnHeader[t]("toggle")[i]("role", "button")[i]("tabindex", "0")[i]("aria-pressed", "true")[i]("aria-pressed", "false"), e.each(this.$columnHeader, function(t, a) {
					s = e(a), n = s.text(), n = n.substr(0, n.indexOf(" ")).toLowerCase(), s[i]("id", n + "-menu-heading")[i]("aria-controls", n + "-menu"), s.siblings("ul")[i]("id", n + "-menu")[i]("aria-labelled-by", n + "-menu-heading")
				})
			},
			handleKeyboard: function(e) {
				(13 === e.keyCode || 32 === e.keyCode) && this.handleClick(e)
			},
			handleClick: function(t) {
				var i, n, s;
				this.isSmallSiteIndex && (n = e(t.target), i = n.nextAll("ul"), s = i.find("a"), i.toggleClass("collapsed"), i.toggleClass("expanded"), "false" === n.attr("aria-pressed") ? (n.attr("aria-pressed", "true"), i.attr("aria-expanded", "true"), s.removeAttr("tabindex", "-1")) : (n.attr("aria-pressed", "false"), i.attr("aria-expanded", "false"), s.attr("tabindex", "-1")))
			},
			handleSiteIndexClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						module: "SiteIndex",
						region: "Footer"
					});
				i.attr("href", n)
			}
		});
		return n
	}), define("shared/navigation/instances/navigation", ["jquery/nyt", "foundation/views/page-manager", "shared/navigation/views/navigation", "shared/navigation/views/mobile-navigation", "shared/navigation/views/navigation-edge-adjust", "shared/navigation/views/site-index-responsive"], function(e, t, i, n, s, a) {
		"use strict";
		t.getCurrentBreakpoint() >= 120 ? (new i, new s) : new n, new a({
			el: e("#site-index")
		})
	}), define("shared/sharetools/views/share-tools-container", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/sharetools/models/share-data", "shared/sharetools/views/containers-mixin", "shared/sharetools/views/share-tools-modal-container", "shared/sharetools/instances/cross-platform-save"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = i.extend(t.extend({}, a, {
			initializedAttribute: "data-share-tools-initialized",
			initialize: function(t) {
				this.$instanceContainer = t.el, this.trackingRegion = t.trackingRegion || "", this.$instanceContainer && !this.$instanceContainer.attr(this.initializedAttribute) && (this.getToolIdsAndCustomLabels(this.$instanceContainer.data("shares")), this.shareData = new s(this.$instanceContainer), this.el = document.createElement("ul"), this.$el = e(this.el), this.$el.addClass("sharetools-menu"), t.modalSettings && (this.subscribe("nyt:xps-article-status", function(e) {
					t.modalSettings.articleSaved = e
				}), n.isLoggedIn() && r.getArticlesStatus(this.pageManager.getCanonical()), this.subscribe("nyt:open-share-modal", function(e) {
					e.instanceContainer && this.$instanceContainer.get(0) === e.instanceContainer.get(0) && new o({
						instanceContainer: e.instanceContainer,
						modalSettings: t.modalSettings,
						trackingRegion: this.trackingRegion,
						shareData: this.shareData
					})
				})), this.render())
			},
			render: function() {
				var i, n = void 0 !== t.find(this.toolIds, function(e) {
						return "AD" === e
					}),
					s = this.$instanceContainer.find(".sharetools-inline-article-ad");
				this.renderToolViews(), this.$instanceContainer.attr(this.initializedAttribute, "1"), n && s.length ? this.$el.insertBefore(s) : this.$instanceContainer.append(this.el), i = this.$el.closest(".sharetools").attr("id"), "sharetools-masthead" === i && (this.isTemplateMinimal() || this.hasCoverMedia()) && e("#sharetools-masthead .show-all-sharetool .sharetool-text").text("Share")
			},
			isTemplateMinimal: function() {
				return this.$html.hasClass("template-minimal") ? !0 : void 0
			},
			hasCoverMedia: function() {
				return this.$html.hasClass("has-cover-media") ? !0 : void 0
			}
		}));
		return l
	}), define("shared/sharetools/instances/sidebar", ["jquery/nyt", "shared/sharetools/views/share-tools-container"], function(e, t) {
		"use strict";
		var i;
		new t({
			el: e("#sharetools-story"),
			trackingRegion: "Body",
			modalSettings: {
				tailDirection: "left",
				tailLeftOffset: -8,
				tailTopOffset: 2,
				positionTailSide: !0,
				autoPosition: !0,
				toolTypeSponsor: "Article",
				toggleSpeed: 1,
				openCallback: function() {
					var e = this,
						t = this.pageManager.getViewport().top;
					i = function() {
						Math.abs(t - this.pageManager.getViewport().top) > 300 && e.close()
					}, this.listenTo(this.pageManager, "nyt:page-scroll", i), this.$target.addClass("active")
				},
				closeCallback: function() {
					this.stopListening(this.pageManager, "nyt:page-scroll", i), this.$target.removeClass("active"), this.removeFromPage()
				}
			}
		})
	}), define("shared/sharetools/instances/masthead", ["jquery/nyt", "shared/sharetools/views/share-tools-container"], function(e, t) {
		"use strict";
		new t({
			el: e("#sharetools-masthead"),
			trackingRegion: "Masthead",
			modalSettings: {
				tailDirection: "up-right",
				tailLeftOffset: 0,
				tailTopOffset: -10,
				fixedOverride: !0,
				positionTailSide: !1,
				toggleSpeed: 1,
				toolTypeSponsor: "Article",
				openCallback: function() {
					this.listenToOnce(this.pageManager, "nyt:masthead-storytheme", function() {
						this.close()
					})
				}
			}
		})
	}), define("shared/sharetools/instances/upshot", ["jquery/nyt", "shared/sharetools/views/share-tools-container"], function(e, t) {
		"use strict";
		var i;
		new t({
			el: e("#upshot-sharetools"),
			trackingRegion: "EndOfArticle",
			modalSettings: {
				tailDirection: "left",
				tailLeftOffset: -8,
				tailTopOffset: 2,
				positionTailSide: !0,
				autoPosition: !0,
				toggleSpeed: 1,
				toolTypeSponsor: "Article",
				openCallback: function() {
					var e = this,
						t = this.pageManager.getViewport().top;
					i = function() {
						Math.abs(t - this.pageManager.getViewport().top) > 300 && e.close()
					}, this.listenTo(this.pageManager, "nyt:page-scroll", i), this.$target.addClass("active")
				},
				closeCallback: function() {
					this.stopListening(this.pageManager, "nyt:page-scroll", i), this.$target.removeClass("active"), this.removeFromPage()
				}
			}
		})
	}), define("shared/sharetools/instances/story-footer", ["jquery/nyt", "shared/sharetools/views/share-tools-container"], function(e, t) {
		"use strict";
		var i;
		new t({
			el: e("#story-footer-sharetools"),
			trackingRegion: "EndOfArticle",
			modalSettings: {
				tailDirection: "left",
				tailLeftOffset: -8,
				tailTopOffset: 2,
				positionTailSide: !0,
				autoPosition: !0,
				toggleSpeed: 1,
				toolTypeSponsor: "Article",
				openCallback: function() {
					var e = this,
						t = this.pageManager.getViewport().top;
					i = function() {
						Math.abs(t - this.pageManager.getViewport().top) > 300 && e.close()
					}, this.listenTo(this.pageManager, "nyt:page-scroll", i), this.$target.addClass("active")
				},
				closeCallback: function() {
					this.stopListening(this.pageManager, "nyt:page-scroll", i), this.$target.removeClass("active"), this.removeFromPage()
				}
			}
		})
	}), define("shared/searchform/views/search-form", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/searchform/helpers/search-form-mixin"], function(e, t, i, n) {
		"use strict";
		var s = i.extend(t.extend({}, n, {
			events: {
				"keyup .search-input": "handleKeyUp",
				"keydown .search-input": "handleKeyDown",
				"click .submit-button": "submitSearch",
				"click .clear-button": "handleClearButton"
			},
			afterInitialize: function() {
				this.$shell.on("click", this.handlePageClicks)
			}
		}));
		return s
	}), define("shared/searchform/instances/search-form", ["jquery/nyt", "foundation/views/page-manager", "shared/searchform/views/search-form"], function(e, t, i) {
		"use strict";
		t.getMeta("errorpage") && new i({
			el: e(".error-page .search-form-control")
		})
	}), define("article/story/models/realestate-search-form/search-suggestion", ["foundation/models/base-model"], function(e) {
		"use strict";
		var t = e.extend({
			defaults: {
				query: "",
				results: []
			}
		});
		return t
	}), define("article/story/collections/realestate-search-form/realestate-search-suggestions", ["jquery/nyt", "backbone/nyt", "underscore/nyt", "foundation/collections/base-collection", "article/story/models/realestate-search-form/search-suggestion", "foundation/hosts"], function(e, t, i, n, s, a) {
		"use strict";
		var o = n.extend({
			model: s,
			basicSearchUrl: a.realestateBasicSearch,
			smartSearchUrl: a.realestateSmartSearch,
			resultsUrl: a.realestateResults,
			defaultSettings: {
				numOfSuggestions: 4
			},
			query: "",
			apiType: "basic",
			searchType: "sales",
			previousQuery: "",
			previousAPICall: null,
			initialize: function(e) {
				this.settings = i.extend({}, this.defaultSettings, e)
			},
			sync: function(e, i, n) {
				return n.url = this.basicSearchUrl, n.dataType = "jsonp", n.beforeSend = this.beforeSendSync(), t.sync(e, i, n)
			},
			parse: function(e) {
				var t = this.parseResponse(e),
					n = e.suggestresponse ? e.suggestresponse.term : e.query.keyword;
				return i.isEmpty(t) && this.previousQuery !== n ? (this.previousQuery = n, this.newQuery(n, "use-smart-search"), null) : {
					query: n,
					results: t,
					apiType: this.apiType
				}
			},
			parseResponse: function(e) {
				var t, n, s;
				return "basic" === this.apiType ? (t = "true" === e.suggestresponse.success ? e.suggestresponse.matches : [], i.isArray(t) || (t = [].concat(t))) : (s = e.matchgroup, i.isEmpty(s) ? t = [] : (n = s[0].match[0].seopath.replace("/" + this.searchType + "/", ""), t = [{
					id: n,
					display: ""
				}])), t.slice(0, this.settings.numOfSuggestions)
			},
			newQuery: function(e, t) {
				this.query = e, this.apiType = t || "basic", this.fetch()
			},
			beforeSendSync: function() {
				var e, t = this;
				return function(i, n) {
					e = n.jsonpCallback, t.previousAPICall && t.previousAPICall.abort(), t.previousAPICall = i, "basic" === t.apiType ? (n.url += "&q=" + encodeURIComponent(t.query), n.url += "&n=(function run(){var temp", n.url += "&d=return " + e + "(temp);})") : (n.url = t.smartSearchUrl, n.url += "?cha=" + t.searchType, n.url += "&ret=json&key=" + encodeURIComponent(t.query), n.url += "&callback=" + e)
				}
			}
		});
		return o
	}), define("article/story/views/realestate-search-form/realestate-search-form", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/hosts", "foundation/models/user-data", "article/story/templates", "shared/searchform/helpers/search-form-mixin", "article/story/collections/realestate-search-form/realestate-search-suggestions"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = i.extend(t.extend({}, o, {
			collection: new r,
			postAdLink: n.realestatePostAdLink,
			events: {
				"click .tabs-container": "handleSearchTabs",
				"keyup .search-input": "handleKeyUp",
				"keydown .search-input": "handleKeyDown",
				"click .search-homes": "submitSearch",
				"click .auto-suggest a, .auto-suggest li": "handleClickingSearchResults",
				"click .plus-button, .minus-button": "handlePlusMinusButtons",
				"click .submit-listing-button": "handlePostAnAd",
				"change .price": "handleChangePrice"
			},
			initialize: function() {
				t.bindAll(this, "handleClickIfVisible"), this.$shell.on("click", ":not(.auto-suggest)", this.handleClickIfVisible)
			},
			render: function() {
				var e, i, n = this.collection.toJSON()[0];
				t.isEmpty(n) || (i = a.realestateSearchSuggestion, e = i({
					results: n.results
				}), "basic" === n.apiType ? this.$list.html(e).show() : (this.$list.html(e), this.$list.find("a").click()))
			},
			afterInitialize: function() {
				this.$realEstateForSaleFilters = this.$el.find(".for-sale"), this.$realEstateForRentFilters = this.$el.find(".for-rent"), this.$forSalePricesCopy = this.$el.find("#for-sale-min-price").clone(), this.$forRentPricesCopy = this.$el.find("#for-rent-min-price").clone(), this.resultsUrl = n.realestateResults, this.$el.find("select").prop("selectedIndex", 0)
			},
			handleClickingSearchResults: function(t) {
				var i;
				t.preventDefault(), i = e(t.target).closest("a"), i.text() && this.$input.val(i.text()), this.$input.data("href", i.data("href")), this.$list.empty().hide()
			},
			submitSearch: function(i) {
				var n, s, a = this.getFilterType();
				i && i.preventDefault(), t.isEmpty(this.$input.data("href")) && (s = this.$list.find("a"), s.length ? s.first().click() : this.$input.data("href", "new-york-ny-usa")), n = {
					channel: this.getChannelType(),
					location: this.$input.data("href"),
					priceMin: a.find("[name=priceMin]").val(),
					priceMax: a.find("[name=priceMax]").val(),
					bedrooms: this.formatBedBath(this.$el.find("#bedrooms").val()),
					bathrooms: this.formatBedBath(this.$el.find("#bathrooms").val())
				}, this.resultsUrl = window.location.protocol + "//" + window.location.hostname + "/real-estate/" + ("sales" === n.channel ? "homes-for-sale" : "homes-for-rent") + "/", window.location.href = this.resultsUrl + "?" + e.param(n)
			},
			handleEnterKey: function(e) {
				var t;
				this.$list.is(":visible") ? (t = this.$list.find(".active"), t.length ? t.click() : this.$list.find("a").first().click()) : this.submitSearch(e)
			},
			handlePlusMinusButtons: function(t) {
				var i = e(t.target);
				t.preventDefault(), this.changeBedBath(i)
			},
			handlePostAnAd: function() {
				window.location.href = this.postAdLink
			},
			handleSearchTabs: function(t) {
				var i, n = e(t.target);
				return n.is(".active") || n.parent().is(".active") ? !1 : (i = this.$el.find(".tabs-container .active"), this.$el.find(".tabs-container li").addClass("active"), i.removeClass("active"), this.$el.find(".max-min-price").toggleClass("hidden"), void(this.collection.searchType = this.getChannelType()))
			},
			changeBedBath: function(e) {
				var t = e.hasClass("bedrooms") ? "bedrooms" : "bathrooms",
					i = this.$el.find("#" + t + " option:selected").index(),
					n = e.hasClass("plus-button") ? i + 1 : Math.max(i - 1, 0);
				this.$el.find("#" + t + " option").eq(n).prop("selected", !0)
			},
			formatBedBath: function(e) {
				return this.isForSaleSection() ? e : e.replace("s", "")
			},
			isForSaleSection: function() {
				return e(".for-sale-tab").hasClass("active")
			},
			getChannelType: function() {
				return this.isForSaleSection() ? "sales" : "rentals"
			},
			getFilterType: function() {
				return this.isForSaleSection() ? this.$realEstateForSaleFilters : this.$realEstateForRentFilters
			},
			disableSubmitButton: function() {
				return e.noop
			},
			handleClickIfVisible: function() {
				this.$el.find(".auto-suggest:visible").length && this.handlePageClicks()
			},
			handleChangePrice: function(t) {
				var i, n, s, a, o, r;
				s = e(t.target), a = this.isForSaleSection() ? this.$forSalePricesCopy : this.$forRentPricesCopy, n = a.val(s.val()).find("option:selected").index(), s.context.id.match("min") ? (i = a.find("option").clone().slice(n + 1), o = s.closest(".max-min-price").find(".price-max"), r = o.val(), o.html(i), "Max Price" !== o.find("option").last().val() && o.prepend('<option value="999000000">Max Price</option>'), o.val(r)) : (i = a.find("option").clone().slice(0, n), o = s.closest(".max-min-price").find(".price-min").val(), s.closest(".max-min-price").find(".price-min").html(i).val(o))
			}
		}));
		return l
	}), define("article/story/instances/realestate-search-form", ["jquery/nyt", "article/story/views/realestate-search-form/realestate-search-form"], function(e, t) {
		"use strict";
		e("#real-estate-search-ad").length && new t({
			el: "#real-estate-search-ad"
		})
	}), define("shared/slideshow/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.embeddedSlideshow = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", isLede === !1 && (__p += '\n<h4 class="headline">' + (null == (__t = headline) ? "" : __t) + "</h4>\n"), __p += '<div class="container">\n<div class="content-container">\n<div class="image"></div>\n<div class="caption-container">\n<figcaption class="caption" itemprop="description"></figcaption>\n</div>\n</div>\n</div><nav class="arrow-navigation">\n<span class="counter"></span>\n<button class="arrow-navigation-previous">\n<span class="visually-hidden">Go to previous slide</span>\n<div class="arrow arrow-left">\n<div class="arrow-conceal"></div>\n</div>\n</button>\n<button class="arrow-navigation-next">\n<span class="visually-hidden">Go to next slide</span>\n<div class="arrow arrow-right">\n<div class="arrow-conceal"></div>\n</div>\n</button>\n</nav>';
			return __p
		}, templates.embeddedSlideshowHP = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="content-container">\n<div class="image"></div>\n<nav class="arrow-navigation">\n<button class="arrow-navigation-previous">\n<span class="visually-hidden">Go to previous slide</span>\n<div class="arrow arrow-left">\n<div class="arrow-conceal"></div>\n</div>\n</button>\n<button class="arrow-navigation-next">\n<span class="visually-hidden">Go to next slide</span>\n<div class="arrow arrow-right">\n<div class="arrow-conceal"></div>\n</div>\n</button>\n<span class="counter"></span>\n</nav>\n<figcaption class="caption" itemprop="description"></figcaption>\n</div>';
			return __p
		}, templates.image = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", __p += "homepage" === applicationName ? '\n<a href="' + (null == (__t = url) ? "" : __t) + '" style="display:none;"><img src="' + (null == (__t = src) ? "" : __t) + '" data-caption="" /></a>\n' : '\n<img src="' + (null == (__t = src) ? "" : __t) + '" data-caption="" style="display:none;" />\n<nav class="image-navigation previous">\n<span class="visually-hidden">Go to previous slide</span>\n</nav>\n<nav class="image-navigation next">\n<span class="visually-hidden">Go to next slide</span>\n</nav>\n', __p += "";
			return __p
		}, templates.imageInfo = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<span class="caption-control" style="display:none;">\n<span class="caption-text">\n' + (null == (__t = caption) ? "" : __t) + '\n</span>\n<span class="credit" itemprop="copyrightHolder">\n<span class="visually-hidden">Credit</span>\n' + (null == (__t = credit) ? "" : __t) + "\n</span>\n</span>";
			return __p
		}, templates
	}), define("shared/slideshow/views/embedded-slideshow", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/views/base-view", "shared/slideshow/templates"], function(e, t, i, n, s, a) {
		"use strict";
		var o = s.extend({
			speed: 1e3,
			defaultSlideshowCaptionHeight: 50,
			ledeSlideshowCaptionHeight: 67,
			ledeSquareSlideshowSideCaptionHeight: 245,
			firstSlide: !0,
			hammerSettings: {
				tap_max_touchtime: 400,
				swipe_velocity: .1,
				drag_min_distance: 3
			},
			imageShapes: {
				PANORAMIC: "ratio-panoramic",
				LANDSCAPE: "ratio-landscape",
				SQUARE: "ratio-square",
				PORTRAIT: "ratio-portrait"
			},
			slideshowTypes: {
				MIXED: "mixed",
				ALLPORTRAIT: "allPortrait",
				ALLSQUARE: "allSquare"
			},
			$prevArrow: e(),
			$nextArrow: e(),
			$captionText: e(),
			events: {
				"click .arrow-navigation-previous": "prevAsset",
				"click .arrow-navigation-next": "nextAsset",
				"click .image-navigation.previous": "prevAsset",
				"click .image-navigation.next": "nextAsset",
				"mouseenter .image-navigation.previous": "lightPrevArrow",
				"mouseleave .image-navigation.previous": "unLightPrevArrow",
				"mouseenter .image-navigation.next": "lightNextArrow",
				"mouseleave .image-navigation.next": "unLightNextArrow",
				drag: "handleDrag",
				swipeleft: "nextAsset",
				swiperight: "prevAsset"
			},
			initialize: function(e) {
				this.assetIndex = 0, t.bindAll(this, "prevAsset", "nextAsset", "lightPrevArrow", "unLightPrevArrow", "lightNextArrow", "unLightNextArrow"), e.showOnInit || this.$el.hide(), this.$body.off("click", ".slideshow"), this.isMobile = this.pageManager.isMobile(), this.isLede = this.isSlideshowLede(), this.trackingBaseData = {
					module: "Slideshow",
					action: "click",
					contentCollection: this.pageManager.getMeta("article:section"),
					version: "Embedded",
					region: "Body"
				}, this.captionList = e.captionList, this.cropList = e.cropList, this.template = e.template || "embeddedSlideshow", this.truncateCaptions = "boolean" == typeof e.truncateCaption ? e.truncateCaption : !0
			},
			handleDomReady: function() {
				var e = a[this.template];
				this.getAssetsFromJSON(this.$el, this.captionList, this.cropList), this.setSlideshowClass(), this.$el.append(e({
					headline: this.headline,
					collection: this.collection,
					isMobile: this.isMobile,
					isLede: this.isLede
				})), this.$prevArrow = this.$el.find(".arrow-navigation-previous"), this.$nextArrow = this.$el.find(".arrow-navigation-next"), this.render(), this.setCounter(), this.$el.fadeIn(this.speed), this.trackingBaseData.contentID = this.assetID, this.debouncedHandleWindowResize = t.debounce(this.handleWindowResize, 250), this.isSlideshowLede() && this.subscribe(this.pageManager, "nyt:page-resize", this.debouncedHandleWindowResize)
			},
			findBasedOnList: function(e, t) {
				var i;
				for (i = 0; i <= t.length; i += 1)
					if (e.hasOwnProperty(t[i])) return e[t[i]];
				return {}
			},
			getImageShape: function(e, t) {
				var i = 1.7,
					n = 1.1,
					s = .9,
					a = e / t;
				return a > i ? this.imageShapes.PANORAMIC : a > n ? this.imageShapes.LANDSCAPE : a > s ? this.imageShapes.SQUARE : this.imageShapes.PORTRAIT
			},
			getAssetsFromJSON: function(i, s, a) {
				var o, r, l, d = this,
					c = i.find("script").get(0).innerHTML,
					h = e.parseJSON(c),
					u = !0,
					m = !0,
					p = 0;
				this.slideshowType = this.slideshowTypes.MIXED, this.headline = h.headline || "", this.assetID = h.id;
				try {
					h = t.map(h.imageslideshow.slides, function(e) {
						return o = d.findBasedOnList(e.image_crops, a), r = d.findBasedOnList(e.caption, s), l = d.getImageShape(o.width, o.height), p = p > o.height ? p : o.height, l !== d.imageShapes.PORTRAIT && (u = !1), l !== d.imageShapes.SQUARE && (m = !1), o ? {
							src: o.url,
							caption: r,
							credit: e.credit,
							imageShape: l
						} : null
					})
				} catch (g) {
					h = []
				}
				h = t.filter(h, function(e) {
					return !!e
				}), u ? this.slideshowType = this.slideshowTypes.ALLPORTRAIT : m && (this.slideshowType = this.slideshowTypes.ALLSQUARE), this.tallestImageHeight = p, this.collection = new n, this.collection.reset(h)
			},
			render: function() {
				var i, n, s, o, r = new Image,
					l = this.$el.find("figure").get("context").getAttribute("data-url"),
					d = this.pageManager.getApplicationName(),
					c = this.$el.find(".image"),
					h = this.$el.find(".caption"),
					u = this.$el.find(".loader-container"),
					m = this;
				return i = this.collection.at(this.assetIndex), n = e(a.image({
					src: i.get("src"),
					url: l,
					applicationName: d
				})), s = e(a.imageInfo({
					caption: i.get("caption"),
					credit: i.get("credit")
				})), c.html(n), this.isMobile || "homepage" !== d || c.css("height", this.tallestImageHeight), u.css("margin-bottom", 0), h.html(s), this.$captionText = this.$el.find(".caption-text"), s.fadeIn(this.speed), o = i.get("imageShape"), this.$el.find(".container").removeClass(t.values(this.imageShapes).join(" ")).addClass(o), r.onload = function() {
					var e;
					n.fadeIn(m.speed, function() {
						m.toggleLoader(!1)
					}), m.truncateCaptions && (e = m.getTruncationHeight(o), m.truncateText(m.$captionText, e, !0))
				}, r.src = i.get("src"), this
			},
			nextAsset: function(e) {
				var t;
				e.stopPropagation(), this.moveIndex(1), this.render(), this.setCounter(), t = this.assetIndex + 1, this.trackingTrigger("embedded-slideshow-next-image", {
					eventName: "NextAsset-" + t + (t === this.collection.length ? "-Finish" : ""),
					mdata: {
						currentSlide: t,
						totalSlides: this.collection.length
					}
				})
			},
			prevAsset: function(e) {
				var t;
				e.stopPropagation(), this.moveIndex(-1), this.render(), this.setCounter(), t = this.assetIndex + 1, this.trackingTrigger("embedded-slideshow-prev-image", {
					eventName: "PrevAsset-" + t + (t === this.collection.length ? "-Finish" : ""),
					mdata: {
						currentSlide: t,
						totalSlides: this.collection.length
					}
				})
			},
			setCounter: function() {
				var e;
				this.$counter = this.$el.find(".counter"), e = this.assetIndex, this.$counter.html(e + 1 + " of " + this.collection.length)
			},
			moveIndex: function(e) {
				var t = this.assetIndex,
					i = this.collection.length;
				t += e, t === i ? t = 0 : -1 === t && (t = i - 1), this.assetIndex = t
			},
			handleDrag: function(e) {
				var t = e.gesture;
				("right" === t.direction || "left" === t.direction) && t.preventDefault()
			},
			getTruncationHeight: function(e) {
				return this.isWideLedeSquareNoAdSlideshow() ? this.ledeSquareSlideshowSideCaptionHeight : this.isLedeMixedNoAdSlideshow() ? this.defaultSlideshowCaptionHeight : this.isSlideshowLede() ? this.ledeSlideshowCaptionHeight : this.slideshowType === this.slideshowTypes.ALLPORTRAIT ? 300 : this.slideshowType === this.slideshowTypes.ALLSQUARE ? 184 : e === this.imageShapes.PORTRAIT ? 290 : e === this.imageShapes.SQUARE ? 224 : this.defaultSlideshowCaptionHeight
			},
			isSlideshowLede: function() {
				return this.$el.hasClass("lede")
			},
			setSlideshowClass: function() {
				var e, t = this.slideshowType;
				(t === this.slideshowTypes.ALLPORTRAIT || t === this.slideshowTypes.ALLSQUARE) && (e = t.replace(/^all/, "format-all-").toLowerCase(), this.$el.addClass(e))
			},
			hasLedeAd: function() {
				var e = this.pageManager.$html;
				return e.hasClass("has-xxl") || e.hasClass("has-big-ad") || e.hasClass("has-half-page")
			},
			toggleLoader: function(e) {
				var t = this.$el.find(".loader-container");
				e ? t.show() : t.hide()
			},
			lightPrevArrow: function() {
				this.unLightNextArrow(), this.$prevArrow.addClass("hover")
			},
			unLightPrevArrow: function() {
				this.$prevArrow.removeClass("hover")
			},
			lightNextArrow: function() {
				this.unLightPrevArrow(), this.$nextArrow.addClass("hover")
			},
			unLightNextArrow: function() {
				this.$nextArrow.removeClass("hover")
			},
			isWideLedeSquareNoAdSlideshow: function() {
				var e = this.pageManager.getCurrentBreakpoint();
				return !this.hasLedeAd() && this.isSlideshowLede() && this.slideshowType === this.slideshowTypes.ALLSQUARE && e >= 1030 ? !0 : !1
			},
			isLedeMixedNoAdSlideshow: function() {
				return !this.hasLedeAd() && this.isSlideshowLede() && this.slideshowType === this.slideshowTypes.MIXED ? !0 : !1
			},
			handleWindowResize: function() {
				var e;
				this.truncateCaptions && (e = this.ledeSlideshowCaptionHeight, this.isWideLedeSquareNoAdSlideshow() && (e = this.ledeSquareSlideshowSideCaptionHeight), this.truncateText(this.$captionText, e, !0))
			}
		});
		return o
	}), define("article/story/instances/embedded-slideshow", ["jquery/nyt", "shared/slideshow/views/embedded-slideshow"], function(e, t) {
		"use strict";
		e("#story").find(".slideshow").each(function(i, n) {
			var s;
			"inline" === e(this).data("media-action") && (s = {
				el: n,
				captionList: ["full", "short"],
				cropList: ["jumbo", "tmagArticle", "blog480"],
				showOnInit: !1,
				template: "embeddedSlideshow",
				truncateCaption: !0
			}, new t(s))
		})
	}), define("article/common/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.mostEmailed = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", collection.length && (__p += '\n<div class="nocontent robots-nocontent">\n<header>\n<h2 class="module-heading">Trending</h2>\n</header>\n<ol>\n', _.each(collection.slice(0, 10), function(e) {
				__p += '\n<li>\n<a class="story-link" href="' + (null == (__t = e.get("link")) ? "" : __t) + '">\n<article class="story theme-summary">', _.isEmpty(e.getCrop("thumbStandard")) || (__p += '\n<div class="thumb">\n<img src="' + (null == (__t = e.getCrop("thumbStandard").url) ? "" : __t) + '" />\n</div>\n'), __p += '<h2 class="story-heading">\n<span class="story-text truncate-text">\n', e.get("kicker") && (__p += "\n" + (null == (__t = e.get("kicker")) ? "" : __t) + ":\n"), __p += "\n" + (null == (__t = e.get("headline")) ? "" : __t) + "\n</span>\n</h2></article>\n</a>\n</li>\n"
			}), __p += '\n</ol>\n<footer>\n<p class="user-action"><a href="/trending">View More Trending Stories &raquo;</a></p>\n<div id="MostEm" class="ad most-em-ad"></div>\n</footer>\n</div>\n'), __p += "";
			return __p
		}, templates.mostEmailed8772 = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", collection.length && (__p += '\n<div class="nocontent robots-nocontent">\n<header>\n<h2 class="module-heading">' + (null == (__t = mostEmailedTitle) ? "" : __t) + "</h2>\n</header>\n<ol>\n", _.each(collection.slice(0, 10), function(e) {
				__p += '\n<li>\n<a class="story-link" href="' + (null == (__t = e.get("link")) ? "" : __t) + '">\n<article class="story theme-summary">', _.isEmpty(e.getCrop("thumbStandard")) || (__p += '\n<div class="thumb">\n<img src="' + (null == (__t = e.getCrop("thumbStandard").url) ? "" : __t) + '" />\n</div>\n'), __p += '<h2 class="story-heading">\n<span class="story-text truncate-text">\n', e.get("kicker") && (__p += "\n" + (null == (__t = e.get("kicker")) ? "" : __t) + ":\n"), __p += "\n" + (null == (__t = e.get("headline")) ? "" : __t) + "\n</span>\n</h2></article>\n</a>\n</li>\n"
			}), __p += "\n</ol>\n<footer>\n", showCompleteListLink && (__p += '\n<p class="user-action"><a href="/most-popular-emailed">View Complete List &raquo;</a></p>\n'), __p += '\n<div id="MostEm" class="ad most-em-ad"></div>\n</footer>\n</div>\n'), __p += "";
			return __p
		}, templates.trending = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", collection.length && (__p += '\n<div class="nocontent robots-nocontent">\n<header>\n<h2 class="module-heading">Trending</h2>\n</header>\n<ol>\n', _.each(collection.slice(0, 10), function(e) {
				__p += '\n<li>\n<a class="story-link" href="' + (null == (__t = e.get("link")) ? "" : __t) + '">\n<article class="story theme-summary">', _.isEmpty(e.getCrop("thumbStandard")) || (__p += '\n<div class="thumb">\n<img src="' + (null == (__t = e.getCrop("thumbStandard").url) ? "" : __t) + '" />\n</div>\n'), __p += '<h2 class="headline">\n<span class="headline-text truncate-text">\n', e.get("kicker") && (__p += "\n" + (null == (__t = e.get("kicker")) ? "" : __t) + ":\n"), __p += "\n" + (null == (__t = e.get("headline")) ? "" : __t) + "\n</span>\n</h2></article>\n</a>\n</li>\n"
			}), __p += '\n</ol>\n<footer>\n<p class="user-action"><a href="/trending">View More Trending Stories &raquo;</a></p>\n<div id="MostEm" class="ad most-em-ad"></div>\n</footer>\n</div>\n'), __p += "";
			return __p
		}, templates.welcomeBack = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="story-group"></div><div id="WelcomeBack" class="ad welcome-back-ad"></div>';
			return __p
		}, templates.welcomeBackFooter = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<button class="button dismiss-button">Back to Article</button>';
			return __p
		}, templates.welcomeBackStories = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", collection.length && (__p += "<ul>", _.each(collection.slice(0, 3), function(e) {
				__p += '<li>\n<a class="story-link" href="' + (null == (__t = e.get("link")) ? "" : __t) + '">\n<article class="story theme-summary">', e.getCrop("thumbStandard") && (__p += '\n<div class="thumb">\n<img src="' + (null == (__t = e.getCrop("thumbStandard").url) ? "" : __t) + '" />\n</div>\n'),
					__p += '<h2 class="story-heading">\n<span class="story-heading-text">', e.get("kicker") && (__p += "\n" + (null == (__t = e.get("kicker")) ? "" : __t) + ":\n"), __p += "\n" + (null == (__t = e.get("headline")) ? "" : __t) + '</span>\n<time class="dateline" datetime="' + (null == (__t = e.getDatetime()) ? "" : __t) + '">' + (null == (__t = e.getFormattedDate()) ? "" : __t) + "</time>\n</h2></article>\n</a>\n</li>"
			}), __p += '</ul><p class="user-action">\n<a href="/recommendations">More Recommended Articles &raquo;</a>\n</p>'), __p += "";
			return __p
		}, templates.welcomeBackTitle = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<i class="icon sprite-icon"></i>\n<span class="heading-text">Recommended Articles</span>';
			return __p
		}, templates
	}), define("article/common/views/marginalia/helpers/template-factory", ["jquery/nyt", "article/common/templates"], function(e, t) {
		"use strict";
		var i = {
			createTemplate: function(e) {
				return e && e.$el ? e.$el.hasClass("most-emailed-marginalia") || e.$el.hasClass("trending-module") ? t.trending : void 0 : null
			}
		};
		return i
	}), define("article/common/views/marginalia/marginalia", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/views/page-manager", "article/common/views/marginalia/helpers/template-factory"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			className: "marginalia",
			template: null,
			typeAttribute: "marginalia-type",
			$placeholder: e('<div class="margainalia-placeholder"/>'),
			$placeholderClone: null,
			initialize: function() {
				var e = this.$el.data(this.typeAttribute);
				e && this.model.setType(e), this.template = s.createTemplate(this), this.$el.data("marginalia-id", this.model.cid), this.subscribe(this.model, "marginalia:assets-changed", this.render), this.subscribe("nyt:page-scroll", this.checkMarginaliaInViewport)
			},
			render: function(e) {
				return this.template && (this.$el.html(this.template({
					collection: e
				})), this.$el.hasClass("hidden") && this.$el.removeClass("hidden"), this.truncateHeadline(), this.broadcast("nyt:ad-library:dfp:request-placement", "MostEm"), this.checkMarginaliaInViewport()), this
			},
			checkMarginaliaInViewport: t.throttle(function() {
				(this.$el.hasClass("most-emailed-marginalia") || this.$el.hasClass("trending-module")) && n.isComponentVisible(this.$el) && (this.stopSubscribing("nyt:page-scroll", this.checkMarginaliaInViewport), this.trackingTriggerImpression("WP-most-emailed-viewed", {
					contentCollection: this.pageManager.getMeta("article:section"),
					module: "FBMostPopular",
					region: "Marginalia",
					version: "Full",
					action: "Impression",
					eventName: "Impression",
					pgtype: "article"
				}))
			}, 300),
			truncateHeadline: function() {
				var t = this;
				this.$el.css("display", "block"), "true" === this.$el.attr("data-truncate-enabled") && this.$el.find(".story-link").each(function(i, n) {
					t.truncateText(e(n).find(".truncate-text"), e(n).height())
				}), this.$el.css("display", "")
			},
			isType: function(e) {
				return this.model.getType() === e
			},
			createPlaceholder: function() {
				this.$placeholderClone = this.$placeholder.clone(), this.$el.before(this.$placeholderClone)
			},
			deletePlaceholder: function() {
				this.$placeholderClone.remove()
			},
			placeAfter: function(e) {
				this.createPlaceholder(), e.after(this.el)
			},
			placeBefore: function(e) {
				this.createPlaceholder(), e.before(this.el)
			},
			placeAtOriginalPos: function() {
				null !== this.$placeholderClone && (this.$placeholderClone.before(this.el), this.deletePlaceholder())
			}
		});
		return a
	}), define("article/common/models/marginalia/marginalia", ["foundation/models/base-model"], function(e) {
		"use strict";
		var t = e.extend({
			type: null,
			getType: function() {
				return this.type
			},
			setType: function(e) {
				this.type = e
			}
		});
		return t
	}), define("shared/data/models/most-popular", ["underscore/nyt", "backbone/nyt", "shared/data/models/article"], function(e, t, i) {
		"use strict";
		var n = i.extend({
			getVideoKicker: function() {
				return this.get("section")
			}
		});
		return n
	}), define("shared/data/collections/most-popular", ["backbone/nyt", "foundation/collections/base-collection", "shared/data/models/most-popular", "foundation/hosts", "underscore/nyt", "shared/data/helpers/collection-mixin", "foundation/views/page-manager"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = t.extend(s.extend({}, a, {
			model: i,
			apis: {
				mostviewed: {
					url: n.s1Host + "/du/mostpopular/viewed/all_1.jsonp?v1",
					callback: "jsonCallbackViewed"
				},
				mostemailed: {
					url: n.s1Host + "/du/mostpopular/emailed/all_1.jsonp?v1",
					callback: "jsonCallbackEmailed"
				},
				mostviewed7days: {
					url: n.DUHost + "/svc/mostpopular/v2/viewed/7.jsonp",
					callback: "jsonCallbackMostEmailed7"
				},
				mosttweeted: {
					url: n.DUHost + "/svc/mostpopular/v2/shared/1/twitter.jsonp",
					callback: "jsonCallbackTweeted"
				},
				mostsharedonfacebook: {
					url: n.DUHost + "/svc/mostpopular/v2/shared/1/facebook.jsonp",
					callback: "jsonCallbackFacebook"
				}
			},
			initialize: function(e, t) {
				var i;
				this.url = this.apis[t.type].url, this.callback = this.apis[t.type].callback, o.flag("styledMostEmailed") && (i = this.pageManager.getUrlParam("testUrlMostEmailed"), i && (this.url = i))
			},
			sync: function(t, i, n) {
				return n.dataType = "jsonp", n.jsonpCallback = this.callback, n.jsonp = "callback", n.cache = !0, e.sync(t, i, n)
			},
			parse: function(e) {
				var t = this,
					i = s.map(e.results, function(e) {
						var i = [];
						return e.id && (e.data_id = e.id, delete e.id), e.asset_id && delete e.asset_id, "" === e.media ? delete e.media : i = e.media[0]["media-metadata"] || [], e.promotional_media = {
							image: {
								image_crops: {
									thumbStandard: t.getCrop(i, "Standard Thumbnail"),
									mediumThreeByTwo210: t.getCrop(i, "mediumThreeByTwo210"),
									mediumThreeByTwo440: t.getCrop(i, "mediumThreeByTwo440")
								}
							}
						}, e.description = e["abstract"], e.link = e.url, e.kicker = e.column, e.headline = e.title, e.authors = [e.byline.replace("By ", "").replace(/\w\S*/g, function(e) {
							return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
						})], e.pubDate = e.published_date, e
					});
				return i
			},
			getCrop: function(e, t) {
				var i, n;
				for (i = 0, n = e.length; n > i; i += 1)
					if (e[i].format === t) return e[i]
			},
			getIdentifier: function() {
				return "src=me"
			}
		}));
		return r
	}), define("shared/data/instances/facebook", ["shared/data/collections/most-popular"], function(e) {
		"use strict";
		return new e([], {
			type: "mostsharedonfacebook"
		})
	}), define("article/common/models/marginalia/most-emailed", ["underscore/nyt", "article/common/models/marginalia/marginalia", "shared/data/instances/facebook", "shared/data/instances/trending-pages"], function(e, t, i, n) {
		"use strict";
		var s = t.extend({
			assetsCollection: null,
			initialize: function() {
				this.assetsCollection = n.loadData(), this.assetsCollection.length > 0 ? this.handleMostEmailedCollection() : this.subscribeOnce(this.assetsCollection, "sync", this.handleMostEmailedCollection)
			},
			handleMostEmailedCollection: function() {
				var t = this;
				e.defer(function() {
					t.local(t, "marginalia:assets-changed", t.assetsCollection)
				})
			},
			getMostEmailedAssets: function() {
				return this.assetsCollection
			}
		});
		return s
	}), define("article/common/models/marginalia/helpers/model-factory", ["article/common/models/marginalia/marginalia", "article/common/models/marginalia/most-emailed"], function(e, t) {
		"use strict";
		var i = {
			DefaultObj: e,
			createModel: function(e) {
				return e = e || "", e.indexOf("most-emailed-marginalia") >= 0 || e.indexOf("trending-module") >= 0 ? new t : new this.DefaultObj
			}
		};
		return i
	}), define("article/common/collections/marginalia/marginalia-collection", ["foundation/models/base-model", "foundation/collections/base-collection", "article/common/models/marginalia/helpers/model-factory"], function(e, t, i) {
		"use strict";
		var n = t.extend({
			model: i.defaultObj,
			add: function(n) {
				return this.model = i.createModel(n), this.model.prototype = e.prototype, t.prototype.add.call(this, this.model), this.model
			}
		});
		return n
	}), define("article/common/views/marginalia/list", ["underscore/nyt", "jquery/nyt", "foundation/views/base-view", "article/common/views/marginalia/marginalia", "article/common/collections/marginalia/marginalia-collection"], function(e, t, i, n, s) {
		"use strict";
		var a = i.extend({
			el: t("#main"),
			$story: t("#story"),
			collection: new s,
			marginaliaViews: [],
			existingBreakpoint: null,
			$target: null,
			thresholds: {
				medium: 1020
			},
			initialize: function() {
				var e = this;
				this.$el.find(".marginalia,.module").each(function(i, s) {
					var a = t(s),
						o = e.collection.add(s.className);
					e.marginaliaViews.push(new n({
						model: o,
						el: a
					}))
				}), this.doMarginaliaPlacement(), this.subscribe("nyt:page-breakpoint", this.doMarginaliaPlacement), this.initializeAdPlacement(t(".lede-ad"))
			},
			doMarginaliaPlacement: function() {
				var t, i, n = this.getViewsByType("sprinkled").slice(0);
				n.length <= 1 || (t = e.partial(this.bringToTarget, n.shift().$el, n), i = e.partial(this.returnFromTarget, n), this.determinePlacementByBreakpoint(this.thresholds.medium, t, i))
			},
			initializeAdPlacement: function(e) {
				var t;
				t = e, null !== t && (this.resetPlacement(t), this.subscribe("nyt:page-breakpoint", this.doAdPlacement), this.doAdPlacement())
			},
			doAdPlacement: function() {
				var t = this.$target,
					i = this.getViewsByType("sprinkled"),
					n = e.partial(this.bringToTarget, t, i),
					s = e.partial(this.returnFromTarget, i);
				!t || t.length < 1 || this.determinePlacementByBreakpoint(this.thresholds.medium, n, s)
			},
			determinePlacementByBreakpoint: function(e, t, i) {
				var n = this.pageManager.getCurrentBreakpoint();
				this.hasPassedIntoThreshold(n, e) ? t() : this.hasPassedOutsideThreshold(n, e) && i(), this.existingBreakpoint = n
			},
			hasPassedIntoThreshold: function(e, t) {
				return t >= e && (this.existingBreakpoint > t || null === this.existingBreakpoint)
			},
			hasPassedOutsideThreshold: function(e, t) {
				return e > t && null !== this.existingBreakpoint && this.existingBreakpoint <= t
			},
			resetPlacement: function(e) {
				this.$target = e || this.$target, this.existingBreakpoint = null, this.stopSubscribing("nyt:page-breakpoint", this.doMarginaliaPlacement), this.stopSubscribing("nyt:page-breakpoint", this.doAdPlacement), this.returnFromTarget()
			},
			getFirstAd: function(t) {
				var i = this.$story,
					n = null;
				return e.each(t, function(e) {
					var t;
					null === n && (t = i.find("#" + e + ".marginalia-anchor-ad"), t.length > 0 && (n = t.eq(0)))
				}), n
			},
			getLastAd: function(t) {
				var i = this.$story,
					n = null;
				return e.each(t.reverse(), function(e) {
					var t;
					null === n && (t = i.find("#" + e + ".marginalia-anchor-ad"), t.length > 0 && (n = t.eq(0)))
				}), n
			},
			bringToTarget: function(t, i) {
				t.hasClass("hidden") || (i = i || this.marginaliaViews, i = i.slice(0), i.length > 1 && (i = i.reverse()), e.each(i, function(e) {
					e.placeAfter(t)
				}))
			},
			returnFromTarget: function(t) {
				t = t || this.marginaliaViews, e.each(t, function(e) {
					e.placeAtOriginalPos()
				})
			},
			getViewsByType: function(t) {
				var i;
				return i = e.filter(this.marginaliaViews, function(e) {
					return e.isType(t)
				})
			}
		});
		return a
	}), define("article/common/instances/marginalia-list", ["article/common/views/marginalia/list"], function(e) {
		"use strict";
		new e
	}), define("shared/messaging/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.followButton = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<button class="button follow-button ' + (null == (__t = classes) ? "" : __t) + '">\n<i class="icon sprite-icon"></i>\n<span class="button-text">' + (null == (__t = buttonText) ? "" : __t) + "</span>\n</button>";
			return __p
		}, templates.followConfirmation = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="message message-unfollow-confirmation" data-timestamp="' + (null == (__t = timestamp) ? "" : __t) + '">\n', thumb && (__p += '\n<div class="thumb">\n<img src="' + (null == (__t = thumb) ? "" : __t) + '" />\n</div>\n'), __p += '\n<div class="message-content">\n<p class="message-title">' + (null == (__t = unfollowText) ? "" : __t) + ' <span class="collection-name">' + (null == (__t = following) ? "" : __t) + '</span>?</p>\n<div class="button-container">\n<button class="button unfollow-button"><i class="icon sprite-icon"></i>' + (null == (__t = confirmText) ? "" : __t) + '</button>\n<button class="button keep-following-button">' + (null == (__t = abortText) ? "" : __t) + "</button>\n</div>\n</div>\n</div>";
			return __p
		}, templates.followInfo = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="follow-info ' + (null == (__t = followClass) ? "" : __t) + '">\n', thumb ? __p += '\n<div class="thumb ' + (null == (__t = type) ? "" : __t) + '">\n<img src="' + (null == (__t = thumb) ? "" : __t) + '" alt="" role="presentation"/>\n</div>\n' : thumbClass && (__p += '\n<div class="thumb">\n<i class="' + (null == (__t = thumbClass) ? "" : __t) + '"></i>\n</div>\n'), __p += '\n<h4 class="collection-name">' + (null == (__t = following) ? "" : __t) + '</h4>\n<p class="description">' + (null == (__t = description) ? "" : __t) + "</p>\n</div>";
			return __p
		}, templates.followUnfollowed = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", __p += message_type ? '\n<div class="message message-unfollow-confirmed message-comment-' + (null == (__t = message_type) ? "" : __t) + '" data-timestamp="' + (null == (__t = timestamp) ? "" : __t) + '">\n' : '\n<div class="message message-unfollow-confirmed" data-timestamp="' + (null == (__t = timestamp) ? "" : __t) + '">\n', __p += "\n<div class=\"message-content\">\n<p class='message-title'>" + (null == (__t = confirmedText) ? "" : __t) + " <span class='collection-name'>" + (null == (__t = following) ? "" : __t) + "</span>. <button class='button undo-action-button'>Undo</button></p>\n</div>\n</div>";
			return __p
		}, templates.message = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) {
				if (__p += "", closeButton && (__p += '\n<button class="button close-message">\n<i class="icon"></i>\n<span class="visually-hidden">Close alert</span>\n</button>\n'), __p += "", sub_type && (sub_type = sub_type.replace(/([A-Z])/g, "-$1").toLowerCase(), "-" === sub_type.charAt(0) && (sub_type = sub_type.substr(1))), __p += '<div class="message ' + (null == (__t = sub_type) ? "" : __t) + '" data-messageId="' + (null == (__t = id) ? "" : __t) + '"><i class="icon sprite-icon"></i>', label && (__p += '\n<span class="label">' + (null == (__t = label) ? "" : __t) + "</span>\n"), __p += '<span class="message-content">\n<span class="message-title">' + (null == (__t = formattedTitle) ? "" : __t) + "</span>\n", buttons.length > 0) {
					__p += "\n";
					for (var i = 0; i < buttons.length; i++) buttons[i].url && (__p += '\n<a href="' + (null == (__t = buttons[i].url) ? "" : __t) + '" class="button message-button action-button">' + (null == (__t = buttons[i].text) ? "" : __t) + "</a>\n");
					__p += "\n"
				}
				if (__p += "\n", 1 === display_type_id && start_time) {
					var minutes, hours, formatted, date = new Date(1e3 * start_time);
					hours = date.getHours(), minutes = date.getMinutes(), minutes = 9 >= minutes ? "0" + minutes : minutes, ampm = hours >= 12 ? "PM" : "AM", hours = hours > 12 ? hours - 12 : hours, formatted = "" + hours + ":" + minutes + " " + ampm, __p += '\n<span class="timestamp">\n' + (null == (__t = formatted) ? "" : __t) + "\n</span>\n"
				}
				__p += "\n", 4 === display_type_id && (__p += "\n<a href='#' class=\"close-message\">" + (null == (__t = payload.dsm_cpy) ? "" : __t) + "</a>\n"), __p += "\n", __p += "\n", "undefined" != typeof customMarkup && customMarkup && (__p += '\n<span class="message-extra">\n' + (null == (__t = customMarkup) ? "" : __t) + "\n</span>\n"), __p += "\n", __p += "\n</span></div>"
			}
			return __p
		}, templates.messenger = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="message-bed"></div>';
			return __p
		}, templates.notificationModals = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", __p += message_type ? '\n<div class="message comment-' + (null == (__t = message_type) ? "" : __t) + '-message">\n' : '\n<div class="message">\n', __p += "\n", __p += link ? '\n<a href="' + (null == (__t = link) ? "" : __t) + '">\n' : "\n<a class='link-to-panel' href=\"#\">\n", __p += "\n" + (null == (__t = emphasize(title, emphasis)) ? "" : __t) + '\n</a>\n<span class="message-metadata">\n', timestamp && (__p += '\n<time class="timestamp" datetime="' + (null == (__t = timestamp) ? "" : __t) + '">' + (null == (__t = this.prettyDate(1e3 * timestamp) || "Just now") ? "" : __t) + "</time>\n"), __p += "\n</span>\n</div>";
			return __p
		}, templates.notificationsModal = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", "default" === show ? __p += '\n<div class="message-container">\n<div class="message message-default">\n<div class="message-content">\n<p class="message-title">You have no new notifications.</p>\n<p>Follow columns and be notified when new articles are published.</p>\n</div>\n<div class="follow-suggestions"></div>\n</div>\n</div>\n' : (__p += "\n", __p += message_type ? '\n<div class="message message-comment-' + (null == (__t = message_type) ? "" : __t) + '" data-timestamp="' + (null == (__t = timestamp) ? "" : __t) + '">\n' : '\n<div class="message" data-timestamp="' + (null == (__t = timestamp) ? "" : __t) + '">\n', __p += "\n", display_type_id >= unfollowThreshold && (__p += '\n<button class="button unsubscribe-button" title="' + (null == (__t = unfollowText) ? "" : __t) + " " + (null == (__t = following) ? "" : __t) + '"><i class="icon sprite-icon"></i></button>\n'), __p += "\n", link && (__p += '\n<a class="message-link" href="' + (null == (__t = link) ? "" : __t) + '">\n'), __p += "\n", thumb && 5 !== display_type_id && (__p += '\n<div class="thumb"><img src="' + (null == (__t = thumb) ? "" : __t) + '" /></div>\n'), __p += '<div class="message-content">\n<p class="message-title">' + (null == (__t = formattedTitle) ? "" : __t) + "</p>\n", 5 === display_type_id && comment_body && (__p += '\n<div class="comment-excerpt">\n', display_name && "replied" === message_type && (__p += '\n<div class="commenter">\n<p class="commenter-name">' + (null == (__t = display_name) ? "" : __t) + "</p>\n", location && (__p += '\n<p class="commenter-location">' + (null == (__t = location) ? "" : __t) + "</p>\n"), __p += "\n</div>\n"), __p += '\n<p class="comment-text" data-truncate="true">' + (null == (__t = comment_body) ? "" : __t) + "</p>\n</div>\n"), __p += "\n", 5 === display_type_id && (__p += '\n<i class="icon sprite-icon"></i>\n'), __p += "\n", timestamp && (__p += '\n<time class="timestamp" datetime="' + (null == (__t = timestamp) ? "" : __t) + '">' + (null == (__t = this.prettyDate(1e3 * timestamp) || "Just now") ? "" : __t) + "</time>\n"), __p += "\n</div>\n", link && (__p += "</a>"), __p += "\n</div>\n"), __p += "";
			return __p
		}, templates.onboardingFirstFollow = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<p class="prompt"><strong>You are following ' + (null == (__t = collectionName) ? "" : __t) + ".</strong> Every time a new " + (null == (__t = collectionName) ? "" : __t) + " article is published, you will receive an alert in your notifications panel in the top right corner of your screen.</p>";
			return __p
		}, templates.onboardingIntroducingNotifications = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<p class="prompt"><strong>Introducing the notifications panel.</strong> Follow columns and receive an alert when new articles are published.</p>';
			return __p
		}, templates.onboardingSuggestFollow = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<p class="prompt"><strong>Follow ' + (null == (__t = collectionName) ? "" : __t) + "</strong> and receive an alert when a new article is published.</p>";
			return __p
		}, templates
	}), define("shared/messaging/views/messenger-format-mixin", ["underscore/nyt"], function(e) {
		"use strict";
		var t = {
			emphasizeTitle: function(t, i) {
				var n, s, a, o, r, l, d, c = [],
					h = [],
					u = 0,
					m = t.length;
				if (!i || 0 === i.length) return t;
				for (s = e.sortBy(i, function(e) {
						return e.offset
					}); s.length > 0;) {
					if (o = s.shift(), r = o.offset + o.count, l = o.offset, u > l || r > m) return t;
					l === u && c.length > 0 ? (a = c.pop(), a += t.slice(l, r), c.push(a), u = r) : (l > u && c.push(t.slice(u, l)), c.push(t.slice(l, r)), d = {
						index: c.length - 1,
						treatment: o.treatment,
						url: o.url
					}, h.push(d), u = r), 0 === s.length && u !== m && c.push(t.slice(r))
				}
				return e.each(h, function(e) {
					var t = e.index,
						i = e.treatment;
					e.url ? c[t] = '<a class="link action-link" href="' + e.url + '""><span class="' + i + '">' + c[t] + "</span></a>" : c[t] = '<span class="' + i + '">' + c[t] + "</span>"
				}), n = c.join("")
			}
		};
		return t
	}), define("shared/messaging/views/message", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/messaging/templates", "shared/messaging/views/messenger-format-mixin"], function(e, t, i, n, s) {
		"use strict";
		var a = i.registerView("messaging").extend({
			className: "message-container hidden",
			events: {
				"click .close-message": "dismissed",
				"click .action-button": "acknowledged",
				"click .action-link": "acknowledged"
			},
			defaults: {
				closeButton: !0,
				dismissAcknowledged: !0,
				hiddenClass: "hidden",
				revealClass: "",
				show: function() {
					this.$el.removeClass(this.settings.hiddenClass).addClass(this.settings.revealClass)
				},
				hide: function() {
					this.$el.removeClass(this.settings.revealClass).addClass(this.settings.hiddenClass)
				}
			},
			initialize: function(e) {
				this.settings = t.extend({}, this.defaults, e), this.template = n[this.settings.template], this.subscribe("nyt:messaging-modal-" + this.model.id + "-dismissed", this.popupDismissed), this.subscribe("nyt:messaging-modal-" + this.model.id + "-acknowledged", this.popupAcknowledged), this.subscribe(this, "nyt:messaging-message-expired", this.expired)
			},
			render: function() {
				var e = this;
				return this.$el.html(e.template(t.extend(e.model.toJSON(), e.settings, {
					formattedTitle: this.getFormattedTitle(),
					unfollowThreshold: this.pageManager.flag("unfollowComments") ? 5 : 6
				}))).addClass(this.settings.hiddenClass).data("id", e.model.get("id")), !e.model.get("links") || e.model.isNotificationsPanelMessage() || e.pageManager.flag("allTheEmphases") || this.insertLinks(), e.model.get("unread") ? e.$el.find(".message").addClass("is-unread") : e.$el.find(".message").addClass("is-read no-transition"), this
			},
			replaceBetween: function(e, t, i, n) {
				return n.substring(0, e) + i + n.substring(t)
			},
			insertLinks: function() {
				var e, t, i, n, s, a, o, r = this.$el.find(".message-title"),
					l = r.html(),
					d = this.model.get("links");
				for (d.length > 1 && d.sort(function(e, t) {
						return t.start - e.start
					}), o = 0; o < d.length; o++)
					if (e = d[o].offset, i = d[o].count, n = decodeURI(d[o].url), e + i && (t = e + i), n && "null" !== n)
						if ("undefined" != typeof e && "undefined" != typeof t) {
							if (d[o - 1] && t > d[o - 1].start) break;
							s = l.substring(e, t), a = '<a class="action-link" href="' + n + '">' + s + "</a>", l = this.replaceBetween(e, t, a, l)
						} else l = '<a class="action-link" href="' + n + '">' + l + "</a>";
				r.html(l)
			},
			getFormattedTitle: function() {
				var e = this.model.getCombinedEmphasis(),
					t = this.model.get("title"),
					i = s.emphasizeTitle(t, e),
					n = this.model.get("links")[0];
				return this.pageManager.flag("allTheEmphases") ? this.model.isNotificationsPanelMessage() || !n || n.count ? i : '<a class="action-link" href="' + n.url + '" >' + i + "</a>" : this.model.isNotificationsPanelMessage() ? i : t
			},
			reveal: function(e) {
				e ? this.settings.show.call(this) : this.settings.hide.call(this)
			},
			dimensions: function() {
				return {
					width: this.$el.outerWidth(),
					height: this.$el.outerHeight()
				}
			},
			displayed: function(e) {
				e = e || 0, this.markRead(e), this.model.displayed()
			},
			markRead: function(e) {
				var t = this.$el.find(".message"),
					i = this;
				e = void 0 !== e ? e : 1500, t.hasClass("is-unread") && window.setTimeout(function() {
					i.model.isNotificationsPanelMessage() && i.broadcast("nyt:messaging-count-received", -1), t.removeClass("is-unread").addClass("is-read")
				}, e)
			},
			showOnce: function() {
				this.model.showOnce()
			},
			acknowledged: function(t) {
				var i = e(t.currentTarget).attr("href");
				t.preventDefault(), this.settings.dismissAcknowledged && this.model.acknowledged(), this.local(this, "nyt:messaging-message-view-acknowledged", this), i = this.trackingAppendParams(i, {
					action: "Click",
					contentCollection: this.model.get("sub_type") || "",
					contentID: this.model.get("id")
				}), i !== window.location.href ? window.location.href = i : window.location.reload()
			},
			expired: function() {
				this.model.expired(), this.local(this, "nyt:messaging-message-view-expired", this)
			},
			dismissed: function(e) {
				this.model.dismissed(), this.local(this, "nyt:messaging-message-view-dismissed", this), e.preventDefault()
			},
			popupDismissed: function() {
				this.model.setRead(), this.markRead(0)
			},
			popupAcknowledged: function() {
				this.model.setRead(), this.markRead()
			}
		});
		return a
	}), define("shared/messaging/models/message", ["backbone/nyt", "underscore/nyt", "foundation/models/base-model", "foundation/models/page-storage"], function(e, t, i, n) {
		"use strict";
		var s = i.extend({
			defaults: {
				display_type_id: 1,
				id: "",
				title: "",
				status: "new",
				sub_type: "",
				label: "",
				pub_date: "",
				start_time: "",
				end_time: "",
				links: [],
				buttons: [],
				payload: {},
				message_type: "",
				thumb: !1,
				comment_body: !1,
				timestamp: !1,
				location: "",
				unread: !0,
				version: 1,
				customMarkup: null,
				isDummy: !1
			},
			initialize: function() {
				var e, t = this.get("display_type_id"),
					i = this.get("start_time"),
					n = this.get("version"),
					s = 5 === t,
					a = this.getPrimaryLink();
				s && n > 1 ? (e = this.get("last_modified"), this.set("timestamp", e)) : this.set("timestamp", i), this.isNotificationsPanelMessage() && this.set({
					unfollowText: s ? "Stop receiving" : "Unfollow",
					confirmText: s ? "Turn off" : "Unfollow",
					abortText: s ? "Cancel" : "Keep following",
					confirmedText: s ? "You will no longer receive" : "You are no longer following"
				}), s && this.set({
					following: "comment notifications",
					tag: "follow.comment-notifications"
				}), this.isNotificationsPanelMessage() && void 0 === this.get("popup_unread") && this.set("popup_unread", !0), a && this.set("link", a)
			},
			showOnce: function() {
				this.setRead(), this.saveToLocalStorage()
			},
			setStatus: function(e) {
				this.set("status", e)
			},
			displayed: function() {
				this.set("unread", !1), this.set("status", "displayed")
			},
			acknowledged: function() {
				this.set("unread", !1), this.set("status", "acknowledged"), this.saveToLocalStorage()
			},
			expired: function() {
				this.set("unread", !1), this.set("status", "expired"), this.saveToLocalStorage()
			},
			dismissed: function() {
				this.set("unread", !1), this.set("status", "dismissed"), this.saveToLocalStorage()
			},
			getPrimaryLink: function() {
				var e = this.get("links");
				return e && e[0] && e[0].url ? e[0].url : null
			},
			applyMetadata: function(e) {
				var t, i, n;
				e && (i = e[0], n = e[2], this.set("version", i), this.set("unread", n), e.length > 3 && (t = e[3], this.set("popup_unread", t)))
			},
			updateProperties: function(e) {
				var t, i, n, s, a = ["byline", "comment_body", "display_name", "display_location", "emphasis", "end_time", "following", "headline", "last_modified", "links", "sub_type", "tag", "thumb", "timestamp", "title", "link"];
				if (e)
					for (t = 0; t < a.length; t += 1) s = a[t], i = this.get(s), n = e.get(s), i !== n && this.set(s, n)
			},
			getCombinedEmphasis: function() {
				var e, i, n, s, a, o = [],
					r = {},
					l = this.get("emphasis"),
					d = this.get("links");
				if (l && l.length > 0 && void 0 !== l[0].offset && l[0].count && (r.emphasize = l), d && d.length > 0 && void 0 !== d[0].offset && d[0].count && (r["link-text"] = d), t.isEmpty(r)) return !1;
				for (e in r)
					if (n = r[e], n && n.length > 0)
						for (i = 0; i < n.length; i += 1) a = this.isNotificationsPanelMessage() ? t.omit(n[i], "url") : n[i], s = t.extend({
							treatment: e
						}, a), o.push(s);
				return o
			},
			setRead: function() {
				this.set("unread", !1), this.broadcast("nyt:messaging-message-state-update", this)
			},
			setPopupRead: function() {
				this.set("popup_unread", !1), this.broadcast("nyt:messaging-message-state-update", this)
			},
			saveToLocalStorage: function() {
				var e, t, i, s, a;
				this.isNotificationsPanelMessage() || this.get("isDummy") || (e = this.get("id"), t = this.get("version"), i = (new Date).getTime(), s = n.get("messaging"), a = s ? s + "," + e : e, t && (a = a + "-" + t + "-" + i), n.set("messaging", a))
			},
			isNotificationsPanelMessage: function() {
				return this.get("display_type_id") >= 5
			}
		});
		return s
	}), define("shared/messaging/collections/messages", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/views/websockets-transport", "shared/messaging/models/message", "foundation/hosts", "foundation/cookies", "foundation/models/page-storage"], function(e, t, i, n, s, a, o, r, l) {
		"use strict";
		var d = n.extend({
			model: a,
			url: o.messagingHost + "/svc/message/v1/list/global.json",
			pageStorageKey: "messaging",
			defaultSettings: {
				webSockets: !0,
				longPoll: !1,
				fauxLongPoll: !1,
				interval: 10,
				cachePullDelay: 5
			},
			initialize: function(e) {
				this.cleanLocalStorage(), this.settings = t.extend({}, this.defaultSettings, e), t.bindAll(this, "fetch", "fetchSuccess", "handleSave", "stopSaving"), this.received = {}, this.serverSaveQueue = [], this.statusFragments = {}, this.beingProcessed = !1, this.followStarts = {}, this.lastReceived = !1, this.cachePullOver = !1, this.pageManager.isDomReady() ? this.prepareToConnect() : this.subscribe(this.pageManager, "nyt:page-ready", this.prepareToConnect), this.subscribe(this, "change:status", this.saveMessageEverywhere), this.subscribe("nyt:messaging-message-state-update", this.saveMessageEverywhere), this.storageKey = "nyt:ab-tests", this.testName = "velcroSocialFollow", this.shouldPromptForFacebookLike() && this.addFacebookSdk(function(e) {
					var t = this;
					this.subscribe(this, "change:status", this.handleVelcroDismissed), setTimeout(function() {
						t.addSocialFollowSuggest(e)
					}, 1e3)
				})
			},
			prepareToConnect: function() {
				this.initWebSockets()
			},
			initWebSockets: function() {
				var t = r.readCookie("NYT-S") || "";
				s.registerClient({
					name: "messaging",
					collection: this,
					fabrikApp: "hermes.push",
					cookies: {
						"nyt-s": t
					},
					handleMessage: this.handleMessage,
					notifyOnError: e.noop,
					handleFailover: this.switchToHTTP
				})
			},
			makeHTTPRequest: function() {
				var e = this;
				this.url = o.messagingHost + "/svc/message/v1/list/global.json", this.fetch({
					success: function(t, i) {
						e.fetchSuccess(t, i)
					},
					error: function() {}
				})
			},
			switchToHTTP: function(e) {
				e.settings.fauxLongPoll = !0, e.settings.webSockets = !1, e.stopSaving(), e.makeHTTPRequest()
			},
			sync: function(e, t, n) {
				return this.settings.longPoll ? (n.timeout = 2e3, i.sync(e, t, n)) : (n.cache = !1, i.sync(e, t, n))
			},
			parse: function(e) {
				return e && e.results ? e.results.messages : void 0
			},
			handleMessage: function(e, t) {
				var i;
				t.websocketConnected || t.handleSave(), e.body && (i = JSON.parse(e.body), t.fetchSuccess(t, i))
			},
			fetchSuccess: function(e, i) {
				var n, s, a, o, r, l, d = {},
					c = e || this;
				if (i && !t.isArray(i) && (i = [i]), i)
					for (n = 0, s = i.length; s > n; n += 1) l = this.preprocessMessage(i[n]), l && (a = l.get("id"), o = l.get("title"), c.add(l), r = this.categorizeMessage(l), d[r] = d[r] || [], this.received[a] = o, d[r].push(l));
				if (t.isEmpty(d)) return !1;
				for (r in d) c.trigger(r, d[r]);
				this.settings.fauxLongPoll && window.setTimeout(function() {
					c.makeHTTPRequest()
				}, 1e3 * c.settings.interval)
			},
			preprocessMessage: function(e) {
				var t;
				return this.cachePullOver || this.checkCachePullEnd(), this.interceptFollows(e) && this.ensureMessageID(e) && this.interceptFragments(e) && this.ensureUniqueTitles(e) && (t = this.handleUpdateableData(e)) ? this.ensureActive(t) : !1
			},
			interceptFollows: function(e) {
				return e.follows ? (t.isEmpty(this.followStarts) && (this.followStarts = e.follows), this.broadcast("nyt:messaging-follow-data-received", e.follows), !1) : e
			},
			ensureMessageID: function(e) {
				return e.id || e.messageId ? e : !1
			},
			interceptFragments: function(e) {
				return e.title ? e : (this.isExpired(e) || this.updateMessageData(e.messageId, this.extractMessageMetadata(e)), !1)
			},
			ensureUniqueTitles: function(e) {
				return 5 !== e.display_type_id && this.titleExists(e.title) ? !1 : e
			},
			handleUpdateableData: function(e) {
				var t, i, n;
				if (this.statusFragments[e.id] ? (t = this.statusFragments[e.id], delete this.statusFragments[e.id]) : this.get(e.id) && (t = this.extractMessageMetadata(this.get(e.id))), t) {
					if (i = this.extractMessageMetadata(e), n = this.unionOfState(t, i), n.toString() === t.toString() && this.get(e.id)) return !1;
					if (e = new a(e), this.get(e.id)) return this.updateMessageData(e.id, n, e), !1;
					e.applyMetadata(n)
				}
				return e = e.get ? e : new a(e)
			},
			ensureActive: function(e) {
				return this.isExpired(e) || this.isInactive(e) || this.isInLocalStorage(e) || this.isBeforeSubscribed(e) ? !1 : e
			},
			categorizeMessage: function(e) {
				var t, i = e.get("display_type_id");
				switch (i) {
					case 1:
						e.get("label") || e.set("label", "Breaking News"), t = "nyt:messaging-breaking-news-received";
						break;
					case 2:
						e.get("label") || e.set("label", "Account Alert"), t = "nyt:messaging-account-alert-received";
						break;
					case 3:
						e.get("label") || e.set("label", "Live Video"), t = "nyt:messaging-video-received";
						break;
					case 4:
						t = "nyt:messaging-velcro-received";
						break;
					case 5:
						t = "nyt:messaging-notification-received";
						break;
					case 6:
						t = "nyt:messaging-follow-notice-received";
						break;
					default:
						t = "nyt:messaging-message-received"
				}
				return t
			},
			isExpired: function(e) {
				var t, i = e.get ? e.get("end_time") : e.end_time,
					n = (new Date).getTime();
				return i ? (t = new Date(1e3 * i).getTime(), n > t) : void 0
			},
			titleExists: function(i) {
				var n = t.values(this.received);
				return e.inArray(i, n) > -1
			},
			isInactive: function(e) {
				return e && e.get ? !e.get("unread") && !e.isNotificationsPanelMessage() : !0
			},
			isBeforeSubscribed: function(e) {
				var t, i = e.get("tag");
				return (this.pageManager.flag("unfollowComments") || 5 !== e.get("display_type_id")) && e.isNotificationsPanelMessage() ? (i && (t = this.followStarts[i]), t && t.start ? t.start > e.get("start_time") : !0) : !1
			},
			handleSave: function() {
				var e;
				for (this.websocketConnected = !0; this.serverSaveQueue.length > 0;) e = this.serverSaveQueue.shift(), this.saveMessageToFabrik(e)
			},
			stopSaving: function() {
				this.websocketConnected = !1
			},
			unionOfState: function(e, t) {
				var i, n, s = e[1],
					a = e[0] > t[0] ? e[0] : t[0],
					o = e[2] && t[2];
				return e.length > 3 && (n = e[3] && t[3]), e[0] !== t[0] && 5 === s && (o = !0), i = [a, s, o], void 0 !== n && i.push(n), i
			},
			updateMessageData: function(e, t, i) {
				var n, s, a = this.get(e) ? this.extractMessageMetadata(this.get(e)) : this.statusFragments[e];
				return a ? (s = this.unionOfState(t, a), void(s.toString() !== a.toString() && (this.get(e) ? (n = {
					id: e,
					update: s,
					message: i
				}, this.broadcast("nyt:messaging-existing-message-update", n)) : this.statusFragments[e] = s))) : void(this.statusFragments[e] = t)
			},
			isInLocalStorage: function(i) {
				var n = [],
					s = [],
					a = l.get(this.pageStorageKey),
					o = i.get("id").toString();
				return a ? (n = a.split(","), s = t.map(n, function(e) {
					return e.split("-")[0]
				}), e.inArray(o, s) > -1) : !1
			},
			cleanLocalStorage: function() {
				var e, t, i, n, s, a, o, r = l.get(this.pageStorageKey);
				if (r)
					for (e = r.split(","), i = 0; i < e.length; i++) t = e[i], n = t.split("-")[2], s = (new Date).getTime(), n && (a = (s - n) / 1e3, o = Math.floor(a / 86400), o > 7 && this.deleteInLocalStorage(t))
			},
			deleteInLocalStorage: function(e) {
				var t = l.get(this.pageStorageKey),
					i = new RegExp(e + ",?"),
					n = t.replace(i, "");
				l.set(this.pageStorageKey, n)
			},
			saveMessageEverywhere: function(e) {
				e && (this.websocketConnected ? this.saveMessageToFabrik(e) : this.serverSaveQueue.push(e))
			},
			saveMessageToFabrik: function(e) {
				var t, i = e.get("popup_unread"),
					n = e.get("display_type_id"),
					a = 6 === n;
				(this.allowedToSend(e) || !this.pageManager.flag("limitFabrikSave")) && (t = {
					status: e.get("status"),
					messageId: e.get("id"),
					version: e.get("version") || 1,
					date: (new Date).getTime(),
					start_time: e.get("start_time"),
					end_time: e.get("end_time"),
					display_type_id: n,
					unread: e.get("unread")
				}, a && (t.tag = e.get("tag")), void 0 !== i && (t.popup_unread = i), this.settings.webSockets && s.publish({
					action: "send",
					client_app: "hermes.push",
					message: t
				}))
			},
			extractMessageMetadata: function(e) {
				var t, i = e.version || e.get("version") || 1,
					n = e.display_type_id || e.get("display_type_id"),
					s = e.get ? e.get("unread") : e.unread,
					a = e.get ? e.get("popup_unread") : e.popup_unread;
				return void 0 === s && (s = !0), t = [i, n, s], void 0 !== a && t.push(a), t
			},
			allowedToSend: function(e) {
				var t = e.get("display_type_id");
				return e.get("isDummy") ? !1 : 4 === t || 5 === t || 6 === t ? !0 : !1
			},
			checkCachePullEnd: function() {
				var e = (new Date).getTime();
				this.lastReceived || (this.lastReceived = e), e - this.lastReceived > 1e3 * this.settings.cachePullDelay ? (this.cachePullOver = !0, this.broadcast("nyt:messaging-cache-pull-over", e)) : this.lastReceived = e
			},
			shouldPromptForFacebookLike: function() {
				var e, t;
				return this.pageManager.flag(this.testName) && "1" === this.isUserVariant(this.testName) ? "global" === this.pageManager.getEdition() && "homepage" === this.pageManager.getApplicationName() ? !1 : (t = l.get(this.storageKey) || {}, t[this.testName] && t[this.testName].dismissed ? !1 : (e = this.getSessionStorage(this.storageKey), e[this.testName] && e[this.testName].displayCount >= 3 ? !1 : !0)) : !1
			},
			getSessionStorage: function(e) {
				var t = window.sessionStorage.getItem(e);
				if (t) try {
					return JSON.parse(t)
				} catch (i) {}
				return {}
			},
			setSessionStorage: function(e, t) {
				window.sessionStorage.setItem(e, JSON.stringify(t))
			},
			addFacebookSdk: function(e) {
				var t, i = this,
					n = "facebook-jssdk",
					s = document.getElementsByTagName("script")[0];
				document.getElementById(n) || (t = document.createElement("script"), t.id = n, t.src = "//connect.facebook.net/en_US/sdk.js", s.parentNode.insertBefore(t, s), window.fbAsyncInit = function() {
					window.FB.init({
						appId: "9869919170",
						xfbml: !0,
						version: "v2.3"
					}), window.FB.getLoginStatus(function(t) {
						var n = "connected" === t.status || "not_authorized" === t.status;
						e && e.call(i, n)
					}), window.FB.Event.subscribe("edge.create", function() {
						i.handleLikeButtonClicked(!0)
					}), window.FB.Event.subscribe("edge.remove", function() {
						i.handleLikeButtonClicked(!1)
					})
				})
			},
			addSocialFollowSuggest: function(e) {
				var i = this,
					n = e ? 410 : 245,
					s = Math.floor((new Date).getTime() / 1e3);
				t.bind(this.handleVelcroRendered, this), this.subscribe("nyt:messaging-velcro-rendered", this.handleVelcroRendered), this.fetchSuccess(this, {
					isDummy: !0,
					display_type_id: 4,
					customMarkup: "<span class='fb-like' data-href='https://www.facebook.com/nytimes' data-layout='standard' data-width='" + n + "' data-action='like' data-show-faces='false' data-share='false'></span>",
					title: "The New York Times on Facebook â€” a hub for conversation about news and ideas.",
					emphasis: [{
						offset: 0,
						count: 18,
						text: "The New York Times"
					}],
					sub_type: "FacebookSuggestion",
					status: "new",
					version: 1,
					id: this.testName,
					start_time: s,
					end_time: s + 3600,
					closeButtonPreference: !0
				}), this.subscribeOnce("nyt:messaging-message-suggestions-hidden", function() {
					i.adjustSessionDisplayCount(!1)
				})
			},
			handleVelcroRendered: function(e) {
				var t = e.model.get("id"),
					i = e.$el.find(".message-extra");
				if (t === this.testName && i.length) {
					try {
						window.FB.XFBML.parse(i[0])
					} catch (n) {}
					this.adjustSessionDisplayCount(!0)
				}
			},
			adjustSessionDisplayCount: function(e) {
				var t, i;
				t = this.getSessionStorage(this.storageKey), i = t[this.testName] || {}, i.displayCount = i.displayCount || 0, e ? i.displayCount += 1 : i.displayCount = Math.max(0, i.displayCount -= 1), t[this.testName] = i, this.setSessionStorage(this.storageKey, t)
			},
			handleLikeButtonClicked: function(e) {
				var t = this.get(this.testName);
				t && (this.setTestComplete(), this.broadcast("nyt:messaging-velcroSocialFollow-like-button-clicked", {
					model: t,
					wasLiked: e
				}))
			},
			handleVelcroDismissed: function(e) {
				e.get("id") === this.testName && "dismissed" === e.get("status") && this.setTestComplete()
			},
			setTestComplete: function() {
				var e = l.get(this.storageKey) || {};
				e[this.testName] = {
					dismissed: !0,
					date: Math.floor((new Date).getTime() / 1e3)
				}, l.set(this.storageKey, t.clone(e))
			}
		});
		return d
	}), define("shared/messaging/instances/messages", ["shared/messaging/collections/messages"], function(e) {
		"use strict";
		return new e
	}), define("shared/messaging/views/messenger-mixin", ["jquery/nyt", "underscore/nyt", "shared/messaging/views/message", "shared/messaging/instances/messages", "shared/messaging/templates"], function(e, t, i, n, s) {
		"use strict";
		var a = {
			template: s.messenger,
			mixinSettings: {
				id: null,
				notifyWhen: null,
				messageType: null,
				parent: null,
				template: "message",
				newestFirst: !0,
				closeButton: !0,
				expiration: !1,
				animationSpeed: 200,
				expirationAfterPause: null,
				fadeOutDelay: 1500,
				dismissAcknowledged: !0,
				trackingVersion: ""
			},
			events: {
				"click .action-link": "trackLinkClicks",
				"click .action-button": "trackLinkClicks"
			},
			initialize: function(e) {
				this.options = t.extend({}, this.mixinSettings, this.defaultSettings, e), this.subscribe(this, "nyt:messaging-message-rendered", this.afterMessageReceived), this.subscribe(this, "nyt:messaging-message-removed", this.afterMessageRemoved), this.subscribe(this, "nyt:messaging-message-" + this.options.id + "-displayed nyt:messaging-message-cleared", this.addLastMessageClass), this.subscribe(this, "nyt:messaging-message-" + this.options.id + "-displayed", this.trackImpressions), this.delegateEvents(), this.collection = n, this.active = {
					messages: {}
				}, this.notActive = {
					messages: {}
				}, this.received = {
					messages: {}
				}, this.newestTime = 0, this.oldestTime = 1 / 0, this.pageManager.isDomReady() ? this.render() : this.subscribe(this.pageManager, "nyt:page-ready", this.render), this.trackingBaseData = {
					module: "Notification",
					version: this.options.trackingVersion,
					region: "FixedTop"
				}, this.local(this, "nyt:messaging-messenger-initialized")
			},
			render: function() {
				return this.$parent = this.options.parent ? this.options.parent() : this.$body, this.rendered || (this.$el.hide().addClass(this.options.id).append(this.template(this.options)), this.$parent.prepend(this.$el), this.rendered = !0, this.local(this, "nyt:messaging-messenger-rendered"), this.prepareView(), this.subscribe(this.collection, this.options.notifyWhen, this.notify)), this
			},
			notify: function(i) {
				var n, s, a = this,
					o = [];
				t.each(i || [], function(e) {
					s = e.get("id"), s && o.push(e)
				}), n = o.length > 0 ? function() {
					a.createMessageViews(o)
				} : e.noop, this.pageManager.isDomReady() ? n() : this.subscribe(this.pageManager, "nyt:page-ready", t.debounce(n, 0))
			},
			createMessageViews: function(e) {
				return e && t.each(e || [], function(e) {
					var t, n = e.get("closeButtonPreference");
					t = new i({
						model: e,
						template: this.options.template,
						closeButton: void 0 !== n ? n : this.options.closeButton,
						dismissAcknowledged: this.options.dismissAcknowledged
					}), this.subscribe(t, "nyt:messaging-message-view-expired", this.removeMessage), this.subscribe(t, "nyt:messaging-message-view-dismissed", this.removeMessage), this.subscribe(t, "nyt:messaging-message-view-dismissed", this.trackDismissal), this.addMessage(t)
				}, this), this
			},
			addMessage: function(t) {
				var i, n, s, a, o, r, l, d, c, h, u, m;
				if (t) {
					if (i = t.model.get("id"), n = !0, s = this.options.newestFirst ? "prepend" : "append", u = t.render().$el, m = this.$(".message-bed"), this.received.messages[i] = t, this.active.messages[i] = t, a = this.countMessages(), this.options.newestFirst && (o = t.model.get("timestamp"), o > this.newestTime && (this.newestTime = o), o < this.oldestTime && (this.oldestTime = o), o <= this.oldestTime ? s = "append" : o < this.newestTime && (n = !1)), n) m[s](u);
					else
						for (r = this.$(".message-bed").find(".message-container"), d = r.length - 1, l = d; - 1 !== l; l -= 1)
							if (h = e(r[l]), c = h.find(".message").data("timestamp"), c > o) {
								h.after(u);
								break
							}
					t.$el.data("messageId", i), this.local(this, "nyt:messaging-message-rendered", t, a)
				}
			},
			removeMessage: function(e) {
				var t, i;
				e && (t = e.model.get("id"), this.notActive.messages[t] = e, this.active.messages[t] && delete this.active.messages[t], i = this.countMessages(), this.local(this, "nyt:messaging-message-removed", e, i))
			},
			addLastMessageClass: function() {
				this.$(".message-container").removeClass("last-message-container").last().addClass("last-message-container")
			},
			dimensions: function() {
				return {
					width: this.$el.find(".message-bed").outerWidth(!0),
					height: this.$el.find(".message-bed").outerHeight(!0)
				}
			},
			countMessages: function() {
				return t.size(this.active.messages)
			},
			trackImpressions: function(e) {
				var t, i;
				e = e || "", t = this.received.messages[e], i = this.getcontentCollection(t) || "", this.trackingTriggerImpression("messaging-impression", {
					action: "Impression",
					contentCollection: i,
					eventName: "Impression",
					contentID: e,
					priority: t.model.get("isDummy")
				})
			},
			trackDismissal: function(e) {
				var t = e.model.get("id"),
					i = this.getcontentCollection(e);
				this.trackingTrigger("messaging-dismissal", {
					action: "Click",
					contentCollection: i,
					eventName: "DismissNotification",
					contentID: t,
					priority: e.model.get("isDummy")
				})
			},
			trackLinkClicks: function(t) {
				var i = e(t.currentTarget),
					n = i.parents(".message-container").data("messageId"),
					s = this.received.messages[n],
					a = this.getcontentCollection(s),
					o = this.trackingAppendParams(i.attr("href"), {
						action: "Click",
						contentCollection: a,
						contentID: n
					});
				i.attr("href", o)
			},
			getcontentCollection: function(e) {
				return e.model.get("sub_type") ? e.model.get("sub_type") : ""
			}
		};
		return a
	}), define("shared/messaging/views/move-furniture-mixin", ["jquery/nyt"], function(e) {
		"use strict";
		var t = {
			moveFurniture: function(t, i, n) {
				var s, a, o, r = this,
					l = this.options.animationSpeed || 200;
				"add" === i ? s = "+=" + t : "subtract" === i && (s = "-=" + t), a = function(e) {
					e.animate({
						marginTop: s
					}, l)
				}, o = function(t) {
					t.promise().done(function() {
						e(this).css({
							marginTop: s
						})
					})
				}, n ? (this.$el.promise().done(function() {
					e(this).css("height", s), r.broadcast("nyt:messaging-" + r.options.messageType + "-after")
				}), this.messagesHeight = this.dimensions().height, this.broadcast("nyt:messaging-" + this.options.messageType + "-move-furniture", o, s, this)) : (this.$el.animate({
					height: s
				}, l, function() {
					r.messagesHeight = r.dimensions().height, r.broadcast("nyt:messaging-" + r.options.messageType + "-after")
				}), this.broadcast("nyt:messaging-" + this.options.messageType + "-move-furniture", a, s, this))
			}
		};
		return t
	}), define("shared/messaging/views/critical-alerts", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/messaging/views/messenger-mixin", "shared/messaging/views/move-furniture-mixin"], function(e, t, i, n, s) {
		"use strict";
		var a = i.registerView("messaging").extend(t.extend({}, s, n, {
			defaultSettings: {
				messageType: "critical-alerts",
				parent: function() {
					return 0 === e("#critical-alerts").length && e("body").prepend('<div id="critical-alerts"></div>'), e("#critical-alerts")
				}
			},
			prepareView: function() {
				this.messagesHeight = 0, this.$el.addClass("alerts"), this.$el.parent("#critical-alerts").addClass("critical-alerts messenger"), this.$el.css("height", "0")
			},
			afterMessageReceived: function(e, t) {
				var i, n = 0;
				e && t > 0 && (this.broadcast("nyt:messaging-message-" + this.options.id + "-received", e, this), 1 === t && (n += this.openMessenger()), e.reveal(!0), e.displayed(), n += e.dimensions().height, this.moveFurniture(n, "add"), i = e.model.get("id"), this.local(this, "nyt:messaging-message-" + this.options.id + "-displayed", i), this.createMessageClone(e), this.alignMessages(), this.options.expiration && this.startTimer(e))
			},
			startTimer: function(e) {
				var t;
				window.setTimeout(function() {
					t = e.model.get("status"), t && "dismissed" !== t && "expired" !== t && e.trigger("nyt:messaging-message-expired")
				}, 60 * this.options.expiration * 1e3)
			},
			openMessenger: function() {
				var e;
				return this.$el.show(), this.$el.find(".message-bed").show(), e = this.dimensions().height, this.subscribe(this.pageManager, "nyt:page-resize", this.handleWindowResize), this.broadcast("nyt:messaging-messenger-" + this.options.id + "-opened", this), e
			},
			afterMessageRemoved: function(e, t) {
				var i = 0;
				e && null !== t && (i += e.dimensions().height, e.$el.hide(), this.local(this, "nyt:messaging-message-cleared"), 0 === t && (i += this.closeMessenger()), this.broadcast("nyt:messaging-message-" + this.options.id + "-closed", e, this), this.moveFurniture(i, "subtract", !0))
			},
			closeMessenger: function() {
				var t = this.dimensions().height,
					i = this;
				return this.$el.hide(), this.$el.find(".message-bed").hide(), this.stopListening(this.pageManager, "nyt:page-resize"), this.broadcast("nyt:messaging-messenger-" + this.options.id + "-closed", this), this.$el.promise().done(function() {
					e(this).siblings(".alerts").is(":hidden") && i.broadcast("nyt:messaging-message-" + i.options.messageType + "-closed", i)
				}), t
			},
			createMessageClone: function(e) {
				e.$el.find(".message").clone().addClass("hidden-message").wrapInner('<div class="message-wrap" />').appendTo(e.$el)
			},
			handleWindowResize: function() {
				var e, t, i, n = this;
				this.$el.promise().done(function() {
					t = n.dimensions().height, i = n.messagesHeight, t > i ? (e = t - i, n.moveFurniture(e, "add", !0), n.messagesHeight = t) : i > t && (e = i - t, n.moveFurniture(e, "subtract", !0), n.messagesHeight = t), n.alignMessages()
				})
			},
			maxMessageWidth: function() {
				var e = this.$(".message-container").width();
				this.$(".message:not(.hidden-message)").css({
					"max-width": e + "px"
				})
			},
			alignMessages: function() {
				var e = 0,
					i = this.active.messages;
				t.size(i) > 0 && (t.each(i, function(t) {
					var i = t.$el.find(".hidden-message .message-wrap").outerWidth();
					i > e && (e = i)
				}), this.$el.find(".message:not(.hidden-message)").css({
					width: e + 2 + "px"
				}), this.maxMessageWidth())
			}
		}));
		return a
	}), define("shared/messaging/views/suggestions", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/messaging/views/messenger-mixin", "shared/messaging/views/move-furniture-mixin"], function(e, t, i, n, s) {
		"use strict";
		var a = i.registerView("messaging").extend(t.extend({}, s, n, {
			nytEvents: {
				"nyt:masthead-storytheme": "toggleTheme",
				"nyt:masthead-contenttheme": "toggleTheme",
				"nyt:messaging-message-breaking-news-alerts-received": "hideMessenger",
				"nyt:messaging-message-account-alerts-received": "hideMessenger"
			},
			defaultSettings: {
				messageType: "suggestions",
				closeButton: !1,
				trackingVersion: "Velcro"
			},
			prepareView: function() {
				this.messagePresent = !1, this.stayHidden = !1, this.$el.addClass("messenger"), this.$el.css("height", "0"), this.pageManager.flag("velcroSocialFollow") && "1" === this.isUserVariant("velcroSocialFollow") && this.subscribe("nyt:messaging-velcroSocialFollow-like-button-clicked", this.handleLikeButtonClicked)
			},
			afterMessageReceived: function(t) {
				var i, n, s = e("#account-alerts"),
					a = e("#breaking-news-alerts"),
					o = e("#masthead");
				t && this.$el.is(":hidden") && s.is(":hidden") && a.is(":hidden") && (this.stayHidden || this.messagePresent || (t.reveal(!0), t.displayed(), t.showOnce(), this.messagePresent = !0, o.hasClass("theme-in-story") || (this.openMessenger(), i = this.dimensions().height, this.moveFurniture(i, "add"), n = t.model.get("id"), this.broadcast("nyt:messaging-velcro-rendered", t), this.local(this, "nyt:messaging-message-" + this.options.id + "-displayed", n))))
			},
			openMessenger: function() {
				this.$el.show(), this.broadcast("nyt:messaging-messenger-" + this.options.id + "-opened", this)
			},
			afterMessageRemoved: function(e) {
				var t = this.dimensions().height;
				e && (e.$el.hide(), this.moveFurniture(t, "subtract", !0), this.broadcast("nyt:messaging-message-" + this.options.id + "-closed", e, this), this.closeMessenger())
			},
			closeMessenger: function() {
				this.$el.hide(), this.broadcast("nyt:messaging-messenger-" + this.options.id + "-closed", this)
			},
			hideMessenger: function() {
				var e = this.dimensions().height;
				this.$el.is(":visible") && (this.$el.hide(), this.moveFurniture(e, "subtract", !0)), this.broadcast("nyt:messaging-message-" + this.options.id + "-hidden", this), this.stayHidden = !0
			},
			showMessenger: function() {
				var e = this.dimensions().height;
				this.moveFurniture(e, "add"), this.broadcast("nyt:messaging-message-" + this.options.id + "-shown", this), this.$el.show()
			},
			toggleTheme: function(t) {
				var i, n = e("#account-alerts"),
					s = e("#breaking-news-alerts"),
					a = t ? "hide" : "show";
				"hide" === a && this.$el.is(":visible") ? (i = this.dimensions().height, this.moveFurniture(i, "subtract", !0), this.$el.addClass("theme-changed"), this.$el.hide()) : "show" === a && this.$el.is(":hidden") && n.is(":hidden") && !this.stayHidden && this.messagePresent && n.is(":hidden") && s.is(":hidden") && (this.$el.show(), i = this.dimensions().height, this.moveFurniture(i, "add", !0), this.$el.removeClass("theme-changed")), this.broadcast("nyt:messaging-message" + this.options.id + a, i, this)
			},
			handleLikeButtonClicked: function(e) {
				e.model && void 0 !== e.wasLiked && this.trackingTrigger("velcro-social-follow-fb-click", {
					action: "Click",
					contentCollection: e.model.get("sub_type"),
					eventName: e.wasLiked ? "LikeNYTimes" : "UnlikeNYTimes",
					contentID: e.model.get("id"),
					priority: e.model.get("isDummy")
				})
			}
		}));
		return a
	}), define("shared/messaging/views/announcements", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/messaging/views/messenger-mixin"], function(e, t, i, n) {
		"use strict";
		var s = i.registerView("messaging").extend(t.extend({}, n, {
			nytEvents: {
				"nyt:page-resize": "adjustWidth"
			},
			defaultSettings: {
				messageType: "announcements",
				parent: function() {
					return e("#masthead").find(".container")
				},
				animationSpeed: 400,
				expiration: 30,
				expirationAfterPause: 3,
				trackingVersion: "LiveVideo"
			},
			prepareView: function() {
				var e = this,
					t = 1e3 * this.options.expirationAfterPause;
				this.messagePresent = !1, this.timer = null, this.currentMessageId = null, this.widthDiff = 45, this.$el.addClass("messenger"), this.adjustWidth(), this.$el.on("mouseenter", function() {
					e.clearTimer()
				}), this.$el.on("mouseleave", function() {
					e.startTimer(t)
				})
			},
			afterMessageReceived: function(e) {
				var t = e.model.get("id"),
					i = this,
					n = 1e3 * this.options.expiration;
				e && (this.messagePresent ? window.setTimeout(function() {
					i.afterMessageReceived(e)
				}, n) : (e.reveal(!0), e.displayed(), this.local(this, "nyt:messaging-message-" + this.options.id + "-displayed", t), this.messagePresent = !0, this.openMessenger(), this.currentMessageId = t, this.startTimer(n)))
			},
			startTimer: function(e) {
				var t = this.currentMessageId,
					i = this.active.messages[t],
					n = function() {
						i && i.trigger("nyt:messaging-message-expired")
					};
				e = e || 5e3, this.timer = window.setTimeout(n, e)
			},
			clearTimer: function() {
				window.clearTimeout(this.timer)
			},
			openMessenger: function() {
				var e = this.options.animationSpeed || 500;
				this.$el.stop(!0).show().animate({
					top: 0
				}, e), this.broadcast("nyt:messaging-messenger-" + this.options.id + "-opened", this)
			},
			afterMessageRemoved: function(e) {
				e && this.closeMessenger(e)
			},
			closeMessenger: function(t) {
				var i = this.dimensions().height,
					n = this.options.animationSpeed || 500,
					s = this;
				t && this.$el.stop(!0).animate({
					top: "-" + i
				}, n, function() {
					e(this).hide(), t.$el.hide(), s.messagePresent = !1, s.broadcast("nyt:messaging-messenger-" + s.options.id + "-closed", s)
				})
			},
			adjustWidth: function() {
				var t, i = e("#masthead"),
					n = i.width(),
					s = this.widthDiff,
					a = this.pageManager.getCurrentBreakpoint(),
					o = 0;
				a > 1020 ? (10060 >= a && (o = parseInt(i.css("margin-left"), 10)), t = n - (2 * s + o), this.$el.css("width", t + "px"), this.$el.css("left", s + "px")) : (this.$el.css("left", "0px"), this.$el.css("width", "100%"))
			}
		}));
		return s
	}), define("shared/messaging/models/follow", ["underscore/nyt", "foundation/models/base-model"], function(e, t) {
		"use strict";
		var i = t.extend({
			defaults: {
				tag: "",
				type: "",
				following: "",
				thumb: "",
				thumbClass: !1,
				description: "",
				isFollowing: !1
			},
			follow: function() {
				this.set("isFollowing", !0), this.broadcast("nyt:messaging-following-" + this.id)
			},
			unfollow: function() {
				this.set("isFollowing", !1), this.broadcast("nyt:messaging-unfollowing-" + this.id)
			},
			isFollowing: function() {
				return this.get("isFollowing")
			},
			getButtonText: function() {
				return e.pick(this.toJSON(), ["followText", "followingText", "unfollowText"])
			}
		});
		return i
	}), define("shared/messaging/views/follow-onboarding", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/modal/views/modal"], function(e, t, i, n) {
		"use strict";
		var s = i.registerView("messaging").extend({
			defaults: {
				featureName: "",
				extractTemplateData: function(e) {
					return e
				},
				animationDuration: 1e3,
				modalDefaults: {
					className: "",
					superclass: "",
					template: function() {},
					modalOptions: {
						tailDirection: "up-right",
						disableBindings: !0,
						toggleSpeed: 200
					},
					onShow: function() {},
					onHide: function() {}
				},
				allows: {}
			},
			initialize: function(e) {
				var i, n, s, a = this;
				if (!e.types) return !1;
				this.modals = {}, this.settings = t.extend({}, this.defaults, e), this.modalSettings = {}, this.settings.modalOptions = t.extend({}, this.defaults.modalOptions, e.modalOptions), this.extractTemplateData = this.settings.extractTemplateData, this.allows = t.extend({}, this.defaults.allows, e.allows);
				for (i in e.types) this.modals[i] = {}, this.modalSettings[i] = t.extend({}, this.settings.modalDefaults, e.types[i]), this.modalSettings[i].modalOptions = t.extend({}, this.settings.modalDefaults.modalOptions, e.types[i].modalOptions), n = this.modalSettings[i].modalOptions.addlClasses, s = this.modalSettings[i].className + " " + this.modalSettings[i].superclass, n = n ? n + " " + s : s, n.replace(/\s/g, "").length > 0 && (this.modalSettings[i].modalOptions.addlClasses = n);
				return this.subscribe("nyt:" + this.settings.featureName + "-onboarding-show", function(e) {
					a.handleModalOpen(e.type, e)
				}), this.subscribe("nyt:" + this.settings.featureName + "-onboarding-hide", function(e) {
					a.handleModalClose(e.type, e)
				}), this
			},
			createNewModal: function(i, s) {
				var a = this,
					o = s ? s.binding : void 0,
					r = s && s.modalOptions ? s.modalOptions : {},
					l = this.modalSettings[i];
				return new n(t.extend({}, this.settings.modalOptions, l.modalOptions, r, {
					id: this.settings.featureName + "-tooltip-" + i,
					modalContent: l.template(a.extractTemplateData(s)),
					binding: o,
					openCallback: function() {
						a.trackOnboardingEvent("impression", i, o), l.onShow(a), e("#notifications-tooltip-" + i).find(".dismiss-button").on("click", function() {
							a.trackOnboardingEvent("click", i, o)
						})
					},
					closeCallback: function() {
						l.onHide(a)
					},
					instanceData: s
				}))
			},
			showModal: function(e) {
				e && (this.modals[e].addToPage().open(), this.broadcast("nyt:" + this.settings.featureName + "-onboarding-shown", e))
			},
			hideModal: function(e) {
				e && (this.modals[e].close().removeFromPage(), this.broadcast("nyt:" + this.settings.featureName + "-onboarding-hidden", this), this.modals[e] = !1)
			},
			handleModalOpen: function(e, t) {
				(t.force || e && this.allows[e]) && (this.modals[e] = this.createNewModal(e, t), this.showModal(e), this.allows[e] = !1)
			},
			handleModalClose: function(e) {
				e && !t.isEmpty(this.modals[e]) && this.hideModal(e)
			},
			trackOnboardingEvent: function(i, n, s) {
				var a, o, r, l, d, c, h = "impression" === i;
				n && (r = {
					version: "Follow" + n.toUpperCase().slice(0, 1) + n.slice(1),
					module: "follow",
					eventName: h ? "tooltip-shown" : "tooltip-CTA",
					priority: h
				}, l = ["marginalia", "next-in", "notifications-modal", "extended-byline", "collection-heading", "masthead"], o = t.isString(s) ? e(s) : s, o && o.length && (d = t.find(l, function(e) {
					return o.parents("." + e).length > 0
				})), d && (r.region = d), a = h ? "trackingTriggerImpression" : "trackingTrigger", c = h ? void 0 : "interaction", this[a]("follow-events", r, c))
			}
		});
		return s
	}), define("shared/messaging/collections/follows", ["jquery/nyt", "underscore/nyt", "foundation/collections/base-collection", "shared/messaging/models/follow", "shared/messaging/views/follow-onboarding", "shared/messaging/templates", "foundation/hosts"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = i.extend({
			model: n,
			defaultSettings: {},
			initialize: function(e) {
				this.settings = t.extend({}, this.defaultSettings, e), this.followSorts = !1, this.followQueue = [], this.followsInitialized = !1, this.knowsSubscriptionData = !1, this.followLater = {}, this.followedAlready = !1, this.onboarding = null, this.stateKeys = {
					onboardWelcome: "follow.onboard-welcome",
					onboardSuggest: "follow.onboard-suggest",
					onboardConfirm: "follow.onboard-confirm",
					betaWhitelist: "follow.whitelist"
				}, t.bindAll(this, "createOnboardingInstance", "handleOnboardingComplete"), this.pageManager.isDomReady() ? this.getFollowables() : this.subscribe(this.pageManager, "nyt:page-ready", this.getFollowables), this.subscribe("nyt:messaging-follow-data-received", this.handleFollowingDataReceived), this.subscribe("nyt:messaging-unfollow-tag", this.unsubscribeFromFollowable), this.subscribe("nyt:messaging-follow-tag", this.subscribeToFollowable), this.subscribe("nyt:notifications-onboarding-complete", this.handleOnboardingComplete), this.subscribe("nyt:notifications-instantiate-onboarding", this.createOnboardingInstance)
			},
			changeSubscription: function(t, i, n) {
				var s = o.followApiHost + "/svc/pushmobile/follow/v0/" + i + ".json";
				e.ajax({
					url: s,
					type: t,
					xhrFields: {
						withCredentials: !0
					}
				}).done(n)
			},
			unsubscribeFromFollowable: function(e) {
				var t = this.get(e);
				t && t.unfollow(), this.changeSubscription("DELETE", e, function() {})
			},
			subscribeToFollowable: function(e) {
				var t = this.get(e);
				t && (t.follow(), this.followedAlready || "follow" === e.slice(0, 6) || (this.broadcast("nyt:notifications-onboarding-show", {
					type: "confirm",
					model: t
				}), this.followedAlready = !0)), this.changeSubscription("POST", e, function() {})
			},
			getFollowables: function() {
				var i = this;
				e.ajax({
					url: o.s1Host + "/messaging/available_follows.jsonp",
					dataType: "jsonp",
					jsonpCallback: "followablesCallback"
				}).done(function(e) {
					var n, s;
					if (!e) return !1;
					if (e.followables)
						for (n in e.followables) s = e.followables[n], s.id = n, i.add(s);
					i.followSorts = t.omit(e, "followables"), i.followsInitialized = !0, i.local(i, "nyt:messaging-followables-received")
				})
			},
			handleFollowingDataReceived: function(e) {
				var t = this;
				this.knowsSubscriptionData || !this.pageManager.flag("followingRelease") && !e[this.stateKeys.betaWhitelist] || (this.knowsSubscriptionData = !0, this.pageManager.setMeta("nyt:messaging-user-has-ability-to-follow", "true"), this.broadcast("nyt:messaging-user-has-ability-to-follow"), this.followsInitialized ? this.followFollowables(e) : (this.followQueue = e, this.subscribe(this, "nyt:messaging-followables-received", this.followFollowables)), this.pageManager.getMeta("nyt:messaging-notifications-panel-active") ? this.handleOnboardingReady(e) : this.subscribe("nyt:messaing-notifications-panel-active", function() {
					t.handleOnboardingReady(e)
				}))
			},
			handleOnboardingReady: function(e) {
				e && !e[this.stateKeys.onboardConfirm] && "homepage" !== this.pageManager.getApplicationName() && (this.createOnboardingInstance({
					following: e
				}), e[this.stateKeys.onboardWelcome] || this.broadcast("nyt:notifications-onboarding-show", {
					type: "welcome",
					binding: ".notifications-button"
				}))
			},
			createOnboardingInstance: function(e) {
				!this.onboarding && e.following && (this.onboarding = new s({
					featureName: "notifications",
					extractTemplateData: function(e) {
						return e && e.model && e.model.get ? {
							collectionName: e.model.get("following")
						} : {}
					},
					types: {
						welcome: {
							template: a.onboardingIntroducingNotifications,
							className: "notifications-tooltip",
							superclass: "tooltip",
							modalOptions: {
								tailTopOffset: -8,
								tailLeftOffset: -1,
								fixedOverride: !0
							},
							onShow: function(t) {
								var i = function() {
									t.broadcast("nyt:notifications-onboarding-hide", {
										type: "welcome"
									})
								};
								t.broadcast("nyt:notifications-onboarding-complete", "welcome"), "homepage" === t.pageManager.getApplicationName() ? t.subscribeOnce("nyt:masthead-hidden", i) : t.subscribeOnce("nyt:masthead-storytheme", i), e.cbExtension && e.cbExtension(t.modals.welcome)
							}
						},
						suggest: {
							template: a.onboardingSuggestFollow,
							className: "notifications-tooltip",
							superclass: "tooltip",
							modalOptions: {
								tailDirection: "down-right"
							},
							onShow: function(t) {
								t.broadcast("nyt:notifications-onboarding-complete", "suggest"), t.modals.suggest.settings.fixedOverride && t.subscribeOnce("nyt:masthead-storytheme", function() {
									t.broadcast("nyt:notifications-onboarding-hide", {
										type: "suggest"
									})
								}), e.cbExtension && e.cbExtension(t.modals.suggest)
							}
						},
						confirm: {
							template: a.onboardingFirstFollow,
							className: "notifications-confirmation",
							modalOptions: {
								modalTitle: '<i class="icon"></i>Success!',
								hasOverlay: !0,
								hasCloseButton: !0,
								tailDirection: "centered"
							},
							onShow: function(e) {
								e.broadcast("nyt:notifications-onboarding-complete", "confirm")
							}
						}
					},
					modalOptions: {
						modalFooter: e.footerOverride || '<button class="button dismiss-button">Ok, got it</button>'
					},
					allows: {
						welcome: !e.following[this.stateKeys.onboardWelcome],
						suggest: !e.following[this.stateKeys.onboardSuggest],
						confirm: !e.following[this.stateKeys.onboardConfirm]
					}
				}), this.broadcast("nyt:messaging-user-onboarding-start"))
			},
			followFollowables: function(e) {
				var i, n, s = e || this.followQueue;
				for (s = t.isArray(s) ? s : t.keys(s); s.length > 0;) i = s.shift(), n = this.get(i), n ? n.follow() : this.followLater[i] = !0;
				this.handleFollowDataReady()
			},
			handleFollowDataReady: function() {
				var e, t = this.createOrderedFullList();
				e = this.pageManager.flag("moreFollowSuggestions") ? t : this.generateFollowSuggestions(), this.broadcast("nyt:messaging-follow-suggestions-received", e), this.broadcast("nyt:messaging-followable-list-received", t)
			},
			generateFollowSuggestions: function(e) {
				var i, n, s = [],
					a = [],
					o = this.followSorts.weighted || this.followSorts.alpha || t.pluck(this.models, "id"),
					r = t.clone(o);
				for (e = e || 3; s.length < e;)
					if (r.length > 0) {
						if (i = r.shift(), n = this.get(i), !n) continue;
						n.isFollowing() ? a.push(n) : s.push(n)
					} else {
						if (0 === a.length) break;
						s.push(a.shift())
					}
				return s
			},
			createOrderedFullList: function(e) {
				var i, n, s, a, o = [];
				for (a = t.pluck(this.models, "id"), e = e || this.followSorts.alpha || a, i = 0; i < e.length; i += 1) s = this.followSorts.alpha[i], n = this.get(s), n && o.push(n);
				return o
			},
			getModelFromMeta: function(e) {
				var t, i, n = this.pageManager.getMeta("applicationName");
				return "article" !== n && "collection" !== n || (t = this.pageManager.getMeta("CT") + "." + this.pageManager.getMeta("CN"), t !== e) ? void 0 : (i = this.add({
					following: this.pageManager.getMeta("nyt-collection:display-name"),
					id: t,
					tag: t,
					thumb: "collection" === n ? this.pageManager.getMeta("og:image") : void 0,
					description: this.pageManager.getMeta("nyt-collection:tagline")
				}), this.followLater[t] && i.follow(), i)
			},
			handleOnboardingComplete: function(e) {
				var t;
				this.pageManager.flag("followingRelease") && this.isUserLoggedIn === !1 || (t = {
					welcome: this.stateKeys.onboardWelcome,
					suggest: this.stateKeys.onboardSuggest,
					confirm: this.stateKeys.onboardConfirm
				}, t[e] && this.subscribeToFollowable(t[e]))
			}
		});
		return r
	}), define("shared/messaging/instances/follows", ["foundation/views/page-manager", "shared/messaging/collections/follows"], function(e, t) {
		"use strict";
		return e.flag("followFeature") ? new t : {}
	}), define("shared/messaging/views/notification-modal", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/messaging/views/messenger-mixin", "shared/messaging/templates", "shared/messaging/views/messenger-format-mixin", "shared/modal/views/modal"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = i.extend({
			defaultSettings: {
				expiration: 7,
				stackSize: 3,
				modalHeight: 91,
				modalMargin: 6,
				truncateTextHeight: 34
			},
			template: s.notificationModals,
			el: "#notification-modals",
			nytEvents: {
				"nyt:messaging-notification-archive-opened": "closeModals"
			},
			initialize: function(e) {
				this.options = t.extend({}, this.defaultSettings, e), this.queue = {}, this.active = {}, this.timer = {}, this.maxHeight = this.options.stackSize * this.options.modalHeight + this.options.modalMargin, this.$el.css({
					"max-height": this.maxHeight + "px"
				})
			},
			instantiateModal: function(i, n) {
				var s = this,
					r = new o({
						id: "notification-modal-" + n,
						hasCloseButton: !0,
						modalContent: s.template(t.extend(i.toJSON(), {
							link: i.getPrimaryLink(),
							emphasize: a.emphasizeTitle,
							emphasis: i.getCombinedEmphasis()
						})),
						tailDirection: "up",
						autoPosition: !1,
						closeOnClick: !1,
						toggleSpeed: 400,
						openCallback: function() {
							this.$el.css("left", 5)
						},
						closeCallback: function() {
							s.closeModal(n)
						}
					});
				return r.addToPage("#notification-modals"), r.$el.data("messageId", n), r.$el.on("click", function(e) {
					var t;
					e.preventDefault(), s.local(s, "nyt:messaging-notification-modal-clicked", n), s.closeModal(n), t = s.trackingAppendParams(i.get("link"), {
						module: "notification",
						version: "NotificationPopup",
						action: "click",
						region: "TopBar",
						eventName: "click",
						contentCollection: i.get("tag")
					}), s.broadcast("nyt:messaging-notifications-navigate", t)
				}), r.$el.find(".modal-close").on("click", function(e) {
					e.stopPropagation(), s.local(s, "nyt:messaging-notification-modal-closed", n), s.closeModal(n), s.trackNotificationClose(i)
				}), r.$el.on("mouseenter", function() {
					e(this).parent().children(".active").each(function() {
						var t = e(this).data("timerId");
						s.clearTimer(t)
					})
				}), r.$el.on("mouseleave", function() {
					e(this).parent().children(".active").each(function() {
						var t = s.startTimer(n, 2e3);
						e(this).data("timerId", t)
					})
				}), r
			},
			render: function(e) {
				var t, i, n, s, a, o, r = this.options.truncateTextHeight;
				e && (t = e.model.get("id"), i = this.instantiateModal(e.model, t), t && i && (n = i.$el.find(".message"), s = n.find(".timestamp"), a = s.attr("datetime"), i.open(), i.truncateText(n.find("a"), r), o = this.prettyDate(a), o && s.text(o), this.showOrWait(t, i)))
			},
			showOrWait: function(e, t) {
				var i, n = t.$el.position().top,
					s = 1e3 * this.options.expiration;
				n >= this.maxHeight ? this.queue[e] = t : (this.queue[e] && delete this.queue[e], this.active[e] = t, t.$el.addClass("active"), i = this.startTimer(e, s), t.$el.data("timerId", i))
			},
			startTimer: function(e, t) {
				var i, n, s = this,
					a = function() {
						n = s.active[e], n && n.close()
					};
				return i = window.setTimeout(a, t)
			},
			clearTimer: function(e) {
				e && window.clearTimeout(e)
			},
			closeModal: function(e) {
				var t, i = this.active[e];
				i && (t = i.$el.data("timerId"), t && this.clearTimer(t), i.removeFromPage(), this.active[e] && delete this.active[e], this.queue[e] && delete this.queue[e]), this.showNext()
			},
			closeModals: function() {
				var e, t;
				for (e in this.queue) t = this.queue[e], t.removeFromPage(), delete this.queue[e];
				for (e in this.active) t = this.active[e],
					t.removeFromPage(), delete this.active[e]
			},
			showNext: function() {
				var e;
				for (e in this.queue) this.showOrWait(e, this.queue[e])
			},
			trackNotificationClose: function(e) {
				e && e.get && this.trackingTrigger("notification-events", {
					module: "notification",
					version: "NotificationPopup",
					action: "close",
					region: "TopBar",
					contentId: e.get("link"),
					contentCollection: e.get("tag")
				}, "interaction")
			}
		});
		return r
	}), define("shared/messaging/views/follow-button", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/messaging/templates", "shared/messaging/instances/follows"], function(e, t, i, n, s, a) {
		"use strict";
		var o = i.registerView("messaging").extend({
			className: "follow-button-container",
			defaults: {
				template: s.followButton,
				followingText: "Following",
				followText: "Follow",
				unfollowText: "Unfollow"
			},
			initialize: function(e) {
				this.settings = t.extend({}, this.defaults, e), this.template = this.settings.template, e.$el && (this.model = a.get(e.$el.data("collection-id")), this.model || (this.model = a.getModelFromMeta(e.$el.data("collection-id")))), this.model && (this.settings = t.extend(this.settings, this.model.getButtonText()), this.subscribe("nyt:messaging-following-" + this.model.id, this.updateFollowView), this.subscribe("nyt:messaging-unfollowing-" + this.model.id, this.updateFollowView), e.$el && e.$el.replaceWith(this.render().$el))
			},
			render: function() {
				var i = this,
					n = t.extend(i.model.toJSON(), i.getRenderVars()),
					s = i.template(n);
				return i.$el.html(s), i.$el.on("click", ".follow-button", function() {
					var t, n;
					return i.trackFollowButtonClick(e(this)), void 0 === i.isUserLoggedIn ? !1 : i.isUserLoggedIn ? (n = i.model.get("tag"), i.model.isFollowing() ? i.broadcast("nyt:messaging-unfollow-tag", n) : i.broadcast("nyt:messaging-follow-tag", n), !1) : (t = "Log in to follow " + i.model.get("following"), i.broadcast("nyt:loginmodal-open", {
						modalTitle: t,
						registrationPlatform: "follow_button"
					}), !1)
				}), i.$el.on("focusin mouseenter", ".follow-button", function() {
					var t = e(this),
						n = t.parent().parent(),
						s = {
							tailDirection: "down-right",
							fixedOverride: !1
						};
					t.hasClass("is-following") ? t.addClass("active").find(".button-text").html(i.settings.unfollowText) : n.hasClass("follow-option") || (n.hasClass("collection-heading") ? s.tailTopOffset = 3 : n.hasClass("collection-meta") ? s.tailTopOffset = -2 : n.hasClass("collection-header") ? (s.tailDirection = "up-left", s.tailTopOffset = -2, s.tailLeftOffset = -44) : n.hasClass("user-tools-button-group") ? (s.tailDirection = "up-right", s.tailTopOffset = -2, s.fixedOverride = !0) : n.hasClass("extended-byline") && (s.tailDirection = "up-left"), i.broadcast("nyt:notifications-onboarding-show", {
						type: "suggest",
						binding: i.$el,
						model: i.model,
						modalOptions: s
					}))
				}), i.$el.on("mouseleave focusout", ".follow-button.is-following", function() {
					e(this).removeClass("active").find(".button-text").html(i.settings.followingText)
				}), this
			},
			getRenderVars: function() {
				var e = {};
				return this.model.isFollowing() ? (e.buttonText = this.settings.followingText, e.classes = "is-following") : (e.buttonText = this.settings.followText, e.classes = ""), e
			},
			updateFollowView: function() {
				var e = this.getRenderVars(),
					t = this.$el.find(".follow-button"),
					i = t.find(".button-text");
				t.removeClass("is-following active").addClass(e.classes), i.html(e.buttonText)
			},
			trackFollowButtonClick: function(i) {
				var n, s, a = this.model.get("id").split("."),
					o = {
						module: "follow",
						state: this.model.isFollowing() ? "following" : "not-following",
						action: "click",
						contentId: a[1] || "",
						version: a[0] || "",
						eventName: this.model.isFollowing() ? "unfollow" : "follow",
						mData: {
							textLabel: !0
						}
					},
					r = ["marginalia", "next-in", "notifications-modal", "extended-byline", "collection-heading", "masthead"],
					l = ["notifications", "follow-options"];
				n = t.find(r, function(e) {
					return i.parents("." + e).length > 0
				}), n && (o.region = n), "notifications-modal" === n && (s = t.find(l, function(e) {
					return i.parents("." + e).length > 0
				}), s && (o.state = "follow-options" === s ? "customize" : "notification", o.contentPlacement = e(".notifications-modal ." + s + " .follow-button").index(i) + 1)), this.trackingTrigger("follow-events", o, "interaction")
			},
			handleUserReady: function() {
				this.isUserLoggedIn = n.isLoggedIn()
			}
		});
		return o
	}), define("shared/messaging/views/follow", ["underscore/nyt", "foundation/views/base-view", "shared/messaging/views/follow-button", "shared/messaging/templates"], function(e, t, i, n) {
		"use strict";
		var s = t.registerView("messaging").extend({
			className: "follow-option",
			defaults: {
				template: n.followInfo
			},
			initialize: function(t) {
				this.settings = e.extend({}, this.defaults, t), this.template = this.settings.template, this.followButton = new i({
					model: this.model
				}), this.subscribe("nyt:messaging-following-" + this.model.id, this.updateFollowView), this.subscribe("nyt:messaging-unfollowing-" + this.model.id, this.updateFollowView)
			},
			render: function() {
				var t = e.extend(this.model.toJSON(), {
						followClass: this.getFollowClass()
					}),
					i = this.template(t);
				return this.$el.html(i).append(this.followButton.render().$el), this
			},
			getFollowClass: function() {
				return this.model.isFollowing() ? "following" : ""
			},
			updateFollowView: function() {
				var e = this.getFollowClass(),
					t = this.$el.find(".follow-info");
				t.removeClass("following").addClass(e)
			}
		});
		return s
	}), define("shared/messaging/views/notifications", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/messaging/instances/follows", "shared/messaging/views/messenger-mixin", "shared/messaging/views/notification-modal", "shared/messaging/views/follow", "shared/messaging/templates", "shared/modal/views/modal"], function(e, t, i, n, s, a, o, r, l, d) {
		"use strict";
		var c = i.registerView("messaging").extend(t.extend({}, a, {
			defaultSettings: {
				messageType: "notifications",
				parent: function() {
					var t = new d({
						id: "notifications-modal",
						binding: ".notifications-button",
						modalTitle: "Notifications",
						headerContent: "<button class='button customize-button hidden' id='toggle-customize-button'>Customize</button>",
						modalFooter: '<p class="disclaimer">This is a beta version of notifications. <a class="user-action" href="mailto:messaging.feedback@nytimes.com?Subject=Notifications feedback">Send feedback &raquo;</a></p>',
						tailDirection: "up-right",
						tailTopOffset: -8,
						tailLeftOffset: -1,
						width: "360px",
						toggleSpeed: 1,
						fixedOverride: this.isFixed,
						openCallback: function() {
							this.$target.addClass("active"), this.subscribedAlready || (this.subscribe("nyt:comments-panel-opened", this.close), this.subscribe("nyt:loginmodal-open", this.close), "homepage" === this.pageManager.getApplicationName() ? this.subscribe("nyt:masthead-hidden", this.close) : this.subscribe("nyt:masthead-storytheme", this.close), this.subscribedAlready = !0), this.broadcast("nyt:messaging-notification-archive-opened", this)
						},
						closeCallback: function() {
							this.$target.removeClass("active"), this.broadcast("nyt:messaging-notification-archive-closed")
						}
					});
					return t.addToPage(), e("#notifications-modal").find(".modal-content")
				},
				template: "notificationsModal",
				fadeOutDelay: 3e3,
				trackingVersion: "ReaderActivity",
				timestampUpdateFreq: 3e4,
				truncateTextHeight: 34,
				isFixed: !0,
				scrollCheckHeight: 15
			},
			nytEvents: {
				"nyt:messaging-notification-archive-opened": "handleArchivePanelOpened",
				"nyt:messaging-notification-archive-closed": "handleArchivePanelClosed",
				"nyt:messaging-count-received": "updateCounter",
				"nyt:messaging-existing-message-update": "updateMessageView",
				"nyt:messaging-critical-alerts-move-furniture": "movePanelForOtherAlerts",
				"nyt:messaging-suggestions-move-furniture": "movePanelForAlerts",
				"nyt:messaging-follow-suggestions-received": "addSuggestedFollows",
				"nyt:messaging-followable-list-received": "createFollowableList",
				"nyt:messaging-cache-pull-over": "setCachePullOver",
				"nyt:messaging-notifications-navigate": "handleNavigationRequired",
				"nyt:messaging-notifications-panel-active": "setupPanel"
			},
			events: {
				"click .unsubscribe-button": "confirmUnfollowIntent",
				"click .unfollow-button": "confirmUnfollowed",
				"click .keep-following-button": "restoreOriginalFollowable",
				"click .undo-action-button": "undoUnfollowFollowable",
				"click .message-link": "handleMessageClicked"
			},
			prepareView: function() {
				t.bindAll(this, "trackArchiveAction"), this.notificationModal = new o, this.$el.find(".message-bed").append(l.notificationsModal({
					show: "default"
				})), this.$archivePanel = e("#notifications-modal"), this.$modalContent = this.$archivePanel.find(".modal-content"), this.$notificationsModal = this.$archivePanel.find(".notifications-modal"), this.$notificationsButton = e(".notifications-button"), this.messageCount = 0, this.archiveOpen = !1, this.timestampsUpdating = !1, this.sliding = !1, this.maxHeight = parseInt(this.$modalContent.css("max-height"), 10), this.isUnfollowing = !1, this.unfollowing = {
					model: void 0,
					$el: void 0
				}, this.cachePullOver = !1, this.modalsEnabled = !1, this.lastScrollCheck = 0, this.unreadMessages = [], this.subscribe(this.notificationModal, "nyt:messaging-notification-modal-clicked", this.handleMessageAcknowledged), this.subscribe(this.notificationModal, "nyt:messaging-notification-modal-closed", this.handleMessageDismissed), this.pageManager.setMeta("nyt:messaging-notifications-panel-active", "true"), this.broadcast("nyt:messaging-notifications-panel-active"), this.$el.show(), this.disablePageScrollOnHover()
			},
			afterMessageReceived: function(e) {
				var t, i, n = this.$archivePanel.is(":visible");
				e && (t = e.model.get("unread"), i = e.model.get("popup_unread"), t && (this.broadcast("nyt:messaging-count-received", 1), this.unreadMessages.push(e), !n && i && this.displayPopup(e)), this.hideDefaultNotification(), e.reveal(!0), n && (this.truncateCommentBodies(), this.markAppropriateMessagesRead()), this.addBottomBorder())
			},
			setCachePullOver: function() {
				this.cachePullOver = !0
			},
			displayPopup: function(e) {
				this.cachePullOver && this.modalsEnabled && this.notificationModal.render(e), e.model.setPopupRead()
			},
			markRead: function(e) {
				var t = this.active.messages[e];
				t.displayed()
			},
			handleMessageAcknowledged: function(e) {
				this.broadcast("nyt:messaging-modal-" + e + "-acknowledged")
			},
			handleMessageDismissed: function(e) {
				this.broadcast("nyt:messaging-modal-" + e + "-dismissed")
			},
			handleArchivePanelOpened: function() {
				var e = this;
				e.archiveOpen = !0, e.timestampsUpdating || (e.updateTimestamps(e), e.timestampsUpdating = setInterval(function() {
					e.updateTimestamps(e)
				}, e.timestampUpdateFreq)), e.markAppropriateMessagesRead(), e.truncateCommentBodies(), e.addBottomBorder(), e.trackArchiveAction("open")
			},
			handleArchivePanelClosed: function() {
				this.archiveOpen = !1, this.stopUpdatingTimestamps(), this.trackArchiveAction("close"), this.isUnfollowing && this.restoreOriginalFollowable()
			},
			isMessageVisible: function(e) {
				var t, i, n, s, a;
				return this.$modalContent.find(".follow-options").is(":visible") ? !1 : (t = this.$modalContent.offset().top, i = t + this.$modalContent.height(), n = e.$el.find(".message-title"), s = n.offset().top, a = s + n.height(), s >= t && i >= a)
			},
			markAppropriateMessagesRead: function() {
				var t, i, n, s, a, o = this,
					r = [];
				for (i = 0; i < this.unreadMessages.length; i++) s = this.unreadMessages[i], t = s.model.get("id"), a = this.isMessageVisible(s), n = s.model.get("unread"), a && n ? (s.displayed(this.options.fadeOutDelay), this.local(this, "nyt:messaging-message-" + this.options.id + "-displayed", t)) : !a && n && r.push(s);
				this.unreadMessages = r, this.watchingWhichMessagesAreSeen || (this.$modalContent.on("scroll", function() {
					var t = e(this).scrollTop(),
						i = Math.abs(t - o.lastScrollCheck),
						n = i / o.options.scrollCheckHeight > 1;
					o.unreadMessages.length > 0 && n && (o.markAppropriateMessagesRead(), o.lastScrollCheck = t)
				}), this.watchingWhichMessagesAreSeen = !0)
			},
			updateCounter: function(e) {
				var t, i;
				void 0 !== e && (t = this.messageCount + e, this.messageCount = Math.max(t, 0), i = {
					count: this.messageCount,
					delta: e
				}, this.broadcast("nyt:messaging-notification-count-update", i))
			},
			showDefaultNotification: function() {
				this.$el.find(".default-message").show()
			},
			hideDefaultNotification: function() {
				var e = this.$el.find(".message-default").closest(".message-container");
				"block" === e.css("display") && e.hide()
			},
			disablePageScrollOnHover: function() {
				this.$modalContent.on("mousewheel DOMMouseScroll", function(t) {
					var i = 0;
					"mousewheel" === t.type ? i = -1 * t.originalEvent.wheelDelta : "DOMMouseScroll" === t.type && (i = 40 * t.originalEvent.detail), i && (t.preventDefault(), e(this).scrollTop(i + e(this).scrollTop()))
				})
			},
			addBottomBorder: function() {
				var t = this.dimensions().height,
					i = parseInt(this.$modalContent.css("max-height"), 10);
				t > i && (e("#notifications-modal").find(".modal").addClass("scroll-active"), this.$modalContent.find(".comment-text").data("truncate", !0))
			},
			handleMessageClicked: function(t) {
				var i, n, s, a, o;
				t.preventDefault(), i = e(t.currentTarget), n = i.closest(".message-container"), a = n.data("messageId"), o = this.collection.get(a), s = this.trackingAppendParams(i.attr("href"), {
					module: "notification",
					version: "NotificationPanel",
					action: "click",
					region: "TopBar",
					eventName: "click",
					contentCollection: o ? o.get("tag") : "",
					contentPlacement: this.determineMessagePlacement(n)
				}), this.handleNavigationRequired(s)
			},
			handleNavigationRequired: function(e) {
				var t, i, n, s = window.location.href.split("#")[0] === e.split("#")[0];
				window.location.href = e, t = e.split("#")[1], t && s && (n = t.split("="), i = n[1], "permid" === n[0] && i && this.broadcast("nyt:community-commentspanel-open", i))
			},
			trackArchiveAction: function(e) {
				this.trackingTrigger("notification-events", {
					module: "notification",
					version: "NotificationPanel",
					action: e,
					region: "TopBar"
				}, "interaction")
			},
			confirmUnfollowIntent: function(t) {
				var i, n, s = e(t.currentTarget).closest(".message-container"),
					a = this.collection.get(s.data("id"));
				this.trackInlineUnfollow("dismiss", s, a), this.isUnfollowing && this.restoreOriginalFollowable(), a.set("originalHTML", s.html()), t.preventDefault(), t.stopPropagation(), i = s.height(), s.css({
					height: i
				}), s.find(".unsubscribe-button").remove(), n = l.followConfirmation(a.toJSON()), s.find(".message").replaceWith(n), this.isUnfollowing = !0, this.unfollowing = {
					$el: s,
					model: a
				}
			},
			confirmUnfollowed: function(t) {
				var i, n = e(t.currentTarget).closest(".message-container"),
					s = this.collection.get(n.data("id")),
					a = s.get("tag");
				this.trackInlineUnfollow("unfollowing", n, s), t.preventDefault(), t.stopPropagation(), this.broadcast("nyt:messaging-unfollow-tag", a), i = l.followUnfollowed(s.toJSON()), n.css({
					height: "auto"
				}), n.find(".message").replaceWith(i), this.isUnfollowing = !1
			},
			restoreOriginalFollowable: function(t) {
				var i = t ? e(t.currentTarget).closest(".message-container") : this.unfollowing.$el,
					n = t ? this.collection.get(i.data("id")) : this.unfollowing.model;
				return t && (t.preventDefault(), t.stopPropagation()), t && t.currentTarget && e(t.currentTarget).hasClass("keep-following-button") && this.trackInlineUnfollow("keepfollowing", i, n), i.find(".message").replaceWith(n.get("originalHTML")), i.css({
					height: "auto"
				}), this.isUnfollowing = !1, n
			},
			undoUnfollowFollowable: function(t) {
				var i = e(t.currentTarget).closest(".message-container"),
					n = this.restoreOriginalFollowable(t),
					s = n.get("tag");
				this.trackInlineUnfollow("follow", i, n), this.broadcast("nyt:messaging-follow-tag", s)
			},
			updateMessageView: function(e) {
				var t, i, n = this.received.messages[e.id],
					s = n.model;
				t = s.get("unread"), s.applyMetadata(e.update), i = s.get("unread"), e.message && s.updateProperties(e.message), !t && i ? this.broadcast("nyt:messaging-count-received", 1) : t && !i && this.broadcast("nyt:messaging-count-received", -1), i ? (n.$el.detach(), n.render(), this.$el.find(".message-bed").prepend(n.$el), n.reveal(!0), this.archiveOpen && this.markAppropriateMessagesRead()) : n.render().reveal(!0)
			},
			movePanelForOtherAlerts: function(e) {
				var t;
				this.archiveOpen && (t = this.$archivePanel.find(".notifications-modal"), e(t))
			},
			updateTimestamps: function(t) {
				e(".notifications-modal .timestamp").each(function() {
					var i = e(this),
						n = 1e3 * parseInt(i.attr("datetime"), 10),
						s = t.prettyDate(n);
					s && i.html(s)
				})
			},
			stopUpdatingTimestamps: function() {
				this.updating && (clearInterval(this.updating), this.updating = !1)
			},
			addSuggestedFollows: function(e) {
				var t, i, n, s = this,
					a = s.$el.find(".follow-suggestions");
				for (i = 0; i < e.length; i += 1) t = e[i], n = new r({
					model: t
				}), a.append(n.render().$el)
			},
			createFollowableList: function(e) {
				var t, i, n, s = this;
				for (this.$archivePanel.find("#toggle-customize-button").removeClass("hidden"), this.$modalContent.append("<div class='follow-options'><h4 class='follow-options-heading'>Follow columns and columnists</h4></div>"), n = this.$modalContent.find(".follow-options"), t = 0; t < e.length; t += 1) i = new r({
					model: e[t]
				}), n.append(i.render().$el);
				this.$archivePanel.find(".modal-header").on("click", ".button", function(e) {
					e.preventDefault(), e.stopPropagation(), s.sliding || (s.sliding = !0, s.toggleFollowableView(e, function() {
						s.sliding = !1
					}))
				})
			},
			toggleFollowableView: function(e, t, i) {
				var n, s = this,
					a = this.$archivePanel.find(".modal-header");
				n = this.prepareToAnimateFollows(), i = i || 250, this.trackPanelCustomizeToggle(e, n.$showing), a.find("#toggle-customize-button").toggleClass("active"), n.wrapButton ? a.find(".modal-heading").wrap("<button class='button back-button'></button>") : a.find(".modal-heading").unwrap(), s.$modalContent.removeClass("scroll-active").css({
					height: n.destinationHeight
				}).addClass("is-animating"), n.$showing.addClass("is-animating").css({
					width: n.width,
					"max-height": s.maxHeight,
					left: n.moveShowingTo
				}), n.$toShow.addClass("is-animating").css({
					width: n.width,
					left: 0
				}), setTimeout(function() {
					n.scrollActive && s.$notificationsModal.addClass("scroll-active"), n.$showing.removeClass("is-animating scroll-active").css({
						display: "none"
					}), n.$toShow.removeClass("is-animating scroll-active").css({
						width: "auto"
					}), s.$modalContent.removeClass("is-animating").css({
						height: "auto"
					}), t && t()
				}, i)
			},
			prepareToAnimateFollows: function() {
				var e, t, i, n, s, a = this.$modalContent.find(".follow-options"),
					o = this.$modalContent.width(),
					r = this.$modalContent.height(),
					l = this.maxHeight;
				return n = !1, s = a.is(":hidden"), e = s ? this.$el : a, t = s ? a : this.$el, this.$modalContent.css({
					height: r
				}), l = t.css({
					display: "inherit",
					width: o
				}).height(), l >= this.maxHeight ? (t.addClass("scroll-active"), n = !0) : this.$notificationsModal.removeClass("scroll-active"), r === this.maxHeight && e.addClass("scroll-active"), l = l > this.maxHeight ? this.maxHeight : l, i = s ? -o : o, {
					$showing: e,
					$toShow: t,
					wrapButton: s,
					destinationHeight: l,
					moveShowingTo: i,
					width: o,
					scrollActive: n
				}
			},
			truncateCommentBodies: function() {
				var t = this;
				this.$modalContent.find(".comment-text").each(function() {
					var i = e(this);
					i.data("truncate") && (t.truncateText(i, t.options.truncateTextHeight), i.data("truncate", !1))
				})
			},
			determineMessagePlacement: function(t) {
				return e(".notifications-modal .notifications .message-container:visible").index(t) + 1
			},
			trackPanelCustomizeToggle: function(t, i) {
				i && this.trackingTrigger("notification-events", {
					module: "follow",
					state: i.hasClass("follow-options") ? "customize" : "notification",
					action: "click",
					version: "NotificationPanel",
					region: "TopBar",
					contentId: e(t.currentTarget).hasClass("back-button") ? "back-button" : "customize-button",
					eventName: "click"
				}, "interaction")
			},
			trackInlineUnfollow: function(e, t, i) {
				var n;
				e && (n = i.get("tag").split("."), this.trackingTrigger("notification-events", {
					module: "follow",
					state: "notification-unfollow",
					action: "click",
					contentId: n[1],
					version: n[0],
					eventName: e,
					region: "TopBar",
					contentPlacement: this.determineMessagePlacement(t)
				}, "interaction"))
			},
			handleUserReady: function() {
				this.pageManager.flag("followingRelease") && (this.isUserLoggedIn = n.isLoggedIn(), s.isUserLoggedIn = n.isLoggedIn(), this.setupPanel())
			},
			revealBell: function() {
				this.$notificationsButton.removeClass("hidden")
			},
			setupPanel: function() {
				var e = this;
				if (this.pageManager.getMeta("nyt:messaging-notifications-panel-active")) {
					if (!this.pageManager.flag("followingRelease")) return this.revealBell(), void(this.modalsEnabled = !0);
					if (void 0 !== this.isUserLoggedIn) return this.isUserLoggedIn ? (this.modalsEnabled = !0, this.pageManager.getMeta("nyt:messaging-user-has-ability-to-follow") ? void this.revealBell() : void this.subscribe("nyt:messaging-user-has-ability-to-follow", function() {
						e.revealBell()
					})) : (this.revealBell(), void this.handleAnonInteractions())
				}
			},
			handleAnonInteractions: function() {
				var e = this,
					t = (new Date).getTime() - 6e4;
				this.broadcast("nyt:notifications-instantiate-onboarding", {
					following: {
						"follow.whitelist": {
							start: t
						},
						"follow.onboard-welcome": {
							start: t
						}
					},
					footerOverride: '<button class="button login-button">Log in</button>',
					cbExtension: function(t) {
						var i, n, s, a = t.settings.instanceData ? t.settings.instanceData.type : null,
							o = "Notification";
						a && (i = t.settings.instanceData ? t.settings.instanceData.model : null, n = "Log in to follow", i && (n = n + " " + i.get("following"), s = "follow_button", o = "Follow"), t.$el.find(".login-button").on("click", function(t) {
							t.stopPropagation(), e.broadcast("nyt:notifications-onboarding-hide", {
								type: a
							}), e.trackingTrigger("tagx-auth-interaction", {
								module: o,
								state: e.isUserLoggedIn ? "logged in" : "logged out",
								eventName: "login click | " + o
							}), e.broadcast("nyt:loginmodal-open", {
								modalTitle: n,
								registrationPlatform: s || "follow_bell",
								moduleName: o
							})
						}))
					}
				}), this.$notificationsButton.hover(function() {
					e.anonOnboardingShown || (e.anonOnboardingShown = !0, e.broadcast("nyt:notifications-onboarding-show", {
						type: "welcome",
						binding: ".notifications-button",
						force: !0
					}))
				}), this.$notificationsButton.click(function(t) {
					t.stopPropagation(), e.broadcast("nyt:loginmodal-open", {
						modalTitle: "Log in to follow",
						registrationPlatform: "follow_bell",
						moduleName: "Notification"
					})
				})
			}
		}));
		return c
	}), define("shared/messaging/instances/messaging", ["foundation/views/page-manager", "shared/messaging/views/critical-alerts", "shared/messaging/views/suggestions", "shared/messaging/views/announcements", "shared/messaging/views/notifications"], function(e, t, i, n, s) {
		"use strict";
		var a = e.getMeta("nyt:messaging-user-has-ability-to-follow"),
			o = function() {
				e.flag("followFeature") && !e.$html.hasClass("has-cover-media") && new s({
					id: "notifications",
					notifyWhen: "nyt:messaging-notification-received nyt:messaging-follow-notice-received"
				})
			};
		(!e.$html.hasClass("app-interactive") || e.$html.hasClass("page-interactive-default")) && !e.$html.hasClass("lt-ie9") && !e.$html.hasClass("template-minimal") && e.getCurrentBreakpoint() >= 120 && (e.getCurrentBreakpoint() >= 1010 && (new i({
			id: "suggestions",
			notifyWhen: "nyt:messaging-velcro-received"
		}), new t({
			id: "breaking-news-alerts",
			notifyWhen: "nyt:messaging-breaking-news-received",
			expiration: 20,
			dismissAcknowledged: "homepage" !== e.getApplicationName(),
			trackingVersion: "BreakingNews"
		}), new t({
			id: "account-alerts",
			notifyWhen: "nyt:messaging-account-alert-received",
			expiration: 10,
			trackingVersion: "UserAccounts"
		}), new n({
			id: "announcements",
			notifyWhen: "nyt:messaging-video-received"
		})), a || e.flag("followingRelease") ? o() : e.listenToOnce(e, "nyt:messaging-user-has-ability-to-follow", o))
	}), define("shared/mediaviewer/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.bigAd3 = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="BigAd3" class="ad big-ad3" style="display:none;"></div>';
			return __p
		}, templates.continueButton = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="media-viewer-continue" style="display:none;">\n<span class="continue-text"> ' + (null == (__t = message) ? "" : __t) + ' </span>\n<div class="continue-arrow arrow-right">\n<div class="arrow-conceal"></div>\n</div>\n</div>';
			return __p
		}, templates.image = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<figure class="media-viewer-asset" style="visibility:hidden;">\n<img src="' + (null == (__t = src) ? "" : __t) + '" data-caption="" style="opacity:0;" />\n<nav class="image-navigation previous">\n<span class="visually-hidden">Go to previous slide</span>\n</nav>\n<nav class="image-navigation next">\n<span class="visually-hidden">Go to next slide</span>\n</nav>\n<figcaption class="caption" style="display:none;">\n<span class="caption-text">\n' + (null == (__t = caption) ? "" : __t) + '\n</span>\n<span class="credit">\n' + (null == (__t = credit) ? "" : __t) + "\n</span>\n</figcaption>\n</figure>";
			return __p
		}, templates.mediaViewer = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<aside id="media-viewer" class="media-viewer" style="display:none;">\n<button class="button close-button"><i class="icon"></i><span class="visually-hidden">Close this overlay</span></button>\n<h2 class="media-viewer-headline"></h2>\n<div class="media-viewer-wrapper"></div>\n<nav class="media-viewer-nav">\n<div class="media-viewer-counter"></div>\n<div class="media-viewer-previous">\n<span class="visually-hidden">Go to previous</span>\n<div class="arrow arrow-left">\n<div class="arrow-conceal"></div>\n</div>\n</div>\n<div class="media-viewer-next">\n<span class="visually-hidden">Go to next</span>\n<div class="arrow arrow-right">\n<div class="arrow-conceal"></div>\n</div>\n</div></nav>\n<div class="loader-container" style="display:none;">\n<div class="loader loader-t-logo-32x32-ecedeb-ffffff"><span class="visually-hidden">Loading...</span></div>\n</div>\n</aside>';
			return __p
		}, templates.mediaViewerIcon = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="' + (null == (__t = classes) ? "" : __t) + '">\n<i class="icon sprite-icon"></i>\n</div>';
			return __p
		}, templates.video = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<figure class="media-viewer-asset media-viewer-video media video" data-videoId="' + (null == (__t = videoId) ? "" : __t) + '" style="visibility:hidden;">\n<figcaption class="caption">\n<span class="credit">\n' + (null == (__t = credit) ? "" : __t) + "\n</span>\n</figcaption>\n</figure>";
			return __p
		}, templates
	}), define("shared/mediaviewer/views/media-viewer", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/views/base-view", "shared/mediaviewer/templates"], function(e, t, i, n, s, a) {
		"use strict";
		var o = s.registerView("media-viewer").extend({
			templates: a,
			collection: new n,
			speed: 400,
			assetIndex: 0,
			stepsTaken: 0,
			marginForImage: 160,
			clickableElements: ["img", "nav div", ".caption", ".credit", ".media-viewer-video", ".video-share span", ".video-share i.icon", ".video-share a", ".image-navigation"],
			candidateClass: "media-viewer-candidate",
			overlayClass: "media-action-overlay",
			slideshowClass: "slideshow.promo.launch-media-viewer",
			isVideo: !1,
			videoId: 0,
			contentType: "",
			$prevArrow: e(),
			$nextArrow: e(),
			settings: {
				minWidth: 700,
				minHeight: 550,
				topMargin: 60,
				basicMargin: 30,
				captionGutter: 15,
				navGutter: 45,
				captionRatio: .8,
				imageAspectRatio: 1.3,
				mobileBreakpoint: 765
			},
			events: {
				"click .media-viewer-previous": "prevAsset",
				"click .media-viewer-next": "nextAsset",
				"click .image-navigation.previous": "prevAsset",
				"click .image-navigation.next": "nextAsset",
				click: "decideClose",
				"mouseenter .image-navigation.previous": "lightPrevArrow",
				"mouseleave .image-navigation.previous": "unLightPrevArrow",
				"mouseenter .image-navigation.next": "lightNextArrow",
				"mouseleave .image-navigation.next": "unLightNextArrow"
			},
			nytEvents: {
				"nyt:page-key-esc": "forceClose",
				"nyt:page-resize-after": "renderFromResize",
				"nyt:mediaviewer-left": "prevAsset",
				"nyt:mediaviewer-right": "nextAsset",
				"nyt:open-media-viewer": "renderForEmbeddedSlideshow",
				"nyt:route:slideshow": "initFromDeepLink"
			},
			initialize: function() {
				t.bindAll(this, "renderForSlideshow", "renderFromSymbol", "renderFromClick", "writeVideoTemplateToViewer", "nextAsset", "prevAsset", "pinchClose"), this.pageManager.addRoute("slideshow/:slideshowId(/:imageId)", "slideshow"), this.setElement(this.templates.mediaViewer()), this.subscribe("nyt:slideshow-ad-render", this.renderSlideshowAd)
			},
			handleDomReady: function() {
				this.$body.on("click", "." + this.slideshowClass, this.renderForSlideshow).on("click", "." + this.overlayClass, this.renderFromSymbol).on("click", "." + this.candidateClass, this.renderFromClick), this.hammer && (this.hammer(this.el).on("swiperight", this.prevAsset), this.hammer(this.el).on("swipeleft", this.nextAsset), this.hammer(this.el).on("pinch", this.pinchClose)), this.$candidates = e("." + this.candidateClass), this.$headline = this.$(".media-viewer-headline"), this.$wrapper = this.$(".media-viewer-wrapper"), this.$counter = this.$(".media-viewer-counter"), this.$nav = this.$(".media-viewer-nav"), this.$body.find("#main").append(this.$el), this.$prevArrow = this.$el.find(".media-viewer-previous"), this.$nextArrow = this.$el.find(".media-viewer-next"), this.addViewerIcon(), this.trackingBaseData = {
					action: "click",
					contentCollection: this.pageManager.getMeta("article:section"),
					region: "Body"
				}, this.pageManager.checkRoute()
			},
			initFromDeepLink: function(t) {
				var i, n = t[0],
					s = t.length > 1 ? parseInt(t[1], 10) : null,
					a = e("#slideshow-" + n);
				return a.size() > 0 ? (this.getAssetsFromJSON(a), s && (i = this.collection.findWhere({
					id: s
				})), "undefined" == typeof i && (i = this.collection.at(0)), this.$el.addClass("theme-dark"), this.changeLoader("dark"), this.contentType = "slideshow", this.assetIndex = this.collection.indexOf(i), void this.render(i)) : void 0
			},
			addViewerIcon: function() {
				var t = this.templates.mediaViewerIcon({
					classes: this.overlayClass
				});
				this.$candidates.each(function() {
					e(this).after(t)
				})
			},
			changeLoader: function(e) {
				var t = this.$el.find(".loader"),
					i = "loader-t-logo-32x32-ecedeb-ffffff",
					n = "loader-t-logo-32x32-333333-121212";
				"dark" === e ? t.removeClass(i).addClass(n) : "light" === e && t.removeClass(n).addClass(i)
			},
			getDimension: function(e, t, i, n) {
				var s = this.pageManager.getViewport(),
					a = s.width - i,
					o = s.height - n;
				return e > a && (t *= a / e, e = a), t > o && (e *= o / t, t = o), {
					width: Math.round(e),
					height: Math.round(t)
				}
			},
			getAssetsFromJSON: function(i) {
				var n = i.find("script").get(0).innerHTML,
					s = e.parseJSON(n),
					a = s.id;
				this.headline = s.headline, s = t.map(s.imageslideshow.slides, function(e) {
					var t, i = "",
						n = "";
					return e && e.image_crops && (t = e.image_crops, t.superJumbo ? i = t.superJumbo.url : t.jumbo ? i = t.jumbo.url : t.articleLarge ? i = t.articleLarge.url : t.slide ? i = t.slide.url : t.popup && (i = t.popup.url)), e && e.caption && (e.caption.full ? n = e.caption.full : e.caption["short"] && (n = e.caption["short"])), {
						id: e.data_id,
						src: i,
						caption: n,
						credit: e.credit
					}
				}), this.collection.reset(s), this.collection.slideshowId = a
			},
			getAssetsFromDOM: function() {
				var i, n = [];
				this.$candidates.each(function() {
					i = {
						src: e(this).data("mediaviewer-src"),
						caption: e(this).data("mediaviewer-caption"),
						credit: e(this).data("mediaviewer-credit")
					}, n.push(i)
				}), this.collection.reset(t.uniq(n, function(e) {
					return e.src
				}))
			},
			broadcastAd: function() {
				var e = "",
					t = 0 === this.assetIndex,
					i = this.collection.length,
					n = this.end();
				if (t && !n) e = "Slideshow_int";
				else {
					if (!(i > 3 && n)) return !1;
					e = "Slideshow_end"
				}
				return this.broadcast("nyt:slideshow-ad", {
					el: this.$wrapper,
					position: e
				}), this.adRendered
			},
			renderSlideshowAd: function(t) {
				var i, n, s, a, o, r, l;
				"slideshow" === this.contentType && (i = this, n = this.pageManager.getCurrentBreakpoint(), s = this.$wrapper.find(".ad-wrapper"), a = 2 * parseInt(s.css("padding-left"), 10), o = parseInt(t.get("width"), 10), r = parseInt(t.get("height"), 10), l = e(this.templates.continueButton({
					message: this.end() ? "RETURN TO ARTICLE" : "CONTINUE SLIDE SHOW"
				})), this.$adBtn = l, s.append(l).css({
					width: o,
					height: r,
					"margin-left": -(o + a) / 2,
					"margin-top": -(r + a) / 2
				}), this.$nav.find(".media-viewer-previous").hide(), this.$counter.hide(), this.$headline.text(this.headline || ""), this.adRendered = !0, this.toggleLoader(!1), this.start(), this.active(!0), l.show().on("click", function(e) {
					e.stopPropagation(), e.preventDefault(), i.renderAfterAd()
				}), n >= 1e3 && 1030 > n && l.hide())
			},
			renderAfterAd: function() {
				this.dismissAd(), this.render()
			},
			dismissAd: function() {
				this.$adBtn.off("click").hide(), this.$wrapper.html(""), this.$counter.show(), this.$nav.find(".media-viewer-previous").show(), this.adRendered = !1
			},
			renderForSlideshow: function(t) {
				var i;
				e(t.target).hasClass("skip-to-text-link") || (i = e(t.currentTarget), "modal" === i.data("media-action") && (this.assetIndex = 0, this.$el.addClass("theme-dark"), this.changeLoader("dark"), this.getAssetsFromJSON(i), this.contentType = "slideshow", this.render()))
			},
			renderForEmbeddedSlideshow: function(e, t) {
				this.assetIndex = t, this.$el.addClass("theme-dark"), this.changeLoader("dark"), this.getAssetsFromJSON(e), this.contentType = "embedded-slideshow", this.render()
			},
			renderFromSymbol: function(t) {
				e(t.currentTarget).siblings("." + this.candidateClass).trigger("click")
			},
			renderFromResize: function() {
				var t;
				this.adRendered || (this.isActive && this.isVideo ? (t = e("figure.media-viewer-video"), this.handleVideo(t)) : this.isActive && this.render())
			},
			renderFromClick: function(t) {
				var i;
				this.getAssetsFromDOM(), i = this.collection.findWhere({
					src: e(t.target).data("mediaviewer-src")
				}), this.assetIndex = this.collection.indexOf(i), this.contentType = "images", this.render(i)
			},
			renderForVideo: function(e, t) {
				this.videoModel = e, this.videoCallback = t, this.$el.addClass("theme-dark"), this.changeLoader("dark"), this.isVideo = !0, this.render(e)
			},
			writeVideoTemplateToViewer: function() {
				var t = this.videoModel ? this.videoModel.get("videoId") : this.videoId,
					i = this.$body.find("figure[data-videoid=" + t + "] .video-credit"),
					n = e(this.templates.video({
						videoId: t,
						credit: i.html()
					}));
				this.handleVideo(n), this.$wrapper.html(n), this.pageManager.isMobile() ? "function" == typeof this.videoCallback && this.videoCallback() : this.broadcast("nyt:mediaviewer-open")
			},
			render: function(e) {
				var t = this;
				if (t.toggleLoader(!0), !this.broadcastAd()) {
					if (this.isVideo) this.renderVideo();
					else {
						if (this.end()) return t.toggleLoader(!1), void this.close(!0);
						this.renderImage(e)
					}
					this.active(!0), this.$body.css("overflow", "hidden"), this.$document.on("touchmove", function(e) {
						e.preventDefault()
					}), this.setCounter(), this.toggleNav()
				}
			},
			renderVideo: function() {
				var e, t = this;
				this.pageManager.isMobile() ? (this.start(), this.writeVideoTemplateToViewer()) : this.start(this.writeVideoTemplateToViewer), t.toggleLoader(!1), e = {
					module: "Video",
					version: "MediaViewer",
					eventName: "PlayVideo"
				}, this.trackingTrigger("media-viewer-play-video", e), this.trackingComscorePVC(e)
			},
			renderImage: function(t) {
				var i, n, s, a, o, r = this,
					l = this.collection.slideshowId;
				t = t || this.collection.at(this.assetIndex), i = t.get("id"), this.isActive || (this.start(), this.$headline.text(this.headline || ""), this.broadcast("nyt:mediaviewer-open"), a = {
					module: this.getTrackingModule(),
					version: this.getTrackingVersion(),
					eventName: this.getTrackingOpenEventName(),
					mdata: {
						currentSlide: this.assetIndex + 1,
						totalSlides: this.collection.length
					}
				}, this.trackingTrigger("media-viewer-opened", a), this.trackingComscorePVC(a)), n = e(this.templates.image({
					src: t.get("src"),
					caption: t.get("caption"),
					credit: t.get("credit")
				})), s = e(this.templates.bigAd3()), n.find("img").load(function() {
					r.handleImg(n, s), r.toggleLoader(!1)
				}), l && i && (o = "slideshow/" + l + "/" + i, this.pageManager.navigateRoute(o, {
					trigger: !1,
					replace: !0
				})), this.$wrapper.html(n), this.$wrapper.append(s)
			},
			start: function(e) {
				e = e || function() {}, this.$el.fadeIn(this.speed, e)
			},
			toggleNav: function() {
				var e = this.$("nav"),
					t = this.isMobile();
				1 === this.collection.length || this.isVideo || t && this.pageManager.flag("mobileMediaViewer") ? e.hide() : e.show()
			},
			toggleLoader: function(e) {
				var t = this.$el.find(".loader-container");
				e ? t.show() : t.hide()
			},
			handleImg: function(i, n) {
				var s, a, o, r, l, d, c, h, u, m, p, g, f = this.settings,
					v = i.closest(".media-viewer"),
					b = i.find("img"),
					y = v.find("figcaption.caption"),
					_ = e("nav.media-viewer-nav"),
					w = {},
					k = this.getElementDimensions(_),
					C = this.getElementDimensions(b),
					T = t.extend({}, this.pageManager.getViewport()),
					S = T.width,
					x = this.$html.hasClass("tone-feature"),
					M = C.width / C.height,
					A = T.width / (T.height - k.height - f.topMargin - f.basicMargin),
					P = M > A ? "below" : "right",
					I = this.isMobile();
				I && this.pageManager.flag("mobileMediaViewer") ? (v.addClass("mobile"), i.after(y), this.changeLoader("dark"), T = {
					width: window.innerWidth,
					height: window.innerHeight
				}, m = T.width / T.height, u = m > M ? {
					width: "auto",
					height: "100%"
				} : {
					width: "100%",
					height: "auto"
				}, C = this.getElementDimensions(b), l = T.height / 2 - C.height / 2, r = T.width / 2 - C.width / 2, i.css({
					visibility: "visible",
					top: l + "px",
					left: r + "px"
				}).css(u), b.animate({
					opacity: 1
				}, this.speed), y.css({
					display: "block",
					opacity: 0
				}).animate({
					opacity: 1
				}, this.speed)) : (this.pageManager.flag("mobileMediaViewer") && (v.removeClass("mobile"), i.append(y), this.changeLoader("light")), T.height = T.height < 150 ? 150 : T.height, T.width = T.width < 100 ? 100 : T.width, this.$headline.css({
					"margin-right": 0
				}), S >= 1280 && x && "slideshow" === this.contentType && (T.width = S - 330, this.$headline.css({
					"margin-right": 330
				}), this.loadBigAd(), n.show(), M > f.imageAspectRatio && (P = "below")), "right" === P ? (c = this.getImageSizeAvailable(y, k, P, T), h = this.getCaptionSize(y, k, P), w = this.getScaledImage(C, c), a = c.width / c.height, a > M ? (p = w.width < C.width ? w.width : C.width, g = c.height < C.height ? c.height : C.height, i.css({
					height: g,
					width: p
				}), y.css({
					left: p + f.captionGutter,
					width: h.width,
					height: h.height
				}), (T.width - 2 * f.basicMargin - w.width) / 2 > h.width ? (r = Math.round((T.width - w.width) / 2), i.css({
					left: r,
					top: f.topMargin
				}), n.css({
					"margin-top": f.topMargin
				}), o = r < 2 * (k.width + f.basicMargin), d = f.topMargin + c.height + f.navGutter + k.height + f.basicMargin > T.height, s = o && d ? k.height + f.navGutter + f.basicMargin : f.basicMargin, y.css({
					bottom: s,
					width: h.width
				})) : (r = Math.round((T.width - (w.width + h.width)) / 2), i.css({
					left: r,
					top: f.topMargin
				}), n.css({
					"margin-top": f.topMargin
				}), y.css({
					bottom: f.basicMargin,
					width: h.width,
					height: h.height
				}))) : (l = Math.round((T.height - w.height - f.topMargin) / 2), l = Math.max(l, f.topMargin), r = Math.round((T.width - (c.width + h.width + f.captionGutter)) / 2), p = c.width < C.width ? c.width : C.width, g = w.height < C.height ? w.height : C.height, i.css({
					width: p,
					height: g,
					left: r,
					top: l
				}), n.css({
					"margin-top": l
				}), y.css({
					width: h.width,
					bottom: f.basicMargin,
					left: p + f.captionGutter
				}), h.height > w.height && y.css({
					height: w.height
				}))) : (h = this.getCaptionSize(y, k, P), c = this.getImageSizeAvailable(y, k, P, T), w = this.getScaledImage(C, c), a = c.width / c.height, a > M ? (r = Math.round((T.width - w.width) / 2), i.css({
					height: c.height,
					width: w.width,
					left: r,
					top: f.topMargin
				}), n.css({
					"margin-top": f.topMargin
				}), y.css({
					"max-width": 550,
					width: c.width - k.width,
					"margin-settings.topMargin-top": f.captionGutter
				})) : (r = Math.round((T.width - c.width) / 2), l = Math.round((T.height - (w.height + h.height + f.captionGutter) - f.topMargin) / 2), l = Math.max(l, f.topMargin), i.css({
					height: w.height,
					width: c.width,
					left: r,
					top: l
				}), n.css({
					"margin-top": l
				}), y.css({
					width: c.width,
					"margin-topmargin-top": f.captionGutter
				}))), i.css({
					visibility: "visible"
				}), n.css({
					width: 300,
					height: 250,
					"margin-left": 30,
					"margin-right": 30,
					"float": "right"
				}), y.css({
					display: "block",
					opacity: 0
				}).animate({
					opacity: 1
				}, this.speed), b.animate({
					opacity: 1
				}, this.speed))
			},
			isMobile: function() {
				return e(window).width() < this.settings.mobileBreakpoint
			},
			loadBigAd: function() {
				var e = !0;
				this.loadedBigAd ? this.broadcast("nyt:ad-library:dfp:refresh", "BigAd3", e) : (this.loadedBigAd = !0, this.broadcast("nyt:ad-library:dfp:queue-placement", "BigAd3", [
					[300, 250],
					[300, 600]
				]))
			},
			getElementDimensions: function(e) {
				return {
					width: e.width(),
					height: e.height()
				}
			},
			getScaledImage: function(e, t) {
				return {
					width: Math.round(e.width / e.height * t.height),
					height: Math.round(e.height / e.width * t.width)
				}
			},
			getImageSizeAvailable: function(e, t, i, n) {
				var s = this.getCaptionSize(e, t),
					a = this.settings,
					o = n.height - a.topMargin - a.basicMargin,
					r = n.width - 2 * a.basicMargin;
				return "right" === i ? r -= s.width + a.captionGutter : "below" === i && (o -= s.height + a.captionGutter), {
					width: r,
					height: o
				}
			},
			getCaptionSize: function(e, t, i) {
				var n = this.getElementDimensions(e),
					s = this.settings;
				return n.width = Math.floor(Math.sqrt(n.width * n.height)), n.height = n.width, n.width = Math.max(n.width, t.width), "right" === i ? (n.height = Math.round(n.height * (1 / s.captionRatio)), n.width = Math.max(Math.round(n.width * s.captionRatio), t.width)) : "below" === i && (n.height = e.height(), n.width = Math.round(n.width * (1 / s.captionRatio))), n
			},
			handleVideo: function(e) {
				var t = this.pageManager.getViewport(),
					i = Math.round(t.width),
					n = Math.round(t.width * (9 / 16)),
					s = this.getDimension(i, n, 0, 70);
				e.css({
					visibility: "visible",
					width: s.width,
					height: s.height,
					"margin-left": -s.width / 2,
					"margin-top": -(s.height / 2 - 30),
					opacity: 1
				})
			},
			lightPrevArrow: function() {
				this.unLightNextArrow(), this.$prevArrow.addClass("hover")
			},
			unLightPrevArrow: function() {
				this.$prevArrow.removeClass("hover")
			},
			lightNextArrow: function() {
				this.unLightPrevArrow(), this.$nextArrow.addClass("hover")
			},
			unLightNextArrow: function() {
				this.$nextArrow.removeClass("hover")
			},
			nextAsset: function(e) {
				var t, i;
				return e && (this.doClose = "swipeleft" !== e.type), this.adRendered ? void this.renderAfterAd() : (this.unLightPrevArrow(), this.moveIndex(1), this.render(), t = this.assetIndex + 1, i = {
					module: this.getTrackingModule(),
					version: this.getTrackingVersion(),
					eventName: "NextAsset-" + t + (t === this.collection.length ? "-Finish" : ""),
					mdata: {
						currentSlide: t,
						totalSlides: this.collection.length
					}
				}, this.trackingTrigger("media-viewer-next-image", i), void this.trackingComscorePVC(i))
			},
			prevAsset: function(e) {
				var t, i;
				e && (this.doClose = "swiperight" !== e.type), this.unLightNextArrow(), this.moveIndex(-1), this.render(), t = this.assetIndex + 1, i = {
					module: this.getTrackingModule(),
					version: this.getTrackingVersion(),
					eventName: "PrevAsset-" + t + (t === this.collection.length ? "-Finish" : ""),
					mdata: {
						currentSlide: t,
						totalSlides: this.collection.length
					}
				}, this.trackingTrigger("media-viewer-prev-image", i), this.trackingComscorePVC(i)
			},
			moveIndex: function(e) {
				var t = this.assetIndex,
					i = this.collection.length;
				t += e, this.stepsTaken += e, t === i ? t = 0 : -1 === t && (t = i - 1), this.assetIndex = t
			},
			setCounter: function(e, t) {
				e = e || this.assetIndex, t = t || this.collection.length, this.$counter.html(e + 1 + " of " + t)
			},
			pinchClose: function() {
				this.close(!0)
			},
			decideClose: function(t) {
				var i = e(t.target),
					n = this.clickableElements.join(", "),
					s = i.is(n),
					a = this.isMobile();
				return a && !i.hasClass("close-button") && 0 === i.closest(".close-button").length ? void this.toggleCaption() : void(s || this.close(!0))
			},
			toggleCaption: function() {
				var e = this.$el.find("figcaption");
				e.fadeToggle(500)
			},
			forceClose: function() {
				this.close(!0)
			},
			close: function(e) {
				var t = this.$el,
					i = this;
				return this.isVideo && (this.videoId = 0, this.isVideo = !1), e && (this.doClose = !0), this.doClose ? (this.adRendered && this.dismissAd(), this.active(!1), this.stepsTaken = 0, this.assetIndex = 0, this.destroyHeadline(), this.$body.css("overflow", ""), this.$document.off("touchmove"), this.pageManager.clearRoute(), void this.$el.fadeOut(this.speed, function() {
					t.removeClass("theme-dark"), i.changeLoader("light"), i.broadcast("nyt:mediaviewer-close")
				})) : void(this.doClose = !0)
			},
			destroyHeadline: function() {
				this.$headline.empty(), this.headline = null
			},
			end: function() {
				return Math.abs(this.stepsTaken) === this.collection.length
			},
			active: function(e) {
				this.broadcast("nyt:mediaviewer-visibility", e), this.pageManager.setMeta("mediaviewer_isVisible", e), this.isActive = e
			},
			getTrackingModule: function() {
				var e = "";
				return "images" === this.contentType ? e = "ImageViewer" : ("embedded-slideshow" === this.contentType || "slideshow" === this.contentType) && (e = "Slideshow"), e
			},
			getTrackingVersion: function() {
				var e = "";
				return "slideshow" === this.contentType ? e = "MediaViewer-Promo" : "embedded-slideshow" === this.contentType ? e = "MediaViewer-NonPromo" : "images" === this.contentType && (e = "MediaViewer"), e
			},
			getTrackingOpenEventName: function() {
				return "images" === this.contentType ? "OpenImageViewer" : "OpenSlideshow"
			}
		});
		return o
	}), define("shared/mediaviewer/instances/media-viewer", ["shared/mediaviewer/views/media-viewer"], function(e) {
		"use strict";
		return new e
	}), define("shared/whatsnext/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.relatedCoverage = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", _.each(collection, function(e, t) {
				__p += '\n<li>\n<article class="story theme-summary ' + (null == (__t = _.isEmpty(e.getCrop("mediumThreeByTwo210")) ? "no-thumb" : "") ? "" : __t) + '">\n<a href="' + (null == (__t = e.getLink()) ? "" : __t) + '" data-rref="">\n', _.isEmpty(e.getCrop("mediumThreeByTwo210")) ? (__p += "\n", e.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = e.get("kicker")) ? "" : __t) + "</h3>\n"), __p += '<h2 class="story-heading">' + (null == (__t = e.get("headline")) ? "" : __t) + '</h2>\n<time class="dateline" datetime="' + (null == (__t = e.get("datetime")) ? "" : __t) + '">' + (null == (__t = e.get("pubdate")) ? "" : __t) + "</time>", (e.get("description") || e.get("summary")) && (__p += '\n<p class="summary">' + (null == (__t = e.get("description") || e.get("summary")) ? "" : __t) + "</p>\n"), __p += "") : (__p += '\n<div class="wide-thumb">\n<img src="' + (null == (__t = e.getCrop("mediumThreeByTwo210").url || e.getCrop("mediumThreeByTwo210").content) ? "" : __t) + '" />\n</div>\n', e.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = e.get("kicker")) ? "" : __t) + "</h3>\n"), __p += '<h2 class="story-heading">' + (null == (__t = e.get("headline")) ? "" : __t) + '</h2>\n<time class="dateline" datetime="' + (null == (__t = e.get("pubdate")) ? "" : __t) + '">' + (null == (__t = e.get("pubdate")) ? "" : __t) + "</time>\n"), __p += "\n</a>\n</article>\n</li>\n"
			}), __p += "";
			return __p
		}, templates.relatedSlideshows = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", _.find(collection, function(e, t) {
				__p += "\n", 0 === t && (__p += "\n", _.isEmpty(e.getCrop("xlarge")) ? (__p += '\n<article class="story lede-slideshow no-thumb">\n<a href="' + (null == (__t = e.get("link")) ? "" : __t) + '" class="story-link" data="' + (null == (__t = className) ? "" : __t) + "-" + (null == (__t = t) ? "" : __t) + '">\n', e.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = e.get("kicker")) ? "" : __t) + "</h3>\n"), __p += '\n<h2 class="story-heading">' + (null == (__t = e.get("headline")) ? "" : __t) + "</h2>\n", e.get("summary") && (__p += '\n<p class="summary">' + (null == (__t = e.get("summary")) ? "" : __t) + "</p>\n"), __p += "\n</a>\n</article>\n") : (__p += '\n<article class="story lede-slideshow">\n<a href="' + (null == (__t = e.get("link")) ? "" : __t) + '" class="story-link" data="' + (null == (__t = className) ? "" : __t) + "-" + (null == (__t = t) ? "" : __t) + '">\n<div class="wide-thumb">\n<img src="' + (null == (__t = staticHost) ? "" : __t) + "/" + (null == (__t = e.getCrop("xlarge").url) ? "" : __t) + '" />\n<div class="media-action-overlay">\n<i class="icon sprite-icon"></i>\n</div>\n</div>\n', e.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = e.get("kicker")) ? "" : __t) + "</h3>\n"), __p += '\n<h2 class="story-heading">' + (null == (__t = e.get("headline")) ? "" : __t) + "</h2>\n", e.get("summary") && (__p += '\n<p class="summary">' + (null == (__t = e.get("summary")) ? "" : __t) + "</p>\n"), __p += "\n</a>\n</article> <!-- end lede-slideshow -->\n"), __p += "\n"), __p += "\n"
			}), __p += '\n<ul class="story-menu">\n', _.each(collection, function(e, t) {
				__p += '\n<li>\n<a href="' + (null == (__t = e.get("link")) ? "" : __t) + '" class="story-link" data="' + (null == (__t = className) ? "" : __t) + "-" + (null == (__t = t) ? "" : __t) + '">\n', _.isEmpty(e.getCrop("xlarge")) ? (__p += '\n<article class="story theme-summary no-thumb">\n', e.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = e.get("kicker")) ? "" : __t) + "</h3>\n"), __p += '<h2 class="story-heading">' + (null == (__t = e.get("headline")) ? "" : __t) + "</h2>\n", e.get("summary") && (__p += '\n<p class="summary">' + (null == (__t = e.get("summary")) ? "" : __t) + "</p>\n"), __p += "\n</article>\n") : (__p += '\n<article class="story theme-summary">\n<div class="wide-thumb">\n<img src="' + (null == (__t = staticHost) ? "" : __t) + "/" + (null == (__t = e.getCrop("xlarge").url) ? "" : __t) + '" />\n<div class="media-action-overlay">\n<i class="icon sprite-icon"></i>\n</div>\n</div>\n', e.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = e.get("kicker")) ? "" : __t) + "</h3>\n"), __p += '\n<h2 class="story-heading">' + (null == (__t = e.get("headline")) ? "" : __t) + "</h2>\n</article>\n"), __p += "\n</a>\n</li>\n"
			}), __p += "\n</ul>";
			return __p
		}, templates.whatsNextCollection = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<section id="whats-next-collection" class="whats-next-collection" data-module="collection" data-src="recg">\n<header>\n<div class="headings">\n<h2 class="section-heading"><a href="' + (null == (__t = collectionLink) ? "" : __t) + '">' + (null == (__t = subject) ? "" : __t) + "</a></h2>\n", tagLine && (__p += '\n<h3 class="tagline">' + (null == (__t = tagLine) ? "" : __t) + "</h3>\n"), __p += '\n</div>\n<div class="follow-button-placeholder" data-collection-id="column.' + (null == (__t = collectionId) ? "" : __t) + '"></div>\n</header>\n<ul class="menu story-menu">\n', _.each(articles, function(e) {
				__p += '\n<li>\n<a class="story-link" href="' + (null == (__t = e.link) ? "" : __t) + '" data-rref="">\n', e.image && !e.hideImage ? (__p += '\n<article class="story theme-summary">\n<div class="thumb"><img role="presentation" src="' + (null == (__t = e.image) ? "" : __t) + '" alt="" /></div>\n<h2 class="headline">\n', "video" === e.type && "36-hours" !== collectionId && (__p += '\n<i class="icon sprite-icon video-icon"></i>\n'), __p += "\n" + (null == (__t = e.title) ? "" : __t) + '\n</h2>\n<p class="summary">' + (null == (__t = e.description) ? "" : __t) + "</p>\n</article>\n") : __p += '\n<article class="story theme-summary no-thumb">\n<h2 class="headline">' + (null == (__t = e.title) ? "" : __t) + '</h2>\n<p class="summary">' + (null == (__t = e.description) ? "" : __t) + "</p>\n</article>\n", __p += "\n</a>\n</li>\n"
			}), __p += "\n</ul>\n</section>";
			return __p
		}, templates.whatsNextSection = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<section id="' + (null == (__t = className) ? "" : __t) + '" class="' + (null == (__t = className) ? "" : __t) + " layout-" + (null == (__t = items) ? "" : __t) + '" data-module="' + (null == (__t = trackingModule) ? "" : __t) + '" data-src="' + (null == (__t = trackingSrc) ? "" : __t) + '">\n<header>\n<h2 class="section-heading"><a href="' + (null == (__t = sectionUrl) ? "" : __t) + '" data="' + (null == (__t = className) ? "" : __t) + '-heading">' + (null == (__t = headingLabel) ? "" : __t) + '</a></h2>\n<p class="user-action"><a href="' + (null == (__t = sectionUrl) ? "" : __t) + '" data="' + (null == (__t = className) ? "" : __t) + '-action">' + (null == (__t = sectionLinkLabel) ? "" : __t) + ' &raquo;</a></p>\n</header><ul class="menu layout-horizontal theme-story">', _.each(collection, function(e, t) {
				__p += '\n<li>\n<a href="' + (null == (__t = e.getLink()) ? "" : __t) + '" class="story-link" data="' + (null == (__t = className) ? "" : __t) + "-" + (null == (__t = t) ? "" : __t) + '" ' + (null == (__t = e.get("promotional_media").type) ? "" : __t) + ">\n", _.isEmpty(e.getCrop("mediumThreeByTwo210")) ? (__p += '\n<article class="story theme-summary no-thumb">\n', e.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = e.get("kicker")) ? "" : __t) + "</h3>\n"), __p += '<h2 class="headline">' + (null == (__t = e.get("headline")) ? "" : __t) + "</h2>", (e.get("description") || e.get("summary")) && (__p += '\n<p class="summary">' + (null == (__t = e.get("description") || e.get("summary")) ? "" : __t) + "</p>\n"), __p += "\n</article>\n") : (__p += '\n<article class="story theme-summary">\n<div class="wide-thumb">\n<img src="' + (null == (__t = e.getCrop("mediumThreeByTwo210").url || e.getCrop("mediumThreeByTwo210").content) ? "" : __t) + '" />\n', (e.isVideo() || e.isSlideshow() || e.isPromoMediaTypeSlideshow() || e.isPromoMediaTypeVideo()) && (__p += '\n<div class="media-action-overlay">\n', e.isVideo() || e.isPromoMediaTypeVideo() ? __p += '\n<i class="icon sprite-icon icon-media-video-18x12-ffffff"></i>\n<span class="visually-hidden">Go to video</span>\n' : (e.isSlideshow() || e.isPromoMediaTypeSlideshow()) && (__p += '\n<i class="icon sprite-icon icon-media-slideshow-16x14-ffffff"></i>\n<span class="visually-hidden">Go to slideshow</span>\n'), __p += "\n</div>\n"), __p += "\n</div>\n", e.isVideo() && e.getVideoKicker() ? __p += '\n<h3 class="kicker">' + (null == (__t = e.getVideoKicker()) ? "" : __t) + "</h3>\n" : (__p += "\n", e.get("kicker") && (__p += '\n<h3 class="kicker">' + (null == (__t = e.get("kicker")) ? "" : __t) + "</h3>\n"), __p += "\n"), __p += '\n<h2 class="headline">' + (null == (__t = e.get("headline")) ? "" : __t) + "</h2>\n</article>\n"), __p += "\n</a>\n</li>\n"
			}), __p += "\n</ul>\n</section>";
			return __p
		}, templates
	}), define("shared/data/instances/most-emailed", ["foundation/views/page-manager", "shared/data/collections/most-popular"], function(e, t) {
		"use strict";
		return new t([], {
			type: "mostemailed"
		})
	}), define("shared/data/models/lda-article", ["underscore/nyt", "backbone/nyt", "shared/data/models/article"], function(e, t, i) {
		"use strict";
		var n = i.extend({
			getCrop: function(e) {
				var t, i, n = this.get("thumbs") ? this.get("thumbs") : [];
				for (i = 0; i < n.length; i += 1)
					if (t = n[i], t.type === e) return t;
				return null
			},
			getLink: function() {
				return this.get("id")
			},
			isVideo: function() {
				return "video" === this.getType()
			},
			getVideoKicker: function() {
				return this.get("section")
			},
			getType: function() {
				var e = "";
				return this.get("type") ? e = this.get("type") : this.get("item_type") && (e = this.get("item_type")), e.toLowerCase()
			}
		});
		return n
	}), define("shared/data/collections/lda-recommendations", ["backbone/nyt", "foundation/views/page-manager", "foundation/collections/base-collection", "shared/data/models/lda-article", "foundation/hosts", "underscore/nyt", "shared/data/helpers/collection-mixin"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = i.extend(a.extend({}, o, {
			model: n,
			url: s.personalizationHost + "/svc/recommendations/v3/related.jsonp",
			sync: function(i, n, s) {
				return s.dataType = "jsonp", s.jsonpCallback = "jsonLDA", s.jsonp = "callback", s.data = {
					access_key: "776ACB1E-6C7F-4702-9E18-CF329376F5A3",
					url: t.canonical
				}, e.sync(i, n, s)
			},
			parse: function(e) {
				return e && e.payload && e.payload.kw ? (a.map(e.payload.kw, function(e) {
					var t, i;
					if (e.link = e.id, e.thumbs && e.thumbs.length)
						for (e.promotional_media = {
								image: {
									image_crops: {}
								}
							}, t = 0; t < e.thumbs.length; t++) i = e.thumbs[t], i.url = i.content, i.format = i.type, e.promotional_media.image.image_crops[i.type] = i
				}), e.payload.kw) : null
			}
		}));
		return r
	}), define("shared/data/instances/lda-recommendations", ["shared/data/collections/lda-recommendations"], function(e) {
		"use strict";
		return new e
	}), define("shared/data/models/slideshow", ["underscore/nyt", "backbone/nyt"], function(e, t) {
		"use strict";
		var i = t.Model.extend({
			defaults: {
				headline: {
					main: ""
				},
				web_url: "",
				section: {
					display_name: ""
				},
				pub_date: "",
				snippet: "",
				multimedia: {}
			},
			initialize: function() {},
			getCrop: function(e) {
				var t, i, n = this.get("multimedia");
				for (t = 0; t < n.length; t++)
					if (i = n[t], i.subtype === e) return i
			}
		});
		return i
	}), define("shared/data/collections/slideshows-section", ["underscore/nyt", "backbone/nyt", "foundation/views/page-manager", "foundation/collections/base-collection", "shared/data/models/slideshow", "foundation/hosts", "shared/data/helpers/collection-mixin"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = n.extend(e.extend({}, o, {
			model: s,
			initialize: function() {
				var e = encodeURIComponent(this.pageManager.getMeta("article:section"));
				this.url = "http://query.nytimes.com/svc/add/v1/sitesearch.json?fq=type_of_material%3A%22slideshow%22%20AND%20section_name%3A%22" + e + "%22&sort=newest&offset=0"
			},
			sync: function(e, i, n) {
				return n.dataType = "json", n.cache = !0, t.sync(e, i, n)
			},
			parse: function(t) {
				var i = t.response.docs;
				return e.map(i, function(e) {
					e.imageHost = a.staticHost, e.link = e.web_url, e.headline = e.headline.main, e.summary = e.snippet, e.id = e.asset_id
				}), i
			}
		}));
		return r
	}), define("shared/data/instances/slideshows-section", ["jquery/nyt", "shared/data/collections/slideshows-section"], function(e, t) {
		"use strict";
		return new t
	}), define("shared/data/collections/slideshows-no-section", ["underscore/nyt", "backbone/nyt", "foundation/views/page-manager", "foundation/collections/base-collection", "shared/data/models/slideshow", "foundation/hosts", "shared/data/helpers/collection-mixin"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = n.extend(e.extend({}, o, {
			model: s,
			initialize: function() {
				this.url = "http://query.nytimes.com/svc/add/v1/sitesearch.json?fq=type_of_material%3A%22slideshow%22&sort=newest&offset=0"
			},
			sync: function(e, i, n) {
				return n.dataType = "json", n.cache = !0, t.sync(e, i, n)
			},
			parse: function(t) {
				var i = t.response.docs;
				return e.map(i, function(e) {
					e.imageHost = a.staticHost, e.link = e.web_url, e.headline = e.headline.main, e.summary = e.snippet, e.id = e.asset_id
				}), i
			}
		}));
		return r
	}), define("shared/data/instances/slideshows-no-section", ["jquery/nyt", "shared/data/collections/slideshows-no-section"], function(e, t) {
		"use strict";
		return new t
	}), define("shared/whatsnext/views/whats-next-factory", ["foundation/views/page-manager", "foundation/hosts", "shared/data/instances/most-emailed", "shared/data/instances/recommendations", "shared/data/instances/context", "shared/data/instances/top-news", "shared/data/instances/lda-recommendations", "shared/data/instances/slideshows-section", "shared/data/instances/slideshows-no-section", "shared/data/instances/nyt-collection"], function(e, t, i, n, s, a, o, r, l, d) {
		"use strict";
		var c = e.getMeta("article:section"),
			h = e.getMeta("CG"),
			u = c && 0 === c.indexOf("The "),
			m = t.www,
			p = {
				"context-6": {
					el: ".section-news",
					headingLabel: "More in " + c,
					sectionLinkLabel: "Go to " + (u ? "" : "the ") + c + " Section",
					collection: s,
					items: 6,
					template: "whatsNextSection",
					trackingModule: "MoreInSection"
				},
				"top-news-3": {
					el: ".top-news",
					headingLabel: "Top News",
					sectionLinkLabel: "Go to the Home Page",
					sectionUrl: m,
					collection: a,
					items: 3,
					template: "whatsNextSection",
					trackingModule: "TopNews"
				},
				"whats-next-collection-3": {
					el: ".whats-next-collection",
					sectionUrl: m,
					collection: d,
					items: 3,
					template: "whatsNextCollection"
				},
				"whats-next-collection-5": {
					el: ".top-news",
					sectionUrl: m,
					collection: d,
					items: 5,
					template: "relatedCoverage"
				},
				"top-news-6": {
					el: ".top-news",
					headingLabel: "Top News",
					sectionLinkLabel: "Go to the Home Page",
					sectionUrl: m,
					collection: a,
					items: 6,
					template: "whatsNextSection",
					trackingModule: "TopNews"
				},
				"top-news-5": {
					el: ".top-news",
					headingLabel: "More on NYTimes.com",
					sectionUrl: m,
					collection: a,
					items: 5,
					template: "relatedCoverage",
					tracking: "TopNews"
				},
				"most-emailed-6": {
					el: ".most-emailed",
					headingLabel: "Most Emailed",
					sectionLinkLabel: "Go to the Most Emailed Section",
					sectionUrl: m + "/most-popular-emailed",
					collection: i,
					items: 6,
					template: "whatsNextSection"
				},
				"recommendations-3": {
					el: ".recommendations",
					headingLabel: "Recommended for You",
					sectionLinkLabel: "Go to All Recommendations",
					sectionUrl: m + "/recommendations",
					collection: n,
					items: 3,
					template: "whatsNextSection",
					trackingModule: "Recommendation",
					trackingSrc: "recg"
				},
				"lda-3": {
					el: ".lda-context",
					headingLabel: "More in " + c,
					sectionLinkLabel: "Go to " + (u ? "" : "the ") + c + " Section",
					collection: o,
					sectionUrl: m + "/pages/" + h,
					items: 3,
					template: "whatsNextSection",
					trackingModule: "MoreInSection"
				},
				"slideshows-9": {
					el: ".top-news",
					collection: r,
					items: 9,
					template: "relatedSlideshows",
					trackingModule: "MoreInSection"
				},
				"slideshows-no-section-9": {
					el: ".top-news",
					collection: l,
					items: 9,
					template: "relatedSlideshows",
					trackingModule: "MoreInSection"
				}
			},
			g = {
				createTemplate: function(e) {
					return p[e]
				}
			};
		return g
	}), define("shared/page/helpers/nyt-collection-view-mixin", ["jquery/nyt", "foundation/helpers/utils"], function(e, t) {
		"use strict";
		var i = {
			assignRref: function(i, n, s) {
				var a, o;
				a = s ? e(s) : this.$el, o = ["collection", n, i].join("/"), a.find("a[data-rref]").removeAttr("data-rref").attr("href", function(e, i) {
					return t.appendQueryParams(i, {
						rref: o
					})
				})
			}
		};
		return i
	}), define("shared/whatsnext/views/whats-next", ["jquery/nyt", "underscore/nyt", "foundation/hosts", "foundation/views/base-view", "shared/whatsnext/templates", "foundation/models/user-data", "shared/whatsnext/views/whats-next-factory", "shared/page/helpers/nyt-collection-view-mixin"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = n.registerView("whats-next").extend(t.extend({}, r, {
			el: "#whats-next",
			events: {
				"click a": "handleLinkClick"
			},
			defaultSettings: {
				hasRendered: !1,
				whatsNextFactory: o,
				renderMethod: "html",
				fadeInEl: "#whats-next",
				enableTracking: !0,
				handlingDeferredImpressions: !1,
				deferredImpressions: {},
				fetchCount: 0
			},
			templates: s,
			isCollection: !1,
			initialize: function(e) {
				var i, n = this;
				if (t.bindAll(this, "loadData", "render"), this.pageManager.flag("standardizeWhatsNextCollection") && "1" === this.isUserVariant("standardizeWhatsNextCollection") && (this.defaultSettings.renderMethod = "append"), this.deferredImpressions = {}, this.handlingDeferredImpressions = !1, this.trackingBaseData = {
						action: "click",
						contentCollection: this.pageManager.getMeta("article:section"),
						region: "Footer",
						module: "WhatsNext",
						version: "WhatsNext",
						contentID: "WhatsNext"
					}, e = e ? e : {}, this.settings = t.extend(this.defaultSettings, this.getConfiguration(e), e), e && e.el && this.setElement(e.el), e.sections && e.sections.length)
					for (i = 0; i < e.sections.length && !this.isCollection; i++) "whats-next-collection-5" == e.sections[i] && (this.isCollection = !0);
				this.isCollection && (this.trackingBaseData.module = "NextInCollection", this.trackingBaseData.pgtype = this.pageManager.getMeta("og:type"), this.trackingBaseData.version = this.pageManager.getMeta("nyt-collection:type")), t.extend(this.templates, this.settings.templates), this.subscribe("nyt:ad-library:dfp:morein-ad-visible", function() {
					this.listenTo(this.pageManager, "nyt:page-breakpoint", this.handleBreakpoint), n.handleBreakpoint(n.pageManager.getCurrentBreakpoint())
				})
			},
			handleBreakpoint: function(t) {
				var i = e("#MoreIn");
				i.length > 0 && !i.is(":empty") && (1080 > t || this.pageManager.flag("simple") && 10011 > t ? this.hideAd() : this.displayAd())
			},
			getConfiguration: function(e) {
				var t = ["top-news-6", "recommendations-3"],
					i = ["top-news-6"],
					n = !1,
					s = this.pageManager.getMeta("nyt-collection:identifier");
				return this.pageManager.getMeta("errorpage") ? (t = ["most-emailed-6", "top-news-3"], i = ["most-emailed-6", "top-news-3"]) : this.pageManager.getMeta("article:section") && ("Archives" === this.pageManager.getMeta("article:section") ? (t = ["top-news-6"], n = ["top-news-3"]) : (t = ["context-6", "recommendations-3"], i = ["context-6", "recommendations-3"], n = ["context-6", "top-news-3"])), this.pageManager.flag("collectionsWhatsNext") && s && s.length && (t.unshift("whats-next-collection-3"), i.unshift("whats-next-collection-3"), n && n.unshift("whats-next-collection-3")), {
					sections: e.sections || a.isLoggedIn() ? t : i,
					fallback: e.fallback || n,
					sectionsCollections: e.sectionsCollections || [],
					fallbackCollections: e.fallbackCollections || [],
					uniqueSections: []
				}
			},
			handleDomReady: function() {
				this.shouldLoadWhatsNext() ? this.loadData() : this.subscribe("nyt:page-scroll", this.handleScrollCheck)
			},
			handleScrollCheck: function() {
				this.shouldLoadWhatsNext() && this.loadData()
			},
			shouldLoadWhatsNext: function() {
				return this.pageManager.isComponentVisible(this.$el) || this.$el.length > 0 && window.pageYOffset + window.innerHeight > this.$el.position().top - 200
			},
			loadData: function() {
				var e, t, i, n, s = this;
				for (this.stopSubscribing("nyt:page-scroll", this.handleScrollCheck), e = 0, t = this.settings.sections.length; t > e; e += 1) i = this.settings.whatsNextFactory.createTemplate(this.settings.sections[e]), this.settings.sectionsCollections.push(i), i.collection.loadData(), this.subscribeOnce(i.collection, "sync", s.fetchSuccess), this.settings.fallback && this.settings.fallback[e] ? (n = this.settings.whatsNextFactory.createTemplate(this.settings.fallback[e]), n.collection.loadData()) : n = null, this.settings.fallbackCollections.push(n);
				setTimeout(function() {
					s.settings.hasRendered || s.render()
				}, 1500)
			},
			fetchSuccess: function() {
				this.settings.fetchCount++, this.settings.fetchCount === this.settings.sections.length && this.render()
			},
			render: function() {
				var i, n, s, a, o, r, l, d, c, h = this,
					u = "",
					m = 80,
					p = 72,
					g = document.getElementById("applicationName"),
					f = g ? g.getAttribute("content") : "";
				for (this.settings.hasRendered = !0, this.pageManager.flag("dedupeWhatsNext") && -1 !== t.indexOf(this.settings.sections, "recommendations-3") && this.dedupeMultipleSections("recommendations-3", this.settings.sections, this.settings.sectionsCollections), i = 0, n = this.settings.sections.length; n > i; i += 1) s = this.settings.sectionsCollections[i], a = this.settings.fallbackCollections[i], s.collection.length >= s.items || this.settings.uniqueSections.length >= s.items ? (u += this.pageManager.flag("dedupeWhatsNext") && this.settings.uniqueSections.length ? this.getSectionEl(s, this.settings.uniqueSections[i]) : this.getSectionEl(s), this.deferDataFeedImpression(!1, "WP-WhatsNext-Render-" + this.settings.sections[i], s.el)) : a && a.collection.length >= a.items ? (u += this.getSectionEl(a), this.deferDataFeedImpression(!0, "WP-WhatsNext-Render-Fallback-" + this.settings.fallback[i], a.el)) : this.trackDataFeedImpression(!0, "WP-WhatsNext-No-Render-" + this.settings.fallback[i]);
				this.$el[this.settings.renderMethod](u), e(this.settings.fadeInEl).css("opacity", 0), e(this.settings.fadeInEl).animate({
					opacity: 1
				}, 400), this.$el.find("h2").each(function(t, i) {
					var n;
					e(i).closest(".whats-next-collection").hasClass("whats-next-collection") || (n = e(i).height(), n >= m + 1 && h.truncateText(e(i), m, !1))
				}), this.isCollection && (o = this.pageManager.getMeta("nyt-collection:identifier"), r = this.pageManager.getMeta("nyt-collection:type"), this.assignRref(o, r)), this.$el.find(".summary").each(function(t, i) {
					e(i).closest(".whats-next-collection").hasClass("whats-next-collection") || h.truncateText(e(i), p, !1)
				}), this.checkDeferredImpressions(), this.pageManager.getCurrentBreakpoint() >= 1080 && "article" === f && (c = this.pageManager.flag("collectionsWhatsNext") ? e(".layout-6") : this.$el.find("section").eq(0), l = c.find("li"), l.last().after('<li id="MoreIn" class="whats-next-ad ad hidden"></li>'), this.broadcast("nyt:ad-library:dfp:request-placement", "MoreIn", [210, 218])), this.pageManager.flag("collectionsWhatsNext") && (d = this.$el.find(".follow-button-placeholder"), this.broadcast("nyt:new-follow-button", d)), this.broadcast("nyt:whats-next-rendered")
			},
			dedupeMultipleSections: function(e, i, n) {
				var s, a, o, r, l, d, c, h = t.indexOf(i, e),
					u = [];
				if (-1 === h) return u;
				for (s = 0; s < n.length; s++) u.push(this.dedupeSection(n[s], !0));
				for (o = 0; o < u.length; o++)
					if (o !== h)
						for (s = 0; s < u[o].length; s++)
							for (r = u[o][s].attributes, l = r.data_id ? r.data_id : r.id, a = 0; a < u[h].length; a++) d = u[h][a].attributes, c = d.data_id ? d.data_id : d.id, parseInt(l, 10) === parseInt(c, 10) && u[h].splice(a, 1);
				for (s = 0; s < u.length; s++) u[s] = t.first(u[s], n[s].items);
				return this.settings.uniqueSections = u, u
			},
			getSectionEl: function(e, t) {
				var n = t ? t : this.dedupeSection(e);
				return ".whats-next-collection" === e.el ? this.getNextInCollectionContent(n, e.collection) : this.templates[e.template]({
					staticHost: i.staticHost,
					headingLabel: e.headingLabel,
					sectionLinkLabel: e.sectionLinkLabel,
					sectionUrl: e.sectionUrl || e.collection.getUrl(),
					collection: n,
					items: e.items,
					className: e.el.replace(".", ""),
					trackingModule: e.trackingModule,
					trackingSrc: e.trackingSrc
				})
			},
			getNextInCollectionContent: function(e, t) {
				var i, n, s, a, o = "",
					r = "",
					l = [],
					d = this,
					c = {};
				if (e.length < 2) return "";
				for (n = 0; n < e.length; n++) s = null, o = null, r = null, a = e[n].get("promotional_media"), a && (s = a.image ? a : a.promotional_media), s && s.image && s.image.image_crops && s.image.image_crops.thumbStandard && s.image.image_crops.thumbStandard.url && (o = s.image.image_crops.thumbStandard.url, c[o] ? c[o] += 1 : c[o] = 1),
					s && s.image && s.image.caption && s.image.caption.full && (r = s.image.caption.full), l.push({
						title: e[n].get("headline") || e[n].get("title"),
						image: o,
						caption: r,
						link: e[n].get("link"),
						description: e[n].get("summary"),
						type: this.isVideo(e[n]) ? "video" : null,
						hideImage: !1
					});
				for (n = 0; n < l.length; n += 1) c[l[n].image] > 1 && (l[n].hideImage = !0);
				return i = {
					tone: "feature-tone",
					subject: t.getName(),
					collectionId: t.getID(),
					collectionLink: t.getURL(),
					description: t.getDescription(),
					tagLine: t.getTagLine(),
					articles: l,
					numberToShow: 3,
					pageManager: this.pageManager,
					contentCollection: d.pageManager.getMeta("CG")
				}, this.trackingTriggerImpression("NextIn-Render", {
					action: "Impression",
					module: "NextInCollection",
					region: "Footer",
					pgtype: "article",
					eventName: "Impression",
					contentCollection: this.pageManager.getMeta("CG"),
					priority: !0
				}), this.templates.whatsNextCollection(i)
			},
			isVideo: function(e) {
				var t = e.get("promotional_media") ? e.get("promotional_media").data_type : null;
				return "video" === e.get("data_type") || "video" === t
			},
			displayAd: function() {
				var t, i, n, s = e("#MoreIn");
				n = this.pageManager.flag("collectionsWhatsNext") ? e(".layout-6") : this.$el.find("section").eq(0), s.removeClass("hidden"), t = n.find("li:not(.whats-next-ad)"), 6 === t.length && t.eq(t.length - 1).addClass("hidden"), i = n.find("li:not(.whats-next-ad):gt(1)"), s.after(i)
			},
			hideAd: function() {
				var t, i, n = e("#MoreIn");
				t = this.pageManager.flag("collectionsWhatsNext") ? e(".layout-6") : this.$el.find("section").eq(0), i = t.find("li:not(.whats-next-ad):gt(1)"), i.removeClass("hidden"), n.addClass("hidden"), n.before(i)
			},
			dedupeSection: function(e, t) {
				var i, n, s, a = this.pageManager.getMeta("articleid"),
					o = this.pageManager.getCanonical(),
					r = e.items;
				return void 0 !== this.settings.overrideDisplayCount && (r = this.settings.overrideDisplayCount), n = t ? r + 3 : r, e.collection.chain().uniq(!1, function(e) {
					return i = e.attributes, s = i.data_id ? i.data_id : i.id, s ? s : i.link
				}).reject(function(e) {
					return i = e.attributes, s = i.data_id ? i.data_id : i.id, s && s === a ? !0 : -1 !== i.link.indexOf(o) ? !0 : !1
				}).first(n).value()
			},
			handleLinkClick: function(t) {
				var i, n, s, a, o;
				return this.pageManager.flag("collectionsWhatsNext") && e(t.currentTarget).closest(".whats-next-collection").hasClass("whats-next-collection") ? !0 : void(this.settings.enableTracking && (a = e(t.currentTarget), o = this.trackingAppendParams(a.attr("href"), {
					moduleDetail: a.attr("data")
				}), s = a.closest("section"), i = s.attr("data-module"), i && (o = this.trackingAppendParams(o, {
					module: i
				})), n = s.attr("data-src"), n && (o = this.trackingAppendParams(o, {
					src: n
				})), a.attr("href", o)))
			},
			trackDataFeedImpression: function(e, t) {
				this.settings.enableTracking && this.trackingTriggerImpression("WP-WhatsNext-Render", {
					eventName: "Impression",
					action: "Impression",
					contentCollection: t,
					mData: {
						feedFailure: e
					},
					priority: !0
				})
			},
			deferDataFeedImpression: function(e, t, i) {
				this.settings.enableTracking && (this.settings.deferredImpressions[i] = {
					name: t,
					hadFailure: e,
					el: i
				}, this.settings.handlingDeferredImpressions || (this.settings.handlingDeferredImpressions = !0, this.subscribe("nyt:page-scroll", this.checkDeferredImpressions)), this.checkDeferredImpressions())
			},
			checkDeferredImpressions: function() {
				var e, i, n, s, a;
				if (this.settings.enableTracking) {
					if (t.isEmpty(this.settings.deferredImpressions)) return this.stopSubscribing("nyt:page-scroll", this.checkDeferredImpressions), void(this.settings.handlingDeferredImpressions = !1);
					a = this.pageManager.getViewport().bottom;
					for (i in this.settings.deferredImpressions) {
						if (n = this.$el.find(i + " .story-link"), s = n.length ? n.first() : void 0, !s || s.offset().top > a) break;
						e = this.settings.deferredImpressions[i], this.trackDataFeedImpression(e.hadFailure, e.name), delete this.settings.deferredImpressions[i]
					}
				}
			}
		}));
		return l
	}), define("shared/whatsnext/instances/whats-next", ["shared/whatsnext/views/whats-next"], function(e) {
		"use strict";
		new e
	}), define("article/story/views/tracking", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/views/page-manager"], function(e, t, i, n) {
		"use strict";
		var s = i.extend({
			el: "#shell",
			events: {
				"click .most-emailed-marginalia a": "handleMostEmailedClick",
				"click .collection-marginalia a": "handleNYTCollectionClick",
				"click .related-coverage-marginalia a": "handleRelatedCoverageClick",
				"click .cooking-marginalia a": "handleCookingClick",
				"click .story-header .kicker a": "handleKickerClick",
				"click .byline a": "handleBylineClick",
				"click #site-index a": "handleSiteIndexClick",
				"click #masthead-social a": "handleFollowClick",
				"click #footer-social a": "handleFollowClick",
				"click .map .review-details a": "handleMapGetDirectionsClick",
				"click .review-details a": "handleReviewDetailClick",
				"click .theater-meta .find-tickets": "handleFindTicketsClick",
				"click .theater-details .find-tickets": "handleFindTicketsClick",
				"click .whats-next-collection a": "handleStandardNextInClick",
				"click .extended-byline .byline-column a": "handleExtendedBylineColumn",
				"click .trending-module a": "handleTrendingClick",
				"click .related-combined-coverage a": "handleCombinedRelatedCoverageClick",
				"click .related-combined-coverage-marginalia a": "handleCombinedRelatedCoverageMarginaliaClick",
				"click .related-combined-coverage .show-all-button": "handleCombinedRelatedCoverageShowAllClick",
				"click .story-body .comments-button": "handleCommentsButtonBody",
				"click .masthead .comments-button": "handleCommentsButtonFixie",
				"click .movie-meta .find-tickets": "handleFindTopMovieTicketsClick",
				"click .movie-details .find-tickets": "handleFindBottomMovieTicketsClick",
				"click .story-header .find-table": "handleReserveTableTopClick",
				"click .review-details .find-table": "handleReserveTableBottomClick",
				"click .story-translations-link": "handleTranslationsClick"
			},
			nytEvents: {
				"nyt:page-scroll-after": "handleScroll"
			},
			impressionItems: [".related-combined-coverage-marginalia", ".related-combined-coverage"],
			initialize: function() {
				this.$paragraphs = e(".story-body-text"), this.totalChars = this.$paragraphs.last().data("total-count"), this.pageBreakLocations = [], this.pageCount = this.getPageCount(this.$paragraphs), this.lastScrollTop = 0, this.maxCharsViewed = 0, this.lastParagraphIndex = 0, this.maxScrollDepth = 0, this.maxScrollTop = this.$body.height() - this.$window.height(), this.trackingBaseData = {
					action: "click",
					contentCollection: this.pageManager.getMeta("article:section")
				}, window.NYTD && window.NYTD.Abra && window.NYTD.Abra("www-story-scroll-depth") && this.handleFlexFrameImpressions(), this.subscribe("nyt:page-scroll", this.checkImpressionItemsInViewport)
			},
			handleDomReady: function() {
				this.trackingTriggerRaw("page-count-equiv-nyt4", {
					module: "Page",
					nyt4totpg: this.pageCount
				}, "interaction"), this.handleVideoModulesTracking(), this.handleSlideshowPromoImpression()
			},
			checkImpressionItemsInViewport: t.throttle(function() {
				var i = this;
				t.each(i.impressionItems, function(t) {
					var s, a = e(t);
					n.isComponentVisible(a) && (a.hasClass("related-combined-coverage-marginalia") ? (i.trackingTriggerImpression("RelatedCoverage-Marginalia", {
						contentCollection: n.getMeta("article:section"),
						module: "RelatedCoverage-TruncatedMarginalia",
						eventName: "Impression",
						pgtype: "article",
						action: "Impression"
					}), s = i.impressionItems.indexOf(t), i.impressionItems.splice(s, 1)) : a.hasClass("related-combined-coverage") && (i.trackingTriggerImpression("RelatedCoverage-EndOfArticle", {
						contentCollection: n.getMeta("article:section"),
						module: "RelatedCoverage-EndOfArticle",
						eventName: "Impression",
						pgtype: "article",
						action: "Impression"
					}), s = i.impressionItems.indexOf(t), i.impressionItems.splice(s, 1))), 0 === i.impressionItems.length && i.stopSubscribing("nyt:page-scroll", i.checkImpressionItemsInViewport)
				})
			}, 300),
			handleMostEmailedClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						module: "MostPopularFB",
						version: "Full",
						region: "Marginalia",
						src: "me"
					});
				i.attr("href", n)
			},
			handleNYTCollectionClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						module: "Collection",
						region: "Marginalia",
						src: "me",
						version: this.pageManager.getMeta("CT").replace("-", "")
					});
				i.attr("href", n)
			},
			handleRelatedCoverageClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						module: "RelatedCoverage",
						region: "Marginalia"
					});
				i.attr("href", n)
			},
			handleCookingClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						module: "Cooking",
						region: "Marginalia"
					});
				i.attr("href", n)
			},
			handleKickerClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						module: "Kicker",
						region: "Header"
					});
				i.attr("href", n)
			},
			handleBylineClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						module: "Byline",
						region: "Header"
					});
				i.attr("href", n)
			},
			handleExtendedBylineColumn: function(t) {
				var i = e(t.currentTarget),
					s = this.trackingAppendParams(i.attr("href"), {
						action: "click",
						contentCollection: n.getMeta("article:section"),
						module: "ExtendedByline",
						region: "Header",
						pgtype: "article"
					});
				i.attr("href", s)
			},
			handleTrendingClick: function(t) {
				var i = e(t.currentTarget),
					s = this.trackingAppendParams(i.attr("href"), {
						action: "click",
						contentCollection: n.getMeta("article:section"),
						module: "Trending",
						version: "Full",
						region: "Marginalia",
						pgtype: "article"
					});
				i.attr("href", s)
			},
			handleCombinedRelatedCoverageClick: function(t) {
				var i = e(t.currentTarget),
					s = this.trackingAppendParams(i.attr("href"), {
						action: "click",
						contentCollection: n.getMeta("article:section"),
						module: "RelatedCoverage",
						region: "EndOfArticle",
						pgtype: "article"
					});
				i.attr("href", s)
			},
			handleCombinedRelatedCoverageMarginaliaClick: function(t) {
				var i = e(t.currentTarget),
					s = this.trackingAppendParams(i.attr("href"), {
						action: "click",
						contentCollection: n.getMeta("article:section"),
						module: "RelatedCoverage",
						region: "Marginalia",
						pgtype: "article"
					});
				i.attr("href", s)
			},
			handleCombinedRelatedCoverageShowAllClick: function() {
				this.trackingTrigger("related-show-all", {
					module: "Related-ShowAll",
					action: "click",
					eventName: "ExpandShowAll",
					contentCollection: n.getMeta("article:section"),
					region: "EndOfArticle"
				})
			},
			handleCommentsButtonBody: function() {
				this.trackingTrigger("comments-open-panel", {
					module: "Comments",
					action: "Click",
					eventName: "OpenCommentsPanel",
					region: "Body",
					version: "CommentsBubble"
				})
			},
			handleCommentsButtonFixie: function() {
				this.trackingTrigger("comments-open-panel", {
					module: "Comments",
					action: "Click",
					eventName: "OpenCommentsPanel",
					region: "TopBar",
					version: "CommentsTopBar"
				})
			},
			handleTranslationsClick: function(t) {
				var i = e(t.currentTarget),
					n = i.attr("data-version"),
					s = e('meta[itemprop="inLanguage"]').attr("content"),
					a = this.trackingAppendParams(i.attr("href"), {
						module: "Translations",
						region: "Header",
						version: n,
						ref: s
					});
				i.attr("href", a)
			},
			handleSiteIndexClick: function(t) {
				var i, n = e(t.currentTarget),
					s = {
						module: "SiteIndex",
						region: "Footer"
					};
				n.find(".nyt-logo").length > 0 && (s.contentCollection = "NYTlogoHome"), n.parents(".user-action").length > 0 && (s.contentCollection = "GoToHPCTA"), i = this.trackingAppendParams(n.attr("href"), s), n.attr("href", i)
			},
			getPageCount: function(t) {
				var i = this,
					n = 4e3,
					s = n / 2,
					a = 200,
					o = 1,
					r = 0;
				return t.each(function() {
					var t = e(this),
						s = t.data("para-count");
					r >= n && s > a && (o += 1, r = 0, i.pageBreakLocations.push({
						page: o,
						processed: !1,
						location: t.data("total-count")
					})), r += s
				}), o > 1 && s > r && (o -= 1, i.pageBreakLocations.pop()), o
			},
			handleScroll: function() {
				var e = this.$window.scrollTop(),
					t = e - this.lastScrollTop;
				100 > t || (this.lastScrollTop = e, this.updateCharacterCount(), this.updateScrollDepth(), this.notifyPageBreaks())
			},
			updateCharacterCount: function() {
				var t, i, n, s = this;
				this.maxCharsViewed !== this.totalChars && (t = this.$paragraphs.slice(this.lastParagraphIndex).filter(function() {
					return s.pageManager.isComponentVisible(e(this))
				}), i = t.size() > 0 ? t.last() : this.$paragraphs.last(), n = i.data("total-count"), n !== this.maxCharsViewed && (this.maxCharsViewed = n, this.lastParagraphIndex = this.$paragraphs.index(i), this.trackingTriggerRaw("scroll-update-char-count", {
					module: "Page",
					numPages: this.pageCount,
					totalChars: this.totalChars,
					viewedChars: this.maxCharsViewed
				}, "interaction")))
			},
			updateScrollDepth: function() {
				var e = this.lastScrollTop / this.maxScrollTop * 100,
					t = 25 * Math.floor(e / 25);
				t > this.maxScrollDepth && (this.maxScrollDepth = t, this.trackingTriggerRaw("scroll-depth", {
					module: "Page",
					depth: t
				}, "interaction"))
			},
			notifyPageBreaks: function() {
				var e, i, n, s = t.filter(this.pageBreakLocations, function(e) {
					return e.location <= this.maxCharsViewed && !e.processed
				}, this);
				for (e = 0, i = s.length; i > e; ++e) n = s[e], this.trackingTriggerRaw("page-break-equiv-nyt4", {
					module: "Page",
					nyt4pg: n.page
				}, "interaction"), n.processed = !0
			},
			handleFollowClick: function(t) {
				var i = e(t.currentTarget),
					n = i.closest("#masthead-social").length > 0 ? "Header" : "Footer";
				this.trackingTrigger("follow-us", {
					module: "FollowUs",
					version: "Content",
					action: "click",
					contentCollection: this.pageManager.getMeta("CG"),
					pgtype: this.pageManager.getMeta("PT"),
					region: n,
					eventName: "FollowUs-" + t.currentTarget.className
				})
			},
			handleReviewDetailClick: function(t) {
				var i = e(t.currentTarget),
					n = i.attr("href");
				this.trackingTriggerRaw("outboundLinkClick", {
					module: "Reviewee-Information",
					version: "Content",
					action: "click",
					contentCollection: this.pageManager.getMeta("CG"),
					contentId: n,
					pgtype: this.pageManager.getMeta("PT"),
					region: "review-details",
					eventName: "outboundLinkClick"
				}, "interaction")
			},
			handleVideoModulesTracking: function() {
				var e = [],
					t = this.$body.find("figure.video");
				t && t.hasClass("lede") && e.push("lede"), t && t.hasClass("embedded") && (t.hasClass("inline") ? e.push("inline") : e.push("embedded")), this.trackingTriggerRaw("vid_modules", {
					module: "Page",
					vid_modules: e.toString(),
					priority: !0
				}, "interaction")
			},
			handleRecircAbTestButtonClick: function(t) {
				var i = e(t.currentTarget),
					n = {
						module: "HPRecircABTestButton",
						region: "BodyContent"
					},
					s = this.trackingAppendParams(i.attr("href"), n);
				i.attr("href", s)
			},
			handleMapGetDirectionsClick: function(e) {
				this.trackingTrigger("get-directions", {
					module: "CriticsReviewDetailsMap",
					version: "Content",
					action: "click",
					contentCollection: this.pageManager.getMeta("CG"),
					pgtype: this.pageManager.getMeta("PT"),
					region: "CriticsReviewDetails",
					eventName: "GetDirections-click",
					restaurantName: e.currentTarget.className
				})
			},
			handleFindTicketsClick: function(t) {
				var i = e(t.currentTarget);
				this.trackingTrigger("outboundLinkClick", {
					module: "BuyTicketsButton",
					action: "click",
					contentCollection: i.attr("href"),
					contentId: i[0].hostname,
					region: i.parent().parent().attr("class"),
					eventName: "outboundLinkClick",
					show: i.attr("title")
				})
			},
			handleStandardNextInClick: function(t) {
				var i = this.pageManager.getMeta("nyt-collection:identifier"),
					n = this.pageManager.getMeta("nyt-collection:type"),
					s = e(t.currentTarget),
					a = this.trackingAppendParams(s.attr("href"), {
						contentCollection: this.pageManager.getMeta("CG"),
						action: "click",
						module: "NextInCollection",
						region: "Footer",
						pgtype: "article",
						version: this.pageManager.getMeta("CT").replace("-", ""),
						rref: ["collection", n, i].join("/")
					});
				s.attr("href", a)
			},
			handleSlideshowPromoImpression: function() {
				var t = this,
					i = this.$el.find(".media.slideshow.promo");
				i.each(function() {
					t.trackingTriggerImpression("slideshow-promo-impression", {
						module: "Slide",
						action: "impression",
						slideshowTitle: e(this).find(".headline").first().text()
					})
				})
			},
			handleFindTopMovieTicketsClick: function(t) {
				var i = e(t.currentTarget);
				this.trackingTrigger("outboundLinkClick", {
					module: "Movie_tickets",
					action: "click",
					region: "header",
					contentCollection: i.attr("href"),
					ur: i.attr("href"),
					eventName: "outboundlinkClick",
					rref: "collection/reviews/movies",
					pgtype: this.pageManager.getMeta("PT"),
					show: i.attr("title")
				})
			},
			handleFindBottomMovieTicketsClick: function(t) {
				var i = e(t.currentTarget);
				this.trackingTrigger("outboundLinkClick", {
					module: "Movie_tickets",
					action: "click",
					region: "Body",
					contentCollection: i.attr("href"),
					ur: i.attr("href"),
					eventName: "outboundlinkClick",
					rref: "collection/reviews/movies",
					pgtype: this.pageManager.getMeta("PT"),
					show: i.attr("title")
				})
			},
			handleReserveTableTopClick: function() {
				this.trackingTrigger("outboundLinkClick", {
					module: "Open_table",
					region: "header",
					eventName: "Reserve_table"
				})
			},
			handleReserveTableBottomClick: function() {
				this.trackingTrigger("outboundLinkClick", {
					module: "Open_table",
					region: "Body",
					eventName: "Reserve_table"
				})
			},
			handleFlexFrameImpressions: function() {
				var t = this;
				setInterval(function() {
					t.trackingTriggerImpression("scrollDepth", {
						event_name: "heartbeat-page-depth",
						action: "scroll",
						module: window.scrollY,
						region: e(window).height(),
						version: e(document).height()
					})
				}, 5e3)
			}
		});
		return s
	}), define("article/story/instances/tracking", ["article/story/views/tracking"], function(e) {
		"use strict";
		return new e
	}), define("shared/page/helpers/inactivity-timer-mixin", ["underscore/nyt", "jquery/nyt"], function(e, t) {
		"use strict";
		var i = {
			inactivityTimerTimeout: null,
			inactivityTimerDuration: 6e5,
			inactivityTimerEnabled: !1,
			inactivityTimerLocked: !1,
			preInactivityTimerEnabled: !0,
			bindInactivityTimerEvents: function() {
				e.bindAll(this, "startInactivityTimer", "enableInactivityTimer", "disableInactivityTimer", "reenableInactivityTimer", "completeInactivityTimer"), this.subscribe("nyt:inactivity-timer-enable", this.handleTimerEnable), this.subscribe("nyt:inactivity-timer-disable", this.handleTimerDisable), this.subscribe("nyt:user-activity", this.reenableInactivityTimer)
			},
			handleTimerEnable: function() {
				this.unlockInactivityTimer(), this.preInactivityTimerEnableDuration ? setTimeout(this.enableInactivityTimer, this.preInactivityTimerEnableDuration) : this.enableInactivityTimer()
			},
			handleTimerDisable: function() {
				this.disableInactivityTimer(), this.lockInactivityTimer()
			},
			startInactivityTimer: function() {
				var e = this;
				this.inactivityTimerTimeout && this.stopInactivityTimer(), this.inactivityTimerTimeout = window.setTimeout(function() {
					e.disableInactivityTimer(), e.lockInactivityTimer(), e.completeInactivityTimer()
				}, this.inactivityTimerDuration)
			},
			enableInactivityTimer: function(e) {
				var t = e && e.data ? e.data : this;
				t.inactivityTimerEnabled || t.inactivityTimerLocked || (t.preInactivityTimerEnabled = !1, t.inactivityTimerEnabled = !0, t.startInactivityTimer())
			},
			disableInactivityTimer: function() {
				this.inactivityTimerEnabled && !this.inactivityTimerLocked && (this.inactivityTimerEnabled = !1, this.stopInactivityTimer())
			},
			reenableInactivityTimer: function() {
				this.inactivityTimerEnabled && !this.inactivityTimerLocked && (this.disableInactivityTimer(), this.enableInactivityTimer())
			},
			stopInactivityTimer: function() {
				window.clearTimeout(this.inactivityTimerTimeout), this.inactivityTimerTimeout = null
			},
			lockInactivityTimer: function() {
				this.inactivityTimerLocked = !0
			},
			unlockInactivityTimer: function() {
				this.inactivityTimerLocked = !1
			},
			completeInactivityTimer: t.noop
		};
		return i
	}), define("article/common/views/welcome-back/welcome-back", ["underscore/nyt", "jquery/nyt", "foundation/views/base-view", "shared/page/helpers/inactivity-timer-mixin", "shared/modal/views/modal", "shared/data/instances/recommendations", "shared/data/instances/most-emailed", "article/common/templates"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = i.extend(e.extend({}, n, {
			assetTimeout: null,
			collection: null,
			modal: null,
			defaultModalSettings: {
				id: "welcome-back-modal",
				modalTitle: r.welcomeBackTitle(),
				modalContent: r.welcomeBack(),
				modalFooter: r.welcomeBackFooter(),
				tailDirection: "fixed",
				fixedOverride: !0,
				hasOverlay: !0,
				hasCloseButton: !0
			},
			initialize: function() {
				var i = this;
				this.$document.on("click", "#welcome-back-modal .story-link", function(e) {
					var n = t(e.currentTarget),
						s = i.trackingAppendParams(n.attr("href"), {
							module: "WelcomeBackModal",
							contentCollection: i.pageManager.getMeta("article:section"),
							region: "FixedCenter",
							action: "click",
							src: "recg"
						});
					n.attr("href", s)
				}), this.isEnabled() && (!this.pageManager.flag("removeWelcomeBackModule") || this.pageManager.flag("removeWelcomeBackModule") && "0" === this.isUserVariant("welcomeBackTest")) && (e.bindAll(this, "readyVisibilityCheck"), this.bindInactivityTimerEvents(), this.setupFocusEvents(), this.setupVisibilityEvents())
			},
			handleDomReady: function() {
				this.isEnabled() && (!this.pageManager.flag("removeWelcomeBackModule") || this.pageManager.flag("removeWelcomeBackModule") && "0" === this.isUserVariant("welcomeBackTest")) && this.readyVisibilityCheck()
			},
			isEnabled: function() {
				return this.pageManager.isDesktop()
			},
			readyVisibilityCheck: function() {
				this.isVisible() && this.enableInactivityTimer()
			},
			isVisible: function() {
				var e = !1,
					t = document.hasFocus();
				return t ? ("undefined" != typeof document.hidden && !document.hidden || "undefined" != typeof document.mozHidden && !document.mozHidden || "undefined" != typeof document.msHidden && !document.msHidden || "undefined" != typeof document.webkitHidden && !document.webkitHidden ? e = !0 : t && "undefined" == typeof document.hidden && "undefined" == typeof document.mozHidden && "undefined" == typeof document.hsHidden && "undefined" == typeof document.webkitHidden && (e = !0), e) : e
			},
			setupFocusEvents: function() {
				var e = this;
				this.$window.on("focus", e, this.enableInactivityTimer), this.$html.hasClass("ie8") ? this.$document.on("focusout", function() {
					document.hasFocus() || e.disableInactivityTimer()
				}) : this.$window.on("blur", this.disableInactivityTimer)
			},
			setupVisibilityEvents: function() {
				var e = this;
				this.$document.on("visibilitychange webkitvisibilitychange mozvisibilitychange", function() {
					e.isVisible() ? e.enableInactivityTimer() : e.disableInactivityTimer()
				})
			},
			setupModal: function() {
				var t = this,
					i = e.extend({}, this.defaultModalSettings, {
						openCallback: function() {
							t.prepareContent()
						},
						closeCallback: function() {
							t.dismantleModal(), t.broadcast("nyt:inactivity-timer-enable")
						}
					});
				this.modal = new s(i), this.modal.addToPage()
			},
			dismantleModal: function() {
				this.modal.removeFromPage()
			},
			completeInactivityTimer: function() {
				this.setupModal(), this.modal.open(), this.pageManager.flag("removeWelcomeBackModule") && "0" === this.isUserVariant("welcomeBackTest") && this.trackingTriggerImpression("welcome-back", {
					action: "Impression",
					module: "WelcomeBack",
					region: "FixedCenter",
					pgtype: "article",
					eventName: "Impression",
					priority: !0,
					contentCollection: this.pageManager.getMeta("CG")
				})
			},
			prepareContent: function() {
				this.prepareContentCollection(a), 0 === this.collection.length && this.prepareFallbackContent(!0), this.broadcast("nyt:ad-library:dfp:request-placement", "WelcomeBack")
			},
			prepareContentCollection: function(e) {
				this.collection = e.loadData(), this.collection.length > 0 ? this.renderAssets() : this.subscribeOnce(this.collection, "sync", this.handleCollectionLoad)
			},
			prepareFallbackContent: function(e) {
				var t = this;
				e ? this.assetTimeout = window.setTimeout(function() {
					t.prepareContentCollection(o)
				}, 1500) : this.prepareContentCollection(o)
			},
			handleCollectionLoad: function() {
				window.clearTimeout(this.assetTimeout), this.renderAssets()
			},
			renderAssets: function() {
				var e;
				this.collection.length > 0 ? (e = r.welcomeBackStories({
					collection: this.collection
				}), this.modal.$el.find(".story-group").html(e)) : this.prepareFallbackContent(!1)
			}
		}));
		return l
	}), define("article/common/instances/welcome-back", ["foundation/views/page-manager", "article/common/views/welcome-back/welcome-back"], function(e, t) {
		"use strict";
		e.getMeta("errorpage") || new t
	}), define("shared/nextin/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.nextInCollection = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<header class="collection-header">\n<h2 class="collection-heading"><a href="' + (null == (__t = collectionLink) ? "" : __t) + '">' + (null == (__t = subject) ? "" : __t) + '</a></h2>\n<h3 class="collection-subheading">' + (null == (__t = tagLine) ? "" : __t) + '</h3><div class="follow-button-placeholder" data-collection-id="column.' + (null == (__t = collectionId) ? "" : __t) + '"></div></header>\n<ol class="story-menu">\n', _.each(articles, function(e) {
				__p += '\n<li>\n<article class="story theme-summary ', (hideImages || "" === e.image) && (__p += "no-thumb"), __p += '">\n', e.image && (__p += '\n<div class="thumb">\n<a href="' + (null == (__t = e.link) ? "" : __t) + '" aria-hidden="true" role="presentation" tabindex="-1" data-rref="">\n<img role="presentation" src="' + (null == (__t = e.image) ? "" : __t) + '" alt="' + (null == (__t = e.title) ? "" : __t) + '" />\n</a>\n</div>\n'), __p += '\n<h2 class="story-heading">\n<a href="' + (null == (__t = e.link) ? "" : __t) + '" data-rref="">\n', "video" === e.type && "36-hours" !== collectionId && (__p += "\n<i class='icon sprite-icon video-icon'></i>\n"), __p += "\n" + (null == (__t = e.title) ? "" : __t) + '\n</a>\n</h2>\n<p class="summary">' + (null == (__t = e.description) ? "" : __t) + "</p>\n</article>\n</li>\n"
			}), __p += "\n</ol>";
			return __p
		}, templates.nextInCollectionStandard = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<section id="standard-next-in" class="standard-next-in" data-module="collection" data-src="recg">\n<header>\n<div class="follow-button-placeholder" data-collection-id="column.' + (null == (__t = collectionId) ? "" : __t) + '"></div>\n<h2 class="section-heading"><a href="' + (null == (__t = collectionLink) ? "" : __t) + '">' + (null == (__t = subject) ? "" : __t) + "</a></h2>\n", tagLine && (__p += '\n<h3 class="collection-subheading">' + (null == (__t = tagLine) ? "" : __t) + "</h3>\n"), __p += '</header><ul class="menu layout-horizontal theme-story">\n', _.each(articles, function(e) {
				__p += "\n<li>\n<a class='standard-next-in-link' href=\"" + (null == (__t = e.link) ? "" : __t) + '" aria-hidden="true" role="presentation" tabindex="-1" data-rref="">\n', e.image && !hideImages ? (__p += '\n<img role="presentation" src="' + (null == (__t = e.image) ? "" : __t) + '" alt="' + (null == (__t = e.title) ? "" : __t) + '" />\n<h2 class="story-heading">\n', "video" === e.type && "36-hours" !== collectionId && (__p += "\n<i class='icon sprite-icon video-icon'></i>\n"), __p += "\n" + (null == (__t = e.title) ? "" : __t) + "\n</h2>\n<p class='story-description'>" + (null == (__t = e.description) ? "" : __t) + "</p>\n") : __p += '\n<h2 class="story-heading no-image">' + (null == (__t = e.title) ? "" : __t) + "</h2>\n<p class='story-description no-image'>" + (null == (__t = e.description) ? "" : __t) + "</p>\n", __p += "\n</a>\n</li>\n"
			}), __p += "\n</ul>\n</section>";
			return __p
		}, templates
	}), define("shared/nextin/views/next-in-collection", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "shared/nextin/templates", "shared/data/instances/nyt-collection", "shared/page/helpers/nyt-collection-view-mixin"], function(e, t, i, n, s, a) {
		"use strict";
		var o = i.registerView("nextincollection").extend(t.extend({}, a, {
			el: "#next-in",
			events: {
				"click a": "handleLinkClick"
			},
			handleDomReady: function() {
				this.handleScrollCheck() || this.subscribe("nyt:page-scroll", this.handleScrollCheck)
			},
			handleScrollCheck: function() {
				return this.pageManager.isComponentVisible(this.$el) ? (this.stopSubscribing("nyt:page-scroll", this.handleScrollCheck), s.length > 1 ? this.render() : (s.loadData(), this.subscribeOnce(s, "sync", this.render)), !0) : !1
			},
			render: function() {
				var e, t = s.getTone(),
					i = s.getType(),
					n = s.getID(),
					a = this.pageManager.getMeta("article:section");
				this.$el.attr("class", "next-in collection collection-type-column collection-tone-" + t), "Magazine" === a && this.$el.addClass("collection-section-magazine"), this.$el.html(this.createTemplate()), e = this.$el.find(".follow-button-placeholder"), this.broadcast("nyt:new-follow-button", e), this.assignRref(n, i)
			},
			createTemplate: function() {
				var t, i, a, o, r = "",
					l = "",
					d = [],
					c = this.nextArticles(3),
					h = this;
				for (i = 0; i < c.length; i++) a = null, r = null, l = null, o = c[i].get("promotional_media"), o && (a = o.image ? o : o.promotional_media), a && a.image && a.image.image_crops && a.image.image_crops.thumbStandard && a.image.image_crops.thumbStandard.url && (r = a.image.image_crops.thumbStandard.url), a && a.image && a.image.caption && a.image.caption.full && (l = a.image.caption.full), d.push({
					title: c[i].get("headline") || c[i].get("title"),
					image: r,
					caption: l,
					link: c[i].get("link"),
					description: c[i].get("summary"),
					type: this.isVideo(c[i]) ? "video" : null
				});
				return t = {
					tone: "feature-tone",
					subject: s.getName(),
					collectionId: s.getID(),
					collectionLink: s.getURL(),
					description: s.getDescription(),
					tagLine: s.getTagLine(),
					articles: d,
					hideImages: !1,
					numberToShow: 3,
					pageManager: this.pageManager,
					contentCollection: h.pageManager.getMeta("CG")
				}, this.pageManager.flag("standardizeWhatsNextCollection") ? "1" !== this.isUserVariant("standardizeWhatsNextCollection") ? (this.trackingTriggerImpression("AB-NextIn-Render", {
					action: "Impression",
					module: "NextInCollection",
					region: "Footer",
					pgtype: "article",
					eventName: "Impression",
					contentCollection: this.pageManager.getMeta("CG"),
					priority: !0
				}), n.nextInCollection(t)) : (this.pageManager.$html.hasClass("section-opinion") && (t.hideImages = !0), e(this.el).remove(), c.length > 1 && h.abStandardizeWhatsNextCollection(t), void 0) : n.nextInCollection(t)
			},
			isVideo: function(e) {
				var t = e.get("promotional_media") ? e.get("promotional_media").data_type : null;
				return "video" === e.get("data_type") || "video" === t
			},
			handleLinkClick: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						contentCollection: this.pageManager.getMeta("CG"),
						action: "click",
						module: "NextInCollection",
						region: "Footer"
					});
				i.attr("href", n)
			},
			nextArticles: function(e) {
				var i, n = this.pageManager.getCanonical();
				return i = t.chain(s.first(e + 1)).select(function(e) {
					return e.get("link") !== n
				}, this).first(e).value()
			},
			abStandardizeWhatsNextCollection: function(i) {
				var s, a, o = this;
				e("#whats-next").prepend(n.nextInCollectionStandard(i)), this.broadcast("nyt:new-follow-button", e(".standard-next-in .follow-button-placeholder")), this.pageManager.flag("standardizeWhatsNextCollection") && "1" === this.isUserVariant("standardizeWhatsNextCollection") && this.trackingTriggerImpression("AB-NextIn-Render", {
					action: "Impression",
					module: "NextInCollection",
					region: "Footer",
					pgtype: "article",
					eventName: "Impression",
					contentCollection: this.pageManager.getMeta("CG"),
					priority: !0
				}), a = e("#standard-next-in .story-description"), t.each(a, function(t) {
					s = e(t), o.truncateText(s, 131)
				})
			}
		}));
		return o
	}), define("shared/nextin/instances/next-in", ["jquery/nyt", "foundation/views/page-manager", "shared/nextin/views/next-in-collection"], function(e, t, i) {
		"use strict";
		var n = t.getMeta("nyt-collection:identifier");
		if (!t.flag("collectionsWhatsNext") && n && n.length) return new i
	}), define("shared/masthead/views/masthead-api", ["jquery/nyt", "foundation/views/base-view"], function(e, t) {
		"use strict";
		var i = t.extend({
			el: "#masthead",
			position: "fixed",
			inStory: !1,
			initialize: function() {
				this.$container = e(".container"), this.$ribbon = e(".ribbon"), this.inStoryHeight = this.$el.height()
			},
			hide: function() {
				this.$el.hide(), this.$ribbon.addClass("no-masthead")
			},
			show: function() {
				this.$el.show(), this.$ribbon.removeClass("no-masthead")
			},
			getElement: function() {
				return this.$el
			},
			swap: function(e) {
				this.$el.find(".container").hide(), e && (this.$emptyMasthead || (this.$el.append('<div class="empty-masthead"></div>'), this.$emptyMasthead = this.$el.find(".empty-masthead")), this.$emptyMasthead.html(e))
			},
			restore: function() {
				this.$el.find(".container").show(), this.$el.find(".empty-masthead").remove(), this.$emptyMasthead = !1, this.$el.removeAttr("style"), this.$ribbon.css("margin-top", "").removeClass("no-masthead"), this.$container.css("min-height", ""), this.inStoryHeight = this.$el.height()
			},
			setHeight: function(e) {
				if (!e || "number" != typeof e) throw new Error("Masthead API - setHeight requires a number as an argument");
				this.inStoryHeight = e, this.$el.css("height", e), this.$container.css("min-height", e), this.$ribbon.css("margin-top", e), "absolute" === this.$el.css("position") && this.$el.css("margin-top", -e)
			},
			setPosition: function(e) {
				if ("fixed" === e) this.$el.css({
					position: "fixed",
					"margin-top": "0"
				}), this.broadcast("nyt:masthead-fixed");
				else {
					if ("absolute" !== e) throw new Error('Masthead API - setPosition only accepts "absolute" or "fixed" as arguments');
					this.$el.css({
						position: "absolute",
						"margin-top": -this.inStoryHeight + 1,
						right: 0,
						width: "auto"
					}), this.$ribbon.addClass("no-masthead"), this.broadcast("nyt:masthead-absolute")
				}
			},
			set: function(e) {
				if (!e || "object" != typeof e) throw new Error("Masthead API - set method requires an object as an argument");
				e.height && this.setHeight(e.height), e.position && this.setPosition(e.position), e.content && this.swap(e.content), e.change && this.change(e.change)
			},
			change: function(e) {
				var t = this;
				if (!e || "function" != typeof e) throw new Error("Masthead API - change method requires a function as an argument");
				this.subscribe("nyt:masthead-storytheme", function(i) {
					t.inStory = i, e(i)
				})
			},
			isInStory: function() {
				return this.inStory
			}
		});
		return i
	}), define("shared/masthead/instances/masthead-api", ["shared/masthead/views/masthead-api"], function(e) {
		"use strict";
		return new e
	}), define("shared/video/models/video", ["backbone/nyt", "foundation/models/base-model"], function(e, t) {
		"use strict";
		var i = t.extend({
			playerPositions: {
				POSITION_LEDE: "position_lede",
				POSITION_INLINE: "position_inline",
				POSITION_EMBEDDED: "position_embedded",
				POSITION_PHOTOSPOT: "position_photospot",
				POSITION_SECOND_COLUMN: "position_secondcolumn",
				POSITION_SPANABTOP: "position_spanabtop"
			},
			playerTypes: {
				ARTICLE_MODAL: "article-modal",
				ARTICLE_LEDE: "article-lede",
				ARTICLE_EMBEDDED: "article-embedded",
				BLOG: "blog",
				HOMEPAGE_PHOTOSPOT: "homepage-photospot",
				HOMEPAGE_SPAN_AB_TOP: "homepage-spanabtop",
				HOMEPAGE_SECOND_COLUMN: "homepage-secondcolumn"
			},
			videoEvents: {
				VIDEO_COMPLETE: "nyt:video-complete",
				PLAY_CLICKED: "nyt:video-play-clicked",
				VIDEO_PLAY: "nyt:video-play",
				VIDEO_PAUSED: "nyt:video-video-paused",
				AD_START: "nyt:video-ad-start",
				AD_COMPLETE: "nyt:video-ad-complete",
				VIDEO_FULLSCREEN: "nyt:video-fullscreen",
				VIDEO_EXIT_FULLSCREEN: "nyt:video-exit-fullscreen",
				KILL_VIDEO: "nyt:video-kill",
				HIDE_VIDEO_END_CARD: "nyt:video-end-card-hide",
				MEDIA_CHANGE: "nyt:video-media-change"
			},
			clickableElements: [".video-share span", ".video-share i.icon", ".video-share a"],
			initialize: function() {
				this.videoObject = null, this.isVideoFullscreen = !1, this.isAdPlaying = !1
			},
			pause: function() {
				var e = this.get("videoObject");
				e && e.pause()
			},
			kill: function() {
				this.local(this, this.videoEvents.KILL_VIDEO, this.videoObject)
			},
			hideVideoEndCard: function() {
				this.local(this, this.videoEvents.HIDE_VIDEO_END_CARD, this)
			}
		});
		return i
	}), define("shared/video/models/video-end-card", ["backbone/nyt", "foundation/models/base-model", "foundation/hosts"], function(e, t, i) {
		"use strict";
		var n = t.extend({
			PAUSE_STATE: "pause",
			COMPLETE_STATE: "complete",
			maxThumbs: 4,
			autoplayTimeout: 5,
			currentPlaylistIndex: 0,
			cachedPlaylist: null,
			defaults: {
				permalink: "http://www.nytimes.com/video",
				videoTitle: "NYTimes Video",
				videoDescription: "",
				videoStillImgUrl: i.staticHost + "/images/section/video/library/default-video-posterframe.png",
				playlistDisplayName: "Latest Video",
				playlistId: 1194811622182,
				playlistUrl: "http://www.nytimes.com/video/landing/latest-video/1194811622182/index.html",
				tags: []
			},
			initialize: function(e) {
				this.videoModel = e.videoModel, this.videoId = this.videoModel.get("videoId"), this.videoObject = this.videoModel.get("videoObject"), this.videoInnerContainer = this.videoModel.get("videoInnerContainer"), this.playlistVideosDataModel = null, this.playlistMetaDataModel = null, this.staticBaseUrl = i.staticHost + "/"
			}
		});
		return n
	}), define("shared/video/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.embedCode = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="embed-input-wrapper">\n<input\ntype="text"\nreadonly="true"\nid="' + (null == (__t = embedId) ? "" : __t) + '"\nvalue="' + (null == (__t = embedCode) ? "" : __t) + '"\nonclick="this.setSelectionRange(0, this.value.length)">\n</input>\n</div>';
			return __p
		}, templates.video = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="' + (null == (__t = outerId) ? "" : __t) + '" class="video-bind">\n<div id="' + (null == (__t = innerId) ? "" : __t) + '" class="video-container"></div>\n</div>';
			return __p
		}, templates.videoEndCard = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="video-end-card layout-small"><button class="video-end-card-play-button"><i class=\'icon sprite-icon\'></i><span>Replay Video</span></button><div class="video-share sharetools theme-classic" data-shares="show-all|Share" data-url="' + (null == (__t = permalink) ? "" : __t) + '" data-title="' + (null == (__t = videoTitle) ? "" : __t) + '" data-description="' + (null == (__t = videoDescription) ? "" : __t) + '">\n</div><div class="video-end-card-videos">\n<h5 class="video-end-card-section-heading video-end-card-section-heading-loading">\n<a href="' + (null == (__t = playlistUrl) ? "" : __t) + '" style="opacity: 1;">More in ' + (null == (__t = playlistDisplayName) ? "" : __t) + ' &raquo;</a>\n</h5>\n<div class="video-end-card-thumbs">\n<span class="video-end-card-loader"></span>\n</div>\n</div>\n</div>';
			return __p
		}, templates.videoEndCardIcon = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<i class="icon sprite-icon"></i><span>' + (null == (__t = iconText) ? "" : __t) + "</span>";
			return __p
		}, templates.videoEndCardThumb = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="video-end-card-thumb item-' + (null == (__t = itemIndex) ? "" : __t) + " " + (null == (__t = itemOrdinal) ? "" : __t) + '">\n<a href="' + (null == (__t = thumbLink) ? "" : __t) + '" alt="' + (null == (__t = thumbDesc) ? "" : __t) + '" title="' + (null == (__t = thumbDesc) ? "" : __t) + '" data-videoid="' + (null == (__t = thumbVideoId) ? "" : __t) + '" data-index="' + (null == (__t = thumbIndex) ? "" : __t) + '">\n', "first" == itemOrdinal && (__p += '\n<p class="autoplayMeta off ' + (null == (__t = thumbAutoPlayPaused) ? "" : __t) + '">\n<span class="countdownControl"></span>\n<span class="countdown">Playing in <span>' + (null == (__t = thumbAutoPlayRemainingTime) ? "" : __t) + "</span>...</span>\n</p>\n"), __p += '\n<span class="video-end-card-thumb-image">\n<img src="' + (null == (__t = thumbImg) ? "" : __t) + '">\n</span>\n<h4 class="video-headline">' + (null == (__t = thumbDesc) ? "" : __t) + "</h4>\n</a>\n</div>";
			return __p
		}, templates
	}), define("shared/video/models/playlist-videos", ["backbone/nyt", "foundation/models/base-model", "foundation/hosts"], function(e, t, i) {
		"use strict";
		var n = t.extend({
			url: i.videoApiHost + "/svc/video/api/v2/playlist/",
			fetchData: function(e, t, i, n) {
				var s = this,
					a = [],
					o = e.playlistId || "1194811622188";
				this.success = t, this.error = i, this.passThroughCallback = n, e.count && a.push("count=" + e.count), e.skip && a.push("skip=" + e.skip), this.url += o, a.length > 0 && (this.url += "?" + a.join("&")), this.fetch({
					success: function(e) {
						s.success && (s.passThroughCallback && "function" == typeof s.passThroughCallback ? s.success(e, s.passThroughCallback) : s.success(e))
					},
					error: function(e) {
						s.error && s.error(e)
					}
				})
			},
			sync: function(t, i, n) {
				return n.dataType = "jsonp", n.timeout = 1e4, n.cache = !0, n.jsonp = "callback", n.jsonpCallback = "hpPlaylistCallback", e.sync(t, i, n)
			}
		});
		return n
	}), define("shared/video/models/playlist-metadata", ["backbone/nyt", "foundation/models/base-model", "foundation/hosts"], function(e, t, i) {
		"use strict";
		var n = t.extend({
			url: i.videoApiHost + "/svc/video/api/v2/playlists",
			initialize: function(e) {
				this.allPlaylistData = null, this.apiEnv = e.apiEnv || "production"
			},
			sync: function(t, i, n) {
				return n.dataType = "json", n.timeout = 1e4, n.cache = !0, e.sync(t, i, n)
			},
			getPlaylistMetaData: function(e, t, i) {
				var n = this;
				this.playlistId = e, this.success = t, this.error = i, this.allPlaylistData ? this.findPlaylistById(this.allPlaylistData, this.playlistId, this.success, this.error) : this.fetch({
					success: function(e) {
						n.allPlaylistData = e, n.findPlaylistById(e, n.playlistId, n.success, n.error)
					},
					error: function(e) {
						n.error && n.error(e)
					}
				})
			},
			getPlaylistNode: function(e, t) {
				var i, n;
				if (e)
					for (n in e)
						if (i = e[n], parseInt(i.knews_id, 10) === t) return i;
				return {}
			},
			findPlaylistById: function(e, t, i, n) {
				var s, a, o;
				if (this.playlistId = t, this.success = i, this.error = n, s = e.toJSON(), a = s.plst_all, o = this.getPlaylistNode(a, this.playlistId)) {
					if (!this.success) return o;
					this.success(o)
				} else this.error && this.error({
					message: "Could not find playlist in all playlists data."
				})
			}
		});
		return n
	}), define("shared/video/models/video-thumb", ["backbone/nyt", "foundation/models/base-model"], function(e, t) {
		"use strict";
		var i = t.extend({
			defaults: {
				itemIndex: "",
				itemOrdinal: "",
				thumbLink: "",
				thumbImg: "",
				thumbDesc: "",
				thumbAutoPlayPaused: "",
				thumbAutoPlayRemainingTime: "5"
			}
		});
		return i
	}), define("shared/video/collections/video-thumbs", ["backbone/nyt", "underscore/nyt", "foundation/collections/base-collection", "shared/video/models/video-thumb"], function(e, t, i, n) {
		"use strict";
		var s = i.extend({
			model: n
		});
		return s
	}), define("shared/video/views/video-thumb", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "shared/video/templates", "foundation/views/base-view"], function(e, t, i, n, s) {
		"use strict";
		var a = s.extend({
			thumbTemplate: n.videoEndCardThumb,
			render: function() {
				return this.thumbTemplate(this.model.toJSON())
			}
		});
		return a
	}),
	function(e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("shared/video/libs/countdown-timer", ["jquery/nyt"], t) : e.amdWeb = t(e.$)
	}(this, function(e) {
		"use strict";

		function t(t, i) {
			this.timeout = 1e3 * t, this.interval = 1e3 * i || 1e3, this.running = !1, this.startTime = 0, this.ticks = 0, this.pauseTime = 0, this.runTime = 0, this.intervalId = null, this.resumeId = null, this.active = !0, this.$emitter = e({}), this.tick = e.proxy(this.tick, this)
		}
		return t.prototype.start = function() {
			var e = this,
				t = 0;
			this.active && (this.pauseTime ? (t = this.interval - this.runTime % this.interval, this.pauseTime = 0, this.emit("resume")) : this.emit("start"), this.running = !0, this.startTime = (new Date).getTime(), this.resumeId = setTimeout(function() {
				t > 0 && e.tick(), e.running && (e.intervalId = setInterval(e.tick, e.interval))
			}, t))
		}, t.prototype.tick = function() {
			var e;
			this.ticks++, e = this.timeout - this.ticks * this.interval, 0 >= e ? this.complete() : this.emit({
				type: "tick",
				timeLeft: e / 1e3
			})
		}, t.prototype.on = function(e, t) {
			this.$emitter.on(e, t)
		}, t.prototype.emit = function(e, t) {
			this.$emitter.trigger(e, t)
		}, t.prototype.complete = function() {
			this.emit("complete"), this.stop()
		}, t.prototype.stop = function() {
			clearInterval(this.intervalId), clearInterval(this.resumeId), this.emit("stop"), this.$emitter.off(), this.running = !1, this.startTime = 0, this.pauseTime = 0, this.runTime = 0, this.ticks = 0
		}, t.prototype.pause = function() {
			this.running && (clearInterval(this.intervalId), clearInterval(this.resumeId), this.emit("pause"), this.running = !1, this.pauseTime = (new Date).getTime(), this.runTime += this.pauseTime - this.startTime)
		}, t
	}), define("shared/video/views/video-end-card", ["jquery/nyt", "underscore/nyt", "shared/video/templates", "foundation/views/base-view", "shared/video/models/playlist-videos", "shared/video/models/playlist-metadata", "shared/video/collections/video-thumbs", "shared/video/views/video-thumb", "shared/sharetools/views/share-tools-container", "foundation/views/page-manager", "shared/video/libs/countdown-timer"], function(e, t, i, n, s, a, o, r, l, d, c) {
		"use strict";
		var h = n.extend({
			initialize: function(e) {
				var n = window.location.host;
				t.bindAll(this, "processPlaylistVideos", "processPlaylistVideosError", "processPlaylistMetaData", "processPlaylistMetaDataError", "replayVideo", "resumeVideo", "onClickVideoOverlayHandler", "onMouseEnterVideoOverlayHandler", "onMouseLeaveVideoOverlayHandler", "onThumbClicked", "changeVideo", "initializeAutoPlayCountdown", "hideVideoEndCard", "stopAutoPlayCountdown"), this.videoModel = this.model.videoModel, this.videoObject = this.model.videoObject, this.currentPlaylistIndex = this.model.currentPlaylistIndex, this.enableAutoPlayCountdown = e.enableAutoPlayCountdown, this.cachedPlaylist = this.model.cachedPlaylist, this.autoplayTimeout = this.model.autoplayTimeout, this.enableAutoPlayCountdown && (this.countdown = new c(this.autoplayTimeout)), this.excludedAutoplayPlaylists = [1194812888716, 0x5af310a56ca7], this.apiEnv = "production", ("www.dev.nytimes.com" === n || "www.stg.nytimes.com" === n || "www.sbx.nytimes.com" === n) && (this.excludedAutoplayPlaylists = [1194812888716, 0x5af310a5dfd7], this.apiEnv = "staging"), this.videoEndCardTemplate = i.videoEndCard, this.iconTextTemplate = i.videoEndCardIcon, this.iconTextReplayHTML = this.iconTextTemplate({
					iconText: "Replay Video"
				}), this.iconTextResumeHTML = this.iconTextTemplate({
					iconText: "Resume Video"
				}), this.$videoInnerContainer = this.model.videoInnerContainer, this.$videoEndCard = null, this.$videoEndCardThumbsContainer = null, this.$videoEndCardVideosSectionHeading = null, this.$videoEndCardVideosSectionHeadingLink = null, this.$videoEndCardVideosReplayButton = null, this.registerListeners(), this.getVideoData(), this.listenTo(this.videoModel, this.videoModel.videoEvents.KILL_VIDEO, this.onKill), this.listenTo(this.videoModel, this.videoModel.videoEvents.HIDE_VIDEO_END_CARD, this.hideVideoEndCard), this.listenTo(this.pageManager, "nyt:page-breakpoint", this.onBreakpoint)
			},
			registerListeners: function() {
				var e = this.videoModel.videoEvents;
				this.listenTo(this.pageManager, e.VIDEO_COMPLETE, this.onVideoComplete), this.listenTo(this.pageManager, e.PLAY_CLICKED, this.onVideoPlayClicked), this.listenTo(this.pageManager, e.VIDEO_PLAY, this.onVideoPlay), this.listenTo(this.pageManager, e.VIDEO_PAUSED, this.onVideoPaused), this.listenTo(this.pageManager, e.AD_START, this.onAdStart)
			},
			unregisterListeners: function() {
				var e = this.videoModel.videoEvents;
				this.stopListening(this.pageManager, e.VIDEO_COMPLETE, this.onVideoComplete), this.stopListening(this.pageManager, e.PLAY_CLICKED, this.onVideoPlayClicked), this.stopListening(this.pageManager, e.VIDEO_PLAY, this.onVideoPlay), this.stopListening(this.pageManager, e.VIDEO_PAUSED, this.onVideoPaused), this.stopListening(this.pageManager, e.AD_START, this.onAdStart)
			},
			onVideoComplete: function(e) {
				e === this.videoModel.get("videoObject") && this.showVideoEndCard(this.model.COMPLETE_STATE)
			},
			onVideoPlayClicked: function(e) {
				e === this.videoModel.get("videoObject") && "playing" !== this.videoObject.status && "adplaying" !== this.videoObject.status && this.showVideoEndCard(this.model.PAUSE_STATE)
			},
			onVideoPaused: function() {},
			onVideoPlay: function(e) {
				e === this.videoModel.get("videoObject") && this.hideVideoEndCard()
			},
			onAdStart: function(e) {
				e === this.videoModel.get("videoObject") && this.hideVideoEndCard()
			},
			getVideoData: function() {
				var t, i, n = "";
				if (this.videoObject && (t = this.videoObject._data)) {
					this.videoModel.get("orphanVideo") ? this.model.set("permalink", e('link[rel="canonical"]').attr("href")) : this.model.set("permalink", t.domain + t.publish_url), this.model.set("videoTitle", t.headline), this.model.set("videoDescription", t.summary);
					for (i in t.images)
						if ("videoSmall" === t.images[i].type) {
							n = this.model.staticBaseUrl + t.images[i].url;
							break
						}
					this.model.set("videoStillImgUrl", n), t.playlist && this.model.set("playlistId", t.playlist.id || 1194811622182)
				}
			},
			getPlaylistId: function(e) {
				var t = /nytp_([^,]+)/.exec(e.join(","))[1];
				return parseInt(t, 10) || 1194811622182
			},
			showVideoEndCard: function(e) {
				var t, i = this;
				if (t = e, !this.videoModel.isVideoFullscreen) {
					if (!this.$videoEndCard) {
						this.render(), this.$videoEndCard = this.$videoInnerContainer.find(".video-end-card"), this.$videoEndCardThumbsContainer = this.$videoEndCard.find(".video-end-card-thumbs"), this.$videoEndCardVideosSectionHeading = this.$videoEndCard.find(".video-end-card-section-heading"), this.$videoEndCardVideosSectionHeadingLink = this.$videoEndCardVideosSectionHeading.find("a");
						try {
							new l({
								el: this.$videoEndCard.find(".video-share"),
								modalSettings: {
									hasOverlay: !0,
									tailDirection: "fixed",
									hasCloseButton: !0,
									shares: "facebook,email,twitter,pinterest,linkedin,reddit,google,save,permalink"
								}
							})
						} catch (n) {
							this.$videoEndCard.find(".video-share").hide()
						}
					}
					this.$videoEndCard && (this.onSetEndCardTemplateClass(this.videoModel.get("videoOuterContainer")), this.$videoEndCardVideosReplayButton = this.$videoEndCard.find(".video-end-card-play-button"), t === this.model.COMPLETE_STATE ? this.$videoEndCardVideosReplayButton.removeClass("video-end-card-resume-button").html(this.iconTextReplayHTML).on("click", this.replayVideo) : t === this.model.PAUSE_STATE && this.$videoEndCardVideosReplayButton.addClass("video-end-card-resume-button").html(this.iconTextResumeHTML).on("click", this.resumeVideo), this.videoObject.modules.controls.hide(), this.$videoEndCard.fadeIn(500), null === this.cachedPlaylist ? (this.getVideoData(), this.fetchPlaylistVideos(function() {
						i.initializeAutoPlayCountdown(t)
					}), this.fetchPlaylistMetaData()) : i.initializeAutoPlayCountdown(t), this.$videoEndCard.on("click", this.onClickVideoOverlayHandler), this.$videoEndCard.on("mouseenter", this.onMouseEnterVideoOverlayHandler), this.$videoEndCard.on("mouseleave", this.onMouseLeaveVideoOverlayHandler))
				}
			},
			onBreakpoint: function() {
				this.onSetEndCardTemplateClass(this.videoModel.get("videoOuterContainer"))
			},
			initializeAutoPlayCountdown: function(e) {
				function t(e) {
					o.text(e.timeLeft)
				}

				function i() {
					a.remove(), r.changeVideo(l.data("videoid"), l.data("index"), !1)
				}

				function n() {
					l.off("click", r.onThumbClicked), l.on("click", function(e) {
						a.toggleClass("paused"), a.hasClass("paused") ? r.countdown.pause() : r.countdown.start(), e.stopPropagation(), e.preventDefault()
					})
				}

				function s() {
					l.off("click"), l.on("click", r.onThumbClicked), o.text(r.autoplayTimeout), a.addClass("off"), a.removeClass("paused")
				}
				var a, o, r = this,
					l = this.$videoEndCard.find(".video-end-card-thumb.first a");
				!this.enableAutoPlayCountdown || e === this.model.PAUSE_STATE || -1 !== this.excludedAutoplayPlaylists.indexOf(this.model.get("playlistId")) || this.videoModel.get("orphanVideo") || this.videoModel.get("live") || (a = this.$videoEndCard.find(".video-end-card-thumb.first .autoplayMeta"), o = a.find(".countdown span"), a.removeClass("off"), this.countdown.on("tick", t), this.countdown.on("complete", i), this.countdown.on("start", n), this.countdown.on("stop", s), this.countdown.start())
			},
			stopAutoPlayCountdown: function() {
				this.enableAutoPlayCountdown && this.countdown.stop()
			},
			onSetEndCardTemplateClass: function(e) {
				var t, i = e,
					n = "layout-large",
					s = "layout-medium",
					a = "layout-small";
				i && this.$videoEndCard && (t = i.width(), t >= 720 ? this.$videoEndCard.removeClass("hidden").addClass(a).addClass(s).addClass(n) : t >= 600 ? this.$videoEndCard.removeClass("hidden").addClass(a).addClass(s).removeClass(n) : t >= 450 ? this.$videoEndCard.removeClass("hidden").addClass(a).removeClass(s).removeClass(n) : this.$videoEndCard.addClass("hidden"), !this.videoObject || "playing" !== this.videoObject.status && "adplaying" !== this.videoObject.status || this.hideVideoEndCard())
			},
			onClickVideoOverlayHandler: function(t) {
				var i = this.videoModel.clickableElements,
					n = i.join(", "),
					s = e(t.target).is(n);
				s || t.stopPropagation()
			},
			onMouseEnterVideoOverlayHandler: function(e) {
				e.stopPropagation(), this.$videoEndCardVideosReplayButton && this.$videoEndCardVideosReplayButton.addClass("expand")
			},
			onMouseLeaveVideoOverlayHandler: function() {
				this.$videoEndCardVideosReplayButton && this.$videoEndCardVideosReplayButton.removeClass("expand")
			},
			hideVideoEndCard: function(t, i) {
				var n;
				t = t || 500, this.stopAutoPlayCountdown(), this.$videoEndCard && this.$videoEndCard.is(":visible") && (n = this, this.$videoEndCard.fadeOut(t, function() {
					e(this).hide(), n.$videoEndCardVideosReplayButton.off("click"), n.$videoEndCard.off("click"), i && i()
				}))
			},
			fetchPlaylistVideos: function(e) {
				this.model.playlistVideosDataModel || (this.model.playlistVideosDataModel = new s, this.model.playlistVideosDataModel.fetchData({
					playlistId: this.model.get("playlistId")
				}, this.processPlaylistVideos, this.processPlaylistVideosError, e))
			},
			processPlaylistVideos: function(t, i) {
				var n, s, a, l, d, c, h, u, m;
				if (s = t.toJSON(), n = this, s)
					if (null === this.cachedPlaylist && (this.cachedPlaylist = t), this.$videoEndCardThumbsContainer.empty(), s.videos) {
						if (a = s.videos.length, this.currentPlaylistIndex >= a) return;
						for (l = 0, this.videoThumbs = new o, c = this.currentPlaylistIndex; a > c; c++)
							if (d = s.videos[c], m = this.model.get("videoStillImgUrl"), parseInt(d.id, 10) !== this.videoModel.get("videoId")) {
								if (!(l < this.model.maxThumbs)) break;
								for (h in d.images)
									if ("videoSmall" === d.images[h].type) {
										m = this.model.staticBaseUrl + d.images[h].url;
										break
									}
								u = {
									itemIndex: l,
									itemOrdinal: 0 === l ? "first" : l === this.model.maxThumbs - 1 ? "last" : "",
									thumbLink: d.domain + d.publish_url,
									thumbImg: m,
									thumbDesc: d.headline,
									thumbVideoId: d.id,
									thumbIndex: c,
									thumbAutoPlayRemainingTime: this.autoplayTimeout
								}, this.videoThumbs.add(u), l += 1
							}
						this.currentPlaylistIndex = c, this.videoThumbs.each(function(t) {
							var i = new r({
									model: t
								}),
								s = e(i.render()),
								a = parseInt(t.get("itemIndex"), 10),
								o = 250 * a;
							n.$videoEndCardThumbsContainer.append(s), s.find("a").on("click", n.onThumbClicked), setTimeout(function() {
								s.addClass("fade-in")
							}, o)
						}), i && "function" == typeof i && i()
					} else this.processPlaylistError()
			},
			onThumbClicked: function() {
				var e = this.$videoEndCard.find(".video-end-card-thumb.first .autoplayMeta");
				e.hasClass("paused") || (this.countdown.pause(), e.addClass("paused"))
			},
			changeVideo: function(e, t, i) {
				var n = this;
				this.hideVideoEndCard(200, function() {
					n.currentPlaylistIndex = t + 1, n.videoObject.options.userInitiatedNext = i, n.videoObject.load(e, !0), n.processPlaylistVideos(n.cachedPlaylist)
				})
			},
			processPlaylistVideosError: function() {
				this.$videoEndCardThumbsContainer.empty(), this.$videoEndCardThumbsContainer.append('<p class="error">There was an error retrieving more videos.</p>')
			},
			fetchPlaylistMetaData: function() {
				this.model.playlistMetaDataModel || (this.model.playlistMetaDataModel = new a({
					apiEnv: this.apiEnv
				}), this.model.playlistMetaDataModel.getPlaylistMetaData(this.model.get("playlistId"), this.processPlaylistMetaData, this.processPlaylistMetaDataError))
			},
			processPlaylistMetaData: function(e) {
				var t = e;
				t && t.publish_url && t.display_name && (this.model.set("playlistUrl", ["http://www.nytimes.com", t.publish_url].join("")), this.model.set("playlistDisplayName", t.display_name), this.$videoEndCardVideosSectionHeadingLink.attr("href", this.model.get("playlistUrl")).html("More in " + this.model.get("playlistDisplayName"))), this.$videoEndCardVideosSectionHeading.css({
					opacity: 0
				}).removeClass("video-end-card-section-heading-loading").fadeTo(200, 1)
			},
			processPlaylistMetaDataError: function() {
				this.$videoEndCardVideosSectionHeading.css({
					opacity: 0
				}).removeClass("video-end-card-section-heading-loading").fadeTo(200, 1)
			},
			replayVideo: function() {
				this.videoObject.play(), this.hideVideoEndCard()
			},
			resumeVideo: function() {
				this.videoObject.play(), this.hideVideoEndCard()
			},
			render: function() {
				var e;
				return this.$videoEndCard || (this.$videoInnerContainer.find(".video-end-card").remove(), e = this.videoEndCardTemplate(this.model.toJSON()), this.$videoInnerContainer.append(e)), this
			},
			onKill: function() {
				this.stopListening(this.videoModel, this.videoModel.videoEvents.KILL_VIDEO, this.onKill), this.unregisterListeners(), this.$videoEndCard && this.$videoEndCard.remove(), this.model.clear(), this.remove()
			}
		});
		return h
	}),
	function(e, t) {
		"use strict";
		"function" == typeof define && define.amd ? define("shared/video/libs/inactivity-timer-manager", [], t) : e.InactvityTimerManager = t()
	}(this, function() {
		"use strict";

		function e(e, t) {
			if (this.disableIntervalId = null, this.pageManager = e, this.disableInterval = t || 3e4, !e) throw new Error("InactvityTimerManager:: pageManger must be provided")
		}
		return e.prototype.disable = function(e) {
			e = e || this, e.disableIntervalId || (e.disableIntervalId = setInterval(e.disable, e.disableInterval, e)), e.pageManager.trigger("nyt:inactivity-timer-disable")
		}, e.prototype.enable = function() {
			clearInterval(this.disableIntervalId), this.disableIntervalId = null, this.pageManager.trigger("nyt:inactivity-timer-enable")
		}, e
	}), define("shared/video/views/video", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/views/base-view", "foundation/hosts", "shared/video/models/video-end-card", "shared/video/views/video-end-card", "foundation/views/page-manager", "shared/video/libs/inactivity-timer-manager", "shared/video/templates", "shared/video/models/video", "shared/sharetools/views/share-tools-container", "shared/sharetools/models/share-data"], function(e, t, i, n, s, a, o, r, l, d, c, h, u, m) {
		"use strict";
		var p, g = s.extend({
			defaultSettings: {
				loadVhs: function(e) {
					require(["vhs"], e)
				}
			},
			initialize: function(e) {
				var i = this,
					n = window.location.host,
					s = new h,
					a = this.model.get("videoId"),
					o = this.model.get("width"),
					r = this.model.get("height"),
					u = this.model.get("videoFigure"),
					g = this.model.get("pagePosition") || s.playerPositions.POSITION_EMBEDDED,
					f = this.model.get("autoStart") === !1 ? !1 : !0,
					v = this.model.get("playerType") || "article",
					b = "video_inner_" + g + "_",
					y = "video_outer_" + g + "_",
					_ = this.model.get("userInitiatedPlay") || !1,
					w = this.model.get("orphanVideo") || !1,
					k = c.video,
					C = k({
						outerId: y + a,
						innerId: b + a
					});
				this.settings = t.extend({}, this.defaultSettings, e), t.bindAll(this, "handleVHSLoad", "onPlayerReady", "onKillVideo", "onVideoComplete", "onVideoPlay", "onPlayClicked", "onVideoPaused", "onAdStart", "onAdComplete", "onFullscreen", "onExitFullscreen", "onClickVideoHandler", "onMediaChange", "initializeShareTools", "toggleEmbedField"), this.genericVideoModel = s, this.shareOptions = this.setShareOptions(v, w), u.prepend(C), this.vhsConfig = {
					container: b + a,
					width: o,
					height: r,
					id: a,
					autoplay: f,
					cover: {
						mode: "article"
					},
					type: v,
					userInitiatedPlay: _,
					controlsOverlay: {
						mode: "article"
					},
					endSlate: !1,
					shareOptions: this.shareOptions,
					newControls: !0
				}, "homepage" === u.data("page") ? (this.inactivityTimerManager = new d(l), this.vhsConfig.endSlate = !0, this.vhsConfig.cover.mode = "homepage", this.vhsConfig.cover.intro = "fade", this.vhsConfig.cover.outro = "fade", u.data("headline") && (this.vhsConfig.cover.headline = u.data("headline")), v === this.genericVideoModel.playerTypes.HOMEPAGE_SPAN_AB_TOP && u.data("summary") && (this.vhsConfig.cover.summary = u.data("summary")), "VideoEmbed" !== u.data("collection-renderstyle") && (this.vhsConfig.cover.mode = "duration")) : this.pageManager.isDesktop() || (this.vhsConfig.cover.mode = "mobile"), (n.indexOf("dev.") > -1 || n.indexOf("stg.") > -1 || n.indexOf("sbx.") > -1) && (this.vhsConfig.env = "staging"), this.$shareToolsInline = u.find(".sharetools-video-inline"), this.shareData = new m(this.$shareToolsInline), w || (this.$shareToolsVideo = u.find(".sharetools-video-tools"), this.$shareToolsVideoEmbedBtn = this.$shareToolsVideo.find(".embed-sharetool"), this.$shareToolsVideo.show()), this.settings.loadVhs(function(e) {
					p = e, i.handleVHSLoad()
				})
			},
			setShareOptions: function(t, i) {
				var n = {},
					s = e('link[rel="canonical"]').attr("href");
				return i && s && (n.url = s), n
			},
			handleVHSLoad: function() {
				var e = this.model.get("videoId"),
					t = this.model.get("videoFigure"),
					i = t.find(".video-bind"),
					n = t.find(".video-container");
				this.video = p.player(this.vhsConfig), this.video && (this.model.set("videoObject", this.video), this.model.set("videoId", e), this.model.set("videoInnerContainer", n), this.model.set("videoOuterContainer", i), this.video.on(p.api.events.LOADED, this.onPlayerReady)), t.on("click", this.onClickVideoHandler)
			},
			initializeShareTools: function() {
				this.setVideoPlayerShareData(), new u({
					trackingRegion: "video-player-region",
					el: this.$shareToolsInline
				}), this.$shareToolsVideoEmbedBtn && this.$shareToolsVideoEmbedBtn.length > 0 && this.$shareToolsVideoEmbedBtn.on("click", this.toggleEmbedField)
			},
			toggleEmbedField: function() {
				var e = "share-embed-open",
					t = {
						module: "ShareTools",
						action: "click",
						version: "video",
						region: "video-player-region",
						pgtype: this.pageManager.getMeta("PT"),
						contentCollection: this.pageManager.getMeta("CG"),
						eventTimestamp: (new Date).getTime()
					};
				this.$shareToolsVideoEmbedField && this.$shareToolsVideoEmbedField.length > 0 ? this.$shareToolsVideoEmbedField.is(":visible") ? (this.$shareToolsVideoEmbedField.hide(), this.$shareToolsVideo.removeClass("with-embed"), e = "share-embed-close") : (this.$shareToolsVideoEmbedField.show(), this.$shareToolsVideo.addClass("with-embed"), this.focusEmbedCodeInput()) : this.addEmbedField(), t.eventName = e, this.trackingTrigger(e, t)
			},
			addEmbedField: function() {
				var t = this.model.get("videoId"),
					i = c.embedCode({
						embedId: "nyt-video-embed-" + t,
						embedCode: this.video.getEmbedCode()
					});
				this.$shareToolsVideoEmbedField = e(i), this.$shareToolsVideo.prepend(this.$shareToolsVideoEmbedField), this.$shareToolsVideo.addClass("with-embed"), this.focusEmbedCodeInput()
			},
			removeEmbedField: function() {
				this.$shareToolsVideoEmbedField && this.$shareToolsVideoEmbedField.length > 0 && (this.$shareToolsVideoEmbedField.remove(), this.$shareToolsVideoEmbedField = null), this.$shareToolsVideo && this.$shareToolsVideo.length > 0 && this.$shareToolsVideo.removeClass("with-embed")
			},
			focusEmbedCodeInput: function() {
				this.$shareToolsVideoEmbedField.find("input").select().focus()
			},
			setVideoPlayerShareData: function() {
				var e = this.video,
					t = e.getVideoCanonical() || "http:" + a.www + "/video";
				this.shareOptions && this.shareOptions.url && (t = this.shareOptions.url), this.shareData.setVia("nytvideo"), this.shareData.setUrl(t), this.shareData.setDescription(e.getSummary()), this.shareData.setTitle(e.getTitle()), this.removeEmbedField()
			},
			onClickVideoHandler: function(t) {
				var i = this.model.clickableElements,
					n = i.join(", "),
					s = e(t.target).is(n);
				s || t.stopPropagation()
			},
			createVideoEndCard: function() {
				this.vhsConfig.endSlate || (this.videoEndCardModel = new o({
					videoModel: this.model
				}), this.videoEndCardView = new r({
					model: this.videoEndCardModel,
					enableAutoPlayCountdown: this.model.get("pagePosition") === this.model.playerPositions.POSITION_LEDE
				}))
			},
			onPlayerReady: function() {
				this.initializeShareTools(), this.bindVideoEvents(), this.createVideoEndCard(), this.listenTo(this.model, this.model.videoEvents.KILL_VIDEO, this.onKillVideo)
			},
			onKillVideo: function() {
				var e = this.model.get("videoObject"),
					t = this.model.get("videoFigure"),
					i = this.model.get("videoOuterContainer");
				this.stopListening(this.model, this.model.videoEvents.KILL_VIDEO, this.onKillVideo), this.bindVideoEvents(!0), this.model.set("videoObject", null), this.model.set("videoInnerContainer", null), this.model.set("videoOuterContainer", null), e && e.destroy(), t.off("click"), i.remove(), t.remove(), this.remove()
			},
			bindVideoEvents: function(e) {
				var t, i = {},
					n = {};
				if (e = e || !1, this.video) {
					if (i[p.api.events.ENDED] = this.onVideoComplete, i[p.api.events.PLAY] = this.onVideoPlay, i[p.api.events.PAUSE] = this.onVideoPaused, i[p.api.events.AD_STARTED] = this.onAdStart, i[p.api.events.AD_COMPLETED] = this.onAdComplete, i[p.api.events.GO_FULLSCREEN] = this.onFullscreen, i[p.api.events.EXIT_FULLSCREEN] = this.onExitFullscreen, i[p.api.events.LOAD_START] = this.onMediaChange, n[p.api.events.READY] = this.onPlayerReady, e)
						for (t in n) n.hasOwnProperty(t) && (i[t] = n[t]);
					for (t in i) i.hasOwnProperty(t) && (e ? this.video.off(t, i[t]) : this.video.on(t, i[t]))
				}
			},
			onVideoComplete: function() {
				this.broadcast(this.model.videoEvents.VIDEO_COMPLETE, this.video), this.inactivityTimerManager && this.inactivityTimerManager.enable()
			},
			onVideoPlay: function() {
				this.model.isAdPlaying = !1, this.broadcast(this.model.videoEvents.VIDEO_PLAY, this.video), this.inactivityTimerManager && this.inactivityTimerManager.disable()
			},
			onPlayClicked: function() {
				this.broadcast(this.model.videoEvents.PLAY_CLICKED, this.video)
			},
			onVideoPaused: function() {
				this.broadcast(this.model.videoEvents.VIDEO_PAUSED, this.video), this.inactivityTimerManager && this.inactivityTimerManager.enable()
			},
			onAdStart: function() {
				this.model.isAdPlaying = !0, this.broadcast(this.model.videoEvents.AD_START, this.video), this.inactivityTimerManager && this.inactivityTimerManager.disable()
			},
			onAdComplete: function() {
				this.model.isAdPlaying = !1, this.broadcast(this.model.videoEvents.AD_COMPLETE, this.video), this.inactivityTimerManager && this.inactivityTimerManager.enable()
			},
			onFullscreen: function() {
				this.model.isVideoFullscreen = !0, this.broadcast(this.model.videoEvents.VIDEO_FULLSCREEN, this.video)
			},
			onExitFullscreen: function() {
				this.model.isVideoFullscreen = !1, this.broadcast(this.model.videoEvents.VIDEO_EXIT_FULLSCREEN, this.video)
			},
			onMediaChange: function() {
				this.broadcast(this.model.videoEvents.MEDIA_CHANGE, this.video), this.setVideoPlayerShareData()
			}
		});
		return g
	}), define("shared/video/views/embedded-videos", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/collections/base-collection", "foundation/views/base-view", "shared/video/models/video", "shared/video/views/video", "shared/mediaviewer/instances/media-viewer", "foundation/views/page-manager"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = s.extend({
			className: "video",
			el: e("figure.video"),
			videos: new n,
			events: {
				click: "handleVideoModalClick"
			},
			videoView: null,
			modalVideoModel: null,
			initialize: function(e) {
				this.settings = t.extend({}, e), this.subscribe("nyt:mediaviewer-open", this.onMediaViewerOpen), t.bindAll(this, "onVideoMediaViewerOpen", "onMediaViewerClose"), this.genericVideoModel = new a, this.pageManager.isMobile() || this.subscribe(this.genericVideoModel.videoEvents.MEDIA_CHANGE, this.onMediaChange), this.pageManager.isDomReady() ? this.handlePageReady() : this.subscribeOnce("nyt:page-ready", this.handlePageReady)
			},
			handlePageReady: function() {
				var t = this;
				this.$el.each(function() {
					t.initVideoFigure(e(this))
				})
			},
			initVideoFigure: function(i) {
				var n, s, r, l, d = !1,
					c = !0,
					h = i.data("videoid"),
					u = i.data("embedded") || !1,
					m = e("body").find("figure.video.lede").eq(0),
					p = this.genericVideoModel.playerTypes,
					g = i.data("live") || !1;
				return h ? (s = this.getPlayerPosition(i), n = this.getPlayerType(s, i), this.pageManager.isDesktop() && -1 !== [p.ARTICLE_LEDE, p.BLOG].indexOf(n) && (i.data("autoplay") === !0 || this.checkExternalReferrerAutoPlay(m)) && (d = !0, c = !1), n === p.ARTICLE_MODAL && (d = !0, c = !0), r = {
					videoId: h,
					videoFigure: i,
					autoStart: d,
					width: "100%",
					height: "100%",
					modal: n === p.ARTICLE_MODAL ? !0 : !1,
					pagePosition: s,
					playerType: n,
					userInitiatedPlay: c,
					orphanVideo: u,
					live: g
				}, l = new a(r), this.videos.add(l), void(n !== p.ARTICLE_MODAL ? this.videoView = new o(t.extend({}, this.settings.videoViewOptions, {
					model: l
				})) : i.find(".caption a.video-link").click(function(e) {
					e.stopPropagation()
				}))) : !1
			},
			checkExternalReferrerAutoPlay: function(e) {
				var t = document.referrer,
					i = t && -1 === t.split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)[4].indexOf("nytimes.com"),
					n = !t || i,
					s = e && e.data("autoplay") === !1,
					a = e && "noads" !== e.data("adsensitivity"),
					o = "article" === this.pageManager.getMeta("PT");
				return o && a && s && n ? !0 : !1
			},
			handleVideoModalClick: function(t) {
				var i = e(t.currentTarget),
					n = this.videos.findWhere({
						videoId: i.data("videoid")
					});
				return n ? "link-to" === i.data("media-action") ? void t.stopPropagation() : void(n.get("modal") && (t.preventDefault(), t.stopPropagation(), this.modalVideoModel = n, this.pageManager.isMobile() || this.subscribeOnce("nyt:mediaviewer-open", this.onVideoMediaViewerOpen), r.renderForVideo(this.modalVideoModel, this.onVideoMediaViewerOpen))) : void 0
			},
			getPlayerPosition: function(e) {
				var t, i = this.genericVideoModel.playerPositions;
				return t = e.hasClass("lede") ? i.POSITION_LEDE : e.hasClass("inline") ? i.POSITION_INLINE : "photospot" === e.data("position") ? i.POSITION_PHOTOSPOT : "spanabtop" === e.data("position") ? i.POSITION_SPAN_AB_TOP : "secondcolumn" === e.data("position") ? i.POSITION_SECOND_COLUMN : i.POSITION_EMBEDDED
			},
			getPlayerType: function(e, t) {
				var i, n = this.genericVideoModel.playerPositions,
					s = this.genericVideoModel.playerTypes;
				return i = t.hasClass("blog-video") ? s.BLOG : e === n.POSITION_INLINE ? s.ARTICLE_MODAL : e === n.POSITION_LEDE ? s.ARTICLE_LEDE : e === n.POSITION_PHOTOSPOT ? s.HOMEPAGE_PHOTOSPOT : e === n.POSITION_SPAN_AB_TOP ? s.HOMEPAGE_SPAN_AB_TOP : e === n.POSITION_SECOND_COLUMN ? s.HOMEPAGE_SECOND_COLUMN : "homepage" === t.data("page") ? "homepage-" + t.data("position") : s.ARTICLE_EMBEDDED
			},
			onVideoMediaViewerOpen: function() {
				var i = e("figure.media-viewer-video");
				i && this.modalVideoModel && (this.subscribeOnce("nyt:mediaviewer-close", this.onMediaViewerClose), this.modalVideoModel.set("videoFigure", i), this.videoView = new o(t.extend({}, this.settings.videoViewOptions, {
					model: this.modalVideoModel
				})))
			},
			onMediaViewerClose: function() {
				this.modalVideoModel && (this.modalVideoModel.kill(), this.modalVideoModel = null, this.videoView = null)
			},
			onMediaViewerOpen: function() {
				this.videos.each(function(e) {
					e && e.pause()
				})
			},
			onMediaChange: function(t) {
				var i;
				t.firstPlay || (i = e(t.container) || e(".video"), i.closest("figure").find(".summary-credit").animate({
					opacity: 0
				}))
			}
		});
		return l
	}), define("shared/video/instances/videos", ["jquery/nyt", "underscore/nyt", "shared/video/views/embedded-videos"], function(e, t, i) {
		"use strict";
		var n = function() {
			var t;
			t = e("figure.video"), t.length > 0 && new i({
				el: t,
				videoContainerSelector: "figure.video"
			})
		};
		e(document).ready(function() {
			t.defer(n)
		})
	}), define("article/story/views/full-bleed/cover-image", ["jquery/nyt", "foundation/views/base-view"], function(e, t) {
		"use strict";
		var i = t.extend({
			$story: e("#story"),
			imgResolution: "large",
			nytEvents: {
				"nyt:page-resize": "setBleed"
			},
			initialize: function() {
				var e;
				this.coverToLedeBreakpoint = window.magnum.responsiveImages.coverToLedeBreakpoint, this.$cover = this.$story.find(".cover.photo"), this.$coverImage = this.$cover.find("img"), this.viewportWidth = window.innerWidth, e = this.$cover.data("bleed-style"), "full-bleed" === e ? this.bleedType = "full-bleed-lede" : this.bleedType = "full-bleed-cover", this.checkImageResolution()
			},
			handleDomReady: function() {
				this.checkLayout()
			},
			checkLayout: function() {
				var t = e("#story-header").height();
				this.pageManager.flag("bleedtransitions") && window.magnum.responsiveImages.setStoryBodyTop(t)
			},
			setBleed: function() {
				this.viewportWidth = this.magnum.getWidth(), this.$coverImage.removeAttr("style"), this.pageManager.flag("bleedtransitions") ? (this.viewportWidth <= this.coverToLedeBreakpoint ? window.magnum.responsiveImages.setBelowCoverToLedeBreakpoint(!0) : window.magnum.responsiveImages.setBelowCoverToLedeBreakpoint(!1), this.viewportWidth <= this.coverToLedeBreakpoint || "full-bleed-lede" === this.bleedType ? this.makeFullBleedLede() : "full-bleed-cover" === this.bleedType && this.makeFullBleedCover()) : this.viewportWidth < this.coverToLedeBreakpoint || "full-bleed-lede" === this.bleedType ? this.makeFullBleedLede() : "full-bleed-cover" === this.bleedType && this.makeFullBleedCover(), this.checkImageResolution()
			},
			makeFullBleedCover: function() {
				this.$story.addClass("has-full-bleed-cover").removeClass("has-full-bleed-image-lede"), window.magnum.responsiveImages.makeFullBleedCover()
			},
			makeFullBleedLede: function() {
				this.$story.addClass("has-full-bleed-image-lede").removeClass("has-full-bleed-cover"), window.magnum.responsiveImages.makeFullBleedLede()
			},
			checkImageResolution: function() {
				this.viewportWidth > 600 && this.viewportWidth < 1024 && "large" === this.imgResolution ? this.swapCoverImage("jumbo") : this.viewportWidth > 1024 && "superjumbo" !== this.imgResolution && this.swapCoverImage("superjumbo")
			},
			swapCoverImage: function(e) {
				var t = this.$coverImage,
					i = e + "src",
					n = this.$coverImage.data(i),
					s = new Image;
				this.imgResolution = e, s.onload = function() {
					t.attr("src", s.src)
				}, s.src = n
			}
		});
		return i
	}), define("article/story/views/full-bleed/inline-image", ["jquery/nyt", "foundation/views/base-view"], function(e, t) {
		"use strict";
		var i = t.extend({
			main: e("#main"),
			page: e("#page"),
			nytEvents: {
				"nyt:page-resize": "setBleed"
			},
			initialize: function(e) {
				this.$el = e.el, e.main && (this.main = e.main), e.page && (this.page = e.page), this.setBleed()
			},
			setBleed: function() {
				var e, t, i = this.page.width(),
					n = this.main.width(),
					s = parseInt(this.main.css("margin-left"), 10),
					a = parseInt(this.main.css("margin-right"), 10),
					o = n + s + a,
					r = parseInt(this.$el.css("margin-left"), 10),
					l = (i - n) / 2;
				o >= i ? (t = o, e = s + r) : (t = i, e = l + r), this.$el.find(".image").css({
					width: t,
					"margin-left": "-" + e + "px"
				})
			}
		});
		return i
	}), define("article/story/views/full-bleed/inline-ad", ["jquery/nyt", "foundation/views/base-view"], function(e, t) {
		"use strict";
		var i = t.extend({
			main: e("#main"),
			page: e("#page"),
			nytEvents: {
				"nyt:page-resize": "setBleed"
			},
			initialize: function(e) {
				this.$el = e.el, e.main && (this.main = e.main), e.page && (this.page = e.page), this.setBleed()
			},
			setBleed: function() {
				var e = this.page.width(),
					t = this.main.width(),
					i = (e - t) / 2;
				this.pageManager.flag("inlineAdStyles") || this.$el.css({
					width: e,
					"margin-left": "-" + i + "px"
				})
			}
		});
		return i
	}), define("article/story/instances/full-bleed", ["jquery/nyt", "foundation/views/page-manager", "article/story/views/full-bleed/cover-image", "article/story/views/full-bleed/inline-image", "article/story/views/full-bleed/inline-ad"], function(e, t, i, n, s) {
		"use strict";
		e("#story").find(".cover.photo").length > 0 && new i, e(document).ready(function() {
			var t = e("#story").find(".layout-full-bleed-horizontal, .layout-full-bleed-vertical"),
				i = e("#story").find(".ad.mega-ad");
			t.length > 0 && t.each(function() {
				new n({
					el: e(this)
				})
			}), i.length > 0 && i.each(function() {
				new s({
					el: e(this)
				})
			})
		})
	}), define("shared/upshot/views/headshots", ["jquery/nyt", "underscore/nyt", "foundation/hosts", "foundation/views/base-view"], function(e, t, i, n) {
		"use strict";
		var s = n.extend({
			imgBaseUrl: i.staticHost + "/packages/images/nytint/projects/upshot/headshots/",
			upshotAuthors: [],
			initialize: function() {
				"upshot" === this.pageManager.getMeta("CG") && this.getAuthors()
			},
			getAuthors: function() {
				var i = this;
				e(".upshot-author-image").each(function() {
					var n = e(this).data("author-name");
					n && -1 === t.indexOf(i.upshotAuthors, n) && (i.upshotAuthors.push(n), i.checkImageAsset(n))
				})
			},
			checkImageAsset: function(e, t) {
				var i = this,
					n = this.imgBaseUrl + e + ".jpg",
					s = this.imgBaseUrl + e + "@2x.jpg",
					a = t ? !1 : window.devicePixelRatio >= 1.5,
					o = !1,
					r = new Image;
				r.src = a ? s : n, r.onload = function() {
					o = !0, i.callback(e, o, a)
				}, r.onerror = function() {
					o = !1, i.callback(e, o), a && i.checkImageAsset(e, !0)
				}
			},
			callback: function(t, i, n) {
				var s, a = "thumb";
				i && (s = n ? this.imgBaseUrl + t + "@2x.jpg" : this.imgBaseUrl + t + ".jpg", e(".upshot-author-image-" + t).css("background-image", "url(" + s + ")").addClass("loaded").wrap('<div class="' + a + '"></div>'))
			}
		});
		return s
	}), define("shared/upshot/instances/headshots", ["shared/upshot/views/headshots"], function(e) {
		"use strict";
		new e
	}), define("shared/following/views/follow-button-manager", ["jquery/nyt", "shared/messaging/views/follow-button", "foundation/views/base-view"], function(e, t, i) {
		"use strict";
		var n = i.extend({
			initialize: function() {
				return this.subscribe("nyt:new-follow-button", this.createNewButton), this.pageManager.flag("followingRelease") ? void this.findFollowButtons() : void this.subscribe("nyt:messaging-user-has-ability-to-follow", this.findFollowButtons)
			},
			findFollowButtons: function() {
				var t = this;
				e(".follow-button-placeholder").each(function() {
					t.createNewButton(e(this))
				})
			},
			createNewButton: function(e) {
				(this.pageManager.flag("followingRelease") || this.pageManager.getMeta("nyt:messaging-user-has-ability-to-follow")) && new t({
					$el: e
				})
			}
		});
		return n
	}), define("shared/following/instances/follow-button", ["shared/following/views/follow-button-manager"], function(e) {
		"use strict";
		new e
	}), define("article/story/instances/scoop-loader", ["foundation/views/page-manager", "foundation/hosts", "foundation/cookies"], function(e, t, i) {
		"use strict";
		i.readCookie("nyt-scoop") && e.flag("scoopTool") && require([t.scoopTool + "/ui/base/nyt-scoop/init.js"])
	}), define("article/story/views/review-map/review-map", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "article/story/templates"], function(e, t, i, n) {
		"use strict";
		var s = i.extend({
			map: null,
			model: null,
			title: null,
			styles: null,
			center: null,
			options: null,
			bounds: null,
			infoWin: null,
			initialZoom: null,
			markers: [],
			events: [],
			initialize: function() {
				this.styles = [{
					elementType: "labels.text.fill",
					stylers: [{
						color: "#8C8676"
					}]
				}, {
					featureType: "poi",
					elementType: "geometry",
					stylers: [{
						saturation: -10
					}, {
						lightness: 18
					}]
				}, {
					featureType: "poi.medical",
					elementType: "geometry",
					stylers: [{
						color: "#D8D6D0"
					}]
				}, {
					featureType: "poi.school",
					elementType: "geometry",
					stylers: [{
						color: "#D8D6D0"
					}]
				}, {
					featureType: "poi.park",
					elementType: "geometry",
					stylers: [{
						color: "#CDDDBA"
					}]
				}, {
					featureType: "poi",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "transit.line",
					stylers: [{
						visibility: "off"
					}]
				}, {
					featureType: "water",
					elementType: "geometry",
					stylers: [{
						color: "#ACD1E2"
					}]
				}, {
					featureType: "landscape",
					elementType: "geometry",
					stylers: [{
						lightness: 17
					}, {
						saturation: -18
					}]
				}, {
					featureType: "road",
					elementType: "geometry.stroke",
					stylers: [{
						color: "#c7c7c7"
					}]
				}, {
					featureType: "road",
					elementType: "geometry.fill",
					stylers: [{
						color: "#ffffff"
					}]
				}, {
					featureType: "road.arterial",
					elementType: "labels.icon",
					stylers: [{
						visibility: "off"
					}]
				}]
			},
			handleDomReady: function() {
				this.getMap()
			},
			getMap: function() {
				document.getElementById("review-map-data") && (this.model = e("#main").find("#review-map-data").get(0).innerHTML, this.model && (this.model = JSON.parse(this.model), this.model.GoogleMapZoom && this.model.GoogleMapOptions[0].latitude && this.model.GoogleMapOptions[0].longtitude ? this.setMap() : this.hideMap()))
			},
			setMap: function() {
				window.google ? (this.initialZoom = parseInt(this.model.GoogleMapZoom, 10), this.bounds = new window.google.maps.LatLngBounds, this.center = new window.google.maps.LatLng(this.model.GoogleMapOptions[0].latitude, this.model.GoogleMapOptions[0].longtitude), this.options = {
					clickable: !0,
					scrollwheel: !1,
					zoomControl: this.pageManager.flag("reviewsMapZoom"),
					center: this.center,
					styles: this.styles,
					zoom: parseInt(this.model.GoogleMapZoom, 10),
					mapTypeControlOptions: {
						mapTypeIds: [window.google.maps.MapTypeId.SATELLITE, window.google.maps.MapTypeId.ROADMAP]
					}
				}, this.map = new window.google.maps.Map(document.querySelector(".map"), this.options), this.map.setTilt(45), this.setMarkers()) : this.hideMap()
			},
			hideMap: function() {
				document.getElementById(".map") && e(".map").remove()
			},
			setMarkers: function() {
				var e;
				if (this.map) {
					for (e = 0; e < this.model.GoogleMapOptions.length; e++) this.createMarker(this.model.GoogleMapOptions[e]);
					this.map.fitBounds(this.bounds), this.listenUp()
				}
			},
			createMarker: function(e) {
				var t = new window.google.maps.LatLng(e.latitude, e.longtitude),
					i = new window.google.maps.Marker({
						position: t,
						animation: null,
						icon: null,
						map: this.map,
						title: e.title
					});
				this.bounds.extend(t), this.markers.push(i), this.addInfoWin(i, e)
			},
			listenUp: function() {
				var e = this,
					i = t.once(function() {
						1 === e.markers.length && this.setZoom(parseInt(e.model.GoogleMapZoom, 10))
					}),
					n = t.after(2, t.once(function() {
						this.getZoom() > e.initialZoom && e.markers.length > 1 && this.setZoom(e.initialZoom)
					})),
					s = t.after(4, t.once(function() {
						e.registerEvent("zoom_changed", e.title)
					})),
					a = t.once(function() {
						e.registerEvent("click", e.title)
					}),
					o = t.once(function() {
						e.registerEvent("drag", e.title)
					});
				window.google.maps.event.addListener(this.map, "bounds_changed", i), window.google.maps.event.addListener(this.map, "zoom_changed", n), window.google.maps.event.addListener(this.map, "zoom_changed", s), window.google.maps.event.addListener(this.map, "click", a), window.google.maps.event.addListener(this.map, "drag", o)
			},
			addInfoWin: function(e, i) {
				var s, a = this,
					o = this.pageManager.flag("reviewsMapGetDirectionsLink"),
					r = {
						title: i.title,
						address: i.address,
						criticsPick: i.criticsPick,
						ratingClass: i.ratingClass,
						rating: i.rating,
						linkAddr: o ? encodeURIComponent(i.address) : !1,
						attrTitle: o ? t.escape(i.title) : !1
					},
					l = {
						cuisine: i.cuisine,
						price: i.price
					},
					d = {
						venueName: i.venueName
					},
					c = t.once(function() {
						a.registerEvent("marker_click", e.title)
					});
				if (this.pageManager.flag("reviewsMapDetailsCard")) {
					switch (i.section) {
						case "dining":
							s = n.reviewsRestaurantMapInfowin(t.extend(l, r));
							break;
						case "theater":
							s = n.reviewsTheaterMapInfowin(t.extend(d, r));
							break;
						default:
							s = n.reviewsMapInfowin(r)
					}
					this.infoWin = new window.google.maps.InfoWindow
				}
				window.google.maps.event.addListener(e, "click", function() {
					c(), a.pageManager.flag("reviewsMapDetailsCard") && (a.infoWin.setContent(s), a.infoWin.open(a.map, e))
				})
			},
			registerEvent: function(e, t) {
				t = t || "", void 0 === this.events[e] && this.trackingTrigger("review-map", {
					module: "ReviewsMap",
					version: "Content",
					action: e,
					contentCollection: this.pageManager.getMeta("CG"),
					pgtype: this.pageManager.getMeta("PT"),
					eventName: "ReviewsMap-click",
					restaurantName: t
				})
			}
		});
		return s
	}), define("article/story/instances/review-map", ["article/story/views/review-map/review-map"], function(e) {
		"use strict";
		new e
	}), define("shared/freetrial/tracking/tracking", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view"], function(e, t, i) {
		"use strict";
		var n = i.extend({
			el: "#free-trial",
			events: {
				"mouseup .free-trial-intro .next-button": "handleIntroPanelChange",
				"mouseup .free-trial-intro .prev-button": "handleIntroPanelChange",
				"mouseup .free-trial-intro .dot": "handleIntroPanelChange",
				"mouseup .free-trial-intro .skip-button": "handleIntroPanelChange",
				"mouseup .free-trial-intro .subscribe-newsletter .button": "handleIntroNewsletter",
				"mousedown .free-trial-intro .follow-button": "handleIntroFollow",
				"mouseup .free-trial-tasks .toggle-tasks": "handleToggleTasks",
				"mousedown .free-trial-tasks .task-item a": "handleTasksGo",
				"mousedown .free-trial-tasks .scroll-right": "handleTasksScroll",
				"mousedown .free-trial-tasks .scroll-left": "handleTasksScroll",
				"mouseup .free-trial-post .toggle-tasks": "handleTogglePostTrial",
				"mouseup .free-trial-post .outer-link": "handleLPLink"
			},
			initialize: function() {
				this.trackingBaseData = {
					action: "click",
					module: "FreeTrial",
					region: "FixedTop",
					mediaId: this.$el.data("variation")
				}
			},
			fourPanelSteps: {
				0: "WelcomeIntro",
				1: "Newsletter",
				2: "Follow",
				3: "Tour"
			},
			handleLPLink: function(t) {
				var i = e(t.currentTarget),
					n = this.trackingAppendParams(i.attr("href"), {
						contentCollection: "FreeTrialPost",
						contentId: "FTPostTrialToDSLP"
					});
				i.attr("href", n)
			},
			handleTogglePostTrial: function(t) {
				var i = e(t.currentTarget),
					n = i.hasClass("collapsed"),
					s = {
						contentCollection: "TogglePostTrial",
						version: "PostTrial",
						eventName: n ? "ShowAll" : "HideAll",
						priority: !0
					};
				this.trackingTrigger("free-trial-post-trial", s, "interaction")
			},
			handleToggleTasks: function(t) {
				var i = e(t.currentTarget),
					n = i.hasClass("collapsed"),
					s = {
						contentCollection: "ToggleTasks",
						version: "Tasks",
						eventName: n ? "ShowAll" : "HideAll",
						priority: !0
					};
				this.trackingTrigger("free-trial-tasks", s, "interaction")
			},
			handleTasksScroll: function(t) {
				var i = e(t.currentTarget),
					n = i.hasClass("scroll-right"),
					s = {
						contentCollection: "ScrollTasks",
						version: "Tasks",
						eventName: n ? "ScrollRight" : "ScrollLeft",
						priority: !0
					};
				i.hasClass("disabled") || this.trackingTrigger("free-trial-tasks", s, "interaction")
			},
			handleTasksGo: function(t) {
				var i = e(t.currentTarget),
					n = i.data("trackAction"),
					s = i.data("trackId"),
					a = this.trackingAppendParams(i.attr("href"), {
						contentCollection: "GoToComplete",
						contentId: s,
						version: "Tasks",
						eventName: n
					});
				i.attr("href", a)
			},
			handleIntroNewsletter: function(t) {
				var i = e(t.currentTarget),
					n = i.data("trackAction"),
					s = i.data("trackId"),
					a = {
						contentCollection: "newsletter",
						contentId: s,
						version: "4panel",
						eventName: n,
						priority: !0
					};
				this.trackingTrigger("free-trial-intro", a, "interaction")
			},
			handleIntroFollow: function(t) {
				var i = e(t.currentTarget),
					n = i.attr("data-track-action"),
					s = i.data("trackId"),
					a = {
						contentCollection: "follow",
						contentId: s,
						version: "4panel",
						eventName: n,
						priority: !0
					};
				this.trackingTrigger("free-trial-intro", a, "interaction")
			},
			handleIntroPanelChange: function(t) {
				var i = this.fourPanelSteps,
					n = e(t.target),
					s = n.data("trackAction"),
					a = {
						next: function() {
							return i[parseInt(n.data("trackStep"), 10) - 1]
						},
						previous: function() {
							return i[parseInt(n.data("trackStep"), 10) + 1]
						},
						skip: function() {
							return i[parseInt(n.data("trackStep"), 10) - 1]
						},
						"go-step": function() {
							return i[n.data("trackStep")]
						}
					},
					o = {
						contentCollection: a[s](),
						version: "4panel",
						eventName: s,
						priority: !0
					};
				this.trackingTrigger("free-trial-intro", o, "interaction")
			}
		});
		return n
	}), define("shared/freetrial/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.freeTrial = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div id="free-trial" class="free-trial" data-variation="' + (null == (__t = freeTrial.variation) ? "" : __t) + '"></div>';
			return __p
		}, templates.freeTrialBand = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="free-trial-container">\n<div class="logo"></div>\n<div class="discoveries">\n', showRemainingTasks && (__p += '\n<span>\n<span class="remaining-tasks"></span> of <span class="total-tasks"></span>  discoveries remaining\n</span>\n'), __p += "", showDaysLeft && (__p += "\n<span>\n", 0 == daysLeft ? (__p += "\nlast day\n", showDiscoveries && (__p += '\n<span class="additional-info"> to finish your discoveries</span>\n'), __p += "\n") : (__p += "\n<span>" + (null == (__t = daysLeft) ? "" : __t) + "</span> day", daysLeft > 1 && (__p += "s"), __p += " left\n", showDiscoveries && (__p += '\n<span class="additional-info">&nbsp;&mdash;&nbsp;last chance to finish your discoveries</span>\n'), __p += "\n"), __p += "\n</span>\n"), __p += "", showLimitedOffer && (__p += "\n<span>\nlimited time offer\n</span>\n"), __p += "\n</div>", showToggleLink && !showLimitedOffer && (__p += '\n<a href="#" class="toggle-tasks"><span class="text hide-all">hide all</span><span class="text show-all">show discoveries</span><i class="toggle-icon"></i></a>\n'), __p += "", showToggleLink && showLimitedOffer && (__p += '\n<a href="#" class="toggle-tasks"><span class="text hide-all">hide</span><span class="text show-all">show</span><i class="toggle-icon"></i></a>\n'), __p += "\n</div>";
			return __p
		}, templates.freeTrialBar1 = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="modal-panel">\n<div class="arrow"></div>\n<div>\n<div class="image"></div>\n<div class="heading">We hope youâ€™re enjoying your free trial.</div>\n<div class="summary">Extend your Times access and<br>save ' + (null == (__t = discount) ? "" : __t) + ' for one year.</div>\n<div class="button-container">\n<a class="button button-primary" href="' + (null == (__t = takeUpsellUrl) ? "" : __t) + '">Save Now</a>\n</div>\n</div>\n</div>';
			return __p
		}, templates.freeTrialBar1PreTrial = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="modal-panel">\n<div class="arrow"></div>\n<div>\n<div class="top-panels">\n<div class="split split-offer bar1-hd-offer">\n<div class="split-content">\n<p class="hover-subhead">\n<a target="_blank" class=\'cta\' href="' + (null == (__t = offerLink) ? "" : __t) + '" data-content-collection="" data-content-placement="">Want both newspaper delivery<br>and free, unlimited digital access?</a>\n</p>\n<a class="nyt-button-actions bar1button" target="_blank" href="' + (null == (__t = offerLink) ? "" : __t) + '" data-content-collection="" data-content-placement="">50% OFF FOR 12 WEEKS</a>\n</div>\n</div>\n<div class="single-rule"></div>\n<div class="split split-offer bar1-digi-offer">\n<div class="split-content">\n<p class="hover-subhead">\n<a target="_blank" class=\'cta\' href="' + (null == (__t = freeTrialLink) ? "" : __t) + '" data-content-collection="" data-content-placement="">Want unlimited access to NYTimes.com and our apps?</a>\n</p>\n<a class="nyt-button-actions bar1button"  class=\'cta\' href="' + (null == (__t = freeTrialLink) ? "" : __t) + '" target="_blank" data-content-collection="" data-content-placement="">Start a Free Trial</a>\n</div>\n</div>\n</div>\n</div>\n</div>';
			return __p
		}, templates.freeTrialIntro = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) {
				__p += '<div class="modal-panel">\n<div class="free-trial-container">\n<div class="step-container"></div>\n<footer class="footer">\n<button class="button next-button" type="button" data-track-action="next" data-track-step="' + (null == (__t = currentStep + 1) ? "" : __t) + '">Next</button><nav class="nav">\n';
				for (var i = 0; i < steps.length; i++) __p += '\n<span class="dot ' + (null == (__t = i == currentStep ? "is-active" : "") ? "" : __t) + '" data-track-action="go-step" data-track-step="' + (null == (__t = i) ? "" : __t) + '" data-step="' + (null == (__t = i) ? "" : __t) + '"></span>\n';
				__p += "\n</nav>\n</footer>\n</div>\n</div>"
			}
			return __p
		}, templates.freeTrialIntroFollows = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<header class="header">\n<div class="heading">Follow our journalists and columns</div>\n<p class="summary">Get updates onsite when new articles are published in your favorite columns.</p>\n</header>\n<div class="tiles"></div>';
			return __p
		}, templates.freeTrialIntroNewsletters = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<header class="header">\n<div class="heading">Sign up for our free email newsletters</div>\n<p class="summary">Choose newsletters on your favorite topics, from parenting to sports to real estate and more.</p>\n</header>\n<div class="tiles"></div>';
			return __p
		}, templates.freeTrialIntroTour = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="heading">Take the tour</div>\n<p class="summary">\nExplore new sections, must-have apps and the latest\nfeatures with your Times Tour Guide â€“ always\naccessible at the top of each web page.\n</p>';
			return __p
		}, templates.freeTrialIntroWelcome = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<header class="header">\n<div class="logo"></div>\n</header>\n<div class="heading">Welcome to your free trial</div>\n<p class="summary">\nYour sign up is now complete. Here\'s how you can<br>\nmake the most of your time with The Times.\n</p>';
			return __p
		}, templates.freeTrialPost = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="free-trial-container post-container">\n<a class="outer-link" title="" href="' + (null == (__t = takeUpsellUrl) ? "" : __t) + '">\n<span class="free-trial-container">\n<span class="inner">\n<span class="image"></span>\n<span class="content">\n<span class="heading">We hope you enjoyed your free trial.</span>\n<span class="summary">Extend your Times digital access and save ' + (null == (__t = discount) ? "" : __t) + ' for one year.</span>\n<span class="button">See My Options</span>\n</span>\n<span class="button">See My Options</span>\n</span>\n</span>\n</a>\n</div>';
			return __p
		}, templates.freeTrialStaticPanel = function(obj) {
			var __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="tasks-list">\n<a href="#" class="scroll scroll-left disabled">\n<i class="arrow arrow-left"></i>\n<span class="scroll-label">prev</span>\n</a>\n<a href="" class="scroll scroll-right">\n<i class="arrow arrow-right"></i>\n<span class="scroll-label">next</span>\n</a>\n<div class="scroll-container">\n<ul></ul>\n</div>\n</div>';
			return __p
		}, templates.freeTrialTask = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="thumb ' + (null == (__t = id) ? "" : __t) + '"> </div>\n<div class="content">\n<div class="heading">' + (null == (__t = title) ? "" : __t) + '</div>\n<div class="summary">' + (null == (__t = description) ? "" : __t) + '</div>\n<a href="' + (null == (__t = link) ? "" : __t) + '" class="button" data-track-action="complete" data-track-id="' + (null == (__t = id) ? "" : __t) + '">' + (null == (__t = button) ? "" : __t) + "</a>\n</div>";
			return __p
		}, templates.freeTrialUpsell = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += '<div class="modal-panel">\n<div class="close-button-wrapper">\n<button type="button" class="close" aria-disabled="false">\n<i class="icon"></i>\n<span class="visually-hidden">Close this modal window</span>\n</button>\n</div>\n<div>\n<div class="image"></div>\n<div class="heading">We hope youâ€™re enjoying your free trial.</div>\n<div class="summary">Extend your Times access and save ' + (null == (__t = discount) ? "" : __t) + ' for one year.</div>\n<div>\n<a class="button button-primary" href="' + (null == (__t = takeUpsellUrl) ? "" : __t) + '">Save Now</a>\n<a class="button button-secondary button-cancel" href="">No Thanks</a>\n</div>\n</div>\n</div>';
			return __p
		}, templates
	}), define("shared/freetrial/data/free-trial-config", [], function() {
		"use strict";
		return {
			defaultOffer: "inTrialOffer",
			periods: {
				q2BlitzUpsell: {
					start: Date.parse("2016-06-16T09:00:00"),
					end: Date.parse("2016-06-27T09:00:00")
				}
			},
			preTrialOffer: {
				buttonText: "Free Trial",
				buttonLink: "https://myaccount.nytimes.com/free-trial?ftv=var3&campaignId=66QHF",
				offerLink: "https://nytimesathome.com/hd/351?MediaCode=WB7AA&CMP=66QHL",
				freeTrialLink: "https://myaccount.nytimes.com/free-trial?ftv=var3&campaignId=66QHJ"
			},
			inTrialOffer: {
				discount: "30%",
				landingPage: "http://www.nytimes.com/subscriptions/Multiproduct/lp89J3K.html",
				campaignIDs: {
					v1: "66Q8W",
					v2: "66Q98",
					v3: "66Q8W",
					button: "66Q9L",
					hover: "66Q9R"
				}
			},
			q2BlitzUpsell: {
				discount: "50%",
				landingPage: "http://www.nytimes.com/subscriptions/Multiproduct/lp8FR49.html",
				campaignIDs: {
					v1: "66Q8W",
					v2: "66Q98",
					v3: "66Q8W",
					button: "66Q9L",
					hover: "66Q9R"
				}
			},
			postTrialOffer: {
				discount: "30%",
				landingPage: "http://www.nytimes.com/subscriptions/Multiproduct/lp8XR3H.html",
				campaignIDs: {
					v1: "66Q8L",
					v2: "66Q9F",
					v3: "66Q9Y"
				}
			},
			inTrialUpsellPeriod: {
				startDay: 7,
				endDay: 27
			},
			postTrialUpsellPeriod: {
				startDay: 28,
				endDay: 34
			},
			getOffer: function() {
				var e, t, i;
				if (t = this[this.defaultOffer], i = Date.now(), this.periods)
					for (e in this.periods) this.periods[e].start < i && i > this.periods[e].end && (t = this[e]);
				return t
			},
			makeTakeUpsellUrl: function(e, t, i) {
				var n;
				return i || (i = t), n = e.landingPage + "?return_url=" + encodeURIComponent(window.location.href) + "&ftv=" + encodeURIComponent(t), e.campaignIDs[i] && (n += "&campaignId=" + encodeURIComponent(e.campaignIDs[i])), n
			}
		}
	}), define("shared/freetrial/models/free-trial", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model", "foundation/hosts", "shared/freetrial/data/free-trial-config"], function(e, t, i, n, s, a) {
		"use strict";
		var o = function(e) {
				return /sbx|dev|stg/.test(window.location.host) ? void 0 === e ? !1 : parseInt(e, 10) : !1
			},
			r = function(e) {
				return /sbx|dev|stg/.test(window.location.host) ? void 0 === e ? !1 : e : !1
			},
			l = n.extend({
				freeTrialTotalDays: 28,
				initialize: function() {
					t.bindAll(this, "freeTrialChanged"), this.isSynced = !1, this.listenToOnce(this, "sync", this.markSynced), this.listenToOnce(this, "sync", this.setAdxGlobals), this.listenTo(this, "change:freeTrial", this.freeTrialChanged), this.subscribe("nyt:free-trial-complete-step", this.completeStep)
				},
				sync: function(e, t, n) {
					return n.url = s.myaccountHost + "/svc/account/free-trial/v1/status", n.cache = !1, n.xhrFields = {
						withCredentials: !0
					}, i.sync(e, t, n)
				},
				parse: function(e) {
					var t = o(this.pageManager.getUrlParam("ftPassedDays")),
						i = o(this.pageManager.getUrlParam("ftRemainingDays")),
						n = r(this.pageManager.getUrlParam("ftVariation"));
					return e.data && e.data.freeTrialUser ? (i !== !1 && (e.data.freeTrial.remainingDays = i), t !== !1 && (e.data.freeTrial.passedDays = t), n !== !1 && (e.data.freeTrial.variation = n), e.data) : e.data
				},
				markSynced: function() {
					this.isSynced = !0, this.broadcast("nyt:free-trial-status-updated")
				},
				setAdxGlobals: function() {
					window.NYTD || (window.NYTD = {}), window.NYTD.showBar1Upsell = this.isFreeTrialUser() && !this.isUpsellTaken() && this.getPassedDays() < a.postTrialUpsellPeriod.startDay
				},
				getRemainingDays: function() {
					return this.freeTrialTotalDays - this.getPassedDays()
				},
				getPassedDays: function() {
					return this.get("freeTrial").passedDays
				},
				getVariation: function() {
					return this.get("freeTrial").variation
				},
				isVariation1: function() {
					return "v1" === this.get("freeTrial").variation
				},
				isVariation2: function() {
					return "v2" === this.get("freeTrial").variation
				},
				isVariation3: function() {
					return "v3" === this.get("freeTrial").variation
				},
				freeTrialChanged: function() {
					var e, i, n = this.get("freeTrial").steps,
						s = this.previous("freeTrial");
					if (s)
						for (e = 0; e < n.length; e += 1) t.indexOf(s.steps, n[e]) > -1 || (i = n[e].replace("step-", ""), this.broadcast("nyt:free-trial-step-completed", i), this.broadcast("nyt:free-trial-step-completed-" + i))
				},
				completeStep: function(t) {
					var i = this;
					if (!this.isStepCompleted(t)) {
						try {
							localStorage.setItem("free-trial-step-" + t + "-completed-at", (new Date).getTime())
						} catch (n) {}
						e.ajax({
							url: s.myaccountHost + "/svc/account/free-trial/v1/update",
							method: "POST",
							xhrFields: {
								withCredentials: !0
							},
							data: {
								step: t
							}
						}).done(function(e) {
							return e ? void i.set(e.data) : !1
						})
					}
				},
				isStepCompleted: function(e) {
					var i, n;
					try {
						if (i = parseInt(localStorage.getItem("free-trial-step-" + e + "-completed-at"), 10), n = new Date, n.setHours(4), n.setMinutes(0), n.setSeconds(0), "crosswords" === e && i && i < n.getTime()) return !1
					} catch (s) {}
					return this.get("freeTrial") ? t.indexOf(this.get("freeTrial").steps, "step-" + e) > -1 : !1
				},
				isIntroStepCompleted: function() {
					return this.isStepCompleted("intro")
				},
				isInTrialUpsellStepCompleted: function() {
					return this.isStepCompleted("in-trial-upsell")
				},
				isFreeTrialUser: function() {
					return this.get("freeTrialUser") ? !0 : !1
				},
				isUpsellTaken: function() {
					var e = this.get("freeTrial");
					return "upsell" === e.participantStatus ? !0 : !1
				},
				ensureCountryCode: function(t) {
					return window.NYTD && window.NYTD.countryCode ? void t(window.NYTD.countryCode) : void e.ajax({
						url: "http://www.nytimes.com/adx/bin/adxrun.html?jsonp=?",
						dataType: "jsonp",
						data: {
							v: 3,
							page: "www.nytimes.com/growl",
							positions: "data_country"
						},
						success: function(i) {
							e("body").append(i.ads && i.ads && i.ads.data_country && i.ads.data_country.creative), t(window.NYTD && window.NYTD.countryCode)
						},
						error: function() {
							t()
						},
						timeout: 1e3
					})
				}
			});
		return new l
	}), define("shared/freetrial/models/free-trial-storage", ["jquery/nyt", "underscore/nyt", "backbone/nyt", "foundation/models/base-model"], function(e, t, i, n) {
		"use strict";
		var s = n.extend({
			initialize: function() {
				this.loadFromStorage(), this.on({
					change: this.dataChanged
				}, this)
			},
			getSessionStorage: function(e) {
				var t;
				try {
					if (t = window.sessionStorage.getItem(e)) return JSON.parse(t)
				} catch (i) {}
				return {}
			},
			setSessionStorage: function(e, t) {
				try {
					window.sessionStorage.setItem(e, JSON.stringify(t))
				} catch (i) {}
			},
			loadFromStorage: function() {
				var e = this.getSessionStorage("free-trial-storage");
				this.set(e)
			},
			dataChanged: function() {
				this.setSessionStorage("free-trial-storage", this.toJSON())
			}
		});
		return new s
	}), define("shared/freetrial/views/free-trial-intro-welcome", ["foundation/views/base-view", "shared/freetrial/templates"], function(e, t) {
		"use strict";
		var i = e.extend({
			className: "free-trial-intro-welcome",
			template: t.freeTrialIntroWelcome,
			render: function() {
				return this.$el.html(this.template()), this
			}
		});
		return i
	}), define("shared/subscribenewsletter/api/newsletter", ["jquery/nyt", "foundation/hosts"], function(e, t) {
		"use strict";
		var i = function(i, n, s, a) {
			var o = t.myaccountHost + "/svc/account/newsletter/v1/" + n;
			e.ajax({
				type: i,
				url: o,
				data: s,
				xhrFields: {
					withCredentials: !0
				}
			}).error(function(e, t, i) {
				a && a(new Error("Error making request to " + o + "\n" + i + "\n" + t))
			}).success(function(e) {
				a && a(null, e.data)
			})
		};
		return {
			subscribe: function(e, t) {
				i("POST", "subscribe", {
					product: e
				}, t)
			},
			unsubscribe: function(e, t) {
				i("POST", "unsubscribe", {
					product: e
				}, t)
			},
			list: function(e) {
				i("GET", "list", {}, function(t, i) {
					t ? e(t) : e(null, i.subscriptions)
				})
			},
			available: function(e) {
				i("GET", "available", {}, e)
			}
		}
	}), define("shared/subscribenewsletter/models/subscribe-newsletter", ["backbone/nyt", "jquery/nyt", "underscore/nyt", "foundation/models/base-model", "shared/subscribenewsletter/api/newsletter"], function(e, t, i, n, s) {
		"use strict";
		var a = n.extend({
			defaults: {
				code: !1,
				suggested: !1,
				thumb: !1,
				thumbClass: !1,
				title: "default title",
				description: !1,
				subscribed: !1,
				buttonText: ["Subscribe", "Subscribed", "Unsubscribe"],
				saveImmediately: !0
			},
			initialize: function() {
				this.wasInitiallySubscribed = this.get("subscribed")
			},
			toggleSubscription: function() {
				this.get("subscribed") ? this.unsubscribe() : this.subscribe()
			},
			subscribe: function() {
				this.set("subscribed", !0), this.get("saveImmediately") && this.save()
			},
			unsubscribe: function() {
				this.set("subscribed", !1), this.get("saveImmediately") && this.save()
			},
			save: function() {
				this.get("subscribed") !== this.wasInitiallySubscribed && (this.get("subscribed") ? s.subscribe(this.get("code"), function(e) {
					e ? this.set("subscribed", this.wasInitiallySubscribed) : this.wasInitiallySubscribed = !0
				}.bind(this)) : s.unsubscribe(this.get("code"), function(e) {
					e ? this.set("subscribed", this.wasInitiallySubscribed) : this.wasInitiallySubscribed = !1
				}.bind(this)))
			}
		});
		return a
	}), define("shared/freetrial/collections/free-trial-intro-newsletters", ["underscore/nyt", "foundation/collections/base-collection", "shared/subscribenewsletter/models/subscribe-newsletter", "shared/subscribenewsletter/api/newsletter"], function(e, t, i, n) {
		"use strict";
		var s = t.extend({
			model: i,
			refreshSubscriptionStatuses: function(e) {
				n.list(function(t, i) {
					return t && "function" == typeof e ? e(t) : (i.forEach(function(e) {
						var t = this.findWhere({
							code: e.code
						});
						t && (t.set("subscribed", e.subscribed), t.wasInitiallySubscribed = e.subscribed)
					}.bind(this)), void("function" == typeof e && e()))
				}.bind(this))
			},
			handleSuggestedSubscriptions: function() {
				e(this.where({
					suggested: !0,
					subscribed: !1
				})).each(function(e) {
					e.subscribe()
				})
			}
		});
		return s
	}), define("shared/subscribenewsletter/templates", ["underscore/nyt"], function(_) {
		var templates = {};
		return templates.subscribeNewsletter = function(obj) {
			var __t, __p = "";
			Array.prototype.join;
			with(obj || {}) __p += "", (thumb || thumbClass) && (__p += '\n<div class="thumb" role="presentation">\n', __p += thumb ? '\n<img src="' + (null == (__t = thumb) ? "" : __t) + '" alt="' + (null == (__t = title) ? "" : __t) + '"/>\n' : '\n<i class="' + (null == (__t = thumbClass) ? "" : __t) + '"></i>\n', __p += "\n</div>\n"), __p += '<div class="heading">' + (null == (__t = title) ? "" : __t) + "</div>", description && (__p += '\n<div class="summary">' + (null == (__t = description) ? "" : __t) + "</div>\n"), __p += '<button class="button ' + (null == (__t = subscribed ? "is-subscribed" : "") ? "" : __t) + '"\ntype="button"\ndata-track-id="' + (null == (__t = code) ? "" : __t) + '"\ndata-track-action="' + (null == (__t = subscribed ? "unsubscribe" : "subscribe") ? "" : __t) + '">\n<i class="icon sprite-icon"></i>\n<span class="button-text">' + (null == (__t = buttonText[subscribed ? 1 : 0]) ? "" : __t) + "</span>\n</button>";
			return __p
		}, templates
	}), define("shared/subscribenewsletter/views/subscribe-newsletter", ["jquery/nyt", "foundation/views/base-view", "shared/subscribenewsletter/templates", "shared/subscribenewsletter/models/subscribe-newsletter"], function(e, t, i, n) {
		"use strict";
		var s = t.extend({
			className: "subscribe-newsletter",
			template: i.subscribeNewsletter,
			model: new n,
			events: {
				"click .button": "onClickButton",
				"mouseenter .button": "onHoverButton",
				"mouseleave .button": "onUnhoverButton"
			},
			initialize: function() {
				this.listenTo(this.model, "sync change", this.render)
			},
			onHoverButton: function(t) {
				this.model.get("subscribed") && e(t.currentTarget).addClass("active").find(".button-text").text(this.model.get("buttonText")[2])
			},
			onUnhoverButton: function(t) {
				this.model.get("subscribed") && e(t.currentTarget).removeClass("active").find(".button-text").text(this.model.get("buttonText")[1])
			},
			onClickButton: function() {
				this.model.toggleSubscription()
			},
			render: function() {
				return this.$el.html(this.template(this.model.toJSON())), this
			}
		});
		return s
	}), define("shared/freetrial/views/free-trial-intro-newsletters", ["foundation/views/base-view", "shared/freetrial/templates", "shared/freetrial/collections/free-trial-intro-newsletters", "shared/subscribenewsletter/views/subscribe-newsletter"], function(e, t, i, n) {
		"use strict";
		var s = e.extend({
			className: "free-trial-intro-newsletters",
			template: t.freeTrialIntroNewsletters,
			collection: new i,
			initialize: function() {
				this.collection.refreshSubscriptionStatuses(function(e) {
					var t = "nyt:free-trial-intro-newsletters:handledSuggestedSubscriptions";
					e || sessionStorage.getItem(t) || (this.collection.handleSuggestedSubscriptions(), sessionStorage.setItem(t, !0))
				}.bind(this))
			},
			render: function() {
				return this.$el.html(this.template()), this.$el.find(".tiles").append(this.collection.map(function(e) {
					return new n({
						model: e
					}).render().$el.addClass("tile")
				})), this
			}
		});
		return s
	}), define("shared/freetrial/views/free-trial-intro-tour", ["foundation/views/base-view", "shared/freetrial/templates"], function(e, t) {
		"use strict";
		var i = e.extend({
			className: "free-trial-intro-tour",
			template: t.freeTrialIntroTour,
			render: function() {
				return this.$el.html(this.template()), this
			}
		});
		return i
	}), define("shared/freetrial/collections/free-trial-intro-follows", ["foundation/collections/base-collection", "shared/messaging/models/follow"], function(e, t) {
		"use strict";
		var i = e.extend({
			model: t
		});
		return i
	}), define("shared/freetrial/data/free-trial-newsletters", ["foundation/hosts", "underscore/nyt"], function(e, t) {
		"use strict";
		var i = [{
				SUGGESTED_FOR_FREE_TRIAL: !0,
				SUBSCRIBED: 0,
				PRODUCT_CODE: "NN",
				PRODUCT_NAME: "The NYT Now Morning Briefing",
				PRODUCT_STATUS: 1,
				REGI_BLURB: "What you need to know to start your day, delivered to your inbox.",
				SAMPLE_LINK: "http://www.nytimes.com/pages/nytnow/nytnow-email/index.html",
				FREQUENCY_SCHEDULE: "(MONDAY - FRIDAY)",
				LARGE_IMAGE: "/ads/emailads/misc/subscriptionspage/NYT_Now_75.png"
			}, {
				SUGGESTED_FOR_FREE_TRIAL: !0,
				SUBSCRIBED: 0,
				PRODUCT_CODE: "UP",
				PRODUCT_NAME: "The Upshot",
				PRODUCT_STATUS: 1,
				REGI_BLURB: "The best of The Upshotâ€™s news on politics, policy and everyday life.",
				SAMPLE_LINK: "http://www.nytimes.com/pages/upshot/upshot-email/index.html",
				FREQUENCY_SCHEDULE: "(WEEKLY)",
				LARGE_IMAGE: "/images/membercenter/icon_upshot.png"
			}, {
				SUBSCRIBED: 0,
				PRODUCT_CODE: "TY",
				PRODUCT_NAME: "Opinion Today",
				PRODUCT_STATUS: 1,
				REGI_BLURB: "Thought-provoking commentary from our Op-Ed columnists and more.",
				SAMPLE_LINK: "http://www.nytimes.com/pages/opinion/opiniontodayemail/index.html",
				FREQUENCY_SCHEDULE: "(Monday - Friday)",
				LARGE_IMAGE: "/ads/emailads/misc/subscriptionspage/Opinion_Today_75.jpg"
			}, {
				SUBSCRIBED: 0,
				PRODUCT_CODE: "MA",
				PRODUCT_NAME: "The New York Times Magazine",
				PRODUCT_STATUS: 1,
				REGI_BLURB: "The best of The New York Times Magazine.",
				SAMPLE_LINK: "http://www.nytimes.com/pages/magazine/magazine-email/index.html",
				FREQUENCY_SCHEDULE: "(WEEKLY)",
				LARGE_IMAGE: "/images/misc/nytmagazine/nytmag.jpg"
			}, {
				SUBSCRIBED: 0,
				PRODUCT_CODE: "LI",
				PRODUCT_NAME: "NYT Living",
				PRODUCT_STATUS: 1,
				REGI_BLURB: "The latest lifestyle news and trends from the Style, Travel and Food sections.",
				SAMPLE_LINK: "http://www.nytimes.com/pages/nytliving/nytliving-email/index.html",
				FREQUENCY_SCHEDULE: "(TWICE A WEEK)",
				LARGE_IMAGE: "/ads/emailads/misc/subscriptionspage/NYT_Living_75.png"
			}, {
				SUBSCRIBED: 0,
				PRODUCT_CODE: "CK",
				PRODUCT_NAME: "Cooking",
				PRODUCT_STATUS: 1,
				REGI_BLURB: "Recipe suggestions, cooking tips and shopping advice from NYT Cooking.",
				SAMPLE_LINK: "http://www.nytimes.com/pages/cooking/cooking-email/index.html",
				FREQUENCY_SCHEDULE: "(FIVE TIMES A WEEK)",
				LARGE_IMAGE: "/images/membercenter/200808/Cooking.png"
			}],
			n = e.staticHost;
		return t(i).map(function(e) {
			return {
				code: e.PRODUCT_CODE,
				title: e.PRODUCT_NAME,
				description: e.REGI_BLURB,
				thumb: n + e.LARGE_IMAGE,
				subscribed: !!e.SUBSCRIBED,
				suggested: !!e.SUGGESTED_FOR_FREE_TRIAL,
				buttonText: ["SIGN UP", "SUBSCRIBED", "UNSUBSCRIBE"],
				saveImmediately: !1
			}
		})
	}), define("shared/freetrial/models/free-trial-intro", ["backbone/nyt", "underscore/nyt", "foundation/models/base-model", "shared/freetrial/views/free-trial-intro-welcome", "shared/freetrial/views/free-trial-intro-newsletters", "shared/freetrial/views/free-trial-intro-tour", "shared/freetrial/collections/free-trial-intro-newsletters", "shared/freetrial/collections/free-trial-intro-follows", "shared/freetrial/data/free-trial-newsletters"], function(e, t, i, n, s, a, o, r, l) {
		"use strict";
		var d = e.Model.extend({
			defaults: {
				currentStep: 0,
				steps: [{
					viewClass: n
				}, {
					viewClass: s,
					collection: new o(l),
					beforeLeaveStep: function(e) {
						e.collection.forEach(function(e) {
							e.save()
						})
					}
				}, {
					viewClass: a,
					buttonText: "Get Started"
				}]
			}
		});
		return d
	}), define("shared/freetrial/models/free-trial-task", ["foundation/models/base-model", "shared/freetrial/models/free-trial"], function(e, t) {
		"use strict";
		var i = e.extend({
			isStepCompleted: function() {
				return t.isStepCompleted(this.get("id"))
			}
		});
		return i
	}), define("shared/freetrial/data/free-trial-tasks", [], function() {
		"use strict";
		return {
			"get-our-apps": {
				title: "Get Our Apps",
				description: "Your go-to apps for news on the go.",
				link: "http://www.nytimes.com/services/mobile/index.html?ft2pu=app-download"
			},
			crosswords: {
				title: "Crosswords",
				description: "How quickly can you solve our mini puzzle today?",
				link: "http://www.nytimes.com/crosswords/game/mini?ft2pu=mini-crossword",
				button: "Play"
			},
			"riveting-reads": {
				title: "Riveting Reads",
				description: "100 stories that captivated our readers last year.",
				link: "http://www.nytimes.com/interactive/2015/12/09/upshot/top-stories.html?ft2pu=riveting-reads"
			},
			"whats-cooking": {
				title: "Whatâ€™s Cooking",
				description: "Inspire your next meal with the latest recipes.",
				link: "http://cooking.nytimes.com/?ft2pu=cooking"
			},
			"where-to-go": {
				title: "Where to Go",
				description: "52 stunning places to visit in 2016.",
				link: "http://www.nytimes.com/interactive/2016/01/07/travel/places-to-visit.html?ft2pu=where-to-go"
			},
			timesmachine: {
				title: "TimesMachine",
				description: "Explore historic moments as they appeared in print, from 1851.",
				link: "http://timesmachine.nytimes.com/browser?ft2pu=timesmachine"
			}
		}
	}), define("shared/freetrial/collections/free-trial-tasks", ["underscore/nyt", "foundation/collections/base-collection", "shared/freetrial/models/free-trial-task", "shared/freetrial/models/free-trial", "shared/freetrial/data/free-trial-tasks"], function(e, t, i, n, s) {
		"use strict";
		var a = t.extend({
			model: i,
			initialize: function(e) {
				this.options = e, this.fillTasks()
			},
			comparator: function(e) {
				return e.isStepCompleted()
			},
			fillTasks: function() {
				var e, t, i = this;
				for (t in s) s.hasOwnProperty(t) && (e = s[t], e.id = t, i.add(e));
				this.sort(), this.subscribe("nyt:free-trial-status-updated", this.sort), this.broadcast("nyt:free-trial-tasks-received", i.models)
			},
			getCompletedTasks: function() {
				var t = [];
				return e.each(this.models, function(e) {
					n.isStepCompleted(e.get("id")) && t.push(e)
				}), t
			},
			getRemainingTasks: function() {
				return this.length - this.getCompletedTasks().length
			}
		});
		return new a
	}), define("shared/freetrial/views/free-trial-band", ["underscore/nyt", "foundation/views/base-view", "foundation/hosts", "shared/freetrial/templates", "shared/freetrial/collections/free-trial-tasks", "shared/freetrial/models/free-trial", "shared/freetrial/models/free-trial-storage"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = t.extend({
			className: "free-trial-band",
			events: {
				"click .toggle-tasks": "handleTogglePanel"
			},
			initialize: function(t) {
				e.bindAll(this, "updateRemainingTasks"), this.options = {
					showDiscoveries: !0,
					showRemainingTasks: !1,
					showToggleLink: !1,
					isPanelCollapsed: !1,
					imageHost: i.staticHost,
					showDaysLeft: !1,
					daysLeft: 0,
					showLimitedOffer: !1,
					remainingTasks: 0,
					totalTasks: 0
				}, this.options = e.extend({}, this.options, t), this.options.showRemainingTasks && this.subscribe("nyt:free-trial-step-completed", this.updateRemainingTasks)
			},
			render: function() {
				return this.$el.html(n.freeTrialBand(this.options)), this.options.daysLeft <= 5 && this.$el.addClass("alert"), (this.options.showDaysLeft || this.options.showRemainingTasks || this.options.showLimitedOffer) && this.$el.addClass("logo-separator"), this.options.showToggleLink && this.options.isPanelCollapsed && this.toggleLink(), this.updateRemainingTasks(), this
			},
			updateRemainingTasks: function() {
				var e = this.$el.find(".remaining-tasks"),
					t = this.$el.find(".total-tasks");
				e.length && this.options.showRemainingTasks && (e.text(this.options.remainingTasks), t.text(this.options.totalTasks))
			},
			toggleLink: function() {
				var e = this.$el.find(".toggle-tasks"),
					t = this.options.showLimitedOffer ? "postCollapsed" : "tasksCollapsed";
				e.toggleClass("collapsed"), e.hasClass("collapsed") ? o.set(t, !0) : o.set(t, !1)
			},
			handleTogglePanel: function(e) {
				this.toggleLink(), this.broadcast("nyt:free-trial-toggle-click"), e.preventDefault()
			}
		});
		return r
	}), define("shared/freetrial/views/free-trial-intro", ["jquery/nyt", "underscore/nyt", "foundation/hosts", "foundation/views/base-view", "shared/freetrial/templates", "shared/freetrial/models/free-trial-intro", "shared/freetrial/models/free-trial", "shared/freetrial/views/free-trial-band"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = n.extend({
			className: "free-trial-intro",
			template: s.freeTrialIntro,
			model: new a,
			events: {
				"click .next-button": "onClickNext",
				"click .skip-button": "onClickSkip",
				"click .dot": "onClickDot"
			},
			initialize: function() {
				this.listenTo(this.model, "sync change", this.render), this.band = new r, this.band.render(), this.broadcast("nyt:free-trial-complete-step", "intro"), this.addUserToWhitelist()
			},
			addUserToWhitelist: function() {
				e.ajax({
					url: i.followApiHost + "/svc/pushmobile/follow/v0/follow.whitelist.json",
					method: "POST"
				})
			},
			onClickNext: function() {
				this.setStep(this.model.get("currentStep") + 1)
			},
			onClickSkip: function() {
				this.finishLastStep()
			},
			onClickDot: function(t) {
				this.setStep(e(t.currentTarget).data("step"))
			},
			setStep: function(e) {
				e >= this.model.get("steps").length ? (this.beforeLeaveStep(), this.finishLastStep()) : (e = Math.max(0, Math.min(this.model.get("steps").length - 1, e)), this.model.get("currentStep") !== e && (this.beforeLeaveStep(), this.model.set("currentStep", e), this.afterEnterStep()))
			},
			finishLastStep: function() {
				this.broadcast("nyt:free-trial-intro-finished")
			},
			beforeLeaveStep: function() {
				var e = this.model.get("steps")[this.model.get("currentStep")];
				"function" == typeof e.beforeLeaveStep && e.beforeLeaveStep(this.currentSubview)
			},
			afterEnterStep: function() {
				var e = this.model.get("steps")[this.model.get("currentStep")];
				"function" == typeof e.afterEnterStep && e.afterEnterStep(this.currentSubview)
			},
			render: function() {
				var e, t, i, n;
				return this.$el.html(this.template(this.model.toJSON())), this.$el.find(".modal-panel").prepend(this.band.el), e = this.model.get("steps")[this.model.get("currentStep")], t = {}, e.model && (t.model = e.model), e.collection && (t.collection = e.collection), e.buttonText && this.$el.find(".next-button").text(e.buttonText), n = e.viewClass, i = new n(t), i.render().$el.addClass("step"), this.$el.find(".step-container").append(i.render().el), this.currentSubview = i, this
			}
		});
		return l
	}), define("shared/freetrial/views/free-trial-task", ["underscore/nyt", "foundation/views/base-view", "shared/freetrial/templates"], function(e, t, i) {
		"use strict";
		var n = t.extend({
			tagName: "li",
			className: "task-item",
			events: {
				"click .button": "startTaskAction"
			},
			initialize: function() {
				e.bindAll(this, "startTaskAction", "handleStepCompleted"), this.subscribe("nyt:free-trial-step-completed-" + this.model.get("id"), this.handleStepCompleted)
			},
			render: function() {
				var t = e.extend({}, {
					button: "Go"
				}, this.model.toJSON());
				return this.$el.append(i.freeTrialTask(t)), this.setCompleted(), this
			},
			setCompleted: function() {
				this.model.isStepCompleted() && this.$el.find(".button").addClass("completed").text("Completed")
			},
			handleStepCompleted: function() {
				this.setCompleted(), this.performAction()
			},
			performAction: function() {
				window.location = this.$el.find("a.button").attr("href")
			},
			startTaskAction: function(e) {
				this.model.isStepCompleted() ? this.performAction() : this.broadcast("nyt:free-trial-complete-step", this.model.get("id")), e.preventDefault()
			}
		});
		return n
	}), define("shared/freetrial/views/free-trial-tasks", ["foundation/views/base-view", "shared/freetrial/templates", "shared/freetrial/views/free-trial-task", "shared/freetrial/models/free-trial", "shared/freetrial/models/free-trial-storage", "shared/freetrial/collections/free-trial-tasks", "shared/freetrial/views/free-trial-band"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = e.extend({
			className: "free-trial-tasks",
			nytEvents: {
				"nyt:free-trial-toggle-click": "togglePanel",
				"nyt:free-trial-tasks-received": "addLoadedTasks"
			},
			events: {
				"click .scroll-left": "scrollLeft",
				"click .scroll-right": "scrollRight"
			},
			initialize: function() {
				var e = !0;
				this.position = 0, this.collection = a, this.remainingTasks = a.getRemainingTasks(), this.totalTasks = a.length, this.isTasksCollapsed = !e || n.getPassedDays() > 7 || s.get("tasksCollapsed") || this.remainingTasks <= 0, this.daysLeft = n.getRemainingDays(), this.band = new o({
					showDiscoveries: e,
					isPanelCollapsed: this.isTasksCollapsed,
					showRemainingTasks: e && this.daysLeft > 5 && this.remainingTasks > 0,
					showToggleLink: e,
					showDaysLeft: this.daysLeft <= 5,
					daysLeft: this.daysLeft,
					remainingTasks: this.remainingTasks,
					totalTasks: this.totalTasks
				})
			},
			render: function() {
				return this.$el.html(t.freeTrialStaticPanel()), this.$el.prepend(this.band.render().$el), this.collection.length && this.addLoadedTasks(this.collection.models), this.isTasksCollapsed && this.$el.find(".tasks-list").hide(), this
			},
			setPosition: function(e) {
				this.position = e
			},
			getScrollContainer: function() {
				return this.scrollContainer || (this.scrollContainer = this.$el.find(".scroll-container")), this.scrollContainer
			},
			getScrollElement: function() {
				return this.scrollElement || (this.scrollElement = this.$el.find(".scroll-container ul")), this.scrollElement
			},
			detectScrollStep: function() {
				return this.$el.find(".scroll-container ul li:nth-child(1)").outerWidth()
			},
			getAmountOfElements: function() {
				return this.collection.length
			},
			getDisplayAmountOfElements: function() {
				return Math.round(this.getScrollContainer().outerWidth() / this.detectScrollStep())
			},
			scrollLeft: function(e) {
				this.scroll(1, 1), e.preventDefault()
			},
			scrollRight: function(e) {
				this.scroll(-1, 1), e.preventDefault()
			},
			scroll: function(e, t) {
				var i = this.getScrollElement(),
					n = this.detectScrollStep(),
					s = this.getAmountOfElements(),
					a = this.getDisplayAmountOfElements(),
					o = this.$el.find(".scroll-left"),
					r = this.$el.find(".scroll-right"),
					l = this.position - e * t;
				return 0 > l || l > s - a ? !1 : (this.setPosition(l), i.animate({
					left: "+=" + e * t * n
				}, 500), o.toggleClass("disabled", 0 === this.position), r.toggleClass("disabled", this.position === s - a), !0)
			},
			togglePanel: function() {
				this.broadcast("nyt:masthead-update-offset"), this.$el.find(".tasks-list").animate({
					height: "toggle"
				}, 500)
			},
			addLoadedTasks: function(e) {
				var t, n, s, a = this.$el.find(".scroll-container ul");
				for (n = 0; n < e.length; n += 1) t = e[n], s = new i({
					model: t
				}), a.append(s.render().$el)
			}
		});
		return r
	}), define("shared/freetrial/views/free-trial-post", ["foundation/views/base-view", "foundation/hosts", "shared/freetrial/templates", "shared/freetrial/data/free-trial-config", "shared/freetrial/models/free-trial-storage", "shared/freetrial/models/free-trial", "shared/freetrial/views/free-trial-band"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = e.extend({
			className: "free-trial-post",
			template: i.freeTrialPost,
			nytEvents: {
				"nyt:free-trial-toggle-click": "togglePanel"
			},
			initialize: function() {
				this.isPanelCollapsed = s.get("postCollapsed"), this.band = new o({
					showLimitedOffer: !0,
					showToggleLink: !0,
					isPanelCollapsed: this.isPanelCollapsed
				})
			},
			render: function() {
				var e = n.postTrialOffer;
				return this.$el.append(this.band.render().$el), this.$el.append(this.template({
					takeUpsellUrl: n.makeTakeUpsellUrl(e, a.getVariation()),
					discount: e.discount
				})), this.isPanelCollapsed && this.$el.find(".post-container").hide(), this
			},
			togglePanel: function() {
				this.broadcast("nyt:masthead-update-offset"), this.$el.find(".post-container").animate({
					height: "toggle"
				}, 500)
			}
		});
		return r
	}), define("shared/freetrial/views/free-trial-upsell", ["foundation/views/base-view", "foundation/hosts", "shared/freetrial/templates", "shared/freetrial/data/free-trial-config", "shared/freetrial/models/free-trial"], function(e, t, i, n, s) {
		"use strict";
		var a = e.extend({
			className: "free-trial-upsell",
			template: i.freeTrialUpsell,
			events: {
				"click .close": "close",
				"click .button-cancel": "close"
			},
			initialize: function() {
				this.broadcast("nyt:free-trial-complete-step", "in-trial-upsell")
			},
			close: function(e) {
				e.preventDefault(), this.broadcast("nyt:free-trial-refresh")
			},
			render: function() {
				var e = n.getOffer();
				return this.$el.html(this.template({
					takeUpsellUrl: n.makeTakeUpsellUrl(e, s.getVariation()),
					discount: e.discount
				})), this
			}
		});
		return a
	}), define("shared/freetrial/views/free-trial-bar1", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/freetrial/templates", "shared/freetrial/data/free-trial-config", "shared/freetrial/models/free-trial"], function(e, t, i, n, s, a, o) {
		"use strict";
		var r = i.extend({
			className: "free-trial-bar1",
			template: s.freeTrialBar1,
			timer: 0,
			button: null,
			initialize: function() {
				t.bindAll(this, "show", "hide", "attemptToHide")
			},
			render: function() {
				var t;
				return this.button = e("body").find("#masthead .subscribe-button"), t = a.getOffer(), this.button.removeClass("hidden").data("href", a.makeTakeUpsellUrl(t, o.getVariation(), "button")).on("mouseenter", this.show), this.$el.html(this.template({
					takeUpsellUrl: a.makeTakeUpsellUrl(t, o.getVariation(), "hover"),
					discount: t.discount
				})).addClass("hidden").on("mouseenter", this.show), this
			},
			show: function() {
				var t, i;
				return this.timer ? (clearTimeout(this.timer), void(this.timer = 0)) : (t = this.button.offset(), i = Math.min(t.left - parseInt(this.$el.outerWidth() / 2, 10), e(window).innerWidth() - this.$el.outerWidth()), this.$el.css({
					left: i,
					top: t.top + this.button.innerHeight() + 5
				}).toggleClass("hidden"), this.$el.find(".arrow").css({
					left: t.left - i + parseInt(this.button.innerWidth() / 2, 10)
				}), this.button.on("mouseleave", this.attemptToHide), void this.$el.on("mouseleave", this.attemptToHide))
			},
			attemptToHide: function() {
				clearTimeout(this.timer), this.timer = setTimeout(this.hide, 50)
			},
			hide: function() {
				clearTimeout(this.timer), this.timer = 0, this.$el.off("mouseleave", this.attemptToHide), this.button.off("mouseleave", this.attemptToHide), this.$el.toggleClass("hidden")
			}
		});
		return r
	}), define("shared/freetrial/views/free-trial-bar1-pre-trial", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/freetrial/templates", "shared/freetrial/data/free-trial-config"], function(e, t, i, n, s, a) {
		"use strict";
		var o = i.extend({
			className: "free-trial-bar1-pre-trial",
			template: s.freeTrialBar1PreTrial,
			timer: 0,
			button: null,
			initialize: function() {
				t.bindAll(this, "show", "hide", "attemptToHide")
			},
			prepareUrl: function(e) {
				return e + "&url=" + encodeURIComponent(window.location.href)
			},
			render: function() {
				var t;
				return this.button = e("body").find("#masthead .subscribe-button"), t = a.preTrialOffer, this.button.removeClass("hidden").text(t.buttonText).data("href", this.prepareUrl(t.buttonLink)).on("mouseenter", this.show), this.$el.html(this.template({
					offerLink: t.offerLink,
					freeTrialLink: this.prepareUrl(t.freeTrialLink)
				})).addClass("hidden").on("mouseenter", this.show), this
			},
			show: function() {
				var t, i;
				return this.timer ? (clearTimeout(this.timer), void(this.timer = 0)) : (t = this.button.offset(), i = Math.min(t.left - parseInt(this.$el.outerWidth() / 2, 10), e(window).innerWidth() - this.$el.outerWidth()), this.$el.css({
					left: i,
					top: t.top + this.button.innerHeight() + 5
				}).removeClass("hidden"), this.$el.find(".arrow").css({
					left: t.left - i + parseInt(this.button.innerWidth() / 2, 10)
				}), this.button.on("mouseleave", this.attemptToHide), void this.$el.on("mouseleave", this.attemptToHide))
			},
			attemptToHide: function() {
				clearTimeout(this.timer), this.timer = setTimeout(this.hide, 50)
			},
			hide: function() {
				clearTimeout(this.timer), this.timer = 0, this.$el.off("mouseleave", this.attemptToHide), this.button.off("mouseleave", this.attemptToHide), this.$el.addClass("hidden")
			}
		});
		return o
	}), define("shared/freetrial/views/free-trial", ["jquery/nyt", "underscore/nyt", "foundation/views/base-view", "foundation/models/user-data", "shared/freetrial/tracking/tracking", "shared/freetrial/templates", "shared/freetrial/data/free-trial-config", "shared/freetrial/models/free-trial", "shared/freetrial/models/free-trial-storage", "shared/freetrial/views/free-trial-intro", "shared/freetrial/views/free-trial-tasks", "shared/freetrial/views/free-trial-post", "shared/freetrial/views/free-trial-upsell", "shared/freetrial/views/free-trial-bar1", "shared/freetrial/views/free-trial-bar1-pre-trial"], function(e, t, i, n, s, a, o, r, l, d, c, h, u, m, p) {
		"use strict";
		var g = i.extend({
			el: "body",
			nytEvents: {
				"nyt:free-trial-refresh": "refreshPanel",
				"nyt:free-trial-intro-finished": "refreshPanel"
			},
			initialize: function() {
				t.bindAll(this, "refreshPanel")
			},
			handleUserReady: function() {
				this.flag("freeTrial") && n.hasEntitlement("FTEX") && (this.removeRibbonIfExists(), this.unpinMasthead(), this.model = r, this.model.fetch(), this.model.isSynced ? this.render() : this.listenTo(this.model, "sync", this.render))
			},
			render: function() {
				return r.isFreeTrialUser() ? (this.$el.prepend(this.getRenderedStep()), this.setTracking(), this.broadcast("nyt:masthead-update-offset"), this.renderBar1(), this) : this
			},
			setTracking: function() {
				this.trackingObj && (this.trackingObj.undelegateEvents(), this.trackingObj.remove()), this.trackingObj = new s
			},
			renderBar1: function() {
				this.pageManager.hasAdBlock().done(function() {
					n.isLoggedIn() ? this.$el.prepend((new m).render().$el) : "1" === this.isUserVariant("freeTrialOfferV3") && this.$el.prepend((new p).render().$el)
				}.bind(this))
			},
			refreshPanel: function() {
				this.$el.find("#free-trial").replaceWith(this.getRenderedStep()), this.setTracking(), this.broadcast("nyt:masthead-update-offset")
			},
			getRenderedStep: function() {
				var t = this.model.toJSON(),
					i = e(a.freeTrial(t)),
					n = this.getCurrentStep();
				return null !== n ? (this.pageManager.$html.addClass("has-free-trial"), i.append(n.render().$el), this.handleImpression(i)) : this.pageManager.$html.removeClass("has-free-trial"), i
			},
			getCurrentStep: function() {
				var e = this.model.getPassedDays(),
					t = this.model.isUpsellTaken(),
					i = this.model.isInTrialUpsellStepCompleted(),
					n = this.model.isIntroStepCompleted(),
					s = this.pageManager.getCurrentBreakpoint() >= 1031,
					a = !!l.get("postClose");
				return e > o.postTrialUpsellPeriod.endDay ? null : e >= o.postTrialUpsellPeriod.startDay ? a || t ? null : new h : e >= o.inTrialUpsellPeriod.startDay && e <= o.inTrialUpsellPeriod.endDay && !i && !t ? new u : !n && s ? new d : new c
			},
			removeRibbonIfExists: function() {
				e("#ribbon").remove()
			},
			handleImpression: function(e) {
				this.trackingTriggerImpression("free-trial-intro-load", {
					module: "FreeTrial",
					region: "FixedTop",
					action: "Impression",
					eventName: "Impression",
					contentCollection: e.find(">:first-child").attr("class"),
					mediaId: e.data("variation"),
					priority: !0
				})
			},
			unpinMasthead: function() {
				this.broadcast("nyt:in-content-theme-deactivate-pinned-masthead")
			}
		});
		return g
	}), define("article/common/instances/free-trial", ["shared/freetrial/views/free-trial"], function(e) {
		"use strict";
		new e
	}), define("shared/sharetools/instances/story-meta-footer", ["jquery/nyt", "shared/sharetools/views/share-tools-container"], function(e, t) {
		"use strict";
		var i;
		new t({
			el: e("#sharetools-story-meta-footer"),
			trackingRegion: "Header",
			modalSettings: {
				tailDirection: "left",
				tailLeftOffset: 0,
				tailTopOffset: 22,
				positionTailSide: !0,
				autoPosition: !0,
				toggleSpeed: 1,
				toolTypeSponsor: "Article",
				openCallback: function() {
					var e = this,
						t = this.pageManager.getViewport().top;
					i = function() {
						Math.abs(t - this.pageManager.getViewport().top) > 300 && e.close()
					}, this.listenTo(this.pageManager, "nyt:page-scroll", i), this.$target.addClass("active")
				},
				closeCallback: function() {
					this.stopListening(this.pageManager, "nyt:page-scroll", i), this.$target.removeClass("active"), this.removeFromPage()
				}
			}
		})
	}), define("shared/page/helpers/page-mixin", ["jquery/nyt"], function(e) {
		"use strict";
		var t = {
			handleSwipe: function(e) {
				this.broadcast("nyt:app-swipe", e, e.gesture.direction)
			},
			handleSwipeStartEnd: function(e) {
				var t = "swipestart" === e.type ? "start" : "end";
				this.broadcast("nyt:app-swipe", e, t)
			},
			handleDrag: function(t) {
				!t || e(t.srcElement).closest(".slideshow").length > 0 || this.broadcast("nyt:app-drag", t, t.gesture.direction)
			},
			handleDragStartEnd: function(t) {
				var i = "dragstart" === t.type ? "start" : "end";
				!t || e(t.srcElement).closest(".slideshow").length > 0 || this.broadcast("nyt:app-drag", t, i)
			},
			truncateCaptionText: function() {
				var t = this;
				this.$el.find("figure").each(function() {
					var i, n, s = 88,
						a = e(this);
					a.hasClass("layout-small-vertical") || a.hasClass("layout-small-horizontal") || a.hasClass("has-adjacency layout-large-horizontal") ? (n = a.find(".caption-text"), n >= 1 && n.html().indexOf("<") < 0 && t.truncateText(n, s, !0)) : a.hasClass("layout-large-horizontal") ? (i = a.find("img").height() - s, n = a.find(".caption-text"), n >= 1 && n.html().indexOf("<") < 0 && t.truncateText(n, i, !0)) : a.hasClass("photo") && a.hasClass("inline") && (n = a.find(".caption-text"), n >= 1 && n.html().indexOf("<") < 0 && t.truncateText(n, s, !0))
				})
			}
		};
		return t
	}), define("article/story/views/story", ["underscore/nyt", "jquery/nyt", "foundation/hosts", "foundation/views/base-view", "foundation/models/user-data", "shared/page/helpers/page-mixin", "shared/sharetools/instances/cross-platform-save", "article/common/views/adlibrary/requirements/dfp-article-requirements-mixin"], function(e, t, i, n, s, a, o, r) {
		"use strict";
		var l = n.extend(a).extend({
			el: "#main",
			scrollToAddendum: !1,
			isHashWithAddendum: !1,
			addendumScrollTop: 0,
			mastheadHeight: 0,
			originalAddendumScrollTop: 0,
			visualGapsThreshold: 75,
			events: {
				dragleft: "handleDrag",
				dragright: "handleDrag",
				dragstart: "handleDragStartEnd",
				dragend: "handleDragStartEnd",
				"click .story-addendum-notice-link": "handleAddendumClick"
			},
			initialize: function() {
				var t = this;
				this.pageManager.flag("newsletterSignup") && (this.insertNewsletterModule(), e.bindAll(t, "resizeNewsletterIFrame")), this.subscribe("nyt:xps-article-status", this.setSavedState), s.isLoggedIn() && o.getArticlesStatus(this.pageManager.getCanonical())
			},
			handleDomReady: function() {
				var e = this.pageManager.getMeta("ad_sensitivity");
				this.$addendum = this.$el.find(".theme-main .addenda"), this.mastheadHeight = t("#masthead").height(), this.pageManager.isDesktop() && this.truncateCaptionText(), this.checkForVisualGaps(), this.pageManager.getCurrentBreakpoint() < 1050 && this.checkForOtherVisualGaps(".story-ad"), this.checkForOtherVisualGaps(".layout-large-horizontal, .layout-large-vertical, .layout-horizontal-inset, .layout-sub-medium, .layout-medium, .layout-large, .layout-xlarge"), t(".dropcap").parent().not(":eq(0)").css("padding-top", "20px"), this.subscribe("nyt:ribbon-rendered", this.handleUrlWithAddendumHash), this.subscribe("nyt:page-scroll", this.handleScroll), (null === r.dfp || "noads" === e || "tragedy" === e || this.$html.hasClass("section-insider")) && (this.$html.addClass("has-no-ads"), this.$html.removeClass("has-top-ad"))
			},
			handleUrlWithAddendumHash: function() {
				"addenda" === this.pageManager.getUrlHash() && (this.isHashWithAddendum = !0, this.handleAddendumClick())
			},
			checkForVisualGaps: function() {
				var e = this,
					i = t(".story-interrupter");
				t.each(i, function() {
					var i, n, s = 0,
						a = t(this).prev(".story-body-supplemental"),
						o = a.find(".story-body-text.story-content:last"),
						r = a.find("figure:last").not(".lede"),
						l = t(this).offset(),
						d = o.offset();
					d && d.top && l && l.top && (i = d.top + o.height(), n = l.top, s = n - i), s > e.visualGapsThreshold && r.length > 0 && r.css({
						"float": "none",
						margin: "0 auto 25px"
					})
				})
			},
			checkForOtherVisualGaps: function(e) {
				var i = t(e),
					n = 80;
				t.each(i, function() {
					var e, i, s = 0,
						a = t(this).prev(),
						o = t(this).prevUntil("figure").not(".lede").prev(),
						r = t(this).offset(),
						l = a.offset();
					l && l.top && r && r.top && (e = l.top + a.height(), i = r.top, s = i - e), s > n && o.css({
						"float": "none",
						margin: "0 auto 25px"
					})
				})
			},
			isRibbonVisible: function() {
				return t("#masthead").hasClass("ribbon-visible") || this.pageManager.isMobile() && "fixed" === t("#ribbon").css("position") ? !0 : !1
			},
			handleAddendumClick: function() {
				this.$addendum.length > 0 && (this.originalAddendumScrollTop = this.$addendum.offset().top, this.isRibbonVisible() ? this.addendumScrollTop = this.originalAddendumScrollTop - (this.mastheadHeight + t("#ribbon").height()) : this.addendumScrollTop = this.originalAddendumScrollTop - this.mastheadHeight, t("html, body").animate({
					scrollTop: this.addendumScrollTop
				}, 400), this.isHashWithAddendum || (this.scrollToAddendum = !0), this.isHashWithAddendum = !1)
			},
			handleScroll: function() {
				!this.isRibbonVisible() && this.scrollToAddendum && (this.addendumScrollTop = this.originalAddendumScrollTop - this.mastheadHeight, t("html, body").stop(!0).animate({
					scrollTop: this.addendumScrollTop
				}, 400), this.scrollToAddendum = !1)
			},
			setSavedState: function(e) {
				e ? t(".save-sharetool").addClass("is-saved") : t(".save-sharetool").removeClass("is-saved")
			}
		});
		return l
	}), define("article/story/instances/story", ["article/story/views/story"], function(e) {
		"use strict";
		new e
	}), define("article/story/views/image-mirror", ["underscore/nyt", "jquery/nyt", "foundation/views/base-view", "foundation/hosts"], function(e, t, i, n) {
		"use strict";
		var s = i.extend({
			initialize: function() {
				var e, i = this,
					s = /static.stg/gi,
					a = function(n) {
						e = n.keyCode ? n.keyCode : n.which, 96 === e && (i.changeImageDomain(), t(window).unbind("keypress", a))
					};
				n.image.match(s) && t(window).bind("keypress", a)
			},
			changeImageDomain: function() {
				var i = t("#story img"),
					n = /static.stg/gi;
				e.each(i, function(e) {
					0 === e.naturalWidth && (e.src = e.src.replace(n, "static"))
				})
			}
		});
		return s
	}), define("article/story/instances/image-mirror", ["article/story/views/image-mirror"], function(e) {
		"use strict";
		return new e
	}), define("shared/https/instances/toggle-button", ["jquery/nyt", "foundation/cookies"], function(e, t) {
		"use strict";

		function i() {
			l = !l
		}

		function n(e) {
			h.style.transition = h.style.WebkitTransition = "none", h.getBoundingClientRect(), h.style.transition = h.style.WebkitTransition = "fill 0.5s ease", u.style.transition = u.style.WebkitTransition = "none", u.style.strokeDasharray = m + " " + m, u.style.strokeDashoffset = e, u.getBoundingClientRect(), u.style.transition = u.style.WebkitTransition = "stroke-dashoffset 0.5s ease-in-out"
		}

		function s() {
			n(0), h.style.fill = "#9C9C9C", u.style.strokeDashoffset = m - p
		}

		function a() {
			n(m - p), h.style.fill = "#6EAB47", u.style.strokeDashoffset = 0
		}
		var o, r, l, d, c, h, u, m, p, g = {
			cookieName: "nyt.np.https-everywhere",
			elementId: "internal-https-menu"
		};
		o = e("#" + g.elementId), 0 === o.length ? o = e("<div />").attr("id", g.elementId) : o.empty(), o.css({
				bottom: "20px",
				cursor: "pointer",
				height: "60px",
				padding: "5px",
				position: "fixed",
				right: "5px",
				width: "60px"
			}), r = t.readCookie(g.cookieName), null !== r && "9" !== r && o.appendTo(e("body")),
			l = "1" === r, d = ['<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="50" height="50">', '<circle cx="25" cy="25" r="25" style="fill: #6EAB47" />', '<path fill="transparent" stroke="#FFF" stroke-width="2" d="M20 23 C 20 11, 30 11, 30 23" />', '<rect x="17" y="23" width="16" height="12" fill="#FFF" />', "</svg>"].join("\n"), c = e(d), h = c.find("circle")[0], u = c.find("path")[0], m = u.getTotalLength(), p = 19, c.css({
				boxShadow: "0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)",
				borderRadius: "50%"
			}).on("click", function() {
				t.writeCookie(g.cookieName, l ? "0" : "1", {
					domain: ".nytimes.com",
					path: "/",
					expires: l ? 7 : 180
				}), l ? s(e(this)) : a(e(this)), document.location.reload()
			}).appendTo(o), l || s(c), setInterval(function() {
				var n = t.readCookie(g.cookieName);
				null === n || "9" === n ? o.detach() : e.contains(document, o[0]) || o.appendTo("body"), l && "1" !== n ? (s(c), i()) : l || "1" !== n || (a(c), i())
			}, 1e4)
	}), require(["article/common/instances/sprinkler", "article/story/instances/ad-manager", "shared/interstitialmodal/instances/whitelist-interstitial", "article/common/instances/image-resizer", "article/story/instances/community", "article/story/instances/related-combined-coverage", "shared/ribbon/instances/ribbon", "shared/masthead/instances/masthead", "article/common/instances/font-sizer", "shared/account/instances/account", "shared/navigation/instances/navigation", "shared/sharetools/instances/sidebar", "shared/sharetools/instances/masthead", "shared/sharetools/instances/upshot", "shared/sharetools/instances/story-footer", "shared/searchform/instances/search-form", "article/story/instances/realestate-search-form", "article/story/instances/embedded-slideshow", "article/common/instances/marginalia-list", "shared/messaging/instances/messaging", "shared/mediaviewer/instances/media-viewer", "shared/whatsnext/instances/whats-next", "article/story/instances/tracking", "article/common/instances/welcome-back", "shared/nextin/instances/next-in", "shared/masthead/instances/masthead-api", "shared/video/instances/videos", "article/story/instances/full-bleed", "shared/upshot/instances/headshots", "shared/following/instances/follow-button", "article/story/instances/scoop-loader", "article/story/instances/review-map", "article/common/instances/free-trial", "shared/sharetools/instances/story-meta-footer", "article/story/instances/story", "article/story/instances/image-mirror", "shared/https/instances/toggle-button"]);
