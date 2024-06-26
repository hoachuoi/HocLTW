! function(o, e) {
    function i(o) {
        for (var e = i.options, t = e.parser[e.strictMode ? "strict" : "loose"].exec(o), n = {}, a = 14; a--;) n[e.key[a]] = t[a] || "";
        return n[e.q.name] = {}, n[e.key[12]].replace(e.q.parser, function(o, i, t) {
            i && (n[e.q.name][i] = t)
        }), n
    }
    i.options = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
    var t = function() {
        var e = !1;
        return function(o) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(o) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(o.substr(0, 4))) && (e = !0)
        }(navigator.userAgent || navigator.vendor || o.opera), e
    }();
    o.dnnModal = {
        load: function() {
            try {
                if (void 0 !== parent.location.href) {
                    var o = parent,
                        e = o.parent;
                    if ("undefined" != typeof e.$find)
                        if (-1 == location.href.indexOf("popUp") || o.location.href.indexOf("popUp") > -1) {
                            var i = o.jQuery("#iPopUp"),
                                t = i.dialog("option", "refresh"),
                                n = i.dialog("option", "closingUrl"),
                                a = i.dialog("option", "minWidth"),
                                r = i.dialog("option", "minHeight"),
                                l = i.dialog("option", "showReturn");
                            n || (n = location.href), i.dialog("isOpen") === !0 && i.dialog("option", {
                                close: function(o, e) {
                                    dnnModal.refreshPopup({
                                        url: n,
                                        width: a,
                                        height: r,
                                        showReturn: l,
                                        refresh: t
                                    })
                                }
                            }).dialog("close")
                        } else o.jQuery("#iPopUp").dialog({
                            autoOpen: !1,
                            title: document.title
                        })
                }
                return !1
            } catch (d) {
                return !0
            }
        },
        show: function(n, a, r, l, d, s) {
            var p = e("#iPopUp");
            p.length && (p[0].src = "about:blank", p.remove()), p = e('<iframe id="iPopUp" name="iPopUp" src="about:blank" scrolling="auto" frameborder="0"></iframe>'), e(document.body).append(p), e(document).find("html").css("overflow", "hidden");
            for (var c = document.styleSheets, h = !1, m = 0, g = c.length; g > m; m++) {
                var u = c[m].href;
                if ("string" == typeof u && u.indexOf("admin.css") > -1) {
                    h = !0;
                    break
                }
            }
            var f = !h && (e(o).width() < 481 || t);
            f ? e("html").addClass("mobileView") : e("html").removeClass("mobileView");
            var w = 0,
                v = function() {
                    var o = e('<div class="dnnLoading"></div>');
                    o.css({
                        width: p.width(),
                        height: p.height()
                    }), p.before(o)
                },
                b = function() {
                    p.prev(".dnnLoading").remove()
                },
                y = function() {
                    p.bind("load", function() {
                        b();
                        var e = document.getElementById("iPopUp"),
                            t = o.location.hostname.toLowerCase(),
                            a = o.location.port.toLowerCase(),
                            r = i(n),
                            l = r.host.toLowerCase(),
                            d = r.port.toLowerCase();
                        l = l ? l : t, d = d ? d : a;
                        var s = t === l && a === d;
                        if (s) try {
                            if (f) {
                                var c = e.contentDocument.body,
                                    h = e.contentDocument.documentElement;
                                h.style.width = w + "px", c.className += "mobileView dnnFormPopup dnnFormPopupMobileView";
                                var m = Math.max(c.scrollHeight, c.offsetHeight, h.clientHeight, h.scrollHeight, h.offsetHeight);
                                p.css("height", m + 100).dialog("option", "position", {
                                    my: "top",
                                    at: "top"
                                })
                            }
                            e.contentWindow.dnnModal.show = function(o, e, i, t, n, a) {
                                var r = parent,
                                    l = r.jQuery("#iPopUp");
                                a || (a = location.href), l.dialog("isOpen") && l.dialog("option", {
                                    close: function() {
                                        parent.dnnModal.show(o, e, i, t, n, a)
                                    }
                                }).dialog("close")
                            }
                        } catch (g) {}
                    }), p[0].src = n, "function" == typeof e.ui.dialog.prototype.options.open && e.ui.dialog.prototype.options.open()
                };
            if (f) {
                w = e(o).width() - 100;
                var k = e("body").css("height");
                p.dialog({
                    modal: !0,
                    autoOpen: !0,
                    dialogClass: "dnnFormPopup dnnFormPopupMobileView",
                    resizable: !1,
                    closeOnEscape: !0,
                    refresh: d,
                    showReturn: a,
                    closingUrl: s,
                    minHeight: r,
                    position: {
                        my: "top",
                        at: "top"
                    },
                    draggable: !1,
                    open: function() {
                        e("#Form").hide(), e("body").css("height", "auto"), p.parent().css({
                            width: "auto",
                            left: "0",
                            right: "0",
                            top: "0",
                            "box-shadow": "none"
                        }), o.scrollTo(0, 0), y()
                    },
                    close: function() {
                        e("#Form").show(), k && e("body").css("height", k), o.scrollTo(0, 0), o.dnnModal.closePopUp(d, s)
                    }
                })
            } else if (p.dialog({
                    modal: !0,
                    autoOpen: !0,
                    dialogClass: "dnnFormPopup",
                    position: {
                        my: "center",
                        at: "center"
                    },
                    minWidth: l,
                    minHeight: r,
                    maxWidth: 1920,
                    maxHeight: 1080,
                    resizable: !0,
                    closeOnEscape: !0,
                    refresh: d,
                    showReturn: a,
                    closingUrl: s,
                    open: y,
                    close: function() {
                        o.dnnModal.closePopUp(d, s)
                    }
                }).width(l - 11).height(r - 11), 0 === p.parent().find(".ui-dialog-title").next("a.dnnModalCtrl").length) {
                var x = e('<a class="dnnModalCtrl"></a>');
                p.parent().find(".ui-dialog-titlebar-close").wrap(x);
                var M = e('<a href="#" class="dnnToggleMax"><span>Max</span></a>');
                p.parent().find(".ui-dialog-titlebar-close").before(M), M.click(function(i) {
                    i.preventDefault();
                    var t, n, a = e(o),
                        r = 100;
                    p.data("isMaximized") ? (t = p.data("height") + r, n = p.data("width"), p.data("isMaximized", !1)) : (p.data("height", p.dialog("option", "minHeight")).data("width", p.dialog("option", "minWidth")), t = a.height() - 46, n = a.width() - 40, p.data("isMaximized", !0)), p.dialog("option", "height", t), p.dialog("option", "width", n), p.dialog("option", "position", {
                        my: "center",
                        at: "center",
                        of: o
                    })
                })
            }
            return v(), "true" === a.toString() ? !1 : void 0
        },
        closePopUp: function(o, i) {
            var t = parent,
                n = t.jQuery("#iPopUp");
            ("undefined" == typeof o || null == o) && (o = !0), "true" == o.toString() ? (("undefined" == typeof i || "" == i) && (i = t.location.href), t.location.href = i, n.hide()) : n.dialog("option", "close", null).dialog("close"), e(t.document).find("html").css("overflow", "")
        },
        refreshPopup: function(o) {
            var e = parent,
                i = e.parent;
            e.location.href !== i.location.href && e.location.href !== o.url ? i.dnnModal.show(o.url, o.showReturn, o.height, o.width, o.refresh, o.closingUrl) : dnnModal.closePopUp(o.refresh, o.url)
        }
    }, o.dnnModal.load()
}(window, jQuery);