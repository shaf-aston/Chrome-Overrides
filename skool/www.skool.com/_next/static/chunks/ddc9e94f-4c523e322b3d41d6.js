(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4027], {
        67631: function(t) {
            var e;
            "undefined" != typeof window && (e = function() {
                return function(t) {
                    var e = {};

                    function r(i) {
                        if (e[i]) return e[i].exports;
                        var n = e[i] = {
                            i: i,
                            l: !1,
                            exports: {}
                        };
                        return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
                    }
                    return r.m = t, r.c = e, r.d = function(t, e, i) {
                        r.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: i
                        })
                    }, r.r = function(t) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, r.t = function(t, e) {
                        if (1 & e && (t = r(t)), 8 & e || 4 & e && "object" == typeof t && t && t.__esModule) return t;
                        var i = Object.create(null);
                        if (r.r(i), Object.defineProperty(i, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var n in t) r.d(i, n, (function(e) {
                                return t[e]
                            }).bind(null, n));
                        return i
                    }, r.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return r.d(e, "a", e), e
                    }, r.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, r.p = "/dist/", r(r.s = "./src/hls.ts")
                }({
                    "./node_modules/eventemitter3/index.js": function(t, e, r) {
                        "use strict";
                        var i = Object.prototype.hasOwnProperty,
                            n = "~";

                        function s() {}

                        function a(t, e, r) {
                            this.fn = t, this.context = e, this.once = r || !1
                        }

                        function o(t, e, r, i, s) {
                            if ("function" != typeof r) throw TypeError("The listener must be a function");
                            var o = new a(r, i || t, s),
                                l = n ? n + e : e;
                            return t._events[l] ? t._events[l].fn ? t._events[l] = [t._events[l], o] : t._events[l].push(o) : (t._events[l] = o, t._eventsCount++), t
                        }

                        function l(t, e) {
                            0 == --t._eventsCount ? t._events = new s : delete t._events[e]
                        }

                        function u() {
                            this._events = new s, this._eventsCount = 0
                        }
                        Object.create && (s.prototype = Object.create(null), new s().__proto__ || (n = !1)), u.prototype.eventNames = function() {
                            var t, e, r = [];
                            if (0 === this._eventsCount) return r;
                            for (e in t = this._events) i.call(t, e) && r.push(n ? e.slice(1) : e);
                            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
                        }, u.prototype.listeners = function(t) {
                            var e = n ? n + t : t,
                                r = this._events[e];
                            if (!r) return [];
                            if (r.fn) return [r.fn];
                            for (var i = 0, s = r.length, a = Array(s); i < s; i++) a[i] = r[i].fn;
                            return a
                        }, u.prototype.listenerCount = function(t) {
                            var e = n ? n + t : t,
                                r = this._events[e];
                            return r ? r.fn ? 1 : r.length : 0
                        }, u.prototype.emit = function(t, e, r, i, s, a) {
                            var o = n ? n + t : t;
                            if (!this._events[o]) return !1;
                            var l, u, c = this._events[o],
                                d = arguments.length;
                            if (c.fn) {
                                switch (c.once && this.removeListener(t, c.fn, void 0, !0), d) {
                                    case 1:
                                        return c.fn.call(c.context), !0;
                                    case 2:
                                        return c.fn.call(c.context, e), !0;
                                    case 3:
                                        return c.fn.call(c.context, e, r), !0;
                                    case 4:
                                        return c.fn.call(c.context, e, r, i), !0;
                                    case 5:
                                        return c.fn.call(c.context, e, r, i, s), !0;
                                    case 6:
                                        return c.fn.call(c.context, e, r, i, s, a), !0
                                }
                                for (u = 1, l = Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
                                c.fn.apply(c.context, l)
                            } else {
                                var h, f = c.length;
                                for (u = 0; u < f; u++) switch (c[u].once && this.removeListener(t, c[u].fn, void 0, !0), d) {
                                    case 1:
                                        c[u].fn.call(c[u].context);
                                        break;
                                    case 2:
                                        c[u].fn.call(c[u].context, e);
                                        break;
                                    case 3:
                                        c[u].fn.call(c[u].context, e, r);
                                        break;
                                    case 4:
                                        c[u].fn.call(c[u].context, e, r, i);
                                        break;
                                    default:
                                        if (!l)
                                            for (h = 1, l = Array(d - 1); h < d; h++) l[h - 1] = arguments[h];
                                        c[u].fn.apply(c[u].context, l)
                                }
                            }
                            return !0
                        }, u.prototype.on = function(t, e, r) {
                            return o(this, t, e, r, !1)
                        }, u.prototype.once = function(t, e, r) {
                            return o(this, t, e, r, !0)
                        }, u.prototype.removeListener = function(t, e, r, i) {
                            var s = n ? n + t : t;
                            if (!this._events[s]) return this;
                            if (!e) return l(this, s), this;
                            var a = this._events[s];
                            if (a.fn) a.fn !== e || i && !a.once || r && a.context !== r || l(this, s);
                            else {
                                for (var o = 0, u = [], c = a.length; o < c; o++)(a[o].fn !== e || i && !a[o].once || r && a[o].context !== r) && u.push(a[o]);
                                u.length ? this._events[s] = 1 === u.length ? u[0] : u : l(this, s)
                            }
                            return this
                        }, u.prototype.removeAllListeners = function(t) {
                            var e;
                            return t ? (e = n ? n + t : t, this._events[e] && l(this, e)) : (this._events = new s, this._eventsCount = 0), this
                        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = n, u.EventEmitter = u, t.exports = u
                    },
                    "./node_modules/url-toolkit/src/url-toolkit.js": function(t, e, r) {
                        var i, n, s, a, o;
                        i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/, n = /^([^\/?#]*)([^]*)$/, s = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
                            buildAbsoluteURL: function(t, e, r) {
                                if (r = r || {}, t = t.trim(), !(e = e.trim())) {
                                    if (!r.alwaysNormalize) return t;
                                    var i = o.parseURL(t);
                                    if (!i) throw Error("Error trying to parse base URL.");
                                    return i.path = o.normalizePath(i.path), o.buildURLFromParts(i)
                                }
                                var s = o.parseURL(e);
                                if (!s) throw Error("Error trying to parse relative URL.");
                                if (s.scheme) return r.alwaysNormalize ? (s.path = o.normalizePath(s.path), o.buildURLFromParts(s)) : e;
                                var a = o.parseURL(t);
                                if (!a) throw Error("Error trying to parse base URL.");
                                if (!a.netLoc && a.path && "/" !== a.path[0]) {
                                    var l = n.exec(a.path);
                                    a.netLoc = l[1], a.path = l[2]
                                }
                                a.netLoc && !a.path && (a.path = "/");
                                var u = {
                                    scheme: a.scheme,
                                    netLoc: s.netLoc,
                                    path: null,
                                    params: s.params,
                                    query: s.query,
                                    fragment: s.fragment
                                };
                                if (!s.netLoc && (u.netLoc = a.netLoc, "/" !== s.path[0])) {
                                    if (s.path) {
                                        var c = a.path,
                                            d = c.substring(0, c.lastIndexOf("/") + 1) + s.path;
                                        u.path = o.normalizePath(d)
                                    } else u.path = a.path, s.params || (u.params = a.params, s.query || (u.query = a.query))
                                }
                                return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(s.path) : s.path), o.buildURLFromParts(u)
                            },
                            parseURL: function(t) {
                                var e = i.exec(t);
                                return e ? {
                                    scheme: e[1] || "",
                                    netLoc: e[2] || "",
                                    path: e[3] || "",
                                    params: e[4] || "",
                                    query: e[5] || "",
                                    fragment: e[6] || ""
                                } : null
                            },
                            normalizePath: function(t) {
                                for (t = t.split("").reverse().join("").replace(s, ""); t.length !== (t = t.replace(a, "")).length;);
                                return t.split("").reverse().join("")
                            },
                            buildURLFromParts: function(t) {
                                return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
                            }
                        }, t.exports = o
                    },
                    "./node_modules/webworkify-webpack/index.js": function(t, e, r) {
                        function i(t) {
                            var e = {};

                            function r(i) {
                                if (e[i]) return e[i].exports;
                                var n = e[i] = {
                                    i: i,
                                    l: !1,
                                    exports: {}
                                };
                                return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
                            }
                            r.m = t, r.c = e, r.i = function(t) {
                                return t
                            }, r.d = function(t, e, i) {
                                r.o(t, e) || Object.defineProperty(t, e, {
                                    configurable: !1,
                                    enumerable: !0,
                                    get: i
                                })
                            }, r.r = function(t) {
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                })
                            }, r.n = function(t) {
                                var e = t && t.__esModule ? function() {
                                    return t.default
                                } : function() {
                                    return t
                                };
                                return r.d(e, "a", e), e
                            }, r.o = function(t, e) {
                                return Object.prototype.hasOwnProperty.call(t, e)
                            }, r.p = "/", r.oe = function(t) {
                                throw console.error(t), t
                            };
                            var i = r(r.s = ENTRY_MODULE);
                            return i.default || i
                        }
                        var n = "[\\.|\\-|\\+|\\w|/|@]+",
                            s = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + n + ").*?\\)";

                        function a(t) {
                            return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                        }
                        t.exports = function(t, e) {
                            e = e || {};
                            var o = {
                                    main: r.m
                                },
                                l = e.all ? {
                                    main: Object.keys(o.main)
                                } : function(t, e) {
                                    for (var i = {
                                            main: [e]
                                        }, o = {
                                            main: []
                                        }, l = {
                                            main: {}
                                        }; Object.keys(i).reduce(function(t, e) {
                                            return t || i[e].length > 0
                                        }, !1);)
                                        for (var u = Object.keys(i), c = 0; c < u.length; c++) {
                                            var d = u[c],
                                                h = i[d].pop();
                                            if (l[d] = l[d] || {}, !l[d][h] && t[d][h]) {
                                                l[d][h] = !0, o[d] = o[d] || [], o[d].push(h);
                                                for (var f = function(t, e, i) {
                                                        var o, l = {};
                                                        l[i] = [];
                                                        var u = e.toString(),
                                                            c = u.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                                                        if (!c) return l;
                                                        for (var d = c[1], h = RegExp("(\\\\n|\\W)" + a(d) + s, "g"); o = h.exec(u);) "dll-reference" !== o[3] && l[i].push(o[3]);
                                                        for (h = RegExp("\\(" + a(d) + '\\("(dll-reference\\s(' + n + '))"\\)\\)' + s, "g"); o = h.exec(u);) t[o[2]] || (l[i].push(o[1]), t[o[2]] = r(o[1]).m), l[o[2]] = l[o[2]] || [], l[o[2]].push(o[4]);
                                                        for (var f = Object.keys(l), g = 0; g < f.length; g++)
                                                            for (var v = 0; v < l[f[g]].length; v++) isNaN(1 * l[f[g]][v]) || (l[f[g]][v] = 1 * l[f[g]][v]);
                                                        return l
                                                    }(t, t[d][h], d), g = Object.keys(f), v = 0; v < g.length; v++) i[g[v]] = i[g[v]] || [], i[g[v]] = i[g[v]].concat(f[g[v]])
                                            }
                                        }
                                    return o
                                }(o, t),
                                u = "";
                            Object.keys(l).filter(function(t) {
                                return "main" !== t
                            }).forEach(function(t) {
                                for (var e = 0; l[t][e];) e++;
                                l[t].push(e), o[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", u = u + "var " + t + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + l[t].map(function(e) {
                                    return "" + JSON.stringify(e) + ": " + o[t][e].toString()
                                }).join(",") + "});\n"
                            }), u = u + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + l.main.map(function(t) {
                                return "" + JSON.stringify(t) + ": " + o.main[t].toString()
                            }).join(",") + "}))(self);";
                            var c = new window.Blob([u], {
                                type: "text/javascript"
                            });
                            if (e.bare) return c;
                            var d = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(c),
                                h = new window.Worker(d);
                            return h.objectURL = d, h
                        }
                    },
                    "./src/config.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "hlsDefaultConfig", function() {
                            return b
                        }), r.d(e, "mergeConfig", function() {
                            return L
                        }), r.d(e, "enableStreamingMode", function() {
                            return A
                        });
                        var i = r("./src/controller/abr-controller.ts"),
                            n = r("./src/controller/audio-stream-controller.ts"),
                            s = r("./src/controller/audio-track-controller.ts"),
                            a = r("./src/controller/subtitle-stream-controller.ts"),
                            o = r("./src/controller/subtitle-track-controller.ts"),
                            l = r("./src/controller/buffer-controller.ts"),
                            u = r("./src/controller/timeline-controller.ts"),
                            c = r("./src/controller/cap-level-controller.ts"),
                            d = r("./src/controller/fps-controller.ts"),
                            h = r("./src/controller/eme-controller.ts"),
                            f = r("./src/controller/cmcd-controller.ts"),
                            g = r("./src/utils/xhr-loader.ts"),
                            v = r("./src/utils/fetch-loader.ts"),
                            p = r("./src/utils/cues.ts"),
                            m = r("./src/utils/mediakeys-helper.ts"),
                            y = r("./src/utils/logger.ts");

                        function E() {
                            return (E = Object.assign || function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                }
                                return t
                            }).apply(this, arguments)
                        }

                        function T(t, e) {
                            var r = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                e && (i = i.filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                })), r.push.apply(r, i)
                            }
                            return r
                        }

                        function S(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? T(Object(r), !0).forEach(function(e) {
                                    var i;
                                    i = r[e], e in t ? Object.defineProperty(t, e, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[e] = i
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : T(Object(r)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                })
                            }
                            return t
                        }
                        var b = S(S({
                            autoStartLoad: !0,
                            startPosition: -1,
                            defaultAudioCodec: void 0,
                            debug: !1,
                            capLevelOnFPSDrop: !1,
                            capLevelToPlayerSize: !1,
                            initialLiveManifestSize: 1,
                            maxBufferLength: 30,
                            backBufferLength: 1 / 0,
                            maxBufferSize: 6e7,
                            maxBufferHole: .1,
                            highBufferWatchdogPeriod: 2,
                            nudgeOffset: .1,
                            nudgeMaxRetry: 3,
                            maxFragLookUpTolerance: .25,
                            liveSyncDurationCount: 3,
                            liveMaxLatencyDurationCount: 1 / 0,
                            liveSyncDuration: void 0,
                            liveMaxLatencyDuration: void 0,
                            maxLiveSyncPlaybackRate: 1,
                            liveDurationInfinity: !1,
                            liveBackBufferLength: null,
                            maxMaxBufferLength: 600,
                            enableWorker: !0,
                            enableSoftwareAES: !0,
                            manifestLoadingTimeOut: 1e4,
                            manifestLoadingMaxRetry: 1,
                            manifestLoadingRetryDelay: 1e3,
                            manifestLoadingMaxRetryTimeout: 64e3,
                            startLevel: void 0,
                            levelLoadingTimeOut: 1e4,
                            levelLoadingMaxRetry: 4,
                            levelLoadingRetryDelay: 1e3,
                            levelLoadingMaxRetryTimeout: 64e3,
                            fragLoadingTimeOut: 2e4,
                            fragLoadingMaxRetry: 6,
                            fragLoadingRetryDelay: 1e3,
                            fragLoadingMaxRetryTimeout: 64e3,
                            startFragPrefetch: !1,
                            fpsDroppedMonitoringPeriod: 5e3,
                            fpsDroppedMonitoringThreshold: .2,
                            appendErrorMaxRetry: 3,
                            loader: g.default,
                            fLoader: void 0,
                            pLoader: void 0,
                            xhrSetup: void 0,
                            licenseXhrSetup: void 0,
                            licenseResponseCallback: void 0,
                            abrController: i.default,
                            bufferController: l.default,
                            capLevelController: c.default,
                            fpsController: d.default,
                            stretchShortVideoTrack: !1,
                            maxAudioFramesDrift: 1,
                            forceKeyFrameOnDiscontinuity: !0,
                            abrEwmaFastLive: 3,
                            abrEwmaSlowLive: 9,
                            abrEwmaFastVoD: 3,
                            abrEwmaSlowVoD: 9,
                            abrEwmaDefaultEstimate: 5e5,
                            abrBandWidthFactor: .95,
                            abrBandWidthUpFactor: .7,
                            abrMaxWithRealBitrate: !1,
                            maxStarvationDelay: 4,
                            maxLoadingDelay: 4,
                            minAutoBitrate: 0,
                            emeEnabled: !1,
                            widevineLicenseUrl: void 0,
                            drmSystemOptions: {},
                            requestMediaKeySystemAccessFunc: m.requestMediaKeySystemAccess,
                            testBandwidth: !0,
                            progressive: !1,
                            lowLatencyMode: !0,
                            cmcd: void 0
                        }, {
                            cueHandler: p.default,
                            enableCEA708Captions: !0,
                            enableWebVTT: !0,
                            enableIMSC1: !0,
                            captionsTextTrack1Label: "English",
                            captionsTextTrack1LanguageCode: "en",
                            captionsTextTrack2Label: "Spanish",
                            captionsTextTrack2LanguageCode: "es",
                            captionsTextTrack3Label: "Unknown CC",
                            captionsTextTrack3LanguageCode: "",
                            captionsTextTrack4Label: "Unknown CC",
                            captionsTextTrack4LanguageCode: "",
                            renderTextTracksNatively: !0
                        }), {}, {
                            subtitleStreamController: a.SubtitleStreamController,
                            subtitleTrackController: o.default,
                            timelineController: u.TimelineController,
                            audioStreamController: n.default,
                            audioTrackController: s.default,
                            emeController: h.default,
                            cmcdController: f.default
                        });

                        function L(t, e) {
                            if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                            if (void 0 !== e.liveMaxLatencyDurationCount && (void 0 === e.liveSyncDurationCount || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount)) throw Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
                            if (void 0 !== e.liveMaxLatencyDuration && (void 0 === e.liveSyncDuration || e.liveMaxLatencyDuration <= e.liveSyncDuration)) throw Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
                            return E({}, t, e)
                        }

                        function A(t) {
                            var e = t.loader;
                            e !== v.default && e !== g.default ? (y.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), t.progressive = !1) : Object(v.fetchSupported)() && (t.loader = v.default, t.progressive = !0, t.enableSoftwareAES = !0, y.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))
                        }
                    },
                    "./src/controller/abr-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/utils/ewma-bandwidth-estimator.ts"),
                            s = r("./src/events.ts"),
                            a = r("./src/utils/buffer-helper.ts"),
                            o = r("./src/errors.ts"),
                            l = r("./src/types/loader.ts"),
                            u = r("./src/utils/logger.ts"),
                            c = function() {
                                function t(t) {
                                    this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = t;
                                    var e = t.config;
                                    this.bwEstimator = new n.default(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate), this.registerListeners()
                                }
                                var e = t.prototype;
                                return e.registerListeners = function() {
                                        var t = this.hls;
                                        t.on(s.Events.FRAG_LOADING, this.onFragLoading, this), t.on(s.Events.FRAG_LOADED, this.onFragLoaded, this), t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this), t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.Events.ERROR, this.onError, this)
                                    }, e.unregisterListeners = function() {
                                        var t = this.hls;
                                        t.off(s.Events.FRAG_LOADING, this.onFragLoading, this), t.off(s.Events.FRAG_LOADED, this.onFragLoaded, this), t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this), t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.Events.ERROR, this.onError, this)
                                    }, e.destroy = function() {
                                        this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
                                    }, e.onFragLoading = function(t, e) {
                                        var r, i = e.frag;
                                        i.type !== l.PlaylistLevelType.MAIN || this.timer || (this.fragCurrent = i, this.partCurrent = null != (r = e.part) ? r : null, this.timer = self.setInterval(this.onCheck, 100))
                                    }, e.onLevelLoaded = function(t, e) {
                                        var r = this.hls.config;
                                        e.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
                                    }, e._abandonRulesCheck = function() {
                                        var t, e = this.fragCurrent,
                                            r = this.partCurrent,
                                            n = this.hls,
                                            o = n.autoLevelEnabled,
                                            l = n.config,
                                            c = n.media;
                                        if (!!e && !!c) {
                                            var d = r ? r.stats : e.stats,
                                                h = r ? r.duration : e.duration;
                                            if (d.aborted) {
                                                u.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), this._nextAutoLevel = -1;
                                                return
                                            }
                                            if (o && !c.paused && c.playbackRate && c.readyState) {
                                                var f = performance.now() - d.loading.start,
                                                    g = Math.abs(c.playbackRate);
                                                if (!(f <= 500 * h / g)) {
                                                    var v = n.levels,
                                                        p = n.minAutoLevel,
                                                        m = v[e.level],
                                                        y = d.total || Math.max(d.loaded, Math.round(h * m.maxBitrate / 8)),
                                                        E = Math.max(1, d.bwEstimate ? d.bwEstimate / 8 : 1e3 * d.loaded / f),
                                                        T = (y - d.loaded) / E,
                                                        S = c.currentTime,
                                                        b = (a.BufferHelper.bufferInfo(c, S, l.maxBufferHole).end - S) / g;
                                                    if (!(b >= 2 * h / g) && !(T <= b)) {
                                                        var L = Number.POSITIVE_INFINITY;
                                                        for (t = e.level - 1; t > p && !((L = h * v[t].maxBitrate / (6.4 * E)) < b); t--);
                                                        if (!(L >= T)) {
                                                            var A = this.bwEstimator.getEstimate();
                                                            u.logger.warn("Fragment " + e.sn + (r ? " part " + r.index : "") + " of level " + e.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + t + "\n      Current BW estimate: " + (Object(i.isFiniteNumber)(A) ? (A / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + T.toFixed(3) + " s\n      Estimated load time for the next fragment: " + L.toFixed(3) + " s\n      Time to underbuffer: " + b.toFixed(3) + " s"), n.nextLoadLevel = t, this.bwEstimator.sample(f, d.loaded), this.clearTimer(), e.loader && (this.fragCurrent = this.partCurrent = null, e.loader.abort()), n.trigger(s.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                                frag: e,
                                                                part: r,
                                                                stats: d
                                                            })
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }, e.onFragLoaded = function(t, e) {
                                        var r = e.frag,
                                            n = e.part;
                                        if (r.type === l.PlaylistLevelType.MAIN && Object(i.isFiniteNumber)(r.sn)) {
                                            var a = n ? n.stats : r.stats,
                                                o = n ? n.duration : r.duration;
                                            if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                                                var u = this.hls.levels[r.level],
                                                    c = (u.loaded ? u.loaded.bytes : 0) + a.loaded,
                                                    d = (u.loaded ? u.loaded.duration : 0) + o;
                                                u.loaded = {
                                                    bytes: c,
                                                    duration: d
                                                }, u.realBitrate = Math.round(8 * c / d)
                                            }
                                            if (r.bitrateTest) {
                                                var h = {
                                                    stats: a,
                                                    frag: r,
                                                    part: n,
                                                    id: r.type
                                                };
                                                this.onFragBuffered(s.Events.FRAG_BUFFERED, h), r.bitrateTest = !1
                                            }
                                        }
                                    }, e.onFragBuffered = function(t, e) {
                                        var r = e.frag,
                                            i = e.part,
                                            n = i ? i.stats : r.stats;
                                        if (!n.aborted && r.type === l.PlaylistLevelType.MAIN && "initSegment" !== r.sn) {
                                            var s = n.parsing.end - n.loading.start;
                                            this.bwEstimator.sample(s, n.loaded), n.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = s / 1e3 : this.bitrateTestDelay = 0
                                        }
                                    }, e.onError = function(t, e) {
                                        switch (e.details) {
                                            case o.ErrorDetails.FRAG_LOAD_ERROR:
                                            case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                                this.clearTimer()
                                        }
                                    }, e.clearTimer = function() {
                                        self.clearInterval(this.timer), this.timer = void 0
                                    }, e.getNextABRAutoLevel = function() {
                                        var t = this.fragCurrent,
                                            e = this.partCurrent,
                                            r = this.hls,
                                            i = r.maxAutoLevel,
                                            n = r.config,
                                            s = r.minAutoLevel,
                                            o = r.media,
                                            l = e ? e.duration : t ? t.duration : 0,
                                            c = o ? o.currentTime : 0,
                                            d = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1,
                                            h = this.bwEstimator ? this.bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                                            f = (a.BufferHelper.bufferInfo(o, c, n.maxBufferHole).end - c) / d,
                                            g = this.findBestLevel(h, s, i, f, n.abrBandWidthFactor, n.abrBandWidthUpFactor);
                                        if (g >= 0) return g;
                                        u.logger.trace((f ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
                                        var v = l ? Math.min(l, n.maxStarvationDelay) : n.maxStarvationDelay,
                                            p = n.abrBandWidthFactor,
                                            m = n.abrBandWidthUpFactor;
                                        if (!f) {
                                            var y = this.bitrateTestDelay;
                                            y && (v = (l ? Math.min(l, n.maxLoadingDelay) : n.maxLoadingDelay) - y, u.logger.trace("bitrate test took " + Math.round(1e3 * y) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"), p = m = 1)
                                        }
                                        return Math.max(g = this.findBestLevel(h, s, i, f + v, p, m), 0)
                                    }, e.findBestLevel = function(t, e, r, i, n, s) {
                                        for (var a, o = this.fragCurrent, l = this.partCurrent, c = this.lastLoadedFragLevel, d = this.hls.levels, h = d[c], f = !!(null != h && null !== (a = h.details) && void 0 !== a && a.live), g = null == h ? void 0 : h.codecSet, v = l ? l.duration : o ? o.duration : 0, p = r; p >= e; p--) {
                                            var m = d[p];
                                            if (m && (!g || m.codecSet === g)) {
                                                var y = m.details,
                                                    E = (l ? null == y ? void 0 : y.partTarget : null == y ? void 0 : y.averagetargetduration) || v,
                                                    T = void 0;
                                                T = p <= c ? n * t : s * t;
                                                var S = d[p].maxBitrate,
                                                    b = S * E / T;
                                                if (u.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + p + "/" + Math.round(T) + "/" + S + "/" + E + "/" + i + "/" + b), T > S && (!b || f && !this.bitrateTestDelay || b < i)) return p
                                            }
                                        }
                                        return -1
                                    },
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(t.prototype, [{
                                        key: "nextAutoLevel",
                                        get: function() {
                                            var t = this._nextAutoLevel,
                                                e = this.bwEstimator;
                                            if (-1 !== t && (!e || !e.canEstimate())) return t;
                                            var r = this.getNextABRAutoLevel();
                                            return -1 !== t && (r = Math.min(t, r)), r
                                        },
                                        set: function(t) {
                                            this._nextAutoLevel = t
                                        }
                                    }]), t
                            }();
                        e.default = c
                    },
                    "./src/controller/audio-stream-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/controller/base-stream-controller.ts"),
                            s = r("./src/events.ts"),
                            a = r("./src/utils/buffer-helper.ts"),
                            o = r("./src/controller/fragment-tracker.ts"),
                            l = r("./src/types/level.ts"),
                            u = r("./src/types/loader.ts"),
                            c = r("./src/loader/fragment.ts"),
                            d = r("./src/demux/chunk-cache.ts"),
                            h = r("./src/demux/transmuxer-interface.ts"),
                            f = r("./src/types/transmuxer.ts"),
                            g = r("./src/controller/fragment-finders.ts"),
                            v = r("./src/utils/discontinuities.ts"),
                            p = r("./src/errors.ts"),
                            m = r("./src/utils/logger.ts");

                        function y() {
                            return (y = Object.assign || function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                }
                                return t
                            }).apply(this, arguments)
                        }

                        function E(t, e) {
                            return (E = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var T = function(t) {
                            function e(e, r) {
                                var i;
                                return (i = t.call(this, e, r, "[audio-stream-controller]") || this).videoBuffer = null, i.videoTrackCC = -1, i.waitingVideoCC = -1, i.audioSwitch = !1, i.trackId = -1, i.waitingData = null, i.mainDetails = null, i.bufferFlushed = !1, i._registerListeners(), i
                            }
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, E(e, t);
                            var r = e.prototype;
                            return r.onHandlerDestroying = function() {
                                this._unregisterListeners(), this.mainDetails = null
                            }, r._registerListeners = function() {
                                var t = this.hls;
                                t.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(s.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.on(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(s.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(s.Events.ERROR, this.onError, this), t.on(s.Events.BUFFER_RESET, this.onBufferReset, this), t.on(s.Events.BUFFER_CREATED, this.onBufferCreated, this), t.on(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(s.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                            }, r._unregisterListeners = function() {
                                var t = this.hls;
                                t.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(s.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), t.off(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(s.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(s.Events.ERROR, this.onError, this), t.off(s.Events.BUFFER_RESET, this.onBufferReset, this), t.off(s.Events.BUFFER_CREATED, this.onBufferCreated, this), t.off(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(s.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                            }, r.onInitPtsFound = function(t, e) {
                                var r = e.frag,
                                    i = e.id,
                                    s = e.initPTS;
                                if ("main" === i) {
                                    var a = r.cc;
                                    this.initPTS[r.cc] = s, this.log("InitPTS for cc: " + a + " found from main: " + s), this.videoTrackCC = a, this.state === n.State.WAITING_INIT_PTS && this.tick()
                                }
                            }, r.startLoad = function(t) {
                                if (!this.levels) {
                                    this.startPosition = t, this.state = n.State.STOPPED;
                                    return
                                }
                                var e = this.lastCurrentTime;
                                this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, e > 0 && -1 === t ? (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = n.State.IDLE) : (this.loadedmetadata = !1, this.state = n.State.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                            }, r.doTick = function() {
                                switch (this.state) {
                                    case n.State.IDLE:
                                        this.doTickIdle();
                                        break;
                                    case n.State.WAITING_TRACK:
                                        var e, r = this.levels,
                                            i = this.trackId,
                                            s = null == r ? void 0 : null === (e = r[i]) || void 0 === e ? void 0 : e.details;
                                        if (s) {
                                            if (this.waitForCdnTuneIn(s)) break;
                                            this.state = n.State.WAITING_INIT_PTS
                                        }
                                        break;
                                    case n.State.FRAG_LOADING_WAITING_RETRY:
                                        var o, l = performance.now(),
                                            u = this.retryDate;
                                        (!u || l >= u || null !== (o = this.media) && void 0 !== o && o.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = n.State.IDLE);
                                        break;
                                    case n.State.WAITING_INIT_PTS:
                                        var c = this.waitingData;
                                        if (c) {
                                            var d = c.frag,
                                                h = c.part,
                                                f = c.cache,
                                                v = c.complete;
                                            if (void 0 !== this.initPTS[d.cc]) {
                                                this.waitingData = null, this.waitingVideoCC = -1, this.state = n.State.FRAG_LOADING;
                                                var p = {
                                                    frag: d,
                                                    part: h,
                                                    payload: f.flush(),
                                                    networkDetails: null
                                                };
                                                this._handleFragmentLoadProgress(p), v && t.prototype._handleFragmentLoadComplete.call(this, p)
                                            } else if (this.videoTrackCC !== this.waitingVideoCC) m.logger.log("Waiting fragment cc (" + d.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                                            else {
                                                var y = this.getLoadPosition(),
                                                    E = a.BufferHelper.bufferInfo(this.mediaBuffer, y, this.config.maxBufferHole);
                                                0 > Object(g.fragmentWithinToleranceTest)(E.end, this.config.maxFragLookUpTolerance, d) && (m.logger.log("Waiting fragment cc (" + d.cc + ") @ " + d.start + " cancelled because another fragment at " + E.end + " is needed"), this.clearWaitingFragment())
                                            }
                                        } else this.state = n.State.IDLE
                                }
                                this.onTickEnd()
                            }, r.clearWaitingFragment = function() {
                                var t = this.waitingData;
                                t && (this.fragmentTracker.removeFragment(t.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = n.State.IDLE)
                            }, r.onTickEnd = function() {
                                var t = this.media;
                                if (t && t.readyState) {
                                    var e = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
                                    !this.loadedmetadata && e.length && (this.loadedmetadata = !0), this.lastCurrentTime = t.currentTime
                                }
                            }, r.doTickIdle = function() {
                                var t, e, r = this.hls,
                                    i = this.levels,
                                    a = this.media,
                                    o = this.trackId,
                                    l = r.config;
                                if (i && i[o] && (a || !this.startFragRequested && l.startFragPrefetch)) {
                                    var d = i[o].details;
                                    if (!d || d.live && this.levelLastLoaded !== o || this.waitForCdnTuneIn(d)) {
                                        this.state = n.State.WAITING_TRACK;
                                        return
                                    }
                                    this.bufferFlushed && (this.bufferFlushed = !1, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, c.ElementaryStreamTypes.AUDIO, u.PlaylistLevelType.AUDIO));
                                    var h = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, u.PlaylistLevelType.AUDIO);
                                    if (null !== h) {
                                        var f = h.len,
                                            g = this.getMaxBufferLength(),
                                            v = this.audioSwitch;
                                        if (!(f >= g) || v) {
                                            if (!v && this._streamEnded(h, d)) {
                                                r.trigger(s.Events.BUFFER_EOS, {
                                                    type: "audio"
                                                }), this.state = n.State.ENDED;
                                                return
                                            }
                                            var p = d.fragments[0].start,
                                                m = h.end;
                                            if (v) {
                                                var y = this.getLoadPosition();
                                                m = y, d.PTSKnown && y < p && (h.end > p || h.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), a.currentTime = p + .05)
                                            }
                                            var E = this.getNextFragment(m, d);
                                            if (!E) {
                                                this.bufferFlushed = !0;
                                                return
                                            }(null === (t = E.decryptdata) || void 0 === t ? void 0 : t.keyFormat) !== "identity" || null !== (e = E.decryptdata) && void 0 !== e && e.key ? this.loadFragment(E, d, m) : this.loadKey(E, d)
                                        }
                                    }
                                }
                            }, r.getMaxBufferLength = function() {
                                var e = t.prototype.getMaxBufferLength.call(this),
                                    r = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, u.PlaylistLevelType.MAIN);
                                return null === r ? e : Math.max(e, r.len)
                            }, r.onMediaDetaching = function() {
                                this.videoBuffer = null, t.prototype.onMediaDetaching.call(this)
                            }, r.onAudioTracksUpdated = function(t, e) {
                                var r = e.audioTracks;
                                this.resetTransmuxer(), this.levels = r.map(function(t) {
                                    return new l.Level(t)
                                })
                            }, r.onAudioTrackSwitching = function(t, e) {
                                var r = !!e.url;
                                this.trackId = e.id;
                                var i = this.fragCurrent;
                                null != i && i.loader && i.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), r ? this.setInterval(100) : this.resetTransmuxer(), r ? (this.audioSwitch = !0, this.state = n.State.IDLE) : this.state = n.State.STOPPED, this.tick()
                            }, r.onManifestLoading = function() {
                                this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1
                            }, r.onLevelLoaded = function(t, e) {
                                this.mainDetails = e.details
                            }, r.onAudioTrackLoaded = function(t, e) {
                                var r, i = this.levels,
                                    s = e.details,
                                    a = e.id;
                                if (!i) {
                                    this.warn("Audio tracks were reset while loading level " + a);
                                    return
                                }
                                this.log("Track " + a + " loaded [" + s.startSN + "," + s.endSN + "],duration:" + s.totalduration);
                                var o = i[a],
                                    l = 0;
                                if (s.live || null !== (r = o.details) && void 0 !== r && r.live) {
                                    var u = this.mainDetails;
                                    if (s.fragments[0] || (s.deltaUpdateFailed = !0), s.deltaUpdateFailed || !u) return;
                                    !o.details && s.hasProgramDateTime && u.hasProgramDateTime ? (Object(v.alignMediaPlaylistByPDT)(s, u), l = s.fragments[0].start) : l = this.alignPlaylists(s, o.details)
                                }
                                o.details = s, this.levelLastLoaded = a, this.startFragRequested || !this.mainDetails && s.live || this.setStartPosition(o.details, l), this.state !== n.State.WAITING_TRACK || this.waitForCdnTuneIn(s) || (this.state = n.State.IDLE), this.tick()
                            }, r._handleFragmentLoadProgress = function(t) {
                                var e, r = t.frag,
                                    i = t.part,
                                    s = t.payload,
                                    a = this.config,
                                    o = this.trackId,
                                    l = this.levels;
                                if (!l) {
                                    this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered");
                                    return
                                }
                                var c = l[o];
                                console.assert(c, "Audio track is defined on fragment load progress");
                                var g = c.details;
                                console.assert(g, "Audio track details are defined on fragment load progress");
                                var v = a.defaultAudioCodec || c.audioCodec || "mp4a.40.2",
                                    p = this.transmuxer;
                                p || (p = this.transmuxer = new h.default(this.hls, u.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
                                var y = this.initPTS[r.cc],
                                    E = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data;
                                if (void 0 !== y) {
                                    var T = i ? i.index : -1,
                                        S = new f.ChunkMetadata(r.level, r.sn, r.stats.chunkCount, s.byteLength, T, -1 !== T);
                                    p.push(s, E, v, "", r, i, g.totalduration, !1, S, y)
                                } else m.logger.log("Unknown video PTS for cc " + r.cc + ", waiting for video PTS before demuxing audio frag " + r.sn + " of [" + g.startSN + " ," + g.endSN + "],track " + o), (this.waitingData = this.waitingData || {
                                    frag: r,
                                    part: i,
                                    cache: new d.default,
                                    complete: !1
                                }).cache.push(new Uint8Array(s)), this.waitingVideoCC = this.videoTrackCC, this.state = n.State.WAITING_INIT_PTS
                            }, r._handleFragmentLoadComplete = function(e) {
                                if (this.waitingData) {
                                    this.waitingData.complete = !0;
                                    return
                                }
                                t.prototype._handleFragmentLoadComplete.call(this, e)
                            }, r.onBufferReset = function() {
                                this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                            }, r.onBufferCreated = function(t, e) {
                                var r = e.tracks.audio;
                                r && (this.mediaBuffer = r.buffer), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                            }, r.onFragBuffered = function(t, e) {
                                var r = e.frag,
                                    i = e.part;
                                if (r.type === u.PlaylistLevelType.AUDIO) {
                                    if (this.fragContextChanged(r)) {
                                        this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch);
                                        return
                                    }
                                    "initSegment" !== r.sn && (this.fragPrevious = r, this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(s.Events.AUDIO_TRACK_SWITCHED, {
                                        id: this.trackId
                                    }))), this.fragBufferedComplete(r, i)
                                }
                            }, r.onError = function(e, r) {
                                switch (r.details) {
                                    case p.ErrorDetails.FRAG_LOAD_ERROR:
                                    case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                    case p.ErrorDetails.KEY_LOAD_ERROR:
                                    case p.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        this.onFragmentOrKeyLoadError(u.PlaylistLevelType.AUDIO, r);
                                        break;
                                    case p.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                                    case p.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                                        this.state !== n.State.ERROR && this.state !== n.State.STOPPED && (this.state = r.fatal ? n.State.ERROR : n.State.IDLE, this.warn(r.details + " while loading frag, switching to " + this.state + " state"));
                                        break;
                                    case p.ErrorDetails.BUFFER_FULL_ERROR:
                                        if ("audio" === r.parent && (this.state === n.State.PARSING || this.state === n.State.PARSED)) {
                                            var i = !0,
                                                s = this.getFwdBufferInfo(this.mediaBuffer, u.PlaylistLevelType.AUDIO);
                                            s && s.len > .5 && (i = !this.reduceMaxBufferLength(s.len)), i && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState()
                                        }
                                }
                            }, r.onBufferFlushed = function(t, e) {
                                e.type === c.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0)
                            }, r._handleTransmuxComplete = function(t) {
                                var e, r = "audio",
                                    i = this.hls,
                                    a = t.remuxResult,
                                    o = t.chunkMeta,
                                    l = this.getCurrentContext(o);
                                if (!l) {
                                    this.warn("The loading context changed while buffering fragment " + o.sn + " of level " + o.level + ". This chunk will not be buffered."), this.resetLiveStartWhenNotLoaded(o.level);
                                    return
                                }
                                var u = l.frag,
                                    d = l.part,
                                    h = a.audio,
                                    f = a.text,
                                    g = a.id3,
                                    v = a.initSegment;
                                if (!this.fragContextChanged(u)) {
                                    if (this.state = n.State.PARSING, this.audioSwitch && h && this.completeAudioSwitch(), null != v && v.tracks && (this._bufferInitSegment(v.tracks, u, o), i.trigger(s.Events.FRAG_PARSING_INIT_SEGMENT, {
                                            frag: u,
                                            id: r,
                                            tracks: v.tracks
                                        })), h) {
                                        var p = h.startPTS,
                                            m = h.endPTS,
                                            E = h.startDTS,
                                            T = h.endDTS;
                                        d && (d.elementaryStreams[c.ElementaryStreamTypes.AUDIO] = {
                                            startPTS: p,
                                            endPTS: m,
                                            startDTS: E,
                                            endDTS: T
                                        }), u.setElementaryStreamInfo(c.ElementaryStreamTypes.AUDIO, p, m, E, T), this.bufferFragmentData(h, u, d, o)
                                    }
                                    if (null != g && null !== (e = g.samples) && void 0 !== e && e.length) {
                                        var S = y({
                                            frag: u,
                                            id: r
                                        }, g);
                                        i.trigger(s.Events.FRAG_PARSING_METADATA, S)
                                    }
                                    if (f) {
                                        var b = y({
                                            frag: u,
                                            id: r
                                        }, f);
                                        i.trigger(s.Events.FRAG_PARSING_USERDATA, b)
                                    }
                                }
                            }, r._bufferInitSegment = function(t, e, r) {
                                if (this.state === n.State.PARSING) {
                                    t.video && delete t.video;
                                    var i = t.audio;
                                    if (i) {
                                        i.levelCodec = i.codec, i.id = "audio", this.log("Init audio buffer, container:" + i.container + ", codecs[parsed]=[" + i.codec + "]"), this.hls.trigger(s.Events.BUFFER_CODECS, t);
                                        var a = i.initSegment;
                                        if (null != a && a.byteLength) {
                                            var o = {
                                                type: "audio",
                                                frag: e,
                                                part: null,
                                                chunkMeta: r,
                                                parent: e.type,
                                                data: a
                                            };
                                            this.hls.trigger(s.Events.BUFFER_APPENDING, o)
                                        }
                                        this.tick()
                                    }
                                }
                            }, r.loadFragment = function(e, r, s) {
                                var a = this.fragmentTracker.getState(e);
                                this.fragCurrent = e, (this.audioSwitch || a === o.FragmentState.NOT_LOADED || a === o.FragmentState.PARTIAL) && ("initSegment" === e.sn ? this._loadInitSegment(e) : r.live && !Object(i.isFiniteNumber)(this.initPTS[e.cc]) ? (this.log("Waiting for video PTS in continuity counter " + e.cc + " of live stream before loading audio fragment " + e.sn + " of level " + this.trackId), this.state = n.State.WAITING_INIT_PTS) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, s)))
                            }, r.completeAudioSwitch = function() {
                                var e = this.hls,
                                    r = this.media,
                                    i = this.trackId;
                                r && (this.log("Switching audio track : flushing all audio"), t.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = !1, e.trigger(s.Events.AUDIO_TRACK_SWITCHED, {
                                    id: i
                                })
                            }, e
                        }(n.default);
                        e.default = T
                    },
                    "./src/controller/audio-track-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/events.ts"),
                            n = r("./src/errors.ts"),
                            s = r("./src/controller/base-playlist-controller.ts"),
                            a = r("./src/types/loader.ts");

                        function o(t, e) {
                            return (o = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var l = function(t) {
                            function e(e) {
                                var r;
                                return (r = t.call(this, e, "[audio-track-controller]") || this).tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.trackName = "", r.selectDefaultTrack = !0, r.registerListeners(), r
                            }
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t);
                            var r, s = e.prototype;
                            return s.registerListeners = function() {
                                    var t = this.hls;
                                    t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(i.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(i.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.on(i.Events.ERROR, this.onError, this)
                                }, s.unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(i.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(i.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), t.off(i.Events.ERROR, this.onError, this)
                                }, s.destroy = function() {
                                    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, t.prototype.destroy.call(this)
                                }, s.onManifestLoading = function() {
                                    this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = !0
                                }, s.onManifestParsed = function(t, e) {
                                    this.tracks = e.audioTracks || []
                                }, s.onAudioTrackLoaded = function(t, e) {
                                    var r = e.id,
                                        i = e.details,
                                        n = this.tracksInGroup[r];
                                    if (!n) {
                                        this.warn("Invalid audio track id " + r);
                                        return
                                    }
                                    var s = n.details;
                                    n.details = e.details, this.log("audioTrack " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, e, s))
                                }, s.onLevelLoading = function(t, e) {
                                    this.switchLevel(e.level)
                                }, s.onLevelSwitching = function(t, e) {
                                    this.switchLevel(e.level)
                                }, s.switchLevel = function(t) {
                                    var e = this.hls.levels[t];
                                    if (null != e && e.audioGroupIds) {
                                        var r = e.audioGroupIds[e.urlId];
                                        if (this.groupId !== r) {
                                            this.groupId = r;
                                            var n = this.tracks.filter(function(t) {
                                                return !r || t.groupId === r
                                            });
                                            this.selectDefaultTrack && !n.some(function(t) {
                                                return t.default
                                            }) && (this.selectDefaultTrack = !1), this.tracksInGroup = n, this.log("Updating audio tracks, " + n.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(i.Events.AUDIO_TRACKS_UPDATED, {
                                                audioTracks: n
                                            }), this.selectInitialTrack()
                                        }
                                    }
                                }, s.onError = function(e, r) {
                                    t.prototype.onError.call(this, e, r), !r.fatal && r.context && r.context.type === a.PlaylistContextType.AUDIO_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
                                }, s.setAudioTrack = function(t) {
                                    var e = this.tracksInGroup;
                                    if (t < 0 || t >= e.length) {
                                        this.warn("Invalid id passed to audio-track controller");
                                        return
                                    }
                                    this.clearTimer();
                                    var r = e[this.trackId];
                                    this.log("Now switching to audio-track index " + t);
                                    var n = e[t],
                                        s = n.id,
                                        a = n.groupId,
                                        o = n.name,
                                        l = n.type,
                                        u = n.url;
                                    if (this.trackId = t, this.trackName = o, this.selectDefaultTrack = !1, this.hls.trigger(i.Events.AUDIO_TRACK_SWITCHING, {
                                            id: s,
                                            groupId: void 0 === a ? "" : a,
                                            name: o,
                                            type: l,
                                            url: u
                                        }), !n.details || n.details.live) {
                                        var c = this.switchParams(n.url, null == r ? void 0 : r.details);
                                        this.loadPlaylist(c)
                                    }
                                }, s.selectInitialTrack = function() {
                                    console.assert(this.tracksInGroup.length, "Initial audio track should be selected when tracks are known");
                                    var t = this.trackName,
                                        e = this.findTrackId(t) || this.findTrackId(); - 1 !== e ? this.setAudioTrack(e) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(i.Events.ERROR, {
                                        type: n.ErrorTypes.MEDIA_ERROR,
                                        details: n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                                        fatal: !0
                                    }))
                                }, s.findTrackId = function(t) {
                                    for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                                    }
                                    return -1
                                }, s.loadPlaylist = function(t) {
                                    var e = this.tracksInGroup[this.trackId];
                                    if (this.shouldLoadTrack(e)) {
                                        var r = e.id,
                                            n = e.groupId,
                                            s = e.url;
                                        if (t) try {
                                            s = t.addDirectives(s)
                                        } catch (t) {
                                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                        }
                                        this.log("loading audio-track playlist for id: " + r), this.clearTimer(), this.hls.trigger(i.Events.AUDIO_TRACK_LOADING, {
                                            url: s,
                                            id: r,
                                            groupId: n,
                                            deliveryDirectives: t || null
                                        })
                                    }
                                }, r = [{
                                    key: "audioTracks",
                                    get: function() {
                                        return this.tracksInGroup
                                    }
                                }, {
                                    key: "audioTrack",
                                    get: function() {
                                        return this.trackId
                                    },
                                    set: function(t) {
                                        this.selectDefaultTrack = !1, this.setAudioTrack(t)
                                    }
                                }],
                                function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(e.prototype, r), e
                        }(s.default);
                        e.default = l
                    },
                    "./src/controller/base-playlist-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return l
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/types/level.ts"),
                            s = r("./src/controller/level-helper.ts"),
                            a = r("./src/utils/logger.ts"),
                            o = r("./src/errors.ts"),
                            l = function() {
                                function t(t, e) {
                                    this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = a.logger.log.bind(a.logger, e + ":"), this.warn = a.logger.warn.bind(a.logger, e + ":"), this.hls = t
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this.clearTimer(), this.hls = this.log = this.warn = null
                                }, e.onError = function(t, e) {
                                    e.fatal && e.type === o.ErrorTypes.NETWORK_ERROR && this.clearTimer()
                                }, e.clearTimer = function() {
                                    clearTimeout(this.timer), this.timer = -1
                                }, e.startLoad = function() {
                                    this.canLoad = !0, this.retryCount = 0, this.loadPlaylist()
                                }, e.stopLoad = function() {
                                    this.canLoad = !1, this.clearTimer()
                                }, e.switchParams = function(t, e) {
                                    var r = null == e ? void 0 : e.renditionReports;
                                    if (r)
                                        for (var s = 0; s < r.length; s++) {
                                            var a = r[s],
                                                o = "" + a.URI;
                                            if (o === t.substr(-o.length)) {
                                                var l = parseInt(a["LAST-MSN"]),
                                                    u = parseInt(a["LAST-PART"]);
                                                if (e && this.hls.config.lowLatencyMode) {
                                                    var c = Math.min(e.age - e.partTarget, e.targetduration);
                                                    void 0 !== u && c > e.partTarget && (u += 1)
                                                }
                                                if (Object(i.isFiniteNumber)(l)) return new n.HlsUrlParameters(l, Object(i.isFiniteNumber)(u) ? u : void 0, n.HlsSkip.No)
                                            }
                                        }
                                }, e.loadPlaylist = function(t) {}, e.shouldLoadTrack = function(t) {
                                    return this.canLoad && t && !!t.url && (!t.details || t.details.live)
                                }, e.playlistLoaded = function(t, e, r) {
                                    var i = this,
                                        n = e.details,
                                        a = e.stats,
                                        o = a.loading.end ? Math.max(0, self.performance.now() - a.loading.end) : 0;
                                    if (n.advancedDateTime = Date.now() - o, n.live || null != r && r.live) {
                                        if (n.reloaded(r), r && this.log("live playlist " + t + " " + (n.advanced ? "REFRESHED " + n.lastPartSn + "-" + n.lastPartIndex : "MISSED")), r && n.fragments.length > 0 && Object(s.mergeDetails)(r, n), !this.canLoad || !n.live) return;
                                        var l, u = void 0,
                                            c = void 0;
                                        if (n.canBlockReload && n.endSN && n.advanced) {
                                            var d = this.hls.config.lowLatencyMode,
                                                h = n.lastPartSn,
                                                f = n.endSN,
                                                g = n.lastPartIndex,
                                                v = h === f; - 1 !== g ? (u = v ? f + 1 : h, c = v ? d ? 0 : g : g + 1) : u = f + 1;
                                            var p = n.age,
                                                m = Math.min(p + n.ageHeader - n.partTarget, 1.5 * n.targetduration);
                                            if (m > 0) {
                                                if (r && m > r.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + m + " with playlist age: " + n.age), m = 0;
                                                else {
                                                    var y = Math.floor(m / n.targetduration);
                                                    u += y, void 0 !== c && (c += Math.round(m % n.targetduration / n.partTarget)), this.log("CDN Tune-in age: " + n.ageHeader + "s last advanced " + p.toFixed(2) + "s goal: " + m + " skip sn " + y + " to part " + c)
                                                }
                                                n.tuneInGoal = m
                                            }
                                            if (l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, c), d || !v) {
                                                this.loadPlaylist(l);
                                                return
                                            }
                                        } else l = this.getDeliveryDirectives(n, e.deliveryDirectives, u, c);
                                        var E = Object(s.computeReloadInterval)(n, a);
                                        void 0 !== u && n.canBlockReload && (E -= n.partTarget || 1), this.log("reload live playlist " + t + " in " + Math.round(E) + " ms"), this.timer = self.setTimeout(function() {
                                            return i.loadPlaylist(l)
                                        }, E)
                                    } else this.clearTimer()
                                }, e.getDeliveryDirectives = function(t, e, r, i) {
                                    var s = Object(n.getSkipValue)(t, r);
                                    return null != e && e.skip && t.deltaUpdateFailed && (r = e.msn, i = e.part, s = n.HlsSkip.No), new n.HlsUrlParameters(r, i, s)
                                }, e.retryLoadingOrFail = function(t) {
                                    var e, r = this,
                                        i = this.hls.config,
                                        n = this.retryCount < i.levelLoadingMaxRetry;
                                    if (n) {
                                        if (this.retryCount++, t.details.indexOf("LoadTimeOut") > -1 && null !== (e = t.context) && void 0 !== e && e.deliveryDirectives) this.warn("retry playlist loading #" + this.retryCount + ' after "' + t.details + '"'), this.loadPlaylist();
                                        else {
                                            var s = Math.min(Math.pow(2, this.retryCount) * i.levelLoadingRetryDelay, i.levelLoadingMaxRetryTimeout);
                                            this.timer = self.setTimeout(function() {
                                                return r.loadPlaylist()
                                            }, s), this.warn("retry playlist loading #" + this.retryCount + " in " + s + ' ms after "' + t.details + '"')
                                        }
                                    } else this.warn('cannot recover from error "' + t.details + '"'), this.clearTimer(), t.fatal = !0;
                                    return n
                                }, t
                            }()
                    },
                    "./src/controller/base-stream-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "State", function() {
                            return T
                        }), r.d(e, "default", function() {
                            return S
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/task-loop.ts"),
                            s = r("./src/controller/fragment-tracker.ts"),
                            a = r("./src/utils/buffer-helper.ts"),
                            o = r("./src/utils/logger.ts"),
                            l = r("./src/events.ts"),
                            u = r("./src/errors.ts"),
                            c = r("./src/types/transmuxer.ts"),
                            d = r("./src/utils/mp4-tools.ts"),
                            h = r("./src/utils/discontinuities.ts"),
                            f = r("./src/controller/fragment-finders.ts"),
                            g = r("./src/controller/level-helper.ts"),
                            v = r("./src/loader/fragment-loader.ts"),
                            p = r("./src/crypt/decrypter.ts"),
                            m = r("./src/utils/time-ranges.ts"),
                            y = r("./src/types/loader.ts");

                        function E(t, e) {
                            return (E = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var T = {
                                STOPPED: "STOPPED",
                                IDLE: "IDLE",
                                KEY_LOADING: "KEY_LOADING",
                                FRAG_LOADING: "FRAG_LOADING",
                                FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                                WAITING_TRACK: "WAITING_TRACK",
                                PARSING: "PARSING",
                                PARSED: "PARSED",
                                BACKTRACKING: "BACKTRACKING",
                                ENDED: "ENDED",
                                ERROR: "ERROR",
                                WAITING_INIT_PTS: "WAITING_INIT_PTS",
                                WAITING_LEVEL: "WAITING_LEVEL"
                            },
                            S = function(t) {
                                function e(e, r, i) {
                                    var n;
                                    return (n = t.call(this) || this).hls = void 0, n.fragPrevious = null, n.fragCurrent = null, n.fragmentTracker = void 0, n.transmuxer = null, n._state = T.STOPPED, n.media = void 0, n.mediaBuffer = void 0, n.config = void 0, n.bitrateTest = !1, n.lastCurrentTime = 0, n.nextLoadPosition = 0, n.startPosition = 0, n.loadedmetadata = !1, n.fragLoadError = 0, n.retryDate = 0, n.levels = null, n.fragmentLoader = void 0, n.levelLastLoaded = null, n.startFragRequested = !1, n.decrypter = void 0, n.initPTS = [], n.onvseeking = null, n.onvended = null, n.logPrefix = "", n.log = void 0, n.warn = void 0, n.logPrefix = i, n.log = o.logger.log.bind(o.logger, i + ":"), n.warn = o.logger.warn.bind(o.logger, i + ":"), n.hls = e, n.fragmentLoader = new v.default(e.config), n.fragmentTracker = r, n.config = e.config, n.decrypter = new p.default(e, e.config), e.on(l.Events.KEY_LOADED, n.onKeyLoaded, function(t) {
                                        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t
                                    }(n)), n
                                }
                                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, E(e, t);
                                var r, n = e.prototype;
                                return n.doTick = function() {
                                        this.onTickEnd()
                                    }, n.onTickEnd = function() {}, n.startLoad = function(t) {}, n.stopLoad = function() {
                                        this.fragmentLoader.abort();
                                        var t = this.fragCurrent;
                                        t && this.fragmentTracker.removeFragment(t), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = T.STOPPED
                                    }, n._streamEnded = function(t, e) {
                                        var r = this.fragCurrent,
                                            i = this.fragmentTracker;
                                        if (!e.live && r && r.sn === e.endSN && !t.nextStart) {
                                            var n = i.getState(r);
                                            return n === s.FragmentState.PARTIAL || n === s.FragmentState.OK
                                        }
                                        return !1
                                    }, n.onMediaAttached = function(t, e) {
                                        var r = this.media = this.mediaBuffer = e.media;
                                        this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r.addEventListener("seeking", this.onvseeking), r.addEventListener("ended", this.onvended);
                                        var i = this.config;
                                        this.levels && i.autoStartLoad && this.state === T.STOPPED && this.startLoad(i.startPosition)
                                    }, n.onMediaDetaching = function() {
                                        var t = this.media;
                                        null != t && t.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                                    }, n.onMediaSeeking = function() {
                                        var t = this.config,
                                            e = this.fragCurrent,
                                            r = this.media,
                                            n = this.mediaBuffer,
                                            s = this.state,
                                            o = r ? r.currentTime : 0,
                                            l = a.BufferHelper.bufferInfo(n || r, o, t.maxBufferHole);
                                        if (this.log("media seeking to " + (Object(i.isFiniteNumber)(o) ? o.toFixed(3) : o) + ", state: " + s), s === T.ENDED) this.resetLoadingState();
                                        else if (e && !l.len) {
                                            var u = t.maxFragLookUpTolerance,
                                                c = e.start - u,
                                                d = o > e.start + e.duration + u;
                                            (o < c || d) && (d && e.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), e.loader.abort()), this.resetLoadingState())
                                        }
                                        r && (this.lastCurrentTime = o), this.loadedmetadata || l.len || (this.nextLoadPosition = this.startPosition = o), this.tickImmediate()
                                    }, n.onMediaEnded = function() {
                                        this.startPosition = this.lastCurrentTime = 0
                                    }, n.onKeyLoaded = function(t, e) {
                                        if (this.state === T.KEY_LOADING && e.frag === this.fragCurrent && this.levels) {
                                            this.state = T.IDLE;
                                            var r = this.levels[e.frag.level].details;
                                            r && this.loadFragment(e.frag, r, e.frag.start)
                                        }
                                    }, n.onHandlerDestroying = function() {
                                        this.stopLoad(), t.prototype.onHandlerDestroying.call(this)
                                    }, n.onHandlerDestroyed = function() {
                                        this.state = T.STOPPED, this.hls.off(l.Events.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, t.prototype.onHandlerDestroyed.call(this)
                                    }, n.loadKey = function(t, e) {
                                        this.log("Loading key for " + t.sn + " of [" + e.startSN + "-" + e.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level), this.state = T.KEY_LOADING, this.fragCurrent = t, this.hls.trigger(l.Events.KEY_LOADING, {
                                            frag: t
                                        })
                                    }, n.loadFragment = function(t, e, r) {
                                        this._loadFragForPlayback(t, e, r)
                                    }, n._loadFragForPlayback = function(t, e, r) {
                                        var i = this;
                                        this._doFragLoad(t, e, r, function(e) {
                                            if (i.fragContextChanged(t)) {
                                                i.warn("Fragment " + t.sn + (e.part ? " p: " + e.part.index : "") + " of level " + t.level + " was dropped during download."), i.fragmentTracker.removeFragment(t);
                                                return
                                            }
                                            t.stats.chunkCount++, i._handleFragmentLoadProgress(e)
                                        }).then(function(e) {
                                            if (e) {
                                                i.fragLoadError = 0;
                                                var r = i.state;
                                                if (i.fragContextChanged(t)) {
                                                    r !== T.FRAG_LOADING && r !== T.BACKTRACKING && (i.fragCurrent || r !== T.PARSING) || (i.fragmentTracker.removeFragment(t), i.state = T.IDLE);
                                                    return
                                                }
                                                if ("payload" in e && (i.log("Loaded fragment " + t.sn + " of level " + t.level), i.hls.trigger(l.Events.FRAG_LOADED, e), i.state === T.BACKTRACKING)) {
                                                    i.fragmentTracker.backtrack(t, e), i.resetFragmentLoading(t);
                                                    return
                                                }
                                                i._handleFragmentLoadComplete(e)
                                            }
                                        }).catch(function(e) {
                                            i.warn(e), i.resetFragmentLoading(t)
                                        })
                                    }, n.flushMainBuffer = function(t, e, r) {
                                        if (void 0 === r && (r = null), t - e) {
                                            var i = {
                                                startOffset: t,
                                                endOffset: e,
                                                type: r
                                            };
                                            this.fragLoadError = 0, this.hls.trigger(l.Events.BUFFER_FLUSHING, i)
                                        }
                                    }, n._loadInitSegment = function(t) {
                                        var e = this;
                                        this._doFragLoad(t).then(function(r) {
                                            if (!r || e.fragContextChanged(t) || !e.levels) throw Error("init load aborted");
                                            return r
                                        }).then(function(r) {
                                            var i = e.hls,
                                                n = r.payload,
                                                s = t.decryptdata;
                                            if (n && n.byteLength > 0 && s && s.key && s.iv && "AES-128" === s.method) {
                                                var a = self.performance.now();
                                                return e.decrypter.webCryptoDecrypt(new Uint8Array(n), s.key.buffer, s.iv.buffer).then(function(e) {
                                                    var n = self.performance.now();
                                                    return i.trigger(l.Events.FRAG_DECRYPTED, {
                                                        frag: t,
                                                        payload: e,
                                                        stats: {
                                                            tstart: a,
                                                            tdecrypt: n
                                                        }
                                                    }), r.payload = e, r
                                                })
                                            }
                                            return r
                                        }).then(function(r) {
                                            var i = e.fragCurrent,
                                                n = e.hls,
                                                s = e.levels;
                                            if (!s) throw Error("init load aborted, missing levels");
                                            console.assert(s[t.level].details, "Level details are defined when init segment is loaded");
                                            var a = t.stats;
                                            e.state = T.IDLE, e.fragLoadError = 0, t.data = new Uint8Array(r.payload), a.parsing.start = a.buffering.start = self.performance.now(), a.parsing.end = a.buffering.end = self.performance.now(), r.frag === i && n.trigger(l.Events.FRAG_BUFFERED, {
                                                stats: a,
                                                frag: i,
                                                part: null,
                                                id: t.type
                                            }), e.tick()
                                        }).catch(function(r) {
                                            e.warn(r), e.resetFragmentLoading(t)
                                        })
                                    }, n.fragContextChanged = function(t) {
                                        var e = this.fragCurrent;
                                        return !t || !e || t.level !== e.level || t.sn !== e.sn || t.urlId !== e.urlId
                                    }, n.fragBufferedComplete = function(t, e) {
                                        var r = this.mediaBuffer ? this.mediaBuffer : this.media;
                                        this.log("Buffered " + t.type + " sn: " + t.sn + (e ? " part: " + e.index : "") + " of " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + t.level + " " + m.default.toString(a.BufferHelper.getBuffered(r))), this.state = T.IDLE, this.tick()
                                    }, n._handleFragmentLoadComplete = function(t) {
                                        var e = this.transmuxer;
                                        if (e) {
                                            var r = t.frag,
                                                i = t.part,
                                                n = t.partsLoaded,
                                                s = !n || 0 === n.length || n.some(function(t) {
                                                    return !t
                                                }),
                                                a = new c.ChunkMetadata(r.level, r.sn, r.stats.chunkCount + 1, 0, i ? i.index : -1, !s);
                                            e.flush(a)
                                        }
                                    }, n._handleFragmentLoadProgress = function(t) {}, n._doFragLoad = function(t, e, r, n) {
                                        var s = this;
                                        if (void 0 === r && (r = null), !this.levels) throw Error("frag load aborted, missing levels");
                                        if (r = Math.max(t.start, r || 0), this.config.lowLatencyMode && e) {
                                            var a = e.partList;
                                            if (a && n) {
                                                r > t.end && e.fragmentHint && (t = e.fragmentHint);
                                                var o = this.getNextPart(a, t, r);
                                                if (o > -1) {
                                                    var u = a[o];
                                                    return this.log("Loading part sn: " + t.sn + " p: " + u.index + " cc: " + t.cc + " of playlist [" + e.startSN + "-" + e.endSN + "] parts [0-" + o + "-" + (a.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), this.nextLoadPosition = u.start + u.duration, this.state = T.FRAG_LOADING, this.hls.trigger(l.Events.FRAG_LOADING, {
                                                        frag: t,
                                                        part: a[o],
                                                        targetBufferTime: r
                                                    }), this.doFragPartsLoad(t, a, o, n).catch(function(t) {
                                                        return s.handleFragLoadError(t)
                                                    })
                                                }
                                                if (!t.url || this.loadedEndOfParts(a, r)) return Promise.resolve(null)
                                            }
                                        }
                                        return this.log("Loading fragment " + t.sn + " cc: " + t.cc + " " + (e ? "of [" + e.startSN + "-" + e.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + t.level + ", target: " + parseFloat(r.toFixed(3))), Object(i.isFiniteNumber)(t.sn) && !this.bitrateTest && (this.nextLoadPosition = t.start + t.duration), this.state = T.FRAG_LOADING, this.hls.trigger(l.Events.FRAG_LOADING, {
                                            frag: t,
                                            targetBufferTime: r
                                        }), this.fragmentLoader.load(t, n).catch(function(t) {
                                            return s.handleFragLoadError(t)
                                        })
                                    }, n.doFragPartsLoad = function(t, e, r, i) {
                                        var n = this;
                                        return new Promise(function(s, a) {
                                            var o = [];
                                            ! function r(u) {
                                                var c = e[u];
                                                n.fragmentLoader.loadPart(t, c, i).then(function(i) {
                                                    o[c.index] = i;
                                                    var a = i.part;
                                                    n.hls.trigger(l.Events.FRAG_LOADED, i);
                                                    var d = e[u + 1];
                                                    if (!d || d.fragment !== t) return s({
                                                        frag: t,
                                                        part: a,
                                                        partsLoaded: o
                                                    });
                                                    r(u + 1)
                                                }).catch(a)
                                            }(r)
                                        })
                                    }, n.handleFragLoadError = function(t) {
                                        var e = t.data;
                                        return e && e.details === u.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(e.frag, e.part) : this.hls.trigger(l.Events.ERROR, e), null
                                    }, n._handleTransmuxerFlush = function(t) {
                                        var e = this.getCurrentContext(t);
                                        if (!e || this.state !== T.PARSING) {
                                            this.fragCurrent || (this.state = T.IDLE);
                                            return
                                        }
                                        var r = e.frag,
                                            i = e.part,
                                            n = e.level,
                                            s = self.performance.now();
                                        r.stats.parsing.end = s, i && (i.stats.parsing.end = s), this.updateLevelTiming(r, i, n, t.partial)
                                    }, n.getCurrentContext = function(t) {
                                        var e = this.levels,
                                            r = t.level,
                                            i = t.sn,
                                            n = t.part;
                                        if (!e || !e[r]) return this.warn("Levels object was unset while buffering fragment " + i + " of level " + r + ". The current chunk will not be buffered."), null;
                                        var s = e[r],
                                            a = n > -1 ? Object(g.getPartWith)(s, i, n) : null,
                                            o = a ? a.fragment : Object(g.getFragmentWithSN)(s, i, this.fragCurrent);
                                        return o ? {
                                            frag: o,
                                            part: a,
                                            level: s
                                        } : null
                                    }, n.bufferFragmentData = function(t, e, r, i) {
                                        if (t && this.state === T.PARSING) {
                                            var n = t.data1,
                                                s = t.data2,
                                                a = n;
                                            if (n && s && (a = Object(d.appendUint8Array)(n, s)), a && a.length) {
                                                var o = {
                                                    type: t.type,
                                                    frag: e,
                                                    part: r,
                                                    chunkMeta: i,
                                                    parent: e.type,
                                                    data: a
                                                };
                                                this.hls.trigger(l.Events.BUFFER_APPENDING, o), t.dropped && t.independent && !r && this.flushBufferGap(e)
                                            }
                                        }
                                    }, n.flushBufferGap = function(t) {
                                        var e = this.media;
                                        if (e) {
                                            if (!a.BufferHelper.isBuffered(e, e.currentTime)) {
                                                this.flushMainBuffer(0, t.start);
                                                return
                                            }
                                            var r = e.currentTime,
                                                i = a.BufferHelper.bufferInfo(e, r, 0),
                                                n = t.duration,
                                                s = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * n),
                                                o = Math.max(Math.min(t.start - s, i.end - s), r + s);
                                            t.start - o > s && this.flushMainBuffer(o, t.start)
                                        }
                                    }, n.getFwdBufferInfo = function(t, e) {
                                        var r = this.config,
                                            n = this.getLoadPosition();
                                        if (!Object(i.isFiniteNumber)(n)) return null;
                                        var s = a.BufferHelper.bufferInfo(t, n, r.maxBufferHole);
                                        if (0 === s.len && void 0 !== s.nextStart) {
                                            var o = this.fragmentTracker.getBufferedFrag(n, e);
                                            if (o && s.nextStart < o.end) return a.BufferHelper.bufferInfo(t, n, Math.max(s.nextStart, r.maxBufferHole))
                                        }
                                        return s
                                    }, n.getMaxBufferLength = function(t) {
                                        var e = this.config;
                                        return Math.min(t ? Math.max(8 * e.maxBufferSize / t, e.maxBufferLength) : e.maxBufferLength, e.maxMaxBufferLength)
                                    }, n.reduceMaxBufferLength = function(t) {
                                        var e = this.config,
                                            r = t || e.maxBufferLength;
                                        return e.maxMaxBufferLength >= r && (e.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
                                    }, n.getNextFragment = function(t, e) {
                                        var r, i, n, s = e.fragments,
                                            a = s.length;
                                        if (!a) return null;
                                        var o = this.config,
                                            l = s[0].start;
                                        if (e.live) {
                                            var u = o.initialLiveManifestSize;
                                            if (a < u) return this.warn("Not enough fragments to start playback (have: " + a + ", need: " + u + ")"), null;
                                            e.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (n = this.getInitialLiveFragment(e, s), this.startPosition = n ? this.hls.liveSyncPosition || n.start : t)
                                        } else t <= l && (n = s[0]);
                                        if (!n) {
                                            var c = o.lowLatencyMode ? e.partEnd : e.fragmentEnd;
                                            n = this.getFragmentAtPosition(t, c, e)
                                        }
                                        return null === (r = n) || void 0 === r || !r.initSegment || null !== (i = n) && void 0 !== i && i.initSegment.data || this.bitrateTest || (n = n.initSegment), n
                                    }, n.getNextPart = function(t, e, r) {
                                        for (var i = -1, n = !1, s = !0, a = 0, o = t.length; a < o; a++) {
                                            var l = t[a];
                                            if (s = s && !l.independent, i > -1 && r < l.start) break;
                                            var u = l.loaded;
                                            !u && (n || l.independent || s) && l.fragment === e && (i = a), n = u
                                        }
                                        return i
                                    }, n.loadedEndOfParts = function(t, e) {
                                        var r = t[t.length - 1];
                                        return r && e > r.start && r.loaded
                                    }, n.getInitialLiveFragment = function(t, e) {
                                        var r = this.fragPrevious,
                                            i = null;
                                        if (r) {
                                            if (t.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r.programDateTime), i = Object(f.findFragmentByPDT)(e, r.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
                                                var n = r.sn + 1;
                                                if (n >= t.startSN && n <= t.endSN) {
                                                    var s = e[n - t.startSN];
                                                    r.cc === s.cc && (i = s, this.log("Live playlist, switching playlist, load frag with next SN: " + i.sn))
                                                }!i && (i = Object(f.findFragWithCC)(e, r.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + i.sn)
                                            }
                                        } else {
                                            var a = this.hls.liveSyncPosition;
                                            null !== a && (i = this.getFragmentAtPosition(a, this.bitrateTest ? t.fragmentEnd : t.edge, t))
                                        }
                                        return i
                                    }, n.getFragmentAtPosition = function(t, e, r) {
                                        var i, n = this.config,
                                            a = this.fragPrevious,
                                            o = r.fragments,
                                            l = r.endSN,
                                            u = r.fragmentHint,
                                            c = n.maxFragLookUpTolerance,
                                            d = !!(n.lowLatencyMode && r.partList && u);
                                        if (d && u && !this.bitrateTest && (o = o.concat(u), l = u.sn), i = t < e ? Object(f.findFragmentByPTS)(a, o, t, t > e - c ? 0 : c) : o[o.length - 1]) {
                                            var h = i.sn - r.startSN,
                                                g = a && i.level === a.level,
                                                v = o[h + 1];
                                            if (this.fragmentTracker.getState(i) === s.FragmentState.BACKTRACKED) {
                                                i = null;
                                                for (var p = h; o[p] && this.fragmentTracker.getState(o[p]) === s.FragmentState.BACKTRACKED;) i = a ? o[p--] : o[--p];
                                                i || (i = v)
                                            } else a && i.sn === a.sn && !d && g && (i.sn < l && this.fragmentTracker.getState(v) !== s.FragmentState.OK ? (this.log("SN " + i.sn + " just loaded, load next one: " + v.sn), i = v) : i = null)
                                        }
                                        return i
                                    }, n.synchronizeToLiveEdge = function(t) {
                                        var e = this.config,
                                            r = this.media;
                                        if (r) {
                                            var i = this.hls.liveSyncPosition,
                                                n = r.currentTime,
                                                s = t.fragments[0].start,
                                                a = t.edge,
                                                o = n >= s - e.maxFragLookUpTolerance && n <= a;
                                            if (null !== i && r.duration > i && (n < i || !o)) {
                                                var l = void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : e.liveMaxLatencyDurationCount * t.targetduration;
                                                (!o && r.readyState < 4 || n < a - l) && (this.loadedmetadata || (this.nextLoadPosition = i), r.readyState && (this.warn("Playback: " + n.toFixed(3) + " is located too far from the end of live sliding playlist: " + a + ", reset currentTime to : " + i.toFixed(3)), r.currentTime = i))
                                            }
                                        }
                                    }, n.alignPlaylists = function(t, e) {
                                        var r = this.levels,
                                            n = this.levelLastLoaded,
                                            s = this.fragPrevious,
                                            a = null !== n ? r[n] : null,
                                            o = t.fragments.length;
                                        if (!o) return this.warn("No fragments in live playlist"), 0;
                                        var l = t.fragments[0].start,
                                            u = t.alignedSliding && Object(i.isFiniteNumber)(l);
                                        if (!e || !u && !l) {
                                            Object(h.alignStream)(s, a, t);
                                            var c = t.fragments[0].start;
                                            return this.log("Live playlist sliding: " + c.toFixed(2) + " start-sn: " + (e ? e.startSN : "na") + "->" + t.startSN + " prev-sn: " + (s ? s.sn : "na") + " fragments: " + o), c
                                        }
                                        return l
                                    }, n.waitForCdnTuneIn = function(t) {
                                        return t.live && t.canBlockReload && t.tuneInGoal > Math.max(t.partHoldBack, 3 * t.partTarget)
                                    }, n.setStartPosition = function(t, e) {
                                        var r = this.startPosition;
                                        if (r < e && (r = -1), -1 === r || -1 === this.lastCurrentTime) {
                                            var n = t.startTimeOffset;
                                            Object(i.isFiniteNumber)(n) ? (r = e + n, n < 0 && (r += t.totalduration), r = Math.min(Math.max(e, r), e + t.totalduration), this.log("Start time offset " + n + " found in playlist, adjust startPosition to " + r), this.startPosition = r) : t.live ? r = this.hls.liveSyncPosition || e : this.startPosition = r = 0, this.lastCurrentTime = r
                                        }
                                        this.nextLoadPosition = r
                                    }, n.getLoadPosition = function() {
                                        var t = this.media,
                                            e = 0;
                                        return this.loadedmetadata && t ? e = t.currentTime : this.nextLoadPosition && (e = this.nextLoadPosition), e
                                    }, n.handleFragLoadAborted = function(t, e) {
                                        this.transmuxer && "initSegment" !== t.sn && t.stats.aborted && (this.warn("Fragment " + t.sn + (e ? " part" + e.index : "") + " of level " + t.level + " was aborted"), this.resetFragmentLoading(t))
                                    }, n.resetFragmentLoading = function(t) {
                                        this.fragCurrent && this.fragContextChanged(t) || (this.state = T.IDLE)
                                    }, n.onFragmentOrKeyLoadError = function(t, e) {
                                        if (!e.fatal) {
                                            var r = e.frag;
                                            if (r && r.type === t) {
                                                var i = this.fragCurrent;
                                                console.assert(i && r.sn === i.sn && r.level === i.level && r.urlId === i.urlId, "Frag load error must match current frag to retry");
                                                var n = this.config;
                                                if (this.fragLoadError + 1 <= n.fragLoadingMaxRetry) {
                                                    if (this.resetLiveStartWhenNotLoaded(r.level)) return;
                                                    var s = Math.min(Math.pow(2, this.fragLoadError) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
                                                    this.warn("Fragment " + r.sn + " of " + t + " " + r.level + " failed to load, retrying in " + s + "ms"), this.retryDate = self.performance.now() + s, this.fragLoadError++, this.state = T.FRAG_LOADING_WAITING_RETRY
                                                } else e.levelRetry ? (t === y.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = T.IDLE) : (o.logger.error(e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.hls.stopLoad(), this.state = T.ERROR)
                                            }
                                        }
                                    }, n.afterBufferFlushed = function(t, e, r) {
                                        if (t) {
                                            var i = a.BufferHelper.getBuffered(t);
                                            this.fragmentTracker.detectEvictedFragments(e, i, r), this.state === T.ENDED && this.resetLoadingState()
                                        }
                                    }, n.resetLoadingState = function() {
                                        this.fragCurrent = null, this.fragPrevious = null, this.state = T.IDLE
                                    }, n.resetLiveStartWhenNotLoaded = function(t) {
                                        if (!this.loadedmetadata) {
                                            this.startFragRequested = !1;
                                            var e = this.levels ? this.levels[t].details : null;
                                            if (null != e && e.live) return this.startPosition = -1, this.setStartPosition(e, 0), this.resetLoadingState(), !0;
                                            this.nextLoadPosition = this.startPosition
                                        }
                                        return !1
                                    }, n.updateLevelTiming = function(t, e, r, i) {
                                        var n = this,
                                            s = r.details;
                                        console.assert(!!s, "level.details must be defined"), Object.keys(t.elementaryStreams).reduce(function(e, a) {
                                            var o = t.elementaryStreams[a];
                                            if (o) {
                                                var u = o.endPTS - o.startPTS;
                                                if (u <= 0) return n.warn("Could not parse fragment " + t.sn + " " + a + " duration reliably (" + u + ") resetting transmuxer to fallback to playlist timing"), n.resetTransmuxer(), e || !1;
                                                var c = i ? 0 : Object(g.updateFragPTSDTS)(s, t, o.startPTS, o.endPTS, o.startDTS, o.endDTS);
                                                return n.hls.trigger(l.Events.LEVEL_PTS_UPDATED, {
                                                    details: s,
                                                    level: r,
                                                    drift: c,
                                                    type: a,
                                                    frag: t,
                                                    start: o.startPTS,
                                                    end: o.endPTS
                                                }), !0
                                            }
                                            return e
                                        }, !1) ? (this.state = T.PARSED, this.hls.trigger(l.Events.FRAG_PARSED, {
                                            frag: t,
                                            part: e
                                        })) : this.resetLoadingState()
                                    }, n.resetTransmuxer = function() {
                                        this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
                                    }, r = [{
                                        key: "state",
                                        get: function() {
                                            return this._state
                                        },
                                        set: function(t) {
                                            var e = this._state;
                                            e !== t && (this._state = t, this.log(e + "->" + t))
                                        }
                                    }],
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, r), e
                            }(n.default)
                    },
                    "./src/controller/buffer-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return f
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/events.ts"),
                            s = r("./src/utils/logger.ts"),
                            a = r("./src/errors.ts"),
                            o = r("./src/utils/buffer-helper.ts"),
                            l = r("./src/utils/mediasource-helper.ts"),
                            u = r("./src/loader/fragment.ts"),
                            c = r("./src/controller/buffer-operation-queue.ts"),
                            d = Object(l.getMediaSource)(),
                            h = /([ha]vc.)(?:\.[^.,]+)+/,
                            f = function() {
                                function t(t) {
                                    var e = this;
                                    this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
                                        var t = e.hls,
                                            r = e.media,
                                            i = e.mediaSource;
                                        s.logger.log("[buffer-controller]: Media source opened"), r && (e.updateMediaElementDuration(), t.trigger(n.Events.MEDIA_ATTACHED, {
                                            media: r
                                        })), i && i.removeEventListener("sourceopen", e._onMediaSourceOpen), e.checkPendingTracks()
                                    }, this._onMediaSourceClose = function() {
                                        s.logger.log("[buffer-controller]: Media source closed")
                                    }, this._onMediaSourceEnded = function() {
                                        s.logger.log("[buffer-controller]: Media source ended")
                                    }, this.hls = t, this._initSourceBuffer(), this.registerListeners()
                                }
                                var e = t.prototype;
                                return e.hasSourceTypes = function() {
                                    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
                                }, e.destroy = function() {
                                    this.unregisterListeners(), this.details = null
                                }, e.registerListeners = function() {
                                    var t = this.hls;
                                    t.on(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(n.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(n.Events.BUFFER_RESET, this.onBufferReset, this), t.on(n.Events.BUFFER_APPENDING, this.onBufferAppending, this), t.on(n.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.on(n.Events.BUFFER_EOS, this.onBufferEos, this), t.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(n.Events.FRAG_PARSED, this.onFragParsed, this), t.on(n.Events.FRAG_CHANGED, this.onFragChanged, this)
                                }, e.unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(n.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(n.Events.BUFFER_RESET, this.onBufferReset, this), t.off(n.Events.BUFFER_APPENDING, this.onBufferAppending, this), t.off(n.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.off(n.Events.BUFFER_EOS, this.onBufferEos, this), t.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(n.Events.FRAG_PARSED, this.onFragParsed, this), t.off(n.Events.FRAG_CHANGED, this.onFragChanged, this)
                                }, e._initSourceBuffer = function() {
                                    this.sourceBuffer = {}, this.operationQueue = new c.default(this.sourceBuffer), this.listeners = {
                                        audio: [],
                                        video: [],
                                        audiovideo: []
                                    }
                                }, e.onManifestParsed = function(t, e) {
                                    var r = 2;
                                    (!e.audio || e.video) && e.altAudio || (r = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r, this.details = null, s.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                                }, e.onMediaAttaching = function(t, e) {
                                    var r = this.media = e.media;
                                    if (r && d) {
                                        var i = this.mediaSource = new d;
                                        i.addEventListener("sourceopen", this._onMediaSourceOpen), i.addEventListener("sourceended", this._onMediaSourceEnded), i.addEventListener("sourceclose", this._onMediaSourceClose), r.src = self.URL.createObjectURL(i), this._objectUrl = r.src
                                    }
                                }, e.onMediaDetaching = function() {
                                    var t = this.media,
                                        e = this.mediaSource,
                                        r = this._objectUrl;
                                    if (e) {
                                        if (s.logger.log("[buffer-controller]: media source detaching"), "open" === e.readyState) try {
                                            e.endOfStream()
                                        } catch (t) {
                                            s.logger.warn("[buffer-controller]: onMediaDetaching: " + t.message + " while calling endOfStream")
                                        }
                                        this.onBufferReset(), e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), t && (r && self.URL.revokeObjectURL(r), t.src === r ? (t.removeAttribute("src"), t.load()) : s.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
                                    }
                                    this.hls.trigger(n.Events.MEDIA_DETACHED, void 0)
                                }, e.onBufferReset = function() {
                                    var t = this;
                                    this.getSourceBufferTypes().forEach(function(e) {
                                        var r = t.sourceBuffer[e];
                                        try {
                                            r && (t.removeBufferListeners(e), t.mediaSource && t.mediaSource.removeSourceBuffer(r), t.sourceBuffer[e] = void 0)
                                        } catch (t) {
                                            s.logger.warn("[buffer-controller]: Failed to reset the " + e + " buffer", t)
                                        }
                                    }), this._initSourceBuffer()
                                }, e.onBufferCodecs = function(t, e) {
                                    var r = this,
                                        i = this.getSourceBufferTypes().length;
                                    Object.keys(e).forEach(function(t) {
                                        if (i) {
                                            var n = r.tracks[t];
                                            if (n && "function" == typeof n.buffer.changeType) {
                                                var s = e[t],
                                                    a = s.codec,
                                                    o = s.levelCodec,
                                                    l = s.container;
                                                (n.levelCodec || n.codec).replace(h, "$1") !== (o || a).replace(h, "$1") && r.appendChangeType(t, l + ";codecs=" + (o || a))
                                            }
                                        } else r.pendingTracks[t] = e[t]
                                    }), !i && (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                                }, e.appendChangeType = function(t, e) {
                                    var r = this,
                                        i = this.operationQueue;
                                    i.append({
                                        execute: function() {
                                            var n = r.sourceBuffer[t];
                                            n && (s.logger.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + e), n.changeType(e)), i.shiftAndExecuteNext(t)
                                        },
                                        onStart: function() {},
                                        onComplete: function() {},
                                        onError: function(e) {
                                            s.logger.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", e)
                                        }
                                    }, t)
                                }, e.onBufferAppending = function(t, e) {
                                    var r = this,
                                        i = this.hls,
                                        l = this.operationQueue,
                                        u = this.tracks,
                                        c = e.data,
                                        d = e.type,
                                        h = e.frag,
                                        f = e.part,
                                        g = e.chunkMeta,
                                        v = g.buffering[d],
                                        p = self.performance.now();
                                    v.start = p;
                                    var m = h.stats.buffering,
                                        y = f ? f.stats.buffering : null;
                                    0 === m.start && (m.start = p), y && 0 === y.start && (y.start = p);
                                    var E = u.audio,
                                        T = "audio" === d && 1 === g.id && (null == E ? void 0 : E.container) === "audio/mpeg";
                                    l.append({
                                        execute: function() {
                                            if (v.executeStart = self.performance.now(), T) {
                                                var t = r.sourceBuffer[d];
                                                if (t) {
                                                    var e = h.start - t.timestampOffset;
                                                    Math.abs(e) >= .1 && (s.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + h.start + " (delta: " + e + ") sn: " + h.sn + ")"), t.timestampOffset = h.start)
                                                }
                                            }
                                            r.appendExecutor(c, d)
                                        },
                                        onStart: function() {},
                                        onComplete: function() {
                                            var t = self.performance.now();
                                            v.executeEnd = v.end = t, 0 === m.first && (m.first = t), y && 0 === y.first && (y.first = t);
                                            var e = r.sourceBuffer,
                                                i = {};
                                            for (var s in e) i[s] = o.BufferHelper.getBuffered(e[s]);
                                            r.appendError = 0, r.hls.trigger(n.Events.BUFFER_APPENDED, {
                                                type: d,
                                                frag: h,
                                                part: f,
                                                chunkMeta: g,
                                                parent: h.type,
                                                timeRanges: i
                                            })
                                        },
                                        onError: function(t) {
                                            s.logger.error("[buffer-controller]: Error encountered while trying to append to the " + d + " SourceBuffer", t);
                                            var e = {
                                                type: a.ErrorTypes.MEDIA_ERROR,
                                                parent: h.type,
                                                details: a.ErrorDetails.BUFFER_APPEND_ERROR,
                                                err: t,
                                                fatal: !1
                                            };
                                            t.code === DOMException.QUOTA_EXCEEDED_ERR ? e.details = a.ErrorDetails.BUFFER_FULL_ERROR : (r.appendError++, e.details = a.ErrorDetails.BUFFER_APPEND_ERROR, r.appendError > i.config.appendErrorMaxRetry && (s.logger.error("[buffer-controller]: Failed " + i.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), e.fatal = !0)), i.trigger(n.Events.ERROR, e)
                                        }
                                    }, d)
                                }, e.onBufferFlushing = function(t, e) {
                                    var r = this,
                                        i = this.operationQueue,
                                        a = function(t) {
                                            return {
                                                execute: r.removeExecutor.bind(r, t, e.startOffset, e.endOffset),
                                                onStart: function() {},
                                                onComplete: function() {
                                                    r.hls.trigger(n.Events.BUFFER_FLUSHED, {
                                                        type: t
                                                    })
                                                },
                                                onError: function(e) {
                                                    s.logger.warn("[buffer-controller]: Failed to remove from " + t + " SourceBuffer", e)
                                                }
                                            }
                                        };
                                    e.type ? i.append(a(e.type), e.type) : this.getSourceBufferTypes().forEach(function(t) {
                                        i.append(a(t), t)
                                    })
                                }, e.onFragParsed = function(t, e) {
                                    var r = this,
                                        i = e.frag,
                                        a = e.part,
                                        o = [],
                                        l = a ? a.elementaryStreams : i.elementaryStreams;
                                    l[u.ElementaryStreamTypes.AUDIOVIDEO] ? o.push("audiovideo") : (l[u.ElementaryStreamTypes.AUDIO] && o.push("audio"), l[u.ElementaryStreamTypes.VIDEO] && o.push("video")), 0 === o.length && s.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + i.type + " level: " + i.level + " sn: " + i.sn), this.blockBuffers(function() {
                                        var t = self.performance.now();
                                        i.stats.buffering.end = t, a && (a.stats.buffering.end = t);
                                        var e = a ? a.stats : i.stats;
                                        r.hls.trigger(n.Events.FRAG_BUFFERED, {
                                            frag: i,
                                            part: a,
                                            stats: e,
                                            id: i.type
                                        })
                                    }, o)
                                }, e.onFragChanged = function(t, e) {
                                    this.flushBackBuffer()
                                }, e.onBufferEos = function(t, e) {
                                    var r = this;
                                    this.getSourceBufferTypes().reduce(function(t, i) {
                                        var n = r.sourceBuffer[i];
                                        return e.type && e.type !== i || !n || n.ended || (n.ended = !0, s.logger.log("[buffer-controller]: " + i + " sourceBuffer now EOS")), t && !!(!n || n.ended)
                                    }, !0) && this.blockBuffers(function() {
                                        var t = r.mediaSource;
                                        t && "open" === t.readyState && t.endOfStream()
                                    })
                                }, e.onLevelUpdated = function(t, e) {
                                    var r = e.details;
                                    r.fragments.length && (this.details = r, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
                                }, e.flushBackBuffer = function() {
                                    var t = this.hls,
                                        e = this.details,
                                        r = this.media,
                                        s = this.sourceBuffer;
                                    if (r && null !== e) {
                                        var a = this.getSourceBufferTypes();
                                        if (a.length) {
                                            var l = e.live && null !== t.config.liveBackBufferLength ? t.config.liveBackBufferLength : t.config.backBufferLength;
                                            if (Object(i.isFiniteNumber)(l) && !(l < 0)) {
                                                var u = r.currentTime,
                                                    c = e.levelTargetDuration,
                                                    d = Math.max(l, c),
                                                    h = Math.floor(u / c) * c - d;
                                                a.forEach(function(r) {
                                                    var i = s[r];
                                                    if (i) {
                                                        var a = o.BufferHelper.getBuffered(i);
                                                        a.length > 0 && h > a.start(0) && (t.trigger(n.Events.BACK_BUFFER_REACHED, {
                                                            bufferEnd: h
                                                        }), e.live && t.trigger(n.Events.LIVE_BACK_BUFFER_REACHED, {
                                                            bufferEnd: h
                                                        }), t.trigger(n.Events.BUFFER_FLUSHING, {
                                                            startOffset: 0,
                                                            endOffset: h,
                                                            type: r
                                                        }))
                                                    }
                                                })
                                            }
                                        }
                                    }
                                }, e.updateMediaElementDuration = function() {
                                    if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
                                        var t = this.details,
                                            e = this.hls,
                                            r = this.media,
                                            n = this.mediaSource,
                                            a = t.fragments[0].start + t.totalduration,
                                            o = r.duration,
                                            l = Object(i.isFiniteNumber)(n.duration) ? n.duration : 0;
                                        t.live && e.config.liveDurationInfinity ? (s.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), n.duration = 1 / 0, this.updateSeekableRange(t)) : (a > l && a > o || !Object(i.isFiniteNumber)(o)) && (s.logger.log("[buffer-controller]: Updating Media Source duration to " + a.toFixed(3)), n.duration = a)
                                    }
                                }, e.updateSeekableRange = function(t) {
                                    var e = this.mediaSource,
                                        r = t.fragments;
                                    if (r.length && t.live && null != e && e.setLiveSeekableRange) {
                                        var i = Math.max(0, r[0].start),
                                            n = Math.max(i, i + t.totalduration);
                                        e.setLiveSeekableRange(i, n)
                                    }
                                }, e.checkPendingTracks = function() {
                                    var t = this.bufferCodecEventsExpected,
                                        e = this.operationQueue,
                                        r = this.pendingTracks,
                                        i = Object.keys(r).length;
                                    if (i && !t || 2 === i) {
                                        this.createSourceBuffers(r), this.pendingTracks = {};
                                        var s = this.getSourceBufferTypes();
                                        if (0 === s.length) {
                                            this.hls.trigger(n.Events.ERROR, {
                                                type: a.ErrorTypes.MEDIA_ERROR,
                                                details: a.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
                                                fatal: !0,
                                                reason: "could not create source buffer for media codec(s)"
                                            });
                                            return
                                        }
                                        s.forEach(function(t) {
                                            e.executeNext(t)
                                        })
                                    }
                                }, e.createSourceBuffers = function(t) {
                                    var e = this.sourceBuffer,
                                        r = this.mediaSource;
                                    if (!r) throw Error("createSourceBuffers called when mediaSource was null");
                                    var i = 0;
                                    for (var o in t)
                                        if (!e[o]) {
                                            var l = t[o];
                                            if (!l) throw Error("source buffer exists for track " + o + ", however track does not");
                                            var u = l.levelCodec || l.codec,
                                                c = l.container + ";codecs=" + u;
                                            s.logger.log("[buffer-controller]: creating sourceBuffer(" + c + ")");
                                            try {
                                                var d = e[o] = r.addSourceBuffer(c);
                                                this.addBufferListener(o, "updatestart", this._onSBUpdateStart), this.addBufferListener(o, "updateend", this._onSBUpdateEnd), this.addBufferListener(o, "error", this._onSBUpdateError), this.tracks[o] = {
                                                    buffer: d,
                                                    codec: u,
                                                    container: l.container,
                                                    levelCodec: l.levelCodec,
                                                    id: l.id
                                                }, i++
                                            } catch (t) {
                                                s.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + t.message), this.hls.trigger(n.Events.ERROR, {
                                                    type: a.ErrorTypes.MEDIA_ERROR,
                                                    details: a.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                                    fatal: !1,
                                                    error: t,
                                                    mimeType: c
                                                })
                                            }
                                        }
                                    i && this.hls.trigger(n.Events.BUFFER_CREATED, {
                                        tracks: this.tracks
                                    })
                                }, e._onSBUpdateStart = function(t) {
                                    this.operationQueue.current(t).onStart()
                                }, e._onSBUpdateEnd = function(t) {
                                    var e = this.operationQueue;
                                    e.current(t).onComplete(), e.shiftAndExecuteNext(t)
                                }, e._onSBUpdateError = function(t, e) {
                                    s.logger.error("[buffer-controller]: " + t + " SourceBuffer error", e), this.hls.trigger(n.Events.ERROR, {
                                        type: a.ErrorTypes.MEDIA_ERROR,
                                        details: a.ErrorDetails.BUFFER_APPENDING_ERROR,
                                        fatal: !1
                                    });
                                    var r = this.operationQueue.current(t);
                                    r && r.onError(e)
                                }, e.removeExecutor = function(t, e, r) {
                                    var n = this.media,
                                        a = this.mediaSource,
                                        o = this.operationQueue,
                                        l = this.sourceBuffer[t];
                                    if (!n || !a || !l) {
                                        s.logger.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), o.shiftAndExecuteNext(t);
                                        return
                                    }
                                    var u = Object(i.isFiniteNumber)(n.duration) ? n.duration : 1 / 0,
                                        c = Object(i.isFiniteNumber)(a.duration) ? a.duration : 1 / 0,
                                        d = Math.max(0, e),
                                        h = Math.min(r, u, c);
                                    h > d ? (s.logger.log("[buffer-controller]: Removing [" + d + "," + h + "] from the " + t + " SourceBuffer"), console.assert(!l.updating, t + " sourceBuffer must not be updating"), l.remove(d, h)) : o.shiftAndExecuteNext(t)
                                }, e.appendExecutor = function(t, e) {
                                    var r = this.operationQueue,
                                        i = this.sourceBuffer[e];
                                    if (!i) {
                                        s.logger.warn("[buffer-controller]: Attempting to append to the " + e + " SourceBuffer, but it does not exist"), r.shiftAndExecuteNext(e);
                                        return
                                    }
                                    i.ended = !1, console.assert(!i.updating, e + " sourceBuffer must not be updating"), i.appendBuffer(t)
                                }, e.blockBuffers = function(t, e) {
                                    var r = this;
                                    if (void 0 === e && (e = this.getSourceBufferTypes()), !e.length) {
                                        s.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), Promise.resolve(t);
                                        return
                                    }
                                    var i = this.operationQueue;
                                    Promise.all(e.map(function(t) {
                                        return i.appendBlocker(t)
                                    })).then(function() {
                                        t(), e.forEach(function(t) {
                                            var e = r.sourceBuffer[t];
                                            e && e.updating || i.shiftAndExecuteNext(t)
                                        })
                                    })
                                }, e.getSourceBufferTypes = function() {
                                    return Object.keys(this.sourceBuffer)
                                }, e.addBufferListener = function(t, e, r) {
                                    var i = this.sourceBuffer[t];
                                    if (i) {
                                        var n = r.bind(this, t);
                                        this.listeners[t].push({
                                            event: e,
                                            listener: n
                                        }), i.addEventListener(e, n)
                                    }
                                }, e.removeBufferListeners = function(t) {
                                    var e = this.sourceBuffer[t];
                                    e && this.listeners[t].forEach(function(t) {
                                        e.removeEventListener(t.event, t.listener)
                                    })
                                }, t
                            }()
                    },
                    "./src/controller/buffer-operation-queue.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return n
                        });
                        var i = r("./src/utils/logger.ts"),
                            n = function() {
                                function t(t) {
                                    this.buffers = void 0, this.queues = {
                                        video: [],
                                        audio: [],
                                        audiovideo: []
                                    }, this.buffers = t
                                }
                                var e = t.prototype;
                                return e.append = function(t, e) {
                                    var r = this.queues[e];
                                    r.push(t), 1 === r.length && this.buffers[e] && this.executeNext(e)
                                }, e.insertAbort = function(t, e) {
                                    this.queues[e].unshift(t), this.executeNext(e)
                                }, e.appendBlocker = function(t) {
                                    var e, r = new Promise(function(t) {
                                            e = t
                                        }),
                                        i = {
                                            execute: e,
                                            onStart: function() {},
                                            onComplete: function() {},
                                            onError: function() {}
                                        };
                                    return this.append(i, t), r
                                }, e.executeNext = function(t) {
                                    var e = this.buffers,
                                        r = this.queues,
                                        n = e[t],
                                        s = r[t];
                                    if (s.length) {
                                        var a = s[0];
                                        try {
                                            a.execute()
                                        } catch (e) {
                                            i.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), a.onError(e), n && n.updating || (s.shift(), this.executeNext(t))
                                        }
                                    }
                                }, e.shiftAndExecuteNext = function(t) {
                                    this.queues[t].shift(), this.executeNext(t)
                                }, e.current = function(t) {
                                    return this.queues[t][0]
                                }, t
                            }()
                    },
                    "./src/controller/cap-level-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/events.ts");

                        function n(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        var s = function() {
                            function t(t) {
                                this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = t, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
                            }
                            var e, r, s = t.prototype;
                            return s.setStreamController = function(t) {
                                this.streamController = t
                            }, s.destroy = function() {
                                this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
                            }, s.registerListeners = function() {
                                var t = this.hls;
                                t.on(i.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.on(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(i.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
                            }, s.unregisterListener = function() {
                                var t = this.hls;
                                t.off(i.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), t.off(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(i.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
                            }, s.onFpsDropLevelCapping = function(e, r) {
                                t.isLevelAllowed(r.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(r.droppedLevel)
                            }, s.onMediaAttaching = function(t, e) {
                                this.media = e.media instanceof HTMLVideoElement ? e.media : null
                            }, s.onManifestParsed = function(t, e) {
                                var r = this.hls;
                                this.restrictedLevels = [], this.firstLevel = e.firstLevel, r.config.capLevelToPlayerSize && e.video && this.startCapping()
                            }, s.onBufferCodecs = function(t, e) {
                                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                            }, s.onMediaDetaching = function() {
                                this.stopCapping()
                            }, s.detectPlayerSize = function() {
                                if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
                                    var t = this.hls.levels;
                                    if (t.length) {
                                        var e = this.hls;
                                        e.autoLevelCapping = this.getMaxLevel(t.length - 1), e.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
                                    }
                                }
                            }, s.getMaxLevel = function(e) {
                                var r = this,
                                    i = this.hls.levels;
                                if (!i.length) return -1;
                                var n = i.filter(function(i, n) {
                                    return t.isLevelAllowed(n, r.restrictedLevels) && n <= e
                                });
                                return this.clientRect = null, t.getMaxLevelByMediaSize(n, this.mediaWidth, this.mediaHeight)
                            }, s.startCapping = function() {
                                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                            }, s.stopCapping = function() {
                                this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
                            }, s.getDimensions = function() {
                                if (this.clientRect) return this.clientRect;
                                var t = this.media,
                                    e = {
                                        width: 0,
                                        height: 0
                                    };
                                if (t) {
                                    var r = t.getBoundingClientRect();
                                    e.width = r.width, e.height = r.height, e.width || e.height || (e.width = r.right - r.left || t.width || 0, e.height = r.bottom - r.top || t.height || 0)
                                }
                                return this.clientRect = e, e
                            }, t.isLevelAllowed = function(t, e) {
                                return void 0 === e && (e = []), -1 === e.indexOf(t)
                            }, t.getMaxLevelByMediaSize = function(t, e, r) {
                                if (!t || !t.length) return -1;
                                for (var i = t.length - 1, n = 0; n < t.length; n += 1) {
                                    var s, a = t[n];
                                    if ((a.width >= e || a.height >= r) && (!(s = t[n + 1]) || a.width !== s.width || a.height !== s.height)) {
                                        i = n;
                                        break
                                    }
                                }
                                return i
                            }, e = [{
                                key: "mediaWidth",
                                get: function() {
                                    return this.getDimensions().width * t.contentScaleFactor
                                }
                            }, {
                                key: "mediaHeight",
                                get: function() {
                                    return this.getDimensions().height * t.contentScaleFactor
                                }
                            }], r = [{
                                key: "contentScaleFactor",
                                get: function() {
                                    var t = 1;
                                    try {
                                        t = self.devicePixelRatio
                                    } catch (t) {}
                                    return t
                                }
                            }], e && n(t.prototype, e), r && n(t, r), t
                        }();
                        e.default = s
                    },
                    "./src/controller/cmcd-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return h
                        });
                        var i = r("./src/events.ts"),
                            n = r("./src/types/cmcd.ts"),
                            s = r("./src/utils/buffer-helper.ts"),
                            a = r("./src/utils/logger.ts");

                        function o(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }

                        function l(t, e, r) {
                            return e && o(t.prototype, e), r && o(t, r), t
                        }

                        function u(t, e) {
                            var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                            if (r) return (r = r.call(t)).next.bind(r);
                            if (Array.isArray(t) || (r = function(t, e) {
                                    if (t) {
                                        if ("string" == typeof t) return c(t, void 0);
                                        var r = Object.prototype.toString.call(t).slice(8, -1);
                                        if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, void 0)
                                    }
                                }(t)) || e && t && "number" == typeof t.length) {
                                r && (t = r);
                                var i = 0;
                                return function() {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                }
                            }
                            throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }

                        function c(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, i = Array(e); r < e; r++) i[r] = t[r];
                            return i
                        }

                        function d() {
                            return (d = Object.assign || function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                }
                                return t
                            }).apply(this, arguments)
                        }
                        var h = function() {
                            function t(e) {
                                var r = this;
                                this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
                                    r.initialized && (r.starved = !0), r.buffering = !0
                                }, this.onPlaying = function() {
                                    r.initialized || (r.initialized = !0), r.buffering = !1
                                }, this.applyPlaylistData = function(t) {
                                    try {
                                        r.apply(t, {
                                            ot: n.CMCDObjectType.MANIFEST,
                                            su: !r.initialized
                                        })
                                    } catch (t) {
                                        a.logger.warn("Could not generate manifest CMCD data.", t)
                                    }
                                }, this.applyFragmentData = function(t) {
                                    try {
                                        var e = t.frag,
                                            i = r.hls.levels[e.level],
                                            s = r.getObjectType(e),
                                            o = {
                                                d: 1e3 * e.duration,
                                                ot: s
                                            };
                                        (s === n.CMCDObjectType.VIDEO || s === n.CMCDObjectType.AUDIO || s == n.CMCDObjectType.MUXED) && (o.br = i.bitrate / 1e3, o.tb = r.getTopBandwidth(s) / 1e3, o.bl = r.getBufferLength(s)), r.apply(t, o)
                                    } catch (t) {
                                        a.logger.warn("Could not generate segment CMCD data.", t)
                                    }
                                }, this.hls = e;
                                var i = this.config = e.config,
                                    s = i.cmcd;
                                null != s && (i.pLoader = this.createPlaylistLoader(), i.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || t.uuid(), this.cid = s.contentId, this.useHeaders = !0 === s.useHeaders, this.registerListeners())
                            }
                            var e = t.prototype;
                            return e.registerListeners = function() {
                                var t = this.hls;
                                t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(i.Events.MEDIA_DETACHED, this.onMediaDetached, this), t.on(i.Events.BUFFER_CREATED, this.onBufferCreated, this)
                            }, e.unregisterListeners = function() {
                                var t = this.hls;
                                t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(i.Events.MEDIA_DETACHED, this.onMediaDetached, this), t.off(i.Events.BUFFER_CREATED, this.onBufferCreated, this), this.onMediaDetached()
                            }, e.destroy = function() {
                                this.unregisterListeners(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
                            }, e.onMediaAttached = function(t, e) {
                                this.media = e.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
                            }, e.onMediaDetached = function() {
                                this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
                            }, e.onBufferCreated = function(t, e) {
                                var r, i;
                                this.audioBuffer = null === (r = e.tracks.audio) || void 0 === r ? void 0 : r.buffer, this.videoBuffer = null === (i = e.tracks.video) || void 0 === i ? void 0 : i.buffer
                            }, e.createData = function() {
                                var t;
                                return {
                                    v: n.CMCDVersion,
                                    sf: n.CMCDStreamingFormat.HLS,
                                    sid: this.sid,
                                    cid: this.cid,
                                    pr: null === (t = this.media) || void 0 === t ? void 0 : t.playbackRate,
                                    mtp: this.hls.bandwidthEstimate / 1e3
                                }
                            }, e.apply = function(e, r) {
                                void 0 === r && (r = {}), d(r, this.createData());
                                var i = r.ot === n.CMCDObjectType.INIT || r.ot === n.CMCDObjectType.VIDEO || r.ot === n.CMCDObjectType.MUXED;
                                if (this.starved && i && (r.bs = !0, r.su = !0, this.starved = !1), null == r.su && (r.su = this.buffering), this.useHeaders) {
                                    var s = t.toHeaders(r);
                                    if (!Object.keys(s).length) return;
                                    e.headers || (e.headers = {}), d(e.headers, s)
                                } else {
                                    var a = t.toQuery(r);
                                    if (!a) return;
                                    e.url = t.appendQueryToUri(e.url, a)
                                }
                            }, e.getObjectType = function(t) {
                                var e = t.type;
                                return "subtitle" === e ? n.CMCDObjectType.TIMED_TEXT : "initSegment" === t.sn ? n.CMCDObjectType.INIT : "audio" === e ? n.CMCDObjectType.AUDIO : "main" === e ? this.hls.audioTracks.length ? n.CMCDObjectType.VIDEO : n.CMCDObjectType.MUXED : void 0
                            }, e.getTopBandwidth = function(t) {
                                var e = 0,
                                    r = this.hls;
                                if (t === n.CMCDObjectType.AUDIO) a = r.audioTracks;
                                else {
                                    var i = r.maxAutoLevel,
                                        s = i > -1 ? i + 1 : r.levels.length;
                                    a = r.levels.slice(0, s)
                                }
                                for (var a, o, l = u(a); !(o = l()).done;) {
                                    var c = o.value;
                                    c.bitrate > e && (e = c.bitrate)
                                }
                                return e > 0 ? e : NaN
                            }, e.getBufferLength = function(t) {
                                var e = this.hls.media,
                                    r = t === n.CMCDObjectType.AUDIO ? this.audioBuffer : this.videoBuffer;
                                return r && e ? 1e3 * s.BufferHelper.bufferInfo(r, e.currentTime, this.config.maxBufferHole).len : NaN
                            }, e.createPlaylistLoader = function() {
                                var t = this.config.pLoader,
                                    e = this.applyPlaylistData,
                                    r = t || this.config.loader;
                                return function() {
                                    function t(t) {
                                        this.loader = void 0, this.loader = new r(t)
                                    }
                                    var i = t.prototype;
                                    return i.destroy = function() {
                                        this.loader.destroy()
                                    }, i.abort = function() {
                                        this.loader.abort()
                                    }, i.load = function(t, r, i) {
                                        e(t), this.loader.load(t, r, i)
                                    }, l(t, [{
                                        key: "stats",
                                        get: function() {
                                            return this.loader.stats
                                        }
                                    }, {
                                        key: "context",
                                        get: function() {
                                            return this.loader.context
                                        }
                                    }]), t
                                }()
                            }, e.createFragmentLoader = function() {
                                var t = this.config.fLoader,
                                    e = this.applyFragmentData,
                                    r = t || this.config.loader;
                                return function() {
                                    function t(t) {
                                        this.loader = void 0, this.loader = new r(t)
                                    }
                                    var i = t.prototype;
                                    return i.destroy = function() {
                                        this.loader.destroy()
                                    }, i.abort = function() {
                                        this.loader.abort()
                                    }, i.load = function(t, r, i) {
                                        e(t), this.loader.load(t, r, i)
                                    }, l(t, [{
                                        key: "stats",
                                        get: function() {
                                            return this.loader.stats
                                        }
                                    }, {
                                        key: "context",
                                        get: function() {
                                            return this.loader.context
                                        }
                                    }]), t
                                }()
                            }, t.uuid = function() {
                                var t = URL.createObjectURL(new Blob),
                                    e = t.toString();
                                return URL.revokeObjectURL(t), e.substr(e.lastIndexOf("/") + 1)
                            }, t.serialize = function(t) {
                                for (var e, r = [], i = function(t) {
                                        return Math.round(t)
                                    }, n = function(t) {
                                        return 100 * i(t / 100)
                                    }, s = {
                                        br: i,
                                        d: i,
                                        bl: n,
                                        dl: n,
                                        mtp: n,
                                        nor: function(t) {
                                            return encodeURIComponent(t)
                                        },
                                        rtp: n,
                                        tb: i
                                    }, a = Object.keys(t || {}).sort(), o = u(a); !(e = o()).done;) {
                                    var l, c = e.value,
                                        d = t[c];
                                    if (!Number.isNaN(l = d) && null != l && "" !== l && !1 !== l && ("v" !== c || 1 !== d) && ("pr" != c || 1 !== d)) {
                                        var h = s[c];
                                        h && (d = h(d));
                                        var f = typeof d,
                                            g = void 0;
                                        g = "ot" === c || "sf" === c || "st" === c ? c + "=" + d : "boolean" === f ? c : "number" === f ? c + "=" + d : c + "=" + JSON.stringify(d), r.push(g)
                                    }
                                }
                                return r.join(",")
                            }, t.toHeaders = function(e) {
                                for (var r = Object.keys(e), i = {}, n = ["Object", "Request", "Session", "Status"], s = [{}, {}, {}, {}], a = {
                                        br: 0,
                                        d: 0,
                                        ot: 0,
                                        tb: 0,
                                        bl: 1,
                                        dl: 1,
                                        mtp: 1,
                                        nor: 1,
                                        nrr: 1,
                                        su: 1,
                                        cid: 2,
                                        pr: 2,
                                        sf: 2,
                                        sid: 2,
                                        st: 2,
                                        v: 2,
                                        bs: 3,
                                        rtp: 3
                                    }, o = 0; o < r.length; o++) {
                                    var l = r[o];
                                    s[null != a[l] ? a[l] : 1][l] = e[l]
                                }
                                for (var u = 0; u < s.length; u++) {
                                    var c = t.serialize(s[u]);
                                    c && (i["CMCD-" + n[u]] = c)
                                }
                                return i
                            }, t.toQuery = function(e) {
                                return "CMCD=" + encodeURIComponent(t.serialize(e))
                            }, t.appendQueryToUri = function(t, e) {
                                if (!e) return t;
                                var r = t.includes("?") ? "&" : "?";
                                return "" + t + r + e
                            }, t
                        }()
                    },
                    "./src/controller/eme-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/events.ts"),
                            n = r("./src/errors.ts"),
                            s = r("./src/utils/logger.ts"),
                            a = r("./src/utils/mediakeys-helper.ts"),
                            o = function(t, e, r) {
                                var i = {
                                    audioCapabilities: [],
                                    videoCapabilities: []
                                };
                                return t.forEach(function(t) {
                                    i.audioCapabilities.push({
                                        contentType: 'audio/mp4; codecs="' + t + '"',
                                        robustness: r.audioRobustness || ""
                                    })
                                }), e.forEach(function(t) {
                                    i.videoCapabilities.push({
                                        contentType: 'video/mp4; codecs="' + t + '"',
                                        robustness: r.videoRobustness || ""
                                    })
                                }), [i]
                            },
                            l = function(t, e, r, i) {
                                if (t === a.KeySystems.WIDEVINE) return o(e, r, i);
                                throw Error("Unknown key-system: " + t)
                            },
                            u = function() {
                                function t(t) {
                                    this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = t, this._config = t.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners()
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                        this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null
                                    }, e._registerListeners = function() {
                                        this.hls.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(i.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this)
                                    }, e._unregisterListeners = function() {
                                        this.hls.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(i.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this)
                                    }, e.getLicenseServerUrl = function(t) {
                                        switch (t) {
                                            case a.KeySystems.WIDEVINE:
                                                if (!this._widevineLicenseUrl) break;
                                                return this._widevineLicenseUrl
                                        }
                                        throw Error('no license server URL configured for key-system "' + t + '"')
                                    }, e._attemptKeySystemAccess = function(t, e, r) {
                                        var i = this,
                                            n = l(t, e, r, this._drmSystemOptions);
                                        s.logger.log("Requesting encrypted media key-system access");
                                        var a = this.requestMediaKeySystemAccess(t, n);
                                        this.mediaKeysPromise = a.then(function(e) {
                                            return i._onMediaKeySystemAccessObtained(t, e)
                                        }), a.catch(function(e) {
                                            s.logger.error('Failed to obtain key-system "' + t + '" access:', e)
                                        })
                                    }, e._onMediaKeySystemAccessObtained = function(t, e) {
                                        var r = this;
                                        s.logger.log('Access for key-system "' + t + '" obtained');
                                        var i = {
                                            mediaKeysSessionInitialized: !1,
                                            mediaKeySystemAccess: e,
                                            mediaKeySystemDomain: t
                                        };
                                        this._mediaKeysList.push(i);
                                        var n = Promise.resolve().then(function() {
                                            return e.createMediaKeys()
                                        }).then(function(e) {
                                            return i.mediaKeys = e, s.logger.log('Media-keys created for key-system "' + t + '"'), r._onMediaKeysCreated(), e
                                        });
                                        return n.catch(function(t) {
                                            s.logger.error("Failed to create media-keys:", t)
                                        }), n
                                    }, e._onMediaKeysCreated = function() {
                                        var t = this;
                                        this._mediaKeysList.forEach(function(e) {
                                            e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
                                        })
                                    }, e._onNewMediaKeySession = function(t) {
                                        var e = this;
                                        s.logger.log("New key-system session " + t.sessionId), t.addEventListener("message", function(r) {
                                            e._onKeySessionMessage(t, r.message)
                                        }, !1)
                                    }, e._onKeySessionMessage = function(t, e) {
                                        s.logger.log("Got EME message event, creating license request"), this._requestLicense(e, function(e) {
                                            s.logger.log("Received license data (length: " + (e ? e.byteLength : e) + "), updating key-session"), t.update(e)
                                        })
                                    }, e.onMediaEncrypted = function(t) {
                                        var e = this;
                                        if (s.logger.log('Media is encrypted using "' + t.initDataType + '" init data type'), !this.mediaKeysPromise) {
                                            s.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), this.hls.trigger(i.Events.ERROR, {
                                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: n.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                                fatal: !0
                                            });
                                            return
                                        }
                                        var r = function(r) {
                                            e._media && (e._attemptSetMediaKeys(r), e._generateRequestWithPreferredKeySession(t.initDataType, t.initData))
                                        };
                                        this.mediaKeysPromise.then(r).catch(r)
                                    }, e._attemptSetMediaKeys = function(t) {
                                        if (!this._media) throw Error("Attempted to set mediaKeys without first attaching a media element");
                                        if (!this._hasSetMediaKeys) {
                                            var e = this._mediaKeysList[0];
                                            if (!e || !e.mediaKeys) {
                                                s.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), this.hls.trigger(i.Events.ERROR, {
                                                    type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                    details: n.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                                    fatal: !0
                                                });
                                                return
                                            }
                                            s.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
                                        }
                                    }, e._generateRequestWithPreferredKeySession = function(t, e) {
                                        var r = this,
                                            a = this._mediaKeysList[0];
                                        if (!a) {
                                            s.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), this.hls.trigger(i.Events.ERROR, {
                                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                                fatal: !0
                                            });
                                            return
                                        }
                                        if (a.mediaKeysSessionInitialized) {
                                            s.logger.warn("Key-Session already initialized but requested again");
                                            return
                                        }
                                        var o = a.mediaKeysSession;
                                        if (!o) {
                                            s.logger.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(i.Events.ERROR, {
                                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                                fatal: !0
                                            });
                                            return
                                        }
                                        if (!e) {
                                            s.logger.warn("Fatal: initData required for generating a key session is null"), this.hls.trigger(i.Events.ERROR, {
                                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: n.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                                                fatal: !0
                                            });
                                            return
                                        }
                                        s.logger.log('Generating key-session request for "' + t + '" init data type'), a.mediaKeysSessionInitialized = !0, o.generateRequest(t, e).then(function() {
                                            s.logger.debug("Key-session generation succeeded")
                                        }).catch(function(t) {
                                            s.logger.error("Error generating key-session request:", t), r.hls.trigger(i.Events.ERROR, {
                                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                                fatal: !1
                                            })
                                        })
                                    }, e._createLicenseXhr = function(t, e, r) {
                                        var i = new XMLHttpRequest;
                                        i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, t, e, r);
                                        var n = this._licenseXhrSetup;
                                        if (n) try {
                                            n.call(this.hls, i, t), n = void 0
                                        } catch (t) {
                                            s.logger.error(t)
                                        }
                                        try {
                                            i.readyState || i.open("POST", t, !0), n && n.call(this.hls, i, t)
                                        } catch (t) {
                                            throw Error("issue setting up KeySystem license XHR " + t)
                                        }
                                        return i
                                    }, e._onLicenseRequestReadyStageChange = function(t, e, r, a) {
                                        if (4 === t.readyState) {
                                            if (200 === t.status) {
                                                this._requestLicenseFailureCount = 0, s.logger.log("License request succeeded");
                                                var o = t.response,
                                                    l = this._licenseResponseCallback;
                                                if (l) try {
                                                    o = l.call(this.hls, t, e)
                                                } catch (t) {
                                                    s.logger.error(t)
                                                }
                                                a(o)
                                            } else {
                                                if (s.logger.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) {
                                                    this.hls.trigger(i.Events.ERROR, {
                                                        type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                        details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                                        fatal: !0
                                                    });
                                                    return
                                                }
                                                var u = 3 - this._requestLicenseFailureCount + 1;
                                                s.logger.warn("Retrying license request, " + u + " attempts left"), this._requestLicense(r, a)
                                            }
                                        }
                                    }, e._generateLicenseRequestChallenge = function(t, e) {
                                        if (t.mediaKeySystemDomain === a.KeySystems.WIDEVINE) return e;
                                        throw Error("unsupported key-system: " + t.mediaKeySystemDomain)
                                    }, e._requestLicense = function(t, e) {
                                        s.logger.log("Requesting content license for key-system");
                                        var r = this._mediaKeysList[0];
                                        if (!r) {
                                            s.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), this.hls.trigger(i.Events.ERROR, {
                                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                                fatal: !0
                                            });
                                            return
                                        }
                                        try {
                                            var a = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                                                o = this._createLicenseXhr(a, t, e);
                                            s.logger.log("Sending license request to URL: " + a);
                                            var l = this._generateLicenseRequestChallenge(r, t);
                                            o.send(l)
                                        } catch (t) {
                                            s.logger.error("Failure requesting DRM license: " + t), this.hls.trigger(i.Events.ERROR, {
                                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                                fatal: !0
                                            })
                                        }
                                    }, e.onMediaAttached = function(t, e) {
                                        if (this._emeEnabled) {
                                            var r = e.media;
                                            this._media = r, r.addEventListener("encrypted", this._onMediaEncrypted)
                                        }
                                    }, e.onMediaDetached = function() {
                                        var t = this._media,
                                            e = this._mediaKeysList;
                                        t && (t.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(e.map(function(t) {
                                            if (t.mediaKeysSession) return t.mediaKeysSession.close().catch(function() {})
                                        })).then(function() {
                                            return t.setMediaKeys(null)
                                        }).catch(function() {}))
                                    }, e.onManifestParsed = function(t, e) {
                                        if (this._emeEnabled) {
                                            var r = e.levels.map(function(t) {
                                                    return t.audioCodec
                                                }).filter(function(t) {
                                                    return !!t
                                                }),
                                                i = e.levels.map(function(t) {
                                                    return t.videoCodec
                                                }).filter(function(t) {
                                                    return !!t
                                                });
                                            this._attemptKeySystemAccess(a.KeySystems.WIDEVINE, r, i)
                                        }
                                    },
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(t.prototype, [{
                                        key: "requestMediaKeySystemAccess",
                                        get: function() {
                                            if (!this._requestMediaKeySystemAccess) throw Error("No requestMediaKeySystemAccess function configured");
                                            return this._requestMediaKeySystemAccess
                                        }
                                    }]), t
                            }();
                        e.default = u
                    },
                    "./src/controller/fps-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/events.ts"),
                            n = r("./src/utils/logger.ts"),
                            s = function() {
                                function t(t) {
                                    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = t, this.registerListeners()
                                }
                                var e = t.prototype;
                                return e.setStreamController = function(t) {
                                    this.streamController = t
                                }, e.registerListeners = function() {
                                    this.hls.on(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this)
                                }, e.unregisterListeners = function() {
                                    this.hls.off(i.Events.MEDIA_ATTACHING, this.onMediaAttaching)
                                }, e.destroy = function() {
                                    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
                                }, e.onMediaAttaching = function(t, e) {
                                    var r = this.hls.config;
                                    if (r.capLevelOnFPSDrop) {
                                        var i = e.media instanceof self.HTMLVideoElement ? e.media : null;
                                        this.media = i, i && "function" == typeof i.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod)
                                    }
                                }, e.checkFPS = function(t, e, r) {
                                    var s = performance.now();
                                    if (e) {
                                        if (this.lastTime) {
                                            var a = s - this.lastTime,
                                                o = r - this.lastDroppedFrames,
                                                l = e - this.lastDecodedFrames,
                                                u = 1e3 * o / a,
                                                c = this.hls;
                                            if (c.trigger(i.Events.FPS_DROP, {
                                                    currentDropped: o,
                                                    currentDecoded: l,
                                                    totalDroppedFrames: r
                                                }), u > 0 && o > c.config.fpsDroppedMonitoringThreshold * l) {
                                                var d = c.currentLevel;
                                                n.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (-1 === c.autoLevelCapping || c.autoLevelCapping >= d) && (d -= 1, c.trigger(i.Events.FPS_DROP_LEVEL_CAPPING, {
                                                    level: d,
                                                    droppedLevel: c.currentLevel
                                                }), c.autoLevelCapping = d, this.streamController.nextLevelSwitch())
                                            }
                                        }
                                        this.lastTime = s, this.lastDroppedFrames = r, this.lastDecodedFrames = e
                                    }
                                }, e.checkFPSInterval = function() {
                                    var t = this.media;
                                    if (t) {
                                        if (this.isVideoPlaybackQualityAvailable) {
                                            var e = t.getVideoPlaybackQuality();
                                            this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
                                        } else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
                                    }
                                }, t
                            }();
                        e.default = s
                    },
                    "./src/controller/fragment-finders.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "findFragmentByPDT", function() {
                            return s
                        }), r.d(e, "findFragmentByPTS", function() {
                            return a
                        }), r.d(e, "fragmentWithinToleranceTest", function() {
                            return o
                        }), r.d(e, "pdtWithinToleranceTest", function() {
                            return l
                        }), r.d(e, "findFragWithCC", function() {
                            return u
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/utils/binary-search.ts");

                        function s(t, e, r) {
                            if (null === e || !Array.isArray(t) || !t.length || !Object(i.isFiniteNumber)(e) || e < (t[0].programDateTime || 0) || e >= (t[t.length - 1].endProgramDateTime || 0)) return null;
                            r = r || 0;
                            for (var n = 0; n < t.length; ++n) {
                                var s = t[n];
                                if (l(e, r, s)) return s
                            }
                            return null
                        }

                        function a(t, e, r, i) {
                            void 0 === r && (r = 0), void 0 === i && (i = 0);
                            var s = null;
                            return (t ? s = e[t.sn - e[0].sn + 1] || null : 0 === r && 0 === e[0].start && (s = e[0]), s && 0 === o(r, i, s)) ? s : n.default.search(e, o.bind(null, r, i)) || s
                        }

                        function o(t, e, r) {
                            void 0 === t && (t = 0), void 0 === e && (e = 0);
                            var i = Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                            return r.start + r.duration - i <= t ? 1 : r.start - i > t && r.start ? -1 : 0
                        }

                        function l(t, e, r) {
                            var i = 1e3 * Math.min(e, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                            return (r.endProgramDateTime || 0) - i > t
                        }

                        function u(t, e) {
                            return n.default.search(t, function(t) {
                                return t.cc < e ? 1 : t.cc > e ? -1 : 0
                            })
                        }
                    },
                    "./src/controller/fragment-tracker.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "FragmentState", function() {
                            return n
                        }), r.d(e, "FragmentTracker", function() {
                            return o
                        });
                        var i, n, s = r("./src/events.ts"),
                            a = r("./src/types/loader.ts");
                        (i = n || (n = {})).NOT_LOADED = "NOT_LOADED", i.BACKTRACKED = "BACKTRACKED", i.APPENDING = "APPENDING", i.PARTIAL = "PARTIAL", i.OK = "OK";
                        var o = function() {
                            function t(t) {
                                this.activeFragment = null, this.activeParts = null, this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hls = t, this._registerListeners()
                            }
                            var e = t.prototype;
                            return e._registerListeners = function() {
                                var t = this.hls;
                                t.on(s.Events.BUFFER_APPENDED, this.onBufferAppended, this), t.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this), t.on(s.Events.FRAG_LOADED, this.onFragLoaded, this)
                            }, e._unregisterListeners = function() {
                                var t = this.hls;
                                t.off(s.Events.BUFFER_APPENDED, this.onBufferAppended, this), t.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this), t.off(s.Events.FRAG_LOADED, this.onFragLoaded, this)
                            }, e.destroy = function() {
                                this._unregisterListeners(), this.fragments = this.timeRanges = null
                            }, e.getAppendedFrag = function(t, e) {
                                if (e === a.PlaylistLevelType.MAIN) {
                                    var r = this.activeFragment,
                                        i = this.activeParts;
                                    if (!r) return null;
                                    if (i)
                                        for (var n = i.length; n--;) {
                                            var s = i[n],
                                                o = s ? s.end : r.appendedPTS;
                                            if (s.start <= t && void 0 !== o && t <= o) return n > 9 && (this.activeParts = i.slice(n - 9)), s
                                        } else if (r.start <= t && void 0 !== r.appendedPTS && t <= r.appendedPTS) return r
                                }
                                return this.getBufferedFrag(t, e)
                            }, e.getBufferedFrag = function(t, e) {
                                for (var r = this.fragments, i = Object.keys(r), n = i.length; n--;) {
                                    var s = r[i[n]];
                                    if ((null == s ? void 0 : s.body.type) === e && s.buffered) {
                                        var a = s.body;
                                        if (a.start <= t && t <= a.end) return a
                                    }
                                }
                                return null
                            }, e.detectEvictedFragments = function(t, e, r) {
                                var i = this;
                                Object.keys(this.fragments).forEach(function(n) {
                                    var s = i.fragments[n];
                                    if (s) {
                                        if (!s.buffered) {
                                            s.body.type === r && i.removeFragment(s.body);
                                            return
                                        }
                                        var a = s.range[t];
                                        a && a.time.some(function(t) {
                                            var r = !i.isTimeBuffered(t.startPTS, t.endPTS, e);
                                            return r && i.removeFragment(s.body), r
                                        })
                                    }
                                })
                            }, e.detectPartialFragments = function(t) {
                                var e = this,
                                    r = this.timeRanges,
                                    i = t.frag,
                                    n = t.part;
                                if (r && "initSegment" !== i.sn) {
                                    var s = u(i),
                                        a = this.fragments[s];
                                    a && (Object.keys(r).forEach(function(t) {
                                        var s = i.elementaryStreams[t];
                                        if (s) {
                                            var o = r[t],
                                                l = null !== n || !0 === s.partial;
                                            a.range[t] = e.getBufferedTimes(i, n, l, o)
                                        }
                                    }), a.backtrack = a.loaded = null, Object.keys(a.range).length ? a.buffered = !0 : this.removeFragment(a.body))
                                }
                            }, e.fragBuffered = function(t) {
                                var e = u(t),
                                    r = this.fragments[e];
                                r && (r.backtrack = r.loaded = null, r.buffered = !0)
                            }, e.getBufferedTimes = function(t, e, r, i) {
                                for (var n = {
                                        time: [],
                                        partial: r
                                    }, s = e ? e.start : t.start, a = e ? e.end : t.end, o = t.minEndPTS || a, l = t.maxStartPTS || s, u = 0; u < i.length; u++) {
                                    var c = i.start(u) - this.bufferPadding,
                                        d = i.end(u) + this.bufferPadding;
                                    if (l >= c && o <= d) {
                                        n.time.push({
                                            startPTS: Math.max(s, i.start(u)),
                                            endPTS: Math.min(a, i.end(u))
                                        });
                                        break
                                    }
                                    if (s < d && a > c) n.partial = !0, n.time.push({
                                        startPTS: Math.max(s, i.start(u)),
                                        endPTS: Math.min(a, i.end(u))
                                    });
                                    else if (a <= c) break
                                }
                                return n
                            }, e.getPartialFragment = function(t) {
                                var e, r, i, n = null,
                                    s = 0,
                                    a = this.bufferPadding,
                                    o = this.fragments;
                                return Object.keys(o).forEach(function(u) {
                                    var c = o[u];
                                    c && l(c) && (r = c.body.start - a, i = c.body.end + a, t >= r && t <= i && s <= (e = Math.min(t - r, i - t)) && (n = c.body, s = e))
                                }), n
                            }, e.getState = function(t) {
                                var e = u(t),
                                    r = this.fragments[e];
                                if (r) return r.buffered ? l(r) ? n.PARTIAL : n.OK : r.backtrack ? n.BACKTRACKED : n.APPENDING;
                                return n.NOT_LOADED
                            }, e.backtrack = function(t, e) {
                                var r = u(t),
                                    i = this.fragments[r];
                                if (!i || i.backtrack) return null;
                                var n = i.backtrack = e || i.loaded;
                                return i.loaded = null, n
                            }, e.getBacktrackData = function(t) {
                                var e = u(t),
                                    r = this.fragments[e];
                                if (r) {
                                    var i, n = r.backtrack;
                                    if (null != n && null !== (i = n.payload) && void 0 !== i && i.byteLength) return n;
                                    this.removeFragment(t)
                                }
                                return null
                            }, e.isTimeBuffered = function(t, e, r) {
                                for (var i, n, s = 0; s < r.length; s++) {
                                    if (i = r.start(s) - this.bufferPadding, n = r.end(s) + this.bufferPadding, t >= i && e <= n) return !0;
                                    if (e <= i) break
                                }
                                return !1
                            }, e.onFragLoaded = function(t, e) {
                                var r = e.frag,
                                    i = e.part;
                                if ("initSegment" !== r.sn && !r.bitrateTest && !i) {
                                    var n = u(r);
                                    this.fragments[n] = {
                                        body: r,
                                        loaded: e,
                                        backtrack: null,
                                        buffered: !1,
                                        range: Object.create(null)
                                    }
                                }
                            }, e.onBufferAppended = function(t, e) {
                                var r = this,
                                    i = e.frag,
                                    n = e.part,
                                    s = e.timeRanges;
                                if (i.type === a.PlaylistLevelType.MAIN) {
                                    if (this.activeFragment = i, n) {
                                        var o = this.activeParts;
                                        o || (this.activeParts = o = []), o.push(n)
                                    } else this.activeParts = null
                                }
                                this.timeRanges = s, Object.keys(s).forEach(function(t) {
                                    var e = s[t];
                                    if (r.detectEvictedFragments(t, e), !n)
                                        for (var a = 0; a < e.length; a++) i.appendedPTS = Math.max(e.end(a), i.appendedPTS || 0)
                                })
                            }, e.onFragBuffered = function(t, e) {
                                this.detectPartialFragments(e)
                            }, e.hasFragment = function(t) {
                                var e = u(t);
                                return !!this.fragments[e]
                            }, e.removeFragmentsInRange = function(t, e, r) {
                                var i = this;
                                Object.keys(this.fragments).forEach(function(n) {
                                    var s = i.fragments[n];
                                    if (s && s.buffered) {
                                        var a = s.body;
                                        a.type === r && a.start < e && a.end > t && i.removeFragment(a)
                                    }
                                })
                            }, e.removeFragment = function(t) {
                                var e = u(t);
                                t.stats.loaded = 0, t.clearElementaryStreamInfo(), delete this.fragments[e]
                            }, e.removeAllFragments = function() {
                                this.fragments = Object.create(null), this.activeFragment = null, this.activeParts = null
                            }, t
                        }();

                        function l(t) {
                            var e, r;
                            return t.buffered && ((null === (e = t.range.video) || void 0 === e ? void 0 : e.partial) || (null === (r = t.range.audio) || void 0 === r ? void 0 : r.partial))
                        }

                        function u(t) {
                            return t.type + "_" + t.level + "_" + t.urlId + "_" + t.sn
                        }
                    },
                    "./src/controller/gap-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "STALL_MINIMUM_DURATION_MS", function() {
                            return o
                        }), r.d(e, "MAX_START_GAP_JUMP", function() {
                            return l
                        }), r.d(e, "SKIP_BUFFER_HOLE_STEP_SECONDS", function() {
                            return u
                        }), r.d(e, "SKIP_BUFFER_RANGE_START", function() {
                            return c
                        }), r.d(e, "default", function() {
                            return d
                        });
                        var i = r("./src/utils/buffer-helper.ts"),
                            n = r("./src/errors.ts"),
                            s = r("./src/events.ts"),
                            a = r("./src/utils/logger.ts"),
                            o = 250,
                            l = 2,
                            u = .1,
                            c = .05,
                            d = function() {
                                function t(t, e, r, i) {
                                    this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = t, this.media = e, this.fragmentTracker = r, this.hls = i
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this.hls = this.fragmentTracker = this.media = null
                                }, e.poll = function(t) {
                                    var e = this.config,
                                        r = this.media,
                                        n = this.stalled,
                                        s = r.currentTime,
                                        u = r.seeking,
                                        c = this.seeking && !u,
                                        d = !this.seeking && u;
                                    if (this.seeking = u, s !== t) {
                                        if (this.moved = !0, null !== n) {
                                            if (this.stallReported) {
                                                var h = self.performance.now() - n;
                                                a.logger.warn("playback not stuck anymore @" + s + ", after " + Math.round(h) + "ms"), this.stallReported = !1
                                            }
                                            this.stalled = null, this.nudgeRetry = 0
                                        }
                                        return
                                    }
                                    if ((d || c) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && i.BufferHelper.getBuffered(r).length) {
                                        var f = i.BufferHelper.bufferInfo(r, s, 0),
                                            g = f.len > 0,
                                            v = f.nextStart || 0;
                                        if (g || v) {
                                            if (u) {
                                                var p = f.len > l,
                                                    m = !v || v - s > l && !this.fragmentTracker.getPartialFragment(s);
                                                if (p || m) return;
                                                this.moved = !1
                                            }
                                            if (!this.moved && null !== this.stalled) {
                                                var y, E = Math.max(v, f.start || 0) - s,
                                                    T = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
                                                    S = (null == T ? void 0 : null === (y = T.details) || void 0 === y ? void 0 : y.live) ? 2 * T.details.targetduration : l;
                                                if (E > 0 && E <= S) {
                                                    this._trySkipBufferHole(null);
                                                    return
                                                }
                                            }
                                            var b = self.performance.now();
                                            if (null === n) {
                                                this.stalled = b;
                                                return
                                            }
                                            var L = b - n;
                                            !u && L >= o && this._reportStall(f.len);
                                            var A = i.BufferHelper.bufferInfo(r, s, e.maxBufferHole);
                                            this._tryFixBufferStall(A, L)
                                        }
                                    }
                                }, e._tryFixBufferStall = function(t, e) {
                                    var r = this.config,
                                        i = this.fragmentTracker,
                                        n = this.media.currentTime,
                                        s = i.getPartialFragment(n);
                                    !(s && this._trySkipBufferHole(s)) && t.len > r.maxBufferHole && e > 1e3 * r.highBufferWatchdogPeriod && (a.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                                }, e._reportStall = function(t) {
                                    var e = this.hls,
                                        r = this.media;
                                    this.stallReported || (this.stallReported = !0, a.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer (buffer=" + t + ")"), e.trigger(s.Events.ERROR, {
                                        type: n.ErrorTypes.MEDIA_ERROR,
                                        details: n.ErrorDetails.BUFFER_STALLED_ERROR,
                                        fatal: !1,
                                        buffer: t
                                    }))
                                }, e._trySkipBufferHole = function(t) {
                                    for (var e = this.config, r = this.hls, o = this.media, l = o.currentTime, d = 0, h = i.BufferHelper.getBuffered(o), f = 0; f < h.length; f++) {
                                        var g = h.start(f);
                                        if (l + e.maxBufferHole >= d && l < g) {
                                            var v = Math.max(g + c, o.currentTime + u);
                                            return a.logger.warn("skipping hole, adjusting currentTime from " + l + " to " + v), this.moved = !0, this.stalled = null, o.currentTime = v, t && r.trigger(s.Events.ERROR, {
                                                type: n.ErrorTypes.MEDIA_ERROR,
                                                details: n.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                                fatal: !1,
                                                reason: "fragment loaded with buffer holes, seeking from " + l + " to " + v,
                                                frag: t
                                            }), v
                                        }
                                        d = h.end(f)
                                    }
                                    return 0
                                }, e._tryNudgeBuffer = function() {
                                    var t = this.config,
                                        e = this.hls,
                                        r = this.media,
                                        i = r.currentTime,
                                        o = (this.nudgeRetry || 0) + 1;
                                    if (this.nudgeRetry = o, o < t.nudgeMaxRetry) {
                                        var l = i + o * t.nudgeOffset;
                                        a.logger.warn("Nudging 'currentTime' from " + i + " to " + l), r.currentTime = l, e.trigger(s.Events.ERROR, {
                                            type: n.ErrorTypes.MEDIA_ERROR,
                                            details: n.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                                            fatal: !1
                                        })
                                    } else a.logger.error("Playhead still not moving while enough data buffered @" + i + " after " + t.nudgeMaxRetry + " nudges"), e.trigger(s.Events.ERROR, {
                                        type: n.ErrorTypes.MEDIA_ERROR,
                                        details: n.ErrorDetails.BUFFER_STALLED_ERROR,
                                        fatal: !0
                                    })
                                }, t
                            }()
                    },
                    "./src/controller/id3-track-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/events.ts"),
                            n = r("./src/utils/texttrack-utils.ts"),
                            s = r("./src/demux/id3.ts"),
                            a = function() {
                                function t(t) {
                                    this.hls = void 0, this.id3Track = null, this.media = null, this.hls = t, this._registerListeners()
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this._unregisterListeners()
                                }, e._registerListeners = function() {
                                    var t = this.hls;
                                    t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(i.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.on(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                                }, e._unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(i.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), t.off(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                                }, e.onMediaAttached = function(t, e) {
                                    this.media = e.media
                                }, e.onMediaDetaching = function() {
                                    this.id3Track && (Object(n.clearCurrentCues)(this.id3Track), this.id3Track = null, this.media = null)
                                }, e.getID3Track = function(t) {
                                    if (this.media) {
                                        for (var e = 0; e < t.length; e++) {
                                            var r = t[e];
                                            if ("metadata" === r.kind && "id3" === r.label) return Object(n.sendAddTrackEvent)(r, this.media), r
                                        }
                                        return this.media.addTextTrack("metadata", "id3")
                                    }
                                }, e.onFragParsingMetadata = function(t, e) {
                                    if (this.media) {
                                        var r = e.frag,
                                            i = e.samples;
                                        this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                                        for (var n = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, a = 0; a < i.length; a++) {
                                            var o = s.getID3Frames(i[a].data);
                                            if (o) {
                                                var l = i[a].pts,
                                                    u = a < i.length - 1 ? i[a + 1].pts : r.end;
                                                u - l <= 0 && (u = l + .25);
                                                for (var c = 0; c < o.length; c++) {
                                                    var d = o[c];
                                                    if (!s.isTimeStampFrame(d)) {
                                                        var h = new n(l, u, "");
                                                        h.value = d, this.id3Track.addCue(h)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, e.onBufferFlushing = function(t, e) {
                                    var r = e.startOffset,
                                        i = e.endOffset,
                                        s = e.type;
                                    if (!s || "audio" === s) {
                                        var a = this.id3Track;
                                        a && Object(n.removeCuesInRange)(a, r, i)
                                    }
                                }, t
                            }();
                        e.default = a
                    },
                    "./src/controller/latency-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return a
                        });
                        var i = r("./src/errors.ts"),
                            n = r("./src/events.ts"),
                            s = r("./src/utils/logger.ts"),
                            a = function() {
                                function t(t) {
                                    var e = this;
                                    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
                                        return e.timeupdate()
                                    }, this.hls = t, this.config = t.config, this.registerListeners()
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                        this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
                                    }, e.registerListeners = function() {
                                        this.hls.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(n.Events.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(n.Events.ERROR, this.onError, this)
                                    }, e.unregisterListeners = function() {
                                        this.hls.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(n.Events.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(n.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(n.Events.ERROR, this.onError)
                                    }, e.onMediaAttached = function(t, e) {
                                        this.media = e.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
                                    }, e.onMediaDetaching = function() {
                                        this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
                                    }, e.onManifestLoading = function() {
                                        this.levelDetails = null, this._latency = null, this.stallCount = 0
                                    }, e.onLevelUpdated = function(t, e) {
                                        var r = e.details;
                                        this.levelDetails = r, r.advanced && this.timeupdate(), !r.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
                                    }, e.onError = function(t, e) {
                                        e.details === i.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, s.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
                                    }, e.timeupdate = function() {
                                        var t = this.media,
                                            e = this.levelDetails;
                                        if (t && e) {
                                            this.currentTime = t.currentTime;
                                            var r = this.computeLatency();
                                            if (null !== r) {
                                                this._latency = r;
                                                var i = this.config,
                                                    n = i.lowLatencyMode,
                                                    s = i.maxLiveSyncPlaybackRate;
                                                if (n && 1 !== s) {
                                                    var a = this.targetLatency;
                                                    if (null !== a) {
                                                        var o = r - a,
                                                            l = Math.min(this.maxLatency, a + e.targetduration);
                                                        if (e.live && o < l && o > .05 && this.forwardBufferLength > 1) {
                                                            var u = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
                                                            t.playbackRate = Math.min(Math.min(2, Math.max(1, s)), Math.max(1, u))
                                                        } else 1 !== t.playbackRate && 0 !== t.playbackRate && (t.playbackRate = 1)
                                                    }
                                                }
                                            }
                                        }
                                    }, e.estimateLiveEdge = function() {
                                        var t = this.levelDetails;
                                        return null === t ? null : t.edge + t.age
                                    }, e.computeLatency = function() {
                                        var t = this.estimateLiveEdge();
                                        return null === t ? null : t - this.currentTime
                                    },
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(t.prototype, [{
                                        key: "latency",
                                        get: function() {
                                            return this._latency || 0
                                        }
                                    }, {
                                        key: "maxLatency",
                                        get: function() {
                                            var t = this.config,
                                                e = this.levelDetails;
                                            return void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : e ? t.liveMaxLatencyDurationCount * e.targetduration : 0
                                        }
                                    }, {
                                        key: "targetLatency",
                                        get: function() {
                                            var t = this.levelDetails;
                                            if (null === t) return null;
                                            var e = t.holdBack,
                                                r = t.partHoldBack,
                                                i = t.targetduration,
                                                n = this.config,
                                                s = n.liveSyncDuration,
                                                a = n.liveSyncDurationCount,
                                                o = n.lowLatencyMode,
                                                l = this.hls.userConfig,
                                                u = o && r || e;
                                            return (l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== s ? s : a * i), u + Math.min(1 * this.stallCount, i)
                                        }
                                    }, {
                                        key: "liveSyncPosition",
                                        get: function() {
                                            var t = this.estimateLiveEdge(),
                                                e = this.targetLatency,
                                                r = this.levelDetails;
                                            if (null === t || null === e || null === r) return null;
                                            var i = r.edge,
                                                n = t - e - this.edgeStalled;
                                            return Math.min(Math.max(i - r.totalduration, n), i - (this.config.lowLatencyMode && r.partTarget || r.targetduration))
                                        }
                                    }, {
                                        key: "drift",
                                        get: function() {
                                            var t = this.levelDetails;
                                            return null === t ? 1 : t.drift
                                        }
                                    }, {
                                        key: "edgeStalled",
                                        get: function() {
                                            var t = this.levelDetails;
                                            if (null === t) return 0;
                                            var e = 3 * (this.config.lowLatencyMode && t.partTarget || t.targetduration);
                                            return Math.max(t.age - e, 0)
                                        }
                                    }, {
                                        key: "forwardBufferLength",
                                        get: function() {
                                            var t = this.media,
                                                e = this.levelDetails;
                                            if (!t || !e) return 0;
                                            var r = t.buffered.length;
                                            return r ? t.buffered.end(r - 1) : e.edge - this.currentTime
                                        }
                                    }]), t
                            }()
                    },
                    "./src/controller/level-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return f
                        });
                        var i = r("./src/types/level.ts"),
                            n = r("./src/events.ts"),
                            s = r("./src/errors.ts"),
                            a = r("./src/utils/codecs.ts"),
                            o = r("./src/controller/level-helper.ts"),
                            l = r("./src/controller/base-playlist-controller.ts"),
                            u = r("./src/types/loader.ts");

                        function c() {
                            return (c = Object.assign || function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                }
                                return t
                            }).apply(this, arguments)
                        }

                        function d(t, e) {
                            return (d = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var h = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                            f = function(t) {
                                function e(e) {
                                    var r;
                                    return (r = t.call(this, e, "[level-controller]") || this)._levels = [], r._firstLevel = -1, r._startLevel = void 0, r.currentLevelIndex = -1, r.manualLevelIndex = -1, r.onParsedComplete = void 0, r._registerListeners(), r
                                }
                                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, d(e, t);
                                var r, l = e.prototype;
                                return l._registerListeners = function() {
                                        var t = this.hls;
                                        t.on(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(n.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(n.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(n.Events.FRAG_LOADED, this.onFragLoaded, this), t.on(n.Events.ERROR, this.onError, this)
                                    }, l._unregisterListeners = function() {
                                        var t = this.hls;
                                        t.off(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(n.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(n.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(n.Events.FRAG_LOADED, this.onFragLoaded, this), t.off(n.Events.ERROR, this.onError, this)
                                    }, l.destroy = function() {
                                        this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, t.prototype.destroy.call(this)
                                    }, l.startLoad = function() {
                                        this._levels.forEach(function(t) {
                                            t.loadError = 0
                                        }), t.prototype.startLoad.call(this)
                                    }, l.onManifestLoaded = function(t, e) {
                                        var r, l, u = [],
                                            c = [],
                                            d = [],
                                            f = {},
                                            g = !1,
                                            v = !1,
                                            p = !1;
                                        if (e.levels.forEach(function(t) {
                                                var e = t.attrs;
                                                g = g || !!(t.width && t.height), v = v || !!t.videoCodec, p = p || !!t.audioCodec, h && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0);
                                                var r = t.bitrate + "-" + t.attrs.RESOLUTION + "-" + t.attrs.CODECS;
                                                (l = f[r]) ? l.url.push(t.url): (l = new i.Level(t), f[r] = l, u.push(l)), e && (e.AUDIO && Object(o.addGroupId)(l, "audio", e.AUDIO), e.SUBTITLES && Object(o.addGroupId)(l, "text", e.SUBTITLES))
                                            }), (g || v) && p && (u = u.filter(function(t) {
                                                var e = t.videoCodec,
                                                    r = t.width,
                                                    i = t.height;
                                                return !!e || !!(r && i)
                                            })), u = u.filter(function(t) {
                                                var e = t.audioCodec,
                                                    r = t.videoCodec;
                                                return (!e || Object(a.isCodecSupportedInMp4)(e, "audio")) && (!r || Object(a.isCodecSupportedInMp4)(r, "video"))
                                            }), e.audioTracks && (c = e.audioTracks.filter(function(t) {
                                                return !t.audioCodec || Object(a.isCodecSupportedInMp4)(t.audioCodec, "audio")
                                            }), Object(o.assignTrackIdsByGroup)(c)), e.subtitles && (d = e.subtitles, Object(o.assignTrackIdsByGroup)(d)), u.length > 0) {
                                            r = u[0].bitrate, u.sort(function(t, e) {
                                                return t.bitrate - e.bitrate
                                            }), this._levels = u;
                                            for (var m = 0; m < u.length; m++)
                                                if (u[m].bitrate === r) {
                                                    this._firstLevel = m, this.log("manifest loaded, " + u.length + " level(s) found, first bitrate: " + r);
                                                    break
                                                }
                                            var y = p && !v,
                                                E = {
                                                    levels: u,
                                                    audioTracks: c,
                                                    subtitleTracks: d,
                                                    firstLevel: this._firstLevel,
                                                    stats: e.stats,
                                                    audio: p,
                                                    video: v,
                                                    altAudio: !y && c.some(function(t) {
                                                        return !!t.url
                                                    })
                                                };
                                            this.hls.trigger(n.Events.MANIFEST_PARSED, E), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
                                        } else this.hls.trigger(n.Events.ERROR, {
                                            type: s.ErrorTypes.MEDIA_ERROR,
                                            details: s.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                            fatal: !0,
                                            url: e.url,
                                            reason: "no level with compatible codecs found in manifest"
                                        })
                                    }, l.onError = function(e, r) {
                                        if (t.prototype.onError.call(this, e, r), !r.fatal) {
                                            var i, n = r.context,
                                                a = this._levels[this.currentLevelIndex];
                                            if (n && (n.type === u.PlaylistContextType.AUDIO_TRACK && a.audioGroupIds && n.groupId === a.audioGroupIds[a.urlId] || n.type === u.PlaylistContextType.SUBTITLE_TRACK && a.textGroupIds && n.groupId === a.textGroupIds[a.urlId])) {
                                                this.redundantFailover(this.currentLevelIndex);
                                                return
                                            }
                                            var o = !1,
                                                l = !0;
                                            switch (r.details) {
                                                case s.ErrorDetails.FRAG_LOAD_ERROR:
                                                case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                                case s.ErrorDetails.KEY_LOAD_ERROR:
                                                case s.ErrorDetails.KEY_LOAD_TIMEOUT:
                                                    if (r.frag) {
                                                        var c = this._levels[r.frag.level];
                                                        c ? (c.fragmentError++, c.fragmentError > this.hls.config.fragLoadingMaxRetry && (i = r.frag.level)) : i = r.frag.level
                                                    }
                                                    break;
                                                case s.ErrorDetails.LEVEL_LOAD_ERROR:
                                                case s.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                                    n && (n.deliveryDirectives && (l = !1), i = n.level), o = !0;
                                                    break;
                                                case s.ErrorDetails.REMUX_ALLOC_ERROR:
                                                    i = r.level, o = !0
                                            }
                                            void 0 !== i && this.recoverLevel(r, i, o, l)
                                        }
                                    }, l.recoverLevel = function(t, e, r, i) {
                                        var n = t.details,
                                            s = this._levels[e];
                                        if (s.loadError++, r) {
                                            if (this.retryLoadingOrFail(t)) t.levelRetry = !0;
                                            else {
                                                this.currentLevelIndex = -1;
                                                return
                                            }
                                        }
                                        if (i) {
                                            var a = s.url.length;
                                            if (a > 1 && s.loadError < a) t.levelRetry = !0, this.redundantFailover(e);
                                            else if (-1 === this.manualLevelIndex) {
                                                var o = 0 === e ? this._levels.length - 1 : e - 1;
                                                this.currentLevelIndex !== o && 0 === this._levels[o].loadError && (this.warn(n + ": switch to " + o), t.levelRetry = !0, this.hls.nextAutoLevel = o)
                                            }
                                        }
                                    }, l.redundantFailover = function(t) {
                                        var e = this._levels[t],
                                            r = e.url.length;
                                        if (r > 1) {
                                            var i = (e.urlId + 1) % r;
                                            this.warn("Switching to redundant URL-id " + i), this._levels.forEach(function(t) {
                                                t.urlId = i
                                            }), this.level = t
                                        }
                                    }, l.onFragLoaded = function(t, e) {
                                        var r = e.frag;
                                        if (void 0 !== r && r.type === u.PlaylistLevelType.MAIN) {
                                            var i = this._levels[r.level];
                                            void 0 !== i && (i.fragmentError = 0, i.loadError = 0)
                                        }
                                    }, l.onLevelLoaded = function(t, e) {
                                        var r, i, n = e.level,
                                            s = e.details,
                                            a = this._levels[n];
                                        if (!a) {
                                            this.warn("Invalid level index " + n), null !== (i = e.deliveryDirectives) && void 0 !== i && i.skip && (s.deltaUpdateFailed = !0);
                                            return
                                        }
                                        n === this.currentLevelIndex ? (0 === a.fragmentError && (a.loadError = 0, this.retryCount = 0), this.playlistLoaded(n, e, a.details)) : null !== (r = e.deliveryDirectives) && void 0 !== r && r.skip && (s.deltaUpdateFailed = !0)
                                    }, l.onAudioTrackSwitched = function(t, e) {
                                        var r = this.hls.levels[this.currentLevelIndex];
                                        if (r && r.audioGroupIds) {
                                            for (var i = -1, n = this.hls.audioTracks[e.id].groupId, s = 0; s < r.audioGroupIds.length; s++)
                                                if (r.audioGroupIds[s] === n) {
                                                    i = s;
                                                    break
                                                }
                                            i !== r.urlId && (r.urlId = i, this.startLoad())
                                        }
                                    }, l.loadPlaylist = function(t) {
                                        var e = this.currentLevelIndex,
                                            r = this._levels[e];
                                        if (this.canLoad && r && r.url.length > 0) {
                                            var i = r.urlId,
                                                s = r.url[i];
                                            if (t) try {
                                                s = t.addDirectives(s)
                                            } catch (t) {
                                                this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                            }
                                            this.log("Attempt loading level index " + e + (t ? " at sn " + t.msn + " part " + t.part : "") + " with URL-id " + i + " " + s), this.clearTimer(), this.hls.trigger(n.Events.LEVEL_LOADING, {
                                                url: s,
                                                level: e,
                                                id: i,
                                                deliveryDirectives: t || null
                                            })
                                        }
                                    }, l.removeLevel = function(t, e) {
                                        var r = function(t, r) {
                                                return r !== e
                                            },
                                            i = this._levels.filter(function(i, n) {
                                                return n !== t || i.url.length > 1 && void 0 !== e && (i.url = i.url.filter(r), i.audioGroupIds && (i.audioGroupIds = i.audioGroupIds.filter(r)), i.textGroupIds && (i.textGroupIds = i.textGroupIds.filter(r)), i.urlId = 0, !0)
                                            }).map(function(t, e) {
                                                var r = t.details;
                                                return null != r && r.fragments && r.fragments.forEach(function(t) {
                                                    t.level = e
                                                }), t
                                            });
                                        this._levels = i, this.hls.trigger(n.Events.LEVELS_UPDATED, {
                                            levels: i
                                        })
                                    }, r = [{
                                        key: "levels",
                                        get: function() {
                                            return 0 === this._levels.length ? null : this._levels
                                        }
                                    }, {
                                        key: "level",
                                        get: function() {
                                            return this.currentLevelIndex
                                        },
                                        set: function(t) {
                                            var e, r = this._levels;
                                            if (0 !== r.length && (this.currentLevelIndex !== t || null === (e = r[t]) || void 0 === e || !e.details)) {
                                                if (t < 0 || t >= r.length) {
                                                    var i = t < 0;
                                                    if (this.hls.trigger(n.Events.ERROR, {
                                                            type: s.ErrorTypes.OTHER_ERROR,
                                                            details: s.ErrorDetails.LEVEL_SWITCH_ERROR,
                                                            level: t,
                                                            fatal: i,
                                                            reason: "invalid level idx"
                                                        }), i) return;
                                                    t = Math.min(t, r.length - 1)
                                                }
                                                this.clearTimer();
                                                var a = this.currentLevelIndex,
                                                    o = r[a],
                                                    l = r[t];
                                                this.log("switching to level " + t + " from " + a), this.currentLevelIndex = t;
                                                var u = c({}, l, {
                                                    level: t,
                                                    maxBitrate: l.maxBitrate,
                                                    uri: l.uri,
                                                    urlId: l.urlId
                                                });
                                                delete u._urlId, this.hls.trigger(n.Events.LEVEL_SWITCHING, u);
                                                var d = l.details;
                                                if (!d || d.live) {
                                                    var h = this.switchParams(l.uri, null == o ? void 0 : o.details);
                                                    this.loadPlaylist(h)
                                                }
                                            }
                                        }
                                    }, {
                                        key: "manualLevel",
                                        get: function() {
                                            return this.manualLevelIndex
                                        },
                                        set: function(t) {
                                            this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
                                        }
                                    }, {
                                        key: "firstLevel",
                                        get: function() {
                                            return this._firstLevel
                                        },
                                        set: function(t) {
                                            this._firstLevel = t
                                        }
                                    }, {
                                        key: "startLevel",
                                        get: function() {
                                            if (void 0 !== this._startLevel) return this._startLevel;
                                            var t = this.hls.config.startLevel;
                                            return void 0 !== t ? t : this._firstLevel
                                        },
                                        set: function(t) {
                                            this._startLevel = t
                                        }
                                    }, {
                                        key: "nextLoadLevel",
                                        get: function() {
                                            return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                                        },
                                        set: function(t) {
                                            this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
                                        }
                                    }],
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, r), e
                            }(l.default)
                    },
                    "./src/controller/level-helper.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "addGroupId", function() {
                            return s
                        }), r.d(e, "assignTrackIdsByGroup", function() {
                            return a
                        }), r.d(e, "updatePTS", function() {
                            return o
                        }), r.d(e, "updateFragPTSDTS", function() {
                            return u
                        }), r.d(e, "mergeDetails", function() {
                            return c
                        }), r.d(e, "mapPartIntersection", function() {
                            return d
                        }), r.d(e, "mapFragmentIntersection", function() {
                            return h
                        }), r.d(e, "adjustSliding", function() {
                            return f
                        }), r.d(e, "addSliding", function() {
                            return g
                        }), r.d(e, "computeReloadInterval", function() {
                            return v
                        }), r.d(e, "getFragmentWithSN", function() {
                            return p
                        }), r.d(e, "getPartWith", function() {
                            return m
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/utils/logger.ts");

                        function s(t, e, r) {
                            switch (e) {
                                case "audio":
                                    t.audioGroupIds || (t.audioGroupIds = []), t.audioGroupIds.push(r);
                                    break;
                                case "text":
                                    t.textGroupIds || (t.textGroupIds = []), t.textGroupIds.push(r)
                            }
                        }

                        function a(t) {
                            var e = {};
                            t.forEach(function(t) {
                                var r = t.groupId || "";
                                t.id = e[r] = e[r] || 0, e[r]++
                            })
                        }

                        function o(t, e, r) {
                            l(t[e], t[r])
                        }

                        function l(t, e) {
                            var r = e.startPTS;
                            if (Object(i.isFiniteNumber)(r)) {
                                var n, s = 0;
                                e.sn > t.sn ? (s = r - t.start, n = t) : (s = t.start - r, n = e), n.duration !== s && (n.duration = s)
                            } else e.sn > t.sn ? t.cc === e.cc && t.minEndPTS ? e.start = t.start + (t.minEndPTS - t.start) : e.start = t.start + t.duration : e.start = Math.max(t.start - e.duration, 0)
                        }

                        function u(t, e, r, s, a, o) {
                            s - r <= 0 && (n.logger.warn("Fragment should have a positive duration", e), s = r + e.duration, o = a + e.duration);
                            var u, c = r,
                                d = s,
                                h = e.startPTS,
                                f = e.endPTS;
                            if (Object(i.isFiniteNumber)(h)) {
                                var g = Math.abs(h - r);
                                Object(i.isFiniteNumber)(e.deltaPTS) ? e.deltaPTS = Math.max(g, e.deltaPTS) : e.deltaPTS = g, c = Math.max(r, h), r = Math.min(r, h), a = Math.min(a, e.startDTS), d = Math.min(s, f), s = Math.max(s, f), o = Math.max(o, e.endDTS)
                            }
                            e.duration = s - r;
                            var v = r - e.start;
                            e.appendedPTS = s, e.start = e.startPTS = r, e.maxStartPTS = c, e.startDTS = a, e.endPTS = s, e.minEndPTS = d, e.endDTS = o;
                            var p = e.sn;
                            if (!t || p < t.startSN || p > t.endSN) return 0;
                            var m = p - t.startSN,
                                y = t.fragments;
                            for (y[m] = e, u = m; u > 0; u--) l(y[u], y[u - 1]);
                            for (u = m; u < y.length - 1; u++) l(y[u], y[u + 1]);
                            return t.fragmentHint && l(y[y.length - 1], t.fragmentHint), t.PTSKnown = t.alignedSliding = !0, v
                        }

                        function c(t, e) {
                            for (var r, s = null, a = t.fragments, o = a.length - 1; o >= 0; o--) {
                                var l = a[o].initSegment;
                                if (l) {
                                    s = l;
                                    break
                                }
                            }
                            t.fragmentHint && delete t.fragmentHint.endPTS;
                            var c = 0;
                            if (h(t, e, function(t, n) {
                                    t.relurl && (c = t.cc - n.cc), Object(i.isFiniteNumber)(t.startPTS) && Object(i.isFiniteNumber)(t.endPTS) && (n.start = n.startPTS = t.startPTS, n.startDTS = t.startDTS, n.appendedPTS = t.appendedPTS, n.maxStartPTS = t.maxStartPTS, n.endPTS = t.endPTS, n.endDTS = t.endDTS, n.minEndPTS = t.minEndPTS, n.duration = t.endPTS - t.startPTS, n.duration && (r = n), e.PTSKnown = e.alignedSliding = !0), n.elementaryStreams = t.elementaryStreams, n.loader = t.loader, n.stats = t.stats, n.urlId = t.urlId, t.initSegment && (n.initSegment = t.initSegment, s = t.initSegment)
                                }), s && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach(function(t) {
                                    var e;
                                    t.initSegment && t.initSegment.relurl !== (null === (e = s) || void 0 === e ? void 0 : e.relurl) || (t.initSegment = s)
                                }), e.skippedSegments && (e.deltaUpdateFailed = e.fragments.some(function(t) {
                                    return !t
                                }), e.deltaUpdateFailed)) {
                                n.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
                                for (var g = e.skippedSegments; g--;) e.fragments.shift();
                                e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc
                            }
                            var v = e.fragments;
                            if (c) {
                                n.logger.warn("discontinuity sliding from playlist, take drift into account");
                                for (var p = 0; p < v.length; p++) v[p].cc += c
                            }
                            e.skippedSegments && (e.startCC = e.fragments[0].cc), d(t.partList, e.partList, function(t, e) {
                                e.elementaryStreams = t.elementaryStreams, e.stats = t.stats
                            }), r ? u(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : f(t, e), v.length && (e.totalduration = e.edge - v[0].start), e.driftStartTime = t.driftStartTime, e.driftStart = t.driftStart;
                            var m = e.advancedDateTime;
                            if (e.advanced && m) {
                                var y = e.edge;
                                e.driftStart || (e.driftStartTime = m, e.driftStart = y), e.driftEndTime = m, e.driftEnd = y
                            } else e.driftEndTime = t.driftEndTime, e.driftEnd = t.driftEnd, e.advancedDateTime = t.advancedDateTime
                        }

                        function d(t, e, r) {
                            if (t && e)
                                for (var i = 0, n = 0, s = t.length; n <= s; n++) {
                                    var a = t[n],
                                        o = e[n + i];
                                    a && o && a.index === o.index && a.fragment.sn === o.fragment.sn ? r(a, o) : i--
                                }
                        }

                        function h(t, e, r) {
                            for (var i = e.skippedSegments, n = Math.max(t.startSN, e.startSN) - e.startSN, s = (t.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(t.endSN, e.endSN)) - e.startSN, a = e.startSN - t.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, u = n; u <= s; u++) {
                                var c = l[a + u],
                                    d = o[u];
                                i && !d && u < i && (d = e.fragments[u] = c), c && d && r(c, d)
                            }
                        }

                        function f(t, e) {
                            var r = e.startSN + e.skippedSegments - t.startSN,
                                i = t.fragments;
                            r < 0 || r >= i.length || g(e, i[r].start)
                        }

                        function g(t, e) {
                            if (e) {
                                for (var r = t.fragments, i = t.skippedSegments; i < r.length; i++) r[i].start += e;
                                t.fragmentHint && (t.fragmentHint.start += e)
                            }
                        }

                        function v(t, e) {
                            var r, i = 1e3 * t.levelTargetDuration,
                                n = i / 2,
                                s = t.age,
                                a = s > 0 && s < 3 * i,
                                o = e.loading.end - e.loading.start,
                                l = t.availabilityDelay;
                            return !1 === t.updated ? a ? (r = Math.max(Math.min(n, 2 * o), 333 * t.misses), t.availabilityDelay = (t.availabilityDelay || 0) + r) : r = n : a ? (l = Math.min(l || i / 2, s), t.availabilityDelay = l, r = l + i - s) : r = i - o, Math.round(r)
                        }

                        function p(t, e, r) {
                            if (!t || !t.details) return null;
                            var i = t.details,
                                n = i.fragments[e - i.startSN];
                            return n || (n = i.fragmentHint) && n.sn === e ? n : e < i.startSN && r && r.sn === e ? r : null
                        }

                        function m(t, e, r) {
                            if (!t || !t.details) return null;
                            var i = t.details.partList;
                            if (i)
                                for (var n = i.length; n--;) {
                                    var s = i[n];
                                    if (s.index === r && s.fragment.sn === e) return s
                                }
                            return null
                        }
                    },
                    "./src/controller/stream-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return m
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/controller/base-stream-controller.ts"),
                            s = r("./src/is-supported.ts"),
                            a = r("./src/events.ts"),
                            o = r("./src/utils/buffer-helper.ts"),
                            l = r("./src/controller/fragment-tracker.ts"),
                            u = r("./src/types/loader.ts"),
                            c = r("./src/loader/fragment.ts"),
                            d = r("./src/demux/transmuxer-interface.ts"),
                            h = r("./src/types/transmuxer.ts"),
                            f = r("./src/controller/gap-controller.ts"),
                            g = r("./src/errors.ts"),
                            v = r("./src/utils/logger.ts");

                        function p(t, e) {
                            return (p = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var m = function(t) {
                            function e(e, r) {
                                var i;
                                return (i = t.call(this, e, r, "[stream-controller]") || this).audioCodecSwap = !1, i.gapController = null, i.level = -1, i._forceStartLoad = !1, i.altAudio = !1, i.audioOnly = !1, i.fragPlaying = null, i.onvplaying = null, i.onvseeked = null, i.fragLastKbps = 0, i.stalled = !1, i.couldBacktrack = !1, i.audioCodecSwitch = !1, i.videoBuffer = null, i._registerListeners(), i
                            }
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, p(e, t);
                            var r, m = e.prototype;
                            return m._registerListeners = function() {
                                    var t = this.hls;
                                    t.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(a.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(a.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.on(a.Events.ERROR, this.onError, this), t.on(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.on(a.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.on(a.Events.BUFFER_CREATED, this.onBufferCreated, this), t.on(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t.on(a.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), t.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                                }, m._unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(a.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), t.off(a.Events.ERROR, this.onError, this), t.off(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), t.off(a.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), t.off(a.Events.BUFFER_CREATED, this.onBufferCreated, this), t.off(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), t.off(a.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), t.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
                                }, m.onHandlerDestroying = function() {
                                    this._unregisterListeners(), this.onMediaDetaching()
                                }, m.startLoad = function(t) {
                                    if (this.levels) {
                                        var e = this.lastCurrentTime,
                                            r = this.hls;
                                        if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                                            var i = r.startLevel; - 1 === i && (r.config.testBandwidth ? (i = 0, this.bitrateTest = !0) : i = r.nextAutoLevel), this.level = r.nextLoadLevel = i, this.loadedmetadata = !1
                                        }
                                        e > 0 && -1 === t && (this.log("Override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = n.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
                                    } else this._forceStartLoad = !0, this.state = n.State.STOPPED
                                }, m.stopLoad = function() {
                                    this._forceStartLoad = !1, t.prototype.stopLoad.call(this)
                                }, m.doTick = function() {
                                    switch (this.state) {
                                        case n.State.IDLE:
                                            this.doTickIdle();
                                            break;
                                        case n.State.WAITING_LEVEL:
                                            var t, e = this.levels,
                                                r = this.level,
                                                i = null == e ? void 0 : null === (t = e[r]) || void 0 === t ? void 0 : t.details;
                                            if (i && (!i.live || this.levelLastLoaded === this.level)) {
                                                if (this.waitForCdnTuneIn(i)) break;
                                                this.state = n.State.IDLE
                                            }
                                            break;
                                        case n.State.FRAG_LOADING_WAITING_RETRY:
                                            var s, a = self.performance.now(),
                                                o = this.retryDate;
                                            (!o || a >= o || null !== (s = this.media) && void 0 !== s && s.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = n.State.IDLE)
                                    }
                                    this.onTickEnd()
                                }, m.onTickEnd = function() {
                                    t.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged()
                                }, m.doTickIdle = function() {
                                    var t, e, r = this.hls,
                                        i = this.levelLastLoaded,
                                        s = this.levels,
                                        o = this.media,
                                        d = r.config,
                                        h = r.nextLoadLevel;
                                    if (null !== i && (o || !this.startFragRequested && d.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && s && s[h]) {
                                        var f = s[h];
                                        this.level = r.nextLoadLevel = h;
                                        var g = f.details;
                                        if (!g || this.state === n.State.WAITING_LEVEL || g.live && this.levelLastLoaded !== h) {
                                            this.state = n.State.WAITING_LEVEL;
                                            return
                                        }
                                        var v = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : o, u.PlaylistLevelType.MAIN);
                                        if (!(null === v || v.len >= this.getMaxBufferLength(f.maxBitrate))) {
                                            if (this._streamEnded(v, g)) {
                                                var p = {};
                                                this.altAudio && (p.type = "video"), this.hls.trigger(a.Events.BUFFER_EOS, p), this.state = n.State.ENDED;
                                                return
                                            }
                                            var m = v.end,
                                                y = this.getNextFragment(m, g);
                                            if (this.couldBacktrack && !this.fragPrevious && y && "initSegment" !== y.sn) {
                                                var E = y.sn - g.startSN;
                                                E > 1 && (y = g.fragments[E - 1], this.fragmentTracker.removeFragment(y))
                                            }
                                            if (y && this.fragmentTracker.getState(y) === l.FragmentState.OK && this.nextLoadPosition > m) {
                                                var T = this.audioOnly && !this.altAudio ? c.ElementaryStreamTypes.AUDIO : c.ElementaryStreamTypes.VIDEO;
                                                this.afterBufferFlushed(o, T, u.PlaylistLevelType.MAIN), y = this.getNextFragment(this.nextLoadPosition, g)
                                            }
                                            y && (!y.initSegment || y.initSegment.data || this.bitrateTest || (y = y.initSegment), (null === (t = y.decryptdata) || void 0 === t ? void 0 : t.keyFormat) !== "identity" || null !== (e = y.decryptdata) && void 0 !== e && e.key ? this.loadFragment(y, g, m) : this.loadKey(y, g))
                                        }
                                    }
                                }, m.loadFragment = function(e, r, i) {
                                    var n, s = this.fragmentTracker.getState(e);
                                    if (this.fragCurrent = e, s === l.FragmentState.BACKTRACKED) {
                                        var a = this.fragmentTracker.getBacktrackData(e);
                                        if (a) {
                                            this._handleFragmentLoadProgress(a), this._handleFragmentLoadComplete(a);
                                            return
                                        }
                                        s = l.FragmentState.NOT_LOADED
                                    }
                                    s === l.FragmentState.NOT_LOADED || s === l.FragmentState.PARTIAL ? "initSegment" === e.sn ? this._loadInitSegment(e) : this.bitrateTest ? (e.bitrateTest = !0, this.log("Fragment " + e.sn + " of level " + e.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(e)) : (this.startFragRequested = !0, t.prototype.loadFragment.call(this, e, r, i)) : s === l.FragmentState.APPENDING ? this.reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e) : (null === (n = this.media) || void 0 === n ? void 0 : n.buffered.length) === 0 && this.fragmentTracker.removeAllFragments()
                                }, m.getAppendedFrag = function(t) {
                                    var e = this.fragmentTracker.getAppendedFrag(t, u.PlaylistLevelType.MAIN);
                                    return e && "fragment" in e ? e.fragment : e
                                }, m.getBufferedFrag = function(t) {
                                    return this.fragmentTracker.getBufferedFrag(t, u.PlaylistLevelType.MAIN)
                                }, m.followingBufferedFrag = function(t) {
                                    return t ? this.getBufferedFrag(t.end + .5) : null
                                }, m.immediateLevelSwitch = function() {
                                    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                                }, m.nextLevelSwitch = function() {
                                    var t = this.levels,
                                        e = this.media;
                                    if (null != e && e.readyState) {
                                        var r, i = this.getAppendedFrag(e.currentTime);
                                        if (i && i.start > 1 && this.flushMainBuffer(0, i.start - 1), !e.paused && t) {
                                            var n = t[this.hls.nextLoadLevel],
                                                s = this.fragLastKbps;
                                            r = s && this.fragCurrent ? this.fragCurrent.duration * n.maxBitrate / (1e3 * s) + 1 : 0
                                        } else r = 0;
                                        var a = this.getBufferedFrag(e.currentTime + r);
                                        if (a) {
                                            var o = this.followingBufferedFrag(a);
                                            if (o) {
                                                this.abortCurrentFrag();
                                                var l = o.maxStartPTS ? o.maxStartPTS : o.start,
                                                    u = o.duration,
                                                    c = Math.max(a.end, l + Math.min(Math.max(u - this.config.maxFragLookUpTolerance, .5 * u), .75 * u));
                                                this.flushMainBuffer(c, Number.POSITIVE_INFINITY)
                                            }
                                        }
                                    }
                                }, m.abortCurrentFrag = function() {
                                    var t = this.fragCurrent;
                                    this.fragCurrent = null, null != t && t.loader && t.loader.abort(), this.state === n.State.KEY_LOADING && (this.state = n.State.IDLE), this.nextLoadPosition = this.getLoadPosition()
                                }, m.flushMainBuffer = function(e, r) {
                                    t.prototype.flushMainBuffer.call(this, e, r, this.altAudio ? "video" : null)
                                }, m.onMediaAttached = function(e, r) {
                                    t.prototype.onMediaAttached.call(this, e, r);
                                    var i = r.media;
                                    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new f.default(this.config, i, this.fragmentTracker, this.hls)
                                }, m.onMediaDetaching = function() {
                                    var e = this.media;
                                    e && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), t.prototype.onMediaDetaching.call(this)
                                }, m.onMediaPlaying = function() {
                                    this.tick()
                                }, m.onMediaSeeked = function() {
                                    var t = this.media,
                                        e = t ? t.currentTime : null;
                                    Object(i.isFiniteNumber)(e) && this.log("Media seeked to " + e.toFixed(3)), this.tick()
                                }, m.onManifestLoading = function() {
                                    this.log("Trigger BUFFER_RESET"), this.hls.trigger(a.Events.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = this.stalled = !1, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null
                                }, m.onManifestParsed = function(t, e) {
                                    var r, i = !1,
                                        n = !1;
                                    e.levels.forEach(function(t) {
                                        (r = t.audioCodec) && (-1 !== r.indexOf("mp4a.40.2") && (i = !0), -1 !== r.indexOf("mp4a.40.5") && (n = !0))
                                    }), this.audioCodecSwitch = i && n && !Object(s.changeTypeSupported)(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = e.levels, this.startFragRequested = !1
                                }, m.onLevelLoading = function(t, e) {
                                    var r = this.levels;
                                    if (r && this.state === n.State.IDLE) {
                                        var i = r[e.level];
                                        (!i.details || i.details.live && this.levelLastLoaded !== e.level || this.waitForCdnTuneIn(i.details)) && (this.state = n.State.WAITING_LEVEL)
                                    }
                                }, m.onLevelLoaded = function(t, e) {
                                    var r, i = this.levels,
                                        s = e.level,
                                        o = e.details,
                                        l = o.totalduration;
                                    if (!i) {
                                        this.warn("Levels were reset while loading level " + s);
                                        return
                                    }
                                    this.log("Level " + s + " loaded [" + o.startSN + "," + o.endSN + "], cc [" + o.startCC + ", " + o.endCC + "] duration:" + l);
                                    var u = this.fragCurrent;
                                    u && (this.state === n.State.FRAG_LOADING || this.state === n.State.FRAG_LOADING_WAITING_RETRY) && u.level !== e.level && u.loader && (this.state = n.State.IDLE, u.loader.abort());
                                    var c = i[s],
                                        d = 0;
                                    if (o.live || null !== (r = c.details) && void 0 !== r && r.live) {
                                        if (o.fragments[0] || (o.deltaUpdateFailed = !0), o.deltaUpdateFailed) return;
                                        d = this.alignPlaylists(o, c.details)
                                    }
                                    if (c.details = o, this.levelLastLoaded = s, this.hls.trigger(a.Events.LEVEL_UPDATED, {
                                            details: o,
                                            level: s
                                        }), this.state === n.State.WAITING_LEVEL) {
                                        if (this.waitForCdnTuneIn(o)) return;
                                        this.state = n.State.IDLE
                                    }
                                    this.startFragRequested ? o.live && this.synchronizeToLiveEdge(o) : this.setStartPosition(o, d), this.tick()
                                }, m._handleFragmentLoadProgress = function(t) {
                                    var e, r = t.frag,
                                        i = t.part,
                                        n = t.payload,
                                        s = this.levels;
                                    if (!s) {
                                        this.warn("Levels were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered");
                                        return
                                    }
                                    var a = s[r.level],
                                        o = a.details;
                                    if (!o) {
                                        this.warn("Dropping fragment " + r.sn + " of level " + r.level + " after level details were reset");
                                        return
                                    }
                                    var l = a.videoCodec,
                                        c = o.PTSKnown || !o.live,
                                        f = null === (e = r.initSegment) || void 0 === e ? void 0 : e.data,
                                        g = this._getAudioCodec(a),
                                        v = this.transmuxer = this.transmuxer || new d.default(this.hls, u.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
                                        p = i ? i.index : -1,
                                        m = new h.ChunkMetadata(r.level, r.sn, r.stats.chunkCount, n.byteLength, p, -1 !== p),
                                        y = this.initPTS[r.cc];
                                    v.push(n, f, g, l, r, i, o.totalduration, c, m, y)
                                }, m.onAudioTrackSwitching = function(t, e) {
                                    var r = this.altAudio,
                                        i = !!e.url,
                                        n = e.id;
                                    if (!i) {
                                        if (this.mediaBuffer !== this.media) {
                                            this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                            var s = this.fragCurrent;
                                            null != s && s.loader && (this.log("Switching to main audio track, cancel main fragment load"), s.loader.abort()), this.resetTransmuxer(), this.resetLoadingState()
                                        } else this.audioOnly && this.resetTransmuxer();
                                        var o = this.hls;
                                        r && o.trigger(a.Events.BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: Number.POSITIVE_INFINITY,
                                            type: "audio"
                                        }), o.trigger(a.Events.AUDIO_TRACK_SWITCHED, {
                                            id: n
                                        })
                                    }
                                }, m.onAudioTrackSwitched = function(t, e) {
                                    var r = e.id,
                                        i = !!this.hls.audioTracks[r].url;
                                    if (i) {
                                        var n = this.videoBuffer;
                                        n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                                    }
                                    this.altAudio = i, this.tick()
                                }, m.onBufferCreated = function(t, e) {
                                    var r, i, n = e.tracks,
                                        s = !1;
                                    for (var a in n) {
                                        var o = n[a];
                                        if ("main" === o.id) {
                                            if (i = a, r = o, "video" === a) {
                                                var l = n[a];
                                                l && (this.videoBuffer = l.buffer)
                                            }
                                        } else s = !0
                                    }
                                    s && r ? (this.log("Alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
                                }, m.onFragBuffered = function(t, e) {
                                    var r = e.frag,
                                        i = e.part;
                                    if (!r || r.type === u.PlaylistLevelType.MAIN) {
                                        if (this.fragContextChanged(r)) {
                                            this.warn("Fragment " + r.sn + (i ? " p: " + i.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state), this.state === n.State.PARSED && (this.state = n.State.IDLE);
                                            return
                                        }
                                        var s = i ? i.stats : r.stats;
                                        this.fragLastKbps = Math.round(8 * s.total / (s.buffering.end - s.loading.first)), "initSegment" !== r.sn && (this.fragPrevious = r), this.fragBufferedComplete(r, i)
                                    }
                                }, m.onError = function(t, e) {
                                    switch (e.details) {
                                        case g.ErrorDetails.FRAG_LOAD_ERROR:
                                        case g.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        case g.ErrorDetails.KEY_LOAD_ERROR:
                                        case g.ErrorDetails.KEY_LOAD_TIMEOUT:
                                            this.onFragmentOrKeyLoadError(u.PlaylistLevelType.MAIN, e);
                                            break;
                                        case g.ErrorDetails.LEVEL_LOAD_ERROR:
                                        case g.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                            this.state === n.State.ERROR || (e.fatal ? (this.warn("" + e.details), this.state = n.State.ERROR) : e.levelRetry || this.state !== n.State.WAITING_LEVEL || (this.state = n.State.IDLE));
                                            break;
                                        case g.ErrorDetails.BUFFER_FULL_ERROR:
                                            if ("main" === e.parent && (this.state === n.State.PARSING || this.state === n.State.PARSED)) {
                                                var r = !0,
                                                    i = this.getFwdBufferInfo(this.media, u.PlaylistLevelType.MAIN);
                                                i && i.len > .5 && (r = !this.reduceMaxBufferLength(i.len)), r && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState()
                                            }
                                    }
                                }, m.checkBuffer = function() {
                                    var t = this.media,
                                        e = this.gapController;
                                    if (t && e && t.readyState) {
                                        var r = o.BufferHelper.getBuffered(t);
                                        !this.loadedmetadata && r.length ? (this.loadedmetadata = !0, this.seekToStartPos()) : e.poll(this.lastCurrentTime), this.lastCurrentTime = t.currentTime
                                    }
                                }, m.onFragLoadEmergencyAborted = function() {
                                    this.state = n.State.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
                                }, m.onBufferFlushed = function(t, e) {
                                    var r = e.type;
                                    if (r !== c.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
                                        var i = (r === c.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
                                        this.afterBufferFlushed(i, r, u.PlaylistLevelType.MAIN)
                                    }
                                }, m.onLevelsUpdated = function(t, e) {
                                    this.levels = e.levels
                                }, m.swapAudioCodec = function() {
                                    this.audioCodecSwap = !this.audioCodecSwap
                                }, m.seekToStartPos = function() {
                                    var t = this.media,
                                        e = t.currentTime,
                                        r = this.startPosition;
                                    if (r >= 0 && e < r) {
                                        if (t.seeking) {
                                            v.logger.log("could not seek to " + r + ", already seeking at " + e);
                                            return
                                        }
                                        var i = o.BufferHelper.getBuffered(t),
                                            n = (i.length ? i.start(0) : 0) - r;
                                        n > 0 && (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) && (v.logger.log("adjusting start position by " + n + " to match buffer start"), r += n, this.startPosition = r), this.log("seek to target start position " + r + " from current time " + e), t.currentTime = r
                                    }
                                }, m._getAudioCodec = function(t) {
                                    var e = this.config.defaultAudioCodec || t.audioCodec;
                                    return this.audioCodecSwap && e && (this.log("Swapping audio codec"), e = -1 !== e.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), e
                                }, m._loadBitrateTestFrag = function(t) {
                                    var e = this;
                                    this._doFragLoad(t).then(function(r) {
                                        var i = e.hls;
                                        if (!(!r || i.nextLoadLevel || e.fragContextChanged(t))) {
                                            e.fragLoadError = 0, e.state = n.State.IDLE, e.startFragRequested = !1, e.bitrateTest = !1;
                                            var s = t.stats;
                                            s.parsing.start = s.parsing.end = s.buffering.start = s.buffering.end = self.performance.now(), i.trigger(a.Events.FRAG_LOADED, r)
                                        }
                                    })
                                }, m._handleTransmuxComplete = function(t) {
                                    var e, r = "main",
                                        s = this.hls,
                                        o = t.remuxResult,
                                        l = t.chunkMeta,
                                        u = this.getCurrentContext(l);
                                    if (!u) {
                                        this.warn("The loading context changed while buffering fragment " + l.sn + " of level " + l.level + ". This chunk will not be buffered."), this.resetLiveStartWhenNotLoaded(l.level);
                                        return
                                    }
                                    var d = u.frag,
                                        h = u.part,
                                        f = u.level,
                                        g = o.video,
                                        v = o.text,
                                        p = o.id3,
                                        m = o.initSegment,
                                        y = this.altAudio ? void 0 : o.audio;
                                    if (!this.fragContextChanged(d)) {
                                        if (this.state = n.State.PARSING, m) {
                                            m.tracks && (this._bufferInitSegment(f, m.tracks, d, l), s.trigger(a.Events.FRAG_PARSING_INIT_SEGMENT, {
                                                frag: d,
                                                id: r,
                                                tracks: m.tracks
                                            }));
                                            var E = m.initPTS,
                                                T = m.timescale;
                                            Object(i.isFiniteNumber)(E) && (this.initPTS[d.cc] = E, s.trigger(a.Events.INIT_PTS_FOUND, {
                                                frag: d,
                                                id: r,
                                                initPTS: E,
                                                timescale: T
                                            }))
                                        }
                                        if (g && !1 !== o.independent) {
                                            if (f.details) {
                                                var S = g.startPTS,
                                                    b = g.endPTS,
                                                    L = g.startDTS,
                                                    A = g.endDTS;
                                                if (h) h.elementaryStreams[g.type] = {
                                                    startPTS: S,
                                                    endPTS: b,
                                                    startDTS: L,
                                                    endDTS: A
                                                };
                                                else if (g.firstKeyFrame && g.independent && (this.couldBacktrack = !0), g.dropped && g.independent) {
                                                    if (this.getLoadPosition() + this.config.maxBufferHole < S) {
                                                        this.backtrack(d);
                                                        return
                                                    }
                                                    d.setElementaryStreamInfo(g.type, d.start, b, d.start, A, !0)
                                                }
                                                d.setElementaryStreamInfo(g.type, S, b, L, A), this.bufferFragmentData(g, d, h, l)
                                            }
                                        } else if (!1 === o.independent) {
                                            this.backtrack(d);
                                            return
                                        }
                                        if (y) {
                                            var D = y.startPTS,
                                                R = y.endPTS,
                                                k = y.startDTS,
                                                _ = y.endDTS;
                                            h && (h.elementaryStreams[c.ElementaryStreamTypes.AUDIO] = {
                                                startPTS: D,
                                                endPTS: R,
                                                startDTS: k,
                                                endDTS: _
                                            }), d.setElementaryStreamInfo(c.ElementaryStreamTypes.AUDIO, D, R, k, _), this.bufferFragmentData(y, d, h, l)
                                        }
                                        if (null != p && null !== (e = p.samples) && void 0 !== e && e.length) {
                                            var I = {
                                                frag: d,
                                                id: r,
                                                samples: p.samples
                                            };
                                            s.trigger(a.Events.FRAG_PARSING_METADATA, I)
                                        }
                                        if (v) {
                                            var C = {
                                                frag: d,
                                                id: r,
                                                samples: v.samples
                                            };
                                            s.trigger(a.Events.FRAG_PARSING_USERDATA, C)
                                        }
                                    }
                                }, m._bufferInitSegment = function(t, e, r, i) {
                                    var s = this;
                                    if (this.state === n.State.PARSING) {
                                        this.audioOnly = !!e.audio && !e.video, this.altAudio && !this.audioOnly && delete e.audio;
                                        var o = e.audio,
                                            l = e.video,
                                            u = e.audiovideo;
                                        if (o) {
                                            var c = t.audioCodec,
                                                d = navigator.userAgent.toLowerCase();
                                            this.audioCodecSwitch && (c && (c = -1 !== c.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== o.metadata.channelCount && -1 === d.indexOf("firefox") && (c = "mp4a.40.5")), -1 !== d.indexOf("android") && "audio/mpeg" !== o.container && (c = "mp4a.40.2", this.log("Android: force audio codec to " + c)), t.audioCodec && t.audioCodec !== c && this.log('Swapping manifest audio codec "' + t.audioCodec + '" for "' + c + '"'), o.levelCodec = c, o.id = "main", this.log("Init audio buffer, container:" + o.container + ", codecs[selected/level/parsed]=[" + (c || "") + "/" + (t.audioCodec || "") + "/" + o.codec + "]")
                                        }
                                        l && (l.levelCodec = t.videoCodec, l.id = "main", this.log("Init video buffer, container:" + l.container + ", codecs[level/parsed]=[" + (t.videoCodec || "") + "/" + l.codec + "]")), u && this.log("Init audiovideo buffer, container:" + u.container + ", codecs[level/parsed]=[" + (t.attrs.CODECS || "") + "/" + u.codec + "]"), this.hls.trigger(a.Events.BUFFER_CODECS, e), Object.keys(e).forEach(function(t) {
                                            var n = e[t].initSegment;
                                            null != n && n.byteLength && s.hls.trigger(a.Events.BUFFER_APPENDING, {
                                                type: t,
                                                data: n,
                                                frag: r,
                                                part: null,
                                                chunkMeta: i,
                                                parent: r.type
                                            })
                                        }), this.tick()
                                    }
                                }, m.backtrack = function(t) {
                                    this.couldBacktrack = !0, this.resetTransmuxer(), this.flushBufferGap(t);
                                    var e = this.fragmentTracker.backtrack(t);
                                    this.fragPrevious = null, this.nextLoadPosition = t.start, e ? this.resetFragmentLoading(t) : this.state = n.State.BACKTRACKING
                                }, m.checkFragmentChanged = function() {
                                    var t = this.media,
                                        e = null;
                                    if (t && t.readyState > 1 && !1 === t.seeking) {
                                        var r = t.currentTime;
                                        if (o.BufferHelper.isBuffered(t, r) ? e = this.getAppendedFrag(r) : o.BufferHelper.isBuffered(t, r + .1) && (e = this.getAppendedFrag(r + .1)), e) {
                                            var i = this.fragPlaying,
                                                n = e.level;
                                            i && e.sn === i.sn && i.level === n && e.urlId === i.urlId || (this.hls.trigger(a.Events.FRAG_CHANGED, {
                                                frag: e
                                            }), i && i.level === n || this.hls.trigger(a.Events.LEVEL_SWITCHED, {
                                                level: n
                                            }), this.fragPlaying = e)
                                        }
                                    }
                                }, r = [{
                                    key: "nextLevel",
                                    get: function() {
                                        var t = this.nextBufferedFrag;
                                        return t ? t.level : -1
                                    }
                                }, {
                                    key: "currentLevel",
                                    get: function() {
                                        var t = this.media;
                                        if (t) {
                                            var e = this.getAppendedFrag(t.currentTime);
                                            if (e) return e.level
                                        }
                                        return -1
                                    }
                                }, {
                                    key: "nextBufferedFrag",
                                    get: function() {
                                        var t = this.media;
                                        if (!t) return null;
                                        var e = this.getAppendedFrag(t.currentTime);
                                        return this.followingBufferedFrag(e)
                                    }
                                }, {
                                    key: "forceStartLoad",
                                    get: function() {
                                        return this._forceStartLoad
                                    }
                                }],
                                function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(e.prototype, r), e
                        }(n.default)
                    },
                    "./src/controller/subtitle-stream-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "SubtitleStreamController", function() {
                            return g
                        });
                        var i = r("./src/events.ts"),
                            n = r("./src/utils/logger.ts"),
                            s = r("./src/utils/buffer-helper.ts"),
                            a = r("./src/controller/fragment-finders.ts"),
                            o = r("./src/utils/discontinuities.ts"),
                            l = r("./src/controller/level-helper.ts"),
                            u = r("./src/controller/fragment-tracker.ts"),
                            c = r("./src/controller/base-stream-controller.ts"),
                            d = r("./src/types/loader.ts"),
                            h = r("./src/types/level.ts");

                        function f(t, e) {
                            return (f = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var g = function(t) {
                            function e(e, r) {
                                var i;
                                return (i = t.call(this, e, r, "[subtitle-stream-controller]") || this).levels = [], i.currentTrackId = -1, i.tracksBuffered = [], i.mainDetails = null, i._registerListeners(), i
                            }
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, f(e, t);
                            var r, g = e.prototype;
                            return g.onHandlerDestroying = function() {
                                    this._unregisterListeners(), this.mainDetails = null
                                }, g._registerListeners = function() {
                                    var t = this.hls;
                                    t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(i.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.on(i.Events.ERROR, this.onError, this), t.on(i.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(i.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.on(i.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(i.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.on(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                                }, g._unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(i.Events.LEVEL_LOADED, this.onLevelLoaded, this), t.off(i.Events.ERROR, this.onError, this), t.off(i.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(i.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), t.off(i.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(i.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), t.off(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                                }, g.startLoad = function() {
                                    this.stopLoad(), this.state = c.State.IDLE, this.setInterval(500), this.tick()
                                }, g.onManifestLoading = function() {
                                    this.mainDetails = null, this.fragmentTracker.removeAllFragments()
                                }, g.onLevelLoaded = function(t, e) {
                                    this.mainDetails = e.details
                                }, g.onSubtitleFragProcessed = function(t, e) {
                                    var r, i = e.frag,
                                        n = e.success;
                                    if (this.fragPrevious = i, this.state = c.State.IDLE, n) {
                                        var s = this.tracksBuffered[this.currentTrackId];
                                        if (s) {
                                            for (var a = i.start, o = 0; o < s.length; o++)
                                                if (a >= s[o].start && a <= s[o].end) {
                                                    r = s[o];
                                                    break
                                                }
                                            var l = i.start + i.duration;
                                            r ? r.end = l : (r = {
                                                start: a,
                                                end: l
                                            }, s.push(r)), this.fragmentTracker.fragBuffered(i)
                                        }
                                    }
                                }, g.onBufferFlushing = function(t, e) {
                                    var r = e.startOffset,
                                        i = e.endOffset;
                                    if (0 === r && i !== Number.POSITIVE_INFINITY) {
                                        var n = this.currentTrackId,
                                            s = this.levels;
                                        if (!s.length || !s[n] || !s[n].details) return;
                                        var a = i - s[n].details.targetduration;
                                        if (a <= 0) return;
                                        e.endOffsetSubtitles = Math.max(0, a), this.tracksBuffered.forEach(function(t) {
                                            for (var e = 0; e < t.length;) {
                                                if (t[e].end <= a) {
                                                    t.shift();
                                                    continue
                                                }
                                                if (t[e].start < a) t[e].start = a;
                                                else break;
                                                e++
                                            }
                                        }), this.fragmentTracker.removeFragmentsInRange(r, a, d.PlaylistLevelType.SUBTITLE)
                                    }
                                }, g.onError = function(t, e) {
                                    var r, i = e.frag;
                                    i && i.type === d.PlaylistLevelType.SUBTITLE && (null !== (r = this.fragCurrent) && void 0 !== r && r.loader && this.fragCurrent.loader.abort(), this.state = c.State.IDLE)
                                }, g.onSubtitleTracksUpdated = function(t, e) {
                                    var r = this,
                                        i = e.subtitleTracks;
                                    this.tracksBuffered = [], this.levels = i.map(function(t) {
                                        return new h.Level(t)
                                    }), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach(function(t) {
                                        r.tracksBuffered[t.id] = []
                                    }), this.mediaBuffer = null
                                }, g.onSubtitleTrackSwitch = function(t, e) {
                                    if (this.currentTrackId = e.id, !this.levels.length || -1 === this.currentTrackId) {
                                        this.clearInterval();
                                        return
                                    }
                                    var r = this.levels[this.currentTrackId];
                                    null != r && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r && this.setInterval(500)
                                }, g.onSubtitleTrackLoaded = function(t, e) {
                                    var r, i = e.details,
                                        n = e.id,
                                        s = this.currentTrackId,
                                        u = this.levels;
                                    if (u.length) {
                                        var d = u[s];
                                        if (!(n >= u.length) && n === s && d) {
                                            if (this.mediaBuffer = this.mediaBufferTimeRanges, i.live || null !== (r = d.details) && void 0 !== r && r.live) {
                                                var h = this.mainDetails;
                                                if (i.deltaUpdateFailed || !h) return;
                                                var f = h.fragments[0];
                                                d.details ? 0 === this.alignPlaylists(i, d.details) && f && Object(l.addSliding)(i, f.start) : i.hasProgramDateTime && h.hasProgramDateTime ? Object(o.alignMediaPlaylistByPDT)(i, h) : f && Object(l.addSliding)(i, f.start)
                                            }
                                            d.details = i, this.levelLastLoaded = n, this.tick(), i.live && !this.fragCurrent && this.media && this.state === c.State.IDLE && !Object(a.findFragmentByPTS)(null, i.fragments, this.media.currentTime, 0) && (this.warn("Subtitle playlist not aligned with playback"), d.details = void 0)
                                        }
                                    }
                                }, g._handleFragmentLoadComplete = function(t) {
                                    var e = t.frag,
                                        r = t.payload,
                                        n = e.decryptdata,
                                        s = this.hls;
                                    if (!this.fragContextChanged(e) && r && r.byteLength > 0 && n && n.key && n.iv && "AES-128" === n.method) {
                                        var a = performance.now();
                                        this.decrypter.webCryptoDecrypt(new Uint8Array(r), n.key.buffer, n.iv.buffer).then(function(t) {
                                            var r = performance.now();
                                            s.trigger(i.Events.FRAG_DECRYPTED, {
                                                frag: e,
                                                payload: t,
                                                stats: {
                                                    tstart: a,
                                                    tdecrypt: r
                                                }
                                            })
                                        })
                                    }
                                }, g.doTick = function() {
                                    if (!this.media) {
                                        this.state = c.State.IDLE;
                                        return
                                    }
                                    if (this.state === c.State.IDLE) {
                                        var t, e, r = this.currentTrackId,
                                            o = this.levels;
                                        if (!o.length || !o[r] || !o[r].details) return;
                                        var l = o[r].details,
                                            d = l.targetduration,
                                            h = this.config,
                                            f = this.media,
                                            g = s.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, f.currentTime - d, h.maxBufferHole),
                                            v = g.end;
                                        if (g.len > this.getMaxBufferLength() + d) return;
                                        console.assert(l, "Subtitle track details are defined on idle subtitle stream controller tick");
                                        var p = l.fragments,
                                            m = p.length,
                                            y = l.edge,
                                            E = this.fragPrevious;
                                        if (v < y) {
                                            var T = h.maxFragLookUpTolerance;
                                            (e = Object(a.findFragmentByPTS)(E, p, v, T)) || !E || !(E.start < p[0].start) || (e = p[0])
                                        } else e = p[m - 1];
                                        null !== (t = e) && void 0 !== t && t.encrypted ? (n.logger.log("Loading key for " + e.sn), this.state = c.State.KEY_LOADING, this.hls.trigger(i.Events.KEY_LOADING, {
                                            frag: e
                                        })) : e && this.fragmentTracker.getState(e) === u.FragmentState.NOT_LOADED && this.loadFragment(e, l, v)
                                    }
                                }, g.loadFragment = function(e, r, i) {
                                    this.fragCurrent = e, t.prototype.loadFragment.call(this, e, r, i)
                                }, r = [{
                                    key: "mediaBufferTimeRanges",
                                    get: function() {
                                        return this.tracksBuffered[this.currentTrackId] || []
                                    }
                                }],
                                function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(e.prototype, r), e
                        }(c.default)
                    },
                    "./src/controller/subtitle-track-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/events.ts"),
                            n = r("./src/utils/texttrack-utils.ts"),
                            s = r("./src/controller/base-playlist-controller.ts"),
                            a = r("./src/types/loader.ts");

                        function o(t, e) {
                            return (o = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var l = function(t) {
                            function e(e) {
                                var r;
                                return (r = t.call(this, e, "[subtitle-track-controller]") || this).media = null, r.tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.selectDefaultTrack = !0, r.queuedDefaultTrack = -1, r.trackChangeListener = function() {
                                    return r.onTextTracksChanged()
                                }, r.asyncPollTrackChange = function() {
                                    return r.pollTrackChange(0)
                                }, r.useTextTrackPolling = !1, r.subtitlePollingInterval = -1, r.subtitleDisplay = !0, r.registerListeners(), r
                            }
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t);
                            var r, s = e.prototype;
                            return s.destroy = function() {
                                    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, t.prototype.destroy.call(this)
                                }, s.registerListeners = function() {
                                    var t = this.hls;
                                    t.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(i.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(i.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(i.Events.ERROR, this.onError, this)
                                }, s.unregisterListeners = function() {
                                    var t = this.hls;
                                    t.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(i.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(i.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(i.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(i.Events.ERROR, this.onError, this)
                                }, s.onMediaAttached = function(t, e) {
                                    this.media = e.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
                                }, s.pollTrackChange = function(t) {
                                    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t)
                                }, s.onMediaDetaching = function() {
                                    this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), u(this.media.textTracks).forEach(function(t) {
                                        Object(n.clearCurrentCues)(t)
                                    }), this.subtitleTrack = -1, this.media = null)
                                }, s.onManifestLoading = function() {
                                    this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
                                }, s.onManifestParsed = function(t, e) {
                                    this.tracks = e.subtitleTracks
                                }, s.onSubtitleTrackLoaded = function(t, e) {
                                    var r = e.id,
                                        i = e.details,
                                        n = this.trackId,
                                        s = this.tracksInGroup[n];
                                    if (!s) {
                                        this.warn("Invalid subtitle track id " + r);
                                        return
                                    }
                                    var a = s.details;
                                    s.details = e.details, this.log("subtitle track " + r + " loaded [" + i.startSN + "-" + i.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, e, a))
                                }, s.onLevelLoading = function(t, e) {
                                    this.switchLevel(e.level)
                                }, s.onLevelSwitching = function(t, e) {
                                    this.switchLevel(e.level)
                                }, s.switchLevel = function(t) {
                                    var e = this.hls.levels[t];
                                    if (null != e && e.textGroupIds) {
                                        var r = e.textGroupIds[e.urlId];
                                        if (this.groupId !== r) {
                                            var n = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
                                                s = this.tracks.filter(function(t) {
                                                    return !r || t.groupId === r
                                                });
                                            this.tracksInGroup = s;
                                            var a = this.findTrackId(null == n ? void 0 : n.name) || this.findTrackId();
                                            this.groupId = r, this.log("Updating subtitle tracks, " + s.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(i.Events.SUBTITLE_TRACKS_UPDATED, {
                                                subtitleTracks: s
                                            }), -1 !== a && this.setSubtitleTrack(a, n)
                                        }
                                    }
                                }, s.findTrackId = function(t) {
                                    for (var e = this.tracksInGroup, r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        if ((!this.selectDefaultTrack || i.default) && (!t || t === i.name)) return i.id
                                    }
                                    return -1
                                }, s.onError = function(e, r) {
                                    t.prototype.onError.call(this, e, r), !r.fatal && r.context && r.context.type === a.PlaylistContextType.SUBTITLE_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
                                }, s.loadPlaylist = function(t) {
                                    var e = this.tracksInGroup[this.trackId];
                                    if (this.shouldLoadTrack(e)) {
                                        var r = e.id,
                                            n = e.groupId,
                                            s = e.url;
                                        if (t) try {
                                            s = t.addDirectives(s)
                                        } catch (t) {
                                            this.warn("Could not construct new URL with HLS Delivery Directives: " + t)
                                        }
                                        this.log("Loading subtitle playlist for id " + r), this.hls.trigger(i.Events.SUBTITLE_TRACK_LOADING, {
                                            url: s,
                                            id: r,
                                            groupId: n,
                                            deliveryDirectives: t || null
                                        })
                                    }
                                }, s.toggleTrackModes = function(t) {
                                    var e = this,
                                        r = this.media,
                                        i = this.subtitleDisplay,
                                        n = this.trackId;
                                    if (r) {
                                        var s = u(r.textTracks),
                                            a = s.filter(function(t) {
                                                return t.groupId === e.groupId
                                            });
                                        if (-1 === t)[].slice.call(s).forEach(function(t) {
                                            t.mode = "disabled"
                                        });
                                        else {
                                            var o = a[n];
                                            o && (o.mode = "disabled")
                                        }
                                        var l = a[t];
                                        l && (l.mode = i ? "showing" : "hidden")
                                    }
                                }, s.setSubtitleTrack = function(t, e) {
                                    var r, n = this.tracksInGroup;
                                    if (!this.media) {
                                        this.queuedDefaultTrack = t;
                                        return
                                    }
                                    if (this.trackId !== t && this.toggleTrackModes(t), (this.trackId !== t || -1 !== t && (null === (r = n[t]) || void 0 === r || !r.details)) && !(t < -1) && !(t >= n.length)) {
                                        this.clearTimer();
                                        var s = n[t];
                                        if (this.log("Switching to subtitle track " + t), this.trackId = t, s) {
                                            var a = s.id,
                                                o = s.groupId,
                                                l = s.name,
                                                u = s.type,
                                                c = s.url;
                                            this.hls.trigger(i.Events.SUBTITLE_TRACK_SWITCH, {
                                                id: a,
                                                groupId: void 0 === o ? "" : o,
                                                name: l,
                                                type: u,
                                                url: c
                                            });
                                            var d = this.switchParams(s.url, null == e ? void 0 : e.details);
                                            this.loadPlaylist(d)
                                        } else this.hls.trigger(i.Events.SUBTITLE_TRACK_SWITCH, {
                                            id: t
                                        })
                                    }
                                }, s.onTextTracksChanged = function() {
                                    if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
                                        for (var t = -1, e = u(this.media.textTracks), r = 0; r < e.length; r++)
                                            if ("hidden" === e[r].mode) t = r;
                                            else if ("showing" === e[r].mode) {
                                            t = r;
                                            break
                                        }
                                        this.subtitleTrack !== t && (this.subtitleTrack = t)
                                    }
                                }, r = [{
                                    key: "subtitleTracks",
                                    get: function() {
                                        return this.tracksInGroup
                                    }
                                }, {
                                    key: "subtitleTrack",
                                    get: function() {
                                        return this.trackId
                                    },
                                    set: function(t) {
                                        this.selectDefaultTrack = !1;
                                        var e = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
                                        this.setSubtitleTrack(t, e)
                                    }
                                }],
                                function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(e.prototype, r), e
                        }(s.default);

                        function u(t) {
                            for (var e = [], r = 0; r < t.length; r++) {
                                var i = t[r];
                                "subtitles" === i.kind && i.label && e.push(t[r])
                            }
                            return e
                        }
                        e.default = l
                    },
                    "./src/controller/timeline-controller.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "TimelineController", function() {
                            return h
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/events.ts"),
                            s = r("./src/utils/cea-608-parser.ts"),
                            a = r("./src/utils/output-filter.ts"),
                            o = r("./src/utils/webvtt-parser.ts"),
                            l = r("./src/utils/texttrack-utils.ts"),
                            u = r("./src/utils/imsc1-ttml-parser.ts"),
                            c = r("./src/types/loader.ts"),
                            d = r("./src/utils/logger.ts"),
                            h = function() {
                                function t(t) {
                                    if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = f(), this.captionsProperties = void 0, this.hls = t, this.config = t.config, this.Cues = t.config.cueHandler, this.captionsProperties = {
                                            textTrack1: {
                                                label: this.config.captionsTextTrack1Label,
                                                languageCode: this.config.captionsTextTrack1LanguageCode
                                            },
                                            textTrack2: {
                                                label: this.config.captionsTextTrack2Label,
                                                languageCode: this.config.captionsTextTrack2LanguageCode
                                            },
                                            textTrack3: {
                                                label: this.config.captionsTextTrack3Label,
                                                languageCode: this.config.captionsTextTrack3LanguageCode
                                            },
                                            textTrack4: {
                                                label: this.config.captionsTextTrack4Label,
                                                languageCode: this.config.captionsTextTrack4LanguageCode
                                            }
                                        }, this.config.enableCEA708Captions) {
                                        var e = new a.default(this, "textTrack1"),
                                            r = new a.default(this, "textTrack2"),
                                            i = new a.default(this, "textTrack3"),
                                            o = new a.default(this, "textTrack4");
                                        this.cea608Parser1 = new s.default(1, e, r), this.cea608Parser2 = new s.default(3, i, o)
                                    }
                                    t.on(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.on(n.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.on(n.Events.FRAG_LOADING, this.onFragLoading, this), t.on(n.Events.FRAG_LOADED, this.onFragLoaded, this), t.on(n.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.on(n.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), t.on(n.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.on(n.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    var t = this.hls;
                                    t.off(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(n.Events.MANIFEST_LOADED, this.onManifestLoaded, this), t.off(n.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), t.off(n.Events.FRAG_LOADING, this.onFragLoading, this), t.off(n.Events.FRAG_LOADED, this.onFragLoaded, this), t.off(n.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), t.off(n.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), t.off(n.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), t.off(n.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), t.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
                                }, e.addCues = function(t, e, r, i, s) {
                                    for (var a = !1, o = s.length; o--;) {
                                        var l, u = s[o],
                                            c = (l = u[0], Math.min(u[1], r) - Math.max(l, e));
                                        if (c >= 0 && (u[0] = Math.min(u[0], e), u[1] = Math.max(u[1], r), a = !0, c / (r - e) > .5)) return
                                    }
                                    if (a || s.push([e, r]), this.config.renderTextTracksNatively) {
                                        var d = this.captionsTracks[t];
                                        this.Cues.newCue(d, e, r, i)
                                    } else {
                                        var h = this.Cues.newCue(null, e, r, i);
                                        this.hls.trigger(n.Events.CUES_PARSED, {
                                            type: "captions",
                                            cues: h,
                                            track: t
                                        })
                                    }
                                }, e.onInitPtsFound = function(t, e) {
                                    var r = this,
                                        i = e.frag,
                                        s = e.id,
                                        a = e.initPTS,
                                        o = e.timescale,
                                        l = this.unparsedVttFrags;
                                    "main" === s && (this.initPTS[i.cc] = a, this.timescale[i.cc] = o), l.length && (this.unparsedVttFrags = [], l.forEach(function(t) {
                                        r.onFragLoaded(n.Events.FRAG_LOADED, t)
                                    }))
                                }, e.getExistingTrack = function(t) {
                                    var e = this.media;
                                    if (e)
                                        for (var r = 0; r < e.textTracks.length; r++) {
                                            var i = e.textTracks[r];
                                            if (i[t]) return i
                                        }
                                    return null
                                }, e.createCaptionsTrack = function(t) {
                                    this.config.renderTextTracksNatively ? this.createNativeTrack(t) : this.createNonNativeTrack(t)
                                }, e.createNativeTrack = function(t) {
                                    if (!this.captionsTracks[t]) {
                                        var e = this.captionsProperties,
                                            r = this.captionsTracks,
                                            i = this.media,
                                            n = e[t],
                                            s = n.label,
                                            a = n.languageCode,
                                            o = this.getExistingTrack(t);
                                        if (o) r[t] = o, Object(l.clearCurrentCues)(r[t]), Object(l.sendAddTrackEvent)(r[t], i);
                                        else {
                                            var u = this.createTextTrack("captions", s, a);
                                            u && (u[t] = !0, r[t] = u)
                                        }
                                    }
                                }, e.createNonNativeTrack = function(t) {
                                    if (!this.nonNativeCaptionsTracks[t]) {
                                        var e = this.captionsProperties[t];
                                        if (e) {
                                            var r = {
                                                _id: t,
                                                label: e.label,
                                                kind: "captions",
                                                default: !!e.media && !!e.media.default,
                                                closedCaptions: e.media
                                            };
                                            this.nonNativeCaptionsTracks[t] = r, this.hls.trigger(n.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                                tracks: [r]
                                            })
                                        }
                                    }
                                }, e.createTextTrack = function(t, e, r) {
                                    var i = this.media;
                                    if (i) return i.addTextTrack(t, e, r)
                                }, e.onMediaAttaching = function(t, e) {
                                    this.media = e.media, this._cleanTracks()
                                }, e.onMediaDetaching = function() {
                                    var t = this.captionsTracks;
                                    Object.keys(t).forEach(function(e) {
                                        Object(l.clearCurrentCues)(t[e]), delete t[e]
                                    }), this.nonNativeCaptionsTracks = {}
                                }, e.onManifestLoading = function() {
                                    this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = f(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
                                }, e._cleanTracks = function() {
                                    var t = this.media;
                                    if (t) {
                                        var e = t.textTracks;
                                        if (e)
                                            for (var r = 0; r < e.length; r++) Object(l.clearCurrentCues)(e[r])
                                    }
                                }, e.onSubtitleTracksUpdated = function(t, e) {
                                    var r = this;
                                    this.textTracks = [];
                                    var i = e.subtitleTracks || [],
                                        s = i.some(function(t) {
                                            return t.textCodec === u.IMSC1_CODEC
                                        });
                                    if (this.config.enableWebVTT || s && this.config.enableIMSC1) {
                                        var a = this.tracks && i && this.tracks.length === i.length;
                                        if (this.tracks = i || [], this.config.renderTextTracksNatively) {
                                            var o = this.media ? this.media.textTracks : [];
                                            this.tracks.forEach(function(t, e) {
                                                var i;
                                                if (e < o.length) {
                                                    for (var n, s = null, a = 0; a < o.length; a++)
                                                        if ((n = o[a]) && n.label === t.name && !(n.textTrack1 || n.textTrack2)) {
                                                            s = o[a];
                                                            break
                                                        }
                                                    s && (i = s)
                                                }
                                                i ? Object(l.clearCurrentCues)(i) : (i = r.createTextTrack("subtitles", t.name, t.lang)) && (i.mode = "disabled"), i && (i.groupId = t.groupId, r.textTracks.push(i))
                                            })
                                        } else if (!a && this.tracks && this.tracks.length) {
                                            var c = this.tracks.map(function(t) {
                                                return {
                                                    label: t.name,
                                                    kind: t.type.toLowerCase(),
                                                    default: t.default,
                                                    subtitleTrack: t
                                                }
                                            });
                                            this.hls.trigger(n.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                                tracks: c
                                            })
                                        }
                                    }
                                }, e.onManifestLoaded = function(t, e) {
                                    var r = this;
                                    this.config.enableCEA708Captions && e.captions && e.captions.forEach(function(t) {
                                        var e = /(?:CC|SERVICE)([1-4])/.exec(t.instreamId);
                                        if (e) {
                                            var i = "textTrack" + e[1],
                                                n = r.captionsProperties[i];
                                            n && (n.label = t.name, t.lang && (n.languageCode = t.lang), n.media = t)
                                        }
                                    })
                                }, e.onFragLoading = function(t, e) {
                                    var r = this.cea608Parser1,
                                        i = this.cea608Parser2,
                                        n = this.lastSn,
                                        s = this.lastPartIndex;
                                    if (this.enabled && r && i && e.frag.type === c.PlaylistLevelType.MAIN) {
                                        var a, o, l = e.frag.sn,
                                            u = null != (a = null == e ? void 0 : null === (o = e.part) || void 0 === o ? void 0 : o.index) ? a : -1;
                                        l === n + 1 || l === n && u === s + 1 || (r.reset(), i.reset()), this.lastSn = l, this.lastPartIndex = u
                                    }
                                }, e.onFragLoaded = function(t, e) {
                                    var r = e.frag,
                                        s = e.payload,
                                        a = this.initPTS,
                                        o = this.unparsedVttFrags;
                                    if (r.type === c.PlaylistLevelType.SUBTITLE) {
                                        if (s.byteLength) {
                                            if (!Object(i.isFiniteNumber)(a[r.cc])) {
                                                o.push(e), a.length && this.hls.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                                                    success: !1,
                                                    frag: r,
                                                    error: Error("Missing initial subtitle PTS")
                                                });
                                                return
                                            }
                                            var l = r.decryptdata;
                                            if (null == l || null == l.key || "AES-128" !== l.method) {
                                                var d = this.tracks[r.level],
                                                    h = this.vttCCs;
                                                h[r.cc] || (h[r.cc] = {
                                                    start: r.start,
                                                    prevCC: this.prevCC,
                                                    new: !0
                                                }, this.prevCC = r.cc), d && d.textCodec === u.IMSC1_CODEC ? this._parseIMSC1(r, s) : this._parseVTTs(r, s, h)
                                            }
                                        } else this.hls.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !1,
                                            frag: r,
                                            error: Error("Empty subtitle payload")
                                        })
                                    }
                                }, e._parseIMSC1 = function(t, e) {
                                    var r = this,
                                        i = this.hls;
                                    Object(u.parseIMSC1)(e, this.initPTS[t.cc], this.timescale[t.cc], function(e) {
                                        r._appendCues(e, t.level), i.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !0,
                                            frag: t
                                        })
                                    }, function(e) {
                                        d.logger.log("Failed to parse IMSC1: " + e), i.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !1,
                                            frag: t,
                                            error: e
                                        })
                                    })
                                }, e._parseVTTs = function(t, e, r) {
                                    var i = this,
                                        s = this.hls;
                                    Object(o.parseWebVTT)(e, this.initPTS[t.cc], this.timescale[t.cc], r, t.cc, t.start, function(e) {
                                        i._appendCues(e, t.level), s.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !0,
                                            frag: t
                                        })
                                    }, function(r) {
                                        i._fallbackToIMSC1(t, e), d.logger.log("Failed to parse VTT cue: " + r), s.trigger(n.Events.SUBTITLE_FRAG_PROCESSED, {
                                            success: !1,
                                            frag: t,
                                            error: r
                                        })
                                    })
                                }, e._fallbackToIMSC1 = function(t, e) {
                                    var r = this,
                                        i = this.tracks[t.level];
                                    i.textCodec || Object(u.parseIMSC1)(e, this.initPTS[t.cc], this.timescale[t.cc], function() {
                                        i.textCodec = u.IMSC1_CODEC, r._parseIMSC1(t, e)
                                    }, function() {
                                        i.textCodec = "wvtt"
                                    })
                                }, e._appendCues = function(t, e) {
                                    var r = this.hls;
                                    if (this.config.renderTextTracksNatively) {
                                        var i = this.textTracks[e];
                                        if ("disabled" === i.mode) return;
                                        t.forEach(function(t) {
                                            return Object(l.addCueToTrack)(i, t)
                                        })
                                    } else {
                                        var s = this.tracks[e].default ? "default" : "subtitles" + e;
                                        r.trigger(n.Events.CUES_PARSED, {
                                            type: "subtitles",
                                            cues: t,
                                            track: s
                                        })
                                    }
                                }, e.onFragDecrypted = function(t, e) {
                                    var r = e.frag;
                                    if (r.type === c.PlaylistLevelType.SUBTITLE) {
                                        if (!Object(i.isFiniteNumber)(this.initPTS[r.cc])) {
                                            this.unparsedVttFrags.push(e);
                                            return
                                        }
                                        this.onFragLoaded(n.Events.FRAG_LOADED, e)
                                    }
                                }, e.onSubtitleTracksCleared = function() {
                                    this.tracks = [], this.captionsTracks = {}
                                }, e.onFragParsingUserdata = function(t, e) {
                                    var r = this.cea608Parser1,
                                        i = this.cea608Parser2;
                                    if (this.enabled && r && i)
                                        for (var n = 0; n < e.samples.length; n++) {
                                            var s = e.samples[n].bytes;
                                            if (s) {
                                                var a = this.extractCea608Data(s);
                                                r.addData(e.samples[n].pts, a[0]), i.addData(e.samples[n].pts, a[1])
                                            }
                                        }
                                }, e.onBufferFlushing = function(t, e) {
                                    var r = e.startOffset,
                                        i = e.endOffset,
                                        n = e.endOffsetSubtitles,
                                        s = e.type,
                                        a = this.media;
                                    if (a && !(a.currentTime < i)) {
                                        if (!s || "video" === s) {
                                            var o = this.captionsTracks;
                                            Object.keys(o).forEach(function(t) {
                                                return Object(l.removeCuesInRange)(o[t], r, i)
                                            })
                                        }
                                        if (this.config.renderTextTracksNatively && 0 === r && void 0 !== n) {
                                            var u = this.textTracks;
                                            Object.keys(u).forEach(function(t) {
                                                return Object(l.removeCuesInRange)(u[t], r, n)
                                            })
                                        }
                                    }
                                }, e.extractCea608Data = function(t) {
                                    for (var e = 31 & t[0], r = 2, i = [
                                            [],
                                            []
                                        ], n = 0; n < e; n++) {
                                        var s = t[r++],
                                            a = 127 & t[r++],
                                            o = 127 & t[r++],
                                            l = (4 & s) != 0,
                                            u = 3 & s;
                                        (0 !== a || 0 !== o) && l && (0 === u || 1 === u) && (i[u].push(a), i[u].push(o))
                                    }
                                    return i
                                }, t
                            }();

                        function f() {
                            return {
                                ccOffset: 0,
                                presentationOffset: 0,
                                0: {
                                    start: 0,
                                    prevCC: -1,
                                    new: !1
                                }
                            }
                        }
                    },
                    "./src/crypt/aes-crypto.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return i
                        });
                        var i = function() {
                            function t(t, e) {
                                this.subtle = void 0, this.aesIV = void 0, this.subtle = t, this.aesIV = e
                            }
                            return t.prototype.decrypt = function(t, e) {
                                return this.subtle.decrypt({
                                    name: "AES-CBC",
                                    iv: this.aesIV
                                }, e, t)
                            }, t
                        }()
                    },
                    "./src/crypt/aes-decryptor.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "removePadding", function() {
                            return n
                        }), r.d(e, "default", function() {
                            return s
                        });
                        var i = r("./src/utils/typed-array.ts");

                        function n(t) {
                            var e = t.byteLength,
                                r = e && new DataView(t.buffer).getUint8(e - 1);
                            return r ? Object(i.sliceUint8)(t, 0, e - r) : t
                        }
                        var s = function() {
                            function t() {
                                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
                            }
                            var e = t.prototype;
                            return e.uint8ArrayToUint32Array_ = function(t) {
                                for (var e = new DataView(t), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = e.getUint32(4 * i);
                                return r
                            }, e.initTable = function() {
                                var t = this.sBox,
                                    e = this.invSBox,
                                    r = this.subMix,
                                    i = r[0],
                                    n = r[1],
                                    s = r[2],
                                    a = r[3],
                                    o = this.invSubMix,
                                    l = o[0],
                                    u = o[1],
                                    c = o[2],
                                    d = o[3],
                                    h = new Uint32Array(256),
                                    f = 0,
                                    g = 0,
                                    v = 0;
                                for (v = 0; v < 256; v++) v < 128 ? h[v] = v << 1 : h[v] = v << 1 ^ 283;
                                for (v = 0; v < 256; v++) {
                                    var p = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                                    p = p >>> 8 ^ 255 & p ^ 99, t[f] = p, e[p] = f;
                                    var m = h[f],
                                        y = h[m],
                                        E = h[y],
                                        T = 257 * h[p] ^ 16843008 * p;
                                    i[f] = T << 24 | T >>> 8, n[f] = T << 16 | T >>> 16, s[f] = T << 8 | T >>> 24, a[f] = T, T = 16843009 * E ^ 65537 * y ^ 257 * m ^ 16843008 * f, l[p] = T << 24 | T >>> 8, u[p] = T << 16 | T >>> 16, c[p] = T << 8 | T >>> 24, d[p] = T, f ? (f = m ^ h[h[h[E ^ m]]], g ^= h[h[g]]) : f = g = 1
                                }
                            }, e.expandKey = function(t) {
                                for (var e, r, i, n, s = this.uint8ArrayToUint32Array_(t), a = !0, o = 0; o < s.length && a;) a = s[o] === this.key[o], o++;
                                if (!a) {
                                    this.key = s;
                                    var l = this.keySize = s.length;
                                    if (4 !== l && 6 !== l && 8 !== l) throw Error("Invalid aes key size=" + l);
                                    var u = this.ksRows = (l + 6 + 1) * 4,
                                        c = this.keySchedule = new Uint32Array(u),
                                        d = this.invKeySchedule = new Uint32Array(u),
                                        h = this.sBox,
                                        f = this.rcon,
                                        g = this.invSubMix,
                                        v = g[0],
                                        p = g[1],
                                        m = g[2],
                                        y = g[3];
                                    for (e = 0; e < u; e++) {
                                        if (e < l) {
                                            i = c[e] = s[e];
                                            continue
                                        }
                                        n = i, e % l == 0 ? n = (h[(n = n << 8 | n >>> 24) >>> 24] << 24 | h[n >>> 16 & 255] << 16 | h[n >>> 8 & 255] << 8 | h[255 & n]) ^ f[e / l | 0] << 24 : l > 6 && e % l == 4 && (n = h[n >>> 24] << 24 | h[n >>> 16 & 255] << 16 | h[n >>> 8 & 255] << 8 | h[255 & n]), c[e] = i = (c[e - l] ^ n) >>> 0
                                    }
                                    for (r = 0; r < u; r++) e = u - r, n = 3 & r ? c[e] : c[e - 4], r < 4 || e <= 4 ? d[r] = n : d[r] = v[h[n >>> 24]] ^ p[h[n >>> 16 & 255]] ^ m[h[n >>> 8 & 255]] ^ y[h[255 & n]], d[r] = d[r] >>> 0
                                }
                            }, e.networkToHostOrderSwap = function(t) {
                                return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
                            }, e.decrypt = function(t, e, r) {
                                for (var i, n, s, a, o, l, u, c, d, h, f, g, v, p, m = this.keySize + 6, y = this.invKeySchedule, E = this.invSBox, T = this.invSubMix, S = T[0], b = T[1], L = T[2], A = T[3], D = this.uint8ArrayToUint32Array_(r), R = D[0], k = D[1], _ = D[2], I = D[3], C = new Int32Array(t), O = new Int32Array(C.length), x = this.networkToHostOrderSwap; e < C.length;) {
                                    for (p = 1, d = x(C[e]), h = x(C[e + 1]), f = x(C[e + 2]), g = x(C[e + 3]), o = d ^ y[0], l = g ^ y[1], u = f ^ y[2], c = h ^ y[3], v = 4; p < m; p++) i = S[o >>> 24] ^ b[l >> 16 & 255] ^ L[u >> 8 & 255] ^ A[255 & c] ^ y[v], n = S[l >>> 24] ^ b[u >> 16 & 255] ^ L[c >> 8 & 255] ^ A[255 & o] ^ y[v + 1], s = S[u >>> 24] ^ b[c >> 16 & 255] ^ L[o >> 8 & 255] ^ A[255 & l] ^ y[v + 2], a = S[c >>> 24] ^ b[o >> 16 & 255] ^ L[l >> 8 & 255] ^ A[255 & u] ^ y[v + 3], o = i, l = n, u = s, c = a, v += 4;
                                    i = E[o >>> 24] << 24 ^ E[l >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & c] ^ y[v], n = E[l >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & o] ^ y[v + 1], s = E[u >>> 24] << 24 ^ E[c >> 16 & 255] << 16 ^ E[o >> 8 & 255] << 8 ^ E[255 & l] ^ y[v + 2], a = E[c >>> 24] << 24 ^ E[o >> 16 & 255] << 16 ^ E[l >> 8 & 255] << 8 ^ E[255 & u] ^ y[v + 3], O[e] = x(i ^ R), O[e + 1] = x(a ^ k), O[e + 2] = x(s ^ _), O[e + 3] = x(n ^ I), R = d, k = h, _ = f, I = g, e += 4
                                }
                                return O.buffer
                            }, t
                        }()
                    },
                    "./src/crypt/decrypter.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return u
                        });
                        var i = r("./src/crypt/aes-crypto.ts"),
                            n = r("./src/crypt/fast-aes-key.ts"),
                            s = r("./src/crypt/aes-decryptor.ts"),
                            a = r("./src/utils/logger.ts"),
                            o = r("./src/utils/mp4-tools.ts"),
                            l = r("./src/utils/typed-array.ts"),
                            u = function() {
                                function t(t, e, r) {
                                    var i = (void 0 === r ? {} : r).removePKCS7Padding,
                                        n = void 0 === i || i;
                                    if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = t, this.config = e, this.removePKCS7Padding = n, n) try {
                                        var s = self.crypto;
                                        s && (this.subtle = s.subtle || s.webkitSubtle)
                                    } catch (t) {}
                                    null === this.subtle && (this.config.enableSoftwareAES = !0)
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this.observer = null
                                }, e.isSync = function() {
                                    return this.config.enableSoftwareAES
                                }, e.flush = function() {
                                    var t = this.currentResult;
                                    if (!t) {
                                        this.reset();
                                        return
                                    }
                                    var e = new Uint8Array(t);
                                    return (this.reset(), this.removePKCS7Padding) ? Object(s.removePadding)(e) : e
                                }, e.reset = function() {
                                    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
                                }, e.decrypt = function(t, e, r, i) {
                                    if (this.config.enableSoftwareAES) {
                                        this.softwareDecrypt(new Uint8Array(t), e, r);
                                        var n = this.flush();
                                        n && i(n.buffer)
                                    } else this.webCryptoDecrypt(new Uint8Array(t), e, r).then(i)
                                }, e.softwareDecrypt = function(t, e, r) {
                                    var i = this.currentIV,
                                        n = this.currentResult,
                                        a = this.remainderData;
                                    this.logOnce("JS AES decrypt"), a && (t = Object(o.appendUint8Array)(a, t), this.remainderData = null);
                                    var u = this.getValidChunk(t);
                                    if (!u.length) return null;
                                    i && (r = i);
                                    var c = this.softwareDecrypter;
                                    return (c || (c = this.softwareDecrypter = new s.default), c.expandKey(e), this.currentResult = c.decrypt(u.buffer, 0, r), this.currentIV = Object(l.sliceUint8)(u, -16).buffer, n) ? n : null
                                }, e.webCryptoDecrypt = function(t, e, r) {
                                    var s = this,
                                        a = this.subtle;
                                    return this.key === e && this.fastAesKey || (this.key = e, this.fastAesKey = new n.default(a, e)), this.fastAesKey.expandKey().then(function(e) {
                                        return a ? new i.default(a, r).decrypt(t.buffer, e) : Promise.reject(Error("web crypto not initialized"))
                                    }).catch(function(i) {
                                        return s.onWebCryptoError(i, t, e, r)
                                    })
                                }, e.onWebCryptoError = function(t, e, r, i) {
                                    return a.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", t), this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(e, r, i)
                                }, e.getValidChunk = function(t) {
                                    var e = t,
                                        r = t.length - t.length % 16;
                                    return r !== t.length && (e = Object(l.sliceUint8)(t, 0, r), this.remainderData = Object(l.sliceUint8)(t, r)), e
                                }, e.logOnce = function(t) {
                                    this.logEnabled && (a.logger.log("[decrypter.ts]: " + t), this.logEnabled = !1)
                                }, t
                            }()
                    },
                    "./src/crypt/fast-aes-key.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return i
                        });
                        var i = function() {
                            function t(t, e) {
                                this.subtle = void 0, this.key = void 0, this.subtle = t, this.key = e
                            }
                            return t.prototype.expandKey = function() {
                                return this.subtle.importKey("raw", this.key, {
                                    name: "AES-CBC"
                                }, !1, ["encrypt", "decrypt"])
                            }, t
                        }()
                    },
                    "./src/demux/aacdemuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/demux/base-audio-demuxer.ts"),
                            n = r("./src/demux/adts.ts"),
                            s = r("./src/utils/logger.ts"),
                            a = r("./src/demux/id3.ts");

                        function o(t, e) {
                            return (o = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var l = function(t) {
                            function e(e, r) {
                                var i;
                                return (i = t.call(this) || this).observer = void 0, i.config = void 0, i.observer = e, i.config = r, i
                            }
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t);
                            var r = e.prototype;
                            return r.resetInitSegment = function(e, r, i) {
                                t.prototype.resetInitSegment.call(this, e, r, i), this._audioTrack = {
                                    container: "audio/adts",
                                    type: "audio",
                                    id: 2,
                                    pid: -1,
                                    sequenceNumber: 0,
                                    isAAC: !0,
                                    samples: [],
                                    manifestCodec: e,
                                    duration: i,
                                    inputTimeScale: 9e4,
                                    dropped: 0
                                }
                            }, e.probe = function(t) {
                                if (!t) return !1;
                                for (var e = (a.getID3Data(t, 0) || []).length, r = t.length; e < r; e++)
                                    if (n.probe(t, e)) return s.logger.log("ADTS sync word found !"), !0;
                                return !1
                            }, r.canParse = function(t, e) {
                                return n.canParse(t, e)
                            }, r.appendFrame = function(t, e, r) {
                                n.initTrackConfig(t, this.observer, e, r, t.manifestCodec);
                                var i = n.appendFrame(t, e, r, this.initPTS, this.frameIndex);
                                if (i && 0 === i.missing) return i
                            }, e
                        }(i.default);
                        l.minProbeByteLength = 9, e.default = l
                    },
                    "./src/demux/adts.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "getAudioConfig", function() {
                            return a
                        }), r.d(e, "isHeaderPattern", function() {
                            return o
                        }), r.d(e, "getHeaderLength", function() {
                            return l
                        }), r.d(e, "getFullFrameLength", function() {
                            return u
                        }), r.d(e, "canGetFrameLength", function() {
                            return c
                        }), r.d(e, "isHeader", function() {
                            return d
                        }), r.d(e, "canParse", function() {
                            return h
                        }), r.d(e, "probe", function() {
                            return f
                        }), r.d(e, "initTrackConfig", function() {
                            return g
                        }), r.d(e, "getFrameDuration", function() {
                            return v
                        }), r.d(e, "parseFrameHeader", function() {
                            return p
                        }), r.d(e, "appendFrame", function() {
                            return m
                        });
                        var i = r("./src/utils/logger.ts"),
                            n = r("./src/errors.ts"),
                            s = r("./src/events.ts");

                        function a(t, e, r, a) {
                            var o, l, u, c, d = navigator.userAgent.toLowerCase(),
                                h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                            o = ((192 & e[r + 2]) >>> 6) + 1;
                            var f = (60 & e[r + 2]) >>> 2;
                            if (f > h.length - 1) {
                                t.trigger(s.Events.ERROR, {
                                    type: n.ErrorTypes.MEDIA_ERROR,
                                    details: n.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "invalid ADTS sampling index:" + f
                                });
                                return
                            }
                            return u = (1 & e[r + 2]) << 2 | (192 & e[r + 3]) >>> 6, i.logger.log("manifest codec:" + a + ", ADTS type:" + o + ", samplingIndex:" + f), /firefox/i.test(d) ? f >= 6 ? (o = 5, c = [, , , , ], l = f - 3) : (o = 2, c = [, , ], l = f) : -1 !== d.indexOf("android") ? (o = 2, c = [, , ], l = f) : (o = 5, c = [, , , , ], a && (-1 !== a.indexOf("mp4a.40.29") || -1 !== a.indexOf("mp4a.40.5")) || !a && f >= 6 ? l = f - 3 : ((a && -1 !== a.indexOf("mp4a.40.2") && (f >= 6 && 1 === u || /vivaldi/i.test(d)) || !a && 1 === u) && (o = 2, c = [, , ]), l = f)), c[0] = o << 3, c[0] |= (14 & f) >> 1, c[1] |= (1 & f) << 7, c[1] |= u << 3, 5 === o && (c[1] |= (14 & l) >> 1, c[2] = (1 & l) << 7, c[2] |= 8, c[3] = 0), {
                                config: c,
                                samplerate: h[f],
                                channelCount: u,
                                codec: "mp4a.40." + o,
                                manifestCodec: a
                            }
                        }

                        function o(t, e) {
                            return 255 === t[e] && (246 & t[e + 1]) == 240
                        }

                        function l(t, e) {
                            return 1 & t[e + 1] ? 7 : 9
                        }

                        function u(t, e) {
                            return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
                        }

                        function c(t, e) {
                            return e + 5 < t.length
                        }

                        function d(t, e) {
                            return e + 1 < t.length && o(t, e)
                        }

                        function h(t, e) {
                            return c(t, e) && o(t, e) && u(t, e) <= t.length - e
                        }

                        function f(t, e) {
                            if (d(t, e)) {
                                var r = l(t, e);
                                if (e + r >= t.length) return !1;
                                var i = u(t, e);
                                if (i <= r) return !1;
                                var n = e + i;
                                return n === t.length || d(t, n)
                            }
                            return !1
                        }

                        function g(t, e, r, n, s) {
                            if (!t.samplerate) {
                                var o = a(e, r, n, s);
                                o && (t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, i.logger.log("parsed codec:" + t.codec + ", rate:" + o.samplerate + ", channels:" + o.channelCount))
                            }
                        }

                        function v(t) {
                            return 9216e4 / t
                        }

                        function p(t, e, r, i, n) {
                            var s = l(t, e),
                                a = u(t, e);
                            if ((a -= s) > 0) return {
                                headerLength: s,
                                frameLength: a,
                                stamp: r + i * n
                            }
                        }

                        function m(t, e, r, i, n) {
                            var s = p(e, r, i, n, v(t.samplerate));
                            if (s) {
                                var a, o = s.frameLength,
                                    l = s.headerLength,
                                    u = s.stamp,
                                    c = l + o,
                                    d = Math.max(0, r + c - e.length);
                                d ? (a = new Uint8Array(c - l)).set(e.subarray(r + l, e.length), 0) : a = e.subarray(r + l, r + c);
                                var h = {
                                    unit: a,
                                    pts: u
                                };
                                return d || t.samples.push(h), {
                                    sample: h,
                                    length: c,
                                    missing: d
                                }
                            }
                        }
                    },
                    "./src/demux/base-audio-demuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "initPTSFn", function() {
                            return u
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/demux/id3.ts"),
                            s = r("./src/demux/dummy-demuxed-track.ts"),
                            a = r("./src/utils/mp4-tools.ts"),
                            o = r("./src/utils/typed-array.ts"),
                            l = function() {
                                function t() {
                                    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.initPTS = null
                                }
                                var e = t.prototype;
                                return e.resetInitSegment = function(t, e, r) {
                                    this._id3Track = {
                                        type: "id3",
                                        id: 3,
                                        pid: -1,
                                        inputTimeScale: 9e4,
                                        sequenceNumber: 0,
                                        samples: [],
                                        dropped: 0
                                    }
                                }, e.resetTimeStamp = function() {}, e.resetContiguity = function() {}, e.canParse = function(t, e) {
                                    return !1
                                }, e.appendFrame = function(t, e, r) {}, e.demux = function(t, e) {
                                    this.cachedData && (t = Object(a.appendUint8Array)(this.cachedData, t), this.cachedData = null);
                                    var r, i, l = n.getID3Data(t, 0),
                                        c = l ? l.length : 0,
                                        d = this._audioTrack,
                                        h = this._id3Track,
                                        f = l ? n.getTimeStamp(l) : void 0,
                                        g = t.length;
                                    for ((0 === this.frameIndex || null === this.initPTS) && (this.initPTS = u(f, e)), l && l.length > 0 && h.samples.push({
                                            pts: this.initPTS,
                                            dts: this.initPTS,
                                            data: l
                                        }), i = this.initPTS; c < g;) {
                                        if (this.canParse(t, c)) {
                                            var v = this.appendFrame(d, t, c);
                                            v ? (this.frameIndex++, i = v.sample.pts, c += v.length, r = c) : c = g
                                        } else n.canParse(t, c) ? (l = n.getID3Data(t, c), h.samples.push({
                                            pts: i,
                                            dts: i,
                                            data: l
                                        }), c += l.length, r = c) : c++;
                                        if (c === g && r !== g) {
                                            var p = Object(o.sliceUint8)(t, r);
                                            this.cachedData ? this.cachedData = Object(a.appendUint8Array)(this.cachedData, p) : this.cachedData = p
                                        }
                                    }
                                    return {
                                        audioTrack: d,
                                        avcTrack: Object(s.dummyTrack)(),
                                        id3Track: h,
                                        textTrack: Object(s.dummyTrack)()
                                    }
                                }, e.demuxSampleAes = function(t, e, r) {
                                    return Promise.reject(Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
                                }, e.flush = function(t) {
                                    var e = this.cachedData;
                                    return e && (this.cachedData = null, this.demux(e, 0)), this.frameIndex = 0, {
                                        audioTrack: this._audioTrack,
                                        avcTrack: Object(s.dummyTrack)(),
                                        id3Track: this._id3Track,
                                        textTrack: Object(s.dummyTrack)()
                                    }
                                }, e.destroy = function() {}, t
                            }(),
                            u = function(t, e) {
                                return Object(i.isFiniteNumber)(t) ? 90 * t : 9e4 * e
                            };
                        e.default = l
                    },
                    "./src/demux/chunk-cache.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return i
                        });
                        var i = function() {
                            function t() {
                                this.chunks = [], this.dataLength = 0
                            }
                            var e = t.prototype;
                            return e.push = function(t) {
                                this.chunks.push(t), this.dataLength += t.length
                            }, e.flush = function() {
                                var t, e = this.chunks,
                                    r = this.dataLength;
                                return e.length ? (t = 1 === e.length ? e[0] : function(t, e) {
                                    for (var r = new Uint8Array(e), i = 0, n = 0; n < t.length; n++) {
                                        var s = t[n];
                                        r.set(s, i), i += s.length
                                    }
                                    return r
                                }(e, r), this.reset(), t) : new Uint8Array(0)
                            }, e.reset = function() {
                                this.chunks.length = 0, this.dataLength = 0
                            }, t
                        }()
                    },
                    "./src/demux/dummy-demuxed-track.ts": function(t, e, r) {
                        "use strict";

                        function i() {
                            return {
                                type: "",
                                id: -1,
                                pid: -1,
                                inputTimeScale: 9e4,
                                sequenceNumber: -1,
                                samples: [],
                                dropped: 0
                            }
                        }
                        r.r(e), r.d(e, "dummyTrack", function() {
                            return i
                        })
                    },
                    "./src/demux/exp-golomb.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/utils/logger.ts"),
                            n = function() {
                                function t(t) {
                                    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
                                }
                                var e = t.prototype;
                                return e.loadWord = function() {
                                    var t = this.data,
                                        e = this.bytesAvailable,
                                        r = t.byteLength - e,
                                        i = new Uint8Array(4),
                                        n = Math.min(4, e);
                                    if (0 === n) throw Error("no bytes available");
                                    i.set(t.subarray(r, r + n)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * n, this.bytesAvailable -= n
                                }, e.skipBits = function(t) {
                                    var e;
                                    this.bitsAvailable > t || (t -= this.bitsAvailable, e = t >> 3, t -= e >> 3, this.bytesAvailable -= e, this.loadWord()), this.word <<= t, this.bitsAvailable -= t
                                }, e.readBits = function(t) {
                                    var e = Math.min(this.bitsAvailable, t),
                                        r = this.word >>> 32 - e;
                                    return (t > 32 && i.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, this.bitsAvailable > 0 ? this.word <<= e : this.bytesAvailable > 0 && this.loadWord(), (e = t - e) > 0 && this.bitsAvailable) ? r << e | this.readBits(e) : r
                                }, e.skipLZ = function() {
                                    var t;
                                    for (t = 0; t < this.bitsAvailable; ++t)
                                        if ((this.word & 2147483648 >>> t) != 0) return this.word <<= t, this.bitsAvailable -= t, t;
                                    return this.loadWord(), t + this.skipLZ()
                                }, e.skipUEG = function() {
                                    this.skipBits(1 + this.skipLZ())
                                }, e.skipEG = function() {
                                    this.skipBits(1 + this.skipLZ())
                                }, e.readUEG = function() {
                                    var t = this.skipLZ();
                                    return this.readBits(t + 1) - 1
                                }, e.readEG = function() {
                                    var t = this.readUEG();
                                    return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
                                }, e.readBoolean = function() {
                                    return 1 === this.readBits(1)
                                }, e.readUByte = function() {
                                    return this.readBits(8)
                                }, e.readUShort = function() {
                                    return this.readBits(16)
                                }, e.readUInt = function() {
                                    return this.readBits(32)
                                }, e.skipScalingList = function(t) {
                                    for (var e = 8, r = 8, i = 0; i < t; i++) 0 !== r && (r = (e + this.readEG() + 256) % 256), e = 0 === r ? e : r
                                }, e.readSPS = function() {
                                    var t, e, r, i = 0,
                                        n = 0,
                                        s = 0,
                                        a = 0,
                                        o = this.readUByte.bind(this),
                                        l = this.readBits.bind(this),
                                        u = this.readUEG.bind(this),
                                        c = this.readBoolean.bind(this),
                                        d = this.skipBits.bind(this),
                                        h = this.skipEG.bind(this),
                                        f = this.skipUEG.bind(this),
                                        g = this.skipScalingList.bind(this);
                                    o();
                                    var v = o();
                                    if (l(5), d(3), o(), f(), 100 === v || 110 === v || 122 === v || 244 === v || 44 === v || 83 === v || 86 === v || 118 === v || 128 === v) {
                                        var p = u();
                                        if (3 === p && d(1), f(), f(), d(1), c())
                                            for (r = 0, e = 3 !== p ? 8 : 12; r < e; r++) c() && g(r < 6 ? 16 : 64)
                                    }
                                    f();
                                    var m = u();
                                    if (0 === m) u();
                                    else if (1 === m)
                                        for (d(1), h(), h(), t = u(), r = 0; r < t; r++) h();
                                    f(), d(1);
                                    var y = u(),
                                        E = u(),
                                        T = l(1);
                                    0 === T && d(1), d(1), c() && (i = u(), n = u(), s = u(), a = u());
                                    var S = [1, 1];
                                    if (c() && c()) switch (o()) {
                                        case 1:
                                            S = [1, 1];
                                            break;
                                        case 2:
                                            S = [12, 11];
                                            break;
                                        case 3:
                                            S = [10, 11];
                                            break;
                                        case 4:
                                            S = [16, 11];
                                            break;
                                        case 5:
                                            S = [40, 33];
                                            break;
                                        case 6:
                                            S = [24, 11];
                                            break;
                                        case 7:
                                            S = [20, 11];
                                            break;
                                        case 8:
                                            S = [32, 11];
                                            break;
                                        case 9:
                                            S = [80, 33];
                                            break;
                                        case 10:
                                            S = [18, 11];
                                            break;
                                        case 11:
                                            S = [15, 11];
                                            break;
                                        case 12:
                                            S = [64, 33];
                                            break;
                                        case 13:
                                            S = [160, 99];
                                            break;
                                        case 14:
                                            S = [4, 3];
                                            break;
                                        case 15:
                                            S = [3, 2];
                                            break;
                                        case 16:
                                            S = [2, 1];
                                            break;
                                        case 255:
                                            S = [o() << 8 | o(), o() << 8 | o()]
                                    }
                                    return {
                                        width: Math.ceil((y + 1) * 16 - 2 * i - 2 * n),
                                        height: (2 - T) * (E + 1) * 16 - (T ? 2 : 4) * (s + a),
                                        pixelRatio: S
                                    }
                                }, e.readSliceType = function() {
                                    return this.readUByte(), this.readUEG(), this.readUEG()
                                }, t
                            }();
                        e.default = n
                    },
                    "./src/demux/id3.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "isHeader", function() {
                            return n
                        }), r.d(e, "isFooter", function() {
                            return s
                        }), r.d(e, "getID3Data", function() {
                            return a
                        }), r.d(e, "canParse", function() {
                            return l
                        }), r.d(e, "getTimeStamp", function() {
                            return u
                        }), r.d(e, "isTimeStampFrame", function() {
                            return c
                        }), r.d(e, "getID3Frames", function() {
                            return h
                        }), r.d(e, "decodeFrame", function() {
                            return f
                        }), r.d(e, "utf8ArrayToStr", function() {
                            return y
                        }), r.d(e, "testables", function() {
                            return E
                        });
                        var i, n = function(t, e) {
                                return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                            },
                            s = function(t, e) {
                                return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
                            },
                            a = function(t, e) {
                                for (var r = e, i = 0; n(t, e);) i += 10 + o(t, e + 6), s(t, e + 10) && (i += 10), e += i;
                                if (i > 0) return t.subarray(r, r + i)
                            },
                            o = function(t, e) {
                                return (127 & t[e]) << 21 | (127 & t[e + 1]) << 14 | (127 & t[e + 2]) << 7 | 127 & t[e + 3]
                            },
                            l = function(t, e) {
                                return n(t, e) && o(t, e + 6) + 10 <= t.length - e
                            },
                            u = function(t) {
                                for (var e = h(t), r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    if (c(i)) return m(i)
                                }
                            },
                            c = function(t) {
                                return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
                            },
                            d = function(t) {
                                var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
                                    r = o(t, 4);
                                return {
                                    type: e,
                                    size: r,
                                    data: t.subarray(10, 10 + r)
                                }
                            },
                            h = function(t) {
                                for (var e = 0, r = []; n(t, e);) {
                                    for (var i = o(t, e + 6), a = (e += 10) + i; e + 8 < a;) {
                                        var l = d(t.subarray(e)),
                                            u = f(l);
                                        u && r.push(u), e += l.size + 10
                                    }
                                    s(t, e) && (e += 10)
                                }
                                return r
                            },
                            f = function(t) {
                                return "PRIV" === t.type ? g(t) : "W" === t.type[0] ? p(t) : v(t)
                            },
                            g = function(t) {
                                if (!(t.size < 2)) {
                                    var e = y(t.data, !0),
                                        r = new Uint8Array(t.data.subarray(e.length + 1));
                                    return {
                                        key: t.type,
                                        info: e,
                                        data: r.buffer
                                    }
                                }
                            },
                            v = function(t) {
                                if (!(t.size < 2)) {
                                    if ("TXXX" === t.type) {
                                        var e = 1,
                                            r = y(t.data.subarray(e), !0);
                                        e += r.length + 1;
                                        var i = y(t.data.subarray(e));
                                        return {
                                            key: t.type,
                                            info: r,
                                            data: i
                                        }
                                    }
                                    var n = y(t.data.subarray(1));
                                    return {
                                        key: t.type,
                                        data: n
                                    }
                                }
                            },
                            p = function(t) {
                                if ("WXXX" === t.type) {
                                    if (t.size < 2) return;
                                    var e = 1,
                                        r = y(t.data.subarray(e), !0);
                                    e += r.length + 1;
                                    var i = y(t.data.subarray(e));
                                    return {
                                        key: t.type,
                                        info: r,
                                        data: i
                                    }
                                }
                                var n = y(t.data);
                                return {
                                    key: t.type,
                                    data: n
                                }
                            },
                            m = function(t) {
                                if (8 === t.data.byteLength) {
                                    var e = new Uint8Array(t.data),
                                        r = 1 & e[3],
                                        i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
                                    return i /= 45, r && (i += 47721858.84), Math.round(i)
                                }
                            },
                            y = function(t, e) {
                                void 0 === e && (e = !1);
                                var r, n, s = (i || void 0 === self.TextDecoder || (i = new self.TextDecoder("utf-8")), i);
                                if (s) {
                                    var a = s.decode(t);
                                    if (e) {
                                        var o = a.indexOf("\0");
                                        return -1 !== o ? a.substring(0, o) : a
                                    }
                                    return a.replace(/\0/g, "")
                                }
                                for (var l = t.length, u = "", c = 0; c < l && (0 !== (r = t[c++]) || !e);)
                                    if (0 !== r && 3 !== r) switch (r >> 4) {
                                        case 0:
                                        case 1:
                                        case 2:
                                        case 3:
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                            u += String.fromCharCode(r);
                                            break;
                                        case 12:
                                        case 13:
                                            u += String.fromCharCode((31 & r) << 6 | 63 & t[c++]);
                                            break;
                                        case 14:
                                            u += String.fromCharCode((15 & r) << 12 | (63 & t[c++]) << 6 | (63 & t[c++]) << 0)
                                    }
                                return u
                            },
                            E = {
                                decodeTextFrame: v
                            }
                    },
                    "./src/demux/mp3demuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/demux/base-audio-demuxer.ts"),
                            n = r("./src/demux/id3.ts"),
                            s = r("./src/utils/logger.ts"),
                            a = r("./src/demux/mpegaudio.ts");

                        function o(t, e) {
                            return (o = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }
                        var l = function(t) {
                            function e() {
                                return t.apply(this, arguments) || this
                            }
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t);
                            var r = e.prototype;
                            return r.resetInitSegment = function(e, r, i) {
                                t.prototype.resetInitSegment.call(this, e, r, i), this._audioTrack = {
                                    container: "audio/mpeg",
                                    type: "audio",
                                    id: 2,
                                    pid: -1,
                                    sequenceNumber: 0,
                                    isAAC: !1,
                                    samples: [],
                                    manifestCodec: e,
                                    duration: i,
                                    inputTimeScale: 9e4,
                                    dropped: 0
                                }
                            }, e.probe = function(t) {
                                if (!t) return !1;
                                for (var e = (n.getID3Data(t, 0) || []).length, r = t.length; e < r; e++)
                                    if (a.probe(t, e)) return s.logger.log("MPEG Audio sync word found !"), !0;
                                return !1
                            }, r.canParse = function(t, e) {
                                return a.canParse(t, e)
                            }, r.appendFrame = function(t, e, r) {
                                if (null !== this.initPTS) return a.appendFrame(t, e, r, this.initPTS, this.frameIndex)
                            }, e
                        }(i.default);
                        l.minProbeByteLength = 4, e.default = l
                    },
                    "./src/demux/mp4demuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/utils/mp4-tools.ts"),
                            n = r("./src/demux/dummy-demuxed-track.ts"),
                            s = function() {
                                function t(t, e) {
                                    this.remainderData = null, this.config = void 0, this.config = e
                                }
                                var e = t.prototype;
                                return e.resetTimeStamp = function() {}, e.resetInitSegment = function() {}, e.resetContiguity = function() {}, t.probe = function(t) {
                                    return Object(i.findBox)({
                                        data: t,
                                        start: 0,
                                        end: Math.min(t.length, 16384)
                                    }, ["moof"]).length > 0
                                }, e.demux = function(t) {
                                    var e = t,
                                        r = Object(n.dummyTrack)();
                                    if (this.config.progressive) {
                                        this.remainderData && (e = Object(i.appendUint8Array)(this.remainderData, t));
                                        var s = Object(i.segmentValidRange)(e);
                                        this.remainderData = s.remainder, r.samples = s.valid || new Uint8Array
                                    } else r.samples = e;
                                    return {
                                        audioTrack: Object(n.dummyTrack)(),
                                        avcTrack: r,
                                        id3Track: Object(n.dummyTrack)(),
                                        textTrack: Object(n.dummyTrack)()
                                    }
                                }, e.flush = function() {
                                    var t = Object(n.dummyTrack)();
                                    return t.samples = this.remainderData || new Uint8Array, this.remainderData = null, {
                                        audioTrack: Object(n.dummyTrack)(),
                                        avcTrack: t,
                                        id3Track: Object(n.dummyTrack)(),
                                        textTrack: Object(n.dummyTrack)()
                                    }
                                }, e.demuxSampleAes = function(t, e, r) {
                                    return Promise.reject(Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
                                }, e.destroy = function() {}, t
                            }();
                        s.minProbeByteLength = 1024, e.default = s
                    },
                    "./src/demux/mpegaudio.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "appendFrame", function() {
                            return l
                        }), r.d(e, "parseHeader", function() {
                            return u
                        }), r.d(e, "isHeaderPattern", function() {
                            return c
                        }), r.d(e, "isHeader", function() {
                            return d
                        }), r.d(e, "canParse", function() {
                            return h
                        }), r.d(e, "probe", function() {
                            return f
                        });
                        var i = null,
                            n = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                            s = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                            a = [
                                [0, 72, 144, 12],
                                [0, 0, 0, 0],
                                [0, 72, 144, 12],
                                [0, 144, 144, 12]
                            ],
                            o = [0, 1, 1, 4];

                        function l(t, e, r, i, n) {
                            if (!(r + 24 > e.length)) {
                                var s = u(e, r);
                                if (s && r + s.frameLength <= e.length) {
                                    var a = i + 9e4 * s.samplesPerFrame / s.sampleRate * n,
                                        o = {
                                            unit: e.subarray(r, r + s.frameLength),
                                            pts: a,
                                            dts: a
                                        };
                                    return t.config = [], t.channelCount = s.channelCount, t.samplerate = s.sampleRate, t.samples.push(o), {
                                        sample: o,
                                        length: s.frameLength,
                                        missing: 0
                                    }
                                }
                            }
                        }

                        function u(t, e) {
                            var r = t[e + 1] >> 3 & 3,
                                l = t[e + 1] >> 1 & 3,
                                u = t[e + 2] >> 4 & 15,
                                c = t[e + 2] >> 2 & 3;
                            if (1 !== r && 0 !== u && 15 !== u && 3 !== c) {
                                var d = t[e + 2] >> 1 & 1,
                                    h = t[e + 3] >> 6,
                                    f = 1e3 * n[14 * (3 === r ? 3 - l : 3 === l ? 3 : 4) + u - 1],
                                    g = s[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + c],
                                    v = a[r][l],
                                    p = o[l];
                                if (null === i) {
                                    var m = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                                    i = m ? parseInt(m[1]) : 0
                                }
                                return i && i <= 87 && 2 === l && f >= 224e3 && 0 === h && (t[e + 3] = 128 | t[e + 3]), {
                                    sampleRate: g,
                                    channelCount: 3 === h ? 1 : 2,
                                    frameLength: Math.floor(v * f / g + d) * p,
                                    samplesPerFrame: 8 * v * p
                                }
                            }
                        }

                        function c(t, e) {
                            return 255 === t[e] && (224 & t[e + 1]) == 224 && (6 & t[e + 1]) != 0
                        }

                        function d(t, e) {
                            return e + 1 < t.length && c(t, e)
                        }

                        function h(t, e) {
                            return c(t, e) && 4 <= t.length - e
                        }

                        function f(t, e) {
                            if (e + 1 < t.length && c(t, e)) {
                                var r = u(t, e),
                                    i = 4;
                                null != r && r.frameLength && (i = r.frameLength);
                                var n = e + i;
                                return n === t.length || d(t, n)
                            }
                            return !1
                        }
                    },
                    "./src/demux/sample-aes.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/crypt/decrypter.ts"),
                            n = r("./src/demux/tsdemuxer.ts"),
                            s = function() {
                                function t(t, e, r) {
                                    this.keyData = void 0, this.decrypter = void 0, this.keyData = r, this.decrypter = new i.default(t, e, {
                                        removePKCS7Padding: !1
                                    })
                                }
                                var e = t.prototype;
                                return e.decryptBuffer = function(t, e) {
                                    this.decrypter.decrypt(t, this.keyData.key.buffer, this.keyData.iv.buffer, e)
                                }, e.decryptAacSample = function(t, e, r, i) {
                                    var n = t[e].unit,
                                        s = n.subarray(16, n.length - n.length % 16),
                                        a = s.buffer.slice(s.byteOffset, s.byteOffset + s.length),
                                        o = this;
                                    this.decryptBuffer(a, function(s) {
                                        var a = new Uint8Array(s);
                                        n.set(a, 16), i || o.decryptAacSamples(t, e + 1, r)
                                    })
                                }, e.decryptAacSamples = function(t, e, r) {
                                    for (;; e++) {
                                        if (e >= t.length) {
                                            r();
                                            return
                                        }
                                        if (!(t[e].unit.length < 32)) {
                                            var i = this.decrypter.isSync();
                                            if (this.decryptAacSample(t, e, r, i), !i) return
                                        }
                                    }
                                }, e.getAvcEncryptedData = function(t) {
                                    for (var e = new Int8Array(16 * Math.floor((t.length - 48) / 160) + 16), r = 0, i = 32; i < t.length - 16; i += 160, r += 16) e.set(t.subarray(i, i + 16), r);
                                    return e
                                }, e.getAvcDecryptedUnit = function(t, e) {
                                    for (var r = new Uint8Array(e), i = 0, n = 32; n < t.length - 16; n += 160, i += 16) t.set(r.subarray(i, i + 16), n);
                                    return t
                                }, e.decryptAvcSample = function(t, e, r, i, s, a) {
                                    var o = Object(n.discardEPB)(s.data),
                                        l = this.getAvcEncryptedData(o),
                                        u = this;
                                    this.decryptBuffer(l.buffer, function(n) {
                                        s.data = u.getAvcDecryptedUnit(o, n), a || u.decryptAvcSamples(t, e, r + 1, i)
                                    })
                                }, e.decryptAvcSamples = function(t, e, r, i) {
                                    if (t instanceof Uint8Array) throw Error("Cannot decrypt samples of type Uint8Array");
                                    for (;; e++, r = 0) {
                                        if (e >= t.length) {
                                            i();
                                            return
                                        }
                                        for (var n = t[e].units; !(r >= n.length); r++) {
                                            var s = n[r];
                                            if (!(s.data.length <= 48) && (1 === s.type || 5 === s.type)) {
                                                var a = this.decrypter.isSync();
                                                if (this.decryptAvcSample(t, e, r, i, s, a), !a) return
                                            }
                                        }
                                    }
                                }, t
                            }();
                        e.default = s
                    },
                    "./src/demux/transmuxer-interface.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return d
                        });
                        var i = r("./node_modules/webworkify-webpack/index.js"),
                            n = r("./src/events.ts"),
                            s = r("./src/demux/transmuxer.ts"),
                            a = r("./src/utils/logger.ts"),
                            o = r("./src/errors.ts"),
                            l = r("./src/utils/mediasource-helper.ts"),
                            u = r("./node_modules/eventemitter3/index.js"),
                            c = Object(l.getMediaSource)() || {
                                isTypeSupported: function() {
                                    return !1
                                }
                            },
                            d = function() {
                                function t(t, e, r, l) {
                                    var d, h = this;
                                    this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = t, this.id = e, this.onTransmuxComplete = r, this.onFlush = l;
                                    var f = t.config,
                                        g = function(e, r) {
                                            (r = r || {}).frag = h.frag, r.id = h.id, t.trigger(e, r)
                                        };
                                    this.observer = new u.EventEmitter, this.observer.on(n.Events.FRAG_DECRYPTED, g), this.observer.on(n.Events.ERROR, g);
                                    var v = {
                                            mp4: c.isTypeSupported("video/mp4"),
                                            mpeg: c.isTypeSupported("audio/mpeg"),
                                            mp3: c.isTypeSupported('audio/mp4; codecs="mp3"')
                                        },
                                        p = navigator.vendor;
                                    if (f.enableWorker && "undefined" != typeof Worker) {
                                        a.logger.log("demuxing in webworker");
                                        try {
                                            d = this.worker = i("./src/demux/transmuxer-worker.ts"), this.onwmsg = this.onWorkerMessage.bind(this), d.addEventListener("message", this.onwmsg), d.onerror = function(e) {
                                                t.trigger(n.Events.ERROR, {
                                                    type: o.ErrorTypes.OTHER_ERROR,
                                                    details: o.ErrorDetails.INTERNAL_EXCEPTION,
                                                    fatal: !0,
                                                    event: "demuxerWorker",
                                                    error: Error(e.message + "  (" + e.filename + ":" + e.lineno + ")")
                                                })
                                            }, d.postMessage({
                                                cmd: "init",
                                                typeSupported: v,
                                                vendor: p,
                                                id: e,
                                                config: JSON.stringify(f)
                                            })
                                        } catch (t) {
                                            a.logger.warn("Error in worker:", t), a.logger.error("Error while initializing DemuxerWorker, fallback to inline"), d && self.URL.revokeObjectURL(d.objectURL), this.transmuxer = new s.default(this.observer, v, f, p, e), this.worker = null
                                        }
                                    } else this.transmuxer = new s.default(this.observer, v, f, p, e)
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    var t = this.worker;
                                    if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.worker = null;
                                    else {
                                        var e = this.transmuxer;
                                        e && (e.destroy(), this.transmuxer = null)
                                    }
                                    var r = this.observer;
                                    r && r.removeAllListeners(), this.observer = null
                                }, e.push = function(t, e, r, i, n, o, l, u, c, d) {
                                    var h, f, g = this;
                                    c.transmuxing.start = self.performance.now();
                                    var v = this.transmuxer,
                                        p = this.worker,
                                        m = o ? o.start : n.start,
                                        y = n.decryptdata,
                                        E = this.frag,
                                        T = !(E && n.cc === E.cc),
                                        S = !(E && c.level === E.level),
                                        b = E ? c.sn - E.sn : -1,
                                        L = this.part ? c.part - this.part.index : 1,
                                        A = !S && (1 === b || 0 === b && 1 === L),
                                        D = self.performance.now();
                                    (S || b || 0 === n.stats.parsing.start) && (n.stats.parsing.start = D), o && (L || !A) && (o.stats.parsing.start = D);
                                    var R = !(E && (null === (h = n.initSegment) || void 0 === h ? void 0 : h.url) === (null === (f = E.initSegment) || void 0 === f ? void 0 : f.url)),
                                        k = new s.TransmuxState(T, A, u, S, m, R);
                                    if (!A || T || R) {
                                        a.logger.log("[transmuxer-interface, " + n.type + "]: Starting new transmux session for sn: " + c.sn + " p: " + c.part + " level: " + c.level + " id: " + c.id + "\n        discontinuity: " + T + "\n        trackSwitch: " + S + "\n        contiguous: " + A + "\n        accurateTimeOffset: " + u + "\n        timeOffset: " + m + "\n        initSegmentChange: " + R);
                                        var _ = new s.TransmuxConfig(r, i, e, l, d);
                                        this.configureTransmuxer(_)
                                    }
                                    if (this.frag = n, this.part = o, p) p.postMessage({
                                        cmd: "demux",
                                        data: t,
                                        decryptdata: y,
                                        chunkMeta: c,
                                        state: k
                                    }, t instanceof ArrayBuffer ? [t] : []);
                                    else if (v) {
                                        var I = v.push(t, y, c, k);
                                        Object(s.isPromise)(I) ? I.then(function(t) {
                                            g.handleTransmuxComplete(t)
                                        }) : this.handleTransmuxComplete(I)
                                    }
                                }, e.flush = function(t) {
                                    var e = this;
                                    t.transmuxing.start = self.performance.now();
                                    var r = this.transmuxer,
                                        i = this.worker;
                                    if (i) i.postMessage({
                                        cmd: "flush",
                                        chunkMeta: t
                                    });
                                    else if (r) {
                                        var n = r.flush(t);
                                        Object(s.isPromise)(n) ? n.then(function(r) {
                                            e.handleFlushResult(r, t)
                                        }) : this.handleFlushResult(n, t)
                                    }
                                }, e.handleFlushResult = function(t, e) {
                                    var r = this;
                                    t.forEach(function(t) {
                                        r.handleTransmuxComplete(t)
                                    }), this.onFlush(e)
                                }, e.onWorkerMessage = function(t) {
                                    var e = t.data,
                                        r = this.hls;
                                    switch (e.event) {
                                        case "init":
                                            self.URL.revokeObjectURL(this.worker.objectURL);
                                            break;
                                        case "transmuxComplete":
                                            this.handleTransmuxComplete(e.data);
                                            break;
                                        case "flush":
                                            this.onFlush(e.data);
                                            break;
                                        default:
                                            e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, r.trigger(e.event, e.data)
                                    }
                                }, e.configureTransmuxer = function(t) {
                                    var e = this.worker,
                                        r = this.transmuxer;
                                    e ? e.postMessage({
                                        cmd: "configure",
                                        config: t
                                    }) : r && r.configure(t)
                                }, e.handleTransmuxComplete = function(t) {
                                    t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t)
                                }, t
                            }()
                    },
                    "./src/demux/transmuxer-worker.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return o
                        });
                        var i = r("./src/demux/transmuxer.ts"),
                            n = r("./src/events.ts"),
                            s = r("./src/utils/logger.ts"),
                            a = r("./node_modules/eventemitter3/index.js");

                        function o(t) {
                            var e = new a.EventEmitter,
                                r = function(e, r) {
                                    t.postMessage({
                                        event: e,
                                        data: r
                                    })
                                };
                            e.on(n.Events.FRAG_DECRYPTED, r), e.on(n.Events.ERROR, r), t.addEventListener("message", function(n) {
                                var a = n.data;
                                switch (a.cmd) {
                                    case "init":
                                        var o = JSON.parse(a.config);
                                        t.transmuxer = new i.default(e, a.typeSupported, o, a.vendor, a.id), Object(s.enableLogs)(o.debug), r("init", null);
                                        break;
                                    case "configure":
                                        t.transmuxer.configure(a.config);
                                        break;
                                    case "demux":
                                        var u = t.transmuxer.push(a.data, a.decryptdata, a.chunkMeta, a.state);
                                        Object(i.isPromise)(u) ? u.then(function(e) {
                                            l(t, e)
                                        }) : l(t, u);
                                        break;
                                    case "flush":
                                        var d = a.chunkMeta,
                                            h = t.transmuxer.flush(d);
                                        Object(i.isPromise)(h) ? h.then(function(e) {
                                            c(t, e, d)
                                        }) : c(t, h, d)
                                }
                            })
                        }

                        function l(t, e) {
                            var r;
                            if (!(!(r = e.remuxResult).audio && !r.video && !r.text && !r.id3 && !r.initSegment)) {
                                var i = [],
                                    n = e.remuxResult,
                                    s = n.audio,
                                    a = n.video;
                                s && u(i, s), a && u(i, a), t.postMessage({
                                    event: "transmuxComplete",
                                    data: e
                                }, i)
                            }
                        }

                        function u(t, e) {
                            e.data1 && t.push(e.data1.buffer), e.data2 && t.push(e.data2.buffer)
                        }

                        function c(t, e, r) {
                            e.forEach(function(e) {
                                l(t, e)
                            }), t.postMessage({
                                event: "flush",
                                data: r
                            })
                        }
                    },
                    "./src/demux/transmuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return y
                        }), r.d(e, "isPromise", function() {
                            return T
                        }), r.d(e, "TransmuxConfig", function() {
                            return S
                        }), r.d(e, "TransmuxState", function() {
                            return b
                        });
                        var i, n = r("./src/events.ts"),
                            s = r("./src/errors.ts"),
                            a = r("./src/crypt/decrypter.ts"),
                            o = r("./src/demux/aacdemuxer.ts"),
                            l = r("./src/demux/mp4demuxer.ts"),
                            u = r("./src/demux/tsdemuxer.ts"),
                            c = r("./src/demux/mp3demuxer.ts"),
                            d = r("./src/remux/mp4-remuxer.ts"),
                            h = r("./src/remux/passthrough-remuxer.ts"),
                            f = r("./src/demux/chunk-cache.ts"),
                            g = r("./src/utils/mp4-tools.ts"),
                            v = r("./src/utils/logger.ts");
                        try {
                            i = self.performance.now.bind(self.performance)
                        } catch (t) {
                            v.logger.debug("Unable to use Performance API on this environment"), i = self.Date.now
                        }
                        var p = [{
                                demux: u.default,
                                remux: d.default
                            }, {
                                demux: l.default,
                                remux: h.default
                            }, {
                                demux: o.default,
                                remux: d.default
                            }, {
                                demux: c.default,
                                remux: d.default
                            }],
                            m = 1024;
                        p.forEach(function(t) {
                            var e = t.demux;
                            m = Math.max(m, e.minProbeByteLength)
                        });
                        var y = function() {
                                function t(t, e, r, i, n) {
                                    this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new f.default, this.observer = t, this.typeSupported = e, this.config = r, this.vendor = i, this.id = n
                                }
                                var e = t.prototype;
                                return e.configure = function(t) {
                                    this.transmuxConfig = t, this.decrypter && this.decrypter.reset()
                                }, e.push = function(t, e, r, n) {
                                    var s, a = this,
                                        o = r.transmuxing;
                                    o.executeStart = i();
                                    var l = new Uint8Array(t),
                                        u = this.cache,
                                        c = this.config,
                                        d = this.currentTransmuxState,
                                        h = this.transmuxConfig;
                                    n && (this.currentTransmuxState = n);
                                    var f = (s = null, l.byteLength > 0 && null != e && null != e.key && null !== e.iv && null != e.method && (s = e), s);
                                    if (f && "AES-128" === f.method) {
                                        var v = this.getDecrypter();
                                        if (!c.enableSoftwareAES) return this.decryptionPromise = v.webCryptoDecrypt(l, f.key.buffer, f.iv.buffer).then(function(t) {
                                            var e = a.push(t, null, r);
                                            return a.decryptionPromise = null, e
                                        }), this.decryptionPromise;
                                        var p = v.softwareDecrypt(l, f.key.buffer, f.iv.buffer);
                                        if (!p) return o.executeEnd = i(), E(r);
                                        l = new Uint8Array(p)
                                    }
                                    var m = n || d,
                                        y = m.contiguous,
                                        T = m.discontinuity,
                                        S = m.trackSwitch,
                                        b = m.accurateTimeOffset,
                                        L = m.timeOffset,
                                        A = m.initSegmentChange,
                                        D = h.audioCodec,
                                        R = h.videoCodec,
                                        k = h.defaultInitPts,
                                        _ = h.duration,
                                        I = h.initSegmentData;
                                    if ((T || S || A) && this.resetInitSegment(I, D, R, _), (T || A) && this.resetInitialTimestamp(k), y || this.resetContiguity(), this.needsProbing(l, T, S)) {
                                        if (u.dataLength) {
                                            var C = u.flush();
                                            l = Object(g.appendUint8Array)(C, l)
                                        }
                                        this.configureTransmuxer(l, h)
                                    }
                                    var O = this.transmux(l, f, L, b, r),
                                        x = this.currentTransmuxState;
                                    return x.contiguous = !0, x.discontinuity = !1, x.trackSwitch = !1, o.executeEnd = i(), O
                                }, e.flush = function(t) {
                                    var e = this,
                                        r = t.transmuxing;
                                    r.executeStart = i();
                                    var a = this.decrypter,
                                        o = this.cache,
                                        l = this.currentTransmuxState,
                                        u = this.decryptionPromise;
                                    if (u) return u.then(function() {
                                        return e.flush(t)
                                    });
                                    var c = [],
                                        d = l.timeOffset;
                                    if (a) {
                                        var h = a.flush();
                                        h && c.push(this.push(h, null, t))
                                    }
                                    var f = o.dataLength;
                                    o.reset();
                                    var g = this.demuxer,
                                        v = this.remuxer;
                                    if (!g || !v) return f >= m && this.observer.emit(n.Events.ERROR, n.Events.ERROR, {
                                        type: s.ErrorTypes.MEDIA_ERROR,
                                        details: s.ErrorDetails.FRAG_PARSING_ERROR,
                                        fatal: !0,
                                        reason: "no demux matching with content found"
                                    }), r.executeEnd = i(), [E(t)];
                                    var p = g.flush(d);
                                    return T(p) ? p.then(function(r) {
                                        return e.flushRemux(c, r, t), c
                                    }) : (this.flushRemux(c, p, t), c)
                                }, e.flushRemux = function(t, e, r) {
                                    var n = e.audioTrack,
                                        s = e.avcTrack,
                                        a = e.id3Track,
                                        o = e.textTrack,
                                        l = this.currentTransmuxState,
                                        u = l.accurateTimeOffset,
                                        c = l.timeOffset;
                                    v.logger.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
                                    var d = this.remuxer.remux(n, s, a, o, c, u, !0, this.id);
                                    t.push({
                                        remuxResult: d,
                                        chunkMeta: r
                                    }), r.transmuxing.executeEnd = i()
                                }, e.resetInitialTimestamp = function(t) {
                                    var e = this.demuxer,
                                        r = this.remuxer;
                                    e && r && (e.resetTimeStamp(t), r.resetTimeStamp(t))
                                }, e.resetContiguity = function() {
                                    var t = this.demuxer,
                                        e = this.remuxer;
                                    t && e && (t.resetContiguity(), e.resetNextTimestamp())
                                }, e.resetInitSegment = function(t, e, r, i) {
                                    var n = this.demuxer,
                                        s = this.remuxer;
                                    n && s && (n.resetInitSegment(e, r, i), s.resetInitSegment(t, e, r))
                                }, e.destroy = function() {
                                    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
                                }, e.transmux = function(t, e, r, i, n) {
                                    return e && "SAMPLE-AES" === e.method ? this.transmuxSampleAes(t, e, r, i, n) : this.transmuxUnencrypted(t, r, i, n)
                                }, e.transmuxUnencrypted = function(t, e, r, i) {
                                    var n = this.demuxer.demux(t, e, !1, !this.config.progressive),
                                        s = n.audioTrack,
                                        a = n.avcTrack,
                                        o = n.id3Track,
                                        l = n.textTrack;
                                    return {
                                        remuxResult: this.remuxer.remux(s, a, o, l, e, r, !1, this.id),
                                        chunkMeta: i
                                    }
                                }, e.transmuxSampleAes = function(t, e, r, i, n) {
                                    var s = this;
                                    return this.demuxer.demuxSampleAes(t, e, r).then(function(t) {
                                        return {
                                            remuxResult: s.remuxer.remux(t.audioTrack, t.avcTrack, t.id3Track, t.textTrack, r, i, !1, s.id),
                                            chunkMeta: n
                                        }
                                    })
                                }, e.configureTransmuxer = function(t, e) {
                                    for (var r, i = this.config, n = this.observer, s = this.typeSupported, a = this.vendor, o = e.audioCodec, u = e.defaultInitPts, c = e.duration, d = e.initSegmentData, f = e.videoCodec, g = 0, m = p.length; g < m; g++)
                                        if (p[g].demux.probe(t)) {
                                            r = p[g];
                                            break
                                        }
                                    r || (v.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), r = {
                                        demux: l.default,
                                        remux: h.default
                                    });
                                    var y = this.demuxer,
                                        E = this.remuxer,
                                        T = r.remux,
                                        S = r.demux;
                                    E && E instanceof T || (this.remuxer = new T(n, i, s, a)), y && y instanceof S || (this.demuxer = new S(n, i, s), this.probe = S.probe), this.resetInitSegment(d, o, f, c), this.resetInitialTimestamp(u)
                                }, e.needsProbing = function(t, e, r) {
                                    return !this.demuxer || !this.remuxer || e || r
                                }, e.getDecrypter = function() {
                                    var t = this.decrypter;
                                    return t || (t = this.decrypter = new a.default(this.observer, this.config)), t
                                }, t
                            }(),
                            E = function(t) {
                                return {
                                    remuxResult: {},
                                    chunkMeta: t
                                }
                            };

                        function T(t) {
                            return "then" in t && t.then instanceof Function
                        }
                        var S = function(t, e, r, i, n) {
                                this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = t, this.videoCodec = e, this.initSegmentData = r, this.duration = i, this.defaultInitPts = n
                            },
                            b = function(t, e, r, i, n, s) {
                                this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = t, this.contiguous = e, this.accurateTimeOffset = r, this.trackSwitch = i, this.timeOffset = n, this.initSegmentChange = s
                            }
                    },
                    "./src/demux/tsdemuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "discardEPB", function() {
                            return y
                        });
                        var i = r("./src/demux/adts.ts"),
                            n = r("./src/demux/mpegaudio.ts"),
                            s = r("./src/demux/exp-golomb.ts"),
                            a = r("./src/demux/id3.ts"),
                            o = r("./src/demux/sample-aes.ts"),
                            l = r("./src/events.ts"),
                            u = r("./src/utils/mp4-tools.ts"),
                            c = r("./src/utils/logger.ts"),
                            d = r("./src/errors.ts"),
                            h = {
                                video: 1,
                                audio: 2,
                                id3: 3,
                                text: 4
                            },
                            f = function() {
                                function t(t, e, r) {
                                    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, this._initPTS = null, this._initDTS = null, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = t, this.config = e, this.typeSupported = r
                                }
                                t.probe = function(e) {
                                    var r = t.syncOffset(e);
                                    return !(r < 0) && (r && c.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0)
                                }, t.syncOffset = function(t) {
                                    for (var e = Math.min(1e3, t.length - 564), r = 0; r < e;) {
                                        if (71 === t[r] && 71 === t[r + 188] && 71 === t[r + 376]) return r;
                                        r++
                                    }
                                    return -1
                                }, t.createTrack = function(t, e) {
                                    return {
                                        container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
                                        type: t,
                                        id: h[t],
                                        pid: -1,
                                        inputTimeScale: 9e4,
                                        sequenceNumber: 0,
                                        samples: [],
                                        dropped: 0,
                                        duration: "audio" === t ? e : void 0
                                    }
                                };
                                var e = t.prototype;
                                return e.resetInitSegment = function(e, r, i) {
                                    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = t.createTrack("video", i), this._audioTrack = t.createTrack("audio", i), this._id3Track = t.createTrack("id3", i), this._txtTrack = t.createTrack("text", i), this._audioTrack.isAAC = !0, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = e, this.videoCodec = r, this._duration = i
                                }, e.resetTimeStamp = function() {}, e.resetContiguity = function() {
                                    var t = this._audioTrack,
                                        e = this._avcTrack,
                                        r = this._id3Track;
                                    t && (t.pesData = null), e && (e.pesData = null), r && (r.pesData = null), this.aacOverFlow = null, this.aacLastPTS = null
                                }, e.demux = function(e, r, i, n) {
                                    void 0 === i && (i = !1), void 0 === n && (n = !1), i || (this.sampleAes = null);
                                    var s, a = this._avcTrack,
                                        o = this._audioTrack,
                                        h = this._id3Track,
                                        f = a.pid,
                                        g = a.pesData,
                                        p = o.pid,
                                        m = h.pid,
                                        y = o.pesData,
                                        E = h.pesData,
                                        T = !1,
                                        S = this.pmtParsed,
                                        b = this._pmtId,
                                        L = e.length;
                                    if (this.remainderData && (L = (e = Object(u.appendUint8Array)(this.remainderData, e)).length, this.remainderData = null), L < 188 && !n) return this.remainderData = e, {
                                        audioTrack: o,
                                        avcTrack: a,
                                        id3Track: h,
                                        textTrack: this._txtTrack
                                    };
                                    var A = Math.max(0, t.syncOffset(e));
                                    (L -= (L + A) % 188) < e.byteLength && !n && (this.remainderData = new Uint8Array(e.buffer, L, e.buffer.byteLength - L));
                                    for (var D = 0, R = A; R < L; R += 188)
                                        if (71 === e[R]) {
                                            var k, _, I = !!(64 & e[R + 1]),
                                                C = ((31 & e[R + 1]) << 8) + e[R + 2],
                                                O = (48 & e[R + 3]) >> 4,
                                                x = void 0;
                                            if (O > 1) {
                                                if ((x = R + 5 + e[R + 4]) === R + 188) continue
                                            } else x = R + 4;
                                            switch (C) {
                                                case f:
                                                    I && (g && (s = v(g)) && this.parseAVCPES(s, !1), g = {
                                                        data: [],
                                                        size: 0
                                                    }), g && (g.data.push(e.subarray(x, R + 188)), g.size += R + 188 - x);
                                                    break;
                                                case p:
                                                    I && (y && (s = v(y)) && (o.isAAC ? this.parseAACPES(s) : this.parseMPEGPES(s)), y = {
                                                        data: [],
                                                        size: 0
                                                    }), y && (y.data.push(e.subarray(x, R + 188)), y.size += R + 188 - x);
                                                    break;
                                                case m:
                                                    I && (E && (s = v(E)) && this.parseID3PES(s), E = {
                                                        data: [],
                                                        size: 0
                                                    }), E && (E.data.push(e.subarray(x, R + 188)), E.size += R + 188 - x);
                                                    break;
                                                case 0:
                                                    I && (x += e[x] + 1), b = this._pmtId = (31 & (k = e)[(_ = x) + 10]) << 8 | k[_ + 11];
                                                    break;
                                                case b:
                                                    I && (x += e[x] + 1);
                                                    var w = function(t, e, r, i) {
                                                        var n = {
                                                                audio: -1,
                                                                avc: -1,
                                                                id3: -1,
                                                                isAAC: !0
                                                            },
                                                            s = (15 & t[e + 1]) << 8 | t[e + 2],
                                                            a = e + 3 + s - 4,
                                                            o = (15 & t[e + 10]) << 8 | t[e + 11];
                                                        for (e += 12 + o; e < a;) {
                                                            var l = (31 & t[e + 1]) << 8 | t[e + 2];
                                                            switch (t[e]) {
                                                                case 207:
                                                                    if (!i) {
                                                                        c.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                                                                        break
                                                                    }
                                                                case 15:
                                                                    -1 === n.audio && (n.audio = l);
                                                                    break;
                                                                case 21:
                                                                    -1 === n.id3 && (n.id3 = l);
                                                                    break;
                                                                case 219:
                                                                    if (!i) {
                                                                        c.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                                                                        break
                                                                    }
                                                                case 27:
                                                                    -1 === n.avc && (n.avc = l);
                                                                    break;
                                                                case 3:
                                                                case 4:
                                                                    r ? -1 === n.audio && (n.audio = l, n.isAAC = !1) : c.logger.log("MPEG audio found, not supported in this browser");
                                                                    break;
                                                                case 36:
                                                                    c.logger.warn("Unsupported HEVC stream type found")
                                                            }
                                                            e += ((15 & t[e + 3]) << 8 | t[e + 4]) + 5
                                                        }
                                                        return n
                                                    }(e, x, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, i);
                                                    (f = w.avc) > 0 && (a.pid = f), (p = w.audio) > 0 && (o.pid = p, o.isAAC = w.isAAC), (m = w.id3) > 0 && (h.pid = m), T && !S && (c.logger.log("reparse from beginning"), T = !1, R = A - 188), S = this.pmtParsed = !0;
                                                    break;
                                                case 17:
                                                case 8191:
                                                    break;
                                                default:
                                                    T = !0
                                            }
                                        } else D++;
                                    D > 0 && this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
                                        type: d.ErrorTypes.MEDIA_ERROR,
                                        details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                        fatal: !1,
                                        reason: "Found " + D + " TS packet/s that do not start with 0x47"
                                    }), a.pesData = g, o.pesData = y, h.pesData = E;
                                    var P = {
                                        audioTrack: o,
                                        avcTrack: a,
                                        id3Track: h,
                                        textTrack: this._txtTrack
                                    };
                                    return n && this.extractRemainingSamples(P), P
                                }, e.flush = function() {
                                    var t, e = this.remainderData;
                                    return (this.remainderData = null, t = e ? this.demux(e, -1, !1, !0) : {
                                        audioTrack: this._audioTrack,
                                        avcTrack: this._avcTrack,
                                        textTrack: this._txtTrack,
                                        id3Track: this._id3Track
                                    }, this.extractRemainingSamples(t), this.sampleAes) ? this.decrypt(t, this.sampleAes) : t
                                }, e.extractRemainingSamples = function(t) {
                                    var e, r = t.audioTrack,
                                        i = t.avcTrack,
                                        n = t.id3Track,
                                        s = i.pesData,
                                        a = r.pesData,
                                        o = n.pesData;
                                    s && (e = v(s)) ? (this.parseAVCPES(e, !0), i.pesData = null) : i.pesData = s, a && (e = v(a)) ? (r.isAAC ? this.parseAACPES(e) : this.parseMPEGPES(e), r.pesData = null) : (null != a && a.size && c.logger.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = a), o && (e = v(o)) ? (this.parseID3PES(e), n.pesData = null) : n.pesData = o
                                }, e.demuxSampleAes = function(t, e, r) {
                                    var i = this.demux(t, r, !0, !this.config.progressive),
                                        n = this.sampleAes = new o.default(this.observer, this.config, e);
                                    return this.decrypt(i, n)
                                }, e.decrypt = function(t, e) {
                                    return new Promise(function(r) {
                                        var i = t.audioTrack,
                                            n = t.avcTrack;
                                        i.samples && i.isAAC ? e.decryptAacSamples(i.samples, 0, function() {
                                            n.samples ? e.decryptAvcSamples(n.samples, 0, 0, function() {
                                                r(t)
                                            }) : r(t)
                                        }) : n.samples && e.decryptAvcSamples(n.samples, 0, 0, function() {
                                            r(t)
                                        })
                                    })
                                }, e.destroy = function() {
                                    this._initPTS = this._initDTS = null, this._duration = 0
                                }, e.parseAVCPES = function(t, e) {
                                    var r, i = this,
                                        n = this._avcTrack,
                                        o = this.parseAVCNALu(t.data),
                                        l = this.avcSample,
                                        u = !1;
                                    t.data = null, l && o.length && !n.audFound && (p(l, n), l = this.avcSample = g(!1, t.pts, t.dts, "")), o.forEach(function(e) {
                                        switch (e.type) {
                                            case 1:
                                                r = !0, l || (l = i.avcSample = g(!0, t.pts, t.dts, "")), l.frame = !0;
                                                var o = e.data;
                                                if (u && o.length > 4) {
                                                    var c = new s.default(o).readSliceType();
                                                    (2 === c || 4 === c || 7 === c || 9 === c) && (l.key = !0)
                                                }
                                                break;
                                            case 5:
                                                r = !0, l || (l = i.avcSample = g(!0, t.pts, t.dts, "")), l.key = !0, l.frame = !0;
                                                break;
                                            case 6:
                                                r = !0;
                                                var d = new s.default(y(e.data));
                                                d.readUByte();
                                                for (var h = 0, f = 0, v = !1, E = 0; !v && d.bytesAvailable > 1;) {
                                                    h = 0;
                                                    do h += E = d.readUByte(); while (255 === E);
                                                    f = 0;
                                                    do f += E = d.readUByte(); while (255 === E);
                                                    if (4 === h && 0 !== d.bytesAvailable) {
                                                        if (v = !0, 181 === d.readUByte() && 49 === d.readUShort() && 1195456820 === d.readUInt() && 3 === d.readUByte()) {
                                                            for (var T = d.readUByte(), S = d.readUByte(), b = 31 & T, L = [T, S], A = 0; A < b; A++) L.push(d.readUByte()), L.push(d.readUByte()), L.push(d.readUByte());
                                                            m(i._txtTrack.samples, {
                                                                type: 3,
                                                                pts: t.pts,
                                                                bytes: L
                                                            })
                                                        }
                                                    } else if (5 === h && 0 !== d.bytesAvailable) {
                                                        if (v = !0, f > 16) {
                                                            for (var D = [], R = 0; R < 16; R++) D.push(d.readUByte().toString(16)), (3 === R || 5 === R || 7 === R || 9 === R) && D.push("-");
                                                            for (var k = f - 16, _ = new Uint8Array(k), I = 0; I < k; I++) _[I] = d.readUByte();
                                                            m(i._txtTrack.samples, {
                                                                pts: t.pts,
                                                                payloadType: h,
                                                                uuid: D.join(""),
                                                                userData: Object(a.utf8ArrayToStr)(_),
                                                                userDataBytes: _
                                                            })
                                                        }
                                                    } else if (f < d.bytesAvailable)
                                                        for (var C = 0; C < f; C++) d.readUByte()
                                                }
                                                break;
                                            case 7:
                                                if (r = !0, u = !0, !n.sps) {
                                                    var O = new s.default(e.data).readSPS();
                                                    n.width = O.width, n.height = O.height, n.pixelRatio = O.pixelRatio, n.sps = [e.data], n.duration = i._duration;
                                                    for (var x = e.data.subarray(1, 4), w = "avc1.", P = 0; P < 3; P++) {
                                                        var F = x[P].toString(16);
                                                        F.length < 2 && (F = "0" + F), w += F
                                                    }
                                                    n.codec = w
                                                }
                                                break;
                                            case 8:
                                                r = !0, n.pps || (n.pps = [e.data]);
                                                break;
                                            case 9:
                                                r = !1, n.audFound = !0, l && p(l, n), l = i.avcSample = g(!1, t.pts, t.dts, "");
                                                break;
                                            case 12:
                                                r = !1;
                                                break;
                                            default:
                                                r = !1, l && (l.debug += "unknown NAL " + e.type + " ")
                                        }
                                        l && r && l.units.push(e)
                                    }), e && l && (p(l, n), this.avcSample = null)
                                }, e.getLastNalUnit = function() {
                                    var t, e, r = this.avcSample;
                                    if (!r || 0 === r.units.length) {
                                        var i = this._avcTrack.samples;
                                        r = i[i.length - 1]
                                    }
                                    if (null !== (t = r) && void 0 !== t && t.units) {
                                        var n = r.units;
                                        e = n[n.length - 1]
                                    }
                                    return e
                                }, e.parseAVCNALu = function(t) {
                                    var e, r, i, n = t.byteLength,
                                        s = this._avcTrack,
                                        a = s.naluState || 0,
                                        o = a,
                                        l = [],
                                        u = 0,
                                        c = -1,
                                        d = 0;
                                    for (-1 === a && (c = 0, d = 31 & t[0], a = 0, u = 1); u < n;) {
                                        if (e = t[u++], !a) {
                                            a = e ? 0 : 1;
                                            continue
                                        }
                                        if (1 === a) {
                                            a = e ? 0 : 2;
                                            continue
                                        }
                                        if (e) {
                                            if (1 === e) {
                                                if (c >= 0) {
                                                    var h = {
                                                        data: t.subarray(c, u - a - 1),
                                                        type: d
                                                    };
                                                    l.push(h)
                                                } else {
                                                    var f = this.getLastNalUnit();
                                                    if (f && (o && u <= 4 - o && f.state && (f.data = f.data.subarray(0, f.data.byteLength - o)), (r = u - a - 1) > 0)) {
                                                        var g = new Uint8Array(f.data.byteLength + r);
                                                        g.set(f.data, 0), g.set(t.subarray(0, r), f.data.byteLength), f.data = g, f.state = 0
                                                    }
                                                }
                                                u < n ? (i = 31 & t[u], c = u, d = i, a = 0) : a = -1
                                            } else a = 0
                                        } else a = 3
                                    }
                                    if (c >= 0 && a >= 0) {
                                        var v = {
                                            data: t.subarray(c, n),
                                            type: d,
                                            state: a
                                        };
                                        l.push(v)
                                    }
                                    if (0 === l.length) {
                                        var p = this.getLastNalUnit();
                                        if (p) {
                                            var m = new Uint8Array(p.data.byteLength + t.byteLength);
                                            m.set(p.data, 0), m.set(t, p.data.byteLength), p.data = m
                                        }
                                    }
                                    return s.naluState = a, l
                                }, e.parseAACPES = function(t) {
                                    var e, r, n, s, a, o = 0,
                                        u = this._audioTrack,
                                        h = this.aacOverFlow,
                                        f = t.data;
                                    if (h) {
                                        this.aacOverFlow = null;
                                        var g = h.sample.unit.byteLength,
                                            v = Math.min(h.missing, g);
                                        h.sample.unit.set(f.subarray(0, v), g - v), u.samples.push(h.sample), o = h.missing
                                    }
                                    for (e = o, r = f.length; e < r - 1 && !i.isHeader(f, e); e++);
                                    if (e === o || (e < r - 1 ? (n = "AAC PES did not start with ADTS header,offset:" + e, s = !1) : (n = "no ADTS header found in AAC PES", s = !0), c.logger.warn("parsing error:" + n), this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
                                            type: d.ErrorTypes.MEDIA_ERROR,
                                            details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                            fatal: s,
                                            reason: n
                                        }), !s)) {
                                        if (i.initTrackConfig(u, this.observer, f, e, this.audioCodec), void 0 !== t.pts) a = t.pts;
                                        else if (h) {
                                            var p = i.getFrameDuration(u.samplerate);
                                            a = h.sample.pts + p
                                        } else {
                                            c.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
                                            return
                                        }
                                        for (var m = 0; e < r;) {
                                            if (i.isHeader(f, e)) {
                                                if (e + 5 < r) {
                                                    var y = i.appendFrame(u, f, e, a, m);
                                                    if (y) {
                                                        if (y.missing) this.aacOverFlow = y;
                                                        else {
                                                            e += y.length, m++;
                                                            continue
                                                        }
                                                    }
                                                }
                                                break
                                            }
                                            e++
                                        }
                                    }
                                }, e.parseMPEGPES = function(t) {
                                    var e = t.data,
                                        r = e.length,
                                        i = 0,
                                        s = 0,
                                        a = t.pts;
                                    if (void 0 === a) {
                                        c.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
                                        return
                                    }
                                    for (; s < r;)
                                        if (n.isHeader(e, s)) {
                                            var o = n.appendFrame(this._audioTrack, e, s, a, i);
                                            if (o) s += o.length, i++;
                                            else break
                                        } else s++
                                }, e.parseID3PES = function(t) {
                                    if (void 0 === t.pts) {
                                        c.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
                                        return
                                    }
                                    this._id3Track.samples.push(t)
                                }, t
                            }();

                        function g(t, e, r, i) {
                            return {
                                key: t,
                                frame: !1,
                                pts: e,
                                dts: r,
                                units: [],
                                debug: i,
                                length: 0
                            }
                        }

                        function v(t) {
                            var e, r, i, n, s, a = 0,
                                o = t.data;
                            if (!t || 0 === t.size) return null;
                            for (; o[0].length < 19 && o.length > 1;) {
                                var l = new Uint8Array(o[0].length + o[1].length);
                                l.set(o[0]), l.set(o[1], o[0].length), o[0] = l, o.splice(1, 1)
                            }
                            if (1 === ((e = o[0])[0] << 16) + (e[1] << 8) + e[2]) {
                                if ((r = (e[4] << 8) + e[5]) && r > t.size - 6) return null;
                                var u = e[7];
                                192 & u && (n = (14 & e[9]) * 536870912 + (255 & e[10]) * 4194304 + (254 & e[11]) * 16384 + (255 & e[12]) * 128 + (254 & e[13]) / 2, 64 & u ? n - (s = (14 & e[14]) * 536870912 + (255 & e[15]) * 4194304 + (254 & e[16]) * 16384 + (255 & e[17]) * 128 + (254 & e[18]) / 2) > 54e5 && (c.logger.warn(Math.round((n - s) / 9e4) + "s delta between PTS and DTS, align them"), n = s) : s = n);
                                var d = (i = e[8]) + 9;
                                if (t.size <= d) return null;
                                t.size -= d;
                                for (var h = new Uint8Array(t.size), f = 0, g = o.length; f < g; f++) {
                                    var v = (e = o[f]).byteLength;
                                    if (d) {
                                        if (d > v) {
                                            d -= v;
                                            continue
                                        }
                                        e = e.subarray(d), v -= d, d = 0
                                    }
                                    h.set(e, a), a += v
                                }
                                return r && (r -= i + 3), {
                                    data: h,
                                    pts: n,
                                    dts: s,
                                    len: r
                                }
                            }
                            return null
                        }

                        function p(t, e) {
                            if (t.units.length && t.frame) {
                                if (void 0 === t.pts) {
                                    var r = e.samples,
                                        i = r.length;
                                    if (i) {
                                        var n = r[i - 1];
                                        t.pts = n.pts, t.dts = n.dts
                                    } else {
                                        e.dropped++;
                                        return
                                    }
                                }
                                e.samples.push(t)
                            }
                            t.debug.length && c.logger.log(t.pts + "/" + t.dts + ":" + t.debug)
                        }

                        function m(t, e) {
                            var r = t.length;
                            if (r > 0) {
                                if (e.pts >= t[r - 1].pts) t.push(e);
                                else
                                    for (var i = r - 1; i >= 0; i--)
                                        if (e.pts < t[i].pts) {
                                            t.splice(i, 0, e);
                                            break
                                        }
                            } else t.push(e)
                        }

                        function y(t) {
                            for (var e = t.byteLength, r = [], i = 1; i < e - 2;) 0 === t[i] && 0 === t[i + 1] && 3 === t[i + 2] ? (r.push(i + 2), i += 2) : i++;
                            if (0 === r.length) return t;
                            var n = e - r.length,
                                s = new Uint8Array(n),
                                a = 0;
                            for (i = 0; i < n; a++, i++) a === r[0] && (a++, r.shift()), s[i] = t[a];
                            return s
                        }
                        f.minProbeByteLength = 188, e.default = f
                    },
                    "./src/errors.ts": function(t, e, r) {
                        "use strict";
                        var i, n, s, a;
                        r.r(e), r.d(e, "ErrorTypes", function() {
                            return i
                        }), r.d(e, "ErrorDetails", function() {
                            return n
                        }), (s = i || (i = {})).NETWORK_ERROR = "networkError", s.MEDIA_ERROR = "mediaError", s.KEY_SYSTEM_ERROR = "keySystemError", s.MUX_ERROR = "muxError", s.OTHER_ERROR = "otherError", (a = n || (n = {})).KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", a.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", a.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", a.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", a.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", a.MANIFEST_LOAD_ERROR = "manifestLoadError", a.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", a.MANIFEST_PARSING_ERROR = "manifestParsingError", a.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", a.LEVEL_EMPTY_ERROR = "levelEmptyError", a.LEVEL_LOAD_ERROR = "levelLoadError", a.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", a.LEVEL_SWITCH_ERROR = "levelSwitchError", a.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", a.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", a.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", a.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", a.FRAG_LOAD_ERROR = "fragLoadError", a.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", a.FRAG_DECRYPT_ERROR = "fragDecryptError", a.FRAG_PARSING_ERROR = "fragParsingError", a.REMUX_ALLOC_ERROR = "remuxAllocError", a.KEY_LOAD_ERROR = "keyLoadError", a.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", a.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", a.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", a.BUFFER_APPEND_ERROR = "bufferAppendError", a.BUFFER_APPENDING_ERROR = "bufferAppendingError", a.BUFFER_STALLED_ERROR = "bufferStalledError", a.BUFFER_FULL_ERROR = "bufferFullError", a.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", a.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", a.INTERNAL_EXCEPTION = "internalException", a.INTERNAL_ABORTED = "aborted", a.UNKNOWN = "unknown"
                    },
                    "./src/events.ts": function(t, e, r) {
                        "use strict";
                        var i, n;
                        r.r(e), r.d(e, "Events", function() {
                            return i
                        }), (n = i || (i = {})).MEDIA_ATTACHING = "hlsMediaAttaching", n.MEDIA_ATTACHED = "hlsMediaAttached", n.MEDIA_DETACHING = "hlsMediaDetaching", n.MEDIA_DETACHED = "hlsMediaDetached", n.BUFFER_RESET = "hlsBufferReset", n.BUFFER_CODECS = "hlsBufferCodecs", n.BUFFER_CREATED = "hlsBufferCreated", n.BUFFER_APPENDING = "hlsBufferAppending", n.BUFFER_APPENDED = "hlsBufferAppended", n.BUFFER_EOS = "hlsBufferEos", n.BUFFER_FLUSHING = "hlsBufferFlushing", n.BUFFER_FLUSHED = "hlsBufferFlushed", n.MANIFEST_LOADING = "hlsManifestLoading", n.MANIFEST_LOADED = "hlsManifestLoaded", n.MANIFEST_PARSED = "hlsManifestParsed", n.LEVEL_SWITCHING = "hlsLevelSwitching", n.LEVEL_SWITCHED = "hlsLevelSwitched", n.LEVEL_LOADING = "hlsLevelLoading", n.LEVEL_LOADED = "hlsLevelLoaded", n.LEVEL_UPDATED = "hlsLevelUpdated", n.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", n.LEVELS_UPDATED = "hlsLevelsUpdated", n.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", n.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", n.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", n.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", n.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", n.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", n.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", n.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", n.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", n.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", n.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", n.CUES_PARSED = "hlsCuesParsed", n.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", n.INIT_PTS_FOUND = "hlsInitPtsFound", n.FRAG_LOADING = "hlsFragLoading", n.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", n.FRAG_LOADED = "hlsFragLoaded", n.FRAG_DECRYPTED = "hlsFragDecrypted", n.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", n.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", n.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", n.FRAG_PARSED = "hlsFragParsed", n.FRAG_BUFFERED = "hlsFragBuffered", n.FRAG_CHANGED = "hlsFragChanged", n.FPS_DROP = "hlsFpsDrop", n.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", n.ERROR = "hlsError", n.DESTROYING = "hlsDestroying", n.KEY_LOADING = "hlsKeyLoading", n.KEY_LOADED = "hlsKeyLoaded", n.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", n.BACK_BUFFER_REACHED = "hlsBackBufferReached"
                    },
                    "./src/hls.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return y
                        });
                        var i = r("./node_modules/url-toolkit/src/url-toolkit.js"),
                            n = r("./src/loader/playlist-loader.ts"),
                            s = r("./src/loader/key-loader.ts"),
                            a = r("./src/controller/id3-track-controller.ts"),
                            o = r("./src/controller/latency-controller.ts"),
                            l = r("./src/controller/level-controller.ts"),
                            u = r("./src/controller/fragment-tracker.ts"),
                            c = r("./src/controller/stream-controller.ts"),
                            d = r("./src/is-supported.ts"),
                            h = r("./src/utils/logger.ts"),
                            f = r("./src/config.ts"),
                            g = r("./node_modules/eventemitter3/index.js"),
                            v = r("./src/events.ts"),
                            p = r("./src/errors.ts");

                        function m(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }
                        var y = function() {
                            function t(e) {
                                void 0 === e && (e = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new g.EventEmitter, this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null;
                                var r = this.config = Object(f.mergeConfig)(t.DefaultConfig, e);
                                this.userConfig = e, Object(h.enableLogs)(r.debug), this._autoLevelCapping = -1, r.progressive && Object(f.enableStreamingMode)(r);
                                var i = r.abrController,
                                    d = r.bufferController,
                                    v = r.capLevelController,
                                    p = r.fpsController,
                                    m = this.abrController = new i(this),
                                    y = this.bufferController = new d(this),
                                    E = this.capLevelController = new v(this),
                                    T = new p(this),
                                    S = new n.default(this),
                                    b = new s.default(this),
                                    L = new a.default(this),
                                    A = this.levelController = new l.default(this),
                                    D = new u.FragmentTracker(this),
                                    R = this.streamController = new c.default(this, D);
                                E.setStreamController(R), T.setStreamController(R);
                                var k = [A, R];
                                this.networkControllers = k;
                                var _ = [S, b, m, y, E, T, L, D];
                                this.audioTrackController = this.createController(r.audioTrackController, null, k), this.createController(r.audioStreamController, D, k), this.subtitleTrackController = this.createController(r.subtitleTrackController, null, k), this.createController(r.subtitleStreamController, D, k), this.createController(r.timelineController, null, _), this.emeController = this.createController(r.emeController, null, _), this.cmcdController = this.createController(r.cmcdController, null, _), this.latencyController = this.createController(o.default, null, _), this.coreComponents = _
                            }
                            t.isSupported = function() {
                                return Object(d.isSupported)()
                            };
                            var e, r, y = t.prototype;
                            return y.createController = function(t, e, r) {
                                if (t) {
                                    var i = e ? new t(this, e) : new t(this);
                                    return r && r.push(i), i
                                }
                                return null
                            }, y.on = function(t, e, r) {
                                void 0 === r && (r = this), this._emitter.on(t, e, r)
                            }, y.once = function(t, e, r) {
                                void 0 === r && (r = this), this._emitter.once(t, e, r)
                            }, y.removeAllListeners = function(t) {
                                this._emitter.removeAllListeners(t)
                            }, y.off = function(t, e, r, i) {
                                void 0 === r && (r = this), this._emitter.off(t, e, r, i)
                            }, y.listeners = function(t) {
                                return this._emitter.listeners(t)
                            }, y.emit = function(t, e, r) {
                                return this._emitter.emit(t, e, r)
                            }, y.trigger = function(t, e) {
                                if (this.config.debug) return this.emit(t, t, e);
                                try {
                                    return this.emit(t, t, e)
                                } catch (e) {
                                    h.logger.error("An internal error happened while handling event " + t + '. Error message: "' + e.message + '". Here is a stacktrace:', e), this.trigger(v.Events.ERROR, {
                                        type: p.ErrorTypes.OTHER_ERROR,
                                        details: p.ErrorDetails.INTERNAL_EXCEPTION,
                                        fatal: !1,
                                        event: t,
                                        error: e
                                    })
                                }
                                return !1
                            }, y.listenerCount = function(t) {
                                return this._emitter.listenerCount(t)
                            }, y.destroy = function() {
                                h.logger.log("destroy"), this.trigger(v.Events.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function(t) {
                                    return t.destroy()
                                }), this.networkControllers.length = 0, this.coreComponents.forEach(function(t) {
                                    return t.destroy()
                                }), this.coreComponents.length = 0
                            }, y.attachMedia = function(t) {
                                h.logger.log("attachMedia"), this._media = t, this.trigger(v.Events.MEDIA_ATTACHING, {
                                    media: t
                                })
                            }, y.detachMedia = function() {
                                h.logger.log("detachMedia"), this.trigger(v.Events.MEDIA_DETACHING, void 0), this._media = null
                            }, y.loadSource = function(t) {
                                this.stopLoad();
                                var e = this.media,
                                    r = this.url,
                                    n = this.url = i.buildAbsoluteURL(self.location.href, t, {
                                        alwaysNormalize: !0
                                    });
                                h.logger.log("loadSource:" + n), e && r && r !== n && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(e)), this.trigger(v.Events.MANIFEST_LOADING, {
                                    url: t
                                })
                            }, y.startLoad = function(t) {
                                void 0 === t && (t = -1), h.logger.log("startLoad(" + t + ")"), this.networkControllers.forEach(function(e) {
                                    e.startLoad(t)
                                })
                            }, y.stopLoad = function() {
                                h.logger.log("stopLoad"), this.networkControllers.forEach(function(t) {
                                    t.stopLoad()
                                })
                            }, y.swapAudioCodec = function() {
                                h.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                            }, y.recoverMediaError = function() {
                                h.logger.log("recoverMediaError");
                                var t = this._media;
                                this.detachMedia(), t && this.attachMedia(t)
                            }, y.removeLevel = function(t, e) {
                                void 0 === e && (e = 0), this.levelController.removeLevel(t, e)
                            }, e = [{
                                key: "levels",
                                get: function() {
                                    return this.levelController.levels || []
                                }
                            }, {
                                key: "currentLevel",
                                get: function() {
                                    return this.streamController.currentLevel
                                },
                                set: function(t) {
                                    h.logger.log("set currentLevel:" + t), this.loadLevel = t, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
                                }
                            }, {
                                key: "nextLevel",
                                get: function() {
                                    return this.streamController.nextLevel
                                },
                                set: function(t) {
                                    h.logger.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
                                }
                            }, {
                                key: "loadLevel",
                                get: function() {
                                    return this.levelController.level
                                },
                                set: function(t) {
                                    h.logger.log("set loadLevel:" + t), this.levelController.manualLevel = t
                                }
                            }, {
                                key: "nextLoadLevel",
                                get: function() {
                                    return this.levelController.nextLoadLevel
                                },
                                set: function(t) {
                                    this.levelController.nextLoadLevel = t
                                }
                            }, {
                                key: "firstLevel",
                                get: function() {
                                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                                },
                                set: function(t) {
                                    h.logger.log("set firstLevel:" + t), this.levelController.firstLevel = t
                                }
                            }, {
                                key: "startLevel",
                                get: function() {
                                    return this.levelController.startLevel
                                },
                                set: function(t) {
                                    h.logger.log("set startLevel:" + t), -1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
                                }
                            }, {
                                key: "capLevelToPlayerSize",
                                get: function() {
                                    return this.config.capLevelToPlayerSize
                                },
                                set: function(t) {
                                    var e = !!t;
                                    e !== this.config.capLevelToPlayerSize && (e ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = e)
                                }
                            }, {
                                key: "autoLevelCapping",
                                get: function() {
                                    return this._autoLevelCapping
                                },
                                set: function(t) {
                                    this._autoLevelCapping !== t && (h.logger.log("set autoLevelCapping:" + t), this._autoLevelCapping = t)
                                }
                            }, {
                                key: "bandwidthEstimate",
                                get: function() {
                                    var t = this.abrController.bwEstimator;
                                    return t ? t.getEstimate() : NaN
                                }
                            }, {
                                key: "autoLevelEnabled",
                                get: function() {
                                    return -1 === this.levelController.manualLevel
                                }
                            }, {
                                key: "manualLevel",
                                get: function() {
                                    return this.levelController.manualLevel
                                }
                            }, {
                                key: "minAutoLevel",
                                get: function() {
                                    var t = this.levels,
                                        e = this.config.minAutoBitrate;
                                    if (!t) return 0;
                                    for (var r = t.length, i = 0; i < r; i++)
                                        if (t[i].maxBitrate > e) return i;
                                    return 0
                                }
                            }, {
                                key: "maxAutoLevel",
                                get: function() {
                                    var t = this.levels,
                                        e = this.autoLevelCapping;
                                    return -1 === e && t && t.length ? t.length - 1 : e
                                }
                            }, {
                                key: "nextAutoLevel",
                                get: function() {
                                    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                                },
                                set: function(t) {
                                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
                                }
                            }, {
                                key: "audioTracks",
                                get: function() {
                                    var t = this.audioTrackController;
                                    return t ? t.audioTracks : []
                                }
                            }, {
                                key: "audioTrack",
                                get: function() {
                                    var t = this.audioTrackController;
                                    return t ? t.audioTrack : -1
                                },
                                set: function(t) {
                                    var e = this.audioTrackController;
                                    e && (e.audioTrack = t)
                                }
                            }, {
                                key: "subtitleTracks",
                                get: function() {
                                    var t = this.subtitleTrackController;
                                    return t ? t.subtitleTracks : []
                                }
                            }, {
                                key: "subtitleTrack",
                                get: function() {
                                    var t = this.subtitleTrackController;
                                    return t ? t.subtitleTrack : -1
                                },
                                set: function(t) {
                                    var e = this.subtitleTrackController;
                                    e && (e.subtitleTrack = t)
                                }
                            }, {
                                key: "media",
                                get: function() {
                                    return this._media
                                }
                            }, {
                                key: "subtitleDisplay",
                                get: function() {
                                    var t = this.subtitleTrackController;
                                    return !!t && t.subtitleDisplay
                                },
                                set: function(t) {
                                    var e = this.subtitleTrackController;
                                    e && (e.subtitleDisplay = t)
                                }
                            }, {
                                key: "lowLatencyMode",
                                get: function() {
                                    return this.config.lowLatencyMode
                                },
                                set: function(t) {
                                    this.config.lowLatencyMode = t
                                }
                            }, {
                                key: "liveSyncPosition",
                                get: function() {
                                    return this.latencyController.liveSyncPosition
                                }
                            }, {
                                key: "latency",
                                get: function() {
                                    return this.latencyController.latency
                                }
                            }, {
                                key: "maxLatency",
                                get: function() {
                                    return this.latencyController.maxLatency
                                }
                            }, {
                                key: "targetLatency",
                                get: function() {
                                    return this.latencyController.targetLatency
                                }
                            }, {
                                key: "drift",
                                get: function() {
                                    return this.latencyController.drift
                                }
                            }, {
                                key: "forceStartLoad",
                                get: function() {
                                    return this.streamController.forceStartLoad
                                }
                            }], r = [{
                                key: "version",
                                get: function() {
                                    return "1.1.3"
                                }
                            }, {
                                key: "Events",
                                get: function() {
                                    return v.Events
                                }
                            }, {
                                key: "ErrorTypes",
                                get: function() {
                                    return p.ErrorTypes
                                }
                            }, {
                                key: "ErrorDetails",
                                get: function() {
                                    return p.ErrorDetails
                                }
                            }, {
                                key: "DefaultConfig",
                                get: function() {
                                    return t.defaultConfig ? t.defaultConfig : f.hlsDefaultConfig
                                },
                                set: function(e) {
                                    t.defaultConfig = e
                                }
                            }], e && m(t.prototype, e), r && m(t, r), t
                        }();
                        y.defaultConfig = void 0
                    },
                    "./src/is-supported.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "isSupported", function() {
                            return s
                        }), r.d(e, "changeTypeSupported", function() {
                            return a
                        });
                        var i = r("./src/utils/mediasource-helper.ts");

                        function n() {
                            return self.SourceBuffer || self.WebKitSourceBuffer
                        }

                        function s() {
                            var t = Object(i.getMediaSource)();
                            if (!t) return !1;
                            var e = n(),
                                r = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                                s = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove;
                            return !!r && !!s
                        }

                        function a() {
                            var t, e = n();
                            return "function" == typeof(null == e ? void 0 : null === (t = e.prototype) || void 0 === t ? void 0 : t.changeType)
                        }
                    },
                    "./src/loader/fragment-loader.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return u
                        }), r.d(e, "LoadError", function() {
                            return d
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/errors.ts");

                        function s(t) {
                            var e = "function" == typeof Map ? new Map : void 0;
                            return (s = function(t) {
                                if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                                if ("function" != typeof t) throw TypeError("Super expression must either be null or a function");
                                if (void 0 !== e) {
                                    if (e.has(t)) return e.get(t);
                                    e.set(t, r)
                                }

                                function r() {
                                    return a(t, arguments, l(this).constructor)
                                }
                                return r.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: r,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), o(r, t)
                            })(t)
                        }

                        function a(t, e, r) {
                            return (a = ! function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                } catch (t) {
                                    return !1
                                }
                            }() ? function(t, e, r) {
                                var i = [null];
                                i.push.apply(i, e);
                                var n = new(Function.bind.apply(t, i));
                                return r && o(n, r.prototype), n
                            } : Reflect.construct).apply(null, arguments)
                        }

                        function o(t, e) {
                            return (o = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }

                        function l(t) {
                            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t)
                            })(t)
                        }
                        var u = function() {
                            function t(t) {
                                this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = t
                            }
                            var e = t.prototype;
                            return e.destroy = function() {
                                this.loader && (this.loader.destroy(), this.loader = null)
                            }, e.abort = function() {
                                this.loader && this.loader.abort()
                            }, e.load = function(t, e) {
                                var r = this,
                                    i = t.url;
                                if (!i) return Promise.reject(new d({
                                    type: n.ErrorTypes.NETWORK_ERROR,
                                    details: n.ErrorDetails.FRAG_LOAD_ERROR,
                                    fatal: !1,
                                    frag: t,
                                    networkDetails: null
                                }, "Fragment does not have a " + (i ? "part list" : "url")));
                                this.abort();
                                var s = this.config,
                                    a = s.fLoader,
                                    o = s.loader;
                                return new Promise(function(i, l) {
                                    r.loader && r.loader.destroy();
                                    var u = r.loader = t.loader = a ? new a(s) : new o(s),
                                        h = c(t),
                                        f = {
                                            timeout: s.fragLoadingTimeOut,
                                            maxRetry: 0,
                                            retryDelay: 0,
                                            maxRetryDelay: s.fragLoadingMaxRetryTimeout,
                                            highWaterMark: 131072
                                        };
                                    t.stats = u.stats, u.load(h, f, {
                                        onSuccess: function(e, n, s, a) {
                                            r.resetLoader(t, u), i({
                                                frag: t,
                                                part: null,
                                                payload: e.data,
                                                networkDetails: a
                                            })
                                        },
                                        onError: function(e, i, s) {
                                            r.resetLoader(t, u), l(new d({
                                                type: n.ErrorTypes.NETWORK_ERROR,
                                                details: n.ErrorDetails.FRAG_LOAD_ERROR,
                                                fatal: !1,
                                                frag: t,
                                                response: e,
                                                networkDetails: s
                                            }))
                                        },
                                        onAbort: function(e, i, s) {
                                            r.resetLoader(t, u), l(new d({
                                                type: n.ErrorTypes.NETWORK_ERROR,
                                                details: n.ErrorDetails.INTERNAL_ABORTED,
                                                fatal: !1,
                                                frag: t,
                                                networkDetails: s
                                            }))
                                        },
                                        onTimeout: function(e, i, s) {
                                            r.resetLoader(t, u), l(new d({
                                                type: n.ErrorTypes.NETWORK_ERROR,
                                                details: n.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                                fatal: !1,
                                                frag: t,
                                                networkDetails: s
                                            }))
                                        },
                                        onProgress: function(r, i, n, s) {
                                            e && e({
                                                frag: t,
                                                part: null,
                                                payload: n,
                                                networkDetails: s
                                            })
                                        }
                                    })
                                })
                            }, e.loadPart = function(t, e, r) {
                                var i = this;
                                this.abort();
                                var s = this.config,
                                    a = s.fLoader,
                                    o = s.loader;
                                return new Promise(function(l, u) {
                                    i.loader && i.loader.destroy();
                                    var h = i.loader = t.loader = a ? new a(s) : new o(s),
                                        f = c(t, e),
                                        g = {
                                            timeout: s.fragLoadingTimeOut,
                                            maxRetry: 0,
                                            retryDelay: 0,
                                            maxRetryDelay: s.fragLoadingMaxRetryTimeout,
                                            highWaterMark: 131072
                                        };
                                    e.stats = h.stats, h.load(f, g, {
                                        onSuccess: function(n, s, a, o) {
                                            i.resetLoader(t, h), i.updateStatsFromPart(t, e);
                                            var u = {
                                                frag: t,
                                                part: e,
                                                payload: n.data,
                                                networkDetails: o
                                            };
                                            r(u), l(u)
                                        },
                                        onError: function(r, s, a) {
                                            i.resetLoader(t, h), u(new d({
                                                type: n.ErrorTypes.NETWORK_ERROR,
                                                details: n.ErrorDetails.FRAG_LOAD_ERROR,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                response: r,
                                                networkDetails: a
                                            }))
                                        },
                                        onAbort: function(r, s, a) {
                                            t.stats.aborted = e.stats.aborted, i.resetLoader(t, h), u(new d({
                                                type: n.ErrorTypes.NETWORK_ERROR,
                                                details: n.ErrorDetails.INTERNAL_ABORTED,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                networkDetails: a
                                            }))
                                        },
                                        onTimeout: function(r, s, a) {
                                            i.resetLoader(t, h), u(new d({
                                                type: n.ErrorTypes.NETWORK_ERROR,
                                                details: n.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                                fatal: !1,
                                                frag: t,
                                                part: e,
                                                networkDetails: a
                                            }))
                                        }
                                    })
                                })
                            }, e.updateStatsFromPart = function(t, e) {
                                var r = t.stats,
                                    i = e.stats,
                                    n = i.total;
                                if (r.loaded += i.loaded, n) {
                                    var s = Math.round(t.duration / e.duration),
                                        a = Math.min(Math.round(r.loaded / n), s),
                                        o = (s - a) * Math.round(r.loaded / a);
                                    r.total = r.loaded + o
                                } else r.total = Math.max(r.loaded, r.total);
                                var l = r.loading,
                                    u = i.loading;
                                l.start ? l.first += u.first - u.start : (l.start = u.start, l.first = u.first), l.end = u.end
                            }, e.resetLoader = function(t, e) {
                                t.loader = null, this.loader === e && (self.clearTimeout(this.partLoadTimeout), this.loader = null), e.destroy()
                            }, t
                        }();

                        function c(t, e) {
                            void 0 === e && (e = null);
                            var r = e || t,
                                n = {
                                    frag: t,
                                    part: e,
                                    responseType: "arraybuffer",
                                    url: r.url,
                                    headers: {},
                                    rangeStart: 0,
                                    rangeEnd: 0
                                },
                                s = r.byteRangeStartOffset,
                                a = r.byteRangeEndOffset;
                            return Object(i.isFiniteNumber)(s) && Object(i.isFiniteNumber)(a) && (n.rangeStart = s, n.rangeEnd = a), n
                        }
                        var d = function(t) {
                            function e(e) {
                                for (var r, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) n[s - 1] = arguments[s];
                                return (r = t.call.apply(t, [this].concat(n)) || this).data = void 0, r.data = e, r
                            }
                            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, o(e, t), e
                        }(s(Error))
                    },
                    "./src/loader/fragment.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "ElementaryStreamTypes", function() {
                            return n
                        }), r.d(e, "BaseSegment", function() {
                            return g
                        }), r.d(e, "Fragment", function() {
                            return v
                        }), r.d(e, "Part", function() {
                            return p
                        });
                        var i, n, s = r("./src/polyfills/number.ts"),
                            a = r("./node_modules/url-toolkit/src/url-toolkit.js"),
                            o = r("./src/utils/logger.ts"),
                            l = r("./src/loader/level-key.ts"),
                            u = r("./src/loader/load-stats.ts");

                        function c(t, e) {
                            t.prototype = Object.create(e.prototype), t.prototype.constructor = t, d(t, e)
                        }

                        function d(t, e) {
                            return (d = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }

                        function h(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                            }
                        }

                        function f(t, e, r) {
                            return e && h(t.prototype, e), r && h(t, r), t
                        }(i = n || (n = {})).AUDIO = "audio", i.VIDEO = "video", i.AUDIOVIDEO = "audiovideo";
                        var g = function() {
                                function t(t) {
                                    var e;
                                    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((e = {})[n.AUDIO] = null, e[n.VIDEO] = null, e[n.AUDIOVIDEO] = null, e), this.baseurl = t
                                }
                                return t.prototype.setByteRange = function(t, e) {
                                    var r = t.split("@", 2),
                                        i = [];
                                    1 === r.length ? i[0] = e ? e.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]), i[1] = parseInt(r[0]) + i[0], this._byteRange = i
                                }, f(t, [{
                                    key: "byteRange",
                                    get: function() {
                                        return this._byteRange ? this._byteRange : []
                                    }
                                }, {
                                    key: "byteRangeStartOffset",
                                    get: function() {
                                        return this.byteRange[0]
                                    }
                                }, {
                                    key: "byteRangeEndOffset",
                                    get: function() {
                                        return this.byteRange[1]
                                    }
                                }, {
                                    key: "url",
                                    get: function() {
                                        return !this._url && this.baseurl && this.relurl && (this._url = Object(a.buildAbsoluteURL)(this.baseurl, this.relurl, {
                                            alwaysNormalize: !0
                                        })), this._url || ""
                                    },
                                    set: function(t) {
                                        this._url = t
                                    }
                                }]), t
                            }(),
                            v = function(t) {
                                function e(e, r) {
                                    var i;
                                    return (i = t.call(this, r) || this)._decryptdata = null, i.rawProgramDateTime = null, i.programDateTime = null, i.tagList = [], i.duration = 0, i.sn = 0, i.levelkey = void 0, i.type = void 0, i.loader = null, i.level = -1, i.cc = 0, i.startPTS = void 0, i.endPTS = void 0, i.appendedPTS = void 0, i.startDTS = void 0, i.endDTS = void 0, i.start = 0, i.deltaPTS = void 0, i.maxStartPTS = void 0, i.minEndPTS = void 0, i.stats = new u.LoadStats, i.urlId = 0, i.data = void 0, i.bitrateTest = !1, i.title = null, i.initSegment = null, i.type = e, i
                                }
                                c(e, t);
                                var r = e.prototype;
                                return r.createInitializationVector = function(t) {
                                    for (var e = new Uint8Array(16), r = 12; r < 16; r++) e[r] = t >> 8 * (15 - r) & 255;
                                    return e
                                }, r.setDecryptDataFromLevelKey = function(t, e) {
                                    var r = t;
                                    return (null == t ? void 0 : t.method) === "AES-128" && t.uri && !t.iv && ((r = l.LevelKey.fromURI(t.uri)).method = t.method, r.iv = this.createInitializationVector(e), r.keyFormat = "identity"), r
                                }, r.setElementaryStreamInfo = function(t, e, r, i, n, s) {
                                    void 0 === s && (s = !1);
                                    var a = this.elementaryStreams,
                                        o = a[t];
                                    if (!o) {
                                        a[t] = {
                                            startPTS: e,
                                            endPTS: r,
                                            startDTS: i,
                                            endDTS: n,
                                            partial: s
                                        };
                                        return
                                    }
                                    o.startPTS = Math.min(o.startPTS, e), o.endPTS = Math.max(o.endPTS, r), o.startDTS = Math.min(o.startDTS, i), o.endDTS = Math.max(o.endDTS, n)
                                }, r.clearElementaryStreamInfo = function() {
                                    var t = this.elementaryStreams;
                                    t[n.AUDIO] = null, t[n.VIDEO] = null, t[n.AUDIOVIDEO] = null
                                }, f(e, [{
                                    key: "decryptdata",
                                    get: function() {
                                        if (!this.levelkey && !this._decryptdata) return null;
                                        if (!this._decryptdata && this.levelkey) {
                                            var t = this.sn;
                                            "number" != typeof t && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && o.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), t = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, t)
                                        }
                                        return this._decryptdata
                                    }
                                }, {
                                    key: "end",
                                    get: function() {
                                        return this.start + this.duration
                                    }
                                }, {
                                    key: "endProgramDateTime",
                                    get: function() {
                                        if (null === this.programDateTime || !Object(s.isFiniteNumber)(this.programDateTime)) return null;
                                        var t = Object(s.isFiniteNumber)(this.duration) ? this.duration : 0;
                                        return this.programDateTime + 1e3 * t
                                    }
                                }, {
                                    key: "encrypted",
                                    get: function() {
                                        var t;
                                        return null !== (t = this.decryptdata) && void 0 !== t && !!t.keyFormat && !!this.decryptdata.uri
                                    }
                                }]), e
                            }(g),
                            p = function(t) {
                                function e(e, r, i, n, s) {
                                    (a = t.call(this, i) || this).fragOffset = 0, a.duration = 0, a.gap = !1, a.independent = !1, a.relurl = void 0, a.fragment = void 0, a.index = void 0, a.stats = new u.LoadStats, a.duration = e.decimalFloatingPoint("DURATION"), a.gap = e.bool("GAP"), a.independent = e.bool("INDEPENDENT"), a.relurl = e.enumeratedString("URI"), a.fragment = r, a.index = n;
                                    var a, o = e.enumeratedString("BYTERANGE");
                                    return o && a.setByteRange(o, s), s && (a.fragOffset = s.fragOffset + s.duration), a
                                }
                                return c(e, t), f(e, [{
                                    key: "start",
                                    get: function() {
                                        return this.fragment.start + this.fragOffset
                                    }
                                }, {
                                    key: "end",
                                    get: function() {
                                        return this.start + this.duration
                                    }
                                }, {
                                    key: "loaded",
                                    get: function() {
                                        var t = this.elementaryStreams;
                                        return !!(t.audio || t.video || t.audiovideo)
                                    }
                                }]), e
                            }(g)
                    },
                    "./src/loader/key-loader.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return a
                        });
                        var i = r("./src/events.ts"),
                            n = r("./src/errors.ts"),
                            s = r("./src/utils/logger.ts"),
                            a = function() {
                                function t(t) {
                                    this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = t, this._registerListeners()
                                }
                                var e = t.prototype;
                                return e._registerListeners = function() {
                                    this.hls.on(i.Events.KEY_LOADING, this.onKeyLoading, this)
                                }, e._unregisterListeners = function() {
                                    this.hls.off(i.Events.KEY_LOADING, this.onKeyLoading)
                                }, e.destroy = function() {
                                    for (var t in this._unregisterListeners(), this.loaders) {
                                        var e = this.loaders[t];
                                        e && e.destroy()
                                    }
                                    this.loaders = {}
                                }, e.onKeyLoading = function(t, e) {
                                    var r = e.frag,
                                        n = r.type,
                                        a = this.loaders[n];
                                    if (!r.decryptdata) {
                                        s.logger.warn("Missing decryption data on fragment in onKeyLoading");
                                        return
                                    }
                                    var o = r.decryptdata.uri;
                                    if (o !== this.decrypturl || null === this.decryptkey) {
                                        var l = this.hls.config;
                                        if (a && (s.logger.warn("abort previous key loader for type:" + n), a.abort()), !o) {
                                            s.logger.warn("key uri is falsy");
                                            return
                                        }
                                        var u = l.loader,
                                            c = r.loader = this.loaders[n] = new u(l);
                                        this.decrypturl = o, this.decryptkey = null;
                                        var d = {
                                                timeout: l.fragLoadingTimeOut,
                                                maxRetry: 0,
                                                retryDelay: l.fragLoadingRetryDelay,
                                                maxRetryDelay: l.fragLoadingMaxRetryTimeout,
                                                highWaterMark: 0
                                            },
                                            h = {
                                                onSuccess: this.loadsuccess.bind(this),
                                                onError: this.loaderror.bind(this),
                                                onTimeout: this.loadtimeout.bind(this)
                                            };
                                        c.load({
                                            url: o,
                                            frag: r,
                                            responseType: "arraybuffer"
                                        }, d, h)
                                    } else this.decryptkey && (r.decryptdata.key = this.decryptkey, this.hls.trigger(i.Events.KEY_LOADED, {
                                        frag: r
                                    }))
                                }, e.loadsuccess = function(t, e, r) {
                                    var n = r.frag;
                                    if (!n.decryptdata) {
                                        s.logger.error("after key load, decryptdata unset");
                                        return
                                    }
                                    this.decryptkey = n.decryptdata.key = new Uint8Array(t.data), n.loader = null, delete this.loaders[n.type], this.hls.trigger(i.Events.KEY_LOADED, {
                                        frag: n
                                    })
                                }, e.loaderror = function(t, e) {
                                    var r = e.frag,
                                        s = r.loader;
                                    s && s.abort(), delete this.loaders[r.type], this.hls.trigger(i.Events.ERROR, {
                                        type: n.ErrorTypes.NETWORK_ERROR,
                                        details: n.ErrorDetails.KEY_LOAD_ERROR,
                                        fatal: !1,
                                        frag: r,
                                        response: t
                                    })
                                }, e.loadtimeout = function(t, e) {
                                    var r = e.frag,
                                        s = r.loader;
                                    s && s.abort(), delete this.loaders[r.type], this.hls.trigger(i.Events.ERROR, {
                                        type: n.ErrorTypes.NETWORK_ERROR,
                                        details: n.ErrorDetails.KEY_LOAD_TIMEOUT,
                                        fatal: !1,
                                        frag: r
                                    })
                                }, t
                            }()
                    },
                    "./src/loader/level-details.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "LevelDetails", function() {
                            return n
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = function() {
                                function t(t) {
                                    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.url = t
                                }
                                return t.prototype.reloaded = function(t) {
                                        if (!t) {
                                            this.advanced = !0, this.updated = !0;
                                            return
                                        }
                                        var e = this.lastPartSn - t.lastPartSn,
                                            r = this.lastPartIndex - t.lastPartIndex;
                                        this.updated = this.endSN !== t.endSN || !!r || !!e, this.advanced = this.endSN > t.endSN || e > 0 || 0 === e && r > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * t.misses) : this.misses = t.misses + 1, this.availabilityDelay = t.availabilityDelay
                                    },
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(t.prototype, [{
                                        key: "hasProgramDateTime",
                                        get: function() {
                                            return !!this.fragments.length && Object(i.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime)
                                        }
                                    }, {
                                        key: "levelTargetDuration",
                                        get: function() {
                                            return this.averagetargetduration || this.targetduration || 10
                                        }
                                    }, {
                                        key: "drift",
                                        get: function() {
                                            var t = this.driftEndTime - this.driftStartTime;
                                            return t > 0 ? 1e3 * (this.driftEnd - this.driftStart) / t : 1
                                        }
                                    }, {
                                        key: "edge",
                                        get: function() {
                                            return this.partEnd || this.fragmentEnd
                                        }
                                    }, {
                                        key: "partEnd",
                                        get: function() {
                                            var t;
                                            return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
                                        }
                                    }, {
                                        key: "fragmentEnd",
                                        get: function() {
                                            var t;
                                            return null !== (t = this.fragments) && void 0 !== t && t.length ? this.fragments[this.fragments.length - 1].end : 0
                                        }
                                    }, {
                                        key: "age",
                                        get: function() {
                                            return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
                                        }
                                    }, {
                                        key: "lastPartIndex",
                                        get: function() {
                                            var t;
                                            return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].index : -1
                                        }
                                    }, {
                                        key: "lastPartSn",
                                        get: function() {
                                            var t;
                                            return null !== (t = this.partList) && void 0 !== t && t.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
                                        }
                                    }]), t
                            }()
                    },
                    "./src/loader/level-key.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "LevelKey", function() {
                            return n
                        });
                        var i = r("./node_modules/url-toolkit/src/url-toolkit.js"),
                            n = function() {
                                var t;

                                function e(t, e) {
                                    this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, e ? this._uri = Object(i.buildAbsoluteURL)(t, e, {
                                        alwaysNormalize: !0
                                    }) : this._uri = t
                                }
                                return e.fromURL = function(t, r) {
                                        return new e(t, r)
                                    }, e.fromURI = function(t) {
                                        return new e(t)
                                    }, t = [{
                                        key: "uri",
                                        get: function() {
                                            return this._uri
                                        }
                                    }],
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var i = e[r];
                                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                        }
                                    }(e.prototype, t), e
                            }()
                    },
                    "./src/loader/load-stats.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "LoadStats", function() {
                            return i
                        });
                        var i = function() {
                            this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
                                start: 0,
                                first: 0,
                                end: 0
                            }, this.parsing = {
                                start: 0,
                                end: 0
                            }, this.buffering = {
                                start: 0,
                                first: 0,
                                end: 0
                            }
                        }
                    },
                    "./src/loader/m3u8-parser.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return p
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./node_modules/url-toolkit/src/url-toolkit.js"),
                            s = r("./src/loader/fragment.ts"),
                            a = r("./src/loader/level-details.ts"),
                            o = r("./src/loader/level-key.ts"),
                            l = r("./src/utils/attr-list.ts"),
                            u = r("./src/utils/logger.ts"),
                            c = r("./src/utils/codecs.ts"),
                            d = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
                            h = /#EXT-X-MEDIA:(.*)/g,
                            f = RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
                            g = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
                            v = /\.(mp4|m4s|m4v|m4a)$/i,
                            p = function() {
                                function t() {}
                                return t.findGroup = function(t, e) {
                                    for (var r = 0; r < t.length; r++) {
                                        var i = t[r];
                                        if (i.id === e) return i
                                    }
                                }, t.convertAVC1ToAVCOTI = function(t) {
                                    var e = t.split(".");
                                    return e.length > 2 ? e.shift() + "." + (parseInt(e.shift()).toString(16) + ("000" + parseInt(e.shift()).toString(16)).substr(-4)) : t
                                }, t.resolve = function(t, e) {
                                    return n.buildAbsoluteURL(e, t, {
                                        alwaysNormalize: !0
                                    })
                                }, t.parseMasterPlaylist = function(e, r) {
                                    var i, n = [],
                                        s = {},
                                        a = !1;
                                    for (d.lastIndex = 0; null != (i = d.exec(e));)
                                        if (i[1]) {
                                            var o = new l.AttrList(i[1]),
                                                u = {
                                                    attrs: o,
                                                    bitrate: o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
                                                    name: o.NAME,
                                                    url: t.resolve(i[2], r)
                                                },
                                                h = o.decimalResolution("RESOLUTION");
                                            h && (u.width = h.width, u.height = h.height),
                                                function(t, e) {
                                                    ["video", "audio", "text"].forEach(function(r) {
                                                        var i = t.filter(function(t) {
                                                            return Object(c.isCodecType)(t, r)
                                                        });
                                                        if (i.length) {
                                                            var n = i.filter(function(t) {
                                                                return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
                                                            });
                                                            e[r + "Codec"] = n.length > 0 ? n[0] : i[0], t = t.filter(function(t) {
                                                                return -1 === i.indexOf(t)
                                                            })
                                                        }
                                                    }), e.unknownCodecs = t
                                                }((o.CODECS || "").split(/[ ,]+/).filter(function(t) {
                                                    return t
                                                }), u), u.videoCodec && -1 !== u.videoCodec.indexOf("avc1") && (u.videoCodec = t.convertAVC1ToAVCOTI(u.videoCodec)), n.push(u)
                                        } else if (i[3]) {
                                        var f = new l.AttrList(i[3]);
                                        f["DATA-ID"] && (a = !0, s[f["DATA-ID"]] = f)
                                    }
                                    return {
                                        levels: n,
                                        sessionData: a ? s : null
                                    }
                                }, t.parseMasterPlaylistMedia = function(e, r, i, n) {
                                    void 0 === n && (n = []);
                                    var s, a = [],
                                        o = 0;
                                    for (h.lastIndex = 0; null !== (s = h.exec(e));) {
                                        var u = new l.AttrList(s[1]);
                                        if (u.TYPE === i) {
                                            var c = {
                                                attrs: u,
                                                bitrate: 0,
                                                id: o++,
                                                groupId: u["GROUP-ID"],
                                                instreamId: u["INSTREAM-ID"],
                                                name: u.NAME || u.LANGUAGE || "",
                                                type: i,
                                                default: u.bool("DEFAULT"),
                                                autoselect: u.bool("AUTOSELECT"),
                                                forced: u.bool("FORCED"),
                                                lang: u.LANGUAGE,
                                                url: u.URI ? t.resolve(u.URI, r) : ""
                                            };
                                            if (n.length) {
                                                var d = t.findGroup(n, c.groupId) || n[0];
                                                m(c, d, "audioCodec"), m(c, d, "textCodec")
                                            }
                                            a.push(c)
                                        }
                                    }
                                    return a
                                }, t.parseLevelPlaylist = function(t, e, r, c, d) {
                                    var h = new a.LevelDetails(e),
                                        p = h.fragments,
                                        m = null,
                                        E = 0,
                                        T = 0,
                                        S = 0,
                                        b = 0,
                                        L = null,
                                        A = new s.Fragment(c, e),
                                        D = -1,
                                        R = !1;
                                    for (f.lastIndex = 0, h.m3u8 = t; null !== (N = f.exec(t));) {
                                        R && (R = !1, (A = new s.Fragment(c, e)).start = S, A.sn = E, A.cc = b, A.level = r, m && (A.initSegment = m, A.rawProgramDateTime = m.rawProgramDateTime));
                                        var k = N[1];
                                        if (k) {
                                            A.duration = parseFloat(k);
                                            var _ = (" " + N[2]).slice(1);
                                            A.title = _ || null, A.tagList.push(_ ? ["INF", k, _] : ["INF", k])
                                        } else if (N[3]) Object(i.isFiniteNumber)(A.duration) && (A.start = S, U && (A.levelkey = U), A.sn = E, A.level = r, A.cc = b, A.urlId = d, p.push(A), A.relurl = (" " + N[3]).slice(1), y(A, L), L = A, S += A.duration, E++, T = 0, R = !0);
                                        else if (N[4]) {
                                            var I = (" " + N[4]).slice(1);
                                            L ? A.setByteRange(I, L) : A.setByteRange(I)
                                        } else if (N[5]) A.rawProgramDateTime = (" " + N[5]).slice(1), A.tagList.push(["PROGRAM-DATE-TIME", A.rawProgramDateTime]), -1 === D && (D = p.length);
                                        else {
                                            if (!(N = N[0].match(g))) {
                                                u.logger.warn("No matches on slow regex match for level playlist!");
                                                continue
                                            }
                                            for (B = 1; B < N.length && void 0 === N[B]; B++);
                                            var C = (" " + N[B]).slice(1),
                                                O = (" " + N[B + 1]).slice(1),
                                                x = N[B + 2] ? (" " + N[B + 2]).slice(1) : "";
                                            switch (C) {
                                                case "PLAYLIST-TYPE":
                                                    h.type = O.toUpperCase();
                                                    break;
                                                case "MEDIA-SEQUENCE":
                                                    E = h.startSN = parseInt(O);
                                                    break;
                                                case "SKIP":
                                                    var w = new l.AttrList(O),
                                                        P = w.decimalInteger("SKIPPED-SEGMENTS");
                                                    if (Object(i.isFiniteNumber)(P)) {
                                                        h.skippedSegments = P;
                                                        for (var F = P; F--;) p.unshift(null);
                                                        E += P
                                                    }
                                                    var M = w.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                                                    M && (h.recentlyRemovedDateranges = M.split("	"));
                                                    break;
                                                case "TARGETDURATION":
                                                    h.targetduration = parseFloat(O);
                                                    break;
                                                case "VERSION":
                                                    h.version = parseInt(O);
                                                    break;
                                                case "EXTM3U":
                                                    break;
                                                case "ENDLIST":
                                                    h.live = !1;
                                                    break;
                                                case "#":
                                                    (O || x) && A.tagList.push(x ? [O, x] : [O]);
                                                    break;
                                                case "DIS":
                                                    b++;
                                                case "GAP":
                                                    A.tagList.push([C]);
                                                    break;
                                                case "BITRATE":
                                                    A.tagList.push([C, O]);
                                                    break;
                                                case "DISCONTINUITY-SEQ":
                                                    b = parseInt(O);
                                                    break;
                                                case "KEY":
                                                    var N, B, U, G, j = new l.AttrList(O),
                                                        K = j.enumeratedString("METHOD"),
                                                        H = j.URI,
                                                        V = j.hexadecimalInteger("IV"),
                                                        W = j.enumeratedString("KEYFORMATVERSIONS"),
                                                        Y = j.enumeratedString("KEYID"),
                                                        q = null != (G = j.enumeratedString("KEYFORMAT")) ? G : "identity";
                                                    if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf(q) > -1) {
                                                        u.logger.warn("Keyformat " + q + " is not supported from the manifest");
                                                        continue
                                                    }
                                                    if ("identity" !== q) continue;
                                                    K && (U = o.LevelKey.fromURL(e, H), H && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(K) >= 0 && (U.method = K, U.keyFormat = q, Y && (U.keyID = Y), W && (U.keyFormatVersions = W), U.iv = V));
                                                    break;
                                                case "START":
                                                    var X = new l.AttrList(O).decimalFloatingPoint("TIME-OFFSET");
                                                    Object(i.isFiniteNumber)(X) && (h.startTimeOffset = X);
                                                    break;
                                                case "MAP":
                                                    var z = new l.AttrList(O);
                                                    A.relurl = z.URI, z.BYTERANGE && A.setByteRange(z.BYTERANGE), A.level = r, A.sn = "initSegment", U && (A.levelkey = U), A.initSegment = null, m = A, R = !0;
                                                    break;
                                                case "SERVER-CONTROL":
                                                    var Q = new l.AttrList(O);
                                                    h.canBlockReload = Q.bool("CAN-BLOCK-RELOAD"), h.canSkipUntil = Q.optionalFloat("CAN-SKIP-UNTIL", 0), h.canSkipDateRanges = h.canSkipUntil > 0 && Q.bool("CAN-SKIP-DATERANGES"), h.partHoldBack = Q.optionalFloat("PART-HOLD-BACK", 0), h.holdBack = Q.optionalFloat("HOLD-BACK", 0);
                                                    break;
                                                case "PART-INF":
                                                    var $ = new l.AttrList(O);
                                                    h.partTarget = $.decimalFloatingPoint("PART-TARGET");
                                                    break;
                                                case "PART":
                                                    var J = h.partList;
                                                    J || (J = h.partList = []);
                                                    var Z = T > 0 ? J[J.length - 1] : void 0,
                                                        tt = T++,
                                                        te = new s.Part(new l.AttrList(O), A, e, tt, Z);
                                                    J.push(te), A.duration += te.duration;
                                                    break;
                                                case "PRELOAD-HINT":
                                                    var tr = new l.AttrList(O);
                                                    h.preloadHint = tr;
                                                    break;
                                                case "RENDITION-REPORT":
                                                    var ti = new l.AttrList(O);
                                                    h.renditionReports = h.renditionReports || [], h.renditionReports.push(ti);
                                                    break;
                                                default:
                                                    u.logger.warn("line parsed but not handled: " + N)
                                            }
                                        }
                                    }
                                    L && !L.relurl ? (p.pop(), S -= L.duration, h.partList && (h.fragmentHint = L)) : h.partList && (y(A, L), A.cc = b, h.fragmentHint = A);
                                    var tn = p.length,
                                        ts = p[0],
                                        ta = p[tn - 1];
                                    if ((S += h.skippedSegments * h.targetduration) > 0 && tn && ta) {
                                        h.averagetargetduration = S / tn;
                                        var to = ta.sn;
                                        h.endSN = "initSegment" !== to ? to : 0, ts && (h.startCC = ts.cc, !ts.initSegment && h.fragments.every(function(t) {
                                            var e, r, i;
                                            return t.relurl && (e = t.relurl, v.test(null != (r = null === (i = n.parseURL(e)) || void 0 === i ? void 0 : i.path) ? r : ""))
                                        }) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (A = new s.Fragment(c, e)).relurl = ta.relurl, A.level = r, A.sn = "initSegment", ts.initSegment = A, h.needSidxRanges = !0))
                                    } else h.endSN = 0, h.startCC = 0;
                                    return h.fragmentHint && (S += h.fragmentHint.duration), h.totalduration = S, h.endCC = b, D > 0 && function(t, e) {
                                        for (var r = t[e], i = e; i--;) {
                                            var n = t[i];
                                            if (!n) return;
                                            n.programDateTime = r.programDateTime - 1e3 * n.duration, r = n
                                        }
                                    }(p, D), h
                                }, t
                            }();

                        function m(t, e, r) {
                            var i = e[r];
                            i && (t[r] = i)
                        }

                        function y(t, e) {
                            t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : null != e && e.programDateTime && (t.programDateTime = e.endProgramDateTime), Object(i.isFiniteNumber)(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
                        }
                    },
                    "./src/loader/playlist-loader.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/events.ts"),
                            s = r("./src/errors.ts"),
                            a = r("./src/utils/logger.ts"),
                            o = r("./src/utils/mp4-tools.ts"),
                            l = r("./src/loader/m3u8-parser.ts"),
                            u = r("./src/types/loader.ts"),
                            c = r("./src/utils/attr-list.ts");

                        function d(t, e) {
                            var r = t.url;
                            return (void 0 === r || 0 === r.indexOf("data:")) && (r = e.url), r
                        }
                        var h = function() {
                            function t(t) {
                                this.hls = void 0, this.loaders = Object.create(null), this.hls = t, this.registerListeners()
                            }
                            var e = t.prototype;
                            return e.registerListeners = function() {
                                var t = this.hls;
                                t.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(n.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(n.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(n.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                            }, e.unregisterListeners = function() {
                                var t = this.hls;
                                t.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(n.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(n.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(n.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
                            }, e.createInternalLoader = function(t) {
                                var e = this.hls.config,
                                    r = e.pLoader,
                                    i = e.loader,
                                    n = new(r || i)(e);
                                return t.loader = n, this.loaders[t.type] = n, n
                            }, e.getInternalLoader = function(t) {
                                return this.loaders[t.type]
                            }, e.resetInternalLoader = function(t) {
                                this.loaders[t] && delete this.loaders[t]
                            }, e.destroyInternalLoaders = function() {
                                for (var t in this.loaders) {
                                    var e = this.loaders[t];
                                    e && e.destroy(), this.resetInternalLoader(t)
                                }
                            }, e.destroy = function() {
                                this.unregisterListeners(), this.destroyInternalLoaders()
                            }, e.onManifestLoading = function(t, e) {
                                var r = e.url;
                                this.load({
                                    id: null,
                                    groupId: null,
                                    level: 0,
                                    responseType: "text",
                                    type: u.PlaylistContextType.MANIFEST,
                                    url: r,
                                    deliveryDirectives: null
                                })
                            }, e.onLevelLoading = function(t, e) {
                                var r = e.id,
                                    i = e.level,
                                    n = e.url,
                                    s = e.deliveryDirectives;
                                this.load({
                                    id: r,
                                    groupId: null,
                                    level: i,
                                    responseType: "text",
                                    type: u.PlaylistContextType.LEVEL,
                                    url: n,
                                    deliveryDirectives: s
                                })
                            }, e.onAudioTrackLoading = function(t, e) {
                                var r = e.id,
                                    i = e.groupId,
                                    n = e.url,
                                    s = e.deliveryDirectives;
                                this.load({
                                    id: r,
                                    groupId: i,
                                    level: null,
                                    responseType: "text",
                                    type: u.PlaylistContextType.AUDIO_TRACK,
                                    url: n,
                                    deliveryDirectives: s
                                })
                            }, e.onSubtitleTrackLoading = function(t, e) {
                                var r = e.id,
                                    i = e.groupId,
                                    n = e.url,
                                    s = e.deliveryDirectives;
                                this.load({
                                    id: r,
                                    groupId: i,
                                    level: null,
                                    responseType: "text",
                                    type: u.PlaylistContextType.SUBTITLE_TRACK,
                                    url: n,
                                    deliveryDirectives: s
                                })
                            }, e.load = function(t) {
                                var e, r, i, n, s, o, l = this.hls.config,
                                    c = this.getInternalLoader(t);
                                if (c) {
                                    var d = c.context;
                                    if (d && d.url === t.url) {
                                        a.logger.trace("[playlist-loader]: playlist request ongoing");
                                        return
                                    }
                                    a.logger.log("[playlist-loader]: aborting previous loader for type: " + t.type), c.abort()
                                }
                                switch (t.type) {
                                    case u.PlaylistContextType.MANIFEST:
                                        r = l.manifestLoadingMaxRetry, i = l.manifestLoadingTimeOut, n = l.manifestLoadingRetryDelay, s = l.manifestLoadingMaxRetryTimeout;
                                        break;
                                    case u.PlaylistContextType.LEVEL:
                                    case u.PlaylistContextType.AUDIO_TRACK:
                                    case u.PlaylistContextType.SUBTITLE_TRACK:
                                        r = 0, i = l.levelLoadingTimeOut;
                                        break;
                                    default:
                                        r = l.levelLoadingMaxRetry, i = l.levelLoadingTimeOut, n = l.levelLoadingRetryDelay, s = l.levelLoadingMaxRetryTimeout
                                }
                                if (c = this.createInternalLoader(t), null !== (e = t.deliveryDirectives) && void 0 !== e && e.part && (t.type === u.PlaylistContextType.LEVEL && null !== t.level ? o = this.hls.levels[t.level].details : t.type === u.PlaylistContextType.AUDIO_TRACK && null !== t.id ? o = this.hls.audioTracks[t.id].details : t.type === u.PlaylistContextType.SUBTITLE_TRACK && null !== t.id && (o = this.hls.subtitleTracks[t.id].details), o)) {
                                    var h = o.partTarget,
                                        f = o.targetduration;
                                    h && f && (i = Math.min(1e3 * Math.max(3 * h, .8 * f), i))
                                }
                                var g = {
                                        timeout: i,
                                        maxRetry: r,
                                        retryDelay: n,
                                        maxRetryDelay: s,
                                        highWaterMark: 0
                                    },
                                    v = {
                                        onSuccess: this.loadsuccess.bind(this),
                                        onError: this.loaderror.bind(this),
                                        onTimeout: this.loadtimeout.bind(this)
                                    };
                                c.load(t, g, v)
                            }, e.loadsuccess = function(t, e, r, i) {
                                if (void 0 === i && (i = null), r.isSidxRequest) {
                                    this.handleSidxRequest(t, r), this.handlePlaylistLoaded(t, e, r, i);
                                    return
                                }
                                this.resetInternalLoader(r.type);
                                var n = t.data;
                                if (0 !== n.indexOf("#EXTM3U")) {
                                    this.handleManifestParsingError(t, r, "no EXTM3U delimiter", i);
                                    return
                                }
                                e.parsing.start = performance.now(), n.indexOf("#EXTINF:") > 0 || n.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t, e, r, i) : this.handleMasterPlaylist(t, e, r, i)
                            }, e.loaderror = function(t, e, r) {
                                void 0 === r && (r = null), this.handleNetworkError(e, r, !1, t)
                            }, e.loadtimeout = function(t, e, r) {
                                void 0 === r && (r = null), this.handleNetworkError(e, r, !0)
                            }, e.handleMasterPlaylist = function(t, e, r, i) {
                                var s = this.hls,
                                    o = t.data,
                                    u = d(t, r),
                                    h = l.default.parseMasterPlaylist(o, u),
                                    f = h.levels,
                                    g = h.sessionData;
                                if (!f.length) {
                                    this.handleManifestParsingError(t, r, "no level found in manifest", i);
                                    return
                                }
                                var v = f.map(function(t) {
                                        return {
                                            id: t.attrs.AUDIO,
                                            audioCodec: t.audioCodec
                                        }
                                    }),
                                    p = f.map(function(t) {
                                        return {
                                            id: t.attrs.SUBTITLES,
                                            textCodec: t.textCodec
                                        }
                                    }),
                                    m = l.default.parseMasterPlaylistMedia(o, u, "AUDIO", v),
                                    y = l.default.parseMasterPlaylistMedia(o, u, "SUBTITLES", p),
                                    E = l.default.parseMasterPlaylistMedia(o, u, "CLOSED-CAPTIONS");
                                m.length && !m.some(function(t) {
                                    return !t.url
                                }) && f[0].audioCodec && !f[0].attrs.AUDIO && (a.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
                                    type: "main",
                                    name: "main",
                                    default: !1,
                                    autoselect: !1,
                                    forced: !1,
                                    id: -1,
                                    attrs: new c.AttrList({}),
                                    bitrate: 0,
                                    url: ""
                                })), s.trigger(n.Events.MANIFEST_LOADED, {
                                    levels: f,
                                    audioTracks: m,
                                    subtitles: y,
                                    captions: E,
                                    url: u,
                                    stats: e,
                                    networkDetails: i,
                                    sessionData: g
                                })
                            }, e.handleTrackOrLevelPlaylist = function(t, e, r, a) {
                                var o = this.hls,
                                    h = r.id,
                                    f = r.level,
                                    g = r.type,
                                    v = d(t, r),
                                    p = Object(i.isFiniteNumber)(h) ? h : 0,
                                    m = Object(i.isFiniteNumber)(f) ? f : p,
                                    y = function(t) {
                                        switch (t.type) {
                                            case u.PlaylistContextType.AUDIO_TRACK:
                                                return u.PlaylistLevelType.AUDIO;
                                            case u.PlaylistContextType.SUBTITLE_TRACK:
                                                return u.PlaylistLevelType.SUBTITLE;
                                            default:
                                                return u.PlaylistLevelType.MAIN
                                        }
                                    }(r),
                                    E = l.default.parseLevelPlaylist(t.data, v, m, y, p);
                                if (!E.fragments.length) {
                                    o.trigger(n.Events.ERROR, {
                                        type: s.ErrorTypes.NETWORK_ERROR,
                                        details: s.ErrorDetails.LEVEL_EMPTY_ERROR,
                                        fatal: !1,
                                        url: v,
                                        reason: "no fragments found in level",
                                        level: "number" == typeof r.level ? r.level : void 0
                                    });
                                    return
                                }
                                if (g === u.PlaylistContextType.MANIFEST) {
                                    var T = {
                                        attrs: new c.AttrList({}),
                                        bitrate: 0,
                                        details: E,
                                        name: "",
                                        url: v
                                    };
                                    o.trigger(n.Events.MANIFEST_LOADED, {
                                        levels: [T],
                                        audioTracks: [],
                                        url: v,
                                        stats: e,
                                        networkDetails: a,
                                        sessionData: null
                                    })
                                }
                                if (e.parsing.end = performance.now(), E.needSidxRanges) {
                                    var S, b = null === (S = E.fragments[0].initSegment) || void 0 === S ? void 0 : S.url;
                                    this.load({
                                        url: b,
                                        isSidxRequest: !0,
                                        type: g,
                                        level: f,
                                        levelDetails: E,
                                        id: h,
                                        groupId: null,
                                        rangeStart: 0,
                                        rangeEnd: 2048,
                                        responseType: "arraybuffer",
                                        deliveryDirectives: null
                                    });
                                    return
                                }
                                r.levelDetails = E, this.handlePlaylistLoaded(t, e, r, a)
                            }, e.handleSidxRequest = function(t, e) {
                                var r = Object(o.parseSegmentIndex)(new Uint8Array(t.data));
                                if (r) {
                                    var i = r.references,
                                        n = e.levelDetails;
                                    i.forEach(function(t, e) {
                                        var i = t.info,
                                            s = n.fragments[e];
                                        0 === s.byteRange.length && s.setByteRange(String(1 + i.end - i.start) + "@" + String(i.start)), s.initSegment && s.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
                                    })
                                }
                            }, e.handleManifestParsingError = function(t, e, r, i) {
                                this.hls.trigger(n.Events.ERROR, {
                                    type: s.ErrorTypes.NETWORK_ERROR,
                                    details: s.ErrorDetails.MANIFEST_PARSING_ERROR,
                                    fatal: e.type === u.PlaylistContextType.MANIFEST,
                                    url: t.url,
                                    reason: r,
                                    response: t,
                                    context: e,
                                    networkDetails: i
                                })
                            }, e.handleNetworkError = function(t, e, r, i) {
                                void 0 === r && (r = !1), a.logger.warn("[playlist-loader]: A network " + (r ? "timeout" : "error") + " occurred while loading " + t.type + " level: " + t.level + " id: " + t.id + ' group-id: "' + t.groupId + '"');
                                var o = s.ErrorDetails.UNKNOWN,
                                    l = !1,
                                    c = this.getInternalLoader(t);
                                switch (t.type) {
                                    case u.PlaylistContextType.MANIFEST:
                                        o = r ? s.ErrorDetails.MANIFEST_LOAD_TIMEOUT : s.ErrorDetails.MANIFEST_LOAD_ERROR, l = !0;
                                        break;
                                    case u.PlaylistContextType.LEVEL:
                                        o = r ? s.ErrorDetails.LEVEL_LOAD_TIMEOUT : s.ErrorDetails.LEVEL_LOAD_ERROR, l = !1;
                                        break;
                                    case u.PlaylistContextType.AUDIO_TRACK:
                                        o = r ? s.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, l = !1;
                                        break;
                                    case u.PlaylistContextType.SUBTITLE_TRACK:
                                        o = r ? s.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : s.ErrorDetails.SUBTITLE_LOAD_ERROR, l = !1
                                }
                                c && this.resetInternalLoader(t.type);
                                var d = {
                                    type: s.ErrorTypes.NETWORK_ERROR,
                                    details: o,
                                    fatal: l,
                                    url: t.url,
                                    loader: c,
                                    context: t,
                                    networkDetails: e
                                };
                                i && (d.response = i), this.hls.trigger(n.Events.ERROR, d)
                            }, e.handlePlaylistLoaded = function(t, e, r, i) {
                                var s = r.type,
                                    a = r.level,
                                    o = r.id,
                                    l = r.groupId,
                                    c = r.loader,
                                    d = r.levelDetails,
                                    h = r.deliveryDirectives;
                                if (!(null != d && d.targetduration)) {
                                    this.handleManifestParsingError(t, r, "invalid target duration", i);
                                    return
                                }
                                if (c) switch (d.live && (c.getCacheAge && (d.ageHeader = c.getCacheAge() || 0), (!c.getCacheAge || isNaN(d.ageHeader)) && (d.ageHeader = 0)), s) {
                                    case u.PlaylistContextType.MANIFEST:
                                    case u.PlaylistContextType.LEVEL:
                                        this.hls.trigger(n.Events.LEVEL_LOADED, {
                                            details: d,
                                            level: a || 0,
                                            id: o || 0,
                                            stats: e,
                                            networkDetails: i,
                                            deliveryDirectives: h
                                        });
                                        break;
                                    case u.PlaylistContextType.AUDIO_TRACK:
                                        this.hls.trigger(n.Events.AUDIO_TRACK_LOADED, {
                                            details: d,
                                            id: o || 0,
                                            groupId: l || "",
                                            stats: e,
                                            networkDetails: i,
                                            deliveryDirectives: h
                                        });
                                        break;
                                    case u.PlaylistContextType.SUBTITLE_TRACK:
                                        this.hls.trigger(n.Events.SUBTITLE_TRACK_LOADED, {
                                            details: d,
                                            id: o || 0,
                                            groupId: l || "",
                                            stats: e,
                                            networkDetails: i,
                                            deliveryDirectives: h
                                        })
                                }
                            }, t
                        }();
                        e.default = h
                    },
                    "./src/polyfills/number.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "isFiniteNumber", function() {
                            return i
                        }), r.d(e, "MAX_SAFE_INTEGER", function() {
                            return n
                        });
                        var i = Number.isFinite || function(t) {
                                return "number" == typeof t && isFinite(t)
                            },
                            n = Number.MAX_SAFE_INTEGER || 9007199254740991
                    },
                    "./src/remux/aac-helper.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = function() {
                            function t() {}
                            return t.getSilentFrame = function(t, e) {
                                if ("mp4a.40.2" === t) {
                                    if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                    if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                    if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                    if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                    else if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                    else if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
                                } else {
                                    if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                    if (2 === e || 3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                                }
                            }, t
                        }();
                        e.default = i
                    },
                    "./src/remux/mp4-generator.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = function() {
                            function t() {}
                            return t.init = function() {
                                for (e in t.types = {
                                        avc1: [],
                                        avcC: [],
                                        btrt: [],
                                        dinf: [],
                                        dref: [],
                                        esds: [],
                                        ftyp: [],
                                        hdlr: [],
                                        mdat: [],
                                        mdhd: [],
                                        mdia: [],
                                        mfhd: [],
                                        minf: [],
                                        moof: [],
                                        moov: [],
                                        mp4a: [],
                                        ".mp3": [],
                                        mvex: [],
                                        mvhd: [],
                                        pasp: [],
                                        sdtp: [],
                                        stbl: [],
                                        stco: [],
                                        stsc: [],
                                        stsd: [],
                                        stsz: [],
                                        stts: [],
                                        tfdt: [],
                                        tfhd: [],
                                        traf: [],
                                        trak: [],
                                        trun: [],
                                        trex: [],
                                        tkhd: [],
                                        vmhd: [],
                                        smhd: []
                                    }, t.types) t.types.hasOwnProperty(e) && (t.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                                var e, r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                    i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                                t.HDLR_TYPES = {
                                    video: r,
                                    audio: i
                                };
                                var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                    s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                                t.STTS = t.STSC = t.STCO = s, t.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), t.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), t.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), t.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                                var a = new Uint8Array([105, 115, 111, 109]),
                                    o = new Uint8Array([97, 118, 99, 49]),
                                    l = new Uint8Array([0, 0, 0, 1]);
                                t.FTYP = t.box(t.types.ftyp, a, l, a, o), t.DINF = t.box(t.types.dinf, t.box(t.types.dref, n))
                            }, t.box = function(t) {
                                for (var e = 8, r = arguments.length, i = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
                                for (var s = i.length, a = s; s--;) e += i[s].byteLength;
                                var o = new Uint8Array(e);
                                for (o[0] = e >> 24 & 255, o[1] = e >> 16 & 255, o[2] = e >> 8 & 255, o[3] = 255 & e, o.set(t, 4), s = 0, e = 8; s < a; s++) o.set(i[s], e), e += i[s].byteLength;
                                return o
                            }, t.hdlr = function(e) {
                                return t.box(t.types.hdlr, t.HDLR_TYPES[e])
                            }, t.mdat = function(e) {
                                return t.box(t.types.mdat, e)
                            }, t.mdhd = function(e, r) {
                                var i = Math.floor((r *= e) / 4294967296),
                                    n = Math.floor(r % 4294967296);
                                return t.box(t.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
                            }, t.mdia = function(e) {
                                return t.box(t.types.mdia, t.mdhd(e.timescale, e.duration), t.hdlr(e.type), t.minf(e))
                            }, t.mfhd = function(e) {
                                return t.box(t.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                            }, t.minf = function(e) {
                                return "audio" === e.type ? t.box(t.types.minf, t.box(t.types.smhd, t.SMHD), t.DINF, t.stbl(e)) : t.box(t.types.minf, t.box(t.types.vmhd, t.VMHD), t.DINF, t.stbl(e))
                            }, t.moof = function(e, r, i) {
                                return t.box(t.types.moof, t.mfhd(e), t.traf(i, r))
                            }, t.moov = function(e) {
                                for (var r = e.length, i = []; r--;) i[r] = t.trak(e[r]);
                                return t.box.apply(null, [t.types.moov, t.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(t.mvex(e)))
                            }, t.mvex = function(e) {
                                for (var r = e.length, i = []; r--;) i[r] = t.trex(e[r]);
                                return t.box.apply(null, [t.types.mvex].concat(i))
                            }, t.mvhd = function(e, r) {
                                var i = Math.floor((r *= e) / 4294967296),
                                    n = Math.floor(r % 4294967296),
                                    s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                                return t.box(t.types.mvhd, s)
                            }, t.sdtp = function(e) {
                                var r, i, n = e.samples || [],
                                    s = new Uint8Array(4 + n.length);
                                for (r = 0; r < n.length; r++) i = n[r].flags, s[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                                return t.box(t.types.sdtp, s)
                            }, t.stbl = function(e) {
                                return t.box(t.types.stbl, t.stsd(e), t.box(t.types.stts, t.STTS), t.box(t.types.stsc, t.STSC), t.box(t.types.stsz, t.STSZ), t.box(t.types.stco, t.STCO))
                            }, t.avc1 = function(e) {
                                var r, i, n, s = [],
                                    a = [];
                                for (r = 0; r < e.sps.length; r++) n = (i = e.sps[r]).byteLength, s.push(n >>> 8 & 255), s.push(255 & n), s = s.concat(Array.prototype.slice.call(i));
                                for (r = 0; r < e.pps.length; r++) n = (i = e.pps[r]).byteLength, a.push(n >>> 8 & 255), a.push(255 & n), a = a.concat(Array.prototype.slice.call(i));
                                var o = t.box(t.types.avcC, new Uint8Array([1, s[3], s[4], s[5], 255, 224 | e.sps.length].concat(s).concat([e.pps.length]).concat(a))),
                                    l = e.width,
                                    u = e.height,
                                    c = e.pixelRatio[0],
                                    d = e.pixelRatio[1];
                                return t.box(t.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, t.box(t.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), t.box(t.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
                            }, t.esds = function(t) {
                                var e = t.config.length;
                                return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
                            }, t.mp4a = function(e) {
                                var r = e.samplerate;
                                return t.box(t.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), t.box(t.types.esds, t.esds(e)))
                            }, t.mp3 = function(e) {
                                var r = e.samplerate;
                                return t.box(t.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                            }, t.stsd = function(e) {
                                return "audio" !== e.type ? t.box(t.types.stsd, t.STSD, t.avc1(e)) : e.isAAC || "mp3" !== e.codec ? t.box(t.types.stsd, t.STSD, t.mp4a(e)) : t.box(t.types.stsd, t.STSD, t.mp3(e))
                            }, t.tkhd = function(e) {
                                var r = e.id,
                                    i = e.duration * e.timescale,
                                    n = e.width,
                                    s = e.height,
                                    a = Math.floor(i / 4294967296),
                                    o = Math.floor(i % 4294967296);
                                return t.box(t.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
                            }, t.traf = function(e, r) {
                                var i = t.sdtp(e),
                                    n = e.id,
                                    s = Math.floor(r / 4294967296),
                                    a = Math.floor(r % 4294967296);
                                return t.box(t.types.traf, t.box(t.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), t.box(t.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), t.trun(e, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                            }, t.trak = function(e) {
                                return e.duration = e.duration || 4294967295, t.box(t.types.trak, t.tkhd(e), t.mdia(e))
                            }, t.trex = function(e) {
                                var r = e.id;
                                return t.box(t.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                            }, t.trun = function(e, r) {
                                var i, n, s, a, o, l, u = e.samples || [],
                                    c = u.length,
                                    d = 12 + 16 * c,
                                    h = new Uint8Array(d);
                                for (r += 8 + d, h.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < c; i++) s = (n = u[i]).duration, a = n.size, o = n.flags, l = n.cts, h.set([s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                                return t.box(t.types.trun, h)
                            }, t.initSegment = function(e) {
                                t.types || t.init();
                                var r = t.moov(e),
                                    i = new Uint8Array(t.FTYP.byteLength + r.byteLength);
                                return i.set(t.FTYP), i.set(r, t.FTYP.byteLength), i
                            }, t
                        }();
                        i.types = void 0, i.HDLR_TYPES = void 0, i.STTS = void 0, i.STSC = void 0, i.STCO = void 0, i.STSZ = void 0, i.VMHD = void 0, i.SMHD = void 0, i.STSD = void 0, i.FTYP = void 0, i.DINF = void 0, e.default = i
                    },
                    "./src/remux/mp4-remuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return v
                        }), r.d(e, "normalizePts", function() {
                            return p
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/remux/aac-helper.ts"),
                            s = r("./src/remux/mp4-generator.ts"),
                            a = r("./src/events.ts"),
                            o = r("./src/errors.ts"),
                            l = r("./src/utils/logger.ts"),
                            u = r("./src/types/loader.ts"),
                            c = r("./src/utils/timescale-conversion.ts");

                        function d() {
                            return (d = Object.assign || function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                }
                                return t
                            }).apply(this, arguments)
                        }
                        var h = null,
                            f = null,
                            g = !1,
                            v = function() {
                                function t(t, e, r, i) {
                                    if (void 0 === i && (i = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = t, this.config = e, this.typeSupported = r, this.ISGenerated = !1, null === h) {
                                        var n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
                                        h = n ? parseInt(n[1]) : 0
                                    }
                                    if (null === f) {
                                        var s = navigator.userAgent.match(/Safari\/(\d+)/i);
                                        f = s ? parseInt(s[1]) : 0
                                    }
                                    g = !!h && h < 75 || !!f && f < 600
                                }
                                var e = t.prototype;
                                return e.destroy = function() {}, e.resetTimeStamp = function(t) {
                                    l.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = t
                                }, e.resetNextTimestamp = function() {
                                    l.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
                                }, e.resetInitSegment = function() {
                                    l.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
                                }, e.getVideoStartPts = function(t) {
                                    var e = !1,
                                        r = t.reduce(function(t, r) {
                                            var i = r.pts - t;
                                            return i < -4294967296 ? (e = !0, p(t, r.pts)) : i > 0 ? t : r.pts
                                        }, t[0].pts);
                                    return e && l.logger.debug("PTS rollover detected"), r
                                }, e.remux = function(t, e, r, i, n, s, a, o) {
                                    var c, d, h, f, g, v, m = n,
                                        y = n,
                                        E = t.pid > -1,
                                        T = e.pid > -1,
                                        S = e.samples.length,
                                        b = t.samples.length > 0,
                                        L = S > 1;
                                    if ((!E || b) && (!T || L) || this.ISGenerated || a) {
                                        this.ISGenerated || (h = this.generateIS(t, e, n));
                                        var A = this.isVideoContiguous,
                                            D = -1;
                                        if (L && (D = function(t) {
                                                for (var e = 0; e < t.length; e++)
                                                    if (t[e].key) return e;
                                                return -1
                                            }(e.samples), !A && this.config.forceKeyFrameOnDiscontinuity)) {
                                            if (v = !0, D > 0) {
                                                l.logger.warn("[mp4-remuxer]: Dropped " + D + " out of " + S + " video samples due to a missing keyframe");
                                                var R = this.getVideoStartPts(e.samples);
                                                e.samples = e.samples.slice(D), e.dropped += D, y += (e.samples[0].pts - R) / (e.timescale || 9e4)
                                            } else -1 === D && (l.logger.warn("[mp4-remuxer]: No keyframe found out of " + S + " video samples"), v = !1)
                                        }
                                        if (this.ISGenerated) {
                                            if (b && L) {
                                                var k = this.getVideoStartPts(e.samples),
                                                    _ = (p(t.samples[0].pts, k) - k) / e.inputTimeScale;
                                                m += Math.max(0, _), y += Math.max(0, -_)
                                            }
                                            if (b) {
                                                if (t.samplerate || (l.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h = this.generateIS(t, e, n)), d = this.remuxAudio(t, m, this.isAudioContiguous, s, T || L || o === u.PlaylistLevelType.AUDIO ? y : void 0), L) {
                                                    var I = d ? d.endPTS - d.startPTS : 0;
                                                    e.inputTimeScale || (l.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h = this.generateIS(t, e, n)), c = this.remuxVideo(e, y, A, I)
                                                }
                                            } else L && (c = this.remuxVideo(e, y, A, 0));
                                            c && (c.firstKeyFrame = D, c.independent = -1 !== D)
                                        }
                                    }
                                    return this.ISGenerated && (r.samples.length && (g = this.remuxID3(r, n)), i.samples.length && (f = this.remuxText(i, n))), {
                                        audio: d,
                                        video: c,
                                        initSegment: h,
                                        independent: v,
                                        text: f,
                                        id3: g
                                    }
                                }, e.generateIS = function(t, e, r) {
                                    var n, a, o, l = t.samples,
                                        u = e.samples,
                                        c = this.typeSupported,
                                        d = {},
                                        h = !Object(i.isFiniteNumber)(this._initPTS),
                                        f = "audio/mp4";
                                    if (h && (n = a = 1 / 0), t.config && l.length && (t.timescale = t.samplerate, !t.isAAC && (c.mpeg ? (f = "audio/mpeg", t.codec = "") : c.mp3 && (t.codec = "mp3")), d.audio = {
                                            id: "audio",
                                            container: f,
                                            codec: t.codec,
                                            initSegment: !t.isAAC && c.mpeg ? new Uint8Array(0) : s.default.initSegment([t]),
                                            metadata: {
                                                channelCount: t.channelCount
                                            }
                                        }, h && (o = t.inputTimeScale, n = a = l[0].pts - Math.round(o * r))), e.sps && e.pps && u.length && (e.timescale = e.inputTimeScale, d.video = {
                                            id: "main",
                                            container: "video/mp4",
                                            codec: e.codec,
                                            initSegment: s.default.initSegment([e]),
                                            metadata: {
                                                width: e.width,
                                                height: e.height
                                            }
                                        }, h)) {
                                        o = e.inputTimeScale;
                                        var g = this.getVideoStartPts(u),
                                            v = Math.round(o * r);
                                        a = Math.min(a, p(u[0].dts, g) - v), n = Math.min(n, g - v)
                                    }
                                    if (Object.keys(d).length) return this.ISGenerated = !0, h && (this._initPTS = n, this._initDTS = a), {
                                        tracks: d,
                                        initPTS: n,
                                        timescale: o
                                    }
                                }, e.remuxVideo = function(t, e, r, i) {
                                    var n, u, f, v, y = t.inputTimeScale,
                                        E = t.samples,
                                        T = [],
                                        S = E.length,
                                        b = this._initPTS,
                                        L = this.nextAvcDts,
                                        A = 8,
                                        D = Number.POSITIVE_INFINITY,
                                        R = Number.NEGATIVE_INFINITY,
                                        k = 0,
                                        _ = !1;
                                    r && null !== L || (L = e * y - (E[0].pts - p(E[0].dts, E[0].pts)));
                                    for (var I = 0; I < S; I++) {
                                        var C = E[I];
                                        C.pts = p(C.pts - b, L), C.dts = p(C.dts - b, L), C.dts > C.pts && (k = Math.max(Math.min(k, C.pts - C.dts), -18e3)), C.dts < E[I > 0 ? I - 1 : I].dts && (_ = !0)
                                    }
                                    _ && E.sort(function(t, e) {
                                        var r = t.dts - e.dts,
                                            i = t.pts - e.pts;
                                        return r || i
                                    }), u = E[0].dts;
                                    var O = Math.round(((f = E[E.length - 1].dts) - u) / (S - 1));
                                    if (k < 0) {
                                        if (k < -2 * O) {
                                            l.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(c.toMsFromMpegTsClock)(-O, !0) + " ms");
                                            for (var x = k, w = 0; w < S; w++) E[w].dts = x = Math.max(x, E[w].pts - O), E[w].pts = Math.max(x, E[w].pts)
                                        } else {
                                            l.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(c.toMsFromMpegTsClock)(k, !0) + " ms to overcome this issue");
                                            for (var P = 0; P < S; P++) E[P].dts = E[P].dts + k
                                        }
                                        u = E[0].dts
                                    }
                                    if (r) {
                                        var F = u - L,
                                            M = F > O,
                                            N = F < -1;
                                        if (M || N) {
                                            M ? l.logger.warn("AVC: " + Object(c.toMsFromMpegTsClock)(F, !0) + " ms (" + F + "dts) hole between fragments detected, filling it") : l.logger.warn("AVC: " + Object(c.toMsFromMpegTsClock)(-F, !0) + " ms (" + F + "dts) overlapping between fragments detected"), u = L;
                                            var B = E[0].pts - F;
                                            E[0].dts = u, E[0].pts = B, l.logger.log("Video: First PTS/DTS adjusted: " + Object(c.toMsFromMpegTsClock)(B, !0) + "/" + Object(c.toMsFromMpegTsClock)(u, !0) + ", delta: " + Object(c.toMsFromMpegTsClock)(F, !0) + " ms")
                                        }
                                    }
                                    g && (u = Math.max(0, u));
                                    for (var U = 0, G = 0, j = 0; j < S; j++) {
                                        for (var K = E[j], H = K.units, V = H.length, W = 0, Y = 0; Y < V; Y++) W += H[Y].data.length;
                                        G += W, U += V, K.length = W, K.dts = Math.max(K.dts, u), K.pts = Math.max(K.pts, K.dts, 0), D = Math.min(K.pts, D), R = Math.max(K.pts, R)
                                    }
                                    f = E[S - 1].dts;
                                    var q = G + 4 * U + 8;
                                    try {
                                        v = new Uint8Array(q)
                                    } catch (t) {
                                        this.observer.emit(a.Events.ERROR, a.Events.ERROR, {
                                            type: o.ErrorTypes.MUX_ERROR,
                                            details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                                            fatal: !1,
                                            bytes: q,
                                            reason: "fail allocating video mdat " + q
                                        });
                                        return
                                    }
                                    var X = new DataView(v.buffer);
                                    X.setUint32(0, q), v.set(s.default.types.mdat, 4);
                                    for (var z = 0; z < S; z++) {
                                        for (var Q = E[z], $ = Q.units, J = 0, Z = 0, tt = $.length; Z < tt; Z++) {
                                            var te = $[Z],
                                                tr = te.data,
                                                ti = te.data.byteLength;
                                            X.setUint32(A, ti), A += 4, v.set(tr, A), A += ti, J += 4 + ti
                                        }
                                        if (z < S - 1) n = E[z + 1].dts - Q.dts;
                                        else {
                                            var tn = this.config,
                                                ts = Q.dts - E[z > 0 ? z - 1 : z].dts;
                                            if (tn.stretchShortVideoTrack && null !== this.nextAudioPts) {
                                                var ta = Math.floor(tn.maxBufferHole * y),
                                                    to = (i ? D + i * y : this.nextAudioPts) - Q.pts;
                                                to > ta ? ((n = to - ts) < 0 && (n = ts), l.logger.log("[mp4-remuxer]: It is approximately " + to / 90 + " ms to the next segment; using duration " + n / 90 + " ms for the last video frame.")) : n = ts
                                            } else n = ts
                                        }
                                        var tl = Math.round(Q.pts - Q.dts);
                                        T.push(new m(Q.key, n, J, tl))
                                    }
                                    if (T.length && h && h < 70) {
                                        var tu = T[0].flags;
                                        tu.dependsOn = 2, tu.isNonSync = 0
                                    }
                                    console.assert(void 0 !== n, "mp4SampleDuration must be computed"), this.nextAvcDts = L = f + n, this.isVideoContiguous = !0;
                                    var tc = {
                                        data1: s.default.moof(t.sequenceNumber++, u, d({}, t, {
                                            samples: T
                                        })),
                                        data2: v,
                                        startPTS: D / y,
                                        endPTS: (R + n) / y,
                                        startDTS: u / y,
                                        endDTS: L / y,
                                        type: "video",
                                        hasAudio: !1,
                                        hasVideo: !0,
                                        nb: T.length,
                                        dropped: t.dropped
                                    };
                                    return t.samples = [], t.dropped = 0, console.assert(v.length, "MDAT length must not be zero"), tc
                                }, e.remuxAudio = function(t, e, r, i, u) {
                                    var c, h = t.inputTimeScale,
                                        f = t.samplerate ? t.samplerate : h,
                                        g = h / f,
                                        v = t.isAAC ? 1024 : 1152,
                                        y = v * g,
                                        E = this._initPTS,
                                        T = !t.isAAC && this.typeSupported.mpeg,
                                        S = [],
                                        b = t.samples,
                                        L = T ? 0 : 8,
                                        A = this.nextAudioPts || -1,
                                        D = e * h;
                                    if (this.isAudioContiguous = r = r || b.length && A > 0 && (i && 9e3 > Math.abs(D - A) || Math.abs(p(b[0].pts - E, D) - A) < 20 * y), b.forEach(function(t) {
                                            t.pts = p(t.pts - E, D)
                                        }), !r || A < 0) {
                                        if (!(b = b.filter(function(t) {
                                                return t.pts >= 0
                                            })).length) return;
                                        A = 0 === u ? 0 : i ? Math.max(0, D) : b[0].pts
                                    }
                                    if (t.isAAC)
                                        for (var R = void 0 !== u, k = this.config.maxAudioFramesDrift, _ = 0, I = A; _ < b.length; _++) {
                                            var C = b[_],
                                                O = C.pts,
                                                x = O - I,
                                                w = Math.abs(1e3 * x / h);
                                            if (x <= -k * y && R) 0 === _ && (l.logger.warn("Audio frame @ " + (O / h).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * x / h) + " ms."), this.nextAudioPts = A = I = O);
                                            else if (x >= k * y && w < 1e4 && R) {
                                                var P = Math.round(x / y);
                                                (I = O - P * y) < 0 && (P--, I += y), 0 === _ && (this.nextAudioPts = A = I), l.logger.warn("[mp4-remuxer]: Injecting " + P + " audio frame @ " + (I / h).toFixed(3) + "s due to " + Math.round(1e3 * x / h) + " ms gap.");
                                                for (var F = 0; F < P; F++) {
                                                    var M = Math.max(I, 0),
                                                        N = n.default.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                                    N || (l.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), N = C.unit.subarray()), b.splice(_, 0, {
                                                        unit: N,
                                                        pts: M
                                                    }), I += y, _++
                                                }
                                            }
                                            C.pts = I, I += y
                                        }
                                    for (var B = null, U = null, G = 0, j = b.length; j--;) G += b[j].unit.byteLength;
                                    for (var K = 0, H = b.length; K < H; K++) {
                                        var V = b[K],
                                            W = V.unit,
                                            Y = V.pts;
                                        if (null !== U) S[K - 1].duration = Math.round((Y - U) / g);
                                        else {
                                            if (r && t.isAAC && (Y = A), B = Y, !(G > 0)) return;
                                            G += L;
                                            try {
                                                c = new Uint8Array(G)
                                            } catch (t) {
                                                this.observer.emit(a.Events.ERROR, a.Events.ERROR, {
                                                    type: o.ErrorTypes.MUX_ERROR,
                                                    details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                                                    fatal: !1,
                                                    bytes: G,
                                                    reason: "fail allocating audio mdat " + G
                                                });
                                                return
                                            }
                                            T || (new DataView(c.buffer).setUint32(0, G), c.set(s.default.types.mdat, 4))
                                        }
                                        c.set(W, L);
                                        var q = W.byteLength;
                                        L += q, S.push(new m(!0, v, q, 0)), U = Y
                                    }
                                    var X = S.length;
                                    if (X) {
                                        var z = S[S.length - 1];
                                        this.nextAudioPts = A = U + g * z.duration;
                                        var Q = T ? new Uint8Array(0) : s.default.moof(t.sequenceNumber++, B / g, d({}, t, {
                                            samples: S
                                        }));
                                        t.samples = [];
                                        var $ = B / h,
                                            J = A / h,
                                            Z = {
                                                data1: Q,
                                                data2: c,
                                                startPTS: $,
                                                endPTS: J,
                                                startDTS: $,
                                                endDTS: J,
                                                type: "audio",
                                                hasAudio: !0,
                                                hasVideo: !1,
                                                nb: X
                                            };
                                        return this.isAudioContiguous = !0, console.assert(c.length, "MDAT length must not be zero"), Z
                                    }
                                }, e.remuxEmptyAudio = function(t, e, r, i) {
                                    var s = t.inputTimeScale,
                                        a = t.samplerate ? t.samplerate : s,
                                        o = this.nextAudioPts,
                                        u = (null !== o ? o : i.startDTS * s) + this._initDTS,
                                        c = i.endDTS * s + this._initDTS,
                                        d = s / a * 1024,
                                        h = Math.ceil((c - u) / d),
                                        f = n.default.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
                                    if (l.logger.warn("[mp4-remuxer]: remux empty Audio"), !f) {
                                        l.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
                                        return
                                    }
                                    for (var g = [], v = 0; v < h; v++) {
                                        var p = u + v * d;
                                        g.push({
                                            unit: f,
                                            pts: p,
                                            dts: p
                                        })
                                    }
                                    return t.samples = g, this.remuxAudio(t, e, r, !1)
                                }, e.remuxID3 = function(t, e) {
                                    var r = t.samples.length;
                                    if (r) {
                                        for (var i = t.inputTimeScale, n = this._initPTS, s = this._initDTS, a = 0; a < r; a++) {
                                            var o = t.samples[a];
                                            o.pts = p(o.pts - n, e * i) / i, o.dts = p(o.dts - s, e * i) / i
                                        }
                                        var l = t.samples;
                                        return t.samples = [], {
                                            samples: l
                                        }
                                    }
                                }, e.remuxText = function(t, e) {
                                    var r = t.samples.length;
                                    if (r) {
                                        for (var i = t.inputTimeScale, n = this._initPTS, s = 0; s < r; s++) {
                                            var a = t.samples[s];
                                            a.pts = p(a.pts - n, e * i) / i
                                        }
                                        t.samples.sort(function(t, e) {
                                            return t.pts - e.pts
                                        });
                                        var o = t.samples;
                                        return t.samples = [], {
                                            samples: o
                                        }
                                    }
                                }, t
                            }();

                        function p(t, e) {
                            var r;
                            if (null === e) return t;
                            for (r = e < t ? -8589934592 : 8589934592; Math.abs(t - e) > 4294967296;) t += r;
                            return t
                        }
                        var m = function(t, e, r, i) {
                                this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = e, this.size = r, this.cts = i, this.flags = new y(t)
                            },
                            y = function(t) {
                                this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = t ? 2 : 1, this.isNonSync = t ? 0 : 1
                            }
                    },
                    "./src/remux/passthrough-remuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/utils/mp4-tools.ts"),
                            s = r("./src/loader/fragment.ts"),
                            a = r("./src/utils/logger.ts"),
                            o = function() {
                                function t() {
                                    this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null
                                }
                                var e = t.prototype;
                                return e.destroy = function() {}, e.resetTimeStamp = function(t) {
                                    this.initPTS = t, this.lastEndDTS = null
                                }, e.resetNextTimestamp = function() {
                                    this.lastEndDTS = null
                                }, e.resetInitSegment = function(t, e, r) {
                                    this.audioCodec = e, this.videoCodec = r, this.generateInitSegment(t), this.emitInitSegment = !0
                                }, e.generateInitSegment = function(t) {
                                    var e = this.audioCodec,
                                        r = this.videoCodec;
                                    if (!t || !t.byteLength) {
                                        this.initTracks = void 0, this.initData = void 0;
                                        return
                                    }
                                    var i = this.initData = Object(n.parseInitSegment)(t);
                                    e || (e = u(i.audio, s.ElementaryStreamTypes.AUDIO)), r || (r = u(i.video, s.ElementaryStreamTypes.VIDEO));
                                    var o = {};
                                    i.audio && i.video ? o.audiovideo = {
                                        container: "video/mp4",
                                        codec: e + "," + r,
                                        initSegment: t,
                                        id: "main"
                                    } : i.audio ? o.audio = {
                                        container: "audio/mp4",
                                        codec: e,
                                        initSegment: t,
                                        id: "audio"
                                    } : i.video ? o.video = {
                                        container: "video/mp4",
                                        codec: r,
                                        initSegment: t,
                                        id: "main"
                                    } : a.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = o
                                }, e.remux = function(t, e, r, s, o) {
                                    var u = this.initPTS,
                                        c = this.lastEndDTS,
                                        d = {
                                            audio: void 0,
                                            video: void 0,
                                            text: s,
                                            id3: r,
                                            initSegment: void 0
                                        };
                                    Object(i.isFiniteNumber)(c) || (c = this.lastEndDTS = o || 0);
                                    var h = e.samples;
                                    if (!h || !h.length) return d;
                                    var f = {
                                            initPTS: void 0,
                                            timescale: 1
                                        },
                                        g = this.initData;
                                    if (g && g.length || (this.generateInitSegment(h), g = this.initData), !g || !g.length) return a.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), d;
                                    this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1), Object(i.isFiniteNumber)(u) || (this.initPTS = f.initPTS = u = l(g, h, c));
                                    var v = Object(n.getDuration)(h, g),
                                        p = c,
                                        m = v + p;
                                    Object(n.offsetStartDTS)(g, h, u), v > 0 ? this.lastEndDTS = m : (a.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
                                    var y = !!g.audio,
                                        E = !!g.video,
                                        T = "";
                                    y && (T += "audio"), E && (T += "video");
                                    var S = {
                                        data1: h,
                                        startPTS: p,
                                        startDTS: p,
                                        endPTS: m,
                                        endDTS: m,
                                        type: T,
                                        hasAudio: y,
                                        hasVideo: E,
                                        nb: 1,
                                        dropped: 0
                                    };
                                    return d.audio = "audio" === S.type ? S : void 0, d.video = "audio" !== S.type ? S : void 0, d.text = s, d.id3 = r, d.initSegment = f, d
                                }, t
                            }(),
                            l = function(t, e, r) {
                                return Object(n.getStartDTS)(t, e) - r
                            };

                        function u(t, e) {
                            var r = null == t ? void 0 : t.codec;
                            return r && r.length > 4 ? r : "hvc1" === r ? "hvc1.1.c.L120.90" : "av01" === r ? "av01.0.04M.08" : "avc1" === r || e === s.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
                        }
                        e.default = o
                    },
                    "./src/task-loop.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return i
                        });
                        var i = function() {
                            function t() {
                                this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
                            }
                            var e = t.prototype;
                            return e.destroy = function() {
                                this.onHandlerDestroying(), this.onHandlerDestroyed()
                            }, e.onHandlerDestroying = function() {
                                this.clearNextTick(), this.clearInterval()
                            }, e.onHandlerDestroyed = function() {}, e.hasInterval = function() {
                                return !!this._tickInterval
                            }, e.hasNextTick = function() {
                                return !!this._tickTimer
                            }, e.setInterval = function(t) {
                                return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, t), !0)
                            }, e.clearInterval = function() {
                                return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
                            }, e.clearNextTick = function() {
                                return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
                            }, e.tick = function() {
                                this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
                            }, e.tickImmediate = function() {
                                this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
                            }, e.doTick = function() {}, t
                        }()
                    },
                    "./src/types/cmcd.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "CMCDVersion", function() {
                            return u
                        }), r.d(e, "CMCDObjectType", function() {
                            return a
                        }), r.d(e, "CMCDStreamingFormat", function() {
                            return o
                        }), r.d(e, "CMCDStreamType", function() {
                            return l
                        });
                        var i, n, s, a, o, l, u = 1;
                        (i = a || (a = {})).MANIFEST = "m", i.AUDIO = "a", i.VIDEO = "v", i.MUXED = "av", i.INIT = "i", i.CAPTION = "c", i.TIMED_TEXT = "tt", i.KEY = "k", i.OTHER = "o", (n = o || (o = {})).DASH = "d", n.HLS = "h", n.SMOOTH = "s", n.OTHER = "o", (s = l || (l = {})).VOD = "v", s.LIVE = "l"
                    },
                    "./src/types/level.ts": function(t, e, r) {
                        "use strict";

                        function i(t, e) {
                            var r = t.canSkipUntil,
                                i = t.canSkipDateRanges,
                                n = t.endSN;
                            return r && (void 0 !== e ? e - n : 0) < r ? i ? s.v2 : s.Yes : s.No
                        }
                        r.r(e), r.d(e, "HlsSkip", function() {
                            return s
                        }), r.d(e, "getSkipValue", function() {
                            return i
                        }), r.d(e, "HlsUrlParameters", function() {
                            return a
                        }), r.d(e, "Level", function() {
                            return o
                        }), (n = s || (s = {})).No = "", n.Yes = "YES", n.v2 = "v2";
                        var n, s, a = function() {
                                function t(t, e, r) {
                                    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = t, this.part = e, this.skip = r
                                }
                                return t.prototype.addDirectives = function(t) {
                                    var e = new self.URL(t);
                                    return void 0 !== this.msn && e.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && e.searchParams.set("_HLS_part", this.part.toString()), this.skip && e.searchParams.set("_HLS_skip", this.skip), e.toString()
                                }, t
                            }(),
                            o = function() {
                                function t(t) {
                                    this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [t.url], this.attrs = t.attrs, this.bitrate = t.bitrate, t.details && (this.details = t.details), this.id = t.id || 0, this.name = t.name, this.width = t.width || 0, this.height = t.height || 0, this.audioCodec = t.audioCodec, this.videoCodec = t.videoCodec, this.unknownCodecs = t.unknownCodecs, this.codecSet = [t.videoCodec, t.audioCodec].filter(function(t) {
                                        return t
                                    }).join(",").replace(/\.[^.,]+/g, "")
                                }
                                return function(t, e) {
                                    for (var r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                                    }
                                }(t.prototype, [{
                                    key: "maxBitrate",
                                    get: function() {
                                        return Math.max(this.realBitrate, this.bitrate)
                                    }
                                }, {
                                    key: "uri",
                                    get: function() {
                                        return this.url[this._urlId] || ""
                                    }
                                }, {
                                    key: "urlId",
                                    get: function() {
                                        return this._urlId
                                    },
                                    set: function(t) {
                                        var e = t % this.url.length;
                                        this._urlId !== e && (this.details = void 0, this._urlId = e)
                                    }
                                }]), t
                            }()
                    },
                    "./src/types/loader.ts": function(t, e, r) {
                        "use strict";
                        var i, n, s, a;
                        r.r(e), r.d(e, "PlaylistContextType", function() {
                            return i
                        }), r.d(e, "PlaylistLevelType", function() {
                            return n
                        }), (s = i || (i = {})).MANIFEST = "manifest", s.LEVEL = "level", s.AUDIO_TRACK = "audioTrack", s.SUBTITLE_TRACK = "subtitleTrack", (a = n || (n = {})).MAIN = "main", a.AUDIO = "audio", a.SUBTITLE = "subtitle"
                    },
                    "./src/types/transmuxer.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "ChunkMetadata", function() {
                            return i
                        });
                        var i = function(t, e, r, i, s, a) {
                            void 0 === i && (i = 0), void 0 === s && (s = -1), void 0 === a && (a = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = n(), this.buffering = {
                                audio: n(),
                                video: n(),
                                audiovideo: n()
                            }, this.level = t, this.sn = e, this.id = r, this.size = i, this.part = s, this.partial = a
                        };

                        function n() {
                            return {
                                start: 0,
                                executeStart: 0,
                                executeEnd: 0,
                                end: 0
                            }
                        }
                    },
                    "./src/utils/attr-list.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "AttrList", function() {
                            return s
                        });
                        var i = /^(\d+)x(\d+)$/,
                            n = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                            s = function() {
                                function t(e) {
                                    for (var r in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(r) && (this[r] = e[r])
                                }
                                var e = t.prototype;
                                return e.decimalInteger = function(t) {
                                    var e = parseInt(this[t], 10);
                                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                                }, e.hexadecimalInteger = function(t) {
                                    if (!this[t]) return null;
                                    for (var e = (this[t] || "0x").slice(2), r = new Uint8Array((e = (1 & e.length ? "0" : "") + e).length / 2), i = 0; i < e.length / 2; i++) r[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
                                    return r
                                }, e.hexadecimalIntegerAsNumber = function(t) {
                                    var e = parseInt(this[t], 16);
                                    return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
                                }, e.decimalFloatingPoint = function(t) {
                                    return parseFloat(this[t])
                                }, e.optionalFloat = function(t, e) {
                                    var r = this[t];
                                    return r ? parseFloat(r) : e
                                }, e.enumeratedString = function(t) {
                                    return this[t]
                                }, e.bool = function(t) {
                                    return "YES" === this[t]
                                }, e.decimalResolution = function(t) {
                                    var e = i.exec(this[t]);
                                    if (null !== e) return {
                                        width: parseInt(e[1], 10),
                                        height: parseInt(e[2], 10)
                                    }
                                }, t.parseAttrList = function(t) {
                                    var e, r = {};
                                    for (n.lastIndex = 0; null !== (e = n.exec(t));) {
                                        var i = e[2];
                                        0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), r[e[1]] = i
                                    }
                                    return r
                                }, t
                            }()
                    },
                    "./src/utils/binary-search.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), e.default = {
                            search: function(t, e) {
                                for (var r = 0, i = t.length - 1, n = null, s = null; r <= i;) {
                                    var a = e(s = t[n = (r + i) / 2 | 0]);
                                    if (a > 0) r = n + 1;
                                    else {
                                        if (!(a < 0)) return s;
                                        i = n - 1
                                    }
                                }
                                return null
                            }
                        }
                    },
                    "./src/utils/buffer-helper.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "BufferHelper", function() {
                            return s
                        });
                        var i = r("./src/utils/logger.ts"),
                            n = {
                                length: 0,
                                start: function() {
                                    return 0
                                },
                                end: function() {
                                    return 0
                                }
                            },
                            s = function() {
                                function t() {}
                                return t.isBuffered = function(e, r) {
                                    try {
                                        if (e) {
                                            for (var i = t.getBuffered(e), n = 0; n < i.length; n++)
                                                if (r >= i.start(n) && r <= i.end(n)) return !0
                                        }
                                    } catch (t) {}
                                    return !1
                                }, t.bufferInfo = function(e, r, i) {
                                    try {
                                        if (e) {
                                            var n, s = t.getBuffered(e),
                                                a = [];
                                            for (n = 0; n < s.length; n++) a.push({
                                                start: s.start(n),
                                                end: s.end(n)
                                            });
                                            return this.bufferedInfo(a, r, i)
                                        }
                                    } catch (t) {}
                                    return {
                                        len: 0,
                                        start: r,
                                        end: r,
                                        nextStart: void 0
                                    }
                                }, t.bufferedInfo = function(t, e, r) {
                                    e = Math.max(0, e), t.sort(function(t, e) {
                                        return t.start - e.start || e.end - t.end
                                    });
                                    var i, n = [];
                                    if (r)
                                        for (var s = 0; s < t.length; s++) {
                                            var a = n.length;
                                            if (a) {
                                                var o = n[a - 1].end;
                                                t[s].start - o < r ? t[s].end > o && (n[a - 1].end = t[s].end) : n.push(t[s])
                                            } else n.push(t[s])
                                        } else n = t;
                                    for (var l = 0, u = e, c = e, d = 0; d < n.length; d++) {
                                        var h = n[d].start,
                                            f = n[d].end;
                                        if (e + r >= h && e < f) u = h, l = (c = f) - e;
                                        else if (e + r < h) {
                                            i = h;
                                            break
                                        }
                                    }
                                    return {
                                        len: l,
                                        start: u || 0,
                                        end: c || 0,
                                        nextStart: i
                                    }
                                }, t.getBuffered = function(t) {
                                    try {
                                        return t.buffered
                                    } catch (t) {
                                        return i.logger.log("failed to get media.buffered", t), n
                                    }
                                }, t
                            }()
                    },
                    "./src/utils/cea-608-parser.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "Row", function() {
                            return m
                        }), r.d(e, "CaptionScreen", function() {
                            return y
                        });
                        var i, n, s = r("./src/utils/logger.ts"),
                            a = {
                                42: 225,
                                92: 233,
                                94: 237,
                                95: 243,
                                96: 250,
                                123: 231,
                                124: 247,
                                125: 209,
                                126: 241,
                                127: 9608,
                                128: 174,
                                129: 176,
                                130: 189,
                                131: 191,
                                132: 8482,
                                133: 162,
                                134: 163,
                                135: 9834,
                                136: 224,
                                137: 32,
                                138: 232,
                                139: 226,
                                140: 234,
                                141: 238,
                                142: 244,
                                143: 251,
                                144: 193,
                                145: 201,
                                146: 211,
                                147: 218,
                                148: 220,
                                149: 252,
                                150: 8216,
                                151: 161,
                                152: 42,
                                153: 8217,
                                154: 9473,
                                155: 169,
                                156: 8480,
                                157: 8226,
                                158: 8220,
                                159: 8221,
                                160: 192,
                                161: 194,
                                162: 199,
                                163: 200,
                                164: 202,
                                165: 203,
                                166: 235,
                                167: 206,
                                168: 207,
                                169: 239,
                                170: 212,
                                171: 217,
                                172: 249,
                                173: 219,
                                174: 171,
                                175: 187,
                                176: 195,
                                177: 227,
                                178: 205,
                                179: 204,
                                180: 236,
                                181: 210,
                                182: 242,
                                183: 213,
                                184: 245,
                                185: 123,
                                186: 125,
                                187: 92,
                                188: 94,
                                189: 95,
                                190: 124,
                                191: 8764,
                                192: 196,
                                193: 228,
                                194: 214,
                                195: 246,
                                196: 223,
                                197: 165,
                                198: 164,
                                199: 9475,
                                200: 197,
                                201: 229,
                                202: 216,
                                203: 248,
                                204: 9487,
                                205: 9491,
                                206: 9495,
                                207: 9499
                            },
                            o = function(t) {
                                var e = t;
                                return a.hasOwnProperty(t) && (e = a[t]), String.fromCharCode(e)
                            },
                            l = {
                                17: 1,
                                18: 3,
                                21: 5,
                                22: 7,
                                23: 9,
                                16: 11,
                                19: 12,
                                20: 14
                            },
                            u = {
                                17: 2,
                                18: 4,
                                21: 6,
                                22: 8,
                                23: 10,
                                19: 13,
                                20: 15
                            },
                            c = {
                                25: 1,
                                26: 3,
                                29: 5,
                                30: 7,
                                31: 9,
                                24: 11,
                                27: 12,
                                28: 14
                            },
                            d = {
                                25: 2,
                                26: 4,
                                29: 6,
                                30: 8,
                                31: 10,
                                27: 13,
                                28: 15
                            },
                            h = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
                        (i = n || (n = {}))[i.ERROR = 0] = "ERROR", i[i.TEXT = 1] = "TEXT", i[i.WARNING = 2] = "WARNING", i[i.INFO = 2] = "INFO", i[i.DEBUG = 3] = "DEBUG", i[i.DATA = 3] = "DATA";
                        var f = function() {
                                function t() {
                                    this.time = null, this.verboseLevel = n.ERROR
                                }
                                return t.prototype.log = function(t, e) {
                                    this.verboseLevel >= t && s.logger.log(this.time + " [" + t + "] " + e)
                                }, t
                            }(),
                            g = function(t) {
                                for (var e = [], r = 0; r < t.length; r++) e.push(t[r].toString(16));
                                return e
                            },
                            v = function() {
                                function t(t, e, r, i, n) {
                                    this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = t || "white", this.underline = e || !1, this.italics = r || !1, this.background = i || "black", this.flash = n || !1
                                }
                                var e = t.prototype;
                                return e.reset = function() {
                                    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                                }, e.setStyles = function(t) {
                                    for (var e = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < e.length; r++) {
                                        var i = e[r];
                                        t.hasOwnProperty(i) && (this[i] = t[i])
                                    }
                                }, e.isDefault = function() {
                                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                                }, e.equals = function(t) {
                                    return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
                                }, e.copy = function(t) {
                                    this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
                                }, e.toString = function() {
                                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                                }, t
                            }(),
                            p = function() {
                                function t(t, e, r, i, n, s) {
                                    this.uchar = void 0, this.penState = void 0, this.uchar = t || " ", this.penState = new v(e, r, i, n, s)
                                }
                                var e = t.prototype;
                                return e.reset = function() {
                                    this.uchar = " ", this.penState.reset()
                                }, e.setChar = function(t, e) {
                                    this.uchar = t, this.penState.copy(e)
                                }, e.setPenState = function(t) {
                                    this.penState.copy(t)
                                }, e.equals = function(t) {
                                    return this.uchar === t.uchar && this.penState.equals(t.penState)
                                }, e.copy = function(t) {
                                    this.uchar = t.uchar, this.penState.copy(t.penState)
                                }, e.isEmpty = function() {
                                    return " " === this.uchar && this.penState.isDefault()
                                }, t
                            }(),
                            m = function() {
                                function t(t) {
                                    this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
                                    for (var e = 0; e < 100; e++) this.chars.push(new p);
                                    this.logger = t, this.pos = 0, this.currPenState = new v
                                }
                                var e = t.prototype;
                                return e.equals = function(t) {
                                    for (var e = !0, r = 0; r < 100; r++)
                                        if (!this.chars[r].equals(t.chars[r])) {
                                            e = !1;
                                            break
                                        }
                                    return e
                                }, e.copy = function(t) {
                                    for (var e = 0; e < 100; e++) this.chars[e].copy(t.chars[e])
                                }, e.isEmpty = function() {
                                    for (var t = !0, e = 0; e < 100; e++)
                                        if (!this.chars[e].isEmpty()) {
                                            t = !1;
                                            break
                                        }
                                    return t
                                }, e.setCursor = function(t) {
                                    this.pos !== t && (this.pos = t), this.pos < 0 ? (this.logger.log(n.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > 100 && (this.logger.log(n.DEBUG, "Too large cursor position " + this.pos), this.pos = 100)
                                }, e.moveCursor = function(t) {
                                    var e = this.pos + t;
                                    if (t > 1)
                                        for (var r = this.pos + 1; r < e + 1; r++) this.chars[r].setPenState(this.currPenState);
                                    this.setCursor(e)
                                }, e.backSpace = function() {
                                    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                                }, e.insertChar = function(t) {
                                    t >= 144 && this.backSpace();
                                    var e = o(t);
                                    if (this.pos >= 100) {
                                        this.logger.log(n.ERROR, "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!");
                                        return
                                    }
                                    this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1)
                                }, e.clearFromPos = function(t) {
                                    var e;
                                    for (e = t; e < 100; e++) this.chars[e].reset()
                                }, e.clear = function() {
                                    this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                                }, e.clearToEndOfRow = function() {
                                    this.clearFromPos(this.pos)
                                }, e.getTextString = function() {
                                    for (var t = [], e = !0, r = 0; r < 100; r++) {
                                        var i = this.chars[r].uchar;
                                        " " !== i && (e = !1), t.push(i)
                                    }
                                    return e ? "" : t.join("")
                                }, e.setPenStyles = function(t) {
                                    this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
                                }, t
                            }(),
                            y = function() {
                                function t(t) {
                                    this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
                                    for (var e = 0; e < 15; e++) this.rows.push(new m(t));
                                    this.logger = t, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
                                }
                                var e = t.prototype;
                                return e.reset = function() {
                                    for (var t = 0; t < 15; t++) this.rows[t].clear();
                                    this.currRow = 14
                                }, e.equals = function(t) {
                                    for (var e = !0, r = 0; r < 15; r++)
                                        if (!this.rows[r].equals(t.rows[r])) {
                                            e = !1;
                                            break
                                        }
                                    return e
                                }, e.copy = function(t) {
                                    for (var e = 0; e < 15; e++) this.rows[e].copy(t.rows[e])
                                }, e.isEmpty = function() {
                                    for (var t = !0, e = 0; e < 15; e++)
                                        if (!this.rows[e].isEmpty()) {
                                            t = !1;
                                            break
                                        }
                                    return t
                                }, e.backSpace = function() {
                                    this.rows[this.currRow].backSpace()
                                }, e.clearToEndOfRow = function() {
                                    this.rows[this.currRow].clearToEndOfRow()
                                }, e.insertChar = function(t) {
                                    this.rows[this.currRow].insertChar(t)
                                }, e.setPen = function(t) {
                                    this.rows[this.currRow].setPenStyles(t)
                                }, e.moveCursor = function(t) {
                                    this.rows[this.currRow].moveCursor(t)
                                }, e.setCursor = function(t) {
                                    this.logger.log(n.INFO, "setCursor: " + t), this.rows[this.currRow].setCursor(t)
                                }, e.setPAC = function(t) {
                                    this.logger.log(n.INFO, "pacData = " + JSON.stringify(t));
                                    var e = t.row - 1;
                                    if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
                                        for (var r = 0; r < 15; r++) this.rows[r].clear();
                                        var i = this.currRow + 1 - this.nrRollUpRows,
                                            s = this.lastOutputScreen;
                                        if (s) {
                                            var a = s.rows[i].cueStartTime,
                                                o = this.logger.time;
                                            if (a && null !== o && a < o)
                                                for (var l = 0; l < this.nrRollUpRows; l++) this.rows[e - this.nrRollUpRows + l + 1].copy(s.rows[i + l])
                                        }
                                    }
                                    this.currRow = e;
                                    var u = this.rows[this.currRow];
                                    if (null !== t.indent) {
                                        var c = t.indent;
                                        u.setCursor(t.indent), t.color = u.chars[Math.max(c - 1, 0)].penState.foreground
                                    }
                                    var d = {
                                        foreground: t.color,
                                        underline: t.underline,
                                        italics: t.italics,
                                        background: "black",
                                        flash: !1
                                    };
                                    this.setPen(d)
                                }, e.setBkgData = function(t) {
                                    this.logger.log(n.INFO, "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
                                }, e.setRollUpRows = function(t) {
                                    this.nrRollUpRows = t
                                }, e.rollUp = function() {
                                    if (null === this.nrRollUpRows) {
                                        this.logger.log(n.DEBUG, "roll_up but nrRollUpRows not set yet");
                                        return
                                    }
                                    this.logger.log(n.TEXT, this.getDisplayText());
                                    var t = this.currRow + 1 - this.nrRollUpRows,
                                        e = this.rows.splice(t, 1)[0];
                                    e.clear(), this.rows.splice(this.currRow, 0, e), this.logger.log(n.INFO, "Rolling up")
                                }, e.getDisplayText = function(t) {
                                    t = t || !1;
                                    for (var e = [], r = "", i = -1, n = 0; n < 15; n++) {
                                        var s = this.rows[n].getTextString();
                                        s && (i = n + 1, t ? e.push("Row " + i + ": '" + s + "'") : e.push(s.trim()))
                                    }
                                    return e.length > 0 && (r = t ? "[" + e.join(" | ") + "]" : e.join("\n")), r
                                }, e.getTextAndFormat = function() {
                                    return this.rows
                                }, t
                            }(),
                            E = function() {
                                function t(t, e, r) {
                                    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new y(r), this.nonDisplayedMemory = new y(r), this.lastOutputScreen = new y(r), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r
                                }
                                var e = t.prototype;
                                return e.reset = function() {
                                    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                                }, e.getHandler = function() {
                                    return this.outputFilter
                                }, e.setHandler = function(t) {
                                    this.outputFilter = t
                                }, e.setPAC = function(t) {
                                    this.writeScreen.setPAC(t)
                                }, e.setBkgData = function(t) {
                                    this.writeScreen.setBkgData(t)
                                }, e.setMode = function(t) {
                                    t !== this.mode && (this.mode = t, this.logger.log(n.INFO, "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
                                }, e.insertChars = function(t) {
                                    for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
                                    var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                                    this.logger.log(n.INFO, r + ": " + this.writeScreen.getDisplayText(!0)), ("MODE_PAINT-ON" === this.mode || "MODE_ROLL-UP" === this.mode) && (this.logger.log(n.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                                }, e.ccRCL = function() {
                                    this.logger.log(n.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                                }, e.ccBS = function() {
                                    this.logger.log(n.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                                }, e.ccAOF = function() {}, e.ccAON = function() {}, e.ccDER = function() {
                                    this.logger.log(n.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                                }, e.ccRU = function(t) {
                                    this.logger.log(n.INFO, "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
                                }, e.ccFON = function() {
                                    this.logger.log(n.INFO, "FON - Flash On"), this.writeScreen.setPen({
                                        flash: !0
                                    })
                                }, e.ccRDC = function() {
                                    this.logger.log(n.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                                }, e.ccTR = function() {
                                    this.logger.log(n.INFO, "TR"), this.setMode("MODE_TEXT")
                                }, e.ccRTD = function() {
                                    this.logger.log(n.INFO, "RTD"), this.setMode("MODE_TEXT")
                                }, e.ccEDM = function() {
                                    this.logger.log(n.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                                }, e.ccCR = function() {
                                    this.logger.log(n.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                                }, e.ccENM = function() {
                                    this.logger.log(n.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                                }, e.ccEOC = function() {
                                    if (this.logger.log(n.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                                        var t = this.displayedMemory;
                                        this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, this.logger.log(n.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
                                    }
                                    this.outputDataUpdate(!0)
                                }, e.ccTO = function(t) {
                                    this.logger.log(n.INFO, "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
                                }, e.ccMIDROW = function(t) {
                                    var e = {
                                        flash: !1
                                    };
                                    e.underline = t % 2 == 1, e.italics = t >= 46, e.italics ? e.foreground = "white" : e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][Math.floor(t / 2) - 16], this.logger.log(n.INFO, "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
                                }, e.outputDataUpdate = function(t) {
                                    void 0 === t && (t = !1);
                                    var e = this.logger.time;
                                    null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
                                }, e.cueSplitAtTime = function(t) {
                                    this.outputFilter && !this.displayedMemory.isEmpty() && (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t)
                                }, t
                            }(),
                            T = function() {
                                function t(t, e, r) {
                                    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
                                    var i = new f;
                                    this.channels = [null, new E(t, e, i), new E(t + 1, r, i)], this.cmdHistory = L(), this.logger = i
                                }
                                var e = t.prototype;
                                return e.getHandler = function(t) {
                                    return this.channels[t].getHandler()
                                }, e.setHandler = function(t, e) {
                                    this.channels[t].setHandler(e)
                                }, e.addData = function(t, e) {
                                    var r, i, s, a = !1;
                                    this.logger.time = t;
                                    for (var o = 0; o < e.length; o += 2)
                                        if (i = 127 & e[o], s = 127 & e[o + 1], 0 !== i || 0 !== s) {
                                            if (this.logger.log(n.DATA, "[" + g([e[o], e[o + 1]]) + "] -> (" + g([i, s]) + ")"), (r = this.parseCmd(i, s)) || (r = this.parseMidrow(i, s)), r || (r = this.parsePAC(i, s)), r || (r = this.parseBackgroundAttributes(i, s)), !r && (a = this.parseChars(i, s))) {
                                                var l = this.currentChannel;
                                                l && l > 0 ? this.channels[l].insertChars(a) : this.logger.log(n.WARNING, "No channel found yet. TEXT-MODE?")
                                            }
                                            r || a || this.logger.log(n.WARNING, "Couldn't parse cleaned data " + g([i, s]) + " orig: " + g([e[o], e[o + 1]]))
                                        }
                                }, e.parseCmd = function(t, e) {
                                    var r = this.cmdHistory,
                                        i = (20 === t || 28 === t || 21 === t || 29 === t) && e >= 32 && e <= 47,
                                        s = (23 === t || 31 === t) && e >= 33 && e <= 35;
                                    if (!(i || s)) return !1;
                                    if (b(t, e, r)) return S(null, null, r), this.logger.log(n.DEBUG, "Repeated command (" + g([t, e]) + ") is dropped"), !0;
                                    var a = 20 === t || 21 === t || 23 === t ? 1 : 2,
                                        o = this.channels[a];
                                    return 20 === t || 21 === t || 28 === t || 29 === t ? 32 === e ? o.ccRCL() : 33 === e ? o.ccBS() : 34 === e ? o.ccAOF() : 35 === e ? o.ccAON() : 36 === e ? o.ccDER() : 37 === e ? o.ccRU(2) : 38 === e ? o.ccRU(3) : 39 === e ? o.ccRU(4) : 40 === e ? o.ccFON() : 41 === e ? o.ccRDC() : 42 === e ? o.ccTR() : 43 === e ? o.ccRTD() : 44 === e ? o.ccEDM() : 45 === e ? o.ccCR() : 46 === e ? o.ccENM() : 47 === e && o.ccEOC() : o.ccTO(e - 32), S(t, e, r), this.currentChannel = a, !0
                                }, e.parseMidrow = function(t, e) {
                                    var r = 0;
                                    if ((17 === t || 25 === t) && e >= 32 && e <= 47) {
                                        if ((r = 17 === t ? 1 : 2) !== this.currentChannel) return this.logger.log(n.ERROR, "Mismatch channel in midrow parsing"), !1;
                                        var i = this.channels[r];
                                        return !!i && (i.ccMIDROW(e), this.logger.log(n.DEBUG, "MIDROW (" + g([t, e]) + ")"), !0)
                                    }
                                    return !1
                                }, e.parsePAC = function(t, e) {
                                    var r, i = this.cmdHistory,
                                        n = (t >= 17 && t <= 23 || t >= 25 && t <= 31) && e >= 64 && e <= 127,
                                        s = (16 === t || 24 === t) && e >= 64 && e <= 95;
                                    if (!(n || s)) return !1;
                                    if (b(t, e, i)) return S(null, null, i), !0;
                                    var a = t <= 23 ? 1 : 2;
                                    r = e >= 64 && e <= 95 ? 1 === a ? l[t] : c[t] : 1 === a ? u[t] : d[t];
                                    var o = this.channels[a];
                                    return !!o && (o.setPAC(this.interpretPAC(r, e)), S(t, e, i), this.currentChannel = a, !0)
                                }, e.interpretPAC = function(t, e) {
                                    var r, i = {
                                        color: null,
                                        italics: !1,
                                        indent: null,
                                        underline: !1,
                                        row: t
                                    };
                                    return r = e > 95 ? e - 96 : e - 64, i.underline = (1 & r) == 1, r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2), i
                                }, e.parseChars = function(t, e) {
                                    var r, i, s = null,
                                        a = null;
                                    if (t >= 25 ? (r = 2, a = t - 8) : (r = 1, a = t), a >= 17 && a <= 19 ? (i = 17 === a ? e + 80 : 18 === a ? e + 112 : e + 144, this.logger.log(n.INFO, "Special char '" + o(i) + "' in channel " + r), s = [i]) : t >= 32 && t <= 127 && (s = 0 === e ? [t] : [t, e]), s) {
                                        var l = g(s);
                                        this.logger.log(n.DEBUG, "Char codes =  " + l.join(",")), S(t, e, this.cmdHistory)
                                    }
                                    return s
                                }, e.parseBackgroundAttributes = function(t, e) {
                                    var r, i = (16 === t || 24 === t) && e >= 32 && e <= 47,
                                        n = (23 === t || 31 === t) && e >= 45 && e <= 47;
                                    if (!(i || n)) return !1;
                                    var s = {};
                                    16 === t || 24 === t ? (r = Math.floor((e - 32) / 2), s.background = h[r], e % 2 == 1 && (s.background = s.background + "_semi")) : 45 === e ? s.background = "transparent" : (s.foreground = "black", 47 === e && (s.underline = !0));
                                    var a = t <= 23 ? 1 : 2;
                                    return this.channels[a].setBkgData(s), S(t, e, this.cmdHistory), !0
                                }, e.reset = function() {
                                    for (var t = 0; t < Object.keys(this.channels).length; t++) {
                                        var e = this.channels[t];
                                        e && e.reset()
                                    }
                                    this.cmdHistory = L()
                                }, e.cueSplitAtTime = function(t) {
                                    for (var e = 0; e < this.channels.length; e++) {
                                        var r = this.channels[e];
                                        r && r.cueSplitAtTime(t)
                                    }
                                }, t
                            }();

                        function S(t, e, r) {
                            r.a = t, r.b = e
                        }

                        function b(t, e, r) {
                            return r.a === t && r.b === e
                        }

                        function L() {
                            return {
                                a: null,
                                b: null
                            }
                        }
                        e.default = T
                    },
                    "./src/utils/codecs.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "isCodecType", function() {
                            return n
                        }), r.d(e, "isCodecSupportedInMp4", function() {
                            return s
                        });
                        var i = {
                            audio: {
                                a3ds: !0,
                                "ac-3": !0,
                                "ac-4": !0,
                                alac: !0,
                                alaw: !0,
                                dra1: !0,
                                "dts+": !0,
                                "dts-": !0,
                                dtsc: !0,
                                dtse: !0,
                                dtsh: !0,
                                "ec-3": !0,
                                enca: !0,
                                g719: !0,
                                g726: !0,
                                m4ae: !0,
                                mha1: !0,
                                mha2: !0,
                                mhm1: !0,
                                mhm2: !0,
                                mlpa: !0,
                                mp4a: !0,
                                "raw ": !0,
                                Opus: !0,
                                samr: !0,
                                sawb: !0,
                                sawp: !0,
                                sevc: !0,
                                sqcp: !0,
                                ssmv: !0,
                                twos: !0,
                                ulaw: !0
                            },
                            video: {
                                avc1: !0,
                                avc2: !0,
                                avc3: !0,
                                avc4: !0,
                                avcp: !0,
                                av01: !0,
                                drac: !0,
                                dvav: !0,
                                dvhe: !0,
                                encv: !0,
                                hev1: !0,
                                hvc1: !0,
                                mjp2: !0,
                                mp4v: !0,
                                mvc1: !0,
                                mvc2: !0,
                                mvc3: !0,
                                mvc4: !0,
                                resv: !0,
                                rv60: !0,
                                s263: !0,
                                svc1: !0,
                                svc2: !0,
                                "vc-1": !0,
                                vp08: !0,
                                vp09: !0
                            },
                            text: {
                                stpp: !0,
                                wvtt: !0
                            }
                        };

                        function n(t, e) {
                            var r = i[e];
                            return !!r && !0 === r[t.slice(0, 4)]
                        }

                        function s(t, e) {
                            return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
                        }
                    },
                    "./src/utils/cues.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/utils/vttparser.ts"),
                            n = r("./src/utils/webvtt-parser.ts"),
                            s = r("./src/utils/texttrack-utils.ts"),
                            a = /\s/;
                        e.default = {
                            newCue: function(t, e, r, o) {
                                for (var l, u, c, d, h, f = [], g = self.VTTCue || self.TextTrackCue, v = 0; v < o.rows.length; v++)
                                    if (l = o.rows[v], c = !0, d = 0, h = "", !l.isEmpty()) {
                                        for (var p = 0; p < l.chars.length; p++) a.test(l.chars[p].uchar) && c ? d++ : (h += l.chars[p].uchar, c = !1);
                                        l.cueStartTime = e, e === r && (r += 1e-4), d >= 16 ? d-- : d++;
                                        var m = Object(i.fixLineBreaks)(h.trim()),
                                            y = Object(n.generateCueId)(e, r, m);
                                        t && t.cues && t.cues.getCueById(y) || ((u = new g(e, r, m)).id = y, u.line = v + 1, u.align = "left", u.position = 10 + Math.min(80, 10 * Math.floor(8 * d / 32)), f.push(u))
                                    }
                                return t && f.length && (f.sort(function(t, e) {
                                    return "auto" === t.line || "auto" === e.line ? 0 : t.line > 8 && e.line > 8 ? e.line - t.line : t.line - e.line
                                }), f.forEach(function(e) {
                                    return Object(s.addCueToTrack)(t, e)
                                })), f
                            }
                        }
                    },
                    "./src/utils/discontinuities.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "findFirstFragWithCC", function() {
                            return a
                        }), r.d(e, "shouldAlignOnDiscontinuities", function() {
                            return o
                        }), r.d(e, "findDiscontinuousReferenceFrag", function() {
                            return l
                        }), r.d(e, "adjustSlidingStart", function() {
                            return c
                        }), r.d(e, "alignStream", function() {
                            return d
                        }), r.d(e, "alignPDT", function() {
                            return h
                        }), r.d(e, "alignFragmentByPDTDelta", function() {
                            return f
                        }), r.d(e, "alignMediaPlaylistByPDT", function() {
                            return g
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/utils/logger.ts"),
                            s = r("./src/controller/level-helper.ts");

                        function a(t, e) {
                            for (var r = null, i = 0, n = t.length; i < n; i++) {
                                var s = t[i];
                                if (s && s.cc === e) {
                                    r = s;
                                    break
                                }
                            }
                            return r
                        }

                        function o(t, e, r) {
                            return !!e.details && (r.endCC > r.startCC || !!t && t.cc < r.startCC)
                        }

                        function l(t, e) {
                            var r = t.fragments,
                                i = e.fragments;
                            if (!i.length || !r.length) {
                                n.logger.log("No fragments to align");
                                return
                            }
                            var s = a(r, i[0].cc);
                            if (!s || s && !s.startPTS) {
                                n.logger.log("No frag in previous level to align on");
                                return
                            }
                            return s
                        }

                        function u(t, e) {
                            if (t) {
                                var r = t.start + e;
                                t.start = t.startPTS = r, t.endPTS = r + t.duration
                            }
                        }

                        function c(t, e) {
                            for (var r = e.fragments, i = 0, n = r.length; i < n; i++) u(r[i], t);
                            e.fragmentHint && u(e.fragmentHint, t), e.alignedSliding = !0
                        }

                        function d(t, e, r) {
                            e && (function(t, e, r) {
                                if (o(t, r, e)) {
                                    var s = l(r.details, e);
                                    s && Object(i.isFiniteNumber)(s.start) && (n.logger.log("Adjusting PTS using last level due to CC increase within current level " + e.url), c(s.start, e))
                                }
                            }(t, r, e), !r.alignedSliding && e.details && h(r, e.details), r.alignedSliding || !e.details || r.skippedSegments || Object(s.adjustSliding)(e.details, r))
                        }

                        function h(t, e) {
                            if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                                var r = e.fragments[0].programDateTime,
                                    s = t.fragments[0].programDateTime,
                                    a = (s - r) / 1e3 + e.fragments[0].start;
                                a && Object(i.isFiniteNumber)(a) && (n.logger.log("Adjusting PTS using programDateTime delta " + (s - r) + "ms, sliding:" + a.toFixed(3) + " " + t.url + " "), c(a, t))
                            }
                        }

                        function f(t, e) {
                            var r = t.programDateTime;
                            if (r) {
                                var i = (r - e) / 1e3;
                                t.start = t.startPTS = i, t.endPTS = i + t.duration
                            }
                        }

                        function g(t, e) {
                            if (e.fragments.length && t.hasProgramDateTime && e.hasProgramDateTime) {
                                var r = e.fragments[0].programDateTime - 1e3 * e.fragments[0].start;
                                t.fragments.forEach(function(t) {
                                    f(t, r)
                                }), t.fragmentHint && f(t.fragmentHint, r), t.alignedSliding = !0
                            }
                        }
                    },
                    "./src/utils/ewma-bandwidth-estimator.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/utils/ewma.ts"),
                            n = function() {
                                function t(t, e, r) {
                                    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new i.default(t), this.fast_ = new i.default(e)
                                }
                                var e = t.prototype;
                                return e.update = function(t, e) {
                                    var r = this.slow_,
                                        n = this.fast_;
                                    this.slow_.halfLife !== t && (this.slow_ = new i.default(t, r.getEstimate(), r.getTotalWeight())), this.fast_.halfLife !== e && (this.fast_ = new i.default(e, n.getEstimate(), n.getTotalWeight()))
                                }, e.sample = function(t, e) {
                                    var r = (t = Math.max(t, this.minDelayMs_)) / 1e3,
                                        i = 8 * e / r;
                                    this.fast_.sample(r, i), this.slow_.sample(r, i)
                                }, e.canEstimate = function() {
                                    var t = this.fast_;
                                    return t && t.getTotalWeight() >= this.minWeight_
                                }, e.getEstimate = function() {
                                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                                }, e.destroy = function() {}, t
                            }();
                        e.default = n
                    },
                    "./src/utils/ewma.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = function() {
                            function t(t, e, r) {
                                void 0 === e && (e = 0), void 0 === r && (r = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = t, this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = e, this.totalWeight_ = r
                            }
                            var e = t.prototype;
                            return e.sample = function(t, e) {
                                var r = Math.pow(this.alpha_, t);
                                this.estimate_ = e * (1 - r) + r * this.estimate_, this.totalWeight_ += t
                            }, e.getTotalWeight = function() {
                                return this.totalWeight_
                            }, e.getEstimate = function() {
                                if (this.alpha_) {
                                    var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
                                    if (t) return this.estimate_ / t
                                }
                                return this.estimate_
                            }, t
                        }();
                        e.default = i
                    },
                    "./src/utils/fetch-loader.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "fetchSupported", function() {
                            return d
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/loader/load-stats.ts"),
                            s = r("./src/demux/chunk-cache.ts");

                        function a(t) {
                            var e = "function" == typeof Map ? new Map : void 0;
                            return (a = function(t) {
                                if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
                                if ("function" != typeof t) throw TypeError("Super expression must either be null or a function");
                                if (void 0 !== e) {
                                    if (e.has(t)) return e.get(t);
                                    e.set(t, r)
                                }

                                function r() {
                                    return o(t, arguments, u(this).constructor)
                                }
                                return r.prototype = Object.create(t.prototype, {
                                    constructor: {
                                        value: r,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), l(r, t)
                            })(t)
                        }

                        function o(t, e, r) {
                            return (o = ! function() {
                                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                } catch (t) {
                                    return !1
                                }
                            }() ? function(t, e, r) {
                                var i = [null];
                                i.push.apply(i, e);
                                var n = new(Function.bind.apply(t, i));
                                return r && l(n, r.prototype), n
                            } : Reflect.construct).apply(null, arguments)
                        }

                        function l(t, e) {
                            return (l = Object.setPrototypeOf || function(t, e) {
                                return t.__proto__ = e, t
                            })(t, e)
                        }

                        function u(t) {
                            return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                return t.__proto__ || Object.getPrototypeOf(t)
                            })(t)
                        }

                        function c() {
                            return (c = Object.assign || function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                }
                                return t
                            }).apply(this, arguments)
                        }

                        function d() {
                            if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
                                return new self.ReadableStream({}), !0
                            } catch (t) {}
                            return !1
                        }
                        var h = function() {
                            function t(t) {
                                this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = t.fetchSetup || f, this.controller = new self.AbortController, this.stats = new n.LoadStats
                            }
                            var e = t.prototype;
                            return e.destroy = function() {
                                this.loader = this.callbacks = null, this.abortInternal()
                            }, e.abortInternal = function() {
                                var t = this.response;
                                t && t.ok || (this.stats.aborted = !0, this.controller.abort())
                            }, e.abort = function() {
                                var t;
                                this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
                            }, e.load = function(t, e, r) {
                                var n, s = this,
                                    a = this.stats;
                                if (a.loading.start) throw Error("Loader can only be used once.");
                                a.loading.start = self.performance.now();
                                var o = (n = {
                                        method: "GET",
                                        mode: "cors",
                                        credentials: "same-origin",
                                        signal: this.controller.signal,
                                        headers: new self.Headers(c({}, t.headers))
                                    }, t.rangeEnd && n.headers.set("Range", "bytes=" + t.rangeStart + "-" + String(t.rangeEnd - 1)), n),
                                    l = r.onProgress,
                                    u = "arraybuffer" === t.responseType,
                                    d = u ? "byteLength" : "length";
                                this.context = t, this.config = e, this.callbacks = r, this.request = this.fetchSetup(t, o), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(function() {
                                    s.abortInternal(), r.onTimeout(a, t, s.response)
                                }, e.timeout), self.fetch(this.request).then(function(r) {
                                    if (s.response = s.loader = r, !r.ok) {
                                        var n = r.status;
                                        throw new g(r.statusText || "fetch, bad network response", n, r)
                                    }
                                    return (a.loading.first = Math.max(self.performance.now(), a.loading.start), a.total = parseInt(r.headers.get("Content-Length") || "0"), l && Object(i.isFiniteNumber)(e.highWaterMark)) ? s.loadProgressively(r, a, t, e.highWaterMark, l) : u ? r.arrayBuffer() : r.text()
                                }).then(function(n) {
                                    var o = s.response;
                                    self.clearTimeout(s.requestTimeout), a.loading.end = Math.max(self.performance.now(), a.loading.first), a.loaded = a.total = n[d];
                                    var u = {
                                        url: o.url,
                                        data: n
                                    };
                                    l && !Object(i.isFiniteNumber)(e.highWaterMark) && l(a, t, n, o), r.onSuccess(u, a, t, o)
                                }).catch(function(e) {
                                    if (self.clearTimeout(s.requestTimeout), !a.aborted) {
                                        var i = e.code || 0;
                                        r.onError({
                                            code: i,
                                            text: e.message
                                        }, t, e.details)
                                    }
                                })
                            }, e.getCacheAge = function() {
                                var t = null;
                                if (this.response) {
                                    var e = this.response.headers.get("age");
                                    t = e ? parseFloat(e) : null
                                }
                                return t
                            }, e.loadProgressively = function(t, e, r, i, n) {
                                void 0 === i && (i = 0);
                                var a = new s.default,
                                    o = t.body.getReader();
                                return function s() {
                                    return o.read().then(function(o) {
                                        if (o.done) return a.dataLength && n(e, r, a.flush(), t), Promise.resolve(new ArrayBuffer(0));
                                        var l = o.value,
                                            u = l.length;
                                        return e.loaded += u, u < i || a.dataLength ? (a.push(l), a.dataLength >= i && n(e, r, a.flush(), t)) : n(e, r, l, t), s()
                                    }).catch(function() {
                                        return Promise.reject()
                                    })
                                }()
                            }, t
                        }();

                        function f(t, e) {
                            return new self.Request(t.url, e)
                        }
                        var g = function(t) {
                            function e(e, r, i) {
                                var n;
                                return (n = t.call(this, e) || this).code = void 0, n.details = void 0, n.code = r, n.details = i, n
                            }
                            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, l(e, t), e
                        }(a(Error));
                        e.default = h
                    },
                    "./src/utils/imsc1-ttml-parser.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "IMSC1_CODEC", function() {
                            return c
                        }), r.d(e, "parseIMSC1", function() {
                            return g
                        });
                        var i = r("./src/utils/mp4-tools.ts"),
                            n = r("./src/utils/vttparser.ts"),
                            s = r("./src/utils/vttcue.ts"),
                            a = r("./src/demux/id3.ts"),
                            o = r("./src/utils/timescale-conversion.ts"),
                            l = r("./src/utils/webvtt-parser.ts");

                        function u() {
                            return (u = Object.assign || function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = arguments[e];
                                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                                }
                                return t
                            }).apply(this, arguments)
                        }
                        var c = "stpp.ttml.im1t",
                            d = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
                            h = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
                            f = {
                                left: "start",
                                center: "center",
                                right: "end",
                                start: "start",
                                end: "end"
                            };

                        function g(t, e, r, n, c) {
                            var d = Object(i.findBox)(new Uint8Array(t), ["mdat"]);
                            if (0 === d.length) {
                                c(Error("Could not parse IMSC1 mdat"));
                                return
                            }
                            var h = d[0],
                                g = Object(a.utf8ArrayToStr)(new Uint8Array(t, h.start, h.end - h.start)),
                                T = Object(o.toTimescaleFromScale)(e, 1, r);
                            try {
                                n(function(t, e) {
                                    var r = new DOMParser().parseFromString(t, "text/xml").getElementsByTagName("tt")[0];
                                    if (!r) throw Error("Invalid ttml");
                                    var i = {
                                            frameRate: 30,
                                            subFrameRate: 1,
                                            frameRateMultiplier: 0,
                                            tickRate: 0
                                        },
                                        n = Object.keys(i).reduce(function(t, e) {
                                            return t[e] = r.getAttribute("ttp:" + e) || i[e], t
                                        }, {}),
                                        a = "preserve" !== r.getAttribute("xml:space"),
                                        o = p(v(r, "styling", "style")),
                                        c = p(v(r, "layout", "region")),
                                        d = v(r, "body", "[begin]");
                                    return [].map.call(d, function(t) {
                                        var r, i = function t(e, r) {
                                            return [].slice.call(e.childNodes).reduce(function(e, i, n) {
                                                var s;
                                                return "br" === i.nodeName && n ? e + "\n" : null !== (s = i.childNodes) && void 0 !== s && s.length ? t(i, r) : r ? e + i.textContent.trim().replace(/\s+/g, " ") : e + i.textContent
                                            }, "")
                                        }(t, a);
                                        if (!i || !t.hasAttribute("begin")) return null;
                                        var d = E(t.getAttribute("begin"), n),
                                            h = E(t.getAttribute("dur"), n),
                                            g = E(t.getAttribute("end"), n);
                                        if (null === d) throw y(t);
                                        if (null === g) {
                                            if (null === h) throw y(t);
                                            g = d + h
                                        }
                                        var v = new s.default(d - e, g - e, i);
                                        v.id = Object(l.generateCueId)(v.startTime, v.endTime, v.text);
                                        var p = c[t.getAttribute("region")],
                                            T = o[t.getAttribute("style")];
                                        v.position = 10, v.size = 80;
                                        var S = (r = "http://www.w3.org/ns/ttml#styling", ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce(function(t, e) {
                                                var i = m(T, r, e) || m(p, r, e);
                                                return i && (t[e] = i), t
                                            }, {})),
                                            b = S.textAlign;
                                        if (b) {
                                            var L = f[b];
                                            L && (v.lineAlign = L), v.align = b
                                        }
                                        return u(v, S), v
                                    }).filter(function(t) {
                                        return null !== t
                                    })
                                }(g, T))
                            } catch (t) {
                                c(t)
                            }
                        }

                        function v(t, e, r) {
                            var i = t.getElementsByTagName(e)[0];
                            return i ? [].slice.call(i.querySelectorAll(r)) : []
                        }

                        function p(t) {
                            return t.reduce(function(t, e) {
                                var r = e.getAttribute("xml:id");
                                return r && (t[r] = e), t
                            }, {})
                        }

                        function m(t, e, r) {
                            return t.hasAttributeNS(e, r) ? t.getAttributeNS(e, r) : null
                        }

                        function y(t) {
                            return Error("Could not parse ttml timestamp " + t)
                        }

                        function E(t, e) {
                            if (!t) return null;
                            var r, i, s = Object(n.parseTimeStamp)(t);
                            return null === s && (d.test(t) ? (i = (0 | (r = d.exec(t))[4]) + (0 | r[5]) / e.subFrameRate, s = (0 | r[1]) * 3600 + (0 | r[2]) * 60 + (0 | r[3]) + i / e.frameRate) : h.test(t) && (s = function(t, e) {
                                var r = h.exec(t),
                                    i = Number(r[1]);
                                switch (r[2]) {
                                    case "h":
                                        return 3600 * i;
                                    case "m":
                                        return 60 * i;
                                    case "ms":
                                        return 1e3 * i;
                                    case "f":
                                        return i / e.frameRate;
                                    case "t":
                                        return i / e.tickRate
                                }
                                return i
                            }(t, e))), s
                        }
                    },
                    "./src/utils/logger.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "enableLogs", function() {
                            return a
                        }), r.d(e, "logger", function() {
                            return o
                        });
                        var i = function() {},
                            n = {
                                trace: i,
                                debug: i,
                                log: i,
                                warn: i,
                                info: i,
                                error: i
                            },
                            s = n;

                        function a(t) {
                            if (self.console && !0 === t || "object" == typeof t) {
                                ! function(t) {
                                    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                                    r.forEach(function(e) {
                                        var r;
                                        s[e] = t[e] ? t[e].bind(t) : (r = self.console[e]) ? r.bind(self.console, "[" + e + "] >") : i
                                    })
                                }(t, "debug", "log", "info", "warn", "error");
                                try {
                                    s.log()
                                } catch (t) {
                                    s = n
                                }
                            } else s = n
                        }
                        var o = s
                    },
                    "./src/utils/mediakeys-helper.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "KeySystems", function() {
                            return n
                        }), r.d(e, "requestMediaKeySystemAccess", function() {
                            return s
                        }), (i = n || (n = {})).WIDEVINE = "com.widevine.alpha", i.PLAYREADY = "com.microsoft.playready";
                        var i, n, s = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null
                    },
                    "./src/utils/mediasource-helper.ts": function(t, e, r) {
                        "use strict";

                        function i() {
                            return self.MediaSource || self.WebKitMediaSource
                        }
                        r.r(e), r.d(e, "getMediaSource", function() {
                            return i
                        })
                    },
                    "./src/utils/mp4-tools.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "bin2str", function() {
                            return a
                        }), r.d(e, "readUint16", function() {
                            return o
                        }), r.d(e, "readUint32", function() {
                            return l
                        }), r.d(e, "writeUint32", function() {
                            return u
                        }), r.d(e, "findBox", function() {
                            return c
                        }), r.d(e, "parseSegmentIndex", function() {
                            return d
                        }), r.d(e, "parseInitSegment", function() {
                            return h
                        }), r.d(e, "getStartDTS", function() {
                            return f
                        }), r.d(e, "getDuration", function() {
                            return g
                        }), r.d(e, "computeRawDurationFromSamples", function() {
                            return v
                        }), r.d(e, "offsetStartDTS", function() {
                            return p
                        }), r.d(e, "segmentValidRange", function() {
                            return m
                        }), r.d(e, "appendUint8Array", function() {
                            return y
                        });
                        var i = r("./src/utils/typed-array.ts"),
                            n = r("./src/loader/fragment.ts"),
                            s = [].push;

                        function a(t) {
                            return String.fromCharCode.apply(null, t)
                        }

                        function o(t, e) {
                            "data" in t && (e += t.start, t = t.data);
                            var r = t[e] << 8 | t[e + 1];
                            return r < 0 ? 65536 + r : r
                        }

                        function l(t, e) {
                            "data" in t && (e += t.start, t = t.data);
                            var r = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
                            return r < 0 ? 4294967296 + r : r
                        }

                        function u(t, e, r) {
                            "data" in t && (e += t.start, t = t.data), t[e] = r >> 24, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = 255 & r
                        }

                        function c(t, e) {
                            var r, i, n, o = [];
                            if (!e.length) return o;
                            "data" in t ? (r = t.data, i = t.start, n = t.end) : (i = 0, n = (r = t).byteLength);
                            for (var u = i; u < n;) {
                                var d = l(r, u),
                                    h = a(r.subarray(u + 4, u + 8)),
                                    f = d > 1 ? u + d : n;
                                if (h === e[0]) {
                                    if (1 === e.length) o.push({
                                        data: r,
                                        start: u + 8,
                                        end: f
                                    });
                                    else {
                                        var g = c({
                                            data: r,
                                            start: u + 8,
                                            end: f
                                        }, e.slice(1));
                                        g.length && s.apply(o, g)
                                    }
                                }
                                u = f
                            }
                            return o
                        }

                        function d(t) {
                            var e = c(t, ["moov"])[0],
                                r = e ? e.end : null,
                                i = c(t, ["sidx"]);
                            if (!i || !i[0]) return null;
                            var n = [],
                                s = i[0],
                                a = s.data[0],
                                u = 0 === a ? 8 : 16,
                                d = l(s, u);
                            u += 4, 0 === a ? u += 8 : u += 16, u += 2;
                            var h = s.end + 0,
                                f = o(s, u);
                            u += 2;
                            for (var g = 0; g < f; g++) {
                                var v = u,
                                    p = l(s, v);
                                v += 4;
                                var m = 2147483647 & p;
                                if (1 == (2147483648 & p) >>> 31) return console.warn("SIDX has hierarchical references (not supported)"), null;
                                var y = l(s, v);
                                v += 4, n.push({
                                    referenceSize: m,
                                    subsegmentDuration: y,
                                    info: {
                                        duration: y / d,
                                        start: h,
                                        end: h + m - 1
                                    }
                                }), h += m, v += 4, u = v
                            }
                            return {
                                earliestPresentationTime: 0,
                                timescale: d,
                                version: a,
                                referencesCount: f,
                                references: n,
                                moovEndOffset: r
                            }
                        }

                        function h(t) {
                            for (var e = [], r = c(t, ["moov", "trak"]), i = 0; i < r.length; i++) {
                                var s = r[i],
                                    o = c(s, ["tkhd"])[0];
                                if (o) {
                                    var u = o.data[o.start],
                                        d = 0 === u ? 12 : 20,
                                        h = l(o, d),
                                        f = c(s, ["mdia", "mdhd"])[0];
                                    if (f) {
                                        d = 0 === (u = f.data[f.start]) ? 12 : 20;
                                        var g = l(f, d),
                                            v = c(s, ["mdia", "hdlr"])[0];
                                        if (v) {
                                            var p = a(v.data.subarray(v.start + 8, v.start + 12)),
                                                m = {
                                                    soun: n.ElementaryStreamTypes.AUDIO,
                                                    vide: n.ElementaryStreamTypes.VIDEO
                                                }[p];
                                            if (m) {
                                                var y = c(s, ["mdia", "minf", "stbl", "stsd"])[0],
                                                    E = void 0;
                                                y && (E = a(y.data.subarray(y.start + 12, y.start + 16))), e[h] = {
                                                    timescale: g,
                                                    type: m
                                                }, e[m] = {
                                                    timescale: g,
                                                    id: h,
                                                    codec: E
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            return c(t, ["moov", "mvex", "trex"]).forEach(function(t) {
                                var r = e[l(t, 4)];
                                r && (r.default = {
                                    duration: l(t, 12),
                                    flags: l(t, 20)
                                })
                            }), e
                        }

                        function f(t, e) {
                            return c(e, ["moof", "traf"]).reduce(function(e, r) {
                                var i = c(r, ["tfdt"])[0],
                                    n = i.data[i.start],
                                    s = c(r, ["tfhd"]).reduce(function(e, r) {
                                        var s = t[l(r, 4)];
                                        if (s) {
                                            var a = l(i, 4);
                                            1 === n && (a *= 4294967296, a += l(i, 8));
                                            var o = a / (s.timescale || 9e4);
                                            if (isFinite(o) && (null === e || o < e)) return o
                                        }
                                        return e
                                    }, null);
                                return null !== s && isFinite(s) && (null === e || s < e) ? s : e
                            }, null) || 0
                        }

                        function g(t, e) {
                            for (var r = 0, i = 0, s = 0, a = c(t, ["moof", "traf"]), o = 0; o < a.length; o++) {
                                var u = a[o],
                                    h = c(u, ["tfhd"])[0],
                                    f = e[l(h, 4)];
                                if (f) {
                                    var g = f.default,
                                        p = l(h, 0) | (null == g ? void 0 : g.flags),
                                        m = null == g ? void 0 : g.duration;
                                    8 & p && (m = 2 & p ? l(h, 12) : l(h, 8));
                                    for (var y = f.timescale || 9e4, E = c(u, ["trun"]), T = 0; T < E.length; T++)(r = v(E[T])) || !m || (r = m * l(E[T], 4)), f.type === n.ElementaryStreamTypes.VIDEO ? i += r / y : f.type === n.ElementaryStreamTypes.AUDIO && (s += r / y)
                                }
                            }
                            if (0 === i && 0 === s) {
                                var S = d(t);
                                if (null != S && S.references) return S.references.reduce(function(t, e) {
                                    return t + e.info.duration || 0
                                }, 0)
                            }
                            return i || s
                        }

                        function v(t) {
                            var e = l(t, 0),
                                r = 8;
                            1 & e && (r += 4), 4 & e && (r += 4);
                            for (var i = 0, n = l(t, 4), s = 0; s < n; s++) 256 & e && (i += l(t, r), r += 4), 512 & e && (r += 4), 1024 & e && (r += 4), 2048 & e && (r += 4);
                            return i
                        }

                        function p(t, e, r) {
                            c(e, ["moof", "traf"]).forEach(function(e) {
                                c(e, ["tfhd"]).forEach(function(i) {
                                    var n = t[l(i, 4)];
                                    if (n) {
                                        var s = n.timescale || 9e4;
                                        c(e, ["tfdt"]).forEach(function(t) {
                                            var e = t.data[t.start],
                                                i = l(t, 4);
                                            if (0 === e) u(t, 4, i - r * s);
                                            else {
                                                i *= 4294967296, i += l(t, 8), i -= r * s;
                                                var n = Math.floor((i = Math.max(i, 0)) / 4294967296),
                                                    a = Math.floor(i % 4294967296);
                                                u(t, 4, n), u(t, 8, a)
                                            }
                                        })
                                    }
                                })
                            })
                        }

                        function m(t) {
                            var e = {
                                    valid: null,
                                    remainder: null
                                },
                                r = c(t, ["moof"]);
                            if (!r) return e;
                            if (r.length < 2) return e.remainder = t, e;
                            var n = r[r.length - 1];
                            return e.valid = Object(i.sliceUint8)(t, 0, n.start - 8), e.remainder = Object(i.sliceUint8)(t, n.start - 8), e
                        }

                        function y(t, e) {
                            var r = new Uint8Array(t.length + e.length);
                            return r.set(t), r.set(e, t.length), r
                        }
                    },
                    "./src/utils/output-filter.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "default", function() {
                            return i
                        });
                        var i = function() {
                            function t(t, e) {
                                this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = t, this.trackName = e
                            }
                            var e = t.prototype;
                            return e.dispatchCue = function() {
                                null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
                            }, e.newCue = function(t, e, r) {
                                (null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
                            }, e.reset = function() {
                                this.cueRanges = [], this.startTime = null
                            }, t
                        }()
                    },
                    "./src/utils/texttrack-utils.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "sendAddTrackEvent", function() {
                            return n
                        }), r.d(e, "addCueToTrack", function() {
                            return s
                        }), r.d(e, "clearCurrentCues", function() {
                            return a
                        }), r.d(e, "removeCuesInRange", function() {
                            return o
                        }), r.d(e, "getCuesInRange", function() {
                            return l
                        });
                        var i = r("./src/utils/logger.ts");

                        function n(t, e) {
                            var r;
                            try {
                                r = new Event("addtrack")
                            } catch (t) {
                                (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
                            }
                            r.track = t, e.dispatchEvent(r)
                        }

                        function s(t, e) {
                            var r = t.mode;
                            if ("disabled" === r && (t.mode = "hidden"), t.cues && !t.cues.getCueById(e.id)) try {
                                if (t.addCue(e), !t.cues.getCueById(e.id)) throw Error("addCue is failed for: " + e)
                            } catch (r) {
                                i.logger.debug("[texttrack-utils]: " + r);
                                var n = new self.TextTrackCue(e.startTime, e.endTime, e.text);
                                n.id = e.id, t.addCue(n)
                            }
                            "disabled" === r && (t.mode = r)
                        }

                        function a(t) {
                            var e = t.mode;
                            if ("disabled" === e && (t.mode = "hidden"), t.cues)
                                for (var r = t.cues.length; r--;) t.removeCue(t.cues[r]);
                            "disabled" === e && (t.mode = e)
                        }

                        function o(t, e, r) {
                            var i = t.mode;
                            if ("disabled" === i && (t.mode = "hidden"), t.cues && t.cues.length > 0)
                                for (var n = l(t.cues, e, r), s = 0; s < n.length; s++) t.removeCue(n[s]);
                            "disabled" === i && (t.mode = i)
                        }

                        function l(t, e, r) {
                            var i = [],
                                n = function(t, e) {
                                    if (e < t[0].startTime) return 0;
                                    var r = t.length - 1;
                                    if (e > t[r].endTime) return -1;
                                    for (var i = 0, n = r; i <= n;) {
                                        var s = Math.floor((n + i) / 2);
                                        if (e < t[s].startTime) n = s - 1;
                                        else {
                                            if (!(e > t[s].startTime) || !(i < r)) return s;
                                            i = s + 1
                                        }
                                    }
                                    return t[i].startTime - e < e - t[n].startTime ? i : n
                                }(t, e);
                            if (n > -1)
                                for (var s = n, a = t.length; s < a; s++) {
                                    var o = t[s];
                                    if (o.startTime >= e && o.endTime <= r) i.push(o);
                                    else if (o.startTime > r) break
                                }
                            return i
                        }
                    },
                    "./src/utils/time-ranges.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), e.default = {
                            toString: function(t) {
                                for (var e = "", r = t.length, i = 0; i < r; i++) e += "[" + t.start(i).toFixed(3) + "," + t.end(i).toFixed(3) + "]";
                                return e
                            }
                        }
                    },
                    "./src/utils/timescale-conversion.ts": function(t, e, r) {
                        "use strict";

                        function i(t, e, r, i) {
                            void 0 === r && (r = 1), void 0 === i && (i = !1);
                            var n = t * e * r;
                            return i ? Math.round(n) : n
                        }

                        function n(t, e, r, n) {
                            return void 0 === r && (r = 1), void 0 === n && (n = !1), i(t, e, 1 / r, n)
                        }

                        function s(t, e) {
                            return void 0 === e && (e = !1), i(t, 1e3, 11111111111111112e-21, e)
                        }

                        function a(t, e) {
                            return void 0 === e && (e = 1), i(t, 9e4, 1 / e)
                        }
                        r.r(e), r.d(e, "toTimescaleFromBase", function() {
                            return i
                        }), r.d(e, "toTimescaleFromScale", function() {
                            return n
                        }), r.d(e, "toMsFromMpegTsClock", function() {
                            return s
                        }), r.d(e, "toMpegTsClockFromTimescale", function() {
                            return a
                        })
                    },
                    "./src/utils/typed-array.ts": function(t, e, r) {
                        "use strict";

                        function i(t, e, r) {
                            return Uint8Array.prototype.slice ? t.slice(e, r) : new Uint8Array(Array.prototype.slice.call(t, e, r))
                        }
                        r.r(e), r.d(e, "sliceUint8", function() {
                            return i
                        })
                    },
                    "./src/utils/vttcue.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), e.default = function() {
                            if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
                            var t = ["", "lr", "rl"],
                                e = ["start", "middle", "end", "left", "right"];

                            function r(t, e) {
                                if ("string" != typeof e || !Array.isArray(t)) return !1;
                                var r = e.toLowerCase();
                                return !!~t.indexOf(r) && r
                            }

                            function i(t) {
                                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                                for (var n = 1; n < arguments.length; n++) {
                                    var s = arguments[n];
                                    for (var a in s) t[a] = s[a]
                                }
                                return t
                            }

                            function n(n, s, a) {
                                var o = {
                                    enumerable: !0
                                };
                                this.hasBeenReset = !1;
                                var l = "",
                                    u = !1,
                                    c = n,
                                    d = s,
                                    h = a,
                                    f = null,
                                    g = "",
                                    v = !0,
                                    p = "auto",
                                    m = "start",
                                    y = 50,
                                    E = "middle",
                                    T = 50,
                                    S = "middle";
                                Object.defineProperty(this, "id", i({}, o, {
                                    get: function() {
                                        return l
                                    },
                                    set: function(t) {
                                        l = "" + t
                                    }
                                })), Object.defineProperty(this, "pauseOnExit", i({}, o, {
                                    get: function() {
                                        return u
                                    },
                                    set: function(t) {
                                        u = !!t
                                    }
                                })), Object.defineProperty(this, "startTime", i({}, o, {
                                    get: function() {
                                        return c
                                    },
                                    set: function(t) {
                                        if ("number" != typeof t) throw TypeError("Start time must be set to a number.");
                                        c = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "endTime", i({}, o, {
                                    get: function() {
                                        return d
                                    },
                                    set: function(t) {
                                        if ("number" != typeof t) throw TypeError("End time must be set to a number.");
                                        d = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "text", i({}, o, {
                                    get: function() {
                                        return h
                                    },
                                    set: function(t) {
                                        h = "" + t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "region", i({}, o, {
                                    get: function() {
                                        return f
                                    },
                                    set: function(t) {
                                        f = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "vertical", i({}, o, {
                                    get: function() {
                                        return g
                                    },
                                    set: function(e) {
                                        var i = r(t, e);
                                        if (!1 === i) throw SyntaxError("An invalid or illegal string was specified.");
                                        g = i, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "snapToLines", i({}, o, {
                                    get: function() {
                                        return v
                                    },
                                    set: function(t) {
                                        v = !!t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "line", i({}, o, {
                                    get: function() {
                                        return p
                                    },
                                    set: function(t) {
                                        if ("number" != typeof t && "auto" !== t) throw SyntaxError("An invalid number or illegal string was specified.");
                                        p = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "lineAlign", i({}, o, {
                                    get: function() {
                                        return m
                                    },
                                    set: function(t) {
                                        var i = r(e, t);
                                        if (!i) throw SyntaxError("An invalid or illegal string was specified.");
                                        m = i, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "position", i({}, o, {
                                    get: function() {
                                        return y
                                    },
                                    set: function(t) {
                                        if (t < 0 || t > 100) throw Error("Position must be between 0 and 100.");
                                        y = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "positionAlign", i({}, o, {
                                    get: function() {
                                        return E
                                    },
                                    set: function(t) {
                                        var i = r(e, t);
                                        if (!i) throw SyntaxError("An invalid or illegal string was specified.");
                                        E = i, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "size", i({}, o, {
                                    get: function() {
                                        return T
                                    },
                                    set: function(t) {
                                        if (t < 0 || t > 100) throw Error("Size must be between 0 and 100.");
                                        T = t, this.hasBeenReset = !0
                                    }
                                })), Object.defineProperty(this, "align", i({}, o, {
                                    get: function() {
                                        return S
                                    },
                                    set: function(t) {
                                        var i = r(e, t);
                                        if (!i) throw SyntaxError("An invalid or illegal string was specified.");
                                        S = i, this.hasBeenReset = !0
                                    }
                                })), this.displayState = void 0
                            }
                            return n.prototype.getCueAsHTML = function() {
                                return self.WebVTT.convertCueToDOMTree(self, this.text)
                            }, n
                        }()
                    },
                    "./src/utils/vttparser.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "parseTimeStamp", function() {
                            return s
                        }), r.d(e, "fixLineBreaks", function() {
                            return c
                        }), r.d(e, "VTTParser", function() {
                            return d
                        });
                        var i = r("./src/utils/vttcue.ts"),
                            n = function() {
                                function t() {}
                                return t.prototype.decode = function(t, e) {
                                    if (!t) return "";
                                    if ("string" != typeof t) throw Error("Error - expected string data.");
                                    return decodeURIComponent(encodeURIComponent(t))
                                }, t
                            }();

                        function s(t) {
                            function e(t, e, r, i) {
                                return (0 | t) * 3600 + (0 | e) * 60 + (0 | r) + parseFloat(i || 0)
                            }
                            var r = t.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
                            return r ? parseFloat(r[2]) > 59 ? e(r[2], r[3], 0, r[4]) : e(r[1], r[2], r[3], r[4]) : null
                        }
                        var a = function() {
                            function t() {
                                this.values = Object.create(null)
                            }
                            var e = t.prototype;
                            return e.set = function(t, e) {
                                this.get(t) || "" === e || (this.values[t] = e)
                            }, e.get = function(t, e, r) {
                                return r ? this.has(t) ? this.values[t] : e[r] : this.has(t) ? this.values[t] : e
                            }, e.has = function(t) {
                                return t in this.values
                            }, e.alt = function(t, e, r) {
                                for (var i = 0; i < r.length; ++i)
                                    if (e === r[i]) {
                                        this.set(t, e);
                                        break
                                    }
                            }, e.integer = function(t, e) {
                                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
                            }, e.percent = function(t, e) {
                                if (/^([\d]{1,3})(\.[\d]*)?%$/.test(e)) {
                                    var r = parseFloat(e);
                                    if (r >= 0 && r <= 100) return this.set(t, r), !0
                                }
                                return !1
                            }, t
                        }();

                        function o(t, e, r, i) {
                            var n = i ? t.split(i) : [t];
                            for (var s in n)
                                if ("string" == typeof n[s]) {
                                    var a = n[s].split(r);
                                    2 === a.length && e(a[0], a[1])
                                }
                        }
                        var l = new i.default(0, 0, ""),
                            u = "middle" === l.align ? "middle" : "center";

                        function c(t) {
                            return t.replace(/<br(?: \/)?>/gi, "\n")
                        }
                        var d = function() {
                            function t() {
                                this.state = "INITIAL", this.buffer = "", this.decoder = new n, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
                            }
                            var e = t.prototype;
                            return e.parse = function(t) {
                                var e = this;

                                function r() {
                                    var t = e.buffer,
                                        r = 0;
                                    for (t = c(t); r < t.length && "\r" !== t[r] && "\n" !== t[r];) ++r;
                                    var i = t.substr(0, r);
                                    return "\r" === t[r] && ++r, "\n" === t[r] && ++r, e.buffer = t.substr(r), i
                                }
                                t && (e.buffer += e.decoder.decode(t, {
                                    stream: !0
                                }));
                                try {
                                    var n, d = "";
                                    if ("INITIAL" === e.state) {
                                        if (!/\r\n|\n/.test(e.buffer)) return this;
                                        var h = (d = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                                        if (!h || !h[0]) throw Error("Malformed WebVTT signature.");
                                        e.state = "HEADER"
                                    }
                                    for (var f = !1; e.buffer && /\r\n|\n/.test(e.buffer);) switch (f ? f = !1 : d = r(), e.state) {
                                        case "HEADER":
                                            /:/.test(d) ? (n = d, o(n, function(t, e) {}, /:/)) : d || (e.state = "ID");
                                            continue;
                                        case "NOTE":
                                            d || (e.state = "ID");
                                            continue;
                                        case "ID":
                                            if (/^NOTE($|[ \t])/.test(d)) {
                                                e.state = "NOTE";
                                                break
                                            }
                                            if (!d) continue;
                                            if (e.cue = new i.default(0, 0, ""), e.state = "CUE", -1 === d.indexOf("-->")) {
                                                e.cue.id = d;
                                                continue
                                            }
                                        case "CUE":
                                            if (!e.cue) {
                                                e.state = "BADCUE";
                                                continue
                                            }
                                            try {
                                                ! function(t, e, r) {
                                                    var i, n, c, d, h = t;

                                                    function f() {
                                                        var e = s(t);
                                                        if (null === e) throw Error("Malformed timestamp: " + h);
                                                        return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                                                    }

                                                    function g() {
                                                        t = t.replace(/^\s+/, "")
                                                    }
                                                    if (g(), e.startTime = f(), g(), "-->" !== t.substr(0, 3)) throw Error("Malformed time stamp (time stamps must be separated by '-->'): " + h);
                                                    t = t.substr(3), g(), e.endTime = f(), g(), i = t, n = new a, o(i, function(t, e) {
                                                        var i;
                                                        switch (t) {
                                                            case "region":
                                                                for (var s = r.length - 1; s >= 0; s--)
                                                                    if (r[s].id === e) {
                                                                        n.set(t, r[s].region);
                                                                        break
                                                                    }
                                                                break;
                                                            case "vertical":
                                                                n.alt(t, e, ["rl", "lr"]);
                                                                break;
                                                            case "line":
                                                                i = e.split(","), n.integer(t, i[0]), n.percent(t, i[0]) && n.set("snapToLines", !1), n.alt(t, i[0], ["auto"]), 2 === i.length && n.alt("lineAlign", i[1], ["start", u, "end"]);
                                                                break;
                                                            case "position":
                                                                i = e.split(","), n.percent(t, i[0]), 2 === i.length && n.alt("positionAlign", i[1], ["start", u, "end", "line-left", "line-right", "auto"]);
                                                                break;
                                                            case "size":
                                                                n.percent(t, e);
                                                                break;
                                                            case "align":
                                                                n.alt(t, e, ["start", u, "end", "left", "right"])
                                                        }
                                                    }, /:/, /\s/), e.region = n.get("region", null), e.vertical = n.get("vertical", ""), "auto" === (c = n.get("line", "auto")) && -1 === l.line && (c = -1), e.line = c, e.lineAlign = n.get("lineAlign", "start"), e.snapToLines = n.get("snapToLines", !0), e.size = n.get("size", 100), e.align = n.get("align", u), "auto" === (d = n.get("position", "auto")) && 50 === l.position && (d = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = d
                                                }(d, e.cue, e.regionList)
                                            } catch (t) {
                                                e.cue = null, e.state = "BADCUE";
                                                continue
                                            }
                                            e.state = "CUETEXT";
                                            continue;
                                        case "CUETEXT":
                                            var g = -1 !== d.indexOf("-->");
                                            if (!d || g && (f = !0)) {
                                                e.oncue && e.cue && e.oncue(e.cue), e.cue = null, e.state = "ID";
                                                continue
                                            }
                                            if (null === e.cue) continue;
                                            e.cue.text && (e.cue.text += "\n"), e.cue.text += d;
                                            continue;
                                        case "BADCUE":
                                            d || (e.state = "ID")
                                    }
                                } catch (t) {
                                    "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue), e.cue = null, e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE"
                                }
                                return this
                            }, e.flush = function() {
                                try {
                                    if ((this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state || "BADWEBVTT" === this.state) throw Error("Malformed WebVTT signature.")
                                } catch (t) {
                                    this.onparsingerror && this.onparsingerror(t)
                                }
                                return this.onflush && this.onflush(), this
                            }, t
                        }()
                    },
                    "./src/utils/webvtt-parser.ts": function(t, e, r) {
                        "use strict";
                        r.r(e), r.d(e, "generateCueId", function() {
                            return h
                        }), r.d(e, "parseWebVTT", function() {
                            return g
                        });
                        var i = r("./src/polyfills/number.ts"),
                            n = r("./src/utils/vttparser.ts"),
                            s = r("./src/demux/id3.ts"),
                            a = r("./src/utils/timescale-conversion.ts"),
                            o = r("./src/remux/mp4-remuxer.ts"),
                            l = /\r\n|\n\r|\n|\r/g,
                            u = function(t, e, r) {
                                return void 0 === r && (r = 0), t.substr(r, e.length) === e
                            },
                            c = function(t) {
                                var e = parseInt(t.substr(-3)),
                                    r = parseInt(t.substr(-6, 2)),
                                    n = parseInt(t.substr(-9, 2)),
                                    s = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                                if (!Object(i.isFiniteNumber)(e) || !Object(i.isFiniteNumber)(r) || !Object(i.isFiniteNumber)(n) || !Object(i.isFiniteNumber)(s)) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + t);
                                return e + (1e3 * r + 6e4 * n + 36e5 * s)
                            },
                            d = function(t) {
                                for (var e = 5381, r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
                                return (e >>> 0).toString()
                            };

                        function h(t, e, r) {
                            return d(t.toString()) + d(e.toString()) + d(r)
                        }
                        var f = function(t, e, r) {
                            var i, n = t[e],
                                s = t[n.prevCC];
                            if (!s || !s.new && n.new) {
                                t.ccOffset = t.presentationOffset = n.start, n.new = !1;
                                return
                            }
                            for (; null !== (i = s) && void 0 !== i && i.new;) t.ccOffset += n.start - s.start, n.new = !1, s = t[(n = s).prevCC];
                            t.presentationOffset = r
                        };

                        function g(t, e, r, i, d, g, v, p) {
                            var m, y = new n.VTTParser,
                                E = Object(s.utf8ArrayToStr)(new Uint8Array(t)).trim().replace(l, "\n").split("\n"),
                                T = [],
                                S = Object(a.toMpegTsClockFromTimescale)(e, r),
                                b = "00:00.000",
                                L = 0,
                                A = 0,
                                D = !0,
                                R = !1;
                            y.oncue = function(t) {
                                var e = i[d],
                                    r = i.ccOffset,
                                    n = (L - S) / 9e4;
                                if (null != e && e.new && (void 0 !== A ? r = i.ccOffset = e.start : f(i, d, n)), n && (r = n - i.presentationOffset), R) {
                                    var s = t.endTime - t.startTime,
                                        a = Object(o.normalizePts)((t.startTime + r - A) * 9e4, 9e4 * g) / 9e4;
                                    t.startTime = a, t.endTime = a + s
                                }
                                var l = t.text.trim();
                                t.text = decodeURIComponent(encodeURIComponent(l)), t.id || (t.id = h(t.startTime, t.endTime, l)), t.endTime > 0 && T.push(t)
                            }, y.onparsingerror = function(t) {
                                m = t
                            }, y.onflush = function() {
                                if (m) {
                                    p(m);
                                    return
                                }
                                v(T)
                            }, E.forEach(function(t) {
                                if (D) {
                                    if (u(t, "X-TIMESTAMP-MAP=")) {
                                        D = !1, R = !0, t.substr(16).split(",").forEach(function(t) {
                                            u(t, "LOCAL:") ? b = t.substr(6) : u(t, "MPEGTS:") && (L = parseInt(t.substr(7)))
                                        });
                                        try {
                                            A = c(b) / 1e3
                                        } catch (t) {
                                            R = !1, m = t
                                        }
                                        return
                                    }
                                    "" === t && (D = !1)
                                }
                                y.parse(t + "\n")
                            }), y.flush()
                        }
                    },
                    "./src/utils/xhr-loader.ts": function(t, e, r) {
                        "use strict";
                        r.r(e);
                        var i = r("./src/utils/logger.ts"),
                            n = r("./src/loader/load-stats.ts"),
                            s = /^age:\s*[\d.]+\s*$/m,
                            a = function() {
                                function t(t) {
                                    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = t ? t.xhrSetup : null, this.stats = new n.LoadStats, this.retryDelay = 0
                                }
                                var e = t.prototype;
                                return e.destroy = function() {
                                    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
                                }, e.abortInternal = function() {
                                    var t = this.loader;
                                    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), t && (t.onreadystatechange = null, t.onprogress = null, 4 !== t.readyState && (this.stats.aborted = !0, t.abort()))
                                }, e.abort = function() {
                                    var t;
                                    this.abortInternal(), null !== (t = this.callbacks) && void 0 !== t && t.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
                                }, e.load = function(t, e, r) {
                                    if (this.stats.loading.start) throw Error("Loader can only be used once.");
                                    this.stats.loading.start = self.performance.now(), this.context = t, this.config = e, this.callbacks = r, this.retryDelay = e.retryDelay, this.loadInternal()
                                }, e.loadInternal = function() {
                                    var t = this.config,
                                        e = this.context;
                                    if (t) {
                                        var r = this.loader = new self.XMLHttpRequest,
                                            i = this.stats;
                                        i.loading.first = 0, i.loaded = 0;
                                        var n = this.xhrSetup;
                                        try {
                                            if (n) try {
                                                n(r, e.url)
                                            } catch (t) {
                                                r.open("GET", e.url, !0), n(r, e.url)
                                            }
                                            r.readyState || r.open("GET", e.url, !0);
                                            var s = this.context.headers;
                                            if (s)
                                                for (var a in s) r.setRequestHeader(a, s[a])
                                        } catch (t) {
                                            this.callbacks.onError({
                                                code: r.status,
                                                text: t.message
                                            }, e, r);
                                            return
                                        }
                                        e.rangeEnd && r.setRequestHeader("Range", "bytes=" + e.rangeStart + "-" + (e.rangeEnd - 1)), r.onreadystatechange = this.readystatechange.bind(this), r.onprogress = this.loadprogress.bind(this), r.responseType = e.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), t.timeout), r.send()
                                    }
                                }, e.readystatechange = function() {
                                    var t = this.context,
                                        e = this.loader,
                                        r = this.stats;
                                    if (t && e) {
                                        var n = e.readyState,
                                            s = this.config;
                                        if (!r.aborted && n >= 2) {
                                            if (self.clearTimeout(this.requestTimeout), 0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start)), 4 === n) {
                                                e.onreadystatechange = null, e.onprogress = null;
                                                var a = e.status;
                                                if (a >= 200 && a < 300) {
                                                    if (r.loading.end = Math.max(self.performance.now(), r.loading.first), l = "arraybuffer" === t.responseType ? (o = e.response).byteLength : (o = e.responseText).length, r.loaded = r.total = l, !this.callbacks) return;
                                                    var o, l, u = this.callbacks.onProgress;
                                                    if (u && u(r, t, o, e), !this.callbacks) return;
                                                    var c = {
                                                        url: e.responseURL,
                                                        data: o
                                                    };
                                                    this.callbacks.onSuccess(c, r, t, e)
                                                } else r.retry >= s.maxRetry || a >= 400 && a < 499 ? (i.logger.error(a + " while loading " + t.url), this.callbacks.onError({
                                                    code: a,
                                                    text: e.statusText
                                                }, t, e)) : (i.logger.warn(a + " while loading " + t.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, s.maxRetryDelay), r.retry++)
                                            } else self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout)
                                        }
                                    }
                                }, e.loadtimeout = function() {
                                    i.logger.warn("timeout while loading " + this.context.url);
                                    var t = this.callbacks;
                                    t && (this.abortInternal(), t.onTimeout(this.stats, this.context, this.loader))
                                }, e.loadprogress = function(t) {
                                    var e = this.stats;
                                    e.loaded = t.loaded, t.lengthComputable && (e.total = t.total)
                                }, e.getCacheAge = function() {
                                    var t = null;
                                    if (this.loader && s.test(this.loader.getAllResponseHeaders())) {
                                        var e = this.loader.getResponseHeader("age");
                                        t = e ? parseFloat(e) : null
                                    }
                                    return t
                                }, t
                            }();
                        e.default = a
                    }
                }).default
            }, t.exports = e())
        }
    }
]);