var DNN_COL_DELIMITER = String.fromCharCode(16);
var DNN_ROW_DELIMITER = String.fromCharCode(15);
var __dnn_m_bPageLoaded = false;
if (window.addEventListener) {
    window.addEventListener("load", __dnn_Page_OnLoad, false)
} else {
    window.attachEvent("onload", __dnn_Page_OnLoad)
}

function __dnn_ClientAPIEnabled() {
    return typeof(dnn) != "undefined" && typeof(dnn.dom) != "undefined"
}

function __dnn_Page_OnLoad() {
    if (__dnn_ClientAPIEnabled()) {
        dnn.dom.attachEvent(window, "onscroll", __dnn_bodyscroll)
    }
    __dnn_m_bPageLoaded = true
}

function __dnn_KeyDown(iKeyCode, sFunc, e) {
    if (e == null) {
        e = window.event
    }
    if (e.keyCode == iKeyCode) {
        eval(unescape(sFunc));
        return false
    }
}

function __dnn_bodyscroll() {
    var a = document.forms[0];
    if (__dnn_ClientAPIEnabled() && __dnn_m_bPageLoaded && typeof(a.ScrollTop) != "undefined") {
        a.ScrollTop.value = document.documentElement.scrollTop ? document.documentElement.scrollTop : dnn.dom.getByTagName("body")[0].scrollTop
    }
}

function __dnn_setScrollTop(c) {
    if (__dnn_ClientAPIEnabled()) {
        if (c == null) {
            c = document.forms[0].ScrollTop.value
        }
        var a = dnn.getVar("ScrollToControl");
        if (a != null && a.length > 0) {
            var b = dnn.dom.getById(a);
            if (b != null) {
                c = dnn.dom.positioning.elementTop(b);
                dnn.setVar("ScrollToControl", "")
            }
        }
        if (document.getElementsByTagName("html")[0].style.overflow != "hidden") {
            window.scrollTo(0, c)
        }
    }
}

function __dnn_SetInitialFocus(a) {
    var b = dnn.dom.getById(a);
    if (b != null && __dnn_CanReceiveFocus(b)) {
        b.focus()
    }
}

function __dnn_CanReceiveFocus(b) {
    if (b.style.display != "none" && b.tabIndex > -1 && b.disabled == false && b.style.visible != "hidden") {
        var a = b.parentElement;
        while (a != null && a.tagName != "BODY") {
            if (a.style.display == "none" || a.disabled || a.style.visible == "hidden") {
                return false
            }
            a = a.parentElement
        }
        return true
    } else {
        return false
    }
}

function __dnn_ContainerMaxMin_OnClick(i, b) {
    var g = dnn.dom.getById(b);
    if (g != null) {
        var e = i.childNodes[0];
        var l = dnn.getVar("containerid_" + b);
        var j = dnn.getVar("cookieid_" + b);
        var d = e.src.toLowerCase().substr(e.src.lastIndexOf("/"));
        var a;
        var h;
        var k;
        if (dnn.getVar("min_icon_" + l)) {
            k = dnn.getVar("min_icon_" + l)
        } else {
            k = dnn.getVar("min_icon")
        }
        if (dnn.getVar("max_icon_" + l)) {
            h = dnn.getVar("max_icon_" + l)
        } else {
            h = dnn.getVar("max_icon")
        }
        a = h.toLowerCase().substr(h.lastIndexOf("/"));
        var c = 5;
        var f = dnn.getVar("animf_" + b);
        if (f != null) {
            c = new Number(f)
        }
        if (d == a) {
            e.src = k;
            dnn.dom.expandElement(g, c);
            e.title = dnn.getVar("min_text");
            if (j != null) {
                if (dnn.getVar("__dnn_" + l + ":defminimized") == "true") {
                    dnn.dom.setCookie(j, "true", 365)
                } else {
                    dnn.dom.deleteCookie(j)
                }
            } else {
                dnn.setVar("__dnn_" + l + "_Visible", "true")
            }
        } else {
            e.src = h;
            dnn.dom.collapseElement(g, c);
            e.title = dnn.getVar("max_text");
            if (j != null) {
                if (dnn.getVar("__dnn_" + l + ":defminimized") == "true") {
                    dnn.dom.deleteCookie(j)
                } else {
                    dnn.dom.setCookie(j, "false", 365)
                }
            } else {
                dnn.setVar("__dnn_" + l + "_Visible", "false")
            }
        }
        return true
    }
    return false
}

function __dnn_Help_OnClick(a) {
    var b = dnn.dom.getById(a);
    if (b != null) {
        if (b.style.display == "none") {
            b.style.display = ""
        } else {
            b.style.display = "none"
        }
        return true
    }
    return false
}

function __dnn_SectionMaxMin(f, c) {
    var d = dnn.dom.getById(c);
    if (d != null) {
        var g = f.getAttribute("max_icon");
        var e = f.getAttribute("min_icon");
        var a = f.getAttribute("userctr") != null;
        var b;
        if (d.style.display == "none") {
            f.src = e;
            d.style.display = "";
            if (a) {
                b = "True"
            } else {
                dnn.setVar(f.id + ":exp", 1)
            }
        } else {
            f.src = g;
            d.style.display = "none";
            if (a) {
                b = "False"
            } else {
                dnn.setVar(f.id + ":exp", 0)
            }
        }
        if (a) {
            dnncore.setUserProp(f.getAttribute("userctr"), f.getAttribute("userkey"), b, null)
        }
        return true
    }
    return false
}

function __dnn_enableDragDrop() {
    var b = dnn.getVar("__dnn_dragDrop").split(";");
    var e;
    for (var c = 0; c < b.length; c++) {
        e = b[c].split(" ");
        if (e[0].length > 0) {
            var a = dnn.dom.getById(e[0]);
            var d = dnn.dom.getById(e[1]);
            if (a != null && d != null) {
                a.setAttribute("moduleid", e[2]);
                dnn.dom.positioning.enableDragAndDrop(a, d, "__dnn_dragComplete()", "__dnn_dragOver()")
            }
        }
    }
}
var __dnn_oPrevSelPane;
var __dnn_oPrevSelModule;
var __dnn_dragEventCount = 0;

function __dnn_dragOver() {
    __dnn_dragEventCount++;
    if (__dnn_dragEventCount % 75 != 0) {
        return
    }
    var c = dnn.dom.getById(dnn.dom.positioning.dragCtr.contID);
    var a = __dnn_getMostSelectedPane(dnn.dom.positioning.dragCtr);
    if (__dnn_oPrevSelPane != null) {
        __dnn_oPrevSelPane.pane.style.border = __dnn_oPrevSelPane.origBorder
    }
    if (a != null) {
        __dnn_oPrevSelPane = a;
        a.pane.style.border = "4px double " + DNN_HIGHLIGHT_COLOR;
        var e = __dnn_getPaneControlIndex(c, a);
        var b;
        var f;
        for (var d = 0; d < a.controls.length; d++) {
            if (e > d && a.controls[d].id != c.id) {
                b = a.controls[d]
            }
            if (e <= d && a.controls[d].id != c.id) {
                f = a.controls[d];
                break
            }
        }
        if (__dnn_oPrevSelModule != null) {
            dnn.dom.getNonTextNode(__dnn_oPrevSelModule.control).style.border = __dnn_oPrevSelModule.origBorder
        }
        if (f != null) {
            __dnn_oPrevSelModule = f;
            dnn.dom.getNonTextNode(f.control).style.borderTop = "5px groove " + DNN_HIGHLIGHT_COLOR
        } else {
            if (b != null) {
                __dnn_oPrevSelModule = b;
                dnn.dom.getNonTextNode(b.control).style.borderBottom = "5px groove " + DNN_HIGHLIGHT_COLOR
            }
        }
    }
}

function __dnn_dragComplete() {
    var f = dnn.dom.getById(dnn.dom.positioning.dragCtr.contID);
    var d = f.getAttribute("moduleid");
    if (__dnn_oPrevSelPane != null) {
        __dnn_oPrevSelPane.pane.style.border = __dnn_oPrevSelPane.origBorder
    }
    if (__dnn_oPrevSelModule != null) {
        dnn.dom.getNonTextNode(__dnn_oPrevSelModule.control).style.border = __dnn_oPrevSelModule.origBorder
    }
    var b = __dnn_getMostSelectedPane(dnn.dom.positioning.dragCtr);
    var e;
    if (b == null) {
        var a = __dnn_Panes();
        for (var c = 0; c < a.length; c++) {
            if (a[c].id == f.parentNode.id) {
                b = a[c]
            }
        }
    }
    if (b != null) {
        e = __dnn_getPaneControlIndex(f, b);
        __dnn_MoveToPane(b, f, e);
        dnn.callPostBack("MoveToPane", "moduleid=" + d, "pane=" + b.paneName, "order=" + e * 2)
    }
}

function __dnn_MoveToPane(a, e, d) {
    if (a != null) {
        var c = new Array();
        for (var b = d; b < a.controls.length; b++) {
            if (a.controls[b].control.id != e.id) {
                c[c.length] = a.controls[b].control
            }
            dnn.dom.removeChild(a.controls[b].control)
        }
        dnn.dom.appendChild(a.pane, e);
        e.style.top = 0;
        e.style.left = 0;
        e.style.position = "relative";
        for (var b = 0; b < c.length; b++) {
            dnn.dom.appendChild(a.pane, c[b])
        }
        __dnn_RefreshPanes()
    } else {
        e.style.top = 0;
        e.style.left = 0;
        e.style.position = "relative"
    }
}

function __dnn_RefreshPanes() {
    var b = dnn.getVar("__dnn_Panes").split(";");
    var a = dnn.getVar("__dnn_PaneNames").split(";");
    __dnn_m_aryPanes = new Array();
    for (var c = 0; c < b.length; c++) {
        if (b[c].length > 0) {
            __dnn_m_aryPanes[__dnn_m_aryPanes.length] = new __dnn_Pane(dnn.dom.getById(b[c]), a[c])
        }
    }
}
var __dnn_m_aryPanes;
var __dnn_m_aryModules;

function __dnn_Panes() {
    if (__dnn_m_aryPanes == null) {
        __dnn_m_aryPanes = new Array();
        __dnn_RefreshPanes()
    }
    return __dnn_m_aryPanes
}

function __dnn_Modules(a) {
    if (__dnn_m_aryModules == null) {
        __dnn_RefreshPanes()
    }
    return __dnn_m_aryModules[a]
}

function __dnn_getMostSelectedPane(g) {
    var c = new dnn.dom.positioning.dims(g);
    var f = 0;
    var a;
    var h;
    for (var e = 0; e < __dnn_Panes().length; e++) {
        var b = __dnn_Panes()[e];
        var d = new dnn.dom.positioning.dims(b.pane);
        a = dnn.dom.positioning.elementOverlapScore(d, c);
        if (a > f) {
            f = a;
            h = b
        }
    }
    return h
}

function __dnn_getPaneControlIndex(f, b) {
    if (b == null) {
        return
    }
    var a = new dnn.dom.positioning.dims(f);
    var e;
    if (b.controls.length == 0) {
        return 0
    }
    for (var c = 0; c < b.controls.length; c++) {
        e = b.controls[c];
        var d = new dnn.dom.positioning.dims(e.control);
        if (a.t < d.t) {
            return e.index
        }
    }
    if (e != null) {
        return e.index + 1
    } else {
        return 0
    }
}

function __dnn_Pane(a, b) {
    this.pane = a;
    this.id = a.id;
    this.controls = new Array();
    this.origBorder = a.style.border;
    this.paneName = b;
    var f = 0;
    var e = "";
    for (var d = 0; d < a.childNodes.length; d++) {
        var g = a.childNodes[d];
        if (dnn.dom.isNonTextNode(g)) {
            if (__dnn_m_aryModules == null) {
                __dnn_m_aryModules = new Array()
            }
            var c = g.getAttribute("moduleid");
            if (c != null && c.length > 0) {
                e += c + "~";
                this.controls[this.controls.length] = new __dnn_PaneControl(g, f);
                __dnn_m_aryModules[c] = g.id;
                f += 1
            }
        }
    }
    this.moduleOrder = e
}

function __dnn_PaneControl(a, b) {
    this.control = a;
    this.id = a.id;
    this.index = b;
    this.origBorder = a.style.border
}

function __dnn_ShowModalPage(a) {
    dnnModal.show(a, true, 550, 950, true, "")
}

function __dnncore() {
    this.GetUserVal = 0;
    this.SetUserVal = 1
}
__dnncore.prototype = {
    getUserProp: function(b, c, a) {
        this._doUserCallBack(dnncore.GetUserVal, b, c, null, new dnncore.UserPropArgs(b, c, a))
    },
    setUserProp: function(c, d, a, b) {
        this._doUserCallBack(dnncore.SetUserVal, c, d, a, new dnncore.UserPropArgs(c, d, b))
    },
    _doUserCallBack: function(c, d, e, a, b) {
        if (dnn && dnn.xmlhttp) {
            var f = c + COL_DELIMITER + d + COL_DELIMITER + e + COL_DELIMITER + a;
            dnn.xmlhttp.doCallBack("__Page", f, dnncore._callBackSuccess, b, dnncore._callBackFail, null, true, null, 0)
        } else {
            alert("Client Personalization not enabled")
        }
    },
    _callBackSuccess: function(a, b, c) {
        if (b.pFunc) {
            b.pFunc(b.namingCtr, b.key, a)
        }
    },
    _callBackFail: function(a, b) {
        window.status = a
    }
};
__dnncore.prototype.UserPropArgs = function(b, c, a) {
    this.namingCtr = b;
    this.key = c;
    this.pFunc = a
};
var dnncore = new __dnncore();