!function(){function t(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function o(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{F4UR:function(e,n,i){"use strict";i.r(n),i.d(n,"LoginPageModule",(function(){return w}));var a=i("ofXK"),s=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),l=i("fXoL"),u=i("2g2N"),b=i("N+K7"),p=i("7ch9");function d(t,o){if(1&t&&(l.Kb(0,"ion-select-option",22),l.fc(1),l.Jb()),2&t){var e=o.$implicit;l.Yb("value",e.Codigo),l.xb(1),l.hc("",e.Nombre," ")}}var m,f,g,h=function(){return["/forgot-password"]},v=function(){return["/signup"]},D=[{path:"",component:(m=function(){function e(o,n,i,a){t(this,e),this.router=o,this.toastService=n,this.service=i,this.loadingService=a,this.postData={tipo:"",documento:"",clave:"",terminos:!1},this.showPasswordText=!1}var n,i,a;return n=e,(i=[{key:"ngOnInit",value:function(){this.getDocumentos()}},{key:"ionViewWillLeave",value:function(){this.postData={tipo:"",documento:"",clave:"",terminos:!1}}},{key:"getDocumentos",value:function(){var t=this;this.service.get("tipodocumento.json").subscribe((function(o){t.listdocumentos=o}))}},{key:"validateInputs",value:function(){var t=this.postData.tipo.trim(),o=this.postData.documento.trim(),e=this.postData.clave.trim();return this.postData.tipo&&this.postData.documento&&this.postData.clave&&t.length>0&&o.length>0&&e.length>0&&1==this.postData.terminos}},{key:"loginAction",value:function(){var t=this;this.validateInputs()?(this.showPasswordText=!1,this.loadingService.presentLoading(),this.service.post("servicios/autenticacion/iniciar-sesion",this.postData).subscribe((function(o){var e;e=o,t.loadingService.closeLoading(),t.toastService.presentToast({message:e.mensaje,codigo:e.codigo}),"0"==e.codigo&&(t.saveSesion(e),t.router.navigate(["home"])),"1"==e.codigo&&setTimeout((function(){t.router.navigate(["/changepassword"],{queryParams:{tipodocumento:t.postData.tipo,documento:t.postData.documento}})}),3e3)}))):this.showvalidateInputs()}},{key:"saveSesion",value:function(t){localStorage.setItem("id",t.id_afiliado),localStorage.setItem("tipodocumento",this.postData.tipo),localStorage.setItem("documento",this.postData.documento),localStorage.setItem("estado",t.estado_afiliado),localStorage.setItem("nombre_afi",t.nombre_afi),localStorage.setItem("nombre_afiliado",t.nombre_afiliado),localStorage.setItem("tipo_familia",t.tipo_afiliado),localStorage.setItem("token",t.token),localStorage.setItem("tipo_afil",t.tipo_afil),localStorage.setItem("correo_afiliado",t.correo_afiliado)}},{key:"showvalidateInputs",value:function(){var t="",o=!1;""==this.postData.tipo&&""==this.postData.documento&&""==this.postData.clave&&0==o&&(t="Ingrese Tipo Documento, Documento y  Contrase\xf1a.",o=!0),""==this.postData.tipo&&0==o&&(t="Ingrese Tipo Documento.",o=!0),""==this.postData.documento&&0==o&&(t="Ingrese Documento",o=!0),""==this.postData.clave&&0==o&&(t="Ingrese Contrase\xf1a.",o=!0),0==this.postData.terminos&&0==o&&(t="Por favor debe Aceptar los Terminos",o=!0),o=!1,this.toastService.presentToast({message:t,codigo:"1"})}}])&&o(n.prototype,i),a&&o(n,a),e}(),m.\u0275fac=function(t){return new(t||m)(l.Hb(c.h),l.Hb(u.a),l.Hb(b.a),l.Hb(p.a))},m.\u0275cmp=l.Bb({type:m,selectors:[["app-login"]],decls:48,vars:12,consts:[[1,"ion-padding"],[1,"ion-text-center"],[3,"ngSubmit"],["position","stacked"],["cancelText","Cancelar","name","tipodocumento","interface","action-sheet","required","",3,"interfaceOptions","ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["autocomplete","off","type","text","name","documento",3,"ngModel","ngModelChange","keyup.enter"],["autocomplete","off","name","clave","required","",3,"type","ngModel","ngModelChange","keyup.enter"],["slot","end","color","primary",2,"margin-top","auto",3,"name","click"],[1,"ion-text-right",2,"font-size","13px"],[1,"text-decoration",3,"routerLink"],[2,"margin-bottom","10px","margin-left","auto","margin-right","auto","display","table"],[2,"width","0%","float","left","margin-left","5px"],["slot","start","name","terminos",3,"ngModel","ngModelChange"],[2,"width","90%","float","right","font-size","13px"],["routerLink","/terms",1,"text-decoration"],["routerLink","/politics",1,"text-decoration"],["routerLink","/law",1,"text-decoration"],["shape","round","type","submit",1,"text-transform-initial","style-button-action"],[1,"login"],["src","assets/img/iconcajcopipeque.png","alt","Icon EPS",1,"img-cajacacopi"],[3,"value"]],template:function(t,o){1&t&&(l.Kb(0,"ion-content",0),l.Kb(1,"div",1),l.Kb(2,"h1"),l.fc(3,"Iniciar Sesi\xf3n"),l.Jb(),l.Jb(),l.Kb(4,"form",2),l.Sb("ngSubmit",(function(){return o.loginAction()})),l.Kb(5,"ion-list"),l.Kb(6,"ion-item"),l.Kb(7,"ion-label",3),l.fc(8,"Tipo Documento"),l.Jb(),l.Kb(9,"ion-select",4),l.Sb("ngModelChange",(function(t){return o.postData.tipo=t})),l.Kb(10,"ion-select-option",5),l.fc(11,"Seleccionar "),l.Jb(),l.ec(12,d,2,2,"ion-select-option",6),l.Jb(),l.Jb(),l.Kb(13,"ion-item"),l.Kb(14,"ion-label",3),l.fc(15,"Documento"),l.Jb(),l.Kb(16,"ion-input",7),l.Sb("ngModelChange",(function(t){return o.postData.documento=t}))("keyup.enter",(function(){return o.loginAction()})),l.Jb(),l.Jb(),l.Kb(17,"ion-item"),l.Kb(18,"ion-label",3),l.fc(19,"Contrase\xf1a"),l.Jb(),l.Kb(20,"ion-input",8),l.Sb("ngModelChange",(function(t){return o.postData.clave=t}))("keyup.enter",(function(){return o.loginAction()})),l.Jb(),l.Kb(21,"ion-icon",9),l.Sb("click",(function(){return!!o.postData.clave&&(o.showPasswordText=!o.showPasswordText)})),l.Jb(),l.Jb(),l.Kb(22,"p",10),l.Kb(23,"a",11),l.fc(24,"\xbfHas olvidado tu contrase\xf1a?"),l.Jb(),l.Jb(),l.Kb(25,"div",12),l.Kb(26,"div",13),l.Kb(27,"ion-checkbox",14),l.Sb("ngModelChange",(function(t){return o.postData.terminos=t})),l.Jb(),l.Jb(),l.Kb(28,"div",15),l.Kb(29,"span"),l.fc(30," Acepto los "),l.Kb(31,"a",16),l.fc(32,"T\xe9rminos del Servicio"),l.Jb(),l.fc(33,", "),l.Kb(34,"a",17),l.fc(35,"Pol\xedtica de Privacidad"),l.Jb(),l.fc(36," y "),l.Kb(37,"a",18),l.fc(38,"Ley de Datos Personales"),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(39,"ion-button",19),l.fc(40," Iniciar sesi\xf3n "),l.Jb(),l.Jb(),l.Kb(41,"p",20),l.fc(42,"\xbfA\xfan no tienes una cuenta? "),l.Ib(43,"br"),l.Kb(44,"a",11),l.fc(45,"Crear una cuenta"),l.Jb(),l.Jb(),l.Kb(46,"div"),l.Ib(47,"img",21),l.Jb(),l.Jb()),2&t&&(l.xb(9),l.Xb("interfaceOptions",o.customActionSheetOptions)("ngModel",o.postData.tipo),l.xb(3),l.Xb("ngForOf",o.listdocumentos),l.xb(4),l.Xb("ngModel",o.postData.documento),l.xb(4),l.Xb("type",o.showPasswordText?"text":"password")("ngModel",o.postData.clave),l.xb(1),l.Xb("name",o.showPasswordText?"eye-outline":"eye-off-outline"),l.xb(2),l.Xb("routerLink",l.Zb(10,h)),l.xb(4),l.Xb("ngModel",o.postData.terminos),l.xb(17),l.Xb("routerLink",l.Zb(11,v)))},directives:[r.o,s.k,s.f,s.g,r.v,r.t,r.u,r.D,r.T,s.j,s.e,s.h,r.E,a.i,r.s,r.U,r.r,c.j,r.S,r.l,r.b,r.h],styles:[""]}),m)}],y=((g=function o(){t(this,o)}).\u0275mod=l.Fb({type:g}),g.\u0275inj=l.Eb({factory:function(t){return new(t||g)},imports:[[c.k.forChild(D)],c.k]}),g),w=((f=function o(){t(this,o)}).\u0275mod=l.Fb({type:f}),f.\u0275inj=l.Eb({factory:function(t){return new(t||f)},imports:[[a.b,s.a,r.M,y]]}),f)}}])}();