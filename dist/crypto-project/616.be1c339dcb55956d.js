"use strict";(self.webpackChunkmaterial_pro_angular_lite=self.webpackChunkmaterial_pro_angular_lite||[]).push([[616],{5616:(it,w,l)=>{l.r(w),l.d(w,{StrategyModule:()=>rt});var p=l(4755),h=l(2480),_=l(5861),f=l(9401),T=l(3276),C=l(5580),t=l(2223),y=l(6081),S=l(4004),g=l(3144);let Z=(()=>{class a{constructor(e){this.http=e}allBots(e){const o=new g.WM({Authorization:`Bearer ${e.token}`});let r=(new g.LE).set("userId",e.userId).set("page",e.pageCount.page).set("limit",e.pageCount.limit);return e.botStatus&&(r=r.set("botStatus",e.botStatus)),this.http.get("https://api.cryptozack.com/algo-strategy/runtime-bots",{headers:o,params:r}).pipe((0,S.U)(c=>c.data))}activeBots(e){const o=new g.WM({Authorization:`Bearer ${e.token}`});let r=(new g.LE).set("userId",e.userId).set("page",e.pageCount.page).set("limit",e.pageCount.limit);return e.botStatus&&(r=r.set("botStatus",e.botStatus)),this.http.get("https://api.cryptozack.com/algo-strategy/runtime-bots",{headers:o,params:r}).pipe((0,S.U)(c=>c.data))}strategyTransaction(e){const o=new g.WM({Authorization:`Bearer ${e.token}`});let r=(new g.LE).set("userId",e.userId).set("id",e.botId);return this.http.get("https://api.cryptozack.com/wallet/get-strategy-trade",{headers:o,params:r}).pipe((0,S.U)(c=>c))}publishAccess(e){const o=new g.WM({Authorization:`Bearer ${e.token}`});return this.http.post("https://api.cryptozack.com/algo-strategy/publish-strategy-access",{user:e.userId,strategyId:e.botId,copyStrategyAccess:e.copyStrategyAccess},{headers:o}).pipe((0,S.U)(c=>c.data))}todayProfit(e){const n=new g.WM({Authorization:`Bearer ${e.token}`}),o=(new g.LE).set("userId",e.userId).set("page",e.page).set("limit",e.limit).set("transactionType",e.transactionType).set("fromDate",e.dateRange.from).set("toDate",e.dateRange.to);return this.http.get("https://api.cryptozack.com/wallet/get-transaction",{headers:n,params:o}).pipe((0,S.U)(c=>c.data))}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(g.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var D=l(430),i=l(3627),x=l(3649);function U(a,s){1&a&&(t.TgZ(0,"div",15),t._UZ(1,"ngx-ui-loader",16),t.qZA()),2&a&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}function L(a,s){1&a&&(t.TgZ(0,"th",17),t._uU(1,"Profit "),t.qZA())}const b=function(a){return{color:a}};function N(a,s){if(1&a&&(t.TgZ(0,"td",18)(1,"span",19),t._uU(2),t.qZA()()),2&a){const e=s.$implicit;t.xp6(1),t.Q6J("ngStyle",t.VKq(2,b,e.usdtAmount>0?"green":"#687888")),t.xp6(1),t.hij("$ ",e.usdtAmount,"")}}function P(a,s){1&a&&(t.TgZ(0,"th",17),t._uU(1,"Date & Time"),t.qZA())}function R(a,s){if(1&a&&(t.TgZ(0,"td",18),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=s.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.createdAt,"MMMM dd, y , hh:mm:ss a")," ")}}function M(a,s){1&a&&t._UZ(0,"tr",20)}function O(a,s){1&a&&t._UZ(0,"tr",21)}function Y(a,s){1&a&&(t.TgZ(0,"tr",22)(1,"td",23),t._uU(2,"No data Found "),t.qZA()())}let A=(()=>{class a{constructor(e,n,o,r,c){this.ngxService=e,this.activatedRoute=n,this.strategyService=o,this.navigateRouter=r,this.values=c,this.displayedColumns=["amount","time"],this.dataSource=[],this.showLoader=!1;let m=localStorage.getItem("userinfo");m&&(this.parseData=JSON.parse(m))}ngOnInit(){this.getTransactionDetails()}getTransactionDetails(){this.showLoader=!0,this.ngxService.start(),this.strategyService.strategyTransaction({token:this.parseData.token,userId:this.values.userId,botId:this.values.botId}).subscribe(n=>{this.dataSource=n.data.transaction,this.paginator=n.data.transaction.length;let o=0;for(const r of n.data.transaction)o+=r.usdtAmount||0;this.totalTransaction=o.toFixed(2),this.showLoader=!1})}pageChange(e){this.filter.pageCount.page=e.pageIndex+1,this.filter.pageCount.limit=e.pageSize}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(y.LA),t.Y36(h.gz),t.Y36(Z),t.Y36(h.F0),t.Y36(C.WI))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-strategy-transaction"]],viewQuery:function(e,n){if(1&e&&t.Gf(T.NW,7),2&e){let o;t.iGM(o=t.CRH())&&(n.paginator=o.first)}},decls:22,vars:6,consts:[["class","ngxLoader",4,"ngIf"],[1,"main","flex-column-centered"],[1,"flex","header"],[1,"success"],[1,"spacer"],["mat-dialog-close","","matTooltip","Close",1,"pointer"],[1,"table_container",2,"margin-top","10px"],["mat-table","",1,"dataTable",3,"dataSource"],["matColumnDef","amount"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","time"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","","class","cursor-pointer",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[1,"ngxLoader"],[3,"hasProgressBar"],["mat-header-cell",""],["mat-cell",""],[3,"ngStyle"],["mat-header-row",""],["mat-row","",1,"cursor-pointer"],[1,"mat-row"],["colspan","2",1,"pad-16",2,"text-align","center"]],template:function(e,n){1&e&&(t.YNc(0,U,2,1,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"h3"),t._uU(4,"Strategy Total Transaction ("),t.TgZ(5,"span",3),t._uU(6),t.qZA(),t._uU(7,")"),t.qZA(),t._UZ(8,"div",4),t.TgZ(9,"mat-icon",5),t._uU(10,"close"),t.qZA()(),t.TgZ(11,"div",6)(12,"table",7),t.ynx(13,8),t.YNc(14,L,2,0,"th",9),t.YNc(15,N,3,4,"td",10),t.BQk(),t.ynx(16,11),t.YNc(17,P,2,0,"th",9),t.YNc(18,R,3,4,"td",10),t.BQk(),t.YNc(19,M,1,0,"tr",12),t.YNc(20,O,1,0,"tr",13),t.YNc(21,Y,3,0,"tr",14),t.qZA()()()),2&e&&(t.Q6J("ngIf",n.showLoader),t.xp6(6),t.hij("$ ",n.totalTransaction," "),t.xp6(6),t.Q6J("dataSource",n.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",n.displayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns))},dependencies:[p.O5,p.PC,y.Eo,C.ZT,D.Hw,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,i.Ee,x.gM,p.uU],styles:[".main_container[_ngcontent-%COMP%]{padding:0 10px}.header[_ngcontent-%COMP%]{padding:10px}.header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#33475b;margin:0}.table_container[_ngcontent-%COMP%]{max-height:500px}.usdt[_ngcontent-%COMP%]{font-size:9px;font-weight:700}.ml-10[_ngcontent-%COMP%]{margin-left:10px}"]}),a})();var z=l(1634),I=l(8097);function k(a,s){1&a&&(t.TgZ(0,"div",30),t._UZ(1,"ngx-ui-loader",31),t.qZA()),2&a&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}function B(a,s){1&a&&(t.TgZ(0,"th",32),t._uU(1,"User Name "),t.qZA())}function Q(a,s){if(1&a&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.hij(" ",e.userName," ")}}function F(a,s){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Profit"),t.qZA())}const v=function(a){return{color:a}};function J(a,s){if(1&a&&(t.TgZ(0,"td",34)(1,"span",35),t._uU(2),t.qZA()()),2&a){const e=s.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(2,v,e.currentProfit>0?"green":"#687888")),t.xp6(1),t.hij(" $ ",n.formetValues(e.currentProfit)," ")}}function E(a,s){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Status"),t.qZA())}function H(a,s){if(1&a&&(t.TgZ(0,"td",36),t._uU(1),t.qZA()),2&a){const e=s.$implicit;t.Q6J("ngStyle",t.VKq(2,v,"active"==e.botStatus?"green":"#FD354D")),t.xp6(1),t.hij(" ","active"==e.botStatus?"Active ":"Not Active"," ")}}function j(a,s){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Created Date"),t.qZA())}function $(a,s){if(1&a&&(t.TgZ(0,"td",34),t._uU(1),t.ALo(2,"date"),t.qZA()),2&a){const e=s.$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,e.createdAt,"MMMM dd, y , hh:mm:ss a")," ")}}function q(a,s){1&a&&(t.TgZ(0,"th",32),t._uU(1,"Action "),t.qZA())}function V(a,s){if(1&a){const e=t.EpF();t.TgZ(0,"td",34)(1,"mat-icon",37),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.strategyTransaction(r.botId))}),t._uU(2," view_day"),t.qZA()()}}function G(a,s){1&a&&t._UZ(0,"tr",38)}function W(a,s){1&a&&t._UZ(0,"tr",39)}function X(a,s){1&a&&(t.TgZ(0,"tr",40)(1,"td",41),t._uU(2,"No data matching the filter "),t.qZA()())}const K=function(){return[5,10,25,50,75,100]};var u=(()=>((u=u||{}).Last30Dayds="30Days",u.Last7Days="7Days",u.Today="today",u.Custom="custom",u.Next7Days="Next7Days",u.Next30Days="Next30Days",u.LastNext30Days="LastNext30Days",u))();const tt=[{path:"",component:(()=>{class a{constructor(e,n,o,r,c){this.router=e,this.ngxService=n,this.navigateRouter=o,this.strategyService=r,this.matDialog=c,this.displayedColumns=["profit","status","signupDate","action"],this.dataSource=[],this.showLoader=!1,this.DateRangeEnum=u,this.SelectedDateRange=u.Last7Days,this.selectedDefaultValue=u.Last30Dayds,this.DefaultValue=" TRADE_PROFIT",this.range=new f.cw({from:new f.NI,to:new f.NI}),this.router.queryParams.subscribe(d=>{d.userId&&(this.userId=d.userId,this.userName=d.user,this.status=d.status)});let m=localStorage.getItem("userinfo");m&&(this.parseData=JSON.parse(m))}ngOnInit(){var e=this;return(0,_.Z)(function*(){yield e.allBotsList(),e.initializeFilter(),e.getDefaultData(),e.initializeFilterTodayProfit(),e.todayTransaction()})()}initializeFilter(){var e=new Date;e.setUTCHours(0,0,0,0);var n=new Date;n.setUTCHours(23,59,59,999);const o={token:this.parseData.token,pageCount:{page:1,limit:5},dateRange:{from:e.toISOString(),to:n.toISOString()},filter:{text:""},userId:this.userId};"Active"==this.status&&(o.botStatus="active"),this.filter=o}getDefaultData(){this.selectionChange({value:this.selectedDefaultValue})}strategyLists(){this.showLoader=!0,this.ngxService.start(),this.strategyService.activeBots(this.filter).subscribe(e=>{this.dataSource=e.results,this.totalLength=e.count,this.showLoader=!1},e=>{this.showLoader=!1})}formetValues(e){return 0!==e?e.toFixed(2):"0"}backToUser(){this.navigateRouter.navigate(["/admin/client"])}selectionChange(e){const n=e.value;if(n===u.Last30Dayds){var o=new Date,r=new Date,c=new Date(r.getTime()-2592e6);c.setUTCHours(23,59,59,999),this.filter.dateRange={from:c.toISOString(),to:o.toISOString()},this.strategyLists()}else if(n===u.Last7Days){o=new Date,r=new Date;var m=new Date(r.getTime()-6048e5);m.setUTCHours(23,59,59,999),this.filter.dateRange={from:m.toISOString(),to:o.toISOString()},this.strategyLists()}else if(n===u.Today){(o=new Date).setUTCHours(0,0,0,0);var d=new Date;d.setUTCHours(23,59,59,999),this.filter.dateRange={from:o.toISOString(),to:d.toISOString()},this.strategyLists()}}dateRangeChange(e,n){if(this.range&&this.range.value&&this.range.value.to){const o=this.range.value.to||new Date(e.value),r=this.range.value.from||new Date(n.value);r.setUTCHours(23,59,59,999),this.filter.dateRange={from:new Date(r).toISOString(),to:new Date(o).toISOString()},this.strategyLists()}}getCustomOptiontext(){if(this.range&&this.range.value&&(this.range.value.to||this.range.value.from)){let e=this.range.value.to||new Date,n=this.range.value.from||new Date;return e=new p.uU("en-US").transform(e,"longDate"),n=new p.uU("en-US").transform(n,"longDate"),`${n} - ${e}`}return"Custom"}pageChange(e){this.filter.pageCount.page=e.pageIndex+1,this.filter.pageCount.limit=e.pageSize,this.strategyLists()}allBotsList(){var e=this;return(0,_.Z)(function*(){const n={token:e.parseData.token,pageCount:{page:1,limit:Number.MAX_SAFE_INTEGER},filter:{text:""},userId:e.userId};"Active"==e.status&&(n.botStatus="active");try{const o=yield e.strategyService.allBots(n).toPromise();let r=0;for(const c of o.results)r+=c.currentProfit||0;e.totalProfit=0!==r?r.toFixed(2):"0"}catch{}})()}strategyTransaction(e){this.matDialog.open(A,{width:"700px",data:{userId:this.userId,user:this.userName,botId:e,status:this.status}})}publish(e){this.matDialog.open(z.w,{width:"300px",maxHeight:"400px"}).afterClosed().subscribe(n=>{n&&this._publish(e)})}_publish(e){e.botConfiguration.publishAccess=!e.botConfiguration.publishAccess,this.strategyService.publishAccess({token:this.parseData.token,userId:this.userId,botId:e.botId,copyStrategyAccess:"ACCEPTED"}).subscribe(m=>{})}initializeFilterTodayProfit(){var e=new Date;e.setUTCHours(0,0,0,0);var n=new Date;n.setUTCHours(23,59,59,999);const o={from:e.toISOString(),to:n.toISOString()};this.todayfilter={token:this.parseData.token,userId:this.userId,transactionType:"TRADE_PROFIT",page:1,limit:Number.MAX_SAFE_INTEGER,dateRange:o}}todayTransaction(){var e=this;return(0,_.Z)(function*(){try{const n=yield e.strategyService.todayProfit(e.todayfilter).toPromise();let o=0;n.results.forEach(r=>{o+=r.usdtAmount}),e.todayProfit=0!==o?o.toFixed(2):"0"}catch{}})()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(h.gz),t.Y36(y.LA),t.Y36(h.F0),t.Y36(Z),t.Y36(C.uw))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-strategy-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(T.NW,7),2&e){let o;t.iGM(o=t.CRH())&&(n.paginator=o.first)}},inputs:{SelectedDateRange:"SelectedDateRange"},decls:46,vars:17,consts:[["class","ngxLoader",4,"ngIf"],[1,"main_container"],[1,"flex","pad-8","header"],[1,"flex",2,"align-items","center"],["matTooltip","Back To User",1,"back_arrow",3,"click"],[1,"heading","capital"],[1,"spacer"],[1,"search"],["matInput","","placeholder","Search...",1,"searchInput"],["input",""],[1,"searchIcon"],[1,"user_details"],[1,"detail"],[1,"para_value",3,"ngStyle"],[1,"para_heading"],[2,"margin-top","10px"],["mat-table","",1,"dataTable",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","capital",4,"matCellDef"],["matColumnDef","profit"],["mat-cell","",4,"matCellDef"],["matColumnDef","status"],["mat-cell","",3,"ngStyle",4,"matCellDef"],["matColumnDef","signupDate"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["pageSize","5",1,"pagination",3,"length","pageSizeOptions","page"],[1,"ngxLoader"],[3,"hasProgressBar"],["mat-header-cell",""],["mat-cell","",1,"capital"],["mat-cell",""],[3,"ngStyle"],["mat-cell","",3,"ngStyle"],["matTooltip","View Transaction Details",1,"pointer",3,"click"],["mat-header-row",""],["mat-row","",1,"cursor-pointer"],[1,"mat-row"],["colspan","4",1,"pad-16",2,"text-align","center"]],template:function(e,n){1&e&&(t.YNc(0,k,2,1,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"mat-icon",4),t.NdJ("click",function(){return n.backToUser()}),t._uU(5,"arrow_back"),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.qZA()(),t._UZ(8,"div",6),t.TgZ(9,"div",7),t._UZ(10,"input",8,9),t.TgZ(12,"mat-icon",10),t._uU(13,"search"),t.qZA()()(),t.TgZ(14,"div",11)(15,"div",12)(16,"p",13),t._uU(17),t.qZA(),t.TgZ(18,"p",14),t._uU(19," Total Profit "),t.qZA()(),t.TgZ(20,"div",12)(21,"p",13),t._uU(22),t.qZA(),t.TgZ(23,"p",14),t._uU(24,"Today Profit "),t.qZA()()(),t.TgZ(25,"div",15)(26,"table",16),t.ynx(27,17),t.YNc(28,B,2,0,"th",18),t.YNc(29,Q,2,1,"td",19),t.BQk(),t.ynx(30,20),t.YNc(31,F,2,0,"th",18),t.YNc(32,J,3,4,"td",21),t.BQk(),t.ynx(33,22),t.YNc(34,E,2,0,"th",18),t.YNc(35,H,2,4,"td",23),t.BQk(),t.ynx(36,24),t.YNc(37,j,2,0,"th",18),t.YNc(38,$,3,4,"td",21),t.BQk(),t.ynx(39,25),t.YNc(40,q,2,0,"th",18),t.YNc(41,V,3,0,"td",21),t.BQk(),t.YNc(42,G,1,0,"tr",26),t.YNc(43,W,1,0,"tr",27),t.YNc(44,X,3,0,"tr",28),t.qZA(),t.TgZ(45,"mat-paginator",29),t.NdJ("page",function(r){return n.pageChange(r)}),t.qZA()()()),2&e&&(t.Q6J("ngIf",n.showLoader),t.xp6(7),t.AsE(" ",n.userName," ",n.status," Strategys"),t.xp6(9),t.Q6J("ngStyle",t.VKq(12,v,n.totalProfit>0?"green":"687888")),t.xp6(1),t.hij("$ ",n.totalProfit||0,""),t.xp6(4),t.Q6J("ngStyle",t.VKq(14,v,n.todayProfit>0?"green":"687888")),t.xp6(1),t.hij("$ ",n.todayProfit||0,""),t.xp6(4),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(2),t.Q6J("length",n.totalLength)("pageSizeOptions",t.DdM(16,K)))},dependencies:[p.O5,p.PC,y.Eo,D.Hw,I.Nt,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,i.Ee,T.NW,x.gM,p.uU],styles:[".main_container[_ngcontent-%COMP%]{padding:0 10px}.back_arrow[_ngcontent-%COMP%]:hover{color:#1e88e5;cursor:pointer}.usdt[_ngcontent-%COMP%]{font-size:9px;font-weight:700}.user_details[_ngcontent-%COMP%]{width:100%;margin-top:15px;display:grid;grid-template-columns:50% 50%;gap:8px;border-radius:4px}.user_details[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]{margin-right:10px;background-color:#fff;box-shadow:#0000003d 0 2px 5px;text-align:center;padding:25px;border-radius:4px}.para_value[_ngcontent-%COMP%]{font-size:35px;font-weight:600;margin:0;color:#33475b}.para_heading[_ngcontent-%COMP%]{color:#687888;font-size:17px;font-weight:500;margin:0}"]}),a})()},{path:"str_transaction",component:A}];let et=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(tt),h.Bz]}),a})();var at=l(9114),nt=l(9383),ot=l(787),st=l(8280);let rt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez,et,f.u5,f.UX,y.Js,C.Is,at.lN,D.Ps,I.c,i.p0,T.TU,nt.g0,x.AV,ot.LD,st.FA]}),a})()}}]);