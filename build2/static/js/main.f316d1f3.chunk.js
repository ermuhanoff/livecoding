(this.webpackJsonplive_coding_start=this.webpackJsonplive_coding_start||[]).push([[0],{178:function(e,t,n){},181:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(27),r=n.n(c),l=(n(178),n(6)),s=n(280),o=n(281),j=n(170),b=n(279),d=n(278),h=n(286),O=n(285),u=n(49),x=n(283),p=n(284),f=n(282),m=n(288),g=n(289),y=n(172),S=n(290),C=n(291),v=n(292),w=n(54),k=(n(179),n(180),n(181),n(128)),I=n.n(k),T=n(152),z=n(287),N=n(9),A=s.a.Text,_=s.a.Link,J="http://localhost:4000/",L={fontSize:"1.2em",padding:"15px 10px"},B=Object(N.jsxs)(o.a,{style:{width:200},children:[Object(N.jsx)(o.a.Item,{style:L,title:"Login",icon:Object(N.jsx)(m.a,{}),children:Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/login",children:"Login"})},"login"),Object(N.jsx)(o.a.Item,{style:L,title:"About us",icon:Object(N.jsx)(g.a,{}),children:Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/about",children:"About us"})},"login"),Object(N.jsx)(o.a.Item,{style:L,title:"Help",icon:Object(N.jsx)(y.a,{}),children:Object(N.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"/help",children:"Help"})},"login")]});var F=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),r=Object(l.a)(c,2),s=r[0],o=r[1],m=Object(a.useState)(""),g=Object(l.a)(m,2),y=g[0],k=g[1],L=Object(a.useState)("WEB"),F=Object(l.a)(L,2),E=F[0],R=F[1],W=Object(a.useState)(""),q=Object(l.a)(W,2),V=q[0],H=q[1],P=Object(a.useState)(!1),M=Object(l.a)(P,2),D=M[0],G=M[1],K=Object(a.useState)(!1),Q=Object(l.a)(K,2),U=Q[0],X=Q[1],Y=Object(a.useState)(!1),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(a.useState)(!1),ne=Object(l.a)(te,2),ae=ne[0],ie=ne[1],ce=Object(a.useState)(!1),re=Object(l.a)(ce,2),le=(re[0],re[1],function(){be.resetFields(),i(!1)}),se=function(){he.resetFields(),o(!1)},oe=function(){X(!0);var e=V;I.a.post(J+"jointranslation",{url:e}).then((function(){ee(!0),window.location.replace(J+e)})).catch((function(t){j.a.error({message:Object(N.jsx)(A,{type:"danger",children:"There is no such translation!"}),description:"There is no broadcast at the addsess '".concat(e,"'. Try to enter address again!"),placement:"bottomLeft"})})).finally((function(){return X(!1)}))},je=b.a.useForm(),be=Object(l.a)(je,1)[0],de=b.a.useForm(),he=Object(l.a)(de,1)[0],Oe={width:270,height:50,display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"1.1em",backgroundColor:"rgba(31, 31, 31, 0.5)"};return Object(N.jsx)("div",{className:"App",children:$?Object(N.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(N.jsx)(d.a,{className:"Spin",size:"large"})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(h.b,{style:{width:"100%",height:50,display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"rgb(31,31,31)",boxShadow:" 1px 1px 20px 0px rgba(0, 0, 0, 0.7)"},align:"end",children:[Object(N.jsxs)(_,{style:{fontSize:"1.6em",color:"#fff",fontWeight:500,padding:"10px 20px"},children:[Object(N.jsx)(S.a,{style:{fontSize:"1.5em"}}),"Live Coding"]}),Object(N.jsx)(O.a,{arrow:!0,placement:"bottomRight",overlay:B,trigger:["click"],onVisibleChange:function(e){ie(e)},children:Object(N.jsx)("div",{style:{margin:"0px 20px"},children:Object(N.jsx)(z.a,{toggle:ie,toggled:ae,rounded:!0,distance:"md",size:35})})})]}),Object(N.jsx)(h.b,{style:{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",fontSize:"1.3em"},children:Object(N.jsxs)(h.b,{align:"center",direction:"vertical",children:[Object(N.jsxs)(u.a,{size:"large",style:Oe,onClick:function(){return i(!0)},children:["START TRANSLATION",Object(N.jsx)(C.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5em"}})]}),Object(N.jsx)(A,{type:"secondary",children:"or"}),Object(N.jsxs)(u.a,{style:Oe,onClick:function(){return o(!0)},children:["JOIN TRANSLATION",Object(N.jsx)(v.a,{style:{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.5em"}})]})]})}),Object(N.jsx)(x.a,{title:"Start new translation",visible:n,onCancel:le,footer:[Object(N.jsx)(u.a,{onClick:le,disabled:D,children:"Close"},"back"),Object(N.jsx)(u.a,{className:"Button",type:"primary",htmlType:"submit",form:"create_translation",disabled:D,children:"Start"},"start")],children:D?Object(N.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"8em"},children:Object(N.jsx)(w.a,{})}):Object(N.jsxs)(b.a,{onFinish:function(){G(!0),I.a.post(J+"createtranslation",{name:y,type:E}).then((function(e){ee(!0),window.location.replace(J+e.data)})).catch((function(e){return j.a.error({message:Object(N.jsx)(A,{type:"danger",children:"Create translation error!"}),description:"Some error on server. Try to enter address again!\n"+e.message,placement:"bottomLeft"})})).finally((function(){return G(!1)}))},name:"create_translation",form:be,labelCol:{span:12},wrapperCol:{span:16},labelAlign:"left",children:[Object(N.jsx)(b.a.Item,{name:"Project Name",label:Object(N.jsx)(A,{style:{fontSize:"1.2em"},children:"Type some project name"}),rules:[{required:!0}],children:Object(N.jsx)(p.a,{value:y,onChange:function(e){return k(e.target.value)},allowClear:!0})}),Object(N.jsx)(b.a.Item,{name:"Project Type",label:Object(N.jsx)(A,{style:{fontSize:"1.2em"},children:"Choose project type"}),rules:[{required:!0}],children:Object(N.jsxs)(f.a,{placeholder:"Select a type of project",value:E,onChange:function(e){return R(e)},allowClear:!0,children:[Object(N.jsx)(f.a.Option,{value:"WEB",children:Object(N.jsx)(A,{children:"WEB"})}),Object(N.jsx)(f.a.Option,{value:"JAVA",disabled:!0,children:Object(N.jsx)(A,{children:"JAVA"})}),Object(N.jsx)(f.a.Option,{value:".Net",disabled:!0,children:Object(N.jsx)(A,{children:".Net"})}),Object(N.jsx)(f.a.Option,{value:"NodeJS",disabled:!0,children:Object(N.jsx)(A,{children:"Node JS"})})]})})]})}),Object(N.jsx)(x.a,{title:"Join to translation",visible:s,onOk:oe,onCancel:se,footer:[Object(N.jsx)(u.a,{onClick:se,disabled:U,children:"Close"},"back"),Object(N.jsx)(u.a,{className:"Button",type:"primary",htmlType:"submit",form:"join_translation",disabled:U,children:"Join"},"start")],children:U?Object(N.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"7.35em"},children:Object(N.jsx)(w.a,{})}):Object(N.jsx)(b.a,{onFinish:oe,name:"join_translation",form:he,labelCol:{span:9.5},wrapperCol:{span:20},children:Object(N.jsx)(b.a.Item,{name:"Translation Link",label:Object(N.jsx)(A,{style:{fontSize:"1.2em"},children:"Type translation`s link"}),rules:[{required:!0}],children:Object(N.jsx)(p.a,{value:V,onChange:function(e){return H(e.target.value)},addonBefore:"http://livecoding/",allowClear:!0,style:{width:470,marginTop:15}})})})}),Object(N.jsx)(T.a,{color:"#ffffff",type:"cobweb",bg:!0})]})})};r.a.render(Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(F,{})}),document.getElementById("root"))}},[[274,1,2]]]);
//# sourceMappingURL=main.f316d1f3.chunk.js.map