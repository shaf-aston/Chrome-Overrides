"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1232], {
        34050: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return tt
                }
            });
            var r = n(17674),
                o = n(90116),
                i = n(59499),
                s = n(73793),
                a = n(50029),
                l = n(64687),
                u = n.n(l),
                d = n(11163),
                c = n(67294),
                p = n(23450),
                m = n.n(p),
                f = n(45578),
                h = n.n(f),
                v = n(91425),
                x = n(58401),
                g = n(10329),
                b = n(97628),
                y = n(92230),
                w = n(48153),
                j = n(90879),
                P = n(25123),
                C = n(19842),
                I = n(31865),
                O = n(71734),
                k = n(48939),
                _ = n(20863),
                Z = n(39393),
                N = n(86520),
                D = n(430),
                S = n(78311),
                M = n(50378),
                L = n(3284),
                R = n(17199),
                $ = M.ZP.div.withConfig({
                    displayName: "styled__ChatIconWrapper",
                    componentId: "sc-e4ns84-0"
                })(["padding:11px;"]),
                T = (0, M.ZP)(x.J).withConfig({
                    displayName: "styled__ChatIcon",
                    componentId: "sc-e4ns84-1"
                })(["color:", ";height:18px;width:18px;"], v.O9.n5),
                E = M.ZP.div.withConfig({
                    displayName: "styled__LikesCountWrapper",
                    componentId: "sc-e4ns84-2"
                })(["cursor:pointer;"]),
                U = M.ZP.div.withConfig({
                    displayName: "styled__LikesCount",
                    componentId: "sc-e4ns84-3"
                })(["color:", ";display:flex;align-items:center;padding:0px 4px;border-radius:20px;height:40px;cursor:pointer;", ";&:hover{background-color:", ";color:", ";text-decoration:underline;}"], v.O9.n5, L.c.t8, v.O9.n3, v.O9.n7),
                V = M.ZP.div.withConfig({
                    displayName: "styled__CommentsCount",
                    componentId: "sc-e4ns84-4"
                })(["color:", ";", ";"], v.O9.n5, L.c.t8),
                W = (0, M.ZP)(b.X).withConfig({
                    displayName: "styled__LikesRow",
                    componentId: "sc-e4ns84-5"
                })(["transform:translateX(-10px);"]),
                H = (0, M.ZP)(b.X).withConfig({
                    displayName: "styled__CommentsRow",
                    componentId: "sc-e4ns84-6"
                })(["align-items:center;cursor:pointer;margin-right:8px;"]),
                A = (0, M.iv)(["box-shadow:", ";"], function(e) {
                    return e.theme.isDarkTheme ? R.nN : "0 1px 2px 0 rgba(60, 64, 67, 0.302), 0 1px 3px 1px rgba(60, 64, 67, 0.149)"
                }),
                X = (0, M.iv)(["border-radius:0px;box-shadow:none;border-left:none;border-right:none;"]),
                z = (0, M.iv)(["visibility:hidden;margin:0;border:none;"]),
                F = (0, M.iv)(["box-shadow:0px 2px 2px 0px rgba(248,212,129,0.32),0px 2px 6px 0px rgba(248,212,129,0.32),0px 1px 8px 0px rgba(248,212,129,0.2);"]),
                B = (0, M.iv)(["border-radius:0px;border-left:none;border-right:none;"]),
                G = (0, M.iv)(["border-radius:10px;border:1px solid ", ";background:", ";", " &:hover{", "}", ""], function(e) {
                    return e.theme.isDarkTheme ? "#B4954D" : v.O9.p3
                }, v.O9.n1, F, F, function(e) {
                    return e.theme.isMobile && B
                }),
                J = M.ZP.div.withConfig({
                    displayName: "styled__PostItemWrapper",
                    componentId: "sc-e4ns84-7"
                })(["background-color:", ";cursor:pointer;border:1px solid ", ";border-radius:10px;overflow:hidden;margin-bottom:16px;", " ", " &:hover{", "}", " ", ""], v.O9.n1, v.O9.n3, function(e) {
                    return e.$isDragging && A
                }, function(e) {
                    return e.$isHidden && z
                }, A, function(e) {
                    return e.theme.isMobile && X
                }, function(e) {
                    return e.$isPinned && G
                }),
                K = n(85893),
                q = (0, c.memo)(function(e) {
                    var t, n, r = e.post,
                        o = e.onVoteChange,
                        i = e.newUpvotes,
                        l = void 0 === i ? 0 : i,
                        d = e.newCommentCount,
                        p = e.reactionExtra,
                        m = e.group,
                        f = (0, c.useState)((null == r || null === (t = r.metadata) || void 0 === t ? void 0 : t.myVote) || ""),
                        h = f[0],
                        x = f[1],
                        g = (0, c.useState)(parseInt(null == r || null === (n = r.metadata) || void 0 === n ? void 0 : n.upvotes) || 0),
                        w = g[0],
                        j = g[1],
                        C = Math.max(r.metadata.comments || 0, 0),
                        O = (0, s.bI)("isMobile"),
                        k = O.isMobile,
                        Z = O.dispatch;
                    (0, c.useEffect)(function() {
                        var e, t;
                        x((null == r || null === (e = r.metadata) || void 0 === e ? void 0 : e.myVote) || ""), j(parseInt(null == r || null === (t = r.metadata) || void 0 === t ? void 0 : t.upvotes) || 0)
                    }, [r]);
                    var M = (0, c.useCallback)((0, a.Z)(u().mark(function e() {
                            var t, n;
                            return u().wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = "up" === h ? "" : "up", e.next = 3, P.Z.updatePostVote({
                                            postID: r.id,
                                            oldVote: h,
                                            newVote: t
                                        });
                                    case 3:
                                        if (!(n = e.sent.error)) {
                                            e.next = 8;
                                            break
                                        }
                                        return 429 === n.status && Z(I.bI, {
                                            message: "Liking too fast! Try again later",
                                            severity: "error"
                                        }), e.abrupt("return");
                                    case 8:
                                        x(t), j(function(e) {
                                            return "up" === t ? e + 1 : e - 1
                                        }), null == o || o(h, t);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })), [h, o, r.id, Z]),
                        L = (0, c.useCallback)(function(e) {
                            e.preventDefault(), e.stopPropagation(), Z(I.Qg, function() {
                                return {
                                    postLikeModalProps: {
                                        post: r,
                                        group: m
                                    }
                                }
                            })
                        }, [Z, r, m]);
                    return (0, K.jsxs)(b.X, {
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "flex-start",
                        children: [(0, K.jsxs)(W, {
                            children: [(0, K.jsx)(D.Z, {
                                reason: N.lT.Upvote,
                                onSuccess: M,
                                showSignUp: !0,
                                children: function(e) {
                                    var t = e.onClick;
                                    return (0, K.jsx)(y.z, {
                                        variant: k ? "icon-borderless-no-hover" : "icon-borderless",
                                        icon: "up" === h ? "ThumbsUpFilled" : "ThumbsUp",
                                        onClick: t,
                                        iconSize: 16.66,
                                        style: {
                                            color: "up" === h ? v.O9.fgPrimary : void 0
                                        }
                                    })
                                }
                            }), (0, K.jsx)(S.I, {
                                postID: r.id,
                                upvotes: w,
                                newUpvotes: l,
                                children: (0, K.jsx)(E, {
                                    onClick: L,
                                    children: (0, K.jsx)(U, {
                                        children: (0, _.TN)(w + l)
                                    })
                                })
                            })]
                        }), (0, K.jsxs)(H, {
                            children: [(0, K.jsx)($, {
                                children: (0, K.jsx)(T, {
                                    name: "Chat"
                                })
                            }), (0, K.jsx)(V, {
                                children: (0, _.TN)(d + C)
                            })]
                        }), p]
                    })
                }),
                Q = n(87461),
                Y = n(46174),
                ee = n(52885),
                et = n(9694),
                en = n(94682),
                er = n(34302),
                eo = n(37349),
                ei = n(38742),
                es = n(82626),
                ea = n(67975),
                el = n(49805),
                eu = n(4730),
                ed = M.ZP.div.withConfig({
                    displayName: "styled__PostItemCardWrapper",
                    componentId: "sc-6yboky-0"
                })(["position:relative;padding:0px;width:100%;"]),
                ec = M.ZP.div.withConfig({
                    displayName: "styled__PostItemCardContent",
                    componentId: "sc-6yboky-1"
                })(["", ""], function(e) {
                    var t = e.$padding;
                    return "\n    padding: ".concat(t, ";\n\n    &:first-child {\n      padding: ").concat(t, ";\n    }\n\n    &:last-child {\n      padding: ").concat(t, ";\n    }\n  ")
                }),
                ep = (0, M.ZP)(y.z).withConfig({
                    displayName: "styled__PostItemRemoveButton",
                    componentId: "sc-6yboky-2"
                })(["position:absolute;top:8px;right:8px;"]),
                em = ["reports", "content", "onClick", "onCardClick", "onRemove"];

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

            function eh(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ef(Object(n), !0).forEach(function(t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ef(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ev = (0, c.memo)(function(e) {
                    var t = e.reports,
                        n = e.content,
                        r = e.onClick,
                        o = e.onCardClick,
                        i = e.onRemove,
                        a = (0, eu.Z)(e, em),
                        l = (0, s.bI)("isMobile").isMobile,
                        u = (0, c.useRef)(),
                        d = (0, c.useMemo)(function() {
                            var e = l ? "8px" : "16px 16px 10px 0";
                            return l && (e = "10px 10px 10px 0"), t && (e = "0px"), e
                        }, [l, t]),
                        p = (0, c.useCallback)(function(e) {
                            o && u.current && u.current.contains(e.target) ? o(e) : r && r(e)
                        }, [o, r]);
                    return (0, K.jsx)(ed, eh(eh({
                        ref: u,
                        onClick: p
                    }, a), {}, {
                        children: !!n && (0, K.jsxs)(K.Fragment, {
                            children: [(0, K.jsx)(ec, {
                                $padding: d,
                                children: n
                            }), !!i && (0, K.jsx)(ep, {
                                variant: "icon-borderless",
                                icon: "Close",
                                onClick: i,
                                iconSize: 16.66
                            })]
                        })
                    }))
                }),
                ex = M.ZP.div.withConfig({
                    displayName: "styled__PollBadgeWrapper",
                    componentId: "sc-vh0utx-0"
                })(["display:flex;align-items:center;margin-top:8px;"]),
                eg = M.ZP.div.withConfig({
                    displayName: "styled__PollBadge",
                    componentId: "sc-vh0utx-1"
                })(["display:flex;align-items:center;border-radius:15px;border:1px solid ", ";height:24px;justify-content:center;margin-right:8px;padding:0 12px;"], function(e) {
                    return e.$color
                }),
                eb = (0, M.iv)(["top:11px;right:12px;"]),
                ey = M.ZP.div.withConfig({
                    displayName: "styled__PinnedButtonWrapper",
                    componentId: "sc-vh0utx-2"
                })(["position:absolute;top:15px;right:16px;display:flex;gap:8px;align-items:center;", ""], function(e) {
                    return e.theme.isMobile && eb
                }),
                ew = M.ZP.div.withConfig({
                    displayName: "styled__TitleWrapper",
                    componentId: "sc-vh0utx-3"
                })(["display:flex;align-items:center;"]),
                ej = M.ZP.div.withConfig({
                    displayName: "styled__AttachmentCount",
                    componentId: "sc-vh0utx-4"
                })(["", ""], L.c.t7),
                eP = M.ZP.div.withConfig({
                    displayName: "styled__ReportedLine",
                    componentId: "sc-vh0utx-5"
                })(["color:", ";", ""], v.O9.e2, L.c.t6),
                eC = M.ZP.div.withConfig({
                    displayName: "styled__ReportedRulesLine",
                    componentId: "sc-vh0utx-6"
                })(["color:", ";margin-right:16px;", ""], v.O9.n5, L.c.t11),
                eI = M.ZP.div.withConfig({
                    displayName: "styled__PollLabel",
                    componentId: "sc-vh0utx-7"
                })(["color:", ";", ";line-height:1;"], v.O9.s2, L.c.t10),
                eO = M.ZP.div.withConfig({
                    displayName: "styled__PostTimeContent",
                    componentId: "sc-vh0utx-8"
                })(["color:", ";white-space:nowrap;", ""], v.O9.n5, L.c.t11),
                ek = M.ZP.span.withConfig({
                    displayName: "styled__RecentActivityLabel",
                    componentId: "sc-vh0utx-9"
                })(["color:", ";", ";"], function(e) {
                    return e.$color
                }, function(e) {
                    var t = e.$variant;
                    return L.c[t]
                }),
                e_ = M.ZP.div.withConfig({
                    displayName: "styled__GroupFeedLinkLabel",
                    componentId: "sc-vh0utx-10"
                })(["color:", ";&:hover{text-decoration:underline;}", " ", ""], v.O9.n5, L.c.t10, L.c.ellipsis),
                eZ = M.ZP.span.withConfig({
                    displayName: "styled__HidePin",
                    componentId: "sc-vh0utx-11"
                })(["cursor:pointer;", " &:hover{text-decoration:", ";}"], L.c.t8, function(e) {
                    return !e.theme.isMobile && "underline"
                }),
                eN = M.ZP.span.withConfig({
                    displayName: "styled__UserLineLink",
                    componentId: "sc-vh0utx-12"
                })(["&:hover{text-decoration:underline;}"]),
                eD = (0, M.iv)(["padding-right:2px;font-weight:normal;"]),
                eS = M.ZP.div.withConfig({
                    displayName: "styled__Title",
                    componentId: "sc-vh0utx-13"
                })(["overflow:hidden;word-break:break-word;& em{font-style:normal;background-color:", ";color:", ";}max-height:", ";", ";", ";", ""], v.O9.p2, v.O9.fgPrimary, function(e) {
                    return e.theme.isMobile ? "48px" : "30px"
                }, function(e) {
                    return e.theme.isMobile ? L.c.t5 : L.c.t2
                }, function(e) {
                    return !e.theme.isMobile && L.c.ellipsis
                }, function(e) {
                    return e.$isSoftDeleted && eD
                }),
                eM = M.ZP.div.withConfig({
                    displayName: "styled__ContentPreviewWrapper",
                    componentId: "sc-vh0utx-14"
                })(["color:", ";overflow:hidden;word-break:break-word;max-height:", "px;", " & em{font-style:normal;background-color:", ";color:", ";}", ""], function(e) {
                    return e.$color
                }, function(e) {
                    return 24 * e.$maxLines
                }, function(e) {
                    return e.$isSoftDeleted && eD
                }, v.O9.p2, v.O9.fgPrimary, L.c.t7),
                eL = M.ZP.div.withConfig({
                    displayName: "styled__CommentItem",
                    componentId: "sc-vh0utx-15"
                })(["padding:", ";"], function(e) {
                    return e.$reported ? "0" : "12px 0 6px 0"
                }),
                eR = M.ZP.div.withConfig({
                    displayName: "styled__ConfirmModalWrapper",
                    componentId: "sc-vh0utx-16"
                })(["", ";"], function(e) {
                    return e.theme.isMobile && "width: 100%;"
                }),
                e$ = (0, M.ZP)(w.x).withConfig({
                    displayName: "styled__PreviewImageWrapper",
                    componentId: "sc-vh0utx-17"
                })(["align-items:center;justify-content:center;height:", ";width:", ";border-radius:10px;border:1px solid ", ";margin-left:", ";", " flex-shrink:0;position:relative;> div{z-index:1;}"], function(e) {
                    return e.theme.isMobile ? "72px" : "104px"
                }, function(e) {
                    return e.theme.isMobile ? "72px" : "104px"
                }, v.O9.n3, function(e) {
                    return e.theme.isMobile ? "10px" : "16px"
                }, function(e) {
                    var t = e.theme,
                        n = e.$hasRemoveButton;
                    return !t.isMobile && n && "margin-top: 18px;"
                }),
                eT = M.ZP.img.withConfig({
                    displayName: "styled__PreviewImage",
                    componentId: "sc-vh0utx-18"
                })(['position:absolute;top:0;left:0;height:100%;width:100%;border-radius:10px;object-fit:cover;&:after{content:"";display:block;position:absolute;top:0;left:0;height:100%;width:100%;background-color:', ";}"], v.O9.n1),
                eE = M.ZP.div.withConfig({
                    displayName: "styled__Dot",
                    componentId: "sc-vh0utx-19"
                })(["height:12px;width:12px;border-radius:50%;background-color:", ";margin-right:8px;flex-shrink:0;display:inline-block;"], v.O9.sd1),
                eU = (0, M.ZP)(g.s).withConfig({
                    displayName: "styled__PostItemCommentWrapper",
                    componentId: "sc-vh0utx-20"
                })(["width:100%;min-width:0;background-color:", ";padding:8px 13px;border-radius:15px;border:1px solid ", ";"], function(e) {
                    return e.$reported ? v.O9.p1 : v.O9.n2
                }, v.O9.n3),
                eV = (0, M.ZP)(w.x).withConfig({
                    displayName: "styled__ReportWrapper",
                    componentId: "sc-vh0utx-21"
                })(["flex-direction:", ";align-items:", ";justify-content:space-between;border-top:1px solid ", ";padding-top:16px;padding-bottom:", ";margin-top:", ";margin-left:16px;"], function(e) {
                    return e.theme.isMobile ? "column" : "row"
                }, function(e) {
                    return e.theme.isMobile ? void 0 : "center"
                }, v.O9.n3, function(e) {
                    return e.theme.isMobile ? "6px" : "0px"
                }, function(e) {
                    return e.$isComment ? "0px" : "8px"
                }),
                eW = (0, M.ZP)(g.s).withConfig({
                    displayName: "styled__PostItemContentWrapper",
                    componentId: "sc-vh0utx-22"
                })(["gap:8px;padding-left:16px;flex:1;overflow:hidden;height:100%;"]),
                eH = (0, M.ZP)(g.s).withConfig({
                    displayName: "styled__PostMetadata",
                    componentId: "sc-vh0utx-23"
                })(["max-width:calc(100% - 48px);"]),
                eA = M.ZP.div.withConfig({
                    displayName: "styled__CommentsListWrapper",
                    componentId: "sc-vh0utx-24"
                })(["margin-top:8px;padding-top:", ";padding-bottom:", ";margin-left:16px;border-top:1px solid ", ";"], function(e) {
                    return e.$reported ? "16px" : "4px"
                }, function(e) {
                    return e.$reported ? "8px" : "0px"
                }, v.O9.n3),
                eX = (0, M.ZP)(y.z).withConfig({
                    displayName: "styled__KeepButton",
                    componentId: "sc-vh0utx-25"
                })(["color:", ";&:hover{color:", ";}"], v.O9.s2, v.O9.s3),
                ez = M.ZP.div.withConfig({
                    displayName: "styled__YouTubePreviewImage",
                    componentId: "sc-vh0utx-26"
                })(["position:absolute;top:0;left:0;height:100%;width:100%;border-radius:10px;background-size:auto 140px;background-position:center center;"]),
                eF = n(11944),
                eB = n(19492);

            function eG(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }
            var eJ = {
                    POST: 1,
                    COMMENT: 2
                },
                eK = (0, eF.$o)(),
                eq = (0, c.memo)(function(e) {
                    var t, n, r = e.post,
                        o = e.maxLines,
                        i = e.reports,
                        s = e.isSoftDeleted,
                        a = (null == r || null === (t = r.metadata) || void 0 === t ? void 0 : t.content) || "",
                        l = (null == r || null === (n = r.metadata) || void 0 === n ? void 0 : n.contentHl) || "";
                    return l ? (0, K.jsx)(eM, {
                        $maxLines: o || 1,
                        dangerouslySetInnerHTML: {
                            __html: l
                        },
                        $isSoftDeleted: s
                    }) : (0, K.jsx)(eM, {
                        $isSoftDeleted: s,
                        $color: i ? v.O9.fgPrimary : void 0,
                        $maxLines: o || 1,
                        children: (0, C.Kv)({
                            content: a
                        })
                    })
                }),
                eQ = (0, c.memo)(function(e) {
                    var t, n, r = e.rootPost,
                        o = e.comment,
                        a = e.group,
                        l = e.reports,
                        u = (0, d.useRouter)(),
                        p = (0, s.bI)("isMobile"),
                        f = p.isMobile,
                        h = p.dispatch,
                        x = (0, c.useMemo)(function() {
                            var e, t;
                            return null == o || null === (e = o.metadata) || void 0 === e || null === (e = e.attachments) || void 0 === e || null === (t = e.split) || void 0 === t ? void 0 : t.call(e, ",")
                        }, [null == o || null === (t = o.metadata) || void 0 === t ? void 0 : t.attachments]),
                        g = (0, c.useCallback)(function(e) {
                            e.stopPropagation(), e.preventDefault();
                            var t = o.id ? o.id.substr(0, 8) : void 0;
                            if (f) {
                                var n = (0, k.P_)({
                                        groupName: a.name,
                                        postName: r.name,
                                        selectedPostID: t
                                    }),
                                    s = n.href,
                                    l = n.as;
                                u.push(s, l)
                            } else {
                                var d = {
                                        pathname: u.pathname,
                                        query: {
                                            group: a.name,
                                            postName: r.name,
                                            selectedPostID: t
                                        }
                                    },
                                    c = "/".concat(a.name, "/").concat(r.name);
                                h(I.Rq, function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? eG(Object(n), !0).forEach(function(t) {
                                            (0, i.Z)(e, t, n[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : eG(Object(n)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        })
                                    }
                                    return e
                                }({}, u)), u.push(d, c, {
                                    scroll: !1,
                                    shallow: !0
                                })
                            }
                        }, [null == o ? void 0 : o.id, h, null == a ? void 0 : a.name, f, null == r ? void 0 : r.name, u]);
                    return (0, K.jsx)(eL, {
                        $reported: !!l,
                        children: (0, K.jsxs)(b.X, {
                            alignItems: "flex-start",
                            width: "100%",
                            children: [(0, K.jsx)(w.x, {
                                marginRight: 8,
                                children: (0, K.jsx)(Q.Z, {
                                    group: a,
                                    user: o.user,
                                    size: 40,
                                    userPreview: !0,
                                    showLevel: !0
                                })
                            }), (0, K.jsxs)(eU, {
                                onClick: g,
                                $reported: !!l,
                                children: [(0, K.jsx)(Z.Z, {
                                    userNameColor: l ? v.O9.fgPrimary : v.O9.n7,
                                    post: o,
                                    hideAvatar: !0,
                                    hideEdited: !0,
                                    showVotes: !l,
                                    group: a
                                }), !!o && (0, K.jsx)(eq, {
                                    post: o,
                                    maxLines: 2,
                                    reports: l
                                }), !(null != o && null !== (n = o.metadata) && void 0 !== n && n.content) && x && (0, K.jsx)(ej, {
                                    children: "[".concat(m()("attachment", x.length), "]")
                                })]
                            })]
                        })
                    })
                }),
                eY = (0, c.memo)(function(e) {
                    var t = e.rootPost,
                        n = e.comments,
                        r = e.group,
                        o = e.reports;
                    return n.map(function(e) {
                        return e.userId ? (0, K.jsx)(eQ, {
                            rootPost: t,
                            comment: e,
                            group: r,
                            reports: o
                        }, e.id) : null
                    })
                });

            function e0(e) {
                var t, n, r, o, i, l, p, f, C, Z, D, S = e.postTree,
                    M = e.group,
                    L = e.showStats,
                    R = e.onPostPinHide,
                    $ = e.onPostPinUnhide,
                    T = e.isHighlighted,
                    E = e.commentingUsers,
                    U = e.contributors,
                    V = e.newCommentCount,
                    W = e.lastCommentTimestamp,
                    H = e.lastCommentIsSelf,
                    A = e.reports,
                    X = e.newUpvotes,
                    z = e.pinnedPostsOnly,
                    F = e.updatedPollVotes,
                    B = e.onRemove,
                    G = (0, c.useRef)(),
                    J = S.post,
                    eu = J.metadata,
                    ed = void 0 === eu ? {} : eu,
                    ec = ed.content || ed.contentHl,
                    ep = (0, d.useRouter)(),
                    em = (0, s.bI)("self", "isMobile"),
                    ef = em.self,
                    eh = em.isMobile,
                    eb = em.dispatch,
                    eD = (0, c.useRef)(!1),
                    eM = (0, k.W7)(ep.query),
                    eL = ed.deleted ? null : J.user,
                    eU = (0, c.useRef)(),
                    eF = (0, c.useMemo)(function() {
                        return (0, en.ur)({
                            value: J.createdAt
                        })
                    }, [J]),
                    eG = (null == J || null === (o = J.metadata) || void 0 === o ? void 0 : o.title) === "\uD835\uDE3F\uD835\uDE5A\uD835\uDE61\uD835\uDE5A\uD835\uDE69\uD835\uDE5A\uD835\uDE59",
                    eQ = (0, c.useMemo)(function() {
                        var e, t;
                        return null !== (e = null == S || null === (t = S.children) || void 0 === t ? void 0 : t.map(function(e) {
                            return e.post
                        })) && void 0 !== e ? e : []
                    }, [S]),
                    e0 = (null == J || null === (i = J.metadata) || void 0 === i ? void 0 : i.pinned) !== void 0 && !A;
                eM || A || (e0 = (null == J || null === (D = J.metadata) || void 0 === D ? void 0 : D.pinned) === 1);
                var e1 = e0 && (null == J || null === (l = J.metadata) || void 0 === l ? void 0 : l.hidden) === 1,
                    e2 = (0, c.useState)(function() {
                        return function(e) {
                            if (!(null != e && e.metadata)) return null;
                            if (e.metadata.rca) {
                                var t = e.metadata.rca.split("|");
                                return {
                                    activityType: parseInt(t[0]),
                                    timestamp: parseInt(t[1])
                                }
                            }
                            return e.metadata.lastComment ? {
                                activityType: 2,
                                timestamp: e.metadata.lastComment
                            } : null
                        }(J)
                    }),
                    e9 = e2[0],
                    e4 = e2[1],
                    e8 = Math.max((null == J || null === (p = J.metadata) || void 0 === p ? void 0 : p.myView) || 0, (null == J || null === (f = J.metadata) || void 0 === f ? void 0 : f.lastCommentView) || 0),
                    e6 = ((null == e9 ? void 0 : e9.timestamp) || 0) > e8,
                    e3 = !!e8,
                    e5 = (0, c.useMemo)(function() {
                        var e, t;
                        return null == J || null === (e = J.metadata) || void 0 === e || null === (e = e.attachments) || void 0 === e || null === (t = e.split) || void 0 === t ? void 0 : t.call(e, ",")
                    }, [null == J || null === (C = J.metadata) || void 0 === C ? void 0 : C.attachments]);
                (0, c.useEffect)(function() {
                    W && e4({
                        activityType: eJ.COMMENT,
                        timestamp: W
                    })
                }, [W]), (0, c.useEffect)(function() {
                    return eD.current = !0,
                        function() {
                            eD.current = !1
                        }
                }, []);
                var e7 = (0, c.useCallback)(function() {
                        var e;
                        null == eU || null === (e = eU.current) || void 0 === e || e.click()
                    }, []),
                    te = (0, c.useCallback)(function(e, t) {
                        var n = (0, _.W4)(e),
                            r = n.firstName,
                            o = n.lastName;
                        return (0, K.jsx)(j.u, {
                            content: "".concat(r, " ").concat(o, " ").concat(0 === t ? "- First commenter" : 1 === t ? "- Second commenter" : "- Recent commenter"),
                            children: (0, K.jsx)(Q.Z, {
                                user: n,
                                size: 25,
                                disableLink: !0
                            })
                        }, t)
                    }, []),
                    tt = (0, c.useCallback)(function(e) {
                        e.stopPropagation(), null == B || B(J)
                    }, [B, J]),
                    tn = (0, c.useMemo)(function() {
                        if (!(null != J && null !== (e = J.metadata) && void 0 !== e && e.pollData)) return null;
                        var e, t = F;
                        "number" != typeof t && (t = (JSON.parse(J.metadata.pollData).entries || []).reduce(function(e, t) {
                            return e + t.count
                        }, 0));
                        var n = t ? "".concat(m()("member", t, !0), " ").concat(m()("have", t), " voted") : "Cast your vote";
                        return (0, K.jsxs)(ex, {
                            children: [(0, K.jsx)(eg, {
                                $color: v.O9.s2,
                                children: (0, K.jsx)(eI, {
                                    children: "Poll"
                                })
                            }), (0, K.jsx)(eI, {
                                children: n
                            })]
                        })
                    }, [null == J || null === (Z = J.metadata) || void 0 === Z ? void 0 : Z.pollData, F]),
                    tr = (0, c.useMemo)(function() {
                        if (!e9) return null;
                        var e = e6 && !H,
                            t = e ? v.O9.sd1 : v.O9.n5;
                        switch (e9.activityType) {
                            case eJ.POST:
                                return null;
                            case eJ.COMMENT:
                                return (0, K.jsx)(ek, {
                                    $variant: e ? "t10" : "t11",
                                    $color: t,
                                    children: "".concat(e ? "New" : "Last", " comment ").concat((0, en.ur)({
                                        value: e9.timestamp,
                                        justNow: !0,
                                        partialAgo: !0
                                    }))
                                })
                        }
                    }, [e9, e6, H]),
                    to = (0, c.useMemo)(function() {
                        var e = [];
                        return !eh && (U && e.push((0, K.jsx)(b.X, {
                            gap: 2,
                            alignItems: "center",
                            children: U.slice(0, 5).map(te)
                        }, "avatar")), null != E && E.length && e.push((0, K.jsx)(w.x, {
                            marginLeft: 8,
                            children: (0, K.jsx)(et.Z, {})
                        }, "typing"))), tr && e.push((0, K.jsx)(w.x, {
                            marginLeft: e.length ? 16 : 0,
                            children: tr
                        }, "rcat")), e.length ? (0, K.jsx)(b.X, {
                            marginLeft: eh ? 24 : 16,
                            alignItems: "center",
                            children: e
                        }) : null
                    }, [eh, E, U, tr, te]),
                    ti = (0, c.useCallback)((t = (0, a.Z)(u().mark(function e(t) {
                        return u().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.stopPropagation(), t.preventDefault(), !R) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 5, R(J);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return t.apply(this, arguments)
                    }), [R, J]),
                    ts = (0, c.useCallback)((n = (0, a.Z)(u().mark(function e(t) {
                        return u().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ti(t);
                                case 2:
                                    eb(I.xW, !0);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return n.apply(this, arguments)
                    }), [ti, eb]),
                    ta = (0, c.useCallback)((r = (0, a.Z)(u().mark(function e(t) {
                        var n, r, o;
                        return u().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.stopPropagation(), t.preventDefault(), !$) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 5, $(J, !1);
                                case 5:
                                    r = (n = (0, k.AZ)({
                                        groupName: M.name
                                    })).href, o = n.as, ep.push(r, o);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function(e) {
                        return r.apply(this, arguments)
                    }), [$, J, ep, M]),
                    tl = (0, c.useMemo)(function() {
                        return e0 && (0, N.mv)({
                            member: null == ef ? void 0 : ef.member,
                            group: M
                        }) ? (0, K.jsxs)(ey, {
                            children: [(0, K.jsx)(x.J, {
                                name: eK ? "Pinned" : "PinnedPrimaryFilled",
                                size: 16,
                                color: v.O9.n7
                            }), e1 ? (0, K.jsx)(eZ, {
                                onClick: ta,
                                children: "Unhide"
                            }) : (0, K.jsx)(j.u, {
                                content: "Hide",
                                children: (0, K.jsx)(eZ, {
                                    onClick: z ? ti : ts,
                                    children: "Pinned"
                                })
                            })]
                        }) : null
                    }, [e0, e1, ti, ts, ta, M, ef, z]),
                    tu = (0, c.useMemo)(function() {
                        if (!A || !(null != S && null !== (e = S.rules) && void 0 !== e && e.length)) return null;
                        var e, t = h()(S.rules, "title").sort(function(e, t) {
                            return e.ordinal - t.ordinal
                        });
                        return (0, K.jsxs)(eC, {
                            children: ["for breaking ", t.map(function(e, n) {
                                var r = e.ordinal,
                                    o = e.title;
                                return (0, K.jsx)("span", {
                                    children: "".concat(r, ". ").concat(o).concat(n !== t.length - 1 ? ", " : "")
                                }, o)
                            })]
                        })
                    }, [S, A]),
                    td = (0, c.useMemo)(function() {
                        var e, t, n = ed.imagePreviewSmall,
                            r = ed.videoLinks,
                            o = ed.title,
                            i = !n || M.metadata.noImagePreview,
                            s = function() {
                                if (i) return null;
                                var e, t = (0, eB.sw)(null == ed ? void 0 : ed.videoLinksData),
                                    s = (null == t || null === (e = t[0]) || void 0 === e ? void 0 : e.provider) === eB.a.YouTube;
                                return (0, K.jsxs)(e$, {
                                    $hasRemoveButton: !!B,
                                    children: [s ? (0, K.jsx)(ez, {
                                        style: {
                                            backgroundImage: "url(".concat(encodeURI(n), ")")
                                        },
                                        alt: o
                                    }) : (0, K.jsx)(eT, {
                                        src: encodeURI(n),
                                        loading: "lazy",
                                        alt: o
                                    }), r && (0, K.jsx)(Y.Z, {
                                        fillOpacity: .8,
                                        width: 45,
                                        height: 29
                                    })]
                                })
                            },
                            l = (ed.labels || "").split(","),
                            d = M.labels.find(function(e) {
                                return e.id === l[0]
                            });
                        return (0, K.jsxs)(g.s, {
                            gap: 8,
                            children: [tl, (0, K.jsxs)(b.X, {
                                alignItems: "center",
                                paddingLeft: 0,
                                children: [(0, K.jsxs)(eW, {
                                    children: [(0, K.jsxs)(b.X, {
                                        alignItems: "center",
                                        children: [(0, K.jsx)(w.x, {
                                            marginRight: 8,
                                            children: (0, K.jsx)(Q.Z, {
                                                user: eL,
                                                group: M,
                                                size: 40,
                                                userPreview: !0,
                                                showLevel: !0
                                            })
                                        }), (0, K.jsxs)(eH, {
                                            children: [(0, K.jsx)(eo.Z, {
                                                hoverUnderline: !0,
                                                user: eL,
                                                group: M,
                                                component: "div",
                                                typographyVariant: "t6",
                                                userPreview: !0,
                                                showLevelTitle: !0
                                            }), (0, K.jsxs)(b.X, {
                                                children: [(0, K.jsx)(er.Z, {
                                                    post: J,
                                                    children: (0, K.jsxs)(eO, {
                                                        children: ["".concat(eF, " •"), "\xa0"]
                                                    })
                                                }), (0, K.jsx)(ei.Z, {
                                                    group: M,
                                                    category: null == d ? void 0 : d.id,
                                                    style: {
                                                        overflow: "hidden"
                                                    },
                                                    children: (0, K.jsx)(e_, {
                                                        children: null == d ? void 0 : d.metadata.displayName
                                                    })
                                                })]
                                            })]
                                        })]
                                    }), (0, K.jsx)(es.Z, {
                                        groupName: M.name,
                                        postName: J.name,
                                        children: null != J && null !== (e = J.metadata) && void 0 !== e && e.titleHl ? (0, K.jsx)(b.X, {
                                            children: (0, K.jsxs)(ew, {
                                                ref: eU,
                                                children: [!e3 && !A && (0, K.jsx)(eE, {}), (0, K.jsx)(eS, {
                                                    dangerouslySetInnerHTML: {
                                                        __html: null == J || null === (t = J.metadata) || void 0 === t ? void 0 : t.titleHl
                                                    }
                                                })]
                                            })
                                        }) : (0, K.jsx)(ew, {
                                            ref: eU,
                                            children: (0, K.jsxs)(eS, {
                                                $isSoftDeleted: eG,
                                                children: [!e3 && !A && (0, K.jsx)(eE, {}), J.metadata.title]
                                            })
                                        })
                                    }), ec ? (0, K.jsx)(w.x, {
                                        marginBottom: 2,
                                        children: eh ? (0, K.jsxs)(b.X, {
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            flexGrow: 1,
                                            children: [(0, K.jsx)(eq, {
                                                post: J,
                                                maxLines: i ? 2 : 3,
                                                isSoftDeleted: eG
                                            }), s()]
                                        }) : (0, K.jsx)(eq, {
                                            post: J,
                                            maxLines: 2,
                                            isSoftDeleted: eG
                                        })
                                    }) : eh ? (0, K.jsxs)(b.X, {
                                        children: [(0, K.jsx)("div", {}), s()]
                                    }) : e5 ? (0, K.jsx)(ej, {
                                        children: "[".concat(m()("attachment", e5.length), "]")
                                    }) : i ? (0, K.jsx)(w.x, {
                                        height: 8
                                    }) : (0, K.jsx)(w.x, {
                                        height: 12
                                    }), tn, L && (0, K.jsx)(q, {
                                        post: J,
                                        group: M,
                                        newCommentCount: V,
                                        showNumComments: !0,
                                        reactionExtra: to,
                                        newUpvotes: X
                                    })]
                                }), !eh && s()]
                            }), !!eQ.length && (0, K.jsx)(eA, {
                                $reported: !!A,
                                children: (0, K.jsx)(eY, {
                                    rootPost: J,
                                    comments: eQ,
                                    group: M,
                                    reports: A
                                })
                            }), function() {
                                if (!A) return null;
                                var e, t, n = S.reportUsers,
                                    r = S.isComment,
                                    o = S.count,
                                    i = r ? S.children[0].post.id : S.post.id,
                                    s = (e = (0, a.Z)(u().mark(function e(t) {
                                        return u().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return t.preventDefault(), t.stopPropagation(), e.next = 4, P.Z.resetReports({
                                                        postID: i
                                                    });
                                                case 4:
                                                    return e.next = 6, (0, ee.H5)(ep);
                                                case 6:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e)
                                    })), function(t) {
                                        return e.apply(this, arguments)
                                    }),
                                    l = (t = (0, a.Z)(u().mark(function e(t) {
                                        var n, r;
                                        return u().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return n = t.rules, r = t.feedback, e.next = 3, P.Z.deletePost({
                                                        postID: i,
                                                        rules: n,
                                                        feedback: r
                                                    });
                                                case 3:
                                                    return e.sent.error && eb(O.Lx, {
                                                        message: "Something went wrong, please try again",
                                                        severity: "error"
                                                    }), e.next = 8, (0, ee.H5)(ep);
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e)
                                    })), function(e) {
                                        return t.apply(this, arguments)
                                    }),
                                    d = function(e) {
                                        return "".concat(e.firstName, " ").concat(e.lastName)
                                    },
                                    c = function(e, t) {
                                        e.stopPropagation(), e.preventDefault();
                                        var n = (0, k.sB)({
                                            userName: null == t ? void 0 : t.name,
                                            group: M
                                        });
                                        window.open(n.as)
                                    };
                                return (0, K.jsxs)(eV, {
                                    $isComment: r,
                                    children: [(0, K.jsxs)(g.s, {
                                        flexGrow: 1,
                                        children: [(0, K.jsx)(eP, {
                                            children: 1 === o ? (0, K.jsxs)(K.Fragment, {
                                                children: [(0, K.jsx)(ea.Z, {
                                                    component: "span",
                                                    user: {
                                                        id: n[0].id
                                                    },
                                                    group: M,
                                                    children: (0, K.jsx)(eN, {
                                                        onClick: function(e) {
                                                            return c(e, n[0])
                                                        },
                                                        children: d(n[0])
                                                    })
                                                }), " reported this ".concat(r ? "comment" : "post")]
                                            }) : 2 === o ? null == n ? void 0 : n.map(function(e, t) {
                                                return (0, K.jsxs)(K.Fragment, {
                                                    children: [(0, K.jsx)(ea.Z, {
                                                        component: "span",
                                                        user: {
                                                            id: e.id
                                                        },
                                                        group: M,
                                                        children: (0, K.jsx)(eN, {
                                                            onClick: function(t) {
                                                                return c(t, e)
                                                            },
                                                            children: d(e)
                                                        })
                                                    }), 0 === t ? " and " : " reported this ".concat(r ? "comment" : "post")]
                                                })
                                            }) : (0, K.jsxs)(K.Fragment, {
                                                children: [null == n ? void 0 : n.map(function(e) {
                                                    return (0, K.jsxs)(K.Fragment, {
                                                        children: [(0, K.jsx)(ea.Z, {
                                                            component: "span",
                                                            user: {
                                                                id: e.id
                                                            },
                                                            group: M,
                                                            children: (0, K.jsx)(eN, {
                                                                onClick: function(t) {
                                                                    return c(t, e)
                                                                },
                                                                children: d(e)
                                                            })
                                                        }), ", "]
                                                    })
                                                }), "and ".concat(m()("other", o - 2, !0), " reported this ").concat(r ? "comment" : "post")]
                                            })
                                        }), tu]
                                    }), (0, K.jsxs)(b.X, {
                                        gap: 16,
                                        alignSelf: eh ? "flex-end" : void 0,
                                        marginTop: eh ? 16 : void 0,
                                        width: eh ? "100%" : void 0,
                                        onClick: function(e) {
                                            e.stopPropagation(), e.preventDefault()
                                        },
                                        children: [(0, K.jsx)(eX, {
                                            variant: "secondary",
                                            label: "Keep",
                                            onClick: s
                                        }), (0, K.jsx)(eR, {
                                            children: (0, K.jsx)(el.H, {
                                                header: "Delete ".concat(r ? "comment" : "post", "?"),
                                                confirmLabel: "Delete",
                                                onConfirm: l,
                                                children: (0, K.jsx)(y.z, {
                                                    variant: "error",
                                                    label: "Delete"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }()]
                        })
                    }, [ed, M, tl, eh, eL, J, eG, e3, A, ec, e5, tn, L, V, to, X, eQ, B, S, tu, ep, eb, eF]),
                    tc = (0, c.useMemo)(function() {
                        var e = {};
                        return eh && (e.borderRadius = 0, e.borderLeftWidth = 0, e.borderRightWidth = 0), T && (e.animation = "bg-fade-out-comment ease-in 4s"), A && (e.padding = "16px 16px 11px 0"), e
                    }, [T, eh, A]);
                return (0, K.jsx)("div", {
                    ref: G,
                    children: (0, K.jsx)(ev, {
                        content: td,
                        onCardClick: e7,
                        onRemove: B ? tt : void 0,
                        style: tc,
                        reports: A
                    })
                })
            }
            e0.defaultProps = {
                showStats: !1,
                commentingUsers: []
            };
            var e1 = (0, c.memo)(e0),
                e2 = n(15948),
                e9 = n(61325),
                e4 = n(97778),
                e8 = n(42432);

            function e6(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function e3(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function e5(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e3(Object(n), !0).forEach(function(t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : e3(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var e7 = function(e) {
                try {
                    return JSON.parse(e.metadata.contributors).slice(0, 5)
                } catch (e) {
                    return []
                }
            };

            function te(e) {
                var t = e.group,
                    n = e.postTrees,
                    a = e.showStats,
                    l = e.onPostPinHide,
                    u = e.onPostPinUnhide,
                    p = e.highlightedPost,
                    m = e.reports,
                    f = e.removeDuplicates,
                    h = e.pinnedPostsOnly,
                    v = e.draggable,
                    x = e.onDragEnd,
                    g = e.onRemovePost,
                    b = (0, s.bI)("updatedPostDetail", "postDetailModal", "self"),
                    y = b.dispatch,
                    w = b.updatedPostDetail,
                    j = b.postDetailModal,
                    P = b.self,
                    C = (0, c.useRef)(!1),
                    O = (0, c.useRef)({}),
                    _ = (0, c.useState)({}),
                    Z = _[0],
                    D = _[1],
                    S = (0, c.useRef)({}),
                    M = (0, c.useState)({}),
                    L = M[0],
                    R = M[1],
                    $ = (0, c.useState)({}),
                    T = $[0],
                    E = $[1],
                    U = (0, c.useState)({}),
                    V = U[0],
                    W = U[1],
                    H = (0, c.useState)(n),
                    A = H[0],
                    X = H[1],
                    z = (0, c.useState)(!1),
                    F = z[0],
                    B = z[1],
                    G = (0, d.useRouter)(),
                    q = (0, k.mp)(G);
                (0, c.useEffect)(function() {
                    X(n)
                }, [n]), (0, c.useEffect)(function() {
                    y(I.Ks, A)
                }, [y, A]), (0, c.useEffect)(function() {
                    return C.current = !0, B(!0),
                        function() {
                            C.current = !1
                        }
                }, []), (0, c.useEffect)(function() {
                    var e = function(e) {
                        if (e.key === e4.H0.postRead && e.newValue) {
                            var t = JSON.parse(e.newValue).value;
                            X(function(e) {
                                return e.map(function(e) {
                                    var n = e;
                                    return e.post.id === t && ((n = e5({}, e)).post.metadata.myView = 1), n
                                })
                            })
                        }
                    };
                    return window.addEventListener("storage", e),
                        function() {
                            window.removeEventListener("storage", e)
                        }
                }, []), (0, c.useEffect)(function() {
                    w && (y(I.gQ, null), X(function(e) {
                        var t = (0, o.Z)(e),
                            n = e.findIndex(function(e) {
                                return e.post.id === w.id
                            });
                        if (-1 !== n) {
                            w.metadata.pinned && !t[n].post.metadata.pinned && (w.metadata.pinned = 0);
                            var r = e5({}, t[n]);
                            if ((0, k.YN)(G)) {
                                var s = e5(e5({}, r.post.metadata), w.metadata);
                                r.post = e5(e5({
                                    user: r.post.user
                                }, w), {}, {
                                    metadata: s
                                })
                            } else r.post = e5(e5({
                                user: r.post.user
                            }, w), {}, {
                                metadata: e5({
                                    pollData: r.post.metadata.pollData
                                }, w.metadata)
                            });
                            t[n] = r, E(function(e) {
                                return e5(e5({}, e), {}, (0, i.Z)({}, w.id, e5(e5({}, e[w.id]), {}, {
                                    newComments: 0,
                                    lastCommentTimestamp: null
                                })))
                            }), D(function(e) {
                                return e5(e5({}, e), {}, (0, i.Z)({}, w.id, {
                                    up: 0,
                                    down: 0
                                }))
                            })
                        }
                        return t
                    }))
                }, [w, G, y]);
                var Q = (0, c.useCallback)(function(e) {
                        if (C.current) {
                            O.current[e.userId] && clearTimeout(O.current[e.userId]);
                            var t = e.topic.subId,
                                n = S.current[t] || [];
                            if (!n.find(function(t) {
                                    return t.userId === e.userId
                                })) {
                                var r = [].concat((0, o.Z)(n), [e]);
                                R(function(e) {
                                    var n = e5(e5({}, e), {}, (0, i.Z)({}, t, r));
                                    return S.current = n, n
                                })
                            }
                            O.current[e.userId] = setTimeout(function() {
                                var r = n.filter(function(t) {
                                    return t.userId !== e.userId
                                });
                                C.current && R(function(e) {
                                    var n = e5(e5({}, e), {}, (0, i.Z)({}, t, r));
                                    return S.current = n, n
                                })
                            }, e.duration)
                        }
                    }, []),
                    Y = (0, c.useCallback)(function(e) {
                        if (C.current && e.userId !== P.id && A.find(function(t) {
                                return t.post.id === e.postId
                            })) {
                            var t = A.find(function(e) {
                                return e.post.name === (null == j ? void 0 : j.postName)
                            });
                            t && t.post.id === e.topic.subId && e.userId === P.id || D(function(t) {
                                var n = t[e.topic.subId] || {
                                        up: 0,
                                        down: 0
                                    },
                                    r = e.oldVote,
                                    o = e.newVote;
                                return "up" === r && n.up--, "down" === r && n.down--, "up" === o && n.up++, "down" === o && n.down++, e5(e5({}, t), {}, (0, i.Z)({}, e.topic.subId, n))
                            })
                        }
                    }, [j, A, P]),
                    ee = (0, c.useCallback)(function(e) {
                        if (C.current) {
                            E(function(t) {
                                var n;
                                return e5(e5({}, t), {}, (0, i.Z)({}, e.topic.subId, {
                                    newComments: null !== (n = t[e.topic.subId]) && void 0 !== n && n.newComments ? t[[e.topic.subId]].newComments + 1 : 1,
                                    lastCommentTimestamp: e.createdAt,
                                    lastCommentIsSelf: (null == e ? void 0 : e.userId) === (null == P ? void 0 : P.id)
                                }))
                            }), R(function(t) {
                                var n = e5(e5({}, t), {}, (0, i.Z)({}, e.topic.subId, []));
                                return S.current = n, n
                            });
                            var t, n = null !== (t = V[e.parentId]) && void 0 !== t ? t : [],
                                s = n.findIndex(function(t) {
                                    return t.id === e.userId
                                });
                            if (0 !== s && 1 !== s) {
                                var a = (0, o.Z)(n);
                                if (s >= 2) {
                                    var l = a.splice(s, 1),
                                        u = (0, r.Z)(l, 1)[0];
                                    a.push(u)
                                } else {
                                    var d = {
                                        id: e.userId,
                                        first_name: e.userFirstName,
                                        last_name: e.userLastName,
                                        metadata: {
                                            picture_bubble: e.userImage
                                        }
                                    };
                                    n.length < 5 || a.splice(2, 1), a.push(d)
                                }
                                W(e5(e5({}, V), {}, (0, i.Z)({}, e.parentId, a)))
                            }
                        }
                    }, [V, P]),
                    et = (0, c.useCallback)(function(e) {
                        var t = e.postId,
                            n = e.postPollData;
                        C.current && t && null != n && n.entries && E(function(e) {
                            return e5(e5({}, e), {}, (0, i.Z)({}, t, e5(e5({}, e[t]), {}, {
                                updatedPollVotes: n.entries.reduce(function(e, t) {
                                    return e + t.count
                                }, 0)
                            })))
                        })
                    }, []),
                    en = (0, c.useCallback)(function(e) {
                        null != e && e.pollUpdated && et(e), null != e && e.userCommenting && Q(e5(e5({}, null == e ? void 0 : e.userCommenting), {}, {
                            topic: null == e ? void 0 : e.topic,
                            postId: null == e ? void 0 : e.postId
                        })), null != e && e.newComment && ee(e5(e5({}, null == e ? void 0 : e.newComment), {}, {
                            topic: null == e ? void 0 : e.topic,
                            postId: null == e ? void 0 : e.postId
                        })), null != e && e.newPostVote && Y(e5(e5({}, null == e ? void 0 : e.newPostVote), {}, {
                            topic: null == e ? void 0 : e.topic,
                            postId: null == e ? void 0 : e.postId
                        }))
                    }, [et, Q, ee, Y]);
                (0, c.useEffect)(function() {
                    if ((0, N.Rj)({
                            member: null == P ? void 0 : P.member
                        })) {
                        var e = [],
                            n = {};
                        return A.forEach(function(r) {
                            n[r.post.id] || (n[r.post.id] = !0, e.push((0, e9.lF)(t.id, r.post.id)))
                        }), (0, e9.Ld)(e, en)
                    }
                }, [P, t, A, en]), (0, c.useEffect)(function() {
                    var e, t = {},
                        n = function(e, t) {
                            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (!n) {
                                if (Array.isArray(e) || (n = function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return e6(e, void 0);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e6(e, void 0)
                                        }
                                    }(e))) {
                                    n && (e = n);
                                    var r = 0,
                                        o = function() {};
                                    return {
                                        s: o,
                                        n: function() {
                                            return r >= e.length ? {
                                                done: !0
                                            } : {
                                                done: !1,
                                                value: e[r++]
                                            }
                                        },
                                        e: function(e) {
                                            throw e
                                        },
                                        f: o
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }
                            var i, s = !0,
                                a = !1;
                            return {
                                s: function() {
                                    n = n.call(e)
                                },
                                n: function() {
                                    var e = n.next();
                                    return s = e.done, e
                                },
                                e: function(e) {
                                    a = !0, i = e
                                },
                                f: function() {
                                    try {
                                        s || null == n.return || n.return()
                                    } finally {
                                        if (a) throw i
                                    }
                                }
                            }
                        }(A);
                    try {
                        for (n.s(); !(e = n.n()).done;) {
                            var r, o = e.value;
                            null != o && null !== (r = o.post) && void 0 !== r && null !== (r = r.metadata) && void 0 !== r && r.contributors ? t[o.post.id] = e7(o.post) : t[o.post.id] = []
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                    W(t)
                }, []);
                var er = (0, c.useMemo)(function() {
                    for (var e = {}, n = [], r = [], o = F ? A.length : 5, i = 0; i < A.length && n.length + r.length < o; i++)
                        if (function() {
                                var o, s, d, c, x, b, y = A[i],
                                    w = !!(null !== (o = y.post.metadata) && void 0 !== o && o.pinned),
                                    j = !!(null !== (s = y.post.metadata) && void 0 !== s && s.hidden),
                                    P = q && (!h && w && j || h && w && !j);
                                if (f && !P) {
                                    if (void 0 !== e[y.post.id]) {
                                        if (e[y.post.id] !== i) return 1
                                    } else e[y.post.id] = i
                                }
                                var C = 0;
                                Z[y.post.id] && (C = Z[y.post.id].up);
                                var I = P ? (0, K.jsx)("div", {}) : (0, K.jsx)(e1, {
                                        reports: m,
                                        commentingUsers: L[y.post.id],
                                        newUpvotes: C,
                                        postTree: y,
                                        group: t,
                                        showStats: a,
                                        onPostPinHide: l,
                                        onPostPinUnhide: u,
                                        isHighlighted: !!p && y.post.id.startsWith(p.postId),
                                        newCommentCount: (null === (d = T[y.post.id]) || void 0 === d ? void 0 : d.newComments) || 0,
                                        lastCommentTimestamp: null === (c = T[y.post.id]) || void 0 === c ? void 0 : c.lastCommentTimestamp,
                                        lastCommentIsSelf: null === (x = T[y.post.id]) || void 0 === x ? void 0 : x.lastCommentIsSelf,
                                        updatedPollVotes: null === (b = T[y.post.id]) || void 0 === b ? void 0 : b.updatedPollVotes,
                                        contributors: null == V ? void 0 : V[y.post.id],
                                        pinnedPostsOnly: h,
                                        onRemove: g
                                    }),
                                    O = !q || w;
                                v && O ? n.push((0, K.jsx)(e2._l, {
                                    draggableId: y.post.id,
                                    index: n.length,
                                    children: function(e, t) {
                                        var n, r = e5(e5(e5({}, e.draggableProps), e.dragHandleProps), {}, {
                                            ref: e.innerRef,
                                            style: null === (n = e.draggableProps) || void 0 === n ? void 0 : n.style
                                        });
                                        return (0, K.jsx)(J, e5(e5({}, r), {}, {
                                            $isDragging: t.isDragging,
                                            $isHidden: P,
                                            $isPinned: w && !m && !P,
                                            children: I
                                        }))
                                    }
                                }, "".concat(w ? "pinned-" : "").concat(y.post.id))) : r.push((0, K.jsx)(J, {
                                    $isHidden: P,
                                    $isPinned: w && !m && !P,
                                    children: I
                                }, "".concat(w ? "pinned-" : "").concat(y.post.id)))
                            }()) continue;
                    return {
                        draggable: n,
                        nonDraggable: r
                    }
                }, [L, t, p, Z, l, u, h, A, f, m, a, T, F, V, v, g, q]);
                return (0, K.jsxs)(e2.Z5, {
                    onDragEnd: x,
                    children: [(0, K.jsx)(e2.bK, {
                        droppableId: "posts-list-droppable",
                        children: function(e) {
                            return (0, K.jsxs)("div", e5(e5({
                                ref: e.innerRef
                            }, e.droppableProps), {}, {
                                children: [er.draggable, e.placeholder]
                            }))
                        }
                    }), er.nonDraggable, !F && (0, K.jsx)(e8.D, {
                        fitWidth: !0
                    })]
                })
            }
            te.defaultProps = {
                showStats: !1
            };
            var tt = (0, c.memo)(te)
        },
        33675: function(e, t, n) {
            var r = n(4730),
                o = n(50029),
                i = n(59499),
                s = n(64687),
                a = n.n(s),
                l = n(86520),
                u = n(48939),
                d = n(85893),
                c = ["ctx", "props"];

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach(function(t) {
                        (0, i.Z)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            t.Z = function(e) {
                var t;

                function n(t) {
                    return (0, d.jsx)(e, m({}, t))
                }
                return n.getRenderData = e.getRenderData, n.initPage = (t = (0, o.Z)(a().mark(function t(n) {
                    var o, i, s, d, p, f, h, v, x, g, b, y, w;
                    return a().wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (o = n.ctx, i = n.props, s = (0, r.Z)(n, c), d = i.self, p = i.currentGroup, f = o.query, h = (0, u.aK)(f), v = (0, u.VO)(f), x = (0, u.kG)(f), g = (0, u.GG)(f), b = (0, u.AC)(f), y = (0, u.gf)(f), (0, l.Wr)({
                                        member: null == d ? void 0 : d.member,
                                        group: p
                                    })) {
                                    t.next = 13;
                                    break
                                }
                                return w = (0, u.jQ)({
                                    invite: h,
                                    group: p,
                                    ref: x,
                                    pending: v,
                                    joinGroup: g,
                                    autoJoin: b,
                                    auth: y
                                }).as, t.abrupt("return", {
                                    settings: {
                                        redirect: {
                                            destination: w,
                                            permanent: !1
                                        }
                                    }
                                });
                            case 13:
                                if (!e.initPage) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 16, e.initPage(m({
                                    ctx: o,
                                    props: i
                                }, s));
                            case 16:
                                t.t0 = t.sent, t.next = 20;
                                break;
                            case 19:
                                t.t0 = i;
                            case 20:
                                return t.abrupt("return", t.t0);
                            case 21:
                            case "end":
                                return t.stop()
                        }
                    }, t)
                })), function(e) {
                    return t.apply(this, arguments)
                }), n
            }
        }
    }
]);