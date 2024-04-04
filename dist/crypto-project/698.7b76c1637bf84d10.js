"use strict";(self.webpackChunkmaterial_pro_angular_lite=self.webpackChunkmaterial_pro_angular_lite||[]).push([[698],{3698:(F,d,e)=>{e.r(d),e.d(d,{AuthModule:()=>I});var u=e(4755),s=e(2480),t=e(2223),p=e(6012);let v=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:9,vars:0,consts:[[1,"card-container"],[1,"auth-main"],[1,"auth-container","flex-column-centered"],[1,"logo-image","flex-row-centered"],[1,"data"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"mat-card")(2,"div",1)(3,"div",2)(4,"div",3)(5,"h2"),t._uU(6,"Cryptozack"),t.qZA()(),t.TgZ(7,"div",4),t._UZ(8,"router-outlet"),t.qZA()()()()())},dependencies:[s.lC,p.a8],styles:[".card-container[_ngcontent-%COMP%]{width:420px;margin:90px auto auto;border-radius:5px;box-shadow:#0000003d 0 2px 5px}.card-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{margin-top:64px;width:384px;background-color:#67757c}.card-container[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]   .auth-main[_ngcontent-%COMP%]   .auth-container[_ngcontent-%COMP%]   .logo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px}"]}),n})();var C=e(1661),r=e(9401),M=e(2548),A=e(4004),m=e(3144);let O=(()=>{class n{constructor(o){this.http=o,this.loginUrl="https://api.cryptozack.com/user-account/admin-login"}signIn(o,a){return this.http.post(this.loginUrl,{email:o,password:a}).pipe((0,A.U)(Z=>Z.data))}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(m.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=e(1728),l=e(9114),h=e(8097),f=e(8467);function P(n,i){1&n&&t._UZ(0,"mat-spinner",9)}const y=[{path:"",component:v,children:[{path:"",component:(()=>{class n{constructor(o,a){this.router=o,this.authService=a,this.loginForm=new r.cw({email:new r.NI("",[r.kI.required,r.kI.pattern(M.PT.email)]),password:new r.NI("",r.kI.required)}),this.showLoader=!1,this.showPassword=!1,this.passwordType="password",this.controls=this.loginForm.controls}ngOnInit(){}signIn(){this.showLoader=!0,this.loginForm.valid&&this.authService.signIn(this.loginForm.value.email,this.loginForm.value.password).subscribe(c=>{C.c.userInfo=c,this.router.navigate(["/admin/dashboard"])})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(s.F0),t.Y36(O))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:16,vars:5,consts:[[1,"login-form","pad-45","flex-column-centered"],[3,"formGroup"],[1,"pad-8"],["appearance","outline"],["matInput","","color","primary",3,"formControl"],["matInput","","type","password",3,"formControl"],[1,"btn","flex-row-centered","pad-8"],["mat-raised-button","",1,"primary-button",2,"background-color","#67757c",3,"disabled","click"],["color","accent","diameter","32",4,"ngIf"],["color","accent","diameter","32"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),t._uU(5,"Email"),t.qZA(),t._UZ(6,"input",4),t.qZA()(),t.TgZ(7,"div",2)(8,"mat-form-field",3)(9,"mat-label"),t._uU(10,"Password"),t.qZA(),t._UZ(11,"input",5),t.qZA()(),t.TgZ(12,"div",6)(13,"button",7),t.NdJ("click",function(){return a.signIn()}),t._uU(14," Login "),t.qZA(),t.YNc(15,P,1,0,"mat-spinner",8),t.qZA()()()),2&o&&(t.xp6(1),t.Q6J("formGroup",a.loginForm),t.xp6(5),t.Q6J("formControl",a.controls.email),t.xp6(5),t.Q6J("formControl",a.controls.password),t.xp6(2),t.Q6J("disabled",a.showLoader||a.loginForm.invalid),t.xp6(2),t.Q6J("ngIf",a.showLoader))},dependencies:[u.O5,g.lW,l.KE,l.hX,h.Nt,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg,f.Ou],styles:[".btn[_ngcontent-%COMP%]{position:relative}.btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90%;padding:8px;font-size:16px}.btn[_ngcontent-%COMP%]   .mat-spinner[_ngcontent-%COMP%]{position:absolute;right:-24px}.loader[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%]{height:250px;width:400px;display:flex;background-color:#67757c}.visibility[_ngcontent-%COMP%]{cursor:pointer}"]}),n})()}]},{path:"**",redirectTo:"",pathMatch:"full"}];let x=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(y),s.Bz]}),n})();var w=e(430);let I=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,x,p.QW,g.ot,l.lN,h.c,r.UX,r.u5,m.JF,f.Cq,w.Ps]}),n})()}}]);