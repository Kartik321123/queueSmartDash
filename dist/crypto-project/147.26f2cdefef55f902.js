"use strict";(self.webpackChunkmaterial_pro_angular_lite=self.webpackChunkmaterial_pro_angular_lite||[]).push([[147],{4147:(rt,I,l)=>{l.r(I),l.d(I,{UserWalletModule:()=>it});var x=l(4755),T=l(2480),m=l(5861),r=l(9401),v=l(3276),g=l(5580),t=l(2223),y=l(5282),f=l(6081),Z=l(2342),_=l(9114),A=l(430),U=l(8097),W=l(9383),w=l(3649);function D(a,o){1&a&&(t.TgZ(0,"div",10),t._UZ(1,"ngx-ui-loader",11),t.qZA()),2&a&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}let M=(()=>{class a{constructor(e,n,i,c,u,h){this.fb=e,this.clientService=n,this.dialogRef=i,this.ngxService=c,this._snackBar=u,this.data=h,this.showLoader=!1;let p=localStorage.getItem("userinfo");p&&(this.parseData=JSON.parse(p))}ngOnInit(){this.initializeForm(),this.setFormValue()}initializeForm(){this.walletTierForm=this.fb.group({amount:["",[r.kI.required,r.kI.min(0)]],date:["",[r.kI.required]]})}setFormValue(){console.log(this.data);let e="";this.data.createdAt&&(e=new Date(this.data.createdAt).toISOString().split("T")[0]),this.walletTierForm.patchValue({amount:this.data.usdtAmount||"",date:e})}updateWalletHistory(){if(this.ngxService.start(),this.showLoader=!0,this.walletTierForm.invalid)return;const e={id:this.data.id,usdtAmount:this.walletTierForm.value.amount,createdAt:new Date(this.walletTierForm.value.date).toISOString()};this.clientService.updateWalletTier(e,this.parseData.token).subscribe({next:n=>{this._snackBar.open(n.message,"Close",{duration:3e3}),this.showLoader=!1,this.dialogRef.close(n)},error:n=>{this.showLoader=!1,console.error("Error updating wallet tier:",n)}})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(r.qu),t.Y36(y.S),t.Y36(g.so),t.Y36(f.LA),t.Y36(Z.ux),t.Y36(g.WI))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-update-wallet"]],decls:22,vars:2,consts:[["class","ngxLoader",4,"ngIf"],[1,"toolbar"],[1,"spacer"],["mat-dialog-close","","matTooltip","Close",1,"pointer"],[1,"pad-16",3,"formGroup"],["type","number","matInput","","color","primary","formControlName","amount"],["matInput","","color","primary","formControlName","date","type","date"],[1,"btn","pad-8"],["mat-raised-button","","color","primary",1,"buttons",3,"click"],["mat-button","","mat-dialog-close","",1,"buttons"],[1,"ngxLoader"],[3,"hasProgressBar"]],template:function(e,n){1&e&&(t.YNc(0,D,2,1,"div",0),t.TgZ(1,"div",1)(2,"mat-toolbar",1)(3,"span"),t._uU(4,"Update Transaction"),t.qZA(),t._UZ(5,"div",2),t.TgZ(6,"mat-icon",3),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"form",4)(9,"mat-form-field")(10,"mat-label"),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",5),t.qZA(),t.TgZ(13,"mat-form-field")(14,"mat-label"),t._uU(15,"Date"),t.qZA(),t._UZ(16,"input",6),t.qZA()(),t.TgZ(17,"div",7)(18,"button",8),t.NdJ("click",function(){return n.updateWalletHistory()}),t._uU(19," Update "),t.qZA(),t.TgZ(20,"button",9),t._uU(21," Cancel "),t.qZA()()),2&e&&(t.Q6J("ngIf",n.showLoader),t.xp6(8),t.Q6J("formGroup",n.walletTierForm))},dependencies:[x.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,f.Eo,g.ZT,_.KE,_.hX,A.Hw,U.Nt,W.Ye,w.gM],styles:[".toolbar[_ngcontent-%COMP%]{background-color:#1e88e5;color:#fff}.buttons[_ngcontent-%COMP%]{border:1px solid #CCCBCB;width:auto;border-radius:3px;background-color:#fff;color:#635d5d;font-weight:600;margin-right:10px;height:36px;float:right;margin-bottom:10px;cursor:pointer}.buttons[_ngcontent-%COMP%]:hover{border:1px solid #1e88e5;color:#1e88e5}"]}),a})();var s=l(3627);const O=["input"];function N(a,o){1&a&&(t.TgZ(0,"div",11),t._UZ(1,"ngx-ui-loader",12),t.qZA()),2&a&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}function P(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",13)(1,"form",14)(2,"mat-form-field",15)(3,"mat-label"),t._uU(4,"Enter User Email"),t.qZA(),t._UZ(5,"input",16),t.qZA()(),t.TgZ(6,"div",17)(7,"button",18),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.findUserWithEmail())}),t._uU(8," Get Wallet Details "),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.walletForm),t.xp6(4),t.Q6J("formControl",e.controls.email)}}function S(a,o){if(1&a&&(t.TgZ(0,"div",19)(1,"div",20),t._UZ(2,"img",21),t.TgZ(3,"div",22)(4,"h5"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()(),t._UZ(8,"div",6),t.qZA()()),2&a){const e=t.oxw();t.xp6(5),t.AsE("",(null==e.userEmail?null:e.userEmail.firstName)||"--"," ",(null==e.userEmail?null:e.userEmail.lastName)||"--",""),t.xp6(2),t.Oqu((null==e.userEmail?null:e.userEmail.email)||"--")}}function E(a,o){1&a&&t._UZ(0,"input",30,31)}function F(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"p",25),t._uU(3),t.qZA(),t.TgZ(4,"p",26),t._uU(5,"Current Balance"),t.qZA(),t.TgZ(6,"div",27),t.YNc(7,E,2,0,"input",28),t.TgZ(8,"button",29),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.getupdateUsdtAmount())}),t._uU(9),t.qZA()()(),t.TgZ(10,"div",24)(11,"p",25),t._uU(12),t.qZA(),t.TgZ(13,"p",26),t._uU(14,"Total Deposit "),t.qZA()(),t.TgZ(15,"div",24)(16,"p",25),t._uU(17),t.qZA(),t.TgZ(18,"p",26),t._uU(19,"Total Withdrawal "),t.qZA()(),t.TgZ(20,"div",24)(21,"p",25),t._uU(22),t.qZA(),t.TgZ(23,"p",26),t._uU(24,"Rewards "),t.qZA()()()}if(2&a){const e=t.oxw();t.xp6(3),t.hij("$ ",(null==e.userData?null:e.userData.usdtAmount)||"0",""),t.xp6(4),t.Q6J("ngIf",e.showInput),t.xp6(2),t.hij(" ",e.showInput?"Submit":"Update"," "),t.xp6(3),t.hij("$ ",e.totalDeposit||"0",""),t.xp6(5),t.hij("$ ",e.totalWithdrawal||"0",""),t.xp6(5),t.hij("$ ",e.refferalAmount||"0","")}}function Y(a,o){1&a&&(t.TgZ(0,"th",45),t._uU(1,"Amount "),t.qZA())}function k(a,o){if(1&a&&(t.TgZ(0,"td",46),t._uU(1),t.TgZ(2,"span",47),t._uU(3,"(USDT)"),t.qZA()()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",e.usdtAmount," ")}}function J(a,o){1&a&&(t.TgZ(0,"th",45),t._uU(1,"Transaction Type "),t.qZA())}function L(a,o){1&a&&(t.TgZ(0,"span"),t._uU(1," FEE"),t.qZA())}function R(a,o){1&a&&(t.TgZ(0,"span"),t._uU(1,"DEPOSIT"),t.qZA())}function q(a,o){1&a&&(t.TgZ(0,"span"),t._uU(1,"REWARDS"),t.qZA())}function Q(a,o){1&a&&(t.TgZ(0,"span"),t._uU(1,"WITHDRAWAL"),t.qZA())}function H(a,o){1&a&&(t.TgZ(0,"span"),t._uU(1,"TRADE PROFIT"),t.qZA())}function B(a,o){if(1&a&&(t.TgZ(0,"td",46),t.YNc(1,L,2,0,"span",48),t.YNc(2,R,2,0,"span",48),t.YNc(3,q,2,0,"span",48),t.YNc(4,Q,2,0,"span",48),t.YNc(5,H,2,0,"span",48),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf","COMPANY_COMMISSION"==e.transactionType),t.xp6(1),t.Q6J("ngIf","DEPOSIT"==e.transactionType),t.xp6(1),t.Q6J("ngIf","REFERRAL"==e.transactionType),t.xp6(1),t.Q6J("ngIf","WITHDRAWAL"==e.transactionType),t.xp6(1),t.Q6J("ngIf","TRADE_PROFIT"==e.transactionType)}}function j(a,o){1&a&&(t.TgZ(0,"th",45),t._uU(1,"Date & Time "),t.qZA())}function z(a,o){if(1&a&&(t.TgZ(0,"td",46),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.createdAt,"MMMM dd, y , hh:mm:ss a")," ")}}function G(a,o){1&a&&(t.TgZ(0,"th",45),t._uU(1,"Update "),t.qZA())}function V(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"td",46)(1,"mat-icon",49),t.NdJ("click",function(){const c=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.updateWallet(c))}),t._uU(2,"edit"),t.qZA()()}}function X(a,o){1&a&&t._UZ(0,"tr",50)}function $(a,o){1&a&&t._UZ(0,"tr",51)}function K(a,o){1&a&&(t.TgZ(0,"tr",52)(1,"td",53),t._uU(2,"No data matching the filter "),t.qZA()())}const tt=function(){return[5,10,25,50,75,100]};function et(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",32)(1,"div",33)(2,"h3"),t._uU(3,"Transaction Details"),t.qZA(),t._UZ(4,"div",6),t.qZA(),t.TgZ(5,"table",34),t.ynx(6,35),t.YNc(7,Y,2,0,"th",36),t.YNc(8,k,4,1,"td",37),t.BQk(),t.ynx(9,38),t.YNc(10,J,2,0,"th",36),t.YNc(11,B,6,5,"td",37),t.BQk(),t.ynx(12,39),t.YNc(13,j,2,0,"th",36),t.YNc(14,z,3,4,"td",37),t.BQk(),t.ynx(15,40),t.YNc(16,G,2,0,"th",36),t.YNc(17,V,3,0,"td",37),t.BQk(),t.YNc(18,X,1,0,"tr",41),t.YNc(19,$,1,0,"tr",42),t.YNc(20,K,3,0,"tr",43),t.qZA(),t.TgZ(21,"mat-paginator",44),t.NdJ("page",function(i){t.CHM(e);const c=t.oxw();return t.KtG(c.pageChange(i))}),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(5),t.Q6J("dataSource",e.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns),t.xp6(2),t.Q6J("length",e.totalLength)("pageSizeOptions",t.DdM(5,tt))}}const at=[{path:"",component:(()=>{class a{constructor(e,n,i,c,u,h){this.router=e,this.clientService=n,this.ngxService=i,this.navigateRouter=c,this.snackBar=u,this.dialog=h,this.displayedColumns=["amount","type","createdAt","update"],this.dataSource=[],this.showLoader=!1,this.transHistory=!1,this.selectedDefaultValue="TRADE_PROFIT",this.showInput=!1,this.walletForm=new r.cw({email:new r.NI("",r.kI.required)}),this.router.queryParams.subscribe(C=>{C.userId&&(this.userId=C.userId)});let p=localStorage.getItem("userinfo");p&&(this.parseData=JSON.parse(p)),this.controls=this.walletForm.controls}ngOnInit(){var e=this;return(0,m.Z)(function*(){e.showLoader=!0,e.ngxService.start(),e.initializeFilter(),yield e.getUsersData(),yield e.walletDetails(),yield e.allTransactionHistory(),yield e.transactionHistory(),e.showLoader=!1})()}getUsersData(){var e=this;return(0,m.Z)(function*(){try{const n=yield e.clientService.getWalletUsers(e.parseData.token).toPromise();e.allUserList=n.data.results;const i=e.allUserList.filter(c=>c.id==e.userId);i&&(e.userEmail=i[0])}catch{}finally{e.showLoader=!1}})()}findUserWithEmail(){const e=this.allUserList.filter(n=>n.email==this.walletForm.value.email);e.length>0?(this.userId=e[0].id,this.userEmail=e[0],this.userId&&this.ngOnInit()):alert("Invalid user")}walletDetails(){var e=this;return(0,m.Z)(function*(){if(e.userId)try{const n=yield e.clientService.walletDetails(e.parseData.token,e.userId).toPromise();e.userData=n}catch{}})()}initializeFilter(){this.filter={token:this.parseData.token,userId:this.userId,transactionType:this.selectedDefaultValue,page:1,limit:5}}transactionHistory(){var e=this;return(0,m.Z)(function*(){try{const n=yield e.clientService.userTransactionHistory(e.filter).toPromise();e.dataSource=n.results,e.totalLength=n.count,e.showLoader=!1}catch{}})()}allTransactionHistory(){var e=this;return(0,m.Z)(function*(){const n={token:e.parseData.token,userId:e.userId,page:1,limit:Number.MAX_SAFE_INTEGER};try{const i=yield e.clientService.allTransactionHistory(n).toPromise(),c=i.results.filter(d=>"DEPOSIT"==d.transactionType);let u=0;for(const d of c)u+=d.usdtAmount||0;e.totalDeposit=0!==u?u.toFixed(2):"0";const h=i.results.filter(d=>"WITHDRAWAL"==d.transactionType);let p=0;for(const d of h)p+=d.usdtAmount||0;e.totalWithdrawal=0!==p?p.toFixed(2):"0";const C=i.results.filter(d=>"REFERRAL"==d.transactionType);let b=0;for(const d of C)b+=d.usdtAmount||0;e.refferalAmount=0!==b?b.toFixed(2):"0",e.showLoader=!1}catch{}})()}pageChange(e){this.filter.page=e.pageIndex+1,this.filter.limit=e.pageSize,this.transactionHistory()}selectionChange(e){this.selectedDefaultValue=e.value,this.initializeFilter(),this.transactionHistory()}backToUser(){this.navigateRouter.navigate(["/admin/client"])}getupdateUsdtAmount(){if(this.showInput){const e=parseFloat(this.inputElement.nativeElement.value);isNaN(e)||this.updateWalletAmount(e),this.showInput=!1}else this.showInput=!0}updateWalletAmount(e){this.showLoader=!0,this.ngxService.start(),this.clientService.updateWallet({token:this.parseData.token,userId:this.userId,balance:e}).subscribe(i=>{this.snackBar.open(i.message,"Close",{duration:3e3}),this.walletDetails(),this.showLoader=!1,this.ngxService.stop()})}updateWallet(e){this.dialog.open(M,{data:e}).afterClosed().subscribe(i=>{i&&(this.ngxService.start(),this.showLoader=!0,this.transactionHistory(),this.ngxService.stop(),this.showLoader=!1)})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(T.gz),t.Y36(y.S),t.Y36(f.LA),t.Y36(T.F0),t.Y36(Z.ux),t.Y36(g.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-wallet"]],viewQuery:function(e,n){if(1&e&&(t.Gf(v.NW,7),t.Gf(O,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first),t.iGM(i=t.CRH())&&(n.inputElement=i.first)}},decls:13,vars:5,consts:[["class","ngxLoader",4,"ngIf"],[1,"main_container"],[1,"flex","pad-8","header"],[1,"flex",2,"align-items","center"],["matTooltip","Back To User",1,"back_arrow",3,"click"],[1,"heading"],[1,"spacer"],["class","email_container",4,"ngIf"],["class","details_container",4,"ngIf"],["class","user_details",4,"ngIf"],["class","table_container",4,"ngIf"],[1,"ngxLoader"],[3,"hasProgressBar"],[1,"email_container"],[1,"pad-16",3,"formGroup"],["appearance","outline",2,"height","60px"],["matInput","","color","primary",3,"formControl"],[1,"btn"],["mat-button","","matTooltip","Get User Wallet Details",1,"buttons",3,"click"],[1,"details_container"],[1,"about_user"],["src","../../../../../../../assets/images/User.png","width","5%"],[1,"user"],[1,"user_details"],[1,"detail"],[1,"para_value"],[1,"para_heading"],[1,"updateField"],["placeholder","Enter amount","type","number",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["placeholder","Enter amount","type","number"],["input",""],[1,"table_container"],[1,"table_headings","flex"],["mat-table","",1,"dataTable",3,"dataSource"],["matColumnDef","amount"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","createdAt"],["matColumnDef","update"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["pageSize","5",1,"pagination",3,"length","pageSizeOptions","page"],["mat-header-cell",""],["mat-cell",""],[1,"usdt"],[4,"ngIf"],[3,"click"],["mat-header-row",""],["mat-row","",1,"cursor-pointer"],[1,"mat-row"],["colspan","3",1,"pad-16",2,"text-align","center"]],template:function(e,n){1&e&&(t.YNc(0,N,2,1,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-icon",4),t.NdJ("click",function(){return n.backToUser()}),t._uU(5,"arrow_back"),t.qZA(),t.TgZ(6,"p",5),t._uU(7,"Wallet Details"),t.qZA()(),t._UZ(8,"div",6),t.qZA(),t.YNc(9,P,9,2,"div",7),t.YNc(10,S,9,3,"div",8),t.YNc(11,F,25,6,"div",9),t.YNc(12,et,22,6,"div",10),t.qZA()),2&e&&(t.Q6J("ngIf",n.showLoader),t.xp6(9),t.Q6J("ngIf",!n.userId),t.xp6(1),t.Q6J("ngIf",n.userId),t.xp6(1),t.Q6J("ngIf",n.userId),t.xp6(1),t.Q6J("ngIf",n.userId))},dependencies:[x.O5,r._Y,r.Fj,r.JJ,r.JL,r.oH,r.sg,f.Eo,_.KE,_.hX,A.Hw,U.Nt,s.BZ,s.fO,s.as,s.w1,s.Dz,s.nj,s.ge,s.ev,s.XQ,s.Gk,s.Ee,v.NW,w.gM,x.uU],styles:[".main_container[_ngcontent-%COMP%]{padding:0 10px}.email_container[_ngcontent-%COMP%]{width:100%;background-color:#fff;display:grid;grid-template-columns:80% 20%;align-items:center;box-shadow:#0000003d 0 2px 5px;border-radius:4px}.details_container[_ngcontent-%COMP%]{width:100%;background-color:#fff;align-items:center;box-shadow:#0000003d 0 2px 5px;border-radius:4px}.about_user[_ngcontent-%COMP%]{display:flex;padding:15px;align-items:center}.about_user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{margin-left:5px}.about_user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0;text-transform:capitalize;color:#33475b}.about_user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#687888}.btn[_ngcontent-%COMP%]{text-align:center}.buttons[_ngcontent-%COMP%]{border:1px solid #CCCBCB;width:auto;border-radius:3px;background-color:#fff;color:#635d5d;font-weight:600;margin-right:10px;height:36px;margin-bottom:10px;cursor:pointer}.buttons[_ngcontent-%COMP%]:hover{border:1px solid #1e88e5;color:#1e88e5}.user_details[_ngcontent-%COMP%]{width:100%;margin-top:15px;display:grid;grid-template-columns:24.5% 24.5% 24.5% 24.5%;gap:8px;border-radius:4px}.user_details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{margin-right:10px;background-color:#fff;box-shadow:#0000003d 0 2px 5px;text-align:center;padding:25px;border-radius:4px}.para_value[_ngcontent-%COMP%]{font-size:35px;font-weight:600;margin:0;color:#33475b}.para_heading[_ngcontent-%COMP%]{color:#687888;font-size:16px;font-weight:500;margin:0}.table_container[_ngcontent-%COMP%]{width:100%;background-color:#fff;box-shadow:#0000003d 0 2px 5px;border-radius:4px;margin-top:15px}.table_container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33475b;padding-left:10px}.type_formField[_ngcontent-%COMP%]{width:220px;margin-top:12px;margin-right:10px}.usdt[_ngcontent-%COMP%]{font-size:10px;font-weight:700}.back_arrow[_ngcontent-%COMP%]:hover{color:#1e88e5;cursor:pointer}.updateField[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #CCCBCB;width:auto;border-radius:3px;background-color:#fff;color:#635d5d;font-weight:600;margin-left:0;height:22px;cursor:pointer}"]}),a})()}];let nt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[T.Bz.forChild(at),T.Bz]}),a})();var ot=l(787);let it=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[x.ez,nt,r.u5,r.UX,f.Js,g.Is,_.lN,A.Ps,U.c,s.p0,v.TU,W.g0,w.AV,ot.LD,Z.ZX]}),a})()}}]);