webpackJsonp([0],{352:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),r=n(149),o=n(620),_=n(222),l=n(223),s=n(224),a=n(150),h=n(80),u=n(67),c=n(613),d=n(148),p=n(607),f=n(68);n.d(e,"DetailModuleNgFactory",(function(){return R}));var y=(function(t){function e(e){return t.call(this,e,[c.a],[])||this}return i.a(e,t),Object.defineProperty(e.prototype,"_NgLocalization_5",{get:function(){return null==this.__NgLocalization_5&&(this.__NgLocalization_5=new h.c(this.parent.get(d.a))),this.__NgLocalization_5},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RadioControlRegistry_6",{get:function(){return null==this.__RadioControlRegistry_6&&(this.__RadioControlRegistry_6=new u.a),this.__RadioControlRegistry_6},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ROUTES_7",{get:function(){return null==this.__ROUTES_7&&(this.__ROUTES_7=[[{path:"",children:[{path:"",component:p.a},{path:"child-detail",loadChildren:function(){return n.e(5).then(n.bind(null,609)).then((function(t){return t.ChildDetailModuleNgFactory}))}}]}]]),this.__ROUTES_7},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new _.a,this._InternalFormsSharedModule_1=new l.a,this._FormsModule_2=new s.a,this._RouterModule_3=new a.g(this.parent.get(a.h,null)),this._DetailModule_4=new o.a,this._DetailModule_4},e.prototype.getInternal=function(t,e){return t===_.a?this._CommonModule_0:t===l.a?this._InternalFormsSharedModule_1:t===s.a?this._FormsModule_2:t===a.g?this._RouterModule_3:t===o.a?this._DetailModule_4:t===h.b?this._NgLocalization_5:t===u.a?this._RadioControlRegistry_6:t===f.a?this._ROUTES_7:e},e.prototype.destroyInternal=function(){},e})(r.a),R=new r.b(y,o.a)},607:function(t,e,n){"use strict";var i=n(14),r=n(0);n.d(e,"a",(function(){return o})),console.log("`Detail` component loaded asynchronously");var o=(function(){function t(){}return t.prototype.ngOnInit=function(){console.log("hello `Detail` component")},t})();o=i.b([n.i(r._4)({selector:"detail",template:"\n    <h1>Hello from Detail</h1>\n    <span>\n      <a [routerLink]=\" ['./child-detail'] \">\n        Child Detail\n      </a>\n    </span>\n    <router-outlet></router-outlet>\n  "})],o)},613:function(t,e,n){"use strict";var i=n(14),r=n(607),o=n(81),_=n(18),l=n(66),s=n(42),a=n(41),h=n(53),u=n(349),c=n(226),d=n(350),p=n(54),f=n(33),y=n(69),R=n(70),g=n(82),m=n(83),x=n(105);n.d(e,"a",(function(){return b}));var C=(function(){function t(){this._changed=!1,this.context=new r.a}return t.prototype.ngOnDetach=function(t,e,n){},t.prototype.ngOnDestroy=function(){},t.prototype.ngDoCheck=function(t,e,n){var i=this._changed;return this._changed=!1,n||0===t.numberOfChecks&&this.context.ngOnInit(),i},t.prototype.checkHost=function(t,e,n,i){},t.prototype.handleEvent=function(t,e){var n=!0;return n},t.prototype.subscribe=function(t,e){this._eventHandler=e},t})(),w=_.createRenderComponentType("",0,l.b.None,[],{}),I=(function(t){function e(n,i,r,o){return t.call(this,e,w,s.a.HOST,n,i,r,o,a.b.CheckAlways)||this}return i.a(e,t),e.prototype.createInternal=function(t){return this._el_0=_.selectOrCreateRenderHostElement(this.renderer,"detail",_.EMPTY_INLINE_ARRAY,t,null),this.compView_0=new E(this.viewUtils,this,0,this._el_0),this._DetailComponent_0_3=new C,this.compView_0.create(this._DetailComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new h.a(0,this,this._el_0,this._DetailComponent_0_3.context)},e.prototype.injectorGetInternal=function(t,e,n){return t===r.a&&0===e?this._DetailComponent_0_3.context:n},e.prototype.detectChangesInternal=function(t){this._DetailComponent_0_3.ngDoCheck(this,this._el_0,t),this.compView_0.internalDetectChanges(t)},e.prototype.destroyInternal=function(){this.compView_0.destroy()},e.prototype.visitRootNodesInternal=function(t,e){t(this._el_0,e)},e})(o.a),b=new h.b("detail",I,r.a),v=[],D=_.createRenderComponentType("",0,l.b.None,v,{}),E=(function(t){function e(n,i,r,o){var l=t.call(this,e,D,s.a.COMPONENT,n,i,r,o,a.b.CheckAlways)||this;return l._arr_15=_.pureProxy1((function(t){return[t]})),l}return i.a(e,t),e.prototype.createInternal=function(t){var e=this.renderer.createViewRoot(this.parentElement);this._text_0=this.renderer.createText(e,"\n    ",null),this._el_1=_.createRenderElement(this.renderer,e,"h1",_.EMPTY_INLINE_ARRAY,null),this._text_2=this.renderer.createText(this._el_1,"Hello from Detail",null),this._text_3=this.renderer.createText(e,"\n    ",null),this._el_4=_.createRenderElement(this.renderer,e,"span",_.EMPTY_INLINE_ARRAY,null),this._text_5=this.renderer.createText(this._el_4,"\n      ",null),this._el_6=_.createRenderElement(this.renderer,this._el_4,"a",_.EMPTY_INLINE_ARRAY,null),this._RouterLinkWithHref_6_3=new u.a(this.parentView.injectorGet(p.a,this.parentIndex),this.parentView.injectorGet(f.a,this.parentIndex),this.parentView.injectorGet(y.a,this.parentIndex)),this._text_7=this.renderer.createText(this._el_6,"\n        Child Detail\n      ",null),this._text_8=this.renderer.createText(this._el_4,"\n    ",null),this._text_9=this.renderer.createText(e,"\n    ",null),this._el_10=_.createRenderElement(this.renderer,e,"router-outlet",_.EMPTY_INLINE_ARRAY,null),this._vc_10=new c.a(10,null,this,this._el_10),this._RouterOutlet_10_5=new d.a(this.parentView.injectorGet(R.a,this.parentIndex),this._vc_10.vcRef,this.parentView.injectorGet(g.b,this.parentIndex),null),this._text_11=this.renderer.createText(e,"\n  ",null);var n=_.subscribeToRenderElement(this,this._el_6,new _.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_6));return this.init(null,this.renderer.directRenderer?null:[this._text_0,this._el_1,this._text_2,this._text_3,this._el_4,this._text_5,this._el_6,this._text_7,this._text_8,this._text_9,this._el_10,this._text_11],[n]),null},e.prototype.injectorGetInternal=function(t,e,n){return t===m.b&&6<=e&&e<=7?this._RouterLinkWithHref_6_3.context:t===x.a&&10===e?this._RouterOutlet_10_5.context:n},e.prototype.detectChangesInternal=function(t){var e=this._arr_15("./child-detail");this._RouterLinkWithHref_6_3.check_routerLink(e,t,!1),this._RouterLinkWithHref_6_3.ngDoCheck(this,this._el_6,t),this._RouterOutlet_10_5.ngDoCheck(this,this._el_10,t),this._vc_10.detectChangesInNestedViews(t),this._RouterLinkWithHref_6_3.checkHost(this,this,this._el_6,t)},e.prototype.destroyInternal=function(){this._vc_10.destroyNestedViews(),this._RouterLinkWithHref_6_3.ngOnDestroy(),this._RouterOutlet_10_5.ngOnDestroy()},e.prototype.handleEvent_6=function(t,e){this.markPathToRootAsCheckOnce();var n=!0;return n=this._RouterLinkWithHref_6_3.handleEvent(t,e)&&n},e})(o.a)},620:function(t,e,n){"use strict";var i=n(14),r=n(104),o=n(348),_=n(0),l=n(225),s=n(621),a=n(607);n.d(e,"a",(function(){return h})),console.log("`Detail` bundle loaded asynchronously");var h=(function(){function t(){}return t})();h.routes=s.a,h=i.b([n.i(_.i)({declarations:[a.a],imports:[r.b,o.a,l.a.forChild(s.a)]})],h)},621:function(t,e,n){"use strict";var i=n(607);n.d(e,"a",(function(){return r}));var r=[{path:"",children:[{path:"",component:i.a},{path:"child-detail",loadChildren:function(){return n.e(5).then(n.bind(null,609)).then((function(t){return t.ChildDetailModuleNgFactory}))}}]}]}});