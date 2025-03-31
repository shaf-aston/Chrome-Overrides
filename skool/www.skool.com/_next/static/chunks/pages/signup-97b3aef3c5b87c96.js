(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7616], {
        65834: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return d
                }
            });
            var i = n(67294),
                r = n(20863),
                o = n(4298),
                a = n.n(o),
                c = n(73793),
                s = n(31865),
                u = n(85893),
                d = (0, i.memo)(function(e) {
                    var t = e.gtagId,
                        n = (0, c.bI)().dispatch;
                    return ((0, i.useEffect)(function() {
                        t && n(s.TM, !0)
                    }, [n, t]), (0, r.S_)() && t) ? (0, u.jsxs)(u.Fragment, {
                        children: [(0, u.jsx)(a(), {
                            strategy: "lazyOnload",
                            src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                        }), (0, u.jsx)(a(), {
                            strategy: "lazyOnload",
                            children: "window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(t, "');\n        ")
                        })]
                    }) : null
                })
        },
        5321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return o
                }
            });
            var i = n(46660),
                r = n(50282),
                o = !0;
            t.default = (0, r.Z)(i.Z, !0)
        },
        46660: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return N
                }
            });
            var i, r = n(59499),
                o = n(50029),
                a = n(64687),
                c = n.n(a),
                s = n(73793),
                u = n(67294),
                d = n(11163),
                p = n(52885),
                l = n(63233),
                f = n(63023),
                g = n(10329),
                h = n(53907),
                x = n(50378),
                m = n(3284),
                b = n(91425),
                y = n(17199),
                w = (0, x.iv)(["flex-direction:column;padding-top:0px;gap:32px;"]),
                v = x.ZP.div.withConfig({
                    displayName: "styled__JoinWrapper",
                    componentId: "sc-182ccz4-0"
                })(["width:100%;display:flex;justify-content:center;padding-top:174px;gap:82px;", ""], function(e) {
                    return e.theme.isMobile && w
                }),
                j = (0, x.iv)(["width:100%;border-radius:0px;box-shadow:none;padding:0px 24px 24px 24px;border-bottom:1px solid ", ";"], b.O9.n3),
                O = x.ZP.div.withConfig({
                    displayName: "styled__AuthFormWrapper",
                    componentId: "sc-182ccz4-1"
                })(["height:fit-content;width:452px;padding:32px;border-radius:10px;background:", ";", " ", ""], b.O9.n1, y.Wn, function(e) {
                    return e.theme.isMobile && j
                }),
                _ = (0, x.iv)(["width:100%;padding:0px 24px 40px 24px;> h1{margin:0px 0px 32px 0px;text-align:center;", "}> div{", "}"], m.c.t2, m.c.t6),
                P = x.ZP.div.withConfig({
                    displayName: "styled__SkoolInfoWrapper",
                    componentId: "sc-182ccz4-2"
                })(["width:414px;> h1{margin:32px 0px;", "}> div{white-space:pre;margin-bottom:32px;", "}a{color:", ";font-style:italic;}", ""], m.c.t1, m.c.t4, b.O9.n5, function(e) {
                    return e.theme.isMobile && _
                }),
                k = n(66482),
                C = n(65834),
                I = n(85893);

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }
            var E = ["\uD83D\uDCC8   Highly engaged", "❤️   Simple to setup", "\uD83D\uDE42   Fun to use", "\uD83D\uDCB0   Charge for membership", "\uD83D\uDCF1   iOS + Android apps", "\uD83C\uDF0E   Millions of users daily"],
                M = function(e) {
                    var t = e.affiliateCode,
                        n = e.groupId,
                        i = e.isAuthReload,
                        r = (0, s.bI)("self", "isMobile"),
                        o = r.self,
                        a = r.isMobile,
                        c = (0, d.useRouter)(),
                        x = (0, u.useMemo)(function() {
                            return n ? "group" : t ? "affiliate" : "none"
                        }, [n, t]);
                    (0, u.useEffect)(function() {
                        i ? (0, p.hj)(c, "auth") : (0, k.P3)({
                            eventName: k.qI.signUpPageView,
                            metadata: {
                                affiliate: x
                            }
                        })
                    }, []), (0, u.useEffect)(function() {
                        (0, p.Xs)(c)
                    }, [c]);
                    var m = (0, u.useMemo)(function() {
                        return (0, I.jsxs)(P, {
                            children: [!a && (0, I.jsx)(f.Z, {
                                width: 116
                            }), (0, I.jsx)("h1", {
                                children: "Everything you need to build community and make money online."
                            }), (0, I.jsx)(g.s, {
                                gap: 24,
                                children: E.map(function(e, t) {
                                    return (0, I.jsx)("div", {
                                        children: e
                                    }, t)
                                })
                            }), (0, I.jsx)("div", {
                                children: (0, I.jsx)(h.r, {
                                    href: "mailto:help@skool.com",
                                    label: "help@skool.com",
                                    newTab: !0
                                })
                            })]
                        })
                    }, [a]);
                    return (0, I.jsxs)(v, {
                        children: [!a && m, (0, I.jsx)(O, {
                            children: (0, I.jsx)(l.B, {
                                groupId: n,
                                affiliateCode: t,
                                showCreateCommunity: !!o,
                                reason: ""
                            })
                        }), a && m, (0, I.jsx)(C.o, {})]
                    })
                };
            M.initPage = (i = (0, o.Z)(c().mark(function e(t) {
                var n, i, o, a, s, u, d, p, l, f, g, h;
                return c().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.props, i = t.apiClient, o = t.ctx, e.next = 3, i.readSelf({});
                        case 3:
                            return s = void 0 === (a = e.sent.data) ? null : a, p = void 0 === (d = (u = o.query).ref) ? null : d, f = void 0 === (l = u.g) ? null : l, h = void 0 === (g = u.auth) ? null : g, e.abrupt("return", function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? S(Object(n), !0).forEach(function(t) {
                                        (0, r.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                self: s,
                                affiliateCode: p,
                                groupId: f,
                                isAuthReload: h,
                                settings: {
                                    pageTitle: "Skool: Sign up",
                                    pageMeta: {
                                        description: "Create your Skool account. It's free!",
                                        image: "https://assets.skool.com/f/aea500fe1a944222b23f9a12fd4d1557/4c272638e7114d8d9ac1fca5c6e2cfd827dd17ed268b466d954013b3d3f51919"
                                    }
                                }
                            }, n));
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return i.apply(this, arguments)
            });
            var N = M
        },
        98588: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/signup", function() {
                return n(5321)
            }])
        },
        4298: function(e, t, n) {
            e.exports = n(80976)
        }
    },
    function(e) {
        e.O(0, [4027, 630, 6911, 1509, 2859, 4192, 6527, 282, 2888, 9774, 179], function() {
            return e(e.s = 98588)
        }), _N_E = e.O()
    }
]);