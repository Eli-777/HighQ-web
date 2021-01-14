(this["webpackJsonphighq-web"]=this["webpackJsonphighq-web"]||[]).push([[10],{128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var c=t(1),n=t.n(c),i=t(23),r=t(31),m=t(38),l=t(60);t(128);var s=function(e){var a=e.wishCard;return n.a.createElement("div",{className:"wishCard",id:a.id},n.a.createElement("h3",{className:"wishCard__id"},"ID\uff1a","true"===a.isPublic?a.name:"***"),n.a.createElement("p",{className:"wishCard__content"},a.text),n.a.createElement("div",{className:"wishCard__date"},"\u6642\u9593\uff1a",a.createTime))},o=t(49),u=t(5),d=t(33),h=t(45),_=t(16);t(129);var b=Object(i.b)(null,(function(e){return{addWishCardStart:function(a){e(Object(r.b)(a))}}}))((function(e){var a=e.addWishCardStart,t=Object(c.useState)({name:"",email:"",isPublic:"true",text:"",createTime:""}),i=Object(d.a)(t,2),r=i[0],m=i[1];function l(e){var a=e.target,t=a.value,c=a.name;m(Object(u.a)(Object(u.a)({},r),{},Object(o.a)({},c,t)))}return n.a.createElement("form",{className:"contact__wishForm",onSubmit:function(e){e.preventDefault(),r.name?r.text?""!==r.text.trim()?a({form:r,setForm:m}):Object(_.c)():Object(_.a)("\u7559\u8a00"):Object(_.a)("\u540d\u7a31")}},n.a.createElement("div",{className:"form__group input"},n.a.createElement("label",{htmlFor:"name",className:"form__label"},"\u540d\u7a31"),n.a.createElement("input",{id:"name",type:"text",className:"form__input",value:r.name,name:"name",onChange:l})),n.a.createElement("div",{className:"form__group input"},n.a.createElement("label",{htmlFor:"email",className:"form__label"},"E-mail"),n.a.createElement("input",{id:"email",type:"text",className:"form__input",value:r.email,name:"email",onChange:l})),n.a.createElement("div",{className:"form__group radio"},n.a.createElement("div",{className:"form__group--radio"},n.a.createElement("input",{id:"public",type:"radio",className:"form__input--radio",name:"isPublic",value:"true",onChange:l,checked:"true"===r.isPublic}),n.a.createElement("label",{htmlFor:"public",className:"form__label"},"\u516c\u958b\u767c\u8a00")),n.a.createElement("div",{className:"form__group--radio"},n.a.createElement("input",{id:"private",type:"radio",className:"form__input--radio",name:"isPublic",value:"false",onChange:l,checked:"false"===r.isPublic}),n.a.createElement("label",{htmlFor:"private",className:"form__label"},"\u533f\u540d\u767c\u8a00"))),n.a.createElement("div",{className:"form__group"},n.a.createElement("textarea",{name:"text",rows:"5",placeholder:"\u6211\u60f3\u8a31\u9858...",className:"form__textarea",value:r.text,onChange:l})),n.a.createElement("div",{className:"form__group"},n.a.createElement(h.a,{isFormButton:!0},"\u9001 \u51fa \u610f \u898b")))}));t(130);var f=function(e){var a=e.mediaName,t=e.account,c=e.website,i=e.icon;return n.a.createElement("li",{className:"contact__link"},n.a.createElement("p",null,a,"\uff1a",t),n.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(i,null)))},E=t(41);t(131);a.default=Object(i.b)((function(e){return{wishCards:e.wishCard.wishCards,isLoading:e.wishCard.isLoading}}),(function(e){return{fetchWishCardStart:function(){e(Object(r.k)())}}}))((function(e){var a=e.wishCards,t=e.fetchWishCardStart,i=e.isLoading;return Object(c.useEffect)((function(){t()}),[t]),n.a.createElement("div",{className:"contact pageContainer"},n.a.createElement("h1",{className:"title"},"\u806f\u7d61\u6211\u5011"),n.a.createElement("div",{className:"contact__wish"},n.a.createElement("h2",{className:"title-2"},"\u8a31\u9858\u6c60"),n.a.createElement("div",{className:"contact__wishContent"},n.a.createElement("img",{src:"https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",alt:"WishCards background",className:"contact__wishContent--background"}),n.a.createElement("div",{className:"contact__wishCardsContainer"},n.a.createElement("div",{className:"contact__wishCards max-width-big-desktop"},i?n.a.createElement(E.a,null):a.map((function(e){return n.a.createElement(s,{key:e.id,wishCard:e})}))))),n.a.createElement("div",{className:"contact__wishForms max-width-big-desktop"},n.a.createElement(b,null))),n.a.createElement("div",{className:"contact__socialMedia max-width-big-desktop"},n.a.createElement("h2",{className:"title-2"},"\u5408\u4f5c\u9080\u7d04"),n.a.createElement("p",{className:"contact__content"},"\u6709\u4efb\u4f55\u554f\u984c\u3001\u5408\u4f5c\u6d3b\u52d5\u9080\u7d04\u6b61\u8fce\u4f86\u4fe1\u6216\u79c1\u8a0aig",n.a.createElement("br",null),"\u4fe1\u7bb1\uff1afireguns0903@gmaiil.com"),n.a.createElement("ul",{className:"contact__links"},n.a.createElement(f,{mediaName:"FB",account:"HighQman",website:"https://www.facebook.com/HighQman",icon:m.a}),n.a.createElement(f,{mediaName:"IG",account:"HighQ_ig",website:"https://www.instagram.com/highq_ig/",icon:m.b}),n.a.createElement(f,{mediaName:"Tiktok",account:"highq0903",website:"https://www.tiktok.com/@highq0903?lang=en",icon:l.a}),n.a.createElement(f,{mediaName:"\u6296\u97f3",account:"highQ776",website:"https://www.facebook.com/HighQman",icon:l.a}),n.a.createElement(f,{mediaName:"YouTube",account:"\u807dHighQ\u8aaa\u5e79\u756b",website:"https://www.youtube.com/channel/UCimb03Z3R6F4nYJNAVOArGA/featured",icon:m.c}))))}))}}]);
//# sourceMappingURL=10.827f98ec.chunk.js.map