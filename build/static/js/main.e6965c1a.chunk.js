(this["webpackJsonpconnect-with-follow-button"]=this["webpackJsonpconnect-with-follow-button"]||[]).push([[0],{1052:function(e,t){},1054:function(e,t){},1061:function(e,t){},1062:function(e,t){},1162:function(e,t,n){},1268:function(e,t){},1324:function(e,t){},1326:function(e,t){},1340:function(e,t){},1452:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(830),r=n(44),o=n(16),s=n(14),i=n(15),l=n.n(i),u=n(659),j=n.n(u),b=(n(1162),n(849)),d=n(850),f=n(39);var h=function(e){var t=e.setAccount,n=function(){var e=window.ethereum;return Boolean(e&&e.isMetaMask)};Object(c.useEffect)((function(){a()}),[]);var a=function(){var e=Object(r.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n()){e.next=13;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:c=e.sent,t(c[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b.b.error(e.t0.message);case 11:e.next=14;break;case 13:b.b.error("Please install MetaMask.");case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)(d.a,{className:"connectButton",onClick:a,children:"Connect wallet"})},p=n(594),O=n(1470),x=n(1466),w=n(1467),m=n(1471),v=n(1468),y=n(1469),g=n(1472),k=n(839),S=n(307),A=n(840),C=(n(1377),O.a.TextArea);Object(k.a)({apiKey:"AIzaSyB7U2BxIp7VdA0nLrsuxxfUF6ybNTvTxO8",authDomain:"wechat-follow.firebaseapp.com",projectId:"wechat-follow",storageBucket:"wechat-follow.appspot.com",messagingSenderId:"1006898251801",appId:"1:1006898251801:web:c20393888d3d40a8588288",measurementId:"G-QCZGJCSHVG",databaseURL:"https://wechat-follow-default-rtdb.firebaseio.com/"});function T(){var e=Object(S.a)(),t=window.innerHeight-300,n=Object(c.useState)(0),a=Object(s.a)(n,2),i=(a[0],a[1],Object(c.useState)(!1)),u=Object(s.a)(i,2),b=u[0],O=u[1],k=Object(c.useState)(0),T=Object(s.a)(k,2),I=T[0],B=T[1],F=Object(c.useState)(""),E=Object(s.a)(F,2),M=E[0],q=E[1],z=Object(c.useState)(200),H=Object(s.a)(z,2),N=H[0],U=H[1],Z=Object(c.useState)(!1),D=Object(s.a)(Z,2),G=(D[0],D[1]),J=Object(c.useState)(!1),L=Object(s.a)(J,2),R=(L[0],L[1],Object(c.useState)(!1)),_=Object(s.a)(R,2),P=_[0],V=_[1],K=Object(c.useState)(""),Q=Object(s.a)(K,2),W=Q[0],X=Q[1],Y=Object(c.useState)([]),$=Object(s.a)(Y,2),ee=$[0],te=$[1];Object(c.useEffect)((function(){Object(S.b)(Object(S.c)(e,"address_list/"),(function(e){var t=e.val(),n=Object.keys(t).filter((function(e){return e=e.replace(/[^A-Za-z0-9,]*/g,""),j.a.utils.isAddress(e)})),c={};n.forEach((function(e){e=e.replace(/[^A-Za-z0-9,]*/g,""),c[e]=e})),te(Object.keys(c))}))}),[]);var ne=function(){var e=Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector(".infinite-scroll-component").scrollTop=document.querySelector(".ant-list.ant-list-split").scrollHeight;case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O(t=!b),!t){e.next=6;break}return e.next=5,ne();case 5:setTimeout(Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:setTimeout(Object(r.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:case"end":return e.stop()}}),e)}))),4e4);case 3:case"end":return e.stop()}}),e)}))),4e4);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(r.a)(l.a.mark((function e(){var t,n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=Object(o.a)(Array.prototype.slice.call(document.querySelectorAll(".ant-list-item-action li"),0)),n=0,c=Object.keys(t);n<c.length;n++)a=c[n],"Follow"===t[a].innerText&&t[a].children[0].children[0].click();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{width:800},children:[W?Object(f.jsx)(d.a,{style:{width:"auto"},children:W}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Connect with Follow Button"}),Object(f.jsx)(h,{setAccount:X})]}),Object(f.jsx)("div",{style:{marginTop:20},children:P?Object(f.jsx)(C,{onChange:function(e){return q(e.target.value)},value:M,placeholder:"wallet address"}):Object(f.jsx)(d.a,{type:"dashed",onClick:function(){return V(!0)},block:!0,icon:Object(f.jsx)(g.a,{}),children:"Add Wallet Address"})})]}),Object(f.jsxs)(x.a,{justify:"space-between",style:{marginTop:20},children:[Object(f.jsx)(w.a,{span:5,children:Object(f.jsx)(d.a,{type:"primary",onClick:function(){for(var t=Object(o.a)(ee),n=M.replace(/[^A-Za-z0-9,]*/g,""),c=0;c<M.length;c+=43){n=M.slice(c,c+43);j.a.utils.isAddress(n)&&(t.push(n),Object(S.d)(Object(S.c)(e,"address_list/"+n),n))}te(t)},children:"Submit"})}),Object(f.jsx)(w.a,{span:10,offset:2,children:Object(f.jsxs)(x.a,{children:[Object(f.jsx)(w.a,{offset:1,children:Object(f.jsx)(d.a,{type:"primary",onClick:ae,children:"FollowAll"})}),Object(f.jsx)(w.a,{offset:1,children:Object(f.jsx)(d.a,{type:"primary",onClick:ne,children:"Scroll End"})})]})})]}),Object(f.jsx)(x.a,{style:{marginTop:20},children:Object(f.jsx)(d.a,{type:"primary",style:{width:"100%"},onClick:ce,children:b?"\u8f6e\u5faa\u4e2d\uff0c\u70b9\u51fb\u5173\u95ed\u529f\u80fd":"Auto Follow(\u6d4b\u8bd5\u529f\u80fd\uff0c\u4e0d\u4fdd\u8bc1\u7a33\u5b9a\u6027)"})})]}),Object(f.jsx)(A.a,{dataLength:ee.slice(0,N).length,next:function(){G(!0),U(N+500),G(!1)},height:t,hasMore:ee.slice(0,N).length<ee.length,loader:Object(f.jsx)(m.a,{paragraph:{rows:1},active:!0}),endMessage:Object(f.jsx)(v.a,{plain:!0,children:"It is all, nothing more \ud83e\udd10"}),scrollableTarget:"scrollableDiv",children:Object(f.jsx)(y.b,{style:{width:800},dataSource:ee.slice(0,N),renderItem:function(e,t){return Object(f.jsx)(y.b.Item,{actions:[Object(f.jsx)(p.FollowButton,{provider:window.ethereum,namespace:"CyberConnect",toAddr:e,env:p.Env.PRODUCTION,chain:p.Blockchain.ETH,onSuccess:function(e){console.log(e),B(I+1)},onFailure:function(e){console.log(e),B(I+1)}})],children:e},e)}})})]})}var I=document.getElementById("root");a.createRoot(I).render(Object(f.jsx)(c.StrictMode,{children:Object(f.jsx)(T,{})}))},878:function(e,t){},881:function(e,t){},884:function(e,t){},888:function(e,t){},914:function(e,t){},916:function(e,t){},925:function(e,t){},927:function(e,t){},937:function(e,t){},939:function(e,t){}},[[1452,1,2]]]);
//# sourceMappingURL=main.e6965c1a.chunk.js.map