(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5081], {
        44865: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                },
                w: function() {
                    return o
                }
            });
            var r = "https://apps.apple.com/us/app/skool-communities/id6447270545",
                o = "https://play.google.com/store/apps/details?id=com.skool.skoolcommunities"
        },
        25280: function(e, t, n) {
            "use strict";
            n.d(t, {
                D$: function() {
                    return m
                },
                E6: function() {
                    return v
                },
                Jr: function() {
                    return g
                },
                Up: function() {
                    return b
                },
                il: function() {
                    return p
                },
                kl: function() {
                    return u
                },
                t$: function() {
                    return h
                },
                uv: function() {
                    return d
                },
                vK: function() {
                    return y
                },
                zf: function() {
                    return x
                }
            });
            var r = n(59499),
                o = n(80008),
                i = n.n(o),
                a = n(23450),
                s = n.n(a),
                l = n(19842);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var u = function(e) {
                    var t = e.viewDate,
                        n = e.isLeft,
                        r = t.clone();
                    return n ? r.subtract(1, "month") : r.add(1, "month"), r.unix()
                },
                d = function(e) {
                    return e / 1e3 / 60 / 60 < 1
                },
                p = function(e) {
                    var t = e / 1e3 / 60,
                        n = t / 60,
                        r = n / 24;
                    return r > 2 ? s()("day", Math.ceil(r), !0) : n > 1 ? s()("hour", Math.ceil(n), !0) : s()("minute", Math.ceil(t), !0)
                },
                f = function(e) {
                    var t = e.event,
                        n = e.timezone,
                        o = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? c(Object(n), !0).forEach(function(t) {
                                    (0, r.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, t),
                        a = o.startTime,
                        s = o.endTime;
                    return o.localStartTime = i().tz(a, n).format("YYYY-MM-DDTHH:mm:ss"), o.localEndTime = i().tz(s, n).format("YYYY-MM-DDTHH:mm:ss"), o
                },
                m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                g = ["M", "T", "W", "T", "F", "S", "S"],
                h = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                b = function(e, t, n) {
                    return e > i().tz(t, n).unix()
                },
                x = function(e) {
                    var t = e.events,
                        n = e.timezone,
                        r = {},
                        o = function(e, t) {
                            r[t] ? r[t].push(e) : r[t] = [e]
                        };
                    return t.forEach(function(e) {
                        var t = f({
                                event: e,
                                timezone: n
                            }),
                            r = i().tz(t.localStartTime, n).format("L");
                        o(t, r)
                    }), r
                },
                v = function(e, t, n) {
                    for (var r = e + 1, o = i().tz("".concat(t, "-").concat(r < 10 ? "0".concat(r) : r, "-01"), n), a = o.clone(), s = [], l = a.day(), c = 0 === l ? 6 : l - 1; a.month() === e;) s.push({
                        date: a.unix(),
                        currentMonth: !0
                    }), a.add(1, "day");
                    for (; c > 0;) c--, o.subtract(1, "day"), s.unshift({
                        date: o.unix(),
                        currentMonth: !1
                    });
                    if (1 !== a.day()) {
                        for (; 0 !== a.day();) s.push({
                            date: a.unix(),
                            currentMonth: !1
                        }), a.add(1, "day");
                        s.push({
                            date: a.unix(),
                            currentMonth: !1
                        })
                    }
                    for (var u = [], d = 0; d < s.length;) u.push(s.slice(d, d + 7)), d += 7;
                    return u
                },
                y = function(e, t, n) {
                    var r = e.metadata.title,
                        o = (0, l.Kv)({
                            content: e.metadata.description
                        }) || "",
                        a = i().tz(e.startTime, t).format("YYYYMMDDTHHmmSS"),
                        s = i().tz(e.endTime, t).format("YYYYMMDDTHHmmSS"),
                        c = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=".concat(encodeURIComponent(r), "&dates=").concat(a, "/").concat(s, "&details=").concat(encodeURIComponent(o), "&ctz=").concat(t);
                    return n && (c += "&location=".concat(encodeURIComponent(n.info))), c
                }
        },
        26290: function(e, t, n) {
            "use strict";
            n.d(t, {
                b: function() {
                    return f
                }
            });
            var r = n(67294),
                o = n(91425),
                i = n(50378),
                a = n(3284),
                s = n(17199),
                l = i.ZP.div.withConfig({
                    displayName: "styled__LiveBadgeWrapper",
                    componentId: "sc-1ai1tfz-0"
                })(["display:flex;align-items:center;color:", ";padding:5px 16px 5px 12px;border-radius:4px;background-color:", ";", ";", ""], o.O9.n1, o.O9.e2, a.c.t10, function(e) {
                    return e.theme.isLightTheme && s.Wn
                }),
                c = (0, i.F4)(["0%{opacity:0.5;}100%{opacity:1;}"]),
                u = i.ZP.div.withConfig({
                    displayName: "styled__LiveIndicator",
                    componentId: "sc-1ai1tfz-1"
                })(["display:flex;align-self:center;margin-right:8px;animation-timing-function:ease-in;animation:0.5s infinite alternate ", ";"], c),
                d = i.ZP.div.withConfig({
                    displayName: "styled__LiveText",
                    componentId: "sc-1ai1tfz-2"
                })(["color:", ";"], o.O9.fgError),
                p = n(85893),
                f = (0, r.memo)(function() {
                    return (0, p.jsxs)(l, {
                        children: [(0, p.jsx)(u, {
                            children: (0, p.jsx)("svg", {
                                width: 8,
                                height: 8,
                                viewBox: "0 0 8 8",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: o.O9.fgError,
                                children: (0, p.jsx)("circle", {
                                    cx: "4",
                                    cy: "4",
                                    r: "4"
                                })
                            })
                        }), (0, p.jsx)(d, {
                            children: "LIVE"
                        })]
                    })
                })
        },
        9858: function(e, t, n) {
            "use strict";
            n.d(t, {
                f: function() {
                    return m
                }
            });
            var r = n(67294),
                o = n(73793),
                i = n(3241),
                a = n(48153),
                s = n(48939),
                l = n(34544),
                c = n(50378),
                u = n(92230),
                d = (0, c.ZP)(u.z).withConfig({
                    displayName: "styled__ConfirmButton",
                    componentId: "sc-i3oowl-0"
                })(["width:100%;"]),
                p = c.ZP.div.withConfig({
                    displayName: "styled__ModalBodyContent",
                    componentId: "sc-i3oowl-1"
                })(["text-align:center;"]),
                f = n(85893),
                m = (0, r.memo)(function(e) {
                    var t, n, c = e.isLeaderboards,
                        u = e.onClose,
                        m = (0, o.bI)("currentGroup").currentGroup,
                        g = null !== (t = null == m || null === (n = m.metadata) || void 0 === n ? void 0 : n.minPostLevel) && void 0 !== t ? t : 0,
                        h = (0, r.useMemo)(function() {
                            return (0, l.b4)(g)
                        }, [g]);
                    if (!g) return null;
                    var b = (0, s.Xt)({
                        group: m
                    });
                    return (0, f.jsxs)(i.u_, {
                        size: "small",
                        open: !0,
                        onClose: u,
                        children: [(0, f.jsx)(i.xB, {
                            children: (0, f.jsx)(a.x, {
                                justifyContent: "center",
                                children: "Posting unlocks at Level ".concat(g)
                            })
                        }), (0, f.jsx)(i.fe, {
                            children: (0, f.jsxs)(p, {
                                children: ["You need ", (0, f.jsx)("strong", {
                                    children: h
                                }), " points to post in this community. Help people out in the comments. When they like your comment, you'll get a point. ", (0, f.jsx)("strong", {
                                    children: h
                                }), " ", "points unlocks posts."]
                            })
                        }), (0, f.jsx)(i.mz, {
                            children: void 0 !== c && c ? (0, f.jsx)(d, {
                                label: "Got it",
                                onClick: u
                            }) : (0, f.jsx)(d, {
                                label: "Check level on leaderboards",
                                href: null == b ? void 0 : b.as
                            })
                        })]
                    })
                })
        },
        37056: function(e, t, n) {
            "use strict";
            var r = n(4730),
                o = n(59499),
                i = n(50029),
                a = n(64687),
                s = n.n(a),
                l = n(11163),
                c = n(67294),
                u = n(73793),
                d = n(25123),
                p = n(66053),
                f = n(86520),
                m = n(52885),
                g = n(48939),
                h = n(52827),
                b = n(74484),
                x = n(74261),
                v = n(97778),
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
                        (0, o.Z)(e, t, n[t])
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
                        o = t.self,
                        a = t.currentGroup,
                        C = (0, c.useState)(""),
                        O = C[0],
                        I = C[1],
                        _ = (0, c.useState)(null),
                        M = _[0],
                        N = _[1],
                        D = (0, c.useState)(null),
                        Z = D[0],
                        T = D[1],
                        S = (0, c.useState)(!1),
                        E = S[0],
                        F = S[1],
                        G = (0, c.useState)(!1),
                        W = G[0],
                        R = G[1],
                        A = (0, c.useState)(!1),
                        B = A[0],
                        L = A[1],
                        q = (0, c.useState)(!1),
                        z = q[0],
                        $ = q[1],
                        U = (0, l.useRouter)(),
                        H = U.query,
                        V = null == a || null === (n = a.metadata) || void 0 === n ? void 0 : n.archived,
                        J = (0, g.gf)(H);
                    (0, c.useEffect)(function() {
                        if ((null == a ? void 0 : a.name) !== "skoolers") {
                            var e, t = (null == H ? void 0 : H.invite) || (null === (e = (0, v.tv)({
                                key: v.H0.inviteCode
                            })) || void 0 === e ? void 0 : e.value) || "";
                            if (t && !z) {
                                if (V) {
                                    L(!0);
                                    return
                                }
                                $(!0), r(w.uX, !0), (0, i.Z)(s().mark(function e() {
                                    var n, i, l, c, u, f, h, b, x, k, C, O, _;
                                    return s().wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (!(0, g.g7)(U)) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.next = 3, (0, m.cq)(U, (0, g.jQ)({
                                                    group: a
                                                }));
                                            case 3:
                                                e.next = 7;
                                                break;
                                            case 5:
                                                return e.next = 7, (0, m.cq)(U, (0, g.AZ)({
                                                    groupName: a.name
                                                }));
                                            case 7:
                                                return e.next = 9, d.Z.verifyGroupInviteCode({
                                                    groupName: a.id,
                                                    inviteCode: t
                                                });
                                            case 9:
                                                c = (l = e.sent).data, u = l.error, f = (null == o || null === (n = o.member) || void 0 === n ? void 0 : n.role) || "", e.t0 = f, e.next = e.t0 === p.oN ? 16 : e.t0 === p.xC ? 16 : e.t0 === p.bD ? 18 : 21;
                                                break;
                                            case 16:
                                                return (0, v.pN)({
                                                    key: v.H0.inviteCode
                                                }), e.abrupt("return");
                                            case 18:
                                                return u || d.Z.grantCourseAccess({
                                                    groupID: a.id,
                                                    inviteCode: t
                                                }), (0, v.pN)({
                                                    key: v.H0.inviteCode
                                                }), e.abrupt("return");
                                            case 21:
                                                if (u ? (N(u.data), (0, v.pN)({
                                                        key: v.H0.inviteCode
                                                    })) : (I(t), T(c)), o) {
                                                    e.next = 26;
                                                    break
                                                }
                                                return u || (0, v.co)({
                                                    key: v.H0.inviteCode,
                                                    value: t,
                                                    expireInMSec: 108e5
                                                }), R(!0), e.abrupt("return");
                                            case 26:
                                                if (J) {
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
                                                return e.next = 32, (0, m.hj)(U, "auth");
                                            case 32:
                                                if (u) {
                                                    e.next = 54;
                                                    break
                                                }
                                                return h = (0, j.K)(), e.next = 36, d.Z.joinGroup(P({
                                                    groupName: a.name,
                                                    inviteCode: t
                                                }, h));
                                            case 36:
                                                if (x = (b = e.sent).data, (null == (k = b.error) ? void 0 : k.data) !== "group limit exceeded") {
                                                    e.next = 42;
                                                    break
                                                }
                                                return r(w.Df, !0), e.abrupt("return");
                                            case 42:
                                                return e.next = 44, d.Z.grantCourseAccess({
                                                    groupID: a.id,
                                                    inviteCode: t
                                                });
                                            case 44:
                                                if ((0, v.pN)({
                                                        key: v.H0.inviteCode
                                                    }), !(null != x && x.needsSurvey)) {
                                                    e.next = 47;
                                                    break
                                                }
                                                return e.abrupt("return", r(w.nx, !0));
                                            case 47:
                                                if (k) {
                                                    e.next = 54;
                                                    break
                                                }
                                                return x.eventId && (0, j.i)({
                                                    eventName: "CompleteRegistration",
                                                    eventID: x.eventId
                                                }), null === (C = window) || void 0 === C || null === (O = C.gtag) || void 0 === O || O.call(C, "event", "conversion", {
                                                    send_to: null == a || null === (_ = a.metadata) || void 0 === _ ? void 0 : _.googleTagId
                                                }), (0, y.uR)(y.qI.joinSuccess, {
                                                    invite_code: t
                                                }), e.next = 53, (0, m.H5)(U);
                                            case 53:
                                                return e.abrupt("return");
                                            case 54:
                                                if ((0, v.pN)({
                                                        key: v.H0.inviteCode
                                                    }), !(null != a && null !== (i = a.metadata) && void 0 !== i && i.currentMBp)) {
                                                    e.next = 59;
                                                    break
                                                }
                                                return e.abrupt("return", r(w.RV, !0));
                                            case 59:
                                                r(w.wd, !0), F(!0);
                                            case 61:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }))(), r(w.uX, !1)
                            }
                        }
                    }, [U, o, a, H, z, V, r, J]);
                    var Y = (0, c.useCallback)(function() {
                            R(!1)
                        }, []),
                        X = (0, c.useCallback)(function() {
                            r(w.wd, !1), F(!1)
                        }, [r]),
                        K = (0, c.useCallback)((0, i.Z)(s().mark(function e() {
                            return s().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, m.gx)(U, (0, g.AZ)({
                                            groupName: a.name,
                                            pending: !0
                                        }));
                                    case 2:
                                        X();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [a.name, X, U]),
                        Q = (0, c.useCallback)(function() {
                            L(!1)
                        }, []);
                    return (0, k.jsxs)(k.Fragment, {
                        children: [(0, k.jsx)(e, P({}, t)), E && (0, k.jsx)(h.Z, {
                            open: !0,
                            group: a,
                            inviter: Z,
                            inviteCode: O,
                            inviteError: M,
                            onSuccess: K,
                            onCancel: X
                        }), W && (0, k.jsx)(b.Z, {
                            open: !0,
                            reason: f.lT.InviteJoinGroup,
                            inviter: Z,
                            inviteCode: O,
                            inviteError: M,
                            onSuccess: Y
                        }), B && (0, k.jsx)(x.p, {
                            open: !0,
                            title: "This group has been archived",
                            subtitle: "Archived groups are read only. You can't join this group at this time.",
                            okButtonText: "Got It",
                            onConfirm: Q,
                            onCancel: Q
                        })]
                    })
                }
                return n.getRenderData = e.getRenderData, n.initPage = (t = (0, i.Z)(s().mark(function t(n) {
                    var o, i;
                    return s().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = n.props, i = (0, r.Z)(n, C), !e.initPage) {
                                    t.next = 7;
                                    break
                                }
                                return t.next = 4, e.initPage(P({
                                    props: o
                                }, i));
                            case 4:
                                t.t0 = t.sent, t.next = 8;
                                break;
                            case 7:
                                t.t0 = o;
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
        20869: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return n9
                },
                default: function() {
                    return n6
                }
            });
            var r, o, i, a, s, l, c, u, d = n(50029),
                p = n(59499),
                f = n(64687),
                m = n.n(f),
                g = n(48939),
                h = n(73865),
                b = n(19842),
                x = n(37056),
                v = n(33675),
                y = n(17674),
                w = n(67294),
                j = n(70131),
                k = n(73793),
                C = n(11163),
                O = n(23450),
                P = n.n(O),
                I = n(41609),
                _ = n.n(I),
                M = n(25123),
                N = n(86520),
                D = n(97778),
                Z = n(25280),
                T = n(66482),
                S = n(52885),
                E = n(61325),
                F = n(20863),
                G = n(4366),
                W = {
                    ONBOARDING_INVITE_FRIENDS: 1
                },
                R = {
                    ONBOARDING_INVITE_FRIENDS: "invite_members"
                },
                A = n(79801),
                B = n(53907),
                L = n(20958),
                q = n(34050),
                z = n(430),
                $ = n(9858),
                U = n(31865),
                H = n(26290),
                V = n(91425),
                J = n(97628),
                Y = n(87461),
                X = n(94619),
                K = n(50378),
                Q = n(17199),
                ee = n(94976),
                et = (0, K.ZP)(ee.Z).withConfig({
                    displayName: "styled__CardParent",
                    componentId: "sc-116bwfw-0"
                })(["", " border-radius:10px;padding:0;overflow:hidden;"], Q.Wn),
                en = K.ZP.div.withConfig({
                    displayName: "styled__CardContent",
                    componentId: "sc-116bwfw-1"
                })(["height:", "px;display:flex;align-items:center;padding:", ";cursor:pointer;&:last-child{padding-bottom:", "px;}"], function(e) {
                    return e.theme.isMobile ? 48 : 60
                }, function(e) {
                    return e.theme.isMobile ? "8px 10px" : "10px 16px"
                }, function(e) {
                    return e.theme.isMobile ? 8 : 10
                }),
                er = n(85893),
                eo = (0, w.memo)(function(e) {
                    var t = e.onClick,
                        n = e.placeholder,
                        r = (0, k.bI)("self", "currentGroup", "isMobile"),
                        o = r.self,
                        i = r.currentGroup,
                        a = r.isMobile,
                        s = (0, w.useCallback)(function(e) {
                            t && t(e)
                        }, [t]);
                    return (0, er.jsx)(et, {
                        children: (0, er.jsx)(en, {
                            onClick: s,
                            children: (0, er.jsxs)(J.X, {
                                gap: a ? 10 : 16,
                                alignItems: "center",
                                children: [(0, er.jsx)(Y.Z, {
                                    user: o,
                                    group: i,
                                    size: a ? 32 : 40,
                                    disableLink: !0
                                }), (0, er.jsx)(X.Z, {
                                    variant: a ? "t6" : "t3",
                                    color: V.O9.n5,
                                    children: n
                                })]
                            })
                        })
                    })
                }),
                ei = n(90116),
                ea = n(84941),
                es = n(43690),
                el = (0, K.F4)(["10%{transform:translate3d(-4px,0,0);}20%,80%{transform:translate3d(0px,0,0);}30%,50%,70%,90%{transform:translate3d(-2px,0,0);}40%,60%{transform:translate3d(0px,0,0);}"]),
                ec = (0, K.iv)(["animation-name:", ";animation-duration:2s;animation-iteration-count:2;"], el),
                eu = K.ZP.div.withConfig({
                    displayName: "styled__SortButtonWrapper",
                    componentId: "sc-t8hli3-0"
                })(["", ""], function(e) {
                    return e.$animate && ec
                }),
                ed = (0, K.F4)(["20%{border:3px solid ", ";}40%{border:3px solid transparent;}60%{border:3px solid ", ";}to{border:3px solid transparent;}"], V.O9.p3, V.O9.p3),
                ep = K.ZP.div.withConfig({
                    displayName: "styled__SortButtonOverlay",
                    componentId: "sc-t8hli3-1"
                })(["position:absolute;top:1px;right:1px;width:38px;height:38px;border-radius:33px;pointer-events:none;animation-name:", ";animation-duration:2s;animation-iteration-count:2;"], ed);

            function ef(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function em(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ef(Object(n), !0).forEach(function(t) {
                        (0, p.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var eg = {
                    category: "category",
                    filter: "filter",
                    sortType: "sort"
                },
                eh = (0, w.memo)(function(e) {
                    var t = e.allLabels,
                        n = e.category,
                        r = e.sortType,
                        o = e.filter,
                        i = (0, C.useRouter)(),
                        a = (0, w.useRef)(),
                        s = (0, k.bI)("currentGroup", "openCommunityFilter", "highlightPinnedSortFilter"),
                        l = s.currentGroup,
                        c = s.openCommunityFilter,
                        u = s.highlightPinnedSortFilter,
                        d = s.dispatch,
                        p = (0, w.useState)({
                            category: n,
                            sortType: r,
                            filter: o
                        }),
                        f = p[0],
                        m = p[1];
                    (0, w.useEffect)(function() {
                        if (c) {
                            var e;
                            null == a || null === (e = a.current) || void 0 === e || e.openFiltersDropdown()
                        }
                    }, [c]), (0, w.useEffect)(function() {
                        u && setTimeout(function() {
                            d(U.xW, !1)
                        }, 4e3)
                    }, [d, u]);
                    var h = (0, w.useMemo)(function() {
                            return [{
                                key: "",
                                label: "All"
                            }].concat((0, ei.Z)(t.map(function(e) {
                                var t;
                                return {
                                    key: e.id,
                                    label: null == e || null === (t = e.metadata) || void 0 === t ? void 0 : t.displayName
                                }
                            })))
                        }, [t]),
                        b = (0, w.useCallback)(function(e) {
                            var t = e.state,
                                n = e.key,
                                r = h.find(function(e) {
                                    return e.key === (null == t ? void 0 : t.category)
                                }),
                                o = eg[n];
                            (0, T.P3)({
                                eventName: T.qI.groupFeedFilterClick,
                                metadata: {
                                    category: null == r ? void 0 : r.label,
                                    sort_type: null == t ? void 0 : t.sortType,
                                    filter: null == t ? void 0 : t.filter,
                                    click_type: o
                                }
                            })
                        }, [h]),
                        x = (0, w.useCallback)(function(e) {
                            if (void 0 !== e.category) {
                                var n, r = t.find(function(t) {
                                    return t.id === e.category
                                });
                                null != r && null !== (n = r.metadata) && void 0 !== n && n.defaultSort ? e.sortType = r.metadata.defaultSort : e.sortType = "newest-cm"
                            }
                            m(function(t) {
                                var n = em(em({}, t), e),
                                    r = Object.keys(e)[0];
                                return t[r] !== n[r] && b({
                                    state: n,
                                    key: r
                                }), (0, S.VF)(i, (0, g.AZ)(em({
                                    groupName: l.name
                                }, n))), n
                            })
                        }, [l.name, b, i, t]),
                        v = (0, w.useCallback)(function() {
                            (0, T.P3)({
                                eventName: T.qI.groupFeedFilterMenuOpen
                            })
                        }, []),
                        y = (0, w.useMemo)(function() {
                            var e, t = [{
                                    icon: "Recent",
                                    label: "Default",
                                    onClick: function() {
                                        x({
                                            sortType: "newest-cm",
                                            filter: ""
                                        })
                                    },
                                    active: "newest-cm" === r && "pin" !== o
                                }, {
                                    icon: "SparkleThick",
                                    label: "New",
                                    onClick: function() {
                                        x({
                                            sortType: "newest",
                                            filter: ""
                                        })
                                    },
                                    active: "newest" === r
                                }, {
                                    icon: "Top",
                                    label: "Top",
                                    onClick: function() {
                                        x({
                                            sortType: "best-1m",
                                            filter: ""
                                        })
                                    },
                                    active: null == r ? void 0 : r.startsWith("best")
                                }, {
                                    icon: "Pinned",
                                    label: "Hidden",
                                    onClick: function() {
                                        x({
                                            sortType: "newest-cm",
                                            filter: "pin"
                                        })
                                    },
                                    active: "pin" === o
                                }],
                                n = [{
                                    label: "Day",
                                    onClick: function() {
                                        x({
                                            sortType: "best-1d"
                                        })
                                    },
                                    active: "best-1d" === r
                                }, {
                                    label: "Week",
                                    onClick: function() {
                                        x({
                                            sortType: "best-1w"
                                        })
                                    },
                                    active: "best-1w" === r
                                }, {
                                    label: "Month",
                                    onClick: function() {
                                        x({
                                            sortType: "best-1m"
                                        })
                                    },
                                    active: "best-1m" === r
                                }, {
                                    label: "Year",
                                    onClick: function() {
                                        x({
                                            sortType: "best-1y"
                                        })
                                    },
                                    active: "best-1y" === r
                                }, {
                                    label: "All time",
                                    onClick: function() {
                                        x({
                                            sortType: "best"
                                        })
                                    },
                                    active: "best" === r
                                }],
                                i = "NewFilter";
                            switch ("newest" === r && (i = "SparkleThick"), null != r && r.startsWith("best") && (i = "Top"), "pin" === o && (i = "Pinned"), r) {
                                case "best-1d":
                                    e = "Day";
                                    break;
                                case "best-1w":
                                    e = "Week";
                                    break;
                                case "best-1m":
                                    e = "Month";
                                    break;
                                case "best-1y":
                                    e = "Year";
                                    break;
                                case "best":
                                    e = "All time"
                            }
                            return (0, er.jsxs)(J.X, {
                                gap: 8,
                                children: [(0, er.jsxs)(eu, {
                                    $animate: u,
                                    children: [(0, er.jsx)(es.h_, {
                                        icon: u ? "Pinned" : i,
                                        variant: "icon-round",
                                        options: t,
                                        optionMinWidth: 150
                                    }), u && (0, er.jsx)(ep, {})]
                                }), (null == r ? void 0 : r.startsWith("best")) && (0, er.jsx)(es.h_, {
                                    iconGap: 8,
                                    label: e,
                                    options: n,
                                    optionMinWidth: 150,
                                    buttonTypography: "t9"
                                })]
                            })
                        }, [o, x, r, u]);
                    return (0, er.jsx)("div", {
                        children: (0, er.jsx)(ea.u, {
                            ref: a,
                            value: f,
                            chipKey: "category",
                            chips: h,
                            onChange: x,
                            onClick: v,
                            customFilter: y,
                            showFilterLabel: null == r ? void 0 : r.startsWith("best")
                        })
                    })
                }),
                eb = n(92230),
                ex = n(58401),
                ev = n(3284),
                ey = (0, K.iv)(["border-radius:0px;border-left:0px;border-right:0px;margin-top:0px;"]),
                ew = K.ZP.div.withConfig({
                    displayName: "styled__OnboardingWidgetWrapper",
                    componentId: "sc-1sv5ko3-0"
                })(["border-radius:10px;border:1px solid ", ";background:", ";margin-bottom:16px;", ""], V.O9.n3, V.O9.n1, function(e) {
                    return e.theme.isMobile && ey
                }),
                ej = K.ZP.div.withConfig({
                    displayName: "styled__WidgetHeader",
                    componentId: "sc-1sv5ko3-1"
                })(["padding:0px 4px 0px 16px;height:56px;display:flex;align-items:center;justify-content:space-between;", " > div{&:first-child{display:flex;align-items:center;gap:12px;}&:last-child{display:flex;align-items:center;gap:8px;> button{color:", ";", "}}}> button{height:40px;width:40px;}"], ev.c.t6, V.O9.n5, ev.c.t9),
                ek = K.ZP.div.withConfig({
                    displayName: "styled__WidgetContent",
                    componentId: "sc-1sv5ko3-2"
                })(["border-top:1px solid ", ";padding:16px;display:flex;flex-direction:column;gap:12px;"], V.O9.n3),
                eC = K.ZP.div.withConfig({
                    displayName: "styled__CompletionItem",
                    componentId: "sc-1sv5ko3-3"
                })(["display:flex;align-items:center;gap:12px;> button{height:fit-content;", "}"], ev.c.t7),
                eO = K.ZP.div.withConfig({
                    displayName: "styled__IncompleteCircle",
                    componentId: "sc-1sv5ko3-4"
                })(["height:24px;width:24px;border:2px solid ", ";border-radius:50%;"], V.O9.n5),
                eP = K.ZP.div.withConfig({
                    displayName: "styled__CompleteCircle",
                    componentId: "sc-1sv5ko3-5"
                })(["height:24px;width:24px;border-radius:50%;background:", ";padding:4px;> div{height:100%;width:100%;color:", ";}"], V.O9.s2, V.O9.n1),
                eI = function(e, t) {
                    var n = e / 2,
                        r = e / 6,
                        o = (e - r) / 2,
                        i = o * Math.PI * 2,
                        a = t * i / 100;
                    return (0, K.iv)(["height:", "px;width:", "px;> circle{&:first-child{cx:", "px;cy:", "px;r:", "px;fill:none;stroke:", "33;stroke-width:", ";}&:last-child{cx:", "px;cy:", "px;r:", "px;fill:none;stroke:", ";stroke-width:", "px;stroke-linecap:round;stroke-dasharray:", " ", ";transform:rotate(-90deg);transform-origin:", "px ", "px;}}"], e, e, n, n, o, V.O9.s2, r, n, n, o, V.O9.s2, r, a, i - a, n, n)
                },
                e_ = K.ZP.svg.withConfig({
                    displayName: "styled__ProgressCircle",
                    componentId: "sc-1sv5ko3-6"
                })(["", ""], function(e) {
                    return eI(e.$size, e.$progress)
                }),
                eM = (0, w.memo)(function(e) {
                    var t = e.openInlineForm,
                        n = (0, k.bI)("currentGroup"),
                        r = n.currentGroup,
                        o = n.dispatch,
                        i = (0, w.useState)(!0),
                        a = i[0],
                        s = i[1],
                        l = (0, C.useRouter)().reload,
                        c = (0, w.useMemo)(function() {
                            var e = r.name;
                            return [{
                                key: "invite",
                                label: "Invite 3 people",
                                completed: r.metadata.totalMembers > 3,
                                href: "/".concat(e, "?sm=adminInvite")
                            }, {
                                key: "description",
                                label: "Add group description",
                                completed: !!r.metadata.description,
                                href: "/".concat(e, "?sm=adminGeneral")
                            }, {
                                key: "cover",
                                label: "Set cover image",
                                completed: !!r.metadata.coverSmallUrl,
                                href: "/".concat(e, "?sm=adminGeneral")
                            }, {
                                key: "post",
                                label: "Write your first post",
                                completed: !!r.metadata.totalPosts,
                                onClick: t
                            }]
                        }, [r, t]),
                        u = (0, w.useMemo)(function() {
                            return c.reduce(function(e, t) {
                                return t.completed ? e + 1 : e
                            }, 0) / c.length * 100
                        }, [c]),
                        p = (0, w.useCallback)((0, d.Z)(m().mark(function e() {
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, M.Z.deleteGroupCard({
                                            groupId: r.id,
                                            cardType: R.ONBOARDING_INVITE_FRIENDS
                                        });
                                    case 2:
                                        e.sent.error && o(U.bI, {
                                            message: "Something went wrong, please try again.",
                                            severity: "error"
                                        }), l();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [r, l, o]),
                        f = (0, w.useMemo)(function() {
                            return 100 !== u ? null : (0, er.jsx)(eb.z, {
                                variant: "link",
                                label: "Dismiss",
                                onClick: p,
                                disableRipple: !0,
                                dataTestId: "onboarding-widget-dismiss-btn"
                            })
                        }, [u, p]),
                        g = (0, w.useCallback)(function(e) {
                            var t = e.label,
                                n = e.completed,
                                r = e.href,
                                o = e.onClick,
                                i = e.key,
                                a = n ? (0, er.jsx)(eP, {
                                    children: (0, er.jsx)(ex.J, {
                                        name: "Check"
                                    })
                                }) : (0, er.jsx)(eO, {});
                            return (0, er.jsxs)(eC, {
                                children: [a, r ? (0, er.jsx)(B.r, {
                                    label: t,
                                    href: r
                                }) : (0, er.jsx)(eb.z, {
                                    label: t,
                                    variant: "link",
                                    onClick: o,
                                    disableRipple: !0,
                                    dataTestId: "onboarding-widget-step-".concat(i)
                                })]
                            }, i)
                        }, []),
                        h = (0, w.useMemo)(function() {
                            return a ? (0, er.jsx)(ek, {
                                children: c.map(g)
                            }) : null
                        }, [g, c, a]),
                        b = (0, w.useMemo)(function() {
                            return 100 === u ? (0, er.jsx)(eP, {
                                children: (0, er.jsx)(ex.J, {
                                    name: "Check"
                                })
                            }) : (0, er.jsxs)(e_, {
                                $size: 24,
                                $progress: u,
                                children: [(0, er.jsx)("circle", {}), (0, er.jsx)("circle", {})]
                            })
                        }, [u]),
                        x = (0, w.useCallback)(function() {
                            s(function(e) {
                                return !e
                            })
                        }, []);
                    return (0, er.jsxs)(ew, {
                        children: [(0, er.jsxs)(ej, {
                            children: [(0, er.jsxs)("div", {
                                children: [b, (0, er.jsx)("span", {
                                    children: "Set up your group"
                                })]
                            }), (0, er.jsxs)("div", {
                                children: [f, (0, er.jsx)(eb.z, {
                                    iconSize: 12,
                                    variant: "icon-borderless",
                                    onClick: x,
                                    icon: a ? "ArrowUp" : "ArrowDown",
                                    dataTestId: "onboarding-widget-expand-btn"
                                })]
                            })]
                        }), h]
                    })
                }),
                eN = n(48402),
                eD = n(10329),
                eZ = n(48153),
                eT = (0, K.F4)(["10%,90%{transform:translate3d(-1px,0,0);}20%,80%{transform:translate3d(2px,0,0);}30%,50%,70%{transform:translate3d(-4px,0,0);}40%,60%{transform:translate3d(4px,0,0);}"]),
                eS = (0, K.iv)(["animation-name:", ";animation-duration:2s;animation-iteration-count:2;"], eT),
                eE = (0, K.iv)(["margin:16px 0px;"]),
                eF = K.ZP.div.withConfig({
                    displayName: "styled__EventDutiesWrapper",
                    componentId: "sc-pcfnkc-1"
                })(["flex-direction:column;margin:20px 0px;display:flex;gap:16px;", ""], function(e) {
                    return e.theme.isMobile && eE
                }),
                eG = (0, K.iv)(["padding:unset;"]),
                eW = K.ZP.div.withConfig({
                    displayName: "styled__EventWidget",
                    componentId: "sc-pcfnkc-2"
                })(["border-radius:10px;display:flex;align-items:center;justify-content:center;width:100%;gap:8px;padding:0 32px;> div:first-child{align-self:flex-start;}", " ", " ", ""], ev.c.t6, function(e) {
                    return e.$wobble && eS
                }, function(e) {
                    return e.theme.isMobile && eG
                }),
                eR = (0, K.iv)(["white-space:nowrap;"]),
                eA = K.ZP.div.withConfig({
                    displayName: "styled__EventWidgetContent",
                    componentId: "sc-pcfnkc-3"
                })(["display:flex;align-items:center;white-space:pre-wrap;min-width:0;", " ", ""], ev.c.t6, function(e) {
                    return e.theme.isMobile && eR
                }),
                eB = (0, K.iv)(["display:flex;text-wrap:nowrap;width:100%;> a{display:unset;}"]),
                eL = K.ZP.div.withConfig({
                    displayName: "styled__EventWidgetEvents",
                    componentId: "sc-pcfnkc-4"
                })(["", ""], function(e) {
                    return e.theme.isMobile && eB
                }),
                eq = (0, K.iv)(["padding:0px 10px;margin-bottom:16px;"]),
                ez = K.ZP.div.withConfig({
                    displayName: "styled__CommunityTop",
                    componentId: "sc-pcfnkc-5"
                })(["display:flex;flex-direction:column;margin-bottom:24px;", ""], function(e) {
                    return e.theme.isMobile && eq
                }),
                e$ = (0, K.iv)(["flex-direction:column;gap:8px;margin-top:0px;"]),
                eU = K.ZP.div.withConfig({
                    displayName: "styled__AdminDutiesWrapper",
                    componentId: "sc-pcfnkc-6"
                })(["display:flex;justify-content:center;align-items:center;gap:24px;margin-top:8px;", ""], function(e) {
                    return e.theme.isMobile && e$
                }),
                eH = K.ZP.div.withConfig({
                    displayName: "styled__AdminDutyItem",
                    componentId: "sc-pcfnkc-7"
                })(["display:flex;cursor:pointer;gap:8px;> div{padding:0px 8px;display:flex;align-items:center;justify-content:center;height:24px;min-width:24px;border-radius:33px;color:", ";background:", ";", "}> span{color:", ";", "}&:hover{> span{text-decoration:underline;}}"], V.O9.fgError, V.O9.e2, ev.c.t10, V.O9.sd1, ev.c.t7),
                eV = K.ZP.span.withConfig({
                    displayName: "styled__EventTitle",
                    componentId: "sc-pcfnkc-8"
                })(["", ""], ev.c.t6),
                eJ = K.ZP.span.withConfig({
                    displayName: "styled__Label",
                    componentId: "sc-pcfnkc-9"
                })(["", ""], ev.c.t7),
                eY = (0, K.iv)(["border-radius:0px;border-width:1px 0px;padding:3px 16px;"]),
                eX = (0, K.ZP)(eb.z).withConfig({
                    displayName: "styled__LoadMoreButton",
                    componentId: "sc-pcfnkc-10"
                })(["border-radius:10px;background-color:", ";border:1px solid ", ";text-transform:none;width:100%;justify-content:flex-start;padding:12px 16px;height:40px;margin-bottom:16px;", " ", ""], function(e) {
                    return e.theme.isDarkTheme ? V.O9.p2 : "rgba(248, 212, 129, 0.6)"
                }, V.O9.n3, ev.c.t6, function(e) {
                    return e.theme.isMobile && eY
                }),
                eK = (0, K.iv)(["padding-right:4px;"]),
                eQ = K.ZP.span.withConfig({
                    displayName: "styled__EventTitleContainer",
                    componentId: "sc-pcfnkc-11"
                })(["", " ", ""], ev.c.ellipsis, function(e) {
                    return e.theme.isMobile && eK
                }),
                e0 = (0, K.ZP)(ex.J).withConfig({
                    displayName: "styled__NewCalendarIcon",
                    componentId: "sc-pcfnkc-12"
                })(["height:24px;width:18px;flex-shrink:0;"]),
                e1 = K.ZP.div.withConfig({
                    displayName: "styled__GroupFeedWrapper",
                    componentId: "sc-pcfnkc-13"
                })(["position:relative;"]),
                e2 = K.ZP.div.withConfig({
                    displayName: "styled__PostInputFormWrapper",
                    componentId: "sc-pcfnkc-14"
                })(["margin-bottom:16px;position:relative;z-index:", ";"], function(e) {
                    return e.$showBackdrop ? 1299 : void 0
                }),
                e4 = K.ZP.div.withConfig({
                    displayName: "styled__InputBackdrop",
                    componentId: "sc-pcfnkc-15"
                })(["z-index:", ";background-color:", ";opacity:", ";position:fixed;width:100%;height:100%;top:0;left:0;transition:opacity 0.3s;"], function(e) {
                    return e.$showBackdrop ? 1298 : -1
                }, function(e) {
                    return e.theme.isDarkTheme ? "rgba(0, 0, 0, 0.65)" : "rgba(144, 144, 144, 0.6)"
                }, function(e) {
                    return e.$showBackdrop ? 1 : 0
                }),
                e3 = K.ZP.div.withConfig({
                    displayName: "styled__PartnerBundleBanner",
                    componentId: "sc-pcfnkc-16"
                })(["", " width:100%;padding:14px 16px;background:", "54;margin-bottom:24px;border-radius:", ";border:1px solid ", ";cursor:pointer;display:flex;gap:16px;"], ev.c.t6, V.O9.p3, function(e) {
                    return e.theme.isMobile ? 0 : "10px"
                }, V.O9.n3),
                e5 = K.ZP.img.withConfig({
                    displayName: "styled__PresentImage",
                    componentId: "sc-pcfnkc-17"
                })(["width:24px;height:24px;"]),
                e9 = K.ZP.div.withConfig({
                    displayName: "styled__PostListWrapper",
                    componentId: "sc-pcfnkc-18"
                })(["> div{", "}"], function(e) {
                    return e.$wobble && eS
                }),
                e6 = (0, K.ZP)(es.h_).withConfig({
                    displayName: "styled__SkoolCatDropdown",
                    componentId: "sc-cfkgeq-0"
                })(["position:absolute;right:330px;top:-53px;z-index:1101;"]),
                e8 = (0, K.iv)(["transform:translateZ(0);"]),
                e7 = K.ZP.img.withConfig({
                    displayName: "styled__SkoolCatImage",
                    componentId: "sc-cfkgeq-1"
                })(["filter:drop-shadow(0px 0px 18px rgba(238,238,238,0.25));width:104px;", ""], function(e) {
                    return e.$isSafari && e8
                }),
                te = K.ZP.div.withConfig({
                    displayName: "styled__SkoolCatOption",
                    componentId: "sc-cfkgeq-2"
                })(["display:flex;align-items:center;gap:18px;> div:first-child{height:22px;width:22px;", "}"], function(e) {
                    return !e.$isActive && "color: ".concat(V.O9.n5, ";")
                }),
                tt = {
                    base: "https://assets.skool.com/skool/d432757120584e4b8fa05e756fee6571.png",
                    gangster: "https://assets.skool.com/skool/57a48db744a443ba9896afc972e9b72b.gif",
                    lofi: "https://assets.skool.com/skool/1219526344744881b9541cfd142b1aad.gif",
                    funky: "https://assets.skool.com/skool/c2a4aa7715294eaba10f4f151575b7c0.gif",
                    metal: "https://assets.skool.com/skool/ce14efd7502d49c2b59e051eba9366f2.gif"
                },
                tn = (0, F.G6)(),
                tr = function(e) {
                    var t = e.isActive,
                        n = e.label;
                    return (0, er.jsxs)(te, {
                        $isActive: t,
                        children: [(0, er.jsx)(ex.J, {
                            name: t ? "PauseCircle" : "PlayCircle"
                        }), n]
                    })
                },
                to = function() {
                    var e = (0, k.bI)("catPlaylist", "catPlaying", "makeItRain"),
                        t = e.dispatch,
                        n = e.catPlaylist,
                        r = e.catPlaying,
                        o = e.makeItRain,
                        i = (0, w.useCallback)(function(e) {
                            n === e ? t(U.PA, !r) : t(U.Pr, e)
                        }, [t, n, r]),
                        a = (0, w.useCallback)(function() {
                            t(U.DT, !o)
                        }, [t, o]),
                        s = (0, w.useMemo)(function() {
                            return [{
                                label: (0, er.jsx)(tr, {
                                    isActive: "gangster" === n && r,
                                    label: "Gangster"
                                }),
                                onClick: function() {
                                    return i("gangster")
                                }
                            }, {
                                label: (0, er.jsx)(tr, {
                                    isActive: "funky" === n && r,
                                    label: "Funky"
                                }),
                                onClick: function() {
                                    return i("funky")
                                }
                            }, {
                                label: (0, er.jsx)(tr, {
                                    isActive: "lofi" === n && r,
                                    label: "Lofi"
                                }),
                                onClick: function() {
                                    return i("lofi")
                                }
                            }, {
                                label: (0, er.jsx)(tr, {
                                    isActive: "metal" === n && r,
                                    label: "Metal"
                                }),
                                onClick: function() {
                                    return i("metal")
                                }
                            }, {
                                label: (0, er.jsx)(tr, {
                                    isActive: o,
                                    label: "Make it rain"
                                }),
                                onClick: a
                            }]
                        }, [i, r, n, o, a]);
                    return (0, er.jsx)(e6, {
                        options: s,
                        yOffset: -36,
                        xOffset: 200,
                        children: (0, er.jsx)(e7, {
                            src: tt[r ? n : "base"],
                            $isSafari: tn
                        })
                    })
                },
                ti = (0, w.memo)(function() {
                    var e = (0, k.bI)("showSkoolCat", "isMobile"),
                        t = e.isMobile;
                    return !e.showSkoolCat || t ? null : (0, er.jsx)(to, {})
                }),
                ta = n(80008),
                ts = n.n(ta),
                tl = K.ZP.div.withConfig({
                    displayName: "styled__MemberOnboardingAppModalWrapper",
                    componentId: "sc-h6l43e-0"
                })(["display:flex;flex-direction:column;align-items:center;> h2{margin:0px 0px 8px 0px;", "}> p{", " &:nth-child(2){margin:0px 0px 24px 0px;}}"], ev.c.t1, ev.c.t7),
                tc = K.ZP.img.withConfig({
                    displayName: "styled__QRCodeImage",
                    componentId: "sc-h6l43e-1"
                })(["height:200px;border-radius:10px;"]),
                tu = K.ZP.div.withConfig({
                    displayName: "styled__DownloadImages",
                    componentId: "sc-h6l43e-2"
                })(["display:flex;gap:16px;"]),
                td = K.ZP.img.withConfig({
                    displayName: "styled__DownloadImage",
                    componentId: "sc-h6l43e-3"
                })(["height:40px;"]),
                tp = (0, K.ZP)(eb.z).withConfig({
                    displayName: "styled__SkipButton",
                    componentId: "sc-h6l43e-4"
                })(["margin-top:16px;color:", ";height:fit-content;", " &:hover{color:", ";text-decoration:underline;}"], V.O9.n5, ev.c.t7, V.O9.n5),
                tf = n(3241);

            function tm(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var tg = (0, w.memo)(function(e) {
                    var t = e.onClose,
                        n = (0, k.bI)("self"),
                        r = n.self,
                        o = n.dispatch,
                        i = (0, w.useCallback)((0, d.Z)(m().mark(function e() {
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r.metadata.appD || (M.Z.setUserAppDownloaded({
                                            userID: r.id
                                        }), o(U._$, function(e) {
                                            var t = function(e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {};
                                                    t % 2 ? tm(Object(n), !0).forEach(function(t) {
                                                        (0, p.Z)(e, t, n[t])
                                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tm(Object(n)).forEach(function(t) {
                                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                                    })
                                                }
                                                return e
                                            }({}, e);
                                            return t.metadata.appD = !0, t
                                        }), t());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [r, o, t]);
                    return (0, er.jsx)(tf.u_, {
                        open: !0,
                        size: "small",
                        onClose: t,
                        children: (0, er.jsxs)(tl, {
                            children: [(0, er.jsx)("h2", {
                                children: "Get the Skool app"
                            }), (0, er.jsx)("p", {
                                children: "Scan this QR code to download the app now"
                            }), (0, er.jsx)(tc, {
                                src: "https://assets.skool.com/skool/c5c6c5c5ff3c43d8aca6debe568e465e.png"
                            }), (0, er.jsx)("p", {
                                children: "Or get it from the app stores"
                            }), (0, er.jsxs)(tu, {
                                children: [(0, er.jsx)(td, {
                                    src: "https://assets.skool.com/skool/a38d5d3593b7480498ed5e1c4ef625f9.png"
                                }), (0, er.jsx)(td, {
                                    src: "https://assets.skool.com/skool/0e92f89c15e34335a8697553a0685ffa.png"
                                })]
                            }), !r.metadata.appD && (0, er.jsx)(tp, {
                                variant: "link",
                                label: "Skip this step",
                                onClick: i
                            })]
                        })
                    })
                }),
                th = n(29957),
                tb = n(80803),
                tx = n(31403);

            function tv(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function ty(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tv(Object(n), !0).forEach(function(t) {
                        (0, p.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tv(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tw = (0, w.memo)(function(e) {
                    var t = e.onClose,
                        n = (0, k.bI)("currentGroup", "isMobile"),
                        r = n.currentGroup,
                        o = n.isMobile,
                        i = (0, w.useMemo)(function() {
                            return r.metadata.onboardingVideo ? (0, F.W4)(JSON.parse(r.metadata.onboardingVideo)) : o ? th.W : th.v
                        }, [r.metadata.onboardingVideo, o]),
                        a = !r.metadata.onboardingVideo,
                        s = o && a,
                        l = (0, w.useMemo)(function() {
                            return {
                                height: s ? "calc(100vh - 128px)" : "calc((100vw - 128px) * 0.5625)",
                                maxHeight: 720,
                                maxWidth: 1280,
                                width: o ? "calc(100vw - 16px)" : "calc(100vw - 128px)",
                                borderRadius: 10,
                                overflow: "hidden"
                            }
                        }, [o, s]),
                        c = (0, w.useCallback)(function(e) {
                            return e.wistia.options = ty(ty({}, e.wistia.options), {}, {
                                volumeControl: !1,
                                fullscreenButton: !1,
                                playbackRateControl: !1,
                                qualityControl: !1
                            }), e
                        }, []);
                    return (0, er.jsx)(tb.I, {
                        open: !0,
                        onClose: t,
                        showCloseButton: !0,
                        backgroundColor: s ? "#000000" : void 0,
                        children: (0, er.jsx)(tx.Z, {
                            style: l,
                            autoplay: !0,
                            url: i.videoUrl,
                            thumbnailUrl: i.videoThumbnail,
                            duration: i.videoLengthMS,
                            disablePlaybackResume: !r.metadata.onboardingVideo,
                            modifyConfig: a ? c : void 0
                        })
                    })
                }),
                tj = n(44865),
                tk = (0, K.iv)(["border-radius:0px;border-left:0px;border-right:0px;margin-top:0px;"]),
                tC = K.ZP.div.withConfig({
                    displayName: "styled__MemberOnboardingWidgetWrapper",
                    componentId: "sc-758bkj-0"
                })(["border-radius:10px;border:1px solid ", ";background:", ";margin-bottom:16px;", ""], V.O9.n3, V.O9.n1, function(e) {
                    return e.theme.isMobile && tk
                }),
                tO = K.ZP.div.withConfig({
                    displayName: "styled__WidgetHeader",
                    componentId: "sc-758bkj-1"
                })(["padding:0px 16px;height:56px;display:flex;align-items:center;justify-content:space-between;", " > div{&:first-child{display:flex;align-items:center;gap:12px;}&:last-child{display:flex;align-items:center;gap:8px;> button{color:", ";", "}}}> button{height:40px;width:40px;}"], ev.c.t6, V.O9.n5, ev.c.t9),
                tP = K.ZP.div.withConfig({
                    displayName: "styled__WidgetContent",
                    componentId: "sc-758bkj-2"
                })(["border-top:1px solid ", ";padding:16px;display:flex;flex-direction:column;gap:12px;"], V.O9.n3),
                tI = (0, K.iv)(["> button{&:hover{text-decoration:none;}}"]),
                t_ = K.ZP.div.withConfig({
                    displayName: "styled__CompletionItemWrapper",
                    componentId: "sc-758bkj-3"
                })(["display:flex;align-items:center;gap:12px;> button{text-align:left;height:fit-content;", "}", ""], ev.c.t7, function(e) {
                    return e.theme.isMobile && tI
                }),
                tM = K.ZP.div.withConfig({
                    displayName: "styled__IncompleteCircle",
                    componentId: "sc-758bkj-4"
                })(["height:24px;width:24px;border:2px solid ", ";border-radius:50%;"], V.O9.n5),
                tN = K.ZP.div.withConfig({
                    displayName: "styled__CompleteCircle",
                    componentId: "sc-758bkj-5"
                })(["height:24px;width:24px;border-radius:50%;background:", ";padding:4px;> div{height:100%;width:100%;color:", ";}"], V.O9.s2, V.O9.n1),
                tD = function(e, t) {
                    var n = e / 2,
                        r = e / 6,
                        o = (e - r) / 2,
                        i = o * Math.PI * 2,
                        a = t * i / 100;
                    return (0, K.iv)(["height:", "px;width:", "px;> circle{&:first-child{cx:", "px;cy:", "px;r:", "px;fill:none;stroke:", "33;stroke-width:", ";}&:last-child{cx:", "px;cy:", "px;r:", "px;fill:none;stroke:", ";stroke-width:", "px;stroke-linecap:round;stroke-dasharray:", " ", ";transform:rotate(-90deg);transform-origin:", "px ", "px;}}"], e, e, n, n, o, V.O9.s2, r, n, n, o, V.O9.s2, r, a, i - a, n, n)
                },
                tZ = K.ZP.svg.withConfig({
                    displayName: "styled__ProgressCircle",
                    componentId: "sc-758bkj-6"
                })(["", ""], function(e) {
                    return tD(e.$size, e.$progress)
                });

            function tT(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tS(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tT(Object(n), !0).forEach(function(t) {
                        (0, p.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tT(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var tE = function(e) {
                    var t = e.label,
                        n = e.completed,
                        r = e.onClick,
                        o = e.key,
                        i = n ? (0, er.jsx)(tN, {
                            children: (0, er.jsx)(ex.J, {
                                name: "Check"
                            })
                        }) : (0, er.jsx)(tM, {});
                    return (0, er.jsxs)(t_, {
                        children: [i, (0, er.jsx)(eb.z, {
                            label: t,
                            variant: "link",
                            onClick: r,
                            disableRipple: !0,
                            dataTestId: "onboarding-widget-step-".concat(o)
                        })]
                    }, o)
                },
                tF = function(e) {
                    var t = e.daysSinceJoin,
                        n = e.onWobblePost,
                        r = (0, k.bI)("self", "isMobile", "currentGroup"),
                        o = r.dispatch,
                        i = r.isMobile,
                        a = r.self,
                        s = r.currentGroup,
                        l = (0, A.C1)(),
                        c = (0, y.Z)(l, 3),
                        u = c[0],
                        p = c[1],
                        f = c[2],
                        g = (0, A.C1)(),
                        h = (0, y.Z)(g, 3),
                        b = h[0],
                        x = h[1],
                        v = h[2],
                        j = (0, w.useMemo)(function() {
                            return s.metadata.onboardingVideo ? (0, F.W4)(JSON.parse(s.metadata.onboardingVideo)) : th.v
                        }, [s.metadata.onboardingVideo]),
                        C = (0, w.useMemo)(function() {
                            var e = j.videoLengthMs / 1e3;
                            return e < 61 ? "".concat(Math.round(e), " sec") : "".concat(Math.round(e / 60), " min")
                        }, [j]),
                        O = (0, w.useCallback)(function() {
                            if (i && !a.metadata.appD && (M.Z.setUserAppDownloaded({
                                    userID: a.id
                                }), o(U._$, function(e) {
                                    var t = tS({}, e);
                                    return t.metadata.appD = !0, t
                                })), (0, F.Dt)(navigator.userAgent)) {
                                window.open(tj.w, "_blank");
                                return
                            }
                            if ((0, F.gn)(navigator.userAgent)) {
                                window.open(tj.Z, "_blank");
                                return
                            }
                            p()
                        }, [p, i, o, a]),
                        P = (0, w.useCallback)(function() {
                            var e;
                            x(), null != a && null !== (e = a.member) && void 0 !== e && e.metadata.onVw || (M.Z.setMemberOnboardingVideoWatched({
                                memberID: a.member.id
                            }), o(U._$, function(e) {
                                var t = tS({}, e);
                                return t.member.metadata.onVw = !0, t
                            }))
                        }, [x, a, o]),
                        I = (0, w.useMemo)(function() {
                            var e, t, r;
                            return [{
                                key: "video",
                                label: "Watch ".concat(C, " intro video"),
                                completed: null == a || null === (e = a.member) || void 0 === e ? void 0 : e.metadata.onVw,
                                onClick: P
                            }, {
                                key: "comment",
                                label: "Find a post you like and leave a comment",
                                completed: null == a || null === (t = a.member) || void 0 === t ? void 0 : t.metadata.onPc,
                                onClick: n
                            }, {
                                key: "app",
                                label: "Download app",
                                completed: null == a || null === (r = a.metadata) || void 0 === r ? void 0 : r.appD,
                                onClick: O
                            }]
                        }, [a, n, O, P, C]),
                        _ = (0, w.useMemo)(function() {
                            return 100 * Math.max(I.reduce(function(e, t) {
                                return t.completed ? e + 1 : e
                            }, 0) / I.length, .25)
                        }, [I]),
                        N = (0, w.useCallback)((0, d.Z)(m().mark(function e() {
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, M.Z.dismissOnboardingWidget({
                                            memberID: a.member.id
                                        });
                                    case 2:
                                        if (!e.sent.error) {
                                            e.next = 7;
                                            break
                                        }
                                        return o(U.bI, {
                                            message: "Something went wrong, please try again.",
                                            severity: "error"
                                        }), e.abrupt("return");
                                    case 7:
                                        o(U._$, function(e) {
                                            var t = tS({}, e);
                                            return t.member.metadata.onWd = !0, t
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [a, o]),
                        D = (0, w.useMemo)(function() {
                            return 100 !== _ && t < 7 ? null : (0, er.jsx)(eb.z, {
                                variant: "link",
                                label: "Dismiss",
                                onClick: N,
                                disableRipple: !0,
                                dataTestId: "onboarding-widget-dismiss-btn"
                            })
                        }, [_, N, t]),
                        Z = (0, w.useMemo)(function() {
                            return (0, er.jsx)(tP, {
                                children: I.map(function(e) {
                                    return (0, w.createElement)(tE, tS(tS({}, e), {}, {
                                        key: e.key
                                    }))
                                })
                            })
                        }, [I]),
                        T = (0, w.useMemo)(function() {
                            return 100 === _ ? (0, er.jsx)(tN, {
                                children: (0, er.jsx)(ex.J, {
                                    name: "Check"
                                })
                            }) : (0, er.jsxs)(tZ, {
                                $size: 24,
                                $progress: _,
                                children: [(0, er.jsx)("circle", {}), (0, er.jsx)("circle", {})]
                            })
                        }, [_]),
                        S = (0, w.useMemo)(function() {
                            return u ? (0, er.jsx)(tg, {
                                onClose: f
                            }) : null
                        }, [u, f]),
                        E = (0, w.useMemo)(function() {
                            return b ? (0, er.jsx)(tw, {
                                onClose: v
                            }) : null
                        }, [b, v]);
                    return (0, er.jsxs)(er.Fragment, {
                        children: [(0, er.jsxs)(tC, {
                            children: [(0, er.jsxs)(tO, {
                                children: [(0, er.jsxs)("div", {
                                    children: [T, (0, er.jsx)("span", {
                                        children: "Welcome! Start here"
                                    })]
                                }), (0, er.jsx)("div", {
                                    children: D
                                })]
                            }), Z]
                        }), S, E]
                    })
                },
                tG = (0, w.memo)(function(e) {
                    var t, n, r, o = (0, k.bI)("self").self,
                        i = (null == o || null === (t = o.member) || void 0 === t ? void 0 : t.role) === "member",
                        a = null == o || null === (n = o.member) || void 0 === n ? void 0 : n.approvedAt,
                        s = ts()().diff(ts()(a), "days"),
                        l = !a || ts()(a).isBefore(ts()("03/18/2025"));
                    return !i || s > 30 || null != o && null !== (r = o.member) && void 0 !== r && null !== (r = r.metadata) && void 0 !== r && r.onWd || l ? null : (0, er.jsx)(tF, tS({
                        daysSinceJoin: s
                    }, e))
                });

            function tW(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tR(e) {
                var t, n, r, o, i, a, s, l, c, u, f, h = e.category,
                    b = e.page,
                    x = e.total,
                    v = e.currentGroup,
                    O = e.postTrees,
                    I = e.settings,
                    R = e.channelId,
                    V = e.sortType,
                    Y = e.filter,
                    K = e.postName,
                    Q = e.postModal,
                    ee = e.upcomingEvents,
                    et = e.groupCards,
                    en = (0, w.useState)(O),
                    ei = en[0],
                    ea = en[1],
                    es = (0, w.useState)(!1),
                    el = es[0],
                    ec = es[1],
                    eu = (0, w.useState)(!1),
                    ed = eu[0],
                    ep = eu[1],
                    ef = (0, k.bI)("self", "isMobile"),
                    em = ef.dispatch,
                    eg = ef.isMobile,
                    eb = ef.self,
                    ex = (0, w.useState)(0),
                    ev = ex[0],
                    ey = ex[1],
                    ew = (0, w.useState)({}),
                    ej = ew[0],
                    ek = ew[1],
                    eC = (0, C.useRouter)(),
                    eO = (0, w.useRef)(),
                    eP = (0, w.useRef)(),
                    eI = (0, w.useRef)([]),
                    e_ = (0, w.useRef)(!1),
                    eT = (0, w.useRef)(!1),
                    eS = eC.query,
                    eE = (0, g.hK)(eS),
                    eG = null == v ? void 0 : v.labels,
                    eR = (null == v || null === (o = v.metadata) || void 0 === o ? void 0 : o.totalReports) || 0,
                    eB = (null == v || null === (i = v.metadata) || void 0 === i ? void 0 : i.totalRequests) || 0,
                    eq = (null == v || null === (a = v.metadata) || void 0 === a ? void 0 : a.totalPendingDisputes) || 0,
                    e$ = (0, w.useMemo)(function() {
                        var e;
                        return "pin" !== Y ? x : null !== (e = null == ei ? void 0 : ei.filter(function(e) {
                            var t, n;
                            return !!(null != e && null !== (t = e.post) && void 0 !== t && null !== (t = t.metadata) && void 0 !== t && t.pinned) && !!(null != e && null !== (n = e.post) && void 0 !== n && null !== (n = n.metadata) && void 0 !== n && n.hidden)
                        }).length) && void 0 !== e ? e : 0
                    }, [Y, x, ei]),
                    eY = 0 === e$,
                    eK = (0, w.useState)(new Date),
                    e6 = eK[0],
                    e8 = eK[1],
                    e7 = (0, A.C1)(),
                    te = (0, y.Z)(e7, 3),
                    tt = te[0],
                    tn = te[1],
                    tr = te[2],
                    to = (0, w.useState)(!1),
                    ta = to[0],
                    ts = to[1],
                    tl = null == v || null === (s = v.metadata) || void 0 === s ? void 0 : s.offersFp,
                    tc = null == eb || null === (l = eb.member) || void 0 === l || null === (l = l.metadata) || void 0 === l ? void 0 : l.fpGroupId,
                    tu = (null == eb || null === (c = eb.member) || void 0 === c ? void 0 : c.groupId) === v.id && (null == eb || null === (u = eb.member) || void 0 === u ? void 0 : u.role) === "member" && !_()(null == eb || null === (f = eb.member) || void 0 === f || null === (f = f.metadata) || void 0 === f ? void 0 : f.mmbp),
                    td = tl && tu && !tc;
                (0, w.useEffect)(function() {
                    td && (0, T.P3)({
                        eventName: T.qI.partnerBundleBannerImpression,
                        userID: null == eb ? void 0 : eb.id
                    })
                }, [td, null == eb ? void 0 : eb.id]);
                var tp = (0, N.CP)({
                        user: eb,
                        member: null == eb ? void 0 : eb.member,
                        group: v
                    }),
                    tf = (0, w.useMemo)(function() {
                        return (0, N.A3)({
                            user: eb,
                            member: null == eb ? void 0 : eb.member,
                            group: v
                        })
                    }, [v, eb]),
                    tm = (0, w.useMemo)(function() {
                        var e;
                        return (0, F.AL)({
                            user: eb,
                            group: v,
                            member: null == eb ? void 0 : eb.member,
                            labels: null !== (e = null == v ? void 0 : v.labels) && void 0 !== e ? e : []
                        })
                    }, [v, eb]);
                (0, w.useEffect)(function() {
                    var e = setInterval(function() {
                        e8(function(e) {
                            var t = new Date;
                            return t.getMinutes() === e.getMinutes() ? e : t
                        })
                    }, 1e3);
                    return function() {
                        clearInterval(e)
                    }
                }, []);
                var tg = (0, w.useCallback)(function() {
                        return (0, T.P3)({
                            eventName: T.qI.groupFeedUpcomingEvent,
                            userID: null == eb ? void 0 : eb.id
                        })
                    }, [null == eb ? void 0 : eb.id]),
                    th = (0, w.useCallback)(function(e, t) {
                        var n = (0, g.dg)({
                            group: v,
                            eventId: e.id,
                            occurrenceId: e.occurrenceId
                        });
                        return (0, er.jsx)(B.r, {
                            href: n.as,
                            onClick: tg,
                            underline: "hover",
                            children: (0, er.jsx)(eV, {
                                children: e.metadata.title
                            })
                        }, t)
                    }, [v, tg]),
                    tb = (0, w.useMemo)(function() {
                        if (!ee.length) return null;
                        var e = (0, y.Z)(ee, 1)[0],
                            t = new Date(e.startTime).getTime() - e6.getTime(),
                            n = t > 0 ? (0, Z.il)(t) : "now",
                            r = "now" === n,
                            o = [th(e, 0)];
                        if (r && ee.length > 1) {
                            if (o.push((0, er.jsx)(eJ, {
                                    children: " and "
                                })), 2 === ee.length) o.push(th(ee[1], 2));
                            else {
                                var i = (0, g.dg)({
                                    group: v
                                });
                                o.push((0, er.jsx)(B.r, {
                                    href: i.as,
                                    onClick: tg,
                                    underline: "hover",
                                    children: (0, er.jsx)(eV, {
                                        children: P()("other event", ee.length - 1, !0)
                                    })
                                }))
                            }
                        }
                        var a = (0, er.jsx)(e0, {
                            name: "NewCalendar"
                        });
                        if (r) {
                            var s = (0, g.dg)({
                                group: v,
                                eventId: e.id,
                                occurrenceId: e.occurrenceId
                            });
                            a = (0, er.jsx)(B.r, {
                                href: s.as,
                                underline: "none",
                                onClick: tg,
                                children: (0, er.jsx)(H.b, {})
                            })
                        }
                        return (0, er.jsxs)(eW, {
                            $wobble: !r && (0, Z.uv)(t),
                            children: [a, (0, er.jsx)(eA, {
                                children: (0, er.jsxs)(eL, {
                                    children: [(0, er.jsx)(eQ, {
                                        children: o
                                    }), !r && (0, er.jsx)(eJ, {
                                        children: " is happening in ".concat(n)
                                    })]
                                })
                            })]
                        })
                    }, [e6, v, th, ee, tg]),
                    tx = (0, w.useMemo)(function() {
                        if (h) {
                            var e;
                            return null === (e = tm.find(function(e) {
                                return e.id === h
                            })) || void 0 === e ? void 0 : e.id
                        }
                        return 1 === tm.length ? tm[0].id : void 0
                    }, [h, tm]);
                (0, w.useEffect)(function() {
                    Q && em(U.UG, {
                        groupName: v.name,
                        postName: K,
                        rootPost: Q
                    })
                }, [K, Q, em, v]), (0, w.useEffect)(function() {
                    eg || !R || eT.current || (eT.current = !0, (0, S.cq)(eC, (0, g.AZ)({
                        groupName: v.name,
                        category: h,
                        page: b
                    })), em(U.WT, function() {
                        return {
                            chatModalProps: {
                                id: R
                            }
                        }
                    }))
                }, [eg, R, em, h, b, v.name, eC]), (0, w.useEffect)(function() {
                    return e_.current = !0,
                        function() {
                            e_.current = !1
                        }
                }, []), (0, w.useEffect)(function() {
                    var e = (0, D.tv)({
                        key: D.H0.highlightedPost,
                        storage: "sessionStorage"
                    }).value;
                    e && (I.previousPageBack && ek(e), setTimeout(function() {
                        (0, D.pN)({
                            key: D.H0.highlightedPost,
                            storage: "sessionStorage"
                        })
                    }, 1e3))
                }, [I]), (0, w.useEffect)(function() {
                    var e = setInterval(function() {
                        if (eI.current = eI.current.filter(function(e) {
                                var t = e.labelIds || [];
                                return (null == eb ? void 0 : eb.id) !== e.userId && ("" === h || t.includes(h))
                            }), eI.current.length > 0) {
                            var e = eI.current.length;
                            eI.current = [], e_.current && ey(function(t) {
                                return t + e
                            })
                        }
                    }, 2e3);
                    return function() {
                        clearInterval(e)
                    }
                }, [eb, h]), (0, w.useEffect)(function() {
                    if ((0, N.Rj)({
                            member: null == eb ? void 0 : eb.member
                        })) return (0, E.Ld)([(0, E.jT)(v.id)], function(e) {
                        eI.current.push(e)
                    })
                }, [eb, v.id]);
                var tv = (0, w.useCallback)(function() {
                        if (!tf) {
                            tn();
                            return
                        }
                        ep(!eg), ec(!0)
                    }, [eg, tn, tf]),
                    ty = (0, w.useCallback)(function() {
                        ec(!1), eg || ep(!1)
                    }, [eg]),
                    tw = (0, w.useCallback)(function(e) {
                        e.target === eP.current && eO.current && !eO.current.hasChanges() && ty()
                    }, [ty]),
                    tj = (0, G.V)((0, w.useRef)({}).current);
                (0, y.Z)(tj, 1)[0] && !el && (0, z.M)(eb) && tf && tv();
                var tk = (0, w.useCallback)(function(e) {
                        var t = e.post;
                        ty();
                        var n = eg ? "/".concat(v.name, "/post/").concat(t.name) : {
                                pathname: "/[group]",
                                query: {
                                    group: v.name,
                                    postName: t.name
                                }
                            },
                            r = "/".concat(v.name, "/").concat(t.name);
                        em(U.Rq, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? tW(Object(n), !0).forEach(function(t) {
                                    (0, p.Z)(e, t, n[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tW(Object(n)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                })
                            }
                            return e
                        }({}, eC)), eC.push(n, r, {
                            scroll: !1,
                            shallow: !1
                        })
                    }, [v, ty, eg, eC, em]),
                    tC = (0, w.useCallback)(function(e) {
                        (0, S.VF)(eC, (0, g.AZ)({
                            groupName: v.name,
                            sortType: eE,
                            category: h,
                            filter: Y,
                            page: e
                        }))
                    }, [h, null == v ? void 0 : v.name, Y, eC, eE]),
                    tO = (0, w.useCallback)((t = (0, d.Z)(m().mark(function e(t) {
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, M.Z.hidePinnedPost({
                                        postID: t.id
                                    });
                                case 4:
                                    return e.next = 6, (0, S.H5)(eC);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    }), [eC]),
                    tP = (0, w.useCallback)((n = (0, d.Z)(m().mark(function e(t) {
                        var n, r = arguments;
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = !(r.length > 1) || void 0 === r[1] || r[1], t) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return e.next = 5, M.Z.unhidePinnedPost({
                                        postID: t.id
                                    });
                                case 5:
                                    if (!n) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 8, n(eC);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return n.apply(this, arguments)
                    }), [eC]),
                    tI = (0, w.useCallback)(function(e) {
                        !e && ed && ep(!1)
                    }, [ed]),
                    t_ = (0, w.useCallback)(function() {
                        ey(0), (0, S.VF)(eC, (0, g.AZ)({
                            groupName: v.name,
                            category: h,
                            page: 1
                        }))
                    }, [eC, null == v ? void 0 : v.name, h]),
                    tM = (0, w.useCallback)((r = (0, d.Z)(m().mark(function e(t) {
                        var n, r, o, i, a;
                        return m().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.source, r = t.destination, o = t.draggableId, i = n.index, !r || !(i !== (a = r.index))) {
                                        e.next = 14;
                                        break
                                    }
                                    return ea((0, F.WR)({
                                        array: ei,
                                        oldIdx: i,
                                        newIdx: a
                                    })), e.next = 9, M.Z.movePinnedPost({
                                        postID: o,
                                        delta: a - i
                                    });
                                case 9:
                                    if (!e.sent.error) {
                                        e.next = 14;
                                        break
                                    }
                                    return ea(ei), e.abrupt("return", em(U.bI, {
                                        message: "There was an issue with reordering.",
                                        severity: "error"
                                    }));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return r.apply(this, arguments)
                    }), [em, ei]),
                    tN = (0, w.useMemo)(function() {
                        var e = "";
                        switch (Y) {
                            case "pin":
                                return "No pinned posts hidden";
                            case "unr":
                                e = "unread ";
                                break;
                            case "flw":
                                e = "watched "
                        }
                        var t = "No ".concat(e, "posts");
                        return h && (t = "".concat(t, " in this category")), e || h || (t = "This is the start of something special"), (0, er.jsx)(eJ, {
                            children: t
                        })
                    }, [h, Y]),
                    tD = (0, w.useMemo)(function() {
                        if (!eR) return null;
                        var e = (0, g.uK)({
                            group: v
                        });
                        return (0, er.jsx)(B.r, {
                            href: e.as,
                            children: (0, er.jsxs)(eH, {
                                children: [(0, er.jsx)("div", {
                                    children: eR
                                }), (0, er.jsx)("span", {
                                    children: "".concat(P()("post", eR, !1), " reported by members")
                                })]
                            })
                        })
                    }, [eR, v]),
                    tZ = (0, w.useMemo)(function() {
                        if (!eB) return null;
                        var e = (0, g.pd)({
                            group: v
                        });
                        return (0, er.jsx)(B.r, {
                            href: e.as,
                            children: (0, er.jsxs)(eH, {
                                children: [(0, er.jsx)("div", {
                                    children: eB
                                }), (0, er.jsx)("span", {
                                    children: "".concat(P()("membership request", eB, !1), " pending")
                                })]
                            })
                        })
                    }, [eB, v]),
                    tT = (0, w.useMemo)(function() {
                        return eq ? (0, er.jsx)(B.r, {
                            href: "/".concat(v.name, "/-/disputes"),
                            children: (0, er.jsxs)(eH, {
                                children: [(0, er.jsx)("div", {
                                    children: eq
                                }), (0, er.jsx)("span", {
                                    children: P()("disputed payment", eq, !1)
                                })]
                            })
                        }) : null
                    }, [eq, v]),
                    tS = (0, w.useMemo)(function() {
                        if (tD || tZ || tT) return (0, er.jsxs)(eU, {
                            children: [tD, tT, tZ]
                        })
                    }, [tD, tT, tZ]),
                    tE = (0, w.useMemo)(function() {
                        return tS || tb ? (0, er.jsxs)(eF, {
                            children: [tS, tb]
                        }) : (0, er.jsx)(eZ.x, {
                            marginTop: 16
                        })
                    }, [tS, tb]),
                    tF = (0, w.useMemo)(function() {
                        return (null == et ? void 0 : et.some(function(e) {
                            return e.cardType === W.ONBOARDING_INVITE_FRIENDS
                        })) && tp ? (0, er.jsx)(eM, {
                            openInlineForm: tv
                        }) : null
                    }, [tv, et, tp]),
                    tR = (0, w.useCallback)(function() {
                        (0, T.P3)({
                            eventName: T.qI.partnerBundleBannerClick,
                            userID: null == eb ? void 0 : eb.id
                        }), em(U.jV, !0)
                    }, [em, null == eb ? void 0 : eb.id]),
                    tA = (0, w.useCallback)(function() {
                        !1 === ta && (ts(!0), setTimeout(function() {
                            ts(!1)
                        }, 2e3))
                    }, [ta]);
                return (0, er.jsxs)(e1, {
                    children: [el && !eg && (0, er.jsx)(e2, {
                        $showBackdrop: ed,
                        children: (0, er.jsx)(j.df, {
                            rootMargin: "200px 0px 0px 0px",
                            onChange: tI,
                            children: (0, er.jsx)(L.Z, {
                                ref: eO,
                                level: 0,
                                requireTitle: !0,
                                requireLabel: !0,
                                contentPlaceholder: "Write something...",
                                onCancel: ty,
                                onPostCreated: tk,
                                group: v,
                                initialLabel: tx || "",
                                filteredGroupLabels: tm,
                                showPostTemplates: eY
                            })
                        })
                    }), (0, er.jsxs)(eD.s, {
                        children: [(0, er.jsxs)(ez, {
                            children: [(0, er.jsx)(ti, {}), el ? eg ? (0, er.jsx)(L.Z, {
                                level: 0,
                                requireTitle: !0,
                                requireLabel: !0,
                                contentPlaceholder: "Write something...",
                                onCancel: ty,
                                onPostCreated: tk,
                                group: v,
                                initialLabel: tx || "",
                                filteredGroupLabels: tm,
                                showPostTemplates: eY
                            }) : null : (0, er.jsx)(z.Z, {
                                reason: N.lT.AddPost,
                                onSuccess: tv,
                                children: function(e) {
                                    var t = e.onClick;
                                    return (0, er.jsx)(eo, {
                                        onClick: t,
                                        placeholder: "Write something"
                                    })
                                }
                            }), tE, (0, er.jsx)(eh, {
                                allLabels: eG,
                                category: h,
                                sortType: V,
                                filter: Y
                            })]
                        }), ev > 0 && (0, er.jsx)(eX, {
                            onClick: t_,
                            label: "Load ".concat(ev, " new ").concat(P()("post", ev))
                        }), td && (0, er.jsxs)(e3, {
                            onClick: tR,
                            children: [(0, er.jsx)(e5, {
                                src: "https://assets.skool.com/skool/0201616d73844253b190eec44074d129.png"
                            }), "Claim your free Skool community"]
                        }), tF, (0, er.jsx)(tG, {
                            onWobblePost: tA
                        }), e$ > 0 ? (0, er.jsx)(e9, {
                            $wobble: ta,
                            children: (0, er.jsx)(q.Z, {
                                group: v,
                                postTrees: ei,
                                showStats: !0,
                                onPostPinHide: tO,
                                onPostPinUnhide: tP,
                                highlightedPost: ej,
                                removeDuplicates: 1 === b,
                                pinnedPostsOnly: "pin" === Y,
                                draggable: tp && !eg,
                                onDragEnd: tM
                            }, h)
                        }) : !tF && (0, er.jsx)(J.X, {
                            marginTop: 16,
                            marginBottom: 48,
                            paddingLeft: eg ? 10 : void 0,
                            paddingRight: eg ? 10 : void 0,
                            children: (0, er.jsx)(X.Z, {
                                variant: "t7",
                                children: tN
                            })
                        }), e$ > 0 && (0, er.jsx)(eN.t, {
                            currentPage: b,
                            totalCount: e$,
                            pageSize: 30,
                            onChange: tC
                        })]
                    }), (0, er.jsx)(e4, {
                        ref: eP,
                        onClick: tw,
                        $showBackdrop: ed
                    }), tt && (0, er.jsx)($.f, {
                        onClose: tr
                    })]
                })
            }
            tR.defaultProps = {
                postTrees: []
            };
            var tA = n(69652),
                tB = function() {
                    var e = (0, k.bI)("currentGroup", "self", "isMobile"),
                        t = e.currentGroup,
                        n = e.self,
                        r = e.isMobile,
                        o = (0, N.Wr)({
                            member: null == n ? void 0 : n.member,
                            group: t
                        });
                    if (!r) {
                        var i = (0, g.AZ)({
                            groupName: t.name
                        }).as;
                        return window.location.href = i, null
                    }
                    return (0, er.jsx)(tA.Z, {
                        group: t,
                        canAccessGroup: o
                    })
                };

            function tL(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function tq(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tL(Object(n), !0).forEach(function(t) {
                        (0, p.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tL(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function tz(e) {
                return e.tabName === h.t5.GroupDefaultAbout ? (0, er.jsx)(tB, tq({}, e)) : (0, er.jsx)(tR, tq({}, e))
            }
            tz.defaultProps = {
                postTrees: []
            }, tz.getRenderData = (r = (0, d.Z)(m().mark(function e(t) {
                var n, r, o, i, a, s, l, c, u;
                return m().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return n = t.ctx, r = t.apiClient, o = (0, g.Z9)(n.query), i = (0, g.XT)(n.query), a = (0, g.hK)(n.query), s = (0, g.W7)(n.query) || "", l = (0, g.Q2)(n.query) || "", c = (0, g.S0)(n.query) || "", e.next = 9, r.readGroupFeedData({
                                groupName: o,
                                page: i,
                                sort: a || "newest-cm",
                                labels: s ? [s] : [],
                                post: l,
                                filter: c
                            });
                        case 9:
                            return u = e.sent, e.abrupt("return", u);
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return r.apply(this, arguments)
            }), tz.initPage = (o = (0, d.Z)(m().mark(function e(t) {
                var n, r, o, i, a, s, l, c, u, d, p, f, x, v, y, w, j, k, C, O;
                return m().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return i = t.ctx, a = t.props, s = i.query, l = (0, g.W7)(s) || "", c = (0, g.hK)(i.query) || "newest-cm", u = (0, g.S0)(s) || "", d = (0, g.XT)(s), p = a.currentGroup, f = a.renderData, x = (0, g.bR)(s) || "", v = (0, g.Q2)(s) || "", y = a.renderData.postModal || null, w = (0, g.q$)(s) || "", j = f.total || 0, k = f.postTrees || [], 1 === j && 0 === k.length && (j = 0), C = p.metadata.displayName, l && (O = p.labels.find(function(e) {
                                return e.id === l
                            })) && (C = "".concat(p.metadata.displayName, " \xb7 ").concat(O.metadata.displayName)), e.abrupt("return", tq({
                                category: l,
                                sortType: c,
                                page: d,
                                filter: u,
                                total: j,
                                postTrees: k,
                                channelId: x,
                                postName: v,
                                postModal: y,
                                tabName: w,
                                upcomingEvents: (null === (n = a.renderData) || void 0 === n ? void 0 : n.upcomingEvents) || [],
                                leaderboardsData: (null === (r = a.renderData) || void 0 === r ? void 0 : r.leaderboard) || null,
                                groupCards: (null === (o = a.renderData) || void 0 === o ? void 0 : o.groupCards) || [],
                                settings: {
                                    pageTitle: C || "",
                                    pageMeta: {
                                        description: (0, b.Kv)({
                                            content: p.metadata.description
                                        }) || ""
                                    },
                                    mainMenuName: h.K0.GroupDefault,
                                    mainMenuItem: h.t5.GroupDefaultDefaultItem,
                                    showMobileHeaderCard: (!l || l === h.t5.GroupDefaultNewsfeed) && 1 === d,
                                    hideCard: "about" === w && !a.isMobile
                                }
                            }, a));
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return o.apply(this, arguments)
            });
            var t$ = (0, x.Z)((0, v.Z)(tz)),
                tU = n(4730),
                tH = n(15930),
                tV = n(29494),
                tJ = n(90879),
                tY = n(77351),
                tX = (0, K.ZP)(J.X).withConfig({
                    displayName: "styled__Header",
                    componentId: "sc-oft59d-0"
                })(["", ""], ev.c.t6),
                tK = K.ZP.div.withConfig({
                    displayName: "styled__NoResults",
                    componentId: "sc-oft59d-1"
                })(["color:", ";", " ", ""], V.O9.n7, function(e) {
                    return e.theme.isMobile && "padding: 0px 10px"
                }, ev.c.t7),
                tQ = (0, K.ZP)(eb.z).withConfig({
                    displayName: "styled__FollowingButton",
                    componentId: "sc-oft59d-2"
                })(["height:40px;"]),
                t0 = (0, K.ZP)(eb.z).withConfig({
                    displayName: "styled__FollowerButton",
                    componentId: "sc-oft59d-3"
                })(["width:100%;height:40px;", ""], ev.c.t8);

            function t1(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function t2(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? t1(Object(n), !0).forEach(function(t) {
                        (0, p.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t1(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function t4(e) {
                var t = e.page,
                    n = e.items,
                    r = e.total,
                    o = e.showFollowers,
                    i = (0, k.bI)("self", "currentGroup", "isMobile", "currentUser"),
                    a = i.self,
                    s = i.currentGroup,
                    l = i.isMobile,
                    c = i.currentUser,
                    u = i.dispatch,
                    p = (0, C.useRouter)(),
                    f = (0, w.useMemo)(function() {
                        return o ? n.map(function(e) {
                            return t2({
                                following: e.following
                            }, e.src)
                        }) : n.map(function(e) {
                            return t2({
                                following: e.following
                            }, e.dst)
                        })
                    }, [n, o]),
                    b = o ? h.t5.UserProfileFollowers : h.t5.UserProfileFollowing,
                    x = (0, w.useCallback)(function(e) {
                        (0, S.VF)(p, (0, g.sB)({
                            userName: c.name,
                            group: s,
                            tab: b,
                            page: e
                        }))
                    }, [s, c.name, p, b]);
                return (0, er.jsxs)(eD.s, {
                    marginTop: l ? 16 : 0,
                    gap: 16,
                    children: [!l && (0, er.jsx)(tX, {
                        gap: 8,
                        children: o ? "Followers ".concat(r) : "Following ".concat(r)
                    }), r ? (0, er.jsxs)(eD.s, {
                        gap: 16,
                        children: [(0, er.jsx)(tY.Z, {
                            isFollowers: !0,
                            users: f,
                            group: s,
                            actions: function(e) {
                                var t = e.user,
                                    n = (0, w.useState)(!1),
                                    r = n[0],
                                    o = n[1],
                                    i = (0, w.useCallback)((0, d.Z)(m().mark(function e() {
                                        var n, r, i, a, c, d;
                                        return m().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return o(!0), e.next = 3, M.Z.sendChatRequest({
                                                        userId: t.id,
                                                        groupId: s.id
                                                    });
                                                case 3:
                                                    if (r = (n = e.sent).data, (null == (i = n.error) ? void 0 : i.status) !== 429) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return o(!1), e.abrupt("return", u(U.vb, !0));
                                                case 9:
                                                    if (!r) {
                                                        e.next = 21;
                                                        break
                                                    }
                                                    if (c = (a = r.channel).id, d = a.metadata.lastRead, !l) {
                                                        e.next = 18;
                                                        break
                                                    }
                                                    return e.next = 16, (0, S.VF)(p, (0, g.rv)({
                                                        channelId: c,
                                                        chatLastRead: d
                                                    }));
                                                case 16:
                                                    e.next = 19;
                                                    break;
                                                case 18:
                                                    u(U.WT, function() {
                                                        return {
                                                            chatModalProps: {
                                                                id: c,
                                                                lastRead: d
                                                            }
                                                        }
                                                    });
                                                case 19:
                                                    e.next = 22;
                                                    break;
                                                case 21:
                                                    u(U.bI, {
                                                        message: "Chat request error",
                                                        severity: "error"
                                                    });
                                                case 22:
                                                    o(!1);
                                                case 23:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e)
                                    })), [t]),
                                    c = (0, w.useCallback)((0, d.Z)(m().mark(function e() {
                                        return m().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, M.Z.unfollowUser({
                                                        userName: t.id
                                                    });
                                                case 2:
                                                    return e.next = 4, (0, S.H5)(p);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e)
                                    })), [t]),
                                    f = (0, w.useCallback)(function() {
                                        var e = !t.metadata.chatRequest;
                                        return e && s ? (0, er.jsx)(tJ.u, {
                                            content: "".concat(t.firstName, " ").concat(t.lastName, " has chat turned off for ").concat(null == s ? void 0 : s.metadata.displayName),
                                            children: (0, er.jsx)(t0, {
                                                label: "Chat",
                                                disabled: !0,
                                                icon: "ChatOff",
                                                disableRipple: !0,
                                                iconSize: 19
                                            })
                                        }) : e && !s ? (0, er.jsx)(t0, {
                                            label: "Chat",
                                            disabled: !0,
                                            disableRipple: !0,
                                            icon: "ChatOff",
                                            iconSize: 19
                                        }) : (0, er.jsx)(t0, {
                                            variant: "secondary",
                                            label: "Chat",
                                            onClick: i,
                                            icon: "Chat",
                                            iconSize: 19,
                                            loading: r
                                        })
                                    }, [i, t, r]);
                                return a && (null == a ? void 0 : a.id) !== t.id ? t.following ? (0, er.jsxs)(J.X, {
                                    gap: 8,
                                    marginTop: l ? 8 : 0,
                                    children: [(0, er.jsx)(eZ.x, {
                                        children: f()
                                    }), (0, er.jsx)(tV.s, {
                                        header: "Unfollow ".concat(t.firstName, " ").concat(t.lastName),
                                        content: "Are you sure you want to unfollow ".concat(t.firstName, " ").concat(t.lastName, "?"),
                                        confirmLabel: "Unfollow",
                                        onConfirm: c,
                                        children: (0, er.jsx)(tQ, {
                                            typography: "t8",
                                            variant: "secondary",
                                            label: "Following"
                                        })
                                    })]
                                }) : (0, er.jsx)(J.X, {
                                    gap: 8,
                                    marginTop: l ? 8 : 0,
                                    children: f()
                                }) : null
                            },
                            mobileActionsBottom: !0
                        }), (0, er.jsx)(eN.t, {
                            currentPage: t,
                            totalCount: r,
                            pageSize: 30,
                            onChange: x
                        })]
                    }) : (0, er.jsx)(tK, {
                        children: o ? "".concat(c.firstName, " ").concat(c.lastName, " has no followers").concat(s ? " in " + s.metadata.displayName : "") : "".concat(c.firstName, " ").concat(c.lastName, " isn't following anybody").concat(s ? " in " + s.metadata.displayName : "")
                    })]
                })
            }
            t4.initPage = (i = (0, d.Z)(m().mark(function e(t) {
                var n, r, o, i, a, s, l, c;
                return m().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return i = t.props, a = t.showFollowers, s = i.currentUser, l = (a ? s.profileData.totalFollowers : s.profileData.totalFollowing) || 0, c = (null == s || null === (n = s.profileData) || void 0 === n ? void 0 : n.page) || 1, null != s && null !== (r = s.profileData) && void 0 !== r && r.followStats && s.profileData.followStats.forEach(function(e, t) {
                                s.profileData.follows.list[t].following = e
                            }), e.abrupt("return", t2({
                                page: c,
                                total: l,
                                items: (null == s || null === (o = s.profileData) || void 0 === o || null === (o = o.follows) || void 0 === o ? void 0 : o.list) || [],
                                showFollowers: !!a,
                                settings: {
                                    mainMenuName: h.K0.UserProfile,
                                    mainMenuItem: a ? h.t5.UserProfileFollowers : h.t5.UserProfileFollowing,
                                    showMobileHeaderCard: !0,
                                    hideMobileMainMenu: !0
                                }
                            }, i));
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return i.apply(this, arguments)
            });
            var t3 = K.ZP.div.withConfig({
                    displayName: "styled__UserCardGroupSwitcherWrapper",
                    componentId: "sc-8uu5vf-0"
                })(["display:flex;"]),
                t5 = K.ZP.div.withConfig({
                    displayName: "styled__DropdownItem",
                    componentId: "sc-8uu5vf-1"
                })(["display:flex;align-items:center;gap:8px;> div{height:18px;width:18px;}"]),
                t9 = (0, w.memo)(function(e) {
                    var t = e.currentUser,
                        n = e.currentGroup,
                        r = e.dropdownContent,
                        o = (0, w.useState)([]),
                        i = o[0],
                        a = o[1],
                        s = (0, C.useRouter)(),
                        l = s.query;
                    (0, w.useEffect)(function() {
                        (0, d.Z)(m().mark(function e() {
                            var n;
                            return m().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, M.Z.readUserGroups({
                                            userName: t.id,
                                            offset: 0,
                                            limit: 11
                                        });
                                    case 2:
                                        a((null == (n = e.sent.data) ? void 0 : n.groups) || []);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        }))()
                    }, [t]);
                    var c = (0, w.useCallback)(function(e) {
                            var r = e === (null == n ? void 0 : n.id) ? n : i.find(function(t) {
                                return t.id === e
                            });
                            (0, S.VF)(s, (0, g.sB)({
                                userName: t.name,
                                group: r,
                                tab: (0, g.q$)(l)
                            }))
                        }, [n, null == t ? void 0 : t.name, i, l, s]),
                        u = (0, w.useMemo)(function() {
                            var e, t = [];
                            return i.forEach(function(e) {
                                switch (null === (r = e.metadata) || void 0 === r ? void 0 : r.privacy) {
                                    case 0:
                                    case 1:
                                        break;
                                    default:
                                        return
                                }
                                var r, o, i = e.id === (null == n ? void 0 : n.id);
                                t.push({
                                    label: (0, er.jsxs)(t5, {
                                        children: [(0, er.jsx)(ex.J, {
                                            name: (null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.privacy) !== 0 ? "Lock" : "Globe"
                                        }), (0, er.jsx)("span", {
                                            children: e.metadata.displayName
                                        })]
                                    }),
                                    onClick: function() {
                                        return c(e.id)
                                    },
                                    active: i
                                })
                            }), n && !i.find(function(e) {
                                return e.id === n.id
                            }) && t.push({
                                label: (0, er.jsxs)(t5, {
                                    children: [(0, er.jsx)(ex.J, {
                                        name: (null == n || null === (e = n.metadata) || void 0 === e ? void 0 : e.privacy) !== 0 ? "Lock" : "Globe"
                                    }), (0, er.jsx)("span", {
                                        children: n.metadata.displayName
                                    })]
                                }),
                                onClick: function() {
                                    return c(n.id)
                                },
                                active: !0
                            }), t
                        }, [n, i, c]);
                    return (0, er.jsx)(t3, {
                        children: (0, er.jsx)(es.h_, {
                            options: u,
                            label: r
                        })
                    })
                }),
                t6 = n(57231),
                t8 = n(36530),
                t7 = n(11210),
                ne = {
                    free: 1
                },
                nt = {
                    1: "Free",
                    2: "Paid"
                };

            function nn(e, t, n, r) {
                if (t) {
                    var o = JSON.parse(t);
                    return "".concat((0, t7.O5)(o), "/m")
                }
                if (n) {
                    var i = JSON.parse(n);
                    return "".concat((0, t7.O5)(i), "/y")
                }
                if (r) {
                    var a = JSON.parse(r);
                    return "".concat((0, t7.O5)(a), " lifetime")
                }
                return nt[e || ne.free]
            }
            var nr = K.ZP.div.withConfig({
                    displayName: "styled__GroupMembershipsWrapper",
                    componentId: "sc-1jrwo4d-0"
                })(["margin-bottom:32px;"]),
                no = (0, K.iv)(["padding:8px 13px 0;"]),
                ni = K.ZP.h3.withConfig({
                    displayName: "styled__GroupMembershipsTitle",
                    componentId: "sc-1jrwo4d-1"
                })(["", " margin:", ";", ""], ev.c.t6, function(e) {
                    return e.$hasGroups ? "0px 0px 16px 0px" : "0"
                }, function(e) {
                    return e.theme.isMobile && no
                }),
                na = (0, K.iv)(["padding:16px 13px 0px 13px;"]),
                ns = (0, K.iv)(["padding:24px 24px 0px 24px;"]),
                nl = (0, K.iv)(["padding:16px 13px;border-radius:0px;border-top:1px solid ", ";margin-bottom:24px;"], V.O9.n3),
                nc = function(e) {
                    var t = e.hasMore,
                        n = e.theme;
                    return (0, K.iv)(["", " ", " ", ""], n.isMobile && nl, t && ns, n.isMobile && t && na)
                },
                nu = K.ZP.div.withConfig({
                    displayName: "styled__GroupMembershipsCard",
                    componentId: "sc-1jrwo4d-2"
                })(["background:", ";border-radius:10px;border:1px solid ", ";padding:24px;display:flex;flex-direction:column;", ""], V.O9.n1, V.O9.n3, function(e) {
                    return nc(e)
                }),
                nd = K.ZP.div.withConfig({
                    displayName: "styled__GroupMembershipItems",
                    componentId: "sc-1jrwo4d-3"
                })(["display:flex;flex-wrap:wrap;gap:16px 29px;"]),
                np = (0, K.iv)(["width:100%;"]),
                nf = K.ZP.div.withConfig({
                    displayName: "styled__GroupMembershipItem",
                    componentId: "sc-1jrwo4d-4"
                })(["width:215px;display:flex;gap:8px;align-items:center;> div{display:flex;flex-direction:column;> p{margin:0px;color:", ";", "}}", ""], V.O9.n5, ev.c.t11, function(e) {
                    return e.theme.isMobile && np
                }),
                nm = K.ZP.div.withConfig({
                    displayName: "styled__MoreGroupsWrapper",
                    componentId: "sc-1jrwo4d-5"
                })(["width:100%;border-top:1px solid ", ";margin-top:24px;display:flex;justify-content:center;padding:8px 0px;> button{height:24px;", ";}"], V.O9.n3, ev.c.t7),
                ng = (0, w.memo)(function() {
                    var e = (0, w.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, k.bI)("currentUser", "self"),
                        o = r.currentUser,
                        i = r.self,
                        a = (0, w.useMemo)(function() {
                            var e;
                            return (null == o || null === (e = o.profileData) || void 0 === e ? void 0 : e.groupsMemberOf) || []
                        }, [o]),
                        s = (0, w.useCallback)(function(e, t) {
                            var n, r = null !== (n = null == e ? void 0 : e.metadata) && void 0 !== n ? n : {},
                                o = r.totalMembers,
                                i = r.currentMBp,
                                a = nn(r.lpAccessType, i, r.currentABp, r.currentOtBp);
                            return (0, er.jsxs)(nf, {
                                children: [(0, er.jsx)(t8.F, {
                                    group: e,
                                    size: 41,
                                    radius: 10
                                }), (0, er.jsxs)("div", {
                                    children: [(0, er.jsx)(t6.D, {
                                        group: e,
                                        desktopTypography: "t10",
                                        mobileTypography: "t10"
                                    }), (0, er.jsx)("p", {
                                        children: "".concat((0, F.TN)(o), " ").concat(P()("member", o), " • ").concat(a)
                                    })]
                                })]
                            }, t)
                        }, []),
                        l = (0, w.useCallback)(function() {
                            n(!0)
                        }, []),
                        c = (0, w.useMemo)(function() {
                            return a.length < 10 || t ? null : (0, er.jsx)(nm, {
                                children: (0, er.jsx)(eb.z, {
                                    variant: "link",
                                    onClick: l,
                                    label: "+ ".concat(a.length - 9, " more")
                                })
                            })
                        }, [l, a, t]),
                        u = (0, w.useMemo)(function() {
                            var e = t ? a : a.slice(0, 9);
                            return (0, er.jsx)(nd, {
                                children: e.map(s)
                            })
                        }, [a, s, t]),
                        d = (0, w.useMemo)(function() {
                            var e;
                            return i && (null == i ? void 0 : i.id) !== (null == o ? void 0 : o.id) ? "Memberships (".concat(null == o || null === (e = o.profileData) || void 0 === e ? void 0 : e.totalSharedGroups, " in common)") : "Memberships"
                        }, [i, o]),
                        p = !!a.length;
                    return (0, er.jsxs)(nr, {
                        children: [(0, er.jsx)(ni, {
                            $hasGroups: p,
                            children: d
                        }), p && (0, er.jsxs)(nu, {
                            hasMore: !!c,
                            children: [u, c]
                        })]
                    })
                }),
                nh = n(22667),
                nb = K.ZP.div.withConfig({
                    displayName: "styled__Weekday",
                    componentId: "sc-6vgikj-0"
                })(["color:", ";position:absolute;user-select:none;left:", ";top:", "px;", ";"], V.O9.n5, function(e) {
                    var t = e.theme;
                    return "".concat(t.isMobile ? 13 : 16, "px")
                }, function(e) {
                    return e.$top
                }, ev.c.t11),
                nx = K.ZP.div.withConfig({
                    displayName: "styled__Square",
                    componentId: "sc-6vgikj-1"
                })(["height:11px;width:11px;background-color:", ";margin-right:2px;border-radius:2px;"], function(e) {
                    return e.$backgroundColor
                }),
                nv = K.ZP.div.withConfig({
                    displayName: "styled__HeatmapWrapper",
                    componentId: "sc-6vgikj-2"
                })(["background-color:", ";border:1px solid ", ";border-radius:", ";position:relative;padding:", ";"], V.O9.n1, V.O9.n3, function(e) {
                    return e.theme.isMobile ? "0px" : "10px"
                }, function(e) {
                    return e.$padding
                }),
                ny = K.ZP.div.withConfig({
                    displayName: "styled__LegendText",
                    componentId: "sc-6vgikj-3"
                })(["color:", ";user-select:none;", ";"], V.O9.n5, ev.c.t11),
                nw = (0, K.iv)(["padding-left:13px;"]),
                nj = K.ZP.div.withConfig({
                    displayName: "styled__HeatmapHeader",
                    componentId: "sc-6vgikj-4"
                })(["", ";", ";"], function(e) {
                    return e.theme.isMobile && nw
                }, ev.c.t6),
                nk = K.ZP.span.withConfig({
                    displayName: "styled__WhatIsThisLink",
                    componentId: "sc-6vgikj-5"
                })(["color:", ";cursor:pointer;&:hover{text-decoration:underline;}", ";"], V.O9.n5, ev.c.t11),
                nC = [{
                    color: "rgba(0,143,83,1)",
                    min: 10
                }, {
                    color: "rgba(0,143,83,0.7)",
                    min: 6
                }, {
                    color: "rgba(0,143,83,0.5)",
                    min: 3
                }, {
                    color: "rgba(0,143,83,0.3)",
                    min: 1
                }, {
                    color: V.O9.n3,
                    min: 0
                }],
                nO = (0, w.memo)(function(e) {
                    var t = e.data,
                        n = e.createdAt,
                        r = (0, w.useState)(nC),
                        o = r[0],
                        i = r[1],
                        a = (0, A.C1)(),
                        s = (0, y.Z)(a, 3),
                        l = s[0],
                        c = s[1],
                        u = s[2],
                        d = (0, k.bI)("isMobile").isMobile,
                        p = (0, w.useCallback)(function(e, t) {
                            if (!d) {
                                e.preventDefault();
                                var n = prompt("Want to try a different color?", o[t].color);
                                n && i(function(e) {
                                    var r = (0, ei.Z)(e);
                                    return r[t].color = n, r
                                })
                            }
                        }, [o, d]),
                        f = (0, w.useMemo)(function() {
                            return (0, er.jsxs)(er.Fragment, {
                                children: [(0, er.jsx)(nb, {
                                    $top: 39,
                                    children: "Mon"
                                }, "week-mon"), (0, er.jsx)(nb, {
                                    $top: 65,
                                    children: "Wed"
                                }, "week-wed"), (0, er.jsx)(nb, {
                                    $top: 91,
                                    children: "Fri"
                                }, "week-fri"), (0, er.jsx)(nb, {
                                    $top: 117,
                                    children: "Sun"
                                }, "week-sun")]
                            })
                        }, []),
                        m = (0, w.useMemo)(function() {
                            for (var e = [], t = function(t) {
                                    var n = 0 === o[t].min ? "No activities" : "".concat(o[t].min, "+ activities");
                                    e.push((0, er.jsx)(tJ.u, {
                                        content: n,
                                        placement: "bottom",
                                        children: (0, er.jsx)(nx, {
                                            $backgroundColor: o[t].color,
                                            onDoubleClick: function(e) {
                                                return p(e, t)
                                            }
                                        })
                                    }, t))
                                }, n = o.length - 1; n >= 0; n--) t(n);
                            return (0, er.jsxs)(J.X, {
                                alignItems: "center",
                                gap: 8,
                                children: [(0, er.jsx)(ny, {
                                    children: "Less"
                                }), (0, er.jsx)(J.X, {
                                    children: e
                                }), (0, er.jsx)(ny, {
                                    children: "More"
                                })]
                            })
                        }, [o, p]);
                    return (0, er.jsxs)(eD.s, {
                        gap: 16,
                        marginBottom: d ? 24 : 32,
                        marginTop: d ? 14 : 0,
                        children: [(0, er.jsx)(nj, {
                            children: "Activity"
                        }), (0, er.jsxs)(nv, {
                            $padding: "".concat(16, "px ").concat(d ? 13 : 24, "px ").concat(16, "px ").concat(d ? 13 : 58, "px"),
                            children: [f, (0, er.jsx)(eZ.x, {
                                marginBottom: 16,
                                marginLeft: d ? 42 : 0,
                                children: (0, er.jsx)(nh.x, {
                                    startDate: ts().utc(t.startDate),
                                    counts: t.counts,
                                    ranks: o,
                                    since: n ? ts()(n).utc().startOf("day") : void 0
                                })
                            }), (0, er.jsxs)(J.X, {
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: d ? 32 : 0,
                                children: [(0, er.jsx)(nk, {
                                    onClick: c,
                                    children: "What is this?"
                                }), m]
                            }), (0, er.jsxs)(tf.u_, {
                                size: "small",
                                open: l,
                                onClose: u,
                                shouldFullscreenOnMobile: !0,
                                children: [(0, er.jsx)(tf.xB, {
                                    style: {
                                        paddingTop: d ? 32 : void 0
                                    },
                                    children: "Daily activity"
                                }), (0, er.jsx)(tf.fe, {
                                    children: (0, er.jsxs)(eD.s, {
                                        gap: 16,
                                        children: [(0, er.jsx)("div", {
                                            children: "The daily activity chart is a visual display of your activity on Skool over the past year. Activities that contribute towards this chart include liking posts, writing posts, commenting on posts and voting on polls."
                                        }), (0, er.jsx)("div", {
                                            children: "Activities are timestamped according to Coordinated Universal Time (UTC) rather than your local time zone."
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                }),
                nP = (0, K.iv)(["border-top:1px solid ", ";border-bottom:1px solid ", ";border-left:initial;border-right:initial;border-radius:0;margin-bottom:24px;"], V.O9.n3, V.O9.n3),
                nI = K.ZP.div.withConfig({
                    displayName: "styled__OwnerGroupsWrapper",
                    componentId: "sc-1ovs7t4-0"
                })(["display:flex;flex-direction:column;margin-bottom:32px;background:", ";border-radius:10px;border:1px solid ", ";", " > button{align-self:center;", "}"], V.O9.n1, V.O9.n3, function(e) {
                    return e.theme.isMobile && nP
                }, ev.c.t7),
                n_ = K.ZP.div.withConfig({
                    displayName: "styled__OwnerGroupItem",
                    componentId: "sc-1ovs7t4-1"
                })(["display:flex;flex-direction:column;margin:24px 24px 0px 24px;padding-bottom:24px;border-bottom:", ";gap:", ";> p{margin:0px;", "}"], function(e) {
                    return e.$isLast ? "initial" : "1px solid ".concat(V.O9.n3)
                }, function(e) {
                    return e.$emptyContent ? "0px" : "16px"
                }, ev.c.t7),
                nM = K.ZP.div.withConfig({
                    displayName: "styled__MobileOwnerGroupItem",
                    componentId: "sc-1ovs7t4-2"
                })(["display:flex;flex-direction:column;padding:16px 13px;gap:", ";> p{margin:0px;", "}> span{color:", ";", "}"], function(e) {
                    return e.$emptyContent ? "0px" : "16px"
                }, ev.c.t7, V.O9.n5, ev.c.t11),
                nN = K.ZP.div.withConfig({
                    displayName: "styled__MobileOwnerGroupItemTop",
                    componentId: "sc-1ovs7t4-3"
                })(["display:flex;align-items:center;gap:8px;margin-bottom:", ";> div{display:flex;flex-direction:column;flex:1;> p{margin:0px;color:", ";", ";}}> a{align-self:flex-start;}"], function(e) {
                    return e.$emptyContent ? "16px" : "0px"
                }, V.O9.n5, ev.c.t11),
                nD = K.ZP.div.withConfig({
                    displayName: "styled__OwnerGroupItemTop",
                    componentId: "sc-1ovs7t4-4"
                })(["display:flex;align-items:center;gap:16px;> div{display:flex;flex-direction:column;gap:4px;flex:1;> p{margin:0px;color:", ";", ";}}> a{align-self:flex-start;}"], V.O9.n5, ev.c.t7),
                nZ = (0, K.iv)(["padding:0px 13px 16px;margin:0px;"]),
                nT = K.ZP.h3.withConfig({
                    displayName: "styled__OwnerGroupsTitle",
                    componentId: "sc-1ovs7t4-5"
                })(["margin:0px 0px 16px 0px;", " ", ""], ev.c.t6, function(e) {
                    return e.theme.isMobile && nZ
                }),
                nS = K.ZP.div.withConfig({
                    displayName: "styled__GroupDetails",
                    componentId: "sc-1ovs7t4-6"
                })(["", ";color:", ";"], ev.c.t7, V.O9.n5),
                nE = (0, w.memo)(function() {
                    var e = (0, w.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, k.bI)("currentUser", "isMobile"),
                        o = r.currentUser,
                        i = r.isMobile,
                        a = (0, w.useMemo)(function() {
                            var e;
                            return (null == o || null === (e = o.profileData) || void 0 === e ? void 0 : e.groupsCreatedByUser) || []
                        }, [o]),
                        s = (0, w.useCallback)(function(e, t) {
                            var n, r, o, i, a, s = null !== (n = null == e ? void 0 : e.metadata) && void 0 !== n ? n : {},
                                l = s.totalMembers,
                                c = s.currentMBp,
                                u = nn(s.lpAccessType, c, s.currentABp, s.currentOtBp);
                            return (0, er.jsxs)(nM, {
                                $emptyContent: !(null != e && null !== (r = e.metadata) && void 0 !== r && r.description),
                                children: [(0, er.jsxs)(nN, {
                                    $emptyContent: !(null != e && null !== (o = e.metadata) && void 0 !== o && o.description),
                                    children: [(0, er.jsx)(t8.F, {
                                        group: e,
                                        size: 60,
                                        radius: 10
                                    }), (0, er.jsxs)("div", {
                                        children: [(0, er.jsx)(t6.D, {
                                            group: e
                                        }), (0, er.jsx)(nS, {
                                            children: "".concat(null != e && null !== (i = e.metadata) && void 0 !== i && i.privacy ? "Private" : "Public", " • ").concat((0, F.TN)(l), " • ").concat(u)
                                        })]
                                    })]
                                }), (0, er.jsx)("p", {
                                    children: null == e || null === (a = e.metadata) || void 0 === a ? void 0 : a.description
                                }), (0, er.jsx)(eb.z, {
                                    label: "View",
                                    href: "/".concat(null == e ? void 0 : e.name)
                                })]
                            }, t)
                        }, []),
                        l = (0, w.useCallback)(function(e, t) {
                            var n, r, o, i = null !== (n = null == e ? void 0 : e.metadata) && void 0 !== n ? n : {},
                                s = i.totalMembers,
                                l = i.currentMBp,
                                c = nn(i.lpAccessType, l, i.currentABp, i.currentOtBp);
                            return (0, er.jsxs)(n_, {
                                $emptyContent: !(null != e && null !== (r = e.metadata) && void 0 !== r && r.description),
                                $isLast: t + 1 === a.length,
                                children: [(0, er.jsxs)(nD, {
                                    children: [(0, er.jsx)(t8.F, {
                                        group: e,
                                        size: 60
                                    }), (0, er.jsxs)("div", {
                                        children: [(0, er.jsx)(t6.D, {
                                            group: e
                                        }), (0, er.jsx)("p", {
                                            children: "".concat((0, F.TN)(s), " ").concat(P()("member", s), " • ").concat(c)
                                        })]
                                    }), (0, er.jsx)(eb.z, {
                                        label: "View",
                                        href: "/".concat(null == e ? void 0 : e.name)
                                    })]
                                }), (0, er.jsx)("p", {
                                    children: null == e || null === (o = e.metadata) || void 0 === o ? void 0 : o.description
                                })]
                            }, t)
                        }, [a]),
                        c = (0, w.useMemo)(function() {
                            var e = t ? a : a.slice(0, 2),
                                n = i ? s : l;
                            return e.map(n)
                        }, [l, s, t, i, a]),
                        u = (0, w.useCallback)(function() {
                            n(!0)
                        }, []),
                        d = (0, w.useMemo)(function() {
                            var e = a.length - 2;
                            return t || e < 1 ? null : (0, er.jsx)(eb.z, {
                                style: {
                                    height: "auto",
                                    margin: i ? "0 auto 16px" : "12px auto"
                                },
                                label: "+".concat(e, " more"),
                                onClick: u,
                                variant: "link"
                            })
                        }, [t, u, a, i]);
                    return null != a && a.length ? (0, er.jsxs)(er.Fragment, {
                        children: [(0, er.jsx)(nT, {
                            children: "Owned by ".concat(o.firstName)
                        }), (0, er.jsxs)(nI, {
                            children: [c, d]
                        })]
                    }) : null
                }),
                nF = K.ZP.div.withConfig({
                    displayName: "styled__UserProfilePostsWrapper",
                    componentId: "sc-gybf49-0"
                })(["display:flex;flex-direction:column;"]),
                nG = (0, K.iv)(["flex-direction:column;padding:0px 13px;gap:8px;"]),
                nW = K.ZP.div.withConfig({
                    displayName: "styled__ContributionTitleRow",
                    componentId: "sc-gybf49-1"
                })(["display:flex;justify-content:space-between;margin-bottom:32px;", " ", ""], ev.c.t6, function(e) {
                    return e.theme.isMobile && nG
                }),
                nR = K.ZP.div.withConfig({
                    displayName: "styled__ContributionDropdownLabel",
                    componentId: "sc-gybf49-2"
                })(["max-width:208px;", " ", " > span{", "}"], ev.c.t11, ev.c.ellipsis, ev.c.t10),
                nA = (0, K.iv)(["padding:0px 10px;"]),
                nB = K.ZP.div.withConfig({
                    displayName: "styled__NoContributionText",
                    componentId: "sc-gybf49-3"
                })(["display:flex;margin-bottom:16px;flex-wrap:wrap;", " ", ""], ev.c.t7, function(e) {
                    return e.theme.isMobile && nA
                }),
                nL = K.ZP.div.withConfig({
                    displayName: "styled__ContributionFilterItems",
                    componentId: "sc-gybf49-4"
                })(["display:flex;height:40px;gap:8px;"]);

            function nq(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var nz = function(e) {
                var t, n, r, o = e.postTrees,
                    i = e.total,
                    a = e.page,
                    s = (0, k.bI)("currentGroup", "currentUser"),
                    l = s.currentGroup,
                    c = s.currentUser,
                    u = (0, C.useRouter)(),
                    d = (null == c || null === (t = c.profileData) || void 0 === t ? void 0 : t.filter) || "",
                    p = null == c || null === (n = c.profileData) || void 0 === n ? void 0 : n.dailyActivities,
                    f = null == c ? void 0 : c.createdAt,
                    m = (0, w.useCallback)(function(e) {
                        (0, S.VF)(u, (0, g.sB)({
                            userName: c.name,
                            group: l,
                            filter: d,
                            page: e
                        }))
                    }, [u, c, l, d]),
                    h = {};
                null != c && null !== (r = c.profileData) && void 0 !== r && r.groupLabels && Object.keys(c.profileData.groupLabels).forEach(function(e) {
                    h[e.toLowerCase()] = c.profileData.groupLabels[e]
                });
                var b = (0, w.useMemo)(function() {
                        return i > 0 ? (0, er.jsxs)(er.Fragment, {
                            children: [(0, er.jsx)(q.Z, {
                                postTrees: o,
                                group: l,
                                showStats: !0
                            }), (0, er.jsx)(eN.t, {
                                currentPage: a,
                                totalCount: i,
                                pageSize: 10,
                                onChange: m
                            })]
                        }) : l ? (0, er.jsxs)(nB, {
                            style: {
                                flexWrap: "wrap"
                            },
                            children: [(0, er.jsxs)("span", {
                                children: ["".concat(c.firstName, " ").concat(c.lastName), "\xa0"]
                            }), (0, er.jsx)("span", {
                                children: "hasn't contributed ".concat(l ? " to " + l.metadata.displayName : "", " yet.")
                            })]
                        }) : void 0
                    }, [l, a, m, i, o, c]),
                    x = (0, w.useMemo)(function() {
                        var e;
                        return l ? "".concat(P()("contribution", i, !0), " to ").concat(null == l || null === (e = l.metadata) || void 0 === e ? void 0 : e.displayName) : "Contributions"
                    }, [l, i]),
                    v = (0, w.useMemo)(function() {
                        var e;
                        return l ? (0, er.jsxs)(nR, {
                            children: ["Contributions for: ", (0, er.jsx)("span", {
                                children: null == l || null === (e = l.metadata) || void 0 === e ? void 0 : e.displayName
                            })]
                        }) : (0, er.jsx)(nR, {
                            children: "Select a group to see contributions"
                        })
                    }, [l]),
                    y = (0, w.useMemo)(function() {
                        return [{
                            label: "Posts and comments",
                            active: !d,
                            link: (0, g.sB)({
                                userName: c.name,
                                group: l
                            }).as
                        }, {
                            label: "Just posts",
                            active: "posts" === d,
                            link: (0, g.sB)({
                                userName: c.name,
                                group: l,
                                filter: "posts"
                            }).as
                        }]
                    }, [l, c, d]);
                return (0, er.jsxs)(nF, {
                    children: [!!p && (0, er.jsx)(nO, {
                        data: p,
                        createdAt: f
                    }), (0, er.jsx)(nE, {}), (0, er.jsx)(ng, {}), (0, er.jsxs)(nW, {
                        children: [x, (0, er.jsxs)(nL, {
                            children: [(0, er.jsx)(t9, {
                                currentUser: c,
                                currentGroup: l,
                                dropdownContent: (0, er.jsx)("div", {
                                    children: v
                                })
                            }), (0, er.jsx)(es.h_, {
                                icon: "NewFilter",
                                variant: "icon-round",
                                options: y
                            })]
                        })]
                    }), b]
                })
            };
            nz.defaultProps = {
                postTrees: []
            }, nz.initPage = (a = (0, d.Z)(m().mark(function e(t) {
                var n, r, o, i, a, s, l;
                return m().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return l = (null === (n = (s = (a = t.props).currentUser).profileData) || void 0 === n || null === (n = n.posts) || void 0 === n ? void 0 : n.total) || 0, e.abrupt("return", function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? nq(Object(n), !0).forEach(function(t) {
                                        (0, p.Z)(e, t, n[t])
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nq(Object(n)).forEach(function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    })
                                }
                                return e
                            }({
                                total: l,
                                hasMore: (null === (r = s.profileData) || void 0 === r || null === (r = r.posts) || void 0 === r ? void 0 : r.hasMore) || !1,
                                postTrees: (null === (o = s.profileData) || void 0 === o || null === (o = o.posts) || void 0 === o ? void 0 : o.posts) || [],
                                totalGroups: (null === (i = s.profileData) || void 0 === i ? void 0 : i.totalGroups) || 0,
                                settings: {
                                    mainMenuName: h.K0.UserProfile,
                                    mainMenuItem: h.t5.UserProfilePosts,
                                    showMobileHeaderCard: !0,
                                    hideMobileMainMenu: !0
                                }
                            }, a));
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return a.apply(this, arguments)
            });
            var n$ = n(21179),
                nU = n(32767),
                nH = n(71734),
                nV = (0, K.iv)(["padding:0px 16px;text-align:center;"]),
                nJ = K.ZP.div.withConfig({
                    displayName: "styled__BlockedUserWrapper",
                    componentId: "sc-lkh47p-0"
                })(["> h2{margin:0px 0px 8px 0px;", "}> p{margin:0px;", "}", ""], ev.c.t2, ev.c.t7, function(e) {
                    return e.theme.isMobile && nV
                }),
                nY = n(23844),
                nX = ["user"];

            function nK(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function nQ(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? nK(Object(n), !0).forEach(function(t) {
                        (0, p.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nK(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var n0 = nQ(nQ({}, ev.w.t7), {}, {
                padding: "10.5px 15px",
                color: V.O9.n5
            });

            function n1(e) {
                var t = e.currentUser,
                    n = e.currentGroup,
                    r = e.self,
                    o = e.msg,
                    i = (0, k.bI)("isMobile"),
                    a = i.isMobile,
                    s = i.dispatch,
                    l = (0, w.useRef)(!1),
                    c = (0, w.useState)(!1),
                    u = c[0],
                    p = c[1],
                    f = (0, C.useRouter)(),
                    b = f.query,
                    x = (0, g.q$)(b),
                    v = (0, g.XT)(b),
                    j = (0, A.C1)(),
                    O = (0, y.Z)(j, 3),
                    P = O[0],
                    I = O[1],
                    _ = O[2];
                (0, w.useEffect)(function() {
                    var e = (0, g.wg)(b);
                    (null == t ? void 0 : t.id) === e && (0, S.gx)(f, (0, g.sB)({
                        userName: t.name,
                        group: n,
                        tab: x,
                        page: v
                    }))
                }, [n, x, v, f, t, b]), (0, w.useEffect)(function() {
                    o && !l.current && (l.current = !0, M.Z.markMessageAsRead({
                        messageID: o
                    }), (0, S.cq)(f, (0, g.sB)({
                        userName: t.name,
                        group: n,
                        tab: x,
                        page: v
                    })))
                }, [o, n, t.name, x, f, v]), (0, w.useEffect)(function() {
                    if (a) {
                        var e = function() {
                            p(window.scrollY > 200)
                        };
                        return window.addEventListener("scroll", e),
                            function() {
                                window.removeEventListener("scroll", e)
                            }
                    }
                }, [a]);
                var Z = (0, w.useCallback)(function() {
                        s(U.wj, nQ(nQ({}, t.profileData), t))
                    }, [s, t]),
                    T = (0, w.useCallback)(function() {
                        (0, D.pN)({
                            key: D.H0.inviteCode
                        }), (0, D.pN)({
                            key: D.H0.onboardingSkipped
                        }), (0, nH.Lx)({
                            message: "Logged out"
                        }), M.Z.logout()
                    }, []),
                    E = (0, w.useMemo)(function() {
                        if (!a) return null;
                        var e, o, i = [{
                            label: "Copy profile link",
                            onClick: (e = (0, d.Z)(m().mark(function e() {
                                var r, o;
                                return m().wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = (0, g.sB)({
                                                userName: t.name,
                                                group: n
                                            }).as, o = "".concat(location.origin).concat(r), e.next = 4, navigator.clipboard.writeText(o);
                                        case 4:
                                            s(U.bI, {
                                                message: "Profile link copied"
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            })), function() {
                                return e.apply(this, arguments)
                            })
                        }];
                        return (null == r ? void 0 : r.id) === (null == t ? void 0 : t.id) ? i.push({
                            label: "Settings",
                            link: (0, g.tL)({}).as
                        }, {
                            label: "Affiliates",
                            link: (0, g.tL)({
                                tab: "referrals"
                            }).as
                        }, {
                            type: "divider",
                            dividerStyle: {
                                padding: "0px 16px"
                            }
                        }, {
                            label: "Help center",
                            link: "https://help.skool.com/",
                            newTab: !0,
                            style: n0
                        }, {
                            label: "Log out",
                            onClick: T,
                            confirmAction: {
                                header: "Log out",
                                content: "Are you sure you want to log out?",
                                confirmLabel: "Log out"
                            },
                            style: n0
                        }) : (0, N.q2)({
                            group: n,
                            user: r,
                            member: null == r ? void 0 : r.member
                        }) && (0, N.cD)({
                            member: null == t || null === (o = t.profileData) || void 0 === o ? void 0 : o.member,
                            group: n
                        }) && i.push({
                            label: "Membership settings",
                            onClick: Z
                        }), (null == r ? void 0 : r.id) !== t.id && i.push({
                            label: "Report user",
                            onClick: I
                        }), i
                    }, [a, r, t, n, s, Z, T, I]),
                    F = (0, w.useMemo)(function() {
                        if (!a) return null;
                        if (u && n) {
                            var e = null != t ? t : {},
                                r = e.firstName,
                                o = e.lastName;
                            return {
                                title: (0, er.jsxs)(nU.s, {
                                    scrollOnClick: !0,
                                    children: [r, " ", o]
                                }),
                                dropdownOptions: E
                            }
                        }
                        return {
                            withDefaultTitle: !0,
                            dropdownOptions: E
                        }
                    }, [t, n, a, E, u]),
                    G = (0, w.useMemo)(function() {
                        return a ? (0, er.jsx)(nY.y, {
                            open: P,
                            onClose: _
                        }) : null
                    }, [_, a, P]);
                (0, n$.l)(n$.C.PROFILE, F);
                var W = (0, w.useMemo)(function() {
                    switch (x) {
                        case h.t5.UserProfileFollowers:
                            return (0, er.jsx)(t4, nQ({
                                showFolllowers: !0
                            }, e));
                        case h.t5.UserProfileFollowing:
                            return (0, er.jsx)(t4, nQ({
                                showFolllowers: !1
                            }, e));
                        default:
                            return (0, er.jsx)(nz, nQ({}, e))
                    }
                }, [e, x]);
                return null != t && t.blocked ? (0, er.jsxs)(nJ, {
                    children: [(0, er.jsx)("h2", {
                        children: "Account suspended"
                    }), (0, er.jsxs)("p", {
                        children: ["Skool suspends accounts that break our ", (0, er.jsx)(B.r, {
                            href: "/legal",
                            label: "Community guidelines.",
                            newTab: !0
                        })]
                    })]
                }) : (0, er.jsxs)(er.Fragment, {
                    children: [W, G]
                })
            }

            function n2(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function n4(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n2(Object(n), !0).forEach(function(t) {
                        (0, p.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : n2(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function n3(e) {
                return e.currentUser ? (0, er.jsx)(n1, n4({}, e)) : (0, er.jsx)(t$, n4({}, e))
            }
            n1.getRenderData = (s = (0, d.Z)(m().mark(function e(t) {
                var n, r, o, i, a, s, l, c, u, d, p, f, b, x;
                return m().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r = t.ctx, o = t.apiClient, i = (0, g.wg)(r.query), a = (0, g.Z9)(r.query), s = (0, g.XT)(r.query), l = (0, g.S0)(r.query), c = (0, g.q$)(r.query) || h.t5.UserProfileDefaultItem, !((0, F.gI)(r.req.headers["user-agent"]) || (0, F.ze)(r.req.headers["user-agent"])) || !(0, F.RI)(r).search) {
                                e.next = 11;
                                break
                            }
                            return u = (0, g.sB)({
                                userName: i
                            }).as, e.abrupt("return", {
                                redirect: {
                                    destination: u,
                                    permanent: !1
                                }
                            });
                        case 11:
                            return e.next = 13, o.readUserProfileData({
                                userName: i,
                                groupName: a,
                                page: s,
                                tabName: c,
                                filter: l
                            });
                        case 13:
                            if (p = (d = e.sent).data, f = d.error, !((b = null == p || null === (n = p.common) || void 0 === n ? void 0 : n.group) && !(0, N.cD)({
                                    member: null == p ? void 0 : p.member,
                                    group: b
                                }) || f && 423 === f.status)) {
                                e.next = 21;
                                break
                            }
                            return x = (0, g.sB)({
                                userName: i,
                                tab: c
                            }).as, e.abrupt("return", {
                                redirect: {
                                    destination: x,
                                    permanent: !1
                                }
                            });
                        case 21:
                            return e.abrupt("return", {
                                data: p,
                                error: f
                            });
                        case 22:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return s.apply(this, arguments)
            }), n1.initPage = (l = (0, d.Z)(m().mark(function e(t) {
                var n, r, o, i, a, s, l, c, u, d, p, f, x, v, y, w, j;
                return m().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.ctx, r = t.props, o = t.apiClient, i = n.query, a = (0, g.wg)(i), s = (0, g.KW)(i) || "", a) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", nQ({
                                settings: {
                                    error: {
                                        status: 404
                                    }
                                }
                            }, r));
                        case 6:
                            l = (0, g.q$)(i) || h.t5.UserProfileDefaultItem, c = (0, g.XT)(i), u = 30, d = (0, g.S0)(i) || "", f = (p = r.renderData).user, x = (0, tU.Z)(p, nX), (v = f).profileData = nQ({
                                page: c,
                                filter: d,
                                tabName: l,
                                itemsPerPage: u
                            }, x), r = nQ({
                                currentUser: v,
                                msg: s
                            }, r), e.t0 = l, e.next = e.t0 === h.t5.UserProfileFollowers ? 18 : e.t0 === h.t5.UserProfileFollowing ? 22 : 26;
                            break;
                        case 18:
                            return e.next = 20, t4.initPage({
                                ctx: n,
                                props: r,
                                apiClient: o,
                                showFollowers: !0
                            });
                        case 20:
                        case 24:
                        case 30:
                            return r = e.sent, e.abrupt("break", 32);
                        case 22:
                            return e.next = 24, t4.initPage({
                                ctx: n,
                                props: r,
                                apiClient: o,
                                showFollowers: !1
                            });
                        case 26:
                            return r.page = c, r.perPage = u, e.next = 30, nz.initPage({
                                ctx: n,
                                props: r,
                                apiClient: o
                            });
                        case 32:
                            return r.settings || (r.settings = {}), r.settings.pageTitle || (r.settings.pageTitle = v.firstName + " " + v.lastName), r.settings.pageMeta || (r.settings.pageMeta = {}), r.settings.pageMeta.title || (r.settings.pageTitle ? r.settings.pageMeta.title = r.settings.pageTitle : v ? r.settings.pageMeta.title = v.firstName + " " + v.lastName : r.settings.pageMeta.title = "Skool"), r.settings.pageMeta.description || (v ? r.settings.pageMeta.description = (0, b.Kv)({
                                content: (null === (y = v.metadata) || void 0 === y ? void 0 : y.bio) || ""
                            }) : r.settings.pageMeta.description = tH.g), r.settings.pageMeta.image || (v ? r.settings.pageMeta.image = (null === (w = v.metadata) || void 0 === w ? void 0 : w.pictureBubble) || (null === (j = v.metadata) || void 0 === j ? void 0 : j.pictureProfile) : r.settings.pageMeta.image = "https://assets.skool.com/skool/3824c26a881e434fb0710f1c257ef501.png"), e.abrupt("return", r);
                        case 39:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return l.apply(this, arguments)
            }), n3.getRenderData = (c = (0, d.Z)(m().mark(function e(t) {
                var n, r;
                return m().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.ctx, r = t.apiClient, !(0, g.wg)(n.query)) {
                                e.next = 6;
                                break
                            }
                            return e.next = 5, n1.getRenderData({
                                ctx: n,
                                apiClient: r
                            });
                        case 5:
                        case 8:
                            return e.abrupt("return", e.sent);
                        case 6:
                            return e.next = 8, t$.getRenderData({
                                ctx: n,
                                apiClient: r
                            });
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return c.apply(this, arguments)
            }), n3.initPage = (u = (0, d.Z)(m().mark(function e(t) {
                var n, r, o;
                return m().wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.ctx, r = t.props, o = t.apiClient, !(0, g.wg)(n.query)) {
                                e.next = 11;
                                break
                            }
                            if (!n1.initPage) {
                                e.next = 9;
                                break
                            }
                            return e.next = 6, n1.initPage({
                                ctx: n,
                                props: r,
                                apiClient: o
                            });
                        case 6:
                            e.t0 = e.sent, e.next = 10;
                            break;
                        case 9:
                            e.t0 = r;
                        case 10:
                            return e.abrupt("return", e.t0);
                        case 11:
                            if (!t$.initPage) {
                                e.next = 17;
                                break
                            }
                            return e.next = 14, t$.initPage({
                                ctx: n,
                                props: r,
                                apiClient: o
                            });
                        case 14:
                            e.t1 = e.sent, e.next = 18;
                            break;
                        case 17:
                            e.t1 = r;
                        case 18:
                            return e.abrupt("return", e.t1);
                        case 19:
                        case "end":
                            return e.stop()
                    }
                }, e)
            })), function(e) {
                return u.apply(this, arguments)
            });
            var n5 = n(50282),
                n9 = !0,
                n6 = (0, n5.Z)(n3)
        },
        91541: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[group]", function() {
                return n(20869)
            }])
        }
    },
    function(e) {
        e.O(0, [4027, 630, 6911, 1509, 2859, 4192, 6527, 282, 1232, 4084, 2888, 9774, 179], function() {
            return e(e.s = 91541)
        }), _N_E = e.O()
    }
]);