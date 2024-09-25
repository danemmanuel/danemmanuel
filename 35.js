"use strict";(self.webpackChunkfinancesapp=self.webpackChunkfinancesapp||[]).push([[35],{2035:(G,p,n)=>{n.r(p),n.d(p,{DespesasModule:()=>w});var c=n(6895),u=n(5455),m=n(5512),l=n(6630),d=n(5861),h=n(7871),C=n(9458),e=n(4650),x=n(8341),v=n(7696),O=n(7413),P=n(1377),M=n(1279),D=n(1223),_=n(1101),T=n(9824),y=n(3146),g=n(8548);function F(t,s){1&t&&e._UZ(0,"mat-progress-bar",12)}function Z(t,s){1&t&&(e.TgZ(0,"mat-error"),e._uU(1,"Nenhuma despesa cadastrada para este m\xeas"),e.qZA())}function A(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"finances-app-listar-operacoes",13),e.NdJ("buscarOperacoes",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.buscarDespesas(!0))})("limparFiltro",function(){e.CHM(o);const r=e.oxw();return e.KtG(r.limparFiltro())}),e.qZA()}if(2&t){const o=e.oxw();e.Q6J("operacoes",o.operacoesFiltradas)("mes",o.mes)("ano",o.ano)("shakeFiltro",(null==o.operacoesFiltradas?null:o.operacoesFiltradas.length)!==(null==o.operacoes?null:o.operacoes.length))}}function b(t,s){if(1&t&&(e.ynx(0),e._UZ(1,"div",14),e.BQk()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("options",o.graficoCategoria)("theme","dark")}}function B(t,s){if(1&t&&(e.ynx(0),e._UZ(1,"div",15),e.BQk()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("options",o.graficoBanco)("theme","dark")}}const J=[{path:"",component:(()=>{class t{constructor(o,a,r){this.dialog=o,this._operacoesService=a,this._headerMesAnoService=r,this.operacoes=[],this.a=this._headerMesAnoService.getMesAno().subscribe(i=>{!i.mes||(this.mes=i.mes,this.ano=i.ano,this.calcularOperacoes(),this.calcularTotalPendente(),this.calcularTotalPago())}),this._operacoesService.getDespesas().subscribe(i=>{!i||(this.todasOperacoes=i,this.buscarDespesas())})}ngOnInit(){}ngOnDestroy(){this.a.unsubscribe()}configurarGraficoPorBanco(o){this.graficoBanco=this._operacoesService.configurarGraficoPorBanco(o,"despesa")}configurarGraficoPorCategoria(o){this.graficoCategoria=this._operacoesService.configurarGraficoPorCategoria(o,"despesa")}removeDuplicado(o){return o?.filter((a,r,i)=>r===i.findIndex(S=>S.name===a.name))}limparFiltro(){this.operacoesFiltradas=this.operacoes}filtrarPorBanco(o){this.operacoesFiltradas=this.operacoes.filter(a=>a.conta.instituicao===o.data.name)}buscarDespesas(o){var a=this;return(0,d.Z)(function*(){a.loading=!0,o&&a._operacoesService.consolidarCarteira(),a.operacoes=a.todasOperacoes,a.calcularOperacoes(),a.calcularTotalPendente(),a.calcularTotalPago(),a.loading=!1})()}calcularOperacoes(){this.operacoes=this._operacoesService.calcularOperacoes(this.todasOperacoes,this.mes,this.ano),this.operacoesFiltradas=this.operacoes,this.configurarGraficoPorCategoria(this.operacoes),this.configurarGraficoPorBanco(this.operacoes)}calcularTotalPendente(){!this.operacoes||(this.totalPendente=this.operacoes.filter(o=>!o.efetivado).reduce((o,a)=>o+a.valor,0))}calcularTotalPago(){!this.operacoes||(this.totalPago=this.operacoes.filter(o=>o.efetivado).reduce((o,a)=>o+a.valor,0))}adicionarDespesa(){var o=this;this.dialog.open(h.h,{width:"450px",maxWidth:"90%",autoFocus:!0,data:{tipoOperacao:"Despesa",operacoes:this.todasOperacoes}}).afterClosed().subscribe(function(){var a=(0,d.Z)(function*(r){r&&o.buscarDespesas(!0)});return function(r){return a.apply(this,arguments)}}())}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(x.uw),e.Y36(C.E),e.Y36(v.E))},t.\u0275cmp=e.Xpm({type:t,selectors:[["finances-app-despesas"]],decls:20,vars:15,consts:[[1,"content_despesas"],[1,"header"],["titulo","Pendente","cor","#323DA4","icone","push_pin",1,"mr-5",3,"loading","valor"],["titulo","Pago","cor","#FF604F","icone","account_balance_wallet",1,"mr-5",3,"loading","valor"],["mat-mini-fab","","color","primary","matTooltip","Adicionar Despesa",1,"add_operacao",2,"background-color","rgb(255, 96, 79)",3,"click"],[1,"row",2,"width","100%","align-items","start"],[1,"col-4"],["mode","buffer",4,"ngIf"],[4,"ngIf"],["tipoOperacao","Despesa","style","width: 100%;",3,"operacoes","mes","ano","shakeFiltro","buscarOperacoes","limparFiltro",4,"ngIf"],[1,"col-4",2,"margin-top","50px","border-right","1px solid #212121"],[1,"col-4",2,"margin-top","50px"],["mode","buffer"],["tipoOperacao","Despesa",2,"width","100%",3,"operacoes","mes","ano","shakeFiltro","buscarOperacoes","limparFiltro"],["id","chart1","echarts","",1,"demo-chart",3,"options","theme"],["id","chart2","echarts","",1,"demo-chart",3,"options","theme"]],template:function(o,a){1&o&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"finances-app-fit-card",2),e.ALo(3,"currency"),e._UZ(4,"finances-app-fit-card",3),e.ALo(5,"currency"),e.TgZ(6,"button",4),e.NdJ("click",function(){return a.adicionarDespesa()}),e.TgZ(7,"mat-icon"),e._uU(8,"add"),e.qZA()()(),e.TgZ(9,"div",5)(10,"div",6)(11,"h1"),e._uU(12,"Despesas"),e.qZA(),e.YNc(13,F,1,0,"mat-progress-bar",7),e.YNc(14,Z,2,0,"mat-error",8),e.YNc(15,A,1,4,"finances-app-listar-operacoes",9),e.qZA(),e.TgZ(16,"div",10),e.YNc(17,b,2,2,"ng-container",8),e.qZA(),e.TgZ(18,"div",11),e.YNc(19,B,2,2,"ng-container",8),e.qZA()()()),2&o&&(e.xp6(2),e.Q6J("loading",a.loading)("valor",e.xi3(3,9,a.totalPendente,"BRL")),e.xp6(2),e.Q6J("loading",a.loading)("valor",e.xi3(5,12,a.totalPago,"BRL")),e.xp6(9),e.Q6J("ngIf",a.loading),e.xp6(1),e.Q6J("ngIf",!(a.loading||null!=a.operacoes&&a.operacoes.length)),e.xp6(1),e.Q6J("ngIf",!a.loading&&a.operacoes.length),e.xp6(2),e.Q6J("ngIf",null==a.graficoCategoria.series[0].data?null:a.graficoCategoria.series[0].data.length),e.xp6(2),e.Q6J("ngIf",null==a.graficoBanco.series[0].data?null:a.graficoBanco.series[0].data.length))},dependencies:[c.O5,O.M,P.lW,M.Hw,D.TO,_.pW,T.gM,y.o,g._w,c.H9],styles:[".content_despesas[_ngcontent-%COMP%]{padding:0 50px}.content_despesas[_ngcontent-%COMP%]   .main_header[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:20px}.content_despesas[_ngcontent-%COMP%]   .main_header[_ngcontent-%COMP%]   .add_operacao[_ngcontent-%COMP%]{margin-left:30px}.content_despesas[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}.content_despesas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{margin-top:40px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.content_despesas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:30px;font-weight:500}.content_despesas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item-50[_ngcontent-%COMP%]{flex-basis:50%;padding:0 15px;margin-top:10px}.content_despesas[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .item-100[_ngcontent-%COMP%]{flex:1;flex-basis:100%;padding:0 15px;margin-top:20px}@media only screen and (max-width: 768px){.col-4[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}.header[_ngcontent-%COMP%]{justify-content:space-between!important;padding:0 15px;margin-bottom:25px}.card_saldo_contas[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:55px!important}.content_despesas[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{flex-direction:row}.content_despesas[_ngcontent-%COMP%]{padding:0;margin-top:120px}.content[_ngcontent-%COMP%]{padding:0 15px}.add_operacao[_ngcontent-%COMP%]{position:fixed;right:10px;bottom:90px;width:55px;height:55px;z-index:9}}"]}),t})()}];let I=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(J),l.Bz]}),t})();var N=n(9668),f=n(8202);let Q={align:"left",allowNegative:!0,allowZero:!0,decimal:",",precision:2,prefix:"R$ ",suffix:"",thousands:".",nullable:!0,min:null,max:null,inputMode:f.fF.FINANCIAL},w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,I,u.M,m.h,N.b,f.Ud.forRoot(Q),g.Ns.forRoot({echarts:()=>n.e(734).then(n.bind(n,4734))})]}),t})()}}]);