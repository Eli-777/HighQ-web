(this["webpackJsonphighq-web"]=this["webpackJsonphighq-web"]||[]).push([[17,21],{102:function(e,a,t){"use strict";var n=t(40),c=t(1),i=t.n(c);a.a=function(e){var a=e.name,t=e.id,c=e.value,l=e.onChange,r=e.image,m=Object(n.a)(e,["name","id","value","onChange","image"]);return i.a.createElement("div",{className:"formGroupInput"},i.a.createElement("div",{className:"form__group input"},i.a.createElement("label",{htmlFor:t,className:"form__label"},a),i.a.createElement("input",Object.assign({id:t,className:"form__input ".concat(r?"form__input-image":null," "),name:t,value:c||"",onChange:l},m))))}},103:function(e,a,t){"use strict";var n=t(40),c=t(1),i=t.n(c);a.a=function(e){var a=e.name,t=e.id,c=e.value,l=e.children,r=Object(n.a)(e,["name","id","value","children"]);return i.a.createElement("div",{className:"formSelectInput form__group input"},i.a.createElement("label",{htmlFor:t,className:"form__label"},a),i.a.createElement("div",{className:"select-wrapper"},i.a.createElement("select",Object.assign({name:t,id:t,className:"form__input",value:c,required:!0},r),i.a.createElement("option",{value:"default",disabled:!0},"\u8acb\u9078\u64c7",a),l)))}},112:function(e,a,t){"use strict";t.r(a);var n=t(49),c=t(5),i=t(33),l=t(1),r=t.n(l),m=t(23),o=t(24),u=t(18),d=t(102),s=t(103),b=t(57),f=t(16);a.default=function(e){var a=e.selectedPostCard,t=e.title,p=e.submitButton,v=e.edit,h=Object(l.useState)({media:"default",date:"",photo:"",link:""}),j=Object(i.a)(h,2),O=j[0],g=j[1],E=Object(l.useState)(),_=Object(i.a)(E,2),C=_[0],N=_[1],w=Object(m.c)(),k=Object(u.g)();function A(e){var a=e.target,t=a.value,i=a.name,l=a.files;if(l){var r=window.URL.createObjectURL(l[0]);N(r);var m=l[0],o=new FileReader;o.onload=function(e){g(Object(c.a)(Object(c.a)({},O),{},{photo:e.target.result}))},o.readAsDataURL(m)}g(Object(c.a)(Object(c.a)({},O),{},Object(n.a)({},i,t)))}return Object(l.useEffect)((function(){a&&g(a)}),[a]),r.a.createElement("div",{className:"adminAdd__page pageContainer max-width-big-desktop"},r.a.createElement("form",{className:"adminAdd__form",onSubmit:function(e){e.preventDefault(),O.media?O.date?O.photo?O.link?v?Object(f.h)().then((function(e){e.isConfirmed&&w(Object(o.h)({form:O,history:k}))})):w(Object(o.b)({form:O,setForm:g})):Object(f.a)("\u9023\u7d50"):Object(f.a)("\u7167\u7247"):Object(f.a)("\u65e5\u671f"):Object(f.a)("\u4f86\u6e90")}},r.a.createElement("h1",{className:"adminAdd__title"},t),r.a.createElement(s.a,{name:"\u4f86\u6e90",id:"media",value:O.media,onChange:A},r.a.createElement("option",{value:"fb"},"FB"),r.a.createElement("option",{value:"ig"},"IG")),r.a.createElement(d.a,{name:"\u65e5\u671f",id:"date",value:O.date,type:"date",onChange:A}),r.a.createElement(d.a,{name:"\u8cbc\u6587\u9023\u7d50",id:"link",value:O.link,onChange:A}),r.a.createElement("div",{className:"adminAdd__input-image"},r.a.createElement(d.a,{type:"file",accept:"image/*",name:"\u5716\u7247",id:"photo",image:!0,onChange:A}),O.photo?r.a.createElement("img",{src:C||O.photo,className:"adminAdd__preview-image",alt:"preview"}):null),r.a.createElement(b.a,{edit:p})))}},134:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),i=t(18),l=t(23),r=t(24),m=t(112),o=t(41);a.default=function(e){var a=Object(i.i)().id,t=Object(l.c)(),u=Object(l.d)((function(e){return e.postCard.selectedCard}));return Object(n.useEffect)((function(){t(Object(r.m)(a))}),[a,t]),c.a.createElement("div",null,u?c.a.createElement(m.default,{selectedPostCard:u,title:"\u7de8\u8f2f\u8cbc\u6587",submitButton:"\u5132\u5b58",edit:!0}):c.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=17.04d12a86.chunk.js.map