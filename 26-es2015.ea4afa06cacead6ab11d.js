(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{UUSl:function(t,e,o){"use strict";o.r(e),o.d(e,"SignupPageModule",(function(){return d}));var i=o("ofXK"),n=o("3Pt+"),a=o("TEn/"),s=o("tyNb"),c=o("fXoL"),r=o("N+K7"),p=o("a/s5"),b=o("2g2N"),l=o("7ch9");function m(t,e){if(1&t&&(c.Kb(0,"ion-select-option",24),c.fc(1),c.Jb()),2&t){const t=e.$implicit;c.Yb("value",t.Codigo),c.xb(1),c.hc("",t.Nombre," ")}}const u=[{path:"",component:(()=>{class t{constructor(t,e,o,i,n){this.service=t,this.router=e,this.pipedate=o,this.toastService=i,this.loadingService=n,this.postData={tipo:"",documento:"",fecha_nacimiento:"",temp_fecha_nacimiento:"",fecha_expedicion:"",temp_fecha_expedicion:"",movil:"",email:"",terminos:!1}}ngOnInit(){this.getDocumentos()}getDocumentos(){this.service.get("tipodocumento.json").subscribe(t=>{this.listdocumentos=t})}validateInputs(){let t=this.postData.tipo.trim(),e=this.postData.documento.trim(),o=this.postData.temp_fecha_nacimiento.trim(),i=this.postData.temp_fecha_expedicion.trim(),n=this.postData.movil.toString().trim(),a=this.postData.email.trim(),s=this.postData.terminos;return this.postData.tipo&&this.postData.documento&&t.length>0&&e.length>0&&o.length>0&&i.length>0&&n.length>0&&a.length>0&&1==this.validateEmail(this.postData.email)&&1==s}validateEmail(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}signupAction(){this.validateInputs()?(this.postData.fecha_expedicion=this.pipedate.transform(this.postData.temp_fecha_expedicion),this.postData.fecha_nacimiento=this.pipedate.transform(this.postData.temp_fecha_nacimiento),this.loadingService.presentLoading(),this.service.post("servicios/autenticacion/registro",this.postData).subscribe(t=>{let e;e=t,this.loadingService.closeLoading(),this.toastService.presentToast({message:e.mensaje,codigo:e.codigo}),"0"==e.codigo&&this.router.navigate(["/login"])})):this.showvalidateInputs()}showvalidateInputs(){var t="",e=!1;""==this.postData.tipo&&""==this.postData.documento&&""==this.postData.temp_fecha_nacimiento&&""==this.postData.temp_fecha_expedicion&&""==this.postData.movil&&""==this.postData.email&&0==e&&(t="No pueden haber campos vacios.",e=!0),""==this.postData.tipo&&0==e&&(t="Ingrese Tipo Documento.",e=!0),""==this.postData.documento&&0==e&&(t="Ingrese N\xfamero Documento",e=!0),""==this.postData.temp_fecha_nacimiento&&0==e&&(t="Ingrese Fecha Nacimiento",e=!0),""==this.postData.temp_fecha_expedicion&&0==e&&(t="Ingrese Fecha Expedici\xf3n",e=!0),""==this.postData.movil&&0==e&&(t="Ingrese Celular",e=!0),""==this.postData.email&&0==e&&(t="Ingrese Correo",e=!0),0==this.validateEmail(this.postData.email)&&0==e&&(t="Ingrese Correo Valido",e=!0),0==this.postData.terminos&&0==e&&(t="Por favor debe Aceptar los Terminos",e=!0),e=!1,this.toastService.presentToast({message:t,codigo:"1"})}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(r.a),c.Hb(s.h),c.Hb(p.a),c.Hb(b.a),c.Hb(l.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-signup"]],decls:55,vars:9,consts:[[1,"ion-padding"],[1,"ion-text-center"],[3,"ngSubmit"],["position","stacked"],["cancelText","Cancelar","name","tipodocumento","interface","action-sheet",3,"interfaceOptions","ngModel","ngModelChange"],["value",""],[3,"value",4,"ngFor","ngForOf"],["autocomplete","off","name","name","type","text",3,"ngModel","ngModelChange","keyup.enter"],["name","fecha_nacimiento","type","date",3,"ngModel","ngModelChange"],["name","fecha_expedicion","type","date",3,"ngModel","ngModelChange"],["autocomplete","off","name","celular","type","text","pattern","[0-9]*","maxlength","10",3,"ngModel","ngModelChange","keyup.enter"],["autocomplete","off","name","email","type","email",3,"ngModel","ngModelChange","keyup.enter"],["lines","none"],[1,"login"],["routerLink","/login",1,"text-decoration"],[2,"margin-bottom","10px","margin-left","auto","margin-right","auto","display","table"],[2,"width","0%","float","left","margin-left","5px"],["slot","start","name","terminos",3,"ngModel","ngModelChange"],[2,"width","90%","float","right","font-size","13px"],["routerLink","/terms",1,"text-decoration"],["routerLink","/politics",1,"text-decoration"],["routerLink","/law",1,"text-decoration"],["shape","round","type","submit",1,"text-transform-initial","style-button-action"],["src","assets/img/iconcajcopipeque.png","alt","Icon EPS",1,"img-cajacacopi"],[3,"value"]],template:function(t,e){1&t&&(c.Kb(0,"ion-content",0),c.Kb(1,"div",1),c.Kb(2,"h1"),c.fc(3,"Crear Cuenta"),c.Jb(),c.Jb(),c.Kb(4,"form",2),c.Sb("ngSubmit",(function(){return e.signupAction()})),c.Kb(5,"ion-list"),c.Kb(6,"ion-item"),c.Kb(7,"ion-label",3),c.fc(8,"Tipo Documento"),c.Jb(),c.Kb(9,"ion-select",4),c.Sb("ngModelChange",(function(t){return e.postData.tipo=t})),c.Kb(10,"ion-select-option",5),c.fc(11,"Seleccionar "),c.Jb(),c.ec(12,m,2,2,"ion-select-option",6),c.Jb(),c.Jb(),c.Kb(13,"ion-item"),c.Kb(14,"ion-label",3),c.fc(15,"N\xfamero de Documento"),c.Jb(),c.Kb(16,"ion-input",7),c.Sb("ngModelChange",(function(t){return e.postData.documento=t}))("keyup.enter",(function(){return e.signupAction()})),c.Jb(),c.Jb(),c.Kb(17,"ion-item"),c.Kb(18,"ion-label",3),c.fc(19,"Fecha Nacimiento"),c.Jb(),c.Kb(20,"ion-input",8),c.Sb("ngModelChange",(function(t){return e.postData.temp_fecha_nacimiento=t})),c.Jb(),c.Jb(),c.Kb(21,"ion-item"),c.Kb(22,"ion-label",3),c.fc(23,"Fecha Expedici\xf3n documento"),c.Jb(),c.Kb(24,"ion-input",9),c.Sb("ngModelChange",(function(t){return e.postData.temp_fecha_expedicion=t})),c.Jb(),c.Jb(),c.Kb(25,"ion-item"),c.Kb(26,"ion-label",3),c.fc(27,"Celular"),c.Jb(),c.Kb(28,"ion-input",10),c.Sb("ngModelChange",(function(t){return e.postData.movil=t}))("keyup.enter",(function(){return e.signupAction()})),c.Jb(),c.Jb(),c.Kb(29,"ion-item"),c.Kb(30,"ion-label",3),c.fc(31,"Correo"),c.Jb(),c.Kb(32,"ion-input",11),c.Sb("ngModelChange",(function(t){return e.postData.email=t}))("keyup.enter",(function(){return e.signupAction()})),c.Jb(),c.Jb(),c.Kb(33,"ion-item",12),c.Kb(34,"p",13),c.fc(35," \xbfYa tienes una cuenta? "),c.Kb(36,"a",14),c.fc(37," Iniciar Sesi\xf3n."),c.Jb(),c.Jb(),c.Jb(),c.Kb(38,"div",15),c.Kb(39,"div",16),c.Kb(40,"ion-checkbox",17),c.Sb("ngModelChange",(function(t){return e.postData.terminos=t})),c.Jb(),c.Jb(),c.Kb(41,"div",18),c.Kb(42,"span"),c.fc(43," Acepto los "),c.Kb(44,"a",19),c.fc(45,"T\xe9rminos del Servicio"),c.Jb(),c.fc(46,", "),c.Kb(47,"a",20),c.fc(48,"Pol\xedtica de Privacidad"),c.Jb(),c.fc(49," y "),c.Kb(50,"a",21),c.fc(51,"Ley de Datos Personales"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Kb(52,"ion-button",22),c.fc(53," Registrarse"),c.Jb(),c.Jb(),c.Ib(54,"img",23),c.Jb()),2&t&&(c.xb(9),c.Xb("interfaceOptions",e.customActionSheetOptions)("ngModel",e.postData.tipo),c.xb(3),c.Xb("ngForOf",e.listdocumentos),c.xb(4),c.Xb("ngModel",e.postData.documento),c.xb(4),c.Xb("ngModel",e.postData.temp_fecha_nacimiento),c.xb(4),c.Xb("ngModel",e.postData.temp_fecha_expedicion),c.xb(4),c.Xb("ngModel",e.postData.movil),c.xb(4),c.Xb("ngModel",e.postData.email),c.xb(8),c.Xb("ngModel",e.postData.terminos))},directives:[a.o,n.k,n.f,n.g,a.v,a.t,a.u,a.D,a.T,n.e,n.h,a.E,i.i,a.s,a.U,n.i,n.b,s.j,a.S,a.l,a.b,a.h],styles:[""]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[s.k.forChild(u)],s.k]}),t})(),d=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[i.b,n.a,a.M,h]]}),t})()}}]);