(this["webpackJsonpsimple-react-homeworks-from-ignat"]=this["webpackJsonpsimple-react-homeworks-from-ignat"]||[]).push([[0],[,,,function(e,a,t){e.exports={container:"Affairs_container__2Zm5V",all:"Affairs_all__2zMwD",high:"Affairs_high__35Vgp",middle:"Affairs_middle__bmkZb",low:"Affairs_low__1tkKH",closeBtn:"Affairs_closeBtn__2yBrX",filterBtn:"Affairs_filterBtn__1IyMn",gray:"Affairs_gray__GWm0g",red:"Affairs_red__2d_T3",orange:"Affairs_orange__2u1Ju",green:"Affairs_green__19PV5"}},,function(e,a,t){e.exports={header:"Header_header__m_U-_",link:"Header_link__2KhCm",active:"Header_active__3exQG",slideContent:"Header_slideContent__SjbAD",slideContainer:"Header_slideContainer__3pyrF",slide:"Header_slide__SDK0L",slideHeader:"Header_slideHeader__1ly1p"}},,,function(e,a,t){e.exports={container:"Message_container__C6YcV",ava:"Message_ava__lCeN4",messageItem:"Message_messageItem__47vBj",name:"Message_name__2Tz5b",message:"Message_message__e0FJu",time:"Message_time__3_H_u"}},,function(e,a,t){e.exports={container:"Greeting_container__2rEwv",input:"Greeting_input__2tmmW",error:"Greeting_error__3m4hu",skewBtn:"Greeting_skewBtn__3tw4O",purple:"Greeting_purple__2-ugi"}},,function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__10XLF",input:"SuperCheckbox_input__1X79W"}},function(e,a,t){e.exports={input:"SuperInputText_input__3t67D",errorInput:"SuperInputText_errorInput__3qTSv",error:"SuperInputText_error__2bIry"}},function(e,a,t){e.exports={default:"SuperButton_default__188lN",red:"SuperButton_red__3_Gf5",skewBtn:"SuperButton_skewBtn__NC72P"}},,,function(e,a,t){e.exports={App:"App_App__3b23q"}},function(e,a,t){e.exports={blue:"HW4_blue__1axgr",column:"HW4_column__3Wd3V"}},function(e,a,t){e.exports={span:"SuperEditableSpan_span__3P6zz"}},,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),i=(t(26),t(17)),o=t.n(i),s=t(1),u=t(8),m=t.n(u);var d=function(e){return r.a.createElement("div",{className:m.a.container},r.a.createElement("div",null,r.a.createElement("img",{src:e.avatar,alt:"",className:m.a.ava})),r.a.createElement("div",{className:m.a.messageItem},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.message},e.message),r.a.createElement("div",{className:m.a.time},e.time)))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Victoria",p="Hello! How are you?",E="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(d,{avatar:_,message:p,name:f,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},v=t(2),g=t(3),b=t.n(g);var k=function(e){var a="high"===e.affair.priority?b.a.high:"middle"===e.affair.priority?b.a.middle:"low"===e.affair.priority?b.a.low:b.a.all,t="".concat(b.a.closeBtn," ").concat(b.a.gray);return r.a.createElement("div",{className:b.a.container},r.a.createElement("div",{className:a},e.affair.name,r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:t},"X")))};var C=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t="".concat(b.a.gray," ").concat(b.a.filterBtn," "),n="".concat(b.a.red," ").concat(b.a.filterBtn," "),l="".concat(b.a.orange," ").concat(b.a.filterBtn," "),c="".concat(b.a.green," ").concat(b.a.filterBtn," ");return r.a.createElement("div",null,a,r.a.createElement("button",{className:t,onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{className:n,onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{className:l,onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:c,onClick:function(){return e.setFilter("low")}},"Low"))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(N),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(v.a)(c,2),o=i[0],s=i[1],u=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"==e.priority})):"middle"===a?e.filter((function(e){return"middle"==e.priority})):"low"===a?e.filter((function(e){return"low"==e.priority})):e}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(C,{data:u,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(20),y=t(10),O=t.n(y),S=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=l?O.a.error:O.a.input,o="".concat(O.a.skewBtn," ").concat(O.a.purple);return r.a.createElement("div",{className:O.a.container},r.a.createElement("input",{value:a,onChange:t,className:i}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n,className:o},"add"),r.a.createElement("span",null,c))},x=t(29),A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),i=c[0],o=c[1],s=Object(n.useState)(null),u=Object(v.a)(s,2),m=u[0],d=u[1],_=a.length,f=function(){var e=i.trim();e?(alert("Hello,  ".concat(i,"  !")),t(Object(x.a)(),e)):d("Name is required"),o("")};return r.a.createElement(S,{name:i,setNameCallback:function(e){d(null),o(e.currentTarget.value)},addUser:f,error:m,totalUsers:_})};var B=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:t,addUserCallback:function(e,a){l([{_id:e,name:a}].concat(Object(w.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},H=t(6),T=t(13),F=t.n(T),I=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,i=(e.className,e.spanClassName),o=Object(H.a)(e,I),s="".concat(F.a.error," ").concat(i||""),u="".concat(c?F.a.errorInput:""," ").concat(F.a.input);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},o)),c&&r.a.createElement("span",{className:s},c))},M=t(18),W=t.n(M),G=t(14),J=t.n(G),D=["red","className"],U=function(e){var a=e.red,t=(e.className,Object(H.a)(e,D)),n="".concat(a?J.a.red:J.a.default," ").concat(J.a.skewBtn," ");return r.a.createElement("button",Object.assign({className:n},t))},K=t(12),V=t.n(K),X=["type","onChange","onChangeChecked","className","spanClassName","children"],q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=(e.className,e.spanClassName,e.children),l=Object(H.a)(e,X),c="".concat(V.a.checkbox," ").concat(V.a.input?V.a.input:"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:c},l)),n&&r.a.createElement("span",{className:V.a.spanClassName},n))};var z=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",i=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},o=Object(n.useState)(!1),s=Object(v.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:i,error:c}),r.a.createElement(U,{red:!0,onClick:i},"delete "),r.a.createElement(q,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(q,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},L=t(19),Z=t.n(L),Y=["autoFocus","onBlur","onEnter","spanProps"],Q=["children","onDoubleClick","className"],R=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(H.a)(e,Y),i=Object(n.useState)(!1),o=Object(v.a)(i,2),s=o[0],u=o[1],m=l||{},d=m.children,_=m.onDoubleClick,f=m.className,p=Object(H.a)(m,Q),E="".concat(Z.a.span," ").concat(f||"");return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),a&&a(e)},onEnter:function(){u(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),_&&_(e)},className:E},p),d||c.value))};function $(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ee(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}$("test",{x:"A",y:1});ee("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(R,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(U,{onClick:function(){$("editable-span-value",t)}},"save"),r.a.createElement(U,{onClick:function(){l(ee("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var te=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(j,null),r.a.createElement(B,null),r.a.createElement(z,null),r.a.createElement(ae,null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var re=function(){return r.a.createElement("div",null)};var le=function(){return r.a.createElement("div",null)},ce="/pre-junior",ie="/junior",oe="/junior+";var se=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:ce})}),r.a.createElement(s.b,{path:ce,element:r.a.createElement(te,null)}),r.a.createElement(s.b,{path:ie,element:r.a.createElement(re,null)}),r.a.createElement(s.b,{path:oe,element:r.a.createElement(le,null)}),"// add routes",r.a.createElement(s.b,{path:"/*",element:r.a.createElement(ne,null)})))},ue=t(5),me=t.n(ue),de=t(7);var _e=function(){return r.a.createElement("div",{className:me.a.header},r.a.createElement("div",{className:me.a.slideContainer},r.a.createElement("div",{className:me.a.slide},r.a.createElement("div",{className:me.a.slideContent}),r.a.createElement(de.b,{to:ce,className:function(e){return e.isActive?me.a.active:me.a.link}},"Pre-junior"),r.a.createElement(de.b,{to:ie,className:function(e){return e.isActive?me.a.active:me.a.link}},"Junior"),r.a.createElement(de.b,{to:oe,className:function(e){return e.isActive?me.a.active:me.a.link}},"Junior+"))))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(de.a,null,r.a.createElement(_e,null),r.a.createElement(se,null)))};var pe=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.58601993.chunk.js.map