"use strict";(self.webpackChunkmaterial_pro_angular_lite=self.webpackChunkmaterial_pro_angular_lite||[]).push([[82],{5082:(H,h,o)=>{o.r(h),o.d(h,{WithdrawalRequestModule:()=>P});var u=o(4755),f=o(9401),m=o(6081),g=o(5580),x=o(9114),R=o(430),T=o(8097),i=o(3627),p=o(3276),Z=o(9383),C=o(3649),q=o(2480),N=o(1634),t=o(2223),d=o(3144),w=o(4004);let _=(()=>{class e{constructor(a){this.http=a}getWithdrawalRequests(a){const r=new d.WM({Authorization:`Bearer ${a.token}`}),l=(new d.LE).set("page",a.page).set("limit",a.limit);return this.http.get("https://api.cryptozack.com/wallet/get-withdrawal-request",{headers:r,params:l}).pipe((0,w.U)(c=>c.data))}approveRequest(a){return this.http.post("https://api.cryptozack.com/wallet/withdrawal-amount",a).pipe((0,w.U)(l=>l))}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(d.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=o(2018);function A(e,n){1&e&&(t.TgZ(0,"div",20),t._UZ(1,"ngx-ui-loader",21),t.qZA()),2&e&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}function y(e,n){1&e&&(t.TgZ(0,"th",22),t._uU(1,"Name "),t.qZA())}function D(e,n){if(1&e&&(t.TgZ(0,"td",23),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.AsE(" ",a.user.firstName||"--"," ",a.lastName," ")}}function U(e,n){1&e&&(t.TgZ(0,"th",22),t._uU(1,"Email"),t.qZA())}function S(e,n){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.user.email||"--"," ")}}function Y(e,n){1&e&&(t.TgZ(0,"th",22),t._uU(1,"Amount "),t.qZA())}function W(e,n){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" $ ",a.amount/1e6||"--"," ")}}function M(e,n){1&e&&(t.TgZ(0,"th",22),t._uU(1,"Status "),t.qZA())}function z(e,n){1&e&&(t.TgZ(0,"span",26),t._uU(1,"PENDING"),t.qZA())}function Q(e,n){if(1&e&&(t.TgZ(0,"td",24),t.YNc(1,z,2,0,"span",25),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Q6J("ngIf","PENDING"==a.status)}}function B(e,n){1&e&&(t.TgZ(0,"th",22),t._uU(1,"Date & Time "),t.qZA())}function J(e,n){if(1&e&&(t.TgZ(0,"td",24),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,a.createdAt,"MMMM dd, y , hh:mm:ss a")," ")}}function I(e,n){1&e&&(t.TgZ(0,"th",22),t._uU(1,"Action "),t.qZA())}function L(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"td",24)(1,"mat-icon",27),t.NdJ("click",function(){const l=t.CHM(a).$implicit,c=t.oxw();return t.KtG(c.approveRequest(l.id))}),t._uU(2,"check_circle_outline "),t.qZA()()}}function F(e,n){1&e&&t._UZ(0,"tr",28)}function E(e,n){1&e&&t._UZ(0,"tr",29)}function O(e,n){1&e&&(t.TgZ(0,"tr",30)(1,"td",31),t._uU(2,"No data matching the filter "),t.qZA()())}const $=function(){return[15,25,50,75,100]},j=[{path:"",component:(()=>{class e{constructor(a,s,r,l){this.withdrawalService=a,this.ngxService=s,this.matDialog=r,this.toastr=l,this.displayedColumns=["name","email","amount","status","time","action"],this.dataSource=[],this.showLoader=!1;let c=localStorage.getItem("userinfo");c&&(this.parseData=JSON.parse(c))}ngOnInit(){this.initializeFilter(),this.getWithdrawalRequests()}initializeFilter(){this.filter={token:this.parseData.token,page:1,limit:15}}getWithdrawalRequests(){this.showLoader=!0,this.ngxService.start(),this.withdrawalService.getWithdrawalRequests(this.filter).subscribe(a=>{this.dataSource=a.results,this.paginator.length=a.count,this.showLoader=!1},a=>{this.showLoader=!1})}approveRequest(a){this.matDialog.open(N.w,{width:"300px"}).afterClosed().subscribe(s=>{1==s&&this._approveRequest(a)})}_approveRequest(a){this.withdrawalService.approveRequest(a).subscribe(s=>{s&&(this.initializeFilter(),this.getWithdrawalRequests())})}pageChange(a){this.filter.page=a.pageIndex+1,this.filter.limit=a.pageSize,this.getWithdrawalRequests()}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(_),t.Y36(m.LA),t.Y36(g.uw),t.Y36(v._W))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-requests"]],viewQuery:function(a,s){if(1&a&&t.Gf(p.NW,7),2&a){let r;t.iGM(r=t.CRH())&&(s.paginator=r.first)}},decls:30,vars:6,consts:[["class","ngxLoader",4,"ngIf"],[1,"main_container"],[1,"flex","pad-8","header"],[1,"heading"],[1,"spacer"],[2,"margin-top","10px"],["mat-table","",1,"dataTable",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","capital",4,"matCellDef"],["matColumnDef","email"],["mat-cell","",4,"matCellDef"],["matColumnDef","amount"],["matColumnDef","status"],["matColumnDef","time"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["pageSize","15",1,"pagination",3,"pageSizeOptions","page"],[1,"ngxLoader"],[3,"hasProgressBar"],["mat-header-cell",""],["mat-cell","",1,"capital"],["mat-cell",""],["style","color: #f5bb8c;",4,"ngIf"],[2,"color","#f5bb8c"],["matTooltip","Approve Request",1,"pointer","success",3,"click"],["mat-header-row",""],["mat-row","",1,"cursor-pointer"],[1,"mat-row"],["colspan","5",1,"pad-16",2,"text-align","center"]],template:function(a,s){1&a&&(t.YNc(0,A,2,1,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"p",3),t._uU(4,"Withdrawal Requests"),t.qZA(),t._UZ(5,"div",4),t.qZA(),t.TgZ(6,"div",5)(7,"table",6),t.ynx(8,7),t.YNc(9,y,2,0,"th",8),t.YNc(10,D,2,2,"td",9),t.BQk(),t.ynx(11,10),t.YNc(12,U,2,0,"th",8),t.YNc(13,S,2,1,"td",11),t.BQk(),t.ynx(14,12),t.YNc(15,Y,2,0,"th",8),t.YNc(16,W,2,1,"td",11),t.BQk(),t.ynx(17,13),t.YNc(18,M,2,0,"th",8),t.YNc(19,Q,2,1,"td",11),t.BQk(),t.ynx(20,14),t.YNc(21,B,2,0,"th",8),t.YNc(22,J,3,4,"td",11),t.BQk(),t.ynx(23,15),t.YNc(24,I,2,0,"th",8),t.YNc(25,L,3,0,"td",11),t.BQk(),t.YNc(26,F,1,0,"tr",16),t.YNc(27,E,1,0,"tr",17),t.YNc(28,O,3,0,"tr",18),t.qZA(),t.TgZ(29,"mat-paginator",19),t.NdJ("page",function(l){return s.pageChange(l)}),t.qZA()()()),2&a&&(t.Q6J("ngIf",s.showLoader),t.xp6(7),t.Q6J("dataSource",s.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",s.displayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(5,$)))},dependencies:[u.O5,m.Eo,R.Hw,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,i.Ee,p.NW,C.gM,u.uU],styles:[".main_container[_ngcontent-%COMP%]{padding:0 10px}.usdt[_ngcontent-%COMP%]{font-size:10px;font-weight:700}"]}),e})()}];let G=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[q.Bz.forChild(j),q.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,f.u5,f.UX,m.Js,g.Is,x.lN,R.Ps,T.c,i.p0,p.TU,Z.g0,C.AV,G,v.Rh.forRoot()]}),e})()}}]);