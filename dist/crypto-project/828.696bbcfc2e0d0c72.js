"use strict";(self.webpackChunkmaterial_pro_angular_lite=self.webpackChunkmaterial_pro_angular_lite||[]).push([[828],{7828:(X,T,i)=>{i.r(T),i.d(T,{SupportModule:()=>W});var s=i(4755),_=i(2480),S=i(5861),g=i(3276),c=i(5580),t=i(2223),d=i(3144),A=i(4004);let x=(()=>{class e{constructor(o){this.http=o}getsupportData(o){const l=new d.WM({Authorization:`Bearer ${o.token}`}),r=(new d.LE).set("page",o.page).set("limit",o.limit);return this.http.get("https://api.cryptozack.com/user-account/list-support",{headers:l,params:r}).pipe((0,A.U)(C=>C))}postSupportTicket(o){return this.http.post("https://api.cryptozack.com/user-account/support-reply",o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(d.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=i(6081),u=i(9401),f=i(430),Z=i(8097),N=i(9114),h=i(3649),v=i(9383),y=i(1728);function M(e,n){1&e&&(t.TgZ(0,"div",12),t._UZ(1,"ngx-ui-loader",13),t.qZA()),2&e&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}function D(e,n){if(1&e&&(t.TgZ(0,"div",14),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o)}}function w(e,n){if(1&e&&(t.TgZ(0,"div",15),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o)}}let U=(()=>{class e{constructor(o,a,l){this.supportService=o,this.dialogRef=a,this.data=l,this.newTicketIssue="",this.chatData=[],this.showLoader=!1,this.clientData={issue:["fix that issue","not solved"],replies:["will solve","will look","work on it"]},console.log("comming data",l);let r=localStorage.getItem("userinfo");r&&(this.parseData=JSON.parse(r))}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(x),t.Y36(c.so),t.Y36(c.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-reply"]],decls:17,vars:6,consts:[["class","ngxLoader",4,"ngIf"],[1,"toolbar"],[2,"text-transform","capitalize"],[1,"spacer"],["mat-dialog-close","","matTooltip","Close",1,"pointer"],[2,"height","400px"],["id","chat_container",1,"chat_container"],["class","message left",4,"ngFor","ngForOf"],["class","message right",4,"ngFor","ngForOf"],[1,"reply_container","flex"],["matInput","","type","text","name","issue","placeholder","reply...",3,"ngModel","ngModelChange"],["mat-button","",1,"submit-button",2,"background-color","#67757c","color","white"],[1,"ngxLoader"],[3,"hasProgressBar"],[1,"message","left"],[1,"message","right"]],template:function(o,a){1&o&&(t.YNc(0,M,2,1,"div",0),t.TgZ(1,"div",1)(2,"mat-toolbar",1)(3,"span",2),t._uU(4),t.qZA(),t._UZ(5,"div",3),t.TgZ(6,"mat-icon",4),t._uU(7,"close"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6),t.YNc(10,D,2,1,"div",7),t.YNc(11,w,2,1,"div",8),t.qZA(),t.TgZ(12,"div",9)(13,"mat-form-field")(14,"input",10),t.NdJ("ngModelChange",function(r){return a.newTicketIssue=r}),t.qZA()(),t.TgZ(15,"button",11),t._uU(16,"Submit"),t.qZA()()()),2&o&&(t.Q6J("ngIf",a.showLoader),t.xp6(4),t.AsE("",a.data.user.firstName," ",a.data.user.lastName,""),t.xp6(6),t.Q6J("ngForOf",a.clientData.issue),t.xp6(1),t.Q6J("ngForOf",a.clientData.replies),t.xp6(3),t.Q6J("ngModel",a.newTicketIssue))},dependencies:[s.sg,s.O5,m.Eo,u.Fj,u.JJ,u.On,f.Hw,Z.Nt,N.KE,h.gM,v.Ye,c.ZT,y.lW],styles:[".toolbar[_ngcontent-%COMP%]{background-color:#1e88e5;color:#fff}mat-form-field[_ngcontent-%COMP%]{width:70%;margin-right:10px;margin-left:30px}.reply_container[_ngcontent-%COMP%]{align-items:baseline;text-align:center}.chat_container[_ngcontent-%COMP%]{padding:5px}.chat_container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:300px;overflow-y:scroll}.message[_ngcontent-%COMP%]{padding:5px;margin:5px;max-width:70%;word-wrap:break-word}.message.left[_ngcontent-%COMP%]{align-self:flex-start;background-color:#f0f0f0}.message.right[_ngcontent-%COMP%]{align-self:flex-end;background-color:#d5e8d4}"]}),e})();var p=i(3627);function O(e,n){1&e&&(t.TgZ(0,"div",22),t._UZ(1,"ngx-ui-loader",23),t.qZA()),2&e&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}function Y(e,n){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Name "),t.qZA())}function R(e,n){if(1&e&&(t.TgZ(0,"td",25),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.AsE(" ",o.user.firstName," ",o.user.lastName," ")}}function J(e,n){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Email"),t.qZA())}function Q(e,n){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.user.email," ")}}function P(e,n){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Title "),t.qZA())}function z(e,n){if(1&e&&(t.TgZ(0,"td",27),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.title," ")}}function I(e,n){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Data & Time "),t.qZA())}function L(e,n){if(1&e&&(t.TgZ(0,"td",26),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,o.createdAt,"MMMM dd, y , hh:mm:ss a")," ")}}function B(e,n){1&e&&(t.TgZ(0,"th",24),t._uU(1,"Status"),t.qZA())}function F(e,n){if(1&e&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",o.status," ")}}function k(e,n){1&e&&(t.TgZ(0,"th",24),t._uU(1," Reply"),t.qZA())}function q(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",26)(1,"mat-icon",29),t.NdJ("click",function(){const r=t.CHM(o).$implicit,C=t.oxw();return t.KtG(C.reply(r))}),t._uU(2,"reply"),t.qZA(),t.TgZ(3,"mat-icon",30),t._uU(4,"remove_circle"),t.qZA()()}}function b(e,n){1&e&&t._UZ(0,"tr",31)}function j(e,n){1&e&&t._UZ(0,"tr",32)}function E(e,n){1&e&&(t.TgZ(0,"tr",33)(1,"td",34),t._uU(2,"No data matching the filter "),t.qZA()())}const $=function(){return[15,25,50,75,100]},H=[{path:"",component:(()=>{class e{constructor(o,a,l){this.supportService=o,this.ngxService=a,this.matdialog=l,this.displayedColumns=["name","email","time","title","status","reply"],this.dataSource=[],this.showLoader=!1,this.newTicketIssue="";let r=localStorage.getItem("userinfo");r&&(this.parseData=JSON.parse(r))}ngOnInit(){this.initializeFilter(),this.getData()}getData(){var o=this;return(0,S.Z)(function*(){yield o.getSupport()})()}initializeFilter(){this.filter={token:this.parseData.token,page:1,limit:15}}getSupport(){var o=this;return(0,S.Z)(function*(){o.showLoader=!0,o.ngxService.start();try{const a=yield o.supportService.getsupportData(o.filter).toPromise();console.log(a),o.dataSource=a.data.results,o.Replies=a.data.results[0].issue[0],o.totalLength=a.data.count,console.log(o.Replies),console.log(a.data.results),o.showLoader=!1}catch{o.showLoader=!1}})()}pageChange(o){this.filter.page=o.pageIndex+1,this.filter.limit=o.pageSize,this.getSupport()}reply(o){this.matdialog.open(U,{width:"450px",data:o})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(x),t.Y36(m.LA),t.Y36(c.uw))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-support"]],viewQuery:function(o,a){if(1&o&&t.Gf(g.NW,7),2&o){let l;t.iGM(l=t.CRH())&&(a.paginator=l.first)}},decls:30,vars:7,consts:[["class","ngxLoader",4,"ngIf"],[1,"main_container"],[1,"flex","pad-8","header"],[1,"heading"],[1,"spacer"],[2,"margin-top","10px"],["mat-table","",1,"dataTable",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","capital",4,"matCellDef"],["matColumnDef","email"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["mat-cell","","style","color: red; text-transform: capitalize;",4,"matCellDef"],["matColumnDef","time"],["matColumnDef","status"],["mat-cell","","style","color: #f5bb8c;",4,"matCellDef"],["matColumnDef","reply"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["pageSize","15",1,"pagination",3,"length","pageSizeOptions","page"],[1,"ngxLoader"],[3,"hasProgressBar"],["mat-header-cell",""],["mat-cell","",1,"capital"],["mat-cell",""],["mat-cell","",2,"color","red","text-transform","capitalize"],["mat-cell","",2,"color","#f5bb8c"],["matTooltip","Reply To User",1,"pointer","reply",3,"click"],["matTooltip","Remove Ticket",1,"remove"],["mat-header-row",""],["mat-row","",1,"cursor-pointer"],[1,"mat-row"],["colspan","5",1,"pad-16",2,"text-align","center"]],template:function(o,a){1&o&&(t.YNc(0,O,2,1,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"p",3),t._uU(4,"Support "),t.qZA(),t._UZ(5,"div",4),t.qZA(),t.TgZ(6,"div",5)(7,"table",6),t.ynx(8,7),t.YNc(9,Y,2,0,"th",8),t.YNc(10,R,2,2,"td",9),t.BQk(),t.ynx(11,10),t.YNc(12,J,2,0,"th",8),t.YNc(13,Q,2,1,"td",11),t.BQk(),t.ynx(14,12),t.YNc(15,P,2,0,"th",8),t.YNc(16,z,2,1,"td",13),t.BQk(),t.ynx(17,14),t.YNc(18,I,2,0,"th",8),t.YNc(19,L,3,4,"td",11),t.BQk(),t.ynx(20,15),t.YNc(21,B,2,0,"th",8),t.YNc(22,F,2,1,"td",16),t.BQk(),t.ynx(23,17),t.YNc(24,k,2,0,"th",8),t.YNc(25,q,5,0,"td",11),t.BQk(),t.YNc(26,b,1,0,"tr",18),t.YNc(27,j,1,0,"tr",19),t.YNc(28,E,3,0,"tr",20),t.qZA(),t.TgZ(29,"mat-paginator",21),t.NdJ("page",function(r){return a.pageChange(r)}),t.qZA()()()),2&o&&(t.Q6J("ngIf",a.showLoader),t.xp6(7),t.Q6J("dataSource",a.dataSource),t.xp6(19),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns),t.xp6(2),t.Q6J("length",a.totalLength)("pageSizeOptions",t.DdM(6,$)))},dependencies:[s.O5,p.BZ,p.fO,p.as,p.w1,p.Dz,p.nj,p.ge,p.ev,p.XQ,p.Gk,p.Ee,g.NW,m.Eo,f.Hw,h.gM,s.uU],styles:[".main_container[_ngcontent-%COMP%]{padding:0 10px}.reply[_ngcontent-%COMP%]{margin-right:5px}.reply[_ngcontent-%COMP%]:hover{color:#1e88e5}.remove[_ngcontent-%COMP%]:hover{cursor:pointer;color:green}"]}),e})()}];let G=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[_.Bz.forChild(H),_.Bz]}),e})(),W=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.ez,G,p.p0,g.TU,m.Js,u.u5,f.Ps,Z.c,h.AV,v.g0,c.Is,y.ot]}),e})()}}]);