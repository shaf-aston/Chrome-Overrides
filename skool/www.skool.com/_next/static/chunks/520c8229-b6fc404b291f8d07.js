"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1509], {
        5865: function(e, t, n) {
            n.d(t, {
                Cf: function() {
                    return eO
                },
                Eh: function() {
                    return D
                },
                Jo: function() {
                    return er
                },
                K9: function() {
                    return ej
                },
                ML: function() {
                    return eS
                },
                NB: function() {
                    return eA
                },
                Ov: function() {
                    return e$
                },
                P1: function() {
                    return y
                },
                QC: function() {
                    return el
                },
                S0: function() {
                    return eT
                },
                XP: function() {
                    return eo
                },
                b5: function() {
                    return ei
                },
                hj: function() {
                    return R
                },
                tI: function() {
                    return ed
                },
                u9: function() {
                    return ea
                },
                vc: function() {
                    return eP
                },
                x2: function() {
                    return eE
                },
                zK: function() {
                    return eC
                }
            });
            var r = n(2376),
                o = n(84348),
                i = n(82696),
                s = n(12806),
                a = n(16560),
                l = n(25804),
                d = n(53833);

            function c(e) {
                let {
                    state: t,
                    transaction: n
                } = e, {
                    selection: r
                } = n, {
                    doc: o
                } = n, {
                    storedMarks: i
                } = n;
                return { ...t,
                    apply: t.apply.bind(t),
                    applyTransaction: t.applyTransaction.bind(t),
                    plugins: t.plugins,
                    schema: t.schema,
                    reconfigure: t.reconfigure.bind(t),
                    toJSON: t.toJSON.bind(t),
                    get storedMarks() {
                        return i
                    },
                    get selection() {
                        return r
                    },
                    get doc() {
                        return o
                    },
                    get tr() {
                        return r = n.selection, o = n.doc, i = n.storedMarks, n
                    }
                }
            }
            class u {
                constructor(e) {
                    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state
                }
                get hasCustomState() {
                    return !!this.customState
                }
                get state() {
                    return this.customState || this.editor.state
                }
                get commands() {
                    let {
                        rawCommands: e,
                        editor: t,
                        state: n
                    } = this, {
                        view: r
                    } = t, {
                        tr: o
                    } = n, i = this.buildProps(o);
                    return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, (...e) => {
                        let n = t(...e)(i);
                        return o.getMeta("preventDispatch") || this.hasCustomState || r.dispatch(o), n
                    }]))
                }
                get chain() {
                    return () => this.createChain()
                }
                get can() {
                    return () => this.createCan()
                }
                createChain(e, t = !0) {
                    let {
                        rawCommands: n,
                        editor: r,
                        state: o
                    } = this, {
                        view: i
                    } = r, s = [], a = !!e, l = e || o.tr, d = { ...Object.fromEntries(Object.entries(n).map(([e, n]) => [e, (...e) => {
                            let r = this.buildProps(l, t),
                                o = n(...e)(r);
                            return s.push(o), d
                        }])),
                        run: () => (a || !t || l.getMeta("preventDispatch") || this.hasCustomState || i.dispatch(l), s.every(e => !0 === e))
                    };
                    return d
                }
                createCan(e) {
                    let {
                        rawCommands: t,
                        state: n
                    } = this, r = e || n.tr, o = this.buildProps(r, !1);
                    return { ...Object.fromEntries(Object.entries(t).map(([e, t]) => [e, (...e) => t(...e)({ ...o,
                            dispatch: void 0
                        })])),
                        chain: () => this.createChain(r, !1)
                    }
                }
                buildProps(e, t = !0) {
                    let {
                        rawCommands: n,
                        editor: r,
                        state: o
                    } = this, {
                        view: i
                    } = r, s = {
                        tr: e,
                        editor: r,
                        view: i,
                        state: c({
                            state: o,
                            transaction: e
                        }),
                        dispatch: t ? () => void 0 : void 0,
                        chain: () => this.createChain(e, t),
                        can: () => this.createCan(e),
                        get commands() {
                            return Object.fromEntries(Object.entries(n).map(([e, t]) => [e, (...e) => t(...e)(s)]))
                        }
                    };
                    return s
                }
            }
            class p {
                constructor() {
                    this.callbacks = {}
                }
                on(e, t) {
                    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this
                }
                emit(e, ...t) {
                    let n = this.callbacks[e];
                    return n && n.forEach(e => e.apply(this, t)), this
                }
                off(e, t) {
                    let n = this.callbacks[e];
                    return n && (t ? this.callbacks[e] = n.filter(e => e !== t) : delete this.callbacks[e]), this
                }
                removeAllListeners() {
                    this.callbacks = {}
                }
            }

            function h(e, t, n) {
                return void 0 === e.config[t] && e.parent ? h(e.parent, t, n) : "function" == typeof e.config[t] ? e.config[t].bind({ ...n,
                    parent: e.parent ? h(e.parent, t, n) : null
                }) : e.config[t]
            }

            function f(e) {
                return {
                    baseExtensions: e.filter(e => "extension" === e.type),
                    nodeExtensions: e.filter(e => "node" === e.type),
                    markExtensions: e.filter(e => "mark" === e.type)
                }
            }

            function m(e) {
                let t = [],
                    {
                        nodeExtensions: n,
                        markExtensions: r
                    } = f(e),
                    o = [...n, ...r],
                    i = {
                        default: null,
                        rendered: !0,
                        renderHTML: null,
                        parseHTML: null,
                        keepOnSplit: !0,
                        isRequired: !1
                    };
                return e.forEach(e => {
                    let n = {
                            name: e.name,
                            options: e.options,
                            storage: e.storage
                        },
                        r = h(e, "addGlobalAttributes", n);
                    r && r().forEach(e => {
                        e.types.forEach(n => {
                            Object.entries(e.attributes).forEach(([e, r]) => {
                                t.push({
                                    type: n,
                                    name: e,
                                    attribute: { ...i,
                                        ...r
                                    }
                                })
                            })
                        })
                    })
                }), o.forEach(e => {
                    let n = {
                            name: e.name,
                            options: e.options,
                            storage: e.storage
                        },
                        r = h(e, "addAttributes", n);
                    r && Object.entries(r()).forEach(([n, r]) => {
                        let o = { ...i,
                            ...r
                        };
                        "function" == typeof(null == o ? void 0 : o.default) && (o.default = o.default()), (null == o ? void 0 : o.isRequired) && (null == o ? void 0 : o.default) === void 0 && delete o.default, t.push({
                            type: e.name,
                            name: n,
                            attribute: o
                        })
                    })
                }), t
            }

            function g(e, t) {
                if ("string" == typeof e) {
                    if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
                    return t.nodes[e]
                }
                return e
            }

            function y(...e) {
                return e.filter(e => !!e).reduce((e, t) => {
                    let n = { ...e
                    };
                    return Object.entries(t).forEach(([e, t]) => {
                        if (!n[e]) {
                            n[e] = t;
                            return
                        }
                        if ("class" === e) {
                            let r = t ? t.split(" ") : [],
                                o = n[e] ? n[e].split(" ") : [],
                                i = r.filter(e => !o.includes(e));
                            n[e] = [...o, ...i].join(" ")
                        } else "style" === e ? n[e] = [n[e], t].join("; ") : n[e] = t
                    }), n
                }, {})
            }

            function v(e, t) {
                return t.filter(e => e.attribute.rendered).map(t => t.attribute.renderHTML ? t.attribute.renderHTML(e.attrs) || {} : {
                    [t.name]: e.attrs[t.name]
                }).reduce((e, t) => y(e, t), {})
            }

            function b(e) {
                return "function" == typeof e
            }

            function k(e, t, ...n) {
                return b(e) ? t ? e.bind(t)(...n) : e(...n) : e
            }

            function w(e, t) {
                return e.style ? e : { ...e,
                    getAttrs: n => {
                        let r = e.getAttrs ? e.getAttrs(n) : e.attrs;
                        if (!1 === r) return !1;
                        let o = t.reduce((e, t) => {
                            var r;
                            let o = t.attribute.parseHTML ? t.attribute.parseHTML(n) : "string" != typeof(r = n.getAttribute(t.name)) ? r : r.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(r) : "true" === r || "false" !== r && r;
                            return null == o ? e : { ...e,
                                [t.name]: o
                            }
                        }, {});
                        return { ...r,
                            ...o
                        }
                    }
                }
            }

            function x(e) {
                return Object.fromEntries(Object.entries(e).filter(([e, t]) => !("attrs" === e && function(e = {}) {
                    return 0 === Object.keys(e).length && e.constructor === Object
                }(t)) && null != t))
            }

            function M(e, t) {
                return t.nodes[e] || t.marks[e] || null
            }

            function S(e, t) {
                return Array.isArray(t) ? t.some(t => ("string" == typeof t ? t : t.name) === e.name) : t
            }
            let O = (e, t = 500) => {
                let n = "",
                    r = e.parentOffset;
                return e.parent.nodesBetween(Math.max(0, r - t), r, (e, t, o, i) => {
                    var s, a;
                    let l = (null === (a = (s = e.type.spec).toText) || void 0 === a ? void 0 : a.call(s, {
                        node: e,
                        pos: t,
                        parent: o,
                        index: i
                    })) || e.textContent || "%leaf%";
                    n += l.slice(0, Math.max(0, r - t))
                }), n
            };

            function E(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            }
            class C {
                constructor(e) {
                    this.find = e.find, this.handler = e.handler
                }
            }
            let T = (e, t) => {
                if (E(t)) return t.exec(e);
                let n = t(e);
                if (!n) return null;
                let r = [n.text];
                return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r
            };

            function P(e) {
                var t;
                let {
                    editor: n,
                    from: r,
                    to: o,
                    text: i,
                    rules: s,
                    plugin: a
                } = e, {
                    view: l
                } = n;
                if (l.composing) return !1;
                let d = l.state.doc.resolve(r);
                if (d.parent.type.spec.code || (null === (t = d.nodeBefore || d.nodeAfter) || void 0 === t ? void 0 : t.marks.find(e => e.type.spec.code))) return !1;
                let p = !1,
                    h = O(d) + i;
                return s.forEach(e => {
                    if (p) return;
                    let t = T(h, e.find);
                    if (!t) return;
                    let s = l.state.tr,
                        d = c({
                            state: l.state,
                            transaction: s
                        }),
                        f = {
                            from: r - (t[0].length - i.length),
                            to: o
                        },
                        {
                            commands: m,
                            chain: g,
                            can: y
                        } = new u({
                            editor: n,
                            state: d
                        });
                    null !== e.handler({
                        state: d,
                        range: f,
                        match: t,
                        commands: m,
                        chain: g,
                        can: y
                    }) && s.steps.length && (s.setMeta(a, {
                        transform: s,
                        from: r,
                        to: o,
                        text: i
                    }), l.dispatch(s), p = !0)
                }), p
            }
            class A {
                constructor(e) {
                    this.find = e.find, this.handler = e.handler
                }
            }
            let j = (e, t, n) => {
                    if (E(t)) return [...e.matchAll(t)];
                    let r = t(e, n);
                    return r ? r.map(t => {
                        let n = [t.text];
                        return n.index = t.index, n.input = e, n.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), n.push(t.replaceWith)), n
                    }) : []
                },
                $ = e => {
                    var t;
                    let n = new ClipboardEvent("paste", {
                        clipboardData: new DataTransfer
                    });
                    return null === (t = n.clipboardData) || void 0 === t || t.setData("text/html", e), n
                };
            class B {
                constructor(e, t) {
                    this.splittableMarks = [], this.editor = t, this.extensions = B.resolve(e), this.schema = function(e, t) {
                        var n;
                        let r = m(e),
                            {
                                nodeExtensions: o,
                                markExtensions: i
                            } = f(e),
                            a = null === (n = o.find(e => h(e, "topNode"))) || void 0 === n ? void 0 : n.name,
                            l = Object.fromEntries(o.map(n => {
                                let o = r.filter(e => e.type === n.name),
                                    i = {
                                        name: n.name,
                                        options: n.options,
                                        storage: n.storage,
                                        editor: t
                                    },
                                    s = x({ ...e.reduce((e, t) => {
                                            let r = h(t, "extendNodeSchema", i);
                                            return { ...e,
                                                ...r ? r(n) : {}
                                            }
                                        }, {}),
                                        content: k(h(n, "content", i)),
                                        marks: k(h(n, "marks", i)),
                                        group: k(h(n, "group", i)),
                                        inline: k(h(n, "inline", i)),
                                        atom: k(h(n, "atom", i)),
                                        selectable: k(h(n, "selectable", i)),
                                        draggable: k(h(n, "draggable", i)),
                                        code: k(h(n, "code", i)),
                                        defining: k(h(n, "defining", i)),
                                        isolating: k(h(n, "isolating", i)),
                                        attrs: Object.fromEntries(o.map(e => {
                                            var t;
                                            return [e.name, {
                                                default: null === (t = null == e ? void 0 : e.attribute) || void 0 === t ? void 0 : t.default
                                            }]
                                        }))
                                    }),
                                    a = k(h(n, "parseHTML", i));
                                a && (s.parseDOM = a.map(e => w(e, o)));
                                let l = h(n, "renderHTML", i);
                                l && (s.toDOM = e => l({
                                    node: e,
                                    HTMLAttributes: v(e, o)
                                }));
                                let d = h(n, "renderText", i);
                                return d && (s.toText = d), [n.name, s]
                            })),
                            d = Object.fromEntries(i.map(n => {
                                let o = r.filter(e => e.type === n.name),
                                    i = {
                                        name: n.name,
                                        options: n.options,
                                        storage: n.storage,
                                        editor: t
                                    },
                                    s = x({ ...e.reduce((e, t) => {
                                            let r = h(t, "extendMarkSchema", i);
                                            return { ...e,
                                                ...r ? r(n) : {}
                                            }
                                        }, {}),
                                        inclusive: k(h(n, "inclusive", i)),
                                        excludes: k(h(n, "excludes", i)),
                                        group: k(h(n, "group", i)),
                                        spanning: k(h(n, "spanning", i)),
                                        code: k(h(n, "code", i)),
                                        attrs: Object.fromEntries(o.map(e => {
                                            var t;
                                            return [e.name, {
                                                default: null === (t = null == e ? void 0 : e.attribute) || void 0 === t ? void 0 : t.default
                                            }]
                                        }))
                                    }),
                                    a = k(h(n, "parseHTML", i));
                                a && (s.parseDOM = a.map(e => w(e, o)));
                                let l = h(n, "renderHTML", i);
                                return l && (s.toDOM = e => l({
                                    mark: e,
                                    HTMLAttributes: v(e, o)
                                })), [n.name, s]
                            }));
                        return new s.V_({
                            topNode: a,
                            nodes: l,
                            marks: d
                        })
                    }(this.extensions, t), this.setupExtensions()
                }
                static resolve(e) {
                    var t;
                    let n = B.sort(B.flatten(e)),
                        r = [...new Set((t = n.map(e => e.name)).filter((e, n) => t.indexOf(e) !== n))];
                    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map(e=>`'${e}'`).join(", ")}]. This can lead to issues.`), n
                }
                static flatten(e) {
                    return e.map(e => {
                        let t = {
                                name: e.name,
                                options: e.options,
                                storage: e.storage
                            },
                            n = h(e, "addExtensions", t);
                        return n ? [e, ...this.flatten(n())] : e
                    }).flat(10)
                }
                static sort(e) {
                    return e.sort((e, t) => {
                        let n = h(e, "priority") || 100,
                            r = h(t, "priority") || 100;
                        return n > r ? -1 : n < r ? 1 : 0
                    })
                }
                get commands() {
                    return this.extensions.reduce((e, t) => {
                        let n = {
                                name: t.name,
                                options: t.options,
                                storage: t.storage,
                                editor: this.editor,
                                type: M(t.name, this.schema)
                            },
                            r = h(t, "addCommands", n);
                        return r ? { ...e,
                            ...r()
                        } : e
                    }, {})
                }
                get plugins() {
                    let {
                        editor: e
                    } = this, t = B.sort([...this.extensions].reverse()), n = [], o = [], s = t.map(t => {
                        let r = {
                                name: t.name,
                                options: t.options,
                                storage: t.storage,
                                editor: e,
                                type: M(t.name, this.schema)
                            },
                            s = [],
                            a = h(t, "addKeyboardShortcuts", r),
                            l = {};
                        if ("mark" === t.type && t.config.exitable && (l.ArrowRight = () => eP.handleExit({
                                editor: e,
                                mark: t
                            })), a) {
                            let t = Object.fromEntries(Object.entries(a()).map(([t, n]) => [t, () => n({
                                editor: e
                            })]));
                            l = { ...l,
                                ...t
                            }
                        }
                        let d = (0, i.h)(l);
                        s.push(d);
                        let c = h(t, "addInputRules", r);
                        S(t, e.options.enableInputRules) && c && n.push(...c());
                        let u = h(t, "addPasteRules", r);
                        S(t, e.options.enablePasteRules) && u && o.push(...u());
                        let p = h(t, "addProseMirrorPlugins", r);
                        if (p) {
                            let e = p();
                            s.push(...e)
                        }
                        return s
                    }).flat();
                    return [function(e) {
                        let {
                            editor: t,
                            rules: n
                        } = e, o = new r.Sy({
                            state: {
                                init: () => null,
                                apply(e, r) {
                                    let i = e.getMeta(o);
                                    if (i) return i;
                                    let s = e.getMeta("applyInputRules");
                                    return s && setTimeout(() => {
                                        let {
                                            from: e,
                                            text: r
                                        } = s, i = e + r.length;
                                        P({
                                            editor: t,
                                            from: e,
                                            to: i,
                                            text: r,
                                            rules: n,
                                            plugin: o
                                        })
                                    }), e.selectionSet || e.docChanged ? null : r
                                }
                            },
                            props: {
                                handleTextInput: (e, r, i, s) => P({
                                    editor: t,
                                    from: r,
                                    to: i,
                                    text: s,
                                    rules: n,
                                    plugin: o
                                }),
                                handleDOMEvents: {
                                    compositionend: e => (setTimeout(() => {
                                        let {
                                            $cursor: r
                                        } = e.state.selection;
                                        r && P({
                                            editor: t,
                                            from: r.pos,
                                            to: r.pos,
                                            text: "",
                                            rules: n,
                                            plugin: o
                                        })
                                    }), !1)
                                },
                                handleKeyDown(e, r) {
                                    if ("Enter" !== r.key) return !1;
                                    let {
                                        $cursor: i
                                    } = e.state.selection;
                                    return !!i && P({
                                        editor: t,
                                        from: i.pos,
                                        to: i.pos,
                                        text: "\n",
                                        rules: n,
                                        plugin: o
                                    })
                                }
                            },
                            isInputRules: !0
                        });
                        return o
                    }({
                        editor: e,
                        rules: n
                    }), ... function(e) {
                        let {
                            editor: t,
                            rules: n
                        } = e, o = null, i = !1, s = !1, a = "undefined" != typeof ClipboardEvent ? new ClipboardEvent("paste") : null, l = "undefined" != typeof DragEvent ? new DragEvent("drop") : null, d = ({
                            state: e,
                            from: n,
                            to: r,
                            rule: o,
                            pasteEvt: i
                        }) => {
                            let s = e.tr;
                            if (function(e) {
                                    let {
                                        editor: t,
                                        state: n,
                                        from: r,
                                        to: o,
                                        rule: i,
                                        pasteEvent: s,
                                        dropEvent: a
                                    } = e, {
                                        commands: l,
                                        chain: d,
                                        can: c
                                    } = new u({
                                        editor: t,
                                        state: n
                                    }), p = [];
                                    return n.doc.nodesBetween(r, o, (e, t) => {
                                        if (!e.isTextblock || e.type.spec.code) return;
                                        let u = Math.max(r, t),
                                            h = Math.min(o, t + e.content.size);
                                        j(e.textBetween(u - t, h - t, void 0, "￼"), i.find, s).forEach(e => {
                                            if (void 0 === e.index) return;
                                            let t = u + e.index + 1,
                                                r = t + e[0].length,
                                                o = {
                                                    from: n.tr.mapping.map(t),
                                                    to: n.tr.mapping.map(r)
                                                },
                                                h = i.handler({
                                                    state: n,
                                                    range: o,
                                                    match: e,
                                                    commands: l,
                                                    chain: d,
                                                    can: c,
                                                    pasteEvent: s,
                                                    dropEvent: a
                                                });
                                            p.push(h)
                                        })
                                    }), p.every(e => null !== e)
                                }({
                                    editor: t,
                                    state: c({
                                        state: e,
                                        transaction: s
                                    }),
                                    from: Math.max(n - 1, 0),
                                    to: r.b - 1,
                                    rule: o,
                                    pasteEvent: i,
                                    dropEvent: l
                                }) && s.steps.length) return l = "undefined" != typeof DragEvent ? new DragEvent("drop") : null, a = "undefined" != typeof ClipboardEvent ? new ClipboardEvent("paste") : null, s
                        };
                        return n.map(e => new r.Sy({
                            view(e) {
                                let t = t => {
                                    var n;
                                    o = (null === (n = e.dom.parentElement) || void 0 === n ? void 0 : n.contains(t.target)) ? e.dom.parentElement : null
                                };
                                return window.addEventListener("dragstart", t), {
                                    destroy() {
                                        window.removeEventListener("dragstart", t)
                                    }
                                }
                            },
                            props: {
                                handleDOMEvents: {
                                    drop: (e, t) => (s = o === e.dom.parentElement, l = t, !1),
                                    paste: (e, t) => {
                                        var n;
                                        let r = null === (n = t.clipboardData) || void 0 === n ? void 0 : n.getData("text/html");
                                        return a = t, i = !!(null == r ? void 0 : r.includes("data-pm-slice")), !1
                                    }
                                }
                            },
                            appendTransaction: (t, n, r) => {
                                let o = t[0],
                                    l = "paste" === o.getMeta("uiEvent") && !i,
                                    c = "drop" === o.getMeta("uiEvent") && !s,
                                    u = o.getMeta("applyPasteRules"),
                                    p = !!u;
                                if (!l && !c && !p) return;
                                if (p) {
                                    let {
                                        from: t,
                                        text: n
                                    } = u, o = t + n.length;
                                    return d({
                                        rule: e,
                                        state: r,
                                        from: t,
                                        to: {
                                            b: o
                                        },
                                        pasteEvt: $(n)
                                    })
                                }
                                let h = n.doc.content.findDiffStart(r.doc.content),
                                    f = n.doc.content.findDiffEnd(r.doc.content);
                                if ("number" == typeof h && f && h !== f.b) return d({
                                    rule: e,
                                    state: r,
                                    from: h,
                                    to: f,
                                    pasteEvt: a
                                })
                            }
                        }))
                    }({
                        editor: e,
                        rules: o
                    }), ...s]
                }
                get attributes() {
                    return m(this.extensions)
                }
                get nodeViews() {
                    let {
                        editor: e
                    } = this, {
                        nodeExtensions: t
                    } = f(this.extensions);
                    return Object.fromEntries(t.filter(e => !!h(e, "addNodeView")).map(t => {
                        let n = this.attributes.filter(e => e.type === t.name),
                            r = {
                                name: t.name,
                                options: t.options,
                                storage: t.storage,
                                editor: e,
                                type: g(t.name, this.schema)
                            },
                            o = h(t, "addNodeView", r);
                        return o ? [t.name, (r, i, s, a) => {
                            let l = v(r, n);
                            return o()({
                                editor: e,
                                node: r,
                                getPos: s,
                                decorations: a,
                                HTMLAttributes: l,
                                extension: t
                            })
                        }] : []
                    }))
                }
                setupExtensions() {
                    this.extensions.forEach(e => {
                        var t;
                        this.editor.extensionStorage[e.name] = e.storage;
                        let n = {
                            name: e.name,
                            options: e.options,
                            storage: e.storage,
                            editor: this.editor,
                            type: M(e.name, this.schema)
                        };
                        "mark" === e.type && (null === (t = k(h(e, "keepOnSplit", n))) || void 0 === t || t) && this.splittableMarks.push(e.name);
                        let r = h(e, "onBeforeCreate", n),
                            o = h(e, "onCreate", n),
                            i = h(e, "onUpdate", n),
                            s = h(e, "onSelectionUpdate", n),
                            a = h(e, "onTransaction", n),
                            l = h(e, "onFocus", n),
                            d = h(e, "onBlur", n),
                            c = h(e, "onDestroy", n);
                        r && this.editor.on("beforeCreate", r), o && this.editor.on("create", o), i && this.editor.on("update", i), s && this.editor.on("selectionUpdate", s), a && this.editor.on("transaction", a), l && this.editor.on("focus", l), d && this.editor.on("blur", d), c && this.editor.on("destroy", c)
                    })
                }
            }

            function N(e) {
                return "Object" === Object.prototype.toString.call(e).slice(8, -1) && e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype
            }

            function I(e, t) {
                let n = { ...e
                };
                return N(e) && N(t) && Object.keys(t).forEach(r => {
                    N(t[r]) && r in e ? n[r] = I(e[r], t[r]) : Object.assign(n, {
                        [r]: t[r]
                    })
                }), n
            }
            class R {
                constructor(e = {}) {
                    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
                        name: this.name,
                        defaultOptions: {}
                    }, this.config = { ...this.config,
                        ...e
                    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = k(h(this, "addOptions", {
                        name: this.name
                    }))), this.storage = k(h(this, "addStorage", {
                        name: this.name,
                        options: this.options
                    })) || {}
                }
                static create(e = {}) {
                    return new R(e)
                }
                configure(e = {}) {
                    let t = this.extend();
                    return t.parent = this.parent, t.options = I(this.options, e), t.storage = k(h(t, "addStorage", {
                        name: t.name,
                        options: t.options
                    })), t
                }
                extend(e = {}) {
                    let t = new R({ ...this.config,
                        ...e
                    });
                    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = k(h(t, "addOptions", {
                        name: t.name
                    })), t.storage = k(h(t, "addStorage", {
                        name: t.name,
                        options: t.options
                    })), t
                }
            }

            function D(e, t, n) {
                let {
                    from: r,
                    to: o
                } = t, {
                    blockSeparator: i = "\n\n",
                    textSerializers: s = {}
                } = n || {}, a = "";
                return e.nodesBetween(r, o, (e, n, l, d) => {
                    var c;
                    e.isBlock && n > r && (a += i);
                    let u = null == s ? void 0 : s[e.type.name];
                    if (u) return l && (a += u({
                        node: e,
                        pos: n,
                        parent: l,
                        index: d,
                        range: t
                    })), !1;
                    e.isText && (a += null === (c = null == e ? void 0 : e.text) || void 0 === c ? void 0 : c.slice(Math.max(r, n) - n, o - n))
                }), a
            }

            function z(e) {
                return Object.fromEntries(Object.entries(e.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]))
            }
            let L = R.create({
                name: "clipboardTextSerializer",
                addOptions: () => ({
                    blockSeparator: void 0
                }),
                addProseMirrorPlugins() {
                    return [new r.Sy({
                        key: new r.H$("clipboardTextSerializer"),
                        props: {
                            clipboardTextSerializer: () => {
                                let {
                                    editor: e
                                } = this, {
                                    state: t,
                                    schema: n
                                } = e, {
                                    doc: r,
                                    selection: o
                                } = t, {
                                    ranges: i
                                } = o, s = Math.min(...i.map(e => e.$from.pos)), a = Math.max(...i.map(e => e.$to.pos)), l = z(n);
                                return D(r, {
                                    from: s,
                                    to: a
                                }, { ...void 0 !== this.options.blockSeparator ? {
                                        blockSeparator: this.options.blockSeparator
                                    } : {},
                                    textSerializers: l
                                })
                            }
                        }
                    })]
                }
            });

            function H(e, t, n = {
                strict: !0
            }) {
                let r = Object.keys(t);
                return !r.length || r.every(r => n.strict ? t[r] === e[r] : E(t[r]) ? t[r].test(e[r]) : t[r] === e[r])
            }

            function F(e, t, n = {}) {
                return e.find(e => e.type === t && H(e.attrs, n))
            }

            function V(e, t, n = {}) {
                if (!e || !t) return;
                let r = e.parent.childAfter(e.parentOffset);
                if (e.parentOffset === r.offset && 0 !== r.offset && (r = e.parent.childBefore(e.parentOffset)), !r.node) return;
                let o = F([...r.node.marks], t, n);
                if (!o) return;
                let i = r.index,
                    s = e.start() + r.offset,
                    a = i + 1,
                    l = s + r.node.nodeSize;
                for (F([...r.node.marks], t, n); i > 0 && o.isInSet(e.parent.child(i - 1).marks);) i -= 1, s -= e.parent.child(i).nodeSize;
                for (; a < e.parent.childCount && function(e, t, n = {}) {
                        return !!F(e, t, n)
                    }([...e.parent.child(a).marks], t, n);) l += e.parent.child(a).nodeSize, a += 1;
                return {
                    from: s,
                    to: l
                }
            }

            function K(e, t) {
                if ("string" == typeof e) {
                    if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
                    return t.marks[e]
                }
                return e
            }

            function W(e) {
                return e instanceof r.Bs
            }

            function q(e = 0, t = 0, n = 0) {
                return Math.min(Math.max(e, t), n)
            }

            function J(e, t = null) {
                if (!t) return null;
                let n = r.Y1.atStart(e),
                    o = r.Y1.atEnd(e);
                if ("start" === t || !0 === t) return n;
                if ("end" === t) return o;
                let i = n.from,
                    s = o.to;
                return "all" === t ? r.Bs.create(e, q(0, i, s), q(e.content.size, i, s)) : r.Bs.create(e, q(t, i, s), q(t, i, s))
            }

            function G() {
                return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
            }
            let U = e => {
                let t = e.childNodes;
                for (let n = t.length - 1; n >= 0; n -= 1) {
                    let r = t[n];
                    3 === r.nodeType && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : 1 === r.nodeType && U(r)
                }
                return e
            };

            function Y(e) {
                let t = `<body>${e}</body>`;
                return U(new window.DOMParser().parseFromString(t, "text/html").body)
            }

            function _(e, t, n) {
                n = {
                    slice: !0,
                    parseOptions: {},
                    ...n
                };
                let r = "object" == typeof e && null !== e,
                    o = "string" == typeof e;
                if (r) try {
                    if (Array.isArray(e) && e.length > 0) return s.HY.fromArray(e.map(e => t.nodeFromJSON(e)));
                    return t.nodeFromJSON(e)
                } catch (r) {
                    return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", r), _("", t, n)
                }
                if (o) {
                    let r = s.aw.fromSchema(t);
                    return n.slice ? r.parseSlice(Y(e), n.parseOptions).content : r.parse(Y(e), n.parseOptions)
                }
                return _("", t, n)
            }
            let Q = e => e.toString().startsWith("<");

            function X() {
                return "undefined" != typeof navigator && /Mac/.test(navigator.platform)
            }

            function Z(e, t, n = {}) {
                let {
                    from: r,
                    to: o,
                    empty: i
                } = e.selection, s = t ? g(t, e.schema) : null, a = [];
                e.doc.nodesBetween(r, o, (e, t) => {
                    if (e.isText) return;
                    let n = Math.max(r, t),
                        i = Math.min(o, t + e.nodeSize);
                    a.push({
                        node: e,
                        from: n,
                        to: i
                    })
                });
                let l = o - r,
                    d = a.filter(e => !s || s.name === e.node.type.name).filter(e => H(e.node.attrs, n, {
                        strict: !1
                    }));
                return i ? !!d.length : d.reduce((e, t) => e + t.to - t.from, 0) >= l
            }

            function ee(e, t) {
                return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null
            }

            function et(e, t) {
                let n = "string" == typeof t ? [t] : t;
                return Object.keys(e).reduce((t, r) => (n.includes(r) || (t[r] = e[r]), t), {})
            }

            function en(e, t, n = {}) {
                return _(e, t, {
                    slice: !1,
                    parseOptions: n
                })
            }

            function er(e, t) {
                let n = K(t, e.schema),
                    {
                        from: r,
                        to: o,
                        empty: i
                    } = e.selection,
                    s = [];
                i ? (e.storedMarks && s.push(...e.storedMarks), s.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, o, e => {
                    s.push(...e.marks)
                });
                let a = s.find(e => e.type.name === n.name);
                return a ? { ...a.attrs
                } : {}
            }

            function eo(e, t) {
                let n = new a.wx(e);
                return t.forEach(e => {
                    e.steps.forEach(e => {
                        n.step(e)
                    })
                }), n
            }

            function ei(e, t, n) {
                let r = [];
                return e.nodesBetween(t.from, t.to, (e, t) => {
                    n(e) && r.push({
                        node: e,
                        pos: t
                    })
                }), r
            }

            function es(e) {
                return t => (function(e, t) {
                    for (let n = e.depth; n > 0; n -= 1) {
                        let r = e.node(n);
                        if (t(r)) return {
                            pos: n > 0 ? e.before(n) : 0,
                            start: e.start(n),
                            depth: n,
                            node: r
                        }
                    }
                })(t.$from, e)
            }

            function ea(e, t) {
                let n = ee("string" == typeof t ? t : t.name, e.schema);
                return "node" === n ? function(e, t) {
                    let n = g(t, e.schema),
                        {
                            from: r,
                            to: o
                        } = e.selection,
                        i = [];
                    e.doc.nodesBetween(r, o, e => {
                        i.push(e)
                    });
                    let s = i.reverse().find(e => e.type.name === n.name);
                    return s ? { ...s.attrs
                    } : {}
                }(e, t) : "mark" === n ? er(e, t) : {}
            }

            function el(e) {
                let {
                    mapping: t,
                    steps: n
                } = e, r = [];
                return t.maps.forEach((e, o) => {
                        let i = [];
                        if (e.ranges.length) e.forEach((e, t) => {
                            i.push({
                                from: e,
                                to: t
                            })
                        });
                        else {
                            let {
                                from: e,
                                to: t
                            } = n[o];
                            if (void 0 === e || void 0 === t) return;
                            i.push({
                                from: e,
                                to: t
                            })
                        }
                        i.forEach(({
                            from: e,
                            to: n
                        }) => {
                            let i = t.slice(o).map(e, -1),
                                s = t.slice(o).map(n),
                                a = t.invert().map(i, -1),
                                l = t.invert().map(s);
                            r.push({
                                oldRange: {
                                    from: a,
                                    to: l
                                },
                                newRange: {
                                    from: i,
                                    to: s
                                }
                            })
                        })
                    }),
                    function(e) {
                        let t = function(e, t = JSON.stringify) {
                            let n = {};
                            return e.filter(e => {
                                let r = t(e);
                                return !Object.prototype.hasOwnProperty.call(n, r) && (n[r] = !0)
                            })
                        }(e);
                        return 1 === t.length ? t : t.filter((e, n) => !t.filter((e, t) => t !== n).some(t => e.oldRange.from >= t.oldRange.from && e.oldRange.to <= t.oldRange.to && e.newRange.from >= t.newRange.from && e.newRange.to <= t.newRange.to))
                    }(r)
            }

            function ed(e, t, n) {
                let r = [];
                return e === t ? n.resolve(e).marks().forEach(t => {
                    let o = V(n.resolve(e - 1), t.type);
                    o && r.push({
                        mark: t,
                        ...o
                    })
                }) : n.nodesBetween(e, t, (e, t) => {
                    e && (null == e ? void 0 : e.nodeSize) !== void 0 && r.push(...e.marks.map(n => ({
                        from: t,
                        to: t + e.nodeSize,
                        mark: n
                    })))
                }), r
            }

            function ec(e, t, n) {
                return Object.fromEntries(Object.entries(n).filter(([n]) => {
                    let r = e.find(e => e.type === t && e.name === n);
                    return !!r && r.attribute.keepOnSplit
                }))
            }

            function eu(e, t, n = {}) {
                let {
                    empty: r,
                    ranges: o
                } = e.selection, i = t ? K(t, e.schema) : null;
                if (r) return !!(e.storedMarks || e.selection.$from.marks()).filter(e => !i || i.name === e.type.name).find(e => H(e.attrs, n, {
                    strict: !1
                }));
                let s = 0,
                    a = [];
                if (o.forEach(({
                        $from: t,
                        $to: n
                    }) => {
                        let r = t.pos,
                            o = n.pos;
                        e.doc.nodesBetween(r, o, (e, t) => {
                            if (!e.isText && !e.marks.length) return;
                            let n = Math.max(r, t),
                                i = Math.min(o, t + e.nodeSize);
                            s += i - n, a.push(...e.marks.map(e => ({
                                mark: e,
                                from: n,
                                to: i
                            })))
                        })
                    }), 0 === s) return !1;
                let l = a.filter(e => !i || i.name === e.mark.type.name).filter(e => H(e.mark.attrs, n, {
                        strict: !1
                    })).reduce((e, t) => e + t.to - t.from, 0),
                    d = a.filter(e => !i || e.mark.type !== i && e.mark.type.excludes(i)).reduce((e, t) => e + t.to - t.from, 0);
                return (l > 0 ? l + d : l) >= s
            }

            function ep(e, t) {
                let {
                    nodeExtensions: n
                } = f(t), r = n.find(t => t.name === e);
                if (!r) return !1;
                let o = {
                        name: r.name,
                        options: r.options,
                        storage: r.storage
                    },
                    i = k(h(r, "group", o));
                return "string" == typeof i && i.split(" ").includes("list")
            }

            function eh(e, t) {
                let n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
                if (n) {
                    let r = n.filter(e => null == t ? void 0 : t.includes(e.type.name));
                    e.tr.ensureMarks(r)
                }
            }
            let ef = (e, t) => {
                    let n = es(e => e.type === t)(e.selection);
                    if (!n) return !0;
                    let r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
                    if (void 0 === r) return !0;
                    let o = e.doc.nodeAt(r);
                    return !(n.node.type === (null == o ? void 0 : o.type) && (0, a.Mn)(e.doc, n.pos)) || (e.join(n.pos), !0)
                },
                em = (e, t) => {
                    let n = es(e => e.type === t)(e.selection);
                    if (!n) return !0;
                    let r = e.doc.resolve(n.start).after(n.depth);
                    if (void 0 === r) return !0;
                    let o = e.doc.nodeAt(r);
                    return !(n.node.type === (null == o ? void 0 : o.type) && (0, a.Mn)(e.doc, r)) || (e.join(r), !0)
                };
            var eg = Object.freeze({
                __proto__: null,
                blur: () => ({
                    editor: e,
                    view: t
                }) => (requestAnimationFrame(() => {
                    var n;
                    e.isDestroyed || (t.dom.blur(), null === (n = null == window ? void 0 : window.getSelection()) || void 0 === n || n.removeAllRanges())
                }), !0),
                clearContent: (e = !1) => ({
                    commands: t
                }) => t.setContent("", e),
                clearNodes: () => ({
                    state: e,
                    tr: t,
                    dispatch: n
                }) => {
                    let {
                        selection: r
                    } = t, {
                        ranges: o
                    } = r;
                    return !n || (o.forEach(({
                        $from: n,
                        $to: r
                    }) => {
                        e.doc.nodesBetween(n.pos, r.pos, (e, n) => {
                            if (e.type.isText) return;
                            let {
                                doc: r,
                                mapping: o
                            } = t, i = r.resolve(o.map(n)), s = r.resolve(o.map(n + e.nodeSize)), l = i.blockRange(s);
                            if (!l) return;
                            let d = (0, a.k9)(l);
                            if (e.type.isTextblock) {
                                let {
                                    defaultType: e
                                } = i.parent.contentMatchAt(i.index());
                                t.setNodeMarkup(l.start, e)
                            }(d || 0 === d) && t.lift(l, d)
                        })
                    }), !0)
                },
                command: e => t => e(t),
                createParagraphNear: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.mD)(e, t),
                cut: (e, t) => ({
                    editor: n,
                    tr: o
                }) => {
                    let {
                        state: i
                    } = n, s = i.doc.slice(e.from, e.to);
                    o.deleteRange(e.from, e.to);
                    let a = o.mapping.map(t);
                    return o.insert(a, s.content), o.setSelection(new r.Bs(o.doc.resolve(a - 1))), !0
                },
                deleteCurrentNode: () => ({
                    tr: e,
                    dispatch: t
                }) => {
                    let {
                        selection: n
                    } = e, r = n.$anchor.node();
                    if (r.content.size > 0) return !1;
                    let o = e.selection.$anchor;
                    for (let n = o.depth; n > 0; n -= 1)
                        if (o.node(n).type === r.type) {
                            if (t) {
                                let t = o.before(n),
                                    r = o.after(n);
                                e.delete(t, r).scrollIntoView()
                            }
                            return !0
                        }
                    return !1
                },
                deleteNode: e => ({
                    tr: t,
                    state: n,
                    dispatch: r
                }) => {
                    let o = g(e, n.schema),
                        i = t.selection.$anchor;
                    for (let e = i.depth; e > 0; e -= 1)
                        if (i.node(e).type === o) {
                            if (r) {
                                let n = i.before(e),
                                    r = i.after(e);
                                t.delete(n, r).scrollIntoView()
                            }
                            return !0
                        }
                    return !1
                },
                deleteRange: e => ({
                    tr: t,
                    dispatch: n
                }) => {
                    let {
                        from: r,
                        to: o
                    } = e;
                    return n && t.delete(r, o), !0
                },
                deleteSelection: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.NE)(e, t),
                enter: () => ({
                    commands: e
                }) => e.keyboardShortcut("Enter"),
                exitCode: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.uo)(e, t),
                extendMarkRange: (e, t = {}) => ({
                    tr: n,
                    state: o,
                    dispatch: i
                }) => {
                    let s = K(e, o.schema),
                        {
                            doc: a,
                            selection: l
                        } = n,
                        {
                            $from: d,
                            from: c,
                            to: u
                        } = l;
                    if (i) {
                        let e = V(d, s, t);
                        if (e && e.from <= c && e.to >= u) {
                            let t = r.Bs.create(a, e.from, e.to);
                            n.setSelection(t)
                        }
                    }
                    return !0
                },
                first: e => t => {
                    let n = "function" == typeof e ? e(t) : e;
                    for (let e = 0; e < n.length; e += 1)
                        if (n[e](t)) return !0;
                    return !1
                },
                focus: (e = null, t = {}) => ({
                    editor: n,
                    view: r,
                    tr: o,
                    dispatch: i
                }) => {
                    t = {
                        scrollIntoView: !0,
                        ...t
                    };
                    let s = () => {
                        G() && r.dom.focus(), requestAnimationFrame(() => {
                            !n.isDestroyed && (r.focus(), (null == t ? void 0 : t.scrollIntoView) && n.commands.scrollIntoView())
                        })
                    };
                    if (r.hasFocus() && null === e || !1 === e) return !0;
                    if (i && null === e && !W(n.state.selection)) return s(), !0;
                    let a = J(o.doc, e) || n.state.selection,
                        l = n.state.selection.eq(a);
                    return i && (l || o.setSelection(a), l && o.storedMarks && o.setStoredMarks(o.storedMarks), s()), !0
                },
                forEach: (e, t) => n => e.every((e, r) => t(e, { ...n,
                    index: r
                })),
                insertContent: (e, t) => ({
                    tr: n,
                    commands: r
                }) => r.insertContentAt({
                    from: n.selection.from,
                    to: n.selection.to
                }, e, t),
                insertContentAt: (e, t, n) => ({
                    tr: o,
                    dispatch: i,
                    editor: s
                }) => {
                    if (i) {
                        let i;
                        n = {
                            parseOptions: {},
                            updateSelection: !0,
                            applyInputRules: !1,
                            applyPasteRules: !1,
                            ...n
                        };
                        let l = _(t, s.schema, {
                            parseOptions: {
                                preserveWhitespace: "full",
                                ...n.parseOptions
                            }
                        });
                        if ("<>" === l.toString()) return !0;
                        let {
                            from: d,
                            to: c
                        } = "number" == typeof e ? {
                            from: e,
                            to: e
                        } : {
                            from: e.from,
                            to: e.to
                        }, u = !0, p = !0;
                        if ((Q(l) ? l : [l]).forEach(e => {
                                e.check(), u = !!u && e.isText && 0 === e.marks.length, p = !!p && e.isBlock
                            }), d === c && p) {
                            let {
                                parent: e
                            } = o.doc.resolve(d);
                            !e.isTextblock || e.type.spec.code || e.childCount || (d -= 1, c += 1)
                        }
                        u ? (i = Array.isArray(t) ? t.map(e => e.text || "").join("") : "object" == typeof t && t && t.text ? t.text : t, o.insertText(i, d, c)) : (i = l, o.replaceWith(d, c, i)), n.updateSelection && function(e, t, n) {
                            let o = e.steps.length - 1;
                            if (o < t) return;
                            let i = e.steps[o];
                            if (!(i instanceof a.Pu || i instanceof a.FC)) return;
                            let s = e.mapping.maps[o],
                                l = 0;
                            s.forEach((e, t, n, r) => {
                                0 === l && (l = r)
                            }), e.setSelection(r.Y1.near(e.doc.resolve(l), -1))
                        }(o, o.steps.length - 1, 0), n.applyInputRules && o.setMeta("applyInputRules", {
                            from: d,
                            text: i
                        }), n.applyPasteRules && o.setMeta("applyPasteRules", {
                            from: d,
                            text: i
                        })
                    }
                    return !0
                },
                joinUp: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.MI)(e, t),
                joinDown: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.Ig)(e, t),
                joinBackward: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.al)(e, t),
                joinForward: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.Y_)(e, t),
                joinItemBackward: () => ({
                    tr: e,
                    state: t,
                    dispatch: n
                }) => {
                    try {
                        let r = (0, a.GJ)(t.doc, t.selection.$from.pos, -1);
                        if (null == r) return !1;
                        return e.join(r, 2), n && n(e), !0
                    } catch {
                        return !1
                    }
                },
                joinItemForward: () => ({
                    state: e,
                    dispatch: t,
                    tr: n
                }) => {
                    try {
                        let r = (0, a.GJ)(e.doc, e.selection.$from.pos, 1);
                        if (null == r) return !1;
                        return n.join(r, 2), t && t(n), !0
                    } catch (e) {
                        return !1
                    }
                },
                joinTextblockBackward: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.rr)(e, t),
                joinTextblockForward: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.cR)(e, t),
                keyboardShortcut: e => ({
                    editor: t,
                    view: n,
                    tr: r,
                    dispatch: o
                }) => {
                    let i = (function(e) {
                            let t, n, r, o;
                            let i = e.split(/-(?!$)/),
                                s = i[i.length - 1];
                            "Space" === s && (s = " ");
                            for (let e = 0; e < i.length - 1; e += 1) {
                                let s = i[e];
                                if (/^(cmd|meta|m)$/i.test(s)) o = !0;
                                else if (/^a(lt)?$/i.test(s)) t = !0;
                                else if (/^(c|ctrl|control)$/i.test(s)) n = !0;
                                else if (/^s(hift)?$/i.test(s)) r = !0;
                                else if (/^mod$/i.test(s)) G() || X() ? o = !0 : n = !0;
                                else throw Error(`Unrecognized modifier name: ${s}`)
                            }
                            return t && (s = `Alt-${s}`), n && (s = `Ctrl-${s}`), o && (s = `Meta-${s}`), r && (s = `Shift-${s}`), s
                        })(e).split(/-(?!$)/),
                        s = i.find(e => !["Alt", "Ctrl", "Meta", "Shift"].includes(e)),
                        a = new KeyboardEvent("keydown", {
                            key: "Space" === s ? " " : s,
                            altKey: i.includes("Alt"),
                            ctrlKey: i.includes("Ctrl"),
                            metaKey: i.includes("Meta"),
                            shiftKey: i.includes("Shift"),
                            bubbles: !0,
                            cancelable: !0
                        }),
                        l = t.captureTransaction(() => {
                            n.someProp("handleKeyDown", e => e(n, a))
                        });
                    return null == l || l.steps.forEach(e => {
                        let t = e.map(r.mapping);
                        t && o && r.maybeStep(t)
                    }), !0
                },
                lift: (e, t = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    let o = g(e, n.schema);
                    return !!Z(n, o, t) && (0, l.xb)(n, r)
                },
                liftEmptyBlock: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.X0)(e, t),
                liftListItem: e => ({
                    state: t,
                    dispatch: n
                }) => {
                    let r = g(e, t.schema);
                    return (0, d.IB)(r)(t, n)
                },
                newlineInCode: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.QK)(e, t),
                resetAttributes: (e, t) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let i = null,
                        s = null,
                        a = ee("string" == typeof e ? e : e.name, r.schema);
                    return !!a && ("node" === a && (i = g(e, r.schema)), "mark" === a && (s = K(e, r.schema)), o && n.selection.ranges.forEach(e => {
                        r.doc.nodesBetween(e.$from.pos, e.$to.pos, (e, r) => {
                            i && i === e.type && n.setNodeMarkup(r, void 0, et(e.attrs, t)), s && e.marks.length && e.marks.forEach(o => {
                                s === o.type && n.addMark(r, r + e.nodeSize, s.create(et(o.attrs, t)))
                            })
                        })
                    }), !0)
                },
                scrollIntoView: () => ({
                    tr: e,
                    dispatch: t
                }) => (t && e.scrollIntoView(), !0),
                selectAll: () => ({
                    tr: e,
                    commands: t
                }) => t.setTextSelection({
                    from: 0,
                    to: e.doc.content.size
                }),
                selectNodeBackward: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l._M)(e, t),
                selectNodeForward: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.o)(e, t),
                selectParentNode: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.N0)(e, t),
                selectTextblockEnd: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.nw)(e, t),
                selectTextblockStart: () => ({
                    state: e,
                    dispatch: t
                }) => (0, l.U9)(e, t),
                setContent: (e, t = !1, n = {}) => ({
                    tr: r,
                    editor: o,
                    dispatch: i
                }) => {
                    let {
                        doc: s
                    } = r, a = en(e, o.schema, n);
                    return i && r.replaceWith(0, s.content.size, a).setMeta("preventUpdate", !t), !0
                },
                setMark: (e, t = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let {
                        selection: i
                    } = n, {
                        empty: s,
                        ranges: a
                    } = i, l = K(e, r.schema);
                    if (o) {
                        if (s) {
                            let e = er(r, l);
                            n.addStoredMark(l.create({ ...e,
                                ...t
                            }))
                        } else a.forEach(e => {
                            let o = e.$from.pos,
                                i = e.$to.pos;
                            r.doc.nodesBetween(o, i, (e, r) => {
                                let s = Math.max(r, o),
                                    a = Math.min(r + e.nodeSize, i);
                                e.marks.find(e => e.type === l) ? e.marks.forEach(e => {
                                    l === e.type && n.addMark(s, a, l.create({ ...e.attrs,
                                        ...t
                                    }))
                                }) : n.addMark(s, a, l.create(t))
                            })
                        })
                    }
                    return function(e, t, n) {
                        var r;
                        let {
                            selection: o
                        } = t, i = null;
                        if (W(o) && (i = o.$cursor), i) {
                            let t = null !== (r = e.storedMarks) && void 0 !== r ? r : i.marks();
                            return !!n.isInSet(t) || !t.some(e => e.type.excludes(n))
                        }
                        let {
                            ranges: s
                        } = o;
                        return s.some(({
                            $from: t,
                            $to: r
                        }) => {
                            let o = 0 === t.depth && e.doc.inlineContent && e.doc.type.allowsMarkType(n);
                            return e.doc.nodesBetween(t.pos, r.pos, (e, t, r) => {
                                if (o) return !1;
                                if (e.isInline) {
                                    let t = !r || r.type.allowsMarkType(n),
                                        i = !!n.isInSet(e.marks) || !e.marks.some(e => e.type.excludes(n));
                                    o = t && i
                                }
                                return !o
                            }), o
                        })
                    }(r, n, l)
                },
                setMeta: (e, t) => ({
                    tr: n
                }) => (n.setMeta(e, t), !0),
                setNode: (e, t = {}) => ({
                    state: n,
                    dispatch: r,
                    chain: o
                }) => {
                    let i = g(e, n.schema);
                    return i.isTextblock ? o().command(({
                        commands: e
                    }) => !!(0, l.uJ)(i, t)(n) || e.clearNodes()).command(({
                        state: e
                    }) => (0, l.uJ)(i, t)(e, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1)
                },
                setNodeSelection: e => ({
                    tr: t,
                    dispatch: n
                }) => {
                    if (n) {
                        let {
                            doc: n
                        } = t, o = q(e, 0, n.content.size), i = r.qv.create(n, o);
                        t.setSelection(i)
                    }
                    return !0
                },
                setTextSelection: e => ({
                    tr: t,
                    dispatch: n
                }) => {
                    if (n) {
                        let {
                            doc: n
                        } = t, {
                            from: o,
                            to: i
                        } = "number" == typeof e ? {
                            from: e,
                            to: e
                        } : e, s = r.Bs.atStart(n).from, a = r.Bs.atEnd(n).to, l = q(o, s, a), d = q(i, s, a), c = r.Bs.create(n, l, d);
                        t.setSelection(c)
                    }
                    return !0
                },
                sinkListItem: e => ({
                    state: t,
                    dispatch: n
                }) => {
                    let r = g(e, t.schema);
                    return (0, d.bw)(r)(t, n)
                },
                splitBlock: ({
                    keepMarks: e = !0
                } = {}) => ({
                    tr: t,
                    state: n,
                    dispatch: o,
                    editor: i
                }) => {
                    let {
                        selection: s,
                        doc: l
                    } = t, {
                        $from: d,
                        $to: c
                    } = s, u = ec(i.extensionManager.attributes, d.node().type.name, d.node().attrs);
                    if (s instanceof r.qv && s.node.isBlock) return !!(d.parentOffset && (0, a.Ax)(l, d.pos)) && (o && (e && eh(n, i.extensionManager.splittableMarks), t.split(d.pos).scrollIntoView()), !0);
                    if (!d.parent.isBlock) return !1;
                    if (o) {
                        let o = c.parentOffset === c.parent.content.size;
                        s instanceof r.Bs && t.deleteSelection();
                        let l = 0 === d.depth ? void 0 : function(e) {
                                for (let t = 0; t < e.edgeCount; t += 1) {
                                    let {
                                        type: n
                                    } = e.edge(t);
                                    if (n.isTextblock && !n.hasRequiredAttrs()) return n
                                }
                                return null
                            }(d.node(-1).contentMatchAt(d.indexAfter(-1))),
                            p = o && l ? [{
                                type: l,
                                attrs: u
                            }] : void 0,
                            h = (0, a.Ax)(t.doc, t.mapping.map(d.pos), 1, p);
                        if (!p && !h && (0, a.Ax)(t.doc, t.mapping.map(d.pos), 1, l ? [{
                                type: l
                            }] : void 0) && (h = !0, p = l ? [{
                                type: l,
                                attrs: u
                            }] : void 0), h && (t.split(t.mapping.map(d.pos), 1, p), l && !o && !d.parentOffset && d.parent.type !== l)) {
                            let e = t.mapping.map(d.before()),
                                n = t.doc.resolve(e);
                            d.node(-1).canReplaceWith(n.index(), n.index() + 1, l) && t.setNodeMarkup(t.mapping.map(d.before()), l)
                        }
                        e && eh(n, i.extensionManager.splittableMarks), t.scrollIntoView()
                    }
                    return !0
                },
                splitListItem: e => ({
                    tr: t,
                    state: n,
                    dispatch: o,
                    editor: i
                }) => {
                    var l;
                    let d = g(e, n.schema),
                        {
                            $from: c,
                            $to: u
                        } = n.selection,
                        p = n.selection.node;
                    if (p && p.isBlock || c.depth < 2 || !c.sameParent(u)) return !1;
                    let h = c.node(-1);
                    if (h.type !== d) return !1;
                    let f = i.extensionManager.attributes;
                    if (0 === c.parent.content.size && c.node(-1).childCount === c.indexAfter(-1)) {
                        if (2 === c.depth || c.node(-3).type !== d || c.index(-2) !== c.node(-2).childCount - 1) return !1;
                        if (o) {
                            let e = s.HY.empty,
                                n = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
                            for (let t = c.depth - n; t >= c.depth - 3; t -= 1) e = s.HY.from(c.node(t).copy(e));
                            let o = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3,
                                i = ec(f, c.node().type.name, c.node().attrs),
                                a = (null === (l = d.contentMatch.defaultType) || void 0 === l ? void 0 : l.createAndFill(i)) || void 0;
                            e = e.append(s.HY.from(d.createAndFill(null, a) || void 0));
                            let u = c.before(c.depth - (n - 1));
                            t.replace(u, c.after(-o), new s.p2(e, 4 - n, 0));
                            let p = -1;
                            t.doc.nodesBetween(u, t.doc.content.size, (e, t) => {
                                if (p > -1) return !1;
                                e.isTextblock && 0 === e.content.size && (p = t + 1)
                            }), p > -1 && t.setSelection(r.Bs.near(t.doc.resolve(p))), t.scrollIntoView()
                        }
                        return !0
                    }
                    let m = u.pos === c.end() ? h.contentMatchAt(0).defaultType : null,
                        y = ec(f, h.type.name, h.attrs),
                        v = ec(f, c.node().type.name, c.node().attrs);
                    if (t.delete(c.pos, u.pos), !(0, a.Ax)(t.doc, c.pos, 2)) return !1;
                    if (o) {
                        let {
                            selection: e,
                            storedMarks: r
                        } = n, {
                            splittableMarks: s
                        } = i.extensionManager, a = r || e.$to.parentOffset && e.$from.marks();
                        if (t.split(c.pos, 2, m ? [{
                                type: d,
                                attrs: y
                            }, {
                                type: m,
                                attrs: v
                            }] : [{
                                type: d,
                                attrs: y
                            }]).scrollIntoView(), !a || !o) return !0;
                        let l = a.filter(e => s.includes(e.type.name));
                        t.ensureMarks(l)
                    }
                    return !0
                },
                toggleList: (e, t, n, r = {}) => ({
                    editor: o,
                    tr: i,
                    state: s,
                    dispatch: a,
                    chain: l,
                    commands: d,
                    can: c
                }) => {
                    let {
                        extensions: u,
                        splittableMarks: p
                    } = o.extensionManager, h = g(e, s.schema), f = g(t, s.schema), {
                        selection: m,
                        storedMarks: y
                    } = s, {
                        $from: v,
                        $to: b
                    } = m, k = v.blockRange(b), w = y || m.$to.parentOffset && m.$from.marks();
                    if (!k) return !1;
                    let x = es(e => ep(e.type.name, u))(m);
                    if (k.depth >= 1 && x && k.depth - x.depth <= 1) {
                        if (x.node.type === h) return d.liftListItem(f);
                        if (ep(x.node.type.name, u) && h.validContent(x.node.content) && a) return l().command(() => (i.setNodeMarkup(x.pos, h), !0)).command(() => ef(i, h)).command(() => em(i, h)).run()
                    }
                    return n && w && a ? l().command(() => {
                        let e = c().wrapInList(h, r),
                            t = w.filter(e => p.includes(e.type.name));
                        return i.ensureMarks(t), !!e || d.clearNodes()
                    }).wrapInList(h, r).command(() => ef(i, h)).command(() => em(i, h)).run() : l().command(() => !!c().wrapInList(h, r) || d.clearNodes()).wrapInList(h, r).command(() => ef(i, h)).command(() => em(i, h)).run()
                },
                toggleMark: (e, t = {}, n = {}) => ({
                    state: r,
                    commands: o
                }) => {
                    let {
                        extendEmptyMarkRange: i = !1
                    } = n, s = K(e, r.schema);
                    return eu(r, s, t) ? o.unsetMark(s, {
                        extendEmptyMarkRange: i
                    }) : o.setMark(s, t)
                },
                toggleNode: (e, t, n = {}) => ({
                    state: r,
                    commands: o
                }) => {
                    let i = g(e, r.schema),
                        s = g(t, r.schema);
                    return Z(r, i, n) ? o.setNode(s) : o.setNode(i, n)
                },
                toggleWrap: (e, t = {}) => ({
                    state: n,
                    commands: r
                }) => {
                    let o = g(e, n.schema);
                    return Z(n, o, t) ? r.lift(o) : r.wrapIn(o, t)
                },
                undoInputRule: () => ({
                    state: e,
                    dispatch: t
                }) => {
                    let n = e.plugins;
                    for (let r = 0; r < n.length; r += 1) {
                        let o;
                        let i = n[r];
                        if (i.spec.isInputRules && (o = i.getState(e))) {
                            if (t) {
                                let t = e.tr,
                                    n = o.transform;
                                for (let e = n.steps.length - 1; e >= 0; e -= 1) t.step(n.steps[e].invert(n.docs[e]));
                                if (o.text) {
                                    let n = t.doc.resolve(o.from).marks();
                                    t.replaceWith(o.from, o.to, e.schema.text(o.text, n))
                                } else t.delete(o.from, o.to)
                            }
                            return !0
                        }
                    }
                    return !1
                },
                unsetAllMarks: () => ({
                    tr: e,
                    dispatch: t
                }) => {
                    let {
                        selection: n
                    } = e, {
                        empty: r,
                        ranges: o
                    } = n;
                    return !!r || (t && o.forEach(t => {
                        e.removeMark(t.$from.pos, t.$to.pos)
                    }), !0)
                },
                unsetMark: (e, t = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    var i;
                    let {
                        extendEmptyMarkRange: s = !1
                    } = t, {
                        selection: a
                    } = n, l = K(e, r.schema), {
                        $from: d,
                        empty: c,
                        ranges: u
                    } = a;
                    if (!o) return !0;
                    if (c && s) {
                        let {
                            from: e,
                            to: t
                        } = a, r = null === (i = d.marks().find(e => e.type === l)) || void 0 === i ? void 0 : i.attrs, o = V(d, l, r);
                        o && (e = o.from, t = o.to), n.removeMark(e, t, l)
                    } else u.forEach(e => {
                        n.removeMark(e.$from.pos, e.$to.pos, l)
                    });
                    return n.removeStoredMark(l), !0
                },
                updateAttributes: (e, t = {}) => ({
                    tr: n,
                    state: r,
                    dispatch: o
                }) => {
                    let i = null,
                        s = null,
                        a = ee("string" == typeof e ? e : e.name, r.schema);
                    return !!a && ("node" === a && (i = g(e, r.schema)), "mark" === a && (s = K(e, r.schema)), o && n.selection.ranges.forEach(e => {
                        let o = e.$from.pos,
                            a = e.$to.pos;
                        r.doc.nodesBetween(o, a, (e, r) => {
                            i && i === e.type && n.setNodeMarkup(r, void 0, { ...e.attrs,
                                ...t
                            }), s && e.marks.length && e.marks.forEach(i => {
                                if (s === i.type) {
                                    let l = Math.max(r, o),
                                        d = Math.min(r + e.nodeSize, a);
                                    n.addMark(l, d, s.create({ ...i.attrs,
                                        ...t
                                    }))
                                }
                            })
                        })
                    }), !0)
                },
                wrapIn: (e, t = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    let o = g(e, n.schema);
                    return (0, l.ym)(o, t)(n, r)
                },
                wrapInList: (e, t = {}) => ({
                    state: n,
                    dispatch: r
                }) => {
                    let o = g(e, n.schema);
                    return (0, d.KI)(o, t)(n, r)
                }
            });
            let ey = R.create({
                    name: "commands",
                    addCommands: () => ({ ...eg
                    })
                }),
                ev = R.create({
                    name: "editable",
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("editable"),
                            props: {
                                editable: () => this.editor.options.editable
                            }
                        })]
                    }
                }),
                eb = R.create({
                    name: "focusEvents",
                    addProseMirrorPlugins() {
                        let {
                            editor: e
                        } = this;
                        return [new r.Sy({
                            key: new r.H$("focusEvents"),
                            props: {
                                handleDOMEvents: {
                                    focus: (t, n) => {
                                        e.isFocused = !0;
                                        let r = e.state.tr.setMeta("focus", {
                                            event: n
                                        }).setMeta("addToHistory", !1);
                                        return t.dispatch(r), !1
                                    },
                                    blur: (t, n) => {
                                        e.isFocused = !1;
                                        let r = e.state.tr.setMeta("blur", {
                                            event: n
                                        }).setMeta("addToHistory", !1);
                                        return t.dispatch(r), !1
                                    }
                                }
                            }
                        })]
                    }
                }),
                ek = R.create({
                    name: "keymap",
                    addKeyboardShortcuts() {
                        let e = () => this.editor.commands.first(({
                                commands: e
                            }) => [() => e.undoInputRule(), () => e.command(({
                                tr: t
                            }) => {
                                let {
                                    selection: n,
                                    doc: o
                                } = t, {
                                    empty: i,
                                    $anchor: s
                                } = n, {
                                    pos: a,
                                    parent: l
                                } = s, d = s.parent.isTextblock && a > 0 ? t.doc.resolve(a - 1) : s, c = d.parent.type.spec.isolating, u = s.pos - s.parentOffset, p = c && 1 === d.parent.childCount ? u === s.pos : r.Y1.atStart(o).from === a;
                                return !!i && !!l.type.isTextblock && !l.textContent.length && !!p && (!p || "paragraph" !== s.parent.type.name) && e.clearNodes()
                            }), () => e.deleteSelection(), () => e.joinBackward(), () => e.selectNodeBackward()]),
                            t = () => this.editor.commands.first(({
                                commands: e
                            }) => [() => e.deleteSelection(), () => e.deleteCurrentNode(), () => e.joinForward(), () => e.selectNodeForward()]),
                            n = {
                                Enter: () => this.editor.commands.first(({
                                    commands: e
                                }) => [() => e.newlineInCode(), () => e.createParagraphNear(), () => e.liftEmptyBlock(), () => e.splitBlock()]),
                                "Mod-Enter": () => this.editor.commands.exitCode(),
                                Backspace: e,
                                "Mod-Backspace": e,
                                "Shift-Backspace": e,
                                Delete: t,
                                "Mod-Delete": t,
                                "Mod-a": () => this.editor.commands.selectAll()
                            },
                            o = { ...n
                            },
                            i = { ...n,
                                "Ctrl-h": e,
                                "Alt-Backspace": e,
                                "Ctrl-d": t,
                                "Ctrl-Alt-Backspace": t,
                                "Alt-Delete": t,
                                "Alt-d": t,
                                "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
                                "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
                            };
                        return G() || X() ? i : o
                    },
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("clearDocument"),
                            appendTransaction: (e, t, n) => {
                                if (!(e.some(e => e.docChanged) && !t.doc.eq(n.doc))) return;
                                let {
                                    empty: o,
                                    from: i,
                                    to: s
                                } = t.selection, a = r.Y1.atStart(t.doc).from, l = r.Y1.atEnd(t.doc).to;
                                if (o || !(i === a && s === l) || 0 !== n.doc.textBetween(0, n.doc.content.size, " ", " ").length) return;
                                let d = n.tr,
                                    p = c({
                                        state: n,
                                        transaction: d
                                    }),
                                    {
                                        commands: h
                                    } = new u({
                                        editor: this.editor,
                                        state: p
                                    });
                                if (h.clearNodes(), d.steps.length) return d
                            }
                        })]
                    }
                }),
                ew = R.create({
                    name: "tabindex",
                    addProseMirrorPlugins() {
                        return [new r.Sy({
                            key: new r.H$("tabindex"),
                            props: {
                                attributes: this.editor.isEditable ? {
                                    tabindex: "0"
                                } : {}
                            }
                        })]
                    }
                });
            class ex {
                constructor(e, t, n = !1, r = null) {
                    this.currentNode = null, this.actualDepth = null, this.isBlock = n, this.resolvedPos = e, this.editor = t, this.currentNode = r
                }
                get name() {
                    return this.node.type.name
                }
                get node() {
                    return this.currentNode || this.resolvedPos.node()
                }
                get element() {
                    return this.editor.view.domAtPos(this.pos).node
                }
                get depth() {
                    var e;
                    return null !== (e = this.actualDepth) && void 0 !== e ? e : this.resolvedPos.depth
                }
                get pos() {
                    return this.resolvedPos.pos
                }
                get content() {
                    return this.node.content
                }
                set content(e) {
                    let t = this.from,
                        n = this.to;
                    if (this.isBlock) {
                        if (0 === this.content.size) {
                            console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
                            return
                        }
                        t = this.from + 1, n = this.to - 1
                    }
                    this.editor.commands.insertContentAt({
                        from: t,
                        to: n
                    }, e)
                }
                get attributes() {
                    return this.node.attrs
                }
                get textContent() {
                    return this.node.textContent
                }
                get size() {
                    return this.node.nodeSize
                }
                get from() {
                    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth)
                }
                get range() {
                    return {
                        from: this.from,
                        to: this.to
                    }
                }
                get to() {
                    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1)
                }
                get parent() {
                    if (0 === this.depth) return null;
                    let e = this.resolvedPos.start(this.resolvedPos.depth - 1);
                    return new ex(this.resolvedPos.doc.resolve(e), this.editor)
                }
                get before() {
                    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
                    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new ex(e, this.editor)
                }
                get after() {
                    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
                    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new ex(e, this.editor)
                }
                get children() {
                    let e = [];
                    return this.node.content.forEach((t, n) => {
                        let r = t.isBlock && !t.isTextblock,
                            o = this.pos + n + 1,
                            i = this.resolvedPos.doc.resolve(o);
                        if (!r && i.depth <= this.depth) return;
                        let s = new ex(i, this.editor, r, r ? t : null);
                        r && (s.actualDepth = this.depth + 1), e.push(new ex(i, this.editor, r, r ? t : null))
                    }), e
                }
                get firstChild() {
                    return this.children[0] || null
                }
                get lastChild() {
                    let e = this.children;
                    return e[e.length - 1] || null
                }
                closest(e, t = {}) {
                    let n = null,
                        r = this.parent;
                    for (; r && !n;) {
                        if (r.node.type.name === e) {
                            if (Object.keys(t).length > 0) {
                                let e = r.node.attrs,
                                    n = Object.keys(t);
                                for (let r = 0; r < n.length; r += 1) {
                                    let o = n[r];
                                    if (e[o] !== t[o]) break
                                }
                            } else n = r
                        }
                        r = r.parent
                    }
                    return n
                }
                querySelector(e, t = {}) {
                    return this.querySelectorAll(e, t, !0)[0] || null
                }
                querySelectorAll(e, t = {}, n = !1) {
                    let r = [];
                    if (!this.children || 0 === this.children.length) return r;
                    let o = Object.keys(t);
                    return this.children.forEach(i => {
                        (!n || !(r.length > 0)) && (i.node.type.name === e && o.every(e => t[e] === i.node.attrs[e]) && r.push(i), n && r.length > 0 || (r = r.concat(i.querySelectorAll(e, t, n))))
                    }), r
                }
                setAttribute(e) {
                    let t = this.editor.state.selection;
                    this.editor.chain().setTextSelection(this.from).updateAttributes(this.node.type.name, e).setTextSelection(t.from).run()
                }
            }
            let eM = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
            class eS extends p {
                constructor(e = {}) {
                    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
                        element: document.createElement("div"),
                        content: "",
                        injectCSS: !0,
                        injectNonce: void 0,
                        extensions: [],
                        autofocus: !1,
                        editable: !0,
                        editorProps: {},
                        parseOptions: {},
                        coreExtensionOptions: {},
                        enableInputRules: !0,
                        enablePasteRules: !0,
                        enableCoreExtensions: !0,
                        onBeforeCreate: () => null,
                        onCreate: () => null,
                        onUpdate: () => null,
                        onSelectionUpdate: () => null,
                        onTransaction: () => null,
                        onFocus: () => null,
                        onBlur: () => null,
                        onDestroy: () => null
                    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", {
                        editor: this
                    }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
                        this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", {
                            editor: this
                        }))
                    }, 0)
                }
                get storage() {
                    return this.extensionStorage
                }
                get commands() {
                    return this.commandManager.commands
                }
                chain() {
                    return this.commandManager.chain()
                }
                can() {
                    return this.commandManager.can()
                }
                injectCSS() {
                    this.options.injectCSS && document && (this.css = function(e, t, n) {
                        let r = document.querySelector("style[data-tiptap-style]");
                        if (null !== r) return r;
                        let o = document.createElement("style");
                        return t && o.setAttribute("nonce", t), o.setAttribute("data-tiptap-style", ""), o.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(o), o
                    }(eM, this.options.injectNonce))
                }
                setOptions(e = {}) {
                    this.options = { ...this.options,
                        ...e
                    }, this.view && this.state && !this.isDestroyed && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state))
                }
                setEditable(e, t = !0) {
                    this.setOptions({
                        editable: e
                    }), t && this.emit("update", {
                        editor: this,
                        transaction: this.state.tr
                    })
                }
                get isEditable() {
                    return this.options.editable && this.view && this.view.editable
                }
                get state() {
                    return this.view.state
                }
                registerPlugin(e, t) {
                    let n = b(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e],
                        r = this.state.reconfigure({
                            plugins: n
                        });
                    this.view.updateState(r)
                }
                unregisterPlugin(e) {
                    if (this.isDestroyed) return;
                    let t = "string" == typeof e ? `${e}$` : e.key,
                        n = this.state.reconfigure({
                            plugins: this.state.plugins.filter(e => !e.key.startsWith(t))
                        });
                    this.view.updateState(n)
                }
                createExtensionManager() {
                    var e, t;
                    let n = [...this.options.enableCoreExtensions ? [ev, L.configure({
                        blockSeparator: null === (t = null === (e = this.options.coreExtensionOptions) || void 0 === e ? void 0 : e.clipboardTextSerializer) || void 0 === t ? void 0 : t.blockSeparator
                    }), ey, eb, ek, ew] : [], ...this.options.extensions].filter(e => ["extension", "node", "mark"].includes(null == e ? void 0 : e.type));
                    this.extensionManager = new B(n, this)
                }
                createCommandManager() {
                    this.commandManager = new u({
                        editor: this
                    })
                }
                createSchema() {
                    this.schema = this.extensionManager.schema
                }
                createView() {
                    let e = en(this.options.content, this.schema, this.options.parseOptions),
                        t = J(e, this.options.autofocus);
                    this.view = new o.tk(this.options.element, { ...this.options.editorProps,
                        dispatchTransaction: this.dispatchTransaction.bind(this),
                        state: r.yy.create({
                            doc: e,
                            selection: t || void 0
                        })
                    });
                    let n = this.state.reconfigure({
                        plugins: this.extensionManager.plugins
                    });
                    this.view.updateState(n), this.createNodeViews(), this.prependClass(), this.view.dom.editor = this
                }
                createNodeViews() {
                    this.view.setProps({
                        nodeViews: this.extensionManager.nodeViews
                    })
                }
                prependClass() {
                    this.view.dom.className = `tiptap ${this.view.dom.className}`
                }
                captureTransaction(e) {
                    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
                    let t = this.capturedTransaction;
                    return this.capturedTransaction = null, t
                }
                dispatchTransaction(e) {
                    if (this.view.isDestroyed) return;
                    if (this.isCapturingTransaction) {
                        if (!this.capturedTransaction) {
                            this.capturedTransaction = e;
                            return
                        }
                        e.steps.forEach(e => {
                            var t;
                            return null === (t = this.capturedTransaction) || void 0 === t ? void 0 : t.step(e)
                        });
                        return
                    }
                    let t = this.state.apply(e),
                        n = !this.state.selection.eq(t.selection);
                    this.view.updateState(t), this.emit("transaction", {
                        editor: this,
                        transaction: e
                    }), n && this.emit("selectionUpdate", {
                        editor: this,
                        transaction: e
                    });
                    let r = e.getMeta("focus"),
                        o = e.getMeta("blur");
                    r && this.emit("focus", {
                        editor: this,
                        event: r.event,
                        transaction: e
                    }), o && this.emit("blur", {
                        editor: this,
                        event: o.event,
                        transaction: e
                    }), !e.docChanged || e.getMeta("preventUpdate") || this.emit("update", {
                        editor: this,
                        transaction: e
                    })
                }
                getAttributes(e) {
                    return ea(this.state, e)
                }
                isActive(e, t) {
                    let n = "string" == typeof e ? e : null,
                        r = "string" == typeof e ? t : e;
                    return function(e, t, n = {}) {
                        if (!t) return Z(e, null, n) || eu(e, null, n);
                        let r = ee(t, e.schema);
                        return "node" === r ? Z(e, t, n) : "mark" === r && eu(e, t, n)
                    }(this.state, n, r)
                }
                getJSON() {
                    return this.state.doc.toJSON()
                }
                getHTML() {
                    return function(e, t) {
                        let n = s.PW.fromSchema(t).serializeFragment(e),
                            r = document.implementation.createHTMLDocument().createElement("div");
                        return r.appendChild(n), r.innerHTML
                    }(this.state.doc.content, this.schema)
                }
                getText(e) {
                    let {
                        blockSeparator: t = "\n\n",
                        textSerializers: n = {}
                    } = e || {};
                    return function(e, t) {
                        let n = {
                            from: 0,
                            to: e.content.size
                        };
                        return D(e, n, t)
                    }(this.state.doc, {
                        blockSeparator: t,
                        textSerializers: { ...z(this.schema),
                            ...n
                        }
                    })
                }
                get isEmpty() {
                    return function(e) {
                        var t;
                        let n = null === (t = e.type.createAndFill()) || void 0 === t ? void 0 : t.toJSON(),
                            r = e.toJSON();
                        return JSON.stringify(n) === JSON.stringify(r)
                    }(this.state.doc)
                }
                getCharacterCount() {
                    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2
                }
                destroy() {
                    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners()
                }
                get isDestroyed() {
                    var e;
                    return !(null === (e = this.view) || void 0 === e ? void 0 : e.docView)
                }
                $node(e, t) {
                    var n;
                    return (null === (n = this.$doc) || void 0 === n ? void 0 : n.querySelector(e, t)) || null
                }
                $nodes(e, t) {
                    var n;
                    return (null === (n = this.$doc) || void 0 === n ? void 0 : n.querySelectorAll(e, t)) || null
                }
                $pos(e) {
                    return new ex(this.state.doc.resolve(e), this)
                }
                get $doc() {
                    return this.$pos(0)
                }
            }

            function eO(e) {
                return new C({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r
                    }) => {
                        let o = k(e.getAttributes, void 0, r);
                        if (!1 === o || null === o) return null;
                        let {
                            tr: i
                        } = t, s = r[r.length - 1], a = r[0];
                        if (s) {
                            let r = a.search(/\S/),
                                l = n.from + a.indexOf(s),
                                d = l + s.length;
                            if (ed(n.from, n.to, t.doc).filter(t => t.mark.type.excluded.find(n => n === e.type && n !== t.mark.type)).filter(e => e.to > l).length) return null;
                            d < n.to && i.delete(d, n.to), l > n.from && i.delete(n.from + r, l);
                            let c = n.from + r + s.length;
                            i.addMark(n.from + r, c, e.type.create(o || {})), i.removeStoredMark(e.type)
                        }
                    }
                })
            }

            function eE(e) {
                return new C({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r
                    }) => {
                        let o = k(e.getAttributes, void 0, r) || {},
                            {
                                tr: i
                            } = t,
                            s = n.from,
                            a = n.to,
                            l = e.type.create(o);
                        if (r[1]) {
                            let e = s + r[0].lastIndexOf(r[1]);
                            e > a ? e = a : a = e + r[1].length;
                            let t = r[0][r[0].length - 1];
                            i.insertText(t, s + r[0].length - 1), i.replaceWith(e, a, l)
                        } else r[0] && i.insert(s - 1, e.type.create(o)).delete(i.mapping.map(s), i.mapping.map(a));
                        i.scrollIntoView()
                    }
                })
            }

            function eC(e) {
                return new C({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r
                    }) => {
                        let o = t.doc.resolve(n.from),
                            i = k(e.getAttributes, void 0, r) || {};
                        if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), e.type)) return null;
                        t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, i)
                    }
                })
            }

            function eT(e) {
                return new C({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r,
                        chain: o
                    }) => {
                        let i = k(e.getAttributes, void 0, r) || {},
                            s = t.tr.delete(n.from, n.to),
                            l = s.doc.resolve(n.from).blockRange(),
                            d = l && (0, a.nd)(l, e.type, i);
                        if (!d) return null;
                        if (s.wrap(l, d), e.keepMarks && e.editor) {
                            let {
                                selection: n,
                                storedMarks: r
                            } = t, {
                                splittableMarks: o
                            } = e.editor.extensionManager, i = r || n.$to.parentOffset && n.$from.marks();
                            if (i) {
                                let e = i.filter(e => o.includes(e.type.name));
                                s.ensureMarks(e)
                            }
                        }
                        if (e.keepAttributes) {
                            let t = "bulletList" === e.type.name || "orderedList" === e.type.name ? "listItem" : "taskList";
                            o().updateAttributes(t, i).run()
                        }
                        let c = s.doc.resolve(n.from - 1).nodeBefore;
                        c && c.type === e.type && (0, a.Mn)(s.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, c)) && s.join(n.from - 1)
                    }
                })
            }
            class eP {
                constructor(e = {}) {
                    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
                        name: this.name,
                        defaultOptions: {}
                    }, this.config = { ...this.config,
                        ...e
                    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = k(h(this, "addOptions", {
                        name: this.name
                    }))), this.storage = k(h(this, "addStorage", {
                        name: this.name,
                        options: this.options
                    })) || {}
                }
                static create(e = {}) {
                    return new eP(e)
                }
                configure(e = {}) {
                    let t = this.extend();
                    return t.options = I(this.options, e), t.storage = k(h(t, "addStorage", {
                        name: t.name,
                        options: t.options
                    })), t
                }
                extend(e = {}) {
                    let t = new eP({ ...this.config,
                        ...e
                    });
                    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = k(h(t, "addOptions", {
                        name: t.name
                    })), t.storage = k(h(t, "addStorage", {
                        name: t.name,
                        options: t.options
                    })), t
                }
                static handleExit({
                    editor: e,
                    mark: t
                }) {
                    let {
                        tr: n
                    } = e.state, r = e.state.selection.$from;
                    if (r.pos === r.end()) {
                        let o = r.marks();
                        if (!o.find(e => (null == e ? void 0 : e.type.name) === t.name)) return !1;
                        let i = o.find(e => (null == e ? void 0 : e.type.name) === t.name);
                        return i && n.removeStoredMark(i), n.insertText(" ", r.pos), e.view.dispatch(n), !0
                    }
                    return !1
                }
            }
            class eA {
                constructor(e = {}) {
                    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
                        name: this.name,
                        defaultOptions: {}
                    }, this.config = { ...this.config,
                        ...e
                    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = k(h(this, "addOptions", {
                        name: this.name
                    }))), this.storage = k(h(this, "addStorage", {
                        name: this.name,
                        options: this.options
                    })) || {}
                }
                static create(e = {}) {
                    return new eA(e)
                }
                configure(e = {}) {
                    let t = this.extend();
                    return t.options = I(this.options, e), t.storage = k(h(t, "addStorage", {
                        name: t.name,
                        options: t.options
                    })), t
                }
                extend(e = {}) {
                    let t = new eA({ ...this.config,
                        ...e
                    });
                    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = k(h(t, "addOptions", {
                        name: t.name
                    })), t.storage = k(h(t, "addStorage", {
                        name: t.name,
                        options: t.options
                    })), t
                }
            }

            function ej(e) {
                return new A({
                    find: e.find,
                    handler: ({
                        state: t,
                        range: n,
                        match: r,
                        pasteEvent: o
                    }) => {
                        let i = k(e.getAttributes, void 0, r, o);
                        if (!1 === i || null === i) return null;
                        let {
                            tr: s
                        } = t, a = r[r.length - 1], l = r[0], d = n.to;
                        if (a) {
                            let r = l.search(/\S/),
                                o = n.from + l.indexOf(a),
                                c = o + a.length;
                            if (ed(n.from, n.to, t.doc).filter(t => t.mark.type.excluded.find(n => n === e.type && n !== t.mark.type)).filter(e => e.to > o).length) return null;
                            c < n.to && s.delete(c, n.to), o > n.from && s.delete(n.from + r, o), d = n.from + r + a.length, s.addMark(n.from + r, d, e.type.create(i || {})), s.removeStoredMark(e.type)
                        }
                    }
                })
            }

            function e$(e) {
                return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }
        }
    }
]);