"use strict";(self.webpackChunkmaterial_pro_angular_lite=self.webpackChunkmaterial_pro_angular_lite||[]).push([[285],{1285:(fe,A,l)=>{l.r(A),l.d(A,{LeagueModule:()=>de});var p=l(4755),C=l(2480),e=l(2223),c=l(3627);function Y(t,a){1&t&&(e.TgZ(0,"th",12),e._uU(1," Rank "),e.qZA())}function O(t,a){if(1&t&&(e.TgZ(0,"td",13),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",n.rank," ")}}function k(t,a){1&t&&(e.TgZ(0,"th",12),e._uU(1," Winnings "),e.qZA())}function J(t,a){if(1&t&&(e.TgZ(0,"td",13),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ","Rs "+n.prize," ")}}function S(t,a){1&t&&e._UZ(0,"tr",14)}function P(t,a){1&t&&e._UZ(0,"tr",15)}let Q=(()=>{class t{constructor(n){this.route=n,this.displayedColumns=["rank","winnings"],this.route.queryParams.subscribe(o=>{if(o.league){const i=JSON.parse(o.league);console.log(i.prizing),this.dataSource=i.prizing}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(C.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-league-info"]],decls:15,vars:3,consts:[[1,"main_container"],[1,"flex","pad-8","header"],[1,"flex",2,"align-items","center"],[1,"heading","capital"],[2,"margin-top","10px"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","rank"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","winnings"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._uU(4," League info"),e.qZA()()(),e.TgZ(5,"div",4)(6,"table",5),e.ynx(7,6),e.YNc(8,Y,2,0,"th",7),e.YNc(9,O,2,1,"td",8),e.BQk(),e.ynx(10,9),e.YNc(11,k,2,0,"th",7),e.YNc(12,J,2,1,"td",8),e.BQk(),e.YNc(13,S,1,0,"tr",10),e.YNc(14,P,1,0,"tr",11),e.qZA()()()),2&n&&(e.xp6(6),e.Q6J("dataSource",o.dataSource),e.xp6(7),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns))},dependencies:[c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk],styles:[".main_container[_ngcontent-%COMP%]{padding:0 10px}"]}),t})();var r=l(9401),_=l(5580),g=l(3144),L=l(4004);let w=(()=>{class t{constructor(n){this.http=n}getAllLeagues(n){const i=new g.WM({Authorization:`Bearer ${n.token}`});let s=(new g.LE).set("page",n.pageCount.page).set("limit",n.pageCount.limit);return this.http.get("http://192.168.31.32:3000/fantasy-zack/list",{headers:i,params:s}).pipe((0,L.U)(u=>u))}createLeague(n){console.log(n);const s=new g.WM({Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTk0YjE3Yy1iMTQyLTRhMDgtYThjOS05YWFlNGEzY2VkOTEiLCJyb2xlIjoiQ09NUEFOWV9BRE1JTiIsImlhdCI6MTcyMDY3Mzc3NiwiaXNzIjoiY3J5cHRvY2FzZS5hcHAifQ.OKu0pUUcP7iIjBF--BQIlPRqpoDURjEuIQTF2J19P4o"});return this.http.post("http://192.168.31.32:3000/fantasy-zack/create",n,{headers:s}).pipe((0,L.U)(u=>(console.log(u),u)))}updateLeague(n){const s=new g.WM({Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMTk0YjE3Yy1iMTQyLTRhMDgtYThjOS05YWFlNGEzY2VkOTEiLCJyb2xlIjoiQ09NUEFOWV9BRE1JTiIsImlhdCI6MTcyMDY3Mzc3NiwiaXNzIjoiY3J5cHRvY2FzZS5hcHAifQ.OKu0pUUcP7iIjBF--BQIlPRqpoDURjEuIQTF2J19P4o"});return this.http.put("http://192.168.31.32:3000/fantasy-zack/update-league",n,{headers:s}).pipe((0,L.U)(u=>(console.log(u),u)))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(g.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var N=l(2342),x=l(1728),v=l(9114),b=l(8097),I=l(430),U=l(9383);function F(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"div",7)(1,"h5"),e._uU(2),e.qZA(),e.TgZ(3,"div")(4,"mat-form-field",5),e._UZ(5,"input",19),e.qZA()(),e.TgZ(6,"button",20),e.NdJ("click",function(){const s=e.CHM(n).index,u=e.oxw();return e.KtG(u.removeField(s))}),e.TgZ(7,"mat-icon"),e._uU(8,"delete"),e.qZA()()()}if(2&t){const n=a.index,o=e.oxw();e.xp6(2),e.hij("Rank ",n+1,":"),e.xp6(3),e.Q6J("formControl",o.getPriceControl(n))}}function R(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.createLeague())}),e._uU(1,"Create"),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("disabled",!n.form.valid)}}function j(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.updateLeague())}),e._uU(1,"Update"),e.qZA()}}let D=(()=>{class t{constructor(n,o,i,s){this.leagueService=n,this.matdialogRef=o,this.snackBar=i,this.data=s,this.mode=this.data.mode,this.now=new Date,console.log(this.now),this.form=new r.cw({name:new r.NI("",r.kI.required),prizing:new r.Oe([]),startDate:new r.NI("",r.kI.required),startTime:new r.NI("",r.kI.required),endDate:new r.NI("",r.kI.required),endTime:new r.NI("",r.kI.required),investmentAmount:new r.NI("",r.kI.required)}),this.addField()}get fieldsArray(){return this.form.get("prizing")}addField(){const n=new r.cw({price:new r.NI("")});this.fieldsArray.push(n)}getPriceControl(n){return this.fieldsArray.at(n).get("price")}removeField(n){this.fieldsArray.removeAt(n)}createLeague(){console.log(this.form.value);const i=this.form.value.endDate,s=this.form.value.endTime;new Date(`${this.form.value.startDate}T${this.form.value.startTime}:00Z`).toISOString()>=new Date(`${i}T${s}:00Z`).toISOString()?this.snackBar.open("Start date must be before end date.","Close",{duration:3e3,panelClass:["snackbar-error"]}):this.form.value.prizing.map((m,h)=>({rank:h+1,prize:parseInt(m.price,10)}))}updateLeague(){const{startDate:n,startTime:o,endDate:i,endTime:s,name:u,prizing:T,investmentAmount:Z}=this.form.value;let f,m;n&&o&&(f=new Date(`${n.split(" ")[0]}T${o}:00Z`).toISOString()),i&&s&&(m=new Date(`${i.split(" ")[0]}T${s}:00Z`).toISOString()),console.log("start date",this.form.value.startDate),console.log("startDate",f),console.log("endDate",m);const h=T.map((pe,ge)=>({rank:ge+1,prize:parseInt(pe.price,10)})),d={};u&&(d.name=u),h.length>0&&!isNaN(h.prize)&&(d.prizing=h),Z&&(d.investmentAmount=Z),this.data.leagueId&&(d.leagueId=this.data.leagueId),f&&(d.startDate=f),m&&(d.endDate=m)}close(){this.matdialogRef.close()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(w),e.Y36(_.so),e.Y36(N.ux),e.Y36(_.WI))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-create-league"]],decls:46,vars:5,consts:[[1,"header"],["mat-icon-button","",1,"close",3,"click"],[1,"main_container"],[1,"input-card"],[2,"width","100%","max-width","400px",3,"formGroup"],["appearance","outline",1,"input"],["type","text","matInput","","formControlName","name"],[1,"pricing"],["mat-button","",1,"add-field",3,"click"],["class","pricing",4,"ngFor","ngForOf"],[2,"display","flex","gap","8px"],["appearance","outline",1,"input",2,"flex","1"],["matInput","","type","date","formControlName","startDate"],["type","time","matInput","","formControlName","startTime"],["matInput","","type","date","formControlName","endDate"],["type","time","matInput","","formControlName","endTime"],["type","number","matInput","","formControlName","investmentAmount"],["class","button","mat-flat-button","",3,"disabled","click",4,"ngIf"],["class","button","mat-flat-button","",3,"click",4,"ngIf"],["type","number","matInput","",3,"formControl"],["mat-icon-button","","color","warn",3,"click"],["mat-flat-button","",1,"button",3,"disabled","click"],["mat-flat-button","",1,"button",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"mat-toolbar")(2,"span"),e._uU(3),e.qZA(),e.TgZ(4,"button",1),e.NdJ("click",function(){return o.close()}),e.TgZ(5,"mat-icon"),e._uU(6,"close"),e.qZA()()()(),e.TgZ(7,"div",2)(8,"div",3)(9,"form",4)(10,"div")(11,"mat-label"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"mat-form-field",5),e._UZ(14,"input",6),e.qZA()(),e.TgZ(15,"div")(16,"div",7)(17,"mat-label"),e._uU(18,"Pricing"),e.qZA(),e.TgZ(19,"button",8),e.NdJ("click",function(){return o.addField()}),e.TgZ(20,"span"),e._uU(21,"Add Field"),e.qZA()()(),e.YNc(22,F,9,2,"div",9),e.qZA(),e.TgZ(23,"div")(24,"mat-label"),e._uU(25,"Start Date and Time"),e.qZA(),e.TgZ(26,"div",10)(27,"mat-form-field",11),e._UZ(28,"input",12),e.qZA(),e.TgZ(29,"mat-form-field",11),e._UZ(30,"input",13),e.qZA()()(),e.TgZ(31,"div")(32,"mat-label"),e._uU(33,"End Date and Time"),e.qZA(),e.TgZ(34,"div",10)(35,"mat-form-field",11),e._UZ(36,"input",14),e.qZA(),e.TgZ(37,"mat-form-field",11),e._UZ(38,"input",15),e.qZA()()(),e.TgZ(39,"div")(40,"mat-label"),e._uU(41,"Investment Amount"),e.qZA(),e.TgZ(42,"mat-form-field",5),e._UZ(43,"input",16),e.qZA()(),e.YNc(44,R,2,1,"button",17),e.YNc(45,j,2,0,"button",18),e.qZA()()()),2&n&&(e.xp6(3),e.hij(" ","create"==o.data.mode?"Create League":"Update League",""),e.xp6(6),e.Q6J("formGroup",o.form),e.xp6(13),e.Q6J("ngForOf",o.fieldsArray.controls),e.xp6(22),e.Q6J("ngIf","create"==o.data.mode),e.xp6(1),e.Q6J("ngIf","update"==o.data.mode))},dependencies:[p.sg,p.O5,x.lW,x.RK,v.KE,v.hX,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.oH,r.sg,r.u,b.Nt,I.Hw,U.Ye],styles:[".main_container[_ngcontent-%COMP%]{padding:0 10px}.input-card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-top:10px}.pricing[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.add-field[_ngcontent-%COMP%]{border:1px solid #CCCBCB;width:auto;border-radius:3px;background-color:#fff;color:#635d5d;font-weight:600;margin-left:0;height:36px;cursor:pointer;padding:10px}.mat-toolbar-single-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background-color:#1e88e5;color:#fff}.button[_ngcontent-%COMP%]{background-color:#1e88e5;color:#fff;width:100%;max-width:400px;margin-top:20px}"]}),t})();var y=l(6081),z=l(3276),M=l(3649);function q(t,a){1&t&&(e.TgZ(0,"div",22),e._UZ(1,"ngx-ui-loader",23),e.qZA()),2&t&&(e.xp6(1),e.Q6J("hasProgressBar",!1))}function B(t,a){1&t&&(e.TgZ(0,"th",24),e._uU(1,"Name "),e.qZA())}function H(t,a){if(1&t&&(e.TgZ(0,"td",25),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",n.name," ")}}function E(t,a){1&t&&(e.TgZ(0,"th",24),e._uU(1,"Start Date"),e.qZA())}function W(t,a){if(1&t&&(e.TgZ(0,"td",26),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.startDate,"MM/dd/yyyy, HH:mm")," ")}}function $(t,a){1&t&&(e.TgZ(0,"th",24),e._uU(1,"End Date"),e.qZA())}function G(t,a){if(1&t&&(e.TgZ(0,"td",26),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.endDate,"MM/dd/yyyy, HH:mm")," ")}}function X(t,a){1&t&&(e.TgZ(0,"th",24),e._uU(1,"Investment Amount"),e.qZA())}function V(t,a){if(1&t&&(e.TgZ(0,"td",26),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",n.investmentAmount," ")}}function K(t,a){1&t&&(e.TgZ(0,"th",24),e._uU(1,"Total Prizing"),e.qZA())}function ee(t,a){if(1&t&&(e.TgZ(0,"td",26),e._uU(1),e.qZA()),2&t){const n=a.$implicit;e.xp6(1),e.hij(" ",n.totalPrizing," ")}}function te(t,a){1&t&&(e.TgZ(0,"th",24),e._uU(1,"Update"),e.qZA())}function ne(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"td",26)(1,"mat-icon",27),e.NdJ("click",function(){const s=e.CHM(n).$implicit,u=e.oxw();return e.KtG(u.openUpdateLeague(s))}),e._uU(2,"edit"),e.qZA()()}}function ae(t,a){1&t&&e._UZ(0,"tr",28)}function oe(t,a){1&t&&e._UZ(0,"tr",29)}function ie(t,a){1&t&&(e.TgZ(0,"tr",30)(1,"td",31),e._uU(2,"No data matching the filter "),e.qZA()())}const re=function(){return[15,25,50,75,100]},le=[{path:"",component:(()=>{class t{constructor(n,o,i,s){this.leagueService=n,this.router=o,this.matdialog=i,this.ngxService=s,this.showLeague=!1,this.showLoader=!1,this.displayedColumns=["name","start date","end date","investmentAmount","totalPrizing","update"]}ngOnInit(){this.initializeFilter(),this.getLeagues(),console.log(this.showLeague)}initializeFilter(){this.filter={token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3ZmFlZDA4Yi0wMTA3LTQwNWItYTRhOS04OTJhMTExY2NlNGMiLCJyb2xlIjoiQ09NUEFOWV9BRE1JTiIsImlhdCI6MTcxNjc4OTUyNywiaXNzIjoiY3J5cHRvY2FzZS5hcHAifQ.N0PF8G_YHq24hGHaixaWFtvi1bHCazedzhK5kyJj9i4",pageCount:{page:1,limit:15},filter:{text:""}}}getLeagues(){this.showLoader=!0,this.ngxService.start(),this.leagueService.getAllLeagues(this.filter).subscribe(n=>{this.dataSource=n.data.results,this.totalLength=n.data.count,this.showLoader=!1,this.ngxService.stop()})}gotoPrizing(n){this.showLeague=!0,console.log(this.showLeague),this.router.navigate(["admin/league/league-info"],{queryParams:{league:JSON.stringify(n)}})}openCreateLeague(){this.matdialog.open(D,{width:"700px",maxHeight:"600px",data:{mode:"create"}}).afterClosed().subscribe(()=>{this.showLoader=!0,this.ngxService.start(),this.getLeagues(),this.showLoader=!1,this.ngxService.stop()})}openUpdateLeague(n){this.matdialog.open(D,{width:"700px",maxHeight:"600px",data:{mode:"update",leagueId:n.id}}).afterClosed().subscribe(()=>{this.showLoader=!0,this.ngxService.start(),this.getLeagues(),this.showLoader=!1,this.ngxService.stop()})}pageChange(n){this.filter.pageCount.page=n.pageIndex+1,this.filter.pageCount.limit=n.pageSize,this.getLeagues()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(w),e.Y36(C.F0),e.Y36(_.uw),e.Y36(y.LA))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-league"]],decls:34,vars:7,consts:[["class","ngxLoader",4,"ngIf"],[1,"main_container"],[1,"flex","pad-8","header"],[1,"heading"],[1,"spacer"],[1,"mt-30"],["mat-button","",1,"create-league",3,"click"],[1,"table",2,"margin-top","10px"],["mat-table","",1,"dataTable",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","capital",4,"matCellDef"],["matColumnDef","start date"],["mat-cell","",4,"matCellDef"],["matColumnDef","end date"],["matColumnDef","investmentAmount"],["matColumnDef","totalPrizing"],["matColumnDef","update"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","cursor-pointer",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["pageSize","15",1,"pagination",3,"length","pageSizeOptions","page"],[1,"ngxLoader"],[3,"hasProgressBar"],["mat-header-cell",""],["mat-cell","",1,"capital"],["mat-cell",""],["matTooltip","update League",3,"click"],["mat-header-row",""],["mat-row","",1,"cursor-pointer"],[1,"mat-row"],["colspan","5",1,"pad-16",2,"text-align","center"]],template:function(n,o){1&n&&(e.YNc(0,q,2,1,"div",0),e.TgZ(1,"div",1)(2,"div",2)(3,"p",3),e._uU(4,"Leagues"),e.qZA(),e._UZ(5,"div",4),e.TgZ(6,"div",5)(7,"button",6),e.NdJ("click",function(){return o.openCreateLeague()}),e.TgZ(8,"span"),e._uU(9,"Create League"),e.qZA()()()(),e.TgZ(10,"div",7)(11,"table",8),e.ynx(12,9),e.YNc(13,B,2,0,"th",10),e.YNc(14,H,2,1,"td",11),e.BQk(),e.ynx(15,12),e.YNc(16,E,2,0,"th",10),e.YNc(17,W,3,4,"td",13),e.BQk(),e.ynx(18,14),e.YNc(19,$,2,0,"th",10),e.YNc(20,G,3,4,"td",13),e.BQk(),e.ynx(21,15),e.YNc(22,X,2,0,"th",10),e.YNc(23,V,2,1,"td",13),e.BQk(),e.ynx(24,16),e.YNc(25,K,2,0,"th",10),e.YNc(26,ee,2,1,"td",13),e.BQk(),e.ynx(27,17),e.YNc(28,te,2,0,"th",10),e.YNc(29,ne,3,0,"td",13),e.BQk(),e.YNc(30,ae,1,0,"tr",18),e.YNc(31,oe,1,0,"tr",19),e.YNc(32,ie,3,0,"tr",20),e.qZA(),e.TgZ(33,"mat-paginator",21),e.NdJ("page",function(s){return o.pageChange(s)}),e.qZA()()()),2&n&&(e.Q6J("ngIf",o.showLoader),e.xp6(11),e.Q6J("dataSource",o.dataSource),e.xp6(19),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(2),e.Q6J("length",o.totalLength)("pageSizeOptions",e.DdM(6,re)))},dependencies:[p.O5,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,c.Ee,x.lW,I.Hw,z.NW,y.Eo,M.gM,p.uU],styles:[".main_container[_ngcontent-%COMP%]{padding:0 10px}main[_ngcontent-%COMP%]{font-family:Arial,sans-serif;justify-content:space-around;align-items:flex-start;gap:16px;background-color:#fff;margin:0;padding:16px;box-sizing:border-box;display:grid}.league-card[_ngcontent-%COMP%]{flex:0 1 calc(50% - 16px);box-sizing:border-box;cursor:pointer;margin-bottom:16px;width:780px}.league-dates[_ngcontent-%COMP%]{display:grid;justify-content:center;margin-bottom:16px}.mega-prize[_ngcontent-%COMP%], .investment-amount[_ngcontent-%COMP%]{margin-top:8px}.start-date[_ngcontent-%COMP%], .end-date[_ngcontent-%COMP%]{font-weight:500;margin-bottom:8px}.card[_ngcontent-%COMP%]{display:flex;flex-direction:clou}.mat-card-header[_ngcontent-%COMP%]{background-color:#1e88e5;display:flex;justify-content:center}.footer[_ngcontent-%COMP%]{display:flex;gap:76px}.first-prize[_ngcontent-%COMP%]{margin-top:8px}.dateandicon[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.icon[_ngcontent-%COMP%]{display:flex;align-items:center}.icon-size[_ngcontent-%COMP%]{font-size:47px}.create-league[_ngcontent-%COMP%]{border:1px solid #CCCBCB;width:auto;border-radius:3px;background-color:#fff;color:#635d5d;font-weight:600;margin-left:0;height:36px;cursor:pointer;padding:10px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}"]}),t})()},{path:"league-info",component:Q}];let ce=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C.Bz.forChild(le),C.Bz]}),t})();var se=l(5815),ue=l(6012),me=l(8280);let de=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.ez,ce,se.N6,c.p0,ue.QW,x.ot,_.Is,v.lN,r.UX,b.c,I.Ps,me.FA,U.g0,z.TU,y.Js,N.ZX,M.AV]}),t})()}}]);