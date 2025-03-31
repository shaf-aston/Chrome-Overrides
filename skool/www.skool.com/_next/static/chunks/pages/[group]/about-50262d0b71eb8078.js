(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5533], {
        65834: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return u
                }
            });
            var r = n(67294),
                i = n(20863),
                a = n(4298),
                o = n.n(a),
                s = n(73793),
                c = n(31865),
                l = n(85893),
                u = (0, r.memo)(function(e) {
                    var t = e.gtagId,
                        n = (0, s.bI)().dispatch;
                    return ((0, r.useEffect)(function() {
                        t && n(c.TM, !0)
                    }, [n, t]), (0, i.S_)() && t) ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(o(), {
                            strategy: "lazyOnload",
                            src: "https://www.googletagmanager.com/gtag/js?id=".concat(t)
                        }), (0, l.jsx)(o(), {
                            strategy: "lazyOnload",
                            children: "window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(t, "');\n        ")
                        })]
                    }) : null
                })
        },
        33917: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return h
                }
            });
            var r = n(50029),
                i = n(64687),
                a = n.n(i),
                o = n(67294),
                s = n(9008),
                c = n.n(s),
                l = n(4298),
                u = n.n(l),
                d = n(20863),
                p = n(73793),
                f = n(31865),
                m = n(85893),
                h = (0, o.memo)(function(e) {
                    var t = e.pixelId,
                        n = e.trackPageView,
                        i = (0, p.bI)("self"),
                        s = i.self,
                        l = i.dispatch,
                        h = (0, o.useState)(""),
                        g = h[0],
                        x = h[1],
                        v = (0, o.useCallback)((0, r.Z)(a().mark(function e() {
                            return a().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, d.Dy)(s.id);
                                    case 2:
                                        x(e.sent);
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [s]);
                    (0, o.useEffect)(function() {
                        t && (s && v(), l(f.TM, !0))
                    }, [l, t, v, s]);
                    var b = (0, o.useMemo)(function() {
                        return JSON.stringify({
                            em: null == s ? void 0 : s.email,
                            fn: null == s ? void 0 : s.firstName,
                            ln: null == s ? void 0 : s.lastName,
                            external_id: g
                        })
                    }, [g, s]);
                    return (0, d.S_)() && t && (!s || g) ? (0, m.jsxs)(m.Fragment, {
                        children: [(0, m.jsx)(u(), {
                            strategy: "lazyOnload",
                            id: "facebook-pixel-".concat(t),
                            children: "!function(f,b,e,v,n,t,s)\n      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n      n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n      n.queue=[];t=b.createElement(e);t.async=!0;\n      t.src=v;s=b.getElementsByTagName(e)[0];\n      s.parentNode.insertBefore(t,s)}(window, document,'script',\n      'https://connect.facebook.net/en_US/fbevents.js');\n      fbq('set', 'autoConfig', false, '".concat(t, "', ").concat(b, ")\n      fbq('init', '").concat(t, "', ").concat(b, ");\n      ").concat(n ? "fbq('track', 'PageView')" : "", "\n      fbq.disablePushState = true;\n      ")
                        }), (0, m.jsx)(c(), {
                            children: (0, m.jsx)("noscript", {
                                children: (0, m.jsx)("img", {
                                    height: "1",
                                    width: "1",
                                    style: "display:none",
                                    src: "https://www.facebook.com/tr?id=".concat(t, "&ev=PageView&noscript=1")
                                })
                            })
                        })]
                    }) : null
                })
        },
        37056: function(e, t, n) {
            "use strict";
            var r = n(4730),
                i = n(59499),
                a = n(50029),
                o = n(64687),
                s = n.n(o),
                c = n(11163),
                l = n(67294),
                u = n(73793),
                d = n(25123),
                p = n(66053),
                f = n(86520),
                m = n(52885),
                h = n(48939),
                g = n(52827),
                x = n(74484),
                v = n(74261),
                b = n(97778),
                y = n(66482),
                w = n(31865),
                j = n(12637),
                k = n(85893),
                C = ["props"];

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach(function(t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            t.Z = function(e) {
                var t;

                function n(t) {
                    var n, r = (0, u.bI)().dispatch,
                        i = t.self,
                        o = t.currentGroup,
                        C = (0, l.useState)(""),
                        O = C[0],
                        I = C[1],
                        M = (0, l.useState)(null),
                        _ = M[0],
                        Z = M[1],
                        D = (0, l.useState)(null),
                        N = D[0],
                        S = D[1],
                        A = (0, l.useState)(!1),
                        T = A[0],
                        U = A[1],
                        L = (0, l.useState)(!1),
                        E = L[0],
                        G = L[1],
                        R = (0, l.useState)(!1),
                        V = R[0],
                        B = R[1],
                        q = (0, l.useState)(!1),
                        F = q[0],
                        $ = q[1],
                        z = (0, c.useRouter)(),
                        H = z.query,
                        J = null == o || null === (n = o.metadata) || void 0 === n ? void 0 : n.archived,
                        W = (0, h.gf)(H);
                    (0, l.useEffect)(function() {
                        if ((null == o ? void 0 : o.name) !== "skoolers") {
                            var e, t = (null == H ? void 0 : H.invite) || (null === (e = (0, b.tv)({
                                key: b.H0.inviteCode
                            })) || void 0 === e ? void 0 : e.value) || "";
                            if (t && !F) {
                                if (J) {
                                    B(!0);
                                    return
                                }
                                $(!0), r(w.uX, !0), (0, a.Z)(s().mark(function e() {
                                    var n, a, c, l, u, f, g, x, v, k, C, O, M;
                                    return s().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!(0, h.g7)(z)) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.next = 3, (0, m.cq)(z, (0, h.jQ)({
                                                    group: o
                                                }));
                                            case 3:
                                                e.next = 7;
                                                break;
                                            case 5:
                                                return e.next = 7, (0, m.cq)(z, (0, h.AZ)({
                                                    groupName: o.name
                                                }));
                                            case 7:
                                                return e.next = 9, d.Z.verifyGroupInviteCode({
                                                    groupName: o.id,
                                                    inviteCode: t
                                                });
                                            case 9:
                                                l = (c = e.sent).data, u = c.error, f = (null == i || null === (n = i.member) || void 0 === n ? void 0 : n.role) || "", e.t0 = f, e.next = e.t0 === p.oN ? 16 : e.t0 === p.xC ? 16 : e.t0 === p.bD ? 18 : 21;
                                                break;
                                            case 16:
                                                return (0, b.pN)({
                                                    key: b.H0.inviteCode
                                                }), e.abrupt("return");
                                            case 18:
                                                return u || d.Z.grantCourseAccess({
                                                    groupID: o.id,
                                                    inviteCode: t
                                                }), (0, b.pN)({
                                                    key: b.H0.inviteCode
                                                }), e.abrupt("return");
                                            case 21:
                                                if (u ? (Z(u.data), (0, b.pN)({
                                                        key: b.H0.inviteCode
                                                    })) : (I(t), S(l)), i) {
                                                    e.next = 26;
                                                    break
                                                }
                                                return u || (0, b.co)({
                                                    key: b.H0.inviteCode,
                                                    value: t,
                                                    expireInMSec: 108e5
                                                }), G(!0), e.abrupt("return");
                                            case 26:
                                                if (W) {
                                                    e.next = 30;
                                                    break
                                                }(0, y.P3)({
                                                    eventName: y.qI.joinGroupClick,
                                                    metadata: {
                                                        context: "invite_join_group",
                                                        invite_code: t,
                                                        invite_code_error: u ? u.data || "unknown" : void 0
                                                    }
                                                }), e.next = 32;
                                                break;
                                            case 30:
                                                return e.next = 32, (0, m.hj)(z, "auth");
                                            case 32:
                                                if (u) {
                                                    e.next = 54;
                                                    break
                                                }
                                                return g = (0, j.K)(), e.next = 36, d.Z.joinGroup(P({
                                                    groupName: o.name,
                                                    inviteCode: t
                                                }, g));
                                            case 36:
                                                if (v = (x = e.sent).data, (null == (k = x.error) ? void 0 : k.data) !== "group limit exceeded") {
                                                    e.next = 42;
                                                    break
                                                }
                                                return r(w.Df, !0), e.abrupt("return");
                                            case 42:
                                                return e.next = 44, d.Z.grantCourseAccess({
                                                    groupID: o.id,
                                                    inviteCode: t
                                                });
                                            case 44:
                                                if ((0, b.pN)({
                                                        key: b.H0.inviteCode
                                                    }), !(null != v && v.needsSurvey)) {
                                                    e.next = 47;
                                                    break
                                                }
                                                return e.abrupt("return", r(w.nx, !0));
                                            case 47:
                                                if (k) {
                                                    e.next = 54;
                                                    break
                                                }
                                                return v.eventId && (0, j.i)({
                                                    eventName: "CompleteRegistration",
                                                    eventID: v.eventId
                                                }), null === (C = window) || void 0 === C || null === (O = C.gtag) || void 0 === O || O.call(C, "event", "conversion", {
                                                    send_to: null == o || null === (M = o.metadata) || void 0 === M ? void 0 : M.googleTagId
                                                }), (0, y.uR)(y.qI.joinSuccess, {
                                                    invite_code: t
                                                }), e.next = 53, (0, m.H5)(z);
                                            case 53:
                                                return e.abrupt("return");
                                            case 54:
                                                if ((0, b.pN)({
                                                        key: b.H0.inviteCode
                                                    }), !(null != o && null !== (a = o.metadata) && void 0 !== a && a.currentMBp)) {
                                                    e.next = 59;
                                                    break
                                                }
                                                return e.abrupt("return", r(w.RV, !0));
                                            case 59:
                                                r(w.wd, !0), U(!0);
                                            case 61:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }))(), r(w.uX, !1)
                            }
                        }
                    }, [z, i, o, H, F, J, r, W]);
                    var K = (0, l.useCallback)(function() {
                            G(!1)
                        }, []),
                        X = (0, l.useCallback)(function() {
                            r(w.wd, !1), U(!1)
                        }, [r]),
                        Y = (0, l.useCallback)((0, a.Z)(s().mark(function e() {
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, m.gx)(z, (0, h.AZ)({
                                            groupName: o.name,
                                            pending: !0
                                        }));
                                    case 2:
                                        X();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [o.name, X, z]),
                        Q = (0, l.useCallback)(function() {
                            B(!1)
                        }, []);
                    return (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsx)(e, P({}, t)), T && (0, k.jsx)(g.Z, {
                            open: !0,
                            group: o,
                            inviter: N,
                            inviteCode: O,
                            inviteError: _,
                            onSuccess: Y,
                            onCancel: X
                        }), E && (0, k.jsx)(x.Z, {
                            open: !0,
                            reason: f.lT.InviteJoinGroup,
                            inviter: N,
                            inviteCode: O,
                            inviteError: _,
                            onSuccess: K
                        }), V && (0, k.jsx)(v.p, {
                            open: !0,
                            title: "This group has been archived",
                            subtitle: "Archived groups are read only. You can't join this group at this time.",
                            okButtonText: "Got It",
                            onConfirm: Q,
                            onCancel: Q
                        })]
                    })
                }
                return n.getRenderData = e.getRenderData, n.initPage = (t = (0, a.Z)(s().mark(function t(n) {
                    var i, a;
                    return s().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (i = n.props, a = (0, r.Z)(n, C), !e.initPage) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4, e.initPage(P({
                                    props: i
                                }, a));
                            case 4:
                                t.t0 = t.sent, t.next = 8;
                                break;
                            case 7:
                                t.t0 = i;
                            case 8:
                                return t.abrupt("return", t.t0);
                            case 9:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })), function(e) {
                    return t.apply(this, arguments)
                }), n
            }
        },
        60863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return e1
                },
                default: function() {
                    return e2
                }
            });
            var r, i, a = n(59499),
                o = n(50029),
                s = n(64687),
                c = n.n(s),
                l = n(4730),
                u = n(67294),
                d = n(31403),
                p = n(16917),
                f = n(58401),
                m = n(21850),
                h = n(15948),
                g = n(50378),
                x = n(91425),
                v = n(17199),
                b = g.ZP.div.withConfig({
                    displayName: "styled__MediaViewerWrapper",
                    componentId: "sc-dhi3r4-0"
                })(["display:flex;flex-direction:column;gap:8px;"]),
                y = (0, g.iv)(["height:calc((100vw - 26px) / 640 * 360);"]),
                w = g.ZP.img.withConfig({
                    displayName: "styled__MediaViewerImage",
                    componentId: "sc-dhi3r4-1"
                })(["width:100%;height:390.38px;cursor:pointer;border-radius:10px;object-fit:cover;", ""], function(e) {
                    return e.theme.isMobile && y
                }),
                j = g.ZP.div.withConfig({
                    displayName: "styled__MediaViewerThumbnails",
                    componentId: "sc-dhi3r4-2"
                })(["display:flex;gap:8px;"]),
                k = (0, g.iv)(['&:after{content:"";position:absolute;top:0px;left:0px;border:3px solid ', ";height:100%;width:100%;border-radius:10px;pointer-events:none;box-sizing:border-box;}"], x.O9.n7),
                C = (0, g.iv)(["height:20px;width:20px;svg{height:12px;width:12px;}display:flex;"]),
                O = g.ZP.div.withConfig({
                    displayName: "styled__DeleteMediaButton",
                    componentId: "sc-dhi3r4-3"
                })(["cursor:pointer;height:40px;width:40px;border-radius:50%;border:none;background:", ";padding:13px;display:flex;justify-content:center;align-items:center;position:absolute;top:4px;right:4px;display:none;> div{height:14px;width:14px;}", ""], x.O9.n2, function(e) {
                    return e.theme.isMobile && C
                }),
                P = (0, g.iv)(["height:60px;width:60px;"]),
                I = (0, g.iv)(["position:relative;height:90px;width:90px;border-radius:10px;background-size:cover;background-position:center;cursor:pointer;border:none;flex-shrink:0;&:hover{", "{display:flex;}}", ""], O, function(e) {
                    return e.theme.isMobile && P
                }),
                M = g.ZP.div.withConfig({
                    displayName: "styled__MediaViewerThumbnail",
                    componentId: "sc-dhi3r4-4"
                })(["", " background-image:", ";", ""], I, function(e) {
                    var t = e.$url;
                    return "url(".concat(t, ")")
                }, function(e) {
                    return e.$isActive && k
                }),
                _ = (0, g.iv)(["height:60px;width:60px;"]),
                Z = g.ZP.div.withConfig({
                    displayName: "styled__AddMediaButton",
                    componentId: "sc-dhi3r4-5"
                })(["flex-shrink:0;cursor:pointer;height:90px;width:90px;border-radius:10px;background:", ";border:1px dashed ", ";color:", ";font-size:32px;display:flex;justify-content:center;align-items:center;", ""], x.O9.n2, x.O9.n3, x.O9.n5, function(e) {
                    return e.theme.isMobile && _
                }),
                D = g.ZP.div.withConfig({
                    displayName: "styled__MediaViewerVideoThumbnail",
                    componentId: "sc-dhi3r4-6"
                })(["", " display:flex;justify-content:center;align-items:center;color:", ";background-image:", ";", ""], I, x.O9.n7, function(e) {
                    var t = e.$url;
                    return "url(".concat(t, ")")
                }, function(e) {
                    return e.$isActive && k
                }),
                N = g.ZP.div.withConfig({
                    displayName: "styled__MediaViewerThumbnailsScroll",
                    componentId: "sc-dhi3r4-7"
                })(["overflow:scroll;", ""], v.KZ),
                S = n(73793),
                A = n(85893),
                T = ["media", "onAddMedia", "onMediaDrag", "showAddMedia", "onDeleteMedia", "showDeleteMedia"];

            function U(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(n), !0).forEach(function(t) {
                        (0, a.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var E = (0, u.memo)(function(e) {
                    var t = e.media,
                        n = e.onAddMedia,
                        r = e.onMediaDrag,
                        i = e.showAddMedia,
                        a = e.onDeleteMedia,
                        o = e.showDeleteMedia,
                        s = (0, l.Z)(e, T),
                        c = (0, u.useState)(0),
                        g = c[0],
                        x = c[1],
                        v = (0, u.useState)(!1),
                        y = v[0],
                        k = v[1],
                        C = (0, S.bI)("isMobile").isMobile,
                        P = (0, u.useCallback)(function() {
                            k(!0)
                        }, []),
                        I = (0, u.useCallback)(function() {
                            k(!1)
                        }, []),
                        _ = (0, u.useMemo)(function() {
                            var e = t[g],
                                n = e.type,
                                r = e.stream,
                                i = e.bigUrl,
                                a = e.videoUrl,
                                o = e.videoLengthMs,
                                s = e.originalThumbnailUrl;
                            return n === p.u.image ? (0, A.jsx)(w, {
                                onClick: P,
                                src: i,
                                fetchPriority: "high"
                            }) : (0, A.jsx)(d.Z, {
                                url: a,
                                streamURL: r,
                                thumbnailUrl: s,
                                duration: o,
                                style: {
                                    borderRadius: 10,
                                    overflow: "hidden"
                                }
                            })
                        }, [P, g, t]),
                        U = (0, u.useCallback)(function(e, t) {
                            var n = e.id,
                                i = e.type,
                                s = e.smallUrl,
                                c = e.originalThumbnailUrl,
                                l = null,
                                d = null;
                            return (o && (l = (0, A.jsx)(O, {
                                onClick: function(e) {
                                    e.stopPropagation(), a(n)
                                },
                                children: (0, A.jsx)(f.J, {
                                    name: "Close"
                                })
                            })), d = i === p.u.image ? (0, A.jsx)(M, {
                                $isActive: t === g,
                                onClick: function() {
                                    return x(t)
                                },
                                $url: s,
                                children: l
                            }, n) : (0, A.jsxs)(D, {
                                $isActive: t === g,
                                onClick: function() {
                                    return x(t)
                                },
                                $url: c,
                                children: [(0, A.jsx)(f.J, {
                                    name: "VideoThumbnail"
                                }), l]
                            }, n), r && !C) ? (0, A.jsx)(h._l, {
                                draggableId: n,
                                index: t,
                                children: function(e) {
                                    var t, n = L(L(L({}, e.draggableProps), e.dragHandleProps), {}, {
                                        ref: e.innerRef,
                                        style: L(L({}, d.props.style), null === (t = e.draggableProps) || void 0 === t ? void 0 : t.style)
                                    });
                                    return (0, u.cloneElement)(d, L(L({}, d.props), n))
                                }
                            }, n) : d
                        }, [g, o, a, C, r]),
                        E = (0, u.useMemo)(function() {
                            return i ? (0, A.jsx)(Z, {
                                onClick: n,
                                children: "+"
                            }, "add-media-button") : null
                        }, [n, i]),
                        G = (0, u.useCallback)(function(e) {
                            var t, n, i = null == e || null === (t = e.source) || void 0 === t ? void 0 : t.index,
                                a = null == e || null === (n = e.destination) || void 0 === n ? void 0 : n.index;
                            void 0 !== a && (i === g ? x(a) : i > g && a > g || i < g && a < g || x(function(e) {
                                return i <= e ? e - 1 : e + 1
                            }), r(e))
                        }, [r, g]),
                        R = (0, u.useMemo)(function() {
                            return C || !r ? (0, A.jsx)(N, {
                                children: (0, A.jsxs)(j, {
                                    children: [t.map(U), E]
                                })
                            }) : (0, A.jsx)(h.Z5, {
                                onDragEnd: G,
                                children: (0, A.jsx)(h.bK, {
                                    droppableId: "droppable",
                                    direction: "horizontal",
                                    children: function(e) {
                                        return (0, A.jsx)(N, {
                                            children: (0, A.jsxs)(j, L(L({
                                                ref: e.innerRef
                                            }, e.droppableProps), {}, {
                                                children: [t.map(U), e.placeholder, E]
                                            }))
                                        })
                                    }
                                })
                            })
                        }, [t, U, r, C, E, G]),
                        V = (0, u.useCallback)(function(e) {
                            x(e)
                        }, []);
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsxs)(b, L(L({}, s), {}, {
                            children: [_, R]
                        })), (0, A.jsx)(m._, {
                            attachments: t,
                            currentIdx: g,
                            open: y,
                            onNavigate: V,
                            onClose: I
                        })]
                    })
                }),
                G = n(37349),
                R = n(23450),
                V = n.n(R),
                B = n(73865),
                q = n(20863),
                F = n(31865),
                $ = n(48939),
                z = n(86520),
                H = n(19842),
                J = n(87461),
                W = n(30501),
                K = n(37056),
                X = n(11210),
                Y = n(11163),
                Q = n(25123),
                ee = n(33917),
                et = n(3284),
                en = n(43690),
                er = n(53907),
                ei = (0, g.iv)(["padding:16px 13px 32px 13px;min-height:calc(100vh - 62px);border-radius:0px;border:none;"]),
                ea = g.ZP.div.withConfig({
                    displayName: "styled__AboutWrapper",
                    componentId: "sc-ahd4cu-0"
                })(["border-radius:10px;padding:24px 18px 20px 18px;border:1px solid ", ";background:", ";display:flex;flex-direction:column;", ""], x.O9.n3, x.O9.n1, function(e) {
                    return e.theme.isMobile && ei
                }),
                eo = (0, g.iv)(["margin-bottom:16px;", ""], et.c.t2),
                es = g.ZP.div.withConfig({
                    displayName: "styled__GroupTitle",
                    componentId: "sc-ahd4cu-1"
                })(["margin-bottom:24px;", " ", ""], et.c.t1, function(e) {
                    return e.theme.isMobile && eo
                }),
                ec = (0, g.iv)(["padding:0px;"]),
                el = g.ZP.div.withConfig({
                    displayName: "styled__AboutTop",
                    componentId: "sc-ahd4cu-2"
                })(["padding:0px 14px;", ""], function(e) {
                    return e.theme.isMobile && ec
                }),
                eu = (0, g.iv)(["margin-bottom:24px;margin-top:24px;flex-wrap:wrap;gap:16px 0px;> div{width:50%;}"]),
                ed = (0, g.iv)(["margin-bottom:20px;"]),
                ep = g.ZP.div.withConfig({
                    displayName: "styled__GroupInfo",
                    componentId: "sc-ahd4cu-3"
                })(["display:flex;gap:40px;margin-bottom:24px;margin-top:40px;", " ", " ", ""], et.c.ellipsis, function(e) {
                    return e.theme.isMobile && eu
                }, function(e) {
                    return e.$noDescription && ed
                }),
                ef = (0, g.iv)(["", ";> div:first-child{height:20px;width:20px;}"], et.c.t8),
                em = g.ZP.div.withConfig({
                    displayName: "styled__UserNameWrapper",
                    componentId: "sc-ahd4cu-4"
                })(["display:flex;gap:4px;", ""], et.c.ellipsis),
                eh = g.ZP.div.withConfig({
                    displayName: "styled__InfoItem",
                    componentId: "sc-ahd4cu-5"
                })(["display:flex;align-items:center;gap:8px;", " > div:first-child{height:24px;width:24px;}> span{display:flex;gap:4px;}", ""], et.c.t6, function(e) {
                    return e.theme.isMobile && ef
                }),
                eg = (0, g.iv)(["height:166px;"]),
                ex = g.ZP.div.withConfig({
                    displayName: "styled__UploadBox",
                    componentId: "sc-ahd4cu-6"
                })(["height:396px;width:100%;background:", ";border-radius:10px;border:1px solid ", ";display:flex;align-items:center;justify-content:center;color:", ";cursor:pointer;", " ", ""], x.O9.n2, x.O9.n3, x.O9.n5, et.c.t7, function(e) {
                    return e.theme.isMobile && eg
                }),
                ev = (0, g.iv)(["height:20px;span{", ";}"], et.c.t8),
                eb = (0, g.ZP)(en.h_).withConfig({
                    displayName: "styled__AccessTypeDropdown",
                    componentId: "sc-ahd4cu-7"
                })(["display:flex;align-items:center;justify-content:center;height:24px;span{", "}&:hover{span{text-decoration:underline;}}", ""], et.c.t6, function(e) {
                    return e.theme.isMobile && ev
                }),
                ey = (0, g.iv)(["margin-top:32px;flex-direction:column;"]),
                ew = (0, g.iv)(["margin-top:40px;justify-content:center;border-top:1px solid ", ";padding-top:16px;width:237px;align-self:center;align-items:baseline;"], x.O9.n3),
                ej = (0, g.iv)(["gap:16px;", ""], function(e) {
                    return e.$isSkoolers ? ey : ew
                }),
                ek = (0, g.ZP)(er.r).withConfig({
                    displayName: "styled__PrivacyLink",
                    componentId: "sc-ahd4cu-8"
                })(["color:", ";", ""], x.O9.n5, et.c.t9),
                eC = g.ZP.div.withConfig({
                    displayName: "styled__BottomLinks",
                    componentId: "sc-ahd4cu-9"
                })(["margin-top:8px;display:flex;gap:32px;", ""], function(e) {
                    return e.theme.isMobile && ej
                }),
                eO = n(21960),
                eP = n(24252),
                eI = n(92230),
                eM = n(19492),
                e_ = n(90140),
                eZ = n(52885),
                eD = g.ZP.div.withConfig({
                    displayName: "styled__UploadMediaWrapper",
                    componentId: "sc-vzn6x1-0"
                })(["display:flex;flex-direction:column;"]),
                eN = g.ZP.div.withConfig({
                    displayName: "styled__UploadMediaInfo",
                    componentId: "sc-vzn6x1-1"
                })(["margin-bottom:16px;", ""], et.c.t7),
                eS = (0, u.memo)(function(e) {
                    var t, n = e.open,
                        r = e.onClose,
                        i = (0, S.bI)("currentGroup", "self"),
                        a = i.currentGroup,
                        s = i.self,
                        l = i.dispatch,
                        d = (0, u.useState)(""),
                        f = d[0],
                        m = d[1],
                        h = (0, u.useState)(null),
                        g = h[0],
                        x = h[1],
                        v = (0, u.useState)(!1),
                        b = v[0],
                        y = v[1],
                        w = (0, u.useState)(!1),
                        j = w[0],
                        k = w[1],
                        C = (0, Y.useRouter)(),
                        O = (0, u.useCallback)(function(e) {
                            l(F.bI, {
                                message: "Failed to upload media",
                                severity: "error"
                            }), null != e && e.target && (e.target.value = null), y(!1)
                        }, [l]),
                        P = (0, u.useCallback)((t = (0, o.Z)(c().mark(function e(t) {
                            var n, i, o, l, u, d, f, m, h;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return y(!0), n = t.target.files[0], e.next = 4, Q.Z.createFile({
                                            fileName: n.name,
                                            contentType: n.type,
                                            contentLength: n.size,
                                            ownerID: a.id,
                                            largeThumbnail: !0
                                        });
                                    case 4:
                                        if (o = (i = e.sent).data, !i.error) {
                                            e.next = 10;
                                            break
                                        }
                                        return O(), e.abrupt("return");
                                    case 10:
                                        return e.prev = 10, e.next = 13, (0, e_.cT)({
                                            fileID: o.file.id,
                                            writeUrl: o.writeUrl,
                                            acl: o.acl,
                                            contentType: o.contentType,
                                            data: n,
                                            timeout: 6e4,
                                            waitToken: o.waitToken,
                                            userID: null == s ? void 0 : s.id
                                        });
                                    case 13:
                                        if (!(l = e.sent)) {
                                            e.next = 23;
                                            break
                                        }
                                        return u = l.id, f = (d = l.metadata).imageSmUrl, m = d.imageMdUrl, h = d.srcReadUrl, e.next = 19, Q.Z.addLandingPageAttachment({
                                            fileId: u,
                                            groupId: a.id,
                                            originalUrl: h,
                                            smallUrl: f || h,
                                            bigUrl: m || h,
                                            attachmentType: p.u.image
                                        });
                                    case 19:
                                        return y(!1), r(), e.next = 23, (0, eZ.H5)(C);
                                    case 23:
                                        e.next = 28;
                                        break;
                                    case 25:
                                        e.prev = 25, e.t0 = e.catch(10), O(t);
                                    case 28:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, null, [
                                [10, 25]
                            ])
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [O, a, r, C, s]),
                        I = (0, u.useCallback)(function(e) {
                            m(e.target.value)
                        }, []),
                        M = (0, u.useCallback)((0, o.Z)(c().mark(function e() {
                            var t, n, i, o, s, l, u, d, m, h, g;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return k(!0), x(null), t = (0, $.X2)(f), e.next = 5, (0, eM.Wh)(t);
                                    case 5:
                                        return n = e.sent, i = (0, eM.ak)(f), e.next = 9, Q.Z.getVideoMeta({
                                            url: t,
                                            width: 1400
                                        });
                                    case 9:
                                        if (s = (o = e.sent).data, l = o.error, !((null == i ? void 0 : i.provider) === 5 && l)) {
                                            e.next = 18;
                                            break
                                        }
                                        return x("Invalid video link"), k(!1), e.abrupt("return");
                                    case 18:
                                        if (n) {
                                            e.next = 26;
                                            break
                                        }
                                        if (!((null == i ? void 0 : i.provider) !== 2)) {
                                            e.next = 23;
                                            break
                                        }
                                        return x("Invalid video link"), k(!1), e.abrupt("return");
                                    case 23:
                                        return x("Invalid video link. If this was a recent upload to Vimeo, or you recently changed your privacy settings, please wait 5 minutes and try again."), k(!1), e.abrupt("return");
                                    case 26:
                                        if (u = i.provider, d = i.videoID, !(u === eM.a.Unsupported || !d)) {
                                            e.next = 30;
                                            break
                                        }
                                        return x("Invalid video link"), e.abrupt("return");
                                    case 30:
                                        return m = s.lenMs, h = s.thumbnail, g = s.stream, e.next = 33, Q.Z.addLandingPageAttachment({
                                            lenMs: m,
                                            videoUrl: t,
                                            groupId: a.id,
                                            videoThumbnail: h,
                                            attachmentType: p.u.video_url,
                                            stream: g
                                        });
                                    case 33:
                                        return k(!1), r(), e.next = 37, (0, eZ.H5)(C);
                                    case 37:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [f, a, C, r]);
                    return (0, A.jsx)(eO.T, {
                        open: n,
                        onClose: b || j ? void 0 : r,
                        onCancel: r,
                        header: "Add media",
                        confirmLabel: "Add",
                        onConfirm: M,
                        cancelButtonVariant: "borderless",
                        cancelDisabled: b,
                        disabled: b,
                        loading: j,
                        children: (0, A.jsxs)(eD, {
                            children: [(0, A.jsx)(eN, {
                                children: "Upload an image (1400 x 790 recommended)."
                            }), (0, A.jsx)("input", {
                                onChange: P,
                                style: {
                                    display: "none"
                                },
                                id: "upload-media",
                                accept: "image/png, image/gif, image/jpeg",
                                multiple: !1,
                                type: "file"
                            }), (0, A.jsx)(eI.z, {
                                disabled: j,
                                loading: b,
                                variant: "secondary",
                                label: "Upload Image",
                                htmlFor: "upload-media",
                                style: {
                                    marginBottom: 32
                                }
                            }), (0, A.jsx)(eN, {
                                children: "Or, add a YouTube, Vimeo, Loom, or Wistia video link."
                            }), (0, A.jsx)(eP.I, {
                                value: f,
                                staticLabel: !0,
                                placeholder: "Link",
                                error: g,
                                onChange: I
                            })]
                        })
                    })
                }),
                eA = (0, u.memo)(function(e) {
                    var t = e.attachmentId,
                        n = e.onClose,
                        r = (0, S.bI)("currentGroup"),
                        i = r.currentGroup,
                        a = r.dispatch,
                        s = (0, u.useState)(!1),
                        l = s[0],
                        d = s[1],
                        p = (0, Y.useRouter)(),
                        f = (0, u.useCallback)((0, o.Z)(c().mark(function e() {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return d(!0), e.next = 3, Q.Z.deleteLandingPageAttachment({
                                            groupId: i.id,
                                            attachmentId: t
                                        });
                                    case 3:
                                        e.sent.error ? a(F.bI, {
                                            message: "Failed to delete media",
                                            severity: "error"
                                        }) : (0, eZ.H5)(p), d(!1);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [a, p, t, i]);
                    return (0, A.jsx)(eO.T, {
                        open: !!t,
                        onClose: n,
                        onCancel: n,
                        header: "Delete media?",
                        confirmLabel: "Delete",
                        onConfirm: f,
                        cancelButtonVariant: "borderless",
                        loading: l,
                        children: "Are you sure you want to delete? You can't undo this."
                    })
                }),
                eT = n(62256),
                eU = n(75423),
                eL = n(5684),
                eE = n(29310),
                eG = (0, g.iv)(["cursor:pointer;&:hover{background:", ";}"], x.O9.n2),
                eR = (0, g.iv)(["padding:0px;margin-top:24px;"]),
                eV = g.ZP.div.withConfig({
                    displayName: "styled__AboutDescriptionWrapper",
                    componentId: "sc-176lrb-0"
                })(["padding:14px;border-radius:10px;white-space:pre-wrap;", " > a{color:", ";cursor:pointer;text-decoration:none;", " &:hover{text-decoration:underline;text-decoration-color:inherit;}}", " ", ""], et.c.t7, x.O9.sd1, et.c.t7, function(e) {
                    var t = e.$isAdmin,
                        n = e.theme;
                    return t && !n.isMobile && eG
                }, function(e) {
                    return e.theme.isMobile && eR
                }),
                eB = (0, g.iv)(["> div{> button{&:first-child{width:118px;}&:last-child{width:99px;}}}"]),
                eq = (0, g.iv)(["> div:first-child{border:1px solid ", ";}"], x.O9.e2),
                eF = (0, g.iv)(['&:focus-within{> div:first-child{position:relative;border:1px solid transparent;&:after{content:"";position:absolute;top:0px;left:0px;border:2px solid ', ";height:100%;width:100%;border-radius:10px;pointer-events:none;}}}"], x.O9.n7),
                e$ = g.ZP.div.withConfig({
                    displayName: "styled__GroupDescriptionEdit",
                    componentId: "sc-176lrb-1"
                })(["display:flex;flex-direction:column;align-items:flex-end;> div:first-child{padding:13px;width:100%;border-radius:10px;border:1px solid ", ";}> div:last-child{display:flex;}", " ", ""], x.O9.n3, function(e) {
                    return e.$isOverCharacterLimit ? eq : eF
                }, function(e) {
                    return e.theme.isMobile && eB
                }),
                ez = (0, u.memo)(function(e) {
                    var t = e.isAdmin,
                        n = (0, S.bI)("currentGroup").currentGroup,
                        r = n.metadata.lpDescription || "",
                        i = (0, u.useState)(!1),
                        a = i[0],
                        s = i[1],
                        l = (0, u.useState)(r),
                        d = l[0],
                        p = l[1],
                        f = (0, u.useState)(null),
                        m = f[0],
                        h = f[1],
                        g = (0, u.useState)(""),
                        x = g[0],
                        v = g[1],
                        b = (0, u.useState)(function() {
                            return (0, eL.P)(r)
                        })[0],
                        y = (0, Y.useRouter)(),
                        w = (0, u.useRef)(),
                        j = (0, u.useCallback)(function() {
                            t && s(!0)
                        }, [t]),
                        k = (0, u.useMemo)(function() {
                            return x.length > 1e3
                        }, [x]),
                        C = (0, u.useCallback)(function(e) {
                            v(w.current.textContent()), p((0, eL.C)(e))
                        }, []),
                        O = (0, u.useCallback)((0, o.Z)(c().mark(function e() {
                            var t, r, i;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Q.Z.updateLandingPageDescription({
                                            groupId: n.id,
                                            description: d
                                        });
                                    case 2:
                                        if (!(t = e.sent.error)) {
                                            e.next = 7;
                                            break
                                        }
                                        return h(null !== (r = null === (i = t.data) || void 0 === i || null === (i = i.fields) || void 0 === i || null === (i = i[0]) || void 0 === i ? void 0 : i.error) && void 0 !== r ? r : "Something went wrong, please try again later."), e.abrupt("return");
                                    case 7:
                                        return e.next = 9, (0, eZ.H5)(y);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [n, d, y]),
                        P = (0, u.useCallback)(function() {
                            s(!1)
                        }, []),
                        I = (0, u.useCallback)(function() {}, []),
                        M = (0, u.useMemo)(function() {
                            var e = n.metadata.lpDescription || "";
                            return t && !e && (e = "Add a description..."), (0, H.uq)({
                                content: e
                            })
                        }, [n, t]);
                    return a ? (0, A.jsxs)(e$, {
                        $isOverCharacterLimit: k,
                        children: [(0, A.jsx)(eU.Z, {
                            ref: w,
                            autoFocus: !0,
                            onChange: C,
                            placeholder: "Add a description...",
                            initialContent: b,
                            onSelectionChange: I
                        }), (0, A.jsx)(eT.H, {
                            error: m,
                            value: x,
                            maxCharacters: 1e3,
                            style: {
                                marginBottom: 16
                            }
                        }), (0, A.jsxs)("div", {
                            children: [(0, A.jsx)(eI.z, {
                                label: "Cancel",
                                variant: "borderless",
                                onClick: P
                            }), (0, A.jsx)(eI.z, {
                                label: "Save",
                                onClick: O,
                                disabled: x.length > 1e3
                            })]
                        })]
                    }) : t || n.metadata.lpDescription ? (0, A.jsx)(eV, {
                        $isAdmin: t,
                        onClick: j,
                        children: (0, A.jsx)(eE.ZP, {
                            textVariant: "t7",
                            value: M.blocks
                        })
                    }) : null
                }),
                eH = n(65834),
                eJ = n(23897);

            function eW(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var eK = {
                    free: 1,
                    paid: 2
                },
                eX = {
                    1: "Free",
                    2: "Paid"
                },
                eY = function(e) {
                    var t, n, r, i = e.pixelId,
                        a = (0, S.bI)("currentGroup", "isMobile", "self"),
                        s = a.currentGroup,
                        l = a.isMobile,
                        d = a.dispatch,
                        p = a.self,
                        m = (0, u.useState)(!1),
                        h = m[0],
                        g = m[1],
                        x = (0, u.useState)(null),
                        v = x[0],
                        b = x[1],
                        y = (0, u.useState)(function() {
                            if (s.metadata.lpAttachmentsData) {
                                var e = (0, q.W4)(JSON.parse(s.metadata.lpAttachmentsData)).attachmentsData;
                                return e ? e.map(function(e) {
                                    var t = e.landingPageAttachmentType,
                                        n = e.id,
                                        r = e.image,
                                        i = e.video,
                                        a = r.bigUrl;
                                    return {
                                        id: n,
                                        type: t,
                                        originalUrl: r.originalUrl,
                                        smallUrl: r.smallUrl,
                                        bigUrl: a,
                                        videoUrl: i.videoUrl,
                                        originalThumbnailUrl: i.originalThumbnailUrl,
                                        videoLengthMs: i.videoLengthMs,
                                        stream: i.stream
                                    }
                                }) : null
                            }
                        }),
                        w = y[0],
                        j = y[1],
                        k = (0, Y.useRouter)().reload,
                        C = (null == s ? void 0 : s.name) === "skoolers",
                        O = (0, u.useCallback)((t = (0, o.Z)(c().mark(function e(t) {
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Q.Z.updateLandingPageAccessType({
                                            groupId: s.id,
                                            accessType: t
                                        });
                                    case 2:
                                        return e.next = 4, k();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return t.apply(this, arguments)
                        }), [s, k]),
                        P = (0, u.useMemo)(function() {
                            return (0, A.jsxs)(eC, {
                                $isSkoolers: C,
                                children: [!C && l && (0, A.jsx)(er.r, {
                                    href: (0, $.au)({
                                        groupID: null == s ? void 0 : s.id,
                                        source: "skooldotcom",
                                        medium: "website",
                                        campaign: "signup_skool_logo_link",
                                        content: "powered_by_skool"
                                    }),
                                    newTab: !0,
                                    children: (0, A.jsx)(eJ.Z, {})
                                }), (0, A.jsx)(ek, {
                                    newTab: !0,
                                    href: "/legal?t=privacy",
                                    label: l && !C ? "privacy, terms" : "Privacy and terms"
                                }), C && (0, A.jsx)(ek, {
                                    newTab: !0,
                                    href: "https://help.skool.com/",
                                    label: "Help center"
                                })]
                            })
                        }, [C, l, s]),
                        I = (0, u.useMemo)(function() {
                            return [{
                                label: "Paid",
                                active: s.metadata.lpAccessType === eK.paid,
                                onClick: function() {
                                    return O(eK.paid)
                                }
                            }, {
                                label: "Free",
                                active: s.metadata.lpAccessType === eK.free,
                                onClick: function() {
                                    return O(eK.free)
                                }
                            }]
                        }, [O, s]),
                        M = (0, u.useMemo)(function() {
                            return (0, z.CP)({
                                group: s,
                                user: p,
                                member: null == p ? void 0 : p.member
                            })
                        }, [s, p]),
                        _ = (0, u.useMemo)(function() {
                            return (0, z.cD)({
                                member: null == p ? void 0 : p.member,
                                group: s
                            })
                        }, [p, s]),
                        Z = (0, u.useMemo)(function() {
                            return M && w && w.length < 6
                        }, [M, w]),
                        D = (0, u.useMemo)(function() {
                            var e = 0 !== s.metadata.privacy;
                            return (0, A.jsxs)(eh, {
                                children: [(0, A.jsx)(f.J, {
                                    name: e ? "Lock" : "Public"
                                }), (0, A.jsx)("span", {
                                    children: e ? "Private" : "Public"
                                })]
                            })
                        }, [s]),
                        N = (0, u.useMemo)(function() {
                            var e = s.metadata.totalMembers;
                            return (0, A.jsxs)(eh, {
                                children: [(0, A.jsx)(f.J, {
                                    name: "Members"
                                }), (0, A.jsxs)("span", {
                                    children: [(0, q.TN)(e), " ", V()("member", e)]
                                })]
                            })
                        }, [s]),
                        T = (0, u.useMemo)(function() {
                            var e = s.metadata.lpAccessType,
                                t = eX[void 0 === e ? eK.free : e],
                                n = s.metadata,
                                r = n.currentMBp,
                                i = n.currentABp,
                                a = n.currentOtBp;
                            return (r ? t = "".concat((0, X.O5)(JSON.parse(r)), " /month") : i ? t = "".concat((0, X.O5)(JSON.parse(i)), " /year") : a && (t = "".concat((0, X.O5)(JSON.parse(a)), " lifetime")), !M || r || i || a) ? (0, A.jsxs)(eh, {
                                children: [(0, A.jsx)(f.J, {
                                    name: "Tag"
                                }), (0, A.jsx)("span", {
                                    children: t
                                })]
                            }) : (0, A.jsxs)(eh, {
                                children: [(0, A.jsx)(f.J, {
                                    name: "Tag"
                                }), (0, A.jsx)(eb, {
                                    options: I,
                                    children: (0, A.jsx)("span", {
                                        children: t
                                    })
                                })]
                            })
                        }, [s, I, M]),
                        U = (0, u.useMemo)(function() {
                            var e, t, n = (0, q.W4)(JSON.parse(null !== (e = null == s || null === (t = s.metadata) || void 0 === t ? void 0 : t.owner) && void 0 !== e ? e : "{}"));
                            return (0, A.jsxs)(eh, {
                                children: [(0, A.jsx)(J.Z, {
                                    user: n,
                                    size: l ? 20 : 24
                                }), (0, A.jsx)(em, {
                                    children: (0, A.jsx)(G.Z, {
                                        user: n,
                                        typographyVariant: l ? "t8" : "t6",
                                        addByline: !0
                                    })
                                })]
                            })
                        }, [s, l]),
                        L = (0, u.useCallback)(function() {
                            g(!0)
                        }, []),
                        R = (0, u.useCallback)(function() {
                            g(!1)
                        }, []),
                        B = (0, u.useMemo)(function() {
                            return M
                        }, [M]),
                        H = (0, u.useCallback)(function(e) {
                            b(e)
                        }, []),
                        K = (0, u.useCallback)(function() {
                            b(null)
                        }, []),
                        et = (0, u.useCallback)((n = (0, o.Z)(c().mark(function e(t) {
                            var n, r, i, a, o;
                            return c().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.source, r = t.destination, i = t.draggableId, a = n.index, !r || !(a !== (o = r.index))) {
                                            e.next = 14;
                                            break
                                        }
                                        return j((0, q.WR)({
                                            array: w,
                                            oldIdx: a,
                                            newIdx: o
                                        })), e.next = 9, Q.Z.updateLandingPageAttachmentPosition({
                                            groupId: s.id,
                                            attachmentId: i,
                                            delta: o - a
                                        });
                                    case 9:
                                        if (!e.sent.error) {
                                            e.next = 14;
                                            break
                                        }
                                        return j(w), e.abrupt("return", d(F.bI, {
                                            message: "There was an issue with reordering.",
                                            severity: "error"
                                        }));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), function(e) {
                            return n.apply(this, arguments)
                        }), [w, s, d]),
                        en = (0, u.useMemo)(function() {
                            return s.metadata.lpAttachmentsData && w ? (0, A.jsx)(E, {
                                media: w,
                                showAddMedia: Z,
                                showDeleteMedia: B,
                                onDeleteMedia: H,
                                onAddMedia: L,
                                onMediaDrag: M ? et : void 0
                            }) : M ? (0, A.jsx)(ex, {
                                onClick: L,
                                children: "Upload images / videos"
                            }) : null
                        }, [M, w, s, Z, et, B, H, L]),
                        ei = (0, u.useMemo)(function() {
                            return !l || _ ? null : (0, A.jsx)(W.F, {})
                        }, [l, _]),
                        eo = (0, u.useMemo)(function() {
                            var e, t, n = (null == s || null === (e = s.metadata) || void 0 === e ? void 0 : e.pluginGoogleAdsEnabled) === 1 ? null == s || null === (t = s.metadata) || void 0 === t || null === (t = t.googleTagId) || void 0 === t ? void 0 : t.split("/")[0] : null;
                            return (0, A.jsxs)(A.Fragment, {
                                children: [(0, A.jsx)(eH.o, {
                                    gtagId: n
                                }), (0, A.jsx)(ee.F, {
                                    pixelId: i,
                                    trackPageView: !0
                                })]
                            })
                        }, [i, s]);
                    return (0, A.jsxs)(A.Fragment, {
                        children: [(0, A.jsxs)(ea, {
                            children: [(0, A.jsxs)(el, {
                                children: [(0, A.jsx)(es, {
                                    children: null == s || null === (r = s.metadata) || void 0 === r ? void 0 : r.displayName
                                }), en, (0, A.jsxs)(ep, {
                                    $noDescription: !s.metadata.lpDescription,
                                    children: [D, N, T, U]
                                }), ei]
                            }), (0, A.jsx)(ez, {
                                isAdmin: M
                            }), l && P]
                        }), !l && P, eo, (0, A.jsx)(eS, {
                            open: h,
                            onClose: R
                        }), (0, A.jsx)(eA, {
                            attachmentId: v,
                            onClose: K
                        })]
                    })
                };
            eY.getRenderData = (r = (0, o.Z)(c().mark(function e(t) {
                var n, r, i;
                return c().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.ctx, r = t.apiClient, i = (0, $.Z9)(n.query), e.abrupt("return", r.getGroupLanding({
                                groupId: i,
                                common: !0
                            }));
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return r.apply(this, arguments)
            }), eY.initPage = (i = (0, o.Z)(c().mark(function e(t) {
                var n, r, i, o, s, l, u, d;
                return c().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return i = (r = t.props).currentGroup, o = r.renderData, s = "", null != i && null !== (n = i.metadata) && void 0 !== n && n.lpAttachmentsData && (l = (0, q.W4)(JSON.parse(i.metadata.lpAttachmentsData)).attachmentsData) && (u = l.find(function(e) {
                                return 1 === e.landingPageAttachmentType
                            })) && (s = null == u || null === (d = u.image) || void 0 === d ? void 0 : d.bigUrl), e.abrupt("return", function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? eW(Object(n), !0).forEach(function(t) {
                                        (0, a.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eW(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                settings: {
                                    pageTitle: i.metadata.displayName,
                                    pageMeta: {
                                        description: (0, H.Kv)({
                                            content: i.metadata.description
                                        }) || "",
                                        image: s
                                    },
                                    mainMenuName: B.K0.GroupDefault,
                                    mainMenuItem: B.t5.GroupDefaultAbout
                                },
                                pixelId: (null == o ? void 0 : o.pixelId) || null
                            }, r));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return i.apply(this, arguments)
            });
            var eQ = (0, K.Z)(eY),
                e0 = n(50282),
                e1 = !0,
                e2 = (0, e0.Z)(eQ)
        },
        21850: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return w
                }
            });
            var r = n(59499),
                i = n(4730),
                a = n(67294),
                o = n(16917),
                s = n(31403),
                c = n(80803),
                l = n(50378),
                u = n(92230),
                d = (0, l.iv)(["max-width:calc(100% - 16px);"]),
                p = l.ZP.img.withConfig({
                    displayName: "styled__AttachmentPreviewImage",
                    componentId: "sc-18kxp33-0"
                })(["max-height:calc(100% - 100px);max-width:calc(100% - 200px);border-radius:10px;", ""], function(e) {
                    return e.theme.isMobile && d
                }),
                f = (0, l.iv)(["bottom:8px;top:auto;"]),
                m = (0, l.ZP)(u.z).withConfig({
                    displayName: "styled__NavigationButton",
                    componentId: "sc-18kxp33-1"
                })(["position:fixed;flex-shrink:0;top:calc(50% - 40px);", ""], function(e) {
                    return e.theme.isMobile && f
                }),
                h = (0, l.iv)(["max-width:calc(100% - 16px);"]),
                g = l.ZP.div.withConfig({
                    displayName: "styled__VideoPlayerWrapper",
                    componentId: "sc-18kxp33-2"
                })(["width:1280px;max-width:calc(100% - 200px);", ""], function(e) {
                    return e.theme.isMobile && h
                }),
                x = n(85893),
                v = ["open", "attachments", "onNavigate", "currentIdx", "onClose"];

            function b(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(n), !0).forEach(function(t) {
                        (0, r.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var w = (0, a.memo)(function(e) {
                var t = e.open,
                    n = void 0 !== t && t,
                    r = e.attachments,
                    l = e.onNavigate,
                    u = e.currentIdx,
                    d = e.onClose,
                    f = (0, i.Z)(e, v),
                    h = (0, a.useState)(u || 0),
                    b = h[0],
                    w = h[1];
                (0, a.useEffect)(function() {
                    void 0 !== u && w(u)
                }, [u]);
                var j = r.length - 1,
                    k = 0 === b,
                    C = b === j,
                    O = (0, a.useCallback)(function(e) {
                        l ? l(e) : w(e)
                    }, [l]),
                    P = (0, a.useCallback)(function() {
                        O(C ? 0 : b + 1)
                    }, [O, b, C]),
                    I = (0, a.useCallback)(function() {
                        O(k ? j : b - 1)
                    }, [O, j, b, k]),
                    M = (0, a.useCallback)(function(e) {
                        if (n) switch (e.code) {
                            case "ArrowLeft":
                                I();
                                break;
                            case "ArrowRight":
                                P()
                        }
                    }, [n, I, P]);
                (0, a.useEffect)(function() {
                    return window.addEventListener("keydown", M),
                        function() {
                            window.removeEventListener("keydown", M)
                        }
                }, [M]);
                var _ = (0, a.useMemo)(function() {
                        var e = r[b];
                        if (!e) return null;
                        var t = e.type,
                            n = e.originalUrl,
                            i = e.videoUrl,
                            a = e.videoLengthMs,
                            c = e.originalThumbnailUrl,
                            l = e.autoplay;
                        return t === o.u.image ? (0, x.jsx)(p, {
                            src: n
                        }) : (0, x.jsx)(g, {
                            children: (0, x.jsx)(s.Z, {
                                url: i,
                                autoplay: l,
                                duration: a,
                                thumbnailUrl: c,
                                style: {
                                    borderRadius: 10,
                                    overflow: "hidden"
                                }
                            })
                        })
                    }, [b, r]),
                    Z = (0, a.useMemo)(function() {
                        return r.length < 2 ? null : (0, x.jsxs)(x.Fragment, {
                            children: [(0, x.jsx)(m, {
                                icon: "ArrowLeft",
                                variant: "icon-round",
                                onClick: I,
                                style: {
                                    left: 8
                                }
                            }), (0, x.jsx)(m, {
                                icon: "ArrowRight",
                                variant: "icon-round",
                                onClick: P,
                                style: {
                                    right: 8
                                }
                            })]
                        })
                    }, [r, P, I]);
                return (0, x.jsxs)(c.I, y(y({
                    open: n,
                    onClose: d,
                    withoutWrapper: !0,
                    showCloseButton: !0
                }, f), {}, {
                    children: [_, Z]
                }))
            })
        },
        20031: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[group]/about", function() {
                return n(60863)
            }])
        },
        4298: function(e, t, n) {
            e.exports = n(80976)
        }
    },
    function(e) {
        e.O(0, [4027, 630, 6911, 1509, 2859, 4192, 6527, 282, 2888, 9774, 179], function() {
            return e(e.s = 20031)
        }), _N_E = e.O()
    }
]);