(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2859], {
        96333: function(t, e, i) {
            "use strict";

            function n(t) {
                return t ? (t.nodeName || "").toLowerCase() : null
            }
            i.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        62057: function(t, e, i) {
            "use strict";

            function n(t) {
                if (null == t) return window;
                if ("[object Window]" !== t.toString()) {
                    var e = t.ownerDocument;
                    return e && e.defaultView || window
                }
                return t
            }
            i.d(e, {
                Z: function() {
                    return n
                }
            })
        },
        62556: function(t, e, i) {
            "use strict";
            i.d(e, {
                Re: function() {
                    return r
                },
                Zq: function() {
                    return s
                },
                kK: function() {
                    return o
                }
            });
            var n = i(62057);

            function o(t) {
                var e = (0, n.Z)(t).Element;
                return t instanceof e || t instanceof Element
            }

            function r(t) {
                var e = (0, n.Z)(t).HTMLElement;
                return t instanceof e || t instanceof HTMLElement
            }

            function s(t) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var e = (0, n.Z)(t).ShadowRoot;
                return t instanceof e || t instanceof ShadowRoot
            }
        },
        17824: function(t, e, i) {
            "use strict";
            var n = i(96333),
                o = i(62556);
            e.Z = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(t) {
                    var e = t.state;
                    Object.keys(e.elements).forEach(function(t) {
                        var i = e.styles[t] || {},
                            r = e.attributes[t] || {},
                            s = e.elements[t];
                        (0, o.Re)(s) && (0, n.Z)(s) && (Object.assign(s.style, i), Object.keys(r).forEach(function(t) {
                            var e = r[t];
                            !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
                        }))
                    })
                },
                effect: function(t) {
                    var e = t.state,
                        i = {
                            popper: {
                                position: e.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
                        function() {
                            Object.keys(e.elements).forEach(function(t) {
                                var r = e.elements[t],
                                    s = e.attributes[t] || {},
                                    a = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                                        return t[e] = "", t
                                    }, {});
                                (0, o.Re)(r) && (0, n.Z)(r) && (Object.assign(r.style, a), Object.keys(s).forEach(function(t) {
                                    r.removeAttribute(t)
                                }))
                            })
                        }
                },
                requires: ["computeStyles"]
            }
        },
        30212: function(t, e, i) {
            "use strict";
            i.d(e, {
                fi: function() {
                    return tl
                }
            });
            var n, o, r, s, a, l = i(62556),
                u = Math.max,
                c = Math.min,
                d = Math.round,
                h = i(62057);

            function p() {
                var t = navigator.userAgentData;
                return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function(t) {
                    return t.brand + "/" + t.version
                }).join(" ") : navigator.userAgent
            }

            function f() {
                return !/^((?!chrome|android).)*safari/i.test(p())
            }

            function v(t, e, i) {
                void 0 === e && (e = !1), void 0 === i && (i = !1);
                var n = t.getBoundingClientRect(),
                    o = 1,
                    r = 1;
                e && (0, l.Re)(t) && (o = t.offsetWidth > 0 && d(n.width) / t.offsetWidth || 1, r = t.offsetHeight > 0 && d(n.height) / t.offsetHeight || 1);
                var s = ((0, l.kK)(t) ? (0, h.Z)(t) : window).visualViewport,
                    a = !f() && i,
                    u = (n.left + (a && s ? s.offsetLeft : 0)) / o,
                    c = (n.top + (a && s ? s.offsetTop : 0)) / r,
                    p = n.width / o,
                    v = n.height / r;
                return {
                    width: p,
                    height: v,
                    top: c,
                    right: u + p,
                    bottom: c + v,
                    left: u,
                    x: u,
                    y: c
                }
            }

            function m(t) {
                var e = (0, h.Z)(t);
                return {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }
            var y = i(96333);

            function g(t) {
                return (((0, l.kK)(t) ? t.ownerDocument : t.document) || window.document).documentElement
            }

            function b(t) {
                return v(g(t)).left + m(t).scrollLeft
            }

            function w(t) {
                return (0, h.Z)(t).getComputedStyle(t)
            }

            function x(t) {
                var e = w(t),
                    i = e.overflow,
                    n = e.overflowX,
                    o = e.overflowY;
                return /auto|scroll|overlay|hidden/.test(i + o + n)
            }

            function C(t) {
                var e = v(t),
                    i = t.offsetWidth,
                    n = t.offsetHeight;
                return 1 >= Math.abs(e.width - i) && (i = e.width), 1 >= Math.abs(e.height - n) && (n = e.height), {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: i,
                    height: n
                }
            }

            function k(t) {
                return "html" === (0, y.Z)(t) ? t : t.assignedSlot || t.parentNode || ((0, l.Zq)(t) ? t.host : null) || g(t)
            }

            function P(t, e) {
                void 0 === e && (e = []);
                var i, n = function t(e) {
                        return ["html", "body", "#document"].indexOf((0, y.Z)(e)) >= 0 ? e.ownerDocument.body : (0, l.Re)(e) && x(e) ? e : t(k(e))
                    }(t),
                    o = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
                    r = (0, h.Z)(n),
                    s = o ? [r].concat(r.visualViewport || [], x(n) ? n : []) : n,
                    a = e.concat(s);
                return o ? a : a.concat(P(k(s)))
            }

            function O(t) {
                return (0, l.Re)(t) && "fixed" !== w(t).position ? t.offsetParent : null
            }

            function S(t) {
                for (var e, i = (0, h.Z)(t), n = O(t); n && (e = n, ["table", "td", "th"].indexOf((0, y.Z)(e)) >= 0) && "static" === w(n).position;) n = O(n);
                return n && ("html" === (0, y.Z)(n) || "body" === (0, y.Z)(n) && "static" === w(n).position) ? i : n || function(t) {
                    var e = /firefox/i.test(p());
                    if (/Trident/i.test(p()) && (0, l.Re)(t) && "fixed" === w(t).position) return null;
                    var i = k(t);
                    for ((0, l.Zq)(i) && (i = i.host);
                        (0, l.Re)(i) && 0 > ["html", "body"].indexOf((0, y.Z)(i));) {
                        var n = w(i);
                        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                        i = i.parentNode
                    }
                    return null
                }(t) || i
            }
            var E = "bottom",
                M = "right",
                z = "left",
                _ = "auto",
                R = ["top", E, M, z],
                A = "start",
                T = "viewport",
                D = "popper",
                L = R.reduce(function(t, e) {
                    return t.concat([e + "-" + A, e + "-end"])
                }, []),
                I = [].concat(R, [_]).reduce(function(t, e) {
                    return t.concat([e, e + "-" + A, e + "-end"])
                }, []),
                V = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
                j = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

            function B() {
                for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return !e.some(function(t) {
                    return !(t && "function" == typeof t.getBoundingClientRect)
                })
            }
            var F = {
                passive: !0
            };

            function W(t) {
                return t.split("-")[0]
            }

            function q(t) {
                return t.split("-")[1]
            }

            function U(t) {
                return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
            }

            function H(t) {
                var e, i = t.reference,
                    n = t.element,
                    o = t.placement,
                    r = o ? W(o) : null,
                    s = o ? q(o) : null,
                    a = i.x + i.width / 2 - n.width / 2,
                    l = i.y + i.height / 2 - n.height / 2;
                switch (r) {
                    case "top":
                        e = {
                            x: a,
                            y: i.y - n.height
                        };
                        break;
                    case E:
                        e = {
                            x: a,
                            y: i.y + i.height
                        };
                        break;
                    case M:
                        e = {
                            x: i.x + i.width,
                            y: l
                        };
                        break;
                    case z:
                        e = {
                            x: i.x - n.width,
                            y: l
                        };
                        break;
                    default:
                        e = {
                            x: i.x,
                            y: i.y
                        }
                }
                var u = r ? U(r) : null;
                if (null != u) {
                    var c = "y" === u ? "height" : "width";
                    switch (s) {
                        case A:
                            e[u] = e[u] - (i[c] / 2 - n[c] / 2);
                            break;
                        case "end":
                            e[u] = e[u] + (i[c] / 2 - n[c] / 2)
                    }
                }
                return e
            }
            var Z = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function N(t) {
                var e, i, n, o, r, s, a, l = t.popper,
                    u = t.popperRect,
                    c = t.placement,
                    p = t.variation,
                    f = t.offsets,
                    v = t.position,
                    m = t.gpuAcceleration,
                    y = t.adaptive,
                    b = t.roundOffsets,
                    x = t.isFixed,
                    C = f.x,
                    k = void 0 === C ? 0 : C,
                    P = f.y,
                    O = void 0 === P ? 0 : P,
                    _ = "function" == typeof b ? b({
                        x: k,
                        y: O
                    }) : {
                        x: k,
                        y: O
                    };
                k = _.x, O = _.y;
                var R = f.hasOwnProperty("x"),
                    A = f.hasOwnProperty("y"),
                    T = z,
                    D = "top",
                    L = window;
                if (y) {
                    var I = S(l),
                        V = "clientHeight",
                        j = "clientWidth";
                    I === (0, h.Z)(l) && "static" !== w(I = g(l)).position && "absolute" === v && (V = "scrollHeight", j = "scrollWidth"), ("top" === c || (c === z || c === M) && "end" === p) && (D = E, O -= (x && I === L && L.visualViewport ? L.visualViewport.height : I[V]) - u.height, O *= m ? 1 : -1), (c === z || ("top" === c || c === E) && "end" === p) && (T = M, k -= (x && I === L && L.visualViewport ? L.visualViewport.width : I[j]) - u.width, k *= m ? 1 : -1)
                }
                var B = Object.assign({
                        position: v
                    }, y && Z),
                    F = !0 === b ? (e = {
                        x: k,
                        y: O
                    }, i = (0, h.Z)(l), n = e.x, o = e.y, {
                        x: d(n * (r = i.devicePixelRatio || 1)) / r || 0,
                        y: d(o * r) / r || 0
                    }) : {
                        x: k,
                        y: O
                    };
                return (k = F.x, O = F.y, m) ? Object.assign({}, B, ((a = {})[D] = A ? "0" : "", a[T] = R ? "0" : "", a.transform = 1 >= (L.devicePixelRatio || 1) ? "translate(" + k + "px, " + O + "px)" : "translate3d(" + k + "px, " + O + "px, 0)", a)) : Object.assign({}, B, ((s = {})[D] = A ? O + "px" : "", s[T] = R ? k + "px" : "", s.transform = "", s))
            }
            var G = i(17824),
                $ = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function Y(t) {
                return t.replace(/left|right|bottom|top/g, function(t) {
                    return $[t]
                })
            }
            var X = {
                start: "end",
                end: "start"
            };

            function K(t) {
                return t.replace(/start|end/g, function(t) {
                    return X[t]
                })
            }

            function J(t, e) {
                var i = e.getRootNode && e.getRootNode();
                if (t.contains(e)) return !0;
                if (i && (0, l.Zq)(i)) {
                    var n = e;
                    do {
                        if (n && t.isSameNode(n)) return !0;
                        n = n.parentNode || n.host
                    } while (n)
                }
                return !1
            }

            function Q(t) {
                return Object.assign({}, t, {
                    left: t.x,
                    top: t.y,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                })
            }

            function tt(t, e, i) {
                var n, o, r, s, a, c, d, p, y, x;
                return e === T ? Q(function(t, e) {
                    var i = (0, h.Z)(t),
                        n = g(t),
                        o = i.visualViewport,
                        r = n.clientWidth,
                        s = n.clientHeight,
                        a = 0,
                        l = 0;
                    if (o) {
                        r = o.width, s = o.height;
                        var u = f();
                        (u || !u && "fixed" === e) && (a = o.offsetLeft, l = o.offsetTop)
                    }
                    return {
                        width: r,
                        height: s,
                        x: a + b(t),
                        y: l
                    }
                }(t, i)) : (0, l.kK)(e) ? ((n = v(e, !1, "fixed" === i)).top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n) : Q((o = g(t), s = g(o), a = m(o), c = null == (r = o.ownerDocument) ? void 0 : r.body, d = u(s.scrollWidth, s.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0), p = u(s.scrollHeight, s.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0), y = -a.scrollLeft + b(o), x = -a.scrollTop, "rtl" === w(c || s).direction && (y += u(s.clientWidth, c ? c.clientWidth : 0) - d), {
                    width: d,
                    height: p,
                    x: y,
                    y: x
                }))
            }

            function te() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function ti(t) {
                return Object.assign({}, te(), t)
            }

            function tn(t, e) {
                return e.reduce(function(e, i) {
                    return e[i] = t, e
                }, {})
            }

            function to(t, e) {
                void 0 === e && (e = {});
                var i, n, o, r, s, a, d, h, p = e,
                    f = p.placement,
                    m = void 0 === f ? t.placement : f,
                    b = p.strategy,
                    x = void 0 === b ? t.strategy : b,
                    C = p.boundary,
                    O = p.rootBoundary,
                    z = p.elementContext,
                    _ = void 0 === z ? D : z,
                    A = p.altBoundary,
                    L = p.padding,
                    I = void 0 === L ? 0 : L,
                    V = ti("number" != typeof I ? I : tn(I, R)),
                    j = t.rects.popper,
                    B = t.elements[void 0 !== A && A ? _ === D ? "reference" : D : _],
                    F = (i = (0, l.kK)(B) ? B : B.contextElement || g(t.elements.popper), n = void 0 === C ? "clippingParents" : C, o = void 0 === O ? T : O, d = (a = [].concat("clippingParents" === n ? (r = P(k(i)), s = ["absolute", "fixed"].indexOf(w(i).position) >= 0 && (0, l.Re)(i) ? S(i) : i, (0, l.kK)(s) ? r.filter(function(t) {
                        return (0, l.kK)(t) && J(t, s) && "body" !== (0, y.Z)(t)
                    }) : []) : [].concat(n), [o]))[0], (h = a.reduce(function(t, e) {
                        var n = tt(i, e, x);
                        return t.top = u(n.top, t.top), t.right = c(n.right, t.right), t.bottom = c(n.bottom, t.bottom), t.left = u(n.left, t.left), t
                    }, tt(i, d, x))).width = h.right - h.left, h.height = h.bottom - h.top, h.x = h.left, h.y = h.top, h),
                    W = v(t.elements.reference),
                    q = H({
                        reference: W,
                        element: j,
                        strategy: "absolute",
                        placement: m
                    }),
                    U = Q(Object.assign({}, j, q)),
                    Z = _ === D ? U : W,
                    N = {
                        top: F.top - Z.top + V.top,
                        bottom: Z.bottom - F.bottom + V.bottom,
                        left: F.left - Z.left + V.left,
                        right: Z.right - F.right + V.right
                    },
                    G = t.modifiersData.offset;
                if (_ === D && G) {
                    var $ = G[m];
                    Object.keys(N).forEach(function(t) {
                        var e = [M, E].indexOf(t) >= 0 ? 1 : -1,
                            i = ["top", E].indexOf(t) >= 0 ? "y" : "x";
                        N[t] += $[i] * e
                    })
                }
                return N
            }

            function tr(t, e, i) {
                return u(t, c(e, i))
            }

            function ts(t, e, i) {
                return void 0 === i && (i = {
                    x: 0,
                    y: 0
                }), {
                    top: t.top - e.height - i.y,
                    right: t.right - e.width + i.x,
                    bottom: t.bottom - e.height + i.y,
                    left: t.left - e.width - i.x
                }
            }

            function ta(t) {
                return ["top", M, E, z].some(function(e) {
                    return t[e] >= 0
                })
            }
            var tl = (r = void 0 === (o = (n = {
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(t) {
                        var e = t.state,
                            i = t.instance,
                            n = t.options,
                            o = n.scroll,
                            r = void 0 === o || o,
                            s = n.resize,
                            a = void 0 === s || s,
                            l = (0, h.Z)(e.elements.popper),
                            u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                        return r && u.forEach(function(t) {
                                t.addEventListener("scroll", i.update, F)
                            }), a && l.addEventListener("resize", i.update, F),
                            function() {
                                r && u.forEach(function(t) {
                                    t.removeEventListener("scroll", i.update, F)
                                }), a && l.removeEventListener("resize", i.update, F)
                            }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(t) {
                        var e = t.state,
                            i = t.name;
                        e.modifiersData[i] = H({
                            reference: e.rects.reference,
                            element: e.rects.popper,
                            strategy: "absolute",
                            placement: e.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            n = i.gpuAcceleration,
                            o = i.adaptive,
                            r = i.roundOffsets,
                            s = void 0 === r || r,
                            a = {
                                placement: W(e.placement),
                                variation: q(e.placement),
                                popper: e.elements.popper,
                                popperRect: e.rects.popper,
                                gpuAcceleration: void 0 === n || n,
                                isFixed: "fixed" === e.options.strategy
                            };
                        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, N(Object.assign({}, a, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: void 0 === o || o,
                            roundOffsets: s
                        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, N(Object.assign({}, a, {
                            offsets: e.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: s
                        })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-placement": e.placement
                        })
                    },
                    data: {}
                }, G.Z, {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            n = t.name,
                            o = i.offset,
                            r = void 0 === o ? [0, 0] : o,
                            s = I.reduce(function(t, i) {
                                var n, o, s, a, l, u;
                                return t[i] = (n = e.rects, s = [z, "top"].indexOf(o = W(i)) >= 0 ? -1 : 1, l = (a = "function" == typeof r ? r(Object.assign({}, n, {
                                    placement: i
                                })) : r)[0], u = a[1], l = l || 0, u = (u || 0) * s, [z, M].indexOf(o) >= 0 ? {
                                    x: u,
                                    y: l
                                } : {
                                    x: l,
                                    y: u
                                }), t
                            }, {}),
                            a = s[e.placement],
                            l = a.x,
                            u = a.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += u), e.modifiersData[n] = s
                    }
                }, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            n = t.name;
                        if (!e.modifiersData[n]._skip) {
                            for (var o = i.mainAxis, r = void 0 === o || o, s = i.altAxis, a = void 0 === s || s, l = i.fallbackPlacements, u = i.padding, c = i.boundary, d = i.rootBoundary, h = i.altBoundary, p = i.flipVariations, f = void 0 === p || p, v = i.allowedAutoPlacements, m = e.options.placement, y = W(m) === m, g = l || (y || !f ? [Y(m)] : function(t) {
                                    if (W(t) === _) return [];
                                    var e = Y(t);
                                    return [K(t), e, K(e)]
                                }(m)), b = [m].concat(g).reduce(function(t, i) {
                                    var n, o, r, s, a, l, h, p, m, y, g, b;
                                    return t.concat(W(i) === _ ? (o = (n = {
                                        placement: i,
                                        boundary: c,
                                        rootBoundary: d,
                                        padding: u,
                                        flipVariations: f,
                                        allowedAutoPlacements: v
                                    }).placement, r = n.boundary, s = n.rootBoundary, a = n.padding, l = n.flipVariations, p = void 0 === (h = n.allowedAutoPlacements) ? I : h, 0 === (g = (y = (m = q(o)) ? l ? L : L.filter(function(t) {
                                        return q(t) === m
                                    }) : R).filter(function(t) {
                                        return p.indexOf(t) >= 0
                                    })).length && (g = y), Object.keys(b = g.reduce(function(t, i) {
                                        return t[i] = to(e, {
                                            placement: i,
                                            boundary: r,
                                            rootBoundary: s,
                                            padding: a
                                        })[W(i)], t
                                    }, {})).sort(function(t, e) {
                                        return b[t] - b[e]
                                    })) : i)
                                }, []), w = e.rects.reference, x = e.rects.popper, C = new Map, k = !0, P = b[0], O = 0; O < b.length; O++) {
                                var S = b[O],
                                    T = W(S),
                                    D = q(S) === A,
                                    V = ["top", E].indexOf(T) >= 0,
                                    j = V ? "width" : "height",
                                    B = to(e, {
                                        placement: S,
                                        boundary: c,
                                        rootBoundary: d,
                                        altBoundary: h,
                                        padding: u
                                    }),
                                    F = V ? D ? M : z : D ? E : "top";
                                w[j] > x[j] && (F = Y(F));
                                var U = Y(F),
                                    H = [];
                                if (r && H.push(B[T] <= 0), a && H.push(B[F] <= 0, B[U] <= 0), H.every(function(t) {
                                        return t
                                    })) {
                                    P = S, k = !1;
                                    break
                                }
                                C.set(S, H)
                            }
                            if (k)
                                for (var Z = f ? 3 : 1, N = function(t) {
                                        var e = b.find(function(e) {
                                            var i = C.get(e);
                                            if (i) return i.slice(0, t).every(function(t) {
                                                return t
                                            })
                                        });
                                        if (e) return P = e, "break"
                                    }, G = Z; G > 0 && "break" !== N(G); G--);
                            e.placement !== P && (e.modifiersData[n]._skip = !0, e.placement = P, e.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            i = t.options,
                            n = t.name,
                            o = i.mainAxis,
                            r = i.altAxis,
                            s = i.boundary,
                            a = i.rootBoundary,
                            l = i.altBoundary,
                            d = i.padding,
                            h = i.tether,
                            p = void 0 === h || h,
                            f = i.tetherOffset,
                            v = void 0 === f ? 0 : f,
                            m = to(e, {
                                boundary: s,
                                rootBoundary: a,
                                padding: d,
                                altBoundary: l
                            }),
                            y = W(e.placement),
                            g = q(e.placement),
                            b = !g,
                            w = U(y),
                            x = "x" === w ? "y" : "x",
                            k = e.modifiersData.popperOffsets,
                            P = e.rects.reference,
                            O = e.rects.popper,
                            _ = "function" == typeof v ? v(Object.assign({}, e.rects, {
                                placement: e.placement
                            })) : v,
                            R = "number" == typeof _ ? {
                                mainAxis: _,
                                altAxis: _
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, _),
                            T = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
                            D = {
                                x: 0,
                                y: 0
                            };
                        if (k) {
                            if (void 0 === o || o) {
                                var L, I = "y" === w ? "top" : z,
                                    V = "y" === w ? E : M,
                                    j = "y" === w ? "height" : "width",
                                    B = k[w],
                                    F = B + m[I],
                                    H = B - m[V],
                                    Z = p ? -O[j] / 2 : 0,
                                    N = g === A ? P[j] : O[j],
                                    G = g === A ? -O[j] : -P[j],
                                    $ = e.elements.arrow,
                                    Y = p && $ ? C($) : {
                                        width: 0,
                                        height: 0
                                    },
                                    X = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : te(),
                                    K = X[I],
                                    J = X[V],
                                    Q = tr(0, P[j], Y[j]),
                                    tt = b ? P[j] / 2 - Z - Q - K - R.mainAxis : N - Q - K - R.mainAxis,
                                    ti = b ? -P[j] / 2 + Z + Q + J + R.mainAxis : G + Q + J + R.mainAxis,
                                    tn = e.elements.arrow && S(e.elements.arrow),
                                    ts = tn ? "y" === w ? tn.clientTop || 0 : tn.clientLeft || 0 : 0,
                                    ta = null != (L = null == T ? void 0 : T[w]) ? L : 0,
                                    tl = tr(p ? c(F, B + tt - ta - ts) : F, B, p ? u(H, B + ti - ta) : H);
                                k[w] = tl, D[w] = tl - B
                            }
                            if (void 0 !== r && r) {
                                var tu, tc, td = "x" === w ? "top" : z,
                                    th = "x" === w ? E : M,
                                    tp = k[x],
                                    tf = "y" === x ? "height" : "width",
                                    tv = tp + m[td],
                                    tm = tp - m[th],
                                    ty = -1 !== ["top", z].indexOf(y),
                                    tg = null != (tc = null == T ? void 0 : T[x]) ? tc : 0,
                                    tb = ty ? tv : tp - P[tf] - O[tf] - tg + R.altAxis,
                                    tw = ty ? tp + P[tf] + O[tf] - tg - R.altAxis : tm,
                                    tx = p && ty ? (tu = tr(tb, tp, tw)) > tw ? tw : tu : tr(p ? tb : tv, tp, p ? tw : tm);
                                k[x] = tx, D[x] = tx - tp
                            }
                            e.modifiersData[n] = D
                        }
                    },
                    requiresIfExists: ["offset"]
                }, {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e, i, n = t.state,
                            o = t.name,
                            r = t.options,
                            s = n.elements.arrow,
                            a = n.modifiersData.popperOffsets,
                            l = W(n.placement),
                            u = U(l),
                            c = [z, M].indexOf(l) >= 0 ? "height" : "width";
                        if (s && a) {
                            var d = ti("number" != typeof(e = "function" == typeof(e = r.padding) ? e(Object.assign({}, n.rects, {
                                    placement: n.placement
                                })) : e) ? e : tn(e, R)),
                                h = C(s),
                                p = "y" === u ? "top" : z,
                                f = "y" === u ? E : M,
                                v = n.rects.reference[c] + n.rects.reference[u] - a[u] - n.rects.popper[c],
                                m = a[u] - n.rects.reference[u],
                                y = S(s),
                                g = y ? "y" === u ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
                                b = d[p],
                                w = g - h[c] - d[f],
                                x = g / 2 - h[c] / 2 + (v / 2 - m / 2),
                                k = tr(b, x, w);
                            n.modifiersData[o] = ((i = {})[u] = k, i.centerOffset = k - x, i)
                        }
                    },
                    effect: function(t) {
                        var e = t.state,
                            i = t.options.element,
                            n = void 0 === i ? "[data-popper-arrow]" : i;
                        null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && J(e.elements.popper, n) && (e.elements.arrow = n)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                }, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(t) {
                        var e = t.state,
                            i = t.name,
                            n = e.rects.reference,
                            o = e.rects.popper,
                            r = e.modifiersData.preventOverflow,
                            s = to(e, {
                                elementContext: "reference"
                            }),
                            a = to(e, {
                                altBoundary: !0
                            }),
                            l = ts(s, n),
                            u = ts(a, o, r),
                            c = ta(l),
                            d = ta(u);
                        e.modifiersData[i] = {
                            referenceClippingOffsets: l,
                            popperEscapeOffsets: u,
                            isReferenceHidden: c,
                            hasPopperEscaped: d
                        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-reference-hidden": c,
                            "data-popper-escaped": d
                        })
                    }
                }]
            }).defaultModifiers) ? [] : o, a = void 0 === (s = n.defaultOptions) ? j : s, function(t, e, i) {
                void 0 === i && (i = a);
                var n, o, s = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, j, a),
                        modifiersData: {},
                        elements: {
                            reference: t,
                            popper: e
                        },
                        attributes: {},
                        styles: {}
                    },
                    u = [],
                    c = !1,
                    p = {
                        state: s,
                        setOptions: function(i) {
                            var n, o, c, d, h, v = "function" == typeof i ? i(s.options) : i;
                            f(), s.options = Object.assign({}, a, s.options, v), s.scrollParents = {
                                reference: (0, l.kK)(t) ? P(t) : t.contextElement ? P(t.contextElement) : [],
                                popper: P(e)
                            };
                            var m = (o = Object.keys(n = [].concat(r, s.options.modifiers).reduce(function(t, e) {
                                var i = t[e.name];
                                return t[e.name] = i ? Object.assign({}, i, e, {
                                    options: Object.assign({}, i.options, e.options),
                                    data: Object.assign({}, i.data, e.data)
                                }) : e, t
                            }, {})).map(function(t) {
                                return n[t]
                            }), c = new Map, d = new Set, h = [], o.forEach(function(t) {
                                c.set(t.name, t)
                            }), o.forEach(function(t) {
                                d.has(t.name) || function t(e) {
                                    d.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                                        if (!d.has(e)) {
                                            var i = c.get(e);
                                            i && t(i)
                                        }
                                    }), h.push(e)
                                }(t)
                            }), V.reduce(function(t, e) {
                                return t.concat(h.filter(function(t) {
                                    return t.phase === e
                                }))
                            }, []));
                            return s.orderedModifiers = m.filter(function(t) {
                                return t.enabled
                            }), s.orderedModifiers.forEach(function(t) {
                                var e = t.name,
                                    i = t.options,
                                    n = t.effect;
                                if ("function" == typeof n) {
                                    var o = n({
                                        state: s,
                                        name: e,
                                        instance: p,
                                        options: void 0 === i ? {} : i
                                    });
                                    u.push(o || function() {})
                                }
                            }), p.update()
                        },
                        forceUpdate: function() {
                            if (!c) {
                                var t, e, i, n, o, r, a, u, f, w, k, P, O = s.elements,
                                    E = O.reference,
                                    M = O.popper;
                                if (B(E, M)) {
                                    s.rects = {
                                        reference: (e = S(M), i = "fixed" === s.options.strategy, n = (0, l.Re)(e), u = (0, l.Re)(e) && (r = d((o = e.getBoundingClientRect()).width) / e.offsetWidth || 1, a = d(o.height) / e.offsetHeight || 1, 1 !== r || 1 !== a), f = g(e), w = v(E, u, i), k = {
                                            scrollLeft: 0,
                                            scrollTop: 0
                                        }, P = {
                                            x: 0,
                                            y: 0
                                        }, (n || !n && !i) && (("body" !== (0, y.Z)(e) || x(f)) && (k = (t = e) !== (0, h.Z)(t) && (0, l.Re)(t) ? {
                                            scrollLeft: t.scrollLeft,
                                            scrollTop: t.scrollTop
                                        } : m(t)), (0, l.Re)(e) ? (P = v(e, !0), P.x += e.clientLeft, P.y += e.clientTop) : f && (P.x = b(f))), {
                                            x: w.left + k.scrollLeft - P.x,
                                            y: w.top + k.scrollTop - P.y,
                                            width: w.width,
                                            height: w.height
                                        }),
                                        popper: C(M)
                                    }, s.reset = !1, s.placement = s.options.placement, s.orderedModifiers.forEach(function(t) {
                                        return s.modifiersData[t.name] = Object.assign({}, t.data)
                                    });
                                    for (var z = 0; z < s.orderedModifiers.length; z++) {
                                        if (!0 === s.reset) {
                                            s.reset = !1, z = -1;
                                            continue
                                        }
                                        var _ = s.orderedModifiers[z],
                                            R = _.fn,
                                            A = _.options,
                                            T = void 0 === A ? {} : A,
                                            D = _.name;
                                        "function" == typeof R && (s = R({
                                            state: s,
                                            options: T,
                                            name: D,
                                            instance: p
                                        }) || s)
                                    }
                                }
                            }
                        },
                        update: (n = function() {
                            return new Promise(function(t) {
                                p.forceUpdate(), t(s)
                            })
                        }, function() {
                            return o || (o = new Promise(function(t) {
                                Promise.resolve().then(function() {
                                    o = void 0, t(n())
                                })
                            })), o
                        }),
                        destroy: function() {
                            f(), c = !0
                        }
                    };
                if (!B(t, e)) return p;

                function f() {
                    u.forEach(function(t) {
                        return t()
                    }), u = []
                }
                return p.setOptions(i).then(function(t) {
                    !c && i.onFirstUpdate && i.onFirstUpdate(t)
                }), p
            })
        },
        86664: function(t, e, i) {
            ! function(t, e) {
                "use strict";

                function i(t, e) {
                    var i = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter(function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })), i.push.apply(i, n)
                    }
                    return i
                }

                function n(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(n), !0).forEach(function(e) {
                            r(t, e, n[e])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                    return t
                }

                function o(t) {
                    return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function r(t, e, i) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = i, t
                }

                function s(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var i, n, o = t && ("undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]);
                        if (null != o) {
                            var r = [],
                                s = !0,
                                a = !1;
                            try {
                                for (o = o.call(t); !(s = (i = o.next()).done) && (r.push(i.value), !e || r.length !== e); s = !0);
                            } catch (t) {
                                a = !0, n = t
                            } finally {
                                try {
                                    s || null == o.return || o.return()
                                } finally {
                                    if (a) throw n
                                }
                            }
                            return r
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return a(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            if ("Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i) return Array.from(t);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return a(t, e)
                        }
                    }(t, e) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function a(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var i = 0, n = Array(e); i < e; i++) n[i] = t[i];
                    return n
                }

                function l() {}

                function u() {}
                e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, u.resetWarningCache = l;
                var c, d, h = (c = d = {
                        exports: {}
                    }, d.exports, c.exports = function() {
                        function t(t, e, i, n, o, r) {
                            if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== r) {
                                var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                throw s.name = "Invariant Violation", s
                            }
                        }

                        function e() {
                            return t
                        }
                        t.isRequired = t;
                        var i = {
                            array: t,
                            bool: t,
                            func: t,
                            number: t,
                            object: t,
                            string: t,
                            symbol: t,
                            any: t,
                            arrayOf: e,
                            element: t,
                            elementType: t,
                            instanceOf: e,
                            node: t,
                            objectOf: e,
                            oneOf: e,
                            oneOfType: e,
                            shape: e,
                            exact: e,
                            checkPropTypes: u,
                            resetWarningCache: l
                        };
                        return i.PropTypes = i, i
                    }(), d.exports),
                    p = function(t) {
                        var i = e.useRef(t);
                        return e.useEffect(function() {
                            i.current = t
                        }, [t]), i.current
                    },
                    f = function(t) {
                        return null !== t && "object" === o(t)
                    },
                    v = "[object Object]",
                    m = function t(e, i) {
                        if (!f(e) || !f(i)) return e === i;
                        var n = Array.isArray(e);
                        if (n !== Array.isArray(i)) return !1;
                        var o = Object.prototype.toString.call(e) === v;
                        if (o !== (Object.prototype.toString.call(i) === v)) return !1;
                        if (!o && !n) return e === i;
                        var r = Object.keys(e),
                            s = Object.keys(i);
                        if (r.length !== s.length) return !1;
                        for (var a = {}, l = 0; l < r.length; l += 1) a[r[l]] = !0;
                        for (var u = 0; u < s.length; u += 1) a[s[u]] = !0;
                        var c = Object.keys(a);
                        return c.length === r.length && c.every(function(n) {
                            return t(e[n], i[n])
                        })
                    },
                    y = function(t, e, i) {
                        return f(t) ? Object.keys(t).reduce(function(o, s) {
                            var a = !f(e) || !m(t[s], e[s]);
                            return i.includes(s) ? (a && console.warn("Unsupported prop change: options.".concat(s, " is not a mutable property.")), o) : a ? n(n({}, o || {}), {}, r({}, s, t[s])) : o
                        }, null) : null
                    },
                    g = function(t) {
                        if (null === t || f(t) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return t;
                        throw Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
                    },
                    b = function(t) {
                        if (f(t) && "function" == typeof t.then) return {
                            tag: "async",
                            stripePromise: Promise.resolve(t).then(g)
                        };
                        var e = g(t);
                        return null === e ? {
                            tag: "empty"
                        } : {
                            tag: "sync",
                            stripe: e
                        }
                    },
                    w = e.createContext(null);
                w.displayName = "ElementsContext";
                var x = function(t, e) {
                        if (!t) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(e, " in an <Elements> provider."));
                        return t
                    },
                    C = e.createContext(null);
                C.displayName = "CartElementContext";
                var k = function(t, e) {
                        if (!t) throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(e, " in an <Elements> provider."));
                        return t
                    },
                    P = function(t) {
                        var i = t.stripe,
                            n = t.options,
                            o = t.children,
                            r = e.useMemo(function() {
                                return b(i)
                            }, [i]),
                            a = s(e.useState(null), 2),
                            l = a[0],
                            u = a[1],
                            c = s(e.useState(null), 2),
                            d = c[0],
                            h = c[1],
                            f = s(e.useState(function() {
                                return {
                                    stripe: "sync" === r.tag ? r.stripe : null,
                                    elements: "sync" === r.tag ? r.stripe.elements(n) : null
                                }
                            }), 2),
                            v = f[0],
                            m = f[1];
                        e.useEffect(function() {
                            var t = !0,
                                e = function(t) {
                                    m(function(e) {
                                        return e.stripe ? e : {
                                            stripe: t,
                                            elements: t.elements(n)
                                        }
                                    })
                                };
                            return "async" !== r.tag || v.stripe ? "sync" !== r.tag || v.stripe || e(r.stripe) : r.stripePromise.then(function(i) {
                                    i && t && e(i)
                                }),
                                function() {
                                    t = !1
                                }
                        }, [r, v, n]);
                        var g = p(i);
                        e.useEffect(function() {
                            null !== g && g !== i && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")
                        }, [g, i]);
                        var x = p(n);
                        return e.useEffect(function() {
                            if (v.elements) {
                                var t = y(n, x, ["clientSecret", "fonts"]);
                                t && v.elements.update(t)
                            }
                        }, [n, x, v.elements]), e.useEffect(function() {
                            var t = v.stripe;
                            t && t._registerWrapper && t.registerAppInfo && (t._registerWrapper({
                                name: "react-stripe-js",
                                version: "1.16.5"
                            }), t.registerAppInfo({
                                name: "react-stripe-js",
                                version: "1.16.5",
                                url: "https://stripe.com/docs/stripe-js/react"
                            }))
                        }, [v.stripe]), e.createElement(w.Provider, {
                            value: v
                        }, e.createElement(C.Provider, {
                            value: {
                                cart: l,
                                setCart: u,
                                cartState: d,
                                setCartState: h
                            }
                        }, o))
                    };
                P.propTypes = {
                    stripe: h.any,
                    options: h.object
                };
                var O = function(t) {
                        return x(e.useContext(w), t)
                    },
                    S = function(t) {
                        return k(e.useContext(C), t)
                    },
                    E = function(t) {
                        return (0, t.children)(O("mounts <ElementsConsumer>"))
                    };
                E.propTypes = {
                    children: h.func.isRequired
                };
                var M = function(t, i, n) {
                        var o = !!n,
                            r = e.useRef(n);
                        e.useEffect(function() {
                            r.current = n
                        }, [n]), e.useEffect(function() {
                            if (!o || !t) return function() {};
                            var e = function() {
                                r.current && r.current.apply(r, arguments)
                            };
                            return t.on(i, e),
                                function() {
                                    t.off(i, e)
                                }
                        }, [o, i, t, r])
                    },
                    z = function(t, i) {
                        var n = "".concat(t.charAt(0).toUpperCase() + t.slice(1), "Element"),
                            o = i ? function(t) {
                                O("mounts <".concat(n, ">")), S("mounts <".concat(n, ">"));
                                var i = t.id,
                                    o = t.className;
                                return e.createElement("div", {
                                    id: i,
                                    className: o
                                })
                            } : function(i) {
                                var o, r = i.id,
                                    a = i.className,
                                    l = i.options,
                                    u = void 0 === l ? {} : l,
                                    c = i.onBlur,
                                    d = i.onFocus,
                                    h = i.onReady,
                                    f = i.onChange,
                                    v = i.onEscape,
                                    m = i.onClick,
                                    g = i.onLoadError,
                                    b = i.onLoaderStart,
                                    w = i.onNetworksChange,
                                    x = i.onCheckout,
                                    C = i.onLineItemClick,
                                    k = i.onConfirm,
                                    P = i.onCancel,
                                    E = i.onShippingAddressChange,
                                    z = i.onShippingRateChange,
                                    _ = O("mounts <".concat(n, ">")).elements,
                                    R = s(e.useState(null), 2),
                                    A = R[0],
                                    T = R[1],
                                    D = e.useRef(null),
                                    L = e.useRef(null),
                                    I = S("mounts <".concat(n, ">")),
                                    V = I.setCart,
                                    j = I.setCartState;
                                M(A, "blur", c), M(A, "focus", d), M(A, "escape", v), M(A, "click", m), M(A, "loaderror", g), M(A, "loaderstart", b), M(A, "networkschange", w), M(A, "lineitemclick", C), M(A, "confirm", k), M(A, "cancel", P), M(A, "shippingaddresschange", E), M(A, "shippingratechange", z), "cart" === t ? o = function(t) {
                                    j(t), h && h(t)
                                } : h && (o = "payButton" === t ? h : function() {
                                    h(A)
                                }), M(A, "ready", o), M(A, "change", "cart" === t ? function(t) {
                                    j(t), f && f(t)
                                } : f), M(A, "checkout", "cart" === t ? function(t) {
                                    j(t), x && x(t)
                                } : x), e.useLayoutEffect(function() {
                                    if (null === D.current && _ && null !== L.current) {
                                        var e = _.create(t, u);
                                        "cart" === t && V && V(e), D.current = e, T(e), e.mount(L.current)
                                    }
                                }, [_, u, V]);
                                var B = p(u);
                                return e.useEffect(function() {
                                    if (D.current) {
                                        var t = y(u, B, ["paymentRequest"]);
                                        t && D.current.update(t)
                                    }
                                }, [u, B]), e.useLayoutEffect(function() {
                                    return function() {
                                        D.current && (D.current.destroy(), D.current = null)
                                    }
                                }, []), e.createElement("div", {
                                    id: r,
                                    className: a,
                                    ref: L
                                })
                            };
                        return o.propTypes = {
                            id: h.string,
                            className: h.string,
                            onChange: h.func,
                            onBlur: h.func,
                            onFocus: h.func,
                            onReady: h.func,
                            onEscape: h.func,
                            onClick: h.func,
                            onLoadError: h.func,
                            onLoaderStart: h.func,
                            onNetworksChange: h.func,
                            onCheckout: h.func,
                            onLineItemClick: h.func,
                            onConfirm: h.func,
                            onCancel: h.func,
                            onShippingAddressChange: h.func,
                            onShippingRateChange: h.func,
                            options: h.object
                        }, o.displayName = n, o.__elementType = t, o
                    },
                    _ = "undefined" == typeof window,
                    R = z("auBankAccount", _),
                    A = z("card", _),
                    T = z("cardNumber", _),
                    D = z("cardExpiry", _),
                    L = z("cardCvc", _),
                    I = z("fpxBank", _),
                    V = z("iban", _),
                    j = z("idealBank", _),
                    B = z("p24Bank", _),
                    F = z("epsBank", _),
                    W = z("payment", _),
                    q = z("payButton", _),
                    U = z("paymentRequestButton", _),
                    H = z("linkAuthentication", _),
                    Z = z("address", _),
                    N = z("shippingAddress", _),
                    G = z("cart", _),
                    $ = z("paymentMethodMessaging", _),
                    Y = z("affirmMessage", _),
                    X = z("afterpayClearpayMessage", _);
                t.AddressElement = Z, t.AffirmMessageElement = Y, t.AfterpayClearpayMessageElement = X, t.AuBankAccountElement = R, t.CardCvcElement = L, t.CardElement = A, t.CardExpiryElement = D, t.CardNumberElement = T, t.CartElement = G, t.Elements = P, t.ElementsConsumer = E, t.EpsBankElement = F, t.FpxBankElement = I, t.IbanElement = V, t.IdealBankElement = j, t.LinkAuthenticationElement = H, t.P24BankElement = B, t.PayButtonElement = q, t.PaymentElement = W, t.PaymentMethodMessagingElement = $, t.PaymentRequestButtonElement = U, t.ShippingAddressElement = N, t.useCartElement = function() {
                    return S("calls useCartElement()").cart
                }, t.useCartElementState = function() {
                    return S("calls useCartElementState()").cartState
                }, t.useElements = function() {
                    return O("calls useElements()").elements
                }, t.useStripe = function() {
                    return O("calls useStripe()").stripe
                }, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }(e, i(67294))
        },
        38252: function(t) {
            "use strict";
            t.exports = function t(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    if (Array.isArray(e)) {
                        if ((n = e.length) != i.length) return !1;
                        for (o = n; 0 != o--;)
                            if (!t(e[o], i[o])) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((n = (r = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (o = n; 0 != o--;)
                        if (!Object.prototype.hasOwnProperty.call(i, r[o])) return !1;
                    for (o = n; 0 != o--;) {
                        var n, o, r, s = r[o];
                        if (("_owner" !== s || !e.$$typeof) && !t(e[s], i[s])) return !1
                    }
                    return !0
                }
                return e != e && i != i
            }
        },
        24394: function(t, e, i) {
            "use strict";
            i.d(e, {
                K: function() {
                    return n
                },
                k: function() {
                    return o
                }
            });
            var n = function() {},
                o = function() {}
        },
        11865: function(t, e, i) {
            var n = i(35393)(function(t, e, i) {
                return t + (i ? "_" : "") + e.toLowerCase()
            });
            t.exports = n
        },
        69590: function(t) {
            var e = "undefined" != typeof Element,
                i = "function" == typeof Map,
                n = "function" == typeof Set,
                o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
            t.exports = function(t, r) {
                try {
                    return function t(r, s) {
                        if (r === s) return !0;
                        if (r && s && "object" == typeof r && "object" == typeof s) {
                            var a, l, u, c;
                            if (r.constructor !== s.constructor) return !1;
                            if (Array.isArray(r)) {
                                if ((a = r.length) != s.length) return !1;
                                for (l = a; 0 != l--;)
                                    if (!t(r[l], s[l])) return !1;
                                return !0
                            }
                            if (i && r instanceof Map && s instanceof Map) {
                                if (r.size !== s.size) return !1;
                                for (c = r.entries(); !(l = c.next()).done;)
                                    if (!s.has(l.value[0])) return !1;
                                for (c = r.entries(); !(l = c.next()).done;)
                                    if (!t(l.value[1], s.get(l.value[0]))) return !1;
                                return !0
                            }
                            if (n && r instanceof Set && s instanceof Set) {
                                if (r.size !== s.size) return !1;
                                for (c = r.entries(); !(l = c.next()).done;)
                                    if (!s.has(l.value[0])) return !1;
                                return !0
                            }
                            if (o && ArrayBuffer.isView(r) && ArrayBuffer.isView(s)) {
                                if ((a = r.length) != s.length) return !1;
                                for (l = a; 0 != l--;)
                                    if (r[l] !== s[l]) return !1;
                                return !0
                            }
                            if (r.constructor === RegExp) return r.source === s.source && r.flags === s.flags;
                            if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === s.valueOf();
                            if (r.toString !== Object.prototype.toString) return r.toString() === s.toString();
                            if ((a = (u = Object.keys(r)).length) !== Object.keys(s).length) return !1;
                            for (l = a; 0 != l--;)
                                if (!Object.prototype.hasOwnProperty.call(s, u[l])) return !1;
                            if (e && r instanceof Element) return !1;
                            for (l = a; 0 != l--;)
                                if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !r.$$typeof) && !t(r[u[l]], s[u[l]])) return !1;
                            return !0
                        }
                        return r != r && s != s
                    }(t, r)
                } catch (t) {
                    if ((t.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw t
                }
            }
        },
        56502: function(t, e, i) {
            "use strict";
            i.d(e, {
                Z: function() {
                    return u
                }
            });
            var n = i(67294),
                o = i(62742),
                r = i(38252),
                s = i.n(r);
            let a = "tsparticles";
            class l extends n.Component {
                constructor(t) {
                    super(t), this.state = {
                        init: !1,
                        library: void 0
                    }
                }
                destroy() {
                    this.state.library && (this.state.library.destroy(), this.setState({
                        library: void 0
                    }))
                }
                shouldComponentUpdate(t) {
                    return !s()(t, this.props)
                }
                componentDidUpdate() {
                    this.refresh()
                }
                forceUpdate() {
                    this.refresh().then(() => {
                        super.forceUpdate()
                    })
                }
                componentDidMount() {
                    (async () => {
                        this.props.init && await this.props.init(o.S6), this.setState({
                            init: !0
                        }, async () => {
                            await this.loadParticles()
                        })
                    })()
                }
                componentWillUnmount() {
                    this.destroy()
                }
                render() {
                    let {
                        width: t,
                        height: e,
                        className: i,
                        canvasClassName: o,
                        id: r
                    } = this.props;
                    return n.createElement("div", {
                        className: i,
                        id: r
                    }, n.createElement("canvas", {
                        className: o,
                        style: Object.assign(Object.assign({}, this.props.style), {
                            width: t,
                            height: e
                        })
                    }))
                }
                async refresh() {
                    this.destroy(), await this.loadParticles()
                }
                async loadParticles() {
                    var t, e, i;
                    if (!this.state.init) return;
                    let n = async t => {
                            this.props.container && (this.props.container.current = t), this.setState({
                                library: t
                            }), this.props.loaded && await this.props.loaded(t)
                        },
                        r = null !== (e = null !== (t = this.props.id) && void 0 !== t ? t : l.defaultProps.id) && void 0 !== e ? e : a,
                        s = this.props.url ? await o.S6.loadJSON(r, this.props.url) : await o.S6.load(r, null !== (i = this.props.params) && void 0 !== i ? i : this.props.options);
                    await n(s)
                }
            }
            l.defaultProps = {
                width: "100%",
                height: "100%",
                options: {},
                style: {},
                url: void 0,
                id: a
            };
            var u = l
        },
        37894: function(t, e, i) {
            "use strict";
            i.d(e, {
                D: function() {
                    return d
                }
            });
            var n = i(67294),
                o = i(73935),
                r = i(30212),
                s = i(69590),
                a = i.n(s),
                l = function(t) {
                    return t.reduce(function(t, e) {
                        var i = e[0],
                            n = e[1];
                        return t[i] = n, t
                    }, {})
                },
                u = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
                c = [],
                d = function(t, e, i) {
                    void 0 === i && (i = {});
                    var s = n.useRef(null),
                        d = {
                            onFirstUpdate: i.onFirstUpdate,
                            placement: i.placement || "bottom",
                            strategy: i.strategy || "absolute",
                            modifiers: i.modifiers || c
                        },
                        h = n.useState({
                            styles: {
                                popper: {
                                    position: d.strategy,
                                    left: "0",
                                    top: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                }
                            },
                            attributes: {}
                        }),
                        p = h[0],
                        f = h[1],
                        v = n.useMemo(function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(t) {
                                    var e = t.state,
                                        i = Object.keys(e.elements);
                                    o.flushSync(function() {
                                        f({
                                            styles: l(i.map(function(t) {
                                                return [t, e.styles[t] || {}]
                                            })),
                                            attributes: l(i.map(function(t) {
                                                return [t, e.attributes[t]]
                                            }))
                                        })
                                    })
                                },
                                requires: ["computeStyles"]
                            }
                        }, []),
                        m = n.useMemo(function() {
                            var t = {
                                onFirstUpdate: d.onFirstUpdate,
                                placement: d.placement,
                                strategy: d.strategy,
                                modifiers: [].concat(d.modifiers, [v, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return a()(s.current, t) ? s.current || t : (s.current = t, t)
                        }, [d.onFirstUpdate, d.placement, d.strategy, d.modifiers, v]),
                        y = n.useRef();
                    return u(function() {
                        y.current && y.current.setOptions(m)
                    }, [m]), u(function() {
                        if (null != t && null != e) {
                            var n = (i.createPopper || r.fi)(t, e, m);
                            return y.current = n,
                                function() {
                                    n.destroy(), y.current = null
                                }
                        }
                    }, [t, e, i.createPopper]), {
                        state: y.current ? y.current.state : null,
                        styles: p.styles,
                        attributes: p.attributes,
                        update: y.current ? y.current.update : null,
                        forceUpdate: y.current ? y.current.forceUpdate : null
                    }
                }
        },
        62742: function(t, e, i) {
            "use strict";
            i.d(e, {
                RC: function() {
                    return tI
                },
                Cd: function() {
                    return em
                },
                L8: function() {
                    return eA
                },
                Oz: function() {
                    return ty
                },
                $S: function() {
                    return eT
                },
                Ae: function() {
                    return ey
                },
                SW: function() {
                    return tF
                },
                OW: function() {
                    return r
                },
                dU: function() {
                    return z
                },
                p: function() {
                    return x
                },
                Gz: function() {
                    return C
                },
                M_: function() {
                    return A
                },
                kR: function() {
                    return j
                },
                gy: function() {
                    return V
                },
                uZ: function() {
                    return c
                },
                oc: function() {
                    return tt
                },
                ZB: function() {
                    return T
                },
                iC: function() {
                    return I
                },
                XD: function() {
                    return L
                },
                pS: function() {
                    return ts
                },
                Wd: function() {
                    return ta
                },
                KH: function() {
                    return F
                },
                Sp: function() {
                    return b
                },
                oW: function() {
                    return g
                },
                _X: function() {
                    return l
                },
                bS: function() {
                    return to
                },
                BE: function() {
                    return te
                },
                Dt: function() {
                    return ti
                },
                sZ: function() {
                    return u
                },
                KI: function() {
                    return v
                },
                Uv: function() {
                    return f
                },
                Gu: function() {
                    return p
                },
                vz: function() {
                    return Q
                },
                iz: function() {
                    return J
                },
                NA: function() {
                    return y
                },
                wm: function() {
                    return D
                },
                dB: function() {
                    return E
                },
                Ac: function() {
                    return R
                },
                Kr: function() {
                    return O
                },
                c8: function() {
                    return _
                },
                wA: function() {
                    return W
                },
                mx: function() {
                    return M
                },
                hT: function() {
                    return eu
                },
                aM: function() {
                    return th
                },
                Wt: function() {
                    return td
                },
                vd: function() {
                    return h
                },
                lN: function() {
                    return $
                },
                tX: function() {
                    return G
                },
                dp: function() {
                    return B
                },
                lC: function() {
                    return Y
                },
                Cs: function() {
                    return m
                },
                S6: function() {
                    return eI
                }
            });
            class n {
                constructor() {
                    this._listeners = new Map
                }
                addEventListener(t, e) {
                    var i;
                    this.removeEventListener(t, e), this._listeners.get(t) || this._listeners.set(t, []), null === (i = this._listeners.get(t)) || void 0 === i || i.push(e)
                }
                dispatchEvent(t, e) {
                    var i;
                    null === (i = this._listeners.get(t)) || void 0 === i || i.forEach(t => t(e))
                }
                hasEventListener(t) {
                    return !!this._listeners.get(t)
                }
                removeAllEventListeners(t) {
                    t ? this._listeners.delete(t) : this._listeners = new Map
                }
                removeEventListener(t, e) {
                    let i = this._listeners.get(t);
                    if (!i) return;
                    let n = i.length,
                        o = i.indexOf(e);
                    o < 0 || (1 === n ? this._listeners.delete(t) : i.splice(o, 1))
                }
            }
            class o {
                constructor(t, e, i) {
                    if ("number" != typeof t && t) this.x = t.x, this.y = t.y, this.z = t.z ? t.z : 0;
                    else if (void 0 !== t && void 0 !== e) this.x = t, this.y = e, this.z = null != i ? i : 0;
                    else throw Error("tsParticles - Vector3d not initialized correctly")
                }
                static get origin() {
                    return o.create(0, 0, 0)
                }
                get angle() {
                    return Math.atan2(this.y, this.x)
                }
                set angle(t) {
                    this.updateFromAngle(t, this.length)
                }
                get length() {
                    return Math.sqrt(this.getLengthSq())
                }
                set length(t) {
                    this.updateFromAngle(this.angle, t)
                }
                static clone(t) {
                    return o.create(t.x, t.y, t.z)
                }
                static create(t, e, i) {
                    return new o(t, e, i)
                }
                add(t) {
                    return o.create(this.x + t.x, this.y + t.y, this.z + t.z)
                }
                addTo(t) {
                    this.x += t.x, this.y += t.y, this.z += t.z
                }
                copy() {
                    return o.clone(this)
                }
                distanceTo(t) {
                    return this.sub(t).length
                }
                distanceToSq(t) {
                    return this.sub(t).getLengthSq()
                }
                div(t) {
                    return o.create(this.x / t, this.y / t, this.z / t)
                }
                divTo(t) {
                    this.x /= t, this.y /= t, this.z /= t
                }
                getLengthSq() {
                    return this.x ** 2 + this.y ** 2
                }
                mult(t) {
                    return o.create(this.x * t, this.y * t, this.z * t)
                }
                multTo(t) {
                    this.x *= t, this.y *= t, this.z *= t
                }
                rotate(t) {
                    return o.create(this.x * Math.cos(t) - this.y * Math.sin(t), this.x * Math.sin(t) + this.y * Math.cos(t), 0)
                }
                setTo(t) {
                    this.x = t.x, this.y = t.y, this.z = t.z ? t.z : 0
                }
                sub(t) {
                    return o.create(this.x - t.x, this.y - t.y, this.z - t.z)
                }
                subFrom(t) {
                    this.x -= t.x, this.y -= t.y, this.z -= t.z
                }
                updateFromAngle(t, e) {
                    this.x = Math.cos(t) * e, this.y = Math.sin(t) * e
                }
            }
            class r extends o {
                constructor(t, e) {
                    super(t, e, 0)
                }
                static get origin() {
                    return r.create(0, 0)
                }
                static clone(t) {
                    return r.create(t.x, t.y)
                }
                static create(t, e) {
                    return new r(t, e)
                }
            }
            let s = Math.random,
                a = new Map;

            function l(t) {
                return a.get(t) || (t => t)
            }

            function u() {
                return c(s(), 0, 1 - 1e-16)
            }

            function c(t, e, i) {
                return Math.min(Math.max(t, e), i)
            }

            function d(t, e, i, n) {
                return Math.floor((t * i + e * n) / (i + n))
            }

            function h(t) {
                let e = v(t),
                    i = f(t);
                return e === i && (i = 0), u() * (e - i) + i
            }

            function p(t) {
                return "number" == typeof t ? t : h(t)
            }

            function f(t) {
                return "number" == typeof t ? t : t.min
            }

            function v(t) {
                return "number" == typeof t ? t : t.max
            }

            function m(t, e) {
                if (t === e || void 0 === e && "number" == typeof t) return t;
                let i = f(t),
                    n = v(t);
                return void 0 !== e ? {
                    min: Math.min(i, e),
                    max: Math.max(n, e)
                } : m(i, n)
            }

            function y(t) {
                let e = t.random,
                    {
                        enable: i,
                        minimumValue: n
                    } = "boolean" == typeof e ? {
                        enable: e,
                        minimumValue: 0
                    } : e;
                return i ? p(m(t.value, n)) : p(t.value)
            }

            function g(t, e) {
                let i = t.x - e.x,
                    n = t.y - e.y;
                return {
                    dx: i,
                    dy: n,
                    distance: Math.sqrt(i ** 2 + n ** 2)
                }
            }

            function b(t, e) {
                return g(t, e).distance
            }

            function w(t, e, i, n) {
                return r.create(t.x * (i - n) / (i + n) + 2 * e.x * n / (i + n), t.y)
            }

            function x(t) {
                var e, i, n, o;
                return {
                    x: (null !== (i = null === (e = t.position) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : 100 * u()) * t.size.width / 100,
                    y: (null !== (o = null === (n = t.position) || void 0 === n ? void 0 : n.y) && void 0 !== o ? o : 100 * u()) * t.size.height / 100
                }
            }

            function C(t) {
                var e, i;
                let n = {
                    x: (null === (e = t.position) || void 0 === e ? void 0 : e.x) !== void 0 ? p(t.position.x) : void 0,
                    y: (null === (i = t.position) || void 0 === i ? void 0 : i.y) !== void 0 ? p(t.position.y) : void 0
                };
                return x({
                    size: t.size,
                    position: n
                })
            }

            function k(t) {
                return t ? t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t) : 1
            }

            function P(t, e, i, n, o, r) {
                let s = {
                    bounced: !1
                };
                return e.min < n.min || e.min > n.max || e.max < n.min || e.max > n.max || (t.max >= i.min && t.max <= (i.max + i.min) / 2 && o > 0 || t.min <= i.max && t.min > (i.max + i.min) / 2 && o < 0) && (s.velocity = -(o * r), s.bounced = !0), s
            }

            function O() {
                return "undefined" == typeof window || !window || void 0 === window.document || !window.document
            }

            function S(t) {
                if (!O() && "undefined" != typeof matchMedia) return matchMedia(t)
            }

            function E(t, e) {
                return t === e || e instanceof Array && e.indexOf(t) > -1
            }
            async function M(t, e) {
                try {
                    await document.fonts.load(`${null!=e?e:"400"} 36px '${null!=t?t:"Verdana"}'`)
                } catch (t) {}
            }

            function z(t) {
                return Math.floor(u() * t.length)
            }

            function _(t, e, i = !0) {
                return t[void 0 !== e && i ? e % t.length : z(t)]
            }

            function R(t, e, i, n, o) {
                var r;
                let s;
                return r = A(t, null != n ? n : 0), s = !0, o && "bottom" !== o || (s = r.top < e.height + i.x), s && (!o || "left" === o) && (s = r.right > i.x), s && (!o || "right" === o) && (s = r.left < e.width + i.y), s && (!o || "top" === o) && (s = r.bottom > i.y), s
            }

            function A(t, e) {
                return {
                    bottom: t.y + e,
                    left: t.x - e,
                    right: t.x + e,
                    top: t.y - e
                }
            }

            function T(t, ...e) {
                for (let i of e) {
                    if (null == i) continue;
                    if ("object" != typeof i) {
                        t = i;
                        continue
                    }
                    let e = Array.isArray(i);
                    for (let n in !e || "object" == typeof t && t && Array.isArray(t) ? !e && ("object" != typeof t || !t || Array.isArray(t)) && (t = {}) : t = [], i) {
                        if ("__proto__" === n) continue;
                        let e = i[n],
                            o = "object" == typeof e,
                            r = t;
                        r[n] = o && Array.isArray(e) ? e.map(t => T(r[n], t)) : T(r[n], e)
                    }
                }
                return t
            }

            function D(t, e) {
                return !!q(e, e => e.enable && E(t, e.mode))
            }

            function L(t, e, i) {
                F(e, e => {
                    let n = e.mode;
                    e.enable && E(t, n) && F(e.selectors, t => {
                        i(t, e)
                    })
                })
            }

            function I(t, e) {
                if (e && t) return q(t, t => (function(t, e) {
                    let i = F(e, e => t.matches(e));
                    return i instanceof Array ? i.some(t => t) : i
                })(e, t.selectors))
            }

            function V(t) {
                return {
                    position: t.getPosition(),
                    radius: t.getRadius(),
                    mass: t.getMass(),
                    velocity: t.velocity,
                    factor: r.create(y(t.options.bounce.horizontal), y(t.options.bounce.vertical))
                }
            }

            function j(t, e) {
                let {
                    x: i,
                    y: n
                } = t.velocity.sub(e.velocity), [o, r] = [t.position, e.position], {
                    dx: s,
                    dy: a
                } = g(r, o);
                if (i * s + n * a < 0) return;
                let l = -Math.atan2(a, s),
                    u = t.mass,
                    c = e.mass,
                    d = t.velocity.rotate(l),
                    h = e.velocity.rotate(l),
                    p = w(d, h, u, c),
                    f = w(h, d, u, c),
                    v = p.rotate(-l),
                    m = f.rotate(-l);
                t.velocity.x = v.x * t.factor.x, t.velocity.y = v.y * t.factor.y, e.velocity.x = m.x * e.factor.x, e.velocity.y = m.y * e.factor.y
            }

            function B(t, e) {
                let i = A(t.getPosition(), t.getRadius()),
                    n = P({
                        min: i.left,
                        max: i.right
                    }, {
                        min: i.top,
                        max: i.bottom
                    }, {
                        min: e.left,
                        max: e.right
                    }, {
                        min: e.top,
                        max: e.bottom
                    }, t.velocity.x, y(t.options.bounce.horizontal));
                n.bounced && (void 0 !== n.velocity && (t.velocity.x = n.velocity), void 0 !== n.position && (t.position.x = n.position));
                let o = P({
                    min: i.top,
                    max: i.bottom
                }, {
                    min: i.left,
                    max: i.right
                }, {
                    min: e.top,
                    max: e.bottom
                }, {
                    min: e.left,
                    max: e.right
                }, t.velocity.y, y(t.options.bounce.vertical));
                o.bounced && (void 0 !== o.velocity && (t.velocity.y = o.velocity), void 0 !== o.position && (t.position.y = o.position))
            }

            function F(t, e) {
                return t instanceof Array ? t.map((t, i) => e(t, i)) : e(t, 0)
            }

            function W(t, e, i) {
                return t instanceof Array ? _(t, e, i) : t
            }

            function q(t, e) {
                return t instanceof Array ? t.find((t, i) => e(t, i)) : e(t, 0) ? t : void 0
            }
            let U = "random",
                H = new Map;

            function Z(t) {
                H.set(t.key, t)
            }

            function N(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function G(t, e, i = !0) {
                if (!t) return;
                let n = "string" == typeof t ? {
                    value: t
                } : t;
                if ("string" == typeof n.value) return function t(e, i, n = !0) {
                    if (!e) return;
                    let o = "string" == typeof e ? {
                        value: e
                    } : e;
                    if ("string" == typeof o.value) return o.value === U ? K() : function(t) {
                        for (let [, e] of H)
                            if (t.startsWith(e.stringPrefix)) return e.parseString(t);
                        let e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, (t, e, i, n, o) => e + e + i + i + n + n + (void 0 !== o ? o + o : "")),
                            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
                        return i ? {
                            a: void 0 !== i[4] ? parseInt(i[4], 16) / 255 : 1,
                            b: parseInt(i[3], 16),
                            g: parseInt(i[2], 16),
                            r: parseInt(i[1], 16)
                        } : void 0
                    }(o.value);
                    if (o.value instanceof Array) return t({
                        value: _(o.value, i, n)
                    });
                    for (let [, t] of H) {
                        let e = t.handleColor(o);
                        if (e) return e
                    }
                }(n.value, e, i);
                if (n.value instanceof Array) return G({
                    value: _(n.value, e, i)
                });
                for (let [, t] of H) {
                    let e = t.handleRangeColor(n);
                    if (e) return e
                }
            }

            function $(t, e, i = !0) {
                let n = G(t, e, i);
                return n ? Y(n) : void 0
            }

            function Y(t) {
                let e = t.r / 255,
                    i = t.g / 255,
                    n = t.b / 255,
                    o = Math.max(e, i, n),
                    r = Math.min(e, i, n),
                    s = {
                        h: 0,
                        l: (o + r) / 2,
                        s: 0
                    };
                return o !== r && (s.s = s.l < .5 ? (o - r) / (o + r) : (o - r) / (2 - o - r), s.h = e === o ? (i - n) / (o - r) : s.h = i === o ? 2 + (n - e) / (o - r) : 4 + (e - i) / (o - r)), s.l *= 100, s.s *= 100, s.h *= 60, s.h < 0 && (s.h += 360), s.h >= 360 && (s.h -= 360), s
            }

            function X(t) {
                let e = {
                        b: 0,
                        g: 0,
                        r: 0
                    },
                    i = {
                        h: t.h / 360,
                        l: t.l / 100,
                        s: t.s / 100
                    };
                if (i.s) {
                    let t = i.l < .5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
                        n = 2 * i.l - t;
                    e.r = N(n, t, i.h + 1 / 3), e.g = N(n, t, i.h), e.b = N(n, t, i.h - 1 / 3)
                } else e.b = i.l, e.g = i.l, e.r = i.l;
                return e.r = Math.floor(255 * e.r), e.g = Math.floor(255 * e.g), e.b = Math.floor(255 * e.b), e
            }

            function K(t) {
                let e = null != t ? t : 0;
                return {
                    b: Math.floor(h(m(e, 256))),
                    g: Math.floor(h(m(e, 256))),
                    r: Math.floor(h(m(e, 256)))
                }
            }

            function J(t, e) {
                return `rgba(${t.r}, ${t.g}, ${t.b}, ${null!=e?e:1})`
            }

            function Q(t, e) {
                return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null!=e?e:1})`
            }

            function tt(t, e, i, n) {
                let o = t,
                    r = e;
                return void 0 === o.r && (o = X(t)), void 0 === r.r && (r = X(e)), {
                    b: d(o.b, r.b, i, n),
                    g: d(o.g, r.g, i, n),
                    r: d(o.r, r.r, i, n)
                }
            }

            function te(t, e, i) {
                var n, o;
                if (i === U) return K();
                if ("mid" !== i) return i; {
                    let i = null !== (n = t.getFillColor()) && void 0 !== n ? n : t.getStrokeColor(),
                        r = null !== (o = null == e ? void 0 : e.getFillColor()) && void 0 !== o ? o : null == e ? void 0 : e.getStrokeColor();
                    if (i && r && e) return tt(i, r, t.getRadius(), e.getRadius()); {
                        let t = null != i ? i : r;
                        if (t) return X(t)
                    }
                }
            }

            function ti(t, e, i) {
                let n = "string" == typeof t ? t : t.value;
                return n === U ? i ? G({
                    value: n
                }) : e ? U : "mid" : "mid" === n ? "mid" : G({
                    value: n
                })
            }

            function tn(t) {
                return void 0 !== t ? {
                    h: t.h.value,
                    s: t.s.value,
                    l: t.l.value
                } : void 0
            }

            function to(t, e, i) {
                let n = {
                    h: {
                        enable: !1,
                        value: t.h
                    },
                    s: {
                        enable: !1,
                        value: t.s
                    },
                    l: {
                        enable: !1,
                        value: t.l
                    }
                };
                return e && (tr(n.h, e.h, i), tr(n.s, e.s, i), tr(n.l, e.l, i)), n
            }

            function tr(t, e, i) {
                t.enable = e.enable, t.enable ? (t.velocity = p(e.speed) / 100 * i, t.decay = 1 - p(e.decay), t.status = "increasing", t.loops = 0, t.maxLoops = p(e.count), e.sync || (t.velocity *= u(), t.value *= u()), t.initialValue = t.value) : t.velocity = 0
            }

            function ts(t, e, i) {
                t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath()
            }

            function ta(t, e, i, n) {
                t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.lineTo(n.x, n.y), t.closePath()
            }

            function tl(t, e) {
                t.clearRect(0, 0, e.width, e.height)
            }
            let tu = "generated",
                tc = "touchend",
                td = "pointermove",
                th = "pointerleave";
            class tp {
                constructor(t) {
                    this.container = t, this.size = {
                        height: 0,
                        width: 0
                    }, this._context = null, this._generated = !1, this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = [], this._mutationObserver = O() || "undefined" == typeof MutationObserver ? void 0 : new MutationObserver(t => {
                        for (let e of t) "attributes" === e.type && "style" === e.attributeName && this._repairStyle()
                    })
                }
                get _fullScreen() {
                    return this.container.actualOptions.fullScreen.enable
                }
                clear() {
                    let t = this.container.actualOptions,
                        e = t.particles.move.trail,
                        i = this._trailFill;
                    t.backgroundMask.enable ? this.paint() : e.enable && e.length > 0 && i ? i.color ? this._paintBase(J(i.color, i.opacity)) : i.image && this._paintImage(i.image, i.opacity) : this.draw(t => {
                        tl(t, this.size)
                    })
                }
                destroy() {
                    var t, e;
                    null === (t = this._mutationObserver) || void 0 === t || t.disconnect(), this._generated ? null === (e = this.element) || void 0 === e || e.remove() : this._resetOriginalStyle(), this.stop(), this._preDrawUpdaters = [], this._postDrawUpdaters = [], this._resizePlugins = [], this._colorPlugins = []
                }
                draw(t) {
                    if (this._context) return t(this._context)
                }
                drawParticle(t, e) {
                    var i;
                    if (t.spawning || t.destroyed) return;
                    let n = t.getRadius();
                    if (n <= 0) return;
                    let o = t.getFillColor(),
                        r = null !== (i = t.getStrokeColor()) && void 0 !== i ? i : o,
                        [s, a] = this._getPluginParticleColors(t);
                    s || (s = o), a || (a = r), (s || a) && this.draw(i => {
                        var o, r, l, u;
                        let c = this.container.actualOptions,
                            d = t.options.zIndex,
                            h = (1 - t.zIndexFactor) ** d.opacityRate,
                            p = null !== (l = null !== (o = t.bubble.opacity) && void 0 !== o ? o : null === (r = t.opacity) || void 0 === r ? void 0 : r.value) && void 0 !== l ? l : 1,
                            f = null !== (u = t.strokeOpacity) && void 0 !== u ? u : p,
                            v = p * h,
                            m = {},
                            y = {
                                fill: s ? Q(s, v) : void 0
                            };
                        y.stroke = a ? Q(a, f * h) : y.fill, this._applyPreDrawUpdaters(i, t, n, v, y, m),
                            function(t) {
                                var e, i, n, o, r;
                                let {
                                    container: s,
                                    context: a,
                                    particle: l,
                                    delta: u,
                                    colorStyles: c,
                                    backgroundMask: d,
                                    composite: h,
                                    radius: p,
                                    opacity: f,
                                    shadow: v,
                                    transform: m
                                } = t, y = l.getPosition(), g = l.rotation + (l.pathRotation ? l.velocity.angle : 0), b = {
                                    sin: Math.sin(g),
                                    cos: Math.cos(g)
                                }, w = {
                                    a: b.cos * (null !== (e = m.a) && void 0 !== e ? e : 1),
                                    b: b.sin * (null !== (i = m.b) && void 0 !== i ? i : 1),
                                    c: -b.sin * (null !== (n = m.c) && void 0 !== n ? n : 1),
                                    d: b.cos * (null !== (o = m.d) && void 0 !== o ? o : 1)
                                };
                                a.setTransform(w.a, w.b, w.c, w.d, y.x, y.y), a.beginPath(), d && (a.globalCompositeOperation = h);
                                let x = l.shadowColor;
                                v.enable && x && (a.shadowBlur = v.blur, a.shadowColor = J(x), a.shadowOffsetX = v.offset.x, a.shadowOffsetY = v.offset.y), c.fill && (a.fillStyle = c.fill);
                                let C = null !== (r = l.strokeWidth) && void 0 !== r ? r : 0;
                                a.lineWidth = C, c.stroke && (a.strokeStyle = c.stroke),
                                    function(t, e, i, n, o, r) {
                                        if (!i.shape) return;
                                        let s = t.drawers.get(i.shape);
                                        s && s.draw(e, i, n, o, r, t.retina.pixelRatio)
                                    }(s, a, l, p, f, u), C > 0 && a.stroke(), l.close && a.closePath(), l.fill && a.fill(),
                                    function(t, e, i, n, o, r) {
                                        if (!i.shape) return;
                                        let s = t.drawers.get(i.shape);
                                        (null == s ? void 0 : s.afterEffect) && s.afterEffect(e, i, n, o, r, t.retina.pixelRatio)
                                    }(s, a, l, p, f, u), a.globalCompositeOperation = "source-over", a.setTransform(1, 0, 0, 1, 0, 0)
                            }({
                                container: this.container,
                                context: i,
                                particle: t,
                                delta: e,
                                colorStyles: y,
                                backgroundMask: c.backgroundMask.enable,
                                composite: c.backgroundMask.composite,
                                radius: n * (1 - t.zIndexFactor) ** d.sizeRate,
                                opacity: v,
                                shadow: t.options.shadow,
                                transform: m
                            }), this._applyPostDrawUpdaters(t)
                    })
                }
                drawParticlePlugin(t, e, i) {
                    this.draw(n => {
                        t.drawParticle && t.drawParticle(n, e, i)
                    })
                }
                drawPlugin(t, e) {
                    this.draw(i => {
                        t.draw && t.draw(i, e)
                    })
                }
                async init() {
                    var t;
                    this.resize(), this._initStyle(), this._initCover();
                    try {
                        await this._initTrail()
                    } catch (t) {
                        console.error(t)
                    }
                    this.initBackground(), this.element && (null === (t = this._mutationObserver) || void 0 === t || t.observe(this.element, {
                        attributes: !0
                    })), this.initUpdaters(), this.initPlugins(), this.paint()
                }
                initBackground() {
                    let t = this.container.actualOptions.background,
                        e = this.element,
                        i = null == e ? void 0 : e.style;
                    if (i) {
                        if (t.color) {
                            let e = G(t.color);
                            i.backgroundColor = e ? J(e, t.opacity) : ""
                        } else i.backgroundColor = "";
                        i.backgroundImage = t.image || "", i.backgroundPosition = t.position || "", i.backgroundRepeat = t.repeat || "", i.backgroundSize = t.size || ""
                    }
                }
                initPlugins() {
                    for (let [, t] of (this._resizePlugins = [], this.container.plugins)) t.resize && this._resizePlugins.push(t), (t.particleFillColor || t.particleStrokeColor) && this._colorPlugins.push(t)
                }
                initUpdaters() {
                    for (let t of (this._preDrawUpdaters = [], this._postDrawUpdaters = [], this.container.particles.updaters)) t.afterDraw && this._postDrawUpdaters.push(t), (t.getColorStyles || t.getTransformValues || t.beforeDraw) && this._preDrawUpdaters.push(t)
                }
                loadCanvas(t) {
                    var e, i;
                    this._generated && (null === (e = this.element) || void 0 === e || e.remove()), this._generated = t.dataset && tu in t.dataset ? "true" === t.dataset[tu] : this._generated, this.element = t, this.element.ariaHidden = "true", this._originalStyle = T({}, this.element.style), this.size.height = t.offsetHeight, this.size.width = t.offsetWidth, this._context = this.element.getContext("2d"), null === (i = this._mutationObserver) || void 0 === i || i.observe(this.element, {
                        attributes: !0
                    }), this.container.retina.init(), this.initBackground()
                }
                paint() {
                    let t = this.container.actualOptions;
                    this.draw(e => {
                        t.backgroundMask.enable && t.backgroundMask.cover ? (tl(e, this.size), this._paintBase(this._coverColorStyle)) : this._paintBase()
                    })
                }
                resize() {
                    if (!this.element) return;
                    let t = this.container,
                        e = t.retina.pixelRatio,
                        i = t.canvas.size,
                        n = {
                            width: this.element.offsetWidth * e,
                            height: this.element.offsetHeight * e
                        };
                    if (n.height === i.height && n.width === i.width && n.height === this.element.height && n.width === this.element.width) return;
                    let o = Object.assign({}, i);
                    this.element.width = i.width = this.element.offsetWidth * e, this.element.height = i.height = this.element.offsetHeight * e, this.container.started && (this.resizeFactor = {
                        width: i.width / o.width,
                        height: i.height / o.height
                    })
                }
                stop() {
                    this.draw(t => {
                        tl(t, this.size)
                    })
                }
                async windowResize() {
                    if (!this.element) return;
                    this.resize();
                    let t = this.container,
                        e = t.updateActualOptions();
                    t.particles.setDensity(), this._applyResizePlugins(), e && await t.refresh()
                }
                _applyPostDrawUpdaters(t) {
                    var e;
                    for (let i of this._postDrawUpdaters) null === (e = i.afterDraw) || void 0 === e || e.call(i, t)
                }
                _applyPreDrawUpdaters(t, e, i, n, o, r) {
                    var s;
                    for (let a of this._preDrawUpdaters) {
                        if (a.getColorStyles) {
                            let {
                                fill: r,
                                stroke: s
                            } = a.getColorStyles(e, t, i, n);
                            r && (o.fill = r), s && (o.stroke = s)
                        }
                        if (a.getTransformValues) {
                            let t = a.getTransformValues(e);
                            for (let e in t) ! function(t, e, i) {
                                var n;
                                let o = e[i];
                                void 0 !== o && (t[i] = (null !== (n = t[i]) && void 0 !== n ? n : 1) * o)
                            }(r, t, e)
                        }
                        null === (s = a.beforeDraw) || void 0 === s || s.call(a, e)
                    }
                }
                _applyResizePlugins() {
                    for (let t of this._resizePlugins) t.resize && t.resize()
                }
                _getPluginParticleColors(t) {
                    let e, i;
                    for (let n of this._colorPlugins)
                        if (!e && n.particleFillColor && (e = $(n.particleFillColor(t))), !i && n.particleStrokeColor && (i = $(n.particleStrokeColor(t))), e && i) break;
                    return [e, i]
                }
                _initCover() {
                    let t = this.container.actualOptions.backgroundMask.cover,
                        e = G(t.color);
                    if (e) {
                        let i = {
                            r: e.r,
                            g: e.g,
                            b: e.b,
                            a: t.opacity
                        };
                        this._coverColorStyle = J(i, i.a)
                    }
                }
                _initStyle() {
                    let t = this.element,
                        e = this.container.actualOptions;
                    if (t)
                        for (let i in this._fullScreen ? (this._originalStyle = T({}, t.style), this._setFullScreenStyle()) : this._resetOriginalStyle(), e.style) {
                            if (!i || !e.style) continue;
                            let n = e.style[i];
                            n && t.style.setProperty(i, n, "important")
                        }
                }
                async _initTrail() {
                    let t = this.container.actualOptions,
                        e = t.particles.move.trail,
                        i = e.fill;
                    if (e.enable) {
                        if (i.color) {
                            let e = G(i.color);
                            if (!e) return;
                            let n = t.particles.move.trail;
                            this._trailFill = {
                                color: Object.assign({}, e),
                                opacity: 1 / n.length
                            }
                        } else await new Promise((t, n) => {
                            if (!i.image) return;
                            let o = document.createElement("img");
                            o.addEventListener("load", () => {
                                this._trailFill = {
                                    image: o,
                                    opacity: 1 / e.length
                                }, t()
                            }), o.addEventListener("error", t => {
                                n(t.error)
                            }), o.src = i.image
                        })
                    }
                }
                _paintBase(t) {
                    this.draw(e => {
                        var i;
                        i = this.size, e.fillStyle = null != t ? t : "rgba(0,0,0,0)", e.fillRect(0, 0, i.width, i.height)
                    })
                }
                _paintImage(t, e) {
                    this.draw(i => {
                        var n;
                        n = this.size, t && (i.globalAlpha = e, i.drawImage(t, 0, 0, n.width, n.height), i.globalAlpha = 1)
                    })
                }
                _repairStyle() {
                    var t, e;
                    let i = this.element;
                    i && (null === (t = this._mutationObserver) || void 0 === t || t.disconnect(), this._initStyle(), this.initBackground(), null === (e = this._mutationObserver) || void 0 === e || e.observe(i, {
                        attributes: !0
                    }))
                }
                _resetOriginalStyle() {
                    let t = this.element,
                        e = this._originalStyle;
                    t && e && (t.style.position = e.position, t.style.zIndex = e.zIndex, t.style.top = e.top, t.style.left = e.left, t.style.width = e.width, t.style.height = e.height)
                }
                _setFullScreenStyle() {
                    let t = this.element;
                    if (!t) return;
                    let e = "important";
                    t.style.setProperty("position", "fixed", e), t.style.setProperty("z-index", this.container.actualOptions.fullScreen.zIndex.toString(10), e), t.style.setProperty("top", "0", e), t.style.setProperty("left", "0", e), t.style.setProperty("width", "100%", e), t.style.setProperty("height", "100%", e)
                }
            }

            function tf(t, e, i, n, o) {
                if (n) {
                    let n = {
                        passive: !0
                    };
                    "boolean" == typeof o ? n.capture = o : void 0 !== o && (n = o), t.addEventListener(e, i, n)
                } else t.removeEventListener(e, i, o)
            }
            class tv {
                constructor(t) {
                    this.container = t, this.canPush = !0, this.handlers = {
                        mouseMove: t => this.mouseTouchMove(t),
                        touchStart: t => this.mouseTouchMove(t),
                        touchMove: t => this.mouseTouchMove(t),
                        touchEnd: () => this.mouseTouchFinish(),
                        mouseLeave: () => this.mouseTouchFinish(),
                        touchCancel: () => this.mouseTouchFinish(),
                        touchEndClick: t => this.mouseTouchClick(t),
                        mouseUp: t => this.mouseTouchClick(t),
                        mouseDown: () => this.mouseDown(),
                        visibilityChange: () => this.handleVisibilityChange(),
                        themeChange: t => this.handleThemeChange(t),
                        oldThemeChange: t => this.handleThemeChange(t),
                        resize: () => this.handleWindowResize()
                    }
                }
                addListeners() {
                    this.manageListeners(!0)
                }
                removeListeners() {
                    this.manageListeners(!1)
                }
                doMouseTouchClick(t) {
                    let e = this.container,
                        i = e.actualOptions;
                    if (this.canPush) {
                        let t = e.interactivity.mouse,
                            n = t.position;
                        if (!n) return;
                        t.clickPosition = Object.assign({}, n), t.clickTime = new Date().getTime(), F(i.interactivity.events.onClick.mode, t => this.handleClickMode(t))
                    }
                    "touchend" === t.type && setTimeout(() => this.mouseTouchFinish(), 500)
                }
                handleClickMode(t) {
                    this.container.handleClickMode(t)
                }
                handleThemeChange(t) {
                    let e = this.container,
                        i = e.options,
                        n = i.defaultThemes,
                        o = t.matches ? n.dark : n.light,
                        r = i.themes.find(t => t.name === o);
                    r && r.default.auto && e.loadTheme(o)
                }
                handleVisibilityChange() {
                    let t = this.container,
                        e = t.actualOptions;
                    this.mouseTouchFinish(), e.pauseOnBlur && ((null == document ? void 0 : document.hidden) ? (t.pageHidden = !0, t.pause()) : (t.pageHidden = !1, t.getAnimationStatus() ? t.play(!0) : t.draw(!0)))
                }
                handleWindowResize() {
                    this.resizeTimeout && (clearTimeout(this.resizeTimeout), delete this.resizeTimeout), this.resizeTimeout = setTimeout(async () => {
                        var t;
                        return null === (t = this.container.canvas) || void 0 === t ? void 0 : t.windowResize()
                    }, 1e3 * this.container.actualOptions.interactivity.events.resize.delay)
                }
                manageListeners(t) {
                    var e;
                    let i = this.handlers,
                        n = this.container,
                        o = n.actualOptions,
                        r = o.interactivity.detectsOn,
                        s = th;
                    if ("window" === r) n.interactivity.element = window, s = "pointerout";
                    else if ("parent" === r && n.canvas.element) {
                        let t = n.canvas.element;
                        n.interactivity.element = null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode
                    } else n.interactivity.element = n.canvas.element;
                    let a = S("(prefers-color-scheme: dark)");
                    a && (void 0 !== a.addEventListener ? tf(a, "change", i.themeChange, t) : void 0 !== a.addListener && (t ? a.addListener(i.oldThemeChange) : a.removeListener(i.oldThemeChange)));
                    let l = n.interactivity.element;
                    l && ((o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) && (tf(l, td, i.mouseMove, t), tf(l, "touchstart", i.touchStart, t), tf(l, "touchmove", i.touchMove, t), o.interactivity.events.onClick.enable ? (tf(l, tc, i.touchEndClick, t), tf(l, "pointerup", i.mouseUp, t), tf(l, "pointerdown", i.mouseDown, t)) : tf(l, tc, i.touchEnd, t), tf(l, s, i.mouseLeave, t), tf(l, "touchcancel", i.touchCancel, t)), n.canvas.element && (n.canvas.element.style.pointerEvents = l === n.canvas.element ? "initial" : "none"), o.interactivity.events.resize && ("undefined" != typeof ResizeObserver ? this.resizeObserver && !t ? (n.canvas.element && this.resizeObserver.unobserve(n.canvas.element), this.resizeObserver.disconnect(), delete this.resizeObserver) : !this.resizeObserver && t && n.canvas.element && (this.resizeObserver = new ResizeObserver(t => {
                        t.find(t => t.target === n.canvas.element) && this.handleWindowResize()
                    }), this.resizeObserver.observe(n.canvas.element)) : tf(window, "resize", i.resize, t)), document && tf(document, "visibilitychange", i.visibilityChange, t, !1))
                }
                mouseDown() {
                    let t = this.container.interactivity;
                    if (t) {
                        let e = t.mouse;
                        e.clicking = !0, e.downPosition = e.position
                    }
                }
                mouseTouchClick(t) {
                    let e = this.container,
                        i = e.actualOptions,
                        n = e.interactivity.mouse;
                    n.inside = !0;
                    let o = !1,
                        r = n.position;
                    if (r && i.interactivity.events.onClick.enable) {
                        for (let [, t] of e.plugins)
                            if (t.clickPositionValid && (o = t.clickPositionValid(r))) break;
                        o || this.doMouseTouchClick(t), n.clicking = !1
                    }
                }
                mouseTouchFinish() {
                    let t = this.container.interactivity;
                    if (!t) return;
                    let e = t.mouse;
                    delete e.position, delete e.clickPosition, delete e.downPosition, t.status = th, e.inside = !1, e.clicking = !1
                }
                mouseTouchMove(t) {
                    var e, i, n, o, r, s, a;
                    let l;
                    let u = this.container,
                        c = u.actualOptions;
                    if (!(null === (e = u.interactivity) || void 0 === e ? void 0 : e.element)) return;
                    u.interactivity.mouse.inside = !0;
                    let d = u.canvas.element;
                    if (t.type.startsWith("pointer")) {
                        if (this.canPush = !0, u.interactivity.element === window) {
                            if (d) {
                                let e = d.getBoundingClientRect();
                                l = {
                                    x: t.clientX - e.left,
                                    y: t.clientY - e.top
                                }
                            }
                        } else if ("parent" === c.interactivity.detectsOn) {
                            let e = t.target,
                                o = t.currentTarget,
                                r = u.canvas.element;
                            if (e && o && r) {
                                let i = e.getBoundingClientRect(),
                                    n = o.getBoundingClientRect(),
                                    s = r.getBoundingClientRect();
                                l = {
                                    x: t.offsetX + 2 * i.left - (n.left + s.left),
                                    y: t.offsetY + 2 * i.top - (n.top + s.top)
                                }
                            } else l = {
                                x: null !== (i = t.offsetX) && void 0 !== i ? i : t.clientX,
                                y: null !== (n = t.offsetY) && void 0 !== n ? n : t.clientY
                            }
                        } else t.target === u.canvas.element && (l = {
                            x: null !== (o = t.offsetX) && void 0 !== o ? o : t.clientX,
                            y: null !== (r = t.offsetY) && void 0 !== r ? r : t.clientY
                        })
                    } else {
                        this.canPush = "touchmove" !== t.type;
                        let e = t.touches[t.touches.length - 1],
                            i = null == d ? void 0 : d.getBoundingClientRect();
                        l = {
                            x: e.clientX - (null !== (s = null == i ? void 0 : i.left) && void 0 !== s ? s : 0),
                            y: e.clientY - (null !== (a = null == i ? void 0 : i.top) && void 0 !== a ? a : 0)
                        }
                    }
                    let h = u.retina.pixelRatio;
                    l && (l.x *= h, l.y *= h), u.interactivity.mouse.position = l, u.interactivity.status = td
                }
            }
            class tm {
                constructor(t) {
                    this.container = t
                }
                async nextFrame(t) {
                    var e;
                    try {
                        let i = this.container;
                        if (!i.smooth && void 0 !== i.lastFrameTime && t < i.lastFrameTime + 1e3 / i.fpsLimit) {
                            i.draw(!1);
                            return
                        }
                        null !== (e = i.lastFrameTime) && void 0 !== e || (i.lastFrameTime = t);
                        let n = function(t, e = 60, i = !1) {
                            return {
                                value: t,
                                factor: i ? 60 / e : 60 * t / 1e3
                            }
                        }(t - i.lastFrameTime, i.fpsLimit, i.smooth);
                        if (i.lifeTime += n.value, i.lastFrameTime = t, n.value > 1e3) {
                            i.draw(!1);
                            return
                        }
                        if (await i.particles.draw(n), i.duration > 0 && i.lifeTime > i.duration) {
                            i.destroy();
                            return
                        }
                        i.getAnimationStatus() && i.draw(!1)
                    } catch (t) {
                        console.error("tsParticles error in animation loop", t)
                    }
                }
            }
            class ty {
                constructor() {
                    this.value = ""
                }
                static create(t, e) {
                    let i = new ty;
                    return i.load(t), void 0 !== e && ("string" == typeof e || e instanceof Array ? i.load({
                        value: e
                    }) : i.load(e)), i
                }
                load(t) {
                    (null == t ? void 0 : t.value) !== void 0 && (this.value = t.value)
                }
            }
            class tg {
                constructor() {
                    this.color = new ty, this.color.value = "", this.image = "", this.position = "", this.repeat = "", this.size = "", this.opacity = 1
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = ty.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image), void 0 !== t.position && (this.position = t.position), void 0 !== t.repeat && (this.repeat = t.repeat), void 0 !== t.size && (this.size = t.size), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class tb {
                constructor() {
                    this.color = new ty, this.color.value = "#fff", this.opacity = 1
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = ty.create(this.color, t.color)), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class tw {
                constructor() {
                    this.composite = "destination-out", this.cover = new tb, this.enable = !1
                }
                load(t) {
                    if (t) {
                        if (void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover) {
                            let e = t.cover,
                                i = "string" == typeof t.cover ? {
                                    color: t.cover
                                } : t.cover;
                            this.cover.load(void 0 !== e.color ? e : {
                                color: i
                            })
                        }
                        void 0 !== t.enable && (this.enable = t.enable)
                    }
                }
            }
            class tx {
                constructor() {
                    this.enable = !0, this.zIndex = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.zIndex && (this.zIndex = t.zIndex))
                }
            }
            class tC {
                constructor() {
                    this.enable = !1, this.mode = []
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode))
                }
            }
            class tk {
                constructor() {
                    this.selectors = [], this.enable = !1, this.mode = [], this.type = "circle"
                }
                get el() {
                    return this.elementId
                }
                set el(t) {
                    this.elementId = t
                }
                get elementId() {
                    return this.ids
                }
                set elementId(t) {
                    this.ids = t
                }
                get ids() {
                    return F(this.selectors, t => t.replace("#", ""))
                }
                set ids(t) {
                    this.selectors = F(t, t => `#${t}`)
                }
                load(t) {
                    var e, i;
                    if (!t) return;
                    let n = null !== (i = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) && void 0 !== i ? i : t.el;
                    void 0 !== n && (this.ids = n), void 0 !== t.selectors && (this.selectors = t.selectors), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.type && (this.type = t.type)
                }
            }
            class tP {
                constructor() {
                    this.enable = !1, this.force = 2, this.smooth = 10
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.force && (this.force = t.force), void 0 !== t.smooth && (this.smooth = t.smooth))
                }
            }
            class tO {
                constructor() {
                    this.enable = !1, this.mode = [], this.parallax = new tP
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.parallax.load(t.parallax))
                }
            }
            class tS {
                constructor() {
                    this.delay = .5, this.enable = !0
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.enable && (this.enable = t.enable))
                }
            }
            class tE {
                constructor() {
                    this.onClick = new tC, this.onDiv = new tk, this.onHover = new tO, this.resize = new tS
                }
                get onclick() {
                    return this.onClick
                }
                set onclick(t) {
                    this.onClick = t
                }
                get ondiv() {
                    return this.onDiv
                }
                set ondiv(t) {
                    this.onDiv = t
                }
                get onhover() {
                    return this.onHover
                }
                set onhover(t) {
                    this.onHover = t
                }
                load(t) {
                    var e, i, n;
                    if (!t) return;
                    this.onClick.load(null !== (e = t.onClick) && void 0 !== e ? e : t.onclick);
                    let o = null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv;
                    void 0 !== o && (this.onDiv = F(o, t => {
                        let e = new tk;
                        return e.load(t), e
                    })), this.onHover.load(null !== (n = t.onHover) && void 0 !== n ? n : t.onhover), "boolean" == typeof t.resize ? this.resize.enable = t.resize : this.resize.load(t.resize)
                }
            }
            class tM {
                constructor(t, e) {
                    this._engine = t, this._container = e
                }
                load(t) {
                    if (t && this._container) {
                        let e = this._engine.plugins.interactors.get(this._container);
                        if (e)
                            for (let i of e) i.loadModeOptions && i.loadModeOptions(this, t)
                    }
                }
            }
            class tz {
                constructor(t, e) {
                    this.detectsOn = "window", this.events = new tE, this.modes = new tM(t, e)
                }
                get detect_on() {
                    return this.detectsOn
                }
                set detect_on(t) {
                    this.detectsOn = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    let i = null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on;
                    void 0 !== i && (this.detectsOn = i), this.events.load(t.events), this.modes.load(t.modes)
                }
            }
            class t_ {
                load(t) {
                    var e, i;
                    t && (void 0 !== t.position && (this.position = {
                        x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
                        y: null !== (i = t.position.y) && void 0 !== i ? i : 50
                    }), void 0 !== t.options && (this.options = T({}, t.options)))
                }
            }
            class tR {
                constructor() {
                    this.maxWidth = 1 / 0, this.options = {}, this.mode = "canvas"
                }
                load(t) {
                    t && (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth), void 0 !== t.mode && ("screen" === t.mode ? this.mode = "screen" : this.mode = "canvas"), void 0 !== t.options && (this.options = T({}, t.options)))
                }
            }
            class tA {
                constructor() {
                    this.auto = !1, this.mode = "any", this.value = !1
                }
                load(t) {
                    t && (void 0 !== t.auto && (this.auto = t.auto), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value))
                }
            }
            class tT {
                constructor() {
                    this.name = "", this.default = new tA
                }
                load(t) {
                    t && (void 0 !== t.name && (this.name = t.name), this.default.load(t.default), void 0 !== t.options && (this.options = T({}, t.options)))
                }
            }
            class tD {
                constructor() {
                    this.count = 0, this.enable = !1, this.offset = 0, this.speed = 1, this.decay = 0, this.sync = !0
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = m(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (this.offset = m(t.offset)), void 0 !== t.speed && (this.speed = m(t.speed)), void 0 !== t.decay && (this.decay = m(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class tL {
                constructor() {
                    this.h = new tD, this.s = new tD, this.l = new tD
                }
                load(t) {
                    t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l))
                }
            }
            class tI extends ty {
                constructor() {
                    super(), this.animation = new tL
                }
                static create(t, e) {
                    let i = new tI;
                    return i.load(t), void 0 !== e && ("string" == typeof e || e instanceof Array ? i.load({
                        value: e
                    }) : i.load(e)), i
                }
                load(t) {
                    if (super.load(t), !t) return;
                    let e = t.animation;
                    void 0 !== e && (void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation))
                }
            }
            class tV {
                constructor() {
                    this.speed = 2
                }
                load(t) {
                    t && void 0 !== t.speed && (this.speed = t.speed)
                }
            }
            class tj {
                constructor() {
                    this.enable = !0, this.retries = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.retries && (this.retries = t.retries))
                }
            }
            class tB {
                constructor() {
                    this.enable = !1, this.minimumValue = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue))
                }
            }
            class tF {
                constructor() {
                    this.random = new tB, this.value = 0
                }
                load(t) {
                    t && ("boolean" == typeof t.random ? this.random.enable = t.random : this.random.load(t.random), void 0 !== t.value && (this.value = m(t.value, this.random.enable ? this.random.minimumValue : void 0)))
                }
            }
            class tW extends tF {
                constructor() {
                    super(), this.random.minimumValue = .1, this.value = 1
                }
            }
            class tq {
                constructor() {
                    this.horizontal = new tW, this.vertical = new tW
                }
                load(t) {
                    t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical))
                }
            }
            class tU {
                constructor() {
                    this.absorb = new tV, this.bounce = new tq, this.enable = !1, this.mode = "bounce", this.overlap = new tj
                }
                load(t) {
                    t && (this.absorb.load(t.absorb), this.bounce.load(t.bounce), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode), this.overlap.load(t.overlap))
                }
            }
            class tH {
                constructor() {
                    this.offset = 0, this.value = 90
                }
                load(t) {
                    t && (void 0 !== t.offset && (this.offset = m(t.offset)), void 0 !== t.value && (this.value = m(t.value)))
                }
            }
            class tZ {
                constructor() {
                    this.distance = 200, this.enable = !1, this.rotate = {
                        x: 3e3,
                        y: 3e3
                    }
                }
                get rotateX() {
                    return this.rotate.x
                }
                set rotateX(t) {
                    this.rotate.x = t
                }
                get rotateY() {
                    return this.rotate.y
                }
                set rotateY(t) {
                    this.rotate.y = t
                }
                load(t) {
                    var e, i, n, o;
                    if (!t) return;
                    void 0 !== t.distance && (this.distance = m(t.distance)), void 0 !== t.enable && (this.enable = t.enable);
                    let r = null !== (i = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) && void 0 !== i ? i : t.rotateX;
                    void 0 !== r && (this.rotate.x = r);
                    let s = null !== (o = null === (n = t.rotate) || void 0 === n ? void 0 : n.y) && void 0 !== o ? o : t.rotateY;
                    void 0 !== s && (this.rotate.y = s)
                }
            }
            class tN {
                constructor() {
                    this.x = 50, this.y = 50, this.mode = "percent", this.radius = 0
                }
                load(t) {
                    t && (void 0 !== t.x && (this.x = t.x), void 0 !== t.y && (this.y = t.y), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
            class tG {
                constructor() {
                    this.acceleration = 9.81, this.enable = !1, this.inverse = !1, this.maxSpeed = 50
                }
                load(t) {
                    t && (void 0 !== t.acceleration && (this.acceleration = m(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.inverse && (this.inverse = t.inverse), void 0 !== t.maxSpeed && (this.maxSpeed = m(t.maxSpeed)))
                }
            }
            class t$ {
                constructor() {
                    this.clamp = !0, this.delay = new tF, this.enable = !1, this.options = {}
                }
                load(t) {
                    t && (void 0 !== t.clamp && (this.clamp = t.clamp), this.delay.load(t.delay), void 0 !== t.enable && (this.enable = t.enable), this.generator = t.generator, t.options && (this.options = T(this.options, t.options)))
                }
            }
            class tY {
                load(t) {
                    t && (void 0 !== t.color && (this.color = ty.create(this.color, t.color)), void 0 !== t.image && (this.image = t.image))
                }
            }
            class tX {
                constructor() {
                    this.enable = !1, this.length = 10, this.fill = new tY
                }
                get fillColor() {
                    return this.fill.color
                }
                set fillColor(t) {
                    this.fill.load({
                        color: t
                    })
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), (void 0 !== t.fill || void 0 !== t.fillColor) && this.fill.load(t.fill || {
                        color: t.fillColor
                    }), void 0 !== t.length && (this.length = t.length))
                }
            }
            class tK {
                constructor() {
                    this.default = "out"
                }
                load(t) {
                    var e, i, n, o;
                    t && (void 0 !== t.default && (this.default = t.default), this.bottom = null !== (e = t.bottom) && void 0 !== e ? e : t.default, this.left = null !== (i = t.left) && void 0 !== i ? i : t.default, this.right = null !== (n = t.right) && void 0 !== n ? n : t.default, this.top = null !== (o = t.top) && void 0 !== o ? o : t.default)
                }
            }
            class tJ {
                constructor() {
                    this.acceleration = 0, this.enable = !1
                }
                load(t) {
                    t && (void 0 !== t.acceleration && (this.acceleration = m(t.acceleration)), void 0 !== t.enable && (this.enable = t.enable), this.position = t.position ? T({}, t.position) : void 0)
                }
            }
            class tQ {
                constructor() {
                    this.angle = new tH, this.attract = new tZ, this.center = new tN, this.decay = 0, this.distance = {}, this.direction = "none", this.drift = 0, this.enable = !1, this.gravity = new tG, this.path = new t$, this.outModes = new tK, this.random = !1, this.size = !1, this.speed = 2, this.spin = new tJ, this.straight = !1, this.trail = new tX, this.vibrate = !1, this.warp = !1
                }
                get bounce() {
                    return this.collisions
                }
                set bounce(t) {
                    this.collisions = t
                }
                get collisions() {
                    return !1
                }
                set collisions(t) {}
                get noise() {
                    return this.path
                }
                set noise(t) {
                    this.path = t
                }
                get outMode() {
                    return this.outModes.default
                }
                set outMode(t) {
                    this.outModes.default = t
                }
                get out_mode() {
                    return this.outMode
                }
                set out_mode(t) {
                    this.outMode = t
                }
                load(t) {
                    var e, i, n;
                    if (!t) return;
                    this.angle.load("number" == typeof t.angle ? {
                        value: t.angle
                    } : t.angle), this.attract.load(t.attract), this.center.load(t.center), void 0 !== t.decay && (this.decay = m(t.decay)), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.distance && (this.distance = "number" == typeof t.distance ? {
                        horizontal: t.distance,
                        vertical: t.distance
                    } : Object.assign({}, t.distance)), void 0 !== t.drift && (this.drift = m(t.drift)), void 0 !== t.enable && (this.enable = t.enable), this.gravity.load(t.gravity);
                    let o = null !== (i = null !== (e = t.outModes) && void 0 !== e ? e : t.outMode) && void 0 !== i ? i : t.out_mode;
                    void 0 !== o && ("object" == typeof o ? this.outModes.load(o) : this.outModes.load({
                        default: o
                    })), this.path.load(null !== (n = t.path) && void 0 !== n ? n : t.noise), void 0 !== t.random && (this.random = t.random), void 0 !== t.size && (this.size = t.size), void 0 !== t.speed && (this.speed = m(t.speed)), this.spin.load(t.spin), void 0 !== t.straight && (this.straight = t.straight), this.trail.load(t.trail), void 0 !== t.vibrate && (this.vibrate = t.vibrate), void 0 !== t.warp && (this.warp = t.warp)
                }
            }
            class t0 {
                constructor() {
                    this.count = 0, this.enable = !1, this.speed = 1, this.decay = 0, this.sync = !1
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = m(t.count)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = m(t.speed)), void 0 !== t.decay && (this.decay = m(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class t1 extends t0 {
                constructor() {
                    super(), this.destroy = "none", this.enable = !1, this.speed = 2, this.startValue = "random", this.sync = !1
                }
                get opacity_min() {
                    return this.minimumValue
                }
                set opacity_min(t) {
                    this.minimumValue = t
                }
                load(t) {
                    var e;
                    t && (super.load(t), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable), this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.opacity_min, void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class t2 extends tF {
                constructor() {
                    super(), this.animation = new t1, this.random.minimumValue = .1, this.value = 1
                }
                get anim() {
                    return this.animation
                }
                set anim(t) {
                    this.animation = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    super.load(t);
                    let i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                    void 0 !== i && (this.animation.load(i), this.value = m(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
                }
            }
            class t5 {
                constructor() {
                    this.enable = !1, this.width = 1920, this.height = 1080
                }
                get area() {
                    return this.width
                }
                set area(t) {
                    this.width = t
                }
                get factor() {
                    return this.height
                }
                set factor(t) {
                    this.height = t
                }
                get value_area() {
                    return this.area
                }
                set value_area(t) {
                    this.area = t
                }
                load(t) {
                    var e, i, n;
                    if (!t) return;
                    void 0 !== t.enable && (this.enable = t.enable);
                    let o = null !== (i = null !== (e = t.width) && void 0 !== e ? e : t.area) && void 0 !== i ? i : t.value_area;
                    void 0 !== o && (this.width = o);
                    let r = null !== (n = t.height) && void 0 !== n ? n : t.factor;
                    void 0 !== r && (this.height = r)
                }
            }
            class t3 {
                constructor() {
                    this.density = new t5, this.limit = 0, this.value = 0
                }
                get max() {
                    return this.limit
                }
                set max(t) {
                    this.limit = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    this.density.load(t.density);
                    let i = null !== (e = t.limit) && void 0 !== e ? e : t.max;
                    void 0 !== i && (this.limit = i), void 0 !== t.value && (this.value = t.value)
                }
            }
            class t6 {
                constructor() {
                    this.blur = 0, this.color = new ty, this.enable = !1, this.offset = {
                        x: 0,
                        y: 0
                    }, this.color.value = "#000"
                }
                load(t) {
                    t && (void 0 !== t.blur && (this.blur = t.blur), this.color = ty.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.offset && (void 0 !== t.offset.x && (this.offset.x = t.offset.x), void 0 !== t.offset.y && (this.offset.y = t.offset.y)))
                }
            }
            let t4 = "character",
                t7 = "char",
                t8 = "image",
                t9 = "images",
                et = "polygon",
                ee = "star";
            class ei {
                constructor() {
                    this.options = {}, this.type = "circle"
                }
                get character() {
                    var t;
                    return null !== (t = this.options[t4]) && void 0 !== t ? t : this.options[t7]
                }
                set character(t) {
                    this.options[t7] = this.options[t4] = t
                }
                get custom() {
                    return this.options
                }
                set custom(t) {
                    this.options = t
                }
                get image() {
                    var t;
                    return null !== (t = this.options[t8]) && void 0 !== t ? t : this.options[t9]
                }
                set image(t) {
                    this.options[t9] = this.options[t8] = t
                }
                get images() {
                    return this.image
                }
                set images(t) {
                    this.image = t
                }
                get polygon() {
                    var t;
                    return null !== (t = this.options[et]) && void 0 !== t ? t : this.options[ee]
                }
                set polygon(t) {
                    this.options[ee] = this.options[et] = t
                }
                get stroke() {
                    return []
                }
                set stroke(t) {}
                load(t) {
                    var e, i, n;
                    if (!t) return;
                    let o = null !== (e = t.options) && void 0 !== e ? e : t.custom;
                    if (void 0 !== o)
                        for (let t in o) {
                            let e = o[t];
                            e && (this.options[t] = T(null !== (i = this.options[t]) && void 0 !== i ? i : {}, e))
                        }
                    this.loadShape(t.character, t4, t7, !0), this.loadShape(t.polygon, et, ee, !1), this.loadShape(null !== (n = t.image) && void 0 !== n ? n : t.images, t8, t9, !0), void 0 !== t.type && (this.type = t.type)
                }
                loadShape(t, e, i, n) {
                    var o, r;
                    if (!t) return;
                    let s = t instanceof Array,
                        a = s ? [] : {},
                        l = s !== this.options[e] instanceof Array,
                        u = s !== this.options[i] instanceof Array;
                    l && (this.options[e] = a), u && n && (this.options[i] = a), this.options[e] = T(null !== (o = this.options[e]) && void 0 !== o ? o : a, t), (!this.options[i] || n) && (this.options[i] = T(null !== (r = this.options[i]) && void 0 !== r ? r : a, t))
                }
            }
            class en extends t0 {
                constructor() {
                    super(), this.destroy = "none", this.enable = !1, this.speed = 5, this.startValue = "random", this.sync = !1
                }
                get size_min() {
                    return this.minimumValue
                }
                set size_min(t) {
                    this.minimumValue = t
                }
                load(t) {
                    var e;
                    super.load(t), t && (void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.enable && (this.enable = t.enable), this.minimumValue = null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min, void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.startValue && (this.startValue = t.startValue), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class eo extends tF {
                constructor() {
                    super(), this.animation = new en, this.random.minimumValue = 1, this.value = 3
                }
                get anim() {
                    return this.animation
                }
                set anim(t) {
                    this.animation = t
                }
                load(t) {
                    var e;
                    if (super.load(t), !t) return;
                    let i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
                    void 0 !== i && (this.animation.load(i), this.value = m(this.value, this.animation.enable ? this.animation.minimumValue : void 0))
                }
            }
            class er {
                constructor() {
                    this.width = 0
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = tI.create(this.color, t.color)), void 0 !== t.width && (this.width = m(t.width)), void 0 !== t.opacity && (this.opacity = m(t.opacity)))
                }
            }
            class es extends tF {
                constructor() {
                    super(), this.opacityRate = 1, this.sizeRate = 1, this.velocityRate = 1
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate), void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate), void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate))
                }
            }
            class ea {
                constructor(t, e) {
                    this._engine = t, this._container = e, this.bounce = new tq, this.collisions = new tU, this.color = new tI, this.color.value = "#fff", this.groups = {}, this.move = new tQ, this.number = new t3, this.opacity = new t2, this.reduceDuplicates = !1, this.shadow = new t6, this.shape = new ei, this.size = new eo, this.stroke = new er, this.zIndex = new es
                }
                load(t) {
                    var e, i, n, o, r, s;
                    if (!t) return;
                    if (this.bounce.load(t.bounce), this.color.load(tI.create(this.color, t.color)), void 0 !== t.groups)
                        for (let i in t.groups) {
                            let n = t.groups[i];
                            void 0 !== n && (this.groups[i] = T(null !== (e = this.groups[i]) && void 0 !== e ? e : {}, n))
                        }
                    this.move.load(t.move), this.number.load(t.number), this.opacity.load(t.opacity), void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates), this.shape.load(t.shape), this.size.load(t.size), this.shadow.load(t.shadow), this.zIndex.load(t.zIndex);
                    let a = null !== (n = null === (i = t.move) || void 0 === i ? void 0 : i.collisions) && void 0 !== n ? n : null === (o = t.move) || void 0 === o ? void 0 : o.bounce;
                    void 0 !== a && (this.collisions.enable = a), this.collisions.load(t.collisions), void 0 !== t.interactivity && (this.interactivity = T({}, t.interactivity));
                    let l = null !== (r = t.stroke) && void 0 !== r ? r : null === (s = t.shape) || void 0 === s ? void 0 : s.stroke;
                    if (l && (this.stroke = F(l, t => {
                            let e = new er;
                            return e.load(t), e
                        })), this._container) {
                        let e = this._engine.plugins.updaters.get(this._container);
                        if (e)
                            for (let i of e) i.loadOptions && i.loadOptions(this, t);
                        let i = this._engine.plugins.interactors.get(this._container);
                        if (i)
                            for (let e of i) e.loadParticlesOptions && e.loadParticlesOptions(this, t)
                    }
                }
            }

            function el(t, ...e) {
                for (let i of e) t.load(i)
            }

            function eu(t, e, ...i) {
                let n = new ea(t, e);
                return el(n, ...i), n
            }
            class ec {
                constructor(t, e) {
                    this._engine = t, this._container = e, this.autoPlay = !0, this.background = new tg, this.backgroundMask = new tw, this.defaultThemes = {}, this.delay = 0, this.fullScreen = new tx, this.detectRetina = !0, this.duration = 0, this.fpsLimit = 120, this.interactivity = new tz(t, e), this.manualParticles = [], this.particles = eu(this._engine, this._container), this.pauseOnBlur = !0, this.pauseOnOutsideViewport = !0, this.responsive = [], this.smooth = !1, this.style = {}, this.themes = [], this.zLayers = 100
                }
                get backgroundMode() {
                    return this.fullScreen
                }
                set backgroundMode(t) {
                    this.fullScreen.load(t)
                }
                get fps_limit() {
                    return this.fpsLimit
                }
                set fps_limit(t) {
                    this.fpsLimit = t
                }
                get retina_detect() {
                    return this.detectRetina
                }
                set retina_detect(t) {
                    this.detectRetina = t
                }
                load(t) {
                    var e, i, n, o, r;
                    if (!t) return;
                    void 0 !== t.preset && F(t.preset, t => this._importPreset(t)), void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.delay && (this.delay = m(t.delay));
                    let s = null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect;
                    void 0 !== s && (this.detectRetina = s), void 0 !== t.duration && (this.duration = m(t.duration));
                    let a = null !== (i = t.fpsLimit) && void 0 !== i ? i : t.fps_limit;
                    void 0 !== a && (this.fpsLimit = a), void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur), void 0 !== t.pauseOnOutsideViewport && (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport), void 0 !== t.zLayers && (this.zLayers = t.zLayers), this.background.load(t.background);
                    let l = null !== (n = t.fullScreen) && void 0 !== n ? n : t.backgroundMode;
                    "boolean" == typeof l ? this.fullScreen.enable = l : this.fullScreen.load(l), this.backgroundMask.load(t.backgroundMask), this.interactivity.load(t.interactivity), void 0 !== t.manualParticles && (this.manualParticles = t.manualParticles.map(t => {
                        let e = new t_;
                        return e.load(t), e
                    })), this.particles.load(t.particles), this.style = T(this.style, t.style), this._engine.plugins.loadOptions(this, t), void 0 !== t.smooth && (this.smooth = t.smooth);
                    let u = this._engine.plugins.interactors.get(this._container);
                    if (u)
                        for (let e of u) e.loadOptions && e.loadOptions(this, t);
                    if (void 0 !== t.responsive)
                        for (let e of t.responsive) {
                            let t = new tR;
                            t.load(e), this.responsive.push(t)
                        }
                    if (this.responsive.sort((t, e) => t.maxWidth - e.maxWidth), void 0 !== t.themes)
                        for (let e of t.themes) {
                            let t = this.themes.find(t => t.name === e.name);
                            if (t) t.load(e);
                            else {
                                let t = new tT;
                                t.load(e), this.themes.push(t)
                            }
                        }
                    this.defaultThemes.dark = null === (o = this._findDefaultTheme("dark")) || void 0 === o ? void 0 : o.name, this.defaultThemes.light = null === (r = this._findDefaultTheme("light")) || void 0 === r ? void 0 : r.name
                }
                setResponsive(t, e, i) {
                    this.load(i);
                    let n = this.responsive.find(i => "screen" === i.mode && screen ? i.maxWidth > screen.availWidth : i.maxWidth * e > t);
                    return this.load(null == n ? void 0 : n.options), null == n ? void 0 : n.maxWidth
                }
                setTheme(t) {
                    if (t) {
                        let e = this.themes.find(e => e.name === t);
                        e && this.load(e.options)
                    } else {
                        let t = S("(prefers-color-scheme: dark)"),
                            e = t && t.matches,
                            i = this._findDefaultTheme(e ? "dark" : "light");
                        i && this.load(i.options)
                    }
                }
                _findDefaultTheme(t) {
                    var e;
                    return null !== (e = this.themes.find(e => e.default.value && e.default.mode === t)) && void 0 !== e ? e : this.themes.find(t => t.default.value && "any" === t.default.mode)
                }
                _importPreset(t) {
                    this.load(this._engine.plugins.getPreset(t))
                }
            }
            class ed {
                constructor(t, e) {
                    this.container = e, this._engine = t, this._interactors = this._engine.plugins.getInteractors(this.container, !0), this._externalInteractors = [], this._particleInteractors = []
                }
                async externalInteract(t) {
                    for (let e of this._externalInteractors) e.isEnabled() && await e.interact(t)
                }
                handleClickMode(t) {
                    for (let e of this._externalInteractors) e.handleClickMode && e.handleClickMode(t)
                }
                init() {
                    for (let t of (this._externalInteractors = [], this._particleInteractors = [], this._interactors)) {
                        switch (t.type) {
                            case "external":
                                this._externalInteractors.push(t);
                                break;
                            case "particles":
                                this._particleInteractors.push(t)
                        }
                        t.init()
                    }
                }
                async particlesInteract(t, e) {
                    for (let i of this._externalInteractors) i.clear(t, e);
                    for (let i of this._particleInteractors) i.isEnabled(t) && await i.interact(t, e)
                }
                async reset(t) {
                    for (let e of this._externalInteractors) e.isEnabled() && await e.reset(t);
                    for (let e of this._particleInteractors) e.isEnabled(t) && await e.reset(t)
                }
            }
            let eh = t => {
                E(t.outMode, t.checkModes) && (t.coord > t.maxCoord - 2 * t.radius ? t.setCb(-t.radius) : t.coord < 2 * t.radius && t.setCb(t.radius))
            };
            class ep {
                constructor(t, e, i, n, o, r) {
                    this.container = i, this._engine = t, this.init(e, n, o, r)
                }
                destroy(t) {
                    var e;
                    if (!this.unbreakable && !this.destroyed) {
                        for (let [, e] of (this.destroyed = !0, this.bubble.inRange = !1, this.slow.inRange = !1, this.container.plugins)) e.particleDestroyed && e.particleDestroyed(this, t);
                        for (let e of this.container.particles.updaters) e.particleDestroyed && e.particleDestroyed(this, t);
                        null === (e = this.pathGenerator) || void 0 === e || e.reset(this)
                    }
                }
                draw(t) {
                    let e = this.container;
                    for (let [, i] of e.plugins) e.canvas.drawParticlePlugin(i, this, t);
                    e.canvas.drawParticle(this, t)
                }
                getFillColor() {
                    var t;
                    return this._getRollColor(null !== (t = this.bubble.color) && void 0 !== t ? t : tn(this.color))
                }
                getMass() {
                    return this.getRadius() ** 2 * Math.PI / 2
                }
                getPosition() {
                    return {
                        x: this.position.x + this.offset.x,
                        y: this.position.y + this.offset.y,
                        z: this.position.z
                    }
                }
                getRadius() {
                    var t;
                    return null !== (t = this.bubble.radius) && void 0 !== t ? t : this.size.value
                }
                getStrokeColor() {
                    var t;
                    return this._getRollColor(null !== (t = this.bubble.color) && void 0 !== t ? t : tn(this.strokeColor))
                }
                init(t, e, i, n) {
                    var o, s, a, l, d, m, g, b, w;
                    let x = this.container,
                        C = this._engine;
                    this.id = t, this.group = n, this.fill = !0, this.pathRotation = !1, this.close = !0, this.lastPathTime = 0, this.destroyed = !1, this.unbreakable = !1, this.rotation = 0, this.misplaced = !1, this.retina = {
                        maxDistance: {}
                    }, this.outType = "normal", this.ignoresResizeRatio = !0;
                    let k = x.retina.pixelRatio,
                        P = x.actualOptions,
                        O = eu(this._engine, x, P.particles),
                        S = O.shape.type,
                        {
                            reduceDuplicates: E
                        } = O;
                    this.shape = W(S, this.id, E);
                    let M = O.shape;
                    if (i && i.shape && i.shape.type) {
                        let t = W(i.shape.type, this.id, E);
                        t && (this.shape = t, M.load(i.shape))
                    }
                    this.shapeData = this._loadShapeData(M, E), O.load(i), O.load(null === (o = this.shapeData) || void 0 === o ? void 0 : o.particles), this.interactivity = new tz(C, x), this.interactivity.load(x.actualOptions.interactivity), this.interactivity.load(O.interactivity), this.fill = null !== (a = null === (s = this.shapeData) || void 0 === s ? void 0 : s.fill) && void 0 !== a ? a : this.fill, this.close = null !== (d = null === (l = this.shapeData) || void 0 === l ? void 0 : l.close) && void 0 !== d ? d : this.close, this.options = O;
                    let z = this.options.move.path;
                    this.pathDelay = 1e3 * y(z.delay), z.generator && (this.pathGenerator = this._engine.plugins.getPathGenerator(z.generator), this.pathGenerator && x.addPath(z.generator, this.pathGenerator) && this.pathGenerator.init(x));
                    let _ = p(this.options.zIndex.value);
                    x.retina.initParticle(this);
                    let R = this.options.size,
                        A = R.value,
                        T = R.animation;
                    if (this.size = {
                            enable: R.animation.enable,
                            value: p(R.value) * x.retina.pixelRatio,
                            max: v(A) * k,
                            min: f(A) * k,
                            loops: 0,
                            maxLoops: p(R.animation.count)
                        }, T.enable) switch (this.size.status = "increasing", this.size.decay = 1 - p(T.decay), T.startValue) {
                        case "min":
                            this.size.value = this.size.min, this.size.status = "increasing";
                            break;
                        case "random":
                            this.size.value = h(this.size), this.size.status = u() >= .5 ? "increasing" : "decreasing";
                            break;
                        default:
                            this.size.value = this.size.max, this.size.status = "decreasing"
                    }
                    this.size.initialValue = this.size.value, this.bubble = {
                        inRange: !1
                    }, this.slow = {
                        inRange: !1,
                        factor: 1
                    }, this.position = this._calcPosition(x, e, c(_, 0, x.zLayers)), this.initialPosition = this.position.copy();
                    let D = x.canvas.size,
                        L = Object.assign({}, this.options.move.center),
                        I = "percent" === L.mode;
                    switch (this.moveCenter = {
                        x: L.x * (I ? D.width / 100 : 1),
                        y: L.y * (I ? D.height / 100 : 1),
                        radius: null !== (m = this.options.move.center.radius) && void 0 !== m ? m : 0,
                        mode: null !== (g = this.options.move.center.mode) && void 0 !== g ? g : "percent"
                    }, this.direction = function(t, e, i) {
                        if ("number" == typeof t) return t * Math.PI / 180;
                        switch (t) {
                            case "top":
                                return -Math.PI / 2;
                            case "top-right":
                                return -Math.PI / 4;
                            case "right":
                                return 0;
                            case "bottom-right":
                                return Math.PI / 4;
                            case "bottom":
                                return Math.PI / 2;
                            case "bottom-left":
                                return 3 * Math.PI / 4;
                            case "left":
                                return Math.PI;
                            case "top-left":
                                return -3 * Math.PI / 4;
                            case "inside":
                                return Math.atan2(i.y - e.y, i.x - e.x);
                            case "outside":
                                return Math.atan2(e.y - i.y, e.x - i.x);
                            default:
                                return u() * Math.PI * 2
                        }
                    }(this.options.move.direction, this.position, this.moveCenter), this.options.move.direction) {
                        case "inside":
                            this.outType = "inside";
                            break;
                        case "outside":
                            this.outType = "outside"
                    }
                    this.initialVelocity = this._calculateVelocity(), this.velocity = this.initialVelocity.copy(), this.moveDecay = 1 - p(this.options.move.decay), this.offset = r.origin;
                    let V = x.particles;
                    V.needsSort = V.needsSort || V.lastZIndex < this.position.z, V.lastZIndex = this.position.z, this.zIndexFactor = this.position.z / x.zLayers, this.sides = 24;
                    let j = x.drawers.get(this.shape);
                    !j && (j = this._engine.plugins.getShapeDrawer(this.shape)) && x.drawers.set(this.shape, j), (null == j ? void 0 : j.loadShape) && (null == j || j.loadShape(this));
                    let B = null == j ? void 0 : j.getSidesCount;
                    for (let t of (B && (this.sides = B(this)), this.spawning = !1, this.shadowColor = G(this.options.shadow.color), x.particles.updaters)) t.init(this);
                    for (let t of x.particles.movers) null === (b = t.init) || void 0 === b || b.call(t, this);
                    for (let [, t] of ((null == j ? void 0 : j.particleInit) && j.particleInit(x, this), x.plugins)) null === (w = t.particleCreated) || void 0 === w || w.call(t, this)
                }
                isInsideCanvas() {
                    let t = this.getRadius(),
                        e = this.container.canvas.size;
                    return this.position.x >= -t && this.position.y >= -t && this.position.y <= e.height + t && this.position.x <= e.width + t
                }
                isVisible() {
                    return !this.destroyed && !this.spawning && this.isInsideCanvas()
                }
                reset() {
                    var t;
                    for (let e of this.container.particles.updaters) null === (t = e.reset) || void 0 === t || t.call(e, this)
                }
                _calcPosition(t, e, i, n = 0) {
                    var r, s, a, l, c, d, h, p, f;
                    for (let [, n] of t.plugins) {
                        let t = void 0 !== n.particlePosition ? n.particlePosition(e, this) : void 0;
                        if (void 0 !== t) return o.create(t.x, t.y, i)
                    }
                    let v = {
                            x: null !== (h = null === (d = (c = {
                                size: t.canvas.size,
                                position: e
                            }).position) || void 0 === d ? void 0 : d.x) && void 0 !== h ? h : u() * c.size.width,
                            y: null !== (f = null === (p = c.position) || void 0 === p ? void 0 : p.y) && void 0 !== f ? f : u() * c.size.height
                        },
                        m = o.create(v.x, v.y, i),
                        y = this.getRadius(),
                        g = this.options.move.outModes,
                        b = e => {
                            eh({
                                outMode: e,
                                checkModes: ["bounce", "bounce-horizontal"],
                                coord: m.x,
                                maxCoord: t.canvas.size.width,
                                setCb: t => m.x += t,
                                radius: y
                            })
                        },
                        w = e => {
                            eh({
                                outMode: e,
                                checkModes: ["bounce", "bounce-vertical"],
                                coord: m.y,
                                maxCoord: t.canvas.size.height,
                                setCb: t => m.y += t,
                                radius: y
                            })
                        };
                    return (b(null !== (r = g.left) && void 0 !== r ? r : g.default), b(null !== (s = g.right) && void 0 !== s ? s : g.default), w(null !== (a = g.top) && void 0 !== a ? a : g.default), w(null !== (l = g.bottom) && void 0 !== l ? l : g.default), this._checkOverlap(m, n)) ? this._calcPosition(t, void 0, i, n + 1) : m
                }
                _calculateVelocity() {
                    let t = (function(t) {
                            let e = r.origin;
                            return e.length = 1, e.angle = t, e
                        })(this.direction).copy(),
                        e = this.options.move;
                    if ("inside" === e.direction || "outside" === e.direction) return t;
                    let i = Math.PI / 180 * p(e.angle.value),
                        n = Math.PI / 180 * p(e.angle.offset),
                        o = {
                            left: n - i / 2,
                            right: n + i / 2
                        };
                    return e.straight || (t.angle += h(m(o.left, o.right))), e.random && "number" == typeof e.speed && (t.length *= u()), t
                }
                _checkOverlap(t, e = 0) {
                    let i = this.options.collisions,
                        n = this.getRadius();
                    if (!i.enable) return !1;
                    let o = i.overlap;
                    if (o.enable) return !1;
                    let r = o.retries;
                    if (r >= 0 && e > r) throw Error("Particle is overlapping and can't be placed");
                    let s = !1;
                    for (let e of this.container.particles.array)
                        if (b(t, e.position) < n + e.getRadius()) {
                            s = !0;
                            break
                        }
                    return s
                }
                _getRollColor(t) {
                    var e, i, n;
                    if (!t || !this.roll || !this.backColor && !this.roll.alter) return t;
                    let o = this.roll.horizontal && this.roll.vertical ? 2 : 1,
                        r = this.roll.horizontal ? Math.PI / 2 : 0;
                    return Math.floor(((null !== (e = this.roll.angle) && void 0 !== e ? e : 0) + r) / (Math.PI / o)) % 2 ? this.backColor ? this.backColor : this.roll.alter ? (i = this.roll.alter.type, n = this.roll.alter.value, {
                        h: t.h,
                        s: t.s,
                        l: t.l + ("darken" === i ? -1 : 1) * n
                    }) : t : t
                }
                _loadShapeData(t, e) {
                    let i = t.options[this.shape];
                    if (i) return T({}, W(i, this.id, e))
                }
            }
            class ef {
                constructor(t, e) {
                    this.position = t, this.particle = e
                }
            }
            class ev {
                constructor(t, e) {
                    this.position = {
                        x: t,
                        y: e
                    }
                }
            }
            class em extends ev {
                constructor(t, e, i) {
                    super(t, e), this.radius = i
                }
                contains(t) {
                    return b(t, this.position) <= this.radius
                }
                intersects(t) {
                    let e = this.position,
                        i = t.position,
                        n = {
                            x: Math.abs(i.x - e.x),
                            y: Math.abs(i.y - e.y)
                        },
                        o = this.radius;
                    if (void 0 !== t.radius) return o + t.radius > Math.sqrt(n.x ** 2 + n.y ** 2);
                    if (void 0 !== t.size) {
                        let e = t.size.width,
                            i = t.size.height;
                        return Math.pow(n.x - e, 2) + Math.pow(n.y - i, 2) <= o ** 2 || n.x <= o + e && n.y <= o + i || n.x <= e || n.y <= i
                    }
                    return !1
                }
            }
            class ey extends ev {
                constructor(t, e, i, n) {
                    super(t, e), this.size = {
                        height: n,
                        width: i
                    }
                }
                contains(t) {
                    let e = this.size.width,
                        i = this.size.height,
                        n = this.position;
                    return t.x >= n.x && t.x <= n.x + e && t.y >= n.y && t.y <= n.y + i
                }
                intersects(t) {
                    t instanceof em && t.intersects(this);
                    let e = this.size.width,
                        i = this.size.height,
                        n = this.position,
                        o = t.position,
                        r = t instanceof ey ? t.size : {
                            width: 0,
                            height: 0
                        },
                        s = r.width,
                        a = r.height;
                    return o.x < n.x + e && o.x + s > n.x && o.y < n.y + i && o.y + a > n.y
                }
            }
            class eg {
                constructor(t, e) {
                    this.rectangle = t, this.capacity = e, this._points = [], this._divided = !1
                }
                insert(t) {
                    var e, i, n, o, r;
                    return !!this.rectangle.contains(t.position) && (this._points.length < this.capacity ? (this._points.push(t), !0) : (this._divided || this.subdivide(), null !== (r = (null === (e = this._NE) || void 0 === e ? void 0 : e.insert(t)) || (null === (i = this._NW) || void 0 === i ? void 0 : i.insert(t)) || (null === (n = this._SE) || void 0 === n ? void 0 : n.insert(t)) || (null === (o = this._SW) || void 0 === o ? void 0 : o.insert(t))) && void 0 !== r && r))
                }
                query(t, e, i) {
                    var n, o, r, s;
                    let a = null != i ? i : [];
                    if (!t.intersects(this.rectangle)) return [];
                    for (let i of this._points) !t.contains(i.position) && b(t.position, i.position) > i.particle.getRadius() && (!e || e(i.particle)) || a.push(i.particle);
                    return this._divided && (null === (n = this._NE) || void 0 === n || n.query(t, e, a), null === (o = this._NW) || void 0 === o || o.query(t, e, a), null === (r = this._SE) || void 0 === r || r.query(t, e, a), null === (s = this._SW) || void 0 === s || s.query(t, e, a)), a
                }
                queryCircle(t, e, i) {
                    return this.query(new em(t.x, t.y, e), i)
                }
                queryRectangle(t, e, i) {
                    return this.query(new ey(t.x, t.y, e.width, e.height), i)
                }
                subdivide() {
                    let t = this.rectangle.position.x,
                        e = this.rectangle.position.y,
                        i = this.rectangle.size.width,
                        n = this.rectangle.size.height,
                        o = this.capacity;
                    this._NE = new eg(new ey(t, e, i / 2, n / 2), o), this._NW = new eg(new ey(t + i / 2, e, i / 2, n / 2), o), this._SE = new eg(new ey(t, e + n / 2, i / 2, n / 2), o), this._SW = new eg(new ey(t + i / 2, e + n / 2, i / 2, n / 2), o), this._divided = !0
                }
            }
            class eb {
                constructor(t, e) {
                    this.container = e, this._engine = t, this.nextId = 0, this.array = [], this.zArray = [], this.pool = [], this.limit = 0, this.needsSort = !1, this.lastZIndex = 0, this.interactionManager = new ed(this._engine, e);
                    let i = this.container.canvas.size;
                    this.quadTree = new eg(new ey(-i.width / 4, -i.height / 4, 3 * i.width / 2, 3 * i.height / 2), 4), this.movers = this._engine.plugins.getMovers(e, !0), this.updaters = this._engine.plugins.getUpdaters(e, !0)
                }
                get count() {
                    return this.array.length
                }
                addManualParticles() {
                    let t = this.container;
                    for (let i of t.actualOptions.manualParticles) {
                        var e;
                        this.addParticle((e = {
                            size: t.canvas.size,
                            position: i.position
                        }).position && void 0 !== e.position.x && void 0 !== e.position.y ? {
                            x: e.position.x * e.size.width / 100,
                            y: e.position.y * e.size.height / 100
                        } : void 0, i.options)
                    }
                }
                addParticle(t, e, i, n) {
                    let o = this.container.actualOptions.particles.number.limit;
                    if (o > 0) {
                        let t = this.count + 1 - o;
                        t > 0 && this.removeQuantity(t)
                    }
                    return this._pushParticle(t, e, i, n)
                }
                clear() {
                    this.array = [], this.zArray = []
                }
                destroy() {
                    this.array = [], this.zArray = [], this.movers = [], this.updaters = []
                }
                async draw(t) {
                    let e = this.container,
                        i = this.container.canvas.size;
                    for (let [, n] of (this.quadTree = new eg(new ey(-i.width / 4, -i.height / 4, 3 * i.width / 2, 3 * i.height / 2), 4), e.canvas.clear(), await this.update(t), this.needsSort && (this.zArray.sort((t, e) => e.position.z - t.position.z || t.id - e.id), this.lastZIndex = this.zArray[this.zArray.length - 1].position.z, this.needsSort = !1), e.plugins)) e.canvas.drawPlugin(n, t);
                    for (let e of this.zArray) e.draw(t)
                }
                handleClickMode(t) {
                    this.interactionManager.handleClickMode(t)
                }
                init() {
                    var t;
                    let e = this.container,
                        i = e.actualOptions;
                    this.lastZIndex = 0, this.needsSort = !1;
                    let n = !1;
                    for (let [, t] of (this.updaters = this._engine.plugins.getUpdaters(e, !0), this.interactionManager.init(), e.plugins))
                        if (void 0 !== t.particlesInitialization && (n = t.particlesInitialization()), n) break;
                    for (let [, t] of (this.interactionManager.init(), e.pathGenerators)) t.init(e);
                    if (this.addManualParticles(), !n) {
                        for (let e in i.particles.groups) {
                            let n = i.particles.groups[e];
                            for (let o = this.count, r = 0; r < (null === (t = n.number) || void 0 === t ? void 0 : t.value) && o < i.particles.number.value; o++, r++) this.addParticle(void 0, n, e)
                        }
                        for (let t = this.count; t < i.particles.number.value; t++) this.addParticle()
                    }
                }
                push(t, e, i, n) {
                    this.pushing = !0;
                    for (let o = 0; o < t; o++) this.addParticle(null == e ? void 0 : e.position, i, n);
                    this.pushing = !1
                }
                async redraw() {
                    this.clear(), this.init(), await this.draw({
                        value: 0,
                        factor: 0
                    })
                }
                remove(t, e, i) {
                    this.removeAt(this.array.indexOf(t), void 0, e, i)
                }
                removeAt(t, e = 1, i, n) {
                    if (t < 0 || t > this.count) return;
                    let o = 0;
                    for (let r = t; o < e && r < this.count; r++) {
                        let t = this.array[r];
                        if (!t || t.group !== i) continue;
                        t.destroy(n), this.array.splice(r--, 1);
                        let e = this.zArray.indexOf(t);
                        this.zArray.splice(e, 1), this.pool.push(t), o++, this._engine.dispatchEvent("particleRemoved", {
                            container: this.container,
                            data: {
                                particle: t
                            }
                        })
                    }
                }
                removeQuantity(t, e) {
                    this.removeAt(0, t, e)
                }
                setDensity() {
                    let t = this.container.actualOptions;
                    for (let e in t.particles.groups) this._applyDensity(t.particles.groups[e], 0, e);
                    this._applyDensity(t.particles, t.manualParticles.length)
                }
                async update(t) {
                    var e, i;
                    let n = this.container,
                        o = [];
                    for (let [, t] of n.pathGenerators) t.update();
                    for (let [, i] of n.plugins) null === (e = i.update) || void 0 === e || e.call(i, t);
                    for (let e of this.array) {
                        let r = n.canvas.resizeFactor;
                        for (let [, n] of (r && !e.ignoresResizeRatio && (e.position.x *= r.width, e.position.y *= r.height, e.initialPosition.x *= r.width, e.initialPosition.y *= r.height), e.ignoresResizeRatio = !1, await this.interactionManager.reset(e), this.container.plugins)) {
                            if (e.destroyed) break;
                            null === (i = n.particleUpdate) || void 0 === i || i.call(n, e, t)
                        }
                        for (let i of this.movers) i.isEnabled(e) && i.move(e, t);
                        if (e.destroyed) {
                            o.push(e);
                            continue
                        }
                        this.quadTree.insert(new ef(e.getPosition(), e))
                    }
                    for (let t of o) this.remove(t);
                    for (let e of (await this.interactionManager.externalInteract(t), this.array)) {
                        for (let i of this.updaters) i.update(e, t);
                        e.destroyed || e.spawning || await this.interactionManager.particlesInteract(e, t)
                    }
                    delete n.canvas.resizeFactor
                }
                _applyDensity(t, e, i) {
                    var n;
                    if (!(null === (n = t.number.density) || void 0 === n ? void 0 : n.enable)) return;
                    let o = t.number,
                        r = this._initDensityFactor(o.density),
                        s = o.value,
                        a = o.limit > 0 ? o.limit : s,
                        l = Math.min(s, a) * r + e,
                        u = Math.min(this.count, this.array.filter(t => t.group === i).length);
                    this.limit = o.limit * r, u < l ? this.push(Math.abs(l - u), void 0, t, i) : u > l && this.removeQuantity(u - l, i)
                }
                _initDensityFactor(t) {
                    let e = this.container;
                    if (!e.canvas.element || !t.enable) return 1;
                    let i = e.canvas.element,
                        n = e.retina.pixelRatio;
                    return i.width * i.height / (t.factor * n ** 2 * t.area)
                }
                _pushParticle(t, e, i, n) {
                    try {
                        let o = this.pool.pop();
                        o ? o.init(this.nextId, t, e, i) : o = new ep(this._engine, this.nextId, this.container, t, e, i);
                        let r = !0;
                        if (n && (r = n(o)), !r) return;
                        return this.array.push(o), this.zArray.push(o), this.nextId++, this._engine.dispatchEvent("particleAdded", {
                            container: this.container,
                            data: {
                                particle: o
                            }
                        }), o
                    } catch (t) {
                        console.warn(`error adding particle: ${t}`);
                        return
                    }
                }
            }
            class ew {
                constructor(t) {
                    this.container = t
                }
                init() {
                    let t = this.container,
                        e = t.actualOptions;
                    this.pixelRatio = !e.detectRetina || O() ? 1 : window.devicePixelRatio, this.reduceFactor = 1;
                    let i = this.pixelRatio;
                    if (t.canvas.element) {
                        let e = t.canvas.element;
                        t.canvas.size.width = e.offsetWidth * i, t.canvas.size.height = e.offsetHeight * i
                    }
                    let n = e.particles;
                    this.attractDistance = p(n.move.attract.distance) * i, this.sizeAnimationSpeed = p(n.size.animation.speed) * i, this.maxSpeed = p(n.move.gravity.maxSpeed) * i
                }
                initParticle(t) {
                    let e = t.options,
                        i = this.pixelRatio,
                        n = e.move.distance,
                        o = t.retina;
                    o.attractDistance = p(e.move.attract.distance) * i, o.moveDrift = p(e.move.drift) * i, o.moveSpeed = p(e.move.speed) * i, o.sizeAnimationSpeed = p(e.size.animation.speed) * i;
                    let r = o.maxDistance;
                    r.horizontal = void 0 !== n.horizontal ? n.horizontal * i : void 0, r.vertical = void 0 !== n.vertical ? n.vertical * i : void 0, o.maxSpeed = p(e.move.gravity.maxSpeed) * i
                }
            }

            function ex(t) {
                return t && !t.destroyed
            }

            function eC(t, e, ...i) {
                let n = new ec(t, e);
                return el(n, ...i), n
            }
            let ek = {
                generate: t => {
                    let e = t.velocity.copy();
                    return e.angle += e.length * Math.PI / 180, e
                },
                init: () => {},
                update: () => {},
                reset: () => {}
            };
            class eP {
                constructor(t, e, i) {
                    this.id = e, this._engine = t, this.fpsLimit = 120, this.smooth = !1, this._delay = 0, this.duration = 0, this.lifeTime = 0, this._firstStart = !0, this.started = !1, this.destroyed = !1, this._paused = !0, this.lastFrameTime = 0, this.zLayers = 100, this.pageHidden = !1, this._sourceOptions = i, this._initialSourceOptions = i, this.retina = new ew(this), this.canvas = new tp(this), this.particles = new eb(this._engine, this), this.frameManager = new tm(this), this.pathGenerators = new Map, this.interactivity = {
                        mouse: {
                            clicking: !1,
                            inside: !1
                        }
                    }, this.plugins = new Map, this.drawers = new Map, this._options = eC(this._engine, this), this.actualOptions = eC(this._engine, this), this._eventListeners = new tv(this), "undefined" != typeof IntersectionObserver && IntersectionObserver && (this._intersectionObserver = new IntersectionObserver(t => this._intersectionManager(t))), this._engine.dispatchEvent("containerBuilt", {
                        container: this
                    })
                }
                get options() {
                    return this._options
                }
                get sourceOptions() {
                    return this._sourceOptions
                }
                addClickHandler(t) {
                    if (!ex(this)) return;
                    let e = this.interactivity.element;
                    if (!e) return;
                    let i = (e, i, n) => {
                            if (!ex(this)) return;
                            let o = this.retina.pixelRatio,
                                r = {
                                    x: i.x * o,
                                    y: i.y * o
                                };
                            t(e, this.particles.quadTree.queryCircle(r, n * o))
                        },
                        n = !1,
                        o = !1;
                    e.addEventListener("click", t => {
                        if (!ex(this)) return;
                        let e = {
                            x: t.offsetX || t.clientX,
                            y: t.offsetY || t.clientY
                        };
                        i(t, e, 1)
                    }), e.addEventListener("touchstart", () => {
                        ex(this) && (n = !0, o = !1)
                    }), e.addEventListener("touchmove", () => {
                        ex(this) && (o = !0)
                    }), e.addEventListener("touchend", t => {
                        if (ex(this)) {
                            if (n && !o) {
                                let e = t.touches[t.touches.length - 1];
                                if (!e && !(e = t.changedTouches[t.changedTouches.length - 1])) return;
                                let n = this.canvas.element,
                                    o = n ? n.getBoundingClientRect() : void 0;
                                i(t, {
                                    x: e.clientX - (o ? o.left : 0),
                                    y: e.clientY - (o ? o.top : 0)
                                }, Math.max(e.radiusX, e.radiusY))
                            }
                            n = !1, o = !1
                        }
                    }), e.addEventListener("touchcancel", () => {
                        ex(this) && (n = !1, o = !1)
                    })
                }
                addPath(t, e, i = !1) {
                    return !(!ex(this) || !i && this.pathGenerators.has(t)) && (this.pathGenerators.set(t, null != e ? e : ek), !0)
                }
                destroy() {
                    if (!ex(this)) return;
                    for (let [, t] of (this.stop(), this.particles.destroy(), this.canvas.destroy(), this.drawers)) t.destroy && t.destroy(this);
                    for (let t of this.drawers.keys()) this.drawers.delete(t);
                    this._engine.plugins.destroy(this), this.destroyed = !0;
                    let t = this._engine.dom(),
                        e = t.findIndex(t => t === this);
                    e >= 0 && t.splice(e, 1), this._engine.dispatchEvent("containerDestroyed", {
                        container: this
                    })
                }
                draw(t) {
                    if (!ex(this)) return;
                    let e = t;
                    this._drawAnimationFrame = (O() ? t => setTimeout(t) : t => (requestAnimationFrame || setTimeout)(t))(async t => {
                        e && (this.lastFrameTime = void 0, e = !1), await this.frameManager.nextFrame(t)
                    })
                }
                exportConfiguration() {
                    return JSON.stringify(this.actualOptions, (t, e) => {
                        if ("_engine" !== t && "_container" !== t) return e
                    }, 2)
                }
                exportImage(t, e, i) {
                    let n = this.canvas.element;
                    n && n.toBlob(t, null != e ? e : "image/png", i)
                }
                exportImg(t) {
                    this.exportImage(t)
                }
                getAnimationStatus() {
                    return !this._paused && !this.pageHidden && ex(this)
                }
                handleClickMode(t) {
                    if (ex(this))
                        for (let [, e] of (this.particles.handleClickMode(t), this.plugins)) e.handleClickMode && e.handleClickMode(t)
                }
                async init() {
                    if (ex(this)) {
                        for (let t of this._engine.plugins.getSupportedShapes()) {
                            let e = this._engine.plugins.getShapeDrawer(t);
                            e && this.drawers.set(t, e)
                        }
                        for (let [t, e] of (this._options = eC(this._engine, this, this._initialSourceOptions, this.sourceOptions), this.actualOptions = eC(this._engine, this, this._options), this._engine.plugins.getAvailablePlugins(this))) this.plugins.set(t, e);
                        for (let [, t] of (this.retina.init(), await this.canvas.init(), this.updateActualOptions(), this.canvas.initBackground(), this.canvas.resize(), this.zLayers = this.actualOptions.zLayers, this.duration = 1e3 * p(this.actualOptions.duration), this._delay = 1e3 * p(this.actualOptions.delay), this.lifeTime = 0, this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120, this.smooth = this.actualOptions.smooth, this.drawers)) t.init && await t.init(this);
                        for (let [, t] of this.plugins) t.init && await t.init();
                        for (let [, t] of (this._engine.dispatchEvent("containerInit", {
                                container: this
                            }), this.particles.init(), this.particles.setDensity(), this.plugins)) t.particlesSetup && t.particlesSetup();
                        this._engine.dispatchEvent("particlesSetup", {
                            container: this
                        })
                    }
                }
                async loadTheme(t) {
                    ex(this) && (this._currentTheme = t, await this.refresh())
                }
                pause() {
                    if (ex(this) && (void 0 !== this._drawAnimationFrame && ((O() ? t => clearTimeout(t) : t => (cancelAnimationFrame || clearTimeout)(t))(this._drawAnimationFrame), delete this._drawAnimationFrame), !this._paused)) {
                        for (let [, t] of this.plugins) t.pause && t.pause();
                        this.pageHidden || (this._paused = !0), this._engine.dispatchEvent("containerPaused", {
                            container: this
                        })
                    }
                }
                play(t) {
                    if (!ex(this)) return;
                    let e = this._paused || t;
                    if (this._firstStart && !this.actualOptions.autoPlay) {
                        this._firstStart = !1;
                        return
                    }
                    if (this._paused && (this._paused = !1), e)
                        for (let [, t] of this.plugins) t.play && t.play();
                    this._engine.dispatchEvent("containerPlay", {
                        container: this
                    }), this.draw(e || !1)
                }
                async refresh() {
                    if (ex(this)) return this.stop(), this.start()
                }
                async reset() {
                    if (ex(this)) return this._options = eC(this._engine, this), this.refresh()
                }
                setNoise(t, e, i) {
                    ex(this) && this.setPath(t, e, i)
                }
                setPath(t, e, i) {
                    if (!t || !ex(this)) return;
                    let n = Object.assign({}, ek);
                    "function" == typeof t ? (n.generate = t, e && (n.init = e), i && (n.update = i)) : (n.generate = t.generate || n.generate, n.init = t.init || n.init, n.update = t.update || n.update), this.addPath("default", n, !0)
                }
                async start() {
                    ex(this) && !this.started && (await this.init(), this.started = !0, await new Promise(t => {
                        this._delayTimeout = setTimeout(async () => {
                            for (let [, t] of (this._eventListeners.addListeners(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.observe(this.interactivity.element), this.plugins)) t.start && await t.start();
                            this._engine.dispatchEvent("containerStarted", {
                                container: this
                            }), this.play(), t()
                        }, this._delay)
                    }))
                }
                stop() {
                    if (ex(this) && this.started) {
                        for (let [, t] of (this._delayTimeout && (clearTimeout(this._delayTimeout), delete this._delayTimeout), this._firstStart = !0, this.started = !1, this._eventListeners.removeListeners(), this.pause(), this.particles.clear(), this.canvas.stop(), this.interactivity.element instanceof HTMLElement && this._intersectionObserver && this._intersectionObserver.unobserve(this.interactivity.element), this.plugins)) t.stop && t.stop();
                        for (let t of this.plugins.keys()) this.plugins.delete(t);
                        this._sourceOptions = this._options, this._engine.dispatchEvent("containerStopped", {
                            container: this
                        })
                    }
                }
                updateActualOptions() {
                    this.actualOptions.responsive = [];
                    let t = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
                    return this.actualOptions.setTheme(this._currentTheme), this.responsiveMaxWidth !== t && (this.responsiveMaxWidth = t, !0)
                }
                _intersectionManager(t) {
                    if (ex(this) && this.actualOptions.pauseOnOutsideViewport)
                        for (let e of t) e.target === this.interactivity.element && (e.isIntersecting ? this.play : this.pause)()
                }
            }
            async function eO(t, e) {
                let i = W(t, e);
                if (!i) return;
                let n = await fetch(i);
                if (n.ok) return n.json();
                console.error(`tsParticles - Error ${n.status} while retrieving config file`)
            }
            class eS {
                constructor(t) {
                    this._engine = t
                }
                load(t, e, i) {
                    let n = {
                        index: i,
                        remote: !1
                    };
                    return "string" == typeof t ? n.tagId = t : n.options = t, "number" == typeof e ? n.index = e : n.options = null != e ? e : n.options, this.loadOptions(n)
                }
                async loadJSON(t, e, i) {
                    let n, o;
                    return "number" == typeof e || void 0 === e ? n = t : (o = t, n = e), this.loadRemoteOptions({
                        tagId: o,
                        url: n,
                        index: i,
                        remote: !0
                    })
                }
                async loadOptions(t) {
                    var e, i, n;
                    let o;
                    let r = null !== (e = t.tagId) && void 0 !== e ? e : `tsparticles${Math.floor(1e4*u())}`,
                        {
                            index: s,
                            url: a,
                            remote: l
                        } = t,
                        c = l ? await eO(a, s) : t.options,
                        d = null !== (i = t.element) && void 0 !== i ? i : document.getElementById(r);
                    d || ((d = document.createElement("div")).id = r, null === (n = document.querySelector("body")) || void 0 === n || n.append(d));
                    let h = W(c, s),
                        p = this._engine.dom(),
                        f = p.findIndex(t => t.id === r);
                    if (f >= 0) {
                        let t = this._engine.domItem(f);
                        t && !t.destroyed && (t.destroy(), p.splice(f, 1))
                    }
                    if ("canvas" === d.tagName.toLowerCase())(o = d).dataset[tu] = "false";
                    else {
                        let t = d.getElementsByTagName("canvas");
                        t.length ? (o = t[0]).dataset[tu] = "false" : ((o = document.createElement("canvas")).dataset[tu] = "true", d.appendChild(o))
                    }
                    o.style.width || (o.style.width = "100%"), o.style.height || (o.style.height = "100%");
                    let v = new eP(this._engine, r, h);
                    return f >= 0 ? p.splice(f, 0, v) : p.push(v), v.canvas.loadCanvas(o), await v.start(), v
                }
                async loadRemoteOptions(t) {
                    return this.loadOptions(t)
                }
                async set(t, e, i, n) {
                    let o = {
                        index: n,
                        remote: !1
                    };
                    return "string" == typeof t ? o.tagId = t : o.element = t, e instanceof HTMLElement ? o.element = e : o.options = e, "number" == typeof i ? o.index = i : o.options = null != i ? i : o.options, this.loadOptions(o)
                }
                async setJSON(t, e, i, n) {
                    let o, r, s, a;
                    return t instanceof HTMLElement ? (a = t, o = e, s = i) : (r = t, a = e, o = i, s = n), this.loadRemoteOptions({
                        tagId: r,
                        url: o,
                        index: s,
                        element: a,
                        remote: !0
                    })
                }
            }

            function eE(t, e, i, n = !1) {
                let o = e.get(t);
                return (!o || n) && (o = [...i.values()].map(e => e(t)), e.set(t, o)), o
            }
            class eM {
                constructor(t) {
                    this._engine = t, this.plugins = [], this._initializers = {
                        interactors: new Map,
                        movers: new Map,
                        updaters: new Map
                    }, this.interactors = new Map, this.movers = new Map, this.updaters = new Map, this.presets = new Map, this.drawers = new Map, this.pathGenerators = new Map
                }
                addInteractor(t, e) {
                    this._initializers.interactors.set(t, e)
                }
                addParticleMover(t, e) {
                    this._initializers.movers.set(t, e)
                }
                addParticleUpdater(t, e) {
                    this._initializers.updaters.set(t, e)
                }
                addPathGenerator(t, e) {
                    this.getPathGenerator(t) || this.pathGenerators.set(t, e)
                }
                addPlugin(t) {
                    this.getPlugin(t.id) || this.plugins.push(t)
                }
                addPreset(t, e, i = !1) {
                    (i || !this.getPreset(t)) && this.presets.set(t, e)
                }
                addShapeDrawer(t, e) {
                    F(t, t => {
                        this.getShapeDrawer(t) || this.drawers.set(t, e)
                    })
                }
                destroy(t) {
                    this.updaters.delete(t), this.movers.delete(t), this.interactors.delete(t)
                }
                getAvailablePlugins(t) {
                    let e = new Map;
                    for (let i of this.plugins) i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
                    return e
                }
                getInteractors(t, e = !1) {
                    return eE(t, this.interactors, this._initializers.interactors, e)
                }
                getMovers(t, e = !1) {
                    return eE(t, this.movers, this._initializers.movers, e)
                }
                getPathGenerator(t) {
                    return this.pathGenerators.get(t)
                }
                getPlugin(t) {
                    return this.plugins.find(e => e.id === t)
                }
                getPreset(t) {
                    return this.presets.get(t)
                }
                getShapeDrawer(t) {
                    return this.drawers.get(t)
                }
                getSupportedShapes() {
                    return this.drawers.keys()
                }
                getUpdaters(t, e = !1) {
                    return eE(t, this.updaters, this._initializers.updaters, e)
                }
                loadOptions(t, e) {
                    for (let i of this.plugins) i.loadOptions(t, e)
                }
                loadParticlesOptions(t, e, ...i) {
                    let n = this.updaters.get(t);
                    if (n)
                        for (let t of n) t.loadOptions && t.loadOptions(e, ...i)
                }
            }
            class ez {
                constructor() {
                    this._domArray = [], this._eventDispatcher = new n, this._initialized = !1, this._loader = new eS(this), this.plugins = new eM(this)
                }
                get version() {
                    return "2.9.3"
                }
                addEventListener(t, e) {
                    this._eventDispatcher.addEventListener(t, e)
                }
                async addInteractor(t, e) {
                    this.plugins.addInteractor(t, e), await this.refresh()
                }
                async addMover(t, e) {
                    this.plugins.addParticleMover(t, e), await this.refresh()
                }
                async addParticleUpdater(t, e) {
                    this.plugins.addParticleUpdater(t, e), await this.refresh()
                }
                async addPathGenerator(t, e) {
                    this.plugins.addPathGenerator(t, e), await this.refresh()
                }
                async addPlugin(t) {
                    this.plugins.addPlugin(t), await this.refresh()
                }
                async addPreset(t, e, i = !1) {
                    this.plugins.addPreset(t, e, i), await this.refresh()
                }
                async addShape(t, e, i, n, o) {
                    let r;
                    r = "function" == typeof e ? {
                        afterEffect: n,
                        destroy: o,
                        draw: e,
                        init: i
                    } : e, this.plugins.addShapeDrawer(t, r), await this.refresh()
                }
                dispatchEvent(t, e) {
                    this._eventDispatcher.dispatchEvent(t, e)
                }
                dom() {
                    return this._domArray
                }
                domItem(t) {
                    let e = this.dom(),
                        i = e[t];
                    if (i && !i.destroyed) return i;
                    e.splice(t, 1)
                }
                init() {
                    this._initialized || (this._initialized = !0)
                }
                async load(t, e) {
                    return this._loader.load(t, e)
                }
                async loadFromArray(t, e, i) {
                    return this._loader.load(t, e, i)
                }
                async loadJSON(t, e, i) {
                    return this._loader.loadJSON(t, e, i)
                }
                async refresh() {
                    for (let t of this.dom()) await t.refresh()
                }
                removeEventListener(t, e) {
                    this._eventDispatcher.removeEventListener(t, e)
                }
                async set(t, e, i) {
                    return this._loader.set(t, e, i)
                }
                async setJSON(t, e, i, n) {
                    return this._loader.setJSON(t, e, i, n)
                }
                setOnClickHandler(t) {
                    let e = this.dom();
                    if (!e.length) throw Error("Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()");
                    for (let i of e) i.addClickHandler(t)
                }
            }
            class e_ {
                constructor() {
                    this.key = "hsl", this.stringPrefix = "hsl"
                }
                handleColor(t) {
                    var e;
                    let i = null !== (e = t.value.hsl) && void 0 !== e ? e : t.value;
                    if (void 0 !== i.h && void 0 !== i.s && void 0 !== i.l) return X(i)
                }
                handleRangeColor(t) {
                    var e;
                    let i = null !== (e = t.value.hsl) && void 0 !== e ? e : t.value;
                    if (void 0 !== i.h && void 0 !== i.l) return X({
                        h: p(i.h),
                        l: p(i.l),
                        s: p(i.s)
                    })
                }
                parseString(t) {
                    if (!t.startsWith("hsl")) return;
                    let e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                    return e ? function(t) {
                        let e = X(t);
                        return {
                            a: t.a,
                            b: e.b,
                            g: e.g,
                            r: e.r
                        }
                    }({
                        a: e.length > 4 ? k(e[5]) : 1,
                        h: parseInt(e[1], 10),
                        l: parseInt(e[3], 10),
                        s: parseInt(e[2], 10)
                    }) : void 0
                }
            }
            class eR {
                constructor() {
                    this.key = "rgb", this.stringPrefix = "rgb"
                }
                handleColor(t) {
                    var e;
                    let i = null !== (e = t.value.rgb) && void 0 !== e ? e : t.value;
                    if (void 0 !== i.r) return i
                }
                handleRangeColor(t) {
                    var e;
                    let i = null !== (e = t.value.rgb) && void 0 !== e ? e : t.value;
                    if (void 0 !== i.r) return {
                        r: p(i.r),
                        g: p(i.g),
                        b: p(i.b)
                    }
                }
                parseString(t) {
                    if (!t.startsWith(this.stringPrefix)) return;
                    let e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(t);
                    return e ? {
                        a: e.length > 4 ? k(e[5]) : 1,
                        b: parseInt(e[3], 10),
                        g: parseInt(e[2], 10),
                        r: parseInt(e[1], 10)
                    } : void 0
                }
            }
            class eA {
                constructor(t) {
                    this.container = t, this.type = "external"
                }
            }
            class eT {
                constructor(t) {
                    this.container = t, this.type = "particles"
                }
            }
            let eD = new eR,
                eL = new e_;
            Z(eD), Z(eL);
            let eI = new ez;
            eI.init()
        },
        63253: function(t, e, i) {
            "use strict";
            i.d(e, {
                R: function() {
                    return eV
                }
            });
            var n = i(62742);
            class o {
                constructor() {
                    this.radius = 0, this.mass = 0
                }
                load(t) {
                    t && (void 0 !== t.mass && (this.mass = t.mass), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
            class r extends n.SW {
                constructor() {
                    super(), this.density = 5, this.value = 50, this.limit = new o
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.density && (this.density = t.density), "number" == typeof t.limit ? this.limit.radius = t.limit : this.limit.load(t.limit))
                }
            }
            class s {
                constructor() {
                    this.color = new n.Oz, this.color.value = "#000000", this.draggable = !1, this.opacity = 1, this.destroy = !0, this.orbits = !1, this.size = new r
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.color && (this.color = n.Oz.create(this.color, t.color)), void 0 !== t.draggable && (this.draggable = t.draggable), this.name = t.name, void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.position && (this.position = {}, void 0 !== t.position.x && (this.position.x = (0, n.Cs)(t.position.x)), void 0 !== t.position.y && (this.position.y = (0, n.Cs)(t.position.y))), void 0 !== t.size && this.size.load(t.size), void 0 !== t.destroy && (this.destroy = t.destroy), void 0 !== t.orbits && (this.orbits = t.orbits))
                }
            }
            class a {
                constructor(t, e, i, o) {
                    var r, a, l;
                    this.absorbers = t, this.container = e, this.initialPosition = o ? n.OW.create(o.x, o.y) : void 0, i instanceof s ? this.options = i : (this.options = new s, this.options.load(i)), this.dragging = !1, this.name = this.options.name, this.opacity = this.options.opacity, this.size = (0, n.Gu)(this.options.size.value) * e.retina.pixelRatio, this.mass = this.size * this.options.size.density * e.retina.reduceFactor;
                    let u = this.options.size.limit;
                    this.limit = {
                        radius: u.radius * e.retina.pixelRatio * e.retina.reduceFactor,
                        mass: u.mass
                    }, this.color = null !== (r = (0, n.tX)(this.options.color)) && void 0 !== r ? r : {
                        b: 0,
                        g: 0,
                        r: 0
                    }, this.position = null !== (l = null === (a = this.initialPosition) || void 0 === a ? void 0 : a.copy()) && void 0 !== l ? l : this.calcPosition()
                }
                attract(t) {
                    let e = this.container,
                        i = this.options;
                    if (i.draggable) {
                        let t = e.interactivity.mouse;
                        t.clicking && t.downPosition ? (0, n.Sp)(this.position, t.downPosition) <= this.size && (this.dragging = !0) : this.dragging = !1, this.dragging && t.position && (this.position.x = t.position.x, this.position.y = t.position.y)
                    }
                    let o = t.getPosition(),
                        {
                            dx: r,
                            dy: s,
                            distance: a
                        } = (0, n.oW)(this.position, o),
                        l = n.OW.create(r, s);
                    if (l.length = this.mass / Math.pow(a, 2) * e.retina.reduceFactor, a < this.size + t.getRadius()) {
                        let n = .033 * t.getRadius() * e.retina.pixelRatio;
                        this.size > t.getRadius() && a < this.size - t.getRadius() || void 0 !== t.absorberOrbit && t.absorberOrbit.length < 0 ? i.destroy ? t.destroy() : (t.needsNewPosition = !0, this.updateParticlePosition(t, l)) : (i.destroy && (t.size.value -= n), this.updateParticlePosition(t, l)), (this.limit.radius <= 0 || this.size < this.limit.radius) && (this.size += n), (this.limit.mass <= 0 || this.mass < this.limit.mass) && (this.mass += n * this.options.size.density * e.retina.reduceFactor)
                    } else this.updateParticlePosition(t, l)
                }
                draw(t) {
                    t.translate(this.position.x, this.position.y), t.beginPath(), t.arc(0, 0, this.size, 0, 2 * Math.PI, !1), t.closePath(), t.fillStyle = (0, n.iz)(this.color, this.opacity), t.fill()
                }
                resize() {
                    let t = this.initialPosition;
                    this.position = t && (0, n.Ac)(t, this.container.canvas.size, n.OW.origin) ? t : this.calcPosition()
                }
                calcPosition() {
                    let t = (0, n.Gz)({
                        size: this.container.canvas.size,
                        position: this.options.position
                    });
                    return n.OW.create(t.x, t.y)
                }
                updateParticlePosition(t, e) {
                    var i;
                    if (t.destroyed) return;
                    let o = this.container,
                        r = o.canvas.size;
                    if (t.needsNewPosition) {
                        let e = (0, n.p)({
                            size: r
                        });
                        t.position.setTo(e), t.velocity.setTo(t.initialVelocity), t.absorberOrbit = void 0, t.needsNewPosition = !1
                    }
                    if (this.options.orbits) {
                        if (void 0 === t.absorberOrbit && (t.absorberOrbit = n.OW.create(0, 0), t.absorberOrbit.length = (0, n.Sp)(t.getPosition(), this.position), t.absorberOrbit.angle = (0, n.sZ)() * Math.PI * 2), t.absorberOrbit.length <= this.size && !this.options.destroy) {
                            let e = Math.min(r.width, r.height);
                            t.absorberOrbit.length = e * (1 + (.2 * (0, n.sZ)() - .1))
                        }
                        void 0 === t.absorberOrbitDirection && (t.absorberOrbitDirection = t.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
                        let s = t.absorberOrbit.length,
                            a = t.absorberOrbit.angle,
                            l = t.absorberOrbitDirection;
                        t.velocity.setTo(n.OW.origin);
                        let u = {
                            x: "clockwise" === l ? Math.cos : Math.sin,
                            y: "clockwise" === l ? Math.sin : Math.cos
                        };
                        t.position.x = this.position.x + s * u.x(a), t.position.y = this.position.y + s * u.y(a), t.absorberOrbit.length -= e.length, t.absorberOrbit.angle += (null !== (i = t.retina.moveSpeed) && void 0 !== i ? i : 0) * o.retina.pixelRatio / 100 * o.retina.reduceFactor
                    } else {
                        let i = n.OW.origin;
                        i.length = e.length, i.angle = e.angle, t.velocity.addTo(i)
                    }
                }
            }
            class l {
                constructor(t) {
                    this.container = t, this.array = [], this.absorbers = [], this.interactivityAbsorbers = [], t.getAbsorber = t => void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find(e => e.name === t), t.addAbsorber = (t, e) => this.addAbsorber(t, e)
                }
                addAbsorber(t, e) {
                    let i = new a(this, this.container, t, e);
                    return this.array.push(i), i
                }
                draw(t) {
                    for (let e of this.array) e.draw(t)
                }
                handleClickMode(t) {
                    let e = this.absorbers,
                        i = this.interactivityAbsorbers;
                    if ("absorber" === t) {
                        let t = (0, n.wA)(i),
                            o = null != t ? t : (0, n.wA)(e),
                            r = this.container.interactivity.mouse.clickPosition;
                        this.addAbsorber(o, r)
                    }
                }
                async init() {
                    this.absorbers = this.container.actualOptions.absorbers, this.interactivityAbsorbers = this.container.actualOptions.interactivity.modes.absorbers, (0, n.KH)(this.absorbers, t => {
                        this.addAbsorber(t)
                    })
                }
                particleUpdate(t) {
                    for (let e of this.array)
                        if (e.attract(t), t.destroyed) break
                }
                removeAbsorber(t) {
                    let e = this.array.indexOf(t);
                    e >= 0 && this.array.splice(e, 1)
                }
                resize() {
                    for (let t of this.array) t.resize()
                }
                stop() {
                    this.array = []
                }
            }
            class u {
                constructor() {
                    this.id = "absorbers"
                }
                getPlugin(t) {
                    return new l(t)
                }
                loadOptions(t, e) {
                    var i, o;
                    (this.needsPlugin(t) || this.needsPlugin(e)) && ((null == e ? void 0 : e.absorbers) && (t.absorbers = (0, n.KH)(e.absorbers, t => {
                        let e = new s;
                        return e.load(t), e
                    })), t.interactivity.modes.absorbers = (0, n.KH)(null === (o = null === (i = null == e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === o ? void 0 : o.absorbers, t => {
                        let e = new s;
                        return e.load(t), e
                    }))
                }
                needsPlugin(t) {
                    var e, i, o;
                    if (!t) return !1;
                    let r = t.absorbers;
                    return r instanceof Array ? !!r.length : !!(r || (null === (o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) || void 0 === i ? void 0 : i.onClick) || void 0 === o ? void 0 : o.mode) && (0, n.dB)("absorber", t.interactivity.events.onClick.mode))
                }
            }
            async function c(t) {
                let e = new u;
                await t.addPlugin(e)
            }
            class d {
                load(t) {
                    t && (void 0 !== t.bottom && (this.bottom = (0, n.Cs)(t.bottom)), void 0 !== t.left && (this.left = (0, n.Cs)(t.left)), void 0 !== t.right && (this.right = (0, n.Cs)(t.right)), void 0 !== t.top && (this.top = (0, n.Cs)(t.top)))
                }
            }
            class h extends n.SW {
                constructor() {
                    super(), this.value = 3
                }
            }
            class p extends n.SW {
                constructor() {
                    super(), this.value = {
                        min: 4,
                        max: 9
                    }
                }
            }
            class f {
                constructor() {
                    this.count = 1, this.factor = new h, this.rate = new p, this.sizeOffset = !0
                }
                load(t) {
                    var e;
                    t && (void 0 !== t.color && (this.color = n.Oz.create(this.color, t.color)), void 0 !== t.count && (this.count = t.count), this.factor.load(t.factor), this.rate.load(t.rate), this.particles = (0, n.KH)(t.particles, t => (0, n.ZB)({}, t)), void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset), t.colorOffset && (this.colorOffset = null !== (e = this.colorOffset) && void 0 !== e ? e : {}, void 0 !== t.colorOffset.h && (this.colorOffset.h = t.colorOffset.h), void 0 !== t.colorOffset.s && (this.colorOffset.s = t.colorOffset.s), void 0 !== t.colorOffset.l && (this.colorOffset.l = t.colorOffset.l)))
                }
            }
            class v {
                constructor() {
                    this.bounds = new d, this.mode = "none", this.split = new f
                }
                load(t) {
                    t && (t.mode && (this.mode = t.mode), t.bounds && this.bounds.load(t.bounds), this.split.load(t.split))
                }
            }
            class m {
                constructor(t, e) {
                    this.engine = t, this.container = e
                }
                init(t) {
                    let e = this.container,
                        i = t.options.destroy;
                    if (!i) return;
                    t.splitCount = 0;
                    let o = i.bounds;
                    t.destroyBounds || (t.destroyBounds = {}), o.bottom && (t.destroyBounds.bottom = (0, n.Gu)(o.bottom) * e.canvas.size.height / 100), o.left && (t.destroyBounds.left = (0, n.Gu)(o.left) * e.canvas.size.width / 100), o.right && (t.destroyBounds.right = (0, n.Gu)(o.right) * e.canvas.size.width / 100), o.top && (t.destroyBounds.top = (0, n.Gu)(o.top) * e.canvas.size.height / 100)
                }
                isEnabled(t) {
                    return !t.destroyed
                }
                loadOptions(t, ...e) {
                    for (let i of (t.destroy || (t.destroy = new v), e)) t.destroy.load(null == i ? void 0 : i.destroy)
                }
                particleDestroyed(t, e) {
                    if (e) return;
                    let i = t.options.destroy;
                    i && "split" === i.mode && this.split(t)
                }
                update(t) {
                    if (!this.isEnabled(t)) return;
                    let e = t.getPosition(),
                        i = t.destroyBounds;
                    i && (void 0 !== i.bottom && e.y >= i.bottom || void 0 !== i.left && e.x <= i.left || void 0 !== i.right && e.x >= i.right || void 0 !== i.top && e.y <= i.top) && t.destroy()
                }
                addSplitParticle(t, e) {
                    var i, o, r;
                    let s = t.options.destroy;
                    if (!s) return;
                    let a = s.split,
                        l = (0, n.hT)(this.engine, this.container, t.options),
                        u = (0, n.NA)(a.factor),
                        c = t.getFillColor();
                    a.color ? l.color.load(a.color) : a.colorOffset && c ? l.color.load({
                        value: {
                            hsl: {
                                h: c.h + (0, n.Gu)(null !== (i = a.colorOffset.h) && void 0 !== i ? i : 0),
                                s: c.s + (0, n.Gu)(null !== (o = a.colorOffset.s) && void 0 !== o ? o : 0),
                                l: c.l + (0, n.Gu)(null !== (r = a.colorOffset.l) && void 0 !== r ? r : 0)
                            }
                        }
                    }) : l.color.load({
                        value: {
                            hsl: t.getFillColor()
                        }
                    }), l.move.load({
                        center: {
                            x: t.position.x,
                            y: t.position.y,
                            mode: "precise"
                        }
                    }), "number" == typeof l.size.value ? l.size.value /= u : (l.size.value.min /= u, l.size.value.max /= u), l.load(e);
                    let d = a.sizeOffset ? (0, n.Cs)(-t.size.value, t.size.value) : 0,
                        h = {
                            x: t.position.x + (0, n.vd)(d),
                            y: t.position.y + (0, n.vd)(d)
                        };
                    return this.container.particles.addParticle(h, l, t.group, e => {
                        var i;
                        return !(e.size.value < .5) && (e.velocity.length = (0, n.vd)((0, n.Cs)(t.velocity.length, e.velocity.length)), e.splitCount = (null !== (i = t.splitCount) && void 0 !== i ? i : 0) + 1, e.unbreakable = !0, setTimeout(() => {
                            e.unbreakable = !1
                        }, 500), !0)
                    })
                }
                split(t) {
                    let e = t.options.destroy;
                    if (!e) return;
                    let i = e.split;
                    if (i.count >= 0 && (void 0 === t.splitCount || t.splitCount++ > i.count)) return;
                    let o = (0, n.NA)(i.rate),
                        r = (0, n.wA)(i.particles);
                    for (let e = 0; e < o; e++) this.addSplitParticle(t, r)
                }
            }
            async function y(t) {
                await t.addParticleUpdater("destroy", e => new m(t, e))
            }
            class g {
                randomPosition(t, e, i) {
                    let [o, r] = [e.width / 2, e.height / 2], s = ((t, e) => {
                        let i = Math.atan(e / t * Math.tan(2 * Math.PI * ((0, n.sZ)() / 4))),
                            o = (0, n.sZ)();
                        return o < .25 ? i : o < .5 ? Math.PI - i : o < .75 ? Math.PI + i : -i
                    })(o, r), a = o * r / Math.sqrt((r * Math.cos(s)) ** 2 + (o * Math.sin(s)) ** 2), l = i ? a * Math.sqrt((0, n.sZ)()) : a;
                    return {
                        x: t.x + l * Math.cos(s),
                        y: t.y + l * Math.sin(s)
                    }
                }
            }
            class b {
                constructor() {
                    this.wait = !1
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.wait && (this.wait = t.wait))
                }
            }
            class w {
                constructor() {
                    this.quantity = 1, this.delay = .1
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.quantity && (this.quantity = (0, n.Cs)(t.quantity)), void 0 !== t.delay && (this.delay = (0, n.Cs)(t.delay)))
                }
            }
            class x {
                constructor() {
                    this.mode = "percent", this.height = 0, this.width = 0
                }
                load(t) {
                    void 0 !== t && (void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.height && (this.height = t.height), void 0 !== t.width && (this.width = t.width))
                }
            }
            class C {
                constructor() {
                    this.autoPlay = !0, this.fill = !0, this.life = new b, this.rate = new w, this.shape = "square", this.startCount = 0
                }
                load(t) {
                    t && (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay), void 0 !== t.size && (this.size || (this.size = new x), this.size.load(t.size)), void 0 !== t.direction && (this.direction = t.direction), this.domId = t.domId, void 0 !== t.fill && (this.fill = t.fill), this.life.load(t.life), this.name = t.name, this.particles = (0, n.KH)(t.particles, t => (0, n.ZB)({}, t)), this.rate.load(t.rate), void 0 !== t.shape && (this.shape = t.shape), void 0 !== t.position && (this.position = {}, void 0 !== t.position.x && (this.position.x = (0, n.Cs)(t.position.x)), void 0 !== t.position.y && (this.position.y = (0, n.Cs)(t.position.y))), void 0 !== t.spawnColor && (void 0 === this.spawnColor && (this.spawnColor = new n.RC), this.spawnColor.load(t.spawnColor)), void 0 !== t.startCount && (this.startCount = t.startCount))
                }
            }
            class k {
                constructor(t, e, i, o, r) {
                    var s, a, l, u, c, d, h, p;
                    this.emitters = e, this.container = i, this._engine = t, this._currentDuration = 0, this._currentEmitDelay = 0, this._currentSpawnDelay = 0, this._initialPosition = r, o instanceof C ? this.options = o : (this.options = new C, this.options.load(o)), this._spawnDelay = (null !== (s = this.options.life.delay) && void 0 !== s ? s : 0) * 1e3 / this.container.retina.reduceFactor, this.position = null !== (a = this._initialPosition) && void 0 !== a ? a : this.calcPosition(), this.name = this.options.name, this._shape = null === (l = this._engine.emitterShapeManager) || void 0 === l ? void 0 : l.getShape(this.options.shape), this.fill = this.options.fill, this._firstSpawn = !this.options.life.wait, this._startParticlesAdded = !1;
                    let f = (0, n.ZB)({}, this.options.particles);
                    null != f || (f = {}), null !== (u = f.move) && void 0 !== u || (f.move = {}), null !== (c = (p = f.move).direction) && void 0 !== c || (p.direction = this.options.direction), this.options.spawnColor && (this.spawnColor = (0, n.lN)(this.options.spawnColor)), this._paused = !this.options.autoPlay, this._particlesOptions = f, this.size = null !== (d = this.options.size) && void 0 !== d ? d : (() => {
                        let t = new x;
                        return t.load({
                            height: 0,
                            mode: "percent",
                            width: 0
                        }), t
                    })(), this._lifeCount = null !== (h = this.options.life.count) && void 0 !== h ? h : -1, this._immortal = this._lifeCount <= 0, this._engine.dispatchEvent("emitterCreated", {
                        container: i,
                        data: {
                            emitter: this
                        }
                    }), this.play()
                }
                externalPause() {
                    this._paused = !0, this.pause()
                }
                externalPlay() {
                    this._paused = !1, this.play()
                }
                getPosition() {
                    if (this.options.domId) {
                        let t = this.container,
                            e = document.getElementById(this.options.domId);
                        if (e) {
                            let i = e.getBoundingClientRect();
                            return {
                                x: (i.x + i.width / 2) * t.retina.pixelRatio,
                                y: (i.y + i.height / 2) * t.retina.pixelRatio
                            }
                        }
                    }
                    return this.position
                }
                getSize() {
                    let t = this.container;
                    if (this.options.domId) {
                        let e = document.getElementById(this.options.domId);
                        if (e) {
                            let i = e.getBoundingClientRect();
                            return {
                                width: i.width * t.retina.pixelRatio,
                                height: i.height * t.retina.pixelRatio
                            }
                        }
                    }
                    return {
                        width: "percent" === this.size.mode ? t.canvas.size.width * this.size.width / 100 : this.size.width,
                        height: "percent" === this.size.mode ? t.canvas.size.height * this.size.height / 100 : this.size.height
                    }
                }
                pause() {
                    this._paused || delete this._emitDelay
                }
                play() {
                    var t;
                    if (!this._paused && this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal || !this.options.life.count) && (this._firstSpawn || this._currentSpawnDelay >= (null !== (t = this._spawnDelay) && void 0 !== t ? t : 0))) {
                        if (void 0 === this._emitDelay) {
                            let t = (0, n.Gu)(this.options.rate.delay);
                            this._emitDelay = 1e3 * t / this.container.retina.reduceFactor
                        }(this._lifeCount > 0 || this._immortal) && this.prepareToDie()
                    }
                }
                resize() {
                    let t = this._initialPosition;
                    this.position = t && (0, n.Ac)(t, this.container.canvas.size, n.OW.origin) ? t : this.calcPosition()
                }
                update(t) {
                    var e, i, n;
                    !this._paused && (this._firstSpawn && (this._firstSpawn = !1, this._currentSpawnDelay = null !== (e = this._spawnDelay) && void 0 !== e ? e : 0, this._currentEmitDelay = null !== (i = this._emitDelay) && void 0 !== i ? i : 0), this._startParticlesAdded || (this._startParticlesAdded = !0, this.emitParticles(this.options.startCount)), void 0 !== this._duration && (this._currentDuration += t.value, this._currentDuration >= this._duration && (this.pause(), void 0 !== this._spawnDelay && delete this._spawnDelay, !this._immortal && this._lifeCount--, this._lifeCount > 0 || this._immortal ? (this.position = this.calcPosition(), this._spawnDelay = (null !== (n = this.options.life.delay) && void 0 !== n ? n : 0) * 1e3 / this.container.retina.reduceFactor) : this.destroy(), this._currentDuration -= this._duration, delete this._duration)), void 0 !== this._spawnDelay && (this._currentSpawnDelay += t.value, this._currentSpawnDelay >= this._spawnDelay && (this._engine.dispatchEvent("emitterPlay", {
                        container: this.container
                    }), this.play(), this._currentSpawnDelay -= this._currentSpawnDelay, delete this._spawnDelay)), void 0 !== this._emitDelay && (this._currentEmitDelay += t.value, this._currentEmitDelay >= this._emitDelay && (this.emit(), this._currentEmitDelay -= this._emitDelay)))
                }
                calcPosition() {
                    return (0, n.Gz)({
                        size: this.container.canvas.size,
                        position: this.options.position
                    })
                }
                destroy() {
                    this.emitters.removeEmitter(this), this._engine.dispatchEvent("emitterDestroyed", {
                        container: this.container,
                        data: {
                            emitter: this
                        }
                    })
                }
                emit() {
                    if (this._paused) return;
                    let t = (0, n.Gu)(this.options.rate.quantity);
                    this.emitParticles(t)
                }
                emitParticles(t) {
                    var e, i, o;
                    let r = this.getPosition(),
                        s = this.getSize(),
                        a = (0, n.wA)(this._particlesOptions);
                    for (let l = 0; l < t; l++) {
                        let t = (0, n.ZB)({}, a);
                        if (this.spawnColor) {
                            let i = null === (e = this.options.spawnColor) || void 0 === e ? void 0 : e.animation;
                            i && (this.spawnColor.h = this.setColorAnimation(i.h, this.spawnColor.h, 360), this.spawnColor.s = this.setColorAnimation(i.s, this.spawnColor.s, 100), this.spawnColor.l = this.setColorAnimation(i.l, this.spawnColor.l, 100)), t.color ? t.color.value = this.spawnColor : t.color = {
                                value: this.spawnColor
                            }
                        }
                        if (!r) return;
                        let l = null !== (o = null === (i = this._shape) || void 0 === i ? void 0 : i.randomPosition(r, s, this.fill)) && void 0 !== o ? o : r;
                        this.container.particles.addParticle(l, t)
                    }
                }
                prepareToDie() {
                    var t;
                    if (this._paused) return;
                    let e = null === (t = this.options.life) || void 0 === t ? void 0 : t.duration;
                    this.container.retina.reduceFactor && (this._lifeCount > 0 || this._immortal) && void 0 !== e && e > 0 && (this._duration = 1e3 * e)
                }
                setColorAnimation(t, e, i) {
                    var o;
                    let r = this.container;
                    if (!t.enable) return e;
                    let s = (0, n.vd)(t.offset),
                        a = 1e3 * (0, n.Gu)(this.options.rate.delay) / r.retina.reduceFactor;
                    return (e + (0, n.Gu)(null !== (o = t.speed) && void 0 !== o ? o : 0) * r.fpsLimit / a + 3.6 * s) % i
                }
            }
            class P {
                constructor(t, e) {
                    this.container = e, this._engine = t, this.array = [], this.emitters = [], this.interactivityEmitters = {
                        random: {
                            count: 1,
                            enable: !1
                        },
                        value: []
                    }, e.getEmitter = t => void 0 === t || "number" == typeof t ? this.array[t || 0] : this.array.find(e => e.name === t), e.addEmitter = (t, e) => this.addEmitter(t, e), e.removeEmitter = t => {
                        let i = e.getEmitter(t);
                        i && this.removeEmitter(i)
                    }, e.playEmitter = t => {
                        let i = e.getEmitter(t);
                        i && i.externalPlay()
                    }, e.pauseEmitter = t => {
                        let i = e.getEmitter(t);
                        i && i.externalPause()
                    }
                }
                addEmitter(t, e) {
                    let i = new C;
                    i.load(t);
                    let n = new k(this._engine, this, this.container, i, e);
                    return this.array.push(n), n
                }
                handleClickMode(t) {
                    let e;
                    let i = this.emitters,
                        o = this.interactivityEmitters;
                    if ("emitter" !== t) return;
                    if (o && o.value instanceof Array) {
                        if (o.value.length > 0 && o.random.enable) {
                            e = [];
                            let t = [];
                            for (let i = 0; i < o.random.count; i++) {
                                let r = (0, n.dU)(o.value);
                                if (t.includes(r) && t.length < o.value.length) {
                                    i--;
                                    continue
                                }
                                t.push(r), e.push((0, n.c8)(o.value, r))
                            }
                        } else e = o.value
                    } else e = null == o ? void 0 : o.value;
                    let r = null != e ? e : i,
                        s = this.container.interactivity.mouse.clickPosition;
                    (0, n.KH)(r, t => {
                        this.addEmitter(t, s)
                    })
                }
                async init() {
                    if (this.emitters = this.container.actualOptions.emitters, this.interactivityEmitters = this.container.actualOptions.interactivity.modes.emitters, this.emitters) {
                        if (this.emitters instanceof Array)
                            for (let t of this.emitters) this.addEmitter(t);
                        else this.addEmitter(this.emitters)
                    }
                }
                pause() {
                    for (let t of this.array) t.pause()
                }
                play() {
                    for (let t of this.array) t.play()
                }
                removeEmitter(t) {
                    let e = this.array.indexOf(t);
                    e >= 0 && this.array.splice(e, 1)
                }
                resize() {
                    for (let t of this.array) t.resize()
                }
                stop() {
                    this.array = []
                }
                update(t) {
                    for (let e of this.array) e.update(t)
                }
            }
            let O = new Map;
            class S {
                constructor(t) {
                    this._engine = t
                }
                addShape(t, e) {
                    this.getShape(t) || O.set(t, e)
                }
                getShape(t) {
                    return O.get(t)
                }
                getSupportedShapes() {
                    return O.keys()
                }
            }

            function E(t, e) {
                return t + e * ((0, n.sZ)() - .5)
            }
            class M {
                randomPosition(t, e, i) {
                    if (i) return {
                        x: E(t.x, e.width),
                        y: E(t.y, e.height)
                    }; {
                        let i = e.width / 2,
                            o = e.height / 2,
                            r = Math.floor(4 * (0, n.sZ)()),
                            s = ((0, n.sZ)() - .5) * 2;
                        switch (r) {
                            case 0:
                                return {
                                    x: t.x + s * i,
                                    y: t.y - o
                                };
                            case 1:
                                return {
                                    x: t.x - i,
                                    y: t.y + s * o
                                };
                            case 2:
                                return {
                                    x: t.x + s * i,
                                    y: t.y + o
                                };
                            default:
                                return {
                                    x: t.x + i,
                                    y: t.y + s * o
                                }
                        }
                    }
                }
            }
            class z {
                constructor(t) {
                    this._engine = t, this.id = "emitters"
                }
                getPlugin(t) {
                    return new P(this._engine, t)
                }
                loadOptions(t, e) {
                    var i, o, r, s, a, l;
                    if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
                    (null == e ? void 0 : e.emitters) && (t.emitters = (0, n.KH)(e.emitters, t => {
                        let e = new C;
                        return e.load(t), e
                    }));
                    let u = null === (o = null === (i = null == e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) || void 0 === o ? void 0 : o.emitters;
                    if (u) {
                        if (u instanceof Array) t.interactivity.modes.emitters = {
                            random: {
                                count: 1,
                                enable: !0
                            },
                            value: u.map(t => {
                                let e = new C;
                                return e.load(t), e
                            })
                        };
                        else if (void 0 !== u.value) {
                            if (u.value instanceof Array) t.interactivity.modes.emitters = {
                                random: {
                                    count: null !== (r = u.random.count) && void 0 !== r ? r : 1,
                                    enable: null !== (s = u.random.enable) && void 0 !== s && s
                                },
                                value: u.value.map(t => {
                                    let e = new C;
                                    return e.load(t), e
                                })
                            };
                            else {
                                let e = new C;
                                e.load(u.value), t.interactivity.modes.emitters = {
                                    random: {
                                        count: null !== (a = u.random.count) && void 0 !== a ? a : 1,
                                        enable: null !== (l = u.random.enable) && void 0 !== l && l
                                    },
                                    value: e
                                }
                            }
                        } else(t.interactivity.modes.emitters = {
                            random: {
                                count: 1,
                                enable: !1
                            },
                            value: new C
                        }).value.load(u)
                    }
                }
                needsPlugin(t) {
                    var e, i, o;
                    if (!t) return !1;
                    let r = t.emitters;
                    return r instanceof Array && !!r.length || void 0 !== r || !!(null === (o = null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) || void 0 === i ? void 0 : i.onClick) || void 0 === o ? void 0 : o.mode) && (0, n.dB)("emitter", t.interactivity.events.onClick.mode)
                }
            }
            async function _(t) {
                t.emitterShapeManager || (t.emitterShapeManager = new S(t)), t.addEmitterShape || (t.addEmitterShape = (e, i) => {
                    var n;
                    null === (n = t.emitterShapeManager) || void 0 === n || n.addShape(e, i)
                });
                let e = new z(t);
                await t.addPlugin(e), t.addEmitterShape("circle", new g), t.addEmitterShape("square", new M)
            }
            class R {
                constructor() {
                    this.delay = 1, this.pauseOnStop = !1, this.quantity = 1
                }
                load(t) {
                    t && (void 0 !== t.delay && (this.delay = t.delay), void 0 !== t.quantity && (this.quantity = t.quantity), void 0 !== t.particles && (this.particles = (0, n.ZB)({}, t.particles)), void 0 !== t.pauseOnStop && (this.pauseOnStop = t.pauseOnStop))
                }
            }
            class A extends n.L8 {
                constructor(t) {
                    super(t), this._delay = 0
                }
                clear() {}
                init() {}
                async interact(t) {
                    var e, i, n, o;
                    if (!this.container.retina.reduceFactor) return;
                    let r = this.container,
                        s = r.actualOptions.interactivity.modes.trail;
                    if (!s) return;
                    let a = 1e3 * s.delay / this.container.retina.reduceFactor;
                    if (this._delay < a && (this._delay += t.value), this._delay < a) return;
                    let l = !0;
                    s.pauseOnStop && (r.interactivity.mouse.position === this._lastPosition || (null === (e = r.interactivity.mouse.position) || void 0 === e ? void 0 : e.x) === (null === (i = this._lastPosition) || void 0 === i ? void 0 : i.x) && (null === (n = r.interactivity.mouse.position) || void 0 === n ? void 0 : n.y) === (null === (o = this._lastPosition) || void 0 === o ? void 0 : o.y)) && (l = !1), r.interactivity.mouse.position ? this._lastPosition = {
                        x: r.interactivity.mouse.position.x,
                        y: r.interactivity.mouse.position.y
                    } : delete this._lastPosition, l && r.particles.push(s.quantity, r.interactivity.mouse, s.particles), this._delay -= a
                }
                isEnabled(t) {
                    var e;
                    let i = this.container,
                        o = i.actualOptions,
                        r = i.interactivity.mouse,
                        s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events;
                    return r.clicking && r.inside && !!r.position && (0, n.dB)("trail", s.onClick.mode) || r.inside && !!r.position && (0, n.dB)("trail", s.onHover.mode)
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.trail || (t.trail = new R), e)) t.trail.load(null == i ? void 0 : i.trail)
                }
                reset() {}
            }
            async function T(t) {
                await t.addInteractor("externalTrail", t => new A(t))
            }
            class D {
                constructor() {
                    this.enable = !1, this.value = 0
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.value && (this.value = (0, n.Cs)(t.value)))
                }
            }
            class L {
                constructor() {
                    this.darken = new D, this.enable = !1, this.enlighten = new D, this.mode = "vertical", this.speed = 25
                }
                load(t) {
                    t && (void 0 !== t.backColor && (this.backColor = n.Oz.create(this.backColor, t.backColor)), this.darken.load(t.darken), void 0 !== t.enable && (this.enable = t.enable), this.enlighten.load(t.enlighten), void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.speed && (this.speed = (0, n.Cs)(t.speed)))
                }
            }
            class I {
                getTransformValues(t) {
                    var e;
                    let i = (null === (e = t.roll) || void 0 === e ? void 0 : e.enable) && t.roll,
                        n = i && i.horizontal,
                        o = i && i.vertical;
                    return {
                        a: n ? Math.cos(i.angle) : void 0,
                        d: o ? Math.sin(i.angle) : void 0
                    }
                }
                init(t) {
                    let e = t.options.roll;
                    if (null == e ? void 0 : e.enable) {
                        if (t.roll = {
                                enable: e.enable,
                                horizontal: "horizontal" === e.mode || "both" === e.mode,
                                vertical: "vertical" === e.mode || "both" === e.mode,
                                angle: (0, n.sZ)() * Math.PI * 2,
                                speed: (0, n.Gu)(e.speed) / 360
                            }, e.backColor) t.backColor = (0, n.lN)(e.backColor);
                        else if (e.darken.enable && e.enlighten.enable) {
                            let i = (0, n.sZ)() >= .5 ? "darken" : "enlighten";
                            t.roll.alter = {
                                type: i,
                                value: (0, n.Gu)("darken" === i ? e.darken.value : e.enlighten.value)
                            }
                        } else e.darken.enable ? t.roll.alter = {
                            type: "darken",
                            value: (0, n.Gu)(e.darken.value)
                        } : e.enlighten.enable && (t.roll.alter = {
                            type: "enlighten",
                            value: (0, n.Gu)(e.enlighten.value)
                        })
                    } else t.roll = {
                        enable: !1,
                        horizontal: !1,
                        vertical: !1,
                        angle: 0,
                        speed: 0
                    }
                }
                isEnabled(t) {
                    let e = t.options.roll;
                    return !t.destroyed && !t.spawning && !!(null == e ? void 0 : e.enable)
                }
                loadOptions(t, ...e) {
                    for (let i of (t.roll || (t.roll = new L), e)) t.roll.load(null == i ? void 0 : i.roll)
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        let i = t.options.roll;
                        if (!t.roll || !(null == i ? void 0 : i.enable)) return;
                        let n = t.roll.speed * e.factor,
                            o = 2 * Math.PI;
                        t.roll.angle += n, t.roll.angle > o && (t.roll.angle -= o)
                    }(t, e)
                }
            }
            async function V(t) {
                await t.addParticleUpdater("roll", () => new I)
            }
            let j = t => {
                let e = (e, i) => t.load(e, i);
                return e.load = (e, i, n) => {
                    t.loadJSON(e, i).then(t => {
                        t && n(t)
                    }).catch(() => {
                        n(void 0)
                    })
                }, e.setOnClickHandler = e => {
                    t.setOnClickHandler(e)
                }, {
                    particlesJS: e,
                    pJSDom: t.dom()
                }
            };
            class B {
                constructor() {
                    this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = (0, n.Cs)(t.speed)), void 0 !== t.decay && (this.decay = (0, n.Cs)(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class F extends n.SW {
                constructor() {
                    super(), this.animation = new B, this.direction = "clockwise", this.path = !1, this.value = 0
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.direction && (this.direction = t.direction), this.animation.load(t.animation), void 0 !== t.path && (this.path = t.path))
                }
            }
            class W {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    let e = t.options.rotate;
                    if (!e) return;
                    t.rotate = {
                        enable: e.animation.enable,
                        value: (0, n.Gu)(e.value) * Math.PI / 180
                    }, t.pathRotation = e.path;
                    let i = e.direction;
                    switch ("random" === i && (i = Math.floor(2 * (0, n.sZ)()) > 0 ? "counter-clockwise" : "clockwise"), i) {
                        case "counter-clockwise":
                        case "counterClockwise":
                            t.rotate.status = "decreasing";
                            break;
                        case "clockwise":
                            t.rotate.status = "increasing"
                    }
                    let o = e.animation;
                    o.enable && (t.rotate.decay = 1 - (0, n.Gu)(o.decay), t.rotate.velocity = (0, n.Gu)(o.speed) / 360 * this.container.retina.reduceFactor, o.sync || (t.rotate.velocity *= (0, n.sZ)())), t.rotation = t.rotate.value
                }
                isEnabled(t) {
                    let e = t.options.rotate;
                    return !!e && !t.destroyed && !t.spawning && e.animation.enable && !e.path
                }
                loadOptions(t, ...e) {
                    for (let i of (t.rotate || (t.rotate = new F), e)) t.rotate.load(null == i ? void 0 : i.rotate)
                }
                update(t, e) {
                    var i, n;
                    this.isEnabled(t) && (! function(t, e) {
                        var i, n;
                        let o = t.rotate,
                            r = t.options.rotate;
                        if (!o || !r) return;
                        let s = r.animation,
                            a = (null !== (i = o.velocity) && void 0 !== i ? i : 0) * e.factor,
                            l = 2 * Math.PI,
                            u = null !== (n = o.decay) && void 0 !== n ? n : 1;
                        s.enable && ("increasing" === o.status ? (o.value += a, o.value > l && (o.value -= l)) : (o.value -= a, o.value < 0 && (o.value += l)), o.velocity && 1 !== u && (o.velocity *= u))
                    }(t, e), t.rotation = null !== (n = null === (i = t.rotate) || void 0 === i ? void 0 : i.value) && void 0 !== n ? n : 0)
                }
            }
            async function q(t) {
                await t.addParticleUpdater("rotate", t => new W(t))
            }
            class U {
                init(t) {
                    var e;
                    let i = t.container,
                        o = t.options,
                        r = o.move.gravity,
                        s = o.move.spin;
                    if (t.gravity = {
                            enable: r.enable,
                            acceleration: (0, n.Gu)(r.acceleration),
                            inverse: r.inverse
                        }, s.enable) {
                        let o = null !== (e = s.position) && void 0 !== e ? e : {
                                x: 50,
                                y: 50
                            },
                            r = {
                                x: o.x / 100 * i.canvas.size.width,
                                y: o.y / 100 * i.canvas.size.height
                            },
                            a = t.getPosition(),
                            l = (0, n.Sp)(a, r),
                            u = (0, n.Gu)(s.acceleration);
                        t.retina.spinAcceleration = u * i.retina.pixelRatio, t.spin = {
                            center: r,
                            direction: t.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
                            angle: t.velocity.angle,
                            radius: l,
                            acceleration: t.retina.spinAcceleration
                        }
                    }
                }
                isEnabled(t) {
                    return !t.destroyed && t.options.move.enable
                }
                move(t, e) {
                    var i, o, r, s, a;
                    let l = t.options,
                        u = l.move;
                    if (!u.enable) return;
                    let c = t.container,
                        d = t.slow.inRange ? t.slow.factor : 1,
                        h = (null !== (i = (s = t.retina).moveSpeed) && void 0 !== i ? i : s.moveSpeed = (0, n.Gu)(u.speed) * c.retina.pixelRatio) * c.retina.reduceFactor,
                        p = null !== (o = (a = t.retina).moveDrift) && void 0 !== o ? o : a.moveDrift = (0, n.Gu)(t.options.move.drift) * c.retina.pixelRatio,
                        f = (0, n.KI)(l.size.value) * c.retina.pixelRatio,
                        v = (u.size ? t.getRadius() / f : 1) * d * (e.factor || 1) * h / 2;
                    if (u.spin.enable) ! function(t, e) {
                        let i = t.container;
                        if (!t.spin) return;
                        let n = {
                            x: "clockwise" === t.spin.direction ? Math.cos : Math.sin,
                            y: "clockwise" === t.spin.direction ? Math.sin : Math.cos
                        };
                        t.position.x = t.spin.center.x + t.spin.radius * n.x(t.spin.angle), t.position.y = t.spin.center.y + t.spin.radius * n.y(t.spin.angle), t.spin.radius += t.spin.acceleration;
                        let o = Math.max(i.canvas.size.width, i.canvas.size.height);
                        t.spin.radius > o / 2 ? (t.spin.radius = o / 2, t.spin.acceleration *= -1) : t.spin.radius < 0 && (t.spin.radius = 0, t.spin.acceleration *= -1), t.spin.angle += e / 100 * (1 - t.spin.radius / o)
                    }(t, v);
                    else {
                        ! function(t, e) {
                            var i;
                            let o = t.options.move.path;
                            if (!o.enable) return;
                            if (t.lastPathTime <= t.pathDelay) {
                                t.lastPathTime += e.value;
                                return
                            }
                            let r = null === (i = t.pathGenerator) || void 0 === i ? void 0 : i.generate(t);
                            r && t.velocity.addTo(r), o.clamp && (t.velocity.x = (0, n.uZ)(t.velocity.x, -1, 1), t.velocity.y = (0, n.uZ)(t.velocity.y, -1, 1)), t.lastPathTime -= t.pathDelay
                        }(t, e);
                        let i = t.gravity,
                            o = (null == i ? void 0 : i.enable) && i.inverse ? -1 : 1;
                        (null == i ? void 0 : i.enable) && v && (t.velocity.y += i.acceleration * e.factor * o / (60 * v)), p && v && (t.velocity.x += p * e.factor / (60 * v));
                        let s = t.moveDecay;
                        1 != s && t.velocity.multTo(s);
                        let a = t.velocity.mult(v),
                            l = null !== (r = t.retina.maxSpeed) && void 0 !== r ? r : c.retina.maxSpeed;
                        (null == i ? void 0 : i.enable) && l > 0 && (!i.inverse && a.y >= 0 && a.y >= l || i.inverse && a.y <= 0 && a.y <= -l) && (a.y = o * l, v && (t.velocity.y = a.y / v));
                        let d = t.options.zIndex,
                            h = (1 - t.zIndexFactor) ** d.velocityRate;
                        1 != h && a.multTo(h), t.position.addTo(a), u.vibrate && (t.position.x += Math.sin(t.position.x * Math.cos(t.position.y)), t.position.y += Math.cos(t.position.y * Math.sin(t.position.x)))
                    }! function(t) {
                        let e = t.initialPosition,
                            {
                                dx: i,
                                dy: o
                            } = (0, n.oW)(e, t.position),
                            r = Math.abs(i),
                            s = Math.abs(o),
                            a = t.retina.maxDistance.horizontal,
                            l = t.retina.maxDistance.vertical;
                        if (a || l) {
                            if ((a && r >= a || l && s >= l) && !t.misplaced) t.misplaced = !!a && r > a || !!l && s > l, a && (t.velocity.x = t.velocity.y / 2 - t.velocity.x), l && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
                            else if ((!a || r < a) && (!l || s < l) && t.misplaced) t.misplaced = !1;
                            else if (t.misplaced) {
                                let i = t.position,
                                    o = t.velocity;
                                a && (i.x < e.x && o.x < 0 || i.x > e.x && o.x > 0) && (o.x *= -(0, n.sZ)()), l && (i.y < e.y && o.y < 0 || i.y > e.y && o.y > 0) && (o.y *= -(0, n.sZ)())
                            }
                        }
                    }(t)
                }
            }
            async function H(t) {
                t.addMover("base", () => new U)
            }
            class Z {
                draw(t, e, i) {
                    e.circleRange || (e.circleRange = {
                        min: 0,
                        max: 2 * Math.PI
                    });
                    let n = e.circleRange;
                    t.arc(0, 0, i, n.min, n.max, !1)
                }
                getSidesCount() {
                    return 12
                }
                particleInit(t, e) {
                    var i;
                    let n = e.shapeData,
                        o = null !== (i = null == n ? void 0 : n.angle) && void 0 !== i ? i : {
                            max: 360,
                            min: 0
                        };
                    e.circleRange = "object" != typeof o ? {
                        min: 0,
                        max: o * Math.PI / 180
                    } : {
                        min: o.min * Math.PI / 180,
                        max: o.max * Math.PI / 180
                    }
                }
            }
            async function N(t) {
                await t.addShape("circle", new Z)
            }

            function G(t, e, i, o, r) {
                var s, a;
                if (!e || !i.enable || void 0 !== e.loops && void 0 !== e.maxLoops && e.maxLoops > 0 && e.loops >= e.maxLoops) return;
                let l = (0, n.vd)(i.offset),
                    u = (null !== (s = e.velocity) && void 0 !== s ? s : 0) * t.factor + 3.6 * l,
                    c = null !== (a = e.decay) && void 0 !== a ? a : 1;
                r && "increasing" !== e.status ? (e.value -= u, e.value < 0 && (e.loops || (e.loops = 0), e.loops++, e.status = "increasing", e.value += e.value)) : (e.value += u, e.value > o && (e.loops || (e.loops = 0), e.loops++, r && (e.status = "decreasing", e.value -= e.value % o))), e.velocity && 1 !== c && (e.velocity *= c), e.value > o && (e.value %= o)
            }
            class $ {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    let e = (0, n.lN)(t.options.color, t.id, t.options.reduceDuplicates);
                    e && (t.color = (0, n.bS)(e, t.options.color.animation, this.container.retina.reduceFactor))
                }
                isEnabled(t) {
                    var e, i, n;
                    let o = t.options.color.animation;
                    return !t.destroyed && !t.spawning && ((null === (e = t.color) || void 0 === e ? void 0 : e.h.value) !== void 0 && o.h.enable || (null === (i = t.color) || void 0 === i ? void 0 : i.s.value) !== void 0 && o.s.enable || (null === (n = t.color) || void 0 === n ? void 0 : n.l.value) !== void 0 && o.l.enable)
                }
                update(t, e) {
                    ! function(t, e) {
                        var i, n, o;
                        let r = t.options.color.animation,
                            s = null === (i = t.color) || void 0 === i ? void 0 : i.h,
                            a = null === (n = t.color) || void 0 === n ? void 0 : n.s,
                            l = null === (o = t.color) || void 0 === o ? void 0 : o.l;
                        s && G(e, s, r.h, 360, !1), a && G(e, a, r.s, 100, !0), l && G(e, l, r.l, 100, !0)
                    }(t, e)
                }
            }
            async function Y(t) {
                await t.addParticleUpdater("color", t => new $(t))
            }
            class X {
                constructor() {
                    this.distance = 200, this.duration = .4, this.easing = "ease-out-quad", this.factor = 1, this.maxSpeed = 50, this.speed = 1
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed), void 0 !== t.speed && (this.speed = t.speed))
                }
            }
            class K extends n.L8 {
                constructor(t, e) {
                    super(e), this._engine = t, e.attract || (e.attract = {
                        particles: []
                    }), this.handleClickMode = t => {
                        let i = this.container.actualOptions.interactivity.modes.attract;
                        if (i && "attract" === t) {
                            for (let t of (e.attract || (e.attract = {
                                    particles: []
                                }), e.attract.clicking = !0, e.attract.count = 0, e.attract.particles)) this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                            e.attract.particles = [], e.attract.finish = !1, setTimeout(() => {
                                e.destroyed || (e.attract || (e.attract = {
                                    particles: []
                                }), e.attract.clicking = !1)
                            }, 1e3 * i.duration)
                        }
                    }
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.attract;
                    e && (t.retina.attractModeDistance = e.distance * t.retina.pixelRatio)
                }
                async interact() {
                    let t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.status === n.Wt,
                        o = e.interactivity.events,
                        r = o.onHover.enable,
                        s = o.onHover.mode,
                        a = o.onClick.enable,
                        l = o.onClick.mode;
                    i && r && (0, n.dB)("attract", s) ? this.hoverAttract() : a && (0, n.dB)("attract", l) && this.clickAttract()
                }
                isEnabled(t) {
                    var e;
                    let i = this.container,
                        o = i.actualOptions,
                        r = i.interactivity.mouse,
                        s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events;
                    if ((!r.position || !s.onHover.enable) && (!r.clickPosition || !s.onClick.enable)) return !1;
                    let a = s.onHover.mode,
                        l = s.onClick.mode;
                    return (0, n.dB)("attract", a) || (0, n.dB)("attract", l)
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.attract || (t.attract = new X), e)) t.attract.load(null == i ? void 0 : i.attract)
                }
                reset() {}
                clickAttract() {
                    let t = this.container;
                    if (t.attract || (t.attract = {
                            particles: []
                        }), t.attract.finish || (t.attract.count || (t.attract.count = 0), t.attract.count++, t.attract.count !== t.particles.count || (t.attract.finish = !0)), t.attract.clicking) {
                        let e = t.interactivity.mouse.clickPosition,
                            i = t.retina.attractModeDistance;
                        if (!i || i < 0 || !e) return;
                        this.processAttract(e, i, new n.Cd(e.x, e.y, i))
                    } else !1 === t.attract.clicking && (t.attract.particles = [])
                }
                hoverAttract() {
                    let t = this.container,
                        e = t.interactivity.mouse.position,
                        i = t.retina.attractModeDistance;
                    i && !(i < 0) && e && this.processAttract(e, i, new n.Cd(e.x, e.y, i))
                }
                processAttract(t, e, i) {
                    let o = this.container,
                        r = o.actualOptions.interactivity.modes.attract;
                    if (r)
                        for (let s of o.particles.quadTree.query(i, t => this.isEnabled(t))) {
                            let {
                                dx: i,
                                dy: o,
                                distance: a
                            } = (0, n.oW)(s.position, t), l = r.speed * r.factor, u = (0, n.uZ)((0, n._X)(r.easing)(1 - a / e) * l, 0, r.maxSpeed), c = n.OW.create(0 === a ? l : i / a * u, 0 === a ? l : o / a * u);
                            s.position.subFrom(c)
                        }
                }
            }
            async function J(t) {
                await t.addInteractor("externalAttract", e => new K(t, e))
            }
            class Q {
                constructor() {
                    this.distance = 200
                }
                load(t) {
                    t && void 0 !== t.distance && (this.distance = t.distance)
                }
            }
            class tt extends n.L8 {
                constructor(t) {
                    super(t)
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.bounce;
                    e && (t.retina.bounceModeDistance = e.distance * t.retina.pixelRatio)
                }
                async interact() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.events,
                        i = t.interactivity.status === n.Wt,
                        o = e.onHover.enable,
                        r = e.onHover.mode,
                        s = e.onDiv;
                    i && o && (0, n.dB)("bounce", r) ? this.processMouseBounce() : (0, n.XD)("bounce", s, (t, e) => this.singleSelectorBounce(t, e))
                }
                isEnabled(t) {
                    var e;
                    let i = this.container,
                        o = i.actualOptions,
                        r = i.interactivity.mouse,
                        s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events,
                        a = s.onDiv;
                    return r.position && s.onHover.enable && (0, n.dB)("bounce", s.onHover.mode) || (0, n.wm)("bounce", a)
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.bounce || (t.bounce = new Q), e)) t.bounce.load(null == i ? void 0 : i.bounce)
                }
                reset() {}
                processBounce(t, e, i) {
                    for (let o of this.container.particles.quadTree.query(i, t => this.isEnabled(t))) i instanceof n.Cd ? (0, n.kR)((0, n.gy)(o), {
                        position: t,
                        radius: e,
                        mass: e ** 2 * Math.PI / 2,
                        velocity: n.OW.origin,
                        factor: n.OW.origin
                    }) : i instanceof n.Ae && (0, n.dp)(o, (0, n.M_)(t, e))
                }
                processMouseBounce() {
                    let t = this.container,
                        e = t.retina.pixelRatio,
                        i = t.interactivity.mouse.position,
                        o = t.retina.bounceModeDistance;
                    o && !(o < 0) && i && this.processBounce(i, o, new n.Cd(i.x, i.y, o + 10 * e))
                }
                singleSelectorBounce(t, e) {
                    let i = this.container,
                        o = document.querySelectorAll(t);
                    o.length && o.forEach(t => {
                        let o = i.retina.pixelRatio,
                            r = {
                                x: (t.offsetLeft + t.offsetWidth / 2) * o,
                                y: (t.offsetTop + t.offsetHeight / 2) * o
                            },
                            s = t.offsetWidth / 2 * o,
                            a = 10 * o,
                            l = "circle" === e.type ? new n.Cd(r.x, r.y, s + a) : new n.Ae(t.offsetLeft * o - a, t.offsetTop * o - a, t.offsetWidth * o + 2 * a, t.offsetHeight * o + 2 * a);
                        this.processBounce(r, s, l)
                    })
                }
            }
            async function te(t) {
                await t.addInteractor("externalBounce", t => new tt(t))
            }
            class ti {
                constructor() {
                    this.distance = 200, this.duration = .4, this.mix = !1
                }
                load(t) {
                    if (t) {
                        if (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.mix && (this.mix = t.mix), void 0 !== t.opacity && (this.opacity = t.opacity), void 0 !== t.color) {
                            let e = this.color instanceof Array ? void 0 : this.color;
                            this.color = (0, n.KH)(t.color, t => n.Oz.create(e, t))
                        }
                        void 0 !== t.size && (this.size = t.size)
                    }
                }
            }
            class tn extends ti {
                constructor() {
                    super(), this.selectors = []
                }
                get ids() {
                    return (0, n.KH)(this.selectors, t => t.replace("#", ""))
                }
                set ids(t) {
                    this.selectors = (0, n.KH)(t, t => `#${t}`)
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
                }
            }
            class to extends ti {
                load(t) {
                    super.load(t), t && (this.divs = (0, n.KH)(t.divs, t => {
                        let e = new tn;
                        return e.load(t), e
                    }))
                }
            }

            function tr(t, e, i, o) {
                return e >= i ? (0, n.uZ)(t + (e - i) * o, t, e) : e < i ? (0, n.uZ)(t - (i - e) * o, e, t) : void 0
            }
            class ts extends n.L8 {
                constructor(t) {
                    super(t), t.bubble || (t.bubble = {}), this.handleClickMode = e => {
                        "bubble" === e && (t.bubble || (t.bubble = {}), t.bubble.clicking = !0)
                    }
                }
                clear(t, e, i) {
                    (!t.bubble.inRange || i) && (delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color)
                }
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.bubble;
                    e && (t.retina.bubbleModeDistance = e.distance * t.retina.pixelRatio, void 0 !== e.size && (t.retina.bubbleModeSize = e.size * t.retina.pixelRatio))
                }
                async interact(t) {
                    let e = this.container.actualOptions.interactivity.events,
                        i = e.onHover,
                        o = e.onClick,
                        r = i.enable,
                        s = i.mode,
                        a = o.enable,
                        l = o.mode,
                        u = e.onDiv;
                    r && (0, n.dB)("bubble", s) ? this.hoverBubble(t) : a && (0, n.dB)("bubble", l) ? this.clickBubble(t) : (0, n.XD)("bubble", u, (e, i) => this.singleSelectorHover(t, e, i))
                }
                isEnabled(t) {
                    var e;
                    let i = this.container,
                        o = i.actualOptions,
                        r = i.interactivity.mouse,
                        s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events,
                        a = s.onDiv,
                        l = (0, n.wm)("bubble", a);
                    if (!(l || s.onHover.enable && r.position || s.onClick.enable && r.clickPosition)) return !1;
                    let u = s.onHover.mode,
                        c = s.onClick.mode;
                    return (0, n.dB)("bubble", u) || (0, n.dB)("bubble", c) || l
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.bubble || (t.bubble = new to), e)) t.bubble.load(null == i ? void 0 : i.bubble)
                }
                reset(t) {
                    t.bubble.inRange = !1
                }
                clickBubble(t) {
                    var e, i;
                    let o = this.container,
                        r = o.actualOptions,
                        s = o.interactivity.mouse.clickPosition,
                        a = r.interactivity.modes.bubble;
                    if (!a || !s) return;
                    o.bubble || (o.bubble = {});
                    let l = o.retina.bubbleModeDistance;
                    if (l && !(l < 0))
                        for (let t of o.particles.quadTree.queryCircle(s, l, t => this.isEnabled(t))) {
                            if (!o.bubble.clicking) continue;
                            t.bubble.inRange = !o.bubble.durationEnd;
                            let r = t.getPosition(),
                                u = (0, n.Sp)(r, s),
                                c = (new Date().getTime() - (o.interactivity.mouse.clickTime || 0)) / 1e3;
                            c > a.duration && (o.bubble.durationEnd = !0), c > 2 * a.duration && (o.bubble.clicking = !1, o.bubble.durationEnd = !1);
                            let d = {
                                bubbleObj: {
                                    optValue: o.retina.bubbleModeSize,
                                    value: t.bubble.radius
                                },
                                particlesObj: {
                                    optValue: (0, n.KI)(t.options.size.value) * o.retina.pixelRatio,
                                    value: t.size.value
                                },
                                type: "size"
                            };
                            this.process(t, u, c, d);
                            let h = {
                                bubbleObj: {
                                    optValue: a.opacity,
                                    value: t.bubble.opacity
                                },
                                particlesObj: {
                                    optValue: (0, n.KI)(t.options.opacity.value),
                                    value: null !== (i = null === (e = t.opacity) || void 0 === e ? void 0 : e.value) && void 0 !== i ? i : 1
                                },
                                type: "opacity"
                            };
                            this.process(t, u, c, h), o.bubble.durationEnd ? delete t.bubble.color : u <= l ? this.hoverBubbleColor(t, u) : delete t.bubble.color
                        }
                }
                hoverBubble(t) {
                    let e = this.container,
                        i = e.interactivity.mouse.position,
                        o = e.retina.bubbleModeDistance;
                    if (o && !(o < 0) && void 0 !== i)
                        for (let t of e.particles.quadTree.queryCircle(i, o, t => this.isEnabled(t))) {
                            t.bubble.inRange = !0;
                            let r = t.getPosition(),
                                s = (0, n.Sp)(r, i),
                                a = 1 - s / o;
                            s <= o ? a >= 0 && e.interactivity.status === n.Wt && (this.hoverBubbleSize(t, a), this.hoverBubbleOpacity(t, a), this.hoverBubbleColor(t, a)) : this.reset(t), e.interactivity.status === n.aM && this.reset(t)
                        }
                }
                hoverBubbleColor(t, e, i) {
                    let o = this.container.actualOptions,
                        r = null != i ? i : o.interactivity.modes.bubble;
                    if (r) {
                        if (!t.bubble.finalColor) {
                            let e = r.color;
                            if (!e) return;
                            let i = (0, n.wA)(e);
                            t.bubble.finalColor = (0, n.lN)(i)
                        }
                        if (t.bubble.finalColor) {
                            if (r.mix) {
                                t.bubble.color = void 0;
                                let i = t.getFillColor();
                                t.bubble.color = i ? (0, n.lC)((0, n.oc)(i, t.bubble.finalColor, 1 - e, e)) : t.bubble.finalColor
                            } else t.bubble.color = t.bubble.finalColor
                        }
                    }
                }
                hoverBubbleOpacity(t, e, i) {
                    var o, r, s, a;
                    let l = this.container.actualOptions,
                        u = null !== (o = null == i ? void 0 : i.opacity) && void 0 !== o ? o : null === (r = l.interactivity.modes.bubble) || void 0 === r ? void 0 : r.opacity;
                    if (!u) return;
                    let c = t.options.opacity.value,
                        d = tr(null !== (a = null === (s = t.opacity) || void 0 === s ? void 0 : s.value) && void 0 !== a ? a : 1, u, (0, n.KI)(c), e);
                    void 0 !== d && (t.bubble.opacity = d)
                }
                hoverBubbleSize(t, e, i) {
                    let o = this.container,
                        r = (null == i ? void 0 : i.size) ? i.size * o.retina.pixelRatio : o.retina.bubbleModeSize;
                    if (void 0 === r) return;
                    let s = (0, n.KI)(t.options.size.value) * o.retina.pixelRatio,
                        a = tr(t.size.value, r, s, e);
                    void 0 !== a && (t.bubble.radius = a)
                }
                process(t, e, i, n) {
                    let o = this.container,
                        r = n.bubbleObj.optValue,
                        s = o.actualOptions.interactivity.modes.bubble;
                    if (!s || void 0 === r) return;
                    let a = s.duration,
                        l = o.retina.bubbleModeDistance,
                        u = n.particlesObj.optValue,
                        c = n.bubbleObj.value,
                        d = n.particlesObj.value || 0,
                        h = n.type;
                    if (l && !(l < 0) && r !== u) {
                        if (o.bubble || (o.bubble = {}), o.bubble.durationEnd) c && ("size" === h && delete t.bubble.radius, "opacity" === h && delete t.bubble.opacity);
                        else if (e <= l) {
                            if ((null != c ? c : d) !== r) {
                                let e = d - i * (d - r) / a;
                                "size" === h && (t.bubble.radius = e), "opacity" === h && (t.bubble.opacity = e)
                            }
                        } else "size" === h && delete t.bubble.radius, "opacity" === h && delete t.bubble.opacity
                    }
                }
                singleSelectorHover(t, e, i) {
                    let o = this.container,
                        r = document.querySelectorAll(e),
                        s = o.actualOptions.interactivity.modes.bubble;
                    s && r.length && r.forEach(e => {
                        let r = o.retina.pixelRatio,
                            a = {
                                x: (e.offsetLeft + e.offsetWidth / 2) * r,
                                y: (e.offsetTop + e.offsetHeight / 2) * r
                            },
                            l = e.offsetWidth / 2 * r,
                            u = "circle" === i.type ? new n.Cd(a.x, a.y, l) : new n.Ae(e.offsetLeft * r, e.offsetTop * r, e.offsetWidth * r, e.offsetHeight * r);
                        for (let i of o.particles.quadTree.query(u, t => this.isEnabled(t))) {
                            if (!u.contains(i.getPosition())) continue;
                            i.bubble.inRange = !0;
                            let o = s.divs,
                                r = (0, n.iC)(o, e);
                            i.bubble.div && i.bubble.div === e || (this.clear(i, t, !0), i.bubble.div = e), this.hoverBubbleSize(i, 1, r), this.hoverBubbleOpacity(i, 1, r), this.hoverBubbleColor(i, 1, r)
                        }
                    })
                }
            }
            async function ta(t) {
                await t.addInteractor("externalBubble", t => new ts(t))
            }
            class tl {
                constructor() {
                    this.opacity = .5
                }
                load(t) {
                    t && void 0 !== t.opacity && (this.opacity = t.opacity)
                }
            }
            class tu {
                constructor() {
                    this.distance = 80, this.links = new tl, this.radius = 60
                }
                get lineLinked() {
                    return this.links
                }
                set lineLinked(t) {
                    this.links = t
                }
                get line_linked() {
                    return this.links
                }
                set line_linked(t) {
                    this.links = t
                }
                load(t) {
                    var e, i;
                    t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i ? i : t.line_linked), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
            class tc extends n.L8 {
                constructor(t) {
                    super(t)
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.connect;
                    e && (t.retina.connectModeDistance = e.distance * t.retina.pixelRatio, t.retina.connectModeRadius = e.radius * t.retina.pixelRatio)
                }
                async interact() {
                    let t = this.container;
                    if (t.actualOptions.interactivity.events.onHover.enable && "pointermove" === t.interactivity.status) {
                        let e = t.interactivity.mouse.position;
                        if (!t.retina.connectModeDistance || t.retina.connectModeDistance < 0 || !t.retina.connectModeRadius || t.retina.connectModeRadius < 0 || !e) return;
                        let i = Math.abs(t.retina.connectModeRadius),
                            o = t.particles.quadTree.queryCircle(e, i, t => this.isEnabled(t)),
                            r = 0;
                        for (let e of o) {
                            let i = e.getPosition();
                            for (let s of o.slice(r + 1)) {
                                let o = s.getPosition(),
                                    r = Math.abs(t.retina.connectModeDistance),
                                    a = Math.abs(i.x - o.x),
                                    l = Math.abs(i.y - o.y);
                                a < r && l < r && function(t, e, i) {
                                    t.canvas.draw(o => {
                                        var r, s;
                                        let a = function(t, e, i, o) {
                                            let r = t.actualOptions.interactivity.modes.connect;
                                            if (r) return function(t, e, i, o) {
                                                let r = Math.floor(i.getRadius() / e.getRadius()),
                                                    s = e.getFillColor(),
                                                    a = i.getFillColor();
                                                if (!s || !a) return;
                                                let l = e.getPosition(),
                                                    u = i.getPosition(),
                                                    c = (0, n.oc)(s, a, e.getRadius(), i.getRadius()),
                                                    d = t.createLinearGradient(l.x, l.y, u.x, u.y);
                                                return d.addColorStop(0, (0, n.vz)(s, o)), d.addColorStop(r > 1 ? 1 : r, (0, n.iz)(c, o)), d.addColorStop(1, (0, n.vz)(a, o)), d
                                            }(e, i, o, r.links.opacity)
                                        }(t, o, e, i);
                                        if (!a) return;
                                        let l = e.getPosition(),
                                            u = i.getPosition();
                                        s = null !== (r = e.retina.linksWidth) && void 0 !== r ? r : 0, (0, n.pS)(o, l, u), o.lineWidth = s, o.strokeStyle = a, o.stroke()
                                    })
                                }(t, e, s)
                            }++r
                        }
                    }
                }
                isEnabled(t) {
                    var e;
                    let i = this.container,
                        o = i.interactivity.mouse,
                        r = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : i.actualOptions.interactivity).events;
                    return !!r.onHover.enable && !!o.position && (0, n.dB)("connect", r.onHover.mode)
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.connect || (t.connect = new tu), e)) t.connect.load(null == i ? void 0 : i.connect)
                }
                reset() {}
            }
            async function td(t) {
                await t.addInteractor("externalConnect", t => new tc(t))
            }
            class th {
                constructor() {
                    this.blink = !1, this.consent = !1, this.opacity = 1
                }
                load(t) {
                    t && (void 0 !== t.blink && (this.blink = t.blink), void 0 !== t.color && (this.color = n.Oz.create(this.color, t.color)), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class tp {
                constructor() {
                    this.distance = 100, this.links = new th
                }
                get lineLinked() {
                    return this.links
                }
                set lineLinked(t) {
                    this.links = t
                }
                get line_linked() {
                    return this.links
                }
                set line_linked(t) {
                    this.links = t
                }
                load(t) {
                    var e, i;
                    t && (void 0 !== t.distance && (this.distance = t.distance), this.links.load(null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i ? i : t.line_linked))
                }
            }
            class tf extends n.L8 {
                constructor(t) {
                    super(t)
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.grab;
                    e && (t.retina.grabModeDistance = e.distance * t.retina.pixelRatio)
                }
                async interact() {
                    var t, e;
                    let i = this.container,
                        o = i.actualOptions.interactivity;
                    if (!o.modes.grab || !o.events.onHover.enable || i.interactivity.status !== n.Wt) return;
                    let r = i.interactivity.mouse.position;
                    if (!r) return;
                    let s = i.retina.grabModeDistance;
                    if (s && !(s < 0))
                        for (let a of i.particles.quadTree.queryCircle(r, s, t => this.isEnabled(t))) {
                            let l = a.getPosition(),
                                u = (0, n.Sp)(l, r);
                            if (u > s) continue;
                            let c = o.modes.grab.links,
                                d = c.opacity,
                                h = d - u * d / s;
                            if (h <= 0) continue;
                            let p = null !== (t = c.color) && void 0 !== t ? t : null === (e = a.options.links) || void 0 === e ? void 0 : e.color;
                            if (!i.particles.grabLineColor && p) {
                                let t = o.modes.grab.links;
                                i.particles.grabLineColor = (0, n.Dt)(p, t.blink, t.consent)
                            }
                            let f = (0, n.BE)(a, void 0, i.particles.grabLineColor);
                            if (!f) return;
                            ! function(t, e, i, o, r) {
                                t.canvas.draw(t => {
                                    var s, a;
                                    let l = e.getPosition();
                                    a = null !== (s = e.retina.linksWidth) && void 0 !== s ? s : 0, (0, n.pS)(t, l, r), t.strokeStyle = (0, n.iz)(i, o), t.lineWidth = a, t.stroke()
                                })
                            }(i, a, f, h, r)
                        }
                }
                isEnabled(t) {
                    var e;
                    let i = this.container,
                        o = i.interactivity.mouse,
                        r = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : i.actualOptions.interactivity).events;
                    return r.onHover.enable && !!o.position && (0, n.dB)("grab", r.onHover.mode)
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.grab || (t.grab = new tp), e)) t.grab.load(null == i ? void 0 : i.grab)
                }
                reset() {}
            }
            async function tv(t) {
                await t.addInteractor("externalGrab", t => new tf(t))
            }
            class tm extends n.L8 {
                constructor(t) {
                    super(t), this.handleClickMode = t => {
                        if ("pause" !== t) return;
                        let e = this.container;
                        e.getAnimationStatus() ? e.pause() : e.play()
                    }
                }
                clear() {}
                init() {}
                async interact() {}
                isEnabled() {
                    return !0
                }
                reset() {}
            }
            class ty {
                constructor() {
                    this.default = !0, this.groups = [], this.quantity = 4
                }
                get particles_nb() {
                    return this.quantity
                }
                set particles_nb(t) {
                    this.quantity = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    void 0 !== t.default && (this.default = t.default), void 0 !== t.groups && (this.groups = t.groups.map(t => t)), this.groups.length || (this.default = !0);
                    let i = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
                    void 0 !== i && (this.quantity = i)
                }
            }
            class tg extends n.L8 {
                constructor(t) {
                    super(t), this.handleClickMode = t => {
                        if ("push" !== t) return;
                        let e = this.container,
                            i = e.actualOptions.interactivity.modes.push;
                        if (!i) return;
                        let o = i.quantity;
                        if (o <= 0) return;
                        let r = (0, n.c8)([void 0, ...i.groups]),
                            s = void 0 !== r ? e.actualOptions.particles.groups[r] : void 0;
                        e.particles.push(o, e.interactivity.mouse, s, r)
                    }
                }
                clear() {}
                init() {}
                async interact() {}
                isEnabled() {
                    return !0
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.push || (t.push = new ty), e)) t.push.load(null == i ? void 0 : i.push)
                }
                reset() {}
            }
            async function tb(t) {
                await t.addInteractor("externalPush", t => new tg(t))
            }
            class tw {
                constructor() {
                    this.quantity = 2
                }
                get particles_nb() {
                    return this.quantity
                }
                set particles_nb(t) {
                    this.quantity = t
                }
                load(t) {
                    var e;
                    if (!t) return;
                    let i = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
                    void 0 !== i && (this.quantity = i)
                }
            }
            class tx extends n.L8 {
                constructor(t) {
                    super(t), this.handleClickMode = t => {
                        let e = this.container,
                            i = e.actualOptions;
                        if (!i.interactivity.modes.remove || "remove" !== t) return;
                        let n = i.interactivity.modes.remove.quantity;
                        e.particles.removeQuantity(n)
                    }
                }
                clear() {}
                init() {}
                async interact() {}
                isEnabled() {
                    return !0
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.remove || (t.remove = new tw), e)) t.remove.load(null == i ? void 0 : i.remove)
                }
                reset() {}
            }
            class tC {
                constructor() {
                    this.distance = 200, this.duration = .4, this.factor = 100, this.speed = 1, this.maxSpeed = 50, this.easing = "ease-out-quad"
                }
                load(t) {
                    t && (void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.duration && (this.duration = t.duration), void 0 !== t.easing && (this.easing = t.easing), void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.speed && (this.speed = t.speed), void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed))
                }
            }
            class tk extends tC {
                constructor() {
                    super(), this.selectors = []
                }
                get ids() {
                    return (0, n.KH)(this.selectors, t => t.replace("#", ""))
                }
                set ids(t) {
                    this.selectors = (0, n.KH)(t, t => `#${t}`)
                }
                load(t) {
                    super.load(t), t && (void 0 !== t.ids && (this.ids = t.ids), void 0 !== t.selectors && (this.selectors = t.selectors))
                }
            }
            class tP extends tC {
                load(t) {
                    super.load(t), t && (this.divs = (0, n.KH)(t.divs, t => {
                        let e = new tk;
                        return e.load(t), e
                    }))
                }
            }
            class tO extends n.L8 {
                constructor(t, e) {
                    super(e), this._engine = t, e.repulse || (e.repulse = {
                        particles: []
                    }), this.handleClickMode = t => {
                        let i = this.container.actualOptions.interactivity.modes.repulse;
                        if (i && "repulse" === t) {
                            for (let t of (e.repulse || (e.repulse = {
                                    particles: []
                                }), e.repulse.clicking = !0, e.repulse.count = 0, e.repulse.particles)) this.isEnabled(t) && t.velocity.setTo(t.initialVelocity);
                            e.repulse.particles = [], e.repulse.finish = !1, setTimeout(() => {
                                e.destroyed || (e.repulse || (e.repulse = {
                                    particles: []
                                }), e.repulse.clicking = !1)
                            }, 1e3 * i.duration)
                        }
                    }
                }
                clear() {}
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.repulse;
                    e && (t.retina.repulseModeDistance = e.distance * t.retina.pixelRatio)
                }
                async interact() {
                    let t = this.container,
                        e = t.actualOptions,
                        i = t.interactivity.status === n.Wt,
                        o = e.interactivity.events,
                        r = o.onHover.enable,
                        s = o.onHover.mode,
                        a = o.onClick.enable,
                        l = o.onClick.mode,
                        u = o.onDiv;
                    i && r && (0, n.dB)("repulse", s) ? this.hoverRepulse() : a && (0, n.dB)("repulse", l) ? this.clickRepulse() : (0, n.XD)("repulse", u, (t, e) => this.singleSelectorRepulse(t, e))
                }
                isEnabled(t) {
                    var e;
                    let i = this.container,
                        o = i.actualOptions,
                        r = i.interactivity.mouse,
                        s = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : o.interactivity).events,
                        a = s.onDiv,
                        l = (0, n.wm)("repulse", a);
                    if (!(l || s.onHover.enable && r.position || s.onClick.enable && r.clickPosition)) return !1;
                    let u = s.onHover.mode,
                        c = s.onClick.mode;
                    return (0, n.dB)("repulse", u) || (0, n.dB)("repulse", c) || l
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.repulse || (t.repulse = new tP), e)) t.repulse.load(null == i ? void 0 : i.repulse)
                }
                reset() {}
                clickRepulse() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.repulse;
                    if (e) {
                        if (t.repulse || (t.repulse = {
                                particles: []
                            }), t.repulse.finish || (t.repulse.count || (t.repulse.count = 0), t.repulse.count++, t.repulse.count !== t.particles.count || (t.repulse.finish = !0)), t.repulse.clicking) {
                            let i = t.retina.repulseModeDistance;
                            if (!i || i < 0) return;
                            let o = Math.pow(i / 6, 3),
                                r = t.interactivity.mouse.clickPosition;
                            if (void 0 === r) return;
                            let s = new n.Cd(r.x, r.y, o);
                            for (let i of t.particles.quadTree.query(s, t => this.isEnabled(t))) {
                                let {
                                    dx: s,
                                    dy: a,
                                    distance: l
                                } = (0, n.oW)(r, i.position), u = l ** 2, c = -o * e.speed / u;
                                if (u <= o) {
                                    t.repulse.particles.push(i);
                                    let e = n.OW.create(s, a);
                                    e.length = c, i.velocity.setTo(e)
                                }
                            }
                        } else if (!1 === t.repulse.clicking) {
                            for (let e of t.repulse.particles) e.velocity.setTo(e.initialVelocity);
                            t.repulse.particles = []
                        }
                    }
                }
                hoverRepulse() {
                    let t = this.container,
                        e = t.interactivity.mouse.position,
                        i = t.retina.repulseModeDistance;
                    i && !(i < 0) && e && this.processRepulse(e, i, new n.Cd(e.x, e.y, i))
                }
                processRepulse(t, e, i, o) {
                    var r;
                    let s = this.container,
                        a = s.particles.quadTree.query(i, t => this.isEnabled(t)),
                        l = s.actualOptions.interactivity.modes.repulse;
                    if (l)
                        for (let i of a) {
                            let {
                                dx: s,
                                dy: a,
                                distance: u
                            } = (0, n.oW)(i.position, t), c = (null !== (r = null == o ? void 0 : o.speed) && void 0 !== r ? r : l.speed) * l.factor, d = (0, n.uZ)((0, n._X)(l.easing)(1 - u / e) * c, 0, l.maxSpeed), h = n.OW.create(0 === u ? c : s / u * d, 0 === u ? c : a / u * d);
                            i.position.addTo(h)
                        }
                }
                singleSelectorRepulse(t, e) {
                    let i = this.container,
                        o = i.actualOptions.interactivity.modes.repulse;
                    if (!o) return;
                    let r = document.querySelectorAll(t);
                    r.length && r.forEach(t => {
                        let r = i.retina.pixelRatio,
                            s = {
                                x: (t.offsetLeft + t.offsetWidth / 2) * r,
                                y: (t.offsetTop + t.offsetHeight / 2) * r
                            },
                            a = t.offsetWidth / 2 * r,
                            l = "circle" === e.type ? new n.Cd(s.x, s.y, a) : new n.Ae(t.offsetLeft * r, t.offsetTop * r, t.offsetWidth * r, t.offsetHeight * r),
                            u = o.divs,
                            c = (0, n.iC)(u, t);
                        this.processRepulse(s, a, l, c)
                    })
                }
            }
            async function tS(t) {
                await t.addInteractor("externalRepulse", e => new tO(t, e))
            }
            class tE {
                constructor() {
                    this.factor = 3, this.radius = 200
                }
                load(t) {
                    t && (void 0 !== t.factor && (this.factor = t.factor), void 0 !== t.radius && (this.radius = t.radius))
                }
            }
            class tM extends n.L8 {
                constructor(t) {
                    super(t)
                }
                clear(t, e, i) {
                    (!t.slow.inRange || i) && (t.slow.factor = 1)
                }
                init() {
                    let t = this.container,
                        e = t.actualOptions.interactivity.modes.slow;
                    e && (t.retina.slowModeRadius = e.radius * t.retina.pixelRatio)
                }
                async interact() {}
                isEnabled(t) {
                    var e;
                    let i = this.container,
                        o = i.interactivity.mouse,
                        r = (null !== (e = null == t ? void 0 : t.interactivity) && void 0 !== e ? e : i.actualOptions.interactivity).events;
                    return r.onHover.enable && !!o.position && (0, n.dB)("slow", r.onHover.mode)
                }
                loadModeOptions(t, ...e) {
                    for (let i of (t.slow || (t.slow = new tE), e)) t.slow.load(null == i ? void 0 : i.slow)
                }
                reset(t) {
                    t.slow.inRange = !1;
                    let e = this.container,
                        i = e.actualOptions,
                        o = e.interactivity.mouse.position,
                        r = e.retina.slowModeRadius,
                        s = i.interactivity.modes.slow;
                    if (!s || !r || r < 0 || !o) return;
                    let a = t.getPosition(),
                        l = (0, n.Sp)(o, a),
                        u = s.factor;
                    l <= r && (t.slow.inRange = !0, t.slow.factor = l / r / u)
                }
            }
            async function tz(t) {
                await t.addInteractor("externalSlow", t => new tM(t))
            }
            let t_ = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
            async function tR(t) {
                return new Promise(e => {
                    t.loading = !0;
                    let i = new Image;
                    t.element = i, i.addEventListener("load", () => {
                        t.loading = !1, e()
                    }), i.addEventListener("error", () => {
                        t.element = void 0, t.error = !0, t.loading = !1, console.error(`Error tsParticles - loading image: ${t.source}`), e()
                    }), i.src = t.source
                })
            }
            async function tA(t) {
                if ("svg" !== t.type) {
                    await tR(t);
                    return
                }
                t.loading = !0;
                let e = await fetch(t.source);
                e.ok || (console.error("Error tsParticles - Image not found"), t.error = !0), t.error || (t.svgData = await e.text()), t.loading = !1
            }
            class tT {
                constructor() {
                    this._images = []
                }
                addImage(t, e) {
                    let i = this.getImages(t);
                    null == i || i.images.push(e)
                }
                destroy() {
                    this._images = []
                }
                draw(t, e, i, n) {
                    var o;
                    let r = e.image,
                        s = null == r ? void 0 : r.element;
                    if (!s) return;
                    let a = null !== (o = null == r ? void 0 : r.ratio) && void 0 !== o ? o : 1,
                        l = {
                            x: -i,
                            y: -i
                        };
                    t.globalAlpha = n, t.drawImage(s, l.x, l.y, 2 * i, 2 * i / a), t.globalAlpha = 1
                }
                getImages(t) {
                    return this._images.find(e => e.id === t.id) || (this._images.push({
                        id: t.id,
                        images: []
                    }), this.getImages(t))
                }
                getSidesCount() {
                    return 12
                }
                loadShape(t) {
                    if ("image" !== t.shape && "images" !== t.shape) return;
                    let e = t.container,
                        i = this.getImages(e).images,
                        n = t.shapeData;
                    i.find(t => t.source === n.src) || this.loadImageShape(e, n).then(() => {
                        this.loadShape(t)
                    })
                }
                particleInit(t, e) {
                    var i;
                    if ("image" !== e.shape && "images" !== e.shape) return;
                    let o = this.getImages(t).images,
                        r = e.shapeData,
                        s = e.getFillColor(),
                        a = null !== (i = r.replaceColor) && void 0 !== i ? i : r.replace_color,
                        l = o.find(t => t.source === r.src);
                    if (l) {
                        if (l.loading) {
                            setTimeout(() => {
                                this.particleInit(t, e)
                            });
                            return
                        }(async () => {
                            var t, i;
                            let o;
                            (o = l.svgData && s ? await
                                function(t, e, i, o) {
                                    var r, s, a;
                                    let l = function(t, e, i) {
                                            let {
                                                svgData: o
                                            } = t;
                                            if (!o) return "";
                                            let r = (0, n.vz)(e, i);
                                            if (o.includes("fill")) return o.replace(t_, () => r);
                                            let s = o.indexOf(">");
                                            return `${o.substring(0,s)} fill="${r}"${o.substring(s)}`
                                        }(t, i, null !== (s = null === (r = o.opacity) || void 0 === r ? void 0 : r.value) && void 0 !== s ? s : 1),
                                        u = {
                                            color: i,
                                            data: Object.assign(Object.assign({}, t), {
                                                svgData: l
                                            }),
                                            loaded: !1,
                                            ratio: e.width / e.height,
                                            replaceColor: null !== (a = e.replaceColor) && void 0 !== a ? a : e.replace_color,
                                            source: e.src
                                        };
                                    return new Promise(e => {
                                        let i = new Blob([l], {
                                                type: "image/svg+xml"
                                            }),
                                            n = URL || window.URL || window.webkitURL || window,
                                            o = n.createObjectURL(i),
                                            r = new Image;
                                        r.addEventListener("load", () => {
                                            u.loaded = !0, u.element = r, e(u), n.revokeObjectURL(o)
                                        }), r.addEventListener("error", async () => {
                                            n.revokeObjectURL(o);
                                            let i = Object.assign(Object.assign({}, t), {
                                                error: !1,
                                                loading: !0
                                            });
                                            await tR(i), u.loaded = !0, u.element = i.element, e(u)
                                        }), r.src = o
                                    })
                                }(l, r, s, e) : {
                                    color: s,
                                    data: l,
                                    element: l.element,
                                    loaded: !0,
                                    ratio: r.width / r.height,
                                    replaceColor: a,
                                    source: r.src
                                }).ratio || (o.ratio = 1);
                            let u = null !== (t = r.fill) && void 0 !== t ? t : e.fill,
                                c = null !== (i = r.close) && void 0 !== i ? i : e.close;
                            e.image = o, e.fill = u, e.close = c
                        })()
                    }
                }
                async loadImageShape(t, e) {
                    var i;
                    let n = e.src;
                    if (!n) throw Error("Error tsParticles - No image.src");
                    try {
                        let o = {
                            source: n,
                            type: n.substring(n.length - 3),
                            error: !1,
                            loading: !0
                        };
                        this.addImage(t, o);
                        let r = (null !== (i = e.replaceColor) && void 0 !== i ? i : e.replace_color) ? tA : tR;
                        await r(o)
                    } catch (t) {
                        throw Error(`tsParticles error - ${e.src} not found`)
                    }
                }
            }
            async function tD(t) {
                await t.addShape(["image", "images"], new tT)
            }
            class tL extends n.SW {
                constructor() {
                    super(), this.sync = !1
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class tI extends n.SW {
                constructor() {
                    super(), this.random.minimumValue = 1e-4, this.sync = !1
                }
                load(t) {
                    t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class tV {
                constructor() {
                    this.count = 0, this.delay = new tL, this.duration = new tI
                }
                load(t) {
                    t && (void 0 !== t.count && (this.count = t.count), this.delay.load(t.delay), this.duration.load(t.duration))
                }
            }
            class tj {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    let e = this.container,
                        i = t.options.life;
                    i && (t.life = {
                        delay: e.retina.reduceFactor ? (0, n.Gu)(i.delay.value) * (i.delay.sync ? 1 : (0, n.sZ)()) / e.retina.reduceFactor * 1e3 : 0,
                        delayTime: 0,
                        duration: e.retina.reduceFactor ? (0, n.Gu)(i.duration.value) * (i.duration.sync ? 1 : (0, n.sZ)()) / e.retina.reduceFactor * 1e3 : 0,
                        time: 0,
                        count: i.count
                    }, t.life.duration <= 0 && (t.life.duration = -1), t.life.count <= 0 && (t.life.count = -1), t.life && (t.spawning = t.life.delay > 0))
                }
                isEnabled(t) {
                    return !t.destroyed
                }
                loadOptions(t, ...e) {
                    for (let i of (t.life || (t.life = new tV), e)) t.life.load(null == i ? void 0 : i.life)
                }
                update(t, e) {
                    if (!this.isEnabled(t) || !t.life) return;
                    let i = t.life,
                        o = !1;
                    if (t.spawning) {
                        if (i.delayTime += e.value, !(i.delayTime >= t.life.delay)) return;
                        o = !0, t.spawning = !1, i.delayTime = 0, i.time = 0
                    }
                    if (-1 === i.duration || t.spawning || (o ? i.time = 0 : i.time += e.value, i.time < i.duration)) return;
                    if (i.time = 0, t.life.count > 0 && t.life.count--, 0 === t.life.count) {
                        t.destroy();
                        return
                    }
                    let r = this.container.canvas.size,
                        s = (0, n.Cs)(0, r.width),
                        a = (0, n.Cs)(0, r.width);
                    t.position.x = (0, n.vd)(s), t.position.y = (0, n.vd)(a), t.spawning = !0, i.delayTime = 0, i.time = 0, t.reset();
                    let l = t.options.life;
                    l && (i.delay = 1e3 * (0, n.Gu)(l.delay.value), i.duration = 1e3 * (0, n.Gu)(l.duration.value))
                }
            }
            async function tB(t) {
                await t.addParticleUpdater("life", t => new tj(t))
            }
            class tF {
                draw(t, e, i) {
                    t.moveTo(-i / 2, 0), t.lineTo(i / 2, 0)
                }
                getSidesCount() {
                    return 1
                }
            }
            async function tW(t) {
                await t.addShape("line", new tF)
            }
            class tq {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    let e = t.options.opacity;
                    t.opacity = {
                        enable: e.animation.enable,
                        max: (0, n.KI)(e.value),
                        min: (0, n.Uv)(e.value),
                        value: (0, n.Gu)(e.value),
                        loops: 0,
                        maxLoops: (0, n.Gu)(e.animation.count)
                    };
                    let i = e.animation;
                    if (i.enable) {
                        t.opacity.decay = 1 - (0, n.Gu)(i.decay), t.opacity.status = "increasing";
                        let o = e.value;
                        switch (t.opacity.min = (0, n.Uv)(o), t.opacity.max = (0, n.KI)(o), i.startValue) {
                            case "min":
                                t.opacity.value = t.opacity.min, t.opacity.status = "increasing";
                                break;
                            case "random":
                                t.opacity.value = (0, n.vd)(t.opacity), t.opacity.status = (0, n.sZ)() >= .5 ? "increasing" : "decreasing";
                                break;
                            default:
                                t.opacity.value = t.opacity.max, t.opacity.status = "decreasing"
                        }
                        t.opacity.velocity = (0, n.Gu)(i.speed) / 100 * this.container.retina.reduceFactor, i.sync || (t.opacity.velocity *= (0, n.sZ)())
                    }
                    t.opacity.initialValue = t.opacity.value
                }
                isEnabled(t) {
                    var e, i, n, o;
                    return !t.destroyed && !t.spawning && !!t.opacity && t.opacity.enable && ((null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) <= 0 || (null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) > 0 && (null !== (n = t.opacity.loops) && void 0 !== n ? n : 0) < (null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0))
                }
                reset(t) {
                    t.opacity && (t.opacity.loops = 0)
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        var i, o, r, s, a, l;
                        if (!t.opacity) return;
                        let u = t.opacity.min,
                            c = t.opacity.max,
                            d = null !== (i = t.opacity.decay) && void 0 !== i ? i : 1;
                        if (!t.destroyed && t.opacity.enable && (!((null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0) > 0) || !((null !== (r = t.opacity.loops) && void 0 !== r ? r : 0) > (null !== (s = t.opacity.maxLoops) && void 0 !== s ? s : 0)))) {
                            switch (t.opacity.status) {
                                case "increasing":
                                    t.opacity.value >= c ? (t.opacity.status = "decreasing", t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value += (null !== (a = t.opacity.velocity) && void 0 !== a ? a : 0) * e.factor;
                                    break;
                                case "decreasing":
                                    t.opacity.value <= u ? (t.opacity.status = "increasing", t.opacity.loops || (t.opacity.loops = 0), t.opacity.loops++) : t.opacity.value -= (null !== (l = t.opacity.velocity) && void 0 !== l ? l : 0) * e.factor
                            }
                            t.opacity.velocity && 1 !== t.opacity.decay && (t.opacity.velocity *= d),
                                function(t, e, i, n) {
                                    switch (t.options.opacity.animation.destroy) {
                                        case "max":
                                            e >= n && t.destroy();
                                            break;
                                        case "min":
                                            e <= i && t.destroy()
                                    }
                                }(t, t.opacity.value, u, c), t.destroyed || (t.opacity.value = (0, n.uZ)(t.opacity.value, u, c))
                        }
                    }(t, e)
                }
            }
            async function tU(t) {
                await t.addParticleUpdater("opacity", t => new tq(t))
            }
            class tH {
                constructor(t) {
                    this.container = t, this.modes = ["bounce", "bounce-vertical", "bounce-horizontal", "bounceVertical", "bounceHorizontal", "split"]
                }
                update(t, e, i, o) {
                    if (!this.modes.includes(o)) return;
                    let r = this.container,
                        s = !1;
                    for (let [, n] of r.plugins)
                        if (void 0 !== n.particleBounce && (s = n.particleBounce(t, i, e)), s) break;
                    if (s) return;
                    let a = t.getPosition(),
                        l = t.offset,
                        u = t.getRadius(),
                        c = (0, n.M_)(a, u),
                        d = r.canvas.size;
                    ! function(t) {
                        if ("bounce" !== t.outMode && "bounce-horizontal" !== t.outMode && "bounceHorizontal" !== t.outMode && "split" !== t.outMode) return;
                        t.bounds.right < 0 ? t.particle.position.x = t.size + t.offset.x : t.bounds.left > t.canvasSize.width && (t.particle.position.x = t.canvasSize.width - t.size - t.offset.x);
                        let e = t.particle.velocity.x,
                            i = !1;
                        if ("right" === t.direction && t.bounds.right >= t.canvasSize.width && e > 0 || "left" === t.direction && t.bounds.left <= 0 && e < 0) {
                            let e = (0, n.NA)(t.particle.options.bounce.horizontal);
                            t.particle.velocity.x *= -e, i = !0
                        }
                        if (!i) return;
                        let o = t.offset.x + t.size;
                        t.bounds.right >= t.canvasSize.width ? t.particle.position.x = t.canvasSize.width - o : t.bounds.left <= 0 && (t.particle.position.x = o), "split" === t.outMode && t.particle.destroy()
                    }({
                        particle: t,
                        outMode: o,
                        direction: e,
                        bounds: c,
                        canvasSize: d,
                        offset: l,
                        size: u
                    }),
                    function(t) {
                        if ("bounce" !== t.outMode && "bounce-vertical" !== t.outMode && "bounceVertical" !== t.outMode && "split" !== t.outMode) return;
                        t.bounds.bottom < 0 ? t.particle.position.y = t.size + t.offset.y : t.bounds.top > t.canvasSize.height && (t.particle.position.y = t.canvasSize.height - t.size - t.offset.y);
                        let e = t.particle.velocity.y,
                            i = !1;
                        if ("bottom" === t.direction && t.bounds.bottom >= t.canvasSize.height && e > 0 || "top" === t.direction && t.bounds.top <= 0 && e < 0) {
                            let e = (0, n.NA)(t.particle.options.bounce.vertical);
                            t.particle.velocity.y *= -e, i = !0
                        }
                        if (!i) return;
                        let o = t.offset.y + t.size;
                        t.bounds.bottom >= t.canvasSize.height ? t.particle.position.y = t.canvasSize.height - o : t.bounds.top <= 0 && (t.particle.position.y = o), "split" === t.outMode && t.particle.destroy()
                    }({
                        particle: t,
                        outMode: o,
                        direction: e,
                        bounds: c,
                        canvasSize: d,
                        offset: l,
                        size: u
                    })
                }
            }
            class tZ {
                constructor(t) {
                    this.container = t, this.modes = ["destroy"]
                }
                update(t, e, i, o) {
                    if (!this.modes.includes(o)) return;
                    let r = this.container;
                    switch (t.outType) {
                        case "normal":
                        case "outside":
                            if ((0, n.Ac)(t.position, r.canvas.size, n.OW.origin, t.getRadius(), e)) return;
                            break;
                        case "inside":
                            {
                                let {
                                    dx: e,
                                    dy: i
                                } = (0, n.oW)(t.position, t.moveCenter),
                                {
                                    x: o,
                                    y: r
                                } = t.velocity;
                                if (o < 0 && e > t.moveCenter.radius || r < 0 && i > t.moveCenter.radius || o >= 0 && e < -t.moveCenter.radius || r >= 0 && i < -t.moveCenter.radius) return
                            }
                    }
                    r.particles.remove(t, void 0, !0)
                }
            }
            class tN {
                constructor(t) {
                    this.container = t, this.modes = ["none"]
                }
                update(t, e, i, o) {
                    if (!this.modes.includes(o) || t.options.move.distance.horizontal && ("left" === e || "right" === e) || t.options.move.distance.vertical && ("top" === e || "bottom" === e)) return;
                    let r = t.options.move.gravity,
                        s = this.container,
                        a = s.canvas.size,
                        l = t.getRadius();
                    if (r.enable) {
                        let i = t.position;
                        (!r.inverse && i.y > a.height + l && "bottom" === e || r.inverse && i.y < -l && "top" === e) && s.particles.remove(t)
                    } else {
                        if (t.velocity.y > 0 && t.position.y <= a.height + l || t.velocity.y < 0 && t.position.y >= -l || t.velocity.x > 0 && t.position.x <= a.width + l || t.velocity.x < 0 && t.position.x >= -l) return;
                        (0, n.Ac)(t.position, s.canvas.size, n.OW.origin, l, e) || s.particles.remove(t)
                    }
                }
            }
            class tG {
                constructor(t) {
                    this.container = t, this.modes = ["out"]
                }
                update(t, e, i, o) {
                    if (!this.modes.includes(o)) return;
                    let r = this.container;
                    if ("inside" === t.outType) {
                        let {
                            x: e,
                            y: i
                        } = t.velocity, o = n.OW.origin;
                        o.length = t.moveCenter.radius, o.angle = t.velocity.angle + Math.PI, o.addTo(n.OW.create(t.moveCenter));
                        let {
                            dx: s,
                            dy: a
                        } = (0, n.oW)(t.position, o);
                        if (e <= 0 && s >= 0 || i <= 0 && a >= 0 || e >= 0 && s <= 0 || i >= 0 && a <= 0) return;
                        t.position.x = Math.floor((0, n.vd)({
                            min: 0,
                            max: r.canvas.size.width
                        })), t.position.y = Math.floor((0, n.vd)({
                            min: 0,
                            max: r.canvas.size.height
                        }));
                        let {
                            dx: l,
                            dy: u
                        } = (0, n.oW)(t.position, t.moveCenter);
                        t.direction = Math.atan2(-u, -l), t.velocity.angle = t.direction
                    } else {
                        if ((0, n.Ac)(t.position, r.canvas.size, n.OW.origin, t.getRadius(), e)) return;
                        switch (t.outType) {
                            case "outside":
                                {
                                    t.position.x = Math.floor((0, n.vd)({
                                        min: -t.moveCenter.radius,
                                        max: t.moveCenter.radius
                                    })) + t.moveCenter.x,
                                    t.position.y = Math.floor((0, n.vd)({
                                        min: -t.moveCenter.radius,
                                        max: t.moveCenter.radius
                                    })) + t.moveCenter.y;
                                    let {
                                        dx: e,
                                        dy: i
                                    } = (0, n.oW)(t.position, t.moveCenter);t.moveCenter.radius && (t.direction = Math.atan2(i, e), t.velocity.angle = t.direction);
                                    break
                                }
                            case "normal":
                                {
                                    let i = t.options.move.warp,
                                        o = r.canvas.size,
                                        s = {
                                            bottom: o.height + t.getRadius() + t.offset.y,
                                            left: -t.getRadius() - t.offset.x,
                                            right: o.width + t.getRadius() + t.offset.x,
                                            top: -t.getRadius() - t.offset.y
                                        },
                                        a = t.getRadius(),
                                        l = (0, n.M_)(t.position, a);
                                    "right" === e && l.left > o.width + t.offset.x ? (t.position.x = s.left, t.initialPosition.x = t.position.x, i || (t.position.y = (0, n.sZ)() * o.height, t.initialPosition.y = t.position.y)) : "left" === e && l.right < -t.offset.x && (t.position.x = s.right, t.initialPosition.x = t.position.x, i || (t.position.y = (0, n.sZ)() * o.height, t.initialPosition.y = t.position.y)),
                                    "bottom" === e && l.top > o.height + t.offset.y ? (i || (t.position.x = (0, n.sZ)() * o.width, t.initialPosition.x = t.position.x), t.position.y = s.top, t.initialPosition.y = t.position.y) : "top" === e && l.bottom < -t.offset.y && (i || (t.position.x = (0, n.sZ)() * o.width, t.initialPosition.x = t.position.x), t.position.y = s.bottom, t.initialPosition.y = t.position.y)
                                }
                        }
                    }
                }
            }
            class t$ {
                constructor(t) {
                    this.container = t, this.updaters = [new tH(t), new tZ(t), new tG(t), new tN(t)]
                }
                init() {}
                isEnabled(t) {
                    return !t.destroyed && !t.spawning
                }
                update(t, e) {
                    var i, n, o, r;
                    let s = t.options.move.outModes;
                    this.updateOutMode(t, e, null !== (i = s.bottom) && void 0 !== i ? i : s.default, "bottom"), this.updateOutMode(t, e, null !== (n = s.left) && void 0 !== n ? n : s.default, "left"), this.updateOutMode(t, e, null !== (o = s.right) && void 0 !== o ? o : s.default, "right"), this.updateOutMode(t, e, null !== (r = s.top) && void 0 !== r ? r : s.default, "top")
                }
                updateOutMode(t, e, i, n) {
                    for (let o of this.updaters) o.update(t, n, e, i)
                }
            }
            async function tY(t) {
                await t.addParticleUpdater("outModes", t => new t$(t))
            }
            class tX {
                init() {}
                isEnabled(t) {
                    return !(0, n.Kr)() && !t.destroyed && t.container.actualOptions.interactivity.events.onHover.parallax.enable
                }
                move(t) {
                    let e = t.container,
                        i = e.actualOptions;
                    if ((0, n.Kr)() || !i.interactivity.events.onHover.parallax.enable) return;
                    let o = i.interactivity.events.onHover.parallax.force,
                        r = e.interactivity.mouse.position;
                    if (!r) return;
                    let s = {
                            x: e.canvas.size.width / 2,
                            y: e.canvas.size.height / 2
                        },
                        a = i.interactivity.events.onHover.parallax.smooth,
                        l = t.getRadius() / o,
                        u = {
                            x: (r.x - s.x) * l,
                            y: (r.y - s.y) * l
                        };
                    t.offset.x += (u.x - t.offset.x) / a, t.offset.y += (u.y - t.offset.y) / a
                }
            }
            async function tK(t) {
                t.addMover("parallax", () => new tX)
            }
            class tJ extends n.$S {
                constructor(t) {
                    super(t)
                }
                clear() {}
                init() {}
                async interact(t) {
                    var e;
                    let i = this.container,
                        o = null !== (e = t.retina.attractDistance) && void 0 !== e ? e : i.retina.attractDistance,
                        r = t.getPosition();
                    for (let e of i.particles.quadTree.queryCircle(r, o)) {
                        if (t === e || !e.options.move.attract.enable || e.destroyed || e.spawning) continue;
                        let i = e.getPosition(),
                            {
                                dx: o,
                                dy: s
                            } = (0, n.oW)(r, i),
                            a = t.options.move.attract.rotate,
                            l = o / (1e3 * a.x),
                            u = s / (1e3 * a.y),
                            c = e.size.value / t.size.value,
                            d = 1 / c;
                        t.velocity.x -= l * c, t.velocity.y -= u * c, e.velocity.x += l * d, e.velocity.y += u * d
                    }
                }
                isEnabled(t) {
                    return t.options.move.attract.enable
                }
                reset() {}
            }
            async function tQ(t) {
                await t.addInteractor("particlesAttract", t => new tJ(t))
            }

            function t0(t, e, i, o, r, s) {
                let a = (0, n.uZ)(t.options.collisions.absorb.speed * r.factor / 10, 0, o);
                t.size.value += a / 2, i.size.value -= a, o <= s && (i.size.value = 0, i.destroy())
            }

            function t1(t, e) {
                (0, n.kR)((0, n.gy)(t), (0, n.gy)(e))
            }
            class t2 extends n.$S {
                constructor(t) {
                    super(t)
                }
                clear() {}
                init() {}
                async interact(t, e) {
                    let i = this.container,
                        o = t.getPosition(),
                        r = t.getRadius();
                    for (let s of i.particles.quadTree.queryCircle(o, 2 * r)) {
                        if (t === s || !s.options.collisions.enable || t.options.collisions.mode !== s.options.collisions.mode || s.destroyed || s.spawning) continue;
                        let a = s.getPosition(),
                            l = s.getRadius();
                        !(Math.abs(Math.round(o.z) - Math.round(a.z)) > r + l) && ((0, n.Sp)(o, a) > r + l || function(t, e, i, n) {
                            switch (t.options.collisions.mode) {
                                case "absorb":
                                    ! function(t, e, i, n) {
                                        let o = t.getRadius(),
                                            r = e.getRadius();
                                        void 0 === o && void 0 !== r ? t.destroy() : void 0 !== o && void 0 === r ? e.destroy() : void 0 !== o && void 0 !== r && (o >= r ? t0(t, o, e, r, i, n) : t0(e, r, t, o, i, n))
                                    }(t, e, i, n);
                                    break;
                                case "bounce":
                                    t1(t, e);
                                    break;
                                case "destroy":
                                    t.unbreakable || e.unbreakable || t1(t, e), void 0 === t.getRadius() && void 0 !== e.getRadius() ? t.destroy() : void 0 !== t.getRadius() && void 0 === e.getRadius() ? e.destroy() : void 0 !== t.getRadius() && void 0 !== e.getRadius() && (t.getRadius() >= e.getRadius() ? t : e).destroy()
                            }
                        }(t, s, e, i.retina.pixelRatio))
                    }
                }
                isEnabled(t) {
                    return t.options.collisions.enable
                }
                reset() {}
            }
            async function t5(t) {
                await t.addInteractor("particlesCollisions", t => new t2(t))
            }
            class t3 extends n.Cd {
                constructor(t, e, i, n) {
                    super(t, e, i), this.canvasSize = n, this.canvasSize = Object.assign({}, n)
                }
                contains(t) {
                    if (super.contains(t)) return !0;
                    let e = {
                        x: t.x - this.canvasSize.width,
                        y: t.y
                    };
                    if (super.contains(e)) return !0;
                    let i = {
                        x: t.x - this.canvasSize.width,
                        y: t.y - this.canvasSize.height
                    };
                    if (super.contains(i)) return !0;
                    let n = {
                        x: t.x,
                        y: t.y - this.canvasSize.height
                    };
                    return super.contains(n)
                }
                intersects(t) {
                    if (super.intersects(t)) return !0;
                    let e = {
                        x: t.position.x - this.canvasSize.width,
                        y: t.position.y - this.canvasSize.height
                    };
                    if (void 0 !== t.radius) {
                        let i = new n.Cd(e.x, e.y, 2 * t.radius);
                        return super.intersects(i)
                    }
                    if (void 0 !== t.size) {
                        let i = new n.Ae(e.x, e.y, 2 * t.size.width, 2 * t.size.height);
                        return super.intersects(i)
                    }
                    return !1
                }
            }
            class t6 {
                constructor() {
                    this.blur = 5, this.color = new n.Oz, this.color.value = "#000", this.enable = !1
                }
                load(t) {
                    t && (void 0 !== t.blur && (this.blur = t.blur), this.color = n.Oz.create(this.color, t.color), void 0 !== t.enable && (this.enable = t.enable))
                }
            }
            class t4 {
                constructor() {
                    this.enable = !1, this.frequency = 1
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = n.Oz.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity))
                }
            }
            class t7 {
                constructor() {
                    this.blink = !1, this.color = new n.Oz, this.color.value = "#fff", this.consent = !1, this.distance = 100, this.enable = !1, this.frequency = 1, this.opacity = 1, this.shadow = new t6, this.triangles = new t4, this.width = 1, this.warp = !1
                }
                load(t) {
                    t && (void 0 !== t.id && (this.id = t.id), void 0 !== t.blink && (this.blink = t.blink), this.color = n.Oz.create(this.color, t.color), void 0 !== t.consent && (this.consent = t.consent), void 0 !== t.distance && (this.distance = t.distance), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = t.opacity), this.shadow.load(t.shadow), this.triangles.load(t.triangles), void 0 !== t.width && (this.width = t.width), void 0 !== t.warp && (this.warp = t.warp))
                }
            }
            class t8 extends n.$S {
                constructor(t) {
                    super(t), this.linkContainer = t
                }
                clear() {}
                init() {
                    this.linkContainer.particles.linksColor = void 0, this.linkContainer.particles.linksColors = new Map
                }
                async interact(t) {
                    var e;
                    if (!t.options.links) return;
                    t.links = [];
                    let i = t.getPosition(),
                        o = this.container,
                        r = o.canvas.size;
                    if (i.x < 0 || i.y < 0 || i.x > r.width || i.y > r.height) return;
                    let s = t.options.links,
                        a = s.opacity,
                        l = null !== (e = t.retina.linksDistance) && void 0 !== e ? e : 0,
                        u = s.warp,
                        c = u ? new t3(i.x, i.y, l, r) : new n.Cd(i.x, i.y, l);
                    for (let e of o.particles.quadTree.query(c)) {
                        let o = e.options.links;
                        if (t === e || !(null == o ? void 0 : o.enable) || s.id !== o.id || e.spawning || e.destroyed || !e.links || -1 !== t.links.map(t => t.destination).indexOf(e) || -1 !== e.links.map(t => t.destination).indexOf(t)) continue;
                        let c = e.getPosition();
                        if (c.x < 0 || c.y < 0 || c.x > r.width || c.y > r.height) continue;
                        let d = function(t, e, i, o, r) {
                            let s = (0, n.Sp)(t, e);
                            if (!r || s <= i) return s;
                            let a = {
                                x: e.x - o.width,
                                y: e.y
                            };
                            if ((s = (0, n.Sp)(t, a)) <= i) return s;
                            let l = {
                                x: e.x - o.width,
                                y: e.y - o.height
                            };
                            if ((s = (0, n.Sp)(t, l)) <= i) return s;
                            let u = {
                                x: e.x,
                                y: e.y - o.height
                            };
                            return (0, n.Sp)(t, u)
                        }(i, c, l, r, u && o.warp);
                        if (d > l) return;
                        let h = (1 - d / l) * a;
                        this.setColor(t), t.links.push({
                            destination: e,
                            opacity: h
                        })
                    }
                }
                isEnabled(t) {
                    var e;
                    return !!(null === (e = t.options.links) || void 0 === e ? void 0 : e.enable)
                }
                loadParticlesOptions(t, ...e) {
                    var i, n;
                    for (let o of (t.links || (t.links = new t7), e)) t.links.load(null !== (n = null !== (i = null == o ? void 0 : o.links) && void 0 !== i ? i : null == o ? void 0 : o.lineLinked) && void 0 !== n ? n : null == o ? void 0 : o.line_linked)
                }
                reset() {}
                setColor(t) {
                    if (!t.options.links) return;
                    let e = this.linkContainer,
                        i = t.options.links,
                        o = void 0 === i.id ? e.particles.linksColor : e.particles.linksColors.get(i.id);
                    if (o) return;
                    let r = i.color;
                    o = (0, n.Dt)(r, i.blink, i.consent), void 0 === i.id ? e.particles.linksColor = o : e.particles.linksColors.set(i.id, o)
                }
            }
            async function t9(t) {
                await t.addInteractor("particlesLinks", t => new t8(t))
            }

            function et(t, e) {
                var i;
                let o = ((i = t.map(t => t.id)).sort((t, e) => t - e), i.join("_")),
                    r = e.get(o);
                return void 0 === r && (r = (0, n.sZ)(), e.set(o, r)), r
            }
            class ee {
                constructor(t) {
                    this.container = t, this._freqs = {
                        links: new Map,
                        triangles: new Map
                    }
                }
                drawParticle(t, e) {
                    var i;
                    let n = e.options;
                    if (!e.links || e.links.length <= 0) return;
                    let o = e.links.filter(t => n.links && this.getLinkFrequency(e, t.destination) <= n.links.frequency);
                    for (let t of o) this.drawTriangles(n, e, t, o), t.opacity > 0 && (null !== (i = e.retina.linksWidth) && void 0 !== i ? i : 0) > 0 && this.drawLinkLine(e, t)
                }
                async init() {
                    this._freqs.links = new Map, this._freqs.triangles = new Map
                }
                particleCreated(t) {
                    if (t.links = [], !t.options.links) return;
                    let e = this.container.retina.pixelRatio;
                    t.retina.linksDistance = t.options.links.distance * e, t.retina.linksWidth = t.options.links.width * e
                }
                particleDestroyed(t) {
                    t.links = []
                }
                drawLinkLine(t, e) {
                    let i = this.container,
                        o = i.actualOptions,
                        r = e.destination,
                        s = t.getPosition(),
                        a = r.getPosition(),
                        l = e.opacity;
                    i.canvas.draw(e => {
                        var u, c, d;
                        let h;
                        if (!t.options.links) return;
                        let p = null === (u = t.options.twinkle) || void 0 === u ? void 0 : u.lines;
                        if (null == p ? void 0 : p.enable) {
                            let t = p.frequency,
                                e = (0, n.tX)(p.color);
                            (0, n.sZ)() < t && e && (h = e, l = (0, n.Gu)(p.opacity))
                        }
                        if (!h) {
                            let e = t.options.links,
                                o = (null == e ? void 0 : e.id) !== void 0 ? i.particles.linksColors.get(e.id) : i.particles.linksColor;
                            h = (0, n.BE)(t, r, o)
                        }
                        h && ! function(t, e, i, o, r, s, a, l, u, c, d, h) {
                            let p = !1;
                            if ((0, n.Sp)(i, o) <= r)(0, n.pS)(t, i, o), p = !0;
                            else if (a) {
                                let e, a;
                                let l = {
                                        x: o.x - s.width,
                                        y: o.y
                                    },
                                    u = (0, n.oW)(i, l);
                                if (u.distance <= r) {
                                    let t = i.y - u.dy / u.dx * i.x;
                                    e = {
                                        x: 0,
                                        y: t
                                    }, a = {
                                        x: s.width,
                                        y: t
                                    }
                                } else {
                                    let t = {
                                            x: o.x,
                                            y: o.y - s.height
                                        },
                                        l = (0, n.oW)(i, t);
                                    if (l.distance <= r) {
                                        let t = -(i.y - l.dy / l.dx * i.x) / (l.dy / l.dx);
                                        e = {
                                            x: t,
                                            y: 0
                                        }, a = {
                                            x: t,
                                            y: s.height
                                        }
                                    } else {
                                        let t = {
                                                x: o.x - s.width,
                                                y: o.y - s.height
                                            },
                                            l = (0, n.oW)(i, t);
                                        if (l.distance <= r) {
                                            let t = i.y - l.dy / l.dx * i.x;
                                            a = {
                                                x: (e = {
                                                    x: -t / (l.dy / l.dx),
                                                    y: t
                                                }).x + s.width,
                                                y: e.y + s.height
                                            }
                                        }
                                    }
                                }
                                e && a && ((0, n.pS)(t, i, e), (0, n.pS)(t, o, a), p = !0)
                            }
                            if (p) {
                                if (t.lineWidth = e, l && (t.globalCompositeOperation = u), t.strokeStyle = (0, n.iz)(c, d), h.enable) {
                                    let e = (0, n.tX)(h.color);
                                    e && (t.shadowBlur = h.blur, t.shadowColor = (0, n.iz)(e))
                                }
                                t.stroke()
                            }
                        }(e, null !== (c = t.retina.linksWidth) && void 0 !== c ? c : 0, s, a, null !== (d = t.retina.linksDistance) && void 0 !== d ? d : 0, i.canvas.size, t.options.links.warp, o.backgroundMask.enable, o.backgroundMask.composite, h, l, t.options.links.shadow)
                    })
                }
                drawLinkTriangle(t, e, i) {
                    var o;
                    if (!t.options.links) return;
                    let r = this.container,
                        s = r.actualOptions,
                        a = e.destination,
                        l = i.destination,
                        u = t.options.links.triangles,
                        c = null !== (o = u.opacity) && void 0 !== o ? o : (e.opacity + i.opacity) / 2;
                    c <= 0 || r.canvas.draw(e => {
                        var i, o, d, h;
                        let p = t.getPosition(),
                            f = a.getPosition(),
                            v = l.getPosition(),
                            m = null !== (i = t.retina.linksDistance) && void 0 !== i ? i : 0;
                        if ((0, n.Sp)(p, f) > m || (0, n.Sp)(v, f) > m || (0, n.Sp)(v, p) > m) return;
                        let y = (0, n.tX)(u.color);
                        if (!y) {
                            let e = t.options.links,
                                i = (null == e ? void 0 : e.id) !== void 0 ? r.particles.linksColors.get(e.id) : r.particles.linksColor;
                            y = (0, n.BE)(t, a, i)
                        }
                        y && (o = s.backgroundMask.enable, d = s.backgroundMask.composite, h = y, (0, n.Wd)(e, p, f, v), o && (e.globalCompositeOperation = d), e.fillStyle = (0, n.iz)(h, c), e.fill())
                    })
                }
                drawTriangles(t, e, i, n) {
                    var o, r, s;
                    let a = i.destination;
                    if (!((null === (o = t.links) || void 0 === o ? void 0 : o.triangles.enable) && (null === (r = a.options.links) || void 0 === r ? void 0 : r.triangles.enable))) return;
                    let l = null === (s = a.links) || void 0 === s ? void 0 : s.filter(t => {
                        let e = this.getLinkFrequency(a, t.destination);
                        return a.options.links && e <= a.options.links.frequency && n.findIndex(e => e.destination === t.destination) >= 0
                    });
                    if (null == l ? void 0 : l.length)
                        for (let n of l) {
                            let o = n.destination;
                            this.getTriangleFrequency(e, a, o) > t.links.triangles.frequency || this.drawLinkTriangle(e, i, n)
                        }
                }
                getLinkFrequency(t, e) {
                    return et([t, e], this._freqs.links)
                }
                getTriangleFrequency(t, e, i) {
                    return et([t, e, i], this._freqs.triangles)
                }
            }
            class ei {
                constructor() {
                    this.id = "links"
                }
                getPlugin(t) {
                    return new ee(t)
                }
                loadOptions() {}
                needsPlugin() {
                    return !0
                }
            }
            async function en(t) {
                let e = new ei;
                await t.addPlugin(e)
            }
            async function eo(t) {
                await t9(t), await en(t)
            }
            class er {
                draw(t, e, i) {
                    let n = this.getCenter(e, i),
                        o = this.getSidesData(e, i),
                        r = o.count.numerator * o.count.denominator,
                        s = o.count.numerator / o.count.denominator,
                        a = Math.PI - 180 * (s - 2) / s * Math.PI / 180;
                    if (t) {
                        t.beginPath(), t.translate(n.x, n.y), t.moveTo(0, 0);
                        for (let e = 0; e < r; e++) t.lineTo(o.length, 0), t.translate(o.length, 0), t.rotate(a)
                    }
                }
                getSidesCount(t) {
                    var e, i;
                    let o = t.shapeData;
                    return Math.round((0, n.Gu)(null !== (i = null !== (e = null == o ? void 0 : o.sides) && void 0 !== e ? e : null == o ? void 0 : o.nb_sides) && void 0 !== i ? i : 5))
                }
            }
            class es extends er {
                getCenter(t, e) {
                    return {
                        x: -e / (t.sides / 3.5),
                        y: -e / .76
                    }
                }
                getSidesData(t, e) {
                    let i = t.sides;
                    return {
                        count: {
                            denominator: 1,
                            numerator: i
                        },
                        length: 2.66 * e / (i / 3)
                    }
                }
            }
            class ea extends er {
                getCenter(t, e) {
                    return {
                        x: -e,
                        y: e / 1.66
                    }
                }
                getSidesCount() {
                    return 3
                }
                getSidesData(t, e) {
                    return {
                        count: {
                            denominator: 2,
                            numerator: 3
                        },
                        length: 2 * e
                    }
                }
            }
            async function el(t) {
                await t.addShape("polygon", new es)
            }
            async function eu(t) {
                await t.addShape("triangle", new ea)
            }
            async function ec(t) {
                await el(t), await eu(t)
            }
            class ed {
                init(t) {
                    var e;
                    let i = t.container,
                        o = t.options.size.animation;
                    o.enable && (t.size.velocity = (null !== (e = t.retina.sizeAnimationSpeed) && void 0 !== e ? e : i.retina.sizeAnimationSpeed) / 100 * i.retina.reduceFactor, o.sync || (t.size.velocity *= (0, n.sZ)()))
                }
                isEnabled(t) {
                    var e, i, n, o;
                    return !t.destroyed && !t.spawning && t.size.enable && ((null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) <= 0 || (null !== (i = t.size.maxLoops) && void 0 !== i ? i : 0) > 0 && (null !== (n = t.size.loops) && void 0 !== n ? n : 0) < (null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0))
                }
                reset(t) {
                    t.size.loops = 0
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        var i, o, r, s, a;
                        let l = (null !== (i = t.size.velocity) && void 0 !== i ? i : 0) * e.factor,
                            u = t.size.min,
                            c = t.size.max,
                            d = null !== (o = t.size.decay) && void 0 !== o ? o : 1;
                        if (!t.destroyed && t.size.enable && (!((null !== (r = t.size.maxLoops) && void 0 !== r ? r : 0) > 0) || !((null !== (s = t.size.loops) && void 0 !== s ? s : 0) > (null !== (a = t.size.maxLoops) && void 0 !== a ? a : 0)))) {
                            switch (t.size.status) {
                                case "increasing":
                                    t.size.value >= c ? (t.size.status = "decreasing", t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value += l;
                                    break;
                                case "decreasing":
                                    t.size.value <= u ? (t.size.status = "increasing", t.size.loops || (t.size.loops = 0), t.size.loops++) : t.size.value -= l
                            }
                            t.size.velocity && 1 !== d && (t.size.velocity *= d),
                                function(t, e, i, n) {
                                    switch (t.options.size.animation.destroy) {
                                        case "max":
                                            e >= n && t.destroy();
                                            break;
                                        case "min":
                                            e <= i && t.destroy()
                                    }
                                }(t, t.size.value, u, c), t.destroyed || (t.size.value = (0, n.uZ)(t.size.value, u, c))
                        }
                    }(t, e)
                }
            }
            async function eh(t) {
                await t.addParticleUpdater("size", () => new ed)
            }
            let ep = Math.sqrt(2);
            class ef {
                draw(t, e, i) {
                    t.rect(-i / ep, -i / ep, 2 * i / ep, 2 * i / ep)
                }
                getSidesCount() {
                    return 4
                }
            }
            async function ev(t) {
                let e = new ef;
                await t.addShape(["edge", "square"], e)
            }
            class em {
                draw(t, e, i) {
                    var n;
                    let o = e.sides,
                        r = null !== (n = e.starInset) && void 0 !== n ? n : 2;
                    t.moveTo(0, 0 - i);
                    for (let e = 0; e < o; e++) t.rotate(Math.PI / o), t.lineTo(0, 0 - i * r), t.rotate(Math.PI / o), t.lineTo(0, 0 - i)
                }
                getSidesCount(t) {
                    var e, i;
                    let o = t.shapeData;
                    return Math.round((0, n.Gu)(null !== (i = null !== (e = null == o ? void 0 : o.sides) && void 0 !== e ? e : null == o ? void 0 : o.nb_sides) && void 0 !== i ? i : 5))
                }
                particleInit(t, e) {
                    var i;
                    let o = e.shapeData,
                        r = (0, n.Gu)(null !== (i = null == o ? void 0 : o.inset) && void 0 !== i ? i : 2);
                    e.starInset = r
                }
            }
            async function ey(t) {
                await t.addShape("star", new em)
            }

            function eg(t, e, i, o, r) {
                var s, a;
                if (!e || !e.enable || void 0 !== e.loops && void 0 !== e.maxLoops && e.maxLoops > 0 && e.loops >= e.maxLoops) return;
                let l = (0, n.vd)(i.offset),
                    u = (null !== (s = e.velocity) && void 0 !== s ? s : 0) * t.factor + 3.6 * l,
                    c = null !== (a = e.decay) && void 0 !== a ? a : 1;
                r && "increasing" !== e.status ? (e.value -= u, e.value < 0 && (e.loops || (e.loops = 0), e.loops++, e.status = "increasing", e.value += e.value)) : (e.value += u, e.value > o && (e.loops || (e.loops = 0), e.loops++, r && (e.status = "decreasing", e.value -= e.value % o))), e.velocity && 1 !== c && (e.velocity *= c), e.value > o && (e.value %= o)
            }
            class eb {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    var e, i, o;
                    let r = this.container,
                        s = (0, n.wA)(t.options.stroke, t.id, t.options.reduceDuplicates);
                    t.strokeWidth = (0, n.Gu)(s.width) * r.retina.pixelRatio, t.strokeOpacity = (0, n.Gu)(null !== (e = s.opacity) && void 0 !== e ? e : 1), t.strokeAnimation = null === (i = s.color) || void 0 === i ? void 0 : i.animation;
                    let a = null !== (o = (0, n.lN)(s.color)) && void 0 !== o ? o : t.getFillColor();
                    a && (t.strokeColor = (0, n.bS)(a, t.strokeAnimation, r.retina.reduceFactor))
                }
                isEnabled(t) {
                    var e, i, n;
                    let o = t.strokeAnimation;
                    return !t.destroyed && !t.spawning && !!o && ((null === (e = t.strokeColor) || void 0 === e ? void 0 : e.h.value) !== void 0 && t.strokeColor.h.enable || (null === (i = t.strokeColor) || void 0 === i ? void 0 : i.s.value) !== void 0 && t.strokeColor.s.enable || (null === (n = t.strokeColor) || void 0 === n ? void 0 : n.l.value) !== void 0 && t.strokeColor.l.enable)
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        if (!t.strokeColor || !t.strokeAnimation) return;
                        let i = t.strokeColor.h;
                        i && eg(e, i, t.strokeAnimation.h, 360, !1);
                        let n = t.strokeColor.s;
                        n && eg(e, n, t.strokeAnimation.s, 100, !0);
                        let o = t.strokeColor.l;
                        o && eg(e, o, t.strokeAnimation.l, 100, !0)
                    }(t, e)
                }
            }
            async function ew(t) {
                await t.addParticleUpdater("strokeColor", t => new eb(t))
            }
            let ex = ["text", "character", "char"];
            class eC {
                draw(t, e, i, o) {
                    var r, s, a;
                    let l = e.shapeData;
                    if (void 0 === l) return;
                    let u = l.value;
                    if (void 0 === u) return;
                    void 0 === e.text && (e.text = (0, n.wA)(u, e.randomIndexData));
                    let c = e.text,
                        d = null !== (r = l.style) && void 0 !== r ? r : "",
                        h = null !== (s = l.weight) && void 0 !== s ? s : "400",
                        p = null !== (a = l.font) && void 0 !== a ? a : "Verdana",
                        f = e.fill,
                        v = c.length * i / 2;
                    t.font = `${d} ${h} ${2*Math.round(i)}px "${p}"`;
                    let m = {
                        x: -v,
                        y: i / 2
                    };
                    t.globalAlpha = o, f ? t.fillText(c, m.x, m.y) : t.strokeText(c, m.x, m.y), t.globalAlpha = 1
                }
                getSidesCount() {
                    return 12
                }
                async init(t) {
                    let e = t.actualOptions;
                    if (ex.find(t => (0, n.dB)(t, e.particles.shape.type))) {
                        let t = ex.map(t => e.particles.shape.options[t]).find(t => !!t),
                            i = [];
                        (0, n.KH)(t, t => {
                            i.push((0, n.mx)(t.font, t.weight))
                        }), await Promise.all(i)
                    }
                }
            }
            async function ek(t) {
                await t.addShape(ex, new eC)
            }
            async function eP(t) {
                await H(t), await tK(t), await J(t), await te(t), await ta(t), await td(t), await tv(t), await
                function(t) {
                    t.addInteractor("externalPause", t => new tm(t))
                }(t), await tb(t), await
                function(t) {
                    t.addInteractor("externalRemove", t => new tx(t))
                }(t), await tS(t), await tz(t), await tQ(t), await t5(t), await eo(t), await N(t), await tD(t), await tW(t), await ec(t), await ev(t), await ey(t), await ek(t), await tB(t), await tU(t), await eh(t), await q(t), await Y(t), await ew(t), await tY(t), await j(t)
            }
            class eO {
                constructor() {
                    this.enable = !1, this.speed = 0, this.decay = 0, this.sync = !1
                }
                load(t) {
                    t && (void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed && (this.speed = (0, n.Cs)(t.speed)), void 0 !== t.decay && (this.decay = (0, n.Cs)(t.decay)), void 0 !== t.sync && (this.sync = t.sync))
                }
            }
            class eS extends n.SW {
                constructor() {
                    super(), this.animation = new eO, this.direction = "clockwise", this.enable = !1, this.value = 0
                }
                load(t) {
                    super.load(t), t && (this.animation.load(t.animation), void 0 !== t.direction && (this.direction = t.direction), void 0 !== t.enable && (this.enable = t.enable))
                }
            }
            class eE {
                constructor(t) {
                    this.container = t
                }
                getTransformValues(t) {
                    var e;
                    let i = (null === (e = t.tilt) || void 0 === e ? void 0 : e.enable) && t.tilt;
                    return {
                        b: i ? Math.cos(i.value) * i.cosDirection : void 0,
                        c: i ? Math.sin(i.value) * i.sinDirection : void 0
                    }
                }
                init(t) {
                    var e;
                    let i = t.options.tilt;
                    if (!i) return;
                    t.tilt = {
                        enable: i.enable,
                        value: (0, n.Gu)(i.value) * Math.PI / 180,
                        sinDirection: (0, n.sZ)() >= .5 ? 1 : -1,
                        cosDirection: (0, n.sZ)() >= .5 ? 1 : -1
                    };
                    let o = i.direction;
                    switch ("random" === o && (o = Math.floor(2 * (0, n.sZ)()) > 0 ? "counter-clockwise" : "clockwise"), o) {
                        case "counter-clockwise":
                        case "counterClockwise":
                            t.tilt.status = "decreasing";
                            break;
                        case "clockwise":
                            t.tilt.status = "increasing"
                    }
                    let r = null === (e = t.options.tilt) || void 0 === e ? void 0 : e.animation;
                    (null == r ? void 0 : r.enable) && (t.tilt.decay = 1 - (0, n.Gu)(r.decay), t.tilt.velocity = (0, n.Gu)(r.speed) / 360 * this.container.retina.reduceFactor, r.sync || (t.tilt.velocity *= (0, n.sZ)()))
                }
                isEnabled(t) {
                    var e;
                    let i = null === (e = t.options.tilt) || void 0 === e ? void 0 : e.animation;
                    return !t.destroyed && !t.spawning && !!(null == i ? void 0 : i.enable)
                }
                loadOptions(t, ...e) {
                    for (let i of (t.tilt || (t.tilt = new eS), e)) t.tilt.load(null == i ? void 0 : i.tilt)
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        var i, n;
                        if (!t.tilt || !t.options.tilt) return;
                        let o = t.options.tilt.animation,
                            r = (null !== (i = t.tilt.velocity) && void 0 !== i ? i : 0) * e.factor,
                            s = 2 * Math.PI,
                            a = null !== (n = t.tilt.decay) && void 0 !== n ? n : 1;
                        o.enable && ("increasing" === t.tilt.status ? (t.tilt.value += r, t.tilt.value > s && (t.tilt.value -= s)) : (t.tilt.value -= r, t.tilt.value < 0 && (t.tilt.value += s)), t.tilt.velocity && 1 !== a && (t.tilt.velocity *= a))
                    }(t, e)
                }
            }
            async function eM(t) {
                await t.addParticleUpdater("tilt", t => new eE(t))
            }
            class ez {
                constructor() {
                    this.enable = !1, this.frequency = .05, this.opacity = 1
                }
                load(t) {
                    t && (void 0 !== t.color && (this.color = n.Oz.create(this.color, t.color)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.frequency && (this.frequency = t.frequency), void 0 !== t.opacity && (this.opacity = (0, n.Cs)(t.opacity)))
                }
            }
            class e_ {
                constructor() {
                    this.lines = new ez, this.particles = new ez
                }
                load(t) {
                    t && (this.lines.load(t.lines), this.particles.load(t.particles))
                }
            }
            class eR {
                getColorStyles(t, e, i, o) {
                    let r = t.options.twinkle;
                    if (!r) return {};
                    let s = r.particles,
                        a = s.enable && (0, n.sZ)() < s.frequency,
                        l = t.options.zIndex,
                        u = (1 - t.zIndexFactor) ** l.opacityRate,
                        c = a ? (0, n.Gu)(s.opacity) * u : o,
                        d = (0, n.lN)(s.color),
                        h = d ? (0, n.vz)(d, c) : void 0,
                        p = {},
                        f = a && h;
                    return p.fill = f ? h : void 0, p.stroke = f ? h : void 0, p
                }
                init() {}
                isEnabled(t) {
                    let e = t.options.twinkle;
                    return !!e && e.particles.enable
                }
                loadOptions(t, ...e) {
                    for (let i of (t.twinkle || (t.twinkle = new e_), e)) t.twinkle.load(null == i ? void 0 : i.twinkle)
                }
                update() {}
            }
            async function eA(t) {
                await t.addParticleUpdater("twinkle", () => new eR)
            }
            class eT {
                constructor() {
                    this.angle = 50, this.move = 10
                }
                load(t) {
                    t && (void 0 !== t.angle && (this.angle = (0, n.Cs)(t.angle)), void 0 !== t.move && (this.move = (0, n.Cs)(t.move)))
                }
            }
            class eD {
                constructor() {
                    this.distance = 5, this.enable = !1, this.speed = new eT
                }
                load(t) {
                    if (t && (void 0 !== t.distance && (this.distance = (0, n.Cs)(t.distance)), void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.speed)) {
                        if ("number" == typeof t.speed) this.speed.load({
                            angle: t.speed
                        });
                        else {
                            let e = t.speed;
                            void 0 !== e.min ? this.speed.load({
                                angle: e
                            }) : this.speed.load(t.speed)
                        }
                    }
                }
            }
            class eL {
                constructor(t) {
                    this.container = t
                }
                init(t) {
                    var e;
                    let i = t.options.wobble;
                    (null == i ? void 0 : i.enable) ? t.wobble = {
                        angle: (0, n.sZ)() * Math.PI * 2,
                        angleSpeed: (0, n.Gu)(i.speed.angle) / 360,
                        moveSpeed: (0, n.Gu)(i.speed.move) / 10
                    }: t.wobble = {
                        angle: 0,
                        angleSpeed: 0,
                        moveSpeed: 0
                    }, t.retina.wobbleDistance = (0, n.Gu)(null !== (e = null == i ? void 0 : i.distance) && void 0 !== e ? e : 0) * this.container.retina.pixelRatio
                }
                isEnabled(t) {
                    var e;
                    return !t.destroyed && !t.spawning && !!(null === (e = t.options.wobble) || void 0 === e ? void 0 : e.enable)
                }
                loadOptions(t, ...e) {
                    for (let i of (t.wobble || (t.wobble = new eD), e)) t.wobble.load(null == i ? void 0 : i.wobble)
                }
                update(t, e) {
                    this.isEnabled(t) && function(t, e) {
                        var i;
                        let n = t.options.wobble;
                        if (!(null == n ? void 0 : n.enable) || !t.wobble) return;
                        let o = t.wobble.angleSpeed * e.factor,
                            r = t.wobble.moveSpeed * e.factor,
                            s = (null !== (i = t.retina.wobbleDistance) && void 0 !== i ? i : 0) * e.factor * r / (1e3 / 60),
                            a = 2 * Math.PI;
                        t.wobble.angle += o, t.wobble.angle > a && (t.wobble.angle -= a), t.position.x += s * Math.cos(t.wobble.angle), t.position.y += s * Math.abs(Math.sin(t.wobble.angle))
                    }(t, e)
                }
            }
            async function eI(t) {
                await t.addParticleUpdater("wobble", t => new eL(t))
            }
            async function eV(t) {
                await eP(t), await y(t), await V(t), await eM(t), await eA(t), await eI(t), await T(t), await c(t), await _(t)
            }
        },
        48488: function(t, e, i) {
            "use strict";
            i.d(e, {
                C: function() {
                    return n
                }
            });
            var n = function(t) {
                return Array.isArray(t)
            }
        },
        81593: function(t, e, i) {
            "use strict";
            i.d(e, {
                ev: function() {
                    return tc
                },
                b8: function() {
                    return td
                }
            });
            var n = i(97582),
                o = i(24394),
                r = i(6773);

            function s(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let a = ["duration", "bounce"],
                l = ["stiffness", "damping", "mass"];

            function u(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function c(t) {
                var {
                    from: e = 0,
                    to: i = 1,
                    restSpeed: c = 2,
                    restDelta: h
                } = t, p = (0, n._T)(t, ["from", "to", "restSpeed", "restDelta"]);
                let f = {
                        done: !1,
                        value: e
                    },
                    {
                        stiffness: v,
                        damping: m,
                        mass: y,
                        velocity: g,
                        duration: b,
                        isResolvedFromDuration: w
                    } = function(t) {
                        let e = Object.assign({
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1
                        }, t);
                        if (!u(t, l) && u(t, a)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: n = 1
                            }) {
                                let a, l;
                                (0, o.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
                                let u = 1 - e;
                                u = (0, r.u)(.05, 1, u), t = (0, r.u)(.01, 10, t / 1e3), u < 1 ? (a = e => {
                                    let n = e * u,
                                        o = n * t;
                                    return .001 - (n - i) / s(e, u) * Math.exp(-o)
                                }, l = e => {
                                    let n = e * u * t,
                                        o = Math.pow(u, 2) * Math.pow(e, 2) * t,
                                        r = s(Math.pow(e, 2), u);
                                    return (n * i + i - o) * Math.exp(-n) * (-a(e) + .001 > 0 ? -1 : 1) / r
                                }) : (a = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), l = e => t * t * (i - e) * Math.exp(-e * t));
                                let c = function(t, e, i) {
                                    let n = i;
                                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                    return n
                                }(a, l, 5 / t);
                                if (t *= 1e3, isNaN(c)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(c, 2) * n;
                                    return {
                                        stiffness: e,
                                        damping: 2 * u * Math.sqrt(n * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = Object.assign(Object.assign(Object.assign({}, e), i), {
                                velocity: 0,
                                mass: 1
                            })).isResolvedFromDuration = !0
                        }
                        return e
                    }(p),
                    x = d,
                    C = d;

                function k() {
                    let t = g ? -(g / 1e3) : 0,
                        n = i - e,
                        o = m / (2 * Math.sqrt(v * y)),
                        r = Math.sqrt(v / y) / 1e3;
                    if (void 0 === h && (h = Math.min(Math.abs(i - e) / 100, .4)), o < 1) {
                        let e = s(r, o);
                        x = s => i - Math.exp(-o * r * s) * ((t + o * r * n) / e * Math.sin(e * s) + n * Math.cos(e * s)), C = i => {
                            let s = Math.exp(-o * r * i);
                            return o * r * s * (Math.sin(e * i) * (t + o * r * n) / e + n * Math.cos(e * i)) - s * (Math.cos(e * i) * (t + o * r * n) - e * n * Math.sin(e * i))
                        }
                    } else if (1 === o) x = e => i - Math.exp(-r * e) * (n + (t + r * n) * e);
                    else {
                        let e = r * Math.sqrt(o * o - 1);
                        x = s => {
                            let a = Math.exp(-o * r * s),
                                l = Math.min(e * s, 300);
                            return i - a * ((t + o * r * n) * Math.sinh(l) + e * n * Math.cosh(l)) / e
                        }
                    }
                }
                return k(), {
                    next: t => {
                        let e = x(t);
                        if (w) f.done = t >= b;
                        else {
                            let n = 1e3 * C(t),
                                o = Math.abs(i - e) <= h;
                            f.done = Math.abs(n) <= c && o
                        }
                        return f.value = f.done ? i : e, f
                    },
                    flipTarget: () => {
                        g = -g, [e, i] = [i, e], k()
                    }
                }
            }
            c.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
            let d = t => 0;
            var h = i(9326),
                p = i(72453),
                f = i(22960),
                v = i(78059),
                m = i(34582);

            function y(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function g({
                hue: t,
                saturation: e,
                lightness: i,
                alpha: n
            }) {
                t /= 360, i /= 100;
                let o = 0,
                    r = 0,
                    s = 0;
                if (e /= 100) {
                    let n = i < .5 ? i * (1 + e) : i + e - i * e,
                        a = 2 * i - n;
                    o = y(a, n, t + 1 / 3), r = y(a, n, t), s = y(a, n, t - 1 / 3)
                } else o = r = s = i;
                return {
                    red: Math.round(255 * o),
                    green: Math.round(255 * r),
                    blue: Math.round(255 * s),
                    alpha: n
                }
            }
            let b = (t, e, i) => {
                    let n = t * t;
                    return Math.sqrt(Math.max(0, i * (e * e - n) + n))
                },
                w = [f.$, v.m, m.J],
                x = t => w.find(e => e.test(t)),
                C = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
                k = (t, e) => {
                    let i = x(t),
                        n = x(e);
                    (0, o.k)(!!i, C(t)), (0, o.k)(!!n, C(e));
                    let r = i.parse(t),
                        s = n.parse(e);
                    i === m.J && (r = g(r), i = v.m), n === m.J && (s = g(s), n = v.m);
                    let a = Object.assign({}, r);
                    return t => {
                        for (let e in a) "alpha" !== e && (a[e] = b(r[e], s[e], t));
                        return a.alpha = (0, p.C)(r.alpha, s.alpha, t), i.transform(a)
                    }
                };
            var P = i(87405),
                O = i(28407),
                S = i(80734),
                E = i(9897);

            function M(t, e) {
                return (0, S.e)(t) ? i => (0, p.C)(t, e, i) : P.$.test(t) ? k(t, e) : A(t, e)
            }
            let z = (t, e) => {
                    let i = [...t],
                        n = i.length,
                        o = t.map((t, i) => M(t, e[i]));
                    return t => {
                        for (let e = 0; e < n; e++) i[e] = o[e](t);
                        return i
                    }
                },
                _ = (t, e) => {
                    let i = Object.assign(Object.assign({}, t), e),
                        n = {};
                    for (let o in i) void 0 !== t[o] && void 0 !== e[o] && (n[o] = M(t[o], e[o]));
                    return t => {
                        for (let e in n) i[e] = n[e](t);
                        return i
                    }
                };

            function R(t) {
                let e = O.P.parse(t),
                    i = e.length,
                    n = 0,
                    o = 0,
                    r = 0;
                for (let t = 0; t < i; t++) n || "number" == typeof e[t] ? n++ : void 0 !== e[t].hue ? r++ : o++;
                return {
                    parsed: e,
                    numNumbers: n,
                    numRGB: o,
                    numHSL: r
                }
            }
            let A = (t, e) => {
                    let i = O.P.createTransformer(e),
                        n = R(t),
                        r = R(e);
                    return n.numHSL === r.numHSL && n.numRGB === r.numRGB && n.numNumbers >= r.numNumbers ? (0, E.z)(z(n.parsed, r.parsed), i) : ((0, o.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), i => `${i>0?e:t}`)
                },
                T = (t, e) => i => (0, p.C)(t, e, i);

            function D(t, e, {
                clamp: i = !0,
                ease: n,
                mixer: s
            } = {}) {
                let a = t.length;
                (0, o.k)(a === e.length, "Both input and output ranges must be the same length"), (0, o.k)(!n || !Array.isArray(n) || n.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[a - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                let l = function(t, e, i) {
                        var n;
                        let o = [],
                            r = i || ("number" == typeof(n = t[0]) ? T : "string" == typeof n ? P.$.test(n) ? k : A : Array.isArray(n) ? z : "object" == typeof n ? _ : void 0),
                            s = t.length - 1;
                        for (let i = 0; i < s; i++) {
                            let n = r(t[i], t[i + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[i] : e;
                                n = (0, E.z)(t, n)
                            }
                            o.push(n)
                        }
                        return o
                    }(e, n, s),
                    u = 2 === a ? function([t, e], [i]) {
                        return n => i((0, h.Y)(t, e, n))
                    }(t, l) : function(t, e) {
                        let i = t.length,
                            n = i - 1;
                        return o => {
                            let r = 0,
                                s = !1;
                            if (o <= t[0] ? s = !0 : o >= t[n] && (r = n - 1, s = !0), !s) {
                                let e = 1;
                                for (; e < i && !(t[e] > o) && e !== n; e++);
                                r = e - 1
                            }
                            let a = (0, h.Y)(t[r], t[r + 1], o);
                            return e[r](a)
                        }
                    }(t, l);
                return i ? e => u((0, r.u)(t[0], t[a - 1], e)) : u
            }
            var L = i(84710);

            function I({
                from: t = 0,
                to: e = 1,
                ease: i,
                offset: n,
                duration: o = 300
            }) {
                let r = {
                        done: !1,
                        value: t
                    },
                    s = Array.isArray(e) ? e : [t, e],
                    a = (n && n.length === s.length ? n : function(t) {
                        let e = t.length;
                        return t.map((t, i) => 0 !== i ? i / (e - 1) : 0)
                    }(s)).map(t => t * o);

                function l() {
                    return D(a, s, {
                        ease: Array.isArray(i) ? i : s.map(() => i || L.mZ).splice(0, s.length - 1)
                    })
                }
                let u = l();
                return {
                    next: t => (r.value = u(t), r.done = t >= o, r),
                    flipTarget: () => {
                        s.reverse(), u = l()
                    }
                }
            }
            let V = {
                keyframes: I,
                spring: c,
                decay: function({
                    velocity: t = 0,
                    from: e = 0,
                    power: i = .8,
                    timeConstant: n = 350,
                    restDelta: o = .5,
                    modifyTarget: r
                }) {
                    let s = {
                            done: !1,
                            value: e
                        },
                        a = i * t,
                        l = e + a,
                        u = void 0 === r ? l : r(l);
                    return u !== l && (a = u - e), {
                        next: t => {
                            let e = -a * Math.exp(-t / n);
                            return s.done = !(e > o || e < -o), s.value = s.done ? u : u + e, s
                        },
                        flipTarget: () => {}
                    }
                }
            };
            var j = i(54735);

            function B(t, e, i = 0) {
                return t - e - i
            }
            let F = t => {
                let e = ({
                    delta: e
                }) => t(e);
                return {
                    start: () => j.ZP.update(e, !0),
                    stop: () => j.qY.update(e)
                }
            };

            function W(t) {
                let e, i, o;
                var r, {
                        from: s,
                        autoplay: a = !0,
                        driver: l = F,
                        elapsed: u = 0,
                        repeat: d = 0,
                        repeatType: h = "loop",
                        repeatDelay: p = 0,
                        onPlay: f,
                        onStop: v,
                        onComplete: m,
                        onRepeat: y,
                        onUpdate: g
                    } = t,
                    b = (0, n._T)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
                let {
                    to: w
                } = b, x = 0, C = b.duration, k = !1, P = !0, O = function(t) {
                    if (Array.isArray(t.to)) return I;
                    if (V[t.type]) return V[t.type];
                    let e = new Set(Object.keys(t));
                    if (e.has("ease") || e.has("duration") && !e.has("dampingRatio"));
                    else if (e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta")) return c;
                    return I
                }(b);
                (null === (r = O.needsInterpolation) || void 0 === r ? void 0 : r.call(O, s, w)) && (o = D([0, 100], [s, w], {
                    clamp: !1
                }), s = 0, w = 100);
                let S = O(Object.assign(Object.assign({}, b), {
                    from: s,
                    to: w
                }));
                return a && (null == f || f(), (e = l(function(t) {
                    if (P || (t = -t), u += t, !k) {
                        let t = S.next(Math.max(0, u));
                        i = t.value, o && (i = o(i)), k = P ? t.done : u <= 0
                    }
                    if (null == g || g(i), k) {
                        if (0 === x && (null != C || (C = u)), x < d) {
                            var n, r;
                            n = u, r = C, (P ? n >= r + p : n <= -p) && (x++, "reverse" === h ? u = function(t, e, i = 0, n = !0) {
                                return n ? B(e + -t, e, i) : e - (t - e) + i
                            }(u, C, p, P = x % 2 == 0) : (u = B(u, C, p), "mirror" === h && S.flipTarget()), k = !1, y && y())
                        } else e.stop(), m && m()
                    }
                })).start()), {
                    stop: () => {
                        null == v || v(), e.stop()
                    }
                }
            }
            var q = i(99296),
                U = i(86917);
            let H = (t, e) => 1 - 3 * e + 3 * t,
                Z = (t, e) => 3 * e - 6 * t,
                N = t => 3 * t,
                G = (t, e, i) => ((H(e, i) * t + Z(e, i)) * t + N(e)) * t,
                $ = (t, e, i) => 3 * H(e, i) * t * t + 2 * Z(e, i) * t + N(e);
            var Y = {
                    linear: L.GE,
                    easeIn: L.YQ,
                    easeInOut: L.mZ,
                    easeOut: L.Vv,
                    circIn: L.Z7,
                    circInOut: L.X7,
                    circOut: L.Bn,
                    backIn: L.G2,
                    backInOut: L.XL,
                    backOut: L.CG,
                    anticipate: L.LU,
                    bounceIn: L.h9,
                    bounceInOut: L.yD,
                    bounceOut: L.gJ
                },
                X = function(t) {
                    if (Array.isArray(t)) {
                        (0, o.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        var e = (0, n.CR)(t, 4);
                        return function(t, e, i, n) {
                            if (t === e && i === n) return L.GE;
                            let o = new Float32Array(11);
                            for (let e = 0; e < 11; ++e) o[e] = G(.1 * e, t, i);
                            return r => 0 === r || 1 === r ? r : G(function(e) {
                                let n = 0,
                                    r = 1;
                                for (; 10 !== r && o[r] <= e; ++r) n += .1;
                                let s = n + (e - o[--r]) / (o[r + 1] - o[r]) * .1,
                                    a = $(s, t, i);
                                return a >= .001 ? function(t, e, i, n) {
                                    for (let o = 0; o < 8; ++o) {
                                        let o = $(e, i, n);
                                        if (0 === o) break;
                                        let r = G(e, i, n) - t;
                                        e -= r / o
                                    }
                                    return e
                                }(e, s, t, i) : 0 === a ? s : function(t, e, i, n, o) {
                                    let r, s;
                                    let a = 0;
                                    do(r = G(s = e + (i - e) / 2, n, o) - t) > 0 ? i = s : e = s; while (Math.abs(r) > 1e-7 && ++a < 10);
                                    return s
                                }(e, n, n + .1, t, i)
                            }(r), e, n)
                        }(e[0], e[1], e[2], e[3])
                    }
                    return "string" == typeof t ? ((0, o.k)(void 0 !== Y[t], "Invalid easing type '".concat(t, "'")), Y[t]) : t
                },
                K = function(t, e) {
                    return "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && O.P.test(e) && !e.startsWith("url("))
                },
                J = i(48488),
                Q = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restSpeed: 10
                    }
                },
                tt = function(t) {
                    return {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    }
                },
                te = function() {
                    return {
                        type: "keyframes",
                        ease: "linear",
                        duration: .3
                    }
                },
                ti = function(t) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: t
                    }
                },
                tn = {
                    x: Q,
                    y: Q,
                    z: Q,
                    rotate: Q,
                    rotateX: Q,
                    rotateY: Q,
                    rotateZ: Q,
                    scaleX: tt,
                    scaleY: tt,
                    scale: tt,
                    opacity: te,
                    backgroundColor: te,
                    color: te,
                    default: tt
                },
                to = function(t, e) {
                    var i;
                    return i = (0, J.C)(e) ? ti : tn[t] || tn.default, (0, n.pi)({
                        to: e
                    }, i(e))
                },
                tr = i(79135),
                ts = i(8715),
                ta = !1;

            function tl(t) {
                return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function tu(t) {
                return "number" == typeof t ? 0 : (0, tr.T)("", t)
            }

            function tc(t, e) {
                return t[e] || t.default || t
            }

            function td(t, e, i, r) {
                return void 0 === r && (r = {}), e.start(function(s) {
                    var a, l, u, c, d, h, p, f, v, m, y, g = (c = i, p = null !== (d = (h = tc(r, t)).from) && void 0 !== d ? d : e.get(), f = K(t, c), "none" === p && f && "string" == typeof c ? p = (0, tr.T)(t, c) : tl(p) && "string" == typeof c ? p = tu(c) : !Array.isArray(c) && tl(c) && "string" == typeof p && (c = tu(p)), v = K(t, p), (0, o.K)(v === f, "You are trying to animate ".concat(t, ' from "').concat(p, '" to "').concat(c, '". ').concat(p, " is not an animatable value - to enable this animation set ").concat(p, " to a value animatable to ").concat(c, " via the `style` property.")), v && f && !1 !== h.type ? function() {
                            var i, r, a, l, u, d, f, v, m, y, g, b, w, x = {
                                from: p,
                                to: c,
                                velocity: e.getVelocity(),
                                onComplete: s,
                                onUpdate: function(t) {
                                    return e.set(t)
                                }
                            };
                            return "inertia" === h.type || "decay" === h.type ? function({
                                from: t = 0,
                                velocity: e = 0,
                                min: i,
                                max: n,
                                power: o = .8,
                                timeConstant: r = 750,
                                bounceStiffness: s = 500,
                                bounceDamping: a = 10,
                                restDelta: l = 1,
                                modifyTarget: u,
                                driver: c,
                                onUpdate: d,
                                onComplete: h,
                                onStop: p
                            }) {
                                let f;

                                function v(t) {
                                    return void 0 !== i && t < i || void 0 !== n && t > n
                                }

                                function m(t) {
                                    return void 0 === i ? n : void 0 === n ? i : Math.abs(i - t) < Math.abs(n - t) ? i : n
                                }

                                function y(t) {
                                    null == f || f.stop(), f = W(Object.assign(Object.assign({}, t), {
                                        driver: c,
                                        onUpdate: e => {
                                            var i;
                                            null == d || d(e), null === (i = t.onUpdate) || void 0 === i || i.call(t, e)
                                        },
                                        onComplete: h,
                                        onStop: p
                                    }))
                                }

                                function g(t) {
                                    y(Object.assign({
                                        type: "spring",
                                        stiffness: s,
                                        damping: a,
                                        restDelta: l
                                    }, t))
                                }
                                if (v(t)) g({
                                    from: t,
                                    velocity: e,
                                    to: m(t)
                                });
                                else {
                                    let n, s, a = o * e + t;
                                    void 0 !== u && (a = u(a));
                                    let c = m(a),
                                        d = c === i ? -1 : 1;
                                    y({
                                        type: "decay",
                                        from: t,
                                        velocity: e,
                                        timeConstant: r,
                                        power: o,
                                        restDelta: l,
                                        modifyTarget: u,
                                        onUpdate: v(a) ? t => {
                                            n = s, s = t, e = (0, q.R)(t - n, (0, j.$B)().delta), (1 === d && t > c || -1 === d && t < c) && g({
                                                from: t,
                                                to: c,
                                                velocity: e
                                            })
                                        } : void 0
                                    })
                                }
                                return {
                                    stop: () => null == f ? void 0 : f.stop()
                                }
                            }((0, n.pi)((0, n.pi)({}, x), h)) : W((0, n.pi)((0, n.pi)({}, (i = h, r = x, a = t, Array.isArray(r.to) && (null !== (l = i.duration) && void 0 !== l || (i.duration = .8)), Array.isArray(r.to) && null === r.to[0] && (r.to = (0, n.ev)([], (0, n.CR)(r.to), !1), r.to[0] = r.from), (u = i).when, u.delay, u.delayChildren, u.staggerChildren, u.staggerDirection, u.repeat, u.repeatType, u.repeatDelay, u.from, Object.keys((0, n._T)(u, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"])).length || (i = (0, n.pi)((0, n.pi)({}, i), to(a, r.to))), (0, n.pi)((0, n.pi)({}, r), (f = (d = i).ease, v = d.times, m = d.yoyo, y = d.flip, g = d.loop, b = (0, n._T)(d, ["ease", "times", "yoyo", "flip", "loop"]), w = (0, n.pi)({}, b), v && (w.offset = v), b.duration && (w.duration = (0, U.w)(b.duration)), b.repeatDelay && (w.repeatDelay = (0, U.w)(b.repeatDelay)), f && (w.ease = Array.isArray(f) && "number" != typeof f[0] ? f.map(X) : X(f)), "tween" === b.type && (w.type = "keyframes"), (m || g || y) && ((0, o.K)(!ta, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), ta = !0, m ? w.repeatType = "reverse" : g ? w.repeatType = "loop" : y && (w.repeatType = "mirror"), w.repeat = g || m || y || b.repeat), "spring" !== b.type && (w.type = "keyframes"), w)))), {
                                onUpdate: function(t) {
                                    var e;
                                    x.onUpdate(t), null === (e = h.onUpdate) || void 0 === e || e.call(h, t)
                                },
                                onComplete: function() {
                                    var t;
                                    x.onComplete(), null === (t = h.onComplete) || void 0 === t || t.call(h)
                                }
                            }))
                        } : function() {
                            var t, i, n = (0, ts.Y)(c);
                            return e.set(n), s(), null === (t = null == h ? void 0 : h.onUpdate) || void 0 === t || t.call(h, n), null === (i = null == h ? void 0 : h.onComplete) || void 0 === i || i.call(h), {
                                stop: function() {}
                            }
                        }),
                        b = null !== (u = null !== (l = (tc(a = r, t) || {}).delay) && void 0 !== l ? l : a.delay) && void 0 !== u ? u : 0,
                        w = function() {
                            return y = g()
                        };
                    return b ? m = window.setTimeout(w, (0, U.w)(b)) : w(),
                        function() {
                            clearTimeout(m), null == y || y.stop()
                        }
                })
            }
        },
        21190: function(t, e, i) {
            "use strict";
            i.d(e, {
                M: function() {
                    return y
                }
            });
            var n = i(97582),
                o = i(67294),
                r = i(49304),
                s = i(54735),
                a = i(58868);

            function l() {
                var t = (0, o.useRef)(!1);
                return (0, a.L)(function() {
                    return t.current = !0,
                        function() {
                            t.current = !1
                        }
                }, []), t
            }
            var u = i(240),
                c = i(96681),
                d = i(76316),
                h = function(t) {
                    var e = t.children,
                        i = t.initial,
                        r = t.isPresent,
                        s = t.onExitComplete,
                        a = t.custom,
                        l = t.presenceAffectsLayout,
                        h = (0, c.h)(p),
                        f = (0, d.M)(),
                        v = (0, o.useMemo)(function() {
                            return {
                                id: f,
                                initial: i,
                                isPresent: r,
                                custom: a,
                                onExitComplete: function(t) {
                                    var e, i;
                                    h.set(t, !0);
                                    try {
                                        for (var o = (0, n.XA)(h.values()), r = o.next(); !r.done; r = o.next())
                                            if (!r.value) return
                                    } catch (t) {
                                        e = {
                                            error: t
                                        }
                                    } finally {
                                        try {
                                            r && !r.done && (i = o.return) && i.call(o)
                                        } finally {
                                            if (e) throw e.error
                                        }
                                    }
                                    null == s || s()
                                },
                                register: function(t) {
                                    return h.set(t, !1),
                                        function() {
                                            return h.delete(t)
                                        }
                                }
                            }
                        }, l ? void 0 : [r]);
                    return (0, o.useMemo)(function() {
                        h.forEach(function(t, e) {
                            return h.set(e, !1)
                        })
                    }, [r]), o.useEffect(function() {
                        r || h.size || null == s || s()
                    }, [r]), o.createElement(u.O.Provider, {
                        value: v
                    }, e)
                };

            function p() {
                return new Map
            }
            var f = i(25364),
                v = i(65411),
                m = function(t) {
                    return t.key || ""
                },
                y = function(t) {
                    var e, i, u, c, d, p, y = t.children,
                        g = t.custom,
                        b = t.initial,
                        w = void 0 === b || b,
                        x = t.onExitComplete,
                        C = t.exitBeforeEnter,
                        k = t.presenceAffectsLayout,
                        P = void 0 === k || k,
                        O = (0, n.CR)((e = l(), u = (i = (0, n.CR)((0, o.useState)(0), 2))[0], c = i[1], d = (0, o.useCallback)(function() {
                            e.current && c(u + 1)
                        }, [u]), [(0, o.useCallback)(function() {
                            return s.ZP.postRender(d)
                        }, [d]), u]), 1)[0],
                        S = (0, o.useContext)(f.p).forceRender;
                    S && (O = S);
                    var E = l(),
                        M = (p = [], o.Children.forEach(y, function(t) {
                            (0, o.isValidElement)(t) && p.push(t)
                        }), p),
                        z = M,
                        _ = new Set,
                        R = (0, o.useRef)(z),
                        A = (0, o.useRef)(new Map).current,
                        T = (0, o.useRef)(!0);
                    if ((0, a.L)(function() {
                            T.current = !1,
                                function(t, e) {
                                    t.forEach(function(t) {
                                        var i = m(t);
                                        e.set(i, t)
                                    })
                                }(M, A), R.current = z
                        }), (0, v.z)(function() {
                            T.current = !0, A.clear(), _.clear()
                        }), T.current) return o.createElement(o.Fragment, null, z.map(function(t) {
                        return o.createElement(h, {
                            key: m(t),
                            isPresent: !0,
                            initial: !!w && void 0,
                            presenceAffectsLayout: P
                        }, t)
                    }));
                    z = (0, n.ev)([], (0, n.CR)(z), !1);
                    for (var D = R.current.map(m), L = M.map(m), I = D.length, V = 0; V < I; V++) {
                        var j = D[V]; - 1 === L.indexOf(j) && _.add(j)
                    }
                    return C && _.size && (z = []), _.forEach(function(t) {
                        if (-1 === L.indexOf(t)) {
                            var e = A.get(t);
                            if (e) {
                                var i = D.indexOf(t);
                                z.splice(i, 0, o.createElement(h, {
                                    key: m(e),
                                    isPresent: !1,
                                    onExitComplete: function() {
                                        A.delete(t), _.delete(t);
                                        var e = R.current.findIndex(function(e) {
                                            return e.key === t
                                        });
                                        if (R.current.splice(e, 1), !_.size) {
                                            if (R.current = M, !1 === E.current) return;
                                            O(), x && x()
                                        }
                                    },
                                    custom: g,
                                    presenceAffectsLayout: P
                                }, e))
                            }
                        }
                    }), z = z.map(function(t) {
                        var e = t.key;
                        return _.has(e) ? t : o.createElement(h, {
                            key: m(t),
                            isPresent: !0,
                            presenceAffectsLayout: P
                        }, t)
                    }), "production" !== r.O && C && z.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), o.createElement(o.Fragment, null, _.size ? z : z.map(function(t) {
                        return (0, o.cloneElement)(t)
                    }))
                }
        },
        25364: function(t, e, i) {
            "use strict";
            i.d(e, {
                p: function() {
                    return n
                }
            });
            var n = (0, i(67294).createContext)({})
        },
        240: function(t, e, i) {
            "use strict";
            i.d(e, {
                O: function() {
                    return n
                }
            });
            var n = (0, i(67294).createContext)(null)
        },
        92208: function(t, e, i) {
            "use strict";
            i.d(e, {
                E: function() {
                    return i2
                }
            });
            var n, o, r, s, a, l = i(97582),
                u = i(67294),
                c = i(49304),
                d = function(t) {
                    return {
                        isEnabled: function(e) {
                            return t.some(function(t) {
                                return !!e[t]
                            })
                        }
                    }
                },
                h = {
                    measureLayout: d(["layout", "layoutId", "drag"]),
                    animation: d(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: d(["exit"]),
                    drag: d(["drag", "dragControls"]),
                    focus: d(["whileFocus"]),
                    hover: d(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: d(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: d(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: d(["whileInView", "onViewportEnter", "onViewportLeave"])
                },
                p = i(24394),
                f = (0, u.createContext)({
                    strict: !1
                }),
                v = Object.keys(h),
                m = v.length,
                y = (0, u.createContext)({
                    transformPagePoint: function(t) {
                        return t
                    },
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                g = (0, u.createContext)({}),
                b = i(240),
                w = i(58868),
                x = i(11741),
                C = {
                    current: null
                },
                k = !1;

            function P(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            var O = i(67909);

            function S(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var E = i(96681),
                M = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                },
                z = 1,
                _ = i(25364),
                R = (0, u.createContext)({}),
                A = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return (0, l.ZT)(e, t), e.prototype.getSnapshotBeforeUpdate = function() {
                        return this.updateProps(), null
                    }, e.prototype.componentDidUpdate = function() {}, e.prototype.updateProps = function() {
                        var t = this.props,
                            e = t.visualElement,
                            i = t.props;
                        e && e.setProps(i)
                    }, e.prototype.render = function() {
                        return this.props.children
                    }, e
                }(u.Component),
                T = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function D(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (T.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
            var L = {},
                I = i(94714);

            function V(t, e) {
                var i = e.layout,
                    n = e.layoutId;
                return (0, I._c)(t) || (0, I.Ee)(t) || (i || void 0 !== n) && (!!L[t] || "opacity" === t)
            }
            var j = function(t) {
                    return !!(null !== t && "object" == typeof t && t.getVelocity)
                },
                B = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                };

            function F(t) {
                return t.startsWith("--")
            }
            var W = i(36173);

            function q(t, e, i, n) {
                var o, r, s, a, l = t.style,
                    u = t.vars,
                    c = t.transform,
                    d = t.transformKeys,
                    h = t.transformOrigin;
                d.length = 0;
                var p = !1,
                    f = !1,
                    v = !0;
                for (var m in e) {
                    var y = e[m];
                    if (F(m)) {
                        u[m] = y;
                        continue
                    }
                    var g = W.j[m],
                        b = g && "number" == typeof y ? g.transform(y) : y;
                    if ((0, I._c)(m)) {
                        if (p = !0, c[m] = b, d.push(m), !v) continue;
                        y !== (null !== (a = g.default) && void 0 !== a ? a : 0) && (v = !1)
                    } else(0, I.Ee)(m) ? (h[m] = b, f = !0) : l[m] = b
                }
                p ? l.transform = function(t, e, i, n) {
                    var o = t.transform,
                        r = t.transformKeys,
                        s = e.enableHardwareAcceleration,
                        a = e.allowTransformNone,
                        l = "";
                    r.sort(I.s3);
                    for (var u = !1, c = r.length, d = 0; d < c; d++) {
                        var h = r[d];
                        l += "".concat(B[h] || h, "(").concat(o[h], ") "), "z" === h && (u = !0)
                    }
                    return !u && (void 0 === s || s) ? l += "translateZ(0)" : l = l.trim(), n ? l = n(o, i ? "" : l) : (void 0 === a || a) && i && (l = "none"), l
                }(t, i, v, n) : n ? l.transform = n({}, "") : !e.transform && l.transform && (l.transform = "none"), f && (l.transformOrigin = (o = h.originX, r = h.originY, s = h.originZ, "".concat(void 0 === o ? "50%" : o, " ").concat(void 0 === r ? "50%" : r, " ").concat(void 0 === s ? 0 : s)))
            }
            var U = function() {
                return {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }
            };

            function H(t, e, i) {
                for (var n in e) j(e[n]) || V(n, i) || (t[n] = e[n])
            }
            var Z = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

            function N(t) {
                return Z.has(t)
            }
            var G = function(t) {
                return !N(t)
            };
            try {
                (n = require("@emotion/is-prop-valid").default) && (G = function(t) {
                    return t.startsWith("on") ? !N(t) : n(t)
                })
            } catch (t) {}
            var $ = i(2969);

            function Y(t, e, i) {
                return "string" == typeof t ? t : $.px.transform(e + i * t)
            }
            var X = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                K = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function J(t, e, i, n) {
                var o, r, s, a, u, c, d, h, p, f, v = e.attrX,
                    m = e.attrY,
                    y = e.originX,
                    g = e.originY,
                    b = e.pathLength,
                    w = e.pathSpacing,
                    x = e.pathOffset;
                q(t, (0, l._T)(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), i, n), t.attrs = t.style, t.style = {};
                var C = t.attrs,
                    k = t.style,
                    P = t.dimensions;
                C.transform && (P && (k.transform = C.transform), delete C.transform), P && (void 0 !== y || void 0 !== g || k.transform) && (k.transformOrigin = (o = void 0 !== y ? y : .5, r = void 0 !== g ? g : .5, s = Y(o, P.x, P.width), a = Y(r, P.y, P.height), "".concat(s, " ").concat(a))), void 0 !== v && (C.x = v), void 0 !== m && (C.y = m), void 0 !== b && (d = !1, void 0 === (u = void 0 === w ? 1 : w) && (u = 1), void 0 === (c = void 0 === x ? 0 : x) && (c = 0), void 0 === d && (d = !0), C.pathLength = 1, C[(h = d ? X : K).offset] = $.px.transform(-c), p = $.px.transform(b), f = $.px.transform(u), C[h.array] = "".concat(p, " ").concat(f))
            }
            var Q = function() {
                    return (0, l.pi)((0, l.pi)({}, U()), {
                        attrs: {}
                    })
                },
                tt = /([a-z])([A-Z])/g,
                te = function(t) {
                    return t.replace(tt, "$1-$2").toLowerCase()
                };

            function ti(t, e, i, n) {
                var o = e.style,
                    r = e.vars;
                for (var s in Object.assign(t.style, o, n && n.getProjectionStyles(i)), r) t.style.setProperty(s, r[s])
            }
            var tn = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function to(t, e, i, n) {
                for (var o in ti(t, e, void 0, n), e.attrs) t.setAttribute(tn.has(o) ? o : te(o), e.attrs[o])
            }

            function tr(t) {
                var e = t.style,
                    i = {};
                for (var n in e)(j(e[n]) || V(n, t)) && (i[n] = e[n]);
                return i
            }

            function ts(t) {
                var e = tr(t);
                for (var i in t) j(t[i]) && (e["x" === i || "y" === i ? "attr" + i.toUpperCase() : i] = t[i]);
                return e
            }

            function ta(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
            var tl = i(8715);

            function tu(t) {
                var e = j(t) ? t.get() : t;
                return (0, tl.p)(e) ? e.toValue() : e
            }

            function tc(t, e, i, n) {
                var o = t.scrapeMotionValuesFromProps,
                    r = t.createRenderState,
                    s = t.onMount,
                    a = {
                        latestValues: function(t, e, i, n) {
                            var o = {},
                                r = (null == i ? void 0 : i.initial) === !1,
                                s = n(t);
                            for (var a in s) o[a] = tu(s[a]);
                            var u = t.initial,
                                c = t.animate,
                                d = (0, O.O6)(t),
                                h = (0, O.e8)(t);
                            e && h && !d && !1 !== t.inherit && (null != u || (u = e.initial), null != c || (c = e.animate));
                            var p = r || !1 === u,
                                f = p ? c : u;
                            return f && "boolean" != typeof f && !ta(f) && (Array.isArray(f) ? f : [f]).forEach(function(e) {
                                var i = (0, O.oQ)(t, e);
                                if (i) {
                                    var n = i.transitionEnd;
                                    i.transition;
                                    var r = (0, l._T)(i, ["transitionEnd", "transition"]);
                                    for (var s in r) {
                                        var a = r[s];
                                        if (Array.isArray(a)) {
                                            var u = p ? a.length - 1 : 0;
                                            a = a[u]
                                        }
                                        null !== a && (o[s] = a)
                                    }
                                    for (var s in n) o[s] = n[s]
                                }
                            }), o
                        }(e, i, n, o),
                        renderState: r()
                    };
                return s && (a.mount = function(t) {
                    return s(e, t, a)
                }), a
            }
            var td = function(t) {
                    return function(e, i) {
                        var n = (0, u.useContext)(g),
                            o = (0, u.useContext)(b.O);
                        return i ? tc(t, e, n, o) : (0, E.h)(function() {
                            return tc(t, e, n, o)
                        })
                    }
                },
                th = {
                    useVisualState: td({
                        scrapeMotionValuesFromProps: ts,
                        createRenderState: Q,
                        onMount: function(t, e, i) {
                            var n = i.renderState,
                                o = i.latestValues;
                            try {
                                n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (t) {
                                n.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            J(n, o, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), to(e, n)
                        }
                    })
                },
                tp = {
                    useVisualState: td({
                        scrapeMotionValuesFromProps: tr,
                        createRenderState: U
                    })
                };

            function tf(t, e, i, n) {
                return void 0 === n && (n = {
                        passive: !0
                    }), t.addEventListener(e, i, n),
                    function() {
                        return t.removeEventListener(e, i)
                    }
            }

            function tv(t, e, i, n) {
                (0, u.useEffect)(function() {
                    var o = t.current;
                    if (i && o) return tf(o, e, i, n)
                }, [t, e, i, n])
            }

            function tm(t) {
                return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }(o = s || (s = {})).Animate = "animate", o.Hover = "whileHover", o.Tap = "whileTap", o.Drag = "whileDrag", o.Focus = "whileFocus", o.InView = "whileInView", o.Exit = "exit";
            var ty = {
                pageX: 0,
                pageY: 0
            };

            function tg(t, e) {
                var i, n, o;
                return void 0 === e && (e = "page"), {
                    point: t.touches ? (void 0 === (i = e) && (i = "page"), {
                        x: (n = t.touches[0] || t.changedTouches[0] || ty)[i + "X"],
                        y: n[i + "Y"]
                    }) : (void 0 === (o = e) && (o = "page"), {
                        x: t[o + "X"],
                        y: t[o + "Y"]
                    })
                }
            }
            var tb = function(t, e) {
                    void 0 === e && (e = !1);
                    var i = function(e) {
                        return t(e, tg(e))
                    };
                    return e ? function(t) {
                        var e = t instanceof MouseEvent;
                        (!e || e && 0 === t.button) && i(t)
                    } : i
                },
                tw = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                tx = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function tC(t) {
                if (x.j && null === window.onpointerdown);
                else if (x.j && null === window.ontouchstart) return tx[t];
                else if (x.j && null === window.onmousedown) return tw[t];
                return t
            }

            function tk(t, e, i, n) {
                return tf(t, tC(e), tb(i, "pointerdown" === e), n)
            }

            function tP(t, e, i, n) {
                return tv(t, tC(e), i && tb(i, "pointerdown" === e), n)
            }

            function tO(t) {
                var e = null;
                return function() {
                    return null === e && (e = t, function() {
                        e = null
                    })
                }
            }
            var tS = tO("dragHorizontal"),
                tE = tO("dragVertical");

            function tM(t) {
                var e = !1;
                if ("y" === t) e = tE();
                else if ("x" === t) e = tS();
                else {
                    var i = tS(),
                        n = tE();
                    i && n ? e = function() {
                        i(), n()
                    } : (i && i(), n && n())
                }
                return e
            }

            function tz() {
                var t = tM(!0);
                return !t || (t(), !1)
            }

            function t_(t, e, i) {
                return function(n, o) {
                    var r;
                    !tm(n) || tz() || (null === (r = t.animationState) || void 0 === r || r.setActive(s.Hover, e), null == i || i(n, o))
                }
            }
            var tR = function(t, e) {
                    return !!e && (t === e || tR(t, e.parentElement))
                },
                tA = i(65411),
                tT = i(9897),
                tD = new Set,
                tL = new WeakMap,
                tI = new WeakMap,
                tV = function(t) {
                    var e;
                    null === (e = tL.get(t.target)) || void 0 === e || e(t)
                },
                tj = function(t) {
                    t.forEach(tV)
                },
                tB = {
                    some: 0,
                    all: 1
                },
                tF = function(t) {
                    return function(e) {
                        return t(e), null
                    }
                },
                tW = {
                    inView: tF(function(t) {
                        var e = t.visualElement,
                            i = t.whileInView,
                            n = t.onViewportEnter,
                            o = t.onViewportLeave,
                            r = t.viewport,
                            a = void 0 === r ? {} : r,
                            d = (0, u.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            h = !!(i || n || o);
                        a.once && d.current.hasEnteredView && (h = !1), ("undefined" == typeof IntersectionObserver ? function(t, e, i, n) {
                            var o = n.fallback,
                                r = void 0 === o || o;
                            (0, u.useEffect)(function() {
                                if (t && r) {
                                    if ("production" !== c.O) {
                                        var n;
                                        n = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", tD.has(n) || (console.warn(n), tD.add(n))
                                    }
                                    requestAnimationFrame(function() {
                                        e.hasEnteredView = !0;
                                        var t, n = i.getProps().onViewportEnter;
                                        null == n || n(null), null === (t = i.animationState) || void 0 === t || t.setActive(s.InView, !0)
                                    })
                                }
                            }, [t])
                        } : function(t, e, i, n) {
                            var o = n.root,
                                r = n.margin,
                                a = n.amount,
                                c = void 0 === a ? "some" : a,
                                d = n.once;
                            (0, u.useEffect)(function() {
                                if (t) {
                                    var n, a, u, h, p, f, v, m, y = {
                                        root: null == o ? void 0 : o.current,
                                        rootMargin: r,
                                        threshold: "number" == typeof c ? c : tB[c]
                                    };
                                    return n = i.getInstance(), a = function(t) {
                                            var n, o = t.isIntersecting;
                                            if (e.isInView !== o) {
                                                if (e.isInView = o, d && !o && e.hasEnteredView) return;
                                                o && (e.hasEnteredView = !0), null === (n = i.animationState) || void 0 === n || n.setActive(s.InView, o);
                                                var r = i.getProps(),
                                                    a = o ? r.onViewportEnter : r.onViewportLeave;
                                                null == a || a(t)
                                            }
                                        }, u = y.root, h = (0, l._T)(y, ["root"]), p = u || document, tI.has(p) || tI.set(p, {}), (f = tI.get(p))[v = JSON.stringify(h)] || (f[v] = new IntersectionObserver(tj, (0, l.pi)({
                                            root: u
                                        }, h))), m = f[v], tL.set(n, a), m.observe(n),
                                        function() {
                                            tL.delete(n), m.unobserve(n)
                                        }
                                }
                            }, [t, o, r, c])
                        })(h, d.current, e, a)
                    }),
                    tap: tF(function(t) {
                        var e = t.onTap,
                            i = t.onTapStart,
                            n = t.onTapCancel,
                            o = t.whileTap,
                            r = t.visualElement,
                            a = e || i || n || o,
                            l = (0, u.useRef)(!1),
                            c = (0, u.useRef)(null),
                            d = {
                                passive: !(i || e || n || m)
                            };

                        function h() {
                            var t;
                            null === (t = c.current) || void 0 === t || t.call(c), c.current = null
                        }

                        function p() {
                            var t;
                            return h(), l.current = !1, null === (t = r.animationState) || void 0 === t || t.setActive(s.Tap, !1), !tz()
                        }

                        function f(t, i) {
                            p() && (tR(r.getInstance(), t.target) ? null == e || e(t, i) : null == n || n(t, i))
                        }

                        function v(t, e) {
                            p() && (null == n || n(t, e))
                        }

                        function m(t, e) {
                            var n;
                            h(), l.current || (l.current = !0, c.current = (0, tT.z)(tk(window, "pointerup", f, d), tk(window, "pointercancel", v, d)), null === (n = r.animationState) || void 0 === n || n.setActive(s.Tap, !0), null == i || i(t, e))
                        }
                        tP(r, "pointerdown", a ? m : void 0, d), (0, tA.z)(h)
                    }),
                    focus: tF(function(t) {
                        var e = t.whileFocus,
                            i = t.visualElement;
                        tv(i, "focus", e ? function() {
                            var t;
                            null === (t = i.animationState) || void 0 === t || t.setActive(s.Focus, !0)
                        } : void 0), tv(i, "blur", e ? function() {
                            var t;
                            null === (t = i.animationState) || void 0 === t || t.setActive(s.Focus, !1)
                        } : void 0)
                    }),
                    hover: tF(function(t) {
                        var e = t.onHoverStart,
                            i = t.onHoverEnd,
                            n = t.whileHover,
                            o = t.visualElement;
                        tP(o, "pointerenter", e || n ? t_(o, !0, e) : void 0, {
                            passive: !e
                        }), tP(o, "pointerleave", i || n ? t_(o, !1, i) : void 0, {
                            passive: !i
                        })
                    })
                },
                tq = i(76316);

            function tU() {
                var t = (0, u.useContext)(b.O);
                if (null === t) return [!0, null];
                var e = t.isPresent,
                    i = t.onExitComplete,
                    n = t.register,
                    o = (0, tq.M)();
                return (0, u.useEffect)(function() {
                    return n(o)
                }, []), !e && i ? [!1, function() {
                    return null == i ? void 0 : i(o)
                }] : [!0]
            }
            var tH = i(48488);

            function tZ(t, e) {
                if (!Array.isArray(e)) return !1;
                var i = e.length;
                if (i !== t.length) return !1;
                for (var n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            var tN = i(77107),
                tG = [s.Animate, s.InView, s.Focus, s.Hover, s.Tap, s.Drag, s.Exit],
                t$ = (0, l.ev)([], (0, l.CR)(tG), !1).reverse(),
                tY = tG.length;

            function tX(t) {
                return void 0 === t && (t = !1), {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var tK = {
                    animation: tF(function(t) {
                        var e = t.visualElement,
                            i = t.animate;
                        e.animationState || (e.animationState = function(t) {
                            var e, i = function(e) {
                                    return Promise.all(e.map(function(e) {
                                        var i = e.animation,
                                            n = e.options;
                                        return (0, tN.d5)(t, i, n)
                                    }))
                                },
                                n = ((e = {})[s.Animate] = tX(!0), e[s.InView] = tX(), e[s.Hover] = tX(), e[s.Tap] = tX(), e[s.Drag] = tX(), e[s.Focus] = tX(), e[s.Exit] = tX(), e),
                                o = {},
                                r = !0,
                                a = function(e, i) {
                                    var n = (0, O.x5)(t, i);
                                    if (n) {
                                        n.transition;
                                        var o = n.transitionEnd,
                                            r = (0, l._T)(n, ["transition", "transitionEnd"]);
                                        e = (0, l.pi)((0, l.pi)((0, l.pi)({}, e), r), o)
                                    }
                                    return e
                                };

                            function u(e, s) {
                                for (var u, c = t.getProps(), d = t.getVariantContext(!0) || {}, h = [], p = new Set, f = {}, v = 1 / 0, m = 0; m < tY; m++) ! function(i) {
                                    var o, m = t$[i],
                                        y = n[m],
                                        g = null !== (u = c[m]) && void 0 !== u ? u : d[m],
                                        b = (0, O.$L)(g),
                                        w = m === s ? y.isActive : null;
                                    !1 === w && (v = i);
                                    var x = g === d[m] && g !== c[m] && b;
                                    if (x && r && t.manuallyAnimateOnMount && (x = !1), y.protectedKeys = (0, l.pi)({}, f), !(!y.isActive && null === w || !g && !y.prevProp || ta(g)) && "boolean" != typeof g) {
                                        var C = (o = y.prevProp, "string" == typeof g ? g !== o : !!(0, O.A0)(g) && !tZ(g, o)),
                                            k = C || m === s && y.isActive && !x && b || i > v && b,
                                            P = Array.isArray(g) ? g : [g],
                                            S = P.reduce(a, {});
                                        !1 === w && (S = {});
                                        var E = y.prevResolvedValues,
                                            M = void 0 === E ? {} : E,
                                            z = (0, l.pi)((0, l.pi)({}, M), S),
                                            _ = function(t) {
                                                k = !0, p.delete(t), y.needsAnimating[t] = !0
                                            };
                                        for (var R in z) {
                                            var A = S[R],
                                                T = M[R];
                                            f.hasOwnProperty(R) || (A !== T ? (0, tH.C)(A) && (0, tH.C)(T) ? !tZ(A, T) || C ? _(R) : y.protectedKeys[R] = !0 : void 0 !== A ? _(R) : p.add(R) : void 0 !== A && p.has(R) ? _(R) : y.protectedKeys[R] = !0)
                                        }
                                        y.prevProp = g, y.prevResolvedValues = S, y.isActive && (f = (0, l.pi)((0, l.pi)({}, f), S)), r && t.blockInitialAnimation && (k = !1), k && !x && h.push.apply(h, (0, l.ev)([], (0, l.CR)(P.map(function(t) {
                                            return {
                                                animation: t,
                                                options: (0, l.pi)({
                                                    type: m
                                                }, e)
                                            }
                                        })), !1))
                                    }
                                }(m);
                                if (o = (0, l.pi)({}, f), p.size) {
                                    var y = {};
                                    p.forEach(function(e) {
                                        var i = t.getBaseTarget(e);
                                        void 0 !== i && (y[e] = i)
                                    }), h.push({
                                        animation: y
                                    })
                                }
                                var g = !!h.length;
                                return r && !1 === c.initial && !t.manuallyAnimateOnMount && (g = !1), r = !1, g ? i(h) : Promise.resolve()
                            }
                            return {
                                isAnimated: function(t) {
                                    return void 0 !== o[t]
                                },
                                animateChanges: u,
                                setActive: function(e, i, o) {
                                    if (n[e].isActive === i) return Promise.resolve();
                                    null === (r = t.variantChildren) || void 0 === r || r.forEach(function(t) {
                                        var n;
                                        return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
                                    }), n[e].isActive = i;
                                    var r, s = u(o, e);
                                    for (var a in n) n[a].protectedKeys = {};
                                    return s
                                },
                                setAnimateFunction: function(e) {
                                    i = e(t)
                                },
                                getState: function() {
                                    return n
                                }
                            }
                        }(e)), ta(i) && (0, u.useEffect)(function() {
                            return i.subscribe(e)
                        }, [i])
                    }),
                    exit: tF(function(t) {
                        var e = t.custom,
                            i = t.visualElement,
                            n = (0, l.CR)(tU(), 2),
                            o = n[0],
                            r = n[1],
                            a = (0, u.useContext)(b.O);
                        (0, u.useEffect)(function() {
                            i.isPresent = o;
                            var t, n, l = null === (t = i.animationState) || void 0 === t ? void 0 : t.setActive(s.Exit, !o, {
                                custom: null !== (n = null == a ? void 0 : a.custom) && void 0 !== n ? n : e
                            });
                            o || null == l || l.then(r)
                        }, [o])
                    })
                },
                tJ = i(54735),
                tQ = i(86917);
            let t0 = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
                t1 = t => t0(t) && t.hasOwnProperty("z");
            var t2 = i(80734);
            let t5 = (t, e) => Math.abs(t - e);

            function t3(t, e) {
                return (0, t2.e)(t) && (0, t2.e)(e) ? t5(t, e) : t0(t) && t0(e) ? Math.sqrt(Math.pow(t5(t.x, e.x), 2) + Math.pow(t5(t.y, e.y), 2) + Math.pow(t1(t) && t1(e) ? t5(t.z, e.z) : 0, 2)) : void 0
            }
            var t6 = function() {
                function t(t, e, i) {
                    var n = this,
                        o = (void 0 === i ? {} : i).transformPagePoint;
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                            if (n.lastMoveEvent && n.lastMoveEventInfo) {
                                var t = t8(n.lastMoveEventInfo, n.history),
                                    e = null !== n.startEvent,
                                    i = t3(t.offset, {
                                        x: 0,
                                        y: 0
                                    }) >= 3;
                                if (e || i) {
                                    var o = t.point,
                                        r = (0, tJ.$B)().timestamp;
                                    n.history.push((0, l.pi)((0, l.pi)({}, o), {
                                        timestamp: r
                                    }));
                                    var s = n.handlers,
                                        a = s.onStart,
                                        u = s.onMove;
                                    e || (a && a(n.lastMoveEvent, t), n.startEvent = n.lastMoveEvent), u && u(n.lastMoveEvent, t)
                                }
                            }
                        }, this.handlePointerMove = function(t, e) {
                            if (n.lastMoveEvent = t, n.lastMoveEventInfo = t4(e, n.transformPagePoint), tm(t) && 0 === t.buttons) {
                                n.handlePointerUp(t, e);
                                return
                            }
                            tJ.ZP.update(n.updatePoint, !0)
                        }, this.handlePointerUp = function(t, e) {
                            n.end();
                            var i = n.handlers,
                                o = i.onEnd,
                                r = i.onSessionEnd,
                                s = t8(t4(e, n.transformPagePoint), n.history);
                            n.startEvent && o && o(t, s), r && r(t, s)
                        }, !t.touches || !(t.touches.length > 1)) {
                        this.handlers = e, this.transformPagePoint = o;
                        var r = t4(tg(t), this.transformPagePoint),
                            s = r.point,
                            a = (0, tJ.$B)().timestamp;
                        this.history = [(0, l.pi)((0, l.pi)({}, s), {
                            timestamp: a
                        })];
                        var u = e.onSessionStart;
                        u && u(t, t8(r, this.history)), this.removeListeners = (0, tT.z)(tk(window, "pointermove", this.handlePointerMove), tk(window, "pointerup", this.handlePointerUp), tk(window, "pointercancel", this.handlePointerUp))
                    }
                }
                return t.prototype.updateHandlers = function(t) {
                    this.handlers = t
                }, t.prototype.end = function() {
                    this.removeListeners && this.removeListeners(), tJ.qY.update(this.updatePoint)
                }, t
            }();

            function t4(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function t7(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function t8(t, e) {
                var i = t.point;
                return {
                    point: i,
                    delta: t7(i, t9(e)),
                    offset: t7(i, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        for (var i = t.length - 1, n = null, o = t9(t); i >= 0 && (n = t[i], !(o.timestamp - n.timestamp > (0, tQ.w)(.1)));) i--;
                        if (!n) return {
                            x: 0,
                            y: 0
                        };
                        var r = (o.timestamp - n.timestamp) / 1e3;
                        if (0 === r) return {
                            x: 0,
                            y: 0
                        };
                        var s = {
                            x: (o.x - n.x) / r,
                            y: (o.y - n.y) / r
                        };
                        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
                    }(e, 0)
                }
            }

            function t9(t) {
                return t[t.length - 1]
            }
            var et = i(72453),
                ee = i(9326),
                ei = i(6773);

            function en(t) {
                return t.max - t.min
            }

            function eo(t, e, i) {
                return void 0 === e && (e = 0), void 0 === i && (i = .01), t3(t, e) < i
            }

            function er(t, e, i, n) {
                void 0 === n && (n = .5), t.origin = n, t.originPoint = (0, et.C)(e.min, e.max, t.origin), t.scale = en(i) / en(e), (eo(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, et.C)(i.min, i.max, t.origin) - t.originPoint, (eo(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function es(t, e, i, n) {
                er(t.x, e.x, i.x, null == n ? void 0 : n.originX), er(t.y, e.y, i.y, null == n ? void 0 : n.originY)
            }

            function ea(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + en(e)
            }

            function el(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + en(e)
            }

            function eu(t, e, i) {
                el(t.x, e.x, i.x), el(t.y, e.y, i.y)
            }

            function ec(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function ed(t, e) {
                var i, n = e.min - t.min,
                    o = e.max - t.max;
                return e.max - e.min < t.max - t.min && (n = (i = (0, l.CR)([o, n], 2))[0], o = i[1]), {
                    min: n,
                    max: o
                }
            }

            function eh(t, e, i) {
                return {
                    min: ep(t, e),
                    max: ep(t, i)
                }
            }

            function ep(t, e) {
                var i;
                return "number" == typeof t ? t : null !== (i = t[e]) && void 0 !== i ? i : 0
            }
            var ef = function() {
                    return {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                },
                ev = function() {
                    return {
                        x: ef(),
                        y: ef()
                    }
                },
                em = function() {
                    return {
                        min: 0,
                        max: 0
                    }
                },
                ey = function() {
                    return {
                        x: em(),
                        y: em()
                    }
                };

            function eg(t) {
                return [t("x"), t("y")]
            }

            function eb(t) {
                var e = t.top;
                return {
                    x: {
                        min: t.left,
                        max: t.right
                    },
                    y: {
                        min: e,
                        max: t.bottom
                    }
                }
            }

            function ew(t) {
                return void 0 === t || 1 === t
            }

            function ex(t) {
                var e = t.scale,
                    i = t.scaleX,
                    n = t.scaleY;
                return !ew(e) || !ew(i) || !ew(n)
            }

            function eC(t) {
                var e, i;
                return ex(t) || (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function ek(t, e, i, n, o) {
                return void 0 !== o && (t = n + o * (t - n)), n + i * (t - n) + e
            }

            function eP(t, e, i, n, o) {
                void 0 === e && (e = 0), void 0 === i && (i = 1), t.min = ek(t.min, e, i, n, o), t.max = ek(t.max, e, i, n, o)
            }

            function eO(t, e) {
                var i = e.x,
                    n = e.y;
                eP(t.x, i.translate, i.scale, i.originPoint), eP(t.y, n.translate, n.scale, n.originPoint)
            }

            function eS(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function eE(t, e, i) {
                var n = (0, l.CR)(i, 3),
                    o = n[0],
                    r = n[1],
                    s = n[2],
                    a = void 0 !== e[s] ? e[s] : .5,
                    u = (0, et.C)(t.min, t.max, a);
                eP(t, e[o], e[r], u, e.scale)
            }
            var eM = ["x", "scaleX", "originX"],
                ez = ["y", "scaleY", "originY"];

            function e_(t, e) {
                eE(t.x, e, eM), eE(t.y, e, ez)
            }

            function eR(t, e) {
                return eb(function(t, e) {
                    if (!e) return t;
                    var i = e({
                            x: t.left,
                            y: t.top
                        }),
                        n = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: n.y,
                        right: n.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var eA = i(81593),
                eT = new WeakMap,
                eD = function() {
                    function t(t) {
                        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ey(), this.visualElement = t
                    }
                    return t.prototype.start = function(t, e) {
                        var i = this,
                            n = (void 0 === e ? {} : e).snapToCursor,
                            o = void 0 !== n && n;
                        !1 !== this.visualElement.isPresent && (this.panSession = new t6(t, {
                            onSessionStart: function(t) {
                                i.stopAnimation(), o && i.snapToCursor(tg(t, "page").point)
                            },
                            onStart: function(t, e) {
                                var n, o = i.getProps(),
                                    r = o.drag,
                                    a = o.dragPropagation,
                                    l = o.onDragStart;
                                (!r || a || (i.openGlobalLock && i.openGlobalLock(), i.openGlobalLock = tM(r), i.openGlobalLock)) && (i.isDragging = !0, i.currentDirection = null, i.resolveConstraints(), i.visualElement.projection && (i.visualElement.projection.isAnimationBlocked = !0, i.visualElement.projection.target = void 0), eg(function(t) {
                                    var e, n, o = i.getAxisMotionValue(t).get() || 0;
                                    if ($.aQ.test(o)) {
                                        var r = null === (n = null === (e = i.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.actual[t];
                                        if (r) {
                                            var s = en(r);
                                            o = parseFloat(o) / 100 * s
                                        }
                                    }
                                    i.originPoint[t] = o
                                }), null == l || l(t, e), null === (n = i.visualElement.animationState) || void 0 === n || n.setActive(s.Drag, !0))
                            },
                            onMove: function(t, e) {
                                var n = i.getProps(),
                                    o = n.dragPropagation,
                                    r = n.dragDirectionLock,
                                    s = n.onDirectionLock,
                                    a = n.onDrag;
                                if (o || i.openGlobalLock) {
                                    var l, u, c = e.offset;
                                    if (r && null === i.currentDirection) {
                                        i.currentDirection = (void 0 === l && (l = 10), u = null, Math.abs(c.y) > l ? u = "y" : Math.abs(c.x) > l && (u = "x"), u), null !== i.currentDirection && (null == s || s(i.currentDirection));
                                        return
                                    }
                                    i.updateAxis("x", e.point, c), i.updateAxis("y", e.point, c), i.visualElement.syncRender(), null == a || a(t, e)
                                }
                            },
                            onSessionEnd: function(t, e) {
                                return i.stop(t, e)
                            }
                        }, {
                            transformPagePoint: this.visualElement.getTransformPagePoint()
                        }))
                    }, t.prototype.stop = function(t, e) {
                        var i = this.isDragging;
                        if (this.cancel(), i) {
                            var n = e.velocity;
                            this.startAnimation(n);
                            var o = this.getProps().onDragEnd;
                            null == o || o(t, e)
                        }
                    }, t.prototype.cancel = function() {
                        var t, e;
                        this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(s.Drag, !1)
                    }, t.prototype.updateAxis = function(t, e, i) {
                        var n = this.getProps().drag;
                        if (i && eL(t, n, this.currentDirection)) {
                            var o, r, s, a, l, u = this.getAxisMotionValue(t),
                                c = this.originPoint[t] + i[t];
                            this.constraints && this.constraints[t] && (o = c, r = this.constraints[t], s = this.elastic[t], a = r.min, l = r.max, void 0 !== a && o < a ? o = s ? (0, et.C)(a, o, s.min) : Math.max(o, a) : void 0 !== l && o > l && (o = s ? (0, et.C)(l, o, s.max) : Math.min(o, l)), c = o), u.set(c)
                        }
                    }, t.prototype.resolveConstraints = function() {
                        var t, e, i, n, o, r, s = this,
                            a = this.getProps(),
                            l = a.dragConstraints,
                            u = a.dragElastic,
                            c = (this.visualElement.projection || {}).layout,
                            d = this.constraints;
                        l && P(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && c ? this.constraints = (t = c.actual, e = l.top, i = l.left, n = l.bottom, o = l.right, {
                            x: ec(t.x, i, o),
                            y: ec(t.y, e, n)
                        }) : this.constraints = !1, this.elastic = (void 0 === (r = u) && (r = .35), !1 === r ? r = 0 : !0 === r && (r = .35), {
                            x: eh(r, "left", "right"),
                            y: eh(r, "top", "bottom")
                        }), d !== this.constraints && c && this.constraints && !this.hasMutatedConstraints && eg(function(t) {
                            if (s.getAxisMotionValue(t)) {
                                var e, i, n;
                                s.constraints[t] = (e = c.actual[t], i = s.constraints[t], n = {}, void 0 !== i.min && (n.min = i.min - e.min), void 0 !== i.max && (n.max = i.max - e.min), n)
                            }
                        })
                    }, t.prototype.resolveRefConstraints = function() {
                        var t = this.getProps(),
                            e = t.dragConstraints,
                            i = t.onMeasureDragConstraints;
                        if (!e || !P(e)) return !1;
                        var n = e.current;
                        (0, p.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                        var o = this.visualElement.projection;
                        if (!o || !o.layout) return !1;
                        var r = (a = o.root, l = eR(n, this.visualElement.getTransformPagePoint()), (u = a.scroll) && (eS(l.x, u.x), eS(l.y, u.y)), l),
                            s = {
                                x: ed((c = o.layout.actual).x, r.x),
                                y: ed(c.y, r.y)
                            };
                        if (i) {
                            var a, l, u, c, d, h, f, v = i((h = (d = s).x, {
                                top: (f = d.y).min,
                                right: h.max,
                                bottom: f.max,
                                left: h.min
                            }));
                            this.hasMutatedConstraints = !!v, v && (s = eb(v))
                        }
                        return s
                    }, t.prototype.startAnimation = function(t) {
                        var e = this,
                            i = this.getProps(),
                            n = i.drag,
                            o = i.dragMomentum,
                            r = i.dragElastic,
                            s = i.dragTransition,
                            a = i.dragSnapToOrigin,
                            u = i.onDragTransitionEnd,
                            c = this.constraints || {};
                        return Promise.all(eg(function(i) {
                            if (eL(i, n, e.currentDirection)) {
                                var u, d = null !== (u = null == c ? void 0 : c[i]) && void 0 !== u ? u : {};
                                a && (d = {
                                    min: 0,
                                    max: 0
                                });
                                var h = (0, l.pi)((0, l.pi)({
                                    type: "inertia",
                                    velocity: o ? t[i] : 0,
                                    bounceStiffness: r ? 200 : 1e6,
                                    bounceDamping: r ? 40 : 1e7,
                                    timeConstant: 750,
                                    restDelta: 1,
                                    restSpeed: 10
                                }, s), d);
                                return e.startAxisValueAnimation(i, h)
                            }
                        })).then(u)
                    }, t.prototype.startAxisValueAnimation = function(t, e) {
                        var i = this.getAxisMotionValue(t);
                        return (0, eA.b8)(t, i, 0, e)
                    }, t.prototype.stopAnimation = function() {
                        var t = this;
                        eg(function(e) {
                            return t.getAxisMotionValue(e).stop()
                        })
                    }, t.prototype.getAxisMotionValue = function(t) {
                        var e, i, n = "_drag" + t.toUpperCase();
                        return this.visualElement.getProps()[n] || this.visualElement.getValue(t, null !== (i = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== i ? i : 0)
                    }, t.prototype.snapToCursor = function(t) {
                        var e = this;
                        eg(function(i) {
                            if (eL(i, e.getProps().drag, e.currentDirection)) {
                                var n = e.visualElement.projection,
                                    o = e.getAxisMotionValue(i);
                                if (n && n.layout) {
                                    var r = n.layout.actual[i],
                                        s = r.min,
                                        a = r.max;
                                    o.set(t[i] - (0, et.C)(s, a, .5))
                                }
                            }
                        })
                    }, t.prototype.scalePositionWithinConstraints = function() {
                        var t, e = this,
                            i = this.getProps(),
                            n = i.drag,
                            o = i.dragConstraints,
                            r = this.visualElement.projection;
                        if (P(o) && r && this.constraints) {
                            this.stopAnimation();
                            var s = {
                                x: 0,
                                y: 0
                            };
                            eg(function(t) {
                                var i = e.getAxisMotionValue(t);
                                if (i) {
                                    var n, o, r, a, l, u = i.get();
                                    s[t] = (n = {
                                        min: u,
                                        max: u
                                    }, o = e.constraints[t], r = .5, a = en(n), (l = en(o)) > a ? r = (0, ee.Y)(o.min, o.max - a, n.min) : a > l && (r = (0, ee.Y)(n.min, n.max - l, o.min)), (0, ei.u)(0, 1, r))
                                }
                            });
                            var a = this.visualElement.getProps().transformTemplate;
                            this.visualElement.getInstance().style.transform = a ? a({}, "") : "none", null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout(), this.resolveConstraints(), eg(function(t) {
                                if (eL(t, n, null)) {
                                    var i = e.getAxisMotionValue(t),
                                        o = e.constraints[t],
                                        r = o.min,
                                        a = o.max;
                                    i.set((0, et.C)(r, a, s[t]))
                                }
                            })
                        }
                    }, t.prototype.addListeners = function() {
                        var t, e = this;
                        eT.set(this.visualElement, this);
                        var i = tk(this.visualElement.getInstance(), "pointerdown", function(t) {
                                var i = e.getProps(),
                                    n = i.drag,
                                    o = i.dragListener;
                                n && (void 0 === o || o) && e.start(t)
                            }),
                            n = function() {
                                P(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
                            },
                            o = this.visualElement.projection,
                            r = o.addEventListener("measure", n);
                        o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), n();
                        var s = tf(window, "resize", function() {
                            return e.scalePositionWithinConstraints()
                        });
                        return o.addEventListener("didUpdate", function(t) {
                                var i = t.delta,
                                    n = t.hasLayoutChanged;
                                e.isDragging && n && (eg(function(t) {
                                    var n = e.getAxisMotionValue(t);
                                    n && (e.originPoint[t] += i[t].translate, n.set(n.get() + i[t].translate))
                                }), e.visualElement.syncRender())
                            }),
                            function() {
                                s(), i(), r()
                            }
                    }, t.prototype.getProps = function() {
                        var t = this.visualElement.getProps(),
                            e = t.drag,
                            i = t.dragDirectionLock,
                            n = t.dragPropagation,
                            o = t.dragConstraints,
                            r = t.dragElastic,
                            s = t.dragMomentum;
                        return (0, l.pi)((0, l.pi)({}, t), {
                            drag: void 0 !== e && e,
                            dragDirectionLock: void 0 !== i && i,
                            dragPropagation: void 0 !== n && n,
                            dragConstraints: void 0 !== o && o,
                            dragElastic: void 0 === r ? .35 : r,
                            dragMomentum: void 0 === s || s
                        })
                    }, t
                }();

            function eL(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            var eI = {
                    pan: tF(function(t) {
                        var e = t.onPan,
                            i = t.onPanStart,
                            n = t.onPanEnd,
                            o = t.onPanSessionStart,
                            r = t.visualElement,
                            s = (0, u.useRef)(null),
                            a = (0, u.useContext)(y).transformPagePoint,
                            l = {
                                onSessionStart: o,
                                onStart: i,
                                onMove: e,
                                onEnd: function(t, e) {
                                    s.current = null, n && n(t, e)
                                }
                            };
                        (0, u.useEffect)(function() {
                            null !== s.current && s.current.updateHandlers(l)
                        }), tP(r, "pointerdown", (e || i || n || o) && function(t) {
                            s.current = new t6(t, l, {
                                transformPagePoint: a
                            })
                        }), (0, tA.z)(function() {
                            return s.current && s.current.end()
                        })
                    }),
                    drag: tF(function(t) {
                        var e = t.dragControls,
                            i = t.visualElement,
                            n = (0, E.h)(function() {
                                return new eD(i)
                            });
                        (0, u.useEffect)(function() {
                            return e && e.subscribe(n)
                        }, [n, e]), (0, u.useEffect)(function() {
                            return n.addListeners()
                        }, [n])
                    })
                },
                eV = i(33234),
                ej = i(21560),
                eB = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"],
                eF = function(t) {
                    var e = t.treeType,
                        i = void 0 === e ? "" : e,
                        n = t.build,
                        o = t.getBaseTarget,
                        r = t.makeTargetAnimatable,
                        s = t.measureViewportBox,
                        a = t.render,
                        u = t.readValueFromInstance,
                        c = t.removeValueFromRenderState,
                        d = t.sortNodePosition,
                        h = t.scrapeMotionValuesFromProps;
                    return function(t, e) {
                        var p, f, v, m, y, g = t.parent,
                            b = t.props,
                            w = t.presenceId,
                            x = t.blockInitialAnimation,
                            C = t.visualState,
                            k = t.shouldReduceMotion;
                        void 0 === e && (e = {});
                        var P = !1,
                            S = C.latestValues,
                            E = C.renderState,
                            M = (p = eB.map(function() {
                                return new ej.L
                            }), f = {}, v = {
                                clearAllListeners: function() {
                                    return p.forEach(function(t) {
                                        return t.clear()
                                    })
                                },
                                updatePropListeners: function(t) {
                                    eB.forEach(function(e) {
                                        var i, n = "on" + e,
                                            o = t[n];
                                        null === (i = f[e]) || void 0 === i || i.call(f), o && (f[e] = v[n](o))
                                    })
                                }
                            }, p.forEach(function(t, e) {
                                v["on" + eB[e]] = function(e) {
                                    return t.add(e)
                                }, v["notify" + eB[e]] = function() {
                                    for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                                    return t.notify.apply(t, (0, l.ev)([], (0, l.CR)(e), !1))
                                }
                            }), v),
                            z = new Map,
                            _ = new Map,
                            R = {},
                            A = (0, l.pi)({}, S);

                        function T() {
                            m && P && (D(), a(m, E, b.style, U.projection))
                        }

                        function D() {
                            n(U, E, S, e, b)
                        }

                        function L() {
                            M.notifyUpdate(S)
                        }

                        function I(t, e) {
                            var i = e.onChange(function(e) {
                                    S[t] = e, b.onUpdate && tJ.ZP.update(L, !1, !0)
                                }),
                                n = e.onRenderRequest(U.scheduleRender);
                            _.set(t, function() {
                                i(), n()
                            })
                        }
                        var V = h(b);
                        for (var B in V) {
                            var F = V[B];
                            void 0 !== S[B] && j(F) && F.set(S[B], !1)
                        }
                        var W = (0, O.O6)(b),
                            q = (0, O.e8)(b),
                            U = (0, l.pi)((0, l.pi)({
                                treeType: i,
                                current: null,
                                depth: g ? g.depth + 1 : 0,
                                parent: g,
                                children: new Set,
                                presenceId: w,
                                shouldReduceMotion: k,
                                variantChildren: q ? new Set : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: !!(null == g ? void 0 : g.isMounted()),
                                blockInitialAnimation: x,
                                isMounted: function() {
                                    return !!m
                                },
                                mount: function(t) {
                                    P = !0, m = U.current = t, U.projection && U.projection.mount(t), q && g && !W && (y = null == g ? void 0 : g.addVariantChild(U)), z.forEach(function(t, e) {
                                        return I(e, t)
                                    }), null == g || g.children.add(U), U.setProps(b)
                                },
                                unmount: function() {
                                    var t;
                                    null === (t = U.projection) || void 0 === t || t.unmount(), tJ.qY.update(L), tJ.qY.render(T), _.forEach(function(t) {
                                        return t()
                                    }), null == y || y(), null == g || g.children.delete(U), M.clearAllListeners(), m = void 0, P = !1
                                },
                                addVariantChild: function(t) {
                                    var e, i = U.getClosestVariantNode();
                                    if (i) return null === (e = i.variantChildren) || void 0 === e || e.add(t),
                                        function() {
                                            return i.variantChildren.delete(t)
                                        }
                                },
                                sortNodePosition: function(t) {
                                    return d && i === t.treeType ? d(U.getInstance(), t.getInstance()) : 0
                                },
                                getClosestVariantNode: function() {
                                    return q ? U : null == g ? void 0 : g.getClosestVariantNode()
                                },
                                getLayoutId: function() {
                                    return b.layoutId
                                },
                                getInstance: function() {
                                    return m
                                },
                                getStaticValue: function(t) {
                                    return S[t]
                                },
                                setStaticValue: function(t, e) {
                                    return S[t] = e
                                },
                                getLatestValues: function() {
                                    return S
                                },
                                setVisibility: function(t) {
                                    U.isVisible !== t && (U.isVisible = t, U.scheduleRender())
                                },
                                makeTargetAnimatable: function(t, e) {
                                    return void 0 === e && (e = !0), r(U, t, b, e)
                                },
                                measureViewportBox: function() {
                                    return s(m, b)
                                },
                                addValue: function(t, e) {
                                    U.hasValue(t) && U.removeValue(t), z.set(t, e), S[t] = e.get(), I(t, e)
                                },
                                removeValue: function(t) {
                                    var e;
                                    z.delete(t), null === (e = _.get(t)) || void 0 === e || e(), _.delete(t), delete S[t], c(t, E)
                                },
                                hasValue: function(t) {
                                    return z.has(t)
                                },
                                getValue: function(t, e) {
                                    var i = z.get(t);
                                    return void 0 === i && void 0 !== e && (i = (0, eV.B)(e), U.addValue(t, i)), i
                                },
                                forEachValue: function(t) {
                                    return z.forEach(t)
                                },
                                readValue: function(t) {
                                    var i;
                                    return null !== (i = S[t]) && void 0 !== i ? i : u(m, t, e)
                                },
                                setBaseTarget: function(t, e) {
                                    A[t] = e
                                },
                                getBaseTarget: function(t) {
                                    if (o) {
                                        var e = o(b, t);
                                        if (void 0 !== e && !j(e)) return e
                                    }
                                    return A[t]
                                }
                            }, M), {
                                build: function() {
                                    return D(), E
                                },
                                scheduleRender: function() {
                                    tJ.ZP.render(T, !1, !0)
                                },
                                syncRender: T,
                                setProps: function(t) {
                                    (t.transformTemplate || b.transformTemplate) && U.scheduleRender(), b = t, M.updatePropListeners(t), R = function(t, e, i) {
                                        var n;
                                        for (var o in e) {
                                            var r = e[o],
                                                s = i[o];
                                            if (j(r)) t.addValue(o, r);
                                            else if (j(s)) t.addValue(o, (0, eV.B)(r));
                                            else if (s !== r) {
                                                if (t.hasValue(o)) {
                                                    var a = t.getValue(o);
                                                    a.hasAnimated || a.set(r)
                                                } else t.addValue(o, (0, eV.B)(null !== (n = t.getStaticValue(o)) && void 0 !== n ? n : r))
                                            }
                                        }
                                        for (var o in i) void 0 === e[o] && t.removeValue(o);
                                        return e
                                    }(U, h(b), R)
                                },
                                getProps: function() {
                                    return b
                                },
                                getVariant: function(t) {
                                    var e;
                                    return null === (e = b.variants) || void 0 === e ? void 0 : e[t]
                                },
                                getDefaultTransition: function() {
                                    return b.transition
                                },
                                getTransformPagePoint: function() {
                                    return b.transformPagePoint
                                },
                                getVariantContext: function(t) {
                                    if (void 0 === t && (t = !1), t) return null == g ? void 0 : g.getVariantContext();
                                    if (!W) {
                                        var e = (null == g ? void 0 : g.getVariantContext()) || {};
                                        return void 0 !== b.initial && (e.initial = b.initial), e
                                    }
                                    for (var i = {}, n = 0; n < eq; n++) {
                                        var o = eW[n],
                                            r = b[o];
                                        ((0, O.$L)(r) || !1 === r) && (i[o] = r)
                                    }
                                    return i
                                }
                            });
                        return U
                    }
                },
                eW = (0, l.ev)(["initial"], (0, l.CR)(tG), !1),
                eq = eW.length,
                eU = i(5759);

            function eH(t) {
                return "string" == typeof t && t.startsWith("var(--")
            }
            var eZ = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function eN(t, e, i) {
                void 0 === i && (i = 1), (0, p.k)(i <= 4, 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.'));
                var n = (0, l.CR)(function(t) {
                        var e = eZ.exec(t);
                        if (!e) return [, ];
                        var i = (0, l.CR)(e, 3);
                        return [i[1], i[2]]
                    }(t), 2),
                    o = n[0],
                    r = n[1];
                if (o) {
                    var s = window.getComputedStyle(e).getPropertyValue(o);
                    return s ? s.trim() : eH(r) ? eN(r, e, i + 1) : r
                }
            }
            var eG = i(11248),
                e$ = i(56440),
                eY = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                eX = function(t) {
                    return eY.has(t)
                },
                eK = function(t, e) {
                    t.set(e, !1), t.set(e)
                },
                eJ = function(t) {
                    return t === eG.Rx || t === $.px
                };
            (r = a || (a = {})).width = "width", r.height = "height", r.left = "left", r.right = "right", r.top = "top", r.bottom = "bottom";
            var eQ = function(t, e) {
                    return parseFloat(t.split(", ")[e])
                },
                e0 = function(t, e) {
                    return function(i, n) {
                        var o = n.transform;
                        if ("none" === o || !o) return 0;
                        var r = o.match(/^matrix3d\((.+)\)$/);
                        if (r) return eQ(r[1], e);
                        var s = o.match(/^matrix\((.+)\)$/);
                        return s ? eQ(s[1], t) : 0
                    }
                },
                e1 = new Set(["x", "y", "z"]),
                e2 = I.Gl.filter(function(t) {
                    return !e1.has(t)
                }),
                e5 = {
                    width: function(t, e) {
                        var i = t.x,
                            n = e.paddingLeft,
                            o = e.paddingRight;
                        return i.max - i.min - parseFloat(void 0 === n ? "0" : n) - parseFloat(void 0 === o ? "0" : o)
                    },
                    height: function(t, e) {
                        var i = t.y,
                            n = e.paddingTop,
                            o = e.paddingBottom;
                        return i.max - i.min - parseFloat(void 0 === n ? "0" : n) - parseFloat(void 0 === o ? "0" : o)
                    },
                    top: function(t, e) {
                        return parseFloat(e.top)
                    },
                    left: function(t, e) {
                        return parseFloat(e.left)
                    },
                    bottom: function(t, e) {
                        var i = t.y;
                        return parseFloat(e.top) + (i.max - i.min)
                    },
                    right: function(t, e) {
                        var i = t.x;
                        return parseFloat(e.left) + (i.max - i.min)
                    },
                    x: e0(4, 13),
                    y: e0(5, 14)
                },
                e3 = function(t, e, i) {
                    var n = e.measureViewportBox(),
                        o = getComputedStyle(e.getInstance()),
                        r = o.display,
                        s = {};
                    "none" === r && e.setStaticValue("display", t.display || "block"), i.forEach(function(t) {
                        s[t] = e5[t](n, o)
                    }), e.syncRender();
                    var a = e.measureViewportBox();
                    return i.forEach(function(i) {
                        eK(e.getValue(i), s[i]), t[i] = e5[i](a, o)
                    }), t
                },
                e6 = function(t, e, i, n) {
                    void 0 === i && (i = {}), void 0 === n && (n = {}), e = (0, l.pi)({}, e), n = (0, l.pi)({}, n);
                    var o = Object.keys(e).filter(eX),
                        r = [],
                        s = !1,
                        a = [];
                    if (o.forEach(function(o) {
                            var l, u = t.getValue(o);
                            if (t.hasValue(o)) {
                                var c = i[o],
                                    d = (0, e$.C)(c),
                                    h = e[o];
                                if ((0, tH.C)(h)) {
                                    var f = h.length,
                                        v = null === h[0] ? 1 : 0;
                                    c = h[v], d = (0, e$.C)(c);
                                    for (var m = v; m < f; m++) l ? (0, p.k)((0, e$.C)(h[m]) === l, "All keyframes must be of the same type") : (l = (0, e$.C)(h[m]), (0, p.k)(l === d || eJ(d) && eJ(l), "Keyframes must be of the same dimension as the current value"))
                                } else l = (0, e$.C)(h);
                                if (d !== l) {
                                    if (eJ(d) && eJ(l)) {
                                        var y, g = u.get();
                                        "string" == typeof g && u.set(parseFloat(g)), "string" == typeof h ? e[o] = parseFloat(h) : Array.isArray(h) && l === $.px && (e[o] = h.map(parseFloat))
                                    } else(null == d ? void 0 : d.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === h) ? 0 === c ? u.set(l.transform(c)) : e[o] = d.transform(h) : (s || (y = [], e2.forEach(function(e) {
                                        var i = t.getValue(e);
                                        void 0 !== i && (y.push([e, i.get()]), i.set(e.startsWith("scale") ? 1 : 0))
                                    }), y.length && t.syncRender(), r = y, s = !0), a.push(o), n[o] = void 0 !== n[o] ? n[o] : e[o], eK(u, h))
                                }
                            }
                        }), !a.length) return {
                        target: e,
                        transitionEnd: n
                    };
                    var u = a.indexOf("height") >= 0 ? window.pageYOffset : null,
                        c = e3(e, t, a);
                    return r.length && r.forEach(function(e) {
                        var i = (0, l.CR)(e, 2),
                            n = i[0],
                            o = i[1];
                        t.getValue(n).set(o)
                    }), t.syncRender(), null !== u && window.scrollTo({
                        top: u
                    }), {
                        target: c,
                        transitionEnd: n
                    }
                },
                e4 = function(t, e, i, n) {
                    var o, r, s = function(t, e, i) {
                        var n, o = (0, l._T)(e, []),
                            r = t.getInstance();
                        if (!(r instanceof Element)) return {
                            target: o,
                            transitionEnd: i
                        };
                        for (var s in i && (i = (0, l.pi)({}, i)), t.forEachValue(function(t) {
                                var e = t.get();
                                if (eH(e)) {
                                    var i = eN(e, r);
                                    i && t.set(i)
                                }
                            }), o) {
                            var a = o[s];
                            if (eH(a)) {
                                var u = eN(a, r);
                                u && (o[s] = u, i && (null !== (n = i[s]) && void 0 !== n || (i[s] = a)))
                            }
                        }
                        return {
                            target: o,
                            transitionEnd: i
                        }
                    }(t, e, n);
                    return o = e = s.target, r = n = s.transitionEnd, Object.keys(o).some(eX) ? e6(t, o, i, r) : {
                        target: o,
                        transitionEnd: r
                    }
                },
                e7 = i(2728),
                e8 = {
                    treeType: "dom",
                    readValueFromInstance: function(t, e) {
                        if ((0, I._c)(e)) {
                            var i = (0, e7.A)(e);
                            return i && i.default || 0
                        }
                        var n = window.getComputedStyle(t);
                        return (F(e) ? n.getPropertyValue(e) : n[e]) || 0
                    },
                    sortNodePosition: function(t, e) {
                        return 2 & t.compareDocumentPosition(e) ? 1 : -1
                    },
                    getBaseTarget: function(t, e) {
                        var i;
                        return null === (i = t.style) || void 0 === i ? void 0 : i[e]
                    },
                    measureViewportBox: function(t, e) {
                        return eR(t, e.transformPagePoint)
                    },
                    resetTransform: function(t, e, i) {
                        var n = i.transformTemplate;
                        e.style.transform = n ? n({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform: function(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState: function(t, e) {
                        var i = e.vars,
                            n = e.style;
                        delete i[t], delete n[t]
                    },
                    makeTargetAnimatable: function(t, e, i, n) {
                        var o = i.transformValues;
                        void 0 === n && (n = !0);
                        var r = e.transition,
                            s = e.transitionEnd,
                            a = (0, l._T)(e, ["transition", "transitionEnd"]),
                            u = (0, eU.P$)(a, r || {}, t);
                        if (o && (s && (s = o(s)), a && (a = o(a)), u && (u = o(u))), n) {
                            (0, eU.GJ)(t, a, u);
                            var c = e4(t, a, u, s);
                            s = c.transitionEnd, a = c.target
                        }
                        return (0, l.pi)({
                            transition: r,
                            transitionEnd: s
                        }, a)
                    },
                    scrapeMotionValuesFromProps: tr,
                    build: function(t, e, i, n, o) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), q(e, i, n, o.transformTemplate)
                    },
                    render: ti
                },
                e9 = eF(e8),
                it = eF((0, l.pi)((0, l.pi)({}, e8), {
                    getBaseTarget: function(t, e) {
                        return t[e]
                    },
                    readValueFromInstance: function(t, e) {
                        var i;
                        return (0, I._c)(e) ? (null === (i = (0, e7.A)(e)) || void 0 === i ? void 0 : i.default) || 0 : (e = tn.has(e) ? e : te(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: ts,
                    build: function(t, e, i, n, o) {
                        J(e, i, n, o.transformTemplate)
                    },
                    render: to
                })),
                ie = function(t, e) {
                    return D(t) ? it(e, {
                        enableHardwareAcceleration: !1
                    }) : e9(e, {
                        enableHardwareAcceleration: !0
                    })
                };

            function ii(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            var io = {
                    correct: function(t, e) {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!$.px.test(t)) return t;
                            t = parseFloat(t)
                        }
                        var i = ii(t, e.target.x),
                            n = ii(t, e.target.y);
                        return "".concat(i, "% ").concat(n, "%")
                    }
                },
                ir = i(28407),
                is = "_$css",
                ia = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return (0, l.ZT)(e, t), e.prototype.componentDidMount = function() {
                        var t = this,
                            e = this.props,
                            i = e.visualElement,
                            n = e.layoutGroup,
                            o = e.switchLayoutGroup,
                            r = e.layoutId,
                            s = i.projection;
                        Object.assign(L, il), s && ((null == n ? void 0 : n.group) && n.group.add(s), (null == o ? void 0 : o.register) && r && o.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", function() {
                            t.safeToRemove()
                        }), s.setOptions((0, l.pi)((0, l.pi)({}, s.options), {
                            onExitComplete: function() {
                                return t.safeToRemove()
                            }
                        }))), M.hasEverUpdated = !0
                    }, e.prototype.getSnapshotBeforeUpdate = function(t) {
                        var e = this,
                            i = this.props,
                            n = i.layoutDependency,
                            o = i.visualElement,
                            r = i.drag,
                            s = i.isPresent,
                            a = o.projection;
                        return a && (a.isPresent = s, r || t.layoutDependency !== n || void 0 === n ? a.willUpdate() : this.safeToRemove(), t.isPresent === s || (s ? a.promote() : a.relegate() || tJ.ZP.postRender(function() {
                            var t;
                            (null === (t = a.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
                        }))), null
                    }, e.prototype.componentDidUpdate = function() {
                        var t = this.props.visualElement.projection;
                        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                    }, e.prototype.componentWillUnmount = function() {
                        var t = this.props,
                            e = t.visualElement,
                            i = t.layoutGroup,
                            n = t.switchLayoutGroup,
                            o = e.projection;
                        o && (o.scheduleCheckAfterUnmount(), (null == i ? void 0 : i.group) && i.group.remove(o), (null == n ? void 0 : n.deregister) && n.deregister(o))
                    }, e.prototype.safeToRemove = function() {
                        var t = this.props.safeToRemove;
                        null == t || t()
                    }, e.prototype.render = function() {
                        return null
                    }, e
                }(u.Component),
                il = {
                    borderRadius: (0, l.pi)((0, l.pi)({}, io), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: io,
                    borderTopRightRadius: io,
                    borderBottomLeftRadius: io,
                    borderBottomRightRadius: io,
                    boxShadow: {
                        correct: function(t, e) {
                            var i = e.treeScale,
                                n = e.projectionDelta,
                                o = t,
                                r = t.includes("var("),
                                s = [];
                            r && (t = t.replace(eZ, function(t) {
                                return s.push(t), is
                            }));
                            var a = ir.P.parse(t);
                            if (a.length > 5) return o;
                            var l = ir.P.createTransformer(t),
                                u = "number" != typeof a[0] ? 1 : 0,
                                c = n.x.scale * i.x,
                                d = n.y.scale * i.y;
                            a[0 + u] /= c, a[1 + u] /= d;
                            var h = (0, et.C)(c, d, .5);
                            "number" == typeof a[2 + u] && (a[2 + u] /= h), "number" == typeof a[3 + u] && (a[3 + u] /= h);
                            var p = l(a);
                            if (r) {
                                var f = 0;
                                p = p.replace(is, function() {
                                    var t = s[f];
                                    return f++, t
                                })
                            }
                            return p
                        }
                    }
                },
                iu = i(84710),
                ic = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                id = ic.length,
                ih = function(t) {
                    return "string" == typeof t ? parseFloat(t) : t
                },
                ip = function(t) {
                    return "number" == typeof t || $.px.test(t)
                };

            function iv(t, e) {
                var i;
                return null !== (i = t[e]) && void 0 !== i ? i : t.borderRadius
            }
            var im = ig(0, .5, iu.Bn),
                iy = ig(.5, .95, iu.GE);

            function ig(t, e, i) {
                return function(n) {
                    return n < t ? 0 : n > e ? 1 : i((0, ee.Y)(t, e, n))
                }
            }

            function ib(t, e) {
                t.min = e.min, t.max = e.max
            }

            function iw(t, e) {
                ib(t.x, e.x), ib(t.y, e.y)
            }

            function ix(t, e, i, n, o) {
                return t -= e, t = n + 1 / i * (t - n), void 0 !== o && (t = n + 1 / o * (t - n)), t
            }

            function iC(t, e, i, n, o) {
                var r = (0, l.CR)(i, 3),
                    s = r[0],
                    a = r[1],
                    u = r[2];
                ! function(t, e, i, n, o, r, s) {
                    if (void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === n && (n = .5), void 0 === r && (r = t), void 0 === s && (s = t), $.aQ.test(e) && (e = parseFloat(e), e = (0, et.C)(s.min, s.max, e / 100) - s.min), "number" == typeof e) {
                        var a = (0, et.C)(r.min, r.max, n);
                        t === r && (a -= e), t.min = ix(t.min, e, i, a, o), t.max = ix(t.max, e, i, a, o)
                    }
                }(t, e[s], e[a], e[u], e.scale, n, o)
            }
            var ik = ["x", "scaleX", "originX"],
                iP = ["y", "scaleY", "originY"];

            function iO(t, e, i, n) {
                iC(t.x, e, ik, null == i ? void 0 : i.x, null == n ? void 0 : n.x), iC(t.y, e, iP, null == i ? void 0 : i.y, null == n ? void 0 : n.y)
            }

            function iS(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function iE(t) {
                return iS(t.x) && iS(t.y)
            }

            function iM(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }
            var iz = i(10010),
                i_ = function() {
                    function t() {
                        this.members = []
                    }
                    return t.prototype.add = function(t) {
                        (0, iz.y4)(this.members, t), t.scheduleRender()
                    }, t.prototype.remove = function(t) {
                        if ((0, iz.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                            var e = this.members[this.members.length - 1];
                            e && this.promote(e)
                        }
                    }, t.prototype.relegate = function(t) {
                        var e, i = this.members.findIndex(function(e) {
                            return t === e
                        });
                        if (0 === i) return !1;
                        for (var n = i; n >= 0; n--) {
                            var o = this.members[n];
                            if (!1 !== o.isPresent) {
                                e = o;
                                break
                            }
                        }
                        return !!e && (this.promote(e), !0)
                    }, t.prototype.promote = function(t, e) {
                        var i, n = this.lead;
                        t !== n && (this.prevLead = n, this.lead = t, t.show(), n && (n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, e && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues, t.snapshot.isShared = !0), (null === (i = t.root) || void 0 === i ? void 0 : i.isUpdating) && (t.isLayoutDirty = !0), !1 === t.options.crossfade && n.hide()))
                    }, t.prototype.exitAnimationComplete = function() {
                        this.members.forEach(function(t) {
                            var e, i, n, o, r;
                            null === (i = (e = t.options).onExitComplete) || void 0 === i || i.call(e), null === (r = null === (n = t.resumingFrom) || void 0 === n ? void 0 : (o = n.options).onExitComplete) || void 0 === r || r.call(o)
                        })
                    }, t.prototype.scheduleRender = function() {
                        this.members.forEach(function(t) {
                            t.instance && t.scheduleRender(!1)
                        })
                    }, t.prototype.removeLeadSnapshot = function() {
                        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                    }, t
                }();

            function iR(t, e, i) {
                var n = t.x.translate / e.x,
                    o = t.y.translate / e.y,
                    r = "translate3d(".concat(n, "px, ").concat(o, "px, 0) ");
                if (r += "scale(".concat(1 / e.x, ", ").concat(1 / e.y, ") "), i) {
                    var s = i.rotate,
                        a = i.rotateX,
                        l = i.rotateY;
                    s && (r += "rotate(".concat(s, "deg) ")), a && (r += "rotateX(".concat(a, "deg) ")), l && (r += "rotateY(".concat(l, "deg) "))
                }
                var u = t.x.scale * e.x,
                    c = t.y.scale * e.y;
                return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === (r += "scale(".concat(u, ", ").concat(c, ")")) ? "none" : r
            }
            var iA = function(t, e) {
                    return t.depth - e.depth
                },
                iT = function() {
                    function t() {
                        this.children = [], this.isDirty = !1
                    }
                    return t.prototype.add = function(t) {
                        (0, iz.y4)(this.children, t), this.isDirty = !0
                    }, t.prototype.remove = function(t) {
                        (0, iz.cl)(this.children, t), this.isDirty = !0
                    }, t.prototype.forEach = function(t) {
                        this.isDirty && this.children.sort(iA), this.isDirty = !1, this.children.forEach(t)
                    }, t
                }();

            function iD(t) {
                var e = t.attachResizeListener,
                    i = t.defaultParent,
                    n = t.measureScroll,
                    o = t.checkIsScrollRoot,
                    r = t.resetTransform;
                return function() {
                    function t(t, e, n) {
                        var o = this;
                        void 0 === e && (e = {}), void 0 === n && (n = null == i ? void 0 : i()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
                            o.isUpdating && (o.isUpdating = !1, o.clearAllSnapshots())
                        }, this.updateProjection = function() {
                            o.nodes.forEach(iW), o.nodes.forEach(iq)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? (0, l.ev)((0, l.ev)([], (0, l.CR)(n.path), !1), [n], !1) : [], this.parent = n, this.depth = n ? n.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (var r = 0; r < this.path.length; r++) this.path[r].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new iT)
                    }
                    return t.prototype.addEventListener = function(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new ej.L), this.eventHandlers.get(t).add(e)
                    }, t.prototype.notifyListeners = function(t) {
                        for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                        var n = this.eventHandlers.get(t);
                        null == n || n.notify.apply(n, (0, l.ev)([], (0, l.CR)(e), !1))
                    }, t.prototype.hasListeners = function(t) {
                        return this.eventHandlers.has(t)
                    }, t.prototype.registerPotentialNode = function(t, e) {
                        this.potentialNodes.set(t, e)
                    }, t.prototype.mount = function(t, i) {
                        var n = this;
                        if (void 0 === i && (i = !1), !this.instance) {
                            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                            var o = this.options,
                                r = o.layoutId,
                                s = o.layout,
                                a = o.visualElement;
                            if (a && !a.getInstance() && a.mount(t), this.root.nodes.add(this), null === (u = this.parent) || void 0 === u || u.children.add(this), this.id && this.root.potentialNodes.delete(this.id), i && (s || r) && (this.isLayoutDirty = !0), e) {
                                var u, c, d = function() {
                                    return n.root.updateBlockedByResize = !1
                                };
                                e(t, function() {
                                    n.root.updateBlockedByResize = !0, clearTimeout(c), c = window.setTimeout(d, 250), M.hasAnimatedSinceResize && (M.hasAnimatedSinceResize = !1, n.nodes.forEach(iF))
                                })
                            }
                            r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && a && (r || s) && this.addEventListener("didUpdate", function(t) {
                                var e, i, o, r, s, u = t.delta,
                                    c = t.hasLayoutChanged,
                                    d = t.hasRelativeTargetChanged,
                                    h = t.layout;
                                if (n.isTreeAnimationBlocked()) {
                                    n.target = void 0, n.relativeTarget = void 0;
                                    return
                                }
                                var p = null !== (i = null !== (e = n.options.transition) && void 0 !== e ? e : a.getDefaultTransition()) && void 0 !== i ? i : i$,
                                    f = a.getProps(),
                                    v = f.onLayoutAnimationStart,
                                    m = f.onLayoutAnimationComplete,
                                    y = !n.targetLayout || !iM(n.targetLayout, h) || d,
                                    g = !c && d;
                                if ((null === (o = n.resumeFrom) || void 0 === o ? void 0 : o.instance) || g || c && (y || !n.currentAnimation)) {
                                    n.resumeFrom && (n.resumingFrom = n.resumeFrom, n.resumingFrom.resumingFrom = void 0), n.setAnimationOrigin(u, g);
                                    var b = (0, l.pi)((0, l.pi)({}, (0, eA.ev)(p, "layout")), {
                                        onPlay: v,
                                        onComplete: m
                                    });
                                    a.shouldReduceMotion && (b.delay = 0, b.type = !1), n.startAnimation(b)
                                } else c || 0 !== n.animationProgress || n.finishAnimation(), n.isLead() && (null === (s = (r = n.options).onExitComplete) || void 0 === s || s.call(r));
                                n.targetLayout = h
                            })
                        }
                    }, t.prototype.unmount = function() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, tJ.qY.preRender(this.updateProjection)
                    }, t.prototype.blockUpdate = function() {
                        this.updateManuallyBlocked = !0
                    }, t.prototype.unblockUpdate = function() {
                        this.updateManuallyBlocked = !1
                    }, t.prototype.isUpdateBlocked = function() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }, t.prototype.isTreeAnimationBlocked = function() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }, t.prototype.startUpdate = function() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(iU))
                    }, t.prototype.willUpdate = function(t) {
                        if (void 0 === t && (t = !0), this.root.isUpdateBlocked()) {
                            null === (i = (e = this.options).onExitComplete) || void 0 === i || i.call(e);
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), !this.isLayoutDirty) {
                            this.isLayoutDirty = !0;
                            for (var e, i, n, o = 0; o < this.path.length; o++) {
                                var r = this.path[o];
                                r.shouldResetTransform = !0, r.updateScroll()
                            }
                            var s = this.options,
                                a = s.layoutId,
                                l = s.layout;
                            if (void 0 !== a || l) {
                                var u = null === (n = this.options.visualElement) || void 0 === n ? void 0 : n.getProps().transformTemplate;
                                this.prevTransformTemplateValue = null == u ? void 0 : u(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                            }
                        }
                    }, t.prototype.didUpdate = function() {
                        if (this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ij);
                            return
                        }
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(iY), this.potentialNodes.clear()), this.nodes.forEach(iB), this.nodes.forEach(iL), this.nodes.forEach(iI), this.clearAllSnapshots(), tJ.iW.update(), tJ.iW.preRender(), tJ.iW.render())
                    }, t.prototype.clearAllSnapshots = function() {
                        this.nodes.forEach(iV), this.sharedNodes.forEach(iH)
                    }, t.prototype.scheduleUpdateProjection = function() {
                        tJ.ZP.preRender(this.updateProjection, !1, !0)
                    }, t.prototype.scheduleCheckAfterUnmount = function() {
                        var t = this;
                        tJ.ZP.postRender(function() {
                            t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                        })
                    }, t.prototype.updateSnapshot = function() {
                        if (!this.snapshot && this.instance) {
                            var t = this.measure(),
                                e = this.removeTransform(this.removeElementScroll(t));
                            iK(e), this.snapshot = {
                                measured: t,
                                layout: e,
                                latestValues: {}
                            }
                        }
                    }, t.prototype.updateLayout = function() {
                        if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (var t, e = 0; e < this.path.length; e++) this.path[e].updateScroll();
                            var i = this.measure();
                            iK(i);
                            var n = this.layout;
                            this.layout = {
                                measured: i,
                                actual: this.removeElementScroll(i)
                            }, this.layoutCorrected = ey(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null == n ? void 0 : n.actual)
                        }
                    }, t.prototype.updateScroll = function() {
                        this.options.layoutScroll && this.instance && (this.isScrollRoot = o(this.instance), this.scroll = n(this.instance))
                    }, t.prototype.resetTransform = function() {
                        if (r) {
                            var t, e = this.isLayoutDirty || this.shouldResetTransform,
                                i = this.projectionDelta && !iE(this.projectionDelta),
                                n = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                                o = null == n ? void 0 : n(this.latestValues, ""),
                                s = o !== this.prevTransformTemplateValue;
                            e && (i || eC(this.latestValues) || s) && (r(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                    }, t.prototype.measure = function() {
                        var t = this.options.visualElement;
                        if (!t) return ey();
                        var e = t.measureViewportBox(),
                            i = this.root.scroll;
                        return i && (eS(e.x, i.x), eS(e.y, i.y)), e
                    }, t.prototype.removeElementScroll = function(t) {
                        var e = ey();
                        iw(e, t);
                        for (var i = 0; i < this.path.length; i++) {
                            var n = this.path[i],
                                o = n.scroll,
                                r = n.options,
                                s = n.isScrollRoot;
                            if (n !== this.root && o && r.layoutScroll) {
                                if (s) {
                                    iw(e, t);
                                    var a = this.root.scroll;
                                    a && (eS(e.x, -a.x), eS(e.y, -a.y))
                                }
                                eS(e.x, o.x), eS(e.y, o.y)
                            }
                        }
                        return e
                    }, t.prototype.applyTransform = function(t, e) {
                        void 0 === e && (e = !1);
                        var i = ey();
                        iw(i, t);
                        for (var n = 0; n < this.path.length; n++) {
                            var o = this.path[n];
                            !e && o.options.layoutScroll && o.scroll && o !== o.root && e_(i, {
                                x: -o.scroll.x,
                                y: -o.scroll.y
                            }), eC(o.latestValues) && e_(i, o.latestValues)
                        }
                        return eC(this.latestValues) && e_(i, this.latestValues), i
                    }, t.prototype.removeTransform = function(t) {
                        var e, i = ey();
                        iw(i, t);
                        for (var n = 0; n < this.path.length; n++) {
                            var o = this.path[n];
                            if (o.instance && eC(o.latestValues)) {
                                ex(o.latestValues) && o.updateSnapshot();
                                var r = ey();
                                iw(r, o.measure()), iO(i, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, r)
                            }
                        }
                        return eC(this.latestValues) && iO(i, this.latestValues), i
                    }, t.prototype.setTargetDelta = function(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }, t.prototype.setOptions = function(t) {
                        var e;
                        this.options = (0, l.pi)((0, l.pi)((0, l.pi)({}, this.options), t), {
                            crossfade: null === (e = t.crossfade) || void 0 === e || e
                        })
                    }, t.prototype.clearMeasurements = function() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }, t.prototype.resolveTargetDelta = function() {
                        var t, e, i, n, o = this.options,
                            r = o.layout,
                            s = o.layoutId;
                        this.layout && (r || s) && (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = ey(), this.relativeTargetOrigin = ey(), eu(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), iw(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && ((this.target || (this.target = ey(), this.targetWithTransforms = ey()), this.relativeTarget && this.relativeTargetOrigin && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.target)) ? (t = this.target, e = this.relativeTarget, i = this.relativeParent.target, ea(t.x, e.x, i.x), ea(t.y, e.y, i.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.actual) : iw(this.target, this.layout.actual), eO(this.target, this.targetDelta)) : iw(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && !!this.relativeParent.resumingFrom == !!this.resumingFrom && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = ey(), this.relativeTargetOrigin = ey(), eu(this.relativeTargetOrigin, this.target, this.relativeParent.target), iw(this.relativeTarget, this.relativeTargetOrigin)))))
                    }, t.prototype.getClosestProjectingParent = function() {
                        if (!(!this.parent || eC(this.parent.latestValues))) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }, t.prototype.calcProjection = function() {
                        var t, e = this.options,
                            i = e.layout,
                            n = e.layoutId;
                        if (this.isTreeAnimating = !!((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (i || n)) {
                            var o = this.getLead();
                            iw(this.layoutCorrected, this.layout.actual),
                                function(t, e, i, n) {
                                    void 0 === n && (n = !1);
                                    var o, r, s, a, l = i.length;
                                    if (l) {
                                        e.x = e.y = 1;
                                        for (var u = 0; u < l; u++) a = (s = i[u]).projectionDelta, (null === (r = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === r ? void 0 : r.display) !== "contents" && (n && s.options.layoutScroll && s.scroll && s !== s.root && e_(t, {
                                            x: -s.scroll.x,
                                            y: -s.scroll.y
                                        }), a && (e.x *= a.x.scale, e.y *= a.y.scale, eO(t, a)), n && eC(s.latestValues) && e_(t, s.latestValues))
                                    }
                                }(this.layoutCorrected, this.treeScale, this.path, !!this.resumingFrom || this !== o);
                            var r = o.target;
                            if (r) {
                                this.projectionDelta || (this.projectionDelta = ev(), this.projectionDeltaWithTransform = ev());
                                var s = this.treeScale.x,
                                    a = this.treeScale.y,
                                    l = this.projectionTransform;
                                es(this.projectionDelta, this.layoutCorrected, r, this.latestValues), this.projectionTransform = iR(this.projectionDelta, this.treeScale), (this.projectionTransform !== l || this.treeScale.x !== s || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", r))
                            }
                        }
                    }, t.prototype.hide = function() {
                        this.isVisible = !1
                    }, t.prototype.show = function() {
                        this.isVisible = !0
                    }, t.prototype.scheduleRender = function(t) {
                        var e, i, n;
                        void 0 === t && (t = !0), null === (i = (e = this.options).scheduleRender) || void 0 === i || i.call(e), t && (null === (n = this.getStack()) || void 0 === n || n.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }, t.prototype.setAnimationOrigin = function(t, e) {
                        var i, n = this;
                        void 0 === e && (e = !1);
                        var o = this.snapshot,
                            r = (null == o ? void 0 : o.latestValues) || {},
                            s = (0, l.pi)({}, this.latestValues),
                            a = ev();
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        var u = ey(),
                            c = null == o ? void 0 : o.isShared,
                            d = 1 >= ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0),
                            h = !!(c && !d && !0 === this.options.crossfade && !this.path.some(iG));
                        this.animationProgress = 0, this.mixTargetDelta = function(e) {
                            var i, o, l, p = e / 1e3;
                            iZ(a.x, t.x, p), iZ(a.y, t.y, p), n.setTargetDelta(a), n.relativeTarget && n.relativeTargetOrigin && n.layout && (null === (l = n.relativeParent) || void 0 === l ? void 0 : l.layout) && (eu(u, n.layout.actual, n.relativeParent.layout.actual), i = n.relativeTarget, o = n.relativeTargetOrigin, iN(i.x, o.x, u.x, p), iN(i.y, o.y, u.y, p)), c && (n.animationValues = s, function(t, e, i, n, o, r) {
                                var s, a, l, u;
                                o ? (t.opacity = (0, et.C)(0, null !== (s = i.opacity) && void 0 !== s ? s : 1, im(n)), t.opacityExit = (0, et.C)(null !== (a = e.opacity) && void 0 !== a ? a : 1, 0, iy(n))) : r && (t.opacity = (0, et.C)(null !== (l = e.opacity) && void 0 !== l ? l : 1, null !== (u = i.opacity) && void 0 !== u ? u : 1, n));
                                for (var c = 0; c < id; c++) {
                                    var d = "border".concat(ic[c], "Radius"),
                                        h = iv(e, d),
                                        p = iv(i, d);
                                    (void 0 !== h || void 0 !== p) && (h || (h = 0), p || (p = 0), 0 === h || 0 === p || ip(h) === ip(p) ? (t[d] = Math.max((0, et.C)(ih(h), ih(p), n), 0), ($.aQ.test(p) || $.aQ.test(h)) && (t[d] += "%")) : t[d] = p)
                                }(e.rotate || i.rotate) && (t.rotate = (0, et.C)(e.rotate || 0, i.rotate || 0, n))
                            }(s, r, n.latestValues, p, h, d)), n.root.scheduleUpdateProjection(), n.scheduleRender(), n.animationProgress = p
                        }, this.mixTargetDelta(0)
                    }, t.prototype.startAnimation = function(t) {
                        var e, i, n = this;
                        this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (i = this.resumingFrom.currentAnimation) || void 0 === i || i.stop()), this.pendingAnimation && (tJ.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = tJ.ZP.update(function() {
                            var e, i;
                            M.hasAnimatedSinceResize = !0, n.currentAnimation = (void 0 === (e = (0, l.pi)((0, l.pi)({}, t), {
                                onUpdate: function(e) {
                                    var i;
                                    n.mixTargetDelta(e), null === (i = t.onUpdate) || void 0 === i || i.call(t, e)
                                },
                                onComplete: function() {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), n.completeAnimation()
                                }
                            })) && (e = {}), i = j(0) ? 0 : (0, eV.B)(0), (0, eA.b8)("", i, 1e3, e), {
                                stop: function() {
                                    return i.stop()
                                },
                                isAnimating: function() {
                                    return i.isAnimating()
                                }
                            }), n.resumingFrom && (n.resumingFrom.currentAnimation = n.currentAnimation), n.pendingAnimation = void 0
                        })
                    }, t.prototype.completeAnimation = function() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }, t.prototype.finishAnimation = function() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }, t.prototype.applyTransformsToTarget = function() {
                        var t = this.getLead(),
                            e = t.targetWithTransforms,
                            i = t.target,
                            n = t.layout,
                            o = t.latestValues;
                        e && i && n && (iw(e, i), e_(e, o), es(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
                    }, t.prototype.registerSharedNode = function(t, e) {
                        var i, n, o;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new i_), this.sharedNodes.get(t).add(e), e.promote({
                            transition: null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.transition,
                            preserveFollowOpacity: null === (o = null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(n, e)
                        })
                    }, t.prototype.isLead = function() {
                        var t = this.getStack();
                        return !t || t.lead === this
                    }, t.prototype.getLead = function() {
                        var t;
                        return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }, t.prototype.getPrevLead = function() {
                        var t;
                        return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }, t.prototype.getStack = function() {
                        var t = this.options.layoutId;
                        if (t) return this.root.sharedNodes.get(t)
                    }, t.prototype.promote = function(t) {
                        var e = void 0 === t ? {} : t,
                            i = e.needsReset,
                            n = e.transition,
                            o = e.preserveFollowOpacity,
                            r = this.getStack();
                        r && r.promote(this, o), i && (this.projectionDelta = void 0, this.needsReset = !0), n && this.setOptions({
                            transition: n
                        })
                    }, t.prototype.relegate = function() {
                        var t = this.getStack();
                        return !!t && t.relegate(this)
                    }, t.prototype.resetRotation = function() {
                        var t = this.options.visualElement;
                        if (t) {
                            for (var e = !1, i = {}, n = 0; n < I.r$.length; n++) {
                                var o = "rotate" + I.r$[n];
                                t.getStaticValue(o) && (e = !0, i[o] = t.getStaticValue(o), t.setStaticValue(o, 0))
                            }
                            if (e) {
                                for (var o in null == t || t.syncRender(), i) t.setStaticValue(o, i[o]);
                                t.scheduleRender()
                            }
                        }
                    }, t.prototype.getProjectionStyles = function(t) {
                        void 0 === t && (t = {});
                        var e, i, n, o, r, s, a = {};
                        if (!this.instance || this.isSVG) return a;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        a.visibility = "";
                        var l = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, a.opacity = "", a.pointerEvents = tu(t.pointerEvents) || "", a.transform = l ? l(this.latestValues, "") : "none", a;
                        var u = this.getLead();
                        if (!this.projectionDelta || !this.layout || !u.target) {
                            var c = {};
                            return this.options.layoutId && (c.opacity = null !== (i = this.latestValues.opacity) && void 0 !== i ? i : 1, c.pointerEvents = tu(t.pointerEvents) || ""), this.hasProjected && !eC(this.latestValues) && (c.transform = l ? l({}, "") : "none", this.hasProjected = !1), c
                        }
                        var d = u.animationValues || u.latestValues;
                        this.applyTransformsToTarget(), a.transform = iR(this.projectionDeltaWithTransform, this.treeScale, d), l && (a.transform = l(d, a.transform));
                        var h = this.projectionDelta,
                            p = h.x,
                            f = h.y;
                        for (var v in a.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * f.origin, "% 0"), u.animationValues ? a.opacity = u === this ? null !== (o = null !== (n = d.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : a.opacity = u === this ? null !== (r = d.opacity) && void 0 !== r ? r : "" : null !== (s = d.opacityExit) && void 0 !== s ? s : 0, L)
                            if (void 0 !== d[v]) {
                                var m = L[v],
                                    y = m.correct,
                                    g = m.applyTo,
                                    b = y(d[v], u);
                                if (g)
                                    for (var w = g.length, x = 0; x < w; x++) a[g[x]] = b;
                                else a[v] = b
                            }
                        return this.options.layoutId && (a.pointerEvents = u === this ? tu(t.pointerEvents) || "" : "none"), a
                    }, t.prototype.clearSnapshot = function() {
                        this.resumeFrom = this.snapshot = void 0
                    }, t.prototype.resetTree = function() {
                        this.root.nodes.forEach(function(t) {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        }), this.root.nodes.forEach(ij), this.root.sharedNodes.clear()
                    }, t
                }()
            }

            function iL(t) {
                t.updateLayout()
            }

            function iI(t) {
                var e, i, n, o, r = null !== (i = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== i ? i : t.snapshot;
                if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
                    var s = t.layout,
                        a = s.actual,
                        l = s.measured;
                    "size" === t.options.animationType ? eg(function(t) {
                        var e = r.isShared ? r.measured[t] : r.layout[t],
                            i = en(e);
                        e.min = a[t].min, e.max = e.min + i
                    }) : "position" === t.options.animationType && eg(function(t) {
                        var e = r.isShared ? r.measured[t] : r.layout[t],
                            i = en(a[t]);
                        e.max = e.min + i
                    });
                    var u = ev();
                    es(u, a, r.layout);
                    var c = ev();
                    r.isShared ? es(c, t.applyTransform(l, !0), r.measured) : es(c, a, r.layout);
                    var d = !iE(u),
                        h = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        var p = t.relativeParent,
                            f = p.snapshot,
                            v = p.layout;
                        if (f && v) {
                            var m = ey();
                            eu(m, r.layout, f.layout);
                            var y = ey();
                            eu(y, a, v.actual), iM(m, y) || (h = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: a,
                        snapshot: r,
                        delta: c,
                        layoutDelta: u,
                        hasLayoutChanged: d,
                        hasRelativeTargetChanged: h
                    })
                } else t.isLead() && (null === (o = (n = t.options).onExitComplete) || void 0 === o || o.call(n));
                t.options.transition = void 0
            }

            function iV(t) {
                t.clearSnapshot()
            }

            function ij(t) {
                t.clearMeasurements()
            }

            function iB(t) {
                var e = t.options.visualElement;
                (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
            }

            function iF(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function iW(t) {
                t.resolveTargetDelta()
            }

            function iq(t) {
                t.calcProjection()
            }

            function iU(t) {
                t.resetRotation()
            }

            function iH(t) {
                t.removeLeadSnapshot()
            }

            function iZ(t, e, i) {
                t.translate = (0, et.C)(e.translate, 0, i), t.scale = (0, et.C)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function iN(t, e, i, n) {
                t.min = (0, et.C)(e.min, i.min, n), t.max = (0, et.C)(e.max, i.max, n)
            }

            function iG(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            var i$ = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function iY(t, e) {
                for (var i = t.root, n = t.path.length - 1; n >= 0; n--)
                    if (t.path[n].instance) {
                        i = t.path[n];
                        break
                    }
                var o = (i && i !== t.root ? i.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
                o && t.mount(o, !0)
            }

            function iX(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function iK(t) {
                iX(t.x), iX(t.y)
            }
            var iJ = iD({
                    attachResizeListener: function(t, e) {
                        return tf(t, "resize", e)
                    },
                    measureScroll: function() {
                        return {
                            x: document.documentElement.scrollLeft || document.body.scrollLeft,
                            y: document.documentElement.scrollTop || document.body.scrollTop
                        }
                    },
                    checkIsScrollRoot: function() {
                        return !0
                    }
                }),
                iQ = {
                    current: void 0
                },
                i0 = iD({
                    measureScroll: function(t) {
                        return {
                            x: t.scrollLeft,
                            y: t.scrollTop
                        }
                    },
                    defaultParent: function() {
                        if (!iQ.current) {
                            var t = new iJ(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), iQ.current = t
                        }
                        return iQ.current
                    },
                    resetTransform: function(t, e) {
                        t.style.transform = null != e ? e : "none"
                    },
                    checkIsScrollRoot: function(t) {
                        return "fixed" === window.getComputedStyle(t).position
                    }
                }),
                i1 = (0, l.pi)((0, l.pi)((0, l.pi)((0, l.pi)({}, tK), tW), eI), {
                    measureLayout: function(t) {
                        var e = (0, l.CR)(tU(), 2),
                            i = e[0],
                            n = e[1],
                            o = (0, u.useContext)(_.p);
                        return u.createElement(ia, (0, l.pi)({}, t, {
                            layoutGroup: o,
                            switchLayoutGroup: (0, u.useContext)(R),
                            isPresent: i,
                            safeToRemove: n
                        }))
                    }
                }),
                i2 = function(t) {
                    function e(e, i) {
                        var n, o, r, s, a, d, T;
                        return void 0 === i && (i = {}), o = (n = t(e, i)).preloadedFeatures, r = n.createVisualElement, s = n.projectionNodeConstructor, a = n.useRender, d = n.useVisualState, T = n.Component, o && function(t) {
                            for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? h.projectionNodeConstructor = t[e] : h[e].Component = t[e])
                        }(o), (0, u.forwardRef)(function(t, e) {
                            var i, n, D, L, I, V, j, B, F, W, q, U, H, Z, N, G, $, Y, X, K, J, Q, tt, te, ti, tn, to, tr = (U = t.layoutId, (H = null === (q = (0, u.useContext)(_.p)) || void 0 === q ? void 0 : q.id) && void 0 !== U ? H + "-" + U : U);
                            t = (0, l.pi)((0, l.pi)({}, t), {
                                layoutId: tr
                            });
                            var ts = (0, u.useContext)(y),
                                ta = null,
                                tl = (N = (Z = function(t, e) {
                                    if ((0, O.O6)(t)) {
                                        var i = t.initial,
                                            n = t.animate;
                                        return {
                                            initial: !1 === i || (0, O.$L)(i) ? i : void 0,
                                            animate: (0, O.$L)(n) ? n : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, u.useContext)(g))).initial, G = Z.animate, (0, u.useMemo)(function() {
                                    return {
                                        initial: N,
                                        animate: G
                                    }
                                }, [S(N), S(G)])),
                                tu = ts.isStatic ? void 0 : (0, E.h)(function() {
                                    if (M.hasEverUpdated) return z++
                                }),
                                tc = d(t, ts.isStatic);
                            return !ts.isStatic && x.j && (tl.visualElement = ($ = (0, l.pi)((0, l.pi)({}, ts), t), Y = r, X = (0, u.useContext)(f), K = (0, u.useContext)(g).visualElement, J = (0, u.useContext)(b.O), k || function() {
                                if (k = !0, x.j) {
                                    if (window.matchMedia) {
                                        var t = window.matchMedia("(prefers-reduced-motion)"),
                                            e = function() {
                                                return C.current = t.matches
                                            };
                                        t.addListener(e), e()
                                    } else C.current = !1
                                }
                            }(), Q = (0, l.CR)((0, u.useState)(C.current), 1)[0], te = "never" !== (tt = (0, u.useContext)(y).reducedMotion) && ("always" === tt || Q), ti = (0, u.useRef)(void 0), Y || (Y = X.renderer), !ti.current && Y && (ti.current = Y(T, {
                                visualState: tc,
                                parent: K,
                                props: $,
                                presenceId: null == J ? void 0 : J.id,
                                blockInitialAnimation: (null == J ? void 0 : J.initial) === !1,
                                shouldReduceMotion: te
                            })), tn = ti.current, (0, w.L)(function() {
                                null == tn || tn.syncRender()
                            }), (0, u.useEffect)(function() {
                                var t;
                                null === (t = null == tn ? void 0 : tn.animationState) || void 0 === t || t.animateChanges()
                            }), (0, w.L)(function() {
                                return function() {
                                    return null == tn ? void 0 : tn.notifyUnmount()
                                }
                            }, []), tn), i = t, n = tl.visualElement, D = s || h.projectionNodeConstructor, I = i.layoutId, V = i.layout, j = i.drag, B = i.dragConstraints, F = i.layoutScroll, W = (0, u.useContext)(R), !D || !n || (null == n ? void 0 : n.projection) || (n.projection = new D(tu, n.getLatestValues(), null === (L = n.parent) || void 0 === L ? void 0 : L.projection), n.projection.setOptions({
                                layoutId: I,
                                layout: V,
                                alwaysMeasureLayout: !!j || B && P(B),
                                visualElement: n,
                                scheduleRender: function() {
                                    return n.scheduleRender()
                                },
                                animationType: "string" == typeof V ? V : "both",
                                initialPromotionConfig: W,
                                layoutScroll: F
                            })), ta = function(t, e, i) {
                                var n = [],
                                    o = (0, u.useContext)(f);
                                if (!e) return null;
                                "production" !== c.O && i && o.strict && (0, p.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                                for (var r = 0; r < m; r++) {
                                    var s = v[r],
                                        a = h[s],
                                        d = a.isEnabled,
                                        y = a.Component;
                                    d(t) && y && n.push(u.createElement(y, (0, l.pi)({
                                        key: s
                                    }, t, {
                                        visualElement: e
                                    })))
                                }
                                return n
                            }(t, tl.visualElement, o)), u.createElement(A, {
                                visualElement: tl.visualElement,
                                props: (0, l.pi)((0, l.pi)({}, ts), t)
                            }, ta, u.createElement(g.Provider, {
                                value: tl
                            }, a(T, t, tu, (to = tl.visualElement, (0, u.useCallback)(function(t) {
                                var i;
                                t && (null === (i = tc.mount) || void 0 === i || i.call(tc, t)), to && (t ? to.mount(t) : to.unmount()), e && ("function" == typeof e ? e(t) : P(e) && (e.current = t))
                            }, [to])), tc, ts.isStatic, tl.visualElement)))
                        })
                    }
                    if ("undefined" == typeof Proxy) return e;
                    var i = new Map;
                    return new Proxy(e, {
                        get: function(t, n) {
                            return i.has(n) || i.set(n, e(n)), i.get(n)
                        }
                    })
                }(function(t, e) {
                    var i, n, o;
                    return i = e.forwardMotionProps, n = D(t) ? th : tp, (0, l.pi)((0, l.pi)({}, n), {
                        preloadedFeatures: i1,
                        useRender: (void 0 === (o = void 0 !== i && i) && (o = !1), function(t, e, i, n, r, s) {
                            var a = r.latestValues,
                                c = (D(t) ? function(t, e) {
                                    var i = (0, u.useMemo)(function() {
                                        var i = Q();
                                        return J(i, e, {
                                            enableHardwareAcceleration: !1
                                        }, t.transformTemplate), (0, l.pi)((0, l.pi)({}, i.attrs), {
                                            style: (0, l.pi)({}, i.style)
                                        })
                                    }, [e]);
                                    if (t.style) {
                                        var n = {};
                                        H(n, t.style, t), i.style = (0, l.pi)((0, l.pi)({}, n), i.style)
                                    }
                                    return i
                                } : function(t, e, i) {
                                    var n, o, r = {},
                                        s = (H(n = {}, t.style || {}, t), Object.assign(n, (o = t.transformTemplate, (0, u.useMemo)(function() {
                                            var t = U();
                                            q(t, e, {
                                                enableHardwareAcceleration: !i
                                            }, o);
                                            var n = t.vars,
                                                r = t.style;
                                            return (0, l.pi)((0, l.pi)({}, n), r)
                                        }, [e]))), t.transformValues && (n = t.transformValues(n)), n);
                                    return t.drag && !1 !== t.dragListener && (r.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), r.style = s, r
                                })(e, a, s),
                                d = function(t, e, i) {
                                    var n = {};
                                    for (var o in t)(G(o) || !0 === i && N(o) || !e && !N(o) || t.draggable && o.startsWith("onDrag")) && (n[o] = t[o]);
                                    return n
                                }(e, "string" == typeof t, o),
                                h = (0, l.pi)((0, l.pi)((0, l.pi)({}, d), c), {
                                    ref: n
                                });
                            return i && (h["data-projection-id"] = i), (0, u.createElement)(t, h)
                        }),
                        createVisualElement: ie,
                        projectionNodeConstructor: i0,
                        Component: t
                    })
                })
        },
        79135: function(t, e, i) {
            "use strict";
            i.d(e, {
                T: function() {
                    return s
                }
            });
            var n = i(25738),
                o = i(28407),
                r = i(2728);

            function s(t, e) {
                var i, s = (0, r.A)(t);
                return s !== n.h && (s = o.P), null === (i = s.getAnimatableNone) || void 0 === i ? void 0 : i.call(s, e)
            }
        },
        2728: function(t, e, i) {
            "use strict";
            i.d(e, {
                A: function() {
                    return l
                }
            });
            var n = i(97582),
                o = i(87405),
                r = i(25738),
                s = i(36173),
                a = (0, n.pi)((0, n.pi)({}, s.j), {
                    color: o.$,
                    backgroundColor: o.$,
                    outlineColor: o.$,
                    fill: o.$,
                    stroke: o.$,
                    borderColor: o.$,
                    borderTopColor: o.$,
                    borderRightColor: o.$,
                    borderBottomColor: o.$,
                    borderLeftColor: o.$,
                    filter: r.h,
                    WebkitFilter: r.h
                }),
                l = function(t) {
                    return a[t]
                }
        },
        56440: function(t, e, i) {
            "use strict";
            i.d(e, {
                $: function() {
                    return s
                },
                C: function() {
                    return a
                }
            });
            var n = i(11248),
                o = i(2969),
                r = i(88340),
                s = [n.Rx, o.px, o.aQ, o.RW, o.vw, o.vh, {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                }],
                a = function(t) {
                    return s.find((0, r.l)(t))
                }
        },
        36173: function(t, e, i) {
            "use strict";
            i.d(e, {
                j: function() {
                    return a
                }
            });
            var n = i(2969),
                o = i(11248),
                r = i(97582),
                s = (0, r.pi)((0, r.pi)({}, o.Rx), {
                    transform: Math.round
                }),
                a = {
                    borderWidth: n.px,
                    borderTopWidth: n.px,
                    borderRightWidth: n.px,
                    borderBottomWidth: n.px,
                    borderLeftWidth: n.px,
                    borderRadius: n.px,
                    radius: n.px,
                    borderTopLeftRadius: n.px,
                    borderTopRightRadius: n.px,
                    borderBottomRightRadius: n.px,
                    borderBottomLeftRadius: n.px,
                    width: n.px,
                    maxWidth: n.px,
                    height: n.px,
                    maxHeight: n.px,
                    size: n.px,
                    top: n.px,
                    right: n.px,
                    bottom: n.px,
                    left: n.px,
                    padding: n.px,
                    paddingTop: n.px,
                    paddingRight: n.px,
                    paddingBottom: n.px,
                    paddingLeft: n.px,
                    margin: n.px,
                    marginTop: n.px,
                    marginRight: n.px,
                    marginBottom: n.px,
                    marginLeft: n.px,
                    rotate: n.RW,
                    rotateX: n.RW,
                    rotateY: n.RW,
                    rotateZ: n.RW,
                    scale: o.bA,
                    scaleX: o.bA,
                    scaleY: o.bA,
                    scaleZ: o.bA,
                    skew: n.RW,
                    skewX: n.RW,
                    skewY: n.RW,
                    distance: n.px,
                    translateX: n.px,
                    translateY: n.px,
                    translateZ: n.px,
                    x: n.px,
                    y: n.px,
                    z: n.px,
                    perspective: n.px,
                    transformPerspective: n.px,
                    opacity: o.Fq,
                    originX: n.$C,
                    originY: n.$C,
                    originZ: n.px,
                    zIndex: s,
                    fillOpacity: o.Fq,
                    strokeOpacity: o.Fq,
                    numOctaves: s
                }
        },
        88340: function(t, e, i) {
            "use strict";
            i.d(e, {
                l: function() {
                    return n
                }
            });
            var n = function(t) {
                return function(e) {
                    return e.test(t)
                }
            }
        },
        94714: function(t, e, i) {
            "use strict";
            i.d(e, {
                Ee: function() {
                    return u
                },
                Gl: function() {
                    return o
                },
                _c: function() {
                    return a
                },
                r$: function() {
                    return n
                },
                s3: function() {
                    return r
                }
            });
            var n = ["", "X", "Y", "Z"],
                o = ["transformPerspective", "x", "y", "z"];

            function r(t, e) {
                return o.indexOf(t) - o.indexOf(e)
            }["translate", "scale", "rotate", "skew"].forEach(function(t) {
                return n.forEach(function(e) {
                    return o.push(t + e)
                })
            });
            var s = new Set(o);

            function a(t) {
                return s.has(t)
            }
            var l = new Set(["originX", "originY", "originZ"]);

            function u(t) {
                return l.has(t)
            }
        },
        77107: function(t, e, i) {
            "use strict";
            i.d(e, {
                d5: function() {
                    return l
                },
                p_: function() {
                    return d
                }
            });
            var n = i(97582),
                o = i(81593),
                r = i(5759),
                s = i(67909),
                a = i(94714);

            function l(t, e, i) {
                if (void 0 === i && (i = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
                    var n;
                    n = Promise.all(e.map(function(e) {
                        return u(t, e, i)
                    }))
                } else if ("string" == typeof e) n = u(t, e, i);
                else {
                    var o = "function" == typeof e ? (0, s.x5)(t, e, i.custom) : e;
                    n = c(t, o, i)
                }
                return n.then(function() {
                    return t.notifyAnimationComplete(e)
                })
            }

            function u(t, e, i) {
                void 0 === i && (i = {});
                var o, r = (0, s.x5)(t, e, i.custom),
                    a = (r || {}).transition,
                    l = void 0 === a ? t.getDefaultTransition() || {} : a;
                i.transitionOverride && (l = i.transitionOverride);
                var d = r ? function() {
                        return c(t, r, i)
                    } : function() {
                        return Promise.resolve()
                    },
                    p = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? function(o) {
                        void 0 === o && (o = 0);
                        var r, s, a, c, d, p, f, v = l.delayChildren;
                        return r = (void 0 === v ? 0 : v) + o, s = l.staggerChildren, a = l.staggerDirection, c = i, void 0 === r && (r = 0), void 0 === s && (s = 0), void 0 === a && (a = 1), d = [], p = (t.variantChildren.size - 1) * s, f = 1 === a ? function(t) {
                            return void 0 === t && (t = 0), t * s
                        } : function(t) {
                            return void 0 === t && (t = 0), p - t * s
                        }, Array.from(t.variantChildren).sort(h).forEach(function(t, i) {
                            d.push(u(t, e, (0, n.pi)((0, n.pi)({}, c), {
                                delay: r + f(i)
                            })).then(function() {
                                return t.notifyAnimationComplete(e)
                            }))
                        }), Promise.all(d)
                    } : function() {
                        return Promise.resolve()
                    },
                    f = l.when;
                if (!f) return Promise.all([d(), p(i.delay)]);
                var v = (0, n.CR)("beforeChildren" === f ? [d, p] : [p, d], 2),
                    m = v[0],
                    y = v[1];
                return m().then(y)
            }

            function c(t, e, i) {
                var s, l = void 0 === i ? {} : i,
                    u = l.delay,
                    c = void 0 === u ? 0 : u,
                    d = l.transitionOverride,
                    h = l.type,
                    p = t.makeTargetAnimatable(e),
                    f = p.transition,
                    v = void 0 === f ? t.getDefaultTransition() : f,
                    m = p.transitionEnd,
                    y = (0, n._T)(p, ["transition", "transitionEnd"]);
                d && (v = d);
                var g = [],
                    b = h && (null === (s = t.animationState) || void 0 === s ? void 0 : s.getState()[h]);
                for (var w in y) {
                    var x = t.getValue(w),
                        C = y[w];
                    if (!(!x || void 0 === C || b && function(t, e) {
                            var i = t.protectedKeys,
                                n = t.needsAnimating,
                                o = i.hasOwnProperty(e) && !0 !== n[e];
                            return n[e] = !1, o
                        }(b, w))) {
                        var k = (0, n.pi)({
                            delay: c
                        }, v);
                        t.shouldReduceMotion && (0, a._c)(w) && (k = (0, n.pi)((0, n.pi)({}, k), {
                            type: !1,
                            delay: 0
                        }));
                        var P = (0, o.b8)(w, x, C, k);
                        g.push(P)
                    }
                }
                return Promise.all(g).then(function() {
                    m && (0, r.CD)(t, m)
                })
            }

            function d(t) {
                t.forEachValue(function(t) {
                    return t.stop()
                })
            }

            function h(t, e) {
                return t.sortNodePosition(e)
            }
        },
        5759: function(t, e, i) {
            "use strict";
            i.d(e, {
                GJ: function() {
                    return m
                },
                P$: function() {
                    return y
                },
                CD: function() {
                    return p
                },
                gg: function() {
                    return v
                }
            });
            var n = i(97582),
                o = i(28407),
                r = i(8715),
                s = i(33234),
                a = i(79135),
                l = i(87405),
                u = i(56440),
                c = i(88340),
                d = (0, n.ev)((0, n.ev)([], (0, n.CR)(u.$), !1), [l.$, o.P], !1),
                h = i(67909);

            function p(t, e) {
                var i = (0, h.x5)(t, e),
                    o = i ? t.makeTargetAnimatable(i, !1) : {},
                    a = o.transitionEnd;
                o.transition;
                var l = (0, n._T)(o, ["transitionEnd", "transition"]);
                for (var u in l = (0, n.pi)((0, n.pi)({}, l), void 0 === a ? {} : a)) {
                    var c = (0, r.Y)(l[u]);
                    t.hasValue(u) ? t.getValue(u).set(c) : t.addValue(u, (0, s.B)(c))
                }
            }

            function f(t, e) {
                (0, n.ev)([], (0, n.CR)(e), !1).reverse().forEach(function(i) {
                    var n, o = t.getVariant(i);
                    o && p(t, o), null === (n = t.variantChildren) || void 0 === n || n.forEach(function(t) {
                        f(t, e)
                    })
                })
            }

            function v(t, e) {
                return Array.isArray(e) ? f(t, e) : "string" == typeof e ? f(t, [e]) : void p(t, e)
            }

            function m(t, e, i) {
                var n, r, l, u = Object.keys(e).filter(function(e) {
                        return !t.hasValue(e)
                    }),
                    h = u.length;
                if (h)
                    for (var p = 0; p < h; p++) {
                        var f, v, m, y = u[p],
                            g = e[y],
                            b = null;
                        Array.isArray(g) && (b = g[0]), null === b && (b = null !== (r = null !== (n = i[y]) && void 0 !== n ? n : t.readValue(y)) && void 0 !== r ? r : e[y]), null != b && ("string" == typeof b && (f = b, /^\-?\d*\.?\d+$/.test(f) || (v = b, /^0[^.\s]+$/.test(v))) ? b = parseFloat(b) : (m = b, !d.find((0, c.l)(m)) && o.P.test(g) && (b = (0, a.T)(y, g))), t.addValue(y, (0, s.B)(b)), null !== (l = i[y]) && void 0 !== l || (i[y] = b), t.setBaseTarget(y, b))
                    }
            }

            function y(t, e, i) {
                var n, o, r = {};
                for (var s in t) r[s] = null !== (n = function(t, e) {
                    if (e) return (e[t] || e.default || e).from
                }(s, e)) && void 0 !== n ? n : null === (o = i.getValue(s)) || void 0 === o ? void 0 : o.get();
                return r
            }
        },
        67909: function(t, e, i) {
            "use strict";

            function n(t) {
                return Array.isArray(t)
            }

            function o(t) {
                return "string" == typeof t || n(t)
            }

            function r(t, e, i, n, o) {
                var r;
                return void 0 === n && (n = {}), void 0 === o && (o = {}), "function" == typeof e && (e = e(null != i ? i : t.custom, n, o)), "string" == typeof e && (e = null === (r = t.variants) || void 0 === r ? void 0 : r[e]), "function" == typeof e && (e = e(null != i ? i : t.custom, n, o)), e
            }

            function s(t, e, i) {
                var n, o, s = t.getProps();
                return r(s, e, null != i ? i : s.custom, (n = {}, t.forEachValue(function(t, e) {
                    return n[e] = t.get()
                }), n), (o = {}, t.forEachValue(function(t, e) {
                    return o[e] = t.getVelocity()
                }), o))
            }

            function a(t) {
                var e;
                return "function" == typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || o(t.initial) || o(t.animate) || o(t.whileHover) || o(t.whileDrag) || o(t.whileTap) || o(t.whileFocus) || o(t.exit)
            }

            function l(t) {
                return !!(a(t) || t.variants)
            }
            i.d(e, {
                $L: function() {
                    return o
                },
                A0: function() {
                    return n
                },
                O6: function() {
                    return a
                },
                e8: function() {
                    return l
                },
                oQ: function() {
                    return r
                },
                x5: function() {
                    return s
                }
            })
        },
        10010: function(t, e, i) {
            "use strict";

            function n(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function o(t, e) {
                var i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            i.d(e, {
                cl: function() {
                    return o
                },
                y4: function() {
                    return n
                }
            })
        },
        11741: function(t, e, i) {
            "use strict";
            i.d(e, {
                j: function() {
                    return n
                }
            });
            var n = "undefined" != typeof document
        },
        49304: function(t, e, i) {
            "use strict";
            i.d(e, {
                O: function() {
                    return o
                }
            });
            var n = i(34155),
                o = (void 0 === n || n.env, "production")
        },
        8715: function(t, e, i) {
            "use strict";
            i.d(e, {
                Y: function() {
                    return r
                },
                p: function() {
                    return o
                }
            });
            var n = i(48488),
                o = function(t) {
                    return !!(t && "object" == typeof t && t.mix && t.toValue)
                },
                r = function(t) {
                    return (0, n.C)(t) ? t[t.length - 1] || 0 : t
                }
        },
        21560: function(t, e, i) {
            "use strict";
            i.d(e, {
                L: function() {
                    return o
                }
            });
            var n = i(10010),
                o = function() {
                    function t() {
                        this.subscriptions = []
                    }
                    return t.prototype.add = function(t) {
                        var e = this;
                        return (0, n.y4)(this.subscriptions, t),
                            function() {
                                return (0, n.cl)(e.subscriptions, t)
                            }
                    }, t.prototype.notify = function(t, e, i) {
                        var n = this.subscriptions.length;
                        if (n) {
                            if (1 === n) this.subscriptions[0](t, e, i);
                            else
                                for (var o = 0; o < n; o++) {
                                    var r = this.subscriptions[o];
                                    r && r(t, e, i)
                                }
                        }
                    }, t.prototype.getSize = function() {
                        return this.subscriptions.length
                    }, t.prototype.clear = function() {
                        this.subscriptions.length = 0
                    }, t
                }()
        },
        86917: function(t, e, i) {
            "use strict";
            i.d(e, {
                w: function() {
                    return n
                }
            });
            var n = function(t) {
                return 1e3 * t
            }
        },
        96681: function(t, e, i) {
            "use strict";
            i.d(e, {
                h: function() {
                    return o
                }
            });
            var n = i(67294);

            function o(t) {
                var e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        76316: function(t, e, i) {
            "use strict";
            i.d(e, {
                M: function() {
                    return s
                }
            });
            var n = i(96681),
                o = 0,
                r = function() {
                    return o++
                },
                s = function() {
                    return (0, n.h)(r)
                }
        },
        58868: function(t, e, i) {
            "use strict";
            i.d(e, {
                L: function() {
                    return o
                }
            });
            var n = i(67294),
                o = i(11741).j ? n.useLayoutEffect : n.useEffect
        },
        65411: function(t, e, i) {
            "use strict";
            i.d(e, {
                z: function() {
                    return o
                }
            });
            var n = i(67294);

            function o(t) {
                return (0, n.useEffect)(function() {
                    return function() {
                        return t()
                    }
                }, [])
            }
        },
        33234: function(t, e, i) {
            "use strict";
            i.d(e, {
                B: function() {
                    return a
                }
            });
            var n = i(54735),
                o = i(99296),
                r = i(21560),
                s = function() {
                    function t(t) {
                        var e = this;
                        this.version = "6.5.1", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new r.L, this.velocityUpdateSubscribers = new r.L, this.renderSubscribers = new r.L, this.canTrackVelocity = !1, this.updateAndNotify = function(t, i) {
                            void 0 === i && (i = !0), e.prev = e.current, e.current = t;
                            var o = (0, n.$B)(),
                                r = o.delta,
                                s = o.timestamp;
                            e.lastUpdated !== s && (e.timeDelta = r, e.lastUpdated = s, n.ZP.postRender(e.scheduleVelocityCheck)), e.prev !== e.current && e.updateSubscribers.notify(e.current), e.velocityUpdateSubscribers.getSize() && e.velocityUpdateSubscribers.notify(e.getVelocity()), i && e.renderSubscribers.notify(e.current)
                        }, this.scheduleVelocityCheck = function() {
                            return n.ZP.postRender(e.velocityCheck)
                        }, this.velocityCheck = function(t) {
                            t.timestamp !== e.lastUpdated && (e.prev = e.current, e.velocityUpdateSubscribers.notify(e.getVelocity()))
                        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = !isNaN(parseFloat(this.current))
                    }
                    return t.prototype.onChange = function(t) {
                        return this.updateSubscribers.add(t)
                    }, t.prototype.clearListeners = function() {
                        this.updateSubscribers.clear()
                    }, t.prototype.onRenderRequest = function(t) {
                        return t(this.get()), this.renderSubscribers.add(t)
                    }, t.prototype.attach = function(t) {
                        this.passiveEffect = t
                    }, t.prototype.set = function(t, e) {
                        void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                    }, t.prototype.get = function() {
                        return this.current
                    }, t.prototype.getPrevious = function() {
                        return this.prev
                    }, t.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? (0, o.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, t.prototype.start = function(t) {
                        var e = this;
                        return this.stop(), new Promise(function(i) {
                            e.hasAnimated = !0, e.stopAnimation = t(i)
                        }).then(function() {
                            return e.clearAnimation()
                        })
                    }, t.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, t.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, t.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, t.prototype.destroy = function() {
                        this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                    }, t
                }();

            function a(t) {
                return new s(t)
            }
        },
        54735: function(t, e, i) {
            "use strict";
            i.d(e, {
                qY: function() {
                    return p
                },
                ZP: function() {
                    return b
                },
                iW: function() {
                    return f
                },
                $B: function() {
                    return g
                }
            });
            let n = 1 / 60 * 1e3,
                o = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
                r = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout(() => t(o()), n),
                s = !0,
                a = !1,
                l = !1,
                u = {
                    delta: 0,
                    timestamp: 0
                },
                c = ["read", "update", "preRender", "render", "postRender"],
                d = c.reduce((t, e) => (t[e] = function(t) {
                    let e = [],
                        i = [],
                        n = 0,
                        o = !1,
                        r = !1,
                        s = new WeakSet,
                        a = {
                            schedule: (t, r = !1, a = !1) => {
                                let l = a && o,
                                    u = l ? e : i;
                                return r && s.add(t), -1 === u.indexOf(t) && (u.push(t), l && o && (n = e.length)), t
                            },
                            cancel: t => {
                                let e = i.indexOf(t); - 1 !== e && i.splice(e, 1), s.delete(t)
                            },
                            process: l => {
                                if (o) {
                                    r = !0;
                                    return
                                }
                                if (o = !0, [e, i] = [i, e], i.length = 0, n = e.length)
                                    for (let i = 0; i < n; i++) {
                                        let n = e[i];
                                        n(l), s.has(n) && (a.schedule(n), t())
                                    }
                                o = !1, r && (r = !1, a.process(l))
                            }
                        };
                    return a
                }(() => a = !0), t), {}),
                h = c.reduce((t, e) => {
                    let i = d[e];
                    return t[e] = (t, e = !1, n = !1) => (a || y(), i.schedule(t, e, n)), t
                }, {}),
                p = c.reduce((t, e) => (t[e] = d[e].cancel, t), {}),
                f = c.reduce((t, e) => (t[e] = () => d[e].process(u), t), {}),
                v = t => d[t].process(u),
                m = t => {
                    a = !1, u.delta = s ? n : Math.max(Math.min(t - u.timestamp, 40), 1), u.timestamp = t, l = !0, c.forEach(v), l = !1, a && (s = !1, r(m))
                },
                y = () => {
                    a = !0, s = !0, l || r(m)
                },
                g = () => u;
            var b = h
        },
        84710: function(t, e, i) {
            "use strict";
            i.d(e, {
                LU: function() {
                    return g
                },
                G2: function() {
                    return v
                },
                XL: function() {
                    return y
                },
                CG: function() {
                    return m
                },
                h9: function() {
                    return k
                },
                yD: function() {
                    return P
                },
                gJ: function() {
                    return C
                },
                Z7: function() {
                    return h
                },
                X7: function() {
                    return f
                },
                Bn: function() {
                    return p
                },
                YQ: function() {
                    return u
                },
                mZ: function() {
                    return d
                },
                Vv: function() {
                    return c
                },
                GE: function() {
                    return l
                }
            });
            let n = t => e => 1 - t(1 - e),
                o = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                r = t => e => e * e * ((t + 1) * e - t),
                s = 4 / 11,
                a = 8 / 11,
                l = t => t,
                u = t => Math.pow(t, 2),
                c = n(u),
                d = o(u),
                h = t => 1 - Math.sin(Math.acos(t)),
                p = n(h),
                f = o(p),
                v = r(1.525),
                m = n(v),
                y = o(v),
                g = (t => {
                    let e = r(t);
                    return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })(1.525),
                b = 4356 / 361,
                w = 35442 / 1805,
                x = 16061 / 1805,
                C = t => {
                    if (1 === t || 0 === t) return t;
                    let e = t * t;
                    return t < s ? 7.5625 * e : t < a ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? b * e - w * t + x : 10.8 * t * t - 20.52 * t + 10.72
                },
                k = n(C),
                P = t => t < .5 ? .5 * (1 - C(1 - 2 * t)) : .5 * C(2 * t - 1) + .5
        },
        6773: function(t, e, i) {
            "use strict";
            i.d(e, {
                u: function() {
                    return n
                }
            });
            let n = (t, e, i) => Math.min(Math.max(i, t), e)
        },
        80734: function(t, e, i) {
            "use strict";
            i.d(e, {
                e: function() {
                    return n
                }
            });
            let n = t => "number" == typeof t
        },
        72453: function(t, e, i) {
            "use strict";
            i.d(e, {
                C: function() {
                    return n
                }
            });
            let n = (t, e, i) => -i * t + i * e + t
        },
        9897: function(t, e, i) {
            "use strict";
            i.d(e, {
                z: function() {
                    return o
                }
            });
            let n = (t, e) => i => e(t(i)),
                o = (...t) => t.reduce(n)
        },
        9326: function(t, e, i) {
            "use strict";
            i.d(e, {
                Y: function() {
                    return n
                }
            });
            let n = (t, e, i) => {
                let n = e - t;
                return 0 === n ? 1 : (i - t) / n
            }
        },
        99296: function(t, e, i) {
            "use strict";

            function n(t, e) {
                return e ? 1e3 / e * t : 0
            }
            i.d(e, {
                R: function() {
                    return n
                }
            })
        },
        22960: function(t, e, i) {
            "use strict";
            i.d(e, {
                $: function() {
                    return o
                }
            });
            var n = i(78059);
            let o = {
                test: (0, i(23953).i)("#"),
                parse: function(t) {
                    let e = "",
                        i = "",
                        n = "",
                        o = "";
                    return t.length > 5 ? (e = t.substr(1, 2), i = t.substr(3, 2), n = t.substr(5, 2), o = t.substr(7, 2)) : (e = t.substr(1, 1), i = t.substr(2, 1), n = t.substr(3, 1), o = t.substr(4, 1), e += e, i += i, n += n, o += o), {
                        red: parseInt(e, 16),
                        green: parseInt(i, 16),
                        blue: parseInt(n, 16),
                        alpha: o ? parseInt(o, 16) / 255 : 1
                    }
                },
                transform: n.m.transform
            }
        },
        34582: function(t, e, i) {
            "use strict";
            i.d(e, {
                J: function() {
                    return a
                }
            });
            var n = i(11248),
                o = i(2969),
                r = i(16777),
                s = i(23953);
            let a = {
                test: (0, s.i)("hsl", "hue"),
                parse: (0, s.d)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: s = 1
                }) => "hsla(" + Math.round(t) + ", " + o.aQ.transform((0, r.Nw)(e)) + ", " + o.aQ.transform((0, r.Nw)(i)) + ", " + (0, r.Nw)(n.Fq.transform(s)) + ")"
            }
        },
        87405: function(t, e, i) {
            "use strict";
            i.d(e, {
                $: function() {
                    return a
                }
            });
            var n = i(16777),
                o = i(22960),
                r = i(34582),
                s = i(78059);
            let a = {
                test: t => s.m.test(t) || o.$.test(t) || r.J.test(t),
                parse: t => s.m.test(t) ? s.m.parse(t) : r.J.test(t) ? r.J.parse(t) : o.$.parse(t),
                transform: t => (0, n.HD)(t) ? t : t.hasOwnProperty("red") ? s.m.transform(t) : r.J.transform(t)
            }
        },
        78059: function(t, e, i) {
            "use strict";
            i.d(e, {
                m: function() {
                    return l
                }
            });
            var n = i(11248),
                o = i(16777),
                r = i(23953);
            let s = (0, o.uZ)(0, 255),
                a = Object.assign(Object.assign({}, n.Rx), {
                    transform: t => Math.round(s(t))
                }),
                l = {
                    test: (0, r.i)("rgb", "red"),
                    parse: (0, r.d)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: r = 1
                    }) => "rgba(" + a.transform(t) + ", " + a.transform(e) + ", " + a.transform(i) + ", " + (0, o.Nw)(n.Fq.transform(r)) + ")"
                }
        },
        23953: function(t, e, i) {
            "use strict";
            i.d(e, {
                d: function() {
                    return r
                },
                i: function() {
                    return o
                }
            });
            var n = i(16777);
            let o = (t, e) => i => !!((0, n.HD)(i) && n.mj.test(i) && i.startsWith(t) || e && Object.prototype.hasOwnProperty.call(i, e)),
                r = (t, e, i) => o => {
                    if (!(0, n.HD)(o)) return o;
                    let [r, s, a, l] = o.match(n.KP);
                    return {
                        [t]: parseFloat(r),
                        [e]: parseFloat(s),
                        [i]: parseFloat(a),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        25738: function(t, e, i) {
            "use strict";
            i.d(e, {
                h: function() {
                    return l
                }
            });
            var n = i(28407),
                o = i(16777);
            let r = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function s(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(o.KP) || [];
                if (!n) return t;
                let s = i.replace(n, ""),
                    a = r.has(e) ? 1 : 0;
                return n !== i && (a *= 100), e + "(" + a + s + ")"
            }
            let a = /([a-z-]*)\(.*?\)/g,
                l = Object.assign(Object.assign({}, n.P), {
                    getAnimatableNone: t => {
                        let e = t.match(a);
                        return e ? e.map(s).join(" ") : t
                    }
                })
        },
        28407: function(t, e, i) {
            "use strict";
            i.d(e, {
                P: function() {
                    return h
                }
            });
            var n = i(87405),
                o = i(11248),
                r = i(16777);
            let s = "${c}",
                a = "${n}";

            function l(t) {
                "number" == typeof t && (t = `${t}`);
                let e = [],
                    i = 0,
                    l = t.match(r.dA);
                l && (i = l.length, t = t.replace(r.dA, s), e.push(...l.map(n.$.parse)));
                let u = t.match(r.KP);
                return u && (t = t.replace(r.KP, a), e.push(...u.map(o.Rx.parse))), {
                    values: e,
                    numColors: i,
                    tokenised: t
                }
            }

            function u(t) {
                return l(t).values
            }

            function c(t) {
                let {
                    values: e,
                    numColors: i,
                    tokenised: o
                } = l(t), u = e.length;
                return t => {
                    let e = o;
                    for (let o = 0; o < u; o++) e = e.replace(o < i ? s : a, o < i ? n.$.transform(t[o]) : (0, r.Nw)(t[o]));
                    return e
                }
            }
            let d = t => "number" == typeof t ? 0 : t,
                h = {
                    test: function(t) {
                        var e, i, n, o;
                        return isNaN(t) && (0, r.HD)(t) && (null !== (i = null === (e = t.match(r.KP)) || void 0 === e ? void 0 : e.length) && void 0 !== i ? i : 0) + (null !== (o = null === (n = t.match(r.dA)) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0) > 0
                    },
                    parse: u,
                    createTransformer: c,
                    getAnimatableNone: function(t) {
                        let e = u(t);
                        return c(t)(e.map(d))
                    }
                }
        },
        11248: function(t, e, i) {
            "use strict";
            i.d(e, {
                Fq: function() {
                    return r
                },
                Rx: function() {
                    return o
                },
                bA: function() {
                    return s
                }
            });
            var n = i(16777);
            let o = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                r = Object.assign(Object.assign({}, o), {
                    transform: (0, n.uZ)(0, 1)
                }),
                s = Object.assign(Object.assign({}, o), {
                    default: 1
                })
        },
        2969: function(t, e, i) {
            "use strict";
            i.d(e, {
                $C: function() {
                    return c
                },
                RW: function() {
                    return r
                },
                aQ: function() {
                    return s
                },
                px: function() {
                    return a
                },
                vh: function() {
                    return l
                },
                vw: function() {
                    return u
                }
            });
            var n = i(16777);
            let o = t => ({
                    test: e => (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                r = o("deg"),
                s = o("%"),
                a = o("px"),
                l = o("vh"),
                u = o("vw"),
                c = Object.assign(Object.assign({}, s), {
                    parse: t => s.parse(t) / 100,
                    transform: t => s.transform(100 * t)
                })
        },
        16777: function(t, e, i) {
            "use strict";
            i.d(e, {
                HD: function() {
                    return l
                },
                KP: function() {
                    return r
                },
                Nw: function() {
                    return o
                },
                dA: function() {
                    return s
                },
                mj: function() {
                    return a
                },
                uZ: function() {
                    return n
                }
            });
            let n = (t, e) => i => Math.max(Math.min(i, e), t),
                o = t => t % 1 ? Number(t.toFixed(5)) : t,
                r = /(-)?([\d]*\.?[\d])+/g,
                s = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
                a = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

            function l(t) {
                return "string" == typeof t
            }
        },
        97582: function(t, e, i) {
            "use strict";
            i.d(e, {
                CR: function() {
                    return c
                },
                Jh: function() {
                    return l
                },
                XA: function() {
                    return u
                },
                ZT: function() {
                    return o
                },
                _T: function() {
                    return s
                },
                ev: function() {
                    return h
                },
                fl: function() {
                    return d
                },
                mG: function() {
                    return a
                },
                pi: function() {
                    return r
                }
            });
            var n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                })(t, e)
            };

            function o(t, e) {
                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function i() {
                    this.constructor = t
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }
            var r = function() {
                return (r = Object.assign || function(t) {
                    for (var e, i = 1, n = arguments.length; i < n; i++)
                        for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };

            function s(t, e) {
                var i = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (i[n] = t[n]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (i[n[o]] = t[n[o]]);
                return i
            }

            function a(t, e, i, n) {
                return new(i || (i = Promise))(function(o, r) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function a(t) {
                        try {
                            l(n.throw(t))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? o(t.value) : ((e = t.value) instanceof i ? e : new i(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            }

            function l(t, e) {
                var i, n, o, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function a(a) {
                    return function(l) {
                        return function(a) {
                            if (i) throw TypeError("Generator is already executing.");
                            for (; r && (r = 0, a[0] && (s = 0)), s;) try {
                                if (i = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                                switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        o = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, n = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < o[1]) {
                                            s.label = o[1], o = a;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(a);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = e.call(t, s)
                            } catch (t) {
                                a = [6, t], n = 0
                            } finally {
                                i = o = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, l])
                    }
                }
            }

            function u(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    i = e && t[e],
                    n = 0;
                if (i) return i.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                };
                throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function c(t, e) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i) return t;
                var n, o, r = i.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(n = r.next()).done;) s.push(n.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (i = r.return) && i.call(r)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function d() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
                return t
            }

            function h(t, e, i) {
                if (i || 2 == arguments.length)
                    for (var n, o = 0, r = e.length; o < r; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
                return t.concat(n || Array.prototype.slice.call(e))
            }
            "function" == typeof SuppressedError && SuppressedError
        }
    }
]);