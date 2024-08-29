"use strict";(self.webpackChunkmaterial_pro_angular_lite=self.webpackChunkmaterial_pro_angular_lite||[]).push([[818],{7818:(Q,y,a)=>{a.r(y),a.d(y,{SymbolLogoModule:()=>F});var p=a(4755),C=a(2480),w=a(1634),l=a(9401),g=a(5580),t=a(2223),d=a(6081),b=a(2342),S=a(3144),u=a(4004),f=a(2548);let _=(()=>{class e{constructor(o){this.http=o}upload(o,n){return this.http.post(`${f.ij.LIVE_URL}/algo-strategy/symbol-url`,{symbol:o.symbol,url:o.image}).pipe((0,u.U)(c=>c))}getAllLogos(o){const n=`${f.ij.LIVE_URL}/algo-strategy/list-symbol-url`,i=new S.WM({Authorization:`Bearer ${o}`});return this.http.get(n,{headers:i}).pipe((0,u.U)(s=>s))}deleteLogo(o){return this.http.post(`${f.ij.LIVE_URL}/algo-strategy/symbolUrl-delete`,{id:o.id}).pipe((0,u.U)(s=>s))}update(o){return this.http.put(`${f.ij.LIVE_URL}/algo-strategy/update-symbol-url`,o).pipe((0,u.U)(i=>i))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(S.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var x=a(1728),h=a(9114),U=a(8097),v=a(430),L=a(3649),Z=a(9383);function O(e,r){1&e&&(t.TgZ(0,"div",13),t._UZ(1,"ngx-ui-loader",14),t.qZA()),2&e&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}function I(e,r){if(1&e&&(t.TgZ(0,"div",15),t._UZ(1,"img",16),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("src",o.previousImageUrl,t.LSH)}}function T(e,r){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Image file is required"),t.qZA())}function A(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.updateLogo())}),t._uU(1,"Update"),t.qZA()}if(2&e){const o=t.oxw();t.Q6J("disabled",!o.form.valid||!o.file)}}function D(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.upload())}),t._uU(1,"Upload"),t.qZA()}if(2&e){const o=t.oxw();t.Q6J("disabled",!o.form.valid||!o.file)}}let M=(()=>{class e{constructor(o,n,i,s,c){this.ngxService=o,this._snackBar=n,this.symbolLogoService=i,this.matDialogRef=s,this.matData=c,this.form=new l.cw({symbol:new l.NI("",l.kI.required)}),this.showLoader=!1,this.base64Image=null;const m=localStorage.getItem("userinfo");m&&(this.parseData=JSON.parse(m))}ngOnInit(){"update"==this.matData.mode&&(this.form.patchValue({symbol:this.matData.updateLogo.symbol}),this.previousImageUrl=this.matData.updateLogo.url)}onFileSelected(o){const n=o.target.files[0];if(n){this.file=n;const i=new FileReader;i.readAsDataURL(n),i.onload=()=>{this.base64Image=i.result},i.onerror=s=>{console.error("Error: ",s)}}}upload(){if(this.showLoader=!0,this.ngxService.start(),this.form.valid&&this.base64Image){const o={image:this.base64Image,symbol:this.form.get("symbol")?.value};this.symbolLogoService.upload(o,this.parseData.token).subscribe(n=>{n&&(this._snackBar.open(n.message,"Close",{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center"}),this.matDialogRef.close()),this.form.reset(),this.file=null,this.base64Image=null,this.showLoader=!1,this.ngxService.stop()},n=>{console.error("Error uploading banner:",n)})}else console.error("Form is invalid or no file selected")}updateLogo(){this.showLoader=!0,this.ngxService.start(),this.form.valid&&this.base64Image?this.symbolLogoService.update({url:this.base64Image,id:this.matData.updateLogo.id}).subscribe(n=>{n&&(this.showLoader=!0,this.ngxService.start(),this._snackBar.open(n.message,"Close",{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center"}),this.matDialogRef.close()),this.form.reset(),this.file=null,this.base64Image=null,this.showLoader=!1,this.ngxService.stop()},n=>{console.error("Error uploading banner:",n)}):console.error("Form is invalid or no file selected")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.LA),t.Y36(b.ux),t.Y36(_),t.Y36(g.so),t.Y36(g.WI))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-update-logo"]],decls:19,vars:8,consts:[["class","ngxLoader",4,"ngIf"],[1,"mat-toolbar"],["mat-dialog-close","","matTooltip","close",1,"mat-icon"],[1,"input-card-symbol"],[1,"form",3,"formGroup"],["class","image-preview",4,"ngIf"],[1,"file-input"],["type","file","id","fileUpload","required","",3,"change"],[4,"ngIf"],["appearance","outline",1,"input"],["matInput","","formControlName","symbol",3,"readonly"],[1,"btn"],["class","btn-style","mat-flat-button","",3,"disabled","click",4,"ngIf"],[1,"ngxLoader"],[3,"hasProgressBar"],[1,"image-preview"],["alt","Previous Image",1,"preview-image",3,"src"],["mat-flat-button","",1,"btn-style",3,"disabled","click"]],template:function(o,n){1&o&&(t.YNc(0,O,2,1,"div",0),t.TgZ(1,"mat-toolbar",1)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"mat-icon",2),t._uU(5,"close"),t.qZA()(),t.TgZ(6,"div",3)(7,"form",4),t.YNc(8,I,2,1,"div",5),t.TgZ(9,"div",6)(10,"input",7),t.NdJ("change",function(s){return n.onFileSelected(s)}),t.qZA(),t.YNc(11,T,2,0,"mat-error",8),t.qZA(),t.TgZ(12,"mat-form-field",9)(13,"mat-label"),t._uU(14,"Symbol"),t.qZA(),t._UZ(15,"input",10),t.qZA(),t.TgZ(16,"div",11),t.YNc(17,A,2,1,"button",12),t.YNc(18,D,2,1,"button",12),t.qZA()()()),2&o&&(t.Q6J("ngIf",n.showLoader),t.xp6(3),t.Oqu("create"==n.matData.mode?"Upload Logo":"Update Logo"),t.xp6(4),t.Q6J("formGroup",n.form),t.xp6(1),t.Q6J("ngIf","update"==n.matData.mode&&n.previousImageUrl),t.xp6(3),t.Q6J("ngIf",!n.file),t.xp6(4),t.Q6J("readonly","update"===n.matData.mode),t.xp6(2),t.Q6J("ngIf","update"==n.matData.mode),t.xp6(1),t.Q6J("ngIf","create"==n.matData.mode))},dependencies:[p.O5,x.lW,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,h.KE,h.hX,h.TO,U.Nt,d.Eo,v.Hw,g.ZT,L.gM,Z.Ye],styles:[".mat-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;background-color:#1e88e5;color:#fff}.input-card-symbol[_ngcontent-%COMP%]{display:grid;justify-content:center;align-items:center;margin-top:10px}.Logoheading[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.file-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:16px;width:100%;max-width:400px;justify-content:center;align-items:center}.file-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:70px}.uploadButton[_ngcontent-%COMP%]{background-color:#1e88e5!important;color:#fff!important;width:100%}.mat-icon[_ngcontent-%COMP%]{cursor:pointer}.image-preview[_ngcontent-%COMP%]{text-align:center;margin-bottom:16px}.preview-image[_ngcontent-%COMP%]{max-width:134px;height:auto;border-radius:8px;box-shadow:0 2px 4px #0000001a}.form[_ngcontent-%COMP%]{margin-bottom:10px;min-height:200px}.btn[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn-style[_ngcontent-%COMP%]{background-color:#1e88e5;color:#fff}"]}),e})();var P=a(6012);function J(e,r){1&e&&(t.TgZ(0,"div",9),t._UZ(1,"ngx-ui-loader",10),t.qZA()),2&e&&(t.xp6(1),t.Q6J("hasProgressBar",!1))}function j(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",11)(1,"div",12),t._UZ(2,"img",13),t.qZA(),t.TgZ(3,"mat-icon",14),t.NdJ("click",function(){const s=t.CHM(o).$implicit,c=t.oxw();return t.KtG(c.deleteLogo(s))}),t._uU(4,"close"),t.qZA(),t.TgZ(5,"div",15)(6,"p")(7,"b"),t._uU(8,"Symbol name: "),t.qZA(),t._uU(9),t.qZA()(),t.TgZ(10,"div",16)(11,"button",17),t.NdJ("click",function(){const s=t.CHM(o).$implicit,c=t.oxw();return t.KtG(c.updateLogo(s))}),t._uU(12,"Update"),t.qZA()()()}if(2&e){const o=r.$implicit;t.xp6(2),t.Q6J("src",o.url,t.LSH),t.xp6(7),t.Oqu(o.symbol)}}const N=[{path:"",component:(()=>{class e{constructor(o,n,i,s,c){this.ngxService=o,this.symbolLogoService=n,this.matDialog=i,this.matDialogRef=s,this._snackBar=c,this.data=[],this.showLoader=!1,this.base64Image=null;const m=localStorage.getItem("userinfo");m&&(this.parseData=JSON.parse(m))}ngOnInit(){this.getSymbolLogos(this.parseData.token)}getSymbolLogos(o){this.showLoader=!0,this.ngxService.start(),this.symbolLogoService.getAllLogos(o).subscribe(n=>{this.logos=n.data.results,this.showLoader=!1,this.ngxService.stop()})}openUpload(){this.matDialog.open(M,{width:"500px",data:{mode:"create"}}).afterClosed().subscribe(()=>{this.showLoader=!0,this.ngxService.start(),this.getSymbolLogos(this.parseData.token),this.ngxService.stop(),this.showLoader=!1})}updateLogo(o){this.matDialog.open(M,{width:"500px",data:{mode:"update",updateLogo:o}}).afterClosed().subscribe(n=>{this.showLoader=!0,this.ngxService.start(),this.getSymbolLogos(this.parseData.token),this.ngxService.stop(),this.showLoader=!1})}deleteLogo(o){this.matDialog.open(w.w,{width:"400px"}).afterClosed().subscribe(n=>{n&&this._deleteLogo(o)})}_deleteLogo(o){this.showLoader=!0,this.ngxService.start(),this.symbolLogoService.deleteLogo(o).subscribe(n=>{n&&(this._snackBar.open(n.message,"Close",{duration:3e3,verticalPosition:"bottom",horizontalPosition:"center"}),this.getSymbolLogos(this.parseData.token)),this.ngxService.stop(),this.showLoader=!1})}close(){this.matDialogRef.close()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.LA),t.Y36(_),t.Y36(g.uw),t.Y36(g.so),t.Y36(b.ux))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-symbol-logo"]],decls:12,vars:2,consts:[["class","ngxLoader",4,"ngIf"],[1,"main_container"],[1,"flex","pad-8","header"],[1,"heading"],[1,"spacer"],[1,"mt-30"],["mat-button","",1,"upload-button",3,"click"],[1,"container"],["class","card",4,"ngFor","ngForOf"],[1,"ngxLoader"],[3,"hasProgressBar"],[1,"card"],[1,"center-image"],["mat-card-image","","alt","...",1,"mat-card-image","image",3,"src"],["matTooltip","Delete logo",1,"deleteButton",3,"click"],[1,"card-content"],[1,"button-container"],["mat-flat-button","","color","primary",3,"click"]],template:function(o,n){1&o&&(t.YNc(0,J,2,1,"div",0),t.TgZ(1,"div",1)(2,"div",2)(3,"p",3),t._uU(4,"Symbol Logo "),t.qZA(),t._UZ(5,"div",4),t.TgZ(6,"div",5)(7,"button",6),t.NdJ("click",function(){return n.openUpload()}),t.TgZ(8,"span"),t._uU(9,"Upload Logo"),t.qZA()()()(),t.TgZ(10,"div",7),t.YNc(11,j,13,2,"div",8),t.qZA()()),2&o&&(t.Q6J("ngIf",n.showLoader),t.xp6(11),t.Q6J("ngForOf",n.logos))},dependencies:[p.sg,p.O5,x.lW,P.G2,d.Eo,v.Hw,L.gM],styles:[".mat-card-symbol[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.mat-icon[_ngcontent-%COMP%]{cursor:pointer}.input-card[_ngcontent-%COMP%]{overflow:hidden;display:flex;flex-direction:column;align-items:center;overflow-x:hidden;margin-top:10px;margin-bottom:10px}.main_container[_ngcontent-%COMP%]{padding:0 10px}.file-input[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:16px;width:100%;max-width:400px;justify-content:center;align-items:center}.file-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-left:70px}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:10px}.card[_ngcontent-%COMP%]{position:relative;background-color:#fff;border:1px solid #ccc;border-radius:5px;display:flex;flex-direction:column;justify-content:space-between}.mat-card-image[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}.card-content[_ngcontent-%COMP%]{flex-grow:1}.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-left:5px}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;padding:10px 0}.deleteButton[_ngcontent-%COMP%]{position:absolute;top:0;right:0;font-size:24px;cursor:pointer;background-color:red;color:#fff}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.upload-button[_ngcontent-%COMP%]{border:1px solid #CCCBCB;width:auto;border-radius:3px;background-color:#fff;color:#635d5d;font-weight:600;margin-left:0;height:36px;cursor:pointer;padding:10px}.image[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:cover;margin-bottom:8px}.center-image[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:10px}.input-card-symbol[_ngcontent-%COMP%]{display:grid;justify-content:center;align-items:center}"]}),e})()}];let Y=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[C.Bz.forChild(N),C.Bz]}),e})();var B=a(5815),k=a(5041);let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[k.y]}),e.\u0275inj=t.cJS({providers:[{provide:g.so,useValue:{}},{provide:g.WI,useValue:{}}],imports:[p.ez,Y,x.ot,l.UX,h.lN,U.c,P.QW,d.Js,v.Ps,B.N6,d.Js,g.Is,L.AV,Z.g0,b.ZX]}),e})()}}]);